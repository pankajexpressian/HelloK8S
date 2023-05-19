const express = require("express");
const app = express();
const port = 3333;

let env_variables = "";

app.get("/", (req, res) => {
  var message =
    "Hello World! from default endpoint\n\n" +
    JSON.stringify(getEnvVariables());
  res.send(message);
  console.log(process.env);
});

app.get("/home", (req, res) => {
  var message =
    "Hello World! from Home endpoint\n\n" + JSON.stringify(getEnvVariables());
  res.send(message);
  console.log(process.env);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/`);
});

function getEnvVariables() {
  return process.env;
}
