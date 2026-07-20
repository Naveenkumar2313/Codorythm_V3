
export const CSScodeSnippets = {
    c: `#include <stdio.h>

#define SIZE 100003

typedef struct {
    int key;
    int value;
    int used;
} Entry;

Entry table[SIZE];

int hash(int key) {
    if (key < 0)
        key = -key;
    return key % SIZE;
}

void insert(int key, int value) {
    int index = hash(key);

    while (table[index].used) {
        if (table[index].key == key)
            return;

        index = (index + 1) % SIZE;
    }

    table[index].used = 1;
    table[index].key = key;
    table[index].value = value;
}

int find(int key) {
    int index = hash(key);

    while (table[index].used) {
        if (table[index].key == key)
            return table[index].value;

        index = (index + 1) % SIZE;
    }

    return -1000000;
}

int checkSubarraySum(int nums[], int n, int k) {
    for (int i = 0; i < SIZE; i++)
        table[i].used = 0;

    insert(0, -1);

    int prefixSum = 0;

    for (int i = 0; i < n; i++) {
        prefixSum += nums[i];

        int remainder = (k == 0) ? prefixSum : prefixSum % k;

        int index = find(remainder);

        if (index != -1000000) {
            if (i - index >= 2)
                return 1;
        } else {
            insert(remainder, i);
        }
    }

    return 0;
}

int main() {
    int nums[] = {23, 2, 4, 6, 7};
    int n = sizeof(nums) / sizeof(nums[0]);
    int k = 6;

    if (checkSubarraySum(nums, n, k))
        printf("True\\n");
    else
        printf("False\\n");

    return 0;
}
`,

    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

bool checkSubarraySum(vector<int>& nums, int k) {
    unordered_map<int, int> remainderMap;
    remainderMap[0] = -1;

    int prefixSum = 0;

    for (int i = 0; i < nums.size(); i++) {
        prefixSum += nums[i];

        int remainder = (k == 0) ? prefixSum : prefixSum % k;

        if (remainderMap.count(remainder)) {
            if (i - remainderMap[remainder] >= 2)
                return true;
        } else {
            remainderMap[remainder] = i;
        }
    }

    return false;
}

int main() {
    vector<int> nums = {23, 2, 4, 6, 7};
    int k = 6;

    if (checkSubarraySum(nums, k))
        cout << "True" << endl;
    else
        cout << "False" << endl;

    return 0;
}
`,

    python: `def check_subarray_sum(nums, k):
    prefix_sum = 0
    remainder_map = {0: -1}

    for i in range(len(nums)):
        prefix_sum += nums[i]

        remainder = prefix_sum if k == 0 else prefix_sum % k

        if remainder in remainder_map:
            if i - remainder_map[remainder] >= 2:
                return True
        else:
            remainder_map[remainder] = i

    return False

nums = [23, 2, 4, 6, 7]
k = 6

print(check_subarray_sum(nums, k))
`,

    java: `import java.util.*;

public class ContinuousSubarraySumExample {

    public static boolean checkSubarraySum(int[] nums, int k) {
        HashMap<Integer, Integer> remainderMap = new HashMap<>();
        remainderMap.put(0, -1);

        int prefixSum = 0;

        for (int i = 0; i < nums.length; i++) {
            prefixSum += nums[i];

            int remainder = (k == 0) ? prefixSum : prefixSum % k;

            if (remainderMap.containsKey(remainder)) {
                if (i - remainderMap.get(remainder) >= 2)
                    return true;
            } else {
                remainderMap.put(remainder, i);
            }
        }

        return false;
    }

    public static void main(String[] args) {
        int[] nums = {23, 2, 4, 6, 7};
        int k = 6;

        System.out.println(checkSubarraySum(nums, k));
    }
}
`
};