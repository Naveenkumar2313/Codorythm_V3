export const copyListWithRandomPointerQuiz = [
  {
    question: 'What is the primary challenge in cloning a linked list with random pointers?',
    options: [
      'Random pointers might reference nodes that haven\'t been cloned yet',
      'The list can only be traversed backward',
      'Memory cannot be allocated dynamically',
      'Random pointers must always point to null'
    ],
    answer: 'Random pointers might reference nodes that haven\'t been cloned yet',
    explanation: 'Since random pointers can point to any node in the list, during a single-pass traversal we might encounter a random pointer pointing to a node that has not yet been instantiated.'
  },
  {
    question: 'What is the space complexity of the HashMap-based deep copy approach?',
    options: [
      'O(N)',
      'O(1)',
      'O(log N)',
      'O(N^2)'
    ],
    answer: 'O(N)',
    explanation: 'The HashMap approach stores a mapping of every original node to its corresponding cloned node, requiring O(N) auxiliary space.'
  },
  {
    question: 'What is the space complexity of the optimized in-place unweaving cloning algorithm?',
    options: [
      'O(1)',
      'O(N)',
      'O(log N)',
      'O(N log N)'
    ],
    answer: 'O(1)',
    explanation: 'The in-place interleaving algorithm utilizes the existing list pointers to establish temporary associations, requiring O(1) auxiliary space beyond the cloned list itself.'
  },
  {
    question: 'In the in-place interleaving cloning algorithm, where is the copy of node X placed initially?',
    options: [
      'Immediately after node X',
      'At the end of the list',
      'Immediately before node X',
      'In a separate array'
    ],
    answer: 'Immediately after node X',
    explanation: 'Creating clone nodes and inserting them immediately after their original counterparts (X -> copy(X) -> next) helps locate the copy of any node using the expression X.next.'
  },
  {
    question: 'If original node X has random pointer pointing to Y, how is copy(X)\'s random pointer set in the in-place algorithm?',
    options: [
      'X.next.random = X.random.next',
      'X.random = Y.next',
      'X.next.random = Y',
      'X.random.next = Y.next'
    ],
    answer: 'X.next.random = X.random.next',
    explanation: 'Since the copy of X is X.next, and the copy of Y (X.random) is X.random.next, we link copy(X).random = copy(Y) using the statement X.next.random = X.random.next (handling null check appropriately).'
  },
  {
    question: 'How many passes of list traversal are required by the optimized in-place cloning algorithm?',
    options: [
      '3',
      '1',
      '2',
      '4'
    ],
    answer: '3',
    explanation: 'The in-place algorithm requires 3 passes: (1) interleaving copies, (2) linking random pointers, and (3) unweaving the original and cloned lists.'
  },
  {
    question: 'What is the time complexity of both the HashMap and the In-Place cloning algorithms?',
    options: [
      'O(N)',
      'O(1)',
      'O(N log N)',
      'O(N^2)'
    ],
    answer: 'O(N)',
    explanation: 'Both methods traverse the list a constant number of times, yielding a time complexity of O(N).'
  },
  {
    question: 'When deep cloning a list with random pointers, what should a random pointer pointing to NULL in the original list map to in the cloned list?',
    options: [
      'NULL',
      'The cloned head',
      'A dummy node',
      'An arbitrary cloned node'
    ],
    answer: 'NULL',
    explanation: 'All relationships must be preserved exactly, so a random pointer to NULL must also point to NULL in the clone.'
  },
  {
    question: 'Why is the unweaving step necessary in the in-place algorithm?',
    options: [
      'To separate the cloned list from the original list and restore the original list\'s structure',
      'To verify that random pointers are correctly set',
      'To sort the list elements',
      'To free the memory allocated for original nodes'
    ],
    answer: 'To separate the cloned list from the original list and restore the original list\'s structure',
    explanation: 'Without unweaving, the original list would remain modified with cloned nodes interleaved, which violates the requirement of leaving the original list intact.'
  },
  {
    question: 'Which auxiliary data structure is commonly used to clone a list with random pointers in two passes without altering the original list?',
    options: [
      'Hash Map',
      'Stack',
      'Queue',
      'Min-Heap'
    ],
    answer: 'Hash Map',
    explanation: 'A Hash Map is used to map original node addresses to cloned node addresses, allowing O(1) lookups during the second pass to link pointers.'
  }
];
