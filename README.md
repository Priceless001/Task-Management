# API Documentation

## Overview
This API provides endpoints for user authentication and task management. It allows users to register, log in, and manage tasks such as creating new tasks. The API uses JSON Web Tokens (JWT) for authentication and follows RESTful principles.

## Features
- **User Authentication:**
  - User registration
  - User login with JWT token generation
- **Task Management:**
  - Create new tasks

## Base URL
```
http://localhost:3000/api
```

## Authentication
This API uses Bearer Token authentication for secured endpoints. After logging in, include the token in the `Authorization` header for authenticated requests:

```
Authorization: Bearer <your-token>
```

## Endpoints

### 1. User Authentication

#### **Register User**
**POST** `/users/register`

Registers a new user.

**Request Body:**
```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

**Response:**
- **201 Created**
```json
{
  "message": "User created successfully",
  "user": {
    "id": "string",
    "username": "string",
    "email": "string"
  }
}
```
- **400 Bad Request**
```json
{
  "error": "Validation error message"
}
```

#### **Login User**
**POST** `/users/login`

Authenticates a user and returns a JWT token.

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**
- **200 OK**
```json
{
  "token": "string"
}
```
- **401 Unauthorized**
```json
{
  "message": "Invalid credentials"
}
```
- **404 Not Found**
```json
{
  "message": "User not found"
}
```

### 2. Task Management

#### **Create Task**
**POST** `/tasks`

Creates a new task. Requires authentication.

**Request Headers:**
```text
Authorization: Bearer <your-token>
```

**Request Body:**
```json
{
  "title": "string",
  "description": "string",
  "dueDate": "ISO 8601 datetime",
  "assignedTo": "string"
}
```

**Response:**
- **201 Created**
```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "dueDate": "ISO 8601 datetime",
  "assignedTo": "string",
  "createdBy": "string"
}
```
- **400 Bad Request**
```json
{
  "error": "Validation error message"
}
```

## Running the Application

### Prerequisites
1. **Node.js**: Ensure Node.js is installed.
2. **Dependencies**: Install dependencies by running:
   ```bash
   npm install
   ```

### Environment Variables
Create a `.env` file in the root directory and add the following variables:
```
JWT_SECRET=your_jwt_secret
PORT=3000
```

### Start the Server
Run the following command to start the server:
```bash
npm start
```

The server will be available at `http://localhost:3000`.

## Testing with Swagger
This API is documented with Swagger. You can access the Swagger UI at:
```
http://localhost:3000/api-docs
```

### Authorizing Swagger Requests
1. Click the **Authorize** button in Swagger UI.
2. Enter the Bearer token received from the `/users/login` endpoint in this format:
   ```
   Bearer <your-token>
   ```

## Dependencies
- `express`: Web framework for Node.js
- `bcrypt`: For password hashing
- `jsonwebtoken`: For JWT authentication
- `sequelize`: ORM for database interaction

## License
This project is licensed under the MIT License.

