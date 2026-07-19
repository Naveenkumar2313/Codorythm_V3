export const FMProblems = [
  {
  id: 'fm-e1',
  title: 'Running Median',
  difficulty: 'Easy',
  description: 'Given a stream of integers, insert each number one by one and print the median after every insertion. If the number of elements is even, the median is the average of the two middle elements. Print every median rounded to one decimal place.',
  constraints: [
    '1 <= n <= 10^3',
    '-10^5 <= stream[i] <= 10^5'
  ],
  examples: [
    {
      input: 'stream = [5, 15, 1, 3]',
      output: '5.0\n10.0\n5.0\n4.0',
      explanation: 'After each insertion the medians are: [5]=5.0, [5,15]=10.0, [1,5,15]=5.0, [1,3,5,15]=4.0.'
    },
    {
      input: 'stream = [2, 4, 6]',
      output: '2.0\n3.0\n4.0',
      explanation: 'The medians after each insertion are 2.0, 3.0 and 4.0.'
    }
  ],
  testCases: [
    {
      input: '4\n5 15 1 3',
      expectedOutput: '5.0\n10.0\n5.0\n4.0',
      hidden: false
    },
    {
      input: '3\n2 4 6',
      expectedOutput: '2.0\n3.0\n4.0',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def running_median(stream):\n    pass\n\nn = int(input())\nstream = list(map(int, input().split()))\nresult = running_median(stream)\nfor median in result:\n    print(f"{median:.1f}")',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Double> runningMedian(int[] stream) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] stream = new int[n];\n            for (int i = 0; i < n; i++) {\n                stream[i] = sc.nextInt();\n            }\n            List<Double> ans = runningMedian(stream);\n            for (double median : ans) {\n                System.out.printf(Locale.US, "%.1f%n", median);\n            }\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\ndouble* runningMedian(int* stream, int n) {\n    return NULL;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* stream = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &stream[i]) != 1) return 0;\n    }\n    double* result = runningMedian(stream, n);\n    for (int i = 0; i < n; i++) {\n        printf("%.1f\\n", result[i]);\n    }\n    free(result);\n    free(stream);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <iomanip>\n\nusing namespace std;\n\nvector<double> runningMedian(vector<int>& stream) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> stream(n);\n        for (int i = 0; i < n; i++) {\n            cin >> stream[i];\n        }\n        vector<double> ans = runningMedian(stream);\n        cout << fixed << setprecision(1);\n        for (double median : ans) {\n            cout << median << "\\n";\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'fm-e2',
  title: 'Final Median of Stream',
  difficulty: 'Easy',
  description: 'Given a stream of integers, insert all the numbers into the data stream and return the median after all insertions are complete. If the total number of elements is even, the median is the average of the two middle elements. Print the answer rounded to one decimal place.',
  constraints: [
    '1 <= n <= 10^3',
    '-10^5 <= stream[i] <= 10^5'
  ],
  examples: [
    {
      input: 'stream = [5, 15, 1, 3]',
      output: '4.0',
      explanation: 'The sorted stream is [1,3,5,15]. The median is (3 + 5) / 2 = 4.0.'
    },
    {
      input: 'stream = [2, 4, 6]',
      output: '4.0',
      explanation: 'The sorted stream is [2,4,6]. The middle element is 4.'
    }
  ],
  testCases: [
    {
      input: '4\n5 15 1 3',
      expectedOutput: '4.0',
      hidden: false
    },
    {
      input: '3\n2 4 6',
      expectedOutput: '4.0',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def find_final_median(stream):\n    pass\n\nn = int(input())\nstream = list(map(int, input().split()))\nprint(f"{find_final_median(stream):.1f}")',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static double findFinalMedian(int[] stream) {\n        return 0.0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] stream = new int[n];\n            for (int i = 0; i < n; i++) {\n                stream[i] = sc.nextInt();\n            }\n            System.out.printf(Locale.US, "%.1f%n", findFinalMedian(stream));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\ndouble findFinalMedian(int* stream, int n) {\n    return 0.0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* stream = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &stream[i]) != 1) return 0;\n    }\n    printf("%.1f\\n", findFinalMedian(stream, n));\n    free(stream);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <iomanip>\n\nusing namespace std;\n\ndouble findFinalMedian(vector<int>& stream) {\n    return 0.0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> stream(n);\n        for (int i = 0; i < n; i++) {\n            cin >> stream[i];\n        }\n        cout << fixed << setprecision(1) << findFinalMedian(stream) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'fm-e3',
  title: 'Median of Prefixes',
  difficulty: 'Easy',
  description: 'Given an array of integers, consider every prefix of the array starting from the first element. For each prefix, find and print its median. If the prefix contains an even number of elements, the median is the average of the two middle elements. Print every median rounded to one decimal place.',
  constraints: [
    '1 <= n <= 10^3',
    '-10^5 <= nums[i] <= 10^5'
  ],
  examples: [
    {
      input: 'nums = [8, 3, 5, 2]',
      output: '8.0\n5.5\n5.0\n4.0',
      explanation: 'The medians of prefixes [8], [8,3], [8,3,5] and [8,3,5,2] are 8.0, 5.5, 5.0 and 4.0 respectively.'
    },
    {
      input: 'nums = [1, 2, 3]',
      output: '1.0\n1.5\n2.0',
      explanation: 'The medians of prefixes [1], [1,2] and [1,2,3] are 1.0, 1.5 and 2.0.'
    }
  ],
  testCases: [
    {
      input: '4\n8 3 5 2',
      expectedOutput: '8.0\n5.5\n5.0\n4.0',
      hidden: false
    },
    {
      input: '3\n1 2 3',
      expectedOutput: '1.0\n1.5\n2.0',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def prefix_medians(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nresult = prefix_medians(nums)\nfor median in result:\n    print(f"{median:.1f}")',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Double> prefixMedians(int[] nums) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            List<Double> ans = prefixMedians(nums);\n            for (double median : ans) {\n                System.out.printf(Locale.US, "%.1f%n", median);\n            }\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\ndouble* prefixMedians(int* nums, int n) {\n    return NULL;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums[i]) != 1) return 0;\n    }\n    double* result = prefixMedians(nums, n);\n    for (int i = 0; i < n; i++) {\n        printf("%.1f\\n", result[i]);\n    }\n    free(result);\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <iomanip>\n\nusing namespace std;\n\nvector<double> prefixMedians(vector<int>& nums) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        vector<double> ans = prefixMedians(nums);\n        cout << fixed << setprecision(1);\n        for (double median : ans) {\n            cout << median << "\\n";\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'fm-e4',
  title: 'Running Median with Duplicates',
  difficulty: 'Easy',
  description: 'Given a stream of integers that may contain duplicate values, insert each number one by one and print the median after every insertion. If the number of elements is even, the median is the average of the two middle elements. Print every median rounded to one decimal place.',
  constraints: [
    '1 <= n <= 10^3',
    '-10^5 <= stream[i] <= 10^5'
  ],
  examples: [
    {
      input: 'stream = [5, 5, 3, 3, 7]',
      output: '5.0\n5.0\n5.0\n4.0\n5.0',
      explanation: 'The medians after each insertion are computed even when duplicate values are present.'
    },
    {
      input: 'stream = [2, 2, 2]',
      output: '2.0\n2.0\n2.0',
      explanation: 'All inserted values are identical, so the median always remains 2.0.'
    }
  ],
  testCases: [
    {
      input: '5\n5 5 3 3 7',
      expectedOutput: '5.0\n5.0\n5.0\n4.0\n5.0',
      hidden: false
    },
    {
      input: '3\n2 2 2',
      expectedOutput: '2.0\n2.0\n2.0',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def running_median_duplicates(stream):\n    pass\n\nn = int(input())\nstream = list(map(int, input().split()))\nresult = running_median_duplicates(stream)\nfor median in result:\n    print(f"{median:.1f}")',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Double> runningMedianDuplicates(int[] stream) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] stream = new int[n];\n            for (int i = 0; i < n; i++) {\n                stream[i] = sc.nextInt();\n            }\n            List<Double> ans = runningMedianDuplicates(stream);\n            for (double median : ans) {\n                System.out.printf(Locale.US, "%.1f%n", median);\n            }\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\ndouble* runningMedianDuplicates(int* stream, int n) {\n    return NULL;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* stream = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &stream[i]) != 1) return 0;\n    }\n    double* result = runningMedianDuplicates(stream, n);\n    for (int i = 0; i < n; i++) {\n        printf("%.1f\\n", result[i]);\n    }\n    free(result);\n    free(stream);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <iomanip>\n\nusing namespace std;\n\nvector<double> runningMedianDuplicates(vector<int>& stream) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> stream(n);\n        for (int i = 0; i < n; i++) {\n            cin >> stream[i];\n        }\n        vector<double> ans = runningMedianDuplicates(stream);\n        cout << fixed << setprecision(1);\n        for (double median : ans) {\n            cout << median << "\\n";\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'fm-e5',
  title: 'Running Median with Negative Numbers',
  difficulty: 'Easy',
  description: 'Given a stream of integers that may contain negative numbers, insert each number one by one and print the median after every insertion. If the number of elements is even, the median is the average of the two middle elements. Print every median rounded to one decimal place.',
  constraints: [
    '1 <= n <= 10^3',
    '-10^5 <= stream[i] <= 10^5'
  ],
  examples: [
    {
      input: 'stream = [-5, -2, 7, -8]',
      output: '-5.0\n-3.5\n-2.0\n-3.5',
      explanation: 'The medians after each insertion are computed correctly even when the stream contains negative values.'
    },
    {
      input: 'stream = [-1, -3, -2]',
      output: '-1.0\n-2.0\n-2.0',
      explanation: 'The sorted prefixes are [-1], [-3,-1] and [-3,-2,-1], producing medians -1.0, -2.0 and -2.0.'
    }
  ],
  testCases: [
    {
      input: '4\n-5 -2 7 -8',
      expectedOutput: '-5.0\n-3.5\n-2.0\n-3.5',
      hidden: false
    },
    {
      input: '3\n-1 -3 -2',
      expectedOutput: '-1.0\n-2.0\n-2.0',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def running_median_negative(stream):\n    pass\n\nn = int(input())\nstream = list(map(int, input().split()))\nresult = running_median_negative(stream)\nfor median in result:\n    print(f"{median:.1f}")',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Double> runningMedianNegative(int[] stream) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] stream = new int[n];\n            for (int i = 0; i < n; i++) {\n                stream[i] = sc.nextInt();\n            }\n            List<Double> ans = runningMedianNegative(stream);\n            for (double median : ans) {\n                System.out.printf(Locale.US, "%.1f%n", median);\n            }\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\ndouble* runningMedianNegative(int* stream, int n) {\n    return NULL;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* stream = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &stream[i]) != 1) return 0;\n    }\n    double* result = runningMedianNegative(stream, n);\n    for (int i = 0; i < n; i++) {\n        printf("%.1f\\n", result[i]);\n    }\n    free(result);\n    free(stream);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <iomanip>\n\nusing namespace std;\n\nvector<double> runningMedianNegative(vector<int>& stream) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> stream(n);\n        for (int i = 0; i < n; i++) {\n            cin >> stream[i];\n        }\n        vector<double> ans = runningMedianNegative(stream);\n        cout << fixed << setprecision(1);\n        for (double median : ans) {\n            cout << median << "\\n";\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'fm-m1',
  title: 'Median After Every Query',
  difficulty: 'Medium',
  description: 'You are given a sequence of queries. Each query is either `ADD x`, which inserts the integer `x` into the data stream, or `MEDIAN`, which asks for the current median of all inserted elements. For every `MEDIAN` query, print the median rounded to one decimal place. It is guaranteed that at least one element has been inserted before every `MEDIAN` query.',
  constraints: [
    '1 <= q <= 10^5',
    '-10^5 <= x <= 10^5'
  ],
  examples: [
    {
      input: 'queries = ["ADD 5", "MEDIAN", "ADD 10", "MEDIAN", "ADD 2", "MEDIAN"]',
      output: '5.0\n7.5\n5.0',
      explanation: 'The medians after each MEDIAN query are 5.0, 7.5 and 5.0.'
    },
    {
      input: 'queries = ["ADD 1", "ADD 3", "MEDIAN", "ADD 2", "MEDIAN"]',
      output: '2.0\n2.0',
      explanation: 'After inserting [1,3], median is 2.0. After inserting 2, the sorted stream becomes [1,2,3] whose median is 2.0.'
    }
  ],
  testCases: [
    {
      input: '6\nADD 5\nMEDIAN\nADD 10\nMEDIAN\nADD 2\nMEDIAN',
      expectedOutput: '5.0\n7.5\n5.0',
      hidden: false
    },
    {
      input: '5\nADD 1\nADD 3\nMEDIAN\nADD 2\nMEDIAN',
      expectedOutput: '2.0\n2.0',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def process_queries(queries):\n    pass\n\nq = int(input())\nqueries = [input().strip() for _ in range(q)]\nresult = process_queries(queries)\nfor median in result:\n    print(f"{median:.1f}")',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Double> processQueries(String[] queries) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int q = Integer.parseInt(sc.nextLine());\n            String[] queries = new String[q];\n            for (int i = 0; i < q; i++) {\n                queries[i] = sc.nextLine();\n            }\n            List<Double> ans = processQueries(queries);\n            for (double median : ans) {\n                System.out.printf(Locale.US, "%.1f%n", median);\n            }\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\ndouble* processQueries(char queries[][20], int q, int* returnSize) {\n    *returnSize = 0;\n    return NULL;\n}\n\nint main() {\n    int q;\n    if (scanf("%d", &q) != 1) return 0;\n    getchar();\n    char queries[q][20];\n    for (int i = 0; i < q; i++) {\n        fgets(queries[i], sizeof(queries[i]), stdin);\n        queries[i][strcspn(queries[i], "\\n")] = 0;\n    }\n    int returnSize;\n    double* result = processQueries(queries, q, &returnSize);\n    for (int i = 0; i < returnSize; i++) {\n        printf("%.1f\\n", result[i]);\n    }\n    free(result);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <string>\n#include <iomanip>\n\nusing namespace std;\n\nvector<double> processQueries(vector<string>& queries) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int q;\n    if (cin >> q) {\n        cin.ignore();\n        vector<string> queries(q);\n        for (int i = 0; i < q; i++) {\n            getline(cin, queries[i]);\n        }\n        vector<double> ans = processQueries(queries);\n        cout << fixed << setprecision(1);\n        for (double median : ans) {\n            cout << median << "\\n";\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'fm-m2',
  title: 'Median with Prefix Statistics',
  difficulty: 'Medium',
  description: 'Given a stream of integers, insert each number one by one. After every insertion, output the current number of elements followed by the median of all inserted elements. If the number of elements is even, the median is the average of the two middle elements. Print the median rounded to one decimal place.',
  constraints: [
    '1 <= n <= 10^5',
    '-10^5 <= stream[i] <= 10^5'
  ],
  examples: [
    {
      input: 'stream = [5, 15, 1, 3]',
      output: '1 5.0\n2 10.0\n3 5.0\n4 4.0',
      explanation: 'Each line contains the current size of the stream followed by its median.'
    },
    {
      input: 'stream = [2, 4, 6]',
      output: '1 2.0\n2 3.0\n3 4.0',
      explanation: 'After every insertion, print the stream size and its median.'
    }
  ],
  testCases: [
    {
      input: '4\n5 15 1 3',
      expectedOutput: '1 5.0\n2 10.0\n3 5.0\n4 4.0',
      hidden: false
    },
    {
      input: '3\n2 4 6',
      expectedOutput: '1 2.0\n2 3.0\n3 4.0',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def prefix_statistics(stream):\n    pass\n\nn = int(input())\nstream = list(map(int, input().split()))\nresult = prefix_statistics(stream)\nfor size, median in result:\n    print(size, f"{median:.1f}")',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<String> prefixStatistics(int[] stream) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] stream = new int[n];\n            for (int i = 0; i < n; i++) {\n                stream[i] = sc.nextInt();\n            }\n            List<String> ans = prefixStatistics(stream);\n            for (String s : ans) {\n                System.out.println(s);\n            }\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\ntypedef struct {\n    int size;\n    double median;\n} Result;\n\nResult* prefixStatistics(int* stream, int n) {\n    return NULL;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* stream = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &stream[i]) != 1) return 0;\n    }\n    Result* result = prefixStatistics(stream, n);\n    for (int i = 0; i < n; i++) {\n        printf("%d %.1f\\n", result[i].size, result[i].median);\n    }\n    free(result);\n    free(stream);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <iomanip>\n\nusing namespace std;\n\nvector<pair<int,double>> prefixStatistics(vector<int>& stream) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> stream(n);\n        for (int i = 0; i < n; i++) {\n            cin >> stream[i];\n        }\n        vector<pair<int,double>> ans = prefixStatistics(stream);\n        cout << fixed << setprecision(1);\n        for (auto &p : ans) {\n            cout << p.first << " " << p.second << "\\n";\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'fm-m3',
  title: 'Running Integer Median',
  difficulty: 'Medium',
  description: 'Given a stream of integers, insert each number one by one and print the integer median after every insertion. If the number of elements is odd, the median is the middle element. If the number of elements is even, the integer median is the floor of the average of the two middle elements.',
  constraints: [
    '1 <= n <= 10^5',
    '-10^5 <= stream[i] <= 10^5'
  ],
  examples: [
    {
      input: 'stream = [1, 2, 3, 4]',
      output: '1\n1\n2\n2',
      explanation: 'The medians are 1, floor((1+2)/2)=1, 2 and floor((2+3)/2)=2.'
    },
    {
      input: 'stream = [5, 15, 1]',
      output: '5\n10\n5',
      explanation: 'The integer medians after each insertion are 5, 10 and 5.'
    }
  ],
  testCases: [
    {
      input: '4\n1 2 3 4',
      expectedOutput: '1\n1\n2\n2',
      hidden: false
    },
    {
      input: '3\n5 15 1',
      expectedOutput: '5\n10\n5',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def running_integer_median(stream):\n    pass\n\nn = int(input())\nstream = list(map(int, input().split()))\nresult = running_integer_median(stream)\nfor median in result:\n    print(median)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Integer> runningIntegerMedian(int[] stream) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] stream = new int[n];\n            for (int i = 0; i < n; i++) {\n                stream[i] = sc.nextInt();\n            }\n            List<Integer> ans = runningIntegerMedian(stream);\n            for (int median : ans) {\n                System.out.println(median);\n            }\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint* runningIntegerMedian(int* stream, int n) {\n    return NULL;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* stream = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &stream[i]) != 1) return 0;\n    }\n    int* result = runningIntegerMedian(stream, n);\n    for (int i = 0; i < n; i++) {\n        printf("%d\\n", result[i]);\n    }\n    free(result);\n    free(stream);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nvector<int> runningIntegerMedian(vector<int>& stream) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> stream(n);\n        for (int i = 0; i < n; i++) {\n            cin >> stream[i];\n        }\n        vector<int> ans = runningIntegerMedian(stream);\n        for (int median : ans) {\n            cout << median << "\\n";\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'fm-m4',
  title: 'Median Frequency Counter',
  difficulty: 'Medium',
  description: 'Given a stream of integers, insert each number one by one. After every insertion, determine the current median and print how many times that median value appears in the data stream. If the stream has an even number of elements and the median is the average of two different values, print `0` since the median itself is not an element of the stream.',
  constraints: [
    '1 <= n <= 10^5',
    '-10^5 <= stream[i] <= 10^5'
  ],
  examples: [
    {
      input: 'stream = [2, 2, 4, 6]',
      output: '1\n2\n2\n0',
      explanation: 'The medians are 2, 2, 2 and 3. For the last prefix, 3 is not present in the stream, so the answer is 0.'
    },
    {
      input: 'stream = [5, 1, 5]',
      output: '1\n0\n2',
      explanation: 'The medians are 5, 3 and 5. The value 3 is not present, while 5 appears twice in the final stream.'
    }
  ],
  testCases: [
    {
      input: '4\n2 2 4 6',
      expectedOutput: '1\n2\n2\n0',
      hidden: false
    },
    {
      input: '3\n5 1 5',
      expectedOutput: '1\n0\n2',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def median_frequency(stream):\n    pass\n\nn = int(input())\nstream = list(map(int, input().split()))\nresult = median_frequency(stream)\nfor value in result:\n    print(value)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Integer> medianFrequency(int[] stream) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] stream = new int[n];\n            for (int i = 0; i < n; i++) {\n                stream[i] = sc.nextInt();\n            }\n            List<Integer> ans = medianFrequency(stream);\n            for (int value : ans) {\n                System.out.println(value);\n            }\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint* medianFrequency(int* stream, int n) {\n    return NULL;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* stream = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &stream[i]) != 1) return 0;\n    }\n    int* result = medianFrequency(stream, n);\n    for (int i = 0; i < n; i++) {\n        printf("%d\\n", result[i]);\n    }\n    free(result);\n    free(stream);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nvector<int> medianFrequency(vector<int>& stream) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> stream(n);\n        for (int i = 0; i < n; i++) {\n            cin >> stream[i];\n        }\n        vector<int> ans = medianFrequency(stream);\n        for (int value : ans) {\n            cout << value << "\\n"; }\n    }\n    return 0;\n}'
  }
},{
  id: 'fm-m5',
  title: 'Longest Stable Median Prefix',
  difficulty: 'Medium',
  description: 'Given a stream of integers, insert each number one by one and compute the median after every insertion. Find the length of the longest consecutive prefix segment for which the median remains unchanged. Two medians are considered equal if their values are exactly the same.',
  constraints: [
    '1 <= n <= 10^5',
    '-10^5 <= stream[i] <= 10^5'
  ],
  examples: [
    {
      input: 'stream = [5, 3, 4, 8, 9]',
      output: '3',
      explanation: 'The running medians are [5.0, 4.0, 4.0, 4.5, 5.0]. The longest consecutive segment with the same median is [4.0, 4.0], corresponding to a prefix length of 3.'
    },
    {
      input: 'stream = [2, 2, 2, 2]',
      output: '4',
      explanation: 'The running median remains 2.0 after every insertion.'
    }
  ],
  testCases: [
    {
      input: '5\n5 3 4 8 9',
      expectedOutput: '2',
      hidden: false
    },
    {
      input: '4\n2 2 2 2',
      expectedOutput: '4',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def longest_stable_median(stream):\n    pass\n\nn = int(input())\nstream = list(map(int, input().split()))\nprint(longest_stable_median(stream))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int longestStableMedian(int[] stream) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] stream = new int[n];\n            for (int i = 0; i < n; i++) {\n                stream[i] = sc.nextInt();\n            }\n            System.out.println(longestStableMedian(stream));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint longestStableMedian(int* stream, int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* stream = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &stream[i]) != 1) return 0;\n    }\n    printf("%d\\n", longestStableMedian(stream, n));\n    free(stream);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint longestStableMedian(vector<int>& stream) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> stream(n);\n        for (int i = 0; i < n; i++) {\n            cin >> stream[i];\n        }\n        cout << longestStableMedian(stream) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'fm-h1',
  title: 'Remove and Find Median',
  difficulty: 'Hard',
  description: 'You are given a sequence of queries. Each query is one of the following: `ADD x` inserts the integer `x` into the data stream, `REMOVE x` removes one occurrence of `x` from the data stream (it is guaranteed that `x` exists), and `MEDIAN` asks for the current median of the stream. If the number of elements is even, the median is the average of the two middle elements. Print the answer for every `MEDIAN` query rounded to one decimal place. It is guaranteed that the stream is non-empty whenever a `MEDIAN` query appears.',
  constraints: [
    '1 <= q <= 2 × 10^5',
    '-10^5 <= x <= 10^5'
  ],
  examples: [
    {
      input: 'queries = ["ADD 5","ADD 10","MEDIAN","REMOVE 5","MEDIAN","ADD 2","MEDIAN"]',
      output: '7.5\n10.0\n6.0',
      explanation: 'After removing 5, only 10 remains. After inserting 2, the stream becomes [2,10] whose median is 6.0.'
    },
    {
      input: 'queries = ["ADD 3","ADD 1","ADD 5","MEDIAN","REMOVE 3","MEDIAN"]',
      output: '3.0\n3.0',
      explanation: 'The medians before and after removing 3 are both equal to 3.0.'
    }
  ],
  testCases: [
    {
      input: '7\nADD 5\nADD 10\nMEDIAN\nREMOVE 5\nMEDIAN\nADD 2\nMEDIAN',
      expectedOutput: '7.5\n10.0\n6.0',
      hidden: false
    },
    {
      input: '6\nADD 3\nADD 1\nADD 5\nMEDIAN\nREMOVE 3\nMEDIAN',
      expectedOutput: '3.0\n3.0',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def process_queries(queries):\n    pass\n\nq = int(input())\nqueries = [input().strip() for _ in range(q)]\nresult = process_queries(queries)\nfor median in result:\n    print(f"{median:.1f}")',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Double> processQueries(String[] queries) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int q = Integer.parseInt(sc.nextLine());\n            String[] queries = new String[q];\n            for (int i = 0; i < q; i++) {\n                queries[i] = sc.nextLine();\n            }\n            List<Double> ans = processQueries(queries);\n            for (double median : ans) {\n                System.out.printf(Locale.US, "%.1f%n", median);\n            }\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\ndouble* processQueries(char queries[][25], int q, int* returnSize) {\n    *returnSize = 0;\n    return NULL;\n}\n\nint main() {\n    int q;\n    if (scanf("%d", &q) != 1) return 0;\n    getchar();\n    char queries[q][25];\n    for (int i = 0; i < q; i++) {\n        fgets(queries[i], sizeof(queries[i]), stdin);\n        queries[i][strcspn(queries[i], "\\n")] = 0;\n    }\n    int returnSize;\n    double* result = processQueries(queries, q, &returnSize);\n    for (int i = 0; i < returnSize; i++) {\n        printf("%.1f\\n", result[i]);\n    }\n    free(result);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <string>\n#include <iomanip>\n\nusing namespace std;\n\nvector<double> processQueries(vector<string>& queries) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int q;\n    if (cin >> q) {\n        cin.ignore();\n        vector<string> queries(q);\n        for (int i = 0; i < q; i++) {\n            getline(cin, queries[i]);\n        }\n        vector<double> ans = processQueries(queries);\n        cout << fixed << setprecision(1);\n        for (double median : ans) {\n            cout << median << "\\n";\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'fm-h2',
  title: 'Dynamic Median Queries',
  difficulty: 'Hard',
  description: 'You are given a sequence of queries. Each query is either `INSERT x`, which inserts the integer `x` into the data stream, or `GET`, which asks for the current median of all inserted elements. If the number of elements is even, the median is the average of the two middle elements. Print the answer for every `GET` query rounded to one decimal place. It is guaranteed that at least one element has been inserted before every `GET` query.',
  constraints: [
    '1 <= q <= 2 × 10^5',
    '-10^9 <= x <= 10^9'
  ],
  examples: [
    {
      input: 'queries = ["INSERT 8","INSERT 4","GET","INSERT 10","GET","INSERT 2","GET"]',
      output: '6.0\n8.0\n6.0',
      explanation: 'The medians after each GET query are 6.0, 8.0 and 6.0.'
    },
    {
      input: 'queries = ["INSERT 1","GET","INSERT 5","INSERT 3","GET"]',
      output: '1.0\n3.0',
      explanation: 'After the first insertion the median is 1.0. After inserting 5 and 3, the sorted stream becomes [1,3,5], whose median is 3.0.'
    }
  ],
  testCases: [
    {
      input: '7\nINSERT 8\nINSERT 4\nGET\nINSERT 10\nGET\nINSERT 2\nGET',
      expectedOutput: '6.0\n8.0\n6.0',
      hidden: false
    },
    {
      input: '5\nINSERT 1\nGET\nINSERT 5\nINSERT 3\nGET',
      expectedOutput: '1.0\n3.0',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def dynamic_median_queries(queries):\n    pass\n\nq = int(input())\nqueries = [input().strip() for _ in range(q)]\nresult = dynamic_median_queries(queries)\nfor median in result:\n    print(f"{median:.1f}")',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Double> dynamicMedianQueries(String[] queries) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int q = Integer.parseInt(sc.nextLine());\n            String[] queries = new String[q];\n            for (int i = 0; i < q; i++) {\n                queries[i] = sc.nextLine();\n            }\n            List<Double> ans = dynamicMedianQueries(queries);\n            for (double median : ans) {\n                System.out.printf(Locale.US, "%.1f%n", median);\n            }\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\ndouble* dynamicMedianQueries(char queries[][25], int q, int* returnSize) {\n    *returnSize = 0;\n    return NULL;\n}\n\nint main() {\n    int q;\n    if (scanf("%d", &q) != 1) return 0;\n    getchar();\n    char queries[q][25];\n    for (int i = 0; i < q; i++) {\n        fgets(queries[i], sizeof(queries[i]), stdin);\n        queries[i][strcspn(queries[i], "\\n")] = 0;\n    }\n    int returnSize;\n    double* result = dynamicMedianQueries(queries, q, &returnSize);\n    for (int i = 0; i < returnSize; i++) {\n        printf("%.1f\\n", result[i]);\n    }\n    free(result);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <string>\n#include <iomanip>\n\nusing namespace std;\n\nvector<double> dynamicMedianQueries(vector<string>& queries) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int q;\n    if (cin >> q) {\n        cin.ignore();\n        vector<string> queries(q);\n        for (int i = 0; i < q; i++) {\n            getline(cin, queries[i]);\n        }\n        vector<double> ans = dynamicMedianQueries(queries);\n        cout << fixed << setprecision(1);\n        for (double median : ans) {\n            cout << median << "\\n";\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'fm-h3',
  title: 'Median in Sliding Window',
  difficulty: 'Hard',
  description: 'Given an array of integers and a window size `k`, find the median of every contiguous subarray of size `k`. If the window size is even, the median is the average of the two middle elements. Print each median rounded to one decimal place.',
  constraints: [
    '1 <= k <= n <= 2 × 10^5',
    '-10^5 <= nums[i] <= 10^5'
  ],
  examples: [
    {
      input: 'nums = [1,3,-1,-3,5,3,6,7], k = 3',
      output: '1.0\n-1.0\n-1.0\n3.0\n5.0\n6.0',
      explanation: 'The medians of the sliding windows are [1,3,-1]=1.0, [3,-1,-3]=-1.0, [-1,-3,5]=-1.0, [-3,5,3]=3.0, [5,3,6]=5.0 and [3,6,7]=6.0.'
    },
    {
      input: 'nums = [1,2,3,4], k = 2',
      output: '1.5\n2.5\n3.5',
      explanation: 'The medians of the windows [1,2], [2,3] and [3,4] are 1.5, 2.5 and 3.5.'
    }
  ],
  testCases: [
    {
      input: '8\n1 3 -1 -3 5 3 6 7\n3',
      expectedOutput: '1.0\n-1.0\n-1.0\n3.0\n5.0\n6.0',
      hidden: false
    },
    {
      input: '4\n1 2 3 4\n2',
      expectedOutput: '1.5\n2.5\n3.5',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def median_sliding_window(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nresult = median_sliding_window(nums, k)\nfor median in result:\n    print(f"{median:.1f}")',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Double> medianSlidingWindow(int[] nums, int k) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            int k = sc.nextInt();\n            List<Double> ans = medianSlidingWindow(nums, k);\n            for (double median : ans) {\n                System.out.printf(Locale.US, "%.1f%n", median);\n            }\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\ndouble* medianSlidingWindow(int* nums, int n, int k, int* returnSize) {\n    *returnSize = 0;\n    return NULL;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums[i]) != 1) return 0;\n    }\n    int k;\n    scanf("%d", &k);\n    int returnSize;\n    double* result = medianSlidingWindow(nums, n, k, &returnSize);\n    for (int i = 0; i < returnSize; i++) {\n        printf("%.1f\\n", result[i]);\n    }\n    free(result);\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <iomanip>\n\nusing namespace std;\n\nvector<double> medianSlidingWindow(vector<int>& nums, int k) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        int k;\n        cin >> k;\n        vector<double> ans = medianSlidingWindow(nums, k);\n        cout << fixed << setprecision(1);\n        for (double median : ans) {\n            cout << median << "\\n";\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'fm-h4',
  title: 'Median After Range Updates',
  difficulty: 'Hard',
  description: 'You are given an initial array of integers followed by a series of update queries. Each query updates one element of the array by replacing its value with a new one. After every update, print the median of the entire array. If the array size is even, the median is the average of the two middle elements. Print each median rounded to one decimal place.',
  constraints: [
    '1 <= n, q <= 2 × 10^5',
    '-10^9 <= nums[i], value <= 10^9',
    '0 <= index < n'
  ],
  examples: [
    {
      input: 'nums = [1, 5, 3, 7], updates = [[1, 2], [3, 6]]',
      output: '2.5\n2.5',
      explanation: 'After the first update the array becomes [1,2,3,7]. After the second update it becomes [1,2,3,6]. The median is 2.5 in both cases.'
    },
    {
      input: 'nums = [10, 20, 30], updates = [[0, 40], [2, 5]]',
      output: '30.0\n20.0',
      explanation: 'The updated arrays are [40,20,30] and [40,20,5].'
    }
  ],
  testCases: [
    {
      input: '4\n1 5 3 7\n2\n1 2\n3 6',
      expectedOutput: '2.5\n2.5',
      hidden: false
    },
    {
      input: '3\n10 20 30\n2\n0 40\n2 5',
      expectedOutput: '30.0\n20.0',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def median_after_updates(nums, updates):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nq = int(input())\nupdates = [tuple(map(int, input().split())) for _ in range(q)]\nresult = median_after_updates(nums, updates)\nfor median in result:\n    print(f"{median:.1f}")',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Double> medianAfterUpdates(int[] nums, int[][] updates) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n            int q = sc.nextInt();\n            int[][] updates = new int[q][2];\n            for (int i = 0; i < q; i++) {\n                updates[i][0] = sc.nextInt();\n                updates[i][1] = sc.nextInt();\n            }\n            List<Double> ans = medianAfterUpdates(nums, updates);\n            for (double median : ans) {\n                System.out.printf(Locale.US, "%.1f%n", median);\n            }\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\ndouble* medianAfterUpdates(int* nums, int n, int updates[][2], int q, int* returnSize) {\n    *returnSize = 0;\n    return NULL;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    int q;\n    scanf("%d", &q);\n    int updates[q][2];\n    for (int i = 0; i < q; i++) {\n        scanf("%d %d", &updates[i][0], &updates[i][1]);\n    }\n    int returnSize;\n    double* result = medianAfterUpdates(nums, n, updates, q, &returnSize);\n    for (int i = 0; i < returnSize; i++) {\n        printf("%.1f\\n", result[i]);\n    }\n    free(result);\n    free(nums);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <iomanip>\n\nusing namespace std;\n\nvector<double> medianAfterUpdates(vector<int>& nums, vector<pair<int,int>>& updates) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) cin >> nums[i];\n        int q;\n        cin >> q;\n        vector<pair<int,int>> updates(q);\n        for (int i = 0; i < q; i++) cin >> updates[i].first >> updates[i].second;\n        vector<double> ans = medianAfterUpdates(nums, updates);\n        cout << fixed << setprecision(1);\n        for (double median : ans) {\n            cout << median << "\\n";\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'fm-h5',
  title: 'Median of Two Data Streams',
  difficulty: 'Hard',
  description: 'You are given two independent data streams. Initially both are empty. Each query inserts a number into either stream A or stream B. After every insertion, merge the contents of both streams conceptually and print the median of all elements. If the total number of elements is even, the median is the average of the two middle elements. Print each median rounded to one decimal place.',
  constraints: [
    '1 <= q <= 2 × 10^5',
    '-10^9 <= x <= 10^9',
    'Stream is either A or B'
  ],
  examples: [
    {
      input: 'queries = ["A 5","B 10","A 3","B 8"]',
      output: '5.0\n7.5\n5.0\n6.5',
      explanation: 'The merged streams after each insertion are [5], [5,10], [3,5,10] and [3,5,8,10].'
    },
    {
      input: 'queries = ["B 2","B 4","A 6"]',
      output: '2.0\n3.0\n4.0',
      explanation: 'The merged streams become [2], [2,4] and [2,4,6].'
    }
  ],
  testCases: [
    {
      input: '4\nA 5\nB 10\nA 3\nB 8',
      expectedOutput: '5.0\n7.5\n5.0\n6.5',
      hidden: false
    },
    {
      input: '3\nB 2\nB 4\nA 6',
      expectedOutput: '2.0\n3.0\n4.0',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def median_two_streams(queries):\n    pass\n\nq = int(input())\nqueries = [input().strip() for _ in range(q)]\nresult = median_two_streams(queries)\nfor median in result:\n    print(f"{median:.1f}")',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Double> medianTwoStreams(String[] queries) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int q = Integer.parseInt(sc.nextLine());\n            String[] queries = new String[q];\n            for (int i = 0; i < q; i++) {\n                queries[i] = sc.nextLine();\n            }\n            List<Double> ans = medianTwoStreams(queries);\n            for (double median : ans) {\n                System.out.printf(Locale.US, "%.1f%n", median);\n            }\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\ndouble* medianTwoStreams(char queries[][25], int q, int* returnSize) {\n    *returnSize = 0;\n    return NULL;\n}\n\nint main() {\n    int q;\n    if (scanf("%d", &q) != 1) return 0;\n    getchar();\n    char queries[q][25];\n    for (int i = 0; i < q; i++) {\n        fgets(queries[i], sizeof(queries[i]), stdin);\n        queries[i][strcspn(queries[i], "\\n")] = 0;\n    }\n    int returnSize;\n    double* result = medianTwoStreams(queries, q, &returnSize);\n    for (int i = 0; i < returnSize; i++) {\n        printf("%.1f\\n", result[i]);\n    }\n    free(result);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <string>\n#include <iomanip>\n\nusing namespace std;\n\nvector<double> medianTwoStreams(vector<string>& queries) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int q;\n    if (cin >> q) {\n        cin.ignore();\n        vector<string> queries(q);\n        for (int i = 0; i < q; i++) {\n            getline(cin, queries[i]);\n        }\n        vector<double> ans = medianTwoStreams(queries);\n        cout << fixed << setprecision(1);\n        for (double median : ans) {\n            cout << median << "\\n";\n        }\n    }\n    return 0;\n}'
  }
}
];