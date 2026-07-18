export const EDproblems = [
  // --- EASY ---
  {
    id: 'ed-e1', title: 'Direct Division Query', difficulty: 'Easy',
    description: 'Given a single equation a/b = k and a query asking for a/b, return the result directly.',
    constraints: ['equations.length == 1', 'values[0] > 0', 'Query is the same as the given equation'],
    examples: [
      { input: 'equations = [["a","b"]], values = [2.0], queries = [["a","b"]]', output: '[2.0]', explanation: 'a/b = 2.0 is directly given.' },
      { input: 'equations = [["x","y"]], values = [5.0], queries = [["x","y"]]', output: '[5.0]', explanation: 'x/y = 5.0 is directly given.' }
    ],
    testCases: [
      { input: '1\na b 2.0\n1\na b', expectedOutput: '2.00000', hidden: false },
      { input: '1\nx y 5.0\n1\nx y', expectedOutput: '5.00000', hidden: false }
    ],
    starterCode: {
      python: 'def calc_equation(equations, values, queries):\n    pass',
      java: 'public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {\n    return new double[]{};\n}',
      c: 'double* calcEquation(char*** equations, int equationsSize, double* values, char*** queries, int queriesSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {\n    return {};\n}'
    }
  },

  {
    id: 'ed-e2', title: 'Inverse Division Query', difficulty: 'Easy',
    description: 'Given a/b = k, answer the query b/a. The inverse of a division is 1 divided by the original value.',
    constraints: ['equations.length == 1', 'values[0] > 0', 'Query is the inverse of the given equation'],
    examples: [
      { input: 'equations = [["a","b"]], values = [2.0], queries = [["b","a"]]', output: '[0.5]', explanation: 'b/a = 1 / (a/b) = 1/2.0 = 0.5.' },
      { input: 'equations = [["x","y"]], values = [4.0], queries = [["y","x"]]', output: '[0.25]', explanation: 'y/x = 1/4.0 = 0.25.' }
    ],
    testCases: [
      { input: '1\na b 2.0\n1\nb a', expectedOutput: '0.50000', hidden: false },
      { input: '1\nx y 4.0\n1\ny x', expectedOutput: '0.25000', hidden: false }
    ],
    starterCode: {
      python: 'def calc_equation(equations, values, queries):\n    pass',
      java: 'public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {\n    return new double[]{};\n}',
      c: 'double* calcEquation(char*** equations, int equationsSize, double* values, char*** queries, int queriesSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {\n    return {};\n}'
    }
  },

  {
    id: 'ed-e3', title: 'Self Division Query', difficulty: 'Easy',
    description: 'Given some equations, answer a query where both the numerator and denominator are the same known variable. Any variable divided by itself equals 1.0.',
    constraints: ['1 <= equations.length <= 5', 'The queried variable exists in the equations', 'Query is of the form x/x'],
    examples: [
      { input: 'equations = [["a","b"]], values = [2.0], queries = [["a","a"]]', output: '[1.0]', explanation: 'a/a = 1.0 always.' },
      { input: 'equations = [["x","y"]], values = [3.0], queries = [["y","y"]]', output: '[1.0]', explanation: 'y/y = 1.0 always.' }
    ],
    testCases: [
      { input: '1\na b 2.0\n1\na a', expectedOutput: '1.00000', hidden: false },
      { input: '1\nx y 3.0\n1\ny y', expectedOutput: '1.00000', hidden: false }
    ],
    starterCode: {
      python: 'def calc_equation(equations, values, queries):\n    pass',
      java: 'public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {\n    return new double[]{};\n}',
      c: 'double* calcEquation(char*** equations, int equationsSize, double* values, char*** queries, int queriesSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {\n    return {};\n}'
    }
  },

  {
    id: 'ed-e4', title: 'Unknown Variable Query', difficulty: 'Easy',
    description: 'Given some equations, answer a query that involves a variable not present in any equation. The result should be -1.0 since the value is undefined.',
    constraints: ['1 <= equations.length <= 5', 'The queried variable does not exist in any equation'],
    examples: [
      { input: 'equations = [["a","b"]], values = [2.0], queries = [["a","e"]]', output: '[-1.0]', explanation: 'e is not in any equation, so the result is -1.0.' },
      { input: 'equations = [["x","y"]], values = [3.0], queries = [["z","x"]]', output: '[-1.0]', explanation: 'z is unknown, so the result is -1.0.' }
    ],
    testCases: [
      { input: '1\na b 2.0\n1\na e', expectedOutput: '-1.00000', hidden: false },
      { input: '1\nx y 3.0\n1\nz x', expectedOutput: '-1.00000', hidden: false }
    ],
    starterCode: {
      python: 'def calc_equation(equations, values, queries):\n    pass',
      java: 'public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {\n    return new double[]{};\n}',
      c: 'double* calcEquation(char*** equations, int equationsSize, double* values, char*** queries, int queriesSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {\n    return {};\n}'
    }
  },

  {
    id: 'ed-e5', title: 'Two-Step Chained Division', difficulty: 'Easy',
    description: 'Given a/b = k1 and b/c = k2, answer the query a/c by chaining the two equations together.',
    constraints: ['equations.length == 2', 'values[i] > 0', 'Query requires exactly one intermediate variable'],
    examples: [
      { input: 'equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"]]', output: '[6.0]', explanation: 'a/c = (a/b) * (b/c) = 2.0 * 3.0 = 6.0.' },
      { input: 'equations = [["x","y"],["y","z"]], values = [4.0,2.0], queries = [["x","z"]]', output: '[8.0]', explanation: 'x/z = (x/y) * (y/z) = 4.0 * 2.0 = 8.0.' }
    ],
    testCases: [
      { input: '2\na b 2.0\nb c 3.0\n1\na c', expectedOutput: '6.00000', hidden: false },
      { input: '2\nx y 4.0\ny z 2.0\n1\nx z', expectedOutput: '8.00000', hidden: false }
    ],
    starterCode: {
      python: 'def calc_equation(equations, values, queries):\n    pass',
      java: 'public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {\n    return new double[]{};\n}',
      c: 'double* calcEquation(char*** equations, int equationsSize, double* values, char*** queries, int queriesSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {\n    return {};\n}'
    }
  },

  // --- MEDIUM ---
  {
    id: 'ed-m1', title: 'Multiple Queries on Same Graph', difficulty: 'Medium',
    description: 'Given a set of equations and values, answer multiple queries including direct, inverse, chained, self, and unknown variable lookups all at once.',
    constraints: ['1 <= equations.length <= 10', 'values[i] > 0', '1 <= queries.length <= 10'],
    examples: [
      { input: 'equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"]]', output: '[6.0, 0.5, -1.0, 1.0]', explanation: 'a/c=6.0 by chaining, b/a=0.5 by inverse, a/e=-1.0 unknown, a/a=1.0 self.' },
      { input: 'equations = [["x","y"],["y","z"]], values = [3.0,2.0], queries = [["x","z"],["z","x"],["x","x"],["x","w"]]', output: '[6.0, 0.16667, 1.0, -1.0]', explanation: 'x/z=6.0, z/x=1/6.0, x/x=1.0, w unknown=-1.0.' }
    ],
    testCases: [
      { input: '2\na b 2.0\nb c 3.0\n4\na c\nb a\na e\na a', expectedOutput: '6.00000 0.50000 -1.00000 1.00000', hidden: false },
      { input: '2\nx y 3.0\ny z 2.0\n4\nx z\nz x\nx x\nx w', expectedOutput: '6.00000 0.16667 1.00000 -1.00000', hidden: false }
    ],
    starterCode: {
      python: 'def calc_equation(equations, values, queries):\n    pass',
      java: 'public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {\n    return new double[]{}\n}',
      c: 'double* calcEquation(char*** equations, int equationsSize, double* values, char*** queries, int queriesSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {\n    return {};\n}'
    }
  },

  {
    id: 'ed-m2', title: 'Three-Step Chain Query', difficulty: 'Medium',
    description: 'Given equations a/b, b/c, and c/d, answer a query that requires chaining through three intermediate variables to reach the result.',
    constraints: ['equations.length == 3', 'values[i] > 0', 'Query requires chaining through all three equations'],
    examples: [
      { input: 'equations = [["a","b"],["b","c"],["c","d"]], values = [2.0,3.0,4.0], queries = [["a","d"]]', output: '[24.0]', explanation: 'a/d = (a/b)*(b/c)*(c/d) = 2*3*4 = 24.0.' },
      { input: 'equations = [["p","q"],["q","r"],["r","s"]], values = [2.0,2.0,2.0], queries = [["p","s"]]', output: '[8.0]', explanation: 'p/s = 2*2*2 = 8.0.' }
    ],
    testCases: [
      { input: '3\na b 2.0\nb c 3.0\nc d 4.0\n1\na d', expectedOutput: '24.00000', hidden: false },
      { input: '3\np q 2.0\nq r 2.0\nr s 2.0\n1\np s', expectedOutput: '8.00000', hidden: false }
    ],
    starterCode: {
      python: 'def calc_equation(equations, values, queries):\n    pass',
      java: 'public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {\n    return new double[]{}\n}',
      c: 'double* calcEquation(char*** equations, int equationsSize, double* values, char*** queries, int queriesSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {\n    return {};\n}'
    }
  },

  {
    id: 'ed-m3', title: 'Disconnected Graph Query', difficulty: 'Medium',
    description: 'Given two separate groups of equations with no shared variables between them, answer queries both within each group and across groups. Cross-group queries must return -1.0.',
    constraints: ['2 <= equations.length <= 10', 'Variables form exactly 2 disconnected components', 'Some queries cross components'],
    examples: [
      { input: 'equations = [["a","b"],["c","d"]], values = [2.0,3.0], queries = [["a","b"],["c","d"],["a","c"]]', output: '[2.0, 3.0, -1.0]', explanation: 'a-b and c-d are disconnected. a/c has no path so returns -1.0.' },
      { input: 'equations = [["x","y"],["p","q"]], values = [5.0,4.0], queries = [["y","x"],["p","q"],["x","p"]]', output: '[0.2, 4.0, -1.0]', explanation: 'x-y and p-q are separate components. x/p is undefined.' }
    ],
    testCases: [
      { input: '2\na b 2.0\nc d 3.0\n3\na b\nc d\na c', expectedOutput: '2.00000 3.00000 -1.00000', hidden: false },
      { input: '2\nx y 5.0\np q 4.0\n3\ny x\np q\nx p', expectedOutput: '0.20000 4.00000 -1.00000', hidden: false }
    ],
    starterCode: {
      python: 'def calc_equation(equations, values, queries):\n    pass',
      java: 'public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {\n    return new double[]{}\n}',
      c: 'double* calcEquation(char*** equations, int equationsSize, double* values, char*** queries, int queriesSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {\n    return {};\n}'
    }
  },

  {
    id: 'ed-m4', title: 'Evaluate Division Using BFS', difficulty: 'Medium',
    description: 'Implement the evaluate division solution using Breadth-First Search on a weighted graph. Each variable is a node and each equation a/b = k adds edges a→b with weight k and b→a with weight 1/k.',
    constraints: ['1 <= equations.length <= 15', 'values[i] > 0', 'Implement using BFS'],
    examples: [
      { input: 'equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"]]', output: '[6.0, 0.5]', explanation: 'BFS from a finds path a→b→c with product 2*3=6.0. BFS from b to a gives 1/2=0.5.' },
      { input: 'equations = [["x","y"],["y","z"]], values = [2.0,4.0], queries = [["x","z"],["z","y"]]', output: '[8.0, 0.25]', explanation: 'x→y→z gives 2*4=8.0. z→y gives 1/4=0.25.' }
    ],
    testCases: [
      { input: '2\na b 2.0\nb c 3.0\n2\na c\nb a', expectedOutput: '6.00000 0.50000', hidden: false },
      { input: '2\nx y 2.0\ny z 4.0\n2\nx z\nz y', expectedOutput: '8.00000 0.25000', hidden: false }
    ],
    starterCode: {
      python: 'def calc_equation(equations, values, queries):\n    # Implement using BFS\n    pass',
      java: 'public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {\n    // Implement using BFS\n    return new double[]{}\n}',
      c: 'double* calcEquation(char*** equations, int equationsSize, double* values, char*** queries, int queriesSize, int* returnSize) {\n    /* Implement using BFS */\n    return NULL;\n}',
      cpp: 'vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {\n    // Implement using BFS\n    return {};\n}'
    }
  },

  {
    id: 'ed-m5', title: 'Count Reachable Variable Pairs', difficulty: 'Medium',
    description: 'Given a set of equations, count how many ordered pairs (x, y) of known variables have a defined (non -1.0) division result, including self-divisions.',
    constraints: ['1 <= equations.length <= 10', 'All variable names are unique single characters', 'Include self-pairs (x, x)'],
    examples: [
      { input: 'equations = [["a","b"],["b","c"]], values = [2.0,3.0]', output: '9', explanation: 'Variables: a, b, c. All 9 ordered pairs (a/a, a/b, a/c, b/a, b/b, b/c, c/a, c/b, c/c) are reachable since they are all connected.' },
      { input: 'equations = [["a","b"],["c","d"]], values = [2.0,3.0]', output: '4', explanation: 'Two disconnected components {a,b} and {c,d}. Only 2+2=4 self+within-group pairs are reachable per component, total = 4.' }
    ],
    testCases: [
      { input: '2\na b 2.0\nb c 3.0', expectedOutput: '9', hidden: false },
      { input: '2\na b 2.0\nc d 3.0', expectedOutput: '8', hidden: false }
    ],
    starterCode: {
      python: 'def count_reachable_pairs(equations, values):\n    pass',
      java: 'public int countReachablePairs(List<List<String>> equations, double[] values) {\n    return 0;\n}',
      c: 'int countReachablePairs(char*** equations, int equationsSize, double* values) {\n    return 0;\n}',
      cpp: 'int countReachablePairs(vector<vector<string>>& equations, vector<double>& values) {\n    return 0;\n}'
    }
  },

  // --- HARD ---
  {
    id: 'ed-h1', title: 'Evaluate Division Using Union-Find', difficulty: 'Hard',
    description: 'Implement the evaluate division solution using a weighted Union-Find (DSU) data structure. Each union operation must track the ratio between a node and its root so that any query can be answered in near O(1) after preprocessing.',
    constraints: ['1 <= equations.length <= 20', 'values[i] > 0', 'Implement using weighted Union-Find'],
    examples: [
      { input: 'equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"]]', output: '[6.0, 0.5, -1.0, 1.0]', explanation: 'Union-Find tracks weights. a/c = weight[a]/weight[c] within same component = 6.0.' },
      { input: 'equations = [["x","y"],["y","z"],["z","w"]], values = [2.0,3.0,4.0], queries = [["x","w"],["w","x"]]', output: '[24.0, 0.04167]', explanation: 'x/w = 2*3*4 = 24.0 via weighted DSU path compression.' }
    ],
    testCases: [
      { input: '2\na b 2.0\nb c 3.0\n4\na c\nb a\na e\na a', expectedOutput: '6.00000 0.50000 -1.00000 1.00000', hidden: false },
      { input: '3\nx y 2.0\ny z 3.0\nz w 4.0\n2\nx w\nw x', expectedOutput: '24.00000 0.04167', hidden: false }
    ],
    starterCode: {
      python: 'def calc_equation(equations, values, queries):\n    # Implement using weighted Union-Find\n    pass',
      java: 'public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {\n    // Implement using weighted Union-Find\n    return new double[]{}\n}',
      c: 'double* calcEquation(char*** equations, int equationsSize, double* values, char*** queries, int queriesSize, int* returnSize) {\n    /* Implement using weighted Union-Find */\n    return NULL;\n}',
      cpp: 'vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {\n    // Implement using weighted Union-Find\n    return {};\n}'
    }
  },

  {
    id: 'ed-h2', title: 'Detect Contradiction in Equations', difficulty: 'Hard',
    description: 'Given a list of equations and values, determine if any equation contradicts a previously derivable result. A contradiction occurs when a query that can already be computed yields a different value than what is being asserted.',
    constraints: ['1 <= equations.length <= 20', 'values[i] > 0', 'Return true if a contradiction exists, false otherwise'],
    examples: [
      { input: 'equations = [["a","b"],["b","c"],["a","c"]], values = [2.0,3.0,5.0]', output: 'true', explanation: 'a/c should be 6.0 from chaining, but the third equation says 5.0 — contradiction.' },
      { input: 'equations = [["a","b"],["b","c"],["a","c"]], values = [2.0,3.0,6.0]', output: 'false', explanation: 'a/c = 2*3 = 6.0 matches the third equation — no contradiction.' }
    ],
    testCases: [
      { input: '3\na b 2.0\nb c 3.0\na c 5.0', expectedOutput: 'true', hidden: false },
      { input: '3\na b 2.0\nb c 3.0\na c 6.0', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: 'def has_contradiction(equations, values):\n    pass',
      java: 'public boolean hasContradiction(List<List<String>> equations, double[] values) {\n    return false;\n}',
      c: 'int hasContradiction(char*** equations, int equationsSize, double* values) {\n    return 0;\n}',
      cpp: 'bool hasContradiction(vector<vector<string>>& equations, vector<double>& values) {\n    return false;\n}'
    }
  },

  {
    id: 'ed-h3', title: 'Minimum Equations to Answer All Queries', difficulty: 'Hard',
    description: 'Given a list of queries, determine the minimum number of equations needed (chosen from a provided set) such that all queries return a defined result (not -1.0). Return the count of selected equations.',
    constraints: ['1 <= equations.length <= 20', '1 <= queries.length <= 10', 'All query variables exist in the equations set'],
    examples: [
      { input: 'equations = [["a","b"],["b","c"],["a","c"]], values = [2.0,3.0,6.0], queries = [["a","c"]]', output: '2', explanation: 'We need at least equations a/b and b/c (or just a/c) to answer a/c. Minimum is 1 direct or 2 chained.' },
      { input: 'equations = [["a","b"],["c","d"],["b","c"]], values = [2.0,3.0,4.0], queries = [["a","d"]]', output: '3', explanation: 'To reach a/d we need all three equations: a/b, b/c, c/d.' }
    ],
    testCases: [
      { input: '3\na b 2.0\nb c 3.0\na c 6.0\n1\na c', expectedOutput: '1', hidden: false },
      { input: '3\na b 2.0\nc d 3.0\nb c 4.0\n1\na d', expectedOutput: '3', hidden: false }
    ],
    starterCode: {
      python: 'def min_equations(equations, values, queries):\n    pass',
      java: 'public int minEquations(List<List<String>> equations, double[] values, List<List<String>> queries) {\n    return 0;\n}',
      c: 'int minEquations(char*** equations, int equationsSize, double* values, char*** queries, int queriesSize) {\n    return 0;\n}',
      cpp: 'int minEquations(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {\n    return 0;\n}'
    }
  },

  {
    id: 'ed-h4', title: 'Evaluate Division with Variable Substitution', difficulty: 'Hard',
    description: 'You are given equations and a substitution map that renames certain variables. Apply the substitutions first, then evaluate all queries on the renamed graph. If a substitution creates a self-loop (a variable maps to itself), treat it as value 1.0.',
    constraints: ['1 <= equations.length <= 20', '1 <= substitutions.length <= 10', 'Substitutions are applied before building the graph'],
    examples: [
      { input: 'equations = [["a","b"],["b","c"]], values = [2.0,3.0], substitutions = {"a":"x","c":"z"}, queries = [["x","z"]]', output: '[6.0]', explanation: 'After substitution a→x and c→z, the graph becomes x/b=2.0, b/z=3.0. x/z = 6.0.' },
      { input: 'equations = [["p","q"],["q","r"]], values = [4.0,2.0], substitutions = {"p":"a"}, queries = [["a","r"]]', output: '[8.0]', explanation: 'p is renamed to a. a/q=4.0, q/r=2.0, so a/r=8.0.' }
    ],
    testCases: [
      { input: '2\na b 2.0\nb c 3.0\n2\na x\nc z\n1\nx z', expectedOutput: '6.00000', hidden: false },
      { input: '2\np q 4.0\nq r 2.0\n1\np a\n1\na r', expectedOutput: '8.00000', hidden: false }
    ],
    starterCode: {
      python: 'def calc_equation_with_substitution(equations, values, substitutions, queries):\n    pass',
      java: 'public double[] calcEquationWithSubstitution(List<List<String>> equations, double[] values, Map<String,String> substitutions, List<List<String>> queries) {\n    return new double[]{}\n}',
      c: 'double* calcEquationWithSubstitution(char*** equations, int equationsSize, double* values, char** fromVars, char** toVars, int subSize, char*** queries, int queriesSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<double> calcEquationWithSubstitution(vector<vector<string>>& equations, vector<double>& values, unordered_map<string,string>& substitutions, vector<vector<string>>& queries) {\n    return {};\n}'
    }
  },

  {
    id: 'ed-h5', title: 'Dynamic Equation Updates and Queries', difficulty: 'Hard',
    description: 'You are given an initial set of equations. Then you receive a sequence of operations: either ADD a new equation or QUERY a division. Process each operation in order and return results for all QUERY operations. After each ADD, the graph must be updated before the next query.',
    constraints: ['1 <= initial equations <= 10', '1 <= operations <= 20', 'ADD operations provide a variable pair and a value', 'QUERY operations provide a variable pair'],
    examples: [
      { input: 'initial: [["a","b"]], values: [2.0], ops: ["QUERY a b", "ADD b c 3.0", "QUERY a c"]', output: '[2.0, 6.0]', explanation: 'First query returns 2.0 directly. After adding b/c=3.0, second query chains to get 6.0.' },
      { input: 'initial: [["x","y"]], values: [4.0], ops: ["QUERY x z", "ADD y z 2.0", "QUERY x z"]', output: '[-1.0, 8.0]', explanation: 'z is unknown initially so -1.0. After adding y/z=2.0, x/z = 4*2 = 8.0.' }
    ],
    testCases: [
      { input: '1\na b 2.0\n3\nQUERY a b\nADD b c 3.0\nQUERY a c', expectedOutput: '2.00000 6.00000', hidden: false },
      { input: '1\nx y 4.0\n3\nQUERY x z\nADD y z 2.0\nQUERY x z', expectedOutput: '-1.00000 8.00000', hidden: false }
    ],
    starterCode: {
      python: 'def process_operations(equations, values, operations):\n    pass',
      java: 'public double[] processOperations(List<List<String>> equations, double[] values, List<String> operations) {\n    return new double[]{}\n}',
      c: 'double* processOperations(char*** equations, int equationsSize, double* values, char** operations, int opsSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<double> processOperations(vector<vector<string>>& equations, vector<double>& values, vector<string>& operations) {\n    return {};\n}'
    }
  },
];
