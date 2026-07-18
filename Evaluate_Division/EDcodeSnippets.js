export const EDcodeSnippets = {
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

equations = [["a", "b"], ["b", "c"]]
values = [2.0, 3.0]
queries = [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"]]
print(calc_equation(equations, values, queries))
`,

    java: `import java.util.*;

public class EvaluateDivision {
    static Map<String, String> parent = new HashMap<>();
    static Map<String, Double> weight = new HashMap<>();

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

    public static double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {
        for (int i = 0; i < equations.size(); i++) {
            String a = equations.get(i).get(0), b = equations.get(i).get(1);
            parent.putIfAbsent(a, a); weight.putIfAbsent(a, 1.0);
            parent.putIfAbsent(b, b); weight.putIfAbsent(b, 1.0);
            union(a, b, values[i]);
        }
        double[] res = new double[queries.size()];
        for (int i = 0; i < queries.size(); i++) {
            String c = queries.get(i).get(0), d = queries.get(i).get(1);
            if (!parent.containsKey(c) || !parent.containsKey(d)) {
                res[i] = -1.0;
            } else {
                String rc = find(c), rd = find(d);
                res[i] = rc.equals(rd) ? weight.get(c) / weight.get(d) : -1.0;
            }
        }
        return res;
    }

    public static void main(String[] args) {
        List<List<String>> equations = Arrays.asList(
            Arrays.asList("a", "b"), Arrays.asList("b", "c")
        );
        double[] values = {2.0, 3.0};
        List<List<String>> queries = Arrays.asList(
            Arrays.asList("a", "c"), Arrays.asList("b", "a"),
            Arrays.asList("a", "e"), Arrays.asList("a", "a")
        );
        System.out.println(Arrays.toString(calcEquation(equations, values, queries)));
    }
}
`,

    c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#define MAX 100

char nodes[MAX][20];
int par[MAX];
double wt[MAX];
int nodeCount = 0;

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
    scanf("%d", &n);
    char a[20], b[20];
    double val;
    for (int i = 0; i < n; i++) {
        scanf("%s %s %lf", a, b, &val);
        int ia = getIndex(a), ib = getIndex(b);
        unite(ia, ib, val);
    }
    int q;
    scanf("%d", &q);
    for (int i = 0; i < q; i++) {
        scanf("%s %s", a, b);
        int ia = -1, ib = -1;
        for (int j = 0; j < nodeCount; j++) {
            if (strcmp(nodes[j], a) == 0) ia = j;
            if (strcmp(nodes[j], b) == 0) ib = j;
        }
        if (ia == -1 || ib == -1) { printf("-1.00000\\n"); continue; }
        int ra = find(ia), rb = find(ib);
        if (ra != rb) printf("-1.00000\\n");
        else printf("%.5f\\n", wt[ia] / wt[ib]);
    }
    return 0;
}
`,

    cpp: `#include <iostream>
#include <unordered_map>
#include <vector>
#include <string>
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
    for (int i = 0; i < (int)equations.size(); i++) {
        string a = equations[i][0], b = equations[i][1];
        if (!parent.count(a)) { parent[a] = a; weight[a] = 1.0; }
        if (!parent.count(b)) { parent[b] = b; weight[b] = 1.0; }
        unite(a, b, values[i]);
    }
    vector<double> res;
    for (auto& q : queries) {
        string c = q[0], d = q[1];
        if (!parent.count(c) || !parent.count(d)) { res.push_back(-1.0); continue; }
        string rc = find(c), rd = find(d);
        res.push_back(rc == rd ? weight[c] / weight[d] : -1.0);
    }
    return res;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    vector<vector<string>> equations = {{"a", "b"}, {"b", "c"}};
    vector<double> values = {2.0, 3.0};
    vector<vector<string>> queries = {{"a", "c"}, {"b", "a"}, {"a", "e"}, {"a", "a"}};
    vector<double> ans = calcEquation(equations, values, queries);
    for (double v : ans) cout << v << " ";
    cout << "\\n";
    return 0;
}
`
};
