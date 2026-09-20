const quizData = [
  {
    id: 1,
    question: "What is an Articulation Point in an undirected graph?",
    options: [
      "A vertex that is connected to all other vertices",
      "A vertex whose removal increases the number of connected components",
      "A vertex that is part of every cycle in the graph",
      "A vertex with the highest degree in the graph"
    ],
    correctAnswer: "A vertex whose removal increases the number of connected components",
    explanation: "An articulation point (or cut vertex) is a critical node that, if removed, breaks the graph into more pieces."
  },
  {
    id: 2,
    question: "What is a Bridge in an undirected graph?",
    options: [
      "An edge that connects two different connected components",
      "An edge whose removal increases the number of connected components",
      "The edge with the minimum weight in the MST",
      "An edge that is part of every cycle"
    ],
    correctAnswer: "An edge whose removal increases the number of connected components",
    explanation: "A bridge (or cut edge) is a critical link that, if removed, disconnects the graph."
  },
  {
    id: 3,
    question: "In Tarjan's algorithm, what does 'discovery time' (disc) represent?",
    options: [
      "The time when a vertex was first visited during DFS",
      "The time when a vertex was finished during DFS",
      "The shortest distance from the root to the vertex",
      "The number of children of the vertex in the DFS tree"
    ],
    correctAnswer: "The time when a vertex was first visited during DFS",
    explanation: "Discovery time is a counter incremented each time a new vertex is visited during the DFS traversal."
  },
  {
    id: 4,
    question: "What does the 'low-link value' (low) represent in Tarjan's algorithm?",
    options: [
      "The minimum discovery time among all descendants in the DFS tree",
      "The minimum discovery time reachable from the vertex, including back-edges to ancestors",
      "The distance to the nearest articulation point",
      "The number of back-edges incident to the vertex"
    ],
    correctAnswer: "The minimum discovery time reachable from the vertex, including back-edges to ancestors",
    explanation: "The low-link value identifies the highest ancestor reachable from the vertex's subtree."
  },
  {
    id: 5,
    question: "Under what condition is an edge (u, v) considered a bridge in Tarjan's algorithm (where v is a child of u)?",
    options: [
      "low[v] < disc[u]",
      "low[v] == disc[u]",
      "low[v] > disc[u]",
      "low[v] == low[u]"
    ],
    correctAnswer: "low[v] > disc[u]",
    explanation: "If low[v] > disc[u], it means there is no back-edge from v or any of its descendants to u or any of u's ancestors, making (u, v) a critical link."
  },
  {
    id: 6,
    question: "When is the root of the DFS tree considered an articulation point?",
    options: [
      "When it has at least one child",
      "When it has at least two children in the DFS tree",
      "When it is connected to a bridge",
      "The root can never be an articulation point"
    ],
    correctAnswer: "When it has at least two children in the DFS tree",
    explanation: "If the root has two or more children in the DFS tree, removing the root will separate those children's subtrees."
  },
  {
    id: 7,
    question: "What is the time complexity of Tarjan's algorithm for finding bridges and articulation points?",
    options: [
      "O(V^2)",
      "O(E log V)",
      "O(V + E)",
      "O(V * E)"
    ],
    correctAnswer: "O(V + E)",
    explanation: "The algorithm is a modified DFS, visiting every vertex and edge exactly once."
  },
  {
    id: 8,
    question: "What is the space complexity of Tarjan's algorithm?",
    options: [
      "O(1)",
      "O(V)",
      "O(E)",
      "O(V + E)"
    ],
    correctAnswer: "O(V)",
    explanation: "Space is needed for discovery time, low-link values, visited arrays, and the recursion stack, all of which are proportional to the number of vertices."
  },
  {
    id: 9,
    question: "If a graph has no articulation points and no bridges, what can we say about its connectivity?",
    options: [
      "It is a tree",
      "It is a complete graph",
      "It is 2-vertex-connected and 2-edge-connected",
      "It is disconnected"
    ],
    correctAnswer: "It is 2-vertex-connected and 2-edge-connected",
    explanation: "The absence of articulation points and bridges means the graph remains connected even after removing any single vertex or edge."
  },
  {
    id: 10,
    question: "Which of the following is NOT a requirement for the 'low' value update during a back-edge (u, v)?",
    options: [
      "Update low[u] using disc[v]",
      "Ensure v is not the parent of u",
      "Update low[u] using low[v]",
      "Check if v has been visited"
    ],
    correctAnswer: "Update low[u] using low[v]",
    explanation: "For back-edges, we update using the discovery time of the ancestor (disc[v]), not its low-link value, to avoid incorrect propagation."
  }
];

export default quizData;
