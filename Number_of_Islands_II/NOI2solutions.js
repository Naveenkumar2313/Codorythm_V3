export const NOI2solutions = {
  'noi2-e1': {
    python: `def num_islands_ii(m, n, positions):
    result = []
    grid = [[0] * n for _ in range(m)]
    count = 0
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    parent = {}
    rank = {}
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    def union(x, y):
        nonlocal count
        rx, ry = find(x), find(y)
        if rx == ry: return 0
        if rank[rx] < rank[ry]:
            parent[rx] = ry
        elif rank[rx] > rank[ry]:
            parent[ry] = rx
        else:
            parent[ry] = rx
            rank[rx] += 1
        count -= 1
        return 1
    for r, c in positions:
        idx = r * n + c
        if grid[r][c] == 0:
            grid[r][c] = 1
            parent[idx] = idx
            rank[idx] = 0
            count += 1
            for dr, dc in dirs:
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:
                    union(idx, nr * n + nc)
        result.append(count)
    return result

m, n = map(int, input().split())
k = int(input())
positions = [list(map(int, input().split())) for _ in range(k)]
result = num_islands_ii(m, n, positions)
print(' '.join(map(str, result)))`,
    java: `import java.util.*;

public class Solution {
    static int[] parent, rank;
    static int count;

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
        count--;
    }

    public static List<Integer> numIslands2(int m, int n, int[][] positions) {
        int[][] grid = new int[m][n];
        parent = new int[m * n];
        rank = new int[m * n];
        count = 0;
        int[][] dirs = {{0,1},{0,-1},{1,0},{-1,0}};
        List<Integer> res = new ArrayList<>();
        for (int[] pos : positions) {
            int r = pos[0], c = pos[1];
            int idx = r * n + c;
            if (grid[r][c] == 0) {
                grid[r][c] = 1;
                parent[idx] = idx;
                rank[idx] = 0;
                count++;
                for (int[] d : dirs) {
                    int nr = r + d[0], nc = c + d[1];
                    if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) {
                        union(idx, nr * n + nc);
                    }
                }
            }
            res.add(count);
        }
        return res;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt(), n = sc.nextInt();
            int k = sc.nextInt();
            int[][] pos = new int[k][2];
            for (int i = 0; i < k; i++) {
                pos[i][0] = sc.nextInt();
                pos[i][1] = sc.nextInt();
            }
            List<Integer> res = numIslands2(m, n, pos);
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
#include <string.h>

int* parent, *rank;
int count;

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
    count--;
}

int* numIslands2(int m, int n, int positions[][2], int k, int* returnSize) {
    *returnSize = k;
    int** grid = (int**)calloc(m, sizeof(int*));
    for (int i = 0; i < m; i++) grid[i] = (int*)calloc(n, sizeof(int));
    parent = (int*)malloc(m * n * sizeof(int));
    rank = (int*)calloc(m * n, sizeof(int));
    count = 0;
    int* res = (int*)malloc(k * sizeof(int));
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    for (int i = 0; i < k; i++) {
        int r = positions[i][0], c = positions[i][1];
        int idx = r * n + c;
        if (grid[r][c] == 0) {
            grid[r][c] = 1;
            parent[idx] = idx;
            rank[idx] = 0;
            count++;
            for (int d = 0; d < 4; d++) {
                int nr = r + dirs[d][0], nc = c + dirs[d][1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) {
                    unionSets(idx, nr * n + nc);
                }
            }
        }
        res[i] = count;
    }
    for (int i = 0; i < m; i++) free(grid[i]);
    free(grid);
    free(parent); free(rank);
    return res;
}

int main() {
    int m, n, k;
    if (scanf("%d %d %d", &m, &n, &k) != 3) return 0;
    int pos[10000][2];
    for (int i = 0; i < k; i++) {
        if (scanf("%d %d", &pos[i][0], &pos[i][1]) != 2) return 0;
    }
    int returnSize;
    int* res = numIslands2(m, n, pos, k, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        if (i > 0) printf(" ");
        printf("%d", res[i]);
    }
    printf("\\n");
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

class DSU {
    vector<int> parent, rank;
public:
    int count;
    DSU(int n) : count(0) {
        parent.resize(n);
        rank.resize(n, 0);
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
        count--;
    }
};

vector<int> numIslands2(int m, int n, vector<vector<int>>& positions) {
    vector<vector<int>> grid(m, vector<int>(n, 0));
    DSU dsu(m * n);
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    vector<int> res;
    for (auto& pos : positions) {
        int r = pos[0], c = pos[1], idx = r * n + c;
        if (grid[r][c] == 0) {
            grid[r][c] = 1;
            dsu.parent[idx] = idx;
            dsu.count++;
            for (auto& d : dirs) {
                int nr = r + d[0], nc = c + d[1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) {
                    dsu.unite(idx, nr * n + nc);
                }
            }
        }
        res.push_back(dsu.count);
    }
    return res;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int m, n, k;
    if (cin >> m >> n >> k) {
        vector<vector<int>> positions(k, vector<int>(2));
        for (int i = 0; i < k; i++) cin >> positions[i][0] >> positions[i][1];
        vector<int> res = numIslands2(m, n, positions);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'noi2-e2': {
    python: `def num_islands_ii(m, n, positions):
    result = []
    grid = [[0] * n for _ in range(m)]
    count = 0
    parent = {}
    rank = {}
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    def union(x, y):
        nonlocal count
        rx, ry = find(x), find(y)
        if rx == ry: return
        if rank[rx] < rank[ry]: parent[rx] = ry
        elif rank[rx] > rank[ry]: parent[ry] = rx
        else: parent[ry] = rx; rank[rx] += 1
        count -= 1
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    for r, c in positions:
        idx = r * n + c
        if grid[r][c] == 0:
            grid[r][c] = 1
            parent[idx] = idx
            rank[idx] = 0
            count += 1
            for dr, dc in dirs:
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:
                    union(idx, nr * n + nc)
        result.append(count)
    return result

m, n = map(int, input().split())
k = int(input())
positions = [list(map(int, input().split())) for _ in range(k)]
result = num_islands_ii(m, n, positions)
print(' '.join(map(str, result)))`,
    java: `import java.util.*;

public class Solution {
    static int[] parent, rank;
    static int count;

    public static int find(int x) {
        while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; }
        return x;
    }

    public static void union(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        count--;
    }

    public static List<Integer> numIslands2(int m, int n, int[][] positions) {
        int[][] grid = new int[m][n];
        parent = new int[m * n];
        rank = new int[m * n];
        count = 0;
        int[][] dirs = {{0,1},{0,-1},{1,0},{-1,0}};
        List<Integer> res = new ArrayList<>();
        for (int[] pos : positions) {
            int r = pos[0], c = pos[1], idx = r * n + c;
            if (grid[r][c] == 0) {
                grid[r][c] = 1;
                parent[idx] = idx;
                count++;
                for (int[] d : dirs) {
                    int nr = r + d[0], nc = c + d[1];
                    if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1)
                        union(idx, nr * n + nc);
                }
            }
            res.add(count);
        }
        return res;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt(), n = sc.nextInt(), k = sc.nextInt();
            int[][] pos = new int[k][2];
            for (int i = 0; i < k; i++) { pos[i][0] = sc.nextInt(); pos[i][1] = sc.nextInt(); }
            List<Integer> res = numIslands2(m, n, pos);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.size(); i++) { if (i > 0) sb.append(" "); sb.append(res.get(i)); }
            System.out.println(sb);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int* parent, *rank;
int count;

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
    count--;
}

int* numIslands2(int m, int n, int positions[][2], int k, int* returnSize) {
    *returnSize = k;
    int** grid = (int**)calloc(m, sizeof(int*));
    for (int i = 0; i < m; i++) grid[i] = (int*)calloc(n, sizeof(int));
    parent = (int*)malloc(m * n * sizeof(int));
    rank = (int*)calloc(m * n, sizeof(int));
    count = 0;
    int* res = (int*)malloc(k * sizeof(int));
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    for (int i = 0; i < k; i++) {
        int r = positions[i][0], c = positions[i][1], idx = r * n + c;
        if (grid[r][c] == 0) {
            grid[r][c] = 1; parent[idx] = idx; count++;
            for (int d = 0; d < 4; d++) {
                int nr = r + dirs[d][0], nc = c + dirs[d][1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1)
                    unionSets(idx, nr * n + nc);
            }
        }
        res[i] = count;
    }
    for (int i = 0; i < m; i++) free(grid[i]);
    free(grid); free(parent); free(rank);
    return res;
}

int main() {
    int m, n, k;
    if (scanf("%d %d %d", &m, &n, &k) != 3) return 0;
    int pos[10000][2];
    for (int i = 0; i < k; i++) if (scanf("%d %d", &pos[i][0], &pos[i][1]) != 2) return 0;
    int returnSize;
    int* res = numIslands2(m, n, pos, k, &returnSize);
    for (int i = 0; i < returnSize; i++) { if (i > 0) printf(" "); printf("%d", res[i]); }
    printf("\\n");
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

class DSU {
public:
    vector<int> parent, rank;
    int count;
    DSU(int n) : count(0) { parent.resize(n); rank.resize(n, 0); for (int i = 0; i < n; i++) parent[i] = i; }
    int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
    void unite(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        count--;
    }
};

vector<int> numIslands2(int m, int n, vector<vector<int>>& positions) {
    vector<vector<int>> grid(m, vector<int>(n, 0));
    DSU dsu(m * n);
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    vector<int> res;
    for (auto& pos : positions) {
        int r = pos[0], c = pos[1], idx = r * n + c;
        if (grid[r][c] == 0) {
            grid[r][c] = 1; dsu.parent[idx] = idx; dsu.count++;
            for (auto& d : dirs) {
                int nr = r + d[0], nc = c + d[1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1)
                    dsu.unite(idx, nr * n + nc);
            }
        }
        res.push_back(dsu.count);
    }
    return res;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int m, n, k;
    if (cin >> m >> n >> k) {
        vector<vector<int>> positions(k, vector<int>(2));
        for (int i = 0; i < k; i++) cin >> positions[i][0] >> positions[i][1];
        vector<int> res = numIslands2(m, n, positions);
        for (int i = 0; i < (int)res.size(); i++) { if (i > 0) cout << " "; cout << res[i]; }
        cout << "\\n";
    }
    return 0;
}`
  },
  'noi2-e3': {
    python: `def num_islands_ii(m, n, positions):
    result = []
    grid = [[0] * n for _ in range(m)]
    count = 0
    parent = {}
    rank = {}
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    def union(x, y):
        nonlocal count
        rx, ry = find(x), find(y)
        if rx == ry: return
        if rank[rx] < rank[ry]: parent[rx] = ry
        elif rank[rx] > rank[ry]: parent[ry] = rx
        else: parent[ry] = rx; rank[rx] += 1
        count -= 1
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    for r, c in positions:
        idx = r * n + c
        if grid[r][c] == 0:
            grid[r][c] = 1
            parent[idx] = idx
            rank[idx] = 0
            count += 1
            for dr, dc in dirs:
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:
                    union(idx, nr * n + nc)
        result.append(count)
    return result

m, n = map(int, input().split())
k = int(input())
positions = [list(map(int, input().split())) for _ in range(k)]
result = num_islands_ii(m, n, positions)
print(' '.join(map(str, result)))`,
    java: `import java.util.*;

public class Solution {
    static int[] parent, rank;
    static int count;
    public static int find(int x) {
        while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; }
        return x;
    }
    public static void union(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        count--;
    }
    public static List<Integer> numIslands2(int m, int n, int[][] positions) {
        int[][] grid = new int[m][n];
        parent = new int[m * n]; rank = new int[m * n]; count = 0;
        int[][] dirs = {{0,1},{0,-1},{1,0},{-1,0}};
        List<Integer> res = new ArrayList<>();
        for (int[] pos : positions) {
            int r = pos[0], c = pos[1], idx = r * n + c;
            if (grid[r][c] == 0) {
                grid[r][c] = 1; parent[idx] = idx; count++;
                for (int[] d : dirs) {
                    int nr = r + d[0], nc = c + d[1];
                    if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1)
                        union(idx, nr * n + nc);
                }
            }
            res.add(count);
        }
        return res;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt(), n = sc.nextInt(), k = sc.nextInt();
            int[][] pos = new int[k][2];
            for (int i = 0; i < k; i++) { pos[i][0] = sc.nextInt(); pos[i][1] = sc.nextInt(); }
            List<Integer> res = numIslands2(m, n, pos);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.size(); i++) { if (i > 0) sb.append(" "); sb.append(res.get(i)); }
            System.out.println(sb);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int* parent, *rank; int count;
