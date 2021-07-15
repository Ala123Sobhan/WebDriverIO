//object is a collection of properties
//properties is defined as key value pairs

let person = {
  firstName: "Ala",
  lastName: "Sobhan",
  age: 24,
  fullName:  function() { //must use function keyword here
    console.log(this.firstName + this.lastName);
  },
};
console.log(person.lastName);
console.log(person["firstName"]); //using key as
console.log(person.fullName());

person.age = 23;
console.log(person["age"]);

person.gender = "female";
console.log(person);

delete person.gender;
console.log(person);

//check property exists in object
console.log("gender" in person);
console.log("age" in person);

//iterate over the properties in object
for (let key in person) {
  console.log(person[key]);
}
