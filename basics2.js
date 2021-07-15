let marks = new Array(1, 2, 3, 4, 5, 6);

var m = [1, 2, 33, 4, 44, 55];
console.log(m.length);

//subarray using slice, its exclusive of the end so give +1

var sub_a = m.slice(1, 5);
console.log(sub_a);

//add or delete from end
m.push(99);
m.pop();

//add in beginning
m.unshift(96);

console.log(m);
console.log(m.indexOf(2));

//element present in the arr
console.log(m.includes(96));
console.log(m.includes("yes"));

console.log("***********************************");
//iterate
let sum = 0;
for (let i = 0; i < m.length; i++) {
  // console.log(m[i])
  sum += m[i];
}
console.log("sum is - " + sum);

//array functions-

//reduce filter map

//reduce - use every element and accumulator reduces the array and has it
let total = marks.reduce((sum, mark) => sum + mark, 0);
console.log(total);

//filter - based on conditions returns an array
var score = [12, 13, 14, 15, 16, 18, 20, 24, 28, 36];
var evenScore = score.filter((n) => n % 2 == 0);
console.log(evenScore);

var fScore = score.filter((n) => n % 4 == 0);
console.log(fScore);

//map - modify each element in an array

var mul = evenScore.map((s) => s * 2);
console.log(mul);

//create new array with odd number, mul by 3 and sum
console.log("*****************************************");
var na = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var odd = na.filter((n) => n % 2 != 0);
console.log("Odd: " + odd);
var mulOdd = odd.map((n) => n * 3);
console.log("mulOdd: " + mulOdd);
var sumOdd = mulOdd.reduce((sum, e) => sum + e, 0);
console.log("sumOdd: " + sumOdd);

//use chaining-
var chainSum = na
  .filter((v) => v % 2 != 0)
  .map((v) => v * 3)
  .reduce((sum, v) => sum + v, 0);
console.log(chainSum);


//string AND number array sorting
let fruits = ["banana","apple","kiwi", "cherry"];
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);

//sort wont work on numbers
var sc = [99,88,12,0,1];
//ascending
sc.sort((a,b) => a-b);
console.log(sc);

sc.sort((a,b) => b-a);
console.log(sc);