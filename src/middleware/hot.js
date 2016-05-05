import express from "express";

console.log(module.id, __filename);

export default function hot(module, init) {
  if (module.hot) {
    module.hot.accept();

    console.info("✅  Server-side HMR Enabled!");
  } else {
    console.info("❌  Server-side HMR Not Supported.");
  }

  return (req, res, next) => {
    const router = express.Router();

    init(router);

    router.handle(req, res, next);
  };
}
