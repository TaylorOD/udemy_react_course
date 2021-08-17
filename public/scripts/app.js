"use strict";

var square = function square(x) {
  return x * x;
};

var squareArrow = function squareArrow(x) {
  return x * x;
};
var squareArrow2 = function squareArrow2(x) {
  return x * x;
};

console.log(square(5));
console.log(squareArrow(5));
console.log(squareArrow2(5));

var getFirstName = function getFirstName(fullName) {
  return fullName.split(" ")[0];
};
var getFirstName2 = function getFirstName2(fullName) {
  return fullName.split(" ")[0];
};

console.log(getFirstName("Taylor Dorsett"));
console.log(getFirstName2("Taylor Dorsett"));
