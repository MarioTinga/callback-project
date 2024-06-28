/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

let suffixCipher = function(sentence, obj) {
    let words = sentence.split(' ');
    let newWords = [];
    for(let  i = 0; i < words.length; i++) {
        let word = words[i];
//we use a 'found' flag to check if a suffix has been found        
        let found = false;
//we use another for loop to iterate through each key of the given object
        for(let key in obj) {
            if(word.endsWith(key)) {
//let's call the function in the value of the obj and let's store the result in a new variable.
//obj[key] refers to the value relative to a key, in this case it's a callback function
//(word) will be the argument that our function will use.                
                let newWord = obj[key](word);
                newWords.push(newWord);
                found = true;
                break;
            }
        }
//another if statement checks the status of the 'found' variable, if the variable is still set to false, then push the current word without changing anytthing.
        if(!found) {
         newWords.push(word);
        }
    }    
    return newWords.join(' ');
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
