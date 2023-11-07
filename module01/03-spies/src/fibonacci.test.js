// Fibonacci sequence: next number is the sum of its previous

const { createSandbox } = require("sinon");
const Fibonacci = require("./fibonacci");

const sinon = createSandbox();
const fibonacci = new Fibonacci();

(async () => {
  for (const sequence of fibonacci.execute(10)) {
    console.log({ sequence });
  }
})();