int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
void unionSets(int x, int y) {
    int rx = find(x), ry = find(y);
    if (rx == ry) return;
    if (rank[rx] < rank[ry]) parent[rx] = ry;
    else if (rank[rx] > rank[ry]) parent[ry] = rx;
    else { parent[ry] = rx; rank[rx]++; }
    count--;
}
int* numIslands2(int m, int n, int positions[][2], int k, int* returnSize) {
    *returnSize = k;
    int** grid = (int**)calloc(m, sizeof(int*));
    for (int i = 0; i < m; i++) grid[i] = (int*)calloc(n, sizeof(int));
    parent = (int*)malloc(m * n * sizeof(int)); rank = (int*)calloc(m * n, sizeof(int));
    count = 0; int* res = (int*)malloc(k * sizeof(int));
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    for (int i = 0; i < k; i++) {
        int r = positions[i][0], c = positions[i][1], idx = r * n + c;
        if (grid[r][c] == 0) {
            grid[r][c] = 1; parent[idx] = idx; count++;
            for (int d = 0; d < 4; d++) {
                int nr = r + dirs[d][0], nc = c + dirs[d][1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) unionSets(idx, nr * n + nc);
            }
        }
        res[i] = count;
    }
    for (int i = 0; i < m; i++) free(grid[i]); free(grid); free(parent); free(rank);
    return res;
}
int main() {
    int m, n, k; if (scanf("%d %d %d", &m, &n, &k) != 3) return 0;
    int pos[10000][2];
    for (int i = 0; i < k; i++) if (scanf("%d %d", &pos[i][0], &pos[i][1]) != 2) return 0;
    int returnSize; int* res = numIslands2(m, n, pos, k, &returnSize);
    for (int i = 0; i < returnSize; i++) { if (i > 0) printf(" "); printf("%d", res[i]); }
    printf("\\n"); free(res); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
class DSU { public:
    vector<int> parent, rank; int count;
    DSU(int n) : count(0) { parent.resize(n); rank.resize(n, 0); for (int i = 0; i < n; i++) parent[i] = i; }
    int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
    void unite(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        count--;
    }
};
vector<int> numIslands2(int m, int n, vector<vector<int>>& positions) {
    vector<vector<int>> grid(m, vector<int>(n, 0));
    DSU dsu(m * n); int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    vector<int> res;
    for (auto& pos : positions) {
        int r = pos[0], c = pos[1], idx = r * n + c;
        if (grid[r][c] == 0) { grid[r][c] = 1; dsu.parent[idx] = idx; dsu.count++;
            for (auto& d : dirs) { int nr = r + d[0], nc = c + d[1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) dsu.unite(idx, nr * n + nc); }
        }
        res.push_back(dsu.count);
    }
    return res;
}
int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL);
    int m, n, k; if (cin >> m >> n >> k) {
        vector<vector<int>> positions(k, vector<int>(2));
        for (int i = 0; i < k; i++) cin >> positions[i][0] >> positions[i][1];
        vector<int> res = numIslands2(m, n, positions);
        for (int i = 0; i < (int)res.size(); i++) { if (i > 0) cout << " "; cout << res[i]; }
        cout << "\\n";
    }
    return 0;
}`
  },
  'noi2-e4': {
    python: `def num_islands_ii(m, n, positions):
    result = []
    grid = [[0] * n for _ in range(m)]
    count = 0
    parent = {}
    rank = {}
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    def union(x, y):
        nonlocal count
        rx, ry = find(x), find(y)
        if rx == ry: return
        if rank[rx] < rank[ry]: parent[rx] = ry
        elif rank[rx] > rank[ry]: parent[ry] = rx
        else: parent[ry] = rx; rank[rx] += 1
        count -= 1
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    for r, c in positions:
        idx = r * n + c
        if grid[r][c] == 0:
            grid[r][c] = 1
            parent[idx] = idx
            rank[idx] = 0
            count += 1
            for dr, dc in dirs:
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:
                    union(idx, nr * n + nc)
        result.append(count)
    return result

m, n = map(int, input().split())
k = int(input())
positions = [list(map(int, input().split())) for _ in range(k)]
result = num_islands_ii(m, n, positions)
print(' '.join(map(str, result)))`,
    java: `import java.util.*;
public class Solution {
    static int[] parent, rank; static int count;
    public static int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
    public static void union(int x, int y) {
        int rx = find(x), ry = find(y); if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry; else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; } count--;
    }
    public static List<Integer> numIslands2(int m, int n, int[][] positions) {
        int[][] grid = new int[m][n]; parent = new int[m * n]; rank = new int[m * n]; count = 0;
        int[][] dirs = {{0,1},{0,-1},{1,0},{-1,0}};
        List<Integer> res = new ArrayList<>();
        for (int[] pos : positions) {
            int r = pos[0], c = pos[1], idx = r * n + c;
            if (grid[r][c] == 0) { grid[r][c] = 1; parent[idx] = idx; count++;
                for (int[] d : dirs) { int nr = r + d[0], nc = c + d[1];
                    if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) union(idx, nr * n + nc); }
            }
            res.add(count);
        }
        return res;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in); if (sc.hasNextInt()) {
            int m = sc.nextInt(), n = sc.nextInt(), k = sc.nextInt();
            int[][] pos = new int[k][2];
            for (int i = 0; i < k; i++) { pos[i][0] = sc.nextInt(); pos[i][1] = sc.nextInt(); }
            List<Integer> res = numIslands2(m, n, pos);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.size(); i++) { if (i > 0) sb.append(" "); sb.append(res.get(i)); }
            System.out.println(sb);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int* parent, *rank; int count;
int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
void unionSets(int x, int y) {
    int rx = find(x), ry = find(y); if (rx == ry) return;
    if (rank[rx] < rank[ry]) parent[rx] = ry; else if (rank[rx] > rank[ry]) parent[ry] = rx;
    else { parent[ry] = rx; rank[rx]++; } count--;
}
int* numIslands2(int m, int n, int positions[][2], int k, int* returnSize) {
    *returnSize = k;
    int** grid = (int**)calloc(m, sizeof(int*)); for (int i = 0; i < m; i++) grid[i] = (int*)calloc(n, sizeof(int));
    parent = (int*)malloc(m * n * sizeof(int)); rank = (int*)calloc(m * n, sizeof(int));
    count = 0; int* res = (int*)malloc(k * sizeof(int));
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    for (int i = 0; i < k; i++) {
        int r = positions[i][0], c = positions[i][1], idx = r * n + c;
        if (grid[r][c] == 0) { grid[r][c] = 1; parent[idx] = idx; count++;
            for (int d = 0; d < 4; d++) { int nr = r + dirs[d][0], nc = c + dirs[d][1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) unionSets(idx, nr * n + nc); }
        }
        res[i] = count;
    }
    for (int i = 0; i < m; i++) free(grid[i]); free(grid); free(parent); free(rank);
    return res;
}
int main() {
    int m, n, k; if (scanf("%d %d %d", &m, &n, &k) != 3) return 0;
    int pos[10000][2]; for (int i = 0; i < k; i++) if (scanf("%d %d", &pos[i][0], &pos[i][1]) != 2) return 0;
    int returnSize; int* res = numIslands2(m, n, pos, k, &returnSize);
    for (int i = 0; i < returnSize; i++) { if (i > 0) printf(" "); printf("%d", res[i]); }
    printf("\\n"); free(res); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
class DSU { public:
    vector<int> parent, rank; int count;
    DSU(int n) : count(0) { parent.resize(n); rank.resize(n, 0); for (int i = 0; i < n; i++) parent[i] = i; }
    int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
    void unite(int x, int y) {
        int rx = find(x), ry = find(y); if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry; else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; } count--;
    }
};
vector<int> numIslands2(int m, int n, vector<vector<int>>& positions) {
    vector<vector<int>> grid(m, vector<int>(n, 0)); DSU dsu(m * n);
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}}; vector<int> res;
    for (auto& pos : positions) {
        int r = pos[0], c = pos[1], idx = r * n + c;
        if (grid[r][c] == 0) { grid[r][c] = 1; dsu.parent[idx] = idx; dsu.count++;
            for (auto& d : dirs) { int nr = r + d[0], nc = c + d[1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) dsu.unite(idx, nr * n + nc); }
        }
        res.push_back(dsu.count);
    }
    return res;
}
int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL);
    int m, n, k; if (cin >> m >> n >> k) {
        vector<vector<int>> positions(k, vector<int>(2));
        for (int i = 0; i < k; i++) cin >> positions[i][0] >> positions[i][1];
        vector<int> res = numIslands2(m, n, positions);
        for (int i = 0; i < (int)res.size(); i++) { if (i > 0) cout << " "; cout << res[i]; }
        cout << "\\n";
    }
    return 0;
}`
  },
  'noi2-e5': {
    python: `def num_islands_ii(m, n, positions):
    result = []
    grid = [[0] * n for _ in range(m)]
    count = 0
    parent = {}
    rank = {}
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    def union(x, y):
        nonlocal count
        rx, ry = find(x), find(y)
        if rx == ry: return
        if rank[rx] < rank[ry]: parent[rx] = ry
        elif rank[rx] > rank[ry]: parent[ry] = rx
        else: parent[ry] = rx; rank[rx] += 1
        count -= 1
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    for r, c in positions:
        idx = r * n + c
        if grid[r][c] == 0:
            grid[r][c] = 1
            parent[idx] = idx
            rank[idx] = 0
            count += 1
            for dr, dc in dirs:
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:
                    union(idx, nr * n + nc)
        result.append(count)
    return result

