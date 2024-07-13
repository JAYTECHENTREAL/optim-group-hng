import swaggerUi from 'swagger-ui-express';
import express from 'express';
import { apiDocumentation } from "./docs/apidocs";

const port = 4500;

const app = express();

app.use("/documentation", swaggerUi.serve, swaggerUi.setup(apiDocumentation));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
