console.log("utlis.js is running")

const square = (x) => (x * x)

const add = (a, b) => (a + b)

const subtract = (a, b) => (a - b)

// export { square, add};
export { square, add, subtract as default };

// export default subtract