m, n = map(int, input().split())
k = int(input())
positions = [list(map(int, input().split())) for _ in range(k)]
result = num_islands_ii(m, n, positions)
print(' '.join(map(str, result)))`,
    java: `import java.util.*;
public class Solution {
    static int[] parent, rank; static int count;
    public static int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
    public static void union(int x, int y) {
        int rx = find(x), ry = find(y); if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry; else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; } count--;
    }
    public static List<Integer> numIslands2(int m, int n, int[][] positions) {
        int[][] grid = new int[m][n]; parent = new int[m * n]; rank = new int[m * n]; count = 0;
        int[][] dirs = {{0,1},{0,-1},{1,0},{-1,0}}; List<Integer> res = new ArrayList<>();
        for (int[] pos : positions) {
            int r = pos[0], c = pos[1], idx = r * n + c;
            if (grid[r][c] == 0) { grid[r][c] = 1; parent[idx] = idx; count++;
                for (int[] d : dirs) { int nr = r + d[0], nc = c + d[1];
                    if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) union(idx, nr * n + nc); } }
            res.add(count);
        }
        return res;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in); if (sc.hasNextInt()) {
            int m = sc.nextInt(), n = sc.nextInt(), k = sc.nextInt();
            int[][] pos = new int[k][2];
            for (int i = 0; i < k; i++) { pos[i][0] = sc.nextInt(); pos[i][1] = sc.nextInt(); }
            List<Integer> res = numIslands2(m, n, pos);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.size(); i++) { if (i > 0) sb.append(" "); sb.append(res.get(i)); }
            System.out.println(sb);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int* parent, *rank; int count;
int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
void unionSets(int x, int y) {
    int rx = find(x), ry = find(y); if (rx == ry) return;
    if (rank[rx] < rank[ry]) parent[rx] = ry; else if (rank[rx] > rank[ry]) parent[ry] = rx;
    else { parent[ry] = rx; rank[rx]++; } count--;
}
int* numIslands2(int m, int n, int positions[][2], int k, int* returnSize) {
    *returnSize = k; int** grid = (int**)calloc(m, sizeof(int*));
    for (int i = 0; i < m; i++) grid[i] = (int*)calloc(n, sizeof(int));
    parent = (int*)malloc(m * n * sizeof(int)); rank = (int*)calloc(m * n, sizeof(int));
    count = 0; int* res = (int*)malloc(k * sizeof(int));
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    for (int i = 0; i < k; i++) {
        int r = positions[i][0], c = positions[i][1], idx = r * n + c;
        if (grid[r][c] == 0) { grid[r][c] = 1; parent[idx] = idx; count++;
            for (int d = 0; d < 4; d++) { int nr = r + dirs[d][0], nc = c + dirs[d][1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) unionSets(idx, nr * n + nc); } }
        res[i] = count;
    }
    for (int i = 0; i < m; i++) free(grid[i]); free(grid); free(parent); free(rank);
    return res;
}
int main() {
    int m, n, k; if (scanf("%d %d %d", &m, &n, &k) != 3) return 0;
    int pos[10000][2]; for (int i = 0; i < k; i++) if (scanf("%d %d", &pos[i][0], &pos[i][1]) != 2) return 0;
    int returnSize; int* res = numIslands2(m, n, pos, k, &returnSize);
    for (int i = 0; i < returnSize; i++) { if (i > 0) printf(" "); printf("%d", res[i]); }
    printf("\\n"); free(res); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
class DSU { public:
    vector<int> parent, rank; int count;
    DSU(int n) : count(0) { parent.resize(n); rank.resize(n, 0); for (int i = 0; i < n; i++) parent[i] = i; }
    int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
    void unite(int x, int y) {
        int rx = find(x), ry = find(y); if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry; else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; } count--;
    }
};
vector<int> numIslands2(int m, int n, vector<vector<int>>& positions) {
    vector<vector<int>> grid(m, vector<int>(n, 0)); DSU dsu(m * n);
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}}; vector<int> res;
    for (auto& pos : positions) {
        int r = pos[0], c = pos[1], idx = r * n + c;
        if (grid[r][c] == 0) { grid[r][c] = 1; dsu.parent[idx] = idx; dsu.count++;
            for (auto& d : dirs) { int nr = r + d[0], nc = c + d[1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) dsu.unite(idx, nr * n + nc); } }
        res.push_back(dsu.count);
    }
    return res;
}
int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL);
    int m, n, k; if (cin >> m >> n >> k) {
        vector<vector<int>> positions(k, vector<int>(2));
        for (int i = 0; i < k; i++) cin >> positions[i][0] >> positions[i][1];
        vector<int> res = numIslands2(m, n, positions);
        for (int i = 0; i < (int)res.size(); i++) { if (i > 0) cout << " "; cout << res[i]; }
        cout << "\\n";
    }
    return 0;
}`
  },
  'noi2-m1': {
    python: `def num_islands_ii(m, n, positions):
    result = []
    grid = [[0] * n for _ in range(m)]
    count = 0
    parent = {}
    rank = {}
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    def union(x, y):
        nonlocal count
        rx, ry = find(x), find(y)
        if rx == ry: return
        if rank[rx] < rank[ry]: parent[rx] = ry
        elif rank[rx] > rank[ry]: parent[ry] = rx
        else: parent[ry] = rx; rank[rx] += 1
        count -= 1
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    for r, c in positions:
        idx = r * n + c
        if grid[r][c] == 0:
            grid[r][c] = 1
            parent[idx] = idx
            rank[idx] = 0
            count += 1
            for dr, dc in dirs:
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:
                    union(idx, nr * n + nc)
        result.append(count)
    return result

m, n = map(int, input().split())
k = int(input())
positions = [list(map(int, input().split())) for _ in range(k)]
result = num_islands_ii(m, n, positions)
print(' '.join(map(str, result)))`,
    java: `import java.util.*;
public class Solution {
    static int[] parent, rank; static int count;
    public static int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
    public static void union(int x, int y) {
        int rx = find(x), ry = find(y); if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry; else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; } count--;
    }
    public static List<Integer> numIslands2(int m, int n, int[][] positions) {
        int[][] grid = new int[m][n]; parent = new int[m * n]; rank = new int[m * n]; count = 0;
        int[][] dirs = {{0,1},{0,-1},{1,0},{-1,0}}; List<Integer> res = new ArrayList<>();
        for (int[] pos : positions) {
            int r = pos[0], c = pos[1], idx = r * n + c;
            if (grid[r][c] == 0) { grid[r][c] = 1; parent[idx] = idx; count++;
                for (int[] d : dirs) { int nr = r + d[0], nc = c + d[1];
                    if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) union(idx, nr * n + nc); } }
            res.add(count);
        }
        return res;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in); if (sc.hasNextInt()) {
            int m = sc.nextInt(), n = sc.nextInt(), k = sc.nextInt();
            int[][] pos = new int[k][2];
            for (int i = 0; i < k; i++) { pos[i][0] = sc.nextInt(); pos[i][1] = sc.nextInt(); }
            List<Integer> res = numIslands2(m, n, pos);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.size(); i++) { if (i > 0) sb.append(" "); sb.append(res.get(i)); }
            System.out.println(sb);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int* parent, *rank; int count;
int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
void unionSets(int x, int y) {
    int rx = find(x), ry = find(y); if (rx == ry) return;
    if (rank[rx] < rank[ry]) parent[rx] = ry; else if (rank[rx] > rank[ry]) parent[ry] = rx;
    else { parent[ry] = rx; rank[rx]++; } count--;
}
int* numIslands2(int m, int n, int positions[][2], int k, int* returnSize) {
    *returnSize = k; int** grid = (int**)calloc(m, sizeof(int*));
    for (int i = 0; i < m; i++) grid[i] = (int*)calloc(n, sizeof(int));
    parent = (int*)malloc(m * n * sizeof(int)); rank = (int*)calloc(m * n, sizeof(int));
    count = 0; int* res = (int*)malloc(k * sizeof(int));
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    for (int i = 0; i < k; i++) {
        int r = positions[i][0], c = positions[i][1], idx = r * n + c;
        if (grid[r][c] == 0) { grid[r][c] = 1; parent[idx] = idx; count++;
            for (int d = 0; d < 4; d++) { int nr = r + dirs[d][0], nc = c + dirs[d][1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) unionSets(idx, nr * n + nc); } }
        res[i] = count;
    }
    for (int i = 0; i < m; i++) free(grid[i]); free(grid); free(parent); free(rank);
    return res;
}
int main() {
    int m, n, k; if (scanf("%d %d %d", &m, &n, &k) != 3) return 0;
    int pos[10000][2]; for (int i = 0; i < k; i++) if (scanf("%d %d", &pos[i][0], &pos[i][1]) != 2) return 0;
    int returnSize; int* res = numIslands2(m, n, pos, k, &returnSize);
    for (int i = 0; i < returnSize; i++) { if (i > 0) printf(" "); printf("%d", res[i]); }
    printf("\\n"); free(res); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
class DSU { public:
    vector<int> parent, rank; int count;
    DSU(int n) : count(0) { parent.resize(n); rank.resize(n, 0); for (int i = 0; i < n; i++) parent[i] = i; }
    int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
    void unite(int x, int y) {
        int rx = find(x), ry = find(y); if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry; else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; } count--;
    }
};
vector<int> numIslands2(int m, int n, vector<vector<int>>& positions) {
    vector<vector<int>> grid(m, vector<int>(n, 0)); DSU dsu(m * n);
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}}; vector<int> res;
    for (auto& pos : positions) {
        int r = pos[0], c = pos[1], idx = r * n + c;
        if (grid[r][c] == 0) { grid[r][c] = 1; dsu.parent[idx] = idx; dsu.count++;
            for (auto& d : dirs) { int nr = r + d[0], nc = c + d[1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) dsu.unite(idx, nr * n + nc); } }
        res.push_back(dsu.count);
    }
    return res;
}
int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL);
    int m, n, k; if (cin >> m >> n >> k) {
        vector<vector<int>> positions(k, vector<int>(2));
        for (int i = 0; i < k; i++) cin >> positions[i][0] >> positions[i][1];
        vector<int> res = numIslands2(m, n, positions);
        for (int i = 0; i < (int)res.size(); i++) { if (i > 0) cout << " "; cout << res[i]; }
        cout << "\\n";
    }
    return 0;
}`
  },
  'noi2-m2': {
    python: `def max_island_count(m, n, positions):
    grid = [[0] * n for _ in range(m)]
    count = 0
    max_count = 0
    parent = {}
    rank = {}
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    def union(x, y):
        nonlocal count
        rx, ry = find(x), find(y)
        if rx == ry: return
        if rank[rx] < rank[ry]: parent[rx] = ry
        elif rank[rx] > rank[ry]: parent[ry] = rx
        else: parent[ry] = rx; rank[rx] += 1
        count -= 1
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    for r, c in positions:
        idx = r * n + c
        if grid[r][c] == 0:
            grid[r][c] = 1
            parent[idx] = idx
            rank[idx] = 0
            count += 1
            for dr, dc in dirs:
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:
                    union(idx, nr * n + nc)
        max_count = max(max_count, count)
    return max_count

