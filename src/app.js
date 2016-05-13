import express from "express";

const app = express();

app
  .use("/api", require("./middleware/api").default)
  .use(require("./middleware/view").default)
;

export default app;
