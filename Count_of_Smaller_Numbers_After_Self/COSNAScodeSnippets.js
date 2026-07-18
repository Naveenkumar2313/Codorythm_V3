export const COSNAScodeSnippets = {
    python: `def count_smaller(nums):
    sorted_unique = sorted(set(nums))
    compress = {v: i + 1 for i, v in enumerate(sorted_unique)}
    m = len(sorted_unique)
    bit = [0] * (m + 1)

    def update(i):
        while i <= m:
            bit[i] += 1
            i += i & (-i)

    def prefix(i):
        s = 0
        while i > 0:
            s += bit[i]
            i -= i & (-i)
        return s

    result = []
    for num in reversed(nums):
        k = compress[num]
        result.append(prefix(k - 1))
        update(k)
    return result[::-1]

print(count_smaller([5, 2, 6, 1]))
`,

    java: `import java.util.*;

public class CountSmallerAfterSelf {
    static int[] bit;
    static int m;

    static void update(int i) {
        for (; i <= m; i += i & (-i))
            bit[i]++;
    }

    static int prefix(int i) {
        int sum = 0;
        for (; i > 0; i -= i & (-i))
            sum += bit[i];
        return sum;
    }

    public static List<Integer> countSmaller(int[] nums) {
        int n = nums.length;
        int[] sorted = nums.clone();
        Arrays.sort(sorted);
        Map<Integer, Integer> compress = new HashMap<>();
        int idx = 1;
        for (int v : sorted)
            compress.putIfAbsent(v, idx++);
        m = compress.size();
        bit = new int[m + 1];
        int[] result = new int[n];
        for (int i = n - 1; i >= 0; i--) {
            int k = compress.get(nums[i]);
            result[i] = prefix(k - 1);
            update(k);
        }
        List<Integer> ans = new ArrayList<>();
        for (int v : result) ans.add(v);
        return ans;
    }

    public static void main(String[] args) {
        int[] nums = {5, 2, 6, 1};
        System.out.println(countSmaller(nums));
    }
}
`,

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

int cmp(const void* a, const void* b) { return (*(int*)a - *(int*)b); }

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
    int nums[] = {5, 2, 6, 1};
    int n = 4;
    int sorted[4];
    memcpy(sorted, nums, n * sizeof(int));
    qsort(sorted, n, sizeof(int), cmp);
    m = 0;
    int unique[MAXN];
    for (int i = 0; i < n; i++)
        if (i == 0 || sorted[i] != sorted[i - 1])
            unique[m++] = sorted[i];
    memset(bit, 0, sizeof(bit));
    int result[4];
    for (int i = n - 1; i >= 0; i--) {
        int k = compress(nums[i], unique, m);
        result[i] = prefix(k - 1);
        update(k);
    }
    for (int i = 0; i < n; i++)
        printf("%d ", result[i]);
    printf("\\n");
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
        for (; i <= m; i += i & (-i)) tree[i]++;
    }
    int prefix(int i) {
        int s = 0;
        for (; i > 0; i -= i & (-i)) s += tree[i];
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
    vector<int> nums = {5, 2, 6, 1};
    vector<int> ans = countSmaller(nums);
    for (int v : ans) cout << v << " ";
    cout << "\\n";
    return 0;
}
`
};
