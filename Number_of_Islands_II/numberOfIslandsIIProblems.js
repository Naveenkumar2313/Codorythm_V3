export const numberOfIslandsIIProblems = [
  // --- EASY ---
  {
    id: 'noi2-e1', title: 'Single Land Addition', difficulty: 'Easy',
    description: 'Given a 1x1 grid and one operation that adds land at (0,0), return the island count after the operation.',
    constraints: ['m = 1, n = 1', 'positions = [[0,0]]'],
    examples: [
      { input: 'm = 1, n = 1, positions = [[0,0]]', output: '[1]', explanation: 'One land cell is added forming one island.' },
      { input: 'm = 1, n = 1, positions = [[0,0],[0,0]]', output: '[1,1]', explanation: 'Second operation is a duplicate and does not change the count.' }
    ],
    testCases: [
      { input: '1 1\n1\n0 0', expectedOutput: '1', hidden: false },
      { input: '1 1\n2\n0 0\n0 0', expectedOutput: '1 1', hidden: false }
    ],
    starterCode: {
      python: 'def num_islands_ii(m, n, positions):\n    pass',
      java: 'public static List<Integer> numIslands2(int m, int n, int[][] positions) {\n    return new ArrayList<>();\n}',
      c: 'void numIslands2(int m, int n, int positions[][2], int k) {\n}',
      cpp: 'vector<int> numIslands2(int m, int n, vector<vector<int>>& positions) {\n    return {};\n}'
    }
  },

  {
    id: 'noi2-e2', title: 'Two Separate Islands', difficulty: 'Easy',
    description: 'Given a 1x3 grid, add land at (0,0) and (0,2). Since they are not adjacent, they form two separate islands.',
    constraints: ['1 <= m, n <= 10', '1 <= positions.length <= 5'],
    examples: [
      { input: 'm = 1, n = 3, positions = [[0,0],[0,2]]', output: '[1,2]', explanation: 'Two non-adjacent land cells form two separate islands.' },
      { input: 'm = 1, n = 3, positions = [[0,0],[0,1]]', output: '[1,1]', explanation: 'Two adjacent cells merge into one island.' }
    ],
    testCases: [
      { input: '1 3\n2\n0 0\n0 2', expectedOutput: '1 2', hidden: false },
      { input: '1 3\n2\n0 0\n0 1', expectedOutput: '1 1', hidden: false }
    ],
    starterCode: {
      python: 'def num_islands_ii(m, n, positions):\n    pass',
      java: 'public static List<Integer> numIslands2(int m, int n, int[][] positions) {\n    return new ArrayList<>();\n}',
      c: 'void numIslands2(int m, int n, int positions[][2], int k) {\n}',
      cpp: 'vector<int> numIslands2(int m, int n, vector<vector<int>>& positions) {\n    return {};\n}'
    }
  },

  {
    id: 'noi2-e3', title: 'Merging Two Islands', difficulty: 'Easy',
    description: 'Given a 1x3 grid, add land at (0,0), (0,2), then (0,1). The third addition bridges the two islands into one.',
    constraints: ['1 <= m, n <= 10', '1 <= positions.length <= 10'],
    examples: [
      { input: 'm = 1, n = 3, positions = [[0,0],[0,2],[0,1]]', output: '[1,2,1]', explanation: 'First two cells form separate islands. The third bridges them into one.' },
      { input: 'm = 2, n = 2, positions = [[0,0],[1,1],[0,1]]', output: '[1,2,2]', explanation: 'Third cell connects to (0,0) only, so count stays 2.' }
    ],
    testCases: [
      { input: '1 3\n3\n0 0\n0 2\n0 1', expectedOutput: '1 2 1', hidden: false },
      { input: '2 2\n3\n0 0\n1 1\n0 1', expectedOutput: '1 2 2', hidden: false }
    ],
    starterCode: {
      python: 'def num_islands_ii(m, n, positions):\n    pass',
      java: 'public static List<Integer> numIslands2(int m, int n, int[][] positions) {\n    return new ArrayList<>();\n}',
      c: 'void numIslands2(int m, int n, int positions[][2], int k) {\n}',
      cpp: 'vector<int> numIslands2(int m, int n, vector<vector<int>>& positions) {\n    return {};\n}'
    }
  },

  {
    id: 'noi2-e4', title: 'Duplicate Operations', difficulty: 'Easy',
    description: 'Given a grid with operations that include duplicate positions, return the island count after each operation. Duplicates should not change the count.',
    constraints: ['1 <= m, n <= 10', '1 <= positions.length <= 10'],
    examples: [
      { input: 'm = 2, n = 2, positions = [[0,0],[0,0],[0,1]]', output: '[1,1,1]', explanation: 'Second operation is duplicate. Third merges with first.' },
      { input: 'm = 2, n = 2, positions = [[0,0],[1,1],[0,0]]', output: '[1,2,2]', explanation: 'Third operation is duplicate of first, count stays 2.' }
    ],
    testCases: [
      { input: '2 2\n3\n0 0\n0 0\n0 1', expectedOutput: '1 1 1', hidden: false },
      { input: '2 2\n3\n0 0\n1 1\n0 0', expectedOutput: '1 2 2', hidden: false }
    ],
    starterCode: {
      python: 'def num_islands_ii(m, n, positions):\n    pass',
      java: 'public static List<Integer> numIslands2(int m, int n, int[][] positions) {\n    return new ArrayList<>();\n}',
      c: 'void numIslands2(int m, int n, int positions[][2], int k) {\n}',
      cpp: 'vector<int> numIslands2(int m, int n, vector<vector<int>>& positions) {\n    return {};\n}'
    }
  },

  {
    id: 'noi2-e5', title: 'All Cells Become Land', difficulty: 'Easy',
    description: 'Given a 2x2 grid, add all four cells as land one by one. Return the island count after each operation.',
    constraints: ['m = 2, n = 2', 'positions covers all cells'],
    examples: [
      { input: 'm = 2, n = 2, positions = [[0,0],[0,1],[1,0],[1,1]]', output: '[1,1,1,1]', explanation: 'Each new cell connects to an existing island, keeping the count at 1.' },
      { input: 'm = 2, n = 2, positions = [[0,0],[1,1],[0,1],[1,0]]', output: '[1,2,1,1]', explanation: 'First two cells are diagonal (not adjacent), then third and fourth bridge them.' }
    ],
    testCases: [
      { input: '2 2\n4\n0 0\n0 1\n1 0\n1 1', expectedOutput: '1 1 1 1', hidden: false },
      { input: '2 2\n4\n0 0\n1 1\n0 1\n1 0', expectedOutput: '1 2 1 1', hidden: false }
    ],
    starterCode: {
      python: 'def num_islands_ii(m, n, positions):\n    pass',
      java: 'public static List<Integer> numIslands2(int m, int n, int[][] positions) {\n    return new ArrayList<>();\n}',
      c: 'void numIslands2(int m, int n, int positions[][2], int k) {\n}',
      cpp: 'vector<int> numIslands2(int m, int n, vector<vector<int>>& positions) {\n    return {};\n}'
    }
  },

  // --- MEDIUM ---
  {
    id: 'noi2-m1', title: 'Standard Number of Islands II', difficulty: 'Medium',
    description: 'Given an m x n grid and a list of positions, return a list of island counts after each land addition.',
    constraints: ['1 <= m, n <= 300', '1 <= positions.length <= 10000'],
    examples: [
      { input: 'm = 3, n = 3, positions = [[0,0],[0,1],[1,2],[2,1],[1,1]]', output: '[1,1,2,3,1]', explanation: 'Islands form and merge as land is added. Final cell (1,1) connects all surrounding islands.' },
      { input: 'm = 3, n = 3, positions = [[0,0],[0,2],[2,0],[2,2]]', output: '[1,2,3,4]', explanation: 'All four corner cells are non-adjacent, forming four separate islands.' }
    ],
    testCases: [
      { input: '3 3\n5\n0 0\n0 1\n1 2\n2 1\n1 1', expectedOutput: '1 1 2 3 1', hidden: false },
      { input: '3 3\n4\n0 0\n0 2\n2 0\n2 2', expectedOutput: '1 2 3 4', hidden: false }
    ],
    starterCode: {
      python: 'def num_islands_ii(m, n, positions):\n    pass',
      java: 'public static List<Integer> numIslands2(int m, int n, int[][] positions) {\n    return new ArrayList<>();\n}',
      c: 'void numIslands2(int m, int n, int positions[][2], int k) {\n}',
      cpp: 'vector<int> numIslands2(int m, int n, vector<vector<int>>& positions) {\n    return {};\n}'
    }
  },

  {
    id: 'noi2-m2', title: 'Maximum Island Count', difficulty: 'Medium',
    description: 'Given an m x n grid and a list of positions, return the maximum island count observed at any point during all operations.',
    constraints: ['1 <= m, n <= 200', '1 <= positions.length <= 5000'],
    examples: [
      { input: 'm = 3, n = 3, positions = [[0,0],[0,2],[2,0],[2,2],[1,1]]', output: '4', explanation: 'After four operations the count reaches 4, then drops to 1 after the fifth.' },
      { input: 'm = 2, n = 2, positions = [[0,0],[1,1],[0,1]]', output: '2', explanation: 'Maximum count is 2 before the third cell merges the islands.' }
    ],
    testCases: [
      { input: '3 3\n5\n0 0\n0 2\n2 0\n2 2\n1 1', expectedOutput: '4', hidden: false },
      { input: '2 2\n3\n0 0\n1 1\n0 1', expectedOutput: '2', hidden: false }
    ],
    starterCode: {
      python: 'def max_island_count(m, n, positions):\n    pass',
      java: 'public static int maxIslandCount(int m, int n, int[][] positions) {\n    return 0;\n}',
      c: 'int maxIslandCount(int m, int n, int positions[][2], int k) {\n    return 0;\n}',
      cpp: 'int maxIslandCount(int m, int n, vector<vector<int>>& positions) {\n    return 0;\n}'
    }
  },

  {
    id: 'noi2-m3', title: 'Final Island Count', difficulty: 'Medium',
    description: 'Given an m x n grid and a list of positions, return only the final island count after all operations are completed.',
    constraints: ['1 <= m, n <= 300', '1 <= positions.length <= 10000'],
    examples: [
      { input: 'm = 3, n = 3, positions = [[0,0],[0,1],[1,2],[2,1],[1,1]]', output: '1', explanation: 'After all operations, all land cells are connected into one island.' },
      { input: 'm = 3, n = 3, positions = [[0,0],[0,2],[2,0]]', output: '3', explanation: 'Three non-adjacent land cells remain as three separate islands.' }
    ],
    testCases: [
      { input: '3 3\n5\n0 0\n0 1\n1 2\n2 1\n1 1', expectedOutput: '1', hidden: false },
      { input: '3 3\n3\n0 0\n0 2\n2 0', expectedOutput: '3', hidden: false }
    ],
    starterCode: {
      python: 'def final_island_count(m, n, positions):\n    pass',
      java: 'public static int finalIslandCount(int m, int n, int[][] positions) {\n    return 0;\n}',
      c: 'int finalIslandCount(int m, int n, int positions[][2], int k) {\n    return 0;\n}',
      cpp: 'int finalIslandCount(int m, int n, vector<vector<int>>& positions) {\n    return 0;\n}'
    }
  },

  {
    id: 'noi2-m4', title: 'Count Merges', difficulty: 'Medium',
    description: 'Given an m x n grid and a list of positions, return the total number of times two islands were merged during all operations.',
    constraints: ['1 <= m, n <= 200', '1 <= positions.length <= 5000'],
    examples: [
      { input: 'm = 3, n = 3, positions = [[0,0],[0,1],[1,2],[2,1],[1,1]]', output: '4', explanation: 'The fifth operation merges 4 separate islands into 1, causing 4 merge events.' },
      { input: 'm = 2, n = 2, positions = [[0,0],[1,1],[0,1],[1,0]]', output: '3', explanation: 'Three merge events occur as the four cells connect into one island.' }
    ],
    testCases: [
      { input: '3 3\n5\n0 0\n0 1\n1 2\n2 1\n1 1', expectedOutput: '4', hidden: false },
      { input: '2 2\n4\n0 0\n1 1\n0 1\n1 0', expectedOutput: '3', hidden: false }
    ],
    starterCode: {
      python: 'def count_merges(m, n, positions):\n    pass',
      java: 'public static int countMerges(int m, int n, int[][] positions) {\n    return 0;\n}',
      c: 'int countMerges(int m, int n, int positions[][2], int k) {\n    return 0;\n}',
      cpp: 'int countMerges(int m, int n, vector<vector<int>>& positions) {\n    return 0;\n}'
    }
  },

  {
    id: 'noi2-m5', title: 'First Operation to Form Single Island', difficulty: 'Medium',
    description: 'Given an m x n grid and a list of positions, return the index (1-based) of the first operation after which all added land cells form exactly one island. Return -1 if it never happens.',
    constraints: ['1 <= m, n <= 200', '1 <= positions.length <= 5000'],
    examples: [
      { input: 'm = 3, n = 3, positions = [[0,0],[0,1],[1,2],[2,1],[1,1]]', output: '5', explanation: 'After the 5th operation all land cells merge into one island.' },
      { input: 'm = 3, n = 3, positions = [[0,0],[0,2],[2,0]]', output: '-1', explanation: 'The three cells never connect, so a single island is never formed.' }
    ],
    testCases: [
      { input: '3 3\n5\n0 0\n0 1\n1 2\n2 1\n1 1', expectedOutput: '5', hidden: false },
      { input: '3 3\n3\n0 0\n0 2\n2 0', expectedOutput: '-1', hidden: false }
    ],
    starterCode: {
      python: 'def first_single_island(m, n, positions):\n    pass',
      java: 'public static int firstSingleIsland(int m, int n, int[][] positions) {\n    return -1;\n}',
      c: 'int firstSingleIsland(int m, int n, int positions[][2], int k) {\n    return -1;\n}',
      cpp: 'int firstSingleIsland(int m, int n, vector<vector<int>>& positions) {\n    return -1;\n}'
    }
  },

  // --- HARD ---
  {
    id: 'noi2-h1', title: 'Number of Islands II Large Grid', difficulty: 'Hard',
    description: 'Given a large m x n grid and up to 10000 operations, return the list of island counts after each operation. Optimize using Union-Find with path compression and union by rank.',
    constraints: ['1 <= m, n <= 1000', '1 <= positions.length <= 10000'],
    examples: [
      { input: 'm = 4, n = 4, positions = [[0,0],[0,1],[1,0],[1,1],[2,2],[2,3],[3,2],[3,3],[1,2]]', output: '[1,1,1,1,2,2,2,2,1]', explanation: 'Two 2x2 island blocks form and then merge when (1,2) bridges them.' },
      { input: 'm = 4, n = 4, positions = [[0,0],[3,3],[0,3],[3,0]]', output: '[1,2,3,4]', explanation: 'Four corner cells are all non-adjacent, forming four separate islands.' }
    ],
    testCases: [
      { input: '4 4\n9\n0 0\n0 1\n1 0\n1 1\n2 2\n2 3\n3 2\n3 3\n1 2', expectedOutput: '1 1 1 1 2 2 2 2 1', hidden: false },
      { input: '4 4\n4\n0 0\n3 3\n0 3\n3 0', expectedOutput: '1 2 3 4', hidden: false }
    ],
    starterCode: {
      python: 'def num_islands_ii(m, n, positions):\n    pass',
      java: 'public static List<Integer> numIslands2(int m, int n, int[][] positions) {\n    return new ArrayList<>();\n}',
      c: 'void numIslands2(int m, int n, int positions[][2], int k) {\n}',
      cpp: 'vector<int> numIslands2(int m, int n, vector<vector<int>>& positions) {\n    return {};\n}'
    }
  },

  {
    id: 'noi2-h2', title: 'Island Size After Each Operation', difficulty: 'Hard',
    description: 'Given an m x n grid and a list of positions, return the size of the island that the newly added cell belongs to after each operation.',
    constraints: ['1 <= m, n <= 300', '1 <= positions.length <= 10000'],
    examples: [
      { input: 'm = 3, n = 3, positions = [[0,0],[0,1],[1,0],[1,1]]', output: '[1,2,3,4]', explanation: 'Each new cell joins and grows the same island. Sizes are 1, 2, 3, 4.' },
      { input: 'm = 3, n = 3, positions = [[0,0],[2,2],[1,1]]', output: '[1,1,1]', explanation: 'Each cell is isolated, so each island has size 1.' }
    ],
    testCases: [
      { input: '3 3\n4\n0 0\n0 1\n1 0\n1 1', expectedOutput: '1 2 3 4', hidden: false },
      { input: '3 3\n3\n0 0\n2 2\n1 1', expectedOutput: '1 1 1', hidden: false }
    ],
    starterCode: {
      python: 'def island_sizes(m, n, positions):\n    pass',
      java: 'public static List<Integer> islandSizes(int m, int n, int[][] positions) {\n    return new ArrayList<>();\n}',
      c: 'void islandSizes(int m, int n, int positions[][2], int k) {\n}',
      cpp: 'vector<int> islandSizes(int m, int n, vector<vector<int>>& positions) {\n    return {};\n}'
    }
  },

  {
    id: 'noi2-h3', title: 'Largest Island After Each Operation', difficulty: 'Hard',
    description: 'Given an m x n grid and a list of positions, return the size of the largest island after each operation.',
    constraints: ['1 <= m, n <= 300', '1 <= positions.length <= 10000'],
    examples: [
      { input: 'm = 3, n = 3, positions = [[0,0],[0,2],[0,1]]', output: '[1,1,3]', explanation: 'First two cells form islands of size 1. Third bridges them into an island of size 3.' },
      { input: 'm = 3, n = 3, positions = [[0,0],[1,1],[2,2]]', output: '[1,1,1]', explanation: 'All three cells are diagonal and never connect, largest island stays size 1.' }
    ],
    testCases: [
      { input: '3 3\n3\n0 0\n0 2\n0 1', expectedOutput: '1 1 3', hidden: false },
      { input: '3 3\n3\n0 0\n1 1\n2 2', expectedOutput: '1 1 1', hidden: false }
    ],
    starterCode: {
      python: 'def largest_island(m, n, positions):\n    pass',
      java: 'public static List<Integer> largestIsland(int m, int n, int[][] positions) {\n    return new ArrayList<>();\n}',
      c: 'void largestIsland(int m, int n, int positions[][2], int k) {\n}',
      cpp: 'vector<int> largestIsland(int m, int n, vector<vector<int>>& positions) {\n    return {};\n}'
    }
  },

  {
    id: 'noi2-h4', title: 'Number of Distinct Island Sizes', difficulty: 'Hard',
    description: 'Given an m x n grid and a list of positions, return the number of distinct island sizes present after all operations are completed.',
    constraints: ['1 <= m, n <= 300', '1 <= positions.length <= 10000'],
    examples: [
      { input: 'm = 4, n = 4, positions = [[0,0],[0,1],[2,2],[2,3],[3,3]]', output: '2', explanation: 'After all operations, there is one island of size 2 and one island of size 3 — two distinct sizes.' },
      { input: 'm = 3, n = 3, positions = [[0,0],[2,2]]', output: '1', explanation: 'Both islands have size 1 — only one distinct size.' }
    ],
    testCases: [
      { input: '4 4\n5\n0 0\n0 1\n2 2\n2 3\n3 3', expectedOutput: '2', hidden: false },
      { input: '3 3\n2\n0 0\n2 2', expectedOutput: '1', hidden: false }
    ],
    starterCode: {
      python: 'def distinct_island_sizes(m, n, positions):\n    pass',
      java: 'public static int distinctIslandSizes(int m, int n, int[][] positions) {\n    return 0;\n}',
      c: 'int distinctIslandSizes(int m, int n, int positions[][2], int k) {\n    return 0;\n}',
      cpp: 'int distinctIslandSizes(int m, int n, vector<vector<int>>& positions) {\n    return 0;\n}'
    }
  },

  {
    id: 'noi2-h5', title: 'Minimum Operations to Form One Island', difficulty: 'Hard',
    description: 'Given an m x n grid and a list of positions, return the minimum number of operations needed so that all land cells added so far form exactly one island. Return -1 if it never happens within the given operations.',
    constraints: ['1 <= m, n <= 300', '1 <= positions.length <= 10000'],
    examples: [
      { input: 'm = 3, n = 3, positions = [[0,0],[0,2],[0,1],[1,0],[2,0]]', output: '3', explanation: 'After 3 operations (adding (0,0),(0,2),(0,1)), all land cells form one island.' },
      { input: 'm = 3, n = 3, positions = [[0,0],[2,2],[0,2]]', output: '-1', explanation: 'The three cells never all connect into one island within the given operations.' }
    ],
    testCases: [
      { input: '3 3\n5\n0 0\n0 2\n0 1\n1 0\n2 0', expectedOutput: '3', hidden: false },
      { input: '3 3\n3\n0 0\n2 2\n0 2', expectedOutput: '-1', hidden: false }
    ],
    starterCode: {
      python: 'def min_ops_one_island(m, n, positions):\n    pass',
      java: 'public static int minOpsOneIsland(int m, int n, int[][] positions) {\n    return -1;\n}',
      c: 'int minOpsOneIsland(int m, int n, int positions[][2], int k) {\n    return -1;\n}',
      cpp: 'int minOpsOneIsland(int m, int n, vector<vector<int>>& positions) {\n    return -1;\n}'
    }
  }
];
