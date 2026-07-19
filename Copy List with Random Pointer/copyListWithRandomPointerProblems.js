export const copyListWithRandomPointerProblems = [
  // --- EASY ---
  {
    id: 'clr-e1',
    title: 'Deep Copy List with Random Pointer',
    difficulty: 'Easy',
    description: 'You are given a linked list where each node has a next pointer and a random pointer. Deep clone the entire list and return its head. The cloned list must be structurally identical but composed of entirely new node instances.',
    constraints: ['The number of nodes is in range [0, 500].', '1 <= Node.val <= 10^5'],
    examples: [
      { input: 'List of 3 nodes: 1->2->3, randoms: 1->3, 2->1, 3->2', output: 'Cloned forward, backward, and random mappings.', explanation: 'Structure clone matches original.' }
    ],
    testCases: [
      { input: '3\n1 10 2 3\n2 20 -1 1\n3 30 -1 2', expectedOutput: '10 20 30\n30 20 10\n10->30 20->10 30->20', hidden: false },
      { input: '1\n1 5 -1 1', expectedOutput: '5\n5\n5->5', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random

def copy_random_list(head):
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

res = copy_random_list(head)
# Verification: print cloned list values, reversed main list, and random mappings
out_f = []
t = res
tail = None
while t:
    out_f.append(str(t.val))
    tail = t
    t = t.next
print(" ".join(out_f))

out_b = []
# Re-link prev pointers to print backward
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
print(" ".join(out_r))`,
      java: `import java.util.*;

class Node {
    int val;
    Node next;
    Node prev;
    Node random;
    Node(int val) { this.val = val; }
}

public class Solution {
    public static Node copyRandomList(Node head) {
        return head;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            Map<Integer, Node> nodes = new HashMap<>();
            List<int[]> data = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                int nid = sc.nextInt();
                int val = sc.nextInt();
                int nxt = sc.nextInt();
                int rnd = sc.nextInt();
                nodes.put(nid, new Node(val));
                data.add(new int[]{nid, nxt, rnd});
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
            Node tail = null;
            Node t = res;
            while (t != null) {
                System.out.print(t.val + (t.next != null ? " " : ""));
                tail = t;
                t = t.next;
            }
            System.out.println();
            t = res;
            Node prev = null;
            while (t != null) {
                t.prev = prev;
                prev = t;
                t = t.next;
            }
            t = tail;
            while (t != null) {
                System.out.print(t.val + (t.prev != null ? " " : ""));
                t = t.prev;
            }
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
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int val;
    struct Node* prev;
    struct Node* next;
    struct Node* random;
};

struct Node* copyRandomList(struct Node* head) {
    return head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct Node** nodes = malloc((n + 100) * sizeof(struct Node*));
    int* ids = malloc(n * sizeof(int));
    int* nxts = malloc(n * sizeof(int));
    int* rnds = malloc(n * sizeof(int));
    int* idMap = calloc(10005, sizeof(int));
    
    for (int i = 0; i < n; i++) {
        int nid, val, nxt, rnd;
        scanf("%d %d %d %d", &nid, &val, &nxt, &rnd);
        struct Node* node = malloc(sizeof(struct Node));
        node->val = val;
        node->prev = node->next = node->random = NULL;
        nodes[i] = node;
        idMap[nid] = i;
        ids[i] = nid;
        nxts[i] = nxt;
        rnds[i] = rnd;
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
    struct Node* t = res;
    struct Node* tail = NULL;
    while (t != NULL) {
        printf("%d%s", t->val, t->next != NULL ? " " : "");
        tail = t;
        t = t->next;
    }
    printf("\\n");
    t = res;
    struct Node* prev = NULL;
    while (t != NULL) {
        t->prev = prev;
        prev = t;
        t = t->next;
    }
    t = tail;
    while (t != NULL) {
        printf("%d%s", t->val, t->prev != NULL ? " " : "");
        t = t->prev;
    }
    printf("\\n");
    t = res;
    while (t != NULL) {
        printf("%d->%s%s", t->val, t->random ? "" : "null", t->random ? "" : (t->next != NULL ? " " : ""));
        if (t->random) {
            printf("%d%s", t->random->val, t->next != NULL ? " " : "");
        }
        t = t->next;
    }
    printf("\\n");
    
    free(nodes); free(ids); free(nxts); free(rnds); free(idMap);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

struct Node {
    int val;
    Node* prev;
    Node* next;
    Node* random;
    Node(int x) : val(x), prev(nullptr), next(nullptr), random(nullptr) {}
};

Node* copyRandomList(Node* head) {
    return head;
}

int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, rnd; };
        vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, rnd;
            cin >> nid >> val >> nxt >> rnd;
            nodes[nid] = new Node(val);
            data[i] = {nid, nxt, rnd};
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
        Node* t = res;
        Node* tail = nullptr;
        while (t != nullptr) {
            cout << t->val << (t->next != nullptr ? " " : "");
            tail = t;
            t = t->next;
        }
        cout << "\\n";
        t = res;
        Node* prev = nullptr;
        while (t != nullptr) {
            t->prev = prev;
            prev = t;
            t = t->next;
        }
        t = tail;
        while (t != nullptr) {
            cout << t->val << (t->prev != nullptr ? " " : "");
            t = t->prev;
        }
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
}`
    }
  },
  {
    id: 'clr-e2',
    title: 'Clone List with Random Pointer using HashMap',
    difficulty: 'Easy',
    description: 'Implement list cloning using an explicit hash table mapping to store relations and associate cloned nodes.',
    constraints: ['The number of nodes is in range [0, 500].'],
    examples: [
      { input: 'List of 2 nodes: 1->2, randoms: 1->2, 2->2', output: 'Cloned representation' }
    ],
    testCases: [
      { input: '2\n1 100 2 2\n2 200 -1 2', expectedOutput: '100 200\n200 100\n100->200 200->200', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random

def clone_with_hashmap(head):
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
print(" ".join(out_r))`,
      java: `import java.util.*;
class Node {
    int val; Node next; Node prev; Node random;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static Node cloneWithHashMap(Node head) { return head; }
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
            while (t != null) {
                System.out.print(t.val + (t.prev != null ? " " : ""));
                t = t.prev;
            }
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
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
struct Node { int val; struct Node* prev; struct Node* next; struct Node* random; };
struct Node* cloneWithHashMap(struct Node* head) { return head; }
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    struct Node** nodes = malloc((n+100)*sizeof(struct Node*));
    int* ids = malloc(n*sizeof(int)); int* nxts = malloc(n*sizeof(int)); int* rnds = malloc(n*sizeof(int)); int* idMap = calloc(10005, sizeof(int));
    for(int i=0; i<n; i++) {
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
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
struct Node { int val; Node* prev; Node* next; Node* random; Node(int x) : val(x), prev(nullptr), next(nullptr), random(nullptr) {} };
Node* cloneWithHashMap(Node* head) { return head; }
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
}`
    }
  },
  {
    id: 'clr-e3',
    title: 'Verify Deep Clone Mismatch',
    difficulty: 'Easy',
    description: 'Given two linked lists (original and copy), write a verification function that checks if the copy is a correct deep copy (structurally equal, matching values, same next/random associations, but entirely different memory addresses). Output "Pass" or "Fail".',
    constraints: ['The number of nodes is in range [0, 500].'],
    examples: [
      { input: 'Original and Copy lists.', output: 'Pass' }
    ],
    testCases: [
      { input: '3\n1 10 2 3\n2 20 -1 1\n3 30 -1 2', expectedOutput: 'Pass', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random

def verify_clone(orig, clone):
    # Should check structural equality and memory address mismatch
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

print("Pass" if verify_clone(head_orig, head_clone) else "Fail")`,
      java: `import java.util.*;
class Node {
    int val; Node next; Node random;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static boolean verifyClone(Node orig, Node clone) {
        return true;
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
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
struct Node { int val; struct Node* next; struct Node* random; };
bool verifyClone(struct Node* orig, struct Node* clone) {
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
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
struct Node { int val; Node* next; Node* random; Node(int x) : val(x), next(nullptr), random(nullptr) {} };
bool verifyClone(Node* orig, Node* clone) {
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
}`
    }
  },
  {
    id: 'clr-e4',
    title: 'Count Nodes in a List with Random Pointer',
    difficulty: 'Easy',
    description: 'Calculate the total number of nodes in a linked list with random pointers (just traversing next pointers until null).',
    constraints: ['The number of nodes is in range [0, 1000].'],
    examples: [
      { input: 'A list with 3 nodes.', output: '3' }
    ],
    testCases: [
      { input: '3\n1 10 2 -1\n2 20 3 -1\n3 30 -1 -1', expectedOutput: '3', hidden: false },
      { input: '0', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random

def count_nodes(head):
    return 0

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

print(count_nodes(head))`,
      java: `import java.util.*;
class Node {
    int val; Node next; Node random;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static int countNodes(Node head) { return 0; }
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
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
struct Node { int val; struct Node* next; struct Node* random; };
int countNodes(struct Node* head) { return 0; }
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
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
struct Node { int val; Node* next; Node* random; Node(int x) : val(x), next(nullptr), random(nullptr) {} };
int countNodes(Node* head) { return 0; }
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
}`
    }
  },
  {
    id: 'clr-e5',
    title: 'Sum Node Values in List with Random Pointer',
    difficulty: 'Easy',
    description: 'Given a linked list with random pointers, return the sum of all node values.',
    constraints: ['The number of nodes is in range [0, 1000].', '-10^4 <= Node.val <= 10^4'],
    examples: [
      { input: 'List with nodes 10->20->30', output: '60' }
    ],
    testCases: [
      { input: '3\n1 10 2 -1\n2 20 3 -1\n3 30 -1 -1', expectedOutput: '60', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random

def sum_nodes(head):
    return 0

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

print(sum_nodes(head))`,
      java: `import java.util.*;
class Node {
    int val; Node next; Node random;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static int sumNodes(Node head) { return 0; }
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
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
struct Node { int val; struct Node* next; struct Node* random; };
int sumNodes(struct Node* head) { return 0; }
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
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
struct Node { int val; Node* next; Node* random; Node(int x) : val(x), next(nullptr), random(nullptr) {} };
int sumNodes(Node* head) { return 0; }
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
}`
    }
  },
  // --- MEDIUM ---
  {
    id: 'clr-m1',
    title: 'Clone List with Value-based Random Pointers',
    difficulty: 'Medium',
    description: 'You are given a linked list with next pointers, but the input random association is given by node value lookup (meaning random pointers are initialized to point to the node with the target value in the list, assuming all node values are unique). Clone the list and link random pointers in the cloned list accordingly.',
    constraints: ['Unique node values.'],
    examples: [
      { input: '3\n1 10 2 30\n2 20 -1 10\n3 30 -1 20', output: 'Forward, backward, random print.' }
    ],
    testCases: [
      { input: '3\n1 10 2 30\n2 20 -1 10\n3 30 -1 20', expectedOutput: '10 20 30\n30 20 10\n10->30 20->10 30->20', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random

def clone_value_random(head):
    return head

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
    # Map values to nodes for original linkage
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
print(" ".join(out_r))`,
      java: `import java.util.*;
class Node {
    int val; Node next; Node prev; Node random;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static Node cloneValueRandom(Node head) { return head; }
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
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
struct Node { int val; struct Node* prev; struct Node* next; struct Node* random; };
struct Node* cloneValueRandom(struct Node* head) { return head; }
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
                // Find node by value
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
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
struct Node { int val; Node* prev; Node* next; Node* random; Node(int x) : val(x), prev(nullptr), next(nullptr), random(nullptr) {} };
Node* cloneValueRandom(Node* head) { return head; }
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
}`
    }
  },
  {
    id: 'clr-m2',
    title: 'Clone List with Random Pointer and Reverse Main List',
    difficulty: 'Medium',
    description: 'Clone the list with random pointers, but the cloned list should have its next pointers reversed (meaning the cloned list goes backwards relative to original next pointers, yet its random pointers must still point to the correct corresponding cloned nodes in the reversed list).',
    constraints: ['The number of nodes is in range [0, 500].'],
    examples: [
      { input: 'Original 1->2->3, cloned reversed 3->2->1 with correct random pointers.', output: 'Output lists.' }
    ],
    testCases: [
      { input: '3\n1 10 2 3\n2 20 -1 1\n3 30 -1 2', expectedOutput: '30 20 10\n10 20 30\n30->20 20->10 10->30', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random

def clone_and_reverse(head):
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
print(" ".join(out_r))`,
      java: `import java.util.*;
class Node {
    int val; Node next; Node prev; Node random;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static Node cloneAndReverse(Node head) { return head; }
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
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
struct Node { int val; struct Node* prev; struct Node* next; struct Node* random; };
struct Node* cloneAndReverse(struct Node* head) { return head; }
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
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
struct Node { int val; Node* prev; Node* next; Node* random; Node(int x) : val(x), prev(nullptr), next(nullptr), random(nullptr) {} };
Node* cloneAndReverse(Node* head) { return head; }
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
}`
    }
  },
  {
    id: 'clr-m3',
    title: 'Filter Nodes in List with Random Pointer',
    difficulty: 'Medium',
    description: 'Deep copy the list, but filter out/delete any nodes that have a value less than X. Relink all cloned next pointers and random pointers. If a random pointer in the copy originally pointed to a node that was deleted, set it to NULL.',
    constraints: ['The number of nodes is in range [0, 500].'],
    examples: [
      { input: 'List 10->20->30 with random 30->10. Filter X=15. Result 20->30 with random 30->null.', output: 'Output lists.' }
    ],
    testCases: [
      { input: '3\n1 10 2 3\n2 20 -1 1\n3 30 -1 2\n15', expectedOutput: '20 30\n30 20\n20->null 30->20', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random

def clone_and_filter(head, x):
    return head

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
print(" ".join(out_r))`,
      java: `import java.util.*;
class Node {
    int val; Node next; Node prev; Node random;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static Node cloneAndFilter(Node head, int x) { return head; }
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
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
struct Node { int val; struct Node* prev; struct Node* next; struct Node* random; };
struct Node* cloneAndFilter(struct Node* head, int x) { return head; }
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
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
struct Node { int val; Node* prev; Node* next; Node* random; Node(int x) : val(x), prev(nullptr), next(nullptr), random(nullptr) {} };
Node* cloneAndFilter(Node* head, int x) { return head; }
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
}`
    }
  },
  {
    id: 'clr-m4',
    title: 'Clone Circular List with Random Pointer',
    difficulty: 'Medium',
    description: 'Clone the list where the next pointers form a cycle (meaning the last node\'s next points back to the head of the list instead of NULL). Cloned list must also be circular.',
    constraints: ['The list contains a single cycle in next pointers.'],
    examples: [
      { input: '3\n1 10 2 3\n2 20 3 1\n3 30 1 2', output: 'Forward 3 elements, backward 3 elements, randoms.' }
    ],
    testCases: [
      { input: '3\n1 10 2 3\n2 20 3 1\n3 30 1 2', expectedOutput: '10 20 30\n30 20 10\n10->30 20->10 30->20', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random

def clone_circular(head):
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

res = clone_circular(head)
out_f = []
t = res
for _ in range(n):
    out_f.append(str(t.val))
    t = t.next
print(" ".join(out_f))

# Re-link prev for backward circular traversal
prev = None
t = res
for _ in range(n + 1):
    t.prev = prev
    prev = t
    t = t.next
tail = res.prev # The last node
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
print(" ".join(out_r))`,
      java: `import java.util.*;
class Node {
    int val; Node next; Node prev; Node random;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static Node cloneCircular(Node head) { return head; }
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
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
struct Node { int val; struct Node* prev; struct Node* next; struct Node* random; };
struct Node* cloneCircular(struct Node* head) { return head; }
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
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
struct Node { int val; Node* prev; Node* next; Node* random; Node(int x) : val(x), prev(nullptr), next(nullptr), random(nullptr) {} };
Node* cloneCircular(Node* head) { return head; }
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
}`
    }
  },
  {
    id: 'clr-m5',
    title: 'Interleave Original and Cloned List with Random Pointer',
    difficulty: 'Medium',
    description: 'Clone the list, then interleave original nodes with their corresponding cloned nodes in a single flat linked list (meaning: original[0] -> cloned[0] -> original[1] -> cloned[1]... original[N-1] -> cloned[N-1] -> NULL). Random pointers must point to correct nodes in the interleaved list (meaning original randoms point to other original nodes, and cloned randoms point to other cloned nodes). Return original head.',
    constraints: ['The original list must end up interleaved with the cloned copy.'],
    examples: [
      { input: 'List 10->20', output: 'Interleaved 10->10->20->20 with randoms.' }
    ],
    testCases: [
      { input: '2\n1 10 2 -1\n2 20 -1 1', expectedOutput: '10 10 20 20\n20 20 10 10\n10->null 10->null 20->10 20->10', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, prev=None, next=None, random=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.random = random

def clone_and_interleave(head):
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

# Verify backward traversal
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
print(" ".join(out_r))`,
      java: `import java.util.*;
class Node {
    int val; Node prev; Node next; Node random;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static Node cloneAndInterleave(Node head) { return head; }
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
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
struct Node { int val; struct Node* prev; struct Node* next; struct Node* random; };
struct Node* cloneAndInterleave(struct Node* head) { return head; }
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
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
struct Node { int val; Node* prev; Node* next; Node* random; Node(int x) : val(x), prev(nullptr), next(nullptr), random(nullptr) {} };
Node* cloneAndInterleave(Node* head) { return head; }
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
}`
    }
  },
  // --- HARD ---
  {
    id: 'clr-h1',
    title: 'Clone Multilevel List with next, child, and random pointers',
    difficulty: 'Hard',
    description: 'Each node in the list has next, child, and random pointers. Deep copy the entire hierarchy preserving all next, child, and random connections.',
    constraints: ['The number of nodes in the list is in range [0, 500].'],
    examples: [
      { input: 'Multilevel nodes with child and random links.', output: 'Cloned hierarchy verification.' }
    ],
    testCases: [
      { input: '3\n1 10 2 3 3\n2 20 -1 -1 1\n3 30 -1 -1 2', expectedOutput: '10 30 20\n20 30 10\n10->30 30->20 20->10', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, next=None, child=None, random=None):
        self.val = val
        self.next = next
        self.child = child
        self.random = random

def clone_multilevel_random(head):
    return head

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
# Verification will flatten DFS and print forward, backward, random mappings
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
print(" ".join(out_r))`,
      java: `import java.util.*;
class Node {
    int val; Node prev; Node next; Node child; Node random;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static Node cloneMultilevelRandom(Node head) { return head; }
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
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
struct Node { int val; struct Node* prev; struct Node* next; struct Node* child; struct Node* random; };
struct Node* cloneMultilevelRandom(struct Node* head) { return head; }
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
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
struct Node { int val; Node* prev; Node* next; Node* child; Node* random; Node(int x) : val(x), prev(nullptr), next(nullptr), child(nullptr), random(nullptr) {} };
Node* cloneMultilevelRandom(Node* head) { return head; }
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
}`
    }
  },
  {
    id: 'clr-h2',
    title: 'Clone List with Random Pointer and Sort Main List',
    difficulty: 'Hard',
    description: 'Clone the list, sort the main list in ascending order of values, and make sure random pointers point to correct sorted cloned node copies.',
    constraints: ['The number of nodes in range [0, 500].'],
    examples: [
      { input: '3\n1 30 2 3\n2 20 -1 1\n3 10 -1 2', output: 'Sorted clone representation.' }
    ],
    testCases: [
      { input: '3\n1 30 2 3\n2 20 -1 1\n3 10 -1 2', expectedOutput: '10 20 30\n30 20 10\n10->20 20->30 30->10', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, prev=None, next=None, random=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.random = random

def clone_and_sort(head):
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
print(" ".join(out_r))`,
      java: `import java.util.*;
class Node {
    int val; Node prev; Node next; Node random;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static Node cloneAndSort(Node head) { return head; }
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
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
struct Node { int val; struct Node* prev; struct Node* next; struct Node* random; };
struct Node* cloneAndSort(struct Node* head) { return head; }
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
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
struct Node { int val; Node* prev; Node* next; Node* random; Node(int x) : val(x), prev(nullptr), next(nullptr), random(nullptr) {} };
Node* cloneAndSort(Node* head) { return head; }
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
}`
    }
  },
  {
    id: 'clr-h3',
    title: 'Clone List with Multiple Random Pointers',
    difficulty: 'Hard',
    description: 'Each node contains a next pointer and TWO random pointers (random1 and random2). Clone the list and link all of them correctly.',
    constraints: ['The number of nodes is in range [0, 500].'],
    examples: [
      { input: 'Nodes with random1 and random2.', output: 'Cloned print verification.' }
    ],
    testCases: [
      { input: '2\n1 10 2 2 1\n2 20 -1 1 2', expectedOutput: '10 20\n20 10\n10->r1:20->r2:10 20->r1:10->r2:20', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, prev=None, next=None, random1=None, random2=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.random1 = random1
        self.random2 = random2

def clone_double_random(head):
    return head

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
print(" ".join(out_r))`,
      java: `import java.util.*;
class Node {
    int val; Node prev; Node next; Node random1; Node random2;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static Node cloneDoubleRandom(Node head) { return head; }
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
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
struct Node { int val; struct Node* prev; struct Node* next; struct Node* random1; struct Node* random2; };
struct Node* cloneDoubleRandom(struct Node* head) { return head; }
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
        printf("%d->r1:%s->r2:%s%s", t->val, t->random1 ? "" : "null", t->random2 ? "" : "null", t->next != NULL ? " " : "");
        if (t->random1) printf("%d", t->random1->val);
        printf("->r2:");
        if (t->random2) printf("%d", t->random2->val);
        if (t->next != NULL) printf(" ");
        t = t->next;
    }
    printf("\\n");
    free(nodes); free(ids); free(nxts); free(r1s); free(r2s); free(idMap);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
struct Node { int val; Node* prev; Node* next; Node* random1; Node* random2; Node(int x) : val(x), prev(nullptr), next(nullptr), random1(nullptr), random2(nullptr) {} };
Node* cloneDoubleRandom(Node* head) { return head; }
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
}`
    }
  },
  {
    id: 'clr-h4',
    title: 'Detect Cycle Length in Random pointer path',
    difficulty: 'Hard',
    description: 'Starting from the head node, traverse the list by following ONLY `random` pointers. Check if there is a cycle in the random pointer path. If a cycle exists, return its length. If there is no cycle (it reaches null), return -1.',
    constraints: ['The number of nodes in the list is in range [0, 500].'],
    examples: [
      { input: '3\n1 10 2 2\n2 20 3 3\n3 30 -1 2', output: '2', explanation: 'Node 2 points to Node 3 which points back to Node 2 (cycle: 20->30->20).' }
    ],
    testCases: [
      { input: '3\n1 10 2 2\n2 20 3 3\n3 30 -1 2', expectedOutput: '2', hidden: false },
      { input: '3\n1 10 2 2\n2 20 3 3\n3 30 -1 -1', expectedOutput: '-1', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random

def detect_random_cycle(head):
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

print(detect_random_cycle(head))`,
      java: `import java.util.*;
class Node {
    int val; Node next; Node random;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static int detectRandomCycle(Node head) { return -1; }
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
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
struct Node { int val; struct Node* next; struct Node* random; };
int detectRandomCycle(struct Node* head) { return -1; }
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
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
struct Node { int val; Node* next; Node* random; Node(int x) : val(x), next(nullptr), random(nullptr) {} };
int detectRandomCycle(Node* head) { return -1; }
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
}`
    }
  },
  {
    id: 'clr-h5',
    title: 'Reconstruct List with Random Pointer',
    difficulty: 'Hard',
    description: 'You are given a list of values of the nodes in a flat linked list, and a list of associations in the format: `node_idx random_node_idx` (using 0-based indices). Reconstruct the list with random pointers and return its head.',
    constraints: ['The number of nodes is in range [0, 500].'],
    examples: [
      { input: '3\n10 20 30\n2\n0 2\n2 1', output: '10 20 30\n30 20 10\n10->30 20->null 30->20', explanation: 'Node at index 0 points to index 2 (30). Node 2 points to index 1 (20). Node 1 points to null.' }
    ],
    testCases: [
      { input: '3\n10 20 30\n2\n0 2\n2 1', expectedOutput: '10 20 30\n30 20 10\n10->30 20->null 30->20', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, prev=None, next=None, random=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.random = random

def reconstruct_random_list(arr, associations):
    # associations is a list of tuples (parent_idx, random_idx)
    return None

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
print(" ".join(out_r))`,
      java: `import java.util.*;
class Node {
    int val; Node prev; Node next; Node random;
    Node(int val) { this.val = val; }
}
public class Solution {
    public static Node reconstructRandomList(int[] arr, List<int[]> associations) { return null; }
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
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
struct Node { int val; struct Node* prev; struct Node* next; struct Node* random; };
struct Node* reconstructRandomList(int* arr, int n, int** associations, int m) { return NULL; }
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
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;
struct Node { int val; Node* prev; Node* next; Node* random; Node(int val) : val(val), prev(nullptr), next(nullptr), random(nullptr) {} };
Node* reconstructRandomList(const vector<int>& arr, const vector<pair<int, int>>& associations) { return nullptr; }
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
}`
    }
  }
];
