# -iAppsData

# HRMS Portal

## Description

This project is a **Human Resource Management System (HRMS)** built using the **MERN stack** (MongoDB, Express, React, Node.js) with **Material UI** for design. The system includes basic HRMS functionalities such as managing employees, departments, positions, leave management, and more.

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: React.js, Material UI
- **Database**: MongoDB (for storing employees, departments, leave data)
- **Design**: Material UI components for a sleek and responsive design

## Installation and Setup

1. Clone the repository

2. Install dependencies for both backend and frontend:
    ```bash
    cd backend
    npm install

    cd ../frontend
    npm install
    ```

3. Set up your environment variables:
   Create a `.env` file in the root directory of the backend and include:
    ```

4. Run the backend server:
    ```bash
    cd backend
    npm start
    ```

5. Run the frontend:
    ```bash
    cd frontend
    npm start
    ```

6. Access the application at `http://localhost:3000`.

## Database Structure

The HRMS portal includes the following collections:
- **Employees**: Stores employee details.
- **Departments**: Stores department details.
- **Leave Management**: Stores leave requests and their statuses.

