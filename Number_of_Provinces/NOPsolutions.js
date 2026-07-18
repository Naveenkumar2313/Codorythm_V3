export const NOPsolutions = {
  'nop-e1': {
    python: `def find_circle_num(isConnected):
    return len(isConnected)

n = int(input())
isConnected = [list(map(int, input().split())) for _ in range(n)]
print(find_circle_num(isConnected))`,
    java: `import java.util.*;

public class Solution {
    public static int findCircleNum(int[][] isConnected) {
        return isConnected.length;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] grid = new int[n][n];
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    grid[i][j] = sc.nextInt();
                }
            }
            System.out.println(findCircleNum(grid));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int findCircleNum(int** isConnected, int isConnectedSize, int* isConnectedColSize) {
    return isConnectedSize;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** grid = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        grid[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) {
            if (scanf("%d", &grid[i][j]) != 1) return 0;
        }
    }
    printf("%d\\n", findCircleNum(grid, n, NULL));
    for (int i = 0; i < n; i++) free(grid[i]);
    free(grid);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int findCircleNum(vector<vector<int>>& isConnected) {
    return isConnected.size();
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<int>> grid(n, vector<int>(n));
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) cin >> grid[i][j];
        }
        cout << findCircleNum(grid) << "\\n";
    }
    return 0;
}`
  },
  'nop-e2': {
    python: `def find_circle_num(isConnected):
    return 1

n = int(input())
isConnected = [list(map(int, input().split())) for _ in range(n)]
print(find_circle_num(isConnected))`,
    java: `import java.util.*;

public class Solution {
    public static int findCircleNum(int[][] isConnected) {
        return 1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] grid = new int[n][n];
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    grid[i][j] = sc.nextInt();
                }
            }
            System.out.println(findCircleNum(grid));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int findCircleNum(int** isConnected, int isConnectedSize, int* isConnectedColSize) {
    return 1;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** grid = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        grid[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) {
            if (scanf("%d", &grid[i][j]) != 1) return 0;
        }
    }
    printf("%d\\n", findCircleNum(grid, n, NULL));
    for (int i = 0; i < n; i++) free(grid[i]);
    free(grid);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int findCircleNum(vector<vector<int>>& isConnected) {
    return 1;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<int>> grid(n, vector<int>(n));
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) cin >> grid[i][j];
        }
        cout << findCircleNum(grid) << "\\n";
    }
    return 0;
}`
  },
  'nop-e3': {
    python: `def find_circle_num(isConnected):
    n = len(isConnected)
    visited = [False] * n
    count = 0
    for i in range(n):
        if not visited[i]:
            count += 1
            stack = [i]
            visited[i] = True
            while stack:
                u = stack.pop()
                for v in range(n):
                    if isConnected[u][v] == 1 and not visited[v]:
                        visited[v] = True
                        stack.append(v)
    return count

n = int(input())
isConnected = [list(map(int, input().split())) for _ in range(n)]
print(find_circle_num(isConnected))`,
    java: `import java.util.*;

public class Solution {
    public static int findCircleNum(int[][] isConnected) {
        int n = isConnected.length;
        boolean[] visited = new boolean[n];
        int count = 0;
        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                count++;
                Stack<Integer> stack = new Stack<>();
                stack.push(i);
                visited[i] = true;
                while (!stack.isEmpty()) {
                    int u = stack.pop();
                    for (int v = 0; v < n; v++) {
                        if (isConnected[u][v] == 1 && !visited[v]) {
                            visited[v] = true;
                            stack.push(v);
                        }
                    }
                }
            }
        }
        return count;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] grid = new int[n][n];
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    grid[i][j] = sc.nextInt();
                }
            }
            System.out.println(findCircleNum(grid));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int findCircleNum(int** isConnected, int isConnectedSize, int* isConnectedColSize) {
    int n = isConnectedSize;
    bool* visited = (bool*)calloc(n, sizeof(bool));
    int count = 0;
    for (int i = 0; i < n; i++) {
        if (!visited[i]) {
            count++;
            int* stack = (int*)malloc(n * sizeof(int));
            int top = 0;
            stack[top++] = i;
            visited[i] = true;
            while (top > 0) {
                int u = stack[--top];
                for (int v = 0; v < n; v++) {
                    if (isConnected[u][v] == 1 && !visited[v]) {
                        visited[v] = true;
                        stack[top++] = v;
                    }
                }
            }
            free(stack);
        }
    }
    free(visited);
    return count;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** grid = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        grid[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) {
            if (scanf("%d", &grid[i][j]) != 1) return 0;
        }
    }
    printf("%d\\n", findCircleNum(grid, n, NULL));
    for (int i = 0; i < n; i++) free(grid[i]);
    free(grid);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <stack>

using namespace std;

int findCircleNum(vector<vector<int>>& isConnected) {
    int n = isConnected.size();
    vector<bool> visited(n, false);
    int count = 0;
    for (int i = 0; i < n; i++) {
        if (!visited[i]) {
            count++;
            stack<int> st;
            st.push(i);
            visited[i] = true;
            while (!st.empty()) {
                int u = st.top(); st.pop();
                for (int v = 0; v < n; v++) {
                    if (isConnected[u][v] == 1 && !visited[v]) {
                        visited[v] = true;
                        st.push(v);
                    }
                }
            }
        }
    }
    return count;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<int>> grid(n, vector<int>(n));
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) cin >> grid[i][j];
        }
        cout << findCircleNum(grid) << "\\n";
    }
    return 0;
}`
  },
  'nop-e4': {
    python: `def find_circle_num(isConnected):
    n = len(isConnected)
    visited = [False] * n
    count = 0
    for i in range(n):
        if not visited[i]:
            count += 1
            stack = [i]
            visited[i] = True
            while stack:
                u = stack.pop()
                for v in range(n):
                    if isConnected[u][v] == 1 and not visited[v]:
                        visited[v] = True
                        stack.append(v)
    return count

n = int(input())
isConnected = [list(map(int, input().split())) for _ in range(n)]
print(find_circle_num(isConnected))`,
    java: `import java.util.*;

public class Solution {
    public static int findCircleNum(int[][] isConnected) {
        int n = isConnected.length;
        boolean[] visited = new boolean[n];
        int count = 0;
        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                count++;
                dfs(isConnected, visited, i);
            }
        }
        return count;
    }

    private static void dfs(int[][] grid, boolean[] visited, int u) {
        visited[u] = true;
        for (int v = 0; v < grid.length; v++) {
            if (grid[u][v] == 1 && !visited[v]) {
                dfs(grid, visited, v);
            }
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] grid = new int[n][n];
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    grid[i][j] = sc.nextInt();
                }
            }
            System.out.println(findCircleNum(grid));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

void dfs(int** grid, bool* visited, int u, int n) {
    visited[u] = true;
    for (int v = 0; v < n; v++) {
        if (grid[u][v] == 1 && !visited[v]) {
            dfs(grid, visited, v, n);
        }
    }
}

int findCircleNum(int** isConnected, int isConnectedSize, int* isConnectedColSize) {
    int n = isConnectedSize;
    bool* visited = (bool*)calloc(n, sizeof(bool));
    int count = 0;
    for (int i = 0; i < n; i++) {
        if (!visited[i]) {
            count++;
            dfs(isConnected, visited, i, n);
        }
    }
    free(visited);
    return count;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** grid = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        grid[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) {
            if (scanf("%d", &grid[i][j]) != 1) return 0;
        }
    }
    printf("%d\\n", findCircleNum(grid, n, NULL));
    for (int i = 0; i < n; i++) free(grid[i]);
    free(grid);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

void dfs(vector<vector<int>>& grid, vector<bool>& visited, int u) {
    visited[u] = true;
    for (int v = 0; v < grid.size(); v++) {
        if (grid[u][v] == 1 && !visited[v]) {
            dfs(grid, visited, v);
        }
    }
}

int findCircleNum(vector<vector<int>>& isConnected) {
    int n = isConnected.size();
    vector<bool> visited(n, false);
    int count = 0;
    for (int i = 0; i < n; i++) {
        if (!visited[i]) {
            count++;
            dfs(isConnected, visited, i);
        }
    }
    return count;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<int>> grid(n, vector<int>(n));
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) cin >> grid[i][j];
        }
        cout << findCircleNum(grid) << "\\n";
    }
    return 0;
}`
  },
  'nop-e5': {
    python: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
        self.components = n
    def find(self, x):
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]
            x = self.parent[x]
        return x
    def union(self, x, y):
        rx, ry = self.find(x), self.find(y)
        if rx == ry: return
        if self.rank[rx] < self.rank[ry]:
            self.parent[rx] = ry
        elif self.rank[rx] > self.rank[ry]:
            self.parent[ry] = rx
        else:
            self.parent[ry] = rx
            self.rank[rx] += 1
        self.components -= 1

def find_circle_num(isConnected):
    n = len(isConnected)
    dsu = DSU(n)
    for i in range(n):
        for j in range(i + 1, n):
            if isConnected[i][j] == 1:
                dsu.union(i, j)
    return dsu.components

n = int(input())
isConnected = [list(map(int, input().split())) for _ in range(n)]
print(find_circle_num(isConnected))`,
    java: `import java.util.*;

public class Solution {
    static int[] parent, rank;
    static int components;

    public static int find(int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }

    public static void union(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        components--;
    }

    public static int findCircleNum(int[][] isConnected) {
        int n = isConnected.length;
        parent = new int[n];
        rank = new int[n];
        for (int i = 0; i < n; i++) parent[i] = i;
        components = n;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (isConnected[i][j] == 1) {
                    union(i, j);
                }
            }
        }
        return components;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] grid = new int[n][n];
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    grid[i][j] = sc.nextInt();
                }
            }
            System.out.println(findCircleNum(grid));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int* parent;
