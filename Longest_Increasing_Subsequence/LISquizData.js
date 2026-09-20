export const lisBinarySearchQuiz = [
  {
    question: 'What is the main advantage of the Binary Search optimized approach for Longest Increasing Subsequence (LIS)?',
    options: ['It reduces the time complexity to O(n log n)', 'It always uses recursion', 'It sorts the original array', 'It uses O(n²) additional memory'],
    correctAnswer: 'It reduces the time complexity to O(n log n)',
    explanation: 'The Binary Search optimized LIS approach maintains a tails array and uses binary search for each element, giving O(n log n) time complexity.'
  },
  {
    question: 'What does the tails array represent in the Binary Search optimized LIS algorithm?',
    options: ['The actual LIS in every case', 'The smallest possible tail value for increasing subsequences of each length', 'All elements sorted in descending order', 'The indices of every element in the input'],
    correctAnswer: 'The smallest possible tail value for increasing subsequences of each length',
    explanation: 'The tails array stores the smallest tail value found for an increasing subsequence of each possible length.'
  },
  {
    question: 'Which binary search operation is used for a strictly increasing LIS?',
    options: ['Find the first element greater than or equal to the current value', 'Find the last element smaller than the current value', 'Find the first element strictly greater than the current value', 'Find the maximum element in the array'],
    correctAnswer: 'Find the first element greater than or equal to the current value',
    explanation: 'The strictly increasing LIS uses lower bound, which finds the first tails value greater than or equal to the current element.'
  },
  {
    question: 'Given the sequence [10, 9, 2, 5, 3, 7, 101, 18], what is the length of the LIS?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4',
    explanation: 'One LIS is [2, 3, 7, 101] or [2, 3, 7, 18], so the maximum length is 4.'
  },
  {
    question: 'Why does replacing an element in the tails array not change the length of the LIS found so far?',
    options: ['The replacement always increases the array size', 'The replacement maintains the best possible tail for that subsequence length', 'The replacement removes all previous subsequences', 'The replacement sorts the input array'],
    correctAnswer: 'The replacement maintains the best possible tail for that subsequence length',
    explanation: 'Replacing a tail with a smaller value keeps the same subsequence length while creating more opportunities to extend it with future elements.'
  },
  {
    question: 'What is the time complexity of processing n elements using the Binary Search optimized LIS algorithm?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
    correctAnswer: 'O(n log n)',
    explanation: 'Each of the n elements requires a binary search over the tails array, resulting in O(n log n) time.'
  },
  {
    question: 'What is the auxiliary space complexity of the standard Binary Search optimized LIS algorithm?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 'O(n)',
    explanation: 'The tails array can contain up to n elements, so the auxiliary space complexity is O(n).'
  },
  {
    question: 'For the sequence [3, 5, 2, 8, 7], what can the tails array contain after processing all elements?',
    options: ['[2, 5, 7]', '[3, 5, 8]', '[2, 3, 7]', '[3, 2, 8]'],
    correctAnswer: '[2, 5, 7]',
    explanation: 'After processing the sequence, the smallest tail values for subsequences of lengths 1, 2, and 3 are 2, 5, and 7 respectively.'
  },
  {
    question: 'How should duplicates be handled when finding a strictly increasing subsequence?',
    options: ['Use lower bound so equal values replace existing tails instead of extending the length', 'Always append duplicate values', 'Use upper bound to include every duplicate', 'Remove all duplicate values before processing'],
    correctAnswer: 'Use lower bound so equal values replace existing tails instead of extending the length',
    explanation: 'Lower bound returns the first value greater than or equal to the current value, preventing equal elements from increasing the strictly increasing subsequence length.'
  },
  {
    question: 'Which statement correctly describes the Binary Search optimized LIS algorithm?',
    options: ['It always stores the exact LIS in the tails array', 'It maintains useful tail values while preserving the maximum LIS length', 'It sorts the input and then applies dynamic programming', 'It checks every pair of elements using nested loops'],
    correctAnswer: 'It maintains useful tail values while preserving the maximum LIS length',
    explanation: 'The tails array is not necessarily the actual LIS, but its maintained values allow the algorithm to determine the correct LIS length efficiently.'
  }
];