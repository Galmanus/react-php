<div id="header" align="center">
  <img src="hhttps://media.giphy.com/media/dZX3AduGrY3uJ7qCsx/giphy.gif" width="300"/>
</div>


## React-PHP CRUD Application

### Introduction
Welcome to the React-PHP CRUD application repository. This project is an integration of React and PHP to create a simple yet effective CRUD (Create, Read, Update, Delete) application. It's designed as a junior-level task to demonstrate fundamental web development skills using these technologies.

### Technologies Used
- **Frontend**: React.js
- **Backend**: PHP
- **Database**: MySQL
- **Styling**: CSS

### Features
- A dynamic interface built with React.js.
- Server-side processing with PHP.
- Data management in a MySQL database.
- CRUD operations: Adding, viewing, updating, and deleting entries.

### Getting Started
To run this application on your local machine, ensure you have MySQL, Node.js, and PHP installed. Follow these steps:

1. **Set Up the Client**:
   - Navigate to the `client` directory.
   - Run `npm install` to install dependencies.
   - Execute `npm run dev` to start the React application.

2. **Set Up the Server**:
   - Move to the `server` directory.
   - Run `php -S localhost:8000` to start the PHP server.

3. **Database Configuration**:
   - Create a MySQL database named `scandiweb`.
   - Use the provided SQL query to create a `products` table:

     ```sql
     CREATE TABLE products (
         SKU varchar(255),
         Name varchar(255),
         Price int,
         Type varchar(255),
         Value varchar(255),
         PRIMARY KEY (SKU)
     )
     ```

### Contributions
This project is open for contributions and suggestions. Feel free to fork the repo, create a feature branch, and submit your pull requests for review!

---

This description provides a clear overview of the project, its technologies, features, and how to get started with it. You can customize it further to match your project's specifics or to add more details as needed. Would you like any other help with your project documentation?
