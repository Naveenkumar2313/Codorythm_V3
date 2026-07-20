export const differenceArrayQuiz = [
  {
    id: 1,
    question: "What is the primary purpose of a Difference Array?",
    options: [
      "To efficiently perform range update operations",
      "To sort an array",
      "To search for an element",
      "To reverse an array"
    ],
    correctAnswer: "To efficiently perform range update operations",
    explanation: "A Difference Array allows multiple range updates to be processed in constant time per update."
  },
  {
    id: 2,
    question: "What operation is performed at the starting index of a range update [L, R] with value X?",
    options: [
      "Subtract X",
      "Add X",
      "Multiply by X",
      "Divide by X"
    ],
    correctAnswer: "Add X",
    explanation: "The update begins by adding X at index L in the difference array."
  },
  {
    id: 3,
    question: "What operation is performed at index R + 1 during a range update, if it exists?",
    options: [
      "Add X",
      "Multiply by X",
      "Subtract X",
      "Set it to zero"
    ],
    correctAnswer: "Subtract X",
    explanation: "Subtracting X at R + 1 ensures that the update effect stops after index R."
  },
  {
    id: 4,
    question: "Which technique is used to reconstruct the final updated array from the difference array?",
    options: [
      "Binary Search",
      "Prefix Sum",
      "Merge Sort",
      "Depth-First Search"
    ],
    correctAnswer: "Prefix Sum",
    explanation: "A prefix sum traversal converts the difference array into the final updated array."
  },
  {
    id: 5,
    question: "What is the time complexity of a single range update using a Difference Array?",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    correctAnswer: "O(1)",
    explanation: "Each update modifies only two positions in the difference array."
  },
  {
    id: 6,
    question: "What is the overall time complexity after applying q updates and reconstructing the array?",
    options: [
      "O(n × q)",
      "O(n²)",
      "O(n + q)",
      "O(q²)"
    ],
    correctAnswer: "O(n + q)",
    explanation: "Each update is O(1), and reconstruction requires one O(n) prefix sum traversal."
  },
  {
    id: 7,
    question: "Which data structure is most commonly combined with a Difference Array?",
    options: [
      "Prefix Sum",
      "Heap",
      "Trie",
      "Stack"
    ],
    correctAnswer: "Prefix Sum",
    explanation: "Prefix sums are required to reconstruct the final array after all updates."
  },
  {
    id: 8,
    question: "Which scenario is best suited for a Difference Array?",
    options: [
      "Multiple range updates on an array",
      "Frequent binary searches",
      "Finding shortest paths in a graph",
      "Sorting linked lists"
    ],
    correctAnswer: "Multiple range updates on an array",
    explanation: "Difference Arrays are specifically designed for efficient range update operations."
  },
  {
    id: 9,
    question: "What is the auxiliary space complexity of a Difference Array?",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    correctAnswer: "O(n)",
    explanation: "An additional array of size n is maintained to store the differences."
  },
  {
    id: 10,
    question: "What happens if the subtraction at index R + 1 is omitted during an update?",
    options: [
      "The update effect continues beyond the intended range",
      "The algorithm becomes faster",
      "The array gets sorted",
      "Nothing changes"
    ],
    correctAnswer: "The update effect continues beyond the intended range",
    explanation: "Subtracting at R + 1 stops the propagated update during the prefix sum reconstruction."
  }
];