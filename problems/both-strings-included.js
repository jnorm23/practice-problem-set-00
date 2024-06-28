/*
Define a function named bothStringsIncluded that accepts a sentence string,
and two strings as parameters (for a total of 3 parameters). The function
should return true if both strings are found in the sentence, otherwise
it should return false.
*/

// Your code here 
function bothStringsIncluded(sentence, string1, string2) {
    let foundString1 = false;
    let foundString2 = false;

    const words = sentence.split(' ');

    for (let word of words) {
        if (word.includes(string1)) {
            foundString1 = true;
        }
        if (word.includes(string2)) {
            foundString2 = true;
        }
        if (foundString1 && foundString2) {
            return true;
        }
    }

    return false;
}
// console.log(bothStringsIncluded("how now brown cow?", "panther", "cow"));  //=> false
// console.log(bothStringsIncluded("Dance party!", "Dance", "party"));        //=> true
// console.log(bothStringsIncluded("Question?", "tion", "?"));                //=> true
// console.log(bothStringsIncluded("I love programming", "apple", "potato")); //=> false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = bothStringsIncluded;
