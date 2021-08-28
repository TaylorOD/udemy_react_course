"use strict";

// visibility toggle text
// Button - when clicked shows something and changes to/from hide text to show text
// Button shows text or removes text when clicked
// text can be anything like hey this is visible

// Look at app.js and counterExample.js

// src/playground/build-it-visibility.js
// babel src/playground/build-it-visibility.js --out-file=public/scripts/app.js --presets=env,react --watch

var app = {
  title: "Visibility Toggle",
  someText: "",
  buttonText: "Show Text"

  // let visibility = false

};var appRoot = document.getElementById("app");

var toggleText = function toggleText() {
  if (app.someText.length <= 0) {
    app.someText = "Here is some text!";
  } else {
    app.someText = "";
  }
  toggleButtonText();
  visibilityToggle();
  visibility = !visibility;
};
var toggleButtonText = function toggleButtonText() {
  if (app.buttonText === "Show Text") {
    app.buttonText = "Hide Text";
  } else {
    app.buttonText = "Show Text";
  }
};

var visibilityToggle = function visibilityToggle() {
  var visibilityHTML = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    React.createElement(
      "button",
      { onClick: toggleText },
      app.buttonText,
      visibility ? "Hide Text" : "Show Text"
    ),
    app.someText && React.createElement(
      "p",
      null,
      app.someText
    ),
    visibility && React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        " Here is some text! "
      )
    )
  );
  ReactDOM.render(visibilityHTML, appRoot);
};

visibilityToggle();

// Another way:

// let visibility = false

// let appRoot = document.getElementById("app")

// const toggleText = () => {
//   visibility = !visibility
//   visibilityToggle()
// }

// const visibilityToggle = () => {
//   var visibilityHTML = (
//     <div>
//       <h1>{app.title}</h1>

//       <button onClick={toggleText}>
//       {visibility ? "Hide Text" : "Show Text"}
//       </button>
//       {visibility && (
//         <div>
//           <p> Here is some text! </p>
//         </div>
//       )}
//     </div>
//   )
//   ReactDOM.render(visibilityHTML, appRoot)
// }

// visibilityToggle()
