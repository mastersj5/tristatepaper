# Development Log

*This document tracks the work done on the Tristate Paper website repository.*

## **Technologies/Dependencies**

### Tech Stack:

#### Frontend
- React
- HTML/CSS (or a CSS framework like Tailwind CSS, Bootstrap, or Material-UI)

#### Backend
- Node.js
- Express.js
- MongoDB

### Dependencies

Frontend
react: Core React library
react-dom: For rendering React components in the browser
react-router-dom: For handling client-side routing
axios or fetch: For making HTTP requests to the backend API
Additional libraries as needed (e.g., for state management, form handling, UI components, etc.)
Backend
express: Web framework for Node.js
mongoose: Object Document Mapper (ODM) for interacting with MongoDB
cors: Middleware for enabling Cross-Origin Resource Sharing
dotenv: For loading environment variables from a .env file
body-parser or similar middleware: For parsing incoming request bodies
Additional libraries as needed (e.g., for authentication, file uploads, etc.)
Development Tools

Package Manager: npm or yarn
Version Control: Git
Code Editor: VSCode (or your preferred editor)
Deployment Platform: DigitalOcean (or another suitable platform)

## Entries

### [Date: 2024-09-24]
**Task:**
- Setup basic structure of repository and simple, locally-hosted landing page.

**Details:**
1. Project Setup
    - Create a GitHub Repository (already completed).
    - Set up MERN project in VSCode:
        - Create the basic project structure:
            - `client` folder for the React frontend
            - `server` folder for the Node.js/Express backend
            - `z_misc` folder for miscellaneous content ex. `DevLog.md` ("z_" for sorting folders)
    - Install dependencies:
        - In the client folder, ran `npm install react react-dom`
        - In the server folder, ran `npm install express mongoose cors dotenv`
2. Basic Frontend Structure
    - Create basic components:
        - Inside `client/src`, start creating basic React components based on Figma design (e.g., Header, Footer, Navigation, Hero section, About section, etc.).
        - Use functional components and JSX to structure layout.
        - Focus on getting the basic structure and hierarchy in place, referencing wireframes.

**Status:**
- Completed / In Progress / Pending

---

### [Date: YYYY-MM-DD]
**Task:**
- Description of the task completed.

**Details:**
- Additional details or notes about the task.

**Status:**
- Completed / In Progress / Pending

---

## Summary
- Brief summary of the overall progress and any important notes.
