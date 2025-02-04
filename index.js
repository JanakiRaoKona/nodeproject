const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.get("/date", (request, response) => {
  let date = new Date();
  response.send(`Today date is ${date}`);
});

app.listen(3000);

app.get("/page", (request, response) => {
  response.sendFile("/page.html", { root: __dirname });
});
