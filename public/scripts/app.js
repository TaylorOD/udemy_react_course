"use strict";

console.log("app.js is running");

// JSX - JavaScript XML
var app = {
  title: "Hello Friends",
  subtitle: "Goodbye Friends"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    " ",
    app.title,
    " "
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item One"
    ),
    React.createElement(
      "li",
      null,
      "Item Two"
    )
  )
);

var userName = "Taylor Dorsett";
var userAge = 29;
var userLocation = "Remote";

var user = {
  name: "Tyler Doorman",
  age: 34,
  location: "Nebraska"
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    userName.toUpperCase() + "!"
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    userAge
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    userLocation
  ),
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    user.location
  )
);
var appRoot = document.getElementById("app");

// ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);
