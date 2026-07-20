export const RSQproblems = [
  {
    id: 'rsq-e1',
    title: 'Range Sum Query',
    difficulty: 'Easy',
    description: 'Given an integer array `nums`, answer multiple queries where each query consists of two indices `left` and `right`. Return the sum of all elements between indices `left` and `right` (inclusive). Implement your solution so that each query runs efficiently.',
    constraints: [
      '1 <= nums.length <= 10^4',
      '-10^5 <= nums[i] <= 10^5',
      '0 <= left <= right < nums.length',
      '1 <= q <= 10^4'
    ],
    examples: [
      {
        input: 'nums = [-2,0,3,-5,2,-1], queries = [[0,2],[2,5],[0,5]]',
        output: '[1,-1,-3]',
        explanation: 'Sum(0,2)=1, Sum(2,5)=-1, Sum(0,5)=-3.'
      },
      {
        input: 'nums = [1,2,3,4,5], queries = [[1,3],[0,4]]',
        output: '[9,15]',
        explanation: 'Sum(1,3)=9 and Sum(0,4)=15.'
      }
    ],
    testCases: [
      {
        input: '6\n-2 0 3 -5 2 -1\n3\n0 2\n2 5\n0 5',
        expectedOutput: '1\n-1\n-3',
        hidden: false
      },
      {
        input: '5\n1 2 3 4 5\n2\n1 3\n0 4',
        expectedOutput: '9\n15',
        hidden: false
      }
    ],
    starterCode: {
      python: `def range_sum_query(nums, queries):
    pass

n = int(input())
nums = list(map(int, input().split()))
q = int(input())
queries = [tuple(map(int, input().split())) for _ in range(q)]

result = range_sum_query(nums, queries)
for value in result:
    print(value)`,

      java: `import java.util.*;

public class Solution {
    public static List<Integer> rangeSumQuery(int[] nums, int[][] queries) {
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];

            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }

            int q = sc.nextInt();
            int[][] queries = new int[q][2];

            for (int i = 0; i < q; i++) {
                queries[i][0] = sc.nextInt();
                queries[i][1] = sc.nextInt();
            }

            List<Integer> result = rangeSumQuery(nums, queries);

            for (int value : result) {
                System.out.println(value);
            }
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>

int* rangeSumQuery(int* nums, int numsSize, int queries[][2], int q) {
    return NULL;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1) return 0;

    int* nums = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }

    int q;
    scanf("%d", &q);

    int queries[q][2];

    for (int i = 0; i < q; i++) {
        scanf("%d %d", &queries[i][0], &queries[i][1]);
    }

    int* result = rangeSumQuery(nums, n, queries, q);

    for (int i = 0; i < q; i++) {
        printf("%d\\n", result[i]);
    }

    free(result);
    free(nums);

    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>

using namespace std;

vector<int> rangeSumQuery(vector<int>& nums, vector<pair<int, int>>& queries) {
    return {};
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if (cin >> n) {
        vector<int> nums(n);

        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }

        int q;
        cin >> q;

        vector<pair<int, int>> queries(q);

        for (int i = 0; i < q; i++) {
            cin >> queries[i].first >> queries[i].second;
        }

        vector<int> result = rangeSumQuery(nums, queries);

        for (int value : result) {
            cout << value << "\\n";
        }
    }

    return 0;
}`
    }
  },
  {
    id: 'rsq-e2',
    title: 'Single Range Sum Query',
    difficulty: 'Easy',
    description: 'Given an integer array `nums` and two indices `left` and `right`, return the sum of all elements between `left` and `right` (inclusive).',
    constraints: [
      '1 <= nums.length <= 10^4',
      '-10^5 <= nums[i] <= 10^5',
      '0 <= left <= right < nums.length'
    ],
    examples: [
      {
        input: 'nums = [1,2,3,4,5], left = 1, right = 3',
        output: '9',
        explanation: '2 + 3 + 4 = 9.'
      },
      {
        input: 'nums = [-2,0,3,-5,2,-1], left = 2, right = 5',
        output: '-1',
        explanation: '3 + (-5) + 2 + (-1) = -1.'
      }
    ],
    testCases: [
      {
        input: '5\n1 2 3 4 5\n1 3',
        expectedOutput: '9',
        hidden: false
      },
      {
        input: '6\n-2 0 3 -5 2 -1\n2 5',
        expectedOutput: '-1',
        hidden: false
      }
    ],
    starterCode: {
      python: `def range_sum(nums, left, right):
    pass

n = int(input())
nums = list(map(int, input().split()))
left, right = map(int, input().split())
print(range_sum(nums, left, right))`,

      java: `import java.util.*;

public class Solution {
    public static int rangeSum(int[] nums, int left, int right) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];

            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }

            int left = sc.nextInt();
            int right = sc.nextInt();

            System.out.println(rangeSum(nums, left, right));
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>

int rangeSum(int* nums, int numsSize, int left, int right) {
    return 0;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1) return 0;

    int* nums = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }

    int left, right;
    scanf("%d %d", &left, &right);

    printf("%d\\n", rangeSum(nums, n, left, right));

    free(nums);

    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>

using namespace std;

int rangeSum(vector<int>& nums, int left, int right) {
    return 0;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if (cin >> n) {
        vector<int> nums(n);

        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }

        int left, right;
        cin >> left >> right;

        cout << rangeSum(nums, left, right) << "\\n";
    }

    return 0;
}`
    }
  },
  {
    id: 'rsq-e3',
    title: 'Sum of Entire Array',
    difficulty: 'Easy',
    description: 'Given an integer array `nums`, return the sum of all its elements. Although only one query is asked, solving this efficiently prepares you for handling multiple range sum queries.',
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^5 <= nums[i] <= 10^5'
    ],
    examples: [
      {
        input: 'nums = [1,2,3,4,5]',
        output: '15',
        explanation: '1 + 2 + 3 + 4 + 5 = 15.'
      },
      {
        input: 'nums = [-2,0,3,-5,2,-1]',
        output: '-3',
        explanation: '-2 + 0 + 3 + (-5) + 2 + (-1) = -3.'
      }
    ],
    testCases: [
      {
        input: '5\n1 2 3 4 5',
        expectedOutput: '15',
        hidden: false
      },
      {
        input: '6\n-2 0 3 -5 2 -1',
        expectedOutput: '-3',
        hidden: false
      }
    ],
    starterCode: {
      python: `def array_sum(nums):
    pass

n = int(input())
nums = list(map(int, input().split()))

print(array_sum(nums))`,

      java: `import java.util.*;

public class Solution {
    public static int arraySum(int[] nums) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];

            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }

            System.out.println(arraySum(nums));
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>

int arraySum(int* nums, int numsSize) {
    return 0;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1) return 0;

    int* nums = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }

    printf("%d\\n", arraySum(nums, n));

    free(nums);

    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>

using namespace std;

int arraySum(vector<int>& nums) {
    return 0;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if (cin >> n) {
        vector<int> nums(n);

        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }

        cout << arraySum(nums) << "\\n";
    }

    return 0;
}`
    }
  },
  {
    id: 'rsq-e4',
    title: 'Equal Range Sum',
    difficulty: 'Easy',
    description: 'Given an integer array `nums` and two ranges `[l1, r1]` and `[l2, r2]`, determine whether the sum of the elements in both ranges is equal. Return `true` if the sums are equal, otherwise return `false`.',
    constraints: [
      '1 <= nums.length <= 10^4',
      '-10^5 <= nums[i] <= 10^5',
      '0 <= l1 <= r1 < nums.length',
      '0 <= l2 <= r2 < nums.length'
    ],
    examples: [
      {
        input: 'nums = [1,2,3,4,5], l1 = 0, r1 = 2, l2 = 3, r2 = 4',
        output: 'false',
        explanation: 'Sum(0,2) = 6 and Sum(3,4) = 9.'
      },
      {
        input:'nums = [2, 1, 3, 2], l1 = 0, r1 = 1, l2 = 2, r2 = 2',
        output: 'true',
        explanation: 'Sum(0, 1) = 3 and Sum(2, 2)=3.'
    }
    ],
    testCases: [
      {
        input: '5\n1 2 3 4 5\n0 2\n3 4',
        expectedOutput: 'false',
        hidden: false
      },
      {
        input: '4\n2 1 3 2\n0 1\n2 2',
        expectedOutput: 'true',
        hidden: false
      }
    ],
    starterCode: {
      python: `def equal_range_sum(nums, l1, r1, l2, r2):
    pass

n = int(input())
nums = list(map(int, input().split()))
l1, r1 = map(int, input().split())
l2, r2 = map(int, input().split())

print(equal_range_sum(nums, l1, r1, l2, r2))`,

      java: `import java.util.*;

public class Solution {
    public static boolean equalRangeSum(int[] nums, int l1, int r1, int l2, int r2) {
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];

            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }

            int l1 = sc.nextInt();
            int r1 = sc.nextInt();
            int l2 = sc.nextInt();
            int r2 = sc.nextInt();

            System.out.println(equalRangeSum(nums, l1, r1, l2, r2));
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool equalRangeSum(int* nums, int numsSize, int l1, int r1, int l2, int r2) {
    return false;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1) return 0;

    int* nums = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }

    int l1, r1, l2, r2;
    scanf("%d %d", &l1, &r1);
    scanf("%d %d", &l2, &r2);

    printf("%s\\n", equalRangeSum(nums, n, l1, r1, l2, r2) ? "true" : "false");

    free(nums);

    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>

using namespace std;

bool equalRangeSum(vector<int>& nums, int l1, int r1, int l2, int r2) {
    return false;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if (cin >> n) {
        vector<int> nums(n);

        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }

        int l1, r1, l2, r2;
        cin >> l1 >> r1;
        cin >> l2 >> r2;

        cout << (equalRangeSum(nums, l1, r1, l2, r2) ? "true" : "false") << "\\n";
    }

    return 0;
}`
    }
  },
  {
    id: 'rsq-e5',
    title: 'Maximum Range Sum',
    difficulty: 'Easy',
    description: 'Given an integer array `nums` and multiple range queries, determine the maximum range sum among all the queries.',
    constraints: [
      '1 <= nums.length <= 10^4',
      '-10^5 <= nums[i] <= 10^5',
      '1 <= q <= 10^4',
      '0 <= left <= right < nums.length'
    ],
    examples: [
      {
        input: 'nums = [1,2,3,4,5], queries = [[0,2],[1,4],[2,3]]',
        output: '14',
        explanation: 'The range sums are 6, 14, and 7. The maximum is 14.'
      },
      {
        input: 'nums = [-2,0,3,-5,2,-1], queries = [[0,2],[2,5],[4,5]]',
        output: '1',
        explanation: 'The range sums are 1, -1, and 1. The maximum is 1.'
      }
    ],
    testCases: [
      {
        input: '5\n1 2 3 4 5\n3\n0 2\n1 4\n2 3',
        expectedOutput: '14',
        hidden: false
      },
      {
        input: '6\n-2 0 3 -5 2 -1\n3\n0 2\n2 5\n4 5',
        expectedOutput: '1',
        hidden: false
      }
    ],
    starterCode: {
      python: `def maximum_range_sum(nums, queries):
    pass

n = int(input())
nums = list(map(int, input().split()))

q = int(input())
queries = [tuple(map(int, input().split())) for _ in range(q)]

print(maximum_range_sum(nums, queries))`,

      java: `import java.util.*;

public class Solution {
    public static int maximumRangeSum(int[] nums, int[][] queries) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];

            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }

            int q = sc.nextInt();
            int[][] queries = new int[q][2];

            for (int i = 0; i < q; i++) {
                queries[i][0] = sc.nextInt();
                queries[i][1] = sc.nextInt();
            }

            System.out.println(maximumRangeSum(nums, queries));
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>

int maximumRangeSum(int* nums, int numsSize, int queries[][2], int q) {
    return 0;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1) return 0;

    int* nums = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }

    int q;
    scanf("%d", &q);

    int queries[q][2];

    for (int i = 0; i < q; i++) {
        scanf("%d %d", &queries[i][0], &queries[i][1]);
    }

    printf("%d\\n", maximumRangeSum(nums, n, queries, q));

    free(nums);

    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>

using namespace std;

int maximumRangeSum(vector<int>& nums, vector<pair<int, int>>& queries) {
    return 0;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if (cin >> n) {
        vector<int> nums(n);

        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }

        int q;
        cin >> q;

        vector<pair<int, int>> queries(q);

        for (int i = 0; i < q; i++) {
            cin >> queries[i].first >> queries[i].second;
        }

        cout << maximumRangeSum(nums, queries) << "\\n";
    }

    return 0;
}`
    }
  },
  {
    id: 'rsq-m1',
    title: 'Frequent Range Sum Queries',
    difficulty: 'Medium',
    description: 'Given an integer array `nums` and multiple range sum queries, answer each query efficiently. Since the number of queries can be large, a naive approach that computes the sum for every query separately may exceed the time limit.',
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^9 <= nums[i] <= 10^9',
      '1 <= q <= 10^5',
      '0 <= left <= right < nums.length'
    ],
    examples: [
      {
        input: 'nums = [1,3,5,7,9], queries = [[0,2],[1,3],[2,4]]',
        output: '[9,15,21]',
        explanation: 'The sums of the requested ranges are 9, 15, and 21 respectively.'
      },
      {
        input: 'nums = [-2,0,3,-5,2,-1], queries = [[0,2],[2,5],[0,5]]',
        output: '[1,-1,-3]',
        explanation: 'The range sums are calculated for each query.'
      }
    ],
    testCases: [
      {
        input: '5\n1 3 5 7 9\n3\n0 2\n1 3\n2 4',
        expectedOutput: '9\n15\n21',
        hidden: false
      },
      {
        input: '6\n-2 0 3 -5 2 -1\n3\n0 2\n2 5\n0 5',
        expectedOutput: '1\n-1\n-3',
        hidden: false
      }
    ],
    starterCode: {
      python: `def frequent_range_sum_queries(nums, queries):
    pass

n = int(input())
nums = list(map(int, input().split()))

q = int(input())
queries = [tuple(map(int, input().split())) for _ in range(q)]

result = frequent_range_sum_queries(nums, queries)

for value in result:
    print(value)`,

      java: `import java.util.*;

public class Solution {
    public static List<Long> frequentRangeSumQueries(int[] nums, int[][] queries) {
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];

            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }

            int q = sc.nextInt();
            int[][] queries = new int[q][2];

            for (int i = 0; i < q; i++) {
                queries[i][0] = sc.nextInt();
                queries[i][1] = sc.nextInt();
            }

            List<Long> result = frequentRangeSumQueries(nums, queries);

            for (long value : result) {
                System.out.println(value);
            }
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>

long long* frequentRangeSumQueries(int* nums, int numsSize, int queries[][2], int q) {
    return NULL;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1) return 0;

    int* nums = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }

    int q;
    scanf("%d", &q);

    int queries[q][2];

    for (int i = 0; i < q; i++) {
        scanf("%d %d", &queries[i][0], &queries[i][1]);
    }

    long long* result = frequentRangeSumQueries(nums, n, queries, q);

    for (int i = 0; i < q; i++) {
        printf("%lld\\n", result[i]);
    }

    free(result);
    free(nums);

    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>

using namespace std;

vector<long long> frequentRangeSumQueries(vector<int>& nums, vector<pair<int, int>>& queries) {
    return {};
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if (cin >> n) {
        vector<int> nums(n);

        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }

        int q;
        cin >> q;

        vector<pair<int, int>> queries(q);

        for (int i = 0; i < q; i++) {
            cin >> queries[i].first >> queries[i].second;
        }

        vector<long long> result = frequentRangeSumQueries(nums, queries);

        for (long long value : result) {
            cout << value << "\\n";
        }
    }

    return 0;
}`
    }
  },
  {
    id: 'rsq-m2',
    title: 'Range Sum After Point Updates',
    difficulty: 'Medium',
    description: 'You are given an integer array `nums` and a sequence of operations. Each operation is either an update that changes the value at a specific index or a query that asks for the sum of elements between two indices (inclusive). Return the answer for every query operation.',
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^9 <= nums[i] <= 10^9',
      '1 <= operations.length <= 10^5',
      'Update: 0 <= index < nums.length',
      'Query: 0 <= left <= right < nums.length'
    ],
    examples: [
      {
        input: 'nums = [1,3,5], operations = [["query",0,2],["update",1,2],["query",0,2]]',
        output: '[9,8]',
        explanation: 'Initially the sum from index 0 to 2 is 9. After updating nums[1] to 2, the array becomes [1,2,5] and the sum becomes 8.'
      },
      {
        input: 'nums = [4,2,7,1], operations = [["query",1,3],["update",2,5],["query",0,2]]',
        output: '[10,11]',
        explanation: 'The first query returns 2 + 7 + 1 = 10. After updating index 2 to 5, the array becomes [4,2,5,1] and the second query returns 4 + 2 + 5 = 11.'
      }
    ],
    testCases: [
      {
        input: '3\n1 3 5\n3\nquery 0 2\nupdate 1 2\nquery 0 2',
        expectedOutput: '9\n8',
        hidden: false
      },
      {
        input: '4\n4 2 7 1\n3\nquery 1 3\nupdate 2 5\nquery 0 2',
        expectedOutput: '10\n11',
        hidden: false
      }
    ],
    starterCode: {
      python: `def process_operations(nums, operations):
    pass

n = int(input())
nums = list(map(int, input().split()))

m = int(input())
operations = [input().split() for _ in range(m)]

result = process_operations(nums, operations)

for value in result:
    print(value)`,

      java: `import java.util.*;

public class Solution {
    public static List<Long> processOperations(int[] nums, String[][] operations) {
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];

            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }

            int m = sc.nextInt();
            sc.nextLine();

            String[][] operations = new String[m][3];

            for (int i = 0; i < m; i++) {
                operations[i] = sc.nextLine().split(" ");
            }

            List<Long> result = processOperations(nums, operations);

            for (long value : result) {
                System.out.println(value);
            }
        }
    }
}`,

      c: `#include <stdio.h>

void processOperations() {
    /* Implement your solution here */
}

int main() {
    processOperations();
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>
#include <string>

using namespace std;

vector<long long> processOperations(vector<int>& nums, vector<vector<string>>& operations) {
    return {};
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if (cin >> n) {
        vector<int> nums(n);

        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }

        int m;
        cin >> m;

        vector<vector<string>> operations(m, vector<string>(3));

        for (int i = 0; i < m; i++) {
            cin >> operations[i][0] >> operations[i][1] >> operations[i][2];
        }

        vector<long long> result = processOperations(nums, operations);

        for (long long value : result) {
            cout << value << "\\n";
        }
    }

    return 0;
}`
    }
  },
  {
    id: 'rsq-m3',
    title: 'Count Queries with Sum Greater Than K',
    difficulty: 'Medium',
    description: 'Given an integer array `nums`, a list of range queries, and an integer `k`, determine how many queries have a range sum strictly greater than `k`.',
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^5 <= nums[i] <= 10^5',
      '1 <= queries.length <= 10^5',
      '0 <= left <= right < nums.length',
      '-10^12 <= k <= 10^12'
    ],
    examples: [
      {
        input: 'nums = [1,2,3,4,5], queries = [[0,2],[1,3],[2,4]], k = 10',
        output: '2',
        explanation: 'The range sums are 6, 9, and 12. Only the last range sum is greater than 10, while if k = 8, the answer would be 2.'
      },
      {
        input: 'nums = [-2,0,3,-5,2,-1], queries = [[0,2],[2,5],[0,5]], k = 0',
        output: '1',
        explanation: 'The range sums are 1, -1, and -3. Only one query has a sum greater than 0.'
      }
    ],
    testCases: [
      {
        input: '5\n1 2 3 4 5\n3\n0 2\n1 3\n2 4\n8',
        expectedOutput: '2',
        hidden: false
      },
      {
        input: '6\n-2 0 3 -5 2 -1\n3\n0 2\n2 5\n0 5\n0',
        expectedOutput: '1',
        hidden: false
      }
    ],
    starterCode: {
      python: `def count_queries_greater_than_k(nums, queries, k):
    pass

n = int(input())
nums = list(map(int, input().split()))

q = int(input())
queries = [tuple(map(int, input().split())) for _ in range(q)]

k = int(input())

print(count_queries_greater_than_k(nums, queries, k))`,

      java: `import java.util.*;

public class Solution {
    public static int countQueriesGreaterThanK(int[] nums, int[][] queries, int k) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];

            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }

            int q = sc.nextInt();
            int[][] queries = new int[q][2];

            for (int i = 0; i < q; i++) {
                queries[i][0] = sc.nextInt();
                queries[i][1] = sc.nextInt();
            }

            long k = sc.nextLong();

            System.out.println(countQueries(nums, queries, k));
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>

int countQueries(int* nums, int numsSize, int queries[][2], int q, long long k) {
    return 0;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1) return 0;

    int* nums = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }

    int q;
    scanf("%d", &q);

    int queries[q][2];

    for (int i = 0; i < q; i++) {
        scanf("%d %d", &queries[i][0], &queries[i][1]);
    }

    long long k;
    scanf("%lld", &k);

    printf("%d\\n", countQueries(nums, n, queries, q, k));

    free(nums);

    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>

using namespace std;

int countQueries(vector<int>& nums, vector<pair<int, int>>& queries, long long k) {
    return 0;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if (cin >> n) {
        vector<int> nums(n);

        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }

        int q;
        cin >> q;

        vector<pair<int, int>> queries(q);

        for (int i = 0; i < q; i++) {
            cin >> queries[i].first >> queries[i].second;
        }

        long long k;
        cin >> k;

        cout << countQueries(nums, queries, k) << "\\n";
    }

    return 0;
}`
    }
  },
  {
    id: 'rsq-m4',
    title: 'Longest Query with Sum at Most K',
    difficulty: 'Medium',
    description: 'Given an integer array `nums`, a list of range queries, and an integer `k`, determine the maximum length of a queried range whose sum is less than or equal to `k`. If no such range exists, return `0`.',
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^5 <= nums[i] <= 10^5',
      '1 <= queries.length <= 10^5',
      '0 <= left <= right < nums.length',
      '-10^12 <= k <= 10^12'
    ],
    examples: [
      {
        input: 'nums = [1,2,3,4,5], queries = [[0,1],[1,3],[2,4]], k = 10',
        output: '2',
        explanation: 'The queried range sums are 3, 9, and 12 with lengths 2, 3, and 3 respectively. Only the first two satisfy the condition, so the maximum valid length is 3.'
      },
      {
        input: 'nums = [2,1,4,3], queries = [[0,0],[0,1],[1,3]], k = 5',
        output: '2',
        explanation: 'The range sums are 2, 3, and 8. The maximum valid range length is 2.'
      }
    ],
    testCases: [
      {
        input: '5\n1 2 3 4 5\n3\n0 1\n1 3\n2 4\n10',
        expectedOutput: '3',
        hidden: false
      },
      {
        input: '4\n2 1 4 3\n3\n0 0\n0 1\n1 3\n5',
        expectedOutput: '2',
        hidden: false
      }
    ],
    starterCode: {
      python: `def longest_valid_query(nums, queries, k):
    pass

n = int(input())
nums = list(map(int, input().split()))

q = int(input())
queries = [tuple(map(int, input().split())) for _ in range(q)]

k = int(input())

print(longest_valid_query(nums, queries, k))`,

      java: `import java.util.*;

public class Solution {
    public static int longestValidQuery(int[] nums, int[][] queries, long k) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];

            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }

            int q = sc.nextInt();
            int[][] queries = new int[q][2];

            for (int i = 0; i < q; i++) {
                queries[i][0] = sc.nextInt();
                queries[i][1] = sc.nextInt();
            }

            long k = sc.nextLong();

            System.out.println(longestValidQuery(nums, queries, k));
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>

int longestValidQuery(int* nums, int numsSize, int queries[][2], int q, long long k) {
    return 0;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1) return 0;

    int* nums = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }

    int q;
    scanf("%d", &q);

    int queries[q][2];

    for (int i = 0; i < q; i++) {
        scanf("%d %d", &queries[i][0], &queries[i][1]);
    }

    long long k;
    scanf("%lld", &k);

    printf("%d\\n", longestValidQuery(nums, n, queries, q, k));

    free(nums);

    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>

using namespace std;

int longestValidQuery(vector<int>& nums, vector<pair<int, int>>& queries, long long k) {
    return 0;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if (cin >> n) {
        vector<int> nums(n);

        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }

        int q;
        cin >> q;

        vector<pair<int, int>> queries(q);

        for (int i = 0; i < q; i++) {
            cin >> queries[i].first >> queries[i].second;
        }

        long long k;
        cin >> k;

        cout << longestValidQuery(nums, queries, k) << "\\n";
    }

    return 0;
}`
    }
  },
  {
    id: 'rsq-m5',
    title: 'Maximum Range Sum Difference',
    difficulty: 'Medium',
    description: 'Given an integer array `nums` and multiple queries, where each query consists of two ranges `[l1, r1]` and `[l2, r2]`, return the absolute difference between the sums of the two ranges for every query.',
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^9 <= nums[i] <= 10^9',
      '1 <= q <= 10^5',
      '0 <= l1 <= r1 < nums.length',
      '0 <= l2 <= r2 < nums.length'
    ],
    examples: [
      {
        input: 'nums = [1,2,3,4,5], queries = [[0,2,2,4],[1,3,0,1]]',
        output: '[6,6]',
        explanation: 'For the first query, the range sums are 6 and 12, so the absolute difference is 6. For the second query, the range sums are 9 and 3, so the absolute difference is 6.'
      },
      {
        input: 'nums = [-2,0,3,-5,2,-1], queries = [[0,2,2,5],[1,4,0,1]]',
        output: '[2,2]',
        explanation: 'The absolute differences between the corresponding range sums are 2 and 2.'
      }
    ],
    testCases: [
      {
        input: '5\n1 2 3 4 5\n2\n0 2 2 4\n1 3 0 1',
        expectedOutput: '6\n6',
        hidden: false
      },
      {
        input: '6\n-2 0 3 -5 2 -1\n2\n0 2 2 5\n1 4 0 1',
        expectedOutput: '2\n2',
        hidden: false
      }
    ],
    starterCode: {
      python: `def range_sum_difference(nums, queries):
    pass

n = int(input())
nums = list(map(int, input().split()))

q = int(input())
queries = [tuple(map(int, input().split())) for _ in range(q)]

result = range_sum_difference(nums, queries)

for value in result:
    print(value)`,

      java: `import java.util.*;

public class Solution {
    public static List<Long> rangeSumDifference(int[] nums, int[][] queries) {
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];

            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }

            int q = sc.nextInt();
            int[][] queries = new int[q][4];

            for (int i = 0; i < q; i++) {
                for (int j = 0; j < 4; j++) {
                    queries[i][j] = sc.nextInt();
                }
            }

            List<Long> result = rangeSumDifference(nums, queries);

            for (long value : result) {
                System.out.println(value);
            }
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>

long long* rangeSumDifference(int* nums, int numsSize, int queries[][4], int q) {
    return NULL;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1) return 0;

    int* nums = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }

    int q;
    scanf("%d", &q);

    int queries[q][4];

    for (int i = 0; i < q; i++) {
        for (int j = 0; j < 4; j++) {
            scanf("%d", &queries[i][j]);
        }
    }

    long long* result = rangeSumDifference(nums, n, queries, q);

    for (int i = 0; i < q; i++) {
        printf("%lld\\n", result[i]);
    }

    free(result);
    free(nums);

    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>
#include <array>

using namespace std;

vector<long long> rangeSumDifference(vector<int>& nums, vector<array<int, 4>>& queries) {
    return {};
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if (cin >> n) {
        vector<int> nums(n);

        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }

        int q;
        cin >> q;

        vector<array<int, 4>> queries(q);

        for (int i = 0; i < q; i++) {
            cin >> queries[i][0] >> queries[i][1]
                >> queries[i][2] >> queries[i][3];
        }

        vector<long long> result = rangeSumDifference(nums, queries);

        for (long long value : result) {
            cout << value << "\\n";
        }
    }

    return 0;
}`
    }
  },
  {
    id: 'rsq-h1',
    title: 'Dynamic Range Sum with Mixed Operations',
    difficulty: 'Hard',
    description: 'You are given an integer array `nums` and a sequence of operations. Each operation is one of the following:\n\n- `update index value` — Replace the value at `index` with `value`.\n- `query left right` — Return the sum of elements in the range `[left, right]`.\n\nProcess all operations in the given order and return the result of every query. The solution should efficiently handle a large number of updates and queries.',
    constraints: [
      '1 <= nums.length <= 2 × 10^5',
      '-10^9 <= nums[i] <= 10^9',
      '1 <= operations.length <= 2 × 10^5',
      '0 <= index < nums.length',
      '0 <= left <= right < nums.length'
    ],
    examples: [
      {
        input: 'nums = [1,3,5,7], operations = [["query",0,3],["update",2,10],["query",1,3],["update",0,4],["query",0,2]]',
        output: '[16,20,17]',
        explanation: 'The queries return the range sums after applying all previous updates.'
      },
      {
        input: 'nums = [5,2,8], operations = [["query",0,1],["update",1,6],["query",0,2]]',
        output: '[7,19]',
        explanation: 'After updating index 1 from 2 to 6, the array becomes [5,6,8].'
      }
    ],
    testCases: [
      {
        input: '4\n1 3 5 7\n5\nquery 0 3\nupdate 2 10\nquery 1 3\nupdate 0 4\nquery 0 2',
        expectedOutput: '16\n20\n17',
        hidden: false
      },
      {
        input: '3\n5 2 8\n3\nquery 0 1\nupdate 1 6\nquery 0 2',
        expectedOutput: '7\n19',
        hidden: false
      }
    ],
    starterCode: {
      python: `def process_operations(nums, operations):
    pass

n = int(input())
nums = list(map(int, input().split()))

m = int(input())
operations = [input().split() for _ in range(m)]

result = process_operations(nums, operations)

for value in result:
    print(value)`,

      java: `import java.util.*;

public class Solution {
    public static List<Long> processOperations(int[] nums, String[][] operations) {
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];

            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }

            int m = sc.nextInt();
            sc.nextLine();

            String[][] operations = new String[m][3];

            for (int i = 0; i < m; i++) {
                operations[i] = sc.nextLine().split(" ");
            }

            List<Long> result = processOperations(nums, operations);

            for (long value : result) {
                System.out.println(value);
            }
        }
    }
}`,

      c: `#include <stdio.h>

void processOperations() {
    /* Implement your solution here */
}

int main() {
    processOperations();
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>
#include <string>

using namespace std;

vector<long long> processOperations(vector<int>& nums, vector<vector<string>>& operations) {
    return {};
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if (cin >> n) {
        vector<int> nums(n);

        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }

        int m;
        cin >> m;

        vector<vector<string>> operations(m, vector<string>(3));

        for (int i = 0; i < m; i++) {
            cin >> operations[i][0] >> operations[i][1] >> operations[i][2];
        }

        vector<long long> result = processOperations(nums, operations);

        for (long long value : result) {
            cout << value << "\\n";
        }
    }

    return 0;
}`
    }
  },
  {
    id: 'rsq-h2',
    title: 'Range Sum Queries with Circular Array',
    difficulty: 'Hard',
    description: 'You are given a circular integer array `nums` and multiple range queries. For each query `[left, right]`, return the sum of all elements from `left` to `right` (inclusive). If `left > right`, the range wraps around the end of the array.',
    constraints: [
      '1 <= nums.length <= 2 × 10^5',
      '-10^9 <= nums[i] <= 10^9',
      '1 <= q <= 2 × 10^5',
      '0 <= left, right < nums.length'
    ],
    examples: [
      {
        input: 'nums = [1,2,3,4,5], queries = [[3,1],[1,3]]',
        output: '[12,9]',
        explanation: 'For [3,1], the circular range is [4,5,1,2] with sum 12. For [1,3], the sum is 2 + 3 + 4 = 9.'
      },
      {
        input: 'nums = [5,-2,7,1], queries = [[2,1],[0,2]]',
        output: '[11,10]',
        explanation: 'For [2,1], the circular range is [7,1,5,-2] with sum 11. For [0,2], the sum is 5 + (-2) + 7 = 10.'
      }
    ],
    testCases: [
      {
        input: '5\n1 2 3 4 5\n2\n3 1\n1 3',
        expectedOutput: '12\n9',
        hidden: false
      },
      {
        input: '4\n5 -2 7 1\n2\n2 1\n0 2',
        expectedOutput: '11\n10',
        hidden: false
      }
    ],
    starterCode: {
      python: `def circular_range_sum(nums, queries):
    pass

n = int(input())
nums = list(map(int, input().split()))

q = int(input())
queries = [tuple(map(int, input().split())) for _ in range(q)]

result = circular_range_sum(nums, queries)

for value in result:
    print(value)`,

      java: `import java.util.*;

public class Solution {
    public static List<Long> circularRangeSum(int[] nums, int[][] queries) {
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];

            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }

            int q = sc.nextInt();
            int[][] queries = new int[q][2];

            for (int i = 0; i < q; i++) {
                queries[i][0] = sc.nextInt();
                queries[i][1] = sc.nextInt();
            }

            List<Long> result = circularRangeSum(nums, queries);

            for (long value : result) {
                System.out.println(value);
            }
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>

long long* circularRangeSum(int* nums, int numsSize, int queries[][2], int q) {
    return NULL;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1) return 0;

    int* nums = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }

    int q;
    scanf("%d", &q);

    int queries[q][2];

    for (int i = 0; i < q; i++) {
        scanf("%d %d", &queries[i][0], &queries[i][1]);
    }

    long long* result = circularRangeSum(nums, n, queries, q);

    for (int i = 0; i < q; i++) {
        printf("%lld\\n", result[i]);
    }

    free(result);
    free(nums);

    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>

using namespace std;

vector<long long> circularRangeSum(vector<int>& nums, vector<pair<int, int>>& queries) {
    return {};
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if (cin >> n) {
        vector<int> nums(n);

        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }

        int q;
        cin >> q;

        vector<pair<int, int>> queries(q);

        for (int i = 0; i < q; i++) {
            cin >> queries[i].first >> queries[i].second;
        }

        vector<long long> result = circularRangeSum(nums, queries);

        for (long long value : result) {
            cout << value << "\\n";
        }
    }

    return 0;
}`
    }
  },
  {
    id: 'rsq-h3',
    title: '2D Range Sum Queries',
    difficulty: 'Hard',
    description: 'You are given a 2D integer matrix and multiple queries. Each query contains the coordinates `(row1, col1)` and `(row2, col2)` representing the top-left and bottom-right corners of a submatrix. Return the sum of all elements within the specified submatrix (inclusive) for every query.',
    constraints: [
      '1 <= rows, cols <= 10^3',
      '-10^5 <= matrix[i][j] <= 10^5',
      '1 <= q <= 2 × 10^5',
      '0 <= row1 <= row2 < rows',
      '0 <= col1 <= col2 < cols'
    ],
    examples: [
      {
        input: 'matrix = [[3,0,1,4],[5,6,3,2],[1,2,0,1],[4,1,0,1]], queries = [[1,1,2,2],[0,0,3,3]]',
        output: '[11,34]',
        explanation: 'The first query sums the highlighted 2×2 submatrix. The second query sums the entire matrix.'
      },
      {
        input: 'matrix = [[1,2],[3,4]], queries = [[0,0,0,1],[0,1,1,1]]',
        output: '[3,6]',
        explanation: 'The sums of the queried submatrices are 3 and 6.'
      }
    ],
    testCases: [
      {
        input: '4 4\n3 0 1 4\n5 6 3 2\n1 2 0 1\n4 1 0 1\n2\n1 1 2 2\n0 0 3 3',
        expectedOutput: '11\n34',
        hidden: false
      },
      {
        input: '2 2\n1 2\n3 4\n2\n0 0 0 1\n0 1 1 1',
        expectedOutput: '3\n6',
        hidden: false
      }
    ],
    starterCode: {
      python: `def matrix_range_sum(matrix, queries):
    pass

rows, cols = map(int, input().split())
matrix = [list(map(int, input().split())) for _ in range(rows)]

q = int(input())
queries = [tuple(map(int, input().split())) for _ in range(q)]

result = matrix_range_sum(matrix, queries)

for value in result:
    print(value)`,

      java: `import java.util.*;

public class Solution {
    public static List<Long> matrixRangeSum(int[][] matrix, int[][] queries) {
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int rows = sc.nextInt();
            int cols = sc.nextInt();

            int[][] matrix = new int[rows][cols];

            for (int i = 0; i < rows; i++) {
                for (int j = 0; j < cols; j++) {
                    matrix[i][j] = sc.nextInt();
                }
            }

            int q = sc.nextInt();
            int[][] queries = new int[q][4];

            for (int i = 0; i < q; i++) {
                for (int j = 0; j < 4; j++) {
                    queries[i][j] = sc.nextInt();
                }
            }

            List<Long> result = matrixRangeSum(matrix, queries);

            for (long value : result) {
                System.out.println(value);
            }
        }
    }
}`,

      c: `#include <stdio.h>

void matrixRangeSum() {
    /* Implement your solution here */
}

int main() {
    matrixRangeSum();
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>
#include <array>

using namespace std;

vector<long long> matrixRangeSum(vector<vector<int>>& matrix, vector<array<int, 4>>& queries) {
    return {};
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int rows, cols;

    if (cin >> rows >> cols) {
        vector<vector<int>> matrix(rows, vector<int>(cols));

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                cin >> matrix[i][j];
            }
        }

        int q;
        cin >> q;

        vector<array<int, 4>> queries(q);

        for (int i = 0; i < q; i++) {
            cin >> queries[i][0] >> queries[i][1]
                >> queries[i][2] >> queries[i][3];
        }

        vector<long long> result = matrixRangeSum(matrix, queries);

        for (long long value : result) {
            cout << value << "\\n";
        }
    }

    return 0;
}`
    }
  },
  {
    id: 'rsq-h4',
    title: 'Range Sum Queries with Lazy Range Updates',
    difficulty: 'Hard',
    description: 'You are given an integer array `nums` and a sequence of operations. Each operation is one of the following:\n\n- `update left right value` — Add `value` to every element in the range `[left, right]`.\n- `query left right` — Return the sum of all elements in the range `[left, right]`.\n\nProcess all operations in order and return the answer for every query. The solution should efficiently support both range updates and range sum queries.',
    constraints: [
      '1 <= nums.length <= 2 × 10^5',
      '-10^9 <= nums[i] <= 10^9',
      '1 <= operations.length <= 2 × 10^5',
      '0 <= left <= right < nums.length',
      '-10^9 <= value <= 10^9'
    ],
    examples: [
      {
        input: 'nums = [1,2,3,4,5], operations = [["query",0,4],["update",1,3,2],["query",0,4],["query",2,4]]',
        output: '[15,21,16]',
        explanation: 'Initially the sum of the array is 15. After adding 2 to indices 1 through 3, the array becomes [1,4,5,6,5].'
      },
      {
        input: 'nums = [5,1,3], operations = [["update",0,2,1],["query",0,2],["update",1,2,-2],["query",1,2]]',
        output: '[12,4]',
        explanation: 'The array becomes [6,2,4] after the first update and [6,0,2] after the second update.'
      }
    ],
    testCases: [
      {
        input: '5\n1 2 3 4 5\n4\nquery 0 4\nupdate 1 3 2\nquery 0 4\nquery 2 4',
        expectedOutput: '15\n21\n16',
        hidden: false
      },
      {
        input: '3\n5 1 3\n4\nupdate 0 2 1\nquery 0 2\nupdate 1 2 -2\nquery 1 2',
        expectedOutput: '12\n4',
        hidden: false
      }
    ],
    starterCode: {
      python: `def process_operations(nums, operations):
    pass

n = int(input())
nums = list(map(int, input().split()))

m = int(input())
operations = [input().split() for _ in range(m)]

result = process_operations(nums, operations)

for value in result:
    print(value)`,

      java: `import java.util.*;

public class Solution {
    public static List<Long> processOperations(int[] nums, String[][] operations) {
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];

            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }

            int m = sc.nextInt();
            sc.nextLine();

            String[][] operations = new String[m][4];

            for (int i = 0; i < m; i++) {
                operations[i] = sc.nextLine().split(" ");
            }

            List<Long> result = processOperations(nums, operations);

            for (long value : result) {
                System.out.println(value);
            }
        }
    }
}`,

      c: `#include <stdio.h>

void processOperations() {
    /* Implement your solution here */
}

int main() {
    processOperations();
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>
#include <string>

using namespace std;

vector<long long> processOperations(vector<int>& nums, vector<vector<string>>& operations) {
    return {};
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if (cin >> n) {
        vector<int> nums(n);

        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }

        int m;
        cin >> m;

        vector<vector<string>> operations(m, vector<string>(4));

        for (int i = 0; i < m; i++) {
            operations[i].clear();

            string token;
            cin >> token;
            operations[i].push_back(token);

            if (token == "update") {
                for (int j = 0; j < 3; j++) {
                    cin >> token;
                    operations[i].push_back(token);
                }
            } else {
                for (int j = 0; j < 2; j++) {
                    cin >> token;
                    operations[i].push_back(token);
                }
            }
        }

        vector<long long> result = processOperations(nums, operations);

        for (long long value : result) {
            cout << value << "\\n";
        }
    }

    return 0;
}`
    }
  },
  {
    id: 'rsq-h5',
    title: 'Persistent Range Sum Queries',
    difficulty: 'Hard',
    description: 'You are given an integer array `nums` and a sequence of operations. Each update creates a new version of the array without modifying previous versions. Each query specifies a version number along with a range `[left, right]`. Return the sum of the specified range in the requested version of the array.',
    constraints: [
      '1 <= nums.length <= 2 × 10^5',
      '-10^9 <= nums[i] <= 10^9',
      '1 <= operations.length <= 2 × 10^5',
      '0 <= index < nums.length',
      '0 <= left <= right < nums.length',
      '0 <= version <= number of updates'
    ],
    examples: [
      {
        input: 'nums = [1,2,3,4], operations = [["query",0,0,3],["update",2,10],["query",1,0,3],["query",0,1,2]]',
        output: '[10,17,5]',
        explanation: 'Version 0 is the original array. After updating index 2 to 10, version 1 becomes [1,2,10,4]. Queries are answered using the requested version.'
      },
      {
        input: 'nums = [5,1,6], operations = [["update",1,4],["query",1,0,2],["query",0,0,2]]',
        output: '[15,12]',
        explanation: 'Version 1 is [5,4,6] with sum 15. Version 0 remains unchanged with sum 12.'
      }
    ],
    testCases: [
      {
        input: '4\n1 2 3 4\n4\nquery 0 0 3\nupdate 2 10\nquery 1 0 3\nquery 0 1 2',
        expectedOutput: '10\n17\n5',
        hidden: false
      },
      {
        input: '3\n5 1 6\n3\nupdate 1 4\nquery 1 0 2\nquery 0 0 2',
        expectedOutput: '15\n12',
        hidden: false
      }
    ],
    starterCode: {
      python: `def process_operations(nums, operations):
    pass

n = int(input())
nums = list(map(int, input().split()))

m = int(input())
operations = [input().split() for _ in range(m)]

result = process_operations(nums, operations)

for value in result:
    print(value)`,

      java: `import java.util.*;

public class Solution {
    public static List<Long> processOperations(int[] nums, String[][] operations) {
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];

            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }

            int m = sc.nextInt();
            sc.nextLine();

            String[][] operations = new String[m][4];

            for (int i = 0; i < m; i++) {
                operations[i] = sc.nextLine().split(" ");
            }

            List<Long> result = processOperations(nums, operations);

            for (long value : result) {
                System.out.println(value);
            }
        }
    }
}`,

      c: `#include <stdio.h>

void processOperations() {
    /* Implement your solution here */
}

int main() {
    processOperations();
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>
#include <string>

using namespace std;

vector<long long> processOperations(vector<int>& nums, vector<vector<string>>& operations) {
    return {};
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if (cin >> n) {
        vector<int> nums(n);

        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }

        int m;
        cin >> m;

        vector<vector<string>> operations(m);

        for (int i = 0; i < m; i++) {
            string type;
            cin >> type;
            operations[i].push_back(type);

            if (type == "update") {
                for (int j = 0; j < 2; j++) {
                    string value;
                    cin >> value;
                    operations[i].push_back(value);
                }
            } else {
                for (int j = 0; j < 3; j++) {
                    string value;
                    cin >> value;
                    operations[i].push_back(value);
                }
            }
        }

        vector<long long> result = processOperations(nums, operations);

        for (long long value : result) {
            cout << value << "\\n";
        }
    }

    return 0;
}`
    }
  }
];