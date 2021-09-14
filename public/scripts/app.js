"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.handleAddOne = _this.handleAddOne.bind(_this);
    _this.handleRemoveOne = _this.handleRemoveOne.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);
    _this.state = {
      count: props.count
    };
    return _this;
  }

  _createClass(Counter, [{
    key: "handleAddOne",
    value: function handleAddOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: "handleRemoveOne",
    value: function handleRemoveOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count - 1
        };
      });
    }
  }, {
    key: "handleReset",
    value: function handleReset() {
      this.setState(function () {
        return {
          count: 0
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
          "Counter: ",
          this.state.count
        ),
        React.createElement(
          "button",
          { onClick: this.handleAddOne },
          "+1"
        ),
        React.createElement(
          "button",
          { onClick: this.handleRemoveOne },
          "-1"
        ),
        React.createElement(
          "button",
          { onClick: this.handleReset },
          "Reset"
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

Counter.defaultProps = {
  count: 0
};

ReactDOM.render(React.createElement(Counter, { count: 5 }), document.getElementById("app"));

// let count = 0
// // const myIDHere = "my-plus-id"
// const add1 = () => {
//   count = count + 1
//   renderCounterApp()
// }
// const minusFunction = () => {
//   count = count - 1
//   // console.log("Reset")
//   renderCounterApp()
// }
// const resetFunction = () => {
//   count = 0
//   // console.log("Reset")
//   renderCounterApp()
// }
// const multiplyBy2 = () => {
//   count = count * 2
//   renderCounterApp()
// }
// const templateTwo = (
//   <div>
//     <h1>Count: {count}</h1>
//     <button
//       id="my-minus-id"
//       className="class"
//       onClick={() => {
//         console.log("minus-1")
//       }}
//     >
//       +1
//     </button>
//     <button id={myIDHere} className="class" onClick={add1}>
//       -1
//     </button>
//     <button onClick={multiplyBy2}>Multiply by 2</button>

//     <button onClick={resetFunction}>Reset</button>
//   </div>
// )
// console.log(templateTwo)

// ReactDOM.render(templateTwo, document.getElementById("app"))
// Add whatever element you want to render to the .render function

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button
//         // id="my-minus-id"
//         // className="class"
//         onClick={add1}
//       >
//         +1
//       </button>
//       <button
//         // id={myIDHere}
//         // className="class"
//         onClick={minusFunction}
//       >
//         -1
//       </button>
//       <button onClick={multiplyBy2}>Multiply by 2</button>
//       <button onClick={resetFunction}>Reset</button>
//     </div>
//   )
//   ReactDOM.render(templateTwo, document.getElementById("app"))
// }

// renderCounterApp()
