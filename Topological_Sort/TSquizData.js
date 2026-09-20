const quizData = [
  {
    id: 1,
    question: "What is a Topological Sort of a Directed Acyclic Graph (DAG)?",
    options: [
      "A sort that arranges vertices in alphabetical order",
      "A linear ordering of vertices such that for every directed edge (u, v), vertex u comes before v",
      "A method to find the shortest path in a weighted graph",
      "A way to visit all vertices in a graph using BFS"
    ],
    correctAnswer: "A linear ordering of vertices such that for every directed edge (u, v), vertex u comes before v",
    explanation: "Topological sort ensures that all dependencies are processed before the vertex that depends on them."
  },
  {
    id: 2,
    question: "Which of the following is a requirement for a graph to have a Topological Sort?",
    options: [
      "The graph must be undirected",
      "The graph must be connected",
      "The graph must be a Directed Acyclic Graph (DAG)",
      "The graph must have weighted edges"
    ],
    correctAnswer: "The graph must be a Directed Acyclic Graph (DAG)",
    explanation: "If a graph has a cycle, there is no valid linear ordering where all dependencies come before the vertices that depend on them."
  },
  {
    id: 3,
    question: "In Kahn's Algorithm, which vertices are initially added to the queue?",
    options: [
      "Vertices with out-degree of 0",
      "Vertices with in-degree of 0",
      "Randomly selected vertices",
      "Vertices with the highest degree"
    ],
    correctAnswer: "Vertices with in-degree of 0",
    explanation: "Vertices with in-degree 0 have no dependencies and can be processed immediately."
  },
  {
    id: 4,
    question: "What is the time complexity of Topological Sort using either BFS or DFS?",
    options: [
      "O(V)",
      "O(E)",
      "O(V + E)",
      "O(V * E)"
    ],
    correctAnswer: "O(V + E)",
    explanation: "Every vertex and every edge is visited exactly once during the traversal."
  },
  {
    id: 5,
    question: "In the DFS-based approach to Topological Sort, when is a vertex pushed onto the stack?",
    options: [
      "As soon as it is first visited",
      "When its first neighbor is visited",
      "After all its neighbors have been recursively visited",
      "Before any of its neighbors are visited"
    ],
    correctAnswer: "After all its neighbors have been recursively visited",
    explanation: "A vertex is added to the stack only after its entire dependency subtree has been processed."
  },
  {
    id: 6,
    question: "If Kahn's Algorithm finishes and the number of vertices in the sorted list is less than V, what does this indicate?",
    options: [
      "The graph is disconnected",
      "The graph contains a cycle",
      "The graph is a tree",
      "The graph has no edges"
    ],
    correctAnswer: "The graph contains a cycle",
    explanation: "In a cycle, no vertex in the cycle will ever reach an in-degree of 0, so they will never be added to the queue."
  },
  {
    id: 7,
    question: "What is the space complexity of the Topological Sort algorithm?",
    options: [
      "O(1)",
      "O(V)",
      "O(E)",
      "O(V + E)"
    ],
    correctAnswer: "O(V)",
    explanation: "Extra space is required for the in-degree array, the queue/stack, and the result list, all of which scale with the number of vertices V."
  },
  {
    id: 8,
    question: "Which real-world application directly utilizes Topological Sort?",
    options: [
      "Finding the shortest path in Google Maps",
      "Finding the maximum flow in a network",
      "Determining the compilation order of modules in a build system",
      "Finding the minimum spanning tree of a city's power grid"
    ],
    correctAnswer: "Determining the compilation order of modules in a build system",
    explanation: "Build systems use topological sort to ensure dependencies are compiled before the modules that rely on them."
  },
  {
    id: 9,
    question: "Given a graph with edges (A, B), (A, C), (B, D), (C, D), which of the following is a valid topological sort?",
    options: [
      "D, B, C, A",
      "A, B, C, D",
      "A, D, B, C",
      "B, A, C, D"
    ],
    correctAnswer: "A, B, C, D",
    explanation: "A must come before B and C; B and C must come before D. A, B, C, D satisfies this."
  },
  {
    id: 10,
    question: "Can a graph have more than one valid topological sort?",
    options: [
      "No, it is always unique",
      "Yes, if there are multiple vertices with in-degree 0 at the same time",
      "Only if the graph is disconnected",
      "Only if the graph has weighted edges"
    ],
    correctAnswer: "Yes, if there are multiple vertices with in-degree 0 at the same time",
    explanation: "Whenever multiple vertices are available to be picked (in-degree 0), any of them can be chosen, leading to different valid orderings."
  }
];

export default quizData;
