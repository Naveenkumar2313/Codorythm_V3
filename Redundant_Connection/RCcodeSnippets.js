export const RCcodeSnippets = {
    python: `def find_redundant_connection(edges):
    n = len(edges)
    parent = list(range(n + 1))
    rank = [0] * (n + 1)

    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]

    def union(x, y):
        px, py = find(x), find(y)
        if px == py:
            return False
        if rank[px] < rank[py]:
            px, py = py, px
        parent[py] = px
        if rank[px] == rank[py]:
            rank[px] += 1
        return True

    for u, v in edges:
        if not union(u, v):
            return [u, v]

edges = [[1,2],[1,3],[2,3]]
print("Redundant Connection:", find_redundant_connection(edges))
`,

    java: `public class RedundantConnection {

    static int[] parent, rank;

    static int find(int x) {
        if (parent[x] != x)
            parent[x] = find(parent[x]);
        return parent[x];
    }

    static boolean union(int x, int y) {
        int px = find(x), py = find(y);
        if (px == py) return false;
        if (rank[px] < rank[py]) {
            int tmp = px; px = py; py = tmp;
        }
        parent[py] = px;
        if (rank[px] == rank[py]) rank[px]++;
        return true;
    }

    public static int[] findRedundantConnection(int[][] edges) {
        int n = edges.length;
        parent = new int[n + 1];
        rank = new int[n + 1];
        for (int i = 0; i <= n; i++) parent[i] = i;

        for (int[] edge : edges) {
            if (!union(edge[0], edge[1]))
                return edge;
        }
        return new int[]{};
    }

    public static void main(String[] args) {
        int[][] edges = {{1,2},{1,3},{2,3}};
        int[] result = findRedundantConnection(edges);
        System.out.println("Redundant Connection: [" + result[0] + "," + result[1] + "]");
    }
}
`,

    c: `#include <stdio.h>

int parent[1001], rnk[1001];

int find(int x) {
    if (parent[x] != x)
        parent[x] = find(parent[x]);
    return parent[x];
}

int unionNodes(int x, int y) {
    int px = find(x), py = find(y);
    if (px == py) return 0;
    if (rnk[px] < rnk[py]) { int t = px; px = py; py = t; }
    parent[py] = px;
    if (rnk[px] == rnk[py]) rnk[px]++;
    return 1;
}

void findRedundantConnection(int edges[][2], int n) {
    for (int i = 1; i <= n; i++) { parent[i] = i; rnk[i] = 0; }
    for (int i = 0; i < n; i++) {
        if (!unionNodes(edges[i][0], edges[i][1])) {
            printf("Redundant Connection: [%d,%d]\\n", edges[i][0], edges[i][1]);
            return;
        }
    }
}

int main() {
    int edges[][2] = {{1,2},{1,3},{2,3}};
    findRedundantConnection(edges, 3);
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

bool unionNodes(int x, int y) {
    int px = find(x), py = find(y);
    if (px == py) return false;
    if (rnk[px] < rnk[py]) swap(px, py);
    parent[py] = px;
    if (rnk[px] == rnk[py]) rnk[px]++;
    return true;
}

vector<int> findRedundantConnection(vector<vector<int>>& edges) {
    int n = edges.size();
    parent.resize(n + 1);
    rnk.resize(n + 1, 0);
    for (int i = 0; i <= n; i++) parent[i] = i;

    for (auto& edge : edges) {
        if (!unionNodes(edge[0], edge[1]))
            return edge;
    }
    return {};
}

int main() {
    vector<vector<int>> edges = {{1,2},{1,3},{2,3}};
    vector<int> result = findRedundantConnection(edges);
    cout << "Redundant Connection: [" << result[0] << "," << result[1] << "]" << endl;
    return 0;
}
`
};