m, n = map(int, input().split())
k = int(input())
positions = [list(map(int, input().split())) for _ in range(k)]
print(max_island_count(m, n, positions))`,
    java: `import java.util.*;
public class Solution {
    static int[] parent, rank; static int count, maxCount;
    public static int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
    public static void union(int x, int y) {
        int rx = find(x), ry = find(y); if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry; else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; } count--;
    }
    public static int maxIslandCount(int m, int n, int[][] positions) {
        int[][] grid = new int[m][n]; parent = new int[m * n]; rank = new int[m * n]; count = 0; maxCount = 0;
        int[][] dirs = {{0,1},{0,-1},{1,0},{-1,0}};
        for (int[] pos : positions) {
            int r = pos[0], c = pos[1], idx = r * n + c;
            if (grid[r][c] == 0) { grid[r][c] = 1; parent[idx] = idx; count++;
                for (int[] d : dirs) { int nr = r + d[0], nc = c + d[1];
                    if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) union(idx, nr * n + nc); } }
            maxCount = Math.max(maxCount, count);
        }
        return maxCount;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt(), n = sc.nextInt(), k = sc.nextInt();
            int[][] pos = new int[k][2];
            for (int i = 0; i < k; i++) { pos[i][0] = sc.nextInt(); pos[i][1] = sc.nextInt(); }
            System.out.println(maxIslandCount(m, n, pos));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int* parent, *rank; int count, maxCount;
int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
void unionSets(int x, int y) {
    int rx = find(x), ry = find(y); if (rx == ry) return;
    if (rank[rx] < rank[ry]) parent[rx] = ry; else if (rank[rx] > rank[ry]) parent[ry] = rx;
    else { parent[ry] = rx; rank[rx]++; } count--;
}
int maxIslandCount(int m, int n, int positions[][2], int k) {
    int** grid = (int**)calloc(m, sizeof(int*));
    for (int i = 0; i < m; i++) grid[i] = (int*)calloc(n, sizeof(int));
    parent = (int*)malloc(m * n * sizeof(int)); rank = (int*)calloc(m * n, sizeof(int));
    count = 0; maxCount = 0;
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    for (int i = 0; i < k; i++) {
        int r = positions[i][0], c = positions[i][1], idx = r * n + c;
        if (grid[r][c] == 0) { grid[r][c] = 1; parent[idx] = idx; count++;
            for (int d = 0; d < 4; d++) { int nr = r + dirs[d][0], nc = c + dirs[d][1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) unionSets(idx, nr * n + nc); } }
        if (count > maxCount) maxCount = count;
    }
    for (int i = 0; i < m; i++) free(grid[i]); free(grid); free(parent); free(rank);
    return maxCount;
}
int main() {
    int m, n, k; if (scanf("%d %d %d", &m, &n, &k) != 3) return 0;
    int pos[10000][2]; for (int i = 0; i < k; i++) if (scanf("%d %d", &pos[i][0], &pos[i][1]) != 2) return 0;
    printf("%d\\n", maxIslandCount(m, n, pos, k)); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
class DSU { public:
    vector<int> parent, rank; int count;
    DSU(int n) : count(0) { parent.resize(n); rank.resize(n, 0); for (int i = 0; i < n; i++) parent[i] = i; }
    int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
    void unite(int x, int y) {
        int rx = find(x), ry = find(y); if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry; else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; } count--;
    }
};
int maxIslandCount(int m, int n, vector<vector<int>>& positions) {
    vector<vector<int>> grid(m, vector<int>(n, 0)); DSU dsu(m * n);
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}}; int maxCount = 0;
    for (auto& pos : positions) {
        int r = pos[0], c = pos[1], idx = r * n + c;
        if (grid[r][c] == 0) { grid[r][c] = 1; dsu.parent[idx] = idx; dsu.count++;
            for (auto& d : dirs) { int nr = r + d[0], nc = c + d[1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) dsu.unite(idx, nr * n + nc); } }
        maxCount = max(maxCount, dsu.count);
    }
    return maxCount;
}
int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL);
    int m, n, k; if (cin >> m >> n >> k) {
        vector<vector<int>> positions(k, vector<int>(2));
        for (int i = 0; i < k; i++) cin >> positions[i][0] >> positions[i][1];
        cout << maxIslandCount(m, n, positions) << "\\n";
    }
    return 0;
}`
  },
  'noi2-m3': {
    python: `def final_island_count(m, n, positions):
    grid = [[0] * n for _ in range(m)]
    count = 0
    parent = {}
    rank = {}
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    def union(x, y):
        nonlocal count
        rx, ry = find(x), find(y)
        if rx == ry: return
        if rank[rx] < rank[ry]: parent[rx] = ry
        elif rank[rx] > rank[ry]: parent[ry] = rx
        else: parent[ry] = rx; rank[rx] += 1
        count -= 1
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    for r, c in positions:
        idx = r * n + c
        if grid[r][c] == 0:
            grid[r][c] = 1
            parent[idx] = idx
            rank[idx] = 0
            count += 1
            for dr, dc in dirs:
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:
                    union(idx, nr * n + nc)
    return count

m, n = map(int, input().split())
k = int(input())
positions = [list(map(int, input().split())) for _ in range(k)]
print(final_island_count(m, n, positions))`,
    java: `import java.util.*;
public class Solution {
    static int[] parent, rank; static int count;
    public static int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
    public static void union(int x, int y) {
        int rx = find(x), ry = find(y); if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry; else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; } count--;
    }
    public static int finalIslandCount(int m, int n, int[][] positions) {
        int[][] grid = new int[m][n]; parent = new int[m * n]; rank = new int[m * n]; count = 0;
        int[][] dirs = {{0,1},{0,-1},{1,0},{-1,0}};
        for (int[] pos : positions) {
            int r = pos[0], c = pos[1], idx = r * n + c;
            if (grid[r][c] == 0) { grid[r][c] = 1; parent[idx] = idx; count++;
                for (int[] d : dirs) { int nr = r + d[0], nc = c + d[1];
                    if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) union(idx, nr * n + nc); } }
        }
        return count;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt(), n = sc.nextInt(), k = sc.nextInt();
            int[][] pos = new int[k][2];
            for (int i = 0; i < k; i++) { pos[i][0] = sc.nextInt(); pos[i][1] = sc.nextInt(); }
            System.out.println(finalIslandCount(m, n, pos));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int* parent, *rank; int count;
int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
void unionSets(int x, int y) {
    int rx = find(x), ry = find(y); if (rx == ry) return;
    if (rank[rx] < rank[ry]) parent[rx] = ry; else if (rank[rx] > rank[ry]) parent[ry] = rx;
    else { parent[ry] = rx; rank[rx]++; } count--;
}
int finalIslandCount(int m, int n, int positions[][2], int k) {
    int** grid = (int**)calloc(m, sizeof(int*));
    for (int i = 0; i < m; i++) grid[i] = (int*)calloc(n, sizeof(int));
    parent = (int*)malloc(m * n * sizeof(int)); rank = (int*)calloc(m * n, sizeof(int)); count = 0;
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    for (int i = 0; i < k; i++) {
        int r = positions[i][0], c = positions[i][1], idx = r * n + c;
        if (grid[r][c] == 0) { grid[r][c] = 1; parent[idx] = idx; count++;
            for (int d = 0; d < 4; d++) { int nr = r + dirs[d][0], nc = c + dirs[d][1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) unionSets(idx, nr * n + nc); } }
    }
    int res = count;
    for (int i = 0; i < m; i++) free(grid[i]); free(grid); free(parent); free(rank);
    return res;
}
int main() {
    int m, n, k; if (scanf("%d %d %d", &m, &n, &k) != 3) return 0;
    int pos[10000][2]; for (int i = 0; i < k; i++) if (scanf("%d %d", &pos[i][0], &pos[i][1]) != 2) return 0;
    printf("%d\\n", finalIslandCount(m, n, pos, k)); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
class DSU { public:
    vector<int> parent, rank; int count;
    DSU(int n) : count(0) { parent.resize(n); rank.resize(n, 0); for (int i = 0; i < n; i++) parent[i] = i; }
    int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
    void unite(int x, int y) {
        int rx = find(x), ry = find(y); if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry; else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; } count--;
    }
};
int finalIslandCount(int m, int n, vector<vector<int>>& positions) {
    vector<vector<int>> grid(m, vector<int>(n, 0)); DSU dsu(m * n);
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    for (auto& pos : positions) {
        int r = pos[0], c = pos[1], idx = r * n + c;
        if (grid[r][c] == 0) { grid[r][c] = 1; dsu.parent[idx] = idx; dsu.count++;
            for (auto& d : dirs) { int nr = r + d[0], nc = c + d[1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) dsu.unite(idx, nr * n + nc); } }
    }
    return dsu.count;
}
int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL);
    int m, n, k; if (cin >> m >> n >> k) {
        vector<vector<int>> positions(k, vector<int>(2));
        for (int i = 0; i < k; i++) cin >> positions[i][0] >> positions[i][1];
        cout << finalIslandCount(m, n, positions) << "\\n";
    }
    return 0;
}`
  },
  'noi2-m4': {
    python: `def count_merges(m, n, positions):
    grid = [[0] * n for _ in range(m)]
    merges = 0
    parent = {}
    rank = {}
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    def union(x, y):
        nonlocal merges
        rx, ry = find(x), find(y)
        if rx == ry: return 0
        if rank[rx] < rank[ry]: parent[rx] = ry
        elif rank[rx] > rank[ry]: parent[ry] = rx
        else: parent[ry] = rx; rank[rx] += 1
        merges += 1
        return 1
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    for r, c in positions:
        idx = r * n + c
        if grid[r][c] == 0:
            grid[r][c] = 1
            parent[idx] = idx
            rank[idx] = 0
            for dr, dc in dirs:
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:
                    union(idx, nr * n + nc)
    return merges

