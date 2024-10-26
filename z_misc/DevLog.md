# Development Log

*This document tracks the work done on the Tristate Paper website repository.*

## Table of Contents

1. [Technologies/Dependencies](#technologiesdependencies)
    - [Tech Stack](#tech-stack)
        - [Frontend](#frontend)
        - [Backend](#backend)
    - [Dependencies](#dependencies)
        - [Frontend](#frontend-1)
        - [Backend](#backend-1)
        - [Development Tools](#development-tools)
2. [Entries](#entries)
    - [Date: 2024-09-21](#date-2024-09-21)
    - [Date: 2024-09-22 to 2024-09-23](#date-2024-09-22-to-2024-09-23)
    - [Date: 2024-10-26](#date-2024-10-26)
    - [Empty Template Entry](#date-yyyy-mm-dd)
3. [Summary](#summary)
4. [Folder Structure](#folder-structure)

## **Technologies/Dependencies**

### Tech Stack:

- #### Frontend
    - React
    - HTML/CSS (or a CSS framework like Tailwind CSS, Bootstrap, or Material-UI)

- #### Backend
    - Node.js
    - Express.js
    - MongoDB

### Dependencies:

- #### Frontend
    - `react`: Core React library
    - `react-dom`: For rendering React components in the browser
    - `react-router-dom`: For handling client-side routing
    - `axios` or `fetch`: For making HTTP requests to the backend API
    - Additional libraries as needed (e.g., for state management, form handling, UI components, etc.)

- #### Backend
    - `express`: Web framework for Node.js
    - `mongoose`: Object Document Mapper (ODM) for interacting with MongoDB
    - `cors`: Middleware for enabling Cross-Origin Resource Sharing
    - `dotenv`: For loading environment variables from a .env file
    - `body-parser` or similar middleware: For parsing incoming request bodies
    - Additional libraries as needed (e.g., for authentication, file uploads, etc.)

- #### Development Tools
    - **Package Manager:** npm
    - **Version Control:** Git
    - **Code Editor:** VSCode
    - **Deployment Platform:** DigitalOcean

## Entries

### [Date: 2024-09-21]
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
        - Inside `client/src`, starting to create basic React components based on Figma design (e.g., Header, Footer, Navigation, Hero section, About section, etc.).
        - Using functional components and JSX to structure layout.
        - Focusing on getting the basic structure and hierarchy in place, referencing wireframes.
3. Basic Backend Setup
    - Server file:
        - In the `server` folder, created an `index.js` file.
        - Setting up a basic Express server with necessary middleware (e.g., `cors`, `body-parser`).
        - Setting up MongoDB instance separately on a cloud provider.
        - Connecting to MongoDB database instance.
4. Connect Frontend and Backend
    - API Routes
        - In the `server` folder, creating routes for handling data fetching and other API requests.
        - Use `fetch` or a library like Axios in React components to make requests to these API endpoints.
5. Version Control with Git
    - Regular Commits with descriptive commit messages (good practice in case anything breaks and needs to be referenced).
    - Pushing to GitHub remote repository to keep it in in sync and create backups.

Instead of fully coding out each and every component, setting up the express server with middleware that I have not used before along with a mongoDB database, and then connecting the frontend and backend with API routes, how can I start testing and visualizing my components right away since much of this is new to me?

The answer? Storybook.

- Ran `npx sb init` in the `client` folder
- Used Vite builder over Webpack 5 since it is more modern wheras Webpack is better for older browsers not using ES Modules
    - [Vite vs Webpack](https://dev.to/sidramaqbool/vite-vs-webpack-which-one-and-why-for-your-next-react-app-the-battle-of-bundlers-c6b)
- Created new folder `src/stories` to build components in
- Best to hardcode sample data and potentially create mock API calls (with `msw` Mock Service Worker)
- To run Storybook manually, run `npm run storybook` in the `client` folder. CTRL+C to stop.
**Gradually Integrate Backend:**
- *Set up a Basic Express Server:* Once ready, create a simple Express server in `server` folder. Start with basic routing and serving static files (the built React app).
- *Connect to MongoDB:* If needing to test data persistence, set up a local or cloud-based MongoDB instance and connect it to the Express server.
- *Build API Endpoints Gradually:* As I progress, add API endpoints to the server to fetch and update data.

- Currently creating basic frontend react components and testing them on the following website:
- [Storybook Playground](http://localhost:6006/?path=/story/example-button--primary&onboarding=true)

---

### [Date: 2024-09-22 to 2024-09-23]
**Task:**
- Update and refine project setup and initial components.

**Details:**
1. Refine Project Structure
    - Ensure the `client` and `server` folders are properly organized.
    - Update `package.json` files in both `client` and `server` folders to include necessary scripts and dependencies.

2. Enhance Frontend Components
    - Continue building out React components in the `client/src` directory.
    - Implement basic styling and layout using CSS or a CSS framework.

3. Backend Improvements
    - Add more routes and middleware to the Express server.
    - Set up basic CRUD operations for MongoDB collections.

4. Testing and Debugging
    - Use Ladle to test and visualize React components.
    - Debug any issues with the initial setup and components.

- Further testing with Storybook and moving over to Ladle: 

https://storybook.js.org/ 

https://ladle.dev/ 

- Due to the extensive potential timesinks of just setting up Storybook for testing react components, it is not worthwhile as a solo developer to waste that time. 

- After researching and digging across forums online, the much more lightweight component testing tool called Ladle, is a much better choice for my current needs. It is effective at prioritizing efficiency with simplicity and focus on speed instead of getting me bogged down in the configuration complexities. 

- Start the ladle server with `npx ladle serve` once in `client/my-ladle`.

- Used the following set of commands in `client` dir for basic setup:
```
mkdir my-ladle
cd my-ladle
npm init --yes
npm install @ladle/react react react-dom
mkdir src
echo "export const World = () => <p>Hey</p>;" > src/hello.stories.tsx
npx ladle serve
```


**Status:**
- In Progress

- Switching over to Ladle for component testing instead of Storybook due to the extensive configuration/setup timesink of Storybook. 

---

### [Date: 2024-10-26]
**Task:**
- Fully setup the basic files and functionalities to get the React app up and running with npm start.

**Details:**
Complete the following files:
- package.json: This file should include the necessary dependencies and scripts to start the React application.

- src/index.js: The entry point for the React application.

- App.jsx: The main component of the React application.

- public/index.html: The HTML template for the React application.

**Status:**
- Completed

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

## Folder Structure
![Folder Structure Image](./img/folder-structure.png)