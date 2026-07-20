export const productOfArrayExceptSelfQuiz = [
  {
    question: "What is the primary objective of the Product of Array Except Self algorithm?",
    options: [
      "To find the maximum product of any two elements",
      "To create an array where each element is the product of all other elements except itself",
      "To sort the array based on product values",
      "To calculate the cumulative product of the array"
    ],
    correctAnswer: "To create an array where each element is the product of all other elements except itself",
    explanation:
      "The algorithm generates an output array where each element is the product of every other element in the input array except the one at the current index."
  },
  {
    question: "What is the optimal time complexity of the Product of Array Except Self algorithm?",
    options: [
      "O(n²)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    correctAnswer: "O(n)",
    explanation:
      "The algorithm performs two linear traversals of the array, resulting in an overall time complexity of O(n)."
  },
  {
    question: "Why is division avoided in the optimal solution?",
    options: [
      "Division is slower than multiplication",
      "Division cannot be implemented in programming languages",
      "Division fails when the array contains zero values",
      "Division increases the space complexity"
    ],
    correctAnswer: "Division fails when the array contains zero values",
    explanation:
      "Using division produces incorrect results when one or more elements in the array are zero, so prefix and suffix products are used instead."
  },
  {
    question: "Which technique is commonly used to solve this problem efficiently?",
    options: [
      "Binary Search",
      "Dynamic Programming",
      "Prefix and Suffix Products",
      "Merge Sort"
    ],
    correctAnswer: "Prefix and Suffix Products",
    explanation:
      "The optimal approach computes prefix products and suffix products, then combines them to form the final answer."
  },
  {
    question: "What is the extra space complexity of the optimal algorithm (excluding the output array)?",
    options: [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n²)"
    ],
    correctAnswer: "O(1)",
    explanation:
      "Only a few variables are used in addition to the output array, giving O(1) auxiliary space complexity."
  },
  {
    question: "Given nums = [1, 2, 3, 4], what is the output?",
    options: [
      "[24, 12, 8, 6]",
      "[24, 24, 24, 24]",
      "[12, 8, 6, 4]",
      "[6, 8, 12, 24]"
    ],
    correctAnswer: "[24, 12, 8, 6]",
    explanation:
      "Each output element is the product of all numbers except the one at its own index."
  },
  {
    question: "How many traversals are typically required in the optimal solution?",
    options: [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    correctAnswer: "Two",
    explanation:
      "One traversal computes prefix products and another incorporates suffix products."
  },
  {
    question: "What happens if the input array contains exactly one zero?",
    options: [
      "The algorithm fails",
      "All output values become zero",
      "Only the position corresponding to the zero gets the product of all non-zero elements",
      "Division must be used"
    ],
    correctAnswer: "Only the position corresponding to the zero gets the product of all non-zero elements",
    explanation:
      "Only the index containing the zero receives the product of all other elements, while every other position becomes zero."
  },
  {
    question: "Which data structure is required for the optimal Product of Array Except Self algorithm?",
    options: [
      "Stack",
      "Queue",
      "Binary Tree",
      "No additional data structure"
    ],
    correctAnswer: "No additional data structure",
    explanation:
      "The algorithm only uses the output array and a few variables for prefix and suffix products."
  },
  {
    question: "Which of the following is a major advantage of the optimal algorithm?",
    options: [
      "It sorts the array automatically",
      "It works efficiently without using division",
      "It requires recursion",
      "It always uses less than O(n) time"
    ],
    correctAnswer: "It works efficiently without using division",
    explanation:
      "The algorithm efficiently computes the required products without division, making it robust even when zeros are present."
  }
];