m, n = map(int, input().split())
k = int(input())
positions = [list(map(int, input().split())) for _ in range(k)]
print(count_merges(m, n, positions))`,
    java: `import java.util.*;
public class Solution {
    static int[] parent, rank; static int merges;
    public static int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
    public static void union(int x, int y) {
        int rx = find(x), ry = find(y); if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry; else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; } merges++;
    }
    public static int countMerges(int m, int n, int[][] positions) {
        int[][] grid = new int[m][n]; parent = new int[m * n]; rank = new int[m * n]; merges = 0;
        int[][] dirs = {{0,1},{0,-1},{1,0},{-1,0}};
        for (int[] pos : positions) {
            int r = pos[0], c = pos[1], idx = r * n + c;
            if (grid[r][c] == 0) { grid[r][c] = 1; parent[idx] = idx;
                for (int[] d : dirs) { int nr = r + d[0], nc = c + d[1];
                    if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) union(idx, nr * n + nc); } }
        }
        return merges;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt(), n = sc.nextInt(), k = sc.nextInt();
            int[][] pos = new int[k][2];
            for (int i = 0; i < k; i++) { pos[i][0] = sc.nextInt(); pos[i][1] = sc.nextInt(); }
            System.out.println(countMerges(m, n, pos));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int* parent, *rank; int merges;
int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
void unionSets(int x, int y) {
    int rx = find(x), ry = find(y); if (rx == ry) return;
    if (rank[rx] < rank[ry]) parent[rx] = ry; else if (rank[rx] > rank[ry]) parent[ry] = rx;
    else { parent[ry] = rx; rank[rx]++; } merges++;
}
int countMerges(int m, int n, int positions[][2], int k) {
    int** grid = (int**)calloc(m, sizeof(int*));
    for (int i = 0; i < m; i++) grid[i] = (int*)calloc(n, sizeof(int));
    parent = (int*)malloc(m * n * sizeof(int)); rank = (int*)calloc(m * n, sizeof(int)); merges = 0;
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    for (int i = 0; i < k; i++) {
        int r = positions[i][0], c = positions[i][1], idx = r * n + c;
        if (grid[r][c] == 0) { grid[r][c] = 1; parent[idx] = idx;
            for (int d = 0; d < 4; d++) { int nr = r + dirs[d][0], nc = c + dirs[d][1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) unionSets(idx, nr * n + nc); } }
    }
    int res = merges;
    for (int i = 0; i < m; i++) free(grid[i]); free(grid); free(parent); free(rank);
    return res;
}
int main() {
    int m, n, k; if (scanf("%d %d %d", &m, &n, &k) != 3) return 0;
    int pos[10000][2]; for (int i = 0; i < k; i++) if (scanf("%d %d", &pos[i][0], &pos[i][1]) != 2) return 0;
    printf("%d\\n", countMerges(m, n, pos, k)); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
class DSU { public:
    vector<int> parent, rank; int merges;
    DSU() : merges(0) {}
    void init(int n) { parent.resize(n); rank.resize(n, 0); for (int i = 0; i < n; i++) parent[i] = i; }
    int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
    void unite(int x, int y) {
        int rx = find(x), ry = find(y); if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry; else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; } merges++;
    }
};
int countMerges(int m, int n, vector<vector<int>>& positions) {
    vector<vector<int>> grid(m, vector<int>(n, 0)); DSU dsu; dsu.init(m * n);
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    for (auto& pos : positions) {
        int r = pos[0], c = pos[1], idx = r * n + c;
        if (grid[r][c] == 0) { grid[r][c] = 1; dsu.parent[idx] = idx;
            for (auto& d : dirs) { int nr = r + d[0], nc = c + d[1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) dsu.unite(idx, nr * n + nc); } }
    }
    return dsu.merges;
}
int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL);
    int m, n, k; if (cin >> m >> n >> k) {
        vector<vector<int>> positions(k, vector<int>(2));
        for (int i = 0; i < k; i++) cin >> positions[i][0] >> positions[i][1];
        cout << countMerges(m, n, positions) << "\\n";
    }
    return 0;
}`
  },
  'noi2-m5': {
    python: `def first_single_island(m, n, positions):
    grid = [[0] * n for _ in range(m)]
    total = 0
    count = 0
    parent = {}
    rank = {}
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    def union(x, y):
        nonlocal count
        rx, ry = find(x), find(y)
        if rx == ry: return
        if rank[rx] < rank[ry]: parent[rx] = ry
        elif rank[rx] > rank[ry]: parent[ry] = rx
        else: parent[ry] = rx; rank[rx] += 1
        count -= 1
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    for idx_pos, (r, c) in enumerate(positions):
        idx = r * n + c
        if grid[r][c] == 0:
            grid[r][c] = 1
            parent[idx] = idx
            rank[idx] = 0
            count += 1
            total += 1
            for dr, dc in dirs:
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:
                    union(idx, nr * n + nc)
        if count == 1 and total > 0:
            return idx_pos + 1
    return -1

m, n = map(int, input().split())
k = int(input())
positions = [list(map(int, input().split())) for _ in range(k)]
print(first_single_island(m, n, positions))`,
    java: `import java.util.*;
public class Solution {
    static int[] parent, rank; static int count, total;
    public static int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
    public static void union(int x, int y) {
        int rx = find(x), ry = find(y); if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry; else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; } count--;
    }
    public static int firstSingleIsland(int m, int n, int[][] positions) {
        int[][] grid = new int[m][n]; parent = new int[m * n]; rank = new int[m * n]; count = 0; total = 0;
        int[][] dirs = {{0,1},{0,-1},{1,0},{-1,0}};
        for (int i = 0; i < positions.length; i++) {
            int r = positions[i][0], c = positions[i][1], idx = r * n + c;
            if (grid[r][c] == 0) { grid[r][c] = 1; parent[idx] = idx; count++; total++;
                for (int[] d : dirs) { int nr = r + d[0], nc = c + d[1];
                    if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) union(idx, nr * n + nc); } }
            if (count == 1 && total > 0) return i + 1;
        }
        return -1;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt(), n = sc.nextInt(), k = sc.nextInt();
            int[][] pos = new int[k][2];
            for (int i = 0; i < k; i++) { pos[i][0] = sc.nextInt(); pos[i][1] = sc.nextInt(); }
            System.out.println(firstSingleIsland(m, n, pos));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int* parent, *rank; int count, total;
int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
void unionSets(int x, int y) {
    int rx = find(x), ry = find(y); if (rx == ry) return;
    if (rank[rx] < rank[ry]) parent[rx] = ry; else if (rank[rx] > rank[ry]) parent[ry] = rx;
    else { parent[ry] = rx; rank[rx]++; } count--;
}
int firstSingleIsland(int m, int n, int positions[][2], int k) {
    int** grid = (int**)calloc(m, sizeof(int*));
    for (int i = 0; i < m; i++) grid[i] = (int*)calloc(n, sizeof(int));
    parent = (int*)malloc(m * n * sizeof(int)); rank = (int*)calloc(m * n, sizeof(int)); count = 0; total = 0;
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    for (int i = 0; i < k; i++) {
        int r = positions[i][0], c = positions[i][1], idx = r * n + c;
        if (grid[r][c] == 0) { grid[r][c] = 1; parent[idx] = idx; count++; total++;
            for (int d = 0; d < 4; d++) { int nr = r + dirs[d][0], nc = c + dirs[d][1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) unionSets(idx, nr * n + nc); } }
        if (count == 1 && total > 0) { for (int i2 = 0; i2 < m; i2++) free(grid[i2]); free(grid); free(parent); free(rank); return i + 1; }
    }
    for (int i = 0; i < m; i++) free(grid[i]); free(grid); free(parent); free(rank);
    return -1;
}
int main() {
    int m, n, k; if (scanf("%d %d %d", &m, &n, &k) != 3) return 0;
    int pos[10000][2]; for (int i = 0; i < k; i++) if (scanf("%d %d", &pos[i][0], &pos[i][1]) != 2) return 0;
    printf("%d\\n", firstSingleIsland(m, n, pos, k)); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
class DSU { public:
    vector<int> parent, rank; int count, total;
    DSU() : count(0), total(0) {}
    void init(int n) { parent.resize(n); rank.resize(n, 0); for (int i = 0; i < n; i++) parent[i] = i; }
    int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
    void unite(int x, int y) {
        int rx = find(x), ry = find(y); if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry; else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; } count--;
    }
};
int firstSingleIsland(int m, int n, vector<vector<int>>& positions) {
    vector<vector<int>> grid(m, vector<int>(n, 0)); DSU dsu; dsu.init(m * n);
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    for (int i = 0; i < (int)positions.size(); i++) {
        int r = positions[i][0], c = positions[i][1], idx = r * n + c;
        if (grid[r][c] == 0) { grid[r][c] = 1; dsu.parent[idx] = idx; dsu.count++; dsu.total++;
            for (auto& d : dirs) { int nr = r + d[0], nc = c + d[1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) dsu.unite(idx, nr * n + nc); } }
        if (dsu.count == 1 && dsu.total > 0) return i + 1;
    }
    return -1;
}
int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL);
    int m, n, k; if (cin >> m >> n >> k) {
        vector<vector<int>> positions(k, vector<int>(2));
        for (int i = 0; i < k; i++) cin >> positions[i][0] >> positions[i][1];
        cout << firstSingleIsland(m, n, positions) << "\\n";
    }
    return 0;
}`
  },
  'noi2-h1': {
    python: `def num_islands_ii(m, n, positions):
    result = []
    grid = [[0] * n for _ in range(m)]
    count = 0
    parent = {}
    rank = {}
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    def union(x, y):
        nonlocal count
        rx, ry = find(x), find(y)
        if rx == ry: return
        if rank[rx] < rank[ry]: parent[rx] = ry
        elif rank[rx] > rank[ry]: parent[ry] = rx
        else: parent[ry] = rx; rank[rx] += 1
        count -= 1
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    for r, c in positions:
        idx = r * n + c
        if grid[r][c] == 0:
            grid[r][c] = 1
            parent[idx] = idx
            rank[idx] = 0
            count += 1
            for dr, dc in dirs:
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:
                    union(idx, nr * n + nc)
        result.append(count)
    return result

