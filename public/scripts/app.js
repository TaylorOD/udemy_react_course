"use strict";

console.log("app.js is running");

// JSX - JavaScript XML
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    " Indecision App "
  ),
  React.createElement(
    "p",
    null,
    "This is some text"
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

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Taylor Dorsett"
  ),
  React.createElement(
    "p",
    null,
    "Age: 29"
  ),
  React.createElement(
    "p",
    null,
    "Location: Remote"
  )
);
var appRoot = document.getElementById("app");

// ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);
