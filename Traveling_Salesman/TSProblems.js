export const travelingSalesmanBitmaskProblems = [
    // ==================== EASY ====================
    {
        id: 'tsp-e1',
        title: 'Classic 3-City Tour',
        difficulty: 'Easy',
        description: 'Given a small cost matrix, find the minimum-cost tour that starts at city 0, visits every city exactly once, and returns to city 0.',
        constraints: ['2 <= n <= 8', '0 <= cost[i][j] <= 100', 'cost[i][i] = 0'],
        examples: [
            { input: '3\n0 10 15\n10 0 20\n15 20 0', output: '45', explanation: 'The minimum tour is 0 → 1 → 2 → 0 with total cost 45.' },
            { input: '4\n0 10 15 20\n10 0 35 25\n15 35 0 30\n20 25 30 0', output: '80', explanation: 'The minimum tour has total cost 80.' }
        ],
        testCases: [
            { input: '3\n0 10 15\n10 0 20\n15 20 0', expectedOutput: '45', hidden: false },
            { input: '4\n0 10 15 20\n10 0 35 25\n15 35 0 30\n20 25 30 0', expectedOutput: '80', hidden: false },
            { input: '4\n0 2 9 10\n1 0 6 4\n15 7 0 8\n6 3 12 0', expectedOutput: '21', hidden: true }
        ],
        starterCode: {
            python: 'def tsp_bitmask(cost):\n    pass\n\nn = int(input())\ncost = [list(map(int, input().split())) for _ in range(n)]\nprint(tsp_bitmask(cost))',
            java: 'import java.util.*;\n\npublic class Solution {\n    public static int tspBitmask(int[][] cost) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] cost = new int[n][n];\n        for (int i = 0; i < n; i++)\n            for (int j = 0; j < n; j++)\n                cost[i][j] = sc.nextInt();\n        System.out.println(tspBitmask(cost));\n    }\n}',
            c: '#include <stdio.h>\n#include <stdlib.h>\nint tspBitmask(int** cost, int n) {\n    return 0;\n}\nint main() {\n    int n;\n    scanf("%d", &n);\n    int** cost = malloc(n * sizeof(int*));\n    for (int i = 0; i < n; i++) {\n        cost[i] = malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);\n    }\n    printf("%d\\n", tspBitmask(cost, n));\n    return 0;\n}',
            cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint tspBitmask(vector<vector<int>>& cost) {\n    return 0;\n}\nint main() {\n    int n;\n    cin >> n;\n    vector<vector<int>> cost(n, vector<int>(n));\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < n; j++) cin >> cost[i][j];\n    cout << tspBitmask(cost) << endl;\n    return 0;\n}'
        }
    },
    {
        id: 'tsp-e2',
        title: 'Four-City Minimum Tour',
        difficulty: 'Easy',
        description: 'Given a cost matrix for four cities, compute the minimum travelling cost for a tour that visits every city exactly once and returns to city 0.',
        constraints: ['2 <= n <= 8', '0 <= cost[i][j] <= 100', 'cost[i][i] = 0'],
        examples: [
            { input: '4\n0 10 15 20\n10 0 35 25\n15 35 0 30\n20 25 30 0', output: '80', explanation: 'The minimum travelling cost is 80.' },
            { input: '4\n0 2 9 10\n1 0 6 4\n15 7 0 8\n6 3 12 0', output: '21', explanation: 'The minimum directed tour has cost 21.' }
        ],
        testCases: [
            { input: '4\n0 10 15 20\n10 0 35 25\n15 35 0 30\n20 25 30 0', expectedOutput: '80', hidden: false },
            { input: '4\n0 2 9 10\n1 0 6 4\n15 7 0 8\n6 3 12 0', expectedOutput: '21', hidden: false },
            { input: '3\n0 5 9\n5 0 7\n9 7 0', expectedOutput: '21', hidden: true }
        ],
        starterCode: {
            python: 'def tsp_bitmask(cost):\n    pass\n\nn = int(input())\ncost = [list(map(int, input().split())) for _ in range(n)]\nprint(tsp_bitmask(cost))',
            java: 'import java.util.*;\npublic class Solution {\n    public static int tspBitmask(int[][] cost) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] cost = new int[n][n];\n        for (int i = 0; i < n; i++)\n            for (int j = 0; j < n; j++) cost[i][j] = sc.nextInt();\n        System.out.println(tspBitmask(cost));\n    }\n}',
            c: '#include <stdio.h>\n#include <stdlib.h>\nint tspBitmask(int** cost, int n) { return 0; }\nint main() {\n    int n; scanf("%d", &n);\n    int** cost = malloc(n * sizeof(int*));\n    for (int i = 0; i < n; i++) {\n        cost[i] = malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);\n    }\n    printf("%d\\n", tspBitmask(cost, n));\n    return 0;\n}',
            cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint tspBitmask(vector<vector<int>>& cost) { return 0; }\nint main() {\n    int n; cin >> n;\n    vector<vector<int>> cost(n, vector<int>(n));\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < n; j++) cin >> cost[i][j];\n    cout << tspBitmask(cost) << endl;\n    return 0;\n}'
        }
    },
    {
        id: 'tsp-e3',
        title: 'Asymmetric City Costs',
        difficulty: 'Easy',
        description: 'Given a directed travel-cost matrix, find the minimum Hamiltonian tour starting and ending at city 0.',
        constraints: ['2 <= n <= 8', '0 <= cost[i][j] <= 100', 'cost[i][i] = 0'],
        examples: [
            { input: '4\n0 2 9 10\n1 0 6 4\n15 7 0 8\n6 3 12 0', output: '21', explanation: 'The minimum tour has total cost 21.' },
            { input: '5\n0 3 1 5 8\n3 0 6 7 9\n1 6 0 4 2\n5 7 4 0 3\n8 9 2 3 0', output: '16', explanation: 'The minimum tour has total cost 16.' }
        ],
        testCases: [
            { input: '4\n0 2 9 10\n1 0 6 4\n15 7 0 8\n6 3 12 0', expectedOutput: '21', hidden: false },
            { input: '5\n0 3 1 5 8\n3 0 6 7 9\n1 6 0 4 2\n5 7 4 0 3\n8 9 2 3 0', expectedOutput: '16', hidden: false },
            { input: '3\n0 4 8\n6 0 5\n3 7 0', expectedOutput: '16', hidden: true }
        ],
        starterCode: {
            python: 'def tsp_bitmask(cost):\n    pass\n\nn = int(input())\ncost = [list(map(int, input().split())) for _ in range(n)]\nprint(tsp_bitmask(cost))',
            java: 'import java.util.*;\npublic class Solution {\n    public static int tspBitmask(int[][] cost) { return 0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] cost = new int[n][n];\n        for (int i = 0; i < n; i++)\n            for (int j = 0; j < n; j++) cost[i][j] = sc.nextInt();\n        System.out.println(tspBitmask(cost));\n    }\n}',
            c: '#include <stdio.h>\n#include <stdlib.h>\nint tspBitmask(int** cost, int n) { return 0; }\nint main() {\n    int n; scanf("%d", &n);\n    int** cost = malloc(n * sizeof(int*));\n    for (int i = 0; i < n; i++) {\n        cost[i] = malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);\n    }\n    printf("%d\\n", tspBitmask(cost, n));\n    return 0;\n}',
            cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint tspBitmask(vector<vector<int>>& cost) { return 0; }\nint main() {\n    int n; cin >> n;\n    vector<vector<int>> cost(n, vector<int>(n));\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < n; j++) cin >> cost[i][j];\n    cout << tspBitmask(cost) << endl;\n    return 0;\n}'
        }
    },
    {
        id: 'tsp-e4',
        title: 'Small Route Optimization',
        difficulty: 'Easy',
        description: 'Given a small weighted graph represented by a cost matrix, find the minimum cost required to visit every city exactly once and return to city 0.',
        constraints: ['2 <= n <= 8', '0 <= cost[i][j] <= 100', 'cost[i][i] = 0'],
        examples: [
            { input: '5\n0 4 8 6 3\n4 0 5 7 6\n8 5 0 2 9\n6 7 2 0 4\n3 6 9 4 0', output: '18', explanation: 'The minimum tour has total cost 18.' },
            { input: '6\n0 3 8 7 6 9\n4 0 5 6 8 7\n9 5 0 4 7 6\n6 7 3 0 5 8\n8 6 9 4 0 3\n7 8 6 5 2 0', output: '26', explanation: 'The minimum tour has total cost 26.' }
        ],
        testCases: [
            { input: '5\n0 4 8 6 3\n4 0 5 7 6\n8 5 0 2 9\n6 7 2 0 4\n3 6 9 4 0', expectedOutput: '18', hidden: false },
            { input: '6\n0 3 8 7 6 9\n4 0 5 6 8 7\n9 5 0 4 7 6\n6 7 3 0 5 8\n8 6 9 4 0 3\n7 8 6 5 2 0', expectedOutput: '26', hidden: false },
            { input: '5\n0 6 9 4 7\n6 0 5 8 3\n9 5 0 7 6\n4 8 7 0 5\n7 3 6 5 0', expectedOutput: '25', hidden: true }
        ],
        starterCode: {
            python: 'def tsp_bitmask(cost):\n    pass\n\nn = int(input())\ncost = [list(map(int, input().split())) for _ in range(n)]\nprint(tsp_bitmask(cost))',
            java: 'import java.util.*;\npublic class Solution {\n    public static int tspBitmask(int[][] cost) { return 0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] cost = new int[n][n];\n        for (int i = 0; i < n; i++)\n            for (int j = 0; j < n; j++) cost[i][j] = sc.nextInt();\n        System.out.println(tspBitmask(cost));\n    }\n}',
            c: '#include <stdio.h>\n#include <stdlib.h>\nint tspBitmask(int** cost, int n) { return 0; }\nint main() {\n    int n; scanf("%d", &n);\n    int** cost = malloc(n * sizeof(int*));\n    for (int i = 0; i < n; i++) {\n        cost[i] = malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);\n    }\n    printf("%d\\n", tspBitmask(cost, n));\n    return 0;\n}',
            cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint tspBitmask(vector<vector<int>>& cost) { return 0; }\nint main() {\n    int n; cin >> n;\n    vector<vector<int>> cost(n, vector<int>(n));\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < n; j++) cin >> cost[i][j];\n    cout << tspBitmask(cost) << endl;\n    return 0;\n}'
        }
    },
    {
        id: 'tsp-e5',
        title: 'Best Tour Among Routes',
        difficulty: 'Easy',
        description: 'Given a five-city cost matrix, determine the minimum possible round-trip cost while visiting each city exactly once.',
        constraints: ['2 <= n <= 8', '0 <= cost[i][j] <= 100', 'cost[i][i] = 0'],
        examples: [
            { input: '5\n0 3 1 5 8\n3 0 6 7 9\n1 6 0 4 2\n5 7 4 0 3\n8 9 2 3 0', output: '16', explanation: 'The minimum round-trip cost is 16.' },
            { input: '5\n0 5 9 6 7\n5 0 4 8 3\n9 4 0 7 6\n6 8 7 0 5\n7 3 6 5 0', output: '25', explanation: 'The minimum round-trip cost is 25.' }
        ],
        testCases: [
            { input: '5\n0 3 1 5 8\n3 0 6 7 9\n1 6 0 4 2\n5 7 4 0 3\n8 9 2 3 0', expectedOutput: '16', hidden: false },
            { input: '5\n0 5 9 6 7\n5 0 4 8 3\n9 4 0 7 6\n6 8 7 0 5\n7 3 6 5 0', expectedOutput: '25', hidden: false },
            { input: '4\n0 4 8 6\n4 0 5 7\n8 5 0 2\n6 7 2 0', expectedOutput: '17', hidden: true }
        ],
        starterCode: {
            python: 'def tsp_bitmask(cost):\n    pass\n\nn = int(input())\ncost = [list(map(int, input().split())) for _ in range(n)]\nprint(tsp_bitmask(cost))',
            java: 'import java.util.*;\npublic class Solution {\n    public static int tspBitmask(int[][] cost) { return 0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] cost = new int[n][n];\n        for (int i = 0; i < n; i++)\n            for (int j = 0; j < n; j++) cost[i][j] = sc.nextInt();\n        System.out.println(tspBitmask(cost));\n    }\n}',
            c: '#include <stdio.h>\n#include <stdlib.h>\nint tspBitmask(int** cost, int n) { return 0; }\nint main() {\n    int n; scanf("%d", &n);\n    int** cost = malloc(n * sizeof(int*));\n    for (int i = 0; i < n; i++) {\n        cost[i] = malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);\n    }\n    printf("%d\\n", tspBitmask(cost, n));\n    return 0;\n}',
            cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint tspBitmask(vector<vector<int>>& cost) { return 0; }\nint main() {\n    int n; cin >> n;\n    vector<vector<int>> cost(n, vector<int>(n));\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < n; j++) cin >> cost[i][j];\n    cout << tspBitmask(cost) << endl;\n    return 0;\n}'
        }
    },

    // ==================== MEDIUM ====================
    {
        id: 'tsp-m1',
        title: 'Five-City Bitmask DP',
        difficulty: 'Medium',
        description: 'Given a five-city cost matrix, use subset-state reasoning to find the minimum tour cost without explicitly storing every complete route.',
        constraints: ['2 <= n <= 8', '0 <= cost[i][j] <= 100', 'cost[i][i] = 0'],
        examples: [
            { input: '5\n0 9 6 7 8\n9 0 5 4 7\n6 5 0 8 3\n7 4 8 0 6\n8 7 3 6 0', output: '27', explanation: 'The minimum tour cost is 27.' },
            { input: '5\n0 4 7 3 8\n5 0 6 2 9\n8 7 0 5 4\n6 3 7 0 5\n9 8 4 6 0', output: '23', explanation: 'The minimum tour cost is 23.' }
        ],
        testCases: [
            { input: '5\n0 9 6 7 8\n9 0 5 4 7\n6 5 0 8 3\n7 4 8 0 6\n8 7 3 6 0', expectedOutput: '27', hidden: false },
            { input: '5\n0 4 7 3 8\n5 0 6 2 9\n8 7 0 5 4\n6 3 7 0 5\n9 8 4 6 0', expectedOutput: '23', hidden: false },
            { input: '6\n0 6 11 9 7 10\n5 0 4 8 6 9\n12 3 0 7 5 8\n8 9 6 0 4 7\n6 5 8 3 0 2\n10 7 9 6 3 0', expectedOutput: '29', hidden: true }
        ],
        starterCode: {
            python: 'def tsp_bitmask(cost):\n    pass\n\nn = int(input())\ncost = [list(map(int, input().split())) for _ in range(n)]\nprint(tsp_bitmask(cost))',
            java: 'import java.util.*;\npublic class Solution {\n    public static int tspBitmask(int[][] cost) { return 0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] cost = new int[n][n];\n        for (int i = 0; i < n; i++)\n            for (int j = 0; j < n; j++) cost[i][j] = sc.nextInt();\n        System.out.println(tspBitmask(cost));\n    }\n}',
            c: '#include <stdio.h>\n#include <stdlib.h>\nint tspBitmask(int** cost, int n) { return 0; }\nint main() {\n    int n; scanf("%d", &n);\n    int** cost = malloc(n * sizeof(int*));\n    for (int i = 0; i < n; i++) {\n        cost[i] = malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);\n    }\n    printf("%d\\n", tspBitmask(cost, n));\n    return 0;\n}',
            cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint tspBitmask(vector<vector<int>>& cost) { return 0; }\nint main() {\n    int n; cin >> n;\n    vector<vector<int>> cost(n, vector<int>(n));\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < n; j++) cin >> cost[i][j];\n    cout << tspBitmask(cost) << endl;\n    return 0;\n}'
        }
    },
    {
        id: 'tsp-m2',
        title: 'Directed Five-City Tour',
        difficulty: 'Medium',
        description: 'Given directed travel costs between five cities, find the minimum tour beginning at city 0 and returning to city 0.',
        constraints: ['2 <= n <= 8', '0 <= cost[i][j] <= 100', 'cost[i][i] = 0'],
        examples: [
            { input: '5\n0 4 7 3 8\n5 0 6 2 9\n8 7 0 5 4\n6 3 7 0 5\n9 8 4 6 0', output: '23', explanation: 'The minimum directed tour has cost 23.' },
            { input: '5\n0 2 9 10 7\n1 0 6 4 3\n15 7 0 8 5\n6 3 12 0 4\n10 5 9 6 0', output: '26', explanation: 'The minimum directed tour has cost 26.' }
        ],
        testCases: [
            { input: '5\n0 4 7 3 8\n5 0 6 2 9\n8 7 0 5 4\n6 3 7 0 5\n9 8 4 6 0', expectedOutput: '23', hidden: false },
            { input: '5\n0 2 9 10 7\n1 0 6 4 3\n15 7 0 8 5\n6 3 12 0 4\n10 5 9 6 0', expectedOutput: '26', hidden: false },
            { input: '6\n0 11 4 9 7 13\n8 0 6 5 10 12\n5 7 0 8 4 9\n10 6 9 0 3 7\n6 11 5 4 0 8\n12 9 7 6 5 0', expectedOutput: '34', hidden: true }
        ],
        starterCode: {
            python: 'def tsp_bitmask(cost):\n    pass\n\nn = int(input())\ncost = [list(map(int, input().split())) for _ in range(n)]\nprint(tsp_bitmask(cost))',
            java: 'import java.util.*;\npublic class Solution {\n    public static int tspBitmask(int[][] cost) { return 0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] cost = new int[n][n];\n        for (int i = 0; i < n; i++)\n            for (int j = 0; j < n; j++) cost[i][j] = sc.nextInt();\n        System.out.println(tspBitmask(cost));\n    }\n}',
            c: '#include <stdio.h>\n#include <stdlib.h>\nint tspBitmask(int** cost, int n) { return 0; }\nint main() {\n    int n; scanf("%d", &n);\n    int** cost = malloc(n * sizeof(int*));\n    for (int i = 0; i < n; i++) {\n        cost[i] = malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);\n    }\n    printf("%d\\n", tspBitmask(cost, n));\n    return 0;\n}',
            cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint tspBitmask(vector<vector<int>>& cost) { return 0; }\nint main() {\n    int n; cin >> n;\n    vector<vector<int>> cost(n, vector<int>(n));\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < n; j++) cin >> cost[i][j];\n    cout << tspBitmask(cost) << endl;\n    return 0;\n}'
        }
    },
    {
        id: 'tsp-m3',
        title: 'Six-City State Compression',
        difficulty: 'Medium',
        description: 'Given six cities and their travel costs, compute the minimum Hamiltonian cycle using a bitmask-based dynamic programming state.',
        constraints: ['2 <= n <= 8', '0 <= cost[i][j] <= 100', 'cost[i][i] = 0'],
        examples: [
            { input: '6\n0 6 11 9 7 10\n5 0 4 8 6 9\n12 3 0 7 5 8\n8 9 6 0 4 7\n6 5 8 3 0 2\n10 7 9 6 3 0', output: '29', explanation: 'The minimum Hamiltonian cycle has cost 29.' },
            { input: '6\n0 3 8 7 6 9\n4 0 5 6 8 7\n9 5 0 4 7 6\n6 7 3 0 5 8\n8 6 9 4 0 3\n7 8 6 5 2 0', output: '26', explanation: 'The minimum Hamiltonian cycle has cost 26.' }
        ],
        testCases: [
            { input: '6\n0 6 11 9 7 10\n5 0 4 8 6 9\n12 3 0 7 5 8\n8 9 6 0 4 7\n6 5 8 3 0 2\n10 7 9 6 3 0', expectedOutput: '29', hidden: false },
            { input: '6\n0 3 8 7 6 9\n4 0 5 6 8 7\n9 5 0 4 7 6\n6 7 3 0 5 8\n8 6 9 4 0 3\n7 8 6 5 2 0', expectedOutput: '26', hidden: false },
            { input: '6\n0 11 4 9 7 13\n8 0 6 5 10 12\n5 7 0 8 4 9\n10 6 9 0 3 7\n6 11 5 4 0 8\n12 9 7 6 5 0', expectedOutput: '34', hidden: true }
        ],
        starterCode: {
            python: 'def tsp_bitmask(cost):\n    pass\n\nn = int(input())\ncost = [list(map(int, input().split())) for _ in range(n)]\nprint(tsp_bitmask(cost))',
            java: 'import java.util.*;\npublic class Solution {\n    public static int tspBitmask(int[][] cost) { return 0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] cost = new int[n][n];\n        for (int i = 0; i < n; i++)\n            for (int j = 0; j < n; j++) cost[i][j] = sc.nextInt();\n        System.out.println(tspBitmask(cost));\n    }\n}',
            c: '#include <stdio.h>\n#include <stdlib.h>\nint tspBitmask(int** cost, int n) { return 0; }\nint main() {\n    int n; scanf("%d", &n);\n    int** cost = malloc(n * sizeof(int*));\n    for (int i = 0; i < n; i++) {\n        cost[i] = malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);\n    }\n    printf("%d\\n", tspBitmask(cost, n));\n    return 0;\n}',
            cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint tspBitmask(vector<vector<int>>& cost) { return 0; }\nint main() {\n    int n; cin >> n;\n    vector<vector<int>> cost(n, vector<int>(n));\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < n; j++) cin >> cost[i][j];\n    cout << tspBitmask(cost) << endl;\n    return 0;\n}'
        }
    },
    {
        id: 'tsp-m4',
        title: 'Six-City Route Planning',
        difficulty: 'Medium',
        description: 'Given a six-city directed cost matrix, determine the minimum cost tour while ensuring every city is visited exactly once.',
        constraints: ['2 <= n <= 8', '0 <= cost[i][j] <= 100', 'cost[i][i] = 0'],
        examples: [
            { input: '6\n0 3 8 7 6 9\n4 0 5 6 8 7\n9 5 0 4 7 6\n6 7 3 0 5 8\n8 6 9 4 0 3\n7 8 6 5 2 0', output: '26', explanation: 'The minimum tour has cost 26.' },
            { input: '6\n0 8 14 7 12 10\n9 0 6 15 8 11\n13 7 0 9 10 12\n6 14 8 0 5 9\n11 9 12 6 0 7\n10 13 11 8 7 0', output: '45', explanation: 'The minimum tour has cost 45.' }
        ],
        testCases: [
            { input: '6\n0 3 8 7 6 9\n4 0 5 6 8 7\n9 5 0 4 7 6\n6 7 3 0 5 8\n8 6 9 4 0 3\n7 8 6 5 2 0', expectedOutput: '26', hidden: false },
            { input: '6\n0 8 14 7 12 10\n9 0 6 15 8 11\n13 7 0 9 10 12\n6 14 8 0 5 9\n11 9 12 6 0 7\n10 13 11 8 7 0', expectedOutput: '45', hidden: false },
            { input: '7\n0 6 10 12 8 15 9\n7 0 5 11 13 8 14\n9 4 0 7 6 12 10\n11 10 6 0 5 9 8\n8 12 7 4 0 6 11\n14 9 11 8 5 0 4\n10 13 9 7 12 3 0', expectedOutput: '38', hidden: true }
        ],
        starterCode: {
            python: 'def tsp_bitmask(cost):\n    pass\n\nn = int(input())\ncost = [list(map(int, input().split())) for _ in range(n)]\nprint(tsp_bitmask(cost))',
            java: 'import java.util.*;\npublic class Solution {\n    public static int tspBitmask(int[][] cost) { return 0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] cost = new int[n][n];\n        for (int i = 0; i < n; i++)\n            for (int j = 0; j < n; j++) cost[i][j] = sc.nextInt();\n        System.out.println(tspBitmask(cost));\n    }\n}',
            c: '#include <stdio.h>\n#include <stdlib.h>\nint tspBitmask(int** cost, int n) { return 0; }\nint main() {\n    int n; scanf("%d", &n);\n    int** cost = malloc(n * sizeof(int*));\n    for (int i = 0; i < n; i++) {\n        cost[i] = malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);\n    }\n    printf("%d\\n", tspBitmask(cost, n));\n    return 0;\n}',
            cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint tspBitmask(vector<vector<int>>& cost) { return 0; }\nint main() {\n    int n; cin >> n;\n    vector<vector<int>> cost(n, vector<int>(n));\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < n; j++) cin >> cost[i][j];\n    cout << tspBitmask(cost) << endl;\n    return 0;\n}'
        }
    },
    {
        id: 'tsp-m5',
        title: 'Constrained Tour Search',
        difficulty: 'Medium',
        description: 'Given six cities with non-uniform directed costs, find the globally minimum tour using dynamic programming over visited-city subsets.',
        constraints: ['2 <= n <= 8', '0 <= cost[i][j] <= 100', 'cost[i][i] = 0'],
        examples: [
            { input: '6\n0 11 4 9 7 13\n8 0 6 5 10 12\n5 7 0 8 4 9\n10 6 9 0 3 7\n6 11 5 4 0 8\n12 9 7 6 5 0', output: '34', explanation: 'The minimum tour has total cost 34.' },
            { input: '6\n0 2 9 10 7 8\n1 0 6 4 3 9\n15 7 0 8 5 6\n6 3 12 0 4 7\n10 5 9 6 0 3\n9 8 7 5 2 0', output: '26', explanation: 'The minimum tour has total cost 26.' }
        ],
        testCases: [
            { input: '6\n0 11 4 9 7 13\n8 0 6 5 10 12\n5 7 0 8 4 9\n10 6 9 0 3 7\n6 11 5 4 0 8\n12 9 7 6 5 0', expectedOutput: '34', hidden: false },
            { input: '6\n0 2 9 10 7 8\n1 0 6 4 3 9\n15 7 0 8 5 6\n6 3 12 0 4 7\n10 5 9 6 0 3\n9 8 7 5 2 0', expectedOutput: '26', hidden: false },
            { input: '7\n0 9 14 7 11 8 13\n6 0 5 12 9 10 7\n12 4 0 8 6 11 9\n8 13 7 0 5 9 10\n10 8 6 4 0 7 12\n9 11 10 8 6 0 5\n13 7 9 10 11 4 0', expectedOutput: '42', hidden: true }
        ],
        starterCode: {
            python: 'def tsp_bitmask(cost):\n    pass\n\nn = int(input())\ncost = [list(map(int, input().split())) for _ in range(n)]\nprint(tsp_bitmask(cost))',
            java: 'import java.util.*;\npublic class Solution {\n    public static int tspBitmask(int[][] cost) { return 0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] cost = new int[n][n];\n        for (int i = 0; i < n; i++)\n            for (int j = 0; j < n; j++) cost[i][j] = sc.nextInt();\n        System.out.println(tspBitmask(cost));\n    }\n}',
            c: '#include <stdio.h>\n#include <stdlib.h>\nint tspBitmask(int** cost, int n) { return 0; }\nint main() {\n    int n; scanf("%d", &n);\n    int** cost = malloc(n * sizeof(int*));\n    for (int i = 0; i < n; i++) {\n        cost[i] = malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);\n    }\n    printf("%d\\n", tspBitmask(cost, n));\n    return 0;\n}',
            cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint tspBitmask(vector<vector<int>>& cost) { return 0; }\nint main() {\n    int n; cin >> n;\n    vector<vector<int>> cost(n, vector<int>(n));\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < n; j++) cin >> cost[i][j];\n    cout << tspBitmask(cost) << endl;\n    return 0;\n}'
        }
    },

    // ==================== HARD ====================
    {
        id: 'tsp-h1',
        title: 'Seven-City Bitmask Optimization',
        difficulty: 'Hard',
        description: 'Given seven cities with directed travel costs, compute the minimum Hamiltonian tour using bitmask DP and return the minimum cost.',
        constraints: ['2 <= n <= 8', '0 <= cost[i][j] <= 100', 'cost[i][i] = 0'],
        examples: [
            { input: '7\n0 9 14 7 11 8 13\n6 0 5 12 9 10 7\n12 4 0 8 6 11 9\n8 13 7 0 5 9 10\n10 8 6 4 0 7 12\n9 11 10 8 6 0 5\n13 7 9 10 11 4 0', output: '42', explanation: 'The minimum tour has total cost 42.' },
            { input: '7\n0 6 10 12 8 15 9\n7 0 5 11 13 8 14\n9 4 0 7 6 12 10\n11 10 6 0 5 9 8\n8 12 7 4 0 6 11\n14 9 11 8 5 0 4\n10 13 9 7 12 3 0', output: '38', explanation: 'The minimum tour has total cost 38.' }
        ],
        testCases: [
            { input: '7\n0 9 14 7 11 8 13\n6 0 5 12 9 10 7\n12 4 0 8 6 11 9\n8 13 7 0 5 9 10\n10 8 6 4 0 7 12\n9 11 10 8 6 0 5\n13 7 9 10 11 4 0', expectedOutput: '42', hidden: false },
            { input: '7\n0 6 10 12 8 15 9\n7 0 5 11 13 8 14\n9 4 0 7 6 12 10\n11 10 6 0 5 9 8\n8 12 7 4 0 6 11\n14 9 11 8 5 0 4\n10 13 9 7 12 3 0', expectedOutput: '38', hidden: false },
            { input: '8\n0 3 15 9 12 7 10 14\n4 0 6 11 8 13 9 12\n14 5 0 7 10 8 11 6\n8 10 6 0 5 9 13 7\n11 7 9 4 0 6 8 10\n6 12 8 10 5 0 7 9\n9 8 10 12 7 6 0 5\n13 11 5 8 9 10 4 0', expectedOutput: '42', hidden: true }
        ],
        starterCode: {
            python: 'def tsp_bitmask(cost):\n    pass\n\nn = int(input())\ncost = [list(map(int, input().split())) for _ in range(n)]\nprint(tsp_bitmask(cost))',
            java: 'import java.util.*;\npublic class Solution {\n    public static int tspBitmask(int[][] cost) { return 0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] cost = new int[n][n];\n        for (int i = 0; i < n; i++)\n            for (int j = 0; j < n; j++) cost[i][j] = sc.nextInt();\n        System.out.println(tspBitmask(cost));\n    }\n}',
            c: '#include <stdio.h>\n#include <stdlib.h>\nint tspBitmask(int** cost, int n) { return 0; }\nint main() {\n    int n; scanf("%d", &n);\n    int** cost = malloc(n * sizeof(int*));\n    for (int i = 0; i < n; i++) {\n        cost[i] = malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);\n    }\n    printf("%d\\n", tspBitmask(cost, n));\n    return 0;\n}',
            cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint tspBitmask(vector<vector<int>>& cost) { return 0; }\nint main() {\n    int n; cin >> n;\n    vector<vector<int>> cost(n, vector<int>(n));\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < n; j++) cin >> cost[i][j];\n    cout << tspBitmask(cost) << endl;\n    return 0;\n}'
        }
    },
    {
        id: 'tsp-h2',
        title: 'Seven-City Directed TSP',
        difficulty: 'Hard',
        description: 'Given a seven-city directed graph, find the least-cost tour that starts at city 0, visits all remaining cities once, and returns to city 0.',
        constraints: ['2 <= n <= 8', '0 <= cost[i][j] <= 100', 'cost[i][i] = 0'],
        examples: [
            { input: '7\n0 6 10 12 8 15 9\n7 0 5 11 13 8 14\n9 4 0 7 6 12 10\n11 10 6 0 5 9 8\n8 12 7 4 0 6 11\n14 9 11 8 5 0 4\n10 13 9 7 12 3 0', output: '38', explanation: 'The minimum directed tour has cost 38.' },
            { input: '7\n0 9 14 7 11 8 13\n6 0 5 12 9 10 7\n12 4 0 8 6 11 9\n8 13 7 0 5 9 10\n10 8 6 4 0 7 12\n9 11 10 8 6 0 5\n13 7 9 10 11 4 0', output: '42', explanation: 'The minimum directed tour has cost 42.' }
        ],
        testCases: [
            { input: '7\n0 6 10 12 8 15 9\n7 0 5 11 13 8 14\n9 4 0 7 6 12 10\n11 10 6 0 5 9 8\n8 12 7 4 0 6 11\n14 9 11 8 5 0 4\n10 13 9 7 12 3 0', expectedOutput: '38', hidden: false },
            { input: '7\n0 9 14 7 11 8 13\n6 0 5 12 9 10 7\n12 4 0 8 6 11 9\n8 13 7 0 5 9 10\n10 8 6 4 0 7 12\n9 11 10 8 6 0 5\n13 7 9 10 11 4 0', expectedOutput: '42', hidden: false },
            { input: '8\n0 8 13 6 10 12 7 9\n7 0 5 11 9 14 8 12\n12 6 0 7 10 8 11 9\n5 10 8 0 6 9 13 7\n9 8 11 5 0 7 10 6\n11 13 7 9 6 0 5 8\n6 9 10 12 8 4 0 7\n10 11 8 6 7 9 5 0', expectedOutput: '47', hidden: true }
        ],
        starterCode: {
            python: 'def tsp_bitmask(cost):\n    pass\n\nn = int(input())\ncost = [list(map(int, input().split())) for _ in range(n)]\nprint(tsp_bitmask(cost))',
            java: 'import java.util.*;\npublic class Solution {\n    public static int tspBitmask(int[][] cost) { return 0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] cost = new int[n][n];\n        for (int i = 0; i < n; i++)\n            for (int j = 0; j < n; j++) cost[i][j] = sc.nextInt();\n        System.out.println(tspBitmask(cost));\n    }\n}',
            c: '#include <stdio.h>\n#include <stdlib.h>\nint tspBitmask(int** cost, int n) { return 0; }\nint main() {\n    int n; scanf("%d", &n);\n    int** cost = malloc(n * sizeof(int*));\n    for (int i = 0; i < n; i++) {\n        cost[i] = malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);\n    }\n    printf("%d\\n", tspBitmask(cost, n));\n    return 0;\n}',
            cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint tspBitmask(vector<vector<int>>& cost) { return 0; }\nint main() {\n    int n; cin >> n;\n    vector<vector<int>> cost(n, vector<int>(n));\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < n; j++) cin >> cost[i][j];\n    cout << tspBitmask(cost) << endl;\n    return 0;\n}'
        }
    },
    {
        id: 'tsp-h3',
        title: 'Eight-City Bitmask DP',
        difficulty: 'Hard',
        description: 'Given eight cities and a directed cost matrix, determine the minimum travelling cost using a compressed visited-set DP representation.',
        constraints: ['2 <= n <= 8', '0 <= cost[i][j] <= 100', 'cost[i][i] = 0'],
        examples: [
            { input: '8\n0 3 15 9 12 7 10 14\n4 0 6 11 8 13 9 12\n14 5 0 7 10 8 11 6\n8 10 6 0 5 9 13 7\n11 7 9 4 0 6 8 10\n6 12 8 10 5 0 7 9\n9 8 10 12 7 6 0 5\n13 11 5 8 9 10 4 0', output: '42', explanation: 'The minimum tour has total cost 42.' },
            { input: '8\n0 5 9 12 7 10 14 8\n6 0 4 11 8 13 7 10\n10 5 0 6 9 8 12 7\n11 9 7 0 5 10 8 13\n8 7 10 4 0 6 11 9\n9 12 8 10 5 0 7 6\n13 8 11 7 10 5 0 4\n7 10 6 12 9 8 5 0', output: '44', explanation: 'The minimum tour has total cost 44.' }
        ],
        testCases: [
            { input: '8\n0 3 15 9 12 7 10 14\n4 0 6 11 8 13 9 12\n14 5 0 7 10 8 11 6\n8 10 6 0 5 9 13 7\n11 7 9 4 0 6 8 10\n6 12 8 10 5 0 7 9\n9 8 10 12 7 6 0 5\n13 11 5 8 9 10 4 0', expectedOutput: '42', hidden: false },
            { input: '8\n0 5 9 12 7 10 14 8\n6 0 4 11 8 13 7 10\n10 5 0 6 9 8 12 7\n11 9 7 0 5 10 8 13\n8 7 10 4 0 6 11 9\n9 12 8 10 5 0 7 6\n13 8 11 7 10 5 0 4\n7 10 6 12 9 8 5 0', expectedOutput: '44', hidden: false },
            { input: '7\n0 6 10 12 8 15 9\n7 0 5 11 13 8 14\n9 4 0 7 6 12 10\n11 10 6 0 5 9 8\n8 12 7 4 0 6 11\n14 9 11 8 5 0 4\n10 13 9 7 12 3 0', expectedOutput: '38', hidden: true }
        ],
        starterCode: {
            python: 'def tsp_bitmask(cost):\n    pass\n\nn = int(input())\ncost = [list(map(int, input().split())) for _ in range(n)]\nprint(tsp_bitmask(cost))',
            java: 'import java.util.*;\npublic class Solution {\n    public static int tspBitmask(int[][] cost) { return 0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] cost = new int[n][n];\n        for (int i = 0; i < n; i++)\n            for (int j = 0; j < n; j++) cost[i][j] = sc.nextInt();\n        System.out.println(tspBitmask(cost));\n    }\n}',
            c: '#include <stdio.h>\n#include <stdlib.h>\nint tspBitmask(int** cost, int n) { return 0; }\nint main() {\n    int n; scanf("%d", &n);\n    int** cost = malloc(n * sizeof(int*));\n    for (int i = 0; i < n; i++) {\n        cost[i] = malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);\n    }\n    printf("%d\\n", tspBitmask(cost, n));\n    return 0;\n}',
            cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint tspBitmask(vector<vector<int>>& cost) { return 0; }\nint main() {\n    int n; cin >> n;\n    vector<vector<int>> cost(n, vector<int>(n));\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < n; j++) cin >> cost[i][j];\n    cout << tspBitmask(cost) << endl;\n    return 0;\n}'
        }
    },
    {
        id: 'tsp-h4',
        title: 'Eight-City Route Locker DP',
        difficulty: 'Hard',
        description: 'Given eight cities with asymmetric travel costs, find the minimum complete tour by combining visited-city bitmasks with the current ending city.',
        constraints: ['2 <= n <= 8', '0 <= cost[i][j] <= 100', 'cost[i][i] = 0'],
        examples: [
            { input: '8\n0 8 13 6 10 12 7 9\n7 0 5 11 9 14 8 12\n12 6 0 7 10 8 11 9\n5 10 8 0 6 9 13 7\n9 8 11 5 0 7 10 6\n11 13 7 9 6 0 5 8\n6 9 10 12 8 4 0 7\n10 11 8 6 7 9 5 0', output: '47', explanation: 'The minimum tour has total cost 47.' },
            { input: '8\n0 5 9 12 7 10 14 8\n6 0 4 11 8 13 7 10\n10 5 0 6 9 8 12 7\n11 9 7 0 5 10 8 13\n8 7 10 4 0 6 11 9\n9 12 8 10 5 0 7 6\n13 8 11 7 10 5 0 4\n7 10 6 12 9 8 5 0', output: '44', explanation: 'The minimum tour has total cost 44.' }
        ],
        testCases: [
            { input: '8\n0 8 13 6 10 12 7 9\n7 0 5 11 9 14 8 12\n12 6 0 7 10 8 11 9\n5 10 8 0 6 9 13 7\n9 8 11 5 0 7 10 6\n11 13 7 9 6 0 5 8\n6 9 10 12 8 4 0 7\n10 11 8 6 7 9 5 0', expectedOutput: '47', hidden: false },
            { input: '8\n0 5 9 12 7 10 14 8\n6 0 4 11 8 13 7 10\n10 5 0 6 9 8 12 7\n11 9 7 0 5 10 8 13\n8 7 10 4 0 6 11 9\n9 12 8 10 5 0 7 6\n13 8 11 7 10 5 0 4\n7 10 6 12 9 8 5 0', expectedOutput: '44', hidden: false },
            { input: '7\n0 6 10 12 8 15 9\n7 0 5 11 13 8 14\n9 4 0 7 6 12 10\n11 10 6 0 5 9 8\n8 12 7 4 0 6 11\n14 9 11 8 5 0 4\n10 13 9 7 12 3 0', expectedOutput: '38', hidden: true }
        ],
        starterCode: {
            python: 'def tsp_bitmask(cost):\n    pass\n\nn = int(input())\ncost = [list(map(int, input().split())) for _ in range(n)]\nprint(tsp_bitmask(cost))',
            java: 'import java.util.*;\npublic class Solution {\n    public static int tspBitmask(int[][] cost) { return 0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] cost = new int[n][n];\n        for (int i = 0; i < n; i++)\n            for (int j = 0; j < n; j++) cost[i][j] = sc.nextInt();\n        System.out.println(tspBitmask(cost));\n    }\n}',
            c: '#include <stdio.h>\n#include <stdlib.h>\nint tspBitmask(int** cost, int n) { return 0; }\nint main() {\n    int n; scanf("%d", &n);\n    int** cost = malloc(n * sizeof(int*));\n    for (int i = 0; i < n; i++) {\n        cost[i] = malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);\n    }\n    printf("%d\\n", tspBitmask(cost, n));\n    return 0;\n}',
            cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint tspBitmask(vector<vector<int>>& cost) { return 0; }\nint main() {\n    int n; cin >> n;\n    vector<vector<int>> cost(n, vector<int>(n));\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < n; j++) cin >> cost[i][j];\n    cout << tspBitmask(cost) << endl;\n    return 0;\n}'
        }
    },
    {
        id: 'tsp-h5',
        title: 'Maximum-State TSP Challenge',
        difficulty: 'Hard',
        description: 'Given eight cities with dense directed costs, compute the optimal round trip using bitmask DP while avoiding enumeration of all permutations.',
        constraints: ['2 <= n <= 8', '0 <= cost[i][j] <= 100', 'cost[i][i] = 0'],
        examples: [
            { input: '8\n0 5 9 12 7 10 14 8\n6 0 4 11 8 13 7 10\n10 5 0 6 9 8 12 7\n11 9 7 0 5 10 8 13\n8 7 10 4 0 6 11 9\n9 12 8 10 5 0 7 6\n13 8 11 7 10 5 0 4\n7 10 6 12 9 8 5 0', output: '44', explanation: 'The minimum tour has total cost 44.' },
            { input: '8\n0 3 15 9 12 7 10 14\n4 0 6 11 8 13 9 12\n14 5 0 7 10 8 11 6\n8 10 6 0 5 9 13 7\n11 7 9 4 0 6 8 10\n6 12 8 10 5 0 7 9\n9 8 10 12 7 6 0 5\n13 11 5 8 9 10 4 0', output: '42', explanation: 'The minimum tour has total cost 42.' }
        ],
        testCases: [
            { input: '8\n0 5 9 12 7 10 14 8\n6 0 4 11 8 13 7 10\n10 5 0 6 9 8 12 7\n11 9 7 0 5 10 8 13\n8 7 10 4 0 6 11 9\n9 12 8 10 5 0 7 6\n13 8 11 7 10 5 0 4\n7 10 6 12 9 8 5 0', expectedOutput: '44', hidden: false },
            { input: '8\n0 3 15 9 12 7 10 14\n4 0 6 11 8 13 9 12\n14 5 0 7 10 8 11 6\n8 10 6 0 5 9 13 7\n11 7 9 4 0 6 8 10\n6 12 8 10 5 0 7 9\n9 8 10 12 7 6 0 5\n13 11 5 8 9 10 4 0', expectedOutput: '42', hidden: false },
            { input: '6\n0 11 4 9 7 13\n8 0 6 5 10 12\n5 7 0 8 4 9\n10 6 9 0 3 7\n6 11 5 4 0 8\n12 9 7 6 5 0', expectedOutput: '34', hidden: true }
        ],
        starterCode: {
            python: 'def tsp_bitmask(cost):\n    pass\n\nn = int(input())\ncost = [list(map(int, input().split())) for _ in range(n)]\nprint(tsp_bitmask(cost))',
            java: 'import java.util.*;\npublic class Solution {\n    public static int tspBitmask(int[][] cost) { return 0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[][] cost = new int[n][n];\n        for (int i = 0; i < n; i++)\n            for (int j = 0; j < n; j++) cost[i][j] = sc.nextInt();\n        System.out.println(tspBitmask(cost));\n    }\n}',
            c: '#include <stdio.h>\n#include <stdlib.h>\nint tspBitmask(int** cost, int n) { return 0; }\nint main() {\n    int n; scanf("%d", &n);\n    int** cost = malloc(n * sizeof(int*));\n    for (int i = 0; i < n; i++) {\n        cost[i] = malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);\n    }\n    printf("%d\\n", tspBitmask(cost, n));\n    return 0;\n}',
            cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint tspBitmask(vector<vector<int>>& cost) { return 0; }\nint main() {\n    int n; cin >> n;\n    vector<vector<int>> cost(n, vector<int>(n));\n    for (int i = 0; i < n; i++)\n        for (int j = 0; j < n; j++) cin >> cost[i][j];\n    cout << tspBitmask(cost) << endl;\n    return 0;\n}'
        }
    }
];