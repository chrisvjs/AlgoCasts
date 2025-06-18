// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const arr = [root, 's'];
    let lengths = [0];

    while (arr.length > 1) {
        const node = arr.shift();
        if (node === 's') {
            lengths.push(0);
            arr.push('s');
        } else {
            arr.push(...node.children);
            lengths[lengths.length -1]++;
        }
 
    }
    return lengths;
}

module.exports = levelWidth;
