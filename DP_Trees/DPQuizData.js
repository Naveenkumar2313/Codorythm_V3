export const treeDPHouseRobberQuiz = [
  {
    question: 'What is the main objective of the House Robber III / Tree DP problem?',
    options: ['Select every node in the tree', 'Maximize the total reward without selecting adjacent parent-child nodes', 'Find the shortest path in the tree', 'Count the number of leaf nodes'],
    correctAnswer: 'Maximize the total reward without selecting adjacent parent-child nodes',
    explanation: 'The objective is to select nodes with maximum total value while ensuring that a selected node and its immediate child are not both selected.'
  },
  {
    question: 'What does the rob state of a node represent?',
    options: ['Maximum reward when the current node is selected', 'Maximum reward when the current node is skipped', 'Number of selected nodes in the subtree', 'Total number of nodes in the subtree'],
    correctAnswer: 'Maximum reward when the current node is selected',
    explanation: 'The rob state stores the maximum reward obtainable from the subtree when the current node itself is selected.'
  },
  {
    question: 'What does the skip state of a node represent?',
    options: ['Maximum reward when the current node is selected', 'Maximum reward when the current node is skipped', 'The height of the subtree', 'The number of leaf nodes'],
    correctAnswer: 'Maximum reward when the current node is skipped',
    explanation: 'The skip state represents the maximum reward obtainable from the subtree when the current node is not selected.'
  },
  {
    question: 'If the current node is selected, which state of its immediate children can be used?',
    options: ['Only the rob state', 'Only the skip state', 'The maximum of rob and skip states', 'Neither state'],
    correctAnswer: 'Only the skip state',
    explanation: 'When the current node is selected, its immediate children cannot be selected, so only their skip states can contribute.'
  },
  {
    question: 'Which recurrence correctly calculates the rob state of a node u?',
    options: ['rob[u] = value[u] + skip[left] + skip[right]', 'rob[u] = value[u] + rob[left] + rob[right]', 'rob[u] = max(rob[left], skip[left]) + max(rob[right], skip[right])', 'rob[u] = skip[left] + skip[right]'],
    correctAnswer: 'rob[u] = value[u] + skip[left] + skip[right]',
    explanation: 'Selecting node u means both immediate children must be skipped, so their skip states are added to the value of u.'
  },
  {
    question: 'Which recurrence correctly calculates the skip state of a node u?',
    options: ['skip[u] = value[u] + skip[left] + skip[right]', 'skip[u] = rob[left] + rob[right]', 'skip[u] = max(rob[left], skip[left]) + max(rob[right], skip[right])', 'skip[u] = value[u] + rob[left] + rob[right]'],
    correctAnswer: 'skip[u] = max(rob[left], skip[left]) + max(rob[right], skip[right])',
    explanation: 'When u is skipped, each child may either be selected or skipped, so the better state from each child is chosen.'
  },
  {
    question: 'How does the algorithm obtain the final answer from the root node?',
    options: ['rob[root] + skip[root]', 'rob[root] only', 'skip[root] only', 'max(rob[root], skip[root])'],
    correctAnswer: 'max(rob[root], skip[root])',
    explanation: 'The root can either be selected or skipped, so the optimal result is the larger of its rob and skip states.'
  },
  {
    question: 'What is the main Dynamic Programming strategy used in this Tree DP problem?',
    options: ['Top-down sorting of all node values', 'Bottom-up computation of subtree states', 'Binary search on node values', 'Breadth-first traversal without storing states'],
    correctAnswer: 'Bottom-up computation of subtree states',
    explanation: 'Each subtree first computes its rob and skip states and then passes these values upward to its parent.'
  },
  {
    question: 'What is the time complexity of the Tree DP House Robber solution?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 'O(n)',
    explanation: 'Every node is visited once and its rob and skip states are calculated using constant-time operations.'
  },
  {
    question: 'What is the main reason the rob/skip pair is passed from each subtree to its parent?',
    options: ['To avoid rebuilding the tree', 'To allow the parent to combine optimal decisions from its child subtrees', 'To calculate the tree height', 'To sort the values of the nodes'],
    correctAnswer: 'To allow the parent to combine optimal decisions from its child subtrees',
    explanation: 'The parent uses the rob and skip results returned by each child to determine the optimal reward for its own subtree.'
  }
];