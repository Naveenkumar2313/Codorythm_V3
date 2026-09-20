const problems = [
  {
    id: "prim_prob_1",
    title: "Basic MST Implementation",
    difficulty: "Easy",
    description: "Implement Prim's algorithm to find the Minimum Spanning Tree (MST) of a given connected, weighted, undirected graph. Return the total weight of the MST.",
    constraints: "Vertices: 2 to 1000, Edges: 1 to 5000, Weights: 1 to 10^4",
    examples: [
      {
        input: "V = 4, edges = [[0, 1, 10], [0, 2, 6], [0, 3, 5], [1, 3, 15], [2, 3, 4]]",
        output: "19",
        explanation: "MST edges: (0, 3, 5), (3, 2, 4), (0, 1, 10). Total = 5 + 4 + 10 = 19."
      }
    ],
    testCases: [
      { input: { V: 4, edges: [[0, 1, 10], [0, 2, 6], [0, 3, 5], [1, 3, 15], [2, 3, 4]] }, output: "19" },
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, 2], [0, 2, 3]] }, output: "3" },
      { input: { V: 2, edges: [[0, 1, 5]] }, output: "5" }
    ],
    starterCode: {
      python: "def solve(V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int solve(int V, int[][] edges) {\n        // Write your code here\n        return 0;\n    }\n}",
      c: "int solve(int V, int edges[][3], int edgeCount) {\n    // Write your code here\n}",
      cpp: "int solve(int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return 0;\n}"
    }
  },
  {
    id: "prim_prob_2",
    title: "Check if Edge is in MST",
    difficulty: "Easy",
    description: "Given a graph and a specific edge, determine if that edge MUST be part of every MST of the graph.",
    constraints: "Vertices: 2 to 500, Edges: 1 to 2000",
    examples: [
      {
        input: "V = 3, edges = [[0, 1, 1], [1, 2, 2], [0, 2, 3]], targetEdge = [0, 1]",
        output: "true",
        explanation: "Edge (0, 1) is the unique minimum edge connecting node 0 to the rest of the graph."
      }
    ],
    testCases: [
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, 2], [0, 2, 3]], targetEdge: [0, 1] }, output: "true" },
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, 1], [0, 2, 1]], targetEdge: [0, 1] }, output: "false" },
      { input: { V: 2, edges: [[0, 1, 5]], targetEdge: [0, 1] }, output: "true" }
    ],
    starterCode: {
      python: "def isEdgeInEveryMST(V, edges, targetEdge):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public boolean isEdgeInEveryMST(int V, int[][] edges, int[] targetEdge) {\n        // Write your code here\n        return false;\n    }\n}",
      c: "bool isEdgeInEveryMST(int V, int edges[][3], int edgeCount, int targetEdge[2]) {\n    // Write your code here\n}",
      cpp: "bool isEdgeInEveryMST(int V, vector<vector<int>>& edges, vector<int>& targetEdge) {\n    // Write your code here\n    return false;\n}"
    }
  },
  {
    id: "prim_prob_3",
    title: "Minimum Cost to Connect All Points",
    difficulty: "Easy",
    description: "Given points on a 2D plane, find the minimum cost to connect all points. The cost between two points is the Manhattan distance: |x1-x2| + |y1-y2|.",
    constraints: "Points: 1 to 1000",
    examples: [
      {
        input: "points = [[0,0],[2,2],[3,10],[-1,-3]]",
        output: "20",
        explanation: "Minimum cost to connect all points using MST."
      }
    ],
    testCases: [
      { input: { points: [[0,0],[2,2],[3,10],[-1,-3]] }, output: "20" },
      { input: { points: [[0,0],[0,1]] }, output: "1" },
      { input: { points: [[0,0]] }, output: "0" }
    ],
    starterCode: {
      python: "def minCostConnectPoints(points):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int minCostConnectPoints(int[][] points) {\n        // Write your code here\n        return 0;\n    }\n}",
      c: "int minCostConnectPoints(int points[][2], int pointsCount) {\n    // Write your code here\n}",
      cpp: "int minCostConnectPoints(vector<vector<int>>& points) {\n    // Write your code here\n    return 0;\n}"
    }
  },
  {
    id: "prim_prob_4",
    title: "Find MST Edges",
    difficulty: "Easy",
    description: "Implement Prim's algorithm and return the list of edges that form the MST. If multiple MSTs exist, return any.",
    constraints: "Vertices: 2 to 1000, Edges: 1 to 5000",
    examples: [
      {
        input: "V = 3, edges = [[0, 1, 1], [1, 2, 2], [0, 2, 3]]",
        output: "[[0, 1], [1, 2]]",
        explanation: "Edges with weights 1 and 2 form the MST."
      }
    ],
    testCases: [
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, 2], [0, 2, 3]] }, output: "[[0, 1], [1, 2]]" },
      { input: { V: 2, edges: [[0, 1, 5]] }, output: "[[0, 1]]" },
      { input: { V: 3, edges: [[0, 1, 1], [0, 2, 1], [1, 2, 1]] }, output: "[[0, 1], [0, 2]]" }
    ],
    starterCode: {
      python: "def findMSTEdges(V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int[][] findMSTEdges(int V, int[][] edges) {\n        // Write your code here\n        return new int[0][0];\n    }\n}",
      c: "int** findMSTEdges(int V, int edges[][3], int edgeCount, int* resSize) {\n    // Write your code here\n}",
      cpp: "vector<vector<int>> findMSTEdges(int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return {};\n}"
    }
  },
  {
    id: "prim_prob_5",
    title: "Connected Component MST",
    difficulty: "Easy",
    description: "Given a graph that might be disconnected, find the total weight of the MST for the connected component containing vertex 0. If vertex 0 is isolated, return 0.",
    constraints: "Vertices: 1 to 1000, Edges: 0 to 5000",
    examples: [
      {
        input: "V = 5, edges = [[0, 1, 2], [1, 2, 3], [3, 4, 1]]",
        output: "5",
        explanation: "Connected component containing 0 is {0, 1, 2} with MST weight 2+3=5."
      }
    ],
    testCases: [
      { input: { V: 5, edges: [[0, 1, 2], [1, 2, 3], [3, 4, 1]] }, output: "5" },
      { input: { V: 3, edges: [] }, output: "0" },
      { input: { V: 3, edges: [[1, 2, 1]] }, output: "0" }
    ],
    starterCode: {
      python: "def solve(V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int solve(int V, int[][] edges) {\n        // Write your code here\n        return 0;\n    }\n}",
      c: "int solve(int V, int edges[][3], int edgeCount) {\n    // Write your code here\n}",
      cpp: "int solve(int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return 0;\n}"
    }
  },
  {
    id: "prim_prob_6",
    title: "Dense Graph MST Optimization",
    difficulty: "Medium",
    description: "Implement Prim's algorithm using an adjacency matrix (O(V^2) approach) to find the MST weight of a very dense graph. Compare its efficiency with the priority queue approach.",
    constraints: "Vertices: 1 to 2000, Edges: Up to V*(V-1)/2",
    examples: [
      {
        input: "V = 3, matrix = [[0, 1, 5], [1, 0, 3], [5, 3, 0]]",
        output: "4",
        explanation: "Edges (0, 1) and (1, 2) form the MST."
      }
    ],
    testCases: [
      { input: { V: 3, matrix: [[0, 1, 5], [1, 0, 3], [5, 3, 0]] }, output: "4" },
      { input: { V: 2, matrix: [[0, 10], [10, 0]] }, output: "10" },
      { input: { V: 4, matrix: [[0, 2, 2, 2], [2, 0, 2, 2], [2, 2, 0, 2], [2, 2, 2, 0]] }, output: "6" }
    ],
    starterCode: {
      python: "def solve(V, matrix):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int solve(int V, int[][] matrix) {\n        // Write your code here\n        return 0;\n    }\n}",
      c: "int solve(int V, int matrix[][]) {\n    // Write your code here\n}",
      cpp: "int solve(int V, vector<vector<int>>& matrix) {\n    // Write your code here\n    return 0;\n}"
    }
  },
  {
    id: "prim_prob_7",
    title: "Maximum Spanning Tree",
    difficulty: "Medium",
    description: "Modify Prim's algorithm to find the Maximum Spanning Tree (MaxST) of a weighted undirected graph. Return the total weight of the MaxST.",
    constraints: "Vertices: 2 to 1000, Edges: 1 to 5000",
    examples: [
      {
        input: "V = 3, edges = [[0, 1, 1], [1, 2, 2], [0, 2, 3]]",
        output: "5",
        explanation: "Edges (0, 2) and (1, 2) form the MaxST: 3 + 2 = 5."
      }
    ],
    testCases: [
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, 2], [0, 2, 3]] }, output: "5" },
      { input: { V: 3, edges: [[0, 1, 10], [1, 2, 10], [0, 2, 10]] }, output: "20" },
      { input: { V: 2, edges: [[0, 1, 5]] }, output: "5" }
    ],
    starterCode: {
      python: "def maxST(V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int maxST(int V, int[][] edges) {\n        // Write your code here\n        return 0;\n    }\n}",
      c: "int maxST(int V, int edges[][3], int edgeCount) {\n    // Write your code here\n}",
      cpp: "int maxST(int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return 0;\n}"
    }
  },
  {
    id: "prim_prob_8",
    title: "MST in a Complete Graph",
    difficulty: "Medium",
    description: "You are given a set of nodes where every pair of nodes has an edge with weight = (i*j) % 100. Find the MST weight.",
    constraints: "Vertices: 1 to 500",
    examples: [
      {
        input: "V = 3",
        output: "Sum of MST edges",
        explanation: "Weight of edge (i, j) is (i*j)%100."
      }
    ],
    testCases: [
      { input: { V: 3 }, output: "??? (Calculated based on formula)" },
      { input: { V: 2 }, output: "0" },
      { input: { V: 1 }, output: "0" }
    ],
    starterCode: {
      python: "def solve(V):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int solve(int V) {\n        // Write your code here\n        return 0;\n    }\n}",
      c: "int solve(int V) {\n    // Write your code here\n}",
      cpp: "int solve(int V) {\n    // Write your code here\n    return 0;\n}"
    }
  },
  {
    id: "prim_prob_9",
    title: "Verify MST Property",
    difficulty: "Medium",
    description: "Given a graph and a set of edges, verify if the given edges form a valid Minimum Spanning Tree. A set of edges is a valid MST if it connects all vertices, has no cycles, and its total weight is minimal.",
    constraints: "Vertices: 2 to 500, Edges: 1 to 2000",
    examples: [
      {
        input: "V = 3, edges = [[0, 1, 1], [1, 2, 2], [0, 2, 3]], candidateMST = [[0, 1], [1, 2]]",
        output: "true",
        explanation: "Connecting 0-1-2 with weights 1+2=3 is minimal."
      }
    ],
    testCases: [
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, 2], [0, 2, 3]], candidateMST: [[0, 1], [1, 2]] }, output: "true" },
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, 2], [0, 2, 3]], candidateMST: [[0, 1], [0, 2]] }, output: "false" },
      { input: { V: 2, edges: [[0, 1, 5]], candidateMST: [[0, 1]] }, output: "true" }
    ],
    starterCode: {
      python: "def verifyMST(V, edges, candidateMST):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public boolean verifyMST(int V, int[][] edges, int[][] candidateMST) {\n        // Write your code here\n        return false;\n    }\n}",
      c: "bool verifyMST(int V, int edges[][3], int edgeCount, int candidateMST[][2], int mstCount) {\n    // Write your code here\n}",
      cpp: "bool verifyMST(int V, vector<vector<int>>& edges, vector<vector<int>>& candidateMST) {\n    // Write your code here\n    return false;\n}"
    }
  },
  {
    id: "prim_prob_10",
    title: "Find All Possible MSTs",
    difficulty: "Medium",
    description: "Given a weighted undirected graph, find the number of distinct Minimum Spanning Trees it can have. (Note: Only for small graphs).",
    constraints: "Vertices: 2 to 10, Edges: 1 to 50",
    examples: [
      {
        input: "V = 3, edges = [[0, 1, 1], [1, 2, 1], [0, 2, 1]]",
        output: "3",
        explanation: "Any two edges form an MST of weight 2."
      }
    ],
    testCases: [
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, 1], [0, 2, 1]] }, output: "3" },
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, 2], [0, 2, 3]] }, output: "1" },
      { input: { V: 2, edges: [[0, 1, 5]] }, output: "1" }
    ],
    starterCode: {
      python: "def countMSTs(V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int countMSTs(int V, int[][] edges) {\n        // Write your code here\n        return 0;\n    }\n}",
      c: "int countMSTs(int V, int edges[][3], int edgeCount) {\n    // Write your code here\n}",
      cpp: "int countMSTs(int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return 0;\n}"
    }
  },
  {
    id: "prim_prob_11",
    title: "Minimum Spanning Forest",
    difficulty: "Hard",
    description: "Given a potentially disconnected weighted undirected graph, find the total weight of the Minimum Spanning Forest (the sum of MSTs of all connected components).",
    constraints: "Vertices: 1 to 1000, Edges: 0 to 5000",
    examples: [
      {
        input: "V = 6, edges = [[0, 1, 2], [1, 2, 3], [3, 4, 1], [4, 5, 2]]",
        output: "8",
        explanation: "Component 1 MST: 2+3=5. Component 2 MST: 1+2=3. Total = 8."
      }
    ],
    testCases: [
      { input: { V: 6, edges: [[0, 1, 2], [1, 2, 3], [3, 4, 1], [4, 5, 2]] }, output: "8" },
      { input: { V: 3, edges: [] }, output: "0" },
      { input: { V: 4, edges: [[0, 1, 1], [2, 3, 2]] }, output: "3" }
    ],
    starterCode: {
      python: "def solve(V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int solve(int V, int[][] edges) {\n        // Write your code here\n        return 0;\n    }\n}",
      c: "int solve(int V, int edges[][3], int edgeCount) {\n    // Write your code here\n}",
      cpp: "int solve(int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return 0;\n}"
    }
  },
  {
    id: "prim_prob_12",
    title: "Steiner Tree Approximation",
    difficulty: "Hard",
    description: "Given a graph and a subset of 'terminal' vertices, find a tree that connects all terminals with minimum weight. This is NP-Hard; implement a 2-approximation using MST on a metric closure of terminals.",
    constraints: "Vertices: 1 to 100, Terminals: 2 to 10",
    examples: [
      {
        input: "V = 4, edges = [[0, 1, 1], [1, 2, 1], [2, 3, 1], [0, 3, 1]], terminals = [0, 2]",
        output: "2",
        explanation: "Shortest path between 0 and 2 is 2."
      }
    ],
    testCases: [
      { input: { V: 4, edges: [[0, 1, 1], [1, 2, 1], [2, 3, 1], [0, 3, 1]], terminals: [0, 2] }, output: "2" },
      { input: { V: 2, edges: [[0, 1, 5]], terminals: [0, 1] }, output: "5" },
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, 1], [0, 2, 1]], terminals: [0, 1, 2] }, output: "2" }
    ],
    starterCode: {
      python: "def approximateSteinerTree(V, edges, terminals):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int approximateSteinerTree(int V, int[][] edges, int[] terminals) {\n        // Write your code here\n        return 0;\n    }\n}",
      c: "int approximateSteinerTree(int V, int edges[][3], int edgeCount, int terminals[], int termCount) {\n    // Write your code here\n}",
      cpp: "int approximateSteinerTree(int V, vector<vector<int>>& edges, vector<int>& terminals) {\n    // Write your code here\n    return 0;\n}"
    }
  },
  {
    id: "prim_prob_13",
    title: "Minimum Bottleneck Spanning Tree",
    difficulty: "Hard",
    description: "Find a spanning tree such that the maximum weight of any edge in the tree is minimized. Return the value of this maximum edge (the bottleneck).",
    constraints: "Vertices: 2 to 1000, Edges: 1 to 5000",
    examples: [
      {
        input: "V = 3, edges = [[0, 1, 10], [1, 2, 5], [0, 2, 15]]",
        output: "10",
        explanation: "Edges (0, 1) and (1, 2) form MST. Max edge is 10."
      }
    ],
    testCases: [
      { input: { V: 3, edges: [[0, 1, 10], [1, 2, 5], [0, 2, 15]] }, output: "10" },
      { input: { V: 2, edges: [[0, 1, 5]] }, output: "5" },
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, 1], [0, 2, 1]] }, output: "1" }
    ],
    starterCode: {
      python: "def minBottleneck(V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int minBottleneck(int V, int[][] edges) {\n        // Write your code here\n        return 0;\n    }\n}",
      c: "int minBottleneck(int V, int edges[][3], int edgeCount) {\n    // Write your code here\n}",
      cpp: "int minBottleneck(int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return 0;\n}"
    }
  },
  {
    id: "prim_prob_14",
    title: "MST with Edge Constraints",
    difficulty: "Hard",
    description: "Given a graph, find the MST such that a specific edge (u, v) MUST be included, regardless of its weight. Return the total weight.",
    constraints: "Vertices: 2 to 1000, Edges: 1 to 5000",
    examples: [
      {
        input: "V = 3, edges = [[0, 1, 1], [1, 2, 2], [0, 2, 3]], mustInclude = [0, 2]",
        output: "4",
        explanation: "Must use (0, 2, 3) and the next cheapest to connect all is (0, 1, 1). Total = 4."
      }
    ],
    testCases: [
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, 2], [0, 2, 3]], mustInclude: [0, 2] }, output: "4" },
      { input: { V: 2, edges: [[0, 1, 5]], mustInclude: [0, 1] }, output: "5" },
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, 1], [0, 2, 1]], mustInclude: [0, 1] }, output: "2" }
    ],
    starterCode: {
      python: "def solve(V, edges, mustInclude):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int solve(int V, int[][] edges, int[] mustInclude) {\n        // Write your code here\n        return 0;\n    }\n}",
      c: "int solve(int V, int edges[][3], int edgeCount, int mustInclude[2]) {\n    // Write your code here\n}",
      cpp: "int solve(int V, vector<vector<int>>& edges, vector<int>& mustInclude) {\n    // Write your code here\n    return 0;\n}"
    }
  },
  {
    id: "prim_prob_15",
    title: "Optimal Redundant Connection",
    difficulty: "Hard",
    description: "A graph is given that is almost an MST but has one extra edge. Remove one edge to make it a spanning tree such that the total weight is minimized. Return the edge to remove.",
    constraints: "Vertices: 2 to 1000, Edges: V to V+1",
    examples: [
      {
        input: "V = 3, edges = [[0, 1, 1], [1, 2, 2], [0, 2, 3]]",
        output: "[0, 2]",
        explanation: "Removing the edge with weight 3 leaves the MST."
      }
    ],
    testCases: [
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, 2], [0, 2, 3]] }, output: "[0, 2]" },
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, 1], [0, 2, 1]] }, output: "[0, 2]" },
      { input: { V: 2, edges: [[0, 1, 5], [0, 1, 10]] }, output: "[0, 1]" }
    ],
    starterCode: {
      python: "def solve(V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int[] solve(int V, int[][] edges) {\n        // Write your code here\n        return new int[0];\n    }\n}",
      c: "int* solve(int V, int edges[][3], int edgeCount, int* resSize) {\n    // Write your code here\n}",
      cpp: "vector<int> solve(int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return {};\n}"
    }
  }
];

export default problems;
