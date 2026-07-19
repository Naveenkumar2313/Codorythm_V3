export const addTwoNumbersQuiz = [
  {
    question: 'How are the digits of the numbers stored in the Add Two Numbers problem?',
    options: [
      'In direct/normal order (most significant digit first)',
      'In reverse order (least significant digit first)',
      'Sorted in ascending order',
      'In random order'
    ],
    correctAnswer: 'In reverse order (least significant digit first)',
    explanation: 'The digits are stored in reverse order so that we can start addition from the head (least significant digit) and propagate carry forward naturally.'
  },
  {
    question: 'What is the mathematical definition of the carry generated in single-digit addition?',
    options: [
      'carry = sum % 10',
      'carry = sum / 10',
      'carry = sum - 10',
      'carry = sum * 10'
    ],
    correctAnswer: 'carry = sum / 10',
    explanation: 'Using integer division, the carry is sum / 10 (e.g. 15 / 10 = 1).'
  },
  {
    question: 'What is the mathematical definition of the digit value to store in the new node?',
    options: [
      'digit = sum / 10',
      'digit = sum % 10',
      'digit = sum - 10',
      'digit = sum + 10'
    ],
    correctAnswer: 'digit = sum % 10',
    explanation: 'The modulo operator yields the remainder, which represents the single digit (e.g. 15 % 10 = 5).'
  },
  {
    question: 'What is the time complexity of the Add Two Numbers algorithm?',
    options: [
      'O(N + M) where N and M are the lengths of the two lists',
      'O(N * M) where N and M are the lengths of the two lists',
      'O(max(N, M)) where N and M are the lengths of the two lists',
      'O(min(N, M)) where N and M are the lengths of the two lists'
    ],
    correctAnswer: 'O(max(N, M)) where N and M are the lengths of the two lists',
    explanation: 'The algorithm iterates through both lists simultaneously, so the total iterations are bounded by the longer list length: O(max(N, M)).'
  },
  {
    question: 'What is the space complexity of the Add Two Numbers algorithm?',
    options: [
      'O(1) auxiliary space',
      'O(max(N, M)) auxiliary space to store the new list',
      'O(N + M) auxiliary space',
      'O(log(N + M)) auxiliary space'
    ],
    correctAnswer: 'O(max(N, M)) auxiliary space to store the new list',
    explanation: 'The result requires creating a new linked list, which has at most max(N, M) + 1 nodes.'
  },
  {
    question: 'How do we handle lists of unequal lengths?',
    options: [
      'Truncate the longer list to match the shorter one',
      'Treat the missing nodes of the shorter list as value 0',
      'Throw an error or return null',
      'Pad the shorter list with nodes containing value 9'
    ],
    correctAnswer: 'Treat the missing nodes of the shorter list as value 0',
    explanation: 'If a list is exhausted (NULL), its contribution to the sum is treated as 0.'
  },
  {
    question: 'What must we check after traversing both lists to ensure no digits are missed?',
    options: [
      'If the dummy node is null',
      'If a carry remains (carry > 0), in which case we append a final node containing the carry value',
      'If the heads of the lists are equal',
      'If the sum is even or odd'
    ],
    correctAnswer: 'If a carry remains (carry > 0), in which case we append a final node containing the carry value',
    explanation: 'An outstanding carry (e.g. adding 99 + 1 results in carry 1 at the end) must be appended as a new node at the tail.'
  },
  {
    question: 'Which of the following numbers is represented by the linked list 2 -> 4 -> 3?',
    options: [
      '243',
      '342',
      '9',
      '2.43'
    ],
    correctAnswer: '342',
    explanation: 'Since the list is in reverse order, the digits from head to tail are units, tens, and hundreds. Thus 2 -> 4 -> 3 is 342.'
  },
  {
    question: 'What is the purpose of using a dummy head node in list construction?',
    options: [
      'To store the final carry value',
      'To simplify list insertion edge cases by avoiding special checks for the head node',
      'To reduce memory footprint',
      'To reverse the list in-place'
    ],
    correctAnswer: 'To simplify list insertion edge cases by avoiding special checks for the head node',
    explanation: 'A dummy head allows us to append new nodes to the list uniformly without having to check if the head is null in the first iteration.'
  },
  {
    question: 'Can the Add Two Numbers algorithm handle infinite precision addition?',
    options: [
      'No, it is limited by 64-bit integer constraints',
      'Yes, because linked lists can grow dynamically in memory, bypassing standard integer size limitations',
      'No, because carry cannot exceed 9',
      'Yes, but only for binary numbers'
    ],
    correctAnswer: 'Yes, because linked lists can grow dynamically in memory, bypassing standard integer size limitations',
    explanation: 'Since numbers are processed digit-by-digit and stored in dynamically allocated nodes, it can add numbers with millions of digits without overflow.'
  }
];
