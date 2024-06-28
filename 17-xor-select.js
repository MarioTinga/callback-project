/*******************************************************************************
Write a function `xorSelect` that accepts an array and two callback as arguments.
The function should return a new array containing elements of the original array
that result in true when passed in one of the callbacks, but not both.

Examples:

let isEven = function(n) {
  return n % 2 === 0;
};

let isPositive = function(n) {
  return n > 0;
};

console.log(xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive));
// [ -2, 1, 3 ]


let longString = function(s) {
  return s.length > 4;
};

let startsA = function(s) {
  return s[0] === "a";
};

console.log(
  xorSelect(["art", "academy", "app", "cat", "buttery"], longString, startsA)
);
// [ 'art', 'app', 'buttery' ]
*******************************************************************************/

let xorSelect = function(array, cb1, cb2) {
  let newArray = [];

  for(let i = 0; i < array.length; i++) {
    let el = array[i];
//implemented XOR logic that checks if only one of the two results is true and false, they can not be simultoniously both false or true
    //if(!cb1(el, i, array) && cb2(el, i, array) || !cb2(el, i, array) && cb1(el, i, array)) {
 
//this is a more concise way to implement XOR logic; it basically checks wheter the two result are different.    
    if(cb1(el, i, array) != cb2(el, i, array)) {
      newArray.push(el);
    }
  }
  return newArray;
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = xorSelect;
