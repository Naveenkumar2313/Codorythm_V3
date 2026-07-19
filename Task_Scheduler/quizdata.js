export const taskSchedulerQuiz = [
  { question: 'What is the primary goal of the Task Scheduler problem?', options: ['Sort tasks alphabetically', 'Minimize the total CPU intervals while respecting cooldown', 'Find the shortest task', 'Execute tasks in input order'], correctAnswer: 'Minimize the total CPU intervals while respecting cooldown', explanation: 'The objective is to complete all tasks in the minimum number of CPU intervals while satisfying the cooldown constraint.' },

  { question: 'Which data structure is most commonly used to always select the task with the highest remaining frequency?', options: ['Queue', 'Stack', 'Max Heap', 'Binary Search Tree'], correctAnswer: 'Max Heap', explanation: 'A Max Heap efficiently retrieves the task with the highest remaining count.' },

  { question: 'What is the purpose of the cooldown queue in the Task Scheduler algorithm?', options: ['Store completed tasks permanently', 'Store tasks waiting before they can be executed again', 'Sort tasks by name', 'Store idle intervals'], correctAnswer: 'Store tasks waiting before they can be executed again', explanation: 'Tasks are placed into a cooldown queue until they become eligible for execution again.' },

  { question: 'If no task is available to execute but some tasks are still cooling down, what should the CPU do?', options: ['Terminate execution', 'Skip the remaining tasks', 'Remain idle for one interval', 'Ignore the cooldown'], correctAnswer: 'Remain idle for one interval', explanation: 'The CPU must stay idle until at least one task becomes available.' },

  { question: 'Which algorithmic technique is primarily used in the optimal Task Scheduler solution?', options: ['Dynamic Programming', 'Greedy with Heap', 'Binary Search', 'Backtracking'], correctAnswer: 'Greedy with Heap', explanation: 'The algorithm greedily executes the most frequent available task using a Max Heap.' },

  { question: 'Why is the task with the highest remaining frequency chosen first?', options: ['To minimize future idle intervals', 'Because it has the smallest cooldown', 'Because it was inserted first', 'To maintain sorted order'], correctAnswer: 'To minimize future idle intervals', explanation: 'Executing high-frequency tasks early reduces the chance of excessive idle periods later.' },

  { question: 'What is the time complexity of the heap-based Task Scheduler algorithm when there are n tasks?', options: ['O(n)', 'O(log n)', 'O(n log k)', 'O(n²)'], correctAnswer: 'O(n log k)', explanation: 'Each task may be inserted and removed from the heap, where k is the number of distinct task types.' },

  { question: 'Which of the following data structures is typically paired with the Max Heap?', options: ['Hash Table', 'Queue', 'Trie', 'Linked List'], correctAnswer: 'Queue', explanation: 'A queue keeps track of tasks that are currently in their cooldown period.' },

  { question: 'When is a task moved back from the cooldown queue to the Max Heap?', options: ['Immediately after execution', 'When its cooldown period expires', 'When the heap becomes empty', 'At the end of all tasks'], correctAnswer: 'When its cooldown period expires', explanation: 'After waiting for the required cooldown intervals, the task becomes available again.' },

  { question: 'What is returned by the Task Scheduler algorithm?', options: ['The execution order of tasks', 'The number of idle intervals only', 'The minimum total CPU intervals required to finish all tasks', 'The most frequent task'], correctAnswer: 'The minimum total CPU intervals required to finish all tasks', explanation: 'The final answer is the minimum total time (including idle intervals) needed to complete every task.' }
];