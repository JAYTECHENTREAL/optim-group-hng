export const emailTemplates = {
  post: {
    tags: ["Email Messaging"],
    summary: "Create a new email template",
    description: "Create a new template with super admin privileges.",
    operationId: "createEmailTemplate",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              title: {
                type: "string",
                format: "title",
                example: "Welome",
              },
              description: {
                type: "string",
                format: "details",
                example: "Welcome to our organisation",
              },
              updated_at: {
                type: "string",
                format: "date-time",
                example: "2022-10-12T07:20:50.52Z",
              },
            },
          },
        },
      },
    },
    responses: {
      201: {
        description: "Email Template created successfully.",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  example: "successful",
                },
              },
            },
          },
        },
      },
    },
  },
};
export const sendEmail = {
  post: {
    tags: ["Email Messaging"],
    summary: "Send a new email to users",
    description: "Send a new with super admin privileges to users.",
    operationId: "sendEmail",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              user_id: {
                type: "string",
                example: "98a7sfd7a, 8a9798a70, 8s798df7s0",
              },
              content: {
                type: "string",
                format: "details",
                example: "<html>....contents goes here</html>",
              },
              created_at: {
                type: "string",
                format: "date-time",
                example: "2022-10-12T07:20:50.52Z",
              },
            },
          },
        },
      },
    },
    responses: {
      201: {
        description: "Email Template created successfully.",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  example: "successful",
                },
              },
            },
          },
        },
      },
    },
  },
};
export const getEmailTemplates = {
  get: {
    tags: ["Email Messaging"],
    summary: "Get an email template by ID",
    description:
      "Retrieve an email template for messaging using its ID with super admin privileges.",
    operationId: "getEmailTemplate",
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        description: "Template ID",
        schema: {
          type: "string",
        },
      },
    ],
    responses: {
      200: {
        description: "Email template.",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                title: {
                  type: "string",
                  format: "title",
                  example: "Welome",
                },
                description: {
                  type: "string",
                  format: "details",
                  example: "Welcome to our organisation",
                },
              },
            },
          },
        },
      },
      404: {
        description: "Email template not found.",
      },
    },
  },
}