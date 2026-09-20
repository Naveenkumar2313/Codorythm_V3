// src/data/solutions.js
export const travelingSalesmanBitmaskSolutions = {
    'tsp-e1': {
        python: `def tsp_bitmask(cost):
    n = len(cost)
    size = 1 << n
    INF = 10**18
    dp = [[INF] * n for _ in range(size)]
    dp[1][0] = 0
    for mask in range(size):
        for u in range(n):
            if dp[mask][u] == INF:
                continue
            for v in range(n):
                if (mask & (1 << v)) == 0:
                    new_mask = mask | (1 << v)
                    dp[new_mask][v] = min(dp[new_mask][v], dp[mask][u] + cost[u][v])
    full = size - 1
    answer = INF
    for u in range(1, n):
        answer = min(answer, dp[full][u] + cost[u][0])
    return answer
n = int(input())
cost = [list(map(int, input().split())) for _ in range(n)]
print(tsp_bitmask(cost))`,
        java: `import java.util.*;
public class Main {
    public static int tspBitmask(int[][] cost) {
        int n = cost.length;
        int size = 1 << n;
        int INF = 1000000000;
        int[][] dp = new int[size][n];
        for (int i = 0; i < size; i++)
            Arrays.fill(dp[i], INF);
        dp[1][0] = 0;
        for (int mask = 0; mask < size; mask++) {
            for (int u = 0; u < n; u++) {
                if (dp[mask][u] == INF)
                    continue;
                for (int v = 0; v < n; v++) {
                    if ((mask & (1 << v)) == 0) {
                        int newMask = mask | (1 << v);
                        dp[newMask][v] = Math.min(dp[newMask][v], dp[mask][u] + cost[u][v]);
                    }
                }
            }
        }
        int full = size - 1;
        int answer = INF;
        for (int u = 1; u < n; u++)
            answer = Math.min(answer, dp[full][u] + cost[u][0]);
        return answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] cost = new int[n][n];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                cost[i][j] = sc.nextInt();
        System.out.println(tspBitmask(cost));
    }
}`,
        c: `#include <stdio.h>
#include <stdlib.h>
#define INF 1000000000
int tspBitmask(int **cost, int n) {
    int size = 1 << n;
    int *dp = (int *)malloc(size * n * sizeof(int));
    for (int i = 0; i < size * n; i++)
        dp[i] = INF;
    dp[n] = 0;
    for (int mask = 0; mask < size; mask++) {
        for (int u = 0; u < n; u++) {
            int current = dp[mask * n + u];
            if (current == INF)
                continue;
            for (int v = 0; v < n; v++) {
                if ((mask & (1 << v)) == 0) {
                    int newMask = mask | (1 << v);
                    int index = newMask * n + v;
                    int value = current + cost[u][v];
                    if (value < dp[index])
                        dp[index] = value;
                }
            }
        }
    }
    int full = size - 1;
    int answer = INF;
    for (int u = 1; u < n; u++) {
        int value = dp[full * n + u] + cost[u][0];
        if (value < answer)
            answer = value;
    }
    free(dp);
    return answer;
}
int main() {
    int n;
    scanf("%d", &n);
    int **cost = (int **)malloc(n * sizeof(int *));
    for (int i = 0; i < n; i++) {
        cost[i] = (int *)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++)
            scanf("%d", &cost[i][j]);
    }
    printf("%d\\n", tspBitmask(cost, n));
    for (int i = 0; i < n; i++)
        free(cost[i]);
    free(cost);
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int tspBitmask(vector<vector<int>>& cost) {
    int n = cost.size();
    int size = 1 << n;
    const int INF = 1000000000;
    vector<vector<int>> dp(size, vector<int>(n, INF));
    dp[1][0] = 0;
    for (int mask = 0; mask < size; mask++) {
        for (int u = 0; u < n; u++) {
            if (dp[mask][u] == INF)
                continue;
            for (int v = 0; v < n; v++) {
                if ((mask & (1 << v)) == 0) {
                    int newMask = mask | (1 << v);
                    dp[newMask][v] = min(dp[newMask][v], dp[mask][u] + cost[u][v]);
                }
            }
        }
    }
    int full = size - 1;
    int answer = INF;
    for (int u = 1; u < n; u++)
        answer = min(answer, dp[full][u] + cost[u][0]);
    return answer;
}
int main() {
    int n;
    cin >> n;
    vector<vector<int>> cost(n, vector<int>(n));
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            cin >> cost[i][j];
    cout << tspBitmask(cost) << endl;
    return 0;
}`
    },
    'tsp-e2': {
        python: `def tsp_bitmask(cost):
    n = len(cost)
    size = 1 << n
    INF = 10**18
    dp = [[INF] * n for _ in range(size)]
    dp[1][0] = 0
    for mask in range(size):
        for u in range(n):
            if dp[mask][u] == INF:
                continue
            for v in range(n):
                if (mask & (1 << v)) == 0:
                    new_mask = mask | (1 << v)
                    dp[new_mask][v] = min(dp[new_mask][v], dp[mask][u] + cost[u][v])
    full = size - 1
    answer = INF
    for u in range(1, n):
        answer = min(answer, dp[full][u] + cost[u][0])
    return answer
n = int(input())
cost = [list(map(int, input().split())) for _ in range(n)]
print(tsp_bitmask(cost))`,
        java: `import java.util.*;
public class Main {
    public static int tspBitmask(int[][] cost) {
        int n = cost.length;
        int size = 1 << n;
        int INF = 1000000000;
        int[][] dp = new int[size][n];
        for (int i = 0; i < size; i++)
            Arrays.fill(dp[i], INF);
        dp[1][0] = 0;
        for (int mask = 0; mask < size; mask++) {
            for (int u = 0; u < n; u++) {
                if (dp[mask][u] == INF)
                    continue;
                for (int v = 0; v < n; v++) {
                    if ((mask & (1 << v)) == 0) {
                        int newMask = mask | (1 << v);
                        dp[newMask][v] = Math.min(dp[newMask][v], dp[mask][u] + cost[u][v]);
                    }
                }
            }
        }
        int full = size - 1;
        int answer = INF;
        for (int u = 1; u < n; u++)
            answer = Math.min(answer, dp[full][u] + cost[u][0]);
        return answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] cost = new int[n][n];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                cost[i][j] = sc.nextInt();
        System.out.println(tspBitmask(cost));
    }
}`,
        c: `#include <stdio.h>
#include <stdlib.h>
#define INF 1000000000
int tspBitmask(int **cost, int n) {
    int size = 1 << n;
    int *dp = (int *)malloc(size * n * sizeof(int));
    for (int i = 0; i < size * n; i++)
        dp[i] = INF;
    dp[n] = 0;
    for (int mask = 0; mask < size; mask++) {
        for (int u = 0; u < n; u++) {
            int current = dp[mask * n + u];
            if (current == INF)
                continue;
            for (int v = 0; v < n; v++) {
                if ((mask & (1 << v)) == 0) {
                    int newMask = mask | (1 << v);
                    int index = newMask * n + v;
                    int value = current + cost[u][v];
                    if (value < dp[index])
                        dp[index] = value;
                }
            }
        }
    }
    int full = size - 1;
    int answer = INF;
    for (int u = 1; u < n; u++) {
        int value = dp[full * n + u] + cost[u][0];
        if (value < answer)
            answer = value;
    }
    free(dp);
    return answer;
}
int main() {
    int n;
    scanf("%d", &n);
    int **cost = (int **)malloc(n * sizeof(int *));
    for (int i = 0; i < n; i++) {
        cost[i] = (int *)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++)
            scanf("%d", &cost[i][j]);
    }
    printf("%d\\n", tspBitmask(cost, n));
    for (int i = 0; i < n; i++)
        free(cost[i]);
    free(cost);
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int tspBitmask(vector<vector<int>>& cost) {
    int n = cost.size();
    int size = 1 << n;
    const int INF = 1000000000;
    vector<vector<int>> dp(size, vector<int>(n, INF));
    dp[1][0] = 0;
    for (int mask = 0; mask < size; mask++) {
        for (int u = 0; u < n; u++) {
            if (dp[mask][u] == INF)
                continue;
            for (int v = 0; v < n; v++) {
                if ((mask & (1 << v)) == 0) {
                    int newMask = mask | (1 << v);
                    dp[newMask][v] = min(dp[newMask][v], dp[mask][u] + cost[u][v]);
                }
            }
        }
    }
    int full = size - 1;
    int answer = INF;
    for (int u = 1; u < n; u++)
        answer = min(answer, dp[full][u] + cost[u][0]);
    return answer;
}
int main() {
    int n;
    cin >> n;
    vector<vector<int>> cost(n, vector<int>(n));
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            cin >> cost[i][j];
    cout << tspBitmask(cost) << endl;
    return 0;
}`
    },
    'tsp-e3': {
        python: `def tsp_bitmask(cost):
    n = len(cost)
    size = 1 << n
    INF = 10**18
    dp = [[INF] * n for _ in range(size)]
    dp[1][0] = 0
    for mask in range(size):
        for u in range(n):
            if dp[mask][u] == INF:
                continue
            for v in range(n):
                if (mask & (1 << v)) == 0:
                    new_mask = mask | (1 << v)
                    dp[new_mask][v] = min(dp[new_mask][v], dp[mask][u] + cost[u][v])
    full = size - 1
    return min(dp[full][u] + cost[u][0] for u in range(1, n))
n = int(input())
cost = [list(map(int, input().split())) for _ in range(n)]
print(tsp_bitmask(cost))`,
        java: `import java.util.*;
public class Main {
    public static int tspBitmask(int[][] cost) {
        int n = cost.length;
        int size = 1 << n;
        int INF = 1000000000;
        int[][] dp = new int[size][n];
        for (int i = 0; i < size; i++) Arrays.fill(dp[i], INF);
        dp[1][0] = 0;
        for (int mask = 0; mask < size; mask++)
            for (int u = 0; u < n; u++)
                if (dp[mask][u] != INF)
                    for (int v = 0; v < n; v++)
                        if ((mask & (1 << v)) == 0) {
                            int next = mask | (1 << v);
                            dp[next][v] = Math.min(dp[next][v], dp[mask][u] + cost[u][v]);
                        }
        int full = size - 1;
        int answer = INF;
        for (int u = 1; u < n; u++) answer = Math.min(answer, dp[full][u] + cost[u][0]);
        return answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] cost = new int[n][n];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cost[i][j] = sc.nextInt();
        System.out.println(tspBitmask(cost));
    }
}`,
        c: `#include <stdio.h>
#include <stdlib.h>
#define INF 1000000000
int tspBitmask(int **cost, int n) {
    int size = 1 << n;
    int *dp = malloc(size * n * sizeof(int));
    for (int i = 0; i < size * n; i++) dp[i] = INF;
    dp[n] = 0;
    for (int mask = 0; mask < size; mask++)
        for (int u = 0; u < n; u++) {
            int cur = dp[mask * n + u];
            if (cur == INF) continue;
            for (int v = 0; v < n; v++)
                if ((mask & (1 << v)) == 0) {
                    int next = mask | (1 << v);
                    int index = next * n + v;
                    int value = cur + cost[u][v];
                    if (value < dp[index]) dp[index] = value;
                }
        }
    int full = size - 1;
    int answer = INF;
    for (int u = 1; u < n; u++) {
        int value = dp[full * n + u] + cost[u][0];
        if (value < answer) answer = value;
    }
    free(dp);
    return answer;
}
int main() {
    int n;
    scanf("%d", &n);
    int **cost = malloc(n * sizeof(int *));
    for (int i = 0; i < n; i++) {
        cost[i] = malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);
    }
    printf("%d\\n", tspBitmask(cost, n));
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int tspBitmask(vector<vector<int>>& cost) {
    int n = cost.size(), size = 1 << n;
    const int INF = 1000000000;
    vector<vector<int>> dp(size, vector<int>(n, INF));
    dp[1][0] = 0;
    for (int mask = 0; mask < size; mask++)
        for (int u = 0; u < n; u++)
            if (dp[mask][u] != INF)
                for (int v = 0; v < n; v++)
                    if ((mask & (1 << v)) == 0) {
                        int next = mask | (1 << v);
                        dp[next][v] = min(dp[next][v], dp[mask][u] + cost[u][v]);
                    }
    int full = size - 1, answer = INF;
    for (int u = 1; u < n; u++) answer = min(answer, dp[full][u] + cost[u][0]);
    return answer;
}
int main() {
    int n;
    cin >> n;
    vector<vector<int>> cost(n, vector<int>(n));
    for (auto& row : cost) for (int& x : row) cin >> x;
    cout << tspBitmask(cost) << endl;
    return 0;
}`
    },
    'tsp-e4': {
        python: `def tsp_bitmask(cost):
    n = len(cost)
    size = 1 << n
    INF = 10**18
    dp = [[INF] * n for _ in range(size)]
    dp[1][0] = 0
    for mask in range(size):
        for u in range(n):
            if dp[mask][u] == INF:
                continue
            for v in range(n):
                if not (mask & (1 << v)):
                    next_mask = mask | (1 << v)
                    dp[next_mask][v] = min(dp[next_mask][v], dp[mask][u] + cost[u][v])
    full = size - 1
    return min(dp[full][u] + cost[u][0] for u in range(1, n))
n = int(input())
cost = [list(map(int, input().split())) for _ in range(n)]
print(tsp_bitmask(cost))`,
        java: `import java.util.*;
public class Main {
    public static int tspBitmask(int[][] cost) {
        int n = cost.length, size = 1 << n, INF = 1000000000;
        int[][] dp = new int[size][n];
        for (int i = 0; i < size; i++) Arrays.fill(dp[i], INF);
        dp[1][0] = 0;
        for (int mask = 0; mask < size; mask++)
            for (int u = 0; u < n; u++)
                if (dp[mask][u] != INF)
                    for (int v = 0; v < n; v++)
                        if ((mask & (1 << v)) == 0) {
                            int next = mask | (1 << v);
                            dp[next][v] = Math.min(dp[next][v], dp[mask][u] + cost[u][v]);
                        }
        int full = size - 1, answer = INF;
        for (int u = 1; u < n; u++) answer = Math.min(answer, dp[full][u] + cost[u][0]);
        return answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] cost = new int[n][n];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cost[i][j] = sc.nextInt();
        System.out.println(tspBitmask(cost));
    }
}`,
        c: `#include <stdio.h>
#include <stdlib.h>
#define INF 1000000000
int tspBitmask(int **cost, int n) {
    int size = 1 << n;
    int *dp = malloc(size * n * sizeof(int));
    for (int i = 0; i < size * n; i++) dp[i] = INF;
    dp[n] = 0;
    for (int mask = 0; mask < size; mask++)
        for (int u = 0; u < n; u++) {
            int cur = dp[mask * n + u];
            if (cur == INF) continue;
            for (int v = 0; v < n; v++)
                if ((mask & (1 << v)) == 0) {
                    int next = mask | (1 << v);
                    int index = next * n + v;
                    int value = cur + cost[u][v];
                    if (value < dp[index]) dp[index] = value;
                }
        }
    int full = size - 1, answer = INF;
    for (int u = 1; u < n; u++) {
        int value = dp[full * n + u] + cost[u][0];
        if (value < answer) answer = value;
    }
    free(dp);
    return answer;
}
int main() {
    int n;
    scanf("%d", &n);
    int **cost = malloc(n * sizeof(int *));
    for (int i = 0; i < n; i++) {
        cost[i] = malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);
    }
    printf("%d\\n", tspBitmask(cost, n));
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int tspBitmask(vector<vector<int>>& cost) {
    int n = cost.size(), size = 1 << n;
    const int INF = 1000000000;
    vector<vector<int>> dp(size, vector<int>(n, INF));
    dp[1][0] = 0;
    for (int mask = 0; mask < size; mask++)
        for (int u = 0; u < n; u++)
            if (dp[mask][u] != INF)
                for (int v = 0; v < n; v++)
                    if ((mask & (1 << v)) == 0) {
                        int next = mask | (1 << v);
                        dp[next][v] = min(dp[next][v], dp[mask][u] + cost[u][v]);
                    }
    int full = size - 1, answer = INF;
    for (int u = 1; u < n; u++) answer = min(answer, dp[full][u] + cost[u][0]);
    return answer;
}
int main() {
    int n;
    cin >> n;
    vector<vector<int>> cost(n, vector<int>(n));
    for (auto& row : cost) for (int& x : row) cin >> x;
    cout << tspBitmask(cost) << endl;
    return 0;
}`
    },
    'tsp-e5': {
        python: `def tsp_bitmask(cost):
    n = len(cost)
    size = 1 << n
    INF = 10**18
    dp = [[INF] * n for _ in range(size)]
    dp[1][0] = 0
    for mask in range(size):
        for u in range(n):
            if dp[mask][u] == INF:
                continue
            for v in range(n):
                if (mask & (1 << v)) == 0:
                    next_mask = mask | (1 << v)
                    dp[next_mask][v] = min(dp[next_mask][v], dp[mask][u] + cost[u][v])
    full = size - 1
    return min(dp[full][u] + cost[u][0] for u in range(1, n))
n = int(input())
cost = [list(map(int, input().split())) for _ in range(n)]
print(tsp_bitmask(cost))`,
        java: `import java.util.*;
public class Main {
    public static int tspBitmask(int[][] cost) {
        int n = cost.length, size = 1 << n, INF = 1000000000;
        int[][] dp = new int[size][n];
        for (int i = 0; i < size; i++) Arrays.fill(dp[i], INF);
        dp[1][0] = 0;
        for (int mask = 0; mask < size; mask++)
            for (int u = 0; u < n; u++)
                if (dp[mask][u] != INF)
                    for (int v = 0; v < n; v++)
                        if ((mask & (1 << v)) == 0) {
                            int next = mask | (1 << v);
                            dp[next][v] = Math.min(dp[next][v], dp[mask][u] + cost[u][v]);
                        }
        int full = size - 1, answer = INF;
        for (int u = 1; u < n; u++) answer = Math.min(answer, dp[full][u] + cost[u][0]);
        return answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] cost = new int[n][n];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cost[i][j] = sc.nextInt();
        System.out.println(tspBitmask(cost));
    }
}`,
        c: `#include <stdio.h>
#include <stdlib.h>
#define INF 1000000000
int tspBitmask(int **cost, int n) {
    int size = 1 << n;
    int *dp = malloc(size * n * sizeof(int));
    for (int i = 0; i < size * n; i++) dp[i] = INF;
    dp[n] = 0;
    for (int mask = 0; mask < size; mask++)
        for (int u = 0; u < n; u++) {
            int cur = dp[mask * n + u];
            if (cur == INF) continue;
            for (int v = 0; v < n; v++)
                if ((mask & (1 << v)) == 0) {
                    int next = mask | (1 << v);
                    int index = next * n + v;
                    int value = cur + cost[u][v];
                    if (value < dp[index]) dp[index] = value;
                }
        }
    int full = size - 1, answer = INF;
    for (int u = 1; u < n; u++) {
        int value = dp[full * n + u] + cost[u][0];
        if (value < answer) answer = value;
    }
    free(dp);
    return answer;
}
int main() {
    int n;
    scanf("%d", &n);
    int **cost = malloc(n * sizeof(int *));
    for (int i = 0; i < n; i++) {
        cost[i] = malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);
    }
    printf("%d\\n", tspBitmask(cost, n));
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int tspBitmask(vector<vector<int>>& cost) {
    int n = cost.size(), size = 1 << n;
    const int INF = 1000000000;
    vector<vector<int>> dp(size, vector<int>(n, INF));
    dp[1][0] = 0;
    for (int mask = 0; mask < size; mask++)
        for (int u = 0; u < n; u++)
            if (dp[mask][u] != INF)
                for (int v = 0; v < n; v++)
                    if ((mask & (1 << v)) == 0) {
                        int next = mask | (1 << v);
                        dp[next][v] = min(dp[next][v], dp[mask][u] + cost[u][v]);
                    }
    int full = size - 1, answer = INF;
    for (int u = 1; u < n; u++) answer = min(answer, dp[full][u] + cost[u][0]);
    return answer;
}
int main() {
    int n;
    cin >> n;
    vector<vector<int>> cost(n, vector<int>(n));
    for (auto& row : cost) for (int& x : row) cin >> x;
    cout << tspBitmask(cost) << endl;
    return 0;
}`
    },
    'tsp-m1': {
        python: `def tsp_bitmask(cost):
    n = len(cost)
    size = 1 << n
    INF = 10**18
    dp = [[INF] * n for _ in range(size)]
    dp[1][0] = 0
    for mask in range(size):
        for u in range(n):
            if dp[mask][u] == INF:
                continue
            for v in range(n):
                if not (mask & (1 << v)):
                    next_mask = mask | (1 << v)
                    dp[next_mask][v] = min(dp[next_mask][v], dp[mask][u] + cost[u][v])
    full = size - 1
    return min(dp[full][u] + cost[u][0] for u in range(1, n))
n = int(input())
cost = [list(map(int, input().split())) for _ in range(n)]
print(tsp_bitmask(cost))`,
        java: `import java.util.*;
public class Main {
    public static int tspBitmask(int[][] cost) {
        int n = cost.length, size = 1 << n, INF = 1000000000;
        int[][] dp = new int[size][n];
        for (int i = 0; i < size; i++) Arrays.fill(dp[i], INF);
        dp[1][0] = 0;
        for (int mask = 0; mask < size; mask++)
            for (int u = 0; u < n; u++)
                if (dp[mask][u] != INF)
                    for (int v = 0; v < n; v++)
                        if ((mask & (1 << v)) == 0) {
                            int next = mask | (1 << v);
                            dp[next][v] = Math.min(dp[next][v], dp[mask][u] + cost[u][v]);
                        }
        int full = size - 1, answer = INF;
        for (int u = 1; u < n; u++) answer = Math.min(answer, dp[full][u] + cost[u][0]);
        return answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] cost = new int[n][n];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cost[i][j] = sc.nextInt();
        System.out.println(tspBitmask(cost));
    }
}`,
        c: `#include <stdio.h>
#include <stdlib.h>
#define INF 1000000000
int tspBitmask(int **cost, int n) {
    int size = 1 << n;
    int *dp = malloc(size * n * sizeof(int));
    for (int i = 0; i < size * n; i++) dp[i] = INF;
    dp[n] = 0;
    for (int mask = 0; mask < size; mask++)
        for (int u = 0; u < n; u++) {
            int cur = dp[mask * n + u];
            if (cur == INF) continue;
            for (int v = 0; v < n; v++)
                if ((mask & (1 << v)) == 0) {
                    int next = mask | (1 << v);
                    int index = next * n + v;
                    int value = cur + cost[u][v];
                    if (value < dp[index]) dp[index] = value;
                }
        }
    int full = size - 1, answer = INF;
    for (int u = 1; u < n; u++) {
        int value = dp[full * n + u] + cost[u][0];
        if (value < answer) answer = value;
    }
    free(dp);
    return answer;
}
int main() {
    int n;
    scanf("%d", &n);
    int **cost = malloc(n * sizeof(int *));
    for (int i = 0; i < n; i++) {
        cost[i] = malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);
    }
    printf("%d\\n", tspBitmask(cost, n));
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int tspBitmask(vector<vector<int>>& cost) {
    int n = cost.size(), size = 1 << n;
    const int INF = 1000000000;
    vector<vector<int>> dp(size, vector<int>(n, INF));
    dp[1][0] = 0;
    for (int mask = 0; mask < size; mask++)
        for (int u = 0; u < n; u++)
            if (dp[mask][u] != INF)
                for (int v = 0; v < n; v++)
                    if ((mask & (1 << v)) == 0) {
                        int next = mask | (1 << v);
                        dp[next][v] = min(dp[next][v], dp[mask][u] + cost[u][v]);
                    }
    int full = size - 1, answer = INF;
    for (int u = 1; u < n; u++) answer = min(answer, dp[full][u] + cost[u][0]);
    return answer;
}
int main() {
    int n;
    cin >> n;
    vector<vector<int>> cost(n, vector<int>(n));
    for (auto& row : cost) for (int& x : row) cin >> x;
    cout << tspBitmask(cost) << endl;
    return 0;
}`
    },
    'tsp-m2': {
        python: `def tsp_bitmask(cost):
    n = len(cost)
    size = 1 << n
    INF = 10**18
    dp = [[INF] * n for _ in range(size)]
    dp[1][0] = 0
    for mask in range(size):
        for u in range(n):
            if dp[mask][u] == INF:
                continue
            for v in range(n):
                if (mask & (1 << v)) == 0:
                    next_mask = mask | (1 << v)
                    dp[next_mask][v] = min(dp[next_mask][v], dp[mask][u] + cost[u][v])
    full = size - 1
    return min(dp[full][u] + cost[u][0] for u in range(1, n))
n = int(input())
cost = [list(map(int, input().split())) for _ in range(n)]
print(tsp_bitmask(cost))`,
        java: `import java.util.*;
public class Main {
    public static int tspBitmask(int[][] cost) {
        int n = cost.length, size = 1 << n, INF = 1000000000;
        int[][] dp = new int[size][n];
        for (int i = 0; i < size; i++) Arrays.fill(dp[i], INF);
        dp[1][0] = 0;
        for (int mask = 0; mask < size; mask++)
            for (int u = 0; u < n; u++)
                if (dp[mask][u] != INF)
                    for (int v = 0; v < n; v++)
                        if ((mask & (1 << v)) == 0) {
                            int next = mask | (1 << v);
                            dp[next][v] = Math.min(dp[next][v], dp[mask][u] + cost[u][v]);
                        }
        int full = size - 1, answer = INF;
        for (int u = 1; u < n; u++) answer = Math.min(answer, dp[full][u] + cost[u][0]);
        return answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] cost = new int[n][n];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cost[i][j] = sc.nextInt();
        System.out.println(tspBitmask(cost));
    }
}`,
        c: `#include <stdio.h>
#include <stdlib.h>
#define INF 1000000000
int tspBitmask(int **cost, int n) {
    int size = 1 << n;
    int *dp = malloc(size * n * sizeof(int));
    for (int i = 0; i < size * n; i++) dp[i] = INF;
    dp[n] = 0;
    for (int mask = 0; mask < size; mask++)
        for (int u = 0; u < n; u++) {
            int cur = dp[mask * n + u];
            if (cur == INF) continue;
            for (int v = 0; v < n; v++)
                if ((mask & (1 << v)) == 0) {
                    int next = mask | (1 << v);
                    int index = next * n + v;
                    int value = cur + cost[u][v];
                    if (value < dp[index]) dp[index] = value;
                }
        }
    int full = size - 1, answer = INF;
    for (int u = 1; u < n; u++) {
        int value = dp[full * n + u] + cost[u][0];
        if (value < answer) answer = value;
    }
    free(dp);
    return answer;
}
int main() {
    int n;
    scanf("%d", &n);
    int **cost = malloc(n * sizeof(int *));
    for (int i = 0; i < n; i++) {
        cost[i] = malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);
    }
    printf("%d\\n", tspBitmask(cost, n));
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int tspBitmask(vector<vector<int>>& cost) {
    int n = cost.size(), size = 1 << n;
    const int INF = 1000000000;
    vector<vector<int>> dp(size, vector<int>(n, INF));
    dp[1][0] = 0;
    for (int mask = 0; mask < size; mask++)
        for (int u = 0; u < n; u++)
            if (dp[mask][u] != INF)
                for (int v = 0; v < n; v++)
                    if ((mask & (1 << v)) == 0) {
                        int next = mask | (1 << v);
                        dp[next][v] = min(dp[next][v], dp[mask][u] + cost[u][v]);
                    }
    int full = size - 1, answer = INF;
    for (int u = 1; u < n; u++) answer = min(answer, dp[full][u] + cost[u][0]);
    return answer;
}
int main() {
    int n;
    cin >> n;
    vector<vector<int>> cost(n, vector<int>(n));
    for (auto& row : cost) for (int& x : row) cin >> x;
    cout << tspBitmask(cost) << endl;
    return 0;
}`
    },
    'tsp-m3': {
        python: `def tsp_bitmask(cost):
    n = len(cost)
    size = 1 << n
    INF = 10**18
    dp = [[INF] * n for _ in range(size)]
    dp[1][0] = 0
    for mask in range(size):
        for u in range(n):
            if dp[mask][u] == INF:
                continue
            for v in range(n):
                if not (mask & (1 << v)):
                    next_mask = mask | (1 << v)
                    dp[next_mask][v] = min(dp[next_mask][v], dp[mask][u] + cost[u][v])
    full = size - 1
    return min(dp[full][u] + cost[u][0] for u in range(1, n))
n = int(input())
cost = [list(map(int, input().split())) for _ in range(n)]
print(tsp_bitmask(cost))`,
        java: `import java.util.*;
public class Main {
    public static int tspBitmask(int[][] cost) {
        int n = cost.length, size = 1 << n, INF = 1000000000;
        int[][] dp = new int[size][n];
        for (int i = 0; i < size; i++) Arrays.fill(dp[i], INF);
        dp[1][0] = 0;
        for (int mask = 0; mask < size; mask++)
            for (int u = 0; u < n; u++)
                if (dp[mask][u] != INF)
                    for (int v = 0; v < n; v++)
                        if ((mask & (1 << v)) == 0) {
                            int next = mask | (1 << v);
                            dp[next][v] = Math.min(dp[next][v], dp[mask][u] + cost[u][v]);
                        }
        int full = size - 1, answer = INF;
        for (int u = 1; u < n; u++) answer = Math.min(answer, dp[full][u] + cost[u][0]);
        return answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] cost = new int[n][n];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cost[i][j] = sc.nextInt();
        System.out.println(tspBitmask(cost));
    }
}`,
        c: `#include <stdio.h>
#include <stdlib.h>
#define INF 1000000000
int tspBitmask(int **cost, int n) {
    int size = 1 << n;
    int *dp = malloc(size * n * sizeof(int));
    for (int i = 0; i < size * n; i++) dp[i] = INF;
    dp[n] = 0;
    for (int mask = 0; mask < size; mask++)
        for (int u = 0; u < n; u++) {
            int cur = dp[mask * n + u];
            if (cur == INF) continue;
            for (int v = 0; v < n; v++)
                if ((mask & (1 << v)) == 0) {
                    int next = mask | (1 << v);
                    int index = next * n + v;
                    int value = cur + cost[u][v];
                    if (value < dp[index]) dp[index] = value;
                }
        }
    int full = size - 1, answer = INF;
    for (int u = 1; u < n; u++) {
        int value = dp[full * n + u] + cost[u][0];
        if (value < answer) answer = value;
    }
    free(dp);
    return answer;
}
int main() {
    int n;
    scanf("%d", &n);
    int **cost = malloc(n * sizeof(int *));
    for (int i = 0; i < n; i++) {
        cost[i] = malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);
    }
    printf("%d\\n", tspBitmask(cost, n));
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int tspBitmask(vector<vector<int>>& cost) {
    int n = cost.size(), size = 1 << n;
    const int INF = 1000000000;
    vector<vector<int>> dp(size, vector<int>(n, INF));
    dp[1][0] = 0;
    for (int mask = 0; mask < size; mask++)
        for (int u = 0; u < n; u++)
            if (dp[mask][u] != INF)
                for (int v = 0; v < n; v++)
                    if ((mask & (1 << v)) == 0) {
                        int next = mask | (1 << v);
                        dp[next][v] = min(dp[next][v], dp[mask][u] + cost[u][v]);
                    }
    int full = size - 1, answer = INF;
    for (int u = 1; u < n; u++) answer = min(answer, dp[full][u] + cost[u][0]);
    return answer;
}
int main() {
    int n;
    cin >> n;
    vector<vector<int>> cost(n, vector<int>(n));
    for (auto& row : cost) for (int& x : row) cin >> x;
    cout << tspBitmask(cost) << endl;
    return 0;
}`
    },
    'tsp-m4': {
        python: `def tsp_bitmask(cost):
    n = len(cost)
    size = 1 << n
    INF = 10**18
    dp = [[INF] * n for _ in range(size)]
    dp[1][0] = 0
    for mask in range(size):
        for u in range(n):
            if dp[mask][u] == INF:
                continue
            for v in range(n):
                if not (mask & (1 << v)):
                    next_mask = mask | (1 << v)
                    dp[next_mask][v] = min(dp[next_mask][v], dp[mask][u] + cost[u][v])
    full = size - 1
    return min(dp[full][u] + cost[u][0] for u in range(1, n))
n = int(input())
cost = [list(map(int, input().split())) for _ in range(n)]
print(tsp_bitmask(cost))`,
        java: `import java.util.*;
public class Main {
    public static int tspBitmask(int[][] cost) {
        int n = cost.length, size = 1 << n, INF = 1000000000;
        int[][] dp = new int[size][n];
        for (int i = 0; i < size; i++) Arrays.fill(dp[i], INF);
        dp[1][0] = 0;
        for (int mask = 0; mask < size; mask++)
            for (int u = 0; u < n; u++)
                if (dp[mask][u] != INF)
                    for (int v = 0; v < n; v++)
                        if ((mask & (1 << v)) == 0) {
                            int next = mask | (1 << v);
                            dp[next][v] = Math.min(dp[next][v], dp[mask][u] + cost[u][v]);
                        }
        int full = size - 1, answer = INF;
        for (int u = 1; u < n; u++) answer = Math.min(answer, dp[full][u] + cost[u][0]);
        return answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] cost = new int[n][n];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cost[i][j] = sc.nextInt();
        System.out.println(tspBitmask(cost));
    }
}`,
        c: `#include <stdio.h>
#include <stdlib.h>
#define INF 1000000000
int tspBitmask(int **cost, int n) {
    int size = 1 << n;
    int *dp = malloc(size * n * sizeof(int));
    for (int i = 0; i < size * n; i++) dp[i] = INF;
    dp[n] = 0;
    for (int mask = 0; mask < size; mask++)
        for (int u = 0; u < n; u++) {
            int cur = dp[mask * n + u];
            if (cur == INF) continue;
            for (int v = 0; v < n; v++)
                if ((mask & (1 << v)) == 0) {
                    int next = mask | (1 << v);
                    int index = next * n + v;
                    int value = cur + cost[u][v];
                    if (value < dp[index]) dp[index] = value;
                }
        }
    int full = size - 1, answer = INF;
    for (int u = 1; u < n; u++) {
        int value = dp[full * n + u] + cost[u][0];
        if (value < answer) answer = value;
    }
    free(dp);
    return answer;
}
int main() {
    int n;
    scanf("%d", &n);
    int **cost = malloc(n * sizeof(int *));
    for (int i = 0; i < n; i++) {
        cost[i] = malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);
    }
    printf("%d\\n", tspBitmask(cost, n));
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int tspBitmask(vector<vector<int>>& cost) {
    int n = cost.size(), size = 1 << n;
    const int INF = 1000000000;
    vector<vector<int>> dp(size, vector<int>(n, INF));
    dp[1][0] = 0;
    for (int mask = 0; mask < size; mask++)
        for (int u = 0; u < n; u++)
            if (dp[mask][u] != INF)
                for (int v = 0; v < n; v++)
                    if ((mask & (1 << v)) == 0) {
                        int next = mask | (1 << v);
                        dp[next][v] = min(dp[next][v], dp[mask][u] + cost[u][v]);
                    }
    int full = size - 1, answer = INF;
    for (int u = 1; u < n; u++) answer = min(answer, dp[full][u] + cost[u][0]);
    return answer;
}
int main() {
    int n;
    cin >> n;
    vector<vector<int>> cost(n, vector<int>(n));
    for (auto& row : cost) for (int& x : row) cin >> x;
    cout << tspBitmask(cost) << endl;
    return 0;
}`
    },
    'tsp-m5': {
        python: `def tsp_bitmask(cost):
    n = len(cost)
    size = 1 << n
    INF = 10**18
    dp = [[INF] * n for _ in range(size)]
    dp[1][0] = 0
    for mask in range(size):
        for u in range(n):
            if dp[mask][u] == INF:
                continue
            for v in range(n):
                if not (mask & (1 << v)):
                    next_mask = mask | (1 << v)
                    dp[next_mask][v] = min(dp[next_mask][v], dp[mask][u] + cost[u][v])
    full = size - 1
    return min(dp[full][u] + cost[u][0] for u in range(1, n))
n = int(input())
cost = [list(map(int, input().split())) for _ in range(n)]
print(tsp_bitmask(cost))`,
        java: `import java.util.*;
public class Main {
    public static int tspBitmask(int[][] cost) {
        int n = cost.length, size = 1 << n, INF = 1000000000;
        int[][] dp = new int[size][n];
        for (int i = 0; i < size; i++) Arrays.fill(dp[i], INF);
        dp[1][0] = 0;
        for (int mask = 0; mask < size; mask++)
            for (int u = 0; u < n; u++)
                if (dp[mask][u] != INF)
                    for (int v = 0; v < n; v++)
                        if ((mask & (1 << v)) == 0) {
                            int next = mask | (1 << v);
                            dp[next][v] = Math.min(dp[next][v], dp[mask][u] + cost[u][v]);
                        }
        int full = size - 1, answer = INF;
        for (int u = 1; u < n; u++) answer = Math.min(answer, dp[full][u] + cost[u][0]);
        return answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] cost = new int[n][n];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cost[i][j] = sc.nextInt();
        System.out.println(tspBitmask(cost));
    }
}`,
        c: `#include <stdio.h>
#include <stdlib.h>
#define INF 1000000000
int tspBitmask(int **cost, int n) {
    int size = 1 << n;
    int *dp = malloc(size * n * sizeof(int));
    for (int i = 0; i < size * n; i++) dp[i] = INF;
    dp[n] = 0;
    for (int mask = 0; mask < size; mask++)
        for (int u = 0; u < n; u++) {
            int cur = dp[mask * n + u];
            if (cur == INF) continue;
            for (int v = 0; v < n; v++)
                if ((mask & (1 << v)) == 0) {
                    int next = mask | (1 << v);
                    int index = next * n + v;
                    int value = cur + cost[u][v];
                    if (value < dp[index]) dp[index] = value;
                }
        }
    int full = size - 1, answer = INF;
    for (int u = 1; u < n; u++) {
        int value = dp[full * n + u] + cost[u][0];
        if (value < answer) answer = value;
    }
    free(dp);
    return answer;
}
int main() {
    int n;
    scanf("%d", &n);
    int **cost = malloc(n * sizeof(int *));
    for (int i = 0; i < n; i++) {
        cost[i] = malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);
    }
    printf("%d\\n", tspBitmask(cost, n));
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int tspBitmask(vector<vector<int>>& cost) {
    int n = cost.size(), size = 1 << n;
    const int INF = 1000000000;
    vector<vector<int>> dp(size, vector<int>(n, INF));
    dp[1][0] = 0;
    for (int mask = 0; mask < size; mask++)
        for (int u = 0; u < n; u++)
            if (dp[mask][u] != INF)
                for (int v = 0; v < n; v++)
                    if ((mask & (1 << v)) == 0) {
                        int next = mask | (1 << v);
                        dp[next][v] = min(dp[next][v], dp[mask][u] + cost[u][v]);
                    }
    int full = size - 1, answer = INF;
    for (int u = 1; u < n; u++) answer = min(answer, dp[full][u] + cost[u][0]);
    return answer;
}
int main() {
    int n;
    cin >> n;
    vector<vector<int>> cost(n, vector<int>(n));
    for (auto& row : cost) for (int& x : row) cin >> x;
    cout << tspBitmask(cost) << endl;
    return 0;
}`
    },
    'tsp-h1': {
        python: `def tsp_bitmask(cost):
    n = len(cost)
    size = 1 << n
    INF = 10**18
    dp = [[INF] * n for _ in range(size)]
    dp[1][0] = 0
    for mask in range(size):
        for u in range(n):
            if dp[mask][u] == INF:
                continue
            for v in range(n):
                if (mask & (1 << v)) == 0:
                    next_mask = mask | (1 << v)
                    dp[next_mask][v] = min(dp[next_mask][v], dp[mask][u] + cost[u][v])
    full = size - 1
    return min(dp[full][u] + cost[u][0] for u in range(1, n))
n = int(input())
cost = [list(map(int, input().split())) for _ in range(n)]
print(tsp_bitmask(cost))`,
        java: `import java.util.*;
public class Main {
    public static int tspBitmask(int[][] cost) {
        int n = cost.length, size = 1 << n, INF = 1000000000;
        int[][] dp = new int[size][n];
        for (int i = 0; i < size; i++) Arrays.fill(dp[i], INF);
        dp[1][0] = 0;
        for (int mask = 0; mask < size; mask++)
            for (int u = 0; u < n; u++)
                if (dp[mask][u] != INF)
                    for (int v = 0; v < n; v++)
                        if ((mask & (1 << v)) == 0) {
                            int next = mask | (1 << v);
                            dp[next][v] = Math.min(dp[next][v], dp[mask][u] + cost[u][v]);
                        }
        int full = size - 1, answer = INF;
        for (int u = 1; u < n; u++) answer = Math.min(answer, dp[full][u] + cost[u][0]);
        return answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] cost = new int[n][n];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cost[i][j] = sc.nextInt();
        System.out.println(tspBitmask(cost));
    }
}`,
        c: `#include <stdio.h>
#include <stdlib.h>
#define INF 1000000000
int tspBitmask(int **cost, int n) {
    int size = 1 << n;
    int *dp = malloc(size * n * sizeof(int));
    for (int i = 0; i < size * n; i++) dp[i] = INF;
    dp[n] = 0;
    for (int mask = 0; mask < size; mask++)
        for (int u = 0; u < n; u++) {
            int cur = dp[mask * n + u];
            if (cur == INF) continue;
            for (int v = 0; v < n; v++)
                if ((mask & (1 << v)) == 0) {
                    int next = mask | (1 << v);
                    int index = next * n + v;
                    int value = cur + cost[u][v];
                    if (value < dp[index]) dp[index] = value;
                }
        }
    int full = size - 1, answer = INF;
    for (int u = 1; u < n; u++) {
        int value = dp[full * n + u] + cost[u][0];
        if (value < answer) answer = value;
    }
    free(dp);
    return answer;
}
int main() {
    int n;
    scanf("%d", &n);
    int **cost = malloc(n * sizeof(int *));
    for (int i = 0; i < n; i++) {
        cost[i] = malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);
    }
    printf("%d\\n", tspBitmask(cost, n));
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int tspBitmask(vector<vector<int>>& cost) {
    int n = cost.size(), size = 1 << n;
    const int INF = 1000000000;
    vector<vector<int>> dp(size, vector<int>(n, INF));
    dp[1][0] = 0;
    for (int mask = 0; mask < size; mask++)
        for (int u = 0; u < n; u++)
            if (dp[mask][u] != INF)
                for (int v = 0; v < n; v++)
                    if ((mask & (1 << v)) == 0) {
                        int next = mask | (1 << v);
                        dp[next][v] = min(dp[next][v], dp[mask][u] + cost[u][v]);
                    }
    int full = size - 1, answer = INF;
    for (int u = 1; u < n; u++) answer = min(answer, dp[full][u] + cost[u][0]);
    return answer;
}
int main() {
    int n;
    cin >> n;
    vector<vector<int>> cost(n, vector<int>(n));
    for (auto& row : cost) for (int& x : row) cin >> x;
    cout << tspBitmask(cost) << endl;
    return 0;
}`
    },
    'tsp-h2': {
        python: `def tsp_bitmask(cost):
    n = len(cost)
    size = 1 << n
    INF = 10**18
    dp = [[INF] * n for _ in range(size)]
    dp[1][0] = 0
    for mask in range(size):
        for u in range(n):
            if dp[mask][u] == INF:
                continue
            for v in range(n):
                if (mask & (1 << v)) == 0:
                    next_mask = mask | (1 << v)
                    dp[next_mask][v] = min(dp[next_mask][v], dp[mask][u] + cost[u][v])
    full = size - 1
    return min(dp[full][u] + cost[u][0] for u in range(1, n))
n = int(input())
cost = [list(map(int, input().split())) for _ in range(n)]
print(tsp_bitmask(cost))`,
        java: `import java.util.*;
public class Main {
    public static int tspBitmask(int[][] cost) {
        int n = cost.length, size = 1 << n, INF = 1000000000;
        int[][] dp = new int[size][n];
        for (int i = 0; i < size; i++) Arrays.fill(dp[i], INF);
        dp[1][0] = 0;
        for (int mask = 0; mask < size; mask++)
            for (int u = 0; u < n; u++)
                if (dp[mask][u] != INF)
                    for (int v = 0; v < n; v++)
                        if ((mask & (1 << v)) == 0) {
                            int next = mask | (1 << v);
                            dp[next][v] = Math.min(dp[next][v], dp[mask][u] + cost[u][v]);
                        }
        int full = size - 1, answer = INF;
        for (int u = 1; u < n; u++) answer = Math.min(answer, dp[full][u] + cost[u][0]);
        return answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] cost = new int[n][n];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cost[i][j] = sc.nextInt();
        System.out.println(tspBitmask(cost));
    }
}`,
        c: `#include <stdio.h>
#include <stdlib.h>
#define INF 1000000000
int tspBitmask(int **cost, int n) {
    int size = 1 << n;
    int *dp = malloc(size * n * sizeof(int));
    for (int i = 0; i < size * n; i++) dp[i] = INF;
    dp[n] = 0;
    for (int mask = 0; mask < size; mask++)
        for (int u = 0; u < n; u++) {
            int cur = dp[mask * n + u];
            if (cur == INF) continue;
            for (int v = 0; v < n; v++)
                if ((mask & (1 << v)) == 0) {
                    int next = mask | (1 << v);
                    int index = next * n + v;
                    int value = cur + cost[u][v];
                    if (value < dp[index]) dp[index] = value;
                }
        }
    int full = size - 1, answer = INF;
    for (int u = 1; u < n; u++) {
        int value = dp[full * n + u] + cost[u][0];
        if (value < answer) answer = value;
    }
    free(dp);
    return answer;
}
int main() {
    int n;
    scanf("%d", &n);
    int **cost = malloc(n * sizeof(int *));
    for (int i = 0; i < n; i++) {
        cost[i] = malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);
    }
    printf("%d\\n", tspBitmask(cost, n));
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int tspBitmask(vector<vector<int>>& cost) {
    int n = cost.size(), size = 1 << n;
    const int INF = 1000000000;
    vector<vector<int>> dp(size, vector<int>(n, INF));
    dp[1][0] = 0;
    for (int mask = 0; mask < size; mask++)
        for (int u = 0; u < n; u++)
            if (dp[mask][u] != INF)
                for (int v = 0; v < n; v++)
                    if ((mask & (1 << v)) == 0) {
                        int next = mask | (1 << v);
                        dp[next][v] = min(dp[next][v], dp[mask][u] + cost[u][v]);
                    }
    int full = size - 1, answer = INF;
    for (int u = 1; u < n; u++) answer = min(answer, dp[full][u] + cost[u][0]);
    return answer;
}
int main() {
    int n;
    cin >> n;
    vector<vector<int>> cost(n, vector<int>(n));
    for (auto& row : cost) for (int& x : row) cin >> x;
    cout << tspBitmask(cost) << endl;
    return 0;
}`
    },
    'tsp-h3': {
        python: `def tsp_bitmask(cost):
    n = len(cost)
    size = 1 << n
    INF = 10**18
    dp = [[INF] * n for _ in range(size)]
    dp[1][0] = 0
    for mask in range(size):
        for u in range(n):
            if dp[mask][u] == INF:
                continue
            for v in range(n):
                if not (mask & (1 << v)):
                    next_mask = mask | (1 << v)
                    dp[next_mask][v] = min(dp[next_mask][v], dp[mask][u] + cost[u][v])
    full = size - 1
    return min(dp[full][u] + cost[u][0] for u in range(1, n))
n = int(input())
cost = [list(map(int, input().split())) for _ in range(n)]
print(tsp_bitmask(cost))`,
        java: `import java.util.*;
public class Main {
    public static int tspBitmask(int[][] cost) {
        int n = cost.length, size = 1 << n, INF = 1000000000;
        int[][] dp = new int[size][n];
        for (int i = 0; i < size; i++) Arrays.fill(dp[i], INF);
        dp[1][0] = 0;
        for (int mask = 0; mask < size; mask++)
            for (int u = 0; u < n; u++)
                if (dp[mask][u] != INF)
                    for (int v = 0; v < n; v++)
                        if ((mask & (1 << v)) == 0) {
                            int next = mask | (1 << v);
                            dp[next][v] = Math.min(dp[next][v], dp[mask][u] + cost[u][v]);
                        }
        int full = size - 1, answer = INF;
        for (int u = 1; u < n; u++) answer = Math.min(answer, dp[full][u] + cost[u][0]);
        return answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] cost = new int[n][n];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cost[i][j] = sc.nextInt();
        System.out.println(tspBitmask(cost));
    }
}`,
        c: `#include <stdio.h>
#include <stdlib.h>
#define INF 1000000000
int tspBitmask(int **cost, int n) {
    int size = 1 << n;
    int *dp = malloc(size * n * sizeof(int));
    for (int i = 0; i < size * n; i++) dp[i] = INF;
    dp[n] = 0;
    for (int mask = 0; mask < size; mask++)
        for (int u = 0; u < n; u++) {
            int cur = dp[mask * n + u];
            if (cur == INF) continue;
            for (int v = 0; v < n; v++)
                if ((mask & (1 << v)) == 0) {
                    int next = mask | (1 << v);
                    int index = next * n + v;
                    int value = cur + cost[u][v];
                    if (value < dp[index]) dp[index] = value;
                }
        }
    int full = size - 1, answer = INF;
    for (int u = 1; u < n; u++) {
        int value = dp[full * n + u] + cost[u][0];
        if (value < answer) answer = value;
    }
    free(dp);
    return answer;
}
int main() {
    int n;
    scanf("%d", &n);
    int **cost = malloc(n * sizeof(int *));
    for (int i = 0; i < n; i++) {
        cost[i] = malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);
    }
    printf("%d\\n", tspBitmask(cost, n));
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int tspBitmask(vector<vector<int>>& cost) {
    int n = cost.size(), size = 1 << n;
    const int INF = 1000000000;
    vector<vector<int>> dp(size, vector<int>(n, INF));
    dp[1][0] = 0;
    for (int mask = 0; mask < size; mask++)
        for (int u = 0; u < n; u++)
            if (dp[mask][u] != INF)
                for (int v = 0; v < n; v++)
                    if ((mask & (1 << v)) == 0) {
                        int next = mask | (1 << v);
                        dp[next][v] = min(dp[next][v], dp[mask][u] + cost[u][v]);
                    }
    int full = size - 1, answer = INF;
    for (int u = 1; u < n; u++) answer = min(answer, dp[full][u] + cost[u][0]);
    return answer;
}
int main() {
    int n;
    cin >> n;
    vector<vector<int>> cost(n, vector<int>(n));
    for (auto& row : cost) for (int& x : row) cin >> x;
    cout << tspBitmask(cost) << endl;
    return 0;
}`
    },
    'tsp-h4': {
        python: `def tsp_bitmask(cost):
    n = len(cost)
    size = 1 << n
    INF = 10**18
    dp = [[INF] * n for _ in range(size)]
    dp[1][0] = 0
    for mask in range(size):
        for u in range(n):
            if dp[mask][u] == INF:
                continue
            for v in range(n):
                if not (mask & (1 << v)):
                    next_mask = mask | (1 << v)
                    dp[next_mask][v] = min(dp[next_mask][v], dp[mask][u] + cost[u][v])
    full = size - 1
    return min(dp[full][u] + cost[u][0] for u in range(1, n))
n = int(input())
cost = [list(map(int, input().split())) for _ in range(n)]
print(tsp_bitmask(cost))`,
        java: `import java.util.*;
public class Main {
    public static int tspBitmask(int[][] cost) {
        int n = cost.length, size = 1 << n, INF = 1000000000;
        int[][] dp = new int[size][n];
        for (int i = 0; i < size; i++) Arrays.fill(dp[i], INF);
        dp[1][0] = 0;
        for (int mask = 0; mask < size; mask++)
            for (int u = 0; u < n; u++)
                if (dp[mask][u] != INF)
                    for (int v = 0; v < n; v++)
                        if ((mask & (1 << v)) == 0) {
                            int next = mask | (1 << v);
                            dp[next][v] = Math.min(dp[next][v], dp[mask][u] + cost[u][v]);
                        }
        int full = size - 1, answer = INF;
        for (int u = 1; u < n; u++) answer = Math.min(answer, dp[full][u] + cost[u][0]);
        return answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] cost = new int[n][n];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cost[i][j] = sc.nextInt();
        System.out.println(tspBitmask(cost));
    }
}`,
        c: `#include <stdio.h>
#include <stdlib.h>
#define INF 1000000000
int tspBitmask(int **cost, int n) {
    int size = 1 << n;
    int *dp = malloc(size * n * sizeof(int));
    for (int i = 0; i < size * n; i++) dp[i] = INF;
    dp[n] = 0;
    for (int mask = 0; mask < size; mask++)
        for (int u = 0; u < n; u++) {
            int cur = dp[mask * n + u];
            if (cur == INF) continue;
            for (int v = 0; v < n; v++)
                if ((mask & (1 << v)) == 0) {
                    int next = mask | (1 << v);
                    int index = next * n + v;
                    int value = cur + cost[u][v];
                    if (value < dp[index]) dp[index] = value;
                }
        }
    int full = size - 1, answer = INF;
    for (int u = 1; u < n; u++) {
        int value = dp[full * n + u] + cost[u][0];
        if (value < answer) answer = value;
    }
    free(dp);
    return answer;
}
int main() {
    int n;
    scanf("%d", &n);
    int **cost = malloc(n * sizeof(int *));
    for (int i = 0; i < n; i++) {
        cost[i] = malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);
    }
    printf("%d\\n", tspBitmask(cost, n));
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int tspBitmask(vector<vector<int>>& cost) {
    int n = cost.size(), size = 1 << n;
    const int INF = 1000000000;
    vector<vector<int>> dp(size, vector<int>(n, INF));
    dp[1][0] = 0;
    for (int mask = 0; mask < size; mask++)
        for (int u = 0; u < n; u++)
            if (dp[mask][u] != INF)
                for (int v = 0; v < n; v++)
                    if ((mask & (1 << v)) == 0) {
                        int next = mask | (1 << v);
                        dp[next][v] = min(dp[next][v], dp[mask][u] + cost[u][v]);
                    }
    int full = size - 1, answer = INF;
    for (int u = 1; u < n; u++) answer = min(answer, dp[full][u] + cost[u][0]);
    return answer;
}
int main() {
    int n;
    cin >> n;
    vector<vector<int>> cost(n, vector<int>(n));
    for (auto& row : cost) for (int& x : row) cin >> x;
    cout << tspBitmask(cost) << endl;
    return 0;
}`
    },
    'tsp-h5': {
        python: `def tsp_bitmask(cost):
    n = len(cost)
    size = 1 << n
    INF = 10**18
    dp = [[INF] * n for _ in range(size)]
    dp[1][0] = 0
    for mask in range(size):
        for u in range(n):
            if dp[mask][u] == INF:
                continue
            for v in range(n):
                if (mask & (1 << v)) == 0:
                    next_mask = mask | (1 << v)
                    dp[next_mask][v] = min(dp[next_mask][v], dp[mask][u] + cost[u][v])
    full = size - 1
    return min(dp[full][u] + cost[u][0] for u in range(1, n))
n = int(input())
cost = [list(map(int, input().split())) for _ in range(n)]
print(tsp_bitmask(cost))`,
        java: `import java.util.*;
public class Main {
    public static int tspBitmask(int[][] cost) {
        int n = cost.length, size = 1 << n, INF = 1000000000;
        int[][] dp = new int[size][n];
        for (int i = 0; i < size; i++) Arrays.fill(dp[i], INF);
        dp[1][0] = 0;
        for (int mask = 0; mask < size; mask++)
            for (int u = 0; u < n; u++)
                if (dp[mask][u] != INF)
                    for (int v = 0; v < n; v++)
                        if ((mask & (1 << v)) == 0) {
                            int next = mask | (1 << v);
                            dp[next][v] = Math.min(dp[next][v], dp[mask][u] + cost[u][v]);
                        }
        int full = size - 1, answer = INF;
        for (int u = 1; u < n; u++) answer = Math.min(answer, dp[full][u] + cost[u][0]);
        return answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] cost = new int[n][n];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cost[i][j] = sc.nextInt();
        System.out.println(tspBitmask(cost));
    }
}`,
        c: `#include <stdio.h>
#include <stdlib.h>
#define INF 1000000000
int tspBitmask(int **cost, int n) {
    int size = 1 << n;
    int *dp = malloc(size * n * sizeof(int));
    for (int i = 0; i < size * n; i++) dp[i] = INF;
    dp[n] = 0;
    for (int mask = 0; mask < size; mask++)
        for (int u = 0; u < n; u++) {
            int cur = dp[mask * n + u];
            if (cur == INF) continue;
            for (int v = 0; v < n; v++)
                if ((mask & (1 << v)) == 0) {
                    int next = mask | (1 << v);
                    int index = next * n + v;
                    int value = cur + cost[u][v];
                    if (value < dp[index]) dp[index] = value;
                }
        }
    int full = size - 1, answer = INF;
    for (int u = 1; u < n; u++) {
        int value = dp[full * n + u] + cost[u][0];
        if (value < answer) answer = value;
    }
    free(dp);
    return answer;
}
int main() {
    int n;
    scanf("%d", &n);
    int **cost = malloc(n * sizeof(int *));
    for (int i = 0; i < n; i++) {
        cost[i] = malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &cost[i][j]);
    }
    printf("%d\\n", tspBitmask(cost, n));
    return 0;
}`,
        cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int tspBitmask(vector<vector<int>>& cost) {
    int n = cost.size(), size = 1 << n;
    const int INF = 1000000000;
    vector<vector<int>> dp(size, vector<int>(n, INF));
    dp[1][0] = 0;
    for (int mask = 0; mask < size; mask++)
        for (int u = 0; u < n; u++)
            if (dp[mask][u] != INF)
                for (int v = 0; v < n; v++)
                    if ((mask & (1 << v)) == 0) {
                        int next = mask | (1 << v);
                        dp[next][v] = min(dp[next][v], dp[mask][u] + cost[u][v]);
                    }
    int full = size - 1, answer = INF;
    for (int u = 1; u < n; u++) answer = min(answer, dp[full][u] + cost[u][0]);
    return answer;
}
int main() {
    int n;
    cin >> n;
    vector<vector<int>> cost(n, vector<int>(n));
    for (auto& row : cost) for (int& x : row) cin >> x;
    cout << tspBitmask(cost) << endl;
    return 0;
}`
    }
};