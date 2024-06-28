/*
Write a function abbreviate(word) that takes in a string arg. The function
should return a new string where all of its vowels are removed.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
function abbreviate(word) {
    let vowels = 'aeiouAEIOU';
    let result = '';
  
    for (let i = 0; i < word.length; i++) {
      let isVowel = false;
      for (let j = 0; j < vowels.length; j++) {
        if (word[i] === vowels[j]) {
          isVowel = true;
          break;
        }
      }
      if (!isVowel) {
        result += word[i];
      }
    }
  
    return result;
  }
// console.log(abbreviate('wonderful')); // 'wndrfl'
// console.log(abbreviate('mystery')); // 'mystry'
// console.log(abbreviate('Accordian')); // 'ccrdn'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = abbreviate;
