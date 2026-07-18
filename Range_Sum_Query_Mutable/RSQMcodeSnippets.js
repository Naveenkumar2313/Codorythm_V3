export const RSQMcodeSnippets = {
    c: `#include <stdio.h>
#include <string.h>

#define MAXN 100005
int bit[MAXN], n;

void update(int i, int delta) {
    for (; i <= n; i += i & (-i))
        bit[i] += delta;
}

int prefix(int i) {
    int sum = 0;
    for (; i > 0; i -= i & (-i))
        sum += bit[i];
    return sum;
}

int range_sum(int l, int r) {
    return prefix(r) - prefix(l - 1);
}

int main() {
    int arr[] = {1, 3, 5, 7, 9, 11};
    n = 6;
    memset(bit, 0, sizeof(bit));
    for (int i = 0; i < n; i++)
        update(i + 1, arr[i]);
    printf("Sum [1,3]: %d\\n", range_sum(1, 3));
    update(2, 2 - arr[1]);
    printf("Sum [1,3] after update: %d\\n", range_sum(1, 3));
    return 0;
}
`,

    cpp: `#include <iostream>
#include <vector>
using namespace std;

struct BIT {
    int n;
    vector<int> tree;

    BIT(int n) : n(n), tree(n + 1, 0) {}

    void update(int i, int delta) {
        for (; i <= n; i += i & (-i))
            tree[i] += delta;
    }

    int prefix(int i) {
        int sum = 0;
        for (; i > 0; i -= i & (-i))
            sum += tree[i];
        return sum;
    }

    int range_sum(int l, int r) {
        return prefix(r) - prefix(l - 1);
    }
};

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    vector<int> arr = {1, 3, 5, 7, 9, 11};
    int n = arr.size();
    BIT bit(n);
    for (int i = 0; i < n; i++)
        bit.update(i + 1, arr[i]);
    cout << "Sum [1,3]: " << bit.range_sum(1, 3) << "\\n";
    bit.update(2, 2 - arr[1]);
    cout << "Sum [1,3] after update: " << bit.range_sum(1, 3) << "\\n";
    return 0;
}
`,

    python: `class BIT:
    def __init__(self, n):
        self.n = n
        self.tree = [0] * (n + 1)

    def update(self, i, delta):
        while i <= self.n:
            self.tree[i] += delta
            i += i & (-i)

    def prefix(self, i):
        s = 0
        while i > 0:
            s += self.tree[i]
            i -= i & (-i)
        return s

    def range_sum(self, l, r):
        return self.prefix(r) - self.prefix(l - 1)

arr = [1, 3, 5, 7, 9, 11]
n = len(arr)
bit = BIT(n)
for i, val in enumerate(arr):
    bit.update(i + 1, val)
print("Sum [1,3]:", bit.range_sum(1, 3))
bit.update(2, 2 - arr[1])
print("Sum [1,3] after update:", bit.range_sum(1, 3))
`,

    java: `import java.util.*;

public class RangeSumQueryMutable {
    static int[] tree;
    static int n;

    static void update(int i, int delta) {
        for (; i <= n; i += i & (-i))
            tree[i] += delta;
    }

    static int prefix(int i) {
        int sum = 0;
        for (; i > 0; i -= i & (-i))
            sum += tree[i];
        return sum;
    }

    static int rangeSum(int l, int r) {
        return prefix(r) - prefix(l - 1);
    }

    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 7, 9, 11};
        n = arr.length;
        tree = new int[n + 1];
        for (int i = 0; i < n; i++)
            update(i + 1, arr[i]);
        System.out.println("Sum [1,3]: " + rangeSum(1, 3));
        update(2, 2 - arr[1]);
        System.out.println("Sum [1,3] after update: " + rangeSum(1, 3));
    }
}
`
};
