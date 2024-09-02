
/**
 * @param {number[]} input
 * @param {number} numberOfOperations
 * @return {number}
 */
var maximizeSum = function (input, numberOfOperations) {
    let maxValue = 0;
    for (let value of input) {
        maxValue = Math.max(maxValue, value);
    }
    // (numberOfOperations - 1) * numberOfOperations / 2
    // sum of all members of arithmetic progression, where
    // firstMember = 1, step = 1, totalMembers = numberOfOperations - 1
    return maxValue * numberOfOperations + Math.floor((numberOfOperations - 1) * numberOfOperations / 2);
};
