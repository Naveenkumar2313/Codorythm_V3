export const RCsolutions = {
  'rc-e1': {
    python: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n + 1))
        self.rank = [0] * (n + 1)
    def find(self, x):
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]
            x = self.parent[x]
        return x
    def union(self, x, y):
        rx, ry = self.find(x), self.find(y)
        if rx == ry: return False
        if self.rank[rx] < self.rank[ry]:
            self.parent[rx] = ry
        elif self.rank[rx] > self.rank[ry]:
            self.parent[ry] = rx
        else:
            self.parent[ry] = rx
            self.rank[rx] += 1
        return True

def findRedundantConnection(edges):
    dsu = DSU(len(edges))
    for u, v in edges:
        if not dsu.union(u, v):
            return [u, v]
    return []

n = int(input())
edges = [tuple(map(int, input().split())) for _ in range(n)]
res = findRedundantConnection(edges)
print(res[0], res[1])`,
    java: `import java.util.*;

public class Solution {
    static int[] parent, rank;

    public static int find(int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }

    public static boolean union(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return false;
        if (rank[rx] < rank[ry]) {
            parent[rx] = ry;
        } else if (rank[rx] > rank[ry]) {
            parent[ry] = rx;
        } else {
            parent[ry] = rx;
            rank[rx]++;
        }
        return true;
    }

    public static int[] findRedundantConnection(int[][] edges) {
        int n = edges.length;
        parent = new int[n + 1];
        rank = new int[n + 1];
        for (int i = 1; i <= n; i++) parent[i] = i;
        for (int[] e : edges) {
            if (!union(e[0], e[1])) return e;
        }
        return new int[]{};
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] edges = new int[n][2];
            for (int i = 0; i < n; i++) {
                edges[i][0] = sc.nextInt();
                edges[i][1] = sc.nextInt();
            }
            int[] res = findRedundantConnection(edges);
            System.out.println(res[0] + " " + res[1]);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int* parent;
int* rank;

int find(int x) {
    while (parent[x] != x) {
        parent[x] = parent[parent[x]];
        x = parent[x];
    }
    return x;
}

int unionSets(int x, int y) {
    int rx = find(x), ry = find(y);
    if (rx == ry) return 0;
    if (rank[rx] < rank[ry]) {
        parent[rx] = ry;
    } else if (rank[rx] > rank[ry]) {
        parent[ry] = rx;
    } else {
        parent[ry] = rx;
        rank[rx]++;
    }
    return 1;
}

int* findRedundantConnection(int** edges, int edgesSize, int* edgesColSize, int* returnSize) {
    *returnSize = 2;
    parent = (int*)malloc((edgesSize + 1) * sizeof(int));
    rank = (int*)calloc(edgesSize + 1, sizeof(int));
    for (int i = 1; i <= edgesSize; i++) parent[i] = i;
    int* res = (int*)malloc(2 * sizeof(int));
    for (int i = 0; i < edgesSize; i++) {
        if (!unionSets(edges[i][0], edges[i][1])) {
            res[0] = edges[i][0];
            res[1] = edges[i][1];
            free(parent);
            free(rank);
            return res;
        }
    }
    free(parent);
    free(rank);
    return res;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** edges = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        edges[i] = (int*)malloc(2 * sizeof(int));
        if (scanf("%d %d", &edges[i][0], &edges[i][1]) != 2) return 0;
    }
    int returnSize;
    int* res = findRedundantConnection(edges, n, NULL, &returnSize);
    printf("%d %d\\n", res[0], res[1]);
    for (int i = 0; i < n; i++) free(edges[i]);
    free(edges);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

class DSU {
    vector<int> parent, rank;
public:
    DSU(int n) {
        parent.resize(n + 1);
        rank.resize(n + 1, 0);
        for (int i = 1; i <= n; i++) parent[i] = i;
    }
    int find(int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }
    bool unite(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return false;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        return true;
    }
};

vector<int> findRedundantConnection(vector<vector<int>>& edges) {
    DSU dsu(edges.size());
    for (auto& e : edges) {
        if (!dsu.unite(e[0], e[1])) return {e[0], e[1]};
    }
    return {};
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<int>> edges(n, vector<int>(2));
        for (int i = 0; i < n; i++) {
            cin >> edges[i][0] >> edges[i][1];
        }
        vector<int> res = findRedundantConnection(edges);
        cout << res[0] << " " << res[1] << "\\n";
    }
    return 0;
}`
  },
  'rc-e2': {
    python: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n + 1))
        self.rank = [0] * (n + 1)
    def find(self, x):
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]
            x = self.parent[x]
        return x
    def union(self, x, y):
        rx, ry = self.find(x), self.find(y)
        if rx == ry: return False
        if self.rank[rx] < self.rank[ry]:
            self.parent[rx] = ry
        elif self.rank[rx] > self.rank[ry]:
            self.parent[ry] = rx
        else:
            self.parent[ry] = rx
            self.rank[rx] += 1
        return True

def hasCycle(n, edges):
    dsu = DSU(n)
    for u, v in edges:
        if not dsu.union(u, v):
            return True
    return False

n = int(input())
m = int(input())
edges = [tuple(map(int, input().split())) for _ in range(m)]
print(str(hasCycle(n, edges)).lower())`,
    java: `import java.util.*;

public class Solution {
    static int[] parent, rank;

    public static int find(int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }

    public static boolean union(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return false;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        return true;
    }

    public static boolean hasCycle(int n, int[][] edges) {
        parent = new int[n + 1];
        rank = new int[n + 1];
        for (int i = 1; i <= n; i++) parent[i] = i;
        for (int[] e : edges) {
            if (!union(e[0], e[1])) return true;
        }
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int m = sc.nextInt();
            int[][] edges = new int[m][2];
            for (int i = 0; i < m; i++) {
                edges[i][0] = sc.nextInt();
                edges[i][1] = sc.nextInt();
            }
            System.out.println(hasCycle(n, edges));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int* parent;
int* rank;

int find(int x) {
    while (parent[x] != x) {
        parent[x] = parent[parent[x]];
        x = parent[x];
    }
    return x;
}

int unionSets(int x, int y) {
    int rx = find(x), ry = find(y);
    if (rx == ry) return 0;
    if (rank[rx] < rank[ry]) parent[rx] = ry;
    else if (rank[rx] > rank[ry]) parent[ry] = rx;
    else { parent[ry] = rx; rank[rx]++; }
    return 1;
}

bool hasCycle(int n, int** edges, int edgesSize) {
    parent = (int*)malloc((n + 1) * sizeof(int));
    rank = (int*)calloc(n + 1, sizeof(int));
    for (int i = 1; i <= n; i++) parent[i] = i;
    for (int i = 0; i < edgesSize; i++) {
        if (!unionSets(edges[i][0], edges[i][1])) {
            free(parent);
            free(rank);
            return true;
        }
    }
    free(parent);
    free(rank);
    return false;
}

int main() {
    int n, m;
    if (scanf("%d", &n) != 1) return 0;
    if (scanf("%d", &m) != 1) return 0;
    int** edges = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        edges[i] = (int*)malloc(2 * sizeof(int));
        if (scanf("%d %d", &edges[i][0], &edges[i][1]) != 2) return 0;
    }
    printf("%s\\n", hasCycle(n, edges, m) ? "true" : "false");
    for (int i = 0; i < m; i++) free(edges[i]);
    free(edges);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

class DSU {
    vector<int> parent, rank;
public:
    DSU(int n) {
        parent.resize(n + 1);
        rank.resize(n + 1, 0);
        for (int i = 1; i <= n; i++) parent[i] = i;
    }
    int find(int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }
    bool unite(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return false;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        return true;
    }
};

bool hasCycle(int n, vector<vector<int>>& edges) {
    DSU dsu(n);
    for (auto& e : edges) {
        if (!dsu.unite(e[0], e[1])) return true;
    }
    return false;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n, m;
    if (cin >> n >> m) {
        vector<vector<int>> edges(m, vector<int>(2));
        for (int i = 0; i < m; i++) {
            cin >> edges[i][0] >> edges[i][1];
        }
        cout << (hasCycle(n, edges) ? "true" : "false") << "\\n";
    }
    return 0;
}`
  },
  'rc-e3': {
    python: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n + 1))
        self.rank = [0] * (n + 1)
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

def countComponents(n, edges):
    dsu = DSU(n)
    for u, v in edges:
        dsu.union(u, v)
    return dsu.components

n = int(input())
m = int(input())
edges = [tuple(map(int, input().split())) for _ in range(m)]
print(countComponents(n, edges))`,
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

    public static int countComponents(int n, int[][] edges) {
        parent = new int[n + 1];
        rank = new int[n + 1];
        for (int i = 1; i <= n; i++) parent[i] = i;
        components = n;
        for (int[] e : edges) union(e[0], e[1]);
        return components;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int m = sc.nextInt();
            int[][] edges = new int[m][2];
            for (int i = 0; i < m; i++) {
                edges[i][0] = sc.nextInt();
                edges[i][1] = sc.nextInt();
            }
            System.out.println(countComponents(n, edges));
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

int countComponents(int n, int** edges, int edgesSize) {
    parent = (int*)malloc((n + 1) * sizeof(int));
    rank = (int*)calloc(n + 1, sizeof(int));
    for (int i = 1; i <= n; i++) parent[i] = i;
    components = n;
    for (int i = 0; i < edgesSize; i++) unionSets(edges[i][0], edges[i][1]);
    int res = components;
    free(parent);
    free(rank);
    return res;
}

int main() {
    int n, m;
    if (scanf("%d", &n) != 1) return 0;
    if (scanf("%d", &m) != 1) return 0;
    int** edges = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        edges[i] = (int*)malloc(2 * sizeof(int));
        if (scanf("%d %d", &edges[i][0], &edges[i][1]) != 2) return 0;
    }
    printf("%d\\n", countComponents(n, edges, m));
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
        parent.resize(n + 1);
        rank.resize(n + 1, 0);
        for (int i = 1; i <= n; i++) parent[i] = i;
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

int countComponents(int n, vector<vector<int>>& edges) {
    DSU dsu(n);
    for (auto& e : edges) dsu.unite(e[0], e[1]);
    return dsu.getComponents();
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n, m;
    if (cin >> n >> m) {
        vector<vector<int>> edges(m, vector<int>(2));
        for (int i = 0; i < m; i++) {
            cin >> edges[i][0] >> edges[i][1];
        }
        cout << countComponents(n, edges) << "\\n";
    }
    return 0;
}`
  },
  'rc-e4': {
    python: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n + 1))
        self.rank = [0] * (n + 1)
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

