import { blogSchema } from "./blog";
import { commentSchema } from "./comment";
import { emailTTemplateSchema } from "./emailTemplates";
import { invitesSchema } from "./invites";
import { organisationSchema } from "./organisations";
import { transactionSchema } from "./transactions";
import { userOrganisationSchema } from "./userorganisation";
import { userSchema, usersTransactions } from "./users";

export const apiDocumentation = {
  openapi: "3.1.0",
  info: {
    version: "1.0.0",
    title: "REST API - Documentation",
    description: "Description of my API here in Node.js Template",
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
      name: "user",
      description: "Everything about your Users",
    },
    {
      name: "organisation",
      description: "Access to user's organisation(s)",
    },
    {
      name: "emailTemplates",
      description: "Email template messaging",
    },
    {
      name: "transactions",
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
  ],
  paths: {
    user: {
      get: usersTransactions,
    }
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    schemas: {
      User: userSchema,
      Organisation: organisationSchema,
      UserOrganisation: userOrganisationSchema,
      EmailTemplates: emailTTemplateSchema,
      Transactions: transactionSchema,
      Blog: blogSchema,
      Comment: commentSchema,
      Invites: invitesSchema,
    },
  },
};
