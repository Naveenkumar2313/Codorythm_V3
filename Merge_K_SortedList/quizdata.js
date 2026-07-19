export const mergeKSortedListsQuiz = [
  {
    question: 'What data structure is commonly used to efficiently merge K sorted lists?',
    options: ['Stack', 'Queue', 'Min Heap (Priority Queue)', 'Hash Table'],
    correctAnswer: 'Min Heap (Priority Queue)',
    explanation: 'A Min Heap efficiently retrieves the smallest element among all current list nodes.'
  },
  {
    question: 'What is inserted into the Min Heap initially?',
    options: ['All nodes from all lists', 'The last node of each list', 'The first node of each non-empty list', 'Only one random node'],
    correctAnswer: 'The first node of each non-empty list',
    explanation: 'Initially, only the head node of every non-empty linked list is inserted into the Min Heap.'
  },
  {
    question: 'What happens after removing the smallest node from the Min Heap?',
    options: ['The algorithm stops', 'Its next node is inserted into the Min Heap', 'The entire list is removed', 'The node is discarded'],
    correctAnswer: 'Its next node is inserted into the Min Heap',
    explanation: 'After extracting the smallest node, its next node (if it exists) is added to the Min Heap.'
  },
  {
    question: 'What is the time complexity of merging K sorted lists using a Min Heap?',
    options: ['O(N)', 'O(N log K)', 'O(K²)', 'O(N²)'],
    correctAnswer: 'O(N log K)',
    explanation: 'Each of the N nodes is inserted and removed from the Min Heap once, costing O(log K) each.'
  },
  {
    question: 'What is the space complexity of the Min Heap approach?',
    options: ['O(N)', 'O(K)', 'O(log N)', 'O(1)'],
    correctAnswer: 'O(K)',
    explanation: 'The Min Heap stores at most one node from each of the K lists at any time.'
  },
  {
    question: 'What is the primary advantage of using a Min Heap for this problem?',
    options: ['Reduces memory usage', 'Always retrieves the smallest current element efficiently', 'Sorts all lists before merging', 'Removes duplicate nodes'],
    correctAnswer: 'Always retrieves the smallest current element efficiently',
    explanation: 'The Min Heap guarantees efficient access to the minimum node among all current list heads.'
  },
  {
    question: 'Which condition indicates that the merging process is complete?',
    options: ['All linked lists have equal length', 'The Min Heap becomes empty', 'The merged list reaches K nodes', 'The first list ends'],
    correctAnswer: 'The Min Heap becomes empty',
    explanation: 'When the Min Heap is empty, all nodes from every list have been processed.'
  },
  {
    question: 'What is the prerequisite for using the Merge K Sorted Lists algorithm?',
    options: ['Lists must be circular', 'Lists must be sorted', 'Lists must have equal lengths', 'Lists must contain unique elements'],
    correctAnswer: 'Lists must be sorted',
    explanation: 'The algorithm assumes each linked list is already sorted.'
  },
  {
    question: 'Which algorithmic concept does Merge K Sorted Lists primarily utilize?',
    options: ['Backtracking', 'Priority Queue (Heap)', 'Dynamic Programming', 'Depth First Search'],
    correctAnswer: 'Priority Queue (Heap)',
    explanation: 'A Priority Queue implemented using a Min Heap is the core data structure used.'
  },
  {
    question: 'How many times is each node inserted into and removed from the Min Heap?',
    options: ['Zero times', 'Exactly once', 'Twice', 'K times'],
    correctAnswer: 'Exactly once',
    explanation: 'Each node enters the Min Heap once and is removed once, contributing to the O(N log K) complexity.'
  },
];