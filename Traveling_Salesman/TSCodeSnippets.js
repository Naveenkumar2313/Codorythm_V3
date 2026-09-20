export const TSPcodeSnippets = {
    c: `#include <stdio.h>
#include <limits.h>
#define MAX_N 15
int n;
int cost[MAX_N][MAX_N];
int dp[1 << MAX_N][MAX_N];
int min(int a, int b) {
    return a < b ? a : b;
}
int tsp(int mask, int pos) {
    if (mask == (1 << n) - 1) {
        return cost[pos][0];
    }
    if (dp[mask][pos] != -1) {
        return dp[mask][pos];
    }
    int ans = INT_MAX;
    for (int city = 0; city < n; city++) {
        if (!(mask & (1 << city))) {
            int newCost = cost[pos][city] + tsp(mask | (1 << city), city);
            ans = min(ans, newCost);
        }
    }
    return dp[mask][pos] = ans;
}
int main() {
    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            scanf("%d", &cost[i][j]);
        }
    }
    for (int mask = 0; mask < (1 << n); mask++) {
        for (int i = 0; i < n; i++) {
            dp[mask][i] = -1;
        }
    }
    printf("%d\\n", tsp(1, 0));
    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>
#include <climits>
using namespace std;
int n;
vector<vector<int>> cost;
vector<vector<int>> dp;
int tsp(int mask, int pos) {
    if (mask == (1 << n) - 1) {
        return cost[pos][0];
    }
    if (dp[mask][pos] != -1) {
        return dp[mask][pos];
    }
    int ans = INT_MAX;
    for (int city = 0; city < n; city++) {
        if (!(mask & (1 << city))) {
            int newCost = cost[pos][city] + tsp(mask | (1 << city), city);
            ans = min(ans, newCost);
        }
    }

    return dp[mask][pos] = ans;
}

int main() {
    cin >> n;

    cost.resize(n, vector<int>(n));

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> cost[i][j];
        }
    }

    dp.assign(1 << n, vector<int>(n, -1));

    cout << tsp(1, 0) << endl;

    return 0;
}`,

    python: `def tsp(mask, pos, n, cost, dp):
    if mask == (1 << n) - 1:
        return cost[pos][0]

    if dp[mask][pos] != -1:
        return dp[mask][pos]

    ans = float('inf')

    for city in range(n):
        if not (mask & (1 << city)):
            new_cost = cost[pos][city] + tsp(mask | (1 << city), city, n, cost, dp)
            ans = min(ans, new_cost)

    dp[mask][pos] = ans
    return ans

n = int(input())
cost = []

for _ in range(n):
    cost.append(list(map(int, input().split())))

dp = [[-1] * n for _ in range(1 << n)]

print(tsp(1, 0, n, cost, dp))`,

    java: `import java.util.*;

public class Main {
    static int n;
    static int[][] cost;
    static int[][] dp;

    static int tsp(int mask, int pos) {
        if (mask == (1 << n) - 1) {
            return cost[pos][0];
        }

        if (dp[mask][pos] != -1) {
            return dp[mask][pos];
        }

        int ans = Integer.MAX_VALUE;

        for (int city = 0; city < n; city++) {
            if ((mask & (1 << city)) == 0) {
                int newCost = cost[pos][city] + tsp(mask | (1 << city), city);
                ans = Math.min(ans, newCost);
            }
        }

        return dp[mask][pos] = ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        n = sc.nextInt();
        cost = new int[n][n];

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                cost[i][j] = sc.nextInt();
            }
        }

        dp = new int[1 << n][n];

        for (int[] row : dp) {
            Arrays.fill(row, -1);
        }

        System.out.println(tsp(1, 0));

        sc.close();
    }
}`
};