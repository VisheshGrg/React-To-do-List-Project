# React-To-do-List-Project

## Scripts
To run the project in the local environment use following scripts:

### npm install
Open new terminal in the frontend directory and run this command for both frontend and backend directories in order to install all the dependencies

### npm start
Start the frontend with this command in the localhost. Go to [http://localhost:3000](http://localhost:3000) in the browser.

### node main.js
Open new terminal in the backend directory and run this command in order to run the backend of the project.

## Database
Mongodb is used as the database and database is deployed on mongodb Atlas on AWS cloud storage,

### npm i mongoose
Open new terminal and run the above command to install mongoose in the system.

### Schemas
Two Schemas are used for this project, one for user and other for todos.

### Run application
If the connection with the database is successfull, then a proper message is displayed in the terminal other wise it gives error.

## Authentication Flow

### User Registration
User have to enter name, email and passoword for registering. Email should be unique else an error message is popped on the screen with the help of 'react-toastify'. Validations for password and names are also added. Password is hashed with the help of bcrypt and stored in database.

### User Login
User can login with the unique email and password. If the email doesnot match an error messgae is popped up on the screen else token is generated in the localstorage and redirected to todos page.

### User Signout
User can signOut, this removes the token from the localstorage and he/she is redirected to home page.

### Authentication token
JWT Tokens is used for the authentication purpose and is automatically generated when the user login or register.

### Todos
If someuser tries to access the the restricted part dof the code then with the help of auth middleware a proper error message is popped up on the screen.

## Security measures

### Password security
Enforced password complexity rules, stored passwords securely using strong hashing algorithms (bcrypt).

### Input validation
Sanitized and validated all user inputs to prevent common vulnerabilities like SQL injection, cross-site scripting (XSS), and command injection. 

### Generate token
A token is generated on logging in or registering which is used to authentication purpose.

### Unrestricted Access
A proper error message is displayed when a user tried to access restriced part of the code. For eg. if the user is not logged in and still tries to access the todos page then error message will be popped up.

### Error handeling
Customized error messages and avoided exposing sensitive information in error responses. Implemented centralized error logging to monitor and respond to issues proactively.