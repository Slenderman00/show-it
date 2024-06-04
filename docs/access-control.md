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
Show-IT->>Display: Pages
end
```
To secure this traffic a API-token system must be implemented, All displays will be given an API-token that must be used to access a presentation. 
Like this:
```mermaid
graph TD
A[Client] -- Token --> B{Is API-token valid}
B -- NO --> C[Return 500 access denied]
B -- YES --> D[Return pages]
D --Pages--> A
D --> E((Database))
E --> D
```
### The information display management page
This page is used to create new displays. Here you can generate new API keys and configure displays.
