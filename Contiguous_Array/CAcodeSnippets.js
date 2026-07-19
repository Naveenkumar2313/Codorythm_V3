// src/data/codeSnippets.js
export const ContiguousArrayCodeSnippets = {
    c: `#include <stdio.h>
int findMaxLength(int nums[], int size) {
    int balance = 0, maxLen = 0;
    int firstIndex[2 * size + 1];
    for (int i = 0; i < 2 * size + 1; i++)
        firstIndex[i] = -2;
    firstIndex[size] = -1;
    for (int i = 0; i < size; i++) {
        if (nums[i] == 0)
            balance--;
        else
            balance++;
        int index = balance + size;
        if (firstIndex[index] != -2) {
            int len = i - firstIndex[index];
            if (len > maxLen)
                maxLen = len;
        } else {
            firstIndex[index] = i;
        }
    }
    return maxLen;
}
int main() {
    int nums[] = {0, 1, 0, 1, 1, 0, 0};
    int size = sizeof(nums) / sizeof(nums[0]);
    printf("Longest Contiguous Length = %d\n", findMaxLength(nums, size));
    return 0;
}
`,
    cpp: `#include <iostream>
    #include <vector>
#include <unordered_map>
using namespace std;
int findMaxLength(vector<int>& nums) {
    unordered_map<int, int> firstIndex;
    firstIndex[0] = -1;
    int balance = 0, maxLen = 0;
    for (int i = 0; i < nums.size(); i++) {
        balance += (nums[i] == 1) ? 1 : -1;
        if (firstIndex.count(balance))
            maxLen = max(maxLen, i - firstIndex[balance]);
        else
            firstIndex[balance] = i;
    }
    return maxLen;
}
int main() {
    vector<int> nums = {0, 1, 0, 1, 1, 0, 0};
    cout << "Longest Contiguous Length = "
         << findMaxLength(nums) << endl;
    return 0;
}
`,
    python: `def find_max_length(nums):
    balance = 0
    max_len = 0
    first_index = {0: -1}
    for i, num in enumerate(nums):
        if num == 0:
            balance -= 1
        else:
            balance += 1
        if balance in first_index:
            max_len = max(max_len, i - first_index[balance])
        else:
            first_index[balance] = i
    return max_len
nums = [0, 1, 0, 1, 1, 0, 0]
result = find_max_length(nums)
print(f"Longest Contiguous Length = {result}")
`,
    java: `import java.util.*;
public class Main {
    public static int findMaxLength(int[] nums) {
        HashMap<Integer, Integer> firstIndex = new HashMap<>();
        firstIndex.put(0, -1);
        int balance = 0;
        int maxLen = 0;
        for (int i = 0; i < nums.length; i++) {
            balance += (nums[i] == 1) ? 1 : -1;
            if (firstIndex.containsKey(balance)) {
                maxLen = Math.max(maxLen, i - firstIndex.get(balance));
            } else {
                firstIndex.put(balance, i);
            }
        }
        return maxLen;
    }
    public static void main(String[] args) {
        int[] nums = {0, 1, 0, 1, 1, 0, 0};
        int result = findMaxLength(nums);
        System.out.println("Longest Contiguous Length = " + result);
    }
}`
};