m, n = map(int, input().split())
k = int(input())
positions = [list(map(int, input().split())) for _ in range(k)]
result = num_islands_ii(m, n, positions)
print(' '.join(map(str, result)))`,
    java: `import java.util.*;
public class Solution {
    static int[] parent, rank; static int count;
    public static int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
    public static void union(int x, int y) {
        int rx = find(x), ry = find(y); if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry; else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; } count--;
    }
    public static List<Integer> numIslands2(int m, int n, int[][] positions) {
        int[][] grid = new int[m][n]; parent = new int[m * n]; rank = new int[m * n]; count = 0;
        int[][] dirs = {{0,1},{0,-1},{1,0},{-1,0}}; List<Integer> res = new ArrayList<>();
        for (int[] pos : positions) {
            int r = pos[0], c = pos[1], idx = r * n + c;
            if (grid[r][c] == 0) { grid[r][c] = 1; parent[idx] = idx; count++;
                for (int[] d : dirs) { int nr = r + d[0], nc = c + d[1];
                    if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) union(idx, nr * n + nc); } }
            res.add(count);
        }
        return res;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in); if (sc.hasNextInt()) {
            int m = sc.nextInt(), n = sc.nextInt(), k = sc.nextInt();
            int[][] pos = new int[k][2];
            for (int i = 0; i < k; i++) { pos[i][0] = sc.nextInt(); pos[i][1] = sc.nextInt(); }
            List<Integer> res = numIslands2(m, n, pos);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.size(); i++) { if (i > 0) sb.append(" "); sb.append(res.get(i)); }
            System.out.println(sb);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int* parent, *rank; int count;
int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
void unionSets(int x, int y) {
    int rx = find(x), ry = find(y); if (rx == ry) return;
    if (rank[rx] < rank[ry]) parent[rx] = ry; else if (rank[rx] > rank[ry]) parent[ry] = rx;
    else { parent[ry] = rx; rank[rx]++; } count--;
}
int* numIslands2(int m, int n, int positions[][2], int k, int* returnSize) {
    *returnSize = k; int** grid = (int**)calloc(m, sizeof(int*));
    for (int i = 0; i < m; i++) grid[i] = (int*)calloc(n, sizeof(int));
    parent = (int*)malloc(m * n * sizeof(int)); rank = (int*)calloc(m * n, sizeof(int));
    count = 0; int* res = (int*)malloc(k * sizeof(int));
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    for (int i = 0; i < k; i++) {
        int r = positions[i][0], c = positions[i][1], idx = r * n + c;
        if (grid[r][c] == 0) { grid[r][c] = 1; parent[idx] = idx; count++;
            for (int d = 0; d < 4; d++) { int nr = r + dirs[d][0], nc = c + dirs[d][1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) unionSets(idx, nr * n + nc); } }
        res[i] = count;
    }
    for (int i = 0; i < m; i++) free(grid[i]); free(grid); free(parent); free(rank);
    return res;
}
int main() {
    int m, n, k; if (scanf("%d %d %d", &m, &n, &k) != 3) return 0;
    int pos[10000][2]; for (int i = 0; i < k; i++) if (scanf("%d %d", &pos[i][0], &pos[i][1]) != 2) return 0;
    int returnSize; int* res = numIslands2(m, n, pos, k, &returnSize);
    for (int i = 0; i < returnSize; i++) { if (i > 0) printf(" "); printf("%d", res[i]); }
    printf("\\n"); free(res); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
class DSU { public:
    vector<int> parent, rank; int count;
    DSU(int n) : count(0) { parent.resize(n); rank.resize(n, 0); for (int i = 0; i < n; i++) parent[i] = i; }
    int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
    void unite(int x, int y) {
        int rx = find(x), ry = find(y); if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry; else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; } count--;
    }
};
vector<int> numIslands2(int m, int n, vector<vector<int>>& positions) {
    vector<vector<int>> grid(m, vector<int>(n, 0)); DSU dsu(m * n);
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}}; vector<int> res;
    for (auto& pos : positions) {
        int r = pos[0], c = pos[1], idx = r * n + c;
        if (grid[r][c] == 0) { grid[r][c] = 1; dsu.parent[idx] = idx; dsu.count++;
            for (auto& d : dirs) { int nr = r + d[0], nc = c + d[1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) dsu.unite(idx, nr * n + nc); } }
        res.push_back(dsu.count);
    }
    return res;
}
int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL);
    int m, n, k; if (cin >> m >> n >> k) {
        vector<vector<int>> positions(k, vector<int>(2));
        for (int i = 0; i < k; i++) cin >> positions[i][0] >> positions[i][1];
        vector<int> res = numIslands2(m, n, positions);
        for (int i = 0; i < (int)res.size(); i++) { if (i > 0) cout << " "; cout << res[i]; }
        cout << "\\n";
    }
    return 0;
}`
  },
  'noi2-h2': {
    python: `def island_sizes(m, n, positions):
    result = []
    grid = [[0] * n for _ in range(m)]
    parent = {}
    rank = {}
    size = {}
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    def union(x, y):
        rx, ry = find(x), find(y)
        if rx == ry: return ry
        if rank[rx] < rank[ry]:
            parent[rx] = ry
            size[ry] += size[rx]
            return ry
        elif rank[rx] > rank[ry]:
            parent[ry] = rx
            size[rx] += size[ry]
            return rx
        else:
            parent[ry] = rx
            size[rx] += size[ry]
            rank[rx] += 1
            return rx
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    for r, c in positions:
        idx = r * n + c
        if grid[r][c] == 0:
            grid[r][c] = 1
            parent[idx] = idx
            rank[idx] = 0
            size[idx] = 1
            for dr, dc in dirs:
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:
                    root = union(idx, nr * n + nc)
            result.append(size[find(idx)])
        else:
            result.append(size[find(idx)])
    return result

m, n = map(int, input().split())
k = int(input())
positions = [list(map(int, input().split())) for _ in range(k)]
result = island_sizes(m, n, positions)
print(' '.join(map(str, result)))`,
    java: `import java.util.*;
public class Solution {
    static int[] parent, rank, size;
    public static int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
    public static int union(int x, int y) {
        int rx = find(x), ry = find(y); if (rx == ry) return rx;
        if (rank[rx] < rank[ry]) { parent[rx] = ry; size[ry] += size[rx]; return ry; }
        else if (rank[rx] > rank[ry]) { parent[ry] = rx; size[rx] += size[ry]; return rx; }
        else { parent[ry] = rx; size[rx] += size[ry]; rank[rx]++; return rx; }
    }
    public static List<Integer> islandSizes(int m, int n, int[][] positions) {
        int[][] grid = new int[m][n]; int total = m * n;
        parent = new int[total]; rank = new int[total]; size = new int[total];
        List<Integer> res = new ArrayList<>();
        int[][] dirs = {{0,1},{0,-1},{1,0},{-1,0}};
        for (int[] pos : positions) {
            int r = pos[0], c = pos[1], idx = r * n + c;
            if (grid[r][c] == 0) { grid[r][c] = 1; parent[idx] = idx; size[idx] = 1;
                for (int[] d : dirs) { int nr = r + d[0], nc = c + d[1];
                    if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1)
                        union(idx, nr * n + nc); } }
            res.add(size[find(idx)]);
        }
        return res;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in); if (sc.hasNextInt()) {
            int m = sc.nextInt(), n = sc.nextInt(), k = sc.nextInt();
            int[][] pos = new int[k][2];
            for (int i = 0; i < k; i++) { pos[i][0] = sc.nextInt(); pos[i][1] = sc.nextInt(); }
            List<Integer> res = islandSizes(m, n, pos);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.size(); i++) { if (i > 0) sb.append(" "); sb.append(res.get(i)); }
            System.out.println(sb);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int* parent, *rank, *size;
int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
int unionSets(int x, int y) {
    int rx = find(x), ry = find(y); if (rx == ry) return rx;
    if (rank[rx] < rank[ry]) { parent[rx] = ry; size[ry] += size[rx]; return ry; }
    else if (rank[rx] > rank[ry]) { parent[ry] = rx; size[rx] += size[ry]; return rx; }
    else { parent[ry] = rx; size[rx] += size[ry]; rank[rx]++; return rx; }
}
int* islandSizes(int m, int n, int positions[][2], int k, int* returnSize) {
    *returnSize = k; int** grid = (int**)calloc(m, sizeof(int*));
    for (int i = 0; i < m; i++) grid[i] = (int*)calloc(n, sizeof(int));
    int total = m * n; parent = (int*)malloc(total * sizeof(int));
    rank = (int*)calloc(total, sizeof(int)); size = (int*)calloc(total, sizeof(int));
    int* res = (int*)malloc(k * sizeof(int));
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    for (int i = 0; i < k; i++) {
        int r = positions[i][0], c = positions[i][1], idx = r * n + c;
        if (grid[r][c] == 0) { grid[r][c] = 1; parent[idx] = idx; size[idx] = 1;
            for (int d = 0; d < 4; d++) { int nr = r + dirs[d][0], nc = c + dirs[d][1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) unionSets(idx, nr * n + nc); } }
        res[i] = size[find(idx)];
    }
    for (int i = 0; i < m; i++) free(grid[i]); free(grid); free(parent); free(rank); free(size);
    return res;
}
int main() {
    int m, n, k; if (scanf("%d %d %d", &m, &n, &k) != 3) return 0;
    int pos[10000][2]; for (int i = 0; i < k; i++) if (scanf("%d %d", &pos[i][0], &pos[i][1]) != 2) return 0;
    int returnSize; int* res = islandSizes(m, n, pos, k, &returnSize);
    for (int i = 0; i < returnSize; i++) { if (i > 0) printf(" "); printf("%d", res[i]); }
    printf("\\n"); free(res); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
class DSU { public:
    vector<int> parent, rank, sz;
    void init(int n) { parent.resize(n); rank.resize(n, 0); sz.resize(n, 0); for (int i = 0; i < n; i++) parent[i] = i; }
    int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
    int unite(int x, int y) {
        int rx = find(x), ry = find(y); if (rx == ry) return rx;
        if (rank[rx] < rank[ry]) { parent[rx] = ry; sz[ry] += sz[rx]; return ry; }
        else if (rank[rx] > rank[ry]) { parent[ry] = rx; sz[rx] += sz[ry]; return rx; }
        else { parent[ry] = rx; sz[rx] += sz[ry]; rank[rx]++; return rx; }
    }
};
vector<int> islandSizes(int m, int n, vector<vector<int>>& positions) {
    vector<vector<int>> grid(m, vector<int>(n, 0)); DSU dsu; dsu.init(m * n);
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}}; vector<int> res;
    for (auto& pos : positions) {
        int r = pos[0], c = pos[1], idx = r * n + c;
        if (grid[r][c] == 0) { grid[r][c] = 1; dsu.parent[idx] = idx; dsu.sz[idx] = 1;
            for (auto& d : dirs) { int nr = r + d[0], nc = c + d[1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) dsu.unite(idx, nr * n + nc); } }
        res.push_back(dsu.sz[dsu.find(idx)]);
    }
    return res;
}
int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL);
    int m, n, k; if (cin >> m >> n >> k) {
        vector<vector<int>> positions(k, vector<int>(2));
        for (int i = 0; i < k; i++) cin >> positions[i][0] >> positions[i][1];
        vector<int> res = islandSizes(m, n, positions);
        for (int i = 0; i < (int)res.size(); i++) { if (i > 0) cout << " "; cout << res[i]; }
        cout << "\\n";
    }
    return 0;
}`
  },
  'noi2-h3': {
    python: `def largest_island(m, n, positions):
    result = []
    grid = [[0] * n for _ in range(m)]
    parent = {}
    rank = {}
    size = {}
    max_size = 0
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    def union(x, y):
        nonlocal max_size
        rx, ry = find(x), find(y)
        if rx == ry: return
        if rank[rx] < rank[ry]:
            parent[rx] = ry
            size[ry] += size[rx]
            max_size = max(max_size, size[ry])
        elif rank[rx] > rank[ry]:
            parent[ry] = rx
            size[rx] += size[ry]
            max_size = max(max_size, size[rx])
        else:
            parent[ry] = rx
            size[rx] += size[ry]
            rank[rx] += 1
            max_size = max(max_size, size[rx])
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    for r, c in positions:
        idx = r * n + c
        if grid[r][c] == 0:
            grid[r][c] = 1
            parent[idx] = idx
            rank[idx] = 0
            size[idx] = 1
            max_size = max(max_size, 1)
            for dr, dc in dirs:
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:
                    union(idx, nr * n + nc)
        result.append(max_size)
    return result

