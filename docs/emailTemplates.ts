export const emailTTemplateSchema = {
  type: "object",
  properties: {
    id: {
      type: "integer",
      format: "int64",
      example: 6,
    },
    title: {
      type: "string",
      format: "title",
      example: "Welome",
    },
    description: {
      type: "string",
      format: "details",
      example: "Welcome to our organisation",
    },
    created_at: {
      type: "string",
      format: "date-time",
      example: "2019-10-12T07:20:50.52Z",
    },
    updated_at: {
      type: "string",
      format: "date-time",
      example: "2022-10-12T07:20:50.52Z",
    },
  },
};
