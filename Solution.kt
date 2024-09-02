
import kotlin.math.max

class Solution {

    fun maximizeSum(input: IntArray, numberOfOperations: Int): Int {
        var maxValue = 0
        for (value in input) {
            maxValue = max(maxValue, value)
        }
        // (numberOfOperations - 1) * numberOfOperations / 2
        // sum of all members of arithmetic progression, where
        // firstMember = 1, step = 1, totalMembers = numberOfOperations - 1
        return maxValue * numberOfOperations + (numberOfOperations - 1) * numberOfOperations / 2
    }
}
