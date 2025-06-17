// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/*
function vowels(str) {
    let vowelCount = 0;
    strArray = str.toLowerCase().split('');
    for (let i =0; i < strArray.length; i++) {
        if (strArray[i] == 'a' || strArray[i] == 'e' || strArray[i] == 'i' || strArray[i] == 'o' ||strArray[i] == 'u') {
            vowelCount++;
        }
    }
    return vowelCount;
}
*/

function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0
}

module.exports = vowels;
