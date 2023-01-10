import swaggerAutogen from "swagger-autogen"
swaggerAutogen()

const outputDoc = './swagger_output.json'
const allEndpoints = ['./src/routes/api/*.js']

const doc = {
    info: {
        version: "1.0.0",
        title: "REST API",
        description: "REST API Documentation"
    },
    host: "localhost:4000",
    basePath: "/",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
       
        {
            "name": "Articles",
            "description": "All Article Endpoints"
        },
        {
            "name": "Messages",
            "description": "All messages Endpoints"
        },
    ],

    security: [
      {
        bearerAuth: [],
      },
    ],

    securityDefinitions: {
        apiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: 'The Authorization Token Needed To Get Access To The Protected Endpoints'
        }
    },

    definitions: {
        Article: {
            $title: "First article",
            $content: "People in Tech",
            $image: "data:image/jpeg;base64...",
            comment: "This is a dope article."
        },
        Comment: {
            $comment: "dope"
        },
        Contact: {
            $names: "Kawnguzi Tevin",
            $email: "tevin@gmail.com",
            subject: "Next project plan",
            $message: "how about we discuss about the next project"
        },
        Signup: {
            $name: "Marvvv Twesigye",
            $email: "marvtwesi@gmail.com",
            $password: "********"
        },
        Login: {
            $email: "marvtwesi@gmail.com",
            $password: "********"
        }
    },

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
}

swaggerAutogen()(outputDoc, allEndpoints, doc).then(async () => {
  await import('./src/app.js')
});