m, n = map(int, input().split())
k = int(input())
positions = [list(map(int, input().split())) for _ in range(k)]
result = largest_island(m, n, positions)
print(' '.join(map(str, result)))`,
    java: `import java.util.*;
public class Solution {
    static int[] parent, rank, size; static int maxSize;
    public static int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
    public static void union(int x, int y) {
        int rx = find(x), ry = find(y); if (rx == ry) return;
        if (rank[rx] < rank[ry]) { parent[rx] = ry; size[ry] += size[rx]; maxSize = Math.max(maxSize, size[ry]); }
        else if (rank[rx] > rank[ry]) { parent[ry] = rx; size[rx] += size[ry]; maxSize = Math.max(maxSize, size[rx]); }
        else { parent[ry] = rx; size[rx] += size[ry]; rank[rx]++; maxSize = Math.max(maxSize, size[rx]); }
    }
    public static List<Integer> largestIsland(int m, int n, int[][] positions) {
        int[][] grid = new int[m][n]; int total = m * n;
        parent = new int[total]; rank = new int[total]; size = new int[total]; maxSize = 0;
        List<Integer> res = new ArrayList<>();
        int[][] dirs = {{0,1},{0,-1},{1,0},{-1,0}};
        for (int[] pos : positions) {
            int r = pos[0], c = pos[1], idx = r * n + c;
            if (grid[r][c] == 0) { grid[r][c] = 1; parent[idx] = idx; size[idx] = 1; maxSize = Math.max(maxSize, 1);
                for (int[] d : dirs) { int nr = r + d[0], nc = c + d[1];
                    if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) union(idx, nr * n + nc); } }
            res.add(maxSize);
        }
        return res;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in); if (sc.hasNextInt()) {
            int m = sc.nextInt(), n = sc.nextInt(), k = sc.nextInt();
            int[][] pos = new int[k][2];
            for (int i = 0; i < k; i++) { pos[i][0] = sc.nextInt(); pos[i][1] = sc.nextInt(); }
            List<Integer> res = largestIsland(m, n, pos);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.size(); i++) { if (i > 0) sb.append(" "); sb.append(res.get(i)); }
            System.out.println(sb);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int* parent, *rank, *size; int maxSize;
int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
void unionSets(int x, int y) {
    int rx = find(x), ry = find(y); if (rx == ry) return;
    if (rank[rx] < rank[ry]) { parent[rx] = ry; size[ry] += size[rx]; if (size[ry] > maxSize) maxSize = size[ry]; }
    else if (rank[rx] > rank[ry]) { parent[ry] = rx; size[rx] += size[ry]; if (size[rx] > maxSize) maxSize = size[rx]; }
    else { parent[ry] = rx; size[rx] += size[ry]; rank[rx]++; if (size[rx] > maxSize) maxSize = size[rx]; }
}
int* largestIsland(int m, int n, int positions[][2], int k, int* returnSize) {
    *returnSize = k; int** grid = (int**)calloc(m, sizeof(int*));
    for (int i = 0; i < m; i++) grid[i] = (int*)calloc(n, sizeof(int));
    int total = m * n; parent = (int*)malloc(total * sizeof(int));
    rank = (int*)calloc(total, sizeof(int)); size = (int*)calloc(total, sizeof(int)); maxSize = 0;
    int* res = (int*)malloc(k * sizeof(int));
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    for (int i = 0; i < k; i++) {
        int r = positions[i][0], c = positions[i][1], idx = r * n + c;
        if (grid[r][c] == 0) { grid[r][c] = 1; parent[idx] = idx; size[idx] = 1; if (1 > maxSize) maxSize = 1;
            for (int d = 0; d < 4; d++) { int nr = r + dirs[d][0], nc = c + dirs[d][1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) unionSets(idx, nr * n + nc); } }
        res[i] = maxSize;
    }
    for (int i = 0; i < m; i++) free(grid[i]); free(grid); free(parent); free(rank); free(size);
    return res;
}
int main() {
    int m, n, k; if (scanf("%d %d %d", &m, &n, &k) != 3) return 0;
    int pos[10000][2]; for (int i = 0; i < k; i++) if (scanf("%d %d", &pos[i][0], &pos[i][1]) != 2) return 0;
    int returnSize; int* res = largestIsland(m, n, pos, k, &returnSize);
    for (int i = 0; i < returnSize; i++) { if (i > 0) printf(" "); printf("%d", res[i]); }
    printf("\\n"); free(res); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
class DSU { public:
    vector<int> parent, rank, sz; int maxSize;
    DSU() : maxSize(0) {}
    void init(int n) { parent.resize(n); rank.resize(n, 0); sz.resize(n, 0); for (int i = 0; i < n; i++) parent[i] = i; }
    int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
    void unite(int x, int y) {
        int rx = find(x), ry = find(y); if (rx == ry) return;
        if (rank[rx] < rank[ry]) { parent[rx] = ry; sz[ry] += sz[rx]; maxSize = max(maxSize, sz[ry]); }
        else if (rank[rx] > rank[ry]) { parent[ry] = rx; sz[rx] += sz[ry]; maxSize = max(maxSize, sz[rx]); }
        else { parent[ry] = rx; sz[rx] += sz[ry]; rank[rx]++; maxSize = max(maxSize, sz[rx]); }
    }
};
vector<int> largestIsland(int m, int n, vector<vector<int>>& positions) {
    vector<vector<int>> grid(m, vector<int>(n, 0)); DSU dsu; dsu.init(m * n);
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}}; vector<int> res;
    for (auto& pos : positions) {
        int r = pos[0], c = pos[1], idx = r * n + c;
        if (grid[r][c] == 0) { grid[r][c] = 1; dsu.parent[idx] = idx; dsu.sz[idx] = 1; dsu.maxSize = max(dsu.maxSize, 1);
            for (auto& d : dirs) { int nr = r + d[0], nc = c + d[1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) dsu.unite(idx, nr * n + nc); } }
        res.push_back(dsu.maxSize);
    }
    return res;
}
int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL);
    int m, n, k; if (cin >> m >> n >> k) {
        vector<vector<int>> positions(k, vector<int>(2));
        for (int i = 0; i < k; i++) cin >> positions[i][0] >> positions[i][1];
        vector<int> res = largestIsland(m, n, positions);
        for (int i = 0; i < (int)res.size(); i++) { if (i > 0) cout << " "; cout << res[i]; }
        cout << "\\n";
    }
    return 0;
}`
  },
  'noi2-h4': {
    python: `def distinct_island_sizes(m, n, positions):
    grid = [[0] * n for _ in range(m)]
    parent = {}
    rank = {}
    size = {}
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    def union(x, y):
        rx, ry = find(x), find(y)
        if rx == ry: return
        if rank[rx] < rank[ry]:
            parent[rx] = ry
            size[ry] += size[rx]
        elif rank[rx] > rank[ry]:
            parent[ry] = rx
            size[rx] += size[ry]
        else:
            parent[ry] = rx
            size[rx] += size[ry]
            rank[rx] += 1
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    for r, c in positions:
        idx = r * n + c
        if grid[r][c] == 0:
            grid[r][c] = 1
            parent[idx] = idx
            rank[idx] = 0
            size[idx] = 1
            for dr, dc in dirs:
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:
                    union(idx, nr * n + nc)
    distinct = set()
    for i in range(m):
        for j in range(n):
            if grid[i][j] == 1:
                distinct.add(size[find(i * n + j)])
    return len(distinct)

m, n = map(int, input().split())
k = int(input())
positions = [list(map(int, input().split())) for _ in range(k)]
print(distinct_island_sizes(m, n, positions))`,
    java: `import java.util.*;
