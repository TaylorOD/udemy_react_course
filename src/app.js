// import "./utlis.js"
// import subtract, { square, add } from "./utlis"
// import isSenior, { isAdult, canDrink } from "./person"
import validator from "validator";
import React from "react"
import ReactDOM from "react-dom"

// console.log("app.js is running")
// console.log(square(5))
// console.log(add(5, 15))
// console.log(isAdult(17))
// console.log(isAdult(19))
// console.log(canDrink(19))
// console.log(canDrink(25))
// console.log(subtract(100, 81))
// console.log(isSenior(64))
// console.log(isSenior(66))

console.log(validator.isEmail("taylorsunwantedemails@gmail.com"))
console.log(validator.isEmail("taylorsunwantedemailsgmail.co"))

const template = React.createElement("p", {}, "testing123")
ReactDOM.render(template, document.getElementById("app"))