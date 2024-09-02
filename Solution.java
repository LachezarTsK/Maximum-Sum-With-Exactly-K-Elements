
public class Solution {

    public int maximizeSum(int[] input, int numberOfOperations) {
        int maxValue = 0;
        for (int value : input) {
            maxValue = Math.max(maxValue, value);
        }
        // (numberOfOperations - 1) * numberOfOperations / 2
        // sum of all members of arithmetic progression, where
        // firstMember = 1, step = 1, totalMembers = numberOfOperations - 1
        return maxValue * numberOfOperations + (numberOfOperations - 1) * numberOfOperations / 2;
    }
}
