export const KSEproblems = [
  // --- EASY ---
  {
    id: 'kse-e1', title: 'Kth Smallest in Sorted Array', difficulty: 'Easy',
    description: 'Given a sorted array of distinct integers and an integer k, return the kth smallest element. Since the array is already sorted, the answer is simply the element at index k-1.',
    constraints: ['1 <= nums.length <= 100', '1 <= k <= nums.length', 'Array is sorted in ascending order', 'All elements are distinct'],
    examples: [
      { input: 'nums = [1, 2, 3, 4, 5], k = 2', output: '2', explanation: 'The array is sorted. The 2nd smallest element is at index 1, which is 2.' },
      { input: 'nums = [10, 20, 30, 40], k = 3', output: '30', explanation: 'The 3rd smallest element is at index 2, which is 30.' }
    ],
    testCases: [
      { input: '5\n1 2 3 4 5\n2', expectedOutput: '2', hidden: false },
      { input: '4\n10 20 30 40\n3', expectedOutput: '30', hidden: false },
      { input: '1\n7\n1', expectedOutput: '7', hidden: true },
      { input: '6\n1 3 5 7 9 11\n6', expectedOutput: '11', hidden: true }
    ],
    starterCode: {
      python: 'def kth_smallest(nums, k):\n    pass',
      java: 'public int kthSmallest(int[] nums, int k) {\n    return 0;\n}',
      c: 'int kthSmallest(int* nums, int numsSize, int k) {\n    return 0;\n}',
      cpp: 'int kthSmallest(vector<int>& nums, int k) {\n    return 0;\n}'
    }
  },

  {
    id: 'kse-e2', title: 'Kth Smallest in Unsorted Array', difficulty: 'Easy',
    description: 'Given an unsorted array of distinct integers and an integer k, return the kth smallest element by sorting the array first.',
    constraints: ['1 <= nums.length <= 100', '1 <= k <= nums.length', 'All elements are distinct', '-10^4 <= nums[i] <= 10^4'],
    examples: [
      { input: 'nums = [3, 1, 4, 1, 5], k = 2', output: '2', explanation: 'Wait — all elements are distinct here. Sorted: [1, 3, 4, 5]. 2nd smallest is 3.' },
      { input: 'nums = [7, 2, 5, 1, 9], k = 3', output: '5', explanation: 'Sorted: [1, 2, 5, 7, 9]. 3rd smallest is 5.' }
    ],
    testCases: [
      { input: '5\n7 2 5 1 9\n3', expectedOutput: '5', hidden: false },
      { input: '4\n4 2 8 6\n1', expectedOutput: '2', hidden: false },
      { input: '5\n-3 -1 0 2 4\n2', expectedOutput: '-1', hidden: true },
      { input: '3\n100 50 75\n3', expectedOutput: '100', hidden: true }
    ],
    starterCode: {
      python: 'def kth_smallest(nums, k):\n    pass',
      java: 'public int kthSmallest(int[] nums, int k) {\n    return 0;\n}',
      c: 'int kthSmallest(int* nums, int numsSize, int k) {\n    return 0;\n}',
      cpp: 'int kthSmallest(vector<int>& nums, int k) {\n    return 0;\n}'
    }
  },

  {
    id: 'kse-e3', title: 'Kth Smallest with Duplicates', difficulty: 'Easy',
    description: 'Given an array that may contain duplicate integers and an integer k, return the kth smallest element. Duplicates count as separate elements when determining rank.',
    constraints: ['1 <= nums.length <= 100', '1 <= k <= nums.length', 'Array may contain duplicates', '-10^4 <= nums[i] <= 10^4'],
    examples: [
      { input: 'nums = [3, 1, 2, 1, 4], k = 2', output: '1', explanation: 'Sorted: [1, 1, 2, 3, 4]. The 2nd smallest (counting duplicates) is 1.' },
      { input: 'nums = [5, 5, 5, 5], k = 3', output: '5', explanation: 'All elements are 5. The 3rd smallest is still 5.' }
    ],
    testCases: [
      { input: '5\n3 1 2 1 4\n2', expectedOutput: '1', hidden: false },
      { input: '4\n5 5 5 5\n3', expectedOutput: '5', hidden: false },
      { input: '6\n2 2 3 1 1 4\n4', expectedOutput: '2', hidden: true },
      { input: '3\n10 10 5\n1', expectedOutput: '5', hidden: true }
    ],
    starterCode: {
      python: 'def kth_smallest(nums, k):\n    pass',
      java: 'public int kthSmallest(int[] nums, int k) {\n    return 0;\n}',
      c: 'int kthSmallest(int* nums, int numsSize, int k) {\n    return 0;\n}',
      cpp: 'int kthSmallest(vector<int>& nums, int k) {\n    return 0;\n}'
    }
  },

  {
    id: 'kse-e4', title: 'Kth Smallest Using Min-Heap', difficulty: 'Easy',
    description: 'Given an unsorted array and an integer k, find the kth smallest element by inserting all elements into a min-heap and extracting the minimum k times.',
    constraints: ['1 <= nums.length <= 200', '1 <= k <= nums.length', 'All elements are distinct', '0 <= nums[i] <= 10^5'],
    examples: [
      { input: 'nums = [6, 3, 8, 1, 9, 2], k = 3', output: '3', explanation: 'Min-heap extractions: 1st=1, 2nd=2, 3rd=3. Answer is 3.' },
      { input: 'nums = [10, 4, 7, 2], k = 2', output: '4', explanation: 'Min-heap extractions: 1st=2, 2nd=4. Answer is 4.' }
    ],
    testCases: [
      { input: '6\n6 3 8 1 9 2\n3', expectedOutput: '3', hidden: false },
      { input: '4\n10 4 7 2\n2', expectedOutput: '4', hidden: false },
      { input: '5\n100 50 75 25 90\n4', expectedOutput: '90', hidden: true },
      { input: '3\n1 2 3\n1', expectedOutput: '1', hidden: true }
    ],
    starterCode: {
      python: 'def kth_smallest(nums, k):\n    # Use a min-heap\n    pass',
      java: 'public int kthSmallest(int[] nums, int k) {\n    // Use a PriorityQueue (min-heap)\n    return 0;\n}',
      c: 'int kthSmallest(int* nums, int numsSize, int k) {\n    return 0;\n}',
      cpp: 'int kthSmallest(vector<int>& nums, int k) {\n    // Use a priority_queue (min-heap)\n    return 0;\n}'
    }
  },

  {
    id: 'kse-e5', title: 'Kth Smallest in a Range', difficulty: 'Easy',
    description: 'Given an array of integers where all values fall within a known small range [1, maxVal], and an integer k, use a frequency count array to find the kth smallest element without sorting.',
    constraints: ['1 <= nums.length <= 500', '1 <= k <= nums.length', '1 <= nums[i] <= maxVal <= 1000', 'Array may contain duplicates'],
    examples: [
      { input: 'nums = [3, 1, 2, 1, 3], k = 3, maxVal = 3', output: '2', explanation: 'Frequencies: 1→2, 2→1, 3→2. Cumulative: after 1 we have 2, after 2 we have 3. The 3rd smallest is 2.' },
      { input: 'nums = [4, 2, 4, 1, 3], k = 4, maxVal = 4', output: '4', explanation: 'Sorted: [1,2,3,4,4]. The 4th smallest is 4.' }
    ],
    testCases: [
      { input: '5\n3 1 2 1 3\n3\n3', expectedOutput: '2', hidden: false },
      { input: '5\n4 2 4 1 3\n4\n4', expectedOutput: '4', hidden: false },
      { input: '6\n1 1 2 2 3 3\n5\n3', expectedOutput: '3', hidden: true },
      { input: '4\n5 3 5 1\n2\n5', expectedOutput: '3', hidden: true }
    ],
    starterCode: {
      python: 'def kth_smallest(nums, k, max_val):\n    # Use a frequency count array\n    pass',
      java: 'public int kthSmallest(int[] nums, int k, int maxVal) {\n    // Use a frequency count array\n    return 0;\n}',
      c: 'int kthSmallest(int* nums, int numsSize, int k, int maxVal) {\n    return 0;\n}',
      cpp: 'int kthSmallest(vector<int>& nums, int k, int maxVal) {\n    // Use a frequency count array\n    return 0;\n}'
    }
  },

  // --- MEDIUM ---
  {
    id: 'kse-m1', title: 'Kth Smallest Using Quick Select', difficulty: 'Medium',
    description: 'Given an unsorted array of distinct integers and an integer k, find the kth smallest element using the Quick Select algorithm. Quick Select partitions the array around a pivot and recurses only on the relevant half, achieving average O(n) time.',
    constraints: ['1 <= nums.length <= 10^4', '1 <= k <= nums.length', 'All elements are distinct', '-10^5 <= nums[i] <= 10^5'],
    examples: [
      { input: 'nums = [3, 2, 1, 5, 6, 4], k = 2', output: '2', explanation: 'Quick Select partitions around a pivot. The 2nd smallest element is 2.' },
      { input: 'nums = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4', output: '3', explanation: 'Sorted: [1,2,2,3,3,4,5,5,6]. The 4th smallest is 3.' }
    ],
    testCases: [
      { input: '6\n3 2 1 5 6 4\n2', expectedOutput: '2', hidden: false },
      { input: '9\n3 2 3 1 2 4 5 5 6\n4', expectedOutput: '3', hidden: false },
      { input: '5\n7 10 4 3 20\n3', expectedOutput: '7', hidden: true },
      { input: '4\n-5 -1 -3 -2\n2', expectedOutput: '-3', hidden: true }
    ],
    starterCode: {
      python: 'def kth_smallest(nums, k):\n    # Implement using Quick Select\n    pass',
      java: 'public int kthSmallest(int[] nums, int k) {\n    // Implement using Quick Select\n    return 0;\n}',
      c: 'int kthSmallest(int* nums, int numsSize, int k) {\n    return 0;\n}',
      cpp: 'int kthSmallest(vector<int>& nums, int k) {\n    // Implement using Quick Select\n    return 0;\n}'
    }
  },

  {
    id: 'kse-m2', title: 'Kth Smallest in a BST', difficulty: 'Medium',
    description: 'Given the root of a Binary Search Tree (BST) and an integer k, return the kth smallest element. An in-order traversal of a BST visits nodes in ascending order.',
    constraints: ['1 <= number of nodes <= 10^4', '1 <= k <= number of nodes', '0 <= Node.val <= 10^4', 'Tree is a valid BST'],
    examples: [
      { input: 'root = [3,1,4,null,2], k = 1', output: '1', explanation: 'In-order traversal: [1,2,3,4]. The 1st smallest is 1.' },
      { input: 'root = [5,3,6,2,4,null,null,1], k = 3', output: '3', explanation: 'In-order traversal: [1,2,3,4,5,6]. The 3rd smallest is 3.' }
    ],
    testCases: [
      { input: '5\n3 1 4 -1 2\n1', expectedOutput: '1', hidden: false },
      { input: '6\n5 3 6 2 4 -1\n3', expectedOutput: '3', hidden: false },
      { input: '3\n4 2 6\n2', expectedOutput: '4', hidden: true },
      { input: '1\n1\n1', expectedOutput: '1', hidden: true }
    ],
    starterCode: {
      python: 'class TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef kth_smallest(root, k):\n    pass',
      java: 'public int kthSmallest(TreeNode root, int k) {\n    return 0;\n}',
      c: 'struct TreeNode { int val; struct TreeNode* left; struct TreeNode* right; };\nint kthSmallest(struct TreeNode* root, int k) {\n    return 0;\n}',
      cpp: 'struct TreeNode { int val; TreeNode* left; TreeNode* right; };\nint kthSmallest(TreeNode* root, int k) {\n    return 0;\n}'
    }
  },

  {
    id: 'kse-m3', title: 'Kth Smallest in Sorted Matrix', difficulty: 'Medium',
    description: 'Given an n x n matrix where each row and column is sorted in ascending order, return the kth smallest element. You may use a min-heap or binary search approach.',
    constraints: ['1 <= n <= 300', '1 <= k <= n^2', '-10^4 <= matrix[i][j] <= 10^4', 'Each row and column is sorted in ascending order'],
    examples: [
      { input: 'matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8', output: '13', explanation: 'Sorted elements: [1,5,9,10,11,12,13,13,15]. The 8th smallest is 13.' },
      { input: 'matrix = [[-5]], k = 1', output: '-5', explanation: 'Only one element in the matrix.' }
    ],
    testCases: [
      { input: '3\n1 5 9\n10 11 13\n12 13 15\n8', expectedOutput: '13', hidden: false },
      { input: '1\n-5\n1', expectedOutput: '-5', hidden: false },
      { input: '2\n1 2\n3 4\n2', expectedOutput: '2', hidden: true },
      { input: '3\n1 2 3\n4 5 6\n7 8 9\n5', expectedOutput: '5', hidden: true }
    ],
    starterCode: {
      python: 'def kth_smallest(matrix, k):\n    pass',
      java: 'public int kthSmallest(int[][] matrix, int k) {\n    return 0;\n}',
      c: 'int kthSmallest(int** matrix, int matrixSize, int* matrixColSize, int k) {\n    return 0;\n}',
      cpp: 'int kthSmallest(vector<vector<int>>& matrix, int k) {\n    return 0;\n}'
    }
  },

  {
    id: 'kse-m4', title: 'Kth Smallest Among Multiple Sorted Arrays', difficulty: 'Medium',
    description: 'Given multiple sorted arrays, find the kth smallest element across all of them combined. You may merge them or use a min-heap to efficiently track the smallest elements.',
    constraints: ['1 <= arrays.length <= 10', '1 <= arrays[i].length <= 500', '1 <= k <= total number of elements', 'Each individual array is sorted in ascending order'],
    examples: [
      { input: 'arrays = [[1,3,5],[2,4,6],[0,7,8]], k = 4', output: '3', explanation: 'Merged sorted: [0,1,2,3,4,5,6,7,8]. The 4th smallest is 3.' },
      { input: 'arrays = [[1,2],[3,4]], k = 3', output: '3', explanation: 'Merged sorted: [1,2,3,4]. The 3rd smallest is 3.' }
    ],
    testCases: [
      { input: '3\n1 3 5\n2 4 6\n0 7 8\n4', expectedOutput: '3', hidden: false },
      { input: '2\n1 2\n3 4\n3', expectedOutput: '3', hidden: false },
      { input: '2\n1 5 9\n2 6 10\n5', expectedOutput: '6', hidden: true },
      { input: '3\n1\n2\n3\n2', expectedOutput: '2', hidden: true }
    ],
    starterCode: {
      python: 'def kth_smallest(arrays, k):\n    pass',
      java: 'public int kthSmallest(int[][] arrays, int k) {\n    return 0;\n}',
      c: 'int kthSmallest(int** arrays, int arraysSize, int* arraySizes, int k) {\n    return 0;\n}',
      cpp: 'int kthSmallest(vector<vector<int>>& arrays, int k) {\n    return 0;\n}'
    }
  },

  {
    id: 'kse-m5', title: 'Kth Smallest After Deleting Elements', difficulty: 'Medium',
    description: 'Given an array of integers and a list of elements to delete, remove all occurrences of the given elements from the array and then return the kth smallest element from the remaining elements.',
    constraints: ['1 <= nums.length <= 10^4', '1 <= k <= nums.length - deletions', '0 <= nums[i] <= 10^5', 'After deletions, at least k elements remain'],
    examples: [
      { input: 'nums = [5, 3, 1, 4, 2], delete = [3, 5], k = 2', output: '2', explanation: 'After deleting 3 and 5: [1, 4, 2]. Sorted: [1, 2, 4]. The 2nd smallest is 2.' },
      { input: 'nums = [10, 20, 30, 40, 50], delete = [10, 30], k = 2', output: '40', explanation: 'After deleting 10 and 30: [20, 40, 50]. The 2nd smallest is 40.' }
    ],
    testCases: [
      { input: '5\n5 3 1 4 2\n2\n3 5\n2', expectedOutput: '2', hidden: false },
      { input: '5\n10 20 30 40 50\n2\n10 30\n2', expectedOutput: '40', hidden: false },
      { input: '6\n1 2 3 4 5 6\n2\n2 4\n3', expectedOutput: '5', hidden: true },
      { input: '4\n7 3 9 1\n1\n9\n2', expectedOutput: '3', hidden: true }
    ],
    starterCode: {
      python: 'def kth_smallest_after_delete(nums, delete, k):\n    pass',
      java: 'public int kthSmallestAfterDelete(int[] nums, int[] delete, int k) {\n    return 0;\n}',
      c: 'int kthSmallestAfterDelete(int* nums, int numsSize, int* del, int delSize, int k) {\n    return 0;\n}',
      cpp: 'int kthSmallestAfterDelete(vector<int>& nums, vector<int>& del, int k) {\n    return 0;\n}'
    }
  },

  // --- HARD ---
  {
    id: 'kse-h1', title: 'Kth Smallest Using Binary Indexed Tree', difficulty: 'Hard',
    description: 'Given an array of integers and an integer k, find the kth smallest element using a Binary Indexed Tree (BIT/Fenwick Tree) with coordinate compression. Insert all elements into the BIT and use binary lifting to find the kth position in O(log n) time.',
    constraints: ['1 <= nums.length <= 10^5', '1 <= k <= nums.length', '-10^9 <= nums[i] <= 10^9', 'Implement using BIT with coordinate compression'],
    examples: [
      { input: 'nums = [3, 1, 4, 1, 5, 9, 2, 6], k = 4', output: '3', explanation: 'Sorted: [1,1,2,3,4,5,6,9]. After coordinate compression and BIT insertion, binary lifting finds the 4th smallest as 3.' },
      { input: 'nums = [7, 2, 5, 1, 9, 3], k = 3', output: '3', explanation: 'Sorted: [1,2,3,5,7,9]. BIT query for 3rd position returns 3.' }
    ],
    testCases: [
      { input: '8\n3 1 4 1 5 9 2 6\n4', expectedOutput: '3', hidden: false },
      { input: '6\n7 2 5 1 9 3\n3', expectedOutput: '3', hidden: false },
      { input: '5\n10 40 20 50 30\n4', expectedOutput: '40', hidden: true },
      { input: '6\n-3 -1 -4 -1 -5 -2\n3', expectedOutput: '-3', hidden: true }
    ],
    starterCode: {
      python: 'def kth_smallest(nums, k):\n    # Implement using BIT with coordinate compression\n    pass',
      java: 'public int kthSmallest(int[] nums, int k) {\n    // Implement using BIT with coordinate compression\n    return 0;\n}',
      c: 'int kthSmallest(int* nums, int numsSize, int k) {\n    /* Implement using BIT with coordinate compression */\n    return 0;\n}',
      cpp: 'int kthSmallest(vector<int>& nums, int k) {\n    // Implement using BIT with coordinate compression\n    return 0;\n}'
    }
  },

  {
    id: 'kse-h2', title: 'Kth Smallest in BST with Frequent Updates', difficulty: 'Hard',
    description: 'Given a BST that supports insert and delete operations, answer multiple kth smallest queries after each update. Each query must reflect the current state of the BST. Augment each node with a subtree size to answer queries in O(log n).',
    constraints: ['1 <= initial nodes <= 10^4', '1 <= operations <= 10^4', 'Operations are INSERT x, DELETE x, or QUERY k', 'Tree remains a valid BST after each operation'],
    examples: [
      { input: 'initial = [5,3,7,1,4], ops = ["QUERY 2", "INSERT 2", "QUERY 2", "DELETE 3", "QUERY 2"]', output: '[3, 2, 2]', explanation: 'Initial sorted: [1,3,4,5,7]. QUERY 2=3. After INSERT 2: [1,2,3,4,5,7]. QUERY 2=2. After DELETE 3: [1,2,4,5,7]. QUERY 2=2.' },
      { input: 'initial = [10,5,15], ops = ["QUERY 1", "INSERT 3", "QUERY 1"]', output: '[5, 3]', explanation: 'Initial sorted: [5,10,15]. QUERY 1=5. After INSERT 3: [3,5,10,15]. QUERY 1=3.' }
    ],
    testCases: [
      { input: '5\n5 3 7 1 4\n5\nQUERY 2\nINSERT 2\nQUERY 2\nDELETE 3\nQUERY 2', expectedOutput: '3 2 2', hidden: false },
      { input: '3\n10 5 15\n3\nQUERY 1\nINSERT 3\nQUERY 1', expectedOutput: '5 3', hidden: false },
      { input: '3\n4 2 6\n4\nQUERY 3\nINSERT 5\nDELETE 2\nQUERY 2', expectedOutput: '6 5', hidden: true },
      { input: '1\n8\n3\nQUERY 1\nINSERT 4\nQUERY 1', expectedOutput: '8 4', hidden: true }
    ],
    starterCode: {
      python: 'def process_operations(initial, operations):\n    # Augment BST nodes with subtree size\n    pass',
      java: 'public int[] processOperations(int[] initial, String[] operations) {\n    // Augment BST nodes with subtree size\n    return new int[]{}\n}',
      c: 'int* processOperations(int* initial, int initSize, char** operations, int opsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> processOperations(vector<int>& initial, vector<string>& operations) {\n    // Augment BST nodes with subtree size\n    return {};\n}'
    }
  },

  {
    id: 'kse-h3', title: 'Kth Smallest Pair Distance', difficulty: 'Hard',
    description: 'Given an array of integers, consider all pairs (i, j) where i < j and compute their absolute differences. Return the kth smallest difference among all such pairs. Use binary search on the answer combined with a sliding window count.',
    constraints: ['2 <= nums.length <= 10^4', '1 <= k <= nums.length * (nums.length - 1) / 2', '0 <= nums[i] <= 10^6'],
    examples: [
      { input: 'nums = [1, 3, 1], k = 1', output: '0', explanation: 'All pair differences: |1-3|=2, |1-1|=0, |3-1|=2. Sorted: [0,2,2]. The 1st smallest is 0.' },
      { input: 'nums = [1, 6, 1], k = 3', output: '5', explanation: 'All pair differences: |1-6|=5, |1-1|=0, |6-1|=5. Sorted: [0,5,5]. The 3rd smallest is 5.' }
    ],
    testCases: [
      { input: '3\n1 3 1\n1', expectedOutput: '0', hidden: false },
      { input: '3\n1 6 1\n3', expectedOutput: '5', hidden: false },
      { input: '4\n1 2 3 4\n4', expectedOutput: '2', hidden: true },
      { input: '5\n1 1 1 1 1\n5', expectedOutput: '0', hidden: true }
    ],
    starterCode: {
      python: 'def kth_smallest_pair_distance(nums, k):\n    # Use binary search + sliding window\n    pass',
      java: 'public int kthSmallestPairDistance(int[] nums, int k) {\n    // Use binary search + sliding window\n    return 0;\n}',
      c: 'int kthSmallestPairDistance(int* nums, int numsSize, int k) {\n    return 0;\n}',
      cpp: 'int kthSmallestPairDistance(vector<int>& nums, int k) {\n    // Use binary search + sliding window\n    return 0;\n}'
    }
  },

  {
    id: 'kse-h4', title: 'Kth Smallest in Multiplication Table', difficulty: 'Hard',
    description: 'Given integers m, n, and k, return the kth smallest element in an m x n multiplication table. The table entry at row i and column j is i * j. Use binary search on the answer and count how many entries are less than or equal to a mid value.',
    constraints: ['1 <= m, n <= 3 * 10^4', '1 <= k <= m * n'],
    examples: [
      { input: 'm = 3, n = 3, k = 5', output: '3', explanation: 'Multiplication table: [[1,2,3],[2,4,6],[3,6,9]]. Sorted: [1,2,2,3,3,4,6,6,9]. The 5th smallest is 3.' },
      { input: 'm = 2, n = 3, k = 6', output: '6', explanation: 'Table: [[1,2,3],[2,4,6]]. Sorted: [1,2,2,3,4,6]. The 6th smallest is 6.' }
    ],
    testCases: [
      { input: '3 3 5', expectedOutput: '3', hidden: false },
      { input: '2 3 6', expectedOutput: '6', hidden: false },
      { input: '3 3 1', expectedOutput: '1', hidden: true },
      { input: '5 5 10', expectedOutput: '4', hidden: true }
    ],
    starterCode: {
      python: 'def kth_smallest(m, n, k):\n    # Use binary search on the answer\n    pass',
      java: 'public int kthSmallest(int m, int n, int k) {\n    // Use binary search on the answer\n    return 0;\n}',
      c: 'int kthSmallest(int m, int n, int k) {\n    return 0;\n}',
      cpp: 'int kthSmallest(int m, int n, int k) {\n    // Use binary search on the answer\n    return 0;\n}'
    }
  },

  {
    id: 'kse-h5', title: 'Kth Smallest with Range Update Queries', difficulty: 'Hard',
    description: 'Given an array of integers, process a sequence of operations: either ADD val to all elements in range [l, r], or QUERY k to find the kth smallest element in the current array. Use a BIT with lazy propagation or a segment tree to handle range updates efficiently.',
    constraints: ['1 <= nums.length <= 10^5', '1 <= operations <= 10^4', '1 <= k <= nums.length', 'ADD operations: 1 <= l <= r <= nums.length, -10^4 <= val <= 10^4'],
    examples: [
      { input: 'nums = [3, 1, 4, 2], ops = ["QUERY 2", "ADD 1 3 2", "QUERY 2"]', output: '[2, 3]', explanation: 'Initial sorted: [1,2,3,4]. QUERY 2=2. After ADD 2 to indices 1-3: [5,3,6,2]. Sorted: [2,3,5,6]. QUERY 2=3.' },
      { input: 'nums = [5, 1, 3], ops = ["QUERY 1", "ADD 1 2 4", "QUERY 1"]', output: '[1, 3]', explanation: 'Initial sorted: [1,3,5]. QUERY 1=1. After ADD 4 to indices 1-2: [9,5,3]. Sorted: [3,5,9]. QUERY 1=3.' }
    ],
    testCases: [
      { input: '4\n3 1 4 2\n3\nQUERY 2\nADD 1 3 2\nQUERY 2', expectedOutput: '2 3', hidden: false },
      { input: '3\n5 1 3\n3\nQUERY 1\nADD 1 2 4\nQUERY 1', expectedOutput: '1 3', hidden: false },
      { input: '5\n2 4 6 8 10\n3\nQUERY 3\nADD 2 4 -3\nQUERY 3', expectedOutput: '6 5', hidden: true },
      { input: '3\n1 2 3\n4\nQUERY 2\nADD 1 3 5\nADD 2 3 -2\nQUERY 2', expectedOutput: '2 5', hidden: true }
    ],
    starterCode: {
      python: 'def process_operations(nums, operations):\n    # Use segment tree or BIT with lazy propagation\n    pass',
      java: 'public int[] processOperations(int[] nums, String[] operations) {\n    // Use segment tree or BIT with lazy propagation\n    return new int[]{}\n}',
      c: 'int* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> processOperations(vector<int>& nums, vector<string>& operations) {\n    // Use segment tree or BIT with lazy propagation\n    return {};\n}'
    }
  },
];
