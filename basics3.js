//traditional func
function add(a, b) {
  return a + b;
}

let s = add(1, 2);
console.log(s);

//anonymous func
let sum = function (a, b) {
  return a + b;
};

console.log(sum(2, 4));

//arrow func
let sum1 = (a, b) => a + b;

console.log(sum1(3, 6));

// var let const  difference:
//var global, function level score
//let global or block level scope --- ES6 --- block level let is not visible outside of the block
//const can bt reinitiliazed , cant assigned more thn once

let day = "tuesday ";
let len = day.length;
console.log(len);

//substring
let subDay = day.slice(0, 4);
console.log(subDay);

//split
let splittedDay = day.split("s");
//tue day
console.log(splittedDay[1].length);
console.log(splittedDay[1].trim().length);

let a = "23",
  b = "29";
let diff = parseInt(a) - parseInt(29);
console.log(diff);
console.log(typeof diff);
let sd = diff.toString();
console.log(sd.toString);

//day occurence
let nStr = day + " is not a fun day as before days you know day";
let val = nStr.indexOf("day");
let count = 0;
while (val !== -1) {
  count++;
  val = nStr.indexOf("day", val + 1);
}
console.log("OCCURENCES: " + count);

