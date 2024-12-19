const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const userRoutes = require('./route/userRoute');
const taskRoutes = require('./route/taskRoute');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerDefinition = require('./swagger/swaggerDefinition');

const app = express();

const options = {
    swaggerDefinition,
    apis: ['./route/*.js'], // Path to your API routes
  };
  
  const swaggerSpec = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());

console.log("started......")

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

// app.use((req, res, next) => res.status(404).json({ error: 'Endpoint not found' }));
app.use(errorHandler);

module.exports = app;