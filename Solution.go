
package main

import "fmt"

func maximizeSum(input []int, numberOfOperations int) int {
    maxValue := 0
    for _, value := range input {
        maxValue = max(maxValue, value)
    }
    // (numberOfOperations - 1) * numberOfOperations / 2
    // sum of all members of arithmetic progression, where
    // firstMember = 1, step = 1, totalMembers = numberOfOperations - 1
    return maxValue * numberOfOperations + (numberOfOperations - 1) * numberOfOperations / 2
}
