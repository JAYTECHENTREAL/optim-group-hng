import { activityLogSchema } from "./activityLogSchema";
import { adminGetActivityLogs, adminGetTransactionRecords } from "./admin/logs";
import {
  adminAddOrganisation,
  adminDeleteOrgById,
  adminGetOrganisations,
  adminGetOrgById,
  adminUpdateOrgById,
} from "./admin/organisation";
import {
  adminAddUser,
  adminDeleteUserById,
  adminGetAllUsers,
  adminGetUserById,
  adminUpdateUserById,
} from "./admin/user";
import { blogSchema } from "./Blog";
import { sendEmail, getEmailTemplates, emailTemplates } from "./EmailTemplate";
import { commentSchema } from "./comment";
import { myinvitesSchema, invitesSchema } from "./invites";
import { contactUs, landingPages } from "./landingPage";
import { organisationSchema } from "./organisations";
import { profileSettings } from "./profileSettings";
import { inviteLink, notification } from "./Notifications";
import { settings } from "./settings";
import { transactionSchema } from "./transactions";
import { userOrganisationSchema } from "./userorganisation";
import {
  changePassword,
  language,
  notificationSchema,
  userAddOrganisation,
  userDeleteOrgById,
  userDeleteUserById,
  userGetOrganisations,
  userGetOrgById,
  userGetUserById,
  userSchema,
  userUpdateOrgById,
  userUpdateUserById,
} from "./users";
import {
  contentEdit,
  getWidget,
  getWidgets,
  search,
  transactionsChart,
} from "./widgets";

