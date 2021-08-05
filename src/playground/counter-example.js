class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleRemoveOne = this.handleRemoveOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }
  handleAddOne() {
    alert("Added One")
  }
  handleRemoveOne() {
    alert("Removed One")
  }
  handleReset() {
    alert("Reset Counter")
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