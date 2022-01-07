<!-- omit in toc -->
# Project: Around the U.S. Back End
## About the Project
**Around the U.S. - Back End** is a project to create a Node.js server with REST API endpoints to serve all the data requests of the [Around the U.S. - Frontend React Project](https://github.com/5hraddha/around-react). 

## Technologies and Standards Used
**The technologies that have been used are:**
1. Node.js
2. Express Framework (for development)
3. Postman (for testing API endpoints)
4. EsLint

### ![node-icon](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
- **Node** (or more formally *Node.js*) is an *open-source*, *cross-platform* runtime environment that allows developers to create all kinds of server-side tools and applications in JavaScript. 
- *Node. js* is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. 
- It's used for traditional web sites and back-end API services.

### ![express-icon](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
- **Express** is the most popular Node web framework, and is the underlying library for a number of other popular Node web frameworks. 
- It provides mechanisms to:
  - Write handlers for requests with different HTTP verbs at different URL paths (routes).
  - Integrate with "view" rendering engines in order to generate responses by inserting data into templates.
  - Set common web application settings like the port to use for connecting, and the location of templates that are used for rendering the response.
  - Add additional request processing "middleware" at any point within the request handling pipeline.

### ![postman-icon](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)
- **Postman** is an API client that makes it easy for developers to create, share, test and document APIs. 
- This is done by allowing users to create and save simple and complex HTTP/s requests, as well as read their responses.

### ![eslint-icon](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
- **ESLint** is an open-source Javascript linting utility used to find problematic patterns or code that doesn’t adhere to certain style guidelines. 
- We are using [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

## Directory Structures
The project has the following directory structure:  
| Directory 	| Purpose 	|
|---	|---	|
| `/data` 	| Contains JSON files to temporarily emulate database integration. 	|
| `/routes` 	| Contains routing files. 	|
| `/controllers` 	| Contains all the route handler callbacks. 	|
| `/utils` 	| Contains all the helper methods for general purpose tasks. 	|

## REST API Endpoints
| Request 	| Response 	| Error 	|
|---	|---	|---	|
| GET `http://localhost:3000/users` 	| JSON list of all users 	| `500` — Internal server error response. Accompanied by the message: *"An error has occurred on the server"*. 	|
| GET `http://localhost:3000/users/8340d0ec33270a25f2413b69` 	| JSON of a user with an ID passed after `/users`. 	| `404` - The server can not find the requested resource. Accompanied by the message: *"User ID not found".*<br>`500` - Internal server error response. Accompanied by the message: *"An error has occurred on the server".* 	|
| GET `http://localhost:3000/cards` 	| JSON list of all cards 	| `500` - Internal server error response. Accompanied by the message: *"An error has occurred on the server"*. 	|
| Non-existent address or localhost:3000 	| N/A 	| `404` - The server can not find the requested resource. Accompanied by the message: *"Requested resource not found"*. 	|

## Running the Project  
| Command 	| Purpose 	|
|---	|---	|
| `npm run start` 	| to launch the server 	|
| `npm run dev` 	| to launch the server with the hot reload feature 	|


