import express from "express";
import hot from "./middleware/hot";

const app = express();

console.log(module.id, __filename);

app.use(hot(module, (router) => {
  router
    .use("/api", require("./middleware/api").default)
    .use(require("./middleware/view").default)
  ;
}));

export default app;
