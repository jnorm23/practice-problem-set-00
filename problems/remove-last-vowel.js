/*
Write a function removeLastVowel(word) that takes in a string and returns the
string with its last vowel removed.
Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
function removeLastVowel(word) {
    const vowels = 'aeiou';                                  
    let arr = word.split('');                                      
    for (let i = arr.length - 1; i >= 0; i--) {                    
        if (vowels.includes(arr[i])) {                            
            arr.splice(i, 1);
            return arr.join('');;
        }
    }
    return word;                                          
}
// console.log(removeLastVowel('bootcamp')); // 'bootcmp'
// console.log(removeLastVowel('better')); // 'bettr'
// console.log(removeLastVowel('graph')); // 'grph'
// console.log(removeLastVowel('thy')); // 'thy'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = removeLastVowel;
