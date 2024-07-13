export const settings = {
  get: {
    tags: ['Settings'],
    summary: 'Get settings',
    description: 'Retrieve application settings.',
    operationId: 'getSettings',
    responses: {
      200: {
        description: 'Settings retrieved successfully.',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                setting1: { type: 'string' },
                setting2: { type: 'string' },
              },
            },
          },
        },
      },
    },
  },
  put: {
    tags: ['Settings'],
    summary: 'Update settings',
    description: 'Update application settings.',
    operationId: 'updateSettings',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              setting1: { type: 'string' },
              setting2: { type: 'string' },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Settings updated successfully.',
      },
    },
  },
};
