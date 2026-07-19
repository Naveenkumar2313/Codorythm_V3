export const designCircularDequeQuiz = [
  {
    question: 'What is the time complexity of insertFront() and deleteLast() in an optimal Circular Deque?',
    options: ['O(1)', 'O(log N)', 'O(N)', 'O(1) for insert, O(N) for delete'],
    correctAnswer: 'O(1)',
    explanation: 'Both front and rear operations are performed using direct index manipulation and modulo arithmetic, achieving O(1) time complexity.'
  },
  {
    question: 'How is wrap-around handled when moving the front pointer counter-clockwise during insertFront?',
    options: ['front = (front - 1 + capacity) % capacity', 'front = (front + 1) % capacity', 'front = front - 1', 'front = (front + capacity) / 2'],
    correctAnswer: 'front = (front - 1 + capacity) % capacity',
    explanation: 'To move the front pointer counter-clockwise in a circular array, we subtract 1. Adding capacity before modulo handles negative indices.'
  },
  {
    question: 'What is the purpose of keeping a size counter in the Circular Deque implementation?',
    options: ['To print the elements easily', 'To determine if the deque is full or empty in O(1) time', 'To resize the buffer automatically', 'To sort the elements'],
    correctAnswer: 'To determine if the deque is full or empty in O(1) time',
    explanation: 'Explicitly tracking the size makes checking isEmpty() (size == 0) and isFull() (size == capacity) trivial and O(1).'
  },
  {
    question: 'If a Circular Deque of capacity 3 is initialized, and we call insertLast(1), insertLast(2), insertFront(3), what is the output of getRear()?',
    options: ['1', '2', '3', '-1'],
    correctAnswer: '2',
    explanation: 'We insert 1 and 2 at the rear, and 3 at the front. The elements from front to rear are [3, 1, 2]. Thus, getRear() returns 2.'
  },
  {
    question: 'What does deleteFront() do when the deque is empty?',
    options: ['Throws an error', 'Returns false', 'Returns true', 'Returns -1'],
    correctAnswer: 'Returns false',
    explanation: 'Attempting to delete from an empty deque is an underflow condition and returns false.'
  },
  {
    question: 'Which of the following data structures can be used to implement a Circular Deque with O(1) operations?',
    options: ['Fixed-size array', 'Doubly Linked List', 'Both Fixed-size array and Doubly Linked List', 'Singly Linked List with only head pointer'],
    correctAnswer: 'Both Fixed-size array and Doubly Linked List',
    explanation: 'Both dynamic/fixed arrays (with modulo math) and doubly linked lists (with head and tail pointers) can implement a deque in O(1).'
  },
  {
    question: 'What happens to the rear index when insertLast() is called on a circular array?',
    options: ['rear = (rear - 1 + capacity) % capacity', 'rear = (rear + 1) % capacity', 'rear remains unchanged', 'rear = rear * 2'],
    correctAnswer: 'rear = (rear + 1) % capacity',
    explanation: 'To insert at the last position, we place the item at the current rear (or rear+1 depending on design) and increment rear modulo capacity.'
  },
  {
    question: 'If a Circular Deque has capacity 4 and contains elements [10, 20] with front=2, rear=0, where will insertFront(30) place the element?',
    options: ['Index 1', 'Index 2', 'Index 3', 'Index 0'],
    correctAnswer: 'Index 1',
    explanation: 'Moving front counter-clockwise: (2 - 1 + 4) % 4 = 1. So 30 is placed at index 1.'
  },
  {
    question: 'What is the space complexity of a Circular Deque implementation of capacity K?',
    options: ['O(1)', 'O(K)', 'O(K^2)', 'O(log K)'],
    correctAnswer: 'O(K)',
    explanation: 'The buffer (array or nodes) scales linearly with the specified capacity K.'
  },
  {
    question: 'Why is it called a \'Circular\' Deque?',
    options: ['It only accepts round values', 'The memory addresses wrap around from the end of the buffer back to the beginning', 'The elements are stored in a circle on screen', 'It uses recursion'],
    correctAnswer: 'The memory addresses wrap around from the end of the buffer back to the beginning',
    explanation: 'The structure uses modulo arithmetic to treat the linear array buffer as if the end is connected to the beginning, avoiding element shifting.'
  }
];
