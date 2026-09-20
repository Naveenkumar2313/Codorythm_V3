const quizData = [
  {
    id: 1,
    question: "What is the primary goal of Prim's Algorithm?",
    options: [
      "To find the shortest path between two vertices",
      "To find the Minimum Spanning Tree (MST) of a weighted undirected graph",
      "To detect cycles in a directed graph",
      "To find the maximum flow in a network"
    ],
    correctAnswer: "To find the Minimum Spanning Tree (MST) of a weighted undirected graph",
    explanation: "Prim's algorithm is a greedy algorithm designed to connect all vertices in a weighted undirected graph with the minimum possible total edge weight."
  },
  {
    id: 2,
    question: "Which data structure is most commonly used to optimize the selection of the minimum weight edge in Prim's algorithm?",
    options: [
      "Stack",
      "Queue",
      "Priority Queue (Min-Heap)",
      "Hash Map"
    ],
    correctAnswer: "Priority Queue (Min-Heap)",
    explanation: "A Min-Heap allows the algorithm to efficiently extract the vertex with the minimum key value in O(log V) time."
  },
  {
    id: 3,
    question: "What is the time complexity of Prim's algorithm when implemented with an adjacency list and a binary heap?",
    options: [
      "O(V^2)",
      "O(E log V)",
      "O(V + E)",
      "O(E log E)"
    ],
    correctAnswer: "O(E log V)",
    explanation: "Each edge is visited, and each vertex may be updated in the priority queue, leading to a total complexity of O(E log V)."
  },
  {
    id: 4,
    question: "Which of the following statements is TRUE about Prim's algorithm?",
    options: [
      "It works on both directed and undirected graphs",
      "It can handle disconnected graphs by default",
      "It grows the MST by adding the cheapest edge from the existing tree to a new vertex",
      "It is a dynamic programming algorithm"
    ],
    correctAnswer: "It grows the MST by adding the cheapest edge from the existing tree to a new vertex",
    explanation: "Prim's is a greedy algorithm that expands a single connected component until all vertices are covered."
  },
  {
    id: 5,
    question: "What is the difference between Prim's and Kruskal's algorithms?",
    options: [
      "Prim's is for directed graphs, Kruskal's is for undirected",
      "Prim's grows a single tree, while Kruskal's merges multiple forest components",
      "Prim's is a dynamic programming approach, Kruskal's is greedy",
      "Prim's finds the longest path, Kruskal's finds the shortest"
    ],
    correctAnswer: "Prim's grows a single tree, while Kruskal's merges multiple forest components",
    explanation: "Prim's algorithm starts from one vertex and expands; Kruskal's sorts all edges and adds them if they don't form a cycle."
  },
  {
    id: 6,
    question: "If a graph has V vertices, how many edges will the resulting Minimum Spanning Tree (MST) have?",
    options: [
      "V",
      "V + 1",
      "V - 1",
      "E / 2"
    ],
    correctAnswer: "V - 1",
    explanation: "By definition, a spanning tree of a graph with V vertices must have exactly V-1 edges to be connected and acyclic."
  },
  {
    id: 7,
    question: "What happens if Prim's algorithm is applied to a disconnected graph?",
    options: [
      "It finds the MST for the entire graph",
      "It crashes",
      "It finds the MST only for the connected component containing the starting vertex",
      "It finds a spanning forest"
    ],
    correctAnswer: "It finds the MST only for the connected component containing the starting vertex",
    explanation: "Because Prim's only explores vertices reachable from the root, it cannot jump to a disconnected component."
  },
  {
    id: 8,
    question: "In Prim's algorithm, what does the 'key' value of a vertex represent?",
    options: [
      "The total distance from the source vertex",
      "The weight of the cheapest edge connecting the vertex to the current MST",
      "The number of edges incident to the vertex",
      "The index of the vertex in the priority queue"
    ],
    correctAnswer: "The weight of the cheapest edge connecting the vertex to the current MST",
    explanation: "The key stores the minimum weight edge that can bring that vertex into the growing MST."
  },
  {
    id: 9,
    question: "Which of the following is a real-life application of Prim's algorithm?",
    options: [
      "Finding the shortest path between two cities",
      "Designing a cable network to connect all buildings with minimum cost",
      "Sorting a list of numbers",
      "Checking if a graph is bipartite"
    ],
    correctAnswer: "Designing a cable network to connect all buildings with minimum cost",
    explanation: "Connecting a set of points with minimum total distance is a classic MST problem."
  },
  {
    id: 10,
    question: "What is the space complexity of Prim's algorithm?",
    options: [
      "O(1)",
      "O(V)",
      "O(V + E)",
      "O(E^2)"
    ],
    correctAnswer: "O(V + E)",
    explanation: "Space is needed for the adjacency list O(V+E), the key array O(V), parent array O(V), and the priority queue O(V)."
  }
];

export default quizData;
