"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// src/playground/build-it-visibility.js
// babel src/playground/build-it-visibility.js --out-file=public/scripts/app.js --presets=env,react --watch

// VisibilityToggle -> render, constuctor, handleToggle

// make visbility toggle and set to false

var VisibilityToggle = function (_React$Component) {
  _inherits(VisibilityToggle, _React$Component);

  function VisibilityToggle(props) {
    _classCallCheck(this, VisibilityToggle);

    var _this = _possibleConstructorReturn(this, (VisibilityToggle.__proto__ || Object.getPrototypeOf(VisibilityToggle)).call(this, props));

    _this.handleVisibility = _this.handleVisibility.bind(_this);
    _this.state = {
      visibility: false
    };
    return _this;
  }

  _createClass(VisibilityToggle, [{
    key: "handleVisibility",
    value: function handleVisibility() {
      this.setState(function (prevState) {
        return {
          visibility: !prevState.visibility
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Visibility Toggle"
        ),
        React.createElement(
          "button",
          { onClick: this.handleVisibility },
          this.state.visibility ? "Hide Text" : "Show Text"
        ),
        this.state.visibility && React.createElement(
          "div",
          null,
          React.createElement(
            "p",
            null,
            " Here is some text! "
          )
        )
      );
    }
  }]);

  return VisibilityToggle;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityToggle, null), document.getElementById("app"));

// let visibility = false

// let appRoot = document.getElementById("app")

// const toggleText = () => {
//   if (app.someText.length <= 0) {
//     app.someText = "Here is some text!"
//   } else {
//     app.someText = ""
//   }
//   toggleButtonText()
//   visibilityToggle()
//   visibility = !visibility
// }
// const toggleButtonText = () => {
//   if (app.buttonText === "Show Text") {
//     app.buttonText = "Hide Text"
//   } else {
//     app.buttonText = "Show Text"
//   }
// }

// const visibilityToggle = () => {
//   var visibilityHTML = (
//     <div>
//       <h1>{app.title}</h1>

//       <button onClick={toggleText}>{app.buttonText}
//       {visibility ? "Hide Text" : "Show Text"}
//       </button>
//       {app.someText && <p>{app.someText}</p>}
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
