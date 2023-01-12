import swaggerJSDoc from 'swagger-jsdoc';
import dotenv from "dotenv";
dotenv.config()

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Swagger Documentation for API",
        version: "1.0.0",
        description: "An API for My Brand-Website",
      },
      servers: [
        {
          url: process.env.SERVER_URL,
        },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
        },
      },
    },
    apis: ["./src/swagger/*.js"],
  };
  const specs = swaggerJSDoc(options);

  export default specs