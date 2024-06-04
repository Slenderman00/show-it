# Access control

### This document aims to explore access control for the following sub-services:
- Design philosophy
- The information display endpoint
- User authentication
---
## Glossary
### JSON Web Token
A JSON Web Token also known as a JWT is a base64 encoded string that contains some arbitrary JSON data and a signature. If the server is able to reproduce the signature from the data then the data has not been tampered with.
### Application Programming Interface
Application Programming Interface also known as an API refers to all endpoints used internally by the client to communicate with the server.
### Flow chart
A Flow chart is a diagram that visualizes a logical process.

##  Design philosophy:
Our goal with the authentication architecture is to find a design that consumes as few resources per request as possible therefor we are using we are using JSON Web Tokens and caching.
This allows us to run multiple parallel instances of the service without overloading the database,
this is favorable since it helps avoiding database related race conditions and other challenges that comes with having multiples of the same database.



## The information display endpoint
This is the endpoint used by devices to render relevant data. 
It functions like this:
```mermaid
sequenceDiagram
loop  Page fetch
Display->>Show-IT: Fetch pages
Show-IT-->>Display: Pages
end
loop Database fetch: Every
Show-IT->>Database: Fetch pages
Database-->>Show-IT: Pages
end
```
> Note: The Show-IT server periodically fetches data and caches it to reduce strain on the database.

To secure this traffic a API-token system must be implemented, All displays will be given an API-token that must be used to access a presentation. 
Like this:
```mermaid
graph TD
A[Client] -- Token --> B{Is API-token valid?}
B -- NO --> C[Return 500 access denied]
B -- YES --> D[Return pages]
D --Pages--> A
D --> E((Database))
E --> D
```


## User authentication
Authentication on all user endpoints will function like this:
#### Login
```mermaid
graph TD
A[User] -- Login information --> B{Is Login information valid?}
B -- Username --> C((DATABASE))
C -- Hash --> B
B -- Valid --> D[JWT-generator]
B -- Invalid: 500 --> A
D -- Fetch JWT key --> E(secret_key.txt)
E -- Key --> D
D -- Valid JWT --> A
```
#### Request verification
```mermaid
sequenceDiagram
Client->>Show-IT: JWT and Request
Show-IT-->>Client: Response
```
> A typical request.
#### Request verification flow chart
```mermaid
graph TD
A[Client] -- Request and JWT --> B{Is JWT signature valid?}
B-->C(secret_key.txt)
C-->B
B-- Valid -->E{Does the request require DATABASE?}
B-- Invalid: 500 --> A
E -- No --> O[Data: 200]
O -- Data: 200 --> A
E -- Yes --> G((Database))
G -- Data --> O
```
> Note: we only fetch data from the database if necessary
> This allows the application to scale more easily. 


