export const minStackQuiz = [
  {
    question: 'What is the time complexity of getMin() in an optimally implemented Min Stack?',
    options: ['O(1)', 'O(log N)', 'O(N)', 'O(N log N)'],
    correctAnswer: 'O(1)',
    explanation: 'The Min Stack uses an auxiliary stack to track the running minimum, so getMin() simply peeks the top of the auxiliary stack in O(1).'
  },
  {
    question: 'In the auxiliary stack approach for Min Stack, when should an element be pushed onto the min-stack?',
    options: ['Always push every element', 'Only when the element is greater than the current min', 'Only when the element is less than or equal to the current min', 'Only when the main stack is empty'],
    correctAnswer: 'Only when the element is less than or equal to the current min',
    explanation: 'We push to the min-stack when val <= min-stack.top(), ensuring the min-stack always reflects the current minimum.'
  },
  {
    question: 'When should the min-stack pop an element during a pop() operation?',
    options: ['Always pop the min-stack on every pop()', 'Only if the main stack becomes empty', 'Only if the value being popped equals the min-stack top', 'Never pop the min-stack during pop()'],
    correctAnswer: 'Only if the value being popped equals the min-stack top',
    explanation: 'If the popped main stack value equals the min-stack top, it means we are removing the current minimum. We must pop the min-stack to reveal the next minimum.'
  },
  {
    question: 'What does top() return in a Min Stack?',
    options: ['The minimum element', 'The most recently pushed element', 'The element at the bottom of the stack', 'The element with the lowest frequency'],
    correctAnswer: 'The most recently pushed element',
    explanation: 'top() returns the most recently pushed element, not the minimum. getMin() is used for the minimum.'
  },
  {
    question: 'What happens to getMin() if you push 5, 3, 7, 1 and then pop twice?',
    options: ['Returns 1', 'Returns 3', 'Returns 5', 'Returns 7'],
    correctAnswer: 'Returns 3',
    explanation: 'After push 5,3,7,1 the min is 1. Popping twice removes 1 and 7. Remaining: 5, 3. The minimum is now 3.'
  },
  {
    question: 'What is the space complexity of a Min Stack using the auxiliary stack approach?',
    options: ['O(1)', 'O(log N)', 'O(N)', 'O(N^2)'],
    correctAnswer: 'O(N)',
    explanation: 'In the worst case (e.g., elements pushed in decreasing order), every element is also pushed to the min-stack, requiring O(N) extra space.'
  },
  {
    question: 'Which alternative implementation avoids a separate min-stack?',
    options: ['Storing (value, currentMin) pairs in a single stack', 'Using a hash map for each element', 'Using a binary search tree', 'Using a circular buffer'],
    correctAnswer: 'Storing (value, currentMin) pairs in a single stack',
    explanation: 'Each stack entry stores both the value and the minimum at the time of insertion, so getMin() reads from the top pair in O(1).'
  },
  {
    question: 'If you push [-2, 0, -3] onto a Min Stack, what does getMin() return?',
    options: ['-2', '0', '-3', '0'],
    correctAnswer: '-3',
    explanation: 'The minimum of {-2, 0, -3} is -3.'
  },
  {
    question: 'After pushing [-2, 0, -3] and then calling pop(), what does getMin() return?',
    options: ['-3', '-2', '0', '1'],
    correctAnswer: '-2',
    explanation: 'After popping -3 (the most recently pushed), the remaining elements are {-2, 0}. The minimum is -2.'
  },
  {
    question: 'What is the primary advantage of a Min Stack over a regular stack?',
    options: ['It stores more elements', 'It retrieves the minimum element in O(1) without scanning', 'It sorts elements automatically', 'It prevents duplicate values'],
    correctAnswer: 'It retrieves the minimum element in O(1) without scanning',
    explanation: 'The key value-add of a Min Stack is the O(1) getMin() operation, which would normally require O(N) scanning in a plain stack.'
  }
];
