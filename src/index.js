const express = require("express");
const { PORT } = require("./config/server.config");

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.get("/ping", (req, res) => {
  res.json({ message: "Ping Successfull" });
});

app.listen(PORT, () => {
  console.log(`Server Is Running On Port ${PORT}`);
});
