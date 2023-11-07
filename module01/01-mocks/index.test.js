const File = require("./src/file");

const { error } = require("./src/constants");

const assert = require("assert");

// IFEE - self running function
(async () => {
  // variables created in this block will only exist during its execution
  {
    const filePath = "./mocks/invalid-empty-file.csv";
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJSON(filePath);
    await assert.rejects(result, expected);
  }

  {
    const filePath = "./mocks/invalid-five-items.csv";
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJSON(filePath);
    await assert.rejects(result, expected);
  }
  {
    const filePath = "./mocks/invalid-header.csv";
    const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE);
    const result = File.csvToJSON(filePath);
    await assert.rejects(result, expected);
  }

  {
    const filePath = "./mocks/valid-three-items.csv";
    const expected = [
      {
        id: 1,
        name: "john sample",
        profession: "developer",
        age: 120,
      },
      {
        id: 2,
        name: "jose da silva",
        profession: "manager",
        age: 121,
      },
      {
        id: 3,
        name: "erick someone",
        profession: "QA",
        age: 25,
      },
    ];
    const result = await File.csvToJSON(filePath);
    await assert.deepEqual(result, expected);
  }
})();