int* rank;
int components;

int find(int x) {
    while (parent[x] != x) {
        parent[x] = parent[parent[x]];
        x = parent[x];
    }
    return x;
}

void unionSets(int x, int y) {
    int rx = find(x), ry = find(y);
    if (rx == ry) return;
    if (rank[rx] < rank[ry]) parent[rx] = ry;
    else if (rank[rx] > rank[ry]) parent[ry] = rx;
    else { parent[ry] = rx; rank[rx]++; }
    components--;
}

int findCircleNum(int** isConnected, int isConnectedSize, int* isConnectedColSize) {
    int n = isConnectedSize;
    parent = (int*)malloc(n * sizeof(int));
    rank = (int*)calloc(n, sizeof(int));
    for (int i = 0; i < n; i++) parent[i] = i;
    components = n;
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (isConnected[i][j] == 1) unionSets(i, j);
        }
    }
    int res = components;
    free(parent);
    free(rank);
    return res;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** grid = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        grid[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) {
            if (scanf("%d", &grid[i][j]) != 1) return 0;
        }
    }
    printf("%d\\n", findCircleNum(grid, n, NULL));
    for (int i = 0; i < n; i++) free(grid[i]);
    free(grid);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

class DSU {
    vector<int> parent, rank;
    int comp;
public:
    DSU(int n) : comp(n) {
        parent.resize(n);
        rank.resize(n, 0);
        for (int i = 0; i < n; i++) parent[i] = i;
    }
    int find(int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }
    void unite(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        comp--;
    }
    int getComponents() { return comp; }
};

