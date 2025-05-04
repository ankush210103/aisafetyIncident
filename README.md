# AI Safety Incident Log API

A RESTful API for logging and managing AI safety incidents, built with TypeScript, Express.js, and MongoDB.

## Features

- Create new AI safety incidents
- Retrieve all incidents
- Get a specific incident by ID
- Delete an incident

## Technologies

- TypeScript
- Express.js
- MongoDB (with Mongoose ODM)
- Node.js

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install



Start the development server:

bash
npm run dev
Or build and run in production:

bash
npm run build
npm start
Database Setup
The application will automatically:

Seed initial sample data (2 incidents) if the collection is empty

API Endpoints
1. Create an incident
Method: POST

URL: /incidents

Body:

json
{
  "title": "New Incident Title",
  "description": "Detailed description here.",
  "severity": "Medium"
}
Example:

bash
curl -X POST -H "Content-Type: application/json" -d '{"title":"Test","description":"Test desc","severity":"High"}' http://localhost:3000/incidents
2. Get all incidents
Method: GET

URL: /incidents

Example:

bash
curl http://localhost:3000/incidents
3. Get a specific incident
Method: GET

URL: /incidents/:id

Example:

bash
curl http://localhost:3000/incidents/64f1a2b3c4d5e6f7a8b9c0d1
4. Delete an incident
Method: DELETE

URL: /incidents/:id

Example:

bash
curl -X DELETE http://localhost:3000/incidents/64f1a2b3c4d5e6f7a8b9c0d1
Testing
To run tests:

bash
npm test
Design Decisions
TypeScript: Used for type safety and better developer experience.

MongoDB: Chosen for flexibility and ease of use with Node.js.

Mongoose: Provides schema validation and type definitions.

Modular Structure: Separated concerns with controllers, services, and models.

Automatic Seeding: Initial data is seeded if the database is empty.

Error Handling: Basic error handling for common scenarios.


## Running the Application

1. Install dependencies:
   ```bash
   npm install
Start MongoDB (make sure it's running locally or update the connection string)

Start the development server:

bash
npm run dev
Test the API endpoints using curl or Postman as shown in the README examples.

This implementation provides a clean, well-structured API that meets all the requirements of the assignment, with proper TypeScript typing, error handling, and database integration.