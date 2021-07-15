console.log("basics");

//
/** */

// var
var a = 4.898;

//let, const -- ES6
let b = 4;
console.log(b);
const c = 4;

//typeof(var)
console.log(typeof a);

let d = "Ala is learning JS";
console.log(typeof d);

let req = false;
console.log(typeof req);
console.log(!req);

//cant redeclare variable with let, possible with var

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

let j = 0;

do {
  console.log("exe once");
} while (i > 5);

//for loop
// = assignment, == compare value, === compare value and type
// && || 
let n = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0 && i % 5 == 0) {
      n ++;
    console.log(i);
  }
  if(n == 3) break;
}
