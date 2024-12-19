// swagger/swaggerDefinition.js
module.exports = {
    openapi: '3.0.0',
    info: {
      title: 'TASK MANAGEMENT API',
      version: '1.0.0', 
      description: 'Manages task', 
    },
    servers: [
      {
        url: 'http://localhost:8000',
      },
    ],
    components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
  };


