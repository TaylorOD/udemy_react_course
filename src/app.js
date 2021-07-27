class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>Indecision App</h1>
        <h2>Put your life in the hands of the computer</h2>
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

class Option extends React.Component {
  render () {
    return (
      <div>
        <p> Render Options Here </p>
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

const jsx = (

  <div>
    <h1>Title</h1>
    <Header />

    <Action />
    <Option />
    <AddOption />
  </div>
  )

ReactDOM.render(jsx, document.getElementById("app"))