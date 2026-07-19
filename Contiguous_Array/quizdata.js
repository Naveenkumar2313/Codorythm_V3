export const contiguousArrayQuiz = [
  { question: 'What is the key idea used to solve the Contiguous Array problem efficiently?', options: ['Sorting the array', 'Sliding Window', 'Prefix Sum with Hash Map', 'Binary Search'], correctAnswer: 'Prefix Sum with Hash Map', explanation: 'The optimal solution uses a prefix sum (balance) and a hash map to track first occurrences.' },

  { question: 'How is the value 0 treated in the Contiguous Array algorithm?', options: ['As 0', 'As 1', 'As -1', 'It is ignored'], correctAnswer: 'As -1', explanation: 'Replacing 0 with -1 allows equal numbers of 0s and 1s to produce a balance of 0.' },

  { question: 'How is the value 1 treated in the Contiguous Array algorithm?', options: ['As -1', 'As 0', 'As 1', 'As 2'], correctAnswer: 'As 1', explanation: 'Each 1 contributes +1 to the running balance.' },

  { question: 'What does a repeated prefix balance indicate?', options: ['Duplicate elements', 'A balanced subarray exists between the two indices', 'The array is sorted', 'The array contains only 0s'], correctAnswer: 'A balanced subarray exists between the two indices', explanation: 'If the same balance appears twice, the subarray between them has equal numbers of 0s and 1s.' },

  { question: 'Why is a hash map used in the algorithm?', options: ['To sort the array', 'To store frequencies of elements', 'To store the first occurrence of each balance', 'To remove duplicates'], correctAnswer: 'To store the first occurrence of each balance', explanation: 'The first occurrence of each balance helps maximize the balanced subarray length.' },

  { question: 'What initial entry is inserted into the hash map before traversal begins?', options: ['{1:0}', '{0:-1}', '{-1:0}', '{0:0}'], correctAnswer: '{0:-1}', explanation: 'Balance 0 is initialized at index -1 to correctly handle balanced prefixes.' },

  { question: 'What is the time complexity of the optimal Contiguous Array algorithm?', options: ['O(n²)', 'O(log n)', 'O(n)', 'O(n log n)'], correctAnswer: 'O(n)', explanation: 'Each element is processed once while hash map operations are O(1) on average.' },

  { question: 'What is the space complexity of the optimal Contiguous Array algorithm?', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'], correctAnswer: 'O(n)', explanation: 'The hash map may store up to O(n) distinct balance values.' },

  { question: 'When is the maximum balanced subarray length updated?', options: ['Whenever a new balance is found', 'Whenever the balance becomes positive', 'Whenever a previously seen balance reappears', 'After processing the entire array'], correctAnswer: 'Whenever a previously seen balance reappears', explanation: 'A repeated balance means the subarray between the two occurrences is balanced.' },

  { question: 'Which algorithmic technique best describes the Contiguous Array solution?', options: ['Greedy', 'Backtracking', 'Prefix Sum with Hashing', 'Divide and Conquer'], correctAnswer: 'Prefix Sum with Hashing', explanation: 'The solution combines prefix sums (balance) with hashing for efficient lookup.' },
];