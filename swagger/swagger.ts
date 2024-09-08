import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';
import swaggerDocument  from '../swagger.json';

export const setupSwagger = (app: Application): void => {
  const options = {
    swaggerDefinition: swaggerDocument,
    apis: ['.routes/staffRoutes.ts'],
  };

  const specs = swaggerJSDoc(options);
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};

