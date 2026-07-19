export const lfuCacheQuiz = [
  {
    question: 'Which eviction policy does an LFU Cache use?',
    options: ['Evict the most recently used item', 'Evict the least recently used item', 'Evict the least frequently accessed item', 'Evict the most frequently accessed item'],
    correctAnswer: 'Evict the least frequently accessed item',
    explanation: 'LFU (Least Frequently Used) evicts the item with the fewest total accesses.'
  },
  {
    question: 'In an LFU Cache, if two items have the same minimum frequency, which one is evicted?',
    options: ['The one with the smaller key', 'The one that was inserted first', 'The least recently used among them (LRU tie-breaking)', 'A random one'],
    correctAnswer: 'The least recently used among them (LRU tie-breaking)',
    explanation: 'Among items with equal frequency, the LRU item is evicted, combining LFU and LRU policies.'
  },
  {
    question: 'What is the time complexity of get() and put() in an optimally implemented LFU Cache?',
    options: ['O(log N)', 'O(N)', 'O(1)', 'O(N log N)'],
    correctAnswer: 'O(1)',
    explanation: 'Using a HashMap for key-value-frequency lookup and a frequency-to-LinkedHashSet map, both operations run in O(1).'
  },
  {
    question: 'Which data structures are typically combined to achieve O(1) LFU Cache?',
    options: ['Array and Min-Heap', 'HashMap + HashMap<freq, LinkedHashSet<key>>', 'BST and Queue', 'LinkedList and Trie'],
    correctAnswer: 'HashMap + HashMap<freq, LinkedHashSet<key>>',
    explanation: 'A key-to-(value,freq) map and a freq-to-ordered-keyset map together give O(1) access and eviction.'
  },
  {
    question: 'What does the minFreq variable track in an LFU Cache implementation?',
    options: ['The total number of accesses', 'The capacity of the cache', 'The current minimum frequency among all cached keys', 'The maximum frequency seen'],
    correctAnswer: 'The current minimum frequency among all cached keys',
    explanation: 'minFreq is maintained so eviction can target the correct frequency bucket in O(1).'
  },
  {
    question: 'When a new key is inserted into an LFU Cache, what is its initial frequency?',
    options: ['0', '1', 'minFreq + 1', 'Infinity'],
    correctAnswer: '1',
    explanation: 'Every newly inserted key starts with frequency 1 and minFreq is reset to 1.'
  },
  {
    question: 'After a put() inserts a new key, what value is minFreq reset to?',
    options: ['0', '1', 'The previous minFreq', 'The maximum frequency'],
    correctAnswer: '1',
    explanation: 'The new key always has frequency 1, so minFreq must be set to 1 to ensure it is the eviction candidate if capacity is exceeded.'
  },
  {
    question: 'What happens to the minFreq when a key at the minimum frequency is accessed?',
    options: ['minFreq is decremented', 'minFreq may increase by 1 if freq[minFreq] bucket becomes empty', 'minFreq is set to 0', 'minFreq is unchanged'],
    correctAnswer: 'minFreq may increase by 1 if freq[minFreq] bucket becomes empty',
    explanation: 'After moving a key from freq[f] to freq[f+1], if freq[f] is now empty and f == minFreq, then minFreq becomes f+1.'
  },
  {
    question: 'In which real-world scenario is LFU preferred over LRU?',
    options: ['Sequential disk scans', 'Caching popular web pages that are repeatedly requested over time', 'Queue management', 'Sorting algorithms'],
    correctAnswer: 'Caching popular web pages that are repeatedly requested over time',
    explanation: 'LFU retains items with historically high access count, making it ideal when hot items are truly accessed frequently over time.'
  },
  {
    question: 'What is a major disadvantage of LFU Cache compared to LRU?',
    options: ['Higher space complexity', 'Old frequently-accessed items can pollute the cache even if not recently needed (cache pollution)', 'LFU has O(N) get()', 'LFU cannot handle duplicate keys'],
    correctAnswer: 'Old frequently-accessed items can pollute the cache even if not recently needed (cache pollution)',
    explanation: 'Items that were popular in the past retain high frequency counts and resist eviction even if they are no longer needed.'
  }
];
