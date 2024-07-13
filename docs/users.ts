export const userSchema = {
  type: "object",
  properties: {
    id: {
      type: "integer",
      format: "int64",
      example: 6,
    },
    name: {
      type: "string",
      format: "name",
      example: "Test",
    },
    email: {
      type: "string",
      format: "email",
      example: "test@email.com",
    },
    password: {
      type: "string",
      format: "password",
      example: "12345678",
    },
    is_admin: {
      type: "boolean",
    },
    referrer_id: {
      type: "string",
      format: "byte",
      example: "U3BlYWtlYXN5IG1ha2VzIHdvcmtpbmcgd2l0aCBBUElzIGZ1biE=",
    },
    created_at: {
      type: "string",
      format: "date-time",
      example: "2019-10-12T07:20:50.52Z",
    },
    updated_at: {
      type: "string",
      format: "date-time",
      example: "2022-10-12T07:20:50.52Z",
    },
  },
};
export const notificationSchema = {
  type: "object",
  properties: {
    id: {
      type: "integer",
      format: "int64",
      example: 6,
    },
    content: {
      type: "string",
      example: "Welcome to our app.",
    },
    is_read: {
      type: "boolean",
      example: "true",
    },
    created_at: {
      type: "string",
      format: "date-time",
      example: "2022-10-12T07:20:50.52Z",
    },
  },
};

