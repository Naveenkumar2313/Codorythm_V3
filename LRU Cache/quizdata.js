export const lruCacheQuiz = [
  {
    question: 'Which data structures are typically combined to implement an LRU cache with O(1) operations?',
    options: ['Array and Stack', 'Hash Map and Doubly Linked List', 'Binary Search Tree and Queue', 'Singly Linked List and Heap'],
    correctAnswer: 'Hash Map and Doubly Linked List',
    explanation: 'The Hash Map provides O(1) key lookup, and the Doubly Linked List allows O(1) insertion, removal, and order updates.'
  },
  {
    question: 'In an LRU Cache implementation using a doubly linked list, where are the most recently accessed elements placed?',
    options: ['At the head of the list', 'At the tail of the list', 'In the middle of the list', 'At random positions'],
    correctAnswer: 'At the head of the list',
    explanation: 'The most recently used (MRU) element is placed at the head, so the least recently used (LRU) naturally remains at the tail.'
  },
  {
    question: 'When a cache hit occurs on a key in an LRU Cache, what update operation is performed on the underlying doubly linked list?',
    options: ['The element is deleted', 'The element is moved to the tail', 'The element is moved to the head', 'No update is performed'],
    correctAnswer: 'The element is moved to the head',
    explanation: 'Accessing a key makes it the most recently used, so its node is moved to the head.'
  },
  {
    question: 'What is the average time complexity of the get and put operations in a standard LRU Cache?',
    options: ['O(1)', 'O(log N)', 'O(N)', 'O(N log N)'],
    correctAnswer: 'O(1)',
    explanation: 'Combining a Hash Map and a Doubly Linked List allows both retrieval and reordering in constant time.'
  },
  {
    question: 'Why is a doubly linked list preferred over a singly linked list for LRU Cache?',
    options: ['It uses less memory', 'It allows O(1) deletion of a node given its pointer', 'It is easier to implement', 'It allows binary search over elements'],
    correctAnswer: 'It allows O(1) deletion of a node given its pointer',
    explanation: 'A doubly linked list node has references to both prev and next, enabling deletion in O(1) without traversing to find the previous node.'
  },
  {
    question: 'What is the space complexity of an LRU Cache with capacity C?',
    options: ['O(1)', 'O(C)', 'O(C^2)', 'O(log C)'],
    correctAnswer: 'O(C)',
    explanation: 'The cache stores at most C elements in the map and list.'
  },
  {
    question: 'What happens during a put operation if the key already exists in the LRU Cache?',
    options: ['An error is thrown', 'The value is updated and the element is moved to the head', 'The element remains in its current position', 'A new duplicate node is added'],
    correctAnswer: 'The value is updated and the element is moved to the head',
    explanation: 'Updating an existing key is considered an access, so it is updated and becomes the most recently used.'
  },
  {
    question: 'If a cache has capacity 3 and elements are accessed in the order: put(1), put(2), put(3), get(1), put(4). Which element is evicted?',
    options: ['Element 1', 'Element 2', 'Element 3', 'Element 4'],
    correctAnswer: 'Element 2',
    explanation: 'Put(1), put(2), put(3) makes the order (MRU to LRU): 3 -> 2 -> 1. Get(1) moves 1 to head: 1 -> 3 -> 2. Put(4) evicts the LRU item (2).'
  },
  {
    question: 'What is the primary purpose of dummy head and tail nodes in the doubly linked list of an LRU Cache?',
    options: ['To store metadata about the cache', 'To simplify edge cases like head/tail removal and insertion', 'To increase search speed', 'To prevent memory leaks'],
    correctAnswer: 'To simplify edge cases like head/tail removal and insertion',
    explanation: 'Dummy nodes ensure that list operations always have non-null prev and next references, removing conditional checks for empty lists or single-element lists.'
  },
  {
    question: 'Which of the following is a disadvantage of the LRU Cache eviction policy?',
    options: ['It is difficult to implement', 'It cannot handle periodic scans of large data well (one-time scans evict hot items)', 'It has O(N) lookup time', 'It requires too much CPU overhead'],
    correctAnswer: 'It cannot handle periodic scans of large data well (one-time scans evict hot items)',
    explanation: 'A sequential scan over a dataset larger than cache size will evict all hot items, even if the scanned items are only accessed once.'
  }
];