int findCircleNum(vector<vector<int>>& isConnected) {
    int n = isConnected.size();
    DSU dsu(n);
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (isConnected[i][j] == 1) dsu.unite(i, j);
        }
    }
    return dsu.getComponents();
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<int>> grid(n, vector<int>(n));
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) cin >> grid[i][j];
        }
        cout << findCircleNum(grid) << "\\n";
    }
    return 0;
}`
  },
  'nop-m1': {
    python: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
        self.components = n
    def find(self, x):
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]
            x = self.parent[x]
        return x
    def union(self, x, y):
        rx, ry = self.find(x), self.find(y)
        if rx == ry: return
        if self.rank[rx] < self.rank[ry]:
            self.parent[rx] = ry
        elif self.rank[rx] > self.rank[ry]:
            self.parent[ry] = rx
        else:
            self.parent[ry] = rx
            self.rank[rx] += 1
        self.components -= 1

def find_circle_num_after_add(isConnected, a, b):
    n = len(isConnected)
    dsu = DSU(n)
    for i in range(n):
        for j in range(i + 1, n):
            if isConnected[i][j] == 1:
                dsu.union(i, j)
    dsu.union(a, b)
    return dsu.components

n = int(input())
isConnected = [list(map(int, input().split())) for _ in range(n)]
a, b = map(int, input().split())
print(find_circle_num_after_add(isConnected, a, b))`,
    java: `import java.util.*;

public class Solution {
    static int[] parent, rank;
    static int components;

    public static int find(int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }

    public static void union(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        components--;
    }

    public static int findCircleNumAfterAdd(int[][] isConnected, int a, int b) {
        int n = isConnected.length;
        parent = new int[n];
        rank = new int[n];
        for (int i = 0; i < n; i++) parent[i] = i;
        components = n;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (isConnected[i][j] == 1) union(i, j);
            }
        }
        union(a, b);
        return components;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] grid = new int[n][n];
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) grid[i][j] = sc.nextInt();
            }
            int a = sc.nextInt(), b = sc.nextInt();
            System.out.println(findCircleNumAfterAdd(grid, a, b));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int* parent;
int* rank;
int components;

int find(int x) {
    while (parent[x] != x) {
        parent[x] = parent[parent[x]];
        x = parent[x];
    }
    return x;
}

void unionSets(int x, int y) {
    int rx = find(x), ry = find(y);
    if (rx == ry) return;
    if (rank[rx] < rank[ry]) parent[rx] = ry;
    else if (rank[rx] > rank[ry]) parent[ry] = rx;
    else { parent[ry] = rx; rank[rx]++; }
    components--;
}

int findCircleNumAfterAdd(int** isConnected, int isConnectedSize, int* isConnectedColSize, int a, int b) {
    int n = isConnectedSize;
    parent = (int*)malloc(n * sizeof(int));
    rank = (int*)calloc(n, sizeof(int));
    for (int i = 0; i < n; i++) parent[i] = i;
    components = n;
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (isConnected[i][j] == 1) unionSets(i, j);
        }
    }
    unionSets(a, b);
    int res = components;
    free(parent); free(rank);
    return res;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** grid = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        grid[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) {
            if (scanf("%d", &grid[i][j]) != 1) return 0;
        }
    }
    int a, b;
    if (scanf("%d %d", &a, &b) != 2) return 0;
    printf("%d\\n", findCircleNumAfterAdd(grid, n, NULL, a, b));
    for (int i = 0; i < n; i++) free(grid[i]);
    free(grid);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

class DSU {
    vector<int> parent, rank;
    int comp;
public:
    DSU(int n) : comp(n) {
        parent.resize(n); rank.resize(n, 0);
        for (int i = 0; i < n; i++) parent[i] = i;
    }
    int find(int x) {
        while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; }
        return x;
    }
    void unite(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        comp--;
    }
    int getComponents() { return comp; }
};

int findCircleNumAfterAdd(vector<vector<int>>& isConnected, int a, int b) {
    int n = isConnected.size();
    DSU dsu(n);
    for (int i = 0; i < n; i++)
        for (int j = i + 1; j < n; j++)
            if (isConnected[i][j] == 1) dsu.unite(i, j);
    dsu.unite(a, b);
    return dsu.getComponents();
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<int>> grid(n, vector<int>(n));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cin >> grid[i][j];
        int a, b;
        cin >> a >> b;
        cout << findCircleNumAfterAdd(grid, a, b) << "\\n";
    }
    return 0;
}`
  },
  'nop-m2': {
    python: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
        self.size = [1] * n
    def find(self, x):
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]
            x = self.parent[x]
        return x
    def union(self, x, y):
        rx, ry = self.find(x), self.find(y)
        if rx == ry: return
        if self.rank[rx] < self.rank[ry]:
            self.parent[rx] = ry
            self.size[ry] += self.size[rx]
        elif self.rank[rx] > self.rank[ry]:
            self.parent[ry] = rx
            self.size[rx] += self.size[ry]
        else:
            self.parent[ry] = rx
            self.size[rx] += self.size[ry]
            self.rank[rx] += 1

def largest_province(isConnected):
    n = len(isConnected)
    dsu = DSU(n)
    for i in range(n):
        for j in range(i + 1, n):
            if isConnected[i][j] == 1:
                dsu.union(i, j)
    max_size = 0
    for i in range(n):
        if dsu.find(i) == i:
            max_size = max(max_size, dsu.size[i])
    return max_size

n = int(input())
isConnected = [list(map(int, input().split())) for _ in range(n)]
print(largest_province(isConnected))`,
    java: `import java.util.*;

public class Solution {
    static int[] parent, rank, size;

    public static int find(int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }

    public static void union(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return;
        if (rank[rx] < rank[ry]) { parent[rx] = ry; size[ry] += size[rx]; }
        else if (rank[rx] > rank[ry]) { parent[ry] = rx; size[rx] += size[ry]; }
        else { parent[ry] = rx; size[rx] += size[ry]; rank[rx]++; }
    }

    public static int largestProvince(int[][] isConnected) {
        int n = isConnected.length;
        parent = new int[n];
        rank = new int[n];
        size = new int[n];
        for (int i = 0; i < n; i++) { parent[i] = i; size[i] = 1; }
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (isConnected[i][j] == 1) union(i, j);
            }
        }
        int maxSize = 0;
        for (int i = 0; i < n; i++) {
            if (find(i) == i) maxSize = Math.max(maxSize, size[i]);
        }
        return maxSize;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] grid = new int[n][n];
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++) grid[i][j] = sc.nextInt();
            System.out.println(largestProvince(grid));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int* parent, *rank, *size;

int find(int x) {
    while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; }
    return x;
}

void unionSets(int x, int y) {
    int rx = find(x), ry = find(y);
    if (rx == ry) return;
    if (rank[rx] < rank[ry]) { parent[rx] = ry; size[ry] += size[rx]; }
    else if (rank[rx] > rank[ry]) { parent[ry] = rx; size[rx] += size[ry]; }
    else { parent[ry] = rx; size[rx] += size[ry]; rank[rx]++; }
}

int largestProvince(int** isConnected, int isConnectedSize, int* isConnectedColSize) {
    int n = isConnectedSize;
    parent = (int*)malloc(n * sizeof(int));
    rank = (int*)calloc(n, sizeof(int));
    size = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) { parent[i] = i; size[i] = 1; }
    for (int i = 0; i < n; i++)
        for (int j = i + 1; j < n; j++)
            if (isConnected[i][j] == 1) unionSets(i, j);
    int maxSize = 0;
    for (int i = 0; i < n; i++)
        if (find(i) == i && size[i] > maxSize) maxSize = size[i];
    free(parent); free(rank); free(size);
    return maxSize;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** grid = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        grid[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) if (scanf("%d", &grid[i][j]) != 1) return 0;
    }
    printf("%d\\n", largestProvince(grid, n, NULL));
    for (int i = 0; i < n; i++) free(grid[i]);
    free(grid);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

class DSU {
    vector<int> parent, rank, sz;
public:
    DSU(int n) {
        parent.resize(n); rank.resize(n, 0); sz.resize(n, 1);
        for (int i = 0; i < n; i++) parent[i] = i;
    }
    int find(int x) {
        while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; }
        return x;
    }
    void unite(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return;
        if (rank[rx] < rank[ry]) { parent[rx] = ry; sz[ry] += sz[rx]; }
        else if (rank[rx] > rank[ry]) { parent[ry] = rx; sz[rx] += sz[ry]; }
        else { parent[ry] = rx; sz[rx] += sz[ry]; rank[rx]++; }
    }
    int getSize(int x) { return sz[find(x)]; }
    int getMax() {
        int mx = 0;
        for (int i = 0; i < (int)parent.size(); i++)
            if (find(i) == i) mx = max(mx, sz[i]);
        return mx;
    }
};

