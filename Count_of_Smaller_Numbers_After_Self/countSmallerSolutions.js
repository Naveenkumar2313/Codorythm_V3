export const countSmallerSolutions = {
  // --- EASY ---
  'csnas-e1': {
    python: `def count_smaller(nums):
    return [0]

n = int(input())
nums = list(map(int, input().split()))
res = count_smaller(nums)
print(" ".join(str(v) for v in res))`,
    java: `import java.util.*;

public class Solution {
    public static List<Integer> countSmaller(int[] nums) {
        List<Integer> result = new ArrayList<>();
        result.add(0);
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
            List<Integer> res = countSmaller(nums);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.size(); i++) {
                if (i > 0) sb.append(" ");
                sb.append(res.get(i));
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int* countSmaller(int* nums, int numsSize, int* returnSize) {
    *returnSize = 1;
    int* result = (int*)malloc(sizeof(int));
    result[0] = 0;
    return result;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int retSize;
    int* res = countSmaller(nums, n, &retSize);
    for (int i = 0; i < retSize; i++) {
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

vector<int> countSmaller(vector<int>& nums) {
    return {0};
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
        vector<int> res = countSmaller(nums);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'csnas-e2': {
    python: `def count_smaller(nums):
    return [0] * len(nums)

n = int(input())
nums = list(map(int, input().split()))
res = count_smaller(nums)
print(" ".join(str(v) for v in res))`,
    java: `import java.util.*;

public class Solution {
    public static List<Integer> countSmaller(int[] nums) {
        List<Integer> result = new ArrayList<>();
        for (int i = 0; i < nums.length; i++) {
            result.add(0);
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
            List<Integer> res = countSmaller(nums);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.size(); i++) {
                if (i > 0) sb.append(" ");
                sb.append(res.get(i));
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int* countSmaller(int* nums, int numsSize, int* returnSize) {
    *returnSize = numsSize;
    int* result = (int*)calloc(numsSize, sizeof(int));
    return result;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int retSize;
    int* res = countSmaller(nums, n, &retSize);
    for (int i = 0; i < retSize; i++) {
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

vector<int> countSmaller(vector<int>& nums) {
    return vector<int>(nums.size(), 0);
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
        vector<int> res = countSmaller(nums);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'csnas-e3': {
    python: `def count_smaller(nums):
    n = len(nums)
    result = [0] * n
    for i in range(n):
        result[i] = n - i - 1
    return result

n = int(input())
nums = list(map(int, input().split()))
res = count_smaller(nums)
print(" ".join(str(v) for v in res))`,
    java: `import java.util.*;

public class Solution {
    public static List<Integer> countSmaller(int[] nums) {
        int n = nums.length;
        List<Integer> result = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            result.add(n - i - 1);
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
            List<Integer> res = countSmaller(nums);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.size(); i++) {
                if (i > 0) sb.append(" ");
                sb.append(res.get(i));
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int* countSmaller(int* nums, int numsSize, int* returnSize) {
    *returnSize = numsSize;
    int* result = (int*)malloc(numsSize * sizeof(int));
    for (int i = 0; i < numsSize; i++) {
        result[i] = numsSize - i - 1;
    }
    return result;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int retSize;
    int* res = countSmaller(nums, n, &retSize);
    for (int i = 0; i < retSize; i++) {
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

vector<int> countSmaller(vector<int>& nums) {
    int n = nums.size();
    vector<int> result(n);
    for (int i = 0; i < n; i++) {
        result[i] = n - i - 1;
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
        vector<int> res = countSmaller(nums);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'csnas-e4': {
    python: `def count_smaller(nums):
    n = len(nums)
    result = [0] * n
    for i in range(n):
        count = 0
        for j in range(i + 1, n):
            if nums[j] < nums[i]:
                count += 1
        result[i] = count
    return result

n = int(input())
nums = list(map(int, input().split()))
res = count_smaller(nums)
print(" ".join(str(v) for v in res))`,
    java: `import java.util.*;

public class Solution {
    public static List<Integer> countSmaller(int[] nums) {
        int n = nums.length;
        List<Integer> result = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            int count = 0;
            for (int j = i + 1; j < n; j++) {
                if (nums[j] < nums[i]) count++;
            }
            result.add(count);
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
            List<Integer> res = countSmaller(nums);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.size(); i++) {
                if (i > 0) sb.append(" ");
                sb.append(res.get(i));
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int* countSmaller(int* nums, int numsSize, int* returnSize) {
    *returnSize = numsSize;
    int* result = (int*)malloc(numsSize * sizeof(int));
    for (int i = 0; i < numsSize; i++) {
        int count = 0;
        for (int j = i + 1; j < numsSize; j++) {
            if (nums[j] < nums[i]) count++;
        }
        result[i] = count;
    }
    return result;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int retSize;
    int* res = countSmaller(nums, n, &retSize);
    for (int i = 0; i < retSize; i++) {
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

vector<int> countSmaller(vector<int>& nums) {
    int n = nums.size();
    vector<int> result(n);
    for (int i = 0; i < n; i++) {
        int count = 0;
        for (int j = i + 1; j < n; j++) {
            if (nums[j] < nums[i]) count++;
        }
        result[i] = count;
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
        vector<int> res = countSmaller(nums);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'csnas-e5': {
    python: `def count_smaller(nums):
    n = len(nums)
    result = [0] * n
    for i in range(n):
        count = 0
        for j in range(i + 1, n):
            if nums[j] < nums[i]:
                count += 1
        result[i] = count
    return result

n = int(input())
nums = list(map(int, input().split()))
res = count_smaller(nums)
print(" ".join(str(v) for v in res))`,
    java: `import java.util.*;

public class Solution {
    public static List<Integer> countSmaller(int[] nums) {
        int n = nums.length;
        List<Integer> result = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            int count = 0;
            for (int j = i + 1; j < n; j++) {
                if (nums[j] < nums[i]) count++;
            }
            result.add(count);
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
            List<Integer> res = countSmaller(nums);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.size(); i++) {
                if (i > 0) sb.append(" ");
                sb.append(res.get(i));
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int* countSmaller(int* nums, int numsSize, int* returnSize) {
    *returnSize = numsSize;
    int* result = (int*)malloc(numsSize * sizeof(int));
    for (int i = 0; i < numsSize; i++) {
        int count = 0;
        for (int j = i + 1; j < numsSize; j++) {
            if (nums[j] < nums[i]) count++;
        }
        result[i] = count;
    }
    return result;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int retSize;
    int* res = countSmaller(nums, n, &retSize);
    for (int i = 0; i < retSize; i++) {
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

vector<int> countSmaller(vector<int>& nums) {
    int n = nums.size();
    vector<int> result(n);
    for (int i = 0; i < n; i++) {
        int count = 0;
        for (int j = i + 1; j < n; j++) {
            if (nums[j] < nums[i]) count++;
        }
        result[i] = count;
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
        vector<int> res = countSmaller(nums);
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
  'csnas-m1': {
    python: `def count_smaller(nums):
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
    
    result = []
    for num in reversed(nums):
        k = compress[num]
        result.append(prefix(k - 1))
        update(k)
    return result[::-1]

n = int(input())
nums = list(map(int, input().split()))
res = count_smaller(nums)
print(" ".join(str(v) for v in res))`,
    java: `import java.util.*;

public class Solution {
    static int[] bit;
    static int m;

    static void update(int i) {
        for (; i <= m; i += i & -i)
            bit[i]++;
    }

    static int prefix(int i) {
        int sum = 0;
        for (; i > 0; i -= i & -i)
            sum += bit[i];
        return sum;
    }

    public static List<Integer> countSmaller(int[] nums) {
        int n = nums.length;
        int[] sorted = nums.clone();
        Arrays.sort(sorted);
        Map<Integer, Integer> compress = new HashMap<>();
        int idx = 1;
        for (int v : sorted) {
            if (!compress.containsKey(v)) {
                compress.put(v, idx++);
            }
        }
        m = compress.size();
        bit = new int[m + 1];
        Integer[] result = new Integer[n];
        for (int i = n - 1; i >= 0; i--) {
            int k = compress.get(nums[i]);
            result[i] = prefix(k - 1);
            update(k);
        }
        return Arrays.asList(result);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            List<Integer> res = countSmaller(nums);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.size(); i++) {
                if (i > 0) sb.append(" ");
                sb.append(res.get(i));
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXN 100005

int bit[MAXN], m;

void update(int i) {
    for (; i <= m; i += i & (-i))
        bit[i]++;
}

int prefix(int i) {
    int s = 0;
    for (; i > 0; i -= i & (-i))
        s += bit[i];
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

int* countSmaller(int* nums, int numsSize, int* returnSize) {
    *returnSize = numsSize;
    int* result = (int*)malloc(numsSize * sizeof(int));
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
    for (int i = numsSize - 1; i >= 0; i--) {
        int k = compress(nums[i], unique, m);
        result[i] = prefix(k - 1);
        update(k);
    }
    free(sorted);
    free(unique);
    return result;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int retSize;
    int* res = countSmaller(nums, n, &retSize);
    for (int i = 0; i < retSize; i++) {
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

vector<int> countSmaller(vector<int>& nums) {
    int n = nums.size();
    vector<int> sorted_nums = nums;
    sort(sorted_nums.begin(), sorted_nums.end());
    sorted_nums.erase(unique(sorted_nums.begin(), sorted_nums.end()), sorted_nums.end());
    unordered_map<int, int> compress;
    for (int i = 0; i < (int)sorted_nums.size(); i++)
        compress[sorted_nums[i]] = i + 1;
    BIT bit(sorted_nums.size());
    vector<int> result(n);
    for (int i = n - 1; i >= 0; i--) {
        int k = compress[nums[i]];
        result[i] = bit.prefix(k - 1);
        bit.update(k);
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
        vector<int> res = countSmaller(nums);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'csnas-m2': {
    python: `import bisect

def count_smaller(nums):
    result = []
    sorted_list = []
    for num in reversed(nums):
        pos = bisect.bisect_left(sorted_list, num)
        result.append(pos)
        bisect.insort(sorted_list, num)
    return result[::-1]

n = int(input())
nums = list(map(int, input().split()))
res = count_smaller(nums)
print(" ".join(str(v) for v in res))`,
    java: `import java.util.*;

public class Solution {
    public static List<Integer> countSmaller(int[] nums) {
        int n = nums.length;
        List<Integer> result = new ArrayList<>();
        List<Integer> sorted = new ArrayList<>();
        for (int i = n - 1; i >= 0; i--) {
            int pos = Collections.binarySearch(sorted, nums[i]);
            if (pos < 0) pos = -(pos + 1);
            result.add(pos);
            sorted.add(pos, nums[i]);
        }
        Collections.reverse(result);
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
            List<Integer> res = countSmaller(nums);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.size(); i++) {
                if (i > 0) sb.append(" ");
                sb.append(res.get(i));
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int* countSmaller(int* nums, int numsSize, int* returnSize) {
    *returnSize = numsSize;
    int* result = (int*)malloc(numsSize * sizeof(int));
    int* sorted = (int*)malloc(numsSize * sizeof(int));
    int sortedSize = 0;
    for (int i = numsSize - 1; i >= 0; i--) {
        int lo = 0, hi = sortedSize;
        while (lo < hi) {
            int mid = (lo + hi) / 2;
            if (sorted[mid] < nums[i]) lo = mid + 1;
            else hi = mid;
        }
        result[i] = lo;
        for (int j = sortedSize; j > lo; j--)
            sorted[j] = sorted[j - 1];
        sorted[lo] = nums[i];
        sortedSize++;
    }
    free(sorted);
    return result;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int retSize;
    int* res = countSmaller(nums, n, &retSize);
    for (int i = 0; i < retSize; i++) {
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
#include <algorithm>

using namespace std;

vector<int> countSmaller(vector<int>& nums) {
    int n = nums.size();
    vector<int> result(n);
    vector<int> sorted;
    for (int i = n - 1; i >= 0; i--) {
        int pos = lower_bound(sorted.begin(), sorted.end(), nums[i]) - sorted.begin();
        result[i] = pos;
        sorted.insert(sorted.begin() + pos, nums[i]);
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
        vector<int> res = countSmaller(nums);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'csnas-m3': {
    python: `def max_smaller_count(nums):
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
    
    max_count = 0
    for num in reversed(nums):
        k = compress[num]
        cnt = prefix(k - 1)
        if cnt > max_count:
            max_count = cnt
        update(k)
    return max_count

n = int(input())
nums = list(map(int, input().split()))
print(max_smaller_count(nums))`,
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

    public static int maxSmallerCount(int[] nums) {
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
        int maxCount = 0;
        for (int i = n - 1; i >= 0; i--) {
            int k = compress.get(nums[i]);
            int cnt = prefix(k - 1);
            if (cnt > maxCount) maxCount = cnt;
            update(k);
        }
        return maxCount;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            System.out.println(maxSmallerCount(nums));
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

int maxSmallerCount(int* nums, int numsSize) {
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
    int maxCount = 0;
    for (int i = numsSize - 1; i >= 0; i--) {
        int k = compress(nums[i], unique, m);
        int cnt = prefix(k - 1);
        if (cnt > maxCount) maxCount = cnt;
        update(k);
    }
    free(sorted);
    free(unique);
    return maxCount;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    printf("%d\\n", maxSmallerCount(nums, n));
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

int maxSmallerCount(vector<int>& nums) {
    int n = nums.size();
    vector<int> sorted_nums = nums;
    sort(sorted_nums.begin(), sorted_nums.end());
    sorted_nums.erase(unique(sorted_nums.begin(), sorted_nums.end()), sorted_nums.end());
    unordered_map<int, int> compress;
    for (int i = 0; i < (int)sorted_nums.size(); i++)
        compress[sorted_nums[i]] = i + 1;
    BIT bit(sorted_nums.size());
    int maxCount = 0;
    for (int i = n - 1; i >= 0; i--) {
        int k = compress[nums[i]];
        int cnt = bit.prefix(k - 1);
        if (cnt > maxCount) maxCount = cnt;
        bit.update(k);
    }
    return maxCount;
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
        cout << maxSmallerCount(nums) << "\\n";
    }
    return 0;
}`
  },
  'csnas-m4': {
    python: `def index_of_max_smaller(nums):
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
    
    counts = [0] * len(nums)
    for i in range(len(nums) - 1, -1, -1):
        k = compress[nums[i]]
        counts[i] = prefix(k - 1)
        update(k)
    
    max_count = max(counts)
    return counts.index(max_count)

n = int(input())
nums = list(map(int, input().split()))
print(index_of_max_smaller(nums))`,
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

    public static int indexOfMaxSmaller(int[] nums) {
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
        int[] counts = new int[n];
        for (int i = n - 1; i >= 0; i--) {
            int k = compress.get(nums[i]);
            counts[i] = prefix(k - 1);
            update(k);
        }
        int maxCount = 0, maxIdx = 0;
        for (int i = 0; i < n; i++) {
            if (counts[i] > maxCount) {
                maxCount = counts[i];
                maxIdx = i;
            }
        }
        return maxIdx;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            System.out.println(indexOfMaxSmaller(nums));
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

int indexOfMaxSmaller(int* nums, int numsSize) {
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
    int* counts = (int*)malloc(numsSize * sizeof(int));
    for (int i = numsSize - 1; i >= 0; i--) {
        int k = compress(nums[i], unique, m);
        counts[i] = prefix(k - 1);
        update(k);
    }
    int maxCount = 0, maxIdx = 0;
    for (int i = 0; i < numsSize; i++) {
        if (counts[i] > maxCount) {
            maxCount = counts[i];
            maxIdx = i;
        }
    }
    free(sorted);
    free(unique);
    free(counts);
    return maxIdx;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    printf("%d\\n", indexOfMaxSmaller(nums, n));
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

int indexOfMaxSmaller(vector<int>& nums) {
    int n = nums.size();
    vector<int> sorted_nums = nums;
    sort(sorted_nums.begin(), sorted_nums.end());
    sorted_nums.erase(unique(sorted_nums.begin(), sorted_nums.end()), sorted_nums.end());
    unordered_map<int, int> compress;
    for (int i = 0; i < (int)sorted_nums.size(); i++)
        compress[sorted_nums[i]] = i + 1;
    BIT bit(sorted_nums.size());
    vector<int> counts(n);
    for (int i = n - 1; i >= 0; i--) {
        int k = compress[nums[i]];
        counts[i] = bit.prefix(k - 1);
        bit.update(k);
    }
    int maxCount = 0, maxIdx = 0;
    for (int i = 0; i < n; i++) {
        if (counts[i] > maxCount) {
            maxCount = counts[i];
            maxIdx = i;
        }
    }
    return maxIdx;
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
        cout << indexOfMaxSmaller(nums) << "\\n";
    }
    return 0;
}`
  },
  'csnas-m5': {
    python: `def sum_of_smaller_counts(nums):
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
    
    total = 0
    for num in reversed(nums):
        k = compress[num]
        total += prefix(k - 1)
        update(k)
    return total

n = int(input())
nums = list(map(int, input().split()))
print(sum_of_smaller_counts(nums))`,
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

    public static int sumOfSmallerCounts(int[] nums) {
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
        int total = 0;
        for (int i = n - 1; i >= 0; i--) {
            int k = compress.get(nums[i]);
            total += prefix(k - 1);
            update(k);
        }
        return total;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            System.out.println(sumOfSmallerCounts(nums));
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

int sumOfSmallerCounts(int* nums, int numsSize) {
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
    int total = 0;
    for (int i = numsSize - 1; i >= 0; i--) {
        int k = compress(nums[i], unique, m);
        total += prefix(k - 1);
        update(k);
    }
    free(sorted);
    free(unique);
    return total;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    printf("%d\\n", sumOfSmallerCounts(nums, n));
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

int sumOfSmallerCounts(vector<int>& nums) {
    int n = nums.size();
    vector<int> sorted_nums = nums;
    sort(sorted_nums.begin(), sorted_nums.end());
    sorted_nums.erase(unique(sorted_nums.begin(), sorted_nums.end()), sorted_nums.end());
    unordered_map<int, int> compress;
    for (int i = 0; i < (int)sorted_nums.size(); i++)
        compress[sorted_nums[i]] = i + 1;
    BIT bit(sorted_nums.size());
    int total = 0;
    for (int i = n - 1; i >= 0; i--) {
        int k = compress[nums[i]];
        total += bit.prefix(k - 1);
        bit.update(k);
    }
    return total;
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
        cout << sumOfSmallerCounts(nums) << "\\n";
    }
    return 0;
}`
  },

  // --- HARD ---
  'csnas-h1': {
    python: `def count_smaller(nums):
    n = len(nums)
    result = [0] * n
    indices = list(range(n))
    
    def merge_sort(l, r):
        if l >= r:
            return
        mid = (l + r) // 2
        merge_sort(l, mid)
        merge_sort(mid + 1, r)
        merge(l, mid, r)
    
    def merge(l, mid, r):
        temp = []
        i, j = l, mid + 1
        right_count = 0
        while i <= mid and j <= r:
            if nums[indices[j]] < nums[indices[i]]:
                temp.append(indices[j])
                right_count += 1
                j += 1
            else:
                result[indices[i]] += right_count
                temp.append(indices[i])
                i += 1
        while i <= mid:
            result[indices[i]] += right_count
            temp.append(indices[i])
            i += 1
        while j <= r:
            temp.append(indices[j])
            j += 1
        for k in range(len(temp)):
            indices[l + k] = temp[k]
    
    merge_sort(0, n - 1)
    return result

n = int(input())
nums = list(map(int, input().split()))
res = count_smaller(nums)
print(" ".join(str(v) for v in res))`,
    java: `import java.util.*;

public class Solution {
    static int[] result;
    static int[] indices;

    public static List<Integer> countSmaller(int[] nums) {
        int n = nums.length;
        result = new int[n];
        indices = new int[n];
        for (int i = 0; i < n; i++) indices[i] = i;
        mergeSort(nums, 0, n - 1);
        List<Integer> res = new ArrayList<>();
        for (int v : result) res.add(v);
        return res;
    }

    private static void mergeSort(int[] nums, int l, int r) {
        if (l >= r) return;
        int mid = l + (r - l) / 2;
        mergeSort(nums, l, mid);
        mergeSort(nums, mid + 1, r);
        merge(nums, l, mid, r);
    }

    private static void merge(int[] nums, int l, int mid, int r) {
        int[] temp = new int[r - l + 1];
        int i = l, j = mid + 1, k = 0, rightCount = 0;
        while (i <= mid && j <= r) {
            if (nums[indices[j]] < nums[indices[i]]) {
                temp[k++] = indices[j++];
                rightCount++;
            } else {
                result[indices[i]] += rightCount;
                temp[k++] = indices[i++];
            }
        }
        while (i <= mid) {
            result[indices[i]] += rightCount;
            temp[k++] = indices[i++];
        }
        while (j <= r) {
            temp[k++] = indices[j++];
        }
        for (int p = 0; p < temp.length; p++) {
            indices[l + p] = temp[p];
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
            List<Integer> res = countSmaller(nums);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.size(); i++) {
                if (i > 0) sb.append(" ");
                sb.append(res.get(i));
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int* result;
int* indices;

void merge(int* nums, int l, int mid, int r) {
    int* temp = (int*)malloc((r - l + 1) * sizeof(int));
    int i = l, j = mid + 1, k = 0, rightCount = 0;
    while (i <= mid && j <= r) {
        if (nums[indices[j]] < nums[indices[i]]) {
            temp[k++] = indices[j++];
            rightCount++;
        } else {
            result[indices[i]] += rightCount;
            temp[k++] = indices[i++];
        }
    }
    while (i <= mid) {
        result[indices[i]] += rightCount;
        temp[k++] = indices[i++];
    }
    while (j <= r) {
        temp[k++] = indices[j++];
    }
    for (int p = 0; p < k; p++) {
        indices[l + p] = temp[p];
    }
    free(temp);
}

void mergeSort(int* nums, int l, int r) {
    if (l >= r) return;
    int mid = l + (r - l) / 2;
    mergeSort(nums, l, mid);
    mergeSort(nums, mid + 1, r);
    merge(nums, l, mid, r);
}

int* countSmaller(int* nums, int numsSize, int* returnSize) {
    *returnSize = numsSize;
    result = (int*)calloc(numsSize, sizeof(int));
    indices = (int*)malloc(numsSize * sizeof(int));
    for (int i = 0; i < numsSize; i++) indices[i] = i;
    mergeSort(nums, 0, numsSize - 1);
    return result;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int retSize;
    int* res = countSmaller(nums, n, &retSize);
    for (int i = 0; i < retSize; i++) {
        if (i > 0) printf(" ");
        printf("%d", res[i]);
    }
    printf("\\n");
    free(nums);
    free(indices);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

vector<int> result;
vector<int> indices;

void merge(vector<int>& nums, int l, int mid, int r) {
    vector<int> temp;
    int i = l, j = mid + 1, rightCount = 0;
    while (i <= mid && j <= r) {
        if (nums[indices[j]] < nums[indices[i]]) {
            temp.push_back(indices[j++]);
            rightCount++;
        } else {
            result[indices[i]] += rightCount;
            temp.push_back(indices[i++]);
        }
    }
    while (i <= mid) {
        result[indices[i]] += rightCount;
        temp.push_back(indices[i++]);
    }
    while (j <= r) {
        temp.push_back(indices[j++]);
    }
    for (int k = 0; k < (int)temp.size(); k++) {
        indices[l + k] = temp[k];
    }
}

void mergeSort(vector<int>& nums, int l, int r) {
    if (l >= r) return;
    int mid = l + (r - l) / 2;
    mergeSort(nums, l, mid);
    mergeSort(nums, mid + 1, r);
    merge(nums, l, mid, r);
}

vector<int> countSmaller(vector<int>& nums) {
    int n = nums.size();
    result.assign(n, 0);
    indices.resize(n);
    for (int i = 0; i < n; i++) indices[i] = i;
    mergeSort(nums, 0, n - 1);
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
        vector<int> res = countSmaller(nums);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'csnas-h2': {
    python: `def count_smaller(nums):
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
    
    result = []
    for num in reversed(nums):
        k = compress[num]
        result.append(prefix(k - 1))
        update(k)
    return result[::-1]

n = int(input())
nums = list(map(int, input().split()))
res = count_smaller(nums)
print(" ".join(str(v) for v in res))`,
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

    public static List<Integer> countSmaller(int[] nums) {
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
        Integer[] result = new Integer[n];
        for (int i = n - 1; i >= 0; i--) {
            int k = compress.get(nums[i]);
            result[i] = prefix(k - 1);
            update(k);
        }
        return Arrays.asList(result);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            List<Integer> res = countSmaller(nums);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.size(); i++) {
                if (i > 0) sb.append(" ");
                sb.append(res.get(i));
            }
            System.out.println(sb.toString());
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

int* countSmaller(int* nums, int numsSize, int* returnSize) {
    *returnSize = numsSize;
    int* result = (int*)malloc(numsSize * sizeof(int));
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
    for (int i = numsSize - 1; i >= 0; i--) {
        int k = compress(nums[i], unique, m);
        result[i] = prefix(k - 1);
        update(k);
    }
    free(sorted);
    free(unique);
    return result;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int retSize;
    int* res = countSmaller(nums, n, &retSize);
    for (int i = 0; i < retSize; i++) {
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

vector<int> countSmaller(vector<int>& nums) {
    int n = nums.size();
    vector<int> sorted_nums = nums;
    sort(sorted_nums.begin(), sorted_nums.end());
    sorted_nums.erase(unique(sorted_nums.begin(), sorted_nums.end()), sorted_nums.end());
    unordered_map<int, int> compress;
    for (int i = 0; i < (int)sorted_nums.size(); i++)
        compress[sorted_nums[i]] = i + 1;
    BIT bit(sorted_nums.size());
    vector<int> result(n);
    for (int i = n - 1; i >= 0; i--) {
        int k = compress[nums[i]];
        result[i] = bit.prefix(k - 1);
        bit.update(k);
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
        vector<int> res = countSmaller(nums);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'csnas-h3': {
    python: `class SegmentTree:
    def __init__(self, n):
        self.n = n
        self.tree = [0] * (4 * n)
    
    def update(self, idx, l, r, pos):
        if l == r:
            self.tree[idx] += 1
            return
        mid = (l + r) // 2
        if pos <= mid:
            self.update(idx * 2, l, mid, pos)
        else:
            self.update(idx * 2 + 1, mid + 1, r, pos)
        self.tree[idx] = self.tree[idx * 2] + self.tree[idx * 2 + 1]
    
    def query(self, idx, l, r, ql, qr):
        if ql > r or qr < l:
            return 0
        if ql <= l and r <= qr:
            return self.tree[idx]
        mid = (l + r) // 2
        return self.query(idx * 2, l, mid, ql, qr) + self.query(idx * 2 + 1, mid + 1, r, ql, qr)

def count_smaller(nums):
    sorted_unique = sorted(set(nums))
    compress = {v: i + 1 for i, v in enumerate(sorted_unique)}
    m = len(sorted_unique)
    seg = SegmentTree(m)
    result = []
    for num in reversed(nums):
        k = compress[num]
        result.append(seg.query(1, 1, m, 1, k - 1))
        seg.update(1, 1, m, k)
    return result[::-1]

n = int(input())
nums = list(map(int, input().split()))
res = count_smaller(nums)
print(" ".join(str(v) for v in res))`,
    java: `import java.util.*;

public class Solution {
    static int[] tree;
    static int m;

    static void update(int idx, int l, int r, int pos) {
        if (l == r) {
            tree[idx]++;
            return;
        }
        int mid = l + (r - l) / 2;
        if (pos <= mid) update(idx * 2, l, mid, pos);
        else update(idx * 2 + 1, mid + 1, r, pos);
        tree[idx] = tree[idx * 2] + tree[idx * 2 + 1];
    }

    static int query(int idx, int l, int r, int ql, int qr) {
        if (ql > r || qr < l) return 0;
        if (ql <= l && r <= qr) return tree[idx];
        int mid = l + (r - l) / 2;
        return query(idx * 2, l, mid, ql, qr) + query(idx * 2 + 1, mid + 1, r, ql, qr);
    }

    public static List<Integer> countSmaller(int[] nums) {
        int n = nums.length;
        int[] sorted = nums.clone();
        Arrays.sort(sorted);
        Map<Integer, Integer> compress = new HashMap<>();
        int idx = 1;
        for (int v : sorted) {
            if (!compress.containsKey(v)) compress.put(v, idx++);
        }
        m = compress.size();
        tree = new int[4 * m + 5];
        Integer[] result = new Integer[n];
        for (int i = n - 1; i >= 0; i--) {
            int k = compress.get(nums[i]);
            result[i] = (k > 1) ? query(1, 1, m, 1, k - 1) : 0;
            update(1, 1, m, k);
        }
        return Arrays.asList(result);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            List<Integer> res = countSmaller(nums);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.size(); i++) {
                if (i > 0) sb.append(" ");
                sb.append(res.get(i));
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXN 100005

int tree[4 * MAXN];
int m;

void update(int idx, int l, int r, int pos) {
    if (l == r) { tree[idx]++; return; }
    int mid = l + (r - l) / 2;
    if (pos <= mid) update(idx * 2, l, mid, pos);
    else update(idx * 2 + 1, mid + 1, r, pos);
    tree[idx] = tree[idx * 2] + tree[idx * 2 + 1];
}

int query(int idx, int l, int r, int ql, int qr) {
    if (ql > r || qr < l) return 0;
    if (ql <= l && r <= qr) return tree[idx];
    int mid = l + (r - l) / 2;
    return query(idx * 2, l, mid, ql, qr) + query(idx * 2 + 1, mid + 1, r, ql, qr);
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

int* countSmaller(int* nums, int numsSize, int* returnSize) {
    *returnSize = numsSize;
    int* result = (int*)malloc(numsSize * sizeof(int));
    int* sorted = (int*)malloc(numsSize * sizeof(int));
    memcpy(sorted, nums, numsSize * sizeof(int));
    qsort(sorted, numsSize, sizeof(int), cmp);
    int* unique = (int*)malloc(numsSize * sizeof(int));
    m = 0;
    for (int i = 0; i < numsSize; i++) {
        if (i == 0 || sorted[i] != sorted[i - 1])
            unique[m++] = sorted[i];
    }
    memset(tree, 0, sizeof(tree));
    for (int i = numsSize - 1; i >= 0; i--) {
        int k = compress(nums[i], unique, m);
        result[i] = (k > 1) ? query(1, 1, m, 1, k - 1) : 0;
        update(1, 1, m, k);
    }
    free(sorted);
    free(unique);
    return result;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int retSize;
    int* res = countSmaller(nums, n, &retSize);
    for (int i = 0; i < retSize; i++) {
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
#include <algorithm>
#include <unordered_map>

using namespace std;

struct SegTree {
    int n;
    vector<int> tree;
    SegTree(int n) : n(n), tree(4 * n + 5, 0) {}
    void update(int idx, int l, int r, int pos) {
        if (l == r) { tree[idx]++; return; }
        int mid = l + (r - l) / 2;
        if (pos <= mid) update(idx * 2, l, mid, pos);
        else update(idx * 2 + 1, mid + 1, r, pos);
        tree[idx] = tree[idx * 2] + tree[idx * 2 + 1];
    }
    int query(int idx, int l, int r, int ql, int qr) {
        if (ql > r || qr < l) return 0;
        if (ql <= l && r <= qr) return tree[idx];
        int mid = l + (r - l) / 2;
        return query(idx * 2, l, mid, ql, qr) + query(idx * 2 + 1, mid + 1, r, ql, qr);
    }
};

vector<int> countSmaller(vector<int>& nums) {
    int n = nums.size();
    vector<int> sorted_nums = nums;
    sort(sorted_nums.begin(), sorted_nums.end());
    sorted_nums.erase(unique(sorted_nums.begin(), sorted_nums.end()), sorted_nums.end());
    unordered_map<int, int> compress;
    for (int i = 0; i < (int)sorted_nums.size(); i++)
        compress[sorted_nums[i]] = i + 1;
    int m = sorted_nums.size();
    SegTree seg(m);
    vector<int> result(n);
    for (int i = n - 1; i >= 0; i--) {
        int k = compress[nums[i]];
        result[i] = (k > 1) ? seg.query(1, 1, m, 1, k - 1) : 0;
        seg.update(1, 1, m, k);
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
        vector<int> res = countSmaller(nums);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'csnas-h4': {
    python: `def count_smaller_2d(nums):
    m = len(nums)
    n = len(nums[0])
    result = [[0] * n for _ in range(m)]
    
    for i in range(m):
        for j in range(n):
            count = 0
            for k in range(j + 1, n):
                if nums[i][k] < nums[i][j]:
                    count += 1
            for k in range(i + 1, m):
                if nums[k][j] < nums[i][j]:
                    count += 1
            result[i][j] = count
    return result

m, n = map(int, input().split())
nums = [list(map(int, input().split())) for _ in range(m)]
res = count_smaller_2d(nums)
for row in res:
    print(" ".join(str(v) for v in row))`,
    java: `import java.util.*;

public class Solution {
    public static int[][] countSmaller2D(int[][] nums) {
        int m = nums.length, n = nums[0].length;
        int[][] result = new int[m][n];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int count = 0;
                for (int k = j + 1; k < n; k++) {
                    if (nums[i][k] < nums[i][j]) count++;
                }
                for (int k = i + 1; k < m; k++) {
                    if (nums[k][j] < nums[i][j]) count++;
                }
                result[i][j] = count;
            }
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt();
            int n = sc.nextInt();
            int[][] nums = new int[m][n];
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) {
                    nums[i][j] = sc.nextInt();
                }
            }
            int[][] res = countSmaller2D(nums);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) {
                    if (j > 0) sb.append(" ");
                    sb.append(res[i][j]);
                }
                if (i < m - 1) sb.append("\\n");
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

void countSmaller2D(int** nums, int m, int n, int** result) {
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            int count = 0;
            for (int k = j + 1; k < n; k++) {
                if (nums[i][k] < nums[i][j]) count++;
            }
            for (int k = i + 1; k < m; k++) {
                if (nums[k][j] < nums[i][j]) count++;
            }
            result[i][j] = count;
        }
    }
}

int main() {
    int m, n;
    if (scanf("%d %d", &m, &n) != 2) return 0;
    int** nums = (int**)malloc(m * sizeof(int*));
    int** result = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        nums[i] = (int*)malloc(n * sizeof(int));
        result[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) {
            if (scanf("%d", &nums[i][j]) != 1) return 0;
        }
    }
    countSmaller2D(nums, m, n, result);
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (j > 0) printf(" ");
            printf("%d", result[i][j]);
        }
        printf("\\n");
    }
    for (int i = 0; i < m; i++) { free(nums[i]); free(result[i]); }
    free(nums);
    free(result);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

vector<vector<int>> countSmaller2D(vector<vector<int>>& nums) {
    int m = nums.size(), n = nums[0].size();
    vector<vector<int>> result(m, vector<int>(n, 0));
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            int count = 0;
            for (int k = j + 1; k < n; k++) {
                if (nums[i][k] < nums[i][j]) count++;
            }
            for (int k = i + 1; k < m; k++) {
                if (nums[k][j] < nums[i][j]) count++;
            }
            result[i][j] = count;
        }
    }
    return result;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int m, n;
    if (cin >> m >> n) {
        vector<vector<int>> nums(m, vector<int>(n));
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                cin >> nums[i][j];
            }
        }
        vector<vector<int>> res = countSmaller2D(nums);
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (j > 0) cout << " ";
                cout << res[i][j];
            }
            cout << "\\n";
        }
    }
    return 0;
}`
  },
  'csnas-h5': {
    python: `def count_smaller_with_updates(nums, updates):
    def compute_counts(arr):
        sorted_unique = sorted(set(arr))
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
        
        result = []
        for num in reversed(arr):
            k = compress[num]
            result.append(prefix(k - 1))
            update(k)
        return result[::-1]
    
    results = [compute_counts(nums)]
    for idx, val in updates:
        nums[idx] = val
        results.append(compute_counts(nums))
    return results

n = int(input())
nums = list(map(int, input().split()))
m = int(input())
updates = [tuple(map(int, input().split())) for _ in range(m)]
res = count_smaller_with_updates(nums, updates)
for r in res:
    print(" ".join(str(v) for v in r))`,
    java: `import java.util.*;

public class Solution {
    private static List<Integer> computeCounts(int[] arr) {
        int n = arr.length;
        int[] sorted = arr.clone();
        Arrays.sort(sorted);
        Map<Integer, Integer> compress = new HashMap<>();
        int idx = 1;
        for (int v : sorted) {
            if (!compress.containsKey(v)) compress.put(v, idx++);
        }
        int m = compress.size();
        int[] bit = new int[m + 1];
        Integer[] result = new Integer[n];
        for (int i = n - 1; i >= 0; i--) {
            int k = compress.get(arr[i]);
            int sum = 0;
            for (int j = k - 1; j > 0; j -= j & -j) sum += bit[j];
            result[i] = sum;
            for (int j = k; j <= m; j += j & -j) bit[j]++;
        }
        return Arrays.asList(result);
    }

    public static List<List<Integer>> countSmallerWithUpdates(int[] nums, int[][] updates) {
        List<List<Integer>> results = new ArrayList<>();
        results.add(computeCounts(nums));
        for (int[] upd : updates) {
            nums[upd[0]] = upd[1];
            results.add(computeCounts(nums));
        }
        return results;
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
            int[][] updates = new int[m][2];
            for (int i = 0; i < m; i++) {
                updates[i][0] = sc.nextInt();
                updates[i][1] = sc.nextInt();
            }
            List<List<Integer>> res = countSmallerWithUpdates(nums, updates);
            for (List<Integer> r : res) {
                StringBuilder sb = new StringBuilder();
                for (int i = 0; i < r.size(); i++) {
                    if (i > 0) sb.append(" ");
                    sb.append(r.get(i));
                }
                System.out.println(sb.toString());
            }
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

void computeCounts(int* arr, int n, int* result) {
    int* sorted = (int*)malloc(n * sizeof(int));
    memcpy(sorted, arr, n * sizeof(int));
    qsort(sorted, n, sizeof(int), cmp);
    int* unique = (int*)malloc(n * sizeof(int));
    m = 0;
    for (int i = 0; i < n; i++) {
        if (i == 0 || sorted[i] != sorted[i - 1])
            unique[m++] = sorted[i];
    }
    memset(bit, 0, sizeof(bit));
    for (int i = n - 1; i >= 0; i--) {
        int k = compress(arr[i], unique, m);
        result[i] = prefix(k - 1);
        update(k);
    }
    free(sorted);
    free(unique);
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
    int* result = (int*)malloc(n * sizeof(int));
    computeCounts(nums, n, result);
    for (int i = 0; i < n; i++) {
        if (i > 0) printf(" ");
        printf("%d", result[i]);
    }
    printf("\\n");
    for (int i = 0; i < m; i++) {
        nums[updates[i][0]] = updates[i][1];
        computeCounts(nums, n, result);
        for (int j = 0; j < n; j++) {
            if (j > 0) printf(" ");
            printf("%d", result[j]);
        }
        printf("\\n");
    }
    free(nums);
    for (int i = 0; i < m; i++) free(updates[i]);
    free(updates);
    free(result);
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

vector<int> computeCounts(vector<int>& arr) {
    int n = arr.size();
    vector<int> sorted_nums = arr;
    sort(sorted_nums.begin(), sorted_nums.end());
    sorted_nums.erase(unique(sorted_nums.begin(), sorted_nums.end()), sorted_nums.end());
    unordered_map<int, int> compress;
    for (int i = 0; i < (int)sorted_nums.size(); i++)
        compress[sorted_nums[i]] = i + 1;
    BIT bit(sorted_nums.size());
    vector<int> result(n);
    for (int i = n - 1; i >= 0; i--) {
        int k = compress[arr[i]];
        result[i] = bit.prefix(k - 1);
        bit.update(k);
    }
    return result;
}

vector<vector<int>> countSmallerWithUpdates(vector<int>& nums, vector<vector<int>>& updates) {
    vector<vector<int>> results;
    results.push_back(computeCounts(nums));
    for (auto& upd : updates) {
        nums[upd[0]] = upd[1];
        results.push_back(computeCounts(nums));
    }
    return results;
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
        vector<vector<int>> updates(m, vector<int>(2));
        for (int i = 0; i < m; i++) {
            cin >> updates[i][0] >> updates[i][1];
        }
        vector<vector<int>> res = countSmallerWithUpdates(nums, updates);
        for (auto& r : res) {
            for (int i = 0; i < (int)r.size(); i++) {
                if (i > 0) cout << " ";
                cout << r[i];
            }
            cout << "\\n";
        }
    }
    return 0;
}`
  }
};