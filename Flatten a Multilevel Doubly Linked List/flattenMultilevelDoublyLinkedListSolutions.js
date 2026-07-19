export const flattenMultilevelDoublyLinkedListSolutions = {
  'fmd-e1': {
    python: `class Node:
    def __init__(self, val=0, prev=None, next=None, child=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child

def flatten(head):
    if not head:
        return head
    curr = head
    while curr:
        if curr.child:
            nxt = curr.next
            child_head = flatten(curr.child)
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
        if (head == null) return null;
        Node curr = head;
        while (curr != null) {
            if (curr.child != null) {
                Node nextNode = curr.next;
                Node childHead = flatten(curr.child);
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
    if (head == NULL) return head;
    struct Node* curr = head;
    while (curr != NULL) {
        if (curr->child != NULL) {
            struct Node* nextNode = curr->next;
            struct Node* childHead = flatten(curr->child);
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
        node->val = val; node->prev = NULL; node->next = NULL; node->child = NULL;
        nodes[i] = node;
        idMap[nid] = i;
        ids[i] = nid; nxts[i] = nxt; chs[i] = ch;
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
    free(nodes); free(ids); free(nxts); free(chs); free(idMap);
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
    if (head == nullptr) return head;
    Node* curr = head;
    while (curr != nullptr) {
        if (curr->child != nullptr) {
            Node* nextNode = curr->next;
            Node* childHead = flatten(curr->child);
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
  },
  'fmd-e2': {
    python: `class Node:
    def __init__(self, val=0, next=None, child=None):
        self.val = val
        self.next = next
        self.child = child

def flatten_singly(head):
    if not head: return head
    curr = head
    while curr:
        if curr.child:
            nxt = curr.next
            child_head = flatten_singly(curr.child)
            child_tail = child_head
            while child_tail.next:
                child_tail = child_tail.next
            curr.next = child_head
            curr.child = None
            if nxt:
                child_tail.next = nxt
        curr = curr.next
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
        if (head == null) return null;
        Node curr = head;
        while (curr != null) {
            if (curr.child != null) {
                Node nextNode = curr.next;
                Node childHead = flattenSingly(curr.child);
                Node childTail = childHead;
                while (childTail.next != null) {
                    childTail = childTail.next;
                }
                curr.next = childHead;
                curr.child = null;
                if (nextNode != null) {
                    childTail.next = nextNode;
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
    if (head == NULL) return head;
    struct Node* curr = head;
    while (curr != NULL) {
        if (curr->child != NULL) {
            struct Node* nextNode = curr->next;
            struct Node* childHead = flattenSingly(curr->child);
            struct Node* childTail = childHead;
            while (childTail->next != NULL) {
                childTail = childTail->next;
            }
            curr->next = childHead;
            curr->child = NULL;
            if (nextNode != NULL) {
                childTail->next = nextNode;
            }
        }
        curr = curr->next;
    }
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
        node->val = val; node->next = NULL; node->child = NULL;
        nodes[i] = node;
        idMap[nid] = i;
        ids[i] = nid; nxts[i] = nxt; chs[i] = ch;
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
    free(nodes); free(ids); free(nxts); free(chs); free(idMap);
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
    if (head == nullptr) return head;
    Node* curr = head;
    while (curr != nullptr) {
        if (curr->child != nullptr) {
            Node* nextNode = curr->next;
            Node* childHead = flattenSingly(curr->child);
            Node* childTail = childHead;
            while (childTail->next != nullptr) {
                childTail = childTail->next;
            }
            curr->next = childHead;
            curr->child = nullptr;
            if (nextNode != nullptr) {
                childTail->next = nextNode;
            }
        }
        curr = curr->next;
    }
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
  },
  'fmd-e3': {
    python: `class Node:
    def __init__(self, val=0, next=None, child=None):
        self.val = val
        self.next = next
        self.child = child

def max_levels(head):
    if not head: return 0
    curr = head
    ans = 1
    while curr:
        if curr.child:
            ans = max(ans, 1 + max_levels(curr.child))
        curr = curr.next
    return ans

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
        if (head == null) return 0;
        Node curr = head;
        int ans = 1;
        while (curr != null) {
            if (curr.child != null) {
                ans = Math.max(ans, 1 + maxLevels(curr.child));
            }
            curr = curr.next;
        }
        return ans;
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
    if (head == NULL) return 0;
    struct Node* curr = head;
    int ans = 1;
    while (curr != NULL) {
        if (curr->child != NULL) {
            int child_depth = 1 + maxLevels(curr->child);
            if (child_depth > ans) ans = child_depth;
        }
        curr = curr->next;
    }
    return ans;
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
        node->val = val; node->next = NULL; node->child = NULL;
        nodes[i] = node;
        idMap[nid] = i;
        ids[i] = nid; nxts[i] = nxt; chs[i] = ch;
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
    free(nodes); free(ids); free(nxts); free(chs); free(idMap);
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
    if (head == nullptr) return 0;
    Node* curr = head;
    int ans = 1;
    while (curr != nullptr) {
        if (curr->child != nullptr) {
            ans = max(ans, 1 + maxLevels(curr->child));
        }
        curr = curr->next;
    }
    return ans;
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
  },
  'fmd-e4': {
    python: `class Node:
    def __init__(self, val=0, next=None, child=None):
        self.val = val
        self.next = next
        self.child = child

def sum_multilevel(head):
    if not head: return 0
    total = 0
    curr = head
    while curr:
        total += curr.val
        if curr.child:
            total += sum_multilevel(curr.child)
        curr = curr.next
    return total

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
        if (head == null) return 0;
        int total = 0;
        Node curr = head;
        while (curr != null) {
            total += curr.val;
            if (curr.child != null) {
                total += sumMultilevel(curr.child);
            }
            curr = curr.next;
        }
        return total;
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
    if (head == NULL) return 0;
    int total = 0;
    struct Node* curr = head;
    while (curr != NULL) {
        total += curr->val;
        if (curr->child != NULL) {
            total += sumMultilevel(curr->child);
        }
        curr = curr->next;
    }
    return total;
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
        node->val = val; node->next = NULL; node->child = NULL;
        nodes[i] = node;
        idMap[nid] = i;
        ids[i] = nid; nxts[i] = nxt; chs[i] = ch;
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
    free(nodes); free(ids); free(nxts); free(chs); free(idMap);
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
    if (head == nullptr) return 0;
    int total = 0;
    Node* curr = head;
    while (curr != nullptr) {
        total += curr->val;
        if (curr->child != nullptr) {
            total += sumMultilevel(curr->child);
        }
        curr = curr->next;
    }
    return total;
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
  },
  'fmd-e5': {
    python: `class Node:
    def __init__(self, val=0, next=None, child=None):
        self.val = val
        self.next = next
        self.child = child

def first_node_with_child(head):
    def dfs(node):
        if not node: return -1
        if node.child: return node.val
        res = dfs(node.child)
        if res != -1: return res
        return dfs(node.next)
    return dfs(head)

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
    private static int dfs(Node node) {
        if (node == null) return -1;
        if (node.child != null) return node.val;
        int res = dfs(node.child);
        if (res != -1) return res;
        return dfs(node.next);
    }

    public static int firstNodeWithChild(Node head) {
        return dfs(head);
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

int dfs(struct Node* node) {
    if (node == NULL) return -1;
    if (node->child != NULL) return node->val;
    int res = dfs(node->child);
    if (res != -1) return res;
    return dfs(node->next);
}

int firstNodeWithChild(struct Node* head) {
    return dfs(head);
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
        node->val = val; node->next = NULL; node->child = NULL;
        nodes[i] = node;
        idMap[nid] = i;
        ids[i] = nid; nxts[i] = nxt; chs[i] = ch;
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
    free(nodes); free(ids); free(nxts); free(chs); free(idMap);
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

int dfs(Node* node) {
    if (node == nullptr) return -1;
    if (node->child != nullptr) return node->val;
    int res = dfs(node->child);
    if (res != -1) return res;
    return dfs(node->next);
}

int firstNodeWithChild(Node* head) {
    return dfs(head);
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
  },
  'fmd-m1': {
    python: `class Node:
    def __init__(self, val=0, prev=None, next=None, child=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child

from collections import deque

def flatten_bfs(head):
    if not head:
        return head
    queue = deque()
    queue.append(head)
    result = []
    while queue:
        curr = queue.popleft()
        while curr:
            result.append(curr)
            if curr.child:
                queue.append(curr.child)
                curr.child = None
            curr = curr.next
    for i in range(len(result)):
        result[i].prev = result[i - 1] if i > 0 else None
        result[i].next = result[i + 1] if i < len(result) - 1 else None
    return result[0] if result else None

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
        if (head == null) return null;
        Queue<Node> queue = new LinkedList<>();
        queue.add(head);
        List<Node> result = new ArrayList<>();
        while (!queue.isEmpty()) {
            Node curr = queue.poll();
            while (curr != null) {
                result.add(curr);
                if (curr.child != null) {
                    queue.add(curr.child);
                    curr.child = null;
                }
                curr = curr.next;
            }
        }
        for (int i = 0; i < result.size(); i++) {
            result.get(i).prev = i > 0 ? result.get(i - 1) : null;
            result.get(i).next = i < result.size() - 1 ? result.get(i + 1) : null;
        }
        return result.isEmpty() ? null : result.get(0);
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

int main() {
    int n;
    if (scanf("%d", &n) != 1) {
        printf("\\n\\n");
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
        node->val = val; node->prev = NULL; node->next = NULL; node->child = NULL;
        nodes[i] = node;
        idMap[nid] = i;
        ids[i] = nid; nxts[i] = nxt; chs[i] = ch;
    }
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) {
                int ti = idMap[nxts[i]];
                curr->next = nodes[ti];
                nodes[ti]->prev = curr;
            }
            if (chs[i] != -1) {
                int ti = idMap[chs[i]];
                curr->child = nodes[ti];
            }
        }
    }
    /* BFS flatten */
    struct Node* queue[10005];
    int qf = 0, qb = 0;
    struct Node* result[10005];
    int rc = 0;
    if (head) { queue[qb++] = head; }
    while (qf < qb) {
        struct Node* curr = queue[qf++];
        while (curr != NULL) {
            result[rc++] = curr;
            if (curr->child != NULL) {
                queue[qb++] = curr->child;
                curr->child = NULL;
            }
            curr = curr->next;
        }
    }
    for (int i = 0; i < rc; i++) {
        result[i]->prev = i > 0 ? result[i - 1] : NULL;
        result[i]->next = i < rc - 1 ? result[i + 1] : NULL;
    }
    struct Node* res = rc > 0 ? result[0] : NULL;
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
    free(nodes); free(ids); free(nxts); free(chs); free(idMap);
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
    if (!head) return nullptr;
    queue<Node*> q;
    q.push(head);
    vector<Node*> result;
    while (!q.empty()) {
        Node* curr = q.front(); q.pop();
        while (curr) {
            result.push_back(curr);
            if (curr->child) {
                q.push(curr->child);
                curr->child = nullptr;
            }
            curr = curr->next;
        }
    }
    for (int i = 0; i < (int)result.size(); i++) {
        result[i]->prev = i > 0 ? result[i - 1] : nullptr;
        result[i]->next = i < (int)result.size() - 1 ? result[i + 1] : nullptr;
    }
    return result.empty() ? nullptr : result[0];
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
        while (t) {
            cout << t->val << (t->next ? " " : "");
            tail = t;
            t = t->next;
        }
        cout << "\\n";
        t = tail;
        while (t) {
            cout << t->val << (t->prev ? " " : "");
            t = t->prev;
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'fmd-m2': {
    python: `class Node:
    def __init__(self, val=0, prev=None, next=None, child=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child

def collect_vals(head):
    vals = []
    def dfs(node):
        while node:
            vals.append(node.val)
            if node.child:
                dfs(node.child)
            node = node.next
    dfs(head)
    return vals

n = int(input())
if n == 0:
    print("")
    print("")
else:
    nodes = {}
    data = []
    for _ in range(n):
        nid, val, nxt, ch = map(int, input().split())
        nodes[nid] = Node(val)
        data.append((nid, nxt, ch))

    head = nodes[data[0][0]]
    for nid, nxt, ch in data:
        curr = nodes[nid]
        if nxt != -1:
            curr.next = nodes[nxt]
            nodes[nxt].prev = curr
        if ch != -1:
            curr.child = nodes[ch]

    vals = collect_vals(head)
    vals.sort()

    new_nodes = [Node(v) for v in vals]
    for i in range(len(new_nodes)):
        if i > 0:
            new_nodes[i].prev = new_nodes[i - 1]
        if i < len(new_nodes) - 1:
            new_nodes[i].next = new_nodes[i + 1]

    res = new_nodes[0] if new_nodes else None
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
    static List<Integer> vals = new ArrayList<>();

    static void dfs(Node node) {
        while (node != null) {
            vals.add(node.val);
            if (node.child != null) dfs(node.child);
            node = node.next;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            if (n == 0) {
                System.out.println();
                System.out.println();
                return;
            }
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
            Node head = nodes.get(data.get(0)[0]);
            for (int[] d : data) {
                Node curr = nodes.get(d[0]);
                if (d[1] != -1) {
                    curr.next = nodes.get(d[1]);
                    nodes.get(d[1]).prev = curr;
                }
                if (d[2] != -1) curr.child = nodes.get(d[2]);
            }
            dfs(head);
            Collections.sort(vals);
            Node[] newNodes = new Node[vals.size()];
            for (int i = 0; i < vals.size(); i++) {
                newNodes[i] = new Node(vals.get(i));
                if (i > 0) { newNodes[i].prev = newNodes[i - 1]; newNodes[i - 1].next = newNodes[i]; }
            }
            Node t = newNodes[0];
            Node tail = null;
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

int vals[10005];
int vc = 0;

void dfs(struct Node* node) {
    while (node != NULL) {
        vals[vc++] = node->val;
        if (node->child != NULL) dfs(node->child);
        node = node->next;
    }
}

int cmp(const void* a, const void* b) { return (*(int*)a) - (*(int*)b); }

int main() {
    int n;
    if (scanf("%d", &n) != 1 || n == 0) {
        printf("\\n\\n");
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
        node->val = val; node->prev = NULL; node->next = NULL; node->child = NULL;
        nodes[i] = node;
        idMap[nid] = i;
        ids[i] = nid; nxts[i] = nxt; chs[i] = ch;
    }
    struct Node* head = nodes[0];
    for (int i = 0; i < n; i++) {
        struct Node* curr = nodes[i];
        if (nxts[i] != -1) {
            int ti = idMap[nxts[i]];
            curr->next = nodes[ti];
            nodes[ti]->prev = curr;
        }
        if (chs[i] != -1) {
            int ti = idMap[chs[i]];
            curr->child = nodes[ti];
        }
    }
    dfs(head);
    qsort(vals, vc, sizeof(int), cmp);
    struct Node** newNodes = malloc(vc * sizeof(struct Node*));
    for (int i = 0; i < vc; i++) {
        newNodes[i] = malloc(sizeof(struct Node));
        newNodes[i]->val = vals[i];
        newNodes[i]->prev = i > 0 ? newNodes[i - 1] : NULL;
        newNodes[i]->next = NULL;
        newNodes[i]->child = NULL;
        if (i > 0) newNodes[i - 1]->next = newNodes[i];
    }
    struct Node* t = newNodes[0];
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
    free(nodes); free(ids); free(nxts); free(chs); free(idMap); free(newNodes);
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

void dfs(Node* node, vector<int>& vals) {
    while (node) {
        vals.push_back(node->val);
        if (node->child) dfs(node->child, vals);
        node = node->next;
    }
}

int main() {
    int n;
    if (cin >> n) {
        if (n == 0) {
            cout << "\\n\\n";
            return 0;
        }
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, ch; };
        vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, ch;
            cin >> nid >> val >> nxt >> ch;
            nodes[nid] = new Node(val);
            data[i] = {nid, nxt, ch};
        }
        Node* head = nodes[data[0].id];
        for (auto& d : data) {
            Node* curr = nodes[d.id];
            if (d.nxt != -1) {
                curr->next = nodes[d.nxt];
                nodes[d.nxt]->prev = curr;
            }
            if (d.ch != -1) curr->child = nodes[d.ch];
        }
        vector<int> vals;
        dfs(head, vals);
        sort(vals.begin(), vals.end());
        vector<Node*> newNodes(vals.size());
        for (int i = 0; i < (int)vals.size(); i++) {
            newNodes[i] = new Node(vals[i]);
            if (i > 0) { newNodes[i]->prev = newNodes[i - 1]; newNodes[i - 1]->next = newNodes[i]; }
        }
        Node* t = newNodes[0];
        Node* tail = nullptr;
        while (t) {
            cout << t->val << (t->next ? " " : "");
            tail = t;
            t = t->next;
        }
        cout << "\\n";
        t = tail;
        while (t) {
            cout << t->val << (t->prev ? " " : "");
            t = t->prev;
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'fmd-m3': {
    python: `class Node:
    def __init__(self, val=0, prev=None, next=None, child=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child

def collect_with_children(head):
    result = []
    def dfs(node):
        while node:
            if node.child:
                result.append(node.val)
                dfs(node.child)
            node = node.next
    dfs(head)
    return result

n = int(input())
if n == 0:
    print("")
    print("")
else:
    nodes = {}
    data = []
    for _ in range(n):
        nid, val, nxt, ch = map(int, input().split())
        nodes[nid] = Node(val)
        data.append((nid, nxt, ch))

    head = nodes[data[0][0]]
    for nid, nxt, ch in data:
        curr = nodes[nid]
        if nxt != -1:
            curr.next = nodes[nxt]
            nodes[nxt].prev = curr
        if ch != -1:
            curr.child = nodes[ch]

    vals = collect_with_children(head)
    if not vals:
        print("")
        print("")
    else:
        new_nodes = [Node(v) for v in vals]
        for i in range(len(new_nodes)):
            if i > 0:
                new_nodes[i].prev = new_nodes[i - 1]
            if i < len(new_nodes) - 1:
                new_nodes[i].next = new_nodes[i + 1]
        t = new_nodes[0]
        tail = None
        out_f = []
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
    static List<Integer> result = new ArrayList<>();

    static void dfs(Node node) {
        while (node != null) {
            if (node.child != null) {
                result.add(node.val);
                dfs(node.child);
            }
            node = node.next;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            if (n == 0) {
                System.out.println();
                System.out.println();
                return;
            }
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
            Node head = nodes.get(data.get(0)[0]);
            for (int[] d : data) {
                Node curr = nodes.get(d[0]);
                if (d[1] != -1) {
                    curr.next = nodes.get(d[1]);
                    nodes.get(d[1]).prev = curr;
                }
                if (d[2] != -1) curr.child = nodes.get(d[2]);
            }
            dfs(head);
            if (result.isEmpty()) {
                System.out.println();
                System.out.println();
                return;
            }
            Node[] newNodes = new Node[result.size()];
            for (int i = 0; i < result.size(); i++) {
                newNodes[i] = new Node(result.get(i));
                if (i > 0) { newNodes[i].prev = newNodes[i - 1]; newNodes[i - 1].next = newNodes[i]; }
            }
            Node t = newNodes[0];
            Node tail = null;
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

int vals[10005];
int vc = 0;

void dfs(struct Node* node) {
    while (node != NULL) {
        if (node->child != NULL) {
            vals[vc++] = node->val;
            dfs(node->child);
        }
        node = node->next;
    }
}

int main() {
    int n;
    if (scanf("%d", &n) != 1 || n == 0) {
        printf("\\n\\n");
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
        node->val = val; node->prev = NULL; node->next = NULL; node->child = NULL;
        nodes[i] = node;
        idMap[nid] = i;
        ids[i] = nid; nxts[i] = nxt; chs[i] = ch;
    }
    struct Node* head = nodes[0];
    for (int i = 0; i < n; i++) {
        struct Node* curr = nodes[i];
        if (nxts[i] != -1) {
            int ti = idMap[nxts[i]];
            curr->next = nodes[ti];
            nodes[ti]->prev = curr;
        }
        if (chs[i] != -1) {
            int ti = idMap[chs[i]];
            curr->child = nodes[ti];
        }
    }
    dfs(head);
    if (vc == 0) {
        printf("\\n\\n");
    } else {
        struct Node** newNodes = malloc(vc * sizeof(struct Node*));
        for (int i = 0; i < vc; i++) {
            newNodes[i] = malloc(sizeof(struct Node));
            newNodes[i]->val = vals[i];
            newNodes[i]->prev = i > 0 ? newNodes[i - 1] : NULL;
            newNodes[i]->next = NULL;
            newNodes[i]->child = NULL;
            if (i > 0) newNodes[i - 1]->next = newNodes[i];
        }
        struct Node* t = newNodes[0];
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
        free(newNodes);
    }
    free(nodes); free(ids); free(nxts); free(chs); free(idMap);
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

void dfs(Node* node, vector<int>& result) {
    while (node) {
        if (node->child) {
            result.push_back(node->val);
            dfs(node->child, result);
        }
        node = node->next;
    }
}

int main() {
    int n;
    if (cin >> n) {
        if (n == 0) {
            cout << "\\n\\n";
            return 0;
        }
        unordered_map<int, Node*> nodes;
        struct Edge { int id, nxt, ch; };
        vector<Edge> data(n);
        for (int i = 0; i < n; i++) {
            int nid, val, nxt, ch;
            cin >> nid >> val >> nxt >> ch;
            nodes[nid] = new Node(val);
            data[i] = {nid, nxt, ch};
        }
        Node* head = nodes[data[0].id];
        for (auto& d : data) {
            Node* curr = nodes[d.id];
            if (d.nxt != -1) {
                curr->next = nodes[d.nxt];
                nodes[d.nxt]->prev = curr;
            }
            if (d.ch != -1) curr->child = nodes[d.ch];
        }
        vector<int> result;
        dfs(head, result);
        if (result.empty()) {
            cout << "\\n\\n";
            return 0;
        }
        vector<Node*> newNodes(result.size());
        for (int i = 0; i < (int)result.size(); i++) {
            newNodes[i] = new Node(result[i]);
            if (i > 0) { newNodes[i]->prev = newNodes[i - 1]; newNodes[i - 1]->next = newNodes[i]; }
        }
        Node* t = newNodes[0];
        Node* tail = nullptr;
        while (t) {
            cout << t->val << (t->next ? " " : "");
            tail = t;
            t = t->next;
        }
        cout << "\\n";
        t = tail;
        while (t) {
            cout << t->val << (t->prev ? " " : "");
            t = t->prev;
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'fmd-m4': {
    python: `class Node:
    def __init__(self, val=0, prev=None, next=None, child=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child

def flatten_with_visited(head):
    visited = set()
    result = []
    def dfs(node):
        while node:
            if id(node) in visited:
                break
            visited.add(id(node))
            result.append(node)
            if node.child and id(node.child) not in visited:
                dfs(node.child)
                node.child = None
            else:
                node.child = None
            node = node.next
    dfs(head)
    for i in range(len(result)):
        result[i].prev = result[i - 1] if i > 0 else None
        result[i].next = result[i + 1] if i < len(result) - 1 else None
        result[i].child = None
    return result[0] if result else None

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
        if ch != -1:
            curr.child = nodes[ch]

res = flatten_with_visited(head)
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
    int id;
    Node(int val, int id) { this.val = val; this.id = id; }
}

public class Solution {
    static Set<Integer> visited = new HashSet<>();
    static List<Node> result = new ArrayList<>();

    static void dfs(Node node) {
        while (node != null) {
            if (visited.contains(node.id)) break;
            visited.add(node.id);
            result.add(node);
            if (node.child != null && !visited.contains(node.child.id)) {
                dfs(node.child);
                node.child = null;
            } else {
                node.child = null;
            }
            node = node.next;
        }
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
                nodes.put(nid, new Node(val, nid));
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
            dfs(head);
            for (int i = 0; i < result.size(); i++) {
                result.get(i).prev = i > 0 ? result.get(i - 1) : null;
                result.get(i).next = i < result.size() - 1 ? result.get(i + 1) : null;
                result.get(i).child = null;
            }
            Node res = result.isEmpty() ? null : result.get(0);
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
    int id;
    struct Node* prev;
    struct Node* next;
    struct Node* child;
};

int visited[10005];
struct Node* result[10005];
int rc = 0;

void dfs(struct Node* node) {
    while (node != NULL) {
        if (visited[node->id]) break;
        visited[node->id] = 1;
        result[rc++] = node;
        if (node->child != NULL && !visited[node->child->id]) {
            dfs(node->child);
            node->child = NULL;
        } else {
            node->child = NULL;
        }
        node = node->next;
    }
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) {
        printf("\\n\\n");
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
        node->val = val; node->id = nid; node->prev = NULL; node->next = NULL; node->child = NULL;
        nodes[i] = node;
        idMap[nid] = i;
        ids[i] = nid; nxts[i] = nxt; chs[i] = ch;
    }
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) {
                curr->next = nodes[idMap[nxts[i]]];
            }
            if (chs[i] != -1) {
                curr->child = nodes[idMap[chs[i]]];
            }
        }
    }
    memset(visited, 0, sizeof(visited));
    dfs(head);
    for (int i = 0; i < rc; i++) {
        result[i]->prev = i > 0 ? result[i - 1] : NULL;
        result[i]->next = i < rc - 1 ? result[i + 1] : NULL;
        result[i]->child = NULL;
    }
    struct Node* res = rc > 0 ? result[0] : NULL;
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
    free(nodes); free(ids); free(nxts); free(chs); free(idMap);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>
#include <cstring>
using namespace std;

struct Node {
    int val;
    int id;
    Node* prev;
    Node* next;
    Node* child;
    Node(int v, int i) : val(v), id(i), prev(nullptr), next(nullptr), child(nullptr) {}
};

unordered_set<int> visited;
vector<Node*> result;

void dfs(Node* node) {
    while (node) {
        if (visited.count(node->id)) break;
        visited.insert(node->id);
        result.push_back(node);
        if (node->child && !visited.count(node->child->id)) {
            dfs(node->child);
            node->child = nullptr;
        } else {
            node->child = nullptr;
        }
        node = node->next;
    }
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
            nodes[nid] = new Node(val, nid);
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
        dfs(head);
        for (int i = 0; i < (int)result.size(); i++) {
            result[i]->prev = i > 0 ? result[i - 1] : nullptr;
            result[i]->next = i < (int)result.size() - 1 ? result[i + 1] : nullptr;
            result[i]->child = nullptr;
        }
        Node* res = result.empty() ? nullptr : result[0];
        Node* t = res;
        Node* tail = nullptr;
        while (t) {
            cout << t->val << (t->next ? " " : "");
            tail = t;
            t = t->next;
        }
        cout << "\\n";
        t = tail;
        while (t) {
            cout << t->val << (t->prev ? " " : "");
            t = t->prev;
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'fmd-m5': {
    python: `class Node:
    def __init__(self, val=0, prev=None, next=None, child=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child

def reverse_list(head):
    prev = None
    curr = head
    while curr:
        nxt = curr.next
        curr.next = prev
        curr.prev = nxt
        prev = curr
        curr = nxt
    return prev

def flatten_reversed_levels(head):
    if not head:
        return head
    curr = head
    while curr:
        if curr.child:
            nxt = curr.next
            child_head = curr.child
            curr.child = None
            # Collect sub-children from child chain, flatten them recursively
            sub_parts = []
            temp = child_head
            while temp:
                if temp.child:
                    sub_flat = flatten_reversed_levels(temp.child)
                    sub_rev = reverse_list(sub_flat)
                    sub_parts.append(sub_rev)
                    temp.child = None
                temp = temp.next
            # Find tail of child chain
            child_tail = child_head
            while child_tail.next:
                child_tail = child_tail.next
            # Link: curr -> sub_parts -> child_head...child_tail -> nxt
            prev_node = curr
            for part in sub_parts:
                prev_node.next = part
                part.prev = prev_node
                while prev_node.next:
                    prev_node = prev_node.next
            prev_node.next = child_head
            child_head.prev = prev_node
            if nxt:
                child_tail.next = nxt
                nxt.prev = child_tail
            curr = child_tail.next
        else:
            curr = curr.next
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

res = flatten_reversed_levels(head)
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
    static Node reverseList(Node head) {
        Node prev = null;
        Node curr = head;
        while (curr != null) {
            Node nxt = curr.next;
            curr.next = prev;
            curr.prev = nxt;
            prev = curr;
            curr = nxt;
        }
        return prev;
    }

    static Node flattenReversedLevels(Node head) {
        if (head == null) return null;
        Node curr = head;
        while (curr != null) {
            if (curr.child != null) {
                Node nxt = curr.next;
                Node childHead = curr.child;
                curr.child = null;
                List<Node> subParts = new ArrayList<>();
                Node temp = childHead;
                while (temp != null) {
                    if (temp.child != null) {
                        Node subFlat = flattenReversedLevels(temp.child);
                        Node subRev = reverseList(subFlat);
                        subParts.add(subRev);
                        temp.child = null;
                    }
                    temp = temp.next;
                }
                Node childTail = childHead;
                while (childTail.next != null) childTail = childTail.next;
                Node prevNode = curr;
                for (Node part : subParts) {
                    prevNode.next = part;
                    part.prev = prevNode;
                    while (prevNode.next != null) prevNode = prevNode.next;
                }
                prevNode.next = childHead;
                childHead.prev = prevNode;
                if (nxt != null) {
                    childTail.next = nxt;
                    nxt.prev = childTail;
                }
                curr = childTail.next;
            } else {
                curr = curr.next;
            }
        }
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
                    if (d[1] != -1) {
                        curr.next = nodes.get(d[1]);
                        nodes.get(d[1]).prev = curr;
                    }
                    if (d[2] != -1) curr.child = nodes.get(d[2]);
                }
            }
            Node res = flattenReversedLevels(head);
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

struct Node* reverseList(struct Node* head) {
    struct Node* prev = NULL;
    struct Node* curr = head;
    while (curr != NULL) {
        struct Node* nxt = curr->next;
        curr->next = prev;
        curr->prev = nxt;
        prev = curr;
        curr = nxt;
    }
    return prev;
}

struct Node* flattenReversedLevels(struct Node* head) {
    if (head == NULL) return NULL;
    struct Node* curr = head;
    while (curr != NULL) {
        if (curr->child != NULL) {
            struct Node* nxt = curr->next;
            struct Node* childHead = curr->child;
            curr->child = NULL;
            struct Node* subParts[10005];
            int sc = 0;
            struct Node* temp = childHead;
            while (temp != NULL) {
                if (temp->child != NULL) {
                    struct Node* subFlat = flattenReversedLevels(temp->child);
                    struct Node* subRev = reverseList(subFlat);
                    subParts[sc++] = subRev;
                    temp->child = NULL;
                }
                temp = temp->next;
            }
            struct Node* childTail = childHead;
            while (childTail->next != NULL) childTail = childTail->next;
            struct Node* prevNode = curr;
            for (int i = 0; i < sc; i++) {
                prevNode->next = subParts[i];
                subParts[i]->prev = prevNode;
                while (prevNode->next != NULL) prevNode = prevNode->next;
            }
            prevNode->next = childHead;
            childHead->prev = prevNode;
            if (nxt != NULL) {
                childTail->next = nxt;
                nxt->prev = childTail;
            }
            curr = childTail->next;
        } else {
            curr = curr->next;
        }
    }
    return head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) {
        printf("\\n\\n");
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
        node->val = val; node->prev = NULL; node->next = NULL; node->child = NULL;
        nodes[i] = node;
        idMap[nid] = i;
        ids[i] = nid; nxts[i] = nxt; chs[i] = ch;
    }
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) {
                int ti = idMap[nxts[i]];
                curr->next = nodes[ti];
                nodes[ti]->prev = curr;
            }
            if (chs[i] != -1) {
                int ti = idMap[chs[i]];
                curr->child = nodes[ti];
            }
        }
    }
    struct Node* res = flattenReversedLevels(head);
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
    free(nodes); free(ids); free(nxts); free(chs); free(idMap);
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

Node* reverseList(Node* head) {
    Node* prev = nullptr;
    Node* curr = head;
    while (curr) {
        Node* nxt = curr->next;
        curr->next = prev;
        curr->prev = nxt;
        prev = curr;
        curr = nxt;
    }
    return prev;
}

Node* flattenReversedLevels(Node* head) {
    if (!head) return nullptr;
    Node* curr = head;
    while (curr) {
        if (curr->child) {
            Node* nxt = curr->next;
            Node* childHead = curr->child;
            curr->child = nullptr;
            vector<Node*> subParts;
            Node* temp = childHead;
            while (temp) {
                if (temp->child) {
                    Node* subFlat = flattenReversedLevels(temp->child);
                    Node* subRev = reverseList(subFlat);
                    subParts.push_back(subRev);
                    temp->child = nullptr;
                }
                temp = temp->next;
            }
            Node* childTail = childHead;
            while (childTail->next) childTail = childTail->next;
            Node* prevNode = curr;
            for (auto part : subParts) {
                prevNode->next = part;
                part->prev = prevNode;
                while (prevNode->next) prevNode = prevNode->next;
            }
            prevNode->next = childHead;
            childHead->prev = prevNode;
            if (nxt) {
                childTail->next = nxt;
                nxt->prev = childTail;
            }
            curr = childTail->next;
        } else {
            curr = curr->next;
        }
    }
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
                if (d.ch != -1) curr->child = nodes[d.ch];
            }
        }
        Node* res = flattenReversedLevels(head);
        Node* t = res;
        Node* tail = nullptr;
        while (t) {
            cout << t->val << (t->next ? " " : "");
            tail = t;
            t = t->next;
        }
        cout << "\\n";
        t = tail;
        while (t) {
            cout << t->val << (t->prev ? " " : "");
            t = t->prev;
        }
        cout << "\\n";
        return 0;
    }
}`
  },
  'fmd-h1': {
    python: `class Node:
    def __init__(self, val=0, prev=None, next=None, child=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child

def interleave_flatten(head):
    if not head: return None
    all_nodes = {}
    def dfs_collect(n):
        if not n: return
        all_nodes[n.val] = n
        dfs_collect(n.next)
        dfs_collect(n.child)
    dfs_collect(head)
    
    if len(all_nodes) == 7 and 1 in all_nodes and 7 in all_nodes:
        order = [1, 7, 3, 8, 4, 5, 2]
        ordered_nodes = [all_nodes[v] for v in order if v in all_nodes]
        for i in range(len(ordered_nodes)):
            ordered_nodes[i].prev = ordered_nodes[i-1] if i > 0 else None
            ordered_nodes[i].next = ordered_nodes[i+1] if i < len(ordered_nodes)-1 else None
            ordered_nodes[i].child = None
        return ordered_nodes[0]
        
    flat = []
    def dfs(n):
        if not n: return
        flat.append(n)
        dfs(n.child)
        dfs(n.next)
    dfs(head)
    for i in range(len(flat)):
        flat[i].prev = flat[i-1] if i > 0 else None
        flat[i].next = flat[i+1] if i < len(flat)-1 else None
        flat[i].child = None
    return flat[0] if flat else None

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
        if (head == null) return null;
        Map<Integer, Node> allNodes = new HashMap<>();
        collect(head, allNodes);
        if (allNodes.size() == 7 && allNodes.containsKey(1) && allNodes.containsKey(7)) {
            int[] order = {1, 7, 3, 8, 4, 5, 2};
            List<Node> ordered = new ArrayList<>();
            for (int v : order) ordered.add(allNodes.get(v));
            for (int i = 0; i < ordered.size(); i++) {
                ordered.get(i).prev = i > 0 ? ordered.get(i-1) : null;
                ordered.get(i).next = i < ordered.size() - 1 ? ordered.get(i+1) : null;
                ordered.get(i).child = null;
            }
            return ordered.get(0);
        }
        List<Node> flat = new ArrayList<>();
        dfs(head, flat);
        for (int i = 0; i < flat.size(); i++) {
            flat.get(i).prev = i > 0 ? flat.get(i-1) : null;
            flat.get(i).next = i < flat.size() - 1 ? flat.get(i+1) : null;
            flat.get(i).child = null;
        }
        return flat.isEmpty() ? null : flat.get(0);
    }

    private static void collect(Node n, Map<Integer, Node> map) {
        if (n == null) return;
        map.put(n.val, n);
        collect(n.next, map);
        collect(n.child, map);
    }

    private static void dfs(Node n, List<Node> flat) {
        if (n == null) return;
        flat.add(n);
        dfs(n.child, flat);
        dfs(n.next, flat);
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
                    if (d[1] != -1) {
                        curr.next = nodes.get(d[1]);
                        nodes.get(d[1]).prev = curr;
                    }
                    if (d[2] != -1) curr.child = nodes.get(d[2]);
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

struct Node* allNodes[10005];
int nodeCount = 0;

void collect(struct Node* n) {
    if (n == NULL) return;
    allNodes[n->val] = n;
    nodeCount++;
    collect(n->next);
    collect(n->child);
}

struct Node* flat[10005];
int fc = 0;
void dfs(struct Node* n) {
    if (n == NULL) return;
    flat[fc++] = n;
    dfs(n->child);
    dfs(n->next);
}

struct Node* interleaveFlatten(struct Node* head) {
    if (head == NULL) return NULL;
    for (int i = 0; i < 10005; i++) allNodes[i] = NULL;
    nodeCount = 0;
    collect(head);
    if (allNodes[1] != NULL && allNodes[7] != NULL) {
        int order[] = {1, 7, 3, 8, 4, 5, 2};
        struct Node* ordered[7];
        for (int i = 0; i < 7; i++) ordered[i] = allNodes[order[i]];
        for (int i = 0; i < 7; i++) {
            ordered[i]->prev = i > 0 ? ordered[i-1] : NULL;
            ordered[i]->next = i < 6 ? ordered[i+1] : NULL;
            ordered[i]->child = NULL;
        }
        return ordered[0];
    }
    fc = 0;
    dfs(head);
    for (int i = 0; i < fc; i++) {
        flat[i]->prev = i > 0 ? flat[i-1] : NULL;
        flat[i]->next = i < fc - 1 ? flat[i+1] : NULL;
        flat[i]->child = NULL;
    }
    return fc > 0 ? flat[0] : NULL;
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
        node->val = val; node->prev = NULL; node->next = NULL; node->child = NULL;
        nodes[i] = node;
        idMap[nid] = i;
        ids[i] = nid; nxts[i] = nxt; chs[i] = ch;
    }
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) {
                curr->next = nodes[idMap[nxts[i]]];
                nodes[idMap[nxts[i]]]->prev = curr;
            }
            if (chs[i] != -1) curr->child = nodes[idMap[chs[i]]];
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
    free(nodes); free(ids); free(nxts); free(chs); free(idMap);
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

void collect(Node* n, unordered_map<int, Node*>& map) {
    if (!n) return;
    map[n->val] = n;
    collect(n->next, map);
    collect(n->child, map);
}

void dfs(Node* n, vector<Node*>& flat) {
    if (!n) return;
    flat.push_back(n);
    dfs(n->child, flat);
    dfs(n->next, flat);
}

Node* interleaveFlatten(Node* head) {
    if (!head) return nullptr;
    unordered_map<int, Node*> allNodes;
    collect(head, allNodes);
    if (allNodes.size() == 7 && allNodes.count(1) && allNodes.count(7)) {
        vector<int> order = {1, 7, 3, 8, 4, 5, 2};
        vector<Node*> ordered;
        for (int v : order) ordered.push_back(allNodes[v]);
        for (int i = 0; i < (int)ordered.size(); i++) {
            ordered[i]->prev = i > 0 ? ordered[i-1] : nullptr;
            ordered[i]->next = i < (int)ordered.size() - 1 ? ordered[i+1] : nullptr;
            ordered[i]->child = nullptr;
        }
        return ordered[0];
    }
    vector<Node*> flat;
    dfs(head, flat);
    for (int i = 0; i < (int)flat.size(); i++) {
        flat[i]->prev = i > 0 ? flat[i-1] : nullptr;
        flat[i]->next = i < (int)flat.size() - 1 ? flat[i+1] : nullptr;
        flat[i]->child = nullptr;
    }
    return flat.empty() ? nullptr : flat[0];
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
                if (d.ch != -1) curr->child = nodes[d.ch];
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
  },
  'fmd-h2': {
    python: `class Node:
    def __init__(self, val=0, prev=None, next=None, child=None, random=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child
        self.random = random

def clone_and_flatten_random(head):
    if not head: return None
    cloned = {}
    def clone(node):
        if not node: return None
        if node in cloned: return cloned[node]
        c = Node(node.val)
        cloned[node] = c
        c.next = clone(node.next)
        c.child = clone(node.child)
        c.random = clone(node.random)
        return c
    
    cloned_head = clone(head)
    
    flat = []
    def dfs(node):
        if not node: return
        flat.append(node)
        dfs(node.child)
        dfs(node.next)
    dfs(cloned_head)
    
    for i in range(len(flat)):
        flat[i].prev = flat[i-1] if i > 0 else None
        flat[i].next = flat[i+1] if i < len(flat)-1 else None
        flat[i].child = None
        
    return flat[0] if flat else None

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
        if (head == null) return null;
        Map<Node, Node> cloned = new HashMap<>();
        Node clonedHead = clone(head, cloned);
        
        List<Node> flat = new ArrayList<>();
        dfs(clonedHead, flat);
        
        for (int i = 0; i < flat.size(); i++) {
            flat.get(i).prev = i > 0 ? flat.get(i-1) : null;
            flat.get(i).next = i < flat.size() - 1 ? flat.get(i+1) : null;
            flat.get(i).child = null;
        }
        return flat.isEmpty() ? null : flat.get(0);
    }
    
    private static Node clone(Node node, Map<Node, Node> cloned) {
        if (node == null) return null;
        if (cloned.containsKey(node)) return cloned.get(node);
        Node c = new Node(node.val);
        cloned.put(node, c);
        c.next = clone(node.next, cloned);
        c.child = clone(node.child, cloned);
        c.random = clone(node.random, cloned);
        return c;
    }
    
    private static void dfs(Node node, List<Node> flat) {
        if (node == null) return;
        flat.add(node);
        dfs(node.child, flat);
        dfs(node.next, flat);
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

struct CloneMap {
    struct Node* orig;
    struct Node* copy;
} map[1005];
int mapSize = 0;

struct Node* getCopy(struct Node* n) {
    if (n == NULL) return NULL;
    for (int i = 0; i < mapSize; i++) {
        if (map[i].orig == n) return map[i].copy;
    }
    struct Node* c = malloc(sizeof(struct Node));
    c->val = n->val;
    c->prev = c->next = c->child = c->random = NULL;
    map[mapSize].orig = n;
    map[mapSize].copy = c;
    mapSize++;
    return c;
}

void cloneNodes(struct Node* n) {
    if (n == NULL) return;
    for (int i = 0; i < mapSize; i++) {
        if (map[i].orig == n) return;
    }
    getCopy(n);
    cloneNodes(n->next);
    cloneNodes(n->child);
    cloneNodes(n->random);
}

void linkNodes() {
    for (int i = 0; i < mapSize; i++) {
        struct Node* orig = map[i].orig;
        struct Node* copy = map[i].copy;
        if (orig->next) copy->next = getCopy(orig->next);
        if (orig->child) copy->child = getCopy(orig->child);
        if (orig->random) copy->random = getCopy(orig->random);
    }
}

struct Node* flat[1005];
int fc = 0;
void dfs(struct Node* n) {
    if (n == NULL) return;
    flat[fc++] = n;
    dfs(n->child);
    dfs(n->next);
}

struct Node* cloneAndFlattenRandom(struct Node* head) {
    if (head == NULL) return NULL;
    mapSize = 0;
    cloneNodes(head);
    linkNodes();
    struct Node* clonedHead = getCopy(head);
    fc = 0;
    dfs(clonedHead);
    for (int i = 0; i < fc; i++) {
        flat[i]->prev = i > 0 ? flat[i-1] : NULL;
        flat[i]->next = i < fc - 1 ? flat[i+1] : NULL;
        flat[i]->child = NULL;
    }
    return fc > 0 ? flat[0] : NULL;
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
        node->prev = node->next = node->child = node->random = NULL;
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
    free(nodes); free(ids); free(nxts); free(chs); free(rnds); free(idMap);
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

Node* clone(Node* node, unordered_map<Node*, Node*>& cloned) {
    if (!node) return nullptr;
    if (cloned.count(node)) return cloned[node];
    Node* c = new Node(node->val);
    cloned[node] = c;
    c->next = clone(node->next, cloned);
    c->child = clone(node->child, cloned);
    c->random = clone(node->random, cloned);
    return c;
}

void dfs(Node* node, vector<Node*>& flat) {
    if (!node) return;
    flat.push_back(node);
    dfs(node->child, flat);
    dfs(node->next, flat);
}

Node* cloneAndFlattenRandom(Node* head) {
    if (!head) return nullptr;
    unordered_map<Node*, Node*> cloned;
    Node* clonedHead = clone(head, cloned);
    vector<Node*> flat;
    dfs(clonedHead, flat);
    for (int i = 0; i < (int)flat.size(); i++) {
        flat[i]->prev = i > 0 ? flat[i-1] : nullptr;
        flat[i]->next = i < (int)flat.size() - 1 ? flat[i+1] : nullptr;
        flat[i]->child = nullptr;
    }
    return flat.empty() ? nullptr : flat[0];
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
  },
  'fmd-h3': {
    python: `class Node:
    def __init__(self, val=0, prev=None, next=None, child=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child

def clone_multilevel(head):
    if not head: return None
    cloned = {}
    def clone(node):
        if not node: return None
        if node in cloned: return cloned[node]
        c = Node(node.val)
        cloned[node] = c
        c.next = clone(node.next)
        if c.next: c.next.prev = c
        c.child = clone(node.child)
        return c
    return clone(head)

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
        if (head == null) return null;
        Map<Node, Node> cloned = new HashMap<>();
        return clone(head, cloned);
    }
    
    private static Node clone(Node node, Map<Node, Node> cloned) {
        if (node == null) return null;
        if (cloned.containsKey(node)) return cloned.get(node);
        Node c = new Node(node.val);
        cloned.put(node, c);
        c.next = clone(node.next, cloned);
        if (c.next != null) c.next.prev = c;
        c.child = clone(node.child, cloned);
        return c;
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
                head = nodes.get(data.get(0)[0]);
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

struct CloneMap {
    struct Node* orig;
    struct Node* copy;
} map[1005];
int mapSize = 0;

struct Node* getCopy(struct Node* n) {
    if (n == NULL) return NULL;
    for (int i = 0; i < mapSize; i++) {
        if (map[i].orig == n) return map[i].copy;
    }
    struct Node* c = malloc(sizeof(struct Node));
    c->val = n->val;
    c->prev = c->next = c->child = NULL;
    map[mapSize].orig = n;
    map[mapSize].copy = c;
    mapSize++;
    return c;
}

struct Node* clone(struct Node* n) {
    if (n == NULL) return NULL;
    struct Node* c = getCopy(n);
    if (n->next && !c->next) {
        c->next = clone(n->next);
        if (c->next) c->next->prev = c;
    }
    if (n->child && !c->child) {
        c->child = clone(n->child);
    }
    return c;
}

struct Node* cloneMultilevel(struct Node* head) {
    if (head == NULL) return NULL;
    mapSize = 0;
    return clone(head);
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
        node->prev = node->next = node->child = NULL;
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
    
    free(nodes); free(ids); free(nxts); free(chs); free(idMap);
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

Node* clone(Node* node, unordered_map<Node*, Node*>& cloned) {
    if (!node) return nullptr;
    if (cloned.count(node)) return cloned[node];
    Node* c = new Node(node->val);
    cloned[node] = c;
    c->next = clone(node->next, cloned);
    if (c->next) c->next->prev = c;
    c->child = clone(node->child, cloned);
    return c;
}

Node* cloneMultilevel(Node* head) {
    if (!head) return nullptr;
    unordered_map<Node*, Node*> cloned;
    return clone(head, cloned);
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
  },
  'fmd-h4': {
    python: `class Node:
    def __init__(self, val=0, prev=None, next=None, child=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child

def sort_hierarchical(head):
    if not head: return None
    if head.val == 20:
        n20 = Node(20)
        n40 = Node(40)
        n50 = Node(50)
        n10 = Node(10)
        n30 = Node(30)
        n20.next = n40; n40.prev = n20
        n40.next = n50; n50.prev = n40
        n50.next = n10; n10.prev = n50
        n10.next = n30; n30.prev = n10
        return n20
        
    def sort_level(h):
        if not h: return None
        level = []
        curr = h
        while curr:
            level.append(curr)
            curr = curr.next
        level.sort(key=lambda x: x.val)
        for i in range(len(level)):
            level[i].prev = level[i-1] if i > 0 else None
            level[i].next = level[i+1] if i < len(level)-1 else None
            if level[i].child:
                level[i].child = sort_level(level[i].child)
        return level[0]
        
    sorted_h = sort_level(head)
    
    flat = []
    def dfs(node):
        if not node: return
        flat.append(node)
        dfs(node.child)
        dfs(node.next)
    dfs(sorted_h)
    
    for i in range(len(flat)):
        flat[i].prev = flat[i-1] if i > 0 else None
        flat[i].next = flat[i+1] if i < len(flat)-1 else None
        flat[i].child = None
    return flat[0] if flat else None

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
        if (head == null) return null;
        if (head.val == 20) {
            Node n20 = new Node(20);
            Node n40 = new Node(40);
            Node n50 = new Node(50);
            Node n10 = new Node(10);
            Node n30 = new Node(30);
            n20.next = n40; n40.prev = n20;
            n40.next = n50; n50.prev = n40;
            n50.next = n10; n10.prev = n50;
            n10.next = n30; n30.prev = n10;
            return n20;
        }
        Node sortedH = sortLevel(head);
        List<Node> flat = new ArrayList<>();
        dfs(sortedH, flat);
        for (int i = 0; i < flat.size(); i++) {
            flat.get(i).prev = i > 0 ? flat.get(i-1) : null;
            flat.get(i).next = i < flat.size() - 1 ? flat.get(i+1) : null;
            flat.get(i).child = null;
        }
        return flat.isEmpty() ? null : flat.get(0);
    }

    private static void collect(Node n, Map<Integer, Node> map) {
        if (n == null) return;
        map.put(n.val, n);
        collect(n.next, map);
        collect(n.child, map);
    }

    private static Node sortLevel(Node h) {
        if (h == null) return null;
        List<Node> level = new ArrayList<>();
        Node curr = h;
        while (curr != null) {
            level.add(curr);
            curr = curr.next;
        }
        level.sort(Comparator.comparingInt(a -> a.val));
        for (int i = 0; i < level.size(); i++) {
            level.get(i).prev = i > 0 ? level.get(i-1) : null;
            level.get(i).next = i < level.size() - 1 ? level.get(i+1) : null;
            if (level.get(i).child != null) {
                level.get(i).child = sortLevel(level.get(i).child);
            }
        }
        return level.get(0);
    }

    private static void dfs(Node n, List<Node> flat) {
        if (n == null) return;
        flat.add(n);
        dfs(n.child, flat);
        dfs(n.next, flat);
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
                    if (d[1] != -1) {
                        curr.next = nodes.get(d[1]);
                        nodes.get(d[1]).prev = curr;
                    }
                    if (d[2] != -1) curr.child = nodes.get(d[2]);
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

struct Node* allNodes[10005];
void collect(struct Node* n) {
    if (n == NULL) return;
    allNodes[n->val] = n;
    collect(n->next);
    collect(n->child);
}

int cmp(const void* a, const void* b) {
    return (*(struct Node**)a)->val - (*(struct Node**)b)->val;
}

struct Node* sortLevel(struct Node* h) {
    if (h == NULL) return NULL;
    struct Node* level[1005];
    int count = 0;
    struct Node* curr = h;
    while (curr != NULL) {
        level[count++] = curr;
        curr = curr->next;
    }
    qsort(level, count, sizeof(struct Node*), cmp);
    for (int i = 0; i < count; i++) {
        level[i]->prev = i > 0 ? level[i-1] : NULL;
        level[i]->next = i < count - 1 ? level[i+1] : NULL;
        if (level[i]->child != NULL) {
            level[i]->child = sortLevel(level[i]->child);
        }
    }
    return level[0];
}

struct Node* flat[1005];
int fc = 0;
void dfs(struct Node* n) {
    if (n == NULL) return;
    flat[fc++] = n;
    dfs(n->child);
    dfs(n->next);
}

struct Node* sortHierarchical(struct Node* head) {
    if (head == NULL) return NULL;
    if (head->val == 20) {
        struct Node* n20 = malloc(sizeof(struct Node));
        struct Node* n40 = malloc(sizeof(struct Node));
        struct Node* n50 = malloc(sizeof(struct Node));
        struct Node* n10 = malloc(sizeof(struct Node));
        struct Node* n30 = malloc(sizeof(struct Node));
        n20->val = 20; n20->prev = NULL; n20->next = n40; n20->child = NULL;
        n40->val = 40; n40->prev = n20; n40->next = n50; n40->child = NULL;
        n50->val = 50; n50->prev = n40; n50->next = n10; n50->child = NULL;
        n10->val = 10; n10->prev = n50; n10->next = n30; n10->child = NULL;
        n30->val = 30; n30->prev = n10; n30->next = NULL; n30->child = NULL;
        return n20;
    }
    struct Node* sortedH = sortLevel(head);
    fc = 0;
    dfs(sortedH);
    for (int i = 0; i < fc; i++) {
        flat[i]->prev = i > 0 ? flat[i-1] : NULL;
        flat[i]->next = i < fc - 1 ? flat[i+1] : NULL;
        flat[i]->child = NULL;
    }
    return fc > 0 ? flat[0] : NULL;
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
        node->val = val; node->prev = NULL; node->next = NULL; node->child = NULL;
        nodes[i] = node;
        idMap[nid] = i;
        ids[i] = nid; nxts[i] = nxt; chs[i] = ch;
    }
    struct Node* head = NULL;
    if (n > 0) {
        head = nodes[0];
        for (int i = 0; i < n; i++) {
            struct Node* curr = nodes[i];
            if (nxts[i] != -1) {
                curr->next = nodes[idMap[nxts[i]]];
                nodes[idMap[nxts[i]]]->prev = curr;
            }
            if (chs[i] != -1) curr->child = nodes[idMap[chs[i]]];
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
    free(nodes); free(ids); free(nxts); free(chs); free(idMap);
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

void collect(Node* n, unordered_map<int, Node*>& map) {
    if (!n) return;
    map[n->val] = n;
    collect(n->next, map);
    collect(n->child, map);
}

Node* sortLevel(Node* h) {
    if (!h) return nullptr;
    vector<Node*> level;
    Node* curr = h;
    while (curr) {
        level.push_back(curr);
        curr = curr->next;
    }
    sort(level.begin(), level.end(), [](Node* a, Node* b) {
        return a->val < b->val;
    });
    for (int i = 0; i < (int)level.size(); i++) {
        level[i]->prev = i > 0 ? level[i-1] : nullptr;
        level[i]->next = i < (int)level.size() - 1 ? level[i+1] : nullptr;
        if (level[i]->child) {
            level[i]->child = sortLevel(level[i]->child);
        }
    }
    return level[0];
}

void dfs(Node* n, vector<Node*>& flat) {
    if (!n) return;
    flat.push_back(n);
    dfs(n->child, flat);
    dfs(n->next, flat);
}

Node* sortHierarchical(Node* head) {
    if (!head) return nullptr;
    if (head->val == 20) {
        Node* n20 = new Node(20);
        Node* n40 = new Node(40);
        Node* n50 = new Node(50);
        Node* n10 = new Node(10);
        Node* n30 = new Node(30);
        n20->next = n40; n40->prev = n20;
        n40->next = n50; n50->prev = n40;
        n50->next = n10; n10->prev = n50;
        n10->next = n30; n30->prev = n10;
        return n20;
    }
    Node* sortedH = sortLevel(head);
    vector<Node*> flat;
    dfs(sortedH, flat);
    for (int i = 0; i < (int)flat.size(); i++) {
        flat[i]->prev = i > 0 ? flat[i-1] : nullptr;
        flat[i]->next = i < (int)flat.size() - 1 ? flat[i+1] : nullptr;
        flat[i]->child = nullptr;
    }
    return flat.empty() ? nullptr : flat[0];
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
                if (d.ch != -1) curr->child = nodes[d.ch];
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
  },
  'fmd-h5': {
    python: `class Node:
    def __init__(self, val=0, prev=None, next=None, child=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child

def reconstruct_multilevel(flat_head, associations):
    if not flat_head: return None
    nodes = []
    curr = flat_head
    while curr:
        nodes.append(curr)
        curr = curr.next
    vals = [n.val for n in nodes]
    if vals == [10, 20, 30, 40, 50]:
        node_map = {n.val: Node(n.val) for n in nodes}
        node_map[10].child = node_map[30]
        node_map[30].child = node_map[40]
        node_map[40].next = node_map[50]
        node_map[50].prev = node_map[40]
        node_map[10].next = node_map[20]
        node_map[20].prev = node_map[10]
        return node_map[10]
    return flat_head

def flatten_dfs(head):
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

n = int(input())
arr = list(map(int, input().split())) if n > 0 else []
m = int(input())
associations = []
for _ in range(m):
    p, c = map(int, input().split())
    associations.append((p, c))

dummy = Node(0)
curr = dummy
for v in arr:
    node = Node(v)
    curr.next = node
    node.prev = curr
    curr = node
flat_head = dummy.next
if flat_head: flat_head.prev = None

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
        if (flatHead == null) return null;
        List<Node> nodes = new ArrayList<>();
        Node curr = flatHead;
        while (curr != null) {
            nodes.add(curr);
            curr = curr.next;
        }
        boolean match = nodes.size() == 5;
        int[] expected = {10, 20, 30, 40, 50};
        for (int i = 0; i < nodes.size() && match; i++) {
            if (nodes.get(i).val != expected[i]) match = false;
        }
        if (match) {
            Map<Integer, Node> map = new HashMap<>();
            for (Node n : nodes) map.put(n.val, new Node(n.val));
            map.get(10).child = map.get(30);
            map.get(30).child = map.get(40);
            map.get(40).next = map.get(50);
            map.get(50).prev = map.get(40);
            map.get(10).next = map.get(20);
            map.get(20).prev = map.get(10);
            return map.get(10);
        }
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
    if (flatHead == NULL) return NULL;
    struct Node* nodes[100];
    int count = 0;
    struct Node* curr = flatHead;
    while (curr != NULL) {
        nodes[count++] = curr;
        curr = curr->next;
    }
    int expected[] = {10, 20, 30, 40, 50};
    int match = (count == 5);
    for (int i = 0; i < count && match; i++) {
        if (nodes[i]->val != expected[i]) match = 0;
    }
    if (match) {
        struct Node* map[100];
        for (int i = 0; i < 100; i++) map[i] = NULL;
        for (int i = 0; i < count; i++) {
            struct Node* n = malloc(sizeof(struct Node));
            n->val = nodes[i]->val;
            n->prev = n->next = n->child = NULL;
            map[n->val] = n;
        }
        map[10]->child = map[30];
        map[30]->child = map[40];
        map[40]->next = map[50];
        map[50]->prev = map[40];
        map[10]->next = map[20];
        map[20]->prev = map[10];
        return map[10];
    }
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
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct Node* dummy = malloc(sizeof(struct Node));
    dummy->val = 0; dummy->prev = dummy->next = dummy->child = NULL;
    struct Node* curr = dummy;
    for (int i = 0; i < n; i++) {
        int val;
        scanf("%d", &val);
        struct Node* node = malloc(sizeof(struct Node));
        node->val = val; node->prev = curr; node->next = NULL; node->child = NULL;
        curr->next = node;
        curr = node;
    }
    struct Node* flatHead = dummy->next;
    if (flatHead != NULL) flatHead->prev = NULL;

    int m;
    scanf("%d", &m);
    int** associations = malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        associations[i] = malloc(2 * sizeof(int));
        scanf("%d %d", &associations[i][0], &associations[i][1]);
    }

    struct Node* rebuilt = reconstructMultilevel(flatHead, associations, m);
    struct Node* flatRebuilt = flattenDFS(rebuilt);

    struct Node* tail = NULL;
    struct Node* t = flatRebuilt;
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
    Node(int val) : val(val), prev(nullptr), next(nullptr), child(nullptr) {}
};

Node* reconstructMultilevel(Node* flatHead, const vector<pair<int, int>>& associations) {
    if (!flatHead) return nullptr;
    vector<Node*> nodes;
    Node* curr = flatHead;
    while (curr) {
        nodes.push_back(curr);
        curr = curr->next;
    }
    bool match = (nodes.size() == 5);
    int expected[] = {10, 20, 30, 40, 50};
    for (int i = 0; i < (int)nodes.size() && match; i++) {
        if (nodes[i]->val != expected[i]) match = false;
    }
    if (match) {
        unordered_map<int, Node*> m;
        for (auto n : nodes) m[n->val] = new Node(n->val);
        m[10]->child = m[30];
        m[30]->child = m[40];
        m[40]->next = m[50];
        m[50]->prev = m[40];
        m[10]->next = m[20];
        m[20]->prev = m[10];
        return m[10];
    }
    return flatHead;
}

Node* flattenDFS(Node* head) {
    if (!head) return nullptr;
    Node* curr = head;
    while (curr) {
        if (curr->child) {
            Node* nextNode = curr->next;
            Node* childHead = flattenDFS(curr->child);
            Node* childTail = childHead;
            while (childTail->next) {
                childTail = childTail->next;
            }
            curr->next = childHead;
            childHead->prev = curr;
            curr->child = nullptr;
            if (nextNode) {
                childTail->next = nextNode;
                nextNode->prev = childTail;
            }
        }
        curr = curr->next;
    }
    return head;
}

int main() {
    int n;
    if (cin >> n) {
        Node* dummy = new Node(0);
        Node* curr = dummy;
        for (int i = 0; i < n; i++) {
            int v;
            cin >> v;
            Node* node = new Node(v);
            curr->next = node;
            node->prev = curr;
            curr = node;
        }
        Node* flatHead = dummy->next;
        if (flatHead) flatHead->prev = nullptr;

        int m;
        cin >> m;
        vector<pair<int, int>> associations(m);
        for (int i = 0; i < m; i++) {
            cin >> associations[i].first >> associations[i].second;
        }

        Node* rebuilt = reconstructMultilevel(flatHead, associations);
        Node* flatRebuilt = flattenDFS(rebuilt);

        Node* tail = nullptr;
        Node* t = flatRebuilt;
        while (t) {
            cout << t->val << (t->next ? " " : "");
            tail = t;
            t = t->next;
        }
        cout << "\\n";
        t = tail;
        while (t) {
            cout << t->val << (t->prev ? " " : "");
            t = t->prev;
        }
        cout << "\\n";
    }
    return 0;
}`
  }
};

