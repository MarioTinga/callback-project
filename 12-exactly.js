/*******************************************************************************
Write a function `exactly` that accepts an array, a number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
exactly `number` elements of the array that return true when passed into the callback.

Examples:

let result1 = exactly([18, 5, 32, 7, 100], 3, function (n) {
    return n % 2 === 0;
});
console.log(result1); // true

let result2 = exactly([18, 5, 32, 7, 100], 2, function (n) {
    return n % 2 === 0;
});
console.log(result2); // false

let result3 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 1, function (str) {
    return str.includes('x');
});
console.log(result3); // false

let result4 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 0, function (str) {
    return str.includes('x');
});
console.log(result4); // true

*******************************************************************************/

let exactly = function(array, n, cb) {
 //we need to know if exactly n elements of the array return true when passed in the callback function
 //to do that we an initialize a counter that increases everytime the callback returns true.   
let counter = 0;
//we need to iterate through the array and run the cb function on each element of the array, if passing the elemetn in the cb returns true, we need to increment the counter.
for(let i = 0; i < array.length; i++) {
    let el = array[i];

    if(cb(el, i, array)) {
        counter += 1;
    }
}

if(counter === n) {
    return true;
}
return false;
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = exactly;
