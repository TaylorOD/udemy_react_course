class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleRemoveOne = this.handleRemoveOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      count: 0
    }
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }
  handleRemoveOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Counter:</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleRemoveOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

reactDom.render(<Counter />, document.getElementById("#app"))

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