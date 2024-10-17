import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import TaskManagement from './model/TaskManagement';
import taskRoutes from './routes/tasks';

const app = express();

// Middleware
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Routes
app.use('/tasks', taskRoutes);

// Make the database connection globally accessible (Optional)
app.set('TaskManagement', TaskManagement);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

export default TaskManagement;
