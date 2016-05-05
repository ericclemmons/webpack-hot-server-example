import express from "express";

console.log(module.id, __filename);

export default express.Router()
  .get("/", (req, res) => {
    res.send(`The date is now: ${new Date()}`);
  })
;
