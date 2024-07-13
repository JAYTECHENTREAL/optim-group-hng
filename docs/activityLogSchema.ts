export const activityLogSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      format: 'int64',
      description: 'Unique identifier for the activity log entry',
    },
    user_id: {
      type: 'integer',
      format: 'int64',
      description: 'ID of the user who performed the action',
    },
    action: {
      type: 'string',
      description: 'Description of the action performed',
    },
    timestamp: {
      type: 'string',
      format: 'date-time',
      description: 'Timestamp of when the action was performed',
    },
    details: {
      type: 'string',
      description: 'Additional details about the action',
    },
  },
  required: ['id', 'user_id', 'action', 'timestamp'],
};
