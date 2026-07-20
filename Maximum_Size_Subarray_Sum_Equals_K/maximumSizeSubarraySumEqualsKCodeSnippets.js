export const maximumSizeSubarraySumEqualsKCodeSnippets = {
  python: `def max_subarray_len(nums, k):
    prefix_sum = 0
    max_length = 0
    prefix_map = {0: -1}

    for i in range(len(nums)):
        prefix_sum += nums[i]

        if prefix_sum - k in prefix_map:
            max_length = max(max_length, i - prefix_map[prefix_sum - k])

        if prefix_sum not in prefix_map:
            prefix_map[prefix_sum] = i

    return max_length`,

  java: `import java.util.HashMap;

class Solution {
    public int maxSubArrayLen(int[] nums, int k) {
        HashMap<Integer, Integer> prefixMap = new HashMap<>();
        prefixMap.put(0, -1);

        int prefixSum = 0;
        int maxLength = 0;

        for (int i = 0; i < nums.length; i++) {
            prefixSum += nums[i];

            if (prefixMap.containsKey(prefixSum - k)) {
                maxLength = Math.max(maxLength, i - prefixMap.get(prefixSum - k));
            }

            prefixMap.putIfAbsent(prefixSum, i);
        }

        return maxLength;
    }
}`,

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

int maxSubArrayLen(int nums[], int n, int k) {
    for (int i = 0; i < SIZE; i++)
        table[i].used = 0;

    insert(0, -1);

    int prefixSum = 0;
    int maxLength = 0;

    for (int i = 0; i < n; i++) {
        prefixSum += nums[i];

        int index = find(prefixSum - k);

        if (index != -1000000) {
            if (i - index > maxLength)
                maxLength = i - index;
        }

        insert(prefixSum, i);
    }

    return maxLength;
}`,

  cpp: `#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    int maxSubArrayLen(vector<int>& nums, int k) {
        unordered_map<int, int> prefixMap;
        prefixMap[0] = -1;

        int prefixSum = 0;
        int maxLength = 0;

        for (int i = 0; i < nums.size(); i++) {
            prefixSum += nums[i];

            if (prefixMap.count(prefixSum - k)) {
                maxLength = max(maxLength, i - prefixMap[prefixSum - k]);
            }

            if (!prefixMap.count(prefixSum)) {
                prefixMap[prefixSum] = i;
            }
        }

        return maxLength;
    }
};`
};