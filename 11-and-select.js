/*******************************************************************************
Write a function `andSelect` that accepts an array and two callbacks. The function
should return a new array containing elements of the original array that result in
true when passed into both callbacks.

Examples:

let isEven = function (n) {
    return n % 2 === 0;
};

let isPositive = function (n) {
    return n > 0;
};

console.log(andSelect([-3, 8, 7, 11, 6, 12, -4], isEven, isPositive));
// [ 8, 6, 12 ]

let isUpperCase = function (s) {
    return s === s.toUpperCase();
};

let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
}
console.log(andSelect(['ants', 'APPLES', 'ART', 'BACON', 'arm'], isUpperCase,  startsWithA));
// [ 'APPLES', 'ART' ]

*******************************************************************************/

let andSelect = function(array, cb1, cb2) {
//An empty array acceptedElements is initialized. This will store the elements that pass both callback functions' tests.    
    let acceptedElements = [];
//A for loop is used to iterate over each element in the array. The loop variable i ranges from 0 to array.length - 1. The current element is stored in the variable el.

    for(let i = 0; i < array.length; i++) {
        let el = array[i];
//The if statement checks whether both callback functions cb1 and cb2 return true for the current element el.
        if(cb1(el, i, array) && cb2(el, i, array)) {
//we need to push the el that passes both callback functions in the result array.            
            acceptedElements.push(el);
        }
    }
    return acceptedElements;
   
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = andSelect;
