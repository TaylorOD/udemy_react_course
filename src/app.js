class IndecisionApp extends React.Component {
  constructor(props){
    super(props)
    this.handleDelateOptions = this.handleDelateOptions.bind(this)
    this.handleDelateOption = this.handleDelateOption.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.state = {
      options: props.options,
    }
  }
  handleDelateOptions() {
    this.setState(() => ({ options: [] }))
  }

  handleDelateOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  }

  handleAddOption (option) {
    if (!option) {
      return "Enter Valid Option"
    } else if (this.state.options.indexOf(option) > -1) {
      return "This Option Already Exists"
    }
    this.setState((prevState) => ({ options: prevState.options.concat(option) }))
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
        <Header subtitle={subtitle}/>

        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDelateOptions={this.handleDelateOptions} // All option
          handleDelateOption={this.handleDelateOption} // Single option
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
}

Header.defaultProps = {
  title: "Indecision App"
}

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDelateOptions}> Remove All Options</button>
      <p> Render Options Here like the ones below</p>
      {props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDelateOption={props.handleDelateOption}
        />
      ))}
      <Option />
    </div>
  )
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDelateOption(props.optionText)
        }}
      >
        Remove
      </button>
    </div>
  )
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
    this.setState(() => ({ error }))
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

ReactDOM.render(<IndecisionApp/>, document.getElementById("app"))