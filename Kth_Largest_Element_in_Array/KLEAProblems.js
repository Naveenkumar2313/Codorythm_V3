export const KLEAProblems = [
  {
  id: 'kle-e1',
  title: 'Kth Largest Element in an Array',
  difficulty: 'Easy',
  description: 'Given an unsorted array of integers and an integer k, return the kth largest element in the array. Note that it is the kth largest element in sorted order, not the kth distinct element. Solve the problem efficiently using a Min Heap.',
  constraints: [
    '1 <= n <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
    '1 <= k <= n'
  ],
  examples: [
    {
      input: 'nums = [3,2,1,5,6,4], k = 2',
      output: '5',
      explanation: 'The sorted array in descending order is [6,5,4,3,2,1]. The 2nd largest element is 5.'
    },
    {
      input: 'nums = [3,2,3,1,2,4,5,5,6], k = 4',
      output: '4',
      explanation: 'The sorted array in descending order is [6,5,5,4,3,3,2,2,1]. The 4th largest element is 4.'
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
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int kthLargest(int[] nums, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            int k = sc.nextInt();\n            System.out.println(kthLargest(nums,k));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint kthLargest(int* nums, int numsSize, int k) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int k;\n    scanf("%d",&k);\n    printf("%d\\n",kthLargest(nums,n,k));\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint kthLargest(vector<int>& nums, int k) {\n    return 0;\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int k;\n        cin>>k;\n        cout<<kthLargest(nums,k)<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'kle-e2',
  title: 'Kth Largest Unique Element',
  difficulty: 'Easy',
  description: 'Given an unsorted array of integers and an integer k, return the kth largest distinct element in the array. If there are fewer than k distinct elements, return -1.',
  constraints: [
    '1 <= n <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
    '1 <= k <= n'
  ],
  examples: [
    {
      input: 'nums = [5,3,5,2,4,4,1], k = 3',
      output: '3',
      explanation: 'The distinct elements are [5,4,3,2,1]. The 3rd largest distinct element is 3.'
    },
    {
      input: 'nums = [7,7,7], k = 2',
      output: '-1',
      explanation: 'There is only one distinct element, so the answer is -1.'
    }
  ],
  testCases: [
    {
      input: '7\n5 3 5 2 4 4 1\n3',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '3\n7 7 7\n2',
      expectedOutput: '-1',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def kth_largest_unique(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nprint(kth_largest_unique(nums, k))',
    java: 'import java.util.*;\npublic class Solution {\n    public static int kthLargestUnique(int[] nums, int k) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            int k = sc.nextInt();\n            System.out.println(kthLargestUnique(nums,k));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint kthLargestUnique(int* nums, int numsSize, int k) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int k;\n    scanf("%d",&k);\n    printf("%d\\n",kthLargestUnique(nums,n,k));\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint kthLargestUnique(vector<int>& nums, int k) {\n    return 0;\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int k;\n        cin>>k;\n        cout<<kthLargestUnique(nums,k)<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'kle-e3',
  title: 'Top K Largest Elements',
  difficulty: 'Easy',
  description: 'Given an unsorted array of integers and an integer k, return the k largest elements in descending order.',
  constraints: [
    '1 <= n <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
    '1 <= k <= n'
  ],
  examples: [
    {
      input: 'nums = [3,2,1,5,6,4], k = 3',
      output: '6 5 4',
      explanation: 'The three largest elements in descending order are 6, 5, and 4.'
    },
    {
      input: 'nums = [7,10,4,3,20,15], k = 4',
      output: '20 15 10 7',
      explanation: 'The four largest elements are returned in descending order.'
    }
  ],
  testCases: [
    {
      input: '6\n3 2 1 5 6 4\n3',
      expectedOutput: '6 5 4',
      hidden: false
    },
    {
      input: '6\n7 10 4 3 20 15\n4',
      expectedOutput: '20 15 10 7',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def top_k_largest(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nresult = top_k_largest(nums, k)\nprint(*result)',
    java: 'import java.util.*;\npublic class Solution {\n    public static List<Integer> topKLargest(int[] nums, int k) {\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            int k = sc.nextInt();\n            List<Integer> result = topKLargest(nums,k);\n            for(int i=0;i<result.size();i++) {\n                if(i>0) System.out.print(" ");\n                System.out.print(result.get(i));\n            }\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid topKLargest(int* nums, int numsSize, int k) {\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int k;\n    scanf("%d",&k);\n    topKLargest(nums,n,k);\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> topKLargest(vector<int>& nums, int k) {\n    return {};\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int k;\n        cin>>k;\n        vector<int> result = topKLargest(nums,k);\n        for(int i=0;i<result.size();i++){\n            if(i) cout<<" ";\n            cout<<result[i];\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'kle-e4',
  title: 'Kth Smallest Element in an Array',
  difficulty: 'Easy',
  description: 'Given an unsorted array of integers and an integer k, return the kth smallest element in the array.',
  constraints: [
    '1 <= n <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
    '1 <= k <= n'
  ],
  examples: [
    {
      input: 'nums = [7,10,4,3,20,15], k = 3',
      output: '7',
      explanation: 'The sorted array is [3,4,7,10,15,20]. The 3rd smallest element is 7.'
    },
    {
      input: 'nums = [12,5,7,19,3], k = 2',
      output: '5',
      explanation: 'The sorted array is [3,5,7,12,19]. The 2nd smallest element is 5.'
    }
  ],
  testCases: [
    {
      input: '6\n7 10 4 3 20 15\n3',
      expectedOutput: '7',
      hidden: false
    },
    {
      input: '5\n12 5 7 19 3\n2',
      expectedOutput: '5',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def kth_smallest(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nprint(kth_smallest(nums, k))',
    java: 'import java.util.*;\npublic class Solution {\n    public static int kthSmallest(int[] nums, int k) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            int k = sc.nextInt();\n            System.out.println(kthSmallest(nums,k));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint kthSmallest(int* nums, int numsSize, int k) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int k;\n    scanf("%d",&k);\n    printf("%d\\n",kthSmallest(nums,n,k));\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint kthSmallest(vector<int>& nums, int k) {\n    return 0;\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int k;\n        cin>>k;\n        cout<<kthSmallest(nums,k)<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'kle-e5',
  title: 'Last Stone Weight',
  difficulty: 'Easy',
  description: 'You are given an array of integers where each integer represents the weight of a stone. In each turn, remove the two heaviest stones and smash them together. If both stones have the same weight, both are destroyed. Otherwise, the remaining stone has a weight equal to the difference of their weights and is added back. Return the weight of the last remaining stone. If no stones remain, return 0.',
  constraints: [
    '1 <= stones.length <= 30',
    '1 <= stones[i] <= 1000'
  ],
  examples: [
    {
      input: 'stones = [2,7,4,1,8,1]',
      output: '1',
      explanation: 'The final remaining stone has weight 1.'
    },
    {
      input: 'stones = [1]',
      output: '1',
      explanation: 'Only one stone is present, so its weight is returned.'
    }
  ],
  testCases: [
    {
      input: '6\n2 7 4 1 8 1',
      expectedOutput: '1',
      hidden: false
    },
    {
      input: '1\n1',
      expectedOutput: '1',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def last_stone_weight(stones):\n    pass\n\nn = int(input())\nstones = list(map(int, input().split()))\nprint(last_stone_weight(stones))',
    java: 'import java.util.*;\npublic class Solution {\n    public static int lastStoneWeight(int[] stones) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] stones = new int[n];\n            for(int i=0;i<n;i++) stones[i]=sc.nextInt();\n            System.out.println(lastStoneWeight(stones));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint lastStoneWeight(int* stones, int stonesSize) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* stones=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&stones[i]);\n    printf("%d\\n",lastStoneWeight(stones,n));\n    free(stones);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint lastStoneWeight(vector<int>& stones) {\n    return 0;\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> stones(n);\n        for(int i=0;i<n;i++) cin>>stones[i];\n        cout<<lastStoneWeight(stones)<<"\\n";\n    }\n    return 0;\n}'
  }
},
  {
  id: 'kle-m1',
  title: 'Kth Largest Element in a Stream',
  difficulty: 'Medium',
  description: 'You are given an integer k and a stream of integers. After each insertion into the stream, output the current kth largest element. If fewer than k elements have been seen so far, output -1.',
  constraints: [
    '1 <= n <= 10^5',
    '-10^4 <= stream[i] <= 10^4',
    '1 <= k <= n'
  ],
  examples: [
    {
      input: 'k = 3, stream = [5,2,8,10,9]',
      output: '-1 -1 2 5 8',
      explanation: 'After each insertion, the kth largest elements are -1, -1, 2, 5 and 8 respectively.'
    },
    {
      input: 'k = 2, stream = [4,7,1]',
      output: '-1 4 4',
      explanation: 'The 2nd largest element after each insertion is -1, 4 and 4.'
    }
  ],
  testCases: [
    {
      input: '5\n3\n5 2 8 10 9',
      expectedOutput: '-1 -1 2 5 8',
      hidden: false
    },
    {
      input: '3\n2\n4 7 1',
      expectedOutput: '-1 4 4',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def kth_largest_stream(stream, k):\n    pass\n\nn = int(input())\nk = int(input())\nstream = list(map(int, input().split()))\nresult = kth_largest_stream(stream, k)\nprint(*result)',
    java: 'import java.util.*;\npublic class Solution {\n    public static List<Integer> kthLargestStream(int[] stream, int k) {\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int k = sc.nextInt();\n            int[] stream = new int[n];\n            for(int i=0;i<n;i++) stream[i]=sc.nextInt();\n            List<Integer> result = kthLargestStream(stream,k);\n            for(int i=0;i<result.size();i++) {\n                if(i>0) System.out.print(" ");\n                System.out.print(result.get(i));\n            }\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid kthLargestStream(int* stream, int n, int k) {\n}\n\nint main() {\n    int n,k;\n    if(scanf("%d",&n)!=1) return 0;\n    scanf("%d",&k);\n    int* stream=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&stream[i]);\n    kthLargestStream(stream,n,k);\n    free(stream);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> kthLargestStream(vector<int>& stream, int k) {\n    return {};\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n,k;\n    if(cin>>n>>k){\n        vector<int> stream(n);\n        for(int i=0;i<n;i++) cin>>stream[i];\n        vector<int> result = kthLargestStream(stream,k);\n        for(int i=0;i<result.size();i++){\n            if(i) cout<<" ";\n            cout<<result[i];\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'kle-m2',
  title: 'K Closest Numbers to Target',
  difficulty: 'Medium',
  description: 'Given an unsorted array of integers, an integer target, and an integer k, return the k numbers that are closest to the target. If two numbers have the same distance from the target, return the smaller number first. The output should be sorted in ascending order.',
  constraints: [
    '1 <= n <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
    '1 <= k <= n',
    '-10^4 <= target <= 10^4'
  ],
  examples: [
    {
      input: 'nums = [10,2,14,4,7,6], target = 5, k = 3',
      output: '4 6 7',
      explanation: 'The three closest numbers to 5 are 4, 6 and 7.'
    },
    {
      input: 'nums = [1,3,5,7,9], target = 6, k = 2',
      output: '5 7',
      explanation: 'The two closest numbers to 6 are 5 and 7.'
    }
  ],
  testCases: [
    {
      input: '6\n10 2 14 4 7 6\n5\n3',
      expectedOutput: '4 6 7',
      hidden: false
    },
    {
      input: '5\n1 3 5 7 9\n6\n2',
      expectedOutput: '5 7',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def k_closest_numbers(nums, target, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\ntarget = int(input())\nk = int(input())\nresult = k_closest_numbers(nums, target, k)\nprint(*result)',
    java: 'import java.util.*;\npublic class Solution {\n    public static List<Integer> kClosestNumbers(int[] nums, int target, int k) {\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            int target = sc.nextInt();\n            int k = sc.nextInt();\n            List<Integer> result = kClosestNumbers(nums,target,k);\n            for(int i=0;i<result.size();i++) {\n                if(i>0) System.out.print(" ");\n                System.out.print(result.get(i));\n            }\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid kClosestNumbers(int* nums, int numsSize, int target, int k) {\n}\n\nint main() {\n    int n,target,k;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    scanf("%d",&target);\n    scanf("%d",&k);\n    kClosestNumbers(nums,n,target,k);\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> kClosestNumbers(vector<int>& nums, int target, int k) {\n    return {};\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n,target,k;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        cin>>target>>k;\n        vector<int> result = kClosestNumbers(nums,target,k);\n        for(int i=0;i<result.size();i++){\n            if(i) cout<<" ";\n            cout<<result[i];\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'kle-m3',
  title: 'K Closest Points to Origin',
  difficulty: 'Medium',
  description: 'Given an array of points where each point is represented as [x, y] and an integer k, return the k closest points to the origin (0, 0). The distance between a point and the origin is the Euclidean distance. The output may be returned in any order.',
  constraints: [
    '1 <= n <= 10^4',
    '-10^4 <= xi, yi <= 10^4',
    '1 <= k <= n'
  ],
  examples: [
    {
      input: 'points = [[1,3],[-2,2]], k = 1',
      output: '-2 2',
      explanation: 'The point (-2,2) is closer to the origin.'
    },
    {
      input: 'points = [[3,3],[5,-1],[-2,4]], k = 2',
      output: '3 3\n-2 4',
      explanation: 'The two closest points to the origin are (3,3) and (-2,4).'
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
    python: 'def k_closest_points(points, k):\n    pass\n\nn = int(input())\npoints = [list(map(int, input().split())) for _ in range(n)]\nk = int(input())\nresult = k_closest_points(points, k)\nfor x, y in result:\n    print(x, y)',
    java: 'import java.util.*;\npublic class Solution {\n    public static List<int[]> kClosestPoints(int[][] points, int k) {\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[][] points = new int[n][2];\n            for(int i=0;i<n;i++) {\n                points[i][0]=sc.nextInt();\n                points[i][1]=sc.nextInt();\n            }\n            int k = sc.nextInt();\n            List<int[]> result = kClosestPoints(points,k);\n            for(int[] p : result) System.out.println(p[0]+" "+p[1]);\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid kClosestPoints(int points[][2], int n, int k) {\n}\n\nint main() {\n    int n,k;\n    if(scanf("%d",&n)!=1) return 0;\n    int points[n][2];\n    for(int i=0;i<n;i++) scanf("%d%d",&points[i][0],&points[i][1]);\n    scanf("%d",&k);\n    kClosestPoints(points,n,k);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<pair<int,int>> kClosestPoints(vector<pair<int,int>>& points, int k) {\n    return {};\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n,k;\n    if(cin>>n){\n        vector<pair<int,int>> points(n);\n        for(int i=0;i<n;i++) cin>>points[i].first>>points[i].second;\n        cin>>k;\n        vector<pair<int,int>> result = kClosestPoints(points,k);\n        for(auto &p : result) cout<<p.first<<" "<<p.second<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'kle-m4',
  title: 'Kth Smallest Element in a Sorted Matrix',
  difficulty: 'Medium',
  description: 'Given an n x n matrix where each row and each column is sorted in ascending order, return the kth smallest element in the matrix. It is the kth smallest element in the sorted order, not the kth distinct element.',
  constraints: [
    '1 <= n <= 300',
    '-10^4 <= matrix[i][j] <= 10^4',
    '1 <= k <= n * n'
  ],
  examples: [
    {
      input: 'matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8',
      output: '13',
      explanation: 'The sorted elements are [1,5,9,10,11,12,13,13,15]. The 8th smallest element is 13.'
    },
    {
      input: 'matrix = [[-5]], k = 1',
      output: '-5',
      explanation: 'The only element in the matrix is the answer.'
    }
  ],
  testCases: [
    {
      input: '3\n1 5 9\n10 11 13\n12 13 15\n8',
      expectedOutput: '13',
      hidden: false
    },
    {
      input: '1\n-5\n1',
      expectedOutput: '-5',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def kth_smallest_matrix(matrix, k):\n    pass\n\nn = int(input())\nmatrix = [list(map(int, input().split())) for _ in range(n)]\nk = int(input())\nprint(kth_smallest_matrix(matrix, k))',
    java: 'import java.util.*;\npublic class Solution {\n    public static int kthSmallestMatrix(int[][] matrix, int k) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[][] matrix = new int[n][n];\n            for(int i=0;i<n;i++) for(int j=0;j<n;j++) matrix[i][j]=sc.nextInt();\n            int k = sc.nextInt();\n            System.out.println(kthSmallestMatrix(matrix,k));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint kthSmallestMatrix(int matrix[][300], int n, int k) {\n    return 0;\n}\n\nint main() {\n    int n,k;\n    if(scanf("%d",&n)!=1) return 0;\n    int matrix[300][300];\n    for(int i=0;i<n;i++) for(int j=0;j<n;j++) scanf("%d",&matrix[i][j]);\n    scanf("%d",&k);\n    printf("%d\\n",kthSmallestMatrix(matrix,n,k));\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint kthSmallestMatrix(vector<vector<int>>& matrix, int k) {\n    return 0;\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n,k;\n    if(cin>>n){\n        vector<vector<int>> matrix(n, vector<int>(n));\n        for(int i=0;i<n;i++) for(int j=0;j<n;j++) cin>>matrix[i][j];\n        cin>>k;\n        cout<<kthSmallestMatrix(matrix,k)<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'kle-m5',
  title: 'Reorganize String',
  difficulty: 'Medium',
  description: 'Given a string s, rearrange its characters so that no two adjacent characters are the same. If it is not possible, return "-1".',
  constraints: [
    '1 <= s.length <= 5 × 10^4',
    's consists of lowercase English letters only'
  ],
  examples: [
    {
      input: 's = "aab"',
      output: 'aba',
      explanation: 'The characters are rearranged so that no two adjacent characters are the same.'
    },
    {
      input: 's = "aaab"',
      output: '-1',
      explanation: 'It is impossible to rearrange the characters without placing two identical characters next to each other.'
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
      expectedOutput: '-1',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def reorganize_string(s):\n    pass\n\ns = input().strip()\nprint(reorganize_string(s))',
    java: 'import java.util.*;\npublic class Solution {\n    public static String reorganizeString(String s) {\n        return "";\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNext()) {\n            String s = sc.next();\n            System.out.println(reorganizeString(s));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <string.h>\n\nvoid reorganizeString(char* s) {\n}\n\nint main() {\n    char s[50005];\n    if(scanf("%s",s)!=1) return 0;\n    reorganizeString(s);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nstring reorganizeString(string s) {\n    return "";\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    string s;\n    if(cin>>s){\n        cout<<reorganizeString(s)<<"\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'kle-h1',
  title: 'Merge K Sorted Arrays',
  difficulty: 'Hard',
  description: 'Given k sorted arrays, merge them into a single sorted array and return the merged array.',
  constraints: [
    '1 <= k <= 100',
    '1 <= size of each array <= 10^4',
    '-10^4 <= elements <= 10^4'
  ],
  examples: [
    {
      input: 'arrays = [[1,4,7],[2,5,8],[3,6,9]]',
      output: '1 2 3 4 5 6 7 8 9',
      explanation: 'All arrays are merged while maintaining sorted order.'
    },
    {
      input: 'arrays = [[1,3],[2],[4,5]]',
      output: '1 2 3 4 5',
      explanation: 'The merged array contains all elements in sorted order.'
    }
  ],
  testCases: [
    {
      input: '3\n3\n1 4 7\n3\n2 5 8\n3\n3 6 9',
      expectedOutput: '1 2 3 4 5 6 7 8 9',
      hidden: false
    },
    {
      input: '3\n2\n1 3\n1\n2\n2\n4 5',
      expectedOutput: '1 2 3 4 5',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def merge_k_sorted_arrays(arrays):\n    pass\n\nk = int(input())\narrays = []\nfor _ in range(k):\n    n = int(input())\n    arrays.append(list(map(int, input().split())))\nresult = merge_k_sorted_arrays(arrays)\nprint(*result)',
    java: 'import java.util.*;\npublic class Solution {\n    public static List<Integer> mergeKSortedArrays(List<int[]> arrays) {\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int k = sc.nextInt();\n        List<int[]> arrays = new ArrayList<>();\n        for(int i=0;i<k;i++){\n            int n = sc.nextInt();\n            int[] arr = new int[n];\n            for(int j=0;j<n;j++) arr[j]=sc.nextInt();\n            arrays.add(arr);\n        }\n        List<Integer> result = mergeKSortedArrays(arrays);\n        for(int i=0;i<result.size();i++){\n            if(i>0) System.out.print(" ");\n            System.out.print(result.get(i));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid mergeKSortedArrays(int** arrays, int* sizes, int k) {\n}\n\nint main() {\n    int k;\n    if(scanf("%d",&k)!=1) return 0;\n    int** arrays=(int**)malloc(k*sizeof(int*));\n    int* sizes=(int*)malloc(k*sizeof(int));\n    for(int i=0;i<k;i++){\n        scanf("%d",&sizes[i]);\n        arrays[i]=(int*)malloc(sizes[i]*sizeof(int));\n        for(int j=0;j<sizes[i];j++) scanf("%d",&arrays[i][j]);\n    }\n    mergeKSortedArrays(arrays,sizes,k);\n    for(int i=0;i<k;i++) free(arrays[i]);\n    free(arrays);\n    free(sizes);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> mergeKSortedArrays(vector<vector<int>>& arrays) {\n    return {};\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int k;\n    if(cin>>k){\n        vector<vector<int>> arrays(k);\n        for(int i=0;i<k;i++){\n            int n;\n            cin>>n;\n            arrays[i].resize(n);\n            for(int j=0;j<n;j++) cin>>arrays[i][j];\n        }\n        vector<int> result=mergeKSortedArrays(arrays);\n        for(int i=0;i<result.size();i++){\n            if(i) cout<<" ";\n            cout<<result[i];\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'kle-h2',
  title: 'Merge K Sorted Linked Lists',
  difficulty: 'Hard',
  description: 'You are given k sorted linked lists. Merge all the linked lists into one sorted linked list and output its elements in sorted order.',
  constraints: [
    '1 <= k <= 100',
    '0 <= size of each linked list <= 10^4',
    '-10^4 <= Node.val <= 10^4',
    'The total number of nodes will not exceed 10^5'
  ],
  examples: [
    {
      input: 'lists = [[1,4,5],[1,3,4],[2,6]]',
      output: '1 1 2 3 4 4 5 6',
      explanation: 'All linked lists are merged into one sorted linked list.'
    },
    {
      input: 'lists = [[],[1],[0,2]]',
      output: '0 1 2',
      explanation: 'Empty linked lists are ignored during merging.'
    }
  ],
  testCases: [
    {
      input: '3\n3\n1 4 5\n3\n1 3 4\n2\n2 6',
      expectedOutput: '1 1 2 3 4 4 5 6',
      hidden: false
    },
    {
      input: '3\n0\n1\n1\n2\n0 2',
      expectedOutput: '0 1 2',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def merge_k_lists(lists):\n    pass\n\nk = int(input())\nlists = []\nfor _ in range(k):\n    n = int(input())\n    lists.append(list(map(int, input().split())) if n else [])\nresult = merge_k_lists(lists)\nprint(*result)',
    java: 'import java.util.*;\npublic class Solution {\n    public static List<Integer> mergeKLists(List<int[]> lists) {\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int k = sc.nextInt();\n        List<int[]> lists = new ArrayList<>();\n        for(int i=0;i<k;i++){\n            int n = sc.nextInt();\n            int[] arr = new int[n];\n            for(int j=0;j<n;j++) arr[j]=sc.nextInt();\n            lists.add(arr);\n        }\n        List<Integer> result = mergeKLists(lists);\n        for(int i=0;i<result.size();i++){\n            if(i>0) System.out.print(" ");\n            System.out.print(result.get(i));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid mergeKLists(int** lists, int* sizes, int k) {\n}\n\nint main() {\n    int k;\n    if(scanf("%d",&k)!=1) return 0;\n    int** lists=(int**)malloc(k*sizeof(int*));\n    int* sizes=(int*)malloc(k*sizeof(int));\n    for(int i=0;i<k;i++){\n        scanf("%d",&sizes[i]);\n        lists[i]=(int*)malloc((sizes[i]>0?sizes[i]:1)*sizeof(int));\n        for(int j=0;j<sizes[i];j++) scanf("%d",&lists[i][j]);\n    }\n    mergeKLists(lists,sizes,k);\n    for(int i=0;i<k;i++) free(lists[i]);\n    free(lists);\n    free(sizes);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> mergeKLists(vector<vector<int>>& lists) {\n    return {};\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int k;\n    if(cin>>k){\n        vector<vector<int>> lists(k);\n        for(int i=0;i<k;i++){\n            int n;\n            cin>>n;\n            lists[i].resize(n);\n            for(int j=0;j<n;j++) cin>>lists[i][j];\n        }\n        vector<int> result=mergeKLists(lists);\n        for(int i=0;i<result.size();i++){\n            if(i) cout<<" ";\n            cout<<result[i];\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'kle-h3',
  title: 'Find Median from Data Stream',
  difficulty: 'Hard',
  description: 'You are given a stream of integers. After each insertion, output the median of all elements seen so far. If the number of elements is even, output the average of the two middle elements as a decimal value.',
  constraints: [
    '1 <= n <= 10^5',
    '-10^5 <= stream[i] <= 10^5'
  ],
  examples: [
    {
      input: 'stream = [5,15,1,3]',
      output: '5.0 10.0 5.0 4.0',
      explanation: 'The medians after each insertion are 5.0, 10.0, 5.0 and 4.0.'
    },
    {
      input: 'stream = [2,4,6]',
      output: '2.0 3.0 4.0',
      explanation: 'The medians after each insertion are 2.0, 3.0 and 4.0.'
    }
  ],
  testCases: [
    {
      input: '4\n5 15 1 3',
      expectedOutput: '5.0 10.0 5.0 4.0',
      hidden: false
    },
    {
      input: '3\n2 4 6',
      expectedOutput: '2.0 3.0 4.0',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def running_median(stream):\n    pass\n\nn = int(input())\nstream = list(map(int, input().split()))\nresult = running_median(stream)\nprint(*result)',
    java: 'import java.util.*;\npublic class Solution {\n    public static List<Double> runningMedian(int[] stream) {\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] stream = new int[n];\n        for(int i=0;i<n;i++) stream[i]=sc.nextInt();\n        List<Double> result = runningMedian(stream);\n        for(int i=0;i<result.size();i++){\n            if(i>0) System.out.print(" ");\n            System.out.print(result.get(i));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid runningMedian(int* stream, int n) {\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* stream=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&stream[i]);\n    runningMedian(stream,n);\n    free(stream);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<double> runningMedian(vector<int>& stream) {\n    return {};\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> stream(n);\n        for(int i=0;i<n;i++) cin>>stream[i];\n        vector<double> result=runningMedian(stream);\n        for(int i=0;i<result.size();i++){\n            if(i) cout<<" ";\n            cout<<result[i];\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'kle-h4',
  title: 'K Maximum Pair Sums',
  difficulty: 'Hard',
  description: 'Given two arrays of equal size n and an integer k, find the k maximum sums that can be formed by adding one element from the first array and one element from the second array. Return the sums in descending order.',
  constraints: [
    '1 <= n <= 10^5',
    '-10^4 <= A[i], B[i] <= 10^4',
    '1 <= k <= n * n'
  ],
  examples: [
    {
      input: 'A = [4,2,5,1], B = [8,0,3,5], k = 3',
      output: '13 12 10',
      explanation: 'The three largest pair sums are 13, 12 and 10.'
    },
    {
      input: 'A = [1,4,2], B = [3,5,1], k = 2',
      output: '9 7',
      explanation: 'The two largest pair sums are 9 and 7.'
    }
  ],
  testCases: [
    {
      input: '4\n4 2 5 1\n8 0 3 5\n3',
      expectedOutput: '13 12 10',
      hidden: false
    },
    {
      input: '3\n1 4 2\n3 5 1\n2',
      expectedOutput: '9 7',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def k_max_pair_sums(a, b, k):\n    pass\n\nn = int(input())\na = list(map(int, input().split()))\nb = list(map(int, input().split()))\nk = int(input())\nresult = k_max_pair_sums(a, b, k)\nprint(*result)',
    java: 'import java.util.*;\npublic class Solution {\n    public static List<Integer> kMaxPairSums(int[] a, int[] b, int k) {\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] a = new int[n];\n        int[] b = new int[n];\n        for(int i=0;i<n;i++) a[i]=sc.nextInt();\n        for(int i=0;i<n;i++) b[i]=sc.nextInt();\n        int k = sc.nextInt();\n        List<Integer> result = kMaxPairSums(a,b,k);\n        for(int i=0;i<result.size();i++){\n            if(i>0) System.out.print(" ");\n            System.out.print(result.get(i));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid kMaxPairSums(int* a, int* b, int n, int k) {\n}\n\nint main() {\n    int n,k;\n    if(scanf("%d",&n)!=1) return 0;\n    int* a=(int*)malloc(n*sizeof(int));\n    int* b=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&a[i]);\n    for(int i=0;i<n;i++) scanf("%d",&b[i]);\n    scanf("%d",&k);\n    kMaxPairSums(a,b,n,k);\n    free(a);\n    free(b);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> kMaxPairSums(vector<int>& a, vector<int>& b, int k) {\n    return {};\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n,k;\n    if(cin>>n){\n        vector<int> a(n), b(n);\n        for(int i=0;i<n;i++) cin>>a[i];\n        for(int i=0;i<n;i++) cin>>b[i];\n        cin>>k;\n        vector<int> result = kMaxPairSums(a,b,k);\n        for(int i=0;i<result.size();i++){\n            if(i) cout<<" ";\n            cout<<result[i];\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'kle-h5',
  title: 'Sliding Window Median',
  difficulty: 'Hard',
  description: 'Given an array of integers and an integer k, return the median of every sliding window of size k. If the window size is even, return the average of the two middle elements as a decimal value.',
  constraints: [
    '1 <= n <= 10^5',
    '-10^5 <= nums[i] <= 10^5',
    '1 <= k <= n'
  ],
  examples: [
    {
      input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3',
      output: '1.0 -1.0 -1.0 3.0 5.0 6.0',
      explanation: 'The medians of the six sliding windows are 1.0, -1.0, -1.0, 3.0, 5.0 and 6.0.'
    },
    {
      input: 'nums = [1,2,3,4], k = 2',
      output: '1.5 2.5 3.5',
      explanation: 'The medians of the three sliding windows are 1.5, 2.5 and 3.5.'
    }
  ],
  testCases: [
    {
      input: '8\n1 3 -1 -3 5 3 6 7\n3',
      expectedOutput: '1.0 -1.0 -1.0 3.0 5.0 6.0',
      hidden: false
    },
    {
      input: '4\n1 2 3 4\n2',
      expectedOutput: '1.5 2.5 3.5',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def sliding_window_median(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nresult = sliding_window_median(nums, k)\nprint(*result)',
    java: 'import java.util.*;\npublic class Solution {\n    public static List<Double> slidingWindowMedian(int[] nums, int k) {\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n        int k = sc.nextInt();\n        List<Double> result = slidingWindowMedian(nums,k);\n        for(int i=0;i<result.size();i++){\n            if(i>0) System.out.print(" ");\n            System.out.print(result.get(i));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid slidingWindowMedian(int* nums, int n, int k) {\n}\n\nint main() {\n    int n,k;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    scanf("%d",&k);\n    slidingWindowMedian(nums,n,k);\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<double> slidingWindowMedian(vector<int>& nums, int k) {\n    return {};\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n,k;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        cin>>k;\n        vector<double> result = slidingWindowMedian(nums,k);\n        for(int i=0;i<result.size();i++){\n            if(i) cout<<" ";\n            cout<<result[i];\n        }\n    }\n    return 0;\n}'
  }
}
];