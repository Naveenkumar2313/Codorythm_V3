export const topKFrequentProblems = [
 {
  id: 'tkf-e1',
  title: 'Top K Frequent Elements',
  difficulty: 'Easy',
  description: 'Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.',
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
    '1 <= k <= Number of Unique Elements'
  ],
  examples: [
    {
      input: 'nums = [1,1,1,2,2,3], k = 2',
      output: '[1,2]',
      explanation: '1 appears 3 times and 2 appears 2 times.'
    },
    {
      input: 'nums = [1], k = 1',
      output: '[1]',
      explanation: 'Only one element exists in the array.'
    }
  ],
  testCases: [
    {
      input: '6\n1 1 1 2 2 3\n2',
      expectedOutput: '1 2',
      hidden: false
    },
    {
      input: '1\n1\n1',
      expectedOutput: '1',
      hidden: false
    }
  ],
  starterCode: {
    python: 'from collections import Counter\nimport heapq\n\ndef top_k_frequent(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nresult = top_k_frequent(nums, k)\nprint(*result)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Integer> topKFrequent(int[] nums, int k) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        int k = sc.nextInt();\n        List<Integer> result = topKFrequent(nums, k);\n        for(int num : result) System.out.print(num + " ");\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint* topKFrequent(int* nums, int numsSize, int k, int* returnSize) {\n    *returnSize = 0;\n    return NULL;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int* nums = (int*)malloc(n * sizeof(int));\n    for(int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    int k;\n    scanf("%d", &k);\n    int returnSize;\n    int* result = topKFrequent(nums, n, k, &returnSize);\n    for(int i = 0; i < returnSize; i++) printf("%d ", result[i]);\n    free(nums);\n    free(result);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> topKFrequent(vector<int>& nums, int k) {\n    return {};\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> nums(n);\n    for(int i = 0; i < n; i++) cin >> nums[i];\n    int k;\n    cin >> k;\n    vector<int> result = topKFrequent(nums, k);\n    for(int num : result) cout << num << " ";\n    return 0;\n}'
  }
},{
  id: 'tkf-e2',
  title: 'Most Frequent Element',
  difficulty: 'Easy',
  description: 'Given an integer array `nums`, return the element that appears the maximum number of times. If multiple elements have the same highest frequency, return the smallest among them.',
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^4 <= nums[i] <= 10^4'
  ],
  examples: [
    {
      input: 'nums = [1,2,2,3,3,3]',
      output: '3',
      explanation: '3 appears 3 times, which is the highest frequency.'
    },
    {
      input: 'nums = [4,4,5,5]',
      output: '4',
      explanation: 'Both 4 and 5 appear twice. Return the smaller element.'
    }
  ],
  testCases: [
    {
      input: '6\n1 2 2 3 3 3',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '4\n4 4 5 5',
      expectedOutput: '4',
      hidden: false
    }
  ],
  starterCode: {
    python: 'from collections import Counter\n\ndef most_frequent(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(most_frequent(nums))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int mostFrequent(int[] nums) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        System.out.println(mostFrequent(nums));\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint mostFrequent(int* nums, int numsSize) {\n    return 0;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int* nums = (int*)malloc(n * sizeof(int));\n    for(int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    printf("%d\\n", mostFrequent(nums, n));\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint mostFrequent(vector<int>& nums) {\n    return 0;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> nums(n);\n    for(int i = 0; i < n; i++) cin >> nums[i];\n    cout << mostFrequent(nums) << "\\n";\n    return 0;\n}'
  }
},{
  id: 'tkf-e3',
  title: 'Top K Frequent Words',
  difficulty: 'Easy',
  description: 'Given an array of strings `words` and an integer `k`, return the `k` most frequent words. If two words have the same frequency, return the lexicographically smaller word first.',
  constraints: [
    '1 <= words.length <= 10^5',
    '1 <= words[i].length <= 20',
    '1 <= k <= Number of Unique Words'
  ],
  examples: [
    {
      input: 'words = ["i","love","coding","i","love","java"], k = 2',
      output: '["i","love"]',
      explanation: '"i" and "love" both appear twice. Lexicographically "i" comes before "love".'
    },
    {
      input: 'words = ["apple","banana","apple"], k = 1',
      output: '["apple"]',
      explanation: '"apple" appears twice.'
    }
  ],
  testCases: [
    {
      input: '6\ni love coding i love java\n2',
      expectedOutput: 'i love',
      hidden: false
    },
    {
      input: '3\napple banana apple\n1',
      expectedOutput: 'apple',
      hidden: false
    }
  ],
  starterCode: {
    python: 'from collections import Counter\nimport heapq\n\ndef top_k_frequent_words(words, k):\n    pass\n\nn = int(input())\nwords = input().split()\nk = int(input())\nresult = top_k_frequent_words(words, k)\nprint(*result)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<String> topKFrequentWords(String[] words, int k) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        String[] words = new String[n];\n        for(int i = 0; i < n; i++) words[i] = sc.next();\n        int k = sc.nextInt();\n        List<String> result = topKFrequentWords(words, k);\n        for(String word : result) System.out.print(word + " ");\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nchar** topKFrequentWords(char words[][21], int wordsSize, int k, int* returnSize) {\n    *returnSize = 0;\n    return NULL;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    char words[n][21];\n    for(int i = 0; i < n; i++) scanf("%20s", words[i]);\n    int k;\n    scanf("%d", &k);\n    int returnSize;\n    char** result = topKFrequentWords(words, n, k, &returnSize);\n    for(int i = 0; i < returnSize; i++) printf("%s ", result[i]);\n    free(result);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nvector<string> topKFrequentWords(vector<string>& words, int k) {\n    return {};\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<string> words(n);\n    for(int i = 0; i < n; i++) cin >> words[i];\n    int k;\n    cin >> k;\n    vector<string> result = topKFrequentWords(words, k);\n    for(string word : result) cout << word << " ";\n    return 0;\n}'
  }
},{
  id: 'tkf-e4',
  title: 'Sort Characters by Frequency',
  difficulty: 'Easy',
  description: 'Given a string `s`, sort its characters in decreasing order based on their frequency. If two characters have the same frequency, return them in lexicographical order.',
  constraints: [
    '1 <= s.length <= 10^5',
    's contains only English letters and digits'
  ],
  examples: [
    {
      input: 's = "tree"',
      output: 'eert',
      explanation: 'Character \'e\' appears twice, while \'r\' and \'t\' appear once.'
    },
    {
      input: 's = "cccaaa"',
      output: 'aaaccc',
      explanation: 'Both characters appear three times. Lexicographically smaller character comes first.'
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
      expectedOutput: 'aaaccc',
      hidden: false
    }
  ],
  starterCode: {
    python: 'from collections import Counter\n\ndef frequency_sort(s):\n    pass\n\ns = input().strip()\nprint(frequency_sort(s))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static String frequencySort(String s) {\n        return "";\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        System.out.println(frequencySort(s));\n    }\n}',
    c: '#include <stdio.h>\n#include <string.h>\n\nvoid frequencySort(char* s, char* result) {\n}\n\nint main() {\n    char s[100001], result[100001];\n    scanf("%s", s);\n    frequencySort(s, result);\n    printf("%s\\n", result);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nstring frequencySort(string s) {\n    return "";\n}\n\nint main() {\n    string s;\n    cin >> s;\n    cout << frequencySort(s) << "\\n";\n    return 0;\n}'
  }
},{
  id: 'tkf-e5',
  title: 'K Most Frequent Numbers',
  difficulty: 'Easy',
  description: 'Given an integer array `nums` and an integer `k`, return the `k` most frequent numbers in decreasing order of frequency. If two numbers have the same frequency, return the smaller number first.',
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
    '1 <= k <= Number of Unique Elements'
  ],
  examples: [
    {
      input: 'nums = [5,2,5,3,5,2,4], k = 2',
      output: '[5,2]',
      explanation: '5 appears 3 times and 2 appears 2 times.'
    },
    {
      input: 'nums = [1,1,2,2,3], k = 2',
      output: '[1,2]',
      explanation: '1 and 2 both appear twice. Return the smaller number first.'
    }
  ],
  testCases: [
    {
      input: '7\n5 2 5 3 5 2 4\n2',
      expectedOutput: '5 2',
      hidden: false
    },
    {
      input: '5\n1 1 2 2 3\n2',
      expectedOutput: '1 2',
      hidden: false
    }
  ],
  starterCode: {
    python: 'from collections import Counter\nimport heapq\n\ndef k_most_frequent(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nresult = k_most_frequent(nums, k)\nprint(*result)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Integer> kMostFrequent(int[] nums, int k) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        int k = sc.nextInt();\n        List<Integer> result = kMostFrequent(nums, k);\n        for(int num : result) System.out.print(num + " ");\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint* kMostFrequent(int* nums, int numsSize, int k, int* returnSize) {\n    *returnSize = 0;\n    return NULL;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int* nums = (int*)malloc(n * sizeof(int));\n    for(int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    int k;\n    scanf("%d", &k);\n    int returnSize;\n    int* result = kMostFrequent(nums, n, k, &returnSize);\n    for(int i = 0; i < returnSize; i++) printf("%d ", result[i]);\n    free(nums);\n    free(result);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> kMostFrequent(vector<int>& nums, int k) {\n    return {};\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> nums(n);\n    for(int i = 0; i < n; i++) cin >> nums[i];\n    int k;\n    cin >> k;\n    vector<int> result = kMostFrequent(nums, k);\n    for(int num : result) cout << num << " ";\n    return 0;\n}'
  }
},{
  id: 'tkf-m1',
  title: 'Top K Frequent Elements using Min Heap',
  difficulty: 'Medium',
  description: 'Given an integer array `nums` and an integer `k`, return the `k` most frequent elements using a Min Heap. Your solution should have a time complexity better than O(n log n). You may return the answer in any order.',
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
    '1 <= k <= Number of Unique Elements'
  ],
  examples: [
    {
      input: 'nums = [1,1,1,2,2,3], k = 2',
      output: '[1,2]',
      explanation: '1 appears 3 times and 2 appears 2 times.'
    },
    {
      input: 'nums = [4,4,4,5,5,6], k = 1',
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
      input: '6\n4 4 4 5 5 6\n1',
      expectedOutput: '4',
      hidden: false
    }
  ],
  starterCode: {
    python: 'from collections import Counter\nimport heapq\n\ndef top_k_frequent(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nresult = top_k_frequent(nums, k)\nprint(*result)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Integer> topKFrequent(int[] nums, int k) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        int k = sc.nextInt();\n        List<Integer> result = topKFrequent(nums, k);\n        for(int num : result) System.out.print(num + " ");\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint* topKFrequent(int* nums, int numsSize, int k, int* returnSize) {\n    *returnSize = 0;\n    return NULL;\n}\n\nint main() {\n    int n;\n    scanf("%d",&n);\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int k;\n    scanf("%d",&k);\n    int returnSize;\n    int* result=topKFrequent(nums,n,k,&returnSize);\n    for(int i=0;i<returnSize;i++) printf("%d ",result[i]);\n    free(nums);\n    free(result);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> topKFrequent(vector<int>& nums,int k){\n    return {};\n}\n\nint main(){\n    int n;\n    cin>>n;\n    vector<int> nums(n);\n    for(int i=0;i<n;i++) cin>>nums[i];\n    int k;\n    cin>>k;\n    vector<int> result=topKFrequent(nums,k);\n    for(int x:result) cout<<x<<" ";\n    return 0;\n}'
  }
},{
  id: 'tkf-m2',
  title: 'K Closest Points to Origin',
  difficulty: 'Medium',
  description: 'Given an array of points where `points[i] = [xi, yi]` and an integer `k`, return the `k` closest points to the origin `(0, 0)`. The answer may be returned in any order.',
  constraints: [
    '1 <= k <= points.length <= 10^4',
    '-10^4 <= xi, yi <= 10^4'
  ],
  examples: [
    {
      input: 'points = [[1,3],[-2,2]], k = 1',
      output: '[[-2,2]]',
      explanation: 'The distance of (-2,2) from the origin is smaller.'
    },
    {
      input: 'points = [[3,3],[5,-1],[-2,4]], k = 2',
      output: '[[3,3],[-2,4]]',
      explanation: 'These are the two closest points to the origin.'
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
    python: 'import heapq\n\ndef k_closest(points, k):\n    pass\n\nn = int(input())\npoints = [list(map(int, input().split())) for _ in range(n)]\nk = int(input())\nresult = k_closest(points, k)\nfor x, y in result:\n    print(x, y)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<int[]> kClosest(int[][] points, int k) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] points = new int[n][2];\n        for(int i = 0; i < n; i++) {\n            points[i][0] = sc.nextInt();\n            points[i][1] = sc.nextInt();\n        }\n        int k = sc.nextInt();\n        List<int[]> result = kClosest(points, k);\n        for(int[] p : result) System.out.println(p[0] + " " + p[1]);\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct {\n    int x;\n    int y;\n} Point;\n\nPoint* kClosest(Point* points, int pointsSize, int k, int* returnSize) {\n    *returnSize = 0;\n    return NULL;\n}\n\nint main() {\n    int n;\n    scanf("%d",&n);\n    Point* points=(Point*)malloc(n*sizeof(Point));\n    for(int i=0;i<n;i++) scanf("%d %d",&points[i].x,&points[i].y);\n    int k;\n    scanf("%d",&k);\n    int returnSize;\n    Point* result=kClosest(points,n,k,&returnSize);\n    for(int i=0;i<returnSize;i++) printf("%d %d\\n",result[i].x,result[i].y);\n    free(points);\n    free(result);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<vector<int>> kClosest(vector<vector<int>>& points,int k){\n    return {};\n}\n\nint main(){\n    int n;\n    cin>>n;\n    vector<vector<int>> points(n,vector<int>(2));\n    for(int i=0;i<n;i++) cin>>points[i][0]>>points[i][1];\n    int k;\n    cin>>k;\n    vector<vector<int>> result=kClosest(points,k);\n    for(auto &p:result) cout<<p[0]<<" "<<p[1]<<"\\n";\n    return 0;\n}'
  }
},{
  id: 'tkf-m3',
  title: 'Find K Closest Elements',
  difficulty: 'Medium',
  description: 'Given a sorted integer array `arr`, two integers `k` and `x`, return the `k` closest integers to `x` in ascending order. If there is a tie, the smaller element is preferred.',
  constraints: [
    '1 <= k <= arr.length <= 10^4',
    '-10^4 <= arr[i], x <= 10^4'
  ],
  examples: [
    {
      input: 'arr = [1,2,3,4,5], k = 4, x = 3',
      output: '[1,2,3,4]',
      explanation: 'The four closest elements to 3 are 1, 2, 3 and 4.'
    },
    {
      input: 'arr = [1,2,3,4,5], k = 4, x = -1',
      output: '[1,2,3,4]',
      explanation: 'The closest four elements to -1 are the first four elements.'
    }
  ],
  testCases: [
    {
      input: '5\n1 2 3 4 5\n4\n3',
      expectedOutput: '1 2 3 4',
      hidden: false
    },
    {
      input: '5\n1 2 3 4 5\n4\n-1',
      expectedOutput: '1 2 3 4',
      hidden: false
    }
  ],
  starterCode: {
    python: 'import heapq\n\ndef find_closest_elements(arr, k, x):\n    pass\n\nn = int(input())\narr = list(map(int, input().split()))\nk = int(input())\nx = int(input())\nresult = find_closest_elements(arr, k, x)\nprint(*result)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Integer> findClosestElements(int[] arr, int k, int x) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for(int i = 0; i < n; i++) arr[i] = sc.nextInt();\n        int k = sc.nextInt();\n        int x = sc.nextInt();\n        List<Integer> result = findClosestElements(arr, k, x);\n        for(int num : result) System.out.print(num + " ");\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint* findClosestElements(int* arr, int arrSize, int k, int x, int* returnSize) {\n    *returnSize = 0;\n    return NULL;\n}\n\nint main() {\n    int n;\n    scanf("%d",&n);\n    int* arr=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&arr[i]);\n    int k,x;\n    scanf("%d%d",&k,&x);\n    int returnSize;\n    int* result=findClosestElements(arr,n,k,x,&returnSize);\n    for(int i=0;i<returnSize;i++) printf("%d ",result[i]);\n    free(arr);\n    free(result);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> findClosestElements(vector<int>& arr,int k,int x){\n    return {};\n}\n\nint main(){\n    int n;\n    cin>>n;\n    vector<int> arr(n);\n    for(int i=0;i<n;i++) cin>>arr[i];\n    int k,x;\n    cin>>k>>x;\n    vector<int> result=findClosestElements(arr,k,x);\n    for(int num:result) cout<<num<<" ";\n    return 0;\n}'
  }
},{
  id: 'tkf-m4',
  title: 'Reorganize String',
  difficulty: 'Medium',
  description: 'Given a string `s`, rearrange its characters so that no two adjacent characters are the same. If it is not possible, return `-1`.',
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of lowercase English letters'
  ],
  examples: [
    {
      input: 's = "aab"',
      output: 'aba',
      explanation: 'No two adjacent characters are the same.'
    },
    {
      input: 's = "aaab"',
      output: '-1',
      explanation: 'It is impossible to rearrange the characters.'
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
    python: 'import heapq\nfrom collections import Counter\n\ndef reorganize_string(s):\n    pass\n\ns = input().strip()\nprint(reorganize_string(s))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static String reorganizeString(String s) {\n        return "";\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        System.out.println(reorganizeString(s));\n    }\n}',
    c: '#include <stdio.h>\n#include <string.h>\n\nvoid reorganizeString(char* s, char* result) {\n}\n\nint main() {\n    char s[100001], result[100001];\n    scanf("%s", s);\n    reorganizeString(s, result);\n    printf("%s\\n", result);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nstring reorganizeString(string s){\n    return "";\n}\n\nint main(){\n    string s;\n    cin>>s;\n    cout<<reorganizeString(s)<<"\\n";\n    return 0;\n}'
  }
},{
  id: 'tkf-m5',
  title: 'Frequency Sort Array',
  difficulty: 'Medium',
  description: 'Given an integer array `nums`, sort the array in increasing order of frequency. If two elements have the same frequency, sort them in decreasing order of their value.',
  constraints: [
    '1 <= nums.length <= 10^5',
    '-100 <= nums[i] <= 100'
  ],
  examples: [
    {
      input: 'nums = [1,1,2,2,2,3]',
      output: '[3,1,1,2,2,2]',
      explanation: '3 appears once, 1 appears twice, and 2 appears three times.'
    },
    {
      input: 'nums = [2,3,1,3,2]',
      output: '[1,3,3,2,2]',
      explanation: '1 appears once. 2 and 3 appear twice, so the larger value comes first.'
    }
  ],
  testCases: [
    {
      input: '6\n1 1 2 2 2 3',
      expectedOutput: '3 1 1 2 2 2',
      hidden: false
    },
    {
      input: '5\n2 3 1 3 2',
      expectedOutput: '1 3 3 2 2',
      hidden: false
    }
  ],
  starterCode: {
    python: 'from collections import Counter\n\ndef frequency_sort(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nresult = frequency_sort(nums)\nprint(*result)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Integer> frequencySort(int[] nums) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        List<Integer> result = frequencySort(nums);\n        for(int num : result) System.out.print(num + " ");\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint* frequencySort(int* nums, int numsSize) {\n    return NULL;\n}\n\nint main() {\n    int n;\n    scanf("%d",&n);\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int* result=frequencySort(nums,n);\n    for(int i=0;i<n;i++) printf("%d ",result[i]);\n    free(nums);\n    free(result);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> frequencySort(vector<int>& nums){\n    return {};\n}\n\nint main(){\n    int n;\n    cin>>n;\n    vector<int> nums(n);\n    for(int i=0;i<n;i++) cin>>nums[i];\n    vector<int> result=frequencySort(nums);\n    for(int num:result) cout<<num<<" ";\n    return 0;\n}'
  }
},{
  id: 'tkf-h1',
  title: 'Find Median from Data Stream',
  difficulty: 'Hard',
  description: 'Design a data structure that supports adding integers from a data stream and finding the median of all inserted elements. Output the median after all insertions.',
  constraints: [
    '1 <= n <= 10^5',
    '-10^5 <= num <= 10^5'
  ],
  examples: [
    {
      input: 'nums = [1,2,3]',
      output: '2.0',
      explanation: 'After inserting all elements, the sorted order is [1,2,3]. The median is 2.'
    },
    {
      input: 'nums = [1,2]',
      output: '1.5',
      explanation: 'The sorted order is [1,2]. The median is (1+2)/2.'
    }
  ],
  testCases: [
    {
      input: '3\n1 2 3',
      expectedOutput: '2.0',
      hidden: false
    },
    {
      input: '2\n1 2',
      expectedOutput: '1.5',
      hidden: false
    }
  ],
  starterCode: {
    python: 'import heapq\n\nclass MedianFinder:\n    def __init__(self):\n        pass\n    def add_num(self, num):\n        pass\n    def find_median(self):\n        pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nmf = MedianFinder()\nfor num in nums:\n    mf.add_num(num)\nprint(mf.find_median())',
    java: 'import java.util.*;\n\npublic class Solution {\n    static class MedianFinder {\n        public void addNum(int num) {}\n        public double findMedian() { return 0.0; }\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        MedianFinder mf = new MedianFinder();\n        for(int i = 0; i < n; i++) mf.addNum(sc.nextInt());\n        System.out.println(mf.findMedian());\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct {\n} MedianFinder;\n\nvoid addNum(MedianFinder* obj, int num) {\n}\n\ndouble findMedian(MedianFinder* obj) {\n    return 0.0;\n}\n\nint main() {\n    int n;\n    scanf("%d",&n);\n    MedianFinder obj;\n    for(int i=0;i<n;i++){\n        int num;\n        scanf("%d",&num);\n        addNum(&obj,num);\n    }\n    printf("%.1f\\n",findMedian(&obj));\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <queue>\nusing namespace std;\n\nclass MedianFinder{\npublic:\n    void addNum(int num){}\n    double findMedian(){return 0.0;}\n};\n\nint main(){\n    int n;\n    cin>>n;\n    MedianFinder mf;\n    for(int i=0;i<n;i++){\n        int num;\n        cin>>num;\n        mf.addNum(num);\n    }\n    cout<<mf.findMedian();\n    return 0;\n}'
  }
},{
  id: 'tkf-h2',
  title: 'Sliding Window Median',
  difficulty: 'Hard',
  description: 'Given an integer array `nums` and an integer `k`, there is a sliding window of size `k` moving from left to right. Return the median of each sliding window.',
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= k <= nums.length',
    '-10^5 <= nums[i] <= 10^5'
  ],
  examples: [
    {
      input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3',
      output: '[1,-1,-1,3,5,6]',
      explanation: 'The median is calculated for every window of size 3.'
    },
    {
      input: 'nums = [1,2], k = 1',
      output: '[1,2]',
      explanation: 'Each window contains one element, so the median is the element itself.'
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
    python: 'import heapq\n\ndef median_sliding_window(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nresult = median_sliding_window(nums, k)\nprint(*result)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Double> medianSlidingWindow(int[] nums, int k) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        int k = sc.nextInt();\n        List<Double> result = medianSlidingWindow(nums, k);\n        for(double median : result) System.out.print(median + " ");\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\ndouble* medianSlidingWindow(int* nums, int numsSize, int k, int* returnSize) {\n    *returnSize = 0;\n    return NULL;\n}\n\nint main() {\n    int n;\n    scanf("%d",&n);\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int k;\n    scanf("%d",&k);\n    int returnSize;\n    double* result=medianSlidingWindow(nums,n,k,&returnSize);\n    for(int i=0;i<returnSize;i++) printf("%.1f ",result[i]);\n    free(nums);\n    free(result);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<double> medianSlidingWindow(vector<int>& nums,int k){\n    return {};\n}\n\nint main(){\n    int n;\n    cin>>n;\n    vector<int> nums(n);\n    for(int i=0;i<n;i++) cin>>nums[i];\n    int k;\n    cin>>k;\n    vector<double> result=medianSlidingWindow(nums,k);\n    for(double median:result) cout<<median<<" ";\n    return 0;\n}'
  }
},{
  id: 'tkf-h3',
  title: 'Merge K Sorted Lists',
  difficulty: 'Hard',
  description: 'Given `k` sorted arrays, merge them into a single sorted array. Use a Min Heap (Priority Queue) to efficiently merge all the arrays.',
  constraints: [
    '1 <= k <= 100',
    '0 <= Total Number of Elements <= 10^5',
    '-10^5 <= Element Value <= 10^5'
  ],
  examples: [
    {
      input: 'k = 3\n[1 4 5]\n[1 3 4]\n[2 6]',
      output: '1 1 2 3 4 4 5 6',
      explanation: 'All three sorted arrays are merged into one sorted array.'
    },
    {
      input: 'k = 2\n[1 2]\n[3 4]',
      output: '1 2 3 4',
      explanation: 'The merged array remains sorted.'
    }
  ],
  testCases: [
    {
      input: '3\n3\n1 4 5\n3\n1 3 4\n2\n2 6',
      expectedOutput: '1 1 2 3 4 4 5 6',
      hidden: false
    },
    {
      input: '2\n2\n1 2\n2\n3 4',
      expectedOutput: '1 2 3 4',
      hidden: false
    }
  ],
  starterCode: {
    python: 'import heapq\n\ndef merge_k_sorted_arrays(arrays):\n    pass\n\nk=int(input())\narrays=[]\nfor _ in range(k):\n    n=int(input())\n    arrays.append(list(map(int,input().split())))\nresult=merge_k_sorted_arrays(arrays)\nprint(*result)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Integer> mergeKSortedArrays(List<int[]> arrays){\n        return new ArrayList<>();\n    }\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        int k=sc.nextInt();\n        List<int[]> arrays=new ArrayList<>();\n        for(int i=0;i<k;i++){\n            int n=sc.nextInt();\n            int[] arr=new int[n];\n            for(int j=0;j<n;j++) arr[j]=sc.nextInt();\n            arrays.add(arr);\n        }\n        List<Integer> result=mergeKSortedArrays(arrays);\n        for(int num:result) System.out.print(num+\" \");\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint* mergeKSortedArrays(int** arrays,int* sizes,int k,int* returnSize){\n    *returnSize=0;\n    return NULL;\n}\n\nint main(){\n    int k;\n    scanf(\"%d\",&k);\n    int** arrays=(int**)malloc(k*sizeof(int*));\n    int* sizes=(int*)malloc(k*sizeof(int));\n    for(int i=0;i<k;i++){\n        scanf(\"%d\",&sizes[i]);\n        arrays[i]=(int*)malloc(sizes[i]*sizeof(int));\n        for(int j=0;j<sizes[i];j++) scanf(\"%d\",&arrays[i][j]);\n    }\n    int returnSize;\n    int* result=mergeKSortedArrays(arrays,sizes,k,&returnSize);\n    for(int i=0;i<returnSize;i++) printf(\"%d \",result[i]);\n    free(result);\n    for(int i=0;i<k;i++) free(arrays[i]);\n    free(arrays);\n    free(sizes);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> mergeKSortedArrays(vector<vector<int>>& arrays){\n    return {};\n}\n\nint main(){\n    int k;\n    cin>>k;\n    vector<vector<int>> arrays;\n    for(int i=0;i<k;i++){\n        int n;\n        cin>>n;\n        vector<int> arr(n);\n        for(int j=0;j<n;j++) cin>>arr[j];\n        arrays.push_back(arr);\n    }\n    vector<int> result=mergeKSortedArrays(arrays);\n    for(int num:result) cout<<num<<\" \";\n    return 0;\n}'
  }
},{
  id: 'tkf-h4',
  title: 'Smallest Range Covering K Sorted Lists',
  difficulty: 'Hard',
  description: 'You are given `k` sorted arrays. Find the smallest range `[a, b]` such that at least one number from each array lies within the range. If multiple ranges have the same length, return the one with the smaller starting value.',
  constraints: [
    '1 <= k <= 100',
    '1 <= Total Number of Elements <= 10^5',
    '-10^5 <= Element Value <= 10^5'
  ],
  examples: [
    {
      input: '[[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]',
      output: '20 24',
      explanation: 'The smallest range covering at least one element from every list is [20,24].'
    },
    {
      input: '[[1,2,3],[1,2,3],[1,2,3]]',
      output: '1 1',
      explanation: 'The value 1 appears in every list.'
    }
  ],
  testCases: [
    {
      input: '3\n5\n4 10 15 24 26\n4\n0 9 12 20\n4\n5 18 22 30',
      expectedOutput: '20 24',
      hidden: false
    },
    {
      input: '3\n3\n1 2 3\n3\n1 2 3\n3\n1 2 3',
      expectedOutput: '1 1',
      hidden: false
    }
  ],
  starterCode: {
    python: 'import heapq\n\ndef smallest_range(nums):\n    pass\n\nk=int(input())\nnums=[]\nfor _ in range(k):\n    n=int(input())\n    nums.append(list(map(int,input().split())))\nleft,right=smallest_range(nums)\nprint(left,right)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int[] smallestRange(List<int[]> nums){\n        return new int[2];\n    }\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        int k=sc.nextInt();\n        List<int[]> nums=new ArrayList<>();\n        for(int i=0;i<k;i++){\n            int n=sc.nextInt();\n            int[] arr=new int[n];\n            for(int j=0;j<n;j++) arr[j]=sc.nextInt();\n            nums.add(arr);\n        }\n        int[] ans=smallestRange(nums);\n        System.out.println(ans[0]+\" \"+ans[1]);\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint* smallestRange(int** nums,int* sizes,int k){\n    return NULL;\n}\n\nint main(){\n    int k;\n    scanf(\"%d\",&k);\n    int** nums=(int**)malloc(k*sizeof(int*));\n    int* sizes=(int*)malloc(k*sizeof(int));\n    for(int i=0;i<k;i++){\n        scanf(\"%d\",&sizes[i]);\n        nums[i]=(int*)malloc(sizes[i]*sizeof(int));\n        for(int j=0;j<sizes[i];j++) scanf(\"%d\",&nums[i][j]);\n    }\n    int* ans=smallestRange(nums,sizes,k);\n    printf(\"%d %d\\n\",ans[0],ans[1]);\n    free(ans);\n    for(int i=0;i<k;i++) free(nums[i]);\n    free(nums);\n    free(sizes);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> smallestRange(vector<vector<int>>& nums){\n    return {};\n}\n\nint main(){\n    int k;\n    cin>>k;\n    vector<vector<int>> nums;\n    for(int i=0;i<k;i++){\n        int n;\n        cin>>n;\n        vector<int> arr(n);\n        for(int j=0;j<n;j++) cin>>arr[j];\n        nums.push_back(arr);\n    }\n    vector<int> ans=smallestRange(nums);\n    cout<<ans[0]<<\" \"<<ans[1];\n    return 0;\n}'
  }
},{
  id: 'tkf-h5',
  title: 'Top K Frequent Elements II (Streaming)',
  difficulty: 'Hard',
  description: 'You are given a stream of integers and an integer `k`. After processing all the elements, return the `k` most frequent elements. If two elements have the same frequency, return the smaller element first.',
  constraints: [
    '1 <= n <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
    '1 <= k <= Number of Unique Elements'
  ],
  examples: [
    {
      input: 'nums = [5,2,5,3,5,2,4], k = 2',
      output: '[5,2]',
      explanation: '5 appears 3 times and 2 appears 2 times.'
    },
    {
      input: 'nums = [1,1,2,3,3,3,2,2], k = 2',
      output: '[2,3]',
      explanation: '2 and 3 both appear 3 times. Return the smaller element first.'
    }
  ],
  testCases: [
    {
      input: '7\n5 2 5 3 5 2 4\n2',
      expectedOutput: '5 2',
      hidden: false
    },
    {
      input: '8\n1 1 2 3 3 3 2 2\n2',
      expectedOutput: '2 3',
      hidden: false
    }
  ],
  starterCode: {
    python: 'from collections import Counter\nimport heapq\n\ndef top_k_stream(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nresult = top_k_stream(nums, k)\nprint(*result)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Integer> topKStream(int[] nums, int k) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        int k = sc.nextInt();\n        List<Integer> result = topKStream(nums, k);\n        for(int num : result) System.out.print(num + " ");\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint* topKStream(int* nums, int numsSize, int k, int* returnSize) {\n    *returnSize = 0;\n    return NULL;\n}\n\nint main() {\n    int n;\n    scanf("%d",&n);\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int k;\n    scanf("%d",&k);\n    int returnSize;\n    int* result=topKStream(nums,n,k,&returnSize);\n    for(int i=0;i<returnSize;i++) printf("%d ",result[i]);\n    free(nums);\n    free(result);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> topKStream(vector<int>& nums,int k){\n    return {};\n}\n\nint main(){\n    int n;\n    cin>>n;\n    vector<int> nums(n);\n    for(int i=0;i<n;i++) cin>>nums[i];\n    int k;\n    cin>>k;\n    vector<int> result=topKStream(nums,k);\n    for(int num:result) cout<<num<<" ";\n    return 0;\n}'
  }
}
];