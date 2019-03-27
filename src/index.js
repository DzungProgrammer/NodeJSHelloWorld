const express = require("express");

const app = express();

app.get("/", function(req, res) {
  res.send("<h1>Hello World </h1>");
});

app.get("/contact", function(req, res) {
  res.send("Mother calls you");
});

app.get("/hobbies", function(req, res) {
  res.send("Eating Schnitzel with rice and tartar sauce");
});

app.get("/about", function(req, res) {
  res.send("I love Schnitzel and Plebca");
});

app.get("/calc", function(req, res) {
  var formular = "<form action='/calc' method='post'>";
  formular += "<input type='text' name='num1' placeholder='První číslo' />";
  formular += "<input type='text' name='num2' placeholder='Druhý číslo' />";
  formular += "<button type='submit' name='submit'>Kalkuluj!</button>";
  formular += "</form>";
  res.send(formular);
});

app.post("/calc", function(req, res) {
  var n1 = Number(req.body.num);
  var n2 = Number(req.body.num);
  var result = n1 + n2;
  res.send("The result is: " + result);
});

app.get("/fibo", function(req, res) {
  var formular = "<form action='/fibo' method='post'>";
  formular += "<input type='text' name='num1' placeholder='Velikost řady' />";
  formular += "<button type='submit' name='submit'>Kalkuluj!</button>";
  formular += "</form>";
  res.send(formular);
});

app.post("/fibo", function(req, res) {
  var size = Number(req.body.num);
  var num = size;
  var result = [];
  var a = 1,
    b = 0,
    temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
    result.push(b);
  }

  res.send(result);
});

app.listen(8080, function() {
  console.log("Server běží na portu 8080");
});
