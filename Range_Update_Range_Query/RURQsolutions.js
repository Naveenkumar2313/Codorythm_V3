export const RURQsolutions = {
  'rurq-e1': {
    python: `def range_add_total_sum(nums, l, r, val):
    for i in range(l, r + 1):
        nums[i] += val
    return sum(nums)

n = int(input())
nums = list(map(int, input().split()))
l, r, val = map(int, input().split())
print(range_add_total_sum(nums, l, r, val))`,
    java: `import java.util.*;

public class Solution {
    public static int rangeAddTotalSum(int[] nums, int l, int r, int val) {
        for (int i = l; i <= r; i++) nums[i] += val;
        int sum = 0;
        for (int x : nums) sum += x;
        return sum;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int l = sc.nextInt(), r = sc.nextInt(), val = sc.nextInt();
            System.out.println(rangeAddTotalSum(nums, l, r, val));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int rangeAddTotalSum(int* nums, int numsSize, int l, int r, int val) {
    for (int i = l; i <= r; i++) nums[i] += val;
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
    int l, r, val;
    if (scanf("%d %d %d", &l, &r, &val) != 3) return 0;
    printf("%d\\n", rangeAddTotalSum(nums, n, l, r, val));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <numeric>

using namespace std;

int rangeAddTotalSum(vector<int>& nums, int l, int r, int val) {
    for (int i = l; i <= r; i++) nums[i] += val;
    return accumulate(nums.begin(), nums.end(), 0);
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        int l, r, val;
        cin >> l >> r >> val;
        cout << rangeAddTotalSum(nums, l, r, val) << "\\n";
    }
    return 0;
}`
  },
  'rurq-e2': {
    python: `def range_add_point_query(nums, operations, p):
    diff = [0] * (len(nums) + 1)
    for l, r, val in operations:
        diff[l] += val
        diff[r + 1] -= val
    cur = 0
    for i in range(len(nums)):
        cur += diff[i]
        nums[i] += cur
    return nums[p]

n = int(input())
nums = list(map(int, input().split()))
q = int(input())
ops = [tuple(map(int, input().split())) for _ in range(q)]
p = int(input())
print(range_add_point_query(nums, ops, p))`,
    java: `import java.util.*;

public class Solution {
    public static int rangeAddPointQuery(int[] nums, int[][] operations, int p) {
        int n = nums.length;
        int[] diff = new int[n + 1];
        for (int[] op : operations) {
            diff[op[0]] += op[2];
            diff[op[1] + 1] -= op[2];
        }
        int cur = 0;
        for (int i = 0; i < n; i++) {
            cur += diff[i];
            nums[i] += cur;
        }
        return nums[p];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int q = sc.nextInt();
            int[][] ops = new int[q][3];
            for (int i = 0; i < q; i++) {
                ops[i][0] = sc.nextInt();
                ops[i][1] = sc.nextInt();
                ops[i][2] = sc.nextInt();
            }
            int p = sc.nextInt();
            System.out.println(rangeAddPointQuery(nums, ops, p));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int rangeAddPointQuery(int* nums, int numsSize, int** operations, int opsSize, int p) {
    int* diff = (int*)calloc(numsSize + 1, sizeof(int));
    for (int i = 0; i < opsSize; i++) {
        diff[operations[i][0]] += operations[i][2];
        diff[operations[i][1] + 1] -= operations[i][2];
    }
    int cur = 0;
    for (int i = 0; i < numsSize; i++) {
        cur += diff[i];
        nums[i] += cur;
    }
    int res = nums[p];
    free(diff);
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
    int** ops = (int**)malloc(q * sizeof(int*));
    for (int i = 0; i < q; i++) {
        ops[i] = (int*)malloc(3 * sizeof(int));
        if (scanf("%d %d %d", &ops[i][0], &ops[i][1], &ops[i][2]) != 3) return 0;
    }
    int p;
    if (scanf("%d", &p) != 1) return 0;
    printf("%d\\n", rangeAddPointQuery(nums, n, ops, q, p));
    for (int i = 0; i < q; i++) free(ops[i]);
    free(ops);
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int rangeAddPointQuery(vector<int>& nums, vector<vector<int>>& operations, int p) {
    int n = nums.size();
    vector<int> diff(n + 1, 0);
    for (auto& op : operations) {
        diff[op[0]] += op[2];
        diff[op[1] + 1] -= op[2];
    }
    int cur = 0;
    for (int i = 0; i < n; i++) {
        cur += diff[i];
        nums[i] += cur;
    }
    return nums[p];
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
        vector<vector<int>> ops(q, vector<int>(3));
        for (int i = 0; i < q; i++) cin >> ops[i][0] >> ops[i][1] >> ops[i][2];
        int p;
        cin >> p;
        cout << rangeAddPointQuery(nums, ops, p) << "\\n";
    }
    return 0;
}`
  },
  'rurq-e3': {
    python: `def process_operations(nums, operations):
    n = len(nums)
    diff = [0] * (n + 1)
    results = []
    for op in operations:
        parts = op.split()
        if parts[0] == 'ADD':
            l, r, val = int(parts[1]), int(parts[2]), int(parts[3])
            diff[l] += val
            diff[r + 1] -= val
        elif parts[0] == 'QUERY':
            l, r = int(parts[1]), int(parts[2])
            cur = 0
            for i in range(n):
                cur += diff[i]
                nums[i] += cur
            diff = [0] * (n + 1)
            results.append(str(sum(nums[l:r+1])))
    return results

n = int(input())
nums = list(map(int, input().split()))
q = int(input())
ops = [input().strip() for _ in range(q)]
results = process_operations(nums, ops)
print(' '.join(results))`,
    java: `import java.util.*;

public class Solution {
    public static int[] processOperations(int[] nums, String[] operations) {
        int n = nums.length;
        int[] diff = new int[n + 1];
        List<Integer> res = new ArrayList<>();
        for (String op : operations) {
            String[] parts = op.split(" ");
            if (parts[0].equals("ADD")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                int val = Integer.parseInt(parts[3]);
                diff[l] += val;
                diff[r + 1] -= val;
            } else if (parts[0].equals("QUERY")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                int cur = 0;
                for (int i = 0; i < n; i++) {
                    cur += diff[i];
                    nums[i] += cur;
                }
                diff = new int[n + 1];
                int sum = 0;
                for (int i = l; i <= r; i++) sum += nums[i];
                res.add(sum);
            }
        }
        int[] result = new int[res.size()];
        for (int i = 0; i < res.size(); i++) result[i] = res.get(i);
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int q = sc.nextInt();
            sc.nextLine();
            String[] ops = new String[q];
            for (int i = 0; i < q; i++) ops[i] = sc.nextLine();
            int[] res = processOperations(nums, ops);
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

int* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {
    int* diff = (int*)calloc(numsSize + 1, sizeof(int));
    int* res = (int*)malloc(opsSize * sizeof(int));
    int cnt = 0;
    for (int i = 0; i < opsSize; i++) {
        char op[10];
        int a, b, c;
        if (sscanf(operations[i], "%s %d %d %d", op, &a, &b, &c) >= 3) {
            if (strcmp(op, "ADD") == 0) {
                diff[a] += c;
                diff[b + 1] -= c;
            } else if (strcmp(op, "QUERY") == 0) {
                int cur = 0;
                for (int j = 0; j < numsSize; j++) {
                    cur += diff[j];
                    nums[j] += cur;
                }
                memset(diff, 0, (numsSize + 1) * sizeof(int));
                int sum = 0;
                for (int j = a; j <= b; j++) sum += nums[j];
                res[cnt++] = sum;
            }
        }
    }
    *returnSize = cnt;
    free(diff);
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
    getchar();
    char** ops = (char**)malloc(q * sizeof(char*));
    for (int i = 0; i < q; i++) {
        ops[i] = (char*)malloc(100 * sizeof(char));
        if (fgets(ops[i], 100, stdin) == NULL) return 0;
        ops[i][strcspn(ops[i], "\\n")] = 0;
    }
    int returnSize;
    int* res = processOperations(nums, n, ops, q, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        if (i > 0) printf(" ");
        printf("%d", res[i]);
    }
    printf("\\n");
    free(nums);
    for (int i = 0; i < q; i++) free(ops[i]);
    free(ops);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <sstream>

using namespace std;

vector<int> processOperations(vector<int>& nums, vector<string>& operations) {
    int n = nums.size();
    vector<int> diff(n + 1, 0);
    vector<int> res;
    for (string& op : operations) {
        stringstream ss(op);
        string cmd;
        ss >> cmd;
        if (cmd == "ADD") {
            int l, r, val;
            ss >> l >> r >> val;
            diff[l] += val;
            diff[r + 1] -= val;
        } else if (cmd == "QUERY") {
            int l, r;
            ss >> l >> r;
            int cur = 0;
            for (int i = 0; i < n; i++) {
                cur += diff[i];
                nums[i] += cur;
            }
            fill(diff.begin(), diff.end(), 0);
            int sum = 0;
            for (int i = l; i <= r; i++) sum += nums[i];
            res.push_back(sum);
        }
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
        cin.ignore();
        vector<string> ops(q);
        for (int i = 0; i < q; i++) getline(cin, ops[i]);
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
  'rurq-e4': {
    python: `def process_operations(nums, operations):
    n = len(nums)
    results = []
    for op in operations:
        parts = op.split()
        if parts[0] == 'SET':
            l, r, val = int(parts[1]), int(parts[2]), int(parts[3])
            for i in range(l, r + 1):
                nums[i] = val
        elif parts[0] == 'QUERY':
            l, r = int(parts[1]), int(parts[2])
            results.append(str(sum(nums[l:r+1])))
    return results

n = int(input())
nums = list(map(int, input().split()))
q = int(input())
ops = [input().strip() for _ in range(q)]
results = process_operations(nums, ops)
print(' '.join(results))`,
    java: `import java.util.*;

public class Solution {
    public static int[] processOperations(int[] nums, String[] operations) {
        List<Integer> res = new ArrayList<>();
        for (String op : operations) {
            String[] parts = op.split(" ");
            if (parts[0].equals("SET")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                int val = Integer.parseInt(parts[3]);
                for (int i = l; i <= r; i++) nums[i] = val;
            } else if (parts[0].equals("QUERY")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                int sum = 0;
                for (int i = l; i <= r; i++) sum += nums[i];
                res.add(sum);
            }
        }
        int[] result = new int[res.size()];
        for (int i = 0; i < res.size(); i++) result[i] = res.get(i);
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int q = sc.nextInt();
            sc.nextLine();
            String[] ops = new String[q];
            for (int i = 0; i < q; i++) ops[i] = sc.nextLine();
            int[] res = processOperations(nums, ops);
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

int* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {
    int* res = (int*)malloc(opsSize * sizeof(int));
    int cnt = 0;
    for (int i = 0; i < opsSize; i++) {
        char op[10];
        int a, b, c;
        if (sscanf(operations[i], "%s %d %d %d", op, &a, &b, &c) >= 3) {
            if (strcmp(op, "SET") == 0) {
                for (int j = a; j <= b; j++) nums[j] = c;
            } else if (strcmp(op, "QUERY") == 0) {
                int sum = 0;
                for (int j = a; j <= b; j++) sum += nums[j];
                res[cnt++] = sum;
            }
        }
    }
    *returnSize = cnt;
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
    getchar();
    char** ops = (char**)malloc(q * sizeof(char*));
    for (int i = 0; i < q; i++) {
        ops[i] = (char*)malloc(100 * sizeof(char));
        if (fgets(ops[i], 100, stdin) == NULL) return 0;
        ops[i][strcspn(ops[i], "\\n")] = 0;
    }
    int returnSize;
    int* res = processOperations(nums, n, ops, q, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        if (i > 0) printf(" ");
        printf("%d", res[i]);
    }
    printf("\\n");
    free(nums);
    for (int i = 0; i < q; i++) free(ops[i]);
    free(ops);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <sstream>

using namespace std;

vector<int> processOperations(vector<int>& nums, vector<string>& operations) {
    vector<int> res;
    for (string& op : operations) {
        stringstream ss(op);
        string cmd;
        ss >> cmd;
        if (cmd == "SET") {
            int l, r, val;
            ss >> l >> r >> val;
            for (int i = l; i <= r; i++) nums[i] = val;
        } else if (cmd == "QUERY") {
            int l, r;
            ss >> l >> r;
            int sum = 0;
            for (int i = l; i <= r; i++) sum += nums[i];
            res.push_back(sum);
        }
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
        cin.ignore();
        vector<string> ops(q);
        for (int i = 0; i < q; i++) getline(cin, ops[i]);
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
  'rurq-e5': {
    python: `def process_operations(nums, operations):
    n = len(nums)
    diff = [0] * (n + 1)
    results = []
    for op in operations:
        parts = op.split()
        if parts[0] == 'ADD':
            l, r, val = int(parts[1]), int(parts[2]), int(parts[3])
            diff[l] += val
            diff[r + 1] -= val
        elif parts[0] == 'QUERY':
            l, r = int(parts[1]), int(parts[2])
            cur = 0
            for i in range(n):
                cur += diff[i]
                nums[i] += cur
            diff = [0] * (n + 1)
            results.append(str(max(nums[l:r+1])))
    return results

n = int(input())
nums = list(map(int, input().split()))
q = int(input())
ops = [input().strip() for _ in range(q)]
results = process_operations(nums, ops)
print(' '.join(results))`,
    java: `import java.util.*;

public class Solution {
    public static int[] processOperations(int[] nums, String[] operations) {
        int n = nums.length;
        int[] diff = new int[n + 1];
        List<Integer> res = new ArrayList<>();
        for (String op : operations) {
            String[] parts = op.split(" ");
            if (parts[0].equals("ADD")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                int val = Integer.parseInt(parts[3]);
                diff[l] += val;
                diff[r + 1] -= val;
            } else if (parts[0].equals("QUERY")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                int cur = 0;
                for (int i = 0; i < n; i++) {
                    cur += diff[i];
                    nums[i] += cur;
                }
                diff = new int[n + 1];
                int maxVal = nums[l];
                for (int i = l + 1; i <= r; i++) {
                    if (nums[i] > maxVal) maxVal = nums[i];
                }
                res.add(maxVal);
            }
        }
        int[] result = new int[res.size()];
        for (int i = 0; i < res.size(); i++) result[i] = res.get(i);
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int q = sc.nextInt();
            sc.nextLine();
            String[] ops = new String[q];
            for (int i = 0; i < q; i++) ops[i] = sc.nextLine();
            int[] res = processOperations(nums, ops);
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

int* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {
    int* diff = (int*)calloc(numsSize + 1, sizeof(int));
    int* res = (int*)malloc(opsSize * sizeof(int));
    int cnt = 0;
    for (int i = 0; i < opsSize; i++) {
        char op[10];
        int a, b, c;
        if (sscanf(operations[i], "%s %d %d %d", op, &a, &b, &c) >= 3) {
            if (strcmp(op, "ADD") == 0) {
                diff[a] += c;
                diff[b + 1] -= c;
            } else if (strcmp(op, "QUERY") == 0) {
                int cur = 0;
                for (int j = 0; j < numsSize; j++) {
                    cur += diff[j];
                    nums[j] += cur;
                }
                memset(diff, 0, (numsSize + 1) * sizeof(int));
                int maxVal = nums[a];
                for (int j = a + 1; j <= b; j++) {
                    if (nums[j] > maxVal) maxVal = nums[j];
                }
                res[cnt++] = maxVal;
            }
        }
    }
    *returnSize = cnt;
    free(diff);
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
    getchar();
    char** ops = (char**)malloc(q * sizeof(char*));
    for (int i = 0; i < q; i++) {
        ops[i] = (char*)malloc(100 * sizeof(char));
        if (fgets(ops[i], 100, stdin) == NULL) return 0;
        ops[i][strcspn(ops[i], "\\n")] = 0;
    }
    int returnSize;
    int* res = processOperations(nums, n, ops, q, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        if (i > 0) printf(" ");
        printf("%d", res[i]);
    }
    printf("\\n");
    free(nums);
    for (int i = 0; i < q; i++) free(ops[i]);
    free(ops);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <sstream>
#include <algorithm>

using namespace std;

vector<int> processOperations(vector<int>& nums, vector<string>& operations) {
    int n = nums.size();
    vector<int> diff(n + 1, 0);
    vector<int> res;
    for (string& op : operations) {
        stringstream ss(op);
        string cmd;
        ss >> cmd;
        if (cmd == "ADD") {
            int l, r, val;
            ss >> l >> r >> val;
            diff[l] += val;
            diff[r + 1] -= val;
        } else if (cmd == "QUERY") {
            int l, r;
            ss >> l >> r;
            int cur = 0;
            for (int i = 0; i < n; i++) {
                cur += diff[i];
                nums[i] += cur;
            }
            fill(diff.begin(), diff.end(), 0);
            res.push_back(*max_element(nums.begin() + l, nums.begin() + r + 1));
        }
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
        cin.ignore();
        vector<string> ops(q);
        for (int i = 0; i < q; i++) getline(cin, ops[i]);
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
  'rurq-m1': {
    python: `class LazySegTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self.lazy = [0] * (4 * self.n)
        self._build(arr, 0, 0, self.n - 1)
    def _build(self, arr, node, l, r):
        if l == r:
            self.tree[node] = arr[l]
            return
        mid = (l + r) // 2
        self._build(arr, 2*node+1, l, mid)
        self._build(arr, 2*node+2, mid+1, r)
        self.tree[node] = self.tree[2*node+1] + self.tree[2*node+2]
    def _push(self, node, l, r):
        if self.lazy[node] != 0:
            self.tree[node] += self.lazy[node] * (r - l + 1)
            if l != r:
                self.lazy[2*node+1] += self.lazy[node]
                self.lazy[2*node+2] += self.lazy[node]
            self.lazy[node] = 0
    def update(self, ql, qr, val, node, l, r):
        self._push(node, l, r)
        if ql > r or qr < l: return
        if ql <= l and r <= qr:
            self.lazy[node] += val
            self._push(node, l, r)
            return
        mid = (l + r) // 2
        self.update(ql, qr, val, 2*node+1, l, mid)
        self.update(ql, qr, val, 2*node+2, mid+1, r)
        self.tree[node] = self.tree[2*node+1] + self.tree[2*node+2]
    def query(self, ql, qr, node, l, r):
        self._push(node, l, r)
        if ql > r or qr < l: return 0
        if ql <= l and r <= qr: return self.tree[node]
        mid = (l + r) // 2
        left = self.query(ql, qr, 2*node+1, l, mid)
        right = self.query(ql, qr, 2*node+2, mid+1, r)
        return left + right

def process_operations(nums, operations):
    seg = LazySegTree(nums)
    results = []
    for op in operations:
        parts = op.split()
        if parts[0] == 'ADD':
            l, r, val = int(parts[1]), int(parts[2]), int(parts[3])
            seg.update(l, r, val, 0, 0, seg.n - 1)
        elif parts[0] == 'QUERY':
            l, r = int(parts[1]), int(parts[2])
            results.append(str(seg.query(l, r, 0, 0, seg.n - 1)))
    return results

n = int(input())
nums = list(map(int, input().split()))
q = int(input())
ops = [input().strip() for _ in range(q)]
results = process_operations(nums, ops)
print(' '.join(results))`,
    java: `import java.util.*;

public class Solution {
    static long[] tree, lazy;
    static int n;

    public static void build(int[] arr, int node, int l, int r) {
        if (l == r) { tree[node] = arr[l]; return; }
        int mid = l + (r - l) / 2;
        build(arr, 2 * node + 1, l, mid);
        build(arr, 2 * node + 2, mid + 1, r);
        tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
    }

    public static void push(int node, int l, int r) {
        if (lazy[node] != 0) {
            tree[node] += lazy[node] * (r - l + 1);
            if (l != r) {
                lazy[2 * node + 1] += lazy[node];
                lazy[2 * node + 2] += lazy[node];
            }
            lazy[node] = 0;
        }
    }

    public static void update(int ql, int qr, int val, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return;
        if (ql <= l && r <= qr) {
            lazy[node] += val;
            push(node, l, r);
            return;
        }
        int mid = l + (r - l) / 2;
        update(ql, qr, val, 2 * node + 1, l, mid);
        update(ql, qr, val, 2 * node + 2, mid + 1, r);
        tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
    }

    public static long query(int ql, int qr, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return 0;
        if (ql <= l && r <= qr) return tree[node];
        int mid = l + (r - l) / 2;
        return query(ql, qr, 2 * node + 1, l, mid) +
               query(ql, qr, 2 * node + 2, mid + 1, r);
    }

    public static long[] processOperations(int[] nums, String[] operations) {
        n = nums.length;
        tree = new long[4 * n];
        lazy = new long[4 * n];
        build(nums, 0, 0, n - 1);
        List<Long> res = new ArrayList<>();
        for (String op : operations) {
            String[] parts = op.split(" ");
            if (parts[0].equals("ADD")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                int val = Integer.parseInt(parts[3]);
                update(l, r, val, 0, 0, n - 1);
            } else if (parts[0].equals("QUERY")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                res.add(query(l, r, 0, 0, n - 1));
            }
        }
        long[] result = new long[res.size()];
        for (int i = 0; i < res.size(); i++) result[i] = res.get(i);
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int sz = sc.nextInt();
            int[] nums = new int[sz];
            for (int i = 0; i < sz; i++) nums[i] = sc.nextInt();
            int q = sc.nextInt();
            sc.nextLine();
            String[] ops = new String[q];
            for (int i = 0; i < q; i++) ops[i] = sc.nextLine();
            long[] res = processOperations(nums, ops);
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

long long* tree;
long long* lazy;
int n;

void build(int* arr, int node, int l, int r) {
    if (l == r) { tree[node] = arr[l]; return; }
    int mid = l + (r - l) / 2;
    build(arr, 2 * node + 1, l, mid);
    build(arr, 2 * node + 2, mid + 1, r);
    tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
}

void push(int node, int l, int r) {
    if (lazy[node] != 0) {
        tree[node] += lazy[node] * (r - l + 1);
        if (l != r) {
            lazy[2 * node + 1] += lazy[node];
            lazy[2 * node + 2] += lazy[node];
        }
        lazy[node] = 0;
    }
}

void update(int ql, int qr, int val, int node, int l, int r) {
    push(node, l, r);
    if (ql > r || qr < l) return;
    if (ql <= l && r <= qr) {
        lazy[node] += val;
        push(node, l, r);
        return;
    }
    int mid = l + (r - l) / 2;
    update(ql, qr, val, 2 * node + 1, l, mid);
    update(ql, qr, val, 2 * node + 2, mid + 1, r);
    tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
}

long long query(int ql, int qr, int node, int l, int r) {
    push(node, l, r);
    if (ql > r || qr < l) return 0;
    if (ql <= l && r <= qr) return tree[node];
    int mid = l + (r - l) / 2;
    return query(ql, qr, 2 * node + 1, l, mid) +
           query(ql, qr, 2 * node + 2, mid + 1, r);
}

long long* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {
    n = numsSize;
    tree = (long long*)calloc(4 * n, sizeof(long long));
    lazy = (long long*)calloc(4 * n, sizeof(long long));
    build(nums, 0, 0, n - 1);
    long long* res = (long long*)malloc(opsSize * sizeof(long long));
    int cnt = 0;
    for (int i = 0; i < opsSize; i++) {
        char op[10];
        int a, b, c;
        if (sscanf(operations[i], "%s %d %d %d", op, &a, &b, &c) >= 3) {
            if (strcmp(op, "ADD") == 0) {
                update(a, b, c, 0, 0, n - 1);
            } else if (strcmp(op, "QUERY") == 0) {
                res[cnt++] = query(a, b, 0, 0, n - 1);
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
    int q;
    if (scanf("%d", &q) != 1) return 0;
    getchar();
    char** ops = (char**)malloc(q * sizeof(char*));
    for (int i = 0; i < q; i++) {
        ops[i] = (char*)malloc(100 * sizeof(char));
        if (fgets(ops[i], 100, stdin) == NULL) return 0;
        ops[i][strcspn(ops[i], "\\n")] = 0;
    }
    int returnSize;
    long long* res = processOperations(nums, sz, ops, q, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        if (i > 0) printf(" ");
        printf("%lld", res[i]);
    }
    printf("\\n");
    free(nums);
    for (int i = 0; i < q; i++) free(ops[i]);
    free(ops);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <sstream>

using namespace std;

class LazySegTree {
    vector<long long> tree, lazy;
    int n;
    void build(vector<int>& arr, int node, int l, int r) {
        if (l == r) { tree[node] = arr[l]; return; }
        int mid = l + (r - l) / 2;
        build(arr, 2 * node + 1, l, mid);
        build(arr, 2 * node + 2, mid + 1, r);
        tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
    }
    void push(int node, int l, int r) {
        if (lazy[node] != 0) {
            tree[node] += lazy[node] * (r - l + 1);
            if (l != r) {
                lazy[2 * node + 1] += lazy[node];
                lazy[2 * node + 2] += lazy[node];
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
    void rangeAdd(int ql, int qr, int val, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return;
        if (ql <= l && r <= qr) {
            lazy[node] += val;
            push(node, l, r);
            return;
        }
        int mid = l + (r - l) / 2;
        rangeAdd(ql, qr, val, 2 * node + 1, l, mid);
        rangeAdd(ql, qr, val, 2 * node + 2, mid + 1, r);
        tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
    }
    long long rangeSum(int ql, int qr, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return 0;
        if (ql <= l && r <= qr) return tree[node];
        int mid = l + (r - l) / 2;
        return rangeSum(ql, qr, 2 * node + 1, l, mid) +
               rangeSum(ql, qr, 2 * node + 2, mid + 1, r);
    }
    void add(int l, int r, int val) { rangeAdd(l, r, val, 0, 0, n - 1); }
    long long sum(int l, int r) { return rangeSum(l, r, 0, 0, n - 1); }
};

vector<long long> processOperations(vector<int>& nums, vector<string>& operations) {
    LazySegTree seg(nums);
    vector<long long> res;
    for (string& op : operations) {
        stringstream ss(op);
        string cmd;
        ss >> cmd;
        if (cmd == "ADD") {
            int l, r, val;
            ss >> l >> r >> val;
            seg.add(l, r, val);
        } else if (cmd == "QUERY") {
            int l, r;
            ss >> l >> r;
            res.push_back(seg.sum(l, r));
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
        int q;
        cin >> q;
        cin.ignore();
        vector<string> ops(q);
        for (int i = 0; i < q; i++) getline(cin, ops[i]);
        vector<long long> res = processOperations(nums, ops);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'rurq-m2': {
    python: `class LazySegTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self.lazy = [0] * (4 * self.n)
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
        if self.lazy[node] != 0:
            self.tree[node] += self.lazy[node]
            if l != r:
                self.lazy[2*node+1] += self.lazy[node]
                self.lazy[2*node+2] += self.lazy[node]
            self.lazy[node] = 0
    def update(self, ql, qr, val, node, l, r):
        self._push(node, l, r)
        if ql > r or qr < l: return
        if ql <= l and r <= qr:
            self.lazy[node] += val
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

def process_operations(nums, operations):
    seg = LazySegTree(nums)
    results = []
    for op in operations:
        parts = op.split()
        if parts[0] == 'ADD':
            l, r, val = int(parts[1]), int(parts[2]), int(parts[3])
            seg.update(l, r, val, 0, 0, seg.n - 1)
        elif parts[0] == 'QUERY':
            l, r = int(parts[1]), int(parts[2])
            results.append(str(seg.query(l, r, 0, 0, seg.n - 1)))
    return results

n = int(input())
nums = list(map(int, input().split()))
q = int(input())
ops = [input().strip() for _ in range(q)]
results = process_operations(nums, ops)
print(' '.join(results))`,
    java: `import java.util.*;

public class Solution {
    static long[] tree, lazy;
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
            tree[node] += lazy[node];
            if (l != r) {
                lazy[2 * node + 1] += lazy[node];
                lazy[2 * node + 2] += lazy[node];
            }
            lazy[node] = 0;
        }
    }

    public static void update(int ql, int qr, int val, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return;
        if (ql <= l && r <= qr) {
            lazy[node] += val;
            push(node, l, r);
            return;
        }
        int mid = l + (r - l) / 2;
        update(ql, qr, val, 2 * node + 1, l, mid);
        update(ql, qr, val, 2 * node + 2, mid + 1, r);
        tree[node] = Math.min(tree[2 * node + 1], tree[2 * node + 2]);
    }

    public static long query(int ql, int qr, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return Long.MAX_VALUE;
        if (ql <= l && r <= qr) return tree[node];
        int mid = l + (r - l) / 2;
        return Math.min(query(ql, qr, 2 * node + 1, l, mid),
                        query(ql, qr, 2 * node + 2, mid + 1, r));
    }

    public static long[] processOperations(int[] nums, String[] operations) {
        n = nums.length;
        tree = new long[4 * n];
        lazy = new long[4 * n];
        build(nums, 0, 0, n - 1);
        List<Long> res = new ArrayList<>();
        for (String op : operations) {
            String[] parts = op.split(" ");
            if (parts[0].equals("ADD")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                int val = Integer.parseInt(parts[3]);
                update(l, r, val, 0, 0, n - 1);
            } else if (parts[0].equals("QUERY")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                res.add(query(l, r, 0, 0, n - 1));
            }
        }
        long[] result = new long[res.size()];
        for (int i = 0; i < res.size(); i++) result[i] = res.get(i);
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int sz = sc.nextInt();
            int[] nums = new int[sz];
            for (int i = 0; i < sz; i++) nums[i] = sc.nextInt();
            int q = sc.nextInt();
            sc.nextLine();
            String[] ops = new String[q];
            for (int i = 0; i < q; i++) ops[i] = sc.nextLine();
            long[] res = processOperations(nums, ops);
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
#include <limits.h>

long long* tree;
long long* lazy;
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
        tree[node] += lazy[node];
        if (l != r) {
            lazy[2 * node + 1] += lazy[node];
            lazy[2 * node + 2] += lazy[node];
        }
        lazy[node] = 0;
    }
}

void update(int ql, int qr, int val, int node, int l, int r) {
    push(node, l, r);
    if (ql > r || qr < l) return;
    if (ql <= l && r <= qr) {
        lazy[node] += val;
        push(node, l, r);
        return;
    }
    int mid = l + (r - l) / 2;
    update(ql, qr, val, 2 * node + 1, l, mid);
    update(ql, qr, val, 2 * node + 2, mid + 1, r);
    tree[node] = tree[2 * node + 1] < tree[2 * node + 2] ? tree[2 * node + 1] : tree[2 * node + 2];
}

long long query(int ql, int qr, int node, int l, int r) {
    push(node, l, r);
    if (ql > r || qr < l) return LLONG_MAX;
    if (ql <= l && r <= qr) return tree[node];
    int mid = l + (r - l) / 2;
    long long left = query(ql, qr, 2 * node + 1, l, mid);
    long long right = query(ql, qr, 2 * node + 2, mid + 1, r);
    return left < right ? left : right;
}

long long* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {
    n = numsSize;
    tree = (long long*)calloc(4 * n, sizeof(long long));
    lazy = (long long*)calloc(4 * n, sizeof(long long));
    build(nums, 0, 0, n - 1);
    long long* res = (long long*)malloc(opsSize * sizeof(long long));
    int cnt = 0;
    for (int i = 0; i < opsSize; i++) {
        char op[10];
        int a, b, c;
        if (sscanf(operations[i], "%s %d %d %d", op, &a, &b, &c) >= 3) {
            if (strcmp(op, "ADD") == 0) update(a, b, c, 0, 0, n - 1);
            else if (strcmp(op, "QUERY") == 0) res[cnt++] = query(a, b, 0, 0, n - 1);
        }
    }
    *returnSize = cnt;
    free(tree); free(lazy);
    return res;
}

int main() {
    int sz;
    if (scanf("%d", &sz) != 1) return 0;
    int* nums = (int*)malloc(sz * sizeof(int));
    for (int i = 0; i < sz; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int q;
    if (scanf("%d", &q) != 1) return 0;
    getchar();
    char** ops = (char**)malloc(q * sizeof(char*));
    for (int i = 0; i < q; i++) {
        ops[i] = (char*)malloc(100 * sizeof(char));
        if (fgets(ops[i], 100, stdin) == NULL) return 0;
        ops[i][strcspn(ops[i], "\\n")] = 0;
    }
    int returnSize;
    long long* res = processOperations(nums, sz, ops, q, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        if (i > 0) printf(" ");
        printf("%lld", res[i]);
    }
    printf("\\n");
    free(nums);
    for (int i = 0; i < q; i++) free(ops[i]);
    free(ops);
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
    vector<long long> tree, lazy;
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
            tree[node] += lazy[node];
            if (l != r) {
                lazy[2 * node + 1] += lazy[node];
                lazy[2 * node + 2] += lazy[node];
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
    void rangeAdd(int ql, int qr, int val, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return;
        if (ql <= l && r <= qr) {
            lazy[node] += val;
            push(node, l, r);
            return;
        }
        int mid = l + (r - l) / 2;
        rangeAdd(ql, qr, val, 2 * node + 1, l, mid);
        rangeAdd(ql, qr, val, 2 * node + 2, mid + 1, r);
        tree[node] = min(tree[2 * node + 1], tree[2 * node + 2]);
    }
    long long rangeMin(int ql, int qr, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return LLONG_MAX;
        if (ql <= l && r <= qr) return tree[node];
        int mid = l + (r - l) / 2;
        return min(rangeMin(ql, qr, 2 * node + 1, l, mid),
                   rangeMin(ql, qr, 2 * node + 2, mid + 1, r));
    }
    void add(int l, int r, int val) { rangeAdd(l, r, val, 0, 0, n - 1); }
    long long minVal(int l, int r) { return rangeMin(l, r, 0, 0, n - 1); }
};

vector<long long> processOperations(vector<int>& nums, vector<string>& operations) {
    LazySegTree seg(nums);
    vector<long long> res;
    for (string& op : operations) {
        stringstream ss(op);
        string cmd;
        ss >> cmd;
        if (cmd == "ADD") {
            int l, r, val;
            ss >> l >> r >> val;
            seg.add(l, r, val);
        } else if (cmd == "QUERY") {
            int l, r;
            ss >> l >> r;
            res.push_back(seg.minVal(l, r));
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
        int q;
        cin >> q;
        cin.ignore();
        vector<string> ops(q);
        for (int i = 0; i < q; i++) getline(cin, ops[i]);
        vector<long long> res = processOperations(nums, ops);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'rurq-m3': {
    python: `class BIT:
    def __init__(self, n):
        self.n = n
        self.bit = [0] * (n + 2)
    def add(self, i, val):
        i += 1
        while i <= self.n + 1:
            self.bit[i] += val
            i += i & -i
    def sum(self, i):
        i += 1
        s = 0
        while i > 0:
            s += self.bit[i]
            i -= i & -i
        return s

def process_operations(nums, operations):
    n = len(nums)
    bit1 = BIT(n)
    bit2 = BIT(n)
    for i, v in enumerate(nums):
        bit1.add(i, v)
        bit1.add(i + 1, -v)
    results = []
    for op in operations:
        parts = op.split()
        if parts[0] == 'ADD':
            l, r, val = int(parts[1]), int(parts[2]), int(parts[3])
            bit1.add(l, val)
            bit1.add(r + 1, -val)
            bit2.add(l, val * (l - 1))
            bit2.add(r + 1, -val * r)
        elif parts[0] == 'QUERY':
            l, r = int(parts[1]), int(parts[2])
            def prefix_sum(i):
                return bit1.sum(i) * i - bit2.sum(i)
            res = prefix_sum(r) - prefix_sum(l - 1)
            results.append(str(res))
    return results

n = int(input())
nums = list(map(int, input().split()))
q = int(input())
ops = [input().strip() for _ in range(q)]
results = process_operations(nums, ops)
print(' '.join(results))`,
    java: `import java.util.*;

public class Solution {
    static class BIT {
        long[] bit;
        int n;
        BIT(int n) { this.n = n; bit = new long[n + 2]; }
        void add(int i, long val) {
            i++;
            while (i <= n + 1) { bit[i] += val; i += i & -i; }
        }
        long sum(int i) {
            i++;
            long s = 0;
            while (i > 0) { s += bit[i]; i -= i & -i; }
            return s;
        }
    }

    public static long[] processOperations(int[] nums, String[] operations) {
        int n = nums.length;
        BIT bit1 = new BIT(n);
        BIT bit2 = new BIT(n);
        for (int i = 0; i < n; i++) {
            bit1.add(i, nums[i]);
            bit1.add(i + 1, -nums[i]);
        }
        List<Long> res = new ArrayList<>();
        for (String op : operations) {
            String[] parts = op.split(" ");
            if (parts[0].equals("ADD")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                int val = Integer.parseInt(parts[3]);
                bit1.add(l, val);
                bit1.add(r + 1, -val);
                bit2.add(l, (long)val * (l - 1));
                bit2.add(r + 1, -(long)val * r);
            } else if (parts[0].equals("QUERY")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                long prefixR = bit1.sum(r) * r - bit2.sum(r);
                long prefixL = (l > 0) ? (bit1.sum(l - 1) * (l - 1) - bit2.sum(l - 1)) : 0;
                res.add(prefixR - prefixL);
            }
        }
        long[] result = new long[res.size()];
        for (int i = 0; i < res.size(); i++) result[i] = res.get(i);
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int q = sc.nextInt();
            sc.nextLine();
            String[] ops = new String[q];
            for (int i = 0; i < q; i++) ops[i] = sc.nextLine();
            long[] res = processOperations(nums, ops);
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

typedef struct { long long* bit; int n; } BIT;

BIT* createBIT(int n) {
    BIT* b = (BIT*)malloc(sizeof(BIT));
    b->n = n;
    b->bit = (long long*)calloc(n + 2, sizeof(long long));
    return b;
}

void bitAdd(BIT* b, int i, long long val) {
    i++;
    while (i <= b->n + 1) { b->bit[i] += val; i += i & -i; }
}

long long bitSum(BIT* b, int i) {
    i++;
    long long s = 0;
    while (i > 0) { s += b->bit[i]; i -= i & -i; }
    return s;
}

long long* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {
    int n = numsSize;
    BIT* bit1 = createBIT(n);
    BIT* bit2 = createBIT(n);
    for (int i = 0; i < n; i++) {
        bitAdd(bit1, i, nums[i]);
        bitAdd(bit1, i + 1, -nums[i]);
    }
    long long* res = (long long*)malloc(opsSize * sizeof(long long));
    int cnt = 0;
    for (int i = 0; i < opsSize; i++) {
        char op[10];
        int a, b, c;
        if (sscanf(operations[i], "%s %d %d %d", op, &a, &b, &c) >= 3) {
            if (strcmp(op, "ADD") == 0) {
                bitAdd(bit1, a, c);
                bitAdd(bit1, b + 1, -c);
                bitAdd(bit2, a, (long long)c * (a - 1));
                bitAdd(bit2, b + 1, -(long long)c * b);
            } else if (strcmp(op, "QUERY") == 0) {
                long long prefR = bitSum(bit1, b) * b - bitSum(bit2, b);
                long long prefL = (a > 0) ? (bitSum(bit1, a - 1) * (a - 1) - bitSum(bit2, a - 1)) : 0;
                res[cnt++] = prefR - prefL;
            }
        }
    }
    *returnSize = cnt;
    free(bit1->bit); free(bit1);
    free(bit2->bit); free(bit2);
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
    getchar();
    char** ops = (char**)malloc(q * sizeof(char*));
    for (int i = 0; i < q; i++) {
        ops[i] = (char*)malloc(100 * sizeof(char));
        if (fgets(ops[i], 100, stdin) == NULL) return 0;
        ops[i][strcspn(ops[i], "\\n")] = 0;
    }
    int returnSize;
    long long* res = processOperations(nums, n, ops, q, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        if (i > 0) printf(" ");
        printf("%lld", res[i]);
    }
    printf("\\n");
    free(nums);
    for (int i = 0; i < q; i++) free(ops[i]);
    free(ops);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <sstream>

using namespace std;

class BIT {
    vector<long long> bit;
    int n;
public:
    BIT(int n) : n(n) { bit.assign(n + 2, 0); }
    void add(int i, long long val) {
        i++;
        while (i <= n + 1) { bit[i] += val; i += i & -i; }
    }
    long long sum(int i) {
        i++;
        long long s = 0;
        while (i > 0) { s += bit[i]; i -= i & -i; }
        return s;
    }
};

vector<long long> processOperations(vector<int>& nums, vector<string>& operations) {
    int n = nums.size();
    BIT bit1(n), bit2(n);
    for (int i = 0; i < n; i++) {
        bit1.add(i, nums[i]);
        bit1.add(i + 1, -nums[i]);
    }
    vector<long long> res;
    for (string& op : operations) {
        stringstream ss(op);
        string cmd;
        ss >> cmd;
        if (cmd == "ADD") {
            int l, r, val;
            ss >> l >> r >> val;
            bit1.add(l, val);
            bit1.add(r + 1, -val);
            bit2.add(l, (long long)val * (l - 1));
            bit2.add(r + 1, -(long long)val * r);
        } else if (cmd == "QUERY") {
            int l, r;
            ss >> l >> r;
            long long prefR = bit1.sum(r) * r - bit2.sum(r);
            long long prefL = (l > 0) ? (bit1.sum(l - 1) * (l - 1) - bit2.sum(l - 1)) : 0;
            res.push_back(prefR - prefL);
        }
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
        cin.ignore();
        vector<string> ops(q);
        for (int i = 0; i < q; i++) getline(cin, ops[i]);
        vector<long long> res = processOperations(nums, ops);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'rurq-m4': {
    python: `MOD = 10**9 + 7

class LazySegTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self.lazy = [1] * (4 * self.n)
        self._build(arr, 0, 0, self.n - 1)
    def _build(self, arr, node, l, r):
        if l == r:
            self.tree[node] = arr[l] % MOD
            return
        mid = (l + r) // 2
        self._build(arr, 2*node+1, l, mid)
        self._build(arr, 2*node+2, mid+1, r)
        self.tree[node] = (self.tree[2*node+1] + self.tree[2*node+2]) % MOD
    def _push(self, node, l, r):
        if self.lazy[node] != 1:
            self.tree[node] = (self.tree[node] * self.lazy[node]) % MOD
            if l != r:
                self.lazy[2*node+1] = (self.lazy[2*node+1] * self.lazy[node]) % MOD
                self.lazy[2*node+2] = (self.lazy[2*node+2] * self.lazy[node]) % MOD
            self.lazy[node] = 1
    def update(self, ql, qr, val, node, l, r):
        self._push(node, l, r)
        if ql > r or qr < l: return
        if ql <= l and r <= qr:
            self.lazy[node] = (self.lazy[node] * val) % MOD
            self._push(node, l, r)
            return
        mid = (l + r) // 2
        self.update(ql, qr, val, 2*node+1, l, mid)
        self.update(ql, qr, val, 2*node+2, mid+1, r)
        self.tree[node] = (self.tree[2*node+1] + self.tree[2*node+2]) % MOD
    def query(self, ql, qr, node, l, r):
        self._push(node, l, r)
        if ql > r or qr < l: return 0
        if ql <= l and r <= qr: return self.tree[node]
        mid = (l + r) // 2
        left = self.query(ql, qr, 2*node+1, l, mid)
        right = self.query(ql, qr, 2*node+2, mid+1, r)
        return (left + right) % MOD

def process_operations(nums, operations):
    seg = LazySegTree(nums)
    results = []
    for op in operations:
        parts = op.split()
        if parts[0] == 'MULTIPLY':
            l, r, val = int(parts[1]), int(parts[2]), int(parts[3])
            seg.update(l, r, val, 0, 0, seg.n - 1)
        elif parts[0] == 'QUERY':
            l, r = int(parts[1]), int(parts[2])
            results.append(str(seg.query(l, r, 0, 0, seg.n - 1)))
    return results

n = int(input())
nums = list(map(int, input().split()))
q = int(input())
ops = [input().strip() for _ in range(q)]
results = process_operations(nums, ops)
print(' '.join(results))`,
    java: `import java.util.*;

public class Solution {
    static final int MOD = 1_000_000_007;
    static long[] tree, lazy;
    static int n;

    public static void build(int[] arr, int node, int l, int r) {
        if (l == r) { tree[node] = arr[l] % MOD; return; }
        int mid = l + (r - l) / 2;
        build(arr, 2 * node + 1, l, mid);
        build(arr, 2 * node + 2, mid + 1, r);
        tree[node] = (tree[2 * node + 1] + tree[2 * node + 2]) % MOD;
    }

    public static void push(int node, int l, int r) {
        if (lazy[node] != 1) {
            tree[node] = (tree[node] * lazy[node]) % MOD;
            if (l != r) {
                lazy[2 * node + 1] = (lazy[2 * node + 1] * lazy[node]) % MOD;
                lazy[2 * node + 2] = (lazy[2 * node + 2] * lazy[node]) % MOD;
            }
            lazy[node] = 1;
        }
    }

    public static void update(int ql, int qr, int val, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return;
        if (ql <= l && r <= qr) {
            lazy[node] = (int)((lazy[node] * (long)val) % MOD);
            push(node, l, r);
            return;
        }
        int mid = l + (r - l) / 2;
        update(ql, qr, val, 2 * node + 1, l, mid);
        update(ql, qr, val, 2 * node + 2, mid + 1, r);
        tree[node] = (tree[2 * node + 1] + tree[2 * node + 2]) % MOD;
    }

    public static long query(int ql, int qr, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return 0;
        if (ql <= l && r <= qr) return tree[node];
        int mid = l + (r - l) / 2;
        return (query(ql, qr, 2 * node + 1, l, mid) +
                query(ql, qr, 2 * node + 2, mid + 1, r)) % MOD;
    }

    public static long[] processOperations(int[] nums, String[] operations) {
        n = nums.length;
        tree = new long[4 * n];
        lazy = new long[4 * n];
        Arrays.fill(lazy, 1);
        build(nums, 0, 0, n - 1);
        List<Long> res = new ArrayList<>();
        for (String op : operations) {
            String[] parts = op.split(" ");
            if (parts[0].equals("MULTIPLY")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                int val = Integer.parseInt(parts[3]);
                update(l, r, val, 0, 0, n - 1);
            } else if (parts[0].equals("QUERY")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                res.add(query(l, r, 0, 0, n - 1));
            }
        }
        long[] result = new long[res.size()];
        for (int i = 0; i < res.size(); i++) result[i] = res.get(i);
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int sz = sc.nextInt();
            int[] nums = new int[sz];
            for (int i = 0; i < sz; i++) nums[i] = sc.nextInt();
            int q = sc.nextInt();
            sc.nextLine();
            String[] ops = new String[q];
            for (int i = 0; i < q; i++) ops[i] = sc.nextLine();
            long[] res = processOperations(nums, ops);
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

#define MOD 1000000007
long long* tree;
long long* lazy;
int n;

void build(int* arr, int node, int l, int r) {
    if (l == r) { tree[node] = arr[l] % MOD; return; }
    int mid = l + (r - l) / 2;
    build(arr, 2 * node + 1, l, mid);
    build(arr, 2 * node + 2, mid + 1, r);
    tree[node] = (tree[2 * node + 1] + tree[2 * node + 2]) % MOD;
}

void push(int node, int l, int r) {
    if (lazy[node] != 1) {
        tree[node] = (tree[node] * lazy[node]) % MOD;
        if (l != r) {
            lazy[2 * node + 1] = (lazy[2 * node + 1] * lazy[node]) % MOD;
            lazy[2 * node + 2] = (lazy[2 * node + 2] * lazy[node]) % MOD;
        }
        lazy[node] = 1;
    }
}

void update(int ql, int qr, int val, int node, int l, int r) {
    push(node, l, r);
    if (ql > r || qr < l) return;
    if (ql <= l && r <= qr) {
        lazy[node] = (lazy[node] * val) % MOD;
        push(node, l, r);
        return;
    }
    int mid = l + (r - l) / 2;
    update(ql, qr, val, 2 * node + 1, l, mid);
    update(ql, qr, val, 2 * node + 2, mid + 1, r);
    tree[node] = (tree[2 * node + 1] + tree[2 * node + 2]) % MOD;
}

long long query(int ql, int qr, int node, int l, int r) {
    push(node, l, r);
    if (ql > r || qr < l) return 0;
    if (ql <= l && r <= qr) return tree[node];
    int mid = l + (r - l) / 2;
    return (query(ql, qr, 2 * node + 1, l, mid) +
            query(ql, qr, 2 * node + 2, mid + 1, r)) % MOD;
}

long long* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {
    n = numsSize;
    tree = (long long*)calloc(4 * n, sizeof(long long));
    lazy = (long long*)malloc(4 * n * sizeof(long long));
    for (int i = 0; i < 4 * n; i++) lazy[i] = 1;
    build(nums, 0, 0, n - 1);
    long long* res = (long long*)malloc(opsSize * sizeof(long long));
    int cnt = 0;
    for (int i = 0; i < opsSize; i++) {
        char op[15];
        int a, b, c;
        if (sscanf(operations[i], "%s %d %d %d", op, &a, &b, &c) >= 3) {
            if (strcmp(op, "MULTIPLY") == 0) update(a, b, c, 0, 0, n - 1);
            else if (strcmp(op, "QUERY") == 0) res[cnt++] = query(a, b, 0, 0, n - 1);
        }
    }
    *returnSize = cnt;
    free(tree); free(lazy);
    return res;
}

int main() {
    int sz;
    if (scanf("%d", &sz) != 1) return 0;
    int* nums = (int*)malloc(sz * sizeof(int));
    for (int i = 0; i < sz; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int q;
    if (scanf("%d", &q) != 1) return 0;
    getchar();
    char** ops = (char**)malloc(q * sizeof(char*));
    for (int i = 0; i < q; i++) {
        ops[i] = (char*)malloc(100 * sizeof(char));
        if (fgets(ops[i], 100, stdin) == NULL) return 0;
        ops[i][strcspn(ops[i], "\\n")] = 0;
    }
    int returnSize;
    long long* res = processOperations(nums, sz, ops, q, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        if (i > 0) printf(" ");
        printf("%lld", res[i]);
    }
    printf("\\n");
    free(nums);
    for (int i = 0; i < q; i++) free(ops[i]);
    free(ops);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <sstream>

using namespace std;

const long long MOD = 1e9 + 7;

class LazySegTree {
    vector<long long> tree, lazy;
    int n;
    void build(vector<int>& arr, int node, int l, int r) {
        if (l == r) { tree[node] = arr[l] % MOD; return; }
        int mid = l + (r - l) / 2;
        build(arr, 2 * node + 1, l, mid);
        build(arr, 2 * node + 2, mid + 1, r);
        tree[node] = (tree[2 * node + 1] + tree[2 * node + 2]) % MOD;
    }
    void push(int node, int l, int r) {
        if (lazy[node] != 1) {
            tree[node] = (tree[node] * lazy[node]) % MOD;
            if (l != r) {
                lazy[2 * node + 1] = (lazy[2 * node + 1] * lazy[node]) % MOD;
                lazy[2 * node + 2] = (lazy[2 * node + 2] * lazy[node]) % MOD;
            }
            lazy[node] = 1;
        }
    }
public:
    LazySegTree(vector<int>& arr) {
        n = arr.size();
        tree.assign(4 * n, 0);
        lazy.assign(4 * n, 1);
        build(arr, 0, 0, n - 1);
    }
    void rangeMul(int ql, int qr, int val, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return;
        if (ql <= l && r <= qr) {
            lazy[node] = (lazy[node] * val) % MOD;
            push(node, l, r);
            return;
        }
        int mid = l + (r - l) / 2;
        rangeMul(ql, qr, val, 2 * node + 1, l, mid);
        rangeMul(ql, qr, val, 2 * node + 2, mid + 1, r);
        tree[node] = (tree[2 * node + 1] + tree[2 * node + 2]) % MOD;
    }
    long long rangeSum(int ql, int qr, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return 0;
        if (ql <= l && r <= qr) return tree[node];
        int mid = l + (r - l) / 2;
        return (rangeSum(ql, qr, 2 * node + 1, l, mid) +
                rangeSum(ql, qr, 2 * node + 2, mid + 1, r)) % MOD;
    }
    void multiply(int l, int r, int val) { rangeMul(l, r, val, 0, 0, n - 1); }
    long long sum(int l, int r) { return rangeSum(l, r, 0, 0, n - 1); }
};

vector<long long> processOperations(vector<int>& nums, vector<string>& operations) {
    LazySegTree seg(nums);
    vector<long long> res;
    for (string& op : operations) {
        stringstream ss(op);
        string cmd;
        ss >> cmd;
        if (cmd == "MULTIPLY") {
            int l, r, val;
            ss >> l >> r >> val;
            seg.multiply(l, r, val);
        } else if (cmd == "QUERY") {
            int l, r;
            ss >> l >> r;
            res.push_back(seg.sum(l, r));
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
        int q;
        cin >> q;
        cin.ignore();
        vector<string> ops(q);
        for (int i = 0; i < q; i++) getline(cin, ops[i]);
        vector<long long> res = processOperations(nums, ops);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'rurq-m5': {
    python: `def process_operations(nums, operations):
    n = len(nums)
    diff = [0] * (n + 1)
    results = []
    for op in operations:
        parts = op.split()
        if parts[0] == 'ADD':
            l, r, val = int(parts[1]), int(parts[2]), int(parts[3])
            diff[l] += val
            diff[r + 1] -= val
        elif parts[0] == 'COUNT':
            lo, hi = int(parts[1]), int(parts[2])
            cur = 0
            for i in range(n):
                cur += diff[i]
                nums[i] += cur
            diff = [0] * (n + 1)
            cnt = sum(1 for x in nums if lo <= x <= hi)
            results.append(str(cnt))
    return results

n = int(input())
nums = list(map(int, input().split()))
q = int(input())
ops = [input().strip() for _ in range(q)]
results = process_operations(nums, ops)
print(' '.join(results))`,
    java: `import java.util.*;

public class Solution {
    public static long[] processOperations(int[] nums, String[] operations) {
        int n = nums.length;
        int[] diff = new int[n + 1];
        List<Long> res = new ArrayList<>();
        for (String op : operations) {
            String[] parts = op.split(" ");
            if (parts[0].equals("ADD")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                int val = Integer.parseInt(parts[3]);
                diff[l] += val;
                diff[r + 1] -= val;
            } else if (parts[0].equals("COUNT")) {
                int lo = Integer.parseInt(parts[1]);
                int hi = Integer.parseInt(parts[2]);
                int cur = 0;
                for (int i = 0; i < n; i++) {
                    cur += diff[i];
                    nums[i] += cur;
                }
                diff = new int[n + 1];
                long cnt = 0;
                for (int x : nums) {
                    if (x >= lo && x <= hi) cnt++;
                }
                res.add(cnt);
            }
        }
        long[] result = new long[res.size()];
        for (int i = 0; i < res.size(); i++) result[i] = res.get(i);
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int q = sc.nextInt();
            sc.nextLine();
            String[] ops = new String[q];
            for (int i = 0; i < q; i++) ops[i] = sc.nextLine();
            long[] res = processOperations(nums, ops);
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

long long* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {
    int* diff = (int*)calloc(numsSize + 1, sizeof(int));
    long long* res = (long long*)malloc(opsSize * sizeof(long long));
    int cnt = 0;
    for (int i = 0; i < opsSize; i++) {
        char op[10];
        int a, b, c;
        if (sscanf(operations[i], "%s %d %d %d", op, &a, &b, &c) >= 3) {
            if (strcmp(op, "ADD") == 0) {
                diff[a] += c;
                diff[b + 1] -= c;
            } else if (strcmp(op, "COUNT") == 0) {
                int cur = 0;
                for (int j = 0; j < numsSize; j++) {
                    cur += diff[j];
                    nums[j] += cur;
                }
                memset(diff, 0, (numsSize + 1) * sizeof(int));
                long long count = 0;
                for (int j = 0; j < numsSize; j++) {
                    if (nums[j] >= a && nums[j] <= b) count++;
                }
                res[cnt++] = count;
            }
        }
    }
    *returnSize = cnt;
    free(diff);
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
    getchar();
    char** ops = (char**)malloc(q * sizeof(char*));
    for (int i = 0; i < q; i++) {
        ops[i] = (char*)malloc(100 * sizeof(char));
        if (fgets(ops[i], 100, stdin) == NULL) return 0;
        ops[i][strcspn(ops[i], "\\n")] = 0;
    }
    int returnSize;
    long long* res = processOperations(nums, n, ops, q, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        if (i > 0) printf(" ");
        printf("%lld", res[i]);
    }
    printf("\\n");
    free(nums);
    for (int i = 0; i < q; i++) free(ops[i]);
    free(ops);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <sstream>

using namespace std;

vector<long long> processOperations(vector<int>& nums, vector<string>& operations) {
    int n = nums.size();
    vector<int> diff(n + 1, 0);
    vector<long long> res;
    for (string& op : operations) {
        stringstream ss(op);
        string cmd;
        ss >> cmd;
        if (cmd == "ADD") {
            int l, r, val;
            ss >> l >> r >> val;
            diff[l] += val;
            diff[r + 1] -= val;
        } else if (cmd == "COUNT") {
            int lo, hi;
            ss >> lo >> hi;
            int cur = 0;
            for (int i = 0; i < n; i++) {
                cur += diff[i];
                nums[i] += cur;
            }
            fill(diff.begin(), diff.end(), 0);
            long long cnt = 0;
            for (int x : nums) {
                if (x >= lo && x <= hi) cnt++;
            }
            res.push_back(cnt);
        }
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
        cin.ignore();
        vector<string> ops(q);
        for (int i = 0; i < q; i++) getline(cin, ops[i]);
        vector<long long> res = processOperations(nums, ops);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'rurq-h1': {
    python: `class LazySegTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self.lazy_add = [0] * (4 * self.n)
        self.lazy_set = [None] * (4 * self.n)
        self._build(arr, 0, 0, self.n - 1)
    def _build(self, arr, node, l, r):
        if l == r:
            self.tree[node] = arr[l]
            return
        mid = (l + r) // 2
        self._build(arr, 2*node+1, l, mid)
        self._build(arr, 2*node+2, mid+1, r)
        self.tree[node] = self.tree[2*node+1] + self.tree[2*node+2]
    def _push(self, node, l, r):
        if self.lazy_set[node] is not None:
            self.tree[node] = self.lazy_set[node] * (r - l + 1)
            if l != r:
                self.lazy_set[2*node+1] = self.lazy_set[node]
                self.lazy_set[2*node+2] = self.lazy_set[node]
                self.lazy_add[2*node+1] = 0
                self.lazy_add[2*node+2] = 0
            self.lazy_set[node] = None
        if self.lazy_add[node] != 0:
            self.tree[node] += self.lazy_add[node] * (r - l + 1)
            if l != r:
                self.lazy_add[2*node+1] += self.lazy_add[node]
                self.lazy_add[2*node+2] += self.lazy_add[node]
            self.lazy_add[node] = 0
    def range_add(self, ql, qr, val, node, l, r):
        self._push(node, l, r)
        if ql > r or qr < l: return
        if ql <= l and r <= qr:
            self.lazy_add[node] += val
            self._push(node, l, r)
            return
        mid = (l + r) // 2
        self.range_add(ql, qr, val, 2*node+1, l, mid)
        self.range_add(ql, qr, val, 2*node+2, mid+1, r)
        self.tree[node] = self.tree[2*node+1] + self.tree[2*node+2]
    def point_set(self, idx, val, node, l, r):
        self._push(node, l, r)
        if l == r:
            self.tree[node] = val
            return
        mid = (l + r) // 2
        if idx <= mid:
            self.point_set(idx, val, 2*node+1, l, mid)
        else:
            self.point_set(idx, val, 2*node+2, mid+1, r)
        self.tree[node] = self.tree[2*node+1] + self.tree[2*node+2]
    def query(self, ql, qr, node, l, r):
        self._push(node, l, r)
        if ql > r or qr < l: return 0
        if ql <= l and r <= qr: return self.tree[node]
        mid = (l + r) // 2
        left = self.query(ql, qr, 2*node+1, l, mid)
        right = self.query(ql, qr, 2*node+2, mid+1, r)
        return left + right

def process_operations(nums, operations):
    seg = LazySegTree(nums)
    results = []
    for op in operations:
        parts = op.split()
        if parts[0] == 'ADD':
            l, r, val = int(parts[1]), int(parts[2]), int(parts[3])
            seg.range_add(l, r, val, 0, 0, seg.n - 1)
        elif parts[0] == 'SET':
            i, val = int(parts[1]), int(parts[2])
            seg.point_set(i, val, 0, 0, seg.n - 1)
        elif parts[0] == 'QUERY':
            l, r = int(parts[1]), int(parts[2])
            results.append(str(seg.query(l, r, 0, 0, seg.n - 1)))
    return results

n = int(input())
nums = list(map(int, input().split()))
q = int(input())
ops = [input().strip() for _ in range(q)]
results = process_operations(nums, ops)
print(' '.join(results))`,
    java: `import java.util.*;

public class Solution {
    static long[] tree, lazyAdd;
    static long[] lazySet;
    static boolean[] hasSet;
    static int n;

    public static void build(int[] arr, int node, int l, int r) {
        if (l == r) { tree[node] = arr[l]; return; }
        int mid = l + (r - l) / 2;
        build(arr, 2 * node + 1, l, mid);
        build(arr, 2 * node + 2, mid + 1, r);
        tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
    }

    public static void push(int node, int l, int r) {
        if (hasSet[node]) {
            tree[node] = lazySet[node] * (r - l + 1);
            if (l != r) {
                lazySet[2 * node + 1] = lazySet[node];
                lazySet[2 * node + 2] = lazySet[node];
                hasSet[2 * node + 1] = true;
                hasSet[2 * node + 2] = true;
                lazyAdd[2 * node + 1] = 0;
                lazyAdd[2 * node + 2] = 0;
            }
            hasSet[node] = false;
        }
        if (lazyAdd[node] != 0) {
            tree[node] += lazyAdd[node] * (r - l + 1);
            if (l != r) {
                lazyAdd[2 * node + 1] += lazyAdd[node];
                lazyAdd[2 * node + 2] += lazyAdd[node];
            }
            lazyAdd[node] = 0;
        }
    }

    public static void rangeAdd(int ql, int qr, int val, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return;
        if (ql <= l && r <= qr) {
            lazyAdd[node] += val;
            push(node, l, r);
            return;
        }
        int mid = l + (r - l) / 2;
        rangeAdd(ql, qr, val, 2 * node + 1, l, mid);
        rangeAdd(ql, qr, val, 2 * node + 2, mid + 1, r);
        tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
    }

    public static void pointSet(int idx, int val, int node, int l, int r) {
        push(node, l, r);
        if (l == r) { tree[node] = val; return; }
        int mid = l + (r - l) / 2;
        if (idx <= mid) pointSet(idx, val, 2 * node + 1, l, mid);
        else pointSet(idx, val, 2 * node + 2, mid + 1, r);
        tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
    }

    public static long query(int ql, int qr, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return 0;
        if (ql <= l && r <= qr) return tree[node];
        int mid = l + (r - l) / 2;
        return query(ql, qr, 2 * node + 1, l, mid) +
               query(ql, qr, 2 * node + 2, mid + 1, r);
    }

    public static long[] processOperations(int[] nums, String[] operations) {
        n = nums.length;
        tree = new long[4 * n];
        lazyAdd = new long[4 * n];
        lazySet = new long[4 * n];
        hasSet = new boolean[4 * n];
        build(nums, 0, 0, n - 1);
        List<Long> res = new ArrayList<>();
        for (String op : operations) {
            String[] parts = op.split(" ");
            if (parts[0].equals("ADD")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                int val = Integer.parseInt(parts[3]);
                rangeAdd(l, r, val, 0, 0, n - 1);
            } else if (parts[0].equals("SET")) {
                int idx = Integer.parseInt(parts[1]);
                int val = Integer.parseInt(parts[2]);
                pointSet(idx, val, 0, 0, n - 1);
            } else if (parts[0].equals("QUERY")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                res.add(query(l, r, 0, 0, n - 1));
            }
        }
        long[] result = new long[res.size()];
        for (int i = 0; i < res.size(); i++) result[i] = res.get(i);
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int sz = sc.nextInt();
            int[] nums = new int[sz];
            for (int i = 0; i < sz; i++) nums[i] = sc.nextInt();
            int q = sc.nextInt();
            sc.nextLine();
            String[] ops = new String[q];
            for (int i = 0; i < q; i++) ops[i] = sc.nextLine();
            long[] res = processOperations(nums, ops);
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
#include <stdbool.h>

long long* tree;
long long* lazyAdd;
long long* lazySet;
bool* hasSet;
int n;

void build(int* arr, int node, int l, int r) {
    if (l == r) { tree[node] = arr[l]; return; }
    int mid = l + (r - l) / 2;
    build(arr, 2 * node + 1, l, mid);
    build(arr, 2 * node + 2, mid + 1, r);
    tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
}

void push(int node, int l, int r) {
    if (hasSet[node]) {
        tree[node] = lazySet[node] * (r - l + 1);
        if (l != r) {
            lazySet[2 * node + 1] = lazySet[node];
            lazySet[2 * node + 2] = lazySet[node];
            hasSet[2 * node + 1] = true;
            hasSet[2 * node + 2] = true;
            lazyAdd[2 * node + 1] = 0;
            lazyAdd[2 * node + 2] = 0;
        }
        hasSet[node] = false;
    }
    if (lazyAdd[node] != 0) {
        tree[node] += lazyAdd[node] * (r - l + 1);
        if (l != r) {
            lazyAdd[2 * node + 1] += lazyAdd[node];
            lazyAdd[2 * node + 2] += lazyAdd[node];
        }
        lazyAdd[node] = 0;
    }
}

void rangeAdd(int ql, int qr, int val, int node, int l, int r) {
    push(node, l, r);
    if (ql > r || qr < l) return;
    if (ql <= l && r <= qr) {
        lazyAdd[node] += val;
        push(node, l, r);
        return;
    }
    int mid = l + (r - l) / 2;
    rangeAdd(ql, qr, val, 2 * node + 1, l, mid);
    rangeAdd(ql, qr, val, 2 * node + 2, mid + 1, r);
    tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
}

void pointSet(int idx, int val, int node, int l, int r) {
    push(node, l, r);
    if (l == r) { tree[node] = val; return; }
    int mid = l + (r - l) / 2;
    if (idx <= mid) pointSet(idx, val, 2 * node + 1, l, mid);
    else pointSet(idx, val, 2 * node + 2, mid + 1, r);
    tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
}

long long query(int ql, int qr, int node, int l, int r) {
    push(node, l, r);
    if (ql > r || qr < l) return 0;
    if (ql <= l && r <= qr) return tree[node];
    int mid = l + (r - l) / 2;
    return query(ql, qr, 2 * node + 1, l, mid) +
           query(ql, qr, 2 * node + 2, mid + 1, r);
}

long long* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {
    n = numsSize;
    tree = (long long*)calloc(4 * n, sizeof(long long));
    lazyAdd = (long long*)calloc(4 * n, sizeof(long long));
    lazySet = (long long*)calloc(4 * n, sizeof(long long));
    hasSet = (bool*)calloc(4 * n, sizeof(bool));
    build(nums, 0, 0, n - 1);
    long long* res = (long long*)malloc(opsSize * sizeof(long long));
    int cnt = 0;
    for (int i = 0; i < opsSize; i++) {
        char op[10];
        int a, b, c;
        if (sscanf(operations[i], "%s %d %d %d", op, &a, &b, &c) >= 3) {
            if (strcmp(op, "ADD") == 0) rangeAdd(a, b, c, 0, 0, n - 1);
            else if (strcmp(op, "SET") == 0) pointSet(a, b, 0, 0, n - 1);
            else if (strcmp(op, "QUERY") == 0) res[cnt++] = query(a, b, 0, 0, n - 1);
        }
    }
    *returnSize = cnt;
    free(tree); free(lazyAdd); free(lazySet); free(hasSet);
    return res;
}

int main() {
    int sz;
    if (scanf("%d", &sz) != 1) return 0;
    int* nums = (int*)malloc(sz * sizeof(int));
    for (int i = 0; i < sz; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int q;
    if (scanf("%d", &q) != 1) return 0;
    getchar();
    char** ops = (char**)malloc(q * sizeof(char*));
    for (int i = 0; i < q; i++) {
        ops[i] = (char*)malloc(100 * sizeof(char));
        if (fgets(ops[i], 100, stdin) == NULL) return 0;
        ops[i][strcspn(ops[i], "\\n")] = 0;
    }
    int returnSize;
    long long* res = processOperations(nums, sz, ops, q, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        if (i > 0) printf(" ");
        printf("%lld", res[i]);
    }
    printf("\\n");
    free(nums);
    for (int i = 0; i < q; i++) free(ops[i]);
    free(ops);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <sstream>
#include <climits>

using namespace std;

class LazySegTree {
    vector<long long> tree, lazyAdd, lazySet;
    vector<bool> hasSet;
    int n;
    void build(vector<int>& arr, int node, int l, int r) {
        if (l == r) { tree[node] = arr[l]; return; }
        int mid = l + (r - l) / 2;
        build(arr, 2 * node + 1, l, mid);
        build(arr, 2 * node + 2, mid + 1, r);
        tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
    }
    void push(int node, int l, int r) {
        if (hasSet[node]) {
            tree[node] = lazySet[node] * (r - l + 1);
            if (l != r) {
                lazySet[2 * node + 1] = lazySet[node];
                lazySet[2 * node + 2] = lazySet[node];
                hasSet[2 * node + 1] = true;
                hasSet[2 * node + 2] = true;
                lazyAdd[2 * node + 1] = 0;
                lazyAdd[2 * node + 2] = 0;
            }
            hasSet[node] = false;
        }
        if (lazyAdd[node] != 0) {
            tree[node] += lazyAdd[node] * (r - l + 1);
            if (l != r) {
                lazyAdd[2 * node + 1] += lazyAdd[node];
                lazyAdd[2 * node + 2] += lazyAdd[node];
            }
            lazyAdd[node] = 0;
        }
    }
public:
    LazySegTree(vector<int>& arr) {
        n = arr.size();
        tree.assign(4 * n, 0);
        lazyAdd.assign(4 * n, 0);
        lazySet.assign(4 * n, 0);
        hasSet.assign(4 * n, false);
        build(arr, 0, 0, n - 1);
    }
    void rangeAdd(int ql, int qr, int val, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return;
        if (ql <= l && r <= qr) {
            lazyAdd[node] += val;
            push(node, l, r);
            return;
        }
        int mid = l + (r - l) / 2;
        rangeAdd(ql, qr, val, 2 * node + 1, l, mid);
        rangeAdd(ql, qr, val, 2 * node + 2, mid + 1, r);
        tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
    }
    void pointSet(int idx, int val, int node, int l, int r) {
        push(node, l, r);
        if (l == r) { tree[node] = val; return; }
        int mid = l + (r - l) / 2;
        if (idx <= mid) pointSet(idx, val, 2 * node + 1, l, mid);
        else pointSet(idx, val, 2 * node + 2, mid + 1, r);
        tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
    }
    long long rangeSum(int ql, int qr, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return 0;
        if (ql <= l && r <= qr) return tree[node];
        int mid = l + (r - l) / 2;
        return rangeSum(ql, qr, 2 * node + 1, l, mid) +
               rangeSum(ql, qr, 2 * node + 2, mid + 1, r);
    }
    void add(int l, int r, int val) { rangeAdd(l, r, val, 0, 0, n - 1); }
    void set(int idx, int val) { pointSet(idx, val, 0, 0, n - 1); }
    long long sum(int l, int r) { return rangeSum(l, r, 0, 0, n - 1); }
};

vector<long long> processOperations(vector<int>& nums, vector<string>& operations) {
    LazySegTree seg(nums);
    vector<long long> res;
    for (string& op : operations) {
        stringstream ss(op);
        string cmd;
        ss >> cmd;
        if (cmd == "ADD") {
            int l, r, val;
            ss >> l >> r >> val;
            seg.add(l, r, val);
        } else if (cmd == "SET") {
            int idx, val;
            ss >> idx >> val;
            seg.set(idx, val);
        } else if (cmd == "QUERY") {
            int l, r;
            ss >> l >> r;
            res.push_back(seg.sum(l, r));
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
        int q;
        cin >> q;
        cin.ignore();
        vector<string> ops(q);
        for (int i = 0; i < q; i++) getline(cin, ops[i]);
        vector<long long> res = processOperations(nums, ops);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'rurq-h2': {
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
        self.tree[node] = self.tree[2*node+1] + self.tree[2*node+2]
    def _push(self, node, l, r):
        if self.lazy[node] is not None:
            self.tree[node] = self.lazy[node] * (r - l + 1)
            if l != r:
                self.lazy[2*node+1] = self.lazy[node]
                self.lazy[2*node+2] = self.lazy[node]
            self.lazy[node] = None
    def assign(self, ql, qr, val, node, l, r):
        self._push(node, l, r)
        if ql > r or qr < l: return
        if ql <= l and r <= qr:
            self.lazy[node] = val
            self._push(node, l, r)
            return
        mid = (l + r) // 2
        self.assign(ql, qr, val, 2*node+1, l, mid)
        self.assign(ql, qr, val, 2*node+2, mid+1, r)
        self.tree[node] = self.tree[2*node+1] + self.tree[2*node+2]
    def query(self, ql, qr, node, l, r):
        self._push(node, l, r)
        if ql > r or qr < l: return 0
        if ql <= l and r <= qr: return self.tree[node]
        mid = (l + r) // 2
        left = self.query(ql, qr, 2*node+1, l, mid)
        right = self.query(ql, qr, 2*node+2, mid+1, r)
        return left + right

def process_operations(nums, operations):
    seg = LazySegTree(nums)
    results = []
    for op in operations:
        parts = op.split()
        if parts[0] == 'ASSIGN':
            l, r, val = int(parts[1]), int(parts[2]), int(parts[3])
            seg.assign(l, r, val, 0, 0, seg.n - 1)
        elif parts[0] == 'QUERY':
            l, r = int(parts[1]), int(parts[2])
            results.append(str(seg.query(l, r, 0, 0, seg.n - 1)))
    return results

n = int(input())
nums = list(map(int, input().split()))
q = int(input())
ops = [input().strip() for _ in range(q)]
results = process_operations(nums, ops)
print(' '.join(results))`,
    java: `import java.util.*;

public class Solution {
    static long[] tree, lazy;
    static boolean[] hasLazy;
    static int n;

    public static void build(int[] arr, int node, int l, int r) {
        if (l == r) { tree[node] = arr[l]; return; }
        int mid = l + (r - l) / 2;
        build(arr, 2 * node + 1, l, mid);
        build(arr, 2 * node + 2, mid + 1, r);
        tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
    }

    public static void push(int node, int l, int r) {
        if (hasLazy[node]) {
            tree[node] = lazy[node] * (r - l + 1);
            if (l != r) {
                lazy[2 * node + 1] = lazy[node];
                lazy[2 * node + 2] = lazy[node];
                hasLazy[2 * node + 1] = true;
                hasLazy[2 * node + 2] = true;
            }
            hasLazy[node] = false;
        }
    }

    public static void assign(int ql, int qr, int val, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return;
        if (ql <= l && r <= qr) {
            lazy[node] = val;
            hasLazy[node] = true;
            push(node, l, r);
            return;
        }
        int mid = l + (r - l) / 2;
        assign(ql, qr, val, 2 * node + 1, l, mid);
        assign(ql, qr, val, 2 * node + 2, mid + 1, r);
        tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
    }

    public static long query(int ql, int qr, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return 0;
        if (ql <= l && r <= qr) return tree[node];
        int mid = l + (r - l) / 2;
        return query(ql, qr, 2 * node + 1, l, mid) +
               query(ql, qr, 2 * node + 2, mid + 1, r);
    }

    public static long[] processOperations(int[] nums, String[] operations) {
        n = nums.length;
        tree = new long[4 * n];
        lazy = new long[4 * n];
        hasLazy = new boolean[4 * n];
        build(nums, 0, 0, n - 1);
        List<Long> res = new ArrayList<>();
        for (String op : operations) {
            String[] parts = op.split(" ");
            if (parts[0].equals("ASSIGN")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                int val = Integer.parseInt(parts[3]);
                assign(l, r, val, 0, 0, n - 1);
            } else if (parts[0].equals("QUERY")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                res.add(query(l, r, 0, 0, n - 1));
            }
        }
        long[] result = new long[res.size()];
        for (int i = 0; i < res.size(); i++) result[i] = res.get(i);
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int sz = sc.nextInt();
            int[] nums = new int[sz];
            for (int i = 0; i < sz; i++) nums[i] = sc.nextInt();
            int q = sc.nextInt();
            sc.nextLine();
            String[] ops = new String[q];
            for (int i = 0; i < q; i++) ops[i] = sc.nextLine();
            long[] res = processOperations(nums, ops);
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
#include <stdbool.h>

long long* tree;
long long* lazy;
bool* hasLazy;
int n;

void build(int* arr, int node, int l, int r) {
    if (l == r) { tree[node] = arr[l]; return; }
    int mid = l + (r - l) / 2;
    build(arr, 2 * node + 1, l, mid);
    build(arr, 2 * node + 2, mid + 1, r);
    tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
}

void push(int node, int l, int r) {
    if (hasLazy[node]) {
        tree[node] = lazy[node] * (r - l + 1);
        if (l != r) {
            lazy[2 * node + 1] = lazy[node];
            lazy[2 * node + 2] = lazy[node];
            hasLazy[2 * node + 1] = true;
            hasLazy[2 * node + 2] = true;
        }
        hasLazy[node] = false;
    }
}

void assign(int ql, int qr, int val, int node, int l, int r) {
    push(node, l, r);
    if (ql > r || qr < l) return;
    if (ql <= l && r <= qr) {
        lazy[node] = val;
        hasLazy[node] = true;
        push(node, l, r);
        return;
    }
    int mid = l + (r - l) / 2;
    assign(ql, qr, val, 2 * node + 1, l, mid);
    assign(ql, qr, val, 2 * node + 2, mid + 1, r);
    tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
}

long long query(int ql, int qr, int node, int l, int r) {
    push(node, l, r);
    if (ql > r || qr < l) return 0;
    if (ql <= l && r <= qr) return tree[node];
    int mid = l + (r - l) / 2;
    return query(ql, qr, 2 * node + 1, l, mid) +
           query(ql, qr, 2 * node + 2, mid + 1, r);
}

long long* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {
    n = numsSize;
    tree = (long long*)calloc(4 * n, sizeof(long long));
    lazy = (long long*)calloc(4 * n, sizeof(long long));
    hasLazy = (bool*)calloc(4 * n, sizeof(bool));
    build(nums, 0, 0, n - 1);
    long long* res = (long long*)malloc(opsSize * sizeof(long long));
    int cnt = 0;
    for (int i = 0; i < opsSize; i++) {
        char op[10];
        int a, b, c;
        if (sscanf(operations[i], "%s %d %d %d", op, &a, &b, &c) >= 3) {
            if (strcmp(op, "ASSIGN") == 0) assign(a, b, c, 0, 0, n - 1);
            else if (strcmp(op, "QUERY") == 0) res[cnt++] = query(a, b, 0, 0, n - 1);
        }
    }
    *returnSize = cnt;
    free(tree); free(lazy); free(hasLazy);
    return res;
}

int main() {
    int sz;
    if (scanf("%d", &sz) != 1) return 0;
    int* nums = (int*)malloc(sz * sizeof(int));
    for (int i = 0; i < sz; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int q;
    if (scanf("%d", &q) != 1) return 0;
    getchar();
    char** ops = (char**)malloc(q * sizeof(char*));
    for (int i = 0; i < q; i++) {
        ops[i] = (char*)malloc(100 * sizeof(char));
        if (fgets(ops[i], 100, stdin) == NULL) return 0;
        ops[i][strcspn(ops[i], "\\n")] = 0;
    }
    int returnSize;
    long long* res = processOperations(nums, sz, ops, q, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        if (i > 0) printf(" ");
        printf("%lld", res[i]);
    }
    printf("\\n");
    free(nums);
    for (int i = 0; i < q; i++) free(ops[i]);
    free(ops);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <sstream>

using namespace std;

class LazySegTree {
    vector<long long> tree, lazy;
    vector<bool> hasLazy;
    int n;
    void build(vector<int>& arr, int node, int l, int r) {
        if (l == r) { tree[node] = arr[l]; return; }
        int mid = l + (r - l) / 2;
        build(arr, 2 * node + 1, l, mid);
        build(arr, 2 * node + 2, mid + 1, r);
        tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
    }
    void push(int node, int l, int r) {
        if (hasLazy[node]) {
            tree[node] = lazy[node] * (r - l + 1);
            if (l != r) {
                lazy[2 * node + 1] = lazy[node];
                lazy[2 * node + 2] = lazy[node];
                hasLazy[2 * node + 1] = true;
                hasLazy[2 * node + 2] = true;
            }
            hasLazy[node] = false;
        }
    }
public:
    LazySegTree(vector<int>& arr) {
        n = arr.size();
        tree.assign(4 * n, 0);
        lazy.assign(4 * n, 0);
        hasLazy.assign(4 * n, false);
        build(arr, 0, 0, n - 1);
    }
    void rangeAssign(int ql, int qr, int val, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return;
        if (ql <= l && r <= qr) {
            lazy[node] = val;
            hasLazy[node] = true;
            push(node, l, r);
            return;
        }
        int mid = l + (r - l) / 2;
        rangeAssign(ql, qr, val, 2 * node + 1, l, mid);
        rangeAssign(ql, qr, val, 2 * node + 2, mid + 1, r);
        tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
    }
    long long rangeSum(int ql, int qr, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return 0;
        if (ql <= l && r <= qr) return tree[node];
        int mid = l + (r - l) / 2;
        return rangeSum(ql, qr, 2 * node + 1, l, mid) +
               rangeSum(ql, qr, 2 * node + 2, mid + 1, r);
    }
    void assign(int l, int r, int val) { rangeAssign(l, r, val, 0, 0, n - 1); }
    long long sum(int l, int r) { return rangeSum(l, r, 0, 0, n - 1); }
};

vector<long long> processOperations(vector<int>& nums, vector<string>& operations) {
    LazySegTree seg(nums);
    vector<long long> res;
    for (string& op : operations) {
        stringstream ss(op);
        string cmd;
        ss >> cmd;
        if (cmd == "ASSIGN") {
            int l, r, val;
            ss >> l >> r >> val;
            seg.assign(l, r, val);
        } else if (cmd == "QUERY") {
            int l, r;
            ss >> l >> r;
            res.push_back(seg.sum(l, r));
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
        int q;
        cin >> q;
        cin.ignore();
        vector<string> ops(q);
        for (int i = 0; i < q; i++) getline(cin, ops[i]);
        vector<long long> res = processOperations(nums, ops);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'rurq-h3': {
    python: `class LazySegTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self.lazy = [0] * (4 * self.n)
        self._build(arr, 0, 0, self.n - 1)
    def _build(self, arr, node, l, r):
        if l == r:
            self.tree[node] = arr[l]
            return
        mid = (l + r) // 2
        self._build(arr, 2*node+1, l, mid)
        self._build(arr, 2*node+2, mid+1, r)
        self.tree[node] = max(self.tree[2*node+1], self.tree[2*node+2])
    def _push(self, node, l, r):
        if self.lazy[node] != 0:
            self.tree[node] += self.lazy[node]
            if l != r:
                self.lazy[2*node+1] += self.lazy[node]
                self.lazy[2*node+2] += self.lazy[node]
            self.lazy[node] = 0
    def update(self, ql, qr, val, node, l, r):
        self._push(node, l, r)
        if ql > r or qr < l: return
        if ql <= l and r <= qr:
            self.lazy[node] += val
            self._push(node, l, r)
            return
        mid = (l + r) // 2
        self.update(ql, qr, val, 2*node+1, l, mid)
        self.update(ql, qr, val, 2*node+2, mid+1, r)
        self.tree[node] = max(self.tree[2*node+1], self.tree[2*node+2])
    def query(self, ql, qr, node, l, r):
        self._push(node, l, r)
        if ql > r or qr < l: return float('-inf')
        if ql <= l and r <= qr: return self.tree[node]
        mid = (l + r) // 2
        left = self.query(ql, qr, 2*node+1, l, mid)
        right = self.query(ql, qr, 2*node+2, mid+1, r)
        return max(left, right)

def process_operations(nums, operations):
    seg = LazySegTree(nums)
    results = []
    for op in operations:
        parts = op.split()
        if parts[0] == 'ADD':
            l, r, val = int(parts[1]), int(parts[2]), int(parts[3])
            seg.update(l, r, val, 0, 0, seg.n - 1)
        elif parts[0] == 'QUERY':
            l, r = int(parts[1]), int(parts[2])
            results.append(str(seg.query(l, r, 0, 0, seg.n - 1)))
    return results

n = int(input())
nums = list(map(int, input().split()))
q = int(input())
ops = [input().strip() for _ in range(q)]
results = process_operations(nums, ops)
print(' '.join(results))`,
    java: `import java.util.*;

public class Solution {
    static long[] tree, lazy;
    static int n;

    public static void build(int[] arr, int node, int l, int r) {
        if (l == r) { tree[node] = arr[l]; return; }
        int mid = l + (r - l) / 2;
        build(arr, 2 * node + 1, l, mid);
        build(arr, 2 * node + 2, mid + 1, r);
        tree[node] = Math.max(tree[2 * node + 1], tree[2 * node + 2]);
    }

    public static void push(int node, int l, int r) {
        if (lazy[node] != 0) {
            tree[node] += lazy[node];
            if (l != r) {
                lazy[2 * node + 1] += lazy[node];
                lazy[2 * node + 2] += lazy[node];
            }
            lazy[node] = 0;
        }
    }

    public static void update(int ql, int qr, int val, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return;
        if (ql <= l && r <= qr) {
            lazy[node] += val;
            push(node, l, r);
            return;
        }
        int mid = l + (r - l) / 2;
        update(ql, qr, val, 2 * node + 1, l, mid);
        update(ql, qr, val, 2 * node + 2, mid + 1, r);
        tree[node] = Math.max(tree[2 * node + 1], tree[2 * node + 2]);
    }

    public static long query(int ql, int qr, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return Long.MIN_VALUE;
        if (ql <= l && r <= qr) return tree[node];
        int mid = l + (r - l) / 2;
        return Math.max(query(ql, qr, 2 * node + 1, l, mid),
                        query(ql, qr, 2 * node + 2, mid + 1, r));
    }

    public static long[] processOperations(int[] nums, String[] operations) {
        n = nums.length;
        tree = new long[4 * n];
        lazy = new long[4 * n];
        build(nums, 0, 0, n - 1);
        List<Long> res = new ArrayList<>();
        for (String op : operations) {
            String[] parts = op.split(" ");
            if (parts[0].equals("ADD")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                int val = Integer.parseInt(parts[3]);
                update(l, r, val, 0, 0, n - 1);
            } else if (parts[0].equals("QUERY")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                res.add(query(l, r, 0, 0, n - 1));
            }
        }
        long[] result = new long[res.size()];
        for (int i = 0; i < res.size(); i++) result[i] = res.get(i);
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int sz = sc.nextInt();
            int[] nums = new int[sz];
            for (int i = 0; i < sz; i++) nums[i] = sc.nextInt();
            int q = sc.nextInt();
            sc.nextLine();
            String[] ops = new String[q];
            for (int i = 0; i < q; i++) ops[i] = sc.nextLine();
            long[] res = processOperations(nums, ops);
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
#include <limits.h>

long long* tree;
long long* lazy;
int n;

void build(int* arr, int node, int l, int r) {
    if (l == r) { tree[node] = arr[l]; return; }
    int mid = l + (r - l) / 2;
    build(arr, 2 * node + 1, l, mid);
    build(arr, 2 * node + 2, mid + 1, r);
    tree[node] = tree[2 * node + 1] > tree[2 * node + 2] ? tree[2 * node + 1] : tree[2 * node + 2];
}

void push(int node, int l, int r) {
    if (lazy[node] != 0) {
        tree[node] += lazy[node];
        if (l != r) {
            lazy[2 * node + 1] += lazy[node];
            lazy[2 * node + 2] += lazy[node];
        }
        lazy[node] = 0;
    }
}

void update(int ql, int qr, int val, int node, int l, int r) {
    push(node, l, r);
    if (ql > r || qr < l) return;
    if (ql <= l && r <= qr) {
        lazy[node] += val;
        push(node, l, r);
        return;
    }
    int mid = l + (r - l) / 2;
    update(ql, qr, val, 2 * node + 1, l, mid);
    update(ql, qr, val, 2 * node + 2, mid + 1, r);
    tree[node] = tree[2 * node + 1] > tree[2 * node + 2] ? tree[2 * node + 1] : tree[2 * node + 2];
}

long long query(int ql, int qr, int node, int l, int r) {
    push(node, l, r);
    if (ql > r || qr < l) return LLONG_MIN;
    if (ql <= l && r <= qr) return tree[node];
    int mid = l + (r - l) / 2;
    long long left = query(ql, qr, 2 * node + 1, l, mid);
    long long right = query(ql, qr, 2 * node + 2, mid + 1, r);
    return left > right ? left : right;
}

long long* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {
    n = numsSize;
    tree = (long long*)calloc(4 * n, sizeof(long long));
    lazy = (long long*)calloc(4 * n, sizeof(long long));
    build(nums, 0, 0, n - 1);
    long long* res = (long long*)malloc(opsSize * sizeof(long long));
    int cnt = 0;
    for (int i = 0; i < opsSize; i++) {
        char op[10];
        int a, b, c;
        if (sscanf(operations[i], "%s %d %d %d", op, &a, &b, &c) >= 3) {
            if (strcmp(op, "ADD") == 0) update(a, b, c, 0, 0, n - 1);
            else if (strcmp(op, "QUERY") == 0) res[cnt++] = query(a, b, 0, 0, n - 1);
        }
    }
    *returnSize = cnt;
    free(tree); free(lazy);
    return res;
}

int main() {
    int sz;
    if (scanf("%d", &sz) != 1) return 0;
    int* nums = (int*)malloc(sz * sizeof(int));
    for (int i = 0; i < sz; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int q;
    if (scanf("%d", &q) != 1) return 0;
    getchar();
    char** ops = (char**)malloc(q * sizeof(char*));
    for (int i = 0; i < q; i++) {
        ops[i] = (char*)malloc(100 * sizeof(char));
        if (fgets(ops[i], 100, stdin) == NULL) return 0;
        ops[i][strcspn(ops[i], "\\n")] = 0;
    }
    int returnSize;
    long long* res = processOperations(nums, sz, ops, q, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        if (i > 0) printf(" ");
        printf("%lld", res[i]);
    }
    printf("\\n");
    free(nums);
    for (int i = 0; i < q; i++) free(ops[i]);
    free(ops);
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
    vector<long long> tree, lazy;
    int n;
    void build(vector<int>& arr, int node, int l, int r) {
        if (l == r) { tree[node] = arr[l]; return; }
        int mid = l + (r - l) / 2;
        build(arr, 2 * node + 1, l, mid);
        build(arr, 2 * node + 2, mid + 1, r);
        tree[node] = max(tree[2 * node + 1], tree[2 * node + 2]);
    }
    void push(int node, int l, int r) {
        if (lazy[node] != 0) {
            tree[node] += lazy[node];
            if (l != r) {
                lazy[2 * node + 1] += lazy[node];
                lazy[2 * node + 2] += lazy[node];
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
    void rangeAdd(int ql, int qr, int val, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return;
        if (ql <= l && r <= qr) {
            lazy[node] += val;
            push(node, l, r);
            return;
        }
        int mid = l + (r - l) / 2;
        rangeAdd(ql, qr, val, 2 * node + 1, l, mid);
        rangeAdd(ql, qr, val, 2 * node + 2, mid + 1, r);
        tree[node] = max(tree[2 * node + 1], tree[2 * node + 2]);
    }
    long long rangeMax(int ql, int qr, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return LLONG_MIN;
        if (ql <= l && r <= qr) return tree[node];
        int mid = l + (r - l) / 2;
        return max(rangeMax(ql, qr, 2 * node + 1, l, mid),
                   rangeMax(ql, qr, 2 * node + 2, mid + 1, r));
    }
    void add(int l, int r, int val) { rangeAdd(l, r, val, 0, 0, n - 1); }
    long long maxVal(int l, int r) { return rangeMax(l, r, 0, 0, n - 1); }
};

vector<long long> processOperations(vector<int>& nums, vector<string>& operations) {
    LazySegTree seg(nums);
    vector<long long> res;
    for (string& op : operations) {
        stringstream ss(op);
        string cmd;
        ss >> cmd;
        if (cmd == "ADD") {
            int l, r, val;
            ss >> l >> r >> val;
            seg.add(l, r, val);
        } else if (cmd == "QUERY") {
            int l, r;
            ss >> l >> r;
            res.push_back(seg.maxVal(l, r));
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
        int q;
        cin >> q;
        cin.ignore();
        vector<string> ops(q);
        for (int i = 0; i < q; i++) getline(cin, ops[i]);
        vector<long long> res = processOperations(nums, ops);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'rurq-h4': {
    python: `def process_operations(grid, operations):
    rows, cols = len(grid), len(grid[0])
    diff = [[0] * (cols + 2) for _ in range(rows + 2)]
    results = []
    for op in operations:
        parts = op.split()
        if parts[0] == 'ADD':
            r1, c1, r2, c2, val = map(int, parts[1:])
            diff[r1][c1] += val
            diff[r1][c2 + 1] -= val
            diff[r2 + 1][c1] -= val
            diff[r2 + 1][c2 + 1] += val
        elif parts[0] == 'QUERY':
            r1, c1, r2, c2 = map(int, parts[1:])
            # Apply diff to grid
            cur_row = [0] * (cols + 1)
            for i in range(rows):
                row_sum = 0
                for j in range(cols):
                    row_sum += diff[i][j]
                    cur_row[j] += row_sum
                    grid[i][j] += cur_row[j]
            diff = [[0] * (cols + 2) for _ in range(rows + 2)]
            total = sum(grid[i][j] for i in range(r1, r2 + 1) for j in range(c1, c2 + 1))
            results.append(str(total))
    return results

rows, cols = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(rows)]
q = int(input())
ops = [input().strip() for _ in range(q)]
results = process_operations(grid, ops)
print(' '.join(results))`,
    java: `import java.util.*;

public class Solution {
    public static long[] processOperations(int[][] grid, String[] operations) {
        int rows = grid.length, cols = grid[0].length;
        long[][] diff = new long[rows + 2][cols + 2];
        List<Long> res = new ArrayList<>();
        for (String op : operations) {
            String[] parts = op.split(" ");
            if (parts[0].equals("ADD")) {
                int r1 = Integer.parseInt(parts[1]), c1 = Integer.parseInt(parts[2]);
                int r2 = Integer.parseInt(parts[3]), c2 = Integer.parseInt(parts[4]);
                int val = Integer.parseInt(parts[5]);
                diff[r1][c1] += val;
                diff[r1][c2 + 1] -= val;
                diff[r2 + 1][c1] -= val;
                diff[r2 + 1][c2 + 1] += val;
            } else if (parts[0].equals("QUERY")) {
                int r1 = Integer.parseInt(parts[1]), c1 = Integer.parseInt(parts[2]);
                int r2 = Integer.parseInt(parts[3]), c2 = Integer.parseInt(parts[4]);
                long[] curRow = new long[cols + 1];
                for (int i = 0; i < rows; i++) {
                    long rowSum = 0;
                    for (int j = 0; j < cols; j++) {
                        rowSum += diff[i][j];
                        curRow[j] += rowSum;
                        grid[i][j] += curRow[j];
                    }
                }
                diff = new long[rows + 2][cols + 2];
                long total = 0;
                for (int i = r1; i <= r2; i++) {
                    for (int j = c1; j <= c2; j++) {
                        total += grid[i][j];
                    }
                }
                res.add(total);
            }
        }
        long[] result = new long[res.size()];
        for (int i = 0; i < res.size(); i++) result[i] = res.get(i);
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int rows = sc.nextInt(), cols = sc.nextInt();
            int[][] grid = new int[rows][cols];
            for (int i = 0; i < rows; i++) {
                for (int j = 0; j < cols; j++) grid[i][j] = sc.nextInt();
            }
            int q = sc.nextInt();
            sc.nextLine();
            String[] ops = new String[q];
            for (int i = 0; i < q; i++) ops[i] = sc.nextLine();
            long[] res = processOperations(grid, ops);
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

long long* processOperations(int** grid, int rows, int cols, char** operations, int opsSize, int* returnSize) {
    long long** diff = (long long**)calloc(rows + 2, sizeof(long long*));
    for (int i = 0; i <= rows + 1; i++) diff[i] = (long long*)calloc(cols + 2, sizeof(long long));
    long long* res = (long long*)malloc(opsSize * sizeof(long long));
    int cnt = 0;
    for (int op = 0; op < opsSize; op++) {
        char cmd[10];
        int r1, c1, r2, c2, val;
        if (sscanf(operations[op], "%s %d %d %d %d %d", cmd, &r1, &c1, &r2, &c2, &val) >= 6) {
            if (strcmp(cmd, "ADD") == 0) {
                diff[r1][c1] += val;
                diff[r1][c2 + 1] -= val;
                diff[r2 + 1][c1] -= val;
                diff[r2 + 1][c2 + 1] += val;
            }
        } else if (sscanf(operations[op], "%s %d %d %d %d", cmd, &r1, &c1, &r2, &c2) >= 5) {
            if (strcmp(cmd, "QUERY") == 0) {
                long long* curRow = (long long*)calloc(cols + 1, sizeof(long long));
                for (int i = 0; i < rows; i++) {
                    long long rowSum = 0;
                    for (int j = 0; j < cols; j++) {
                        rowSum += diff[i][j];
                        curRow[j] += rowSum;
                        grid[i][j] += curRow[j];
                    }
                }
                free(curRow);
                for (int i = 0; i <= rows + 1; i++) memset(diff[i], 0, (cols + 2) * sizeof(long long));
                long long total = 0;
                for (int i = r1; i <= r2; i++) {
                    for (int j = c1; j <= c2; j++) total += grid[i][j];
                }
                res[cnt++] = total;
            }
        }
    }
    *returnSize = cnt;
    for (int i = 0; i <= rows + 1; i++) free(diff[i]);
    free(diff);
    return res;
}

int main() {
    int rows, cols;
    if (scanf("%d %d", &rows, &cols) != 2) return 0;
    int** grid = (int**)malloc(rows * sizeof(int*));
    for (int i = 0; i < rows; i++) {
        grid[i] = (int*)malloc(cols * sizeof(int));
        for (int j = 0; j < cols; j++) {
            if (scanf("%d", &grid[i][j]) != 1) return 0;
        }
    }
    int q;
    if (scanf("%d", &q) != 1) return 0;
    getchar();
    char** ops = (char**)malloc(q * sizeof(char*));
    for (int i = 0; i < q; i++) {
        ops[i] = (char*)malloc(100 * sizeof(char));
        if (fgets(ops[i], 100, stdin) == NULL) return 0;
        ops[i][strcspn(ops[i], "\\n")] = 0;
    }
    int returnSize;
    long long* res = processOperations(grid, rows, cols, ops, q, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        if (i > 0) printf(" ");
        printf("%lld", res[i]);
    }
    printf("\\n");
    for (int i = 0; i < rows; i++) free(grid[i]);
    free(grid);
    for (int i = 0; i < q; i++) free(ops[i]);
    free(ops);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <sstream>

using namespace std;

vector<long long> processOperations(vector<vector<int>>& grid, vector<string>& operations) {
    int rows = grid.size(), cols = grid[0].size();
    vector<vector<long long>> diff(rows + 2, vector<long long>(cols + 2, 0));
    vector<long long> res;
    for (string& op : operations) {
        stringstream ss(op);
        string cmd;
        ss >> cmd;
        if (cmd == "ADD") {
            int r1, c1, r2, c2, val;
            ss >> r1 >> c1 >> r2 >> c2 >> val;
            diff[r1][c1] += val;
            diff[r1][c2 + 1] -= val;
            diff[r2 + 1][c1] -= val;
            diff[r2 + 1][c2 + 1] += val;
        } else if (cmd == "QUERY") {
            int r1, c1, r2, c2;
            ss >> r1 >> c1 >> r2 >> c2;
            vector<long long> curRow(cols + 1, 0);
            for (int i = 0; i < rows; i++) {
                long long rowSum = 0;
                for (int j = 0; j < cols; j++) {
                    rowSum += diff[i][j];
                    curRow[j] += rowSum;
                    grid[i][j] += curRow[j];
                }
            }
            diff.assign(rows + 2, vector<long long>(cols + 2, 0));
            long long total = 0;
            for (int i = r1; i <= r2; i++) {
                for (int j = c1; j <= c2; j++) total += grid[i][j];
            }
            res.push_back(total);
        }
    }
    return res;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int rows, cols;
    if (cin >> rows >> cols) {
        vector<vector<int>> grid(rows, vector<int>(cols));
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) cin >> grid[i][j];
        }
        int q;
        cin >> q;
        cin.ignore();
        vector<string> ops(q);
        for (int i = 0; i < q; i++) getline(cin, ops[i]);
        vector<long long> res = processOperations(grid, ops);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'rurq-h5': {
    python: `def process_operations(operations):
    # Coordinate compress all indices
    points = set()
    indices = []
    for op in operations:
        parts = op.split()
        l, r = int(parts[1]), int(parts[2])
        points.add(l)
        points.add(r)
        points.add(r + 1)
        indices.append((l, r, int(parts[3]) if len(parts) > 3 else None))
    sorted_pts = sorted(points)
    coord = {v: i for i, v in enumerate(sorted_pts)}
    m = len(sorted_pts)
    
    # Build segment tree on compressed coordinates
    n = m - 1  # number of segments
    if n <= 0:
        n = 1
    tree = [0] * (4 * n)
    lazy = [0] * (4 * n)
    
    def push(node, l, r):
        if lazy[node] != 0:
            tree[node] += lazy[node] * (sorted_pts[r + 1] - sorted_pts[l])
            if l != r:
                lazy[2*node+1] += lazy[node]
                lazy[2*node+2] += lazy[node]
            lazy[node] = 0
    
    def update(ql, qr, val, node, l, r):
        push(node, l, r)
        if ql > r or qr < l: return
        if ql <= l and r <= qr:
            lazy[node] += val
            push(node, l, r)
            return
        mid = (l + r) // 2
        update(ql, qr, val, 2*node+1, l, mid)
        update(ql, qr, val, 2*node+2, mid+1, r)
        tree[node] = tree[2*node+1] + tree[2*node+2]
    
    def query(ql, qr, node, l, r):
        push(node, l, r)
        if ql > r or qr < l: return 0
        if ql <= l and r <= qr: return tree[node]
        mid = (l + r) // 2
        return query(ql, qr, 2*node+1, l, mid) + query(ql, qr, 2*node+2, mid+1, r)
    
    results = []
    for op in operations:
        parts = op.split()
        l, r = int(parts[1]), int(parts[2])
        cl, cr = coord[l], coord[r]
        if parts[0] == 'ADD':
            val = int(parts[3])
            update(cl, cr - 1, val, 0, 0, n - 1)
        elif parts[0] == 'QUERY':
            res = query(cl, cr - 1, 0, 0, n - 1)
            results.append(str(res))
    return results

q = int(input())
ops = [input().strip() for _ in range(q)]
results = process_operations(ops)
print(' '.join(results))`,
    java: `import java.util.*;

public class Solution {
    static long[] tree, lazy;
    static long[] sortedPts;
    static int n;

    public static void push(int node, int l, int r) {
        if (lazy[node] != 0) {
            tree[node] += lazy[node] * (sortedPts[r + 1] - sortedPts[l]);
            if (l != r) {
                lazy[2 * node + 1] += lazy[node];
                lazy[2 * node + 2] += lazy[node];
            }
            lazy[node] = 0;
        }
    }

    public static void update(int ql, int qr, int val, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return;
        if (ql <= l && r <= qr) {
            lazy[node] += val;
            push(node, l, r);
            return;
        }
        int mid = l + (r - l) / 2;
        update(ql, qr, val, 2 * node + 1, l, mid);
        update(ql, qr, val, 2 * node + 2, mid + 1, r);
        tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
    }

    public static long query(int ql, int qr, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return 0;
        if (ql <= l && r <= qr) return tree[node];
        int mid = l + (r - l) / 2;
        return query(ql, qr, 2 * node + 1, l, mid) +
               query(ql, qr, 2 * node + 2, mid + 1, r);
    }

    public static long[] processOperations(String[] operations) {
        TreeSet<Long> ptsSet = new TreeSet<>();
        List<String[]> parsed = new ArrayList<>();
        for (String op : operations) {
            String[] parts = op.split(" ");
            long l = Long.parseLong(parts[1]);
            long r = Long.parseLong(parts[2]);
            ptsSet.add(l);
            ptsSet.add(r);
            ptsSet.add(r + 1);
            parsed.add(parts);
        }
        sortedPts = new long[ptsSet.size()];
        int idx = 0;
        Map<Long, Integer> coord = new HashMap<>();
        for (long pt : ptsSet) {
            sortedPts[idx] = pt;
            coord.put(pt, idx++);
        }
        n = sortedPts.length - 1;
        if (n <= 0) n = 1;
        tree = new long[4 * n];
        lazy = new long[4 * n];
        List<Long> res = new ArrayList<>();
        for (String[] parts : parsed) {
            long lv = Long.parseLong(parts[1]);
            long rv = Long.parseLong(parts[2]);
            int cl = coord.get(lv);
            int cr = coord.get(rv);
            if (parts[0].equals("ADD")) {
                int val = Integer.parseInt(parts[3]);
                update(cl, cr - 1, val, 0, 0, n - 1);
            } else if (parts[0].equals("QUERY")) {
                res.add(query(cl, cr - 1, 0, 0, n - 1));
            }
        }
        long[] result = new long[res.size()];
        for (int i = 0; i < res.size(); i++) result[i] = res.get(i);
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            sc.nextLine();
            String[] ops = new String[q];
            for (int i = 0; i < q; i++) ops[i] = sc.nextLine();
            long[] res = processOperations(ops);
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

long long* tree;
long long* lazy;
long long* sortedPts;
int n;

int cmpLL(const void* a, const void* b) { return *(long long*)a - *(long long*)b; }

void push(int node, int l, int r) {
    if (lazy[node] != 0) {
        tree[node] += lazy[node] * (sortedPts[r + 1] - sortedPts[l]);
        if (l != r) {
            lazy[2 * node + 1] += lazy[node];
            lazy[2 * node + 2] += lazy[node];
        }
        lazy[node] = 0;
    }
}

void update(int ql, int qr, int val, int node, int l, int r) {
    push(node, l, r);
    if (ql > r || qr < l) return;
    if (ql <= l && r <= qr) { lazy[node] += val; push(node, l, r); return; }
    int mid = l + (r - l) / 2;
    update(ql, qr, val, 2 * node + 1, l, mid);
    update(ql, qr, val, 2 * node + 2, mid + 1, r);
    tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
}

long long query(int ql, int qr, int node, int l, int r) {
    push(node, l, r);
    if (ql > r || qr < l) return 0;
    if (ql <= l && r <= qr) return tree[node];
    int mid = l + (r - l) / 2;
    return query(ql, qr, 2 * node + 1, l, mid) + query(ql, qr, 2 * node + 2, mid + 1, r);
}

long long* processOperations(char** operations, int opsSize, int* returnSize) {
    long long* pts = (long long*)malloc(opsSize * 3 * sizeof(long long));
    int ptsCnt = 0;
    for (int i = 0; i < opsSize; i++) {
        long long l, r;
        sscanf(operations[i], "%*s %lld %lld", &l, &r);
        pts[ptsCnt++] = l; pts[ptsCnt++] = r; pts[ptsCnt++] = r + 1;
    }
    qsort(pts, ptsCnt, sizeof(long long), cmpLL);
    int uniq = 0;
    for (int i = 0; i < ptsCnt; i++) {
        if (i == 0 || pts[i] != pts[i - 1]) pts[uniq++] = pts[i];
    }
    sortedPts = (long long*)malloc(uniq * sizeof(long long));
    for (int i = 0; i < uniq; i++) sortedPts[i] = pts[i];
    free(pts);
    n = uniq - 1;
    if (n <= 0) n = 1;
    tree = (long long*)calloc(4 * n, sizeof(long long));
    lazy = (long long*)calloc(4 * n, sizeof(long long));
    
    long long* res = (long long*)malloc(opsSize * sizeof(long long));
    int cnt = 0;
    for (int i = 0; i < opsSize; i++) {
        char op[10];
        long long a, b;
        int c;
        if (sscanf(operations[i], "%s %lld %lld %d", op, &a, &b, &c) >= 4) {
            if (strcmp(op, "ADD") == 0) {
                int cl = 0, cr = 0;
                while (sortedPts[cl] != a) cl++;
                while (sortedPts[cr] != b) cr++;
                update(cl, cr - 1, c, 0, 0, n - 1);
            }
        } else if (sscanf(operations[i], "%s %lld %lld", op, &a, &b) >= 3) {
            if (strcmp(op, "QUERY") == 0) {
                int cl = 0, cr = 0;
                while (sortedPts[cl] != a) cl++;
                while (sortedPts[cr] != b) cr++;
                res[cnt++] = query(cl, cr - 1, 0, 0, n - 1);
            }
        }
    }
    *returnSize = cnt;
    free(sortedPts);
    free(tree);
    free(lazy);
    return res;
}

int main() {
    int q;
    if (scanf("%d", &q) != 1) return 0;
    getchar();
    char** ops = (char**)malloc(q * sizeof(char*));
    for (int i = 0; i < q; i++) {
        ops[i] = (char*)malloc(100 * sizeof(char));
        if (fgets(ops[i], 100, stdin) == NULL) return 0;
        ops[i][strcspn(ops[i], "\\n")] = 0;
    }
    int returnSize;
    long long* res = processOperations(ops, q, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        if (i > 0) printf(" ");
        printf("%lld", res[i]);
    }
    printf("\\n");
    for (int i = 0; i < q; i++) free(ops[i]);
    free(ops);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <sstream>
#include <set>
#include <map>
#include <algorithm>

using namespace std;

class LazySegTree {
    vector<long long> tree, lazy;
    vector<long long>& pts;
    int n;
    void push(int node, int l, int r) {
        if (lazy[node] != 0) {
            tree[node] += lazy[node] * (pts[r + 1] - pts[l]);
            if (l != r) {
                lazy[2 * node + 1] += lazy[node];
                lazy[2 * node + 2] += lazy[node];
            }
            lazy[node] = 0;
        }
    }
public:
    LazySegTree(vector<long long>& points) : pts(points) {
        n = pts.size() - 1;
        if (n <= 0) n = 1;
        tree.assign(4 * n, 0);
        lazy.assign(4 * n, 0);
    }
    void rangeAdd(int ql, int qr, int val, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return;
        if (ql <= l && r <= qr) {
            lazy[node] += val;
            push(node, l, r);
            return;
        }
        int mid = l + (r - l) / 2;
        rangeAdd(ql, qr, val, 2 * node + 1, l, mid);
        rangeAdd(ql, qr, val, 2 * node + 2, mid + 1, r);
        tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
    }
    long long rangeSum(int ql, int qr, int node, int l, int r) {
        push(node, l, r);
        if (ql > r || qr < l) return 0;
        if (ql <= l && r <= qr) return tree[node];
        int mid = l + (r - l) / 2;
        return rangeSum(ql, qr, 2 * node + 1, l, mid) +
               rangeSum(ql, qr, 2 * node + 2, mid + 1, r);
    }
    void add(int l, int r, int val) { rangeAdd(l, r, val, 0, 0, n - 1); }
    long long sum(int l, int r) { return rangeSum(l, r, 0, 0, n - 1); }
};

vector<long long> processOperations(vector<string>& operations) {
    set<long long> ptsSet;
    for (string& op : operations) {
        stringstream ss(op);
        string cmd;
        ss >> cmd;
        long long l, r;
        ss >> l >> r;
        ptsSet.insert(l);
        ptsSet.insert(r);
        ptsSet.insert(r + 1);
    }
    vector<long long> sortedPts(ptsSet.begin(), ptsSet.end());
    map<long long, int> coord;
    for (int i = 0; i < (int)sortedPts.size(); i++) coord[sortedPts[i]] = i;
    
    LazySegTree seg(sortedPts);
    vector<long long> res;
    for (string& op : operations) {
        stringstream ss(op);
        string cmd;
        ss >> cmd;
        long long l, r;
        ss >> l >> r;
        int cl = coord[l], cr = coord[r];
        if (cmd == "ADD") {
            int val;
            ss >> val;
            seg.add(cl, cr - 1, val);
        } else if (cmd == "QUERY") {
            res.push_back(seg.sum(cl, cr - 1));
        }
    }
    return res;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int q;
    if (cin >> q) {
        cin.ignore();
        vector<string> ops(q);
        for (int i = 0; i < q; i++) getline(cin, ops[i]);
        vector<long long> res = processOperations(ops);
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