def areConnected(n, edges, queries):
    dsu = DSU(n)
    for u, v in edges:
        dsu.union(u, v)
    return [dsu.find(u) == dsu.find(v) for u, v in queries]

n = int(input())
m = int(input())
edges = [tuple(map(int, input().split())) for _ in range(m)]
q = int(input())
queries = [tuple(map(int, input().split())) for _ in range(q)]
results = areConnected(n, edges, queries)
print(' '.join(str(r).lower() for r in results))`,
    java: `import java.util.*;

public class Solution {
    static int[] parent, rank;

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
    }

    public static boolean[] areConnected(int n, int[][] edges, int[][] queries) {
        parent = new int[n + 1];
        rank = new int[n + 1];
        for (int i = 1; i <= n; i++) parent[i] = i;
        for (int[] e : edges) union(e[0], e[1]);
        boolean[] res = new boolean[queries.length];
        for (int i = 0; i < queries.length; i++) {
            res[i] = find(queries[i][0]) == find(queries[i][1]);
        }
        return res;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int m = sc.nextInt();
            int[][] edges = new int[m][2];
            for (int i = 0; i < m; i++) {
                edges[i][0] = sc.nextInt();
                edges[i][1] = sc.nextInt();
            }
            int q = sc.nextInt();
            int[][] queries = new int[q][2];
            for (int i = 0; i < q; i++) {
                queries[i][0] = sc.nextInt();
                queries[i][1] = sc.nextInt();
            }
            boolean[] res = areConnected(n, edges, queries);
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
#include <stdbool.h>

int* parent;
int* rank;

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
}

bool* areConnected(int n, int** edges, int edgesSize, int** queries, int queriesSize, int* returnSize) {
    *returnSize = queriesSize;
    parent = (int*)malloc((n + 1) * sizeof(int));
    rank = (int*)calloc(n + 1, sizeof(int));
    for (int i = 1; i <= n; i++) parent[i] = i;
    for (int i = 0; i < edgesSize; i++) unionSets(edges[i][0], edges[i][1]);
    bool* res = (bool*)malloc(queriesSize * sizeof(bool));
    for (int i = 0; i < queriesSize; i++) {
        res[i] = find(queries[i][0]) == find(queries[i][1]);
    }
    free(parent);
    free(rank);
    return res;
}

int main() {
    int n, m;
    if (scanf("%d", &n) != 1) return 0;
    if (scanf("%d", &m) != 1) return 0;
    int** edges = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        edges[i] = (int*)malloc(2 * sizeof(int));
        if (scanf("%d %d", &edges[i][0], &edges[i][1]) != 2) return 0;
    }
    int q;
    if (scanf("%d", &q) != 1) return 0;
    int** queries = (int**)malloc(q * sizeof(int*));
    for (int i = 0; i < q; i++) {
        queries[i] = (int*)malloc(2 * sizeof(int));
        if (scanf("%d %d", &queries[i][0], &queries[i][1]) != 2) return 0;
    }
    int returnSize;
    bool* res = areConnected(n, edges, m, queries, q, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        if (i > 0) printf(" ");
        printf("%s", res[i] ? "true" : "false");
    }
    printf("\\n");
    free(res);
    for (int i = 0; i < m; i++) free(edges[i]);
    free(edges);
    for (int i = 0; i < q; i++) free(queries[i]);
    free(queries);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

class DSU {
    vector<int> parent, rank;
public:
    DSU(int n) {
        parent.resize(n + 1);
        rank.resize(n + 1, 0);
        for (int i = 1; i <= n; i++) parent[i] = i;
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
    }
};

vector<bool> areConnected(int n, vector<vector<int>>& edges, vector<vector<int>>& queries) {
    DSU dsu(n);
    for (auto& e : edges) dsu.unite(e[0], e[1]);
    vector<bool> res;
    for (auto& q : queries) res.push_back(dsu.find(q[0]) == dsu.find(q[1]));
    return res;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n, m;
    if (cin >> n >> m) {
        vector<vector<int>> edges(m, vector<int>(2));
        for (int i = 0; i < m; i++) cin >> edges[i][0] >> edges[i][1];
        int q;
        cin >> q;
        vector<vector<int>> queries(q, vector<int>(2));
        for (int i = 0; i < q; i++) cin >> queries[i][0] >> queries[i][1];
        vector<bool> res = areConnected(n, edges, queries);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << (res[i] ? "true" : "false");
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'rc-e5': {
    python: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n + 1))
        self.rank = [0] * (n + 1)
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

def minEdgesToConnect(n, edges):
    dsu = DSU(n)
    for u, v in edges:
        dsu.union(u, v)
    return dsu.components - 1

n = int(input())
m = int(input())
edges = [tuple(map(int, input().split())) for _ in range(m)]
print(minEdgesToConnect(n, edges))`,
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

    public static int minEdgesToConnect(int n, int[][] edges) {
        parent = new int[n + 1];
        rank = new int[n + 1];
        for (int i = 1; i <= n; i++) parent[i] = i;
        components = n;
        for (int[] e : edges) union(e[0], e[1]);
        return components - 1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int m = sc.nextInt();
            int[][] edges = new int[m][2];
            for (int i = 0; i < m; i++) {
                edges[i][0] = sc.nextInt();
                edges[i][1] = sc.nextInt();
            }
            System.out.println(minEdgesToConnect(n, edges));
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

int minEdgesToConnect(int n, int** edges, int edgesSize) {
    parent = (int*)malloc((n + 1) * sizeof(int));
    rank = (int*)calloc(n + 1, sizeof(int));
    for (int i = 1; i <= n; i++) parent[i] = i;
    components = n;
    for (int i = 0; i < edgesSize; i++) unionSets(edges[i][0], edges[i][1]);
    int res = components - 1;
    free(parent);
    free(rank);
    return res;
}

int main() {
    int n, m;
    if (scanf("%d", &n) != 1) return 0;
    if (scanf("%d", &m) != 1) return 0;
    int** edges = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        edges[i] = (int*)malloc(2 * sizeof(int));
        if (scanf("%d %d", &edges[i][0], &edges[i][1]) != 2) return 0;
    }
    printf("%d\\n", minEdgesToConnect(n, edges, m));
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
        parent.resize(n + 1);
        rank.resize(n + 1, 0);
        for (int i = 1; i <= n; i++) parent[i] = i;
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

int minEdgesToConnect(int n, vector<vector<int>>& edges) {
    DSU dsu(n);
    for (auto& e : edges) dsu.unite(e[0], e[1]);
    return dsu.getComponents() - 1;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n, m;
    if (cin >> n >> m) {
        vector<vector<int>> edges(m, vector<int>(2));
        for (int i = 0; i < m; i++) cin >> edges[i][0] >> edges[i][1];
        cout << minEdgesToConnect(n, edges) << "\\n";
    }
    return 0;
}`
  },
  'rc-m1': {
    python: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n + 1))
        self.rank = [0] * (n + 1)
    def find(self, x):
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]
            x = self.parent[x]
        return x
    def union(self, x, y):
        rx, ry = self.find(x), self.find(y)
        if rx == ry: return False
        if self.rank[rx] < self.rank[ry]:
            self.parent[rx] = ry
        elif self.rank[rx] > self.rank[ry]:
            self.parent[ry] = rx
        else:
            self.parent[ry] = rx
            self.rank[rx] += 1
        return True

def findRedundantDirectedConnection(edges):
    n = len(edges)
    indeg = [0] * (n + 1)
    candidate = -1
    for i, (u, v) in enumerate(edges):
        indeg[v] += 1
        if indeg[v] == 2:
            candidate = i
    if candidate == -1:
        dsu = DSU(n)
        for u, v in edges:
            if not dsu.union(u, v):
                return [u, v]
        return []
    # Try removing each edge that points to the node with indegree 2
    for i in range(candidate, -1, -1):
        u, v = edges[i]
        if indeg[v] == 2:
            dsu = DSU(n)
            valid = True
            for j, (a, b) in enumerate(edges):
                if j == i: continue
                if not dsu.union(a, b):
                    valid = False
                    break
            if valid:
                return [u, v]
    return []

n = int(input())
edges = [tuple(map(int, input().split())) for _ in range(n)]
res = findRedundantDirectedConnection(edges)
print(res[0], res[1])`,
    java: `import java.util.*;

public class Solution {
    static int[] parent, rank;

    public static int find(int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }

    public static boolean union(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return false;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        return true;
    }