export const apiDocumentation = {
  openapi: "3.1.0",
  info: {
    version: "1.0.0",
    title: "HNG 11 (REST API - Documentation)",
    description: "Description of Optim Group's API here in Node.js Template",
    license: {
      name: "Apache 2.0",
      url: "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
  },
  servers: [
    {
      url: "http://localhost:4500/",
      description: "Local Server",
    },
    {
      url: "#",
      description: "Production Server",
    },
  ],
  tags: [
    {
      name: "Authentication",
      description: "Authenticate users",
    },
    {
      name: "User",
      description: "Everything about the user",
    },
    {
      name: "Email Messaging",
      description: "Email template messaging",
    },
    {
      name: "Transactions",
      description: "Everything about users transactions",
      externalDocs: [
        {
          description: "Flutterwave Payment",
          url: "https://developer.flutterwave.com/docs/collecting-payments/overview/",
        },
        {
          description: "Stripe Payment",
          url: "https://docs.stripe.com/checkout/quickstart",
        },
        {
          description: "LemonSqueezy Payment",
          url: "https://www.lemonsqueezy.com/ecommerce/payments",
        },
      ],
    },
    {
      name: "Widgets",
      description: "Everything about widgets",
    },
    { name: "Super Admin", description: "Everything about admin actions" },
    { name: "Settings", description: "Application settings" },
    { name: "Profile", description: "User profile settings" },
    { name: "Landing Page", description: "Static pages" },
    { name: "Contact", description: "Contact Us" },
  ],
  paths: {
    "/auth/signup": {
      post: {
        tags: ["Authentication"],
        security: [
          {
            bearerAuth: [],
          },
        ],
        summary: "Create a new user",
        description: "Create a new user.",
        operationId: "createUser",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/User" },
            },
          },
        },
        responses: {
          201: {
            description: "User created successfully.",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/User" },
              },
            },
          },
        },
      },
    },
    "/auth/login": {
      post: {
        tags: ["Authentication"],
        summary: "Login with email and password",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  email: {
                    type: "string",
                    format: "email",
                    example: "user@example.com",
                  },
                  password: {
                    type: "string",
                    format: "password",
                    example: "strongpassword",
                  },
                },
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Successful login",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    token: {
                      type: "string",
                      description: "JWT token for authenticated requests",
                    },
                    user: {
                      $ref: "#/components/schemas/User",
                    },
                  },
                },
              },
            },
          },
          "401": {
            description: "Unauthorized",
          },
        },
      },
    },
    "/auth/social": {
      post: {
        tags: ["Authentication"],
        summary: "Social login",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  provider: {
                    type: "string",
                    enum: ["google", "facebook", "twitter"],
                    example: "google",
                  },
                  token: {
                    type: "string",
                    description: "OAuth token from the social provider",
                    example: "ABCDEFGH12345678",
                  },
                },
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Successful login",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    token: {
                      type: "string",
                      description: "JWT token for authenticated requests",
                    },
                    user: {
                      $ref: "#/components/schemas/User",
                    },
                  },
                },
              },
            },
          },
          "401": {
            description: "Unauthorized",
          },
        },
      },
    },
    "/auth/magic-link": {
      post: {
        tags: ["Authentication"],
        summary: "Request magic link",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  email: {
                    type: "string",
                    format: "email",
                    example: "user@example.com",
                  },
                },
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Magic link sent",
          },
          "400": {
            description: "Bad request",
          },
        },
      },
    },
    "/auth/magic-link/verify": {
      post: {
        tags: ["Authentication"],
        summary: "Verify magic link",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  token: {
                    type: "string",
                    description: "Token from the magic link",
                    example: "ABCDEFGH12345678",
                  },
                },
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Successful verification",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    token: {
                      type: "string",
                      description: "JWT token for authenticated requests",
                    },
                    user: {
                      $ref: "#/components/schemas/User",
                    },
                  },
                },
              },
            },
          },
          "401": {
            description: "Unauthorized",
          },
        },
      },
    },
    "/api/v1/users/{id}": {
      get: userGetUserById,
      put: userUpdateUserById,
      delete: userDeleteUserById,
    },
    "/api/v1/users/{id}/change-password": {
      put: changePassword,
    },
    "/api/v1/users/organisations": {
      get: userGetOrganisations,
      post: userAddOrganisation,
    },
    "/api/v1/users/organisations/{id}": {
      get: userGetOrgById,
      put: userUpdateOrgById,
      delete: userDeleteOrgById,
    },
    "/api/v1/user/{user_id}/dashboard/blogs": {
      get: getWidgets,
    },
    "/api/v1/user/{user_id}/dashboard/{blogs}/{blog_id}": {
      get: getWidget,
    },
    "/api/v1/user/{user_id}/dashboard?search='dftor'&order='asc'": {
      get: search,
    },
    "/api/v1/user/{user_id}/dashboard/transactions/chart": {
      get: transactionsChart,
    },
    "/api/v1/user/{user_id}/dashboard/{random_data}/{random_data}/edit": {
      put: contentEdit,
    },
    "/api/v1/admin/getUsers": {
      get: adminGetAllUsers,
      post: adminAddUser,
    },
    "/api/v1/admin/getUsers/{id}": {
      get: adminGetUserById,
      put: adminUpdateUserById,
      delete: adminDeleteUserById,
    },
    "/api/v1/admin/organisations": {
      get: adminGetOrganisations,
      post: adminAddOrganisation,
    },
    "/api/v1/admin/organisations/{id}": {
      get: adminGetOrgById,
      put: adminUpdateOrgById,
      delete: adminDeleteOrgById,
    },
    "/api/v1/admin/activity-logs": {
      get: adminGetActivityLogs,
    },
    "/api/v1/admin/transactions": {
      get: adminGetTransactionRecords,
    },
    "/api/v1/admin/emailtemplate": emailTemplates,
    "/api/v1/admin/emailtemplate/{id}": getEmailTemplates,
    "/api/v1/admin/sendemail/": sendEmail,
    "/payments/stripe/payment": {
      post: {
        tags: ["Transactions"],
        summary: "Create Stripe checkout session",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  amount: {
                    type: "number",
                    example: 1000,
                  },
                  currency: {
                    type: "string",
                    example: "usd",
                  },
                  description: {
                    type: "string",
                    example: "Payment for order #1234",
                  },
                },
                required: ["amount", "currency"],
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Stripe checkout session created",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    sessionId: {
                      type: "string",
                      description: "Stripe session ID",
                      example: "cs_test_a1B2c3D4e5F6g7H8i9J0",
                    },
                  },
                },
              },
            },
          },
          "400": {
            description: "Bad request",
          },
        },
      },
    },
    "/payments/flutterwave/payment": {
      post: {
        tags: ["Transactions"],
        summary: "Initiate Flutterwave payment",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  amount: {
                    type: "number",
                    example: 1000,
                  },
                  currency: {
                    type: "string",
                    example: "NGN",
                  },
                  email: {
                    type: "string",
                    example: "user@example.com",
                  },
                  tx_ref: {
                    type: "string",
                    example: "tx-12345678",
                  },
                },
                required: ["amount", "currency", "email", "tx_ref"],
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Flutterwave payment initiated",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "string",
                      example: "success",
                    },
                    link: {
                      type: "string",
                      description: "Payment link",
                      example:
                        "https://checkout.flutterwave.com/v3/hosted/pay/abcdefgh",
                    },
                  },
                },
              },
            },
          },
          "400": {
            description: "Bad request",
          },
        },
      },
    },
    "/payments/lemonsqueezy/payment": {
      post: {
        tags: ["Transactions"],
        summary: "Create LemonSqueezy checkout session",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  amount: {
                    type: "number",
                    example: 1000,
                  },
                  currency: {
                    type: "string",
                    example: "usd",
                  },
                  description: {
                    type: "string",
                    example: "Payment for product",
                  },
                },
                required: ["amount", "currency"],
              },
            },
          },
        },
        responses: {
          "200": {
            description: "LemonSqueezy checkout session created",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    checkoutUrl: {
                      type: "string",
                      description: "LemonSqueezy checkout URL",
                      example: "https://checkout.lemonsqueezy.com/pay/abcdefgh",
                    },
                  },
                },
              },
            },
          },
          "400": {
            description: "Bad request",
          },
        },
      },
    },
    "/api/v1/settings": settings,
    "/api/v1/profile": profileSettings,
    "/api/v1/notifications": notification,
    "/api/v1/lang": language,
    "/api/v1/getInviteLink": inviteLink,
    "/api/v1/landing/privacy-policy": landingPages.privacyPolicy,
    "/api/v1/landing/about-us": landingPages.aboutUs,
    "/api/v1/contact": contactUs,
    "/api/v1/consent": {
      post: {
        summary: "Stores user's decision on cookies storage",
        tags: ["Cookies"],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  consent: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
        responses: {
          "201": {
            description: "User consent is saved",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "string",
                    },
                    message: {
                      type: "string",
                    },
                    data: {
                      type: "object",
                      properties: {
                        userId: {
                          type: "string",
                        },
                        consent: {
                          type: "string",
                        },
                        categories: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          "422": {
            description: "Error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    errors: {
                      type: "object",
                      properties: {
                        status: {
                          type: "string",
                        },
                        message: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          "500": {
            description: "Error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    errors: {
                      type: "object",
                      properties: {
                        status: {
                          type: "string",
                        },
                        message: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/v1/consent/{id}": {
      get: {
        summary: "Fetches user's status on cookies",
        tags: ["Cookies"],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
          },
        ],
        responses: {
          "201": {
            description: "User consent is saved",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "string",
                    },
                    message: {
                      type: "string",
                    },
                    data: {
                      type: "object",
                      properties: {
                        userId: {
                          type: "string",
                        },
                        consent: {
                          type: "string",
                        },
                        categories: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          "404": {
            description: "Not found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    errors: {
                      type: "object",
                      properties: {
                        status: {
                          type: "string",
                        },
                        message: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          "500": {
            description: "Error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    errors: {
                      type: "object",
                      properties: {
                        status: {
                          type: "string",
                        },
                        message: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/v1/consents/{id}": {
      patch: {
        summary: "Updates user's status on cookies",
        tags: ["Cookies"],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "User consent is updated",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "string",
                    },
                    message: {
                      type: "string",
                    },
                    data: {
                      type: "object",
                      properties: {
                        userId: {
                          type: "string",
                        },
                        consent: {
                          type: "string",
                        },
                        categories: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          "404": {
            description: "Not found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    errors: {
                      type: "object",
                      properties: {
                        status: {
                          type: "string",
                        },
                        message: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          "500": {
            description: "Error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    errors: {
                      type: "object",
                      properties: {
                        status: {
                          type: "string",
                        },
                        message: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/v1/invite/{id}": {
      get: {
        summary: "Fetches invite page",
        tags: ["Invite"],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Fetch invite page",
            content: {
              "application/json": {},
            },
          },
          "404": {
            description: "Not found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    errors: {
                      type: "object",
                      properties: {
                        status: {
                          type: "string",
                        },
                        message: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          "500": {
            description: "Error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    errors: {
                      type: "object",
                      properties: {
                        status: {
                          type: "string",
                        },
                        message: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/v1/dashboard": {
      get: {
        summary: "Fetches content of a dashboard page",
        tags: ["Dashboard"],
        security: [
          {
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Fetched dashboard data",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "string",
                    },
                    message: {
                      type: "string",
                    },
                    data: {
                      type: "object",
                    },
                  },
                },
              },
            },
          },
          "404": {
            description: "Not Found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    errors: {
                      type: "object",
                      properties: {
                        status: {
                          type: "string",
                        },
                        message: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          "500": {
            description: "Error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    errors: {
                      type: "object",
                      properties: {
                        status: {
                          type: "string",
                        },
                        message: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/v1/widget/{id}": {
      get: {
        summary: "Fetches content of widget on a dashboard page",
        tags: ["Dashboard"],
        security: [
          {
            bearerAuth: [],
          },
        ],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
          },
        ],
        responses: {
          "200": {
            description: "Fetched widget data",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "string",
                    },
                    message: {
                      type: "string",
                    },
                    data: {
                      type: "object",
                    },
                  },
                },
              },
            },
          },
          "404": {
            description: "Not Found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    errors: {
                      type: "object",
                      properties: {
                        status: {
                          type: "string",
                        },
                        message: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          "500": {
            description: "Error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    errors: {
                      type: "object",
                      properties: {
                        status: {
                          type: "string",
                        },
                        message: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/v1/waitlist": {
      get: {
        summary: "Fetches list of users on waitlist",
        tags: ["Waitlist"],
        security: [
          {
            bearerAuth: [],
          },
        ],
        responses: {
          "200": {
            description: "Fetched waitlist data",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "string",
                    },
                    message: {
                      type: "string",
                    },
                    data: {
                      type: "object",
                      properties: {
                        userId: {
                          type: "string",
                        },
                        name: {
                          type: "string",
                        },
                        email: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          "404": {
            description: "Not Found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    errors: {
                      type: "object",
                      properties: {
                        status: {
                          type: "string",
                        },
                        message: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          "500": {
            description: "Error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    errors: {
                      type: "object",
                      properties: {
                        status: {
                          type: "string",
                        },
                        message: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/v1/waitlists": {
      post: {
        summary: "Add a user to waitlist.",
        tags: ["Waitlist"],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  email: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
        responses: {
          "201": {
            description: "User added to waitlist",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "string",
                    },
                    message: {
                      type: "string",
                    },
                    data: {
                      type: "object",
                      properties: {
                        userId: {
                          type: "string",
                        },
                        name: {
                          type: "string",
                        },
                        email: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          "422": {
            description: "Error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    errors: {
                      type: "object",
                      properties: {
                        status: {
                          type: "string",
                        },
                        message: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          "500": {
            description: "Error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    errors: {
                      type: "object",
                      properties: {
                        status: {
                          type: "string",
                        },
                        message: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/v1/waitlist/{id}": {
      get: {
        summary: "Fetches user on waitlist using id",
        tags: ["Waitlist"],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
          },
        ],
        security: [
          {
            bearerAuth: [],
          },
        ],
        responses: {
          "200": {
            description: "Fetched waitlist data",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "string",
                    },
                    message: {
                      type: "string",
                    },
                    data: {
                      type: "object",
                      properties: {
                        userId: {
                          type: "string",
                        },
                        name: {
                          type: "string",
                        },
                        email: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          "404": {
            description: "Not Found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    errors: {
                      type: "object",
                      properties: {
                        status: {
                          type: "string",
                        },
                        message: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          "500": {
            description: "Error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    errors: {
                      type: "object",
                      properties: {
                        status: {
                          type: "string",
                        },
                        message: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/v1/waitlists/{id}": {
      delete: {
        summary: "Delete a user from waitlist using id",
        tags: ["Waitlist"],
        parameters: [
          {
            in: "path",
            name: "access_key",
            required: true,
          },
        ],
        security: [
          {
            bearerAuth: [],
          },
        ],
        responses: {
          "200": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "string",
                    },
                    message: {
                      type: "string",
                    },
                    key: {
                      type: "object",
                      properties: {
                        accessKey: {
                          type: "string",
                        },
                        created_At: {
                          type: "string",
                        },
                        expiry: {
                          type: "string",
                        },
                        status: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          "404": {
            description: "Not Found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    errors: {
                      type: "object",
                      properties: {
                        status: {
                          type: "string",
                        },
                        message: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          "500": {
            description: "Error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    errors: {
                      type: "object",
                      properties: {
                        status: {
                          type: "string",
                        },
                        message: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/v1/marketing": {
      get: {
        summary: "Fetches content of marketing page",
        tags: ["Marketing page"],
        security: [
          {
            bearerAuth: [],
          },
        ],
        responses: {
          "200": {
            description: "Fetched marketing data",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "string",
                    },
                    message: {
                      type: "string",
                    },
                    data: {
                      type: "object",
                    },
                  },
                },
              },
            },
          },
          "404": {
            description: "Not Found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    errors: {
                      type: "object",
                      properties: {
                        status: {
                          type: "string",
                        },
                        message: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          "500": {
            description: "Error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    errors: {
                      type: "object",
                      properties: {
                        status: {
                          type: "string",
                        },
                        message: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "/api/v1/me/users": {
      get: {
        summary: "Exports users data",
        tags: ["Export User"],
        security: [
          {
            bearerAuth: [],
          },
        ],
        responses: {
          "200": {
            description: "Fetched marketing data",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    status: {
                      type: "string",
                    },
                    message: {
                      type: "string",
                    },
                    data: {
                      type: "object",
                    },
                  },
                },
              },
            },
          },
          "404": {
            description: "Not Found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    errors: {
                      type: "object",
                      properties: {
                        status: {
                          type: "string",
                        },
                        message: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          "500": {
            description: "Error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    errors: {
                      type: "object",
                      properties: {
                        status: {
                          type: "string",
                        },
                        message: {
                          type: "string",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      User: userSchema,
      Notification: notificationSchema,
      Organisation: organisationSchema,
      UserOrganisation: userOrganisationSchema,
      Transactions: transactionSchema,
      Blog: blogSchema,
      Comment: commentSchema,
      Invites: invitesSchema,
      InvitesLink: myinvitesSchema,
      ActivityLog: activityLogSchema,
    },
  },
};
