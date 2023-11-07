class Fibonacci {
  // Execute is a generator method (declared with the *), which means
  // it can "return" (yield) multiple values, without depending on
  // workarounds such as returning an array. the method will yield
  // its values on demand, when they become available.
  *execute(input, current = 0, next = 1) {
    // all sequences processed, time to stop
    if (input === 0) return;

    yield current;

    // delegates function execution but will not return value
    yield* this.execute(input - 1, next, current + next);
  }
}

module.exports = Fibonacci;
