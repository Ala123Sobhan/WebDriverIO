const Person = require("./basicsOOP");
const Pet = require("./OOPin");
let person1 = new Person("Allen", "Tobais");
console.log(person1.fullName());

let person2 = new Person("Yakiya", "Santa");
console.log(person2.fullName());

//inheritance - one class can inherit properties, methods of other cls
//subclass(child) inherits from superclass(pareent

let pet1 = new Pet("mini", "mino");
console.log(pet1.fullName(), "lives in ", pet1.location);

/*** inherit
 * 1.module.exports = public class Person (supercls)
 * 2.const Person = require('./filename') (subcls)
 * 3.public class Ala extends Person (subcls)
 * 4. have same constructor and call the parent constructor using super
 * 5. can override methods in child class and provide implementation based on that
 */
