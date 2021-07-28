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
  render () {
    return (
      <div>
        <button> What should I do? </button>
      </div>
    )
  }
}

class Options extends React.Component {
  render () {
    return (
      <div>
        <p> Render Options Here like the ones below</p>
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
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
  render () {
    return (
      <div>
        <p> Add Options Here </p>
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