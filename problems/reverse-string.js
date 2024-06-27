/*
Write a function reverseString(str) that takes in a string. The function should
return a new string where the order of the characters is reversed.
*/

// Your code here 
function reverseString(word) {
    let reversedWord = '';
    
    for (let i = word.length - 1; i >= 0; i--) {   
        reversedWord += word[i];
    }
    return reversedWord;
}
// console.log(reverseString('fish')); // 'hsif'
// console.log(reverseString('marathon')); // 'nohtaram'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = reverseString;
