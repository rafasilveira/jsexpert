const BaseRepository = require("../respository/base/baseRepository");

class CarService {
  constructor({ cars }) {
    this.carRepository = new BaseRepository({ file: cars });
  }

  getAvailableCar(carCategory) {
    return null;
  }

  test(id) {
    return this.carRepository.find(id);
  }
}

module.exports = CarService;
