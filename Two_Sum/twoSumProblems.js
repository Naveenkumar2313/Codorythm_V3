export const twoSumProblems = [
  {
  id: 'ts-e1',
  title: 'Classic Two Sum',
  difficulty: 'Easy',
  description: 'Given an integer array `nums` and an integer `target`, return the indices of the two numbers such that they add up to `target`. It is guaranteed that exactly one solution exists, and you may not use the same element twice.',
  constraints: [
    '2 <= nums.length <= 10^4',
    '-10^9 <= nums[i] <= 10^9',
    '-10^9 <= target <= 10^9'
  ],
  examples: [
    {
      input: 'nums = [2,7,11,15], target = 9',
      output: '[0,1]',
      explanation: 'nums[0] + nums[1] = 2 + 7 = 9.'
    },
    {
      input: 'nums = [3,2,4], target = 6',
      output: '[1,2]',
      explanation: 'nums[1] + nums[2] = 2 + 4 = 6.'
    }
  ],
  testCases: [
    {
      input: '4\n2 7 11 15\n9',
      expectedOutput: '0 1',
      hidden: false
    },
    {
      input: '3\n3 2 4\n6',
      expectedOutput: '1 2',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def two_sum(nums, target):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\ntarget = int(input())\nresult = two_sum(nums, target)\nprint(result[0], result[1])',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int[] twoSum(int[] nums, int target) {\n        return new int[]{-1,-1};\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            int target = sc.nextInt();\n            int[] ans = twoSum(nums,target);\n            System.out.println(ans[0] + " " + ans[1]);\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint* twoSum(int* nums,int numsSize,int target){\n    return NULL;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int target;\n    scanf("%d",&target);\n    int* ans=twoSum(nums,n,target);\n    printf("%d %d\\n",ans[0],ans[1]);\n    free(ans);\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> twoSum(vector<int>& nums,int target){\n    return {-1,-1};\n}\n\nint main(){\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int target;\n        cin>>target;\n        vector<int> ans=twoSum(nums,target);\n        cout<<ans[0]<<\" \"<<ans[1]<<\"\\n\";\n    }\n    return 0;\n}'
  }
},
  {
  id: 'ts-e2',
  title: 'Two Sum Exists',
  difficulty: 'Easy',
  description: 'Given an integer array `nums` and an integer `target`, determine whether there exists a pair of distinct elements whose sum equals the target. Return `true` if such a pair exists; otherwise, return `false`.',
  constraints: [
    '2 <= nums.length <= 10^4',
    '-10^9 <= nums[i] <= 10^9',
    '-10^9 <= target <= 10^9'
  ],
  examples: [
    {
      input: 'nums = [10,15,3,7], target = 17',
      output: 'true',
      explanation: '10 + 7 = 17, so a valid pair exists.'
    },
    {
      input: 'nums = [1,2,3,4], target = 10',
      output: 'false',
      explanation: 'No two elements add up to 10.'
    }
  ],
  testCases: [
    {
      input: '4\n10 15 3 7\n17',
      expectedOutput: 'true',
      hidden: false
    },
    {
      input: '4\n1 2 3 4\n10',
      expectedOutput: 'false',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def two_sum_exists(nums, target):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\ntarget = int(input())\nprint(str(two_sum_exists(nums, target)).lower())',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static boolean twoSumExists(int[] nums, int target) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            int target = sc.nextInt();\n            System.out.println(twoSumExists(nums,target));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n\nbool twoSumExists(int* nums,int numsSize,int target){\n    return false;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int target;\n    scanf("%d",&target);\n    printf("%s\\n",twoSumExists(nums,n,target) ? "true" : "false");\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool twoSumExists(vector<int>& nums,int target){\n    return false;\n}\n\nint main(){\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int target;\n        cin>>target;\n        cout<<(twoSumExists(nums,target) ? "true" : "false")<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'ts-e3',
  title: 'Count Pairs with Target Sum',
  difficulty: 'Easy',
  description: 'Given an integer array `nums` and an integer `target`, return the total number of unique index pairs `(i, j)` such that `i < j` and `nums[i] + nums[j] == target`.',
  constraints: [
    '2 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9',
    '-10^9 <= target <= 10^9'
  ],
  examples: [
    {
      input: 'nums = [1,5,7,-1,5], target = 6',
      output: '3',
      explanation: 'The valid pairs are (1,5), (7,-1), and the second (5,1).'
    },
    {
      input: 'nums = [1,1,1,1], target = 2',
      output: '6',
      explanation: 'Every pair of indices forms a valid pair.'
    }
  ],
  testCases: [
    {
      input: '5\n1 5 7 -1 5\n6',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '4\n1 1 1 1\n2',
      expectedOutput: '6',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def count_pairs(nums, target):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\ntarget = int(input())\nprint(count_pairs(nums, target))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int countPairs(int[] nums, int target) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            int target = sc.nextInt();\n            System.out.println(countPairs(nums,target));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint countPairs(int* nums,int numsSize,int target){\n    return 0;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int target;\n    scanf("%d",&target);\n    printf("%d\\n",countPairs(nums,n,target));\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint countPairs(vector<int>& nums,int target){\n    return 0;\n}\n\nint main(){\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int target;\n        cin>>target;\n        cout<<countPairs(nums,target)<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'ts-e4',
  title: 'Two Sum in Sorted Array',
  difficulty: 'Easy',
  description: 'Given a **1-indexed** sorted array of integers `numbers` in non-decreasing order and an integer `target`, return the indices of the two numbers such that they add up to the target. Return the answer as `[index1, index2]`, where `1 <= index1 < index2 <= numbers.length`. It is guaranteed that exactly one solution exists.',
  constraints: [
    '2 <= numbers.length <= 3 * 10^4',
    '-1000 <= numbers[i] <= 1000',
    '-1000 <= target <= 1000',
    'numbers is sorted in non-decreasing order'
  ],
  examples: [
    {
      input: 'numbers = [2,7,11,15], target = 9',
      output: '[1,2]',
      explanation: 'numbers[1] + numbers[2] = 2 + 7 = 9.'
    },
    {
      input: 'numbers = [2,3,4], target = 6',
      output: '[1,3]',
      explanation: 'numbers[1] + numbers[3] = 2 + 4 = 6.'
    }
  ],
  testCases: [
    {
      input: '4\n2 7 11 15\n9',
      expectedOutput: '1 2',
      hidden: false
    },
    {
      input: '3\n2 3 4\n6',
      expectedOutput: '1 3',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def two_sum_sorted(numbers, target):\n    pass\n\nn = int(input())\nnumbers = list(map(int, input().split()))\ntarget = int(input())\nresult = two_sum_sorted(numbers, target)\nprint(result[0], result[1])',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int[] twoSumSorted(int[] numbers, int target) {\n        return new int[]{-1,-1};\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n = sc.nextInt();\n            int[] numbers = new int[n];\n            for(int i=0;i<n;i++) numbers[i]=sc.nextInt();\n            int target = sc.nextInt();\n            int[] ans = twoSumSorted(numbers,target);\n            System.out.println(ans[0] + " " + ans[1]);\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint* twoSumSorted(int* numbers,int numbersSize,int target){\n    return NULL;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* numbers=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&numbers[i]);\n    int target;\n    scanf("%d",&target);\n    int* ans=twoSumSorted(numbers,n,target);\n    printf("%d %d\\n",ans[0],ans[1]);\n    free(ans);\n    free(numbers);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> twoSumSorted(vector<int>& numbers,int target){\n    return {-1,-1};\n}\n\nint main(){\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if(cin>>n){\n        vector<int> numbers(n);\n        for(int i=0;i<n;i++) cin>>numbers[i];\n        int target;\n        cin>>target;\n        vector<int> ans=twoSumSorted(numbers,target);\n        cout<<ans[0]<<" "<<ans[1]<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'ts-e5',
  title: 'First Valid Pair',
  difficulty: 'Easy',
  description: 'Given an integer array `nums` and an integer `target`, return the indices of the **first valid pair** encountered while traversing the array from left to right. For each element, search only among the previously visited elements. Return `[-1, -1]` if no such pair exists.',
  constraints: [
    '2 <= nums.length <= 10^4',
    '-10^9 <= nums[i] <= 10^9',
    '-10^9 <= target <= 10^9'
  ],
  examples: [
    {
      input: 'nums = [1,4,5,3,2], target = 7',
      output: '[2,3]',
      explanation: 'While scanning left to right, the first valid pair found is (5,2) at indices 2 and 4? No. The first complement found is 3 for 4? Actually, when processing 3 at index 3, its complement 4 already exists at index 1, so the first valid pair is [1,3].'
    },
    {
      input: 'nums = [8,1,6,4], target = 20',
      output: '[-1,-1]',
      explanation: 'No pair sums to 20.'
    }
  ],
  testCases: [
    {
      input: '5\n1 4 5 3 2\n7',
      expectedOutput: '1 3',
      hidden: false
    },
    {
      input: '4\n8 1 6 4\n20',
      expectedOutput: '-1 -1',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def first_valid_pair(nums, target):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\ntarget = int(input())\nresult = first_valid_pair(nums, target)\nprint(result[0], result[1])',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int[] firstValidPair(int[] nums, int target) {\n        return new int[]{-1,-1};\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            int target = sc.nextInt();\n            int[] ans = firstValidPair(nums,target);\n            System.out.println(ans[0] + " " + ans[1]);\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint* firstValidPair(int* nums,int numsSize,int target){\n    return NULL;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int target;\n    scanf("%d",&target);\n    int* ans=firstValidPair(nums,n,target);\n    printf("%d %d\\n",ans[0],ans[1]);\n    free(ans);\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> firstValidPair(vector<int>& nums,int target){\n    return {-1,-1};\n}\n\nint main(){\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int target;\n        cin>>target;\n        vector<int> ans=firstValidPair(nums,target);\n        cout<<ans[0]<<" "<<ans[1]<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'ts-m1',
  title: 'Two Sum Less Than Target',
  difficulty: 'Medium',
  description: 'Given an integer array `nums` and an integer `target`, return the maximum possible sum of two distinct elements that is strictly less than the target. Return `-1` if no such pair exists.',
  constraints: [
    '2 <= nums.length <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
    '-10^4 <= target <= 10^4'
  ],
  examples: [
    {
      input: 'nums = [34,23,1,24,75,33,54,8], target = 60',
      output: '58',
      explanation: 'The pair (34,24) gives the largest sum less than 60.'
    },
    {
      input: 'nums = [10,20,30], target = 15',
      output: '-1',
      explanation: 'No pair has a sum strictly less than 15.'
    }
  ],
  testCases: [
    {
      input: '8\n34 23 1 24 75 33 54 8\n60',
      expectedOutput: '58',
      hidden: false
    },
    {
      input: '3\n10 20 30\n15',
      expectedOutput: '-1',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def two_sum_less_than_target(nums, target):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\ntarget = int(input())\nprint(two_sum_less_than_target(nums, target))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int twoSumLessThanTarget(int[] nums, int target) {\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            int target = sc.nextInt();\n            System.out.println(twoSumLessThanTarget(nums,target));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint twoSumLessThanTarget(int* nums,int numsSize,int target){\n    return -1;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int target;\n    scanf("%d",&target);\n    printf("%d\\n",twoSumLessThanTarget(nums,n,target));\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint twoSumLessThanTarget(vector<int>& nums,int target){\n    return -1;\n}\n\nint main(){\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int target;\n        cin>>target;\n        cout<<twoSumLessThanTarget(nums,target)<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'ts-m2',
  title: 'Two Sum Closest',
  difficulty: 'Medium',
  description: 'Given an integer array `nums` and an integer `target`, return the sum of the two distinct elements whose sum is closest to the target. If multiple pairs have the same minimum difference, return the smaller sum.',
  constraints: [
    '2 <= nums.length <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
    '-10^4 <= target <= 10^4'
  ],
  examples: [
    {
      input: 'nums = [-1,2,1,-4], target = 4',
      output: '3',
      explanation: 'The pair (2,1) has sum 3, which is closest to 4.'
    },
    {
      input: 'nums = [5,2,8,14], target = 10',
      output: '10',
      explanation: 'The pair (2,8) sums exactly to the target.'
    }
  ],
  testCases: [
    {
      input: '4\n-1 2 1 -4\n4',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '4\n5 2 8 14\n10',
      expectedOutput: '10',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def two_sum_closest(nums, target):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\ntarget = int(input())\nprint(two_sum_closest(nums, target))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int twoSumClosest(int[] nums, int target) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            int target = sc.nextInt();\n            System.out.println(twoSumClosest(nums,target));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint twoSumClosest(int* nums,int numsSize,int target){\n    return 0;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int target;\n    scanf("%d",&target);\n    printf("%d\\n",twoSumClosest(nums,n,target));\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint twoSumClosest(vector<int>& nums,int target){\n    return 0;\n}\n\nint main(){\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int target;\n        cin>>target;\n        cout<<twoSumClosest(nums,target)<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'ts-m3',
  title: 'Maximum Number of K-Sum Pairs',
  difficulty: 'Medium',
  description: 'You are given an integer array `nums` and an integer `k`. In one operation, you can pick two numbers from the array whose sum equals `k` and remove them. Return the maximum number of operations you can perform.',
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
    '1 <= k <= 10^9'
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4], k = 5',
      output: '2',
      explanation: 'Remove (1,4) and (2,3). A total of 2 operations can be performed.'
    },
    {
      input: 'nums = [3,1,3,4,3], k = 6',
      output: '1',
      explanation: 'Only one pair (3,3) can be removed.'
    }
  ],
  testCases: [
    {
      input: '4\n1 2 3 4\n5',
      expectedOutput: '2',
      hidden: false
    },
    {
      input: '5\n3 1 3 4 3\n6',
      expectedOutput: '1',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def max_operations(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nprint(max_operations(nums, k))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int maxOperations(int[] nums, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            int k = sc.nextInt();\n            System.out.println(maxOperations(nums,k));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint maxOperations(int* nums,int numsSize,int k){\n    return 0;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int k;\n    scanf("%d",&k);\n    printf("%d\\n",maxOperations(nums,n,k));\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint maxOperations(vector<int>& nums,int k){\n    return 0;\n}\n\nint main(){\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int k;\n        cin>>k;\n        cout<<maxOperations(nums,k)<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'ts-m4',
  title: 'Count Good Pairs',
  difficulty: 'Medium',
  description: 'Given an integer array `nums`, return the number of good pairs. A pair `(i, j)` is called good if `nums[i] == nums[j]` and `i < j`.',
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 100'
  ],
  examples: [
    {
      input: 'nums = [1,2,3,1,1,3]',
      output: '4',
      explanation: 'The good pairs are (0,3), (0,4), (3,4), and (2,5).'
    },
    {
      input: 'nums = [1,1,1,1]',
      output: '6',
      explanation: 'Every pair of equal elements forms a good pair.'
    }
  ],
  testCases: [
    {
      input: '6\n1 2 3 1 1 3',
      expectedOutput: '4',
      hidden: false
    },
    {
      input: '4\n1 1 1 1',
      expectedOutput: '6',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def count_good_pairs(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(count_good_pairs(nums))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int countGoodPairs(int[] nums) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            System.out.println(countGoodPairs(nums));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint countGoodPairs(int* nums,int numsSize){\n    return 0;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    printf("%d\\n",countGoodPairs(nums,n));\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint countGoodPairs(vector<int>& nums){\n    return 0;\n}\n\nint main(){\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        cout<<countGoodPairs(nums)<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'ts-m5',
  title: 'Four Sum Count',
  difficulty: 'Medium',
  description: 'Given four integer arrays `nums1`, `nums2`, `nums3`, and `nums4` all of length `n`, return the number of tuples `(i, j, k, l)` such that `nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0`.',
  constraints: [
    '1 <= n <= 200',
    '-2^28 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 2^28'
  ],
  examples: [
    {
      input: 'nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]',
      output: '2',
      explanation: 'The valid tuples are (0,0,0,1) and (1,1,0,0).'
    },
    {
      input: 'nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]',
      output: '1',
      explanation: 'The only possible tuple sums to 0.'
    }
  ],
  testCases: [
    {
      input: '2\n1 2\n-2 -1\n-1 2\n0 2',
      expectedOutput: '2',
      hidden: false
    },
    {
      input: '1\n0\n0\n0\n0',
      expectedOutput: '1',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def four_sum_count(nums1, nums2, nums3, nums4):\n    pass\n\nn = int(input())\nnums1 = list(map(int, input().split()))\nnums2 = list(map(int, input().split()))\nnums3 = list(map(int, input().split()))\nnums4 = list(map(int, input().split()))\nprint(four_sum_count(nums1, nums2, nums3, nums4))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int fourSumCount(int[] nums1, int[] nums2, int[] nums3, int[] nums4) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n = sc.nextInt();\n            int[] nums1 = new int[n];\n            int[] nums2 = new int[n];\n            int[] nums3 = new int[n];\n            int[] nums4 = new int[n];\n            for(int i=0;i<n;i++) nums1[i]=sc.nextInt();\n            for(int i=0;i<n;i++) nums2[i]=sc.nextInt();\n            for(int i=0;i<n;i++) nums3[i]=sc.nextInt();\n            for(int i=0;i<n;i++) nums4[i]=sc.nextInt();\n            System.out.println(fourSumCount(nums1,nums2,nums3,nums4));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint fourSumCount(int* nums1,int* nums2,int* nums3,int* nums4,int n){\n    return 0;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums1=(int*)malloc(n*sizeof(int));\n    int* nums2=(int*)malloc(n*sizeof(int));\n    int* nums3=(int*)malloc(n*sizeof(int));\n    int* nums4=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums1[i]);\n    for(int i=0;i<n;i++) scanf("%d",&nums2[i]);\n    for(int i=0;i<n;i++) scanf("%d",&nums3[i]);\n    for(int i=0;i<n;i++) scanf("%d",&nums4[i]);\n    printf("%d\\n",fourSumCount(nums1,nums2,nums3,nums4,n));\n    free(nums1); free(nums2); free(nums3); free(nums4);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint fourSumCount(vector<int>& nums1,vector<int>& nums2,vector<int>& nums3,vector<int>& nums4){\n    return 0;\n}\n\nint main(){\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if(cin>>n){\n        vector<int> nums1(n),nums2(n),nums3(n),nums4(n);\n        for(int i=0;i<n;i++) cin>>nums1[i];\n        for(int i=0;i<n;i++) cin>>nums2[i];\n        for(int i=0;i<n;i++) cin>>nums3[i];\n        for(int i=0;i<n;i++) cin>>nums4[i];\n        cout<<fourSumCount(nums1,nums2,nums3,nums4)<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'ts-h1',
  title: 'Three Sum',
  difficulty: 'Hard',
  description: 'Given an integer array `nums`, return all unique triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, `j != k`, and `nums[i] + nums[j] + nums[k] == 0`. The solution set must not contain duplicate triplets. Output the triplets in lexicographical order.',
  constraints: [
    '3 <= nums.length <= 3000',
    '-10^5 <= nums[i] <= 10^5'
  ],
  examples: [
    {
      input: 'nums = [-1,0,1,2,-1,-4]',
      output: '[[-1,-1,2],[-1,0,1]]',
      explanation: 'These are the only unique triplets whose sum equals 0.'
    },
    {
      input: 'nums = [0,1,1]',
      output: '[]',
      explanation: 'No three numbers sum to 0.'
    }
  ],
  testCases: [
    {
      input: '6\n-1 0 1 2 -1 -4',
      expectedOutput: '[[-1,-1,2],[-1,0,1]]',
      hidden: false
    },
    {
      input: '3\n0 1 1',
      expectedOutput: '[]',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def three_sum(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(three_sum(nums))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<List<Integer>> threeSum(int[] nums) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            System.out.println(threeSum(nums));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid threeSum(int* nums,int numsSize){\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    threeSum(nums,n);\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<vector<int>> threeSum(vector<int>& nums){\n    return {};\n}\n\nint main(){\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        cout<<\"[\";\n        vector<vector<int>> ans=threeSum(nums);\n        for(int i=0;i<ans.size();i++){\n            if(i) cout<<\",\";\n            cout<<\"[\";\n            for(int j=0;j<ans[i].size();j++){\n                if(j) cout<<\",\";\n                cout<<ans[i][j];\n            }\n            cout<<\"]\";\n        }\n        cout<<\"]\\n\";\n    }\n    return 0;\n}'
  }
},{
  id: 'ts-h2',
  title: 'Four Sum',
  difficulty: 'Hard',
  description: 'Given an integer array `nums` and an integer `target`, return all unique quadruplets `[nums[a], nums[b], nums[c], nums[d]]` such that `a`, `b`, `c`, and `d` are distinct indices and `nums[a] + nums[b] + nums[c] + nums[d] == target`. The solution set must not contain duplicate quadruplets. Output the quadruplets in lexicographical order.',
  constraints: [
    '4 <= nums.length <= 200',
    '-10^9 <= nums[i] <= 10^9',
    '-10^9 <= target <= 10^9'
  ],
  examples: [
    {
      input: 'nums = [1,0,-1,0,-2,2], target = 0',
      output: '[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]',
      explanation: 'These are all the unique quadruplets whose sum equals the target.'
    },
    {
      input: 'nums = [2,2,2,2,2], target = 8',
      output: '[[2,2,2,2]]',
      explanation: 'Only one unique quadruplet exists.'
    }
  ],
  testCases: [
    {
      input: '6\n1 0 -1 0 -2 2\n0',
      expectedOutput: '[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]',
      hidden: false
    },
    {
      input: '5\n2 2 2 2 2\n8',
      expectedOutput: '[[2,2,2,2]]',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def four_sum(nums, target):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\ntarget = int(input())\nprint(four_sum(nums, target))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<List<Integer>> fourSum(int[] nums, int target) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            int target = sc.nextInt();\n            System.out.println(fourSum(nums,target));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid fourSum(int* nums,int numsSize,int target){\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int target;\n    scanf("%d",&target);\n    fourSum(nums,n,target);\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<vector<int>> fourSum(vector<int>& nums,int target){\n    return {};\n}\n\nint main(){\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int target;\n        cin>>target;\n        vector<vector<int>> ans=fourSum(nums,target);\n        cout<<\"[\";\n        for(int i=0;i<ans.size();i++){\n            if(i) cout<<\",\";\n            cout<<\"[\";\n            for(int j=0;j<ans[i].size();j++){\n                if(j) cout<<\",\";\n                cout<<ans[i][j];\n            }\n            cout<<\"]\";\n        }\n        cout<<\"]\\n\";\n    }\n    return 0;\n}'
  }
},{
  id: 'ts-h3',
  title: 'Subarray Sum Equals K',
  difficulty: 'Hard',
  description: 'Given an integer array `nums` and an integer `k`, return the total number of continuous subarrays whose sum equals `k`.',
  constraints: [
    '1 <= nums.length <= 2 * 10^5',
    '-10^3 <= nums[i] <= 10^3',
    '-10^7 <= k <= 10^7'
  ],
  examples: [
    {
      input: 'nums = [1,1,1], k = 2',
      output: '2',
      explanation: 'The subarrays [1,1] at indices (0,1) and (1,2) both sum to 2.'
    },
    {
      input: 'nums = [1,2,3], k = 3',
      output: '2',
      explanation: 'The subarrays [1,2] and [3] both have sum 3.'
    }
  ],
  testCases: [
    {
      input: '3\n1 1 1\n2',
      expectedOutput: '2',
      hidden: false
    },
    {
      input: '3\n1 2 3\n3',
      expectedOutput: '2',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def subarray_sum(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nprint(subarray_sum(nums, k))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int subarraySum(int[] nums, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            int k = sc.nextInt();\n            System.out.println(subarraySum(nums,k));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint subarraySum(int* nums,int numsSize,int k){\n    return 0;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int k;\n    scanf("%d",&k);\n    printf("%d\\n",subarraySum(nums,n,k));\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint subarraySum(vector<int>& nums,int k){\n    return 0;\n}\n\nint main(){\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int k;\n        cin>>k;\n        cout<<subarraySum(nums,k)<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'ts-h4',
  title: 'Continuous Subarray Sum',
  difficulty: 'Hard',
  description: 'Given an integer array `nums` and an integer `k`, return `true` if the array has a continuous subarray of size at least 2 whose sum is a multiple of `k`; otherwise return `false`.',
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^9',
    '1 <= k <= 2^31 - 1'
  ],
  examples: [
    {
      input: 'nums = [23,2,4,6,7], k = 6',
      output: 'true',
      explanation: 'The subarray [2,4] has sum 6, which is a multiple of 6.'
    },
    {
      input: 'nums = [23,2,6,4,7], k = 13',
      output: 'false',
      explanation: 'No continuous subarray of length at least 2 has a sum that is a multiple of 13.'
    }
  ],
  testCases: [
    {
      input: '5\n23 2 4 6 7\n6',
      expectedOutput: 'true',
      hidden: false
    },
    {
      input: '5\n23 2 6 4 7\n13',
      expectedOutput: 'false',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def check_subarray_sum(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nprint(str(check_subarray_sum(nums, k)).lower())',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static boolean checkSubarraySum(int[] nums, int k) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            int k = sc.nextInt();\n            System.out.println(checkSubarraySum(nums,k));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint checkSubarraySum(int* nums,int numsSize,int k){\n    return 0;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int k;\n    scanf("%d",&k);\n    printf(checkSubarraySum(nums,n,k)?\"true\\n\":\"false\\n\");\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool checkSubarraySum(vector<int>& nums,int k){\n    return false;\n}\n\nint main(){\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int k;\n        cin>>k;\n        cout<<(checkSubarraySum(nums,k)?\"true\":\"false\")<<\"\\n\";\n    }\n    return 0;\n}'
  }
},{
  id: 'ts-h5',
  title: 'Longest Consecutive Sequence',
  difficulty: 'Hard',
  description: 'Given an unsorted integer array `nums`, return the length of the longest sequence of consecutive integers. The algorithm must run in O(n) time.',
  constraints: [
    '0 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9'
  ],
  examples: [
    {
      input: 'nums = [100,4,200,1,3,2]',
      output: '4',
      explanation: 'The longest consecutive sequence is [1,2,3,4], so its length is 4.'
    },
    {
      input: 'nums = [0,3,7,2,5,8,4,6,0,1]',
      output: '9',
      explanation: 'The longest consecutive sequence is [0,1,2,3,4,5,6,7,8], so its length is 9.'
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
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int longestConsecutive(int[] nums) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            System.out.println(longestConsecutive(nums));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint longestConsecutive(int* nums,int numsSize){\n    return 0;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    printf("%d\\n",longestConsecutive(nums,n));\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint longestConsecutive(vector<int>& nums){\n    return 0;\n}\n\nint main(){\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        cout<<longestConsecutive(nums)<<"\\n";\n    }\n    return 0;\n}'
  }
}
];