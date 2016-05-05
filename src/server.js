import app from "./app";

export default app.listen(3000, function(err) {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Listening at http://localhost:3000");
});
