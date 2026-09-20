const problems = [
  {
    id: "ts_prob_1",
    title: "Basic Topological Sort",
    difficulty: "Easy",
    description: "Given a Directed Acyclic Graph (DAG) represented as an adjacency list, return any valid topological ordering of the vertices.",
    constraints: "Vertices: 1 to 10^4, Edges: 1 to 10^5",
    examples: [
      {
        input: "numNodes = 4, edges = [[1, 0], [2, 0], [3, 1], [3, 2]]",
        output: "[3, 1, 2, 0] or [3, 2, 1, 0]",
        explanation: "Node 3 has no incoming edges. Once removed, 1 and 2 become available. Finally, 0 is processed."
      }
    ],
    testCases: [
      { input: { numNodes: 4, edges: [[1, 0], [2, 0], [3, 1], [3, 2]] }, output: "[3, 1, 2, 0]" },
      { input: { numNodes: 3, edges: [[0, 1], [1, 2]] }, output: "[0, 1, 2]" },
      { input: { numNodes: 2, edges: [] }, output: "[0, 1]" }
    ],
    starterCode: {
      python: "def solve(numNodes, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public List<Integer> solve(int numNodes, int[][] edges) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}",
      c: "void solve(int numNodes, int edges[][], int edgesCount) {\n    // Write your code here\n}",
      cpp: "vector<int> solve(int numNodes, vector<vector<int>>& edges) {\n    // Write your code here\n    return {};\n}"
    }
  },
  {
    id: "ts_prob_2",
    title: "Course Schedule I",
    difficulty: "Easy",
    description: "There are a total of 'numCourses' courses you have to take, labeled from 0 to numCourses - 1. Some courses have prerequisites. Return true if you can finish all courses, otherwise return false.",
    constraints: "numCourses: 1 to 2000, prerequisites: 0 to 5000",
    examples: [
      {
        input: "numCourses = 2, prerequisites = [[1, 0]]",
        output: "true",
        explanation: "Take course 0 first, then course 1."
      },
      {
        input: "numCourses = 2, prerequisites = [[1, 0], [0, 1]]",
        output: "false",
        explanation: "Cycle detected between 0 and 1."
      }
    ],
    testCases: [
      { input: { numCourses: 2, prerequisites: [[1, 0]] }, output: "true" },
      { input: { numCourses: 2, prerequisites: [[1, 0], [0, 1]] }, output: "false" },
      { input: { numCourses: 3, prerequisites: [[1, 0], [2, 1]] }, output: "true" }
    ],
    starterCode: {
      python: "def canFinish(numCourses, prerequisites):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public boolean canFinish(int numCourses, int[][] prerequisites) {\n        // Write your code here\n        return false;\n    }\n}",
      c: "bool canFinish(int numCourses, int prerequisites[][], int prereqCount) {\n    // Write your code here\n}",
      cpp: "bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {\n    // Write your code here\n    return false;\n}"
    }
  },
  {
    id: "ts_prob_3",
    title: "Find First Valid Task",
    difficulty: "Easy",
    description: "In a set of tasks with dependencies, find the first task (lowest ID) that can be executed immediately (has no prerequisites).",
    constraints: "Tasks: 1 to 1000, Dependencies: 0 to 5000",
    examples: [
      {
        input: "tasks = 3, deps = [[1, 0], [2, 1]]",
        output: "0",
        explanation: "Task 0 has no dependencies."
      }
    ],
    testCases: [
      { input: { tasks: 3, deps: [[1, 0], [2, 1]] }, output: "0" },
      { input: { tasks: 3, deps: [[0, 2], [1, 2]] }, output: "2" },
      { input: { tasks: 2, deps: [] }, output: "0" }
    ],
    starterCode: {
      python: "def findFirstTask(tasks, deps):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int findFirstTask(int tasks, int[][] deps) {\n        // Write your code here\n        return -1;\n    }\n}",
      c: "int findFirstTask(int tasks, int deps[][], int depCount) {\n    // Write your code here\n}",
      cpp: "int findFirstTask(int tasks, vector<vector<int>>& deps) {\n    // Write your code here\n    return -1;\n}"
    }
  },
  {
    id: "ts_prob_4",
    title: "Check for Cycle in DAG",
    difficulty: "Easy",
    description: "Given a directed graph, determine if it contains a cycle. Return true if a cycle exists, otherwise false.",
    constraints: "Vertices: 1 to 1000, Edges: 0 to 5000",
    examples: [
      {
        input: "V = 3, edges = [[0, 1], [1, 2], [2, 0]]",
        output: "true",
        explanation: "Cycle 0 -> 1 -> 2 -> 0 exists."
      }
    ],
    testCases: [
      { input: { V: 3, edges: [[0, 1], [1, 2], [2, 0]] }, output: "true" },
      { input: { V: 3, edges: [[0, 1], [1, 2]] }, output: "false" },
      { input: { V: 2, edges: [[0, 1], [0, 1]] }, output: "true" }
    ],
    starterCode: {
      python: "def hasCycle(V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public boolean hasCycle(int V, int[][] edges) {\n        // Write your code here\n        return false;\n    }\n}",
      c: "bool hasCycle(int V, int edges[][], int edgeCount) {\n    // Write your code here\n}",
      cpp: "bool hasCycle(int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return false;\n}"
    }
  },
  {
    id: "ts_prob_5",
    title: "Alien Dictionary (Simple)",
    difficulty: "Easy",
    description: "Given a list of words from an alien language sorted lexicographically, find the order of characters in that language. Assume only one unique order exists and no cycles.",
    constraints: "Words: 1 to 100, Unique chars: 1 to 26",
    examples: [
      {
        input: "words = ['wrt', 'wrf', 'er', 'ett', 'rftt']",
        output: "'wertf'",
        explanation: "Comparing 'wrt' and 'wrf' -> t < f. Comparing 'wrf' and 'er' -> w < e, etc."
      }
    ],
    testCases: [
      { input: { words: ['wrt', 'wrf', 'er', 'ett', 'rftt'] }, output: "'wertf'" },
      { input: { words: ['z', 'x'] }, output: "'zx'" },
      { input: { words: ['a', 'b', 'c'] }, output: "'abc'" }
    ],
    starterCode: {
      python: "def alienOrder(words):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public String alienOrder(String[] words) {\n        // Write your code here\n        return \"\";\n    }\n}",
      c: "char* alienOrder(char** words, int wordsSize) {\n    // Write your code here\n}",
      cpp: "string alienOrder(vector<string>& words) {\n    // Write your code here\n    return \"\";\n}"
    }
  },
  {
    id: "ts_prob_6",
    title: "Course Schedule II",
    difficulty: "Medium",
    description: "Return the ordering of courses you should take to finish all courses. If it is impossible, return an empty array.",
    constraints: "numCourses: 1 to 2000, prerequisites: 0 to 5000",
    examples: [
      {
        input: "numCourses = 4, prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]]",
        output: "[0, 1, 2, 3] or [0, 2, 1, 3]",
        explanation: "Course 0 is a prerequisite for 1 and 2; both 1 and 2 are prerequisites for 3."
      }
    ],
    testCases: [
      { input: { numCourses: 4, prerequisites: [[1, 0], [2, 0], [3, 1], [3, 2]] }, output: "[0, 1, 2, 3]" },
      { input: { numCourses: 2, prerequisites: [[1, 0], [0, 1]] }, output: "[]" },
      { input: { numCourses: 3, prerequisites: [[1, 0], [2, 1]] }, output: "[0, 1, 2]" }
    ],
    starterCode: {
      python: "def findOrder(numCourses, prerequisites):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int[] findOrder(int numCourses, int[][] prerequisites) {\n        // Write your code here\n        return new int[0];\n    }\n}",
      c: "int* findOrder(int numCourses, int prerequisites[][], int prereqCount, int* resultSize) {\n    // Write your code here\n}",
      cpp: "vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {\n    // Write your code here\n    return {};\n}"
    }
  },
  {
    id: "ts_prob_7",
    title: "Parallel Courses",
    difficulty: "Medium",
    description: "Given 'n' courses and their dependencies, find the minimum number of semesters needed to take all courses. You can take any number of courses in one semester if their prerequisites are met.",
    constraints: "n: 1 to 1000, relations: 0 to 5000",
    examples: [
      {
        input: "n = 3, relations = [[1, 3], [2, 3]]",
        output: "2",
        explanation: "Semester 1: Course 1 and 2. Semester 2: Course 3."
      }
    ],
    testCases: [
      { input: { n: 3, relations: [[1, 3], [2, 3]] }, output: "2" },
      { input: { n: 3, relations: [[1, 2], [2, 3]] }, output: "3" },
      { input: { n: 3, relations: [] }, output: "1" }
    ],
    starterCode: {
      python: "def minSemesters(n, relations):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int minSemesters(int n, int[][] relations) {\n        // Write your code here\n        return -1;\n    }\n}",
      c: "int minSemesters(int n, int relations[][], int relCount) {\n    // Write your code here\n}",
      cpp: "int minSemesters(int n, vector<vector<int>>& relations) {\n    // Write your code here\n    return -1;\n}"
    }
  },
  {
    id: "ts_prob_8",
    title: "Lexicographically Smallest Topological Sort",
    difficulty: "Medium",
    description: "Find the lexicographically smallest topological sort of a DAG. If multiple valid sorts exist, return the one that is smallest when treated as a sequence.",
    constraints: "V: 1 to 10^4, E: 1 to 10^5",
    examples: [
      {
        input: "V = 4, edges = [[2, 1], [2, 0], [3, 1], [3, 0]]",
        output: "[2, 3, 0, 1]",
        explanation: "Both [2, 3, 0, 1] and [3, 2, 0, 1] are valid, but [2, 3, 0, 1] is lexicographically smaller."
      }
    ],
    testCases: [
      { input: { V: 4, edges: [[2, 1], [2, 0], [3, 1], [3, 0]] }, output: "[2, 3, 0, 1]" },
      { input: { V: 3, edges: [[0, 1], [0, 2]] }, output: "[0, 1, 2]" },
      { input: { V: 2, edges: [] }, output: "[0, 1]" }
    ],
    starterCode: {
      python: "def smallestTopoSort(V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int[] smallestTopoSort(int V, int[][] edges) {\n        // Write your code here\n        return new int[0];\n    }\n}",
      c: "void smallestTopoSort(int V, int edges[][], int edgeCount) {\n    // Write your code here\n}",
      cpp: "vector<int> smallestTopoSort(int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return {};\n}"
    }
  },
  {
    id: "ts_prob_9",
    title: "Find All Topological Sorts",
    difficulty: "Medium",
    description: "Given a DAG, return all possible topological orderings of the vertices.",
    constraints: "V: 1 to 10, E: 0 to 50",
    examples: [
      {
        input: "V = 3, edges = [[0, 1], [0, 2]]",
        output: "[[0, 1, 2], [0, 2, 1]]",
        explanation: "Both are valid linear orderings."
      }
    ],
    testCases: [
      { input: { V: 3, edges: [[0, 1], [0, 2]] }, output: "[[0, 1, 2], [0, 2, 1]]" },
      { input: { V: 2, edges: [[0, 1]] }, output: "[[0, 1]]" },
      { input: { V: 2, edges: [] }, output: "[[0, 1], [1, 0]]" }
    ],
    starterCode: {
      python: "def allTopoSorts(V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public List<List<Integer>> allTopoSorts(int V, int[][] edges) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}",
      c: "void allTopoSorts(int V, int edges[][], int edgeCount) {\n    // Write your code here\n}",
      cpp: "vector<vector<int>> allTopoSorts(int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return {};\n}"
    }
  },
  {
    id: "ts_prob_10",
    title: "Verify Topological Sort",
    difficulty: "Medium",
    description: "Given a graph and a suggested topological ordering, verify if the ordering is valid.",
    constraints: "V: 1 to 10^4, E: 1 to 10^5",
    examples: [
      {
        input: "edges = [[0, 1], [1, 2]], order = [0, 1, 2]",
        output: "true",
        explanation: "The order respects all edges."
      },
      {
        input: "edges = [[0, 1], [1, 2]], order = [2, 1, 0]",
        output: "false",
        explanation: "Edge (0, 1) is violated as 1 comes before 0."
      }
    ],
    testCases: [
      { input: { edges: [[0, 1], [1, 2]], order: [0, 1, 2] }, output: "true" },
      { input: { edges: [[0, 1], [1, 2]], order: [2, 1, 0] }, output: "false" },
      { input: { edges: [], order: [0, 1] }, output: "true" }
    ],
    starterCode: {
      python: "def verifyTopoSort(edges, order):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public boolean verifyTopoSort(int[][] edges, int[] order) {\n        // Write your code here\n        return false;\n    }\n}",
      c: "bool verifyTopoSort(int edges[][], int edgeCount, int order[], int orderSize) {\n    // Write your code here\n}",
      cpp: "bool verifyTopoSort(vector<vector<int>>& edges, vector<int>& order) {\n    // Write your code here\n    return false;\n}"
    }
  },
  {
    id: "ts_prob_11",
    title: "Critical Path Analysis",
    difficulty: "Hard",
    description: "In a project represented as a DAG where nodes are tasks and edges are dependencies with weights representing time, find the length of the longest path (Critical Path).",
    constraints: "V: 1 to 10^4, E: 1 to 10^5",
    examples: [
      {
        input: "nodes = 3, edges = [[0, 1, 5], [1, 2, 10], [0, 2, 12]]",
        output: "15",
        explanation: "Path 0 -> 1 -> 2 takes 5 + 10 = 15, which is the longest."
      }
    ],
    testCases: [
      { input: { nodes: 3, edges: [[0, 1, 5], [1, 2, 10], [0, 2, 12]] }, output: "15" },
      { input: { nodes: 2, edges: [[0, 1, 7]] }, output: "7" },
      { input: { nodes: 1, edges: [] }, output: "0" }
    ],
    starterCode: {
      python: "def criticalPath(nodes, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int criticalPath(int nodes, int[][] edges) {\n        // Write your code here\n        return 0;\n    }\n}",
      c: "int criticalPath(int nodes, int edges[][], int edgeCount) {\n    // Write your code here\n}",
      cpp: "int criticalPath(int nodes, vector<vector<int>>& edges) {\n    // Write your code here\n    return 0;\n}"
    }
  },
  {
    id: "ts_prob_12",
    title: "Course Schedule III (Advanced)",
    difficulty: "Hard",
    description: "You are given an array of courses where courses[i] = [duration, lastDay]. You must take courses such that the total duration is minimized. This is a variation of the problem where you need to find a valid sequence that fits within deadlines. (Use Topological Sort for dependency version if provided).",
    constraints: "Courses: 1 to 10^4",
    examples: [
      {
        input: "courses = [[100, 200], [200, 1300], [1000, 1250], [2000, 3200]]",
        output: "3",
        explanation: "Can take courses 0, 1, and 3."
      }
    ],
    testCases: [
      { input: { courses: [[100, 200], [200, 1300], [1000, 1250], [2000, 3200]] }, output: "3" },
      { input: { courses: [[100, 100]] }, output: "1" },
      { input: { courses: [[200, 100]] }, output: "0" }
    ],
    starterCode: {
      python: "def scheduleCourse(courses):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int scheduleCourse(int[][] courses) {\n        // Write your code here\n        return 0;\n    }\n}",
      c: "int scheduleCourse(int courses[][], int courseCount) {\n    // Write your code here\n}",
      cpp: "int scheduleCourse(vector<vector<int>>& courses) {\n    // Write your code here\n    return 0;\n}"
    }
  },
  {
    id: "ts_prob_13",
    title: "Find All Paths in DAG",
    difficulty: "Hard",
    description: "Given a DAG, find all possible paths from a source node to a destination node. Use topological order to optimize path finding.",
    constraints: "V: 1 to 100, E: 0 to 1000",
    examples: [
      {
        input: "V = 4, edges = [[0, 1], [0, 2], [1, 3], [2, 3]], src = 0, dest = 3",
        output: "[[0, 1, 3], [0, 2, 3]]",
        explanation: "Two distinct paths from 0 to 3."
      }
    ],
    testCases: [
      { input: { V: 4, edges: [[0, 1], [0, 2], [1, 3], [2, 3]], src: 0, dest: 3 }, output: "[[0, 1, 3], [0, 2, 3]]" },
      { input: { V: 2, edges: [[0, 1]], src: 0, dest: 1 }, output: "[[0, 1]]" },
      { input: { V: 3, edges: [[0, 1]], src: 0, dest: 2 }, output: "[]" }
    ],
    starterCode: {
      python: "def findAllPaths(V, edges, src, dest):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public List<List<Integer>> findAllPaths(int V, int[][] edges, int src, int dest) {\n        // Write your code here\n        return new ArrayList<>();\n    }\n}",
      c: "void findAllPaths(int V, int edges[][], int edgeCount, int src, int dest) {\n    // Write your code here\n}",
      cpp: "vector<vector<int>> findAllPaths(int V, vector<vector<int>>& edges, int src, int dest) {\n    // Write your code here\n    return {};\n}"
    }
  },
  {
    id: "ts_prob_14",
    title: "Minimum Height Trees (Dependency Variation)",
    difficulty: "Hard",
    description: "In a directed graph where you need to find a starting node such that the maximum distance to any other node is minimized (and the graph must be topologically sortable), find the optimal starting node.",
    constraints: "V: 1 to 10^4, E: 0 to 10^4",
    examples: [
      {
        input: "V = 3, edges = [[0, 1], [0, 2]]",
        output: "0",
        explanation: "Starting at 0, the max distance is 1."
      }
    ],
    testCases: [
      { input: { V: 3, edges: [[0, 1], [0, 2]] }, output: "0" },
      { input: { V: 3, edges: [[0, 1], [1, 2]] }, output: "0" },
      { input: { V: 1, edges: [] }, output: "0" }
    ],
    starterCode: {
      python: "def findOptimalStart(V, edges):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public int findOptimalStart(int V, int[][] edges) {\n        // Write your code here\n        return -1;\n    }\n}",
      c: "int findOptimalStart(int V, int edges[][], int edgeCount) {\n    // Write your code here\n}",
      cpp: "int findOptimalStart(int V, vector<vector<int>>& edges) {\n    // Write your code here\n    return -1;\n}"
    }
  },
  {
    id: "ts_prob_15",
    title: "Build System Dependency Resolver",
    difficulty: "Hard",
    description: "You are given a list of modules and their dependencies. Some modules might be missing. Determine if the project can be built, and if so, return the build order. If a module is missing but required, mark it as unbuildable.",
    constraints: "Modules: 1 to 1000, Dependencies: 0 to 5000",
    examples: [
      {
        input: "modules = ['A', 'B', 'C'], deps = {'A': ['B'], 'B': ['C'], 'C': []}",
        output: "['C', 'B', 'A']",
        explanation: "Build C, then B, then A."
      }
    ],
    testCases: [
      { input: { modules: ['A', 'B', 'C'], deps: {'A': ['B'], 'B': ['C'], 'C': []} }, output: "['C', 'B', 'A']" },
      { input: { modules: ['A', 'B'], deps: {'A': ['B'], 'B': ['A']} }, output: "[]" },
      { input: { modules: ['A'], deps: {'A': ['B']} }, output: "[]" }
    ],
    starterCode: {
      python: "def resolveBuild(modules, deps):\n    # Write your code here\n    pass",
      java: "public class Solution {\n    public String[] resolveBuild(String[] modules, Map<String, String[]> deps) {\n        // Write your code here\n        return new String[0];\n    }\n}",
      c: "char** resolveBuild(char** modules, int modCount, char** deps, int depCount, int* resSize) {\n    // Write your code here\n}",
      cpp: "vector<string> resolveBuild(vector<string>& modules, map<string, vector<string>>& deps) {\n    // Write your code here\n    return {};\n}"
    }
  }
];

export default problems;
