// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/*
function anagrams(stringA, stringB) {
    aMap = {};
    bMap = {};

    for (let char of stringA.replace(/[^\w]/g, "").toLowerCase()) {
        aMap[char] = aMap[char] + 1 || 1;
    }

    for (let char of stringB.replace(/[^\w]/g, "").toLowerCase()) {
        bMap[char] = bMap[char] + 1 || 1;
    }

    console.log(aMap);
    if (Object.keys(aMap).length !== Object.keys(bMap).length) {
        return false;
    } else {
        for (let char in aMap) {
            if (aMap[char] !== bMap[char]) {
                return false;
            }
        }
    }
    return true;
}
*/

function anagrams(stringA, stringB) {
    return stringA.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('') === stringB.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}
module.exports = anagrams;
