import { blogSchema } from "./blog";
import { commentSchema } from "./comment";
import { emailTTemplateSchema } from "./emailTemplates";
import { invitesSchema } from "./invites";
import { organisationSchema } from "./organisations";
import { transactionSchema } from "./transactions";
import { userOrganisationSchema } from "./userorganisation";
import { userSchema } from "./users";
import { contentEdit, getWidget, getWidgets, search, transactionsChart } from "./widgets";

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
      name: "User",
      description: "Everything about your Users",
    },
    {
      name: "Organisation",
      description: "Access to user's organisation(s)",
    },
    {
      name: "EmailTemplates",
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
  ],
  paths: {
    'user/{user_id}/dashboard/blogs': {
      get: getWidgets,
    },
    'user/{user_id}/dashboard/{blogs}/{blog_id}': {
      get: getWidget,
    },
    "user/{user_id}/dashboard?search='dftor'&order='asc'": {
      get:search,
    },
    "user/{user_id}/dashboard/transactions/chart": {
      get: transactionsChart,
    },
    "user/{user_id}/dashboard/{random_data}/{random_data}/edit": {
      put: contentEdit,
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
