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



var templateTwo = (
  <div>
    <h1>Taylor Dorsett</h1>
    <p>Age: 29</p>
    <p>Location: Remote</p>
  </div>
)
var appRoot = document.getElementById("app")

// ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot)