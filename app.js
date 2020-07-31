const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/friends", function (req, res) {
  let friends = ["Mark", "Tony", "Haruki", "Bob"];
  res.render("friends", { friends: friends });
});

app.listen(3000, function () {
  console.log("Server Ported on 3000");
  console.log("vamos")
});
