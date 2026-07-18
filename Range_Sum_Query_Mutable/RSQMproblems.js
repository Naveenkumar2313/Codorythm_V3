export const RSQMproblems = [
  // --- EASY ---
  {
    id: 'rsqm-e1', title: 'Sum of Entire Array', difficulty: 'Easy',
    description: 'Given an array of integers, return the sum of all elements. This is equivalent to a single range sum query over the full range [0, n-1].',
    constraints: ['1 <= nums.length <= 1000', '-10^4 <= nums[i] <= 10^4'],
    examples: [
      { input: 'nums = [1, 3, 5, 7, 9, 11]', output: '36', explanation: 'Sum of all elements: 1+3+5+7+9+11 = 36.' },
      { input: 'nums = [2, 4, 6, 8]', output: '20', explanation: 'Sum of all elements: 2+4+6+8 = 20.' }
    ],
    testCases: [
      { input: '6\n1 3 5 7 9 11', expectedOutput: '36', hidden: false },
      { input: '4\n2 4 6 8', expectedOutput: '20', hidden: false },
      { input: '1\n42', expectedOutput: '42', hidden: true },
      { input: '5\n-1 -2 -3 -4 -5', expectedOutput: '-15', hidden: true }
    ],
    starterCode: {
      python: 'def range_sum_query(nums, l, r):\n    pass',
      java: 'public int rangeSumQuery(int[] nums, int l, int r) {\n    return 0;\n}',
      c: 'int rangeSumQuery(int* nums, int numsSize, int l, int r) {\n    return 0;\n}',
      cpp: 'int rangeSumQuery(vector<int>& nums, int l, int r) {\n    return 0;\n}'
    }
  },

  {
    id: 'rsqm-e2', title: 'Single Range Sum Query', difficulty: 'Easy',
    description: 'Given an array of integers and a single query [l, r], return the sum of elements from index l to index r inclusive using a prefix sum array.',
    constraints: ['1 <= nums.length <= 1000', '0 <= l <= r < nums.length', '-10^4 <= nums[i] <= 10^4'],
    examples: [
      { input: 'nums = [1, 3, 5, 7, 9, 11], l = 1, r = 3', output: '15', explanation: 'Sum of nums[1..3] = 3+5+7 = 15.' },
      { input: 'nums = [2, 4, 6, 8, 10], l = 0, r = 2', output: '12', explanation: 'Sum of nums[0..2] = 2+4+6 = 12.' }
    ],
    testCases: [
      { input: '6\n1 3 5 7 9 11\n1 3', expectedOutput: '15', hidden: false },
      { input: '5\n2 4 6 8 10\n0 2', expectedOutput: '12', hidden: false },
      { input: '5\n10 20 30 40 50\n2 4', expectedOutput: '120', hidden: true },
      { input: '4\n-2 -4 -6 -8\n0 3', expectedOutput: '-20', hidden: true }
    ],
    starterCode: {
      python: 'def range_sum_query(nums, l, r):\n    pass',
      java: 'public int rangeSumQuery(int[] nums, int l, int r) {\n    return 0;\n}',
      c: 'int rangeSumQuery(int* nums, int numsSize, int l, int r) {\n    return 0;\n}',
      cpp: 'int rangeSumQuery(vector<int>& nums, int l, int r) {\n    return 0;\n}'
    }
  },

  {
    id: 'rsqm-e3', title: 'Multiple Range Sum Queries (Prefix Sum)', difficulty: 'Easy',
    description: 'Given an array and multiple queries each of the form [l, r], answer each query by returning the sum of elements from index l to r. Build a prefix sum array once and answer all queries in O(1) each.',
    constraints: ['1 <= nums.length <= 1000', '1 <= queries.length <= 500', '0 <= l <= r < nums.length', '-10^4 <= nums[i] <= 10^4'],
    examples: [
      { input: 'nums = [1, 3, 5, 7, 9], queries = [[0,2],[1,3],[2,4]]', output: '[9, 15, 21]', explanation: 'Sum [0,2]=1+3+5=9, sum [1,3]=3+5+7=15, sum [2,4]=5+7+9=21.' },
      { input: 'nums = [2, 4, 6, 8, 10], queries = [[0,4],[0,1],[3,4]]', output: '[30, 6, 18]', explanation: 'Sum [0,4]=30, sum [0,1]=2+4=6, sum [3,4]=8+10=18.' }
    ],
    testCases: [
      { input: '5\n1 3 5 7 9\n3\n0 2\n1 3\n2 4', expectedOutput: '9 15 21', hidden: false },
      { input: '5\n2 4 6 8 10\n3\n0 4\n0 1\n3 4', expectedOutput: '30 6 18', hidden: false },
      { input: '6\n1 2 3 4 5 6\n2\n0 5\n2 4', expectedOutput: '21 12', hidden: true },
      { input: '4\n-1 -2 -3 -4\n2\n0 3\n1 2', expectedOutput: '-10 -5', hidden: true }
    ],
    starterCode: {
      python: 'def range_sum_queries(nums, queries):\n    pass',
      java: 'public int[] rangeSumQueries(int[] nums, int[][] queries) {\n    return new int[]{};\n}',
      c: 'int* rangeSumQueries(int* nums, int numsSize, int** queries, int queriesSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> rangeSumQueries(vector<int>& nums, vector<vector<int>>& queries) {\n    return {};\n}'
    }
  },

  {
    id: 'rsqm-e4', title: 'Point Update and Range Sum Query Using BIT', difficulty: 'Easy',
    description: 'Given an array, build a Binary Indexed Tree (BIT/Fenwick Tree) that supports two operations: UPDATE i val to set nums[i] to val, and QUERY l r to return the sum of elements in range [l, r]. Process all operations in order and return results for all QUERY operations.',
    constraints: ['1 <= nums.length <= 10^4', '1 <= operations <= 500', '0 <= i < nums.length', '0 <= l <= r < nums.length', '-10^5 <= val <= 10^5'],
    examples: [
      { input: 'nums = [1, 3, 5, 7, 9], ops = ["QUERY 0 4", "UPDATE 1 10", "QUERY 0 4"]', output: '[25, 32]', explanation: 'First query: 1+3+5+7+9=25. After updating index 1 to 10: [1,10,5,7,9]. Second query: 1+10+5+7+9=32.' },
      { input: 'nums = [2, 4, 6, 8], ops = ["QUERY 1 3", "UPDATE 2 0", "QUERY 1 3"]', output: '[18, 12]', explanation: 'First query: 4+6+8=18. After updating index 2 to 0: [2,4,0,8]. Second query: 4+0+8=12.' }
    ],
    testCases: [
      { input: '5\n1 3 5 7 9\n3\nQUERY 0 4\nUPDATE 1 10\nQUERY 0 4', expectedOutput: '25 32', hidden: false },
      { input: '4\n2 4 6 8\n3\nQUERY 1 3\nUPDATE 2 0\nQUERY 1 3', expectedOutput: '18 12', hidden: false },
      { input: '5\n1 2 3 4 5\n4\nQUERY 0 4\nUPDATE 0 10\nUPDATE 4 10\nQUERY 0 4', expectedOutput: '15 29', hidden: true },
      { input: '4\n5 5 5 5\n3\nQUERY 0 3\nUPDATE 1 0\nQUERY 0 3', expectedOutput: '20 15', hidden: true }
    ],
    starterCode: {
      python: 'def process_operations(nums, operations):\n    # Build a BIT supporting point update and range sum query\n    pass',
      java: 'public int[] processOperations(int[] nums, String[] operations) {\n    // Build a BIT supporting point update and range sum query\n    return new int[]{};\n}',
      c: 'int* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> processOperations(vector<int>& nums, vector<string>& operations) {\n    // Build a BIT supporting point update and range sum query\n    return {};\n}'
    }
  },

  {
    id: 'rsqm-e5', title: 'Running Prefix Sum After Updates', difficulty: 'Easy',
    description: 'Given an array and a sequence of point updates, after each update return the prefix sum from index 0 to a given index p. Use a BIT to handle each update and prefix query efficiently.',
    constraints: ['1 <= nums.length <= 10^4', '1 <= operations <= 500', '0 <= i < nums.length', '0 <= p < nums.length', '-10^5 <= val <= 10^5'],
    examples: [
      { input: 'nums = [1, 2, 3, 4, 5], ops = ["PREFIX 2", "UPDATE 1 5", "PREFIX 2", "UPDATE 3 0", "PREFIX 4"]', output: '[6, 9, 13]', explanation: 'Prefix[0..2]=1+2+3=6. After UPDATE 1 to 5: [1,5,3,4,5]. Prefix[0..2]=1+5+3=9. After UPDATE 3 to 0: [1,5,3,0,5]. Prefix[0..4]=1+5+3+0+5=14? No, PREFIX 4 means index 0 to 4 = 14. Wait — prefix[0..4]=14.' },
      { input: 'nums = [2, 4, 6, 8], ops = ["PREFIX 3", "UPDATE 0 0", "PREFIX 3"]', output: '[20, 18]', explanation: 'Prefix[0..3]=2+4+6+8=20. After UPDATE 0 to 0: [0,4,6,8]. Prefix[0..3]=0+4+6+8=18.' }
    ],
    testCases: [
      { input: '5\n1 2 3 4 5\n3\nPREFIX 2\nUPDATE 1 5\nPREFIX 2', expectedOutput: '6 9', hidden: false },
      { input: '4\n2 4 6 8\n3\nPREFIX 3\nUPDATE 0 0\nPREFIX 3', expectedOutput: '20 18', hidden: false },
      { input: '5\n1 1 1 1 1\n4\nPREFIX 4\nUPDATE 2 9\nUPDATE 4 9\nPREFIX 4', expectedOutput: '5 23', hidden: true },
      { input: '4\n10 20 30 40\n3\nPREFIX 1\nUPDATE 0 5\nPREFIX 1', expectedOutput: '30 25', hidden: true }
    ],
    starterCode: {
      python: 'def process_operations(nums, operations):\n    # Build a BIT supporting point update and prefix sum query\n    pass',
      java: 'public int[] processOperations(int[] nums, String[] operations) {\n    // Build a BIT supporting point update and prefix sum query\n    return new int[]{};\n}',
      c: 'int* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> processOperations(vector<int>& nums, vector<string>& operations) {\n    // Build a BIT supporting point update and prefix sum query\n    return {};\n}'
    }
  },

  // --- MEDIUM ---
  {
    id: 'rsqm-m1', title: 'Range Sum Query with Multiple Point Updates', difficulty: 'Medium',
    description: 'Given an array, process a sequence of interleaved UPDATE and QUERY operations. UPDATE i val sets nums[i] to val. QUERY l r returns the sum of elements in [l, r]. Use a BIT to handle all operations efficiently.',
    constraints: ['1 <= nums.length <= 10^5', '1 <= operations <= 10^4', '0 <= i < nums.length', '0 <= l <= r < nums.length', '-10^5 <= val <= 10^5'],
    examples: [
      { input: 'nums = [1, 3, 5, 7, 9], ops = ["QUERY 0 4", "UPDATE 2 10", "UPDATE 4 0", "QUERY 0 4"]', output: '[25, 21]', explanation: 'First query: 1+3+5+7+9=25. After updates: [1,3,10,7,0]. Second query: 1+3+10+7+0=21.' },
      { input: 'nums = [2, 4, 6, 8, 10], ops = ["UPDATE 0 1", "UPDATE 4 1", "QUERY 0 4"]', output: '[20]', explanation: 'After updates: [1,4,6,8,1]. Query: 1+4+6+8+1=20.' }
    ],
    testCases: [
      { input: '5\n1 3 5 7 9\n4\nQUERY 0 4\nUPDATE 2 10\nUPDATE 4 0\nQUERY 0 4', expectedOutput: '25 21', hidden: false },
      { input: '5\n2 4 6 8 10\n3\nUPDATE 0 1\nUPDATE 4 1\nQUERY 0 4', expectedOutput: '20', hidden: false },
      { input: '6\n1 2 3 4 5 6\n5\nQUERY 0 5\nUPDATE 3 0\nUPDATE 5 0\nQUERY 0 5\nQUERY 2 4', expectedOutput: '21 15 8', hidden: true },
      { input: '4\n10 20 30 40\n4\nUPDATE 1 5\nQUERY 0 3\nUPDATE 3 5\nQUERY 0 3', expectedOutput: '85 50', hidden: true }
    ],
    starterCode: {
      python: 'def process_operations(nums, operations):\n    pass',
      java: 'public int[] processOperations(int[] nums, String[] operations) {\n    return new int[]{}\n}',
      c: 'int* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> processOperations(vector<int>& nums, vector<string>& operations) {\n    return {};\n}'
    }
  },

  {
    id: 'rsqm-m2', title: 'Number of Queries with Sum Greater Than K', difficulty: 'Medium',
    description: 'Given an array and multiple range queries [l, r], count how many queries have a range sum strictly greater than a given value k. Use a BIT or prefix sum for efficient computation.',
    constraints: ['1 <= nums.length <= 10^4', '1 <= queries.length <= 10^4', '0 <= l <= r < nums.length', '-10^9 <= k <= 10^9', '-10^5 <= nums[i] <= 10^5'],
    examples: [
      { input: 'nums = [1, 3, 5, 7, 9], queries = [[0,2],[1,3],[2,4],[0,4]], k = 10', output: '3', explanation: 'Sums: [0,2]=9, [1,3]=15, [2,4]=21, [0,4]=25. Three sums (15,21,25) are > 10.' },
      { input: 'nums = [2, 4, 6, 8], queries = [[0,1],[1,2],[2,3],[0,3]], k = 15', output: '1', explanation: 'Sums: 6, 10, 14, 20. Only 20 > 15. Count = 1.' }
    ],
    testCases: [
      { input: '5\n1 3 5 7 9\n4\n0 2\n1 3\n2 4\n0 4\n10', expectedOutput: '3', hidden: false },
      { input: '4\n2 4 6 8\n4\n0 1\n1 2\n2 3\n0 3\n15', expectedOutput: '1', hidden: false },
      { input: '5\n5 5 5 5 5\n3\n0 1\n0 2\n0 4\n12', expectedOutput: '2', hidden: true },
      { input: '4\n1 2 3 4\n3\n0 3\n1 3\n2 3\n8', expectedOutput: '1', hidden: true }
    ],
    starterCode: {
      python: 'def count_queries_greater_than_k(nums, queries, k):\n    pass',
      java: 'public int countQueriesGreaterThanK(int[] nums, int[][] queries, int k) {\n    return 0;\n}',
      c: 'int countQueriesGreaterThanK(int* nums, int numsSize, int** queries, int queriesSize, int k) {\n    return 0;\n}',
      cpp: 'int countQueriesGreaterThanK(vector<int>& nums, vector<vector<int>>& queries, int k) {\n    return 0;\n}'
    }
  },

  {
    id: 'rsqm-m3', title: 'Range Sum Query on 2D Matrix', difficulty: 'Medium',
    description: 'Given a 2D matrix of integers, answer multiple queries each asking for the sum of all elements inside a rectangle defined by its top-left (r1, c1) and bottom-right (r2, c2) corners. Use a 2D prefix sum array for O(1) per query.',
    constraints: ['1 <= rows, cols <= 200', '1 <= queries.length <= 10^4', '-10^4 <= matrix[i][j] <= 10^4', '0 <= r1 <= r2 < rows', '0 <= c1 <= c2 < cols'],
    examples: [
      { input: 'matrix = [[3,0,1,4],[5,6,3,2],[1,2,0,1],[4,1,0,1]], queries = [[2,1,4,3],[1,1,2,2]]', output: '[8, 11]', explanation: 'Rectangle (2,1)-(4,3): sum=8. Rectangle (1,1)-(2,2): 6+3+2+0=11.' },
      { input: 'matrix = [[1,2],[3,4]], queries = [[0,0,1,1],[0,0,0,0]]', output: '[10, 1]', explanation: 'Full matrix sum=10. Single cell (0,0)=1.' }
    ],
    testCases: [
      { input: '4 4\n3 0 1 4\n5 6 3 2\n1 2 0 1\n4 1 0 1\n2\n2 1 3 3\n0 0 1 1', expectedOutput: '4 14', hidden: false },
      { input: '2 2\n1 2\n3 4\n2\n0 0 1 1\n0 0 0 0', expectedOutput: '10 1', hidden: false },
      { input: '3 3\n1 2 3\n4 5 6\n7 8 9\n2\n0 0 2 2\n1 1 2 2', expectedOutput: '45 28', hidden: true },
      { input: '2 3\n1 2 3\n4 5 6\n2\n0 0 1 2\n0 1 1 2', expectedOutput: '21 16', hidden: true }
    ],
    starterCode: {
      python: 'def range_sum_2d(matrix, queries):\n    pass',
      java: 'public int[] rangeSum2D(int[][] matrix, int[][] queries) {\n    return new int[]{}\n}',
      c: 'int* rangeSum2D(int** matrix, int rows, int cols, int** queries, int queriesSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> rangeSum2D(vector<vector<int>>& matrix, vector<vector<int>>& queries) {\n    return {};\n}'
    }
  },

  {
    id: 'rsqm-m4', title: 'Range Sum with Frequency of Even Sums', difficulty: 'Medium',
    description: 'Given an array and multiple range queries [l, r], return the count of queries whose range sum is even.',
    constraints: ['1 <= nums.length <= 10^4', '1 <= queries.length <= 10^4', '0 <= l <= r < nums.length', '-10^5 <= nums[i] <= 10^5'],
    examples: [
      { input: 'nums = [1, 2, 3, 4, 5], queries = [[0,1],[0,2],[1,3],[0,4]]', output: '2', explanation: 'Sums: [0,1]=3 odd, [0,2]=6 even, [1,3]=9 odd, [0,4]=15 odd. Wait — [1,3]=2+3+4=9 odd. [0,2]=1+2+3=6 even. Count of even = 1. Recalc: [0,4]=1+2+3+4+5=15 odd. Even count = 1.' },
      { input: 'nums = [2, 4, 6, 8], queries = [[0,1],[0,3],[1,2],[2,3]]', output: '4', explanation: 'Sums: 6, 20, 10, 14. All even. Count = 4.' }
    ],
    testCases: [
      { input: '5\n1 2 3 4 5\n4\n0 1\n0 2\n1 3\n0 4', expectedOutput: '1', hidden: false },
      { input: '4\n2 4 6 8\n4\n0 1\n0 3\n1 2\n2 3', expectedOutput: '4', hidden: false },
      { input: '5\n1 3 5 7 9\n3\n0 1\n0 2\n0 3', expectedOutput: '1', hidden: true },
      { input: '4\n1 1 1 1\n3\n0 1\n0 2\n0 3', expectedOutput: '2', hidden: true }
    ],
    starterCode: {
      python: 'def count_even_sum_queries(nums, queries):\n    pass',
      java: 'public int countEvenSumQueries(int[] nums, int[][] queries) {\n    return 0;\n}',
      c: 'int countEvenSumQueries(int* nums, int numsSize, int** queries, int queriesSize) {\n    return 0;\n}',
      cpp: 'int countEvenSumQueries(vector<int>& nums, vector<vector<int>>& queries) {\n    return 0;\n}'
    }
  },

  {
    id: 'rsqm-m5', title: 'Maximum Range Sum After One Update', difficulty: 'Medium',
    description: 'Given an array and a list of possible point updates (each update sets nums[i] to a new value), find which single update maximizes the sum of a given fixed range [l, r]. Return the maximum possible range sum after applying exactly one update.',
    constraints: ['1 <= nums.length <= 10^4', '1 <= updates.length <= 10^4', '0 <= i < nums.length', '0 <= l <= r < nums.length', '-10^5 <= val <= 10^5'],
    examples: [
      { input: 'nums = [1, 3, 5, 7, 9], updates = [[2, 20], [4, 20]], l = 0, r = 4', output: '40', explanation: 'Original sum [0,4]=25. Update index 2 to 20: sum=1+3+20+7+9=40. Update index 4 to 20: sum=1+3+5+7+20=36. Max = 40.' },
      { input: 'nums = [2, 4, 6, 8], updates = [[0, 10], [3, 10]], l = 0, r = 3', output: '28', explanation: 'Original sum=20. Update index 0 to 10: 10+4+6+8=28. Update index 3 to 10: 2+4+6+10=22. Max = 28.' }
    ],
    testCases: [
      { input: '5\n1 3 5 7 9\n2\n2 20\n4 20\n0 4', expectedOutput: '40', hidden: false },
      { input: '4\n2 4 6 8\n2\n0 10\n3 10\n0 3', expectedOutput: '28', hidden: false },
      { input: '5\n1 2 3 4 5\n3\n0 100\n2 100\n4 100\n0 4', expectedOutput: '114', hidden: true },
      { input: '4\n5 5 5 5\n2\n1 1\n2 1\n0 3', expectedOutput: '16', hidden: true }
    ],
    starterCode: {
      python: 'def max_range_sum_after_update(nums, updates, l, r):\n    pass',
      java: 'public int maxRangeSumAfterUpdate(int[] nums, int[][] updates, int l, int r) {\n    return 0;\n}',
      c: 'int maxRangeSumAfterUpdate(int* nums, int numsSize, int** updates, int updatesSize, int l, int r) {\n    return 0;\n}',
      cpp: 'int maxRangeSumAfterUpdate(vector<int>& nums, vector<vector<int>>& updates, int l, int r) {\n    return 0;\n}'
    }
  },

  // --- HARD ---
  {
    id: 'rsqm-h1', title: 'Range Sum with Range Update Using BIT', difficulty: 'Hard',
    description: 'Given an array, implement a BIT that supports range updates and range sum queries. RANGE_UPDATE l r val adds val to all elements in [l, r]. QUERY l r returns the sum of elements in [l, r]. Use two BITs to handle range updates efficiently.',
    constraints: ['1 <= nums.length <= 10^5', '1 <= operations <= 10^5', '0 <= l <= r < nums.length', '-10^4 <= val <= 10^4', 'Implement using two BITs'],
    examples: [
      { input: 'nums = [1, 2, 3, 4, 5], ops = ["QUERY 0 4", "RANGE_UPDATE 1 3 2", "QUERY 0 4", "QUERY 1 3"]', output: '[15, 21, 15]', explanation: 'First query: 1+2+3+4+5=15. After adding 2 to indices 1-3: [1,4,5,6,5]. Second query: 1+4+5+6+5=21. Third query [1,3]: 4+5+6=15.' },
      { input: 'nums = [2, 4, 6, 8, 10], ops = ["RANGE_UPDATE 0 2 3", "QUERY 0 4", "RANGE_UPDATE 3 4 -2", "QUERY 0 4"]', output: '[39, 35]', explanation: 'After adding 3 to [0,2]: [5,7,9,8,10]. Sum=39. After subtracting 2 from [3,4]: [5,7,9,6,8]. Sum=35.' }
    ],
    testCases: [
      { input: '5\n1 2 3 4 5\n4\nQUERY 0 4\nRANGE_UPDATE 1 3 2\nQUERY 0 4\nQUERY 1 3', expectedOutput: '15 21 15', hidden: false },
      { input: '5\n2 4 6 8 10\n4\nRANGE_UPDATE 0 2 3\nQUERY 0 4\nRANGE_UPDATE 3 4 -2\nQUERY 0 4', expectedOutput: '39 35', hidden: false },
      { input: '6\n1 1 1 1 1 1\n4\nQUERY 0 5\nRANGE_UPDATE 0 5 4\nQUERY 0 5\nQUERY 2 4', expectedOutput: '6 30 15', hidden: true },
      { input: '4\n5 10 15 20\n4\nRANGE_UPDATE 1 3 5\nQUERY 0 3\nRANGE_UPDATE 0 1 -5\nQUERY 0 3', expectedOutput: '65 55', hidden: true }
    ],
    starterCode: {
      python: 'def process_operations(nums, operations):\n    # Implement using two BITs for range update range query\n    pass',
      java: 'public int[] processOperations(int[] nums, String[] operations) {\n    // Implement using two BITs for range update range query\n    return new int[]{}\n}',
      c: 'int* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> processOperations(vector<int>& nums, vector<string>& operations) {\n    // Implement using two BITs for range update range query\n    return {};\n}'
    }
  },

  {
    id: 'rsqm-h2', title: 'Range Sum Query on 2D Matrix with Updates', difficulty: 'Hard',
    description: 'Given a 2D matrix, implement a 2D BIT that supports two operations: UPDATE r c val to set matrix[r][c] to val, and QUERY r1 c1 r2 c2 to return the sum of all elements in the rectangle from (r1,c1) to (r2,c2). Process all operations in order.',
    constraints: ['1 <= rows, cols <= 500', '1 <= operations <= 10^4', '-10^4 <= val <= 10^4', 'Implement using a 2D BIT'],
    examples: [
      { input: 'matrix = [[3,0,1],[5,6,3],[1,2,0]], ops = ["QUERY 0 0 1 1", "UPDATE 0 0 10", "QUERY 0 0 1 1"]', output: '[14, 21]', explanation: 'First query: 3+0+5+6=14. After UPDATE (0,0) to 10: matrix[0][0]=10. Second query: 10+0+5+6=21.' },
      { input: 'matrix = [[1,2],[3,4]], ops = ["QUERY 0 0 1 1", "UPDATE 1 1 10", "QUERY 0 0 1 1"]', output: '[10, 16]', explanation: 'First query: 1+2+3+4=10. After UPDATE (1,1) to 10: second query: 1+2+3+10=16.' }
    ],
    testCases: [
      { input: '3 3\n3 0 1\n5 6 3\n1 2 0\n3\nQUERY 0 0 1 1\nUPDATE 0 0 10\nQUERY 0 0 1 1', expectedOutput: '14 21', hidden: false },
      { input: '2 2\n1 2\n3 4\n3\nQUERY 0 0 1 1\nUPDATE 1 1 10\nQUERY 0 0 1 1', expectedOutput: '10 16', hidden: false },
      { input: '3 3\n1 2 3\n4 5 6\n7 8 9\n3\nQUERY 0 0 2 2\nUPDATE 1 1 0\nQUERY 0 0 2 2', expectedOutput: '45 40', hidden: true },
      { input: '2 3\n1 2 3\n4 5 6\n3\nQUERY 0 0 1 2\nUPDATE 0 2 10\nQUERY 0 0 1 2', expectedOutput: '21 28', hidden: true }
    ],
    starterCode: {
      python: 'def process_operations(matrix, operations):\n    # Implement using a 2D BIT\n    pass',
      java: 'public int[] processOperations(int[][] matrix, String[] operations) {\n    // Implement using a 2D BIT\n    return new int[]{}\n}',
      c: 'int* processOperations(int** matrix, int rows, int cols, char** operations, int opsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> processOperations(vector<vector<int>>& matrix, vector<string>& operations) {\n    // Implement using a 2D BIT\n    return {};\n}'
    }
  },

  {
    id: 'rsqm-h3', title: 'Count Inversions Using BIT', difficulty: 'Hard',
    description: 'Given an array of integers, count the number of inversions. An inversion is a pair (i, j) where i < j and nums[i] > nums[j]. Use a BIT with coordinate compression to count inversions in O(n log n).',
    constraints: ['1 <= nums.length <= 10^5', '-10^9 <= nums[i] <= 10^9', 'All elements are distinct'],
    examples: [
      { input: 'nums = [3, 1, 2]', output: '2', explanation: 'Inversions: (3,1) and (3,2). Count = 2.' },
      { input: 'nums = [5, 4, 3, 2, 1]', output: '10', explanation: 'Every pair is an inversion. C(5,2) = 10.' }
    ],
    testCases: [
      { input: '3\n3 1 2', expectedOutput: '2', hidden: false },
      { input: '5\n5 4 3 2 1', expectedOutput: '10', hidden: false },
      { input: '5\n1 2 3 4 5', expectedOutput: '0', hidden: true },
      { input: '6\n6 5 4 3 2 1', expectedOutput: '15', hidden: true }
    ],
    starterCode: {
      python: 'def count_inversions(nums):\n    # Use BIT with coordinate compression\n    pass',
      java: 'public long countInversions(int[] nums) {\n    // Use BIT with coordinate compression\n    return 0;\n}',
      c: 'long long countInversions(int* nums, int numsSize) {\n    return 0;\n}',
      cpp: 'long long countInversions(vector<int>& nums) {\n    // Use BIT with coordinate compression\n    return 0;\n}'
    }
  },

  {
    id: 'rsqm-h4', title: 'Longest Subarray with Sum Divisible by K', difficulty: 'Hard',
    description: 'Given an array of integers and an integer k, find the length of the longest contiguous subarray whose sum is divisible by k. Use prefix sums and a hash map to solve in O(n).',
    constraints: ['1 <= nums.length <= 10^5', '1 <= k <= 10^5', '-10^4 <= nums[i] <= 10^4'],
    examples: [
      { input: 'nums = [2, 7, 6, 1, 4, 5], k = 3', output: '4', explanation: 'Subarray [7,6,1,4] has sum 18 which is divisible by 3. Length = 4.' },
      { input: 'nums = [1, 2, 3, 4, 5], k = 5', output: '5', explanation: 'Full array sum = 15, divisible by 5. Length = 5.' }
    ],
    testCases: [
      { input: '6\n2 7 6 1 4 5\n3', expectedOutput: '4', hidden: false },
      { input: '5\n1 2 3 4 5\n5', expectedOutput: '5', hidden: false },
      { input: '6\n4 5 0 -2 -3 1\n5', expectedOutput: '7', hidden: true },
      { input: '5\n5 0 0 0 5\n5', expectedOutput: '5', hidden: true }
    ],
    starterCode: {
      python: 'def longest_subarray_div_k(nums, k):\n    pass',
      java: 'public int longestSubarrayDivK(int[] nums, int k) {\n    return 0;\n}',
      c: 'int longestSubarrayDivK(int* nums, int numsSize, int k) {\n    return 0;\n}',
      cpp: 'int longestSubarrayDivK(vector<int>& nums, int k) {\n    return 0;\n}'
    }
  },

  {
    id: 'rsqm-h5', title: 'Range Sum with Dynamic Array Insertions', difficulty: 'Hard',
    description: 'Given an initial array, process a sequence of operations: INSERT pos val inserts val at position pos shifting elements right, and QUERY l r returns the sum of elements in [l, r] after all previous insertions. Use an order-statistic BIT or a balanced BST approach to handle dynamic insertions efficiently.',
    constraints: ['1 <= initial array length <= 10^4', '1 <= operations <= 10^4', '0 <= pos <= current array length', '0 <= l <= r < current array length', '-10^5 <= val <= 10^5'],
    examples: [
      { input: 'nums = [1, 2, 3, 4, 5], ops = ["QUERY 0 4", "INSERT 2 10", "QUERY 0 5", "QUERY 2 3"]', output: '[15, 25, 13]', explanation: 'First query: 1+2+3+4+5=15. After INSERT 10 at pos 2: [1,2,10,3,4,5]. Second query [0,5]: 1+2+10+3+4+5=25. Third query [2,3]: 10+3=13.' },
      { input: 'nums = [5, 10, 15], ops = ["INSERT 0 1", "QUERY 0 3", "INSERT 2 7", "QUERY 0 4"]', output: '[31, 38]', explanation: 'After INSERT 1 at pos 0: [1,5,10,15]. Query [0,3]=31. After INSERT 7 at pos 2: [1,5,7,10,15]. Query [0,4]=38.' }
    ],
    testCases: [
      { input: '5\n1 2 3 4 5\n4\nQUERY 0 4\nINSERT 2 10\nQUERY 0 5\nQUERY 2 3', expectedOutput: '15 25 13', hidden: false },
      { input: '3\n5 10 15\n4\nINSERT 0 1\nQUERY 0 3\nINSERT 2 7\nQUERY 0 4', expectedOutput: '31 38', hidden: false },
      { input: '4\n1 2 3 4\n4\nINSERT 4 5\nQUERY 0 4\nINSERT 0 0\nQUERY 0 5', expectedOutput: '15 15', hidden: true },
      { input: '3\n10 20 30\n3\nQUERY 0 2\nINSERT 1 5\nQUERY 0 3', expectedOutput: '60 65', hidden: true }
    ],
    starterCode: {
      python: 'def process_operations(nums, operations):\n    # Handle dynamic insertions with efficient range sum queries\n    pass',
      java: 'public int[] processOperations(int[] nums, String[] operations) {\n    // Handle dynamic insertions with efficient range sum queries\n    return new int[]{}\n}',
      c: 'int* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> processOperations(vector<int>& nums, vector<string>& operations) {\n    // Handle dynamic insertions with efficient range sum queries\n    return {};\n}'
    }
  },
];
