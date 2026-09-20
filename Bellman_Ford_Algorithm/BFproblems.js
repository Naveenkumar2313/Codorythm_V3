const problems = [
  {
    id: "bf_prob_1",
    title: "Single Source Shortest Path",
    difficulty: "Easy",
    description: "Implement the Bellman-Ford algorithm to find the shortest distances from a given source vertex to all other vertices in a directed graph with negative edge weights. Return the distances as an array.",
    constraints: "Vertices: 1 to 1000, Edges: 1 to 5000, Weights: -10^4 to 10^4",
    examples: [
      {
        input: "V = 3, edges = [[0, 1, -1], [1, 2, -1], [0, 2, -1]], src = 0",
        output: "[0, -1, -2]",
        explanation: "Path 0 -> 1 -> 2 is shorter than 0 -> 2."
      }
    ],
    testCases: [
      { input: { V: 3, edges: [[0, 1, -1], [1, 2, -1], [0, 2, -1]], src: 0 }, output: "[0, -1, -2]" },
      { input: { V: 2, edges: [[0, 1, 5]], src: 0 }, output: "[0, 5]" },
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, 1]], src: 0 }, output: "[0, 1, 2]" }
    ],
    starterCode: {
      python: "def solve(V, edges, src):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int[] solve(int V, int[][] edges, int src) {\n        // Write your code here\n        return new int[0];\n    }\n}",
      c: "int* solve(int V, int edges[][3], int edgesCount, int src) {\n    // Write your code here\n}",
      cpp: "vector<int> solve(int V, vector<vector<int>>& edges, int src) {\n    // Write your code here\n    return {};\n}"
    }
  },
  {
    id: "bf_prob_2",
    title: "Negative Cycle Detection",
    difficulty: "Easy",
    description: "Given a directed graph with weighted edges, determine if the graph contains a negative weight cycle. Return true if a negative cycle exists, otherwise false.",
    constraints: "Vertices: 1 to 1000, Edges: 1 to 5000",
    examples: [
      {
        input: "V = 3, edges = [[0, 1, 1], [1, 2, -5], [2, 0, 1]]",
        output: "true",
        explanation: "Cycle 0 -> 1 -> 2 -> 0 has total weight 1 - 5 + 1 = -3."
      }
    ],
    testCases: [
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, -5], [2, 0, 1]] }, output: "true" },
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, 1], [2, 0, 1]] }, output: "false" },
      { input: { V: 2, edges: [[0, 1, -1], [1, 0, -1]] }, output: "true" }
    ],
    starterCode: {
      python: "def hasNegativeCycle(V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public boolean hasNegativeCycle(int V, int[][] edges) {\n        // Write your code here\n        return false;\n    }\n}",
      c: "bool hasNegativeCycle(int V, int edges[][3], int edgesCount) {\n    // Write your code here\n}",
      cpp: "bool hasNegativeCycle(int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return false;\n}"
    }
  },
  {
    id: "bf_prob_3",
    title: "Path with Maximum Profit",
    difficulty: "Easy",
    description: "You are given a graph where edges represent profit (positive) or loss (negative). Find the path from source to destination that maximizes profit. Since we want the maximum, we can negate all weights and use Bellman-Ford to find the shortest path.",
    constraints: "Vertices: 1 to 100, Edges: 1 to 500",
    examples: [
      {
        input: "V = 3, edges = [[0, 1, 10], [1, 2, 20], [0, 2, 25]], src = 0, dest = 2",
        output: "30",
        explanation: "Path 0 -> 1 -> 2 gives 10 + 20 = 30."
      }
    ],
    testCases: [
      { input: { V: 3, edges: [[0, 1, 10], [1, 2, 20], [0, 2, 25]], src: 0, dest: 2 }, output: "30" },
      { input: { V: 2, edges: [[0, 1, -5]], src: 0, dest: 1 }, output: "-5" },
      { input: { V: 3, edges: [[0, 1, 5], [1, 2, 5], [0, 2, 2]], src: 0, dest: 2 }, output: "10" }
    ],
    starterCode: {
      python: "def maxProfit(V, edges, src, dest):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int maxProfit(int V, int[][] edges, int src, int dest) {\n        // Write your code here\n        return 0;\n    }\n}",
      c: "int maxProfit(int V, int edges[][3], int edgeCount, int src, int dest) {\n    // Write your code here\n}",
      cpp: "int maxProfit(int V, vector<vector<int>>& edges, int src, int dest) {\n    // Write your code here\n    return 0;\n}"
    }
  },
  {
    id: "bf_prob_4",
    title: "Cheapest Flight with Negative Costs",
    difficulty: "Easy",
    description: "Find the cheapest flight from source to destination. Some flights might have rebates (negative costs).",
    constraints: "Cities: 1 to 100, Flights: 1 to 1000",
    examples: [
      {
        input: "cities = 3, flights = [[0, 1, 100], [1, 2, -50], [0, 2, 60]], src = 0, dest = 2",
        output: "50",
        explanation: "Path 0 -> 1 -> 2 costs 100 - 50 = 50."
      }
    ],
    testCases: [
      { input: { cities: 3, flights: [[0, 1, 100], [1, 2, -50], [0, 2, 60]], src: 0, dest: 2 }, output: "50" },
      { input: { cities: 2, flights: [[0, 1, 10]], src: 0, dest: 1 }, output: "10" },
      { input: { cities: 3, flights: [[0, 1, 10], [1, 2, 10]], src: 0, dest: 2 }, output: "20" }
    ],
    starterCode: {
      python: "def cheapestFlight(cities, flights, src, dest):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int cheapestFlight(int cities, int[][] flights, int src, int dest) {\n        // Write your code here\n        return 0;\n    }\n}",
      c: "int cheapestFlight(int cities, int flights[][3], int flightCount, int src, int dest) {\n    // Write your code here\n}",
      cpp: "int cheapestFlight(int cities, vector<vector<int>>& flights, int src, int dest) {\n    // Write your code here\n    return 0;\n}"
    }
  },
  {
    id: "bf_prob_5",
    title: "Distance to All Nodes with Negative Edges",
    difficulty: "Easy",
    description: "Given a graph, calculate distances from source to all nodes. If a node is unreachable, mark as INF. If a negative cycle exists, return an empty array.",
    constraints: "V: 1 to 500, E: 1 to 2000",
    examples: [
      {
        input: "V = 3, edges = [[0, 1, 2], [1, 2, 3]], src = 0",
        output: "[0, 2, 5]",
        explanation: "All nodes reachable with positive weights."
      }
    ],
    testCases: [
      { input: { V: 3, edges: [[0, 1, 2], [1, 2, 3]], src: 0 }, output: "[0, 2, 5]" },
      { input: { V: 2, edges: [[0, 1, -1], [1, 0, -1]], src: 0 }, output: "[]" },
      { input: { V: 3, edges: [[0, 1, 1]], src: 0 }, output: "[0, 1, INF]" }
    ],
    starterCode: {
      python: "def solve(V, edges, src):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int[] solve(int V, int[][] edges, int src) {\n        // Write your code here\n        return new int[0];\n    }\n}",
      c: "int* solve(int V, int edges[][3], int edgesCount, int src, int* resSize) {\n    // Write your code here\n}",
      cpp: "vector<int> solve(int V, vector<vector<int>>& edges, int src) {\n    // Write your code here\n    return {};\n}"
    }
  },
  {
    id: "bf_prob_6",
    title: "Omnibus Shortest Path (Negative Weights)",
    difficulty: "Medium",
    description: "Find the shortest path from source to all vertices. If any vertex is part of or reachable from a negative cycle, its distance should be marked as -Infinity.",
    constraints: "V: 1 to 2000, E: 1 to 10000",
    examples: [
      {
        input: "V = 4, edges = [[0, 1, 1], [1, 2, -1], [2, 1, -1], [2, 3, 1]], src = 0",
        output: "[0, -INF, -INF, -INF]",
        explanation: "Cycle 1 -> 2 -> 1 is negative. Node 3 is reachable from this cycle."
      }
    ],
    testCases: [
      { input: { V: 4, edges: [[0, 1, 1], [1, 2, -1], [2, 1, -1], [2, 3, 1]], src: 0 }, output: "[0, -INF, -INF, -INF]" },
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, 1]], src: 0 }, output: "[0, 1, 2]" },
      { input: { V: 2, edges: [[0, 1, -1]], src: 0 }, output: "[0, -1]" }
    ],
    starterCode: {
      python: "def solve(V, edges, src):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public String[] solve(int V, int[][] edges, int src) {\n        // Write your code here\n        return new String[0];\n    }\n}",
      c: "void solve(int V, int edges[][3], int edgeCount, int src) {\n    // Write your code here\n}",
      cpp: "vector<string> solve(int V, vector<vector<int>>& edges, int src) {\n    // Write your code here\n    return {};\n}"
    }
  },
  {
    id: "bf_prob_7",
    title: "Arbitrage Opportunity Detection",
    difficulty: "Medium",
    description: "Given a list of currency exchange rates, determine if an arbitrage opportunity exists. An arbitrage exists if you can start with 1 unit of currency and end up with more than 1 unit by exchanging through a sequence of currencies.",
    constraints: "Currencies: 1 to 100, Rates: 1 to 10000",
    examples: [
      {
        input: "rates = [[0, 1, 0.8], [1, 2, 1.2], [2, 0, 1.1]]",
        output: "true",
        explanation: "Product 0.8 * 1.2 * 1.1 = 1.056 > 1.0."
      }
    ],
    testCases: [
      { input: { rates: [[0, 1, 0.8], [1, 2, 1.2], [2, 0, 1.1]] }, output: "true" },
      { input: { rates: [[0, 1, 0.5], [1, 0, 1.5]] }, output: "false" },
      { input: { rates: [[0, 1, 1.0], [1, 0, 1.0]] }, output: "false" }
    ],
    starterCode: {
      python: "def hasArbitrage(numCurrencies, rates):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public boolean hasArbitrage(int numCurrencies, double[][] rates) {\n        // Write your code here\n        return false;\n    }\n}",
      c: "bool hasArbitrage(int numCurrencies, double rates[][3], int ratesCount) {\n    // Write your code here\n}",
      cpp: "bool hasArbitrage(int numCurrencies, vector<vector<double>>& rates) {\n    // Write your code here\n    return false;\n}"
    }
  },
  {
    id: "bf_prob_8",
    title: "Shortest Path with exactly K edges",
    difficulty: "Medium",
    description: "Find the shortest path from source to destination using exactly K edges. If no such path exists, return infinity.",
    constraints: "V: 1 to 100, E: 1 to 1000, K: 1 to V",
    examples: [
      {
        input: "V = 3, edges = [[0, 1, 1], [1, 2, 1], [0, 2, 5]], src = 0, dest = 2, K = 2",
        output: "2",
        explanation: "Path 0 -> 1 -> 2 has exactly 2 edges and total weight 2."
      }
    ],
    testCases: [
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, 1], [0, 2, 5]], src: 0, dest: 2, K: 2 }, output: "2" },
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, 1], [0, 2, 5]], src: 0, dest: 2, K: 1 }, output: "5" },
      { input: { V: 3, edges: [[0, 1, 1]], src: 0, dest: 2, K: 1 }, output: "INF" }
    ],
    starterCode: {
      python: "def shortestPathKEdges(V, edges, src, dest, K):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int shortestPathKEdges(int V, int[][] edges, int src, int dest, int K) {\n        // Write your code here\n        return -1;\n    }\n}",
      c: "int shortestPathKEdges(int V, int edges[][3], int edgeCount, int src, int dest, int K) {\n    // Write your code here\n}",
      cpp: "int shortestPathKEdges(int V, vector<vector<int>>& edges, int src, int dest, int K) {\n    // Write your code here\n    return -1;\n}"
    }
  },
  {
    id: "bf_prob_9",
    title: "Single Source Shortest Path (Disconnected Graph)",
    difficulty: "Medium",
    description: "Implement Bellman-Ford for a graph that might be disconnected. Return distances from source. For nodes unreachable from source, distance should be INF. Detect negative cycles only among nodes reachable from source.",
    constraints: "V: 1 to 1000, E: 1 to 5000",
    examples: [
      {
        input: "V = 4, edges = [[0, 1, 1], [2, 3, -1]], src = 0",
        output: "[0, 1, INF, INF]",
        explanation: "Node 2 and 3 are disconnected from 0."
      }
    ],
    testCases: [
      { input: { V: 4, edges: [[0, 1, 1], [2, 3, -1]], src: 0 }, output: "[0, 1, INF, INF]" },
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, -5], [2, 1, 1]], src: 0 }, output: "[]" },
      { input: { V: 2, edges: [], src: 0 }, output: "[0, INF]" }
    ],
    starterCode: {
      python: "def solve(V, edges, src):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int[] solve(int V, int[][] edges, int src) {\n        // Write your code here\n        return new int[0];\n    }\n}",
      c: "int* solve(int V, int edges[][3], int edgesCount, int src, int* resSize) {\n    // Write your code here\n}",
      cpp: "vector<int> solve(int V, vector<vector<int>>& edges, int src) {\n    // Write your code here\n    return {};\n}"
    }
  },
  {
    id: "bf_prob_10",
    title: "Find Path with Negative Weights (Return Path)",
    difficulty: "Medium",
    description: "Given a graph with negative edges, find the shortest path from source to destination. Return the actual path as a list of vertices. If multiple exist, return any. If a negative cycle is on the path, return empty.",
    constraints: "V: 1 to 100, E: 1 to 500",
    examples: [
      {
        input: "V = 4, edges = [[0, 1, 1], [1, 2, -2], [2, 3, 1], [0, 3, 5]], src = 0, dest = 3",
        output: "[0, 1, 2, 3]",
        explanation: "Path 0 -> 1 -> 2 -> 3 costs 1 - 2 + 1 = 0, which is less than 5."
      }
    ],
    testCases: [
      { input: { V: 4, edges: [[0, 1, 1], [1, 2, -2], [2, 3, 1], [0, 3, 5]], src: 0, dest: 3 }, output: "[0, 1, 2, 3]" },
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, 1]], src: 0, dest: 2 }, output: "[0, 1, 2]" },
      { input: { V: 3, edges: [[0, 1, -1], [1, 0, -1]], src: 0, dest: 2 }, output: "[]" }
    ],
    starterCode: {
      python: "def findPath(V, edges, src, dest):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public List<Integer> findPath(int V, int[][] edges, int src, int dest) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}",
      c: "int* findPath(int V, int edges[][3], int edgeCount, int src, int dest, int* pathSize) {\n    // Write your code here\n}",
      cpp: "vector<int> findPath(int V, vector<vector<int>>& edges, int src, int dest) {\n    // Write your code here\n    return {};\n}"
    }
  },
  {
    id: "bf_prob_11",
    title: "Bellman-Ford for All-Pairs (Source Iteration)",
    difficulty: "Hard",
    description: "For a small graph, find the shortest paths between all pairs of vertices using Bellman-Ford by running it for each vertex as a source. Detect if any pair is affected by a negative cycle.",
    constraints: "V: 1 to 50, E: 1 to 500",
    examples: [
      {
        input: "V = 3, edges = [[0, 1, 1], [1, 2, 1], [0, 2, 5]]",
        output: "[[0, 1, 2], [INF, 0, 1], [INF, INF, 0]]",
        explanation: "Shortest paths for each source node."
      }
    ],
    testCases: [
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, 1], [0, 2, 5]] }, output: "[[0, 1, 2], [INF, 0, 1], [INF, INF, 0]]" },
      { input: { V: 2, edges: [[0, 1, -1], [1, 0, -1]] }, output: "[]" },
      { input: { V: 2, edges: [[0, 1, 5]] }, output: "[[0, 5], [INF, 0]]" }
    ],
    starterCode: {
      python: "def allPairsShortest(V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int[][] allPairsShortest(int V, int[][] edges) {\n        // Write your code here\n        return new int[0][0];\n    }\n}",
      c: "int** allPairsShortest(int V, int edges[][3], int edgeCount) {\n    // Write your code here\n}",
      cpp: "vector<vector<int>> allPairsShortest(int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return {};\n}"
    }
  },
  {
    id: "bf_prob_12",
    title: "Shortest Path in a DAG with Negative Edges",
    difficulty: "Hard",
    description: "Given a DAG with negative edges, find the shortest path from source to all vertices. Although Bellman-Ford works, can you use Topological Sort to do it in O(V + E)? Implement the optimized version.",
    constraints: "V: 1 to 10^4, E: 1 to 10^5",
    examples: [
      {
        input: "V = 3, edges = [[0, 1, -1], [1, 2, -1], [0, 2, -1]], src = 0",
        output: "[0, -1, -2]",
        explanation: "Topological sort allows linear time shortest path in DAGs."
      }
    ],
    testCases: [
      { input: { V: 3, edges: [[0, 1, -1], [1, 2, -1], [0, 2, -1]], src: 0 }, output: "[0, -1, -2]" },
      { input: { V: 2, edges: [[0, 1, 5]], src: 0 }, output: "[0, 5]" },
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, 1]], src: 0 }, output: "[0, 1, 2]" }
    ],
    starterCode: {
      python: "def solve(V, edges, src):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int[] solve(int V, int[][] edges, int src) {\n        // Write your code here\n        return new int[0];\n    }\n}",
      c: "int* solve(int V, int edges[][3], int edgesCount, int src) {\n    // Write your code here\n}",
      cpp: "vector<int> solve(int V, vector<vector<int>>& edges, int src) {\n    // Write your code here\n    return {};\n}"
    }
  },
  {
    id: "bf_prob_13",
    title: "Detecting Negative Cycles in Undirected Graphs",
    difficulty: "Hard",
    description: "Given an undirected graph with weights, determine if it contains a negative cycle. Note: An undirected edge (u, v, w) with w < 0 is effectively a negative cycle u -> v -> u.",
    constraints: "V: 1 to 1000, E: 1 to 5000",
    examples: [
      {
        input: "V = 2, edges = [[0, 1, -1]]",
        output: "true",
        explanation: "Undirected edge with negative weight is a negative cycle."
      }
    ],
    testCases: [
      { input: { V: 2, edges: [[0, 1, -1]] }, output: "true" },
      { input: { V: 2, edges: [[0, 1, 1]] }, output: "false" },
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, -5], [2, 0, 1]] }, output: "true" }
    ],
    starterCode: {
      python: "def hasNegativeCycleUndirected(V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public boolean hasNegativeCycleUndirected(int V, int[][] edges) {\n        // Write your code here\n        return false;\n    }\n}",
      c: "bool hasNegativeCycleUndirected(int V, int edges[][3], int edgeCount) {\n    // Write your code here\n}",
      cpp: "bool hasNegativeCycleUndirected(int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return false;\n}"
    }
  },
  {
    id: "bf_prob_14",
    title: "Constrained Shortest Path",
    difficulty: "Hard",
    description: "Find the shortest path from source to destination such that the path contains at most K edges and can handle negative weights. Return the distance.",
    constraints: "V: 1 to 100, E: 1 to 1000, K: 1 to V",
    examples: [
      {
        input: "V = 3, edges = [[0, 1, 1], [1, 2, 1], [0, 2, 5]], src = 0, dest = 2, K = 1",
        output: "5",
        explanation: "With only 1 edge, the only path is 0 -> 2 with weight 5."
      }
    ],
    testCases: [
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, 1], [0, 2, 5]], src: 0, dest: 2, K: 1 }, output: "5" },
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, 1], [0, 2, 5]], src: 0, dest: 2, K: 2 }, output: "2" },
      { input: { V: 2, edges: [], src: 0, dest: 1, K: 1 }, output: "INF" }
    ],
    starterCode: {
      python: "def solve(V, edges, src, dest, K):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int solve(int V, int[][] edges, int src, int dest, int K) {\n        // Write your code here\n        return -1;\n    }\n}",
      c: "int solve(int V, int edges[][3], int edgeCount, int src, int dest, int K) {\n    // Write your code here\n}",
      cpp: "int solve(int V, vector<vector<int>>& edges, int src, int dest, int K) {\n    // Write your code here\n    return -1;\n}"
    }
  },
  {
    id: "bf_prob_15",
    title: "Network Delay Time with Negative Edges",
    difficulty: "Hard",
    description: "A signal is sent from a source node. Some edges are 'boosters' (negative weight). Find the time it takes for all nodes to receive the signal. If a node is unreachable or a negative cycle exists, return -1.",
    constraints: "V: 1 to 500, E: 1 to 2000",
    examples: [
      {
        input: "V = 3, edges = [[0, 1, 1], [1, 2, 1]], src = 0",
        output: "2",
        explanation: "Node 2 receives the signal last at time 2."
      }
    ],
    testCases: [
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, 1]], src: 0 }, output: "2" },
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, -1], [2, 1, -1]], src: 0 }, output: "-1" },
      { input: { V: 2, edges: [], src: 0 }, output: "-1" }
    ],
    starterCode: {
      python: "def networkDelayTime(V, edges, src):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int networkDelayTime(int V, int[][] edges, int src) {\n        // Write your code here\n        return -1;\n    }\n}",
      c: "int networkDelayTime(int V, int edges[][3], int edgeCount, int src) {\n    // Write your code here\n}",
      cpp: "int networkDelayTime(int V, vector<vector<int>>& edges, int src) {\n    // Write your code here\n    return -1;\n}"
    }
  }
];

export default problems;
