// Fibonacci sequence: next number is the sum of its previous

const { createSandbox } = require("sinon");
const Fibonacci = require("./fibonacci");
const assert = require("assert");

const sinon = createSandbox();

(async () => {
  {
    const fibonacci = new Fibonacci();
    const spy = sinon.spy(fibonacci, fibonacci.execute.name);
    const numSequences = 3;

    // Num of sequences: 3
    // [0] input = 3, current = 0, next = 1 -> result = 0
    // [1] input = 2, current = 1, next = 1 -> result = 1
    // [2] input = 1, current = 1, next = 2 -> result = 1
    // [3] input = 0, current = 2, next = 3 -> stop

    for (const sequence of fibonacci.execute(numSequences)) {
    }
    const expectedCallCount = numSequences + 1;
    assert.strictEqual(spy.callCount, expectedCallCount);
  }

  {
    const fibonacci = new Fibonacci();
    const spy = sinon.spy(fibonacci, fibonacci.execute.name);
    const numSequences = 5;

    // Num of sequences: 5
    // [0] input = 5, current = 0, next = 1 -> result = 0
    // [1] input = 4, current = 1, next = 1 -> result = 1
    // [2] input = 3, current = 1, next = 2 -> result = 1
    // [3] input = 2, current = 2, next = 3 -> result = 2
    // [4] input = 1, current = 3, next = 5 -> result = 3
    // [5] input = 0, current = 5, next = 8 -> stop

    const results = [ ...fibonacci.execute(numSequences) ];

    // grabs what was given as input to the spied call at execution #2
    const { args } = spy.getCall(2);
    const expectedParams = [3, 1, 2];

    const expectedResults = [0, 1, 1, 2, 3];

    assert.deepStrictEqual(
      args,
      expectedParams,
      "args array is different from expected"
    );
    assert.deepStrictEqual(
      results,
      expectedResults,
      "results array is different from expected"
    );
  }
})();
