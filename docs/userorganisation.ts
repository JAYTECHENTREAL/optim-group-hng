export const userOrganisationSchema = {
    type: "object",
    properties: {
      id: {
        type: "integer",
        format: "int64",
        example: 6,
      },
      user_id: {
        type: "integer",
        format: "int64",
        example: 12,
      },
      org_id: {
        type: "integer",
        format: "int64",
        example: 12,
      },
    },
  };