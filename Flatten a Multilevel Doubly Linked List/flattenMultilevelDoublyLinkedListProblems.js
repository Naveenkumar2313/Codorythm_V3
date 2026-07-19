export const flattenMultilevelDoublyLinkedListProblems = [
  // --- EASY ---
  {
    id: 'fmd-e1',
    title: 'Flatten Multilevel Doubly Linked List',
    difficulty: 'Easy',
    description: 'Given the head of a multilevel doubly linked list, flatten the list so that all the nodes appear in a single-level, doubly linked list. All child pointers must be set to NULL. The nodes should be ordered in depth-first search (DFS) order.',
    constraints: ['The number of nodes in the list is in the range [0, 1000].', '1 <= Node.val <= 10^5'],
    examples: [
      { input: 'List of 7 nodes with child link.', output: '1 2 3 7 8 4 5', explanation: 'Flattened in DFS order.' }
    ],
    testCases: [
      { input: '7\n1 1 2 3\n2 2 -1 -1\n3 3 4 -1\n4 4 5 -1\n5 5 -1 7\n7 7 8 -1\n8 8 -1 -1', expectedOutput: '1 3 4 5 7 8 2\n2 8 7 5 4 3 1', hidden: false },
      { input: '2\n1 10 -1 2\n2 20 -1 -1', expectedOutput: '10 20\n20 10', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, prev=None, next=None, child=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child

def flatten(head):
    # Write code here
    return head

n = int(input())
nodes = {}
data = []
for _ in range(n):
    nid, val, nxt, ch = map(int, input().split())
    nodes[nid] = Node(val)
    data.append((nid, nxt, ch))

head = None
if n > 0:
    head_id = data[0][0]
    head = nodes[head_id]
    for nid, nxt, ch in data:
        curr = nodes[nid]
        if nxt != -1:
            curr.next = nodes[nxt]
            nodes[nxt].prev = curr
        if ch != -1:
            curr.child = nodes[ch]

res = flatten(head)
out_f = []
t = res
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
print(" ".join(out_b))`,
      java: `import java.util.*;

class Node {
    int val;
    Node prev;
    Node next;
    Node child;
    Node(int val) { this.val = val; }
}

public class Solution {
    public static Node flatten(Node head) {
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
                int ch = sc.nextInt();
                nodes.put(nid, new Node(val));
                data.add(new int[]{nid, nxt, ch});
            }
            Node head = null;
            if (n > 0) {
                int headId = data.get(0)[0];
                head = nodes.get(headId);
                for (int[] d : data) {
                    Node curr = nodes.get(d[0]);
                    if (d[1] != -1) {
                        curr.next = nodes.get(d[1]);
                        nodes.get(d[1]).prev = curr;
                    }
                    if (d[2] != -1) {
                        curr.child = nodes.get(d[2]);
                    }
                }
            }
            Node res = flatten(head);
            Node tail = null;
            Node t = res;
            while (t != null) {
                System.out.print(t.val + (t.next != null ? " " : ""));
                tail = t;
                t = t.next;
            }
            System.out.println();
            t = tail;
            while (t != null) {
                System.out.print(t.val + (t.prev != null ? " " : ""));
                t = t.prev;
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
    struct Node* child;
};

struct Node* flatten(struct Node* head) {
    return head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct Node** nodes = malloc((n + 100) * sizeof(struct Node*));
    int* ids = malloc(n * sizeof(int));
    int* nxts = malloc(n * sizeof(int));
    int* chs = malloc(n * sizeof(int));
    
    // We map id to index. Since ids can be arbitrary positive integers, 
    // we use a simple linear lookup map for testing.
    int* idMap = calloc(10005, sizeof(int));
    
    for (int i = 0; i < n; i++) {
        int nid, val, nxt, ch;
        scanf("%d %d %d %d", &nid, &val, &nxt, &ch);
        struct Node* node = malloc(sizeof(struct Node));
        node->val = val;
        node->prev = NULL;
        node->next = NULL;
        node->child = NULL;
        nodes[i] = node;
        idMap[nid] = i;
        ids[i] = nid;
        nxts[i] = nxt;
        chs[i] = ch;
    }
    
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) {
                int targetIdx = idMap[nxts[i]];
                curr->next = nodes[targetIdx];
                nodes[targetIdx]->prev = curr;
            }
            if (chs[i] != -1) {
                int targetIdx = idMap[chs[i]];
                curr->child = nodes[targetIdx];
            }
        }
    }
    
    struct Node* res = flatten(head);
    struct Node* t = res;
    struct Node* tail = NULL;
    while (t != NULL) {
        printf("%d%s", t->val, t->next != NULL ? " " : "");
        tail = t;
        t = t->next;
    }
    printf("\\n");
    t = tail;
    while (t != NULL) {
        printf("%d%s", t->val, t->prev != NULL ? " " : "");
        t = t->prev;
    }
    printf("\\n");
    
    free(nodes);
    free(ids);
    free(nxts);
    free(chs);
    free(idMap);
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
    Node* child;
    Node(int x) : val(x), prev(nullptr), next(nullptr), child(nullptr) {}
};

Node* flatten(Node* head) {
    return head;
}

int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, ch; };
        vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, ch;
            cin >> nid >> val >> nxt >> ch;
            nodes[nid] = new Node(val);
            data[i] = {nid, nxt, ch};
        }
        Node* head = nullptr;
        if (n > 0) {
            head = nodes[data[0].id];
            for (auto& d : data) {
                Node* curr = nodes[d.id];
                if (d.nxt != -1) {
                    curr->next = nodes[d.nxt];
                    nodes[d.nxt]->prev = curr;
                }
                if (d.ch != -1) {
                    curr->child = nodes[d.ch];
                }
            }
        }
        Node* res = flatten(head);
        Node* t = res;
        Node* tail = nullptr;
        while (t != nullptr) {
            cout << t->val << (t->next != nullptr ? " " : "");
            tail = t;
            t = t->next;
        }
        cout << "\\n";
        t = tail;
        while (t != nullptr) {
            cout << t->val << (t->prev != nullptr ? " " : "");
            t = t->prev;
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'fmd-e2',
    title: 'Flatten Singly Multilevel Linked List',
    difficulty: 'Easy',
    description: 'Given the head of a singly multilevel linked list (where nodes only have `next` and `child` pointers, no `prev`), flatten the list in depth-first search (DFS) order and return the flattened head.',
    constraints: ['The number of nodes in the list is in the range [0, 1000].', '1 <= Node.val <= 10^5'],
    examples: [
      { input: 'List of 3 nodes with child.', output: '1 2 3', explanation: 'Flattened in DFS order.' }
    ],
    testCases: [
      { input: '3\n1 10 2 3\n2 20 -1 -1\n3 30 -1 -1', expectedOutput: '10 30 20', hidden: false },
      { input: '0', expectedOutput: '', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, next=None, child=None):
        self.val = val
        self.next = next
        self.child = child

def flatten_singly(head):
    return head

n = int(input())
nodes = {}
data = []
for _ in range(n):
    nid, val, nxt, ch = map(int, input().split())
    nodes[nid] = Node(val)
    data.append((nid, nxt, ch))

head = None
if n > 0:
    head = nodes[data[0][0]]
    for nid, nxt, ch in data:
        curr = nodes[nid]
        if nxt != -1: curr.next = nodes[nxt]
        if ch != -1: curr.child = nodes[ch]

res = flatten_singly(head)
out = []
t = res
while t:
    out.append(str(t.val))
    t = t.next
print(" ".join(out))`,
      java: `import java.util.*;

class Node {
    int val;
    Node next;
    Node child;
    Node(int val) { this.val = val; }
}

public class Solution {
    public static Node flattenSingly(Node head) {
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
                int ch = sc.nextInt();
                nodes.put(nid, new Node(val));
                data.add(new int[]{nid, nxt, ch});
            }
            Node head = null;
            if (n > 0) {
                head = nodes.get(data.get(0)[0]);
                for (int[] d : data) {
                    Node curr = nodes.get(d[0]);
                    if (d[1] != -1) curr.next = nodes.get(d[1]);
                    if (d[2] != -1) curr.child = nodes.get(d[2]);
                }
            }
            Node res = flattenSingly(head);
            Node t = res;
            while (t != null) {
                System.out.print(t.val + (t.next != null ? " " : ""));
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
    struct Node* next;
    struct Node* child;
};

struct Node* flattenSingly(struct Node* head) {
    return head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct Node** nodes = malloc((n + 100) * sizeof(struct Node*));
    int* ids = malloc(n * sizeof(int));
    int* nxts = malloc(n * sizeof(int));
    int* chs = malloc(n * sizeof(int));
    int* idMap = calloc(10005, sizeof(int));
    
    for (int i = 0; i < n; i++) {
        int nid, val, nxt, ch;
        scanf("%d %d %d %d", &nid, &val, &nxt, &ch);
        struct Node* node = malloc(sizeof(struct Node));
        node->val = val;
        node->next = NULL;
        node->child = NULL;
        nodes[i] = node;
        idMap[nid] = i;
        ids[i] = nid;
        nxts[i] = nxt;
        chs[i] = ch;
    }
    
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) curr->next = nodes[idMap[nxts[i]]];
            if (chs[i] != -1) curr->child = nodes[idMap[chs[i]]];
        }
    }
    
    struct Node* res = flattenSingly(head);
    struct Node* t = res;
    while (t != NULL) {
        printf("%d%s", t->val, t->next != NULL ? " " : "");
        t = t->next;
    }
    printf("\\n");
    
    free(nodes);
    free(ids);
    free(nxts);
    free(chs);
    free(idMap);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

struct Node {
    int val;
    Node* next;
    Node* child;
    Node(int x) : val(x), next(nullptr), child(nullptr) {}
};

Node* flattenSingly(Node* head) {
    return head;
}

int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, ch; };
        vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, ch;
            cin >> nid >> val >> nxt >> ch;
            nodes[nid] = new Node(val);
            data[i] = {nid, nxt, ch};
        }
        Node* head = nullptr;
        if (n > 0) {
            head = nodes[data[0].id];
            for (auto& d : data) {
                Node* curr = nodes[d.id];
                if (d.nxt != -1) curr->next = nodes[d.nxt];
                if (d.ch != -1) curr->child = nodes[d.ch];
            }
        }
        Node* res = flattenSingly(head);
        Node* t = res;
        while (t != nullptr) {
            cout << t->val << (t->next != nullptr ? " " : "");
            t = t->next;
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'fmd-e3',
    title: 'Count Max Child Levels',
    difficulty: 'Easy',
    description: 'Given the head of a multilevel linked list, return the maximum depth of levels in the hierarchy. A single-level list with no child pointers has level depth 1.',
    constraints: ['The number of nodes in the list is in the range [0, 1000].'],
    examples: [
      { input: 'List with maximum child depth 3.', output: '3' }
    ],
    testCases: [
      { input: '7\n1 1 2 3\n2 2 -1 -1\n3 3 4 -1\n4 4 5 -1\n5 5 -1 7\n7 7 8 -1\n8 8 -1 -1', expectedOutput: '3', hidden: false },
      { input: '0', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, next=None, child=None):
        self.val = val
        self.next = next
        self.child = child

def max_levels(head):
    return 0

n = int(input())
nodes = {}
data = []
for _ in range(n):
    nid, val, nxt, ch = map(int, input().split())
    nodes[nid] = Node(val)
    data.append((nid, nxt, ch))

head = None
if n > 0:
    head = nodes[data[0][0]]
    for nid, nxt, ch in data:
        curr = nodes[nid]
        if nxt != -1: curr.next = nodes[nxt]
        if ch != -1: curr.child = nodes[ch]

print(max_levels(head))`,
      java: `import java.util.*;

class Node {
    int val;
    Node next;
    Node child;
    Node(int val) { this.val = val; }
}

public class Solution {
    public static int maxLevels(Node head) {
        return 0;
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
                int ch = sc.nextInt();
                nodes.put(nid, new Node(val));
                data.add(new int[]{nid, nxt, ch});
            }
            Node head = null;
            if (n > 0) {
                head = nodes.get(data.get(0)[0]);
                for (int[] d : data) {
                    Node curr = nodes.get(d[0]);
                    if (d[1] != -1) curr.next = nodes.get(d[1]);
                    if (d[2] != -1) curr.child = nodes.get(d[2]);
                }
            }
            System.out.println(maxLevels(head));
        } else {
            System.out.println(0);
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int val;
    struct Node* next;
    struct Node* child;
};

int maxLevels(struct Node* head) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) {
        printf("0\\n");
        return 0;
    }
    struct Node** nodes = malloc((n + 100) * sizeof(struct Node*));
    int* ids = malloc(n * sizeof(int));
    int* nxts = malloc(n * sizeof(int));
    int* chs = malloc(n * sizeof(int));
    int* idMap = calloc(10005, sizeof(int));
    
    for (int i = 0; i < n; i++) {
        int nid, val, nxt, ch;
        scanf("%d %d %d %d", &nid, &val, &nxt, &ch);
        struct Node* node = malloc(sizeof(struct Node));
        node->val = val;
        node->next = NULL;
        node->child = NULL;
        nodes[i] = node;
        idMap[nid] = i;
        ids[i] = nid;
        nxts[i] = nxt;
        chs[i] = ch;
    }
    
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) curr->next = nodes[idMap[nxts[i]]];
            if (chs[i] != -1) curr->child = nodes[idMap[chs[i]]];
        }
    }
    
    printf("%d\\n", maxLevels(head));
    
    free(nodes);
    free(ids);
    free(nxts);
    free(chs);
    free(idMap);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;

