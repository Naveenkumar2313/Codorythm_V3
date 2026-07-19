export const flattenMultilevelDoublyLinkedListQuiz = [
  {
    question: 'What traversal order does the flattened multilevel doubly linked list follow?',
    options: [
      'Breadth-First Search (BFS)',
      'Depth-First Search (DFS)',
      'Level-Order Traversal',
      'Sorted Order'
    ],
    correctAnswer: 'Depth-First Search (DFS)',
    explanation: 'Flattening processes the children of a node immediately before advancing to its next node, which corresponds to depth-first search order.'
  },
  {
    question: 'Which pointers must be updated when inserting a child list between a parent and its next node?',
    options: [
      'Only next pointers',
      'Only prev pointers',
      'next, prev, and child pointers',
      'Only child pointers'
    ],
    correctAnswer: 'next, prev, and child pointers',
    explanation: 'We must link the parent\'s next to child\'s head (and its prev to parent), the child\'s tail\'s next to parent\'s next (and its prev to tail), and clear the parent\'s child pointer.'
  },
  {
    question: 'What should the child pointer of a node be set to after its child list has been flattened and inserted?',
    options: [
      'The head of the child list',
      'The tail of the child list',
      'NULL / null',
      'Itself'
    ],
    correctAnswer: 'NULL / null',
    explanation: 'The list becomes a single-level doubly linked list, so all child pointers must be cleared to NULL.'
  },
  {
    question: 'What is the time complexity of flattening a multilevel doubly linked list containing N nodes?',
    options: [
      'O(N²)',
      'O(N)',
      'O(log N)',
      'O(N log N)'
    ],
    correctAnswer: 'O(N)',
    explanation: 'Each node is visited and its pointers rewired a constant number of times, leading to a linear time complexity of O(N).'
  },
  {
    question: 'What is the space complexity of flattening using recursion or an explicit stack in the worst case?',
    options: [
      'O(1)',
      'O(N) where N is total nodes',
      'O(D) where D is max depth of nesting',
      'O(W) where W is max width'
    ],
    correctAnswer: 'O(D) where D is max depth of nesting',
    explanation: 'The recursive call stack or explicit stack stores references to the next nodes at each level of nesting, requiring O(D) memory.'
  },
  {
    question: 'If a node\'s next node is NULL, what does the tail of its flattened child list connect to?',
    options: [
      'NULL',
      'The head of the main list',
      'The parent node itself',
      'A dummy tail node'
    ],
    correctAnswer: 'NULL',
    explanation: 'If there is no next node at the parent\'s level, the tail of the flattened child list becomes the new tail of this segment, so its next remains NULL.'
  },
  {
    question: 'Which of the following structure models a multilevel linked list?',
    options: [
      'A cycle of nodes',
      'A hierarchy where nodes contain normal next pointers and secondary child pointers',
      'A simple linear list',
      'A binary search tree with only left and right pointers'
    ],
    correctAnswer: 'A hierarchy where nodes contain normal next pointers and secondary child pointers',
    explanation: 'The secondary child pointer points to a completely separate list, representing a tree-like multilevel structure.'
  },
  {
    question: 'In an iterative stack-based solution, what order are nodes pushed to the stack to achieve DFS order?',
    options: [
      'Push child first, then next',
      'Push next first, then child',
      'Push prev first, then next',
      'Order does not matter'
    ],
    correctAnswer: 'Push next first, then child',
    explanation: 'Since a stack is Last-In-First-Out (LIFO), pushing next first and then child ensures that child is popped and processed before next, yielding DFS order.'
  },
  {
    question: 'Why must we be careful when modifying the prev pointer of the parent\'s original next node?',
    options: [
      'Because it might be NULL if the parent is the last node at its level',
      'Because it points back to the head',
      'Because it is always NULL',
      'Because it causes division by zero'
    ],
    correctAnswer: 'Because it might be NULL if the parent is the last node at its level',
    explanation: 'If `parent->next` is NULL, attempting to write `parent->next->prev` will cause a null pointer dereference error.'
  },
  {
    question: 'Can the flattening algorithm be performed in-place?',
    options: [
      'No, a new list must always be allocated',
      'Yes, by rewiring the existing prev and next pointer references of the nodes',
      'Yes, but only for singly linked lists',
      'No, because child pointers cannot be changed'
    ],
    correctAnswer: 'Yes, by rewiring the existing prev and next pointer references of the nodes',
    explanation: 'By performing inline pointer manipulations, the list is flattened in-place with O(1) auxiliary memory excluding the stack.'
  }
];
