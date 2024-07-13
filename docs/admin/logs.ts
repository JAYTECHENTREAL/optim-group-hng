export const adminGetActivityLogs = {
  tags: ['Super Admin'],
  security: [
    {
      bearerAuth: [],
    },
  ],
  summary: 'Get activity logs',
  description: 'Retrieve a list of activity logs.',
  operationId: 'getActivityLogs',
  responses: {
    200: {
      description: 'A list of activity logs.',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: { $ref: '#/components/schemas/ActivityLog' },
          },
        },
      },
    },
  },
};

export const adminGetTransactionRecords = {
  tags: ['Transactions'],
  security: [
    {
      bearerAuth: [],
    },
  ],
  summary: 'Get transaction records',
  description: 'Retrieve a list of transaction records.',
  operationId: 'getTransactionRecords',
  responses: {
    200: {
      description: 'A list of transaction records.',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: { $ref: '#/components/schemas/Transactions' },
          },
        },
      },
    },
  },
};
