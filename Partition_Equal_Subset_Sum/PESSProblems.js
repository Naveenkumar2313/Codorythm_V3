export const partitionEqualSubsetSumProblems = [
{
  id: 'pes-e1',
  title: 'Balanced Load Split',
  difficulty: 'Easy',
  description: 'Given an array of positive integers representing loads, determine whether the loads can be divided into two subsets with equal total sum.',
  constraints: [
    '1 <= n <= 20',
    '1 <= nums[i] <= 100',
    'The input contains only positive integers.'
  ],
  examples: [
    {
      input: '4\n1 5 11 5',
      output: 'true',
      explanation: 'The array can be divided into [1, 5, 5] and [11], both having sum 11.'
    },
    {
      input: '4\n1 2 3 5',
      output: 'false',
      explanation: 'The total sum is 11, which is odd, so an equal partition is impossible.'
    }
  ],
  testCases: [
    {
      input: '4\n1 5 11 5',
      expectedOutput: 'true',
      hidden: false
    },
    {
      input: '4\n1 2 3 5',
      expectedOutput: 'false',
      hidden: false
    },
    {
      input: '2\n1 1',
      expectedOutput: 'true',
      hidden: true
    },
    {
      input: '1\n1',
      expectedOutput: 'false',
      hidden: true
    }
  ],
  starterCode: {
    python: 'def can_partition(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nresult = can_partition(nums)\nprint(str(result).lower())',
    java: 'import java.util.*;\n\npublic class Main {\n    public static boolean canPartition(int[] nums) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n        System.out.println(canPartition(nums));\n    }\n}',
    c: '#include <stdio.h>\n#include <stdbool.h>\n\nbool canPartition(int nums[], int n) {\n    return false;\n}\n\nint main(){\n    int n;\n    scanf("%d",&n);\n    int nums[n];\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    printf("%s\\n", canPartition(nums,n) ? "true" : "false");\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool canPartition(vector<int>& nums){\n    return false;\n}\n\nint main(){\n    int n;\n    cin>>n;\n    vector<int> nums(n);\n    for(int i=0;i<n;i++) cin>>nums[i];\n    cout<<(canPartition(nums) ? "true" : "false")<<endl;\n    return 0;\n}'
  }
},{
  id: 'pes-e2',
  title: 'Equal Circuit Power',
  difficulty: 'Easy',
  description: 'A set of circuit power values must be divided into two groups with equal total power. Determine whether such a division is possible.',
  constraints: [
    '1 <= n <= 25',
    '1 <= nums[i] <= 100',
    'The input contains only positive integers.'
  ],
  examples: [
    {
      input: '4\n2 2 3 5',
      output: 'true',
      explanation: 'The values can be divided into [2, 3] and [5], giving equal sums of 5.'
    },
    {
      input: '3\n1 2 5',
      output: 'false',
      explanation: 'The total is 8, but no subset has sum 4.'
    }
  ],
  testCases: [
    {
      input: '4\n2 2 3 5',
      expectedOutput: 'true',
      hidden: false
    },
    {
      input: '3\n1 2 5',
      expectedOutput: 'false',
      hidden: false
    },
    {
      input: '4\n3 3 3 3',
      expectedOutput: 'true',
      hidden: true
    },
    {
      input: '3\n2 4 6',
      expectedOutput: 'true',
      hidden: true
    }
  ],
  starterCode: {
    python: 'def can_partition(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nresult = can_partition(nums)\nprint(str(result).lower())',
    java: 'import java.util.*;\n\npublic class Main {\n    public static boolean canPartition(int[] nums) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n        System.out.println(canPartition(nums));\n    }\n}',
    c: '#include <stdio.h>\n#include <stdbool.h>\n\nbool canPartition(int nums[], int n) {\n    return false;\n}\n\nint main(){\n    int n;\n    scanf("%d",&n);\n    int nums[n];\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    printf("%s\\n", canPartition(nums,n) ? "true" : "false");\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool canPartition(vector<int>& nums){\n    return false;\n}\n\nint main(){\n    int n;\n    cin>>n;\n    vector<int> nums(n);\n    for(int i=0;i<n;i++) cin>>nums[i];\n    cout<<(canPartition(nums) ? "true" : "false")<<endl;\n    return 0;\n}'
  }
},{
  id: 'pes-e3',
  title: 'Equal Team Score',
  difficulty: 'Easy',
  description: 'Given the scores contributed by players, determine whether the players can be separated into two teams with equal total scores.',
  constraints: [
    '1 <= n <= 30',
    '1 <= nums[i] <= 50',
    'The input contains only positive integers.'
  ],
  examples: [
    {
      input: '5\n1 2 3 4 5',
      output: 'true',
      explanation: 'The players can be divided into [1, 4, 5] and [2, 3], both with total score 10.'
    },
    {
      input: '4\n2 4 6 9',
      output: 'false',
      explanation: 'The total score is 21, which is odd.'
    }
  ],
  testCases: [
    {
      input: '5\n1 2 3 4 5',
      expectedOutput: 'true',
      hidden: false
    },
    {
      input: '4\n2 4 6 9',
      expectedOutput: 'false',
      hidden: false
    },
    {
      input: '4\n5 5 5 5',
      expectedOutput: 'true',
      hidden: true
    },
    {
      input: '3\n1 1 3',
      expectedOutput: 'false',
      hidden: true
    }
  ],
  starterCode: {
    python: 'def can_partition(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nresult = can_partition(nums)\nprint(str(result).lower())',
    java: 'import java.util.*;\n\npublic class Main {\n    public static boolean canPartition(int[] nums) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n        System.out.println(canPartition(nums));\n    }\n}',
    c: '#include <stdio.h>\n#include <stdbool.h>\n\nbool canPartition(int nums[], int n) {\n    return false;\n}\n\nint main(){\n    int n;\n    scanf("%d",&n);\n    int nums[n];\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    printf("%s\\n", canPartition(nums,n) ? "true" : "false");\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool canPartition(vector<int>& nums){\n    return false;\n}\n\nint main(){\n    int n;\n    cin>>n;\n    vector<int> nums(n);\n    for(int i=0;i<n;i++) cin>>nums[i];\n    cout<<(canPartition(nums) ? "true" : "false")<<endl;\n    return 0;\n}'
  }
},{
  id: 'pes-e4',
  title: 'Balanced Battery Packs',
  difficulty: 'Easy',
  description: 'A collection of battery packs has different energy capacities. Determine whether the packs can be split into two groups with the same total energy.',
  constraints: [
    '1 <= n <= 30',
    '1 <= nums[i] <= 100',
    'The input contains only positive integers.'
  ],
  examples: [
    {
      input: '6\n1 1 2 2 3 3',
      output: 'true',
      explanation: 'The total energy is 12 and a subset with energy 6 can be formed.'
    },
    {
      input: '5\n2 2 2 2 3',
      output: 'false',
      explanation: 'The total energy is 11, which is odd.'
    }
  ],
  testCases: [
    {
      input: '6\n1 1 2 2 3 3',
      expectedOutput: 'true',
      hidden: false
    },
    {
      input: '5\n2 2 2 2 3',
      expectedOutput: 'false',
      hidden: false
    },
    {
      input: '4\n1 2 3 6',
      expectedOutput: 'true',
      hidden: true
    },
    {
      input: '3\n2 2 2',
      expectedOutput: 'false',
      hidden: true
    }
  ],
  starterCode: {
    python: 'def can_partition(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nresult = can_partition(nums)\nprint(str(result).lower())',
    java: 'import java.util.*;\n\npublic class Main {\n    public static boolean canPartition(int[] nums) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n        System.out.println(canPartition(nums));\n    }\n}',
    c: '#include <stdio.h>\n#include <stdbool.h>\n\nbool canPartition(int nums[], int n) {\n    return false;\n}\n\nint main(){\n    int n;\n    scanf("%d",&n);\n    int nums[n];\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    printf("%s\\n", canPartition(nums,n) ? "true" : "false");\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool canPartition(vector<int>& nums){\n    return false;\n}\n\nint main(){\n    int n;\n    cin>>n;\n    vector<int> nums(n);\n    for(int i=0;i<n;i++) cin>>nums[i];\n    cout<<(canPartition(nums) ? "true" : "false")<<endl;\n    return 0;\n}'
  }
},{
  id: 'pes-e5',
  title: 'Equal Resource Split',
  difficulty: 'Easy',
  description: 'Given quantities of different resources, determine whether they can be divided between two groups so that both groups receive the same total quantity.',
  constraints: [
    '1 <= n <= 35',
    '1 <= nums[i] <= 100',
    'The input contains only positive integers.'
  ],
  examples: [
    {
      input: '4\n3 1 1 2',
      output: 'false',
      explanation: 'The total quantity is 7, so it cannot be divided equally.'
    },
    {
      input: '5\n3 1 1 2 2',
      output: 'true',
      explanation: 'The total is 9? No equal split exists, so the result is false.'
    }
  ],
  testCases: [
    {
      input: '4\n3 1 1 2',
      expectedOutput: 'false',
      hidden: false
    },
    {
      input: '4\n3 1 1 1',
      expectedOutput: 'false',
      hidden: false
    },
    {
      input: '5\n3 1 1 2 1',
      expectedOutput: 'true',
      hidden: true
    },
    {
      input: '6\n2 2 2 2 2 2',
      expectedOutput: 'true',
      hidden: true
    }
  ],
  starterCode: {
    python: 'def can_partition(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nresult = can_partition(nums)\nprint(str(result).lower())',
    java: 'import java.util.*;\n\npublic class Main {\n    public static boolean canPartition(int[] nums) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n        System.out.println(canPartition(nums));\n    }\n}',
    c: '#include <stdio.h>\n#include <stdbool.h>\n\nbool canPartition(int nums[], int n) {\n    return false;\n}\n\nint main(){\n    int n;\n    scanf("%d",&n);\n    int nums[n];\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    printf("%s\\n", canPartition(nums,n) ? "true" : "false");\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool canPartition(vector<int>& nums){\n    return false;\n}\n\nint main(){\n    int n;\n    cin>>n;\n    vector<int> nums(n);\n    for(int i=0;i<n;i++) cin>>nums[i];\n    cout<<(canPartition(nums) ? "true" : "false")<<endl;\n    return 0;\n}'
  }
},{
  id: 'pes-m1',
  title: 'Switchboard Equal Split',
  difficulty: 'Medium',
  description: 'A switchboard contains circuit loads of different sizes. Determine whether the loads can be divided into two groups with exactly equal total load.',
  constraints: [
    '1 <= n <= 100',
    '1 <= nums[i] <= 500',
    'The total sum of nums does not exceed 5000.'
  ],
  examples: [
    {
      input: '6\n1 2 3 4 5 6',
      output: 'true',
      explanation: 'The total is 21, which is odd, so the equal split is impossible.'
    },
    {
      input: '6\n2 2 3 3 4 6',
      output: 'true',
      explanation: 'The total is 20 and a subset with sum 10 can be formed.'
    }
  ],
  testCases: [
    {
      input: '6\n1 2 3 4 5 6',
      expectedOutput: 'false',
      hidden: false
    },
    {
      input: '6\n2 2 3 3 4 6',
      expectedOutput: 'true',
      hidden: false
    },
    {
      input: '5\n3 1 1 2 2',
      expectedOutput: 'false',
      hidden: true
    },
    {
      input: '7\n1 2 5 10 6 3 1',
      expectedOutput: 'true',
      hidden: true
    }
  ],
  starterCode: {
    python: 'def can_partition(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nresult = can_partition(nums)\nprint(str(result).lower())',
    java: 'import java.util.*;\n\npublic class Main {\n    public static boolean canPartition(int[] nums) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n        System.out.println(canPartition(nums));\n    }\n}',
    c: '#include <stdio.h>\n#include <stdbool.h>\n\nbool canPartition(int nums[], int n) {\n    return false;\n}\n\nint main(){\n    int n;\n    scanf("%d",&n);\n    int nums[n];\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    printf("%s\\n", canPartition(nums,n) ? "true" : "false");\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool canPartition(vector<int>& nums){\n    return false;\n}\n\nint main(){\n    int n;\n    cin>>n;\n    vector<int> nums(n);\n    for(int i=0;i<n;i++) cin>>nums[i];\n    cout<<(canPartition(nums) ? "true" : "false")<<endl;\n    return 0;\n}'
  }
},{
  id: 'pes-m2',
  title: 'Warehouse Weight Balancer',
  difficulty: 'Medium',
  description: 'A warehouse has packages with different weights. Determine whether the packages can be divided into two groups with the same total weight.',
  constraints: [
    '1 <= n <= 150',
    '1 <= nums[i] <= 500',
    'The total sum of nums does not exceed 7500.'
  ],
  examples: [
    {
      input: '6\n10 20 15 5 10 20',
      output: 'true',
      explanation: 'The total weight is 80, and a subset with weight 40 can be formed.'
    },
    {
      input: '4\n7 14 21 8',
      output: 'false',
      explanation: 'The total weight is 50, but no subset has weight 25.'
    }
  ],
  testCases: [
    {
      input: '6\n10 20 15 5 10 20',
      expectedOutput: 'true',
      hidden: false
    },
    {
      input: '4\n7 14 21 8',
      expectedOutput: 'false',
      hidden: false
    },
    {
      input: '5\n12 8 6 4 10',
      expectedOutput: 'true',
      hidden: true
    },
    {
      input: '4\n11 13 17 19',
      expectedOutput: 'true',
      hidden: true
    }
  ],
  starterCode: {
    python: 'def can_partition(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nresult = can_partition(nums)\nprint(str(result).lower())',
    java: 'import java.util.*;\n\npublic class Main {\n    public static boolean canPartition(int[] nums) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n        System.out.println(canPartition(nums));\n    }\n}',
    c: '#include <stdio.h>\n#include <stdbool.h>\n\nbool canPartition(int nums[], int n) {\n    return false;\n}\n\nint main(){\n    int n;\n    scanf("%d",&n);\n    int nums[n];\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    printf("%s\\n", canPartition(nums,n) ? "true" : "false");\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool canPartition(vector<int>& nums){\n    return false;\n}\n\nint main(){\n    int n;\n    cin>>n;\n    vector<int> nums(n);\n    for(int i=0;i<n;i++) cin>>nums[i];\n    cout<<(canPartition(nums) ? "true" : "false")<<endl;\n    return 0;\n}'
  }
},{
  id: 'pes-m3',
  title: 'Energy Grid Split',
  difficulty: 'Medium',
  description: 'An energy grid contains units with different capacities. Determine whether the units can be separated into two groups that consume exactly the same total energy.',
  constraints: [
    '1 <= n <= 200',
    '1 <= nums[i] <= 1000',
    'The total sum of nums does not exceed 10000.'
  ],
  examples: [
    {
      input: '5\n3 1 1 2 2',
      output: 'false',
      explanation: 'The total energy is 9, which is odd.'
    },
    {
      input: '6\n4 4 4 4 4 4',
      output: 'true',
      explanation: 'The total is 24 and each group can have energy 12.'
    }
  ],
  testCases: [
    {
      input: '5\n3 1 1 2 2',
      expectedOutput: 'false',
      hidden: false
    },
    {
      input: '6\n4 4 4 4 4 4',
      expectedOutput: 'true',
      hidden: false
    },
    {
      input: '7\n2 4 6 8 10 12 14',
      expectedOutput: 'true',
      hidden: true
    },
    {
      input: '5\n5 7 9 11 13',
      expectedOutput: 'false',
      hidden: true
    }
  ],
  starterCode: {
    python: 'def can_partition(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nresult = can_partition(nums)\nprint(str(result).lower())',
    java: 'import java.util.*;\n\npublic class Main {\n    public static boolean canPartition(int[] nums) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n        System.out.println(canPartition(nums));\n    }\n}',
    c: '#include <stdio.h>\n#include <stdbool.h>\n\nbool canPartition(int nums[], int n) {\n    return false;\n}\n\nint main(){\n    int n;\n    scanf("%d",&n);\n    int nums[n];\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    printf("%s\\n", canPartition(nums,n) ? "true" : "false");\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool canPartition(vector<int>& nums){\n    return false;\n}\n\nint main(){\n    int n;\n    cin>>n;\n    vector<int> nums(n);\n    for(int i=0;i<n;i++) cin>>nums[i];\n    cout<<(canPartition(nums) ? "true" : "false")<<endl;\n    return 0;\n}'
  }
},{
  id: 'pes-m4',
  title: 'Balanced Manufacturing Batches',
  difficulty: 'Medium',
  description: 'A manufacturing plant has batches with different production quantities. Determine whether the batches can be split into two groups with equal production totals.',
  constraints: [
    '1 <= n <= 200',
    '1 <= nums[i] <= 1000',
    'The total sum of nums does not exceed 12000.'
  ],
  examples: [
    {
      input: '6\n8 7 6 5 4 10',
      output: 'true',
      explanation: 'The total production is 40 and subsets with production 20 can be formed.'
    },
    {
      input: '5\n4 7 9 12 15',
      output: 'false',
      explanation: 'The total production is 47, which is odd.'
    }
  ],
  testCases: [
    {
      input: '6\n8 7 6 5 4 10',
      expectedOutput: 'true',
      hidden: false
    },
    {
      input: '5\n4 7 9 12 15',
      expectedOutput: 'false',
      hidden: false
    },
    {
      input: '8\n5 5 10 10 15 15 20 20',
      expectedOutput: 'true',
      hidden: true
    },
    {
      input: '4\n6 10 14 21',
      expectedOutput: 'false',
      hidden: true
    }
  ],
  starterCode: {
    python: 'def can_partition(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nresult = can_partition(nums)\nprint(str(result).lower())',
    java: 'import java.util.*;\n\npublic class Main {\n    public static boolean canPartition(int[] nums) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n        System.out.println(canPartition(nums));\n    }\n}',
    c: '#include <stdio.h>\n#include <stdbool.h>\n\nbool canPartition(int nums[], int n) {\n    return false;\n}\n\nint main(){\n    int n;\n    scanf("%d",&n);\n    int nums[n];\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    printf("%s\\n", canPartition(nums,n) ? "true" : "false");\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool canPartition(vector<int>& nums){\n    return false;\n}\n\nint main(){\n    int n;\n    cin>>n;\n    vector<int> nums(n);\n    for(int i=0;i<n;i++) cin>>nums[i];\n    cout<<(canPartition(nums) ? "true" : "false")<<endl;\n    return 0;\n}'
  }
},{
  id: 'pes-m5',
  title: 'Equal Data Center Capacity',
  difficulty: 'Medium',
  description: 'A data center has servers with different capacity values. Determine whether the servers can be divided into two groups with identical total capacity.',
  constraints: [
    '1 <= n <= 250',
    '1 <= nums[i] <= 1000',
    'The total sum of nums does not exceed 15000.'
  ],
  examples: [
    {
      input: '7\n2 4 6 8 10 12 14',
      output: 'true',
      explanation: 'The total capacity is 56 and a subset with capacity 28 can be formed.'
    },
    {
      input: '5\n5 8 11 14 17',
      output: 'false',
      explanation: 'The total capacity is 55, which is odd.'
    }
  ],
  testCases: [
    {
      input: '7\n2 4 6 8 10 12 14',
      expectedOutput: 'true',
      hidden: false
    },
    {
      input: '5\n5 8 11 14 17',
      expectedOutput: 'false',
      hidden: false
    },
    {
      input: '6\n10 10 20 20 30 30',
      expectedOutput: 'true',
      hidden: true
    },
    {
      input: '4\n9 12 15 18',
      expectedOutput: 'true',
      hidden: true
    }
  ],
  starterCode: {
    python: 'def can_partition(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nresult = can_partition(nums)\nprint(str(result).lower())',
    java: 'import java.util.*;\n\npublic class Main {\n    public static boolean canPartition(int[] nums) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n        System.out.println(canPartition(nums));\n    }\n}',
    c: '#include <stdio.h>\n#include <stdbool.h>\n\nbool canPartition(int nums[], int n) {\n    return false;\n}\n\nint main(){\n    int n;\n    scanf("%d",&n);\n    int nums[n];\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    printf("%s\\n", canPartition(nums,n) ? "true" : "false");\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool canPartition(vector<int>& nums){\n    return false;\n}\n\nint main(){\n    int n;\n    cin>>n;\n    vector<int> nums(n);\n    for(int i=0;i<n;i++) cin>>nums[i];\n    cout<<(canPartition(nums) ? "true" : "false")<<endl;\n    return 0;\n}'
  }
},{
  id: 'pes-h1',
  title: 'Large Scale Resource Partition',
  difficulty: 'Hard',
  description: 'Given a large collection of resource quantities, determine whether they can be partitioned into two subsets with exactly equal sums while handling a large target sum efficiently.',
  constraints: [
    '1 <= n <= 500',
    '1 <= nums[i] <= 2000',
    'The total sum of nums does not exceed 50000.'
  ],
  examples: [
    {
      input: '8\n10 20 30 40 50 60 70 80',
      output: 'true',
      explanation: 'The total is 360 and a subset with sum 180 can be formed.'
    },
    {
      input: '6\n11 22 33 44 55 67',
      output: 'false',
      explanation: 'The total sum is 232, but no subset with sum 116 can be formed.'
    }
  ],
  testCases: [
    {
      input: '8\n10 20 30 40 50 60 70 80',
      expectedOutput: 'true',
      hidden: false
    },
    {
      input: '6\n11 22 33 44 55 67',
      expectedOutput: 'false',
      hidden: false
    },
    {
      input: '10\n5 10 15 20 25 30 35 40 45 50',
      expectedOutput: 'true',
      hidden: true
    },
    {
      input: '5\n101 103 107 109 113',
      expectedOutput: 'false',
      hidden: true
    }
  ],
  starterCode: {
    python: 'def can_partition(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nresult = can_partition(nums)\nprint(str(result).lower())',
    java: 'import java.util.*;\n\npublic class Main {\n    public static boolean canPartition(int[] nums) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n        System.out.println(canPartition(nums));\n    }\n}',
    c: '#include <stdio.h>\n#include <stdbool.h>\n\nbool canPartition(int nums[], int n) {\n    return false;\n}\n\nint main(){\n    int n;\n    scanf("%d",&n);\n    int nums[n];\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    printf("%s\\n", canPartition(nums,n) ? "true" : "false");\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool canPartition(vector<int>& nums){\n    return false;\n}\n\nint main(){\n    int n;\n    cin>>n;\n    vector<int> nums(n);\n    for(int i=0;i<n;i++) cin>>nums[i];\n    cout<<(canPartition(nums) ? "true" : "false")<<endl;\n    return 0;\n}'
  }
},{
  id: 'pes-h2',
  title: 'Industrial Power Equalizer',
  difficulty: 'Hard',
  description: 'An industrial system contains many power units with different outputs. Determine whether the units can be divided into two groups having exactly equal total power.',
  constraints: [
    '1 <= n <= 500',
    '1 <= nums[i] <= 3000',
    'The total sum of nums does not exceed 60000.'
  ],
  examples: [
    {
      input: '8\n12 18 24 30 36 42 48 54',
      output: 'true',
      explanation: 'The total power is 264 and a subset with power 132 can be formed.'
    },
    {
      input: '5\n17 23 31 41 53',
      output: 'false',
      explanation: 'The total power is 165, which is odd.'
    }
  ],
  testCases: [
    {
      input: '8\n12 18 24 30 36 42 48 54',
      expectedOutput: 'true',
      hidden: false
    },
    {
      input: '5\n17 23 31 41 53',
      expectedOutput: 'false',
      hidden: false
    },
    {
      input: '10\n10 20 30 40 50 60 70 80 90 100',
      expectedOutput: 'true',
      hidden: true
    },
    {
      input: '6\n101 102 103 104 105 107',
      expectedOutput: 'false',
      hidden: true
    }
  ],
  starterCode: {
    python: 'def can_partition(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nresult = can_partition(nums)\nprint(str(result).lower())',
    java: 'import java.util.*;\n\npublic class Main {\n    public static boolean canPartition(int[] nums) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n        System.out.println(canPartition(nums));\n    }\n}',
    c: '#include <stdio.h>\n#include <stdbool.h>\n\nbool canPartition(int nums[], int n) {\n    return false;\n}\n\nint main(){\n    int n;\n    scanf("%d",&n);\n    int nums[n];\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    printf("%s\\n", canPartition(nums,n) ? "true" : "false");\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool canPartition(vector<int>& nums){\n    return false;\n}\n\nint main(){\n    int n;\n    cin>>n;\n    vector<int> nums(n);\n    for(int i=0;i<n;i++) cin>>nums[i];\n    cout<<(canPartition(nums) ? "true" : "false")<<endl;\n    return 0;\n}'
  }
},{
  id: 'pes-h3',
  title: 'Massive Data Partition',
  difficulty: 'Hard',
  description: 'A data processing system receives a large set of integer weights. Determine whether the weights can be separated into two subsets having identical total weight.',
  constraints: [
    '1 <= n <= 1000',
    '1 <= nums[i] <= 5000',
    'The total sum of nums does not exceed 100000.'
  ],
  examples: [
    {
      input: '10\n5 10 15 20 25 30 35 40 45 50',
      output: 'true',
      explanation: 'The total is 275, which is odd, so the result is false.'
    },
    {
      input: '10\n4 8 12 16 20 24 28 32 36 40',
      output: 'true',
      explanation: 'The total weight is 220 and a subset with weight 110 exists.'
    }
  ],
  testCases: [
    {
      input: '10\n5 10 15 20 25 30 35 40 45 50',
      expectedOutput: 'false',
      hidden: false
    },
    {
      input: '10\n4 8 12 16 20 24 28 32 36 40',
      expectedOutput: 'true',
      hidden: false
    },
    {
      input: '8\n7 14 21 28 35 42 49 56',
      expectedOutput: 'true',
      hidden: true
    },
    {
      input: '7\n13 17 19 23 29 31 37',
      expectedOutput: 'false',
      hidden: true
    }
  ],
  starterCode: {
    python: 'def can_partition(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nresult = can_partition(nums)\nprint(str(result).lower())',
    java: 'import java.util.*;\n\npublic class Main {\n    public static boolean canPartition(int[] nums) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n        System.out.println(canPartition(nums));\n    }\n}',
    c: '#include <stdio.h>\n#include <stdbool.h>\n\nbool canPartition(int nums[], int n) {\n    return false;\n}\n\nint main(){\n    int n;\n    scanf("%d",&n);\n    int nums[n];\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    printf("%s\\n", canPartition(nums,n) ? "true" : "false");\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool canPartition(vector<int>& nums){\n    return false;\n}\n\nint main(){\n    int n;\n    cin>>n;\n    vector<int> nums(n);\n    for(int i=0;i<n;i++) cin>>nums[i];\n    cout<<(canPartition(nums) ? "true" : "false")<<endl;\n    return 0;\n}'
  }
},{
  id: 'pes-h4',
  title: 'Multi-System Capacity Split',
  difficulty: 'Hard',
  description: 'A distributed infrastructure contains capacity values from multiple systems. Determine whether all capacities can be divided into two groups with identical total capacity.',
  constraints: [
    '1 <= n <= 1000',
    '1 <= nums[i] <= 10000',
    'The total sum of nums does not exceed 150000.'
  ],
  examples: [
    {
      input: '8\n15 25 35 45 55 65 75 85',
      output: 'true',
      explanation: 'The total capacity is 400 and a subset with capacity 200 can be formed.'
    },
    {
      input: '6\n21 32 43 54 65 76',
      output: 'false',
      explanation: 'The total capacity is 291, which is odd.'
    }
  ],
  testCases: [
    {
      input: '8\n15 25 35 45 55 65 75 85',
      expectedOutput: 'true',
      hidden: false
    },
    {
      input: '6\n21 32 43 54 65 76',
      expectedOutput: 'false',
      hidden: false
    },
    {
      input: '10\n10 20 30 40 50 60 70 80 90 100',
      expectedOutput: 'true',
      hidden: true
    },
    {
      input: '8\n11 22 33 44 55 66 77 89',
      expectedOutput: 'false',
      hidden: true
    }
  ],
  starterCode: {
    python: 'def can_partition(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nresult = can_partition(nums)\nprint(str(result).lower())',
    java: 'import java.util.*;\n\npublic class Main {\n    public static boolean canPartition(int[] nums) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n        System.out.println(canPartition(nums));\n    }\n}',
    c: '#include <stdio.h>\n#include <stdbool.h>\n\nbool canPartition(int nums[], int n) {\n    return false;\n}\n\nint main(){\n    int n;\n    scanf("%d",&n);\n    int nums[n];\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    printf("%s\\n", canPartition(nums,n) ? "true" : "false");\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool canPartition(vector<int>& nums){\n    return false;\n}\n\nint main(){\n    int n;\n    cin>>n;\n    vector<int> nums(n);\n    for(int i=0;i<n;i++) cin>>nums[i];\n    cout<<(canPartition(nums) ? "true" : "false")<<endl;\n    return 0;\n}'
  }
},{
  id: 'pes-h5',
  title: 'Optimal Equal Partition Challenge',
  difficulty: 'Hard',
  description: 'Given a large set of positive integers representing system resources, determine whether the complete set can be partitioned into two subsets with exactly equal sums.',
  constraints: [
    '1 <= n <= 1000',
    '1 <= nums[i] <= 10000',
    'The total sum of nums does not exceed 200000.'
  ],
  examples: [
    {
      input: '12\n10 20 30 40 50 60 70 80 90 100 110 120',
      output: 'true',
      explanation: 'The total sum is 780 and a subset with sum 390 can be formed.'
    },
    {
      input: '7\n17 29 41 53 67 71 83',
      output: 'false',
      explanation: 'The total sum is 361, which is odd.'
    }
  ],
  testCases: [
    {
      input: '12\n10 20 30 40 50 60 70 80 90 100 110 120',
      expectedOutput: 'true',
      hidden: false
    },
    {
      input: '7\n17 29 41 53 67 71 83',
      expectedOutput: 'false',
      hidden: false
    },
    {
      input: '10\n12 24 36 48 60 72 84 96 108 120',
      expectedOutput: 'true',
      hidden: true
    },
    {
      input: '9\n101 103 107 109 113 127 131 137 139',
      expectedOutput: 'false',
      hidden: true
    }
  ],
  starterCode: {
    python: 'def can_partition(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nresult = can_partition(nums)\nprint(str(result).lower())',
    java: 'import java.util.*;\n\npublic class Main {\n    public static boolean canPartition(int[] nums) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n        System.out.println(canPartition(nums));\n    }\n}',
    c: '#include <stdio.h>\n#include <stdbool.h>\n\nbool canPartition(int nums[], int n) {\n    return false;\n}\n\nint main(){\n    int n;\n    scanf("%d",&n);\n    int nums[n];\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    printf("%s\\n", canPartition(nums,n) ? "true" : "false");\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool canPartition(vector<int>& nums){\n    return false;\n}\n\nint main(){\n    int n;\n    cin>>n;\n    vector<int> nums(n);\n    for(int i=0;i<n;i++) cin>>nums[i];\n    cout<<(canPartition(nums) ? "true" : "false")<<endl;\n    return 0;\n}'
  }
}
];