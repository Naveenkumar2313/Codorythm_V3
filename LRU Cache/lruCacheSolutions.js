export const lruCacheSolutions = {
  'lru-e1': {
    python: `
class Node:
    def __init__(self, key=0, val=0):
        self.key, self.val = key, val
        self.prev, self.next = None, None
class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = {}
        self.head = Node()
        self.tail = Node()
        self.head.next, self.tail.prev = self.tail, self.head
    def _remove(self, node):
        node.prev.next, node.next.prev = node.next, node.prev
    def _add(self, node):
        node.next, node.prev = self.head.next, self.head
        self.head.next.prev = node
        self.head.next = node
    def get(self, key: int) -> int:
        if key in self.cache:
            node = self.cache[key]
            self._remove(node)
            self._add(node)
            return node.val
        return -1
    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            node = self.cache[key]
            node.val = value
            self._remove(node)
            self._add(node)
        else:
            if len(self.cache) >= self.cap:
                lru = self.tail.prev
                self._remove(lru)
                del self.cache[lru.key]
            new_node = Node(key, value)
            self.cache[key] = new_node
            self._add(new_node)
capacity = int(input())
q = int(input())
cache = LRUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    else: out.append(str(cache.get(int(line[1]))))
print(" ".join(out))
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>
using namespace std;
struct Node {
    int key, val; Node* prev; Node* next;
    Node(int k=0, int v=0) : key(k), val(v), prev(nullptr), next(nullptr) {}
};
class LRUCache {
    int cap; unordered_map<int, Node*> cache; Node* head; Node* tail;
    void remove(Node* n) { n->prev->next = n->next; n->next->prev = n->prev; }
    void add(Node* n) { n->next = head->next; n->prev = head; head->next->prev = n; head->next = n; }
public:
    LRUCache(int c) : cap(c) { head = new Node(); tail = new Node(); head->next = tail; tail->prev = head; }
    int get(int key) {
        if (cache.count(key)) { Node* n = cache[key]; remove(n); add(n); return n->val; }
        return -1;
    }
    void put(int key, int value) {
        if (cache.count(key)) { Node* n = cache[key]; n->val = value; remove(n); add(n); }
        else {
            if (cache.size() >= cap) { Node* lru = tail->prev; remove(lru); cache.erase(lru->key); delete lru; }
            Node* n = new Node(key, value); cache[key] = n; add(n);
        }
    }
};
int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LRUCache cache(capacity); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(k, v); }
            else { int k; cin >> k; out.push_back(cache.get(k)); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}
`,
    java: `
import java.util.*;
class LRUCache {
    class Node {
        int key, val; Node prev, next;
        Node(int k, int v) { this.key = k; this.val = v; }
    }
    private int cap; private Map<Integer, Node> cache = new HashMap<>(); private Node head, tail;
    public LRUCache(int c) { this.cap = c; head = new Node(0,0); tail = new Node(0,0); head.next = tail; tail.prev = head; }
    private void remove(Node n) { n.prev.next = n.next; n.next.prev = n.prev; }
    private void add(Node n) { n.next = head.next; n.prev = head; head.next.prev = n; head.next = n; }
    public int get(int key) {
        if (cache.containsKey(key)) { Node n = cache.get(key); remove(n); add(n); return n.val; }
        return -1;
    }
    public void put(int key, int value) {
        if (cache.containsKey(key)) { Node n = cache.get(key); n.val = value; remove(n); add(n); }
        else {
            if (cache.size() >= cap) { Node lru = tail.prev; remove(lru); cache.remove(lru.key); }
            Node n = new Node(key, value); cache.put(key, n); add(n);
        }
    }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt(); int q = sc.nextInt();
            LRUCache cache = new LRUCache(capacity); List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt());
                else out.add(String.valueOf(cache.get(sc.nextInt())));
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
struct Node { int key; int val; struct Node* prev; struct Node* next; };
struct Node* head = NULL; struct Node* tail = NULL; int cacheSize = 0; int maxCap = 0;
void removeNode(struct Node* node) { node->prev->next = node->next; node->next->prev = node->prev; }
void addToHead(struct Node* node) { node->next = head->next; node->prev = head; head->next->prev = node; head->next = node; }
struct Node* findNode(int key) {
    struct Node* curr = head->next;
    while (curr != tail) { if (curr->key == key) return curr; curr = curr->next; }
    return NULL;
}
int get(int key) {
    struct Node* node = findNode(key);
    if (node) { removeNode(node); addToHead(node); return node->val; }
    return -1;
}
void put(int key, int value) {
    struct Node* node = findNode(key);
    if (node) { node->val = value; removeNode(node); addToHead(node); }
    else {
        if (cacheSize >= maxCap) { struct Node* lru = tail->prev; removeNode(lru); free(lru); cacheSize--; }
        struct Node* newNode = malloc(sizeof(struct Node)); newNode->key = key; newNode->val = value;
        addToHead(newNode); cacheSize++;
    }
}
int main() {
    int capacity, q; if (scanf("%d %d", &capacity, &q) != 2) return 0;
    maxCap = capacity; head = malloc(sizeof(struct Node)); tail = malloc(sizeof(struct Node));
    head->next = tail; tail->prev = head;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    printf("\\n");
    return 0;
}
`,
  },
  'lru-e2': {
    python: `
class Node:
    def __init__(self, key=0, val=0, last_t=0):
        self.key, self.val, self.last_t = key, val, last_t
        self.prev, self.next = None, None

class LRUCacheWithTTL:
    def __init__(self, capacity: int, ttl: int):
        self.cap = capacity
        self.ttl = ttl
        self.cache = {}
        self.head = Node()
        self.tail = Node()
        self.head.next, self.tail.prev = self.tail, self.head

    def _remove(self, node):
        node.prev.next, node.next.prev = node.next, node.prev

    def _add(self, node):
        node.next, node.prev = self.head.next, self.head
        self.head.next.prev = node
        self.head.next = node

    def _evict_expired(self, t: int):
        to_del = []
        curr = self.head.next
        while curr != self.tail:
            if t - curr.last_t >= self.ttl:
                to_del.append(curr)
            curr = curr.next
            
        for n in to_del:
            self._remove(n)
            del self.cache[n.key]

    def get(self, t: int, key: int) -> int:
        self._evict_expired(t)
        if key in self.cache:
            node = self.cache[key]
            node.last_t = t
            self._remove(node)
            self._add(node)
            return node.val
        return -1

    def put(self, t: int, key: int, value: int) -> None:
        self._evict_expired(t)
        if key in self.cache:
            node = self.cache[key]
            node.val = value
            node.last_t = t
            self._remove(node)
            self._add(node)
        else:
            if len(self.cache) >= self.cap:
                lru = self.tail.prev
                self._remove(lru)
                del self.cache[lru.key]
            new_node = Node(key, value, t)
            self.cache[key] = new_node
            self._add(new_node)

capacity, ttl = map(int, input().split())
q = int(input())
cache = LRUCacheWithTTL(capacity, ttl)
out = []
for _ in range(q):
    line = input().split()
    t = int(line[0])
    if line[1] == "PUT": cache.put(t, int(line[2]), int(line[3]))
    else: out.append(str(cache.get(t, int(line[2]))))
print(" ".join(out))
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>
using namespace std;

struct Node {
    int key, val, last_t; Node* prev; Node* next;
    Node(int k=0, int v=0, int t=0) : key(k), val(v), last_t(t), prev(nullptr), next(nullptr) {}
};

class LRUCacheWithTTL {
    int cap, ttl; unordered_map<int, Node*> cache; Node* head; Node* tail;
    void remove(Node* n) { n->prev->next = n->next; n->next->prev = n->prev; }
    void add(Node* n) { n->next = head->next; n->prev = head; head->next->prev = n; head->next = n; }
    void evict_expired(int t) {
        Node* curr = head->next;
        vector<Node*> to_del;
        while (curr != tail) {
            if (t - curr->last_t >= ttl) { to_del.push_back(curr); }
            curr = curr->next;
        }
        for (Node* n : to_del) { remove(n); cache.erase(n->key); delete n; }
    }
public:
    LRUCacheWithTTL(int c, int tl) : cap(c), ttl(tl) { head = new Node(); tail = new Node(); head->next = tail; tail->prev = head; }
    int get(int t, int key) {
        evict_expired(t);
        if (cache.count(key)) { Node* n = cache[key]; n->last_t = t; remove(n); add(n); return n->val; }
        return -1;
    }
    void put(int t, int key, int value) {
        evict_expired(t);
        if (cache.count(key)) { Node* n = cache[key]; n->val = value; n->last_t = t; remove(n); add(n); }
        else {
            if (cache.size() >= cap) { Node* lru = tail->prev; remove(lru); cache.erase(lru->key); delete lru; }
            Node* n = new Node(key, value, t); cache[key] = n; add(n);
        }
    }
};

int main() {
    int capacity, ttl, q;
    if (cin >> capacity >> ttl >> q) {
        LRUCacheWithTTL cache(capacity, ttl); vector<int> out;
        for (int i = 0; i < q; i++) {
            int t; string cmd; cin >> t >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(t, k, v); }
            else { int k; cin >> k; out.push_back(cache.get(t, k)); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}
`,
    java: `
import java.util.*;

class LRUCacheWithTTL {
    class Node {
        int key, val, last_t; Node prev, next;
        Node(int k, int v, int t) { this.key = k; this.val = v; this.last_t = t; }
    }
    private int cap, ttl; private Map<Integer, Node> cache = new HashMap<>(); private Node head, tail;
    public LRUCacheWithTTL(int c, int tl) { this.cap = c; this.ttl = tl; head = new Node(0,0,0); tail = new Node(0,0,0); head.next = tail; tail.prev = head; }
    private void remove(Node n) { n.prev.next = n.next; n.next.prev = n.prev; }
    private void add(Node n) { n.next = head.next; n.prev = head; head.next.prev = n; head.next = n; }
    private void evictExpired(int t) {
        Node curr = head.next; List<Node> toDel = new ArrayList<>();
        while (curr != tail) {
            if (t - curr.last_t >= ttl) { toDel.add(curr); }
            curr = curr.next;
        }
        for (Node n : toDel) { remove(n); cache.remove(n.key); }
    }
    public int get(int t, int key) {
        evictExpired(t);
        if (cache.containsKey(key)) { Node n = cache.get(key); n.last_t = t; remove(n); add(n); return n.val; }
        return -1;
    }
    public void put(int t, int key, int value) {
        evictExpired(t);
        if (cache.containsKey(key)) { Node n = cache.get(key); n.val = value; n.last_t = t; remove(n); add(n); }
        else {
            if (cache.size() >= cap) { Node lru = tail.prev; remove(lru); cache.remove(lru.key); }
            Node n = new Node(key, value, t); cache.put(key, n); add(n);
        }
    }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt(); int ttl = sc.nextInt(); int q = sc.nextInt();
            LRUCacheWithTTL cache = new LRUCacheWithTTL(capacity, ttl); List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                int t = sc.nextInt(); String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(t, sc.nextInt(), sc.nextInt());
                else out.add(String.valueOf(cache.get(t, sc.nextInt())));
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Node { int key; int val; int last_t; struct Node* prev; struct Node* next; };
struct Node* head = NULL; struct Node* tail = NULL; int cacheSize = 0; int maxCap = 0; int cacheTtl = 0;

void removeNode(struct Node* node) { node->prev->next = node->next; node->next->prev = node->prev; }
void addToHead(struct Node* node) { node->next = head->next; node->prev = head; head->next->prev = node; head->next = node; }
struct Node* findNode(int key) {
    struct Node* curr = head->next;
    while (curr != tail) { if (curr->key == key) return curr; curr = curr->next; }
    return NULL;
}
void evictExpired(int t) {
    struct Node* curr = head->next;
    while (curr != tail) {
        struct Node* nextNode = curr->next;
        if (t - curr->last_t >= cacheTtl) { removeNode(curr); free(curr); cacheSize--; }
        curr = nextNode;
    }
}
int get(int t, int key) {
    evictExpired(t);
    struct Node* node = findNode(key);
    if (node) { node->last_t = t; removeNode(node); addToHead(node); return node->val; }
    return -1;
}
void put(int t, int key, int value) {
    evictExpired(t);
    struct Node* node = findNode(key);
    if (node) { node->val = value; node->last_t = t; removeNode(node); addToHead(node); }
    else {
        if (cacheSize >= maxCap) { struct Node* lru = tail->prev; removeNode(lru); free(lru); cacheSize--; }
        struct Node* newNode = malloc(sizeof(struct Node)); newNode->key = key; newNode->val = value; newNode->last_t = t;
        addToHead(newNode); cacheSize++;
    }
}

int main() {
    int capacity, ttl, q; if (scanf("%d %d %d", &capacity, &ttl, &q) != 3) return 0;
    maxCap = capacity; cacheTtl = ttl; head = malloc(sizeof(struct Node)); tail = malloc(sizeof(struct Node));
    head->next = tail; tail->prev = head;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        int t; char cmd[10]; if (scanf("%d %s", &t, cmd) != 2) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(t, k, v); }
        else { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(t, k); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    printf("\\n");
    return 0;
}
`,
  },
  'lru-e3': {
    python: `
class Node:
    def __init__(self, key=0, val=0):
        self.key, self.val = key, val
        self.ref_count = 1
        self.prev, self.next = None, None

class LRUCacheWithRefCount:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = {}
        self.head = Node()
        self.tail = Node()
        self.head.next, self.tail.prev = self.tail, self.head

    def _remove(self, node):
        node.prev.next, node.next.prev = node.next, node.prev

    def _add(self, node):
        node.next, node.prev = self.head.next, self.head
        self.head.next.prev = node
        self.head.next = node

    def get(self, key: int) -> int:
        if key in self.cache:
            node = self.cache[key]
            node.ref_count += 1
            self._remove(node)
            self._add(node)
            return node.val
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            node = self.cache[key]
            node.val = value
            node.ref_count += 1
            self._remove(node)
            self._add(node)
        else:
            if len(self.cache) >= self.cap:
                lru = self.tail.prev
                self._remove(lru)
                del self.cache[lru.key]
            new_node = Node(key, value)
            self.cache[key] = new_node
            self._add(new_node)

    def count(self, key: int) -> int:
        if key in self.cache:
            node = self.cache[key]
            node.ref_count += 1
            self._remove(node)
            self._add(node)
            return node.ref_count
        return -1

capacity = int(input())
q = int(input())
cache = LRUCacheWithRefCount(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    elif line[0] == "GET": out.append(str(cache.get(int(line[1]))))
    else: out.append(str(cache.count(int(line[1]))))
print(" ".join(out))
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>
using namespace std;

struct Node {
    int key, val, ref_count; Node* prev; Node* next;
    Node(int k=0, int v=0) : key(k), val(v), ref_count(1), prev(nullptr), next(nullptr) {}
};

class LRUCacheWithRefCount {
    int cap; unordered_map<int, Node*> cache; Node* head; Node* tail;
    void remove(Node* n) { n->prev->next = n->next; n->next->prev = n->prev; }
    void add(Node* n) { n->next = head->next; n->prev = head; head->next->prev = n; head->next = n; }
public:
    LRUCacheWithRefCount(int c) : cap(c) { head = new Node(); tail = new Node(); head->next = tail; tail->prev = head; }
    int get(int key) {
        if (cache.count(key)) { Node* n = cache[key]; n->ref_count++; remove(n); add(n); return n->val; }
        return -1;
    }
    void put(int key, int value) {
        if (cache.count(key)) { Node* n = cache[key]; n->val = value; n->ref_count++; remove(n); add(n); }
        else {
            if (cache.size() >= cap) { Node* lru = tail->prev; remove(lru); cache.erase(lru->key); delete lru; }
            Node* n = new Node(key, value); cache[key] = n; add(n);
        }
    }
    int count(int key) {
        if (cache.count(key)) { Node* n = cache[key]; n->ref_count++; remove(n); add(n); return n->ref_count; }
        return -1;
    }
};

int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LRUCacheWithRefCount cache(capacity); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(k, v); }
            else if (cmd == "GET") { int k; cin >> k; out.push_back(cache.get(k)); }
            else { int k; cin >> k; out.push_back(cache.count(k)); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}
`,
    java: `
import java.util.*;

class LRUCacheWithRefCount {
    class Node {
        int key, val, refCount; Node prev, next;
        Node(int k, int v) { this.key = k; this.val = v; this.refCount = 1; }
    }
    private int cap; private Map<Integer, Node> cache = new HashMap<>(); private Node head, tail;
    public LRUCacheWithRefCount(int c) { this.cap = c; head = new Node(0,0); tail = new Node(0,0); head.next = tail; tail.prev = head; }
    private void remove(Node n) { n.prev.next = n.next; n.next.prev = n.prev; }
    private void add(Node n) { n.next = head.next; n.prev = head; head.next.prev = n; head.next = n; }
    public int get(int key) {
        if (cache.containsKey(key)) { Node n = cache.get(key); n.refCount++; remove(n); add(n); return n.val; }
        return -1;
    }
    public void put(int key, int value) {
        if (cache.containsKey(key)) { Node n = cache.get(key); n.val = value; n.refCount++; remove(n); add(n); }
        else {
            if (cache.size() >= cap) { Node lru = tail.prev; remove(lru); cache.remove(lru.key); }
            Node n = new Node(key, value); cache.put(key, n); add(n);
        }
    }
    public int count(int key) {
        if (cache.containsKey(key)) { Node n = cache.get(key); n.refCount++; remove(n); add(n); return n.refCount; }
        return -1;
    }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt(); int q = sc.nextInt();
            LRUCacheWithRefCount cache = new LRUCacheWithRefCount(capacity); List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt());
                else if (cmd.equals("GET")) out.add(String.valueOf(cache.get(sc.nextInt())));
                else out.add(String.valueOf(cache.count(sc.nextInt())));
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Node { int key; int val; int ref_count; struct Node* prev; struct Node* next; };
struct Node* head = NULL; struct Node* tail = NULL; int cacheSize = 0; int maxCap = 0;

void removeNode(struct Node* node) { node->prev->next = node->next; node->next->prev = node->prev; }
void addToHead(struct Node* node) { node->next = head->next; node->prev = head; head->next->prev = node; head->next = node; }
struct Node* findNode(int key) {
    struct Node* curr = head->next;
    while (curr != tail) { if (curr->key == key) return curr; curr = curr->next; }
    return NULL;
}
int get(int key) {
    struct Node* node = findNode(key);
    if (node) { node->ref_count++; removeNode(node); addToHead(node); return node->val; }
    return -1;
}
void put(int key, int value) {
    struct Node* node = findNode(key);
    if (node) { node->val = value; node->ref_count++; removeNode(node); addToHead(node); }
    else {
        if (cacheSize >= maxCap) { struct Node* lru = tail->prev; removeNode(lru); free(lru); cacheSize--; }
        struct Node* newNode = malloc(sizeof(struct Node)); newNode->key = key; newNode->val = value; newNode->ref_count = 1;
        addToHead(newNode); cacheSize++;
    }
}
int count(int key) {
    struct Node* node = findNode(key);
    if (node) { node->ref_count++; removeNode(node); addToHead(node); return node->ref_count; }
    return -1;
}

int main() {
    int capacity, q; if (scanf("%d %d", &capacity, &q) != 2) return 0;
    maxCap = capacity; head = malloc(sizeof(struct Node)); tail = malloc(sizeof(struct Node));
    head->next = tail; tail->prev = head;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else if (strcmp(cmd, "GET") == 0) { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
        else { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = count(k); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    printf("\\n");
    return 0;
}
`,
  },
  'lru-e4': {
    python: `
class Node:
    def __init__(self, key=0, val=0):
        self.key, self.val = key, val
        self.prev, self.next = None, None

class LRUCacheWithEvictionHistory:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = {}
        self.head = Node()
        self.tail = Node()
        self.head.next, self.tail.prev = self.tail, self.head
        self.evictions = []

    def _remove(self, node):
        node.prev.next, node.next.prev = node.next, node.prev

    def _add(self, node):
        node.next, node.prev = self.head.next, self.head
        self.head.next.prev = node
        self.head.next = node

    def get(self, key: int) -> int:
        if key in self.cache:
            node = self.cache[key]
            self._remove(node)
            self._add(node)
            return node.val
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            node = self.cache[key]
            node.val = value
            self._remove(node)
            self._add(node)
        else:
            if len(self.cache) >= self.cap:
                lru = self.tail.prev
                self._remove(lru)
                del self.cache[lru.key]
                self.evictions.append(str(lru.key))
            new_node = Node(key, value)
            self.cache[key] = new_node
            self._add(new_node)

    def evicted(self) -> str:
        if not self.evictions: return "none"
        return ",".join(self.evictions)

capacity = int(input())
q = int(input())
cache = LRUCacheWithEvictionHistory(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    elif line[0] == "GET": out.append(str(cache.get(int(line[1]))))
    else: out.append(cache.evicted())
print(" ".join(out))
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>
using namespace std;

struct Node {
    int key, val; Node* prev; Node* next;
    Node(int k=0, int v=0) : key(k), val(v), prev(nullptr), next(nullptr) {}
};

class LRUCacheWithEvictionHistory {
    int cap; unordered_map<int, Node*> cache; Node* head; Node* tail; vector<int> evictions;
    void remove(Node* n) { n->prev->next = n->next; n->next->prev = n->prev; }
    void add(Node* n) { n->next = head->next; n->prev = head; head->next->prev = n; head->next = n; }
public:
    LRUCacheWithEvictionHistory(int c) : cap(c) { head = new Node(); tail = new Node(); head->next = tail; tail->prev = head; }
    int get(int key) {
        if (cache.count(key)) { Node* n = cache[key]; remove(n); add(n); return n->val; }
        return -1;
    }
    void put(int key, int value) {
        if (cache.count(key)) { Node* n = cache[key]; n->val = value; remove(n); add(n); }
        else {
            if (cache.size() >= cap) {
                Node* lru = tail->prev; remove(lru); cache.erase(lru->key);
                evictions.push_back(lru->key); delete lru;
            }
            Node* n = new Node(key, value); cache[key] = n; add(n);
        }
    }
    string evicted() {
        if (evictions.empty()) return "none";
        string s = "";
        for (size_t i = 0; i < evictions.size(); i++) {
            s += to_string(evictions[i]);
            if (i + 1 < evictions.size()) s += ",";
        }
        return s;
    }
};

int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LRUCacheWithEvictionHistory cache(capacity); vector<string> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(k, v); }
            else if (cmd == "GET") { int k; cin >> k; out.push_back(to_string(cache.get(k))); }
            else { out.push_back(cache.evicted()); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}
`,
    java: `
import java.util.*;

class LRUCacheWithEvictionHistory {
    class Node {
        int key, val; Node prev, next;
        Node(int k, int v) { this.key = k; this.val = v; }
    }
    private int cap; private Map<Integer, Node> cache = new HashMap<>(); private Node head, tail;
    private List<String> evictions = new ArrayList<>();
    public LRUCacheWithEvictionHistory(int c) { this.cap = c; head = new Node(0,0); tail = new Node(0,0); head.next = tail; tail.prev = head; }
    private void remove(Node n) { n.prev.next = n.next; n.next.prev = n.prev; }
    private void add(Node n) { n.next = head.next; n.prev = head; head.next.prev = n; head.next = n; }
    public int get(int key) {
        if (cache.containsKey(key)) { Node n = cache.get(key); remove(n); add(n); return n.val; }
        return -1;
    }
    public void put(int key, int value) {
        if (cache.containsKey(key)) { Node n = cache.get(key); n.val = value; remove(n); add(n); }
        else {
            if (cache.size() >= cap) { Node lru = tail.prev; remove(lru); cache.remove(lru.key); evictions.add(String.valueOf(lru.key)); }
            Node n = new Node(key, value); cache.put(key, n); add(n);
        }
    }
    public String evicted() {
        if (evictions.isEmpty()) return "none";
        return String.join(",", evictions);
    }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt(); int q = sc.nextInt();
            LRUCacheWithEvictionHistory cache = new LRUCacheWithEvictionHistory(capacity); List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt());
                else if (cmd.equals("GET")) out.add(String.valueOf(cache.get(sc.nextInt())));
                else out.add(cache.evicted());
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Node { int key; int val; struct Node* prev; struct Node* next; };
struct Node* head = NULL; struct Node* tail = NULL; int cacheSize = 0; int maxCap = 0;
int evictions[2005]; int evCount = 0;

void removeNode(struct Node* node) { node->prev->next = node->next; node->next->prev = node->prev; }
void addToHead(struct Node* node) { node->next = head->next; node->prev = head; head->next->prev = node; head->next = node; }
struct Node* findNode(int key) {
    struct Node* curr = head->next;
    while (curr != tail) { if (curr->key == key) return curr; curr = curr->next; }
    return NULL;
}
int get(int key) {
    struct Node* node = findNode(key);
    if (node) { removeNode(node); addToHead(node); return node->val; }
    return -1;
}
void put(int key, int value) {
    struct Node* node = findNode(key);
    if (node) { node->val = value; removeNode(node); addToHead(node); }
    else {
        if (cacheSize >= maxCap) { struct Node* lru = tail->prev; removeNode(lru); evictions[evCount++] = lru->key; free(lru); cacheSize--; }
        struct Node* newNode = malloc(sizeof(struct Node)); newNode->key = key; newNode->val = value;
        addToHead(newNode); cacheSize++;
    }
}
void evicted(char* buf) {
    if (evCount == 0) { strcpy(buf, "none"); return; }
    buf[0] = '\\0';
    for (int i = 0; i < evCount; i++) {
        char tmp[12]; sprintf(tmp, "%d", evictions[i]);
        strcat(buf, tmp);
        if (i + 1 < evCount) strcat(buf, ",");
    }
}

int main() {
    int capacity, q; if (scanf("%d %d", &capacity, &q) != 2) return 0;
    maxCap = capacity; head = malloc(sizeof(struct Node)); tail = malloc(sizeof(struct Node));
    head->next = tail; tail->prev = head;
    char** out = malloc(q * sizeof(char*)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else if (strcmp(cmd, "GET") == 0) {
            int k; if (scanf("%d", &k) != 1) break; int ans = get(k);
            out[outCount] = malloc(20); sprintf(out[outCount++], "%d", ans);
        } else {
            out[outCount] = malloc(2048); evicted(out[outCount++]);
        }
    }
    for (int i = 0; i < outCount; i++) { printf("%s%s", out[i], (i + 1 < outCount) ? " " : ""); free(out[i]); }
    printf("\\n");
    return 0;
}
`,
  },
  'lru-e5': {
    python: `
class Node:
    def __init__(self, key=0, val=0):
        self.key, self.val = key, val
        self.prev, self.next = None, None

class MRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = {}
        self.head = Node()
        self.tail = Node()
        self.head.next, self.tail.prev = self.tail, self.head

    def _remove(self, node):
        node.prev.next, node.next.prev = node.next, node.prev

    def _add(self, node):
        node.next, node.prev = self.head.next, self.head
        self.head.next.prev = node
        self.head.next = node

    def get(self, key: int) -> int:
        if key in self.cache:
            node = self.cache[key]
            self._remove(node)
            self._add(node)
            return node.val
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            node = self.cache[key]
            node.val = value
            self._remove(node)
            self._add(node)
        else:
            if len(self.cache) >= self.cap:
                mru = self.head.next
                self._remove(mru)
                del self.cache[mru.key]
            new_node = Node(key, value)
            self.cache[key] = new_node
            self._add(new_node)

capacity = int(input())
q = int(input())
cache = MRUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    else: out.append(str(cache.get(int(line[1]))))
print(" ".join(out))
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>
using namespace std;

struct Node {
    int key, val; Node* prev; Node* next;
    Node(int k=0, int v=0) : key(k), val(v), prev(nullptr), next(nullptr) {}
};

class MRUCache {
    int cap; unordered_map<int, Node*> cache; Node* head; Node* tail;
    void remove(Node* n) { n->prev->next = n->next; n->next->prev = n->prev; }
    void add(Node* n) { n->next = head->next; n->prev = head; head->next->prev = n; head->next = n; }
public:
    MRUCache(int c) : cap(c) { head = new Node(); tail = new Node(); head->next = tail; tail->prev = head; }
    int get(int key) {
        if (cache.count(key)) { Node* n = cache[key]; remove(n); add(n); return n->val; }
        return -1;
    }
    void put(int key, int value) {
        if (cache.count(key)) { Node* n = cache[key]; n->val = value; remove(n); add(n); }
        else {
            if (cache.size() >= cap) { Node* mru = head->next; remove(mru); cache.erase(mru->key); delete mru; }
            Node* n = new Node(key, value); cache[key] = n; add(n);
        }
    }
};

int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        MRUCache cache(capacity); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(k, v); }
            else { int k; cin >> k; out.push_back(cache.get(k)); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}
`,
    java: `
import java.util.*;

class MRUCache {
    class Node {
        int key, val; Node prev, next;
        Node(int k, int v) { this.key = k; this.val = v; }
    }
    private int cap; private Map<Integer, Node> cache = new HashMap<>(); private Node head, tail;
    public MRUCache(int c) { this.cap = c; head = new Node(0,0); tail = new Node(0,0); head.next = tail; tail.prev = head; }
    private void remove(Node n) { n.prev.next = n.next; n.next.prev = n.prev; }
    private void add(Node n) { n.next = head.next; n.prev = head; head.next.prev = n; head.next = n; }
    public int get(int key) {
        if (cache.containsKey(key)) { Node n = cache.get(key); remove(n); add(n); return n.val; }
        return -1;
    }
    public void put(int key, int value) {
        if (cache.containsKey(key)) { Node n = cache.get(key); n.val = value; remove(n); add(n); }
        else {
            if (cache.size() >= cap) { Node mru = head.next; remove(mru); cache.remove(mru.key); }
            Node n = new Node(key, value); cache.put(key, n); add(n);
        }
    }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt(); int q = sc.nextInt();
            MRUCache cache = new MRUCache(capacity); List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt());
                else out.add(String.valueOf(cache.get(sc.nextInt())));
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Node { int key; int val; struct Node* prev; struct Node* next; };
struct Node* head = NULL; struct Node* tail = NULL; int cacheSize = 0; int maxCap = 0;

void removeNode(struct Node* node) { node->prev->next = node->next; node->next->prev = node->prev; }
void addToHead(struct Node* node) { node->next = head->next; node->prev = head; head->next->prev = node; head->next = node; }
struct Node* findNode(int key) {
    struct Node* curr = head->next;
    while (curr != tail) { if (curr->key == key) return curr; curr = curr->next; }
    return NULL;
}
int get(int key) {
    struct Node* node = findNode(key);
    if (node) { removeNode(node); addToHead(node); return node->val; }
    return -1;
}
void put(int key, int value) {
    struct Node* node = findNode(key);
    if (node) { node->val = value; removeNode(node); addToHead(node); }
    else {
        if (cacheSize >= maxCap) { struct Node* mru = head->next; removeNode(mru); free(mru); cacheSize--; }
        struct Node* newNode = malloc(sizeof(struct Node)); newNode->key = key; newNode->val = value;
        addToHead(newNode); cacheSize++;
    }
}

int main() {
    int capacity, q; if (scanf("%d %d", &capacity, &q) != 2) return 0;
    maxCap = capacity; head = malloc(sizeof(struct Node)); tail = malloc(sizeof(struct Node));
    head->next = tail; tail->prev = head;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    printf("\\n");
    return 0;
}
`,
  },
  'lru-m1': {
    python: `
class Node:
    def __init__(self, key=0, val=0):
        self.key, self.val = key, val
        self.prev, self.next = None, None

class ResizableLRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = {}
        self.head = Node()
        self.tail = Node()
        self.head.next, self.tail.prev = self.tail, self.head

    def _remove(self, node):
        node.prev.next, node.next.prev = node.next, node.prev

    def _add(self, node):
        node.next, node.prev = self.head.next, self.head
        self.head.next.prev = node
        self.head.next = node

    def get(self, key: int) -> int:
        if key in self.cache:
            node = self.cache[key]
            self._remove(node)
            self._add(node)
            return node.val
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            node = self.cache[key]
            node.val = value
            self._remove(node)
            self._add(node)
        else:
            if len(self.cache) >= self.cap:
                lru = self.tail.prev
                self._remove(lru)
                del self.cache[lru.key]
            new_node = Node(key, value)
            self.cache[key] = new_node
            self._add(new_node)

    def resize(self, new_capacity: int) -> None:
        self.cap = new_capacity
        while len(self.cache) > self.cap:
            lru = self.tail.prev
            self._remove(lru)
            del self.cache[lru.key]

capacity = int(input())
q = int(input())
cache = ResizableLRUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    cmd = line[0]
    if cmd == "PUT": cache.put(int(line[1]), int(line[2]))
    elif cmd == "GET": out.append(str(cache.get(int(line[1]))))
    else: cache.resize(int(line[1]))
print(" ".join(out))
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>
using namespace std;

struct Node {
    int key, val; Node* prev; Node* next;
    Node(int k=0, int v=0) : key(k), val(v), prev(nullptr), next(nullptr) {}
};

class ResizableLRUCache {
    int cap; unordered_map<int, Node*> cache; Node* head; Node* tail;
    void remove(Node* n) { n->prev->next = n->next; n->next->prev = n->prev; }
    void add(Node* n) { n->next = head->next; n->prev = head; head->next->prev = n; head->next = n; }
public:
    ResizableLRUCache(int c) : cap(c) { head = new Node(); tail = new Node(); head->next = tail; tail->prev = head; }
    int get(int key) {
        if (cache.count(key)) { Node* n = cache[key]; remove(n); add(n); return n->val; }
        return -1;
    }
    void put(int key, int value) {
        if (cache.count(key)) { Node* n = cache[key]; n->val = value; remove(n); add(n); }
        else {
            if (cache.size() >= cap) { Node* lru = tail->prev; remove(lru); cache.erase(lru->key); delete lru; }
            Node* n = new Node(key, value); cache[key] = n; add(n);
        }
    }
    void resize(int new_capacity) {
        cap = new_capacity;
        while (cache.size() > (size_t)cap) { Node* lru = tail->prev; remove(lru); cache.erase(lru->key); delete lru; }
    }
};

int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        ResizableLRUCache cache(capacity); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(k, v); }
            else if (cmd == "GET") { int k; cin >> k; out.push_back(cache.get(k)); }
            else { int new_cap; cin >> new_cap; cache.resize(new_cap); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}
`,
    java: `
import java.util.*;

class ResizableLRUCache {
    class Node {
        int key, val; Node prev, next;
        Node(int k, int v) { this.key = k; this.val = v; }
    }
    private int cap; private Map<Integer, Node> cache = new HashMap<>(); private Node head, tail;
    public ResizableLRUCache(int c) { this.cap = c; head = new Node(0,0); tail = new Node(0,0); head.next = tail; tail.prev = head; }
    private void remove(Node n) { n.prev.next = n.next; n.next.prev = n.prev; }
    private void add(Node n) { n.next = head.next; n.prev = head; head.next.prev = n; head.next = n; }
    public int get(int key) {
        if (cache.containsKey(key)) { Node n = cache.get(key); remove(n); add(n); return n.val; }
        return -1;
    }
    public void put(int key, int value) {
        if (cache.containsKey(key)) { Node n = cache.get(key); n.val = value; remove(n); add(n); }
        else {
            if (cache.size() >= cap) { Node lru = tail.prev; remove(lru); cache.remove(lru.key); }
            Node n = new Node(key, value); cache.put(key, n); add(n);
        }
    }
    public void resize(int newCapacity) {
        cap = newCapacity;
        while (cache.size() > cap) { Node lru = tail.prev; remove(lru); cache.remove(lru.key); }
    }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt(); int q = sc.nextInt();
            ResizableLRUCache cache = new ResizableLRUCache(capacity); List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt());
                else if (cmd.equals("GET")) out.add(String.valueOf(cache.get(sc.nextInt())));
                else cache.resize(sc.nextInt());
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Node { int key; int val; struct Node* prev; struct Node* next; };
struct Node* head = NULL; struct Node* tail = NULL; int cacheSize = 0; int maxCap = 0;

void removeNode(struct Node* node) { node->prev->next = node->next; node->next->prev = node->prev; }
void addToHead(struct Node* node) { node->next = head->next; node->prev = head; head->next->prev = node; head->next = node; }
struct Node* findNode(int key) {
    struct Node* curr = head->next;
    while (curr != tail) { if (curr->key == key) return curr; curr = curr->next; }
    return NULL;
}
int get(int key) {
    struct Node* node = findNode(key);
    if (node) { removeNode(node); addToHead(node); return node->val; }
    return -1;
}
void put(int key, int value) {
    struct Node* node = findNode(key);
    if (node) { node->val = value; removeNode(node); addToHead(node); }
    else {
        if (cacheSize >= maxCap) { struct Node* lru = tail->prev; removeNode(lru); free(lru); cacheSize--; }
        struct Node* newNode = malloc(sizeof(struct Node)); newNode->key = key; newNode->val = value;
        addToHead(newNode); cacheSize++;
    }
}
void resize(int new_capacity) {
    maxCap = new_capacity;
    while (cacheSize > maxCap) { struct Node* lru = tail->prev; removeNode(lru); free(lru); cacheSize--; }
}

int main() {
    int capacity, q; if (scanf("%d %d", &capacity, &q) != 2) return 0;
    maxCap = capacity; head = malloc(sizeof(struct Node)); tail = malloc(sizeof(struct Node));
    head->next = tail; tail->prev = head;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else if (strcmp(cmd, "GET") == 0) { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
        else { int new_cap; if (scanf("%d", &new_cap) != 1) break; resize(new_cap); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    printf("\\n");
    return 0;
}
`,
  },
  'lru-m2': {
    python: `
class Node:
    def __init__(self, key=0, val=0, wt=0):
        self.key, self.val, self.wt = key, val, wt
        self.prev, self.next = None, None

class WeightedLRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = {}
        self.head = Node()
        self.tail = Node()
        self.head.next, self.tail.prev = self.tail, self.head
        self.total_wt = 0

    def _remove(self, node):
        node.prev.next, node.next.prev = node.next, node.prev

    def _add(self, node):
        node.next, node.prev = self.head.next, self.head
        self.head.next.prev = node
        self.head.next = node

    def get(self, key: int) -> int:
        if key in self.cache:
            node = self.cache[key]
            self._remove(node)
            self._add(node)
            return node.val
        return -1

    def put(self, key: int, value: int, weight: int) -> None:
        if key in self.cache:
            node = self.cache[key]
            self.total_wt -= node.wt
            node.val = value
            node.wt = weight
            self.total_wt += weight
            self._remove(node)
            self._add(node)
        else:
            self.total_wt += weight
            new_node = Node(key, value, weight)
            self.cache[key] = new_node
            self._add(new_node)
            
        while self.total_wt > self.cap:
            lru = self.tail.prev
            self._remove(lru)
            del self.cache[lru.key]
            self.total_wt -= lru.wt

capacity = int(input())
q = int(input())
cache = WeightedLRUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    cmd = line[0]
    if cmd == "PUT": cache.put(int(line[1]), int(line[2]), int(line[3]))
    else: out.append(str(cache.get(int(line[1]))))
print(" ".join(out))
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>
using namespace std;

struct Node {
    int key, val, wt; Node* prev; Node* next;
    Node(int k=0, int v=0, int w=0) : key(k), val(v), wt(w), prev(nullptr), next(nullptr) {}
};

class WeightedLRUCache {
    int cap, total_wt; unordered_map<int, Node*> cache; Node* head; Node* tail;
    void remove(Node* n) { n->prev->next = n->next; n->next->prev = n->prev; }
    void add(Node* n) { n->next = head->next; n->prev = head; head->next->prev = n; head->next = n; }
public:
    WeightedLRUCache(int c) : cap(c), total_wt(0) { head = new Node(); tail = new Node(); head->next = tail; tail->prev = head; }
    int get(int key) {
        if (cache.count(key)) { Node* n = cache[key]; remove(n); add(n); return n->val; }
        return -1;
    }
    void put(int key, int value, int weight) {
        if (cache.count(key)) {
            Node* n = cache[key]; total_wt -= n->wt; n->val = value; n->wt = weight; total_wt += weight; remove(n); add(n);
        } else {
            total_wt += weight; Node* n = new Node(key, value, weight); cache[key] = n; add(n);
        }
        while (total_wt > cap) {
            Node* lru = tail->prev; remove(lru); total_wt -= lru->wt; cache.erase(lru->key); delete lru;
        }
    }
};

int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        WeightedLRUCache cache(capacity); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v, w; cin >> k >> v >> w; cache.put(k, v, w); }
            else { int k; cin >> k; out.push_back(cache.get(k)); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}
`,
    java: `
import java.util.*;

class WeightedLRUCache {
    class Node {
        int key, val, wt; Node prev, next;
        Node(int k, int v, int w) { this.key = k; this.val = v; this.wt = w; }
    }
    private int cap, totalWt = 0; private Map<Integer, Node> cache = new HashMap<>(); private Node head, tail;
    public WeightedLRUCache(int c) { this.cap = c; head = new Node(0,0,0); tail = new Node(0,0,0); head.next = tail; tail.prev = head; }
    private void remove(Node n) { n.prev.next = n.next; n.next.prev = n.prev; }
    private void add(Node n) { n.next = head.next; n.prev = head; head.next.prev = n; head.next = n; }
    public int get(int key) {
        if (cache.containsKey(key)) { Node n = cache.get(key); remove(n); add(n); return n.val; }
        return -1;
    }
    public void put(int key, int value, int weight) {
        if (cache.containsKey(key)) {
            Node n = cache.get(key); totalWt -= n.wt; n.val = value; n.wt = weight; totalWt += weight; remove(n); add(n);
        } else {
            totalWt += weight; Node n = new Node(key, value, weight); cache.put(key, n); add(n);
        }
        while (totalWt > cap) {
            Node lru = tail.prev; remove(lru); totalWt -= lru.wt; cache.remove(lru.key);
        }
    }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt(); int q = sc.nextInt();
            WeightedLRUCache cache = new WeightedLRUCache(capacity); List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt(), sc.nextInt());
                else out.add(String.valueOf(cache.get(sc.nextInt())));
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Node { int key; int val; int wt; struct Node* prev; struct Node* next; };
struct Node* head = NULL; struct Node* tail = NULL; int totalWt = 0; int maxCap = 0;

void removeNode(struct Node* node) { node->prev->next = node->next; node->next->prev = node->prev; }
void addToHead(struct Node* node) { node->next = head->next; node->prev = head; head->next->prev = node; head->next = node; }
struct Node* findNode(int key) {
    struct Node* curr = head->next;
    while (curr != tail) { if (curr->key == key) return curr; curr = curr->next; }
    return NULL;
}
int get(int key) {
    struct Node* node = findNode(key);
    if (node) { removeNode(node); addToHead(node); return node->val; }
    return -1;
}
void put(int key, int value, int weight) {
    struct Node* node = findNode(key);
    if (node) { totalWt -= node->wt; node->val = value; node->wt = weight; totalWt += weight; removeNode(node); addToHead(node); }
    else {
        totalWt += weight; struct Node* newNode = malloc(sizeof(struct Node)); newNode->key = key; newNode->val = value; newNode->wt = weight;
        addToHead(newNode);
    }
    while (totalWt > maxCap) {
        struct Node* lru = tail->prev; removeNode(lru); totalWt -= lru->wt; free(lru);
    }
}

int main() {
    int capacity, q; if (scanf("%d %d", &capacity, &q) != 2) return 0;
    maxCap = capacity; head = malloc(sizeof(struct Node)); tail = malloc(sizeof(struct Node));
    head->next = tail; tail->prev = head;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v, w; if (scanf("%d %d %d", &k, &v, &w) != 3) break; put(k, v, w); }
        else { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    printf("\\n");
    return 0;
}
`,
  },
  'lru-m3': {
    python: `
class LRU2Cache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = {}  # key -> (value, history_list)
        self.time = 0

    def get(self, key: int) -> int:
        self.time += 1
        if key in self.cache:
            val, hist = self.cache[key]
            hist.append(self.time)
            if len(hist) > 2: hist.pop(0)
            return val
        return -1

    def put(self, key: int, value: int) -> None:
        self.time += 1
        if key in self.cache:
            _, hist = self.cache[key]
            hist.append(self.time)
            if len(hist) > 2: hist.pop(0)
            self.cache[key] = (value, hist)
        else:
            if len(self.cache) >= self.cap:
                # find victim
                victim = None
                min_2nd = float('inf')
                for k, (_, hist) in self.cache.items():
                    # 2nd to last access time
                    t2 = hist[0] if len(hist) == 2 else -1
                    if t2 < min_2nd:
                        min_2nd = t2
                        victim = k
                    elif t2 == min_2nd and t2 == -1:
                        # both have only 1 access. evict the one with oldest 1st access
                        if hist[0] < self.cache[victim][1][0]:
                            victim = k
                del self.cache[victim]
            self.cache[key] = (value, [self.time])

capacity = int(input())
q = int(input())
cache = LRU2Cache(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    else: out.append(str(cache.get(int(line[1]))))
print(" ".join(out))
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>
using namespace std;

class LRU2Cache {
    int cap, time;
    struct Info { int val; vector<int> hist; };
    unordered_map<int, Info> cache;
public:
    LRU2Cache(int c) : cap(c), time(0) {}
    int get(int key) {
        time++;
        if (cache.count(key)) {
            cache[key].hist.push_back(time);
            if (cache[key].hist.size() > 2) cache[key].hist.erase(cache[key].hist.begin());
            return cache[key].val;
        }
        return -1;
    }
    void put(int key, int value) {
        time++;
        if (cache.count(key)) {
            cache[key].val = value;
            cache[key].hist.push_back(time);
            if (cache[key].hist.size() > 2) cache[key].hist.erase(cache[key].hist.begin());
        } else {
            if (cache.size() >= (size_t)cap) {
                int victim = -1;
                int min_2nd = 1e9;
                for (auto& p : cache) {
                    int t2 = (p.second.hist.size() == 2) ? p.second.hist[0] : -1;
                    if (t2 < min_2nd) { min_2nd = t2; victim = p.first; }
                    else if (t2 == min_2nd && t2 == -1) {
                        if (p.second.hist[0] < cache[victim].hist[0]) victim = p.first;
                    }
                }
                cache.erase(victim);
            }
            Info info; info.val = value; info.hist.push_back(time);
            cache[key] = info;
        }
    }
};

int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LRU2Cache cache(capacity); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(k, v); }
            else { int k; cin >> k; out.push_back(cache.get(k)); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}
`,
    java: `
import java.util.*;

class LRU2Cache {
    class Info {
        int val; List<Integer> hist = new ArrayList<>();
    }
    private int cap, time = 0; private Map<Integer, Info> cache = new HashMap<>();
    public LRU2Cache(int c) { this.cap = c; }
    public int get(int key) {
        time++;
        if (cache.containsKey(key)) {
            Info inf = cache.get(key); inf.hist.add(time);
            if (inf.hist.size() > 2) inf.hist.remove(0);
            return inf.val;
        }
        return -1;
    }
    public void put(int key, int value) {
        time++;
        if (cache.containsKey(key)) {
            Info inf = cache.get(key); inf.val = value; inf.hist.add(time);
            if (inf.hist.size() > 2) inf.hist.remove(0);
        } else {
            if (cache.size() >= cap) {
                int victim = -1; int min2nd = Integer.MAX_VALUE;
                for (Map.Entry<Integer, Info> entry : cache.entrySet()) {
                    int t2 = (entry.getValue().hist.size() == 2) ? entry.getValue().hist.get(0) : -1;
                    if (t2 < min2nd) { min2nd = t2; victim = entry.getKey(); }
                    else if (t2 == min2nd && t2 == -1) {
                        if (entry.getValue().hist.get(0) < cache.get(victim).hist.get(0)) victim = entry.getKey();
                    }
                }
                cache.remove(victim);
            }
            Info inf = new Info(); inf.val = value; inf.hist.add(time);
            cache.put(key, inf);
        }
    }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt(); int q = sc.nextInt();
            LRU2Cache cache = new LRU2Cache(capacity); List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt());
                else out.add(String.valueOf(cache.get(sc.nextInt())));
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Item { int key; int val; int hist[2]; int histSize; };
struct Item cache[1005]; int cacheSize = 0; int maxCap = 0; int currTime = 0;

int findIndex(int key) {
    for (int i = 0; i < cacheSize; i++) { if (cache[i].key == key) return i; }
    return -1;
}
int get(int key) {
    currTime++;
    int idx = findIndex(key);
    if (idx != -1) {
        if (cache[idx].histSize == 2) { cache[idx].hist[0] = cache[idx].hist[1]; cache[idx].hist[1] = currTime; }
        else { cache[idx].hist[cache[idx].histSize++] = currTime; }
        return cache[idx].val;
    }
    return -1;
}
void put(int key, int value) {
    currTime++;
    int idx = findIndex(key);
    if (idx != -1) {
        cache[idx].val = value;
        if (cache[idx].histSize == 2) { cache[idx].hist[0] = cache[idx].hist[1]; cache[idx].hist[1] = currTime; }
        else { cache[idx].hist[cache[idx].histSize++] = currTime; }
    } else {
        if (cacheSize >= maxCap) {
            int victimIdx = 0;
            int min2nd = 1e9;
            for (int i = 0; i < cacheSize; i++) {
                int t2 = (cache[i].histSize == 2) ? cache[i].hist[0] : -1;
                if (t2 < min2nd) { min2nd = t2; victimIdx = i; }
                else if (t2 == min2nd && t2 == -1) {
                    if (cache[i].hist[0] < cache[victimIdx].hist[0]) victimIdx = i;
                }
            }
            // remove victim
            for (int i = victimIdx; i < cacheSize - 1; i++) { cache[i] = cache[i+1]; }
            cacheSize--;
        }
        cache[cacheSize].key = key; cache[cacheSize].val = value;
        cache[cacheSize].hist[0] = currTime; cache[cacheSize].histSize = 1;
        cacheSize++;
    }
}

int main() {
    int capacity, q; if (scanf("%d %d", &capacity, &q) != 2) return 0;
    maxCap = capacity;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    printf("\\n");
    return 0;
}
`,
  },
  'lru-m4': {
    python: `
class Node:
    def __init__(self, key=0, val=0):
        self.key, self.val = key, val
        self.prev, self.next = None, None

class LRUCacheWithCallbacks:
    def __init__(self, capacity: int, on_evict_callback):
        self.cap = capacity
        self.on_evict = on_evict_callback
        self.cache = {}
        self.head = Node()
        self.tail = Node()
        self.head.next, self.tail.prev = self.tail, self.head

    def _remove(self, node):
        node.prev.next, node.next.prev = node.next, node.prev

    def _add(self, node):
        node.next, node.prev = self.head.next, self.head
        self.head.next.prev = node
        self.head.next = node

    def get(self, key: int) -> int:
        if key in self.cache:
            node = self.cache[key]
            self._remove(node)
            self._add(node)
            return node.val
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            node = self.cache[key]
            node.val = value
            self._remove(node)
            self._add(node)
        else:
            if len(self.cache) >= self.cap:
                lru = self.tail.prev
                self._remove(lru)
                del self.cache[lru.key]
                self.on_evict()
            new_node = Node(key, value)
            self.cache[key] = new_node
            self._add(new_node)

eviction_count = 0
def my_callback():
    global eviction_count
    eviction_count += 1

capacity = int(input())
q = int(input())
cache = LRUCacheWithCallbacks(capacity, my_callback)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    elif line[0] == "GET": out.append(str(cache.get(int(line[1]))))
    else: out.append(str(eviction_count))
print(" ".join(out))
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>
#include <functional>
using namespace std;

struct Node {
    int key, val; Node* prev; Node* next;
    Node(int k=0, int v=0) : key(k), val(v), prev(nullptr), next(nullptr) {}
};

class LRUCacheWithCallbacks {
    int cap; unordered_map<int, Node*> cache; Node* head; Node* tail;
    function<void()> cb;
    void remove(Node* n) { n->prev->next = n->next; n->next->prev = n->prev; }
    void add(Node* n) { n->next = head->next; n->prev = head; head->next->prev = n; head->next = n; }
public:
    LRUCacheWithCallbacks(int c, function<void()> on_evict) : cap(c), cb(on_evict) {
        head = new Node(); tail = new Node(); head->next = tail; tail->prev = head;
    }
    int get(int key) {
        if (cache.count(key)) { Node* n = cache[key]; remove(n); add(n); return n->val; }
        return -1;
    }
    void put(int key, int value) {
        if (cache.count(key)) { Node* n = cache[key]; n->val = value; remove(n); add(n); }
        else {
            if (cache.size() >= (size_t)cap) {
                Node* lru = tail->prev; remove(lru); cache.erase(lru->key); delete lru;
                cb();
            }
            Node* n = new Node(key, value); cache[key] = n; add(n);
        }
    }
};

int eviction_count = 0;
void my_callback() { eviction_count++; }

int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LRUCacheWithCallbacks cache(capacity, my_callback); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(k, v); }
            else if (cmd == "GET") { int k; cin >> k; out.push_back(cache.get(k)); }
            else { out.push_back(eviction_count); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}
`,
    java: `
import java.util.*;

class LRUCacheWithCallbacks {
    class Node {
        int key, val; Node prev, next;
        Node(int k, int v) { this.key = k; this.val = v; }
    }
    private int cap; private Map<Integer, Node> cache = new HashMap<>(); private Node head, tail;
    private Runnable cb;
    public LRUCacheWithCallbacks(int c, Runnable onEvict) { this.cap = c; this.cb = onEvict; head = new Node(0,0); tail = new Node(0,0); head.next = tail; tail.prev = head; }
    private void remove(Node n) { n.prev.next = n.next; n.next.prev = n.prev; }
    private void add(Node n) { n.next = head.next; n.prev = head; head.next.prev = n; head.next = n; }
    public int get(int key) {
        if (cache.containsKey(key)) { Node n = cache.get(key); remove(n); add(n); return n.val; }
        return -1;
    }
    public void put(int key, int value) {
        if (cache.containsKey(key)) { Node n = cache.get(key); n.val = value; remove(n); add(n); }
        else {
            if (cache.size() >= cap) { Node lru = tail.prev; remove(lru); cache.remove(lru.key); cb.run(); }
            Node n = new Node(key, value); cache.put(key, n); add(n);
        }
    }
}

public class Solution {
    static int evictionCount = 0;
    static Runnable myCallback = () -> evictionCount++;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt(); int q = sc.nextInt();
            LRUCacheWithCallbacks cache = new LRUCacheWithCallbacks(capacity, myCallback); List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt());
                else if (cmd.equals("GET")) out.add(String.valueOf(cache.get(sc.nextInt())));
                else out.add(String.valueOf(evictionCount));
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Node { int key; int val; struct Node* prev; struct Node* next; };
struct Node* head = NULL; struct Node* tail = NULL; int cacheSize = 0; int maxCap = 0;
int evCount = 0;
void (*evict_cb)() = NULL;

void removeNode(struct Node* node) { node->prev->next = node->next; node->next->prev = node->prev; }
void addToHead(struct Node* node) { node->next = head->next; node->prev = head; head->next->prev = node; head->next = node; }
struct Node* findNode(int key) {
    struct Node* curr = head->next;
    while (curr != tail) { if (curr->key == key) return curr; curr = curr->next; }
    return NULL;
}
int get(int key) {
    struct Node* node = findNode(key);
    if (node) { removeNode(node); addToHead(node); return node->val; }
    return -1;
}
void put(int key, int value) {
    struct Node* node = findNode(key);
    if (node) { node->val = value; removeNode(node); addToHead(node); }
    else {
        if (cacheSize >= maxCap) {
            struct Node* lru = tail->prev; removeNode(lru); free(lru); cacheSize--;
            if (evict_cb) evict_cb();
        }
        struct Node* newNode = malloc(sizeof(struct Node)); newNode->key = key; newNode->val = value;
        addToHead(newNode); cacheSize++;
    }
}
void my_cb() { evCount++; }
int getHistoryCount() { return evCount; }

int main() {
    int capacity, q; if (scanf("%d %d", &capacity, &q) != 2) return 0;
    maxCap = capacity; head = malloc(sizeof(struct Node)); tail = malloc(sizeof(struct Node));
    head->next = tail; tail->prev = head;
    evict_cb = my_cb;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else if (strcmp(cmd, "GET") == 0) { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
        else { out[outCount++] = getHistoryCount(); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    printf("\\n");
    return 0;
}
`,
  },
  'lru-m5': {
    python: `
class TwoQueueCache:
    def __init__(self, cin: int, cout: int, cm: int):
        self.cin_cap = cin
        self.cout_cap = cout
        self.cm_cap = cm
        
        self.a_in = []
        self.a_in_vals = {}
        self.a_out = []
        self.a_out_vals = {}
        self.a_m = []
        self.a_m_vals = {}

    def get(self, key: int) -> int:
        if key in self.a_m_vals:
            self.a_m.remove(key)
            self.a_m.append(key)
            return self.a_m_vals[key]
        elif key in self.a_in_vals:
            return self.a_in_vals[key]
        elif key in self.a_out_vals:
            val = self.a_out_vals[key]
            self.a_out.remove(key)
            del self.a_out_vals[key]
            
            # promote to Am
            if len(self.a_m) >= self.cm_cap:
                victim = self.a_m.pop(0)
                del self.a_m_vals[victim]
            self.a_m.append(key)
            self.a_m_vals[key] = val
            return val
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.a_m_vals:
            self.a_m_vals[key] = value
            self.a_m.remove(key)
            self.a_m.append(key)
        elif key in self.a_in_vals:
            self.a_in_vals[key] = value
        elif key in self.a_out_vals:
            # hit on Aout -> promote to Am
            self.a_out.remove(key)
            del self.a_out_vals[key]
            if len(self.a_m) >= self.cm_cap:
                victim = self.a_m.pop(0)
                del self.a_m_vals[victim]
            self.a_m.append(key)
            self.a_m_vals[key] = value
        else:
            # Cache miss
            if len(self.a_in) >= self.cin_cap:
                # evict oldest from AIn to AOut
                victim = self.a_in.pop(0)
                val = self.a_in_vals[victim]
                del self.a_in_vals[victim]
                
                if len(self.a_out) >= self.cout_cap:
                    out_victim = self.a_out.pop(0)
                    del self.a_out_vals[out_victim]
                self.a_out.append(victim)
                self.a_out_vals[victim] = val
            self.a_in.append(key)
            self.a_in_vals[key] = value

cin, cout, cm = map(int, input().split())
q = int(input())
cache = TwoQueueCache(cin, cout, cm)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    else: out.append(str(cache.get(int(line[1]))))
print(" ".join(out))
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>
#include <algorithm>
using namespace std;

class TwoQueueCache {
    int cin_cap, cout_cap, cm_cap;
    vector<int> a_in, a_out, a_m;
    unordered_map<int, int> a_in_vals, a_out_vals, a_m_vals;
public:
    TwoQueueCache(int cin_v, int cout_v, int cm_v) : cin_cap(cin_v), cout_cap(cout_v), cm_cap(cm_v) {}
    int get(int key) {
        if (a_m_vals.count(key)) {
            a_m.erase(find(a_m.begin(), a_m.end(), key));
            a_m.push_back(key);
            return a_m_vals[key];
        }
        if (a_in_vals.count(key)) return a_in_vals[key];
        if (a_out_vals.count(key)) {
            int val = a_out_vals[key];
            a_out.erase(find(a_out.begin(), a_out.end(), key));
            a_out_vals.erase(key);
            if (a_m.size() >= (size_t)cm_cap) {
                int victim = a_m[0]; a_m.erase(a_m.begin()); a_m_vals.erase(victim);
            }
            a_m.push_back(key); a_m_vals[key] = val;
            return val;
        }
        return -1;
    }
    void put(int key, int value) {
        if (a_m_vals.count(key)) {
            a_m_vals[key] = value;
            a_m.erase(find(a_m.begin(), a_m.end(), key));
            a_m.push_back(key);
        } else if (a_in_vals.count(key)) {
            a_in_vals[key] = value;
        } else if (a_out_vals.count(key)) {
            a_out.erase(find(a_out.begin(), a_out.end(), key));
            a_out_vals.erase(key);
            if (a_m.size() >= (size_t)cm_cap) {
                int victim = a_m[0]; a_m.erase(a_m.begin()); a_m_vals.erase(victim);
            }
            a_m.push_back(key); a_m_vals[key] = value;
        } else {
            if (a_in.size() >= (size_t)cin_cap) {
                int victim = a_in[0]; a_in.erase(a_in.begin());
                int val = a_in_vals[victim]; a_in_vals.erase(victim);
                if (a_out.size() >= (size_t)cout_cap) {
                    int out_victim = a_out[0]; a_out.erase(a_out.begin()); a_out_vals.erase(out_victim);
                }
                a_out.push_back(victim); a_out_vals[victim] = val;
            }
            a_in.push_back(key); a_in_vals[key] = value;
        }
    }
};

int main() {
    int cin_val, cout_val, cm_val, q;
    if (cin >> cin_val >> cout_val >> cm_val >> q) {
        TwoQueueCache cache(cin_val, cout_val, cm_val); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(k, v); }
            else { int k; cin >> k; out.push_back(cache.get(k)); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}
`,
    java: `
import java.util.*;

class TwoQueueCache {
    private int cinCap, coutCap, cmCap;
    private List<Integer> aIn = new ArrayList<>();
    private List<Integer> aOut = new ArrayList<>();
    private List<Integer> aM = new ArrayList<>();
    private Map<Integer, Integer> aInVals = new HashMap<>();
    private Map<Integer, Integer> aOutVals = new HashMap<>();
    private Map<Integer, Integer> aMVals = new HashMap<>();

    public TwoQueueCache(int cin, int cout, int cm) { this.cinCap = cin; this.coutCap = cout; this.cmCap = cm; }

    public int get(int key) {
        if (aMVals.containsKey(key)) {
            aM.remove((Integer)key); aM.add(key); return aMVals.get(key);
        }
        if (aInVals.containsKey(key)) return aInVals.get(key);
        if (aOutVals.containsKey(key)) {
            int val = aOutVals.get(key); aOut.remove((Integer)key); aOutVals.remove(key);
            if (aM.size() >= cmCap) { int victim = aM.remove(0); aMVals.remove(victim); }
            aM.add(key); aMVals.put(key, val); return val;
        }
        return -1;
    }

    public void put(int key, int value) {
        if (aMVals.containsKey(key)) {
            aMVals.put(key, value); aM.remove((Integer)key); aM.add(key);
        } else if (aInVals.containsKey(key)) {
            aInVals.put(key, value);
        } else if (aOutVals.containsKey(key)) {
            aOut.remove((Integer)key); aOutVals.remove(key);
            if (aM.size() >= cmCap) { int victim = aM.remove(0); aMVals.remove(victim); }
            aM.add(key); aMVals.put(key, value);
        } else {
            if (aIn.size() >= cinCap) {
                int victim = aIn.remove(0); int val = aInVals.remove(victim);
                if (aOut.size() >= coutCap) { int outVictim = aOut.remove(0); aOutVals.remove(outVictim); }
                aOut.add(victim); aOutVals.put(victim, val);
            }
            aIn.add(key); aInVals.put(key, value);
        }
    }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int cin_val = sc.nextInt(); int cout_val = sc.nextInt(); int cm_val = sc.nextInt(); int q = sc.nextInt();
            TwoQueueCache cache = new TwoQueueCache(cin_val, cout_val, cm_val); List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt());
                else out.add(String.valueOf(cache.get(sc.nextInt())));
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int aIn[1005], aInVals[1005], aInSize = 0;
int aOut[1005], aOutVals[1005], aOutSize = 0;
int aM[1005], aMVals[1005], aMSize = 0;
int cin_cap = 0, cout_cap = 0, cm_cap = 0;

int findInList(int* list, int size, int key) {
    for (int i = 0; i < size; i++) { if (list[i] == key) return i; }
    return -1;
}
void removeFromList(int* list, int* vals, int* size, int idx) {
    for (int i = idx; i < *size - 1; i++) { list[i] = list[i+1]; vals[i] = vals[i+1]; }
    (*size)--;
}
int get(int key) {
    int idx = findInList(aM, aMSize, key);
    if (idx != -1) {
        int val = aMVals[idx];
        // move to back of aM
        for (int i = idx; i < aMSize - 1; i++) { aM[i] = aM[i+1]; aMVals[i] = aMVals[i+1]; }
        aM[aMSize - 1] = key; aMVals[aMSize - 1] = val;
        return val;
    }
    idx = findInList(aIn, aInSize, key);
    if (idx != -1) return aInVals[idx];
    idx = findInList(aOut, aOutSize, key);
    if (idx != -1) {
        int val = aOutVals[idx];
        removeFromList(aOut, aOutVals, &aOutSize, idx);
        if (aMSize >= cm_cap) {
            // evict from front of aM
            for (int i = 0; i < aMSize - 1; i++) { aM[i] = aM[i+1]; aMVals[i] = aMVals[i+1]; }
            aMSize--;
        }
        aM[aMSize] = key; aMVals[aMSize] = val; aMSize++;
        return val;
    }
    return -1;
}
void put(int key, int value) {
    int idx = findInList(aM, aMSize, key);
    if (idx != -1) {
        aMVals[idx] = value;
        for (int i = idx; i < aMSize - 1; i++) { aM[i] = aM[i+1]; aMVals[i] = aMVals[i+1]; }
        aM[aMSize - 1] = key; aMVals[aMSize - 1] = value;
        return;
    }
    idx = findInList(aIn, aInSize, key);
    if (idx != -1) { aInVals[idx] = value; return; }
    idx = findInList(aOut, aOutSize, key);
    if (idx != -1) {
        removeFromList(aOut, aOutVals, &aOutSize, idx);
        if (aMSize >= cm_cap) {
            for (int i = 0; i < aMSize - 1; i++) { aM[i] = aM[i+1]; aMVals[i] = aMVals[i+1]; }
            aMSize--;
        }
        aM[aMSize] = key; aMVals[aMSize] = value; aMSize++;
        return;
    }
    if (aInSize >= cin_cap) {
        int victimKey = aIn[0];
        int victimVal = aInVals[0];
        for (int i = 0; i < aInSize - 1; i++) { aIn[i] = aIn[i+1]; aInVals[i] = aInVals[i+1]; }
        aInSize--;
        if (aOutSize >= cout_cap) {
            for (int i = 0; i < aOutSize - 1; i++) { aOut[i] = aOut[i+1]; aOutVals[i] = aOutVals[i+1]; }
            aOutSize--;
        }
        aOut[aOutSize] = victimKey; aOutVals[aOutSize] = victimVal; aOutSize++;
    }
    aIn[aInSize] = key; aInVals[aInSize] = value; aInSize++;
}

int main() {
    int cin_val, cout_val, cm_val, q;
    if (scanf("%d %d %d %d", &cin_val, &cout_val, &cm_val, &q) != 4) return 0;
    cin_cap = cin_val; cout_cap = cout_val; cm_cap = cm_val;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    printf("\\n");
    return 0;
}
`,
  },
  'lru-h1': {
    python: `
class Node:
    def __init__(self, key=0, val=0):
        self.key, self.val = key, val
        self.prev, self.next = None, None

class LRUHelper:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = {}
        self.head = Node()
        self.tail = Node()
        self.head.next, self.tail.prev = self.tail, self.head

    def remove(self, node):
        node.prev.next, node.next.prev = node.next, node.prev

    def add(self, node):
        node.next, node.prev = self.head.next, self.head
        self.head.next.prev = node
        self.head.next = node

    def is_full(self):
        return len(self.cache) >= self.cap

    def evict_lru(self):
        lru = self.tail.prev
        self.remove(lru)
        del self.cache[lru.key]
        return lru

class MultilevelCache:
    def __init__(self, c1: int, c2: int):
        self.l1 = LRUHelper(c1)
        self.l2 = LRUHelper(c2)

    def get(self, key: int) -> int:
        if key in self.l1.cache:
            node = self.l1.cache[key]
            self.l1.remove(node)
            self.l1.add(node)
            return node.val
        elif key in self.l2.cache:
            node = self.l2.cache[key]
            val = node.val
            self.l2.remove(node)
            del self.l2.cache[key]
            
            # promote to l1
            self.put(key, val)
            return val
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.l1.cache:
            node = self.l1.cache[key]
            node.val = value
            self.l1.remove(node)
            self.l1.add(node)
        elif key in self.l2.cache:
            node = self.l2.cache[key]
            self.l2.remove(node)
            del self.l2.cache[key]
            self.put(key, value)
        else:
            if self.l1.is_full():
                # demote to l2
                demoted = self.l1.evict_lru()
                if self.l2.is_full():
                    self.l2.evict_lru()
                self.l2.cache[demoted.key] = demoted
                self.l2.add(demoted)
            new_node = Node(key, value)
            self.l1.cache[key] = new_node
            self.l1.add(new_node)

c1, c2 = map(int, input().split())
q = int(input())
cache = MultilevelCache(c1, c2)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    else: out.append(str(cache.get(int(line[1]))))
print(" ".join(out))
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>
using namespace std;

struct Node {
    int key, val; Node* prev; Node* next;
    Node(int k=0, int v=0) : key(k), val(v), prev(nullptr), next(nullptr) {}
};

class LRUHelper {
public:
    int cap; unordered_map<int, Node*> cache; Node* head; Node* tail;
    LRUHelper(int c) : cap(c) { head = new Node(); tail = new Node(); head->next = tail; tail->prev = head; }
    void remove(Node* n) { n->prev->next = n->next; n->next->prev = n->prev; }
    void add(Node* n) { n->next = head->next; n->prev = head; head->next->prev = n; head->next = n; }
    bool is_full() { return cache.size() >= cap; }
    Node* evict_lru() {
        Node* lru = tail->prev; remove(lru); cache.erase(lru->key); return lru;
    }
};

class MultilevelCache {
    LRUHelper l1; LRUHelper l2;
public:
    MultilevelCache(int c1, int c2) : l1(c1), l2(c2) {}
    int get(int key) {
        if (l1.cache.count(key)) { Node* n = l1.cache[key]; l1.remove(n); l1.add(n); return n->val; }
        if (l2.cache.count(key)) {
            Node* n = l2.cache[key]; int val = n->val; l2.remove(n); l2.cache.erase(key); delete n;
            put(key, val); return val;
        }
        return -1;
    }
    void put(int key, int value) {
        if (l1.cache.count(key)) { Node* n = l1.cache[key]; n->val = value; l1.remove(n); l1.add(n); }
        else if (l2.cache.count(key)) {
            Node* n = l2.cache[key]; l2.remove(n); l2.cache.erase(key); delete n;
            put(key, value);
        } else {
            if (l1.is_full()) {
                Node* demoted = l1.evict_lru();
                if (l2.is_full()) { Node* garbage = l2.evict_lru(); delete garbage; }
                l2.cache[demoted->key] = demoted; l2.add(demoted);
            }
            Node* n = new Node(key, value); l1.cache[key] = n; l1.add(n);
        }
    }
};

int main() {
    int c1, c2, q;
    if (cin >> c1 >> c2 >> q) {
        MultilevelCache cache(c1, c2); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(k, v); }
            else { int k; cin >> k; out.push_back(cache.get(k)); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}
`,
    java: `
import java.util.*;

class MultilevelCache {
    class Node {
        int key, val; Node prev, next;
        Node(int k, int v) { this.key = k; this.val = v; }
    }
    class LRUHelper {
        int cap; Map<Integer, Node> cache = new HashMap<>(); Node head, tail;
        LRUHelper(int c) { this.cap = c; head = new Node(0,0); tail = new Node(0,0); head.next = tail; tail.prev = head; }
        void remove(Node n) { n.prev.next = n.next; n.next.prev = n.prev; }
        void add(Node n) { n.next = head.next; n.prev = head; head.next.prev = n; head.next = n; }
        boolean is_full() { return cache.size() >= cap; }
        Node evict_lru() { Node lru = tail.prev; remove(lru); cache.remove(lru.key); return lru; }
    }
    private LRUHelper l1, l2;
    public MultilevelCache(int c1, int c2) { l1 = new LRUHelper(c1); l2 = new LRUHelper(c2); }
    public int get(int key) {
        if (l1.cache.containsKey(key)) { Node n = l1.cache.get(key); l1.remove(n); l1.add(n); return n.val; }
        if (l2.cache.containsKey(key)) {
            Node n = l2.cache.get(key); int val = n.val; l2.remove(n); l2.cache.remove(key);
            put(key, val); return val;
        }
        return -1;
    }
    public void put(int key, int value) {
        if (l1.cache.containsKey(key)) { Node n = l1.cache.get(key); n.val = value; l1.remove(n); l1.add(n); }
        else if (l2.cache.containsKey(key)) {
            Node n = l2.cache.get(key); l2.remove(n); l2.cache.remove(key);
            put(key, value);
        } else {
            if (l1.is_full()) {
                Node demoted = l1.evict_lru();
                if (l2.is_full()) l2.evict_lru();
                l2.cache.put(demoted.key, demoted); l2.add(demoted);
            }
            Node n = new Node(key, value); l1.cache.put(key, n); l1.add(n);
        }
    }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int c1 = sc.nextInt(); int c2 = sc.nextInt(); int q = sc.nextInt();
            MultilevelCache cache = new MultilevelCache(c1, c2); List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt());
                else out.add(String.valueOf(cache.get(sc.nextInt())));
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Node { int key; int val; struct Node* prev; struct Node* next; };
struct Node* l1Head = NULL; struct Node* l1Tail = NULL; int l1Size = 0; int maxL1 = 0;
struct Node* l2Head = NULL; struct Node* l2Tail = NULL; int l2Size = 0; int maxL2 = 0;

void removeNode(struct Node* node) { node->prev->next = node->next; node->next->prev = node->prev; }
void addL1(struct Node* node) { node->next = l1Head->next; node->prev = l1Head; l1Head->next->prev = node; l1Head->next = node; }
void addL2(struct Node* node) { node->next = l2Head->next; node->prev = l2Head; l2Head->next->prev = node; l2Head->next = node; }

struct Node* findL1(int key) {
    struct Node* curr = l1Head->next;
    while (curr != l1Tail) { if (curr->key == key) return curr; curr = curr->next; }
    return NULL;
}
struct Node* findL2(int key) {
    struct Node* curr = l2Head->next;
    while (curr != l2Tail) { if (curr->key == key) return curr; curr = curr->next; }
    return NULL;
}

void put(int key, int value);
int get(int key) {
    struct Node* node = findL1(key);
    if (node) { removeNode(node); addL1(node); return node->val; }
    node = findL2(key);
    if (node) {
        int val = node->val;
        removeNode(node); free(node); l2Size--;
        put(key, val); return val;
    }
    return -1;
}
void put(int key, int value) {
    struct Node* node = findL1(key);
    if (node) { node->val = value; removeNode(node); addL1(node); return; }
    node = findL2(key);
    if (node) {
        removeNode(node); free(node); l2Size--;
        put(key, value); return;
    }
    if (l1Size >= maxL1) {
        struct Node* demoted = l1Tail->prev; removeNode(demoted); l1Size--;
        if (l2Size >= maxL2) {
            struct Node* lru = l2Tail->prev; removeNode(lru); free(lru); l2Size--;
        }
        addL2(demoted); l2Size++;
    }
    struct Node* newNode = malloc(sizeof(struct Node)); newNode->key = key; newNode->val = value;
    addL1(newNode); l1Size++;
}

int main() {
    int c1, c2, q; if (scanf("%d %d %d", &c1, &c2, &q) != 3) return 0;
    maxL1 = c1; maxL2 = c2;
    l1Head = malloc(sizeof(struct Node)); l1Tail = malloc(sizeof(struct Node)); l1Head->next = l1Tail; l1Tail->prev = l1Head;
    l2Head = malloc(sizeof(struct Node)); l2Tail = malloc(sizeof(struct Node)); l2Head->next = l2Tail; l2Tail->prev = l2Head;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    printf("\\n");
    return 0;
}
`,
  },
  'lru-h2': {
    python: `
class Node:
    def __init__(self, key=0, val=0):
        self.key, self.val = key, val
        self.prev, self.next = None, None

class TransactionalLRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = {}
        self.head = Node()
        self.tail = Node()
        self.head.next, self.tail.prev = self.tail, self.head
        
        self.in_tx = False
        self.tx_buf = {}  # key -> value
        self.tx_log = []  # list of (key, value)

    def _remove(self, node):
        node.prev.next, node.next.prev = node.next, node.prev

    def _add(self, node):
        node.next, node.prev = self.head.next, self.head
        self.head.next.prev = node
        self.head.next = node

    def get(self, key: int) -> int:
        if self.in_tx and key in self.tx_buf:
            return self.tx_buf[key]
        if key in self.cache:
            node = self.cache[key]
            self._remove(node)
            self._add(node)
            return node.val
        return -1

    def put(self, key: int, value: int) -> None:
        if self.in_tx:
            self.tx_buf[key] = value
            self.tx_log.append((key, value))
        else:
            self._put_main(key, value)

    def _put_main(self, key: int, value: int) -> None:
        if key in self.cache:
            node = self.cache[key]
            node.val = value
            self._remove(node)
            self._add(node)
        else:
            if len(self.cache) >= self.cap:
                lru = self.tail.prev
                self._remove(lru)
                del self.cache[lru.key]
            new_node = Node(key, value)
            self.cache[key] = new_node
            self._add(new_node)

    def begin(self) -> None:
        self.in_tx = True
        self.tx_buf = {}
        self.tx_log = []

    def commit(self) -> None:
        if not self.in_tx: return
        self.in_tx = False
        for k, v in self.tx_log:
            self._put_main(k, v)
        self.tx_buf = {}
        self.tx_log = []

    def rollback(self) -> None:
        self.in_tx = False
        self.tx_buf = {}
        self.tx_log = []

capacity = int(input())
q = int(input())
cache = TransactionalLRUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    cmd = line[0]
    if cmd == "PUT": cache.put(int(line[1]), int(line[2]))
    elif cmd == "GET": out.append(str(cache.get(int(line[1]))))
    elif cmd == "BEGIN": cache.begin()
    elif cmd == "COMMIT": cache.commit()
    else: cache.rollback()
print(" ".join(out))
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>
using namespace std;

struct Node {
    int key, val; Node* prev; Node* next;
    Node(int k=0, int v=0) : key(k), val(v), prev(nullptr), next(nullptr) {}
};

class TransactionalLRUCache {
    int cap; unordered_map<int, Node*> cache; Node* head; Node* tail;
    bool in_tx = false;
    unordered_map<int, int> tx_buf;
    vector<pair<int, int>> tx_log;
    void remove(Node* n) { n->prev->next = n->next; n->next->prev = n->prev; }
    void add(Node* n) { n->next = head->next; n->prev = head; head->next->prev = n; head->next = n; }
    void put_main(int key, int value) {
        if (cache.count(key)) { Node* n = cache[key]; n->val = value; remove(n); add(n); }
        else {
            if (cache.size() >= cap) { Node* lru = tail->prev; remove(lru); cache.erase(lru->key); delete lru; }
            Node* n = new Node(key, value); cache[key] = n; add(n);
        }
    }
public:
    TransactionalLRUCache(int c) : cap(c) { head = new Node(); tail = new Node(); head->next = tail; tail->prev = head; }
    int get(int key) {
        if (in_tx && tx_buf.count(key)) return tx_buf[key];
        if (cache.count(key)) { Node* n = cache[key]; remove(n); add(n); return n->val; }
        return -1;
    }
    void put(int key, int value) {
        if (in_tx) { tx_buf[key] = value; tx_log.push_back({key, value}); }
        else { put_main(key, value); }
    }
    void begin() { in_tx = true; tx_buf.clear(); tx_log.clear(); }
    void commit() {
        if (!in_tx) return;
        in_tx = false;
        for (auto& p : tx_log) { put_main(p.first, p.second); }
        tx_buf.clear(); tx_log.clear();
    }
    void rollback() { in_tx = false; tx_buf.clear(); tx_log.clear(); }
};

int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        TransactionalLRUCache cache(capacity); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(k, v); }
            else if (cmd == "GET") { int k; cin >> k; out.push_back(cache.get(k)); }
            else if (cmd == "BEGIN") cache.begin();
            else if (cmd == "COMMIT") cache.commit();
            else cache.rollback();
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}
`,
    java: `
import java.util.*;

class TransactionalLRUCache {
    class Node {
        int key, val; Node prev, next;
        Node(int k, int v) { this.key = k; this.val = v; }
    }
    private int cap; private Map<Integer, Node> cache = new HashMap<>(); private Node head, tail;
    private boolean inTx = false;
    private Map<Integer, Integer> txBuf = new HashMap<>();
    private List<int[]> txLog = new ArrayList<>();
    public TransactionalLRUCache(int c) { this.cap = c; head = new Node(0,0); tail = new Node(0,0); head.next = tail; tail.prev = head; }
    private void remove(Node n) { n.prev.next = n.next; n.next.prev = n.prev; }
    private void add(Node n) { n.next = head.next; n.prev = head; head.next.prev = n; head.next = n; }
    private void putMain(int key, int value) {
        if (cache.containsKey(key)) { Node n = cache.get(key); n.val = value; remove(n); add(n); }
        else {
            if (cache.size() >= cap) { Node lru = tail.prev; remove(lru); cache.remove(lru.key); }
            Node n = new Node(key, value); cache.put(key, n); add(n);
        }
    }
    public int get(int key) {
        if (inTx && txBuf.containsKey(key)) return txBuf.get(key);
        if (cache.containsKey(key)) { Node n = cache.get(key); remove(n); add(n); return n.val; }
        return -1;
    }
    public void put(int key, int value) {
        if (inTx) { txBuf.put(key, value); txLog.add(new int[]{key, value}); }
        else { putMain(key, value); }
    }
    public void begin() { inTx = true; txBuf.clear(); txLog.clear(); }
    public void commit() {
        if (!inTx) return;
        inTx = false;
        for (int[] p : txLog) { putMain(p[0], p[1]); }
        txBuf.clear(); txLog.clear();
    }
    public void rollback() { inTx = false; txBuf.clear(); txLog.clear(); }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt(); int q = sc.nextInt();
            TransactionalLRUCache cache = new TransactionalLRUCache(capacity); List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt());
                else if (cmd.equals("GET")) out.add(String.valueOf(cache.get(sc.nextInt())));
                else if (cmd.equals("BEGIN")) cache.begin();
                else if (cmd.equals("COMMIT")) cache.commit();
                else cache.rollback();
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Node { int key; int val; struct Node* prev; struct Node* next; };
struct Node* head = NULL; struct Node* tail = NULL; int cacheSize = 0; int maxCap = 0;

int inTx = 0;
int txBufKeys[1005], txBufVals[1005], txBufSize = 0;
int txLogKeys[2005], txLogVals[2005], txLogSize = 0;

void removeNode(struct Node* node) { node->prev->next = node->next; node->next->prev = node->prev; }
void addToHead(struct Node* node) { node->next = head->next; node->prev = head; head->next->prev = node; head->next = node; }
struct Node* findNode(int key) {
    struct Node* curr = head->next;
    while (curr != tail) { if (curr->key == key) return curr; curr = curr->next; }
    return NULL;
}
int findTxBufIndex(int key) {
    for (int i = 0; i < txBufSize; i++) { if (txBufKeys[i] == key) return i; }
    return -1;
}
void putMain(int key, int value) {
    struct Node* node = findNode(key);
    if (node) { node->val = value; removeNode(node); addToHead(node); }
    else {
        if (cacheSize >= maxCap) { struct Node* lru = tail->prev; removeNode(lru); free(lru); cacheSize--; }
        struct Node* newNode = malloc(sizeof(struct Node)); newNode->key = key; newNode->val = value;
        addToHead(newNode); cacheSize++;
    }
}
int get(int key) {
    if (inTx) {
        int idx = findTxBufIndex(key);
        if (idx != -1) return txBufVals[idx];
    }
    struct Node* node = findNode(key);
    if (node) { removeNode(node); addToHead(node); return node->val; }
    return -1;
}
void put(int key, int value) {
    if (inTx) {
        int idx = findTxBufIndex(key);
        if (idx != -1) { txBufVals[idx] = value; }
        else { txBufKeys[txBufSize] = key; txBufVals[txBufSize] = value; txBufSize++; }
        txLogKeys[txLogSize] = key; txLogVals[txLogSize] = value; txLogSize++;
    } else {
        putMain(key, value);
    }
}
void begin() { inTx = 1; txBufSize = 0; txLogSize = 0; }
void commit() {
    if (!inTx) return;
    inTx = 0;
    for (int i = 0; i < txLogSize; i++) { putMain(txLogKeys[i], txLogVals[i]); }
    txBufSize = 0; txLogSize = 0;
}
void rollback() { inTx = 0; txBufSize = 0; txLogSize = 0; }

int main() {
    int capacity, q; if (scanf("%d %d", &capacity, &q) != 2) return 0;
    maxCap = capacity; head = malloc(sizeof(struct Node)); tail = malloc(sizeof(struct Node));
    head->next = tail; tail->prev = head;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else if (strcmp(cmd, "GET") == 0) { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
        else if (strcmp(cmd, "BEGIN") == 0) begin();
        else if (strcmp(cmd, "COMMIT") == 0) commit();
        else rollback();
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    printf("\\n");
    return 0;
}
`,
  },
  'lru-h3': {
    python: `
class Node:
    def __init__(self, key=0, val=0):
        self.key, self.val = key, val
        self.prev, self.next = None, None

class LRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = {}
        self.head = Node()
        self.tail = Node()
        self.head.next, self.tail.prev = self.tail, self.head

    def _remove(self, node):
        node.prev.next, node.next.prev = node.next, node.prev

    def _add(self, node):
        node.next, node.prev = self.head.next, self.head
        self.head.next.prev = node
        self.head.next = node

    def get(self, key: int) -> int:
        if key in self.cache:
            node = self.cache[key]
            self._remove(node)
            self._add(node)
            return node.val
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            node = self.cache[key]
            node.val = value
            self._remove(node)
            self._add(node)
        else:
            if len(self.cache) >= self.cap:
                lru = self.tail.prev
                self._remove(lru)
                del self.cache[lru.key]
            new_node = Node(key, value)
            self.cache[key] = new_node
            self._add(new_node)

class DistributedLRUCache:
    def __init__(self, num_nodes: int, capacity: int):
        self.N = num_nodes
        self.nodes = [LRUCache(capacity) for _ in range(num_nodes)]
        self.node_positions = [(i * 360 // num_nodes) % 360 for i in range(num_nodes)]

    def _route(self, key: int) -> int:
        h = key % 360
        # Find first node position >= h
        for i in range(self.N):
            if self.node_positions[i] >= h:
                return i
        return 0

    def get(self, key: int) -> int:
        node_idx = self._route(key)
        return self.nodes[node_idx].get(key)

    def put(self, key: int, value: int) -> None:
        node_idx = self._route(key)
        self.nodes[node_idx].put(key, value)

n, c = map(int, input().split())
q = int(input())
cache = DistributedLRUCache(n, c)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    else: out.append(str(cache.get(int(line[1]))))
print(" ".join(out))
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>
using namespace std;

struct Node {
    int key, val; Node* prev; Node* next;
    Node(int k=0, int v=0) : key(k), val(v), prev(nullptr), next(nullptr) {}
};

class LRUCache {
    int cap; unordered_map<int, Node*> cache; Node* head; Node* tail;
    void remove(Node* n) { n->prev->next = n->next; n->next->prev = n->prev; }
    void add(Node* n) { n->next = head->next; n->prev = head; head->next->prev = n; head->next = n; }
public:
    LRUCache(int c) : cap(c) { head = new Node(); tail = new Node(); head->next = tail; tail->prev = head; }
    int get(int key) {
        if (cache.count(key)) { Node* n = cache[key]; remove(n); add(n); return n->val; }
        return -1;
    }
    void put(int key, int value) {
        if (cache.count(key)) { Node* n = cache[key]; n->val = value; remove(n); add(n); }
        else {
            if (cache.size() >= cap) { Node* lru = tail->prev; remove(lru); cache.erase(lru->key); delete lru; }
            Node* n = new Node(key, value); cache[key] = n; add(n);
        }
    }
};

class DistributedLRUCache {
    int N; vector<LRUCache*> nodes; vector<int> node_positions;
    int route(int key) {
        int h = key % 360;
        for (int i = 0; i < N; i++) { if (node_positions[i] >= h) return i; }
        return 0;
    }
public:
    DistributedLRUCache(int num_nodes, int capacity) : N(num_nodes) {
        for (int i = 0; i < N; i++) {
            nodes.push_back(new LRUCache(capacity));
            node_positions.push_back((i * 360 / N) % 360);
        }
    }
    int get(int key) { return nodes[route(key)]->get(key); }
    void put(int key, int value) { nodes[route(key)]->put(key, value); }
};

int main() {
    int n, c, q;
    if (cin >> n >> c >> q) {
        DistributedLRUCache cache(n, c); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(k, v); }
            else { int k; cin >> k; out.push_back(cache.get(k)); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}
`,
    java: `
import java.util.*;

class DistributedLRUCache {
    class Node {
        int key, val; Node prev, next;
        Node(int k, int v) { this.key = k; this.val = v; }
    }
    class LRUCache {
        int cap; Map<Integer, Node> cache = new HashMap<>(); Node head, tail;
        LRUCache(int c) { this.cap = c; head = new Node(0,0); tail = new Node(0,0); head.next = tail; tail.prev = head; }
        void remove(Node n) { n.prev.next = n.next; n.next.prev = n.prev; }
        void add(Node n) { n.next = head.next; n.prev = head; head.next.prev = n; head.next = n; }
        int get(int key) {
            if (cache.containsKey(key)) { Node n = cache.get(key); remove(n); add(n); return n.val; }
            return -1;
        }
        void put(int key, int value) {
            if (cache.containsKey(key)) { Node n = cache.get(key); n.val = value; remove(n); add(n); }
            else {
                if (cache.size() >= cap) { Node lru = tail.prev; remove(lru); cache.remove(lru.key); }
                Node n = new Node(key, value); cache.put(key, n); add(n);
            }
        }
    }
    private int N; private List<LRUCache> nodes = new ArrayList<>(); private List<Integer> node_positions = new ArrayList<>();
    private int route(int key) {
        int h = key % 360;
        for (int i = 0; i < N; i++) { if (node_positions.get(i) >= h) return i; }
        return 0;
    }
    public DistributedLRUCache(int numNodes, int capacity) {
        this.N = numNodes;
        for (int i = 0; i < N; i++) {
            nodes.add(new LRUCache(capacity));
            node_positions.add((i * 360 / N) % 360);
        }
    }
    public int get(int key) { return nodes.get(route(key)).get(key); }
    public void put(int key, int value) { nodes.get(route(key)).put(key, value); }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt(); int c = sc.nextInt(); int q = sc.nextInt();
            DistributedLRUCache cache = new DistributedLRUCache(n, c); List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt());
                else out.add(String.valueOf(cache.get(sc.nextInt())));
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Node { int key; int val; struct Node* prev; struct Node* next; };
struct Node* heads[12]; struct Node* tails[12]; int amSize[12]; int maxCap = 0;
int nodePositions[12]; int Nnodes = 0;

void removeNode(struct Node* node) { node->prev->next = node->next; node->next->prev = node->prev; }
void addToHead(int nodeIdx, struct Node* node) {
    node->next = heads[nodeIdx]->next; node->prev = heads[nodeIdx];
    heads[nodeIdx]->next->prev = node; heads[nodeIdx]->next = node;
}
struct Node* findNode(int nodeIdx, int key) {
    struct Node* curr = heads[nodeIdx]->next;
    while (curr != tails[nodeIdx]) { if (curr->key == key) return curr; curr = curr->next; }
    return NULL;
}

int route(int key) {
    int h = key % 360;
    for (int i = 0; i < Nnodes; i++) { if (nodePositions[i] >= h) return i; }
    return 0;
}

int get(int key) {
    int nodeIdx = route(key);
    struct Node* node = findNode(nodeIdx, key);
    if (node) { removeNode(node); addToHead(nodeIdx, node); return node->val; }
    return -1;
}
void put(int key, int value) {
    int nodeIdx = route(key);
    struct Node* node = findNode(nodeIdx, key);
    if (node) { node->val = value; removeNode(node); addToHead(nodeIdx, node); }
    else {
        if (amSize[nodeIdx] >= maxCap) {
            struct Node* lru = tails[nodeIdx]->prev; removeNode(lru); free(lru); amSize[nodeIdx]--;
        }
        struct Node* newNode = malloc(sizeof(struct Node)); newNode->key = key; newNode->val = value;
        addToHead(nodeIdx, newNode); amSize[nodeIdx]++;
    }
}

int main() {
    int n, c, q; if (scanf("%d %d %d", &n, &c, &q) != 3) return 0;
    Nnodes = n; maxCap = c;
    for (int i = 0; i < n; i++) {
        heads[i] = malloc(sizeof(struct Node)); tails[i] = malloc(sizeof(struct Node));
        heads[i]->next = tails[i]; tails[i]->prev = heads[i];
        amSize[i] = 0;
        nodePositions[i] = (i * 360 / n) % 360;
    }
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    printf("\\n");
    return 0;
}
`,
  },
  'lru-h4': {
    python: `
class Node:
    def __init__(self, key=0, val=0, prio=0):
        self.key, self.val, self.prio = key, val, prio
        self.prev, self.next = None, None

class PriorityLRUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = {}
        self.head = Node()
        self.tail = Node()
        self.head.next, self.tail.prev = self.tail, self.head

    def _remove(self, node):
        node.prev.next, node.next.prev = node.next, node.prev

    def _add(self, node):
        node.next, node.prev = self.head.next, self.head
        self.head.next.prev = node
        self.head.next = node

    def get(self, key: int) -> int:
        if key in self.cache:
            node = self.cache[key]
            self._remove(node)
            self._add(node)
            return node.val
        return -1

    def put(self, key: int, value: int, priority: int) -> None:
        if key in self.cache:
            node = self.cache[key]
            node.val = value
            node.prio = priority
            self._remove(node)
            self._add(node)
        else:
            if len(self.cache) >= self.cap:
                target = None
                min_prio = float('inf')
                curr = self.tail.prev
                while curr != self.head:
                    if curr.prio < min_prio:
                        min_prio = curr.prio
                        target = curr
                    curr = curr.prev
                if target:
                    self._remove(target)
                    del self.cache[target.key]
            new_node = Node(key, value, priority)
            self.cache[key] = new_node
            self._add(new_node)

capacity = int(input())
q = int(input())
cache = PriorityLRUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]), int(line[3]))
    else: out.append(str(cache.get(int(line[1]))))
print(" ".join(out))
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>
using namespace std;

struct Node {
    int key, val, prio; Node* prev; Node* next;
    Node(int k=0, int v=0, int p=0) : key(k), val(v), prio(p), prev(nullptr), next(nullptr) {}
};

class PriorityLRUCache {
    int cap; unordered_map<int, Node*> cache; Node* head; Node* tail;
    void remove(Node* n) { n->prev->next = n->next; n->next->prev = n->prev; }
    void add(Node* n) { n->next = head->next; n->prev = head; head->next->prev = n; head->next = n; }
public:
    PriorityLRUCache(int c) : cap(c) { head = new Node(); tail = new Node(); head->next = tail; tail->prev = head; }
    int get(int key) {
        if (cache.count(key)) { Node* n = cache[key]; remove(n); add(n); return n->val; }
        return -1;
    }
    void put(int key, int value, int priority) {
        if (cache.count(key)) { Node* n = cache[key]; n->val = value; n->prio = priority; remove(n); add(n); }
        else {
            if (cache.size() >= cap) {
                Node* target = nullptr;
                int min_prio = 1e9;
                Node* curr = tail->prev;
                while (curr != head) {
                    if (curr->prio < min_prio) { min_prio = curr->prio; target = curr; }
                    curr = curr->prev;
                }
                if (target) { remove(target); cache.erase(target->key); delete target; }
            }
            Node* n = new Node(key, value, priority); cache[key] = n; add(n);
        }
    }
};

int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        PriorityLRUCache cache(capacity); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v, p; cin >> k >> v >> p; cache.put(k, v, p); }
            else { int k; cin >> k; out.push_back(cache.get(k)); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}
`,
    java: `
import java.util.*;

class PriorityLRUCache {
    class Node {
        int key, val, prio; Node prev, next;
        Node(int k, int v, int p) { this.key = k; this.val = v; this.prio = p; }
    }
    private int cap; private Map<Integer, Node> cache = new HashMap<>(); private Node head, tail;
    public PriorityLRUCache(int c) { this.cap = c; head = new Node(0,0,0); tail = new Node(0,0,0); head.next = tail; tail.prev = head; }
    private void remove(Node n) { n.prev.next = n.next; n.next.prev = n.prev; }
    private void add(Node n) { n.next = head.next; n.prev = head; head.next.prev = n; head.next = n; }
    public int get(int key) {
        if (cache.containsKey(key)) { Node n = cache.get(key); remove(n); add(n); return n.val; }
        return -1;
    }
    public void put(int key, int value, int priority) {
        if (cache.containsKey(key)) { Node n = cache.get(key); n.val = value; n.prio = priority; remove(n); add(n); }
        else {
            if (cache.size() >= cap) {
                Node target = null;
                int minPrio = Integer.MAX_VALUE;
                Node curr = tail.prev;
                while (curr != head) {
                    if (curr.prio < minPrio) { minPrio = curr.prio; target = curr; }
                    curr = curr.prev;
                }
                if (target != null) { remove(target); cache.remove(target.key); }
            }
            Node n = new Node(key, value, priority); cache.put(key, n); add(n);
        }
    }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt(); int q = sc.nextInt();
            PriorityLRUCache cache = new PriorityLRUCache(capacity); List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt(), sc.nextInt());
                else out.add(String.valueOf(cache.get(sc.nextInt())));
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Node { int key; int val; int prio; struct Node* prev; struct Node* next; };
struct Node* head = NULL; struct Node* tail = NULL; int cacheSize = 0; int maxCap = 0;

void removeNode(struct Node* node) { node->prev->next = node->next; node->next->prev = node->prev; }
void addToHead(struct Node* node) { node->next = head->next; node->prev = head; head->next->prev = node; head->next = node; }
struct Node* findNode(int key) {
    struct Node* curr = head->next;
    while (curr != tail) { if (curr->key == key) return curr; curr = curr->next; }
    return NULL;
}
int get(int key) {
    struct Node* node = findNode(key);
    if (node) { removeNode(node); addToHead(node); return node->val; }
    return -1;
}
void put(int key, int value, int priority) {
    struct Node* node = findNode(key);
    if (node) { node->val = value; node->prio = priority; removeNode(node); addToHead(node); }
    else {
        if (cacheSize >= maxCap) {
            struct Node* target = NULL;
            int minPrio = 1e9;
            struct Node* curr = tail->prev;
            while (curr != head) {
                if (curr->prio < minPrio) { minPrio = curr->prio; target = curr; }
                curr = curr->prev;
            }
            if (target) { removeNode(target); free(target); cacheSize--; }
        }
        struct Node* newNode = malloc(sizeof(struct Node)); newNode->key = key; newNode->val = value; newNode->prio = priority;
        addToHead(newNode); cacheSize++;
    }
}

int main() {
    int capacity, q; if (scanf("%d %d", &capacity, &q) != 2) return 0;
    maxCap = capacity; head = malloc(sizeof(struct Node)); tail = malloc(sizeof(struct Node));
    head->next = tail; tail->prev = head;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v, p; if (scanf("%d %d %d", &k, &v, &p) != 3) break; put(k, v, p); }
        else { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    printf("\\n");
    return 0;
}
`,
  },
  'lru-h5': {
    python: `
class Node:
    def __init__(self, key=0, val=0):
        self.key, self.val = key, val
        self.prev, self.next = None, None

class LRUHelper:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.cache = {}
        self.head = Node()
        self.tail = Node()
        self.head.next, self.tail.prev = self.tail, self.head

    def remove(self, node):
        node.prev.next, node.next.prev = node.next, node.prev

    def add(self, node):
        node.next, node.prev = self.head.next, self.head
        self.head.next.prev = node
        self.head.next = node

    def is_full(self):
        return len(self.cache) >= self.cap

    def evict_lru(self):
        lru = self.tail.prev
        self.remove(lru)
        del self.cache[lru.key]
        return lru

class SegmentedLRUCache:
    def __init__(self, cp: int, cq: int):
        self.prob = LRUHelper(cp)
        self.prot = LRUHelper(cq)

    def get(self, key: int) -> int:
        if key in self.prot.cache:
            node = self.prot.cache[key]
            self.prot.remove(node)
            self.prot.add(node)
            return node.val
        elif key in self.prob.cache:
            node = self.prob.cache[key]
            val = node.val
            self.prob.remove(node)
            del self.prob.cache[key]
            
            # promote to protected
            if self.prot.is_full():
                demoted = self.prot.evict_lru()
                if self.prob.is_full():
                    self.prob.evict_lru()
                self.prob.cache[demoted.key] = demoted
                self.prob.add(demoted)
                
            self.prot.cache[key] = node
            self.prot.add(node)
            return val
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.prot.cache:
            node = self.prot.cache[key]
            node.val = value
            self.prot.remove(node)
            self.prot.add(node)
        elif key in self.prob.cache:
            node = self.prob.cache[key]
            node.val = value
            self.prob.remove(node)
            del self.prob.cache[key]
            
            # promote to protected
            if self.prot.is_full():
                demoted = self.prot.evict_lru()
                if self.prob.is_full():
                    self.prob.evict_lru()
                self.prob.cache[demoted.key] = demoted
                self.prob.add(demoted)
                
            self.prot.cache[key] = node
            self.prot.add(node)
        else:
            # cache miss -> probationary MRU
            if self.prob.is_full():
                self.prob.evict_lru()
            new_node = Node(key, value)
            self.prob.cache[key] = new_node
            self.prob.add(new_node)

cp, cq = map(int, input().split())
q = int(input())
cache = SegmentedLRUCache(cp, cq)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    else: out.append(str(cache.get(int(line[1]))))
print(" ".join(out))
`,
    cpp: `
#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>
using namespace std;

struct Node {
    int key, val; Node* prev; Node* next;
    Node(int k=0, int v=0) : key(k), val(v), prev(nullptr), next(nullptr) {}
};

class LRUHelper {
public:
    int cap; unordered_map<int, Node*> cache; Node* head; Node* tail;
    LRUHelper(int c) : cap(c) { head = new Node(); tail = new Node(); head->next = tail; tail->prev = head; }
    void remove(Node* n) { n->prev->next = n->next; n->next->prev = n->prev; }
    void add(Node* n) { n->next = head->next; n->prev = head; head->next->prev = n; head->next = n; }
    bool is_full() { return cache.size() >= cap; }
    Node* evict_lru() { Node* lru = tail->prev; remove(lru); cache.erase(lru->key); return lru; }
};

class SegmentedLRUCache {
    LRUHelper prob; LRUHelper prot;
public:
    SegmentedLRUCache(int cp, int cq) : prob(cp), prot(cq) {}
    int get(int key) {
        if (prot.cache.count(key)) { Node* n = prot.cache[key]; prot.remove(n); prot.add(n); return n->val; }
        if (prob.cache.count(key)) {
            Node* n = prob.cache[key]; int val = n->val; prob.remove(n); prob.cache.erase(key);
            if (prot.is_full()) {
                Node* demoted = prot.evict_lru();
                if (prob.is_full()) { Node* garbage = prob.evict_lru(); delete garbage; }
                prob.cache[demoted->key] = demoted; prob.add(demoted);
            }
            prot.cache[key] = n; prot.add(n); return val;
        }
        return -1;
    }
    void put(int key, int value) {
        if (prot.cache.count(key)) { Node* n = prot.cache[key]; n->val = value; prot.remove(n); prot.add(n); }
        else if (prob.cache.count(key)) {
            Node* n = prob.cache[key]; n->val = value; prob.remove(n); prob.cache.erase(key);
            if (prot.is_full()) {
                Node* demoted = prot.evict_lru();
                if (prob.is_full()) { Node* garbage = prob.evict_lru(); delete garbage; }
                prob.cache[demoted->key] = demoted; prob.add(demoted);
            }
            prot.cache[key] = n; prot.add(n);
        } else {
            if (prob.is_full()) { Node* garbage = prob.evict_lru(); delete garbage; }
            Node* n = new Node(key, value); prob.cache[key] = n; prob.add(n);
        }
    }
};

int main() {
    int cp, cq, q;
    if (cin >> cp >> cq >> q) {
        SegmentedLRUCache cache(cp, cq); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(k, v); }
            else { int k; cin >> k; out.push_back(cache.get(k)); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}
`,
    java: `
import java.util.*;

class SegmentedLRUCache {
    class Node {
        int key, val; Node prev, next;
        Node(int k, int v) { this.key = k; this.val = v; }
    }
    class LRUHelper {
        int cap; Map<Integer, Node> cache = new HashMap<>(); Node head, tail;
        LRUHelper(int c) { this.cap = c; head = new Node(0,0); tail = new Node(0,0); head.next = tail; tail.prev = head; }
        void remove(Node n) { n.prev.next = n.next; n.next.prev = n.prev; }
        void add(Node n) { n.next = head.next; n.prev = head; head.next.prev = n; head.next = n; }
        boolean is_full() { return cache.size() >= cap; }
        Node evict_lru() { Node lru = tail.prev; remove(lru); cache.remove(lru.key); return lru; }
    }
    private LRUHelper prob, prot;
    public SegmentedLRUCache(int cp, int cq) { prob = new LRUHelper(cp); prot = new LRUHelper(cq); }
    public int get(int key) {
        if (prot.cache.containsKey(key)) { Node n = prot.cache.get(key); prot.remove(n); prot.add(n); return n.val; }
        if (prob.cache.containsKey(key)) {
            Node n = prob.cache.get(key); int val = n.val; prob.remove(n); prob.cache.remove(key);
            if (prot.is_full()) {
                Node demoted = prot.evict_lru();
                if (prob.is_full()) prob.evict_lru();
                prob.cache.put(demoted.key, demoted); prob.add(demoted);
            }
            prot.cache.put(key, n); prot.add(n); return val;
        }
        return -1;
    }
    public void put(int key, int value) {
        if (prot.cache.containsKey(key)) { Node n = prot.cache.get(key); n.val = value; prot.remove(n); prot.add(n); }
        else if (prob.cache.containsKey(key)) {
            Node n = prob.cache.get(key); n.val = value; prob.remove(n); prob.cache.remove(key);
            if (prot.is_full()) {
                Node demoted = prot.evict_lru();
                if (prob.is_full()) prob.evict_lru();
                prob.cache.put(demoted.key, demoted); prob.add(demoted);
            }
            prot.cache.put(key, n); prot.add(n);
        } else {
            if (prob.is_full()) prob.evict_lru();
            Node n = new Node(key, value); prob.cache.put(key, n); prob.add(n);
        }
    }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int cp = sc.nextInt(); int cq = sc.nextInt(); int q = sc.nextInt();
            SegmentedLRUCache cache = new SegmentedLRUCache(cp, cq); List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt());
                else out.add(String.valueOf(cache.get(sc.nextInt())));
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
    c: `
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Node { int key; int val; struct Node* prev; struct Node* next; };
struct Node* prbHead = NULL; struct Node* prbTail = NULL; int prbSize = 0; int maxPrb = 0;
struct Node* prtHead = NULL; struct Node* prtTail = NULL; int prtSize = 0; int maxPrt = 0;

void removeNode(struct Node* node) { node->prev->next = node->next; node->next->prev = node->prev; }
void addPrb(struct Node* node) { node->next = prbHead->next; node->prev = prbHead; prbHead->next->prev = node; prbHead->next = node; }
void addPrt(struct Node* node) { node->next = prtHead->next; node->prev = prtHead; prtHead->next->prev = node; prtHead->next = node; }

struct Node* findPrb(int key) {
    struct Node* curr = prbHead->next;
    while (curr != prbTail) { if (curr->key == key) return curr; curr = curr->next; }
    return NULL;
}
struct Node* findPrt(int key) {
    struct Node* curr = prtHead->next;
    while (curr != prtTail) { if (curr->key == key) return curr; curr = curr->next; }
    return NULL;
}

void put(int key, int value);
int get(int key) {
    struct Node* node = findPrt(key);
    if (node) { removeNode(node); addPrt(node); return node->val; }
    node = findPrb(key);
    if (node) {
        int val = node->val;
        removeNode(node); prbSize--;
        if (prtSize >= maxPrt) {
            struct Node* demoted = prtTail->prev; removeNode(demoted); prtSize--;
            if (prbSize >= maxPrb) { struct Node* lru = prbTail->prev; removeNode(lru); free(lru); prbSize--; }
            addPrb(demoted); prbSize++;
        }
        addPrt(node); prtSize++;
        return val;
    }
    return -1;
}
void put(int key, int value) {
    struct Node* node = findPrt(key);
    if (node) { node->val = value; removeNode(node); addPrt(node); return; }
    node = findPrb(key);
    if (node) {
        node->val = value;
        removeNode(node); prbSize--;
        if (prtSize >= maxPrt) {
            struct Node* demoted = prtTail->prev; removeNode(demoted); prtSize--;
            if (prbSize >= maxPrb) { struct Node* lru = prbTail->prev; removeNode(lru); free(lru); prbSize--; }
            addPrb(demoted); prbSize++;
        }
        addPrt(node); prtSize++;
        return;
    }
    if (prbSize >= maxPrb) {
        struct Node* lru = prbTail->prev; removeNode(lru); free(lru); prbSize--;
    }
    struct Node* newNode = malloc(sizeof(struct Node)); newNode->key = key; newNode->val = value;
    addPrb(newNode); prbSize++;
}

int main() {
    int cp, cq, q; if (scanf("%d %d %d", &cp, &cq, &q) != 3) return 0;
    maxPrb = cp; maxPrt = cq;
    prbHead = malloc(sizeof(struct Node)); prbTail = malloc(sizeof(struct Node)); prbHead->next = prbTail; prbTail->prev = prbHead;
    prtHead = malloc(sizeof(struct Node)); prtTail = malloc(sizeof(struct Node)); prtHead->next = prtTail; prtTail->prev = prtHead;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    printf("\\n");
    return 0;
}
`,
  },
};
