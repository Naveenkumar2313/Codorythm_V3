export const LCSProblems = [
  {
  id: 'lcs-e1',
  title: 'Longest Consecutive Sequence',
  difficulty: 'Easy',
  description: 'Given an unsorted array of integers `nums`, return the length of the longest sequence of consecutive integers. The algorithm must run in **O(n)** time.',
  constraints: [
    '0 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9'
  ],
  examples: [
    {
      input: 'nums = [100,4,200,1,3,2]',
      output: '4',
      explanation: 'The longest consecutive sequence is [1,2,3,4], so the answer is 4.'
    },
    {
      input: 'nums = [0,3,7,2,5,8,4,6,0,1]',
      output: '9',
      explanation: 'The longest consecutive sequence is [0,1,2,3,4,5,6,7,8], whose length is 9.'
    }
  ],
  testCases: [
    {
      input: '6\n100 4 200 1 3 2',
      expectedOutput: '4',
      hidden: false
    },
    {
      input: '10\n0 3 7 2 5 8 4 6 0 1',
      expectedOutput: '9',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def longest_consecutive(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(longest_consecutive(nums))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int longestConsecutive(int[] nums) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            System.out.println(longestConsecutive(nums));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint longestConsecutive(int* nums, int numsSize) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums[i]) != 1) return 0;\n    }\n    printf("%d\\n", longestConsecutive(nums, n));\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint longestConsecutive(vector<int>& nums) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        cout << longestConsecutive(nums) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'lcs-e2',
  title: 'Longest Consecutive Sequence with Duplicates',
  difficulty: 'Easy',
  description: 'Given an unsorted array of integers that may contain duplicate values, return the length of the longest sequence of consecutive integers. Duplicate elements should be considered only once. The algorithm must run in **O(n)** time.',
  constraints: [
    '0 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9'
  ],
  examples: [
    {
      input: 'nums = [1,2,2,3]',
      output: '3',
      explanation: 'Ignoring duplicates, the consecutive sequence is [1,2,3], whose length is 3.'
    },
    {
      input: 'nums = [5,5,5]',
      output: '1',
      explanation: 'Only one unique number exists, so the longest consecutive sequence has length 1.'
    }
  ],
  testCases: [
    {
      input: '4\n1 2 2 3',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '3\n5 5 5',
      expectedOutput: '1',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def longest_consecutive_duplicates(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(longest_consecutive_duplicates(nums))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int longestConsecutiveDuplicates(int[] nums) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            System.out.println(longestConsecutiveDuplicates(nums));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint longestConsecutiveDuplicates(int* nums, int numsSize) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums[i]) != 1) return 0;\n    }\n    printf("%d\\n", longestConsecutiveDuplicates(nums, n));\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint longestConsecutiveDuplicates(vector<int>& nums) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        cout << longestConsecutiveDuplicates(nums) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'lcs-e3',
  title: 'Count Consecutive Groups',
  difficulty: 'Easy',
  description: 'Given an unsorted array of integers `nums`, count the number of distinct consecutive groups present in the array. Consecutive numbers belong to the same group, while isolated numbers each form their own group.',
  constraints: [
    '0 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9'
  ],
  examples: [
    {
      input: 'nums = [100,4,200,1,3,2]',
      output: '3',
      explanation: 'The consecutive groups are [1,2,3,4], [100], and [200].'
    },
    {
      input: 'nums = [10,11,13,15,16]',
      output: '3',
      explanation: 'The consecutive groups are [10,11], [13], and [15,16].'
    }
  ],
  testCases: [
    {
      input: '6\n100 4 200 1 3 2',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '5\n10 11 13 15 16',
      expectedOutput: '3',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def count_consecutive_groups(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(count_consecutive_groups(nums))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int countConsecutiveGroups(int[] nums) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            System.out.println(countConsecutiveGroups(nums));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint countConsecutiveGroups(int* nums, int numsSize) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums[i]) != 1) return 0;\n    }\n    printf("%d\\n", countConsecutiveGroups(nums, n));\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint countConsecutiveGroups(vector<int>& nums) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        cout << countConsecutiveGroups(nums) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'lcs-e4',
  title: 'Longest Increasing Consecutive Run',
  difficulty: 'Easy',
  description: 'Given an unsorted array of integers `nums`, return the length of the longest increasing consecutive run. A run consists of consecutive integers where each next number is exactly one greater than the previous. Duplicate values should be ignored.',
  constraints: [
    '0 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9'
  ],
  examples: [
    {
      input: 'nums = [8,1,6,2,5,3,4]',
      output: '6',
      explanation: 'The longest increasing consecutive run is [1,2,3,4,5,6], whose length is 6.'
    },
    {
      input: 'nums = [10,30,20,40]',
      output: '1',
      explanation: 'No two numbers are consecutive, so the longest run has length 1.'
    }
  ],
  testCases: [
    {
      input: '7\n8 1 6 2 5 3 4',
      expectedOutput: '6',
      hidden: false
    },
    {
      input: '4\n10 30 20 40',
      expectedOutput: '1',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def longest_increasing_consecutive_run(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(longest_increasing_consecutive_run(nums))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int longestIncreasingConsecutiveRun(int[] nums) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            System.out.println(longestIncreasingConsecutiveRun(nums));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint longestIncreasingConsecutiveRun(int* nums, int numsSize) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums[i]) != 1) return 0;\n    }\n    printf("%d\\n", longestIncreasingConsecutiveRun(nums, n));\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint longestIncreasingConsecutiveRun(vector<int>& nums) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        cout << longestIncreasingConsecutiveRun(nums) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'lcs-e5',
  title: 'Missing Start of Consecutive Sequence',
  difficulty: 'Easy',
  description: 'Given an unsorted array of distinct integers `nums`, determine how many numbers are the starting elements of consecutive sequences. A number is considered the start of a sequence if `num - 1` does not exist in the array.',
  constraints: [
    '0 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9'
  ],
  examples: [
    {
      input: 'nums = [100,4,200,1,3,2]',
      output: '3',
      explanation: 'The starting elements are 1, 100, and 200.'
    },
    {
      input: 'nums = [5,6,7,10,12,13]',
      output: '3',
      explanation: 'The starting elements are 5, 10, and 12.'
    }
  ],
  testCases: [
    {
      input: '6\n100 4 200 1 3 2',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '6\n5 6 7 10 12 13',
      expectedOutput: '3',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def count_sequence_starts(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(count_sequence_starts(nums))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int countSequenceStarts(int[] nums) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            System.out.println(countSequenceStarts(nums));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint countSequenceStarts(int* nums, int numsSize) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums[i]) != 1) return 0;\n    }\n    printf("%d\\n", countSequenceStarts(nums, n));\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint countSequenceStarts(vector<int>& nums) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        cout << countSequenceStarts(nums) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'lcs-m1',
  title: 'Longest Consecutive Sequence II',
  difficulty: 'Medium',
  description: 'Given an unsorted array of integers `nums`, return both the length of the longest consecutive sequence and its starting element. If multiple sequences have the same maximum length, return the one with the smallest starting element. The algorithm must run in **O(n)** time.',
  constraints: [
    '0 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9'
  ],
  examples: [
    {
      input: 'nums = [100,4,200,1,3,2]',
      output: '1 4',
      explanation: 'The longest consecutive sequence is [1,2,3,4]. It starts at 1 and has length 4.'
    },
    {
      input: 'nums = [8,9,10,20,21,22]',
      output: '8 3',
      explanation: 'There are two sequences of length 3: [8,9,10] and [20,21,22]. Return the one with the smaller starting element.'
    }
  ],
  testCases: [
    {
      input: '6\n100 4 200 1 3 2',
      expectedOutput: '1 4',
      hidden: false
    },
    {
      input: '6\n8 9 10 20 21 22',
      expectedOutput: '8 3',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def longest_consecutive_info(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nstart, length = longest_consecutive_info(nums)\nprint(start, length)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int[] longestConsecutiveInfo(int[] nums) {\n        return new int[]{0,0};\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            int[] ans = longestConsecutiveInfo(nums);\n            System.out.println(ans[0] + " " + ans[1]);\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid longestConsecutiveInfo(int* nums, int numsSize, int* start, int* length) {\n    *start = 0;\n    *length = 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums[i]) != 1) return 0;\n    }\n    int start, length;\n    longestConsecutiveInfo(nums, n, &start, &length);\n    printf("%d %d\\n", start, length);\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <utility>\n\nusing namespace std;\n\npair<int,int> longestConsecutiveInfo(vector<int>& nums) {\n    return {0,0};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        pair<int,int> ans = longestConsecutiveInfo(nums);\n        cout << ans.first << " " << ans.second << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'lcs-m2',
  title: 'Longest Consecutive Sequence After One Insertion',
  difficulty: 'Medium',
  description: 'Given an unsorted array of distinct integers `nums`, you may insert exactly one integer into the array. Return the maximum possible length of a consecutive sequence after the insertion.',
  constraints: [
    '0 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9'
  ],
  examples: [
    {
      input: 'nums = [1,2,4,5]',
      output: '5',
      explanation: 'Insert 3 to obtain the consecutive sequence [1,2,3,4,5], whose length is 5.'
    },
    {
      input: 'nums = [10,12,13]',
      output: '4',
      explanation: 'Insert 11 to obtain the consecutive sequence [10,11,12,13], whose length is 4.'
    }
  ],
  testCases: [
    {
      input: '4\n1 2 4 5',
      expectedOutput: '5',
      hidden: false
    },
    {
      input: '3\n10 12 13',
      expectedOutput: '4',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def longest_after_one_insertion(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(longest_after_one_insertion(nums))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int longestAfterOneInsertion(int[] nums) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            System.out.println(longestAfterOneInsertion(nums));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint longestAfterOneInsertion(int* nums, int numsSize) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums[i]) != 1) return 0;\n    }\n    printf("%d\\n", longestAfterOneInsertion(nums, n));\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint longestAfterOneInsertion(vector<int>& nums) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        cout << longestAfterOneInsertion(nums) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'lcs-m3',
  title: 'Largest Consecutive Interval',
  difficulty: 'Medium',
  description: 'Given an unsorted array of distinct integers `nums`, return the smallest and largest numbers that form the longest consecutive interval. If multiple intervals have the same maximum length, return the interval with the smallest starting element.',
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9'
  ],
  examples: [
    {
      input: 'nums = [100,4,200,1,3,2]',
      output: '1 4',
      explanation: 'The longest consecutive interval is [1,2,3,4], so return its smallest and largest elements.'
    },
    {
      input: 'nums = [20,21,22,5,6,7]',
      output: '5 7',
      explanation: 'There are two intervals of length 3: [5,6,7] and [20,21,22]. Return the interval with the smaller starting element.'
    }
  ],
  testCases: [
    {
      input: '6\n100 4 200 1 3 2',
      expectedOutput: '1 4',
      hidden: false
    },
    {
      input: '6\n20 21 22 5 6 7',
      expectedOutput: '5 7',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def largest_consecutive_interval(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nstart, end = largest_consecutive_interval(nums)\nprint(start, end)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int[] largestConsecutiveInterval(int[] nums) {\n        return new int[]{0,0};\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            int[] ans = largestConsecutiveInterval(nums);\n            System.out.println(ans[0] + " " + ans[1]);\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid largestConsecutiveInterval(int* nums, int numsSize, int* start, int* end) {\n    *start = 0;\n    *end = 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums[i]) != 1) return 0;\n    }\n    int start, end;\n    largestConsecutiveInterval(nums, n, &start, &end);\n    printf("%d %d\\n", start, end);\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <utility>\n\nusing namespace std;\n\npair<int,int> largestConsecutiveInterval(vector<int>& nums) {\n    return {0,0};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        pair<int,int> ans = largestConsecutiveInterval(nums);\n        cout << ans.first << " " << ans.second << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'lcs-m4',
  title: 'Longest Consecutive Negative Sequence',
  difficulty: 'Medium',
  description: 'Given an unsorted array of integers `nums` containing positive, negative, and zero values, return the length of the longest consecutive sequence. Consecutive sequences may span negative numbers, zero, and positive numbers.',
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9'
  ],
  examples: [
    {
      input: 'nums = [-3,-2,-1,5,6]',
      output: '3',
      explanation: 'The longest consecutive sequence is [-3,-2,-1], whose length is 3.'
    },
    {
      input: 'nums = [-2,-1,0,1,7]',
      output: '4',
      explanation: 'The longest consecutive sequence is [-2,-1,0,1], whose length is 4.'
    }
  ],
  testCases: [
    {
      input: '5\n-3 -2 -1 5 6',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '5\n-2 -1 0 1 7',
      expectedOutput: '4',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def longest_negative_consecutive_sequence(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(longest_negative_consecutive_sequence(nums))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int longestNegativeConsecutiveSequence(int[] nums) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            System.out.println(longestNegativeConsecutiveSequence(nums));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint longestNegativeConsecutiveSequence(int* nums, int numsSize) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums[i]) != 1) return 0;\n    }\n    printf("%d\\n", longestNegativeConsecutiveSequence(nums, n));\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint longestNegativeConsecutiveSequence(vector<int>& nums) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        cout << longestNegativeConsecutiveSequence(nums) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'lcs-m5',
  title: 'Merge Consecutive Segments',
  difficulty: 'Medium',
  description: 'Given an unsorted array of distinct integers `nums`, determine the maximum length of a consecutive sequence that can be formed by merging exactly two existing consecutive segments using one missing integer.',
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9'
  ],
  examples: [
    {
      input: 'nums = [1,2,4,5]',
      output: '5',
      explanation: 'Insert the missing integer 3 to merge [1,2] and [4,5] into [1,2,3,4,5].'
    },
    {
      input: 'nums = [10,11,14,15]',
      output: '2',
      explanation: 'The two segments cannot be merged with a single missing integer because they are separated by more than one value.'
    }
  ],
  testCases: [
    {
      input: '4\n1 2 4 5',
      expectedOutput: '5',
      hidden: false
    },
    {
      input: '4\n10 11 14 15',
      expectedOutput: '2',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def merge_consecutive_segments(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(merge_consecutive_segments(nums))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int mergeConsecutiveSegments(int[] nums) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            System.out.println(mergeConsecutiveSegments(nums));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint mergeConsecutiveSegments(int* nums, int numsSize) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums[i]) != 1) return 0;\n    }\n    printf("%d\\n", mergeConsecutiveSegments(nums, n));\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint mergeConsecutiveSegments(vector<int>& nums) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        cout << mergeConsecutiveSegments(nums) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'lcs-h1',
  title: 'Longest Consecutive Sequence in Data Stream',
  difficulty: 'Hard',
  description: 'You are given a stream of queries. Each query is of the form `ADD x`, which inserts the integer `x` into the data stream, or `QUERY`, which asks for the length of the current longest consecutive sequence. Duplicate insertions should have no effect. Process all queries efficiently.',
  constraints: [
    '1 <= q <= 2 * 10^5',
    '-10^9 <= x <= 10^9'
  ],
  examples: [
    {
      input: '6\nADD 100\nADD 4\nQUERY\nADD 3\nADD 2\nQUERY',
      output: '1\n3',
      explanation: 'After inserting 100 and 4, the longest sequence has length 1. After inserting 3 and 2, the sequence [2,3,4] has length 3.'
    },
    {
      input: '7\nADD 1\nADD 2\nADD 3\nQUERY\nADD 5\nQUERY\nADD 4',
      output: '3\n3',
      explanation: 'The longest sequence is [1,2,3]. Adding 5 does not change it until 4 is inserted.'
    }
  ],
  testCases: [
    {
      input: '6\nADD 100\nADD 4\nQUERY\nADD 3\nADD 2\nQUERY',
      expectedOutput: '1\n3',
      hidden: false
    },
    {
      input: '7\nADD 1\nADD 2\nADD 3\nQUERY\nADD 5\nQUERY\nADD 4',
      expectedOutput: '3\n3',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def process_queries(queries):\n    pass\n\nq = int(input())\nqueries = [input() for _ in range(q)]\nfor ans in process_queries(queries):\n    print(ans)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Integer> processQueries(List<String> queries) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int q = sc.nextInt();\n        sc.nextLine();\n        List<String> queries = new ArrayList<>();\n        for (int i = 0; i < q; i++) queries.add(sc.nextLine());\n        for (int ans : processQueries(queries)) System.out.println(ans);\n    }\n}',
    c: '#include <stdio.h>\n\nvoid processQueries(int q) {\n}\n\nint main() {\n    int q;\n    scanf("%d", &q);\n    getchar();\n    processQueries(q);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <string>\n\nusing namespace std;\n\nvector<int> processQueries(vector<string>& queries) {\n    return {};\n}\n\nint main() {\n    int q;\n    cin >> q;\n    cin.ignore();\n    vector<string> queries(q);\n    for (int i = 0; i < q; i++) getline(cin, queries[i]);\n    vector<int> ans = processQueries(queries);\n    for (int x : ans) cout << x << "\\n";\n    return 0;\n}'
  }
},{
  id: 'lcs-h2',
  title: 'Longest Consecutive Sequence with Updates',
  difficulty: 'Hard',
  description: 'You are given a sequence of queries. Each query is one of the following: `ADD x` inserts the integer `x` into the set, `REMOVE x` removes `x` from the set (it is guaranteed that `x` exists), and `QUERY` asks for the length of the current longest consecutive sequence. Process all queries efficiently.',
  constraints: [
    '1 <= q <= 2 * 10^5',
    '-10^9 <= x <= 10^9'
  ],
  examples: [
    {
      input: '8\nADD 1\nADD 2\nADD 3\nQUERY\nREMOVE 2\nQUERY\nADD 2\nQUERY',
      output: '3\n1\n3',
      explanation: 'Initially [1,2,3] forms a sequence of length 3. Removing 2 breaks it into two sequences of length 1. Adding 2 restores the sequence.'
    },
    {
      input: '7\nADD 10\nADD 11\nQUERY\nREMOVE 10\nQUERY\nADD 12\nQUERY',
      output: '2\n1\n2',
      explanation: 'The longest sequence changes dynamically after every update.'
    }
  ],
  testCases: [
    {
      input: '8\nADD 1\nADD 2\nADD 3\nQUERY\nREMOVE 2\nQUERY\nADD 2\nQUERY',
      expectedOutput: '3\n1\n3',
      hidden: false
    },
    {
      input: '7\nADD 10\nADD 11\nQUERY\nREMOVE 10\nQUERY\nADD 12\nQUERY',
      expectedOutput: '2\n1\n2',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def process_queries(queries):\n    pass\n\nq = int(input())\nqueries = [input() for _ in range(q)]\nfor ans in process_queries(queries):\n    print(ans)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Integer> processQueries(List<String> queries) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int q = sc.nextInt();\n        sc.nextLine();\n        List<String> queries = new ArrayList<>();\n        for (int i = 0; i < q; i++) queries.add(sc.nextLine());\n        for (int ans : processQueries(queries)) System.out.println(ans);\n    }\n}',
    c: '#include <stdio.h>\n\nvoid processQueries(int q) {\n}\n\nint main() {\n    int q;\n    scanf("%d", &q);\n    getchar();\n    processQueries(q);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <string>\n\nusing namespace std;\n\nvector<int> processQueries(vector<string>& queries) {\n    return {};\n}\n\nint main() {\n    int q;\n    cin >> q;\n    cin.ignore();\n    vector<string> queries(q);\n    for (int i = 0; i < q; i++) getline(cin, queries[i]);\n    vector<int> ans = processQueries(queries);\n    for (int x : ans) cout << x << "\\n";\n    return 0;\n}'
  }
},{
  id: 'lcs-h3',
  title: 'Maximum Consecutive Interval Queries',
  difficulty: 'Hard',
  description: 'You are given an initial array of distinct integers and multiple queries. Each query consists of two integers `L` and `R`. For every query, consider only the numbers in the range `[L, R]` (inclusive) and return the length of the longest consecutive sequence that can be formed using those numbers.',
  constraints: [
    '1 <= n, q <= 2 * 10^5',
    '-10^9 <= nums[i], L, R <= 10^9'
  ],
  examples: [
    {
      input: '6\n100 4 200 1 3 2\n2\n1 100\n2 4',
      output: '4\n3',
      explanation: 'For [1,100], the longest sequence is [1,2,3,4]. For [2,4], the sequence is [2,3,4].'
    },
    {
      input: '7\n5 6 7 20 21 22 30\n2\n5 22\n20 30',
      output: '3\n3',
      explanation: 'Both queried ranges contain a longest consecutive sequence of length 3.'
    }
  ],
  testCases: [
    {
      input: '6\n100 4 200 1 3 2\n2\n1 100\n2 4',
      expectedOutput: '4\n3',
      hidden: false
    },
    {
      input: '7\n5 6 7 20 21 22 30\n2\n5 22\n20 30',
      expectedOutput: '3\n3',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def process_queries(nums, queries):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nq = int(input())\nqueries = [tuple(map(int, input().split())) for _ in range(q)]\nfor ans in process_queries(nums, queries):\n    print(ans)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Integer> processQueries(int[] nums, int[][] queries) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        int q = sc.nextInt();\n        int[][] queries = new int[q][2];\n        for (int i = 0; i < q; i++) {\n            queries[i][0] = sc.nextInt();\n            queries[i][1] = sc.nextInt();\n        }\n        for (int ans : processQueries(nums, queries)) System.out.println(ans);\n    }\n}',
    c: '#include <stdio.h>\n\nvoid processQueries(int* nums, int n, int q) {\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int nums[n];\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    int q;\n    scanf("%d", &q);\n    processQueries(nums, n, q);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nvector<int> processQueries(vector<int>& nums, vector<pair<int,int>>& queries) {\n    return {};\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> nums(n);\n    for (int i = 0; i < n; i++) cin >> nums[i];\n    int q;\n    cin >> q;\n    vector<pair<int,int>> queries(q);\n    for (int i = 0; i < q; i++) cin >> queries[i].first >> queries[i].second;\n    vector<int> ans = processQueries(nums, queries);\n    for (int x : ans) cout << x << "\\n";\n    return 0;\n}'
  }
},{
  id: 'lcs-h4',
  title: 'Dynamic Consecutive Set',
  difficulty: 'Hard',
  description: 'You are given a sequence of queries. Each query is one of the following: `ADD x` inserts the integer `x` into the set if it does not already exist, `REMOVE x` removes `x` from the set if it exists, and `MAX` asks for the starting element and length of the current longest consecutive sequence. If multiple sequences have the same maximum length, return the one with the smallest starting element.',
  constraints: [
    '1 <= q <= 2 * 10^5',
    '-10^9 <= x <= 10^9'
  ],
  examples: [
    {
      input: '8\nADD 100\nADD 4\nADD 1\nADD 2\nADD 3\nMAX\nREMOVE 2\nMAX',
      output: '1 4\n1 1',
      explanation: 'Initially the longest sequence is [1,2,3,4]. After removing 2, the longest sequences are [1] and [3,4]; return the one with the smallest starting element.'
    },
    {
      input: '7\nADD 10\nADD 11\nADD 12\nMAX\nREMOVE 11\nMAX\nADD 13',
      output: '10 3\n10 1',
      explanation: 'The longest sequence changes dynamically after each update.'
    }
  ],
  testCases: [
    {
      input: '8\nADD 100\nADD 4\nADD 1\nADD 2\nADD 3\nMAX\nREMOVE 2\nMAX',
      expectedOutput: '1 4\n1 1',
      hidden: false
    },
    {
      input: '7\nADD 10\nADD 11\nADD 12\nMAX\nREMOVE 11\nMAX\nADD 13',
      expectedOutput: '10 3\n10 1',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def process_queries(queries):\n    pass\n\nq = int(input())\nqueries = [input() for _ in range(q)]\nfor start, length in process_queries(queries):\n    print(start, length)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<int[]> processQueries(List<String> queries) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int q = sc.nextInt();\n        sc.nextLine();\n        List<String> queries = new ArrayList<>();\n        for (int i = 0; i < q; i++) queries.add(sc.nextLine());\n        for (int[] ans : processQueries(queries)) System.out.println(ans[0] + " " + ans[1]);\n    }\n}',
    c: '#include <stdio.h>\n\nvoid processQueries(int q) {\n}\n\nint main() {\n    int q;\n    scanf("%d", &q);\n    getchar();\n    processQueries(q);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <string>\n#include <utility>\n\nusing namespace std;\n\nvector<pair<int,int>> processQueries(vector<string>& queries) {\n    return {};\n}\n\nint main() {\n    int q;\n    cin >> q;\n    cin.ignore();\n    vector<string> queries(q);\n    for (int i = 0; i < q; i++) getline(cin, queries[i]);\n    vector<pair<int,int>> ans = processQueries(queries);\n    for (auto &p : ans) cout << p.first << " " << p.second << "\\n";\n    return 0;\n}'
  }
},{
  id: 'lcs-h5',
  title: 'Longest Consecutive Sequence Across Arrays',
  difficulty: 'Hard',
  description: 'You are given `k` arrays of integers. You may choose numbers from all the arrays together to form a single set. Return the length of the longest consecutive sequence that can be formed using all distinct integers across every array. The algorithm must run in **O(N)** time, where `N` is the total number of integers.',
  constraints: [
    '1 <= k <= 10^3',
    '1 <= total number of integers <= 2 * 10^5',
    '-10^9 <= nums[i] <= 10^9'
  ],
  examples: [
    {
      input: '2\n3\n1 2 3\n3\n5 4 100',
      output: '5',
      explanation: 'Combining all arrays gives {1,2,3,4,5,100}. The longest consecutive sequence is [1,2,3,4,5].'
    },
    {
      input: '3\n2\n10 11\n3\n15 16 17\n2\n12 13',
      output: '8',
      explanation: 'Combining all arrays gives {10,11,12,13,15,16,17}. The longest consecutive sequence is [10,11,12,13] of length 4. Since 14 is missing, the second sequence is [15,16,17] of length 3, so the answer is 4.'
    }
  ],
  testCases: [
    {
      input: '2\n3\n1 2 3\n3\n5 4 100',
      expectedOutput: '5',
      hidden: false
    },
    {
      input: '3\n2\n10 11\n3\n15 16 17\n2\n12 13',
      expectedOutput: '4',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def longest_consecutive_across_arrays(arrays):\n    pass\n\nk = int(input())\narrays = []\nfor _ in range(k):\n    n = int(input())\n    arrays.append(list(map(int, input().split())))\nprint(longest_consecutive_across_arrays(arrays))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int longestConsecutiveAcrossArrays(List<int[]> arrays) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int k = sc.nextInt();\n        List<int[]> arrays = new ArrayList<>();\n        for (int i = 0; i < k; i++) {\n            int n = sc.nextInt();\n            int[] arr = new int[n];\n            for (int j = 0; j < n; j++) arr[j] = sc.nextInt();\n            arrays.add(arr);\n        }\n        System.out.println(longestConsecutiveAcrossArrays(arrays));\n    }\n}',
    c: '#include <stdio.h>\n\nint longestConsecutiveAcrossArrays() {\n    return 0;\n}\n\nint main() {\n    int k;\n    scanf("%d", &k);\n    printf("%d\\n", longestConsecutiveAcrossArrays());\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint longestConsecutiveAcrossArrays(vector<vector<int>>& arrays) {\n    return 0;\n}\n\nint main() {\n    int k;\n    cin >> k;\n    vector<vector<int>> arrays;\n    while (k--) {\n        int n;\n        cin >> n;\n        vector<int> arr(n);\n        for (int i = 0; i < n; i++) cin >> arr[i];\n        arrays.push_back(arr);\n    }\n    cout << longestConsecutiveAcrossArrays(arrays) << "\\n";\n    return 0;\n}'
  }
}
];