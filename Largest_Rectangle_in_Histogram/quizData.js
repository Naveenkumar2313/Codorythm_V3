export const largestRectangleInHistogramQuizData = [
  {
    id: 1,
    question: "What is the main goal of the Largest Rectangle in Histogram algorithm?",
    options: [
      "To find the tallest bar in the histogram",
      "To find the maximum rectangular area under the histogram",
      "To sort the bars by height",
      "To count the number of bars"
    ],
    correctAnswer: "To find the maximum rectangular area under the histogram",
    explanation: "The algorithm finds the largest rectangle that fits completely under the histogram bars."
  },
  {
    id: 2,
    question: "Which data structure is most commonly used for the optimal solution?",
    options: [
      "Queue",
      "Hash Map",
      "Monotonic Stack",
      "Binary Tree"
    ],
    correctAnswer: "Monotonic Stack",
    explanation: "A monotonic stack keeps track of bar indices in increasing order of heights."
  },
  {
    id: 3,
    question: "What type of stack is maintained in the standard approach?",
    options: [
      "Monotonic increasing stack",
      "Monotonic decreasing stack",
      "Random order stack",
      "Sorted by index stack"
    ],
    correctAnswer: "Monotonic increasing stack",
    explanation: "The stack stores indices of bars with heights in increasing order from bottom to top."
  },
  {
    id: 4,
    question: "When is a bar popped from the stack during processing?",
    options: [
      "When a shorter bar is encountered",
      "When a taller bar is encountered",
      "When the stack is full",
      "When the bar is at the end"
    ],
    correctAnswer: "When a shorter bar is encountered",
    explanation: "Bars taller than the current bar are popped because they cannot extend further right."
  },
  {
    id: 5,
    question: "What is the time complexity of the optimal algorithm?",
    options: [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(n^2)"
    ],
    correctAnswer: "O(n)",
    explanation: "Each bar is pushed and popped exactly once, giving linear time complexity."
  },
  {
    id: 6,
    question: "What is the space complexity of the algorithm?",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    correctAnswer: "O(n)",
    explanation: "The stack can store up to n indices in the worst case."
  },
  {
    id: 7,
    question: "For heights = [2, 1, 5, 6, 2, 3], what is the largest rectangle area?",
    options: [
      "10",
      "12",
      "8",
      "6"
    ],
    correctAnswer: "10",
    explanation: "The largest rectangle has height 5 and width 2, giving area 10."
  },
  {
    id: 8,
    question: "What happens to remaining bars in the stack after processing all bars?",
    options: [
      "They are ignored",
      "They are processed with right boundary at n",
      "They are sorted",
      "They are removed immediately"
    ],
    correctAnswer: "They are processed with right boundary at n",
    explanation: "Remaining bars can extend to the end of the histogram, so the right boundary is n."
  },
  {
    id: 9,
    question: "Why is a brute-force approach inefficient for large histograms?",
    options: [
      "It requires sorting",
      "It may check O(n^2) subarrays",
      "It uses too much memory",
      "It cannot handle negative heights"
    ],
    correctAnswer: "It may check O(n^2) subarrays",
    explanation: "Checking every possible range of bars leads to quadratic time complexity."
  },
  {
    id: 10,
    question: "What is the width of a rectangle when a bar at index i is popped?",
    options: [
      "i - stack.top",
      "stack.top - i",
      "i - left - 1",
      "left - i + 1"
    ],
    correctAnswer: "i - left - 1",
    explanation: "The width is the distance between the current index and the new stack top (left boundary)."
  }
];