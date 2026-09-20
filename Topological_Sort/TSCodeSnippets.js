const codeSnippets = {
  python: `from collections import deque, defaultdict

def topological_sort_kahn(num_nodes, edges):
    # Kahn's Algorithm (BFS)
    adj = defaultdict(list)
    in_degree = [0] * num_nodes

    for u, v in edges:
        adj[u].append(v)
        in_degree[v] += 1

    queue = deque([i for i in range(num_nodes) if in_degree[i] == 0])
    topo_order = []

    while queue:
        u = queue.popleft()
        topo_order.append(u)

        for v in adj[u]:
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)

    if len(topo_order) != num_nodes:
        return None  # Cycle detected
    return topo_order

def topological_sort_dfs(num_nodes, edges):
    # DFS-based approach
    adj = defaultdict(list)
    for u, v in edges:
        adj[u].append(v)

    visited = [False] * num_nodes
    stack = []

    def dfs(u):
        visited[u] = True
        for v in adj[u]:
            if not visited[v]:
                dfs(v)
        stack.append(u)

    for i in range(num_nodes):
        if not visited[i]:
            dfs(i)

    return stack[::-1]

# Example Usage
edges = [(5, 2), (5, 0), (4, 0), (4, 1), (2, 3), (3, 1)]
num_nodes = 6
print("Kahn's:", topological_sort_kahn(num_nodes, edges))
print("DFS:", topological_sort_dfs(num_nodes, edges))`,
  java: `import java.util.*;

public class TopologicalSort {
    public static List<Integer> kahnSort(int numNodes, List<int[]> edges) {
        List<Integer> topoOrder = new ArrayList<>();
        int[] inDegree = new int[numNodes];
        List<List<Integer>> adj = new ArrayList<>();

        for (int i = 0; i < numNodes; i++) adj.add(new ArrayList<>());
        for (int[] edge : edges) {
            adj.get(edge[0]).add(edge[1]);
            inDegree[edge[1]]++;
        }

        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < numNodes; i++) {
            if (inDegree[i] == 0) queue.add(i);
        }

        while (!queue.isEmpty()) {
            int u = queue.poll();
            topoOrder.add(u);
            for (int v : adj.get(u)) {
                inDegree[v]--;
                if (inDegree[v] == 0) queue.add(v);
            }
        }

        return topoOrder.size() == numNodes ? topoOrder : null; // null if cycle
    }

    public static List<Integer> dfsSort(int numNodes, List<int[]> edges) {
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < numNodes; i++) adj.add(new ArrayList<>());
        for (int[] edge : edges) adj.get(edge[0]).add(edge[1]);

        boolean[] visited = new boolean[numNodes];
        Stack<Integer> stack = new Stack<>();

        for (int i = 0; i < numNodes; i++) {
            if (!visited[i]) dfs(i, adj, visited, stack);
        }

        List<Integer> result = new ArrayList<>();
        while (!stack.isEmpty()) result.add(stack.pop());
        return result;
    }

    private static void dfs(int u, List<List<Integer>> adj, boolean[] visited, Stack<Integer> stack) {
        visited[u] = true;
        for (int v : adj.get(u)) {
            if (!visited[v]) dfs(v, adj, visited, stack);
        }
        stack.push(u);
    }

    public static void main(String[] args) {
        List<int[]> edges = Arrays.asList(new int[]{5, 2}, new int[]{5, 0}, new int[]{4, 0}, new int[]{4, 1}, new int[]{2, 3}, new int[]{3, 1});
        System.out.println("Kahn's: " + kahnSort(6, edges));
        System.out.println("DFS: " + dfsSort(6, edges));
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

struct Node {
    int dest;
    struct Node* next;
};

struct AdjList {
    struct Node* head;
};

struct Graph {
    int V;
    struct AdjList* array;
};

struct Graph* createGraph(int V) {
    struct Graph* graph = (struct Graph*)malloc(sizeof(struct Graph));
    graph->V = V;
    graph->array = (struct AdjList*)malloc(V * sizeof(struct AdjList));
    for (int i = 0; i < V; ++i) graph->array[i].head = NULL;
    return graph;
}

void addEdge(struct Graph* graph, int src, int dest) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->dest = dest;
    newNode->next = graph->array[src].head;
    graph->array[src].head = newNode;
}

void kahnSort(struct Graph* graph) {
    int V = graph->V;
    int in_degree[V];
    for (int i = 0; i < V; i++) in_degree[i] = 0;

    for (int u = 0; u < V; u++) {
        struct Node* temp = graph->array[u].head;
        while (temp) {
            in_degree[temp->dest]++;
            temp = temp->next;
        }
    }

    int queue[V], front = 0, rear = 0;
    for (int i = 0; i < V; i++) {
        if (in_degree[i] == 0) queue[rear++] = i;
    }

    int count = 0;
    printf("Kahn's Order: ");
    while (front < rear) {
        int u = queue[front++];
        printf("%d ", u);
        count++;
        struct Node* temp = graph->array[u].head;
        while (temp) {
            if (--in_degree[temp->dest] == 0) queue[rear++] = temp->dest;
            temp = temp->next;
        }
    }
    if (count != V) printf("\\nCycle detected!");
    printf("\\n");
}

void dfsRecursive(int u, bool visited[], int stack[], int* top, struct Graph* graph) {
    visited[u] = true;
    struct Node* temp = graph->array[u].head;
    while (temp) {
        if (!visited[temp->dest]) dfsRecursive(temp->dest, visited, stack, top, graph);
        temp = temp->next;
    }
    stack[(*top)++] = u;
}

void dfsSort(struct Graph* graph) {
    int V = graph->V;
    bool visited[V];
    int stack[V];
    int top = 0;
    for (int i = 0; i < V; i++) visited[i] = false;

    for (int i = 0; i < V; i++) {
        if (!visited[i]) dfsRecursive(i, visited, stack, &top, graph);
    }

    printf("DFS Order: ");
    for (int i = V - 1; i >= 0; i--) printf("%d ", stack[i]);
    printf("\\n");
}

int main() {
    int V = 6;
    struct Graph* graph = createGraph(V);
    addEdge(graph, 5, 2); addEdge(graph, 5, 0); addEdge(graph, 4, 0);
    addEdge(graph, 4, 1); addEdge(graph, 2, 3); addEdge(graph, 3, 1);
    kahnSort(graph);
    dfsSort(graph);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <stack>
#include <algorithm>

using namespace std;

void kahnSort(int V, vector<pair<int, int>>& edges) {
    vector<int> in_degree(V, 0);
    vector<vector<int>> adj(V);
    for (auto& edge : edges) {
        adj[edge.first].push_back(edge.second);
        in_degree[edge.second]++;
    }

    queue<int> q;
    for (int i = 0; i < V; i++) {
        if (in_degree[i] == 0) q.push(i);
    }

    vector<int> topo;
    while (!q.empty()) {
        int u = q.front();
        q.pop();
        topo.push_back(u);
        for (int v : adj[u]) {
            if (--in_degree[v] == 0) q.push(v);
        }
    }

    if (topo.size() != V) cout << "Cycle detected!" << endl;
    else {
        cout << "Kahn's: ";
        for (int x : topo) cout << x << " ";
        cout << endl;
    }
}

void dfsVisit(int u, vector<vector<int>>& adj, vector<bool>& visited, stack<int>& s) {
    visited[u] = true;
    for (int v : adj[u]) {
        if (!visited[v]) dfsVisit(v, adj, visited, s);
    }
    s.push(u);
}

void dfsSort(int V, vector<pair<int, int>>& edges) {
    vector<vector<int>> adj(V);
    for (auto& edge : edges) adj[edge.first].push_back(edge.second);

    vector<bool> visited(V, false);
    stack<int> s;
    for (int i = 0; i < V; i++) {
        if (!visited[i]) dfsVisit(i, adj, visited, s);
    }

    cout << "DFS: ";
    while (!s.empty()) {
        cout << s.top() << " ";
        s.pop();
    }
    cout << endl;
}

int main() {
    int V = 6;
    vector<pair<int, int>> edges = {{5, 2}, {5, 0}, {4, 0}, {4, 1}, {2, 3}, {3, 1}};
    kahnSort(V, edges);
    dfsSort(V, edges);
    return 0;
}`
};

export default codeSnippets;
