/**
 * swaggerConfig.ts
 */
import swaggerJSDoc, { Options } from 'swagger-jsdoc';

const swaggerOptions: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'eventify-api',
      version: '1.0.0',
      description: 'API documentation using Swagger'
    }
  },
  // Path to the API specs
  apis: ['./src/routes/*.ts']
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;
