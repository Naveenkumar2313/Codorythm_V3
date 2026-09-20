const codeSnippets = {
  python: `import heapq

def prims_algorithm(num_nodes, adj):
    # adj is represented as an adjacency list: adj[u] = [(v, weight), ...]
    # key[i] stores the minimum weight edge to connect node i to the MST
    keys = [float('inf')] * num_nodes
    parent = [-1] * num_nodes
    visited = [False] * num_nodes

    # Start from node 0
    keys[0] = 0
    # Priority Queue stores (key, node)
    pq = [(0, 0)]

    mst_edges = []

    while pq:
        # Extract the vertex with the minimum key
        curr_key, u = heapq.heappop(pq)

        if visited[u]:
            continue

        visited[u] = True
        # If it's not the root, add the edge to the MST
        if parent[u] != -1:
            mst_edges.append((parent[u], u, keys[u]))

        for v, weight in adj[u]:
            if not visited[v] and weight < keys[v]:
                keys[v] = weight
                parent[v] = u
                heapq.heappush(pq, (keys[v], v))

    return mst_edges

# Example Usage
num_nodes = 5
adj = [
    [(1, 2), (3, 6)],           # Node 0
    [(0, 2), (2, 3), (3, 8), (4, 5)], # Node 1
    [(1, 3), (4, 7)],           # Node 2
    [(0, 6), (1, 8), (4, 9)],   # Node 3
    [(1, 5), (2, 7), (3, 9)]    # Node 4
]
print("Edges in MST:", prims_algorithm(num_nodes, adj))`,
  java: `import java.util.*;

public class PrimsAlgorithm {
    static class Edge {
        int dest, weight;
        Edge(int d, int w) { dest = d; weight = w; }
    }

    static class Node implements Comparable<Node> {
        int id, key;
        Node(int i, int k) { id = i; key = k; }
        public int compareTo(Node other) { return this.key - other.key; }
    }

    public static void solve(int numNodes, List<List<Edge>> adj) {
        int[] parent = new int[numNodes];
        int[] keys = new int[numNodes];
        boolean[] visited = new boolean[numNodes];
        Arrays.fill(keys, Integer.MAX_VALUE);
        Arrays.fill(parent, -1);

        PriorityQueue<Node> pq = new PriorityQueue<>();
        keys[0] = 0;
        pq.add(new Node(0, 0));

        while (!pq.isEmpty()) {
            Node curr = pq.poll();
            int u = curr.id;

            if (visited[u]) continue;
            visited[u] = true;

            for (Edge e : adj.get(u)) {
                if (!visited[e.dest] && e.weight < keys[e.dest]) {
                    keys[e.dest] = e.weight;
                    parent[e.dest] = u;
                    pq.add(new Node(e.dest, keys[e.dest]));
                }
            }
        }

        System.out.println("Edge \tWeight");
        for (int i = 1; i < numNodes; i++) {
            System.out.println(parent[i] + " - " + i + "\\t" + keys[i]);
        }
    }

    public static void main(String[] args) {
        int V = 5;
        List<List<Edge>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) adj.add(new ArrayList<>());
        adj.get(0).add(new Edge(1, 2)); adj.get(0).add(new Edge(3, 6));
        adj.get(1).add(new Edge(0, 2)); adj.get(1).add(new Edge(2, 3)); adj.get(1).add(new Edge(3, 8)); adj.get(1).add(new Edge(4, 5));
        adj.get(2).add(new Edge(1, 3)); adj.get(2).add(new Edge(4, 7));
        adj.get(3).add(new Edge(0, 6)); adj.get(3).add(new Edge(1, 8)); adj.get(3).add(new Edge(4, 9));
        adj.get(4).add(new Edge(1, 5)); adj.get(4).add(new Edge(2, 7)); adj.get(4).add(new Edge(3, 9));
        solve(V, adj);
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <limits.h>

#define V 5

int graph[V][V] = {
    {0, 2, 0, 6, 0},
    {2, 0, 3, 8, 5},
    {0, 3, 0, 0, 7},
    {6, 8, 0, 0, 9},
    {0, 5, 7, 9, 0}
};

void primsMST() {
    int parent[V];
    int key[V];
    bool mstSet[V];

    for (int i = 0; i < V; i++) {
        key[i] = INT_MAX;
        mstSet[i] = false;
    }

    key[0] = 0;
    parent[0] = -1;

    for (int count = 0; count < V - 1; count++) {
        int min = INT_MAX, u;

        for (int v = 0; v < V; v++) {
            if (!mstSet[v] && key[v] < min) {
                min = key[v], u = v;
            }
        }

        mstSet[u] = true;

        for (int v = 0; v < V; v++) {
            if (graph[u][v] && !mstSet[v] && graph[u][v] < key[v]) {
                parent[v] = u;
                key[v] = graph[u][v];
            }
        }
    }

    printf("Edge \\tWeight\\n");
    for (int i = 1; i < V; i++)
        printf("%d - %d\\t%d\\n", parent[i], i, graph[i][parent[i]]);
}

int main() {
    primsMST();
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <tuple>

using namespace std;

typedef pair<int, int> pii;

void primsAlgorithm(int V, vector<vector<pii>>& adj) {
    priority_queue<pii, vector<pii>, greater<pii>> pq;
    vector<int> key(V, 1e9);
    vector<int> parent(V, -1);
    vector<bool> visited(V, false);

    key[0] = 0;
    pq.push({0, 0});

    while (!pq.empty()) {
        int u = pq.top().second;
        pq.pop();

        if (visited[u]) continue;
        visited[u] = true;

        for (auto& edge : adj[u]) {
            int v = edge.first;
            int weight = edge.second;
            if (!visited[v] && weight < key[v]) {
                key[v] = weight;
                parent[v] = u;
                pq.push({key[v], v});
            }
        }
    }

    cout << "Edge \\tWeight" << endl;
    for (int i = 1; i < V; i++) {
        cout << parent[i] << " - " << i << "\\t" << key[i] << endl;
    }
}

int main() {
    int V = 5;
    vector<vector<pii>> adj(V);
    adj[0].push_back({1, 2}); adj[0].push_back({3, 6});
    adj[1].push_back({0, 2}); adj[1].push_back({2, 3}); adj[1].push_back({3, 8}); adj[1].push_back({4, 5});
    adj[2].push_back({1, 3}); adj[2].push_back({4, 7});
    adj[3].push_back({0, 6}); adj[3].push_back({1, 8}); adj[3].push_back({4, 9});
    adj[4].push_back({1, 5}); adj[4].push_back({2, 7}); adj[4].push_back({3, 9});
    primsAlgorithm(V, adj);
    return 0;
}`
};

export default codeSnippets;
