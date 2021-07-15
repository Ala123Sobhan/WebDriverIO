//from es6
class Person {
  //constructor gets execute by default while creating objects
  constructor(
    firstName,
    lastName //instance variables
  ) {
    //cls instance variable
    this.firstName = firstName;
    this.lastName = lastName;
  }

  //cls properties
  age = 23;
  //another way of definign  class propety, getter method
  get location() {
    return "US";
  }

  //method
  fullName() {
   // console.log(this.firstName + " " + this.lastName);
    return this.firstName +' '+ this.lastName;
  }
}

let person = new Person("Ala", "Sobhan");
person.age;

console.log(person.location);
let n = person.fullName();

let person1 = new Person("pee", "reza");
console.log(n , person1.fullName());