export const language = {
  get: {
    tags: ["Settings"],
    summary: "Get language & region",
    description: "Retrieve language and region's settings.",
    operationId: "getLanReg",
    parameters: [
      {
        name: "type",
        in: "path",
        required: false,
        description: "Language or Region",
        schema: {
          type: "string",
        },
      },
    ],
    responses: {
      200: {
        description: "Successful.",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                language: {
                  type: "string",
                  example: "en-US",
                },
                region: {
                  type: "string",
                  example: "New York",
                },
              },
            },
          },
        },
      },
    },
  },
  put: {
    tags: ["Settings"],
    summary: "Set language & region",
    description: "Update language and region's settings.",
    operationId: "setLanReg",
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              type: {
                type: "string",
                format: "title",
                example: "lang | region",
              },
              content: {
                type: "string",
                format: "details",
                example: "en-US",
              },
            },
          },
        },
      },
    },
    responses: {
      201: {
        description: "Settings updated successfully.",
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

export const userAddOrganisation = {
  tags: ["User"],
  security: [
    {
      bearerAuth: [],
    },
  ],
  summary: "Create a new organization",
  description: "Create a new organization with super admin privileges.",
  operationId: "createOrganisationForSuperAdmin",
  requestBody: {
    required: true,
    content: {
      "application/json": {
        schema: { $ref: "#/components/schemas/Organisation" },
      },
    },
  },
  responses: {
    201: {
      description: "Organization created successfully.",
      content: {
        "application/json": {
          schema: { $ref: "#/components/schemas/Organisation" },
        },
      },
    },
  },
};

export const userUpdateOrgById = {
  tags: ["User"],
  security: [
    {
      bearerAuth: [],
    },
  ],
  summary: "Update an organization by ID",
  description:
    "Update organization details by its ID with super admin privileges.",
  operationId: "updateOrganisationByIdForSuperAdmin",
  parameters: [
    {
      name: "id",
      in: "path",
      required: true,
      description: "Organization ID",
      schema: {
        type: "integer",
        format: "int64",
      },
    },
  ],
  requestBody: {
    required: true,
    content: {
      "application/json": {
        schema: { $ref: "#/components/schemas/Organisation" },
      },
    },
  },
  responses: {
    200: {
      description: "Organization updated successfully.",
      content: {
        "application/json": {
          schema: { $ref: "#/components/schemas/Organisation" },
        },
      },
    },
    404: {
      description: "Organization not found.",
    },
  },
};

export const userDeleteOrgById = {
  tags: ["User"],
  security: [
    {
      bearerAuth: [],
    },
  ],
  summary: "Delete an organization by ID",
  description:
    "Delete an organization from the system by its ID with super admin privileges.",
  operationId: "deleteOrganisationByIdForSuperAdmin",
  parameters: [
    {
      name: "id",
      in: "path",
      required: true,
      description: "Organization ID",
      schema: {
        type: "integer",
        format: "int64",
      },
    },
  ],
  responses: {
    204: {
      description: "Organization deleted successfully.",
    },
    404: {
      description: "Organization not found.",
    },
  },
};

export const userGetOrganisations = {
  tags: ["User"],
  security: [
    {
      bearerAuth: [],
    },
  ],
  summary: "Get all organizations",
  description:
    "Retrieve a list of all organizations with super admin privileges.",
  operationId: "getAllOrganisationsForSuperAdmin",
  responses: {
    200: {
      description: "A list of organizations.",
      content: {
        "application/json": {
          schema: {
            type: "array",
            items: { $ref: "#/components/schemas/Organisation" },
          },
        },
      },
    },
  },
};

export const userGetOrgById = {
  tags: ["User"],
  security: [
    {
      bearerAuth: [],
    },
  ],
  summary: "Get an organization by ID",
  description:
    "Retrieve an organization by its ID with super admin privileges.",
  operationId: "getOrganisationByIdForSuperAdmin",
  parameters: [
    {
      name: "id",
      in: "path",
      required: true,
      description: "Organization ID",
      schema: {
        type: "integer",
        format: "int64",
      },
    },
  ],
  responses: {
    200: {
      description: "Organization details.",
      content: {
        "application/json": {
          schema: { $ref: "#/components/schemas/Organisation" },
        },
      },
    },
    404: {
      description: "Organization not found.",
    },
  },
};

// Add user's

export const userUpdateUserById = {
  tags: ["User"],
  security: [
    {
      bearerAuth: [],
    },
  ],
  summary: "Update a user by ID",
  description: "Update user details by their ID.",
  operationId: "updateUserById",
  parameters: [
    {
      name: "id",
      in: "path",
      required: true,
      description: "User ID",
      schema: {
        type: "integer",
        format: "int64",
      },
    },
  ],
  requestBody: {
    required: true,
    content: {
      "application/json": {
        schema: { $ref: "#/components/schemas/User" },
      },
    },
  },
  responses: {
    200: {
      description: "User updated successfully.",
      content: {
        "application/json": {
          schema: { $ref: "#/components/schemas/User" },
        },
      },
    },
    404: {
      description: "User not found.",
    },
  },
};

export const userDeleteUserById = {
  tags: ["User"],
  security: [
    {
      bearerAuth: [],
    },
  ],
  summary: "Delete a user by ID",
  description:
    "Delete a user from the system by their ID with super admin privileges.",
  operationId: "deleteUserByIdForSuperAdmin",
  parameters: [
    {
      name: "id",
      in: "path",
      required: true,
      description: "User ID",
      schema: {
        type: "integer",
        format: "int64",
      },
    },
  ],
  responses: {
    204: {
      description: "User deleted successfully.",
    },
    404: {
      description: "User not found.",
    },
  },
};

export const userGetUserById = {
  tags: ["User"],
  security: [
    {
      bearerAuth: [],
    },
  ],
  summary: "Get a user by ID",
  description: "Retrieve a user by their ID with super admin privileges.",
  operationId: "getUserByIdForSuperAdmin",
  parameters: [
    {
      name: "id",
      in: "path",
      required: true,
      description: "User ID",
      schema: {
        type: "integer",
        format: "int64",
      },
    },
  ],
  responses: {
    200: {
      description: "User details.",
      content: {
        "application/json": {
          schema: { $ref: "#/components/schemas/User" },
        },
      },
    },
    404: {
      description: "User not found.",
    },
  },
};

export const changePassword = {
  tags: ["User"],
  security: [
    {
      bearerAuth: [],
    },
  ],
  summary: "Change user password by ID",
  description: "Update user password by their ID.",
  operationId: "updateUserPasswordById",
  parameters: [
    {
      name: "id",
      in: "path",
      required: true,
      description: "User ID",
      schema: {
        type: "integer",
        format: "int64",
      },
    },
  ],
  requestBody: {
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            oldPassword: {
              type: "string",
              format: "password",
              example: "password",
            },
            newPassword: {
              type: "string",
              format: "password",
              example: "password",
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "Password changed successfully.",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                description: "Password changed successfully",
              },
              user: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
      },
    },
    404: {
      description: "User not found.",
    },
  },
};
