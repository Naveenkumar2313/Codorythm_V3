const codeSnippets = {
  python: `from collections import deque

def is_bipartite_bfs(num_nodes, adj):
    # Color array: -1 = uncolored, 0 = color 1, 1 = color 2
    colors = [-1] * num_nodes

    for i in range(num_nodes):
        if colors[i] == -1:
            # Start BFS from an unvisited node
            queue = deque([i])
            colors[i] = 0

            while queue:
                u = queue.popleft()
                for v in adj[u]:
                    if colors[v] == -1:
                        # Assign opposite color
                        colors[v] = 1 - colors[u]
                        queue.append(v)
                    elif colors[v] == colors[u]:
                        return False # Same color found on adjacent nodes
    return True

def is_bipartite_dfs(num_nodes, adj):
    colors = [-1] * num_nodes

    def dfs(u, c):
        colors[u] = c
        for v in adj[u]:
            if colors[v] == -1:
                if not dfs(v, 1 - c):
                    return False
            elif colors[v] == c:
                return False
        return True

    for i in range(num_nodes):
        if colors[i] == -1:
            if not dfs(i, 0):
                return False
    return True

# Example Usage
num_nodes = 4
adj = {
    0: [1, 3],
    1: [0, 2],
    2: [1, 3],
    3: [0, 2]
}
# Convert dict to list for consistency
adj_list = [adj.get(i, []) for i in range(num_nodes)]
print("BFS Bipartite:", is_bipartite_bfs(num_nodes, adj_list))
print("DFS Bipartite:", is_bipartite_dfs(num_nodes, adj_list))`,
  java: `import java.util.*;

public class BipartiteCheck {
    public static boolean isBipartiteBFS(int numNodes, List<List<Integer>> adj) {
        int[] colors = new int[numNodes];
        Arrays.fill(colors, -1);

        for (int i = 0; i < numNodes; i++) {
            if (colors[i] == -1) {
                Queue<Integer> queue = new LinkedList<>();
                queue.add(i);
                colors[i] = 0;

                while (!queue.isEmpty()) {
                    int u = queue.poll();
                    for (int v : adj.get(u)) {
                        if (colors[v] == -1) {
                            colors[v] = 1 - colors[u];
                            queue.add(v);
                        } else if (colors[v] == colors[u]) {
                            return false;
                        }
                    }
                }
            }
        }
        return true;
    }

    public static boolean isBipartiteDFS(int numNodes, List<List<Integer>> adj) {
        int[] colors = new int[numNodes];
        Arrays.fill(colors, -1);

        for (int i = 0; i < numNodes; i++) {
            if (colors[i] == -1) {
                if (!dfs(i, 0, adj, colors)) return false;
            }
        }
        return true;
    }

    private static boolean dfs(int u, int c, List<List<Integer>> adj, int[] colors) {
        colors[u] = c;
        for (int v : adj.get(u)) {
            if (colors[v] == -1) {
                if (!dfs(v, 1 - c, adj, colors)) return false;
            } else if (colors[v] == c) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        int V = 4;
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) adj.add(new ArrayList<>());
        adj.get(0).add(1); adj.get(0).add(3);
        adj.get(1).add(0); adj.get(1).add(2);
        adj.get(2).add(1); adj.get(2).add(3);
        adj.get(3).add(0); adj.get(3).add(2);

        System.out.println("BFS Bipartite: " + isBipartiteBFS(V, adj));
        System.out.println("DFS Bipartite: " + isBipartiteDFS(V, adj));
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

struct Graph {
    int V;
    int **adj;
    int *adjSize;
};

bool isBipartiteBFS(struct Graph* g) {
    int *colors = (int *)malloc(g->V * sizeof(int));
    for (int i = 0; i < g->V; i++) colors[i] = -1;

    int *queue = (int *)malloc(g->V * sizeof(int));

    for (int i = 0; i < g->V; i++) {
        if (colors[i] == -1) {
            int front = 0, rear = 0;
            queue[rear++] = i;
            colors[i] = 0;

            while (front < rear) {
                int u = queue[front++];
                for (int j = 0; j < g->adjSize[u]; j++) {
                    int v = g->adj[u][j];
                    if (colors[v] == -1) {
                        colors[v] = 1 - colors[u];
                        queue[rear++] = v;
                    } else if (colors[v] == colors[u]) {
                        free(colors); free(queue);
                        return false;
                    }
                }
            }
        }
    }
    free(colors); free(queue);
    return true;
}

bool dfs(int u, int c, struct Graph* g, int *colors) {
    colors[u] = c;
    for (int i = 0; i < g->adjSize[u]; i++) {
        int v = g->adj[u][i];
        if (colors[v] == -1) {
            if (!dfs(v, 1 - c, g, colors)) return false;
        } else if (colors[v] == c) {
            return false;
        }
    }
    return true;
}

bool isBipartiteDFS(struct Graph* g) {
    int *colors = (int *)malloc(g->V * sizeof(int));
    for (int i = 0; i < g->V; i++) colors[i] = -1;

    for (int i = 0; i < g->V; i++) {
        if (colors[i] == -1) {
            if (!dfs(i, 0, g, colors)) {
                free(colors); return false;
            }
        }
    }
    free(colors);
    return true;
}

int main() {
    int V = 4;
    struct Graph g;
    g.V = V;
    g.adjSize = (int *)malloc(V * sizeof(int));
    g.adj = (int **)malloc(V * sizeof(int *));

    g.adjSize[0] = 2; g.adj[0] = (int[]){1, 3};
    g.adjSize[1] = 2; g.adj[1] = (int[]){0, 2};
    g.adjSize[2] = 2; g.adj[2] = (int[]){1, 3};
    g.adjSize[3] = 2; g.adj[3] = (int[]){0, 2};

    printf("BFS Bipartite: %s\\n", isBipartiteBFS(&g) ? "True" : "False");
    printf("DFS Bipartite: %s\\n", isBipartiteDFS(&g) ? "True" : "False");

    free(g.adjSize); free(g.adj);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>

using namespace std;

bool isBipartiteBFS(int V, vector<vector<int>>& adj) {
    vector<int> color(V, -1);
    for (int i = 0; i < V; i++) {
        if (color[i] == -1) {
            queue<int> q;
            q.push(i);
            color[i] = 0;
            while (!q.empty()) {
                int u = q.front(); q.pop();
                for (int v : adj[u]) {
                    if (color[v] == -1) {
                        color[v] = 1 - color[u];
                        q.push(v);
                    } else if (color[v] == color[u]) {
                        return false;
                    }
                }
            }
        }
    }
    return true;
}

bool dfs(int u, int c, vector<vector<int>>& adj, vector<int>& color) {
    color[u] = c;
    for (int v : adj[u]) {
        if (color[v] == -1) {
            if (!dfs(v, 1 - c, adj, color)) return false;
        } else if (color[v] == c) {
            return false;
        }
    }
    return true;
}

bool isBipartiteDFS(int V, vector<vector<int>>& adj) {
    vector<int> color(V, -1);
    for (int i = 0; i < V; i++) {
        if (color[i] == -1) {
            if (!dfs(i, 0, adj, color)) return false;
        }
    }
    return true;
}

int main() {
    int V = 4;
    vector<vector<int>> adj(V);
    adj[0] = {1, 3}; adj[1] = {0, 2}; adj[2] = {1, 3}; adj[3] = {0, 2};
    cout << "BFS Bipartite: " << (isBipartiteBFS(V, adj) ? "True" : "False") << endl;
    cout << "DFS Bipartite: " << (isBipartiteDFS(V, adj) ? "True" : "False") << endl;
    return 0;
}`
};

export default codeSnippets;
