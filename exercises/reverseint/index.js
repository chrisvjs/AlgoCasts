// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const intArr = Math.abs(n).toString().split("").reverse().join("");
    var intN = parseInt(intArr);

    if (n < 0) {
        intN = intN * -1;
    }

    return intN;
}

module.exports = reverseInt;