int largestProvince(vector<vector<int>>& isConnected) {
    int n = isConnected.size();
    DSU dsu(n);
    for (int i = 0; i < n; i++)
        for (int j = i + 1; j < n; j++)
            if (isConnected[i][j] == 1) dsu.unite(i, j);
    return dsu.getMax();
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<int>> grid(n, vector<int>(n));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cin >> grid[i][j];
        cout << largestProvince(grid) << "\\n";
    }
    return 0;
}`
  },
  'nop-m3': {
    python: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
        self.components = n
    def find(self, x):
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]
            x = self.parent[x]
        return x
    def union(self, x, y):
        rx, ry = self.find(x), self.find(y)
        if rx == ry: return
        if self.rank[rx] < self.rank[ry]:
            self.parent[rx] = ry
        elif self.rank[rx] > self.rank[ry]:
            self.parent[ry] = rx
        else:
            self.parent[ry] = rx
            self.rank[rx] += 1
        self.components -= 1

def min_connections(isConnected):
    n = len(isConnected)
    dsu = DSU(n)
    for i in range(n):
        for j in range(i + 1, n):
            if isConnected[i][j] == 1:
                dsu.union(i, j)
    return dsu.components - 1

n = int(input())
isConnected = [list(map(int, input().split())) for _ in range(n)]
print(min_connections(isConnected))`,
    java: `import java.util.*;

public class Solution {
    static int[] parent, rank;
    static int components;

    public static int find(int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }

    public static void union(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        components--;
    }

    public static int minConnections(int[][] isConnected) {
        int n = isConnected.length;
        parent = new int[n];
        rank = new int[n];
        for (int i = 0; i < n; i++) parent[i] = i;
        components = n;
        for (int i = 0; i < n; i++)
            for (int j = i + 1; j < n; j++)
                if (isConnected[i][j] == 1) union(i, j);
        return components - 1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] grid = new int[n][n];
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++) grid[i][j] = sc.nextInt();
            System.out.println(minConnections(grid));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int* parent, *rank;
int components;

int find(int x) {
    while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; }
    return x;
}

void unionSets(int x, int y) {
    int rx = find(x), ry = find(y);
    if (rx == ry) return;
    if (rank[rx] < rank[ry]) parent[rx] = ry;
    else if (rank[rx] > rank[ry]) parent[ry] = rx;
    else { parent[ry] = rx; rank[rx]++; }
    components--;
}

int minConnections(int** isConnected, int isConnectedSize, int* isConnectedColSize) {
    int n = isConnectedSize;
    parent = (int*)malloc(n * sizeof(int));
    rank = (int*)calloc(n, sizeof(int));
    for (int i = 0; i < n; i++) parent[i] = i;
    components = n;
    for (int i = 0; i < n; i++)
        for (int j = i + 1; j < n; j++)
            if (isConnected[i][j] == 1) unionSets(i, j);
    int res = components - 1;
    free(parent); free(rank);
    return res;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** grid = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        grid[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) if (scanf("%d", &grid[i][j]) != 1) return 0;
    }
    printf("%d\\n", minConnections(grid, n, NULL));
    for (int i = 0; i < n; i++) free(grid[i]);
    free(grid);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

class DSU {
    vector<int> parent, rank;
    int comp;
public:
    DSU(int n) : comp(n) {
        parent.resize(n); rank.resize(n, 0);
        for (int i = 0; i < n; i++) parent[i] = i;
    }
    int find(int x) {
        while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; }
        return x;
    }
    void unite(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        comp--;
    }
    int getComponents() { return comp; }
};

int minConnections(vector<vector<int>>& isConnected) {
    int n = isConnected.size();
    DSU dsu(n);
    for (int i = 0; i < n; i++)
        for (int j = i + 1; j < n; j++)
            if (isConnected[i][j] == 1) dsu.unite(i, j);
    return dsu.getComponents() - 1;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<int>> grid(n, vector<int>(n));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cin >> grid[i][j];
        cout << minConnections(grid) << "\\n";
    }
    return 0;
}`
  },
  'nop-m4': {
    python: `from collections import deque

def find_circle_num(isConnected):
    n = len(isConnected)
    visited = [False] * n
    count = 0
    for i in range(n):
        if not visited[i]:
            count += 1
            q = deque([i])
            visited[i] = True
            while q:
                u = q.popleft()
                for v in range(n):
                    if isConnected[u][v] == 1 and not visited[v]:
                        visited[v] = True
                        q.append(v)
    return count

n = int(input())
isConnected = [list(map(int, input().split())) for _ in range(n)]
print(find_circle_num(isConnected))`,
    java: `import java.util.*;

public class Solution {
    public static int findCircleNum(int[][] isConnected) {
        int n = isConnected.length;
        boolean[] visited = new boolean[n];
        int count = 0;
        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                count++;
                Queue<Integer> q = new LinkedList<>();
                q.offer(i);
                visited[i] = true;
                while (!q.isEmpty()) {
                    int u = q.poll();
                    for (int v = 0; v < n; v++) {
                        if (isConnected[u][v] == 1 && !visited[v]) {
                            visited[v] = true;
                            q.offer(v);
                        }
                    }
                }
            }
        }
        return count;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] grid = new int[n][n];
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++) grid[i][j] = sc.nextInt();
            System.out.println(findCircleNum(grid));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int findCircleNum(int** isConnected, int isConnectedSize, int* isConnectedColSize) {
    int n = isConnectedSize;
    bool* visited = (bool*)calloc(n, sizeof(bool));
    int count = 0;
    for (int i = 0; i < n; i++) {
        if (!visited[i]) {
            count++;
            int* q = (int*)malloc(n * sizeof(int));
            int front = 0, back = 0;
            q[back++] = i;
            visited[i] = true;
            while (front < back) {
                int u = q[front++];
                for (int v = 0; v < n; v++) {
                    if (isConnected[u][v] == 1 && !visited[v]) {
                        visited[v] = true;
                        q[back++] = v;
                    }
                }
            }
            free(q);
        }
    }
    free(visited);
    return count;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** grid = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        grid[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) if (scanf("%d", &grid[i][j]) != 1) return 0;
    }
    printf("%d\\n", findCircleNum(grid, n, NULL));
    for (int i = 0; i < n; i++) free(grid[i]);
    free(grid);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>

using namespace std;

int findCircleNum(vector<vector<int>>& isConnected) {
    int n = isConnected.size();
    vector<bool> visited(n, false);
    int count = 0;
    for (int i = 0; i < n; i++) {
        if (!visited[i]) {
            count++;
            queue<int> q;
            q.push(i);
            visited[i] = true;
            while (!q.empty()) {
                int u = q.front(); q.pop();
                for (int v = 0; v < n; v++) {
                    if (isConnected[u][v] == 1 && !visited[v]) {
                        visited[v] = true;
                        q.push(v);
                    }
                }
            }
        }
    }
    return count;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<int>> grid(n, vector<int>(n));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cin >> grid[i][j];
        cout << findCircleNum(grid) << "\\n";
    }
    return 0;
}`
  },
  'nop-m5': {
    python: `def cities_in_same_province(isConnected, target):
    n = len(isConnected)
    visited = [False] * n
    stack = [target]
    visited[target] = True
    result = []
    while stack:
        u = stack.pop()
        result.append(u)
        for v in range(n):
            if isConnected[u][v] == 1 and not visited[v]:
                visited[v] = True
                stack.append(v)
    result.sort()
    return result

n = int(input())
isConnected = [list(map(int, input().split())) for _ in range(n)]
target = int(input())
res = cities_in_same_province(isConnected, target)
print(' '.join(map(str, res)))`,
    java: `import java.util.*;

public class Solution {
    public static List<Integer> citiesInSameProvince(int[][] isConnected, int target) {
        int n = isConnected.length;
        boolean[] visited = new boolean[n];
        List<Integer> res = new ArrayList<>();
        Stack<Integer> stack = new Stack<>();
        stack.push(target);
        visited[target] = true;
        while (!stack.isEmpty()) {
            int u = stack.pop();
            res.add(u);
            for (int v = 0; v < n; v++) {
                if (isConnected[u][v] == 1 && !visited[v]) {
                    visited[v] = true;
                    stack.push(v);
                }
            }
        }
        Collections.sort(res);
        return res;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] grid = new int[n][n];
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++) grid[i][j] = sc.nextInt();
            int target = sc.nextInt();
            List<Integer> res = citiesInSameProvince(grid, target);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.size(); i++) {
                if (i > 0) sb.append(" ");
                sb.append(res.get(i));
            }
            System.out.println(sb);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int cmp(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int* citiesInSameProvince(int** isConnected, int isConnectedSize, int* isConnectedColSize, int target, int* returnSize) {
    int n = isConnectedSize;
    bool* visited = (bool*)calloc(n, sizeof(bool));
    int* res = (int*)malloc(n * sizeof(int));
    int cnt = 0;
    int* stack = (int*)malloc(n * sizeof(int));
    int top = 0;
    stack[top++] = target;
    visited[target] = true;
    while (top > 0) {
        int u = stack[--top];
        res[cnt++] = u;
        for (int v = 0; v < n; v++) {
            if (isConnected[u][v] == 1 && !visited[v]) {
                visited[v] = true;
                stack[top++] = v;
            }
        }
    }
    qsort(res, cnt, sizeof(int), cmp);
    *returnSize = cnt;
    free(visited);
    free(stack);
    return res;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** grid = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        grid[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) if (scanf("%d", &grid[i][j]) != 1) return 0;
    }
    int target;
    if (scanf("%d", &target) != 1) return 0;
    int returnSize;
    int* res = citiesInSameProvince(grid, n, NULL, target, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        if (i > 0) printf(" ");
        printf("%d", res[i]);
    }
    printf("\\n");
    free(res);
    for (int i = 0; i < n; i++) free(grid[i]);
    free(grid);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <stack>
#include <algorithm>

using namespace std;

vector<int> citiesInSameProvince(vector<vector<int>>& isConnected, int target) {
    int n = isConnected.size();
    vector<bool> visited(n, false);
    vector<int> res;
    stack<int> st;
    st.push(target);
    visited[target] = true;
    while (!st.empty()) {
        int u = st.top(); st.pop();
        res.push_back(u);
        for (int v = 0; v < n; v++) {
            if (isConnected[u][v] == 1 && !visited[v]) {
                visited[v] = true;
                st.push(v);
            }
        }
    }
    sort(res.begin(), res.end());
    return res;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<int>> grid(n, vector<int>(n));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cin >> grid[i][j];
        int target;
        cin >> target;
        vector<int> res = citiesInSameProvince(grid, target);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'nop-h1': {
    python: `def provinces_after_removal(isConnected, removeCity):
    n = len(isConnected)
    visited = [False] * n
    visited[removeCity] = True
    count = 0
    for i in range(n):
        if not visited[i]:
            count += 1
            stack = [i]
            visited[i] = True
            while stack:
                u = stack.pop()
                for v in range(n):
                    if isConnected[u][v] == 1 and not visited[v]:
                        visited[v] = True
                        stack.append(v)
    return count

n = int(input())
isConnected = [list(map(int, input().split())) for _ in range(n)]
removeCity = int(input())
print(provinces_after_removal(isConnected, removeCity))`,
    java: `import java.util.*;

public class Solution {
    public static int provincesAfterRemoval(int[][] isConnected, int removeCity) {
        int n = isConnected.length;
        boolean[] visited = new boolean[n];
        visited[removeCity] = true;
        int count = 0;
        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                count++;
                Stack<Integer> stack = new Stack<>();
                stack.push(i);
                visited[i] = true;
                while (!stack.isEmpty()) {
                    int u = stack.pop();
                    for (int v = 0; v < n; v++) {
                        if (isConnected[u][v] == 1 && !visited[v]) {
                            visited[v] = true;
                            stack.push(v);
                        }
                    }
                }
            }
        }
        return count;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] grid = new int[n][n];
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++) grid[i][j] = sc.nextInt();
            int rc = sc.nextInt();
            System.out.println(provincesAfterRemoval(grid, rc));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int provincesAfterRemoval(int** isConnected, int isConnectedSize, int* isConnectedColSize, int removeCity) {
    int n = isConnectedSize;
    bool* visited = (bool*)calloc(n, sizeof(bool));
    visited[removeCity] = true;
    int count = 0;
    for (int i = 0; i < n; i++) {
        if (!visited[i]) {
            count++;
            int* stack = (int*)malloc(n * sizeof(int));
            int top = 0;
            stack[top++] = i;
            visited[i] = true;
            while (top > 0) {
                int u = stack[--top];
                for (int v = 0; v < n; v++) {
                    if (isConnected[u][v] == 1 && !visited[v]) {
                        visited[v] = true;
                        stack[top++] = v;
                    }
                }
            }
            free(stack);
        }
    }
    free(visited);
    return count;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** grid = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        grid[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) if (scanf("%d", &grid[i][j]) != 1) return 0;
    }
    int rc;
    if (scanf("%d", &rc) != 1) return 0;
    printf("%d\\n", provincesAfterRemoval(grid, n, NULL, rc));
    for (int i = 0; i < n; i++) free(grid[i]);
    free(grid);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <stack>

