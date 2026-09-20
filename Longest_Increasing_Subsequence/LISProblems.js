export const LISProblems = [
{
id: 'lis-e1',
title: 'Longest Increasing Subsequence Length',
difficulty: 'Easy',
description: 'Given an array of integers, find the length of the longest strictly increasing subsequence while preserving the original order of elements.',
constraints: ['1 <= n <= 10^5','-10^9 <= nums[i] <= 10^9'],
examples: [
{input: 'nums = [10, 9, 2, 5, 3, 7, 101, 18]',output: '4',explanation: 'One longest increasing subsequence is [2, 3, 7, 101], which has length 4.'},
{input: 'nums = [0, 1, 0, 3, 2, 3]',output: '4',explanation: 'One longest increasing subsequence is [0, 1, 2, 3].'}
],
testCases: [
{input: '8\n10 9 2 5 3 7 101 18',expectedOutput: '4',hidden: false},
{input: '6\n0 1 0 3 2 3',expectedOutput: '4',hidden: false}
],
starterCode: {
python: 'from bisect import bisect_left\n\ndef lis_length(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(lis_length(nums))',
java: 'import java.util.*;\npublic class Main {\n    public static int lisLength(int[] nums) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        System.out.println(lisLength(nums));\n    }\n}',
c: '#include <stdio.h>\n#include <stdlib.h>\nint lisLength(int *nums, int n) {\n    return 0;\n}\nint main() {\n    int n;\n    scanf("%d", &n);\n    int *nums = malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    printf("%d\\n", lisLength(nums, n));\n    free(nums);\n    return 0;\n}',
cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint lisLength(vector<int>& nums) {\n    return 0;\n}\nint main() {\n    int n;\n    cin >> n;\n    vector<int> nums(n);\n    for (int &x : nums) cin >> x;\n    cout << lisLength(nums) << "\\n";\n    return 0;\n}'
}
},
{
id: 'lis-e2',
title: 'Longest Increasing Subsequence with Duplicates',
difficulty: 'Easy',
description: 'Given an array that may contain duplicate values, find the length of the longest strictly increasing subsequence. Equal values cannot be consecutive elements of the subsequence.',
constraints: ['1 <= n <= 10^5','-10^9 <= nums[i] <= 10^9'],
examples: [
{input: 'nums = [2, 2, 3, 3, 4]',output: '3',explanation: 'A valid strictly increasing subsequence is [2, 3, 4].'},
{input: 'nums = [5, 5, 5, 5]',output: '1',explanation: 'Only one value can be selected because the subsequence must be strictly increasing.'}
],
testCases: [
{input: '5\n2 2 3 3 4',expectedOutput: '3',hidden: false},
{input: '4\n5 5 5 5',expectedOutput: '1',hidden: false}
],
starterCode: {
python: 'from bisect import bisect_left\n\ndef lis_with_duplicates(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(lis_with_duplicates(nums))',
java: 'import java.util.*;\npublic class Main {\n    public static int lisWithDuplicates(int[] nums) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        System.out.println(lisWithDuplicates(nums));\n    }\n}',
c: '#include <stdio.h>\n#include <stdlib.h>\nint lisWithDuplicates(int *nums, int n) {\n    return 0;\n}\nint main() {\n    int n;\n    scanf("%d", &n);\n    int *nums = malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    printf("%d\\n", lisWithDuplicates(nums, n));\n    free(nums);\n    return 0;\n}',
cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint lisWithDuplicates(vector<int>& nums) {\n    return 0;\n}\nint main() {\n    int n;\n    cin >> n;\n    vector<int> nums(n);\n    for (int &x : nums) cin >> x;\n    cout << lisWithDuplicates(nums) << "\\n";\n    return 0;\n}'
}
},
{
id: 'lis-e3',
title: 'LIS of an Already Sorted Array',
difficulty: 'Easy',
description: 'Given an array sorted in non-decreasing order, find the length of its longest strictly increasing subsequence.',
constraints: ['1 <= n <= 10^5','-10^9 <= nums[i] <= 10^9'],
examples: [
{input: 'nums = [1, 2, 3, 4, 5]',output: '5',explanation: 'All elements form a strictly increasing subsequence.'},
{input: 'nums = [1, 1, 2, 2, 3]',output: '3',explanation: 'One valid subsequence is [1, 2, 3].'}
],
testCases: [
{input: '5\n1 2 3 4 5',expectedOutput: '5',hidden: false},
{input: '5\n1 1 2 2 3',expectedOutput: '3',hidden: false}
],
starterCode: {
python: 'from bisect import bisect_left\n\ndef sorted_lis_length(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(sorted_lis_length(nums))',
java: 'import java.util.*;\npublic class Main {\n    public static int sortedLisLength(int[] nums) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        System.out.println(sortedLisLength(nums));\n    }\n}',
c: '#include <stdio.h>\n#include <stdlib.h>\nint sortedLisLength(int *nums, int n) {\n    return 0;\n}\nint main() {\n    int n;\n    scanf("%d", &n);\n    int *nums = malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    printf("%d\\n", sortedLisLength(nums, n));\n    free(nums);\n    return 0;\n}',
cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint sortedLisLength(vector<int>& nums) {\n    return 0;\n}\nint main() {\n    int n;\n    cin >> n;\n    vector<int> nums(n);\n    for (int &x : nums) cin >> x;\n    cout << sortedLisLength(nums) << "\\n";\n    return 0;\n}'
}
},
{
id: 'lis-e4',
title: 'LIS of a Reverse Sorted Array',
difficulty: 'Easy',
description: 'Given an array sorted in strictly decreasing order, find the length of its longest strictly increasing subsequence.',
constraints: ['1 <= n <= 10^5','-10^9 <= nums[i] <= 10^9'],
examples: [
{input: 'nums = [5, 4, 3, 2, 1]',output: '1',explanation: 'No two elements can form an increasing pair, so the LIS length is 1.'},
{input: 'nums = [10, 8, 6, 4, 2]',output: '1',explanation: 'The sequence is strictly decreasing, so only one element can be selected.'}
],
testCases: [
{input: '5\n5 4 3 2 1',expectedOutput: '1',hidden: false},
{input: '5\n10 8 6 4 2',expectedOutput: '1',hidden: false}
],
starterCode: {
python: 'from bisect import bisect_left\n\ndef reverse_sorted_lis(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(reverse_sorted_lis(nums))',
java: 'import java.util.*;\npublic class Main {\n    public static int reverseSortedLIS(int[] nums) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        System.out.println(reverseSortedLIS(nums));\n    }\n}',
c: '#include <stdio.h>\n#include <stdlib.h>\nint reverseSortedLIS(int *nums, int n) {\n    return 0;\n}\nint main() {\n    int n;\n    scanf("%d", &n);\n    int *nums = malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    printf("%d\\n", reverseSortedLIS(nums, n));\n    free(nums);\n    return 0;\n}',
cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint reverseSortedLIS(vector<int>& nums) {\n    return 0;\n}\nint main() {\n    int n;\n    cin >> n;\n    vector<int> nums(n);\n    for (int &x : nums) cin >> x;\n    cout << reverseSortedLIS(nums) << "\\n";\n    return 0;\n}'
}
},
{
id: 'lis-e5',
title: 'LIS of Prefixes',
difficulty: 'Easy',
description: 'For every prefix of the given array, determine the length of the longest strictly increasing subsequence in that prefix.',
constraints: ['1 <= n <= 10^4','-10^9 <= nums[i] <= 10^9'],
examples: [
{input: 'nums = [3, 1, 2, 5]',output: '1 1 2 3',explanation: 'The LIS lengths after each prefix are 1, 1, 2 and 3.'},
{input: 'nums = [1, 2, 1, 3]',output: '1 2 2 3',explanation: 'The LIS length grows to 2 after 2 and to 3 after 3.'}
],
testCases: [
{input: '4\n3 1 2 5',expectedOutput: '1 1 2 3',hidden: false},
{input: '4\n1 2 1 3',expectedOutput: '1 2 2 3',hidden: false}
],
starterCode: {
python: 'from bisect import bisect_left\n\ndef lis_prefixes(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(*lis_prefixes(nums))',
java: 'import java.util.*;\npublic class Main {\n    public static List<Integer> lisPrefixes(int[] nums) {\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        List<Integer> ans = lisPrefixes(nums);\n        for (int i = 0; i < ans.size(); i++) {\n            if (i > 0) System.out.print(" ");\n            System.out.print(ans.get(i));\n        }\n        System.out.println();\n    }\n}',
c: '#include <stdio.h>\n#include <stdlib.h>\nint* lisPrefixes(int *nums, int n) {\n    return NULL;\n}\nint main() {\n    int n;\n    scanf("%d", &n);\n    int *nums = malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    int *ans = lisPrefixes(nums, n);\n    for (int i = 0; i < n; i++) {\n        if (i) printf(" ");\n        printf("%d", ans[i]);\n    }\n    printf("\\n");\n    free(ans);\n    free(nums);\n    return 0;\n}',
cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> lisPrefixes(vector<int>& nums) {\n    return {};\n}\nint main() {\n    int n;\n    cin >> n;\n    vector<int> nums(n);\n    for (int &x : nums) cin >> x;\n    vector<int> ans = lisPrefixes(nums);\n    for (int i = 0; i < (int)ans.size(); i++) {\n        if (i) cout << " ";\n        cout << ans[i];\n    }\n    cout << "\\n";\n    return 0;\n}'
}
},
{
id: 'lis-m1',
title: 'Reconstruct the Longest Increasing Subsequence',
difficulty: 'Medium',
description: 'Given an array of integers, find one longest strictly increasing subsequence and print its elements in their original order.',
constraints: ['1 <= n <= 10^5','-10^9 <= nums[i] <= 10^9'],
examples: [
{input: 'nums = [10, 9, 2, 5, 3, 7, 101, 18]',output: '2 3 7 18',explanation: 'The sequence [2, 3, 7, 18] is one valid LIS of length 4.'},
{input: 'nums = [0, 1, 0, 3, 2, 3]',output: '0 1 2 3',explanation: 'The sequence [0, 1, 2, 3] is one valid LIS.'}
],
testCases: [
{input: '8\n10 9 2 5 3 7 101 18',expectedOutput: '2 3 7 18',hidden: false},
{input: '6\n0 1 0 3 2 3',expectedOutput: '0 1 2 3',hidden: false}
],
starterCode: {
python: 'from bisect import bisect_left\n\ndef reconstruct_lis(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(*reconstruct_lis(nums))',
java: 'import java.util.*;\npublic class Main {\n    public static List<Integer> reconstructLIS(int[] nums) {\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        List<Integer> ans = reconstructLIS(nums);\n        for (int i = 0; i < ans.size(); i++) {\n            if (i > 0) System.out.print(" ");\n            System.out.print(ans.get(i));\n        }\n        System.out.println();\n    }\n}',
c: '#include <stdio.h>\n#include <stdlib.h>\nint* reconstructLIS(int *nums, int n, int *returnSize) {\n    *returnSize = 0;\n    return NULL;\n}\nint main() {\n    int n;\n    scanf("%d", &n);\n    int *nums = malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    int size;\n    int *ans = reconstructLIS(nums, n, &size);\n    for (int i = 0; i < size; i++) {\n        if (i) printf(" ");\n        printf("%d", ans[i]);\n    }\n    printf("\\n");\n    free(ans);\n    free(nums);\n    return 0;\n}',
cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> reconstructLIS(vector<int>& nums) {\n    return {};\n}\nint main() {\n    int n;\n    cin >> n;\n    vector<int> nums(n);\n    for (int &x : nums) cin >> x;\n    vector<int> ans = reconstructLIS(nums);\n    for (int i = 0; i < (int)ans.size(); i++) {\n        if (i) cout << " ";\n        cout << ans[i];\n    }\n    cout << "\\n";\n    return 0;\n}'
}
},
{
id: 'lis-m2',
title: 'Longest Non-Decreasing Subsequence',
difficulty: 'Medium',
description: 'Given an array of integers, find the length of the longest non-decreasing subsequence. Equal consecutive values are allowed.',
constraints: ['1 <= n <= 10^5','-10^9 <= nums[i] <= 10^9'],
examples: [
{input: 'nums = [2, 2, 2, 1, 3, 3]',output: '5',explanation: 'The subsequence [2, 2, 2, 3, 3] has length 5.'},
{input: 'nums = [0, 1, 0, 3, 2, 3]',output: '4',explanation: 'One longest non-decreasing subsequence is [0, 1, 2, 3].'}
],
testCases: [
{input: '6\n2 2 2 1 3 3',expectedOutput: '5',hidden: false},
{input: '6\n0 1 0 3 2 3',expectedOutput: '4',hidden: false}
],
starterCode: {
python: 'from bisect import bisect_right\n\ndef lnds_length(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(lnds_length(nums))',
java: 'import java.util.*;\npublic class Main {\n    public static int lndsLength(int[] nums) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        System.out.println(lndsLength(nums));\n    }\n}',
c: '#include <stdio.h>\n#include <stdlib.h>\nint lndsLength(int *nums, int n) {\n    return 0;\n}\nint main() {\n    int n;\n    scanf("%d", &n);\n    int *nums = malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    printf("%d\\n", lndsLength(nums, n));\n    free(nums);\n    return 0;\n}',
cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint lndsLength(vector<int>& nums) {\n    return 0;\n}\nint main() {\n    int n;\n    cin >> n;\n    vector<int> nums(n);\n    for (int &x : nums) cin >> x;\n    cout << lndsLength(nums) << "\\n";\n    return 0;\n}'
}
},
{
id: 'lis-m3',
title: 'LIS Ending at Every Position',
difficulty: 'Medium',
description: 'For every position in the array, find the length of the longest strictly increasing subsequence that ends exactly at that position.',
constraints: ['1 <= n <= 10^5','-10^9 <= nums[i] <= 10^9'],
examples: [
{input: 'nums = [3, 1, 2, 5]',output: '1 1 2 3',explanation: 'The LIS ending at each position has lengths 1, 1, 2 and 3.'},
{input: 'nums = [10, 9, 2, 5, 3, 7]',output: '1 1 1 2 2 3',explanation: 'The best increasing subsequence ending at each element has the listed lengths.'}
],
testCases: [
{input: '4\n3 1 2 5',expectedOutput: '1 1 2 3',hidden: false},
{input: '6\n10 9 2 5 3 7',expectedOutput: '1 1 1 2 2 3',hidden: false}
],
starterCode: {
python: 'from bisect import bisect_left\n\ndef lis_ending_at_each_position(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(*lis_ending_at_each_position(nums))',
java: 'import java.util.*;\npublic class Main {\n    public static int[] lisEndingAtEachPosition(int[] nums) {\n        return new int[nums.length];\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        int[] ans = lisEndingAtEachPosition(nums);\n        for (int i = 0; i < n; i++) {\n            if (i > 0) System.out.print(" ");\n            System.out.print(ans[i]);\n        }\n        System.out.println();\n    }\n}',
c: '#include <stdio.h>\n#include <stdlib.h>\nint* lisEndingAtEachPosition(int *nums, int n) {\n    return NULL;\n}\nint main() {\n    int n;\n    scanf("%d", &n);\n    int *nums = malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    int *ans = lisEndingAtEachPosition(nums, n);\n    for (int i = 0; i < n; i++) {\n        if (i) printf(" ");\n        printf("%d", ans[i]);\n    }\n    printf("\\n");\n    free(ans);\n    free(nums);\n    return 0;\n}',
cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> lisEndingAtEachPosition(vector<int>& nums) {\n    return vector<int>(nums.size());\n}\nint main() {\n    int n;\n    cin >> n;\n    vector<int> nums(n);\n    for (int &x : nums) cin >> x;\n    vector<int> ans = lisEndingAtEachPosition(nums);\n    for (int i = 0; i < n; i++) {\n        if (i) cout << " ";\n        cout << ans[i];\n    }\n    cout << "\\n";\n    return 0;\n}'
}
},
{
id: 'lis-m4',
title: 'Minimum Removals to Make the Array Strictly Increasing',
difficulty: 'Medium',
description: 'Given an array, remove the minimum number of elements so that the remaining elements preserve their order and form a strictly increasing sequence.',
constraints: ['1 <= n <= 10^5','-10^9 <= nums[i] <= 10^9'],
examples: [
{input: 'nums = [5, 3, 4, 8, 6, 7]',output: '2',explanation: 'Keeping [3, 4, 6, 7] gives an increasing sequence of length 4, so two elements are removed.'},
{input: 'nums = [1, 2, 3, 3, 4]',output: '1',explanation: 'Removing one duplicate 3 gives [1, 2, 3, 4].'}
],
testCases: [
{input: '6\n5 3 4 8 6 7',expectedOutput: '2',hidden: false},
{input: '5\n1 2 3 3 4',expectedOutput: '1',hidden: false}
],
starterCode: {
python: 'from bisect import bisect_left\n\ndef min_removals(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(min_removals(nums))',
java: 'import java.util.*;\npublic class Main {\n    public static int minRemovals(int[] nums) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        System.out.println(minRemovals(nums));\n    }\n}',
c: '#include <stdio.h>\n#include <stdlib.h>\nint minRemovals(int *nums, int n) {\n    return 0;\n}\nint main() {\n    int n;\n    scanf("%d", &n);\n    int *nums = malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    printf("%d\\n", minRemovals(nums, n));\n    free(nums);\n    return 0;\n}',
cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint minRemovals(vector<int>& nums) {\n    return 0;\n}\nint main() {\n    int n;\n    cin >> n;\n    vector<int> nums(n);\n    for (int &x : nums) cin >> x;\n    cout << minRemovals(nums) << "\\n";\n    return 0;\n}'
}
},
{
id: 'lis-m5',
title: 'Longest Increasing Subsequence with Negative Values',
difficulty: 'Medium',
description: 'Given an array containing positive, zero and negative values, find the length of the longest strictly increasing subsequence using an O(n log n) approach.',
constraints: ['1 <= n <= 10^5','-10^9 <= nums[i] <= 10^9'],
examples: [
{input: 'nums = [-5, -2, -8, -1, 0]',output: '4',explanation: 'One LIS is [-5, -2, -1, 0].'},
{input: 'nums = [-10, -20, -30]',output: '1',explanation: 'The sequence is decreasing, so the LIS length is 1.'}
],
testCases: [
{input: '5\n-5 -2 -8 -1 0',expectedOutput: '4',hidden: false},
{input: '3\n-10 -20 -30',expectedOutput: '1',hidden: false}
],
starterCode: {
python: 'from bisect import bisect_left\n\ndef lis_negative_values(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(lis_negative_values(nums))',
java: 'import java.util.*;\npublic class Main {\n    public static int lisNegativeValues(int[] nums) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        System.out.println(lisNegativeValues(nums));\n    }\n}',
c: '#include <stdio.h>\n#include <stdlib.h>\nint lisNegativeValues(int *nums, int n) {\n    return 0;\n}\nint main() {\n    int n;\n    scanf("%d", &n);\n    int *nums = malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    printf("%d\\n", lisNegativeValues(nums, n));\n    free(nums);\n    return 0;\n}',
cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint lisNegativeValues(vector<int>& nums) {\n    return 0;\n}\nint main() {\n    int n;\n    cin >> n;\n    vector<int> nums(n);\n    for (int &x : nums) cin >> x;\n    cout << lisNegativeValues(nums) << "\\n";\n    return 0;\n}'
}
},
{
id: 'lis-h1',
title: 'Count the Number of Longest Increasing Subsequences',
difficulty: 'Hard',
description: 'Given an array of integers, return the number of distinct index-based longest strictly increasing subsequences. Use an efficient approach suitable for large input.',
constraints: ['1 <= n <= 10^5','-10^9 <= nums[i] <= 10^9'],
examples: [
{input: 'nums = [1, 3, 5, 4, 7]',output: '2',explanation: 'The two LIS are [1, 3, 5, 7] and [1, 3, 4, 7].'},
{input: 'nums = [2, 2, 2, 2, 2]',output: '5',explanation: 'The LIS length is 1 and each of the five positions forms a distinct LIS.'}
],
testCases: [
{input: '5\n1 3 5 4 7',expectedOutput: '2',hidden: false},
{input: '5\n2 2 2 2 2',expectedOutput: '5',hidden: false}
],
starterCode: {
python: 'def count_lis(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(count_lis(nums))',
java: 'import java.util.*;\npublic class Main {\n    public static long countLIS(int[] nums) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        System.out.println(countLIS(nums));\n    }\n}',
c: '#include <stdio.h>\n#include <stdlib.h>\nlong long countLIS(int *nums, int n) {\n    return 0;\n}\nint main() {\n    int n;\n    scanf("%d", &n);\n    int *nums = malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    printf("%lld\\n", countLIS(nums, n));\n    free(nums);\n    return 0;\n}',
cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nlong long countLIS(vector<int>& nums) {\n    return 0;\n}\nint main() {\n    int n;\n    cin >> n;\n    vector<int> nums(n);\n    for (int &x : nums) cin >> x;\n    cout << countLIS(nums) << "\\n";\n    return 0;\n}'
}
},
{
id: 'lis-h2',
title: 'Maximum Sum Increasing Subsequence',
difficulty: 'Hard',
description: 'Given an array of integers, find the maximum possible sum of elements in a strictly increasing subsequence.',
constraints: ['1 <= n <= 10^5','1 <= nums[i] <= 10^9'],
examples: [
{input: 'nums = [1, 101, 2, 3, 100, 4, 5]',output: '106',explanation: 'The maximum sum increasing subsequence is [1, 2, 3, 100] with sum 106.'},
{input: 'nums = [3, 4, 5, 10]',output: '22',explanation: 'All elements form an increasing subsequence with sum 22.'}
],
testCases: [
{input: '7\n1 101 2 3 100 4 5',expectedOutput: '106',hidden: false},
{input: '4\n3 4 5 10',expectedOutput: '22',hidden: false}
],
starterCode: {
python: 'def maximum_sum_increasing_subsequence(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(maximum_sum_increasing_subsequence(nums))',
java: 'import java.util.*;\npublic class Main {\n    public static long maximumSumIncreasingSubsequence(int[] nums) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        System.out.println(maximumSumIncreasingSubsequence(nums));\n    }\n}',
c: '#include <stdio.h>\n#include <stdlib.h>\nlong long maximumSumIncreasingSubsequence(int *nums, int n) {\n    return 0;\n}\nint main() {\n    int n;\n    scanf("%d", &n);\n    int *nums = malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    printf("%lld\\n", maximumSumIncreasingSubsequence(nums, n));\n    free(nums);\n    return 0;\n}',
cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nlong long maximumSumIncreasingSubsequence(vector<int>& nums) {\n    return 0;\n}\nint main() {\n    int n;\n    cin >> n;\n    vector<int> nums(n);\n    for (int &x : nums) cin >> x;\n    cout << maximumSumIncreasingSubsequence(nums) << "\\n";\n    return 0;\n}'
}
},
{
id: 'lis-h3',
title: 'Minimum Number of Non-Increasing Subsequences',
difficulty: 'Hard',
description: 'Partition the array into the minimum number of subsequences such that every subsequence is non-increasing and the original order of elements is preserved within each subsequence.',
constraints: ['1 <= n <= 10^5','-10^9 <= nums[i] <= 10^9'],
examples: [
{input: 'nums = [5, 1, 4, 2, 3]',output: '3',explanation: 'The array can be partitioned into [5,4,3], [1] and [2].'},
{input: 'nums = [5, 4, 3, 2, 1]',output: '1',explanation: 'The entire array is already non-increasing.'}
],
testCases: [
{input: '5\n5 1 4 2 3',expectedOutput: '3',hidden: false},
{input: '5\n5 4 3 2 1',expectedOutput: '1',hidden: false}
],
starterCode: {
python: 'def min_non_increasing_subsequences(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(min_non_increasing_subsequences(nums))',
java: 'import java.util.*;\npublic class Main {\n    public static int minNonIncreasingSubsequences(int[] nums) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        System.out.println(minNonIncreasingSubsequences(nums));\n    }\n}',
c: '#include <stdio.h>\n#include <stdlib.h>\nint minNonIncreasingSubsequences(int *nums, int n) {\n    return 0;\n}\nint main() {\n    int n;\n    scanf("%d", &n);\n    int *nums = malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    printf("%d\\n", minNonIncreasingSubsequences(nums, n));\n    free(nums);\n    return 0;\n}',
cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint minNonIncreasingSubsequences(vector<int>& nums) {\n    return 0;\n}\nint main() {\n    int n;\n    cin >> n;\n    vector<int> nums(n);\n    for (int &x : nums) cin >> x;\n    cout << minNonIncreasingSubsequences(nums) << "\\n";\n    return 0;\n}'
}
},
{
id: 'lis-h4',
title: 'Lexicographically Smallest Longest Increasing Subsequence',
difficulty: 'Hard',
description: 'Given an array, find the lexicographically smallest subsequence among all longest strictly increasing subsequences. Print the selected elements in order.',
constraints: ['1 <= n <= 10^5','-10^9 <= nums[i] <= 10^9'],
examples: [
{input: 'nums = [3, 1, 2, 8, 5, 6]',output: '1 2 5 6',explanation: 'The longest increasing subsequence has length 4, and [1,2,5,6] is the lexicographically smallest one.'},
{input: 'nums = [2, 1, 4, 3, 5]',output: '1 3 5',explanation: 'Both [1,4,5] and [1,3,5] have length 3, and [1,3,5] is lexicographically smaller.'}
],
testCases: [
{input: '6\n3 1 2 8 5 6',expectedOutput: '1 2 5 6',hidden: false},
{input: '5\n2 1 4 3 5',expectedOutput: '1 3 5',hidden: false}
],
starterCode: {
python: 'def lexicographically_smallest_lis(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(*lexicographically_smallest_lis(nums))',
java: 'import java.util.*;\npublic class Main {\n    public static List<Integer> lexicographicallySmallestLIS(int[] nums) {\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        List<Integer> ans = lexicographicallySmallestLIS(nums);\n        for (int i = 0; i < ans.size(); i++) {\n            if (i > 0) System.out.print(" ");\n            System.out.print(ans.get(i));\n        }\n        System.out.println();\n    }\n}',
c: '#include <stdio.h>\n#include <stdlib.h>\nint* lexicographicallySmallestLIS(int *nums, int n, int *returnSize) {\n    *returnSize = 0;\n    return NULL;\n}\nint main() {\n    int n;\n    scanf("%d", &n);\n    int *nums = malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    int size;\n    int *ans = lexicographicallySmallestLIS(nums, n, &size);\n    for (int i = 0; i < size; i++) {\n        if (i) printf(" ");\n        printf("%d", ans[i]);\n    }\n    printf("\\n");\n    free(ans);\n    free(nums);\n    return 0;\n}',
cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> lexicographicallySmallestLIS(vector<int>& nums) {\n    return {};\n}\nint main() {\n    int n;\n    cin >> n;\n    vector<int> nums(n);\n    for (int &x : nums) cin >> x;\n    vector<int> ans = lexicographicallySmallestLIS(nums);\n    for (int i = 0; i < (int)ans.size(); i++) {\n        if (i) cout << " ";\n        cout << ans[i];\n    }\n    cout << "\\n";\n    return 0;\n}'
}
},
{
id: 'lis-h5',
title: 'Longest Increasing Subsequence After One Deletion',
difficulty: 'Hard',
description: 'Given an array of integers, you may delete at most one element. Find the maximum possible length of a strictly increasing subsequence after the optional deletion.',
constraints: ['1 <= n <= 10^5','-10^9 <= nums[i] <= 10^9'],
examples: [
{input: 'nums = [1, 2, 5, 3, 4]',output: '4',explanation: 'Deleting 5 allows the increasing subsequence [1,2,3,4] of length 4.'},
{input: 'nums = [1, 3, 2, 4]',output: '3',explanation: 'Deleting either 3 or 2 allows a strictly increasing subsequence of length 3.'}
],
testCases: [
{input: '5\n1 2 5 3 4',expectedOutput: '4',hidden: false},
{input: '4\n1 3 2 4',expectedOutput: '3',hidden: false}
],
starterCode: {
python: 'def lis_after_one_deletion(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(lis_after_one_deletion(nums))',
java: 'import java.util.*;\npublic class Main {\n    public static int lisAfterOneDeletion(int[] nums) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        System.out.println(lisAfterOneDeletion(nums));\n    }\n}',
c: '#include <stdio.h>\n#include <stdlib.h>\nint lisAfterOneDeletion(int *nums, int n) {\n    return 0;\n}\nint main() {\n    int n;\n    scanf("%d", &n);\n    int *nums = malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    printf("%d\\n", lisAfterOneDeletion(nums, n));\n    free(nums);\n    return 0;\n}',
cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint lisAfterOneDeletion(vector<int>& nums) {\n    return 0;\n}\nint main() {\n    int n;\n    cin >> n;\n    vector<int> nums(n);\n    for (int &x : nums) cin >> x;\n    cout << lisAfterOneDeletion(nums) << "\\n";\n    return 0;\n}'
}
}
];