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
  try {
    console.log("------------------------");
    console.log("This is from configmap");
    console.log(process.env.APP_USER_NAME);
    console.log(process.env.APP_USER_EMAIL);
    console.log("------------------------");
    console.log("\n\n");
    console.log("------------------------");
    console.log("This is from configmap");
    console.log(process.env.USER_NAME);
    console.log(process.env.PASSWORD);
    console.log("------------------------");
  } catch (error) {
    console.log("Error reading the evnt variables");
  }
  return process.env;
}
