const Base = require("./base/base");

class Customer extends Base {
  constructor({ id, name, age }) {
    super({ name, id });

    this.age = age;
  }
}

module.exports = Customer;
