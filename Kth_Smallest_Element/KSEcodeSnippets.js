export const KSEcodeSnippets = {
    python: `class BIT:
    def __init__(self, n):
        self.n = n
        self.tree = [0] * (n + 1)

    def update(self, i, delta=1):
        while i <= self.n:
            self.tree[i] += delta
            i += i & (-i)

    def prefix(self, i):
        s = 0
        while i > 0:
            s += self.tree[i]
            i -= i & (-i)
        return s

    def kth_smallest(self, k):
        pos = 0
        log = self.n.bit_length()
        for i in range(log, -1, -1):
            nxt = pos + (1 << i)
            if nxt <= self.n and self.tree[nxt] < k:
                k -= self.tree[nxt]
                pos = nxt
        return pos + 1

nums = [3, 1, 4, 1, 5, 9, 2, 6]
sorted_unique = sorted(set(nums))
compress = {v: i + 1 for i, v in enumerate(sorted_unique)}
decompress = {i + 1: v for i, v in enumerate(sorted_unique)}

bit = BIT(len(sorted_unique))
for num in nums:
    bit.update(compress[num])

k = 4
idx = bit.kth_smallest(k)
print(f"{k}th smallest: {decompress[idx]}")
`,

    java: `import java.util.*;

public class KthSmallestElement {
    static int[] tree;
    static int m;

    static void update(int i) {
        for (; i <= m; i += i & (-i))
            tree[i]++;
    }

    static int kthSmallest(int k) {
        int pos = 0;
        for (int pw = Integer.highestOneBit(m); pw > 0; pw >>= 1) {
            int nxt = pos + pw;
            if (nxt <= m && tree[nxt] < k) {
                k -= tree[nxt];
                pos = nxt;
            }
        }
        return pos + 1;
    }

    public static void main(String[] args) {
        int[] nums = {3, 1, 4, 1, 5, 9, 2, 6};
        int[] sorted = nums.clone();
        Arrays.sort(sorted);
        Map<Integer, Integer> compress = new HashMap<>();
        Map<Integer, Integer> decompress = new HashMap<>();
        int idx = 1;
        for (int v : sorted)
            if (!compress.containsKey(v)) {
                compress.put(v, idx);
                decompress.put(idx, v);
                idx++;
            }
        m = compress.size();
        tree = new int[m + 1];
        for (int num : nums)
            update(compress.get(num));
        int k = 4;
        int pos = kthSmallest(k);
        System.out.println(k + "th smallest: " + decompress.get(pos));
    }
}
`,

    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXN 100005
int tree[MAXN], m;

void update(int i) {
    for (; i <= m; i += i & (-i))
        tree[i]++;
}

int kth_smallest(int k) {
    int pos = 0;
    for (int pw = 1 << 17; pw > 0; pw >>= 1) {
        int nxt = pos + pw;
        if (nxt <= m && tree[nxt] < k) {
            k -= tree[nxt];
            pos = nxt;
        }
    }
    return pos + 1;
}

int cmp(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int compress(int val, int* sorted, int n) {
    int lo = 0, hi = n - 1;
    while (lo <= hi) {
        int mid = (lo + hi) / 2;
        if (sorted[mid] == val) return mid + 1;
        if (sorted[mid] < val) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
}

int main() {
    int nums[] = {3, 1, 4, 1, 5, 9, 2, 6};
    int n = 8;
    int sorted[8];
    memcpy(sorted, nums, n * sizeof(int));
    qsort(sorted, n, sizeof(int), cmp);
    int unique[MAXN];
    m = 0;
    for (int i = 0; i < n; i++)
        if (i == 0 || sorted[i] != sorted[i - 1])
            unique[m++] = sorted[i];
    memset(tree, 0, sizeof(tree));
    for (int i = 0; i < n; i++)
        update(compress(nums[i], unique, m));
    int k = 4;
    int pos = kth_smallest(k);
    printf("%dth smallest: %d\\n", k, unique[pos - 1]);
    return 0;
}
`,

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
        for (; i <= m; i += i & (-i))
            tree[i]++;
    }

    int kth_smallest(int k) {
        int pos = 0;
        for (int pw = 1 << __lg(m); pw > 0; pw >>= 1) {
            int nxt = pos + pw;
            if (nxt <= m && tree[nxt] < k) {
                k -= tree[nxt];
                pos = nxt;
            }
        }
        return pos + 1;
    }
};

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    vector<int> nums = {3, 1, 4, 1, 5, 9, 2, 6};
    vector<int> sorted_unique = nums;
    sort(sorted_unique.begin(), sorted_unique.end());
    sorted_unique.erase(unique(sorted_unique.begin(), sorted_unique.end()), sorted_unique.end());
    unordered_map<int, int> compress;
    for (int i = 0; i < (int)sorted_unique.size(); i++)
        compress[sorted_unique[i]] = i + 1;
    BIT bit(sorted_unique.size());
    for (int num : nums)
        bit.update(compress[num]);
    int k = 4;
    int pos = bit.kth_smallest(k);
    cout << k << "th smallest: " << sorted_unique[pos - 1] << "\\n";
    return 0;
}
`
};
