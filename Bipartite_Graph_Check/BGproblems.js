const problems = [
  {
    id: "bg_prob_1",
    title: "Basic Bipartite Check",
    difficulty: "Easy",
    description: "Given an undirected graph, determine if it is bipartite. A graph is bipartite if we can split its vertices into two independent sets such that every edge connects a vertex in one set to a vertex in the other.",
    constraints: "Vertices: 1 to 10^4, Edges: 0 to 10^5",
    examples: [
      {
        input: "V = 4, edges = [[0, 1], [0, 3], [1, 2], [2, 3]]",
        output: "true",
        explanation: "The graph is a simple cycle of length 4, which is even and thus bipartite."
      },
      {
        input: "V = 3, edges = [[0, 1], [1, 2], [2, 0]]",
        output: "false",
        explanation: "The graph is a triangle (cycle of length 3), which is odd and thus not bipartite."
      }
    ],
    testCases: [
      { input: { V: 4, edges: [[0, 1], [0, 3], [1, 2], [2, 3]] }, output: "true" },
      { input: { V: 3, edges: [[0, 1], [1, 2], [2, 0]] }, output: "false" },
      { input: { V: 2, edges: [[0, 1]] }, output: "true" }
    ],
    starterCode: {
      python: "def isBipartite(V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public boolean isBipartite(int V, int[][] edges) {\n        // Write your code here\n        return false;\n    }\n}",
      c: "bool isBipartite(int V, int edges[][2], int edgeCount) {\n    // Write your code here\n}",
      cpp: "bool isBipartite(int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return false;\n}"
    }
  },
  {
    id: "bg_prob_2",
    title: "Check for Odd Cycles",
    difficulty: "Easy",
    description: "A graph is bipartite if and only if it contains no odd-length cycles. Given a graph, explicitly check for the presence of any odd-length cycle and return true if one exists, otherwise false.",
    constraints: "Vertices: 1 to 1000, Edges: 0 to 5000",
    examples: [
      {
        input: "V = 3, edges = [[0, 1], [1, 2], [2, 0]]",
        output: "true",
        explanation: "Cycle 0-1-2-0 has length 3 (odd)."
      }
    ],
    testCases: [
      { input: { V: 3, edges: [[0, 1], [1, 2], [2, 0]] }, output: "true" },
      { input: { V: 4, edges: [[0, 1], [1, 2], [2, 3], [3, 0]] }, output: "false" },
      { input: { V: 2, edges: [[0, 1]] }, output: "false" }
    ],
    starterCode: {
      python: "def hasOddCycle(V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public boolean hasOddCycle(int V, int[][] edges) {\n        // Write your code here\n        return false;\n    }\n}",
      c: "bool hasOddCycle(int V, int edges[][2], int edgeCount) {\n    // Write your code here\n}",
      cpp: "bool hasOddCycle(int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return false;\n}"
    }
  },
  {
    id: "bg_prob_3",
    title: "Possible Bipartite Partition",
    difficulty: "Easy",
    description: "If a graph is bipartite, return the two sets of vertices (U and V) that form the partition. If it is not bipartite, return an empty list.",
    constraints: "Vertices: 1 to 1000, Edges: 0 to 5000",
    examples: [
      {
        input: "V = 4, edges = [[0, 1], [1, 2], [2, 3], [3, 0]]",
        output: "[[0, 2], [1, 3]]",
        explanation: "Vertices 0 and 2 can be in one set, 1 and 3 in the other."
      }
    ],
    testCases: [
      { input: { V: 4, edges: [[0, 1], [1, 2], [2, 3], [3, 0]] }, output: "[[0, 2], [1, 3]]" },
      { input: { V: 3, edges: [[0, 1], [1, 2], [2, 0]] }, output: "[]" },
      { input: { V: 2, edges: [[0, 1]] }, output: "[[0], [1]]" }
    ],
    starterCode: {
      python: "def getBipartitePartition(V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public List<List<Integer>> getBipartitePartition(int V, int[][] edges) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}",
      c: "int** getBipartitePartition(int V, int edges[][2], int edgeCount, int* setSizes) {\n    // Write your code here\n}",
      cpp: "vector<vector<int>> getBipartitePartition(int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return {};\n}"
    }
  },
  {
    id: "bg_prob_4",
    title: "Is Tree Bipartite?",
    difficulty: "Easy",
    description: "Given a graph that is guaranteed to be a tree, verify if it is bipartite. (Hint: Think about the properties of trees).",
    constraints: "Vertices: 1 to 10^4, Edges: V-1",
    examples: [
      {
        input: "V = 3, edges = [[0, 1], [1, 2]]",
        output: "true",
        explanation: "All trees are bipartite."
      }
    ],
    testCases: [
      { input: { V: 3, edges: [[0, 1], [1, 2]] }, output: "true" },
      { input: { V: 1, edges: [] }, output: "true" },
      { input: { V: 4, edges: [[0, 1], [0, 2], [0, 3]] }, output: "true" }
    ],
    starterCode: {
      python: "def isTreeBipartite(V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public boolean isTreeBipartite(int V, int[][] edges) {\n        // Write your code here\n        return true;\n    }\n}",
      c: "bool isTreeBipartite(int V, int edges[][2], int edgeCount) {\n    // Write your code here\n}",
      cpp: "bool isTreeBipartite(int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return true;\n}"
    }
  },
  {
    id: "bg_prob_5",
    title: "Bipartite Check with Disconnected Components",
    difficulty: "Easy",
    description: "Given a graph that may contain multiple disconnected components, check if the entire graph is bipartite.",
    constraints: "Vertices: 1 to 10^4, Edges: 0 to 10^5",
    examples: [
      {
        input: "V = 6, edges = [[0, 1], [2, 3], [3, 4], [4, 2]]",
        output: "false",
        explanation: "Component 1 (0-1) is bipartite, but Component 2 (2-3-4) contains an odd cycle."
      }
    ],
    testCases: [
      { input: { V: 6, edges: [[0, 1], [2, 3], [3, 4], [4, 2]] }, output: "false" },
      { input: { V: 6, edges: [[0, 1], [2, 3], [4, 5]] }, output: "true" },
      { input: { V: 3, edges: [] }, output: "true" }
    ],
    starterCode: {
      python: "def isBipartiteDisconnected(V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public boolean isBipartiteDisconnected(int V, int[][] edges) {\n        // Write your code here\n        return false;\n    }\n}",
      c: "bool isBipartiteDisconnected(int V, int edges[][2], int edgeCount) {\n    // Write your code here\n}",
      cpp: "bool isBipartiteDisconnected(int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return false;\n}"
    }
  },
  {
    id: "bg_prob_6",
    title: "Convert to Bipartite",
    difficulty: "Medium",
    description: "Given a graph, what is the minimum number of edges that must be removed to make the graph bipartite?",
    constraints: "Vertices: 1 to 20, Edges: 0 to 100",
    examples: [
      {
        input: "V = 3, edges = [[0, 1], [1, 2], [2, 0]]",
        output: "1",
        explanation: "Removing any one edge from the triangle makes it a path, which is bipartite."
      }
    ],
    testCases: [
      { input: { V: 3, edges: [[0, 1], [1, 2], [2, 0]] }, output: "1" },
      { input: { V: 4, edges: [[0, 1], [1, 2], [2, 3], [3, 0]] }, output: "0" },
      { input: { V: 5, edges: [[0, 1], [1, 2], [2, 0], [0, 3], [3, 4], [4, 0]] }, output: "2" }
    ],
    starterCode: {
      python: "def minEdgesToRemove(V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int minEdgesToRemove(int V, int[][] edges) {\n        // Write your code here\n        return 0;\n    }\n}",
      c: "int minEdgesToRemove(int V, int edges[][2], int edgeCount) {\n    // Write your code here\n}",
      cpp: "int minEdgesToRemove(int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return 0;\n}"
    }
  },
  {
    id: "bg_prob_7",
    title: "Max Independent Set in Bipartite Graph",
    difficulty: "Medium",
    description: "In a bipartite graph, find the size of the Maximum Independent Set. (Hint: Use Konig's theorem: Max Independent Set = V - Max Matching).",
    constraints: "Vertices: 1 to 500, Edges: 0 to 5000",
    examples: [
      {
        input: "V = 4, edges = [[0, 1], [1, 2], [2, 3], [3, 0]]",
        output: "2",
        explanation: "Max independent set is {0, 2} or {1, 3}."
      }
    ],
    testCases: [
      { input: { V: 4, edges: [[0, 1], [1, 2], [2, 3], [3, 0]] }, output: "2" },
      { input: { V: 3, edges: [[0, 1], [0, 2]] }, output: "2" },
      { input: { V: 2, edges: [[0, 1]] }, output: "1" }
    ],
    starterCode: {
      python: "def maxIndependentSetBipartite(V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int maxIndependentSetBipartite(int V, int[][] edges) {\n        // Write your code here\n        return 0;\n    }\n}",
      c: "int maxIndependentSetBipartite(int V, int edges[][2], int edgeCount) {\n    // Write your code here\n}",
      cpp: "int maxIndependentSetBipartite(int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return 0;\n}"
    }
  },
  {
    id: "bg_prob_8",
    title: "Bipartite Matching (Simple)",
    difficulty: "Medium",
    description: "Given a bipartite graph with two sets of nodes U and V, find the size of the maximum matching (maximum number of edges that do not share a vertex).",
    constraints: "U size: 1 to 100, V size: 1 to 100",
    examples: [
      {
        input: "U = 3, V = 3, edges = [[0, 0], [0, 1], [1, 1], [2, 2]]",
        output: "3",
        explanation: "Matching: (0,0), (1,1), (2,2)."
      }
    ],
    testCases: [
      { input: { U: 3, V: 3, edges: [[0, 0], [0, 1], [1, 1], [2, 2]] }, output: "3" },
      { input: { U: 2, V: 2, edges: [[0, 0], [0, 1], [1, 0], [1, 1]] }, output: "2" },
      { input: { U: 2, V: 2, edges: [[0, 0]] }, output: "1" }
    ],
    starterCode: {
      python: "def maxBipartiteMatching(U, V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int maxBipartiteMatching(int U, int V, int[][] edges) {\n        // Write your code here\n        return 0;\n    }\n}",
      c: "int maxBipartiteMatching(int U, int V, int edges[][2], int edgeCount) {\n    // Write your code here\n}",
      cpp: "int maxBipartiteMatching(int U, int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return 0;\n}"
    }
  },
  {
    id: "bg_prob_9",
    title: "Check Bipartiteness of Directed Graph",
    difficulty: "Medium",
    description: "Check if a directed graph is bipartite. (Note: A directed graph is bipartite if its underlying undirected graph is bipartite).",
    constraints: "Vertices: 1 to 1000, Edges: 0 to 5000",
    examples: [
      {
        input: "V = 3, edges = [[0, 1], [1, 2], [2, 0]]",
        output: "false",
        explanation: "Underlying undirected graph is a triangle."
      }
    ],
    testCases: [
      { input: { V: 3, edges: [[0, 1], [1, 2], [2, 0]] }, output: "false" },
      { input: { V: 3, edges: [[0, 1], [1, 2]] }, output: "true" },
      { input: { V: 2, edges: [[0, 1], [1, 0]] }, output: "true" }
    ],
    starterCode: {
      python: "def isDirectedBipartite(V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public boolean isDirectedBipartite(int V, int[][] edges) {\n        // Write your code here\n        return false;\n    }\n}",
      c: "bool isDirectedBipartite(int V, int edges[][2], int edgeCount) {\n    // Write your code here\n}",
      cpp: "bool isDirectedBipartite(int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return false;\n}"
    }
  },
  {
    id: "bg_prob_10",
    title: "Find Minimum Vertex Cover in Bipartite Graph",
    difficulty: "Medium",
    description: "In a bipartite graph, find the size of the minimum vertex cover. (Hint: Use Konig's theorem: Size of Max Matching = Size of Min Vertex Cover).",
    constraints: "Vertices: 1 to 500, Edges: 0 to 5000",
    examples: [
      {
        input: "V = 4, edges = [[0, 1], [1, 2], [2, 3], [3, 0]]",
        output: "2",
        explanation: "Max matching is 2, so min vertex cover is 2."
      }
    ],
    testCases: [
      { input: { V: 4, edges: [[0, 1], [1, 2], [2, 3], [3, 0]] }, output: "2" },
      { input: { V: 3, edges: [[0, 1], [0, 2]] }, output: "1" },
      { input: { V: 2, edges: [[0, 1]] }, output: "1" }
    ],
    starterCode: {
      python: "def minVertexCoverBipartite(V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int minVertexCoverBipartite(int V, int[][] edges) {\n        // Write your code here\n        return 0;\n    }\n}",
      c: "int minVertexCoverBipartite(int V, int edges[][2], int edgeCount) {\n    // Write your code here\n}",
      cpp: "int minVertexCoverBipartite(int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return 0;\n}"
    }
  },
  {
    id: "bg_prob_11",
    title: "Bipartite Graph Construction",
    difficulty: "Hard",
    description: "Given two sets of vertices U and V and a list of restricted pairs (u, v) that CANNOT have an edge, find the maximum number of edges possible in the resulting bipartite graph.",
    constraints: "U size: 1 to 100, V size: 1 to 100, Restrictions: 0 to 1000",
    examples: [
      {
        input: "U = 2, V = 2, restrictions = [[0, 0]]",
        output: "3",
        explanation: "Total possible edges = 2*2 = 4. Subtract 1 restriction = 3."
      }
    ],
    testCases: [
      { input: { U: 2, V: 2, restrictions: [[0, 0]] }, output: "3" },
      { input: { U: 2, V: 2, restrictions: [[0, 0], [0, 1], [1, 0], [1, 1]] }, output: "0" },
      { input: { U: 3, V: 2, restrictions: [] }, output: "6" }
    ],
    starterCode: {
      python: "def maxEdgesBipartite(U, V, restrictions):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int maxEdgesBipartite(int U, int V, int[][] restrictions) {\n        // Write your code here\n        return 0;\n    }\n}",
      c: "int maxEdgesBipartite(int U, int V, int restrictions[][2], int resCount) {\n    // Write your code here\n}",
      cpp: "int maxEdgesBipartite(int U, int V, vector<vector<int>>& restrictions) {\n    // Write your code here\n    return 0;\n}"
    }
  },
  {
    id: "bg_prob_12",
    title: "Check if Graph is Bipartite (Weighted)",
    difficulty: "Hard",
    description: "Given a weighted graph, check if it is bipartite. If it is, find the maximum total weight of a bipartite matching.",
    constraints: "Vertices: 1 to 100, Edges: 0 to 5000",
    examples: [
      {
        input: "V = 4, edges = [[0, 1, 10], [1, 2, 20], [2, 3, 30], [3, 0, 40]]",
        output: "70",
        explanation: "Graph is bipartite. Max matching: (0, 3, 40) and (1, 2, 20) = 60? No, (0, 1, 10) and (2, 3, 30) = 40. (0, 3, 40) and (1, 2, 20) = 60. Wait, max is 40+30=70 if edges were different. Here: (0, 3) 40 and (1, 2) 20 = 60.",
        explanation_fixed: "Max matching weight for edges (0,3) weight 40 and (1,2) weight 20 is 60."
      }
    ],
    testCases: [
      { input: { V: 4, edges: [[0, 1, 10], [1, 2, 20], [2, 3, 30], [3, 0, 40]] }, output: "60" },
      { input: { V: 3, edges: [[0, 1, 1], [1, 2, 1], [2, 0, 1]] }, output: "-1" },
      { input: { V: 2, edges: [[0, 1, 5]] }, output: "5" }
    ],
    starterCode: {
      python: "def weightedBipartiteMaxMatching(V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int weightedBipartiteMaxMatching(int V, int[][] edges) {\n        // Write your code here\n        return -1;\n    }\n}",
      c: "int weightedBipartiteMaxMatching(int V, int edges[][3], int edgeCount) {\n    // Write your code here\n}",
      cpp: "int weightedBipartiteMaxMatching(int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return -1;\n}"
    }
  },
  {
    id: "bg_prob_13",
    title: "Find Smallest Set to Remove to make Bipartite",
    difficulty: "Hard",
    description: "Find the minimum number of vertices to remove from a graph so that the remaining graph is bipartite. This is equivalent to finding the minimum odd cycle cover.",
    constraints: "Vertices: 1 to 20, Edges: 0 to 100",
    examples: [
      {
        input: "V = 3, edges = [[0, 1], [1, 2], [2, 0]]",
        output: "1",
        explanation: "Removing any one vertex leaves a path of 2 vertices, which is bipartite."
      }
    ],
    testCases: [
      { input: { V: 3, edges: [[0, 1], [1, 2], [2, 0]] }, output: "1" },
      { input: { V: 4, edges: [[0, 1], [1, 2], [2, 3], [3, 0]] }, output: "0" },
      { input: { V: 5, edges: [[0, 1], [1, 2], [2, 0], [0, 3], [3, 4], [4, 0]] }, output: "1" }
    ],
    starterCode: {
      python: "def minVerticesToRemove(V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int minVerticesToRemove(int V, int[][] edges) {\n        // Write your code here\n        return 0;\n    }\n}",
      c: "int minVerticesToRemove(int V, int edges[][2], int edgeCount) {\n    // Write your code here\n}",
      cpp: "int minVerticesToRemove(int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return 0;\n}"
    }
  },
  {
    id: "bg_prob_14",
    title: "Check Bipartite with Constraint",
    difficulty: "Hard",
    description: "Check if a graph is bipartite, but two specific vertices u and v MUST be in the same set. Return true if possible, otherwise false.",
    constraints: "Vertices: 1 to 1000, Edges: 0 to 5000",
    examples: [
      {
        input: "V = 3, edges = [[0, 1], [1, 2]], mustSame = [0, 2]",
        output: "true",
        explanation: "Set 1: {0, 2}, Set 2: {1}. No edges within sets."
      },
      {
        input: "V = 2, edges = [[0, 1]], mustSame = [0, 1]",
        output: "false",
        explanation: "0 and 1 are adjacent, so they cannot be in the same set."
      }
    ],
    testCases: [
      { input: { V: 3, edges: [[0, 1], [1, 2]], mustSame: [0, 2] }, output: "true" },
      { input: { V: 2, edges: [[0, 1]], mustSame: [0, 1] }, output: "false" },
      { input: { V: 4, edges: [[0, 1], [1, 2], [2, 3], [3, 0]], mustSame: [0, 1] }, output: "false" }
    ],
    starterCode: {
      python: "def isBipartiteConstrained(V, edges, mustSame):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public boolean isBipartiteConstrained(int V, int[][] edges, int[] mustSame) {\n        // Write your code here\n        return false;\n    }\n}",
      c: "bool isBipartiteConstrained(int V, int edges[][2], int edgeCount, int mustSame[2]) {\n    // Write your code here\n}",
      cpp: "bool isBipartiteConstrained(int V, vector<vector<int>>& edges, vector<int>& mustSame) {\n    // Write your code here\n    return false;\n}"
    }
  },
  {
    id: "bg_prob_15",
    title: "Find Maximum Bipartite Clique",
    difficulty: "Hard",
    description: "Given a graph, find the size of the largest complete bipartite subgraph (Biclique).",
    constraints: "Vertices: 1 to 50, Edges: 0 to 1000",
    examples: [
      {
        input: "V = 4, edges = [[0, 1], [0, 2], [3, 1], [3, 2]]",
        output: "4",
        explanation: "The whole graph is a K(2, 2) complete bipartite graph."
      }
    ],
    testCases: [
      { input: { V: 4, edges: [[0, 1], [0, 2], [3, 1], [3, 2]] }, output: "4" },
      { input: { V: 3, edges: [[0, 1], [1, 2], [2, 0]] }, output: "2" },
      { input: { V: 2, edges: [[0, 1]] }, output: "2" }
    ],
    starterCode: {
      python: "def maxBicliqueSize(V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int maxBicliqueSize(int V, int[][] edges) {\n        // Write your code here\n        return 0;\n    }\n}",
      c: "int maxBicliqueSize(int V, int edges[][2], int edgeCount) {\n    // Write your code here\n}",
      cpp: "int maxBicliqueSize(int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return 0;\n}"
    }
  }
];

export default problems;
