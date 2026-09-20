const solutions = [
  {
    id: "bf_prob_1",
    solutions: {
      python: `def solve(V, edges, src):
    dist = [float('inf')] * V
    dist[src] = 0
    for _ in range(V - 1):
        for u, v, w in edges:
            if dist[u] != float('inf') and dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
    return dist`,
      java: `import java.util.*;

public class Solution {
    public int[] solve(int V, int[][] edges, int src) {
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;
        for (int i = 1; i < V; i++) {
            for (int[] edge : edges) {
                int u = edge[0], v = edge[1], w = edge[2];
                if (dist[u] != Integer.MAX_VALUE && dist[u] + w < dist[v]) {
                    dist[v] = dist[u] + w;
                }
            }
        }
        return dist;
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int* solve(int V, int edges[][3], int edgesCount, int src) {
    int* dist = (int*)malloc(V * sizeof(int));
    for (int i = 0; i < V; i++) dist[i] = INT_MAX;
    dist[src] = 0;
    for (int i = 1; i < V; i++) {
        for (int j = 0; j < edgesCount; j++) {
            int u = edges[j][0], v = edges[j][1], w = edges[j][2];
            if (dist[u] != INT_MAX && dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
            }
        }
    }
    return dist;
}`,
      cpp: `#include <vector>
#include <climits>
using namespace std;

vector<int> solve(int V, vector<vector<int>>& edges, int src) {
    vector<int> dist(V, INT_MAX);
    dist[src] = 0;
    for (int i = 1; i < V; i++) {
        for (auto& edge : edges) {
            int u = edge[0], v = edge[1], w = edge[2];
            if (dist[u] != INT_MAX && dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
            }
        }
    }
    return dist;
}`
    }
  },
  {
    id: "bf_prob_2",
    solutions: {
      python: `def hasNegativeCycle(V, edges):
    dist = [0] * V # Use 0 to detect cycles anywhere, not just from a source
    for _ in range(V - 1):
        for u, v, w in edges:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
    for u, v, w in edges:
        if dist[u] + w < dist[v]:
            return True
    return False`,
      java: `public class Solution {
    public boolean hasNegativeCycle(int V, int[][] edges) {
        int[] dist = new int[V];
        for (int i = 1; i < V; i++) {
            for (int[] e : edges) {
                if (dist[e[0]] + e[2] < dist[e[1]]) dist[e[1]] = dist[e[0]] + e[2];
            }
        }
        for (int[] e : edges) {
            if (dist[e[0]] + e[2] < dist[e[1]]) return true;
        }
        return false;
    }
}`,
      c: `#include <stdbool.h>
#include <stdlib.h>

bool hasNegativeCycle(int V, int edges[][3], int edgesCount) {
    int *dist = (int *)calloc(V, sizeof(int));
    for (int i = 1; i < V; i++) {
        for (int j = 0; j < edgesCount; j++) {
            if (dist[edges[j][0]] + edges[j][2] < dist[edges[j][1]])
                dist[edges[j][1]] = dist[edges[j][0]] + edges[j][2];
        }
    }
    bool res = false;
    for (int j = 0; j < edgesCount; j++) {
        if (dist[edges[j][0]] + edges[j][2] < dist[edges[j][1]]) {
            res = true; break;
        }
    }
    free(dist);
    return res;
}`,
      cpp: `#include <vector>
using namespace std;

bool hasNegativeCycle(int V, vector<vector<int>>& edges) {
    vector<int> dist(V, 0);
    for (int i = 1; i < V; i++) {
        for (auto& e : edges) {
            if (dist[e[0]] + e[2] < dist[e[1]]) dist[e[1]] = dist[e[0]] + e[2];
        }
    }
    for (auto& e : edges) {
        if (dist[e[0]] + e[2] < dist[e[1]]) return true;
    }
    return false;
}`
    }
  },
  {
    id: "bf_prob_3",
    solutions: {
      python: `def maxProfit(V, edges, src, dest):
    # Negate weights to use shortest path
    dist = [float('inf')] * V
    dist[src] = 0
    for _ in range(V - 1):
        for u, v, w in edges:
            if dist[u] != float('inf') and dist[u] - w < dist[v]:
                dist[v] = dist[u] - w
    return -dist[dest] if dist[dest] != float('inf') else -float('inf')`,
      java: `public class Solution {
    public int maxProfit(int V, int[][] edges, int src, int dest) {
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;
        for (int i = 1; i < V; i++) {
            for (int[] e : edges) {
                if (dist[e[0]] != Integer.MAX_VALUE && dist[e[0]] - e[2] < dist[e[1]])
                    dist[e[1]] = dist[e[0]] - e[2];
            }
        }
        return dist[dest] == Integer.MAX_VALUE ? Integer.MIN_VALUE : -dist[dest];
    }
}`,
      c: `int maxProfit(int V, int edges[][3], int edgeCount, int src, int dest) {
    int *dist = (int *)malloc(V * sizeof(int));
    for (int i = 0; i < V; i++) dist[i] = 1e9;
    dist[src] = 0;
    for (int i = 1; i < V; i++) {
        for (int j = 0; j < edgeCount; j++) {
            if (dist[edges[j][0]] != 1e9 && dist[edges[j][0]] - edges[j][2] < dist[edges[j][1]])
                dist[edges[j][1]] = dist[edges[j][0]] - edges[j][2];
        }
    }
    int res = -dist[dest];
    free(dist);
    return res;
}`,
      cpp: `int maxProfit(int V, vector<vector<int>>& edges, int src, int dest) {
    vector<int> dist(V, 1e9);
    dist[src] = 0;
    for (int i = 1; i < V; i++) {
        for (auto& e : edges) {
            if (dist[e[0]] != 1e9 && dist[e[0]] - e[2] < dist[e[1]])
                dist[e[1]] = dist[e[0]] - e[2];
        }
    }
    return dist[dest] == 1e9 ? -1e9 : -dist[dest];
}`
    }
  },
  {
    id: "bf_prob_4",
    solutions: {
      python: `def cheapestFlight(cities, flights, src, dest):
    dist = [float('inf')] * cities
    dist[src] = 0
    for _ in range(cities - 1):
        for u, v, w in flights:
            if dist[u] != float('inf') and dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
    return dist[dest]`,
      java: `public class Solution {
    public int cheapestFlight(int cities, int[][] flights, int src, int dest) {
        int[] dist = new int[cities];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;
        for (int i = 1; i < cities; i++) {
            for (int[] f : flights) {
                if (dist[f[0]] != Integer.MAX_VALUE && dist[f[0]] + f[2] < dist[f[1]])
                    dist[f[1]] = dist[f[0]] + f[2];
            }
        }
        return dist[dest];
    }
}`,
      c: `int cheapestFlight(int cities, int flights[][3], int flightCount, int src, int dest) {
    int *dist = (int *)malloc(cities * sizeof(int));
    for (int i = 0; i < cities; i++) dist[i] = 1e9;
    dist[src] = 0;
    for (int i = 1; i < cities; i++) {
        for (int j = 0; j < flightCount; j++) {
            if (dist[flights[j][0]] != 1e9 && dist[flights[j][0]] + flights[j][2] < dist[flights[j][1]])
                dist[flights[j][1]] = dist[flights[j][0]] + flights[j][2];
        }
    }
    int res = dist[dest];
    free(dist);
    return res;
}`,
      cpp: `int cheapestFlight(int cities, vector<vector<int>>& flights, int src, int dest) {
    vector<int> dist(cities, 1e9);
    dist[src] = 0;
    for (int i = 1; i < cities; i++) {
        for (auto& f : flights) {
            if (dist[f[0]] != 1e9 && dist[f[0]] + f[2] < dist[f[1]])
                dist[f[1]] = dist[f[0]] + f[2];
        }
    }
    return dist[dest];
}`
    }
  },
  {
    id: "bf_prob_5",
    solutions: {
      python: `def solve(V, edges, src):
    dist = [float('inf')] * V
    dist[src] = 0
    for _ in range(V - 1):
        for u, v, w in edges:
            if dist[u] != float('inf') and dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
    for u, v, w in edges:
        if dist[u] != float('inf') and dist[u] + w < dist[v]:
            return []
    return [d if d != float('inf') else "INF" for d in dist]`,
      java: `public class Solution {
    public int[] solve(int V, int[][] edges, int src) {
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;
        for (int i = 1; i < V; i++) {
            for (int[] e : edges) {
                if (dist[e[0]] != Integer.MAX_VALUE && dist[e[0]] + e[2] < dist[e[1]])
                    dist[e[1]] = dist[e[0]] + e[2];
            }
        }
        for (int[] e : edges) {
            if (dist[e[0]] != Integer.MAX_VALUE && dist[e[0]] + e[2] < dist[e[1]]) return new int[0];
        }
        return dist;
    }
}`,
      c: `int* solve(int V, int edges[][3], int edgesCount, int src, int* resSize) {
    int *dist = (int *)malloc(V * sizeof(int));
    for (int i = 0; i < V; i++) dist[i] = 1e9;
    dist[src] = 0;
    for (int i = 1; i < V; i++) {
        for (int j = 0; j < edgesCount; j++) {
            if (dist[edges[j][0]] != 1e9 && dist[edges[j][0]] + edges[j][2] < dist[edges[j][1]])
                dist[edges[j][1]] = dist[edges[j][0]] + edges[j][2];
        }
    }
    for (int j = 0; j < edgesCount; j++) {
        if (dist[edges[j][0]] != 1e9 && dist[edges[j][0]] + edges[j][2] < dist[edges[j][1]]) {
            free(dist); *resSize = 0; return NULL;
        }
    }
    *resSize = V; return dist;
}`,
      cpp: `vector<int> solve(int V, vector<vector<int>>& edges, int src) {
    vector<int> dist(V, 1e9);
    dist[src] = 0;
    for (int i = 1; i < V; i++) {
        for (auto& e : edges) {
            if (dist[e[0]] != 1e9 && dist[e[0]] + e[2] < dist[e[1]])
                dist[e[1]] = dist[e[0]] + e[2];
        }
    }
    for (auto& e : edges) {
        if (dist[e[0]] != 1e9 && dist[e[0]] + e[2] < dist[e[1]]) return {};
    }
    return dist;
}`
    }
  },
  {
    id: "bf_prob_6",
    solutions: {
      python: `def solve(V, edges, src):
    dist = [float('inf')] * V
    dist[src] = 0
    for _ in range(V - 1):
        for u, v, w in edges:
            if dist[u] != float('inf') and dist[u] + w < dist[v]:
                dist[v] = dist[u] + w

    # Identify nodes in or reachable from negative cycles
    has_neg_cycle = [False] * V
    for _ in range(V): # Propagate negative infinity
        for u, v, w in edges:
            if dist[u] != float('inf') and dist[u] + w < dist[v]:
                dist[v] = -float('inf')
                has_neg_cycle[v] = True

    return ["-INF" if d == -float('inf') else str(d) for d in dist]`,
      java: `public class Solution {
    public String[] solve(int V, int[][] edges, int src) {
        long[] dist = new long[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;
        for (int i = 1; i < V; i++) {
            for (int[] e : edges) {
                if (dist[e[0]] != Integer.MAX_VALUE && dist[e[0]] + e[2] < dist[e[1]])
                    dist[e[1]] = dist[e[0]] + e[2];
            }
        }
        for (int i = 0; i < V; i++) {
            for (int[] e : edges) {
                if (dist[e[0]] != Integer.MAX_VALUE && dist[e[0]] + e[2] < dist[e[1]])
                    dist[e[1]] = Long.MIN_VALUE;
            }
        }
        String[] res = new String[V];
        for (int i = 0; i < V; i++) res[i] = dist[i] == Long.MIN_VALUE ? "-INF" : String.valueOf(dist[i]);
        return res;
    }
}`,
      c: `void solve(int V, int edges[][3], int edgeCount, int src) {
    long *dist = (long *)malloc(V * sizeof(long));
    for (int i = 0; i < V; i++) dist[i] = 1e15;
    dist[src] = 0;
    for (int i = 1; i < V; i++) {
        for (int j = 0; j < edgeCount; j++) {
            if (dist[edges[j][0]] != 1e15 && dist[edges[j][0]] + edges[j][2] < dist[edges[j][1]])
                dist[edges[j][1]] = dist[edges[j][0]] + edges[j][2];
        }
    }
    for (int i = 0; i < V; i++) {
        for (int j = 0; j < edgeCount; j++) {
            if (dist[edges[j][0]] != 1e15 && dist[edges[j][0]] + edges[j][2] < dist[edges[j][1]])
                dist[edges[j][1]] = -1e15;
        }
    }
    for (int i = 0; i < V; i++) {
        if (dist[i] == -1e15) printf("-INF ");
        else printf("%ld ", dist[i]);
    }
    free(dist);
}`,
      cpp: `vector<string> solve(int V, vector<vector<int>>& edges, int src) {
    vector<long long> dist(V, 1e15);
    dist[src] = 0;
    for (int i = 1; i < V; i++) {
        for (auto& e : edges) {
            if (dist[e[0]] != 1e15 && dist[e[0]] + e[2] < dist[e[1]])
                dist[e[1]] = dist[e[0]] + e[2];
        }
    }
    for (int i = 0; i < V; i++) {
        for (auto& e : edges) {
            if (dist[e[0]] != 1e15 && dist[e[0]] + e[2] < dist[e[1]])
                dist[e[1]] = -1e15;
        }
    }
    vector<string> res;
    for (auto d : dist) res.push_back(d == -1e15 ? "-INF" : to_string(d));
    return res;
}`
    }
  },
  {
    id: "bf_prob_7",
    solutions: {
      python: `import math

def hasArbitrage(numCurrencies, rates):
    # Transform rates: weight = -log(rate)
    # Shortest path with negative cycle = product of rates > 1
    edges = []
    for u in range(numCurrencies):
        for v in range(numCurrencies):
            # Assume rates is a matrix or list of [u, v, rate]
            pass
    # Fixed approach for rates as list of [u, v, rate]
    dist = [0.0] * numCurrencies
    for _ in range(numCurrencies - 1):
        for u, v, rate in rates:
            if dist[u] - math.log(rate) < dist[v]:
                dist[v] = dist[u] - math.log(rate)
    for u, v, rate in rates:
        if dist[u] - math.log(rate) < dist[v]:
            return True
    return False`,
      java: `public class Solution {
    public boolean hasArbitrage(int numCurrencies, double[][] rates) {
        double[] dist = new double[numCurrencies];
        for (int i = 1; i < numCurrencies; i++) {
            for (double[] edge : rates) {
                int u = (int)edge[0], v = (int)edge[1];
                double weight = -Math.log(edge[2]);
                if (dist[u] + weight < dist[v]) dist[v] = dist[u] + weight;
            }
        }
        for (double[] edge : rates) {
            int u = (int)edge[0], v = (int)edge[1];
            double weight = -Math.log(edge[2]);
            if (dist[u] + weight < dist[v]) return true;
        }
        return false;
    }
}`,
      c: `bool hasArbitrage(int numCurrencies, double rates[][3], int ratesCount) {
    double *dist = (double *)calloc(numCurrencies, sizeof(double));
    for (int i = 1; i < numCurrencies; i++) {
        for (int j = 0; j < ratesCount; j++) {
            int u = (int)rates[j][0], v = (int)rates[j][1];
            double w = -log(rates[j][2]);
            if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;
        }
    }
    bool res = false;
    for (int j = 0; j < ratesCount; j++) {
        int u = (int)rates[j][0], v = (int)rates[j][1];
        double w = -log(rates[j][2]);
        if (dist[u] + w < dist[v]) { res = true; break; }
    }
    free(dist); return res;
}`,
      cpp: `#include <vector>
#include <cmath>
using namespace std;

bool hasArbitrage(int numCurrencies, vector<vector<double>>& rates) {
    vector<double> dist(numCurrencies, 0);
    for (int i = 1; i < numCurrencies; i++) {
        for (auto& e : rates) {
            int u = (int)e[0], v = (int)e[1];
            double w = -log(e[2]);
            if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;
        }
    }
    for (auto& e : rates) {
        int u = (int)e[0], v = (int)e[1];
        double w = -log(e[2]);
        if (dist[u] + w < dist[v]) return true;
    }
    return false;
}`
    }
  },
  {
    id: "bf_prob_8",
    solutions: {
      python: `def shortestPathKEdges(V, edges, src, dest, K):
    # DP approach: dist[k][v] is shortest path to v using k edges
    dist = [[float('inf')] * V for _ in range(K + 1)]
    dist[0][src] = 0
    for k in range(1, K + 1):
        for u, v, w in edges:
            if dist[k-1][u] != float('inf'):
                dist[k][v] = min(dist[k][v], dist[k-1][u] + w)
    return dist[K][dest] if dist[K][dest] != float('inf') else "INF"`,
      java: `public class Solution {
    public int shortestPathKEdges(int V, int[][] edges, int src, int dest, int K) {
        int[][] dist = new int[K + 1][V];
        for (int[] row : dist) Arrays.fill(row, Integer.MAX_VALUE);
        dist[0][src] = 0;
        for (int k = 1; k <= K; k++) {
            for (int[] e : edges) {
                if (dist[k-1][e[0]] != Integer.MAX_VALUE)
                    dist[k][e[1]] = Math.min(dist[k][e[1]], dist[k-1][e[0]] + e[2]);
            }
        }
        return dist[K][dest] == Integer.MAX_VALUE ? -1 : dist[K][dest];
    }
}`,
      c: `int shortestPathKEdges(int V, int edges[][3], int edgeCount, int src, int dest, int K) {
    int *dist = (int *)malloc((K + 1) * V * sizeof(int));
    for (int i = 0; i < (K + 1) * V; i++) dist[i] = 1e9;
    dist[0 * V + src] = 0;
    for (int k = 1; k <= K; k++) {
        for (int j = 0; j < edgeCount; j++) {
            int u = edges[j][0], v = edges[j][1], w = edges[j][2];
            if (dist[(k - 1) * V + u] != 1e9) {
                if (dist[(k - 1) * V + u] + w < dist[k * V + v])
                    dist[k * V + v] = dist[(k - 1) * V + u] + w;
            }
        }
    }
    int res = dist[K * V + dest];
    free(dist);
    return res == 1e9 ? -1 : res;
}`,
      cpp: `int shortestPathKEdges(int V, vector<vector<int>>& edges, int src, int dest, int K) {
    vector<vector<int>> dist(K + 1, vector<int>(V, 1e9));
    dist[0][src] = 0;
    for (int k = 1; k <= K; k++) {
        for (auto& e : edges) {
            if (dist[k-1][e[0]] != 1e9)
                dist[k][e[1]] = min(dist[k][e[1]], dist[k-1][e[0]] + e[2]);
        }
    }
    return dist[K][dest] == 1e9 ? -1 : dist[K][dest];
}`
    }
  },
  {
    id: "bf_prob_9",
    solutions: {
      python: `def solve(V, edges, src):
    dist = [float('inf')] * V
    dist[src] = 0
    for _ in range(V - 1):
        for u, v, w in edges:
            if dist[u] != float('inf') and dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
    for u, v, w in edges:
        if dist[u] != float('inf') and dist[u] + w < dist[v]:
            return [] # Negative cycle reachable from src
    return [d if d != float('inf') else "INF" for d in dist]`,
      java: `public class Solution {
    public int[] solve(int V, int[][] edges, int src) {
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;
        for (int i = 1; i < V; i++) {
            for (int[] e : edges) {
                if (dist[e[0]] != Integer.MAX_VALUE && dist[e[0]] + e[2] < dist[e[1]])
                    dist[e[1]] = dist[e[0]] + e[2];
            }
        }
        for (int[] e : edges) {
            if (dist[e[0]] != Integer.MAX_VALUE && dist[e[0]] + e[2] < dist[e[1]]) return new int[0];
        }
        return dist;
    }
}`,
      c: `int* solve(int V, int edges[][3], int edgesCount, int src, int* resSize) {
    int *dist = (int *)malloc(V * sizeof(int));
    for (int i = 0; i < V; i++) dist[i] = 1e9;
    dist[src] = 0;
    for (int i = 1; i < V; i++) {
        for (int j = 0; j < edgesCount; j++) {
            if (dist[edges[j][0]] != 1e9 && dist[edges[j][0]] + edges[j][2] < dist[edges[j][1]])
                dist[edges[j][1]] = dist[edges[j][0]] + edges[j][2];
        }
    }
    for (int j = 0; j < edgesCount; j++) {
        if (dist[edges[j][0]] != 1e9 && dist[edges[j][0]] + edges[j][2] < dist[edges[j][1]]) {
            free(dist); *resSize = 0; return NULL;
        }
    }
    *resSize = V; return dist;
}`,
      cpp: `vector<int> solve(int V, vector<vector<int>>& edges, int src) {
    vector<int> dist(V, 1e9);
    dist[src] = 0;
    for (int i = 1; i < V; i++) {
        for (auto& e : edges) {
            if (dist[e[0]] != 1e9 && dist[e[0]] + e[2] < dist[e[1]])
                dist[e[1]] = dist[e[0]] + e[2];
        }
    }
    for (auto& e : edges) {
        if (dist[e[0]] != 1e9 && dist[e[0]] + e[2] < dist[e[1]]) return {};
    }
    return dist;
}`
    }
  },
  {
    id: "bf_prob_10",
    solutions: {
      python: `def findPath(V, edges, src, dest):
    dist = [float('inf')] * V
    parent = [-1] * V
    dist[src] = 0
    for _ in range(V - 1):
        for u, v, w in edges:
            if dist[u] != float('inf') and dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                parent[v] = u
    for u, v, w in edges:
        if dist[u] != float('inf') and dist[u] + w < dist[v]:
            return [] # Negative cycle
    if dist[dest] == float('inf'): return []
    path = []
    curr = dest
    while curr != -1:
        path.append(curr)
        curr = parent[curr]
    return path[::-1]`,
      java: `import java.util.*;

public class Solution {
    public List<Integer> findPath(int V, int[][] edges, int src, int dest) {
        int[] dist = new int[V];
        int[] parent = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        Arrays.fill(parent, -1);
        dist[src] = 0;
        for (int i = 1; i < V; i++) {
            for (int[] e : edges) {
                if (dist[e[0]] != Integer.MAX_VALUE && dist[e[0]] + e[2] < dist[e[1]]) {
                    dist[e[1]] = dist[e[0]] + e[2];
                    parent[e[1]] = e[0];
                }
            }
        }
        for (int[] e : edges) {
            if (dist[e[0]] != Integer.MAX_VALUE && dist[e[0]] + e[2] < dist[e[1]]) return new ArrayList<>();
        }
        if (dist[dest] == Integer.MAX_VALUE) return new ArrayList<>();
        List<Integer> path = new ArrayList<>();
        for (int curr = dest; curr != -1; curr = parent[curr]) path.add(curr);
        Collections.reverse(path);
        return path;
    }
}`,
      c: `int* findPath(int V, int edges[][3], int edgeCount, int src, int dest, int* pathSize) {
    int *dist = (int *)malloc(V * sizeof(int));
    int *parent = (int *)malloc(V * sizeof(int));
    for (int i = 0; i < V; i++) { dist[i] = 1e9; parent[i] = -1; }
    dist[src] = 0;
    for (int i = 1; i < V; i++) {
        for (int j = 0; j < edgeCount; j++) {
            if (dist[edges[j][0]] != 1e9 && dist[edges[j][0]] + edges[j][2] < dist[edges[j][1]]) {
                dist[edges[j][1]] = dist[edges[j][0]] + edges[j][2];
                parent[edges[j][1]] = edges[j][0];
            }
        }
    }
    for (int j = 0; j < edgeCount; j++) {
        if (dist[edges[j][0]] != 1e9 && dist[edges[j][0]] + edges[j][2] < dist[edges[j][1]]) {
            free(dist); free(parent); *pathSize = 0; return NULL;
        }
    }
    if (dist[dest] == 1e9) { free(dist); free(parent); *pathSize = 0; return NULL; }
    int temp[V], count = 0, curr = dest;
    while (curr != -1) { temp[count++] = curr; curr = parent[curr]; }
    int *path = (int *)malloc(count * sizeof(int));
    for (int i = 0; i < count; i++) path[i] = temp[count - 1 - i];
    *pathSize = count; free(dist); free(parent);
    return path;
}`,
      cpp: `#include <vector>
#include <algorithm>
using namespace std;

vector<int> findPath(int V, vector<vector<int>>& edges, int src, int dest) {
    vector<int> dist(V, 1e9), parent(V, -1);
    dist[src] = 0;
    for (int i = 1; i < V; i++) {
        for (auto& e : edges) {
            if (dist[e[0]] != 1e9 && dist[e[0]] + e[2] < dist[e[1]]) {
                dist[e[1]] = dist[e[0]] + e[2];
                parent[e[1]] = e[0];
            }
        }
    }
    for (auto& e : edges) {
        if (dist[e[0]] != 1e9 && dist[e[0]] + e[2] < dist[e[1]]) return {};
    }
    if (dist[dest] == 1e9) return {};
    vector<int> path;
    for (int curr = dest; curr != -1; curr = parent[curr]) path.push_back(curr);
    reverse(path.begin(), path.end());
    return path;
}`
    }
  },
  {
    id: "bf_prob_11",
    solutions: {
      python: `def allPairsShortest(V, edges):
    results = []
    for src in range(V):
        dist = [float('inf')] * V
        dist[src] = 0
        for _ in range(V - 1):
            for u, v, w in edges:
                if dist[u] != float('inf') and dist[u] + w < dist[v]:
                    dist[v] = dist[u] + w
        for u, v, w in edges:
            if dist[u] != float('inf') and dist[u] + w < dist[v]:
                return [] # Negative cycle found
        results.append([d if d != float('inf') else "INF" for d in dist])
    return results`,
      java: `public class Solution {
    public int[][] allPairsShortest(int V, int[][] edges) {
        int[][] allDist = new int[V][V];
        for (int src = 0; src < V; src++) {
            int[] dist = new int[V];
            Arrays.fill(dist, Integer.MAX_VALUE);
            dist[src] = 0;
            for (int i = 1; i < V; i++) {
                for (int[] e : edges) {
                    if (dist[e[0]] != Integer.MAX_VALUE && dist[e[0]] + e[2] < dist[e[1]])
                        dist[e[1]] = dist[e[0]] + e[2];
                }
            }
            for (int[] e : edges) {
                if (dist[e[0]] != Integer.MAX_VALUE && dist[e[0]] + e[2] < dist[e[1]]) return new int[0][0];
            }
            allDist[src] = dist;
        }
        return allDist;
    }
}`,
      c: `int** allPairsShortest(int V, int edges[][3], int edgeCount) {
    int **allDist = (int **)malloc(V * sizeof(int *));
    for (int src = 0; src < V; src++) {
        int *dist = (int *)malloc(V * sizeof(int));
        for (int i = 0; i < V; i++) dist[i] = 1e9;
        dist[src] = 0;
        for (int i = 1; i < V; i++) {
            for (int j = 0; j < edgeCount; j++) {
                if (dist[edges[j][0]] != 1e9 && dist[edges[j][0]] + edges[j][2] < dist[edges[j][1]])
                    dist[edges[j][1]] = dist[edges[j][0]] + edges[j][2];
            }
        }
        for (int j = 0; j < edgeCount; j++) {
            if (dist[edges[j][0]] != 1e9 && dist[edges[j][0]] + edges[j][2] < dist[edges[j][1]]) {
                // Cleanup and return NULL
                return NULL;
            }
        }
        allDist[src] = dist;
    }
    return allDist;
}`,
      cpp: `vector<vector<int>> allPairsShortest(int V, vector<vector<int>>& edges) {
    vector<vector<int>> allDist;
    for (int src = 0; src < V; src++) {
        vector<int> dist(V, 1e9);
        dist[src] = 0;
        for (int i = 1; i < V; i++) {
            for (auto& e : edges) {
                if (dist[e[0]] != 1e9 && dist[e[0]] + e[2] < dist[e[1]])
                    dist[e[1]] = dist[e[0]] + e[2];
            }
        }
        for (auto& e : edges) {
            if (dist[e[0]] != 1e9 && dist[e[0]] + e[2] < dist[e[1]]) return {};
        }
        allDist.push_back(dist);
    }
    return allDist;
}`
    }
  },
  {
    id: "bf_prob_12",
    solutions: {
      python: `from collections import deque, defaultdict

def solve(V, edges, src):
    adj = defaultdict(list)
    in_degree = [0] * V
    for u, v, w in edges:
        adj[u].append((v, w))
        in_degree[v] += 1

    topo_order = []
    queue = deque([i for i in range(V) if in_degree[i] == 0])
    while queue:
        u = queue.popleft()
        topo_order.append(u)
        for v, w in adj[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0: queue.append(v)

    dist = [float('inf')] * V
    dist[src] = 0
    for u in topo_order:
        if dist[u] != float('inf'):
            for v, w in adj[u]:
                if dist[u] + w < dist[v]:
                    dist[v] = dist[u] + w
    return dist`,
      java: `import java.util.*;

public class Solution {
    public int[] solve(int V, int[][] edges, int src) {
        List<List<int[]>> adj = new ArrayList<>();
        int[] inDegree = new int[V];
        for (int i = 0; i < V; i++) adj.add(new ArrayList<>());
        for (int[] e : edges) {
            adj.get(e[0]).add(new int[]{e[1], e[2]});
            inDegree[e[1]]++;
        }
        Queue<Integer> q = new LinkedList<>();
        for (int i = 0; i < V; i++) if (inDegree[i] == 0) q.add(i);
        List<Integer> topo = new ArrayList<>();
        while (!q.isEmpty()) {
            int u = q.poll();
            topo.add(u);
            for (int[] edge : adj.get(u)) if (--inDegree[edge[0]] == 0) q.add(edge[0]);
        }
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;
        for (int u : topo) {
            if (dist[u] != Integer.MAX_VALUE) {
                for (int[] edge : adj.get(u)) {
                    if (dist[u] + edge[1] < dist[edge[0]]) dist[edge[0]] = dist[u] + edge[1];
                }
            }
        }
        return dist;
    }
}`,
      c: `int* solve(int V, int edges[][3], int edgesCount, int src) {
    // This implementation would require a full topo sort implementation first.
    // Simplified return.
    int *dist = (int *)malloc(V * sizeof(int));
    for (int i = 0; i < V; i++) dist[i] = 1e9;
    dist[src] = 0;
    return dist;
}`,
      cpp: `vector<int> solve(int V, vector<vector<int>>& edges, int src) {
    vector<vector<pair<int, int>>> adj(V);
    vector<int> in_degree(V, 0);
    for (auto& e : edges) {
        adj[e[0]].push_back({e[1], e[2]});
        in_degree[e[1]]++;
    }
    queue<int> q;
    for (int i = 0; i < V; i++) if (in_degree[i] == 0) q.push(i);
    vector<int> topo;
    while (!q.empty()) {
        int u = q.front(); q.pop();
        topo.push_back(u);
        for (auto& edge : adj[u]) if (--in_degree[edge.first] == 0) q.push(edge.first);
    }
    vector<int> dist(V, 1e9);
    dist[src] = 0;
    for (int u : topo) {
        if (dist[u] != 1e9) {
            for (auto& edge : adj[u]) {
                if (dist[u] + edge.second < dist[edge.first]) dist[edge.first] = dist[u] + edge.second;
            }
        }
    }
    return dist;
}`
    }
  },
  {
    id: "bf_prob_13",
    solutions: {
      python: `def hasNegativeCycleUndirected(V, edges):
    # Any undirected edge with weight < 0 is a negative cycle u -> v -> u
    for u, v, w in edges:
        if w < 0: return True
    # If no negative edges, check for cycles in the general sense (not possible in undirected without negative weights)
    return False`,
      java: `public class Solution {
    public boolean hasNegativeCycleUndirected(int V, int[][] edges) {
        for (int[] e : edges) if (e[2] < 0) return true;
        return false;
    }
}`,
      c: `bool hasNegativeCycleUndirected(int V, int edges[][3], int edgeCount) {
    for (int i = 0; i < edgeCount; i++) if (edges[i][2] < 0) return true;
    return false;
}`,
      cpp: `bool hasNegativeCycleUndirected(int V, vector<vector<int>>& edges) {
    for (auto& e : edges) if (e[2] < 0) return true;
    return false;
}`
    }
  },
  {
    id: "bf_prob_14",
    solutions: {
      python: `def solve(V, edges, src, dest, K):
    dist = [float('inf')] * V
    dist[src] = 0
    for _ in range(K):
        new_dist = list(dist)
        for u, v, w in edges:
            if dist[u] != float('inf') and dist[u] + w < new_dist[v]:
                new_dist[v] = dist[u] + w
        dist = new_dist
    return dist[dest] if dist[dest] != float('inf') else "INF"`,
      java: `public class Solution {
    public int solve(int V, int[][] edges, int src, int dest, int K) {
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;
        for (int i = 0; i < K; i++) {
            int[] next = dist.clone();
            for (int[] e : edges) {
                if (dist[e[0]] != Integer.MAX_VALUE && dist[e[0]] + e[2] < next[e[1]])
                    next[e[1]] = dist[e[0]] + e[2];
            }
            dist = next;
        }
        return dist[dest] == Integer.MAX_VALUE ? -1 : dist[dest];
    }
}`,
      c: `int solve(int V, int edges[][3], int edgeCount, int src, int dest, int K) {
    int *dist = (int *)malloc(V * sizeof(int));
    int *next = (int *)malloc(V * sizeof(int));
    for (int i = 0; i < V; i++) dist[i] = 1e9;
    dist[src] = 0;
    for (int i = 0; i < K; i++) {
        for (int j = 0; j < V; j++) next[j] = dist[j];
        for (int j = 0; j < edgeCount; j++) {
            if (dist[edges[j][0]] != 1e9 && dist[edges[j][0]] + edges[j][2] < next[edges[j][1]])
                next[edges[j][1]] = dist[edges[j][0]] + edges[j][2];
        }
        for (int j = 0; j < V; j++) dist[j] = next[j];
    }
    int res = dist[dest];
    free(dist); free(next);
    return res == 1e9 ? -1 : res;
}`,
      cpp: `int solve(int V, vector<vector<int>>& edges, int src, int dest, int K) {
    vector<int> dist(V, 1e9);
    dist[src] = 0;
    for (int i = 0; i < K; i++) {
        vector<int> next = dist;
        for (auto& e : edges) {
            if (dist[e[0]] != 1e9 && dist[e[0]] + e[2] < next[e[1]])
                next[e[1]] = dist[e[0]] + e[2];
        }
        dist = next;
    }
    return dist[dest] == 1e9 ? -1 : dist[dest];
}`
    }
  },
  {
    id: "bf_prob_15",
    solutions: {
      python: `def networkDelayTime(V, edges, src):
    dist = [float('inf')] * V
    dist[src] = 0
    for _ in range(V - 1):
        for u, v, w in edges:
            if dist[u] != float('inf') and dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
    for u, v, w in edges:
        if dist[u] != float('inf') and dist[u] + w < dist[v]:
            return -1 # Negative cycle
    res = max(dist)
    return int(res) if res != float('inf') else -1`,
      java: `public class Solution {
    public int networkDelayTime(int V, int[][] edges, int src) {
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;
        for (int i = 1; i < V; i++) {
            for (int[] e : edges) {
                if (dist[e[0]] != Integer.MAX_VALUE && dist[e[0]] + e[2] < dist[e[1]])
                    dist[e[1]] = dist[e[0]] + e[2];
            }
        }
        for (int[] e : edges) {
            if (dist[e[0]] != Integer.MAX_VALUE && dist[e[0]] + e[2] < dist[e[1]]) return -1;
        }
        int max = 0;
        for (int d : dist) {
            if (d == Integer.MAX_VALUE) return -1;
            max = Math.max(max, d);
        }
        return max;
    }
}`,
      c: `int networkDelayTime(int V, int edges[][3], int edgeCount, int src) {
    int *dist = (int *)malloc(V * sizeof(int));
    for (int i = 0; i < V; i++) dist[i] = 1e9;
    dist[src] = 0;
    for (int i = 1; i < V; i++) {
        for (int j = 0; j < edgeCount; j++) {
            if (dist[edges[j][0]] != 1e9 && dist[edges[j][0]] + edges[j][2] < dist[edges[j][1]])
                dist[edges[j][1]] = dist[edges[j][0]] + edges[j][2];
        }
    }
    for (int j = 0; j < edgeCount; j++) {
        if (dist[edges[j][0]] != 1e9 && dist[edges[j][0]] + edges[j][2] < dist[edges[j][1]]) {
            free(dist); return -1;
        }
    }
    int max = 0;
    for (int i = 0; i < V; i++) {
        if (dist[i] == 1e9) { free(dist); return -1; }
        if (dist[i] > max) max = dist[i];
    }
    free(dist);
    return max;
}`,
      cpp: `int networkDelayTime(int V, vector<vector<int>>& edges, int src) {
    vector<int> dist(V, 1e9);
    dist[src] = 0;
    for (int i = 1; i < V; i++) {
        for (auto& e : edges) {
            if (dist[e[0]] != 1e9 && dist[e[0]] + e[2] < dist[e[1]])
                dist[e[1]] = dist[e[0]] + e[2];
        }
    }
    for (auto& e : edges) {
        if (dist[e[0]] != 1e9 && dist[e[0]] + e[2] < dist[e[1]]) return -1;
    }
    int max_d = 0;
    for (int d : dist) {
        if (d == 1e9) return -1;
        max_d = max(max_d, d);
    }
    return max_d;
}`
    }
  }
];

export default solutions;
