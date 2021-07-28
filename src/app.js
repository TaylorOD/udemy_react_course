class IndecisionApp extends React.Component {
  render () {
    const title = "Indecision App"
    const subtitle = "Put your life in the hands of the computer"
    const options = ["thing 1", "thing 2", "thing 3"]
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>

        <Action />
        <Options options={options}/>
        <AddOption />
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
  handlePick() {
    alert("Handle Pick")
  }

  render () {
    return (
      <div>
        <button onClick={this.handlePick}> What should I do? </button>
      </div>
    )
  }
}

class Options extends React.Component {
  handleRemoveAll() {
    alert("Handle Remove All")
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}> Remove All Options</button>
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
  handleAddOption (e) {
    e.preventDefault()

    const option = e.target.elements.option.value.trim()

    if (option) {
      alert(option)
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

// const jsx = (

//   <div>
//     <h1>Title</h1>
//     <Header />

//     <Action />
//     <Option />
//     <AddOption />
//   </div>
//   )

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))