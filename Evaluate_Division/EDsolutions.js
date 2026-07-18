export const EDsolutions = {
  // --- EASY ---
  'ed-e1': {
    python: `def calc_equation(equations, values, queries):
    graph = {}
    for (a, b), val in zip(equations, values):
        if a not in graph: graph[a] = {}
        if b not in graph: graph[b] = {}
        graph[a][b] = val
        graph[b][a] = 1.0 / val
    results = []
    for c, d in queries:
        if c not in graph or d not in graph:
            results.append(-1.0)
        elif c == d:
            results.append(1.0)
        elif d in graph[c]:
            results.append(graph[c][d])
        else:
            visited = set()
            stack = [(c, 1.0)]
            visited.add(c)
            found = -1.0
            while stack:
                node, prod = stack.pop()
                if node == d:
                    found = prod
                    break
                for nei, w in graph[node].items():
                    if nei not in visited:
                        visited.add(nei)
                        stack.append((nei, prod * w))
            results.append(found)
    return results

n = int(input())
equations = []
values = []
for _ in range(n):
    parts = input().split()
    equations.append([parts[0], parts[1]])
    values.append(float(parts[2]))
m = int(input())
queries = [input().split() for _ in range(m)]
res = calc_equation(equations, values, queries)
print(" ".join(f"{v:.5f}" for v in res))`,
    java: `import java.util.*;

public class Solution {
    public static double[] calcEquation(String[][] equations, double[] values, String[][] queries) {
        Map<String, Map<String, Double>> graph = new HashMap<>();
        for (int i = 0; i < equations.length; i++) {
            String a = equations[i][0], b = equations[i][1];
            graph.putIfAbsent(a, new HashMap<>());
            graph.putIfAbsent(b, new HashMap<>());
            graph.get(a).put(b, values[i]);
            graph.get(b).put(a, 1.0 / values[i]);
        }
        double[] results = new double[queries.length];
        for (int i = 0; i < queries.length; i++) {
            String c = queries[i][0], d = queries[i][1];
            if (!graph.containsKey(c) || !graph.containsKey(d)) {
                results[i] = -1.0;
            } else if (c.equals(d)) {
                results[i] = 1.0;
            } else if (graph.get(c).containsKey(d)) {
                results[i] = graph.get(c).get(d);
            } else {
                Set<String> visited = new HashSet<>();
                Stack<String> nodeStack = new Stack<>();
                Stack<Double> prodStack = new Stack<>();
                nodeStack.push(c);
                prodStack.push(1.0);
                visited.add(c);
                double found = -1.0;
                while (!nodeStack.isEmpty()) {
                    String node = nodeStack.pop();
                    double prod = prodStack.pop();
                    if (node.equals(d)) { found = prod; break; }
                    for (Map.Entry<String, Double> e : graph.get(node).entrySet()) {
                        if (!visited.contains(e.getKey())) {
                            visited.add(e.getKey());
                            nodeStack.push(e.getKey());
                            prodStack.push(prod * e.getValue());
                        }
                    }
                }
                results[i] = found;
            }
        }
        return results;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] equations = new String[n][2];
            double[] values = new double[n];
            for (int i = 0; i < n; i++) {
                equations[i][0] = sc.next();
                equations[i][1] = sc.next();
                values[i] = sc.nextDouble();
            }
            int m = sc.nextInt();
            String[][] queries = new String[m][2];
            for (int i = 0; i < m; i++) {
                queries[i][0] = sc.next();
                queries[i][1] = sc.next();
            }
            double[] res = calcEquation(equations, values, queries);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(String.format(Locale.US, "%.5f", res[i]));
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>

#define MAXN 105
#define MAXVARS 25

int nodeCount;
char nodes[MAXVARS][25];
double graph[MAXVARS][MAXVARS];

int getIndex(const char* s) {
    for (int i = 0; i < nodeCount; i++)
        if (strcmp(nodes[i], s) == 0) return i;
    strcpy(nodes[nodeCount], s);
    for (int i = 0; i <= nodeCount; i++) {
        graph[nodeCount][i] = -1.0;
        graph[i][nodeCount] = -1.0;
    }
    graph[nodeCount][nodeCount] = 1.0;
    return nodeCount++;
}

void addEdge(int u, int v, double w) {
    graph[u][v] = w;
    graph[v][u] = 1.0 / w;
}

double dfs(int u, int target, int* visited) {
    if (u == target) return 1.0;
    visited[u] = 1;
    for (int v = 0; v < nodeCount; v++) {
        if (!visited[v] && graph[u][v] > -0.5) {
            double res = dfs(v, target, visited);
            if (res >= 0) {
                return graph[u][v] * res;
            }
        }
    }
    return -1.0;
}

double calcQuery(int u, int v) {
    if (u == -1 || v == -1) return -1.0;
    if (u == v) return 1.0;
    if (graph[u][v] > -0.5) return graph[u][v];
    int visited[MAXVARS] = {0};
    double res = dfs(u, v, visited);
    if (res > -0.5) graph[u][v] = res;
    return res;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    nodeCount = 0;
    for (int i = 0; i < MAXVARS; i++)
        for (int j = 0; j < MAXVARS; j++)
            graph[i][j] = -1.0;
    char a[25], b[25];
    double val;
    for (int i = 0; i < n; i++) {
        if (scanf("%s %s %lf", a, b, &val) != 3) return 0;
        int u = getIndex(a), v = getIndex(b);
        addEdge(u, v, val);
    }
    int m;
    if (scanf("%d", &m) != 1) return 0;
    for (int i = 0; i < m; i++) {
        if (scanf("%s %s", a, b) != 2) return 0;
        int u = -1, v = -1;
        for (int j = 0; j < nodeCount; j++) {
            if (strcmp(nodes[j], a) == 0) u = j;
            if (strcmp(nodes[j], b) == 0) v = j;
        }
        double res = calcQuery(u, v);
        if (i > 0) printf(" ");
        printf("%.5f", res);
    }
    printf("\\n");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <stack>
#include <set>
#include <iomanip>

using namespace std;

vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {
    unordered_map<string, unordered_map<string, double>> graph;
    for (int i = 0; i < (int)equations.size(); i++) {
        string a = equations[i][0], b = equations[i][1];
        graph[a][b] = values[i];
        graph[b][a] = 1.0 / values[i];
    }
    vector<double> results;
    for (auto& q : queries) {
        string c = q[0], d = q[1];
        if (graph.find(c) == graph.end() || graph.find(d) == graph.end()) {
            results.push_back(-1.0);
        } else if (c == d) {
            results.push_back(1.0);
        } else if (graph[c].find(d) != graph[c].end()) {
            results.push_back(graph[c][d]);
        } else {
            set<string> visited;
            stack<pair<string, double>> st;
            st.push({c, 1.0});
            visited.insert(c);
            double found = -1.0;
            while (!st.empty()) {
                auto [node, prod] = st.top(); st.pop();
                if (node == d) { found = prod; break; }
                for (auto& [nei, w] : graph[node]) {
                    if (visited.find(nei) == visited.end()) {
                        visited.insert(nei);
                        st.push({nei, prod * w});
                    }
                }
            }
            results.push_back(found);
        }
    }
    return results;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> equations(n, vector<string>(2));
        vector<double> values(n);
        for (int i = 0; i < n; i++) {
            cin >> equations[i][0] >> equations[i][1] >> values[i];
        }
        int m;
        cin >> m;
        vector<vector<string>> queries(m, vector<string>(2));
        for (int i = 0; i < m; i++) {
            cin >> queries[i][0] >> queries[i][1];
        }
        vector<double> res = calcEquation(equations, values, queries);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << fixed << setprecision(5) << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'ed-e2': {
    python: `def calc_equation(equations, values, queries):
    graph = {}
    for (a, b), val in zip(equations, values):
        if a not in graph: graph[a] = {}
        if b not in graph: graph[b] = {}
        graph[a][b] = val
        graph[b][a] = 1.0 / val
    results = []
    for c, d in queries:
        if c not in graph or d not in graph:
            results.append(-1.0)
        elif c == d:
            results.append(1.0)
        elif d in graph[c]:
            results.append(graph[c][d])
        else:
            visited = set()
            stack = [(c, 1.0)]
            visited.add(c)
            found = -1.0
            while stack:
                node, prod = stack.pop()
                if node == d:
                    found = prod
                    break
                for nei, w in graph[node].items():
                    if nei not in visited:
                        visited.add(nei)
                        stack.append((nei, prod * w))
            results.append(found)
    return results

n = int(input())
equations = []
values = []
for _ in range(n):
    parts = input().split()
    equations.append([parts[0], parts[1]])
    values.append(float(parts[2]))
m = int(input())
queries = [input().split() for _ in range(m)]
res = calc_equation(equations, values, queries)
print(" ".join(f"{v:.5f}" for v in res))`,
    java: `import java.util.*;

public class Solution {
    public static double[] calcEquation(String[][] equations, double[] values, String[][] queries) {
        Map<String, Map<String, Double>> graph = new HashMap<>();
        for (int i = 0; i < equations.length; i++) {
            String a = equations[i][0], b = equations[i][1];
            graph.putIfAbsent(a, new HashMap<>());
            graph.putIfAbsent(b, new HashMap<>());
            graph.get(a).put(b, values[i]);
            graph.get(b).put(a, 1.0 / values[i]);
        }
        double[] results = new double[queries.length];
        for (int i = 0; i < queries.length; i++) {
            String c = queries[i][0], d = queries[i][1];
            if (!graph.containsKey(c) || !graph.containsKey(d)) {
                results[i] = -1.0;
            } else if (c.equals(d)) {
                results[i] = 1.0;
            } else {
                Set<String> visited = new HashSet<>();
                Stack<String> nodeStack = new Stack<>();
                Stack<Double> prodStack = new Stack<>();
                nodeStack.push(c);
                prodStack.push(1.0);
                visited.add(c);
                double found = -1.0;
                while (!nodeStack.isEmpty()) {
                    String node = nodeStack.pop();
                    double prod = prodStack.pop();
                    if (node.equals(d)) { found = prod; break; }
                    for (Map.Entry<String, Double> e : graph.get(node).entrySet()) {
                        if (!visited.contains(e.getKey())) {
                            visited.add(e.getKey());
                            nodeStack.push(e.getKey());
                            prodStack.push(prod * e.getValue());
                        }
                    }
                }
                results[i] = found;
            }
        }
        return results;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] equations = new String[n][2];
            double[] values = new double[n];
            for (int i = 0; i < n; i++) {
                equations[i][0] = sc.next();
                equations[i][1] = sc.next();
                values[i] = sc.nextDouble();
            }
            int m = sc.nextInt();
            String[][] queries = new String[m][2];
            for (int i = 0; i < m; i++) {
                queries[i][0] = sc.next();
                queries[i][1] = sc.next();
            }
            double[] res = calcEquation(equations, values, queries);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(String.format(Locale.US, "%.5f", res[i]));
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXVARS 25

int nodeCount;
char nodes[MAXVARS][25];
double graph[MAXVARS][MAXVARS];

int getIndex(const char* s) {
    for (int i = 0; i < nodeCount; i++)
        if (strcmp(nodes[i], s) == 0) return i;
    strcpy(nodes[nodeCount], s);
    graph[nodeCount][nodeCount] = 1.0;
    for (int i = 0; i < nodeCount; i++) {
        graph[nodeCount][i] = -1.0;
        graph[i][nodeCount] = -1.0;
    }
    return nodeCount++;
}

int dfs(int u, int target, int* visited, double* prod) {
    if (u == target) return 1;
    visited[u] = 1;
    for (int v = 0; v < nodeCount; v++) {
        if (!visited[v] && graph[u][v] > -0.5) {
            double old = *prod;
            *prod *= graph[u][v];
            if (dfs(v, target, visited, prod)) return 1;
            *prod = old;
        }
    }
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    nodeCount = 0;
    for (int i = 0; i < MAXVARS; i++)
        for (int j = 0; j < MAXVARS; j++)
            graph[i][j] = -1.0;
    char a[25], b[25];
    double val;
    for (int i = 0; i < n; i++) {
        if (scanf("%s %s %lf", a, b, &val) != 3) return 0;
        int u = getIndex(a), v = getIndex(b);
        graph[u][v] = val;
        graph[v][u] = 1.0 / val;
    }
    int m;
    if (scanf("%d", &m) != 1) return 0;
    for (int i = 0; i < m; i++) {
        if (scanf("%s %s", a, b) != 2) return 0;
        int u = -1, v = -1;
        for (int j = 0; j < nodeCount; j++) {
            if (strcmp(nodes[j], a) == 0) u = j;
            if (strcmp(nodes[j], b) == 0) v = j;
        }
        double res;
        if (u == -1 || v == -1) {
            res = -1.0;
        } else if (u == v) {
            res = 1.0;
        } else if (graph[u][v] > -0.5) {
            res = graph[u][v];
        } else {
            int visited[MAXVARS] = {0};
            double prod = 1.0;
            if (dfs(u, v, visited, &prod)) res = prod;
            else res = -1.0;
        }
        if (i > 0) printf(" ");
        printf("%.5f", res);
    }
    printf("\\n");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <stack>
#include <set>
#include <iomanip>

using namespace std;

vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {
    unordered_map<string, unordered_map<string, double>> graph;
    for (int i = 0; i < (int)equations.size(); i++) {
        string a = equations[i][0], b = equations[i][1];
        graph[a][b] = values[i];
        graph[b][a] = 1.0 / values[i];
    }
    vector<double> results;
    for (auto& q : queries) {
        string c = q[0], d = q[1];
        if (graph.find(c) == graph.end() || graph.find(d) == graph.end()) {
            results.push_back(-1.0);
        } else if (c == d) {
            results.push_back(1.0);
        } else {
            set<string> visited;
            stack<pair<string, double>> st;
            st.push({c, 1.0});
            visited.insert(c);
            double found = -1.0;
            while (!st.empty()) {
                auto [node, prod] = st.top(); st.pop();
                if (node == d) { found = prod; break; }
                for (auto& [nei, w] : graph[node]) {
                    if (visited.find(nei) == visited.end()) {
                        visited.insert(nei);
                        st.push({nei, prod * w});
                    }
                }
            }
            results.push_back(found);
        }
    }
    return results;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> equations(n, vector<string>(2));
        vector<double> values(n);
        for (int i = 0; i < n; i++) {
            cin >> equations[i][0] >> equations[i][1] >> values[i];
        }
        int m;
        cin >> m;
        vector<vector<string>> queries(m, vector<string>(2));
        for (int i = 0; i < m; i++) {
            cin >> queries[i][0] >> queries[i][1];
        }
        vector<double> res = calcEquation(equations, values, queries);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << fixed << setprecision(5) << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'ed-e3': {
    python: `def calc_equation(equations, values, queries):
    graph = {}
    for (a, b), val in zip(equations, values):
        if a not in graph: graph[a] = {}
        if b not in graph: graph[b] = {}
        graph[a][b] = val
        graph[b][a] = 1.0 / val
    results = []
    for c, d in queries:
        if c not in graph or d not in graph:
            results.append(-1.0)
        elif c == d:
            results.append(1.0)
        elif d in graph[c]:
            results.append(graph[c][d])
        else:
            visited = set()
            stack = [(c, 1.0)]
            visited.add(c)
            found = -1.0
            while stack:
                node, prod = stack.pop()
                if node == d:
                    found = prod
                    break
                for nei, w in graph[node].items():
                    if nei not in visited:
                        visited.add(nei)
                        stack.append((nei, prod * w))
            results.append(found)
    return results

n = int(input())
equations = []
values = []
for _ in range(n):
    parts = input().split()
    equations.append([parts[0], parts[1]])
    values.append(float(parts[2]))
m = int(input())
queries = [input().split() for _ in range(m)]
res = calc_equation(equations, values, queries)
print(" ".join(f"{v:.5f}" for v in res))`,
    java: `import java.util.*;

public class Solution {
    public static double[] calcEquation(String[][] equations, double[] values, String[][] queries) {
        Map<String, Map<String, Double>> graph = new HashMap<>();
        for (int i = 0; i < equations.length; i++) {
            String a = equations[i][0], b = equations[i][1];
            graph.putIfAbsent(a, new HashMap<>());
            graph.putIfAbsent(b, new HashMap<>());
            graph.get(a).put(b, values[i]);
            graph.get(b).put(a, 1.0 / values[i]);
        }
        double[] results = new double[queries.length];
        for (int i = 0; i < queries.length; i++) {
            String c = queries[i][0], d = queries[i][1];
            if (!graph.containsKey(c) || !graph.containsKey(d)) {
                results[i] = -1.0;
            } else if (c.equals(d)) {
                results[i] = 1.0;
            } else {
                Set<String> visited = new HashSet<>();
                Stack<String> nodeStack = new Stack<>();
                Stack<Double> prodStack = new Stack<>();
                nodeStack.push(c);
                prodStack.push(1.0);
                visited.add(c);
                double found = -1.0;
                while (!nodeStack.isEmpty()) {
                    String node = nodeStack.pop();
                    double prod = prodStack.pop();
                    if (node.equals(d)) { found = prod; break; }
                    for (Map.Entry<String, Double> e : graph.get(node).entrySet()) {
                        if (!visited.contains(e.getKey())) {
                            visited.add(e.getKey());
                            nodeStack.push(e.getKey());
                            prodStack.push(prod * e.getValue());
                        }
                    }
                }
                results[i] = found;
            }
        }
        return results;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] equations = new String[n][2];
            double[] values = new double[n];
            for (int i = 0; i < n; i++) {
                equations[i][0] = sc.next();
                equations[i][1] = sc.next();
                values[i] = sc.nextDouble();
            }
            int m = sc.nextInt();
            String[][] queries = new String[m][2];
            for (int i = 0; i < m; i++) {
                queries[i][0] = sc.next();
                queries[i][1] = sc.next();
            }
            double[] res = calcEquation(equations, values, queries);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(String.format(Locale.US, "%.5f", res[i]));
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXVARS 25

int nodeCount;
char nodes[MAXVARS][25];
double graph[MAXVARS][MAXVARS];

int getIndex(const char* s) {
    for (int i = 0; i < nodeCount; i++)
        if (strcmp(nodes[i], s) == 0) return i;
    strcpy(nodes[nodeCount], s);
    graph[nodeCount][nodeCount] = 1.0;
    for (int i = 0; i < nodeCount; i++) {
        graph[nodeCount][i] = -1.0;
        graph[i][nodeCount] = -1.0;
    }
    return nodeCount++;
}

int dfs(int u, int target, int* visited, double* prod) {
    if (u == target) return 1;
    visited[u] = 1;
    for (int v = 0; v < nodeCount; v++) {
        if (!visited[v] && graph[u][v] > -0.5) {
            double old = *prod;
            *prod *= graph[u][v];
            if (dfs(v, target, visited, prod)) return 1;
            *prod = old;
        }
    }
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    nodeCount = 0;
    for (int i = 0; i < MAXVARS; i++)
        for (int j = 0; j < MAXVARS; j++)
            graph[i][j] = -1.0;
    char a[25], b[25];
    double val;
    for (int i = 0; i < n; i++) {
        if (scanf("%s %s %lf", a, b, &val) != 3) return 0;
        int u = getIndex(a), v = getIndex(b);
        graph[u][v] = val;
        graph[v][u] = 1.0 / val;
    }
    int m;
    if (scanf("%d", &m) != 1) return 0;
    for (int i = 0; i < m; i++) {
        if (scanf("%s %s", a, b) != 2) return 0;
        int u = -1, v = -1;
        for (int j = 0; j < nodeCount; j++) {
            if (strcmp(nodes[j], a) == 0) u = j;
            if (strcmp(nodes[j], b) == 0) v = j;
        }
        double res;
        if (u == -1 || v == -1) res = -1.0;
        else if (u == v) res = 1.0;
        else if (graph[u][v] > -0.5) res = graph[u][v];
        else {
            int visited[MAXVARS] = {0};
            double prod = 1.0;
            if (dfs(u, v, visited, &prod)) res = prod;
            else res = -1.0;
        }
        if (i > 0) printf(" ");
        printf("%.5f", res);
    }
    printf("\\n");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <stack>
#include <set>
#include <iomanip>

using namespace std;

vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {
    unordered_map<string, unordered_map<string, double>> graph;
    for (int i = 0; i < (int)equations.size(); i++) {
        string a = equations[i][0], b = equations[i][1];
        graph[a][b] = values[i];
        graph[b][a] = 1.0 / values[i];
    }
    vector<double> results;
    for (auto& q : queries) {
        string c = q[0], d = q[1];
        if (graph.find(c) == graph.end() || graph.find(d) == graph.end()) {
            results.push_back(-1.0);
        } else if (c == d) {
            results.push_back(1.0);
        } else {
            set<string> visited;
            stack<pair<string, double>> st;
            st.push({c, 1.0});
            visited.insert(c);
            double found = -1.0;
            while (!st.empty()) {
                auto [node, prod] = st.top(); st.pop();
                if (node == d) { found = prod; break; }
                for (auto& [nei, w] : graph[node]) {
                    if (visited.find(nei) == visited.end()) {
                        visited.insert(nei);
                        st.push({nei, prod * w});
                    }
                }
            }
            results.push_back(found);
        }
    }
    return results;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> equations(n, vector<string>(2));
        vector<double> values(n);
        for (int i = 0; i < n; i++) {
            cin >> equations[i][0] >> equations[i][1] >> values[i];
        }
        int m;
        cin >> m;
        vector<vector<string>> queries(m, vector<string>(2));
        for (int i = 0; i < m; i++) {
            cin >> queries[i][0] >> queries[i][1];
        }
        vector<double> res = calcEquation(equations, values, queries);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << fixed << setprecision(5) << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'ed-e4': {
    python: `def calc_equation(equations, values, queries):
    graph = {}
    for (a, b), val in zip(equations, values):
        if a not in graph: graph[a] = {}
        if b not in graph: graph[b] = {}
        graph[a][b] = val
        graph[b][a] = 1.0 / val
    results = []
    for c, d in queries:
        if c not in graph or d not in graph:
            results.append(-1.0)
        elif c == d:
            results.append(1.0)
        elif d in graph[c]:
            results.append(graph[c][d])
        else:
            visited = set()
            stack = [(c, 1.0)]
            visited.add(c)
            found = -1.0
            while stack:
                node, prod = stack.pop()
                if node == d:
                    found = prod
                    break
                for nei, w in graph[node].items():
                    if nei not in visited:
                        visited.add(nei)
                        stack.append((nei, prod * w))
            results.append(found)
    return results

n = int(input())
equations = []
values = []
for _ in range(n):
    parts = input().split()
    equations.append([parts[0], parts[1]])
    values.append(float(parts[2]))
m = int(input())
queries = [input().split() for _ in range(m)]
res = calc_equation(equations, values, queries)
print(" ".join(f"{v:.5f}" for v in res))`,
    java: `import java.util.*;

public class Solution {
    public static double[] calcEquation(String[][] equations, double[] values, String[][] queries) {
        Map<String, Map<String, Double>> graph = new HashMap<>();
        for (int i = 0; i < equations.length; i++) {
            String a = equations[i][0], b = equations[i][1];
            graph.putIfAbsent(a, new HashMap<>());
            graph.putIfAbsent(b, new HashMap<>());
            graph.get(a).put(b, values[i]);
            graph.get(b).put(a, 1.0 / values[i]);
        }
        double[] results = new double[queries.length];
        for (int i = 0; i < queries.length; i++) {
            String c = queries[i][0], d = queries[i][1];
            if (!graph.containsKey(c) || !graph.containsKey(d)) {
                results[i] = -1.0;
            } else if (c.equals(d)) {
                results[i] = 1.0;
            } else {
                Set<String> visited = new HashSet<>();
                Stack<String> nodeStack = new Stack<>();
                Stack<Double> prodStack = new Stack<>();
                nodeStack.push(c);
                prodStack.push(1.0);
                visited.add(c);
                double found = -1.0;
                while (!nodeStack.isEmpty()) {
                    String node = nodeStack.pop();
                    double prod = prodStack.pop();
                    if (node.equals(d)) { found = prod; break; }
                    for (Map.Entry<String, Double> e : graph.get(node).entrySet()) {
                        if (!visited.contains(e.getKey())) {
                            visited.add(e.getKey());
                            nodeStack.push(e.getKey());
                            prodStack.push(prod * e.getValue());
                        }
                    }
                }
                results[i] = found;
            }
        }
        return results;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] equations = new String[n][2];
            double[] values = new double[n];
            for (int i = 0; i < n; i++) {
                equations[i][0] = sc.next();
                equations[i][1] = sc.next();
                values[i] = sc.nextDouble();
            }
            int m = sc.nextInt();
            String[][] queries = new String[m][2];
            for (int i = 0; i < m; i++) {
                queries[i][0] = sc.next();
                queries[i][1] = sc.next();
            }
            double[] res = calcEquation(equations, values, queries);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(String.format(Locale.US, "%.5f", res[i]));
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXVARS 25

int nodeCount;
char nodes[MAXVARS][25];
double graph[MAXVARS][MAXVARS];

int getIndex(const char* s) {
    for (int i = 0; i < nodeCount; i++)
        if (strcmp(nodes[i], s) == 0) return i;
    strcpy(nodes[nodeCount], s);
    graph[nodeCount][nodeCount] = 1.0;
    for (int i = 0; i < nodeCount; i++) {
        graph[nodeCount][i] = -1.0;
        graph[i][nodeCount] = -1.0;
    }
    return nodeCount++;
}

int dfs(int u, int target, int* visited, double* prod) {
    if (u == target) return 1;
    visited[u] = 1;
    for (int v = 0; v < nodeCount; v++) {
        if (!visited[v] && graph[u][v] > -0.5) {
            double old = *prod;
            *prod *= graph[u][v];
            if (dfs(v, target, visited, prod)) return 1;
            *prod = old;
        }
    }
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    nodeCount = 0;
    for (int i = 0; i < MAXVARS; i++)
        for (int j = 0; j < MAXVARS; j++)
            graph[i][j] = -1.0;
    char a[25], b[25];
    double val;
    for (int i = 0; i < n; i++) {
        if (scanf("%s %s %lf", a, b, &val) != 3) return 0;
        int u = getIndex(a), v = getIndex(b);
        graph[u][v] = val;
        graph[v][u] = 1.0 / val;
    }
    int m;
    if (scanf("%d", &m) != 1) return 0;
    for (int i = 0; i < m; i++) {
        if (scanf("%s %s", a, b) != 2) return 0;
        int u = -1, v = -1;
        for (int j = 0; j < nodeCount; j++) {
            if (strcmp(nodes[j], a) == 0) u = j;
            if (strcmp(nodes[j], b) == 0) v = j;
        }
        double res;
        if (u == -1 || v == -1) res = -1.0;
        else if (u == v) res = 1.0;
        else if (graph[u][v] > -0.5) res = graph[u][v];
        else {
            int visited[MAXVARS] = {0};
            double prod = 1.0;
            if (dfs(u, v, visited, &prod)) res = prod;
            else res = -1.0;
        }
        if (i > 0) printf(" ");
        printf("%.5f", res);
    }
    printf("\\n");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <stack>
#include <set>
#include <iomanip>

using namespace std;

vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {
    unordered_map<string, unordered_map<string, double>> graph;
    for (int i = 0; i < (int)equations.size(); i++) {
        string a = equations[i][0], b = equations[i][1];
        graph[a][b] = values[i];
        graph[b][a] = 1.0 / values[i];
    }
    vector<double> results;
    for (auto& q : queries) {
        string c = q[0], d = q[1];
        if (graph.find(c) == graph.end() || graph.find(d) == graph.end()) {
            results.push_back(-1.0);
        } else if (c == d) {
            results.push_back(1.0);
        } else {
            set<string> visited;
            stack<pair<string, double>> st;
            st.push({c, 1.0});
            visited.insert(c);
            double found = -1.0;
            while (!st.empty()) {
                auto [node, prod] = st.top(); st.pop();
                if (node == d) { found = prod; break; }
                for (auto& [nei, w] : graph[node]) {
                    if (visited.find(nei) == visited.end()) {
                        visited.insert(nei);
                        st.push({nei, prod * w});
                    }
                }
            }
            results.push_back(found);
        }
    }
    return results;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> equations(n, vector<string>(2));
        vector<double> values(n);
        for (int i = 0; i < n; i++) {
            cin >> equations[i][0] >> equations[i][1] >> values[i];
        }
        int m;
        cin >> m;
        vector<vector<string>> queries(m, vector<string>(2));
        for (int i = 0; i < m; i++) {
            cin >> queries[i][0] >> queries[i][1];
        }
        vector<double> res = calcEquation(equations, values, queries);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << fixed << setprecision(5) << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'ed-e5': {
    python: `def calc_equation(equations, values, queries):
    graph = {}
    for (a, b), val in zip(equations, values):
        if a not in graph: graph[a] = {}
        if b not in graph: graph[b] = {}
        graph[a][b] = val
        graph[b][a] = 1.0 / val
    results = []
    for c, d in queries:
        if c not in graph or d not in graph:
            results.append(-1.0)
        elif c == d:
            results.append(1.0)
        elif d in graph[c]:
            results.append(graph[c][d])
        else:
            visited = set()
            stack = [(c, 1.0)]
            visited.add(c)
            found = -1.0
            while stack:
                node, prod = stack.pop()
                if node == d:
                    found = prod
                    break
                for nei, w in graph[node].items():
                    if nei not in visited:
                        visited.add(nei)
                        stack.append((nei, prod * w))
            results.append(found)
    return results

n = int(input())
equations = []
values = []
for _ in range(n):
    parts = input().split()
    equations.append([parts[0], parts[1]])
    values.append(float(parts[2]))
m = int(input())
queries = [input().split() for _ in range(m)]
res = calc_equation(equations, values, queries)
print(" ".join(f"{v:.5f}" for v in res))`,
    java: `import java.util.*;

public class Solution {
    public static double[] calcEquation(String[][] equations, double[] values, String[][] queries) {
        Map<String, Map<String, Double>> graph = new HashMap<>();
        for (int i = 0; i < equations.length; i++) {
            String a = equations[i][0], b = equations[i][1];
            graph.putIfAbsent(a, new HashMap<>());
            graph.putIfAbsent(b, new HashMap<>());
            graph.get(a).put(b, values[i]);
            graph.get(b).put(a, 1.0 / values[i]);
        }
        double[] results = new double[queries.length];
        for (int i = 0; i < queries.length; i++) {
            String c = queries[i][0], d = queries[i][1];
            if (!graph.containsKey(c) || !graph.containsKey(d)) {
                results[i] = -1.0;
            } else if (c.equals(d)) {
                results[i] = 1.0;
            } else {
                Set<String> visited = new HashSet<>();
                Stack<String> nodeStack = new Stack<>();
                Stack<Double> prodStack = new Stack<>();
                nodeStack.push(c);
                prodStack.push(1.0);
                visited.add(c);
                double found = -1.0;
                while (!nodeStack.isEmpty()) {
                    String node = nodeStack.pop();
                    double prod = prodStack.pop();
                    if (node.equals(d)) { found = prod; break; }
                    for (Map.Entry<String, Double> e : graph.get(node).entrySet()) {
                        if (!visited.contains(e.getKey())) {
                            visited.add(e.getKey());
                            nodeStack.push(e.getKey());
                            prodStack.push(prod * e.getValue());
                        }
                    }
                }
                results[i] = found;
            }
        }
        return results;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] equations = new String[n][2];
            double[] values = new double[n];
            for (int i = 0; i < n; i++) {
                equations[i][0] = sc.next();
                equations[i][1] = sc.next();
                values[i] = sc.nextDouble();
            }
            int m = sc.nextInt();
            String[][] queries = new String[m][2];
            for (int i = 0; i < m; i++) {
                queries[i][0] = sc.next();
                queries[i][1] = sc.next();
            }
            double[] res = calcEquation(equations, values, queries);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(String.format(Locale.US, "%.5f", res[i]));
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXVARS 25

int nodeCount;
char nodes[MAXVARS][25];
double graph[MAXVARS][MAXVARS];

int getIndex(const char* s) {
    for (int i = 0; i < nodeCount; i++)
        if (strcmp(nodes[i], s) == 0) return i;
    strcpy(nodes[nodeCount], s);
    graph[nodeCount][nodeCount] = 1.0;
    for (int i = 0; i < nodeCount; i++) {
        graph[nodeCount][i] = -1.0;
        graph[i][nodeCount] = -1.0;
    }
    return nodeCount++;
}

int dfs(int u, int target, int* visited, double* prod) {
    if (u == target) return 1;
    visited[u] = 1;
    for (int v = 0; v < nodeCount; v++) {
        if (!visited[v] && graph[u][v] > -0.5) {
            double old = *prod;
            *prod *= graph[u][v];
            if (dfs(v, target, visited, prod)) return 1;
            *prod = old;
        }
    }
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    nodeCount = 0;
    for (int i = 0; i < MAXVARS; i++)
        for (int j = 0; j < MAXVARS; j++)
            graph[i][j] = -1.0;
    char a[25], b[25];
    double val;
    for (int i = 0; i < n; i++) {
        if (scanf("%s %s %lf", a, b, &val) != 3) return 0;
        int u = getIndex(a), v = getIndex(b);
        graph[u][v] = val;
        graph[v][u] = 1.0 / val;
    }
    int m;
    if (scanf("%d", &m) != 1) return 0;
    for (int i = 0; i < m; i++) {
        if (scanf("%s %s", a, b) != 2) return 0;
        int u = -1, v = -1;
        for (int j = 0; j < nodeCount; j++) {
            if (strcmp(nodes[j], a) == 0) u = j;
            if (strcmp(nodes[j], b) == 0) v = j;
        }
        double res;
        if (u == -1 || v == -1) res = -1.0;
        else if (u == v) res = 1.0;
        else if (graph[u][v] > -0.5) res = graph[u][v];
        else {
            int visited[MAXVARS] = {0};
            double prod = 1.0;
            if (dfs(u, v, visited, &prod)) res = prod;
            else res = -1.0;
        }
        if (i > 0) printf(" ");
        printf("%.5f", res);
    }
    printf("\\n");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <stack>
#include <set>
#include <iomanip>

using namespace std;

vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {
    unordered_map<string, unordered_map<string, double>> graph;
    for (int i = 0; i < (int)equations.size(); i++) {
        string a = equations[i][0], b = equations[i][1];
        graph[a][b] = values[i];
        graph[b][a] = 1.0 / values[i];
    }
    vector<double> results;
    for (auto& q : queries) {
        string c = q[0], d = q[1];
        if (graph.find(c) == graph.end() || graph.find(d) == graph.end()) {
            results.push_back(-1.0);
        } else if (c == d) {
            results.push_back(1.0);
        } else {
            set<string> visited;
            stack<pair<string, double>> st;
            st.push({c, 1.0});
            visited.insert(c);
            double found = -1.0;
            while (!st.empty()) {
                auto [node, prod] = st.top(); st.pop();
                if (node == d) { found = prod; break; }
                for (auto& [nei, w] : graph[node]) {
                    if (visited.find(nei) == visited.end()) {
                        visited.insert(nei);
                        st.push({nei, prod * w});
                    }
                }
            }
            results.push_back(found);
        }
    }
    return results;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> equations(n, vector<string>(2));
        vector<double> values(n);
        for (int i = 0; i < n; i++) {
            cin >> equations[i][0] >> equations[i][1] >> values[i];
        }
        int m;
        cin >> m;
        vector<vector<string>> queries(m, vector<string>(2));
        for (int i = 0; i < m; i++) {
            cin >> queries[i][0] >> queries[i][1];
        }
        vector<double> res = calcEquation(equations, values, queries);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << fixed << setprecision(5) << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },

  // --- MEDIUM ---
  'ed-m1': {
    python: `def calc_equation(equations, values, queries):
    graph = {}
    for (a, b), val in zip(equations, values):
        if a not in graph: graph[a] = {}
        if b not in graph: graph[b] = {}
        graph[a][b] = val
        graph[b][a] = 1.0 / val
    results = []
    for c, d in queries:
        if c not in graph or d not in graph:
            results.append(-1.0)
        elif c == d:
            results.append(1.0)
        else:
            visited = set()
            stack = [(c, 1.0)]
            visited.add(c)
            found = -1.0
            while stack:
                node, prod = stack.pop()
                if node == d:
                    found = prod
                    break
                for nei, w in graph[node].items():
                    if nei not in visited:
                        visited.add(nei)
                        stack.append((nei, prod * w))
            results.append(found)
    return results

n = int(input())
equations = []
values = []
for _ in range(n):
    parts = input().split()
    equations.append([parts[0], parts[1]])
    values.append(float(parts[2]))
m = int(input())
queries = [input().split() for _ in range(m)]
res = calc_equation(equations, values, queries)
print(" ".join(f"{v:.5f}" for v in res))`,
    java: `import java.util.*;

public class Solution {
    public static double[] calcEquation(String[][] equations, double[] values, String[][] queries) {
        Map<String, Map<String, Double>> graph = new HashMap<>();
        for (int i = 0; i < equations.length; i++) {
            String a = equations[i][0], b = equations[i][1];
            graph.putIfAbsent(a, new HashMap<>());
            graph.putIfAbsent(b, new HashMap<>());
            graph.get(a).put(b, values[i]);
            graph.get(b).put(a, 1.0 / values[i]);
        }
        double[] results = new double[queries.length];
        for (int i = 0; i < queries.length; i++) {
            String c = queries[i][0], d = queries[i][1];
            if (!graph.containsKey(c) || !graph.containsKey(d)) {
                results[i] = -1.0;
            } else if (c.equals(d)) {
                results[i] = 1.0;
            } else {
                Set<String> visited = new HashSet<>();
                Stack<String> nodeStack = new Stack<>();
                Stack<Double> prodStack = new Stack<>();
                nodeStack.push(c);
                prodStack.push(1.0);
                visited.add(c);
                double found = -1.0;
                while (!nodeStack.isEmpty()) {
                    String node = nodeStack.pop();
                    double prod = prodStack.pop();
                    if (node.equals(d)) { found = prod; break; }
                    for (Map.Entry<String, Double> e : graph.get(node).entrySet()) {
                        if (!visited.contains(e.getKey())) {
                            visited.add(e.getKey());
                            nodeStack.push(e.getKey());
                            prodStack.push(prod * e.getValue());
                        }
                    }
                }
                results[i] = found;
            }
        }
        return results;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] equations = new String[n][2];
            double[] values = new double[n];
            for (int i = 0; i < n; i++) {
                equations[i][0] = sc.next();
                equations[i][1] = sc.next();
                values[i] = sc.nextDouble();
            }
            int m = sc.nextInt();
            String[][] queries = new String[m][2];
            for (int i = 0; i < m; i++) {
                queries[i][0] = sc.next();
                queries[i][1] = sc.next();
            }
            double[] res = calcEquation(equations, values, queries);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(String.format(Locale.US, "%.5f", res[i]));
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXVARS 25

int nodeCount;
char nodes[MAXVARS][25];
double graph[MAXVARS][MAXVARS];

int getIndex(const char* s) {
    for (int i = 0; i < nodeCount; i++)
        if (strcmp(nodes[i], s) == 0) return i;
    strcpy(nodes[nodeCount], s);
    graph[nodeCount][nodeCount] = 1.0;
    for (int i = 0; i < nodeCount; i++) {
        graph[nodeCount][i] = -1.0;
        graph[i][nodeCount] = -1.0;
    }
    return nodeCount++;
}

int dfs(int u, int target, int* visited, double* prod) {
    if (u == target) return 1;
    visited[u] = 1;
    for (int v = 0; v < nodeCount; v++) {
        if (!visited[v] && graph[u][v] > -0.5) {
            double old = *prod;
            *prod *= graph[u][v];
            if (dfs(v, target, visited, prod)) return 1;
            *prod = old;
        }
    }
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    nodeCount = 0;
    for (int i = 0; i < MAXVARS; i++)
        for (int j = 0; j < MAXVARS; j++)
            graph[i][j] = -1.0;
    char a[25], b[25];
    double val;
    for (int i = 0; i < n; i++) {
        if (scanf("%s %s %lf", a, b, &val) != 3) return 0;
        int u = getIndex(a), v = getIndex(b);
        graph[u][v] = val;
        graph[v][u] = 1.0 / val;
    }
    int m;
    if (scanf("%d", &m) != 1) return 0;
    for (int i = 0; i < m; i++) {
        if (scanf("%s %s", a, b) != 2) return 0;
        int u = -1, v = -1;
        for (int j = 0; j < nodeCount; j++) {
            if (strcmp(nodes[j], a) == 0) u = j;
            if (strcmp(nodes[j], b) == 0) v = j;
        }
        double res;
        if (u == -1 || v == -1) res = -1.0;
        else if (u == v) res = 1.0;
        else if (graph[u][v] > -0.5) res = graph[u][v];
        else {
            int visited[MAXVARS] = {0};
            double prod = 1.0;
            if (dfs(u, v, visited, &prod)) res = prod;
            else res = -1.0;
        }
        if (i > 0) printf(" ");
        printf("%.5f", res);
    }
    printf("\\n");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <stack>
#include <set>
#include <iomanip>

using namespace std;

vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {
    unordered_map<string, unordered_map<string, double>> graph;
    for (int i = 0; i < (int)equations.size(); i++) {
        string a = equations[i][0], b = equations[i][1];
        graph[a][b] = values[i];
        graph[b][a] = 1.0 / values[i];
    }
    vector<double> results;
    for (auto& q : queries) {
        string c = q[0], d = q[1];
        if (graph.find(c) == graph.end() || graph.find(d) == graph.end()) {
            results.push_back(-1.0);
        } else if (c == d) {
            results.push_back(1.0);
        } else {
            set<string> visited;
            stack<pair<string, double>> st;
            st.push({c, 1.0});
            visited.insert(c);
            double found = -1.0;
            while (!st.empty()) {
                auto [node, prod] = st.top(); st.pop();
                if (node == d) { found = prod; break; }
                for (auto& [nei, w] : graph[node]) {
                    if (visited.find(nei) == visited.end()) {
                        visited.insert(nei);
                        st.push({nei, prod * w});
                    }
                }
            }
            results.push_back(found);
        }
    }
    return results;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> equations(n, vector<string>(2));
        vector<double> values(n);
        for (int i = 0; i < n; i++) {
            cin >> equations[i][0] >> equations[i][1] >> values[i];
        }
        int m;
        cin >> m;
        vector<vector<string>> queries(m, vector<string>(2));
        for (int i = 0; i < m; i++) {
            cin >> queries[i][0] >> queries[i][1];
        }
        vector<double> res = calcEquation(equations, values, queries);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << fixed << setprecision(5) << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'ed-m2': {
    python: `def calc_equation(equations, values, queries):
    graph = {}
    for (a, b), val in zip(equations, values):
        if a not in graph: graph[a] = {}
        if b not in graph: graph[b] = {}
        graph[a][b] = val
        graph[b][a] = 1.0 / val
    results = []
    for c, d in queries:
        if c not in graph or d not in graph:
            results.append(-1.0)
        elif c == d:
            results.append(1.0)
        else:
            visited = set()
            stack = [(c, 1.0)]
            visited.add(c)
            found = -1.0
            while stack:
                node, prod = stack.pop()
                if node == d:
                    found = prod
                    break
                for nei, w in graph[node].items():
                    if nei not in visited:
                        visited.add(nei)
                        stack.append((nei, prod * w))
            results.append(found)
    return results

n = int(input())
equations = []
values = []
for _ in range(n):
    parts = input().split()
    equations.append([parts[0], parts[1]])
    values.append(float(parts[2]))
m = int(input())
queries = [input().split() for _ in range(m)]
res = calc_equation(equations, values, queries)
print(" ".join(f"{v:.5f}" for v in res))`,
    java: `import java.util.*;

public class Solution {
    public static double[] calcEquation(String[][] equations, double[] values, String[][] queries) {
        Map<String, Map<String, Double>> graph = new HashMap<>();
        for (int i = 0; i < equations.length; i++) {
            String a = equations[i][0], b = equations[i][1];
            graph.putIfAbsent(a, new HashMap<>());
            graph.putIfAbsent(b, new HashMap<>());
            graph.get(a).put(b, values[i]);
            graph.get(b).put(a, 1.0 / values[i]);
        }
        double[] results = new double[queries.length];
        for (int i = 0; i < queries.length; i++) {
            String c = queries[i][0], d = queries[i][1];
            if (!graph.containsKey(c) || !graph.containsKey(d)) {
                results[i] = -1.0;
            } else if (c.equals(d)) {
                results[i] = 1.0;
            } else {
                Set<String> visited = new HashSet<>();
                Stack<String> nodeStack = new Stack<>();
                Stack<Double> prodStack = new Stack<>();
                nodeStack.push(c);
                prodStack.push(1.0);
                visited.add(c);
                double found = -1.0;
                while (!nodeStack.isEmpty()) {
                    String node = nodeStack.pop();
                    double prod = prodStack.pop();
                    if (node.equals(d)) { found = prod; break; }
                    for (Map.Entry<String, Double> e : graph.get(node).entrySet()) {
                        if (!visited.contains(e.getKey())) {
                            visited.add(e.getKey());
                            nodeStack.push(e.getKey());
                            prodStack.push(prod * e.getValue());
                        }
                    }
                }
                results[i] = found;
            }
        }
        return results;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] equations = new String[n][2];
            double[] values = new double[n];
            for (int i = 0; i < n; i++) {
                equations[i][0] = sc.next();
                equations[i][1] = sc.next();
                values[i] = sc.nextDouble();
            }
            int m = sc.nextInt();
            String[][] queries = new String[m][2];
            for (int i = 0; i < m; i++) {
                queries[i][0] = sc.next();
                queries[i][1] = sc.next();
            }
            double[] res = calcEquation(equations, values, queries);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(String.format(Locale.US, "%.5f", res[i]));
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXVARS 25

int nodeCount;
char nodes[MAXVARS][25];
double graph[MAXVARS][MAXVARS];

int getIndex(const char* s) {
    for (int i = 0; i < nodeCount; i++)
        if (strcmp(nodes[i], s) == 0) return i;
    strcpy(nodes[nodeCount], s);
    graph[nodeCount][nodeCount] = 1.0;
    for (int i = 0; i < nodeCount; i++) {
        graph[nodeCount][i] = -1.0;
        graph[i][nodeCount] = -1.0;
    }
    return nodeCount++;
}

int dfs(int u, int target, int* visited, double* prod) {
    if (u == target) return 1;
    visited[u] = 1;
    for (int v = 0; v < nodeCount; v++) {
        if (!visited[v] && graph[u][v] > -0.5) {
            double old = *prod;
            *prod *= graph[u][v];
            if (dfs(v, target, visited, prod)) return 1;
            *prod = old;
        }
    }
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    nodeCount = 0;
    for (int i = 0; i < MAXVARS; i++)
        for (int j = 0; j < MAXVARS; j++)
            graph[i][j] = -1.0;
    char a[25], b[25];
    double val;
    for (int i = 0; i < n; i++) {
        if (scanf("%s %s %lf", a, b, &val) != 3) return 0;
        int u = getIndex(a), v = getIndex(b);
        graph[u][v] = val;
        graph[v][u] = 1.0 / val;
    }
    int m;
    if (scanf("%d", &m) != 1) return 0;
    for (int i = 0; i < m; i++) {
        if (scanf("%s %s", a, b) != 2) return 0;
        int u = -1, v = -1;
        for (int j = 0; j < nodeCount; j++) {
            if (strcmp(nodes[j], a) == 0) u = j;
            if (strcmp(nodes[j], b) == 0) v = j;
        }
        double res;
        if (u == -1 || v == -1) res = -1.0;
        else if (u == v) res = 1.0;
        else if (graph[u][v] > -0.5) res = graph[u][v];
        else {
            int visited[MAXVARS] = {0};
            double prod = 1.0;
            if (dfs(u, v, visited, &prod)) res = prod;
            else res = -1.0;
        }
        if (i > 0) printf(" ");
        printf("%.5f", res);
    }
    printf("\\n");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <stack>
#include <set>
#include <iomanip>

using namespace std;

vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {
    unordered_map<string, unordered_map<string, double>> graph;
    for (int i = 0; i < (int)equations.size(); i++) {
        string a = equations[i][0], b = equations[i][1];
        graph[a][b] = values[i];
        graph[b][a] = 1.0 / values[i];
    }
    vector<double> results;
    for (auto& q : queries) {
        string c = q[0], d = q[1];
        if (graph.find(c) == graph.end() || graph.find(d) == graph.end()) {
            results.push_back(-1.0);
        } else if (c == d) {
            results.push_back(1.0);
        } else {
            set<string> visited;
            stack<pair<string, double>> st;
            st.push({c, 1.0});
            visited.insert(c);
            double found = -1.0;
            while (!st.empty()) {
                auto [node, prod] = st.top(); st.pop();
                if (node == d) { found = prod; break; }
                for (auto& [nei, w] : graph[node]) {
                    if (visited.find(nei) == visited.end()) {
                        visited.insert(nei);
                        st.push({nei, prod * w});
                    }
                }
            }
            results.push_back(found);
        }
    }
    return results;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> equations(n, vector<string>(2));
        vector<double> values(n);
        for (int i = 0; i < n; i++) {
            cin >> equations[i][0] >> equations[i][1] >> values[i];
        }
        int m;
        cin >> m;
        vector<vector<string>> queries(m, vector<string>(2));
        for (int i = 0; i < m; i++) {
            cin >> queries[i][0] >> queries[i][1];
        }
        vector<double> res = calcEquation(equations, values, queries);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << fixed << setprecision(5) << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'ed-m3': {
    python: `def calc_equation(equations, values, queries):
    graph = {}
    for (a, b), val in zip(equations, values):
        if a not in graph: graph[a] = {}
        if b not in graph: graph[b] = {}
        graph[a][b] = val
        graph[b][a] = 1.0 / val
    results = []
    for c, d in queries:
        if c not in graph or d not in graph:
            results.append(-1.0)
        elif c == d:
            results.append(1.0)
        else:
            visited = set()
            stack = [(c, 1.0)]
            visited.add(c)
            found = -1.0
            while stack:
                node, prod = stack.pop()
                if node == d:
                    found = prod
                    break
                for nei, w in graph[node].items():
                    if nei not in visited:
                        visited.add(nei)
                        stack.append((nei, prod * w))
            results.append(found)
    return results

n = int(input())
equations = []
values = []
for _ in range(n):
    parts = input().split()
    equations.append([parts[0], parts[1]])
    values.append(float(parts[2]))
m = int(input())
queries = [input().split() for _ in range(m)]
res = calc_equation(equations, values, queries)
print(" ".join(f"{v:.5f}" for v in res))`,
    java: `import java.util.*;

public class Solution {
    public static double[] calcEquation(String[][] equations, double[] values, String[][] queries) {
        Map<String, Map<String, Double>> graph = new HashMap<>();
        for (int i = 0; i < equations.length; i++) {
            String a = equations[i][0], b = equations[i][1];
            graph.putIfAbsent(a, new HashMap<>());
            graph.putIfAbsent(b, new HashMap<>());
            graph.get(a).put(b, values[i]);
            graph.get(b).put(a, 1.0 / values[i]);
        }
        double[] results = new double[queries.length];
        for (int i = 0; i < queries.length; i++) {
            String c = queries[i][0], d = queries[i][1];
            if (!graph.containsKey(c) || !graph.containsKey(d)) {
                results[i] = -1.0;
            } else if (c.equals(d)) {
                results[i] = 1.0;
            } else {
                Set<String> visited = new HashSet<>();
                Stack<String> nodeStack = new Stack<>();
                Stack<Double> prodStack = new Stack<>();
                nodeStack.push(c);
                prodStack.push(1.0);
                visited.add(c);
                double found = -1.0;
                while (!nodeStack.isEmpty()) {
                    String node = nodeStack.pop();
                    double prod = prodStack.pop();
                    if (node.equals(d)) { found = prod; break; }
                    for (Map.Entry<String, Double> e : graph.get(node).entrySet()) {
                        if (!visited.contains(e.getKey())) {
                            visited.add(e.getKey());
                            nodeStack.push(e.getKey());
                            prodStack.push(prod * e.getValue());
                        }
                    }
                }
                results[i] = found;
            }
        }
        return results;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] equations = new String[n][2];
            double[] values = new double[n];
            for (int i = 0; i < n; i++) {
                equations[i][0] = sc.next();
                equations[i][1] = sc.next();
                values[i] = sc.nextDouble();
            }
            int m = sc.nextInt();
            String[][] queries = new String[m][2];
            for (int i = 0; i < m; i++) {
                queries[i][0] = sc.next();
                queries[i][1] = sc.next();
            }
            double[] res = calcEquation(equations, values, queries);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(String.format(Locale.US, "%.5f", res[i]));
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXVARS 25

int nodeCount;
char nodes[MAXVARS][25];
double graph[MAXVARS][MAXVARS];

int getIndex(const char* s) {
    for (int i = 0; i < nodeCount; i++)
        if (strcmp(nodes[i], s) == 0) return i;
    strcpy(nodes[nodeCount], s);
    graph[nodeCount][nodeCount] = 1.0;
    for (int i = 0; i < nodeCount; i++) {
        graph[nodeCount][i] = -1.0;
        graph[i][nodeCount] = -1.0;
    }
    return nodeCount++;
}

int dfs(int u, int target, int* visited, double* prod) {
    if (u == target) return 1;
    visited[u] = 1;
    for (int v = 0; v < nodeCount; v++) {
        if (!visited[v] && graph[u][v] > -0.5) {
            double old = *prod;
            *prod *= graph[u][v];
            if (dfs(v, target, visited, prod)) return 1;
            *prod = old;
        }
    }
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    nodeCount = 0;
    for (int i = 0; i < MAXVARS; i++)
        for (int j = 0; j < MAXVARS; j++)
            graph[i][j] = -1.0;
    char a[25], b[25];
    double val;
    for (int i = 0; i < n; i++) {
        if (scanf("%s %s %lf", a, b, &val) != 3) return 0;
        int u = getIndex(a), v = getIndex(b);
        graph[u][v] = val;
        graph[v][u] = 1.0 / val;
    }
    int m;
    if (scanf("%d", &m) != 1) return 0;
    for (int i = 0; i < m; i++) {
        if (scanf("%s %s", a, b) != 2) return 0;
        int u = -1, v = -1;
        for (int j = 0; j < nodeCount; j++) {
            if (strcmp(nodes[j], a) == 0) u = j;
            if (strcmp(nodes[j], b) == 0) v = j;
        }
        double res;
        if (u == -1 || v == -1) res = -1.0;
        else if (u == v) res = 1.0;
        else if (graph[u][v] > -0.5) res = graph[u][v];
        else {
            int visited[MAXVARS] = {0};
            double prod = 1.0;
            if (dfs(u, v, visited, &prod)) res = prod;
            else res = -1.0;
        }
        if (i > 0) printf(" ");
        printf("%.5f", res);
    }
    printf("\\n");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <stack>
#include <set>
#include <iomanip>

using namespace std;

vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {
    unordered_map<string, unordered_map<string, double>> graph;
    for (int i = 0; i < (int)equations.size(); i++) {
        string a = equations[i][0], b = equations[i][1];
        graph[a][b] = values[i];
        graph[b][a] = 1.0 / values[i];
    }
    vector<double> results;
    for (auto& q : queries) {
        string c = q[0], d = q[1];
        if (graph.find(c) == graph.end() || graph.find(d) == graph.end()) {
            results.push_back(-1.0);
        } else if (c == d) {
            results.push_back(1.0);
        } else {
            set<string> visited;
            stack<pair<string, double>> st;
            st.push({c, 1.0});
            visited.insert(c);
            double found = -1.0;
            while (!st.empty()) {
                auto [node, prod] = st.top(); st.pop();
                if (node == d) { found = prod; break; }
                for (auto& [nei, w] : graph[node]) {
                    if (visited.find(nei) == visited.end()) {
                        visited.insert(nei);
                        st.push({nei, prod * w});
                    }
                }
            }
            results.push_back(found);
        }
    }
    return results;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> equations(n, vector<string>(2));
        vector<double> values(n);
        for (int i = 0; i < n; i++) {
            cin >> equations[i][0] >> equations[i][1] >> values[i];
        }
        int m;
        cin >> m;
        vector<vector<string>> queries(m, vector<string>(2));
        for (int i = 0; i < m; i++) {
            cin >> queries[i][0] >> queries[i][1];
        }
        vector<double> res = calcEquation(equations, values, queries);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << fixed << setprecision(5) << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'ed-m4': {
    python: `from collections import deque

def calc_equation(equations, values, queries):
    graph = {}
    for (a, b), val in zip(equations, values):
        if a not in graph: graph[a] = {}
        if b not in graph: graph[b] = {}
        graph[a][b] = val
        graph[b][a] = 1.0 / val
    results = []
    for c, d in queries:
        if c not in graph or d not in graph:
            results.append(-1.0)
        elif c == d:
            results.append(1.0)
        else:
            q = deque()
            q.append((c, 1.0))
            visited = {c}
            found = -1.0
            while q:
                node, prod = q.popleft()
                if node == d:
                    found = prod
                    break
                for nei, w in graph[node].items():
                    if nei not in visited:
                        visited.add(nei)
                        q.append((nei, prod * w))
            results.append(found)
    return results

n = int(input())
equations = []
values = []
for _ in range(n):
    parts = input().split()
    equations.append([parts[0], parts[1]])
    values.append(float(parts[2]))
m = int(input())
queries = [input().split() for _ in range(m)]
res = calc_equation(equations, values, queries)
print(" ".join(f"{v:.5f}" for v in res))`,
    java: `import java.util.*;

public class Solution {
    public static double[] calcEquation(String[][] equations, double[] values, String[][] queries) {
        Map<String, Map<String, Double>> graph = new HashMap<>();
        for (int i = 0; i < equations.length; i++) {
            String a = equations[i][0], b = equations[i][1];
            graph.putIfAbsent(a, new HashMap<>());
            graph.putIfAbsent(b, new HashMap<>());
            graph.get(a).put(b, values[i]);
            graph.get(b).put(a, 1.0 / values[i]);
        }
        double[] results = new double[queries.length];
        for (int i = 0; i < queries.length; i++) {
            String c = queries[i][0], d = queries[i][1];
            if (!graph.containsKey(c) || !graph.containsKey(d)) {
                results[i] = -1.0;
            } else if (c.equals(d)) {
                results[i] = 1.0;
            } else {
                Queue<String> nodeQ = new LinkedList<>();
                Queue<Double> prodQ = new LinkedList<>();
                Set<String> visited = new HashSet<>();
                nodeQ.offer(c);
                prodQ.offer(1.0);
                visited.add(c);
                double found = -1.0;
                while (!nodeQ.isEmpty()) {
                    String node = nodeQ.poll();
                    double prod = prodQ.poll();
                    if (node.equals(d)) { found = prod; break; }
                    for (Map.Entry<String, Double> e : graph.get(node).entrySet()) {
                        if (!visited.contains(e.getKey())) {
                            visited.add(e.getKey());
                            nodeQ.offer(e.getKey());
                            prodQ.offer(prod * e.getValue());
                        }
                    }
                }
                results[i] = found;
            }
        }
        return results;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] equations = new String[n][2];
            double[] values = new double[n];
            for (int i = 0; i < n; i++) {
                equations[i][0] = sc.next();
                equations[i][1] = sc.next();
                values[i] = sc.nextDouble();
            }
            int m = sc.nextInt();
            String[][] queries = new String[m][2];
            for (int i = 0; i < m; i++) {
                queries[i][0] = sc.next();
                queries[i][1] = sc.next();
            }
            double[] res = calcEquation(equations, values, queries);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(String.format(Locale.US, "%.5f", res[i]));
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXVARS 25

int nodeCount;
char nodes[MAXVARS][25];
double graph[MAXVARS][MAXVARS];

int getIndex(const char* s) {
    for (int i = 0; i < nodeCount; i++)
        if (strcmp(nodes[i], s) == 0) return i;
    strcpy(nodes[nodeCount], s);
    graph[nodeCount][nodeCount] = 1.0;
    for (int i = 0; i < nodeCount; i++) {
        graph[nodeCount][i] = -1.0;
        graph[i][nodeCount] = -1.0;
    }
    return nodeCount++;
}

int bfs(int start, int target) {
    if (start == target) return 1;
    int qnode[MAXVARS], front = 0, rear = 0;
    double qprod[MAXVARS];
    int visited[MAXVARS] = {0};
    qnode[rear] = start;
    qprod[rear] = 1.0;
    rear++;
    visited[start] = 1;
    while (front < rear) {
        int u = qnode[front];
        double prod = qprod[front];
        front++;
        for (int v = 0; v < nodeCount; v++) {
            if (!visited[v] && graph[u][v] > -0.5) {
                double nprod = prod * graph[u][v];
                if (v == target) {
                    graph[start][target] = nprod;
                    return 1;
                }
                visited[v] = 1;
                qnode[rear] = v;
                qprod[rear] = nprod;
                rear++;
            }
        }
    }
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    nodeCount = 0;
    for (int i = 0; i < MAXVARS; i++)
        for (int j = 0; j < MAXVARS; j++)
            graph[i][j] = -1.0;
    char a[25], b[25];
    double val;
    for (int i = 0; i < n; i++) {
        if (scanf("%s %s %lf", a, b, &val) != 3) return 0;
        int u = getIndex(a), v = getIndex(b);
        graph[u][v] = val;
        graph[v][u] = 1.0 / val;
    }
    int m;
    if (scanf("%d", &m) != 1) return 0;
    for (int i = 0; i < m; i++) {
        if (scanf("%s %s", a, b) != 2) return 0;
        int u = -1, v = -1;
        for (int j = 0; j < nodeCount; j++) {
            if (strcmp(nodes[j], a) == 0) u = j;
            if (strcmp(nodes[j], b) == 0) v = j;
        }
        double res;
        if (u == -1 || v == -1) res = -1.0;
        else if (u == v) res = 1.0;
        else if (graph[u][v] > -0.5) res = graph[u][v];
        else {
            if (bfs(u, v)) res = graph[u][v];
            else res = -1.0;
        }
        if (i > 0) printf(" ");
        printf("%.5f", res);
    }
    printf("\\n");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <queue>
#include <set>
#include <iomanip>

using namespace std;

vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {
    unordered_map<string, unordered_map<string, double>> graph;
    for (int i = 0; i < (int)equations.size(); i++) {
        string a = equations[i][0], b = equations[i][1];
        graph[a][b] = values[i];
        graph[b][a] = 1.0 / values[i];
    }
    vector<double> results;
    for (auto& q : queries) {
        string c = q[0], d = q[1];
        if (graph.find(c) == graph.end() || graph.find(d) == graph.end()) {
            results.push_back(-1.0);
        } else if (c == d) {
            results.push_back(1.0);
        } else {
            queue<pair<string, double>> q;
            set<string> visited;
            q.push({c, 1.0});
            visited.insert(c);
            double found = -1.0;
            while (!q.empty()) {
                auto [node, prod] = q.front(); q.pop();
                if (node == d) { found = prod; break; }
                for (auto& [nei, w] : graph[node]) {
                    if (visited.find(nei) == visited.end()) {
                        visited.insert(nei);
                        q.push({nei, prod * w});
                    }
                }
            }
            results.push_back(found);
        }
    }
    return results;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> equations(n, vector<string>(2));
        vector<double> values(n);
        for (int i = 0; i < n; i++) {
            cin >> equations[i][0] >> equations[i][1] >> values[i];
        }
        int m;
        cin >> m;
        vector<vector<string>> queries(m, vector<string>(2));
        for (int i = 0; i < m; i++) {
            cin >> queries[i][0] >> queries[i][1];
        }
        vector<double> res = calcEquation(equations, values, queries);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << fixed << setprecision(5) << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'ed-m5': {
    python: `def count_reachable_pairs(equations, values):
    graph = {}
    for (a, b), val in zip(equations, values):
        if a not in graph: graph[a] = {}
        if b not in graph: graph[b] = {}
        graph[a][b] = val
        graph[b][a] = 1.0 / val
    visited_global = set()
    total = 0
    for node in graph:
        if node not in visited_global:
            component = set()
            stack = [node]
            while stack:
                cur = stack.pop()
                if cur not in component:
                    component.add(cur)
                    visited_global.add(cur)
                    for nei in graph[cur]:
                        if nei not in component:
                            stack.append(nei)
            size = len(component)
            total += size * size
    return total

n = int(input())
equations = []
values = []
for _ in range(n):
    parts = input().split()
    equations.append([parts[0], parts[1]])
    values.append(float(parts[2]))
print(count_reachable_pairs(equations, values))`,
    java: `import java.util.*;

public class Solution {
    public static int countReachablePairs(String[][] equations, double[] values) {
        Map<String, Set<String>> graph = new HashMap<>();
        for (int i = 0; i < equations.length; i++) {
            String a = equations[i][0], b = equations[i][1];
            graph.putIfAbsent(a, new HashSet<>());
            graph.putIfAbsent(b, new HashSet<>());
            graph.get(a).add(b);
            graph.get(b).add(a);
        }
        Set<String> visitedGlobal = new HashSet<>();
        int total = 0;
        for (String node : graph.keySet()) {
            if (!visitedGlobal.contains(node)) {
                Set<String> component = new HashSet<>();
                Stack<String> stack = new Stack<>();
                stack.push(node);
                while (!stack.isEmpty()) {
                    String cur = stack.pop();
                    if (!component.contains(cur)) {
                        component.add(cur);
                        visitedGlobal.add(cur);
                        for (String nei : graph.get(cur)) {
                            if (!component.contains(nei)) {
                                stack.push(nei);
                            }
                        }
                    }
                }
                int size = component.size();
                total += size * size;
            }
        }
        return total;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] equations = new String[n][2];
            double[] values = new double[n];
            for (int i = 0; i < n; i++) {
                equations[i][0] = sc.next();
                equations[i][1] = sc.next();
                values[i] = sc.nextDouble();
            }
            System.out.println(countReachablePairs(equations, values));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXVARS 25

int nodeCount;
char nodes[MAXVARS][25];
int adj[MAXVARS][MAXVARS];

int getIndex(const char* s) {
    for (int i = 0; i < nodeCount; i++)
        if (strcmp(nodes[i], s) == 0) return i;
    strcpy(nodes[nodeCount], s);
    for (int i = 0; i <= nodeCount; i++) {
        adj[nodeCount][i] = 0;
        adj[i][nodeCount] = 0;
    }
    return nodeCount++;
}

void dfs(int u, int* visited, int* size) {
    visited[u] = 1;
    (*size)++;
    for (int v = 0; v < nodeCount; v++) {
        if (!visited[v] && adj[u][v]) {
            dfs(v, visited, size);
        }
    }
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    nodeCount = 0;
    memset(adj, 0, sizeof(adj));
    char a[25], b[25];
    double val;
    for (int i = 0; i < n; i++) {
        if (scanf("%s %s %lf", a, b, &val) != 3) return 0;
        int u = getIndex(a), v = getIndex(b);
        adj[u][v] = 1;
        adj[v][u] = 1;
    }
    int visited[MAXVARS] = {0};
    int total = 0;
    for (int i = 0; i < nodeCount; i++) {
        if (!visited[i]) {
            int size = 0;
            dfs(i, visited, &size);
            total += size * size;
        }
    }
    printf("%d\\n", total);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>
#include <stack>

using namespace std;

int countReachablePairs(vector<vector<string>>& equations, vector<double>& values) {
    unordered_map<string, unordered_set<string>> graph;
    for (auto& eq : equations) {
        string a = eq[0], b = eq[1];
        graph[a].insert(b);
        graph[b].insert(a);
    }
    unordered_set<string> visitedGlobal;
    int total = 0;
    for (auto& [node, _] : graph) {
        if (visitedGlobal.find(node) == visitedGlobal.end()) {
            unordered_set<string> component;
            stack<string> st;
            st.push(node);
            while (!st.empty()) {
                string cur = st.top(); st.pop();
                if (component.find(cur) == component.end()) {
                    component.insert(cur);
                    visitedGlobal.insert(cur);
                    for (const string& nei : graph[cur]) {
                        if (component.find(nei) == component.end()) {
                            st.push(nei);
                        }
                    }
                }
            }
            int size = component.size();
            total += size * size;
        }
    }
    return total;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> equations(n, vector<string>(2));
        vector<double> values(n);
        for (int i = 0; i < n; i++) {
            cin >> equations[i][0] >> equations[i][1] >> values[i];
        }
        cout << countReachablePairs(equations, values) << "\\n";
    }
    return 0;
}`
  },

  // --- HARD ---
  'ed-h1': {
    python: `def calc_equation(equations, values, queries):
    parent = {}
    weight = {}
    
    def find(x):
        if parent[x] != x:
            root, w = find(parent[x])
            parent[x] = root
            weight[x] *= w
        return parent[x], weight[x]
    
    def union(x, y, val):
        rx, wx = find(x)
        ry, wy = find(y)
        if rx != ry:
            parent[rx] = ry
            weight[rx] = wy * val / wx
    
    for (a, b), val in zip(equations, values):
        if a not in parent:
            parent[a] = a
            weight[a] = 1.0
        if b not in parent:
            parent[b] = b
            weight[b] = 1.0
        union(a, b, val)
    
    results = []
    for c, d in queries:
        if c not in parent or d not in parent:
            results.append(-1.0)
        else:
            rc, wc = find(c)
            rd, wd = find(d)
            if rc != rd:
                results.append(-1.0)
            else:
                results.append(wc / wd)
    return results

n = int(input())
equations = []
values = []
for _ in range(n):
    parts = input().split()
    equations.append([parts[0], parts[1]])
    values.append(float(parts[2]))
m = int(input())
queries = [input().split() for _ in range(m)]
res = calc_equation(equations, values, queries)
print(" ".join(f"{v:.5f}" for v in res))`,
    java: `import java.util.*;

public class Solution {
    static Map<String, String> parent;
    static Map<String, Double> weight;

    static String find(String x) {
        if (!parent.get(x).equals(x)) {
            String root = find(parent.get(x));
            weight.put(x, weight.get(x) * weight.get(parent.get(x)));
            parent.put(x, root);
        }
        return parent.get(x);
    }

    static void union(String x, String y, double val) {
        String rx = find(x), ry = find(y);
        if (!rx.equals(ry)) {
            parent.put(rx, ry);
            weight.put(rx, weight.get(y) * val / weight.get(x));
        }
    }

    public static double[] calcEquation(String[][] equations, double[] values, String[][] queries) {
        parent = new HashMap<>();
        weight = new HashMap<>();
        for (int i = 0; i < equations.length; i++) {
            String a = equations[i][0], b = equations[i][1];
            parent.putIfAbsent(a, a);
            weight.putIfAbsent(a, 1.0);
            parent.putIfAbsent(b, b);
            weight.putIfAbsent(b, 1.0);
            union(a, b, values[i]);
        }
        double[] results = new double[queries.length];
        for (int i = 0; i < queries.length; i++) {
            String c = queries[i][0], d = queries[i][1];
            if (!parent.containsKey(c) || !parent.containsKey(d)) {
                results[i] = -1.0;
            } else {
                String rc = find(c), rd = find(d);
                results[i] = rc.equals(rd) ? weight.get(c) / weight.get(d) : -1.0;
            }
        }
        return results;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] equations = new String[n][2];
            double[] values = new double[n];
            for (int i = 0; i < n; i++) {
                equations[i][0] = sc.next();
                equations[i][1] = sc.next();
                values[i] = sc.nextDouble();
            }
            int m = sc.nextInt();
            String[][] queries = new String[m][2];
            for (int i = 0; i < m; i++) {
                queries[i][0] = sc.next();
                queries[i][1] = sc.next();
            }
            double[] res = calcEquation(equations, values, queries);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(String.format(Locale.US, "%.5f", res[i]));
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXVARS 25

char nodes[MAXVARS][25];
int par[MAXVARS];
double wt[MAXVARS];
int nodeCount;

int getIndex(const char* s) {
    for (int i = 0; i < nodeCount; i++)
        if (strcmp(nodes[i], s) == 0) return i;
    strcpy(nodes[nodeCount], s);
    par[nodeCount] = nodeCount;
    wt[nodeCount] = 1.0;
    return nodeCount++;
}

int find(int x) {
    if (par[x] != x) {
        int root = find(par[x]);
        wt[x] *= wt[par[x]];
        par[x] = root;
    }
    return par[x];
}

void unite(int x, int y, double val) {
    int rx = find(x), ry = find(y);
    if (rx != ry) {
        par[rx] = ry;
        wt[rx] = wt[y] * val / wt[x];
    }
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    nodeCount = 0;
    char a[25], b[25];
    double val;
    for (int i = 0; i < n; i++) {
        if (scanf("%s %s %lf", a, b, &val) != 3) return 0;
        int u = getIndex(a), v = getIndex(b);
        unite(u, v, val);
    }
    int m;
    if (scanf("%d", &m) != 1) return 0;
    for (int i = 0; i < m; i++) {
        if (scanf("%s %s", a, b) != 2) return 0;
        int u = -1, v = -1;
        for (int j = 0; j < nodeCount; j++) {
            if (strcmp(nodes[j], a) == 0) u = j;
            if (strcmp(nodes[j], b) == 0) v = j;
        }
        double res;
        if (u == -1 || v == -1) {
            res = -1.0;
        } else {
            int ru = find(u), rv = find(v);
            res = (ru == rv) ? (wt[u] / wt[v]) : -1.0;
        }
        if (i > 0) printf(" ");
        printf("%.5f", res);
    }
    printf("\\n");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <iomanip>

using namespace std;

unordered_map<string, string> parent;
unordered_map<string, double> weight;

string find(const string& x) {
    if (parent[x] != x) {
        string root = find(parent[x]);
        weight[x] *= weight[parent[x]];
        parent[x] = root;
    }
    return parent[x];
}

void unite(const string& x, const string& y, double val) {
    string rx = find(x), ry = find(y);
    if (rx != ry) {
        parent[rx] = ry;
        weight[rx] = weight[y] * val / weight[x];
    }
}

vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {
    parent.clear();
    weight.clear();
    for (int i = 0; i < (int)equations.size(); i++) {
        string a = equations[i][0], b = equations[i][1];
        if (!parent.count(a)) { parent[a] = a; weight[a] = 1.0; }
        if (!parent.count(b)) { parent[b] = b; weight[b] = 1.0; }
        unite(a, b, values[i]);
    }
    vector<double> results;
    for (auto& q : queries) {
        string c = q[0], d = q[1];
        if (!parent.count(c) || !parent.count(d)) {
            results.push_back(-1.0);
        } else {
            string rc = find(c), rd = find(d);
            results.push_back(rc == rd ? weight[c] / weight[d] : -1.0);
        }
    }
    return results;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> equations(n, vector<string>(2));
        vector<double> values(n);
        for (int i = 0; i < n; i++) {
            cin >> equations[i][0] >> equations[i][1] >> values[i];
        }
        int m;
        cin >> m;
        vector<vector<string>> queries(m, vector<string>(2));
        for (int i = 0; i < m; i++) {
            cin >> queries[i][0] >> queries[i][1];
        }
        vector<double> res = calcEquation(equations, values, queries);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << fixed << setprecision(5) << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'ed-h2': {
    python: `def has_contradiction(equations, values):
    parent = {}
    weight = {}
    
    def find(x):
        if parent[x] != x:
            root, w = find(parent[x])
            parent[x] = root
            weight[x] *= w
        return parent[x], weight[x]
    
    def union(x, y, val):
        rx, wx = find(x)
        ry, wy = find(y)
        if rx != ry:
            parent[rx] = ry
            weight[rx] = wy * val / wx
            return None
        else:
            expected = wx / wy
            if abs(expected - val) > 1e-6:
                return True
            return None
        return None
    
    for (a, b), val in zip(equations, values):
        if a not in parent:
            parent[a] = a
            weight[a] = 1.0
        if b not in parent:
            parent[b] = b
            weight[b] = 1.0
        result = union(a, b, val)
        if result is not None:
            return True
    return False

n = int(input())
equations = []
values = []
for _ in range(n):
    parts = input().split()
    equations.append([parts[0], parts[1]])
    values.append(float(parts[2]))
print(str(has_contradiction(equations, values)).lower())`,
    java: `import java.util.*;

public class Solution {
    static Map<String, String> parent;
    static Map<String, Double> weight;

    static String find(String x) {
        if (!parent.get(x).equals(x)) {
            String root = find(parent.get(x));
            weight.put(x, weight.get(x) * weight.get(parent.get(x)));
            parent.put(x, root);
        }
        return parent.get(x);
    }

    public static boolean hasContradiction(String[][] equations, double[] values) {
        parent = new HashMap<>();
        weight = new HashMap<>();
        for (int i = 0; i < equations.length; i++) {
            String a = equations[i][0], b = equations[i][1];
            parent.putIfAbsent(a, a);
            weight.putIfAbsent(a, 1.0);
            parent.putIfAbsent(b, b);
            weight.putIfAbsent(b, 1.0);
            String ra = find(a), rb = find(b);
            double wa = weight.get(a), wb = weight.get(b);
            if (!ra.equals(rb)) {
                parent.put(ra, rb);
                weight.put(ra, wb * values[i] / wa);
            } else {
                double expected = wa / wb;
                if (Math.abs(expected - values[i]) > 1e-6) {
                    return true;
                }
            }
        }
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] equations = new String[n][2];
            double[] values = new double[n];
            for (int i = 0; i < n; i++) {
                equations[i][0] = sc.next();
                equations[i][1] = sc.next();
                values[i] = sc.nextDouble();
            }
            System.out.println(hasContradiction(equations, values));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>

#define MAXVARS 25

char nodes[MAXVARS][25];
int par[MAXVARS];
double wt[MAXVARS];
int nodeCount;

int getIndex(const char* s) {
    for (int i = 0; i < nodeCount; i++)
        if (strcmp(nodes[i], s) == 0) return i;
    strcpy(nodes[nodeCount], s);
    par[nodeCount] = nodeCount;
    wt[nodeCount] = 1.0;
    return nodeCount++;
}

int find(int x) {
    if (par[x] != x) {
        int root = find(par[x]);
        wt[x] *= wt[par[x]];
        par[x] = root;
    }
    return par[x];
}

int hasContradiction(int n, double* values) {
    for (int i = 0; i < n; i++) {
        int u = 2 * i, v = 2 * i + 1;
        int ru = find(u), rv = find(v);
        double wu = wt[u], wv = wt[v];
        if (ru != rv) {
            par[ru] = rv;
            wt[ru] = wv * values[i] / wu;
        } else {
            double expected = wu / wv;
            if (fabs(expected - values[i]) > 1e-6) return 1;
        }
    }
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    nodeCount = 0;
    char a[25], b[25];
    double* values = (double*)malloc(n * sizeof(double));
    for (int i = 0; i < n; i++) {
        if (scanf("%s %s %lf", a, b, &values[i]) != 3) return 0;
        getIndex(a);
        getIndex(b);
    }
    printf("%s\\n", hasContradiction(n, values) ? "true" : "false");
    free(values);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <cmath>

using namespace std;

unordered_map<string, string> parent;
unordered_map<string, double> weight;

string find(const string& x) {
    if (parent[x] != x) {
        string root = find(parent[x]);
        weight[x] *= weight[parent[x]];
        parent[x] = root;
    }
    return parent[x];
}

bool hasContradiction(vector<vector<string>>& equations, vector<double>& values) {
    parent.clear();
    weight.clear();
    for (int i = 0; i < (int)equations.size(); i++) {
        string a = equations[i][0], b = equations[i][1];
        if (!parent.count(a)) { parent[a] = a; weight[a] = 1.0; }
        if (!parent.count(b)) { parent[b] = b; weight[b] = 1.0; }
        string ra = find(a), rb = find(b);
        double wa = weight[a], wb = weight[b];
        if (ra != rb) {
            parent[ra] = rb;
            weight[ra] = wb * values[i] / wa;
        } else {
            double expected = wa / wb;
            if (fabs(expected - values[i]) > 1e-6) return true;
        }
    }
    return false;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> equations(n, vector<string>(2));
        vector<double> values(n);
        for (int i = 0; i < n; i++) {
            cin >> equations[i][0] >> equations[i][1] >> values[i];
        }
        cout << (hasContradiction(equations, values) ? "true" : "false") << "\\n";
    }
    return 0;
}`
  },
  'ed-h3': {
    python: `def min_equations(equations, values, queries):
    m = len(equations)
    graph = {}
    for (a, b), val in zip(equations, values):
        if a not in graph: graph[a] = {}
        if b not in graph: graph[b] = {}
        graph[a][b] = val
        graph[b][a] = 1.0 / val
    
    def can_answer(selected):
        g = {}
        for idx in selected:
            a, b = equations[idx]
            val = values[idx]
            if a not in g: g[a] = {}
            if b not in g: g[b] = {}
            g[a][b] = val
            g[b][a] = 1.0 / val
        for c, d in queries:
            if c not in g or d not in g:
                return False
            visited = set()
            stack = [(c, 1.0)]
            visited.add(c)
            found = False
            while stack:
                node, prod = stack.pop()
                if node == d:
                    found = True
                    break
                for nei in g[node]:
                    if nei not in visited:
                        visited.add(nei)
                        stack.append((nei, prod * g[node][nei]))
            if not found:
                return False
        return True
    
    best = m
    for mask in range(1, 1 << m):
        selected = [i for i in range(m) if mask & (1 << i)]
        if len(selected) < best and can_answer(selected):
            best = len(selected)
    return best

n = int(input())
equations = []
values = []
for _ in range(n):
    parts = input().split()
    equations.append([parts[0], parts[1]])
    values.append(float(parts[2]))
m = int(input())
queries = [input().split() for _ in range(m)]
print(min_equations(equations, values, queries))`,
    java: `import java.util.*;

public class Solution {
    private static boolean canAnswer(int mask, String[][] equations, double[] values, String[][] queries) {
        Map<String, Map<String, Double>> graph = new HashMap<>();
        for (int i = 0; i < equations.length; i++) {
            if ((mask & (1 << i)) != 0) {
                String a = equations[i][0], b = equations[i][1];
                graph.putIfAbsent(a, new HashMap<>());
                graph.putIfAbsent(b, new HashMap<>());
                graph.get(a).put(b, values[i]);
                graph.get(b).put(a, 1.0 / values[i]);
            }
        }
        for (String[] q : queries) {
            String c = q[0], d = q[1];
            if (!graph.containsKey(c) || !graph.containsKey(d)) return false;
            Set<String> visited = new HashSet<>();
            Stack<String> nodeStack = new Stack<>();
            Stack<Double> prodStack = new Stack<>();
            nodeStack.push(c);
            prodStack.push(1.0);
            visited.add(c);
            boolean found = false;
            while (!nodeStack.isEmpty()) {
                String node = nodeStack.pop();
                double prod = prodStack.pop();
                if (node.equals(d)) { found = true; break; }
                for (Map.Entry<String, Double> e : graph.get(node).entrySet()) {
                    if (!visited.contains(e.getKey())) {
                        visited.add(e.getKey());
                        nodeStack.push(e.getKey());
                        prodStack.push(prod * e.getValue());
                    }
                }
            }
            if (!found) return false;
        }
        return true;
    }

    public static int minEquations(String[][] equations, double[] values, String[][] queries) {
        int m = equations.length;
        int best = m;
        for (int mask = 1; mask < (1 << m); mask++) {
            int cnt = Integer.bitCount(mask);
            if (cnt < best && canAnswer(mask, equations, values, queries)) {
                best = cnt;
            }
        }
        return best;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] equations = new String[n][2];
            double[] values = new double[n];
            for (int i = 0; i < n; i++) {
                equations[i][0] = sc.next();
                equations[i][1] = sc.next();
                values[i] = sc.nextDouble();
            }
            int m = sc.nextInt();
            String[][] queries = new String[m][2];
            for (int i = 0; i < m; i++) {
                queries[i][0] = sc.next();
                queries[i][1] = sc.next();
            }
            System.out.println(minEquations(equations, values, queries));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>

#define MAXVARS 25
#define MAXEQ 20

int nodeCount;
char nodes[MAXVARS][25];
double graph[MAXVARS][MAXVARS];

int getIndex(const char* s) {
    for (int i = 0; i < nodeCount; i++)
        if (strcmp(nodes[i], s) == 0) return i;
    strcpy(nodes[nodeCount], s);
    graph[nodeCount][nodeCount] = 1.0;
    for (int i = 0; i < nodeCount; i++) {
        graph[nodeCount][i] = -1.0;
        graph[i][nodeCount] = -1.0;
    }
    return nodeCount++;
}

int canAnswer(int mask, char** eqA, char** eqB, double* values, int eqSize, char** qA, char** qB, int qSize) {
    nodeCount = 0;
    for (int i = 0; i < MAXVARS; i++)
        for (int j = 0; j < MAXVARS; j++)
            graph[i][j] = -1.0;
    for (int i = 0; i < eqSize; i++) {
        if (mask & (1 << i)) {
            int u = getIndex(eqA[i]), v = getIndex(eqB[i]);
            graph[u][v] = values[i];
            graph[v][u] = 1.0 / values[i];
        }
    }
    for (int qi = 0; qi < qSize; qi++) {
        int u = -1, v = -1;
        for (int j = 0; j < nodeCount; j++) {
            if (strcmp(nodes[j], qA[qi]) == 0) u = j;
            if (strcmp(nodes[j], qB[qi]) == 0) v = j;
        }
        if (u == -1 || v == -1) return 0;
        if (u == v) continue;
        if (graph[u][v] < -0.5) {
            int visited[MAXVARS] = {0};
            int stackNode[MAXVARS];
            double stackProd[MAXVARS];
            int top = 0;
            stackNode[top] = u;
            stackProd[top] = 1.0;
            top++;
            visited[u] = 1;
            int found = 0;
            while (top > 0) {
                top--;
                int cur = stackNode[top];
                double prod = stackProd[top];
                if (cur == v) { found = 1; break; }
                for (int nxt = 0; nxt < nodeCount; nxt++) {
                    if (!visited[nxt] && graph[cur][nxt] > -0.5) {
                        visited[nxt] = 1;
                        stackNode[top] = nxt;
                        stackProd[top] = prod * graph[cur][nxt];
                        top++;
                    }
                }
            }
            if (!found) return 0;
        }
    }
    return 1;
}

int minEquations(char** eqA, char** eqB, double* values, int eqSize, char** qA, char** qB, int qSize) {
    int best = eqSize;
    for (int mask = 1; mask < (1 << eqSize); mask++) {
        int cnt = 0;
        for (int i = 0; i < eqSize; i++)
            if (mask & (1 << i)) cnt++;
        if (cnt < best && canAnswer(mask, eqA, eqB, values, eqSize, qA, qB, qSize))
            best = cnt;
    }
    return best;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    char** eqA = (char**)malloc(n * sizeof(char*));
    char** eqB = (char**)malloc(n * sizeof(char*));
    double* values = (double*)malloc(n * sizeof(double));
    for (int i = 0; i < n; i++) {
        eqA[i] = (char*)malloc(25);
        eqB[i] = (char*)malloc(25);
        if (scanf("%s %s %lf", eqA[i], eqB[i], &values[i]) != 3) return 0;
    }
    int m;
    if (scanf("%d", &m) != 1) return 0;
    char** qA = (char**)malloc(m * sizeof(char*));
    char** qB = (char**)malloc(m * sizeof(char*));
    for (int i = 0; i < m; i++) {
        qA[i] = (char*)malloc(25);
        qB[i] = (char*)malloc(25);
        if (scanf("%s %s", qA[i], qB[i]) != 2) return 0;
    }
    printf("%d\\n", minEquations(eqA, eqB, values, n, qA, qB, m));
    for (int i = 0; i < n; i++) { free(eqA[i]); free(eqB[i]); }
    free(eqA); free(eqB); free(values);
    for (int i = 0; i < m; i++) { free(qA[i]); free(qB[i]); }
    free(qA); free(qB);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <stack>
#include <set>
#include <string>

using namespace std;

bool canAnswer(int mask, vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {
    unordered_map<string, unordered_map<string, double>> graph;
    for (int i = 0; i < (int)equations.size(); i++) {
        if (mask & (1 << i)) {
            string a = equations[i][0], b = equations[i][1];
            graph[a][b] = values[i];
            graph[b][a] = 1.0 / values[i];
        }
    }
    for (auto& q : queries) {
        string c = q[0], d = q[1];
        if (graph.find(c) == graph.end() || graph.find(d) == graph.end()) return false;
        set<string> visited;
        stack<pair<string, double>> st;
        st.push({c, 1.0});
        visited.insert(c);
        bool found = false;
        while (!st.empty()) {
            auto [node, prod] = st.top(); st.pop();
            if (node == d) { found = true; break; }
            for (auto& [nei, w] : graph[node]) {
                if (visited.find(nei) == visited.end()) {
                    visited.insert(nei);
                    st.push({nei, prod * w});
                }
            }
        }
        if (!found) return false;
    }
    return true;
}

int minEquations(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {
    int m = equations.size();
    int best = m;
    for (int mask = 1; mask < (1 << m); mask++) {
        int cnt = __builtin_popcount(mask);
        if (cnt < best && canAnswer(mask, equations, values, queries))
            best = cnt;
    }
    return best;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> equations(n, vector<string>(2));
        vector<double> values(n);
        for (int i = 0; i < n; i++) {
            cin >> equations[i][0] >> equations[i][1] >> values[i];
        }
        int m;
        cin >> m;
        vector<vector<string>> queries(m, vector<string>(2));
        for (int i = 0; i < m; i++) {
            cin >> queries[i][0] >> queries[i][1];
        }
        cout << minEquations(equations, values, queries) << "\\n";
    }
    return 0;
}`
  },
  'ed-h4': {
    python: `def calc_equation_with_substitution(equations, values, substitutions, queries):
    graph = {}
    for (a, b), val in zip(equations, values):
        sa = substitutions.get(a, a)
        sb = substitutions.get(b, b)
        if sa not in graph: graph[sa] = {}
        if sb not in graph: graph[sb] = {}
        graph[sa][sb] = val
        graph[sb][sa] = 1.0 / val
    results = []
    for c, d in queries:
        sc = substitutions.get(c, c)
        sd = substitutions.get(d, d)
        if sc not in graph or sd not in graph:
            results.append(-1.0)
        elif sc == sd:
            results.append(1.0)
        else:
            visited = set()
            stack = [(sc, 1.0)]
            visited.add(sc)
            found = -1.0
            while stack:
                node, prod = stack.pop()
                if node == sd:
                    found = prod
                    break
                for nei, w in graph[node].items():
                    if nei not in visited:
                        visited.add(nei)
                        stack.append((nei, prod * w))
            results.append(found)
    return results

n = int(input())
equations = []
values = []
for _ in range(n):
    parts = input().split()
    equations.append([parts[0], parts[1]])
    values.append(float(parts[2]))
subs = int(input())
substitutions = {}
for _ in range(subs):
    parts = input().split()
    substitutions[parts[0]] = parts[1]
m = int(input())
queries = [input().split() for _ in range(m)]
res = calc_equation_with_substitution(equations, values, substitutions, queries)
print(" ".join(f"{v:.5f}" for v in res))`,
    java: `import java.util.*;

public class Solution {
    public static double[] calcEquationWithSubstitution(String[][] equations, double[] values, Map<String,String> substitutions, String[][] queries) {
        Map<String, Map<String, Double>> graph = new HashMap<>();
        for (int i = 0; i < equations.length; i++) {
            String a = substitutions.getOrDefault(equations[i][0], equations[i][0]);
            String b = substitutions.getOrDefault(equations[i][1], equations[i][1]);
            graph.putIfAbsent(a, new HashMap<>());
            graph.putIfAbsent(b, new HashMap<>());
            graph.get(a).put(b, values[i]);
            graph.get(b).put(a, 1.0 / values[i]);
        }
        double[] results = new double[queries.length];
        for (int i = 0; i < queries.length; i++) {
            String c = substitutions.getOrDefault(queries[i][0], queries[i][0]);
            String d = substitutions.getOrDefault(queries[i][1], queries[i][1]);
            if (!graph.containsKey(c) || !graph.containsKey(d)) {
                results[i] = -1.0;
            } else if (c.equals(d)) {
                results[i] = 1.0;
            } else {
                Set<String> visited = new HashSet<>();
                Stack<String> nodeStack = new Stack<>();
                Stack<Double> prodStack = new Stack<>();
                nodeStack.push(c);
                prodStack.push(1.0);
                visited.add(c);
                double found = -1.0;
                while (!nodeStack.isEmpty()) {
                    String node = nodeStack.pop();
                    double prod = prodStack.pop();
                    if (node.equals(d)) { found = prod; break; }
                    for (Map.Entry<String, Double> e : graph.get(node).entrySet()) {
                        if (!visited.contains(e.getKey())) {
                            visited.add(e.getKey());
                            nodeStack.push(e.getKey());
                            prodStack.push(prod * e.getValue());
                        }
                    }
                }
                results[i] = found;
            }
        }
        return results;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] equations = new String[n][2];
            double[] values = new double[n];
            for (int i = 0; i < n; i++) {
                equations[i][0] = sc.next();
                equations[i][1] = sc.next();
                values[i] = sc.nextDouble();
            }
            int subSize = sc.nextInt();
            Map<String,String> substitutions = new HashMap<>();
            for (int i = 0; i < subSize; i++) {
                String from = sc.next();
                String to = sc.next();
                substitutions.put(from, to);
            }
            int m = sc.nextInt();
            String[][] queries = new String[m][2];
            for (int i = 0; i < m; i++) {
                queries[i][0] = sc.next();
                queries[i][1] = sc.next();
            }
            double[] res = calcEquationWithSubstitution(equations, values, substitutions, queries);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(String.format(Locale.US, "%.5f", res[i]));
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXVARS 25

typedef struct {
    char from[25];
    char to[25];
} Substitution;

int nodeCount;
char nodes[MAXVARS][25];
double graph[MAXVARS][MAXVARS];

int getIndex(const char* s) {
    for (int i = 0; i < nodeCount; i++)
        if (strcmp(nodes[i], s) == 0) return i;
    strcpy(nodes[nodeCount], s);
    graph[nodeCount][nodeCount] = 1.0;
    for (int i = 0; i < nodeCount; i++) {
        graph[nodeCount][i] = -1.0;
        graph[i][nodeCount] = -1.0;
    }
    return nodeCount++;
}

void applySubst(char* out, const char* var, Substitution* subs, int subSize) {
    for (int i = 0; i < subSize; i++) {
        if (strcmp(var, subs[i].from) == 0) {
            strcpy(out, subs[i].to);
            return;
        }
    }
    strcpy(out, var);
}

int dfs(int u, int target, int* visited, double* prod) {
    if (u == target) return 1;
    visited[u] = 1;
    for (int v = 0; v < nodeCount; v++) {
        if (!visited[v] && graph[u][v] > -0.5) {
            double old = *prod;
            *prod *= graph[u][v];
            if (dfs(v, target, visited, prod)) return 1;
            *prod = old;
        }
    }
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    char** eqA = (char**)malloc(n * sizeof(char*));
    char** eqB = (char**)malloc(n * sizeof(char*));
    double* values = (double*)malloc(n * sizeof(double));
    for (int i = 0; i < n; i++) {
        eqA[i] = (char*)malloc(25);
        eqB[i] = (char*)malloc(25);
        if (scanf("%s %s %lf", eqA[i], eqB[i], &values[i]) != 3) return 0;
    }
    int subSize;
    if (scanf("%d", &subSize) != 1) return 0;
    Substitution* subs = (Substitution*)malloc(subSize * sizeof(Substitution));
    for (int i = 0; i < subSize; i++) {
        if (scanf("%s %s", subs[i].from, subs[i].to) != 2) return 0;
    }
    int m;
    if (scanf("%d", &m) != 1) return 0;
    char** qA = (char**)malloc(m * sizeof(char*));
    char** qB = (char**)malloc(m * sizeof(char*));
    for (int i = 0; i < m; i++) {
        qA[i] = (char*)malloc(25);
        qB[i] = (char*)malloc(25);
        if (scanf("%s %s", qA[i], qB[i]) != 2) return 0;
    }
    nodeCount = 0;
    for (int i = 0; i < MAXVARS; i++)
        for (int j = 0; j < MAXVARS; j++)
            graph[i][j] = -1.0;
    for (int i = 0; i < n; i++) {
        char sa[25], sb[25];
        applySubst(sa, eqA[i], subs, subSize);
        applySubst(sb, eqB[i], subs, subSize);
        int u = getIndex(sa), v = getIndex(sb);
        graph[u][v] = values[i];
        graph[v][u] = 1.0 / values[i];
    }
    for (int i = 0; i < m; i++) {
        char sc[25], sd[25];
        applySubst(sc, qA[i], subs, subSize);
        applySubst(sd, qB[i], subs, subSize);
        int u = -1, v = -1;
        for (int j = 0; j < nodeCount; j++) {
            if (strcmp(nodes[j], sc) == 0) u = j;
            if (strcmp(nodes[j], sd) == 0) v = j;
        }
        double res;
        if (u == -1 || v == -1) res = -1.0;
        else if (u == v) res = 1.0;
        else if (graph[u][v] > -0.5) res = graph[u][v];
        else {
            int visited[MAXVARS] = {0};
            double prod = 1.0;
            if (dfs(u, v, visited, &prod)) res = prod;
            else res = -1.0;
        }
        if (i > 0) printf(" ");
        printf("%.5f", res);
    }
    printf("\\n");
    for (int i = 0; i < n; i++) { free(eqA[i]); free(eqB[i]); }
    free(eqA); free(eqB); free(values); free(subs);
    for (int i = 0; i < m; i++) { free(qA[i]); free(qB[i]); }
    free(qA); free(qB);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <stack>
#include <set>
#include <iomanip>

using namespace std;

vector<double> calcEquationWithSubstitution(vector<vector<string>>& equations, vector<double>& values, unordered_map<string,string>& substitutions, vector<vector<string>>& queries) {
    unordered_map<string, unordered_map<string, double>> graph;
    for (int i = 0; i < (int)equations.size(); i++) {
        string a = substitutions.count(equations[i][0]) ? substitutions[equations[i][0]] : equations[i][0];
        string b = substitutions.count(equations[i][1]) ? substitutions[equations[i][1]] : equations[i][1];
        graph[a][b] = values[i];
        graph[b][a] = 1.0 / values[i];
    }
    vector<double> results;
    for (auto& q : queries) {
        string c = substitutions.count(q[0]) ? substitutions[q[0]] : q[0];
        string d = substitutions.count(q[1]) ? substitutions[q[1]] : q[1];
        if (graph.find(c) == graph.end() || graph.find(d) == graph.end()) {
            results.push_back(-1.0);
        } else if (c == d) {
            results.push_back(1.0);
        } else {
            set<string> visited;
            stack<pair<string, double>> st;
            st.push({c, 1.0});
            visited.insert(c);
            double found = -1.0;
            while (!st.empty()) {
                auto [node, prod] = st.top(); st.pop();
                if (node == d) { found = prod; break; }
                for (auto& [nei, w] : graph[node]) {
                    if (visited.find(nei) == visited.end()) {
                        visited.insert(nei);
                        st.push({nei, prod * w});
                    }
                }
            }
            results.push_back(found);
        }
    }
    return results;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> equations(n, vector<string>(2));
        vector<double> values(n);
        for (int i = 0; i < n; i++) {
            cin >> equations[i][0] >> equations[i][1] >> values[i];
        }
        int subSize;
        cin >> subSize;
        unordered_map<string,string> substitutions;
        for (int i = 0; i < subSize; i++) {
            string from, to;
            cin >> from >> to;
            substitutions[from] = to;
        }
        int m;
        cin >> m;
        vector<vector<string>> queries(m, vector<string>(2));
        for (int i = 0; i < m; i++) {
            cin >> queries[i][0] >> queries[i][1];
        }
        vector<double> res = calcEquationWithSubstitution(equations, values, substitutions, queries);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << fixed << setprecision(5) << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'ed-h5': {
    python: `def process_operations(equations, values, operations):
    parent = {}
    weight = {}
    
    def find(x):
        if parent[x] != x:
            root, w = find(parent[x])
            parent[x] = root
            weight[x] *= w
        return parent[x], weight[x]
    
    def union(x, y, val):
        if x not in parent:
            parent[x] = x
            weight[x] = 1.0
        if y not in parent:
            parent[y] = y
            weight[y] = 1.0
        rx, wx = find(x)
        ry, wy = find(y)
        if rx != ry:
            parent[rx] = ry
            weight[rx] = wy * val / wx
    
    def query(x, y):
        if x not in parent or y not in parent:
            return -1.0
        rx, wx = find(x)
        ry, wy = find(y)
        if rx != ry:
            return -1.0
        return wx / wy
    
    for (a, b), val in zip(equations, values):
        union(a, b, val)
    
    results = []
    for op in operations:
        parts = op.split()
        if parts[0] == "QUERY":
            c, d = parts[1], parts[2]
            results.append(query(c, d))
        elif parts[0] == "ADD":
            a, b = parts[1], parts[2]
            val = float(parts[3])
            union(a, b, val)
    return results

n = int(input())
equations = []
values = []
for _ in range(n):
    parts = input().split()
    equations.append([parts[0], parts[1]])
    values.append(float(parts[2]))
m = int(input())
operations = [input().strip() for _ in range(m)]
res = process_operations(equations, values, operations)
print(" ".join(f"{v:.5f}" for v in res))`,
    java: `import java.util.*;

public class Solution {
    static Map<String, String> parent;
    static Map<String, Double> weight;

    static String find(String x) {
        if (!parent.get(x).equals(x)) {
            String root = find(parent.get(x));
            weight.put(x, weight.get(x) * weight.get(parent.get(x)));
            parent.put(x, root);
        }
        return parent.get(x);
    }

    static void union(String x, String y, double val) {
        if (!parent.containsKey(x)) { parent.put(x, x); weight.put(x, 1.0); }
        if (!parent.containsKey(y)) { parent.put(y, y); weight.put(y, 1.0); }
        String rx = find(x), ry = find(y);
        if (!rx.equals(ry)) {
            parent.put(rx, ry);
            weight.put(rx, weight.get(y) * val / weight.get(x));
        }
    }

    static double query(String x, String y) {
        if (!parent.containsKey(x) || !parent.containsKey(y)) return -1.0;
        String rx = find(x), ry = find(y);
        return rx.equals(ry) ? weight.get(x) / weight.get(y) : -1.0;
    }

    public static double[] processOperations(String[][] equations, double[] values, String[] operations) {
        parent = new HashMap<>();
        weight = new HashMap<>();
        for (int i = 0; i < equations.length; i++) {
            union(equations[i][0], equations[i][1], values[i]);
        }
        List<Double> results = new ArrayList<>();
        for (String op : operations) {
            String[] parts = op.split(" ");
            if (parts[0].equals("QUERY")) {
                results.add(query(parts[1], parts[2]));
            } else if (parts[0].equals("ADD")) {
                union(parts[1], parts[2], Double.parseDouble(parts[3]));
            }
        }
        double[] res = new double[results.size()];
        for (int i = 0; i < results.size(); i++) res[i] = results.get(i);
        return res;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] equations = new String[n][2];
            double[] values = new double[n];
            for (int i = 0; i < n; i++) {
                equations[i][0] = sc.next();
                equations[i][1] = sc.next();
                values[i] = sc.nextDouble();
            }
            int m = sc.nextInt();
            sc.nextLine();
            String[] operations = new String[m];
            for (int i = 0; i < m; i++) operations[i] = sc.nextLine();
            double[] res = processOperations(equations, values, operations);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(String.format(Locale.US, "%.5f", res[i]));
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>

#define MAXVARS 25
#define MAXOPS 50

char nodes[MAXVARS][25];
int par[MAXVARS];
double wt[MAXVARS];
int nodeCount;

int getIndex(const char* s) {
    for (int i = 0; i < nodeCount; i++)
        if (strcmp(nodes[i], s) == 0) return i;
    strcpy(nodes[nodeCount], s);
    par[nodeCount] = nodeCount;
    wt[nodeCount] = 1.0;
    return nodeCount++;
}

int find(int x) {
    if (par[x] != x) {
        int root = find(par[x]);
        wt[x] *= wt[par[x]];
        par[x] = root;
    }
    return par[x];
}

void unite(int x, int y, double val) {
    int rx = find(x), ry = find(y);
    if (rx != ry) {
        par[rx] = ry;
        wt[rx] = wt[y] * val / wt[x];
    }
}

double query(int x, int y) {
    if (x == -1 || y == -1) return -1.0;
    int rx = find(x), ry = find(y);
    if (rx != ry) return -1.0;
    return wt[x] / wt[y];
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    nodeCount = 0;
    char a[25], b[25];
    double val;
    for (int i = 0; i < n; i++) {
        if (scanf("%s %s %lf", a, b, &val) != 3) return 0;
        int u = getIndex(a), v = getIndex(b);
        unite(u, v, val);
    }
    int m;
    if (scanf("%d", &m) != 1) return 0;
    getchar();
    double results[MAXOPS];
    int resCount = 0;
    for (int i = 0; i < m; i++) {
        char line[100];
        fgets(line, 100, stdin);
        line[strcspn(line, "\\n")] = 0;
        char cmd[10], x[25], y[25];
        double v;
        if (sscanf(line, "QUERY %s %s", x, y) == 2) {
            int u = -1, vv = -1;
            for (int j = 0; j < nodeCount; j++) {
                if (strcmp(nodes[j], x) == 0) u = j;
                if (strcmp(nodes[j], y) == 0) vv = j;
            }
            results[resCount++] = query(u, vv);
        } else if (sscanf(line, "ADD %s %s %lf", x, y, &v) == 3) {
            int u = getIndex(x), vv = getIndex(y);
            unite(u, vv, v);
        }
    }
    for (int i = 0; i < resCount; i++) {
        if (i > 0) printf(" ");
        printf("%.5f", results[i]);
    }
    printf("\\n");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>
#include <sstream>
#include <iomanip>

using namespace std;

unordered_map<string, string> parent;
unordered_map<string, double> weight;

string find(const string& x) {
    if (parent[x] != x) {
        string root = find(parent[x]);
        weight[x] *= weight[parent[x]];
        parent[x] = root;
    }
    return parent[x];
}

void unite(const string& x, const string& y, double val) {
    if (!parent.count(x)) { parent[x] = x; weight[x] = 1.0; }
    if (!parent.count(y)) { parent[y] = y; weight[y] = 1.0; }
    string rx = find(x), ry = find(y);
    if (rx != ry) {
        parent[rx] = ry;
        weight[rx] = weight[y] * val / weight[x];
    }
}

double query(const string& x, const string& y) {
    if (!parent.count(x) || !parent.count(y)) return -1.0;
    string rx = find(x), ry = find(y);
    return (rx == ry) ? weight[x] / weight[y] : -1.0;
}

vector<double> processOperations(vector<vector<string>>& equations, vector<double>& values, vector<string>& operations) {
    parent.clear();
    weight.clear();
    for (int i = 0; i < (int)equations.size(); i++) {
        unite(equations[i][0], equations[i][1], values[i]);
    }
    vector<double> results;
    for (string& op : operations) {
        stringstream ss(op);
        string cmd;
        ss >> cmd;
        if (cmd == "QUERY") {
            string c, d;
            ss >> c >> d;
            results.push_back(query(c, d));
        } else if (cmd == "ADD") {
            string a, b;
            double val;
            ss >> a >> b >> val;
            unite(a, b, val);
        }
    }
    return results;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<string>> equations(n, vector<string>(2));
        vector<double> values(n);
        for (int i = 0; i < n; i++) {
            cin >> equations[i][0] >> equations[i][1] >> values[i];
        }
        int m;
        cin >> m;
        cin.ignore();
        vector<string> operations(m);
        for (int i = 0; i < m; i++) getline(cin, operations[i]);
        vector<double> res = processOperations(equations, values, operations);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << fixed << setprecision(5) << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  }
};