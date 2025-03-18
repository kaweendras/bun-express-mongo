import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User API",
      version: "1.0.0",
      description: "A simple Express API for managing users",
    },
    servers: [
      {
        url: "http://localhost:" + process.env.PORT,
        description: "Development server",
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // Path to the API routes
};

export const specs = swaggerJsdoc(options);
export const serve = swaggerUi.serve;
export const setup = swaggerUi.setup(specs);