    public static int[] findRedundantDirectedConnection(int[][] edges) {
        int n = edges.length;
        int[] indeg = new int[n + 1];
        int candidate = -1;
        for (int i = 0; i < n; i++) {
            indeg[edges[i][1]]++;
            if (indeg[edges[i][1]] == 2) candidate = i;
        }
        if (candidate == -1) {
            parent = new int[n + 1];
            rank = new int[n + 1];
            for (int i = 1; i <= n; i++) parent[i] = i;
            for (int[] e : edges) {
                if (!union(e[0], e[1])) return e;
            }
            return new int[]{};
        }
        for (int i = candidate; i >= 0; i--) {
            if (indeg[edges[i][1]] == 2) {
                parent = new int[n + 1];
                rank = new int[n + 1];
                for (int j = 1; j <= n; j++) parent[j] = j;
                boolean valid = true;
                for (int j = 0; j < n; j++) {
                    if (j == i) continue;
                    if (!union(edges[j][0], edges[j][1])) {
                        valid = false;
                        break;
                    }
                }
                if (valid) return edges[i];
            }
        }
        return new int[]{};
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] edges = new int[n][2];
            for (int i = 0; i < n; i++) {
                edges[i][0] = sc.nextInt();
                edges[i][1] = sc.nextInt();
            }
            int[] res = findRedundantDirectedConnection(edges);
            System.out.println(res[0] + " " + res[1]);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int* parent;
int* rank;

int find(int x) {
    while (parent[x] != x) {
        parent[x] = parent[parent[x]];
        x = parent[x];
    }
    return x;
}

int unionSets(int x, int y) {
    int rx = find(x), ry = find(y);
    if (rx == ry) return 0;
    if (rank[rx] < rank[ry]) parent[rx] = ry;
    else if (rank[rx] > rank[ry]) parent[ry] = rx;
    else { parent[ry] = rx; rank[rx]++; }
    return 1;
}

int* findRedundantDirectedConnection(int** edges, int edgesSize, int* edgesColSize, int* returnSize) {
    *returnSize = 2;
    int n = edgesSize;
    int* indeg = (int*)calloc(n + 1, sizeof(int));
    int candidate = -1;
    for (int i = 0; i < n; i++) {
        indeg[edges[i][1]]++;
        if (indeg[edges[i][1]] == 2) candidate = i;
    }
    int* res = (int*)malloc(2 * sizeof(int));
    if (candidate == -1) {
        parent = (int*)malloc((n + 1) * sizeof(int));
        rank = (int*)calloc(n + 1, sizeof(int));
        for (int i = 1; i <= n; i++) parent[i] = i;
        for (int i = 0; i < n; i++) {
            if (!unionSets(edges[i][0], edges[i][1])) {
                res[0] = edges[i][0]; res[1] = edges[i][1];
                free(parent); free(rank); free(indeg);
                return res;
            }
        }
        free(parent); free(rank); free(indeg);
        return res;
    }
    for (int i = candidate; i >= 0; i--) {
        if (indeg[edges[i][1]] == 2) {
            parent = (int*)malloc((n + 1) * sizeof(int));
            rank = (int*)calloc(n + 1, sizeof(int));
            for (int j = 1; j <= n; j++) parent[j] = j;
            int valid = 1;
            for (int j = 0; j < n && valid; j++) {
                if (j == i) continue;
                if (!unionSets(edges[j][0], edges[j][1])) valid = 0;
            }
            if (valid) {
                res[0] = edges[i][0]; res[1] = edges[i][1];
                free(parent); free(rank); free(indeg);
                return res;
            }
            free(parent); free(rank);
        }
    }
    free(indeg);
    return res;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** edges = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        edges[i] = (int*)malloc(2 * sizeof(int));
        if (scanf("%d %d", &edges[i][0], &edges[i][1]) != 2) return 0;
    }
    int returnSize;
    int* res = findRedundantDirectedConnection(edges, n, NULL, &returnSize);
    printf("%d %d\\n", res[0], res[1]);
    for (int i = 0; i < n; i++) free(edges[i]);
    free(edges);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

class DSU {
    vector<int> parent, rank;
public:
    DSU(int n) {
        parent.resize(n + 1);
        rank.resize(n + 1, 0);
        for (int i = 1; i <= n; i++) parent[i] = i;
    }
    int find(int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }
    bool unite(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return false;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        return true;
    }
};

vector<int> findRedundantDirectedConnection(vector<vector<int>>& edges) {
    int n = edges.size();
    vector<int> indeg(n + 1, 0);
    int candidate = -1;
    for (int i = 0; i < n; i++) {
        indeg[edges[i][1]]++;
        if (indeg[edges[i][1]] == 2) candidate = i;
    }
    if (candidate == -1) {
        DSU dsu(n);
        for (auto& e : edges) {
            if (!dsu.unite(e[0], e[1])) return {e[0], e[1]};
        }
        return {};
    }
    for (int i = candidate; i >= 0; i--) {
        if (indeg[edges[i][1]] == 2) {
            DSU dsu(n);
            bool valid = true;
            for (int j = 0; j < n && valid; j++) {
                if (j == i) continue;
                if (!dsu.unite(edges[j][0], edges[j][1])) valid = false;
            }
            if (valid) return {edges[i][0], edges[i][1]};
        }
    }
    return {};
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<int>> edges(n, vector<int>(2));
        for (int i = 0; i < n; i++) cin >> edges[i][0] >> edges[i][1];
        vector<int> res = findRedundantDirectedConnection(edges);
        cout << res[0] << " " << res[1] << "\\n";
    }
    return 0;
}`
  },
  'rc-m2': {
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

def earliestConnection(n, edges):
    dsu = DSU(n)
    for u, v, t in edges:
        dsu.union(u, v)
        if dsu.components == 1:
            return t
    return -1

n = int(input())
m = int(input())
edges = [tuple(map(int, input().split())) for _ in range(m)]
print(earliestConnection(n, edges))`,
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

    public static int earliestConnection(int n, int[][] edges) {
        parent = new int[n];
        rank = new int[n];
        for (int i = 0; i < n; i++) parent[i] = i;
        components = n;
        for (int[] e : edges) {
            union(e[0], e[1]);
            if (components == 1) return e[2];
        }
        return -1;
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
            System.out.println(earliestConnection(n, edges));
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

int earliestConnection(int n, int** edges, int edgesSize) {
    parent = (int*)malloc(n * sizeof(int));
    rank = (int*)calloc(n, sizeof(int));
    for (int i = 0; i < n; i++) parent[i] = i;
    components = n;
    int res = -1;
    for (int i = 0; i < edgesSize; i++) {
        unionSets(edges[i][0], edges[i][1]);
        if (components == 1) { res = edges[i][2]; break; }
    }
    free(parent);
    free(rank);
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
    printf("%d\\n", earliestConnection(n, edges, m));
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

int earliestConnection(int n, vector<vector<int>>& edges) {
    DSU dsu(n);
    for (auto& e : edges) {
        dsu.unite(e[0], e[1]);
        if (dsu.getComponents() == 1) return e[2];
    }
    return -1;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n, m;
    if (cin >> n >> m) {
        vector<vector<int>> edges(m, vector<int>(3));
        for (int i = 0; i < m; i++) cin >> edges[i][0] >> edges[i][1] >> edges[i][2];
        cout << earliestConnection(n, edges) << "\\n";
    }
    return 0;
}`
  },
  'rc-m3': {
    python: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n + 1))
        self.rank = [0] * (n + 1)
    def find(self, x):
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]
            x = self.parent[x]
        return x
    def union(self, x, y):
        rx, ry = self.find(x), self.find(y)
        if rx == ry: return False
        if self.rank[rx] < self.rank[ry]:
            self.parent[rx] = ry
        elif self.rank[rx] > self.rank[ry]:
            self.parent[ry] = rx
        else:
            self.parent[ry] = rx
            self.rank[rx] += 1
        return True

def smallestRedundantEdge(edges):
    n = len(edges)
    # Find the cycle edges using Union-Find
    dsu = DSU(n)
    cycle_edges = []
    for u, v in edges:
        if not dsu.union(u, v):
            cycle_edges.append((u, v))
    # Among cycle edges, find the lexicographically smallest one
    # that when removed, the graph becomes a tree
    cycle_edges.sort()
    for cu, cv in cycle_edges:
        dsu = DSU(n)
        valid = True
        for u, v in edges:
            if (u == cu and v == cv) or (u == cv and v == cu):
                continue
            if not dsu.union(u, v):
                valid = False
                break
        if valid:
            return [cu, cv]
    return []

n = int(input())
edges = [tuple(map(int, input().split())) for _ in range(n)]
res = smallestRedundantEdge(edges)
print(res[0], res[1])`,
    java: `import java.util.*;

public class Solution {
    static int[] parent, rank;

    public static int find(int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }

    public static boolean union(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return false;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        return true;
    }

    public static int[] smallestRedundantEdge(int[][] edges) {
        int n = edges.length;
        // Find cycle edges
        parent = new int[n + 1];
        rank = new int[n + 1];
        for (int i = 1; i <= n; i++) parent[i] = i;
        List<int[]> cycleEdges = new ArrayList<>();
        for (int[] e : edges) {
            if (!union(e[0], e[1])) cycleEdges.add(new int[]{e[0], e[1]});
        }
        // Sort lexicographically
        cycleEdges.sort((a, b) -> a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]);
        for (int[] ce : cycleEdges) {
            parent = new int[n + 1];
            rank = new int[n + 1];
            for (int i = 1; i <= n; i++) parent[i] = i;
            boolean valid = true;
            for (int[] e : edges) {
                if (e[0] == ce[0] && e[1] == ce[1]) continue;
                if (!union(e[0], e[1])) { valid = false; break; }
            }
            if (valid) return ce;
        }
        return new int[]{};
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] edges = new int[n][2];
            for (int i = 0; i < n; i++) {
                edges[i][0] = sc.nextInt();
                edges[i][1] = sc.nextInt();
            }
            int[] res = smallestRedundantEdge(edges);
            System.out.println(res[0] + " " + res[1]);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int* parent;
int* rank;

int find(int x) {
    while (parent[x] != x) {
        parent[x] = parent[parent[x]];
        x = parent[x];
    }
    return x;
}

int unionSets(int x, int y) {
    int rx = find(x), ry = find(y);
    if (rx == ry) return 0;
    if (rank[rx] < rank[ry]) parent[rx] = ry;
    else if (rank[rx] > rank[ry]) parent[ry] = rx;
    else { parent[ry] = rx; rank[rx]++; }
    return 1;
}

int cmp(const void* a, const void* b) {
    int* ea = *(int**)a, *eb = *(int**)b;
    if (ea[0] != eb[0]) return ea[0] - eb[0];
    return ea[1] - eb[1];
}

int* smallestRedundantEdge(int** edges, int edgesSize, int* edgesColSize, int* returnSize) {
    *returnSize = 2;
    int n = edgesSize;
    parent = (int*)malloc((n + 1) * sizeof(int));
    rank = (int*)calloc(n + 1, sizeof(int));
    for (int i = 1; i <= n; i++) parent[i] = i;
    int** cycle = (int**)malloc(n * sizeof(int*));
    int cycleCnt = 0;
    for (int i = 0; i < n; i++) {
        if (!unionSets(edges[i][0], edges[i][1])) {
            cycle[cycleCnt] = (int*)malloc(2 * sizeof(int));
            cycle[cycleCnt][0] = edges[i][0];
            cycle[cycleCnt][1] = edges[i][1];
            cycleCnt++;
        }
    }
    qsort(cycle, cycleCnt, sizeof(int*), cmp);
    int* res = (int*)malloc(2 * sizeof(int));
    for (int ci = 0; ci < cycleCnt; ci++) {
        free(parent);
        free(rank);
        parent = (int*)malloc((n + 1) * sizeof(int));
        rank = (int*)calloc(n + 1, sizeof(int));
        for (int i = 1; i <= n; i++) parent[i] = i;
        int valid = 1;
        for (int i = 0; i < n && valid; i++) {
            if (edges[i][0] == cycle[ci][0] && edges[i][1] == cycle[ci][1]) continue;
            if (!unionSets(edges[i][0], edges[i][1])) valid = 0;
        }
        if (valid) {
            res[0] = cycle[ci][0]; res[1] = cycle[ci][1];
            for (int j = 0; j < cycleCnt; j++) free(cycle[j]);
            free(cycle);
            free(parent); free(rank);
            return res;
        }
    }
    for (int j = 0; j < cycleCnt; j++) free(cycle[j]);
    free(cycle);
    free(parent); free(rank);
    return res;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** edges = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        edges[i] = (int*)malloc(2 * sizeof(int));
        if (scanf("%d %d", &edges[i][0], &edges[i][1]) != 2) return 0;
    }
    int returnSize;
    int* res = smallestRedundantEdge(edges, n, NULL, &returnSize);
    printf("%d %d\\n", res[0], res[1]);
    for (int i = 0; i < n; i++) free(edges[i]);
    free(edges);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class DSU {
    vector<int> parent, rank;
public:
    DSU(int n) {
        parent.resize(n + 1);
        rank.resize(n + 1, 0);
        for (int i = 1; i <= n; i++) parent[i] = i;
    }
    int find(int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }
    bool unite(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return false;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        return true;
    }
};

vector<int> smallestRedundantEdge(vector<vector<int>>& edges) {
    int n = edges.size();
    DSU dsu(n);
    vector<vector<int>> cycleEdges;
    for (auto& e : edges) {
        if (!dsu.unite(e[0], e[1])) cycleEdges.push_back({e[0], e[1]});
    }
    sort(cycleEdges.begin(), cycleEdges.end());
    for (auto& ce : cycleEdges) {
        DSU dsu2(n);
        bool valid = true;
        for (auto& e : edges) {
            if (e[0] == ce[0] && e[1] == ce[1]) continue;
            if (!dsu2.unite(e[0], e[1])) { valid = false; break; }
        }
        if (valid) return {ce[0], ce[1]};
    }
    return {};
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<int>> edges(n, vector<int>(2));
        for (int i = 0; i < n; i++) cin >> edges[i][0] >> edges[i][1];
        vector<int> res = smallestRedundantEdge(edges);
        cout << res[0] << " " << res[1] << "\\n";
    }
    return 0;
}`
  },
  'rc-m4': {
    python: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n + 1))
        self.rank = [0] * (n + 1)
        self.size = [1] * (n + 1)
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
    def get_max_component(self):
        comp_sizes = {}
        for i in range(1, len(self.parent)):
            root = self.find(i)
            comp_sizes[root] = self.size[root]
        return max(comp_sizes.values())

