# Access control

### This document aims to explore access control for the following sub-services:
- The information display endpoint
- The information display management page
- The information display editor
---
### The information display endpoint
This is the endpoint used by devices to render relevant data. 
It functions like this:
```mermaid
sequenceDiagram
loop  Page fetch
Display->>Show-IT: Fetch pages
Show-IT->>Database: Fetch pages
Database->>Show-IT: Pages
Show-IT->>Display: Pages
end
```
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
### The information display management page
This page is used to create new displays. Here you can generate new API keys and configure displays.
The authentication on this endpoint will function like this:
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


