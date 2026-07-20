export const maximumSizeSubarraySumEqualsKQuiz = [
  {
    id: 1,
    question: "What is the primary technique used to solve the Maximum Size Subarray Sum Equals K problem efficiently?",
    options: [
      "Sliding Window",
      "Prefix Sum with Hash Map",
      "Binary Search",
      "Dynamic Programming"
    ],
    correctAnswer: "Prefix Sum with Hash Map",
    explanation: "The algorithm uses prefix sums along with a hash map to quickly identify subarrays whose sum equals K."
  },
  {
    id: 2,
    question: "What does the prefix sum at index i represent?",
    options: [
      "Sum of elements after index i",
      "Sum of all elements from index 0 to i",
      "Largest element till index i",
      "Number of elements till index i"
    ],
    correctAnswer: "Sum of all elements from index 0 to i",
    explanation: "A prefix sum stores the cumulative sum from the beginning of the array up to the current index."
  },
  {
    id: 3,
    question: "Why is a hash map used in this algorithm?",
    options: [
      "To sort the array",
      "To store prefix sums and their earliest indices",
      "To remove duplicate elements",
      "To reverse the array"
    ],
    correctAnswer: "To store prefix sums and their earliest indices",
    explanation: "The hash map allows constant-time lookup of previously seen prefix sums."
  },
  {
    id: 4,
    question: "When does a subarray with sum K exist?",
    options: [
      "When currentPrefix == K",
      "When currentPrefix - K exists in the hash map",
      "Both of the above",
      "Never"
    ],
    correctAnswer: "Both of the above",
    explanation: "A valid subarray exists if the prefix sum itself equals K or if a previous prefix sum differs by K."
  },
  {
    id: 5,
    question: "Why should each prefix sum be stored only once?",
    options: [
      "To reduce sorting time",
      "To preserve the earliest occurrence for maximum length",
      "To avoid integer overflow",
      "To improve recursion"
    ],
    correctAnswer: "To preserve the earliest occurrence for maximum length",
    explanation: "Keeping the first occurrence maximizes the possible subarray length."
  },
  {
    id: 6,
    question: "What is the time complexity of this algorithm?",
    options: [
      "O(n²)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    correctAnswer: "O(n)",
    explanation: "Each element is processed exactly once, making the algorithm linear."
  },
  {
    id: 7,
    question: "What is the space complexity of the algorithm?",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    correctAnswer: "O(n)",
    explanation: "The hash map may store up to one prefix sum for every element."
  },
  {
    id: 8,
    question: "Can this algorithm handle arrays containing negative numbers?",
    options: [
      "No",
      "Only positive numbers are allowed",
      "Yes",
      "Only if K is positive"
    ],
    correctAnswer: "Yes",
    explanation: "Unlike the sliding window technique, prefix sums work correctly with negative values."
  },
  {
    id: 9,
    question: "Why is the sliding window technique generally not suitable for this problem?",
    options: [
      "It requires sorting",
      "Negative numbers break the window property",
      "It consumes more memory",
      "It only works on strings"
    ],
    correctAnswer: "Negative numbers break the window property",
    explanation: "Sliding windows rely on monotonic sum changes, which are not guaranteed with negative numbers."
  },
  {
    id: 10,
    question: "Which data structure provides average O(1) lookup for prefix sums?",
    options: [
      "Stack",
      "Queue",
      "Hash Map",
      "Heap"
    ],
    correctAnswer: "Hash Map",
    explanation: "Hash maps provide constant-time average insertion and lookup operations."
  }
];