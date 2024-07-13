export const profileSettings = {
  get: {
    tags: ['Profile'],
    summary: 'Get profile settings',
    description: 'Retrieve user profile settings.',
    operationId: 'getProfileSettings',
    responses: {
      200: {
        description: 'Profile settings retrieved successfully.',
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/User' },
          },
        },
      },
    },
  },
  put: {
    tags: ['Profile'],
    summary: 'Update profile settings',
    description: 'Update user profile settings.',
    operationId: 'updateProfileSettings',
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
        description: 'Profile settings updated successfully.',
      },
    },
  },
};
