export const findMedianFromDataStreamQuiz = [
    {
        question: 'Which data structure is primarily used to efficiently solve the Find Median from Data Stream problem?',
        options: ['Queue', 'Stack', 'Two Heaps', 'Linked List'],
        correctAnswer: 'Two Heaps',
        explanation: 'The algorithm maintains two heaps—a max heap and a min heap—to efficiently compute the median.'
    },
    {
        question: 'What does the max heap store in this algorithm?',
        options: ['The larger half of the numbers', 'The smaller half of the numbers', 'Only the median', 'All even numbers'],
        correctAnswer: 'The smaller half of the numbers',
        explanation: 'The max heap stores the smaller half of the elements, with its largest element at the root.'
    },
    {
        question: 'What does the min heap store?',
        options: ['The smaller half of the numbers', 'Only duplicate numbers', 'The larger half of the numbers', 'The median values'],
        correctAnswer: 'The larger half of the numbers',
        explanation: 'The min heap stores the larger half of the elements, with the smallest element at the root.'
    },
    {
        question: 'When is the median the average of the two heap roots?',
        options: ['When the max heap has more elements', 'When the min heap has more elements', 'When both heaps have equal size', 'After every insertion'],
        correctAnswer: 'When both heaps have equal size',
        explanation: 'If both heaps contain the same number of elements, the median is the average of their root values.'
    },
    {
        question: 'What is the maximum allowed size difference between the two heaps?',
        options: ['0', '1', '2', 'No limit'],
        correctAnswer: '1',
        explanation: 'The heaps are balanced so that their sizes differ by at most one.'
    },
    {
        question: 'What is the time complexity of inserting a new number into the data stream?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
        correctAnswer: 'O(log n)',
        explanation: 'Insertion may require heap insertion and rebalancing, both taking O(log n) time.'
    },
    {
        question: 'What is the time complexity of retrieving the current median?',
        options: ['O(log n)', 'O(n)', 'O(1)', 'O(n log n)'],
        correctAnswer: 'O(1)',
        explanation: 'The median is always available at the root(s) of the heaps.'
    },
    {
        question: 'Why are the heaps rebalanced after insertion?',
        options: ['To keep the heaps sorted alphabetically', 'To ensure their sizes differ by at most one', 'To remove duplicate values', 'To improve memory usage'],
        correctAnswer: 'To ensure their sizes differ by at most one',
        explanation: 'Balancing maintains the conditions required for efficient median calculation.'
    },
    {
        question: 'If one heap contains one more element than the other, where is the median found?',
        options: ['At the root of the larger heap', 'At the root of the smaller heap', 'At the last inserted element', 'It cannot be determined'],
        correctAnswer: 'At the root of the larger heap',
        explanation: 'When the heap sizes differ by one, the root of the larger heap is the median.'
    },
    {
        question: 'What is the overall space complexity of the Find Median from Data Stream algorithm?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
        correctAnswer: 'O(n)',
        explanation: 'All inserted elements are stored across the two heaps, resulting in O(n) space complexity.'
    }
];