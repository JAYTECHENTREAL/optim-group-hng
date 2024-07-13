export const userSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      format: 'int64',
      example: 6,
    },
    name: {
      type: 'string',
      format: 'name',
      example: 'Test',
    },
    email: {
      type: 'string',
      format: 'email',
      example: 'test@email.com',
    },
    password: {
      type: 'string',
      format: 'password',
      example: '12345678',
    },
    is_admin: {
      type: 'boolean',
    },
    referrer_id: {
      type: 'string',
      format: 'byte',
      example: 'U3BlYWtlYXN5IG1ha2VzIHdvcmtpbmcgd2l0aCBBUElzIGZ1biE=',
    },
    created_at: {
      type: 'string',
      format: 'date-time',
      example: '2019-10-12T07:20:50.52Z',
    },
    updated_at: {
      type: 'string',
      format: 'date-time',
      example: '2022-10-12T07:20:50.52Z',
    },
  },
};

export const usersTransactions = {
  tags: ['user'],
  summary: 'Gets a user by ID',
  description:
    'A detailed description of the operation.Use markdown for rich text representation, such as **bold**, *italic*, and [links](https://swagger.io)',
  operationId: 'getUserById',
  parameters: {
    name: 'id',
    in: 'path',
    description: 'User ID',
    required: true,
    schema: {
      type: 'integer',
      format: 'int64',
    },
  },
};
