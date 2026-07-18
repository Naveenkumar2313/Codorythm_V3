export const RMQsolutions = {
  'rmq-e1': {
    python: `def min_of_array(nums):
    return min(nums)

n = int(input())
nums = list(map(int, input().split()))
print(min_of_array(nums))`,
    java: `import java.util.*;

public class Solution {
    public static int minOfArray(int[] nums) {
        int min = nums[0];
        for (int num : nums) {
            if (num < min) min = num;
        }
        return min;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            System.out.println(minOfArray(nums));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int minOfArray(int* nums, int numsSize) {
    int min = nums[0];
    for (int i = 1; i < numsSize; i++) {
        if (nums[i] < min) min = nums[i];
    }
    return min;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    printf("%d\\n", minOfArray(nums, n));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int minOfArray(vector<int>& nums) {
    return *min_element(nums.begin(), nums.end());
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
        cout << minOfArray(nums) << "\\n";
    }
    return 0;
}`
  },
  'rmq-e2': {
    python: `def range_min_query(nums, l, r):
    return min(nums[l:r+1])

n = int(input())
nums = list(map(int, input().split()))
l, r = map(int, input().split())
print(range_min_query(nums, l, r))`,
    java: `import java.util.*;

public class Solution {
    public static int rangeMinQuery(int[] nums, int l, int r) {
        int min = nums[l];
        for (int i = l + 1; i <= r; i++) {
            if (nums[i] < min) min = nums[i];
        }
        return min;
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
            System.out.println(rangeMinQuery(nums, l, r));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int rangeMinQuery(int* nums, int l, int r) {
    int min = nums[l];
    for (int i = l + 1; i <= r; i++) {
        if (nums[i] < min) min = nums[i];
    }
    return min;
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
    printf("%d\\n", rangeMinQuery(nums, l, r));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int rangeMinQuery(vector<int>& nums, int l, int r) {
    return *min_element(nums.begin() + l, nums.begin() + r + 1);
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
        int l, r;
        cin >> l >> r;
        cout << rangeMinQuery(nums, l, r) << "\\n";
    }
    return 0;
}`
  },
  'rmq-e3': {
    python: `def range_min_queries(nums, queries):
    return [min(nums[l:r+1]) for l, r in queries]

n = int(input())
nums = list(map(int, input().split()))
q = int(input())
queries = [tuple(map(int, input().split())) for _ in range(q)]
results = range_min_queries(nums, queries)
print(' '.join(map(str, results)))`,
    java: `import java.util.*;

public class Solution {
    public static int[] rangeMinQueries(int[] nums, int[][] queries) {
        int[] res = new int[queries.length];
        for (int i = 0; i < queries.length; i++) {
            int l = queries[i][0], r = queries[i][1];
            int min = nums[l];
            for (int j = l + 1; j <= r; j++) {
                if (nums[j] < min) min = nums[j];
            }
            res[i] = min;
        }
        return res;
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
            int[] res = rangeMinQueries(nums, queries);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(res[i]);
            }
            System.out.println(sb);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int* rangeMinQueries(int* nums, int numsSize, int** queries, int queriesSize, int* returnSize) {
    *returnSize = queriesSize;
    int* res = (int*)malloc(queriesSize * sizeof(int));
    for (int i = 0; i < queriesSize; i++) {
        int l = queries[i][0], r = queries[i][1];
        int min = nums[l];
        for (int j = l + 1; j <= r; j++) {
            if (nums[j] < min) min = nums[j];
        }
        res[i] = min;
    }
    return res;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int q;
    if (scanf("%d", &q) != 1) return 0;
    int** queries = (int**)malloc(q * sizeof(int*));
    for (int i = 0; i < q; i++) {
        queries[i] = (int*)malloc(2 * sizeof(int));
        if (scanf("%d %d", &queries[i][0], &queries[i][1]) != 2) return 0;
    }
    int returnSize;
    int* res = rangeMinQueries(nums, n, queries, q, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        if (i > 0) printf(" ");
        printf("%d", res[i]);
    }
    printf("\\n");
    free(nums);
    for (int i = 0; i < q; i++) free(queries[i]);
    free(queries);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> rangeMinQueries(vector<int>& nums, vector<vector<int>>& queries) {
    vector<int> res;
    for (auto& q : queries) {
        int l = q[0], r = q[1];
        res.push_back(*min_element(nums.begin() + l, nums.begin() + r + 1));
    }
    return res;
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
        vector<vector<int>> queries(q, vector<int>(2));
        for (int i = 0; i < q; i++) {
            cin >> queries[i][0] >> queries[i][1];
        }
        vector<int> res = rangeMinQueries(nums, queries);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'rmq-e4': {
    python: `class SegTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self._build(arr, 0, 0, self.n - 1)
    def _build(self, arr, node, l, r):
        if l == r:
            self.tree[node] = arr[l]
            return
        mid = (l + r) // 2
        self._build(arr, 2*node+1, l, mid)
        self._build(arr, 2*node+2, mid+1, r)
        self.tree[node] = min(self.tree[2*node+1], self.tree[2*node+2])
    def query(self, ql, qr, node, l, r):
        if ql > r or qr < l: return float('inf')
        if ql <= l and r <= qr: return self.tree[node]
        mid = (l + r) // 2
        left = self.query(ql, qr, 2*node+1, l, mid)
        right = self.query(ql, qr, 2*node+2, mid+1, r)
        return min(left, right)

n = int(input())
nums = list(map(int, input().split()))
l, r = map(int, input().split())
seg = SegTree(nums)
print(seg.query(l, r, 0, 0, n - 1))`,
    java: `import java.util.*;

public class Solution {
    static int[] tree;
    static int n;

    public static void build(int[] arr, int node, int l, int r) {
        if (l == r) {
            tree[node] = arr[l];
            return;
        }
        int mid = l + (r - l) / 2;
        build(arr, 2 * node + 1, l, mid);
        build(arr, 2 * node + 2, mid + 1, r);
        tree[node] = Math.min(tree[2 * node + 1], tree[2 * node + 2]);
    }

    public static int query(int ql, int qr, int node, int l, int r) {
        if (ql > r || qr < l) return Integer.MAX_VALUE;
        if (ql <= l && r <= qr) return tree[node];
        int mid = l + (r - l) / 2;
        int left = query(ql, qr, 2 * node + 1, l, mid);
        int right = query(ql, qr, 2 * node + 2, mid + 1, r);
        return Math.min(left, right);
    }

    public static int rangeMinQuery(int[] nums, int l, int r) {
        n = nums.length;
        tree = new int[4 * n];
        build(nums, 0, 0, n - 1);
        return query(l, r, 0, 0, n - 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int sz = sc.nextInt();
            int[] nums = new int[sz];
            for (int i = 0; i < sz; i++) {
                nums[i] = sc.nextInt();
            }
            int l = sc.nextInt();
            int r = sc.nextInt();
            System.out.println(rangeMinQuery(nums, l, r));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int* tree;
int n;

void build(int* arr, int node, int l, int r) {
    if (l == r) {
        tree[node] = arr[l];
        return;
    }
    int mid = l + (r - l) / 2;
    build(arr, 2 * node + 1, l, mid);
    build(arr, 2 * node + 2, mid + 1, r);
    tree[node] = tree[2 * node + 1] < tree[2 * node + 2] ? tree[2 * node + 1] : tree[2 * node + 2];
}

int query(int ql, int qr, int node, int l, int r) {
    if (ql > r || qr < l) return INT_MAX;
    if (ql <= l && r <= qr) return tree[node];
    int mid = l + (r - l) / 2;
    int left = query(ql, qr, 2 * node + 1, l, mid);
    int right = query(ql, qr, 2 * node + 2, mid + 1, r);
    return left < right ? left : right;
}

int rangeMinQuery(int* nums, int numsSize, int l, int r) {
    n = numsSize;
    tree = (int*)malloc(4 * n * sizeof(int));
    build(nums, 0, 0, n - 1);
    int res = query(l, r, 0, 0, n - 1);
    free(tree);
    return res;
}

int main() {
    int sz;
    if (scanf("%d", &sz) != 1) return 0;
    int* nums = (int*)malloc(sz * sizeof(int));
    for (int i = 0; i < sz; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int l, r;
    if (scanf("%d %d", &l, &r) != 2) return 0;
    printf("%d\\n", rangeMinQuery(nums, sz, l, r));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>

using namespace std;

class SegTree {
    vector<int> tree;
    int n;
public:
    SegTree(vector<int>& arr) {
        n = arr.size();
        tree.resize(4 * n);
        build(arr, 0, 0, n - 1);
    }
    void build(vector<int>& arr, int node, int l, int r) {
        if (l == r) { tree[node] = arr[l]; return; }
        int mid = l + (r - l) / 2;
        build(arr, 2 * node + 1, l, mid);
        build(arr, 2 * node + 2, mid + 1, r);
        tree[node] = min(tree[2 * node + 1], tree[2 * node + 2]);
    }
    int query(int ql, int qr, int node, int l, int r) {
        if (ql > r || qr < l) return INT_MAX;
        if (ql <= l && r <= qr) return tree[node];
        int mid = l + (r - l) / 2;
        return min(query(ql, qr, 2 * node + 1, l, mid),
                   query(ql, qr, 2 * node + 2, mid + 1, r));
    }
    int rangeMin(int l, int r) { return query(l, r, 0, 0, n - 1); }
};

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int sz;
    if (cin >> sz) {
        vector<int> nums(sz);
        for (int i = 0; i < sz; i++) {
            cin >> nums[i];
        }
        int l, r;
        cin >> l >> r;
        SegTree seg(nums);
        cout << seg.rangeMin(l, r) << "\\n";
    }
    return 0;
}`
  },
  'rmq-e5': {
    python: `class SegTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self._build(arr, 0, 0, self.n - 1)
    def _build(self, arr, node, l, r):
        if l == r:
            self.tree[node] = arr[l]
            return
        mid = (l + r) // 2
        self._build(arr, 2*node+1, l, mid)
        self._build(arr, 2*node+2, mid+1, r)
        self.tree[node] = min(self.tree[2*node+1], self.tree[2*node+2])
    def update(self, idx, val, node, l, r):
        if l == r:
            self.tree[node] = val
            return
        mid = (l + r) // 2
        if idx <= mid:
            self.update(idx, val, 2*node+1, l, mid)
        else:
            self.update(idx, val, 2*node+2, mid+1, r)
        self.tree[node] = min(self.tree[2*node+1], self.tree[2*node+2])
    def query(self, ql, qr, node, l, r):
        if ql > r or qr < l: return float('inf')
        if ql <= l and r <= qr: return self.tree[node]
        mid = (l + r) // 2
        left = self.query(ql, qr, 2*node+1, l, mid)
        right = self.query(ql, qr, 2*node+2, mid+1, r)
        return min(left, right)

n = int(input())
nums = list(map(int, input().split()))
op_cnt = int(input())
seg = SegTree(nums)
results = []
for _ in range(op_cnt):
    parts = input().split()
    if parts[0] == 'QUERY':
        l, r = int(parts[1]), int(parts[2])
        results.append(str(seg.query(l, r, 0, 0, n - 1)))
    elif parts[0] == 'UPDATE':
        i, val = int(parts[1]), int(parts[2])
        seg.update(i, val, 0, 0, n - 1)
print(' '.join(results))`,
    java: `import java.util.*;

public class Solution {
    static int[] tree;
    static int n;

    public static void build(int[] arr, int node, int l, int r) {
        if (l == r) { tree[node] = arr[l]; return; }
        int mid = l + (r - l) / 2;
        build(arr, 2 * node + 1, l, mid);
        build(arr, 2 * node + 2, mid + 1, r);
        tree[node] = Math.min(tree[2 * node + 1], tree[2 * node + 2]);
    }

    public static void update(int idx, int val, int node, int l, int r) {
        if (l == r) { tree[node] = val; return; }
        int mid = l + (r - l) / 2;
        if (idx <= mid) update(idx, val, 2 * node + 1, l, mid);
        else update(idx, val, 2 * node + 2, mid + 1, r);
        tree[node] = Math.min(tree[2 * node + 1], tree[2 * node + 2]);
    }

    public static int query(int ql, int qr, int node, int l, int r) {
        if (ql > r || qr < l) return Integer.MAX_VALUE;
        if (ql <= l && r <= qr) return tree[node];
        int mid = l + (r - l) / 2;
        return Math.min(query(ql, qr, 2 * node + 1, l, mid),
                        query(ql, qr, 2 * node + 2, mid + 1, r));
    }

    public static int[] processOperations(int[] nums, String[] ops) {
        n = nums.length;
        tree = new int[4 * n];
        build(nums, 0, 0, n - 1);
        List<Integer> res = new ArrayList<>();
        for (String op : ops) {
            String[] parts = op.split(" ");
            if (parts[0].equals("QUERY")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                res.add(query(l, r, 0, 0, n - 1));
            } else if (parts[0].equals("UPDATE")) {
                int idx = Integer.parseInt(parts[1]);
                int val = Integer.parseInt(parts[2]);
                update(idx, val, 0, 0, n - 1);
            }
        }
        int[] result = new int[res.size()];
        for (int i = 0; i < res.size(); i++) result[i] = res.get(i);
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int sz = sc.nextInt();
            int[] nums = new int[sz];
            for (int i = 0; i < sz; i++) {
                nums[i] = sc.nextInt();
            }
            int ops = sc.nextInt();
            sc.nextLine();
            String[] operations = new String[ops];
            for (int i = 0; i < ops; i++) {
                operations[i] = sc.nextLine();
            }
            int[] res = processOperations(nums, operations);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(res[i]);
            }
            System.out.println(sb);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>
#include <string.h>

int* tree;
int n;

void build(int* arr, int node, int l, int r) {
    if (l == r) { tree[node] = arr[l]; return; }
    int mid = l + (r - l) / 2;
    build(arr, 2 * node + 1, l, mid);
    build(arr, 2 * node + 2, mid + 1, r);
    tree[node] = tree[2 * node + 1] < tree[2 * node + 2] ? tree[2 * node + 1] : tree[2 * node + 2];
}

void update(int idx, int val, int node, int l, int r) {
    if (l == r) { tree[node] = val; return; }
    int mid = l + (r - l) / 2;
    if (idx <= mid) update(idx, val, 2 * node + 1, l, mid);
    else update(idx, val, 2 * node + 2, mid + 1, r);
    tree[node] = tree[2 * node + 1] < tree[2 * node + 2] ? tree[2 * node + 1] : tree[2 * node + 2];
}

int query(int ql, int qr, int node, int l, int r) {
    if (ql > r || qr < l) return INT_MAX;
    if (ql <= l && r <= qr) return tree[node];
    int mid = l + (r - l) / 2;
    int left = query(ql, qr, 2 * node + 1, l, mid);
    int right = query(ql, qr, 2 * node + 2, mid + 1, r);
    return left < right ? left : right;
}

int* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {
    n = numsSize;
    tree = (int*)malloc(4 * n * sizeof(int));
    build(nums, 0, 0, n - 1);
    int* res = (int*)malloc(opsSize * sizeof(int));
    int cnt = 0;
    for (int i = 0; i < opsSize; i++) {
        char op[10];
        int a, b;
        sscanf(operations[i], "%s %d %d", op, &a, &b);
        if (strcmp(op, "QUERY") == 0) {
            res[cnt++] = query(a, b, 0, 0, n - 1);
        } else if (strcmp(op, "UPDATE") == 0) {
            update(a, b, 0, 0, n - 1);
        }
    }
    *returnSize = cnt;
    free(tree);
    return res;
}

int main() {
    int sz;
    if (scanf("%d", &sz) != 1) return 0;
    int* nums = (int*)malloc(sz * sizeof(int));
    for (int i = 0; i < sz; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int ops;
    if (scanf("%d", &ops) != 1) return 0;
    getchar();
    char** operations = (char**)malloc(ops * sizeof(char*));
    for (int i = 0; i < ops; i++) {
        operations[i] = (char*)malloc(100 * sizeof(char));
        if (fgets(operations[i], 100, stdin) == NULL) return 0;
        operations[i][strcspn(operations[i], "\\n")] = 0;
    }
    int returnSize;
    int* res = processOperations(nums, sz, operations, ops, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        if (i > 0) printf(" ");
        printf("%d", res[i]);
    }
    printf("\\n");
    free(nums);
    for (int i = 0; i < ops; i++) free(operations[i]);
    free(operations);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <sstream>
#include <algorithm>
#include <climits>

using namespace std;

class SegTree {
    vector<int> tree;
    int n;
public:
    SegTree(vector<int>& arr) {
        n = arr.size();
        tree.resize(4 * n);
        build(arr, 0, 0, n - 1);
    }
    void build(vector<int>& arr, int node, int l, int r) {
        if (l == r) { tree[node] = arr[l]; return; }
        int mid = l + (r - l) / 2;
        build(arr, 2 * node + 1, l, mid);
        build(arr, 2 * node + 2, mid + 1, r);
        tree[node] = min(tree[2 * node + 1], tree[2 * node + 2]);
    }
    void update(int idx, int val, int node, int l, int r) {
        if (l == r) { tree[node] = val; return; }
        int mid = l + (r - l) / 2;
        if (idx <= mid) update(idx, val, 2 * node + 1, l, mid);
        else update(idx, val, 2 * node + 2, mid + 1, r);
        tree[node] = min(tree[2 * node + 1], tree[2 * node + 2]);
    }
    int query(int ql, int qr, int node, int l, int r) {
        if (ql > r || qr < l) return INT_MAX;
        if (ql <= l && r <= qr) return tree[node];
        int mid = l + (r - l) / 2;
        return min(query(ql, qr, 2 * node + 1, l, mid),
                   query(ql, qr, 2 * node + 2, mid + 1, r));
    }
    int rangeMin(int l, int r) { return query(l, r, 0, 0, n - 1); }
    void pointUpdate(int idx, int val) { update(idx, val, 0, 0, n - 1); }
};

vector<int> processOperations(vector<int>& nums, vector<string>& ops) {
    SegTree seg(nums);
    vector<int> res;
    for (string& op : ops) {
        stringstream ss(op);
        string cmd;
        ss >> cmd;
        if (cmd == "QUERY") {
            int l, r;
            ss >> l >> r;
            res.push_back(seg.rangeMin(l, r));
        } else if (cmd == "UPDATE") {
            int idx, val;
            ss >> idx >> val;
            seg.pointUpdate(idx, val);
        }
    }
    return res;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int sz;
    if (cin >> sz) {
        vector<int> nums(sz);
        for (int i = 0; i < sz; i++) {
            cin >> nums[i];
        }
        int opCnt;
        cin >> opCnt;
        cin.ignore();
        vector<string> ops(opCnt);
        for (int i = 0; i < opCnt; i++) {
            getline(cin, ops[i]);
        }
        vector<int> res = processOperations(nums, ops);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'rmq-m1': {
    python: `import math

def range_min_queries(nums, queries):
    n = len(nums)
    log = [0] * (n + 1)
    for i in range(2, n + 1):
        log[i] = log[i // 2] + 1
    K = log[n] + 1
    st = [[0] * K for _ in range(n)]
    for i in range(n):
        st[i][0] = nums[i]
    j = 1
    while (1 << j) <= n:
        i = 0
        while i + (1 << j) <= n:
            st[i][j] = min(st[i][j - 1], st[i + (1 << (j - 1))][j - 1])
            i += 1
        j += 1
    res = []
    for l, r in queries:
        length = r - l + 1
        k = log[length]
        res.append(min(st[l][k], st[r - (1 << k) + 1][k]))
    return res

n = int(input())
nums = list(map(int, input().split()))
q = int(input())
queries = [tuple(map(int, input().split())) for _ in range(q)]
results = range_min_queries(nums, queries)
print(' '.join(map(str, results)))`,
    java: `import java.util.*;

public class Solution {
    public static int[] rangeMinQueries(int[] nums, int[][] queries) {
        int n = nums.length;
        int[] log = new int[n + 1];
        for (int i = 2; i <= n; i++) {
            log[i] = log[i / 2] + 1;
        }
        int K = log[n] + 1;
        int[][] st = new int[n][K];
        for (int i = 0; i < n; i++) {
            st[i][0] = nums[i];
        }
        for (int j = 1; (1 << j) <= n; j++) {
            for (int i = 0; i + (1 << j) <= n; i++) {
                st[i][j] = Math.min(st[i][j - 1], st[i + (1 << (j - 1))][j - 1]);
            }
        }
        int[] res = new int[queries.length];
        for (int q = 0; q < queries.length; q++) {
            int l = queries[q][0], r = queries[q][1];
            int length = r - l + 1;
            int k = log[length];
            res[q] = Math.min(st[l][k], st[r - (1 << k) + 1][k]);
        }
        return res;
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
            int[] res = rangeMinQueries(nums, queries);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(res[i]);
            }
            System.out.println(sb);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int* rangeMinQueries(int* nums, int numsSize, int** queries, int queriesSize, int* returnSize) {
    *returnSize = queriesSize;
    int* log = (int*)calloc(numsSize + 1, sizeof(int));
    for (int i = 2; i <= numsSize; i++) {
        log[i] = log[i / 2] + 1;
    }
    int K = log[numsSize] + 1;
    int** st = (int**)malloc(numsSize * sizeof(int*));
    for (int i = 0; i < numsSize; i++) {
        st[i] = (int*)malloc(K * sizeof(int));
        st[i][0] = nums[i];
    }
    for (int j = 1; (1 << j) <= numsSize; j++) {
        for (int i = 0; i + (1 << j) <= numsSize; i++) {
            int a = st[i][j - 1];
            int b = st[i + (1 << (j - 1))][j - 1];
            st[i][j] = a < b ? a : b;
        }
    }
    int* res = (int*)malloc(queriesSize * sizeof(int));
    for (int q = 0; q < queriesSize; q++) {
        int l = queries[q][0], r = queries[q][1];
        int length = r - l + 1;
        int k = log[length];
        int a = st[l][k];
        int b = st[r - (1 << k) + 1][k];
        res[q] = a < b ? a : b;
    }
    free(log);
    for (int i = 0; i < numsSize; i++) free(st[i]);
    free(st);
    return res;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int q;
    if (scanf("%d", &q) != 1) return 0;
    int** queries = (int**)malloc(q * sizeof(int*));
    for (int i = 0; i < q; i++) {
        queries[i] = (int*)malloc(2 * sizeof(int));
        if (scanf("%d %d", &queries[i][0], &queries[i][1]) != 2) return 0;
    }
    int returnSize;
    int* res = rangeMinQueries(nums, n, queries, q, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        if (i > 0) printf(" ");
        printf("%d", res[i]);
    }
    printf("\\n");
    free(nums);
    for (int i = 0; i < q; i++) free(queries[i]);
    free(queries);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <cmath>
#include <algorithm>

using namespace std;

vector<int> rangeMinQueries(vector<int>& nums, vector<vector<int>>& queries) {
    int n = nums.size();
    vector<int> log(n + 1, 0);
    for (int i = 2; i <= n; i++) {
        log[i] = log[i / 2] + 1;
    }
    int K = log[n] + 1;
    vector<vector<int>> st(n, vector<int>(K));
    for (int i = 0; i < n; i++) {
        st[i][0] = nums[i];
    }
    for (int j = 1; (1 << j) <= n; j++) {
        for (int i = 0; i + (1 << j) <= n; i++) {
            st[i][j] = min(st[i][j - 1], st[i + (1 << (j - 1))][j - 1]);
        }
    }
    vector<int> res;
    for (auto& q : queries) {
        int l = q[0], r = q[1];
        int length = r - l + 1;
        int k = log[length];
        res.push_back(min(st[l][k], st[r - (1 << k) + 1][k]));
    }
    return res;
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
        vector<vector<int>> queries(q, vector<int>(2));
        for (int i = 0; i < q; i++) {
            cin >> queries[i][0] >> queries[i][1];
        }
        vector<int> res = rangeMinQueries(nums, queries);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'rmq-m2': {
    python: `def min_subarray_length(nums, k):
    n = len(nums)
    ans = n + 1
    for i in range(n):
        if nums[i] <= k:
            return 1
    return -1

n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(min_subarray_length(nums, k))`,
    java: `import java.util.*;

public class Solution {
    public static int minSubarrayLength(int[] nums, int k) {
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            if (nums[i] <= k) return 1;
        }
        return -1;
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
            System.out.println(minSubarrayLength(nums, k));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int minSubarrayLength(int* nums, int numsSize, int k) {
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] <= k) return 1;
    }
    return -1;
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
    printf("%d\\n", minSubarrayLength(nums, n, k));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int minSubarrayLength(vector<int>& nums, int k) {
    for (int i = 0; i < (int)nums.size(); i++) {
        if (nums[i] <= k) return 1;
    }
    return -1;
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
        int k;
        cin >> k;
        cout << minSubarrayLength(nums, k) << "\\n";
    }
    return 0;
}`
  },
  'rmq-m3': {
    python: `def count_left_min_queries(nums, queries):
    n = len(nums)
    log = [0] * (n + 1)
    for i in range(2, n + 1):
        log[i] = log[i // 2] + 1
    K = log[n] + 1
    st = [[0] * K for _ in range(n)]
    for i in range(n):
        st[i][0] = nums[i]
    j = 1
    while (1 << j) <= n:
        i = 0
        while i + (1 << j) <= n:
            st[i][j] = min(st[i][j - 1], st[i + (1 << (j - 1))][j - 1])
            i += 1
        j += 1
    def range_min(l, r):
        length = r - l + 1
        k = log[length]
        return min(st[l][k], st[r - (1 << k) + 1][k])
    count = 0
    for l, r in queries:
        if range_min(l, r) == nums[l]:
            count += 1
    return count

n = int(input())
nums = list(map(int, input().split()))
q = int(input())
queries = [tuple(map(int, input().split())) for _ in range(q)]
print(count_left_min_queries(nums, queries))`,
    java: `import java.util.*;

public class Solution {
    public static int countLeftMinQueries(int[] nums, int[][] queries) {
        int n = nums.length;
        int[] log = new int[n + 1];
        for (int i = 2; i <= n; i++) {
            log[i] = log[i / 2] + 1;
        }
        int K = log[n] + 1;
        int[][] st = new int[n][K];
        for (int i = 0; i < n; i++) {
            st[i][0] = nums[i];
        }
        for (int j = 1; (1 << j) <= n; j++) {
            for (int i = 0; i + (1 << j) <= n; i++) {
                st[i][j] = Math.min(st[i][j - 1], st[i + (1 << (j - 1))][j - 1]);
            }
        }
        int count = 0;
        for (int[] q : queries) {
            int l = q[0], r = q[1];
            int length = r - l + 1;
            int k = log[length];
            int minVal = Math.min(st[l][k], st[r - (1 << k) + 1][k]);
            if (minVal == nums[l]) count++;
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
            System.out.println(countLeftMinQueries(nums, queries));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int countLeftMinQueries(int* nums, int numsSize, int** queries, int queriesSize) {
    int* log = (int*)calloc(numsSize + 1, sizeof(int));
    for (int i = 2; i <= numsSize; i++) {
        log[i] = log[i / 2] + 1;
    }
    int K = log[numsSize] + 1;
    int** st = (int**)malloc(numsSize * sizeof(int*));
    for (int i = 0; i < numsSize; i++) {
        st[i] = (int*)malloc(K * sizeof(int));
        st[i][0] = nums[i];
    }
    for (int j = 1; (1 << j) <= numsSize; j++) {
        for (int i = 0; i + (1 << j) <= numsSize; i++) {
            int a = st[i][j - 1], b = st[i + (1 << (j - 1))][j - 1];
            st[i][j] = a < b ? a : b;
        }
    }
    int count = 0;
    for (int q = 0; q < queriesSize; q++) {
        int l = queries[q][0], r = queries[q][1];
        int length = r - l + 1;
        int k = log[length];
        int a = st[l][k], b = st[r - (1 << k) + 1][k];
        int minVal = a < b ? a : b;
        if (minVal == nums[l]) count++;
    }
    free(log);
    for (int i = 0; i < numsSize; i++) free(st[i]);
    free(st);
    return count;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int q;
    if (scanf("%d", &q) != 1) return 0;
    int** queries = (int**)malloc(q * sizeof(int*));
    for (int i = 0; i < q; i++) {
        queries[i] = (int*)malloc(2 * sizeof(int));
        if (scanf("%d %d", &queries[i][0], &queries[i][1]) != 2) return 0;
    }
    printf("%d\\n", countLeftMinQueries(nums, n, queries, q));
    free(nums);
    for (int i = 0; i < q; i++) free(queries[i]);
    free(queries);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <cmath>
#include <algorithm>

using namespace std;

int countLeftMinQueries(vector<int>& nums, vector<vector<int>>& queries) {
    int n = nums.size();
    vector<int> log(n + 1, 0);
    for (int i = 2; i <= n; i++) {
        log[i] = log[i / 2] + 1;
    }
    int K = log[n] + 1;
    vector<vector<int>> st(n, vector<int>(K));
    for (int i = 0; i < n; i++) {
        st[i][0] = nums[i];
    }
    for (int j = 1; (1 << j) <= n; j++) {
        for (int i = 0; i + (1 << j) <= n; i++) {
            st[i][j] = min(st[i][j - 1], st[i + (1 << (j - 1))][j - 1]);
        }
    }
    int count = 0;
    for (auto& q : queries) {
        int l = q[0], r = q[1];
        int length = r - l + 1;
        int k = log[length];
        int minVal = min(st[l][k], st[r - (1 << k) + 1][k]);
        if (minVal == nums[l]) count++;
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
        vector<vector<int>> queries(q, vector<int>(2));
        for (int i = 0; i < q; i++) {
            cin >> queries[i][0] >> queries[i][1];
        }
        cout << countLeftMinQueries(nums, queries) << "\\n";
    }
    return 0;
}`
  },
  'rmq-m4': {
    python: `def range_min_with_count(nums, queries):
    n = len(nums)
    log = [0] * (n + 1)
    for i in range(2, n + 1):
        log[i] = log[i // 2] + 1
    K = log[n] + 1
    st = [[0] * K for _ in range(n)]
    for i in range(n):
        st[i][0] = nums[i]
    j = 1
    while (1 << j) <= n:
        i = 0
        while i + (1 << j) <= n:
            st[i][j] = min(st[i][j - 1], st[i + (1 << (j - 1))][j - 1])
            i += 1
        j += 1
    # Precompute prefix positions for each value for fast counting
    from collections import defaultdict
    pos = defaultdict(list)
    for i, v in enumerate(nums):
        pos[v].append(i)
    results = []
    for l, r in queries:
        length = r - l + 1
        k = log[length]
        min_val = min(st[l][k], st[r - (1 << k) + 1][k])
        # Count occurrences of min_val in [l, r]
        import bisect
        left = bisect.bisect_left(pos[min_val], l)
        right = bisect.bisect_right(pos[min_val], r)
        results.append(f"{min_val} {right - left}")
    return results

n = int(input())
nums = list(map(int, input().split()))
q = int(input())
queries = [tuple(map(int, input().split())) for _ in range(q)]
results = range_min_with_count(nums, queries)
print('\\n'.join(results))`,
    java: `import java.util.*;

public class Solution {
    public static int[][] rangeMinWithCount(int[] nums, int[][] queries) {
        int n = nums.length;
        int[] log = new int[n + 1];
        for (int i = 2; i <= n; i++) {
            log[i] = log[i / 2] + 1;
        }
        int K = log[n] + 1;
        int[][] st = new int[n][K];
        for (int i = 0; i < n; i++) {
            st[i][0] = nums[i];
        }
        for (int j = 1; (1 << j) <= n; j++) {
            for (int i = 0; i + (1 << j) <= n; i++) {
                st[i][j] = Math.min(st[i][j - 1], st[i + (1 << (j - 1))][j - 1]);
            }
        }
        // Precompute positions map
        Map<Integer, List<Integer>> pos = new HashMap<>();
        for (int i = 0; i < n; i++) {
            pos.computeIfAbsent(nums[i], k -> new ArrayList<>()).add(i);
        }
        int[][] res = new int[queries.length][2];
        for (int q = 0; q < queries.length; q++) {
            int l = queries[q][0], r = queries[q][1];
            int length = r - l + 1;
            int k = log[length];
            int minVal = Math.min(st[l][k], st[r - (1 << k) + 1][k]);
            res[q][0] = minVal;
            List<Integer> list = pos.get(minVal);
            int left = Collections.binarySearch(list, l);
            if (left < 0) left = -left - 1;
            int right = Collections.binarySearch(list, r);
            if (right < 0) right = -right - 2;
            res[q][1] = right - left + 1;
        }
        return res;
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
            int[][] res = rangeMinWithCount(nums, queries);
            for (int i = 0; i < res.length; i++) {
                System.out.println(res[i][0] + " " + res[i][1]);
            }
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int compare(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int** rangeMinWithCount(int* nums, int numsSize, int** queries, int queriesSize, int* returnSize, int** returnColumnSizes) {
    *returnSize = queriesSize;
    *returnColumnSizes = (int*)malloc(queriesSize * sizeof(int));
    int* log = (int*)calloc(numsSize + 1, sizeof(int));
    for (int i = 2; i <= numsSize; i++) log[i] = log[i / 2] + 1;
    int K = log[numsSize] + 1;
    int** st = (int**)malloc(numsSize * sizeof(int*));
    for (int i = 0; i < numsSize; i++) {
        st[i] = (int*)malloc(K * sizeof(int));
        st[i][0] = nums[i];
    }
    for (int j = 1; (1 << j) <= numsSize; j++) {
        for (int i = 0; i + (1 << j) <= numsSize; i++) {
            int a = st[i][j - 1], b = st[i + (1 << (j - 1))][j - 1];
            st[i][j] = a < b ? a : b;
        }
    }
    int** res = (int**)malloc(queriesSize * sizeof(int*));
    for (int q = 0; q < queriesSize; q++) {
        res[q] = (int*)malloc(2 * sizeof(int));
        (*returnColumnSizes)[q] = 2;
        int l = queries[q][0], r = queries[q][1];
        int length = r - l + 1;
        int k = log[length];
        int a = st[l][k], b = st[r - (1 << k) + 1][k];
        int minVal = a < b ? a : b;
        res[q][0] = minVal;
        int cnt = 0;
        for (int i = l; i <= r; i++) {
            if (nums[i] == minVal) cnt++;
        }
        res[q][1] = cnt;
    }
    free(log);
    for (int i = 0; i < numsSize; i++) free(st[i]);
    free(st);
    return res;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int q;
    if (scanf("%d", &q) != 1) return 0;
    int** queries = (int**)malloc(q * sizeof(int*));
    for (int i = 0; i < q; i++) {
        queries[i] = (int*)malloc(2 * sizeof(int));
        if (scanf("%d %d", &queries[i][0], &queries[i][1]) != 2) return 0;
    }
    int returnSize;
    int* returnColumnSizes;
    int** res = rangeMinWithCount(nums, n, queries, q, &returnSize, &returnColumnSizes);
    for (int i = 0; i < returnSize; i++) {
        printf("%d %d\\n", res[i][0], res[i][1]);
        free(res[i]);
    }
    free(res);
    free(returnColumnSizes);
    free(nums);
    for (int i = 0; i < q; i++) free(queries[i]);
    free(queries);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <cmath>
#include <algorithm>
#include <unordered_map>

using namespace std;

vector<vector<int>> rangeMinWithCount(vector<int>& nums, vector<vector<int>>& queries) {
    int n = nums.size();
    vector<int> log(n + 1, 0);
    for (int i = 2; i <= n; i++) log[i] = log[i / 2] + 1;
    int K = log[n] + 1;
    vector<vector<int>> st(n, vector<int>(K));
    for (int i = 0; i < n; i++) st[i][0] = nums[i];
    for (int j = 1; (1 << j) <= n; j++) {
        for (int i = 0; i + (1 << j) <= n; i++) {
            st[i][j] = min(st[i][j - 1], st[i + (1 << (j - 1))][j - 1]);
        }
    }
    unordered_map<int, vector<int>> pos;
    for (int i = 0; i < n; i++) pos[nums[i]].push_back(i);
    vector<vector<int>> res;
    for (auto& q : queries) {
        int l = q[0], r = q[1];
        int length = r - l + 1;
        int k = log[length];
        int minVal = min(st[l][k], st[r - (1 << k) + 1][k]);
        auto& vec = pos[minVal];
        int left = lower_bound(vec.begin(), vec.end(), l) - vec.begin();
        int right = upper_bound(vec.begin(), vec.end(), r) - vec.begin() - 1;
        res.push_back({minVal, right - left + 1});
    }
    return res;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        int q;
        cin >> q;
        vector<vector<int>> queries(q, vector<int>(2));
        for (int i = 0; i < q; i++) cin >> queries[i][0] >> queries[i][1];
        vector<vector<int>> res = rangeMinWithCount(nums, queries);
        for (auto& r : res) cout << r[0] << " " << r[1] << "\\n";
    }
    return 0;
}`
  },
  'rmq-m5': {
    python: `from collections import deque

def sliding_window_minimum(nums, w):
    dq = deque()
    result = []
    for i, v in enumerate(nums):
        while dq and dq[-1][1] >= v:
            dq.pop()
        dq.append((i, v))
        if dq[0][0] <= i - w:
            dq.popleft()
        if i >= w - 1:
            result.append(str(dq[0][1]))
    return result

n = int(input())
nums = list(map(int, input().split()))
w = int(input())
print(' '.join(sliding_window_minimum(nums, w)))`,
    java: `import java.util.*;

public class Solution {
    public static int[] slidingWindowMinimum(int[] nums, int w) {
        int n = nums.length;
        int[] res = new int[n - w + 1];
        Deque<Integer> dq = new ArrayDeque<>();
        int idx = 0;
        for (int i = 0; i < n; i++) {
            while (!dq.isEmpty() && nums[dq.peekLast()] >= nums[i]) {
                dq.pollLast();
            }
            dq.offerLast(i);
            if (dq.peekFirst() <= i - w) {
                dq.pollFirst();
            }
            if (i >= w - 1) {
                res[idx++] = nums[dq.peekFirst()];
            }
        }
        return res;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            int w = sc.nextInt();
            int[] res = slidingWindowMinimum(nums, w);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(res[i]);
            }
            System.out.println(sb);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int* slidingWindowMinimum(int* nums, int numsSize, int w, int* returnSize) {
    *returnSize = numsSize - w + 1;
    int* res = (int*)malloc(*returnSize * sizeof(int));
    int* dq = (int*)malloc(numsSize * sizeof(int));
    int front = 0, back = 0, idx = 0;
    for (int i = 0; i < numsSize; i++) {
        while (back > front && nums[dq[back - 1]] >= nums[i]) back--;
        dq[back++] = i;
        if (dq[front] <= i - w) front++;
        if (i >= w - 1) res[idx++] = nums[dq[front]];
    }
    free(dq);
    return res;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int w;
    if (scanf("%d", &w) != 1) return 0;
    int returnSize;
    int* res = slidingWindowMinimum(nums, n, w, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        if (i > 0) printf(" ");
        printf("%d", res[i]);
    }
    printf("\\n");
    free(nums);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <deque>

using namespace std;

vector<int> slidingWindowMinimum(vector<int>& nums, int w) {
    deque<int> dq;
    vector<int> res;
    for (int i = 0; i < (int)nums.size(); i++) {
        while (!dq.empty() && nums[dq.back()] >= nums[i]) dq.pop_back();
        dq.push_back(i);
        if (dq.front() <= i - w) dq.pop_front();
        if (i >= w - 1) res.push_back(nums[dq.front()]);
    }
    return res;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        int w;
        cin >> w;
        vector<int> res = slidingWindowMinimum(nums, w);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'rmq-h1': {
    python: `class LazySegTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self.lazy = [None] * (4 * self.n)
        self._build(arr, 0, 0, self.n - 1)
    def _build(self, arr, node, l, r):
        if l == r:
            self.tree[node] = arr[l]
            return
        mid = (l + r) // 2
        self._build(arr, 2*node+1, l, mid)
        self._build(arr, 2*node+2, mid+1, r)
        self.tree[node] = min(self.tree[2*node+1], self.tree[2*node+2])
    def _push(self, node, l, r):
        if self.lazy[node] is not None:
            self.tree[node] = self.lazy[node]
            if l != r:
                self.lazy[2*node+1] = self.lazy[node]
                self.lazy[2*node+2] = self.lazy[node]
            self.lazy[node] = None
    def update(self, ql, qr, val, node, l, r):
        self._push(node, l, r)
        if ql > r or qr < l: return
        if ql <= l and r <= qr:
            self.lazy[node] = val
            self._push(node, l, r)
            return
        mid = (l + r) // 2
        self.update(ql, qr, val, 2*node+1, l, mid)
        self.update(ql, qr, val, 2*node+2, mid+1, r)
        self.tree[node] = min(self.tree[2*node+1], self.tree[2*node+2])
    def query(self, ql, qr, node, l, r):
        self._push(node, l, r)
        if ql > r or qr < l: return float('inf')
        if ql <= l and r <= qr: return self.tree[node]
        mid = (l + r) // 2
        left = self.query(ql, qr, 2*node+1, l, mid)
        right = self.query(ql, qr, 2*node+2, mid+1, r)
        return min(left, right)

n = int(input())
nums = list(map(int, input().split()))
op_cnt = int(input())
seg = LazySegTree(nums)
results = []
for _ in range(op_cnt):
    parts = input().split()
    if parts[0] == 'QUERY':
        l, r = int(parts[1]), int(parts[2])
        results.append(str(seg.query(l, r, 0, 0, n - 1)))
    elif parts[0] == 'ASSIGN':
        l, r, val = int(parts[1]), int(parts[2]), int(parts[3])
        seg.update(l, r, val, 0, 0, n - 1)
print(' '.join(results))`,
    java: `import java.util.*;

public class Solution {
    static int[] tree;
    static int[] lazy;
    static int n;

    public static void build(int[] arr, int node, int l, int r) {
        if (l == r) { tree[node] = arr[l]; return; }
        int mid = l + (r - l) / 2;
        build(arr, 2 * node + 1, l, mid);
        build(arr, 2 * node + 2, mid + 1, r);
        tree[node] = Math.min(tree[2 * node + 1], tree[2 * node + 2]);
    }

    public static void push(int node, int l, int r) {
        if (lazy[node] != 0) {
            tree[node] = lazy[node];
            if (l != r) {
                lazy[2 * node + 1] = lazy[node];
                lazy[2 * node + 2] = lazy[node];
            }
            lazy[node] = 0;
        }
    }

    public static void update(int ql, int qr, int val, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return;
        if (ql <= l && r <= qr) {
            lazy[node] = val;
            push(node, l, r);
            return;
        }
        int mid = l + (r - l) / 2;
        update(ql, qr, val, 2 * node + 1, l, mid);
        update(ql, qr, val, 2 * node + 2, mid + 1, r);
        tree[node] = Math.min(tree[2 * node + 1], tree[2 * node + 2]);
    }

    public static int query(int ql, int qr, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return Integer.MAX_VALUE;
        if (ql <= l && r <= qr) return tree[node];
        int mid = l + (r - l) / 2;
        return Math.min(query(ql, qr, 2 * node + 1, l, mid),
                        query(ql, qr, 2 * node + 2, mid + 1, r));
    }

    public static int[] processOperations(int[] nums, String[] ops) {
        n = nums.length;
        tree = new int[4 * n];
        lazy = new int[4 * n];
        build(nums, 0, 0, n - 1);
        List<Integer> res = new ArrayList<>();
        for (String op : ops) {
            String[] parts = op.split(" ");
            if (parts[0].equals("QUERY")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                res.add(query(l, r, 0, 0, n - 1));
            } else if (parts[0].equals("ASSIGN")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                int val = Integer.parseInt(parts[3]);
                update(l, r, val, 0, 0, n - 1);
            }
        }
        int[] result = new int[res.size()];
        for (int i = 0; i < res.size(); i++) result[i] = res.get(i);
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int sz = sc.nextInt();
            int[] nums = new int[sz];
            for (int i = 0; i < sz; i++) {
                nums[i] = sc.nextInt();
            }
            int ops = sc.nextInt();
            sc.nextLine();
            String[] operations = new String[ops];
            for (int i = 0; i < ops; i++) {
                operations[i] = sc.nextLine();
            }
            int[] res = processOperations(nums, operations);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(res[i]);
            }
            System.out.println(sb);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>
#include <string.h>

int* tree;
int* lazy;
int n;

void build(int* arr, int node, int l, int r) {
    if (l == r) { tree[node] = arr[l]; return; }
    int mid = l + (r - l) / 2;
    build(arr, 2 * node + 1, l, mid);
    build(arr, 2 * node + 2, mid + 1, r);
    tree[node] = tree[2 * node + 1] < tree[2 * node + 2] ? tree[2 * node + 1] : tree[2 * node + 2];
}

void push(int node, int l, int r) {
    if (lazy[node] != 0) {
        tree[node] = lazy[node];
        if (l != r) {
            lazy[2 * node + 1] = lazy[node];
            lazy[2 * node + 2] = lazy[node];
        }
        lazy[node] = 0;
    }
}

void update(int ql, int qr, int val, int node, int l, int r) {
    push(node, l, r);
    if (ql > r || qr < l) return;
    if (ql <= l && r <= qr) {
        lazy[node] = val;
        push(node, l, r);
        return;
    }
    int mid = l + (r - l) / 2;
    update(ql, qr, val, 2 * node + 1, l, mid);
    update(ql, qr, val, 2 * node + 2, mid + 1, r);
    tree[node] = tree[2 * node + 1] < tree[2 * node + 2] ? tree[2 * node + 1] : tree[2 * node + 2];
}

int query(int ql, int qr, int node, int l, int r) {
    push(node, l, r);
    if (ql > r || qr < l) return INT_MAX;
    if (ql <= l && r <= qr) return tree[node];
    int mid = l + (r - l) / 2;
    int left = query(ql, qr, 2 * node + 1, l, mid);
    int right = query(ql, qr, 2 * node + 2, mid + 1, r);
    return left < right ? left : right;
}

int* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {
    n = numsSize;
    tree = (int*)calloc(4 * n, sizeof(int));
    lazy = (int*)calloc(4 * n, sizeof(int));
    build(nums, 0, 0, n - 1);
    int* res = (int*)malloc(opsSize * sizeof(int));
    int cnt = 0;
    for (int i = 0; i < opsSize; i++) {
        char op[10];
        int a, b, c;
        if (sscanf(operations[i], "%s %d %d %d", op, &a, &b, &c) >= 3) {
            if (strcmp(op, "QUERY") == 0) {
                res[cnt++] = query(a, b, 0, 0, n - 1);
            } else if (strcmp(op, "ASSIGN") == 0) {
                update(a, b, c, 0, 0, n - 1);
            }
        }
    }
    *returnSize = cnt;
    free(tree);
    free(lazy);
    return res;
}

int main() {
    int sz;
    if (scanf("%d", &sz) != 1) return 0;
    int* nums = (int*)malloc(sz * sizeof(int));
    for (int i = 0; i < sz; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int ops;
    if (scanf("%d", &ops) != 1) return 0;
    getchar();
    char** operations = (char**)malloc(ops * sizeof(char*));
    for (int i = 0; i < ops; i++) {
        operations[i] = (char*)malloc(100 * sizeof(char));
        if (fgets(operations[i], 100, stdin) == NULL) return 0;
        operations[i][strcspn(operations[i], "\\n")] = 0;
    }
    int returnSize;
    int* res = processOperations(nums, sz, operations, ops, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        if (i > 0) printf(" ");
        printf("%d", res[i]);
    }
    printf("\\n");
    free(nums);
    for (int i = 0; i < ops; i++) free(operations[i]);
    free(operations);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <sstream>
#include <algorithm>
#include <climits>

using namespace std;

class LazySegTree {
    vector<int> tree, lazy;
    int n;
    void build(vector<int>& arr, int node, int l, int r) {
        if (l == r) { tree[node] = arr[l]; return; }
        int mid = l + (r - l) / 2;
        build(arr, 2 * node + 1, l, mid);
        build(arr, 2 * node + 2, mid + 1, r);
        tree[node] = min(tree[2 * node + 1], tree[2 * node + 2]);
    }
    void push(int node, int l, int r) {
        if (lazy[node] != 0) {
            tree[node] = lazy[node];
            if (l != r) {
                lazy[2 * node + 1] = lazy[node];
                lazy[2 * node + 2] = lazy[node];
            }
            lazy[node] = 0;
        }
    }
public:
    LazySegTree(vector<int>& arr) {
        n = arr.size();
        tree.assign(4 * n, 0);
        lazy.assign(4 * n, 0);
        build(arr, 0, 0, n - 1);
    }
    void rangeAssign(int ql, int qr, int val, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return;
        if (ql <= l && r <= qr) {
            lazy[node] = val;
            push(node, l, r);
            return;
        }
        int mid = l + (r - l) / 2;
        rangeAssign(ql, qr, val, 2 * node + 1, l, mid);
        rangeAssign(ql, qr, val, 2 * node + 2, mid + 1, r);
        tree[node] = min(tree[2 * node + 1], tree[2 * node + 2]);
    }
    int rangeMin(int ql, int qr, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return INT_MAX;
        if (ql <= l && r <= qr) return tree[node];
        int mid = l + (r - l) / 2;
        return min(rangeMin(ql, qr, 2 * node + 1, l, mid),
                   rangeMin(ql, qr, 2 * node + 2, mid + 1, r));
    }
    void assign(int l, int r, int val) { rangeAssign(l, r, val, 0, 0, n - 1); }
    int query(int l, int r) { return rangeMin(l, r, 0, 0, n - 1); }
};

vector<int> processOperations(vector<int>& nums, vector<string>& ops) {
    LazySegTree seg(nums);
    vector<int> res;
    for (string& op : ops) {
        stringstream ss(op);
        string cmd;
        ss >> cmd;
        if (cmd == "QUERY") {
            int l, r;
            ss >> l >> r;
            res.push_back(seg.query(l, r));
        } else if (cmd == "ASSIGN") {
            int l, r, val;
            ss >> l >> r >> val;
            seg.assign(l, r, val);
        }
    }
    return res;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int sz;
    if (cin >> sz) {
        vector<int> nums(sz);
        for (int i = 0; i < sz; i++) cin >> nums[i];
        int opCnt;
        cin >> opCnt;
        cin.ignore();
        vector<string> ops(opCnt);
        for (int i = 0; i < opCnt; i++) getline(cin, ops[i]);
        vector<int> res = processOperations(nums, ops);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'rmq-h2': {
    python: `def min_range_all_distinct(nums):
    distinct = set(nums)
    n = len(nums)
    k = len(distinct)
    from collections import Counter
    freq = Counter()
    have, l = 0, 0
    ans = n + 1
    for r in range(n):
        freq[nums[r]] += 1
        if freq[nums[r]] == 1:
            have += 1
        while have == k:
            ans = min(ans, r - l + 1)
            freq[nums[l]] -= 1
            if freq[nums[l]] == 0:
                have -= 1
            l += 1
    return ans

n = int(input())
nums = list(map(int, input().split()))
print(min_range_all_distinct(nums))`,
    java: `import java.util.*;

public class Solution {
    public static int minRangeAllDistinct(int[] nums) {
        Set<Integer> distinct = new HashSet<>();
        for (int x : nums) distinct.add(x);
        int k = distinct.size();
        Map<Integer, Integer> freq = new HashMap<>();
        int have = 0, l = 0, ans = Integer.MAX_VALUE;
        for (int r = 0; r < nums.length; r++) {
            freq.put(nums[r], freq.getOrDefault(nums[r], 0) + 1);
            if (freq.get(nums[r]) == 1) have++;
            while (have == k) {
                ans = Math.min(ans, r - l + 1);
                freq.put(nums[l], freq.get(nums[l]) - 1);
                if (freq.get(nums[l]) == 0) have--;
                l++;
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            System.out.println(minRangeAllDistinct(nums));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int minRangeAllDistinct(int* nums, int numsSize) {
    int maxVal = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] > maxVal) maxVal = nums[i];
    }
    int* freq = (int*)calloc(maxVal + 1, sizeof(int));
    int* seen = (int*)calloc(maxVal + 1, sizeof(int));
    int k = 0;
    for (int i = 0; i < numsSize; i++) {
        if (!seen[nums[i]]) {
            seen[nums[i]] = 1;
            k++;
        }
    }
    int have = 0, l = 0, ans = INT_MAX;
    for (int r = 0; r < numsSize; r++) {
        if (freq[nums[r]] == 0) have++;
        freq[nums[r]]++;
        while (have == k) {
            int len = r - l + 1;
            if (len < ans) ans = len;
            freq[nums[l]]--;
            if (freq[nums[l]] == 0) have--;
            l++;
        }
    }
    free(freq);
    free(seen);
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    printf("%d\\n", minRangeAllDistinct(nums, n));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
#include <unordered_map>
#include <climits>

using namespace std;

int minRangeAllDistinct(vector<int>& nums) {
    unordered_set<int> distinct(nums.begin(), nums.end());
    int k = distinct.size();
    unordered_map<int, int> freq;
    int have = 0, l = 0, ans = INT_MAX;
    for (int r = 0; r < (int)nums.size(); r++) {
        if (++freq[nums[r]] == 1) have++;
        while (have == k) {
            ans = min(ans, r - l + 1);
            if (--freq[nums[l]] == 0) have--;
            l++;
        }
    }
    return ans;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        cout << minRangeAllDistinct(nums) << "\\n";
    }
    return 0;
}`
  },
  'rmq-h3': {
    python: `def cartesian_tree_inorder(nums):
    # Inorder traversal of a Cartesian tree is always the original array
    return nums

n = int(input())
nums = list(map(int, input().split()))
result = cartesian_tree_inorder(nums)
print(' '.join(map(str, result)))`,
    java: `import java.util.*;

public class Solution {
    public static int[] cartesianTreeInorder(int[] nums) {
        int[] res = new int[nums.length];
        for (int i = 0; i < nums.length; i++) {
            res[i] = nums[i];
        }
        return res;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            int[] res = cartesianTreeInorder(nums);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(res[i]);
            }
            System.out.println(sb);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int* cartesianTreeInorder(int* nums, int numsSize, int* returnSize) {
    *returnSize = numsSize;
    int* res = (int*)malloc(numsSize * sizeof(int));
    for (int i = 0; i < numsSize; i++) {
        res[i] = nums[i];
    }
    return res;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int returnSize;
    int* res = cartesianTreeInorder(nums, n, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        if (i > 0) printf(" ");
        printf("%d", res[i]);
    }
    printf("\\n");
    free(nums);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

vector<int> cartesianTreeInorder(vector<int>& nums) {
    return nums;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        vector<int> res = cartesianTreeInorder(nums);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'rmq-h4': {
    python: `import sys
sys.setrecursionlimit(10**6)

def lca_queries(n, edges, queries):
    adj = [[] for _ in range(n + 1)]
    for u, v in edges:
        adj[u].append(v)
        adj[v].append(u)
    euler = []
    depth = [0] * (n + 1)
    first = [-1] * (n + 1)
    
    def dfs(u, p, d):
        first[u] = len(euler)
        euler.append(u)
        depth[u] = d
        for v in adj[u]:
            if v != p:
                dfs(v, u, d + 1)
                euler.append(u)
    
    dfs(1, 0, 0)
    m = len(euler)
    log = [0] * (m + 1)
    for i in range(2, m + 1):
        log[i] = log[i // 2] + 1
    K = log[m] + 1
    st = [[0] * K for _ in range(m)]
    for i in range(m):
        st[i][0] = euler[i]
    j = 1
    while (1 << j) <= m:
        i = 0
        while i + (1 << j) <= m:
            a = st[i][j - 1]
            b = st[i + (1 << (j - 1))][j - 1]
            st[i][j] = a if depth[a] < depth[b] else b
            i += 1
        j += 1
    
    def lca(u, v):
        l, r = first[u], first[v]
        if l > r: l, r = r, l
        length = r - l + 1
        k = log[length]
        a = st[l][k]
        b = st[r - (1 << k) + 1][k]
        return a if depth[a] < depth[b] else b
    
    return [lca(u, v) for u, v in queries]

n = int(input())
edges = [tuple(map(int, input().split())) for _ in range(n - 1)]
q = int(input())
queries = [tuple(map(int, input().split())) for _ in range(q)]
results = lca_queries(n, edges, queries)
print(' '.join(map(str, results)))`,
    java: `import java.util.*;

public class Solution {
    static List<Integer>[] adj;
    static int[] euler, depth, first, log;
    static int[][] st;
    static int eulerLen;

    public static void dfs(int u, int p, int d) {
        first[u] = eulerLen;
        euler[eulerLen++] = u;
        depth[u] = d;
        for (int v : adj[u]) {
            if (v != p) {
                dfs(v, u, d + 1);
                euler[eulerLen++] = u;
            }
        }
    }

    public static int[] lcaQueries(int n, int[][] edges, int[][] queries) {
        adj = new ArrayList[n + 1];
        for (int i = 1; i <= n; i++) adj[i] = new ArrayList<>();
        for (int[] e : edges) {
            adj[e[0]].add(e[1]);
            adj[e[1]].add(e[0]);
        }
        euler = new int[2 * n];
        depth = new int[n + 1];
        first = new int[n + 1];
        eulerLen = 0;
        dfs(1, 0, 0);
        int m = eulerLen;
        log = new int[m + 1];
        for (int i = 2; i <= m; i++) {
            log[i] = log[i / 2] + 1;
        }
        int K = log[m] + 1;
        st = new int[m][K];
        for (int i = 0; i < m; i++) {
            st[i][0] = euler[i];
        }
        for (int j = 1; (1 << j) <= m; j++) {
            for (int i = 0; i + (1 << j) <= m; i++) {
                int a = st[i][j - 1];
                int b = st[i + (1 << (j - 1))][j - 1];
                st[i][j] = depth[a] < depth[b] ? a : b;
            }
        }
        int[] res = new int[queries.length];
        for (int q = 0; q < queries.length; q++) {
            int u = queries[q][0], v = queries[q][1];
            int l = first[u], r = first[v];
            if (l > r) { int t = l; l = r; r = t; }
            int length = r - l + 1;
            int k = log[length];
            int a = st[l][k];
            int b = st[r - (1 << k) + 1][k];
            res[q] = depth[a] < depth[b] ? a : b;
        }
        return res;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] edges = new int[n - 1][2];
            for (int i = 0; i < n - 1; i++) {
                edges[i][0] = sc.nextInt();
                edges[i][1] = sc.nextInt();
            }
            int q = sc.nextInt();
            int[][] queries = new int[q][2];
            for (int i = 0; i < q; i++) {
                queries[i][0] = sc.nextInt();
                queries[i][1] = sc.nextInt();
            }
            int[] res = lcaQueries(n, edges, queries);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(res[i]);
            }
            System.out.println(sb);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int* adj[100005];
int adjSize[100005];
int euler[200010], depth[100005], first[100005];
int eulerLen;
int log2[200010];
int** st;

void dfs(int u, int p, int d) {
    first[u] = eulerLen;
    euler[eulerLen++] = u;
    depth[u] = d;
    for (int i = 0; i < adjSize[u]; i++) {
        int v = adj[u][i];
        if (v != p) {
            dfs(v, u, d + 1);
            euler[eulerLen++] = u;
        }
    }
}

int minDepth(int a, int b) { return depth[a] < depth[b] ? a : b; }

int* lcaQueries(int n, int** edges, int edgesSize, int** queries, int queriesSize, int* returnSize) {
    *returnSize = queriesSize;
    for (int i = 1; i <= n; i++) adjSize[i] = 0;
    for (int i = 0; i < edgesSize; i++) {
        int u = edges[i][0], v = edges[i][1];
        adjSize[u]++; adjSize[v]++;
    }
    for (int i = 1; i <= n; i++) adj[i] = (int*)malloc(adjSize[i] * sizeof(int));
    int* ptr = (int*)calloc(n + 1, sizeof(int));
    for (int i = 0; i < edgesSize; i++) {
        int u = edges[i][0], v = edges[i][1];
        adj[u][ptr[u]++] = v;
        adj[v][ptr[v]++] = u;
    }
    free(ptr);
    eulerLen = 0;
    dfs(1, 0, 0);
    int m = eulerLen;
    for (int i = 2; i <= m; i++) log2[i] = log2[i / 2] + 1;
    int K = log2[m] + 1;
    st = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        st[i] = (int*)malloc(K * sizeof(int));
        st[i][0] = euler[i];
    }
    for (int j = 1; (1 << j) <= m; j++) {
        for (int i = 0; i + (1 << j) <= m; i++) {
            int a = st[i][j - 1], b = st[i + (1 << (j - 1))][j - 1];
            st[i][j] = minDepth(a, b);
        }
    }
    int* res = (int*)malloc(queriesSize * sizeof(int));
    for (int q = 0; q < queriesSize; q++) {
        int u = queries[q][0], v = queries[q][1];
        int l = first[u], r = first[v];
        if (l > r) { int t = l; l = r; r = t; }
        int length = r - l + 1;
        int k = log2[length];
        int a = st[l][k], b = st[r - (1 << k) + 1][k];
        res[q] = minDepth(a, b);
    }
    for (int i = 0; i < m; i++) free(st[i]);
    free(st);
    for (int i = 1; i <= n; i++) free(adj[i]);
    return res;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** edges = (int**)malloc((n - 1) * sizeof(int*));
    for (int i = 0; i < n - 1; i++) {
        edges[i] = (int*)malloc(2 * sizeof(int));
        if (scanf("%d %d", &edges[i][0], &edges[i][1]) != 2) return 0;
    }
    int q;
    if (scanf("%d", &q) != 1) return 0;
    int** queries = (int**)malloc(q * sizeof(int*));
    for (int i = 0; i < q; i++) {
        queries[i] = (int*)malloc(2 * sizeof(int));
        if (scanf("%d %d", &queries[i][0], &queries[i][1]) != 2) return 0;
    }
    int returnSize;
    int* res = lcaQueries(n, edges, n - 1, queries, q, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        if (i > 0) printf(" ");
        printf("%d", res[i]);
    }
    printf("\\n");
    for (int i = 0; i < n - 1; i++) free(edges[i]);
    free(edges);
    for (int i = 0; i < q; i++) free(queries[i]);
    free(queries);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <cmath>
#include <algorithm>

using namespace std;

vector<int> euler;
vector<int> depth;
vector<int> first;
vector<vector<int>> adj;

void dfs(int u, int p, int d) {
    first[u] = euler.size();
    euler.push_back(u);
    depth[u] = d;
    for (int v : adj[u]) {
        if (v != p) {
            dfs(v, u, d + 1);
            euler.push_back(u);
        }
    }
}

vector<int> lcaQueries(int n, vector<vector<int>>& edges, vector<vector<int>>& queries) {
    adj.assign(n + 1, {});
    for (auto& e : edges) {
        adj[e[0]].push_back(e[1]);
        adj[e[1]].push_back(e[0]);
    }
    euler.clear();
    depth.assign(n + 1, 0);
    first.assign(n + 1, -1);
    dfs(1, 0, 0);
    int m = euler.size();
    vector<int> log(m + 1, 0);
    for (int i = 2; i <= m; i++) log[i] = log[i / 2] + 1;
    int K = log[m] + 1;
    vector<vector<int>> st(m, vector<int>(K));
    for (int i = 0; i < m; i++) st[i][0] = euler[i];
    for (int j = 1; (1 << j) <= m; j++) {
        for (int i = 0; i + (1 << j) <= m; i++) {
            int a = st[i][j - 1], b = st[i + (1 << (j - 1))][j - 1];
            st[i][j] = (depth[a] < depth[b]) ? a : b;
        }
    }
    auto lca = [&](int u, int v) {
        int l = first[u], r = first[v];
        if (l > r) swap(l, r);
        int len = r - l + 1;
        int k = log[len];
        int a = st[l][k], b = st[r - (1 << k) + 1][k];
        return (depth[a] < depth[b]) ? a : b;
    };
    vector<int> res;
    for (auto& q : queries) res.push_back(lca(q[0], q[1]));
    return res;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<int>> edges(n - 1, vector<int>(2));
        for (int i = 0; i < n - 1; i++) cin >> edges[i][0] >> edges[i][1];
        int q;
        cin >> q;
        vector<vector<int>> queries(q, vector<int>(2));
        for (int i = 0; i < q; i++) cin >> queries[i][0] >> queries[i][1];
        vector<int> res = lcaQueries(n, edges, queries);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'rmq-h5': {
    python: `def max_sum_bounded_min(nums, lo, hi):
    n = len(nums)
    # Build segment tree for RMQ
    log = [0] * (n + 1)
    for i in range(2, n + 1):
        log[i] = log[i // 2] + 1
    K = log[n] + 1
    st = [[0] * K for _ in range(n)]
    for i in range(n):
        st[i][0] = nums[i]
    j = 1
    while (1 << j) <= n:
        i = 0
        while i + (1 << j) <= n:
            st[i][j] = min(st[i][j - 1], st[i + (1 << (j - 1))][j - 1])
            i += 1
        j += 1
    def range_min(l, r):
        length = r - l + 1
        k = log[length]
        return min(st[l][k], st[r - (1 << k) + 1][k])
    
    # Prefix sums for subarray sum queries
    pref = [0] * (n + 1)
    for i in range(n):
        pref[i + 1] = pref[i] + nums[i]
    
    # Use monotonic stack to find for each index the range where it is the minimum
    left = [-1] * n
    right = [n] * n
    stack = []
    for i in range(n):
        while stack and nums[stack[-1]] >= nums[i]:
            stack.pop()
        left[i] = stack[-1] if stack else -1
        stack.append(i)
    stack.clear()
    for i in range(n - 1, -1, -1):
        while stack and nums[stack[-1]] >= nums[i]:
            stack.pop()
        right[i] = stack[-1] if stack else n
        stack.append(i)
    
    ans = -10**18
    have_valid = False
    # For the case where lo <= 0 <= hi, the entire subarray may have min outside range
    # We need to find max sum subarray with min in [lo, hi]
    for i in range(n):
        if lo <= nums[i] <= hi:
            # nums[i] is the minimum of this subarray
            l = left[i] + 1
            r = right[i] - 1
            # To ensure nums[i] is the minimum, we need to ensure min is nums[i]
            # Check if nums[i] is actually the minimum in [l, r]
            if range_min(l, r) == nums[i]:
                # Max subarray sum within [l, r] that includes i
                max_sum = -10**18
                # Find the best left and right sums using prefix sums
                min_pref = min(pref[x] for x in range(l, i + 1))
                max_pref = max(pref[x + 1] for x in range(i, r + 1))
                max_sum = max(max_sum, max_pref - min_pref)
                if max_sum > ans:
                    ans = max_sum
                    have_valid = True
    
    if not have_valid:
        return -1000000000000000000
    return ans

n = int(input())
nums = list(map(int, input().split()))
lo, hi = map(int, input().split())
print(max_sum_bounded_min(nums, lo, hi))`,
    java: `import java.util.*;

public class Solution {
    public static long maxSumBoundedMin(int[] nums, int lo, int hi) {
        int n = nums.length;
        // Build prefix sums
        long[] pref = new long[n + 1];
        for (int i = 0; i < n; i++) pref[i + 1] = pref[i] + nums[i];
        
        // Monotonic stack for next smaller element
        int[] left = new int[n];
        int[] right = new int[n];
        Arrays.fill(left, -1);
        Arrays.fill(right, n);
        Deque<Integer> stack = new ArrayDeque<>();
        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && nums[stack.peek()] >= nums[i]) stack.pop();
            left[i] = stack.isEmpty() ? -1 : stack.peek();
            stack.push(i);
        }
        stack.clear();
        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && nums[stack.peek()] >= nums[i]) stack.pop();
            right[i] = stack.isEmpty() ? n : stack.peek();
            stack.push(i);
        }
        
        long ans = Long.MIN_VALUE;
        boolean found = false;
        for (int i = 0; i < n; i++) {
            if (nums[i] >= lo && nums[i] <= hi) {
                int l = left[i] + 1, r = right[i] - 1;
                // Find min prefix in [l, i] and max prefix in [i+1, r+1]
                long minPref = Long.MAX_VALUE;
                for (int j = l; j <= i; j++) {
                    minPref = Math.min(minPref, pref[j]);
                }
                long maxPref = Long.MIN_VALUE;
                for (int j = i + 1; j <= r + 1; j++) {
                    maxPref = Math.max(maxPref, pref[j]);
                }
                long sum = maxPref - minPref;
                if (sum > ans) {
                    ans = sum;
                    found = true;
                }
            }
        }
        return found ? ans : -1000000000000000000L;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            int lo = sc.nextInt();
            int hi = sc.nextInt();
            System.out.println(maxSumBoundedMin(nums, lo, hi));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>
#include <string.h>

#define LL long long
#define MIN(a, b) ((a) < (b) ? (a) : (b))
#define MAX(a, b) ((a) > (b) ? (a) : (b))

LL maxSumBoundedMin(int* nums, int numsSize, int lo, int hi) {
    int n = numsSize;
    LL* pref = (LL*)malloc((n + 1) * sizeof(LL));
    pref[0] = 0;
    for (int i = 0; i < n; i++) pref[i + 1] = pref[i] + nums[i];
    
    int* left = (int*)malloc(n * sizeof(int));
    int* right = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) { left[i] = -1; right[i] = n; }
    
    int* stack = (int*)malloc(n * sizeof(int));
    int top = -1;
    for (int i = 0; i < n; i++) {
        while (top >= 0 && nums[stack[top]] >= nums[i]) top--;
        left[i] = top >= 0 ? stack[top] : -1;
        stack[++top] = i;
    }
    top = -1;
    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && nums[stack[top]] >= nums[i]) top--;
        right[i] = top >= 0 ? stack[top] : n;
        stack[++top] = i;
    }
    free(stack);
    
    LL ans = LLONG_MIN;
    int found = 0;
    for (int i = 0; i < n; i++) {
        if (nums[i] >= lo && nums[i] <= hi) {
            int l = left[i] + 1, r = right[i] - 1;
            LL minPref = LLONG_MAX;
            for (int j = l; j <= i; j++) minPref = MIN(minPref, pref[j]);
            LL maxPref = LLONG_MIN;
            for (int j = i + 1; j <= r + 1; j++) maxPref = MAX(maxPref, pref[j]);
            LL sum = maxPref - minPref;
            if (sum > ans) { ans = sum; found = 1; }
        }
    }
    free(pref);
    free(left);
    free(right);
    return found ? ans : -1000000000000000000LL;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int lo, hi;
    if (scanf("%d %d", &lo, &hi) != 2) return 0;
    printf("%lld\\n", maxSumBoundedMin(nums, n, lo, hi));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <stack>
#include <algorithm>
#include <climits>

using namespace std;

typedef long long ll;

ll maxSumBoundedMin(vector<int>& nums, int lo, int hi) {
    int n = nums.size();
    vector<ll> pref(n + 1, 0);
    for (int i = 0; i < n; i++) pref[i + 1] = pref[i] + nums[i];
    
    vector<int> left(n, -1), right(n, n);
    stack<int> st;
    for (int i = 0; i < n; i++) {
        while (!st.empty() && nums[st.top()] >= nums[i]) st.pop();
        left[i] = st.empty() ? -1 : st.top();
        st.push(i);
    }
    while (!st.empty()) st.pop();
    for (int i = n - 1; i >= 0; i--) {
        while (!st.empty() && nums[st.top()] >= nums[i]) st.pop();
        right[i] = st.empty() ? n : st.top();
        st.push(i);
    }
    
    ll ans = LLONG_MIN;
    bool found = false;
    for (int i = 0; i < n; i++) {
        if (nums[i] >= lo && nums[i] <= hi) {
            int l = left[i] + 1, r = right[i] - 1;
            ll minPref = *min_element(pref.begin() + l, pref.begin() + i + 1);
            ll maxPref = *max_element(pref.begin() + i + 1, pref.begin() + r + 2);
            ll sum = maxPref - minPref;
            if (sum > ans) { ans = sum; found = true; }
        }
    }
    return found ? ans : -1000000000000000000LL;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        int lo, hi;
        cin >> lo >> hi;
        cout << maxSumBoundedMin(nums, lo, hi) << "\\n";
    }
    return 0;
}`
  }
};