const { error } = require("./constants");
const { readFile } = require("fs/promises");

const DEFAULT_OPTIONS = {
  maxLines: 3,
  fields: ["id", "name", "profession", "age"],
};

class File {
  static async csvToJSON(filePath) {
    const content = await readFile(filePath, "utf-8");

    const validation = this.isValid(content);

    if (!validation.valid) throw new Error(validation.error);

    const result = this.parseCSVtoJSON(content);
    console.log("validation: ", validation);
    console.log("content: ", content);
    console.log("result: ", result);
    return result;
  }

  static isValid(csvString, options = DEFAULT_OPTIONS) {
    const [headers, ...fileLines] = csvString.split(/\r?\n/);

    const isHeaderValid = headers === options.fields.join(",");

    if (!isHeaderValid) {
      return {
        error: error.FILE_FIELDS_ERROR_MESSAGE,
        valid: false,
      };
    }

    if (!fileLines.length || fileLines.length > options.maxLines) {
      return {
        error: error.FILE_LENGTH_ERROR_MESSAGE,
        valid: false,
      };
    }

    return { valid: true };
  }

  static parseCSVtoJSON(csvString) {
    const lines = csvString.split(/\r?\n/);

    const firstLine = lines.shift()

    const header = firstLine.split(',')


    const users = lines.map(line => {
      const columns = line.split(',')
      let user = {}

      for (const index in columns) {
        user[header[index]] = columns[index].trim()
      }

      return user
    })

    return users

  }
}

module.exports = File;
