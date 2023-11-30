const { join } = require("path");
const assert = require("assert");
const { expect } = require("chai");
const { describe, it } = require("mocha");

const CarService = require("../../src/service/carService");

const carsDatabase = join(__dirname, "../../database", "cars.json");

const mocks = {
  validCarCategory: require("../mocks/valid-car-category.json"),
  validCar: require("../mocks/valid-car.json"),
  validCustomer: require("../mocks/valid-customer.json"),
};

describe("CarService Test Suite", () => {
  let carService = {};
  before(() => {
    carService = new CarService({
      cars: carsDatabase,
    });
  });

  // it("given a carCategory it should return an available car", async () => {
  //   const car = mocks.validCar;
  //   const carCategory = Object.create(mocks.validCarCategory);
  //   carCategory.ids = [car.id];

  //   const result = await carService.getAvailableCar(carCategory);
  //   const expected = car;

  //   expect(result).to.be.deep.equal(expected);
  // });

  it("should retrieve a random position from an array", () => {
    const data = [0, 1, 2, 3, 4];
    const result = carService.getRandomPositionFromArray(data);

    expect(result).to.be.lt(data.length).and.be.gte(0);
  });

  it("should choose the first id from carIds in carCategory", () => {
    const carCategory = mocks.validCarCategory;
    const carIdIndex = 0;

    const result = carService.chooseRandomCar(carCategory);
    const expected = carCategory.carIds[carIdIndex];

    expect(result).to.be.equal(expect);

  });
});
