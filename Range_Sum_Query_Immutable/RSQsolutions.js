export const RSQsolutions = {
  'rsq-e1': {
    python: `def range_sum_query(nums, queries):
    prefix = [0]

    for num in nums:
        prefix.append(prefix[-1] + num)

    result = []

    for left, right in queries:
        result.append(prefix[right + 1] - prefix[left])

    return result

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
        int[] prefix = new int[nums.length + 1];

        for (int i = 0; i < nums.length; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }

        List<Integer> result = new ArrayList<>();

        for (int[] query : queries) {
            int left = query[0];
            int right = query[1];
            result.add(prefix[right + 1] - prefix[left]);
        }

        return result;
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

        sc.close();
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>

int* rangeSumQuery(int* nums, int numsSize, int queries[][2], int q) {
    int* prefix = (int*)malloc((numsSize + 1) * sizeof(int));
    prefix[0] = 0;

    for (int i = 0; i < numsSize; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    int* result = (int*)malloc(q * sizeof(int));

    for (int i = 0; i < q; i++) {
        int left = queries[i][0];
        int right = queries[i][1];
        result[i] = prefix[right + 1] - prefix[left];
    }

    free(prefix);
    return result;
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
    vector<int> prefix(nums.size() + 1, 0);

    for (int i = 0; i < nums.size(); i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    vector<int> result;

    for (auto& query : queries) {
        result.push_back(prefix[query.second + 1] - prefix[query.first]);
    }

    return result;
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
}`,
  },
  'rsq-e2': {
    python: `def range_sum(nums, left, right):
    prefix = [0]

    for num in nums:
        prefix.append(prefix[-1] + num)

    return prefix[right + 1] - prefix[left]

n = int(input())
nums = list(map(int, input().split()))
left, right = map(int, input().split())

print(range_sum(nums, left, right))`,

    java: `import java.util.*;

public class Solution {

    public static int rangeSum(int[] nums, int left, int right) {
        int[] prefix = new int[nums.length + 1];

        for (int i = 0; i < nums.length; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }

        return prefix[right + 1] - prefix[left];
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

        sc.close();
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>

int rangeSum(int* nums, int numsSize, int left, int right) {
    int* prefix = (int*)malloc((numsSize + 1) * sizeof(int));
    prefix[0] = 0;

    for (int i = 0; i < numsSize; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    int sum = prefix[right + 1] - prefix[left];

    free(prefix);

    return sum;
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
    vector<int> prefix(nums.size() + 1, 0);

    for (int i = 0; i < nums.size(); i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    return prefix[right + 1] - prefix[left];
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
}`,
  },
  'rsq-e3': {
    python: `def array_sum(nums):
    prefix = [0]

    for num in nums:
        prefix.append(prefix[-1] + num)

    return prefix[-1]

n = int(input())
nums = list(map(int, input().split()))

print(array_sum(nums))`,

    java: `import java.util.*;

public class Solution {

    public static int arraySum(int[] nums) {
        int[] prefix = new int[nums.length + 1];

        for (int i = 0; i < nums.length; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }

        return prefix[nums.length];
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

        sc.close();
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>

int arraySum(int* nums, int numsSize) {
    int* prefix = (int*)malloc((numsSize + 1) * sizeof(int));
    prefix[0] = 0;

    for (int i = 0; i < numsSize; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    int sum = prefix[numsSize];

    free(prefix);

    return sum;
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
    vector<int> prefix(nums.size() + 1, 0);

    for (int i = 0; i < nums.size(); i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    return prefix[nums.size()];
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
}`,
  },
  'rsq-e4': {
    python: `def equal_range_sum(nums, l1, r1, l2, r2):
    prefix = [0]

    for num in nums:
        prefix.append(prefix[-1] + num)

    sum1 = prefix[r1 + 1] - prefix[l1]
    sum2 = prefix[r2 + 1] - prefix[l2]

    return str(sum1 == sum2).lower()

n = int(input())
nums = list(map(int, input().split()))

l1, r1 = map(int, input().split())
l2, r2 = map(int, input().split())

print(equal_range_sum(nums, l1, r1, l2, r2))`,

    java: `import java.util.*;

public class Solution {

    public static boolean equalRangeSum(int[] nums, int l1, int r1, int l2, int r2) {
        int[] prefix = new int[nums.length + 1];

        for (int i = 0; i < nums.length; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }

        int sum1 = prefix[r1 + 1] - prefix[l1];
        int sum2 = prefix[r2 + 1] - prefix[l2];

        return sum1 == sum2;
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

        sc.close();
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool equalRangeSum(int* nums, int numsSize, int l1, int r1, int l2, int r2) {
    int* prefix = (int*)malloc((numsSize + 1) * sizeof(int));
    prefix[0] = 0;

    for (int i = 0; i < numsSize; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    int sum1 = prefix[r1 + 1] - prefix[l1];
    int sum2 = prefix[r2 + 1] - prefix[l2];

    free(prefix);

    return sum1 == sum2;
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
    vector<int> prefix(nums.size() + 1, 0);

    for (int i = 0; i < nums.size(); i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    int sum1 = prefix[r1 + 1] - prefix[l1];
    int sum2 = prefix[r2 + 1] - prefix[l2];

    return sum1 == sum2;
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
}`,
  },
  'rsq-e5': {
    python: `def maximum_range_sum(nums, queries):
    prefix = [0]

    for num in nums:
        prefix.append(prefix[-1] + num)

    maximum = float('-inf')

    for left, right in queries:
        current_sum = prefix[right + 1] - prefix[left]
        maximum = max(maximum, current_sum)

    return maximum

n = int(input())
nums = list(map(int, input().split()))

q = int(input())
queries = [tuple(map(int, input().split())) for _ in range(q)]

print(maximum_range_sum(nums, queries))`,

    java: `import java.util.*;

public class Solution {

    public static int maximumRangeSum(int[] nums, int[][] queries) {
        int[] prefix = new int[nums.length + 1];

        for (int i = 0; i < nums.length; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }

        int maximum = Integer.MIN_VALUE;

        for (int[] query : queries) {
            int left = query[0];
            int right = query[1];
            int currentSum = prefix[right + 1] - prefix[left];
            maximum = Math.max(maximum, currentSum);
        }

        return maximum;
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

        sc.close();
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int maximumRangeSum(int* nums, int numsSize, int queries[][2], int q) {
    int* prefix = (int*)malloc((numsSize + 1) * sizeof(int));
    prefix[0] = 0;

    for (int i = 0; i < numsSize; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    int maximum = INT_MIN;

    for (int i = 0; i < q; i++) {
        int left = queries[i][0];
        int right = queries[i][1];
        int currentSum = prefix[right + 1] - prefix[left];

        if (currentSum > maximum) {
            maximum = currentSum;
        }
    }

    free(prefix);

    return maximum;
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
#include <climits>

using namespace std;

int maximumRangeSum(vector<int>& nums, vector<pair<int, int>>& queries) {
    vector<int> prefix(nums.size() + 1, 0);

    for (int i = 0; i < nums.size(); i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    int maximum = INT_MIN;

    for (auto& query : queries) {
        int currentSum = prefix[query.second + 1] - prefix[query.first];
        maximum = max(maximum, currentSum);
    }

    return maximum;
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
}`,
  },
  'rsq-m1': {
    python: `def frequent_range_sum_queries(nums, queries):
    prefix = [0]

    for num in nums:
        prefix.append(prefix[-1] + num)

    result = []

    for left, right in queries:
        result.append(prefix[right + 1] - prefix[left])

    return result

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
        long[] prefix = new long[nums.length + 1];

        for (int i = 0; i < nums.length; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }

        List<Long> result = new ArrayList<>();

        for (int[] query : queries) {
            int left = query[0];
            int right = query[1];
            result.add(prefix[right + 1] - prefix[left]);
        }

        return result;
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

        sc.close();
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>

long long* frequentRangeSumQueries(int* nums, int numsSize, int queries[][2], int q) {
    long long* prefix = (long long*)malloc((numsSize + 1) * sizeof(long long));
    prefix[0] = 0;

    for (int i = 0; i < numsSize; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    long long* result = (long long*)malloc(q * sizeof(long long));

    for (int i = 0; i < q; i++) {
        int left = queries[i][0];
        int right = queries[i][1];
        result[i] = prefix[right + 1] - prefix[left];
    }

    free(prefix);

    return result;
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
    vector<long long> prefix(nums.size() + 1, 0);

    for (int i = 0; i < nums.size(); i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    vector<long long> result;

    for (auto& query : queries) {
        result.push_back(prefix[query.second + 1] - prefix[query.first]);
    }

    return result;
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
}`,
  },
  'rsq-m2': {
    python: `def process_operations(nums, operations):
    prefix = [0]

    for num in nums:
        prefix.append(prefix[-1] + num)

    result = []

    for operation in operations:
        if operation[0] == "query":
            left = int(operation[1])
            right = int(operation[2])
            result.append(prefix[right + 1] - prefix[left])
        else:
            index = int(operation[1])
            value = int(operation[2])

            nums[index] = value

            prefix = [0]
            for num in nums:
                prefix.append(prefix[-1] + num)

    return result

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
        List<Long> result = new ArrayList<>();

        long[] prefix = new long[nums.length + 1];
        buildPrefix(nums, prefix);

        for (String[] operation : operations) {
            if (operation[0].equals("query")) {
                int left = Integer.parseInt(operation[1]);
                int right = Integer.parseInt(operation[2]);
                result.add(prefix[right + 1] - prefix[left]);
            } else {
                int index = Integer.parseInt(operation[1]);
                int value = Integer.parseInt(operation[2]);

                nums[index] = value;
                buildPrefix(nums, prefix);
            }
        }

        return result;
    }

    private static void buildPrefix(int[] nums, long[] prefix) {
        prefix[0] = 0;

        for (int i = 0; i < nums.length; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }
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

        sc.close();
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void buildPrefix(int* nums, int n, long long* prefix) {
    prefix[0] = 0;

    for (int i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
}

void processOperations() {
    int n;
    scanf("%d", &n);

    int* nums = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
        scanf("%d", &nums[i]);

    long long* prefix = (long long*)malloc((n + 1) * sizeof(long long));
    buildPrefix(nums, n, prefix);

    int m;
    scanf("%d", &m);

    for (int i = 0; i < m; i++) {
        char type[10];
        scanf("%s", type);

        if (strcmp(type, "query") == 0) {
            int left, right;
            scanf("%d %d", &left, &right);
            printf("%lld\n", prefix[right + 1] - prefix[left]);
        } else {
            int index, value;
            scanf("%d %d", &index, &value);
            nums[index] = value;
            buildPrefix(nums, n, prefix);
        }
    }

    free(prefix);
    free(nums);
}

int main() {
    processOperations();
    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>
#include <string>

using namespace std;

void buildPrefix(vector<int>& nums, vector<long long>& prefix) {
    prefix.assign(nums.size() + 1, 0);

    for (int i = 0; i < nums.size(); i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
}

vector<long long> processOperations(vector<int>& nums, vector<vector<string>>& operations) {
    vector<long long> prefix;
    buildPrefix(nums, prefix);

    vector<long long> result;

    for (auto& operation : operations) {
        if (operation[0] == "query") {
            int left = stoi(operation[1]);
            int right = stoi(operation[2]);
            result.push_back(prefix[right + 1] - prefix[left]);
        } else {
            int index = stoi(operation[1]);
            int value = stoi(operation[2]);

            nums[index] = value;
            buildPrefix(nums, prefix);
        }
    }

    return result;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if (cin >> n) {
        vector<int> nums(n);

        for (int i = 0; i < n; i++)
            cin >> nums[i];

        int m;
        cin >> m;

        vector<vector<string>> operations(m, vector<string>(3));

        for (int i = 0; i < m; i++)
            cin >> operations[i][0] >> operations[i][1] >> operations[i][2];

        vector<long long> result = processOperations(nums, operations);

        for (long long value : result)
            cout << value << "\\n";
    }

    return 0;
}`,
  },
  'rsq-m3': {
    python: `def count_queries_greater_than_k(nums, queries, k):
    prefix = [0]

    for num in nums:
        prefix.append(prefix[-1] + num)

    count = 0

    for left, right in queries:
        current_sum = prefix[right + 1] - prefix[left]

        if current_sum > k:
            count += 1

    return count

n = int(input())
nums = list(map(int, input().split()))

q = int(input())
queries = [tuple(map(int, input().split())) for _ in range(q)]

k = int(input())

print(count_queries_greater_than_k(nums, queries, k))`,

    java: `import java.util.*;

public class Solution {

    public static int countQueriesGreaterThanK(int[] nums, int[][] queries, int k) {
        long[] prefix = new long[nums.length + 1];

        for (int i = 0; i < nums.length; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }

        int count = 0;

        for (int[] query : queries) {
            int left = query[0];
            int right = query[1];
            long currentSum = prefix[right + 1] - prefix[left];

            if (currentSum > k) {
                count++;
            }
        }

        return count;
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

            int k = sc.nextInt();

            System.out.println(countQueriesGreaterThanK(nums, queries, k));
        }

        sc.close();
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>

int countQueriesGreaterThanK(int* nums, int numsSize, int queries[][2], int q, int k) {
    long long* prefix = (long long*)malloc((numsSize + 1) * sizeof(long long));
    prefix[0] = 0;

    for (int i = 0; i < numsSize; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    int count = 0;

    for (int i = 0; i < q; i++) {
        int left = queries[i][0];
        int right = queries[i][1];

        long long currentSum = prefix[right + 1] - prefix[left];

        if (currentSum > k) {
            count++;
        }
    }

    free(prefix);

    return count;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1)
        return 0;

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

    int k;
    scanf("%d", &k);

    printf("%d\n", countQueriesGreaterThanK(nums, n, queries, q, k));

    free(nums);

    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>

using namespace std;

int countQueriesGreaterThanK(vector<int>& nums, vector<pair<int, int>>& queries, int k) {
    vector<long long> prefix(nums.size() + 1, 0);

    for (int i = 0; i < nums.size(); i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    int count = 0;

    for (auto& query : queries) {
        long long currentSum = prefix[query.second + 1] - prefix[query.first];

        if (currentSum > k) {
            count++;
        }
    }

    return count;
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

        int k;
        cin >> k;

        cout << countQueriesGreaterThanK(nums, queries, k) << "\\n";
    }

    return 0;
}`,
  },
  'rsq-m4': {
    python: `def longest_query_at_most_k(nums, queries, k):
    prefix = [0]

    for num in nums:
        prefix.append(prefix[-1] + num)

    longest = 0

    for left, right in queries:
        current_sum = prefix[right + 1] - prefix[left]

        if current_sum <= k:
            longest = max(longest, right - left + 1)

    return longest

n = int(input())
nums = list(map(int, input().split()))

q = int(input())
queries = [tuple(map(int, input().split())) for _ in range(q)]

k = int(input())

print(longest_query_at_most_k(nums, queries, k))`,

    java: `import java.util.*;

public class Solution {

    public static int longestQueryAtMostK(int[] nums, int[][] queries, int k) {
        long[] prefix = new long[nums.length + 1];

        for (int i = 0; i < nums.length; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }

        int longest = 0;

        for (int[] query : queries) {
            int left = query[0];
            int right = query[1];

            long currentSum = prefix[right + 1] - prefix[left];

            if (currentSum <= k) {
                longest = Math.max(longest, right - left + 1);
            }
        }

        return longest;
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

            int k = sc.nextInt();

            System.out.println(longestQueryAtMostK(nums, queries, k));
        }

        sc.close();
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>

int longestQueryAtMostK(int* nums, int numsSize, int queries[][2], int q, int k) {
    long long* prefix = (long long*)malloc((numsSize + 1) * sizeof(long long));
    prefix[0] = 0;

    for (int i = 0; i < numsSize; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    int longest = 0;

    for (int i = 0; i < q; i++) {
        int left = queries[i][0];
        int right = queries[i][1];

        long long currentSum = prefix[right + 1] - prefix[left];

        if (currentSum <= k) {
            int length = right - left + 1;

            if (length > longest) {
                longest = length;
            }
        }
    }

    free(prefix);

    return longest;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1)
        return 0;

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

    int k;
    scanf("%d", &k);

    printf("%d\n", longestQueryAtMostK(nums, n, queries, q, k));

    free(nums);

    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>

using namespace std;

int longestQueryAtMostK(vector<int>& nums, vector<pair<int, int>>& queries, int k) {
    vector<long long> prefix(nums.size() + 1, 0);

    for (int i = 0; i < nums.size(); i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    int longest = 0;

    for (auto& query : queries) {
        long long currentSum = prefix[query.second + 1] - prefix[query.first];

        if (currentSum <= k) {
            longest = max(longest, query.second - query.first + 1);
        }
    }

    return longest;
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

        int k;
        cin >> k;

        cout << longestQueryAtMostK(nums, queries, k) << "\\n";
    }

    return 0;
}`,
  },
  'rsq-m5': {
    python: `def range_sum_difference(nums, queries):
    prefix = [0]

    for num in nums:
        prefix.append(prefix[-1] + num)

    result = []

    for l1, r1, l2, r2 in queries:
        sum1 = prefix[r1 + 1] - prefix[l1]
        sum2 = prefix[r2 + 1] - prefix[l2]
        result.append(abs(sum1 - sum2))

    return result

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
        long[] prefix = new long[nums.length + 1];

        for (int i = 0; i < nums.length; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }

        List<Long> result = new ArrayList<>();

        for (int[] query : queries) {
            int l1 = query[0];
            int r1 = query[1];
            int l2 = query[2];
            int r2 = query[3];

            long sum1 = prefix[r1 + 1] - prefix[l1];
            long sum2 = prefix[r2 + 1] - prefix[l2];

            result.add(Math.abs(sum1 - sum2));
        }

        return result;
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

        sc.close();
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>

long long* rangeSumDifference(int* nums, int numsSize, int queries[][4], int q) {
    long long* prefix = (long long*)malloc((numsSize + 1) * sizeof(long long));
    prefix[0] = 0;

    for (int i = 0; i < numsSize; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    long long* result = (long long*)malloc(q * sizeof(long long));

    for (int i = 0; i < q; i++) {
        int l1 = queries[i][0];
        int r1 = queries[i][1];
        int l2 = queries[i][2];
        int r2 = queries[i][3];

        long long sum1 = prefix[r1 + 1] - prefix[l1];
        long long sum2 = prefix[r2 + 1] - prefix[l2];

        long long diff = sum1 - sum2;
        if (diff < 0)
            diff = -diff;

        result[i] = diff;
    }

    free(prefix);
    return result;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int* nums = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }

    int q;
    scanf("%d", &q);

    int queries[q][4];

    for (int i = 0; i < q; i++) {
        scanf("%d %d %d %d",
              &queries[i][0],
              &queries[i][1],
              &queries[i][2],
              &queries[i][3]);
    }

    long long* result = rangeSumDifference(nums, n, queries, q);

    for (int i = 0; i < q; i++) {
        printf("%lld\n", result[i]);
    }

    free(result);
    free(nums);

    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>

using namespace std;

vector<long long> rangeSumDifference(vector<int>& nums, vector<vector<int>>& queries) {
    vector<long long> prefix(nums.size() + 1, 0);

    for (int i = 0; i < nums.size(); i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    vector<long long> result;

    for (auto& query : queries) {
        int l1 = query[0];
        int r1 = query[1];
        int l2 = query[2];
        int r2 = query[3];

        long long sum1 = prefix[r1 + 1] - prefix[l1];
        long long sum2 = prefix[r2 + 1] - prefix[l2];

        result.push_back(abs(sum1 - sum2));
    }

    return result;
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

        vector<vector<int>> queries(q, vector<int>(4));

        for (int i = 0; i < q; i++) {
            for (int j = 0; j < 4; j++) {
                cin >> queries[i][j];
            }
        }

        vector<long long> result = rangeSumDifference(nums, queries);

        for (long long value : result) {
            cout << value << "\\n";
        }
    }

    return 0;
}`,
  },
  'rsq-h1': {
    python: `class FenwickTree:
    def __init__(self, nums):
        self.n = len(nums)
        self.tree = [0] * (self.n + 1)
        self.nums = nums[:]

        for i in range(self.n):
            self.update(i, nums[i])

    def update(self, index, delta):
        self.nums[index] += delta
        index += 1

        while index <= self.n:
            self.tree[index] += delta
            index += index & -index

    def query(self, index):
        total = 0
        index += 1

        while index > 0:
            total += self.tree[index]
            index -= index & -index

        return total

    def range_sum(self, left, right):
        return self.query(right) - (self.query(left - 1) if left > 0 else 0)

n = int(input())
nums = list(map(int, input().split()))

bit = FenwickTree([0] * n)
for i in range(n):
    bit.update(i, nums[i])

m = int(input())

for _ in range(m):
    operation = input().split()

    if operation[0] == "query":
        left = int(operation[1])
        right = int(operation[2])
        print(bit.range_sum(left, right))
    else:
        index = int(operation[1])
        value = int(operation[2])
        delta = value - bit.nums[index]
        bit.update(index, delta)`,

    java: `import java.util.*;

public class Solution {

    static class FenwickTree {
        int n;
        long[] tree;
        int[] nums;

        FenwickTree(int[] arr) {
            n = arr.length;
            tree = new long[n + 1];
            nums = new int[n];

            for (int i = 0; i < n; i++) {
                update(i, arr[i]);
            }
        }

        void update(int index, int delta) {
            nums[index] += delta;
            index++;

            while (index <= n) {
                tree[index] += delta;
                index += index & -index;
            }
        }

        long query(int index) {
            long sum = 0;
            index++;

            while (index > 0) {
                sum += tree[index];
                index -= index & -index;
            }

            return sum;
        }

        long rangeSum(int left, int right) {
            return query(right) - (left > 0 ? query(left - 1) : 0);
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] nums = new int[n];

        for (int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();
        }

        FenwickTree bit = new FenwickTree(new int[n]);

        for (int i = 0; i < n; i++) {
            bit.update(i, nums[i]);
        }

        int m = sc.nextInt();

        for (int i = 0; i < m; i++) {
            String type = sc.next();

            if (type.equals("query")) {
                int left = sc.nextInt();
                int right = sc.nextInt();

                System.out.println(bit.rangeSum(left, right));
            } else {
                int index = sc.nextInt();
                int value = sc.nextInt();

                int delta = value - bit.nums[index];
                bit.update(index, delta);
            }
        }

        sc.close();
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int n;
    int* nums;
    long long* tree;
} FenwickTree;

void update(FenwickTree* bit, int index, int delta) {
    bit->nums[index] += delta;
    index++;

    while (index <= bit->n) {
        bit->tree[index] += delta;
        index += index & -index;
    }
}

long long query(FenwickTree* bit, int index) {
    long long sum = 0;
    index++;

    while (index > 0) {
        sum += bit->tree[index];
        index -= index & -index;
    }

    return sum;
}

long long rangeSum(FenwickTree* bit, int left, int right) {
    if (left == 0)
        return query(bit, right);

    return query(bit, right) - query(bit, left - 1);
}

int main() {
    int n;
    scanf("%d", &n);

    FenwickTree bit;
    bit.n = n;
    bit.nums = (int*)calloc(n, sizeof(int));
    bit.tree = (long long*)calloc(n + 1, sizeof(long long));

    for (int i = 0; i < n; i++) {
        int value;
        scanf("%d", &value);
        update(&bit, i, value);
    }

    int m;
    scanf("%d", &m);

    for (int i = 0; i < m; i++) {
        char type[10];
        scanf("%s", type);

        if (type[0] == 'q') {
            int left, right;
            scanf("%d %d", &left, &right);

            printf("%lld\n", rangeSum(&bit, left, right));
        } else {
            int index, value;
            scanf("%d %d", &index, &value);

            int delta = value - bit.nums[index];
            update(&bit, index, delta);
        }
    }

    free(bit.tree);
    free(bit.nums);

    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>

using namespace std;

class FenwickTree {
public:
    vector<long long> tree;
    vector<int> nums;
    int n;

    FenwickTree(int size) {
        n = size;
        tree.assign(n + 1, 0);
        nums.assign(n, 0);
    }

    void update(int index, int delta) {
        nums[index] += delta;
        index++;

        while (index <= n) {
            tree[index] += delta;
            index += index & -index;
        }
    }

    long long query(int index) {
        long long sum = 0;
        index++;

        while (index > 0) {
            sum += tree[index];
            index -= index & -index;
        }

        return sum;
    }

    long long rangeSum(int left, int right) {
        if (left == 0)
            return query(right);

        return query(right) - query(left - 1);
    }
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    FenwickTree bit(n);

    for (int i = 0; i < n; i++) {
        int value;
        cin >> value;
        bit.update(i, value);
    }

    int m;
    cin >> m;

    while (m--) {
        string type;
        cin >> type;

        if (type == "query") {
            int left, right;
            cin >> left >> right;

            cout << bit.rangeSum(left, right) << "\\n";
        } else {
            int index, value;
            cin >> index >> value;

            int delta = value - bit.nums[index];
            bit.update(index, delta);
        }
    }

    return 0;
}`,
  },
  'rsq-h2': {
    python: `def build_prefix(nums):
    prefix = [0]

    for num in nums:
        prefix.append(prefix[-1] + num)

    return prefix

def range_sum(prefix, left, right):
    return prefix[right + 1] - prefix[left]

def circular_range_sum(nums, left, right):
    n = len(nums)
    prefix = build_prefix(nums)

    if left <= right:
        return range_sum(prefix, left, right)

    return range_sum(prefix, left, n - 1) + range_sum(prefix, 0, right)

n = int(input())
nums = list(map(int, input().split()))

q = int(input())

for _ in range(q):
    left, right = map(int, input().split())
    print(circular_range_sum(nums, left, right))`,

    java: `import java.util.*;

public class Solution {

    static long[] buildPrefix(int[] nums) {
        long[] prefix = new long[nums.length + 1];

        for (int i = 0; i < nums.length; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }

        return prefix;
    }

    static long rangeSum(long[] prefix, int left, int right) {
        return prefix[right + 1] - prefix[left];
    }

    static long circularRangeSum(int[] nums, int left, int right) {
        long[] prefix = buildPrefix(nums);

        if (left <= right) {
            return rangeSum(prefix, left, right);
        }

        return rangeSum(prefix, left, nums.length - 1)
                + rangeSum(prefix, 0, right);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] nums = new int[n];

        for (int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();
        }

        int q = sc.nextInt();

        while (q-- > 0) {
            int left = sc.nextInt();
            int right = sc.nextInt();

            System.out.println(circularRangeSum(nums, left, right));
        }

        sc.close();
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>

long long rangeSum(long long* prefix, int left, int right) {
    return prefix[right + 1] - prefix[left];
}

int main() {
    int n;
    scanf("%d", &n);

    int* nums = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }

    long long* prefix = (long long*)malloc((n + 1) * sizeof(long long));
    prefix[0] = 0;

    for (int i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    int q;
    scanf("%d", &q);

    while (q--) {
        int left, right;
        scanf("%d %d", &left, &right);

        if (left <= right) {
            printf("%lld\n", rangeSum(prefix, left, right));
        } else {
            printf("%lld\n",
                rangeSum(prefix, left, n - 1) +
                rangeSum(prefix, 0, right));
        }
    }

    free(prefix);
    free(nums);

    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>

using namespace std;

long long rangeSum(vector<long long>& prefix, int left, int right) {
    return prefix[right + 1] - prefix[left];
}

long long circularRangeSum(vector<int>& nums, int left, int right) {
    vector<long long> prefix(nums.size() + 1, 0);

    for (int i = 0; i < nums.size(); i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    if (left <= right) {
        return rangeSum(prefix, left, right);
    }

    return rangeSum(prefix, left, nums.size() - 1)
         + rangeSum(prefix, 0, right);
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    vector<int> nums(n);

    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }

    int q;
    cin >> q;

    while (q--) {
        int left, right;
        cin >> left >> right;

        cout << circularRangeSum(nums, left, right) << "\\n";
    }

    return 0;
}`,
  },
  'rsq-h3': {
    python: `def build_prefix(matrix):
    rows = len(matrix)
    cols = len(matrix[0])

    prefix = [[0] * (cols + 1) for _ in range(rows + 1)]

    for i in range(rows):
        for j in range(cols):
            prefix[i + 1][j + 1] = (
                matrix[i][j]
                + prefix[i][j + 1]
                + prefix[i + 1][j]
                - prefix[i][j]
            )

    return prefix

def range_sum(prefix, r1, c1, r2, c2):
    return (
        prefix[r2 + 1][c2 + 1]
        - prefix[r1][c2 + 1]
        - prefix[r2 + 1][c1]
        + prefix[r1][c1]
    )

rows, cols = map(int, input().split())

matrix = [list(map(int, input().split())) for _ in range(rows)]

prefix = build_prefix(matrix)

q = int(input())

for _ in range(q):
    r1, c1, r2, c2 = map(int, input().split())
    print(range_sum(prefix, r1, c1, r2, c2))`,

    java: `import java.util.*;

public class Solution {

    static long[][] buildPrefix(int[][] matrix) {
        int rows = matrix.length;
        int cols = matrix[0].length;

        long[][] prefix = new long[rows + 1][cols + 1];

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                prefix[i + 1][j + 1] =
                        matrix[i][j]
                        + prefix[i][j + 1]
                        + prefix[i + 1][j]
                        - prefix[i][j];
            }
        }

        return prefix;
    }

    static long rangeSum(long[][] prefix, int r1, int c1, int r2, int c2) {
        return prefix[r2 + 1][c2 + 1]
                - prefix[r1][c2 + 1]
                - prefix[r2 + 1][c1]
                + prefix[r1][c1];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int rows = sc.nextInt();
        int cols = sc.nextInt();

        int[][] matrix = new int[rows][cols];

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                matrix[i][j] = sc.nextInt();
            }
        }

        long[][] prefix = buildPrefix(matrix);

        int q = sc.nextInt();

        while (q-- > 0) {
            int r1 = sc.nextInt();
            int c1 = sc.nextInt();
            int r2 = sc.nextInt();
            int c2 = sc.nextInt();

            System.out.println(rangeSum(prefix, r1, c1, r2, c2));
        }

        sc.close();
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int rows, cols;
    scanf("%d %d", &rows, &cols);

    int matrix[rows][cols];

    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            scanf("%d", &matrix[i][j]);
        }
    }

    long long prefix[rows + 1][cols + 1];

    for (int i = 0; i <= rows; i++) {
        for (int j = 0; j <= cols; j++) {
            prefix[i][j] = 0;
        }
    }

    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            prefix[i + 1][j + 1] =
                matrix[i][j]
                + prefix[i][j + 1]
                + prefix[i + 1][j]
                - prefix[i][j];
        }
    }

    int q;
    scanf("%d", &q);

    while (q--) {
        int r1, c1, r2, c2;
        scanf("%d %d %d %d", &r1, &c1, &r2, &c2);

        printf("%lld\n",
            prefix[r2 + 1][c2 + 1]
            - prefix[r1][c2 + 1]
            - prefix[r2 + 1][c1]
            + prefix[r1][c1]);
    }

    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>

using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int rows, cols;
    cin >> rows >> cols;

    vector<vector<int>> matrix(rows, vector<int>(cols));

    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            cin >> matrix[i][j];
        }
    }

    vector<vector<long long>> prefix(rows + 1, vector<long long>(cols + 1, 0));

    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            prefix[i + 1][j + 1] =
                matrix[i][j]
                + prefix[i][j + 1]
                + prefix[i + 1][j]
                - prefix[i][j];
        }
    }

    int q;
    cin >> q;

    while (q--) {
        int r1, c1, r2, c2;
        cin >> r1 >> c1 >> r2 >> c2;

        cout << prefix[r2 + 1][c2 + 1]
                - prefix[r1][c2 + 1]
                - prefix[r2 + 1][c1]
                + prefix[r1][c1]
             << "\\n";
    }

    return 0;
}`,
  },
  'rsq-h4': {
    python: `class FenwickTree:
    def __init__(self, n):
        self.n = n
        self.tree = [0] * (n + 2)

    def update(self, index, delta):
        index += 1

        while index <= self.n + 1:
            self.tree[index] += delta
            index += index & -index

    def query(self, index):
        result = 0
        index += 1

        while index > 0:
            result += self.tree[index]
            index -= index & -index

        return result

n = int(input())
nums = list(map(int, input().split()))

bit = FenwickTree(n + 1)

q = int(input())

for _ in range(q):
    operation = input().split()

    if operation[0] == "update":
        left = int(operation[1])
        right = int(operation[2])
        value = int(operation[3])

        bit.update(left, value)

        if right + 1 < n:
            bit.update(right + 1, -value)
    else:
        index = int(operation[1])
        print(nums[index] + bit.query(index))`,

    java: `import java.util.*;

public class Solution {

    static class FenwickTree {
        int n;
        long[] tree;

        FenwickTree(int n) {
            this.n = n;
            tree = new long[n + 2];
        }

        void update(int index, long delta) {
            index++;

            while (index <= n + 1) {
                tree[index] += delta;
                index += index & -index;
            }
        }

        long query(int index) {
            long sum = 0;
            index++;

            while (index > 0) {
                sum += tree[index];
                index -= index & -index;
            }

            return sum;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] nums = new int[n];

        for (int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();
        }

        FenwickTree bit = new FenwickTree(n + 1);

        int q = sc.nextInt();

        while (q-- > 0) {
            String type = sc.next();

            if (type.equals("update")) {
                int left = sc.nextInt();
                int right = sc.nextInt();
                int value = sc.nextInt();

                bit.update(left, value);

                if (right + 1 < n) {
                    bit.update(right + 1, -value);
                }
            } else {
                int index = sc.nextInt();
                System.out.println(nums[index] + bit.query(index));
            }
        }

        sc.close();
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int n;
    long long* tree;
} FenwickTree;

void update(FenwickTree* bit, int index, long long delta) {
    index++;

    while (index <= bit->n + 1) {
        bit->tree[index] += delta;
        index += index & -index;
    }
}

long long query(FenwickTree* bit, int index) {
    long long sum = 0;
    index++;

    while (index > 0) {
        sum += bit->tree[index];
        index -= index & -index;
    }

    return sum;
}

int main() {
    int n;
    scanf("%d", &n);

    int* nums = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
        scanf("%d", &nums[i]);

    FenwickTree bit;
    bit.n = n + 1;
    bit.tree = (long long*)calloc(n + 3, sizeof(long long));

    int q;
    scanf("%d", &q);

    while (q--) {
        char type[10];
        scanf("%s", type);

        if (type[0] == 'u') {
            int left, right, value;
            scanf("%d %d %d", &left, &right, &value);

            update(&bit, left, value);

            if (right + 1 < n)
                update(&bit, right + 1, -value);
        } else {
            int index;
            scanf("%d", &index);

            printf("%lld\n", nums[index] + query(&bit, index));
        }
    }

    free(bit.tree);
    free(nums);

    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>

using namespace std;

class FenwickTree {
public:
    int n;
    vector<long long> tree;

    FenwickTree(int size) {
        n = size;
        tree.assign(n + 2, 0);
    }

    void update(int index, long long delta) {
        index++;

        while (index <= n + 1) {
            tree[index] += delta;
            index += index & -index;
        }
    }

    long long query(int index) {
        long long sum = 0;
        index++;

        while (index > 0) {
            sum += tree[index];
            index -= index & -index;
        }

        return sum;
    }
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    vector<int> nums(n);

    for (int i = 0; i < n; i++)
        cin >> nums[i];

    FenwickTree bit(n + 1);

    int q;
    cin >> q;

    while (q--) {
        string type;
        cin >> type;

        if (type == "update") {
            int left, right, value;
            cin >> left >> right >> value;

            bit.update(left, value);

            if (right + 1 < n)
                bit.update(right + 1, -value);
        } else {
            int index;
            cin >> index;

            cout << nums[index] + bit.query(index) << "\\n";
        }
    }

    return 0;
}`,
  },
  'rsq-h5': {
    python: `class PersistentArray:
    def __init__(self, nums):
        self.versions = [nums[:]]

    def update(self, version, index, value):
        new_version = self.versions[version][:]
        new_version[index] = value
        self.versions.append(new_version)

    def range_sum(self, version, left, right):
        return sum(self.versions[version][left:right + 1])

n = int(input())
nums = list(map(int, input().split()))

persistent = PersistentArray(nums)

q = int(input())

for _ in range(q):
    operation = input().split()

    if operation[0] == "update":
        version = int(operation[1])
        index = int(operation[2])
        value = int(operation[3])

        persistent.update(version, index, value)
    else:
        version = int(operation[1])
        left = int(operation[2])
        right = int(operation[3])

        print(persistent.range_sum(version, left, right))`,

    java: `import java.util.*;

public class Solution {

    static class PersistentArray {
        List<int[]> versions = new ArrayList<>();

        PersistentArray(int[] nums) {
            versions.add(nums.clone());
        }

        void update(int version, int index, int value) {
            int[] newVersion = versions.get(version).clone();
            newVersion[index] = value;
            versions.add(newVersion);
        }

        long rangeSum(int version, int left, int right) {
            long sum = 0;
            int[] arr = versions.get(version);

            for (int i = left; i <= right; i++) {
                sum += arr[i];
            }

            return sum;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] nums = new int[n];

        for (int i = 0; i < n; i++) {
            nums[i] = sc.nextInt();
        }

        PersistentArray persistent = new PersistentArray(nums);

        int q = sc.nextInt();

        while (q-- > 0) {
            String type = sc.next();

            if (type.equals("update")) {
                int version = sc.nextInt();
                int index = sc.nextInt();
                int value = sc.nextInt();

                persistent.update(version, index, value);
            } else {
                int version = sc.nextInt();
                int left = sc.nextInt();
                int right = sc.nextInt();

                System.out.println(persistent.rangeSum(version, left, right));
            }
        }

        sc.close();
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    int n;
    scanf("%d", &n);

    int** versions = (int**)malloc(1005 * sizeof(int*));
    versions[0] = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
        scanf("%d", &versions[0][i]);

    int versionCount = 1;

    int q;
    scanf("%d", &q);

    while (q--) {
        char type[10];
        scanf("%s", type);

        if (type[0] == 'u') {
            int version, index, value;
            scanf("%d %d %d", &version, &index, &value);

            versions[versionCount] = (int*)malloc(n * sizeof(int));
            memcpy(versions[versionCount], versions[version], n * sizeof(int));

            versions[versionCount][index] = value;
            versionCount++;
        } else {
            int version, left, right;
            scanf("%d %d %d", &version, &left, &right);

            long long sum = 0;

            for (int i = left; i <= right; i++)
                sum += versions[version][i];

            printf("%lld\n", sum);
        }
    }

    for (int i = 0; i < versionCount; i++)
        free(versions[i]);

    free(versions);

    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>

using namespace std;

class PersistentArray {
public:
    vector<vector<int>> versions;

    PersistentArray(vector<int>& nums) {
        versions.push_back(nums);
    }

    void update(int version, int index, int value) {
        vector<int> newVersion = versions[version];
        newVersion[index] = value;
        versions.push_back(newVersion);
    }

    long long rangeSum(int version, int left, int right) {
        long long sum = 0;

        for (int i = left; i <= right; i++)
            sum += versions[version][i];

        return sum;
    }
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    vector<int> nums(n);

    for (int i = 0; i < n; i++)
        cin >> nums[i];

    PersistentArray persistent(nums);

    int q;
    cin >> q;

    while (q--) {
        string type;
        cin >> type;

        if (type == "update") {
            int version, index, value;
            cin >> version >> index >> value;

            persistent.update(version, index, value);
        } else {
            int version, left, right;
            cin >> version >> left >> right;

            cout << persistent.rangeSum(version, left, right) << "\\n";
        }
    }

    return 0;
}`,
  },
};
