export const adminAddOrganisation = {
  tags: ['Organisation'],
  summary: 'Create a new organization',
  description: 'Create a new organization with super admin privileges.',
  operationId: 'createOrganisationForSuperAdmin',
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: { $ref: '#/components/schemas/Organisation' },
      },
    },
  },
  responses: {
    201: {
      description: 'Organization created successfully.',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/Organisation' },
        },
      },
    },
  },
};

export const adminUpdateOrgById = {
  tags: ['Organisation'],
  summary: 'Update an organization by ID',
  description:
    'Update organization details by its ID with super admin privileges.',
  operationId: 'updateOrganisationByIdForSuperAdmin',
  parameters: [
    {
      name: 'id',
      in: 'path',
      required: true,
      description: 'Organization ID',
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
        schema: { $ref: '#/components/schemas/Organisation' },
      },
    },
  },
  responses: {
    200: {
      description: 'Organization updated successfully.',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/Organisation' },
        },
      },
    },
    404: {
      description: 'Organization not found.',
    },
  },
};

export const adminDeleteOrgById = {
  tags: ['Organisation'],
  summary: 'Delete an organization by ID',
  description:
    'Delete an organization from the system by its ID with super admin privileges.',
  operationId: 'deleteOrganisationByIdForSuperAdmin',
  parameters: [
    {
      name: 'id',
      in: 'path',
      required: true,
      description: 'Organization ID',
      schema: {
        type: 'integer',
        format: 'int64',
      },
    },
  ],
  responses: {
    204: {
      description: 'Organization deleted successfully.',
    },
    404: {
      description: 'Organization not found.',
    },
  },
};

export const adminGetOrganisations = {
  tags: ['Organisation'],
  summary: 'Get all organizations',
  description:
    'Retrieve a list of all organizations with super admin privileges.',
  operationId: 'getAllOrganisationsForSuperAdmin',
  responses: {
    200: {
      description: 'A list of organizations.',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: { $ref: '#/components/schemas/Organisation' },
          },
        },
      },
    },
  },
};

export const adminGetOrgById = {
  tags: ['Organisation'],
  summary: 'Get an organization by ID',
  description:
    'Retrieve an organization by its ID with super admin privileges.',
  operationId: 'getOrganisationByIdForSuperAdmin',
  parameters: [
    {
      name: 'id',
      in: 'path',
      required: true,
      description: 'Organization ID',
      schema: {
        type: 'integer',
        format: 'int64',
      },
    },
  ],
  responses: {
    200: {
      description: 'Organization details.',
      content: {
        'application/json': {
          schema: { $ref: '#/components/schemas/Organisation' },
        },
      },
    },
    404: {
      description: 'Organization not found.',
    },
  },
};
