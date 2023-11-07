// Fibonacci sequence: next number is the sum of its previous
const { createSandbox } = require("sinon");

const Fibonacci = require("./fibonacci");

const fibonacci = new Fibonacci();
(async () => {
  for (const sequence of fibonacci.execute(5)) {
    console.log({ sequence });
  }
})();
