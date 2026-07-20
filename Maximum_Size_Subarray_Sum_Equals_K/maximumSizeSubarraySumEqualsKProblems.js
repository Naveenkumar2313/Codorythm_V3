export const maximumSizeSubarraySumEqualsKProblems = [
  // Easy Problems
  {
    id: "msssk-e1",
    title: "Subarray Sum Equals K",
    difficulty: "Easy",
    description:
      "Given an integer array nums and an integer k, determine the length of the longest contiguous subarray whose sum equals k.",
    constraints: [
      "1 ≤ nums.length ≤ 10⁵",
      "-10⁴ ≤ nums[i] ≤ 10⁴",
      "-10⁹ ≤ k ≤ 10⁹"
    ],
    examples: [
      {
        input: "nums = [1, -1, 5, -2, 3], k = 3",
        output: "4",
        explanation: "The subarray [1, -1, 5, -2] has sum 3 and length 4."
      }
    ],
    testCases: [
      {
        input: "[1,-1,5,-2,3], 3",
        expectedOutput: "4"
      },
      {
        input: "[-2,-1,2,1], 1",
        expectedOutput: "2"
      }
    ],
    starterCode: {
      python:
`def max_subarray_len(nums, k):
    pass`,
      java:
`public int maxSubArrayLen(int[] nums, int k) {

}`,
      c:
`int maxSubArrayLen(int nums[], int n, int k) {

}`,
      cpp:
`int maxSubArrayLen(vector<int>& nums, int k) {

}`
    }
  },

  {
    id: "msssk-e2",
    title: "Entire Array Equals K",
    difficulty: "Easy",
    description:
      "Return the length of the array if the entire array sums to k; otherwise return the longest valid subarray.",
    constraints: [
      "1 ≤ n ≤ 10⁵"
    ],
    examples: [
      {
        input: "nums = [2,2,2], k = 6",
        output: "3",
        explanation: "The whole array sums to 6."
      }
    ],
    testCases: [
      {
        input: "[2,2,2], 6",
        expectedOutput: "3"
      },
      {
        input: "[1,2,3], 5",
        expectedOutput: "2"
      }
    ],
    starterCode: {
      python:
`def longest_subarray(nums, k):
    pass`,
      java:
`public int longestSubarray(int[] nums, int k) {

}`,
      c:
`int longestSubarray(int nums[], int n, int k) {

}`,
      cpp:
`int longestSubarray(vector<int>& nums, int k) {

}`
    }
  },

  {
    id: "msssk-e3",
    title: "Single Element Target",
    difficulty: "Easy",
    description:
      "Find the maximum length of a subarray summing to k when a valid answer may consist of a single element.",
    constraints: [
      "1 ≤ n ≤ 10⁵"
    ],
    examples: [
      {
        input: "nums = [5,1,2], k = 5",
        output: "1",
        explanation: "The first element alone equals k."
      }
    ],
    testCases: [
      {
        input: "[5,1,2], 5",
        expectedOutput: "1"
      },
      {
        input: "[4,3,2], 6",
        expectedOutput: "2"
      }
    ],
    starterCode: {
      python:
`def max_length(nums, k):
    pass`,
      java:
`public int maxLength(int[] nums, int k) {

}`,
      c:
`int maxLength(int nums[], int n, int k) {

}`,
      cpp:
`int maxLength(vector<int>& nums, int k) {

}`
    }
  },

  {
    id: "msssk-e4",
    title: "Zero Sum Subarray",
    difficulty: "Easy",
    description:
      "Find the longest contiguous subarray whose sum equals zero.",
    constraints: [
      "1 ≤ n ≤ 10⁵"
    ],
    examples: [
      {
        input: "nums = [1,-1,3,-3,2]",
        output: "4",
        explanation: "The subarray [1,-1,3,-3] sums to zero."
      }
    ],
    testCases: [
      {
        input: "[1,-1,3,-3,2]",
        expectedOutput: "4"
      },
      {
        input: "[0,0,0]",
        expectedOutput: "3"
      }
    ],
    starterCode: {
      python:
`def zero_sum(nums):
    pass`,
      java:
`public int zeroSum(int[] nums) {

}`,
      c:
`int zeroSum(int nums[], int n) {

}`,
      cpp:
`int zeroSum(vector<int>& nums) {

}`
    }
  },

  {
    id: "msssk-e5",
    title: "Negative Numbers Included",
    difficulty: "Easy",
    description:
      "Return the longest subarray whose sum equals k in an array containing both positive and negative numbers.",
    constraints: [
      "1 ≤ n ≤ 10⁵"
    ],
    examples: [
      {
        input: "nums = [-1,-1,1,2,-1], k = 1",
        output: "4",
        explanation: "The subarray [-1,1,2,-1] sums to 1."
      }
    ],
    testCases: [
      {
        input: "[-1,-1,1,2,-1], 1",
        expectedOutput: "4"
      },
      {
        input: "[2,-2,2,-2], 0",
        expectedOutput: "4"
      }
    ],
    starterCode: {
      python:
`def longest(nums, k):
    pass`,
      java:
`public int longest(int[] nums, int k) {

}`,
      c:
`int longest(int nums[], int n, int k) {

}`,
      cpp:
`int longest(vector<int>& nums, int k) {

}`
    }
  },

  // Medium Problems
    {
    id: "msssk-m1",
    title: "Longest Target Sum Window",
    difficulty: "Medium",
    description:
      "Given an integer array nums and an integer k, determine the maximum length of a contiguous subarray whose sum equals k.",
    constraints: [
      "1 ≤ nums.length ≤ 2 × 10⁵",
      "-10⁴ ≤ nums[i] ≤ 10⁴",
      "-10⁹ ≤ k ≤ 10⁹"
    ],
    examples: [
      {
        input: "nums = [1,2,-2,4,-4,2], k = 3",
        output: "5",
        explanation: "The subarray [1,2,-2,4,-4] has sum 3."
      }
    ],
    testCases: [
      {
        input: "[1,2,-2,4,-4,2], 3",
        expectedOutput: "5"
      },
      {
        input: "[3,1,-1,2], 3",
        expectedOutput: "3"
      }
    ],
    starterCode: {
      python:
`def longest_target_sum(nums, k):
    pass`,
      java:
`public int longestTargetSum(int[] nums, int k) {

}`,
      c:
`int longestTargetSum(int nums[], int n, int k) {

}`,
      cpp:
`int longestTargetSum(vector<int>& nums, int k) {

}`
    }
  },

  {
    id: "msssk-m2",
    title: "Longest Balanced Change",
    difficulty: "Medium",
    description:
      "Given daily profit and loss values, find the longest continuous period whose total change equals k.",
    constraints: [
      "1 ≤ n ≤ 2 × 10⁵"
    ],
    examples: [
      {
        input: "changes = [4,-2,-1,3,-4,2], k = 0",
        output: "5",
        explanation: "The subarray [-2,-1,3,-4,2] sums to 0."
      }
    ],
    testCases: [
      {
        input: "[4,-2,-1,3,-4,2], 0",
        expectedOutput: "5"
      },
      {
        input: "[2,-2,2,-2,2], 0",
        expectedOutput: "4"
      }
    ],
    starterCode: {
      python:
`def balanced_change(changes, k):
    pass`,
      java:
`public int balancedChange(int[] changes, int k) {

}`,
      c:
`int balancedChange(int changes[], int n, int k) {

}`,
      cpp:
`int balancedChange(vector<int>& changes, int k) {

}`
    }
  },

  {
    id: "msssk-m3",
    title: "Longest Zero Balance",
    difficulty: "Medium",
    description:
      "Return the length of the longest subarray whose cumulative sum is zero.",
    constraints: [
      "1 ≤ n ≤ 2 × 10⁵"
    ],
    examples: [
      {
        input: "nums = [6,-1,-3,4,-2,2,4,6,-12,-7]",
        output: "5",
        explanation: "The subarray [-1,-3,4,-2,2] sums to zero."
      }
    ],
    testCases: [
      {
        input: "[6,-1,-3,4,-2,2,4,6,-12,-7]",
        expectedOutput: "5"
      },
      {
        input: "[1,-1,1,-1]",
        expectedOutput: "4"
      }
    ],
    starterCode: {
      python:
`def longest_zero_balance(nums):
    pass`,
      java:
`public int longestZeroBalance(int[] nums) {

}`,
      c:
`int longestZeroBalance(int nums[], int n) {

}`,
      cpp:
`int longestZeroBalance(vector<int>& nums) {

}`
    }
  },

  {
    id: "msssk-m4",
    title: "Employee Workload Balance",
    difficulty: "Medium",
    description:
      "Employee workloads are represented as positive and negative adjustments. Find the longest continuous period where the total workload equals k.",
    constraints: [
      "1 ≤ n ≤ 2 × 10⁵"
    ],
    examples: [
      {
        input: "work = [5,-2,3,-1,-2,2], k = 3",
        output: "5",
        explanation: "The subarray [-2,3,-1,-2,2] sums to 0? Actually [5,-2,3,-1,-2] sums to 3 with length 5."
      }
    ],
    testCases: [
      {
        input: "[5,-2,3,-1,-2,2], 3",
        expectedOutput: "5"
      },
      {
        input: "[2,1,-1,1], 2",
        expectedOutput: "3"
      }
    ],
    starterCode: {
      python:
`def workload_balance(work, k):
    pass`,
      java:
`public int workloadBalance(int[] work, int k) {

}`,
      c:
`int workloadBalance(int work[], int n, int k) {

}`,
      cpp:
`int workloadBalance(vector<int>& work, int k) {

}`
    }
  },

  {
    id: "msssk-m5",
    title: "Longest Transaction Segment",
    difficulty: "Medium",
    description:
      "Given transaction values, return the maximum-length contiguous segment whose total equals k.",
    constraints: [
      "1 ≤ n ≤ 2 × 10⁵"
    ],
    examples: [
      {
        input: "transactions = [10,-3,-2,5,-5,3], k = 5",
        output: "5",
        explanation: "The subarray [-3,-2,5,-5,10] is not contiguous. The subarray [10,-3,-2,5,-5] sums to 5 and has length 5."
      }
    ],
    testCases: [
      {
        input: "[10,-3,-2,5,-5,3], 5",
        expectedOutput: "5"
      },
      {
        input: "[1,2,3,-3,2], 3",
        expectedOutput: "4"
      }
    ],
    starterCode: {
      python:
`def longest_transaction_segment(transactions, k):
    pass`,
      java:
`public int longestTransactionSegment(int[] transactions, int k) {

}`,
      c:
`int longestTransactionSegment(int transactions[], int n, int k) {

}`,
      cpp:
`int longestTransactionSegment(vector<int>& transactions, int k) {

}`
    }
  },

  // Hard Problems
    {
    id: "msssk-h1",
    title: "Maximum Length Across Multiple Queries",
    difficulty: "Hard",
    description:
      "Given an integer array nums and multiple target values, determine the maximum length subarray whose sum equals each target independently.",
    constraints: [
      "1 ≤ nums.length ≤ 2 × 10⁵",
      "1 ≤ queries.length ≤ 10⁵",
      "-10⁴ ≤ nums[i] ≤ 10⁴"
    ],
    examples: [
      {
        input: "nums = [1,-1,5,-2,3], queries = [3,5]",
        output: "[4,2]",
        explanation: "The longest subarray summing to 3 has length 4, while the longest summing to 5 has length 2."
      }
    ],
    testCases: [
      {
        input: "[1,-1,5,-2,3], [3,5]",
        expectedOutput: "[4,2]"
      },
      {
        input: "[2,-2,2,-2], [0,2]",
        expectedOutput: "[4,3]"
      }
    ],
    starterCode: {
      python:
`def maximum_lengths(nums, queries):
    pass`,
      java:
`public int[] maximumLengths(int[] nums, int[] queries) {

}`,
      c:
`void maximumLengths(int nums[], int n, int queries[], int q, int result[]) {

}`,
      cpp:
`vector<int> maximumLengths(vector<int>& nums, vector<int>& queries) {

}`
    }
  },

  {
    id: "msssk-h2",
    title: "Dynamic Target Sum Queries",
    difficulty: "Hard",
    description:
      "Process multiple queries where each query specifies a different target k. Return the maximum subarray length for every query.",
    constraints: [
      "1 ≤ n ≤ 2 × 10⁵",
      "1 ≤ q ≤ 10⁵"
    ],
    examples: [
      {
        input: "nums = [3,-1,-2,5,-2], queries = [3,0]",
        output: "[5,3]",
        explanation: "The entire array sums to 3, while the longest zero-sum subarray has length 3."
      }
    ],
    testCases: [
      {
        input: "[3,-1,-2,5,-2], [3,0]",
        expectedOutput: "[5,3]"
      },
      {
        input: "[1,-1,1,-1], [0,1]",
        expectedOutput: "[4,3]"
      }
    ],
    starterCode: {
      python:
`def dynamic_queries(nums, queries):
    pass`,
      java:
`public int[] dynamicQueries(int[] nums, int[] queries) {

}`,
      c:
`void dynamicQueries(int nums[], int n, int queries[], int q, int result[]) {

}`,
      cpp:
`vector<int> dynamicQueries(vector<int>& nums, vector<int>& queries) {

}`
    }
  },

  {
    id: "msssk-h3",
    title: "Longest Circular Subarray Sum Equals K",
    difficulty: "Hard",
    description:
      "The array is circular. Find the maximum-length contiguous circular subarray whose sum equals k.",
    constraints: [
      "1 ≤ n ≤ 2 × 10⁵"
    ],
    examples: [
      {
        input: "nums = [4,-2,1,3], k = 5",
        output: "3",
        explanation: "The circular subarray [3,4,-2] has sum 5."
      }
    ],
    testCases: [
      {
        input: "[4,-2,1,3], 5",
        expectedOutput: "3"
      },
      {
        input: "[2,-1,2], 3",
        expectedOutput: "3"
      }
    ],
    starterCode: {
      python:
`def circular_subarray(nums, k):
    pass`,
      java:
`public int circularSubarray(int[] nums, int k) {

}`,
      c:
`int circularSubarray(int nums[], int n, int k) {

}`,
      cpp:
`int circularSubarray(vector<int>& nums, int k) {

}`
    }
  },

  {
    id: "msssk-h4",
    title: "Streaming Prefix Sum Queries",
    difficulty: "Hard",
    description:
      "Numbers arrive one at a time. After each insertion, report the longest subarray encountered so far whose sum equals k.",
    constraints: [
      "1 ≤ stream length ≤ 2 × 10⁵"
    ],
    examples: [
      {
        input: "stream = [1,-1,5,-2,3], k = 3",
        output: "[0,0,0,4,4]",
        explanation: "The maximum valid length is updated after every insertion."
      }
    ],
    testCases: [
      {
        input: "[1,-1,5,-2,3], 3",
        expectedOutput: "[0,0,0,4,4]"
      },
      {
        input: "[2,-2,2], 0",
        expectedOutput: "[0,2,2]"
      }
    ],
    starterCode: {
      python:
`def streaming_queries(stream, k):
    pass`,
      java:
`public int[] streamingQueries(int[] stream, int k) {

}`,
      c:
`void streamingQueries(int stream[], int n, int k, int result[]) {

}`,
      cpp:
`vector<int> streamingQueries(vector<int>& stream, int k) {

}`
    }
  },

  {
    id: "msssk-h5",
    title: "2D Maximum Size Submatrix Sum Equals K",
    difficulty: "Hard",
    description:
      "Given a matrix of integers, find the largest-area rectangular submatrix whose sum equals k.",
    constraints: [
      "1 ≤ rows, cols ≤ 300"
    ],
    examples: [
      {
        input: "matrix = [[1,-1],[2,3]], k = 5",
        output: "2",
        explanation: "The second row forms a rectangle of area 2 with sum 5."
      }
    ],
    testCases: [
      {
        input: "[[1,-1],[2,3]], 5",
        expectedOutput: "2"
      },
      {
        input: "[[1,2],[-1,1]], 3",
        expectedOutput: "2"
      }
    ],
    starterCode: {
      python:
`def max_submatrix(matrix, k):
    pass`,
      java:
`public int maxSubmatrix(int[][] matrix, int k) {

}`,
      c:
`int maxSubmatrix(int matrix[][1000], int rows, int cols, int k) {

}`,
      cpp:
`int maxSubmatrix(vector<vector<int>>& matrix, int k) {

}`
    }
  }
];