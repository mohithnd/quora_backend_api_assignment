const express = require("express");
const { PORT } = require("./config/server.config");
const connectToDb = require("./config/db.config");
const apiRouter = require("./routes");
const { errorHandler } = require("./utils");

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.get("/ping", (req, res) => {
  res.json({ message: "Ping Successfull" });
});

app.use(apiRouter);

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server Is Running On Port ${PORT}`);
  await connectToDb();
  console.log("Successfully Connected To DB Server");
});
