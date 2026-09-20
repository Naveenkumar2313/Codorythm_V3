const codeSnippets = {
  python: `def find_critical_points(num_nodes, adj):
    # disc: discovery time of each node
    # low: lowest discovery time reachable via back-edges
    disc = [-1] * num_nodes
    low = [-1] * num_nodes
    visited = [False] * num_nodes
    parent = [-1] * num_nodes

    articulation_points = set()
    bridges = []
    timer = 0

    def dfs(u):
        nonlocal timer
        visited[u] = True
        disc[u] = low[u] = timer
        timer += 1
        children = 0

        for v in adj[u]:
            if v == parent[u]:
                continue
            if visited[v]:
                # Back-edge: update low value using discovery time of ancestor
                low[u] = min(low[u], disc[v])
            else:
                # Tree-edge
                parent[v] = u
                children += 1
                dfs(v)
                low[u] = min(low[u], low[v])

                # Condition for Bridge
                if low[v] > disc[u]:
                    bridges.append((u, v))

                # Condition for Articulation Point (non-root)
                if parent[u] != -1 and low[v] >= disc[u]:
                    articulation_points.add(u)

        return children

    for i in range(num_nodes):
        if not visited[i]:
            # Root case for Articulation Point
            root_children = dfs(i)
            if root_children > 1:
                articulation_points.add(i)

    return list(articulation_points), bridges

# Example Usage
adj = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1, 3],
    3: [2, 4],
    4: [3]
}
num_nodes = 5
adj_list = [adj.get(i, []) for i in range(num_nodes)]
ap, br = find_critical_points(num_nodes, adj_list)
print("Articulation Points:", ap)
print("Bridges:", br)`,
  java: `import java.util.*;

public class TarjanAlgorithm {
    private int timer = 0;
    private int[] disc, low, parent;
    private boolean[] visited;
    private Set<Integer> articulationPoints;
    private List<int[]> bridges;

    public void findCritical(int V, List<List<Integer>> adj) {
        disc = new int[V];
        low = new int[V];
        parent = new int[V];
        visited = new boolean[V];
        articulationPoints = new HashSet<>();
        bridges = new ArrayList<>();
        Arrays.fill(disc, -1);
        Arrays.fill(low, -1);
        Arrays.fill(parent, -1);

        for (int i = 0; i < V; i++) {
            if (!visited[i]) {
                int children = dfs(i, adj);
                if (parent[i] == -1 && children > 1) {
                    articulationPoints.add(i);
                }
            }
        }
        System.out.println("Articulation Points: " + articulationPoints);
        System.out.println("Bridges: ");
        for (int[] b : bridges) System.out.println(b[0] + " - " + b[1]);
    }

    private int dfs(int u, List<List<Integer>> adj) {
        visited[u] = true;
        disc[u] = low[u] = timer++;
        int children = 0;

        for (int v : adj.get(u)) {
            if (v == parent[u]) continue;
            if (visited[v]) {
                low[u] = Math.min(low[u], disc[v]);
            } else {
                parent[v] = u;
                children++;
                dfs(v, adj);
                low[u] = Math.min(low[u], low[v]);
                if (parent[u] != -1 && low[v] >= disc[u]) {
                    articulationPoints.add(u);
                }
                if (low[v] > disc[u]) {
                    bridges.add(new int[]{u, v});
                }
            }
        }
        return children;
    }

    public static void main(String[] args) {
        int V = 5;
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) adj.add(new ArrayList<>());
        adj.get(0).add(1); adj.get(0).add(2);
        adj.get(1).add(0); adj.get(1).add(2);
        adj.get(2).add(0); adj.get(2).add(1); adj.get(2).add(3);
        adj.get(3).add(2); adj.get(3).add(4);
        adj.get(4).add(3);
        new TarjanAlgorithm().findCritical(V, adj);
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MIN(a, b) ((a) < (b) ? (a) : (b))

struct Graph {
    int V;
    int **adj;
    int *adjSize;
};

int timer = 0;
int *disc, *low, *parent;
bool *visited, *isAP;

void dfs(int u, struct Graph* g) {
    visited[u] = true;
    disc[u] = low[u] = timer++;
    int children = 0;

    for (int i = 0; i < g->adjSize[u]; i++) {
        int v = g->adj[u][i];
        if (v == parent[u]) continue;
        if (visited[v]) {
            low[u] = MIN(low[u], disc[v]);
        } else {
            parent[v] = u;
            children++;
            dfs(v, g);
            low[u] = MIN(low[u], low[v]);
            if (parent[u] != -1 && low[v] >= disc[u]) isAP[u] = true;
            if (low[v] > disc[u]) printf("Bridge: %d - %d\\n", u, v);
        }
    }
    if (parent[u] == -1 && children > 1) isAP[u] = true;
}

int main() {
    int V = 5;
    struct Graph g;
    g.V = V;
    g.adjSize = (int *)malloc(V * sizeof(int));
    g.adj = (int **)malloc(V * sizeof(int *));

    g.adjSize[0] = 2; g.adj[0] = (int[]){1, 2};
    g.adjSize[1] = 2; g.adj[1] = (int[]){0, 2};
    g.adjSize[2] = 3; g.adj[2] = (int[]){0, 1, 3};
    g.adjSize[3] = 2; g.adj[3] = (int[]){2, 4};
    g.adjSize[4] = 1; g.adj[4] = (int[]){3};

    disc = (int *)malloc(V * sizeof(int));
    low = (int *)malloc(V * sizeof(int));
    parent = (int *)malloc(V * sizeof(int));
    visited = (bool *)calloc(V, sizeof(bool));
    isAP = (bool *)calloc(V, sizeof(bool));
    for (int i = 0; i < V; i++) parent[i] = -1;

    dfs(0, &g);

    printf("Articulation Points: ");
    for (int i = 0; i < V; i++) if (isAP[i]) printf("%d ", i);
    printf("\\n");

    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <set>

using namespace std;

void findCritical(int u, int p, int& timer, vector<int>& disc, vector<int>& low,
                  vector<bool>& visited, vector<int>& parent,
                  set<int>& ap, vector<pair<int, int>>& bridges,
                  const vector<vector<int>>& adj) {
    visited[u] = true;
    disc[u] = low[u] = ++timer;
    int children = 0;

    for (int v : adj[u]) {
        if (v == p) continue;
        if (visited[v]) {
            low[u] = min(low[u], disc[v]);
        } else {
            parent[v] = u;
            children++;
            findCritical(v, u, timer, disc, low, visited, parent, ap, bridges, adj);
            low[u] = min(low[u], low[v]);
            if (p != -1 && low[v] >= disc[u]) ap.insert(u);
            if (low[v] > disc[u]) bridges.push_back({u, v});
        }
    }
    if (p == -1 && children > 1) ap.insert(u);
}

int main() {
    int V = 5;
    vector<vector<int>> adj(V);
    adj[0] = {1, 2}; adj[1] = {0, 2}; adj[2] = {0, 1, 3}; adj[3] = {2, 4}; adj[4] = {3};

    vector<int> disc(V, -1), low(V, -1), parent(V, -1);
    vector<bool> visited(V, false);
    set<int> ap;
    vector<pair<int, int>> bridges;
    int timer = 0;

    for (int i = 0; i < V; i++) {
        if (!visited[i]) findCritical(i, -1, timer, disc, low, visited, parent, ap, bridges, adj);
    }

    cout << "Articulation Points: ";
    for (int x : ap) cout << x << " ";
    cout << "\\nBridges: ";
    for (auto& b : bridges) cout << b.first << "-" << b.second << " ";
    cout << endl;

    return 0;
}`
};

export default codeSnippets;
