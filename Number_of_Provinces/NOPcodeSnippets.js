export const NOPcodeSnippets = {
    python: `def find_provinces(isConnected):
    n = len(isConnected)
    visited = [False] * n

    def dfs(city):
        visited[city] = True
        for neighbor in range(n):
            if isConnected[city][neighbor] == 1 and not visited[neighbor]:
                dfs(neighbor)

    provinces = 0
    for i in range(n):
        if not visited[i]:
            dfs(i)
            provinces += 1

    return provinces

isConnected = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]
]
print("Number of Provinces:", find_provinces(isConnected))
`,

    java: `import java.util.*;

public class NumberOfProvinces {

    static void dfs(int[][] isConnected, boolean[] visited, int city) {
        visited[city] = true;
        for (int neighbor = 0; neighbor < isConnected.length; neighbor++) {
            if (isConnected[city][neighbor] == 1 && !visited[neighbor]) {
                dfs(isConnected, visited, neighbor);
            }
        }
    }

    public static int findProvinces(int[][] isConnected) {
        int n = isConnected.length;
        boolean[] visited = new boolean[n];
        int provinces = 0;

        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                dfs(isConnected, visited, i);
                provinces++;
            }
        }
        return provinces;
    }

    public static void main(String[] args) {
        int[][] isConnected = {
            {1, 1, 0},
            {1, 1, 0},
            {0, 0, 1}
        };
        System.out.println("Number of Provinces: " + findProvinces(isConnected));
    }
}
`,

    c: `#include <stdio.h>
#include <stdbool.h>

#define MAX 100

void dfs(int isConnected[MAX][MAX], bool visited[], int city, int n) {
    visited[city] = true;
    for (int neighbor = 0; neighbor < n; neighbor++) {
        if (isConnected[city][neighbor] == 1 && !visited[neighbor]) {
            dfs(isConnected, visited, neighbor, n);
        }
    }
}

int findProvinces(int isConnected[MAX][MAX], int n) {
    bool visited[MAX] = {false};
    int provinces = 0;

    for (int i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(isConnected, visited, i, n);
            provinces++;
        }
    }
    return provinces;
}

int main() {
    int n = 3;
    int isConnected[MAX][MAX] = {
        {1, 1, 0},
        {1, 1, 0},
        {0, 0, 1}
    };
    printf("Number of Provinces: %d\\n", findProvinces(isConnected, n));
    return 0;
}
`,

    cpp: `#include <iostream>
#include <vector>
using namespace std;

void dfs(vector<vector<int>>& isConnected, vector<bool>& visited, int city) {
    visited[city] = true;
    for (int neighbor = 0; neighbor < isConnected.size(); neighbor++) {
        if (isConnected[city][neighbor] == 1 && !visited[neighbor]) {
            dfs(isConnected, visited, neighbor);
        }
    }
}

int findProvinces(vector<vector<int>>& isConnected) {
    int n = isConnected.size();
    vector<bool> visited(n, false);
    int provinces = 0;

    for (int i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(isConnected, visited, i);
            provinces++;
        }
    }
    return provinces;
}

int main() {
    vector<vector<int>> isConnected = {
        {1, 1, 0},
        {1, 1, 0},
        {0, 0, 1}
    };
    cout << "Number of Provinces: " << findProvinces(isConnected) << endl;
    return 0;
}
`
};
