export const NOPproblems = [
  // --- EASY ---
  {
    id: 'nop-e1', title: 'All Cities Isolated', difficulty: 'Easy',
    description: 'Given n cities where no two cities are directly connected, return the number of provinces. Since every city stands alone, the number of provinces equals the number of cities.',
    constraints: ['1 <= n <= 100', 'isConnected[i][j] == 1 only when i == j', 'isConnected is a symmetric n x n matrix'],
    examples: [
      { input: 'isConnected = [[1,0,0],[0,1,0],[0,0,1]]', output: '3', explanation: 'No city is connected to any other. Each city is its own province.' },
      { input: 'isConnected = [[1,0],[0,1]]', output: '2', explanation: 'Two isolated cities form two separate provinces.' }
    ],
    testCases: [
      { input: '3\n1 0 0\n0 1 0\n0 0 1', expectedOutput: '3', hidden: false },
      { input: '2\n1 0\n0 1', expectedOutput: '2', hidden: false },
      { input: '1\n1', expectedOutput: '1', hidden: true },
      { input: '4\n1 0 0 0\n0 1 0 0\n0 0 1 0\n0 0 0 1', expectedOutput: '4', hidden: true }
    ],
    starterCode: {
      python: 'def find_circle_num(isConnected):\n    pass',
      java: 'public int findCircleNum(int[][] isConnected) {\n    return 0;\n}',
      c: 'int findCircleNum(int** isConnected, int isConnectedSize, int* isConnectedColSize) {\n    return 0;\n}',
      cpp: 'int findCircleNum(vector<vector<int>>& isConnected) {\n    return 0;\n}'
    }
  },

  {
    id: 'nop-e2', title: 'All Cities in One Province', difficulty: 'Easy',
    description: 'Given n cities where every city is directly connected to every other city, return the number of provinces. Since all cities are connected, there is exactly one province.',
    constraints: ['1 <= n <= 100', 'isConnected[i][j] == 1 for all i, j', 'isConnected is a symmetric n x n matrix'],
    examples: [
      { input: 'isConnected = [[1,1,1],[1,1,1],[1,1,1]]', output: '1', explanation: 'All three cities are connected to each other, forming one single province.' },
      { input: 'isConnected = [[1,1],[1,1]]', output: '1', explanation: 'Both cities are connected, forming one province.' }
    ],
    testCases: [
      { input: '3\n1 1 1\n1 1 1\n1 1 1', expectedOutput: '1', hidden: false },
      { input: '2\n1 1\n1 1', expectedOutput: '1', hidden: false },
      { input: '4\n1 1 1 1\n1 1 1 1\n1 1 1 1\n1 1 1 1', expectedOutput: '1', hidden: true },
      { input: '1\n1', expectedOutput: '1', hidden: true }
    ],
    starterCode: {
      python: 'def find_circle_num(isConnected):\n    pass',
      java: 'public int findCircleNum(int[][] isConnected) {\n    return 0;\n}',
      c: 'int findCircleNum(int** isConnected, int isConnectedSize, int* isConnectedColSize) {\n    return 0;\n}',
      cpp: 'int findCircleNum(vector<vector<int>>& isConnected) {\n    return 0;\n}'
    }
  },

  {
    id: 'nop-e3', title: 'Two Groups of Cities', difficulty: 'Easy',
    description: 'Given n cities split into exactly two groups where cities within the same group are connected but no connection exists between groups, return the number of provinces.',
    constraints: ['2 <= n <= 100', 'Cities form exactly 2 connected components', 'isConnected is a symmetric n x n matrix'],
    examples: [
      { input: 'isConnected = [[1,1,0],[1,1,0],[0,0,1]]', output: '2', explanation: 'Cities 0 and 1 are connected forming one province. City 2 is isolated forming another.' },
      { input: 'isConnected = [[1,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,1]]', output: '3', explanation: 'City 0 alone, cities 1 and 2 together, city 3 alone — three provinces.' }
    ],
    testCases: [
      { input: '3\n1 1 0\n1 1 0\n0 0 1', expectedOutput: '2', hidden: false },
      { input: '4\n1 0 0 0\n0 1 1 0\n0 1 1 0\n0 0 0 1', expectedOutput: '3', hidden: false },
      { input: '4\n1 1 0 0\n1 1 0 0\n0 0 1 1\n0 0 1 1', expectedOutput: '2', hidden: true },
      { input: '5\n1 1 1 0 0\n1 1 1 0 0\n1 1 1 0 0\n0 0 0 1 1\n0 0 0 1 1', expectedOutput: '2', hidden: true }
    ],
    starterCode: {
      python: 'def find_circle_num(isConnected):\n    pass',
      java: 'public int findCircleNum(int[][] isConnected) {\n    return 0;\n}',
      c: 'int findCircleNum(int** isConnected, int isConnectedSize, int* isConnectedColSize) {\n    return 0;\n}',
      cpp: 'int findCircleNum(vector<vector<int>>& isConnected) {\n    return 0;\n}'
    }
  },

  {
    id: 'nop-e4', title: 'Number of Provinces Using DFS', difficulty: 'Easy',
    description: 'Given an n x n adjacency matrix isConnected, use Depth-First Search to count the number of connected components (provinces). Start a DFS from every unvisited city and increment the province count each time.',
    constraints: ['1 <= n <= 200', '0 <= isConnected[i][j] <= 1', 'isConnected[i][i] == 1', 'isConnected[i][j] == isConnected[j][i]'],
    examples: [
      { input: 'isConnected = [[1,1,0],[1,1,0],[0,0,1]]', output: '2', explanation: 'DFS from city 0 visits cities 0 and 1 (province 1). DFS from city 2 visits only city 2 (province 2).' },
      { input: 'isConnected = [[1,0,0],[0,1,0],[0,0,1]]', output: '3', explanation: 'DFS from each city visits only itself. Three separate provinces.' }
    ],
    testCases: [
      { input: '3\n1 1 0\n1 1 0\n0 0 1', expectedOutput: '2', hidden: false },
      { input: '3\n1 0 0\n0 1 0\n0 0 1', expectedOutput: '3', hidden: false },
      { input: '4\n1 1 0 0\n1 1 1 0\n0 1 1 0\n0 0 0 1', expectedOutput: '2', hidden: true },
      { input: '5\n1 0 0 0 0\n0 1 0 0 0\n0 0 1 0 0\n0 0 0 1 1\n0 0 0 1 1', expectedOutput: '4', hidden: true }
    ],
    starterCode: {
      python: 'def find_circle_num(isConnected):\n    # Implement using DFS\n    pass',
      java: 'public int findCircleNum(int[][] isConnected) {\n    // Implement using DFS\n    return 0;\n}',
      c: 'int findCircleNum(int** isConnected, int isConnectedSize, int* isConnectedColSize) {\n    return 0;\n}',
      cpp: 'int findCircleNum(vector<vector<int>>& isConnected) {\n    // Implement using DFS\n    return 0;\n}'
    }
  },

  {
    id: 'nop-e5', title: 'Number of Provinces Using Union-Find', difficulty: 'Easy',
    description: 'Given an n x n adjacency matrix isConnected, use Union-Find (Disjoint Set Union) to count the number of provinces. For every pair (i, j) where isConnected[i][j] == 1, union the two cities. The number of distinct roots at the end is the answer.',
    constraints: ['1 <= n <= 200', '0 <= isConnected[i][j] <= 1', 'isConnected[i][i] == 1', 'isConnected[i][j] == isConnected[j][i]', 'Implement using Union-Find'],
    examples: [
      { input: 'isConnected = [[1,1,0],[1,1,0],[0,0,1]]', output: '2', explanation: 'Union(0,1) merges cities 0 and 1. City 2 stays separate. Two distinct roots remain.' },
      { input: 'isConnected = [[1,1,1],[1,1,1],[1,1,1]]', output: '1', explanation: 'All cities are unioned together. Only one root remains.' }
    ],
    testCases: [
      { input: '3\n1 1 0\n1 1 0\n0 0 1', expectedOutput: '2', hidden: false },
      { input: '3\n1 1 1\n1 1 1\n1 1 1', expectedOutput: '1', hidden: false },
      { input: '4\n1 0 0 1\n0 1 1 0\n0 1 1 0\n1 0 0 1', expectedOutput: '2', hidden: true },
      { input: '5\n1 0 0 0 0\n0 1 0 0 0\n0 0 1 0 0\n0 0 0 1 0\n0 0 0 0 1', expectedOutput: '5', hidden: true }
    ],
    starterCode: {
      python: 'def find_circle_num(isConnected):\n    # Implement using Union-Find\n    pass',
      java: 'public int findCircleNum(int[][] isConnected) {\n    // Implement using Union-Find\n    return 0;\n}',
      c: 'int findCircleNum(int** isConnected, int isConnectedSize, int* isConnectedColSize) {\n    return 0;\n}',
      cpp: 'int findCircleNum(vector<vector<int>>& isConnected) {\n    // Implement using Union-Find\n    return 0;\n}'
    }
  },

  // --- MEDIUM ---
  {
    id: 'nop-m1', title: 'Provinces After Adding a Connection', difficulty: 'Medium',
    description: 'Given an adjacency matrix and a new connection between two cities, add the connection and return the updated number of provinces.',
    constraints: ['1 <= n <= 200', 'isConnected[i][i] == 1', 'isConnected[i][j] == isConnected[j][i]', 'The new connection is given as two city indices a and b'],
    examples: [
      { input: 'isConnected = [[1,0,0],[0,1,0],[0,0,1]], a = 0, b = 1', output: '2', explanation: 'Adding connection between city 0 and city 1 merges them. Provinces: {0,1} and {2} = 2.' },
      { input: 'isConnected = [[1,1,0],[1,1,0],[0,0,1]], a = 1, b = 2', output: '1', explanation: 'Adding connection between city 1 and city 2 merges all three into one province.' }
    ],
    testCases: [
      { input: '3\n1 0 0\n0 1 0\n0 0 1\n0 1', expectedOutput: '2', hidden: false },
      { input: '3\n1 1 0\n1 1 0\n0 0 1\n1 2', expectedOutput: '1', hidden: false },
      { input: '4\n1 0 0 0\n0 1 0 0\n0 0 1 0\n0 0 0 1\n0 3', expectedOutput: '3', hidden: true },
      { input: '4\n1 1 0 0\n1 1 0 0\n0 0 1 1\n0 0 1 1\n0 2', expectedOutput: '1', hidden: true }
    ],
    starterCode: {
      python: 'def find_circle_num_after_add(isConnected, a, b):\n    pass',
      java: 'public int findCircleNumAfterAdd(int[][] isConnected, int a, int b) {\n    return 0;\n}',
      c: 'int findCircleNumAfterAdd(int** isConnected, int isConnectedSize, int* isConnectedColSize, int a, int b) {\n    return 0;\n}',
      cpp: 'int findCircleNumAfterAdd(vector<vector<int>>& isConnected, int a, int b) {\n    return 0;\n}'
    }
  },

  {
    id: 'nop-m2', title: 'Largest Province Size', difficulty: 'Medium',
    description: 'Given an adjacency matrix, find the size (number of cities) of the largest province.',
    constraints: ['1 <= n <= 200', 'isConnected[i][i] == 1', 'isConnected[i][j] == isConnected[j][i]'],
    examples: [
      { input: 'isConnected = [[1,1,0],[1,1,0],[0,0,1]]', output: '2', explanation: 'Province 1 has cities {0,1} with size 2. Province 2 has city {2} with size 1. Largest is 2.' },
      { input: 'isConnected = [[1,1,1],[1,1,1],[1,1,1]]', output: '3', explanation: 'All cities form one province of size 3.' }
    ],
    testCases: [
      { input: '3\n1 1 0\n1 1 0\n0 0 1', expectedOutput: '2', hidden: false },
      { input: '3\n1 1 1\n1 1 1\n1 1 1', expectedOutput: '3', hidden: false },
      { input: '5\n1 1 0 0 0\n1 1 0 0 0\n0 0 1 1 1\n0 0 1 1 1\n0 0 1 1 1', expectedOutput: '3', hidden: true },
      { input: '4\n1 0 0 0\n0 1 0 0\n0 0 1 0\n0 0 0 1', expectedOutput: '1', hidden: true }
    ],
    starterCode: {
      python: 'def largest_province(isConnected):\n    pass',
      java: 'public int largestProvince(int[][] isConnected) {\n    return 0;\n}',
      c: 'int largestProvince(int** isConnected, int isConnectedSize, int* isConnectedColSize) {\n    return 0;\n}',
      cpp: 'int largestProvince(vector<vector<int>>& isConnected) {\n    return 0;\n}'
    }
  },

  {
    id: 'nop-m3', title: 'Minimum Connections to Unite All Provinces', difficulty: 'Medium',
    description: 'Given an adjacency matrix, return the minimum number of new connections needed to make all cities belong to a single province. If there are p provinces, you need exactly p-1 new connections.',
    constraints: ['1 <= n <= 200', 'isConnected[i][i] == 1', 'isConnected[i][j] == isConnected[j][i]'],
    examples: [
      { input: 'isConnected = [[1,0,0],[0,1,0],[0,0,1]]', output: '2', explanation: 'Three isolated provinces. Need 3-1 = 2 new connections to unite them all.' },
      { input: 'isConnected = [[1,1,0],[1,1,0],[0,0,1]]', output: '1', explanation: 'Two provinces exist. Need 2-1 = 1 new connection to unite them.' }
    ],
    testCases: [
      { input: '3\n1 0 0\n0 1 0\n0 0 1', expectedOutput: '2', hidden: false },
      { input: '3\n1 1 0\n1 1 0\n0 0 1', expectedOutput: '1', hidden: false },
      { input: '4\n1 1 0 0\n1 1 0 0\n0 0 1 1\n0 0 1 1', expectedOutput: '1', hidden: true },
      { input: '5\n1 0 0 0 0\n0 1 0 0 0\n0 0 1 0 0\n0 0 0 1 0\n0 0 0 0 1', expectedOutput: '4', hidden: true }
    ],
    starterCode: {
      python: 'def min_connections(isConnected):\n    pass',
      java: 'public int minConnections(int[][] isConnected) {\n    return 0;\n}',
      c: 'int minConnections(int** isConnected, int isConnectedSize, int* isConnectedColSize) {\n    return 0;\n}',
      cpp: 'int minConnections(vector<vector<int>>& isConnected) {\n    return 0;\n}'
    }
  },

  {
    id: 'nop-m4', title: 'Provinces Using BFS', difficulty: 'Medium',
    description: 'Given an adjacency matrix, count the number of provinces using Breadth-First Search. For each unvisited city, perform a BFS to mark all cities in the same province as visited, then increment the province count.',
    constraints: ['1 <= n <= 200', 'isConnected[i][i] == 1', 'isConnected[i][j] == isConnected[j][i]', 'Implement using BFS'],
    examples: [
      { input: 'isConnected = [[1,1,0],[1,1,0],[0,0,1]]', output: '2', explanation: 'BFS from city 0 visits cities 0 and 1. BFS from city 2 visits only city 2. Total = 2 provinces.' },
      { input: 'isConnected = [[1,0,0],[0,1,1],[0,1,1]]', output: '2', explanation: 'BFS from city 0 visits only city 0. BFS from city 1 visits cities 1 and 2. Total = 2 provinces.' }
    ],
    testCases: [
      { input: '3\n1 1 0\n1 1 0\n0 0 1', expectedOutput: '2', hidden: false },
      { input: '3\n1 0 0\n0 1 1\n0 1 1', expectedOutput: '2', hidden: false },
      { input: '4\n1 0 0 1\n0 1 1 0\n0 1 1 0\n1 0 0 1', expectedOutput: '2', hidden: true },
      { input: '5\n1 1 0 0 0\n1 1 1 0 0\n0 1 1 0 0\n0 0 0 1 1\n0 0 0 1 1', expectedOutput: '2', hidden: true }
    ],
    starterCode: {
      python: 'def find_circle_num(isConnected):\n    # Implement using BFS\n    pass',
      java: 'public int findCircleNum(int[][] isConnected) {\n    // Implement using BFS\n    return 0;\n}',
      c: 'int findCircleNum(int** isConnected, int isConnectedSize, int* isConnectedColSize) {\n    return 0;\n}',
      cpp: 'int findCircleNum(vector<vector<int>>& isConnected) {\n    // Implement using BFS\n    return 0;\n}'
    }
  },

  {
    id: 'nop-m5', title: 'Cities in the Same Province', difficulty: 'Medium',
    description: 'Given an adjacency matrix and a target city, return a sorted list of all cities that belong to the same province as the target city, including the target itself.',
    constraints: ['1 <= n <= 200', 'isConnected[i][i] == 1', 'isConnected[i][j] == isConnected[j][i]', '0 <= target < n'],
    examples: [
      { input: 'isConnected = [[1,1,0],[1,1,0],[0,0,1]], target = 0', output: '[0, 1]', explanation: 'City 0 is connected to city 1. Both belong to the same province.' },
      { input: 'isConnected = [[1,1,1],[1,1,1],[1,1,1]], target = 2', output: '[0, 1, 2]', explanation: 'All cities are connected. The province of city 2 includes all cities.' }
    ],
    testCases: [
      { input: '3\n1 1 0\n1 1 0\n0 0 1\n0', expectedOutput: '0 1', hidden: false },
      { input: '3\n1 1 1\n1 1 1\n1 1 1\n2', expectedOutput: '0 1 2', hidden: false },
      { input: '4\n1 0 0 0\n0 1 1 0\n0 1 1 0\n0 0 0 1\n1', expectedOutput: '1 2', hidden: true },
      { input: '5\n1 1 0 0 0\n1 1 0 0 0\n0 0 1 1 1\n0 0 1 1 1\n0 0 1 1 1\n3', expectedOutput: '2 3 4', hidden: true }
    ],
    starterCode: {
      python: 'def cities_in_same_province(isConnected, target):\n    pass',
      java: 'public List<Integer> citiesInSameProvince(int[][] isConnected, int target) {\n    return new ArrayList<>();\n}',
      c: 'int* citiesInSameProvince(int** isConnected, int isConnectedSize, int* isConnectedColSize, int target, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> citiesInSameProvince(vector<vector<int>>& isConnected, int target) {\n    return {};\n}'
    }
  },

  // --- HARD ---
  {
    id: 'nop-h1', title: 'Provinces After Removing a City', difficulty: 'Hard',
    description: 'Given an adjacency matrix and a city index to remove, return the number of provinces after that city and all its connections are removed from the graph.',
    constraints: ['1 <= n <= 200', 'isConnected[i][i] == 1', 'isConnected[i][j] == isConnected[j][i]', '0 <= removeCity < n'],
    examples: [
      { input: 'isConnected = [[1,1,1],[1,1,0],[1,0,1]], removeCity = 0', output: '2', explanation: 'Removing city 0 leaves cities 1 and 2 with no connection between them. Two provinces remain.' },
      { input: 'isConnected = [[1,1,0],[1,1,1],[0,1,1]], removeCity = 1', output: '2', explanation: 'Removing city 1 disconnects city 0 and city 2. Two isolated provinces remain.' }
    ],
    testCases: [
      { input: '3\n1 1 1\n1 1 0\n1 0 1\n0', expectedOutput: '2', hidden: false },
      { input: '3\n1 1 0\n1 1 1\n0 1 1\n1', expectedOutput: '2', hidden: false },
      { input: '4\n1 1 0 0\n1 1 1 0\n0 1 1 1\n0 0 1 1\n2', expectedOutput: '2', hidden: true },
      { input: '4\n1 1 1 1\n1 1 0 0\n1 0 1 0\n1 0 0 1\n0', expectedOutput: '3', hidden: true }
    ],
    starterCode: {
      python: 'def provinces_after_removal(isConnected, removeCity):\n    pass',
      java: 'public int provincesAfterRemoval(int[][] isConnected, int removeCity) {\n    return 0;\n}',
      c: 'int provincesAfterRemoval(int** isConnected, int isConnectedSize, int* isConnectedColSize, int removeCity) {\n    return 0;\n}',
      cpp: 'int provincesAfterRemoval(vector<vector<int>>& isConnected, int removeCity) {\n    return 0;\n}'
    }
  },

  {
    id: 'nop-h2', title: 'Dynamic Province Queries', difficulty: 'Hard',
    description: 'Given n cities initially all isolated, process a sequence of operations: either CONNECT a b to add a connection between cities a and b, or QUERY to return the current number of provinces. Use Union-Find to handle each operation efficiently.',
    constraints: ['1 <= n <= 10^5', '1 <= operations <= 10^5', 'CONNECT a b: 0 <= a, b < n', 'QUERY returns the province count at that moment'],
    examples: [
      { input: 'n = 4, ops = ["QUERY", "CONNECT 0 1", "QUERY", "CONNECT 1 2", "QUERY"]', output: '[4, 3, 2]', explanation: 'Start: 4 provinces. After CONNECT 0-1: 3. After CONNECT 1-2: 2.' },
      { input: 'n = 3, ops = ["CONNECT 0 1", "CONNECT 1 2", "QUERY"]', output: '[1]', explanation: 'All three cities connected into one province before the query.' }
    ],
    testCases: [
      { input: '4\n5\nQUERY\nCONNECT 0 1\nQUERY\nCONNECT 1 2\nQUERY', expectedOutput: '4 3 2', hidden: false },
      { input: '3\n3\nCONNECT 0 1\nCONNECT 1 2\nQUERY', expectedOutput: '1', hidden: false },
      { input: '5\n4\nCONNECT 0 1\nCONNECT 2 3\nQUERY\nCONNECT 1 3', expectedOutput: '3', hidden: true },
      { input: '6\n5\nQUERY\nCONNECT 0 5\nCONNECT 1 2\nCONNECT 3 4\nQUERY', expectedOutput: '6 3', hidden: true }
    ],
    starterCode: {
      python: 'def process_operations(n, operations):\n    # Use Union-Find\n    pass',
      java: 'public int[] processOperations(int n, String[] operations) {\n    // Use Union-Find\n    return new int[]{}\n}',
      c: 'int* processOperations(int n, char** operations, int opsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<int> processOperations(int n, vector<string>& operations) {\n    // Use Union-Find\n    return {};\n}'
    }
  },

  {
    id: 'nop-h3', title: 'Provinces with Weighted Connections', difficulty: 'Hard',
    description: 'Given n cities and a list of weighted edges where each edge has a cost, and a budget B, add only edges whose cost is within the budget. Return the number of provinces formed using only affordable connections.',
    constraints: ['1 <= n <= 200', '1 <= edges.length <= n*(n-1)/2', 'Each edge is [city1, city2, cost]', '1 <= cost <= 10^6', '0 <= B <= 10^6'],
    examples: [
      { input: 'n = 4, edges = [[0,1,5],[1,2,3],[2,3,8],[0,3,2]], B = 4', output: '2', explanation: 'Affordable edges (cost <= 4): [0,1,5] No, [1,2,3] Yes, [2,3,8] No, [0,3,2] Yes. Connected: {0,3} and {1,2}. Two provinces.' },
      { input: 'n = 3, edges = [[0,1,10],[1,2,10],[0,2,10]], B = 5', output: '3', explanation: 'No edge is within budget. All cities remain isolated. Three provinces.' }
    ],
    testCases: [
      { input: '4\n4\n0 1 5\n1 2 3\n2 3 8\n0 3 2\n4', expectedOutput: '2', hidden: false },
      { input: '3\n3\n0 1 10\n1 2 10\n0 2 10\n5', expectedOutput: '3', hidden: false },
      { input: '4\n4\n0 1 1\n1 2 1\n2 3 1\n0 3 1\n1', expectedOutput: '1', hidden: true },
      { input: '5\n4\n0 1 3\n1 2 3\n2 3 3\n3 4 3\n2', expectedOutput: '3', hidden: true }
    ],
    starterCode: {
      python: 'def provinces_with_budget(n, edges, budget):\n    pass',
      java: 'public int provincesWithBudget(int n, int[][] edges, int budget) {\n    return 0;\n}',
      c: 'int provincesWithBudget(int n, int** edges, int edgesSize, int* edgesColSize, int budget) {\n    return 0;\n}',
      cpp: 'int provincesWithBudget(int n, vector<vector<int>>& edges, int budget) {\n    return 0;\n}'
    }
  },

  {
    id: 'nop-h4', title: 'Critical Connections Between Provinces', difficulty: 'Hard',
    description: 'Given an adjacency matrix, find all critical connections — edges whose removal increases the number of provinces. Use Tarjan\'s bridge-finding algorithm to identify these edges.',
    constraints: ['1 <= n <= 200', 'isConnected[i][i] == 1', 'isConnected[i][j] == isConnected[j][i]', 'Return all bridges as pairs [u, v] with u < v sorted in ascending order'],
    examples: [
      { input: 'isConnected = [[1,1,0],[1,1,1],[0,1,1]]', output: '[[0,1],[1,2]]', explanation: 'Removing edge 0-1 disconnects city 0. Removing edge 1-2 disconnects city 2. Both are bridges.' },
      { input: 'isConnected = [[1,1,1],[1,1,1],[1,1,1]]', output: '[]', explanation: 'Every city is connected to every other. No single edge removal increases province count.' }
    ],
    testCases: [
      { input: '3\n1 1 0\n1 1 1\n0 1 1', expectedOutput: '0 1\n1 2', hidden: false },
      { input: '3\n1 1 1\n1 1 1\n1 1 1', expectedOutput: '', hidden: false },
      { input: '4\n1 1 0 0\n1 1 1 0\n0 1 1 1\n0 0 1 1', expectedOutput: '0 1\n1 2\n2 3', hidden: true },
      { input: '4\n1 1 1 0\n1 1 1 0\n1 1 1 1\n0 0 1 1', expectedOutput: '2 3', hidden: true }
    ],
    starterCode: {
      python: 'def critical_connections(isConnected):\n    # Use Tarjan\'s bridge-finding algorithm\n    pass',
      java: 'public List<List<Integer>> criticalConnections(int[][] isConnected) {\n    // Use Tarjan\'s bridge-finding algorithm\n    return new ArrayList<>();\n}',
      c: 'int** criticalConnections(int** isConnected, int isConnectedSize, int* isConnectedColSize, int* returnSize, int** returnColumnSizes) {\n    return NULL;\n}',
      cpp: 'vector<vector<int>> criticalConnections(vector<vector<int>>& isConnected) {\n    // Use Tarjan\'s bridge-finding algorithm\n    return {};\n}'
    }
  },

  {
    id: 'nop-h5', title: 'Minimum Provinces After K Merges', difficulty: 'Hard',
    description: 'Given an adjacency matrix and an integer k, you can perform at most k merge operations. Each merge picks any two cities from different provinces and connects them. Return the minimum number of provinces possible after at most k merges.',
    constraints: ['1 <= n <= 200', 'isConnected[i][i] == 1', 'isConnected[i][j] == isConnected[j][i]', '0 <= k <= n'],
    examples: [
      { input: 'isConnected = [[1,0,0],[0,1,0],[0,0,1]], k = 1', output: '2', explanation: 'Three isolated provinces. One merge reduces it to 2 provinces.' },
      { input: 'isConnected = [[1,0,0],[0,1,0],[0,0,1]], k = 3', output: '1', explanation: 'Three provinces. Two merges are enough to unite all into one. k=3 >= 2 needed, so result is 1.' }
    ],
    testCases: [
      { input: '3\n1 0 0\n0 1 0\n0 0 1\n1', expectedOutput: '2', hidden: false },
      { input: '3\n1 0 0\n0 1 0\n0 0 1\n3', expectedOutput: '1', hidden: false },
      { input: '5\n1 1 0 0 0\n1 1 0 0 0\n0 0 1 1 0\n0 0 1 1 0\n0 0 0 0 1\n1', expectedOutput: '2', hidden: true },
      { input: '4\n1 0 0 0\n0 1 0 0\n0 0 1 0\n0 0 0 1\n0', expectedOutput: '4', hidden: true }
    ],
    starterCode: {
      python: 'def min_provinces_after_k_merges(isConnected, k):\n    pass',
      java: 'public int minProvincesAfterKMerges(int[][] isConnected, int k) {\n    return 0;\n}',
      c: 'int minProvincesAfterKMerges(int** isConnected, int isConnectedSize, int* isConnectedColSize, int k) {\n    return 0;\n}',
      cpp: 'int minProvincesAfterKMerges(vector<vector<int>>& isConnected, int k) {\n    return 0;\n}'
    }
  },
];
