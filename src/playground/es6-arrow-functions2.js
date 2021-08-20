// Argument objects are no longer bound in arrow functions

const add = function (a, b) {
  console.log(arguments)
  return a + b

}
console.log(add(55, 1))

const addArrow = (a, b) => a + b

const addArrow2 = (a, b) => {
  // Arguments are no longer bound. Just that key word.
  // console.log(arguments)
  return a + b
}

// this keyword no longer bound in array functions

// Doesnt work
const user = {
  name: "Taylor",
  cities: ["new York", "Chicago", "Cali"],
  printPlacesLived: function () {
    console.log(this.name)
    console.log(this.cities)

    this.cities.forEach(function (city) {
      console.log(this.name + " " + city)
    })
  }
}
// Does work
const user2 = {
  name: "Taylor",
  cities: ["new York", "Chicago", "Cali"],
  printPlacesLived() {
    console.log(this.name)
    console.log(this.cities)
    const cityMessages = this.cities.map((city) => {
      return this.name + " " + city
    })
    console.log(cityMessages)

    this.cities.forEach((city) => {
      console.log(this.name + " " + city)
    })
  }
}

const multiplier = {
  numbers:[1, 3, 5],
  multiplier: 2,
  // ES6 function syntax
  multiplyBy() {
    const multipliedNumbers = this.numbers.map((number) => number * this.multiplier)
    return multipliedNumbers
  }
}
console.log(multiplier.multiplyBy())