def minLargestComponentAfterRemoval(n, edges):
    best_edge = edges[0]
    best_max = n + 1
    for skip in range(len(edges)):
        dsu = DSU(n)
        for i, (u, v) in enumerate(edges):
            if i == skip: continue
            dsu.union(u, v)
        cur_max = dsu.get_max_component()
        if cur_max < best_max or (cur_max == best_max and skip >= edges.index(best_edge)):
            best_max = cur_max
            best_edge = edges[skip]
    return list(best_edge)

n = int(input())
m = int(input())
edges = [tuple(map(int, input().split())) for _ in range(m)]
res = minLargestComponentAfterRemoval(n, edges)
print(res[0], res[1])`,
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

    public static int getMaxComponent(int n) {
        int[] compSize = new int[n + 1];
        int max = 0;
        for (int i = 1; i <= n; i++) {
            int root = find(i);
            compSize[root] = size[root];
        }
        for (int i = 1; i <= n; i++) {
            if (compSize[i] > max) max = compSize[i];
        }
        return max;
    }

    public static int[] minLargestComponentAfterRemoval(int n, int[][] edges) {
        int[] bestEdge = edges[0];
        int bestMax = n + 1;
        for (int skip = 0; skip < edges.length; skip++) {
            parent = new int[n + 1];
            rank = new int[n + 1];
            size = new int[n + 1];
            for (int i = 1; i <= n; i++) { parent[i] = i; size[i] = 1; }
            for (int i = 0; i < edges.length; i++) {
                if (i == skip) continue;
                union(edges[i][0], edges[i][1]);
            }
            int curMax = getMaxComponent(n);
            if (curMax < bestMax) {
                bestMax = curMax;
                bestEdge = edges[skip];
            }
        }
        return bestEdge;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int m = sc.nextInt();
            int[][] edges = new int[m][2];
            for (int i = 0; i < m; i++) {
                edges[i][0] = sc.nextInt();
                edges[i][1] = sc.nextInt();
            }
            int[] res = minLargestComponentAfterRemoval(n, edges);
            System.out.println(res[0] + " " + res[1]);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int* parent;
int* rank;
int* size;

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
    if (rank[rx] < rank[ry]) { parent[rx] = ry; size[ry] += size[rx]; }
    else if (rank[rx] > rank[ry]) { parent[ry] = rx; size[rx] += size[ry]; }
    else { parent[ry] = rx; size[rx] += size[ry]; rank[rx]++; }
}

int getMaxComponent(int n) {
    int* compSize = (int*)calloc(n + 1, sizeof(int));
    int max = 0;
    for (int i = 1; i <= n; i++) {
        int root = find(i);
        compSize[root] = size[root];
    }
    for (int i = 1; i <= n; i++) {
        if (compSize[i] > max) max = compSize[i];
    }
    free(compSize);
    return max;
}

int* minLargestComponentAfterRemoval(int n, int** edges, int edgesSize, int* edgesColSize, int* returnSize) {
    *returnSize = 2;
    int* bestEdge = (int*)malloc(2 * sizeof(int));
    bestEdge[0] = edges[0][0]; bestEdge[1] = edges[0][1];
    int bestMax = n + 1;
    for (int skip = 0; skip < edgesSize; skip++) {
        parent = (int*)malloc((n + 1) * sizeof(int));
        rank = (int*)calloc(n + 1, sizeof(int));
        size = (int*)malloc((n + 1) * sizeof(int));
        for (int i = 1; i <= n; i++) { parent[i] = i; size[i] = 1; }
        for (int i = 0; i < edgesSize; i++) {
            if (i == skip) continue;
            unionSets(edges[i][0], edges[i][1]);
        }
        int curMax = getMaxComponent(n);
        if (curMax < bestMax) {
            bestMax = curMax;
            bestEdge[0] = edges[skip][0];
            bestEdge[1] = edges[skip][1];
        }
        free(parent); free(rank); free(size);
    }
    return bestEdge;
}

int main() {
    int n, m;
    if (scanf("%d", &n) != 1) return 0;
    if (scanf("%d", &m) != 1) return 0;
    int** edges = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        edges[i] = (int*)malloc(2 * sizeof(int));
        if (scanf("%d %d", &edges[i][0], &edges[i][1]) != 2) return 0;
    }
    int returnSize;
    int* res = minLargestComponentAfterRemoval(n, edges, m, NULL, &returnSize);
    printf("%d %d\\n", res[0], res[1]);
    for (int i = 0; i < m; i++) free(edges[i]);
    free(edges);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class DSU {
    vector<int> parent, rank, sz;
public:
    DSU(int n) {
        parent.resize(n + 1);
        rank.resize(n + 1, 0);
        sz.resize(n + 1, 1);
        for (int i = 1; i <= n; i++) parent[i] = i;
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
        if (rank[rx] < rank[ry]) { parent[rx] = ry; sz[ry] += sz[rx]; }
        else if (rank[rx] > rank[ry]) { parent[ry] = rx; sz[rx] += sz[ry]; }
        else { parent[ry] = rx; sz[rx] += sz[ry]; rank[rx]++; }
    }
    int getMaxComponent(int n) {
        vector<int> compSize(n + 1, 0);
        int maxComp = 0;
        for (int i = 1; i <= n; i++) {
            int root = find(i);
            compSize[root] = sz[root];
        }
        for (int i = 1; i <= n; i++) {
            if (compSize[i] > maxComp) maxComp = compSize[i];
        }
        return maxComp;
    }
};

vector<int> minLargestComponentAfterRemoval(int n, vector<vector<int>>& edges) {
    vector<int> bestEdge = edges[0];
    int bestMax = n + 1;
    for (int skip = 0; skip < (int)edges.size(); skip++) {
        DSU dsu(n);
        for (int i = 0; i < (int)edges.size(); i++) {
            if (i == skip) continue;
            dsu.unite(edges[i][0], edges[i][1]);
        }
        int curMax = dsu.getMaxComponent(n);
        if (curMax < bestMax) {
            bestMax = curMax;
            bestEdge = edges[skip];
        }
    }
    return bestEdge;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n, m;
    if (cin >> n >> m) {
        vector<vector<int>> edges(m, vector<int>(2));
        for (int i = 0; i < m; i++) cin >> edges[i][0] >> edges[i][1];
        vector<int> res = minLargestComponentAfterRemoval(n, edges);
        cout << res[0] << " " << res[1] << "\\n";
    }
    return 0;
}`
  },
  'rc-m5': {
    python: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n + 1))
        self.rank = [0] * (n + 1)
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

