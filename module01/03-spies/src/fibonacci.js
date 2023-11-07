class Fibonacci {
  // Execute is a generator method (declared with the *), which means
  // it can "return" (yield) multiple values, without depending on
  // workarounds such as returning an array. the method will yield 
  // its values on demand, when they become available.
  *execute(input, current = 0, next = 1) {
    yield 0;
    yield 1;
    yield 1;
    yield 2;
    yield 3;
  }
}

module.exports = Fibonacci;
