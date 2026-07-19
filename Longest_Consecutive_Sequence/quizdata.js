export const longestConsecutiveQuiz = [
  {
    question: 'What is the optimal time complexity for finding the longest consecutive sequence using a HashSet?',
    options: ['O(n²)', 'O(n log n)', 'O(n)', 'O(log n)'],
    correctAnswer: 'O(n)',
    explanation: 'Using a HashSet allows constant-time lookups, resulting in an overall O(n) solution.'
  },
  {
    question: 'Which data structure is commonly used to achieve O(n) time for the Longest Consecutive Sequence problem?',
    options: ['Stack', 'Queue', 'HashSet', 'Heap'],
    correctAnswer: 'HashSet',
    explanation: 'A HashSet enables O(1) average lookup time for checking consecutive elements.'
  },
  {
    question: 'Why do we only start counting a sequence when (num - 1) is NOT present in the HashSet?',
    options: ['To avoid duplicate counting', 'To sort the array', 'To reduce memory usage', 'To remove duplicates'],
    correctAnswer: 'To avoid duplicate counting',
    explanation: 'Starting only from sequence beginnings ensures every sequence is processed exactly once.'
  },
  {
    question: 'If the input array is empty, what should the algorithm return?',
    options: ['-1', '1', '0', 'Array size'],
    correctAnswer: '0',
    explanation: 'An empty array contains no consecutive sequence, so the answer is 0.'
  },
  {
    question: 'Which operation is repeatedly performed after identifying the start of a sequence?',
    options: ['Binary search', 'Move to previous numbers', 'Check current + 1 exists', 'Sort the array again'],
    correctAnswer: 'Check current + 1 exists',
    explanation: 'The algorithm keeps extending the sequence while the next consecutive number exists.'
  },
  {
    question: 'What is the average lookup time of a HashSet?',
    options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
    correctAnswer: 'O(1)',
    explanation: 'HashSet provides constant average-time insertion and lookup operations.'
  },
  {
    question: 'What is the space complexity of the optimal HashSet solution?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 'O(n)',
    explanation: 'The HashSet stores all unique elements, requiring O(n) extra space.'
  },
  {
    question: 'Why is sorting not required in the optimal solution?',
    options: ['HashSet preserves order', 'HashSet allows direct existence checks', 'Sorting increases memory', 'Sorting removes duplicates'],
    correctAnswer: 'HashSet allows direct existence checks',
    explanation: 'The HashSet lets us check neighboring numbers without arranging the elements.'
  },
  {
    question: 'Which condition identifies the beginning of a consecutive sequence?',
    options: ['num + 1 not in set', 'num - 1 not in set', 'num == 0', 'num is even'],
    correctAnswer: 'num - 1 not in set',
    explanation: 'If the previous number does not exist, the current number is the sequence start.'
  },
  {
    question: 'Which algorithmic technique best describes the optimal Longest Consecutive Sequence solution?',
    options: ['Greedy with HashSet', 'Dynamic Programming', 'Backtracking', 'Binary Search'],
    correctAnswer: 'Greedy with HashSet',
    explanation: 'The algorithm greedily expands only from valid sequence starts while using a HashSet for fast lookups.'
  }
];