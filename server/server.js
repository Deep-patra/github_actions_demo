const app = require('./app');

const server = app.listen(process.env.PORT || 5000, (err) => {
  if (err) {
    // log the error and exit the process
    console.error(err);
    process.exit(1);
  }

  console.log("Server is listening on port:", process.env.PORT || 5000);
});


process.on("SIGINT", () => {
  console.log("Server is closing ...");
  server.close();
  process.exit(0);
});

process.on("uncaughtException", (err) => {
  console.error(err);
  console.log("Server is closing ...")
  server.close();

  process.exit(1);
});