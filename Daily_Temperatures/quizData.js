export const dailyTemperaturesQuizData = [
  {
    id: 1,
    question: "What does the Daily Temperatures algorithm compute for each day?",
    options: [
      "The highest temperature in the entire list",
      "The number of days until a warmer temperature occurs",
      "The average temperature of all future days",
      "The number of colder days before the current day"
    ],
    correctAnswer: "The number of days until a warmer temperature occurs",
    explanation: "For each day, the algorithm returns how long it takes to find a strictly warmer future day."
  },
  {
    id: 2,
    question: "What value is returned for a day that has no warmer future temperature?",
    options: [
      "-1",
      "0",
      "1",
      "The current temperature"
    ],
    correctAnswer: "0",
    explanation: "A value of 0 means there is no future day with a strictly warmer temperature."
  },
  {
    id: 3,
    question: "Which data structure is used in the optimal Daily Temperatures solution?",
    options: [
      "Monotonic Stack",
      "Binary Search Tree",
      "Priority Queue",
      "Hash Set"
    ],
    correctAnswer: "Monotonic Stack",
    explanation: "A monotonic stack keeps only future indices that may become the next warmer day."
  },
  {
    id: 4,
    question: "Why does the stack store indices instead of only temperatures?",
    options: [
      "Because the answer needs the distance between two days",
      "Because temperatures cannot be compared directly",
      "Because indices make the array sorted",
      "Because the stack must contain duplicate objects"
    ],
    correctAnswer: "Because the answer needs the distance between two days",
    explanation: "The algorithm must compute j - i, so it needs the index of the next warmer day."
  },
  {
    id: 5,
    question: "When processing from right to left, when should an index be popped from the stack?",
    options: [
      "When its temperature is less than or equal to the current temperature",
      "When its temperature is greater than the current temperature",
      "Only when it is the last index",
      "Only when the current temperature is negative"
    ],
    correctAnswer: "When its temperature is less than or equal to the current temperature",
    explanation: "A colder or equal future day cannot be the next warmer day for the current reading."
  },
  {
    id: 6,
    question: "What is the time complexity of the optimal Daily Temperatures algorithm?",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    correctAnswer: "O(n)",
    explanation: "Each index is pushed once and popped at most once, so the total work is linear."
  },
  {
    id: 7,
    question: "What is the worst-case auxiliary space complexity of the algorithm?",
    options: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n^2)"
    ],
    correctAnswer: "O(n)",
    explanation: "The stack may store many indices when future temperatures form a useful candidate chain."
  },
  {
    id: 8,
    question: "For temperatures = [30, 40, 50, 60], what is the correct output?",
    options: [
      "[1, 1, 1, 0]",
      "[3, 2, 1, 0]",
      "[0, 0, 0, 0]",
      "[1, 2, 3, 0]"
    ],
    correctAnswer: "[1, 1, 1, 0]",
    explanation: "Each of the first three days has a warmer temperature on the very next day."
  },
  {
    id: 9,
    question: "How should equal temperatures be handled?",
    options: [
      "They count as warmer days",
      "They are ignored because the future day must be strictly warmer",
      "They always produce an answer of 1",
      "They make the input invalid"
    ],
    correctAnswer: "They are ignored because the future day must be strictly warmer",
    explanation: "The problem asks for a warmer temperature, so an equal temperature cannot qualify."
  },
  {
    id: 10,
    question: "Why is the brute-force approach inefficient for large inputs?",
    options: [
      "It may scan many future days for every current day",
      "It requires the temperatures to be sorted first",
      "It uses too many hash tables",
      "It cannot handle repeated temperatures"
    ],
    correctAnswer: "It may scan many future days for every current day",
    explanation: "Checking future days one by one for every position can lead to O(n^2) time."
  }
];
