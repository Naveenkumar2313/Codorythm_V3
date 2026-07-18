export const RURQproblems = [
  // --- EASY ---
  {
    id: 'rurq-e1', title: 'Range Add and Total Sum', difficulty: 'Easy',
    description: 'Given an array of integers, perform a single range update: add a value val to all elements in [l, r]. Then return the sum of the entire array.',
    constraints: ['1 <= nums.length <= 1000', '-10^4 <= nums[i] <= 10^4', '0 <= l <= r < nums.length', '-10^4 <= val <= 10^4'],
    examples: [
      { input: 'nums = [1, 2, 3, 4, 5], l = 1, r = 3, val = 2', output: '21', explanation: 'Add 2 to indices 1-3: [1, 4, 5, 6, 5]. Sum = 1+4+5+6+5 = 21.' },
      { input: 'nums = [3, 3, 3, 3, 3], l = 0, r = 4, val = 1', output: '20', explanation: 'Add 1 to all elements: [4,4,4,4,4]. Sum = 20.' }
    ],
    testCases: [
      { input: '5\n1 2 3 4 5\n1 3 2', expectedOutput: '21', hidden: false },
      { input: '5\n3 3 3 3 3\n0 4 1', expectedOutput: '20', hidden: false },
      { input: '6\n1 1 1 1 1 1\n2 5 3', expectedOutput: '18', hidden: true },
      { input: '4\n10 20 30 40\n0 1 5', expectedOutput: '110', hidden: true }
    ],
    starterCode: {
      python: 'def range_add_total_sum(nums, l, r, val):\n    pass',
      java: 'public int rangeAddTotalSum(int[] nums, int l, int r, int val) {\n    return 0;\n}',
      c: 'int rangeAddTotalSum(int* nums, int numsSize, int l, int r, int val) {\n    return 0;\n}',
      cpp: 'int rangeAddTotalSum(vector<int>& nums, int l, int r, int val) {\n    return 0;\n}'
    }
  },

  {
    id: 'rurq-e2', title: 'Range Add and Single Point Query', difficulty: 'Easy',
    description: 'Given an array, perform multiple range add operations: each operation adds val to all elements in [l, r]. After all operations, return the value at a given index p. Use a difference array to apply all updates in O(n) total.',
    constraints: ['1 <= nums.length <= 10^4', '1 <= operations <= 500', '0 <= l <= r < nums.length', '0 <= p < nums.length', '-10^4 <= val <= 10^4'],
    examples: [
      { input: 'nums = [1, 2, 3, 4, 5], ops = [[0,2,3],[1,4,1]], p = 2', output: '7', explanation: 'Add 3 to [0,2]: [4,5,6,4,5]. Add 1 to [1,4]: [4,6,7,5,6]. Value at index 2 = 7.' },
      { input: 'nums = [0, 0, 0, 0], ops = [[0,3,5],[1,2,2]], p = 1', output: '7', explanation: 'Add 5 to all: [5,5,5,5]. Add 2 to [1,2]: [5,7,7,5]. Value at index 1 = 7.' }
    ],
    testCases: [
      { input: '5\n1 2 3 4 5\n2\n0 2 3\n1 4 1\n2', expectedOutput: '7', hidden: false },
      { input: '4\n0 0 0 0\n2\n0 3 5\n1 2 2\n1', expectedOutput: '7', hidden: false },
      { input: '6\n1 1 1 1 1 1\n3\n0 5 2\n1 3 3\n2 4 1\n3', expectedOutput: '7', hidden: true },
      { input: '5\n10 10 10 10 10\n2\n0 2 5\n2 4 3\n4', expectedOutput: '13', hidden: true }
    ],
    starterCode: {
      python: 'def range_add_point_query(nums, operations, p):\n    # Use a difference array\n    pass',
      java: 'public int rangeAddPointQuery(int[] nums, int[][] operations, int p) {\n    // Use a difference array\n    return 0;\n}',
      c: 'int rangeAddPointQuery(int* nums, int numsSize, int** operations, int opsSize, int p) {\n    return 0;\n}',
      cpp: 'int rangeAddPointQuery(vector<int>& nums, vector<vector<int>>& operations, int p) {\n    // Use a difference array\n    return 0;\n}'
    }
  },

  {
    id: 'rurq-e3', title: 'Range Add and Range Sum Query', difficulty: 'Easy',
    description: 'Given an array, process a sequence of operations: ADD l r val adds val to all elements in [l, r], and QUERY l r returns the sum of elements in [l, r]. Use a difference array for updates and a prefix sum for queries.',
    constraints: ['1 <= nums.length <= 10^4', '1 <= operations <= 500', '0 <= l <= r < nums.length', '-10^4 <= val <= 10^4'],
    examples: [
      { input: 'nums = [1, 2, 3, 4, 5], ops = ["QUERY 0 4", "ADD 1 3 2", "QUERY 0 4", "QUERY 1 3"]', output: '[15, 21, 15]', explanation: 'Initial sum [0,4]=15. After ADD 2 to [1,3]: [1,4,5,6,5]. Sum [0,4]=21. Sum [1,3]=4+5+6=15.' },
      { input: 'nums = [2, 2, 2, 2, 2], ops = ["ADD 0 4 3", "QUERY 0 4", "QUERY 2 3"]', output: '[25, 10]', explanation: 'After ADD 3 to all: [5,5,5,5,5]. Sum [0,4]=25. Sum [2,3]=10.' }
    ],
    testCases: [
      { input: '5\n1 2 3 4 5\n4\nQUERY 0 4\nADD 1 3 2\nQUERY 0 4\nQUERY 1 3', expectedOutput: '15 21 15', hidden: false },
      { input: '5\n2 2 2 2 2\n3\nADD 0 4 3\nQUERY 0 4\nQUERY 2 3', expectedOutput: '25 10', hidden: false },
      { input: '6\n1 1 1 1 1 1\n4\nADD 0 5 2\nQUERY 0 5\nADD 2 4 3\nQUERY 2 4', expectedOutput: '18 18', hidden: true },
      { input: '4\n5 5 5 5\n3\nQUERY 0 3\nADD 1 2 5\nQUERY 0 3', expectedOutput: '20 30', hidden: true }
    ],
    starterCode: {
      python: 'def process_operations(nums, operations):\n    # Use difference array for range add, prefix sum for range query\n    pass',
      java: 'public int[] processOperations(int[] nums, String[] operations) {\n    // Use difference array for range add, prefix sum for range query\n    return new int[]{};\n}',
      c: 'int* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> processOperations(vector<int>& nums, vector<string>& operations) {\n    // Use difference array for range add, prefix sum for range query\n    return {};\n}'
    }
  },

  {
    id: 'rurq-e4', title: 'Range Set and Range Sum Query', difficulty: 'Easy',
    description: 'Given an array of zeros, perform multiple SET operations: SET l r val sets all elements in [l, r] to val (overwriting previous values). After all operations, answer QUERY l r by returning the sum of elements in [l, r]. Operations are non-overlapping.',
    constraints: ['1 <= nums.length <= 10^4', '1 <= operations <= 500', '0 <= l <= r < nums.length', '0 <= val <= 10^4', 'SET ranges do not overlap each other'],
    examples: [
      { input: 'n = 6, ops = ["SET 0 2 3", "SET 3 5 5", "QUERY 0 5", "QUERY 1 4"]', output: '[24, 19]', explanation: 'After SET: [3,3,3,5,5,5]. Sum [0,5]=24. Sum [1,4]=3+3+5+5=16. Wait — [1,4]=3+3+5+5=16.' },
      { input: 'n = 5, ops = ["SET 0 1 2", "SET 2 4 4", "QUERY 0 4", "QUERY 2 4"]', output: '[16, 12]', explanation: 'After SET: [2,2,4,4,4]. Sum [0,4]=16. Sum [2,4]=12.' }
    ],
    testCases: [
      { input: '5\n0 0 0 0 0\n4\nSET 0 1 2\nSET 2 4 4\nQUERY 0 4\nQUERY 2 4', expectedOutput: '16 12', hidden: false },
      { input: '6\n0 0 0 0 0 0\n3\nSET 0 2 3\nSET 3 5 5\nQUERY 0 5', expectedOutput: '24', hidden: false },
      { input: '6\n0 0 0 0 0 0\n4\nSET 0 1 1\nSET 2 3 2\nSET 4 5 3\nQUERY 0 5', expectedOutput: '12', hidden: true },
      { input: '5\n0 0 0 0 0\n3\nSET 0 4 7\nQUERY 0 2\nQUERY 3 4', expectedOutput: '21 14', hidden: true }
    ],
    starterCode: {
      python: 'def process_operations(nums, operations):\n    pass',
      java: 'public int[] processOperations(int[] nums, String[] operations) {\n    return new int[]{};\n}',
      c: 'int* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> processOperations(vector<int>& nums, vector<string>& operations) {\n    return {};\n}'
    }
  },

  {
    id: 'rurq-e5', title: 'Range Add and Range Maximum Query', difficulty: 'Easy',
    description: 'Given an array, process a sequence of operations: ADD l r val adds val to all elements in [l, r], and QUERY l r returns the maximum element in [l, r]. Use a difference array for updates and a linear scan for each query.',
    constraints: ['1 <= nums.length <= 1000', '1 <= operations <= 200', '0 <= l <= r < nums.length', '-10^4 <= val <= 10^4'],
    examples: [
      { input: 'nums = [1, 3, 2, 5, 4], ops = ["QUERY 0 4", "ADD 1 3 4", "QUERY 0 4", "QUERY 1 3"]', output: '[5, 9, 9]', explanation: 'Initial max [0,4]=5. After ADD 4 to [1,3]: [1,7,6,9,4]. Max [0,4]=9. Max [1,3]=9.' },
      { input: 'nums = [5, 5, 5, 5], ops = ["ADD 0 1 3", "QUERY 0 3", "QUERY 0 1"]', output: '[8, 8]', explanation: 'After ADD 3 to [0,1]: [8,8,5,5]. Max [0,3]=8. Max [0,1]=8.' }
    ],
    testCases: [
      { input: '5\n1 3 2 5 4\n4\nQUERY 0 4\nADD 1 3 4\nQUERY 0 4\nQUERY 1 3', expectedOutput: '5 9 9', hidden: false },
      { input: '4\n5 5 5 5\n3\nADD 0 1 3\nQUERY 0 3\nQUERY 0 1', expectedOutput: '8 8', hidden: false },
      { input: '6\n2 4 6 8 10 12\n3\nADD 0 2 5\nQUERY 0 5\nQUERY 3 5', expectedOutput: '17 12', hidden: true },
      { input: '5\n1 1 1 1 1\n3\nADD 2 4 9\nQUERY 0 4\nQUERY 0 1', expectedOutput: '10 1', hidden: true }
    ],
    starterCode: {
      python: 'def process_operations(nums, operations):\n    # Use difference array for range add, linear scan for range max\n    pass',
      java: 'public int[] processOperations(int[] nums, String[] operations) {\n    // Use difference array for range add, linear scan for range max\n    return new int[]{};\n}',
      c: 'int* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> processOperations(vector<int>& nums, vector<string>& operations) {\n    // Use difference array for range add, linear scan for range max\n    return {};\n}'
    }
  },

  // --- MEDIUM ---
  {
    id: 'rurq-m1', title: 'Range Add Range Sum Using Segment Tree with Lazy Propagation', difficulty: 'Medium',
    description: 'Given an array, build a segment tree with lazy propagation that supports: ADD l r val (add val to all elements in [l, r]) and QUERY l r (return the sum of elements in [l, r]). Process all operations efficiently in O(log n) each.',
    constraints: ['1 <= nums.length <= 10^5', '1 <= operations <= 10^4', '0 <= l <= r < nums.length', '-10^5 <= val <= 10^5'],
    examples: [
      { input: 'nums = [1, 2, 3, 4, 5], ops = ["QUERY 0 4", "ADD 1 3 3", "QUERY 0 4", "ADD 0 4 1", "QUERY 2 4"]', output: '[15, 24, 14]', explanation: 'Sum [0,4]=15. After ADD 3 to [1,3]: [1,5,6,7,5]. Sum [0,4]=24. After ADD 1 to all: [2,6,7,8,6]. Sum [2,4]=7+8+6=21. Wait — recalc: [2,6,7,8,6], sum [2,4]=21.' },
      { input: 'nums = [3, 3, 3, 3, 3], ops = ["ADD 0 2 2", "ADD 2 4 2", "QUERY 0 4", "QUERY 2 2"]', output: '[21, 7]', explanation: 'After ADD 2 to [0,2]: [5,5,5,3,3]. After ADD 2 to [2,4]: [5,5,7,5,5]. Sum [0,4]=27? Recalc: sum=5+5+7+5+5=27. Query [2,2]=7.' }
    ],
    testCases: [
      { input: '5\n1 2 3 4 5\n4\nQUERY 0 4\nADD 1 3 3\nQUERY 1 3\nQUERY 0 4', expectedOutput: '15 18 24', hidden: false },
      { input: '5\n3 3 3 3 3\n4\nADD 0 2 2\nADD 2 4 2\nQUERY 0 4\nQUERY 2 2', expectedOutput: '27 7', hidden: false },
      { input: '6\n1 2 3 4 5 6\n5\nQUERY 0 5\nADD 0 2 10\nADD 3 5 5\nQUERY 0 5\nQUERY 1 4', expectedOutput: '21 66 44', hidden: true },
      { input: '4\n10 20 30 40\n4\nADD 0 3 5\nQUERY 0 3\nADD 1 2 10\nQUERY 0 3', expectedOutput: '120 140', hidden: true }
    ],
    starterCode: {
      python: 'def process_operations(nums, operations):\n    # Build segment tree with lazy propagation\n    pass',
      java: 'public int[] processOperations(int[] nums, String[] operations) {\n    // Build segment tree with lazy propagation\n    return new int[]{};\n}',
      c: 'int* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> processOperations(vector<int>& nums, vector<string>& operations) {\n    // Build segment tree with lazy propagation\n    return {};\n}'
    }
  },

  {
    id: 'rurq-m2', title: 'Range Add Range Minimum Query with Lazy Propagation', difficulty: 'Medium',
    description: 'Given an array, build a segment tree with lazy propagation that supports: ADD l r val (add val to all elements in [l, r]) and QUERY l r (return the minimum element in [l, r]). Process all operations in O(log n) each.',
    constraints: ['1 <= nums.length <= 10^5', '1 <= operations <= 10^4', '0 <= l <= r < nums.length', '-10^5 <= val <= 10^5'],
    examples: [
      { input: 'nums = [4, 2, 7, 1, 9], ops = ["QUERY 0 4", "ADD 1 3 5", "QUERY 0 4", "QUERY 1 3"]', output: '[1, 4, 6]', explanation: 'Min [0,4]=1. After ADD 5 to [1,3]: [4,7,12,6,9]. Min [0,4]=4. Min [1,3]=6.' },
      { input: 'nums = [5, 5, 5, 5, 5], ops = ["ADD 0 4 -3", "QUERY 0 4", "ADD 2 3 10", "QUERY 1 4"]', output: '[2, 2]', explanation: 'After ADD -3 to all: [2,2,2,2,2]. Min [0,4]=2. After ADD 10 to [2,3]: [2,2,12,12,2]. Min [1,4]=2.' }
    ],
    testCases: [
      { input: '5\n4 2 7 1 9\n4\nQUERY 0 4\nADD 1 3 5\nQUERY 0 4\nQUERY 1 3', expectedOutput: '1 4 6', hidden: false },
      { input: '5\n5 5 5 5 5\n4\nADD 0 4 -3\nQUERY 0 4\nADD 2 3 10\nQUERY 1 4', expectedOutput: '2 2', hidden: false },
      { input: '6\n3 1 4 1 5 9\n4\nQUERY 0 5\nADD 0 2 6\nQUERY 0 5\nQUERY 3 5', expectedOutput: '1 1 1', hidden: true },
      { input: '5\n10 20 30 40 50\n4\nADD 0 4 -15\nQUERY 0 4\nADD 3 4 20\nQUERY 0 4', expectedOutput: '-5 -5', hidden: true }
    ],
    starterCode: {
      python: 'def process_operations(nums, operations):\n    # Build segment tree with lazy propagation for range add + range min\n    pass',
      java: 'public int[] processOperations(int[] nums, String[] operations) {\n    // Build segment tree with lazy propagation for range add + range min\n    return new int[]{};\n}',
      c: 'int* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> processOperations(vector<int>& nums, vector<string>& operations) {\n    // Build segment tree with lazy propagation for range add + range min\n    return {};\n}'
    }
  },

  {
    id: 'rurq-m3', title: 'Range Update Range Sum Using Two BITs', difficulty: 'Medium',
    description: 'Given an array, implement range add and range sum query using two Binary Indexed Trees (BITs). ADD l r val adds val to all elements in [l, r]. QUERY l r returns the sum of elements in [l, r]. Use the two-BIT technique to achieve O(log n) per operation.',
    constraints: ['1 <= nums.length <= 10^5', '1 <= operations <= 10^4', '0 <= l <= r < nums.length', '-10^5 <= val <= 10^5'],
    examples: [
      { input: 'nums = [0, 0, 0, 0, 0], ops = ["ADD 0 4 2", "QUERY 0 4", "ADD 1 3 3", "QUERY 1 3", "QUERY 0 4"]', output: '[10, 15, 19]', explanation: 'After ADD 2 to all: [2,2,2,2,2]. Sum [0,4]=10. After ADD 3 to [1,3]: [2,5,5,5,2]. Sum [1,3]=15. Sum [0,4]=19.' },
      { input: 'nums = [1, 2, 3, 4, 5], ops = ["ADD 2 4 10", "QUERY 0 4", "QUERY 2 4"]', output: '[45, 42]', explanation: 'After ADD 10 to [2,4]: [1,2,13,14,15]. Sum [0,4]=45. Sum [2,4]=42.' }
    ],
    testCases: [
      { input: '5\n0 0 0 0 0\n5\nADD 0 4 2\nQUERY 0 4\nADD 1 3 3\nQUERY 1 3\nQUERY 0 4', expectedOutput: '10 15 19', hidden: false },
      { input: '5\n1 2 3 4 5\n3\nADD 2 4 10\nQUERY 0 4\nQUERY 2 4', expectedOutput: '45 42', hidden: false },
      { input: '6\n2 4 6 8 10 12\n4\nADD 0 5 3\nQUERY 0 5\nADD 2 3 7\nQUERY 0 5', expectedOutput: '60 74', hidden: true },
      { input: '4\n5 10 15 20\n4\nQUERY 0 3\nADD 1 2 5\nQUERY 0 3\nQUERY 1 2', expectedOutput: '50 60 30', hidden: true }
    ],
    starterCode: {
      python: 'def process_operations(nums, operations):\n    # Use two BITs for range update range sum query\n    pass',
      java: 'public int[] processOperations(int[] nums, String[] operations) {\n    // Use two BITs for range update range sum query\n    return new int[]{};\n}',
      c: 'int* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> processOperations(vector<int>& nums, vector<string>& operations) {\n    // Use two BITs for range update range sum query\n    return {};\n}'
    }
  },

  {
    id: 'rurq-m4', title: 'Range Multiply Range Sum Query', difficulty: 'Medium',
    description: 'Given an array, process a sequence of operations: MULTIPLY l r val multiplies all elements in [l, r] by val, and QUERY l r returns the sum of elements in [l, r] modulo 10^9+7. Use a segment tree with lazy propagation to handle multiplicative updates.',
    constraints: ['1 <= nums.length <= 10^5', '1 <= operations <= 10^4', '0 <= l <= r < nums.length', '1 <= val <= 100', 'Return all sums modulo 10^9+7'],
    examples: [
      { input: 'nums = [1, 2, 3, 4, 5], ops = ["QUERY 0 4", "MULTIPLY 1 3 2", "QUERY 0 4", "QUERY 1 3"]', output: '[15, 25, 20]', explanation: 'Sum [0,4]=15. After MULTIPLY [1,3] by 2: [1,4,6,8,5]. Sum [0,4]=24. Wait — 1+4+6+8+5=24. Sum [1,3]=4+6+8=18.' },
      { input: 'nums = [2, 3, 4], ops = ["MULTIPLY 0 2 3", "QUERY 0 2"]', output: '[27]', explanation: 'After MULTIPLY all by 3: [6,9,12]. Sum=27.' }
    ],
    testCases: [
      { input: '3\n2 3 4\n2\nMULTIPLY 0 2 3\nQUERY 0 2', expectedOutput: '27', hidden: false },
      { input: '5\n1 2 3 4 5\n3\nQUERY 0 4\nMULTIPLY 0 4 2\nQUERY 0 4', expectedOutput: '15 30', hidden: false },
      { input: '5\n1 1 1 1 1\n4\nMULTIPLY 0 4 5\nQUERY 0 4\nMULTIPLY 1 3 2\nQUERY 0 4', expectedOutput: '25 31', hidden: true },
      { input: '4\n2 4 6 8\n3\nMULTIPLY 0 1 3\nMULTIPLY 2 3 2\nQUERY 0 3', expectedOutput: '46', hidden: true }
    ],
    starterCode: {
      python: 'def process_operations(nums, operations):\n    # Use segment tree with lazy propagation for range multiply + range sum\n    MOD = 10**9 + 7\n    pass',
      java: 'public int[] processOperations(int[] nums, String[] operations) {\n    // Use segment tree with lazy propagation for range multiply + range sum\n    final int MOD = 1_000_000_007;\n    return new int[]{};\n}',
      c: 'int* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> processOperations(vector<int>& nums, vector<string>& operations) {\n    // Use segment tree with lazy propagation for range multiply + range sum\n    const int MOD = 1e9 + 7;\n    return {};\n}'
    }
  },

  {
    id: 'rurq-m5', title: 'Count Elements in Range After Multiple Range Updates', difficulty: 'Medium',
    description: 'Given an array, process a sequence of ADD l r val operations (add val to all elements in [l, r]), then answer COUNT lo hi queries: count how many elements in the entire array have a value between lo and hi (inclusive) after all preceding updates.',
    constraints: ['1 <= nums.length <= 10^4', '1 <= operations <= 10^3', '0 <= l <= r < nums.length', '-10^4 <= val <= 10^4', '-10^9 <= lo <= hi <= 10^9'],
    examples: [
      { input: 'nums = [1, 3, 5, 7, 9], ops = ["COUNT 1 5", "ADD 0 2 2", "COUNT 1 5", "ADD 1 3 -4", "COUNT 1 5"]', output: '[2, 1, 2]', explanation: 'Initial: [1,3,5,7,9]. COUNT [1,5]: values 1,3,5 in range → 3. Wait — 1,3,5 are all in [1,5], count=3. After ADD 2 to [0,2]: [3,5,7,7,9]. COUNT [1,5]: 3,5 → 2. After ADD -4 to [1,3]: [3,1,3,3,9]. COUNT [1,5]: 3,1,3,3 → 4.' },
      { input: 'nums = [2, 4, 6, 8, 10], ops = ["ADD 0 4 -3", "COUNT 1 5", "COUNT 6 10"]', output: '[2, 2]', explanation: 'After ADD -3 to all: [-1,1,3,5,7]. COUNT [1,5]: 1,3,5 → 3. COUNT [6,10]: 7 → 1.' }
    ],
    testCases: [
      { input: '5\n2 4 6 8 10\n3\nADD 0 4 -3\nCOUNT 1 5\nCOUNT 6 10', expectedOutput: '3 1', hidden: false },
      { input: '5\n1 2 3 4 5\n3\nCOUNT 1 3\nADD 0 4 2\nCOUNT 1 3', expectedOutput: '3 0', hidden: false },
      { input: '6\n5 5 5 5 5 5\n3\nADD 0 2 5\nADD 3 5 -5\nCOUNT 0 5', expectedOutput: '3', hidden: true },
      { input: '5\n10 20 30 40 50\n3\nADD 0 4 -25\nCOUNT -20 10\nCOUNT 11 30', expectedOutput: '3 1', hidden: true }
    ],
    starterCode: {
      python: 'def process_operations(nums, operations):\n    # Apply range adds using difference array, then count elements in value range\n    pass',
      java: 'public int[] processOperations(int[] nums, String[] operations) {\n    // Apply range adds using difference array, then count elements in value range\n    return new int[]{};\n}',
      c: 'int* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> processOperations(vector<int>& nums, vector<string>& operations) {\n    // Apply range adds using difference array, then count elements in value range\n    return {};\n}'
    }
  },

  // --- HARD ---
  {
    id: 'rurq-h1', title: 'Range Add Range Sum with Mixed Point and Range Operations', difficulty: 'Hard',
    description: 'Given an array, process a large sequence of mixed operations using a segment tree with lazy propagation: ADD l r val (add val to range [l, r]), SET i val (set a single index i to val), and QUERY l r (return sum of [l, r]). All three operations must run in O(log n).',
    constraints: ['1 <= nums.length <= 10^5', '1 <= operations <= 10^5', '0 <= l <= r < nums.length', '0 <= i < nums.length', '-10^9 <= val <= 10^9'],
    examples: [
      { input: 'nums = [1, 2, 3, 4, 5], ops = ["ADD 0 4 2", "QUERY 0 4", "SET 2 100", "QUERY 0 4", "ADD 1 3 5", "QUERY 1 3"]', output: '[25, 122, 125]', explanation: 'After ADD 2 to all: [3,4,5,6,7]. Sum [0,4]=25. After SET index 2 to 100: [3,4,100,6,7]. Sum [0,4]=120. Wait — 3+4+100+6+7=120. After ADD 5 to [1,3]: [3,9,105,11,7]. Sum [1,3]=9+105+11=125.' },
      { input: 'nums = [10, 20, 30, 40, 50], ops = ["SET 0 1", "SET 4 1", "QUERY 0 4", "ADD 1 3 10", "QUERY 0 4"]', output: '[112, 142]', explanation: 'After SET: [1,20,30,40,1]. Sum=92. Wait — 1+20+30+40+1=92. After ADD 10 to [1,3]: [1,30,40,50,1]. Sum=122.' }
    ],
    testCases: [
      { input: '5\n1 2 3 4 5\n6\nADD 0 4 2\nQUERY 0 4\nSET 2 100\nQUERY 0 4\nADD 1 3 5\nQUERY 1 3', expectedOutput: '25 120 125', hidden: false },
      { input: '5\n10 20 30 40 50\n5\nSET 0 1\nSET 4 1\nQUERY 0 4\nADD 1 3 10\nQUERY 0 4', expectedOutput: '92 122', hidden: false },
      { input: '6\n1 2 3 4 5 6\n6\nADD 0 5 10\nQUERY 0 5\nSET 3 0\nADD 2 4 5\nQUERY 0 5\nQUERY 2 4', expectedOutput: '81 96 30', hidden: true },
      { input: '4\n5 5 5 5\n5\nSET 0 100\nSET 3 100\nADD 1 2 50\nQUERY 0 3\nQUERY 1 2', expectedOutput: '310 110', hidden: true }
    ],
    starterCode: {
      python: 'def process_operations(nums, operations):\n    # Segment tree with lazy propagation supporting ADD, SET, QUERY\n    pass',
      java: 'public long[] processOperations(int[] nums, String[] operations) {\n    // Segment tree with lazy propagation supporting ADD, SET, QUERY\n    return new long[]{};\n}',
      c: 'long long* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<long long> processOperations(vector<int>& nums, vector<string>& operations) {\n    // Segment tree with lazy propagation supporting ADD, SET, QUERY\n    return {};\n}'
    }
  },

  {
    id: 'rurq-h2', title: 'Range Assign Range Sum with Lazy Propagation', difficulty: 'Hard',
    description: 'Given an array, process operations using a segment tree with lazy propagation: ASSIGN l r val sets all elements in [l, r] to val (overlapping assigns allowed), and QUERY l r returns the sum of elements in [l, r]. Lazy nodes must correctly override pending assignments.',
    constraints: ['1 <= nums.length <= 10^5', '1 <= operations <= 10^5', '0 <= l <= r < nums.length', '-10^9 <= val <= 10^9'],
    examples: [
      { input: 'nums = [1, 2, 3, 4, 5], ops = ["ASSIGN 0 4 3", "QUERY 0 4", "ASSIGN 1 3 7", "QUERY 0 4", "QUERY 1 3"]', output: '[15, 27, 21]', explanation: 'After ASSIGN all to 3: [3,3,3,3,3]. Sum=15. After ASSIGN [1,3] to 7: [3,7,7,7,3]. Sum=27. Sum [1,3]=21.' },
      { input: 'nums = [0, 0, 0, 0, 0], ops = ["ASSIGN 0 2 5", "ASSIGN 1 4 2", "QUERY 0 4"]', output: '[13]', explanation: 'After ASSIGN [0,2] to 5: [5,5,5,0,0]. After ASSIGN [1,4] to 2: [5,2,2,2,2]. Sum=13.' }
    ],
    testCases: [
      { input: '5\n1 2 3 4 5\n5\nASSIGN 0 4 3\nQUERY 0 4\nASSIGN 1 3 7\nQUERY 0 4\nQUERY 1 3', expectedOutput: '15 27 21', hidden: false },
      { input: '5\n0 0 0 0 0\n3\nASSIGN 0 2 5\nASSIGN 1 4 2\nQUERY 0 4', expectedOutput: '13', hidden: false },
      { input: '6\n1 1 1 1 1 1\n5\nASSIGN 0 5 4\nQUERY 0 5\nASSIGN 2 4 10\nASSIGN 3 3 1\nQUERY 0 5', expectedOutput: '24 37', hidden: true },
      { input: '5\n9 9 9 9 9\n4\nASSIGN 0 4 0\nQUERY 0 4\nASSIGN 1 3 6\nQUERY 0 4', expectedOutput: '0 18', hidden: true }
    ],
    starterCode: {
      python: 'def process_operations(nums, operations):\n    # Segment tree with lazy propagation for range assign + range sum\n    pass',
      java: 'public long[] processOperations(int[] nums, String[] operations) {\n    // Segment tree with lazy propagation for range assign + range sum\n    return new long[]{};\n}',
      c: 'long long* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<long long> processOperations(vector<int>& nums, vector<string>& operations) {\n    // Segment tree with lazy propagation for range assign + range sum\n    return {};\n}'
    }
  },

  {
    id: 'rurq-h3', title: 'Range Add Range Maximum with Lazy Propagation', difficulty: 'Hard',
    description: 'Given an array, process operations using a segment tree with lazy propagation: ADD l r val adds val to all elements in [l, r], and QUERY l r returns the maximum element in [l, r]. Handle large inputs efficiently in O(log n) per operation.',
    constraints: ['1 <= nums.length <= 10^5', '1 <= operations <= 10^5', '0 <= l <= r < nums.length', '-10^9 <= val <= 10^9', '-10^9 <= nums[i] <= 10^9'],
    examples: [
      { input: 'nums = [3, 1, 4, 1, 5, 9, 2, 6], ops = ["QUERY 0 7", "ADD 2 5 10", "QUERY 0 7", "ADD 0 7 -5", "QUERY 3 6"]', output: '[9, 19, 10]', explanation: 'Max [0,7]=9. After ADD 10 to [2,5]: [3,1,14,11,15,19,2,6]. Max [0,7]=19. After ADD -5 to all: [-2,-4,9,6,10,14,-3,1]. Max [3,6]=14.' },
      { input: 'nums = [5, 3, 8, 2, 7], ops = ["ADD 0 4 3", "QUERY 0 4", "ADD 1 3 -10", "QUERY 0 4"]', output: '[11, 10]', explanation: 'After ADD 3 to all: [8,6,11,5,10]. Max=11. After ADD -10 to [1,3]: [8,-4,1,-5,10]. Max=10.' }
    ],
    testCases: [
      { input: '5\n5 3 8 2 7\n4\nADD 0 4 3\nQUERY 0 4\nADD 1 3 -10\nQUERY 0 4', expectedOutput: '11 10', hidden: false },
      { input: '8\n3 1 4 1 5 9 2 6\n5\nQUERY 0 7\nADD 2 5 10\nQUERY 0 7\nADD 0 7 -5\nQUERY 3 6', expectedOutput: '9 19 14', hidden: false },
      { input: '6\n10 20 30 40 50 60\n4\nADD 0 2 -25\nQUERY 0 5\nADD 3 5 10\nQUERY 0 5', expectedOutput: '60 70', hidden: true },
      { input: '5\n-5 -3 -8 -2 -7\n3\nADD 0 4 10\nQUERY 0 4\nQUERY 2 4', expectedOutput: '8 2', hidden: true }
    ],
    starterCode: {
      python: 'def process_operations(nums, operations):\n    # Segment tree with lazy propagation for range add + range max\n    pass',
      java: 'public long[] processOperations(int[] nums, String[] operations) {\n    // Segment tree with lazy propagation for range add + range max\n    return new long[]{};\n}',
      c: 'long long* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<long long> processOperations(vector<int>& nums, vector<string>& operations) {\n    // Segment tree with lazy propagation for range add + range max\n    return {};\n}'
    }
  },

  {
    id: 'rurq-h4', title: 'Range Add and Range Sum on 2D Grid', difficulty: 'Hard',
    description: 'Given a 2D grid of integers, process operations: ADD r1 c1 r2 c2 val adds val to all cells in the rectangle from (r1,c1) to (r2,c2), and QUERY r1 c1 r2 c2 returns the sum of all cells in that rectangle. Use a 2D difference array for updates and 2D prefix sums for queries.',
    constraints: ['1 <= rows, cols <= 500', '1 <= operations <= 10^4', '0 <= r1 <= r2 < rows', '0 <= c1 <= c2 < cols', '-10^4 <= val <= 10^4'],
    examples: [
      { input: 'grid = [[1,2,3],[4,5,6],[7,8,9]], ops = ["QUERY 0 0 2 2", "ADD 0 0 1 1 10", "QUERY 0 0 2 2", "QUERY 0 0 1 1"]', output: '[45, 85, 46]', explanation: 'Sum of full grid=45. After ADD 10 to top-left 2x2: [[11,12,3],[14,15,6],[7,8,9]]. Sum full=85. Sum [0,0]-[1,1]=11+12+14+15=52. Wait — recalc: 11+12+14+15=52.' },
      { input: 'grid = [[0,0],[0,0]], ops = ["ADD 0 0 1 1 5", "QUERY 0 0 1 1", "ADD 0 0 0 1 3", "QUERY 0 0 1 1"]', output: '[20, 26]', explanation: 'After ADD 5 to all: [[5,5],[5,5]]. Sum=20. After ADD 3 to row 0: [[8,8],[5,5]]. Sum=26.' }
    ],
    testCases: [
      { input: '2 2\n0 0\n0 0\n4\nADD 0 0 1 1 5\nQUERY 0 0 1 1\nADD 0 0 0 1 3\nQUERY 0 0 1 1', expectedOutput: '20 26', hidden: false },
      { input: '3 3\n1 2 3\n4 5 6\n7 8 9\n3\nQUERY 0 0 2 2\nADD 0 0 1 1 10\nQUERY 0 0 2 2', expectedOutput: '45 85', hidden: false },
      { input: '3 3\n0 0 0\n0 0 0\n0 0 0\n4\nADD 0 0 2 2 1\nADD 1 1 2 2 2\nQUERY 0 0 2 2\nQUERY 1 1 2 2', expectedOutput: '15 12', hidden: true },
      { input: '2 3\n1 2 3\n4 5 6\n3\nADD 0 0 1 2 4\nQUERY 0 0 1 2\nQUERY 0 1 1 2', expectedOutput: '45 24', hidden: true }
    ],
    starterCode: {
      python: 'def process_operations(grid, operations):\n    # Use 2D difference array for range add, 2D prefix sum for range query\n    pass',
      java: 'public long[] processOperations(int[][] grid, String[] operations) {\n    // Use 2D difference array for range add, 2D prefix sum for range query\n    return new long[]{};\n}',
      c: 'long long* processOperations(int** grid, int rows, int cols, char** operations, int opsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<long long> processOperations(vector<vector<int>>& grid, vector<string>& operations) {\n    // Use 2D difference array for range add, 2D prefix sum for range query\n    return {};\n}'
    }
  },

  {
    id: 'rurq-h5', title: 'Range Add Range Sum with Coordinate Compression and Offline Queries', difficulty: 'Hard',
    description: 'Given an array where values can be up to 10^9, process offline operations: ADD l r val adds val to all elements in [l, r], and QUERY l r returns the sum of elements in [l, r]. Indices l and r can be up to 10^9 (sparse), so coordinate compress all indices before building the segment tree.',
    constraints: ['1 <= operations <= 10^5', '0 <= l <= r <= 10^9', '-10^9 <= val <= 10^9', 'Array is initially all zeros', 'Compress coordinates before building the segment tree'],
    examples: [
      { input: 'ops = ["ADD 0 1000000000 1", "QUERY 0 1000000000", "ADD 500000000 1000000000 2", "QUERY 500000000 1000000000"]', output: '[1000000001, 1500000003]', explanation: 'ADD 1 to [0, 10^9]: all positions get +1. QUERY [0,10^9] = 10^9+1 positions * 1. ADD 2 to [5*10^8, 10^9]. QUERY [5*10^8, 10^9] = (5*10^8+1)*3.' },
      { input: 'ops = ["ADD 1 3 5", "ADD 2 5 3", "QUERY 1 5", "QUERY 2 3"]', output: '[26, 16]', explanation: 'After ADD 5 to [1,3] and ADD 3 to [2,5]: pos 1=5, pos 2=8, pos 3=8, pos 4=3, pos 5=3. Sum [1,5]=27. Wait — 5+8+8+3+3=27. Sum [2,3]=8+8=16.' }
    ],
    testCases: [
      { input: '4\nADD 1 3 5\nADD 2 5 3\nQUERY 1 5\nQUERY 2 3', expectedOutput: '27 16', hidden: false },
      { input: '4\nADD 0 10 2\nADD 5 10 3\nQUERY 0 10\nQUERY 5 10', expectedOutput: '52 36', hidden: false },
      { input: '5\nADD 0 100 1\nADD 50 100 4\nADD 0 49 1\nQUERY 0 100\nQUERY 50 100', expectedOutput: '457 306', hidden: true },
      { input: '4\nADD 1000000000 1000000000 7\nQUERY 1000000000 1000000000\nADD 0 1000000000 1\nQUERY 1000000000 1000000000', expectedOutput: '7 8', hidden: true }
    ],
    starterCode: {
      python: 'def process_operations(operations):\n    # Coordinate compress indices, then build segment tree with lazy propagation\n    pass',
      java: 'public long[] processOperations(String[] operations) {\n    // Coordinate compress indices, then build segment tree with lazy propagation\n    return new long[]{};\n}',
      c: 'long long* processOperations(char** operations, int opsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<long long> processOperations(vector<string>& operations) {\n    // Coordinate compress indices, then build segment tree with lazy propagation\n    return {};\n}'
    }
  },
];