def maxRemovableEdges(n, edges):
    dsu = DSU(n)
    used = 0
    for u, v in edges:
        if dsu.find(u) != dsu.find(v):
            dsu.union(u, v)
            used += 1
    if dsu.components > 1:
        return -1
    return len(edges) - used

n = int(input())
m = int(input())
edges = [tuple(map(int, input().split())) for _ in range(m)]
print(maxRemovableEdges(n, edges))`,
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

    public static boolean union(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return false;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        components--;
        return true;
    }

    public static int maxRemovableEdges(int n, int[][] edges) {
        parent = new int[n + 1];
        rank = new int[n + 1];
        for (int i = 1; i <= n; i++) parent[i] = i;
        components = n;
        int used = 0;
        for (int[] e : edges) {
            if (find(e[0]) != find(e[1])) {
                union(e[0], e[1]);
                used++;
            }
        }
        if (components > 1) return -1;
        return edges.length - used;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int m = sc.nextInt();
            int[][] edges = new int[m][2];
            for (int i = 0; i < m; i++) {
                edges[i][0] = sc.nextInt();
                edges[i][1] = sc.nextInt();
            }
            System.out.println(maxRemovableEdges(n, edges));
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

int unionSets(int x, int y) {
    int rx = find(x), ry = find(y);
    if (rx == ry) return 0;
    if (rank[rx] < rank[ry]) parent[rx] = ry;
    else if (rank[rx] > rank[ry]) parent[ry] = rx;
    else { parent[ry] = rx; rank[rx]++; }
    components--;
    return 1;
}

int maxRemovableEdges(int n, int** edges, int edgesSize) {
    parent = (int*)malloc((n + 1) * sizeof(int));
    rank = (int*)calloc(n + 1, sizeof(int));
    for (int i = 1; i <= n; i++) parent[i] = i;
    components = n;
    int used = 0;
    for (int i = 0; i < edgesSize; i++) {
        if (find(edges[i][0]) != find(edges[i][1])) {
            unionSets(edges[i][0], edges[i][1]);
            used++;
        }
    }
    int res = (components > 1) ? -1 : (edgesSize - used);
    free(parent);
    free(rank);
    return res;
}

int main() {
    int n, m;
    if (scanf("%d", &n) != 1) return 0;
    if (scanf("%d", &m) != 1) return 0;
    int** edges = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        edges[i] = (int*)malloc(2 * sizeof(int));
        if (scanf("%d %d", &edges[i][0], &edges[i][1]) != 2) return 0;
    }
    printf("%d\\n", maxRemovableEdges(n, edges, m));
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
        parent.resize(n + 1);
        rank.resize(n + 1, 0);
        for (int i = 1; i <= n; i++) parent[i] = i;
    }
    int find(int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }
    bool unite(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return false;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        comp--;
        return true;
    }
    int getComponents() { return comp; }
};

int maxRemovableEdges(int n, vector<vector<int>>& edges) {
    DSU dsu(n);
    int used = 0;
    for (auto& e : edges) {
        if (dsu.find(e[0]) != dsu.find(e[1])) {
            dsu.unite(e[0], e[1]);
            used++;
        }
    }
    if (dsu.getComponents() > 1) return -1;
    return (int)edges.size() - used;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n, m;
    if (cin >> n >> m) {
        vector<vector<int>> edges(m, vector<int>(2));
        for (int i = 0; i < m; i++) cin >> edges[i][0] >> edges[i][1];
        cout << maxRemovableEdges(n, edges) << "\\n";
    }
    return 0;
}`
  },
  'rc-h1': {
    python: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n + 1))
        self.rank = [0] * (n + 1)
    def find(self, x):
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]
            x = self.parent[x]
        return x
    def union(self, x, y):
        rx, ry = self.find(x), self.find(y)
        if rx == ry: return False
        if self.rank[rx] < self.rank[ry]:
            self.parent[rx] = ry
        elif self.rank[rx] > self.rank[ry]:
            self.parent[ry] = rx
        else:
            self.parent[ry] = rx
            self.rank[rx] += 1
        return True

def findRedundantDirectedConnection(edges):
    n = len(edges)
    indeg = [0] * (n + 1)
    candidate = -1
    for i, (u, v) in enumerate(edges):
        indeg[v] += 1
        if indeg[v] == 2:
            candidate = i
    if candidate == -1:
        dsu = DSU(n)
        for u, v in edges:
            if not dsu.union(u, v):
                return [u, v]
        return []
    for i in range(candidate, -1, -1):
        u, v = edges[i]
        if indeg[v] == 2:
            dsu = DSU(n)
            valid = True
            for j, (a, b) in enumerate(edges):
                if j == i: continue
                if not dsu.union(a, b):
                    valid = False
                    break
            if valid:
                return [u, v]
    return []

n = int(input())
edges = [tuple(map(int, input().split())) for _ in range(n)]
res = findRedundantDirectedConnection(edges)
print(res[0], res[1])`,
    java: `import java.util.*;

public class Solution {
    static int[] parent, rank;

    public static int find(int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }

    public static boolean union(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return false;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        return true;
    }

    public static int[] findRedundantDirectedConnection(int[][] edges) {
        int n = edges.length;
        int[] indeg = new int[n + 1];
        int candidate = -1;
        for (int i = 0; i < n; i++) {
            indeg[edges[i][1]]++;
            if (indeg[edges[i][1]] == 2) candidate = i;
        }
        if (candidate == -1) {
            parent = new int[n + 1];
            rank = new int[n + 1];
            for (int i = 1; i <= n; i++) parent[i] = i;
            for (int[] e : edges) {
                if (!union(e[0], e[1])) return e;
            }
            return new int[]{};
        }
        for (int i = candidate; i >= 0; i--) {
            if (indeg[edges[i][1]] == 2) {
                parent = new int[n + 1];
                rank = new int[n + 1];
                for (int j = 1; j <= n; j++) parent[j] = j;
                boolean valid = true;
                for (int j = 0; j < n; j++) {
                    if (j == i) continue;
                    if (!union(edges[j][0], edges[j][1])) {
                        valid = false;
                        break;
                    }
                }
                if (valid) return edges[i];
            }
        }
        return new int[]{};
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] edges = new int[n][2];
            for (int i = 0; i < n; i++) {
                edges[i][0] = sc.nextInt();
                edges[i][1] = sc.nextInt();
            }
            int[] res = findRedundantDirectedConnection(edges);
            System.out.println(res[0] + " " + res[1]);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int* parent;
int* rank;

int find(int x) {
    while (parent[x] != x) {
        parent[x] = parent[parent[x]];
        x = parent[x];
    }
    return x;
}

int unionSets(int x, int y) {
    int rx = find(x), ry = find(y);
    if (rx == ry) return 0;
    if (rank[rx] < rank[ry]) parent[rx] = ry;
    else if (rank[rx] > rank[ry]) parent[ry] = rx;
    else { parent[ry] = rx; rank[rx]++; }
    return 1;
}

int* findRedundantDirectedConnection(int** edges, int edgesSize, int* edgesColSize, int* returnSize) {
    *returnSize = 2;
    int n = edgesSize;
    int* indeg = (int*)calloc(n + 1, sizeof(int));
    int candidate = -1;
    for (int i = 0; i < n; i++) {
        indeg[edges[i][1]]++;
        if (indeg[edges[i][1]] == 2) candidate = i;
    }
    int* res = (int*)malloc(2 * sizeof(int));
    if (candidate == -1) {
        parent = (int*)malloc((n + 1) * sizeof(int));
        rank = (int*)calloc(n + 1, sizeof(int));
        for (int i = 1; i <= n; i++) parent[i] = i;
        for (int i = 0; i < n; i++) {
            if (!unionSets(edges[i][0], edges[i][1])) {
                res[0] = edges[i][0]; res[1] = edges[i][1];
                free(parent); free(rank); free(indeg);
                return res;
            }
        }
        free(parent); free(rank); free(indeg);
        return res;
    }
    for (int i = candidate; i >= 0; i--) {
        if (indeg[edges[i][1]] == 2) {
            parent = (int*)malloc((n + 1) * sizeof(int));
            rank = (int*)calloc(n + 1, sizeof(int));
            for (int j = 1; j <= n; j++) parent[j] = j;
            int valid = 1;
            for (int j = 0; j < n && valid; j++) {
                if (j == i) continue;
                if (!unionSets(edges[j][0], edges[j][1])) valid = 0;
            }
            if (valid) {
                res[0] = edges[i][0]; res[1] = edges[i][1];
                free(parent); free(rank); free(indeg);
                return res;
            }
            free(parent); free(rank);
        }
    }
    free(indeg);
    return res;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** edges = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        edges[i] = (int*)malloc(2 * sizeof(int));
        if (scanf("%d %d", &edges[i][0], &edges[i][1]) != 2) return 0;
    }
    int returnSize;
    int* res = findRedundantDirectedConnection(edges, n, NULL, &returnSize);
    printf("%d %d\\n", res[0], res[1]);
    for (int i = 0; i < n; i++) free(edges[i]);
    free(edges);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

class DSU {
    vector<int> parent, rank;
public:
    DSU(int n) {
        parent.resize(n + 1);
        rank.resize(n + 1, 0);
        for (int i = 1; i <= n; i++) parent[i] = i;
    }
    int find(int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }
    bool unite(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return false;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        return true;
    }
};

vector<int> findRedundantDirectedConnection(vector<vector<int>>& edges) {
    int n = edges.size();
    vector<int> indeg(n + 1, 0);
    int candidate = -1;
    for (int i = 0; i < n; i++) {
        indeg[edges[i][1]]++;
        if (indeg[edges[i][1]] == 2) candidate = i;
    }
    if (candidate == -1) {
        DSU dsu(n);
        for (auto& e : edges) {
            if (!dsu.unite(e[0], e[1])) return {e[0], e[1]};
        }
        return {};
    }
    for (int i = candidate; i >= 0; i--) {
        if (indeg[edges[i][1]] == 2) {
            DSU dsu(n);
            bool valid = true;
            for (int j = 0; j < n && valid; j++) {
                if (j == i) continue;
                if (!dsu.unite(edges[j][0], edges[j][1])) valid = false;
            }
            if (valid) return {edges[i][0], edges[i][1]};
        }
    }
    return {};
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<int>> edges(n, vector<int>(2));
        for (int i = 0; i < n; i++) cin >> edges[i][0] >> edges[i][1];
        vector<int> res = findRedundantDirectedConnection(edges);
        cout << res[0] << " " << res[1] << "\\n";
    }
    return 0;
}`
  },
  'rc-h2': {
    python: `# Offline solution using segment tree over time
