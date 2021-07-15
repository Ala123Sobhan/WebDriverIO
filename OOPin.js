const Person = require("./basicsOOP");

module.exports = class Pet extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }

  get location() {
    return "bluecross";
  }
};