using namespace std;

int provincesAfterRemoval(vector<vector<int>>& isConnected, int removeCity) {
    int n = isConnected.size();
    vector<bool> visited(n, false);
    visited[removeCity] = true;
    int count = 0;
    for (int i = 0; i < n; i++) {
        if (!visited[i]) {
            count++;
            stack<int> st;
            st.push(i);
            visited[i] = true;
            while (!st.empty()) {
                int u = st.top(); st.pop();
                for (int v = 0; v < n; v++) {
                    if (isConnected[u][v] == 1 && !visited[v]) {
                        visited[v] = true;
                        st.push(v);
                    }
                }
            }
        }
    }
    return count;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<int>> grid(n, vector<int>(n));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cin >> grid[i][j];
        int rc;
        cin >> rc;
        cout << provincesAfterRemoval(grid, rc) << "\\n";
    }
    return 0;
}`
  },
  'nop-h2': {
    python: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
        self.components = n
    def find(self, x):
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]
            x = self.parent[x]
        return x
    def union(self, x, y):
        rx, ry = self.find(x), self.find(y)
        if rx == ry: return
        if self.rank[rx] < self.rank[ry]:
            self.parent[rx] = ry
        elif self.rank[rx] > self.rank[ry]:
            self.parent[ry] = rx
        else:
            self.parent[ry] = rx
            self.rank[rx] += 1
        self.components -= 1

def process_operations(n, operations):
    dsu = DSU(n)
    results = []
    for op in operations:
        if op == 'QUERY':
            results.append(str(dsu.components))
        elif op.startswith('CONNECT'):
            _, a, b = op.split()
            dsu.union(int(a), int(b))
    return results

n = int(input())
q = int(input())
ops = [input().strip() for _ in range(q)]
results = process_operations(n, ops)
print(' '.join(results))`,
    java: `import java.util.*;

public class Solution {
    static int[] parent, rank;
    static int components;

    public static int find(int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }

    public static void union(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        components--;
    }

    public static int[] processOperations(int n, String[] operations) {
        parent = new int[n];
        rank = new int[n];
        for (int i = 0; i < n; i++) parent[i] = i;
        components = n;
        List<Integer> res = new ArrayList<>();
        for (String op : operations) {
            if (op.equals("QUERY")) {
                res.add(components);
            } else if (op.startsWith("CONNECT")) {
                String[] parts = op.split(" ");
                int a = Integer.parseInt(parts[1]);
                int b = Integer.parseInt(parts[2]);
                union(a, b);
            }
        }
        int[] result = new int[res.size()];
        for (int i = 0; i < res.size(); i++) result[i] = res.get(i);
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int q = sc.nextInt();
            sc.nextLine();
            String[] ops = new String[q];
            for (int i = 0; i < q; i++) ops[i] = sc.nextLine();
            int[] res = processOperations(n, ops);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(res[i]);
            }
            System.out.println(sb);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int* parent, *rank;
int components;

int find(int x) {
    while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; }
    return x;
}

void unionSets(int x, int y) {
    int rx = find(x), ry = find(y);
    if (rx == ry) return;
    if (rank[rx] < rank[ry]) parent[rx] = ry;
    else if (rank[rx] > rank[ry]) parent[ry] = rx;
    else { parent[ry] = rx; rank[rx]++; }
    components--;
}

int* processOperations(int n, char** operations, int opsSize, int* returnSize) {
    parent = (int*)malloc(n * sizeof(int));
    rank = (int*)calloc(n, sizeof(int));
    for (int i = 0; i < n; i++) parent[i] = i;
    components = n;
    int* res = (int*)malloc(opsSize * sizeof(int));
    int cnt = 0;
    for (int i = 0; i < opsSize; i++) {
        if (strcmp(operations[i], "QUERY") == 0) {
            res[cnt++] = components;
        } else if (strncmp(operations[i], "CONNECT", 7) == 0) {
            int a, b;
            sscanf(operations[i], "%*s %d %d", &a, &b);
            unionSets(a, b);
        }
    }
    *returnSize = cnt;
    free(parent); free(rank);
    return res;
}

int main() {
    int n, q;
    if (scanf("%d %d", &n, &q) != 2) return 0;
    getchar();
    char** ops = (char**)malloc(q * sizeof(char*));
    for (int i = 0; i < q; i++) {
        ops[i] = (char*)malloc(100 * sizeof(char));
        if (fgets(ops[i], 100, stdin) == NULL) return 0;
        ops[i][strcspn(ops[i], "\\n")] = 0;
    }
    int returnSize;
    int* res = processOperations(n, ops, q, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        if (i > 0) printf(" ");
        printf("%d", res[i]);
    }
    printf("\\n");
    for (int i = 0; i < q; i++) free(ops[i]);
    free(ops);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <sstream>

using namespace std;

class DSU {
    vector<int> parent, rank;
    int comp;
public:
    DSU(int n) : comp(n) {
        parent.resize(n); rank.resize(n, 0);
        for (int i = 0; i < n; i++) parent[i] = i;
    }
    int find(int x) {
        while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; }
        return x;
    }
    void unite(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        comp--;
    }
    int getComponents() { return comp; }
};

vector<int> processOperations(int n, vector<string>& operations) {
    DSU dsu(n);
    vector<int> res;
    for (string& op : operations) {
        if (op == "QUERY") {
            res.push_back(dsu.getComponents());
        } else if (op.substr(0, 7) == "CONNECT") {
            stringstream ss(op);
            string cmd;
            int a, b;
            ss >> cmd >> a >> b;
            dsu.unite(a, b);
        }
    }
    return res;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n, q;
    if (cin >> n >> q) {
        cin.ignore();
        vector<string> ops(q);
        for (int i = 0; i < q; i++) getline(cin, ops[i]);
        vector<int> res = processOperations(n, ops);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'nop-h3': {
    python: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
        self.components = n
    def find(self, x):
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]
            x = self.parent[x]
        return x
    def union(self, x, y):
        rx, ry = self.find(x), self.find(y)
        if rx == ry: return
        if self.rank[rx] < self.rank[ry]:
            self.parent[rx] = ry
        elif self.rank[rx] > self.rank[ry]:
            self.parent[ry] = rx
        else:
            self.parent[ry] = rx
            self.rank[rx] += 1
        self.components -= 1

def provinces_with_budget(n, edges, budget):
    dsu = DSU(n)
    for u, v, cost in edges:
        if cost <= budget:
            dsu.union(u, v)
    return dsu.components

n = int(input())
m = int(input())
edges = [tuple(map(int, input().split())) for _ in range(m)]
budget = int(input())
print(provinces_with_budget(n, edges, budget))`,
    java: `import java.util.*;

public class Solution {
    static int[] parent, rank;
    static int components;

    public static int find(int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }

    public static void union(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        components--;
    }

    public static int provincesWithBudget(int n, int[][] edges, int budget) {
        parent = new int[n];
        rank = new int[n];
        for (int i = 0; i < n; i++) parent[i] = i;
        components = n;
        for (int[] e : edges) {
            if (e[2] <= budget) union(e[0], e[1]);
        }
        return components;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int m = sc.nextInt();
            int[][] edges = new int[m][3];
            for (int i = 0; i < m; i++) {
                edges[i][0] = sc.nextInt();
                edges[i][1] = sc.nextInt();
                edges[i][2] = sc.nextInt();
            }
            int budget = sc.nextInt();
            System.out.println(provincesWithBudget(n, edges, budget));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int* parent, *rank;
int components;

int find(int x) {
    while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; }
    return x;
}

void unionSets(int x, int y) {
    int rx = find(x), ry = find(y);
    if (rx == ry) return;
    if (rank[rx] < rank[ry]) parent[rx] = ry;
    else if (rank[rx] > rank[ry]) parent[ry] = rx;
    else { parent[ry] = rx; rank[rx]++; }
    components--;
}

int provincesWithBudget(int n, int** edges, int edgesSize, int* edgesColSize, int budget) {
    parent = (int*)malloc(n * sizeof(int));
    rank = (int*)calloc(n, sizeof(int));
    for (int i = 0; i < n; i++) parent[i] = i;
    components = n;
    for (int i = 0; i < edgesSize; i++) {
        if (edges[i][2] <= budget) unionSets(edges[i][0], edges[i][1]);
    }
    int res = components;
    free(parent); free(rank);
    return res;
}

int main() {
    int n, m;
    if (scanf("%d", &n) != 1) return 0;
    if (scanf("%d", &m) != 1) return 0;
    int** edges = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        edges[i] = (int*)malloc(3 * sizeof(int));
        if (scanf("%d %d %d", &edges[i][0], &edges[i][1], &edges[i][2]) != 3) return 0;
    }
    int budget;
    if (scanf("%d", &budget) != 1) return 0;
    printf("%d\\n", provincesWithBudget(n, edges, m, NULL, budget));
    for (int i = 0; i < m; i++) free(edges[i]);
    free(edges);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

class DSU {
    vector<int> parent, rank;
    int comp;
public:
    DSU(int n) : comp(n) {
        parent.resize(n); rank.resize(n, 0);
        for (int i = 0; i < n; i++) parent[i] = i;
    }
    int find(int x) {
        while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; }
        return x;
    }
    void unite(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        comp--;
    }
    int getComponents() { return comp; }
};

int provincesWithBudget(int n, vector<vector<int>>& edges, int budget) {
    DSU dsu(n);
    for (auto& e : edges) {
        if (e[2] <= budget) dsu.unite(e[0], e[1]);
    }
    return dsu.getComponents();
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n, m;
    if (cin >> n >> m) {
        vector<vector<int>> edges(m, vector<int>(3));
        for (int i = 0; i < m; i++) cin >> edges[i][0] >> edges[i][1] >> edges[i][2];
        int budget;
        cin >> budget;
        cout << provincesWithBudget(n, edges, budget) << "\\n";
    }
    return 0;
}`
  },
  'nop-h4': {
    python: `def critical_connections(isConnected):
    n = len(isConnected)
    visited = [False] * n
    tin = [-1] * n
    low = [-1] * n
    timer = 0
    bridges = []
    
    def dfs(u, parent):
        nonlocal timer
        visited[u] = True
        tin[u] = low[u] = timer
        timer += 1
        for v in range(n):
            if isConnected[u][v] == 1:
                if v == parent: continue
                if visited[v]:
                    low[u] = min(low[u], tin[v])
                else:
                    dfs(v, u)
                    low[u] = min(low[u], low[v])
                    if low[v] > tin[u]:
                        bridges.append([u, v] if u < v else [v, u])
    
    for i in range(n):
        if not visited[i]:
            dfs(i, -1)
    
    bridges.sort()
    return bridges

n = int(input())
isConnected = [list(map(int, input().split())) for _ in range(n)]
res = critical_connections(isConnected)
for u, v in res:
    print(u, v)`,
    java: `import java.util.*;

public class Solution {
    static int timer;
    static int[] tin, low;
    static boolean[] visited;
    static List<List<Integer>> bridges;

    public static void dfs(int u, int parent, int[][] grid) {
        visited[u] = true;
        tin[u] = low[u] = timer++;
        for (int v = 0; v < grid.length; v++) {
            if (grid[u][v] == 1) {
                if (v == parent) continue;
                if (visited[v]) {
                    low[u] = Math.min(low[u], tin[v]);
                } else {
                    dfs(v, u, grid);
                    low[u] = Math.min(low[u], low[v]);
                    if (low[v] > tin[u]) {
                        bridges.add(Arrays.asList(Math.min(u, v), Math.max(u, v)));
                    }
                }
            }
        }
    }

    public static List<List<Integer>> criticalConnections(int[][] isConnected) {
        int n = isConnected.length;
        tin = new int[n];
        low = new int[n];
        visited = new boolean[n];
        timer = 0;
        bridges = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            if (!visited[i]) dfs(i, -1, isConnected);
        }
        bridges.sort((a, b) -> !a.get(0).equals(b.get(0)) ? a.get(0) - b.get(0) : a.get(1) - b.get(1));
        return bridges;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] grid = new int[n][n];
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++) grid[i][j] = sc.nextInt();
            List<List<Integer>> res = criticalConnections(grid);
            for (List<Integer> edge : res) {
                System.out.println(edge.get(0) + " " + edge.get(1));
            }
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>

int timer;
int* tin, *low;
bool* visited;
int** bridges;
int bridgeCnt;

int min(int a, int b) { return a < b ? a : b; }

void dfs(int u, int parent, int** grid, int n) {
    visited[u] = true;
    tin[u] = low[u] = timer++;
    for (int v = 0; v < n; v++) {
        if (grid[u][v] == 1) {
            if (v == parent) continue;
            if (visited[v]) {
                low[u] = min(low[u], tin[v]);
            } else {
                dfs(v, u, grid, n);
                low[u] = min(low[u], low[v]);
                if (low[v] > tin[u]) {
                    bridges[bridgeCnt][0] = u < v ? u : v;
                    bridges[bridgeCnt][1] = u < v ? v : u;
                    bridgeCnt++;
                }
            }
        }
    }
}

int cmp(const void* a, const void* b) {
    int* ea = *(int**)a, *eb = *(int**)b;
    if (ea[0] != eb[0]) return ea[0] - eb[0];
    return ea[1] - eb[1];
}

int** criticalConnections(int** isConnected, int isConnectedSize, int* isConnectedColSize, int* returnSize, int** returnColumnSizes) {
    int n = isConnectedSize;
    tin = (int*)malloc(n * sizeof(int));
    low = (int*)malloc(n * sizeof(int));
    visited = (bool*)calloc(n, sizeof(bool));
    bridges = (int**)malloc(n * n * sizeof(int*));
    for (int i = 0; i < n * n; i++) bridges[i] = (int*)malloc(2 * sizeof(int));
    bridgeCnt = 0;
    timer = 0;
    for (int i = 0; i < n; i++)
        if (!visited[i]) dfs(i, -1, isConnected, n);
    qsort(bridges, bridgeCnt, sizeof(int*), cmp);
    *returnSize = bridgeCnt;
    *returnColumnSizes = (int*)malloc(bridgeCnt * sizeof(int));
    for (int i = 0; i < bridgeCnt; i++) (*returnColumnSizes)[i] = 2;
    free(tin); free(low); free(visited);
    return bridges;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** grid = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        grid[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) if (scanf("%d", &grid[i][j]) != 1) return 0;
    }
    int returnSize, *returnColumnSizes;
    int** res = criticalConnections(grid, n, NULL, &returnSize, &returnColumnSizes);
    for (int i = 0; i < returnSize; i++) {
        printf("%d %d\\n", res[i][0], res[i][1]);
        free(res[i]);
    }
    free(res);
    free(returnColumnSizes);
    for (int i = 0; i < n; i++) free(grid[i]);
    free(grid);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
    int timer;
    vector<int> tin, low;
    vector<bool> visited;
    vector<vector<int>> bridges;
    
    void dfs(int u, int parent, vector<vector<int>>& grid) {
        visited[u] = true;
        tin[u] = low[u] = timer++;
        for (int v = 0; v < (int)grid.size(); v++) {
            if (grid[u][v] == 1) {
                if (v == parent) continue;
                if (visited[v]) {
                    low[u] = min(low[u], tin[v]);
                } else {
                    dfs(v, u, grid);
                    low[u] = min(low[u], low[v]);
                    if (low[v] > tin[u]) {
                        bridges.push_back({min(u, v), max(u, v)});
                    }
                }
            }
        }
    }
    
public:
    vector<vector<int>> criticalConnections(vector<vector<int>>& isConnected) {
        int n = isConnected.size();
        tin.assign(n, -1);
        low.assign(n, -1);
        visited.assign(n, false);
        timer = 0;
        bridges.clear();
        for (int i = 0; i < n; i++)
            if (!visited[i]) dfs(i, -1, isConnected);
        sort(bridges.begin(), bridges.end());
        return bridges;
    }
};

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<int>> grid(n, vector<int>(n));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cin >> grid[i][j];
        Solution sol;
        vector<vector<int>> res = sol.criticalConnections(grid);
        for (auto& edge : res) cout << edge[0] << " " << edge[1] << "\\n";
    }
    return 0;
}`
  },
  'nop-h5': {
    python: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
        self.components = n
    def find(self, x):
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]
            x = self.parent[x]
        return x
    def union(self, x, y):
        rx, ry = self.find(x), self.find(y)
        if rx == ry: return
        if self.rank[rx] < self.rank[ry]:
            self.parent[rx] = ry
        elif self.rank[rx] > self.rank[ry]:
            self.parent[ry] = rx
        else:
            self.parent[ry] = rx
            self.rank[rx] += 1
        self.components -= 1

