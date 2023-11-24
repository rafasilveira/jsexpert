const BaseRepository = require("../respository/base/baseRepository");

class CarService {
  constructor({ cars }) {
    this.carRepository = new BaseRepository({ file: cars });
  }

  getRandomPositionFromArray(list) {
    const listLength = list.length;

    return Math.floor(Math.random() * listLength);
  }

  getAvailableCar(carCategory) {
    return null;
  }

  test(id) {
    return this.carRepository.find(id);
  }
}

module.exports = CarService;
