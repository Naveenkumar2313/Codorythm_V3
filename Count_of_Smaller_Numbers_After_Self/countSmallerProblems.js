export const countSmallerProblems = [
  // --- EASY ---
  {
    id: 'csnas-e1', title: 'Single Element Array', difficulty: 'Easy',
    description: 'Given an array with a single element, return [0] since there are no elements to the right.',
    constraints: ['nums.length == 1', '-10^4 <= nums[i] <= 10^4'],
    examples: [
      { input: 'nums = [5]', output: '[0]', explanation: 'No elements to the right of 5, so count is 0.' },
      { input: 'nums = [-3]', output: '[0]', explanation: 'Single element always returns [0].' }
    ],
    testCases: [
      { input: '1\n5', expectedOutput: '0', hidden: false },
      { input: '1\n-3', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: 'def count_smaller(nums):\n    pass',
      java: 'public List<Integer> countSmaller(int[] nums) {\n    return new ArrayList<>();\n}',
      c: 'int* countSmaller(int* nums, int numsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> countSmaller(vector<int>& nums) {\n    return {};\n}'
    }
  },

  {
    id: 'csnas-e2', title: 'All Zeros Result', difficulty: 'Easy',
    description: 'Given a sorted ascending array, every element has no smaller element to its right, so all counts are 0.',
    constraints: ['1 <= nums.length <= 10', 'Array is sorted in ascending order'],
    examples: [
      { input: 'nums = [1,2,3,4]', output: '[0,0,0,0]', explanation: 'Each element has no smaller element to its right.' },
      { input: 'nums = [1,1,1]', output: '[0,0,0]', explanation: 'Equal elements do not count as smaller.' }
    ],
    testCases: [
      { input: '4\n1 2 3 4', expectedOutput: '0 0 0 0', hidden: false },
      { input: '3\n1 1 1', expectedOutput: '0 0 0', hidden: false }
    ],
    starterCode: {
      python: 'def count_smaller(nums):\n    pass',
      java: 'public List<Integer> countSmaller(int[] nums) {\n    return new ArrayList<>();\n}',
      c: 'int* countSmaller(int* nums, int numsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> countSmaller(vector<int>& nums) {\n    return {};\n}'
    }
  },

  {
    id: 'csnas-e3', title: 'Descending Array', difficulty: 'Easy',
    description: 'Given a strictly descending array, each element has all elements to its right smaller than it.',
    constraints: ['1 <= nums.length <= 10', 'Array is strictly descending'],
    examples: [
      { input: 'nums = [4,3,2,1]', output: '[3,2,1,0]', explanation: '4 has 3 smaller to its right, 3 has 2, 2 has 1, 1 has 0.' },
      { input: 'nums = [5,3,1]', output: '[2,1,0]', explanation: '5 has 2 smaller to its right, 3 has 1, 1 has 0.' }
    ],
    testCases: [
      { input: '4\n4 3 2 1', expectedOutput: '3 2 1 0', hidden: false },
      { input: '3\n5 3 1', expectedOutput: '2 1 0', hidden: false }
    ],
    starterCode: {
      python: 'def count_smaller(nums):\n    pass',
      java: 'public List<Integer> countSmaller(int[] nums) {\n    return new ArrayList<>();\n}',
      c: 'int* countSmaller(int* nums, int numsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> countSmaller(vector<int>& nums) {\n    return {};\n}'
    }
  },

  {
    id: 'csnas-e4', title: 'Two Element Array', difficulty: 'Easy',
    description: 'Given a two-element array, determine how many elements to the right of each element are smaller.',
    constraints: ['nums.length == 2', '-10^4 <= nums[i] <= 10^4'],
    examples: [
      { input: 'nums = [3,1]', output: '[1,0]', explanation: '3 has one smaller element (1) to its right. 1 has none.' },
      { input: 'nums = [1,3]', output: '[0,0]', explanation: '1 has no smaller element to its right. 3 has none.' }
    ],
    testCases: [
      { input: '2\n3 1', expectedOutput: '1 0', hidden: false },
      { input: '2\n1 3', expectedOutput: '0 0', hidden: false }
    ],
    starterCode: {
      python: 'def count_smaller(nums):\n    pass',
      java: 'public List<Integer> countSmaller(int[] nums) {\n    return new ArrayList<>();\n}',
      c: 'int* countSmaller(int* nums, int numsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> countSmaller(vector<int>& nums) {\n    return {};\n}'
    }
  },

  {
    id: 'csnas-e5', title: 'Array with Negative Numbers', difficulty: 'Easy',
    description: 'Given an array containing negative numbers, count the number of smaller elements to the right of each element.',
    constraints: ['1 <= nums.length <= 10', '-10^4 <= nums[i] <= 10^4'],
    examples: [
      { input: 'nums = [-1,-2,-3]', output: '[2,1,0]', explanation: '-1 has two smaller elements to its right (-2,-3). -2 has one (-3). -3 has none.' },
      { input: 'nums = [2,-1,0]', output: '[2,0,0]', explanation: '2 has two smaller elements (-1,0). -1 has none. 0 has none.' }
    ],
    testCases: [
      { input: '3\n-1 -2 -3', expectedOutput: '2 1 0', hidden: false },
      { input: '3\n2 -1 0', expectedOutput: '2 0 0', hidden: false }
    ],
    starterCode: {
      python: 'def count_smaller(nums):\n    pass',
      java: 'public List<Integer> countSmaller(int[] nums) {\n    return new ArrayList<>();\n}',
      c: 'int* countSmaller(int* nums, int numsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> countSmaller(vector<int>& nums) {\n    return {};\n}'
    }
  },

  // --- MEDIUM ---
  {
    id: 'csnas-m1', title: 'Standard Count of Smaller Numbers After Self', difficulty: 'Medium',
    description: 'Given an integer array nums, return a count array where count[i] is the number of elements to the right of nums[i] that are strictly smaller than nums[i].',
    constraints: ['1 <= nums.length <= 10^5', '-10^4 <= nums[i] <= 10^4'],
    examples: [
      { input: 'nums = [5,2,6,1]', output: '[2,1,1,0]', explanation: '5 has [2,1] smaller to its right. 2 has [1]. 6 has [1]. 1 has none.' },
      { input: 'nums = [1,9,7,8,5]', output: '[0,3,1,1,0]', explanation: '1 has none. 9 has [7,8,5]. 7 has [5]. 8 has [5]. 5 has none.' }
    ],
    testCases: [
      { input: '4\n5 2 6 1', expectedOutput: '2 1 1 0', hidden: false },
      { input: '5\n1 9 7 8 5', expectedOutput: '0 3 1 1 0', hidden: false }
    ],
    starterCode: {
      python: 'def count_smaller(nums):\n    pass',
      java: 'public List<Integer> countSmaller(int[] nums) {\n    return new ArrayList<>();\n}',
      c: 'int* countSmaller(int* nums, int numsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> countSmaller(vector<int>& nums) {\n    return {};\n}'
    }
  },

  {
    id: 'csnas-m2', title: 'Count Smaller Using Binary Search', difficulty: 'Medium',
    description: 'Implement count of smaller numbers after self using binary search on a sorted list built from right to left. Insert each element into its correct position and use the insertion index as the count.',
    constraints: ['1 <= nums.length <= 10^4', '-10^4 <= nums[i] <= 10^4', 'Use binary search approach'],
    examples: [
      { input: 'nums = [5,2,6,1]', output: '[2,1,1,0]', explanation: 'Process right to left, inserting into sorted list and using bisect_left to find count.' },
      { input: 'nums = [3,3,3]', output: '[0,0,0]', explanation: 'Equal elements are not counted as smaller.' }
    ],
    testCases: [
      { input: '4\n5 2 6 1', expectedOutput: '2 1 1 0', hidden: false },
      { input: '3\n3 3 3', expectedOutput: '0 0 0', hidden: false }
    ],
    starterCode: {
      python: 'def count_smaller(nums):\n    # Use binary search\n    pass',
      java: 'public List<Integer> countSmaller(int[] nums) {\n    // Use binary search\n    return new ArrayList<>();\n}',
      c: 'int* countSmaller(int* nums, int numsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> countSmaller(vector<int>& nums) {\n    // Use binary search\n    return {};\n}'
    }
  },

  {
    id: 'csnas-m3', title: 'Maximum Count of Smaller Numbers', difficulty: 'Medium',
    description: 'Given an integer array, return the maximum value in the count array (i.e., the element that has the most smaller elements to its right).',
    constraints: ['1 <= nums.length <= 10^5', '-10^4 <= nums[i] <= 10^4'],
    examples: [
      { input: 'nums = [5,2,6,1]', output: '2', explanation: 'Count array is [2,1,1,0]. Maximum is 2.' },
      { input: 'nums = [6,5,4,3,2,1]', output: '5', explanation: 'Count array is [5,4,3,2,1,0]. Maximum is 5.' }
    ],
    testCases: [
      { input: '4\n5 2 6 1', expectedOutput: '2', hidden: false },
      { input: '6\n6 5 4 3 2 1', expectedOutput: '5', hidden: false }
    ],
    starterCode: {
      python: 'def max_smaller_count(nums):\n    pass',
      java: 'public int maxSmallerCount(int[] nums) {\n    return 0;\n}',
      c: 'int maxSmallerCount(int* nums, int numsSize) {\n    return 0;\n}',
      cpp: 'int maxSmallerCount(vector<int>& nums) {\n    return 0;\n}'
    }
  },

  {
    id: 'csnas-m4', title: 'Index of Element with Most Smaller Numbers to Right', difficulty: 'Medium',
    description: 'Given an integer array, return the index of the element that has the most smaller numbers to its right. If there is a tie, return the smallest index.',
    constraints: ['1 <= nums.length <= 10^5', '-10^4 <= nums[i] <= 10^4'],
    examples: [
      { input: 'nums = [5,2,6,1]', output: '0', explanation: 'Count array is [2,1,1,0]. Index 0 (value 5) has the max count of 2.' },
      { input: 'nums = [3,1,4,1,5]', output: '2', explanation: 'Count array is [2,0,2,0,0]. Index 0 and 2 tie; return smallest index 0.' }
    ],
    testCases: [
      { input: '4\n5 2 6 1', expectedOutput: '0', hidden: false },
      { input: '5\n3 1 4 1 5', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: 'def index_of_max_smaller(nums):\n    pass',
      java: 'public int indexOfMaxSmaller(int[] nums) {\n    return 0;\n}',
      c: 'int indexOfMaxSmaller(int* nums, int numsSize) {\n    return 0;\n}',
      cpp: 'int indexOfMaxSmaller(vector<int>& nums) {\n    return 0;\n}'
    }
  },

  {
    id: 'csnas-m5', title: 'Sum of Smaller Counts', difficulty: 'Medium',
    description: 'Given an integer array, return the sum of all values in the count array.',
    constraints: ['1 <= nums.length <= 10^5', '-10^4 <= nums[i] <= 10^4'],
    examples: [
      { input: 'nums = [5,2,6,1]', output: '4', explanation: 'Count array is [2,1,1,0]. Sum = 2+1+1+0 = 4.' },
      { input: 'nums = [4,3,2,1]', output: '6', explanation: 'Count array is [3,2,1,0]. Sum = 3+2+1+0 = 6.' }
    ],
    testCases: [
      { input: '4\n5 2 6 1', expectedOutput: '4', hidden: false },
      { input: '4\n4 3 2 1', expectedOutput: '6', hidden: false }
    ],
    starterCode: {
      python: 'def sum_of_smaller_counts(nums):\n    pass',
      java: 'public int sumOfSmallerCounts(int[] nums) {\n    return 0;\n}',
      c: 'int sumOfSmallerCounts(int* nums, int numsSize) {\n    return 0;\n}',
      cpp: 'int sumOfSmallerCounts(vector<int>& nums) {\n    return 0;\n}'
    }
  },

  // --- HARD ---
  {
    id: 'csnas-h1', title: 'Count Smaller Using Merge Sort', difficulty: 'Hard',
    description: 'Implement count of smaller numbers after self using a modified merge sort. During the merge step, count how many elements from the right half are placed before elements from the left half.',
    constraints: ['1 <= nums.length <= 10^5', '-10^4 <= nums[i] <= 10^4', 'Must use merge sort approach'],
    examples: [
      { input: 'nums = [5,2,6,1]', output: '[2,1,1,0]', explanation: 'Merge sort counts inversions during the merge step to build the result array.' },
      { input: 'nums = [1,9,7,8,5]', output: '[0,3,1,1,0]', explanation: 'Modified merge sort tracks how many right-half elements are merged before each left-half element.' }
    ],
    testCases: [
      { input: '4\n5 2 6 1', expectedOutput: '2 1 1 0', hidden: false },
      { input: '5\n1 9 7 8 5', expectedOutput: '0 3 1 1 0', hidden: false }
    ],
    starterCode: {
      python: 'def count_smaller(nums):\n    # Implement using merge sort\n    pass',
      java: 'public List<Integer> countSmaller(int[] nums) {\n    // Implement using merge sort\n    return new ArrayList<>();\n}',
      c: 'int* countSmaller(int* nums, int numsSize, int* returnSize) {\n    /* Implement using merge sort */\n    return NULL;\n}',
      cpp: 'vector<int> countSmaller(vector<int>& nums) {\n    // Implement using merge sort\n    return {};\n}'
    }
  },

  {
    id: 'csnas-h2', title: 'Count Smaller Using Binary Indexed Tree', difficulty: 'Hard',
    description: 'Implement count of smaller numbers after self using a Binary Indexed Tree (Fenwick Tree). Coordinate compress the values, then process from right to left querying prefix sums.',
    constraints: ['1 <= nums.length <= 10^5', '-10^4 <= nums[i] <= 10^4', 'Must use BIT/Fenwick Tree'],
    examples: [
      { input: 'nums = [5,2,6,1]', output: '[2,1,1,0]', explanation: 'Coordinate compress values, then use BIT to count elements smaller than current from the right.' },
      { input: 'nums = [3,3,3,3]', output: '[0,0,0,0]', explanation: 'All equal elements, BIT queries return 0 for each.' }
    ],
    testCases: [
      { input: '4\n5 2 6 1', expectedOutput: '2 1 1 0', hidden: false },
      { input: '4\n3 3 3 3', expectedOutput: '0 0 0 0', hidden: false }
    ],
    starterCode: {
      python: 'def count_smaller(nums):\n    # Implement using Binary Indexed Tree\n    pass',
      java: 'public List<Integer> countSmaller(int[] nums) {\n    // Implement using Binary Indexed Tree\n    return new ArrayList<>();\n}',
      c: 'int* countSmaller(int* nums, int numsSize, int* returnSize) {\n    /* Implement using Binary Indexed Tree */\n    return NULL;\n}',
      cpp: 'vector<int> countSmaller(vector<int>& nums) {\n    // Implement using Binary Indexed Tree\n    return {};\n}'
    }
  },

  {
    id: 'csnas-h3', title: 'Count Smaller Using Segment Tree', difficulty: 'Hard',
    description: 'Implement count of smaller numbers after self using a Segment Tree. Coordinate compress the values and use the segment tree to answer range sum queries from right to left.',
    constraints: ['1 <= nums.length <= 10^5', '-10^4 <= nums[i] <= 10^4', 'Must use Segment Tree'],
    examples: [
      { input: 'nums = [5,2,6,1]', output: '[2,1,1,0]', explanation: 'Build a segment tree over compressed values. For each element (right to left), query count of values less than it.' },
      { input: 'nums = [2,0,1]', output: '[2,0,0]', explanation: '2 has [0,1] smaller to its right. 0 and 1 have none.' }
    ],
    testCases: [
      { input: '4\n5 2 6 1', expectedOutput: '2 1 1 0', hidden: false },
      { input: '3\n2 0 1', expectedOutput: '2 0 0', hidden: false }
    ],
    starterCode: {
      python: 'def count_smaller(nums):\n    # Implement using Segment Tree\n    pass',
      java: 'public List<Integer> countSmaller(int[] nums) {\n    // Implement using Segment Tree\n    return new ArrayList<>();\n}',
      c: 'int* countSmaller(int* nums, int numsSize, int* returnSize) {\n    /* Implement using Segment Tree */\n    return NULL;\n}',
      cpp: 'vector<int> countSmaller(vector<int>& nums) {\n    // Implement using Segment Tree\n    return {};\n}'
    }
  },

  {
    id: 'csnas-h4', title: 'Count Smaller Numbers After Self in 2D Grid', difficulty: 'Hard',
    description: 'Given a 2D grid of integers, for each element nums[i][j], count how many elements strictly to its right in the same row AND strictly below it in the same column are smaller. Return the 2D count array.',
    constraints: ['1 <= m, n <= 100', '-10^4 <= nums[i][j] <= 10^4'],
    examples: [
      { input: 'nums = [[3,1],[2,4]]', output: '[[2,0],[0,0]]', explanation: '3 has [1,2] smaller (right and below). 1 has none. 2 has none. 4 has none.' },
      { input: 'nums = [[5,3,1]]', output: '[[2,1,0]]', explanation: 'Single row: same as 1D problem.' }
    ],
    testCases: [
      { input: '2 2\n3 1\n2 4', expectedOutput: '2 0\n0 0', hidden: false },
      { input: '1 3\n5 3 1', expectedOutput: '2 1 0', hidden: false }
    ],
    starterCode: {
      python: 'def count_smaller_2d(nums):\n    pass',
      java: 'public int[][] countSmaller2D(int[][] nums) {\n    return new int[0][0];\n}',
      c: 'void countSmaller2D(int** nums, int m, int n, int** result) {\n}',
      cpp: 'vector<vector<int>> countSmaller2D(vector<vector<int>>& nums) {\n    return {};\n}'
    }
  },

  {
    id: 'csnas-h5', title: 'Dynamic Count of Smaller After Updates', difficulty: 'Hard',
    description: 'Given an array and a list of update operations, after each update (set nums[i] = val), return the full count array of smaller numbers to the right of every element.',
    constraints: ['1 <= nums.length <= 10^4', '1 <= updates.length <= 10^3', '-10^4 <= nums[i], val <= 10^4'],
    examples: [
      { input: 'nums = [5,2,6,1], updates = [[0,3]]', output: '[[2,1,1,0],[1,1,1,0]]', explanation: 'Initial count is [2,1,1,0]. After setting nums[0]=3, count becomes [1,1,1,0].' },
      { input: 'nums = [1,2,3], updates = [[2,0]]', output: '[[0,0,0],[2,1,0]]', explanation: 'Initial count is [0,0,0]. After setting nums[2]=0, count becomes [2,1,0].' }
    ],
    testCases: [
      { input: '4\n5 2 6 1\n1\n0 3', expectedOutput: '2 1 1 0\n1 1 1 0', hidden: false },
      { input: '3\n1 2 3\n1\n2 0', expectedOutput: '0 0 0\n2 1 0', hidden: false }
    ],
    starterCode: {
      python: 'def count_smaller_with_updates(nums, updates):\n    pass',
      java: 'public List<List<Integer>> countSmallerWithUpdates(int[] nums, int[][] updates) {\n    return new ArrayList<>();\n}',
      c: 'void countSmallerWithUpdates(int* nums, int numsSize, int updates[][2], int updatesSize, int** result, int* returnSize) {\n}',
      cpp: 'vector<vector<int>> countSmallerWithUpdates(vector<int>& nums, vector<vector<int>>& updates) {\n    return {};\n}'
    }
  }
];
