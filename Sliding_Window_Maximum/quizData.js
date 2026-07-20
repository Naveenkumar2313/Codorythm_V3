export const slidingWindowMaximumQuizData = [
  {
    id: 1,
    question: "What is the main goal of the Sliding Window Maximum algorithm?",
    options: [
      "To find the minimum value in each window",
      "To find the maximum value in each sliding window of size k",
      "To sort the array within each window",
      "To count elements in each window"
    ],
    correctAnswer: "To find the maximum value in each sliding window of size k",
    explanation: "The algorithm finds the maximum element in every contiguous window of size k as it slides through the array."
  },
  {
    id: 2,
    question: "Which data structure is most commonly used for the optimal solution?",
    options: [
      "Stack",
      "Queue",
      "Monotonic Deque",
      "Hash Map"
    ],
    correctAnswer: "Monotonic Deque",
    explanation: "A monotonic deque maintains indices in decreasing order of values, allowing O(1) access to the maximum."
  },
  {
    id: 3,
    question: "What type of deque is maintained in the standard approach?",
    options: [
      "Monotonic increasing deque",
      "Monotonic decreasing deque",
      "Random order deque",
      "Sorted by index deque"
    ],
    correctAnswer: "Monotonic decreasing deque",
    explanation: "The deque stores indices of elements in decreasing order of their values from front to back."
  },
  {
    id: 4,
    question: "For nums = [1, 3, -1, -3, 5, 3, 6, 7] and k = 3, what is the output?",
    options: [
      "[3, 3, 5, 5, 6, 7]",
      "[3, 3, 5, 5, 6, 7]",
      "[1, 3, 5, 6, 7]",
      "[-1, 5, 6, 7]"
    ],
    correctAnswer: "[3, 3, 5, 5, 6, 7]",
    explanation: "Each window of size 3 has maximum values: [1,3,-1]->3, [3,-1,-3]->3, [-1,-3,5]->5, [-3,5,3]->5, [5,3,6]->6, [3,6,7]->7."
  },
  {
    id: 5,
    question: "What is the time complexity of the optimal Sliding Window Maximum algorithm?",
    options: [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(n^2)"
    ],
    correctAnswer: "O(n)",
    explanation: "Each element is added and removed from the deque at most once, giving linear time complexity."
  },
  {
    id: 6,
    question: "What is the space complexity of the algorithm?",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(k)"
    ],
    correctAnswer: "O(k)",
    explanation: "The deque can store at most k indices at any time, one for each element in the current window."
  },
  {
    id: 7,
    question: "When should elements be removed from the back of the deque?",
    options: [
      "When they are greater than the current element",
      "When they are less than the current element",
      "When the deque is full",
      "When the current element is negative"
    ],
    correctAnswer: "When they are less than the current element",
    explanation: "Smaller elements at the back cannot be the maximum for any future window, so they are removed."
  },
  {
    id: 8,
    question: "When should elements be removed from the front of the deque?",
    options: [
      "When they are out of the current window range",
      "When they are the maximum",
      "When the window size changes",
      "When they are negative"
    ],
    correctAnswer: "When they are out of the current window range",
    explanation: "Indices that fall outside the current window (i - k + 1) are removed from the front."
  },
  {
    id: 9,
    question: "Why is a brute-force solution inefficient for large arrays?",
    options: [
      "It requires sorting",
      "It may scan k elements for each of the n windows",
      "It uses too much memory",
      "It cannot handle negative numbers"
    ],
    correctAnswer: "It may scan k elements for each of the n windows",
    explanation: "Checking each window independently leads to O(n * k) time complexity."
  },
  {
    id: 10,
    question: "What is the front of the deque always pointing to?",
    options: [
      "The minimum element in the current window",
      "The maximum element in the current window",
      "The first element of the array",
      "The last element added"
    ],
    correctAnswer: "The maximum element in the current window",
    explanation: "The front of the deque always contains the index of the maximum value in the current window."
  }
];