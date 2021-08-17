const square = function (x) {
  return x * x
}

const squareArrow = (x) => {
  return x * x
}
  const squareArrow2 = (x) => x * x

console.log(square(5))
console.log(squareArrow(5))
console.log(squareArrow2(5))

const getFirstName = (fullName) => {
  return fullName.split(" ")[0]
}
const getFirstName2 = (fullName) => fullName.split(" ")[0]

console.log(getFirstName("Taylor Dorsett"))
console.log(getFirstName2("Taylor Dorsett"))