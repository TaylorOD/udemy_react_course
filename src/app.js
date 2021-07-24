console.log("app.js is running")

// JSX - JavaScript XML
var app = {
  title: "Hello Friends",
  subtitle: "Goodbye Friends"
}

var template = (
  <div>
    <h1> {app.title} </h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
)

var userName = "Taylor Dorsett"
var userAge = 29
var userLocation = "Remote"

var user = {
  name: "Tyler Doorman",
  age: 34,
  location: "Nebraska"
}


var templateTwo = (
  <div>
  <h1>{userName.toUpperCase() + "!"}</h1>
  <p>Age: {userAge}</p>
  <p>Location: {userLocation}</p>

  <h1>{user.name}</h1>
  <p>Age: {user.age}</p>
  <p>{user.location}</p>
  </div>
)
var appRoot = document.getElementById("app")

// ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot)