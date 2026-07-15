export const binarySearchProblems = [
  // --- EASY ---
  {
    id: 'bs-e1', title: 'Classic Binary Search', difficulty: 'Easy',
    description: 'Given a sorted array `nums` and a target, return its index. Return `-1` if not found. Must run in O(log n).',
    constraints: ['1 <= nums.length <= 10^4'],
    examples: [
      { input: 'nums = [-1,0,3,5,9,12], target = 9', output: '4', explanation: '9 is at index 4' },
      { input: 'nums = [-1,0,3,5,9,12], target = 2', output: '-1', explanation: '2 does not exist in nums so return -1' }
    ],
    testCases: [
      { input: '6\n-1 0 3 5 9 12\n9', expectedOutput: '4', hidden: false },
      { input: '6\n-1 0 3 5 9 12\n2', expectedOutput: '-1', hidden: false }
    ],
    starterCode: {
      python: 'def binary_search(nums, target):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\ntarget = int(input())\nprint(binary_search(nums, target))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int binarySearch(int[] nums, int target) {\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            int target = sc.nextInt();\n            System.out.println(binarySearch(nums, target));\n        }\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint binarySearch(int* nums, int numsSize, int target) {\n    return -1;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums[i]) != 1) return 0;\n    }\n    int target;\n    if (scanf("%d", &target) != 1) return 0;\n    printf("%d\\n", binarySearch(nums, n, target));\n    free(nums);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint binarySearch(vector<int>& nums, int target) {\n    return -1;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        int target;\n        cin >> target;\n        cout << binarySearch(nums, target) << "\\n";\n    }\n    return 0;\n}'
    }
  },
  {
    id: 'bs-e2', title: 'First Position of Target', difficulty: 'Easy',
    description: 'Given a sorted array with possible duplicates, return the index of the **first** occurrence of the target. Return `-1` if not found.',
    constraints: ['1 <= nums.length <= 10^4'],
    examples: [
      { input: 'nums = [1,2,2,2,3], target = 2', output: '1', explanation: 'First 2 is at index 1' },
      { input: 'nums = [1,2,2,2,3], target = 4', output: '-1', explanation: 'Target 4 is not found in the array' }
    ],
    testCases: [
      { input: '5\n1 2 2 2 3\n2', expectedOutput: '1', hidden: false },
      { input: '5\n1 2 2 2 3\n4', expectedOutput: '-1', hidden: false }
    ],
    starterCode: {
      python: 'def first_position(nums, target):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\ntarget = int(input())\nprint(first_position(nums, target))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int firstPosition(int[] nums, int target) {\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            int target = sc.nextInt();\n            System.out.println(firstPosition(nums, target));\n        }\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint firstPosition(int* nums, int numsSize, int target) {\n    return -1;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums[i]) != 1) return 0;\n    }\n    int target;\n    if (scanf("%d", &target) != 1) return 0;\n    printf("%d\\n", firstPosition(nums, n, target));\n    free(nums);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint firstPosition(vector<int>& nums, int target) {\n    return -1;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        int target;\n        cin >> target;\n        cout << firstPosition(nums, target) << "\\n";\n    }\n    return 0;\n}'
    }
  },
  {
    id: 'bs-e3', title: 'Last Position of Target', difficulty: 'Easy',
    description: 'Given a sorted array with possible duplicates, return the index of the **last** occurrence of the target. Return `-1` if not found.',
    constraints: ['1 <= nums.length <= 10^4'],
    examples: [
      { input: 'nums = [1,2,2,2,3], target = 2', output: '3', explanation: 'Last 2 is at index 3' },
      { input: 'nums = [1,2,2,2,3], target = 4', output: '-1', explanation: 'Target not found' }
    ],
    testCases: [
      { input: '5\n1 2 2 2 3\n2', expectedOutput: '3', hidden: false },
      { input: '5\n1 2 2 2 3\n4', expectedOutput: '-1', hidden: false }
    ],
    starterCode: {
      python: 'def last_position(nums, target):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\ntarget = int(input())\nprint(last_position(nums, target))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int lastPosition(int[] nums, int target) {\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            int target = sc.nextInt();\n            System.out.println(lastPosition(nums, target));\n        }\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint lastPosition(int* nums, int numsSize, int target) {\n    return -1;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums[i]) != 1) return 0;\n    }\n    int target;\n    if (scanf("%d", &target) != 1) return 0;\n    printf("%d\\n", lastPosition(nums, n, target));\n    free(nums);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint lastPosition(vector<int>& nums, int target) {\n    return -1;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        int target;\n        cin >> target;\n        cout << lastPosition(nums, target) << "\\n";\n    }\n    return 0;\n}'
    }
  },
  {
    id: 'bs-e4', title: 'Square Root (Integer)', difficulty: 'Easy',
    description: 'Given a non-negative integer `x`, return the integer square root (floor) using binary search. Do not use `sqrt()`.',
    constraints: ['0 <= x <= 10^9'],
    examples: [
      { input: 'x = 8', output: '2', explanation: 'Square root of 8 is 2.82842..., floor is 2' },
      { input: 'x = 0', output: '0', explanation: 'Square root of 0 is 0' }
    ],
    testCases: [
      { input: '8', expectedOutput: '2', hidden: false },
      { input: '0', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: 'def integer_sqrt(x):\n    pass\n\nx = int(input())\nprint(integer_sqrt(x))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int integerSqrt(int x) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int x = sc.nextInt();\n            System.out.println(integerSqrt(x));\n        }\n    }\n}',
      c: '#include <stdio.h>\n\nint integerSqrt(int x) {\n    return 0;\n}\n\nint main() {\n    int x;\n    if (scanf("%d", &x) == 1) {\n        printf("%d\\n", integerSqrt(x));\n    }\n    return 0;\n}',
      cpp: '#include <iostream>\n\nusing namespace std;\n\nint integerSqrt(int x) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int x;\n    if (cin >> x) {\n        cout << integerSqrt(x) << "\\n";\n    }\n    return 0;\n}'
    }
  },
  {
    id: 'bs-e5', title: 'Count Occurrences in Sorted Array', difficulty: 'Easy',
    description: 'Given a sorted array and a target, return the number of times target appears, using binary search.',
    constraints: ['1 <= nums.length <= 10^4'],
    examples: [
      { input: 'nums = [1,1,2,2,2,3], target = 2', output: '3', explanation: '2 appears 3 times' },
      { input: 'nums = [1,1,2,2,2,3], target = 4', output: '0', explanation: '4 is not present' }
    ],
    testCases: [
      { input: '6\n1 1 2 2 2 3\n2', expectedOutput: '3', hidden: false },
      { input: '6\n1 1 2 2 2 3\n4', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: 'def count_occurrences(nums, target):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\ntarget = int(input())\nprint(count_occurrences(nums, target))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int countOccurrences(int[] nums, int target) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            int target = sc.nextInt();\n            System.out.println(countOccurrences(nums, target));\n        }\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint countOccurrences(int* nums, int numsSize, int target) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums[i]) != 1) return 0;\n    }\n    int target;\n    if (scanf("%d", &target) != 1) return 0;\n    printf("%d\\n", countOccurrences(nums, n, target));\n    free(nums);\n    return 0;\n}',
      cpp: '#include <iostream>\n<vector>\n\nusing namespace std;\n\nint countOccurrences(vector<int>& nums, int target) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        int target;\n        cin >> target;\n        cout << countOccurrences(nums, target) << "\\n";\n    }\n    return 0;\n}'
    }
  },
  // --- MEDIUM ---
  {
    id: 'bs-m1', title: 'Search in Rotated Sorted Array', difficulty: 'Medium',
    description: 'Given a rotated sorted array (no duplicates) and a target, return its index. Run in O(log n). Return `-1` if not found.',
    constraints: ['1 <= nums.length <= 10^4'],
    examples: [
      { input: 'nums = [4,5,6,7,0,1,2], target = 0', output: '4', explanation: '0 is at index 4' },
      { input: 'nums = [4,5,6,7,0,1,2], target = 3', output: '-1', explanation: '3 is not in the array' }
    ],
    testCases: [
      { input: '7\n4 5 6 7 0 1 2\n0', expectedOutput: '4', hidden: false },
      { input: '7\n4 5 6 7 0 1 2\n3', expectedOutput: '-1', hidden: false }
    ],
    starterCode: {
      python: 'def search_rotated(nums, target):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\ntarget = int(input())\nprint(search_rotated(nums, target))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int searchRotated(int[] nums, int target) {\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            int target = sc.nextInt();\n            System.out.println(searchRotated(nums, target));\n        }\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint searchRotated(int* nums, int numsSize, int target) {\n    return -1;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums[i]) != 1) return 0;\n    }\n    int target;\n    if (scanf("%d", &target) != 1) return 0;\n    printf("%d\\n", searchRotated(nums, n, target));\n    free(nums);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint searchRotated(vector<int>& nums, int target) {\n    return -1;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        int target;\n        cin >> target;\n        cout << searchRotated(nums, target) << "\\n";\n    }\n    return 0;\n}'
    }
  },
  {
    id: 'bs-m2', title: 'Find Minimum in Rotated Array', difficulty: 'Medium',
    description: 'Given a rotated sorted array (no duplicates), find and return the minimum element. Must run in O(log n).',
    constraints: ['1 <= nums.length <= 10^4'],
    examples: [
      { input: 'nums = [3,4,5,1,2]', output: '1', explanation: 'Minimum element is 1' },
      { input: 'nums = [4,5,6,7,0,1,2]', output: '0', explanation: 'Minimum element is 0' }
    ],
    testCases: [
      { input: '5\n3 4 5 1 2', expectedOutput: '1', hidden: false },
      { input: '7\n4 5 6 7 0 1 2', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: 'def find_minimum(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(find_minimum(nums))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int findMinimum(int[] nums) {\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            System.out.println(findMinimum(nums));\n        }\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint findMinimum(int* nums, int numsSize) {\n    return -1;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums[i]) != 1) return 0;\n    }\n    printf("%d\\n", findMinimum(nums, n));\n    free(nums);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint findMinimum(vector<int>& nums) {\n    return -1;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        cout << findMinimum(nums) << "\\n";\n    }\n    return 0;\n}'
    }
  },
  {
    id: 'bs-m3', title: 'Search a 2D Matrix', difficulty: 'Medium',
    description: 'Given an `m x n` matrix where rows are sorted and the first element of each row is greater than the last of the previous, return `true` if target exists.',
    constraints: ['1 <= m, n <= 100'],
    examples: [
      { input: 'matrix = [[1,3,5,7],[10,11,16,20]], target = 3', output: 'true', explanation: '3 exists in the matrix.' },
      { input: 'matrix = [[1,3,5,7],[10,11,16,20]], target = 13', output: 'false', explanation: '13 is not found.' }
    ],
    testCases: [
      { input: '2 4\n1 3 5 7\n10 11 16 20\n3', expectedOutput: 'true', hidden: false },
      { input: '2 4\n1 3 5 7\n10 11 16 20\n13', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: 'def search_matrix(matrix, target):\n    pass\n\nm, n = map(int, input().split())\nmatrix = [list(map(int, input().split())) for _ in range(m)]\ntarget = int(input())\nprint(str(search_matrix(matrix, target)).lower())',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static boolean searchMatrix(int[][] matrix, int target) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int m = sc.nextInt();\n            int n = sc.nextInt();\n            int[][] matrix = new int[m][n];\n            for (int i = 0; i < m; i++) {\n                for (int j = 0; j < n; j++) {\n                    matrix[i][j] = sc.nextInt();\n                }\n            }\n            int target = sc.nextInt();\n            System.out.println(searchMatrix(matrix, target));\n        }\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n\nbool searchMatrix(int** matrix, int matrixSize, int matrixColSize, int target) {\n    return false;\n}\n\nint main() {\n    int m, n;\n    if (scanf("%d %d", &m, &n) != 2) return 0;\n    int** matrix = (int**)malloc(m * sizeof(int*));\n    for (int i = 0; i < m; i++) {\n        matrix[i] = (int*)malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) {\n            if (scanf("%d", &matrix[i][j]) != 1) return 0;\n        }\n    }\n    int target;\n    if (scanf("%d", &target) != 1) return 0;\n    printf("%s\\n", searchMatrix(matrix, m, n, target) ? "true" : "false");\n    for (int i = 0; i < m; i++) free(matrix[i]);\n    free(matrix);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nbool searchMatrix(vector<vector<int>>& matrix, int target) {\n    return false;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int m, n;\n    if (cin >> m >> n) {\n        vector<vector<int>> matrix(m, vector<int>(n));\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                cin >> matrix[i][j];\n            }\n        }\n        int target;\n        cin >> target;\n        cout << (searchMatrix(matrix, target) ? "true" : "false") << "\\n";\n    }\n    return 0;\n}'
    }
  },
  {
    id: 'bs-m4', title: 'Koko Eating Bananas', difficulty: 'Medium',
    description: 'Koko has `n` piles of bananas and `h` hours. Find the minimum eating speed `k` (bananas/hour) such that she can eat all bananas within `h` hours.',
    constraints: ['1 <= piles.length <= 10^4', 'piles.length <= h <= 10^9'],
    examples: [
      { input: 'piles = [3,6,7,11], h = 8', output: '4', explanation: 'Speed 4 allows eating all within 8 hours' },
      { input: 'piles = [30,11,23,4,20], h = 5', output: '30', explanation: 'Speed 30 is needed to finish in 5 hours' }
    ],
    testCases: [
      { input: '4\n3 6 7 11\n8', expectedOutput: '4', hidden: false },
      { input: '5\n30 11 23 4 20\n5', expectedOutput: '30', hidden: false }
    ],
    starterCode: {
      python: 'def min_eating_speed(piles, h):\n    pass\n\nn = int(input())\npiles = list(map(int, input().split()))\nh = int(input())\nprint(min_eating_speed(piles, h))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int minEatingSpeed(int[] piles, int h) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] piles = new int[n];\n            for (int i = 0; i < n; i++) {\n                piles[i] = sc.nextInt();\n            }\n            int h = sc.nextInt();\n            System.out.println(minEatingSpeed(piles, h));\n        }\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint minEatingSpeed(int* piles, int pilesSize, int h) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* piles = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &piles[i]) != 1) return 0;\n    }\n    int h;\n    if (scanf("%d", &h) != 1) return 0;\n    printf("%d\\n", minEatingSpeed(piles, n, h));\n    free(piles);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint minEatingSpeed(vector<int>& piles, int h) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> piles(n);\n        for (int i = 0; i < n; i++) {\n            cin >> piles[i];\n        }\n        int h;\n        cin >> h;\n        cout << minEatingSpeed(piles, h) << "\\n";\n    }\n    return 0;\n}'
    }
  },
  {
    id: 'bs-m5', title: 'Peak Element', difficulty: 'Medium',
    description: 'Given an array where `nums[i] != nums[i+1]`, find a peak element (greater than its neighbours) and return its index. Run in O(log n).',
    constraints: ['1 <= nums.length <= 10^4'],
    examples: [
      { input: 'nums = [1,2,3,1]', output: '2', explanation: '3 is a peak at index 2' },
      { input: 'nums = [1,2,1,3,5,6,4]', output: '5', explanation: '6 is a peak at index 5' }
    ],
    testCases: [
      { input: '4\n1 2 3 1', expectedOutput: '2', hidden: false },
      { input: '7\n1 2 1 3 5 6 4', expectedOutput: '5', hidden: false }
    ],
    starterCode: {
      python: 'def find_peak(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(find_peak(nums))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int findPeak(int[] nums) {\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            System.out.println(findPeak(nums));\n        }\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint findPeak(int* nums, int numsSize) {\n    return -1;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums[i]) != 1) return 0;\n    }\n    printf("%d\\n", findPeak(nums, n));\n    free(nums);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint findPeak(vector<int>& nums) {\n    return -1;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        cout << findPeak(nums) << "\\n";\n    }\n    return 0;\n}'
    }
  },
  // --- HARD ---
  {
    id: 'bs-h1', title: 'Median of Two Sorted Arrays', difficulty: 'Hard',
    description: 'Given two sorted arrays of sizes `m` and `n`, return the median of the combined sorted array. Must run in O(log(m+n)).',
    constraints: ['0 <= m, n <= 1000', 'm + n >= 1'],
    examples: [
      { input: 'nums1 = [1,3], nums2 = [2]', output: '2.00000', explanation: 'Merged is [1,2,3], median is 2.' },
      { input: 'nums1 = [1,2], nums2 = [3,4]', output: '2.50000', explanation: 'Merged is [1,2,3,4], median is (2+3)/2 = 2.5' }
    ],
    testCases: [
      { input: '2\n1 3\n1\n2', expectedOutput: '2.00000', hidden: false },
      { input: '2\n1 2\n2\n3 4', expectedOutput: '2.50000', hidden: false }
    ],
    starterCode: {
      python: 'def find_median(nums1, nums2):\n    pass\n\nm = int(input())\nnums1 = list(map(int, input().split())) if m > 0 else []\nn = int(input())\nnums2 = list(map(int, input().split())) if n > 0 else []\nres = find_median(nums1, nums2)\nprint(f"{float(res):.5f}")',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static double findMedian(int[] nums1, int[] nums2) {\n        return 0.0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int m = sc.nextInt();\n            int[] nums1 = new int[m];\n            for (int i = 0; i < m; i++) {\n                nums1[i] = sc.nextInt();\n            }\n            int n = sc.nextInt();\n            int[] nums2 = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums2[i] = sc.nextInt();\n            }\n            System.out.printf(Locale.US, "%.5f\\n", findMedian(nums1, nums2));\n        }\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\ndouble findMedian(int* nums1, int nums1Size, int* nums2, int nums2Size) {\n    return 0.0;\n}\n\nint main() {\n    int m;\n    if (scanf("%d", &m) != 1) return 0;\n    int* nums1 = (int*)malloc(m * sizeof(int));\n    for (int i = 0; i < m; i++) {\n        if (scanf("%d", &nums1[i]) != 1) return 0;\n    }\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums2 = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums2[i]) != 1) return 0;\n    }\n    printf("%.5f\\n", findMedian(nums1, m, nums2, n));\n    free(nums1);\n    free(nums2);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n#include <iomanip>\n\nusing namespace std;\n\ndouble findMedian(vector<int>& nums1, vector<int>& nums2) {\n    return 0.0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int m;\n    if (cin >> m) {\n        vector<int> nums1(m);\n        for (int i = 0; i < m; i++) {\n            cin >> nums1[i];\n        }\n        int n;\n        cin >> n;\n        vector<int> nums2(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums2[i];\n        }\n        cout << fixed << setprecision(5) << findMedian(nums1, nums2) << "\\n";\n    }\n    return 0;\n}'
    }
  },
  {
    id: 'bs-h2', title: 'Split Array Largest Sum', difficulty: 'Hard',
    description: 'Given an array and an integer `k`, split the array into `k` non-empty subarrays such that the largest subarray sum is minimized. Return that minimum value.',
    constraints: ['1 <= nums.length <= 1000', '1 <= k <= min(50, nums.length)'],
    examples: [
      { input: 'nums = [7,2,5,10,8], k = 2', output: '18', explanation: 'Split into [7,2,5] and [10,8]. Max sum is 18.' },
      { input: 'nums = [1,2,3,4,5], k = 2', output: '9', explanation: 'Split into [1,2,3] and [4,5]. Max sum is 9.' }
    ],
    testCases: [
      { input: '5\n7 2 5 10 8\n2', expectedOutput: '18', hidden: false },
      { input: '5\n1 2 3 4 5\n2', expectedOutput: '9', hidden: false }
    ],
    starterCode: {
      python: 'def split_array(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nprint(split_array(nums, k))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int splitArray(int[] nums, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            int k = sc.nextInt();\n            System.out.println(splitArray(nums, k));\n        }\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint splitArray(int* nums, int numsSize, int k) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums[i]) != 1) return 0;\n    }\n    int k;\n    if (scanf("%d", &k) != 1) return 0;\n    printf("%d\\n", splitArray(nums, n, k));\n    free(nums);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint splitArray(vector<int>& nums, int k) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        int k;\n        cin >> k;\n        cout << splitArray(nums, k) << "\\n";\n    }\n    return 0;\n}'
    }
  },
  {
    id: 'bs-h3', title: 'Find in Mountain Array', difficulty: 'Hard',
    description: 'Given a mountain array (values increase then decrease), return the index of the target. Return `-1` if not found. Must use O(log n) searches.',
    constraints: ['3 <= arr.length <= 10^4'],
    examples: [
      { input: 'arr = [1,2,3,4,5,3,1], target = 3', output: '2', explanation: 'First occurrence of 3 is at index 2' },
      { input: 'arr = [0,1,2,4,2,1], target = 3', output: '-1', explanation: '3 is not present in the array' }
    ],
    testCases: [
      { input: '7\n1 2 3 4 5 3 1\n3', expectedOutput: '2', hidden: false },
      { input: '6\n0 1 2 4 2 1\n3', expectedOutput: '-1', hidden: false }
    ],
    starterCode: {
      python: 'def find_in_mountain(arr, target):\n    pass\n\nn = int(input())\narr = list(map(int, input().split()))\ntarget = int(input())\nprint(find_in_mountain(arr, target))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int findInMountain(int[] arr, int target) {\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] arr = new int[n];\n            for (int i = 0; i < n; i++) {\n                arr[i] = sc.nextInt();\n            }\n            int target = sc.nextInt();\n            System.out.println(findInMountain(arr, target));\n        }\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint findInMountain(int* arr, int arrSize, int target) {\n    return -1;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* arr = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &arr[i]) != 1) return 0;\n    }\n    int target;\n    if (scanf("%d", &target) != 1) return 0;\n    printf("%d\\n", findInMountain(arr, n, target));\n    free(arr);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint findInMountain(vector<int>& arr, int target) {\n    return -1;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> arr(n);\n        for (int i = 0; i < n; i++) {\n            cin >> arr[i];\n        }\n        int target;\n        cin >> target;\n        cout << findInMountain(arr, target) << "\\n";\n    }\n    return 0;\n}'
    }
  },
  {
    id: 'bs-h4', title: 'Smallest Divisor Given Threshold', difficulty: 'Hard',
    description: 'Given an array and a threshold, find the smallest divisor such that the sum of `ceil(arr[i]/divisor)` for all `i` is <= threshold.',
    constraints: ['1 <= arr.length <= 5*10^4'],
    examples: [
      { input: 'arr = [1,2,5,9], threshold = 6', output: '5', explanation: 'Divisor 5 gives sum 1+1+1+2 = 5 <= 6.' },
      { input: 'arr = [44,22,33,11,1], threshold = 5', output: '44', explanation: 'Divisor 44 gives sum 1+1+1+1+1 = 5 <= 5.' }
    ],
    testCases: [
      { input: '4\n1 2 5 9\n6', expectedOutput: '5', hidden: false },
      { input: '5\n44 22 33 11 1\n5', expectedOutput: '44', hidden: false }
    ],
    starterCode: {
      python: 'def smallest_divisor(arr, threshold):\n    pass\n\nn = int(input())\narr = list(map(int, input().split()))\nt = int(input())\nprint(smallest_divisor(arr, t))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int smallestDivisor(int[] arr, int threshold) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] arr = new int[n];\n            for (int i = 0; i < n; i++) {\n                arr[i] = sc.nextInt();\n            }\n            int threshold = sc.nextInt();\n            System.out.println(smallestDivisor(arr, threshold));\n        }\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint smallestDivisor(int* arr, int arrSize, int threshold) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* arr = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &arr[i]) != 1) return 0;\n    }\n    int threshold;\n    if (scanf("%d", &threshold) != 1) return 0;\n    printf("%d\\n", smallestDivisor(arr, n, threshold));\n    free(arr);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint smallestDivisor(vector<int>& arr, int threshold) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> arr(n);\n        for (int i = 0; i < n; i++) {\n            cin >> arr[i];\n        }\n        int threshold;\n        cin >> threshold;\n        cout << smallestDivisor(arr, threshold) << "\\n";\n    }\n    return 0;\n}'
    }
  },
  {
    id: 'bs-h5', title: 'Search in Rotated Array with Duplicates', difficulty: 'Hard',
    description: 'Given a rotated sorted array that may contain duplicates and a target, return `true` if target exists.',
    constraints: ['1 <= nums.length <= 5000'],
    examples: [
      { input: 'nums = [2,5,6,0,0,1,2], target = 0', output: 'true', explanation: '0 is in the array.' },
      { input: 'nums = [2,5,6,0,0,1,2], target = 3', output: 'false', explanation: '3 is not in the array.' }
    ],
    testCases: [
      { input: '7\n2 5 6 0 0 1 2\n0', expectedOutput: 'true', hidden: false },
      { input: '7\n2 5 6 0 0 1 2\n3', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: 'def search_rotated_dups(nums, target):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\ntarget = int(input())\nprint(str(search_rotated_dups(nums, target)).lower())',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static boolean searchRotatedDups(int[] nums, int target) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            int target = sc.nextInt();\n            System.out.println(searchRotatedDups(nums, target));\n        }\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n\nbool searchRotatedDups(int* nums, int numsSize, int target) {\n    return false;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums[i]) != 1) return 0;\n    }\n    int target;\n    if (scanf("%d", &target) != 1) return 0;\n    printf("%s\\n", searchRotatedDups(nums, n, target) ? "true" : "false");\n    free(nums);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nbool searchRotatedDups(vector<int>& nums, int target) {\n    return false;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        int target;\n        cin >> target;\n        cout << (searchRotatedDups(nums, target) ? "true" : "false") << "\\n";\n    }\n    return 0;\n}'
    }
  }
];