export const rangeSumQueryImmutableQuiz = [
  {
    question: "What is the main purpose of the Range Sum Query – Immutable algorithm?",
    options: [
      "To sort an array",
      "To answer multiple range sum queries efficiently",
      "To search for an element",
      "To reverse an array"
    ],
    answer: "To answer multiple range sum queries efficiently",
    explanation: "The algorithm preprocesses the array so that multiple range sum queries can be answered in constant time."
  },
  {
    question: "Which data structure is used in this algorithm?",
    options: [
      "Stack",
      "Queue",
      "Prefix Sum Array",
      "Heap"
    ],
    answer: "Prefix Sum Array",
    explanation: "A Prefix Sum array stores cumulative sums that make range queries efficient."
  },
  {
    question: "What is the time complexity for preprocessing the Prefix Sum array?",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    answer: "O(n)",
    explanation: "The Prefix Sum array is built by traversing the array once."
  },
  {
    question: "What is the time complexity of answering a single range sum query after preprocessing?",
    options: [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    answer: "O(1)",
    explanation: "The sum is computed using two Prefix Sum values."
  },
  {
    question: "What happens if the original array is modified?",
    options: [
      "Nothing changes",
      "Only one Prefix Sum value changes",
      "The Prefix Sum array must be rebuilt",
      "The algorithm stops working permanently"
    ],
    answer: "The Prefix Sum array must be rebuilt",
    explanation: "Any update invalidates the existing Prefix Sum array."
  },
  {
    question: "Which formula is used to find the sum from index left to right?",
    options: [
      "prefix[right] + prefix[left]",
      "prefix[right] - prefix[left - 1]",
      "prefix[left] - prefix[right]",
      "prefix[right] × prefix[left]"
    ],
    answer: "prefix[right] - prefix[left - 1]",
    explanation: "Subtracting the Prefix Sum before the left index gives the required range sum."
  },
  {
    question: "Which of the following is an advantage of this algorithm?",
    options: [
      "Supports fast updates",
      "Requires no extra memory",
      "Provides constant-time range queries",
      "Sorts the array automatically"
    ],
    answer: "Provides constant-time range queries",
    explanation: "After preprocessing, every query takes O(1) time."
  },
  {
    question: "What is the space complexity of this algorithm?",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    answer: "O(n)",
    explanation: "An additional Prefix Sum array of size n is required."
  },
  {
    question: "When is this algorithm most useful?",
    options: [
      "When the array changes frequently",
      "When only one query is performed",
      "When many range sum queries are performed on an unchanged array",
      "When sorting is required"
    ],
    answer: "When many range sum queries are performed on an unchanged array",
    explanation: "The preprocessing cost is worthwhile when many queries are executed."
  },
  {
    question: "Which data structure is better when the array is updated frequently?",
    options: [
      "Prefix Sum Array",
      "Linked List",
      "Segment Tree",
      "Stack"
    ],
    answer: "Segment Tree",
    explanation: "Segment Trees efficiently support both updates and range queries."
  }
];