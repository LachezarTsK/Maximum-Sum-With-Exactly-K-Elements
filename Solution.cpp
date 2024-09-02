
#include <algorithm>
using namespace std;

class Solution {

public:
    int maximizeSum(vector<int>& input, int numberOfOperations) const {
        int maxValue = 0;
        for (const auto& value : input) {
            maxValue = max(maxValue, value);
        }
        // (numberOfOperations - 1) * numberOfOperations / 2
        // sum of all members of arithmetic progression, where
        // firstMember = 1, step = 1, totalMembers = numberOfOperations - 1
        return maxValue * numberOfOperations + (numberOfOperations - 1) * numberOfOperations / 2;
    }
};
