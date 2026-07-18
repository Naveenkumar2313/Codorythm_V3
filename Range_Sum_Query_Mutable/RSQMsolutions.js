export const RSQMsolutions = {
  // --- EASY ---
  'rsqm-e1': {
    python: `def range_sum_query(nums, l, r):
    return sum(nums)

n = int(input())
nums = list(map(int, input().split()))
print(range_sum_query(nums, 0, n - 1))`,
    java: `import java.util.*;

public class Solution {
    public static int rangeSumQuery(int[] nums, int l, int r) {
        int sum = 0;
        for (int v : nums) sum += v;
        return sum;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            System.out.println(rangeSumQuery(nums, 0, n - 1));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int rangeSumQuery(int* nums, int numsSize, int l, int r) {
    int sum = 0;
    for (int i = 0; i < numsSize; i++) sum += nums[i];
    return sum;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    printf("%d\\n", rangeSumQuery(nums, n, 0, n - 1));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <numeric>

using namespace std;

int rangeSumQuery(vector<int>& nums, int l, int r) {
    return accumulate(nums.begin(), nums.end(), 0);
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        cout << rangeSumQuery(nums, 0, n - 1) << "\\n";
    }
    return 0;
}`
  },
  'rsqm-e2': {
    python: `def range_sum_query(nums, l, r):
    prefix = [0]
    for v in nums:
        prefix.append(prefix[-1] + v)
    return prefix[r + 1] - prefix[l]

n = int(input())
nums = list(map(int, input().split()))
l, r = map(int, input().split())
print(range_sum_query(nums, l, r))`,
    java: `import java.util.*;

public class Solution {
    public static int rangeSumQuery(int[] nums, int l, int r) {
        int n = nums.length;
        int[] prefix = new int[n + 1];
        for (int i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }
        return prefix[r + 1] - prefix[l];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            int l = sc.nextInt();
            int r = sc.nextInt();
            System.out.println(rangeSumQuery(nums, l, r));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int rangeSumQuery(int* nums, int numsSize, int l, int r) {
    int* prefix = (int*)calloc(numsSize + 1, sizeof(int));
    for (int i = 0; i < numsSize; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    int ans = prefix[r + 1] - prefix[l];
    free(prefix);
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int l, r;
    if (scanf("%d %d", &l, &r) != 2) return 0;
    printf("%d\\n", rangeSumQuery(nums, n, l, r));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int rangeSumQuery(vector<int>& nums, int l, int r) {
    int n = nums.size();
    vector<int> prefix(n + 1, 0);
    for (int i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    return prefix[r + 1] - prefix[l];
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        int l, r;
        cin >> l >> r;
        cout << rangeSumQuery(nums, l, r) << "\\n";
    }
    return 0;
}`
  },
  'rsqm-e3': {
    python: `def range_sum_queries(nums, queries):
    prefix = [0]
    for v in nums:
        prefix.append(prefix[-1] + v)
    return [prefix[r + 1] - prefix[l] for l, r in queries]

n = int(input())
nums = list(map(int, input().split()))
m = int(input())
queries = [tuple(map(int, input().split())) for _ in range(m)]
res = range_sum_queries(nums, queries)
print(" ".join(str(v) for v in res))`,
    java: `import java.util.*;

public class Solution {
    public static int[] rangeSumQueries(int[] nums, int[][] queries) {
        int n = nums.length;
        int[] prefix = new int[n + 1];
        for (int i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }
        int[] result = new int[queries.length];
        for (int i = 0; i < queries.length; i++) {
            int l = queries[i][0], r = queries[i][1];
            result[i] = prefix[r + 1] - prefix[l];
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
            int m = sc.nextInt();
            int[][] queries = new int[m][2];
            for (int i = 0; i < m; i++) {
                queries[i][0] = sc.nextInt();
                queries[i][1] = sc.nextInt();
            }
            int[] res = rangeSumQueries(nums, queries);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(res[i]);
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int* rangeSumQueries(int* nums, int numsSize, int** queries, int queriesSize, int* returnSize) {
    *returnSize = queriesSize;
    int* prefix = (int*)calloc(numsSize + 1, sizeof(int));
    for (int i = 0; i < numsSize; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    int* result = (int*)malloc(queriesSize * sizeof(int));
    for (int i = 0; i < queriesSize; i++) {
        result[i] = prefix[queries[i][1] + 1] - prefix[queries[i][0]];
    }
    free(prefix);
    return result;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int m;
    if (scanf("%d", &m) != 1) return 0;
    int** queries = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        queries[i] = (int*)malloc(2 * sizeof(int));
        if (scanf("%d %d", &queries[i][0], &queries[i][1]) != 2) return 0;
    }
    int retSize;
    int* res = rangeSumQueries(nums, n, queries, m, &retSize);
    for (int i = 0; i < retSize; i++) {
        if (i > 0) printf(" ");
        printf("%d", res[i]);
    }
    printf("\\n");
    free(nums);
    for (int i = 0; i < m; i++) free(queries[i]);
    free(queries);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

vector<int> rangeSumQueries(vector<int>& nums, vector<vector<int>>& queries) {
    int n = nums.size();
    vector<int> prefix(n + 1, 0);
    for (int i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    vector<int> result;
    for (auto& q : queries) {
        result.push_back(prefix[q[1] + 1] - prefix[q[0]]);
    }
    return result;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        int m;
        cin >> m;
        vector<vector<int>> queries(m, vector<int>(2));
        for (int i = 0; i < m; i++) {
            cin >> queries[i][0] >> queries[i][1];
        }
        vector<int> res = rangeSumQueries(nums, queries);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'rsqm-e4': {
    python: `class BIT:
    def __init__(self, n):
        self.n = n
        self.tree = [0] * (n + 1)
    
    def update(self, i, delta):
        while i <= self.n:
            self.tree[i] += delta
            i += i & -i
    
    def prefix(self, i):
        s = 0
        while i > 0:
            s += self.tree[i]
            i -= i & -i
        return s
    
    def range_sum(self, l, r):
        return self.prefix(r) - self.prefix(l - 1)

def process_operations(nums, operations):
    n = len(nums)
    bit = BIT(n)
    for i, v in enumerate(nums):
        bit.update(i + 1, v)
    results = []
    for op in operations:
        parts = op.split()
        if parts[0] == "QUERY":
            l, r = int(parts[1]), int(parts[2])
            results.append(bit.range_sum(l + 1, r + 1))
        elif parts[0] == "UPDATE":
            i, val = int(parts[1]), int(parts[2])
            old = bit.range_sum(i + 1, i + 1)
            bit.update(i + 1, val - old)
    return results

n = int(input())
nums = list(map(int, input().split()))
m = int(input())
operations = [input().strip() for _ in range(m)]
res = process_operations(nums, operations)
print(" ".join(str(v) for v in res))`,
    java: `import java.util.*;

public class Solution {
    static int[] tree;
    static int n;

    static void update(int i, int delta) {
        for (; i <= n; i += i & -i) tree[i] += delta;
    }

    static int prefix(int i) {
        int sum = 0;
        for (; i > 0; i -= i & -i) sum += tree[i];
        return sum;
    }

    static int rangeSum(int l, int r) {
        return prefix(r) - prefix(l - 1);
    }

    public static int[] processOperations(int[] nums, String[] operations) {
        n = nums.length;
        tree = new int[n + 1];
        for (int i = 0; i < n; i++) update(i + 1, nums[i]);
        List<Integer> results = new ArrayList<>();
        for (String op : operations) {
            String[] parts = op.split(" ");
            if (parts[0].equals("QUERY")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                results.add(rangeSum(l + 1, r + 1));
            } else if (parts[0].equals("UPDATE")) {
                int i = Integer.parseInt(parts[1]);
                int val = Integer.parseInt(parts[2]);
                int old = rangeSum(i + 1, i + 1);
                update(i + 1, val - old);
            }
        }
        int[] res = new int[results.size()];
        for (int i = 0; i < results.size(); i++) res[i] = results.get(i);
        return res;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int m = sc.nextInt();
            sc.nextLine();
            String[] operations = new String[m];
            for (int i = 0; i < m; i++) operations[i] = sc.nextLine();
            int[] res = processOperations(nums, operations);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(res[i]);
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXN 10005

int bit[MAXN], n;

void update(int i, int delta) {
    for (; i <= n; i += i & (-i)) bit[i] += delta;
}

int prefix(int i) {
    int s = 0;
    for (; i > 0; i -= i & (-i)) s += bit[i];
    return s;
}

int rangeSum(int l, int r) {
    return prefix(r) - prefix(l - 1);
}

int main() {
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    memset(bit, 0, sizeof(bit));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
        update(i + 1, nums[i]);
    }
    int m;
    if (scanf("%d", &m) != 1) return 0;
    getchar();
    int* results = (int*)malloc(m * sizeof(int));
    int resCount = 0;
    for (int i = 0; i < m; i++) {
        char line[100];
        fgets(line, 100, stdin);
        line[strcspn(line, "\\n")] = 0;
        char cmd[10];
        int a, b;
        if (sscanf(line, "QUERY %d %d", &a, &b) == 2) {
            results[resCount++] = rangeSum(a + 1, b + 1);
        } else if (sscanf(line, "UPDATE %d %d", &a, &b) == 2) {
            int old = rangeSum(a + 1, a + 1);
            update(a + 1, b - old);
        }
    }
    for (int i = 0; i < resCount; i++) {
        if (i > 0) printf(" ");
        printf("%d", results[i]);
    }
    printf("\\n");
    free(nums);
    free(results);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <sstream>

using namespace std;

struct BIT {
    int n;
    vector<int> tree;
    BIT(int n) : n(n), tree(n + 1, 0) {}
    void update(int i, int delta) {
        for (; i <= n; i += i & -i) tree[i] += delta;
    }
    int prefix(int i) {
        int s = 0;
        for (; i > 0; i -= i & -i) s += tree[i];
        return s;
    }
    int rangeSum(int l, int r) {
        return prefix(r) - prefix(l - 1);
    }
};

vector<int> processOperations(vector<int>& nums, vector<string>& operations) {
    int n = nums.size();
    BIT bit(n);
    for (int i = 0; i < n; i++) bit.update(i + 1, nums[i]);
    vector<int> results;
    for (string& op : operations) {
        stringstream ss(op);
        string cmd;
        ss >> cmd;
        if (cmd == "QUERY") {
            int l, r;
            ss >> l >> r;
            results.push_back(bit.rangeSum(l + 1, r + 1));
        } else if (cmd == "UPDATE") {
            int i, val;
            ss >> i >> val;
            int old = bit.rangeSum(i + 1, i + 1);
            bit.update(i + 1, val - old);
        }
    }
    return results;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        int m;
        cin >> m;
        cin.ignore();
        vector<string> operations(m);
        for (int i = 0; i < m; i++) getline(cin, operations[i]);
        vector<int> res = processOperations(nums, operations);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'rsqm-e5': {
    python: `class BIT:
    def __init__(self, n):
        self.n = n
        self.tree = [0] * (n + 1)
    
    def update(self, i, delta):
        while i <= self.n:
            self.tree[i] += delta
            i += i & -i
    
    def prefix(self, i):
        s = 0
        while i > 0:
            s += self.tree[i]
            i -= i & -i
        return s

def process_operations(nums, operations):
    n = len(nums)
    bit = BIT(n)
    for i, v in enumerate(nums):
        bit.update(i + 1, v)
    results = []
    for op in operations:
        parts = op.split()
        if parts[0] == "PREFIX":
            p = int(parts[1])
            results.append(bit.prefix(p + 1))
        elif parts[0] == "UPDATE":
            i, val = int(parts[1]), int(parts[2])
            old = bit.prefix(i + 1) - bit.prefix(i)
            bit.update(i + 1, val - old)
    return results

n = int(input())
nums = list(map(int, input().split()))
m = int(input())
operations = [input().strip() for _ in range(m)]
res = process_operations(nums, operations)
print(" ".join(str(v) for v in res))`,
    java: `import java.util.*;

public class Solution {
    static int[] tree;
    static int n;

    static void update(int i, int delta) {
        for (; i <= n; i += i & -i) tree[i] += delta;
    }

    static int prefix(int i) {
        int sum = 0;
        for (; i > 0; i -= i & -i) sum += tree[i];
        return sum;
    }

    public static int[] processOperations(int[] nums, String[] operations) {
        n = nums.length;
        tree = new int[n + 1];
        for (int i = 0; i < n; i++) update(i + 1, nums[i]);
        List<Integer> results = new ArrayList<>();
        for (String op : operations) {
            String[] parts = op.split(" ");
            if (parts[0].equals("PREFIX")) {
                int p = Integer.parseInt(parts[1]);
                results.add(prefix(p + 1));
            } else if (parts[0].equals("UPDATE")) {
                int i = Integer.parseInt(parts[1]);
                int val = Integer.parseInt(parts[2]);
                int old = prefix(i + 1) - prefix(i);
                update(i + 1, val - old);
            }
        }
        int[] res = new int[results.size()];
        for (int i = 0; i < results.size(); i++) res[i] = results.get(i);
        return res;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int m = sc.nextInt();
            sc.nextLine();
            String[] operations = new String[m];
            for (int i = 0; i < m; i++) operations[i] = sc.nextLine();
            int[] res = processOperations(nums, operations);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(res[i]);
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXN 10005

int bit[MAXN], n;

void update(int i, int delta) {
    for (; i <= n; i += i & (-i)) bit[i] += delta;
}

int prefix(int i) {
    int s = 0;
    for (; i > 0; i -= i & (-i)) s += bit[i];
    return s;
}

int main() {
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    memset(bit, 0, sizeof(bit));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
        update(i + 1, nums[i]);
    }
    int m;
    if (scanf("%d", &m) != 1) return 0;
    getchar();
    int* results = (int*)malloc(m * sizeof(int));
    int resCount = 0;
    for (int i = 0; i < m; i++) {
        char line[100];
        fgets(line, 100, stdin);
        line[strcspn(line, "\\n")] = 0;
        char cmd[10];
        int a, b;
        if (sscanf(line, "PREFIX %d", &a) == 1) {
            results[resCount++] = prefix(a + 1);
        } else if (sscanf(line, "UPDATE %d %d", &a, &b) == 2) {
            int old = prefix(a + 1) - prefix(a);
            update(a + 1, b - old);
        }
    }
    for (int i = 0; i < resCount; i++) {
        if (i > 0) printf(" ");
        printf("%d", results[i]);
    }
    printf("\\n");
    free(nums);
    free(results);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <sstream>

using namespace std;

struct BIT {
    int n;
    vector<int> tree;
    BIT(int n) : n(n), tree(n + 1, 0) {}
    void update(int i, int delta) {
        for (; i <= n; i += i & -i) tree[i] += delta;
    }
    int prefix(int i) {
        int s = 0;
        for (; i > 0; i -= i & -i) s += tree[i];
        return s;
    }
};

vector<int> processOperations(vector<int>& nums, vector<string>& operations) {
    int n = nums.size();
    BIT bit(n);
    for (int i = 0; i < n; i++) bit.update(i + 1, nums[i]);
    vector<int> results;
    for (string& op : operations) {
        stringstream ss(op);
        string cmd;
        ss >> cmd;
        if (cmd == "PREFIX") {
            int p;
            ss >> p;
            results.push_back(bit.prefix(p + 1));
        } else if (cmd == "UPDATE") {
            int i, val;
            ss >> i >> val;
            int old = bit.prefix(i + 1) - bit.prefix(i);
            bit.update(i + 1, val - old);
        }
    }
    return results;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        int m;
        cin >> m;
        cin.ignore();
        vector<string> operations(m);
        for (int i = 0; i < m; i++) getline(cin, operations[i]);
        vector<int> res = processOperations(nums, operations);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },

  // --- MEDIUM ---
  'rsqm-m1': {
    python: `class BIT:
    def __init__(self, n):
        self.n = n
        self.tree = [0] * (n + 1)
    
    def update(self, i, delta):
        while i <= self.n:
            self.tree[i] += delta
            i += i & -i
    
    def prefix(self, i):
        s = 0
        while i > 0:
            s += self.tree[i]
            i -= i & -i
        return s
    
    def range_sum(self, l, r):
        return self.prefix(r) - self.prefix(l - 1)

def process_operations(nums, operations):
    n = len(nums)
    bit = BIT(n)
    for i, v in enumerate(nums):
        bit.update(i + 1, v)
    results = []
    for op in operations:
        parts = op.split()
        if parts[0] == "QUERY":
            l, r = int(parts[1]), int(parts[2])
            results.append(bit.range_sum(l + 1, r + 1))
        elif parts[0] == "UPDATE":
            i, val = int(parts[1]), int(parts[2])
            old = bit.range_sum(i + 1, i + 1)
            bit.update(i + 1, val - old)
    return results

n = int(input())
nums = list(map(int, input().split()))
m = int(input())
operations = [input().strip() for _ in range(m)]
res = process_operations(nums, operations)
print(" ".join(str(v) for v in res))`,
    java: `import java.util.*;

public class Solution {
    static int[] tree;
    static int n;

    static void update(int i, int delta) {
        for (; i <= n; i += i & -i) tree[i] += delta;
    }

    static int prefix(int i) {
        int sum = 0;
        for (; i > 0; i -= i & -i) sum += tree[i];
        return sum;
    }

    static int rangeSum(int l, int r) {
        return prefix(r) - prefix(l - 1);
    }

    public static int[] processOperations(int[] nums, String[] operations) {
        n = nums.length;
        tree = new int[n + 1];
        for (int i = 0; i < n; i++) update(i + 1, nums[i]);
        List<Integer> results = new ArrayList<>();
        for (String op : operations) {
            String[] parts = op.split(" ");
            if (parts[0].equals("QUERY")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                results.add(rangeSum(l + 1, r + 1));
            } else if (parts[0].equals("UPDATE")) {
                int i = Integer.parseInt(parts[1]);
                int val = Integer.parseInt(parts[2]);
                int old = rangeSum(i + 1, i + 1);
                update(i + 1, val - old);
            }
        }
        int[] res = new int[results.size()];
        for (int i = 0; i < results.size(); i++) res[i] = results.get(i);
        return res;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int m = sc.nextInt();
            sc.nextLine();
            String[] operations = new String[m];
            for (int i = 0; i < m; i++) operations[i] = sc.nextLine();
            int[] res = processOperations(nums, operations);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(res[i]);
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXN 100005

int bit[MAXN], n;

void update(int i, int delta) {
    for (; i <= n; i += i & (-i)) bit[i] += delta;
}

int prefix(int i) {
    int s = 0;
    for (; i > 0; i -= i & (-i)) s += bit[i];
    return s;
}

int rangeSum(int l, int r) {
    return prefix(r) - prefix(l - 1);
}

int main() {
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    memset(bit, 0, sizeof(bit));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
        update(i + 1, nums[i]);
    }
    int m;
    if (scanf("%d", &m) != 1) return 0;
    getchar();
    int* results = (int*)malloc(m * sizeof(int));
    int resCount = 0;
    for (int i = 0; i < m; i++) {
        char line[100];
        fgets(line, 100, stdin);
        line[strcspn(line, "\\n")] = 0;
        char cmd[10];
        int a, b;
        if (sscanf(line, "QUERY %d %d", &a, &b) == 2) {
            results[resCount++] = rangeSum(a + 1, b + 1);
        } else if (sscanf(line, "UPDATE %d %d", &a, &b) == 2) {
            int old = rangeSum(a + 1, a + 1);
            update(a + 1, b - old);
        }
    }
    for (int i = 0; i < resCount; i++) {
        if (i > 0) printf(" ");
        printf("%d", results[i]);
    }
    printf("\\n");
    free(nums);
    free(results);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <sstream>

using namespace std;

struct BIT {
    int n;
    vector<int> tree;
    BIT(int n) : n(n), tree(n + 1, 0) {}
    void update(int i, int delta) {
        for (; i <= n; i += i & -i) tree[i] += delta;
    }
    int prefix(int i) {
        int s = 0;
        for (; i > 0; i -= i & -i) s += tree[i];
        return s;
    }
    int rangeSum(int l, int r) {
        return prefix(r) - prefix(l - 1);
    }
};

vector<int> processOperations(vector<int>& nums, vector<string>& operations) {
    int n = nums.size();
    BIT bit(n);
    for (int i = 0; i < n; i++) bit.update(i + 1, nums[i]);
    vector<int> results;
    for (string& op : operations) {
        stringstream ss(op);
        string cmd;
        ss >> cmd;
        if (cmd == "QUERY") {
            int l, r;
            ss >> l >> r;
            results.push_back(bit.rangeSum(l + 1, r + 1));
        } else if (cmd == "UPDATE") {
            int i, val;
            ss >> i >> val;
            int old = bit.rangeSum(i + 1, i + 1);
            bit.update(i + 1, val - old);
        }
    }
    return results;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        int m;
        cin >> m;
        cin.ignore();
        vector<string> operations(m);
        for (int i = 0; i < m; i++) getline(cin, operations[i]);
        vector<int> res = processOperations(nums, operations);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'rsqm-m2': {
    python: `def count_queries_greater_than_k(nums, queries, k):
    prefix = [0]
    for v in nums:
        prefix.append(prefix[-1] + v)
    count = 0
    for l, r in queries:
        if prefix[r + 1] - prefix[l] > k:
            count += 1
    return count

n = int(input())
nums = list(map(int, input().split()))
m = int(input())
queries = [tuple(map(int, input().split())) for _ in range(m)]
k = int(input())
print(count_queries_greater_than_k(nums, queries, k))`,
    java: `import java.util.*;

public class Solution {
    public static int countQueriesGreaterThanK(int[] nums, int[][] queries, int k) {
        int n = nums.length;
        int[] prefix = new int[n + 1];
        for (int i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }
        int count = 0;
        for (int[] q : queries) {
            if (prefix[q[1] + 1] - prefix[q[0]] > k) count++;
        }
        return count;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int m = sc.nextInt();
            int[][] queries = new int[m][2];
            for (int i = 0; i < m; i++) {
                queries[i][0] = sc.nextInt();
                queries[i][1] = sc.nextInt();
            }
            int k = sc.nextInt();
            System.out.println(countQueriesGreaterThanK(nums, queries, k));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int countQueriesGreaterThanK(int* nums, int numsSize, int** queries, int queriesSize, int k) {
    long long* prefix = (long long*)calloc(numsSize + 1, sizeof(long long));
    for (int i = 0; i < numsSize; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    int count = 0;
    for (int i = 0; i < queriesSize; i++) {
        if (prefix[queries[i][1] + 1] - prefix[queries[i][0]] > k) count++;
    }
    free(prefix);
    return count;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int m;
    if (scanf("%d", &m) != 1) return 0;
    int** queries = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        queries[i] = (int*)malloc(2 * sizeof(int));
        if (scanf("%d %d", &queries[i][0], &queries[i][1]) != 2) return 0;
    }
    int k;
    if (scanf("%d", &k) != 1) return 0;
    printf("%d\\n", countQueriesGreaterThanK(nums, n, queries, m, k));
    free(nums);
    for (int i = 0; i < m; i++) free(queries[i]);
    free(queries);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int countQueriesGreaterThanK(vector<int>& nums, vector<vector<int>>& queries, int k) {
    int n = nums.size();
    vector<long long> prefix(n + 1, 0);
    for (int i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    int count = 0;
    for (auto& q : queries) {
        if (prefix[q[1] + 1] - prefix[q[0]] > k) count++;
    }
    return count;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        int m;
        cin >> m;
        vector<vector<int>> queries(m, vector<int>(2));
        for (int i = 0; i < m; i++) {
            cin >> queries[i][0] >> queries[i][1];
        }
        int k;
        cin >> k;
        cout << countQueriesGreaterThanK(nums, queries, k) << "\\n";
    }
    return 0;
}`
  },
  'rsqm-m3': {
    python: `def range_sum_2d(matrix, queries):
    m, n = len(matrix), len(matrix[0])
    prefix = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m):
        for j in range(n):
            prefix[i + 1][j + 1] = matrix[i][j] + prefix[i][j + 1] + prefix[i + 1][j] - prefix[i][j]
    results = []
    for r1, c1, r2, c2 in queries:
        total = prefix[r2 + 1][c2 + 1] - prefix[r1][c2 + 1] - prefix[r2 + 1][c1] + prefix[r1][c1]
        results.append(total)
    return results

m, n = map(int, input().split())
matrix = [list(map(int, input().split())) for _ in range(m)]
q = int(input())
queries = [tuple(map(int, input().split())) for _ in range(q)]
res = range_sum_2d(matrix, queries)
print(" ".join(str(v) for v in res))`,
    java: `import java.util.*;

public class Solution {
    public static int[] rangeSum2D(int[][] matrix, int[][] queries) {
        int m = matrix.length, n = matrix[0].length;
        int[][] prefix = new int[m + 1][n + 1];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                prefix[i + 1][j + 1] = matrix[i][j] + prefix[i][j + 1] + prefix[i + 1][j] - prefix[i][j];
            }
        }
        int[] results = new int[queries.length];
        for (int i = 0; i < queries.length; i++) {
            int r1 = queries[i][0], c1 = queries[i][1], r2 = queries[i][2], c2 = queries[i][3];
            results[i] = prefix[r2 + 1][c2 + 1] - prefix[r1][c2 + 1] - prefix[r2 + 1][c1] + prefix[r1][c1];
        }
        return results;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt();
            int n = sc.nextInt();
            int[][] matrix = new int[m][n];
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) {
                    matrix[i][j] = sc.nextInt();
                }
            }
            int q = sc.nextInt();
            int[][] queries = new int[q][4];
            for (int i = 0; i < q; i++) {
                queries[i][0] = sc.nextInt();
                queries[i][1] = sc.nextInt();
                queries[i][2] = sc.nextInt();
                queries[i][3] = sc.nextInt();
            }
            int[] res = rangeSum2D(matrix, queries);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(res[i]);
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int* rangeSum2D(int** matrix, int rows, int cols, int** queries, int queriesSize, int* returnSize) {
    *returnSize = queriesSize;
    int** prefix = (int**)malloc((rows + 1) * sizeof(int*));
    for (int i = 0; i <= rows; i++) {
        prefix[i] = (int*)calloc(cols + 1, sizeof(int));
    }
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            prefix[i + 1][j + 1] = matrix[i][j] + prefix[i][j + 1] + prefix[i + 1][j] - prefix[i][j];
        }
    }
    int* results = (int*)malloc(queriesSize * sizeof(int));
    for (int i = 0; i < queriesSize; i++) {
        int r1 = queries[i][0], c1 = queries[i][1], r2 = queries[i][2], c2 = queries[i][3];
        results[i] = prefix[r2 + 1][c2 + 1] - prefix[r1][c2 + 1] - prefix[r2 + 1][c1] + prefix[r1][c1];
    }
    for (int i = 0; i <= rows; i++) free(prefix[i]);
    free(prefix);
    return results;
}

int main() {
    int m, n;
    if (scanf("%d %d", &m, &n) != 2) return 0;
    int** matrix = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        matrix[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) {
            if (scanf("%d", &matrix[i][j]) != 1) return 0;
        }
    }
    int q;
    if (scanf("%d", &q) != 1) return 0;
    int** queries = (int**)malloc(q * sizeof(int*));
    for (int i = 0; i < q; i++) {
        queries[i] = (int*)malloc(4 * sizeof(int));
        if (scanf("%d %d %d %d", &queries[i][0], &queries[i][1], &queries[i][2], &queries[i][3]) != 4) return 0;
    }
    int retSize;
    int* res = rangeSum2D(matrix, m, n, queries, q, &retSize);
    for (int i = 0; i < retSize; i++) {
        if (i > 0) printf(" ");
        printf("%d", res[i]);
    }
    printf("\\n");
    for (int i = 0; i < m; i++) free(matrix[i]);
    free(matrix);
    for (int i = 0; i < q; i++) free(queries[i]);
    free(queries);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

vector<int> rangeSum2D(vector<vector<int>>& matrix, vector<vector<int>>& queries) {
    int m = matrix.size(), n = matrix[0].size();
    vector<vector<int>> prefix(m + 1, vector<int>(n + 1, 0));
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            prefix[i + 1][j + 1] = matrix[i][j] + prefix[i][j + 1] + prefix[i + 1][j] - prefix[i][j];
        }
    }
    vector<int> results;
    for (auto& q : queries) {
        int r1 = q[0], c1 = q[1], r2 = q[2], c2 = q[3];
        results.push_back(prefix[r2 + 1][c2 + 1] - prefix[r1][c2 + 1] - prefix[r2 + 1][c1] + prefix[r1][c1]);
    }
    return results;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int m, n;
    if (cin >> m >> n) {
        vector<vector<int>> matrix(m, vector<int>(n));
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++)
                cin >> matrix[i][j];
        int q;
        cin >> q;
        vector<vector<int>> queries(q, vector<int>(4));
        for (int i = 0; i < q; i++)
            cin >> queries[i][0] >> queries[i][1] >> queries[i][2] >> queries[i][3];
        vector<int> res = rangeSum2D(matrix, queries);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'rsqm-m4': {
    python: `def count_even_sum_queries(nums, queries):
    prefix = [0]
    for v in nums:
        prefix.append(prefix[-1] + v)
    count = 0
    for l, r in queries:
        if (prefix[r + 1] - prefix[l]) % 2 == 0:
            count += 1
    return count

n = int(input())
nums = list(map(int, input().split()))
m = int(input())
queries = [tuple(map(int, input().split())) for _ in range(m)]
print(count_even_sum_queries(nums, queries))`,
    java: `import java.util.*;

public class Solution {
    public static int countEvenSumQueries(int[] nums, int[][] queries) {
        int n = nums.length;
        int[] prefix = new int[n + 1];
        for (int i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }
        int count = 0;
        for (int[] q : queries) {
            if ((prefix[q[1] + 1] - prefix[q[0]]) % 2 == 0) count++;
        }
        return count;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int m = sc.nextInt();
            int[][] queries = new int[m][2];
            for (int i = 0; i < m; i++) {
                queries[i][0] = sc.nextInt();
                queries[i][1] = sc.nextInt();
            }
            System.out.println(countEvenSumQueries(nums, queries));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int countEvenSumQueries(int* nums, int numsSize, int** queries, int queriesSize) {
    int* prefix = (int*)calloc(numsSize + 1, sizeof(int));
    for (int i = 0; i < numsSize; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    int count = 0;
    for (int i = 0; i < queriesSize; i++) {
        if ((prefix[queries[i][1] + 1] - prefix[queries[i][0]]) % 2 == 0) count++;
    }
    free(prefix);
    return count;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int m;
    if (scanf("%d", &m) != 1) return 0;
    int** queries = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        queries[i] = (int*)malloc(2 * sizeof(int));
        if (scanf("%d %d", &queries[i][0], &queries[i][1]) != 2) return 0;
    }
    printf("%d\\n", countEvenSumQueries(nums, n, queries, m));
    free(nums);
    for (int i = 0; i < m; i++) free(queries[i]);
    free(queries);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int countEvenSumQueries(vector<int>& nums, vector<vector<int>>& queries) {
    int n = nums.size();
    vector<int> prefix(n + 1, 0);
    for (int i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }
    int count = 0;
    for (auto& q : queries) {
        if ((prefix[q[1] + 1] - prefix[q[0]]) % 2 == 0) count++;
    }
    return count;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        int m;
        cin >> m;
        vector<vector<int>> queries(m, vector<int>(2));
        for (int i = 0; i < m; i++) {
            cin >> queries[i][0] >> queries[i][1];
        }
        cout << countEvenSumQueries(nums, queries) << "\\n";
    }
    return 0;
}`
  },
  'rsqm-m5': {
    python: `def max_range_sum_after_update(nums, updates, l, r):
    original_sum = sum(nums[l:r + 1])
    best = original_sum
    for i, val in updates:
        if l <= i <= r:
            new_sum = original_sum - nums[i] + val
        else:
            new_sum = original_sum
        if new_sum > best:
            best = new_sum
    return best

n = int(input())
nums = list(map(int, input().split()))
m = int(input())
updates = [tuple(map(int, input().split())) for _ in range(m)]
l, r = map(int, input().split())
print(max_range_sum_after_update(nums, updates, l, r))`,
    java: `import java.util.*;

public class Solution {
    public static int maxRangeSumAfterUpdate(int[] nums, int[][] updates, int l, int r) {
        int originalSum = 0;
        for (int i = l; i <= r; i++) originalSum += nums[i];
        int best = originalSum;
        for (int[] upd : updates) {
            int idx = upd[0], val = upd[1];
            int newSum;
            if (idx >= l && idx <= r) {
                newSum = originalSum - nums[idx] + val;
            } else {
                newSum = originalSum;
            }
            if (newSum > best) best = newSum;
        }
        return best;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int m = sc.nextInt();
            int[][] updates = new int[m][2];
            for (int i = 0; i < m; i++) {
                updates[i][0] = sc.nextInt();
                updates[i][1] = sc.nextInt();
            }
            int l = sc.nextInt();
            int r = sc.nextInt();
            System.out.println(maxRangeSumAfterUpdate(nums, updates, l, r));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int maxRangeSumAfterUpdate(int* nums, int numsSize, int** updates, int updatesSize, int l, int r) {
    int originalSum = 0;
    for (int i = l; i <= r; i++) originalSum += nums[i];
    int best = originalSum;
    for (int i = 0; i < updatesSize; i++) {
        int idx = updates[i][0], val = updates[i][1];
        int newSum;
        if (idx >= l && idx <= r) {
            newSum = originalSum - nums[idx] + val;
        } else {
            newSum = originalSum;
        }
        if (newSum > best) best = newSum;
    }
    return best;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int m;
    if (scanf("%d", &m) != 1) return 0;
    int** updates = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        updates[i] = (int*)malloc(2 * sizeof(int));
        if (scanf("%d %d", &updates[i][0], &updates[i][1]) != 2) return 0;
    }
    int l, r;
    if (scanf("%d %d", &l, &r) != 2) return 0;
    printf("%d\\n", maxRangeSumAfterUpdate(nums, n, updates, m, l, r));
    free(nums);
    for (int i = 0; i < m; i++) free(updates[i]);
    free(updates);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int maxRangeSumAfterUpdate(vector<int>& nums, vector<vector<int>>& updates, int l, int r) {
    int originalSum = 0;
    for (int i = l; i <= r; i++) originalSum += nums[i];
    int best = originalSum;
    for (auto& upd : updates) {
        int idx = upd[0], val = upd[1];
        int newSum;
        if (idx >= l && idx <= r) {
            newSum = originalSum - nums[idx] + val;
        } else {
            newSum = originalSum;
        }
        if (newSum > best) best = newSum;
    }
    return best;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        int m;
        cin >> m;
        vector<vector<int>> updates(m, vector<int>(2));
        for (int i = 0; i < m; i++) {
            cin >> updates[i][0] >> updates[i][1];
        }
        int l, r;
        cin >> l >> r;
        cout << maxRangeSumAfterUpdate(nums, updates, l, r) << "\\n";
    }
    return 0;
}`
  },

  // --- HARD ---
  'rsqm-h1': {
    python: `class BITRange:
    def __init__(self, n):
        self.n = n
        self.bit1 = [0] * (n + 2)
        self.bit2 = [0] * (n + 2)
    
    def _add(self, bit, i, val):
        while i <= self.n:
            bit[i] += val
            i += i & -i
    
    def _prefix(self, bit, i):
        s = 0
        while i > 0:
            s += bit[i]
            i -= i & -i
        return s
    
    def range_add(self, l, r, val):
        self._add(self.bit1, l, val)
        self._add(self.bit1, r + 1, -val)
        self._add(self.bit2, l, val * (l - 1))
        self._add(self.bit2, r + 1, -val * r)
    
    def point_query(self, i):
        return self._prefix(self.bit1, i) * i - self._prefix(self.bit2, i)
    
    def range_sum(self, l, r):
        return self.point_query(r) - self.point_query(l - 1)

def process_operations(nums, operations):
    n = len(nums)
    bit = BITRange(n)
    for i, v in enumerate(nums, 1):
        bit.range_add(i, i, v)
    results = []
    for op in operations:
        parts = op.split()
        if parts[0] == "QUERY":
            l, r = int(parts[1]), int(parts[2])
            results.append(bit.range_sum(l + 1, r + 1))
        elif parts[0] == "RANGE_UPDATE":
            l, r, val = int(parts[1]), int(parts[2]), int(parts[3])
            bit.range_add(l + 1, r + 1, val)
    return results

n = int(input())
nums = list(map(int, input().split()))
m = int(input())
operations = [input().strip() for _ in range(m)]
res = process_operations(nums, operations)
print(" ".join(str(v) for v in res))`,
    java: `import java.util.*;

public class Solution {
    static int n;
    static long[] bit1, bit2;

    static void add(long[] bit, int i, long val) {
        while (i <= n) { bit[i] += val; i += i & -i; }
    }

    static long prefix(long[] bit, int i) {
        long s = 0;
        while (i > 0) { s += bit[i]; i -= i & -i; }
        return s;
    }

    static void rangeAdd(int l, int r, long val) {
        add(bit1, l, val);
        add(bit1, r + 1, -val);
        add(bit2, l, val * (l - 1));
        add(bit2, r + 1, -val * r);
    }

    static long pointQuery(int i) {
        return prefix(bit1, i) * i - prefix(bit2, i);
    }

    static long rangeSum(int l, int r) {
        return pointQuery(r) - pointQuery(l - 1);
    }

    public static long[] processOperations(int[] nums, String[] operations) {
        n = nums.length;
        bit1 = new long[n + 2];
        bit2 = new long[n + 2];
        for (int i = 0; i < n; i++) rangeAdd(i + 1, i + 1, nums[i]);
        List<Long> results = new ArrayList<>();
        for (String op : operations) {
            String[] parts = op.split(" ");
            if (parts[0].equals("QUERY")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                results.add(rangeSum(l + 1, r + 1));
            } else if (parts[0].equals("RANGE_UPDATE")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                long val = Long.parseLong(parts[3]);
                rangeAdd(l + 1, r + 1, val);
            }
        }
        long[] res = new long[results.size()];
        for (int i = 0; i < results.size(); i++) res[i] = results.get(i);
        return res;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int m = sc.nextInt();
            sc.nextLine();
            String[] operations = new String[m];
            for (int i = 0; i < m; i++) operations[i] = sc.nextLine();
            long[] res = processOperations(nums, operations);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(res[i]);
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXN 100005

long long bit1[MAXN], bit2[MAXN];
int n;

void add(long long* bit, int i, long long val) {
    while (i <= n) { bit[i] += val; i += i & (-i); }
}

long long prefix(long long* bit, int i) {
    long long s = 0;
    while (i > 0) { s += bit[i]; i -= i & (-i); }
    return s;
}

void rangeAdd(int l, int r, long long val) {
    add(bit1, l, val);
    add(bit1, r + 1, -val);
    add(bit2, l, val * (l - 1));
    add(bit2, r + 1, -val * r);
}

long long pointQuery(int i) {
    return prefix(bit1, i) * i - prefix(bit2, i);
}

long long rangeSum(int l, int r) {
    return pointQuery(r) - pointQuery(l - 1);
}

int main() {
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    memset(bit1, 0, sizeof(bit1));
    memset(bit2, 0, sizeof(bit2));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
        rangeAdd(i + 1, i + 1, nums[i]);
    }
    int m;
    if (scanf("%d", &m) != 1) return 0;
    getchar();
    long long* results = (long long*)malloc(m * sizeof(long long));
    int resCount = 0;
    for (int i = 0; i < m; i++) {
        char line[100];
        fgets(line, 100, stdin);
        line[strcspn(line, "\\n")] = 0;
        char cmd[20];
        int a, b;
        long long c;
        if (sscanf(line, "QUERY %d %d", &a, &b) == 2) {
            results[resCount++] = rangeSum(a + 1, b + 1);
        } else if (sscanf(line, "RANGE_UPDATE %d %d %lld", &a, &b, &c) == 3) {
            rangeAdd(a + 1, b + 1, c);
        }
    }
    for (int i = 0; i < resCount; i++) {
        if (i > 0) printf(" ");
        printf("%lld", results[i]);
    }
    printf("\\n");
    free(nums);
    free(results);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <sstream>

using namespace std;

struct BITRange {
    int n;
    vector<long long> bit1, bit2;
    BITRange(int n) : n(n), bit1(n + 2, 0), bit2(n + 2, 0) {}
    void add(vector<long long>& bit, int i, long long val) {
        while (i <= n) { bit[i] += val; i += i & -i; }
    }
    long long prefix(vector<long long>& bit, int i) {
        long long s = 0;
        while (i > 0) { s += bit[i]; i -= i & -i; }
        return s;
    }
    void rangeAdd(int l, int r, long long val) {
        add(bit1, l, val);
        add(bit1, r + 1, -val);
        add(bit2, l, val * (l - 1));
        add(bit2, r + 1, -val * r);
    }
    long long pointQuery(int i) {
        return prefix(bit1, i) * i - prefix(bit2, i);
    }
    long long rangeSum(int l, int r) {
        return pointQuery(r) - pointQuery(l - 1);
    }
};

vector<long long> processOperations(vector<int>& nums, vector<string>& operations) {
    int n = nums.size();
    BITRange bit(n);
    for (int i = 0; i < n; i++) bit.rangeAdd(i + 1, i + 1, nums[i]);
    vector<long long> results;
    for (string& op : operations) {
        stringstream ss(op);
        string cmd;
        ss >> cmd;
        if (cmd == "QUERY") {
            int l, r;
            ss >> l >> r;
            results.push_back(bit.rangeSum(l + 1, r + 1));
        } else if (cmd == "RANGE_UPDATE") {
            int l, r;
            long long val;
            ss >> l >> r >> val;
            bit.rangeAdd(l + 1, r + 1, val);
        }
    }
    return results;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        int m;
        cin >> m;
        cin.ignore();
        vector<string> operations(m);
        for (int i = 0; i < m; i++) getline(cin, operations[i]);
        vector<long long> res = processOperations(nums, operations);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'rsqm-h2': {
    python: `class BIT2D:
    def __init__(self, m, n):
        self.m = m
        self.n = n
        self.tree = [[0] * (n + 1) for _ in range(m + 1)]
    
    def update(self, r, c, delta):
        i = r
        while i <= self.m:
            j = c
            while j <= self.n:
                self.tree[i][j] += delta
                j += j & -j
            i += i & -i
    
    def prefix(self, r, c):
        s = 0
        i = r
        while i > 0:
            j = c
            while j > 0:
                s += self.tree[i][j]
                j -= j & -j
            i -= i & -i
        return s
    
    def range_sum(self, r1, c1, r2, c2):
        return (self.prefix(r2, c2) - self.prefix(r1 - 1, c2) -
                self.prefix(r2, c1 - 1) + self.prefix(r1 - 1, c1 - 1))

def process_operations(matrix, operations):
    m, n = len(matrix), len(matrix[0])
    bit = BIT2D(m, n)
    for i in range(m):
        for j in range(n):
            bit.update(i + 1, j + 1, matrix[i][j])
    results = []
    for op in operations:
        parts = op.split()
        if parts[0] == "QUERY":
            r1, c1, r2, c2 = map(int, parts[1:])
            results.append(bit.range_sum(r1 + 1, c1 + 1, r2 + 1, c2 + 1))
        elif parts[0] == "UPDATE":
            r, c, val = map(int, parts[1:])
            old = bit.range_sum(r + 1, c + 1, r + 1, c + 1)
            bit.update(r + 1, c + 1, val - old)
    return results

m, n = map(int, input().split())
matrix = [list(map(int, input().split())) for _ in range(m)]
q = int(input())
operations = [input().strip() for _ in range(q)]
res = process_operations(matrix, operations)
print(" ".join(str(v) for v in res))`,
    java: `import java.util.*;

public class Solution {
    static int[][] tree;
    static int m, n;

    static void update(int r, int c, int delta) {
        for (int i = r; i <= m; i += i & -i) {
            for (int j = c; j <= n; j += j & -j) {
                tree[i][j] += delta;
            }
        }
    }

    static int prefix(int r, int c) {
        int s = 0;
        for (int i = r; i > 0; i -= i & -i) {
            for (int j = c; j > 0; j -= j & -j) {
                s += tree[i][j];
            }
        }
        return s;
    }

    static int rangeSum(int r1, int c1, int r2, int c2) {
        return prefix(r2, c2) - prefix(r1 - 1, c2) - prefix(r2, c1 - 1) + prefix(r1 - 1, c1 - 1);
    }

    public static int[] processOperations(int[][] matrix, String[] operations) {
        m = matrix.length;
        n = matrix[0].length;
        tree = new int[m + 1][n + 1];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                update(i + 1, j + 1, matrix[i][j]);
            }
        }
        List<Integer> results = new ArrayList<>();
        for (String op : operations) {
            String[] parts = op.split(" ");
            if (parts[0].equals("QUERY")) {
                int r1 = Integer.parseInt(parts[1]);
                int c1 = Integer.parseInt(parts[2]);
                int r2 = Integer.parseInt(parts[3]);
                int c2 = Integer.parseInt(parts[4]);
                results.add(rangeSum(r1 + 1, c1 + 1, r2 + 1, c2 + 1));
            } else if (parts[0].equals("UPDATE")) {
                int r = Integer.parseInt(parts[1]);
                int c = Integer.parseInt(parts[2]);
                int val = Integer.parseInt(parts[3]);
                int old = rangeSum(r + 1, c + 1, r + 1, c + 1);
                update(r + 1, c + 1, val - old);
            }
        }
        int[] res = new int[results.size()];
        for (int i = 0; i < results.size(); i++) res[i] = results.get(i);
        return res;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt();
            int n = sc.nextInt();
            int[][] matrix = new int[m][n];
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) {
                    matrix[i][j] = sc.nextInt();
                }
            }
            int q = sc.nextInt();
            sc.nextLine();
            String[] operations = new String[q];
            for (int i = 0; i < q; i++) operations[i] = sc.nextLine();
            int[] res = processOperations(matrix, operations);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(res[i]);
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXN 505

int tree[MAXN][MAXN];
int m, n;

void update(int r, int c, int delta) {
    for (int i = r; i <= m; i += i & (-i))
        for (int j = c; j <= n; j += j & (-j))
            tree[i][j] += delta;
}

int prefix(int r, int c) {
    int s = 0;
    for (int i = r; i > 0; i -= i & (-i))
        for (int j = c; j > 0; j -= j & (-j))
            s += tree[i][j];
    return s;
}

int rangeSum(int r1, int c1, int r2, int c2) {
    return prefix(r2, c2) - prefix(r1 - 1, c2) - prefix(r2, c1 - 1) + prefix(r1 - 1, c1 - 1);
}

int main() {
    if (scanf("%d %d", &m, &n) != 2) return 0;
    memset(tree, 0, sizeof(tree));
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            int v;
            if (scanf("%d", &v) != 1) return 0;
            update(i + 1, j + 1, v);
        }
    }
    int q;
    if (scanf("%d", &q) != 1) return 0;
    getchar();
    int* results = (int*)malloc(q * sizeof(int));
    int resCount = 0;
    for (int i = 0; i < q; i++) {
        char line[100];
        fgets(line, 100, stdin);
        line[strcspn(line, "\\n")] = 0;
        char cmd[10];
        int a, b, c, d, e;
        if (sscanf(line, "QUERY %d %d %d %d", &a, &b, &c, &d) == 4) {
            results[resCount++] = rangeSum(a + 1, b + 1, c + 1, d + 1);
        } else if (sscanf(line, "UPDATE %d %d %d", &a, &b, &c) == 3) {
            int old = rangeSum(a + 1, b + 1, a + 1, b + 1);
            update(a + 1, b + 1, c - old);
        }
    }
    for (int i = 0; i < resCount; i++) {
        if (i > 0) printf(" ");
        printf("%d", results[i]);
    }
    printf("\\n");
    free(results);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <sstream>

using namespace std;

struct BIT2D {
    int m, n;
    vector<vector<int>> tree;
    BIT2D(int m, int n) : m(m), n(n), tree(m + 1, vector<int>(n + 1, 0)) {}
    void update(int r, int c, int delta) {
        for (int i = r; i <= m; i += i & -i)
            for (int j = c; j <= n; j += j & -j)
                tree[i][j] += delta;
    }
    int prefix(int r, int c) {
        int s = 0;
        for (int i = r; i > 0; i -= i & -i)
            for (int j = c; j > 0; j -= j & -j)
                s += tree[i][j];
        return s;
    }
    int rangeSum(int r1, int c1, int r2, int c2) {
        return prefix(r2, c2) - prefix(r1 - 1, c2) - prefix(r2, c1 - 1) + prefix(r1 - 1, c1 - 1);
    }
};

vector<int> processOperations(vector<vector<int>>& matrix, vector<string>& operations) {
    int m = matrix.size(), n = matrix[0].size();
    BIT2D bit(m, n);
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            bit.update(i + 1, j + 1, matrix[i][j]);
    vector<int> results;
    for (string& op : operations) {
        stringstream ss(op);
        string cmd;
        ss >> cmd;
        if (cmd == "QUERY") {
            int r1, c1, r2, c2;
            ss >> r1 >> c1 >> r2 >> c2;
            results.push_back(bit.rangeSum(r1 + 1, c1 + 1, r2 + 1, c2 + 1));
        } else if (cmd == "UPDATE") {
            int r, c, val;
            ss >> r >> c >> val;
            int old = bit.rangeSum(r + 1, c + 1, r + 1, c + 1);
            bit.update(r + 1, c + 1, val - old);
        }
    }
    return results;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int m, n;
    if (cin >> m >> n) {
        vector<vector<int>> matrix(m, vector<int>(n));
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++)
                cin >> matrix[i][j];
        int q;
        cin >> q;
        cin.ignore();
        vector<string> operations(q);
        for (int i = 0; i < q; i++) getline(cin, operations[i]);
        vector<int> res = processOperations(matrix, operations);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'rsqm-h3': {
    python: `def count_inversions(nums):
    sorted_unique = sorted(set(nums))
    compress = {v: i + 1 for i, v in enumerate(sorted_unique)}
    m = len(sorted_unique)
    bit = [0] * (m + 1)
    
    def update(i):
        while i <= m:
            bit[i] += 1
            i += i & -i
    
    def prefix(i):
        s = 0
        while i > 0:
            s += bit[i]
            i -= i & -i
        return s
    
    inv = 0
    for num in reversed(nums):
        k = compress[num]
        inv += prefix(k - 1)
        update(k)
    return inv

n = int(input())
nums = list(map(int, input().split()))
print(count_inversions(nums))`,
    java: `import java.util.*;

public class Solution {
    static int[] bit;
    static int m;

    static void update(int i) {
        for (; i <= m; i += i & -i) bit[i]++;
    }

    static int prefix(int i) {
        int sum = 0;
        for (; i > 0; i -= i & -i) sum += bit[i];
        return sum;
    }

    public static long countInversions(int[] nums) {
        int n = nums.length;
        int[] sorted = nums.clone();
        Arrays.sort(sorted);
        Map<Integer, Integer> compress = new HashMap<>();
        int idx = 1;
        for (int v : sorted) {
            if (!compress.containsKey(v)) compress.put(v, idx++);
        }
        m = compress.size();
        bit = new int[m + 1];
        long inv = 0;
        for (int i = n - 1; i >= 0; i--) {
            int k = compress.get(nums[i]);
            inv += prefix(k - 1);
            update(k);
        }
        return inv;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            System.out.println(countInversions(nums));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXN 100005

int bit[MAXN], m;

void update(int i) {
    for (; i <= m; i += i & (-i)) bit[i]++;
}

int prefix(int i) {
    int s = 0;
    for (; i > 0; i -= i & (-i)) s += bit[i];
    return s;
}

int cmp(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int compress(int val, int* unique, int m) {
    int lo = 0, hi = m - 1;
    while (lo <= hi) {
        int mid = (lo + hi) / 2;
        if (unique[mid] == val) return mid + 1;
        if (unique[mid] < val) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
}

long long countInversions(int* nums, int numsSize) {
    int* sorted = (int*)malloc(numsSize * sizeof(int));
    memcpy(sorted, nums, numsSize * sizeof(int));
    qsort(sorted, numsSize, sizeof(int), cmp);
    int* unique = (int*)malloc(numsSize * sizeof(int));
    m = 0;
    for (int i = 0; i < numsSize; i++) {
        if (i == 0 || sorted[i] != sorted[i - 1])
            unique[m++] = sorted[i];
    }
    memset(bit, 0, sizeof(bit));
    long long inv = 0;
    for (int i = numsSize - 1; i >= 0; i--) {
        int k = compress(nums[i], unique, m);
        inv += prefix(k - 1);
        update(k);
    }
    free(sorted);
    free(unique);
    return inv;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    printf("%lld\\n", countInversions(nums, n));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <unordered_map>

using namespace std;

struct BIT {
    int m;
    vector<int> tree;
    BIT(int m) : m(m), tree(m + 1, 0) {}
    void update(int i) {
        for (; i <= m; i += i & -i) tree[i]++;
    }
    int prefix(int i) {
        int s = 0;
        for (; i > 0; i -= i & -i) s += tree[i];
        return s;
    }
};

long long countInversions(vector<int>& nums) {
    int n = nums.size();
    vector<int> sorted_nums = nums;
    sort(sorted_nums.begin(), sorted_nums.end());
    sorted_nums.erase(unique(sorted_nums.begin(), sorted_nums.end()), sorted_nums.end());
    unordered_map<int, int> compress;
    for (int i = 0; i < (int)sorted_nums.size(); i++)
        compress[sorted_nums[i]] = i + 1;
    BIT bit(sorted_nums.size());
    long long inv = 0;
    for (int i = n - 1; i >= 0; i--) {
        int k = compress[nums[i]];
        inv += bit.prefix(k - 1);
        bit.update(k);
    }
    return inv;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        cout << countInversions(nums) << "\\n";
    }
    return 0;
}`
  },
  'rsqm-h4': {
    python: `def longest_subarray_div_k(nums, k):
    prefix = 0
    first_occurrence = {0: -1}
    max_len = 0
    for i, num in enumerate(nums):
        prefix = (prefix + num) % k
        if prefix < 0:
            prefix += k
        if prefix in first_occurrence:
            max_len = max(max_len, i - first_occurrence[prefix])
        else:
            first_occurrence[prefix] = i
    return max_len

n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(longest_subarray_div_k(nums, k))`,
    java: `import java.util.*;

public class Solution {
    public static int longestSubarrayDivK(int[] nums, int k) {
        Map<Integer, Integer> firstOccurrence = new HashMap<>();
        firstOccurrence.put(0, -1);
        int prefix = 0, maxLen = 0;
        for (int i = 0; i < nums.length; i++) {
            prefix = (prefix + nums[i]) % k;
            if (prefix < 0) prefix += k;
            if (firstOccurrence.containsKey(prefix)) {
                maxLen = Math.max(maxLen, i - firstOccurrence.get(prefix));
            } else {
                firstOccurrence.put(prefix, i);
            }
        }
        return maxLen;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            int k = sc.nextInt();
            System.out.println(longestSubarrayDivK(nums, k));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXN 100005

int longestSubarrayDivK(int* nums, int numsSize, int k) {
    int* first = (int*)malloc(k * sizeof(int));
    memset(first, -1, k * sizeof(int));
    first[0] = 0;
    int prefix = 0, maxLen = 0;
    for (int i = 0; i < numsSize; i++) {
        prefix = (prefix + nums[i]) % k;
        if (prefix < 0) prefix += k;
        if (first[prefix] != -1) {
            int len = i + 1 - first[prefix];
            if (len > maxLen) maxLen = len;
        } else {
            first[prefix] = i + 1;
        }
    }
    free(first);
    return maxLen;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int k;
    if (scanf("%d", &k) != 1) return 0;
    printf("%d\\n", longestSubarrayDivK(nums, n, k));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

int longestSubarrayDivK(vector<int>& nums, int k) {
    unordered_map<int, int> firstOccurrence;
    firstOccurrence[0] = -1;
    int prefix = 0, maxLen = 0;
    for (int i = 0; i < (int)nums.size(); i++) {
        prefix = (prefix + nums[i]) % k;
        if (prefix < 0) prefix += k;
        if (firstOccurrence.count(prefix)) {
            maxLen = max(maxLen, i - firstOccurrence[prefix]);
        } else {
            firstOccurrence[prefix] = i;
        }
    }
    return maxLen;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        int k;
        cin >> k;
        cout << longestSubarrayDivK(nums, k) << "\\n";
    }
    return 0;
}`
  },
  'rsqm-h5': {
    python: `class BIT:
    def __init__(self, n):
        self.n = n
        self.tree = [0] * (n + 1)
    
    def update(self, i, delta):
        while i <= self.n:
            self.tree[i] += delta
            i += i & -i
    
    def prefix(self, i):
        s = 0
        while i > 0:
            s += self.tree[i]
            i -= i & -i
        return s
    
    def range_sum(self, l, r):
        return self.prefix(r) - self.prefix(l - 1)

def process_operations(nums, operations):
    arr = nums[:]
    results = []
    for op in operations:
        parts = op.split()
        if parts[0] == "QUERY":
            l, r = int(parts[1]), int(parts[2])
            results.append(sum(arr[l:r + 1]))
        elif parts[0] == "INSERT":
            pos, val = int(parts[1]), int(parts[2])
            arr.insert(pos, val)
    return results

n = int(input())
nums = list(map(int, input().split()))
m = int(input())
operations = [input().strip() for _ in range(m)]
res = process_operations(nums, operations)
print(" ".join(str(v) for v in res))`,
    java: `import java.util.*;

public class Solution {
    public static int[] processOperations(int[] nums, String[] operations) {
        List<Integer> arr = new ArrayList<>();
        for (int v : nums) arr.add(v);
        List<Integer> results = new ArrayList<>();
        for (String op : operations) {
            String[] parts = op.split(" ");
            if (parts[0].equals("QUERY")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                int sum = 0;
                for (int i = l; i <= r; i++) sum += arr.get(i);
                results.add(sum);
            } else if (parts[0].equals("INSERT")) {
                int pos = Integer.parseInt(parts[1]);
                int val = Integer.parseInt(parts[2]);
                arr.add(pos, val);
            }
        }
        int[] res = new int[results.size()];
        for (int i = 0; i < results.size(); i++) res[i] = results.get(i);
        return res;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int m = sc.nextInt();
            sc.nextLine();
            String[] operations = new String[m];
            for (int i = 0; i < m; i++) operations[i] = sc.nextLine();
            int[] res = processOperations(nums, operations);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(res[i]);
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXN 20005

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(MAXN * sizeof(int));
    int size = n;
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &arr[i]) != 1) return 0;
    }
    int m;
    if (scanf("%d", &m) != 1) return 0;
    getchar();
    int* results = (int*)malloc(m * sizeof(int));
    int resCount = 0;
    for (int i = 0; i < m; i++) {
        char line[100];
        fgets(line, 100, stdin);
        line[strcspn(line, "\\n")] = 0;
        char cmd[10];
        int a, b;
        if (sscanf(line, "QUERY %d %d", &a, &b) == 2) {
            int sum = 0;
            for (int j = a; j <= b; j++) sum += arr[j];
            results[resCount++] = sum;
        } else if (sscanf(line, "INSERT %d %d", &a, &b) == 2) {
            for (int j = size; j > a; j--) arr[j] = arr[j - 1];
            arr[a] = b;
            size++;
        }
    }
    for (int i = 0; i < resCount; i++) {
        if (i > 0) printf(" ");
        printf("%d", results[i]);
    }
    printf("\\n");
    free(arr);
    free(results);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <sstream>

using namespace std;

vector<int> processOperations(vector<int>& nums, vector<string>& operations) {
    vector<int> arr = nums;
    vector<int> results;
    for (string& op : operations) {
        stringstream ss(op);
        string cmd;
        ss >> cmd;
        if (cmd == "QUERY") {
            int l, r;
            ss >> l >> r;
            int sum = 0;
            for (int i = l; i <= r; i++) sum += arr[i];
            results.push_back(sum);
        } else if (cmd == "INSERT") {
            int pos, val;
            ss >> pos >> val;
            arr.insert(arr.begin() + pos, val);
        }
    }
    return results;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        int m;
        cin >> m;
        cin.ignore();
        vector<string> operations(m);
        for (int i = 0; i < m; i++) getline(cin, operations[i]);
        vector<int> res = processOperations(nums, operations);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  }
};