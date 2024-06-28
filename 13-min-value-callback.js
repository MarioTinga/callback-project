/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function(array, cb) { 
    if(array.length === 0) {
        return undefined;
    }
//find the smallest value in the array using the built-in Math method and the rest operator
    let smallest = Math.min(...array);
//we can use the ! operator to check if the cb is present as an argument    
    if(!cb) {
        return smallest;
    } else {
        return cb(smallest);
    }
};
/*
could have also used this method, but it's longer
let minValue = array[0];
for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
        minValue = array[i];
    }
}
*/



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
