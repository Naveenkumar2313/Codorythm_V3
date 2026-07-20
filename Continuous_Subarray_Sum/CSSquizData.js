export const continuousSubarraySumQuiz = [
  {
    id: "cssq-quiz-1",
    question: "Which technique is primarily used to solve the Continuous Subarray Sum (Multiple of K) problem efficiently?",
    options: [
      "Sliding Window",
      "Prefix Sum with Hash Map",
      "Binary Search",
      "Two Pointers"
    ],
    correctAnswer: 1,
    explanation:
      "The optimal solution uses Prefix Sums and a Hash Map to store previously seen prefix sum remainders."
  },
  {
    id: "cssq-quiz-2",
    question: "What does the Hash Map store in the optimal solution?",
    options: [
      "Array elements",
      "Prefix sums",
      "First occurrence of each prefix sum remainder",
      "Subarray lengths"
    ],
    correctAnswer: 2,
    explanation:
      "The Hash Map stores the first index where each prefix sum remainder appears."
  },
  {
    id: "cssq-quiz-3",
    question: "Why are prefix sum remainders compared during traversal?",
    options: [
      "To sort the array",
      "To identify equal elements",
      "To determine whether a subarray sum is divisible by k",
      "To find the maximum element"
    ],
    correctAnswer: 2,
    explanation:
      "If two prefix sums have the same remainder when divided by k, their difference is divisible by k."
  },
  {
    id: "cssq-quiz-4",
    question: "Why is the remainder 0 initially mapped to index -1?",
    options: [
      "To reduce memory usage",
      "To handle subarrays starting from index 0",
      "To avoid division by zero",
      "To improve sorting"
    ],
    correctAnswer: 1,
    explanation:
      "Mapping remainder 0 to index -1 allows subarrays beginning at index 0 to be detected correctly."
  },
  {
    id: "cssq-quiz-5",
    question: "What is the minimum required length of a valid subarray?",
    options: [
      "1",
      "2",
      "3",
      "Any length"
    ],
    correctAnswer: 1,
    explanation:
      "The problem requires the subarray to contain at least two elements."
  },
  {
    id: "cssq-quiz-6",
    question: "When is a valid subarray found?",
    options: [
      "Whenever two adjacent numbers are equal",
      "Whenever a previously seen remainder is found and the distance between indices is at least two",
      "Whenever the prefix sum becomes positive",
      "Whenever k is even"
    ],
    correctAnswer: 1,
    explanation:
      "A repeated remainder with an index difference of at least two indicates a valid subarray."
  },
  {
    id: "cssq-quiz-7",
    question: "What is the time complexity of the optimal algorithm?",
    options: [
      "O(n²)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    correctAnswer: 2,
    explanation:
      "Each element is processed exactly once while performing constant-time Hash Map operations."
  },
  {
    id: "cssq-quiz-8",
    question: "What is the worst-case space complexity of the algorithm?",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    correctAnswer: 2,
    explanation:
      "In the worst case, the Hash Map stores a unique remainder for each prefix sum."
  },
  {
    id: "cssq-quiz-9",
    question: "Why is only the first occurrence of each remainder stored?",
    options: [
      "To minimize the Hash Map size",
      "Because later occurrences are always incorrect",
      "To maximize the possible subarray length",
      "To avoid duplicate remainders"
    ],
    correctAnswer: 2,
    explanation:
      "Keeping the earliest index gives the longest possible valid subarray for a repeated remainder."
  },
  {
    id: "cssq-quiz-10",
    question: "Which mathematical property makes this algorithm work?",
    options: [
      "Prime Factorization",
      "Greatest Common Divisor",
      "Modular Arithmetic",
      "Bit Manipulation"
    ],
    correctAnswer: 2,
    explanation:
      "The algorithm relies on the fact that equal prefix sum remainders imply the difference between the sums is divisible by k."
  }
];