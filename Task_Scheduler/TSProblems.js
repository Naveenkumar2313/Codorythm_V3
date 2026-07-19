export const TSProblems=[
  {
  id: 'hp-e1',
  title: 'Largest Element using Max Heap',
  difficulty: 'Easy',
  description: 'Given an array of integers, find and return the largest element using a Max Heap (Priority Queue).',
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9'
  ],
  examples: [
    {
      input: 'nums = [5,3,8,2,9]',
      output: '9',
      explanation: 'The largest element in the array is 9.'
    },
    {
      input: 'nums = [-5,-1,-9]',
      output: '-1',
      explanation: 'Among negative numbers, -1 is the largest.'
    }
  ],
  testCases: [
    {
      input: '5\n5 3 8 2 9',
      expectedOutput: '9',
      hidden: false
    },
    {
      input: '3\n-5 -1 -9',
      expectedOutput: '-1',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def largest_element(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(largest_element(nums))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int largestElement(int[] nums) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            System.out.println(largestElement(nums));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint largestElement(int* nums, int numsSize) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums[i]) != 1) return 0;\n    }\n    printf("%d\\n", largestElement(nums, n));\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint largestElement(vector<int>& nums) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        cout << largestElement(nums) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'hp-e2',
  title: 'Kth Largest Element',
  difficulty: 'Easy',
  description: 'Given an integer array `nums` and an integer `k`, return the kth largest element in the array using a Max Heap (Priority Queue). Note that it is the kth largest element in sorted order, not the kth distinct element.',
  constraints: [
    '1 <= k <= nums.length <= 10^5',
    '-10^4 <= nums[i] <= 10^4'
  ],
  examples: [
    {
      input: 'nums = [3,2,1,5,6,4], k = 2',
      output: '5',
      explanation: 'The 2nd largest element is 5.'
    },
    {
      input: 'nums = [3,2,3,1,2,4,5,5,6], k = 4',
      output: '4',
      explanation: 'The 4th largest element is 4.'
    }
  ],
  testCases: [
    {
      input: '6\n3 2 1 5 6 4\n2',
      expectedOutput: '5',
      hidden: false
    },
    {
      input: '9\n3 2 3 1 2 4 5 5 6\n4',
      expectedOutput: '4',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def kth_largest(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nprint(kth_largest(nums, k))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int kthLargest(int[] nums, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            int k = sc.nextInt();\n            System.out.println(kthLargest(nums, k));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint kthLargest(int* nums, int numsSize, int k) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums[i]) != 1) return 0;\n    }\n    int k;\n    if (scanf("%d", &k) != 1) return 0;\n    printf("%d\\n", kthLargest(nums, n, k));\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint kthLargest(vector<int>& nums, int k) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        int k;\n        cin >> k;\n        cout << kthLargest(nums, k) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'hp-e3',
  title: 'Top K Frequent Numbers',
  difficulty: 'Easy',
  description: 'Given an integer array `nums` and an integer `k`, return the `k` most frequent elements in any order using a Max Heap (Priority Queue).',
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= k <= number of unique elements',
    '-10^4 <= nums[i] <= 10^4'
  ],
  examples: [
    {
      input: 'nums = [1,1,1,2,2,3], k = 2',
      output: '[1,2]',
      explanation: '1 appears 3 times and 2 appears 2 times.'
    },
    {
      input: 'nums = [4,4,4,6,6,7], k = 1',
      output: '[4]',
      explanation: '4 is the most frequent element.'
    }
  ],
  testCases: [
    {
      input: '6\n1 1 1 2 2 3\n2',
      expectedOutput: '1 2',
      hidden: false
    },
    {
      input: '6\n4 4 4 6 6 7\n1',
      expectedOutput: '4',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def top_k_frequent(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nprint(*top_k_frequent(nums, k))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Integer> topKFrequent(int[] nums, int k) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            int k = sc.nextInt();\n            List<Integer> ans = topKFrequent(nums, k);\n            for (int i = 0; i < ans.size(); i++) {\n                System.out.print(ans.get(i));\n                if (i + 1 < ans.size()) System.out.print(" ");\n            }\n            System.out.println();\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint* topKFrequent(int* nums, int numsSize, int k, int* returnSize) {\n    *returnSize = 0;\n    return NULL;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums[i]) != 1) return 0;\n    }\n    int k;\n    if (scanf("%d", &k) != 1) return 0;\n    int returnSize;\n    int* ans = topKFrequent(nums, n, k, &returnSize);\n    for (int i = 0; i < returnSize; i++) {\n        printf("%d", ans[i]);\n        if (i + 1 < returnSize) printf(" ");\n    }\n    printf("\\n");\n    free(ans);\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nvector<int> topKFrequent(vector<int>& nums, int k) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        int k;\n        cin >> k;\n        vector<int> ans = topKFrequent(nums, k);\n        for (int i = 0; i < ans.size(); i++) {\n            cout << ans[i];\n            if (i + 1 < ans.size()) cout << " ";\n        }\n        cout << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'hp-e4',
  title: 'Connect Ropes with Minimum Cost',
  difficulty: 'Easy',
  description: 'Given an array `ropes` where each element represents the length of a rope, connect all the ropes into one rope. Connecting two ropes of lengths `a` and `b` costs `a + b`. Return the minimum total cost required using a Min Heap (Priority Queue).',
  constraints: [
    '1 <= ropes.length <= 10^5',
    '1 <= ropes[i] <= 10^6'
  ],
  examples: [
    {
      input: 'ropes = [4,3,2,6]',
      output: '29',
      explanation: 'Connect 2+3=5 (cost=5), 4+5=9 (cost=9), 6+9=15 (cost=15). Total = 5+9+15 = 29.'
    },
    {
      input: 'ropes = [1,2,3]',
      output: '9',
      explanation: 'Connect 1+2=3 (cost=3), then 3+3=6 (cost=6). Total = 9.'
    }
  ],
  testCases: [
    {
      input: '4\n4 3 2 6',
      expectedOutput: '29',
      hidden: false
    },
    {
      input: '3\n1 2 3',
      expectedOutput: '9',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def connect_ropes(ropes):\n    pass\n\nn = int(input())\nropes = list(map(int, input().split()))\nprint(connect_ropes(ropes))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int connectRopes(int[] ropes) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] ropes = new int[n];\n            for (int i = 0; i < n; i++) {\n                ropes[i] = sc.nextInt();\n            }\n            System.out.println(connectRopes(ropes));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint connectRopes(int* ropes, int ropesSize) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* ropes = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &ropes[i]) != 1) return 0;\n    }\n    printf("%d\\n", connectRopes(ropes, n));\n    free(ropes);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint connectRopes(vector<int>& ropes) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> ropes(n);\n        for (int i = 0; i < n; i++) {\n            cin >> ropes[i];\n        }\n        cout << connectRopes(ropes) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'hp-e5',
  title: 'Last Stone Weight',
  difficulty: 'Easy',
  description: 'You are given an array `stones` where each element represents the weight of a stone. Each turn, choose the two heaviest stones and smash them together. If both stones have equal weight, both are destroyed. Otherwise, the remaining stone has weight equal to the difference of the two. Return the weight of the last remaining stone. If no stones remain, return `0`.',
  constraints: [
    '1 <= stones.length <= 30',
    '1 <= stones[i] <= 1000'
  ],
  examples: [
    {
      input: 'stones = [2,7,4,1,8,1]',
      output: '1',
      explanation: 'After repeatedly smashing the two heaviest stones, the last remaining stone has weight 1.'
    },
    {
      input: 'stones = [10]',
      output: '10',
      explanation: 'Only one stone exists, so its weight is returned.'
    }
  ],
  testCases: [
    {
      input: '6\n2 7 4 1 8 1',
      expectedOutput: '1',
      hidden: false
    },
    {
      input: '1\n10',
      expectedOutput: '10',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def last_stone_weight(stones):\n    pass\n\nn = int(input())\nstones = list(map(int, input().split()))\nprint(last_stone_weight(stones))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int lastStoneWeight(int[] stones) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] stones = new int[n];\n            for (int i = 0; i < n; i++) {\n                stones[i] = sc.nextInt();\n            }\n            System.out.println(lastStoneWeight(stones));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint lastStoneWeight(int* stones, int stonesSize) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* stones = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &stones[i]) != 1) return 0;\n    }\n    printf("%d\\n", lastStoneWeight(stones, n));\n    free(stones);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint lastStoneWeight(vector<int>& stones) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> stones(n);\n        for (int i = 0; i < n; i++) {\n            cin >> stones[i];\n        }\n        cout << lastStoneWeight(stones) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'hp-m1',
  title: 'K Closest Points to Origin',
  difficulty: 'Medium',
  description: 'Given an array `points` where `points[i] = [xi, yi]` represents a point on the X-Y plane and an integer `k`, return the `k` closest points to the origin `(0, 0)`. The answer may be returned in any order.',
  constraints: [
    '1 <= k <= points.length <= 10^4',
    '-10^4 <= xi, yi <= 10^4'
  ],
  examples: [
    {
      input: 'points = [[1,3],[-2,2]], k = 1',
      output: '[[-2,2]]',
      explanation: 'The distance of (-2,2) from the origin is smaller than (1,3).'
    },
    {
      input: 'points = [[3,3],[5,-1],[-2,4]], k = 2',
      output: '[[3,3],[-2,4]]',
      explanation: 'The two closest points to the origin are [3,3] and [-2,4].'
    }
  ],
  testCases: [
    {
      input: '2\n1 3\n-2 2\n1',
      expectedOutput: '-2 2',
      hidden: false
    },
    {
      input: '3\n3 3\n5 -1\n-2 4\n2',
      expectedOutput: '3 3\n-2 4',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def k_closest(points, k):\n    pass\n\nn = int(input())\npoints = [list(map(int, input().split())) for _ in range(n)]\nk = int(input())\nans = k_closest(points, k)\nfor p in ans:\n    print(*p)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int[][] kClosest(int[][] points, int k) {\n        return new int[0][0];\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[][] points = new int[n][2];\n            for (int i = 0; i < n; i++) {\n                points[i][0] = sc.nextInt();\n                points[i][1] = sc.nextInt();\n            }\n            int k = sc.nextInt();\n            int[][] ans = kClosest(points, k);\n            for (int[] p : ans) {\n                System.out.println(p[0] + " " + p[1]);\n            }\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint** kClosest(int** points, int pointsSize, int k, int* returnSize) {\n    *returnSize = 0;\n    return NULL;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int** points = (int**)malloc(n * sizeof(int*));\n    for (int i = 0; i < n; i++) {\n        points[i] = (int*)malloc(2 * sizeof(int));\n        scanf("%d %d", &points[i][0], &points[i][1]);\n    }\n    int k;\n    scanf("%d", &k);\n    int returnSize;\n    int** ans = kClosest(points, n, k, &returnSize);\n    for (int i = 0; i < returnSize; i++) {\n        printf("%d %d\\n", ans[i][0], ans[i][1]);\n    }\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nvector<vector<int>> kClosest(vector<vector<int>>& points, int k) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<vector<int>> points(n, vector<int>(2));\n        for (int i = 0; i < n; i++) {\n            cin >> points[i][0] >> points[i][1];\n        }\n        int k;\n        cin >> k;\n        vector<vector<int>> ans = kClosest(points, k);\n        for (auto &p : ans) {\n            cout << p[0] << " " << p[1] << "\\n";\n        }\n    }\n    return 0;\n}'
  }
},
{
  id: 'hp-m2',
  title: 'Reorganize String',
  difficulty: 'Medium',
  description: 'Given a string `s`, rearrange its characters so that no two adjacent characters are the same. Return any valid rearrangement. If it is not possible, return an empty string. Solve using a Max Heap (Priority Queue).',
  constraints: [
    '1 <= s.length <= 500',
    's consists of lowercase English letters.'
  ],
  examples: [
    {
      input: 's = "aab"',
      output: '"aba"',
      explanation: 'No two adjacent characters are the same.'
    },
    {
      input: 's = "aaab"',
      output: '""',
      explanation: 'No valid rearrangement exists.'
    }
  ],
  testCases: [
    {
      input: 'aab',
      expectedOutput: 'aba',
      hidden: false
    },
    {
      input: 'aaab',
      expectedOutput: '',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def reorganize_string(s):\n    pass\n\ns = input().strip()\nprint(reorganize_string(s))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static String reorganizeString(String s) {\n        return "";\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String s = sc.nextLine();\n            System.out.println(reorganizeString(s));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <string.h>\n\nchar* reorganizeString(char* s) {\n    return "";\n}\n\nint main() {\n    char s[505];\n    if (scanf("%s", s) != 1) return 0;\n    printf("%s\\n", reorganizeString(s));\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <string>\n\nusing namespace std;\n\nstring reorganizeString(string s) {\n    return "";\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    string s;\n    if (cin >> s) {\n        cout << reorganizeString(s) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'hp-m3',
  title: 'Sort Characters By Frequency',
  difficulty: 'Medium',
  description: 'Given a string `s`, sort its characters in decreasing order of their frequency. If multiple characters have the same frequency, they may appear in any order. Solve using a Max Heap (Priority Queue).',
  constraints: [
    '1 <= s.length <= 5 * 10^5',
    's consists of uppercase and lowercase English letters and digits.'
  ],
  examples: [
    {
      input: 's = "tree"',
      output: '"eert"',
      explanation: 'Character \'e\' appears twice, while \'r\' and \'t\' appear once.'
    },
    {
      input: 's = "cccaaa"',
      output: '"cccaaa"',
      explanation: 'Both \'c\' and \'a\' appear three times. Any valid ordering is accepted.'
    }
  ],
  testCases: [
    {
      input: 'tree',
      expectedOutput: 'eert',
      hidden: false
    },
    {
      input: 'cccaaa',
      expectedOutput: 'cccaaa',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def frequency_sort(s):\n    pass\n\ns = input().strip()\nprint(frequency_sort(s))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static String frequencySort(String s) {\n        return "";\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextLine()) {\n            String s = sc.nextLine();\n            System.out.println(frequencySort(s));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <string.h>\n\nchar* frequencySort(char* s) {\n    return "";\n}\n\nint main() {\n    char s[500005];\n    if (scanf("%s", s) != 1) return 0;\n    printf("%s\\n", frequencySort(s));\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <string>\n\nusing namespace std;\n\nstring frequencySort(string s) {\n    return "";\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    string s;\n    if (cin >> s) {\n        cout << frequencySort(s) << "\\n";\n    }\n    return 0;\n}'
  }
},
{
  id: 'hp-m4',
  title: 'Task Scheduler',
  difficulty: 'Medium',
  description: 'You are given a list of CPU tasks represented by uppercase English letters and a non-negative integer `n` representing the cooldown period between two same tasks. Each task takes one unit of time. Return the minimum number of CPU intervals required to complete all tasks while respecting the cooldown period.',
  constraints: [
    '1 <= tasks.length <= 10^4',
    'tasks[i] is an uppercase English letter.',
    '0 <= n <= 100'
  ],
  examples: [
    {
      input: 'tasks = [A,A,A,B,B,B], n = 2',
      output: '8',
      explanation: 'One optimal schedule is A → B → idle → A → B → idle → A → B.'
    },
    {
      input: 'tasks = [A,C,A,B,D,B], n = 1',
      output: '6',
      explanation: 'A valid schedule is A → B → A → D → B → C. No idle intervals are required.'
    }
  ],
  testCases: [
    {
      input: '6\nA A A B B B\n2',
      expectedOutput: '8',
      hidden: false
    },
    {
      input: '6\nA C A B D B\n1',
      expectedOutput: '6',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def least_interval(tasks, n):\n    pass\n\nm = int(input())\ntasks = input().split()\nn = int(input())\nprint(least_interval(tasks, n))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int leastInterval(char[] tasks, int n) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int m = sc.nextInt();\n            char[] tasks = new char[m];\n            for (int i = 0; i < m; i++) {\n                tasks[i] = sc.next().charAt(0);\n            }\n            int n = sc.nextInt();\n            System.out.println(leastInterval(tasks, n));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint leastInterval(char* tasks, int tasksSize, int n) {\n    return 0;\n}\n\nint main() {\n    int m;\n    if (scanf("%d", &m) != 1) return 0;\n    char* tasks = (char*)malloc(m * sizeof(char));\n    for (int i = 0; i < m; i++) {\n        scanf(" %c", &tasks[i]);\n    }\n    int n;\n    scanf("%d", &n);\n    printf("%d\\n", leastInterval(tasks, m, n));\n    free(tasks);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint leastInterval(vector<char>& tasks, int n) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int m;\n    if (cin >> m) {\n        vector<char> tasks(m);\n        for (int i = 0; i < m; i++) {\n            cin >> tasks[i];\n        }\n        int n;\n        cin >> n;\n        cout << leastInterval(tasks, n) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'hp-m5',
  title: 'Single-Threaded CPU',
  difficulty: 'Medium',
  description: 'You are given `n` tasks where `tasks[i] = [enqueueTime, processingTime]`. A single-threaded CPU processes at most one task at a time. If multiple tasks are available, the CPU always selects the one with the shortest processing time. If there is a tie, choose the task with the smaller original index. Return the order in which the CPU processes the tasks.',
  constraints: [
    '1 <= tasks.length <= 10^5',
    '1 <= enqueueTime, processingTime <= 10^9'
  ],
  examples: [
    {
      input: 'tasks = [[1,2],[2,4],[3,2],[4,1]]',
      output: '[0,2,3,1]',
      explanation: 'The CPU processes tasks in the order of indices 0 → 2 → 3 → 1.'
    },
    {
      input: 'tasks = [[7,10],[7,12],[7,5],[7,4],[7,2]]',
      output: '[4,3,2,0,1]',
      explanation: 'All tasks arrive together, so the CPU always picks the shortest processing time.'
    }
  ],
  testCases: [
    {
      input: '4\n1 2\n2 4\n3 2\n4 1',
      expectedOutput: '0 2 3 1',
      hidden: false
    },
    {
      input: '5\n7 10\n7 12\n7 5\n7 4\n7 2',
      expectedOutput: '4 3 2 0 1',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def get_order(tasks):\n    pass\n\nn = int(input())\ntasks = [list(map(int, input().split())) for _ in range(n)]\nprint(*get_order(tasks))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int[] getOrder(int[][] tasks) {\n        return new int[0];\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[][] tasks = new int[n][2];\n            for (int i = 0; i < n; i++) {\n                tasks[i][0] = sc.nextInt();\n                tasks[i][1] = sc.nextInt();\n            }\n            int[] ans = getOrder(tasks);\n            for (int i = 0; i < ans.length; i++) {\n                System.out.print(ans[i]);\n                if (i + 1 < ans.length) System.out.print(" ");\n            }\n            System.out.println();\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint* getOrder(int** tasks, int tasksSize, int* returnSize) {\n    *returnSize = 0;\n    return NULL;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int** tasks = (int**)malloc(n * sizeof(int*));\n    for (int i = 0; i < n; i++) {\n        tasks[i] = (int*)malloc(2 * sizeof(int));\n        scanf("%d %d", &tasks[i][0], &tasks[i][1]);\n    }\n    int returnSize;\n    int* ans = getOrder(tasks, n, &returnSize);\n    for (int i = 0; i < returnSize; i++) {\n        printf("%d", ans[i]);\n        if (i + 1 < returnSize) printf(" ");\n    }\n    printf("\\n");\n    free(ans);\n    for (int i = 0; i < n; i++) free(tasks[i]);\n    free(tasks);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nvector<int> getOrder(vector<vector<int>>& tasks) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<vector<int>> tasks(n, vector<int>(2));\n        for (int i = 0; i < n; i++) {\n            cin >> tasks[i][0] >> tasks[i][1];\n        }\n        vector<int> ans = getOrder(tasks);\n        for (int i = 0; i < ans.size(); i++) {\n            cout << ans[i];\n            if (i + 1 < ans.size()) cout << " ";\n        }\n        cout << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'hp-h1',
  title: 'Meeting Rooms III',
  difficulty: 'Hard',
  description: 'You are given `n` meeting rooms numbered from `0` to `n-1` and an array `meetings` where `meetings[i] = [start, end]`. Each meeting is assigned to the available room with the smallest index. If no room is available, the meeting is delayed until the earliest room becomes free while keeping its original duration. Return the room number that hosts the most meetings. If multiple rooms have the same highest count, return the smallest room number.',
  constraints: [
    '1 <= n <= 100',
    '1 <= meetings.length <= 10^5',
    '0 <= start < end <= 5 * 10^5'
  ],
  examples: [
    {
      input: 'n = 2, meetings = [[0,10],[1,5],[2,7],[3,4]]',
      output: '0',
      explanation: 'Room 0 hosts the maximum number of meetings after delaying meetings when necessary.'
    },
    {
      input: 'n = 3, meetings = [[1,20],[2,10],[3,5],[4,9],[6,8]]',
      output: '1',
      explanation: 'Room 1 ends up hosting the most meetings.'
    }
  ],
  testCases: [
    {
      input: '2\n4\n0 10\n1 5\n2 7\n3 4',
      expectedOutput: '0',
      hidden: false
    },
    {
      input: '3\n5\n1 20\n2 10\n3 5\n4 9\n6 8',
      expectedOutput: '1',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def most_booked(n, meetings):\n    pass\n\nn = int(input())\nm = int(input())\nmeetings = [list(map(int, input().split())) for _ in range(m)]\nprint(most_booked(n, meetings))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int mostBooked(int n, int[][] meetings) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int m = sc.nextInt();\n            int[][] meetings = new int[m][2];\n            for (int i = 0; i < m; i++) {\n                meetings[i][0] = sc.nextInt();\n                meetings[i][1] = sc.nextInt();\n            }\n            System.out.println(mostBooked(n, meetings));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint mostBooked(int n, int** meetings, int meetingsSize) {\n    return 0;\n}\n\nint main() {\n    int n, m;\n    if (scanf("%d", &n) != 1) return 0;\n    scanf("%d", &m);\n    int** meetings = (int**)malloc(m * sizeof(int*));\n    for (int i = 0; i < m; i++) {\n        meetings[i] = (int*)malloc(2 * sizeof(int));\n        scanf("%d %d", &meetings[i][0], &meetings[i][1]);\n    }\n    printf("%d\\n", mostBooked(n, meetings, m));\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint mostBooked(int n, vector<vector<int>>& meetings) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n, m;\n    if (cin >> n) {\n        cin >> m;\n        vector<vector<int>> meetings(m, vector<int>(2));\n        for (int i = 0; i < m; i++) {\n            cin >> meetings[i][0] >> meetings[i][1];\n        }\n        cout << mostBooked(n, meetings) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'hp-h2',
  title: 'Process Tasks Using Servers',
  difficulty: 'Hard',
  description: 'You are given `k` servers, where `servers[i]` represents the weight of the `i`th server, and an array `tasks` where `tasks[j]` is the time required to process the `j`th task. At second `j`, task `j` becomes available. Assign each task to the free server with the smallest weight. If multiple servers have the same weight, choose the one with the smaller index. If no server is free, wait until one becomes available. Return an array containing the index of the server assigned to each task.',
  constraints: [
    '1 <= servers.length, tasks.length <= 2 * 10^5',
    '1 <= servers[i], tasks[i] <= 2 * 10^5'
  ],
  examples: [
    {
      input: 'servers = [3,3,2], tasks = [1,2,3,2,1,2]',
      output: '[2,2,0,2,1,2]',
      explanation: 'Tasks are assigned according to server weight and availability.'
    },
    {
      input: 'servers = [5,1,4,3,2], tasks = [2,1,2,4,5,2,1]',
      output: '[1,4,1,4,1,3,2]',
      explanation: 'The scheduler always selects the lightest available server.'
    }
  ],
  testCases: [
    {
      input: '3\n3 3 2\n6\n1 2 3 2 1 2',
      expectedOutput: '2 2 0 2 1 2',
      hidden: false
    },
    {
      input: '5\n5 1 4 3 2\n7\n2 1 2 4 5 2 1',
      expectedOutput: '1 4 1 4 1 3 2',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def assign_tasks(servers, tasks):\n    pass\n\nk = int(input())\nservers = list(map(int, input().split()))\nn = int(input())\ntasks = list(map(int, input().split()))\nprint(*assign_tasks(servers, tasks))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int[] assignTasks(int[] servers, int[] tasks) {\n        return new int[0];\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int k = sc.nextInt();\n            int[] servers = new int[k];\n            for (int i = 0; i < k; i++) servers[i] = sc.nextInt();\n            int n = sc.nextInt();\n            int[] tasks = new int[n];\n            for (int i = 0; i < n; i++) tasks[i] = sc.nextInt();\n            int[] ans = assignTasks(servers, tasks);\n            for (int i = 0; i < ans.length; i++) {\n                System.out.print(ans[i]);\n                if (i + 1 < ans.length) System.out.print(" ");\n            }\n            System.out.println();\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint* assignTasks(int* servers, int serversSize, int* tasks, int tasksSize, int* returnSize) {\n    *returnSize = 0;\n    return NULL;\n}\n\nint main() {\n    int k;\n    if (scanf("%d", &k) != 1) return 0;\n    int* servers = (int*)malloc(k * sizeof(int));\n    for (int i = 0; i < k; i++) scanf("%d", &servers[i]);\n    int n;\n    scanf("%d", &n);\n    int* tasks = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &tasks[i]);\n    int returnSize;\n    int* ans = assignTasks(servers, k, tasks, n, &returnSize);\n    for (int i = 0; i < returnSize; i++) {\n        printf("%d", ans[i]);\n        if (i + 1 < returnSize) printf(" ");\n    }\n    printf("\\n");\n    free(ans);\n    free(servers);\n    free(tasks);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nvector<int> assignTasks(vector<int>& servers, vector<int>& tasks) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int k;\n    if (cin >> k) {\n        vector<int> servers(k);\n        for (int i = 0; i < k; i++) cin >> servers[i];\n        int n;\n        cin >> n;\n        vector<int> tasks(n);\n        for (int i = 0; i < n; i++) cin >> tasks[i];\n        vector<int> ans = assignTasks(servers, tasks);\n        for (int i = 0; i < ans.size(); i++) {\n            cout << ans[i];\n            if (i + 1 < ans.size()) cout << " ";\n        }\n        cout << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'hp-h3',
  title: 'Sliding Window Median',
  difficulty: 'Hard',
  description: 'Given an array of integers `nums` and an integer `k`, there is a sliding window of size `k` moving from left to right. Return the median of each window. If the window size is even, the median is the average of the two middle elements.',
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= k <= nums.length',
    '-2^31 <= nums[i] <= 2^31 - 1'
  ],
  examples: [
    {
      input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3',
      output: '[1,-1,-1,3,5,6]',
      explanation: 'The median is computed for every contiguous window of size 3.'
    },
    {
      input: 'nums = [1,2], k = 1',
      output: '[1,2]',
      explanation: 'Each element itself is the median.'
    }
  ],
  testCases: [
    {
      input: '8\n1 3 -1 -3 5 3 6 7\n3',
      expectedOutput: '1 -1 -1 3 5 6',
      hidden: false
    },
    {
      input: '2\n1 2\n1',
      expectedOutput: '1 2',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def median_sliding_window(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nprint(*median_sliding_window(nums, k))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static double[] medianSlidingWindow(int[] nums, int k) {\n        return new double[0];\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n            int k = sc.nextInt();\n            double[] ans = medianSlidingWindow(nums, k);\n            for (int i = 0; i < ans.length; i++) {\n                if (ans[i] == (long) ans[i]) System.out.print((long) ans[i]);\n                else System.out.print(ans[i]);\n                if (i + 1 < ans.length) System.out.print(" ");\n            }\n            System.out.println();\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\ndouble* medianSlidingWindow(int* nums, int numsSize, int k, int* returnSize) {\n    *returnSize = 0;\n    return NULL;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    int k;\n    scanf("%d", &k);\n    int returnSize;\n    double* ans = medianSlidingWindow(nums, n, k, &returnSize);\n    for (int i = 0; i < returnSize; i++) {\n        if (ans[i] == (long long)ans[i]) printf("%lld", (long long)ans[i]);\n        else printf("%.1f", ans[i]);\n        if (i + 1 < returnSize) printf(" ");\n    }\n    printf("\\n");\n    free(ans);\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nvector<double> medianSlidingWindow(vector<int>& nums, int k) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) cin >> nums[i];\n        int k;\n        cin >> k;\n        vector<double> ans = medianSlidingWindow(nums, k);\n        for (int i = 0; i < ans.size(); i++) {\n            if (ans[i] == (long long)ans[i]) cout << (long long)ans[i];\n            else cout << ans[i];\n            if (i + 1 < ans.size()) cout << " ";\n        }\n        cout << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'hp-h4',
  title: 'IPO',
  difficulty: 'Hard',
  description: 'Suppose LeetCode will start its IPO soon. You are given `k`, the maximum number of projects you can complete, an initial capital `w`, an array `profits` where `profits[i]` is the profit from the `i`th project, and an array `capital` where `capital[i]` is the minimum capital required to start it. Choose at most `k` distinct projects to maximize your final capital. Return the maximum capital after completing the selected projects.',
  constraints: [
    '1 <= k <= 10^5',
    '0 <= w <= 10^9',
    '1 <= profits.length == capital.length <= 10^5',
    '0 <= profits[i], capital[i] <= 10^9'
  ],
  examples: [
    {
      input: 'k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]',
      output: '4',
      explanation: 'Complete project 0 first to reach capital 1, then complete project 2. Final capital = 4.'
    },
    {
      input: 'k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]',
      output: '6',
      explanation: 'All projects become available one after another, resulting in final capital 6.'
    }
  ],
  testCases: [
    {
      input: '2\n0\n3\n1 2 3\n0 1 1',
      expectedOutput: '4',
      hidden: false
    },
    {
      input: '3\n0\n3\n1 2 3\n0 1 2',
      expectedOutput: '6',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def find_maximized_capital(k, w, profits, capital):\n    pass\n\nk = int(input())\nw = int(input())\nn = int(input())\nprofits = list(map(int, input().split()))\ncapital = list(map(int, input().split()))\nprint(find_maximized_capital(k, w, profits, capital))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int findMaximizedCapital(int k, int w, int[] profits, int[] capital) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int k = sc.nextInt();\n            int w = sc.nextInt();\n            int n = sc.nextInt();\n            int[] profits = new int[n];\n            int[] capital = new int[n];\n            for (int i = 0; i < n; i++) profits[i] = sc.nextInt();\n            for (int i = 0; i < n; i++) capital[i] = sc.nextInt();\n            System.out.println(findMaximizedCapital(k, w, profits, capital));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint findMaximizedCapital(int k, int w, int* profits, int* capital, int n) {\n    return 0;\n}\n\nint main() {\n    int k, w, n;\n    if (scanf("%d", &k) != 1) return 0;\n    scanf("%d", &w);\n    scanf("%d", &n);\n    int* profits = (int*)malloc(n * sizeof(int));\n    int* capital = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &profits[i]);\n    for (int i = 0; i < n; i++) scanf("%d", &capital[i]);\n    printf("%d\\n", findMaximizedCapital(k, w, profits, capital, n));\n    free(profits);\n    free(capital);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint findMaximizedCapital(int k, int w, vector<int>& profits, vector<int>& capital) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int k, w, n;\n    if (cin >> k) {\n        cin >> w;\n        cin >> n;\n        vector<int> profits(n), capital(n);\n        for (int i = 0; i < n; i++) cin >> profits[i];\n        for (int i = 0; i < n; i++) cin >> capital[i];\n        cout << findMaximizedCapital(k, w, profits, capital) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'hp-h5',
  title: 'Minimum Interval to Include Each Query',
  difficulty: 'Hard',
  description: 'You are given a 2D integer array `intervals`, where `intervals[i] = [left, right]`, representing inclusive intervals, and an integer array `queries`. For each query, return the size of the smallest interval that contains it. If no interval contains the query, return `-1`. Solve using sorting and a Min Heap.',
  constraints: [
    '1 <= intervals.length, queries.length <= 10^5',
    '1 <= left <= right <= 10^7',
    '1 <= queries[i] <= 10^7'
  ],
  examples: [
    {
      input: 'intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5]',
      output: '[3,3,1,4]',
      explanation: 'For each query, return the size of the smallest interval containing it.'
    },
    {
      input: 'intervals = [[2,3],[2,5],[1,8],[20,25]], queries = [2,19,5,22]',
      output: '[2,-1,4,6]',
      explanation: 'Queries not covered by any interval return -1.'
    }
  ],
  testCases: [
    {
      input: '4\n1 4\n2 4\n3 6\n4 4\n4\n2 3 4 5',
      expectedOutput: '3 3 1 4',
      hidden: false
    },
    {
      input: '4\n2 3\n2 5\n1 8\n20 25\n4\n2 19 5 22',
      expectedOutput: '2 -1 4 6',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def min_interval(intervals, queries):\n    pass\n\nn = int(input())\nintervals = [list(map(int, input().split())) for _ in range(n)]\nq = int(input())\nqueries = list(map(int, input().split()))\nprint(*min_interval(intervals, queries))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int[] minInterval(int[][] intervals, int[] queries) {\n        return new int[0];\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[][] intervals = new int[n][2];\n            for (int i = 0; i < n; i++) {\n                intervals[i][0] = sc.nextInt();\n                intervals[i][1] = sc.nextInt();\n            }\n            int q = sc.nextInt();\n            int[] queries = new int[q];\n            for (int i = 0; i < q; i++) queries[i] = sc.nextInt();\n            int[] ans = minInterval(intervals, queries);\n            for (int i = 0; i < ans.length; i++) {\n                System.out.print(ans[i]);\n                if (i + 1 < ans.length) System.out.print(" ");\n            }\n            System.out.println();\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint* minInterval(int** intervals, int intervalsSize, int* queries, int queriesSize, int* returnSize) {\n    *returnSize = 0;\n    return NULL;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int** intervals = (int**)malloc(n * sizeof(int*));\n    for (int i = 0; i < n; i++) {\n        intervals[i] = (int*)malloc(2 * sizeof(int));\n        scanf("%d %d", &intervals[i][0], &intervals[i][1]);\n    }\n    int q;\n    scanf("%d", &q);\n    int* queries = (int*)malloc(q * sizeof(int));\n    for (int i = 0; i < q; i++) scanf("%d", &queries[i]);\n    int returnSize;\n    int* ans = minInterval(intervals, n, queries, q, &returnSize);\n    for (int i = 0; i < returnSize; i++) {\n        printf("%d", ans[i]);\n        if (i + 1 < returnSize) printf(" ");\n    }\n    printf("\\n");\n    free(ans);\n    free(queries);\n    for (int i = 0; i < n; i++) free(intervals[i]);\n    free(intervals);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nvector<int> minInterval(vector<vector<int>>& intervals, vector<int>& queries) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<vector<int>> intervals(n, vector<int>(2));\n        for (int i = 0; i < n; i++) {\n            cin >> intervals[i][0] >> intervals[i][1];\n        }\n        int q;\n        cin >> q;\n        vector<int> queries(q);\n        for (int i = 0; i < q; i++) cin >> queries[i];\n        vector<int> ans = minInterval(intervals, queries);\n        for (int i = 0; i < ans.size(); i++) {\n            cout << ans[i];\n            if (i + 1 < ans.size()) cout << " ";\n        }\n        cout << "\\n";\n    }\n    return 0;\n}'
  }
}
];