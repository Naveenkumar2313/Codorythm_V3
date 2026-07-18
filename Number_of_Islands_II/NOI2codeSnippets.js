export const NOI2codeSnippets = {
    python: `def num_islands_ii(m, n, positions):
    parent = {}
    rank = {}
    count = 0
    result = []

    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]

    def union(x, y):
        nonlocal count
        px, py = find(x), find(y)
        if px == py:
            return
        if rank[px] < rank[py]:
            px, py = py, px
        parent[py] = px
        if rank[px] == rank[py]:
            rank[px] += 1
        count -= 1

    directions = [(0,1),(0,-1),(1,0),(-1,0)]

    for r, c in positions:
        idx = r * n + c
        if idx in parent:
            result.append(count)
            continue
        parent[idx] = idx
        rank[idx] = 0
        count += 1
        for dr, dc in directions:
            nr, nc = r + dr, c + dc
            nidx = nr * n + nc
            if 0 <= nr < m and 0 <= nc < n and nidx in parent:
                union(idx, nidx)
        result.append(count)

    return result

print(num_islands_ii(3, 3, [[0,0],[0,1],[1,2],[2,1],[1,1]]))
`,

    java: `import java.util.*;

public class NumberOfIslandsII {

    static int[] parent, rank;

    static int find(int x) {
        if (parent[x] != x)
            parent[x] = find(parent[x]);
        return parent[x];
    }

    static int union(int x, int y, int count) {
        int px = find(x), py = find(y);
        if (px == py) return count;
        if (rank[px] < rank[py]) { int t = px; px = py; py = t; }
        parent[py] = px;
        if (rank[px] == rank[py]) rank[px]++;
        return count - 1;
    }

    public static List<Integer> numIslands2(int m, int n, int[][] positions) {
        parent = new int[m * n];
        rank = new int[m * n];
        boolean[] isLand = new boolean[m * n];
        Arrays.fill(parent, -1);

        int[][] dirs = {{0,1},{0,-1},{1,0},{-1,0}};
        int count = 0;
        List<Integer> result = new ArrayList<>();

        for (int[] pos : positions) {
            int r = pos[0], c = pos[1];
            int idx = r * n + c;
            if (isLand[idx]) { result.add(count); continue; }
            isLand[idx] = true;
            parent[idx] = idx;
            count++;
            for (int[] d : dirs) {
                int nr = r + d[0], nc = c + d[1];
                int nidx = nr * n + nc;
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && isLand[nidx])
                    count = union(idx, nidx, count);
            }
            result.add(count);
        }
        return result;
    }

    public static void main(String[] args) {
        int[][] positions = {{0,0},{0,1},{1,2},{2,1},{1,1}};
        System.out.println(numIslands2(3, 3, positions));
    }
}
`,

    c: `#include <stdio.h>
#include <string.h>
#include <stdbool.h>

#define MAXN 10001

int parent[MAXN], rnk[MAXN];
bool isLand[MAXN];

int find(int x) {
    if (parent[x] != x)
        parent[x] = find(parent[x]);
    return parent[x];
}

int unionNodes(int x, int y, int count) {
    int px = find(x), py = find(y);
    if (px == py) return count;
    if (rnk[px] < rnk[py]) { int t = px; px = py; py = t; }
    parent[py] = px;
    if (rnk[px] == rnk[py]) rnk[px]++;
    return count - 1;
}

void numIslands2(int m, int n, int positions[][2], int k) {
    memset(isLand, false, sizeof(isLand));
    for (int i = 0; i < m * n; i++) { parent[i] = i; rnk[i] = 0; }

    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    int count = 0;

    for (int i = 0; i < k; i++) {
        int r = positions[i][0], c = positions[i][1];
        int idx = r * n + c;
        if (isLand[idx]) { printf("%d ", count); continue; }
        isLand[idx] = true;
        parent[idx] = idx;
        count++;
        for (int d = 0; d < 4; d++) {
            int nr = r + dirs[d][0], nc = c + dirs[d][1];
            int nidx = nr * n + nc;
            if (nr >= 0 && nr < m && nc >= 0 && nc < n && isLand[nidx])
                count = unionNodes(idx, nidx, count);
        }
        printf("%d ", count);
    }
    printf("\\n");
}

int main() {
    int positions[][2] = {{0,0},{0,1},{1,2},{2,1},{1,1}};
    numIslands2(3, 3, positions, 5);
    return 0;
}
`,

    cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> parent, rnk;

int find(int x) {
    if (parent[x] != x)
        parent[x] = find(parent[x]);
    return parent[x];
}

int unionNodes(int x, int y, int count) {
    int px = find(x), py = find(y);
    if (px == py) return count;
    if (rnk[px] < rnk[py]) swap(px, py);
    parent[py] = px;
    if (rnk[px] == rnk[py]) rnk[px]++;
    return count - 1;
}

vector<int> numIslands2(int m, int n, vector<vector<int>>& positions) {
    parent.assign(m * n, 0);
    rnk.assign(m * n, 0);
    vector<bool> isLand(m * n, false);
    for (int i = 0; i < m * n; i++) parent[i] = i;

    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    int count = 0;
    vector<int> result;

    for (auto& pos : positions) {
        int r = pos[0], c = pos[1];
        int idx = r * n + c;
        if (isLand[idx]) { result.push_back(count); continue; }
        isLand[idx] = true;
        count++;
        for (auto& d : dirs) {
            int nr = r + d[0], nc = c + d[1];
            int nidx = nr * n + nc;
            if (nr >= 0 && nr < m && nc >= 0 && nc < n && isLand[nidx])
                count = unionNodes(idx, nidx, count);
        }
        result.push_back(count);
    }
    return result;
}

int main() {
    vector<vector<int>> positions = {{0,0},{0,1},{1,2},{2,1},{1,1}};
    vector<int> res = numIslands2(3, 3, positions);
    for (int x : res) cout << x << " ";
    cout << endl;
    return 0;
}
`
};
