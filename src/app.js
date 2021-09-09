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

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  )
}
// class Header extends React.Component {
//   render () {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     )
//   }
// }

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  )
}
// class Action extends React.Component {
//   render () {
//     return (
//       <div>
//         <button
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOptions}
//         >
//           What should I do?
//         </button>
//       </div>
//     )
//   }
// }
const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDelateOptions}> Remove All Options</button>
      <p> Render Options Here like the ones below</p>
      {props.options.map((option) => (
        <Option key={option} optionText={option} />
      ))}
      <Option />
    </div>
  )
}
// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDelateOptions}> Remove All Options</button>
//         <p> Render Options Here like the ones below</p>
//         {this.props.options.map((option) => (
//           <Option key={option} optionText={option} />
//         ))}
//         <Option />
//       </div>
//     )
//   }
// }

const Option = (props) => {
      return <div>Option: {props.optionText}</div>
}
// class Option extends React.Component {
//   render () {
//     return (
//       <div>
//         Option: { this.props.optionText }
//       </div>
//     )
//   }
// }
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

// const User = () => {
//   return (
//     <div>
//     <p>Name: {props.name}</p>
//     <p>Age: {props.age}</p>
//     </div>
//   )
// }

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))