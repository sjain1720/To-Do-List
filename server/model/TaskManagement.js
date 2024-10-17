import mysql from 'mysql2';

// Create a connection to the database
const TaskManagement = mysql.createConnection({
    host: 'localhost',
    user: 'root',          // Replace with your MySQL username
    password: 'password',  // Replace with your MySQL password
    database: 'your_db_name' // Replace with your database name
});

// Connect to the database
TaskManagement.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        process.exit(1);
    }
    console.log('Connected to MySQL Database');
});

// SQL query to create the tasks table (similar to Mongoose schema)
const createTaskTable = `
CREATE TABLE IF NOT EXISTS tasks (
    task_id INT AUTO_INCREMENT PRIMARY KEY,
    task_name VARCHAR(255) NOT NULL,
    status ENUM('Pending', 'In-Progress', 'Completed') DEFAULT 'In-Progress'
);
`;

// Execute the query to create the table
TaskManagement.query(createTaskTable, (err, result) => {
    if (err) {
        console.error('Error creating tasks table:', err);
        return;
    }
    console.log('Tasks table created successfully');
});

export default TaskManagement;
