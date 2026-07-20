export const differenceArrayProblems = [
  // =========================
  // Easy Problems
  // =========================
  {
    id: "da-e1",
    title: "Single Range Update",
    difficulty: "Easy",
    description:
      "Given an array and one range update [L, R] with value X, apply the update using the Difference Array technique and return the final array.",
    constraints: [
      "1 ≤ n ≤ 10⁵",
      "-10⁴ ≤ arr[i], X ≤ 10⁴"
    ],
    examples: [
      {
        input: "arr = [1,2,3,4], L = 1, R = 3, X = 2",
        output: "[1,4,5,6]"
      }
    ],
    testCases: [
      {
        input: {
          arr: [5, 5, 5],
          L: 0,
          R: 2,
          X: 3
        },
        expectedOutput: [8, 8, 8]
      }
    ],
    starterCode: {
      python: `def range_update(arr, L, R, X):
    pass`,
      java: `class Solution {
    public int[] rangeUpdate(int[] arr, int L, int R, int X) {

    }
}`,
      c: `void rangeUpdate(int arr[], int n, int L, int R, int X) {

}`,
      cpp: `class Solution {
public:
    vector<int> rangeUpdate(vector<int>& arr, int L, int R, int X) {

    }
};`
    }
  },

  {
    id: "da-e2",
    title: "Multiple Range Updates",
    difficulty: "Easy",
    description:
      "Given an array and multiple range updates, apply every update using a Difference Array and return the final array.",
    constraints: [
      "1 ≤ n ≤ 10⁵",
      "1 ≤ updates ≤ 10⁵"
    ],
    examples: [
      {
        input: "arr = [0,0,0,0], updates = [[0,1,2],[2,3,3]]",
        output: "[2,2,3,3]"
      }
    ],
    testCases: [
      {
        input: {
          arr: [1, 1, 1],
          updates: [
            [0, 1, 2],
            [1, 2, 3]
          ]
        },
        expectedOutput: [3, 6, 4]
      }
    ],
    starterCode: {
      python: `def range_updates(arr, updates):
    pass`,
      java: `class Solution {
    public int[] rangeUpdates(int[] arr, int[][] updates) {

    }
}`,
      c: `void rangeUpdates(int arr[], int n, int updates[][3], int m) {

}`,
      cpp: `class Solution {
public:
    vector<int> rangeUpdates(vector<int>& arr, vector<vector<int>>& updates) {

    }
};`
    }
  },

  {
    id: "da-e3",
    title: "Build Final Array",
    difficulty: "Easy",
    description:
      "Given only a difference array, reconstruct and return the original array.",
    constraints: [
      "1 ≤ n ≤ 10⁵"
    ],
    examples: [
      {
        input: "[2,1,-2,3]",
        output: "[2,3,1,4]"
      }
    ],
    testCases: [
      {
        input: {
          diff: [4, -1, 2, -2]
        },
        expectedOutput: [4, 3, 5, 3]
      }
    ],
    starterCode: {
      python: `def build_array(diff):
    pass`,
      java: `class Solution {
    public int[] buildArray(int[] diff) {

    }
}`,
      c: `void buildArray(int diff[], int n, int result[]) {

}`,
      cpp: `class Solution {
public:
    vector<int> buildArray(vector<int>& diff) {

    }
};`
    }
  },

  {
    id: "da-e4",
    title: "Positive Updates Only",
    difficulty: "Easy",
    description:
      "Perform several positive range updates using a Difference Array and return the updated array.",
    constraints: [
      "1 ≤ n ≤ 10⁵"
    ],
    examples: [
      {
        input: "arr=[1,1,1], updates=[[0,2,5]]",
        output: "[6,6,6]"
      }
    ],
    testCases: [
      {
        input: {
          arr: [2, 2, 2, 2],
          updates: [
            [1, 3, 4]
          ]
        },
        expectedOutput: [2, 6, 6, 6]
      }
    ],
    starterCode: {
      python: `def positive_updates(arr, updates):
    pass`,
      java: `class Solution {
    public int[] positiveUpdates(int[] arr, int[][] updates) {

    }
}`,
      c: `void positiveUpdates(int arr[], int n, int updates[][3], int m) {

}`,
      cpp: `class Solution {
public:
    vector<int> positiveUpdates(vector<int>& arr, vector<vector<int>>& updates) {

    }
};`
    }
  },

  {
    id: "da-e5",
    title: "Negative Range Updates",
    difficulty: "Easy",
    description:
      "Apply range decrement operations using the Difference Array technique.",
    constraints: [
      "1 ≤ n ≤ 10⁵"
    ],
    examples: [
      {
        input: "arr=[10,10,10], updates=[[0,1,-3]]",
        output: "[7,7,10]"
      }
    ],
    testCases: [
      {
        input: {
          arr: [8, 8, 8],
          updates: [
            [1, 2, -2]
          ]
        },
        expectedOutput: [8, 6, 6]
      }
    ],
    starterCode: {
      python: `def negative_updates(arr, updates):
    pass`,
      java: `class Solution {
    public int[] negativeUpdates(int[] arr, int[][] updates) {

    }
}`,
      c: `void negativeUpdates(int arr[], int n, int updates[][3], int m) {

}`,
      cpp: `class Solution {
public:
    vector<int> negativeUpdates(vector<int>& arr, vector<vector<int>>& updates) {

    }
};`
    }
  },

  // =========================
  // Medium Problems
  // =========================

  {
    id: "da-m1",
    title: "Corporate Flight Bookings",
    difficulty: "Medium",
    description:
      "Each booking adds seats to a consecutive range of flights. Return the final seats booked for every flight using a Difference Array.",
    constraints: [
      "1 ≤ n ≤ 2×10⁵"
    ],
    examples: [
      {
        input: "bookings=[[1,2,10],[2,3,20]], n=3",
        output: "[10,30,20]"
      }
    ],
    testCases: [
      {
        input: {
          bookings: [
            [1, 1, 5],
            [2, 3, 4]
          ],
          n: 3
        },
        expectedOutput: [5, 4, 4]
      }
    ],
    starterCode: {
      python: `def corp_flight_bookings(bookings, n):
    pass`,
      java: `class Solution {
    public int[] corpFlightBookings(int[][] bookings, int n) {

    }
}`,
      c: `void corpFlightBookings(int bookings[][3], int m, int n, int result[]) {

}`,
      cpp: `class Solution {
public:
    vector<int> corpFlightBookings(vector<vector<int>>& bookings, int n) {

    }
};`
    }
  },
    {
    id: "da-m2",
    title: "Shifting Letters",
    difficulty: "Medium",
    description:
      "You are given a string and several range shift operations. Each operation increments every character in the specified range by one alphabetically. Apply all shifts efficiently using a Difference Array and return the final string.",
    constraints: [
      "1 ≤ n ≤ 2×10⁵",
      "1 ≤ shifts ≤ 2×10⁵"
    ],
    examples: [
      {
        input: 's = "abc", shifts = [[0,1],[1,2]]',
        output: '"bdd"'
      }
    ],
    testCases: [
      {
        input: {
          s: "aaaa",
          shifts: [
            [0, 3],
            [1, 2]
          ]
        },
        expectedOutput: "bccb"
      }
    ],
    starterCode: {
      python: `def shifting_letters(s, shifts):
    pass`,
      java: `class Solution {
    public String shiftingLetters(String s, int[][] shifts) {

    }
}`,
      c: `void shiftingLetters(char s[], int shifts[][2], int m) {

}`,
      cpp: `class Solution {
public:
    string shiftingLetters(string s, vector<vector<int>>& shifts) {

    }
};`
    }
  },

  {
    id: "da-m3",
    title: "Range Addition",
    difficulty: "Medium",
    description:
      "Initially all elements are zero. Apply multiple range increment operations and return the resulting array.",
    constraints: [
      "1 ≤ length ≤ 2×10⁵",
      "1 ≤ updates ≤ 2×10⁵"
    ],
    examples: [
      {
        input: "length = 5, updates = [[1,3,2],[2,4,3]]",
        output: "[0,2,5,5,3]"
      }
    ],
    testCases: [
      {
        input: {
          length: 4,
          updates: [
            [0, 2, 1],
            [1, 3, 2]
          ]
        },
        expectedOutput: [1, 3, 3, 2]
      }
    ],
    starterCode: {
      python: `def range_addition(length, updates):
    pass`,
      java: `class Solution {
    public int[] rangeAddition(int length, int[][] updates) {

    }
}`,
      c: `void rangeAddition(int length, int updates[][3], int m, int result[]) {

}`,
      cpp: `class Solution {
public:
    vector<int> rangeAddition(int length, vector<vector<int>>& updates) {

    }
};`
    }
  },

  {
    id: "da-m4",
    title: "Maximum Value After Updates",
    difficulty: "Medium",
    description:
      "Given several range increment operations, determine the maximum value present in the array after applying all updates.",
    constraints: [
      "1 ≤ n ≤ 2×10⁵"
    ],
    examples: [
      {
        input: "n = 5, updates = [[1,2,100],[2,5,100],[3,4,100]]",
        output: "200"
      }
    ],
    testCases: [
      {
        input: {
          n: 4,
          updates: [
            [1, 4, 2],
            [2, 3, 5]
          ]
        },
        expectedOutput: 7
      }
    ],
    starterCode: {
      python: `def max_after_updates(n, updates):
    pass`,
      java: `class Solution {
    public int maxAfterUpdates(int n, int[][] updates) {

    }
}`,
      c: `int maxAfterUpdates(int n, int updates[][3], int m) {

}`,
      cpp: `class Solution {
public:
    int maxAfterUpdates(int n, vector<vector<int>>& updates) {

    }
};`
    }
  },

  {
    id: "da-m5",
    title: "Apply Updates and Answer Queries",
    difficulty: "Medium",
    description:
      "Apply all range updates using a Difference Array, then answer multiple index queries on the final array.",
    constraints: [
      "1 ≤ n ≤ 2×10⁵",
      "1 ≤ queries ≤ 2×10⁵"
    ],
    examples: [
      {
        input: "arr=[1,2,3], updates=[[0,2,1]], queries=[0,2]",
        output: "[2,4]"
      }
    ],
    testCases: [
      {
        input: {
          arr: [5, 5, 5],
          updates: [
            [0, 1, 3]
          ],
          queries: [0, 1, 2]
        },
        expectedOutput: [8, 8, 5]
      }
    ],
    starterCode: {
      python: `def answer_queries(arr, updates, queries):
    pass`,
      java: `class Solution {
    public int[] answerQueries(int[] arr, int[][] updates, int[] queries) {

    }
}`,
      c: `void answerQueries(int arr[], int n, int updates[][3], int m, int queries[], int q, int result[]) {

}`,
      cpp: `class Solution {
public:
    vector<int> answerQueries(vector<int>& arr, vector<vector<int>>& updates, vector<int>& queries) {

    }
};`
    }
  },
    // =========================
  // Hard Problems
  // =========================

  {
    id: "da-h1",
    title: "Dynamic Range Updates",
    difficulty: "Hard",
    description:
      "Design a data structure that supports multiple range updates and reconstructs the final array efficiently after all updates.",
    constraints: [
      "1 ≤ n ≤ 2×10⁵",
      "1 ≤ operations ≤ 2×10⁵"
    ],
    examples: [
      {
        input: "n=5, updates=[[0,2,3],[1,4,2]]",
        output: "[3,5,5,2,2]"
      }
    ],
    testCases: [
      {
        input: {
          n: 4,
          updates: [
            [0, 1, 2],
            [2, 3, 5]
          ]
        },
        expectedOutput: [2, 2, 5, 5]
      }
    ],
    starterCode: {
      python: `class DifferenceArray:
    def __init__(self, n):

    def update(self, left, right, value):

    def build(self):`,
      java: `class DifferenceArray {
    public DifferenceArray(int n) {

    }

    public void update(int left, int right, int value) {

    }

    public int[] build() {

    }
}`,
      c: `typedef struct {

} DifferenceArray;

void update(DifferenceArray* obj, int left, int right, int value) {

}

void build(DifferenceArray* obj, int result[]) {

}`,
      cpp: `class DifferenceArray {
public:
    DifferenceArray(int n) {

    }

    void update(int left, int right, int value) {

    }

    vector<int> build() {

    }
};`
    }
  },

  {
    id: "da-h2",
    title: "Difference Array with Point Queries",
    difficulty: "Hard",
    description:
      "Apply multiple range updates using a Difference Array and answer point queries without reconstructing the entire array multiple times.",
    constraints: [
      "1 ≤ n ≤ 2×10⁵",
      "1 ≤ updates, queries ≤ 2×10⁵"
    ],
    examples: [
      {
        input: "arr=[1,1,1], updates=[[0,2,2]], queries=[0,2]",
        output: "[3,3]"
      }
    ],
    testCases: [
      {
        input: {
          arr: [2, 2, 2, 2],
          updates: [
            [1, 3, 4]
          ],
          queries: [0, 2]
        },
        expectedOutput: [2, 6]
      }
    ],
    starterCode: {
      python: `def point_queries(arr, updates, queries):
    pass`,
      java: `class Solution {
    public int[] pointQueries(int[] arr, int[][] updates, int[] queries) {

    }
}`,
      c: `void pointQueries(int arr[], int n, int updates[][3], int m, int queries[], int q, int result[]) {

}`,
      cpp: `class Solution {
public:
    vector<int> pointQueries(vector<int>& arr, vector<vector<int>>& updates, vector<int>& queries) {

    }
};`
    }
  },

  {
    id: "da-h3",
    title: "2D Difference Array",
    difficulty: "Hard",
    description:
      "Given a matrix and several rectangular range updates, apply all updates efficiently using a two-dimensional Difference Array.",
    constraints: [
      "1 ≤ rows, cols ≤ 1000",
      "1 ≤ updates ≤ 2×10⁵"
    ],
    examples: [
      {
        input: "matrix=[[0,0],[0,0]], updates=[[0,0,1,1,2]]",
        output: "[[2,2],[2,2]]"
      }
    ],
    testCases: [
      {
        input: {
          matrix: [
            [1, 1],
            [1, 1]
          ],
          updates: [
            [0, 0, 0, 1, 3]
          ]
        },
        expectedOutput: [
          [4, 4],
          [1, 1]
        ]
      }
    ],
    starterCode: {
      python: `def difference_array_2d(matrix, updates):
    pass`,
      java: `class Solution {
    public int[][] differenceArray2D(int[][] matrix, int[][] updates) {

    }
}`,
      c: `void differenceArray2D(int matrix[][1000], int rows, int cols, int updates[][5], int m) {

}`,
      cpp: `class Solution {
public:
    vector<vector<int>> differenceArray2D(vector<vector<int>>& matrix, vector<vector<int>>& updates) {

    }
};`
    }
  },

  {
    id: "da-h4",
    title: "Circular Range Updates",
    difficulty: "Hard",
    description:
      "Perform multiple circular range updates where the range may wrap from the end of the array back to the beginning.",
    constraints: [
      "1 ≤ n ≤ 2×10⁵"
    ],
    examples: [
      {
        input: "arr=[1,1,1,1], update=[3,1,2]",
        output: "[3,3,1,3]"
      }
    ],
    testCases: [
      {
        input: {
          arr: [0, 0, 0, 0, 0],
          updates: [
            [4, 1, 5]
          ]
        },
        expectedOutput: [5, 5, 0, 0, 5]
      }
    ],
    starterCode: {
      python: `def circular_updates(arr, updates):
    pass`,
      java: `class Solution {
    public int[] circularUpdates(int[] arr, int[][] updates) {

    }
}`,
      c: `void circularUpdates(int arr[], int n, int updates[][3], int m) {

}`,
      cpp: `class Solution {
public:
    vector<int> circularUpdates(vector<int>& arr, vector<vector<int>>& updates) {

    }
};`
    }
  },

  {
    id: "da-h5",
    title: "Online Range Update System",
    difficulty: "Hard",
    description:
      "Design an online system that continuously receives range update operations and outputs the final array whenever requested.",
    constraints: [
      "1 ≤ operations ≤ 2×10⁵"
    ],
    examples: [
      {
        input: '["update","update","build"]',
        output: "[3,5,5,2]"
      }
    ],
    testCases: [
      {
        input: {
          n: 4,
          operations: [
            ["update", 0, 2, 3],
            ["update", 1, 3, 2],
            ["build"]
          ]
        },
        expectedOutput: [3, 5, 5, 2]
      }
    ],
    starterCode: {
      python: `class OnlineDifferenceArray:
    def __init__(self, n):

    def update(self, left, right, value):

    def build(self):`,
      java: `class OnlineDifferenceArray {
    public OnlineDifferenceArray(int n) {

    }

    public void update(int left, int right, int value) {

    }

    public int[] build() {

    }
}`,
      c: `typedef struct {

} OnlineDifferenceArray;

void update(OnlineDifferenceArray* obj, int left, int right, int value) {

}

void build(OnlineDifferenceArray* obj, int result[]) {

}`,
      cpp: `class OnlineDifferenceArray {
public:
    OnlineDifferenceArray(int n) {

    }

    void update(int left, int right, int value) {

    }

    vector<int> build() {

    }
};`
    }
  }
];
