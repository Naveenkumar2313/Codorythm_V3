export const AMsolutions = {
  // --- EASY ---
  'am-e1': {
    python: `def accounts_merge(accounts):
    name = accounts[0][0]
    emails = sorted(set(accounts[0][1:]))
    return [[name] + emails]

n = int(input())
accounts = [input().split() for _ in range(n)]
res = accounts_merge(accounts)
for acc in res:
    print(" ".join(acc))`,
    java: `import java.util.*;

public class Solution {
    public static List<List<String>> accountsMerge(List<List<String>> accounts) {
        List<String> account = accounts.get(0);
        String name = account.get(0);
        Set<String> emailSet = new TreeSet<>();
        for (int i = 1; i < account.size(); i++) {
            emailSet.add(account.get(i));
        }
        List<String> merged = new ArrayList<>();
        merged.add(name);
        merged.addAll(emailSet);
        List<List<String>> result = new ArrayList<>();
        result.add(merged);
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            sc.nextLine();
            List<List<String>> accounts = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                String[] parts = sc.nextLine().split(" ");
                accounts.add(Arrays.asList(parts));
            }
            List<List<String>> res = accountsMerge(accounts);
            for (List<String> acc : res) {
                StringBuilder sb = new StringBuilder();
                for (int j = 0; j < acc.size(); j++) {
                    if (j > 0) sb.append(" ");
                    sb.append(acc.get(j));
                }
                System.out.println(sb.toString());
            }
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int cmpStr(const void* a, const void* b) {
    return strcmp(*(const char**)a, *(const char**)b);
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    char name[100];
    scanf("%s", name);
    char* emails[100];
    int emailCount = 0;
    char line[1000];
    fgets(line, 1000, stdin);
    char* token = strtok(line, " \\n");
    while (token) {
        emails[emailCount] = (char*)malloc(strlen(token) + 1);
        strcpy(emails[emailCount], token);
        emailCount++;
        token = strtok(NULL, " \\n");
    }
    qsort(emails, emailCount, sizeof(char*), cmpStr);
    printf("%s", name);
    for (int i = 0; i < emailCount; i++) {
        printf(" %s", emails[i]);
        free(emails[i]);
    }
    printf("\\n");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <set>
#include <sstream>

using namespace std;

vector<vector<string>> accountsMerge(vector<vector<string>>& accounts) {
    string name = accounts[0][0];
    set<string> emails(accounts[0].begin() + 1, accounts[0].end());
    vector<string> merged = {name};
    merged.insert(merged.end(), emails.begin(), emails.end());
    return {merged};
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        cin.ignore();
        vector<vector<string>> accounts(n);
        for (int i = 0; i < n; i++) {
            string line;
            getline(cin, line);
            stringstream ss(line);
            string token;
            while (ss >> token) {
                accounts[i].push_back(token);
            }
        }
        vector<vector<string>> res = accountsMerge(accounts);
        for (auto& acc : res) {
            for (int j = 0; j < (int)acc.size(); j++) {
                if (j > 0) cout << " ";
                cout << acc[j];
            }
            cout << "\\n";
        }
    }
    return 0;
}`
  },
  'am-e2': {
    python: `def accounts_merge(accounts):
    result = []
    for acc in accounts:
        name = acc[0]
        emails = sorted(set(acc[1:]))
        result.append([name] + emails)
    return result

n = int(input())
accounts = [input().split() for _ in range(n)]
res = accounts_merge(accounts)
for acc in res:
    print(" ".join(acc))`,
    java: `import java.util.*;

public class Solution {
    public static List<List<String>> accountsMerge(List<List<String>> accounts) {
        List<List<String>> result = new ArrayList<>();
        for (List<String> account : accounts) {
            String name = account.get(0);
            Set<String> emailSet = new TreeSet<>();
            for (int i = 1; i < account.size(); i++) {
                emailSet.add(account.get(i));
            }
            List<String> merged = new ArrayList<>();
            merged.add(name);
            merged.addAll(emailSet);
            result.add(merged);
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            sc.nextLine();
            List<List<String>> accounts = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                String[] parts = sc.nextLine().split(" ");
                accounts.add(Arrays.asList(parts));
            }
            List<List<String>> res = accountsMerge(accounts);
            for (List<String> acc : res) {
                StringBuilder sb = new StringBuilder();
                for (int j = 0; j < acc.size(); j++) {
                    if (j > 0) sb.append(" ");
                    sb.append(acc.get(j));
                }
                System.out.println(sb.toString());
            }
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int cmpStr(const void* a, const void* b) {
    return strcmp(*(const char**)a, *(const char**)b);
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    for (int i = 0; i < n; i++) {
        char name[100];
        scanf("%s", name);
        char* emails[100];
        int emailCount = 0;
        char line[1000];
        fgets(line, 1000, stdin);
        char* token = strtok(line, " \\n");
        while (token) {
            emails[emailCount] = (char*)malloc(strlen(token) + 1);
            strcpy(emails[emailCount], token);
            emailCount++;
            token = strtok(NULL, " \\n");
        }
        qsort(emails, emailCount, sizeof(char*), cmpStr);
        printf("%s", name);
        for (int j = 0; j < emailCount; j++) {
            printf(" %s", emails[j]);
            free(emails[j]);
        }
        printf("\\n");
    }
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <set>
#include <sstream>

using namespace std;

vector<vector<string>> accountsMerge(vector<vector<string>>& accounts) {
    vector<vector<string>> result;
    for (auto& account : accounts) {
        string name = account[0];
        set<string> emails(account.begin() + 1, account.end());
        vector<string> merged = {name};
        merged.insert(merged.end(), emails.begin(), emails.end());
        result.push_back(merged);
    }
    return result;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        cin.ignore();
        vector<vector<string>> accounts(n);
        for (int i = 0; i < n; i++) {
            string line;
            getline(cin, line);
            stringstream ss(line);
            string token;
            while (ss >> token) {
                accounts[i].push_back(token);
            }
        }
        vector<vector<string>> res = accountsMerge(accounts);
        for (auto& acc : res) {
            for (int j = 0; j < (int)acc.size(); j++) {
                if (j > 0) cout << " ";
                cout << acc[j];
            }
            cout << "\\n";
        }
    }
    return 0;
}`
  },
  'am-e3': {
    python: `def accounts_merge(accounts):
    email_to_name = {}
    for acc in accounts:
        name = acc[0]
        for email in acc[1:]:
            email_to_name[email] = name
    
    from collections import defaultdict
    graph = defaultdict(set)
    for acc in accounts:
        first = acc[1]
        for email in acc[2:]:
            graph[first].add(email)
            graph[email].add(first)
    
    visited = set()
    result = []
    for email in email_to_name:
        if email not in visited:
            stack = [email]
            component = set()
            while stack:
                cur = stack.pop()
                if cur not in visited:
                    visited.add(cur)
                    component.add(cur)
                    for nei in graph[cur]:
                        if nei not in visited:
                            stack.append(nei)
            sorted_emails = sorted(component)
            name = email_to_name[sorted_emails[0]]
            result.append([name] + sorted_emails)
    return result

n = int(input())
accounts = [input().split() for _ in range(n)]
res = accounts_merge(accounts)
for acc in res:
    print(" ".join(acc))`,
    java: `import java.util.*;

public class Solution {
    public static List<List<String>> accountsMerge(List<List<String>> accounts) {
        Map<String, String> emailToName = new HashMap<>();
        Map<String, Set<String>> graph = new HashMap<>();
        for (List<String> account : accounts) {
            String name = account.get(0);
            for (int i = 1; i < account.size(); i++) {
                String email = account.get(i);
                emailToName.put(email, name);
                graph.putIfAbsent(email, new HashSet<>());
                if (i > 1) {
                    graph.get(account.get(1)).add(email);
                    graph.get(email).add(account.get(1));
                }
            }
        }
        Set<String> visited = new HashSet<>();
        List<List<String>> result = new ArrayList<>();
        for (String email : emailToName.keySet()) {
            if (!visited.contains(email)) {
                Set<String> component = new HashSet<>();
                Stack<String> stack = new Stack<>();
                stack.push(email);
                while (!stack.isEmpty()) {
                    String cur = stack.pop();
                    if (!visited.contains(cur)) {
                        visited.add(cur);
                        component.add(cur);
                        for (String nei : graph.get(cur)) {
                            if (!visited.contains(nei)) {
                                stack.push(nei);
                            }
                        }
                    }
                }
                List<String> sorted = new ArrayList<>(component);
                Collections.sort(sorted);
                List<String> merged = new ArrayList<>();
                merged.add(emailToName.get(sorted.get(0)));
                merged.addAll(sorted);
                result.add(merged);
            }
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            sc.nextLine();
            List<List<String>> accounts = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                String[] parts = sc.nextLine().split(" ");
                accounts.add(Arrays.asList(parts));
            }
            List<List<String>> res = accountsMerge(accounts);
            for (List<String> acc : res) {
                StringBuilder sb = new StringBuilder();
                for (int j = 0; j < acc.size(); j++) {
                    if (j > 0) sb.append(" ");
                    sb.append(acc.get(j));
                }
                System.out.println(sb.toString());
            }
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXN 1005
#define MAXLEN 55

int parent[MAXN], rnk[MAXN];
char emails[MAXN][MAXLEN];
char names[MAXN][MAXLEN];
int emailCount = 0;

int find(int x) {
    if (parent[x] != x) parent[x] = find(parent[x]);
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
    int n;
    if (scanf("%d", &n) != 1) return 0;
    for (int i = 0; i < n; i++) {
        char name[100];
        scanf("%s", name);
        char e[100];
        int first = -1;
        while (scanf("%s", e) == 1) {
            if (strchr(e, '@') == NULL) { strcpy(name, e); continue; }
            int idx = getIndex(e);
            strcpy(names[idx], name);
            if (first == -1) first = idx;
            else unite(first, idx);
            if (getchar() == '\\n') break;
        }
    }
    int* processed = (int*)calloc(emailCount, sizeof(int));
    for (int i = 0; i < emailCount; i++) {
        int root = find(i);
        if (processed[root]) continue;
        processed[root] = 1;
        char** group = (char**)malloc(emailCount * sizeof(char*));
        int cnt = 0;
        for (int j = 0; j < emailCount; j++)
            if (find(j) == root)
                group[cnt++] = emails[j];
        qsort(group, cnt, sizeof(char*), cmpStr);
        printf("%s", names[root]);
        for (int j = 0; j < cnt; j++)
            printf(" %s", group[j]);
        printf("\\n");
        free(group);
    }
    free(processed);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <set>
#include <unordered_map>
#include <sstream>

using namespace std;

unordered_map<string, string> parent;
unordered_map<string, int> rank_;

string find(const string& x) {
    if (parent[x] != x) parent[x] = find(parent[x]);
    return parent[x];
}

void unite(const string& x, const string& y) {
    string rx = find(x), ry = find(y);
    if (rx == ry) return;
    if (rank_[rx] < rank_[ry]) swap(rx, ry);
    parent[ry] = rx;
    if (rank_[rx] == rank_[ry]) rank_[rx]++;
}

vector<vector<string>> accountsMerge(vector<vector<string>>& accounts) {
    unordered_map<string, string> emailToName;
    for (auto& acc : accounts) {
        string name = acc[0];
        for (int i = 1; i < (int)acc.size(); i++) {
            emailToName[acc[i]] = name;
            if (parent.find(acc[i]) == parent.end()) {
                parent[acc[i]] = acc[i];
                rank_[acc[i]] = 0;
            }
            if (i > 1) unite(acc[1], acc[i]);
        }
    }
    unordered_map<string, set<string>> groups;
    for (auto& [email, _] : parent)
        groups[find(email)].insert(email);
    vector<vector<string>> result;
    for (auto& [root, emails] : groups) {
        vector<string> merged = {emailToName[root]};
        merged.insert(merged.end(), emails.begin(), emails.end());
        result.push_back(merged);
    }
    return result;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        cin.ignore();
        vector<vector<string>> accounts(n);
        for (int i = 0; i < n; i++) {
            string line;
            getline(cin, line);
            stringstream ss(line);
            string token;
            while (ss >> token) {
                accounts[i].push_back(token);
            }
        }
        vector<vector<string>> res = accountsMerge(accounts);
        for (auto& acc : res) {
            for (int j = 0; j < (int)acc.size(); j++) {
                if (j > 0) cout << " ";
                cout << acc[j];
            }
            cout << "\\n";
        }
    }
    return 0;
}`
  },
  'am-e4': {
    python: `def accounts_merge(accounts):
    result = []
    for acc in accounts:
        name = acc[0]
        emails = sorted(set(acc[1:]))
        result.append([name] + emails)
    return result

n = int(input())
accounts = [input().split() for _ in range(n)]
res = accounts_merge(accounts)
for acc in res:
    print(" ".join(acc))`,
    java: `import java.util.*;

public class Solution {
    public static List<List<String>> accountsMerge(List<List<String>> accounts) {
        List<List<String>> result = new ArrayList<>();
        for (List<String> account : accounts) {
            String name = account.get(0);
            Set<String> emailSet = new TreeSet<>();
            for (int i = 1; i < account.size(); i++) {
                emailSet.add(account.get(i));
            }
            List<String> merged = new ArrayList<>();
            merged.add(name);
            merged.addAll(emailSet);
            result.add(merged);
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            sc.nextLine();
            List<List<String>> accounts = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                String[] parts = sc.nextLine().split(" ");
                accounts.add(Arrays.asList(parts));
            }
            List<List<String>> res = accountsMerge(accounts);
            for (List<String> acc : res) {
                StringBuilder sb = new StringBuilder();
                for (int j = 0; j < acc.size(); j++) {
                    if (j > 0) sb.append(" ");
                    sb.append(acc.get(j));
                }
                System.out.println(sb.toString());
            }
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int cmpStr(const void* a, const void* b) {
    return strcmp(*(const char**)a, *(const char**)b);
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    for (int i = 0; i < n; i++) {
        char name[100];
        scanf("%s", name);
        char* emails[100];
        int emailCount = 0;
        char line[1000];
        fgets(line, 1000, stdin);
        char* token = strtok(line, " \\n");
        while (token) {
            int dup = 0;
            for (int j = 0; j < emailCount; j++)
                if (strcmp(emails[j], token) == 0) { dup = 1; break; }
            if (!dup) {
                emails[emailCount] = (char*)malloc(strlen(token) + 1);
                strcpy(emails[emailCount], token);
                emailCount++;
            }
            token = strtok(NULL, " \\n");
        }
        qsort(emails, emailCount, sizeof(char*), cmpStr);
        printf("%s", name);
        for (int j = 0; j < emailCount; j++) {
            printf(" %s", emails[j]);
            free(emails[j]);
        }
        printf("\\n");
    }
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <set>
#include <sstream>

using namespace std;

vector<vector<string>> accountsMerge(vector<vector<string>>& accounts) {
    vector<vector<string>> result;
    for (auto& account : accounts) {
        string name = account[0];
        set<string> emails(account.begin() + 1, account.end());
        vector<string> merged = {name};
        merged.insert(merged.end(), emails.begin(), emails.end());
        result.push_back(merged);
    }
    return result;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        cin.ignore();
        vector<vector<string>> accounts(n);
        for (int i = 0; i < n; i++) {
            string line;
            getline(cin, line);
            stringstream ss(line);
            string token;
            while (ss >> token) {
                accounts[i].push_back(token);
            }
        }
        vector<vector<string>> res = accountsMerge(accounts);
        for (auto& acc : res) {
            for (int j = 0; j < (int)acc.size(); j++) {
                if (j > 0) cout << " ";
                cout << acc[j];
            }
            cout << "\\n";
        }
    }
    return 0;
}`
  },
  'am-e5': {
    python: `def accounts_merge(accounts):
    result = []
    for acc in accounts:
        name = acc[0]
        emails = sorted(set(acc[1:]))
        result.append([name] + emails)
    return result

n = int(input())
accounts = [input().split() for _ in range(n)]
res = accounts_merge(accounts)
for acc in res:
    print(" ".join(acc))`,
    java: `import java.util.*;

public class Solution {
    public static List<List<String>> accountsMerge(List<List<String>> accounts) {
        List<List<String>> result = new ArrayList<>();
        for (List<String> account : accounts) {
            String name = account.get(0);
            Set<String> emailSet = new TreeSet<>();
            for (int i = 1; i < account.size(); i++) {
                emailSet.add(account.get(i));
            }
            List<String> merged = new ArrayList<>();
            merged.add(name);
            merged.addAll(emailSet);
            result.add(merged);
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            sc.nextLine();
            List<List<String>> accounts = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                String[] parts = sc.nextLine().split(" ");
                accounts.add(Arrays.asList(parts));
            }
            List<List<String>> res = accountsMerge(accounts);
            for (List<String> acc : res) {
                StringBuilder sb = new StringBuilder();
                for (int j = 0; j < acc.size(); j++) {
                    if (j > 0) sb.append(" ");
                    sb.append(acc.get(j));
                }
                System.out.println(sb.toString());
            }
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int cmpStr(const void* a, const void* b) {
    return strcmp(*(const char**)a, *(const char**)b);
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    for (int i = 0; i < n; i++) {
        char name[100];
        scanf("%s", name);
        char* emails[100];
        int emailCount = 0;
        char line[1000];
        fgets(line, 1000, stdin);
        char* token = strtok(line, " \\n");
        while (token) {
            emails[emailCount] = (char*)malloc(strlen(token) + 1);
            strcpy(emails[emailCount], token);
            emailCount++;
            token = strtok(NULL, " \\n");
        }
        qsort(emails, emailCount, sizeof(char*), cmpStr);
        printf("%s", name);
        for (int j = 0; j < emailCount; j++) {
            printf(" %s", emails[j]);
            free(emails[j]);
        }
        printf("\\n");
    }
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <set>
#include <sstream>

using namespace std;

vector<vector<string>> accountsMerge(vector<vector<string>>& accounts) {
    vector<vector<string>> result;
    for (auto& account : accounts) {
        string name = account[0];
        set<string> emails(account.begin() + 1, account.end());
        vector<string> merged = {name};
        merged.insert(merged.end(), emails.begin(), emails.end());
        result.push_back(merged);
    }
    return result;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        cin.ignore();
        vector<vector<string>> accounts(n);
        for (int i = 0; i < n; i++) {
            string line;
            getline(cin, line);
            stringstream ss(line);
            string token;
            while (ss >> token) {
                accounts[i].push_back(token);
            }
        }
        vector<vector<string>> res = accountsMerge(accounts);
        for (auto& acc : res) {
            for (int j = 0; j < (int)acc.size(); j++) {
                if (j > 0) cout << " ";
                cout << acc[j];
            }
            cout << "\\n";
        }
    }
    return 0;
}`
  },

  // --- MEDIUM ---
  'am-m1': {
    python: `def accounts_merge(accounts):
    email_to_name = {}
    for acc in accounts:
        name = acc[0]
        for email in acc[1:]:
            email_to_name[email] = name
    
    from collections import defaultdict
    graph = defaultdict(set)
    for acc in accounts:
        first = acc[1]
        for email in acc[2:]:
            graph[first].add(email)
            graph[email].add(first)
    
    visited = set()
    result = []
    for email in email_to_name:
        if email not in visited:
            stack = [email]
            component = set()
            while stack:
                cur = stack.pop()
                if cur not in visited:
                    visited.add(cur)
                    component.add(cur)
                    for nei in graph[cur]:
                        if nei not in visited:
                            stack.append(nei)
            sorted_emails = sorted(component)
            name = email_to_name[sorted_emails[0]]
            result.append([name] + sorted_emails)
    return result

n = int(input())
accounts = [input().split() for _ in range(n)]
res = accounts_merge(accounts)
for acc in res:
    print(" ".join(acc))`,
    java: `import java.util.*;

public class Solution {
    public static List<List<String>> accountsMerge(List<List<String>> accounts) {
        Map<String, String> emailToName = new HashMap<>();
        Map<String, Set<String>> graph = new HashMap<>();
        for (List<String> account : accounts) {
            String name = account.get(0);
            for (int i = 1; i < account.size(); i++) {
                String email = account.get(i);
                emailToName.put(email, name);
                graph.putIfAbsent(email, new HashSet<>());
                if (i > 1) {
                    graph.get(account.get(1)).add(email);
                    graph.get(email).add(account.get(1));
                }
            }
        }
        Set<String> visited = new HashSet<>();
        List<List<String>> result = new ArrayList<>();
        for (String email : emailToName.keySet()) {
            if (!visited.contains(email)) {
                Set<String> component = new HashSet<>();
                Stack<String> stack = new Stack<>();
                stack.push(email);
                while (!stack.isEmpty()) {
                    String cur = stack.pop();
                    if (!visited.contains(cur)) {
                        visited.add(cur);
                        component.add(cur);
                        for (String nei : graph.get(cur)) {
                            if (!visited.contains(nei)) {
                                stack.push(nei);
                            }
                        }
                    }
                }
                List<String> sorted = new ArrayList<>(component);
                Collections.sort(sorted);
                List<String> merged = new ArrayList<>();
                merged.add(emailToName.get(sorted.get(0)));
                merged.addAll(sorted);
                result.add(merged);
            }
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            sc.nextLine();
            List<List<String>> accounts = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                String[] parts = sc.nextLine().split(" ");
                accounts.add(Arrays.asList(parts));
            }
            List<List<String>> res = accountsMerge(accounts);
            for (List<String> acc : res) {
                StringBuilder sb = new StringBuilder();
                for (int j = 0; j < acc.size(); j++) {
                    if (j > 0) sb.append(" ");
                    sb.append(acc.get(j));
                }
                System.out.println(sb.toString());
            }
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXN 1005
#define MAXLEN 55

int parent[MAXN], rnk[MAXN];
char emails[MAXN][MAXLEN];
char names[MAXN][MAXLEN];
int emailCount = 0;

int find(int x) {
    if (parent[x] != x) parent[x] = find(parent[x]);
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
    int n;
    if (scanf("%d", &n) != 1) return 0;
    for (int i = 0; i < n; i++) {
        char name[100];
        scanf("%s", name);
        char e[100];
        int first = -1;
        while (scanf("%s", e) == 1) {
            if (strchr(e, '@') == NULL) { strcpy(name, e); continue; }
            int idx = getIndex(e);
            strcpy(names[idx], name);
            if (first == -1) first = idx;
            else unite(first, idx);
            if (getchar() == '\\n') break;
        }
    }
    int* processed = (int*)calloc(emailCount, sizeof(int));
    for (int i = 0; i < emailCount; i++) {
        int root = find(i);
        if (processed[root]) continue;
        processed[root] = 1;
        char** group = (char**)malloc(emailCount * sizeof(char*));
        int cnt = 0;
        for (int j = 0; j < emailCount; j++)
            if (find(j) == root)
                group[cnt++] = emails[j];
        qsort(group, cnt, sizeof(char*), cmpStr);
        printf("%s", names[root]);
        for (int j = 0; j < cnt; j++)
            printf(" %s", group[j]);
        printf("\\n");
        free(group);
    }
    free(processed);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <set>
#include <unordered_map>
#include <sstream>

using namespace std;

unordered_map<string, string> parent;
unordered_map<string, int> rank_;

string find(const string& x) {
    if (parent[x] != x) parent[x] = find(parent[x]);
    return parent[x];
}

void unite(const string& x, const string& y) {
    string rx = find(x), ry = find(y);
    if (rx == ry) return;
    if (rank_[rx] < rank_[ry]) swap(rx, ry);
    parent[ry] = rx;
    if (rank_[rx] == rank_[ry]) rank_[rx]++;
}

vector<vector<string>> accountsMerge(vector<vector<string>>& accounts) {
    unordered_map<string, string> emailToName;
    for (auto& acc : accounts) {
        string name = acc[0];
        for (int i = 1; i < (int)acc.size(); i++) {
            emailToName[acc[i]] = name;
            if (parent.find(acc[i]) == parent.end()) {
                parent[acc[i]] = acc[i];
                rank_[acc[i]] = 0;
            }
            if (i > 1) unite(acc[1], acc[i]);
        }
    }
    unordered_map<string, set<string>> groups;
    for (auto& [email, _] : parent)
        groups[find(email)].insert(email);
    vector<vector<string>> result;
    for (auto& [root, emails] : groups) {
        vector<string> merged = {emailToName[root]};
        merged.insert(merged.end(), emails.begin(), emails.end());
        result.push_back(merged);
    }
    return result;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        cin.ignore();
        vector<vector<string>> accounts(n);
        for (int i = 0; i < n; i++) {
            string line;
            getline(cin, line);
            stringstream ss(line);
            string token;
            while (ss >> token) {
                accounts[i].push_back(token);
            }
        }
        vector<vector<string>> res = accountsMerge(accounts);
        for (auto& acc : res) {
            for (int j = 0; j < (int)acc.size(); j++) {
                if (j > 0) cout << " ";
                cout << acc[j];
            }
            cout << "\\n";
        }
    }
    return 0;
}`
  },
  'am-m2': {
    python: `def accounts_merge(accounts):
    email_to_name = {}
    for acc in accounts:
        name = acc[0]
        for email in acc[1:]:
            email_to_name[email] = name
    
    from collections import defaultdict
    graph = defaultdict(set)
    for acc in accounts:
        first = acc[1]
        for email in acc[2:]:
            graph[first].add(email)
            graph[email].add(first)
    
    visited = set()
    result = []
    for email in email_to_name:
        if email not in visited:
            stack = [email]
            component = set()
            while stack:
                cur = stack.pop()
                if cur not in visited:
                    visited.add(cur)
                    component.add(cur)
                    for nei in graph[cur]:
                        if nei not in visited:
                            stack.append(nei)
            sorted_emails = sorted(component)
            name = email_to_name[sorted_emails[0]]
            result.append([name] + sorted_emails)
    return result

n = int(input())
accounts = [input().split() for _ in range(n)]
res = accounts_merge(accounts)
for acc in res:
    print(" ".join(acc))`,
    java: `import java.util.*;

public class Solution {
    public static List<List<String>> accountsMerge(List<List<String>> accounts) {
        Map<String, String> emailToName = new HashMap<>();
        Map<String, Set<String>> graph = new HashMap<>();
        for (List<String> account : accounts) {
            String name = account.get(0);
            for (int i = 1; i < account.size(); i++) {
                String email = account.get(i);
                emailToName.put(email, name);
                graph.putIfAbsent(email, new HashSet<>());
                if (i > 1) {
                    graph.get(account.get(1)).add(email);
                    graph.get(email).add(account.get(1));
                }
            }
        }
        Set<String> visited = new HashSet<>();
        List<List<String>> result = new ArrayList<>();
        for (String email : emailToName.keySet()) {
            if (!visited.contains(email)) {
                Set<String> component = new HashSet<>();
                Stack<String> stack = new Stack<>();
                stack.push(email);
                while (!stack.isEmpty()) {
                    String cur = stack.pop();
                    if (!visited.contains(cur)) {
                        visited.add(cur);
                        component.add(cur);
                        for (String nei : graph.get(cur)) {
                            if (!visited.contains(nei)) {
                                stack.push(nei);
                            }
                        }
                    }
                }
                List<String> sorted = new ArrayList<>(component);
                Collections.sort(sorted);
                List<String> merged = new ArrayList<>();
                merged.add(emailToName.get(sorted.get(0)));
                merged.addAll(sorted);
                result.add(merged);
            }
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            sc.nextLine();
            List<List<String>> accounts = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                String[] parts = sc.nextLine().split(" ");
                accounts.add(Arrays.asList(parts));
            }
            List<List<String>> res = accountsMerge(accounts);
            for (List<String> acc : res) {
                StringBuilder sb = new StringBuilder();
                for (int j = 0; j < acc.size(); j++) {
                    if (j > 0) sb.append(" ");
                    sb.append(acc.get(j));
                }
                System.out.println(sb.toString());
            }
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXN 1005
#define MAXLEN 55

int parent[MAXN], rnk[MAXN];
char emails[MAXN][MAXLEN];
char names[MAXN][MAXLEN];
int emailCount = 0;

int find(int x) {
    if (parent[x] != x) parent[x] = find(parent[x]);
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
    int n;
    if (scanf("%d", &n) != 1) return 0;
    for (int i = 0; i < n; i++) {
        char name[100];
        scanf("%s", name);
        char e[100];
        int first = -1;
        while (scanf("%s", e) == 1) {
            if (strchr(e, '@') == NULL) { strcpy(name, e); continue; }
            int idx = getIndex(e);
            strcpy(names[idx], name);
            if (first == -1) first = idx;
            else unite(first, idx);
            if (getchar() == '\\n') break;
        }
    }
    int* processed = (int*)calloc(emailCount, sizeof(int));
    for (int i = 0; i < emailCount; i++) {
        int root = find(i);
        if (processed[root]) continue;
        processed[root] = 1;
        char** group = (char**)malloc(emailCount * sizeof(char*));
        int cnt = 0;
        for (int j = 0; j < emailCount; j++)
            if (find(j) == root)
                group[cnt++] = emails[j];
        qsort(group, cnt, sizeof(char*), cmpStr);
        printf("%s", names[root]);
        for (int j = 0; j < cnt; j++)
            printf(" %s", group[j]);
        printf("\\n");
        free(group);
    }
    free(processed);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <set>
#include <unordered_map>
#include <sstream>

using namespace std;

unordered_map<string, string> parent;
unordered_map<string, int> rank_;

string find(const string& x) {
    if (parent[x] != x) parent[x] = find(parent[x]);
    return parent[x];
}

void unite(const string& x, const string& y) {
    string rx = find(x), ry = find(y);
    if (rx == ry) return;
    if (rank_[rx] < rank_[ry]) swap(rx, ry);
    parent[ry] = rx;
    if (rank_[rx] == rank_[ry]) rank_[rx]++;
}

vector<vector<string>> accountsMerge(vector<vector<string>>& accounts) {
    unordered_map<string, string> emailToName;
    for (auto& acc : accounts) {
        string name = acc[0];
        for (int i = 1; i < (int)acc.size(); i++) {
            emailToName[acc[i]] = name;
            if (parent.find(acc[i]) == parent.end()) {
                parent[acc[i]] = acc[i];
                rank_[acc[i]] = 0;
            }
            if (i > 1) unite(acc[1], acc[i]);
        }
    }
    unordered_map<string, set<string>> groups;
    for (auto& [email, _] : parent)
        groups[find(email)].insert(email);
    vector<vector<string>> result;
    for (auto& [root, emails] : groups) {
        vector<string> merged = {emailToName[root]};
        merged.insert(merged.end(), emails.begin(), emails.end());
        result.push_back(merged);
    }
    return result;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        cin.ignore();
        vector<vector<string>> accounts(n);
        for (int i = 0; i < n; i++) {
            string line;
            getline(cin, line);
            stringstream ss(line);
            string token;
            while (ss >> token) {
                accounts[i].push_back(token);
            }
        }
        vector<vector<string>> res = accountsMerge(accounts);
        for (auto& acc : res) {
            for (int j = 0; j < (int)acc.size(); j++) {
                if (j > 0) cout << " ";
                cout << acc[j];
            }
            cout << "\\n";
        }
    }
    return 0;
}`
  },
  'am-m3': {
    python: `def count_merged_groups(accounts):
    email_to_name = {}
    for acc in accounts:
        name = acc[0]
        for email in acc[1:]:
            email_to_name[email] = name
    
    from collections import defaultdict
    graph = defaultdict(set)
    for acc in accounts:
        first = acc[1]
        for email in acc[2:]:
            graph[first].add(email)
            graph[email].add(first)
    
    visited = set()
    groups = 0
    for email in email_to_name:
        if email not in visited:
            groups += 1
            stack = [email]
            visited.add(email)
            while stack:
                cur = stack.pop()
                for nei in graph[cur]:
                    if nei not in visited:
                        visited.add(nei)
                        stack.append(nei)
    return groups

n = int(input())
accounts = [input().split() for _ in range(n)]
print(count_merged_groups(accounts))`,
    java: `import java.util.*;

public class Solution {
    public static int countMergedGroups(List<List<String>> accounts) {
        Map<String, Set<String>> graph = new HashMap<>();
        Map<String, String> emailToName = new HashMap<>();
        for (List<String> account : accounts) {
            String name = account.get(0);
            for (int i = 1; i < account.size(); i++) {
                String email = account.get(i);
                emailToName.put(email, name);
                graph.putIfAbsent(email, new HashSet<>());
                if (i > 1) {
                    graph.get(account.get(1)).add(email);
                    graph.get(email).add(account.get(1));
                }
            }
        }
        Set<String> visited = new HashSet<>();
        int groups = 0;
        for (String email : emailToName.keySet()) {
            if (!visited.contains(email)) {
                groups++;
                Stack<String> stack = new Stack<>();
                stack.push(email);
                visited.add(email);
                while (!stack.isEmpty()) {
                    String cur = stack.pop();
                    for (String nei : graph.get(cur)) {
                        if (!visited.contains(nei)) {
                            visited.add(nei);
                            stack.push(nei);
                        }
                    }
                }
            }
        }
        return groups;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            sc.nextLine();
            List<List<String>> accounts = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                String[] parts = sc.nextLine().split(" ");
                accounts.add(Arrays.asList(parts));
            }
            System.out.println(countMergedGroups(accounts));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXN 1005
#define MAXLEN 55

int parent[MAXN], rnk[MAXN];
char emails[MAXN][MAXLEN];
int emailCount = 0;

int find(int x) {
    if (parent[x] != x) parent[x] = find(parent[x]);
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

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    for (int i = 0; i < n; i++) {
        char name[100];
        scanf("%s", name);
        char e[100];
        int first = -1;
        while (scanf("%s", e) == 1) {
            if (strchr(e, '@') == NULL) { strcpy(name, e); continue; }
            int idx = getIndex(e);
            if (first == -1) first = idx;
            else unite(first, idx);
            if (getchar() == '\\n') break;
        }
    }
    int groups = 0;
    for (int i = 0; i < emailCount; i++)
        if (find(i) == i) groups++;
    printf("%d\\n", groups);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <set>
#include <unordered_map>
#include <sstream>

using namespace std;

unordered_map<string, string> parent;
unordered_map<string, int> rank_;

string find(const string& x) {
    if (parent[x] != x) parent[x] = find(parent[x]);
    return parent[x];
}

void unite(const string& x, const string& y) {
    string rx = find(x), ry = find(y);
    if (rx == ry) return;
    if (rank_[rx] < rank_[ry]) swap(rx, ry);
    parent[ry] = rx;
    if (rank_[rx] == rank_[ry]) rank_[rx]++;
}

int countMergedGroups(vector<vector<string>>& accounts) {
    for (auto& acc : accounts) {
        string name = acc[0];
        for (int i = 1; i < (int)acc.size(); i++) {
            if (parent.find(acc[i]) == parent.end()) {
                parent[acc[i]] = acc[i];
                rank_[acc[i]] = 0;
            }
            if (i > 1) unite(acc[1], acc[i]);
        }
    }
    set<string> roots;
    for (auto& [email, _] : parent)
        roots.insert(find(email));
    return roots.size();
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        cin.ignore();
        vector<vector<string>> accounts(n);
        for (int i = 0; i < n; i++) {
            string line;
            getline(cin, line);
            stringstream ss(line);
            string token;
            while (ss >> token) {
                accounts[i].push_back(token);
            }
        }
        cout << countMergedGroups(accounts) << "\\n";
    }
    return 0;
}`
  },
  'am-m4': {
    python: `def largest_merged_account(accounts):
    email_to_name = {}
    for acc in accounts:
        name = acc[0]
        for email in acc[1:]:
            email_to_name[email] = name
    
    from collections import defaultdict
    graph = defaultdict(set)
    for acc in accounts:
        first = acc[1]
        for email in acc[2:]:
            graph[first].add(email)
            graph[email].add(first)
    
    visited = set()
    best = []
    for email in email_to_name:
        if email not in visited:
            stack = [email]
            component = set()
            while stack:
                cur = stack.pop()
                if cur not in visited:
                    visited.add(cur)
                    component.add(cur)
                    for nei in graph[cur]:
                        if nei not in visited:
                            stack.append(nei)
            sorted_emails = sorted(component)
            if len(sorted_emails) > len(best):
                name = email_to_name[sorted_emails[0]]
                best = [name] + sorted_emails
    return best

n = int(input())
accounts = [input().split() for _ in range(n)]
res = largest_merged_account(accounts)
print(" ".join(res))`,
    java: `import java.util.*;

public class Solution {
    public static List<String> largestMergedAccount(List<List<String>> accounts) {
        Map<String, String> emailToName = new HashMap<>();
        Map<String, Set<String>> graph = new HashMap<>();
        for (List<String> account : accounts) {
            String name = account.get(0);
            for (int i = 1; i < account.size(); i++) {
                String email = account.get(i);
                emailToName.put(email, name);
                graph.putIfAbsent(email, new HashSet<>());
                if (i > 1) {
                    graph.get(account.get(1)).add(email);
                    graph.get(email).add(account.get(1));
                }
            }
        }
        Set<String> visited = new HashSet<>();
        List<String> best = new ArrayList<>();
        for (String email : emailToName.keySet()) {
            if (!visited.contains(email)) {
                Set<String> component = new HashSet<>();
                Stack<String> stack = new Stack<>();
                stack.push(email);
                while (!stack.isEmpty()) {
                    String cur = stack.pop();
                    if (!visited.contains(cur)) {
                        visited.add(cur);
                        component.add(cur);
                        for (String nei : graph.get(cur)) {
                            if (!visited.contains(nei)) stack.push(nei);
                        }
                    }
                }
                List<String> sorted = new ArrayList<>(component);
                Collections.sort(sorted);
                if (sorted.size() > best.size() - 1) {
                    best.clear();
                    best.add(emailToName.get(sorted.get(0)));
                    best.addAll(sorted);
                }
            }
        }
        return best;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            sc.nextLine();
            List<List<String>> accounts = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                String[] parts = sc.nextLine().split(" ");
                accounts.add(Arrays.asList(parts));
            }
            List<String> res = largestMergedAccount(accounts);
            StringBuilder sb = new StringBuilder();
            for (int j = 0; j < res.size(); j++) {
                if (j > 0) sb.append(" ");
                sb.append(res.get(j));
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXN 1005
#define MAXLEN 55

int parent[MAXN], rnk[MAXN];
char emails[MAXN][MAXLEN];
char names[MAXN][MAXLEN];
int emailCount = 0;

int find(int x) {
    if (parent[x] != x) parent[x] = find(parent[x]);
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
    int n;
    if (scanf("%d", &n) != 1) return 0;
    for (int i = 0; i < n; i++) {
        char name[100];
        scanf("%s", name);
        char e[100];
        int first = -1;
        while (scanf("%s", e) == 1) {
            if (strchr(e, '@') == NULL) { strcpy(name, e); continue; }
            int idx = getIndex(e);
            strcpy(names[idx], name);
            if (first == -1) first = idx;
            else unite(first, idx);
            if (getchar() == '\\n') break;
        }
    }
    int* processed = (int*)calloc(emailCount, sizeof(int));
    int bestSize = -1;
    char** bestGroup = NULL;
    char bestName[MAXLEN] = "";
    for (int i = 0; i < emailCount; i++) {
        int root = find(i);
        if (processed[root]) continue;
        processed[root] = 1;
        char** group = (char**)malloc(emailCount * sizeof(char*));
        int cnt = 0;
        for (int j = 0; j < emailCount; j++)
            if (find(j) == root)
                group[cnt++] = emails[j];
        if (cnt > bestSize) {
            bestSize = cnt;
            if (bestGroup) free(bestGroup);
            bestGroup = group;
            strcpy(bestName, names[root]);
        } else {
            free(group);
        }
    }
    qsort(bestGroup, bestSize, sizeof(char*), cmpStr);
    printf("%s", bestName);
    for (int j = 0; j < bestSize; j++)
        printf(" %s", bestGroup[j]);
    printf("\\n");
    free(bestGroup);
    free(processed);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <set>
#include <unordered_map>
#include <sstream>

using namespace std;

unordered_map<string, string> parent;
unordered_map<string, int> rank_;

string find(const string& x) {
    if (parent[x] != x) parent[x] = find(parent[x]);
    return parent[x];
}

void unite(const string& x, const string& y) {
    string rx = find(x), ry = find(y);
    if (rx == ry) return;
    if (rank_[rx] < rank_[ry]) swap(rx, ry);
    parent[ry] = rx;
    if (rank_[rx] == rank_[ry]) rank_[rx]++;
}

vector<string> largestMergedAccount(vector<vector<string>>& accounts) {
    unordered_map<string, string> emailToName;
    for (auto& acc : accounts) {
        string name = acc[0];
        for (int i = 1; i < (int)acc.size(); i++) {
            emailToName[acc[i]] = name;
            if (parent.find(acc[i]) == parent.end()) {
                parent[acc[i]] = acc[i];
                rank_[acc[i]] = 0;
            }
            if (i > 1) unite(acc[1], acc[i]);
        }
    }
    unordered_map<string, set<string>> groups;
    for (auto& [email, _] : parent)
        groups[find(email)].insert(email);
    vector<string> best;
    for (auto& [root, emails] : groups) {
        if ((int)emails.size() + 1 > (int)best.size()) {
            best.clear();
            best.push_back(emailToName[root]);
            best.insert(best.end(), emails.begin(), emails.end());
        }
    }
    return best;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        cin.ignore();
        vector<vector<string>> accounts(n);
        for (int i = 0; i < n; i++) {
            string line;
            getline(cin, line);
            stringstream ss(line);
            string token;
            while (ss >> token) {
                accounts[i].push_back(token);
            }
        }
        vector<string> res = largestMergedAccount(accounts);
        for (int j = 0; j < (int)res.size(); j++) {
            if (j > 0) cout << " ";
            cout << res[j];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'am-m5': {
    python: `def emails_of_same_person(accounts, target):
    email_to_name = {}
    for acc in accounts:
        name = acc[0]
        for email in acc[1:]:
            email_to_name[email] = name
    
    from collections import defaultdict
    graph = defaultdict(set)
    for acc in accounts:
        first = acc[1]
        for email in acc[2:]:
            graph[first].add(email)
            graph[email].add(first)
    
    visited = set()
    stack = [target]
    visited.add(target)
    component = set()
    while stack:
        cur = stack.pop()
        component.add(cur)
        for nei in graph[cur]:
            if nei not in visited:
                visited.add(nei)
                stack.append(nei)
    return sorted(component)

n = int(input())
accounts = [input().split() for _ in range(n)]
target = input().strip()
res = emails_of_same_person(accounts, target)
print(" ".join(res))`,
    java: `import java.util.*;

public class Solution {
    public static List<String> emailsOfSamePerson(List<List<String>> accounts, String target) {
        Map<String, Set<String>> graph = new HashMap<>();
        Map<String, String> emailToName = new HashMap<>();
        for (List<String> account : accounts) {
            String name = account.get(0);
            for (int i = 1; i < account.size(); i++) {
                String email = account.get(i);
                emailToName.put(email, name);
                graph.putIfAbsent(email, new HashSet<>());
                if (i > 1) {
                    graph.get(account.get(1)).add(email);
                    graph.get(email).add(account.get(1));
                }
            }
        }
        Set<String> visited = new HashSet<>();
        Stack<String> stack = new Stack<>();
        stack.push(target);
        visited.add(target);
        Set<String> component = new TreeSet<>();
        while (!stack.isEmpty()) {
            String cur = stack.pop();
            component.add(cur);
            for (String nei : graph.getOrDefault(cur, new HashSet<>())) {
                if (!visited.contains(nei)) {
                    visited.add(nei);
                    stack.push(nei);
                }
            }
        }
        return new ArrayList<>(component);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            sc.nextLine();
            List<List<String>> accounts = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                String[] parts = sc.nextLine().split(" ");
                accounts.add(Arrays.asList(parts));
            }
            String target = sc.nextLine();
            List<String> res = emailsOfSamePerson(accounts, target);
            StringBuilder sb = new StringBuilder();
            for (int j = 0; j < res.size(); j++) {
                if (j > 0) sb.append(" ");
                sb.append(res.get(j));
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXN 1005
#define MAXLEN 55

int parent[MAXN], rnk[MAXN];
char emails[MAXN][MAXLEN];
int emailCount = 0;

int find(int x) {
    if (parent[x] != x) parent[x] = find(parent[x]);
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
    int n;
    if (scanf("%d", &n) != 1) return 0;
    for (int i = 0; i < n; i++) {
        char name[100];
        scanf("%s", name);
        char e[100];
        int first = -1;
        while (scanf("%s", e) == 1) {
            if (strchr(e, '@') == NULL) { strcpy(name, e); continue; }
            int idx = getIndex(e);
            if (first == -1) first = idx;
            else unite(first, idx);
            if (getchar() == '\\n') break;
        }
    }
    char target[100];
    scanf("%s", target);
    int targetIdx = -1;
    for (int i = 0; i < emailCount; i++)
        if (strcmp(emails[i], target) == 0) { targetIdx = i; break; }
    if (targetIdx == -1) { printf("\\n"); return 0; }
    int root = find(targetIdx);
    char** group = (char**)malloc(emailCount * sizeof(char*));
    int cnt = 0;
    for (int i = 0; i < emailCount; i++)
        if (find(i) == root)
            group[cnt++] = emails[i];
    qsort(group, cnt, sizeof(char*), cmpStr);
    for (int i = 0; i < cnt; i++) {
        if (i > 0) printf(" ");
        printf("%s", group[i]);
    }
    printf("\\n");
    free(group);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <set>
#include <unordered_map>
#include <sstream>

using namespace std;

unordered_map<string, string> parent;
unordered_map<string, int> rank_;

string find(const string& x) {
    if (parent[x] != x) parent[x] = find(parent[x]);
    return parent[x];
}

void unite(const string& x, const string& y) {
    string rx = find(x), ry = find(y);
    if (rx == ry) return;
    if (rank_[rx] < rank_[ry]) swap(rx, ry);
    parent[ry] = rx;
    if (rank_[rx] == rank_[ry]) rank_[rx]++;
}

vector<string> emailsOfSamePerson(vector<vector<string>>& accounts, string target) {
    for (auto& acc : accounts) {
        string name = acc[0];
        for (int i = 1; i < (int)acc.size(); i++) {
            if (parent.find(acc[i]) == parent.end()) {
                parent[acc[i]] = acc[i];
                rank_[acc[i]] = 0;
            }
            if (i > 1) unite(acc[1], acc[i]);
        }
    }
    string root = find(target);
    set<string> component;
    for (auto& [email, _] : parent)
        if (find(email) == root)
            component.insert(email);
    return vector<string>(component.begin(), component.end());
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        cin.ignore();
        vector<vector<string>> accounts(n);
        for (int i = 0; i < n; i++) {
            string line;
            getline(cin, line);
            stringstream ss(line);
            string token;
            while (ss >> token) {
                accounts[i].push_back(token);
            }
        }
        string target;
        cin >> target;
        vector<string> res = emailsOfSamePerson(accounts, target);
        for (int j = 0; j < (int)res.size(); j++) {
            if (j > 0) cout << " ";
            cout << res[j];
        }
        cout << "\\n";
    }
    return 0;
}`
  },

  // --- HARD ---
  'am-h1': {
    python: `def accounts_merge(accounts):
    parent = {}
    rank = {}
    
    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]
    
    def union(x, y):
        rx, ry = find(x), find(y)
        if rx == ry: return
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

n = int(input())
accounts = [input().split() for _ in range(n)]
res = accounts_merge(accounts)
for acc in res:
    print(" ".join(acc))`,
    java: `import java.util.*;

public class Solution {
    static int[] parent, rank;

    static int find(int x) {
        if (parent[x] != x) parent[x] = find(parent[x]);
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
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            sc.nextLine();
            List<List<String>> accounts = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                String[] parts = sc.nextLine().split(" ");
                accounts.add(Arrays.asList(parts));
            }
            List<List<String>> res = accountsMerge(accounts);
            for (List<String> acc : res) {
                StringBuilder sb = new StringBuilder();
                for (int j = 0; j < acc.size(); j++) {
                    if (j > 0) sb.append(" ");
                    sb.append(acc.get(j));
                }
                System.out.println(sb.toString());
            }
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXN 1005
#define MAXLEN 55

int parent[MAXN], rnk[MAXN];
char emails[MAXN][MAXLEN];
char names[MAXN][MAXLEN];
int emailCount = 0;

int find(int x) {
    if (parent[x] != x) parent[x] = find(parent[x]);
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
    int n;
    if (scanf("%d", &n) != 1) return 0;
    for (int i = 0; i < n; i++) {
        char name[100];
        scanf("%s", name);
        char e[100];
        int first = -1;
        while (scanf("%s", e) == 1) {
            if (strchr(e, '@') == NULL) { strcpy(name, e); continue; }
            int idx = getIndex(e);
            strcpy(names[idx], name);
            if (first == -1) first = idx;
            else unite(first, idx);
            if (getchar() == '\\n') break;
        }
    }
    int* processed = (int*)calloc(emailCount, sizeof(int));
    for (int i = 0; i < emailCount; i++) {
        int root = find(i);
        if (processed[root]) continue;
        processed[root] = 1;
        char** group = (char**)malloc(emailCount * sizeof(char*));
        int cnt = 0;
        for (int j = 0; j < emailCount; j++)
            if (find(j) == root)
                group[cnt++] = emails[j];
        qsort(group, cnt, sizeof(char*), cmpStr);
        printf("%s", names[root]);
        for (int j = 0; j < cnt; j++)
            printf(" %s", group[j]);
        printf("\\n");
        free(group);
    }
    free(processed);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <set>
#include <unordered_map>
#include <sstream>

using namespace std;

struct DSU {
    unordered_map<string, string> parent;
    unordered_map<string, int> rank_;
    string find(const string& x) {
        if (parent[x] != x) parent[x] = find(parent[x]);
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
        if (!parent.count(x)) { parent[x] = x; rank_[x] = 0; }
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
    unordered_map<string, set<string>> groups;
    for (auto& [email, _] : dsu.parent)
        groups[dsu.find(email)].insert(email);
    vector<vector<string>> result;
    for (auto& [root, emails] : groups) {
        vector<string> merged = {emailName[root]};
        merged.insert(merged.end(), emails.begin(), emails.end());
        result.push_back(merged);
    }
    return result;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        cin.ignore();
        vector<vector<string>> accounts(n);
        for (int i = 0; i < n; i++) {
            string line;
            getline(cin, line);
            stringstream ss(line);
            string token;
            while (ss >> token) {
                accounts[i].push_back(token);
            }
        }
        vector<vector<string>> res = accountsMerge(accounts);
        for (auto& acc : res) {
            for (int j = 0; j < (int)acc.size(); j++) {
                if (j > 0) cout << " ";
                cout << acc[j];
            }
            cout << "\\n";
        }
    }
    return 0;
}`
  },
  'am-h2': {
    python: `def accounts_merge(accounts):
    email_to_name = {}
    for acc in accounts:
        name = acc[0]
        for email in acc[1:]:
            email_to_name[email] = name
    
    graph = {}
    for acc in accounts:
        first = acc[1]
        for email in acc[2:]:
            if first not in graph: graph[first] = set()
            if email not in graph: graph[email] = set()
            graph[first].add(email)
            graph[email].add(first)
    
    visited = set()
    result = []
    for email in email_to_name:
        if email not in visited:
            stack = [email]
            component = set()
            while stack:
                cur = stack.pop()
                if cur not in visited:
                    visited.add(cur)
                    component.add(cur)
                    if cur in graph:
                        for nei in graph[cur]:
                            if nei not in visited:
                                stack.append(nei)
            sorted_emails = sorted(component)
            name = email_to_name[sorted_emails[0]]
            result.append([name] + sorted_emails)
    return result

n = int(input())
accounts = [input().split() for _ in range(n)]
res = accounts_merge(accounts)
for acc in res:
    print(" ".join(acc))`,
    java: `import java.util.*;

public class Solution {
    public static List<List<String>> accountsMerge(List<List<String>> accounts) {
        Map<String, String> emailToName = new HashMap<>();
        Map<String, Set<String>> graph = new HashMap<>();
        for (List<String> account : accounts) {
            String name = account.get(0);
            for (int i = 1; i < account.size(); i++) {
                String email = account.get(i);
                emailToName.put(email, name);
                graph.putIfAbsent(email, new HashSet<>());
                if (i > 1) {
                    graph.get(account.get(1)).add(email);
                    graph.get(email).add(account.get(1));
                }
            }
        }
        Set<String> visited = new HashSet<>();
        List<List<String>> result = new ArrayList<>();
        for (String email : emailToName.keySet()) {
            if (!visited.contains(email)) {
                Set<String> component = new HashSet<>();
                Stack<String> stack = new Stack<>();
                stack.push(email);
                while (!stack.isEmpty()) {
                    String cur = stack.pop();
                    if (!visited.contains(cur)) {
                        visited.add(cur);
                        component.add(cur);
                        for (String nei : graph.get(cur)) {
                            if (!visited.contains(nei)) stack.push(nei);
                        }
                    }
                }
                List<String> sorted = new ArrayList<>(component);
                Collections.sort(sorted);
                List<String> merged = new ArrayList<>();
                merged.add(emailToName.get(sorted.get(0)));
                merged.addAll(sorted);
                result.add(merged);
            }
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            sc.nextLine();
            List<List<String>> accounts = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                String[] parts = sc.nextLine().split(" ");
                accounts.add(Arrays.asList(parts));
            }
            List<List<String>> res = accountsMerge(accounts);
            for (List<String> acc : res) {
                StringBuilder sb = new StringBuilder();
                for (int j = 0; j < acc.size(); j++) {
                    if (j > 0) sb.append(" ");
                    sb.append(acc.get(j));
                }
                System.out.println(sb.toString());
            }
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXN 1005
#define MAXLEN 55

int adj[MAXN][MAXN];
int adjSize[MAXN];
char emails[MAXN][MAXLEN];
char names[MAXN][MAXLEN];
int emailCount = 0;
int visited[MAXN];

int getIndex(const char* email) {
    for (int i = 0; i < emailCount; i++)
        if (strcmp(emails[i], email) == 0) return i;
    strcpy(emails[emailCount], email);
    return emailCount++;
}

void addEdge(int u, int v) {
    adj[u][adjSize[u]++] = v;
    adj[v][adjSize[v]++] = u;
}

int cmpStr(const void* a, const void* b) {
    return strcmp(*(const char**)a, *(const char**)b);
}

void dfs(int u, int* component, int* compSize) {
    visited[u] = 1;
    component[(*compSize)++] = u;
    for (int i = 0; i < adjSize[u]; i++) {
        int v = adj[u][i];
        if (!visited[v]) dfs(v, component, compSize);
    }
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    memset(adjSize, 0, sizeof(adjSize));
    memset(visited, 0, sizeof(visited));
    for (int i = 0; i < n; i++) {
        char name[100];
        scanf("%s", name);
        char e[100];
        int first = -1;
        while (scanf("%s", e) == 1) {
            if (strchr(e, '@') == NULL) { strcpy(name, e); continue; }
            int idx = getIndex(e);
            strcpy(names[idx], name);
            if (first == -1) first = idx;
            else addEdge(first, idx);
            if (getchar() == '\\n') break;
        }
    }
    for (int i = 0; i < emailCount; i++) {
        if (!visited[i]) {
            int component[MAXN];
            int compSize = 0;
            dfs(i, component, &compSize);
            char** group = (char**)malloc(compSize * sizeof(char*));
            for (int j = 0; j < compSize; j++)
                group[j] = emails[component[j]];
            qsort(group, compSize, sizeof(char*), cmpStr);
            printf("%s", names[component[0]]);
            for (int j = 0; j < compSize; j++)
                printf(" %s", group[j]);
            printf("\\n");
            free(group);
        }
    }
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <set>
#include <unordered_map>
#include <stack>
#include <sstream>

using namespace std;

vector<vector<string>> accountsMerge(vector<vector<string>>& accounts) {
    unordered_map<string, string> emailToName;
    unordered_map<string, set<string>> graph;
    for (auto& acc : accounts) {
        string name = acc[0];
        for (int i = 1; i < (int)acc.size(); i++) {
            emailToName[acc[i]] = name;
            if (i > 1) {
                graph[acc[1]].insert(acc[i]);
                graph[acc[i]].insert(acc[1]);
            }
        }
    }
    set<string> visited;
    vector<vector<string>> result;
    for (auto& [email, _] : emailToName) {
        if (visited.find(email) == visited.end()) {
            set<string> component;
            stack<string> st;
            st.push(email);
            while (!st.empty()) {
                string cur = st.top(); st.pop();
                if (visited.find(cur) == visited.end()) {
                    visited.insert(cur);
                    component.insert(cur);
                    for (const string& nei : graph[cur])
                        if (visited.find(nei) == visited.end())
                            st.push(nei);
                }
            }
            vector<string> merged = {emailToName[*component.begin()]};
            merged.insert(merged.end(), component.begin(), component.end());
            result.push_back(merged);
        }
    }
    return result;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        cin.ignore();
        vector<vector<string>> accounts(n);
        for (int i = 0; i < n; i++) {
            string line;
            getline(cin, line);
            stringstream ss(line);
            string token;
            while (ss >> token) {
                accounts[i].push_back(token);
            }
        }
        vector<vector<string>> res = accountsMerge(accounts);
        for (auto& acc : res) {
            for (int j = 0; j < (int)acc.size(); j++) {
                if (j > 0) cout << " ";
                cout << acc[j];
            }
            cout << "\\n";
        }
    }
    return 0;
}`
  },
  'am-h3': {
    python: `def assign_group_ids(accounts):
    parent = {}
    rank = {}
    
    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]
    
    def union(x, y):
        rx, ry = find(x), find(y)
        if rx == ry: return
        if rank[rx] < rank[ry]:
            rx, ry = ry, rx
        parent[ry] = rx
        if rank[rx] == rank[ry]:
            rank[rx] += 1
    
    for acc in accounts:
        for email in acc[1:]:
            if email not in parent:
                parent[email] = email
                rank[email] = 0
            union(acc[1], email)
    
    id_map = {}
    next_id = 1
    result = {}
    for email in parent:
        root = find(email)
        if root not in id_map:
            id_map[root] = next_id
            next_id += 1
        result[email] = id_map[root]
    return result

n = int(input())
accounts = [input().split() for _ in range(n)]
res = assign_group_ids(accounts)
for email in sorted(res.keys()):
    print(f"{email}:{res[email]}")`,
    java: `import java.util.*;

public class Solution {
    static Map<String, String> parent;
    static Map<String, Integer> rank;

    static String find(String x) {
        if (!parent.get(x).equals(x))
            parent.put(x, find(parent.get(x)));
        return parent.get(x);
    }

    static void union(String x, String y) {
        String rx = find(x), ry = find(y);
        if (rx.equals(ry)) return;
        if (rank.get(rx) < rank.get(ry)) { String t = rx; rx = ry; ry = t; }
        parent.put(ry, rx);
        rank.put(rx, rank.get(rx) + (rank.get(rx).equals(rank.get(ry)) ? 1 : 0));
    }

    public static Map<String, Integer> assignGroupIds(List<List<String>> accounts) {
        parent = new HashMap<>();
        rank = new HashMap<>();
        for (List<String> acc : accounts) {
            for (int i = 1; i < acc.size(); i++) {
                String email = acc.get(i);
                if (!parent.containsKey(email)) {
                    parent.put(email, email);
                    rank.put(email, 0);
                }
                if (i > 1) union(acc.get(1), email);
            }
        }
        Map<String, Integer> result = new TreeMap<>();
        Map<String, Integer> idMap = new HashMap<>();
        int nextId = 1;
        for (String email : parent.keySet()) {
            String root = find(email);
            if (!idMap.containsKey(root)) idMap.put(root, nextId++);
            result.put(email, idMap.get(root));
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            sc.nextLine();
            List<List<String>> accounts = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                String[] parts = sc.nextLine().split(" ");
                accounts.add(Arrays.asList(parts));
            }
            Map<String, Integer> res = assignGroupIds(accounts);
            for (Map.Entry<String, Integer> e : res.entrySet())
                System.out.println(e.getKey() + ":" + e.getValue());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXN 1005
#define MAXLEN 55

int parent[MAXN], rnk[MAXN];
char emails[MAXN][MAXLEN];
int emailCount = 0;

int find(int x) {
    if (parent[x] != x) parent[x] = find(parent[x]);
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
    int n;
    if (scanf("%d", &n) != 1) return 0;
    for (int i = 0; i < n; i++) {
        char name[100];
        scanf("%s", name);
        char e[100];
        int first = -1;
        while (scanf("%s", e) == 1) {
            if (strchr(e, '@') == NULL) { strcpy(name, e); continue; }
            int idx = getIndex(e);
            if (first == -1) first = idx;
            else unite(first, idx);
            if (getchar() == '\\n') break;
        }
    }
    int* idMap = (int*)malloc(emailCount * sizeof(int));
    memset(idMap, 0, emailCount * sizeof(int));
    int nextId = 1;
    for (int i = 0; i < emailCount; i++) {
        int root = find(i);
        if (idMap[root] == 0) idMap[root] = nextId++;
    }
    char** sorted = (char**)malloc(emailCount * sizeof(char*));
    for (int i = 0; i < emailCount; i++) sorted[i] = emails[i];
    qsort(sorted, emailCount, sizeof(char*), cmpStr);
    for (int i = 0; i < emailCount; i++) {
        for (int j = 0; j < emailCount; j++)
            if (strcmp(emails[j], sorted[i]) == 0) {
                printf("%s:%d\\n", emails[j], idMap[find(j)]);
                break;
            }
    }
    free(idMap);
    free(sorted);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <map>
#include <unordered_map>
#include <sstream>

using namespace std;

unordered_map<string, string> parent;
unordered_map<string, int> rank_;

string find(const string& x) {
    if (parent[x] != x) parent[x] = find(parent[x]);
    return parent[x];
}

void unite(const string& x, const string& y) {
    string rx = find(x), ry = find(y);
    if (rx == ry) return;
    if (rank_[rx] < rank_[ry]) swap(rx, ry);
    parent[ry] = rx;
    if (rank_[rx] == rank_[ry]) rank_[rx]++;
}

map<string, int> assignGroupIds(vector<vector<string>>& accounts) {
    for (auto& acc : accounts) {
        for (int i = 1; i < (int)acc.size(); i++) {
            if (parent.find(acc[i]) == parent.end()) {
                parent[acc[i]] = acc[i];
                rank_[acc[i]] = 0;
            }
            if (i > 1) unite(acc[1], acc[i]);
        }
    }
    map<string, int> result;
    unordered_map<string, int> idMap;
    int nextId = 1;
    for (auto& [email, _] : parent) {
        string root = find(email);
        if (idMap.find(root) == idMap.end()) idMap[root] = nextId++;
        result[email] = idMap[root];
    }
    return result;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        cin.ignore();
        vector<vector<string>> accounts(n);
        for (int i = 0; i < n; i++) {
            string line;
            getline(cin, line);
            stringstream ss(line);
            string token;
            while (ss >> token) {
                accounts[i].push_back(token);
            }
        }
        map<string, int> res = assignGroupIds(accounts);
        for (auto& [email, id] : res)
            cout << email << ":" << id << "\\n";
    }
    return 0;
}`
  },
  'am-h4': {
    python: `def detect_conflicts(accounts):
    email_to_names = {}
    for acc in accounts:
        name = acc[0]
        for email in acc[1:]:
            if email not in email_to_names:
                email_to_names[email] = set()
            email_to_names[email].add(name)
    
    conflicts = set()
    for email, names in email_to_names.items():
        if len(names) > 1:
            conflicts.add(email)
    return sorted(conflicts)

n = int(input())
accounts = [input().split() for _ in range(n)]
res = detect_conflicts(accounts)
print(" ".join(res))`,
    java: `import java.util.*;

public class Solution {
    public static List<String> detectConflicts(List<List<String>> accounts) {
        Map<String, Set<String>> emailToNames = new HashMap<>();
        for (List<String> account : accounts) {
            String name = account.get(0);
            for (int i = 1; i < account.size(); i++) {
                String email = account.get(i);
                emailToNames.putIfAbsent(email, new HashSet<>());
                emailToNames.get(email).add(name);
            }
        }
        List<String> conflicts = new ArrayList<>();
        for (Map.Entry<String, Set<String>> e : emailToNames.entrySet()) {
            if (e.getValue().size() > 1) {
                conflicts.add(e.getKey());
            }
        }
        Collections.sort(conflicts);
        return conflicts;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            sc.nextLine();
            List<List<String>> accounts = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                String[] parts = sc.nextLine().split(" ");
                accounts.add(Arrays.asList(parts));
            }
            List<String> res = detectConflicts(accounts);
            StringBuilder sb = new StringBuilder();
            for (int j = 0; j < res.size(); j++) {
                if (j > 0) sb.append(" ");
                sb.append(res.get(j));
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXN 1005
#define MAXLEN 55

char emails[MAXN][MAXLEN];
char names[MAXN][MAXLEN][10];
int nameCount[MAXN];
int emailCount = 0;

int getIndex(const char* email) {
    for (int i = 0; i < emailCount; i++)
        if (strcmp(emails[i], email) == 0) return i;
    strcpy(emails[emailCount], email);
    nameCount[emailCount] = 0;
    return emailCount++;
}

int addName(int idx, const char* name) {
    for (int i = 0; i < nameCount[idx]; i++)
        if (strcmp(names[idx][i], name) == 0) return 0;
    strcpy(names[idx][nameCount[idx]++], name);
    return 1;
}

int cmpStr(const void* a, const void* b) {
    return strcmp(*(const char**)a, *(const char**)b);
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    for (int i = 0; i < n; i++) {
        char name[100];
        scanf("%s", name);
        char e[100];
        while (scanf("%s", e) == 1) {
            if (strchr(e, '@') == NULL) { strcpy(name, e); continue; }
            int idx = getIndex(e);
            addName(idx, name);
            if (getchar() == '\\n') break;
        }
    }
    char* result[MAXN];
    int resCount = 0;
    for (int i = 0; i < emailCount; i++) {
        if (nameCount[i] > 1)
            result[resCount++] = emails[i];
    }
    qsort(result, resCount, sizeof(char*), cmpStr);
    for (int i = 0; i < resCount; i++) {
        if (i > 0) printf(" ");
        printf("%s", result[i]);
    }
    printf("\\n");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <set>
#include <unordered_map>
#include <sstream>

using namespace std;

vector<string> detectConflicts(vector<vector<string>>& accounts) {
    unordered_map<string, set<string>> emailToNames;
    for (auto& acc : accounts) {
        string name = acc[0];
        for (int i = 1; i < (int)acc.size(); i++)
            emailToNames[acc[i]].insert(name);
    }
    set<string> conflicts;
    for (auto& [email, names] : emailToNames)
        if (names.size() > 1)
            conflicts.insert(email);
    return vector<string>(conflicts.begin(), conflicts.end());
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        cin.ignore();
        vector<vector<string>> accounts(n);
        for (int i = 0; i < n; i++) {
            string line;
            getline(cin, line);
            stringstream ss(line);
            string token;
            while (ss >> token) {
                accounts[i].push_back(token);
            }
        }
        vector<string> res = detectConflicts(accounts);
        for (int j = 0; j < (int)res.size(); j++) {
            if (j > 0) cout << " ";
            cout << res[j];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'am-h5': {
    python: `def min_accounts_after_merge(accounts, k):
    parent = {}
    rank = {}
    
    def find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])
        return parent[x]
    
    def union(x, y):
        rx, ry = find(x), find(y)
        if rx == ry: return False
        if rank[rx] < rank[ry]:
            rx, ry = ry, rx
        parent[ry] = rx
        if rank[rx] == rank[ry]:
            rank[rx] += 1
        return True
    
    for acc in accounts:
        for email in acc[1:]:
            if email not in parent:
                parent[email] = email
                rank[email] = 0
            union(acc[1], email)
    
    groups = set()
    for email in parent:
        groups.add(find(email))
    initial_groups = len(groups)
    return max(1, initial_groups - k)

n = int(input())
accounts = [input().split() for _ in range(n)]
k = int(input())
print(min_accounts_after_merge(accounts, k))`,
    java: `import java.util.*;

public class Solution {
    static Map<String, String> parent;
    static Map<String, Integer> rank;

    static String find(String x) {
        if (!parent.get(x).equals(x))
            parent.put(x, find(parent.get(x)));
        return parent.get(x);
    }

    static boolean union(String x, String y) {
        String rx = find(x), ry = find(y);
        if (rx.equals(ry)) return false;
        if (rank.get(rx) < rank.get(ry)) { String t = rx; rx = ry; ry = t; }
        parent.put(ry, rx);
        rank.put(rx, rank.get(rx) + (rank.get(rx).equals(rank.get(ry)) ? 1 : 0));
        return true;
    }

    public static int minAccountsAfterMerge(List<List<String>> accounts, int k) {
        parent = new HashMap<>();
        rank = new HashMap<>();
        for (List<String> acc : accounts) {
            for (int i = 1; i < acc.size(); i++) {
                String email = acc.get(i);
                if (!parent.containsKey(email)) {
                    parent.put(email, email);
                    rank.put(email, 0);
                }
                if (i > 1) union(acc.get(1), email);
            }
        }
        Set<String> groups = new HashSet<>();
        for (String email : parent.keySet())
            groups.add(find(email));
        int initialGroups = groups.size();
        return Math.max(1, initialGroups - k);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            sc.nextLine();
            List<List<String>> accounts = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                String[] parts = sc.nextLine().split(" ");
                accounts.add(Arrays.asList(parts));
            }
            int k = sc.nextInt();
            System.out.println(minAccountsAfterMerge(accounts, k));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXN 1005
#define MAXLEN 55

int parent[MAXN], rnk[MAXN];
char emails[MAXN][MAXLEN];
int emailCount = 0;

int find(int x) {
    if (parent[x] != x) parent[x] = find(parent[x]);
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

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    for (int i = 0; i < n; i++) {
        char name[100];
        scanf("%s", name);
        char e[100];
        int first = -1;
        while (scanf("%s", e) == 1) {
            if (strchr(e, '@') == NULL) { strcpy(name, e); continue; }
            int idx = getIndex(e);
            if (first == -1) first = idx;
            else unite(first, idx);
            if (getchar() == '\\n') break;
        }
    }
    int groups = 0;
    for (int i = 0; i < emailCount; i++)
        if (find(i) == i) groups++;
    int k;
    if (scanf("%d", &k) != 1) return 0;
    int result = groups - k;
    if (result < 1) result = 1;
    printf("%d\\n", result);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <set>
#include <unordered_map>
#include <sstream>

using namespace std;

unordered_map<string, string> parent;
unordered_map<string, int> rank_;

string find(const string& x) {
    if (parent[x] != x) parent[x] = find(parent[x]);
    return parent[x];
}

void unite(const string& x, const string& y) {
    string rx = find(x), ry = find(y);
    if (rx == ry) return;
    if (rank_[rx] < rank_[ry]) swap(rx, ry);
    parent[ry] = rx;
    if (rank_[rx] == rank_[ry]) rank_[rx]++;
}

int minAccountsAfterMerge(vector<vector<string>>& accounts, int k) {
    for (auto& acc : accounts) {
        for (int i = 1; i < (int)acc.size(); i++) {
            if (parent.find(acc[i]) == parent.end()) {
                parent[acc[i]] = acc[i];
                rank_[acc[i]] = 0;
            }
            if (i > 1) unite(acc[1], acc[i]);
        }
    }
    set<string> groups;
    for (auto& [email, _] : parent)
        groups.insert(find(email));
    int initialGroups = groups.size();
    return max(1, initialGroups - k);
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        cin.ignore();
        vector<vector<string>> accounts(n);
        for (int i = 0; i < n; i++) {
            string line;
            getline(cin, line);
            stringstream ss(line);
            string token;
            while (ss >> token) {
                accounts[i].push_back(token);
            }
        }
        int k;
        cin >> k;
        cout << minAccountsAfterMerge(accounts, k) << "\\n";
    }
    return 0;
}`
  }
};