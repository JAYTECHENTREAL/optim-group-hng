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
  language,
  notificationSchema,
  userSchema,
  usersTransactions,
} from "./users";

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
      name: "Organisation",
      description: "Access to user's organisation(s)",
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
    { name: "Super Admin", description: "Everything about admin actions" },
    { name: "Settings", description: "Application settings" },
    { name: "Profile", description: "User profile settings" },
    { name: "Landing Page", description: "Static pages" },
    { name: "Contact", description: "Contact Us" },
  ],
  paths: {
    user: {
      get: usersTransactions,
    },
    "/admin/users": {
      get: adminGetAllUsers,
      post: adminAddUser,
    },
    "/admin/users/{id}": {
      get: adminGetUserById,
      put: adminUpdateUserById,
      delete: adminDeleteUserById,
    },
    "/admin/organisations": {
      get: adminGetOrganisations,
      post: adminAddOrganisation,
    },
    "/admin/organisations/{id}": {
      get: adminGetOrgById,
      put: adminUpdateOrgById,
      delete: adminDeleteOrgById,
    },
    "/admin/activity-logs": {
      get: adminGetActivityLogs,
    },
    "/admin/transactions": {
      get: adminGetTransactionRecords,
    },
    "/admin/emailtemplate": emailTemplates,
    "/admin/emailtemplate/{id}": getEmailTemplates,
    "/admin/sendemail/": sendEmail,
    "/settings": settings,
    "/profile": profileSettings,
    "/notifications": notification,
    "/lang": language,
    "/getInviteLink": inviteLink,
    "/landing/privacy-policy": landingPages.privacyPolicy,
    "/landing/about-us": landingPages.aboutUs,
    "/contact": contactUs,
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
