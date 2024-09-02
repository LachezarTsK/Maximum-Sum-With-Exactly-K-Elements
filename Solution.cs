
using System;

public class Solution
{
    public int MaximizeSum(int[] input, int numberOfOperations)
    {
        int maxValue = 0;
        foreach (int value in input)
        {
            maxValue = Math.Max(maxValue, value);
        }
        // (numberOfOperations - 1) * numberOfOperations / 2
        // sum of all members of arithmetic progression, where
        // firstMember = 1, step = 1, totalMembers = numberOfOperations - 1
        return maxValue * numberOfOperations + (numberOfOperations - 1) * numberOfOperations / 2;
    }
}
