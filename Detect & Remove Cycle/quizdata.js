export const detectAndRemoveCycleQuiz = [
  {
    question: 'Which algorithm is commonly used to detect a cycle in a linked list using two pointers?',
    options: [
      'Floyd\'s Cycle Finding Algorithm (Tortoise and Hare)',
      'Kruskal\'s Algorithm',
      'Dijkstra\'s Algorithm',
      'Kadane\'s Algorithm'
    ],
    correctAnswer: 'Floyd\'s Cycle Finding Algorithm (Tortoise and Hare)',
    explanation: 'Floyd\'s Cycle Finding Algorithm uses slow and fast pointers to detect a cycle in linear time and constant space.'
  },
  {
    question: 'How fast do the slow and fast pointers move in Floyd\'s cycle detection algorithm?',
    options: [
      'Slow moves 1 step, Fast moves 1 step',
      'Slow moves 1 step, Fast moves 2 steps',
      'Slow moves 2 steps, Fast moves 3 steps',
      'Slow moves 1 step, Fast moves 3 steps'
    ],
    correctAnswer: 'Slow moves 1 step, Fast moves 2 steps',
    explanation: 'The tortoise (slow) moves 1 node per iteration, while the hare (fast) moves 2 nodes per iteration.'
  },
  {
    question: 'If a cycle is detected, how do we find the starting node of the cycle?',
    options: [
      'Keep slow at meeting point, reset fast to head, move both at speed 1',
      'Reset slow to head, keep fast at meeting point, move both at speed 1',
      'Reset both to head and run slow/fast again',
      'Start traversing from the end of the list'
    ],
    correctAnswer: 'Reset slow to head, keep fast at meeting point, move both at speed 1',
    explanation: 'Resetting slow to the head and keeping fast at the meeting point, then moving both 1 step at a time, guarantees they meet at the cycle start.'
  },
  {
    question: 'What is the auxiliary space complexity of Floyd\'s Cycle Detection and Removal algorithm?',
    options: [
      'O(n)',
      'O(log n)',
      'O(1)',
      'O(k)'
    ],
    correctAnswer: 'O(1)',
    explanation: 'The algorithm only requires a few tracking pointers, consuming constant auxiliary memory.'
  },
  {
    question: 'What is the worst-case time complexity of cycle detection and removal?',
    options: [
      'O(n)',
      'O(n²)',
      'O(log n)',
      'O(n log n)'
    ],
    correctAnswer: 'O(n)',
    explanation: 'Both detection and removal require a linear scan of the linked list nodes, resulting in O(n) complexity.'
  },
  {
    question: 'How is a cycle removed from a linked list?',
    options: [
      'By deleting the starting node of the cycle',
      'By setting the next pointer of the last node in the cycle to NULL',
      'By reversing the entire linked list',
      'By setting the head node to NULL'
    ],
    correctAnswer: 'By setting the next pointer of the last node in the cycle to NULL',
    explanation: 'Setting the next pointer of the last node (which loops back to the start) to NULL breaks the cycle.'
  },
  {
    question: 'What happens if we move both pointers at the same speed of 1 from the beginning?',
    options: [
      'We can still detect the cycle at the same time',
      'We will never detect the cycle unless it is a self-loop',
      'The fast pointer will reach NULL first',
      'The slow pointer will get stuck'
    ],
    correctAnswer: 'We will never detect the cycle unless it is a self-loop',
    explanation: 'If they move at the same speed, the distance between them remains constant, so they will never meet unless they start in a self-loop.'
  },
  {
    question: 'Which of the following is a precondition for cycle detection to work correctly?',
    options: [
      'The linked list must be sorted',
      'All node values must be distinct',
      'The list must contain at least one node',
      'The list must contain only positive values'
    ],
    correctAnswer: 'The list must contain at least one node',
    explanation: 'A linked list must exist (i.e. not be empty) to perform cycle detection traversal.'
  },
  {
    question: 'If the fast pointer reaches NULL or fast->next becomes NULL, what does it mean?',
    options: [
      'The list contains a cycle',
      'The list does not contain a cycle',
      'The list is circular',
      'The list has multiple heads'
    ],
    correctAnswer: 'The list does not contain a cycle',
    explanation: 'A terminating NULL pointer indicates the end of a linear list, meaning no cycle exists.'
  },
  {
    question: 'Why does Floyd\'s cycle detection guarantee slow and fast pointers will meet if a loop exists?',
    options: [
      'Because fast pointer checks node values',
      'Because distance between them decreases by 1 in each step once they are both inside the loop',
      'Because they travel in opposite directions',
      'Because slow pointer is static'
    ],
    correctAnswer: 'Because distance between them decreases by 1 in each step once they are both inside the loop',
    explanation: 'Moving fast by 2 and slow by 1 means the relative speed is 1. Inside a loop, fast closes the gap by 1 node per step, ensuring they meet.'
  }
];
