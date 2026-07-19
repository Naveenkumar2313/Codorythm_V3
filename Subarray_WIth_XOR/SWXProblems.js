export const SWXProblems = [
  {
  id: 'sxk-e1',
  title: 'Count Subarrays with XOR Equal to K',
  difficulty: 'Easy',
  description: 'Given an integer array `nums` and an integer `k`, return the number of contiguous subarrays whose XOR is equal to `k`.',
  constraints: ['1 <= nums.length <= 10^5', '0 <= nums[i], k <= 10^6'],
  examples: [
    { input: 'nums = [4,2,2,6,4], k = 6', output: '4', explanation: 'The subarrays are [4,2], [2,2,6], [6], and [2,2,6,4].' },
    { input: 'nums = [5,6,7,8,9], k = 5', output: '2', explanation: 'The subarrays are [5] and [5,6,7,8,9].' }
  ],
  testCases: [
    { input: '5\n4 2 2 6 4\n6', expectedOutput: '4', hidden: false },
    { input: '5\n5 6 7 8 9\n5', expectedOutput: '2', hidden: false }
  ],
  starterCode: {
    python: 'def count_subarrays_xor(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nprint(count_subarrays_xor(nums, k))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int countSubarraysXOR(int[] nums, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n            int k = sc.nextInt();\n            System.out.println(countSubarraysXOR(nums, k));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint countSubarraysXOR(int* nums, int numsSize, int k) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int k;\n    scanf("%d",&k);\n    printf("%d\\n",countSubarraysXOR(nums,n,k));\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint countSubarraysXOR(vector<int>& nums, int k) {\n    return 0;\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int k;\n        cin>>k;\n        cout<<countSubarraysXOR(nums,k)<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'sxk-e2',
  title: 'Check if Any Subarray has XOR K',
  difficulty: 'Easy',
  description: 'Given an integer array `nums` and an integer `k`, determine whether there exists at least one contiguous subarray whose XOR is equal to `k`. Return `true` if such a subarray exists, otherwise return `false`.',
  constraints: ['1 <= nums.length <= 10^5', '0 <= nums[i], k <= 10^6'],
  examples: [
    { input: 'nums = [4,2,2,6,4], k = 6', output: 'true', explanation: 'The subarray [4,2] has XOR equal to 6.' },
    { input: 'nums = [1,2,3], k = 7', output: 'false', explanation: 'No contiguous subarray has XOR equal to 7.' }
  ],
  testCases: [
    { input: '5\n4 2 2 6 4\n6', expectedOutput: 'true', hidden: false },
    { input: '3\n1 2 3\n7', expectedOutput: 'false', hidden: false }
  ],
  starterCode: {
    python: 'def has_subarray_xor(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nprint(str(has_subarray_xor(nums, k)).lower())',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static boolean hasSubarrayXOR(int[] nums, int k) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n            int k = sc.nextInt();\n            System.out.println(hasSubarrayXOR(nums, k));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n\nbool hasSubarrayXOR(int* nums, int numsSize, int k) {\n    return false;\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int k;\n    scanf("%d",&k);\n    printf("%s\\n",hasSubarrayXOR(nums,n,k) ? "true" : "false");\n    free(nums);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool hasSubarrayXOR(vector<int>& nums, int k) {\n    return false;\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int k;\n        cin>>k;\n        cout<<(hasSubarrayXOR(nums,k) ? "true" : "false")<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'sxk-e3',
  title: 'Longest Subarray with XOR K',
  difficulty: 'Easy',
  description: 'Given an integer array `nums` and an integer `k`, return the length of the longest contiguous subarray whose XOR is equal to `k`. Return `0` if no such subarray exists.',
  constraints: ['1 <= nums.length <= 10^5', '0 <= nums[i], k <= 10^6'],
  examples: [
    { input: 'nums = [4,2,2,6,4], k = 6', output: '5', explanation: 'The entire array has XOR equal to 6, so the longest length is 5.' },
    { input: 'nums = [1,2,3], k = 7', output: '0', explanation: 'No contiguous subarray has XOR equal to 7.' }
  ],
  testCases: [
    { input: '5\n4 2 2 6 4\n6', expectedOutput: '5', hidden: false },
    { input: '3\n1 2 3\n7', expectedOutput: '0', hidden: false }
  ],
  starterCode: {
    python: 'def longest_subarray_xor(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nprint(longest_subarray_xor(nums, k))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int longestSubarrayXOR(int[] nums, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n            int k = sc.nextInt();\n            System.out.println(longestSubarrayXOR(nums, k));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint longestSubarrayXOR(int* nums, int numsSize, int k) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int k;\n    scanf("%d",&k);\n    printf("%d\\n",longestSubarrayXOR(nums,n,k));\n    free(nums);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint longestSubarrayXOR(vector<int>& nums, int k) {\n    return 0;\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int k;\n        cin>>k;\n        cout<<longestSubarrayXOR(nums,k)<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'sxk-e4',
  title: 'First Subarray with XOR K',
  difficulty: 'Easy',
  description: 'Given an integer array `nums` and an integer `k`, return the starting and ending indices of the first contiguous subarray whose XOR is equal to `k`. If no such subarray exists, return `-1 -1`.',
  constraints: ['1 <= nums.length <= 10^5', '0 <= nums[i], k <= 10^6'],
  examples: [
    { input: 'nums = [4,2,2,6,4], k = 6', output: '0 1', explanation: 'The first subarray with XOR 6 is [4,2], which spans indices 0 to 1.' },
    { input: 'nums = [1,2,3], k = 7', output: '-1 -1', explanation: 'No contiguous subarray has XOR equal to 7.' }
  ],
  testCases: [
    { input: '5\n4 2 2 6 4\n6', expectedOutput: '0 1', hidden: false },
    { input: '3\n1 2 3\n7', expectedOutput: '-1 -1', hidden: false }
  ],
  starterCode: {
    python: 'def first_subarray_xor(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nstart, end = first_subarray_xor(nums, k)\nprint(start, end)',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int[] firstSubarrayXOR(int[] nums, int k) {\n        return new int[]{-1,-1};\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n            int k = sc.nextInt();\n            int[] ans = firstSubarrayXOR(nums, k);\n            System.out.println(ans[0] + " " + ans[1]);\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid firstSubarrayXOR(int* nums, int numsSize, int k, int* start, int* end) {\n    *start = -1;\n    *end = -1;\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int k;\n    scanf("%d",&k);\n    int start,end;\n    firstSubarrayXOR(nums,n,k,&start,&end);\n    printf("%d %d\\n",start,end);\n    free(nums);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n#include <utility>\nusing namespace std;\n\npair<int,int> firstSubarrayXOR(vector<int>& nums, int k) {\n    return {-1,-1};\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int k;\n        cin>>k;\n        auto ans=firstSubarrayXOR(nums,k);\n        cout<<ans.first<<" "<<ans.second<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'sxk-e5',
  title: 'Count Prefix XOR Equal to K',
  difficulty: 'Easy',
  description: 'Given an integer array `nums` and an integer `k`, count the number of prefixes whose XOR is equal to `k`. A prefix is a contiguous subarray that starts from index `0`.',
  constraints: ['1 <= nums.length <= 10^5', '0 <= nums[i], k <= 10^6'],
  examples: [
    { input: 'nums = [4,2,2,6,4], k = 6', output: '2', explanation: 'The prefixes [4,2] and [4,2,2,6,4] have XOR equal to 6.' },
    { input: 'nums = [1,2,3], k = 0', output: '1', explanation: 'Only the prefix [1,2,3] has XOR equal to 0.' }
  ],
  testCases: [
    { input: '5\n4 2 2 6 4\n6', expectedOutput: '2', hidden: false },
    { input: '3\n1 2 3\n0', expectedOutput: '1', hidden: false }
  ],
  starterCode: {
    python: 'def count_prefix_xor(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nprint(count_prefix_xor(nums, k))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int countPrefixXOR(int[] nums, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n            int k = sc.nextInt();\n            System.out.println(countPrefixXOR(nums, k));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint countPrefixXOR(int* nums, int numsSize, int k) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int k;\n    scanf("%d",&k);\n    printf("%d\\n",countPrefixXOR(nums,n,k));\n    free(nums);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint countPrefixXOR(vector<int>& nums, int k) {\n    return 0;\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int k;\n        cin>>k;\n        cout<<countPrefixXOR(nums,k)<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'sxk-m1',
  title: 'Subarrays with XOR Less Than K',
  difficulty: 'Medium',
  description: 'Given an integer array `nums` and an integer `k`, return the number of contiguous subarrays whose XOR value is strictly less than `k`.',
  constraints: ['1 <= nums.length <= 10^5', '0 <= nums[i], k <= 10^9'],
  examples: [
    { input: 'nums = [1,2,3], k = 2', output: '3', explanation: 'The valid subarrays are [1], [2], and [2,3].' },
    { input: 'nums = [4,1,3], k = 4', output: '4', explanation: 'There are 4 subarrays whose XOR is less than 4.' }
  ],
  testCases: [
    { input: '3\n1 2 3\n2', expectedOutput: '3', hidden: false },
    { input: '3\n4 1 3\n4', expectedOutput: '4', hidden: false }
  ],
  starterCode: {
    python: 'def count_subarrays_xor_less_than_k(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nprint(count_subarrays_xor_less_than_k(nums, k))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static long countSubarraysXORLessThanK(int[] nums, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n            int k = sc.nextInt();\n            System.out.println(countSubarraysXORLessThanK(nums, k));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nlong long countSubarraysXORLessThanK(int* nums, int numsSize, int k) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int k;\n    scanf("%d",&k);\n    printf("%lld\\n",countSubarraysXORLessThanK(nums,n,k));\n    free(nums);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nlong long countSubarraysXORLessThanK(vector<int>& nums, int k) {\n    return 0;\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int k;\n        cin>>k;\n        cout<<countSubarraysXORLessThanK(nums,k)<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'sxk-m2',
  title: 'Maximum XOR of Any Subarray',
  difficulty: 'Medium',
  description: 'Given an integer array `nums`, return the maximum XOR value among all possible contiguous subarrays.',
  constraints: ['1 <= nums.length <= 10^5', '0 <= nums[i] <= 10^9'],
  examples: [
    { input: 'nums = [1,2,3]', output: '3', explanation: 'The maximum XOR is obtained from the subarray [3].' },
    { input: 'nums = [8,1,2,12]', output: '15', explanation: 'The subarray [1,2,12] has XOR equal to 15, which is the maximum.' }
  ],
  testCases: [
    { input: '3\n1 2 3', expectedOutput: '3', hidden: false },
    { input: '4\n8 1 2 12', expectedOutput: '15', hidden: false }
  ],
  starterCode: {
    python: 'def maximum_subarray_xor(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(maximum_subarray_xor(nums))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int maximumSubarrayXOR(int[] nums) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n            System.out.println(maximumSubarrayXOR(nums));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint maximumSubarrayXOR(int* nums, int numsSize) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    printf("%d\\n",maximumSubarrayXOR(nums,n));\n    free(nums);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint maximumSubarrayXOR(vector<int>& nums) {\n    return 0;\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        cout<<maximumSubarrayXOR(nums)<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'sxk-m3',
  title: 'Minimum Length Subarray with XOR K',
  difficulty: 'Medium',
  description: 'Given an integer array `nums` and an integer `k`, return the length of the shortest contiguous subarray whose XOR is equal to `k`. Return `-1` if no such subarray exists.',
  constraints: ['1 <= nums.length <= 10^5', '0 <= nums[i], k <= 10^9'],
  examples: [
    { input: 'nums = [4,2,2,6,4], k = 6', output: '1', explanation: 'The subarray [6] has XOR equal to 6 and is the shortest.' },
    { input: 'nums = [1,2,3], k = 7', output: '-1', explanation: 'No contiguous subarray has XOR equal to 7.' }
  ],
  testCases: [
    { input: '5\n4 2 2 6 4\n6', expectedOutput: '1', hidden: false },
    { input: '3\n1 2 3\n7', expectedOutput: '-1', hidden: false }
  ],
  starterCode: {
    python: 'def minimum_subarray_xor(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nprint(minimum_subarray_xor(nums, k))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int minimumSubarrayXOR(int[] nums, int k) {\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n            int k = sc.nextInt();\n            System.out.println(minimumSubarrayXOR(nums, k));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint minimumSubarrayXOR(int* nums, int numsSize, int k) {\n    return -1;\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int k;\n    scanf("%d",&k);\n    printf("%d\\n",minimumSubarrayXOR(nums,n,k));\n    free(nums);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint minimumSubarrayXOR(vector<int>& nums, int k) {\n    return -1;\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int k;\n        cin>>k;\n        cout<<minimumSubarrayXOR(nums,k)<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'sxk-m4',
  title: 'Count Subarrays with XOR in Range [L, R]',
  difficulty: 'Medium',
  description: 'Given an integer array `nums` and two integers `L` and `R`, return the number of contiguous subarrays whose XOR value lies in the inclusive range `[L, R]`.',
  constraints: ['1 <= nums.length <= 10^5', '0 <= nums[i], L, R <= 10^9', '0 <= L <= R <= 10^9'],
  examples: [
    { input: 'nums = [1,2,3], L = 1, R = 2', output: '4', explanation: 'The valid subarrays are [1], [2], [2,3], and [1,2].' },
    { input: 'nums = [4,1,3], L = 2, R = 6', output: '5', explanation: 'There are 5 subarrays whose XOR lies between 2 and 6 inclusive.' }
  ],
  testCases: [
    { input: '3\n1 2 3\n1 2', expectedOutput: '4', hidden: false },
    { input: '3\n4 1 3\n2 6', expectedOutput: '5', hidden: false }
  ],
  starterCode: {
    python: 'def count_subarrays_xor_in_range(nums, L, R):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nL, R = map(int, input().split())\nprint(count_subarrays_xor_in_range(nums, L, R))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static long countSubarraysXORInRange(int[] nums, int L, int R) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n            int L = sc.nextInt();\n            int R = sc.nextInt();\n            System.out.println(countSubarraysXORInRange(nums, L, R));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nlong long countSubarraysXORInRange(int* nums, int numsSize, int L, int R) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int L,R;\n    scanf("%d %d",&L,&R);\n    printf("%lld\\n",countSubarraysXORInRange(nums,n,L,R));\n    free(nums);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nlong long countSubarraysXORInRange(vector<int>& nums, int L, int R) {\n    return 0;\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int L,R;\n        cin>>L>>R;\n        cout<<countSubarraysXORInRange(nums,L,R)<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'sxk-m5',
  title: 'Queries on Subarray XOR',
  difficulty: 'Medium',
  description: 'You are given an integer array `nums` and `q` queries. Each query contains two indices `l` and `r`. For every query, return the XOR of the subarray from index `l` to `r` (inclusive).',
  constraints: ['1 <= nums.length, q <= 10^5', '0 <= nums[i] <= 10^9', '0 <= l <= r < nums.length'],
  examples: [
    { input: 'nums = [1,2,3,4], queries = [[0,2],[1,3],[2,2]]', output: '[0, 5, 3]', explanation: 'XORs are 1⊕2⊕3=0, 2⊕3⊕4=5, and 3=3.' },
    { input: 'nums = [5,1,7], queries = [[0,1],[0,2]]', output: '[4, 3]', explanation: 'XORs are 5⊕1=4 and 5⊕1⊕7=3.' }
  ],
  testCases: [
    { input: '4\n1 2 3 4\n3\n0 2\n1 3\n2 2', expectedOutput: '0\n5\n3', hidden: false },
    { input: '3\n5 1 7\n2\n0 1\n0 2', expectedOutput: '4\n3', hidden: false }
  ],
  starterCode: {
    python: 'def subarray_xor_queries(nums, queries):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nq = int(input())\nqueries = [tuple(map(int, input().split())) for _ in range(q)]\nfor ans in subarray_xor_queries(nums, queries):\n    print(ans)',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int[] subarrayXORQueries(int[] nums, int[][] queries) {\n        return new int[queries.length];\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n            int q = sc.nextInt();\n            int[][] queries = new int[q][2];\n            for (int i = 0; i < q; i++) {\n                queries[i][0] = sc.nextInt();\n                queries[i][1] = sc.nextInt();\n            }\n            int[] ans = subarrayXORQueries(nums, queries);\n            for (int x : ans) System.out.println(x);\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint* subarrayXORQueries(int* nums, int numsSize, int queries[][2], int q) {\n    return (int*)calloc(q, sizeof(int));\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int q;\n    scanf("%d",&q);\n    int queries[q][2];\n    for(int i=0;i<q;i++) scanf("%d %d",&queries[i][0],&queries[i][1]);\n    int* ans=subarrayXORQueries(nums,n,queries,q);\n    for(int i=0;i<q;i++) printf("%d\\n",ans[i]);\n    free(ans);\n    free(nums);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> subarrayXORQueries(vector<int>& nums, vector<pair<int,int>>& queries) {\n    return vector<int>(queries.size());\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int q;\n        cin>>q;\n        vector<pair<int,int>> queries(q);\n        for(int i=0;i<q;i++) cin>>queries[i].first>>queries[i].second;\n        vector<int> ans=subarrayXORQueries(nums,queries);\n        for(int x:ans) cout<<x<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'sxk-h1',
  title: 'Maximum XOR of Two Prefixes',
  difficulty: 'Hard',
  description: 'Given an integer array `nums`, let `prefixXOR[i]` denote the XOR of elements from index `0` to `i`. Return the maximum XOR value obtainable by XOR-ing any two prefix XOR values.',
  constraints: ['1 <= nums.length <= 2 * 10^5', '0 <= nums[i] <= 10^9'],
  examples: [
    { input: 'nums = [3,10,5,25,2,8]', output: '31', explanation: 'The maximum XOR of any two prefix XOR values is 31.' },
    { input: 'nums = [1,2,3]', output: '3', explanation: 'The maximum XOR obtainable between any two prefix XOR values is 3.' }
  ],
  testCases: [
    { input: '6\n3 10 5 25 2 8', expectedOutput: '31', hidden: false },
    { input: '3\n1 2 3', expectedOutput: '3', hidden: false }
  ],
  starterCode: {
    python: 'def maximum_prefix_xor(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(maximum_prefix_xor(nums))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int maximumPrefixXOR(int[] nums) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n            System.out.println(maximumPrefixXOR(nums));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint maximumPrefixXOR(int* nums, int numsSize) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    printf("%d\\n",maximumPrefixXOR(nums,n));\n    free(nums);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint maximumPrefixXOR(vector<int>& nums) {\n    return 0;\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        cout<<maximumPrefixXOR(nums)<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'sxk-h2',
  title: 'Offline XOR Query Processing',
  difficulty: 'Hard',
  description: 'You are given an integer array `nums` and `q` offline queries. Each query consists of three integers `(l, r, k)`. For every query, return the number of contiguous subarrays completely inside the range `[l, r]` whose XOR is equal to `k`.',
  constraints: ['1 <= nums.length, q <= 2 * 10^5', '0 <= nums[i], k <= 10^9', '0 <= l <= r < nums.length'],
  examples: [
    { input: 'nums = [4,2,2,6,4], queries = [[0,4,6],[1,3,2]]', output: '[4, 2]', explanation: 'The first query has 4 valid subarrays, while the second query has 2 valid subarrays.' },
    { input: 'nums = [1,2,3], queries = [[0,2,0],[1,2,1]]', output: '[1, 1]', explanation: 'Each query has exactly one qualifying subarray.' }
  ],
  testCases: [
    { input: '5\n4 2 2 6 4\n2\n0 4 6\n1 3 2', expectedOutput: '4\n2', hidden: false },
    { input: '3\n1 2 3\n2\n0 2 0\n1 2 1', expectedOutput: '1\n1', hidden: false }
  ],
  starterCode: {
    python: 'def offline_xor_queries(nums, queries):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nq = int(input())\nqueries = [tuple(map(int, input().split())) for _ in range(q)]\nfor ans in offline_xor_queries(nums, queries):\n    print(ans)',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static long[] offlineXORQueries(int[] nums, int[][] queries) {\n        return new long[queries.length];\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n            int q = sc.nextInt();\n            int[][] queries = new int[q][3];\n            for (int i = 0; i < q; i++) {\n                queries[i][0] = sc.nextInt();\n                queries[i][1] = sc.nextInt();\n                queries[i][2] = sc.nextInt();\n            }\n            long[] ans = offlineXORQueries(nums, queries);\n            for (long x : ans) System.out.println(x);\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nlong long* offlineXORQueries(int* nums, int numsSize, int queries[][3], int q) {\n    return (long long*)calloc(q, sizeof(long long));\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int q;\n    scanf("%d",&q);\n    int queries[q][3];\n    for(int i=0;i<q;i++) scanf("%d %d %d",&queries[i][0],&queries[i][1],&queries[i][2]);\n    long long* ans=offlineXORQueries(nums,n,queries,q);\n    for(int i=0;i<q;i++) printf("%lld\\n",ans[i]);\n    free(ans);\n    free(nums);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n#include <array>\nusing namespace std;\n\nvector<long long> offlineXORQueries(vector<int>& nums, vector<array<int,3>>& queries) {\n    return vector<long long>(queries.size());\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int q;\n        cin>>q;\n        vector<array<int,3>> queries(q);\n        for(int i=0;i<q;i++) cin>>queries[i][0]>>queries[i][1]>>queries[i][2];\n        vector<long long> ans=offlineXORQueries(nums,queries);\n        for(long long x:ans) cout<<x<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'sxk-h3',
  title: 'Dynamic Subarray XOR Queries',
  difficulty: 'Hard',
  description: 'You are given an integer array `nums` supporting two types of operations: `UPDATE i x`, which changes `nums[i]` to `x`, and `QUERY l r`, which asks for the XOR of the subarray from index `l` to `r` (inclusive). Return the answer for every query operation.',
  constraints: ['1 <= nums.length, q <= 2 * 10^5', '0 <= nums[i], x <= 10^9', '0 <= l <= r < nums.length'],
  examples: [
    { input: 'nums = [1,2,3,4], operations = [["QUERY",0,3],["UPDATE",1,5],["QUERY",0,3]]', output: '[4, 3]', explanation: 'Initially XOR = 1⊕2⊕3⊕4 = 4. After updating index 1 to 5, XOR becomes 1⊕5⊕3⊕4 = 3.' },
    { input: 'nums = [7,1,6], operations = [["QUERY",1,2],["UPDATE",2,2],["QUERY",0,2]]', output: '[7, 4]', explanation: 'The XOR values after each query are 7 and 4.' }
  ],
  testCases: [
    { input: '4\n1 2 3 4\n3\nQUERY 0 3\nUPDATE 1 5\nQUERY 0 3', expectedOutput: '4\n3', hidden: false },
    { input: '3\n7 1 6\n3\nQUERY 1 2\nUPDATE 2 2\nQUERY 0 2', expectedOutput: '7\n4', hidden: false }
  ],
  starterCode: {
    python: 'def process_operations(nums, operations):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nq = int(input())\noperations = [input().split() for _ in range(q)]\nfor ans in process_operations(nums, operations):\n    print(ans)',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Integer> processOperations(int[] nums, String[][] operations) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n            int q = sc.nextInt();\n            sc.nextLine();\n            String[][] operations = new String[q][];\n            for (int i = 0; i < q; i++) operations[i] = sc.nextLine().split(" ");\n            List<Integer> ans = processOperations(nums, operations);\n            for (int x : ans) System.out.println(x);\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint* processOperations(int* nums, int numsSize, char operations[][30], int q, int* returnSize) {\n    *returnSize = 0;\n    return NULL;\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int q;\n    scanf("%d",&q);\n    getchar();\n    char operations[q][30];\n    for(int i=0;i<q;i++) fgets(operations[i],30,stdin);\n    int returnSize;\n    int* ans=processOperations(nums,n,operations,q,&returnSize);\n    for(int i=0;i<returnSize;i++) printf("%d\\n",ans[i]);\n    free(ans);\n    free(nums);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nvector<int> processOperations(vector<int>& nums, vector<vector<string>>& operations) {\n    return {};\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int q;\n        cin>>q;\n        vector<vector<string>> operations(q, vector<string>(3));\n        for(int i=0;i<q;i++) cin>>operations[i][0]>>operations[i][1]>>operations[i][2];\n        vector<int> ans=processOperations(nums,operations);\n        for(int x:ans) cout<<x<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'sxk-h4',
  title: 'Persistent Trie XOR Queries',
  difficulty: 'Hard',
  description: 'You are given an integer array `nums` and `q` queries. Each query contains three integers `(l, r, x)`. For every query, return the maximum value of `(x XOR y)` where `y` is the XOR of a prefix ending within the subarray `[l, r]`. Solve all queries efficiently using a persistent binary trie.',
  constraints: ['1 <= nums.length, q <= 2 * 10^5', '0 <= nums[i], x <= 10^9', '0 <= l <= r < nums.length'],
  examples: [
    { input: 'nums = [3,10,5,25,2], queries = [[0,4,5],[1,3,7]]', output: '[28, 30]', explanation: 'The maximum XOR values for the two queries are 28 and 30 respectively.' },
    { input: 'nums = [1,2,3], queries = [[0,2,4],[1,2,1]]', output: '[7, 3]', explanation: 'The maximum XOR values for the queries are 7 and 3.' }
  ],
  testCases: [
    { input: '5\n3 10 5 25 2\n2\n0 4 5\n1 3 7', expectedOutput: '28\n30', hidden: false },
    { input: '3\n1 2 3\n2\n0 2 4\n1 2 1', expectedOutput: '7\n3', hidden: false }
  ],
  starterCode: {
    python: 'def persistent_trie_queries(nums, queries):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nq = int(input())\nqueries = [tuple(map(int, input().split())) for _ in range(q)]\nfor ans in persistent_trie_queries(nums, queries):\n    print(ans)',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int[] persistentTrieQueries(int[] nums, int[][] queries) {\n        return new int[queries.length];\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n            int q = sc.nextInt();\n            int[][] queries = new int[q][3];\n            for (int i = 0; i < q; i++) {\n                queries[i][0] = sc.nextInt();\n                queries[i][1] = sc.nextInt();\n                queries[i][2] = sc.nextInt();\n            }\n            int[] ans = persistentTrieQueries(nums, queries);\n            for (int x : ans) System.out.println(x);\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint* persistentTrieQueries(int* nums, int numsSize, int queries[][3], int q) {\n    return (int*)calloc(q, sizeof(int));\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int q;\n    scanf("%d",&q);\n    int queries[q][3];\n    for(int i=0;i<q;i++) scanf("%d %d %d",&queries[i][0],&queries[i][1],&queries[i][2]);\n    int* ans=persistentTrieQueries(nums,n,queries,q);\n    for(int i=0;i<q;i++) printf("%d\\n",ans[i]);\n    free(ans);\n    free(nums);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n#include <array>\nusing namespace std;\n\nvector<int> persistentTrieQueries(vector<int>& nums, vector<array<int,3>>& queries) {\n    return vector<int>(queries.size());\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int q;\n        cin>>q;\n        vector<array<int,3>> queries(q);\n        for(int i=0;i<q;i++) cin>>queries[i][0]>>queries[i][1]>>queries[i][2];\n        vector<int> ans=persistentTrieQueries(nums,queries);\n        for(int x:ans) cout<<x<<"\\n";\n    }\n    return 0;\n}'
  }
}
];

