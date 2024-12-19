const express = require('express');
const { createTask } = require('../controller/taskController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create a new task
 *     description: Allows authenticated users to create a new task.
 *     tags:
 *       - Tasks
 *     security:
 *       - bearerAuth: []  # Indicates that a Bearer token is required
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the task
 *                 example: "Complete project documentation"
 *               description:
 *                 type: string
 *                 description: A detailed description of the task
 *                 example: "Finalize all sections of the project documentation."
 *               dueDate:
 *                 type: string
 *                 format: date-time
 *                 description: The due date for the task
 *                 example: "2024-12-31T23:59:59Z"
 *               assignedTo:
 *                 type: string
 *                 description: ID of the user the task is assigned to
 *                 example: "userId12345"
 *     responses:
 *       201:
 *         description: Task created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The unique ID of the created task
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 dueDate:
 *                   type: string
 *                   format: date-time
 *                 assignedTo:
 *                   type: string
 *                 createdBy:
 *                   type: string
 *                   description: The ID of the user who created the task
 *       400:
 *         description: Invalid input or missing required fields
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Validation error message"
 */
router.post('/', authMiddleware, createTask);

module.exports = router;
