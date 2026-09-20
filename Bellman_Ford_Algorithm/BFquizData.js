const quizData = [
  {
    id: 1,
    question: "What is the primary advantage of the Bellman-Ford algorithm over Dijkstra's algorithm?",
    options: [
      "It has a faster time complexity",
      "It can handle negative edge weights",
      "It uses less memory",
      "It finds all paths between two nodes"
    ],
    correctAnswer: "It can handle negative edge weights",
    explanation: "Dijkstra's algorithm fails when negative edges are present, whereas Bellman-Ford correctly computes the shortest path or detects negative cycles."
  },
  {
    id: 2,
    question: "What is the time complexity of the Bellman-Ford algorithm?",
    options: [
      "O(V + E)",
      "O(E log V)",
      "O(V * E)",
      "O(V^2)"
    ],
    correctAnswer: "O(V * E)",
    explanation: "The algorithm relaxes all E edges V-1 times, resulting in a total complexity of O(V * E)."
  },
  {
    id: 3,
    question: "How many times must all edges be relaxed to guarantee the shortest paths in a graph with V vertices (assuming no negative cycles)?",
    options: [
      "V times",
      "V - 1 times",
      "E times",
      "log V times"
    ],
    correctAnswer: "V - 1 times",
    explanation: "In a graph with V vertices, the shortest path between any two vertices can contain at most V-1 edges."
  },
  {
    id: 4,
    question: "How does the Bellman-Ford algorithm detect a negative weight cycle?",
    options: [
      "If a vertex is visited twice",
      "If the queue becomes empty before all vertices are visited",
      "By performing one final relaxation of all edges; if any distance decreases, a negative cycle exists",
      "If the total distance becomes negative"
    ],
    correctAnswer: "By performing one final relaxation of all edges; if any distance decreases, a negative cycle exists",
    explanation: "After V-1 relaxations, distances are optimal. A further decrease on the V-th pass proves the existence of a negative cycle."
  },
  {
    id: 5,
    question: "What happens to the distance values in a negative weight cycle during the Bellman-Ford process?",
    options: [
      "They become zero",
      "They remain constant",
      "They keep decreasing infinitely with each iteration",
      "They increase exponentially"
    ],
    correctAnswer: "They keep decreasing infinitely with each iteration",
    explanation: "Each traversal of a negative cycle reduces the path cost, meaning there is no 'shortest' path as it can always be made shorter."
  },
  {
    id: 6,
    question: "Which of the following is a real-world application of the Bellman-Ford algorithm?",
    options: [
      "Finding the Minimum Spanning Tree",
      "Detecting arbitrage opportunities in currency exchange",
      "Calculating the fastest route in a city with only positive road weights",
      "Sorting a large array of integers"
    ],
    correctAnswer: "Detecting arbitrage opportunities in currency exchange",
    explanation: "Arbitrage involves finding a cycle where the product of exchange rates is > 1, which can be converted to a negative cycle using logarithms."
  },
  {
    id: 7,
    question: "What is the initial distance assigned to the source vertex in Bellman-Ford?",
    options: [
      "Infinity",
      "0",
      "1",
      "-1"
    ],
    correctAnswer: "0",
    explanation: "The distance from the source to itself is always 0."
  },
  {
    id: 8,
    question: "If a graph has 5 vertices and 10 edges, how many relaxations are performed in the main loop of Bellman-Ford?",
    options: [
      "40",
      "50",
      "14",
      "5"
    ],
    correctAnswer: "40",
    explanation: "The loop runs V-1 times (5-1=4). In each iteration, all E edges (10) are relaxed. 4 * 10 = 40."
  },
  {
    id: 9,
    question: "Which of the following is TRUE about Bellman-Ford?",
    options: [
      "It is a greedy algorithm",
      "It is based on the principle of dynamic programming",
      "It is faster than Dijkstra's for dense graphs",
      "It cannot be used on directed graphs"
    ],
    correctAnswer: "It is based on the principle of dynamic programming",
    explanation: "Bellman-Ford builds the solution by iteratively improving estimates, a hallmark of dynamic programming."
  },
  {
    id: 10,
    question: "In a graph with no negative edges, what is the result of Bellman-Ford compared to Dijkstra's?",
    options: [
      "It produces a different result",
      "It produces the same result but takes longer",
      "It fails to find the shortest path",
      "It is more efficient"
    ],
    correctAnswer: "It produces the same result but takes longer",
    explanation: "Both algorithms find the single-source shortest path, but Bellman-Ford has a worse time complexity."
  }
];

export default quizData;