def min_provinces_after_k_merges(isConnected, k):
    n = len(isConnected)
    dsu = DSU(n)
    for i in range(n):
        for j in range(i + 1, n):
            if isConnected[i][j] == 1:
                dsu.union(i, j)
    return max(1, dsu.components - k)

n = int(input())
isConnected = [list(map(int, input().split())) for _ in range(n)]
k = int(input())
print(min_provinces_after_k_merges(isConnected, k))`,
    java: `import java.util.*;

public class Solution {
    static int[] parent, rank;
    static int components;

    public static int find(int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }

    public static void union(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        components--;
    }

    public static int minProvincesAfterKMerges(int[][] isConnected, int k) {
        int n = isConnected.length;
        parent = new int[n];
        rank = new int[n];
        for (int i = 0; i < n; i++) parent[i] = i;
        components = n;
        for (int i = 0; i < n; i++)
            for (int j = i + 1; j < n; j++)
                if (isConnected[i][j] == 1) union(i, j);
        return Math.max(1, components - k);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] grid = new int[n][n];
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++) grid[i][j] = sc.nextInt();
            int k = sc.nextInt();
            System.out.println(minProvincesAfterKMerges(grid, k));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int* parent, *rank;
int components;

int find(int x) {
    while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; }
    return x;
}

