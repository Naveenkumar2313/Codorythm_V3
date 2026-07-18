export const RMQcodeSnippets = {
    c: `#include <stdio.h>
#include <limits.h>

#define MAXN 100005
int tree[4 * MAXN];

void build(int arr[], int node, int start, int end) {
    if (start == end) {
        tree[node] = arr[start];
    } else {
        int mid = (start + end) / 2;
        build(arr, 2 * node, start, mid);
        build(arr, 2 * node + 1, mid + 1, end);
        tree[node] = tree[2 * node] < tree[2 * node + 1] ? tree[2 * node] : tree[2 * node + 1];
    }
}

int query(int node, int start, int end, int l, int r) {
    if (r < start || end < l) return INT_MAX;
    if (l <= start && end <= r) return tree[node];
    int mid = (start + end) / 2;
    int left = query(2 * node, start, mid, l, r);
    int right = query(2 * node + 1, mid + 1, end, l, r);
    return left < right ? left : right;
}

void update(int node, int start, int end, int idx, int val) {
    if (start == end) {
        tree[node] = val;
    } else {
        int mid = (start + end) / 2;
        if (idx <= mid) update(2 * node, start, mid, idx, val);
        else update(2 * node + 1, mid + 1, end, idx, val);
        tree[node] = tree[2 * node] < tree[2 * node + 1] ? tree[2 * node] : tree[2 * node + 1];
    }
}

int main() {
    int arr[] = {2, 4, 3, 1, 6, 7, 8, 9, 1, 7};
    int n = 10;
    build(arr, 1, 0, n - 1);
    printf("Min in [1,5]: %d\\n", query(1, 0, n - 1, 1, 5));
    update(1, 0, n - 1, 3, 0);
    printf("Min in [1,5] after update: %d\\n", query(1, 0, n - 1, 1, 5));
    return 0;
}
`,

    cpp: `#include <iostream>
#include <vector>
#include <climits>
using namespace std;

struct SegTree {
    int n;
    vector<int> tree;

    SegTree(vector<int>& arr) {
        n = arr.size();
        tree.resize(4 * n);
        build(arr, 1, 0, n - 1);
    }

    void build(vector<int>& arr, int node, int start, int end) {
        if (start == end) {
            tree[node] = arr[start];
        } else {
            int mid = (start + end) / 2;
            build(arr, 2 * node, start, mid);
            build(arr, 2 * node + 1, mid + 1, end);
            tree[node] = min(tree[2 * node], tree[2 * node + 1]);
        }
    }

    int query(int node, int start, int end, int l, int r) {
        if (r < start || end < l) return INT_MAX;
        if (l <= start && end <= r) return tree[node];
        int mid = (start + end) / 2;
        return min(query(2 * node, start, mid, l, r),
                   query(2 * node + 1, mid + 1, end, l, r));
    }

    void update(int node, int start, int end, int idx, int val) {
        if (start == end) {
            tree[node] = val;
        } else {
            int mid = (start + end) / 2;
            if (idx <= mid) update(2 * node, start, mid, idx, val);
            else update(2 * node + 1, mid + 1, end, idx, val);
            tree[node] = min(tree[2 * node], tree[2 * node + 1]);
        }
    }

    int query(int l, int r) { return query(1, 0, n - 1, l, r); }
    void update(int idx, int val) { update(1, 0, n - 1, idx, val); }
};

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    vector<int> arr = {2, 4, 3, 1, 6, 7, 8, 9, 1, 7};
    SegTree st(arr);
    cout << "Min in [1,5]: " << st.query(1, 5) << "\\n";
    st.update(3, 0);
    cout << "Min in [1,5] after update: " << st.query(1, 5) << "\\n";
    return 0;
}
`,

    python: `import math

class SegTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [math.inf] * (4 * self.n)
        self.build(arr, 1, 0, self.n - 1)

    def build(self, arr, node, start, end):
        if start == end:
            self.tree[node] = arr[start]
        else:
            mid = (start + end) // 2
            self.build(arr, 2 * node, start, mid)
            self.build(arr, 2 * node + 1, mid + 1, end)
            self.tree[node] = min(self.tree[2 * node], self.tree[2 * node + 1])

    def query(self, node, start, end, l, r):
        if r < start or end < l:
            return math.inf
        if l <= start and end <= r:
            return self.tree[node]
        mid = (start + end) // 2
        return min(self.query(2 * node, start, mid, l, r),
                   self.query(2 * node + 1, mid + 1, end, l, r))

    def update(self, node, start, end, idx, val):
        if start == end:
            self.tree[node] = val
        else:
            mid = (start + end) // 2
            if idx <= mid:
                self.update(2 * node, start, mid, idx, val)
            else:
                self.update(2 * node + 1, mid + 1, end, idx, val)
            self.tree[node] = min(self.tree[2 * node], self.tree[2 * node + 1])

    def range_min(self, l, r):
        return self.query(1, 0, self.n - 1, l, r)

    def point_update(self, idx, val):
        self.update(1, 0, self.n - 1, idx, val)

arr = [2, 4, 3, 1, 6, 7, 8, 9, 1, 7]
st = SegTree(arr)
print("Min in [1,5]:", st.range_min(1, 5))
st.point_update(3, 0)
print("Min in [1,5] after update:", st.range_min(1, 5))
`,

    java: `import java.util.*;

public class RangeMinimumQuery {
    static int[] tree;
    static int n;

    static void build(int[] arr, int node, int start, int end) {
        if (start == end) {
            tree[node] = arr[start];
        } else {
            int mid = (start + end) / 2;
            build(arr, 2 * node, start, mid);
            build(arr, 2 * node + 1, mid + 1, end);
            tree[node] = Math.min(tree[2 * node], tree[2 * node + 1]);
        }
    }

    static int query(int node, int start, int end, int l, int r) {
        if (r < start || end < l) return Integer.MAX_VALUE;
        if (l <= start && end <= r) return tree[node];
        int mid = (start + end) / 2;
        return Math.min(query(2 * node, start, mid, l, r),
                        query(2 * node + 1, mid + 1, end, l, r));
    }

    static void update(int node, int start, int end, int idx, int val) {
        if (start == end) {
            tree[node] = val;
        } else {
            int mid = (start + end) / 2;
            if (idx <= mid) update(2 * node, start, mid, idx, val);
            else update(2 * node + 1, mid + 1, end, idx, val);
            tree[node] = Math.min(tree[2 * node], tree[2 * node + 1]);
        }
    }

    public static void main(String[] args) {
        int[] arr = {2, 4, 3, 1, 6, 7, 8, 9, 1, 7};
        n = arr.length;
        tree = new int[4 * n];
        build(arr, 1, 0, n - 1);
        System.out.println("Min in [1,5]: " + query(1, 0, n - 1, 1, 5));
        update(1, 0, n - 1, 3, 0);
        System.out.println("Min in [1,5] after update: " + query(1, 0, n - 1, 1, 5));
    }
}
`
};
