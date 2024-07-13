export const landingPages = {
  privacyPolicy: {
    get: {
      tags: ['Landing Page'],
      summary: 'Get Privacy Policy',
      description: 'Retrieve the Privacy Policy page content.',
      operationId: 'getPrivacyPolicy',
      responses: {
        200: {
          description: 'Privacy Policy content retrieved successfully.',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  content: { type: 'string' },
                },
              },
            },
          },
        },
      },
    },
  },
  aboutUs: {
    get: {
      tags: ['Landing Page'],
      summary: 'Get About Us',
      description: 'Retrieve the About Us page content.',
      operationId: 'getAboutUs',
      responses: {
        200: {
          description: 'About Us content retrieved successfully.',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  content: { type: 'string' },
                },
              },
            },
          },
        },
      },
    },
  },
  // Add more static pages as needed
};

export const contactUs = {
  post: {
    tags: ['Contact'],
    summary: 'Submit Contact Form',
    description: 'Submit a contact form.',
    operationId: 'submitContactForm',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              name: { type: 'string' },
              email: { type: 'string' },
              message: { type: 'string' },
            },
            required: ['name', 'email', 'message'],
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Contact form submitted successfully.',
      },
    },
  },
};