void unionSets(int x, int y) {
    int rx = find(x), ry = find(y);
    if (rx == ry) return;
    if (rank[rx] < rank[ry]) parent[rx] = ry;
    else if (rank[rx] > rank[ry]) parent[ry] = rx;
    else { parent[ry] = rx; rank[rx]++; }
    components--;
}

int minProvincesAfterKMerges(int** isConnected, int isConnectedSize, int* isConnectedColSize, int k) {
    int n = isConnectedSize;
    parent = (int*)malloc(n * sizeof(int));
    rank = (int*)calloc(n, sizeof(int));
    for (int i = 0; i < n; i++) parent[i] = i;
    components = n;
    for (int i = 0; i < n; i++)
        for (int j = i + 1; j < n; j++)
            if (isConnected[i][j] == 1) unionSets(i, j);
    int res = components - k;
    if (res < 1) res = 1;
    free(parent); free(rank);
    return res;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** grid = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        grid[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) if (scanf("%d", &grid[i][j]) != 1) return 0;
    }
    int k;
    if (scanf("%d", &k) != 1) return 0;
    printf("%d\\n", minProvincesAfterKMerges(grid, n, NULL, k));
    for (int i = 0; i < n; i++) free(grid[i]);
    free(grid);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class DSU {
    vector<int> parent, rank;
    int comp;
public:
    DSU(int n) : comp(n) {
        parent.resize(n); rank.resize(n, 0);
        for (int i = 0; i < n; i++) parent[i] = i;
    }
    int find(int x) {
        while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; }
        return x;
    }
    void unite(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        comp--;
    }
    int getComponents() { return comp; }
};

int minProvincesAfterKMerges(vector<vector<int>>& isConnected, int k) {
    int n = isConnected.size();
    DSU dsu(n);
    for (int i = 0; i < n; i++)
        for (int j = i + 1; j < n; j++)
            if (isConnected[i][j] == 1) dsu.unite(i, j);
    return max(1, dsu.getComponents() - k);
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<int>> grid(n, vector<int>(n));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cin >> grid[i][j];
        int k;
        cin >> k;
        cout << minProvincesAfterKMerges(grid, k) << "\\n";
    }
    return 0;
}`
  }
};