export const getWidgets = {
  tags: ["Widgets"],
  description:
    "A detailed description for fetching random contents published by the user",
  operationId: "getContentsByUser",
  parameters: [
    {
      name: "user_id",
      in: "path",
      required: true,
      schema: {
        type: "integer",
        minimum: 1,
      },
      description: "The user's ID",
    },
  ],
  responses: {
    "200": {
      description: "Contents fetched successfully",
      content: {
        "application/json": {
          schema: {
            type: "array",
            items: [{ $ref: "#/components/schemas/Blog" }],
          },
        },
      },
    },
    "400": {
      description: "User ID must be an integer",
    },
    "401": {
      description: "Authorization token is missing or invalid",
    },
    "404": {
      description: "User with the specified ID does not exist",
    },
    "500": {
      description: "Internal Server Error",
    },
  },
};

export const getWidget = {
  tags: ["Widgets"],
  description:
    "A detailed description for fetching a single blog published by the user",
  operationId: "getContentsByUser",
  parameters: [
    {
      name: "user_id",
      in: "path",
      required: true,
      schema: {
        type: "integer",
        minimum: 1,
      },
      description: "The user's ID",
    },
    {
      name: "blog_id",
      in: "path",
      required: true,
      schema: {
        type: "integer",
        minimum: 1,
      },
      description: "The blog's ID",
    },
  ],
  responses: {
    "200": {
      description: "Random data fetched successfully",
      content: {
        "application/json": {
          type: "object",
          schema: { $ref: "#/components/schemas/Blog" },
        },
      },
    },
    "400": {
      description: "User or random data ID and must be an integer",
    },
    "401": {
      description: "Authorization token is missing or invalid",
    },
    "404": {
      description: "User or random data with the specified ID does not exist",
    },
    "500": {
      description: "Internal Server Error",
    },
  },
};

export const search = {
  tags: ["Widgets"],
  description: "Search and sort list of blogs published by the user",
  operationId: "searchUsersContents",
  parameters: [
    {
      name: "search",
      in: "query",
      schema: {
        type: "string",
      },
      description: "Search query for filtering data",
    },
    {
      name: "order",
      in: "query",
      schema: {
        type: "string",
        enum: ["asc", "desc"],
        default: "desc",
      },
      description: "Sort order for data",
    },
  ],
  responses: {
    "200": {
      description: "Content fetched successfully",
      content: {
        "application/json": {
          schema: {
            type: "array",
            items: {
              oneOf: [
                { $ref: "#/components/schemas/Blog" },
                { $ref: "#/components/schemas/Transactions" },
                { $ref: "#/components/schemas/Organisation" },
                { $ref: "#/components/schemas/Invites" },
              ],
            },
          },
        },
      },
    },
    "400": {
      description: "User ID and must be an integer",
    },
    "401": {
      description: "Authorization token is missing or invalid",
    },
    "404": {
      description: "User with the specified ID does not exist",
    },
    "500": {
      description: "Internal Server Error",
    },
  },
};

export const transactionsChart = {
  tags: ["Widgets"],
  description: "Display user's transactions chart",
  operationId: "displayTransactionChart",
  parameters: [
    {
      name: "user_id",
      in: "path",
      required: true,
      schema: {
        type: "integer",
        minimum: 1,
      },
      description: "The user's ID",
    },
  ],
  responses: {
    "200": {
      description: "Transactions detail fetched successfully",
      content: {
        "application/json": {
          schema: {
            type: "array",
            items: { $ref: "#/components/schemas/Transactions" },
          },
        },
      },
    },
    "400": {
      description: "User ID and must be an integer",
    },
    "401": {
      description: "Authorization token is missing or invalid",
    },
    "404": {
      description: "User with the specified ID does not exist",
    },
    "500": {
      description: "Internal Server Error",
    },
  },
};

export const contentEdit = {
  tags: ["Widgets"],
  description: "Edit user's content",
  operationId: "contentEdit",
  parameters: [
    {
      name: "user_id",
      in: "path",
      required: true,
      schema: {
        type: "integer",
        minimum: 1,
      },
      description: "The user's ID",
    },
    {
      name: "random_data_id",
      in: "path",
      required: true,
      schema: {
        type: "integer",
        minimum: 1,
      },
      description: "The random data ID",
    },
  ],
  responses: {
    "200": {
      description: "Random data edited successfully",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                format: "text",
                example: "Data update successful",
              },
            },
          },
        },
      },
    },
    "400": {
      description: "User or Blog ID and must be an integer",
    },
    "401": {
      description: "Authorization token is missing or invalid",
    },
    "404": {
      description: "User or Blog with the specified ID does not exist",
    },
    "500": {
      description: "Internal Server Error",
    },
  },
};
