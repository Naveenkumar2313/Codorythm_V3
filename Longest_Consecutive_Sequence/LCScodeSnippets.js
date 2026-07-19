export const LCScodeSnippets = {
  c: `#include <stdio.h>
#include <stdlib.h>
#define MAX_SIZE 1000
int contains(int hash[], int value) {
    return hash[value + 500] == 1;
}
int longestConsecutive(int nums[], int size) {
    if (size == 0) return 0;
    int hash[1001] = {0};
    for (int i = 0; i < size; i++)
        hash[nums[i] + 500] = 1;
    int longest = 0;

    for (int i = 0; i < size; i++) {
        if (!contains(hash, nums[i] - 1)) {
            int current = nums[i];
            int length = 1;

            while (contains(hash, current + 1)) {
                current++;
                length++;
            }

            if (length > longest)
                longest = length;
        }
    }

    return longest;
}

int main() {
    int nums[] = {100, 4, 200, 1, 3, 2};
    int size = sizeof(nums) / sizeof(nums[0]);

    printf("Longest Consecutive Sequence Length: %d\n",
           longestConsecutive(nums, size));

    return 0;
}
`,

  cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

int longestConsecutive(vector<int>& nums) {
    unordered_set<int> st(nums.begin(), nums.end());
    int longest = 0;

    for (int num : st) {
        if (!st.count(num - 1)) {
            int current = num;
            int length = 1;

            while (st.count(current + 1)) {
                current++;
                length++;
            }

            longest = max(longest, length);
        }
    }

    return longest;
}

int main() {
    vector<int> nums = {100, 4, 200, 1, 3, 2};

    cout << "Longest Consecutive Sequence Length: "
         << longestConsecutive(nums) << endl;

    return 0;
}
`,

  python: `def longest_consecutive(nums):
    num_set = set(nums)
    longest = 0

    for num in num_set:
        if num - 1 not in num_set:
            current = num
            length = 1

            while current + 1 in num_set:
                current += 1
                length += 1

            longest = max(longest, length)

    return longest

nums = [100, 4, 200, 1, 3, 2]

print("Longest Consecutive Sequence Length:",
      longest_consecutive(nums))
`,

  java: `import java.util.*;
public class Main {
    public static int longestConsecutive(int[] nums) {
        HashSet<Integer> set = new HashSet<>();
        for (int num : nums)
            set.add(num);
        int longest = 0;
        for (int num : set) {
            if (!set.contains(num - 1)) {
                int current = num;
                int length = 1;
                while (set.contains(current + 1)) {
                    current++;
                    length++;
                }

                longest = Math.max(longest, length);
            }
        }

        return longest;
    }

    public static void main(String[] args) {
        int[] nums = {100, 4, 200, 1, 3, 2};

        System.out.println("Longest Consecutive Sequence Length: " +
                longestConsecutive(nums));
    }
}
`
};