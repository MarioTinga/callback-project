/*******************************************************************************
Write a function `none` that accepts an array and a callback as arguments.
The function should call the callback for each element of the array, passing in
the element. The function should return true if all
elements of the array result to false when passed into the callback. Otherwise,
the method should return false.

Examples:

let result1 = none(['ruby', 'topaz', 'opal'], function(w) {
    return w.includes('e');
});
console.log(result1);   // true

let result2 = none(['ruby', 'topaz', 'sapphire', 'opal'], function(w) {
    return w.includes('e');
});
console.log(result2);   // false

let result3 = none([4, 5, 7, 1], function(n) {
    return n < 0;
});
console.log(result3);   // true

let result4 = none([4, -5, 7, -1], function(n) {
    return n < 0;
});
console.log(result4);   // false
*******************************************************************************/

let none = function(array, cb) {
//initialize a counter that will increase everytime the result is false        
    let counter = 0;
//start a loop to check each element of the array.
    for(let i = 0; i < array.length; i++) {
        let el = array[i];

//initialize a condition to check if passing the element in the cb result in false, in that case the counter should increase
        if(!cb(el, i, array)) {
            counter += 1;
        }        
    }  
//outside the loop check if the counter is equal to the array length, that should mean that all the elements o the array return false when passed in the cb      
     if(counter === array.length) {
        return true
     }
     return false;
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = none;