public class Solution {
    static int[] parent, rank, size;
    public static int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
    public static void union(int x, int y) {
        int rx = find(x), ry = find(y); if (rx == ry) return;
        if (rank[rx] < rank[ry]) { parent[rx] = ry; size[ry] += size[rx]; }
        else if (rank[rx] > rank[ry]) { parent[ry] = rx; size[rx] += size[ry]; }
        else { parent[ry] = rx; size[rx] += size[ry]; rank[rx]++; }
    }
    public static int distinctIslandSizes(int m, int n, int[][] positions) {
        int[][] grid = new int[m][n]; int total = m * n;
        parent = new int[total]; rank = new int[total]; size = new int[total];
        int[][] dirs = {{0,1},{0,-1},{1,0},{-1,0}};
        for (int[] pos : positions) {
            int r = pos[0], c = pos[1], idx = r * n + c;
            if (grid[r][c] == 0) { grid[r][c] = 1; parent[idx] = idx; size[idx] = 1;
                for (int[] d : dirs) { int nr = r + d[0], nc = c + d[1];
                    if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) union(idx, nr * n + nc); } }
        }
        Set<Integer> distinct = new HashSet<>();
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++)
                if (grid[i][j] == 1) distinct.add(size[find(i * n + j)]);
        return distinct.size();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in); if (sc.hasNextInt()) {
            int m = sc.nextInt(), n = sc.nextInt(), k = sc.nextInt();
            int[][] pos = new int[k][2];
            for (int i = 0; i < k; i++) { pos[i][0] = sc.nextInt(); pos[i][1] = sc.nextInt(); }
            System.out.println(distinctIslandSizes(m, n, pos));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int* parent, *rank, *size;
int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
void unionSets(int x, int y) {
    int rx = find(x), ry = find(y); if (rx == ry) return;
    if (rank[rx] < rank[ry]) { parent[rx] = ry; size[ry] += size[rx]; }
    else if (rank[rx] > rank[ry]) { parent[ry] = rx; size[rx] += size[ry]; }
    else { parent[ry] = rx; size[rx] += size[ry]; rank[rx]++; }
}
int cmp(const void* a, const void* b) { return *(int*)a - *(int*)b; }
int distinctIslandSizes(int m, int n, int positions[][2], int k) {
    int** grid = (int**)calloc(m, sizeof(int*));
    for (int i = 0; i < m; i++) grid[i] = (int*)calloc(n, sizeof(int));
    int total = m * n; parent = (int*)malloc(total * sizeof(int));
    rank = (int*)calloc(total, sizeof(int)); size = (int*)calloc(total, sizeof(int));
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    for (int i = 0; i < k; i++) {
        int r = positions[i][0], c = positions[i][1], idx = r * n + c;
        if (grid[r][c] == 0) { grid[r][c] = 1; parent[idx] = idx; size[idx] = 1;
            for (int d = 0; d < 4; d++) { int nr = r + dirs[d][0], nc = c + dirs[d][1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) unionSets(idx, nr * n + nc); } }
    }
    int* sizes = (int*)malloc(total * sizeof(int)); int scnt = 0;
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            if (grid[i][j] == 1) { int s = size[find(i * n + j)]; int found = 0;
                for (int t = 0; t < scnt; t++) if (sizes[t] == s) { found = 1; break; }
                if (!found) sizes[scnt++] = s; }
    int res = scnt;
    for (int i = 0; i < m; i++) free(grid[i]); free(grid); free(parent); free(rank); free(size); free(sizes);
    return res;
}
int main() {
    int m, n, k; if (scanf("%d %d %d", &m, &n, &k) != 3) return 0;
    int pos[10000][2]; for (int i = 0; i < k; i++) if (scanf("%d %d", &pos[i][0], &pos[i][1]) != 2) return 0;
    printf("%d\\n", distinctIslandSizes(m, n, pos, k)); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;
class DSU { public:
    vector<int> parent, rank, sz;
    void init(int n) { parent.resize(n); rank.resize(n, 0); sz.resize(n, 0); for (int i = 0; i < n; i++) parent[i] = i; }
    int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
    void unite(int x, int y) {
        int rx = find(x), ry = find(y); if (rx == ry) return;
        if (rank[rx] < rank[ry]) { parent[rx] = ry; sz[ry] += sz[rx]; }
        else if (rank[rx] > rank[ry]) { parent[ry] = rx; sz[rx] += sz[ry]; }
        else { parent[ry] = rx; sz[rx] += sz[ry]; rank[rx]++; }
    }
};
int distinctIslandSizes(int m, int n, vector<vector<int>>& positions) {
    vector<vector<int>> grid(m, vector<int>(n, 0)); DSU dsu; dsu.init(m * n);
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    for (auto& pos : positions) {
        int r = pos[0], c = pos[1], idx = r * n + c;
        if (grid[r][c] == 0) { grid[r][c] = 1; dsu.parent[idx] = idx; dsu.sz[idx] = 1;
            for (auto& d : dirs) { int nr = r + d[0], nc = c + d[1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) dsu.unite(idx, nr * n + nc); } }
    }
    unordered_set<int> distinct;
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            if (grid[i][j] == 1) distinct.insert(dsu.sz[dsu.find(i * n + j)]);
    return distinct.size();
}
int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL);
    int m, n, k; if (cin >> m >> n >> k) {
        vector<vector<int>> positions(k, vector<int>(2));
        for (int i = 0; i < k; i++) cin >> positions[i][0] >> positions[i][1];
        cout << distinctIslandSizes(m, n, positions) << "\\n";
    }
    return 0;
}`
  },
  'noi2-h5': {
    python: `def min_ops_one_island(m, n, positions):
    grid = [[0] * n for _ in range(m)]
    count = 0
    total = 0
    parent = {}
    rank = {}
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    def union(x, y):
        nonlocal count
        rx, ry = find(x), find(y)
        if rx == ry: return
        if rank[rx] < rank[ry]: parent[rx] = ry
        elif rank[rx] > rank[ry]: parent[ry] = rx
        else: parent[ry] = rx; rank[rx] += 1
        count -= 1
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    for idx_pos, (r, c) in enumerate(positions):
        idx = r * n + c
        if grid[r][c] == 0:
            grid[r][c] = 1
            parent[idx] = idx
            rank[idx] = 0
            count += 1
            total += 1
            for dr, dc in dirs:
                nr, nc = r + dr, c + dc
                if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:
                    union(idx, nr * n + nc)
        if count == 1 and total > 0:
            return idx_pos + 1
    return -1

m, n = map(int, input().split())
k = int(input())
positions = [list(map(int, input().split())) for _ in range(k)]
print(min_ops_one_island(m, n, positions))`,
    java: `import java.util.*;
public class Solution {
    static int[] parent, rank; static int count, total;
    public static int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
    public static void union(int x, int y) {
        int rx = find(x), ry = find(y); if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry; else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; } count--;
    }
    public static int minOpsOneIsland(int m, int n, int[][] positions) {
        int[][] grid = new int[m][n]; parent = new int[m * n]; rank = new int[m * n]; count = 0; total = 0;
        int[][] dirs = {{0,1},{0,-1},{1,0},{-1,0}};
        for (int i = 0; i < positions.length; i++) {
            int r = positions[i][0], c = positions[i][1], idx = r * n + c;
            if (grid[r][c] == 0) { grid[r][c] = 1; parent[idx] = idx; count++; total++;
                for (int[] d : dirs) { int nr = r + d[0], nc = c + d[1];
                    if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) union(idx, nr * n + nc); } }
            if (count == 1 && total > 0) return i + 1;
        }
        return -1;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in); if (sc.hasNextInt()) {
            int m = sc.nextInt(), n = sc.nextInt(), k = sc.nextInt();
            int[][] pos = new int[k][2];
            for (int i = 0; i < k; i++) { pos[i][0] = sc.nextInt(); pos[i][1] = sc.nextInt(); }
            System.out.println(minOpsOneIsland(m, n, pos));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int* parent, *rank; int count, total;
int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
void unionSets(int x, int y) {
    int rx = find(x), ry = find(y); if (rx == ry) return;
    if (rank[rx] < rank[ry]) parent[rx] = ry; else if (rank[rx] > rank[ry]) parent[ry] = rx;
    else { parent[ry] = rx; rank[rx]++; } count--;
}
int minOpsOneIsland(int m, int n, int positions[][2], int k) {
    int** grid = (int**)calloc(m, sizeof(int*));
    for (int i = 0; i < m; i++) grid[i] = (int*)calloc(n, sizeof(int));
    parent = (int*)malloc(m * n * sizeof(int)); rank = (int*)calloc(m * n, sizeof(int)); count = 0; total = 0;
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    for (int i = 0; i < k; i++) {
        int r = positions[i][0], c = positions[i][1], idx = r * n + c;
        if (grid[r][c] == 0) { grid[r][c] = 1; parent[idx] = idx; count++; total++;
            for (int d = 0; d < 4; d++) { int nr = r + dirs[d][0], nc = c + dirs[d][1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) unionSets(idx, nr * n + nc); } }
        if (count == 1 && total > 0) { for (int i2 = 0; i2 < m; i2++) free(grid[i2]); free(grid); free(parent); free(rank); return i + 1; }
    }
    for (int i = 0; i < m; i++) free(grid[i]); free(grid); free(parent); free(rank);
    return -1;
}
int main() {
    int m, n, k; if (scanf("%d %d %d", &m, &n, &k) != 3) return 0;
    int pos[10000][2]; for (int i = 0; i < k; i++) if (scanf("%d %d", &pos[i][0], &pos[i][1]) != 2) return 0;
    printf("%d\\n", minOpsOneIsland(m, n, pos, k)); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
class DSU { public:
    vector<int> parent, rank; int count, total;
    DSU() : count(0), total(0) {}
    void init(int n) { parent.resize(n); rank.resize(n, 0); for (int i = 0; i < n; i++) parent[i] = i; }
    int find(int x) { while (parent[x] != x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; }
    void unite(int x, int y) {
        int rx = find(x), ry = find(y); if (rx == ry) return;
        if (rank[rx] < rank[ry]) parent[rx] = ry; else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; } count--;
    }
};
int minOpsOneIsland(int m, int n, vector<vector<int>>& positions) {
    vector<vector<int>> grid(m, vector<int>(n, 0)); DSU dsu; dsu.init(m * n);
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    for (int i = 0; i < (int)positions.size(); i++) {
        int r = positions[i][0], c = positions[i][1], idx = r * n + c;
        if (grid[r][c] == 0) { grid[r][c] = 1; dsu.parent[idx] = idx; dsu.count++; dsu.total++;
            for (auto& d : dirs) { int nr = r + d[0], nc = c + d[1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) dsu.unite(idx, nr * n + nc); } }
        if (dsu.count == 1 && dsu.total > 0) return i + 1;
    }
    return -1;
}
int main() {
    ios_base::sync_with_stdio(false); cin.tie(NULL);
    int m, n, k; if (cin >> m >> n >> k) {
        vector<vector<int>> positions(k, vector<int>(2));
        for (int i = 0; i < k; i++) cin >> positions[i][0] >> positions[i][1];
        cout << minOpsOneIsland(m, n, positions) << "\\n";
    }
    return 0;
}`
  }
};