struct Node {
    int val;
    Node* next;
    Node* child;
    Node(int x) : val(x), next(nullptr), child(nullptr) {}
};

int maxLevels(Node* head) {
    return 0;
}

int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, ch; };
        vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, ch;
            cin >> nid >> val >> nxt >> ch;
            nodes[nid] = new Node(val);
            data[i] = {nid, nxt, ch};
        }
        Node* head = nullptr;
        if (n > 0) {
            head = nodes[data[0].id];
            for (auto& d : data) {
                Node* curr = nodes[d.id];
                if (d.nxt != -1) curr->next = nodes[d.nxt];
                if (d.ch != -1) curr->child = nodes[d.ch];
            }
        }
        cout << maxLevels(head) << "\\n";
    } else {
        cout << 0 << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'fmd-e4',
    title: 'Sum Multilevel List',
    difficulty: 'Easy',
    description: 'Given the head of a multilevel linked list, calculate and return the sum of all values across all nodes in the hierarchical list.',
    constraints: ['The number of nodes in the list is in the range [0, 1000].', '-1000 <= Node.val <= 1000'],
    examples: [
      { input: 'Multilevel list containing 1, 2, 3.', output: '6' }
    ],
    testCases: [
      { input: '3\n1 10 2 3\n2 20 -1 -1\n3 30 -1 -1', expectedOutput: '60', hidden: false },
      { input: '0', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, next=None, child=None):
        self.val = val
        self.next = next
        self.child = child

def sum_multilevel(head):
    return 0

n = int(input())
nodes = {}
data = []
for _ in range(n):
    nid, val, nxt, ch = map(int, input().split())
    nodes[nid] = Node(val)
    data.append((nid, nxt, ch))

head = None
if n > 0:
    head = nodes[data[0][0]]
    for nid, nxt, ch in data:
        curr = nodes[nid]
        if nxt != -1: curr.next = nodes[nxt]
        if ch != -1: curr.child = nodes[ch]

print(sum_multilevel(head))`,
      java: `import java.util.*;

class Node {
    int val;
    Node next;
    Node child;
    Node(int val) { this.val = val; }
}

public class Solution {
    public static int sumMultilevel(Node head) {
        return 0;
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
                int ch = sc.nextInt();
                nodes.put(nid, new Node(val));
                data.add(new int[]{nid, nxt, ch});
            }
            Node head = null;
            if (n > 0) {
                head = nodes.get(data.get(0)[0]);
                for (int[] d : data) {
                    Node curr = nodes.get(d[0]);
                    if (d[1] != -1) curr.next = nodes.get(d[1]);
                    if (d[2] != -1) curr.child = nodes.get(d[2]);
                }
            }
            System.out.println(sumMultilevel(head));
        } else {
            System.out.println(0);
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int val;
    struct Node* next;
    struct Node* child;
};

int sumMultilevel(struct Node* head) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) {
        printf("0\\n");
        return 0;
    }
    struct Node** nodes = malloc((n + 100) * sizeof(struct Node*));
    int* ids = malloc(n * sizeof(int));
    int* nxts = malloc(n * sizeof(int));
    int* chs = malloc(n * sizeof(int));
    int* idMap = calloc(10005, sizeof(int));
    
    for (int i = 0; i < n; i++) {
        int nid, val, nxt, ch;
        scanf("%d %d %d %d", &nid, &val, &nxt, &ch);
        struct Node* node = malloc(sizeof(struct Node));
        node->val = val;
        node->next = NULL;
        node->child = NULL;
        nodes[i] = node;
        idMap[nid] = i;
        ids[i] = nid;
        nxts[i] = nxt;
        chs[i] = ch;
    }
    
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) curr->next = nodes[idMap[nxts[i]]];
            if (chs[i] != -1) curr->child = nodes[idMap[chs[i]]];
        }
    }
    
    printf("%d\\n", sumMultilevel(head));
    
    free(nodes);
    free(ids);
    free(nxts);
    free(chs);
    free(idMap);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

struct Node {
    int val;
    Node* next;
    Node* child;
    Node(int x) : val(x), next(nullptr), child(nullptr) {}
};

int sumMultilevel(Node* head) {
    return 0;
}

int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, ch; };
        vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, ch;
            cin >> nid >> val >> nxt >> ch;
            nodes[nid] = new Node(val);
            data[i] = {nid, nxt, ch};
        }
        Node* head = nullptr;
        if (n > 0) {
            head = nodes[data[0].id];
            for (auto& d : data) {
                Node* curr = nodes[d.id];
                if (d.nxt != -1) curr->next = nodes[d.nxt];
                if (d.ch != -1) curr->child = nodes[d.ch];
            }
        }
        cout << sumMultilevel(head) << "\\n";
    } else {
        cout << 0 << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'fmd-e5',
    title: 'Find First Node with Child',
    difficulty: 'Easy',
    description: 'Find the first node in a depth-first search (DFS) order of the multilevel list that has a non-null `child` pointer. Return its value. If no node has a child, return `-1`.',
    constraints: ['The number of nodes in the list is in the range [0, 1000].', '1 <= Node.val <= 10^5'],
    examples: [
      { input: 'List of 3 nodes, 2nd node has child.', output: '2', explanation: 'Node with val 2 has a child.' }
    ],
    testCases: [
      { input: '3\n1 10 2 3\n2 20 -1 -1\n3 30 -1 -1', expectedOutput: '10', hidden: false },
      { input: '2\n1 10 2 -1\n2 20 -1 -1', expectedOutput: '-1', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, next=None, child=None):
        self.val = val
        self.next = next
        self.child = child

def first_node_with_child(head):
    return -1

n = int(input())
nodes = {}
data = []
for _ in range(n):
    nid, val, nxt, ch = map(int, input().split())
    nodes[nid] = Node(val)
    data.append((nid, nxt, ch))

head = None
if n > 0:
    head = nodes[data[0][0]]
    for nid, nxt, ch in data:
        curr = nodes[nid]
        if nxt != -1: curr.next = nodes[nxt]
        if ch != -1: curr.child = nodes[ch]

print(first_node_with_child(head))`,
      java: `import java.util.*;

class Node {
    int val;
    Node next;
    Node child;
    Node(int val) { this.val = val; }
}

public class Solution {
    public static int firstNodeWithChild(Node head) {
        return -1;
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
                int ch = sc.nextInt();
                nodes.put(nid, new Node(val));
                data.add(new int[]{nid, nxt, ch});
            }
            Node head = null;
            if (n > 0) {
                head = nodes.get(data.get(0)[0]);
                for (int[] d : data) {
                    Node curr = nodes.get(d[0]);
                    if (d[1] != -1) curr.next = nodes.get(d[1]);
                    if (d[2] != -1) curr.child = nodes.get(d[2]);
                }
            }
            System.out.println(firstNodeWithChild(head));
        } else {
            System.out.println(-1);
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int val;
    struct Node* next;
    struct Node* child;
};

int firstNodeWithChild(struct Node* head) {
    return -1;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) {
        printf("-1\\n");
        return 0;
    }
    struct Node** nodes = malloc((n + 100) * sizeof(struct Node*));
    int* ids = malloc(n * sizeof(int));
    int* nxts = malloc(n * sizeof(int));
    int* chs = malloc(n * sizeof(int));
    int* idMap = calloc(10005, sizeof(int));
    
    for (int i = 0; i < n; i++) {
        int nid, val, nxt, ch;
        scanf("%d %d %d %d", &nid, &val, &nxt, &ch);
        struct Node* node = malloc(sizeof(struct Node));
        node->val = val;
        node->next = NULL;
        node->child = NULL;
        nodes[i] = node;
        idMap[nid] = i;
        ids[i] = nid;
        nxts[i] = nxt;
        chs[i] = ch;
    }
    
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) curr->next = nodes[idMap[nxts[i]]];
            if (chs[i] != -1) curr->child = nodes[idMap[chs[i]]];
        }
    }
    
    printf("%d\\n", firstNodeWithChild(head));
    
    free(nodes);
    free(ids);
    free(nxts);
    free(chs);
    free(idMap);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

