// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    strArray = str.split(' ');
    capitalArr = []
    for (let word in strArray) {
        wordArray = strArray[word].split('');
        wordArray[0]= wordArray[0].toUpperCase();
        words = wordArray.join('')
        capitalArr.push(words);
    }
    return capitalArr.join(' ');
    
    
}

module.exports = capitalize;
