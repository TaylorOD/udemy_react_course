class IndecisionApp extends React.Component {
  constructor(props){
    super(props)
    this.handleDelateOptions = this.handleDelateOptions.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.state = {
      options: [],
    }
  }
  handleDelateOptions() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  handleAddOption (option) {
    if (!option) {
      return "Enter Valid Option"
    } else if (this.state.options.indexOf(option) > -1) {
      return "This Option Already Exists"
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    })
  }
  handlePick() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNumber]
    alert(option)
  }
  render () {
    const title = "Indecision App"
    const subtitle = "Put your life in the hands of the computer"

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>

        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDelateOptions={this.handleDelateOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}
class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render () {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDelateOptions}> Remove All Options</button>
        <p> Render Options Here like the ones below</p>
        {this.props.options.map((option) => (
          <Option key={option} optionText={option} />
        ))}
        <Option />
      </div>
    )
  }
}

class Option extends React.Component {
  render () {
    return (
      <div>
        Option: { this.props.optionText }
      </div>
    )
  }
}

class AddOption extends React.Component {
  constructor (props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    }
  }
  handleAddOption (e) {
    e.preventDefault()

    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
    this.setState(() => {
      return { error }
    })
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))

// let appRoot = document.getElementById("app")
// var app = {
//   title: "Indecision App",
//   subtitle: "Put your life in the hands of a computer",
//   options: [],
// }

// const onFormSubmit = (event) => {
//   event.preventDefault();
//   const option = event.target.elements.option.value
//   if (option) {
//     app.options.push(option)
//     event.target.elements.option.value = ""
//     renderTemplate()
//   }
// }

// const resetOptions = () => {
//   app.options = []
//   renderTemplate()
// }

// const onMakeDecision = () => {
//   const randomNumber = Math.floor(Math.random() * app.options.length)
//   const option = app.options[randomNumber]
//   alert(option)
// }


// const numbers = [55, 100, 1200]

// const renderTemplate = () => {
//   var template = (
//     <div>
//       <h1>{app.title}</h1>
//       {app.subtitle && <p>{app.subtitle}</p>}
//       <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
//       <p>{app.options.length}</p>

//       <button disabled={app.options.length === 0} onClick={onMakeDecision}> What should I do?</button>
//       <button onClick={resetOptions}>Reset Options</button>
//       {
//         numbers.map((number) => {
//           return <p key={number}>Number: {number}</p>
//         })
//       }
//       <ol>
//       {
//         app.options.map((item) => {
//           return <li key={item}>{item}</li>
//         })
//       }

//       </ol>
//       <form onSubmit={onFormSubmit}>
//         <input type="text" name="option" />
//         <button>Add Option</button>
//       </form>
//     </div>
//   )
//   ReactDOM.render(template, appRoot)
// }

// renderTemplate()