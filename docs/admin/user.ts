export const adminAddUser = {
  tags: ['Super Admin'],
  summary: 'Create a new user',
  description: 'Create a new user with super admin privileges.',
  operationId: 'createUserForSuperAdmin',
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: { $ref: '#/components/schemas/User' },
      },
    },
  },
  responses: {
    201: {
      description: 'User created successfully.',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/User' },
        },
      },
    },
  },
};

export const adminUpdateUserById = {
  tags: ['Super Admin'],
  summary: 'Update a user by ID',
  description: 'Update user details by their ID.',
  operationId: 'updateUserById',
  parameters: [
    {
      name: 'id',
      in: 'path',
      required: true,
      description: 'User ID',
      schema: {
        type: 'integer',
        format: 'int64',
      },
    },
  ],
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: { $ref: '#/components/schemas/User' },
      },
    },
  },
  responses: {
    200: {
      description: 'User updated successfully.',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/User' },
        },
      },
    },
    404: {
      description: 'User not found.',
    },
  },
};

export const adminDeleteUserById = {
  tags: ['Super Admin'],
  summary: 'Delete a user by ID',
  description:
    'Delete a user from the system by their ID with super admin privileges.',
  operationId: 'deleteUserByIdForSuperAdmin',
  parameters: [
    {
      name: 'id',
      in: 'path',
      required: true,
      description: 'User ID',
      schema: {
        type: 'integer',
        format: 'int64',
      },
    },
  ],
  responses: {
    204: {
      description: 'User deleted successfully.',
    },
    404: {
      description: 'User not found.',
    },
  },
};

export const adminGetAllUsers = {
  tags: ['Super Admin'],
  summary: 'Get all users',
  description:
    'Retrieve a list of all users, optionally filtering by whether they are admins.',
  operationId: 'getAllUsers',
  parameters: [
    {
      name: 'is_admin',
      in: 'query',
      description: 'Filter users by admin status',
      required: false,
      schema: {
        type: 'boolean',
      },
    },
  ],
  responses: {
    200: {
      description: 'A list of users.',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: { $ref: '#/components/schemas/User' },
          },
        },
      },
    },
  },
};

export const adminGetUserById = {
  tags: ['Super Admin'],
  summary: 'Get a user by ID',
  description: 'Retrieve a user by their ID with super admin privileges.',
  operationId: 'getUserByIdForSuperAdmin',
  parameters: [
    {
      name: 'id',
      in: 'path',
      required: true,
      description: 'User ID',
      schema: {
        type: 'integer',
        format: 'int64',
      },
    },
  ],
  responses: {
    200: {
      description: 'User details.',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/User' },
        },
      },
    },
    404: {
      description: 'User not found.',
    },
  },
};
