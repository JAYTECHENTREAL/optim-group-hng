export const notification = {
  get: {
    tags: ['user'],
    summary: 'Get user\'s notifications',
    description: ' user\'s notifications.',
    operationId: 'getUserNotification',
    responses: {
      200: {
        description: 'User\'s Notifications retrieved successfully.',
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/Notification' },
          },
        },
      },
    },
  },
};
export const inviteLink = {
  get: {
    tags: ['user'],
    summary: 'Get user\'s invite link',
    description: 'Retrive a user\'s invite link for invitation | referral.',
    operationId: 'getUserInviteLink',
    responses: {
      200: {
        description: 'Get User\'s Invite link successfully.',
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/Invites' },
          },
        },
      },
    },
  },
};