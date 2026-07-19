export const CAProblems = [
  {
  id: 'ca-e1',
  title: 'Longest Contiguous Array with Equal 0s & 1s',
  difficulty: 'Easy',
  description: 'Given a binary array `nums`, return the length of the longest contiguous subarray containing an equal number of 0s and 1s.',
  constraints: [
    '1 <= nums.length <= 10^5',
    'nums[i] is either 0 or 1'
  ],
  examples: [
    {
      input: 'nums = [0,1]',
      output: '2',
      explanation: 'The entire array contains one 0 and one 1.'
    },
    {
      input: 'nums = [0,1,0]',
      output: '2',
      explanation: 'The longest balanced subarray is [0,1] or [1,0].'
    }
  ],
  testCases: [
    {
      input: '2\n0 1',
      expectedOutput: '2',
      hidden: false
    },
    {
      input: '3\n0 1 0',
      expectedOutput: '2',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def find_max_length(nums):\n    pass\n\nn=int(input())\nnums=list(map(int,input().split()))\nprint(find_max_length(nums))',
    java: 'import java.util.*;\npublic class Solution{\npublic static int findMaxLength(int[] nums){\nreturn 0;\n}\npublic static void main(String[] args){\nScanner sc=new Scanner(System.in);\nif(sc.hasNextInt()){\nint n=sc.nextInt();\nint[] nums=new int[n];\nfor(int i=0;i<n;i++) nums[i]=sc.nextInt();\nSystem.out.println(findMaxLength(nums));\n}\n}\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\nint findMaxLength(int* nums,int numsSize){\nreturn 0;\n}\nint main(){\nint n;\nif(scanf("%d",&n)!=1) return 0;\nint* nums=(int*)malloc(n*sizeof(int));\nfor(int i=0;i<n;i++) scanf("%d",&nums[i]);\nprintf("%d\\n",findMaxLength(nums,n));\nfree(nums);\nreturn 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint findMaxLength(vector<int>& nums){\nreturn 0;\n}\nint main(){\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint n;\nif(cin>>n){\nvector<int> nums(n);\nfor(int i=0;i<n;i++) cin>>nums[i];\ncout<<findMaxLength(nums)<<"\\n";\n}\nreturn 0;\n}'
  }
},{
  id: 'ca-e2',
  title: 'Count Balanced Subarrays',
  difficulty: 'Easy',
  description: 'Given a binary array `nums`, return the total number of contiguous subarrays containing an equal number of 0s and 1s.',
  constraints: [
    '1 <= nums.length <= 10^5',
    'nums[i] is either 0 or 1'
  ],
  examples: [
    {
      input: 'nums = [0,1]',
      output: '1',
      explanation: 'The only balanced subarray is [0,1].'
    },
    {
      input: 'nums = [0,1,0,1]',
      output: '4',
      explanation: 'The balanced subarrays are [0,1], [1,0], [0,1] and [0,1,0,1].'
    }
  ],
  testCases: [
    {
      input: '2\n0 1',
      expectedOutput: '1',
      hidden: false
    },
    {
      input: '4\n0 1 0 1',
      expectedOutput: '4',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def count_balanced_subarrays(nums):\n    pass\n\nn=int(input())\nnums=list(map(int,input().split()))\nprint(count_balanced_subarrays(nums))',
    java: 'import java.util.*;\npublic class Solution{\npublic static int countBalancedSubarrays(int[] nums){\nreturn 0;\n}\npublic static void main(String[] args){\nScanner sc=new Scanner(System.in);\nif(sc.hasNextInt()){\nint n=sc.nextInt();\nint[] nums=new int[n];\nfor(int i=0;i<n;i++) nums[i]=sc.nextInt();\nSystem.out.println(countBalancedSubarrays(nums));\n}\n}\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\nint countBalancedSubarrays(int* nums,int numsSize){\nreturn 0;\n}\nint main(){\nint n;\nif(scanf("%d",&n)!=1) return 0;\nint* nums=(int*)malloc(n*sizeof(int));\nfor(int i=0;i<n;i++) scanf("%d",&nums[i]);\nprintf("%d\\n",countBalancedSubarrays(nums,n));\nfree(nums);\nreturn 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint countBalancedSubarrays(vector<int>& nums){\nreturn 0;\n}\nint main(){\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint n;\nif(cin>>n){\nvector<int> nums(n);\nfor(int i=0;i<n;i++) cin>>nums[i];\ncout<<countBalancedSubarrays(nums)<<"\\n";\n}\nreturn 0;\n}'
  }
},{
  id: 'ca-e3',
  title: 'Longest Balanced Prefix',
  difficulty: 'Easy',
  description: 'Given a binary array `nums`, return the length of the longest prefix containing an equal number of 0s and 1s. A prefix is a subarray that starts from index 0.',
  constraints: [
    '1 <= nums.length <= 10^5',
    'nums[i] is either 0 or 1'
  ],
  examples: [
    {
      input: 'nums = [0,1,1,0,1]',
      output: '4',
      explanation: 'The prefix [0,1,1,0] contains two 0s and two 1s.'
    },
    {
      input: 'nums = [1,1,0]',
      output: '2',
      explanation: 'The prefix [1,1] is not balanced, but no balanced prefix longer than 0 exists. The longest balanced prefix is [1,0] which is not a prefix, so the answer is 0.'
    }
  ],
  testCases: [
    {
      input: '5\n0 1 1 0 1',
      expectedOutput: '4',
      hidden: false
    },
    {
      input: '3\n1 1 0',
      expectedOutput: '0',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def longest_balanced_prefix(nums):\n    pass\n\nn=int(input())\nnums=list(map(int,input().split()))\nprint(longest_balanced_prefix(nums))',
    java: 'import java.util.*;\npublic class Solution{\npublic static int longestBalancedPrefix(int[] nums){\nreturn 0;\n}\npublic static void main(String[] args){\nScanner sc=new Scanner(System.in);\nif(sc.hasNextInt()){\nint n=sc.nextInt();\nint[] nums=new int[n];\nfor(int i=0;i<n;i++) nums[i]=sc.nextInt();\nSystem.out.println(longestBalancedPrefix(nums));\n}\n}\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\nint longestBalancedPrefix(int* nums,int numsSize){\nreturn 0;\n}\nint main(){\nint n;\nif(scanf("%d",&n)!=1) return 0;\nint* nums=(int*)malloc(n*sizeof(int));\nfor(int i=0;i<n;i++) scanf("%d",&nums[i]);\nprintf("%d\\n",longestBalancedPrefix(nums,n));\nfree(nums);\nreturn 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint longestBalancedPrefix(vector<int>& nums){\nreturn 0;\n}\nint main(){\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint n;\nif(cin>>n){\nvector<int> nums(n);\nfor(int i=0;i<n;i++) cin>>nums[i];\ncout<<longestBalancedPrefix(nums)<<"\\n";\n}\nreturn 0;\n}'
  }
},{
  id: 'ca-e4',
  title: 'Balanced Subarray Exists',
  difficulty: 'Easy',
  description: 'Given a binary array `nums`, determine whether there exists at least one contiguous subarray containing an equal number of 0s and 1s. Return `true` if such a subarray exists; otherwise, return `false`.',
  constraints: [
    '1 <= nums.length <= 10^5',
    'nums[i] is either 0 or 1'
  ],
  examples: [
    {
      input: 'nums = [1,0,1]',
      output: 'true',
      explanation: 'The subarray [1,0] contains one 0 and one 1.'
    },
    {
      input: 'nums = [1,1,1]',
      output: 'false',
      explanation: 'No contiguous subarray has an equal number of 0s and 1s.'
    }
  ],
  testCases: [
    {
      input: '3\n1 0 1',
      expectedOutput: 'true',
      hidden: false
    },
    {
      input: '3\n1 1 1',
      expectedOutput: 'false',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def balanced_subarray_exists(nums):\n    pass\n\nn=int(input())\nnums=list(map(int,input().split()))\nprint(str(balanced_subarray_exists(nums)).lower())',
    java: 'import java.util.*;\npublic class Solution{\npublic static boolean balancedSubarrayExists(int[] nums){\nreturn false;\n}\npublic static void main(String[] args){\nScanner sc=new Scanner(System.in);\nif(sc.hasNextInt()){\nint n=sc.nextInt();\nint[] nums=new int[n];\nfor(int i=0;i<n;i++) nums[i]=sc.nextInt();\nSystem.out.println(balancedSubarrayExists(nums));\n}\n}\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\nbool balancedSubarrayExists(int* nums,int numsSize){\nreturn false;\n}\nint main(){\nint n;\nif(scanf("%d",&n)!=1) return 0;\nint* nums=(int*)malloc(n*sizeof(int));\nfor(int i=0;i<n;i++) scanf("%d",&nums[i]);\nprintf("%s\\n",balancedSubarrayExists(nums,n)?"true":"false");\nfree(nums);\nreturn 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nbool balancedSubarrayExists(vector<int>& nums){\nreturn false;\n}\nint main(){\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint n;\nif(cin>>n){\nvector<int> nums(n);\nfor(int i=0;i<n;i++) cin>>nums[i];\ncout<<(balancedSubarrayExists(nums)?"true":"false")<<"\\n";\n}\nreturn 0;\n}'
  }
},
{
  id: 'ca-e5',
  title: 'Largest Balanced Window',
  difficulty: 'Easy',
  description: 'Given a binary array `nums`, return the starting and ending indices of the longest contiguous subarray containing an equal number of 0s and 1s. If multiple such subarrays exist, return the one with the smallest starting index.',
  constraints: [
    '1 <= nums.length <= 10^5',
    'nums[i] is either 0 or 1'
  ],
  examples: [
    {
      input: 'nums = [0,1,0,1,1]',
      output: '[0,3]',
      explanation: 'The longest balanced window is from index 0 to index 3.'
    },
    {
      input: 'nums = [1,1,1]',
      output: '[-1,-1]',
      explanation: 'No balanced subarray exists.'
    }
  ],
  testCases: [
    {
      input: '5\n0 1 0 1 1',
      expectedOutput: '0 3',
      hidden: false
    },
    {
      input: '3\n1 1 1',
      expectedOutput: '-1 -1',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def largest_balanced_window(nums):\n    pass\n\nn=int(input())\nnums=list(map(int,input().split()))\nans=largest_balanced_window(nums)\nprint(ans[0],ans[1])',
    java: 'import java.util.*;\npublic class Solution{\npublic static int[] largestBalancedWindow(int[] nums){\nreturn new int[]{-1,-1};\n}\npublic static void main(String[] args){\nScanner sc=new Scanner(System.in);\nif(sc.hasNextInt()){\nint n=sc.nextInt();\nint[] nums=new int[n];\nfor(int i=0;i<n;i++) nums[i]=sc.nextInt();\nint[] ans=largestBalancedWindow(nums);\nSystem.out.println(ans[0]+\" \"+ans[1]);\n}\n}\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\nvoid largestBalancedWindow(int* nums,int numsSize,int* start,int* end){\n*start=-1;\n*end=-1;\n}\nint main(){\nint n;\nif(scanf(\"%d\",&n)!=1) return 0;\nint* nums=(int*)malloc(n*sizeof(int));\nfor(int i=0;i<n;i++) scanf(\"%d\",&nums[i]);\nint start,end;\nlargestBalancedWindow(nums,n,&start,&end);\nprintf(\"%d %d\\n\",start,end);\nfree(nums);\nreturn 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\npair<int,int> largestBalancedWindow(vector<int>& nums){\nreturn {-1,-1};\n}\nint main(){\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint n;\nif(cin>>n){\nvector<int> nums(n);\nfor(int i=0;i<n;i++) cin>>nums[i];\nauto ans=largestBalancedWindow(nums);\ncout<<ans.first<<\" \"<<ans.second<<\"\\n\";\n}\nreturn 0;\n}'
  }
},{
  id: 'ca-m1',
  title: 'Longest Subarray with Equal 0s, 1s and 2s',
  difficulty: 'Medium',
  description: 'Given an array `nums` containing only 0s, 1s, and 2s, return the length of the longest contiguous subarray containing an equal number of 0s, 1s, and 2s.',
  constraints: [
    '1 <= nums.length <= 10^5',
    'nums[i] is either 0, 1, or 2'
  ],
  examples: [
    {
      input: 'nums = [0,1,2]',
      output: '3',
      explanation: 'The entire array contains one 0, one 1, and one 2.'
    },
    {
      input: 'nums = [0,1,0,2,0,1,2]',
      output: '6',
      explanation: 'The longest valid subarray is [1,0,2,0,1,2], containing two 0s, two 1s, and two 2s.'
    }
  ],
  testCases: [
    {
      input: '3\n0 1 2',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '7\n0 1 0 2 0 1 2',
      expectedOutput: '6',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def longest_equal_012(nums):\n    pass\n\nn=int(input())\nnums=list(map(int,input().split()))\nprint(longest_equal_012(nums))',
    java: 'import java.util.*;\npublic class Solution{\npublic static int longestEqual012(int[] nums){\nreturn 0;\n}\npublic static void main(String[] args){\nScanner sc=new Scanner(System.in);\nif(sc.hasNextInt()){\nint n=sc.nextInt();\nint[] nums=new int[n];\nfor(int i=0;i<n;i++) nums[i]=sc.nextInt();\nSystem.out.println(longestEqual012(nums));\n}\n}\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\nint longestEqual012(int* nums,int numsSize){\nreturn 0;\n}\nint main(){\nint n;\nif(scanf("%d",&n)!=1) return 0;\nint* nums=(int*)malloc(n*sizeof(int));\nfor(int i=0;i<n;i++) scanf("%d",&nums[i]);\nprintf("%d\\n",longestEqual012(nums,n));\nfree(nums);\nreturn 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint longestEqual012(vector<int>& nums){\nreturn 0;\n}\nint main(){\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint n;\nif(cin>>n){\nvector<int> nums(n);\nfor(int i=0;i<n;i++) cin>>nums[i];\ncout<<longestEqual012(nums)<<"\\n";\n}\nreturn 0;\n}'
  }
},{
  id: 'ca-m2',
  title: 'Maximum Balanced Segment After One Flip',
  difficulty: 'Medium',
  description: 'You are given a binary array `nums`. You may flip at most one element (change 0 to 1 or 1 to 0). Return the maximum possible length of a contiguous subarray containing an equal number of 0s and 1s after performing at most one flip.',
  constraints: [
    '1 <= nums.length <= 10^5',
    'nums[i] is either 0 or 1'
  ],
  examples: [
    {
      input: 'nums = [0,0,1]',
      output: '2',
      explanation: 'Flipping either 0 still results in a longest balanced subarray of length 2.'
    },
    {
      input: 'nums = [0,1,1,0,0]',
      output: '4',
      explanation: 'By flipping the last 0 to 1, the subarray [0,1,1,0] remains the longest balanced segment with length 4.'
    }
  ],
  testCases: [
    {
      input: '3\n0 0 1',
      expectedOutput: '2',
      hidden: false
    },
    {
      input: '5\n0 1 1 0 0',
      expectedOutput: '4',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def maximum_balanced_after_one_flip(nums):\n    pass\n\nn=int(input())\nnums=list(map(int,input().split()))\nprint(maximum_balanced_after_one_flip(nums))',
    java: 'import java.util.*;\npublic class Solution{\npublic static int maximumBalancedAfterOneFlip(int[] nums){\nreturn 0;\n}\npublic static void main(String[] args){\nScanner sc=new Scanner(System.in);\nif(sc.hasNextInt()){\nint n=sc.nextInt();\nint[] nums=new int[n];\nfor(int i=0;i<n;i++) nums[i]=sc.nextInt();\nSystem.out.println(maximumBalancedAfterOneFlip(nums));\n}\n}\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\nint maximumBalancedAfterOneFlip(int* nums,int numsSize){\nreturn 0;\n}\nint main(){\nint n;\nif(scanf("%d",&n)!=1) return 0;\nint* nums=(int*)malloc(n*sizeof(int));\nfor(int i=0;i<n;i++) scanf("%d",&nums[i]);\nprintf("%d\\n",maximumBalancedAfterOneFlip(nums,n));\nfree(nums);\nreturn 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint maximumBalancedAfterOneFlip(vector<int>& nums){\nreturn 0;\n}\nint main(){\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint n;\nif(cin>>n){\nvector<int> nums(n);\nfor(int i=0;i<n;i++) cin>>nums[i];\ncout<<maximumBalancedAfterOneFlip(nums)<<"\\n";\n}\nreturn 0;\n}'
  }
},{
  id: 'ca-m3',
  title: 'Longest Subarray with Equal Even and Odd Numbers',
  difficulty: 'Medium',
  description: 'Given an integer array `nums`, return the length of the longest contiguous subarray containing an equal number of even and odd integers.',
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9'
  ],
  examples: [
    {
      input: 'nums = [2,1,4,3,6]',
      output: '4',
      explanation: 'The subarray [2,1,4,3] contains two even and two odd numbers.'
    },
    {
      input: 'nums = [2,4,6,1]',
      output: '2',
      explanation: 'The longest valid subarray is [6,1].'
    }
  ],
  testCases: [
    {
      input: '5\n2 1 4 3 6',
      expectedOutput: '4',
      hidden: false
    },
    {
      input: '4\n2 4 6 1',
      expectedOutput: '2',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def longest_even_odd_subarray(nums):\n    pass\n\nn=int(input())\nnums=list(map(int,input().split()))\nprint(longest_even_odd_subarray(nums))',
    java: 'import java.util.*;\npublic class Solution{\npublic static int longestEvenOddSubarray(int[] nums){\nreturn 0;\n}\npublic static void main(String[] args){\nScanner sc=new Scanner(System.in);\nif(sc.hasNextInt()){\nint n=sc.nextInt();\nint[] nums=new int[n];\nfor(int i=0;i<n;i++) nums[i]=sc.nextInt();\nSystem.out.println(longestEvenOddSubarray(nums));\n}\n}\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\nint longestEvenOddSubarray(int* nums,int numsSize){\nreturn 0;\n}\nint main(){\nint n;\nif(scanf("%d",&n)!=1) return 0;\nint* nums=(int*)malloc(n*sizeof(int));\nfor(int i=0;i<n;i++) scanf("%d",&nums[i]);\nprintf("%d\\n",longestEvenOddSubarray(nums,n));\nfree(nums);\nreturn 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint longestEvenOddSubarray(vector<int>& nums){\nreturn 0;\n}\nint main(){\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint n;\nif(cin>>n){\nvector<int> nums(n);\nfor(int i=0;i<n;i++) cin>>nums[i];\ncout<<longestEvenOddSubarray(nums)<<"\\n";\n}\nreturn 0;\n}'
  }
},{
  id: 'ca-m4',
  title: 'Longest Zero Sum Subarray',
  difficulty: 'Medium',
  description: 'Given an integer array `nums` containing positive, negative, and zero values, return the length of the longest contiguous subarray whose sum is equal to 0.',
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9'
  ],
  examples: [
    {
      input: 'nums = [1,-1,3,2,-2,-3,3]',
      output: '6',
      explanation: 'The subarray [1,-1,3,2,-2,-3] has a sum of 0 and is the longest such subarray.'
    },
    {
      input: 'nums = [1,2,-3,3]',
      output: '3',
      explanation: 'The subarray [1,2,-3] has a sum of 0.'
    }
  ],
  testCases: [
    {
      input: '7\n1 -1 3 2 -2 -3 3',
      expectedOutput: '6',
      hidden: false
    },
    {
      input: '4\n1 2 -3 3',
      expectedOutput: '3',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def longest_zero_sum_subarray(nums):\n    pass\n\nn=int(input())\nnums=list(map(int,input().split()))\nprint(longest_zero_sum_subarray(nums))',
    java: 'import java.util.*;\npublic class Solution{\npublic static int longestZeroSumSubarray(int[] nums){\nreturn 0;\n}\npublic static void main(String[] args){\nScanner sc=new Scanner(System.in);\nif(sc.hasNextInt()){\nint n=sc.nextInt();\nint[] nums=new int[n];\nfor(int i=0;i<n;i++) nums[i]=sc.nextInt();\nSystem.out.println(longestZeroSumSubarray(nums));\n}\n}\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\nint longestZeroSumSubarray(int* nums,int numsSize){\nreturn 0;\n}\nint main(){\nint n;\nif(scanf("%d",&n)!=1) return 0;\nint* nums=(int*)malloc(n*sizeof(int));\nfor(int i=0;i<n;i++) scanf("%d",&nums[i]);\nprintf("%d\\n",longestZeroSumSubarray(nums,n));\nfree(nums);\nreturn 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint longestZeroSumSubarray(vector<int>& nums){\nreturn 0;\n}\nint main(){\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint n;\nif(cin>>n){\nvector<int> nums(n);\nfor(int i=0;i<n;i++) cin>>nums[i];\ncout<<longestZeroSumSubarray(nums)<<"\\n";\n}\nreturn 0;\n}'
  }
},{
  id: 'ca-m5',
  title: 'Balanced Subarray Queries',
  difficulty: 'Medium',
  description: 'You are given a binary array `nums` and `q` queries. Each query consists of two integers `L` and `R`. For every query, determine whether the subarray `nums[L...R]` contains an equal number of 0s and 1s. Return "YES" if it is balanced; otherwise, return "NO".',
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= q <= 10^5',
    'nums[i] is either 0 or 1',
    '0 <= L <= R < nums.length'
  ],
  examples: [
    {
      input: 'nums = [0,1,1,0,1], queries = [[0,3],[1,4],[2,4]]',
      output: '["YES","YES","NO"]',
      explanation: 'Subarrays [0,1,1,0] and [1,1,0,1] are balanced, while [1,0,1] is not.'
    },
    {
      input: 'nums = [1,1,0], queries = [[0,2],[0,1]]',
      output: '["NO","NO"]',
      explanation: 'Neither queried subarray contains an equal number of 0s and 1s.'
    }
  ],
  testCases: [
    {
      input: '5\n0 1 1 0 1\n3\n0 3\n1 4\n2 4',
      expectedOutput: 'YES\nYES\nNO',
      hidden: false
    },
    {
      input: '3\n1 1 0\n2\n0 2\n0 1',
      expectedOutput: 'NO\nNO',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def balanced_subarray_queries(nums, queries):\n    pass\n\nn=int(input())\nnums=list(map(int,input().split()))\nq=int(input())\nqueries=[tuple(map(int,input().split())) for _ in range(q)]\nfor ans in balanced_subarray_queries(nums,queries):\n    print(ans)',
    java: 'import java.util.*;\npublic class Solution{\npublic static List<String> balancedSubarrayQueries(int[] nums,int[][] queries){\nreturn new ArrayList<>();\n}\npublic static void main(String[] args){\nScanner sc=new Scanner(System.in);\nint n=sc.nextInt();\nint[] nums=new int[n];\nfor(int i=0;i<n;i++) nums[i]=sc.nextInt();\nint q=sc.nextInt();\nint[][] queries=new int[q][2];\nfor(int i=0;i<q;i++){\nqueries[i][0]=sc.nextInt();\nqueries[i][1]=sc.nextInt();\n}\nfor(String ans:balancedSubarrayQueries(nums,queries)) System.out.println(ans);\n}\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\nchar** balancedSubarrayQueries(int* nums,int numsSize,int queries[][2],int q){\nreturn NULL;\n}\nint main(){\nint n;\nscanf("%d",&n);\nint* nums=(int*)malloc(n*sizeof(int));\nfor(int i=0;i<n;i++) scanf("%d",&nums[i]);\nint q;\nscanf("%d",&q);\nint queries[q][2];\nfor(int i=0;i<q;i++) scanf("%d%d",&queries[i][0],&queries[i][1]);\nchar** ans=balancedSubarrayQueries(nums,n,queries,q);\nfor(int i=0;i<q;i++) printf("%s\\n",ans[i]);\nfree(nums);\nreturn 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\nvector<string> balancedSubarrayQueries(vector<int>& nums,vector<pair<int,int>>& queries){\nreturn {};\n}\nint main(){\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint n;\ncin>>n;\nvector<int> nums(n);\nfor(int i=0;i<n;i++) cin>>nums[i];\nint q;\ncin>>q;\nvector<pair<int,int>> queries(q);\nfor(int i=0;i<q;i++) cin>>queries[i].first>>queries[i].second;\nauto ans=balancedSubarrayQueries(nums,queries);\nfor(string s:ans) cout<<s<<"\\n";\nreturn 0;\n}'
  }
},{
  id: 'ca-h1',
  title: 'Longest Balanced Submatrix',
  difficulty: 'Hard',
  description: 'You are given a binary matrix `grid` of size `m x n`. Return the area of the largest rectangular submatrix containing an equal number of 0s and 1s.',
  constraints: [
    '1 <= m, n <= 200',
    'grid[i][j] is either 0 or 1'
  ],
  examples: [
    {
      input: 'grid = [[0,1],[1,0]]',
      output: '4',
      explanation: 'The entire matrix contains two 0s and two 1s.'
    },
    {
      input: 'grid = [[0,0,1],[1,1,0]]',
      output: '6',
      explanation: 'The complete 2 × 3 matrix is balanced.'
    }
  ],
  testCases: [
    {
      input: '2 2\n0 1\n1 0',
      expectedOutput: '4',
      hidden: false
    },
    {
      input: '2 3\n0 0 1\n1 1 0',
      expectedOutput: '6',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def largest_balanced_submatrix(grid):\n    pass\n\nm,n=map(int,input().split())\ngrid=[list(map(int,input().split())) for _ in range(m)]\nprint(largest_balanced_submatrix(grid))',
    java: 'import java.util.*;\npublic class Solution{\npublic static int largestBalancedSubmatrix(int[][] grid){\nreturn 0;\n}\npublic static void main(String[] args){\nScanner sc=new Scanner(System.in);\nint m=sc.nextInt();\nint n=sc.nextInt();\nint[][] grid=new int[m][n];\nfor(int i=0;i<m;i++)\nfor(int j=0;j<n;j++)\ngrid[i][j]=sc.nextInt();\nSystem.out.println(largestBalancedSubmatrix(grid));\n}\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\nint largestBalancedSubmatrix(int** grid,int m,int n){\nreturn 0;\n}\nint main(){\nint m,n;\nscanf("%d%d",&m,&n);\nint** grid=(int**)malloc(m*sizeof(int*));\nfor(int i=0;i<m;i++){\ngrid[i]=(int*)malloc(n*sizeof(int));\nfor(int j=0;j<n;j++) scanf("%d",&grid[i][j]);\n}\nprintf("%d\\n",largestBalancedSubmatrix(grid,m,n));\nfor(int i=0;i<m;i++) free(grid[i]);\nfree(grid);\nreturn 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint largestBalancedSubmatrix(vector<vector<int>>& grid){\nreturn 0;\n}\nint main(){\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint m,n;\ncin>>m>>n;\nvector<vector<int>> grid(m,vector<int>(n));\nfor(int i=0;i<m;i++)\nfor(int j=0;j<n;j++) cin>>grid[i][j];\ncout<<largestBalancedSubmatrix(grid)<<"\\n";\nreturn 0;\n}'
  }
},
{
  id: 'ca-h2',
  title: 'Balanced Subarray Range Queries',
  difficulty: 'Hard',
  description: 'You are given a binary array `nums` and `q` queries. Each query contains two integers `L` and `R`. For every query, return the length of the longest contiguous subarray within `nums[L...R]` containing an equal number of 0s and 1s.',
  constraints: [
    '1 <= nums.length <= 2 * 10^5',
    '1 <= q <= 2 * 10^5',
    'nums[i] is either 0 or 1',
    '0 <= L <= R < nums.length'
  ],
  examples: [
    {
      input: 'nums = [0,1,0,1,1], queries = [[0,4],[1,3]]',
      output: '[4,2]',
      explanation: 'For the first query, the longest balanced subarray is [0,1,0,1]. For the second query, the longest balanced subarray is [1,0].'
    },
    {
      input: 'nums = [1,1,1,0], queries = [[0,3],[1,2]]',
      output: '[2,0]',
      explanation: 'The first query has the balanced subarray [1,0]. The second query has no balanced subarray.'
    }
  ],
  testCases: [
    {
      input: '5\n0 1 0 1 1\n2\n0 4\n1 3',
      expectedOutput: '4\n2',
      hidden: false
    },
    {
      input: '4\n1 1 1 0\n2\n0 3\n1 2',
      expectedOutput: '2\n0',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def balanced_subarray_range_queries(nums, queries):\n    pass\n\nn=int(input())\nnums=list(map(int,input().split()))\nq=int(input())\nqueries=[tuple(map(int,input().split())) for _ in range(q)]\nfor ans in balanced_subarray_range_queries(nums,queries):\n    print(ans)',
    java: 'import java.util.*;\npublic class Solution{\npublic static List<Integer> balancedSubarrayRangeQueries(int[] nums,int[][] queries){\nreturn new ArrayList<>();\n}\npublic static void main(String[] args){\nScanner sc=new Scanner(System.in);\nint n=sc.nextInt();\nint[] nums=new int[n];\nfor(int i=0;i<n;i++) nums[i]=sc.nextInt();\nint q=sc.nextInt();\nint[][] queries=new int[q][2];\nfor(int i=0;i<q;i++){\nqueries[i][0]=sc.nextInt();\nqueries[i][1]=sc.nextInt();\n}\nfor(int ans:balancedSubarrayRangeQueries(nums,queries)) System.out.println(ans);\n}\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\nint* balancedSubarrayRangeQueries(int* nums,int numsSize,int queries[][2],int q){\nreturn NULL;\n}\nint main(){\nint n;\nscanf("%d",&n);\nint* nums=(int*)malloc(n*sizeof(int));\nfor(int i=0;i<n;i++) scanf("%d",&nums[i]);\nint q;\nscanf("%d",&q);\nint queries[q][2];\nfor(int i=0;i<q;i++) scanf("%d%d",&queries[i][0],&queries[i][1]);\nint* ans=balancedSubarrayRangeQueries(nums,n,queries,q);\nfor(int i=0;i<q;i++) printf("%d\\n",ans[i]);\nfree(ans);\nfree(nums);\nreturn 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> balancedSubarrayRangeQueries(vector<int>& nums,vector<pair<int,int>>& queries){\nreturn {};\n}\nint main(){\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint n;\ncin>>n;\nvector<int> nums(n);\nfor(int i=0;i<n;i++) cin>>nums[i];\nint q;\ncin>>q;\nvector<pair<int,int>> queries(q);\nfor(int i=0;i<q;i++) cin>>queries[i].first>>queries[i].second;\nauto ans=balancedSubarrayRangeQueries(nums,queries);\nfor(int x:ans) cout<<x<<"\\n";\nreturn 0;\n}'
  }
},{
  id: 'ca-h3',
  title: 'Longest Balanced Circular Binary Array',
  difficulty: 'Hard',
  description: 'You are given a circular binary array `nums`. Return the length of the longest contiguous subarray containing an equal number of 0s and 1s. A subarray may wrap around the end of the array, but no element can be included more than once.',
  constraints: [
    '1 <= nums.length <= 2 * 10^5',
    'nums[i] is either 0 or 1'
  ],
  examples: [
    {
      input: 'nums = [1,1,0,0,1]',
      output: '4',
      explanation: 'The longest balanced circular subarray is [1,1,0,0].'
    },
    {
      input: 'nums = [1,0,0,1]',
      output: '4',
      explanation: 'The entire circular array is balanced.'
    }
  ],
  testCases: [
    {
      input: '5\n1 1 0 0 1',
      expectedOutput: '4',
      hidden: false
    },
    {
      input: '4\n1 0 0 1',
      expectedOutput: '4',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def longest_balanced_circular(nums):\n    pass\n\nn=int(input())\nnums=list(map(int,input().split()))\nprint(longest_balanced_circular(nums))',
    java: 'import java.util.*;\npublic class Solution{\npublic static int longestBalancedCircular(int[] nums){\nreturn 0;\n}\npublic static void main(String[] args){\nScanner sc=new Scanner(System.in);\nint n=sc.nextInt();\nint[] nums=new int[n];\nfor(int i=0;i<n;i++) nums[i]=sc.nextInt();\nSystem.out.println(longestBalancedCircular(nums));\n}\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\nint longestBalancedCircular(int* nums,int numsSize){\nreturn 0;\n}\nint main(){\nint n;\nif(scanf("%d",&n)!=1) return 0;\nint* nums=(int*)malloc(n*sizeof(int));\nfor(int i=0;i<n;i++) scanf("%d",&nums[i]);\nprintf("%d\\n",longestBalancedCircular(nums,n));\nfree(nums);\nreturn 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint longestBalancedCircular(vector<int>& nums){\nreturn 0;\n}\nint main(){\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint n;\ncin>>n;\nvector<int> nums(n);\nfor(int i=0;i<n;i++) cin>>nums[i];\ncout<<longestBalancedCircular(nums)<<"\\n";\nreturn 0;\n}'
  }
},{
  id: 'ca-h4',
  title: 'Dynamic Balanced Binary Array',
  difficulty: 'Hard',
  description: 'You are given a binary array `nums` and `q` operations. Each operation is either `UPDATE i x`, which updates `nums[i]` to `x` (where `x` is 0 or 1), or `QUERY`, which asks for the length of the longest contiguous subarray containing an equal number of 0s and 1s in the current array. Return the answer for every `QUERY` operation.',
  constraints: [
    '1 <= nums.length <= 2 * 10^5',
    '1 <= q <= 2 * 10^5',
    'nums[i], x are either 0 or 1',
    '0 <= i < nums.length'
  ],
  examples: [
    {
      input: 'nums = [0,1,1,0], operations = ["QUERY","UPDATE 2 0","QUERY"]',
      output: '[4,2]',
      explanation: 'Initially, the entire array is balanced. After updating index 2 to 0, the longest balanced subarray has length 2.'
    },
    {
      input: 'nums = [1,1,1], operations = ["QUERY","UPDATE 1 0","QUERY"]',
      output: '[0,2]',
      explanation: 'Initially, no balanced subarray exists. After the update, the subarray [1,0] is balanced.'
    }
  ],
  testCases: [
    {
      input: '4\n0 1 1 0\n3\nQUERY\nUPDATE 2 0\nQUERY',
      expectedOutput: '4\n2',
      hidden: false
    },
    {
      input: '3\n1 1 1\n3\nQUERY\nUPDATE 1 0\nQUERY',
      expectedOutput: '0\n2',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def dynamic_balanced_binary_array(nums, operations):\n    pass\n\nn=int(input())\nnums=list(map(int,input().split()))\nq=int(input())\noperations=[input().strip() for _ in range(q)]\nfor ans in dynamic_balanced_binary_array(nums,operations):\n    print(ans)',
    java: 'import java.util.*;\npublic class Solution{\npublic static List<Integer> dynamicBalancedBinaryArray(int[] nums,List<String> operations){\nreturn new ArrayList<>();\n}\npublic static void main(String[] args){\nScanner sc=new Scanner(System.in);\nint n=sc.nextInt();\nint[] nums=new int[n];\nfor(int i=0;i<n;i++) nums[i]=sc.nextInt();\nint q=sc.nextInt();\nsc.nextLine();\nList<String> operations=new ArrayList<>();\nfor(int i=0;i<q;i++) operations.add(sc.nextLine());\nfor(int ans:dynamicBalancedBinaryArray(nums,operations)) System.out.println(ans);\n}\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\nint* dynamicBalancedBinaryArray(int* nums,int numsSize,char operations[][30],int q,int* returnSize){\n*returnSize=0;\nreturn NULL;\n}\nint main(){\nint n;\nscanf("%d",&n);\nint* nums=(int*)malloc(n*sizeof(int));\nfor(int i=0;i<n;i++) scanf("%d",&nums[i]);\nint q;\nscanf("%d",&q);\ngetchar();\nchar operations[q][30];\nfor(int i=0;i<q;i++) fgets(operations[i],30,stdin);\nint returnSize;\nint* ans=dynamicBalancedBinaryArray(nums,n,operations,q,&returnSize);\nfor(int i=0;i<returnSize;i++) printf("%d\\n",ans[i]);\nfree(ans);\nfree(nums);\nreturn 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\nvector<int> dynamicBalancedBinaryArray(vector<int>& nums,vector<string>& operations){\nreturn {};\n}\nint main(){\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint n;\ncin>>n;\nvector<int> nums(n);\nfor(int i=0;i<n;i++) cin>>nums[i];\nint q;\ncin>>q;\ncin.ignore();\nvector<string> operations(q);\nfor(int i=0;i<q;i++) getline(cin,operations[i]);\nauto ans=dynamicBalancedBinaryArray(nums,operations);\nfor(int x:ans) cout<<x<<"\\n";\nreturn 0;\n}'
  }
},{
  id: 'ca-h5',
  title: 'Maximum Non-overlapping Balanced Segments',
  difficulty: 'Hard',
  description: 'Given a binary array `nums`, partition it into the maximum number of non-overlapping contiguous balanced subarrays, where each chosen subarray contains an equal number of 0s and 1s. Return the maximum number of such balanced segments.',
  constraints: [
    '1 <= nums.length <= 2 * 10^5',
    'nums[i] is either 0 or 1'
  ],
  examples: [
    {
      input: 'nums = [0,1,0,1]',
      output: '2',
      explanation: 'The array can be partitioned into [0,1] and [0,1], giving two balanced segments.'
    },
    {
      input: 'nums = [0,0,1,1,0,1]',
      output: '2',
      explanation: 'One optimal partition is [0,0,1,1] and [0,1], resulting in two balanced segments.'
    }
  ],
  testCases: [
    {
      input: '4\n0 1 0 1',
      expectedOutput: '2',
      hidden: false
    },
    {
      input: '6\n0 0 1 1 0 1',
      expectedOutput: '2',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def max_balanced_segments(nums):\n    pass\n\nn=int(input())\nnums=list(map(int,input().split()))\nprint(max_balanced_segments(nums))',
    java: 'import java.util.*;\npublic class Solution{\npublic static int maxBalancedSegments(int[] nums){\nreturn 0;\n}\npublic static void main(String[] args){\nScanner sc=new Scanner(System.in);\nint n=sc.nextInt();\nint[] nums=new int[n];\nfor(int i=0;i<n;i++) nums[i]=sc.nextInt();\nSystem.out.println(maxBalancedSegments(nums));\n}\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\nint maxBalancedSegments(int* nums,int numsSize){\nreturn 0;\n}\nint main(){\nint n;\nif(scanf("%d",&n)!=1) return 0;\nint* nums=(int*)malloc(n*sizeof(int));\nfor(int i=0;i<n;i++) scanf("%d",&nums[i]);\nprintf("%d\\n",maxBalancedSegments(nums,n));\nfree(nums);\nreturn 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint maxBalancedSegments(vector<int>& nums){\nreturn 0;\n}\nint main(){\nios_base::sync_with_stdio(false);\ncin.tie(NULL);\nint n;\nif(cin>>n){\nvector<int> nums(n);\nfor(int i=0;i<n;i++) cin>>nums[i];\ncout<<maxBalancedSegments(nums)<<"\\n";\n}\nreturn 0;\n}'
  }
}
];