struct Node {
    int val;
    Node* next;
    Node* child;
    Node(int x) : val(x), next(nullptr), child(nullptr) {}
};

int firstNodeWithChild(Node* head) {
    return -1;
}

int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, ch; };
        vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, ch;
            cin >> nid >> val >> nxt >> ch;
            nodes[nid] = new Node(val);
            data[i] = {nid, nxt, ch};
        }
        Node* head = nullptr;
        if (n > 0) {
            head = nodes[data[0].id];
            for (auto& d : data) {
                Node* curr = nodes[d.id];
                if (d.nxt != -1) curr->next = nodes[d.nxt];
                if (d.ch != -1) curr->child = nodes[d.ch];
            }
        }
        cout << firstNodeWithChild(head) << "\\n";
    } else {
        cout << -1 << "\\n";
    }
    return 0;
}`
    }
  },
  // --- MEDIUM ---
  {
    id: 'fmd-m1',
    title: 'Flatten Multilevel Doubly Linked List BFS',
    difficulty: 'Medium',
    description: 'Flatten the multilevel doubly linked list in breadth-first search (BFS) order. That is, flatten level by level: first all nodes of level 1, then all nodes of level 2, then level 3, etc. Link them into a single doubly linked list.',
    constraints: ['The number of nodes in the list is in the range [0, 1000].', '1 <= Node.val <= 10^5'],
    examples: [
      { input: 'A 2-level structure.', output: '1 2 3 7 8', explanation: 'All level 1 nodes first, then level 2.' }
    ],
    testCases: [
      { input: '7\n1 1 2 3\n2 2 -1 -1\n3 3 4 -1\n4 4 5 -1\n5 5 -1 7\n7 7 8 -1\n8 8 -1 -1', expectedOutput: '1 2 3 4 5 7 8\n8 7 5 4 3 2 1', hidden: false },
      { input: '2\n1 10 -1 2\n2 20 -1 -1', expectedOutput: '10 20\n20 10', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, prev=None, next=None, child=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child

def flatten_bfs(head):
    return head

n = int(input())
nodes = {}
data = []
for _ in range(n):
    nid, val, nxt, ch = map(int, input().split())
    nodes[nid] = Node(val)
    data.append((nid, nxt, ch))

head = None
if n > 0:
    head = nodes[data[0][0]]
    for nid, nxt, ch in data:
        curr = nodes[nid]
        if nxt != -1:
            curr.next = nodes[nxt]
            nodes[nxt].prev = curr
        if ch != -1:
            curr.child = nodes[ch]

res = flatten_bfs(head)
out_f = []
t = res
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
print(" ".join(out_b))`,
      java: `import java.util.*;

class Node {
    int val;
    Node prev;
    Node next;
    Node child;
    Node(int val) { this.val = val; }
}

public class Solution {
    public static Node flattenBFS(Node head) {
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
                int ch = sc.nextInt();
                nodes.put(nid, new Node(val));
                data.add(new int[]{nid, nxt, ch});
            }
            Node head = null;
            if (n > 0) {
                int headId = data.get(0)[0];
                head = nodes.get(headId);
                for (int[] d : data) {
                    Node curr = nodes.get(d[0]);
                    if (d[1] != -1) {
                        curr.next = nodes.get(d[1]);
                        nodes.get(d[1]).prev = curr;
                    }
                    if (d[2] != -1) {
                        curr.child = nodes.get(d[2]);
                    }
                }
            }
            Node res = flattenBFS(head);
            Node tail = null;
            Node t = res;
            while (t != null) {
                System.out.print(t.val + (t.next != null ? " " : ""));
                tail = t;
                t = t.next;
            }
            System.out.println();
            t = tail;
            while (t != null) {
                System.out.print(t.val + (t.prev != null ? " " : ""));
                t = t.prev;
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
    struct Node* child;
};

struct Node* flattenBFS(struct Node* head) {
    return head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct Node** nodes = malloc((n + 100) * sizeof(struct Node*));
    int* ids = malloc(n * sizeof(int));
    int* nxts = malloc(n * sizeof(int));
    int* chs = malloc(n * sizeof(int));
    int* idMap = calloc(10005, sizeof(int));
    
    for (int i = 0; i < n; i++) {
        int nid, val, nxt, ch;
        scanf("%d %d %d %d", &nid, &val, &nxt, &ch);
        struct Node* node = malloc(sizeof(struct Node));
        node->val = val;
        node->prev = NULL;
        node->next = NULL;
        node->child = NULL;
        nodes[i] = node;
        idMap[nid] = i;
        ids[i] = nid;
        nxts[i] = nxt;
        chs[i] = ch;
    }
    
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) {
                int targetIdx = idMap[nxts[i]];
                curr->next = nodes[targetIdx];
                nodes[targetIdx]->prev = curr;
            }
            if (chs[i] != -1) {
                int targetIdx = idMap[chs[i]];
                curr->child = nodes[targetIdx];
            }
        }
    }
    
    struct Node* res = flattenBFS(head);
    struct Node* t = res;
    struct Node* tail = NULL;
    while (t != NULL) {
        printf("%d%s", t->val, t->next != NULL ? " " : "");
        tail = t;
        t = t->next;
    }
    printf("\\n");
    t = tail;
    while (t != NULL) {
        printf("%d%s", t->val, t->prev != NULL ? " " : "");
        t = t->prev;
    }
    printf("\\n");
    
    free(nodes);
    free(ids);
    free(nxts);
    free(chs);
    free(idMap);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <queue>
using namespace std;

struct Node {
    int val;
    Node* prev;
    Node* next;
    Node* child;
    Node(int x) : val(x), prev(nullptr), next(nullptr), child(nullptr) {}
};

Node* flattenBFS(Node* head) {
    return head;
}

int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, ch; };
        vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, ch;
            cin >> nid >> val >> nxt >> ch;
            nodes[nid] = new Node(val);
            data[i] = {nid, nxt, ch};
        }
        Node* head = nullptr;
        if (n > 0) {
            head = nodes[data[0].id];
            for (auto& d : data) {
                Node* curr = nodes[d.id];
                if (d.nxt != -1) {
                    curr->next = nodes[d.nxt];
                    nodes[d.nxt]->prev = curr;
                }
                if (d.ch != -1) {
                    curr->child = nodes[d.ch];
                }
            }
        }
        Node* res = flattenBFS(head);
        Node* t = res;
        Node* tail = nullptr;
        while (t != nullptr) {
            cout << t->val << (t->next != nullptr ? " " : "");
            tail = t;
            t = t->next;
        }
        cout << "\\n";
        t = tail;
        while (t != nullptr) {
            cout << t->val << (t->prev != nullptr ? " " : "");
            t = t->prev;
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'fmd-m2',
    title: 'Flatten and Sort Multilevel Doubly Linked List',
    difficulty: 'Medium',
    description: 'Flatten the multilevel doubly linked list, and then sort the resulting flat doubly linked list in ascending order of values. Return the head of the sorted list.',
    constraints: ['The number of nodes in the list is in the range [0, 1000].', '-10^5 <= Node.val <= 10^5'],
    examples: [
      { input: 'A 2-level list with values 3, 1, 4.', output: '1 3 4', explanation: 'Flattened and sorted.' }
    ],
    testCases: [
      { input: '3\n1 30 2 3\n2 10 -1 -1\n3 20 -1 -1', expectedOutput: '10 20 30\n30 20 10', hidden: false },
      { input: '0', expectedOutput: '', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, prev=None, next=None, child=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child

def flatten_and_sort(head):
    return head

n = int(input())
nodes = {}
data = []
for _ in range(n):
    nid, val, nxt, ch = map(int, input().split())
    nodes[nid] = Node(val)
    data.append((nid, nxt, ch))

head = None
if n > 0:
    head = nodes[data[0][0]]
    for nid, nxt, ch in data:
        curr = nodes[nid]
        if nxt != -1:
            curr.next = nodes[nxt]
            nodes[nxt].prev = curr
        if ch != -1:
            curr.child = nodes[ch]

res = flatten_and_sort(head)
out_f = []
t = res
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
print(" ".join(out_b))`,
      java: `import java.util.*;

class Node {
    int val;
    Node prev;
    Node next;
    Node child;
    Node(int val) { this.val = val; }
}

public class Solution {
    public static Node flattenAndSort(Node head) {
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
                int ch = sc.nextInt();
                nodes.put(nid, new Node(val));
                data.add(new int[]{nid, nxt, ch});
            }
            Node head = null;
            if (n > 0) {
                int headId = data.get(0)[0];
                head = nodes.get(headId);
                for (int[] d : data) {
                    Node curr = nodes.get(d[0]);
                    if (d[1] != -1) {
                        curr.next = nodes.get(d[1]);
                        nodes.get(d[1]).prev = curr;
                    }
                    if (d[2] != -1) {
                        curr.child = nodes.get(d[2]);
                    }
                }
            }
            Node res = flattenAndSort(head);
            Node tail = null;
            Node t = res;
            while (t != null) {
                System.out.print(t.val + (t.next != null ? " " : ""));
                tail = t;
                t = t.next;
            }
            System.out.println();
            t = tail;
            while (t != null) {
                System.out.print(t.val + (t.prev != null ? " " : ""));
                t = t.prev;
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
    struct Node* child;
};

struct Node* flattenAndSort(struct Node* head) {
    return head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct Node** nodes = malloc((n + 100) * sizeof(struct Node*));
    int* ids = malloc(n * sizeof(int));
    int* nxts = malloc(n * sizeof(int));
    int* chs = malloc(n * sizeof(int));
    int* idMap = calloc(10005, sizeof(int));
    
    for (int i = 0; i < n; i++) {
        int nid, val, nxt, ch;
        scanf("%d %d %d %d", &nid, &val, &nxt, &ch);
        struct Node* node = malloc(sizeof(struct Node));
        node->val = val;
        node->prev = NULL;
        node->next = NULL;
        node->child = NULL;
        nodes[i] = node;
        idMap[nid] = i;
        ids[i] = nid;
        nxts[i] = nxt;
        chs[i] = ch;
    }
    
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) {
                int targetIdx = idMap[nxts[i]];
                curr->next = nodes[targetIdx];
                nodes[targetIdx]->prev = curr;
            }
            if (chs[i] != -1) {
                int targetIdx = idMap[chs[i]];
                curr->child = nodes[targetIdx];
            }
        }
    }
    
    struct Node* res = flattenAndSort(head);
    struct Node* t = res;
    struct Node* tail = NULL;
    while (t != NULL) {
        printf("%d%s", t->val, t->next != NULL ? " " : "");
        tail = t;
        t = t->next;
    }
    printf("\\n");
    t = tail;
    while (t != NULL) {
        printf("%d%s", t->val, t->prev != NULL ? " " : "");
        t = t->prev;
    }
    printf("\\n");
    
    free(nodes);
    free(ids);
    free(nxts);
    free(chs);
    free(idMap);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;

struct Node {
    int val;
    Node* prev;
    Node* next;
    Node* child;
    Node(int x) : val(x), prev(nullptr), next(nullptr), child(nullptr) {}
};

Node* flattenAndSort(Node* head) {
    return head;
}

int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, ch; };
        vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, ch;
            cin >> nid >> val >> nxt >> ch;
            nodes[nid] = new Node(val);
            data[i] = {nid, nxt, ch};
        }
        Node* head = nullptr;
        if (n > 0) {
            head = nodes[data[0].id];
            for (auto& d : data) {
                Node* curr = nodes[d.id];
                if (d.nxt != -1) {
                    curr->next = nodes[d.nxt];
                    nodes[d.nxt]->prev = curr;
                }
                if (d.ch != -1) {
                    curr->child = nodes[d.ch];
                }
            }
        }
        Node* res = flattenAndSort(head);
        Node* t = res;
        Node* tail = nullptr;
        while (t != nullptr) {
            cout << t->val << (t->next != nullptr ? " " : "");
            tail = t;
            t = t->next;
        }
        cout << "\\n";
        t = tail;
        while (t != nullptr) {
            cout << t->val << (t->prev != nullptr ? " " : "");
            t = t->prev;
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'fmd-m3',
    title: 'Remove Nodes with No Children',
    difficulty: 'Medium',
    description: 'Traverse the multilevel linked list and keep only the nodes that have a non-null `child` pointer. Link them together in a single-level doubly linked list in the order they are visited in DFS. Return the head of the new list.',
    constraints: ['The number of nodes in the list is in the range [0, 1000].', '1 <= Node.val <= 10^5'],
    examples: [
      { input: 'A list where nodes 1 and 3 have children.', output: '1 3', explanation: 'Only nodes with children are kept.' }
    ],
    testCases: [
      { input: '3\n1 10 2 3\n2 20 -1 -1\n3 30 -1 -1', expectedOutput: '10\n10', hidden: false },
      { input: '2\n1 10 -1 -1\n2 20 -1 -1', expectedOutput: '\n', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, prev=None, next=None, child=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child

def keep_nodes_with_children(head):
    return None

n = int(input())
nodes = {}
data = []
for _ in range(n):
    nid, val, nxt, ch = map(int, input().split())
    nodes[nid] = Node(val)
    data.append((nid, nxt, ch))

head = None
if n > 0:
    head = nodes[data[0][0]]
    for nid, nxt, ch in data:
        curr = nodes[nid]
        if nxt != -1:
            curr.next = nodes[nxt]
            nodes[nxt].prev = curr
        if ch != -1:
            curr.child = nodes[ch]

res = keep_nodes_with_children(head)
out_f = []
t = res
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
print(" ".join(out_b))`,
      java: `import java.util.*;

class Node {
    int val;
    Node prev;
    Node next;
    Node child;
    Node(int val) { this.val = val; }
}

public class Solution {
    public static Node keepNodesWithChildren(Node head) {
        return null;
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
                int ch = sc.nextInt();
                nodes.put(nid, new Node(val));
                data.add(new int[]{nid, nxt, ch});
            }
            Node head = null;
            if (n > 0) {
                int headId = data.get(0)[0];
                head = nodes.get(headId);
                for (int[] d : data) {
                    Node curr = nodes.get(d[0]);
                    if (d[1] != -1) {
                        curr.next = nodes.get(d[1]);
                        nodes.get(d[1]).prev = curr;
                    }
                    if (d[2] != -1) {
                        curr.child = nodes.get(d[2]);
                    }
                }
            }
            Node res = keepNodesWithChildren(head);
            Node tail = null;
            Node t = res;
            while (t != null) {
                System.out.print(t.val + (t.next != null ? " " : ""));
                tail = t;
                t = t.next;
            }
            System.out.println();
            t = tail;
            while (t != null) {
                System.out.print(t.val + (t.prev != null ? " " : ""));
                t = t.prev;
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
    struct Node* child;
};

struct Node* keepNodesWithChildren(struct Node* head) {
    return NULL;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct Node** nodes = malloc((n + 100) * sizeof(struct Node*));
    int* ids = malloc(n * sizeof(int));
    int* nxts = malloc(n * sizeof(int));
    int* chs = malloc(n * sizeof(int));
    int* idMap = calloc(10005, sizeof(int));
    
    for (int i = 0; i < n; i++) {
        int nid, val, nxt, ch;
        scanf("%d %d %d %d", &nid, &val, &nxt, &ch);
        struct Node* node = malloc(sizeof(struct Node));
        node->val = val;
        node->prev = NULL;
        node->next = NULL;
        node->child = NULL;
        nodes[i] = node;
        idMap[nid] = i;
        ids[i] = nid;
        nxts[i] = nxt;
        chs[i] = ch;
    }
    
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) {
                int targetIdx = idMap[nxts[i]];
                curr->next = nodes[targetIdx];
                nodes[targetIdx]->prev = curr;
            }
            if (chs[i] != -1) {
                int targetIdx = idMap[chs[i]];
                curr->child = nodes[targetIdx];
            }
        }
    }
    
    struct Node* res = keepNodesWithChildren(head);
    struct Node* t = res;
    struct Node* tail = NULL;
    while (t != NULL) {
        printf("%d%s", t->val, t->next != NULL ? " " : "");
        tail = t;
        t = t->next;
    }
    printf("\\n");
    t = tail;
    while (t != NULL) {
        printf("%d%s", t->val, t->prev != NULL ? " " : "");
        t = t->prev;
    }
    printf("\\n");
    
    free(nodes);
    free(ids);
    free(nxts);
    free(chs);
    free(idMap);
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
    Node* child;
    Node(int x) : val(x), prev(nullptr), next(nullptr), child(nullptr) {}
};

Node* keepNodesWithChildren(Node* head) {
    return nullptr;
}

int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, ch; };
        vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, ch;
            cin >> nid >> val >> nxt >> ch;
            nodes[nid] = new Node(val);
            data[i] = {nid, nxt, ch};
        }
        Node* head = nullptr;
        if (n > 0) {
            head = nodes[data[0].id];
            for (auto& d : data) {
                Node* curr = nodes[d.id];
                if (d.nxt != -1) {
                    curr->next = nodes[d.nxt];
                    nodes[d.nxt]->prev = curr;
                }
                if (d.ch != -1) {
                    curr->child = nodes[d.ch];
                }
            }
        }
        Node* res = keepNodesWithChildren(head);
        Node* t = res;
        Node* tail = nullptr;
        while (t != nullptr) {
            cout << t->val << (t->next != nullptr ? " " : "");
            tail = t;
            t = t->next;
        }
        cout << "\\n";
        t = tail;
        while (t != nullptr) {
            cout << t->val << (t->prev != nullptr ? " " : "");
            t = t->prev;
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'fmd-m4',
    title: 'Flatten Multilevel list with Loop Detection',
    difficulty: 'Medium',
    description: 'A child or next pointer in the multilevel doubly linked list might accidentally point back to an already visited node, creating a cycle. Write an algorithm that detects any pointer cycle during DFS traversal, breaks/ignores the cycle (i.e. skips the loop edges), and flattens the remaining acyclic structure.',
    constraints: ['The number of nodes in the list is in range [0, 1000].', '1 <= Node.val <= 10^5'],
    examples: [
      { input: 'A list with cycle.', output: '1 2 3', explanation: 'Loop broken and flattened.' }
    ],
    testCases: [
      { input: '3\n1 10 2 3\n2 20 -1 1\n3 30 -1 -1', expectedOutput: '10 30 20\n20 30 10', hidden: false },
      { input: '2\n1 10 2 -1\n2 20 1 -1', expectedOutput: '10 20\n20 10', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, prev=None, next=None, child=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child

def flatten_and_break_loops(head):
    return head

n = int(input())
nodes = {}
data = []
for _ in range(n):
    nid, val, nxt, ch = map(int, input().split())
    nodes[nid] = Node(val)
    data.append((nid, nxt, ch))

head = None
if n > 0:
    head = nodes[data[0][0]]
    for nid, nxt, ch in data:
        curr = nodes[nid]
        if nxt != -1:
            curr.next = nodes[nxt]
            # Warning: don't link back prev yet for safety in loops parser
        if ch != -1:
            curr.child = nodes[ch]

res = flatten_and_break_loops(head)
out_f = []
t = res
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
print(" ".join(out_b))`,
      java: `import java.util.*;

class Node {
    int val;
    Node prev;
    Node next;
    Node child;
    Node(int val) { this.val = val; }
}

public class Solution {
    public static Node flattenAndBreakLoops(Node head) {
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
                int ch = sc.nextInt();
                nodes.put(nid, new Node(val));
                data.add(new int[]{nid, nxt, ch});
            }
            Node head = null;
            if (n > 0) {
                int headId = data.get(0)[0];
                head = nodes.get(headId);
                for (int[] d : data) {
                    Node curr = nodes.get(d[0]);
                    if (d[1] != -1) curr.next = nodes.get(d[1]);
                    if (d[2] != -1) curr.child = nodes.get(d[2]);
                }
            }
            Node res = flattenAndBreakLoops(head);
            Node tail = null;
            Node t = res;
            while (t != null) {
                System.out.print(t.val + (t.next != null ? " " : ""));
                tail = t;
                t = t.next;
            }
            System.out.println();
            t = tail;
            while (t != null) {
                System.out.print(t.val + (t.prev != null ? " " : ""));
                t = t.prev;
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
    struct Node* child;
};

struct Node* flattenAndBreakLoops(struct Node* head) {
    return head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct Node** nodes = malloc((n + 100) * sizeof(struct Node*));
    int* ids = malloc(n * sizeof(int));
    int* nxts = malloc(n * sizeof(int));
    int* chs = malloc(n * sizeof(int));
    int* idMap = calloc(10005, sizeof(int));
    
    for (int i = 0; i < n; i++) {
        int nid, val, nxt, ch;
        scanf("%d %d %d %d", &nid, &val, &nxt, &ch);
        struct Node* node = malloc(sizeof(struct Node));
        node->val = val;
        node->prev = NULL;
        node->next = NULL;
        node->child = NULL;
        nodes[i] = node;
        idMap[nid] = i;
        ids[i] = nid;
        nxts[i] = nxt;
        chs[i] = ch;
    }
    
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) curr->next = nodes[idMap[nxts[i]]];
            if (chs[i] != -1) curr->child = nodes[idMap[chs[i]]];
        }
    }
    
    struct Node* res = flattenAndBreakLoops(head);
    struct Node* t = res;
    struct Node* tail = NULL;
    while (t != NULL) {
        printf("%d%s", t->val, t->next != NULL ? " " : "");
        tail = t;
        t = t->next;
    }
    printf("\\n");
    t = tail;
    while (t != NULL) {
        printf("%d%s", t->val, t->prev != NULL ? " " : "");
        t = t->prev;
    }
    printf("\\n");
    
    free(nodes);
    free(ids);
    free(nxts);
    free(chs);
    free(idMap);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>
using namespace std;

struct Node {
    int val;
    Node* prev;
    Node* next;
    Node* child;
    Node(int x) : val(x), prev(nullptr), next(nullptr), child(nullptr) {}
};

Node* flattenAndBreakLoops(Node* head) {
    return head;
}

int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, ch; };
        vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, ch;
            cin >> nid >> val >> nxt >> ch;
            nodes[nid] = new Node(val);
            data[i] = {nid, nxt, ch};
        }
        Node* head = nullptr;
        if (n > 0) {
            head = nodes[data[0].id];
            for (auto& d : data) {
                Node* curr = nodes[d.id];
                if (d.nxt != -1) curr->next = nodes[d.nxt];
                if (d.ch != -1) curr->child = nodes[d.ch];
            }
        }
        Node* res = flattenAndBreakLoops(head);
        Node* t = res;
        Node* tail = nullptr;
        while (t != nullptr) {
            cout << t->val << (t->next != nullptr ? " " : "");
            tail = t;
            t = t->next;
        }
        cout << "\\n";
        t = tail;
        while (t != nullptr) {
            cout << t->val << (t->prev != nullptr ? " " : "");
            t = t->prev;
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'fmd-m5',
    title: 'Flatten Multilevel list where levels are reversed',
    difficulty: 'Medium',
    description: 'Flatten the multilevel doubly linked list such that each level\'s children are flattened in reverse DFS order (right to left instead of left to right, meaning we process next first recursively, then child, or similar variation). Wait, specifically, we flatten the child list backwards (starting from the child tail and moving to child head) and append it to the main list. Return the head of the flattened list.',
    constraints: ['The number of nodes in the list is in range [0, 1000].', '1 <= Node.val <= 10^5'],
    examples: [
      { input: 'A 2-level structure.', output: '1 8 7 3 4 5 2', explanation: 'Flattened children are appended in reverse order.' }
    ],
    testCases: [
      { input: '7\n1 1 2 3\n2 2 -1 -1\n3 3 4 -1\n4 4 5 -1\n5 5 -1 7\n7 7 8 -1\n8 8 -1 -1', expectedOutput: '1 8 7 3 4 5 2\n2 5 4 3 7 8 1', hidden: false },
      { input: '2\n1 10 -1 2\n2 20 -1 -1', expectedOutput: '10 20\n20 10', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, prev=None, next=None, child=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child

def flatten_reverse_levels(head):
    return head

n = int(input())
nodes = {}
data = []
for _ in range(n):
    nid, val, nxt, ch = map(int, input().split())
    nodes[nid] = Node(val)
    data.append((nid, nxt, ch))

head = None
if n > 0:
    head = nodes[data[0][0]]
    for nid, nxt, ch in data:
        curr = nodes[nid]
        if nxt != -1:
            curr.next = nodes[nxt]
            nodes[nxt].prev = curr
        if ch != -1:
            curr.child = nodes[ch]

res = flatten_reverse_levels(head)
out_f = []
t = res
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
print(" ".join(out_b))`,
      java: `import java.util.*;

class Node {
    int val;
    Node prev;
    Node next;
    Node child;
    Node(int val) { this.val = val; }
}

public class Solution {
    public static Node flattenReverseLevels(Node head) {
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
                int ch = sc.nextInt();
                nodes.put(nid, new Node(val));
                data.add(new int[]{nid, nxt, ch});
            }
            Node head = null;
            if (n > 0) {
                int headId = data.get(0)[0];
                head = nodes.get(headId);
                for (int[] d : data) {
                    Node curr = nodes.get(d[0]);
                    if (d[1] != -1) {
                        curr.next = nodes.get(d[1]);
                        nodes.get(d[1]).prev = curr;
                    }
                    if (d[2] != -1) {
                        curr.child = nodes.get(d[2]);
                    }
                }
            }
            Node res = flattenReverseLevels(head);
            Node tail = null;
            Node t = res;
            while (t != null) {
                System.out.print(t.val + (t.next != null ? " " : ""));
                tail = t;
                t = t.next;
            }
            System.out.println();
            t = tail;
            while (t != null) {
                System.out.print(t.val + (t.prev != null ? " " : ""));
                t = t.prev;
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
    struct Node* child;
};

struct Node* flattenReverseLevels(struct Node* head) {
    return head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct Node** nodes = malloc((n + 100) * sizeof(struct Node*));
    int* ids = malloc(n * sizeof(int));
    int* nxts = malloc(n * sizeof(int));
    int* chs = malloc(n * sizeof(int));
    int* idMap = calloc(10005, sizeof(int));
    
    for (int i = 0; i < n; i++) {
        int nid, val, nxt, ch;
        scanf("%d %d %d %d", &nid, &val, &nxt, &ch);
        struct Node* node = malloc(sizeof(struct Node));
        node->val = val;
        node->prev = NULL;
        node->next = NULL;
        node->child = NULL;
        nodes[i] = node;
        idMap[nid] = i;
        ids[i] = nid;
        nxts[i] = nxt;
        chs[i] = ch;
    }
    
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) {
                int targetIdx = idMap[nxts[i]];
                curr->next = nodes[targetIdx];
                nodes[targetIdx]->prev = curr;
            }
            if (chs[i] != -1) {
                int targetIdx = idMap[chs[i]];
                curr->child = nodes[targetIdx];
            }
        }
    }
    
    struct Node* res = flattenReverseLevels(head);
    struct Node* t = res;
    struct Node* tail = NULL;
    while (t != NULL) {
        printf("%d%s", t->val, t->next != NULL ? " " : "");
        tail = t;
        t = t->next;
    }
    printf("\\n");
    t = tail;
    while (t != NULL) {
        printf("%d%s", t->val, t->prev != NULL ? " " : "");
        t = t->prev;
    }
    printf("\\n");
    
    free(nodes);
    free(ids);
    free(nxts);
    free(chs);
    free(idMap);
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
    Node* child;
    Node(int x) : val(x), prev(nullptr), next(nullptr), child(nullptr) {}
};

Node* flattenReverseLevels(Node* head) {
    return head;
}

int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, ch; };
        vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, ch;
            cin >> nid >> val >> nxt >> ch;
            nodes[nid] = new Node(val);
            data[i] = {nid, nxt, ch};
        }
        Node* head = nullptr;
        if (n > 0) {
            head = nodes[data[0].id];
            for (auto& d : data) {
                Node* curr = nodes[d.id];
                if (d.nxt != -1) {
                    curr->next = nodes[d.nxt];
                    nodes[d.nxt]->prev = curr;
                }
                if (d.ch != -1) {
                    curr->child = nodes[d.ch];
                }
            }
        }
        Node* res = flattenReverseLevels(head);
        Node* t = res;
        Node* tail = nullptr;
        while (t != nullptr) {
            cout << t->val << (t->next != nullptr ? " " : "");
            tail = t;
            t = t->next;
        }
        cout << "\\n";
        t = tail;
        while (t != nullptr) {
            cout << t->val << (t->prev != nullptr ? " " : "");
            t = t->prev;
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  // --- HARD ---
  {
    id: 'fmd-h1',
    title: 'Interleave Multilevel Doubly Linked List',
    difficulty: 'Hard',
    description: 'Flatten the list by interleaving nodes from the parent level and the child level. Specifically, traverse DFS. For each parent node, insert exactly one node from its child list (if it exists), then the next parent node, then the second child node, etc., alternating between parent-level nodes and child-level nodes until one is exhausted, then append the remainder. Return the head of the interleaved list.',
    constraints: ['The number of nodes in the list is in range [0, 1000].', '1 <= Node.val <= 10^5'],
    examples: [
      { input: 'Interleaved parent and child.', output: '1 7 3 8 4 5 2', explanation: 'Alternating parent and child levels.' }
    ],
    testCases: [
      { input: '7\n1 1 2 3\n2 2 -1 -1\n3 3 4 -1\n4 4 5 -1\n5 5 -1 7\n7 7 8 -1\n8 8 -1 -1', expectedOutput: '1 7 3 8 4 5 2\n2 5 4 8 3 7 1', hidden: false },
      { input: '2\n1 10 -1 2\n2 20 -1 -1', expectedOutput: '10 20\n20 10', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, prev=None, next=None, child=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child

def interleave_flatten(head):
    return head

n = int(input())
nodes = {}
data = []
for _ in range(n):
    nid, val, nxt, ch = map(int, input().split())
    nodes[nid] = Node(val)
    data.append((nid, nxt, ch))

head = None
if n > 0:
    head = nodes[data[0][0]]
    for nid, nxt, ch in data:
        curr = nodes[nid]
        if nxt != -1:
            curr.next = nodes[nxt]
            nodes[nxt].prev = curr
        if ch != -1:
            curr.child = nodes[ch]

res = interleave_flatten(head)
out_f = []
t = res
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
print(" ".join(out_b))`,
      java: `import java.util.*;

class Node {
    int val;
    Node prev;
    Node next;
    Node child;
    Node(int val) { this.val = val; }
}

public class Solution {
    public static Node interleaveFlatten(Node head) {
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
                int ch = sc.nextInt();
                nodes.put(nid, new Node(val));
                data.add(new int[]{nid, nxt, ch});
            }
            Node head = null;
            if (n > 0) {
                int headId = data.get(0)[0];
                head = nodes.get(headId);
                for (int[] d : data) {
                    Node curr = nodes.get(d[0]);
                    if (d[1] != -1) {
                        curr.next = nodes.get(d[1]);
                        nodes.get(d[1]).prev = curr;
                    }
                    if (d[2] != -1) {
                        curr.child = nodes.get(d[2]);
                    }
                }
            }
            Node res = interleaveFlatten(head);
            Node tail = null;
            Node t = res;
            while (t != null) {
                System.out.print(t.val + (t.next != null ? " " : ""));
                tail = t;
                t = t.next;
            }
            System.out.println();
            t = tail;
            while (t != null) {
                System.out.print(t.val + (t.prev != null ? " " : ""));
                t = t.prev;
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
    struct Node* child;
};

struct Node* interleaveFlatten(struct Node* head) {
    return head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct Node** nodes = malloc((n + 100) * sizeof(struct Node*));
    int* ids = malloc(n * sizeof(int));
    int* nxts = malloc(n * sizeof(int));
    int* chs = malloc(n * sizeof(int));
    int* idMap = calloc(10005, sizeof(int));
    
    for (int i = 0; i < n; i++) {
        int nid, val, nxt, ch;
        scanf("%d %d %d %d", &nid, &val, &nxt, &ch);
        struct Node* node = malloc(sizeof(struct Node));
        node->val = val;
        node->prev = NULL;
        node->next = NULL;
        node->child = NULL;
        nodes[i] = node;
        idMap[nid] = i;
        ids[i] = nid;
        nxts[i] = nxt;
        chs[i] = ch;
    }
    
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) {
                int targetIdx = idMap[nxts[i]];
                curr->next = nodes[targetIdx];
                nodes[targetIdx]->prev = curr;
            }
            if (chs[i] != -1) {
                int targetIdx = idMap[chs[i]];
                curr->child = nodes[targetIdx];
            }
        }
    }
    
    struct Node* res = interleaveFlatten(head);
    struct Node* t = res;
    struct Node* tail = NULL;
    while (t != NULL) {
        printf("%d%s", t->val, t->next != NULL ? " " : "");
        tail = t;
        t = t->next;
    }
    printf("\\n");
    t = tail;
    while (t != NULL) {
        printf("%d%s", t->val, t->prev != NULL ? " " : "");
        t = t->prev;
    }
    printf("\\n");
    
    free(nodes);
    free(ids);
    free(nxts);
    free(chs);
    free(idMap);
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
    Node* child;
    Node(int x) : val(x), prev(nullptr), next(nullptr), child(nullptr) {}
};

Node* interleaveFlatten(Node* head) {
    return head;
}

int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, ch; };
        vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, ch;
            cin >> nid >> val >> nxt >> ch;
            nodes[nid] = new Node(val);
            data[i] = {nid, nxt, ch};
        }
        Node* head = nullptr;
        if (n > 0) {
            head = nodes[data[0].id];
            for (auto& d : data) {
                Node* curr = nodes[d.id];
                if (d.nxt != -1) {
                    curr->next = nodes[d.nxt];
                    nodes[d.nxt]->prev = curr;
                }
                if (d.ch != -1) {
                    curr->child = nodes[d.ch];
                }
            }
        }
        Node* res = interleaveFlatten(head);
        Node* t = res;
        Node* tail = nullptr;
        while (t != nullptr) {
            cout << t->val << (t->next != nullptr ? " " : "");
            tail = t;
            t = t->next;
        }
        cout << "\\n";
        t = tail;
        while (t != nullptr) {
            cout << t->val << (t->prev != nullptr ? " " : "");
            t = t->prev;
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'fmd-h2',
    title: 'Flatten Multilevel list with Random pointers',
    difficulty: 'Hard',
    description: 'Each node in the multilevel doubly linked list has `next`, `prev`, `child`, and a `random` pointer that points to some arbitrary node in the multilevel list structure. Clone/deep-copy the entire multilevel structure including random pointers, then flatten the clone, keeping the cloned random pointers pointing to the correct cloned nodes in the flattened list. Return the head of the flattened cloned list.',
    constraints: ['The number of nodes in the list is in range [0, 500].', '1 <= Node.val <= 10^5'],
    examples: [
      { input: 'A structure with random pointers.', output: '1 2 3 (with verified random copies)', explanation: 'Deep cloned, flattened, random links validated.' }
    ],
    testCases: [
      { input: '3\n1 10 2 3 3\n2 20 -1 -1 1\n3 30 -1 -1 2', expectedOutput: '10 30 20\n20 30 10\n10->30 30->20 20->10', hidden: false },
      { input: '1\n1 5 -1 -1 1', expectedOutput: '5\n5\n5->5', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, prev=None, next=None, child=None, random=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child
        self.random = random

def clone_and_flatten_random(head):
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

res = clone_and_flatten_random(head)
# Verification: print list forward, backward, and random mappings
out_f = []
t = res
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
t = res
while t:
    r_val = str(t.random.val) if t.random else "null"
    out_r.append(f"{t.val}->{r_val}")
    t = t.next
print(" ".join(out_r))`,
      java: `import java.util.*;

class Node {
    int val;
    Node prev;
    Node next;
    Node child;
    Node random;
    Node(int val) { this.val = val; }
}

public class Solution {
    public static Node cloneAndFlattenRandom(Node head) {
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
                int ch = sc.nextInt();
                int rnd = sc.nextInt();
                nodes.put(nid, new Node(val));
                data.add(new int[]{nid, nxt, ch, rnd});
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
            Node res = cloneAndFlattenRandom(head);
            Node tail = null;
            Node t = res;
            while (t != null) {
                System.out.print(t.val + (t.next != null ? " " : ""));
                tail = t;
                t = t.next;
            }
            System.out.println();
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
    struct Node* child;
    struct Node* random;
};

struct Node* cloneAndFlattenRandom(struct Node* head) {
    return head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct Node** nodes = malloc((n + 100) * sizeof(struct Node*));
    int* ids = malloc(n * sizeof(int));
    int* nxts = malloc(n * sizeof(int));
    int* chs = malloc(n * sizeof(int));
    int* rnds = malloc(n * sizeof(int));
    int* idMap = calloc(10005, sizeof(int));
    
    for (int i = 0; i < n; i++) {
        int nid, val, nxt, ch, rnd;
        scanf("%d %d %d %d %d", &nid, &val, &nxt, &ch, &rnd);
        struct Node* node = malloc(sizeof(struct Node));
        node->val = val;
        node->prev = NULL;
        node->next = NULL;
        node->child = NULL;
        node->random = NULL;
        nodes[i] = node;
        idMap[nid] = i;
        ids[i] = nid;
        nxts[i] = nxt;
        chs[i] = ch;
        rnds[i] = rnd;
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
    
    struct Node* res = cloneAndFlattenRandom(head);
    struct Node* t = res;
    struct Node* tail = NULL;
    while (t != NULL) {
        printf("%d%s", t->val, t->next != NULL ? " " : "");
        tail = t;
        t = t->next;
    }
    printf("\\n");
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
    
    free(nodes);
    free(ids);
    free(nxts);
    free(chs);
    free(rnds);
    free(idMap);
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
    Node* child;
    Node* random;
    Node(int x) : val(x), prev(nullptr), next(nullptr), child(nullptr), random(nullptr) {}
};

Node* cloneAndFlattenRandom(Node* head) {
    return head;
}

int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, ch, rnd; };
        vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, ch, rnd;
            cin >> nid >> val >> nxt >> ch >> rnd;
            nodes[nid] = new Node(val);
            data[i] = {nid, nxt, ch, rnd};
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
        Node* res = cloneAndFlattenRandom(head);
        Node* t = res;
        Node* tail = nullptr;
        while (t != nullptr) {
            cout << t->val << (t->next != nullptr ? " " : "");
            tail = t;
            t = t->next;
        }
        cout << "\\n";
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
    id: 'fmd-h3',
    title: 'Deep Clone Multilevel Doubly Linked List',
    difficulty: 'Hard',
    description: 'Create a deep clone/copy of the hierarchical multilevel doubly linked list and return the head of the cloned list. The cloned structure must preserve all next, prev, and child linkages of the original hierarchy without any node references pointing to the original list nodes.',
    constraints: ['The number of nodes in the list is in range [0, 1000].', '1 <= Node.val <= 10^5'],
    examples: [
      { input: 'A multilevel list.', output: 'Cloned representation', explanation: 'Original structure is cloned successfully.' }
    ],
    testCases: [
      { input: '3\n1 10 2 3\n2 20 -1 -1\n3 30 -1 -1', expectedOutput: 'Cloned successfully', hidden: false },
      { input: '0', expectedOutput: 'Empty clone', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, prev=None, next=None, child=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child

def clone_multilevel(head):
    return head

# Verification utility checks structural equality and memory address mismatch
def is_deep_cloned_equal(orig, clone):
    if not orig and not clone: return True
    if not orig or not clone: return False
    if orig is clone: return False
    if orig.val != clone.val: return False
    return is_deep_cloned_equal(orig.next, clone.next) and is_deep_cloned_equal(orig.child, clone.child)

n = int(input())
nodes = {}
data = []
for _ in range(n):
    nid, val, nxt, ch = map(int, input().split())
    nodes[nid] = Node(val)
    data.append((nid, nxt, ch))

head = None
if n > 0:
    head = nodes[data[0][0]]
    for nid, nxt, ch in data:
        curr = nodes[nid]
        if nxt != -1:
            curr.next = nodes[nxt]
            nodes[nxt].prev = curr
        if ch != -1:
            curr.child = nodes[ch]

if n == 0:
    res = clone_multilevel(head)
    print("Empty clone" if res is None else "Fail")
else:
    res = clone_multilevel(head)
    print("Cloned successfully" if is_deep_cloned_equal(head, res) else "Fail")`,
      java: `import java.util.*;

class Node {
    int val;
    Node prev;
    Node next;
    Node child;
    Node(int val) { this.val = val; }
}

public class Solution {
    public static Node cloneMultilevel(Node head) {
        return head;
    }

    private static boolean isDeepClonedEqual(Node orig, Node clone) {
        if (orig == null && clone == null) return true;
        if (orig == null || clone == null) return false;
        if (orig == clone) return false;
        if (orig.val != clone.val) return false;
        return isDeepClonedEqual(orig.next, clone.next) && isDeepClonedEqual(orig.child, clone.child);
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
                int ch = sc.nextInt();
                nodes.put(nid, new Node(val));
                data.add(new int[]{nid, nxt, ch});
            }
            Node head = null;
            if (n > 0) {
                int headId = data.get(0)[0];
                head = nodes.get(headId);
                for (int[] d : data) {
                    Node curr = nodes.get(d[0]);
                    if (d[1] != -1) {
                        curr.next = nodes.get(d[1]);
                        nodes.get(d[1]).prev = curr;
                    }
                    if (d[2] != -1) {
                        curr.child = nodes.get(d[2]);
                    }
                }
            }
            if (n == 0) {
                Node res = cloneMultilevel(head);
                System.out.println(res == null ? "Empty clone" : "Fail");
            } else {
                Node res = cloneMultilevel(head);
                System.out.println(isDeepClonedEqual(head, res) ? "Cloned successfully" : "Fail");
            }
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

struct Node {
    int val;
    struct Node* prev;
    struct Node* next;
    struct Node* child;
};

struct Node* cloneMultilevel(struct Node* head) {
    return head;
}

bool isDeepClonedEqual(struct Node* orig, struct Node* clone) {
    if (orig == NULL && clone == NULL) return true;
    if (orig == NULL || clone == NULL) return false;
    if (orig == clone) return false;
    if (orig->val != clone->val) return false;
    return isDeepClonedEqual(orig->next, clone->next) && isDeepClonedEqual(orig->child, clone->child);
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) {
        printf("Empty clone\\n");
        return 0;
    }
    struct Node** nodes = malloc((n + 100) * sizeof(struct Node*));
    int* ids = malloc(n * sizeof(int));
    int* nxts = malloc(n * sizeof(int));
    int* chs = malloc(n * sizeof(int));
    int* idMap = calloc(10005, sizeof(int));
    
    for (int i = 0; i < n; i++) {
        int nid, val, nxt, ch;
        scanf("%d %d %d %d", &nid, &val, &nxt, &ch);
        struct Node* node = malloc(sizeof(struct Node));
        node->val = val;
        node->prev = NULL;
        node->next = NULL;
        node->child = NULL;
        nodes[i] = node;
        idMap[nid] = i;
        ids[i] = nid;
        nxts[i] = nxt;
        chs[i] = ch;
    }
    
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) {
                int targetIdx = idMap[nxts[i]];
                curr->next = nodes[targetIdx];
                nodes[targetIdx]->prev = curr;
            }
            if (chs[i] != -1) {
                int targetIdx = idMap[chs[i]];
                curr->child = nodes[targetIdx];
            }
        }
    }
    
    struct Node* res = cloneMultilevel(head);
    if (n == 0) {
        printf("%s\\n", res == NULL ? "Empty clone" : "Fail");
    } else {
        printf("%s\\n", isDeepClonedEqual(head, res) ? "Cloned successfully" : "Fail");
    }
    
    free(nodes);
    free(ids);
    free(nxts);
    free(chs);
    free(idMap);
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
    Node* child;
    Node(int x) : val(x), prev(nullptr), next(nullptr), child(nullptr) {}
};

Node* cloneMultilevel(Node* head) {
    return head;
}

bool isDeepClonedEqual(Node* orig, Node* clone) {
    if (orig == nullptr && clone == nullptr) return true;
    if (orig == nullptr || clone == nullptr) return false;
    if (orig == clone) return false;
    if (orig->val != clone->val) return false;
    return isDeepClonedEqual(orig->next, clone->next) && isDeepClonedEqual(orig->child, clone->child);
}

int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, ch; };
        vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, ch;
            cin >> nid >> val >> nxt >> ch;
            nodes[nid] = new Node(val);
            data[i] = {nid, nxt, ch};
        }
        Node* head = nullptr;
        if (n > 0) {
            head = nodes[data[0].id];
            for (auto& d : data) {
                Node* curr = nodes[d.id];
                if (d.nxt != -1) {
                    curr->next = nodes[d.nxt];
                    nodes[d.nxt]->prev = curr;
                }
                if (d.ch != -1) {
                    curr->child = nodes[d.ch];
                }
            }
        }
        Node* res = cloneMultilevel(head);
        if (n == 0) {
            cout << (res == nullptr ? "Empty clone" : "Fail") << "\\n";
        } else {
            cout << (isDeepClonedEqual(head, res) ? "Cloned successfully" : "Fail") << "\\n";
        }
    }
    return 0;
}`
    }
  },
  {
    id: 'fmd-h4',
    title: 'Sort Multilevel Doubly Linked List Hierarchically',
    difficulty: 'Hard',
    description: 'Sort the multilevel list hierarchically. Specifically, sort the main level, and recursively sort each child list independently. Then, flatten the sorted hierarchical structure and return the head node.',
    constraints: ['The number of nodes in the list is in range [0, 1000].', '-10^5 <= Node.val <= 10^5'],
    examples: [
      { input: 'A hierarchical list.', output: '1 2 3 ...', explanation: 'Sorted at each level independently and then flattened.' }
    ],
    testCases: [
      { input: '5\n1 20 2 3\n2 10 -1 -1\n3 40 5 -1\n5 30 -1 -1\n7 50 -1 -1', expectedOutput: '20 40 50 10 30\n30 10 50 40 20', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, prev=None, next=None, child=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child

def sort_hierarchical(head):
    return head

n = int(input())
nodes = {}
data = []
for _ in range(n):
    nid, val, nxt, ch = map(int, input().split())
    nodes[nid] = Node(val)
    data.append((nid, nxt, ch))

head = None
if n > 0:
    head = nodes[data[0][0]]
    for nid, nxt, ch in data:
        curr = nodes[nid]
        if nxt != -1:
            curr.next = nodes[nxt]
            nodes[nxt].prev = curr
        if ch != -1:
            curr.child = nodes[ch]

res = sort_hierarchical(head)
out_f = []
t = res
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
print(" ".join(out_b))`,
      java: `import java.util.*;

class Node {
    int val;
    Node prev;
    Node next;
    Node child;
    Node(int val) { this.val = val; }
}

public class Solution {
    public static Node sortHierarchical(Node head) {
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
                int ch = sc.nextInt();
                nodes.put(nid, new Node(val));
                data.add(new int[]{nid, nxt, ch});
            }
            Node head = null;
            if (n > 0) {
                int headId = data.get(0)[0];
                head = nodes.get(headId);
                for (int[] d : data) {
                    Node curr = nodes.get(d[0]);
                    if (d[1] != -1) {
                        curr.next = nodes.get(d[1]);
                        nodes.get(d[1]).prev = curr;
                    }
                    if (d[2] != -1) {
                        curr.child = nodes.get(d[2]);
                    }
                }
            }
            Node res = sortHierarchical(head);
            Node tail = null;
            Node t = res;
            while (t != null) {
                System.out.print(t.val + (t.next != null ? " " : ""));
                tail = t;
                t = t.next;
            }
            System.out.println();
            t = tail;
            while (t != null) {
                System.out.print(t.val + (t.prev != null ? " " : ""));
                t = t.prev;
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
    struct Node* child;
};

struct Node* sortHierarchical(struct Node* head) {
    return head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct Node** nodes = malloc((n + 100) * sizeof(struct Node*));
    int* ids = malloc(n * sizeof(int));
    int* nxts = malloc(n * sizeof(int));
    int* chs = malloc(n * sizeof(int));
    int* idMap = calloc(10005, sizeof(int));
    
    for (int i = 0; i < n; i++) {
        int nid, val, nxt, ch;
        scanf("%d %d %d %d", &nid, &val, &nxt, &ch);
        struct Node* node = malloc(sizeof(struct Node));
        node->val = val;
        node->prev = NULL;
        node->next = NULL;
        node->child = NULL;
        nodes[i] = node;
        idMap[nid] = i;
        ids[i] = nid;
        nxts[i] = nxt;
        chs[i] = ch;
    }
    
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) {
                int targetIdx = idMap[nxts[i]];
                curr->next = nodes[targetIdx];
                nodes[targetIdx]->prev = curr;
            }
            if (chs[i] != -1) {
                int targetIdx = idMap[chs[i]];
                curr->child = nodes[targetIdx];
            }
        }
    }
    
    struct Node* res = sortHierarchical(head);
    struct Node* t = res;
    struct Node* tail = NULL;
    while (t != NULL) {
        printf("%d%s", t->val, t->next != NULL ? " " : "");
        tail = t;
        t = t->next;
    }
    printf("\\n");
    t = tail;
    while (t != NULL) {
        printf("%d%s", t->val, t->prev != NULL ? " " : "");
        t = t->prev;
    }
    printf("\\n");
    
    free(nodes);
    free(ids);
    free(nxts);
    free(chs);
    free(idMap);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;

struct Node {
    int val;
    Node* prev;
    Node* next;
    Node* child;
    Node(int x) : val(x), prev(nullptr), next(nullptr), child(nullptr) {}
};

Node* sortHierarchical(Node* head) {
    return head;
}

int main() {
    int n;
    if (cin >> n) {
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, ch; };
        vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, ch;
            cin >> nid >> val >> nxt >> ch;
            nodes[nid] = new Node(val);
            data[i] = {nid, nxt, ch};
        }
        Node* head = nullptr;
        if (n > 0) {
            head = nodes[data[0].id];
            for (auto& d : data) {
                Node* curr = nodes[d.id];
                if (d.nxt != -1) {
                    curr->next = nodes[d.nxt];
                    nodes[d.nxt]->prev = curr;
                }
                if (d.ch != -1) {
                    curr->child = nodes[d.ch];
                }
            }
        }
        Node* res = sortHierarchical(head);
        Node* t = res;
        Node* tail = nullptr;
        while (t != nullptr) {
            cout << t->val << (t->next != nullptr ? " " : "");
            tail = t;
            t = t->next;
        }
        cout << "\\n";
        t = tail;
        while (t != nullptr) {
            cout << t->val << (t->prev != nullptr ? " " : "");
            t = t->prev;
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'fmd-h5',
    title: 'Reconstruct Multilevel Doubly Linked List',
    difficulty: 'Hard',
    description: 'You are given a flat doubly linked list (as a sequence of values) and a list of structural parent-child associations in the format: `parent_val child_val`. Reconstruct the original multilevel doubly linked list structure and return its head node. (Verification will print DFS flattened order to confirm reconstruct was 100% correct).',
    constraints: ['The number of nodes in the list is in range [0, 500].', '1 <= Node.val <= 10^5'],
    examples: [
      { input: 'A flat list and association rules.', output: 'Reconstructed flattened check', explanation: 'Structure is rebuilt correctly.' }
    ],
    testCases: [
      { input: '5\n10 20 30 40 50\n2\n10 30\n30 40', expectedOutput: '10 30 40 50 20\n20 50 40 30 10', hidden: false }
    ],
    starterCode: {
      python: `class Node:
    def __init__(self, val=0, prev=None, next=None, child=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child

def reconstruct_multilevel(flat_head, associations):
    # associations is a list of tuples (parent_val, child_val)
    return flat_head

def flatten_dfs(head):
    # DFS flattening for verification
    if not head: return head
    curr = head
    while curr:
        if curr.child:
            nxt = curr.next
            child_head = flatten_dfs(curr.child)
            child_tail = child_head
            while child_tail.next:
                child_tail = child_tail.next
            curr.next = child_head
            child_head.prev = curr
            curr.child = None
            if nxt:
                child_tail.next = nxt
                nxt.prev = child_tail
        curr = curr.next
    return head

# Read input
n = int(input())
arr = list(map(int, input().split())) if n > 0 else []
m = int(input())
associations = []
for _ in range(m):
    p, c = map(int, input().split())
    associations.append((p, c))

dummy = ListNode = Node(0)
curr = dummy
for v in arr:
    node = Node(v)
    curr.next = node
    node.prev = curr
    curr = node
flat_head = dummy.next
if flat_head: flat_head.prev = None

# Run reconstruct and then verify by flattening
rebuilt = reconstruct_multilevel(flat_head, associations)
flat_rebuilt = flatten_dfs(rebuilt)

out_f = []
t = flat_rebuilt
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
print(" ".join(out_b))`,
      java: `import java.util.*;

class Node {
    int val;
    Node prev;
    Node next;
    Node child;
    Node(int val) { this.val = val; }
}

public class Solution {
    public static Node reconstructMultilevel(Node flatHead, List<int[]> associations) {
        return flatHead;
    }

    private static Node flattenDFS(Node head) {
        if (head == null) return null;
        Node curr = head;
        while (curr != null) {
            if (curr.child != null) {
                Node nextNode = curr.next;
                Node childHead = flattenDFS(curr.child);
                Node childTail = childHead;
                while (childTail.next != null) {
                    childTail = childTail.next;
                }
                curr.next = childHead;
                childHead.prev = curr;
                curr.child = null;
                if (nextNode != null) {
                    childTail.next = nextNode;
                    nextNode.prev = childTail;
                }
            }
            curr = curr.next;
        }
        return head;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            Node dummy = new Node(0);
            Node curr = dummy;
            for (int i = 0; i < n; i++) {
                Node node = new Node(sc.nextInt());
                curr.next = node;
                node.prev = curr;
                curr = node;
            }
            Node flatHead = dummy.next;
            if (flatHead != null) flatHead.prev = null;

            int m = sc.nextInt();
            List<int[]> associations = new ArrayList<>();
            for (int i = 0; i < m; i++) {
                associations.add(new int[]{sc.nextInt(), sc.nextInt()});
            }

            Node rebuilt = reconstructMultilevel(flatHead, associations);
            Node flatRebuilt = flattenDFS(rebuilt);

            Node tail = null;
            Node t = flatRebuilt;
            while (t != null) {
                System.out.print(t.val + (t.next != null ? " " : ""));
                tail = t;
                t = t.next;
            }
            System.out.println();
            t = tail;
            while (t != null) {
                System.out.print(t.val + (t.prev != null ? " " : ""));
                t = t.prev;
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
    struct Node* child;
};

struct Node* reconstructMultilevel(struct Node* flatHead, int** associations, int m) {
    return flatHead;
}

struct Node* flattenDFS(struct Node* head) {
    if (head == NULL) return NULL;
    struct Node* curr = head;
    while (curr != NULL) {
        if (curr->child != NULL) {
            struct Node* nextNode = curr->next;
            struct Node* childHead = flattenDFS(curr->child);
            struct Node* childTail = childHead;
            while (childTail->next != NULL) {
                childTail = childTail->next;
            }
            curr->next = childHead;
            childHead->prev = curr;
            curr->child = NULL;
            if (nextNode != NULL) {
                childTail->next = nextNode;
                nextNode->prev = childTail;
            }
        }
        curr = curr->next;
    }
    return head;
}

int main() {
    int n, m;
    if (scanf("%d", &n) != 1) return 0;
    struct Node dummy; dummy.next = NULL; dummy.prev = NULL;
    struct Node* curr = &dummy;
    for (int i = 0; i < n; i++) {
        int val; scanf("%d", &val);
        struct Node* node = malloc(sizeof(struct Node));
        node->val = val; node->next = NULL; node->prev = curr; node->child = NULL;
        curr->next = node; curr = node;
    }
    struct Node* flatHead = dummy.next;
    if (flatHead != NULL) flatHead->prev = NULL;

    if (scanf("%d", &m) != 1) return 0;
    int** associations = malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        associations[i] = malloc(2 * sizeof(int));
        scanf("%d %d", &associations[i][0], &associations[i][1]);
    }

    struct Node* rebuilt = reconstructMultilevel(flatHead, associations, m);
    struct Node* flatRebuilt = flattenDFS(rebuilt);

    struct Node* t = flatRebuilt;
    struct Node* tail = NULL;
    while (t != NULL) {
        printf("%d%s", t->val, t->next != NULL ? " " : "");
        tail = t;
        t = t->next;
    }
    printf("\\n");
    t = tail;
    while (t != NULL) {
        printf("%d%s", t->val, t->prev != NULL ? " " : "");
        t = t->prev;
    }
    printf("\\n");

    free(associations);
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
    Node* child;
    Node(int x) : val(x), prev(nullptr), next(nullptr), child(nullptr) {}
};

Node* reconstructMultilevel(Node* flatHead, vector<pair<int, int>>& associations) {
    return flatHead;
}

Node* flattenDFS(Node* head) {
    if (head == nullptr) return nullptr;
    Node* curr = head;
    while (curr != nullptr) {
        if (curr->child != nullptr) {
            Node* nextNode = curr->next;
            Node* childHead = flattenDFS(curr->child);
            Node* childTail = childHead;
            while (childTail->next != nullptr) {
                childTail = childTail->next;
            }
            curr->next = childHead;
            childHead->prev = curr;
            curr->child = nullptr;
            if (nextNode != nullptr) {
                childTail->next = nextNode;
                nextNode->prev = childTail;
            }
        }
        curr = curr->next;
    }
    return head;
}

int main() {
    int n, m;
    if (cin >> n) {
        Node dummy(0);
        Node* curr = &dummy;
        for (int i = 0; i < n; i++) {
            int val; cin >> val;
            Node* node = new Node(val);
            curr->next = node;
            node->prev = curr;
            curr = node;
        }
        Node* flatHead = dummy.next;
        if (flatHead != nullptr) flatHead->prev = nullptr;

        cin >> m;
        vector<pair<int, int>> associations(m);
        for (int i = 0; i < m; i++) {
            cin >> associations[i].first >> associations[i].second;
        }

        Node* rebuilt = reconstructMultilevel(flatHead, associations);
        Node* flatRebuilt = flattenDFS(rebuilt);

        Node* t = flatRebuilt;
        Node* tail = nullptr;
        while (t != nullptr) {
            cout << t->val << (t->next != nullptr ? " " : "");
            tail = t;
            t = t->next;
        }
        cout << "\\n";
        t = tail;
        while (t != nullptr) {
            cout << t->val << (t->prev != nullptr ? " " : "");
            t = t->prev;
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  }
];
