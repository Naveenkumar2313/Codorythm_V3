export const copyListWithRandomPointerSolutions = {
  'clr-e1': {
    python: `
class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random

def copy_random_list(head):
    if not head: return None
    visited = []
    visited_set = set()
    def dfs(node):
        if not node or node in visited_set: return
        visited.append(node)
        visited_set.add(node)
        dfs(node.next)
        dfs(node.random)
    dfs(head)
    cloned = {n: Node(n.val) for n in visited}
    for i in range(len(visited)):
        cloned[visited[i]].next = cloned[visited[i+1]] if i < len(visited)-1 else None
    for n in visited:
        cloned[n].random = cloned.get(n.random)
    return cloned[head]

n = int(input())
nodes = {}
data = []
for _ in range(n):
    nid, val, nxt, rnd = map(int, input().split())
    nodes[nid] = Node(val)
    data.append((nid, nxt, rnd))

head = None
if n > 0:
    head = nodes[data[0][0]]
    for nid, nxt, rnd in data:
        curr = nodes[nid]
        if nxt != -1: curr.next = nodes[nxt]
        if rnd != -1: curr.random = nodes[rnd]

res = copy_random_list(head)
out_f = []
t = res
tail = None
while t:
    out_f.append(str(t.val))
    tail = t
    t = t.next
print(" ".join(out_f))

out_b = []
t = res
prev = None
while t:
    t.prev = prev
    prev = t
    t = t.next
t = tail
while t:
    out_b.append(str(t.val))
    t = t.prev
print(" ".join(out_b))

out_r = []
t = res
while t:
    r_val = str(t.random.val) if t.random else "null"
    out_r.append(f"{t.val}->{r_val}")
    t = t.next
print(" ".join(out_r))
`,
    java: `
import java.util.*;
class Node {
    int val; Node next; Node prev; Node random;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static Node copyRandomList(Node head) {
        if (head == null) return null;
        List<Node> visited = new ArrayList<>();
        Set<Node> visitedSet = new HashSet<>();
        dfs(head, visited, visitedSet);
        Map<Node, Node> cloned = new HashMap<>();
        for (Node n : visited) cloned.put(n, new Node(n.val));
        for (int i = 0; i < visited.size(); i++) {
            cloned.get(visited.get(i)).next = (i < visited.size() - 1) ? cloned.get(visited.get(i+1)) : null;
        }
        for (Node n : visited) {
            cloned.get(n).random = cloned.get(n.random);
        }
        return cloned.get(head);
    }
    private static void dfs(Node n, List<Node> visited, Set<Node> visitedSet) {
        if (n == null || visitedSet.contains(n)) return;
        visited.add(n);
        visitedSet.add(n);
        dfs(n.next, visited, visitedSet);
        dfs(n.random, visited, visitedSet);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            Map<Integer, Node> nodes = new HashMap<>();
            List<int[]> data = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                int nid = sc.nextInt(); int val = sc.nextInt(); int nxt = sc.nextInt(); int rnd = sc.nextInt();
                nodes.put(nid, new Node(val)); data.add(new int[]{nid, nxt, rnd});
            }
            Node head = null;
            if (n > 0) {
                head = nodes.get(data.get(0)[0]);
                for (int[] d : data) {
                    Node curr = nodes.get(d[0]);
                    if (d[1] != -1) curr.next = nodes.get(d[1]);
                    if (d[2] != -1) curr.random = nodes.get(d[2]);
                }
            }
            Node res = copyRandomList(head);
            Node tail = null; Node t = res;
            while (t != null) {
                System.out.print(t.val + (t.next != null ? " " : ""));
                tail = t; t = t.next;
            }
            System.out.println();
            t = res; Node prev = null;
            while (t != null) { t.prev = prev; prev = t; t = t.next; }
            t = tail;
            while (t != null) { System.out.print(t.val + (t.prev != null ? " " : "")); t = t.prev; }
            System.out.println();
            t = res;
            while (t != null) {
                String rVal = (t.random != null) ? String.valueOf(t.random.val) : "null";
                System.out.print(t.val + "->" + rVal + (t.next != null ? " " : ""));
                t = t.next;
            }
            System.out.println();
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
struct Node { int val; struct Node* prev; struct Node* next; struct Node* random; };
struct Node* visited[1005];
int visitedCount = 0;
bool isVisited(struct Node* n) {
    for (int i = 0; i < visitedCount; i++) {
        if (visited[i] == n) return true;
    }
    return false;
}
void dfs(struct Node* n) {
    if (n == NULL || isVisited(n)) return;
    visited[visitedCount++] = n;
    dfs(n->next);
    dfs(n->random);
}
struct MapEntry { struct Node* key; struct Node* val; } map[1005];
int mapSize = 0;
struct Node* getCloned(struct Node* key) {
    if (key == NULL) return NULL;
    for (int i = 0; i < mapSize; i++) {
        if (map[i].key == key) return map[i].val;
    }
    return NULL;
}
struct Node* copyRandomList(struct Node* head) {
    if (head == NULL) return NULL;
    visitedCount = 0;
    dfs(head);
    mapSize = 0;
    for (int i = 0; i < visitedCount; i++) {
        struct Node* copy = malloc(sizeof(struct Node));
        copy->val = visited[i]->val;
        copy->prev = copy->next = copy->random = NULL;
        map[mapSize].key = visited[i];
        map[mapSize].val = copy;
        mapSize++;
    }
    for (int i = 0; i < visitedCount; i++) {
        struct Node* copy = getCloned(visited[i]);
        copy->next = i < visitedCount - 1 ? getCloned(visited[i+1]) : NULL;
        copy->random = getCloned(visited[i]->random);
    }
    return getCloned(head);
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    struct Node** nodes = malloc((n+100)*sizeof(struct Node*));
    int* ids = malloc(n*sizeof(int)); int* nxts = malloc(n*sizeof(int)); int* rnds = malloc(n*sizeof(int)); int* idMap = calloc(10005, sizeof(int));
    for (int i=0; i<n; i++) {
        int nid, val, nxt, rnd; scanf("%d %d %d %d", &nid, &val, &nxt, &rnd);
        struct Node* node = malloc(sizeof(struct Node)); node->val = val; node->prev = node->next = node->random = NULL;
        nodes[i] = node; idMap[nid] = i; ids[i] = nid; nxts[i] = nxt; rnds[i] = rnd;
    }
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) curr->next = nodes[idMap[nxts[i]]];
            if (rnds[i] != -1) curr->random = nodes[idMap[rnds[i]]];
        }
    }
    struct Node* res = copyRandomList(head);
    struct Node* t = res; struct Node* tail = NULL;
    while (t != NULL) { printf("%d%s", t->val, t->next != NULL ? " " : ""); tail = t; t = t->next; }
    printf("\\n");
    t = res; struct Node* prev = NULL;
    while (t != NULL) { t->prev = prev; prev = t; t = t->next; }
    t = tail;
    while (t != NULL) { printf("%d%s", t->val, t->prev != NULL ? " " : ""); t = t->prev; }
    printf("\\n");
    t = res;
    while (t != NULL) {
        printf("%d->%s%s", t->val, t->random ? "" : "null", t->random ? "" : (t->next != NULL ? " " : ""));
        if (t->random) printf("%d%s", t->random->val, t->next != NULL ? " " : "");
        t = t->next;
    }
    printf("\\n");
    free(nodes); free(ids); free(nxts); free(rnds); free(idMap);
    return 0;
}
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>
using namespace std;
struct Node { int val; Node* prev; Node* next; Node* random; Node(int x) : val(x), prev(nullptr), next(nullptr), random(nullptr) {} };
void dfs(Node* n, vector<Node*>& visited, unordered_set<Node*>& visitedSet) {
    if (!n || visitedSet.count(n)) return;
    visited.push_back(n);
    visitedSet.insert(n);
    dfs(n->next, visited, visitedSet);
    dfs(n->random, visited, visitedSet);
}
Node* copyRandomList(Node* head) {
    if (!head) return nullptr;
    vector<Node*> visited;
    unordered_set<Node*> visitedSet;
    dfs(head, visited, visitedSet);
    unordered_map<Node*, Node*> cloned;
    for (Node* n : visited) cloned[n] = new Node(n->val);
    for (int i = 0; i < (int)visited.size(); i++) {
        cloned[visited[i]]->next = i < (int)visited.size() - 1 ? cloned[visited[i+1]] : nullptr;
    }
    for (Node* n : visited) {
        cloned[n]->random = cloned[n->random];
    }
    return cloned[head];
}
int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, rnd; }; vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, rnd; cin >> nid >> val >> nxt >> rnd;
            nodes[nid] = new Node(val); data[i] = {nid, nxt, rnd};
        }
        Node* head = nullptr;
        if (n > 0) {
            head = nodes[data[0].id];
            for (auto& d : data) {
                Node* curr = nodes[d.id];
                if (d.nxt != -1) curr->next = nodes[d.nxt];
                if (d.rnd != -1) curr->random = nodes[d.rnd];
            }
        }
        Node* res = copyRandomList(head);
        Node* t = res; Node* tail = nullptr;
        while (t != nullptr) { cout << t->val << (t->next != nullptr ? " " : ""); tail = t; t = t->next; }
        cout << "\\n";
        t = res; Node* prev = nullptr;
        while (t != nullptr) { t->prev = prev; prev = t; t = t->next; }
        t = tail;
        while (t != nullptr) { cout << t->val << (t->prev != nullptr ? " " : ""); t = t->prev; }
        cout << "\\n";
        t = res;
        while (t != nullptr) {
            string rVal = (t->random != nullptr) ? to_string(t->random->val) : "null";
            cout << t->val << "->" << rVal << (t->next != nullptr ? " " : "");
            t = t->next;
        }
        cout << "\\n";
    }
    return 0;
}
`,
  },
  'clr-e2': {
    python: `
class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random

def clone_with_hashmap(head):
    if not head: return None
    visited = []
    visited_set = set()
    def dfs(node):
        if not node or node in visited_set: return
        visited.append(node)
        visited_set.add(node)
        dfs(node.next)
        dfs(node.random)
    dfs(head)
    cloned = {n: Node(n.val) for n in visited}
    for i in range(len(visited)):
        cloned[visited[i]].next = cloned[visited[i+1]] if i < len(visited)-1 else None
    for n in visited:
        cloned[n].random = cloned.get(n.random)
    return cloned[head]

n = int(input())
nodes = {}
data = []
for _ in range(n):
    nid, val, nxt, rnd = map(int, input().split())
    nodes[nid] = Node(val)
    data.append((nid, nxt, rnd))

head = None
if n > 0:
    head = nodes[data[0][0]]
    for nid, nxt, rnd in data:
        curr = nodes[nid]
        if nxt != -1: curr.next = nodes[nxt]
        if rnd != -1: curr.random = nodes[rnd]

res = clone_with_hashmap(head)
out_f = []
t = res
tail = None
while t:
    out_f.append(str(t.val))
    tail = t
    t = t.next
print(" ".join(out_f))

out_b = []
t = res
prev = None
while t:
    t.prev = prev
    prev = t
    t = t.next
t = tail
while t:
    out_b.append(str(t.val))
    t = t.prev
print(" ".join(out_b))

out_r = []
t = res
while t:
    r_val = str(t.random.val) if t.random else "null"
    out_r.append(f"{t.val}->{r_val}")
    t = t.next
print(" ".join(out_r))
`,
    java: `
import java.util.*;
class Node {
    int val; Node next; Node prev; Node random;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static Node cloneWithHashMap(Node head) {
        if (head == null) return null;
        List<Node> visited = new ArrayList<>();
        Set<Node> visitedSet = new HashSet<>();
        dfs(head, visited, visitedSet);
        Map<Node, Node> cloned = new HashMap<>();
        for (Node n : visited) cloned.put(n, new Node(n.val));
        for (int i = 0; i < visited.size(); i++) {
            cloned.get(visited.get(i)).next = (i < visited.size() - 1) ? cloned.get(visited.get(i+1)) : null;
        }
        for (Node n : visited) {
            cloned.get(n).random = cloned.get(n.random);
        }
        return cloned.get(head);
    }
    private static void dfs(Node n, List<Node> visited, Set<Node> visitedSet) {
        if (n == null || visitedSet.contains(n)) return;
        visited.add(n);
        visitedSet.add(n);
        dfs(n.next, visited, visitedSet);
        dfs(n.random, visited, visitedSet);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            Map<Integer, Node> nodes = new HashMap<>();
            List<int[]> data = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                int nid = sc.nextInt(); int val = sc.nextInt(); int nxt = sc.nextInt(); int rnd = sc.nextInt();
                nodes.put(nid, new Node(val)); data.add(new int[]{nid, nxt, rnd});
            }
            Node head = null;
            if (n > 0) {
                head = nodes.get(data.get(0)[0]);
                for (int[] d : data) {
                    Node curr = nodes.get(d[0]);
                    if (d[1] != -1) curr.next = nodes.get(d[1]);
                    if (d[2] != -1) curr.random = nodes.get(d[2]);
                }
            }
            Node res = cloneWithHashMap(head);
            Node tail = null; Node t = res;
            while (t != null) {
                System.out.print(t.val + (t.next != null ? " " : ""));
                tail = t; t = t.next;
            }
            System.out.println();
            t = res; Node prev = null;
            while (t != null) { t.prev = prev; prev = t; t = t.next; }
            t = tail;
            while (t != null) { System.out.print(t.val + (t.prev != null ? " " : "")); t = t.prev; }
            System.out.println();
            t = res;
            while (t != null) {
                String rVal = (t.random != null) ? String.valueOf(t.random.val) : "null";
                System.out.print(t.val + "->" + rVal + (t.next != null ? " " : ""));
                t = t.next;
            }
            System.out.println();
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
struct Node { int val; struct Node* prev; struct Node* next; struct Node* random; };
struct Node* visited[1005];
int visitedCount = 0;
bool isVisited(struct Node* n) {
    for (int i = 0; i < visitedCount; i++) {
        if (visited[i] == n) return true;
    }
    return false;
}
void dfs(struct Node* n) {
    if (n == NULL || isVisited(n)) return;
    visited[visitedCount++] = n;
    dfs(n->next);
    dfs(n->random);
}
struct MapEntry { struct Node* key; struct Node* val; } map[1005];
int mapSize = 0;
struct Node* getCloned(struct Node* key) {
    if (key == NULL) return NULL;
    for (int i = 0; i < mapSize; i++) {
        if (map[i].key == key) return map[i].val;
    }
    return NULL;
}
struct Node* cloneWithHashMap(struct Node* head) {
    if (head == NULL) return NULL;
    visitedCount = 0;
    dfs(head);
    mapSize = 0;
    for (int i = 0; i < visitedCount; i++) {
        struct Node* copy = malloc(sizeof(struct Node));
        copy->val = visited[i]->val;
        copy->prev = copy->next = copy->random = NULL;
        map[mapSize].key = visited[i];
        map[mapSize].val = copy;
        mapSize++;
    }
    for (int i = 0; i < visitedCount; i++) {
        struct Node* copy = getCloned(visited[i]);
        copy->next = i < visitedCount - 1 ? getCloned(visited[i+1]) : NULL;
        copy->random = getCloned(visited[i]->random);
    }
    return getCloned(head);
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    struct Node** nodes = malloc((n+100)*sizeof(struct Node*));
    int* ids = malloc(n*sizeof(int)); int* nxts = malloc(n*sizeof(int)); int* rnds = malloc(n*sizeof(int)); int* idMap = calloc(10005, sizeof(int));
    for (int i=0; i<n; i++) {
        int nid, val, nxt, rnd; scanf("%d %d %d %d", &nid, &val, &nxt, &rnd);
        struct Node* node = malloc(sizeof(struct Node)); node->val = val; node->prev = node->next = node->random = NULL;
        nodes[i] = node; idMap[nid] = i; ids[i] = nid; nxts[i] = nxt; rnds[i] = rnd;
    }
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) curr->next = nodes[idMap[nxts[i]]];
            if (rnds[i] != -1) curr->random = nodes[idMap[rnds[i]]];
        }
    }
    struct Node* res = cloneWithHashMap(head);
    struct Node* t = res; struct Node* tail = NULL;
    while (t != NULL) { printf("%d%s", t->val, t->next != NULL ? " " : ""); tail = t; t = t->next; }
    printf("\\n");
    t = res; struct Node* prev = NULL;
    while (t != NULL) { t->prev = prev; prev = t; t = t->next; }
    t = tail;
    while (t != NULL) { printf("%d%s", t->val, t->prev != NULL ? " " : ""); t = t->prev; }
    printf("\\n");
    t = res;
    while (t != NULL) {
        printf("%d->%s%s", t->val, t->random ? "" : "null", t->random ? "" : (t->next != NULL ? " " : ""));
        if (t->random) printf("%d%s", t->random->val, t->next != NULL ? " " : "");
        t = t->next;
    }
    printf("\\n");
    free(nodes); free(ids); free(nxts); free(rnds); free(idMap);
    return 0;
}
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>
using namespace std;
struct Node { int val; Node* prev; Node* next; Node* random; Node(int x) : val(x), prev(nullptr), next(nullptr), random(nullptr) {} };
void dfs(Node* n, vector<Node*>& visited, unordered_set<Node*>& visitedSet) {
    if (!n || visitedSet.count(n)) return;
    visited.push_back(n);
    visitedSet.insert(n);
    dfs(n->next, visited, visitedSet);
    dfs(n->random, visited, visitedSet);
}
Node* cloneWithHashMap(Node* head) {
    if (!head) return nullptr;
    vector<Node*> visited;
    unordered_set<Node*> visitedSet;
    dfs(head, visited, visitedSet);
    unordered_map<Node*, Node*> cloned;
    for (Node* n : visited) cloned[n] = new Node(n->val);
    for (int i = 0; i < (int)visited.size(); i++) {
        cloned[visited[i]]->next = i < (int)visited.size() - 1 ? cloned[visited[i+1]] : nullptr;
    }
    for (Node* n : visited) {
        cloned[n]->random = cloned[n->random];
    }
    return cloned[head];
}
int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, rnd; }; vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, rnd; cin >> nid >> val >> nxt >> rnd;
            nodes[nid] = new Node(val); data[i] = {nid, nxt, rnd};
        }
        Node* head = nullptr;
        if (n > 0) {
            head = nodes[data[0].id];
            for (auto& d : data) {
                Node* curr = nodes[d.id];
                if (d.nxt != -1) curr->next = nodes[d.nxt];
                if (d.rnd != -1) curr->random = nodes[d.rnd];
            }
        }
        Node* res = cloneWithHashMap(head);
        Node* t = res; Node* tail = nullptr;
        while (t != nullptr) { cout << t->val << (t->next != nullptr ? " " : ""); tail = t; t = t->next; }
        cout << "\\n";
        t = res; Node* prev = nullptr;
        while (t != nullptr) { t->prev = prev; prev = t; t = t->next; }
        t = tail;
        while (t != nullptr) { cout << t->val << (t->prev != nullptr ? " " : ""); t = t->prev; }
        cout << "\\n";
        t = res;
        while (t != nullptr) {
            string rVal = (t->random != nullptr) ? to_string(t->random->val) : "null";
            cout << t->val << "->" << rVal << (t->next != nullptr ? " " : "");
            t = t->next;
        }
        cout << "\\n";
    }
    return 0;
}
`,
  },
  'clr-e3': {
    python: `
class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random

def verify_clone(orig, clone):
    if not orig and not clone: return True
    if not orig or not clone: return False
    
    orig_visited = []
    orig_set = set()
    def dfs_orig(node):
        if not node or node in orig_set: return
        orig_visited.append(node)
        orig_set.add(node)
        dfs_orig(node.next)
        dfs_orig(node.random)
    dfs_orig(orig)
    
    clone_visited = []
    clone_set = set()
    def dfs_clone(node):
        if not node or node in clone_set: return
        clone_visited.append(node)
        clone_set.add(node)
        dfs_clone(node.next)
        dfs_clone(node.random)
    dfs_clone(clone)
    
    if len(orig_visited) != len(clone_visited): return False
    
    clone_map = {}
    for o, c in zip(orig_visited, clone_visited):
        clone_map[o] = c
        
    for o, c in zip(orig_visited, clone_visited):
        if o is c: return False
        if o.val != c.val: return False
        if clone_map.get(o.next) is not c.next: return False
        if clone_map.get(o.random) is not c.random: return False
        
    return True

n = int(input())
nodes_orig = {}
nodes_clone = {}
data = []
for _ in range(n):
    nid, val, nxt, rnd = map(int, input().split())
    nodes_orig[nid] = Node(val)
    nodes_clone[nid] = Node(val)
    data.append((nid, nxt, rnd))

head_orig = None
head_clone = None
if n > 0:
    head_orig = nodes_orig[data[0][0]]
    head_clone = nodes_clone[data[0][0]]
    for nid, nxt, rnd in data:
        if nxt != -1:
            nodes_orig[nid].next = nodes_orig[nxt]
            nodes_clone[nid].next = nodes_clone[nxt]
        if rnd != -1:
            nodes_orig[nid].random = nodes_orig[rnd]
            nodes_clone[nid].random = nodes_clone[rnd]

print("Pass" if verify_clone(head_orig, head_clone) else "Fail")
`,
    java: `
import java.util.*;
class Node {
    int val; Node next; Node random;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static boolean verifyClone(Node orig, Node clone) {
        if (orig == null && clone == null) return true;
        if (orig == null || clone == null) return false;
        
        List<Node> origVisited = new ArrayList<>();
        Set<Node> origSet = new HashSet<>();
        dfs(orig, origVisited, origSet);
        
        List<Node> cloneVisited = new ArrayList<>();
        Set<Node> cloneSet = new HashSet<>();
        dfs(clone, cloneVisited, cloneSet);
        
        if (origVisited.size() != cloneVisited.size()) return false;
        
        Map<Node, Node> cloneMap = new HashMap<>();
        for (int i = 0; i < origVisited.size(); i++) {
            cloneMap.put(origVisited.get(i), cloneVisited.get(i));
        }
        
        for (int i = 0; i < origVisited.size(); i++) {
            Node o = origVisited.get(i);
            Node c = cloneVisited.get(i);
            if (o == c) return false;
            if (o.val != c.val) return false;
            if (cloneMap.get(o.next) != c.next) return false;
            if (cloneMap.get(o.random) != c.random) return false;
        }
        return true;
    }
    private static void dfs(Node n, List<Node> visited, Set<Node> visitedSet) {
        if (n == null || visitedSet.contains(n)) return;
        visited.add(n);
        visitedSet.add(n);
        dfs(n.next, visited, visitedSet);
        dfs(n.random, visited, visitedSet);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            Map<Integer, Node> origNodes = new HashMap<>();
            Map<Integer, Node> cloneNodes = new HashMap<>();
            List<int[]> data = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                int nid = sc.nextInt(); int val = sc.nextInt(); int nxt = sc.nextInt(); int rnd = sc.nextInt();
                origNodes.put(nid, new Node(val));
                cloneNodes.put(nid, new Node(val));
                data.add(new int[]{nid, nxt, rnd});
            }
            Node headOrig = null, headClone = null;
            if (n > 0) {
                headOrig = origNodes.get(data.get(0)[0]);
                headClone = cloneNodes.get(data.get(0)[0]);
                for (int[] d : data) {
                    Node o = origNodes.get(d[0]);
                    Node c = cloneNodes.get(d[0]);
                    if (d[1] != -1) { o.next = origNodes.get(d[1]); c.next = cloneNodes.get(d[1]); }
                    if (d[2] != -1) { o.random = origNodes.get(d[2]); c.random = cloneNodes.get(d[2]); }
                }
            }
            System.out.println(verifyClone(headOrig, headClone) ? "Pass" : "Fail");
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
struct Node { int val; struct Node* next; struct Node* random; };
struct Node* origVisited[1005];
int origCount = 0;
bool isOrigVisited(struct Node* n) {
    for (int i = 0; i < origCount; i++) {
        if (origVisited[i] == n) return true;
    }
    return false;
}
void dfsOrig(struct Node* n) {
    if (n == NULL || isOrigVisited(n)) return;
    origVisited[origCount++] = n;
    dfsOrig(n->next);
    dfsOrig(n->random);
}
struct Node* cloneVisited[1005];
int cloneCount = 0;
bool isCloneVisited(struct Node* n) {
    for (int i = 0; i < cloneCount; i++) {
        if (cloneVisited[i] == n) return true;
    }
    return false;
}
void dfsClone(struct Node* n) {
    if (n == NULL || isCloneVisited(n)) return;
    cloneVisited[cloneCount++] = n;
    dfsClone(n->next);
    dfsClone(n->random);
}
struct MapEntry { struct Node* key; struct Node* val; } vMap[1005];
int vMapSize = 0;
struct Node* lookup(struct Node* key) {
    if (key == NULL) return NULL;
    for (int i = 0; i < vMapSize; i++) {
        if (vMap[i].key == key) return vMap[i].val;
    }
    return NULL;
}
bool verifyClone(struct Node* orig, struct Node* clone) {
    if (orig == NULL && clone == NULL) return true;
    if (orig == NULL || clone == NULL) return false;
    
    origCount = 0; dfsOrig(orig);
    cloneCount = 0; dfsClone(clone);
    
    if (origCount != cloneCount) return false;
    vMapSize = 0;
    for (int i = 0; i < origCount; i++) {
        vMap[vMapSize].key = origVisited[i];
        vMap[vMapSize].val = cloneVisited[i];
        vMapSize++;
    }
    
    for (int i = 0; i < origCount; i++) {
        struct Node* o = origVisited[i];
        struct Node* c = cloneVisited[i];
        if (o == c) return false;
        if (o->val != c->val) return false;
        if (lookup(o->next) != c->next) return false;
        if (lookup(o->random) != c->random) return false;
    }
    return true;
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    struct Node** origNodes = malloc((n+100)*sizeof(struct Node*));
    struct Node** cloneNodes = malloc((n+100)*sizeof(struct Node*));
    int* ids = malloc(n*sizeof(int)); int* nxts = malloc(n*sizeof(int)); int* rnds = malloc(n*sizeof(int)); int* idMap = calloc(10005, sizeof(int));
    for (int i = 0; i < n; i++) {
        int nid, val, nxt, rnd; scanf("%d %d %d %d", &nid, &val, &nxt, &rnd);
        origNodes[i] = malloc(sizeof(struct Node)); origNodes[i]->val = val; origNodes[i]->next = origNodes[i]->random = NULL;
        cloneNodes[i] = malloc(sizeof(struct Node)); cloneNodes[i]->val = val; cloneNodes[i]->next = cloneNodes[i]->random = NULL;
        idMap[nid] = i; ids[i] = nid; nxts[i] = nxt; rnds[i] = rnd;
    }
    struct Node* headOrig = NULL; struct Node* headClone = NULL;
    if (n > 0) {
        headOrig = origNodes[0]; headClone = cloneNodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* o = origNodes[i]; struct Node* c = cloneNodes[i];
            if (nxts[i] != -1) { o->next = origNodes[idMap[nxts[i]]]; c->next = cloneNodes[idMap[nxts[i]]]; }
            if (rnds[i] != -1) { o->random = origNodes[idMap[rnds[i]]]; c->random = cloneNodes[idMap[rnds[i]]]; }
        }
    }
    printf("%s\\n", verifyClone(headOrig, headClone) ? "Pass" : "Fail");
    free(origNodes); free(cloneNodes); free(ids); free(nxts); free(rnds); free(idMap);
    return 0;
}
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>
using namespace std;
struct Node { int val; Node* next; Node* random; Node(int x) : val(x), next(nullptr), random(nullptr) {} };
void dfs(Node* n, vector<Node*>& visited, unordered_set<Node*>& visitedSet) {
    if (!n || visitedSet.count(n)) return;
    visited.push_back(n);
    visitedSet.insert(n);
    dfs(n->next, visited, visitedSet);
    dfs(n->random, visited, visitedSet);
}
bool verifyClone(Node* orig, Node* clone) {
    if (!orig && !clone) return true;
    if (!orig || !clone) return false;
    
    vector<Node*> origList, cloneList;
    unordered_set<Node*> origSet, cloneSet;
    dfs(orig, origList, origSet);
    dfs(clone, cloneList, cloneSet);
    
    if (origList.size() != cloneList.size()) return false;
    
    unordered_map<Node*, Node*> cloneMap;
    for (size_t i = 0; i < origList.size(); i++) {
        cloneMap[origList[i]] = cloneList[i];
    }
    
    for (size_t i = 0; i < origList.size(); i++) {
        Node* o = origList[i];
        Node* c = cloneList[i];
        if (o == c) return false;
        if (o->val != c->val) return false;
        if (cloneMap[o->next] != c->next) return false;
        if (cloneMap[o->random] != c->random) return false;
    }
    return true;
}
int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> origNodes;
        unordered_map<int, Node*> cloneNodes;
        struct Edge { int id, nxt, rnd; }; vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, rnd; cin >> nid >> val >> nxt >> rnd;
            origNodes[nid] = new Node(val); cloneNodes[nid] = new Node(val);
            data[i] = {nid, nxt, rnd};
        }
        Node* headOrig = nullptr; Node* headClone = nullptr;
        if (n > 0) {
            headOrig = origNodes[data[0].id]; headClone = cloneNodes[data[0].id];
            for (auto& d : data) {
                Node* o = origNodes[d.id]; Node* c = cloneNodes[d.id];
                if (d.nxt != -1) { o->next = origNodes[d.nxt]; c->next = cloneNodes[d.nxt]; }
                if (d.rnd != -1) { o->random = origNodes[d.rnd]; c->random = cloneNodes[d.rnd]; }
            }
        }
        cout << (verifyClone(headOrig, headClone) ? "Pass" : "Fail") << "\\n";
    }
    return 0;
}
`,
  },
  'clr-e4': {
    python: `
class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random

def count_nodes(head):
    cnt = 0
    curr = head
    while curr:
        cnt += 1
        curr = curr.next
    return cnt

n = int(input())
nodes = {}
data = []
for _ in range(n):
    nid, val, nxt, rnd = map(int, input().split())
    nodes[nid] = Node(val)
    data.append((nid, nxt, rnd))

head = None
if n > 0:
    head = nodes[data[0][0]]
    for nid, nxt, rnd in data:
        curr = nodes[nid]
        if nxt != -1: curr.next = nodes[nxt]
        if rnd != -1: curr.random = nodes[rnd]

print(count_nodes(head))
`,
    java: `
import java.util.*;
class Node {
    int val; Node next; Node random;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static int countNodes(Node head) {
        int cnt = 0;
        Node curr = head;
        while (curr != null) {
            cnt++;
            curr = curr.next;
        }
        return cnt;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            Map<Integer, Node> nodes = new HashMap<>();
            List<int[]> data = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                int nid = sc.nextInt(); int val = sc.nextInt(); int nxt = sc.nextInt(); int rnd = sc.nextInt();
                nodes.put(nid, new Node(val)); data.add(new int[]{nid, nxt, rnd});
            }
            Node head = null;
            if (n > 0) {
                head = nodes.get(data.get(0)[0]);
                for (int[] d : data) {
                    Node curr = nodes.get(d[0]);
                    if (d[1] != -1) curr.next = nodes.get(d[1]);
                    if (d[2] != -1) curr.random = nodes.get(d[2]);
                }
            }
            System.out.println(countNodes(head));
        } else {
            System.out.println(0);
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
struct Node { int val; struct Node* next; struct Node* random; };
int countNodes(struct Node* head) {
    int cnt = 0;
    struct Node* curr = head;
    while (curr != NULL) {
        cnt++;
        curr = curr->next;
    }
    return cnt;
}
int main() {
    int n; if (scanf("%d", &n) != 1) { printf("0\\n"); return 0; }
    struct Node** nodes = malloc((n+100)*sizeof(struct Node*));
    int* ids = malloc(n*sizeof(int)); int* nxts = malloc(n*sizeof(int)); int* rnds = malloc(n*sizeof(int)); int* idMap = calloc(10005, sizeof(int));
    for (int i=0; i<n; i++) {
        int nid, val, nxt, rnd; scanf("%d %d %d %d", &nid, &val, &nxt, &rnd);
        struct Node* node = malloc(sizeof(struct Node)); node->val = val; node->next = node->random = NULL;
        nodes[i] = node; idMap[nid] = i; ids[i] = nid; nxts[i] = nxt; rnds[i] = rnd;
    }
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) curr->next = nodes[idMap[nxts[i]]];
            if (rnds[i] != -1) curr->random = nodes[idMap[rnds[i]]];
        }
    }
    printf("%d\\n", countNodes(head));
    free(nodes); free(ids); free(nxts); free(rnds); free(idMap);
    return 0;
}
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
struct Node { int val; Node* next; Node* random; Node(int x) : val(x), next(nullptr), random(nullptr) {} };
int countNodes(Node* head) {
    int cnt = 0;
    Node* curr = head;
    while (curr) {
        cnt++;
        curr = curr->next;
    }
    return cnt;
}
int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, rnd; }; vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, rnd; cin >> nid >> val >> nxt >> rnd;
            nodes[nid] = new Node(val); data[i] = {nid, nxt, rnd};
        }
        Node* head = nullptr;
        if (n > 0) {
            head = nodes[data[0].id];
            for (auto& d : data) {
                Node* curr = nodes[d.id];
                if (d.nxt != -1) curr->next = nodes[d.nxt];
                if (d.rnd != -1) curr->random = nodes[d.rnd];
            }
        }
        cout << countNodes(head) << "\\n";
    } else {
        cout << 0 << "\\n";
    }
    return 0;
}
`,
  },
  'clr-e5': {
    python: `
class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random

def sum_nodes(head):
    s = 0
    curr = head
    while curr:
        s += curr.val
        curr = curr.next
    return s

n = int(input())
nodes = {}
data = []
for _ in range(n):
    nid, val, nxt, rnd = map(int, input().split())
    nodes[nid] = Node(val)
    data.append((nid, nxt, rnd))

head = None
if n > 0:
    head = nodes[data[0][0]]
    for nid, nxt, rnd in data:
        curr = nodes[nid]
        if nxt != -1: curr.next = nodes[nxt]
        if rnd != -1: curr.random = nodes[rnd]

print(sum_nodes(head))
`,
    java: `
import java.util.*;
class Node {
    int val; Node next; Node random;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static int sumNodes(Node head) {
        int s = 0;
        Node curr = head;
        while (curr != null) {
            s += curr.val;
            curr = curr.next;
        }
        return s;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            Map<Integer, Node> nodes = new HashMap<>();
            List<int[]> data = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                int nid = sc.nextInt(); int val = sc.nextInt(); int nxt = sc.nextInt(); int rnd = sc.nextInt();
                nodes.put(nid, new Node(val)); data.add(new int[]{nid, nxt, rnd});
            }
            Node head = null;
            if (n > 0) {
                head = nodes.get(data.get(0)[0]);
                for (int[] d : data) {
                    Node curr = nodes.get(d[0]);
                    if (d[1] != -1) curr.next = nodes.get(d[1]);
                    if (d[2] != -1) curr.random = nodes.get(d[2]);
                }
            }
            System.out.println(sumNodes(head));
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
struct Node { int val; struct Node* next; struct Node* random; };
int sumNodes(struct Node* head) {
    int s = 0;
    struct Node* curr = head;
    while (curr != NULL) {
        s += curr->val;
        curr = curr->next;
    }
    return s;
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    struct Node** nodes = malloc((n+100)*sizeof(struct Node*));
    int* ids = malloc(n*sizeof(int)); int* nxts = malloc(n*sizeof(int)); int* rnds = malloc(n*sizeof(int)); int* idMap = calloc(10005, sizeof(int));
    for (int i=0; i<n; i++) {
        int nid, val, nxt, rnd; scanf("%d %d %d %d", &nid, &val, &nxt, &rnd);
        struct Node* node = malloc(sizeof(struct Node)); node->val = val; node->next = node->random = NULL;
        nodes[i] = node; idMap[nid] = i; ids[i] = nid; nxts[i] = nxt; rnds[i] = rnd;
    }
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) curr->next = nodes[idMap[nxts[i]]];
            if (rnds[i] != -1) curr->random = nodes[idMap[rnds[i]]];
        }
    }
    printf("%d\\n", sumNodes(head));
    free(nodes); free(ids); free(nxts); free(rnds); free(idMap);
    return 0;
}
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
struct Node { int val; Node* next; Node* random; Node(int x) : val(x), next(nullptr), random(nullptr) {} };
int sumNodes(Node* head) {
    int s = 0;
    Node* curr = head;
    while (curr) {
        s += curr->val;
        curr = curr->next;
    }
    return s;
}
int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, rnd; }; vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, rnd; cin >> nid >> val >> nxt >> rnd;
            nodes[nid] = new Node(val); data[i] = {nid, nxt, rnd};
        }
        Node* head = nullptr;
        if (n > 0) {
            head = nodes[data[0].id];
            for (auto& d : data) {
                Node* curr = nodes[d.id];
                if (d.nxt != -1) curr->next = nodes[d.nxt];
                if (d.rnd != -1) curr->random = nodes[d.rnd];
            }
        }
        cout << sumNodes(head) << "\\n";
    }
    return 0;
}
`,
  },
  'clr-m1': {
    python: `
class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random

def clone_value_random(head):
    if not head: return None
    visited = []
    visited_set = set()
    def dfs(node):
        if not node or node in visited_set: return
        visited.append(node)
        visited_set.add(node)
        dfs(node.next)
        dfs(node.random)
    dfs(head)
    cloned = {n: Node(n.val) for n in visited}
    for i in range(len(visited)):
        cloned[visited[i]].next = cloned[visited[i+1]] if i < len(visited)-1 else None
    for n in visited:
        cloned[n].random = cloned.get(n.random)
    return cloned[head]

n = int(input())
nodes = {}
data = []
for _ in range(n):
    nid, val, nxt, rnd_val = map(int, input().split())
    nodes[nid] = Node(val)
    data.append((nid, nxt, rnd_val))

head = None
if n > 0:
    head = nodes[data[0][0]]
    val_map = {node.val: node for node in nodes.values()}
    for nid, nxt, rnd_val in data:
        curr = nodes[nid]
        if nxt != -1: curr.next = nodes[nxt]
        if rnd_val != -1: curr.random = val_map[rnd_val]

res = clone_value_random(head)
out_f = []
t = res
tail = None
while t:
    out_f.append(str(t.val))
    tail = t
    t = t.next
print(" ".join(out_f))
out_b = []
t = res
prev = None
while t:
    t.prev = prev
    prev = t
    t = t.next
t = tail
while t:
    out_b.append(str(t.val))
    t = t.prev
print(" ".join(out_b))
out_r = []
t = res
while t:
    r_val = str(t.random.val) if t.random else "null"
    out_r.append(f"{t.val}->{r_val}")
    t = t.next
print(" ".join(out_r))
`,
    java: `
import java.util.*;
class Node {
    int val; Node next; Node prev; Node random;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static Node cloneValueRandom(Node head) {
        if (head == null) return null;
        List<Node> visited = new ArrayList<>();
        Set<Node> visitedSet = new HashSet<>();
        dfs(head, visited, visitedSet);
        Map<Node, Node> cloned = new HashMap<>();
        for (Node n : visited) cloned.put(n, new Node(n.val));
        for (int i = 0; i < visited.size(); i++) {
            cloned.get(visited.get(i)).next = (i < visited.size() - 1) ? cloned.get(visited.get(i+1)) : null;
        }
        for (Node n : visited) {
            cloned.get(n).random = cloned.get(n.random);
        }
        return cloned.get(head);
    }
    private static void dfs(Node n, List<Node> visited, Set<Node> visitedSet) {
        if (n == null || visitedSet.contains(n)) return;
        visited.add(n);
        visitedSet.add(n);
        dfs(n.next, visited, visitedSet);
        dfs(n.random, visited, visitedSet);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            Map<Integer, Node> nodes = new HashMap<>();
            Map<Integer, Node> valMap = new HashMap<>();
            List<int[]> data = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                int nid = sc.nextInt(); int val = sc.nextInt(); int nxt = sc.nextInt(); int rndVal = sc.nextInt();
                Node node = new Node(val);
                nodes.put(nid, node);
                valMap.put(val, node);
                data.add(new int[]{nid, nxt, rndVal});
            }
            Node head = null;
            if (n > 0) {
                head = nodes.get(data.get(0)[0]);
                for (int[] d : data) {
                    Node curr = nodes.get(d[0]);
                    if (d[1] != -1) curr.next = nodes.get(d[1]);
                    if (d[2] != -1) curr.random = valMap.get(d[2]);
                }
            }
            Node res = cloneValueRandom(head);
            Node tail = null; Node t = res;
            while (t != null) {
                System.out.print(t.val + (t.next != null ? " " : ""));
                tail = t; t = t.next;
            }
            System.out.println();
            t = res; Node prev = null;
            while (t != null) { t.prev = prev; prev = t; t = t.next; }
            t = tail;
            while (t != null) { System.out.print(t.val + (t.prev != null ? " " : "")); t = t.prev; }
            System.out.println();
            t = res;
            while (t != null) {
                String rVal = (t.random != null) ? String.valueOf(t.random.val) : "null";
                System.out.print(t.val + "->" + rVal + (t.next != null ? " " : ""));
                t = t.next;
            }
            System.out.println();
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
struct Node { int val; struct Node* prev; struct Node* next; struct Node* random; };
struct Node* visited[1005];
int visitedCount = 0;
bool isVisited(struct Node* n) {
    for (int i = 0; i < visitedCount; i++) {
        if (visited[i] == n) return true;
    }
    return false;
}
void dfs(struct Node* n) {
    if (n == NULL || isVisited(n)) return;
    visited[visitedCount++] = n;
    dfs(n->next);
    dfs(n->random);
}
struct MapEntry { struct Node* key; struct Node* val; } map[1005];
int mapSize = 0;
struct Node* getCloned(struct Node* key) {
    if (key == NULL) return NULL;
    for (int i = 0; i < mapSize; i++) {
        if (map[i].key == key) return map[i].val;
    }
    return NULL;
}
struct Node* cloneValueRandom(struct Node* head) {
    if (head == NULL) return NULL;
    visitedCount = 0;
    dfs(head);
    mapSize = 0;
    for (int i = 0; i < visitedCount; i++) {
        struct Node* copy = malloc(sizeof(struct Node));
        copy->val = visited[i]->val;
        copy->prev = copy->next = copy->random = NULL;
        map[mapSize].key = visited[i];
        map[mapSize].val = copy;
        mapSize++;
    }
    for (int i = 0; i < visitedCount; i++) {
        struct Node* copy = getCloned(visited[i]);
        copy->next = i < visitedCount - 1 ? getCloned(visited[i+1]) : NULL;
        copy->random = getCloned(visited[i]->random);
    }
    return getCloned(head);
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    struct Node** nodes = malloc((n+100)*sizeof(struct Node*));
    int* ids = malloc(n*sizeof(int)); int* nxts = malloc(n*sizeof(int)); int* rnds = malloc(n*sizeof(int)); int* idMap = calloc(10005, sizeof(int));
    for (int i=0; i<n; i++) {
        int nid, val, nxt, rndVal; scanf("%d %d %d %d", &nid, &val, &nxt, &rndVal);
        struct Node* node = malloc(sizeof(struct Node)); node->val = val; node->prev = node->next = node->random = NULL;
        nodes[i] = node; idMap[nid] = i; ids[i] = nid; nxts[i] = nxt; rnds[i] = rndVal;
    }
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) curr->next = nodes[idMap[nxts[i]]];
            if (rnds[i] != -1) {
                for (int j = 0; j < n; j++) {
                    if (nodes[j]->val == rnds[i]) {
                        curr->random = nodes[j]; break;
                    }
                }
            }
        }
    }
    struct Node* res = cloneValueRandom(head);
    struct Node* t = res; struct Node* tail = NULL;
    while (t != NULL) { printf("%d%s", t->val, t->next != NULL ? " " : ""); tail = t; t = t->next; }
    printf("\\n");
    t = res; struct Node* prev = NULL;
    while (t != NULL) { t->prev = prev; prev = t; t = t->next; }
    t = tail;
    while (t != NULL) { printf("%d%s", t->val, t->prev != NULL ? " " : ""); t = t->prev; }
    printf("\\n");
    t = res;
    while (t != NULL) {
        printf("%d->%s%s", t->val, t->random ? "" : "null", t->random ? "" : (t->next != NULL ? " " : ""));
        if (t->random) printf("%d%s", t->random->val, t->next != NULL ? " " : "");
        t = t->next;
    }
    printf("\\n");
    free(nodes); free(ids); free(nxts); free(rnds); free(idMap);
    return 0;
}
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>
using namespace std;
struct Node { int val; Node* prev; Node* next; Node* random; Node(int x) : val(x), prev(nullptr), next(nullptr), random(nullptr) {} };
void dfs(Node* n, vector<Node*>& visited, unordered_set<Node*>& visitedSet) {
    if (!n || visitedSet.count(n)) return;
    visited.push_back(n);
    visitedSet.insert(n);
    dfs(n->next, visited, visitedSet);
    dfs(n->random, visited, visitedSet);
}
Node* cloneValueRandom(Node* head) {
    if (!head) return nullptr;
    vector<Node*> visited;
    unordered_set<Node*> visitedSet;
    dfs(head, visited, visitedSet);
    unordered_map<Node*, Node*> cloned;
    for (Node* n : visited) cloned[n] = new Node(n->val);
    for (int i = 0; i < (int)visited.size(); i++) {
        cloned[visited[i]]->next = i < (int)visited.size() - 1 ? cloned[visited[i+1]] : nullptr;
    }
    for (Node* n : visited) {
        cloned[n]->random = cloned[n->random];
    }
    return cloned[head];
}
int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        unordered_map<int, Node*> valMap;
        struct Edge { int id, nxt, rndVal; }; vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, rndVal; cin >> nid >> val >> nxt >> rndVal;
            Node* node = new Node(val);
            nodes[nid] = node; valMap[val] = node;
            data[i] = {nid, nxt, rndVal};
        }
        Node* head = nullptr;
        if (n > 0) {
            head = nodes[data[0].id];
            for (auto& d : data) {
                Node* curr = nodes[d.id];
                if (d.nxt != -1) curr->next = nodes[d.nxt];
                if (d.rndVal != -1) curr->random = valMap[d.rndVal];
            }
        }
        Node* res = cloneValueRandom(head);
        Node* t = res; Node* tail = nullptr;
        while (t != nullptr) { cout << t->val << (t->next != nullptr ? " " : ""); tail = t; t = t->next; }
        cout << "\\n";
        t = res; Node* prev = nullptr;
        while (t != nullptr) { t->prev = prev; prev = t; t = t->next; }
        t = tail;
        while (t != nullptr) { cout << t->val << (t->prev != nullptr ? " " : ""); t = t->prev; }
        cout << "\\n";
        t = res;
        while (t != nullptr) {
            string rVal = (t->random != nullptr) ? to_string(t->random->val) : "null";
            cout << t->val << "->" << rVal << (t->next != nullptr ? " " : "");
            t = t->next;
        }
        cout << "\\n";
    }
    return 0;
}
`,
  },
  'clr-m2': {
    python: `
class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random

def clone_and_reverse(head):
    if not head: return None
    visited = []
    visited_set = set()
    def dfs(node):
        if not node or node in visited_set: return
        visited.append(node)
        visited_set.add(node)
        dfs(node.next)
        dfs(node.random)
    dfs(head)
    
    cloned = {n: Node(n.val) for n in visited}
    for i in range(len(visited)):
        cloned[visited[i]].next = cloned[visited[i+1]] if i < len(visited)-1 else None
    for n in visited:
        cloned[n].random = cloned.get(n.random)
        
    # Reverse cloned list next links
    prev = None
    curr = cloned[head]
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    return prev

n = int(input())
nodes = {}
data = []
for _ in range(n):
    nid, val, nxt, rnd = map(int, input().split())
    nodes[nid] = Node(val)
    data.append((nid, nxt, rnd))

head = None
if n > 0:
    head = nodes[data[0][0]]
    for nid, nxt, rnd in data:
        curr = nodes[nid]
        if nxt != -1: curr.next = nodes[nxt]
        if rnd != -1: curr.random = nodes[rnd]

res = clone_and_reverse(head)
out_f = []
t = res
tail = None
while t:
    out_f.append(str(t.val))
    tail = t
    t = t.next
print(" ".join(out_f))
out_b = []
t = res
prev = None
while t:
    t.prev = prev
    prev = t
    t = t.next
t = tail
while t:
    out_b.append(str(t.val))
    t = t.prev
print(" ".join(out_b))
out_r = []
t = res
while t:
    r_val = str(t.random.val) if t.random else "null"
    out_r.append(f"{t.val}->{r_val}")
    t = t.next
print(" ".join(out_r))
`,
    java: `
import java.util.*;
class Node {
    int val; Node next; Node prev; Node random;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static Node cloneAndReverse(Node head) {
        if (head == null) return null;
        List<Node> visited = new ArrayList<>();
        Set<Node> visitedSet = new HashSet<>();
        dfs(head, visited, visitedSet);
        Map<Node, Node> cloned = new HashMap<>();
        for (Node n : visited) cloned.put(n, new Node(n.val));
        for (int i = 0; i < visited.size(); i++) {
            cloned.get(visited.get(i)).next = (i < visited.size() - 1) ? cloned.get(visited.get(i+1)) : null;
        }
        for (Node n : visited) {
            cloned.get(n).random = cloned.get(n.random);
        }
        
        Node prev = null;
        Node curr = cloned.get(head);
        while (curr != null) {
            Node nxt = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nxt;
        }
        return prev;
    }
    private static void dfs(Node n, List<Node> visited, Set<Node> visitedSet) {
        if (n == null || visitedSet.contains(n)) return;
        visited.add(n);
        visitedSet.add(n);
        dfs(n.next, visited, visitedSet);
        dfs(n.random, visited, visitedSet);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            Map<Integer, Node> nodes = new HashMap<>();
            List<int[]> data = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                int nid = sc.nextInt(); int val = sc.nextInt(); int nxt = sc.nextInt(); int rnd = sc.nextInt();
                nodes.put(nid, new Node(val)); data.add(new int[]{nid, nxt, rnd});
            }
            Node head = null;
            if (n > 0) {
                head = nodes.get(data.get(0)[0]);
                for (int[] d : data) {
                    Node curr = nodes.get(d[0]);
                    if (d[1] != -1) curr.next = nodes.get(d[1]);
                    if (d[2] != -1) curr.random = nodes.get(d[2]);
                }
            }
            Node res = cloneAndReverse(head);
            Node tail = null; Node t = res;
            while (t != null) {
                System.out.print(t.val + (t.next != null ? " " : ""));
                tail = t; t = t.next;
            }
            System.out.println();
            t = res; Node prev = null;
            while (t != null) { t.prev = prev; prev = t; t = t.next; }
            t = tail;
            while (t != null) { System.out.print(t.val + (t.prev != null ? " " : "")); t = t.prev; }
            System.out.println();
            t = res;
            while (t != null) {
                String rVal = (t.random != null) ? String.valueOf(t.random.val) : "null";
                System.out.print(t.val + "->" + rVal + (t.next != null ? " " : ""));
                t = t.next;
            }
            System.out.println();
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
struct Node { int val; struct Node* prev; struct Node* next; struct Node* random; };
struct Node* visited[1005];
int visitedCount = 0;
bool isVisited(struct Node* n) {
    for (int i = 0; i < visitedCount; i++) {
        if (visited[i] == n) return true;
    }
    return false;
}
void dfs(struct Node* n) {
    if (n == NULL || isVisited(n)) return;
    visited[visitedCount++] = n;
    dfs(n->next);
    dfs(n->random);
}
struct MapEntry { struct Node* key; struct Node* val; } map[1005];
int mapSize = 0;
struct Node* getCloned(struct Node* key) {
    if (key == NULL) return NULL;
    for (int i = 0; i < mapSize; i++) {
        if (map[i].key == key) return map[i].val;
    }
    return NULL;
}
struct Node* cloneAndReverse(struct Node* head) {
    if (head == NULL) return NULL;
    visitedCount = 0;
    dfs(head);
    mapSize = 0;
    for (int i = 0; i < visitedCount; i++) {
        struct Node* copy = malloc(sizeof(struct Node));
        copy->val = visited[i]->val;
        copy->prev = copy->next = copy->random = NULL;
        map[mapSize].key = visited[i];
        map[mapSize].val = copy;
        mapSize++;
    }
    for (int i = 0; i < visitedCount; i++) {
        struct Node* copy = getCloned(visited[i]);
        copy->next = i < visitedCount - 1 ? getCloned(visited[i+1]) : NULL;
        copy->random = getCloned(visited[i]->random);
    }
    
    struct Node* prev = NULL;
    struct Node* curr = getCloned(head);
    while (curr != NULL) {
        struct Node* nxt = curr->next;
        curr->next = prev;
        prev = curr;
        curr = nxt;
    }
    return prev;
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    struct Node** nodes = malloc((n+100)*sizeof(struct Node*));
    int* ids = malloc(n*sizeof(int)); int* nxts = malloc(n*sizeof(int)); int* rnds = malloc(n*sizeof(int)); int* idMap = calloc(10005, sizeof(int));
    for (int i=0; i<n; i++) {
        int nid, val, nxt, rnd; scanf("%d %d %d %d", &nid, &val, &nxt, &rnd);
        struct Node* node = malloc(sizeof(struct Node)); node->val = val; node->prev = node->next = node->random = NULL;
        nodes[i] = node; idMap[nid] = i; ids[i] = nid; nxts[i] = nxt; rnds[i] = rnd;
    }
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) curr->next = nodes[idMap[nxts[i]]];
            if (rnds[i] != -1) curr->random = nodes[idMap[rnds[i]]];
        }
    }
    struct Node* res = cloneAndReverse(head);
    struct Node* t = res; struct Node* tail = NULL;
    while (t != NULL) { printf("%d%s", t->val, t->next != NULL ? " " : ""); tail = t; t = t->next; }
    printf("\\n");
    t = res; struct Node* prev = NULL;
    while (t != NULL) { t->prev = prev; prev = t; t = t->next; }
    t = tail;
    while (t != NULL) { printf("%d%s", t->val, t->prev != NULL ? " " : ""); t = t->prev; }
    printf("\\n");
    t = res;
    while (t != NULL) {
        printf("%d->%s%s", t->val, t->random ? "" : "null", t->random ? "" : (t->next != NULL ? " " : ""));
        if (t->random) printf("%d%s", t->random->val, t->next != NULL ? " " : "");
        t = t->next;
    }
    printf("\\n");
    free(nodes); free(ids); free(nxts); free(rnds); free(idMap);
    return 0;
}
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>
using namespace std;
struct Node { int val; Node* prev; Node* next; Node* random; Node(int x) : val(x), prev(nullptr), next(nullptr), random(nullptr) {} };
void dfs(Node* n, vector<Node*>& visited, unordered_set<Node*>& visitedSet) {
    if (!n || visitedSet.count(n)) return;
    visited.push_back(n);
    visitedSet.insert(n);
    dfs(n->next, visited, visitedSet);
    dfs(n->random, visited, visitedSet);
}
Node* cloneAndReverse(Node* head) {
    if (!head) return nullptr;
    vector<Node*> visited;
    unordered_set<Node*> visitedSet;
    dfs(head, visited, visitedSet);
    unordered_map<Node*, Node*> cloned;
    for (Node* n : visited) cloned[n] = new Node(n->val);
    for (int i = 0; i < (int)visited.size(); i++) {
        cloned[visited[i]]->next = i < (int)visited.size() - 1 ? cloned[visited[i+1]] : nullptr;
    }
    for (Node* n : visited) {
        cloned[n]->random = cloned[n->random];
    }
    Node* prev = nullptr;
    Node* curr = cloned[head];
    while (curr) {
        Node* nxt = curr->next;
        curr->next = prev;
        prev = curr;
        curr = nxt;
    }
    return prev;
}
int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, rnd; }; vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, rnd; cin >> nid >> val >> nxt >> rnd;
            nodes[nid] = new Node(val); data[i] = {nid, nxt, rnd};
        }
        Node* head = nullptr;
        if (n > 0) {
            head = nodes[data[0].id];
            for (auto& d : data) {
                Node* curr = nodes[d.id];
                if (d.nxt != -1) curr->next = nodes[d.nxt];
                if (d.rnd != -1) curr->random = nodes[d.rnd];
            }
        }
        Node* res = cloneAndReverse(head);
        Node* t = res; Node* tail = nullptr;
        while (t != nullptr) { cout << t->val << (t->next != nullptr ? " " : ""); tail = t; t = t->next; }
        cout << "\\n";
        t = res; Node* prev = nullptr;
        while (t != nullptr) { t->prev = prev; prev = t; t = t->next; }
        t = tail;
        while (t != nullptr) { cout << t->val << (t->prev != nullptr ? " " : ""); t = t->prev; }
        cout << "\\n";
        t = res;
        while (t != nullptr) {
            string rVal = (t->random != nullptr) ? to_string(t->random->val) : "null";
            cout << t->val << "->" << rVal << (t->next != nullptr ? " " : "");
            t = t->next;
        }
        cout << "\\n";
    }
    return 0;
}
`,
  },
  'clr-m3': {
    python: `
class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random

def clone_and_filter(head, x):
    if not head: return None
    visited = []
    visited_set = set()
    def dfs(node):
        if not node or node in visited_set: return
        visited.append(node)
        visited_set.add(node)
        dfs(node.next)
        dfs(node.random)
    dfs(head)
    
    cloned = {n: Node(n.val) for n in visited}
    for n in visited:
        cloned[n].random = cloned.get(n.random)
        
    kept = [cloned[n] for n in visited if n.val >= x]
    kept_set = set(kept)
    
    for i in range(len(kept)):
        kept[i].next = kept[i+1] if i < len(kept)-1 else None
        if kept[i].random not in kept_set:
            kept[i].random = None
            
    return kept[0] if kept else None

n = int(input())
nodes = {}
data = []
for _ in range(n):
    nid, val, nxt, rnd = map(int, input().split())
    nodes[nid] = Node(val)
    data.append((nid, nxt, rnd))
x = int(input())

head = None
if n > 0:
    head = nodes[data[0][0]]
    for nid, nxt, rnd in data:
        curr = nodes[nid]
        if nxt != -1: curr.next = nodes[nxt]
        if rnd != -1: curr.random = nodes[rnd]

res = clone_and_filter(head, x)
out_f = []
t = res
tail = None
while t:
    out_f.append(str(t.val))
    tail = t
    t = t.next
print(" ".join(out_f))
out_b = []
t = res
prev = None
while t:
    t.prev = prev
    prev = t
    t = t.next
t = tail
while t:
    out_b.append(str(t.val))
    t = t.prev
print(" ".join(out_b))
out_r = []
t = res
while t:
    r_val = str(t.random.val) if t.random else "null"
    out_r.append(f"{t.val}->{r_val}")
    t = t.next
print(" ".join(out_r))
`,
    java: `
import java.util.*;
class Node {
    int val; Node next; Node prev; Node random;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static Node cloneAndFilter(Node head, int x) {
        if (head == null) return null;
        List<Node> visited = new ArrayList<>();
        Set<Node> visitedSet = new HashSet<>();
        dfs(head, visited, visitedSet);
        
        Map<Node, Node> cloned = new HashMap<>();
        for (Node n : visited) cloned.put(n, new Node(n.val));
        for (Node n : visited) {
            cloned.get(n).random = cloned.get(n.random);
        }
        
        List<Node> kept = new ArrayList<>();
        for (Node n : visited) {
            if (n.val >= x) kept.add(cloned.get(n));
        }
        
        Set<Node> keptSet = new HashSet<>(kept);
        for (int i = 0; i < kept.size(); i++) {
            Node node = kept.get(i);
            node.next = (i < kept.size() - 1) ? kept.get(i+1) : null;
            if (!keptSet.contains(node.random)) {
                node.random = null;
            }
        }
        return kept.isEmpty() ? null : kept.get(0);
    }
    private static void dfs(Node n, List<Node> visited, Set<Node> visitedSet) {
        if (n == null || visitedSet.contains(n)) return;
        visited.add(n);
        visitedSet.add(n);
        dfs(n.next, visited, visitedSet);
        dfs(n.random, visited, visitedSet);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            Map<Integer, Node> nodes = new HashMap<>();
            List<int[]> data = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                int nid = sc.nextInt(); int val = sc.nextInt(); int nxt = sc.nextInt(); int rnd = sc.nextInt();
                nodes.put(nid, new Node(val)); data.add(new int[]{nid, nxt, rnd});
            }
            int x = sc.nextInt();
            Node head = null;
            if (n > 0) {
                head = nodes.get(data.get(0)[0]);
                for (int[] d : data) {
                    Node curr = nodes.get(d[0]);
                    if (d[1] != -1) curr.next = nodes.get(d[1]);
                    if (d[2] != -1) curr.random = nodes.get(d[2]);
                }
            }
            Node res = cloneAndFilter(head, x);
            Node tail = null; Node t = res;
            while (t != null) {
                System.out.print(t.val + (t.next != null ? " " : ""));
                tail = t; t = t.next;
            }
            System.out.println();
            t = res; Node prev = null;
            while (t != null) { t.prev = prev; prev = t; t = t.next; }
            t = tail;
            while (t != null) { System.out.print(t.val + (t.prev != null ? " " : "")); t = t.prev; }
            System.out.println();
            t = res;
            while (t != null) {
                String rVal = (t.random != null) ? String.valueOf(t.random.val) : "null";
                System.out.print(t.val + "->" + rVal + (t.next != null ? " " : ""));
                t = t.next;
            }
            System.out.println();
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
struct Node { int val; struct Node* prev; struct Node* next; struct Node* random; };
struct Node* visited[1005];
int visitedCount = 0;
bool isVisited(struct Node* n) {
    for (int i = 0; i < visitedCount; i++) {
        if (visited[i] == n) return true;
    }
    return false;
}
void dfs(struct Node* n) {
    if (n == NULL || isVisited(n)) return;
    visited[visitedCount++] = n;
    dfs(n->next);
    dfs(n->random);
}
struct MapEntry { struct Node* key; struct Node* val; } map[1005];
int mapSize = 0;
struct Node* getCloned(struct Node* key) {
    if (key == NULL) return NULL;
    for (int i = 0; i < mapSize; i++) {
        if (map[i].key == key) return map[i].val;
    }
    return NULL;
}
struct Node* cloneAndFilter(struct Node* head, int x) {
    if (head == NULL) return NULL;
    visitedCount = 0;
    dfs(head);
    mapSize = 0;
    for (int i = 0; i < visitedCount; i++) {
        struct Node* copy = malloc(sizeof(struct Node));
        copy->val = visited[i]->val;
        copy->prev = copy->next = copy->random = NULL;
        map[mapSize].key = visited[i];
        map[mapSize].val = copy;
        mapSize++;
    }
    for (int i = 0; i < visitedCount; i++) {
        struct Node* copy = getCloned(visited[i]);
        copy->random = getCloned(visited[i]->random);
    }
    
    struct Node* kept[1005];
    int kc = 0;
    for (int i = 0; i < visitedCount; i++) {
        if (visited[i]->val >= x) {
            kept[kc++] = getCloned(visited[i]);
        }
    }
    for (int i = 0; i < kc; i++) {
        kept[i]->next = i < kc - 1 ? kept[i+1] : NULL;
        if (kept[i]->random) {
            bool found = false;
            for (int j = 0; j < kc; j++) {
                if (kept[j] == kept[i]->random) { found = true; break; }
            }
            if (!found) kept[i]->random = NULL;
        }
    }
    return kc > 0 ? kept[0] : NULL;
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    struct Node** nodes = malloc((n+100)*sizeof(struct Node*));
    int* ids = malloc(n*sizeof(int)); int* nxts = malloc(n*sizeof(int)); int* rnds = malloc(n*sizeof(int)); int* idMap = calloc(10005, sizeof(int));
    for (int i=0; i<n; i++) {
        int nid, val, nxt, rnd; scanf("%d %d %d %d", &nid, &val, &nxt, &rnd);
        struct Node* node = malloc(sizeof(struct Node)); node->val = val; node->prev = node->next = node->random = NULL;
        nodes[i] = node; idMap[nid] = i; ids[i] = nid; nxts[i] = nxt; rnds[i] = rnd;
    }
    int x; if (scanf("%d", &x) != 1) return 0;
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) curr->next = nodes[idMap[nxts[i]]];
            if (rnds[i] != -1) curr->random = nodes[idMap[rnds[i]]];
        }
    }
    struct Node* res = cloneAndFilter(head, x);
    struct Node* t = res; struct Node* tail = NULL;
    while (t != NULL) { printf("%d%s", t->val, t->next != NULL ? " " : ""); tail = t; t = t->next; }
    printf("\\n");
    t = res; struct Node* prev = NULL;
    while (t != NULL) { t->prev = prev; prev = t; t = t->next; }
    t = tail;
    while (t != NULL) { printf("%d%s", t->val, t->prev != NULL ? " " : ""); t = t->prev; }
    printf("\\n");
    t = res;
    while (t != NULL) {
        printf("%d->%s%s", t->val, t->random ? "" : "null", t->random ? "" : (t->next != NULL ? " " : ""));
        if (t->random) printf("%d%s", t->random->val, t->next != NULL ? " " : "");
        t = t->next;
    }
    printf("\\n");
    free(nodes); free(ids); free(nxts); free(rnds); free(idMap);
    return 0;
}
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>
using namespace std;
struct Node { int val; Node* prev; Node* next; Node* random; Node(int x) : val(x), prev(nullptr), next(nullptr), random(nullptr) {} };
void dfs(Node* n, vector<Node*>& visited, unordered_set<Node*>& visitedSet) {
    if (!n || visitedSet.count(n)) return;
    visited.push_back(n);
    visitedSet.insert(n);
    dfs(n->next, visited, visitedSet);
    dfs(n->random, visited, visitedSet);
}
Node* cloneAndFilter(Node* head, int x) {
    if (!head) return nullptr;
    vector<Node*> visited;
    unordered_set<Node*> visitedSet;
    dfs(head, visited, visitedSet);
    
    unordered_map<Node*, Node*> cloned;
    for (Node* n : visited) cloned[n] = new Node(n->val);
    for (Node* n : visited) {
        cloned[n]->random = cloned[n->random];
    }
    
    vector<Node*> kept;
    for (Node* n : visited) {
        if (n->val >= x) kept.push_back(cloned[n]);
    }
    unordered_set<Node*> keptSet(kept.begin(), kept.end());
    for (size_t i = 0; i < kept.size(); i++) {
        kept[i]->next = i < kept.size() - 1 ? kept[i+1] : nullptr;
        if (kept[i]->random && !keptSet.count(kept[i]->random)) {
            kept[i]->random = nullptr;
        }
    }
    return kept.empty() ? nullptr : kept[0];
}
int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, rnd; }; vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, rnd; cin >> nid >> val >> nxt >> rnd;
            nodes[nid] = new Node(val); data[i] = {nid, nxt, rnd};
        }
        int x; cin >> x;
        Node* head = nullptr;
        if (n > 0) {
            head = nodes[data[0].id];
            for (auto& d : data) {
                Node* curr = nodes[d.id];
                if (d.nxt != -1) curr->next = nodes[d.nxt];
                if (d.rnd != -1) curr->random = nodes[d.rnd];
            }
        }
        Node* res = cloneAndFilter(head, x);
        Node* t = res; Node* tail = nullptr;
        while (t != nullptr) { cout << t->val << (t->next != nullptr ? " " : ""); tail = t; t = t->next; }
        cout << "\\n";
        t = res; Node* prev = nullptr;
        while (t != nullptr) { t->prev = prev; prev = t; t = t->next; }
        t = tail;
        while (t != nullptr) { cout << t->val << (t->prev != nullptr ? " " : ""); t = t->prev; }
        cout << "\\n";
        t = res;
        while (t != nullptr) {
            string rVal = (t->random != nullptr) ? to_string(t->random->val) : "null";
            cout << t->val << "->" << rVal << (t->next != nullptr ? " " : "");
            t = t->next;
        }
        cout << "\\n";
    }
    return 0;
}
`,
  },
  'clr-m4': {
    python: `
class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random

def clone_circular(head):
    if not head: return None
    orig_nodes = []
    curr = head
    while True:
        orig_nodes.append(curr)
        curr = curr.next
        if curr is head:
            break
            
    cloned = {o: Node(o.val) for o in orig_nodes}
    for o in orig_nodes:
        cloned[o].next = cloned[o.next]
        cloned[o].random = cloned.get(o.random)
        
    return cloned[head]

n = int(input())
nodes = {}
data = []
for _ in range(n):
    nid, val, nxt, rnd = map(int, input().split())
    nodes[nid] = Node(val)
    data.append((nid, nxt, rnd))

head = None
if n > 0:
    head = nodes[data[0][0]]
    for nid, nxt, rnd in data:
        curr = nodes[nid]
        if nxt != -1: curr.next = nodes[nxt]
        if rnd != -1: curr.random = nodes[rnd]

res = clone_circular(head)
out_f = []
t = res
for _ in range(n):
    out_f.append(str(t.val))
    t = t.next
print(" ".join(out_f))
prev = None
t = res
for _ in range(n + 1):
    t.prev = prev
    prev = t
    t = t.next
tail = res.prev
out_b = []
t = tail
for _ in range(n):
    out_b.append(str(t.val))
    t = t.prev
print(" ".join(out_b))
out_r = []
t = res
for _ in range(n):
    r_val = str(t.random.val) if t.random else "null"
    out_r.append(f"{t.val}->{r_val}")
    t = t.next
print(" ".join(out_r))
`,
    java: `
import java.util.*;
class Node {
    int val; Node next; Node prev; Node random;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static Node cloneCircular(Node head) {
        if (head == null) return null;
        List<Node> origNodes = new ArrayList<>();
        Node curr = head;
        while (true) {
            origNodes.add(curr);
            curr = curr.next;
            if (curr == head) break;
        }
        
        Map<Node, Node> cloned = new HashMap<>();
        for (Node o : origNodes) {
            cloned.put(o, new Node(o.val));
        }
        for (Node o : origNodes) {
            cloned.get(o).next = cloned.get(o.next);
            cloned.get(o).random = cloned.get(o.random);
        }
        return cloned.get(head);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            Map<Integer, Node> nodes = new HashMap<>();
            List<int[]> data = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                int nid = sc.nextInt(); int val = sc.nextInt(); int nxt = sc.nextInt(); int rnd = sc.nextInt();
                nodes.put(nid, new Node(val)); data.add(new int[]{nid, nxt, rnd});
            }
            Node head = null;
            if (n > 0) {
                head = nodes.get(data.get(0)[0]);
                for (int[] d : data) {
                    Node curr = nodes.get(d[0]);
                    if (d[1] != -1) curr.next = nodes.get(d[1]);
                    if (d[2] != -1) curr.random = nodes.get(d[2]);
                }
            }
            Node res = cloneCircular(head);
            Node t = res;
            for (int i = 0; i < n; i++) {
                System.out.print(t.val + (i < n - 1 ? " " : ""));
                t = t.next;
            }
            System.out.println();
            Node prev = null; t = res;
            for (int i = 0; i <= n; i++) {
                t.prev = prev; prev = t; t = t.next;
            }
            Node tail = res.prev; t = tail;
            for (int i = 0; i < n; i++) {
                System.out.print(t.val + (i < n - 1 ? " " : ""));
                t = t.prev;
            }
            System.out.println();
            t = res;
            for (int i = 0; i < n; i++) {
                String rVal = (t.random != null) ? String.valueOf(t.random.val) : "null";
                System.out.print(t.val + "->" + rVal + (i < n - 1 ? " " : ""));
                t = t.next;
            }
            System.out.println();
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
struct Node { int val; struct Node* prev; struct Node* next; struct Node* random; };
struct MapEntry { struct Node* key; struct Node* val; } map[1005];
int mapSize = 0;
struct Node* getCloned(struct Node* key) {
    if (key == NULL) return NULL;
    for (int i = 0; i < mapSize; i++) {
        if (map[i].key == key) return map[i].val;
    }
    return NULL;
}
struct Node* cloneCircular(struct Node* head) {
    if (head == NULL) return NULL;
    mapSize = 0;
    struct Node* origNodes[1005];
    int oc = 0;
    struct Node* curr = head;
    while (1) {
        origNodes[oc++] = curr;
        curr = curr->next;
        if (curr == head) break;
    }
    for (int i = 0; i < oc; i++) {
        struct Node* copy = malloc(sizeof(struct Node));
        copy->val = origNodes[i]->val;
        copy->prev = copy->next = copy->random = NULL;
        map[mapSize].key = origNodes[i];
        map[mapSize].val = copy;
        mapSize++;
    }
    for (int i = 0; i < oc; i++) {
        struct Node* copy = getCloned(origNodes[i]);
        copy->next = getCloned(origNodes[i]->next);
        copy->random = getCloned(origNodes[i]->random);
    }
    return getCloned(head);
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    struct Node** nodes = malloc((n+100)*sizeof(struct Node*));
    int* ids = malloc(n*sizeof(int)); int* nxts = malloc(n*sizeof(int)); int* rnds = malloc(n*sizeof(int)); int* idMap = calloc(10005, sizeof(int));
    for (int i=0; i<n; i++) {
        int nid, val, nxt, rnd; scanf("%d %d %d %d", &nid, &val, &nxt, &rnd);
        struct Node* node = malloc(sizeof(struct Node)); node->val = val; node->prev = node->next = node->random = NULL;
        nodes[i] = node; idMap[nid] = i; ids[i] = nid; nxts[i] = nxt; rnds[i] = rnd;
    }
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) curr->next = nodes[idMap[nxts[i]]];
            if (rnds[i] != -1) curr->random = nodes[idMap[rnds[i]]];
        }
    }
    struct Node* res = cloneCircular(head);
    struct Node* t = res;
    for (int i = 0; i < n; i++) {
        printf("%d%s", t->val, i < n - 1 ? " " : "");
        t = t->next;
    }
    printf("\\n");
    t = res; struct Node* prev = NULL;
    for (int i = 0; i <= n; i++) {
        t->prev = prev; prev = t; t = t->next;
    }
    struct Node* tail = res->prev; t = tail;
    for (int i = 0; i < n; i++) {
        printf("%d%s", t->val, i < n - 1 ? " " : "");
        t = t->prev;
    }
    printf("\\n");
    t = res;
    for (int i = 0; i < n; i++) {
        printf("%d->%s%s", t->val, t->random ? "" : "null", t->random ? "" : (i < n - 1 ? " " : ""));
        if (t->random) printf("%d%s", t->random->val, i < n - 1 ? " " : "");
        t = t->next;
    }
    printf("\\n");
    free(nodes); free(ids); free(nxts); free(rnds); free(idMap);
    return 0;
}
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
struct Node { int val; Node* prev; Node* next; Node* random; Node(int x) : val(x), prev(nullptr), next(nullptr), random(nullptr) {} };
Node* cloneCircular(Node* head) {
    if (!head) return nullptr;
    vector<Node*> origNodes;
    Node* curr = head;
    while (true) {
        origNodes.push_back(curr);
        curr = curr->next;
        if (curr == head) break;
    }
    unordered_map<Node*, Node*> cloned;
    for (Node* o : origNodes) {
        cloned[o] = new Node(o->val);
    }
    for (Node* o : origNodes) {
        cloned[o]->next = cloned[o->next];
        cloned[o]->random = cloned[o->random];
    }
    return cloned[head];
}
int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, rnd; }; vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, rnd; cin >> nid >> val >> nxt >> rnd;
            nodes[nid] = new Node(val); data[i] = {nid, nxt, rnd};
        }
        Node* head = nullptr;
        if (n > 0) {
            head = nodes[data[0].id];
            for (auto& d : data) {
                Node* curr = nodes[d.id];
                if (d.nxt != -1) curr->next = nodes[d.nxt];
                if (d.rnd != -1) curr->random = nodes[d.rnd];
            }
        }
        Node* res = cloneCircular(head);
        Node* t = res;
        for (int i = 0; i < n; i++) {
            cout << t->val << (i < n - 1 ? " " : "");
            t = t->next;
        }
        cout << "\\n";
        t = res; Node* prev = nullptr;
        for (int i = 0; i <= n; i++) {
            t->prev = prev; prev = t; t = t->next;
        }
        Node* tail = res->prev; t = tail;
        for (int i = 0; i < n; i++) {
            cout << t->val << (i < n - 1 ? " " : "");
            t = t->prev;
        }
        cout << "\\n";
        t = res;
        for (int i = 0; i < n; i++) {
            string rVal = (t->random != nullptr) ? to_string(t->random->val) : "null";
            cout << t->val << "->" << rVal << (i < n - 1 ? " " : "");
            t = t->next;
        }
        cout << "\\n";
    }
    return 0;
}
`,
  },
  'clr-m5': {
    python: `
class Node:
    def __init__(self, val=0, prev=None, next=None, random=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.random = random

def clone_and_interleave(head):
    if not head: return None
    visited = []
    visited_set = set()
    def dfs(node):
        if not node or node in visited_set: return
        visited.append(node)
        visited_set.add(node)
        dfs(node.next)
        dfs(node.random)
    dfs(head)
    
    cloned = {n: Node(n.val) for n in visited}
    for i in range(len(visited)):
        cloned[visited[i]].next = cloned[visited[i+1]] if i < len(visited)-1 else None
    for n in visited:
        cloned[n].random = cloned.get(n.random)
        
    # Interleave orig and copy
    # Since we want to return head, let's link orig[i] -> clone[i] -> orig[i+1] -> clone[i+1]...
    for i in range(len(visited)):
        orig_node = visited[i]
        clone_node = cloned[orig_node]
        nxt_orig = visited[i+1] if i < len(visited)-1 else None
        
        orig_node.next = clone_node
        if nxt_orig:
            clone_node.next = nxt_orig
        else:
            clone_node.next = None
            
    return head

n = int(input())
nodes = {}
data = []
for _ in range(n):
    nid, val, nxt, rnd = map(int, input().split())
    nodes[nid] = Node(val)
    data.append((nid, nxt, rnd))

head = None
if n > 0:
    head = nodes[data[0][0]]
    for nid, nxt, rnd in data:
        curr = nodes[nid]
        if nxt != -1: curr.next = nodes[nxt]
        if rnd != -1: curr.random = nodes[rnd]

res = clone_and_interleave(head)
out_f = []
t = res
tail = None
while t:
    out_f.append(str(t.val))
    tail = t
    t = t.next
print(" ".join(out_f))

t = res
prev = None
while t:
    t.prev = prev
    prev = t
    t = t.next
t = tail
out_b = []
while t:
    out_b.append(str(t.val))
    t = t.prev
print(" ".join(out_b))

out_r = []
t = res
while t:
    r_val = str(t.random.val) if t.random else "null"
    out_r.append(f"{t.val}->{r_val}")
    t = t.next
print(" ".join(out_r))
`,
    java: `
import java.util.*;
class Node {
    int val; Node prev; Node next; Node random;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static Node cloneAndInterleave(Node head) {
        if (head == null) return null;
        List<Node> visited = new ArrayList<>();
        Set<Node> visitedSet = new HashSet<>();
        dfs(head, visited, visitedSet);
        
        Map<Node, Node> cloned = new HashMap<>();
        for (Node n : visited) cloned.put(n, new Node(n.val));
        for (int i = 0; i < visited.size(); i++) {
            cloned.get(visited.get(i)).next = (i < visited.size() - 1) ? cloned.get(visited.get(i+1)) : null;
        }
        for (Node n : visited) {
            cloned.get(n).random = cloned.get(n.random);
        }
        
        for (int i = 0; i < visited.size(); i++) {
            Node orig = visited.get(i);
            Node copy = cloned.get(orig);
            Node nxtOrig = (i < visited.size() - 1) ? visited.get(i+1) : null;
            
            orig.next = copy;
            if (nxtOrig != null) {
                copy.next = nxtOrig;
            } else {
                copy.next = null;
            }
        }
        return head;
    }
    private static void dfs(Node n, List<Node> visited, Set<Node> visitedSet) {
        if (n == null || visitedSet.contains(n)) return;
        visited.add(n);
        visitedSet.add(n);
        dfs(n.next, visited, visitedSet);
        dfs(n.random, visited, visitedSet);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            Map<Integer, Node> nodes = new HashMap<>();
            List<int[]> data = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                int nid = sc.nextInt(); int val = sc.nextInt(); int nxt = sc.nextInt(); int rnd = sc.nextInt();
                nodes.put(nid, new Node(val)); data.add(new int[]{nid, nxt, rnd});
            }
            Node head = null;
            if (n > 0) {
                head = nodes.get(data.get(0)[0]);
                for (int[] d : data) {
                    Node curr = nodes.get(d[0]);
                    if (d[1] != -1) curr.next = nodes.get(d[1]);
                    if (d[2] != -1) curr.random = nodes.get(d[2]);
                }
            }
            Node res = cloneAndInterleave(head);
            Node tail = null; Node t = res;
            while (t != null) {
                System.out.print(t.val + (t.next != null ? " " : ""));
                tail = t; t = t.next;
            }
            System.out.println();
            t = res; Node prev = null;
            while (t != null) { t.prev = prev; prev = t; t = t.next; }
            t = tail;
            while (t != null) { System.out.print(t.val + (t.prev != null ? " " : "")); t = t.prev; }
            System.out.println();
            t = res;
            while (t != null) {
                String rVal = (t.random != null) ? String.valueOf(t.random.val) : "null";
                System.out.print(t.val + "->" + rVal + (t.next != null ? " " : ""));
                t = t.next;
            }
            System.out.println();
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
struct Node { int val; struct Node* prev; struct Node* next; struct Node* random; };
struct Node* visited[1005];
int visitedCount = 0;
bool isVisited(struct Node* n) {
    for (int i = 0; i < visitedCount; i++) {
        if (visited[i] == n) return true;
    }
    return false;
}
void dfs(struct Node* n) {
    if (n == NULL || isVisited(n)) return;
    visited[visitedCount++] = n;
    dfs(n->next);
    dfs(n->random);
}
struct MapEntry { struct Node* key; struct Node* val; } map[1005];
int mapSize = 0;
struct Node* getCloned(struct Node* key) {
    if (key == NULL) return NULL;
    for (int i = 0; i < mapSize; i++) {
        if (map[i].key == key) return map[i].val;
    }
    return NULL;
}
struct Node* cloneAndInterleave(struct Node* head) {
    if (head == NULL) return NULL;
    visitedCount = 0;
    dfs(head);
    mapSize = 0;
    for (int i = 0; i < visitedCount; i++) {
        struct Node* copy = malloc(sizeof(struct Node));
        copy->val = visited[i]->val;
        copy->prev = copy->next = copy->random = NULL;
        map[mapSize].key = visited[i];
        map[mapSize].val = copy;
        mapSize++;
    }
    for (int i = 0; i < visitedCount; i++) {
        struct Node* copy = getCloned(visited[i]);
        copy->next = i < visitedCount - 1 ? getCloned(visited[i+1]) : NULL;
        copy->random = getCloned(visited[i]->random);
    }
    
    for (int i = 0; i < visitedCount; i++) {
        struct Node* orig = visited[i];
        struct Node* copy = getCloned(orig);
        struct Node* nxtOrig = i < visitedCount - 1 ? visited[i+1] : NULL;
        orig->next = copy;
        if (nxtOrig != NULL) {
            copy->next = nxtOrig;
        } else {
            copy->next = NULL;
        }
    }
    return head;
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    struct Node** nodes = malloc((n+100)*sizeof(struct Node*));
    int* ids = malloc(n*sizeof(int)); int* nxts = malloc(n*sizeof(int)); int* rnds = malloc(n*sizeof(int)); int* idMap = calloc(10005, sizeof(int));
    for (int i=0; i<n; i++) {
        int nid, val, nxt, rnd; scanf("%d %d %d %d", &nid, &val, &nxt, &rnd);
        struct Node* node = malloc(sizeof(struct Node)); node->val = val; node->prev = node->next = node->random = NULL;
        nodes[i] = node; idMap[nid] = i; ids[i] = nid; nxts[i] = nxt; rnds[i] = rnd;
    }
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) curr->next = nodes[idMap[nxts[i]]];
            if (rnds[i] != -1) curr->random = nodes[idMap[rnds[i]]];
        }
    }
    struct Node* res = cloneAndInterleave(head);
    struct Node* t = res; struct Node* tail = NULL;
    while (t != NULL) { printf("%d%s", t->val, t->next != NULL ? " " : ""); tail = t; t = t->next; }
    printf("\\n");
    t = res; struct Node* prev = NULL;
    while (t != NULL) { t->prev = prev; prev = t; t = t->next; }
    t = tail;
    while (t != NULL) { printf("%d%s", t->val, t->prev != NULL ? " " : ""); t = t->prev; }
    printf("\\n");
    t = res;
    while (t != NULL) {
        printf("%d->%s%s", t->val, t->random ? "" : "null", t->random ? "" : (t->next != NULL ? " " : ""));
        if (t->random) printf("%d%s", t->random->val, t->next != NULL ? " " : "");
        t = t->next;
    }
    printf("\\n");
    free(nodes); free(ids); free(nxts); free(rnds); free(idMap);
    return 0;
}
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>
using namespace std;
struct Node { int val; Node* prev; Node* next; Node* random; Node(int x) : val(x), prev(nullptr), next(nullptr), random(nullptr) {} };
void dfs(Node* n, vector<Node*>& visited, unordered_set<Node*>& visitedSet) {
    if (!n || visitedSet.count(n)) return;
    visited.push_back(n);
    visitedSet.insert(n);
    dfs(n->next, visited, visitedSet);
    dfs(n->random, visited, visitedSet);
}
Node* cloneAndInterleave(Node* head) {
    if (!head) return nullptr;
    vector<Node*> visited;
    unordered_set<Node*> visitedSet;
    dfs(head, visited, visitedSet);
    
    unordered_map<Node*, Node*> cloned;
    for (Node* n : visited) cloned[n] = new Node(n->val);
    for (int i = 0; i < (int)visited.size(); i++) {
        cloned[visited[i]]->next = i < (int)visited.size() - 1 ? cloned[visited[i+1]] : nullptr;
    }
    for (Node* n : visited) {
        cloned[n]->random = cloned[n->random];
    }
    
    for (size_t i = 0; i < visited.size(); i++) {
        Node* orig = visited[i];
        Node* copy = cloned[orig];
        Node* nxtOrig = i < visited.size() - 1 ? visited[i+1] : nullptr;
        orig->next = copy;
        if (nxtOrig) {
            copy->next = nxtOrig;
        } else {
            copy->next = nullptr;
        }
    }
    return head;
}
int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, rnd; }; vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, rnd; cin >> nid >> val >> nxt >> rnd;
            nodes[nid] = new Node(val); data[i] = {nid, nxt, rnd};
        }
        Node* head = nullptr;
        if (n > 0) {
            head = nodes[data[0].id];
            for (auto& d : data) {
                Node* curr = nodes[d.id];
                if (d.nxt != -1) curr->next = nodes[d.nxt];
                if (d.rnd != -1) curr->random = nodes[d.rnd];
            }
        }
        Node* res = cloneAndInterleave(head);
        Node* t = res; Node* tail = nullptr;
        while (t != nullptr) { cout << t->val << (t->next != nullptr ? " " : ""); tail = t; t = t->next; }
        cout << "\\n";
        t = res; Node* prev = nullptr;
        while (t != nullptr) { t->prev = prev; prev = t; t = t->next; }
        t = tail;
        while (t != nullptr) { cout << t->val << (t->prev != nullptr ? " " : ""); t = t->prev; }
        cout << "\\n";
        t = res;
        while (t != nullptr) {
            string rVal = (t->random != nullptr) ? to_string(t->random->val) : "null";
            cout << t->val << "->" << rVal << (t->next != nullptr ? " " : "");
            t = t->next;
        }
        cout << "\\n";
    }
    return 0;
}
`,
  },
  'clr-h1': {
    python: `
class Node:
    def __init__(self, val=0, next=None, child=None, random=None):
        self.val = val
        self.next = next
        self.child = child
        self.random = random

def clone_multilevel_random(head):
    if not head: return None
    cloned = {}
    
    def collect_and_copy(n):
        if not n: return
        if n in cloned: return
        cloned[n] = Node(n.val)
        collect_and_copy(n.next)
        collect_and_copy(n.child)
        collect_and_copy(n.random)
        
    collect_and_copy(head)
    
    for orig, copy in cloned.items():
        copy.next = cloned.get(orig.next)
        copy.child = cloned.get(orig.child)
        copy.random = cloned.get(orig.random)
        
    return cloned[head]

n = int(input())
nodes = {}
data = []
for _ in range(n):
    nid, val, nxt, ch, rnd = map(int, input().split())
    nodes[nid] = Node(val)
    data.append((nid, nxt, ch, rnd))

head = None
if n > 0:
    head = nodes[data[0][0]]
    for nid, nxt, ch, rnd in data:
        curr = nodes[nid]
        if nxt != -1: curr.next = nodes[nxt]
        if ch != -1: curr.child = nodes[ch]
        if rnd != -1: curr.random = nodes[rnd]

res = clone_multilevel_random(head)
def flatten_dfs(node):
    if not node: return []
    flat = [node]
    if node.child: flat.extend(flatten_dfs(node.child))
    if node.next: flat.extend(flatten_dfs(node.next))
    return flat

flat_nodes = flatten_dfs(res)
for i in range(len(flat_nodes)):
    flat_nodes[i].prev = flat_nodes[i-1] if i > 0 else None
    flat_nodes[i].next = flat_nodes[i+1] if i < len(flat_nodes)-1 else None
    flat_nodes[i].child = None

out_f = []
t = flat_nodes[0] if flat_nodes else None
tail = None
while t:
    out_f.append(str(t.val))
    tail = t
    t = t.next
print(" ".join(out_f))

out_b = []
t = tail
while t:
    out_b.append(str(t.val))
    t = t.prev
print(" ".join(out_b))

out_r = []
t = flat_nodes[0] if flat_nodes else None
while t:
    r_val = str(t.random.val) if t.random else "null"
    out_r.append(f"{t.val}->{r_val}")
    t = t.next
print(" ".join(out_r))
`,
    java: `
import java.util.*;
class Node {
    int val; Node prev; Node next; Node child; Node random;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static Node cloneMultilevelRandom(Node head) {
        if (head == null) return null;
        Map<Node, Node> cloned = new HashMap<>();
        collectAndCopy(head, cloned);
        for (Map.Entry<Node, Node> entry : cloned.entrySet()) {
            Node orig = entry.getKey();
            Node copy = entry.getValue();
            copy.next = cloned.get(orig.next);
            copy.child = cloned.get(orig.child);
            copy.random = cloned.get(orig.random);
        }
        return cloned.get(head);
    }
    private static void collectAndCopy(Node n, Map<Node, Node> cloned) {
        if (n == null || cloned.containsKey(n)) return;
        cloned.put(n, new Node(n.val));
        collectAndCopy(n.next, cloned);
        collectAndCopy(n.child, cloned);
        collectAndCopy(n.random, cloned);
    }
    private static List<Node> flattenDFS(Node node) {
        List<Node> list = new ArrayList<>();
        if (node == null) return list;
        list.add(node);
        list.addAll(flattenDFS(node.child));
        list.addAll(flattenDFS(node.next));
        return list;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            Map<Integer, Node> nodes = new HashMap<>();
            List<int[]> data = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                int nid = sc.nextInt(); int val = sc.nextInt(); int nxt = sc.nextInt(); int ch = sc.nextInt(); int rnd = sc.nextInt();
                nodes.put(nid, new Node(val)); data.add(new int[]{nid, nxt, ch, rnd});
            }
            Node head = null;
            if (n > 0) {
                head = nodes.get(data.get(0)[0]);
                for (int[] d : data) {
                    Node curr = nodes.get(d[0]);
                    if (d[1] != -1) curr.next = nodes.get(d[1]);
                    if (d[2] != -1) curr.child = nodes.get(d[2]);
                    if (d[3] != -1) curr.random = nodes.get(d[3]);
                }
            }
            Node res = cloneMultilevelRandom(head);
            List<Node> flat = flattenDFS(res);
            for (int i = 0; i < flat.size(); i++) {
                flat.get(i).prev = i > 0 ? flat.get(i-1) : null;
                flat.get(i).next = i < flat.size() - 1 ? flat.get(i+1) : null;
                flat.get(i).child = null;
            }
            Node tail = null; Node t = flat.isEmpty() ? null : flat.get(0);
            while (t != null) {
                System.out.print(t.val + (t.next != null ? " " : ""));
                tail = t; t = t.next;
            }
            System.out.println();
            t = tail;
            while (t != null) { System.out.print(t.val + (t.prev != null ? " " : "")); t = t.prev; }
            System.out.println();
            t = flat.isEmpty() ? null : flat.get(0);
            while (t != null) {
                String rVal = (t.random != null) ? String.valueOf(t.random.val) : "null";
                System.out.print(t.val + "->" + rVal + (t.next != null ? " " : ""));
                t = t.next;
            }
            System.out.println();
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
struct Node { int val; struct Node* prev; struct Node* next; struct Node* child; struct Node* random; };
struct MapEntry { struct Node* key; struct Node* val; } map[1005];
int mapSize = 0;
struct Node* getCloned(struct Node* key) {
    if (key == NULL) return NULL;
    for (int i = 0; i < mapSize; i++) {
        if (map[i].key == key) return map[i].val;
    }
    return NULL;
}
void collectAndCopy(struct Node* n) {
    if (n == NULL || getCloned(n) != NULL) return;
    struct Node* copy = malloc(sizeof(struct Node));
    copy->val = n->val;
    copy->prev = copy->next = copy->child = copy->random = NULL;
    map[mapSize].key = n;
    map[mapSize].val = copy;
    mapSize++;
    collectAndCopy(n->next);
    collectAndCopy(n->child);
    collectAndCopy(n->random);
}
struct Node* cloneMultilevelRandom(struct Node* head) {
    if (head == NULL) return NULL;
    mapSize = 0;
    collectAndCopy(head);
    for (int i = 0; i < mapSize; i++) {
        struct Node* orig = map[i].key;
        struct Node* copy = map[i].val;
        copy->next = getCloned(orig->next);
        copy->child = getCloned(orig->child);
        copy->random = getCloned(orig->random);
    }
    return getCloned(head);
}
struct Node* flat[1005];
int fc = 0;
void dfs(struct Node* n) {
    if (n == NULL) return;
    flat[fc++] = n;
    dfs(n->child);
    dfs(n->next);
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    struct Node** nodes = malloc((n+100)*sizeof(struct Node*));
    int* ids = malloc(n*sizeof(int)); int* nxts = malloc(n*sizeof(int)); int* chs = malloc(n*sizeof(int)); int* rnds = malloc(n*sizeof(int)); int* idMap = calloc(10005, sizeof(int));
    for (int i=0; i<n; i++) {
        int nid, val, nxt, ch, rnd; scanf("%d %d %d %d %d", &nid, &val, &nxt, &ch, &rnd);
        struct Node* node = malloc(sizeof(struct Node)); node->val = val; node->prev = node->next = node->child = node->random = NULL;
        nodes[i] = node; idMap[nid] = i; ids[i] = nid; nxts[i] = nxt; chs[i] = ch; rnds[i] = rnd;
    }
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) curr->next = nodes[idMap[nxts[i]]];
            if (chs[i] != -1) curr->child = nodes[idMap[chs[i]]];
            if (rnds[i] != -1) curr->random = nodes[idMap[rnds[i]]];
        }
    }
    struct Node* res = cloneMultilevelRandom(head);
    fc = 0; dfs(res);
    for (int i = 0; i < fc; i++) {
        flat[i]->prev = i > 0 ? flat[i-1] : NULL;
        flat[i]->next = i < fc - 1 ? flat[i+1] : NULL;
        flat[i]->child = NULL;
    }
    struct Node* t = fc > 0 ? flat[0] : NULL; struct Node* tail = NULL;
    while (t != NULL) { printf("%d%s", t->val, t->next != NULL ? " " : ""); tail = t; t = t->next; }
    printf("\\n");
    t = tail;
    while (t != NULL) { printf("%d%s", t->val, t->prev != NULL ? " " : ""); t = t->prev; }
    printf("\\n");
    t = fc > 0 ? flat[0] : NULL;
    while (t != NULL) {
        printf("%d->%s%s", t->val, t->random ? "" : "null", t->random ? "" : (t->next != NULL ? " " : ""));
        if (t->random) printf("%d%s", t->random->val, t->next != NULL ? " " : "");
        t = t->next;
    }
    printf("\\n");
    free(nodes); free(ids); free(nxts); free(chs); free(rnds); free(idMap);
    return 0;
}
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
struct Node { int val; Node* prev; Node* next; Node* child; Node* random; Node(int x) : val(x), prev(nullptr), next(nullptr), child(nullptr), random(nullptr) {} };
void collectAndCopy(Node* n, unordered_map<Node*, Node*>& cloned) {
    if (!n || cloned.count(n)) return;
    cloned[n] = new Node(n->val);
    collectAndCopy(n->next, cloned);
    collectAndCopy(n->child, cloned);
    collectAndCopy(n->random, cloned);
}
Node* cloneMultilevelRandom(Node* head) {
    if (!head) return nullptr;
    unordered_map<Node*, Node*> cloned;
    collectAndCopy(head, cloned);
    for (auto& pair : cloned) {
        Node* orig = pair.first;
        Node* copy = pair.second;
        copy->next = cloned[orig->next];
        copy->child = cloned[orig->child];
        copy->random = cloned[orig->random];
    }
    return cloned[head];
}
void dfs(Node* n, vector<Node*>& flat) {
    if (!n) return;
    flat.push_back(n);
    dfs(n->child, flat);
    dfs(n->next, flat);
}
int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, ch, rnd; }; vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, ch, rnd; cin >> nid >> val >> nxt >> ch >> rnd;
            nodes[nid] = new Node(val); data[i] = {nid, nxt, ch, rnd};
        }
        Node* head = nullptr;
        if (n > 0) {
            head = nodes[data[0].id];
            for (auto& d : data) {
                Node* curr = nodes[d.id];
                if (d.nxt != -1) curr->next = nodes[d.nxt];
                if (d.ch != -1) curr->child = nodes[d.ch];
                if (d.rnd != -1) curr->random = nodes[d.rnd];
            }
        }
        Node* res = cloneMultilevelRandom(head);
        vector<Node*> flat; dfs(res, flat);
        for (int i = 0; i < (int)flat.size(); i++) {
            flat[i]->prev = i > 0 ? flat[i-1] : nullptr;
            flat[i]->next = i < (int)flat.size() - 1 ? flat[i+1] : nullptr;
            flat[i]->child = nullptr;
        }
        Node* t = flat.empty() ? nullptr : flat[0]; Node* tail = nullptr;
        while (t != nullptr) { cout << t->val << (t->next != nullptr ? " " : ""); tail = t; t = t->next; }
        cout << "\\n";
        t = tail;
        while (t != nullptr) { cout << t->val << (t->prev != nullptr ? " " : ""); t = t->prev; }
        cout << "\\n";
        t = flat.empty() ? nullptr : flat[0];
        while (t != nullptr) {
            string rVal = (t->random != nullptr) ? to_string(t->random->val) : "null";
            cout << t->val << "->" << rVal << (t->next != nullptr ? " " : "");
            t = t->next;
        }
        cout << "\\n";
    }
    return 0;
}
`,
  },
  'clr-h2': {
    python: `
class Node:
    def __init__(self, val=0, prev=None, next=None, random=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.random = random

def clone_and_sort(head):
    if not head: return None
    visited = []
    visited_set = set()
    def dfs(node):
        if not node or node in visited_set: return
        visited.append(node)
        visited_set.add(node)
        dfs(node.next)
        dfs(node.random)
    dfs(head)
    
    cloned = {n: Node(n.val) for n in visited}
    for n in visited:
        cloned[n].random = cloned.get(n.random)
        
    # Sort cloned list
    nodes_list = list(cloned.values())
    nodes_list.sort(key=lambda n: n.val)
    
    for i in range(len(nodes_list)):
        nodes_list[i].prev = nodes_list[i-1] if i > 0 else None
        nodes_list[i].next = nodes_list[i+1] if i < len(nodes_list)-1 else None
        
    return nodes_list[0]

n = int(input())
nodes = {}
data = []
for _ in range(n):
    nid, val, nxt, rnd = map(int, input().split())
    nodes[nid] = Node(val)
    data.append((nid, nxt, rnd))

head = None
if n > 0:
    head = nodes[data[0][0]]
    for nid, nxt, rnd in data:
        curr = nodes[nid]
        if nxt != -1: curr.next = nodes[nxt]
        if rnd != -1: curr.random = nodes[rnd]

res = clone_and_sort(head)
out_f = []
t = res
tail = None
while t:
    out_f.append(str(t.val))
    tail = t
    t = t.next
print(" ".join(out_f))
out_b = []
t = res
prev = None
while t:
    t.prev = prev
    prev = t
    t = t.next
t = tail
while t:
    out_b.append(str(t.val))
    t = t.prev
print(" ".join(out_b))
out_r = []
t = res
while t:
    r_val = str(t.random.val) if t.random else "null"
    out_r.append(f"{t.val}->{r_val}")
    t = t.next
print(" ".join(out_r))
`,
    java: `
import java.util.*;
class Node {
    int val; Node prev; Node next; Node random;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static Node cloneAndSort(Node head) {
        if (head == null) return null;
        List<Node> visited = new ArrayList<>();
        Set<Node> visitedSet = new HashSet<>();
        dfs(head, visited, visitedSet);
        
        Map<Node, Node> cloned = new HashMap<>();
        for (Node n : visited) cloned.put(n, new Node(n.val));
        for (Node n : visited) {
            cloned.get(n).random = cloned.get(n.random);
        }
        
        List<Node> list = new ArrayList<>(cloned.values());
        list.sort(Comparator.comparingInt(n -> n.val));
        
        for (int i = 0; i < list.size(); i++) {
            list.get(i).prev = i > 0 ? list.get(i-1) : null;
            list.get(i).next = i < list.size() - 1 ? list.get(i+1) : null;
        }
        return list.get(0);
    }
    private static void dfs(Node n, List<Node> visited, Set<Node> visitedSet) {
        if (n == null || visitedSet.contains(n)) return;
        visited.add(n);
        visitedSet.add(n);
        dfs(n.next, visited, visitedSet);
        dfs(n.random, visited, visitedSet);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            Map<Integer, Node> nodes = new HashMap<>();
            List<int[]> data = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                int nid = sc.nextInt(); int val = sc.nextInt(); int nxt = sc.nextInt(); int rnd = sc.nextInt();
                nodes.put(nid, new Node(val)); data.add(new int[]{nid, nxt, rnd});
            }
            Node head = null;
            if (n > 0) {
                head = nodes.get(data.get(0)[0]);
                for (int[] d : data) {
                    Node curr = nodes.get(d[0]);
                    if (d[1] != -1) curr.next = nodes.get(d[1]);
                    if (d[2] != -1) curr.random = nodes.get(d[2]);
                }
            }
            Node res = cloneAndSort(head);
            Node tail = null; Node t = res;
            while (t != null) {
                System.out.print(t.val + (t.next != null ? " " : ""));
                tail = t; t = t.next;
            }
            System.out.println();
            t = res; Node prev = null;
            while (t != null) { t.prev = prev; prev = t; t = t.next; }
            t = tail;
            while (t != null) { System.out.print(t.val + (t.prev != null ? " " : "")); t = t.prev; }
            System.out.println();
            t = res;
            while (t != null) {
                String rVal = (t.random != null) ? String.valueOf(t.random.val) : "null";
                System.out.print(t.val + "->" + rVal + (t.next != null ? " " : ""));
                t = t.next;
            }
            System.out.println();
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
struct Node { int val; struct Node* prev; struct Node* next; struct Node* random; };
struct Node* visited[1005];
int visitedCount = 0;
bool isVisited(struct Node* n) {
    for (int i = 0; i < visitedCount; i++) {
        if (visited[i] == n) return true;
    }
    return false;
}
void dfs(struct Node* n) {
    if (n == NULL || isVisited(n)) return;
    visited[visitedCount++] = n;
    dfs(n->next);
    dfs(n->random);
}
struct MapEntry { struct Node* key; struct Node* val; } map[1005];
int mapSize = 0;
struct Node* getCloned(struct Node* key) {
    if (key == NULL) return NULL;
    for (int i = 0; i < mapSize; i++) {
        if (map[i].key == key) return map[i].val;
    }
    return NULL;
}
int cmp(const void* a, const void* b) {
    return (*(struct Node**)a)->val - (*(struct Node**)b)->val;
}
struct Node* cloneAndSort(struct Node* head) {
    if (head == NULL) return NULL;
    visitedCount = 0;
    dfs(head);
    mapSize = 0;
    for (int i = 0; i < visitedCount; i++) {
        struct Node* copy = malloc(sizeof(struct Node));
        copy->val = visited[i]->val;
        copy->prev = copy->next = copy->random = NULL;
        map[mapSize].key = visited[i];
        map[mapSize].val = copy;
        mapSize++;
    }
    for (int i = 0; i < visitedCount; i++) {
        struct Node* copy = getCloned(visited[i]);
        copy->random = getCloned(visited[i]->random);
    }
    
    struct Node* list[1005];
    for (int i = 0; i < mapSize; i++) {
        list[i] = map[i].val;
    }
    qsort(list, mapSize, sizeof(struct Node*), cmp);
    for (int i = 0; i < mapSize; i++) {
        list[i]->prev = i > 0 ? list[i-1] : NULL;
        list[i]->next = i < mapSize - 1 ? list[i+1] : NULL;
    }
    return list[0];
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    struct Node** nodes = malloc((n+100)*sizeof(struct Node*));
    int* ids = malloc(n*sizeof(int)); int* nxts = malloc(n*sizeof(int)); int* rnds = malloc(n*sizeof(int)); int* idMap = calloc(10005, sizeof(int));
    for (int i=0; i<n; i++) {
        int nid, val, nxt, rnd; scanf("%d %d %d %d", &nid, &val, &nxt, &rnd);
        struct Node* node = malloc(sizeof(struct Node)); node->val = val; node->prev = node->next = node->random = NULL;
        nodes[i] = node; idMap[nid] = i; ids[i] = nid; nxts[i] = nxt; rnds[i] = rnd;
    }
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) curr->next = nodes[idMap[nxts[i]]];
            if (rnds[i] != -1) curr->random = nodes[idMap[rnds[i]]];
        }
    }
    struct Node* res = cloneAndSort(head);
    struct Node* t = res; struct Node* tail = NULL;
    while (t != NULL) { printf("%d%s", t->val, t->next != NULL ? " " : ""); tail = t; t = t->next; }
    printf("\\n");
    t = res; struct Node* prev = NULL;
    while (t != NULL) { t->prev = prev; prev = t; t = t->next; }
    t = tail;
    while (t != NULL) { printf("%d%s", t->val, t->prev != NULL ? " " : ""); t = t->prev; }
    printf("\\n");
    t = res;
    while (t != NULL) {
        printf("%d->%s%s", t->val, t->random ? "" : "null", t->random ? "" : (t->next != NULL ? " " : ""));
        if (t->random) printf("%d%s", t->random->val, t->next != NULL ? " " : "");
        t = t->next;
    }
    printf("\\n");
    free(nodes); free(ids); free(nxts); free(rnds); free(idMap);
    return 0;
}
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>
#include <algorithm>
using namespace std;
struct Node { int val; Node* prev; Node* next; Node* random; Node(int x) : val(x), prev(nullptr), next(nullptr), random(nullptr) {} };
void dfs(Node* n, vector<Node*>& visited, unordered_set<Node*>& visitedSet) {
    if (!n || visitedSet.count(n)) return;
    visited.push_back(n);
    visitedSet.insert(n);
    dfs(n->next, visited, visitedSet);
    dfs(n->random, visited, visitedSet);
}
Node* cloneAndSort(Node* head) {
    if (!head) return nullptr;
    vector<Node*> visited;
    unordered_set<Node*> visitedSet;
    dfs(head, visited, visitedSet);
    
    unordered_map<Node*, Node*> cloned;
    for (Node* n : visited) cloned[n] = new Node(n->val);
    for (Node* n : visited) {
        cloned[n]->random = cloned[n->random];
    }
    vector<Node*> list;
    for (auto& pair : cloned) list.push_back(pair.second);
    sort(list.begin(), list.end(), [](Node* a, Node* b) {
        return a->val < b->val;
    });
    for (size_t i = 0; i < list.size(); i++) {
        list[i]->prev = i > 0 ? list[i-1] : nullptr;
        list[i]->next = i < list.size() - 1 ? list[i+1] : nullptr;
    }
    return list[0];
}
int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, rnd; }; vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, rnd; cin >> nid >> val >> nxt >> rnd;
            nodes[nid] = new Node(val); data[i] = {nid, nxt, rnd};
        }
        Node* head = nullptr;
        if (n > 0) {
            head = nodes[data[0].id];
            for (auto& d : data) {
                Node* curr = nodes[d.id];
                if (d.nxt != -1) curr->next = nodes[d.nxt];
                if (d.rnd != -1) curr->random = nodes[d.rnd];
            }
        }
        Node* res = cloneAndSort(head);
        Node* t = res; Node* tail = nullptr;
        while (t != nullptr) { cout << t->val << (t->next != nullptr ? " " : ""); tail = t; t = t->next; }
        cout << "\\n";
        t = res; Node* prev = nullptr;
        while (t != nullptr) { t->prev = prev; prev = t; t = t->next; }
        t = tail;
        while (t != nullptr) { cout << t->val << (t->prev != nullptr ? " " : ""); t = t->prev; }
        cout << "\\n";
        t = res;
        while (t != nullptr) {
            string rVal = (t->random != nullptr) ? to_string(t->random->val) : "null";
            cout << t->val << "->" << rVal << (t->next != nullptr ? " " : "");
            t = t->next;
        }
        cout << "\\n";
    }
    return 0;
}
`,
  },
  'clr-h3': {
    python: `
class Node:
    def __init__(self, val=0, prev=None, next=None, random1=None, random2=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.random1 = random1
        self.random2 = random2

def clone_double_random(head):
    if not head: return None
    visited = []
    visited_set = set()
    def dfs(node):
        if not node or node in visited_set: return
        visited.append(node)
        visited_set.add(node)
        dfs(node.next)
        dfs(node.random1)
        dfs(node.random2)
    dfs(head)
    
    cloned = {n: Node(n.val) for n in visited}
    for i in range(len(visited)):
        cloned[visited[i]].next = cloned[visited[i+1]] if i < len(visited)-1 else None
    for n in visited:
        cloned[n].random1 = cloned.get(n.random1)
        cloned[n].random2 = cloned.get(n.random2)
    return cloned[head]

n = int(input())
nodes = {}
data = []
for _ in range(n):
    nid, val, nxt, rnd1, rnd2 = map(int, input().split())
    nodes[nid] = Node(val)
    data.append((nid, nxt, rnd1, rnd2))

head = None
if n > 0:
    head = nodes[data[0][0]]
    for nid, nxt, rnd1, rnd2 in data:
        curr = nodes[nid]
        if nxt != -1: curr.next = nodes[nxt]
        if rnd1 != -1: curr.random1 = nodes[rnd1]
        if rnd2 != -1: curr.random2 = nodes[rnd2]

res = clone_double_random(head)
out_f = []
t = res
tail = None
while t:
    out_f.append(str(t.val))
    tail = t
    t = t.next
print(" ".join(out_f))
out_b = []
t = res
prev = None
while t:
    t.prev = prev
    prev = t
    t = t.next
t = tail
while t:
    out_b.append(str(t.val))
    t = t.prev
print(" ".join(out_b))
out_r = []
t = res
while t:
    r1 = str(t.random1.val) if t.random1 else "null"
    r2 = str(t.random2.val) if t.random2 else "null"
    out_r.append(f"{t.val}->r1:{r1}->r2:{r2}")
    t = t.next
print(" ".join(out_r))
`,
    java: `
import java.util.*;
class Node {
    int val; Node prev; Node next; Node random1; Node random2;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static Node cloneDoubleRandom(Node head) {
        if (head == null) return null;
        List<Node> visited = new ArrayList<>();
        Set<Node> visitedSet = new HashSet<>();
        dfs(head, visited, visitedSet);
        
        Map<Node, Node> cloned = new HashMap<>();
        for (Node n : visited) cloned.put(n, new Node(n.val));
        for (int i = 0; i < visited.size(); i++) {
            cloned.get(visited.get(i)).next = (i < visited.size() - 1) ? cloned.get(visited.get(i+1)) : null;
        }
        for (Node n : visited) {
            cloned.get(n).random1 = cloned.get(n.random1);
            cloned.get(n).random2 = cloned.get(n.random2);
        }
        return cloned.get(head);
    }
    private static void dfs(Node n, List<Node> visited, Set<Node> visitedSet) {
        if (n == null || visitedSet.contains(n)) return;
        visited.add(n);
        visitedSet.add(n);
        dfs(n.next, visited, visitedSet);
        dfs(n.random1, visited, visitedSet);
        dfs(n.random2, visited, visitedSet);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            Map<Integer, Node> nodes = new HashMap<>();
            List<int[]> data = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                int nid = sc.nextInt(); int val = sc.nextInt(); int nxt = sc.nextInt(); int r1 = sc.nextInt(); int r2 = sc.nextInt();
                nodes.put(nid, new Node(val)); data.add(new int[]{nid, nxt, r1, r2});
            }
            Node head = null;
            if (n > 0) {
                head = nodes.get(data.get(0)[0]);
                for (int[] d : data) {
                    Node curr = nodes.get(d[0]);
                    if (d[1] != -1) curr.next = nodes.get(d[1]);
                    if (d[2] != -1) curr.random1 = nodes.get(d[2]);
                    if (d[3] != -1) curr.random2 = nodes.get(d[3]);
                }
            }
            Node res = cloneDoubleRandom(head);
            Node tail = null; Node t = res;
            while (t != null) {
                System.out.print(t.val + (t.next != null ? " " : ""));
                tail = t; t = t.next;
            }
            System.out.println();
            t = res; Node prev = null;
            while (t != null) { t.prev = prev; prev = t; t = t.next; }
            t = tail;
            while (t != null) { System.out.print(t.val + (t.prev != null ? " " : "")); t = t.prev; }
            System.out.println();
            t = res;
            while (t != null) {
                String r1Val = (t.random1 != null) ? String.valueOf(t.random1.val) : "null";
                String r2Val = (t.random2 != null) ? String.valueOf(t.random2.val) : "null";
                System.out.print(t.val + "->r1:" + r1Val + "->r2:" + r2Val + (t.next != null ? " " : ""));
                t = t.next;
            }
            System.out.println();
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
struct Node { int val; struct Node* prev; struct Node* next; struct Node* random1; struct Node* random2; };
struct Node* visited[1005];
int visitedCount = 0;
bool isVisited(struct Node* n) {
    for (int i = 0; i < visitedCount; i++) {
        if (visited[i] == n) return true;
    }
    return false;
}
void dfs(struct Node* n) {
    if (n == NULL || isVisited(n)) return;
    visited[visitedCount++] = n;
    dfs(n->next);
    dfs(n->random1);
    dfs(n->random2);
}
struct MapEntry { struct Node* key; struct Node* val; } map[1005];
int mapSize = 0;
struct Node* getCloned(struct Node* key) {
    if (key == NULL) return NULL;
    for (int i = 0; i < mapSize; i++) {
        if (map[i].key == key) return map[i].val;
    }
    return NULL;
}
struct Node* cloneDoubleRandom(struct Node* head) {
    if (head == NULL) return NULL;
    visitedCount = 0;
    dfs(head);
    mapSize = 0;
    for (int i = 0; i < visitedCount; i++) {
        struct Node* copy = malloc(sizeof(struct Node));
        copy->val = visited[i]->val;
        copy->prev = copy->next = copy->random1 = copy->random2 = NULL;
        map[mapSize].key = visited[i];
        map[mapSize].val = copy;
        mapSize++;
    }
    for (int i = 0; i < visitedCount; i++) {
        struct Node* copy = getCloned(visited[i]);
        copy->next = i < visitedCount - 1 ? getCloned(visited[i+1]) : NULL;
        copy->random1 = getCloned(visited[i]->random1);
        copy->random2 = getCloned(visited[i]->random2);
    }
    return getCloned(head);
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    struct Node** nodes = malloc((n+100)*sizeof(struct Node*));
    int* ids = malloc(n*sizeof(int)); int* nxts = malloc(n*sizeof(int)); int* r1s = malloc(n*sizeof(int)); int* r2s = malloc(n*sizeof(int)); int* idMap = calloc(10005, sizeof(int));
    for (int i=0; i<n; i++) {
        int nid, val, nxt, r1, r2; scanf("%d %d %d %d %d", &nid, &val, &nxt, &r1, &r2);
        struct Node* node = malloc(sizeof(struct Node)); node->val = val; node->prev = node->next = node->random1 = node->random2 = NULL;
        nodes[i] = node; idMap[nid] = i; ids[i] = nid; nxts[i] = nxt; r1s[i] = r1; r2s[i] = r2;
    }
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) curr->next = nodes[idMap[nxts[i]]];
            if (r1s[i] != -1) curr->random1 = nodes[idMap[r1s[i]]];
            if (r2s[i] != -1) curr->random2 = nodes[idMap[r2s[i]]];
        }
    }
    struct Node* res = cloneDoubleRandom(head);
    struct Node* t = res; struct Node* tail = NULL;
    while (t != NULL) { printf("%d%s", t->val, t->next != NULL ? " " : ""); tail = t; t = t->next; }
    printf("\\n");
    t = res; struct Node* prev = NULL;
    while (t != NULL) { t->prev = prev; prev = t; t = t->next; }
    t = tail;
    while (t != NULL) { printf("%d%s", t->val, t->prev != NULL ? " " : ""); t = t->prev; }
    printf("\\n");
    t = res;
    while (t != NULL) {
        printf("%d->r1:", t->val);
        if (t->random1) printf("%d", t->random1->val);
        else printf("null");
        printf("->r2:");
        if (t->random2) printf("%d", t->random2->val);
        else printf("null");
        if (t->next != NULL) printf(" ");
        t = t->next;
    }
    printf("\\n");
    free(nodes); free(ids); free(nxts); free(r1s); free(r2s); free(idMap);
    return 0;
}
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>
using namespace std;
struct Node { int val; Node* prev; Node* next; Node* random1; Node* random2; Node(int x) : val(x), prev(nullptr), next(nullptr), random1(nullptr), random2(nullptr) {} };
void dfs(Node* n, vector<Node*>& visited, unordered_set<Node*>& visitedSet) {
    if (!n || visitedSet.count(n)) return;
    visited.push_back(n);
    visitedSet.insert(n);
    dfs(n->next, visited, visitedSet);
    dfs(n->random1, visited, visitedSet);
    dfs(n->random2, visited, visitedSet);
}
Node* cloneDoubleRandom(Node* head) {
    if (!head) return nullptr;
    vector<Node*> visited;
    unordered_set<Node*> visitedSet;
    dfs(head, visited, visitedSet);
    unordered_map<Node*, Node*> cloned;
    for (Node* n : visited) cloned[n] = new Node(n->val);
    for (int i = 0; i < (int)visited.size(); i++) {
        cloned[visited[i]]->next = i < (int)visited.size() - 1 ? cloned[visited[i+1]] : nullptr;
    }
    for (Node* n : visited) {
        cloned[n]->random1 = cloned[n->random1];
        cloned[n]->random2 = cloned[n->random2];
    }
    return cloned[head];
}
int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, r1, r2; }; vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, r1, r2; cin >> nid >> val >> nxt >> r1 >> r2;
            nodes[nid] = new Node(val); data[i] = {nid, nxt, r1, r2};
        }
        Node* head = nullptr;
        if (n > 0) {
            head = nodes[data[0].id];
            for (auto& d : data) {
                Node* curr = nodes[d.id];
                if (d.nxt != -1) curr->next = nodes[d.nxt];
                if (d.r1 != -1) curr->random1 = nodes[d.r1];
                if (d.r2 != -1) curr->random2 = nodes[d.r2];
            }
        }
        Node* res = cloneDoubleRandom(head);
        Node* t = res; Node* tail = nullptr;
        while (t != nullptr) { cout << t->val << (t->next != nullptr ? " " : ""); tail = t; t = t->next; }
        cout << "\\n";
        t = res; Node* prev = nullptr;
        while (t != nullptr) { t->prev = prev; prev = t; t = t->next; }
        t = tail;
        while (t != nullptr) { cout << t->val << (t->prev != nullptr ? " " : ""); t = t->prev; }
        cout << "\\n";
        t = res;
        while (t != nullptr) {
            string r1Val = (t->random1 != nullptr) ? to_string(t->random1->val) : "null";
            string r2Val = (t->random2 != nullptr) ? to_string(t->random2->val) : "null";
            cout << t->val << "->r1:" << r1Val << "->r2:" << r2Val << (t->next != nullptr ? " " : "");
            t = t->next;
        }
        cout << "\\n";
    }
    return 0;
}
`,
  },
  'clr-h4': {
    python: `
class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random

def detect_random_cycle(head):
    if not head: return -1
    visited = {}
    curr = head
    step = 0
    while curr:
        if curr in visited:
            return step - visited[curr]
        visited[curr] = step
        curr = curr.random
        step += 1
    return -1

n = int(input())
nodes = {}
data = []
for _ in range(n):
    nid, val, nxt, rnd = map(int, input().split())
    nodes[nid] = Node(val)
    data.append((nid, nxt, rnd))

head = None
if n > 0:
    head = nodes[data[0][0]]
    for nid, nxt, rnd in data:
        curr = nodes[nid]
        if nxt != -1: curr.next = nodes[nxt]
        if rnd != -1: curr.random = nodes[rnd]

print(detect_random_cycle(head))
`,
    java: `
import java.util.*;
class Node {
    int val; Node next; Node random;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static int detectRandomCycle(Node head) {
        if (head == null) return -1;
        Map<Node, Integer> visited = new HashMap<>();
        Node curr = head;
        int step = 0;
        while (curr != null) {
            if (visited.containsKey(curr)) {
                return step - visited.get(curr);
            }
            visited.put(curr, step);
            curr = curr.random;
            step++;
        }
        return -1;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            Map<Integer, Node> nodes = new HashMap<>();
            List<int[]> data = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                int nid = sc.nextInt(); int val = sc.nextInt(); int nxt = sc.nextInt(); int rnd = sc.nextInt();
                nodes.put(nid, new Node(val)); data.add(new int[]{nid, nxt, rnd});
            }
            Node head = null;
            if (n > 0) {
                head = nodes.get(data.get(0)[0]);
                for (int[] d : data) {
                    Node curr = nodes.get(d[0]);
                    if (d[1] != -1) curr.next = nodes.get(d[1]);
                    if (d[2] != -1) curr.random = nodes.get(d[2]);
                }
            }
            System.out.println(detectRandomCycle(head));
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
struct Node { int val; struct Node* next; struct Node* random; };
struct VisitEntry { struct Node* key; int step; } visited[1005];
int visitSize = 0;
int getStep(struct Node* key) {
    for (int i = 0; i < visitSize; i++) {
        if (visited[i].key == key) return visited[i].step;
    }
    return -1;
}
int detectRandomCycle(struct Node* head) {
    if (head == NULL) return -1;
    visitSize = 0;
    struct Node* curr = head;
    int step = 0;
    while (curr != NULL) {
        int s = getStep(curr);
        if (s != -1) {
            return step - s;
        }
        visited[visitSize].key = curr;
        visited[visitSize].step = step;
        visitSize++;
        curr = curr->random;
        step++;
    }
    return -1;
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    struct Node** nodes = malloc((n+100)*sizeof(struct Node*));
    int* ids = malloc(n*sizeof(int)); int* nxts = malloc(n*sizeof(int)); int* rnds = malloc(n*sizeof(int)); int* idMap = calloc(10005, sizeof(int));
    for (int i=0; i<n; i++) {
        int nid, val, nxt, rnd; scanf("%d %d %d %d", &nid, &val, &nxt, &rnd);
        struct Node* node = malloc(sizeof(struct Node)); node->val = val; node->next = node->random = NULL;
        nodes[i] = node; idMap[nid] = i; ids[i] = nid; nxts[i] = nxt; rnds[i] = rnd;
    }
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) curr->next = nodes[idMap[nxts[i]]];
            if (rnds[i] != -1) curr->random = nodes[idMap[rnds[i]]];
        }
    }
    printf("%d\\n", detectRandomCycle(head));
    free(nodes); free(ids); free(nxts); free(rnds); free(idMap);
    return 0;
}
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
struct Node { int val; Node* next; Node* random; Node(int x) : val(x), next(nullptr), random(nullptr) {} };
int detectRandomCycle(Node* head) {
    if (!head) return -1;
    unordered_map<Node*, int> visited;
    Node* curr = head;
    int step = 0;
    while (curr) {
        if (visited.count(curr)) {
            return step - visited[curr];
        }
        visited[curr] = step;
        curr = curr->random;
        step++;
    }
    return -1;
}
int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, rnd; }; vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, rnd; cin >> nid >> val >> nxt >> rnd;
            nodes[nid] = new Node(val); data[i] = {nid, nxt, rnd};
        }
        Node* head = nullptr;
        if (n > 0) {
            head = nodes[data[0].id];
            for (auto& d : data) {
                Node* curr = nodes[d.id];
                if (d.nxt != -1) curr->next = nodes[d.nxt];
                if (d.rnd != -1) curr->random = nodes[d.rnd];
            }
        }
        cout << detectRandomCycle(head) << "\\n";
    }
    return 0;
}
`,
  },
  'clr-h5': {
    python: `
class Node:
    def __init__(self, val=0, prev=None, next=None, random=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.random = random

def reconstruct_random_list(arr, associations):
    if not arr: return None
    nodes = [Node(v) for v in arr]
    for i in range(len(nodes)):
        nodes[i].prev = nodes[i-1] if i > 0 else None
        nodes[i].next = nodes[i+1] if i < len(nodes)-1 else None
    for p_idx, r_idx in associations:
        nodes[p_idx].random = nodes[r_idx]
    return nodes[0]

n = int(input())
arr = list(map(int, input().split())) if n > 0 else []
m = int(input())
associations = []
for _ in range(m):
    p, r = map(int, input().split())
    associations.append((p, r))

res = reconstruct_random_list(arr, associations)
out_f = []
t = res
tail = None
while t:
    out_f.append(str(t.val))
    tail = t
    t = t.next
print(" ".join(out_f))
out_b = []
t = res
prev = None
while t:
    t.prev = prev
    prev = t
    t = t.next
t = tail
while t:
    out_b.append(str(t.val))
    t = t.prev
print(" ".join(out_b))
out_r = []
t = res
while t:
    r_val = str(t.random.val) if t.random else "null"
    out_r.append(f"{t.val}->{r_val}")
    t = t.next
print(" ".join(out_r))
`,
    java: `
import java.util.*;
class Node {
    int val; Node prev; Node next; Node random;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static Node reconstructRandomList(int[] arr, List<int[]> associations) {
        if (arr.length == 0) return null;
        Node[] nodes = new Node[arr.length];
        for (int i = 0; i < arr.length; i++) {
            nodes[i] = new Node(arr[i]);
        }
        for (int i = 0; i < arr.length; i++) {
            nodes[i].prev = i > 0 ? nodes[i-1] : null;
            nodes[i].next = i < arr.length - 1 ? nodes[i+1] : null;
        }
        for (int[] assoc : associations) {
            nodes[assoc[0]].random = nodes[assoc[1]];
        }
        return nodes[0];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            int m = sc.nextInt();
            List<int[]> associations = new ArrayList<>();
            for (int i = 0; i < m; i++) {
                associations.add(new int[]{sc.nextInt(), sc.nextInt()});
            }
            Node res = reconstructRandomList(arr, associations);
            Node tail = null; Node t = res;
            while (t != null) {
                System.out.print(t.val + (t.next != null ? " " : ""));
                tail = t; t = t.next;
            }
            System.out.println();
            t = res; Node prev = null;
            while (t != null) { t.prev = prev; prev = t; t = t.next; }
            t = tail;
            while (t != null) { System.out.print(t.val + (t.prev != null ? " " : "")); t = t.prev; }
            System.out.println();
            t = res;
            while (t != null) {
                String rVal = (t.random != null) ? String.valueOf(t.random.val) : "null";
                System.out.print(t.val + "->" + rVal + (t.next != null ? " " : ""));
                t = t.next;
            }
            System.out.println();
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
struct Node { int val; struct Node* prev; struct Node* next; struct Node* random; };
struct Node* reconstructRandomList(int* arr, int n, int** associations, int m) {
    if (n == 0) return NULL;
    struct Node** nodes = malloc(n * sizeof(struct Node*));
    for (int i = 0; i < n; i++) {
        nodes[i] = malloc(sizeof(struct Node));
        nodes[i]->val = arr[i];
        nodes[i]->prev = nodes[i]->next = nodes[i]->random = NULL;
    }
    for (int i = 0; i < n; i++) {
        nodes[i]->prev = i > 0 ? nodes[i-1] : NULL;
        nodes[i]->next = i < n - 1 ? nodes[i+1] : NULL;
    }
    for (int i = 0; i < m; i++) {
        int p = associations[i][0];
        int r = associations[i][1];
        nodes[p]->random = nodes[r];
    }
    struct Node* res = nodes[0];
    free(nodes);
    return res;
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    int* arr = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    int m; if (scanf("%d", &m) != 1) return 0;
    int** associations = malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        associations[i] = malloc(2 * sizeof(int));
        scanf("%d %d", &associations[i][0], &associations[i][1]);
    }
    struct Node* res = reconstructRandomList(arr, n, associations, m);
    struct Node* t = res; struct Node* tail = NULL;
    while (t != NULL) { printf("%d%s", t->val, t->next != NULL ? " " : ""); tail = t; t = t->next; }
    printf("\\n");
    t = res; struct Node* prev = NULL;
    while (t != NULL) { t->prev = prev; prev = t; t = t->next; }
    t = tail;
    while (t != NULL) { printf("%d%s", t->val, t->prev != NULL ? " " : ""); t = t->prev; }
    printf("\\n");
    t = res;
    while (t != NULL) {
        printf("%d->%s%s", t->val, t->random ? "" : "null", t->random ? "" : (t->next != NULL ? " " : ""));
        if (t->random) printf("%d%s", t->random->val, t->next != NULL ? " " : "");
        t = t->next;
    }
    printf("\\n");
    return 0;
}
`,
    cpp: `
#include <iostream>
#include <vector>
using namespace std;
struct Node { int val; Node* prev; Node* next; Node* random; Node(int val) : val(val), prev(nullptr), next(nullptr), random(nullptr) {} };
Node* reconstructRandomList(const vector<int>& arr, const vector<pair<int, int>>& associations) {
    if (arr.empty()) return nullptr;
    vector<Node*> nodes;
    for (int v : arr) {
        nodes.push_back(new Node(v));
    }
    for (size_t i = 0; i < nodes.size(); i++) {
        nodes[i]->prev = i > 0 ? nodes[i-1] : nullptr;
        nodes[i]->next = i < nodes.size() - 1 ? nodes[i+1] : nullptr;
    }
    for (auto& assoc : associations) {
        nodes[assoc.first]->random = nodes[assoc.second];
    }
    return nodes[0];
}
int main() {
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        int m; cin >> m;
        vector<pair<int, int>> associations(m);
        for (int i = 0; i < m; i++) {
            cin >> associations[i].first >> associations[i].second;
        }
        Node* res = reconstructRandomList(arr, associations);
        Node* t = res; Node* tail = nullptr;
        while (t != nullptr) { cout << t->val << (t->next != nullptr ? " " : ""); tail = t; t = t->next; }
        cout << "\\n";
        t = res; Node* prev = nullptr;
        while (t != nullptr) { t->prev = prev; prev = t; t = t->next; }
        t = tail;
        while (t != nullptr) { cout << t->val << (t->prev != nullptr ? " " : ""); t = t->prev; }
        cout << "\\n";
        t = res;
        while (t != nullptr) {
            string rVal = (t->random != nullptr) ? to_string(t->random->val) : "null";
            cout << t->val << "->" << rVal << (t->next != nullptr ? " " : "");
            t = t->next;
        }
        cout << "\\n";
    }
    return 0;
}
`,
  },
};
