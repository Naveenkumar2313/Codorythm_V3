export const nextGreaterElementQuizData = [
  {
    id: 1,
    question: "What is the main goal of the Next Greater Element algorithm?",
    options: [
      "To find the largest element in the entire array",
      "To find the first strictly greater element to the right of each element",
      "To sort the array in increasing order",
      "To count how many greater elements exist"
    ],
    correctAnswer: "To find the first strictly greater element to the right of each element",
    explanation: "For each position, the algorithm finds the nearest element on its right that is strictly greater."
  },
  {
    id: 2,
    question: "Which data structure is most commonly used for the optimal Next Greater Element solution?",
    options: [
      "Queue",
      "Hash Set",
      "Monotonic Stack",
      "Binary Tree"
    ],
    correctAnswer: "Monotonic Stack",
    explanation: "A monotonic stack keeps only useful candidates for future next greater comparisons."
  },
  {
    id: 3,
    question: "In the standard right-to-left approach, when should elements be popped from the stack?",
    options: [
      "When they are less than or equal to the current element",
      "When they are greater than the current element",
      "Only when the stack has one element",
      "Only when the current element is negative"
    ],
    correctAnswer: "When they are less than or equal to the current element",
    explanation: "Smaller or equal elements cannot be the next greater element for the current position."
  },
  {
    id: 4,
    question: "What answer is stored when no greater element exists to the right?",
    options: [
      "0",
      "-1",
      "The current element",
      "The last element"
    ],
    correctAnswer: "-1",
    explanation: "-1 is commonly used to indicate that a next greater element does not exist."
  },
  {
    id: 5,
    question: "What is the time complexity of the optimal Next Greater Element algorithm?",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    correctAnswer: "O(n)",
    explanation: "Each element is pushed once and popped at most once, so the total work is linear."
  },
  {
    id: 6,
    question: "What is the worst-case auxiliary space complexity of the algorithm?",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    correctAnswer: "O(n)",
    explanation: "In the worst case, the stack may store all elements."
  },
  {
    id: 7,
    question: "For nums = [2, 1, 3], what is the next greater element array?",
    options: [
      "[3, 3, -1]",
      "[1, 3, -1]",
      "[3, -1, -1]",
      "[-1, 3, 3]"
    ],
    correctAnswer: "[3, 3, -1]",
    explanation: "Both 2 and 1 have 3 as the first greater value to their right, while 3 has none."
  },
  {
    id: 8,
    question: "How are duplicate equal values handled in a strictly greater comparison?",
    options: [
      "An equal value is accepted as the next greater element",
      "Equal values are ignored by popping them from the stack",
      "Duplicate values make the algorithm invalid",
      "Only the first duplicate is considered"
    ],
    correctAnswer: "Equal values are ignored by popping them from the stack",
    explanation: "The next greater element must be strictly greater, so equal values cannot qualify."
  },
  {
    id: 9,
    question: "Why is a brute-force solution inefficient for large arrays?",
    options: [
      "It requires sorting before every comparison",
      "It may scan many elements to the right for every index",
      "It cannot handle negative numbers",
      "It uses recursion"
    ],
    correctAnswer: "It may scan many elements to the right for every index",
    explanation: "Checking every later element for every index can lead to O(n^2) time."
  },
  {
    id: 10,
    question: "Which statement best describes the stack used in the right-to-left solution?",
    options: [
      "It stores values in increasing order from top to bottom",
      "It stores only candidates that may be next greater elements",
      "It stores every element permanently",
      "It stores indices only and never values"
    ],
    correctAnswer: "It stores only candidates that may be next greater elements",
    explanation: "Values that cannot help future positions are removed, leaving only useful candidates."
  }
];
