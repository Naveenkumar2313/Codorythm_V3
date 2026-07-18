export const AMcodeSnippets = {
    python: `def accounts_merge(accounts):
    parent = {}
    rank = {}

    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]

    def union(x, y):
        rx, ry = find(x), find(y)
        if rx == ry:
            return
        if rank[rx] < rank[ry]:
            rx, ry = ry, rx
        parent[ry] = rx
        if rank[rx] == rank[ry]:
            rank[rx] += 1

    email_to_name = {}
    for account in accounts:
        name = account[0]
        for email in account[1:]:
            if email not in parent:
                parent[email] = email
                rank[email] = 0
            email_to_name[email] = name
            union(account[1], email)

    from collections import defaultdict
    groups = defaultdict(list)
    for email in parent:
        groups[find(email)].append(email)

    result = []
    for root, emails in groups.items():
        result.append([email_to_name[root]] + sorted(emails))
    return result

accounts = [
    ["John", "johnsmith@mail.com", "john00@mail.com"],
    ["John", "johnnybravo@mail.com"],
    ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
    ["Mary", "mary@mail.com"]
]
for acc in accounts_merge(accounts):
    print(acc)
`,

    java: `import java.util.*;

public class AccountsMerge {
    static int[] parent, rank;

    static int find(int x) {
        if (parent[x] != x)
            parent[x] = find(parent[x]);
        return parent[x];
    }

    static void union(int x, int y) {
        int rx = find(x), ry = find(y);
        if (rx == ry) return;
        if (rank[rx] < rank[ry]) { int t = rx; rx = ry; ry = t; }
        parent[ry] = rx;
        if (rank[rx] == rank[ry]) rank[rx]++;
    }

    public static List<List<String>> accountsMerge(List<List<String>> accounts) {
        Map<String, Integer> emailIndex = new HashMap<>();
        Map<String, String> emailName = new HashMap<>();
        int idx = 0;
        for (List<String> account : accounts) {
            String name = account.get(0);
            for (int i = 1; i < account.size(); i++) {
                String email = account.get(i);
                if (!emailIndex.containsKey(email)) {
                    emailIndex.put(email, idx++);
                }
                emailName.put(email, name);
            }
        }
        parent = new int[idx];
        rank = new int[idx];
        for (int i = 0; i < idx; i++) parent[i] = i;
        for (List<String> account : accounts) {
            int first = emailIndex.get(account.get(1));
            for (int i = 2; i < account.size(); i++)
                union(first, emailIndex.get(account.get(i)));
        }
        Map<Integer, List<String>> groups = new HashMap<>();
        for (String email : emailIndex.keySet()) {
            int root = find(emailIndex.get(email));
            groups.computeIfAbsent(root, k -> new ArrayList<>()).add(email);
        }
        List<List<String>> result = new ArrayList<>();
        for (List<String> emails : groups.values()) {
            Collections.sort(emails);
            List<String> merged = new ArrayList<>();
            merged.add(emailName.get(emails.get(0)));
            merged.addAll(emails);
            result.add(merged);
        }
        return result;
    }

    public static void main(String[] args) {
        List<List<String>> accounts = Arrays.asList(
            Arrays.asList("John", "johnsmith@mail.com", "john00@mail.com"),
            Arrays.asList("John", "johnnybravo@mail.com"),
            Arrays.asList("John", "johnsmith@mail.com", "john_newyork@mail.com"),
            Arrays.asList("Mary", "mary@mail.com")
        );
        for (List<String> acc : accountsMerge(accounts))
            System.out.println(acc);
    }
}
`,

    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXN 1005
#define MAXLEN 50

int parent[MAXN], rnk[MAXN];
char emails[MAXN][MAXLEN];
char names[MAXN][MAXLEN];
int emailCount = 0;

int find(int x) {
    if (parent[x] != x)
        parent[x] = find(parent[x]);
    return parent[x];
}

void unite(int x, int y) {
    int rx = find(x), ry = find(y);
    if (rx == ry) return;
    if (rnk[rx] < rnk[ry]) { int t = rx; rx = ry; ry = t; }
    parent[ry] = rx;
    if (rnk[rx] == rnk[ry]) rnk[rx]++;
}

int getIndex(const char* email) {
    for (int i = 0; i < emailCount; i++)
        if (strcmp(emails[i], email) == 0) return i;
    strcpy(emails[emailCount], email);
    parent[emailCount] = emailCount;
    rnk[emailCount] = 0;
    return emailCount++;
}

int cmpStr(const void* a, const void* b) {
    return strcmp(*(const char**)a, *(const char**)b);
}

int main() {
    char* accs[4][5] = {
        {"John", "johnsmith@mail.com", "john00@mail.com", NULL},
        {"John", "johnnybravo@mail.com", NULL},
        {"John", "johnsmith@mail.com", "john_newyork@mail.com", NULL},
        {"Mary", "mary@mail.com", NULL}
    };
    int numAccounts = 4;
    for (int i = 0; i < numAccounts; i++) {
        char* name = accs[i][0];
        int first = getIndex(accs[i][1]);
        strcpy(names[first], name);
        for (int j = 2; accs[i][j] != NULL; j++) {
            int ei = getIndex(accs[i][j]);
            strcpy(names[ei], name);
            unite(first, ei);
        }
    }
    for (int root = 0; root < emailCount; root++) {
        if (find(root) != root) continue;
        char* group[MAXN];
        int cnt = 0;
        for (int i = 0; i < emailCount; i++)
            if (find(i) == root)
                group[cnt++] = emails[i];
        qsort(group, cnt, sizeof(char*), cmpStr);
        printf("%s", names[root]);
        for (int i = 0; i < cnt; i++)
            printf(", %s", group[i]);
        printf("\\n");
    }
    return 0;
}
`,

    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <map>
#include <algorithm>
using namespace std;

struct DSU {
    unordered_map<string, string> parent;
    unordered_map<string, int> rank_;

    string find(const string& x) {
        if (parent[x] != x)
            parent[x] = find(parent[x]);
        return parent[x];
    }

    void unite(const string& x, const string& y) {
        string rx = find(x), ry = find(y);
        if (rx == ry) return;
        if (rank_[rx] < rank_[ry]) swap(rx, ry);
        parent[ry] = rx;
        if (rank_[rx] == rank_[ry]) rank_[rx]++;
    }

    void add(const string& x) {
        if (!parent.count(x)) {
            parent[x] = x;
            rank_[x] = 0;
        }
    }
};

vector<vector<string>> accountsMerge(vector<vector<string>>& accounts) {
    DSU dsu;
    unordered_map<string, string> emailName;
    for (auto& account : accounts) {
        string name = account[0];
        for (int i = 1; i < (int)account.size(); i++) {
            dsu.add(account[i]);
            emailName[account[i]] = name;
            dsu.unite(account[1], account[i]);
        }
    }
    map<string, vector<string>> groups;
    for (auto& [email, _] : dsu.parent)
        groups[dsu.find(email)].push_back(email);
    vector<vector<string>> result;
    for (auto& [root, emails] : groups) {
        sort(emails.begin(), emails.end());
        vector<string> merged = {emailName[root]};
        merged.insert(merged.end(), emails.begin(), emails.end());
        result.push_back(merged);
    }
    return result;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    vector<vector<string>> accounts = {
        {"John", "johnsmith@mail.com", "john00@mail.com"},
        {"John", "johnnybravo@mail.com"},
        {"John", "johnsmith@mail.com", "john_newyork@mail.com"},
        {"Mary", "mary@mail.com"}
    };
    for (auto& acc : accountsMerge(accounts)) {
        for (auto& s : acc) cout << s << " ";
        cout << "\\n";
    }
    return 0;
}
`
};
