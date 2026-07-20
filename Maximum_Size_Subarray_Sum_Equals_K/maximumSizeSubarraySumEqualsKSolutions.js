export const maximumSizeSubarraySumEqualsKSolutions = {
  "msssk-e1": {
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

            if (!prefixMap.containsKey(prefixSum)) {
                prefixMap.put(prefixSum, i);
            }
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

        if (index != -1000000 && i - index > maxLength)
            maxLength = i - index;

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
  },

  "msssk-e2": {
    python: `def longest_subarray(nums, k):
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
    public int longestSubarray(int[] nums, int k) {
        HashMap<Integer, Integer> prefixMap = new HashMap<>();
        prefixMap.put(0, -1);

        int prefixSum = 0;
        int maxLength = 0;

        for (int i = 0; i < nums.length; i++) {
            prefixSum += nums[i];

            if (prefixMap.containsKey(prefixSum - k)) {
                maxLength = Math.max(maxLength, i - prefixMap.get(prefixSum - k));
            }

            if (!prefixMap.containsKey(prefixSum)) {
                prefixMap.put(prefixSum, i);
            }
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

int longestSubarray(int nums[], int n, int k) {
    for (int i = 0; i < SIZE; i++)
        table[i].used = 0;

    insert(0, -1);

    int prefixSum = 0;
    int maxLength = 0;

    for (int i = 0; i < n; i++) {
        prefixSum += nums[i];

        int index = find(prefixSum - k);

        if (index != -1000000 && i - index > maxLength)
            maxLength = i - index;

        insert(prefixSum, i);
    }

    return maxLength;
}`,

    cpp: `#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    int longestSubarray(vector<int>& nums, int k) {
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
  },
    "msssk-e3": {
    python: `def max_length(nums, k):
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
    public int maxLength(int[] nums, int k) {
        HashMap<Integer, Integer> prefixMap = new HashMap<>();
        prefixMap.put(0, -1);

        int prefixSum = 0;
        int maxLength = 0;

        for (int i = 0; i < nums.length; i++) {
            prefixSum += nums[i];

            if (prefixMap.containsKey(prefixSum - k)) {
                maxLength = Math.max(maxLength, i - prefixMap.get(prefixSum - k));
            }

            if (!prefixMap.containsKey(prefixSum)) {
                prefixMap.put(prefixSum, i);
            }
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

int maxLength(int nums[], int n, int k) {
    for (int i = 0; i < SIZE; i++)
        table[i].used = 0;

    insert(0, -1);

    int prefixSum = 0;
    int maxLength = 0;

    for (int i = 0; i < n; i++) {
        prefixSum += nums[i];

        int index = find(prefixSum - k);

        if (index != -1000000 && i - index > maxLength)
            maxLength = i - index;

        insert(prefixSum, i);
    }

    return maxLength;
}`,

    cpp: `#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    int maxLength(vector<int>& nums, int k) {
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
  },
    "msssk-e4": {
    python: `def zero_sum(nums):
    prefix_sum = 0
    max_length = 0
    prefix_map = {0: -1}

    for i in range(len(nums)):
        prefix_sum += nums[i]

        if prefix_sum in prefix_map:
            max_length = max(max_length, i - prefix_map[prefix_sum])
        else:
            prefix_map[prefix_sum] = i

    return max_length`,

    java: `import java.util.HashMap;

class Solution {
    public int zeroSum(int[] nums) {
        HashMap<Integer, Integer> prefixMap = new HashMap<>();
        prefixMap.put(0, -1);

        int prefixSum = 0;
        int maxLength = 0;

        for (int i = 0; i < nums.length; i++) {
            prefixSum += nums[i];

            if (prefixMap.containsKey(prefixSum)) {
                maxLength = Math.max(maxLength, i - prefixMap.get(prefixSum));
            } else {
                prefixMap.put(prefixSum, i);
            }
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

int zeroSum(int nums[], int n) {
    for (int i = 0; i < SIZE; i++)
        table[i].used = 0;

    insert(0, -1);

    int prefixSum = 0;
    int maxLength = 0;

    for (int i = 0; i < n; i++) {
        prefixSum += nums[i];

        int index = find(prefixSum);

        if (index != -1000000) {
            if (i - index > maxLength)
                maxLength = i - index;
        } else {
            insert(prefixSum, i);
        }
    }

    return maxLength;
}`,

    cpp: `#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    int zeroSum(vector<int>& nums) {
        unordered_map<int, int> prefixMap;
        prefixMap[0] = -1;

        int prefixSum = 0;
        int maxLength = 0;

        for (int i = 0; i < nums.size(); i++) {
            prefixSum += nums[i];

            if (prefixMap.count(prefixSum)) {
                maxLength = max(maxLength, i - prefixMap[prefixSum]);
            } else {
                prefixMap[prefixSum] = i;
            }
        }

        return maxLength;
    }
};`
  },
    "msssk-e5": {
    python: `def longest(nums, k):
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
    public int longest(int[] nums, int k) {
        HashMap<Integer, Integer> prefixMap = new HashMap<>();
        prefixMap.put(0, -1);

        int prefixSum = 0;
        int maxLength = 0;

        for (int i = 0; i < nums.length; i++) {
            prefixSum += nums[i];

            if (prefixMap.containsKey(prefixSum - k)) {
                maxLength = Math.max(maxLength, i - prefixMap.get(prefixSum - k));
            }

            if (!prefixMap.containsKey(prefixSum)) {
                prefixMap.put(prefixSum, i);
            }
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

int longest(int nums[], int n, int k) {
    for (int i = 0; i < SIZE; i++)
        table[i].used = 0;

    insert(0, -1);

    int prefixSum = 0;
    int maxLength = 0;

    for (int i = 0; i < n; i++) {
        prefixSum += nums[i];

        int index = find(prefixSum - k);

        if (index != -1000000 && i - index > maxLength)
            maxLength = i - index;

        insert(prefixSum, i);
    }

    return maxLength;
}`,

    cpp: `#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    int longest(vector<int>& nums, int k) {
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
  },
    "msssk-m1": {
    python: `def longest_target_sum(nums, k):
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
    public int longestTargetSum(int[] nums, int k) {
        HashMap<Integer, Integer> prefixMap = new HashMap<>();
        prefixMap.put(0, -1);

        int prefixSum = 0;
        int maxLength = 0;

        for (int i = 0; i < nums.length; i++) {
            prefixSum += nums[i];

            if (prefixMap.containsKey(prefixSum - k)) {
                maxLength = Math.max(maxLength, i - prefixMap.get(prefixSum - k));
            }

            if (!prefixMap.containsKey(prefixSum)) {
                prefixMap.put(prefixSum, i);
            }
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

int longestTargetSum(int nums[], int n, int k) {
    for (int i = 0; i < SIZE; i++)
        table[i].used = 0;

    insert(0, -1);

    int prefixSum = 0;
    int maxLength = 0;

    for (int i = 0; i < n; i++) {
        prefixSum += nums[i];

        int index = find(prefixSum - k);

        if (index != -1000000 && i - index > maxLength)
            maxLength = i - index;

        insert(prefixSum, i);
    }

    return maxLength;
}`,

    cpp: `#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    int longestTargetSum(vector<int>& nums, int k) {
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
  },
    "msssk-m2": {
    python: `def balanced_change(changes, k):
    prefix_sum = 0
    max_length = 0
    prefix_map = {0: -1}

    for i in range(len(changes)):
        prefix_sum += changes[i]

        if prefix_sum - k in prefix_map:
            max_length = max(max_length, i - prefix_map[prefix_sum - k])

        if prefix_sum not in prefix_map:
            prefix_map[prefix_sum] = i

    return max_length`,

    java: `import java.util.HashMap;

class Solution {
    public int balancedChange(int[] changes, int k) {
        HashMap<Integer, Integer> prefixMap = new HashMap<>();
        prefixMap.put(0, -1);

        int prefixSum = 0;
        int maxLength = 0;

        for (int i = 0; i < changes.length; i++) {
            prefixSum += changes[i];

            if (prefixMap.containsKey(prefixSum - k)) {
                maxLength = Math.max(maxLength, i - prefixMap.get(prefixSum - k));
            }

            if (!prefixMap.containsKey(prefixSum)) {
                prefixMap.put(prefixSum, i);
            }
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

int balancedChange(int changes[], int n, int k) {
    for (int i = 0; i < SIZE; i++)
        table[i].used = 0;

    insert(0, -1);

    int prefixSum = 0;
    int maxLength = 0;

    for (int i = 0; i < n; i++) {
        prefixSum += changes[i];

        int index = find(prefixSum - k);

        if (index != -1000000 && i - index > maxLength)
            maxLength = i - index;

        insert(prefixSum, i);
    }

    return maxLength;
}`,

    cpp: `#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    int balancedChange(vector<int>& changes, int k) {
        unordered_map<int, int> prefixMap;
        prefixMap[0] = -1;

        int prefixSum = 0;
        int maxLength = 0;

        for (int i = 0; i < changes.size(); i++) {
            prefixSum += changes[i];

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
  },
    "msssk-m3": {
    python: `def longest_zero_balance(nums):
    prefix_sum = 0
    max_length = 0
    prefix_map = {0: -1}

    for i in range(len(nums)):
        prefix_sum += nums[i]

        if prefix_sum in prefix_map:
            max_length = max(max_length, i - prefix_map[prefix_sum])
        else:
            prefix_map[prefix_sum] = i

    return max_length`,

    java: `import java.util.HashMap;

class Solution {
    public int longestZeroBalance(int[] nums) {
        HashMap<Integer, Integer> prefixMap = new HashMap<>();
        prefixMap.put(0, -1);

        int prefixSum = 0;
        int maxLength = 0;

        for (int i = 0; i < nums.length; i++) {
            prefixSum += nums[i];

            if (prefixMap.containsKey(prefixSum)) {
                maxLength = Math.max(maxLength, i - prefixMap.get(prefixSum));
            } else {
                prefixMap.put(prefixSum, i);
            }
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

int longestZeroBalance(int nums[], int n) {
    for (int i = 0; i < SIZE; i++)
        table[i].used = 0;

    insert(0, -1);

    int prefixSum = 0;
    int maxLength = 0;

    for (int i = 0; i < n; i++) {
        prefixSum += nums[i];

        int index = find(prefixSum);

        if (index != -1000000) {
            if (i - index > maxLength)
                maxLength = i - index;
        } else {
            insert(prefixSum, i);
        }
    }

    return maxLength;
}`,

    cpp: `#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    int longestZeroBalance(vector<int>& nums) {
        unordered_map<int, int> prefixMap;
        prefixMap[0] = -1;

        int prefixSum = 0;
        int maxLength = 0;

        for (int i = 0; i < nums.size(); i++) {
            prefixSum += nums[i];

            if (prefixMap.count(prefixSum)) {
                maxLength = max(maxLength, i - prefixMap[prefixSum]);
            } else {
                prefixMap[prefixSum] = i;
            }
        }

        return maxLength;
    }
};`
  },
    "msssk-m4": {
    python: `def workload_balance(work, k):
    prefix_sum = 0
    max_length = 0
    prefix_map = {0: -1}

    for i in range(len(work)):
        prefix_sum += work[i]

        if prefix_sum - k in prefix_map:
            max_length = max(max_length, i - prefix_map[prefix_sum - k])

        if prefix_sum not in prefix_map:
            prefix_map[prefix_sum] = i

    return max_length`,

    java: `import java.util.HashMap;

class Solution {
    public int workloadBalance(int[] work, int k) {
        HashMap<Integer, Integer> prefixMap = new HashMap<>();
        prefixMap.put(0, -1);

        int prefixSum = 0;
        int maxLength = 0;

        for (int i = 0; i < work.length; i++) {
            prefixSum += work[i];

            if (prefixMap.containsKey(prefixSum - k)) {
                maxLength = Math.max(maxLength, i - prefixMap.get(prefixSum - k));
            }

            if (!prefixMap.containsKey(prefixSum)) {
                prefixMap.put(prefixSum, i);
            }
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

int workloadBalance(int work[], int n, int k) {
    for (int i = 0; i < SIZE; i++)
        table[i].used = 0;

    insert(0, -1);

    int prefixSum = 0;
    int maxLength = 0;

    for (int i = 0; i < n; i++) {
        prefixSum += work[i];

        int index = find(prefixSum - k);

        if (index != -1000000 && i - index > maxLength)
            maxLength = i - index;

        insert(prefixSum, i);
    }

    return maxLength;
}`,

    cpp: `#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    int workloadBalance(vector<int>& work, int k) {
        unordered_map<int, int> prefixMap;
        prefixMap[0] = -1;

        int prefixSum = 0;
        int maxLength = 0;

        for (int i = 0; i < work.size(); i++) {
            prefixSum += work[i];

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
  },
    "msssk-m5": {
    python: `def longest_transaction_segment(transactions, k):
    prefix_sum = 0
    max_length = 0
    prefix_map = {0: -1}

    for i in range(len(transactions)):
        prefix_sum += transactions[i]

        if prefix_sum - k in prefix_map:
            max_length = max(max_length, i - prefix_map[prefix_sum - k])

        if prefix_sum not in prefix_map:
            prefix_map[prefix_sum] = i

    return max_length`,

    java: `import java.util.HashMap;

class Solution {
    public int longestTransactionSegment(int[] transactions, int k) {
        HashMap<Integer, Integer> prefixMap = new HashMap<>();
        prefixMap.put(0, -1);

        int prefixSum = 0;
        int maxLength = 0;

        for (int i = 0; i < transactions.length; i++) {
            prefixSum += transactions[i];

            if (prefixMap.containsKey(prefixSum - k)) {
                maxLength = Math.max(maxLength, i - prefixMap.get(prefixSum - k));
            }

            if (!prefixMap.containsKey(prefixSum)) {
                prefixMap.put(prefixSum, i);
            }
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

int longestTransactionSegment(int transactions[], int n, int k) {
    for (int i = 0; i < SIZE; i++)
        table[i].used = 0;

    insert(0, -1);

    int prefixSum = 0;
    int maxLength = 0;

    for (int i = 0; i < n; i++) {
        prefixSum += transactions[i];

        int index = find(prefixSum - k);

        if (index != -1000000 && i - index > maxLength)
            maxLength = i - index;

        insert(prefixSum, i);
    }

    return maxLength;
}`,

    cpp: `#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    int longestTransactionSegment(vector<int>& transactions, int k) {
        unordered_map<int, int> prefixMap;
        prefixMap[0] = -1;

        int prefixSum = 0;
        int maxLength = 0;

        for (int i = 0; i < transactions.size(); i++) {
            prefixSum += transactions[i];

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
  },
    "msssk-h1": {
    python: `def maximum_lengths(nums, queries):
    results = []

    for k in queries:
        prefix_sum = 0
        max_length = 0
        prefix_map = {0: -1}

        for i in range(len(nums)):
            prefix_sum += nums[i]

            if prefix_sum - k in prefix_map:
                max_length = max(max_length, i - prefix_map[prefix_sum - k])

            if prefix_sum not in prefix_map:
                prefix_map[prefix_sum] = i

        results.append(max_length)

    return results`,

    java: `import java.util.HashMap;

class Solution {
    public int[] maximumLengths(int[] nums, int[] queries) {
        int[] result = new int[queries.length];

        for (int q = 0; q < queries.length; q++) {
            int k = queries[q];
            HashMap<Integer, Integer> prefixMap = new HashMap<>();
            prefixMap.put(0, -1);

            int prefixSum = 0;
            int maxLength = 0;

            for (int i = 0; i < nums.length; i++) {
                prefixSum += nums[i];

                if (prefixMap.containsKey(prefixSum - k)) {
                    maxLength = Math.max(maxLength, i - prefixMap.get(prefixSum - k));
                }

                if (!prefixMap.containsKey(prefixSum)) {
                    prefixMap.put(prefixSum, i);
                }
            }

            result[q] = maxLength;
        }

        return result;
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

void clearTable() {
    for (int i = 0; i < SIZE; i++)
        table[i].used = 0;
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

void maximumLengths(int nums[], int n, int queries[], int q, int result[]) {
    for (int t = 0; t < q; t++) {
        clearTable();
        insert(0, -1);

        int prefixSum = 0;
        int maxLength = 0;
        int k = queries[t];

        for (int i = 0; i < n; i++) {
            prefixSum += nums[i];

            int index = find(prefixSum - k);

            if (index != -1000000 && i - index > maxLength)
                maxLength = i - index;

            insert(prefixSum, i);
        }

        result[t] = maxLength;
    }
}`,

    cpp: `#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    vector<int> maximumLengths(vector<int>& nums, vector<int>& queries) {
        vector<int> result;

        for (int k : queries) {
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

            result.push_back(maxLength);
        }

        return result;
    }
};`
  },
    "msssk-h2": {
    python: `def dynamic_queries(nums, queries):
    result = []

    for k in queries:
        prefix_sum = 0
        max_length = 0
        prefix_map = {0: -1}

        for i in range(len(nums)):
            prefix_sum += nums[i]

            if prefix_sum - k in prefix_map:
                max_length = max(max_length, i - prefix_map[prefix_sum - k])

            if prefix_sum not in prefix_map:
                prefix_map[prefix_sum] = i

        result.append(max_length)

    return result`,

    java: `import java.util.HashMap;

class Solution {
    public int[] dynamicQueries(int[] nums, int[] queries) {
        int[] result = new int[queries.length];

        for (int q = 0; q < queries.length; q++) {
            int k = queries[q];
            HashMap<Integer, Integer> prefixMap = new HashMap<>();
            prefixMap.put(0, -1);

            int prefixSum = 0;
            int maxLength = 0;

            for (int i = 0; i < nums.length; i++) {
                prefixSum += nums[i];

                if (prefixMap.containsKey(prefixSum - k)) {
                    maxLength = Math.max(maxLength, i - prefixMap.get(prefixSum - k));
                }

                if (!prefixMap.containsKey(prefixSum)) {
                    prefixMap.put(prefixSum, i);
                }
            }

            result[q] = maxLength;
        }

        return result;
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

void clearTable() {
    for (int i = 0; i < SIZE; i++)
        table[i].used = 0;
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

void dynamicQueries(int nums[], int n, int queries[], int q, int result[]) {
    for (int t = 0; t < q; t++) {
        clearTable();
        insert(0, -1);

        int prefixSum = 0;
        int maxLength = 0;
        int k = queries[t];

        for (int i = 0; i < n; i++) {
            prefixSum += nums[i];

            int index = find(prefixSum - k);

            if (index != -1000000 && i - index > maxLength)
                maxLength = i - index;

            insert(prefixSum, i);
        }

        result[t] = maxLength;
    }
}`,

    cpp: `#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    vector<int> dynamicQueries(vector<int>& nums, vector<int>& queries) {
        vector<int> result;

        for (int k : queries) {
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

            result.push_back(maxLength);
        }

        return result;
    }
};`
  },
    "msssk-h3": {
    python: `def circular_subarray(nums, k):
    n = len(nums)
    extended = nums + nums

    max_length = 0

    for start in range(n):
        prefix_sum = 0

        for end in range(start, start + n):
            prefix_sum += extended[end]

            if prefix_sum == k:
                max_length = max(max_length, end - start + 1)

    return max_length`,

    java: `class Solution {
    public int circularSubarray(int[] nums, int k) {
        int n = nums.length;
        int[] extended = new int[2 * n];

        for (int i = 0; i < 2 * n; i++) {
            extended[i] = nums[i % n];
        }

        int maxLength = 0;

        for (int start = 0; start < n; start++) {
            int prefixSum = 0;

            for (int end = start; end < start + n; end++) {
                prefixSum += extended[end];

                if (prefixSum == k) {
                    maxLength = Math.max(maxLength, end - start + 1);
                }
            }
        }

        return maxLength;
    }
}`,

    c: `#include <stdio.h>

int circularSubarray(int nums[], int n, int k) {
    int extended[2 * n];

    for (int i = 0; i < 2 * n; i++)
        extended[i] = nums[i % n];

    int maxLength = 0;

    for (int start = 0; start < n; start++) {
        int prefixSum = 0;

        for (int end = start; end < start + n; end++) {
            prefixSum += extended[end];

            if (prefixSum == k && end - start + 1 > maxLength)
                maxLength = end - start + 1;
        }
    }

    return maxLength;
}`,

    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int circularSubarray(vector<int>& nums, int k) {
        int n = nums.size();
        vector<int> extended(2 * n);

        for (int i = 0; i < 2 * n; i++) {
            extended[i] = nums[i % n];
        }

        int maxLength = 0;

        for (int start = 0; start < n; start++) {
            int prefixSum = 0;

            for (int end = start; end < start + n; end++) {
                prefixSum += extended[end];

                if (prefixSum == k) {
                    maxLength = max(maxLength, end - start + 1);
                }
            }
        }

        return maxLength;
    }
};`
  },
    "msssk-h4": {
    python: `def longest_segment_after_updates(nums, updates, k):
    result = []

    for index, value in updates:
        nums[index] = value

        prefix_sum = 0
        max_length = 0
        prefix_map = {0: -1}

        for i in range(len(nums)):
            prefix_sum += nums[i]

            if prefix_sum - k in prefix_map:
                max_length = max(max_length, i - prefix_map[prefix_sum - k])

            if prefix_sum not in prefix_map:
                prefix_map[prefix_sum] = i

        result.append(max_length)

    return result`,

    java: `import java.util.HashMap;

class Solution {
    public int[] longestSegmentAfterUpdates(int[] nums, int[][] updates, int k) {
        int[] result = new int[updates.length];

        for (int u = 0; u < updates.length; u++) {
            nums[updates[u][0]] = updates[u][1];

            HashMap<Integer, Integer> prefixMap = new HashMap<>();
            prefixMap.put(0, -1);

            int prefixSum = 0;
            int maxLength = 0;

            for (int i = 0; i < nums.length; i++) {
                prefixSum += nums[i];

                if (prefixMap.containsKey(prefixSum - k)) {
                    maxLength = Math.max(maxLength, i - prefixMap.get(prefixSum - k));
                }

                if (!prefixMap.containsKey(prefixSum)) {
                    prefixMap.put(prefixSum, i);
                }
            }

            result[u] = maxLength;
        }

        return result;
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

void clearTable() {
    for (int i = 0; i < SIZE; i++)
        table[i].used = 0;
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

void longestSegmentAfterUpdates(int nums[], int n, int updates[][2], int m, int k, int result[]) {
    for (int u = 0; u < m; u++) {
        nums[updates[u][0]] = updates[u][1];

        clearTable();
        insert(0, -1);

        int prefixSum = 0;
        int maxLength = 0;

        for (int i = 0; i < n; i++) {
            prefixSum += nums[i];

            int index = find(prefixSum - k);

            if (index != -1000000 && i - index > maxLength)
                maxLength = i - index;

            insert(prefixSum, i);
        }

        result[u] = maxLength;
    }
}`,

    cpp: `#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    vector<int> longestSegmentAfterUpdates(vector<int>& nums, vector<vector<int>>& updates, int k) {
        vector<int> result;

        for (auto& update : updates) {
            nums[update[0]] = update[1];

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

            result.push_back(maxLength);
        }

        return result;
    }
};`
  },
    "msssk-h5": {
    python: `def longest_target_stream(stream, k):
    prefix_sum = 0
    max_length = 0
    prefix_map = {0: -1}

    for i, value in enumerate(stream):
        prefix_sum += value

        if prefix_sum - k in prefix_map:
            max_length = max(max_length, i - prefix_map[prefix_sum - k])

        if prefix_sum not in prefix_map:
            prefix_map[prefix_sum] = i

    return max_length`,

    java: `import java.util.HashMap;

class Solution {
    public int longestTargetStream(int[] stream, int k) {
        HashMap<Integer, Integer> prefixMap = new HashMap<>();
        prefixMap.put(0, -1);

        int prefixSum = 0;
        int maxLength = 0;

        for (int i = 0; i < stream.length; i++) {
            prefixSum += stream[i];

            if (prefixMap.containsKey(prefixSum - k)) {
                maxLength = Math.max(maxLength, i - prefixMap.get(prefixSum - k));
            }

            if (!prefixMap.containsKey(prefixSum)) {
                prefixMap.put(prefixSum, i);
            }
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

int longestTargetStream(int stream[], int n, int k) {
    for (int i = 0; i < SIZE; i++)
        table[i].used = 0;

    insert(0, -1);

    int prefixSum = 0;
    int maxLength = 0;

    for (int i = 0; i < n; i++) {
        prefixSum += stream[i];

        int index = find(prefixSum - k);

        if (index != -1000000 && i - index > maxLength)
            maxLength = i - index;

        insert(prefixSum, i);
    }

    return maxLength;
}`,

    cpp: `#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    int longestTargetStream(vector<int>& stream, int k) {
        unordered_map<int, int> prefixMap;
        prefixMap[0] = -1;

        int prefixSum = 0;
        int maxLength = 0;

        for (int i = 0; i < stream.size(); i++) {
            prefixSum += stream[i];

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
  }
};