# For simplicity, we use a naive approach that works for small constraints
# A full solution would use DSU with rollback

def dynamicConnectivity(n, operations):
    # Naive: maintain adjacency list and run DFS for each query
    adj = [set() for _ in range(n + 1)]
    results = []
    for op in operations:
        parts = op.split()
        if parts[0] == 'add':
            u, v = int(parts[1]), int(parts[2])
            adj[u].add(v)
            adj[v].add(u)
        elif parts[0] == 'remove':
            u, v = int(parts[1]), int(parts[2])
            adj[u].discard(v)
            adj[v].discard(u)
        elif parts[0] == 'query':
            u, v = int(parts[1]), int(parts[2])
            # BFS/DFS to check connectivity
            visited = [False] * (n + 1)
            stack = [u]
            visited[u] = True
            while stack:
                cur = stack.pop()
                for nb in adj[cur]:
                    if not visited[nb]:
                        visited[nb] = True
                        stack.append(nb)
            results.append(str(visited[v]).lower())
    return results

n = int(input())
q = int(input())
operations = [input().strip() for _ in range(q)]
results = dynamicConnectivity(n, operations)
print(' '.join(results))`,
    java: `import java.util.*;

public class Solution {
    public static boolean[] dynamicConnectivity(int n, String[] operations) {
        List<Set<Integer>> adj = new ArrayList<>();
        for (int i = 0; i <= n; i++) adj.add(new HashSet<>());
        List<Boolean> res = new ArrayList<>();
        for (String op : operations) {
            String[] parts = op.split(" ");
            if (parts[0].equals("add")) {
                int u = Integer.parseInt(parts[1]);
                int v = Integer.parseInt(parts[2]);
                adj.get(u).add(v);
                adj.get(v).add(u);
            } else if (parts[0].equals("remove")) {
                int u = Integer.parseInt(parts[1]);
                int v = Integer.parseInt(parts[2]);
                adj.get(u).remove(v);
                adj.get(v).remove(u);
            } else if (parts[0].equals("query")) {
                int u = Integer.parseInt(parts[1]);
                int v = Integer.parseInt(parts[2]);
                boolean[] visited = new boolean[n + 1];
                Stack<Integer> stack = new Stack<>();
                stack.push(u);
                visited[u] = true;
                while (!stack.isEmpty()) {
                    int cur = stack.pop();
                    for (int nb : adj.get(cur)) {
                        if (!visited[nb]) {
                            visited[nb] = true;
                            stack.push(nb);
                        }
                    }
                }
                res.add(visited[v]);
            }
        }
        boolean[] result = new boolean[res.size()];
        for (int i = 0; i < res.size(); i++) result[i] = res.get(i);
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int q = sc.nextInt();
            sc.nextLine();
            String[] operations = new String[q];
            for (int i = 0; i < q; i++) {
                operations[i] = sc.nextLine();
            }
            boolean[] res = dynamicConnectivity(n, operations);
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
#include <stdbool.h>

#define MAXN 10005

int adj[MAXN][MAXN];
int adjSize[MAXN];

bool* dynamicConnectivity(int n, char** operations, int opsSize, int* returnSize) {
    for (int i = 1; i <= n; i++) adjSize[i] = 0;
    bool* res = (bool*)malloc(opsSize * sizeof(bool));
    int cnt = 0;
    for (int i = 0; i < opsSize; i++) {
        char op[10];
        int a, b;
        sscanf(operations[i], "%s %d %d", op, &a, &b);
        if (strcmp(op, "add") == 0) {
            adj[a][adjSize[a]++] = b;
            adj[b][adjSize[b]++] = a;
        } else if (strcmp(op, "remove") == 0) {
            for (int j = 0; j < adjSize[a]; j++) {
                if (adj[a][j] == b) { adj[a][j] = adj[a][--adjSize[a]]; break; }
            }
            for (int j = 0; j < adjSize[b]; j++) {
                if (adj[b][j] == a) { adj[b][j] = adj[b][--adjSize[b]]; break; }
            }
        } else if (strcmp(op, "query") == 0) {
            int visited[MAXN] = {0};
            int stack[MAXN], top = 0;
            stack[top++] = a;
            visited[a] = 1;
            while (top > 0) {
                int cur = stack[--top];
                for (int j = 0; j < adjSize[cur]; j++) {
                    int nb = adj[cur][j];
                    if (!visited[nb]) { visited[nb] = 1; stack[top++] = nb; }
                }
            }
            res[cnt++] = visited[b] ? true : false;
        }
    }
    *returnSize = cnt;
    return res;
}

int main() {
    int n, q;
    if (scanf("%d %d", &n, &q) != 2) return 0;
    getchar();
    char** operations = (char**)malloc(q * sizeof(char*));
    for (int i = 0; i < q; i++) {
        operations[i] = (char*)malloc(100 * sizeof(char));
        if (fgets(operations[i], 100, stdin) == NULL) return 0;
        operations[i][strcspn(operations[i], "\\n")] = 0;
    }
    int returnSize;
    bool* res = dynamicConnectivity(n, operations, q, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        if (i > 0) printf(" ");
        printf("%s", res[i] ? "true" : "false");
    }
    printf("\\n");
    for (int i = 0; i < q; i++) free(operations[i]);
    free(operations);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
#include <stack>
#include <string>
#include <sstream>

using namespace std;

vector<bool> dynamicConnectivity(int n, vector<string>& operations) {
    vector<unordered_set<int>> adj(n + 1);
    vector<bool> res;
    for (string& op : operations) {
        stringstream ss(op);
        string cmd;
        ss >> cmd;
        if (cmd == "add") {
            int u, v;
            ss >> u >> v;
            adj[u].insert(v);
            adj[v].insert(u);
        } else if (cmd == "remove") {
            int u, v;
            ss >> u >> v;
            adj[u].erase(v);
            adj[v].erase(u);
        } else if (cmd == "query") {
            int u, v;
            ss >> u >> v;
            vector<bool> visited(n + 1, false);
            stack<int> st;
            st.push(u);
            visited[u] = true;
            while (!st.empty()) {
                int cur = st.top(); st.pop();
                for (int nb : adj[cur]) {
                    if (!visited[nb]) {
                        visited[nb] = true;
                        st.push(nb);
                    }
                }
            }
            res.push_back(visited[v]);
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
        vector<bool> res = dynamicConnectivity(n, ops);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << (res[i] ? "true" : "false");
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'rc-h3': {
    python: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n + 1))
        self.rank = [0] * (n + 1)
    def find(self, x):
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]
            x = self.parent[x]
        return x
    def union(self, x, y):
        rx, ry = self.find(x), self.find(y)
        if rx == ry: return False
        if self.rank[rx] < self.rank[ry]:
            self.parent[rx] = ry
        elif self.rank[rx] > self.rank[ry]:
            self.parent[ry] = rx
        else:
            self.parent[ry] = rx
            self.rank[rx] += 1
        return True

def classifyMSTEdges(n, edges):
    m = len(edges)
    indexed = [(w, u, v, i) for i, (u, v, w) in enumerate(edges)]
    indexed.sort()
    # First pass: find MST weight and which edges can be in some MST
    dsu = DSU(n)
    mst_weight = 0
    in_mst = [False] * m
    for w, u, v, i in indexed:
        if dsu.union(u, v):
            mst_weight += w
            in_mst[i] = True
    # Classify each edge
    critical = 0
    optional = 0
    redundant = 0
    for i in range(m):
        u, v, w = edges[i]
        # Check if edge is critical: removing it increases MST weight
        dsu = DSU(n)
        weight_without = 0
        for w2, u2, v2, j in indexed:
            if j == i: continue
            if dsu.union(u2, v2):
                weight_without += w2
        # Check if graph is still connected without this edge
        root = dsu.find(1)
        connected = all(dsu.find(x) == root for x in range(2, n + 1))
        if not connected or weight_without > mst_weight:
            critical += 1
        elif in_mst[i]:
            optional += 1
        else:
            redundant += 1
    return [critical, optional, redundant]

n = int(input())
m = int(input())
edges = [tuple(map(int, input().split())) for _ in range(m)]
res = classifyMSTEdges(n, edges)
print(res[0], res[1], res[2])`,
    java: `import java.util.*;

public class Solution {
    static int[] parent, rank;

    public static int find(int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }

    public static boolean union(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return false;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        return true;
    }

    public static int[] classifyMSTEdges(int n, int[][] edges) {
        int m = edges.length;
        int[][] indexed = new int[m][4];
        for (int i = 0; i < m; i++) {
            indexed[i][0] = edges[i][2]; // weight
            indexed[i][1] = edges[i][0]; // u
            indexed[i][2] = edges[i][1]; // v
            indexed[i][3] = i;           // original index
        }
        Arrays.sort(indexed, (a, b) -> a[0] - b[0]);
        parent = new int[n + 1];
        rank = new int[n + 1];
        for (int i = 1; i <= n; i++) parent[i] = i;
        boolean[] inMst = new boolean[m];
        for (int[] e : indexed) {
            if (union(e[1], e[2])) {
                inMst[e[3]] = true;
            }
        }
        int critical = 0, optional = 0, redundant = 0;
        for (int i = 0; i < m; i++) {
            parent = new int[n + 1];
            rank = new int[n + 1];
            for (int j = 1; j <= n; j++) parent[j] = j;
            int weightWithout = 0;
            for (int[] e : indexed) {
                if (e[3] == i) continue;
                if (union(e[1], e[2])) weightWithout += e[0];
            }
            int root = find(1);
            boolean connected = true;
            for (int j = 2; j <= n; j++) {
                if (find(j) != root) { connected = false; break; }
            }
            if (!connected) { critical++; }
            else if (inMst[i]) { optional++; }
            else { redundant++; }
        }
        return new int[]{critical, optional, redundant};
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
            int[] res = classifyMSTEdges(n, edges);
            System.out.println(res[0] + " " + res[1] + " " + res[2]);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int* parent;
int* rank;

int find(int x) {
    while (parent[x] != x) {
        parent[x] = parent[parent[x]];
        x = parent[x];
    }
    return x;
}

int unionSets(int x, int y) {
    int rx = find(x), ry = find(y);
    if (rx == ry) return 0;
    if (rank[rx] < rank[ry]) parent[rx] = ry;
    else if (rank[rx] > rank[ry]) parent[ry] = rx;
    else { parent[ry] = rx; rank[rx]++; }
    return 1;
}

int cmp(const void* a, const void* b) {
    return (*(int**)a)[0] - (*(int**)b)[0];
}

int* classifyMSTEdges(int n, int** edges, int edgesSize, int* edgesColSize, int* returnSize) {
    *returnSize = 3;
    int m = edgesSize;
    int** indexed = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        indexed[i] = (int*)malloc(4 * sizeof(int));
        indexed[i][0] = edges[i][2]; // weight
        indexed[i][1] = edges[i][0]; // u
        indexed[i][2] = edges[i][1]; // v
        indexed[i][3] = i;           // index
    }
    qsort(indexed, m, sizeof(int*), cmp);
    parent = (int*)malloc((n + 1) * sizeof(int));
    rank = (int*)calloc(n + 1, sizeof(int));
    for (int i = 1; i <= n; i++) parent[i] = i;
    int* inMst = (int*)calloc(m, sizeof(int));
    for (int i = 0; i < m; i++) {
        if (unionSets(indexed[i][1], indexed[i][2])) inMst[indexed[i][3]] = 1;
    }
    int* res = (int*)calloc(3, sizeof(int));
    for (int i = 0; i < m; i++) {
        free(parent); free(rank);
        parent = (int*)malloc((n + 1) * sizeof(int));
        rank = (int*)calloc(n + 1, sizeof(int));
        for (int j = 1; j <= n; j++) parent[j] = j;
        for (int j = 0; j < m; j++) {
            if (indexed[j][3] == i) continue;
            unionSets(indexed[j][1], indexed[j][2]);
        }
        int root = find(1);
        int connected = 1;
        for (int j = 2; j <= n; j++) {
            if (find(j) != root) { connected = 0; break; }
        }
        if (!connected) res[0]++;
        else if (inMst[i]) res[1]++;
        else res[2]++;
    }
    free(parent); free(rank); free(inMst);
    for (int i = 0; i < m; i++) free(indexed[i]);
    free(indexed);
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
    int returnSize;
    int* res = classifyMSTEdges(n, edges, m, NULL, &returnSize);
    printf("%d %d %d\\n", res[0], res[1], res[2]);
    for (int i = 0; i < m; i++) free(edges[i]);
    free(edges);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class DSU {
    vector<int> parent, rank;
public:
    DSU(int n) {
        parent.resize(n + 1);
        rank.resize(n + 1, 0);
        for (int i = 1; i <= n; i++) parent[i] = i;
    }
    int find(int x) {
        while (parent[x] != x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }
    bool unite(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return false;
        if (rank[rx] < rank[ry]) parent[rx] = ry;
        else if (rank[rx] > rank[ry]) parent[ry] = rx;
        else { parent[ry] = rx; rank[rx]++; }
        return true;
    }
};

vector<int> classifyMSTEdges(int n, vector<vector<int>>& edges) {
    int m = edges.size();
    vector<vector<int>> indexed(m, vector<int>(4));
    for (int i = 0; i < m; i++) {
        indexed[i] = {edges[i][2], edges[i][0], edges[i][1], i};
    }
    sort(indexed.begin(), indexed.end());
    DSU dsu(n);
    vector<bool> inMst(m, false);
    for (auto& e : indexed) {
        if (dsu.unite(e[1], e[2])) inMst[e[3]] = true;
    }
    int critical = 0, optional = 0, redundant = 0;
    for (int i = 0; i < m; i++) {
        DSU dsu2(n);
        for (auto& e : indexed) {
            if (e[3] == i) continue;
            dsu2.unite(e[1], e[2]);
        }
        int root = dsu2.find(1);
        bool connected = true;
        for (int j = 2; j <= n; j++) {
            if (dsu2.find(j) != root) { connected = false; break; }
        }
        if (!connected) critical++;
        else if (inMst[i]) optional++;
        else redundant++;
    }
    return {critical, optional, redundant};
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n, m;
    if (cin >> n >> m) {
        vector<vector<int>> edges(m, vector<int>(3));
        for (int i = 0; i < m; i++) cin >> edges[i][0] >> edges[i][1] >> edges[i][2];
        vector<int> res = classifyMSTEdges(n, edges);
        cout << res[0] << " " << res[1] << " " << res[2] << "\\n";
    }
    return 0;
}`
  },
  'rc-h4': {
    python: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
        self.components = 0
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
    def add(self):
        self.components += 1

def numIslandsDynamic(m, n, operations):
    grid = [[0] * n for _ in range(m)]
    dsu = DSU(m * n)
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    results = []
    for op in operations:
        parts = op.split()
        if parts[0] == 'add':
            r, c = int(parts[1]), int(parts[2])
            if grid[r][c] == 0:
                grid[r][c] = 1
                idx = r * n + c
                dsu.add()
                for dr, dc in dirs:
                    nr, nc = r + dr, c + dc
                    if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:
                        dsu.union(idx, nr * n + nc)
        elif parts[0] == 'remove':
            r, c = int(parts[1]), int(parts[2])
            if grid[r][c] == 1:
                grid[r][c] = 0
                # Rebuild DSU from scratch (simplified approach)
                dsu = DSU(m * n)
                for i in range(m):
                    for j in range(n):
                        if grid[i][j] == 1:
                            idx = i * n + j
                            dsu.add()
                            for dr, dc in dirs:
                                ni, nj = i + dr, j + dc
                                if 0 <= ni < m and 0 <= nj < n and grid[ni][nj] == 1:
                                    dsu.union(idx, ni * n + nj)
        elif parts[0] == 'query':
            results.append(str(dsu.components))
    return results

m, n = map(int, input().split())
q = int(input())
operations = [input().strip() for _ in range(q)]
results = numIslandsDynamic(m, n, operations)
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

    public static int[] numIslandsDynamic(int m, int n, String[] operations) {
        int[][] grid = new int[m][n];
        parent = new int[m * n];
        rank = new int[m * n];
        components = 0;
        int[][] dirs = {{0,1},{0,-1},{1,0},{-1,0}};
        List<Integer> res = new ArrayList<>();
        for (String op : operations) {
            String[] parts = op.split(" ");
            if (parts[0].equals("add")) {
                int r = Integer.parseInt(parts[1]);
                int c = Integer.parseInt(parts[2]);
                if (grid[r][c] == 0) {
                    grid[r][c] = 1;
                    int idx = r * n + c;
                    parent[idx] = idx;
                    rank[idx] = 0;
                    components++;
                    for (int[] d : dirs) {
                        int nr = r + d[0], nc = c + d[1];
                        if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) {
                            union(idx, nr * n + nc);
                        }
                    }
                }
            } else if (parts[0].equals("remove")) {
                int r = Integer.parseInt(parts[1]);
                int c = Integer.parseInt(parts[2]);
                if (grid[r][c] == 1) {
                    grid[r][c] = 0;
                    // Rebuild
                    for (int i = 0; i < m * n; i++) { parent[i] = i; rank[i] = 0; }
                    components = 0;
                    for (int i = 0; i < m; i++) {
                        for (int j = 0; j < n; j++) {
                            if (grid[i][j] == 1) {
                                int idx = i * n + j;
                                parent[idx] = idx;
                                components++;
                                for (int[] d : dirs) {
                                    int ni = i + d[0], nj = j + d[1];
                                    if (ni >= 0 && ni < m && nj >= 0 && nj < n && grid[ni][nj] == 1) {
                                        union(idx, ni * n + nj);
                                    }
                                }
                            }
                        }
                    }
                }
            } else if (parts[0].equals("query")) {
                res.add(components);
            }
        }
        int[] result = new int[res.size()];
        for (int i = 0; i < res.size(); i++) result[i] = res.get(i);
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt();
            int n = sc.nextInt();
            int q = sc.nextInt();
            sc.nextLine();
            String[] operations = new String[q];
            for (int i = 0; i < q; i++) {
                operations[i] = sc.nextLine();
            }
            int[] res = numIslandsDynamic(m, n, operations);
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

int* numIslandsDynamic(int m, int n, char** operations, int opsSize, int* returnSize) {
    int total = m * n;
    int* grid = (int*)calloc(total, sizeof(int));
    parent = (int*)malloc(total * sizeof(int));
    rank = (int*)calloc(total, sizeof(int));
    components = 0;
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    int* res = (int*)malloc(opsSize * sizeof(int));
    int cnt = 0;
    for (int op = 0; op < opsSize; op++) {
        char cmd[10];
        int a, b;
        sscanf(operations[op], "%s %d %d", cmd, &a, &b);
        if (strcmp(cmd, "add") == 0) {
            int idx = a * n + b;
            if (grid[idx] == 0) {
                grid[idx] = 1;
                parent[idx] = idx;
                rank[idx] = 0;
                components++;
                for (int d = 0; d < 4; d++) {
                    int nr = a + dirs[d][0], nc = b + dirs[d][1];
                    if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr * n + nc] == 1) {
                        unionSets(idx, nr * n + nc);
                    }
                }
            }
        } else if (strcmp(cmd, "remove") == 0) {
            int idx = a * n + b;
            if (grid[idx] == 1) {
                grid[idx] = 0;
                for (int i = 0; i < total; i++) { parent[i] = i; rank[i] = 0; }
                components = 0;
                for (int i = 0; i < m; i++) {
                    for (int j = 0; j < n; j++) {
                        int id = i * n + j;
                        if (grid[id] == 1) {
                            parent[id] = id;
                            components++;
                            for (int d = 0; d < 4; d++) {
                                int ni = i + dirs[d][0], nj = j + dirs[d][1];
                                if (ni >= 0 && ni < m && nj >= 0 && nj < n && grid[ni * n + nj] == 1) {
                                    unionSets(id, ni * n + nj);
                                }
                            }
                        }
                    }
                }
            }
        } else if (strcmp(cmd, "query") == 0) {
            res[cnt++] = components;
        }
    }
    *returnSize = cnt;
    free(grid);
    free(parent);
    free(rank);
    return res;
}

int main() {
    int m, n, q;
    if (scanf("%d %d %d", &m, &n, &q) != 3) return 0;
    getchar();
    char** operations = (char**)malloc(q * sizeof(char*));
    for (int i = 0; i < q; i++) {
        operations[i] = (char*)malloc(100 * sizeof(char));
        if (fgets(operations[i], 100, stdin) == NULL) return 0;
        operations[i][strcspn(operations[i], "\\n")] = 0;
    }
    int returnSize;
    int* res = numIslandsDynamic(m, n, operations, q, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        if (i > 0) printf(" ");
        printf("%d", res[i]);
    }
    printf("\\n");
    for (int i = 0; i < q; i++) free(operations[i]);
    free(operations);
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
public:
    int components;
    DSU(int n) : components(0) {
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
        components--;
    }
};

vector<int> numIslandsDynamic(int m, int n, vector<string>& operations) {
    vector<vector<int>> grid(m, vector<int>(n, 0));
    DSU dsu(m * n);
    int dirs[4][2] = {{0,1},{0,-1},{1,0},{-1,0}};
    vector<int> res;
    for (string& op : operations) {
        stringstream ss(op);
        string cmd;
        ss >> cmd;
        if (cmd == "add") {
            int r, c;
            ss >> r >> c;
            if (grid[r][c] == 0) {
                grid[r][c] = 1;
                int idx = r * n + c;
                dsu.parent[idx] = idx;
                dsu.components++;
                for (auto& d : dirs) {
                    int nr = r + d[0], nc = c + d[1];
                    if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 1) {
                        dsu.unite(idx, nr * n + nc);
                    }
                }
            }
        } else if (cmd == "remove") {
            int r, c;
            ss >> r >> c;
            if (grid[r][c] == 1) {
                grid[r][c] = 0;
                dsu = DSU(m * n);
                for (int i = 0; i < m; i++) {
                    for (int j = 0; j < n; j++) {
                        if (grid[i][j] == 1) {
                            int idx = i * n + j;
                            dsu.parent[idx] = idx;
                            dsu.components++;
                            for (auto& d : dirs) {
                                int ni = i + d[0], nj = j + d[1];
                                if (ni >= 0 && ni < m && nj >= 0 && nj < n && grid[ni][nj] == 1) {
                                    dsu.unite(idx, ni * n + nj);
                                }
                            }
                        }
                    }
                }
            }
        } else if (cmd == "query") {
            res.push_back(dsu.components);
        }
    }
    return res;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int m, n, q;
    if (cin >> m >> n >> q) {
        cin.ignore();
        vector<string> ops(q);
        for (int i = 0; i < q; i++) getline(cin, ops[i]);
        vector<int> res = numIslandsDynamic(m, n, ops);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'rc-h5': {
    python: `class DSU:
    def __init__(self, n):
        self.parent = list(range(n + 1))
        self.rank = [0] * (n + 1)
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

def minEdgesToMakeEulerian(n, edges):
    degree = [0] * (n + 1)
    dsu = DSU(n)
    for u, v in edges:
        degree[u] += 1
        degree[v] += 1
        dsu.union(u, v)
    # Find components with at least one edge
    comp_odd = {}
    comp_has_edge = {}
    for i in range(1, n + 1):
        root = dsu.find(i)
        if degree[i] > 0:
            comp_has_edge[root] = True
        if degree[i] % 2 == 1:
            comp_odd[root] = comp_odd.get(root, 0) + 1
    # Count components with edges
    components_with_edges = len(comp_has_edge)
    if components_with_edges == 0:
        return 0
    # Count total odd-degree nodes
    total_odd = sum(comp_odd.values())
    # Need to connect components: (components_with_edges - 1) edges
    # Each edge connecting two components can fix at most 2 odd-degree nodes
    # Additional edges needed for odd-degree nodes: max(0, total_odd // 2 - (components_with_edges - 1))
    edges_to_connect = components_with_edges - 1
    edges_for_odd = max(0, total_odd // 2 - edges_to_connect)
    return edges_to_connect + edges_for_odd

n = int(input())
m = int(input())
edges = [tuple(map(int, input().split())) for _ in range(m)]
print(minEdgesToMakeEulerian(n, edges))`,
    java: `import java.util.*;

public class Solution {
    static int[] parent, rank;

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
    }

    public static int minEdgesToMakeEulerian(int n, int[][] edges) {
        int[] degree = new int[n + 1];
        parent = new int[n + 1];
        rank = new int[n + 1];
        for (int i = 1; i <= n; i++) parent[i] = i;
        for (int[] e : edges) {
            degree[e[0]]++;
            degree[e[1]]++;
            union(e[0], e[1]);
        }
        Map<Integer, Integer> compOdd = new HashMap<>();
        Set<Integer> compHasEdge = new HashSet<>();
        for (int i = 1; i <= n; i++) {
            int root = find(i);
            if (degree[i] > 0) compHasEdge.add(root);
            if (degree[i] % 2 == 1) compOdd.put(root, compOdd.getOrDefault(root, 0) + 1);
        }
        int componentsWithEdges = compHasEdge.size();
        if (componentsWithEdges == 0) return 0;
        int totalOdd = 0;
        for (int v : compOdd.values()) totalOdd += v;
        int edgesToConnect = componentsWithEdges - 1;
        int edgesForOdd = Math.max(0, totalOdd / 2 - edgesToConnect);
        return edgesToConnect + edgesForOdd;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int m = sc.nextInt();
            int[][] edges = new int[m][2];
            for (int i = 0; i < m; i++) {
                edges[i][0] = sc.nextInt();
                edges[i][1] = sc.nextInt();
            }
            System.out.println(minEdgesToMakeEulerian(n, edges));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int* parent;
int* rank;

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
}

int minEdgesToMakeEulerian(int n, int** edges, int edgesSize) {
    int* degree = (int*)calloc(n + 1, sizeof(int));
    parent = (int*)malloc((n + 1) * sizeof(int));
    rank = (int*)calloc(n + 1, sizeof(int));
    for (int i = 1; i <= n; i++) parent[i] = i;
    for (int i = 0; i < edgesSize; i++) {
        degree[edges[i][0]]++;
        degree[edges[i][1]]++;
        unionSets(edges[i][0], edges[i][1]);
    }
    int* compOdd = (int*)calloc(n + 1, sizeof(int));
    int* compHasEdge = (int*)calloc(n + 1, sizeof(int));
    for (int i = 1; i <= n; i++) {
        int root = find(i);
        if (degree[i] > 0) compHasEdge[root] = 1;
        if (degree[i] % 2 == 1) compOdd[root]++;
    }
    int componentsWithEdges = 0;
    int totalOdd = 0;
    for (int i = 1; i <= n; i++) {
        if (compHasEdge[i]) componentsWithEdges++;
        totalOdd += compOdd[i];
    }
    if (componentsWithEdges == 0) { free(degree); free(parent); free(rank); free(compOdd); free(compHasEdge); return 0; }
    int edgesToConnect = componentsWithEdges - 1;
    int edgesForOdd = (totalOdd / 2 > edgesToConnect) ? (totalOdd / 2 - edgesToConnect) : 0;
    int res = edgesToConnect + edgesForOdd;
    free(degree); free(parent); free(rank); free(compOdd); free(compHasEdge);
    return res;
}

int main() {
    int n, m;
    if (scanf("%d", &n) != 1) return 0;
    if (scanf("%d", &m) != 1) return 0;
    int** edges = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        edges[i] = (int*)malloc(2 * sizeof(int));
        if (scanf("%d %d", &edges[i][0], &edges[i][1]) != 2) return 0;
    }
    printf("%d\\n", minEdgesToMakeEulerian(n, edges, m));
    for (int i = 0; i < m; i++) free(edges[i]);
    free(edges);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>

using namespace std;

class DSU {
    vector<int> parent, rank;
public:
    DSU(int n) {
        parent.resize(n + 1);
        rank.resize(n + 1, 0);
        for (int i = 1; i <= n; i++) parent[i] = i;
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
    }
};

int minEdgesToMakeEulerian(int n, vector<vector<int>>& edges) {
    vector<int> degree(n + 1, 0);
    DSU dsu(n);
    for (auto& e : edges) {
        degree[e[0]]++;
        degree[e[1]]++;
        dsu.unite(e[0], e[1]);
    }
    unordered_map<int, int> compOdd;
    unordered_set<int> compHasEdge;
    for (int i = 1; i <= n; i++) {
        int root = dsu.find(i);
        if (degree[i] > 0) compHasEdge.insert(root);
        if (degree[i] % 2 == 1) compOdd[root]++;
    }
    int componentsWithEdges = compHasEdge.size();
    if (componentsWithEdges == 0) return 0;
    int totalOdd = 0;
    for (auto& p : compOdd) totalOdd += p.second;
    int edgesToConnect = componentsWithEdges - 1;
    int edgesForOdd = max(0, totalOdd / 2 - edgesToConnect);
    return edgesToConnect + edgesForOdd;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n, m;
    if (cin >> n >> m) {
        vector<vector<int>> edges(m, vector<int>(2));
        for (int i = 0; i < m; i++) cin >> edges[i][0] >> edges[i][1];
        cout << minEdgesToMakeEulerian(n, edges) << "\\n";
    }
    return 0;
}`
  }
};
