export const RMQproblems = [
  // --- EASY ---
  {
    id: 'rmq-e1', title: 'Minimum of Entire Array', difficulty: 'Easy',
    description: 'Given an array of integers, return the minimum element across the entire array. This is equivalent to a single RMQ over the full range [0, n-1].',
    constraints: ['1 <= nums.length <= 1000', '-10^4 <= nums[i] <= 10^4'],
    examples: [
      { input: 'nums = [2, 4, 3, 1, 6, 7]', output: '1', explanation: 'The minimum element across the entire array is 1.' },
      { input: 'nums = [5, 3, 8, 2, 9]', output: '2', explanation: 'The minimum element across the entire array is 2.' }
    ],
    testCases: [
      { input: '6\n2 4 3 1 6 7', expectedOutput: '1', hidden: false },
      { input: '5\n5 3 8 2 9', expectedOutput: '2', hidden: false },
      { input: '1\n42', expectedOutput: '42', hidden: true },
      { input: '5\n-3 -1 -4 -1 -5', expectedOutput: '-5', hidden: true }
    ],
    starterCode: {
      python: 'def range_min_query(nums, l, r):\n    pass',
      java: 'public int rangeMinQuery(int[] nums, int l, int r) {\n    return 0;\n}',
      c: 'int rangeMinQuery(int* nums, int numsSize, int l, int r) {\n    return 0;\n}',
      cpp: 'int rangeMinQuery(vector<int>& nums, int l, int r) {\n    return 0;\n}'
    }
  },

  {
    id: 'rmq-e2', title: 'Single Range Minimum Query', difficulty: 'Easy',
    description: 'Given an array of integers and a single query [l, r], return the minimum element in the subarray from index l to index r inclusive using a brute force linear scan.',
    constraints: ['1 <= nums.length <= 1000', '0 <= l <= r < nums.length', '-10^4 <= nums[i] <= 10^4'],
    examples: [
      { input: 'nums = [2, 4, 3, 1, 6, 7, 8], l = 1, r = 5', output: '1', explanation: 'Subarray [4,3,1,6,7]. The minimum is 1.' },
      { input: 'nums = [5, 3, 8, 2, 9], l = 0, r = 2', output: '3', explanation: 'Subarray [5,3,8]. The minimum is 3.' }
    ],
    testCases: [
      { input: '7\n2 4 3 1 6 7 8\n1 5', expectedOutput: '1', hidden: false },
      { input: '5\n5 3 8 2 9\n0 2', expectedOutput: '3', hidden: false },
      { input: '5\n10 20 5 30 15\n2 4', expectedOutput: '5', hidden: true },
      { input: '4\n-2 -5 -1 -3\n0 3', expectedOutput: '-5', hidden: true }
    ],
    starterCode: {
      python: 'def range_min_query(nums, l, r):\n    pass',
      java: 'public int rangeMinQuery(int[] nums, int l, int r) {\n    return 0;\n}',
      c: 'int rangeMinQuery(int* nums, int numsSize, int l, int r) {\n    return 0;\n}',
      cpp: 'int rangeMinQuery(vector<int>& nums, int l, int r) {\n    return 0;\n}'
    }
  },

  {
    id: 'rmq-e3', title: 'Multiple Range Minimum Queries (Brute Force)', difficulty: 'Easy',
    description: 'Given an array and multiple queries each of the form [l, r], answer each query by returning the minimum element in the subarray from index l to r. Use a brute force approach for each query.',
    constraints: ['1 <= nums.length <= 500', '1 <= queries.length <= 100', '0 <= l <= r < nums.length', '-10^4 <= nums[i] <= 10^4'],
    examples: [
      { input: 'nums = [2, 4, 3, 1, 6], queries = [[0,2],[1,4],[2,3]]', output: '[2, 1, 1]', explanation: 'Min of [2,4,3]=2, min of [4,3,1,6]=1, min of [3,1]=1.' },
      { input: 'nums = [5, 1, 8, 3, 7], queries = [[0,4],[0,1],[3,4]]', output: '[1, 1, 3]', explanation: 'Min of full array=1, min of [5,1]=1, min of [3,7]=3.' }
    ],
    testCases: [
      { input: '5\n2 4 3 1 6\n3\n0 2\n1 4\n2 3', expectedOutput: '2 1 1', hidden: false },
      { input: '5\n5 1 8 3 7\n3\n0 4\n0 1\n3 4', expectedOutput: '1 1 3', hidden: false },
      { input: '6\n10 3 7 2 8 5\n2\n0 5\n2 4', expectedOutput: '2 2', hidden: true },
      { input: '4\n-1 -3 -2 -4\n2\n0 2\n1 3', expectedOutput: '-3 -4', hidden: true }
    ],
    starterCode: {
      python: 'def range_min_queries(nums, queries):\n    pass',
      java: 'public int[] rangeMinQueries(int[] nums, int[][] queries) {\n    return new int[]{};\n}',
      c: 'int* rangeMinQueries(int* nums, int numsSize, int** queries, int queriesSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> rangeMinQueries(vector<int>& nums, vector<vector<int>>& queries) {\n    return {};\n}'
    }
  },

  {
    id: 'rmq-e4', title: 'Build a Segment Tree for RMQ', difficulty: 'Easy',
    description: 'Given an array of integers, build a segment tree that supports range minimum queries. After building the tree, answer a single query [l, r] by traversing the segment tree.',
    constraints: ['1 <= nums.length <= 10^4', '0 <= l <= r < nums.length', '-10^5 <= nums[i] <= 10^5'],
    examples: [
      { input: 'nums = [2, 4, 3, 1, 6, 7, 8, 9], l = 1, r = 5', output: '1', explanation: 'Segment tree built on the array. Query [1,5] returns min of [4,3,1,6,7] = 1.' },
      { input: 'nums = [9, 3, 7, 1, 8, 12, 10, 20], l = 0, r = 3', output: '1', explanation: 'Query [0,3] returns min of [9,3,7,1] = 1.' }
    ],
    testCases: [
      { input: '8\n2 4 3 1 6 7 8 9\n1 5', expectedOutput: '1', hidden: false },
      { input: '8\n9 3 7 1 8 12 10 20\n0 3', expectedOutput: '1', hidden: false },
      { input: '6\n5 10 2 8 3 7\n2 5', expectedOutput: '2', hidden: true },
      { input: '5\n100 50 75 25 90\n0 4', expectedOutput: '25', hidden: true }
    ],
    starterCode: {
      python: 'def range_min_query(nums, l, r):\n    # Build a segment tree then query\n    pass',
      java: 'public int rangeMinQuery(int[] nums, int l, int r) {\n    // Build a segment tree then query\n    return 0;\n}',
      c: 'int rangeMinQuery(int* nums, int numsSize, int l, int r) {\n    return 0;\n}',
      cpp: 'int rangeMinQuery(vector<int>& nums, int l, int r) {\n    // Build a segment tree then query\n    return 0;\n}'
    }
  },

  {
    id: 'rmq-e5', title: 'Point Update and Range Minimum Query', difficulty: 'Easy',
    description: 'Given an array, build a segment tree that supports two operations: UPDATE i val to change the element at index i to val, and QUERY l r to return the minimum in range [l, r]. Process all operations in order and return results for all QUERY operations.',
    constraints: ['1 <= nums.length <= 10^4', '1 <= operations <= 500', '0 <= i < nums.length', '0 <= l <= r < nums.length', '-10^5 <= val <= 10^5'],
    examples: [
      { input: 'nums = [2, 4, 3, 1, 6], ops = ["QUERY 0 4", "UPDATE 3 10", "QUERY 0 4"]', output: '[1, 2]', explanation: 'First query: min of full array = 1. After updating index 3 to 10: [2,4,3,10,6]. Second query: min = 2.' },
      { input: 'nums = [5, 3, 8, 2, 7], ops = ["QUERY 1 3", "UPDATE 1 0", "QUERY 1 3"]', output: '[2, 0]', explanation: 'First query: min of [3,8,2] = 2. After updating index 1 to 0: min of [0,8,2] = 0.' }
    ],
    testCases: [
      { input: '5\n2 4 3 1 6\n3\nQUERY 0 4\nUPDATE 3 10\nQUERY 0 4', expectedOutput: '1 2', hidden: false },
      { input: '5\n5 3 8 2 7\n3\nQUERY 1 3\nUPDATE 1 0\nQUERY 1 3', expectedOutput: '2 0', hidden: false },
      { input: '6\n10 3 7 2 8 5\n4\nQUERY 0 5\nUPDATE 3 15\nUPDATE 1 1\nQUERY 0 5', expectedOutput: '2 1', hidden: true },
      { input: '4\n4 3 2 1\n3\nQUERY 0 3\nUPDATE 3 5\nQUERY 0 3', expectedOutput: '1 2', hidden: true }
    ],
    starterCode: {
      python: 'def process_operations(nums, operations):\n    # Build a segment tree supporting point update and range min query\n    pass',
      java: 'public int[] processOperations(int[] nums, String[] operations) {\n    // Build a segment tree supporting point update and range min query\n    return new int[]{};\n}',
      c: 'int* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> processOperations(vector<int>& nums, vector<string>& operations) {\n    // Build a segment tree supporting point update and range min query\n    return {};\n}'
    }
  },

  // --- HARD ---
  {
    id: 'rmq-h1', title: 'RMQ with Range Assignment Updates', difficulty: 'Hard',
    description: 'Given an array, support two operations using a lazy propagation segment tree: ASSIGN l r val (set all elements in [l, r] to val) and QUERY l r (return the minimum in [l, r]). Process all operations and return results for QUERY operations.',
    constraints: ['1 <= nums.length <= 10^5', '1 <= operations <= 10^5', '0 <= l <= r < nums.length', '-10^9 <= val <= 10^9'],
    examples: [
      { input: 'nums = [3, 1, 4, 1, 5, 9], ops = ["QUERY 0 5", "ASSIGN 1 3 7", "QUERY 0 5", "ASSIGN 0 5 2", "QUERY 2 4"]', output: '[1, 3, 2]', explanation: 'Initial min [0,5]=1. After ASSIGN 1-3 to 7: [3,7,7,7,5,9], min [0,5]=3. After ASSIGN all to 2: [2,2,2,2,2,2], min [2,4]=2.' },
      { input: 'nums = [5, 3, 8, 2, 7], ops = ["ASSIGN 0 2 10", "QUERY 0 4", "ASSIGN 3 4 1", "QUERY 0 4"]', output: '[2, 1]', explanation: 'After ASSIGN 0-2 to 10: [10,10,10,2,7], min=2. After ASSIGN 3-4 to 1: [10,10,10,1,1], min=1.' }
    ],
    testCases: [
      { input: '6\n3 1 4 1 5 9\n5\nQUERY 0 5\nASSIGN 1 3 7\nQUERY 0 5\nASSIGN 0 5 2\nQUERY 2 4', expectedOutput: '1 3 2', hidden: false },
      { input: '5\n5 3 8 2 7\n4\nASSIGN 0 2 10\nQUERY 0 4\nASSIGN 3 4 1\nQUERY 0 4', expectedOutput: '2 1', hidden: false },
      { input: '7\n6 2 9 4 1 8 3\n5\nQUERY 2 6\nASSIGN 0 3 5\nQUERY 0 6\nASSIGN 4 6 0\nQUERY 0 6', expectedOutput: '1 1 0', hidden: true },
      { input: '5\n10 20 30 40 50\n4\nASSIGN 0 4 15\nQUERY 0 4\nASSIGN 2 4 5\nQUERY 0 4', expectedOutput: '15 5', hidden: true }
    ],
    starterCode: {
      python: 'def process_operations(nums, operations):\n    # Use lazy propagation segment tree for range assign + range min query\n    pass',
      java: 'public int[] processOperations(int[] nums, String[] operations) {\n    // Use lazy propagation segment tree for range assign + range min query\n    return new int[]{};\n}',
      c: 'int* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> processOperations(vector<int>& nums, vector<string>& operations) {\n    // Use lazy propagation segment tree for range assign + range min query\n    return {};\n}'
    }
  },

  {
    id: 'rmq-h2', title: 'Minimum Range Covering All Distinct Values', difficulty: 'Hard',
    description: 'Given an array, find the shortest subarray [l, r] such that the minimum of that subarray is the global minimum AND the subarray contains all distinct values present in the entire array. Use RMQ to efficiently locate the global minimum and validate subarrays.',
    constraints: ['1 <= nums.length <= 10^5', '1 <= nums[i] <= 10^5', 'All values are positive integers'],
    examples: [
      { input: 'nums = [3, 1, 4, 2, 3, 1, 2]', output: '4', explanation: 'Distinct values: {1,2,3,4}. Shortest subarray containing all 4 distinct values with min=1 is [1,4,2,3] (indices 1-4), length=4.' },
      { input: 'nums = [2, 1, 2, 1]', output: '2', explanation: 'Distinct values: {1,2}. Shortest subarray with all distinct values and min=1 is [1,2] or [2,1], length=2.' }
    ],
    testCases: [
      { input: '7\n3 1 4 2 3 1 2', expectedOutput: '4', hidden: false },
      { input: '4\n2 1 2 1', expectedOutput: '2', hidden: false },
      { input: '6\n5 3 1 4 2 3', expectedOutput: '5', hidden: true },
      { input: '5\n1 2 3 4 5', expectedOutput: '5', hidden: true }
    ],
    starterCode: {
      python: 'def min_range_all_distinct(nums):\n    # Use RMQ + sliding window to find shortest subarray with all distinct values and global min\n    pass',
      java: 'public int minRangeAllDistinct(int[] nums) {\n    return 0;\n}',
      c: 'int minRangeAllDistinct(int* nums, int numsSize) {\n    return 0;\n}',
      cpp: 'int minRangeAllDistinct(vector<int>& nums) {\n    return 0;\n}'
    }
  },

  {
    id: 'rmq-h3', title: 'Cartesian Tree Construction from Array', difficulty: 'Hard',
    description: 'Given an array, build its Cartesian Tree where each node stores an array value, the root is the minimum element, and the left/right subtrees are Cartesian trees of the left/right subarrays. Return the inorder traversal of the resulting tree. RMQ is used to find the minimum in each subrange during construction.',
    constraints: ['1 <= nums.length <= 10^4', 'All elements are distinct', '-10^5 <= nums[i] <= 10^5'],
    examples: [
      { input: 'nums = [3, 2, 6, 1, 9]', output: '[3, 2, 6, 1, 9]', explanation: 'Root=1 (index 3). Left subtree of [3,2,6]: root=2, left=[3], right=[6]. Right subtree of [9]: root=9. Inorder = [3,2,6,1,9] (same as original for Cartesian tree).' },
      { input: 'nums = [5, 10, 40, 30, 28]', output: '[5, 10, 40, 30, 28]', explanation: 'Inorder traversal of a Cartesian tree always equals the original array.' }
    ],
    testCases: [
      { input: '5\n3 2 6 1 9', expectedOutput: '3 2 6 1 9', hidden: false },
      { input: '5\n5 10 40 30 28', expectedOutput: '5 10 40 30 28', hidden: false },
      { input: '6\n4 2 7 1 8 3', expectedOutput: '4 2 7 1 8 3', hidden: true },
      { input: '4\n9 3 7 1', expectedOutput: '9 3 7 1', hidden: true }
    ],
    starterCode: {
      python: 'def cartesian_tree_inorder(nums):\n    # Use RMQ to find min in each subrange and build Cartesian tree recursively\n    pass',
      java: 'public int[] cartesianTreeInorder(int[] nums) {\n    return new int[]{};\n}',
      c: 'int* cartesianTreeInorder(int* nums, int numsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> cartesianTreeInorder(vector<int>& nums) {\n    return {};\n}'
    }
  },

  {
    id: 'rmq-h4', title: 'LCA Using RMQ on Euler Tour', difficulty: 'Hard',
    description: 'Given a rooted tree with n nodes (1-indexed, root = 1) represented as an edge list, find the Lowest Common Ancestor (LCA) of multiple node pairs using the Euler Tour + RMQ technique. For each query (u, v), return the LCA node.',
    constraints: ['2 <= n <= 10^5', '1 <= queries.length <= 10^5', '1 <= u, v <= n', 'Tree is connected and acyclic'],
    examples: [
      { input: 'n=7, edges=[[1,2],[1,3],[2,4],[2,5],[3,6],[3,7]], queries=[[4,5],[4,6],[3,4]]', output: '[2, 1, 1]', explanation: 'LCA(4,5)=2 (both children of 2). LCA(4,6)=1 (4 under node 2, 6 under node 3, both under root 1). LCA(3,4)=1.' },
      { input: 'n=5, edges=[[1,2],[1,3],[2,4],[2,5]], queries=[[4,5],[3,4],[1,5]]', output: '[2, 1, 1]', explanation: 'LCA(4,5)=2. LCA(3,4)=1. LCA(1,5)=1.' }
    ],
    testCases: [
      { input: '7\n1 2\n1 3\n2 4\n2 5\n3 6\n3 7\n3\n4 5\n4 6\n3 4', expectedOutput: '2 1 1', hidden: false },
      { input: '5\n1 2\n1 3\n2 4\n2 5\n3\n4 5\n3 4\n1 5', expectedOutput: '2 1 1', hidden: false },
      { input: '6\n1 2\n1 3\n2 4\n3 5\n3 6\n3\n4 5\n5 6\n2 6', expectedOutput: '1 3 1', hidden: true },
      { input: '4\n1 2\n2 3\n3 4\n2\n1 4\n2 4', expectedOutput: '1 2', hidden: true }
    ],
    starterCode: {
      python: 'def lca_queries(n, edges, queries):\n    # Build tree, run Euler tour, build sparse table on depths, answer LCA queries\n    pass',
      java: 'public int[] lcaQueries(int n, int[][] edges, int[][] queries) {\n    return new int[]{};\n}',
      c: 'int* lcaQueries(int n, int** edges, int edgesSize, int** queries, int queriesSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> lcaQueries(int n, vector<vector<int>>& edges, vector<vector<int>>& queries) {\n    return {};\n}'
    }
  },

  {
    id: 'rmq-h5', title: 'Maximum Sum Subarray with Bounded Minimum', difficulty: 'Hard',
    description: 'Given an array nums and integers lo and hi, find the maximum sum of any subarray [l, r] such that the minimum value in that subarray is between lo and hi (inclusive). Use a segment tree for RMQ combined with prefix sums for efficient computation.',
    constraints: ['1 <= nums.length <= 10^5', '-10^5 <= nums[i] <= 10^5', '-10^5 <= lo <= hi <= 10^5', 'Return -1000000000000000000 if no valid subarray exists'],
    examples: [
      { input: 'nums = [2, 1, 4, 3, 5], lo = 1, hi = 2', output: '15', explanation: 'Subarray [2,1,4,3,5] has min=1 which is in [1,2]. Sum=15. This is the maximum valid sum.' },
      { input: 'nums = [3, 5, 2, 8, 1, 6], lo = 2, hi = 3', output: '18', explanation: 'Subarray [3,5,2,8] has min=2 in [2,3], sum=18. No larger valid sum exists.' }
    ],
    testCases: [
      { input: '5\n2 1 4 3 5\n1 2', expectedOutput: '15', hidden: false },
      { input: '6\n3 5 2 8 1 6\n2 3', expectedOutput: '18', hidden: false },
      { input: '5\n10 20 5 30 15\n5 10', expectedOutput: '80', hidden: true },
      { input: '4\n1 2 3 4\n5 10', expectedOutput: '-1000000000000000000', hidden: true }
    ],
    starterCode: {
      python: 'def max_sum_bounded_min(nums, lo, hi):\n    # Use segment tree for RMQ + prefix sums to find max sum subarray with min in [lo, hi]\n    pass',
      java: 'public long maxSumBoundedMin(int[] nums, int lo, int hi) {\n    return 0;\n}',
      c: 'long long maxSumBoundedMin(int* nums, int numsSize, int lo, int hi) {\n    return 0;\n}',
      cpp: 'long long maxSumBoundedMin(vector<int>& nums, int lo, int hi) {\n    return 0;\n}'
    }
  },

  // --- MEDIUM ---
  {
    id: 'rmq-m1', title: 'Range Minimum Query Using Sparse Table', difficulty: 'Medium',
    description: 'Given an array of integers, build a Sparse Table for O(1) range minimum queries after O(n log n) preprocessing. Answer multiple queries each of the form [l, r].',
    constraints: ['1 <= nums.length <= 10^5', '1 <= queries.length <= 10^5', '0 <= l <= r < nums.length', '-10^5 <= nums[i] <= 10^5'],
    examples: [
      { input: 'nums = [2, 4, 3, 1, 6, 7, 8, 9], queries = [[0,3],[1,5],[2,7]]', output: '[1, 1, 1]', explanation: 'Sparse table built. Min of [2,4,3,1]=1, min of [4,3,1,6,7]=1, min of [3,1,6,7,8,9]=1.' },
      { input: 'nums = [5, 3, 8, 2, 9, 1, 7], queries = [[0,2],[3,6],[1,4]]', output: '[3, 1, 2]', explanation: 'Min of [5,3,8]=3, min of [2,9,1,7]=1, min of [3,8,2,9]=2.' }
    ],
    testCases: [
      { input: '8\n2 4 3 1 6 7 8 9\n3\n0 3\n1 5\n2 7', expectedOutput: '1 1 1', hidden: false },
      { input: '7\n5 3 8 2 9 1 7\n3\n0 2\n3 6\n1 4', expectedOutput: '3 1 2', hidden: false },
      { input: '6\n10 3 7 2 8 5\n3\n0 5\n1 3\n2 4', expectedOutput: '2 2 2', hidden: true },
      { input: '5\n-1 -3 -2 -5 -4\n2\n0 4\n1 3', expectedOutput: '-5 -5', hidden: true }
    ],
    starterCode: {
      python: 'def range_min_queries(nums, queries):\n    # Build a Sparse Table\n    pass',
      java: 'public int[] rangeMinQueries(int[] nums, int[][] queries) {\n    // Build a Sparse Table\n    return new int[]{}\n}',
      c: 'int* rangeMinQueries(int* nums, int numsSize, int** queries, int queriesSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> rangeMinQueries(vector<int>& nums, vector<vector<int>>& queries) {\n    // Build a Sparse Table\n    return {};\n}'
    }
  },

  {
    id: 'rmq-m2', title: 'Minimum Subarray Length with Value at Most K', difficulty: 'Medium',
    description: 'Given an array and an integer k, find the length of the shortest contiguous subarray whose minimum value is at most k. Use a segment tree or sparse table to answer range minimum queries efficiently.',
    constraints: ['1 <= nums.length <= 10^5', '-10^5 <= nums[i] <= 10^5', '-10^5 <= k <= 10^5'],
    examples: [
      { input: 'nums = [3, 5, 2, 8, 1, 6], k = 2', output: '1', explanation: 'The subarray [2] at index 2 has minimum 2 <= k. Length = 1.' },
      { input: 'nums = [5, 8, 6, 9, 7], k = 4', output: '-1', explanation: 'No subarray has a minimum value <= 4. Return -1.' }
    ],
    testCases: [
      { input: '6\n3 5 2 8 1 6\n2', expectedOutput: '1', hidden: false },
      { input: '5\n5 8 6 9 7\n4', expectedOutput: '-1', hidden: false },
      { input: '6\n4 7 3 9 2 5\n3', expectedOutput: '1', hidden: true },
      { input: '5\n10 20 30 40 50\n25', expectedOutput: '2', hidden: true }
    ],
    starterCode: {
      python: 'def min_subarray_length(nums, k):\n    pass',
      java: 'public int minSubarrayLength(int[] nums, int k) {\n    return 0;\n}',
      c: 'int minSubarrayLength(int* nums, int numsSize, int k) {\n    return 0;\n}',
      cpp: 'int minSubarrayLength(vector<int>& nums, int k) {\n    return 0;\n}'
    }
  },

  {
    id: 'rmq-m3', title: 'Count Queries Where Minimum Equals Left Endpoint', difficulty: 'Medium',
    description: 'Given an array and multiple queries [l, r], count how many queries have their minimum value equal to nums[l] (the leftmost element of the range).',
    constraints: ['1 <= nums.length <= 10^4', '1 <= queries.length <= 10^4', '0 <= l <= r < nums.length', 'Use a segment tree for efficient querying'],
    examples: [
      { input: 'nums = [1, 3, 2, 5, 4], queries = [[0,2],[0,4],[1,3]]', output: '2', explanation: 'Query [0,2]: min=1=nums[0] ✓. Query [0,4]: min=1=nums[0] ✓. Query [1,3]: min=2≠nums[1]=3 ✗. Count = 2.' },
      { input: 'nums = [4, 1, 3, 2], queries = [[0,1],[0,3],[2,3]]', output: '0', explanation: 'Query [0,1]: min=1≠nums[0]=4. Query [0,3]: min=1≠4. Query [2,3]: min=2=nums[2]=3? No. Count = 0.' }
    ],
    testCases: [
      { input: '5\n1 3 2 5 4\n3\n0 2\n0 4\n1 3', expectedOutput: '2', hidden: false },
      { input: '4\n4 1 3 2\n3\n0 1\n0 3\n2 3', expectedOutput: '0', hidden: false },
      { input: '5\n2 5 3 1 4\n3\n0 2\n0 4\n0 1', expectedOutput: '2', hidden: true },
      { input: '4\n3 3 3 3\n2\n0 3\n1 2', expectedOutput: '2', hidden: true }
    ],
    starterCode: {
      python: 'def count_left_min_queries(nums, queries):\n    pass',
      java: 'public int countLeftMinQueries(int[] nums, int[][] queries) {\n    return 0;\n}',
      c: 'int countLeftMinQueries(int* nums, int numsSize, int** queries, int queriesSize) {\n    return 0;\n}',
      cpp: 'int countLeftMinQueries(vector<int>& nums, vector<vector<int>>& queries) {\n    return 0;\n}'
    }
  },

  {
    id: 'rmq-m4', title: 'Range Minimum with Frequency Count', difficulty: 'Medium',
    description: 'Given an array and multiple queries [l, r], for each query return both the minimum value in the range and how many times that minimum value appears within the range [l, r].',
    constraints: ['1 <= nums.length <= 10^4', '1 <= queries.length <= 10^4', '0 <= l <= r < nums.length', '-10^5 <= nums[i] <= 10^5'],
    examples: [
      { input: 'nums = [2, 1, 3, 1, 5], queries = [[0,4],[1,3]]', output: '[[1,2],[1,2]]', explanation: 'Range [0,4]: min=1 appears 2 times. Range [1,3]: min=1 appears 2 times.' },
      { input: 'nums = [3, 3, 3, 3], queries = [[0,3],[1,2]]', output: '[[3,4],[3,2]]', explanation: 'Range [0,3]: min=3 appears 4 times. Range [1,2]: min=3 appears 2 times.' }
    ],
    testCases: [
      { input: '5\n2 1 3 1 5\n2\n0 4\n1 3', expectedOutput: '1 2\n1 2', hidden: false },
      { input: '4\n3 3 3 3\n2\n0 3\n1 2', expectedOutput: '3 4\n3 2', hidden: false },
      { input: '6\n5 2 8 2 3 2\n2\n0 5\n1 4', expectedOutput: '2 3\n2 2', hidden: true },
      { input: '5\n1 2 1 2 1\n2\n0 4\n0 2', expectedOutput: '1 3\n1 2', hidden: true }
    ],
    starterCode: {
      python: 'def range_min_with_count(nums, queries):\n    pass',
      java: 'public int[][] rangeMinWithCount(int[] nums, int[][] queries) {\n    return new int[][]{}\n}',
      c: 'int** rangeMinWithCount(int* nums, int numsSize, int** queries, int queriesSize, int* returnSize, int** returnColumnSizes) {\n    return NULL;\n}',
      cpp: 'vector<vector<int>> rangeMinWithCount(vector<int>& nums, vector<vector<int>>& queries) {\n    return {};\n}'
    }
  },

  {
    id: 'rmq-m5', title: 'Sliding Window Minimum', difficulty: 'Medium',
    description: 'Given an array and a window size w, return an array of the minimum values of each contiguous subarray of size w. This is equivalent to answering n-w+1 consecutive RMQ queries of fixed length w.',
    constraints: ['1 <= nums.length <= 10^5', '1 <= w <= nums.length', '-10^5 <= nums[i] <= 10^5'],
    examples: [
      { input: 'nums = [2, 1, 5, 3, 6, 4, 8, 7], w = 3', output: '[1, 1, 3, 3, 4, 4]', explanation: 'Windows: [2,1,5]→1, [1,5,3]→1, [5,3,6]→3, [3,6,4]→3, [6,4,8]→4, [4,8,7]→4.' },
      { input: 'nums = [4, 3, 2, 1, 5], w = 2', output: '[3, 2, 1, 1]', explanation: 'Windows: [4,3]→3, [3,2]→2, [2,1]→1, [1,5]→1.' }
    ],
    testCases: [
      { input: '8\n2 1 5 3 6 4 8 7\n3', expectedOutput: '1 1 3 3 4 4', hidden: false },
      { input: '5\n4 3 2 1 5\n2', expectedOutput: '3 2 1 1', hidden: false },
      { input: '6\n10 3 7 2 8 5\n3', expectedOutput: '3 2 2 2', hidden: true },
      { input: '5\n1 1 1 1 1\n3', expectedOutput: '1 1 1', hidden: true }
    ],
    starterCode: {
      python: 'def sliding_window_minimum(nums, w):\n    pass',
      java: 'public int[] slidingWindowMinimum(int[] nums, int w) {\n    return new int[]{}\n}',
      c: 'int* slidingWindowMinimum(int* nums, int numsSize, int w, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> slidingWindowMinimum(vector<int>& nums, int w) {\n    return {};\n}'
    }
  },
];


