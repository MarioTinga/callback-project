/*******************************************************************************
Write a function `atMost` that accepts an array, a max number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
at most (fewer than or equal to) `max` elements of the array that result in true
when passed into the callback.

Examples:

let isPositive = function (n) {
    return n > 0;
};
let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
};

console.log(atMost([6, -2, 4, -1], 3, isPositive));                             // true
console.log(atMost([6, -2, 4, 1], 3, isPositive));                              // true
console.log(atMost([6, 2, 4, 1], 3, isPositive));                               // false
console.log(atMost(['boat', 'cat', 'car'], 1, startsWithA));                    // true
console.log(atMost(['boat', 'cat', 'car', 'academy'], 1, startsWithA));         // true
console.log(atMost(['boat', 'arc', 'cat', 'car', 'academy'], 1, startsWithA));  // false

*******************************************************************************/

let atMost = function(array, maxNum, cb) {
//initialize a counter that will increase everytime an element returns true when passed in the cb.    
    let counter = 0;    
//loop to check each element of the array.    
    for(let i = 0; i < array. length; i++) {
        let el = array[i];
//a condition to check if the current element returns true when passed in the cb, in which caase the counter increases.
        if(cb(el, i, array)) {
            counter += 1;
        }
    }
//outside the loop check if the final counter is less or equal then the maxNum and return true if it does.
    if(counter <= maxNum) {
        return true;
    }
// return false otherwise    
    return false;

};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = atMost;
