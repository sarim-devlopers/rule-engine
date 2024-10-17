
# Rule Engine with AST
**Author:** Sarim Khan 
**Date:**   17/10/2024

## Introduction
This is a simple **Rule Engine** application built with **React** and in backend **Express**. The application allows users to input a rule and user data, send it to the backend for evaluation, and get the result (eligible or not eligible). The design has been enhanced with a sleek background and modern UI elements to provide a better user experience.

## Features
- User input form for entering age, department, salary, and experience.
- Text area for inputting custom rules.
- Sends data to a backend server for evaluation.
- Displays whether the user is eligible based on the rule evaluation.
- Responsive design with a modern background and user interface elements.
- Neon hover effects on the buttons and an attractive layout.

## Screenshots
![imageRule](https://github.com/user-attachments/assets/0a8626e1-47c4-4937-a936-7f02a014ce56)


## Installation

### Prerequisites
To run this application, you need to have the following installed:
- [Node.js](https://nodejs.org/en/) (v12+)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)

### Installation Steps
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/sarim-devlopers/rule-engine
   ```

2. Navigate into the project directory:
   ```bash
   cd rule-engine
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```
   or, if you're using `yarn`:
   ```bash
   yarn install
   ```

## How to Run the App
To run the app in development mode, execute:
```bash
npm start
```
This will open the app in the browser at [http://localhost:3000](http://localhost:3000). The page will reload if you make edits, and you will see any lint errors in the console.



## Backend Server
The app sends the user's rule and data to a backend server for evaluation. Ensure your backend server is running on [http://localhost:5000](http://localhost:5000) (or update the fetch URL if you have a different endpoint).
### Installation Steps
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/sarim-devlopers/rule-engine
   ```

2. Navigate into the project directory:
   ```bash
   cd backend
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```
   or, if you're using `yarn`:
   ```bash
   yarn install
   ```

## How to Run the backend
To run the app in development mode, execute:
```bash
node server.js
```
The backend expects a POST request at `/evaluate` with the following structure:
```json
{
  "rule": "string",
  "userData": {
    "age": "number",
    "department": "string",
    "salary": "number",
    "experience": "number"
  }
}
```
The server should return a response in the following format:
```json
{
  "result": true // or false
}
```

## Project Structure
```
rule-engine-app/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── hero-background.jpg  # Background image
│   ├── components/
│   │   └── App.js               # Main React component
│   ├── App.css                  # Styling for the app
│   └── index.js                 # Entry point for the app
├── package.json                 # Project metadata and dependencies
└── README.md                    # You are here!


