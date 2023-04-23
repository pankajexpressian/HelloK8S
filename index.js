const express = require("express");
const app = express();
const port = 3333;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/`);
});
