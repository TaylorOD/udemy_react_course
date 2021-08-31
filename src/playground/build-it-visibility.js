// src/playground/build-it-visibility.js
// babel src/playground/build-it-visibility.js --out-file=public/scripts/app.js --presets=env,react --watch

// VisibilityToggle -> render, constuctor, handleToggle

// make visbility toggle and set to false

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.handleVisibility = this.handleVisibility.bind(this)
    this.state = {
      visibility: false
    }
  }
  handleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleVisibility}>{this.state.visibility ? "Hide Text" : "Show Text"}</button>
        {this.state.visibility && (
          <div>
            <p> Here is some text! </p>
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"))

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
