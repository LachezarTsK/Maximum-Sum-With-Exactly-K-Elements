
function maximizeSum(input: number[], numberOfOperations: number): number {
    let maxValue = 0;
    for (let value of input) {
        maxValue = Math.max(maxValue, value);
    }
    // (numberOfOperations - 1) * numberOfOperations / 2
    // sum of all members of arithmetic progression, where
    // firstMember = 1, step = 1, totalMembers = numberOfOperations - 1
    return maxValue * numberOfOperations + Math.floor((numberOfOperations - 1) * numberOfOperations / 2);
};
