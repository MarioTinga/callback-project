/*******************************************************************************
Write a function `firstIndex` that accepts an array and a callback as arguments.
The function should return the index of the first element of the array that
results in true when passed into the callback. If no elements of the array
result in true, then the function should return -1.

Examples:

let result1 = firstIndex([3, 7, 8, 10], function (n) {
    return n % 2 === 0;
});
console.log(result1); // 2

let result2 = firstIndex(['dog', 'cat', 'tree'], function (s) {
    return s.length === 3;
});
console.log(result2); // 0

let result3 = firstIndex(['canine', 'feline', 'tree'], function (s) {
    return s.length === 3;
});
console.log(result3); // -1
*******************************************************************************/

let firstIndex = function(array, cb) {
// loop to check each element of the array.    
    for(let i = 0; i < array.length; i++) {
        let el = array[i];
// setting a condition that checks if the current element returns true when passed in the cb and if so, return the index so that the loop can stop running.
        if(cb(el, i, array)) {
            return i;
        }
    }
// if no element of the array returns true when passed in the cb, return -1    
    return -1;
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = firstIndex;
