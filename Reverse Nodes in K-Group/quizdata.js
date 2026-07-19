export const reverseNodesInKGroupQuiz = [
  {
    question: 'What is the primary objective of the "Reverse Nodes in K-Group" algorithm?',
    options: [
      'Reversing the entire list in one go',
      'Reversing the list in blocks of size k',
      'Deleting every kth node from the list',
      'Swapping the first and last elements k times'
    ],
    correctAnswer: 'Reversing the list in blocks of size k',
    explanation: 'The algorithm segments the list into adjacent sublists of size k and reverses each segment individually.'
  },
  {
    question: 'If the linked list is [1, 2, 3, 4, 5] and k = 3, what will be the final list?',
    options: [
      '[3, 2, 1, 5, 4]',
      '[3, 2, 1, 4, 5]',
      '[1, 2, 3, 4, 5]',
      '[5, 4, 3, 2, 1]'
    ],
    correctAnswer: '[3, 2, 1, 4, 5]',
    explanation: 'The first 3 nodes [1, 2, 3] are reversed to [3, 2, 1]. The remaining 2 nodes [4, 5] are less than k=3, so they remain unchanged.'
  },
  {
    question: 'What is the time complexity of the optimal implementation of Reverse Nodes in K-Group?',
    options: [
      'O(n)',
      'O(n log n)',
      'O(n²)',
      'O(k * n)'
    ],
    correctAnswer: 'O(n)',
    explanation: 'Each node in the linked list is visited and processed a constant number of times, resulting in a linear time complexity.'
  },
  {
    question: 'What is the auxiliary space complexity of the iterative in-place implementation?',
    options: [
      'O(n)',
      'O(k)',
      'O(1)',
      'O(n/k)'
    ],
    correctAnswer: 'O(1)',
    explanation: 'The iterative approach only updates the pointers of the nodes in place, requiring constant extra memory.'
  },
  {
    question: 'What is the recursion stack space complexity of the recursive implementation?',
    options: [
      'O(1)',
      'O(log n)',
      'O(n)',
      'O(n/k)'
    ],
    correctAnswer: 'O(n/k)',
    explanation: 'Each recursive call processes one group of size k. The maximum depth of the recursion tree is n/k, requiring O(n/k) stack space.'
  },
  {
    question: 'What happens to the remaining nodes if their count at the end is less than k?',
    options: [
      'They are reversed anyway',
      'They are deleted from the list',
      'They remain in their original order',
      'They are padded with null nodes to reach size k'
    ],
    correctAnswer: 'They remain in their original order',
    explanation: 'According to the algorithm specifications, if a group does not contain k nodes, it is left in its original state.'
  },
  {
    question: 'If k = 1, how does the list change?',
    options: [
      'The entire list is reversed',
      'The list remains unchanged',
      'The list is cleared',
      'Only the first and last elements are swapped'
    ],
    correctAnswer: 'The list remains unchanged',
    explanation: 'Reversing groups of size 1 does not alter node connections, so the list remains identical.'
  },
  {
    question: 'Which of the following pointers is NOT typically used to reverse nodes within a group?',
    options: [
      'prev (previous node)',
      'curr (current node)',
      'next (next node)',
      'rand (random node)'
    ],
    correctAnswer: 'rand (random node)',
    explanation: 'Reversing a singly linked list segment only requires three tracking pointers: prev, curr, and next.'
  },
  {
    question: 'After reversing a k-group, the tail of the reversed group must be connected to what?',
    options: [
      'The head of the previous group',
      'The head of the next processed segment',
      'NULL',
      'The original head of the list'
    ],
    correctAnswer: 'The head of the next processed segment',
    explanation: 'To maintain the continuity of the list, the tail of the reversed group must point to the head of the subsequent k-group.'
  },
  {
    question: 'How do you check if a group has at least k nodes available to reverse?',
    options: [
      'Traverse k steps from the group head and verify we do not reach NULL',
      'Check if the length of the list is odd',
      'Verify if the head node is not NULL',
      'Check if k is greater than the total list length'
    ],
    correctAnswer: 'Traverse k steps from the group head and verify we do not reach NULL',
    explanation: 'By advancing a pointer k times, we can confirm there are enough nodes remaining to justify a reversal.'
  }
];
