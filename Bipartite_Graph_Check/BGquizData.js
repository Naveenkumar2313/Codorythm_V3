const quizData = [
  {
    id: 1,
    question: "What is a Bipartite Graph?",
    options: [
      "A graph where all vertices have the same degree",
      "A graph whose vertices can be divided into two independent sets such that no two vertices within the same set are adjacent",
      "A graph that contains no cycles",
      "A graph where every pair of vertices is connected by an edge"
    ],
    correctAnswer: "A graph whose vertices can be divided into two independent sets such that no two vertices within the same set are adjacent",
    explanation: "By definition, a bipartite graph allows the partitioning of vertices into two groups where edges only exist between groups, not within them."
  },
  {
    id: 2,
    question: "A graph is bipartite if and only if it does NOT contain:",
    options: [
      "Any cycles",
      "Even-length cycles",
      "Odd-length cycles",
      "Self-loops"
    ],
    correctAnswer: "Odd-length cycles",
    explanation: "A key theorem in graph theory is that a graph is bipartite if and only if it contains no cycles of odd length."
  },
  {
    id: 3,
    question: "Which of the following algorithms can be used to check if a graph is bipartite?",
    options: [
      "Dijkstra's Algorithm",
      "Bellman-Ford Algorithm",
      "BFS or DFS with 2-coloring",
      "Prim's Algorithm"
    ],
    correctAnswer: "BFS or DFS with 2-coloring",
    explanation: "Bipartiteness is checked by attempting to color the graph with two colors such that no adjacent vertices share the same color."
  },
  {
    id: 4,
    question: "What is the time complexity of checking if a graph is bipartite using BFS or DFS?",
    options: [
      "O(V)",
      "O(E)",
      "O(V + E)",
      "O(V * E)"
    ],
    correctAnswer: "O(V + E)",
    explanation: "The algorithm visits every vertex and every edge exactly once during the traversal."
  },
  {
    id: 5,
    question: "In the 2-coloring method, if we encounter an adjacent vertex that is already colored with the SAME color as the current vertex, what does this mean?",
    options: [
      "The graph is bipartite",
      "The graph contains an even cycle",
      "The graph is not bipartite",
      "The algorithm has reached a leaf node"
    ],
    correctAnswer: "The graph is not bipartite",
    explanation: "A color conflict indicates that the graph cannot be partitioned into two independent sets, implying the presence of an odd cycle."
  },
  {
    id: 6,
    question: "What is the space complexity of the Bipartite Graph Check algorithm?",
    options: [
      "O(1)",
      "O(V)",
      "O(E)",
      "O(V + E)"
    ],
    correctAnswer: "O(V)",
    explanation: "Extra space is required for the color array of size V and the recursion stack or queue used for traversal."
  },
  {
    id: 7,
    question: "Which of the following graphs is always bipartite?",
    options: [
      "Complete graphs with > 2 vertices",
      "Any graph with a cycle of length 3",
      "Any tree",
      "Any graph with an odd number of vertices"
    ],
    correctAnswer: "Any tree",
    explanation: "Trees contain no cycles, and therefore no odd cycles, making all trees bipartite."
  },
  {
    id: 8,
    question: "If a graph has components that are not connected, how should the bipartiteness check be handled?",
    options: [
      "Run BFS/DFS once from vertex 0",
      "The graph is automatically not bipartite",
      "Run the coloring process for every unvisited vertex to cover all components",
      "Only check the largest component"
    ],
    correctAnswer: "Run the coloring process for every unvisited vertex to cover all components",
    explanation: "To ensure the entire graph is bipartite, every connected component must be checked for 2-colorability."
  },
  {
    id: 9,
    question: "A complete bipartite graph K(m, n) has how many edges?",
    options: [
      "m + n",
      "m * n",
      "m^2 + n^2",
      "(m + n) / 2"
    ],
    correctAnswer: "m * n",
    explanation: "In a complete bipartite graph, every vertex in set U (size m) is connected to every vertex in set V (size n)."
  },
  {
    id: 10,
    question: "Which real-world problem can be modeled as a bipartite matching problem?",
    options: [
      "Finding the shortest path in a map",
      "Assigning students to internship projects",
      "Calculating the minimum spanning tree of a network",
      "Detecting cycles in a dependency graph"
    ],
    correctAnswer: "Assigning students to internship projects",
    explanation: "Matching students to projects creates a bipartite graph where one set is students and the other is projects."
  }
];

export default quizData;
