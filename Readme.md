# Student API

## Overview
This is a simple RESTful API for managing student records with basic CRUD operations.

## Endpoints
- **GET /students**: Retrieve a list of all students.
- **GET /students/{id}**: Retrieve details of a student by ID.
- **POST /students**: Add a new student.
- **PUT /students/{id}**: Update an existing student by ID.
- **DELETE /students/{id}**: Delete a student by ID.

## Requirements
- Node.js
- npm

## Setup

1. Clone the repository:
    ```bash
    git clone <repository_url>
    cd student-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the server:
    ```bash
    node app.js
    ```

4. The server will run on `http://localhost:3000`.

## Deployment

Follow the steps below to deploy the API to Azure Web App Service.

1. Create an Azure Web App service in the Azure portal.
2. Set up GitHub Actions for CI/CD in the `.github/workflows` folder.

## Cleanup

After testing, delete the Azure resources to minimize costs.
