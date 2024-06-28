/*
Write a function called removeVowels(word) that removes all the vowels in a
word.

Write a function abbreviateWords(sentence) that takes in a sentence string. The
function should return a new sentence where words that are longer than 4
characters have their vowels removed. Use the removeVowels helper function
to remove the vowels of the words.
*/

// Your code here 
function removeVowels(word) {
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

function abbreviateWords(sentence) {
  let words = sentence.split(' ');
  let result = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      result.push(removeVowels(words[i]));
    } else {
      result.push(words[i]);
    }
  }

  return result.join(' ');
}
// console.log(removeVowels("hello")); // hll
// console.log(removeVowels("what"));  // wht
// console.log(removeVowels("stop"));  // stp

// console.log(abbreviateWords("what a wonderful place to live")); // what a wndrfl plc to live
// console.log(abbreviateWords("she sends an excellent message")); // she snds an xcllnt mssg
// console.log(abbreviateWords("keep going youre doing great"));   // keep gng yr dng grt
// console.log(abbreviateWords("dont stop wont stop"));            // dont stop wont stop
// console.log(abbreviateWords("youre getting good at this"));     // yr gttng good at this

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  removeVowels,
  abbreviateWords
};
