export const trappingRainWaterQuizData = [
  {
    id: 1,
    question: "What is the main goal of the Trapping Rain Water algorithm?",
    options: [
      "To find the tallest bar in the elevation map",
      "To compute the total volume of water that can be trapped",
      "To sort the bars by height",
      "To count the number of valleys"
    ],
    correctAnswer: "To compute the total volume of water that can be trapped",
    explanation: "The algorithm calculates how much water can be stored between bars after raining."
  },
  {
    id: 2,
    question: "Which technique is most commonly used for the optimal solution?",
    options: [
      "Dynamic Programming",
      "Two Pointers",
      "Binary Search",
      "Sliding Window"
    ],
    correctAnswer: "Two Pointers",
    explanation: "The two-pointer approach efficiently computes trapped water in a single pass with O(1) space."
  },
  {
    id: 3,
    question: "What is the key insight behind the two-pointer approach?",
    options: [
      "Process elements from both ends simultaneously",
      "If leftMax <= rightMax, water at left depends only on leftMax",
      "Always process the left pointer first",
      "Use a stack to track all previous heights"
    ],
    correctAnswer: "If leftMax <= rightMax, water at left depends only on leftMax",
    explanation: "When leftMax is smaller, we know there is a bounding bar on the right side, so water depends only on leftMax."
  },
  {
    id: 4,
    question: "For height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], how much water is trapped?",
    options: [
      "4",
      "5",
      "6",
      "7"
    ],
    correctAnswer: "6",
    explanation: "The total trapped water is 6 units, as shown in the example calculation."
  },
  {
    id: 5,
    question: "What is the time complexity of the optimal Trapping Rain Water algorithm?",
    options: [
      "O(1)",
      "O(n)",
      "O(n log n)",
      "O(n^2)"
    ],
    correctAnswer: "O(n)",
    explanation: "Each element is visited exactly once by one of the two pointers."
  },
  {
    id: 6,
    question: "What is the space complexity of the two-pointer approach?",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    correctAnswer: "O(1)",
    explanation: "Only a constant amount of extra space is used for pointers and maximums."
  },
  {
    id: 7,
    question: "When is water trapped at a particular position?",
    options: [
      "When the current height is greater than both neighbors",
      "When there are higher bars on both the left and right sides",
      "When the current height is zero",
      "When the current height is the maximum in the array"
    ],
    correctAnswer: "When there are higher bars on both the left and right sides",
    explanation: "Water can only be trapped when there exist bounding bars on both sides."
  },
  {
    id: 8,
    question: "Why is a brute-force approach inefficient for large arrays?",
    options: [
      "It requires sorting the array",
      "It may scan O(n) elements for each position to find maximums",
      "It uses too much memory",
      "It cannot handle negative heights"
    ],
    correctAnswer: "It may scan O(n) elements for each position to find maximums",
    explanation: "Finding left and right maximums for each position leads to O(n^2) time complexity."
  },
  {
    id: 9,
    question: "What happens when the current height is greater than the respective maximum?",
    options: [
      "Water is added to the total",
      "The maximum is updated to the current height",
      "The algorithm terminates",
      "The pointer moves to the end"
    ],
    correctAnswer: "The maximum is updated to the current height",
    explanation: "When a new maximum is found, it becomes the new bounding bar for future positions."
  },
  {
    id: 10,
    question: "How is the water amount calculated at a position?",
    options: [
      "current height - maximum",
      "maximum - current height",
      "current height + maximum",
      "maximum / current height"
    ],
    correctAnswer: "maximum - current height",
    explanation: "The water trapped equals the difference between the bounding maximum and the current height."
  }
];