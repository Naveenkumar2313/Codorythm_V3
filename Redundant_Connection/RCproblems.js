export const RCproblems = [
  // --- EASY ---
  {
    id: 'rc-e1', title: 'Find the Redundant Connection', difficulty: 'Easy',
    description: 'Given a list of edges of an undirected graph with n nodes (labeled 1 to n), where the graph started as a tree and one extra edge was added, find and return the redundant edge that creates a cycle. If multiple answers exist, return the edge that appears last in the input.',
    constraints: ['n == edges.length', '3 <= n <= 1000', '1 <= edges[i][0] < edges[i][1] <= n', 'There is exactly one redundant edge'],
    examples: [
      { input: 'edges = [[1,2],[1,3],[2,3]]', output: '[2,3]', explanation: 'Edges [1,2] and [1,3] form a tree. Adding [2,3] creates a cycle 1-2-3-1. So [2,3] is redundant.' },
      { input: 'edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]', output: '[1,4]', explanation: 'Edges [1,2],[2,3],[3,4] form a path. Adding [1,4] creates a cycle 1-2-3-4-1. So [1,4] is redundant.' }
    ],
    testCases: [
      { input: '3\n1 2\n1 3\n2 3', expectedOutput: '2 3', hidden: false },
      { input: '5\n1 2\n2 3\n3 4\n1 4\n1 5', expectedOutput: '1 4', hidden: false },
      { input: '4\n1 2\n2 3\n3 4\n1 4', expectedOutput: '1 4', hidden: true },
      { input: '4\n1 2\n1 3\n1 4\n3 4', expectedOutput: '3 4', hidden: true }
    ],
    starterCode: {
      python: 'def findRedundantConnection(edges):\n    # Use Union-Find to detect the cycle-forming edge\n    pass',
      java: 'public int[] findRedundantConnection(int[][] edges) {\n    // Use Union-Find to detect the cycle-forming edge\n    return new int[]{};\n}',
      c: 'int* findRedundantConnection(int** edges, int edgesSize, int* edgesColSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> findRedundantConnection(vector<vector<int>>& edges) {\n    // Use Union-Find to detect the cycle-forming edge\n    return {};\n}'
    }
  },

  {
    id: 'rc-e2', title: 'Detect Cycle in Undirected Graph', difficulty: 'Easy',
    description: 'Given n nodes (labeled 1 to n) and a list of edges, determine whether the undirected graph contains a cycle. Return true if a cycle exists, false otherwise. Use Union-Find for efficient cycle detection.',
    constraints: ['1 <= n <= 10^4', '0 <= edges.length <= 10^4', '1 <= edges[i][0], edges[i][1] <= n', 'No self-loops', 'No duplicate edges'],
    examples: [
      { input: 'n = 4, edges = [[1,2],[2,3],[3,4],[4,2]]', output: 'true', explanation: 'Edge [4,2] connects node 4 and node 2 which are already in the same component via 2-3-4. A cycle exists.' },
      { input: 'n = 4, edges = [[1,2],[2,3],[3,4]]', output: 'false', explanation: 'The edges form a simple path 1-2-3-4 with no cycle.' }
    ],
    testCases: [
      { input: '4\n4\n1 2\n2 3\n3 4\n4 2', expectedOutput: 'true', hidden: false },
      { input: '4\n3\n1 2\n2 3\n3 4', expectedOutput: 'false', hidden: false },
      { input: '5\n5\n1 2\n2 3\n3 4\n4 5\n5 1', expectedOutput: 'true', hidden: true },
      { input: '3\n2\n1 2\n2 3', expectedOutput: 'false', hidden: true }
    ],
    starterCode: {
      python: 'def hasCycle(n, edges):\n    # Use Union-Find: if find(u) == find(v) before union, cycle exists\n    pass',
      java: 'public boolean hasCycle(int n, int[][] edges) {\n    // Use Union-Find: if find(u) == find(v) before union, cycle exists\n    return false;\n}',
      c: 'bool hasCycle(int n, int** edges, int edgesSize) {\n    return false;\n}',
      cpp: 'bool hasCycle(int n, vector<vector<int>>& edges) {\n    // Use Union-Find: if find(u) == find(v) before union, cycle exists\n    return false;\n}'
    }
  },

  {
    id: 'rc-e3', title: 'Count Connected Components', difficulty: 'Easy',
    description: 'Given n nodes (labeled 1 to n) and a list of undirected edges, return the number of connected components in the graph. Use Union-Find to group nodes into components.',
    constraints: ['1 <= n <= 10^4', '0 <= edges.length <= 10^4', '1 <= edges[i][0], edges[i][1] <= n', 'No self-loops', 'No duplicate edges'],
    examples: [
      { input: 'n = 5, edges = [[1,2],[1,3],[4,5]]', output: '2', explanation: 'Component 1: {1,2,3}. Component 2: {4,5}. Total = 2.' },
      { input: 'n = 5, edges = [[1,2],[2,3],[3,4],[4,5]]', output: '1', explanation: 'All nodes are connected in one chain. Total = 1.' }
    ],
    testCases: [
      { input: '5\n3\n1 2\n1 3\n4 5', expectedOutput: '2', hidden: false },
      { input: '5\n4\n1 2\n2 3\n3 4\n4 5', expectedOutput: '1', hidden: false },
      { input: '6\n3\n1 2\n3 4\n5 6', expectedOutput: '3', hidden: true },
      { input: '4\n0', expectedOutput: '4', hidden: true }
    ],
    starterCode: {
      python: 'def countComponents(n, edges):\n    # Use Union-Find; count distinct roots at the end\n    pass',
      java: 'public int countComponents(int n, int[][] edges) {\n    // Use Union-Find; count distinct roots at the end\n    return 0;\n}',
      c: 'int countComponents(int n, int** edges, int edgesSize) {\n    return 0;\n}',
      cpp: 'int countComponents(int n, vector<vector<int>>& edges) {\n    // Use Union-Find; count distinct roots at the end\n    return 0;\n}'
    }
  },

  {
    id: 'rc-e4', title: 'Check if Two Nodes Are Connected', difficulty: 'Easy',
    description: 'Given n nodes, a list of undirected edges, and multiple queries each of the form [u, v], answer whether node u and node v are in the same connected component. Use Union-Find to preprocess the graph and answer each query in O(alpha(n)).',
    constraints: ['1 <= n <= 10^4', '0 <= edges.length <= 10^4', '1 <= queries.length <= 10^4', '1 <= u, v <= n'],
    examples: [
      { input: 'n = 5, edges = [[1,2],[2,3],[4,5]], queries = [[1,3],[1,4],[4,5]]', output: '[true, false, true]', explanation: '1 and 3 are connected via 1-2-3. 1 and 4 are not connected. 4 and 5 are directly connected.' },
      { input: 'n = 4, edges = [[1,2],[3,4]], queries = [[1,2],[2,3],[3,4]]', output: '[true, false, true]', explanation: 'Components: {1,2} and {3,4}. 1-2 same, 2-3 different, 3-4 same.' }
    ],
    testCases: [
      { input: '5\n3\n1 2\n2 3\n4 5\n3\n1 3\n1 4\n4 5', expectedOutput: 'true false true', hidden: false },
      { input: '4\n2\n1 2\n3 4\n3\n1 2\n2 3\n3 4', expectedOutput: 'true false true', hidden: false },
      { input: '6\n4\n1 2\n2 3\n4 5\n5 6\n3\n1 3\n4 6\n1 4', expectedOutput: 'true true false', hidden: true },
      { input: '3\n0\n3\n1 2\n2 3\n1 3', expectedOutput: 'false false false', hidden: true }
    ],
    starterCode: {
      python: 'def areConnected(n, edges, queries):\n    # Build Union-Find from edges, then answer each query with find(u) == find(v)\n    pass',
      java: 'public boolean[] areConnected(int n, int[][] edges, int[][] queries) {\n    // Build Union-Find from edges, then answer each query with find(u) == find(v)\n    return new boolean[]{};\n}',
      c: 'bool* areConnected(int n, int** edges, int edgesSize, int** queries, int queriesSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<bool> areConnected(int n, vector<vector<int>>& edges, vector<vector<int>>& queries) {\n    // Build Union-Find from edges, then answer each query with find(u) == find(v)\n    return {};\n}'
    }
  },

  {
    id: 'rc-e5', title: 'Minimum Edges to Connect All Components', difficulty: 'Easy',
    description: 'Given n nodes and a list of undirected edges, find the minimum number of additional edges needed to make the entire graph fully connected (i.e., one single connected component). Use Union-Find to count the current number of components.',
    constraints: ['1 <= n <= 10^4', '0 <= edges.length <= 10^4', '1 <= edges[i][0], edges[i][1] <= n', 'No self-loops', 'No duplicate edges'],
    examples: [
      { input: 'n = 6, edges = [[1,2],[2,3],[4,5]]', output: '2', explanation: 'Components: {1,2,3}, {4,5}, {6}. Need 2 more edges to connect all 3 components into one.' },
      { input: 'n = 5, edges = [[1,2],[1,3],[1,4],[1,5]]', output: '0', explanation: 'All nodes are already connected to node 1. Only 1 component exists.' }
    ],
    testCases: [
      { input: '6\n3\n1 2\n2 3\n4 5', expectedOutput: '2', hidden: false },
      { input: '5\n4\n1 2\n1 3\n1 4\n1 5', expectedOutput: '0', hidden: false },
      { input: '7\n3\n1 2\n3 4\n5 6', expectedOutput: '3', hidden: true },
      { input: '4\n2\n1 2\n3 4', expectedOutput: '1', hidden: true }
    ],
    starterCode: {
      python: 'def minEdgesToConnect(n, edges):\n    # Use Union-Find; answer = (number of components) - 1\n    pass',
      java: 'public int minEdgesToConnect(int n, int[][] edges) {\n    // Use Union-Find; answer = (number of components) - 1\n    return 0;\n}',
      c: 'int minEdgesToConnect(int n, int** edges, int edgesSize) {\n    return 0;\n}',
      cpp: 'int minEdgesToConnect(int n, vector<vector<int>>& edges) {\n    // Use Union-Find; answer = (number of components) - 1\n    return 0;\n}'
    }
  },

  // --- MEDIUM ---
  {
    id: 'rc-m1', title: 'Redundant Connection in Directed Graph', difficulty: 'Medium',
    description: 'Given a directed graph of n nodes (labeled 1 to n) with n edges, where the graph originally was a rooted tree, find the redundant edge that, when removed, makes the graph a valid rooted tree with exactly n-1 edges. A rooted tree has exactly one root (indegree 0) and all other nodes have indegree exactly 1. The input represents a graph that is almost a tree except for one extra edge. Return the edge that, if removed, results in a valid tree. If multiple candidates exist, return the one that appears last in the input.',
    constraints: ['n == edges.length', '2 <= n <= 1000', '1 <= edges[i][0], edges[i][1] <= n', 'The graph is almost a tree (one extra edge)'],
    examples: [
      { input: 'edges = [[1,2],[2,3],[3,4],[4,1],[1,5]]', output: '[4,1]', explanation: 'The extra edge [4,1] creates a cycle 1-2-3-4-1. Removing it yields a valid tree rooted at 1 with children 2,5.' },
      { input: 'edges = [[1,2],[2,3],[3,1],[1,4]]', output: '[3,1]', explanation: 'Both [2,3] and [3,1] could be candidates due to the cycle, but [3,1] appears later. Removing [3,1] gives a valid tree rooted at 1.' },
      { input: 'edges = [[1,2],[1,3],[2,1]]', output: '[2,1]', explanation: 'Node 1 has indegree 2 (from [1,2] cannot give indegree — directed edges mean [1,2] means 1->2). In a directed graph, [1,2] means edge from 1 to 2. Here node 1 has indegree from edge [2,1], and node 2 has indegree from [1,2]. Edge [2,1] creates the issue. Removing [2,1] resolves both the cycle and the indegree violation.' }
    ],
    testCases: [
      { input: '5\n1 2\n2 3\n3 4\n4 1\n1 5', expectedOutput: '4 1', hidden: false },
      { input: '4\n1 2\n2 3\n3 1\n1 4', expectedOutput: '3 1', hidden: false },
      { input: '3\n1 2\n1 3\n2 1', expectedOutput: '2 1', hidden: false },
      { input: '6\n1 2\n2 3\n3 1\n4 5\n5 6\n6 4', expectedOutput: '6 4', hidden: true },
      { input: '4\n2 1\n3 1\n4 1\n1 2', expectedOutput: '1 2', hidden: true }
    ],
    starterCode: {
      python: 'def findRedundantDirectedConnection(edges):\n    # Handle two cases: node with indegree 2, or a cycle without indegree violation\n    pass',
      java: 'public int[] findRedundantDirectedConnection(int[][] edges) {\n    // Handle two cases: node with indegree 2, or a cycle without indegree violation\n    return new int[]{};\n}',
      c: 'int* findRedundantDirectedConnection(int** edges, int edgesSize, int* edgesColSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> findRedundantDirectedConnection(vector<vector<int>>& edges) {\n    // Handle two cases: node with indegree 2, or a cycle without indegree violation\n    return {};\n}'
    }
  },

  {
    id: 'rc-m2', title: 'Earliest Connection That Connects All Nodes', difficulty: 'Medium',
    description: 'Given n nodes (labeled 0 to n-1) and a list of edges where each edge edges[i] = [u, v, timestamp] indicates that nodes u and v become connected at the given timestamp, find the earliest timestamp at which all nodes become connected into a single component. If the graph never becomes fully connected, return -1.',
    constraints: ['1 <= n <= 10^4', '0 <= edges.length <= 10^4', '0 <= u, v < n', '1 <= timestamp <= 10^5', 'Timestamps are unique and sorted in ascending order'],
    examples: [
      { input: 'n = 4, edges = [[0,1,1],[1,2,2],[2,3,3],[0,3,4]]', output: '3', explanation: 'At timestamp 3, edge [2,3] connects component {0,1,2} with node 3. After this, all 4 nodes are connected.' },
      { input: 'n = 5, edges = [[0,1,1],[2,3,2],[0,2,5],[1,4,8]]', output: '5', explanation: 'At timestamp 5, edge [0,2] connects {0,1} with {2,3}. Now {0,1,2,3} is one component. Node 4 connects at timestamp 8.' }
    ],
    testCases: [
      { input: '4\n4\n0 1 1\n1 2 2\n2 3 3\n0 3 4', expectedOutput: '3', hidden: false },
      { input: '5\n4\n0 1 1\n2 3 2\n0 2 5\n1 4 8', expectedOutput: '5', hidden: false },
      { input: '6\n5\n0 1 2\n1 2 4\n3 4 6\n4 5 8\n2 3 10', expectedOutput: '10', hidden: true },
      { input: '4\n2\n0 1 1\n2 3 2', expectedOutput: '-1', hidden: true }
    ],
    starterCode: {
      python: 'def earliestConnection(n, edges):\n    # Sort edges by timestamp; use Union-Find to track components\n    pass',
      java: 'public int earliestConnection(int n, int[][] edges) {\n    // Sort edges by timestamp; use Union-Find to track components\n    return -1;\n}',
      c: 'int earliestConnection(int n, int** edges, int edgesSize) {\n    return -1;\n}',
      cpp: 'int earliestConnection(int n, vector<vector<int>>& edges) {\n    // Sort edges by timestamp; use Union-Find to track components\n    return -1;\n}'
    }
  },

  {
    id: 'rc-m3', title: 'Lexicographically Smallest Redundant Edge', difficulty: 'Medium',
    description: 'Given an undirected graph with n nodes (labeled 1 to n) and a list of edges, the graph initially formed a tree but now has one extra edge, which creates exactly one cycle. The cycle may contain multiple edges. Find the redundant edge (an edge that lies on the cycle) such that when removing it, the graph becomes a valid tree. If multiple edges on the cycle are valid candidates, return the one that is lexicographically smallest (i.e., compare [u,v] pairs: first by the smaller node, then by the larger node).',
    constraints: ['n == edges.length', '3 <= n <= 1000', '1 <= edges[i][0] < edges[i][1] <= n', 'There is exactly one cycle containing at least 3 edges'],
    examples: [
      { input: 'edges = [[1,2],[2,3],[1,3],[1,4]]', output: '[1,2]', explanation: 'Cycle edges: [1,2], [2,3], [1,3]. All are valid. Lexicographically smallest is [1,2].' },
      { input: 'edges = [[1,2],[2,3],[3,4],[4,5],[2,5]]', output: '[2,5]', explanation: 'Cycle edges: [2,3], [3,4], [4,5], [2,5]. Valid candidates depend on tree property. [2,5] is lexicographically smallest among cycle edges that maintain connectivity.' }
    ],
    testCases: [
      { input: '4\n1 2\n2 3\n1 3\n1 4', expectedOutput: '1 2', hidden: false },
      { input: '5\n1 2\n2 3\n3 4\n4 5\n2 5', expectedOutput: '2 5', hidden: false },
      { input: '6\n1 2\n2 3\n3 1\n4 5\n5 6\n4 6', expectedOutput: '1 2', hidden: true },
      { input: '4\n1 2\n1 3\n2 3\n3 4', expectedOutput: '1 2', hidden: true }
    ],
    starterCode: {
      python: 'def smallestRedundantEdge(edges):\n    # Use Union-Find to find cycle edges, then pick lexicographically smallest\n    pass',
      java: 'public int[] smallestRedundantEdge(int[][] edges) {\n    // Use Union-Find to find cycle edges, then pick lexicographically smallest\n    return new int[]{};\n}',
      c: 'int* smallestRedundantEdge(int** edges, int edgesSize, int* edgesColSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> smallestRedundantEdge(vector<vector<int>>& edges) {\n    // Use Union-Find to find cycle edges, then pick lexicographically smallest\n    return {};\n}'
    }
  },

  {
    id: 'rc-m4', title: 'Largest Component Size After Removing Redundant Edges', difficulty: 'Medium',
    description: 'Given an undirected graph with n nodes (labeled 1 to n) and a list of edges, the graph may contain multiple cycles (unlike standard Redundant Connection). You are allowed to remove exactly one edge. Find which edge to remove so that the size of the largest connected component in the resulting graph is minimized. If multiple edges give the same minimal largest component size, return the one that appears last in the input. If no edge removal changes the component structure, return the first edge from the input.',
    constraints: ['1 <= n <= 10^3', '1 <= edges.length <= 10^3', '1 <= edges[i][0], edges[i][1] <= n', 'No self-loops', 'May contain multiple cycles'],
    examples: [
      { input: 'n = 5, edges = [[1,2],[2,3],[3,4],[4,5],[1,5],[1,3]]', output: '[1,3]', explanation: 'The graph is almost fully connected. Removing [1,3] breaks it into components of sizes 4 and 1 (largest = 4). Other removals may leave a largest component of size 5 or 4 as well, but [1,3] appears latest among those with min 4.' },
      { input: 'n = 4, edges = [[1,2],[2,3],[3,4],[1,4]]', output: '[1,4]', explanation: 'Removing any cycle edge splits into two components of sizes 2 and 2 (largest = 2). Edge [1,4] is latest with this outcome.' }
    ],
    testCases: [
      { input: '5\n6\n1 2\n2 3\n3 4\n4 5\n1 5\n1 3', expectedOutput: '1 3', hidden: false },
      { input: '4\n4\n1 2\n2 3\n3 4\n1 4', expectedOutput: '1 4', hidden: false },
      { input: '6\n7\n1 2\n2 3\n3 1\n4 5\n5 6\n4 6\n2 4', expectedOutput: '2 4', hidden: true },
      { input: '3\n3\n1 2\n2 3\n1 3', expectedOutput: '1 3', hidden: true }
    ],
    starterCode: {
      python: 'def minLargestComponentAfterRemoval(n, edges):\n    # For each edge, try removing it and compute component sizes using Union-Find\n    pass',
      java: 'public int[] minLargestComponentAfterRemoval(int n, int[][] edges) {\n    // For each edge, try removing it and compute component sizes using Union-Find\n    return new int[]{};\n}',
      c: 'int* minLargestComponentAfterRemoval(int n, int** edges, int edgesSize, int* edgesColSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> minLargestComponentAfterRemoval(int n, vector<vector<int>>& edges) {\n    // For each edge, try removing it and compute component sizes using Union-Find\n    return {};\n}'
    }
  },

  {
    id: 'rc-m5', title: 'Maximum Edges to Remove While Keeping Graph Connected', difficulty: 'Medium',
    description: 'Given n nodes (labeled 1 to n) and a list of undirected edges, find the maximum number of edges that can be removed such that the graph remains connected (i.e., there is exactly one connected component). This is equivalent to finding a spanning tree of the graph and counting how many edges are not part of it. If the graph is already disconnected, return -1.',
    constraints: ['1 <= n <= 10^4', '0 <= edges.length <= 2 * 10^4', '1 <= edges[i][0], edges[i][1] <= n', 'No self-loops', 'No duplicate edges'],
    examples: [
      { input: 'n = 5, edges = [[1,2],[1,3],[2,3],[3,4],[4,5],[1,5]]', output: '3', explanation: 'Minimum edges to keep it connected = n-1 = 4. Total edges = 7. Maximum removable = 7 - 4 = 3.' },
      { input: 'n = 4, edges = [[1,2],[2,3],[3,4]]', output: '0', explanation: 'Already a tree with exactly n-1 = 3 edges. No edge can be removed without disconnecting the graph.' },
      { input: 'n = 6, edges = [[1,2],[2,3],[4,5],[5,6]]', output: '-1', explanation: 'Two disconnected components: {1,2,3} and {4,5,6}. Cannot make the whole graph connected by removing edges.' }
    ],
    testCases: [
      { input: '5\n6\n1 2\n1 3\n2 3\n3 4\n4 5\n1 5', expectedOutput: '3', hidden: false },
      { input: '4\n3\n1 2\n2 3\n3 4', expectedOutput: '0', hidden: false },
      { input: '6\n4\n1 2\n2 3\n4 5\n5 6', expectedOutput: '-1', hidden: false },
      { input: '7\n8\n1 2\n2 3\n3 1\n4 5\n5 6\n6 7\n7 4\n1 4', expectedOutput: '3', hidden: true },
      { input: '3\n0', expectedOutput: '-1', hidden: true }
    ],
    starterCode: {
      python: 'def maxRemovableEdges(n, edges):\n    # Use Union-Find to check connectivity first, then count edges beyond n-1\n    pass',
      java: 'public int maxRemovableEdges(int n, int[][] edges) {\n    // Use Union-Find to check connectivity first, then count edges beyond n-1\n    return 0;\n}',
      c: 'int maxRemovableEdges(int n, int** edges, int edgesSize) {\n    return 0;\n}',
      cpp: 'int maxRemovableEdges(int n, vector<vector<int>>& edges) {\n    // Use Union-Find to check connectivity first, then count edges beyond n-1\n    return 0;\n}'
    }
  }
,
  // --- HARD ---
  {
    id: 'rc-h1', title: 'Redundant Connection II (Multiple Candidates)', difficulty: 'Hard',
    description: 'Given a directed graph of n nodes (labeled 1 to n) with n edges, the graph was originally a rooted tree but now has one extra edge. The extra edge can cause either: (1) a node with indegree 2, or (2) a cycle, or (3) both. Find the redundant edge that, when removed, makes the graph a valid rooted tree. If multiple candidates exist, return the edge that appears last in the input. This is the full version of the problem where both indegree violations and cycles must be handled together, and the graph may have up to 10^5 nodes.',
    constraints: ['n == edges.length', '2 <= n <= 10^5', '1 <= edges[i][0], edges[i][1] <= n', 'The graph is almost a tree (one extra edge)'],
    examples: [
      { input: 'edges = [[1,2],[1,3],[2,3]]', output: '[2,3]', explanation: 'Node 3 has indegree 2 (from [1,3] and [2,3]). The cycle is 1-2-3-1. Edge [2,3] appears later than [1,3] and removing it resolves both issues.' },
      { input: 'edges = [[1,2],[2,3],[3,1],[1,4],[4,5],[5,6],[6,4]]', output: '[6,4]', explanation: 'Two separate cycles: 1-2-3-1 and 4-5-6-4. The extra edge is in the second cycle. Edge [6,4] is the one that creates the second cycle and appears last among cycle-forming edges.' },
      { input: 'edges = [[2,1],[3,1],[4,1],[1,5],[5,2]]', output: '[5,2]', explanation: 'Node 1 has indegree 3 (from [2,1],[3,1],[4,1]). Edge [5,2] creates a cycle 1-5-2-1. Removing [5,2] resolves both the cycle and reduces indegree of 1 to 2 (still invalid). But wait — after removing [5,2], node 1 still has indegree 2 from [2,1] and [3,1]. The correct answer is [5,2] because it is the edge that appears last among those that, when removed, yield a valid tree. Actually, we must remove the edge that resolves the indegree violation: one of [2,1], [3,1], [4,1] must go. Among those, [4,1] appears last. But [5,2] also creates a cycle. The algorithm must check: if there is a node with indegree 2, try removing each candidate edge and check if the remaining graph is a tree. The answer is the one that appears last.' }
    ],
    testCases: [
      { input: '3\n1 2\n1 3\n2 3', expectedOutput: '2 3', hidden: false },
      { input: '7\n1 2\n2 3\n3 1\n1 4\n4 5\n5 6\n6 4', expectedOutput: '6 4', hidden: false },
      { input: '5\n2 1\n3 1\n4 1\n1 5\n5 2', expectedOutput: '5 2', hidden: false },
      { input: '6\n1 2\n2 3\n3 4\n4 5\n5 1\n1 6', expectedOutput: '5 1', hidden: true },
      { input: '8\n1 2\n2 3\n3 4\n4 1\n5 6\n6 7\n7 8\n8 5', expectedOutput: '8 5', hidden: true }
    ],
    starterCode: {
      python: 'def findRedundantDirectedConnection(edges):\n    # Handle indegree 2 case and cycle case; return the correct redundant edge\n    pass',
      java: 'public int[] findRedundantDirectedConnection(int[][] edges) {\n    // Handle indegree 2 case and cycle case; return the correct redundant edge\n    return new int[]{};\n}',
      c: 'int* findRedundantDirectedConnection(int** edges, int edgesSize, int* edgesColSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> findRedundantDirectedConnection(vector<vector<int>>& edges) {\n    // Handle indegree 2 case and cycle case; return the correct redundant edge\n    return {};\n}'
    }
  },

  {
    id: 'rc-h2', title: 'Dynamic Connectivity with Edge Deletions', difficulty: 'Hard',
    description: 'Given n nodes (labeled 1 to n) and a sequence of operations. Each operation is either: (1) "add u v" — add an undirected edge between u and v, or (2) "remove u v" — remove the edge between u and v (the edge is guaranteed to exist), or (3) "query u v" — return whether u and v are currently connected. Process all operations efficiently. Use Union-Find with rollback (persistent DSU) or a segment tree over time to handle deletions.',
    constraints: ['1 <= n <= 10^4', '1 <= q <= 2 * 10^4 (number of operations)', '1 <= u, v <= n', 'No duplicate edges at any point in time', 'Each remove operation corresponds to a previously added edge that has not been removed yet'],
    examples: [
      { input: 'n = 5, ops = ["add 1 2","add 2 3","add 3 4","query 1 4","remove 2 3","query 1 4","add 2 5","query 1 5"]', output: '[true, false, true]', explanation: 'After adding 1-2,2-3,3-4: 1 and 4 are connected. After removing 2-3: 1 and 4 are disconnected. After adding 2-5: 1 and 5 are connected via 1-2-5.' },
      { input: 'n = 3, ops = ["add 1 2","add 2 3","remove 1 2","query 1 3","add 1 2","query 1 3"]', output: '[true, true]', explanation: 'After removing 1-2, nodes 1 and 3 are still connected via 1-2-3? No, 1-2 was removed, so only 2-3 remains. 1 and 3 are disconnected. Then adding 1-2 back connects them again.' }
    ],
    testCases: [
      { input: '5\n8\nadd 1 2\nadd 2 3\nadd 3 4\nquery 1 4\nremove 2 3\nquery 1 4\nadd 2 5\nquery 1 5', expectedOutput: 'true false true', hidden: false },
      { input: '3\n6\nadd 1 2\nadd 2 3\nremove 1 2\nquery 1 3\nadd 1 2\nquery 1 3', expectedOutput: 'false true', hidden: false },
      { input: '6\n10\nadd 1 2\nadd 3 4\nadd 5 6\nquery 1 3\nadd 2 3\nquery 1 4\nremove 2 3\nquery 1 4\nadd 1 6\nquery 1 5', expectedOutput: 'false true false true', hidden: true },
      { input: '4\n6\nadd 1 2\nadd 2 3\nadd 3 4\nremove 2 3\nremove 1 2\nquery 1 4', expectedOutput: 'false', hidden: true }
    ],
    starterCode: {
      python: 'def dynamicConnectivity(n, operations):\n    # Use Union-Find with rollback or segment tree over time\n    pass',
      java: 'public boolean[] dynamicConnectivity(int n, String[] operations) {\n    // Use Union-Find with rollback or segment tree over time\n    return new boolean[]{};\n}',
      c: 'bool* dynamicConnectivity(int n, char** operations, int opsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<bool> dynamicConnectivity(int n, vector<string>& operations) {\n    // Use Union-Find with rollback or segment tree over time\n    return {};\n}'
    }
  },

  {
    id: 'rc-h3', title: 'Minimum Spanning Tree with Redundant Edges', difficulty: 'Hard',
    description: 'Given n nodes (labeled 1 to n) and m weighted undirected edges, find the number of edges that are "critical" (must be in every Minimum Spanning Tree), "redundant" (cannot be in any Minimum Spanning Tree), and "optional" (can be in some but not all MSTs). An edge is critical if removing it increases the MST weight. An edge is redundant if it is never part of any MST. An edge is optional if it appears in at least one but not all MSTs.',
    constraints: ['1 <= n <= 10^4', '1 <= m <= 2 * 10^4', '1 <= u, v <= n', '1 <= weight <= 10^5', 'Graph is connected'],
    examples: [
      { input: 'n = 4, edges = [[1,2,1],[2,3,1],[3,4,2],[1,4,2],[1,3,3]]', output: 'critical: 2, optional: 2, redundant: 1', explanation: 'Edges with weight 1 ([1,2],[2,3]) are critical. Edges with weight 2 ([3,4],[1,4]) are optional (either can be in MST). Edge [1,3] with weight 3 is redundant (never in MST).' },
      { input: 'n = 5, edges = [[1,2,1],[2,3,1],[3,4,1],[4,5,1],[1,5,5]]', output: 'critical: 4, optional: 0, redundant: 1', explanation: 'All weight-1 edges form the unique MST. Edge [1,5] with weight 5 is redundant.' }
    ],
    testCases: [
      { input: '4\n5\n1 2 1\n2 3 1\n3 4 2\n1 4 2\n1 3 3', expectedOutput: '2 2 1', hidden: false },
      { input: '5\n5\n1 2 1\n2 3 1\n3 4 1\n4 5 1\n1 5 5', expectedOutput: '4 0 1', hidden: false },
      { input: '6\n8\n1 2 2\n2 3 2\n3 1 2\n4 5 3\n5 6 3\n6 4 3\n1 4 5\n2 5 5', expectedOutput: '0 6 2', hidden: true },
      { input: '3\n3\n1 2 1\n2 3 1\n1 3 1', expectedOutput: '0 3 0', hidden: true }
    ],
    starterCode: {
      python: 'def classifyMSTEdges(n, edges):\n    # Use Kruskal with Union-Find; classify each edge as critical, optional, or redundant\n    pass',
      java: 'public int[] classifyMSTEdges(int n, int[][] edges) {\n    // Use Kruskal with Union-Find; classify each edge as critical, optional, or redundant\n    return new int[]{};\n}',
      c: 'int* classifyMSTEdges(int n, int** edges, int edgesSize, int* edgesColSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> classifyMSTEdges(int n, vector<vector<int>>& edges) {\n    // Use Kruskal with Union-Find; classify each edge as critical, optional, or redundant\n    return {};\n}'
    }
  },

  {
    id: 'rc-h4', title: 'Number of Islands II with Dynamic Obstacles', difficulty: 'Hard',
    description: 'You are given an m x n grid where each cell is initially water (0). You are also given a sequence of operations. Each operation is either: (1) "add r c" — add land at cell (r, c) (if it was water), or (2) "remove r c" — remove land at cell (r, c) (if it was land), or (3) "query" — return the current number of islands (connected groups of land cells connected 4-directionally). Process all operations efficiently. Use Union-Find with rollback or a segment tree over time to handle both additions and deletions.',
    constraints: ['1 <= m, n <= 100', '1 <= q <= 10^4 (number of operations)', '0 <= r < m', '0 <= c < n', 'Add and remove operations are valid (no double-add or double-remove)'],
    examples: [
      { input: 'm = 3, n = 3, ops = ["add 0 0","add 0 1","add 1 0","query","remove 0 1","query","add 0 1","query"]', output: '[1, 2, 1]', explanation: 'After adding (0,0),(0,1),(1,0): one island. After removing (0,1): two islands {(0,0)-(1,0)} and {(0,1)}. After adding (0,1) back: one island again.' },
      { input: 'm = 2, n = 2, ops = ["add 0 0","add 1 1","query","add 0 1","add 1 0","query","remove 0 1","query"]', output: '[2, 1, 2]', explanation: 'Initially two separate islands. Adding (0,1) and (1,0) connects them into one. Removing (0,1) splits back into two.' }
    ],
    testCases: [
      { input: '3 3\n8\nadd 0 0\nadd 0 1\nadd 1 0\nquery\nremove 0 1\nquery\nadd 0 1\nquery', expectedOutput: '1 2 1', hidden: false },
      { input: '2 2\n7\nadd 0 0\nadd 1 1\nquery\nadd 0 1\nadd 1 0\nquery\nremove 0 1\nquery', expectedOutput: '2 1 2', hidden: false },
      { input: '4 4\n10\nadd 0 0\nadd 0 1\nadd 1 0\nadd 2 2\nadd 2 3\nadd 3 2\nquery\nremove 0 0\nadd 0 2\nquery', expectedOutput: '2 3', hidden: true },
      { input: '3 3\n6\nadd 0 0\nadd 0 2\nadd 2 0\nadd 2 2\nquery\nadd 1 1\nquery', expectedOutput: '4 1', hidden: true }
    ],
    starterCode: {
      python: 'def numIslandsDynamic(m, n, operations):\n    # Use Union-Find with rollback or offline processing with segment tree\n    pass',
      java: 'public int[] numIslandsDynamic(int m, int n, String[] operations) {\n    // Use Union-Find with rollback or offline processing with segment tree\n    return new int[]{};\n}',
      c: 'int* numIslandsDynamic(int m, int n, char** operations, int opsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> numIslandsDynamic(int m, int n, vector<string>& operations) {\n    // Use Union-Find with rollback or offline processing with segment tree\n    return {};\n}'
    }
  },

  {
    id: 'rc-h5', title: 'Minimum Edges to Make Graph Eulerian', difficulty: 'Hard',
    description: 'Given an undirected graph with n nodes (labeled 1 to n) and m edges, you can add edges between any two nodes that are not already directly connected. Find the minimum number of edges to add so that the resulting graph has an Eulerian circuit (a cycle that uses every edge exactly once). An undirected graph has an Eulerian circuit iff every node has even degree and the graph is connected (ignoring isolated nodes). If the graph cannot be made Eulerian (e.g., too many odd-degree nodes that cannot be paired), return -1.',
    constraints: ['1 <= n <= 10^4', '0 <= m <= 2 * 10^4', '1 <= edges[i][0], edges[i][1] <= n', 'No self-loops', 'No duplicate edges'],
    examples: [
      { input: 'n = 5, edges = [[1,2],[2,3],[3,4],[4,5],[5,1]]', output: '0', explanation: 'All nodes have degree 2 (even) and the graph is connected. Already has an Eulerian circuit.' },
      { input: 'n = 6, edges = [[1,2],[2,3],[3,1],[4,5],[5,6]]', output: '2', explanation: 'Component 1: {1,2,3} all even degree. Component 2: {4,5,6} has odd-degree nodes 4 and 6. Need 1 edge to connect components and 1 edge to fix odd degrees. Total = 2.' },
      { input: 'n = 4, edges = [[1,2],[3,4]]', output: '2', explanation: 'Two components, each with 2 nodes of odd degree. Need 1 edge to connect components and 1 edge to pair remaining odd-degree nodes. Total = 2.' }
    ],
    testCases: [
      { input: '5\n5\n1 2\n2 3\n3 4\n4 5\n5 1', expectedOutput: '0', hidden: false },
      { input: '6\n5\n1 2\n2 3\n3 1\n4 5\n5 6', expectedOutput: '2', hidden: false },
      { input: '4\n2\n1 2\n3 4', expectedOutput: '2', hidden: false },
      { input: '7\n6\n1 2\n2 3\n3 1\n4 5\n5 6\n6 4', expectedOutput: '1', hidden: true },
      { input: '5\n3\n1 2\n3 4\n4 5', expectedOutput: '2', hidden: true }
    ],
    starterCode: {
      python: 'def minEdgesToMakeEulerian(n, edges):\n    # Use Union-Find to find components; count odd-degree nodes; compute min edges needed\n    pass',
      java: 'public int minEdgesToMakeEulerian(int n, int[][] edges) {\n    // Use Union-Find to find components; count odd-degree nodes; compute min edges needed\n    return 0;\n}',
      c: 'int minEdgesToMakeEulerian(int n, int** edges, int edgesSize) {\n    return 0;\n}',
      cpp: 'int minEdgesToMakeEulerian(int n, vector<vector<int>>& edges) {\n    // Use Union-Find to find components; count odd-degree nodes; compute min edges needed\n    return 0;\n}'
    }
  }
];
