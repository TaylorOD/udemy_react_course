console.log("app.js is running")

// JSX - JavaScript XML
var template = (
  <div>
    <h1> Indecision App </h1>
    <p>This is some text</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
)
var appRoot = document.getElementById("app")

ReactDOM.render(template, appRoot);