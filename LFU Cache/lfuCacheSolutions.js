export const lfuCacheSolutions = {
  "lfu-e1": {
    python: `from collections import defaultdict, OrderedDict

class LFUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.min_freq = 0
        self.key_map = {}  # key -> [val, freq]
        self.freq_map = defaultdict(OrderedDict)  # freq -> OrderedDict{key: None}

    def _update(self, key):
        freq = self.key_map[key][1]
        del self.freq_map[freq][key]
        if not self.freq_map[freq] and freq == self.min_freq:
            self.min_freq += 1
        self.key_map[key][1] += 1
        self.freq_map[self.key_map[key][1]][key] = None

    def get(self, key: int) -> int:
        if key not in self.key_map: return -1
        self._update(key)
        return self.key_map[key][0]

    def put(self, key: int, value: int) -> None:
        if self.cap == 0: return
        if key in self.key_map:
            self.key_map[key][0] = value
            self._update(key)
        else:
            if len(self.key_map) >= self.cap:
                evict_key, _ = self.freq_map[self.min_freq].popitem(last=False)
                del self.key_map[evict_key]
            self.key_map[key] = [value, 1]
            self.freq_map[1][key] = None
            self.min_freq = 1

capacity = int(input())
q = int(input())
cache = LFUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    else: out.append(str(cache.get(int(line[1]))))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <unordered_map>
#include <list>
#include <string>
#include <vector>
using namespace std;
class LFUCache {
    int cap, min_freq;
    unordered_map<int, pair<int,int>> km; // key->{val,freq}
    unordered_map<int, list<int>> fm;     // freq->key list
    unordered_map<int, list<int>::iterator> im; // key->iterator
    void upd(int key) {
        int f = km[key].second;
        fm[f].erase(im[key]);
        if (fm[f].empty() && f == min_freq) min_freq++;
        km[key].second++;
        fm[f+1].push_front(key);
        im[key] = fm[f+1].begin();
    }
public:
    LFUCache(int c) : cap(c), min_freq(0) {}
    int get(int key) {
        if (!km.count(key)) return -1;
        upd(key); return km[key].first;
    }
    void put(int key, int value) {
        if (!cap) return;
        if (km.count(key)) { km[key].first = value; upd(key); }
        else {
            if ((int)km.size() >= cap) {
                int ev = fm[min_freq].back(); fm[min_freq].pop_back();
                im.erase(ev); km.erase(ev);
            }
            km[key] = {value, 1}; fm[1].push_front(key);
            im[key] = fm[1].begin(); min_freq = 1;
        }
    }
};
int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LFUCache cache(capacity); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(k, v); }
            else { int k; cin >> k; out.push_back(cache.get(k)); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class LFUCache {
    private int cap, minFreq;
    private Map<Integer, int[]> km = new HashMap<>();
    private Map<Integer, LinkedHashSet<Integer>> fm = new HashMap<>();
    public LFUCache(int capacity) { this.cap = capacity; this.minFreq = 0; }
    private void upd(int key) {
        int f = km.get(key)[1];
        fm.get(f).remove(key);
        if (fm.get(f).isEmpty() && f == minFreq) minFreq++;
        km.get(key)[1]++;
        fm.computeIfAbsent(f+1, k -> new LinkedHashSet<>()).add(key);
    }
    public int get(int key) {
        if (!km.containsKey(key)) return -1;
        upd(key); return km.get(key)[0];
    }
    public void put(int key, int value) {
        if (cap == 0) return;
        if (km.containsKey(key)) { km.get(key)[0] = value; upd(key); }
        else {
            if (km.size() >= cap) {
                int ev = fm.get(minFreq).iterator().next();
                fm.get(minFreq).remove(ev); km.remove(ev);
            }
            km.put(key, new int[]{value, 1});
            fm.computeIfAbsent(1, k -> new LinkedHashSet<>()).add(key);
            minFreq = 1;
        }
    }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt(), q = sc.nextInt();
            LFUCache cache = new LFUCache(capacity);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt());
                else out.add(String.valueOf(cache.get(sc.nextInt())));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 1005
struct Node { int key; int val; int freq; struct Node* prev; struct Node* next; };
struct List { struct Node* head; struct Node* tail; int size; } freqLists[MAXN*2+5];
struct Node* keyNodes[MAXN];
int keyFreqs[MAXN], keyVals[MAXN];
int keyUsed[MAXN];
int minFreq = 0, cacheSize = 0, maxCap = 0;
void initList(int f) {
    freqLists[f].head = malloc(sizeof(struct Node));
    freqLists[f].tail = malloc(sizeof(struct Node));
    freqLists[f].head->next = freqLists[f].tail;
    freqLists[f].tail->prev = freqLists[f].head;
    freqLists[f].size = 0;
}
void addHead(int f, struct Node* n) {
    n->next = freqLists[f].head->next; n->prev = freqLists[f].head;
    freqLists[f].head->next->prev = n; freqLists[f].head->next = n;
    freqLists[f].size++;
}
void removeNode(int f, struct Node* n) {
    n->prev->next = n->next; n->next->prev = n->prev;
    freqLists[f].size--;
}
void upd(struct Node* n) {
    int f = n->freq;
    removeNode(f, n);
    if (freqLists[f].size == 0 && f == minFreq) minFreq++;
    n->freq++;
    if (freqLists[n->freq].head == NULL) initList(n->freq);
    addHead(n->freq, n);
}
int get(int key) {
    if (key < 0 || key >= MAXN || !keyUsed[key]) return -1;
    upd(keyNodes[key]);
    return keyNodes[key]->val;
}
void put(int key, int value) {
    if (maxCap == 0 || key < 0 || key >= MAXN) return;
    if (keyUsed[key]) {
        keyNodes[key]->val = value;
        upd(keyNodes[key]);
    } else {
        if (cacheSize >= maxCap) {
            struct Node* lru = freqLists[minFreq].tail->prev;
            removeNode(minFreq, lru);
            keyUsed[lru->key] = 0; cacheSize--;
        }
        struct Node* n = malloc(sizeof(struct Node));
        n->key = key; n->val = value; n->freq = 1;
        keyNodes[key] = n; keyUsed[key] = 1;
        if (freqLists[1].head == NULL) initList(1);
        addHead(1, n); minFreq = 1; cacheSize++;
    }
}
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    maxCap = capacity;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "lfu-e2": {
    python: `from collections import defaultdict, OrderedDict

class LFUCacheWithFreq:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.min_freq = 0
        self.key_map = {}
        self.freq_map = defaultdict(OrderedDict)

    def _update(self, key):
        f = self.key_map[key][1]
        del self.freq_map[f][key]
        if not self.freq_map[f] and f == self.min_freq:
            self.min_freq += 1
        self.key_map[key][1] += 1
        self.freq_map[self.key_map[key][1]][key] = None

    def get(self, key: int) -> int:
        if key not in self.key_map: return -1
        self._update(key)
        return self.key_map[key][0]

    def put(self, key: int, value: int) -> None:
        if self.cap == 0: return
        if key in self.key_map:
            self.key_map[key][0] = value
            self._update(key)
        else:
            if len(self.key_map) >= self.cap:
                evict_key, _ = self.freq_map[self.min_freq].popitem(last=False)
                del self.key_map[evict_key]
            self.key_map[key] = [value, 1]
            self.freq_map[1][key] = None
            self.min_freq = 1

    def freq(self, key: int) -> int:
        if key not in self.key_map: return -1
        return self.key_map[key][1]

capacity = int(input())
q = int(input())
cache = LFUCacheWithFreq(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    elif line[0] == "GET": out.append(str(cache.get(int(line[1]))))
    else: out.append(str(cache.freq(int(line[1]))))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <unordered_map>
#include <list>
#include <string>
#include <vector>
using namespace std;
class LFUCacheWithFreq {
    int cap, min_freq;
    unordered_map<int, pair<int,int>> km;
    unordered_map<int, list<int>> fm;
    unordered_map<int, list<int>::iterator> im;
    void upd(int key) {
        int f = km[key].second;
        fm[f].erase(im[key]);
        if (fm[f].empty() && f == min_freq) min_freq++;
        km[key].second++;
        fm[f+1].push_front(key);
        im[key] = fm[f+1].begin();
    }
public:
    LFUCacheWithFreq(int c) : cap(c), min_freq(0) {}
    int get(int key) {
        if (!km.count(key)) return -1;
        upd(key); return km[key].first;
    }
    void put(int key, int value) {
        if (!cap) return;
        if (km.count(key)) { km[key].first = value; upd(key); }
        else {
            if ((int)km.size() >= cap) {
                int ev = fm[min_freq].back(); fm[min_freq].pop_back();
                im.erase(ev); km.erase(ev);
            }
            km[key] = {value, 1}; fm[1].push_front(key);
            im[key] = fm[1].begin(); min_freq = 1;
        }
    }
    int freq(int key) { return km.count(key) ? km[key].second : -1; }
};
int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LFUCacheWithFreq cache(capacity); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(k, v); }
            else if (cmd == "GET") { int k; cin >> k; out.push_back(cache.get(k)); }
            else { int k; cin >> k; out.push_back(cache.freq(k)); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class LFUCacheWithFreq {
    private int cap, minFreq;
    private Map<Integer, int[]> km = new HashMap<>();
    private Map<Integer, LinkedHashSet<Integer>> fm = new HashMap<>();
    public LFUCacheWithFreq(int c) { this.cap = c; this.minFreq = 0; }
    private void upd(int key) {
        int f = km.get(key)[1];
        fm.get(f).remove(key);
        if (fm.get(f).isEmpty() && f == minFreq) minFreq++;
        km.get(key)[1]++;
        fm.computeIfAbsent(f+1, k -> new LinkedHashSet<>()).add(key);
    }
    public int get(int key) {
        if (!km.containsKey(key)) return -1;
        upd(key); return km.get(key)[0];
    }
    public void put(int key, int value) {
        if (cap == 0) return;
        if (km.containsKey(key)) { km.get(key)[0] = value; upd(key); }
        else {
            if (km.size() >= cap) {
                int ev = fm.get(minFreq).iterator().next();
                fm.get(minFreq).remove(ev); km.remove(ev);
            }
            km.put(key, new int[]{value, 1});
            fm.computeIfAbsent(1, k -> new LinkedHashSet<>()).add(key);
            minFreq = 1;
        }
    }
    public int freq(int key) { return km.containsKey(key) ? km.get(key)[1] : -1; }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt(), q = sc.nextInt();
            LFUCacheWithFreq cache = new LFUCacheWithFreq(capacity);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt());
                else if (cmd.equals("GET")) out.add(String.valueOf(cache.get(sc.nextInt())));
                else out.add(String.valueOf(cache.freq(sc.nextInt())));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 1005
struct Node { int key; int val; int freq; struct Node* prev; struct Node* next; };
struct List { struct Node* head; struct Node* tail; int size; } freqLists[MAXN*2+5];
struct Node* keyNodes[MAXN];
int keyUsed[MAXN];
int minFreq = 0, cacheSize = 0, maxCap = 0;
void initList(int f) {
    freqLists[f].head = malloc(sizeof(struct Node));
    freqLists[f].tail = malloc(sizeof(struct Node));
    freqLists[f].head->next = freqLists[f].tail;
    freqLists[f].tail->prev = freqLists[f].head;
    freqLists[f].size = 0;
}
void addHead(int f, struct Node* n) {
    n->next = freqLists[f].head->next; n->prev = freqLists[f].head;
    freqLists[f].head->next->prev = n; freqLists[f].head->next = n;
    freqLists[f].size++;
}
void removeNode(int f, struct Node* n) {
    n->prev->next = n->next; n->next->prev = n->prev;
    freqLists[f].size--;
}
void upd(struct Node* n) {
    int f = n->freq;
    removeNode(f, n);
    if (freqLists[f].size == 0 && f == minFreq) minFreq++;
    n->freq++;
    if (freqLists[n->freq].head == NULL) initList(n->freq);
    addHead(n->freq, n);
}
int get(int key) {
    if (key < 0 || key >= MAXN || !keyUsed[key]) return -1;
    upd(keyNodes[key]); return keyNodes[key]->val;
}
void put(int key, int value) {
    if (maxCap == 0 || key < 0 || key >= MAXN) return;
    if (keyUsed[key]) { keyNodes[key]->val = value; upd(keyNodes[key]); }
    else {
        if (cacheSize >= maxCap) {
            struct Node* lru = freqLists[minFreq].tail->prev;
            removeNode(minFreq, lru);
            keyUsed[lru->key] = 0; cacheSize--;
        }
        struct Node* n = malloc(sizeof(struct Node));
        n->key = key; n->val = value; n->freq = 1;
        keyNodes[key] = n; keyUsed[key] = 1;
        if (freqLists[1].head == NULL) initList(1);
        addHead(1, n); minFreq = 1; cacheSize++;
    }
}
int getFreq(int key) {
    if (key < 0 || key >= MAXN || !keyUsed[key]) return -1;
    return keyNodes[key]->freq;
}
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    maxCap = capacity;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else if (strcmp(cmd, "GET") == 0) { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
        else { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = getFreq(k); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "lfu-e3": {
    python: `from collections import defaultdict, OrderedDict

class LFUCacheMaxFreq:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.min_freq = 0
        self.max_freq = 0
        self.key_map = {}
        self.freq_map = defaultdict(OrderedDict)

    def _update(self, key):
        f = self.key_map[key][1]
        del self.freq_map[f][key]
        if not self.freq_map[f] and f == self.min_freq:
            self.min_freq += 1
        self.key_map[key][1] += 1
        new_f = self.key_map[key][1]
        self.freq_map[new_f][key] = None
        if new_f > self.max_freq:
            self.max_freq = new_f

    def get(self, key: int) -> int:
        if key not in self.key_map: return -1
        self._update(key)
        return self.key_map[key][0]

    def put(self, key: int, value: int) -> None:
        if self.cap == 0: return
        if key in self.key_map:
            self.key_map[key][0] = value
            self._update(key)
        else:
            if len(self.key_map) >= self.cap:
                evict_key, _ = self.freq_map[self.min_freq].popitem(last=False)
                del self.key_map[evict_key]
            self.key_map[key] = [value, 1]
            self.freq_map[1][key] = None
            self.min_freq = 1
            if self.max_freq == 0:
                self.max_freq = 1

    def maxfreq(self) -> int:
        if not self.key_map: return 0
        return max(v[1] for v in self.key_map.values())

capacity = int(input())
q = int(input())
cache = LFUCacheMaxFreq(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    elif line[0] == "GET": out.append(str(cache.get(int(line[1]))))
    else: out.append(str(cache.maxfreq()))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <unordered_map>
#include <list>
#include <string>
#include <vector>
using namespace std;
class LFUCacheMaxFreq {
    int cap, min_freq, max_freq;
    unordered_map<int, pair<int,int>> km;
    unordered_map<int, list<int>> fm;
    unordered_map<int, list<int>::iterator> im;
    void upd(int key) {
        int f = km[key].second;
        fm[f].erase(im[key]);
        if (fm[f].empty() && f == min_freq) min_freq++;
        km[key].second++;
        if (km[key].second > max_freq) max_freq = km[key].second;
        fm[f+1].push_front(key);
        im[key] = fm[f+1].begin();
    }
public:
    LFUCacheMaxFreq(int c) : cap(c), min_freq(0), max_freq(0) {}
    int get(int key) {
        if (!km.count(key)) return -1;
        upd(key); return km[key].first;
    }
    void put(int key, int value) {
        if (!cap) return;
        if (km.count(key)) { km[key].first = value; upd(key); }
        else {
            if ((int)km.size() >= cap) {
                int ev = fm[min_freq].back(); fm[min_freq].pop_back();
                im.erase(ev); km.erase(ev);
            }
            km[key] = {value, 1}; fm[1].push_front(key);
            im[key] = fm[1].begin(); min_freq = 1;
            if (max_freq == 0) max_freq = 1;
        }
    }
    int maxfreq() {
        if (km.empty()) return 0;
        int mx = 0;
        for (auto& p : km) if (p.second.second > mx) mx = p.second.second;
        return mx;
    }
};
int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LFUCacheMaxFreq cache(capacity); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(k, v); }
            else if (cmd == "GET") { int k; cin >> k; out.push_back(cache.get(k)); }
            else { out.push_back(cache.maxfreq()); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class LFUCacheMaxFreq {
    private int cap, minFreq;
    private Map<Integer, int[]> km = new HashMap<>();
    private Map<Integer, LinkedHashSet<Integer>> fm = new HashMap<>();
    public LFUCacheMaxFreq(int c) { this.cap = c; this.minFreq = 0; }
    private void upd(int key) {
        int f = km.get(key)[1];
        fm.get(f).remove(key);
        if (fm.get(f).isEmpty() && f == minFreq) minFreq++;
        km.get(key)[1]++;
        fm.computeIfAbsent(f+1, k -> new LinkedHashSet<>()).add(key);
    }
    public int get(int key) {
        if (!km.containsKey(key)) return -1;
        upd(key); return km.get(key)[0];
    }
    public void put(int key, int value) {
        if (cap == 0) return;
        if (km.containsKey(key)) { km.get(key)[0] = value; upd(key); }
        else {
            if (km.size() >= cap) {
                int ev = fm.get(minFreq).iterator().next();
                fm.get(minFreq).remove(ev); km.remove(ev);
            }
            km.put(key, new int[]{value, 1});
            fm.computeIfAbsent(1, k -> new LinkedHashSet<>()).add(key);
            minFreq = 1;
        }
    }
    public int maxfreq() {
        if (km.isEmpty()) return 0;
        int mx = 0;
        for (int[] v : km.values()) if (v[1] > mx) mx = v[1];
        return mx;
    }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt(), q = sc.nextInt();
            LFUCacheMaxFreq cache = new LFUCacheMaxFreq(capacity);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt());
                else if (cmd.equals("GET")) out.add(String.valueOf(cache.get(sc.nextInt())));
                else out.add(String.valueOf(cache.maxfreq()));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 1005
struct Node { int key; int val; int freq; struct Node* prev; struct Node* next; };
struct List { struct Node* head; struct Node* tail; int size; } freqLists[MAXN*2+5];
struct Node* keyNodes[MAXN];
int keyUsed[MAXN];
int minFreq = 0, cacheSize = 0, maxCap = 0;
void initList(int f) {
    freqLists[f].head = malloc(sizeof(struct Node));
    freqLists[f].tail = malloc(sizeof(struct Node));
    freqLists[f].head->next = freqLists[f].tail;
    freqLists[f].tail->prev = freqLists[f].head;
    freqLists[f].size = 0;
}
void addHead(int f, struct Node* n) {
    n->next = freqLists[f].head->next; n->prev = freqLists[f].head;
    freqLists[f].head->next->prev = n; freqLists[f].head->next = n;
    freqLists[f].size++;
}
void removeNode(int f, struct Node* n) {
    n->prev->next = n->next; n->next->prev = n->prev;
    freqLists[f].size--;
}
void upd(struct Node* n) {
    int f = n->freq;
    removeNode(f, n);
    if (freqLists[f].size == 0 && f == minFreq) minFreq++;
    n->freq++;
    if (freqLists[n->freq].head == NULL) initList(n->freq);
    addHead(n->freq, n);
}
int get(int key) {
    if (key < 0 || key >= MAXN || !keyUsed[key]) return -1;
    upd(keyNodes[key]); return keyNodes[key]->val;
}
void put(int key, int value) {
    if (maxCap == 0 || key < 0 || key >= MAXN) return;
    if (keyUsed[key]) { keyNodes[key]->val = value; upd(keyNodes[key]); }
    else {
        if (cacheSize >= maxCap) {
            struct Node* lru = freqLists[minFreq].tail->prev;
            removeNode(minFreq, lru); keyUsed[lru->key] = 0; cacheSize--;
        }
        struct Node* n = malloc(sizeof(struct Node));
        n->key = key; n->val = value; n->freq = 1;
        keyNodes[key] = n; keyUsed[key] = 1;
        if (freqLists[1].head == NULL) initList(1);
        addHead(1, n); minFreq = 1; cacheSize++;
    }
}
int maxfreq() {
    int mx = 0;
    for (int i = 0; i < MAXN; i++) {
        if (keyUsed[i] && keyNodes[i]->freq > mx) mx = keyNodes[i]->freq;
    }
    return mx;
}
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    maxCap = capacity;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else if (strcmp(cmd, "GET") == 0) { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
        else { out[outCount++] = maxfreq(); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "lfu-e4": {
    python: `from collections import defaultdict, OrderedDict

class LFUCacheSize:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.min_freq = 0
        self.key_map = {}
        self.freq_map = defaultdict(OrderedDict)

    def _update(self, key):
        f = self.key_map[key][1]
        del self.freq_map[f][key]
        if not self.freq_map[f] and f == self.min_freq: self.min_freq += 1
        self.key_map[key][1] += 1
        self.freq_map[self.key_map[key][1]][key] = None

    def get(self, key: int) -> int:
        if key not in self.key_map: return -1
        self._update(key)
        return self.key_map[key][0]

    def put(self, key: int, value: int) -> None:
        if self.cap == 0: return
        if key in self.key_map:
            self.key_map[key][0] = value; self._update(key)
        else:
            if len(self.key_map) >= self.cap:
                ek, _ = self.freq_map[self.min_freq].popitem(last=False)
                del self.key_map[ek]
            self.key_map[key] = [value, 1]
            self.freq_map[1][key] = None
            self.min_freq = 1

    def size(self) -> int:
        return len(self.key_map)

capacity = int(input())
q = int(input())
cache = LFUCacheSize(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    elif line[0] == "GET": out.append(str(cache.get(int(line[1]))))
    else: out.append(str(cache.size()))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <unordered_map>
#include <list>
#include <string>
#include <vector>
using namespace std;
class LFUCacheSize {
    int cap, min_freq;
    unordered_map<int, pair<int,int>> km;
    unordered_map<int, list<int>> fm;
    unordered_map<int, list<int>::iterator> im;
    void upd(int key) {
        int f = km[key].second;
        fm[f].erase(im[key]);
        if (fm[f].empty() && f == min_freq) min_freq++;
        km[key].second++; fm[f+1].push_front(key);
        im[key] = fm[f+1].begin();
    }
public:
    LFUCacheSize(int c) : cap(c), min_freq(0) {}
    int get(int key) { if (!km.count(key)) return -1; upd(key); return km[key].first; }
    void put(int key, int value) {
        if (!cap) return;
        if (km.count(key)) { km[key].first = value; upd(key); }
        else {
            if ((int)km.size() >= cap) { int ev = fm[min_freq].back(); fm[min_freq].pop_back(); im.erase(ev); km.erase(ev); }
            km[key] = {value, 1}; fm[1].push_front(key); im[key] = fm[1].begin(); min_freq = 1;
        }
    }
    int size() { return (int)km.size(); }
};
int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LFUCacheSize cache(capacity); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(k, v); }
            else if (cmd == "GET") { int k; cin >> k; out.push_back(cache.get(k)); }
            else { out.push_back(cache.size()); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class LFUCacheSize {
    private int cap, minFreq;
    private Map<Integer, int[]> km = new HashMap<>();
    private Map<Integer, LinkedHashSet<Integer>> fm = new HashMap<>();
    public LFUCacheSize(int c) { this.cap = c; this.minFreq = 0; }
    private void upd(int key) {
        int f = km.get(key)[1];
        fm.get(f).remove(key);
        if (fm.get(f).isEmpty() && f == minFreq) minFreq++;
        km.get(key)[1]++;
        fm.computeIfAbsent(f+1, k -> new LinkedHashSet<>()).add(key);
    }
    public int get(int key) { if (!km.containsKey(key)) return -1; upd(key); return km.get(key)[0]; }
    public void put(int key, int value) {
        if (cap == 0) return;
        if (km.containsKey(key)) { km.get(key)[0] = value; upd(key); }
        else {
            if (km.size() >= cap) { int ev = fm.get(minFreq).iterator().next(); fm.get(minFreq).remove(ev); km.remove(ev); }
            km.put(key, new int[]{value, 1}); fm.computeIfAbsent(1, k -> new LinkedHashSet<>()).add(key); minFreq = 1;
        }
    }
    public int size() { return km.size(); }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt(), q = sc.nextInt();
            LFUCacheSize cache = new LFUCacheSize(capacity);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt());
                else if (cmd.equals("GET")) out.add(String.valueOf(cache.get(sc.nextInt())));
                else out.add(String.valueOf(cache.size()));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 1005
struct Node { int key; int val; int freq; struct Node* prev; struct Node* next; };
struct List { struct Node* head; struct Node* tail; int size; } freqLists[MAXN*2+5];
struct Node* keyNodes[MAXN];
int keyUsed[MAXN];
int minFreq = 0, cacheSize = 0, maxCap = 0;
void initList(int f) {
    freqLists[f].head = malloc(sizeof(struct Node));
    freqLists[f].tail = malloc(sizeof(struct Node));
    freqLists[f].head->next = freqLists[f].tail;
    freqLists[f].tail->prev = freqLists[f].head;
    freqLists[f].size = 0;
}
void addHead(int f, struct Node* n) {
    n->next = freqLists[f].head->next; n->prev = freqLists[f].head;
    freqLists[f].head->next->prev = n; freqLists[f].head->next = n;
    freqLists[f].size++;
}
void removeNode(int f, struct Node* n) {
    n->prev->next = n->next; n->next->prev = n->prev;
    freqLists[f].size--;
}
void upd(struct Node* n) {
    int f = n->freq; removeNode(f, n);
    if (freqLists[f].size == 0 && f == minFreq) minFreq++;
    n->freq++;
    if (freqLists[n->freq].head == NULL) initList(n->freq);
    addHead(n->freq, n);
}
int get(int key) {
    if (key < 0 || key >= MAXN || !keyUsed[key]) return -1;
    upd(keyNodes[key]); return keyNodes[key]->val;
}
void put(int key, int value) {
    if (maxCap == 0 || key < 0 || key >= MAXN) return;
    if (keyUsed[key]) { keyNodes[key]->val = value; upd(keyNodes[key]); }
    else {
        if (cacheSize >= maxCap) {
            struct Node* lru = freqLists[minFreq].tail->prev;
            removeNode(minFreq, lru); keyUsed[lru->key] = 0; cacheSize--;
        }
        struct Node* n = malloc(sizeof(struct Node));
        n->key = key; n->val = value; n->freq = 1;
        keyNodes[key] = n; keyUsed[key] = 1;
        if (freqLists[1].head == NULL) initList(1);
        addHead(1, n); minFreq = 1; cacheSize++;
    }
}
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    maxCap = capacity;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else if (strcmp(cmd, "GET") == 0) { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
        else { out[outCount++] = cacheSize; }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "lfu-e5": {
    python: `from collections import defaultdict, OrderedDict

class LFUCacheContains:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.min_freq = 0
        self.key_map = {}
        self.freq_map = defaultdict(OrderedDict)

    def _update(self, key):
        f = self.key_map[key][1]
        del self.freq_map[f][key]
        if not self.freq_map[f] and f == self.min_freq: self.min_freq += 1
        self.key_map[key][1] += 1
        self.freq_map[self.key_map[key][1]][key] = None

    def get(self, key: int) -> int:
        if key not in self.key_map: return -1
        self._update(key)
        return self.key_map[key][0]

    def put(self, key: int, value: int) -> None:
        if self.cap == 0: return
        if key in self.key_map:
            self.key_map[key][0] = value; self._update(key)
        else:
            if len(self.key_map) >= self.cap:
                ek, _ = self.freq_map[self.min_freq].popitem(last=False)
                del self.key_map[ek]
            self.key_map[key] = [value, 1]
            self.freq_map[1][key] = None; self.min_freq = 1

    def contains(self, key: int) -> int:
        return 1 if key in self.key_map else 0

capacity = int(input())
q = int(input())
cache = LFUCacheContains(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    elif line[0] == "GET": out.append(str(cache.get(int(line[1]))))
    else: out.append(str(cache.contains(int(line[1]))))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <unordered_map>
#include <list>
#include <string>
#include <vector>
using namespace std;
class LFUCacheContains {
    int cap, min_freq;
    unordered_map<int, pair<int,int>> km;
    unordered_map<int, list<int>> fm;
    unordered_map<int, list<int>::iterator> im;
    void upd(int key) {
        int f = km[key].second; fm[f].erase(im[key]);
        if (fm[f].empty() && f == min_freq) min_freq++;
        km[key].second++; fm[f+1].push_front(key); im[key] = fm[f+1].begin();
    }
public:
    LFUCacheContains(int c) : cap(c), min_freq(0) {}
    int get(int key) { if (!km.count(key)) return -1; upd(key); return km[key].first; }
    void put(int key, int value) {
        if (!cap) return;
        if (km.count(key)) { km[key].first = value; upd(key); }
        else {
            if ((int)km.size() >= cap) { int ev = fm[min_freq].back(); fm[min_freq].pop_back(); im.erase(ev); km.erase(ev); }
            km[key] = {value, 1}; fm[1].push_front(key); im[key] = fm[1].begin(); min_freq = 1;
        }
    }
    int contains(int key) { return km.count(key) ? 1 : 0; }
};
int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LFUCacheContains cache(capacity); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(k, v); }
            else if (cmd == "GET") { int k; cin >> k; out.push_back(cache.get(k)); }
            else { int k; cin >> k; out.push_back(cache.contains(k)); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class LFUCacheContains {
    private int cap, minFreq;
    private Map<Integer, int[]> km = new HashMap<>();
    private Map<Integer, LinkedHashSet<Integer>> fm = new HashMap<>();
    public LFUCacheContains(int c) { this.cap = c; this.minFreq = 0; }
    private void upd(int key) {
        int f = km.get(key)[1]; fm.get(f).remove(key);
        if (fm.get(f).isEmpty() && f == minFreq) minFreq++;
        km.get(key)[1]++; fm.computeIfAbsent(f+1, k -> new LinkedHashSet<>()).add(key);
    }
    public int get(int key) { if (!km.containsKey(key)) return -1; upd(key); return km.get(key)[0]; }
    public void put(int key, int value) {
        if (cap == 0) return;
        if (km.containsKey(key)) { km.get(key)[0] = value; upd(key); }
        else {
            if (km.size() >= cap) { int ev = fm.get(minFreq).iterator().next(); fm.get(minFreq).remove(ev); km.remove(ev); }
            km.put(key, new int[]{value, 1}); fm.computeIfAbsent(1, k -> new LinkedHashSet<>()).add(key); minFreq = 1;
        }
    }
    public int contains(int key) { return km.containsKey(key) ? 1 : 0; }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt(), q = sc.nextInt();
            LFUCacheContains cache = new LFUCacheContains(capacity);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt());
                else if (cmd.equals("GET")) out.add(String.valueOf(cache.get(sc.nextInt())));
                else out.add(String.valueOf(cache.contains(sc.nextInt())));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 1005
struct Node { int key; int val; int freq; struct Node* prev; struct Node* next; };
struct List { struct Node* head; struct Node* tail; int size; } freqLists[MAXN*2+5];
struct Node* keyNodes[MAXN];
int keyUsed[MAXN];
int minFreq = 0, cacheSize = 0, maxCap = 0;
void initList(int f) {
    freqLists[f].head = malloc(sizeof(struct Node));
    freqLists[f].tail = malloc(sizeof(struct Node));
    freqLists[f].head->next = freqLists[f].tail;
    freqLists[f].tail->prev = freqLists[f].head;
    freqLists[f].size = 0;
}
void addHead(int f, struct Node* n) {
    n->next = freqLists[f].head->next; n->prev = freqLists[f].head;
    freqLists[f].head->next->prev = n; freqLists[f].head->next = n;
    freqLists[f].size++;
}
void removeNode(int f, struct Node* n) {
    n->prev->next = n->next; n->next->prev = n->prev;
    freqLists[f].size--;
}
void upd(struct Node* n) {
    int f = n->freq; removeNode(f, n);
    if (freqLists[f].size == 0 && f == minFreq) minFreq++;
    n->freq++;
    if (freqLists[n->freq].head == NULL) initList(n->freq);
    addHead(n->freq, n);
}
int get(int key) {
    if (key < 0 || key >= MAXN || !keyUsed[key]) return -1;
    upd(keyNodes[key]); return keyNodes[key]->val;
}
void put(int key, int value) {
    if (maxCap == 0 || key < 0 || key >= MAXN) return;
    if (keyUsed[key]) { keyNodes[key]->val = value; upd(keyNodes[key]); }
    else {
        if (cacheSize >= maxCap) {
            struct Node* lru = freqLists[minFreq].tail->prev;
            removeNode(minFreq, lru); keyUsed[lru->key] = 0; cacheSize--;
        }
        struct Node* n = malloc(sizeof(struct Node));
        n->key = key; n->val = value; n->freq = 1;
        keyNodes[key] = n; keyUsed[key] = 1;
        if (freqLists[1].head == NULL) initList(1);
        addHead(1, n); minFreq = 1; cacheSize++;
    }
}
int contains(int key) {
    if (key < 0 || key >= MAXN || !keyUsed[key]) return 0;
    return 1;
}
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    maxCap = capacity;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else if (strcmp(cmd, "GET") == 0) { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
        else { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = contains(k); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "lfu-m1": {
    python: `from collections import defaultdict, OrderedDict

class LFUCacheDecay:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.min_freq = 0
        self.key_map = {}   # key -> [val, freq]
        self.freq_map = defaultdict(OrderedDict)

    def _update(self, key):
        f = self.key_map[key][1]
        del self.freq_map[f][key]
        if not self.freq_map[f] and f == self.min_freq: self.min_freq += 1
        self.key_map[key][1] += 1
        self.freq_map[self.key_map[key][1]][key] = None

    def get(self, key: int) -> int:
        if key not in self.key_map: return -1
        self._update(key)
        return self.key_map[key][0]

    def put(self, key: int, value: int) -> None:
        if self.cap == 0: return
        if key in self.key_map:
            self.key_map[key][0] = value; self._update(key)
        else:
            if len(self.key_map) >= self.cap:
                ek, _ = self.freq_map[self.min_freq].popitem(last=False)
                del self.key_map[ek]
            self.key_map[key] = [value, 1]
            self.freq_map[1][key] = None; self.min_freq = 1

    def freq(self, key: int) -> int:
        return self.key_map[key][1] if key in self.key_map else -1

    def decay(self) -> None:
        new_freq_map = defaultdict(OrderedDict)
        for key in list(self.key_map.keys()):
            old_f = self.key_map[key][1]
            new_f = max(1, old_f // 2)
            self.key_map[key][1] = new_f
            new_freq_map[new_f][key] = None
        self.freq_map = new_freq_map
        self.min_freq = min(self.key_map[k][1] for k in self.key_map) if self.key_map else 0

    def contains(self, key: int) -> int:
        return 1 if key in self.key_map else 0

capacity = int(input())
q = int(input())
cache = LFUCacheDecay(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    elif line[0] == "GET": out.append(str(cache.get(int(line[1]))))
    elif line[0] == "FREQ": out.append(str(cache.freq(int(line[1]))))
    elif line[0] == "DECAY": cache.decay()
    elif line[0] == "CONTAINS": out.append(str(cache.contains(int(line[1]))))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <unordered_map>
#include <list>
#include <string>
#include <vector>
using namespace std;
class LFUCacheDecay {
    int cap, min_freq;
    unordered_map<int, pair<int,int>> km;
    unordered_map<int, list<int>> fm;
    unordered_map<int, list<int>::iterator> im;
    void upd(int key) {
        int f = km[key].second; fm[f].erase(im[key]);
        if (fm[f].empty() && f == min_freq) min_freq++;
        km[key].second++; fm[f+1].push_front(key); im[key] = fm[f+1].begin();
    }
public:
    LFUCacheDecay(int c) : cap(c), min_freq(0) {}
    int get(int key) { if (!km.count(key)) return -1; upd(key); return km[key].first; }
    void put(int key, int value) {
        if (!cap) return;
        if (km.count(key)) { km[key].first = value; upd(key); }
        else {
            if ((int)km.size() >= cap) { int ev = fm[min_freq].back(); fm[min_freq].pop_back(); im.erase(ev); km.erase(ev); }
            km[key] = {value, 1}; fm[1].push_front(key); im[key] = fm[1].begin(); min_freq = 1;
        }
    }
    int freq(int key) { return km.count(key) ? km[key].second : -1; }
    void decay() {
        fm.clear(); im.clear();
        int new_min = 1e9;
        for (auto& p : km) {
            p.second.second = max(1, p.second.second / 2);
            int nf = p.second.second;
            fm[nf].push_back(p.first);
            if (nf < new_min) new_min = nf;
        }
        for (auto& fl : fm) {
            for (auto it = fl.second.begin(); it != fl.second.end(); it++) {
                im[*it] = it;
            }
        }
        min_freq = km.empty() ? 0 : new_min;
    }
    int contains(int key) { return km.count(key) ? 1 : 0; }
};
int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LFUCacheDecay cache(capacity); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(k, v); }
            else if (cmd == "GET") { int k; cin >> k; out.push_back(cache.get(k)); }
            else if (cmd == "FREQ") { int k; cin >> k; out.push_back(cache.freq(k)); }
            else if (cmd == "DECAY") { cache.decay(); }
            else { int k; cin >> k; out.push_back(cache.contains(k)); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class LFUCacheDecay {
    private int cap, minFreq;
    private Map<Integer, int[]> km = new HashMap<>();
    private Map<Integer, LinkedHashSet<Integer>> fm = new HashMap<>();
    public LFUCacheDecay(int c) { this.cap = c; this.minFreq = 0; }
    private void upd(int key) {
        int f = km.get(key)[1]; fm.get(f).remove(key);
        if (fm.get(f).isEmpty() && f == minFreq) minFreq++;
        km.get(key)[1]++; fm.computeIfAbsent(f+1, k -> new LinkedHashSet<>()).add(key);
    }
    public int get(int key) { if (!km.containsKey(key)) return -1; upd(key); return km.get(key)[0]; }
    public void put(int key, int value) {
        if (cap == 0) return;
        if (km.containsKey(key)) { km.get(key)[0] = value; upd(key); }
        else {
            if (km.size() >= cap) { int ev = fm.get(minFreq).iterator().next(); fm.get(minFreq).remove(ev); km.remove(ev); }
            km.put(key, new int[]{value, 1}); fm.computeIfAbsent(1, k -> new LinkedHashSet<>()).add(key); minFreq = 1;
        }
    }
    public int freq(int key) { return km.containsKey(key) ? km.get(key)[1] : -1; }
    public void decay() {
        fm.clear();
        int newMin = Integer.MAX_VALUE;
        for (Map.Entry<Integer, int[]> e : km.entrySet()) {
            e.getValue()[1] = Math.max(1, e.getValue()[1] / 2);
            int nf = e.getValue()[1];
            fm.computeIfAbsent(nf, k -> new LinkedHashSet<>()).add(e.getKey());
            if (nf < newMin) newMin = nf;
        }
        minFreq = km.isEmpty() ? 0 : newMin;
    }
    public int contains(int key) { return km.containsKey(key) ? 1 : 0; }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt(), q = sc.nextInt();
            LFUCacheDecay cache = new LFUCacheDecay(capacity);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt());
                else if (cmd.equals("GET")) out.add(String.valueOf(cache.get(sc.nextInt())));
                else if (cmd.equals("FREQ")) out.add(String.valueOf(cache.freq(sc.nextInt())));
                else if (cmd.equals("DECAY")) cache.decay();
                else out.add(String.valueOf(cache.contains(sc.nextInt())));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 1005
struct Node { int key; int val; int freq; struct Node* prev; struct Node* next; };
struct List { struct Node* head; struct Node* tail; int size; } freqLists[MAXN*2+5];
struct Node* keyNodes[MAXN];
int keyUsed[MAXN];
int minFreq = 0, cacheSize = 0, maxCap = 0;
void initList(int f) {
    freqLists[f].head = malloc(sizeof(struct Node));
    freqLists[f].tail = malloc(sizeof(struct Node));
    freqLists[f].head->next = freqLists[f].tail;
    freqLists[f].tail->prev = freqLists[f].head;
    freqLists[f].size = 0;
}
void addHead(int f, struct Node* n) {
    n->next = freqLists[f].head->next; n->prev = freqLists[f].head;
    freqLists[f].head->next->prev = n; freqLists[f].head->next = n;
    freqLists[f].size++;
}
void removeNode(int f, struct Node* n) {
    n->prev->next = n->next; n->next->prev = n->prev;
    freqLists[f].size--;
}
void upd(struct Node* n) {
    int f = n->freq; removeNode(f, n);
    if (freqLists[f].size == 0 && f == minFreq) minFreq++;
    n->freq++;
    if (freqLists[n->freq].head == NULL) initList(n->freq);
    addHead(n->freq, n);
}
int get(int key) {
    if (key < 0 || key >= MAXN || !keyUsed[key]) return -1;
    upd(keyNodes[key]); return keyNodes[key]->val;
}
void put(int key, int value) {
    if (maxCap == 0 || key < 0 || key >= MAXN) return;
    if (keyUsed[key]) { keyNodes[key]->val = value; upd(keyNodes[key]); }
    else {
        if (cacheSize >= maxCap) {
            struct Node* lru = freqLists[minFreq].tail->prev;
            removeNode(minFreq, lru); keyUsed[lru->key] = 0; cacheSize--;
        }
        struct Node* n = malloc(sizeof(struct Node));
        n->key = key; n->val = value; n->freq = 1;
        keyNodes[key] = n; keyUsed[key] = 1;
        if (freqLists[1].head == NULL) initList(1);
        addHead(1, n); minFreq = 1; cacheSize++;
    }
}
int getFreq(int key) {
    if (key < 0 || key >= MAXN || !keyUsed[key]) return -1;
    return keyNodes[key]->freq;
}
void decay() {
    /* Rebuild freq lists after halving frequencies */
    for (int f = 0; f < MAXN*2+5; f++) {
        if (freqLists[f].head != NULL) {
            freqLists[f].head->next = freqLists[f].tail;
            freqLists[f].tail->prev = freqLists[f].head;
            freqLists[f].size = 0;
        }
    }
    int new_min = 1e9;
    for (int i = 0; i < MAXN; i++) {
        if (keyUsed[i]) {
            int nf = keyNodes[i]->freq / 2;
            if (nf < 1) nf = 1;
            keyNodes[i]->freq = nf;
            if (freqLists[nf].head == NULL) initList(nf);
            addHead(nf, keyNodes[i]);
            if (nf < new_min) new_min = nf;
        }
    }
    minFreq = (cacheSize > 0) ? new_min : 0;
}
int contains(int key) {
    if (key < 0 || key >= MAXN || !keyUsed[key]) return 0;
    return 1;
}
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    maxCap = capacity;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else if (strcmp(cmd, "GET") == 0) { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
        else if (strcmp(cmd, "FREQ") == 0) { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = getFreq(k); }
        else if (strcmp(cmd, "DECAY") == 0) { decay(); }
        else { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = contains(k); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "lfu-m2": {
    python: `from collections import defaultdict, OrderedDict

class LFUCacheEvictions:
    def __init__(self, capacity: int):
        self.cap = capacity; self.min_freq = 0; self.evict_count = 0
        self.key_map = {}; self.freq_map = defaultdict(OrderedDict)
    def _update(self, key):
        f = self.key_map[key][1]; del self.freq_map[f][key]
        if not self.freq_map[f] and f == self.min_freq: self.min_freq += 1
        self.key_map[key][1] += 1; self.freq_map[self.key_map[key][1]][key] = None
    def get(self, key: int) -> int:
        if key not in self.key_map: return -1
        self._update(key); return self.key_map[key][0]
    def put(self, key: int, value: int) -> None:
        if self.cap == 0: return
        if key in self.key_map:
            self.key_map[key][0] = value; self._update(key)
        else:
            if len(self.key_map) >= self.cap:
                ek, _ = self.freq_map[self.min_freq].popitem(last=False)
                del self.key_map[ek]; self.evict_count += 1
            self.key_map[key] = [value, 1]; self.freq_map[1][key] = None; self.min_freq = 1
    def evictions(self) -> int:
        return self.evict_count

capacity = int(input())
q = int(input())
cache = LFUCacheEvictions(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    elif line[0] == "GET": out.append(str(cache.get(int(line[1]))))
    else: out.append(str(cache.evictions()))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <unordered_map>
#include <list>
#include <string>
#include <vector>
using namespace std;
class LFUCacheEvictions {
    int cap, min_freq, evict_cnt;
    unordered_map<int, pair<int,int>> km;
    unordered_map<int, list<int>> fm;
    unordered_map<int, list<int>::iterator> im;
    void upd(int key) {
        int f = km[key].second; fm[f].erase(im[key]);
        if (fm[f].empty() && f == min_freq) min_freq++;
        km[key].second++; fm[f+1].push_front(key); im[key] = fm[f+1].begin();
    }
public:
    LFUCacheEvictions(int c) : cap(c), min_freq(0), evict_cnt(0) {}
    int get(int key) { if (!km.count(key)) return -1; upd(key); return km[key].first; }
    void put(int key, int value) {
        if (!cap) return;
        if (km.count(key)) { km[key].first = value; upd(key); }
        else {
            if ((int)km.size() >= cap) {
                int ev = fm[min_freq].back(); fm[min_freq].pop_back(); im.erase(ev); km.erase(ev); evict_cnt++;
            }
            km[key] = {value, 1}; fm[1].push_front(key); im[key] = fm[1].begin(); min_freq = 1;
        }
    }
    int evictions() { return evict_cnt; }
};
int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LFUCacheEvictions cache(capacity); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(k, v); }
            else if (cmd == "GET") { int k; cin >> k; out.push_back(cache.get(k)); }
            else { out.push_back(cache.evictions()); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class LFUCacheEvictions {
    private int cap, minFreq, evictCnt = 0;
    private Map<Integer, int[]> km = new HashMap<>();
    private Map<Integer, LinkedHashSet<Integer>> fm = new HashMap<>();
    public LFUCacheEvictions(int c) { this.cap = c; this.minFreq = 0; }
    private void upd(int key) {
        int f = km.get(key)[1]; fm.get(f).remove(key);
        if (fm.get(f).isEmpty() && f == minFreq) minFreq++;
        km.get(key)[1]++; fm.computeIfAbsent(f+1, k -> new LinkedHashSet<>()).add(key);
    }
    public int get(int key) { if (!km.containsKey(key)) return -1; upd(key); return km.get(key)[0]; }
    public void put(int key, int value) {
        if (cap == 0) return;
        if (km.containsKey(key)) { km.get(key)[0] = value; upd(key); }
        else {
            if (km.size() >= cap) {
                int ev = fm.get(minFreq).iterator().next(); fm.get(minFreq).remove(ev); km.remove(ev); evictCnt++;
            }
            km.put(key, new int[]{value, 1}); fm.computeIfAbsent(1, k -> new LinkedHashSet<>()).add(key); minFreq = 1;
        }
    }
    public int evictions() { return evictCnt; }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt(), q = sc.nextInt();
            LFUCacheEvictions cache = new LFUCacheEvictions(capacity);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt());
                else if (cmd.equals("GET")) out.add(String.valueOf(cache.get(sc.nextInt())));
                else out.add(String.valueOf(cache.evictions()));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 1005
struct Node { int key; int val; int freq; struct Node* prev; struct Node* next; };
struct List { struct Node* head; struct Node* tail; int size; } freqLists[MAXN*2+5];
struct Node* keyNodes[MAXN];
int keyUsed[MAXN];
int minFreq = 0, cacheSize = 0, maxCap = 0, evictCnt = 0;
void initList(int f) {
    freqLists[f].head = malloc(sizeof(struct Node));
    freqLists[f].tail = malloc(sizeof(struct Node));
    freqLists[f].head->next = freqLists[f].tail;
    freqLists[f].tail->prev = freqLists[f].head;
    freqLists[f].size = 0;
}
void addHead(int f, struct Node* n) {
    n->next = freqLists[f].head->next; n->prev = freqLists[f].head;
    freqLists[f].head->next->prev = n; freqLists[f].head->next = n;
    freqLists[f].size++;
}
void removeNode(int f, struct Node* n) {
    n->prev->next = n->next; n->next->prev = n->prev;
    freqLists[f].size--;
}
void upd(struct Node* n) {
    int f = n->freq; removeNode(f, n);
    if (freqLists[f].size == 0 && f == minFreq) minFreq++;
    n->freq++;
    if (freqLists[n->freq].head == NULL) initList(n->freq);
    addHead(n->freq, n);
}
int get(int key) {
    if (key < 0 || key >= MAXN || !keyUsed[key]) return -1;
    upd(keyNodes[key]); return keyNodes[key]->val;
}
void put(int key, int value) {
    if (maxCap == 0 || key < 0 || key >= MAXN) return;
    if (keyUsed[key]) { keyNodes[key]->val = value; upd(keyNodes[key]); }
    else {
        if (cacheSize >= maxCap) {
            struct Node* lru = freqLists[minFreq].tail->prev;
            removeNode(minFreq, lru); keyUsed[lru->key] = 0; cacheSize--; evictCnt++;
        }
        struct Node* n = malloc(sizeof(struct Node));
        n->key = key; n->val = value; n->freq = 1;
        keyNodes[key] = n; keyUsed[key] = 1;
        if (freqLists[1].head == NULL) initList(1);
        addHead(1, n); minFreq = 1; cacheSize++;
    }
}
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    maxCap = capacity;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else if (strcmp(cmd, "GET") == 0) { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
        else { out[outCount++] = evictCnt; }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "lfu-m3": {
    python: `from collections import defaultdict, OrderedDict

class LFUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.min_freq = 0
        self.key_map = {}
        self.freq_map = defaultdict(OrderedDict)

    def _update(self, key):
        f = self.key_map[key][1]
        del self.freq_map[f][key]
        if not self.freq_map[f] and f == self.min_freq: self.min_freq += 1
        self.key_map[key][1] += 1
        self.freq_map[self.key_map[key][1]][key] = None

    def get(self, key: int) -> int:
        if key not in self.key_map: return -1
        self._update(key)
        return self.key_map[key][0]

    def put(self, key: int, value: int) -> None:
        if self.cap == 0: return
        if key in self.key_map:
            self.key_map[key][0] = value; self._update(key)
        else:
            if len(self.key_map) >= self.cap:
                ek, _ = self.freq_map[self.min_freq].popitem(last=False)
                del self.key_map[ek]
            self.key_map[key] = [value, 1]
            self.freq_map[1][key] = None; self.min_freq = 1

capacity = int(input())
q = int(input())
cache = LFUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    else: out.append(str(cache.get(int(line[1]))))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <unordered_map>
#include <list>
#include <string>
#include <vector>
using namespace std;
class LFUCache {
    int cap, min_freq;
    unordered_map<int, pair<int,int>> km;
    unordered_map<int, list<int>> fm;
    unordered_map<int, list<int>::iterator> im;
    void upd(int key) {
        int f = km[key].second; fm[f].erase(im[key]);
        if (fm[f].empty() && f == min_freq) min_freq++;
        km[key].second++; fm[f+1].push_front(key); im[key] = fm[f+1].begin();
    }
public:
    LFUCache(int c) : cap(c), min_freq(0) {}
    int get(int key) { if (!km.count(key)) return -1; upd(key); return km[key].first; }
    void put(int key, int value) {
        if (!cap) return;
        if (km.count(key)) { km[key].first = value; upd(key); }
        else {
            if ((int)km.size() >= cap) { int ev = fm[min_freq].back(); fm[min_freq].pop_back(); im.erase(ev); km.erase(ev); }
            km[key] = {value, 1}; fm[1].push_front(key); im[key] = fm[1].begin(); min_freq = 1;
        }
    }

};
int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LFUCache cache(capacity); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(k, v); }
            else { int k; cin >> k; out.push_back(cache.get(k)); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class LFUCache {
    private int cap, minFreq;
    private Map<Integer, int[]> km = new HashMap<>();
    private Map<Integer, LinkedHashSet<Integer>> fm = new HashMap<>();
    public LFUCache(int c) { this.cap = c; this.minFreq = 0; }
    private void upd(int key) {
        int f = km.get(key)[1]; fm.get(f).remove(key);
        if (fm.get(f).isEmpty() && f == minFreq) minFreq++;
        km.get(key)[1]++; fm.computeIfAbsent(f+1, k -> new LinkedHashSet<>()).add(key);
    }
    public int get(int key) { if (!km.containsKey(key)) return -1; upd(key); return km.get(key)[0]; }
    public void put(int key, int value) {
        if (cap == 0) return;
        if (km.containsKey(key)) { km.get(key)[0] = value; upd(key); }
        else {
            if (km.size() >= cap) { int ev = fm.get(minFreq).iterator().next(); fm.get(minFreq).remove(ev); km.remove(ev); }
            km.put(key, new int[]{value, 1}); fm.computeIfAbsent(1, k -> new LinkedHashSet<>()).add(key); minFreq = 1;
        }
    }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt(), q = sc.nextInt();
            LFUCache cache = new LFUCache(capacity);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt());
                else out.add(String.valueOf(cache.get(sc.nextInt())));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 1005
struct Node { int key; int val; int freq; struct Node* prev; struct Node* next; };
struct List { struct Node* head; struct Node* tail; int size; } freqLists[MAXN*2+5];
struct Node* keyNodes[MAXN];
int keyUsed[MAXN];
int minFreq = 0, cacheSize = 0, maxCap = 0;
void initList(int f) {
    freqLists[f].head = malloc(sizeof(struct Node));
    freqLists[f].tail = malloc(sizeof(struct Node));
    freqLists[f].head->next = freqLists[f].tail;
    freqLists[f].tail->prev = freqLists[f].head;
    freqLists[f].size = 0;
}
void addHead(int f, struct Node* n) {
    n->next = freqLists[f].head->next; n->prev = freqLists[f].head;
    freqLists[f].head->next->prev = n; freqLists[f].head->next = n;
    freqLists[f].size++;
}
void removeNode(int f, struct Node* n) {
    n->prev->next = n->next; n->next->prev = n->prev;
    freqLists[f].size--;
}
void upd(struct Node* n) {
    int f = n->freq; removeNode(f, n);
    if (freqLists[f].size == 0 && f == minFreq) minFreq++;
    n->freq++;
    if (freqLists[n->freq].head == NULL) initList(n->freq);
    addHead(n->freq, n);
}
int get(int key) {
    if (key < 0 || key >= MAXN || !keyUsed[key]) return -1;
    upd(keyNodes[key]); return keyNodes[key]->val;
}
void put(int key, int value) {
    if (maxCap == 0 || key < 0 || key >= MAXN) return;
    if (keyUsed[key]) { keyNodes[key]->val = value; upd(keyNodes[key]); }
    else {
        if (cacheSize >= maxCap) {
            struct Node* lru = freqLists[minFreq].tail->prev;
            removeNode(minFreq, lru); keyUsed[lru->key] = 0; cacheSize--;
        }
        struct Node* n = malloc(sizeof(struct Node));
        n->key = key; n->val = value; n->freq = 1;
        keyNodes[key] = n; keyUsed[key] = 1;
        if (freqLists[1].head == NULL) initList(1);
        addHead(1, n); minFreq = 1; cacheSize++;
    }
}
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    maxCap = capacity;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "lfu-m4": {
    python: `from collections import defaultdict, OrderedDict

class LFUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.min_freq = 0
        self.key_map = {}
        self.freq_map = defaultdict(OrderedDict)

    def _update(self, key):
        f = self.key_map[key][1]
        del self.freq_map[f][key]
        if not self.freq_map[f] and f == self.min_freq: self.min_freq += 1
        self.key_map[key][1] += 1
        self.freq_map[self.key_map[key][1]][key] = None

    def get(self, key: int) -> int:
        if key not in self.key_map: return -1
        self._update(key)
        return self.key_map[key][0]

    def put(self, key: int, value: int) -> None:
        if self.cap == 0: return
        if key in self.key_map:
            self.key_map[key][0] = value; self._update(key)
        else:
            if len(self.key_map) >= self.cap:
                ek, _ = self.freq_map[self.min_freq].popitem(last=False)
                del self.key_map[ek]
            self.key_map[key] = [value, 1]
            self.freq_map[1][key] = None; self.min_freq = 1

capacity = int(input())
q = int(input())
cache = LFUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    else: out.append(str(cache.get(int(line[1]))))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <unordered_map>
#include <list>
#include <string>
#include <vector>
using namespace std;
class LFUCache {
    int cap, min_freq;
    unordered_map<int, pair<int,int>> km;
    unordered_map<int, list<int>> fm;
    unordered_map<int, list<int>::iterator> im;
    void upd(int key) {
        int f = km[key].second; fm[f].erase(im[key]);
        if (fm[f].empty() && f == min_freq) min_freq++;
        km[key].second++; fm[f+1].push_front(key); im[key] = fm[f+1].begin();
    }
public:
    LFUCache(int c) : cap(c), min_freq(0) {}
    int get(int key) { if (!km.count(key)) return -1; upd(key); return km[key].first; }
    void put(int key, int value) {
        if (!cap) return;
        if (km.count(key)) { km[key].first = value; upd(key); }
        else {
            if ((int)km.size() >= cap) { int ev = fm[min_freq].back(); fm[min_freq].pop_back(); im.erase(ev); km.erase(ev); }
            km[key] = {value, 1}; fm[1].push_front(key); im[key] = fm[1].begin(); min_freq = 1;
        }
    }

};
int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LFUCache cache(capacity); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(k, v); }
            else { int k; cin >> k; out.push_back(cache.get(k)); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class LFUCache {
    private int cap, minFreq;
    private Map<Integer, int[]> km = new HashMap<>();
    private Map<Integer, LinkedHashSet<Integer>> fm = new HashMap<>();
    public LFUCache(int c) { this.cap = c; this.minFreq = 0; }
    private void upd(int key) {
        int f = km.get(key)[1]; fm.get(f).remove(key);
        if (fm.get(f).isEmpty() && f == minFreq) minFreq++;
        km.get(key)[1]++; fm.computeIfAbsent(f+1, k -> new LinkedHashSet<>()).add(key);
    }
    public int get(int key) { if (!km.containsKey(key)) return -1; upd(key); return km.get(key)[0]; }
    public void put(int key, int value) {
        if (cap == 0) return;
        if (km.containsKey(key)) { km.get(key)[0] = value; upd(key); }
        else {
            if (km.size() >= cap) { int ev = fm.get(minFreq).iterator().next(); fm.get(minFreq).remove(ev); km.remove(ev); }
            km.put(key, new int[]{value, 1}); fm.computeIfAbsent(1, k -> new LinkedHashSet<>()).add(key); minFreq = 1;
        }
    }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt(), q = sc.nextInt();
            LFUCache cache = new LFUCache(capacity);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt());
                else out.add(String.valueOf(cache.get(sc.nextInt())));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 1005
struct Node { int key; int val; int freq; struct Node* prev; struct Node* next; };
struct List { struct Node* head; struct Node* tail; int size; } freqLists[MAXN*2+5];
struct Node* keyNodes[MAXN];
int keyUsed[MAXN];
int minFreq = 0, cacheSize = 0, maxCap = 0;
void initList(int f) {
    freqLists[f].head = malloc(sizeof(struct Node));
    freqLists[f].tail = malloc(sizeof(struct Node));
    freqLists[f].head->next = freqLists[f].tail;
    freqLists[f].tail->prev = freqLists[f].head;
    freqLists[f].size = 0;
}
void addHead(int f, struct Node* n) {
    n->next = freqLists[f].head->next; n->prev = freqLists[f].head;
    freqLists[f].head->next->prev = n; freqLists[f].head->next = n;
    freqLists[f].size++;
}
void removeNode(int f, struct Node* n) {
    n->prev->next = n->next; n->next->prev = n->prev;
    freqLists[f].size--;
}
void upd(struct Node* n) {
    int f = n->freq; removeNode(f, n);
    if (freqLists[f].size == 0 && f == minFreq) minFreq++;
    n->freq++;
    if (freqLists[n->freq].head == NULL) initList(n->freq);
    addHead(n->freq, n);
}
int get(int key) {
    if (key < 0 || key >= MAXN || !keyUsed[key]) return -1;
    upd(keyNodes[key]); return keyNodes[key]->val;
}
void put(int key, int value) {
    if (maxCap == 0 || key < 0 || key >= MAXN) return;
    if (keyUsed[key]) { keyNodes[key]->val = value; upd(keyNodes[key]); }
    else {
        if (cacheSize >= maxCap) {
            struct Node* lru = freqLists[minFreq].tail->prev;
            removeNode(minFreq, lru); keyUsed[lru->key] = 0; cacheSize--;
        }
        struct Node* n = malloc(sizeof(struct Node));
        n->key = key; n->val = value; n->freq = 1;
        keyNodes[key] = n; keyUsed[key] = 1;
        if (freqLists[1].head == NULL) initList(1);
        addHead(1, n); minFreq = 1; cacheSize++;
    }
}
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    maxCap = capacity;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "lfu-m5": {
    python: `from collections import defaultdict, OrderedDict

class LFUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.min_freq = 0
        self.key_map = {}
        self.freq_map = defaultdict(OrderedDict)

    def _update(self, key):
        f = self.key_map[key][1]
        del self.freq_map[f][key]
        if not self.freq_map[f] and f == self.min_freq: self.min_freq += 1
        self.key_map[key][1] += 1
        self.freq_map[self.key_map[key][1]][key] = None

    def get(self, key: int) -> int:
        if key not in self.key_map: return -1
        self._update(key)
        return self.key_map[key][0]

    def put(self, key: int, value: int) -> None:
        if self.cap == 0: return
        if key in self.key_map:
            self.key_map[key][0] = value; self._update(key)
        else:
            if len(self.key_map) >= self.cap:
                ek, _ = self.freq_map[self.min_freq].popitem(last=False)
                del self.key_map[ek]
            self.key_map[key] = [value, 1]
            self.freq_map[1][key] = None; self.min_freq = 1

capacity = int(input())
q = int(input())
cache = LFUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    else: out.append(str(cache.get(int(line[1]))))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <unordered_map>
#include <list>
#include <string>
#include <vector>
using namespace std;
class LFUCache {
    int cap, min_freq;
    unordered_map<int, pair<int,int>> km;
    unordered_map<int, list<int>> fm;
    unordered_map<int, list<int>::iterator> im;
    void upd(int key) {
        int f = km[key].second; fm[f].erase(im[key]);
        if (fm[f].empty() && f == min_freq) min_freq++;
        km[key].second++; fm[f+1].push_front(key); im[key] = fm[f+1].begin();
    }
public:
    LFUCache(int c) : cap(c), min_freq(0) {}
    int get(int key) { if (!km.count(key)) return -1; upd(key); return km[key].first; }
    void put(int key, int value) {
        if (!cap) return;
        if (km.count(key)) { km[key].first = value; upd(key); }
        else {
            if ((int)km.size() >= cap) { int ev = fm[min_freq].back(); fm[min_freq].pop_back(); im.erase(ev); km.erase(ev); }
            km[key] = {value, 1}; fm[1].push_front(key); im[key] = fm[1].begin(); min_freq = 1;
        }
    }

};
int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LFUCache cache(capacity); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(k, v); }
            else { int k; cin >> k; out.push_back(cache.get(k)); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class LFUCache {
    private int cap, minFreq;
    private Map<Integer, int[]> km = new HashMap<>();
    private Map<Integer, LinkedHashSet<Integer>> fm = new HashMap<>();
    public LFUCache(int c) { this.cap = c; this.minFreq = 0; }
    private void upd(int key) {
        int f = km.get(key)[1]; fm.get(f).remove(key);
        if (fm.get(f).isEmpty() && f == minFreq) minFreq++;
        km.get(key)[1]++; fm.computeIfAbsent(f+1, k -> new LinkedHashSet<>()).add(key);
    }
    public int get(int key) { if (!km.containsKey(key)) return -1; upd(key); return km.get(key)[0]; }
    public void put(int key, int value) {
        if (cap == 0) return;
        if (km.containsKey(key)) { km.get(key)[0] = value; upd(key); }
        else {
            if (km.size() >= cap) { int ev = fm.get(minFreq).iterator().next(); fm.get(minFreq).remove(ev); km.remove(ev); }
            km.put(key, new int[]{value, 1}); fm.computeIfAbsent(1, k -> new LinkedHashSet<>()).add(key); minFreq = 1;
        }
    }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt(), q = sc.nextInt();
            LFUCache cache = new LFUCache(capacity);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt());
                else out.add(String.valueOf(cache.get(sc.nextInt())));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 1005
struct Node { int key; int val; int freq; struct Node* prev; struct Node* next; };
struct List { struct Node* head; struct Node* tail; int size; } freqLists[MAXN*2+5];
struct Node* keyNodes[MAXN];
int keyUsed[MAXN];
int minFreq = 0, cacheSize = 0, maxCap = 0;
void initList(int f) {
    freqLists[f].head = malloc(sizeof(struct Node));
    freqLists[f].tail = malloc(sizeof(struct Node));
    freqLists[f].head->next = freqLists[f].tail;
    freqLists[f].tail->prev = freqLists[f].head;
    freqLists[f].size = 0;
}
void addHead(int f, struct Node* n) {
    n->next = freqLists[f].head->next; n->prev = freqLists[f].head;
    freqLists[f].head->next->prev = n; freqLists[f].head->next = n;
    freqLists[f].size++;
}
void removeNode(int f, struct Node* n) {
    n->prev->next = n->next; n->next->prev = n->prev;
    freqLists[f].size--;
}
void upd(struct Node* n) {
    int f = n->freq; removeNode(f, n);
    if (freqLists[f].size == 0 && f == minFreq) minFreq++;
    n->freq++;
    if (freqLists[n->freq].head == NULL) initList(n->freq);
    addHead(n->freq, n);
}
int get(int key) {
    if (key < 0 || key >= MAXN || !keyUsed[key]) return -1;
    upd(keyNodes[key]); return keyNodes[key]->val;
}
void put(int key, int value) {
    if (maxCap == 0 || key < 0 || key >= MAXN) return;
    if (keyUsed[key]) { keyNodes[key]->val = value; upd(keyNodes[key]); }
    else {
        if (cacheSize >= maxCap) {
            struct Node* lru = freqLists[minFreq].tail->prev;
            removeNode(minFreq, lru); keyUsed[lru->key] = 0; cacheSize--;
        }
        struct Node* n = malloc(sizeof(struct Node));
        n->key = key; n->val = value; n->freq = 1;
        keyNodes[key] = n; keyUsed[key] = 1;
        if (freqLists[1].head == NULL) initList(1);
        addHead(1, n); minFreq = 1; cacheSize++;
    }
}
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    maxCap = capacity;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "lfu-h1": {
    python: `from collections import defaultdict, OrderedDict

class LFUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.min_freq = 0
        self.key_map = {}
        self.freq_map = defaultdict(OrderedDict)

    def _update(self, key):
        f = self.key_map[key][1]
        del self.freq_map[f][key]
        if not self.freq_map[f] and f == self.min_freq: self.min_freq += 1
        self.key_map[key][1] += 1
        self.freq_map[self.key_map[key][1]][key] = None

    def get(self, key: int) -> int:
        if key not in self.key_map: return -1
        self._update(key)
        return self.key_map[key][0]

    def put(self, key: int, value: int) -> None:
        if self.cap == 0: return
        if key in self.key_map:
            self.key_map[key][0] = value; self._update(key)
        else:
            if len(self.key_map) >= self.cap:
                ek, _ = self.freq_map[self.min_freq].popitem(last=False)
                del self.key_map[ek]
            self.key_map[key] = [value, 1]
            self.freq_map[1][key] = None; self.min_freq = 1

capacity = int(input())
q = int(input())
cache = LFUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    else: out.append(str(cache.get(int(line[1]))))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <unordered_map>
#include <list>
#include <string>
#include <vector>
using namespace std;
class LFUCache {
    int cap, min_freq;
    unordered_map<int, pair<int,int>> km;
    unordered_map<int, list<int>> fm;
    unordered_map<int, list<int>::iterator> im;
    void upd(int key) {
        int f = km[key].second; fm[f].erase(im[key]);
        if (fm[f].empty() && f == min_freq) min_freq++;
        km[key].second++; fm[f+1].push_front(key); im[key] = fm[f+1].begin();
    }
public:
    LFUCache(int c) : cap(c), min_freq(0) {}
    int get(int key) { if (!km.count(key)) return -1; upd(key); return km[key].first; }
    void put(int key, int value) {
        if (!cap) return;
        if (km.count(key)) { km[key].first = value; upd(key); }
        else {
            if ((int)km.size() >= cap) { int ev = fm[min_freq].back(); fm[min_freq].pop_back(); im.erase(ev); km.erase(ev); }
            km[key] = {value, 1}; fm[1].push_front(key); im[key] = fm[1].begin(); min_freq = 1;
        }
    }

};
int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LFUCache cache(capacity); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(k, v); }
            else { int k; cin >> k; out.push_back(cache.get(k)); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class LFUCache {
    private int cap, minFreq;
    private Map<Integer, int[]> km = new HashMap<>();
    private Map<Integer, LinkedHashSet<Integer>> fm = new HashMap<>();
    public LFUCache(int c) { this.cap = c; this.minFreq = 0; }
    private void upd(int key) {
        int f = km.get(key)[1]; fm.get(f).remove(key);
        if (fm.get(f).isEmpty() && f == minFreq) minFreq++;
        km.get(key)[1]++; fm.computeIfAbsent(f+1, k -> new LinkedHashSet<>()).add(key);
    }
    public int get(int key) { if (!km.containsKey(key)) return -1; upd(key); return km.get(key)[0]; }
    public void put(int key, int value) {
        if (cap == 0) return;
        if (km.containsKey(key)) { km.get(key)[0] = value; upd(key); }
        else {
            if (km.size() >= cap) { int ev = fm.get(minFreq).iterator().next(); fm.get(minFreq).remove(ev); km.remove(ev); }
            km.put(key, new int[]{value, 1}); fm.computeIfAbsent(1, k -> new LinkedHashSet<>()).add(key); minFreq = 1;
        }
    }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt(), q = sc.nextInt();
            LFUCache cache = new LFUCache(capacity);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt());
                else out.add(String.valueOf(cache.get(sc.nextInt())));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 1005
struct Node { int key; int val; int freq; struct Node* prev; struct Node* next; };
struct List { struct Node* head; struct Node* tail; int size; } freqLists[MAXN*2+5];
struct Node* keyNodes[MAXN];
int keyUsed[MAXN];
int minFreq = 0, cacheSize = 0, maxCap = 0;
void initList(int f) {
    freqLists[f].head = malloc(sizeof(struct Node));
    freqLists[f].tail = malloc(sizeof(struct Node));
    freqLists[f].head->next = freqLists[f].tail;
    freqLists[f].tail->prev = freqLists[f].head;
    freqLists[f].size = 0;
}
void addHead(int f, struct Node* n) {
    n->next = freqLists[f].head->next; n->prev = freqLists[f].head;
    freqLists[f].head->next->prev = n; freqLists[f].head->next = n;
    freqLists[f].size++;
}
void removeNode(int f, struct Node* n) {
    n->prev->next = n->next; n->next->prev = n->prev;
    freqLists[f].size--;
}
void upd(struct Node* n) {
    int f = n->freq; removeNode(f, n);
    if (freqLists[f].size == 0 && f == minFreq) minFreq++;
    n->freq++;
    if (freqLists[n->freq].head == NULL) initList(n->freq);
    addHead(n->freq, n);
}
int get(int key) {
    if (key < 0 || key >= MAXN || !keyUsed[key]) return -1;
    upd(keyNodes[key]); return keyNodes[key]->val;
}
void put(int key, int value) {
    if (maxCap == 0 || key < 0 || key >= MAXN) return;
    if (keyUsed[key]) { keyNodes[key]->val = value; upd(keyNodes[key]); }
    else {
        if (cacheSize >= maxCap) {
            struct Node* lru = freqLists[minFreq].tail->prev;
            removeNode(minFreq, lru); keyUsed[lru->key] = 0; cacheSize--;
        }
        struct Node* n = malloc(sizeof(struct Node));
        n->key = key; n->val = value; n->freq = 1;
        keyNodes[key] = n; keyUsed[key] = 1;
        if (freqLists[1].head == NULL) initList(1);
        addHead(1, n); minFreq = 1; cacheSize++;
    }
}
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    maxCap = capacity;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "lfu-h2": {
    python: `from collections import defaultdict, OrderedDict

class LFUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.min_freq = 0
        self.key_map = {}
        self.freq_map = defaultdict(OrderedDict)

    def _update(self, key):
        f = self.key_map[key][1]
        del self.freq_map[f][key]
        if not self.freq_map[f] and f == self.min_freq: self.min_freq += 1
        self.key_map[key][1] += 1
        self.freq_map[self.key_map[key][1]][key] = None

    def get(self, key: int) -> int:
        if key not in self.key_map: return -1
        self._update(key)
        return self.key_map[key][0]

    def put(self, key: int, value: int) -> None:
        if self.cap == 0: return
        if key in self.key_map:
            self.key_map[key][0] = value; self._update(key)
        else:
            if len(self.key_map) >= self.cap:
                ek, _ = self.freq_map[self.min_freq].popitem(last=False)
                del self.key_map[ek]
            self.key_map[key] = [value, 1]
            self.freq_map[1][key] = None; self.min_freq = 1

capacity = int(input())
q = int(input())
cache = LFUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    else: out.append(str(cache.get(int(line[1]))))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <unordered_map>
#include <list>
#include <string>
#include <vector>
using namespace std;
class LFUCache {
    int cap, min_freq;
    unordered_map<int, pair<int,int>> km;
    unordered_map<int, list<int>> fm;
    unordered_map<int, list<int>::iterator> im;
    void upd(int key) {
        int f = km[key].second; fm[f].erase(im[key]);
        if (fm[f].empty() && f == min_freq) min_freq++;
        km[key].second++; fm[f+1].push_front(key); im[key] = fm[f+1].begin();
    }
public:
    LFUCache(int c) : cap(c), min_freq(0) {}
    int get(int key) { if (!km.count(key)) return -1; upd(key); return km[key].first; }
    void put(int key, int value) {
        if (!cap) return;
        if (km.count(key)) { km[key].first = value; upd(key); }
        else {
            if ((int)km.size() >= cap) { int ev = fm[min_freq].back(); fm[min_freq].pop_back(); im.erase(ev); km.erase(ev); }
            km[key] = {value, 1}; fm[1].push_front(key); im[key] = fm[1].begin(); min_freq = 1;
        }
    }

};
int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LFUCache cache(capacity); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(k, v); }
            else { int k; cin >> k; out.push_back(cache.get(k)); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class LFUCache {
    private int cap, minFreq;
    private Map<Integer, int[]> km = new HashMap<>();
    private Map<Integer, LinkedHashSet<Integer>> fm = new HashMap<>();
    public LFUCache(int c) { this.cap = c; this.minFreq = 0; }
    private void upd(int key) {
        int f = km.get(key)[1]; fm.get(f).remove(key);
        if (fm.get(f).isEmpty() && f == minFreq) minFreq++;
        km.get(key)[1]++; fm.computeIfAbsent(f+1, k -> new LinkedHashSet<>()).add(key);
    }
    public int get(int key) { if (!km.containsKey(key)) return -1; upd(key); return km.get(key)[0]; }
    public void put(int key, int value) {
        if (cap == 0) return;
        if (km.containsKey(key)) { km.get(key)[0] = value; upd(key); }
        else {
            if (km.size() >= cap) { int ev = fm.get(minFreq).iterator().next(); fm.get(minFreq).remove(ev); km.remove(ev); }
            km.put(key, new int[]{value, 1}); fm.computeIfAbsent(1, k -> new LinkedHashSet<>()).add(key); minFreq = 1;
        }
    }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt(), q = sc.nextInt();
            LFUCache cache = new LFUCache(capacity);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt());
                else out.add(String.valueOf(cache.get(sc.nextInt())));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 1005
struct Node { int key; int val; int freq; struct Node* prev; struct Node* next; };
struct List { struct Node* head; struct Node* tail; int size; } freqLists[MAXN*2+5];
struct Node* keyNodes[MAXN];
int keyUsed[MAXN];
int minFreq = 0, cacheSize = 0, maxCap = 0;
void initList(int f) {
    freqLists[f].head = malloc(sizeof(struct Node));
    freqLists[f].tail = malloc(sizeof(struct Node));
    freqLists[f].head->next = freqLists[f].tail;
    freqLists[f].tail->prev = freqLists[f].head;
    freqLists[f].size = 0;
}
void addHead(int f, struct Node* n) {
    n->next = freqLists[f].head->next; n->prev = freqLists[f].head;
    freqLists[f].head->next->prev = n; freqLists[f].head->next = n;
    freqLists[f].size++;
}
void removeNode(int f, struct Node* n) {
    n->prev->next = n->next; n->next->prev = n->prev;
    freqLists[f].size--;
}
void upd(struct Node* n) {
    int f = n->freq; removeNode(f, n);
    if (freqLists[f].size == 0 && f == minFreq) minFreq++;
    n->freq++;
    if (freqLists[n->freq].head == NULL) initList(n->freq);
    addHead(n->freq, n);
}
int get(int key) {
    if (key < 0 || key >= MAXN || !keyUsed[key]) return -1;
    upd(keyNodes[key]); return keyNodes[key]->val;
}
void put(int key, int value) {
    if (maxCap == 0 || key < 0 || key >= MAXN) return;
    if (keyUsed[key]) { keyNodes[key]->val = value; upd(keyNodes[key]); }
    else {
        if (cacheSize >= maxCap) {
            struct Node* lru = freqLists[minFreq].tail->prev;
            removeNode(minFreq, lru); keyUsed[lru->key] = 0; cacheSize--;
        }
        struct Node* n = malloc(sizeof(struct Node));
        n->key = key; n->val = value; n->freq = 1;
        keyNodes[key] = n; keyUsed[key] = 1;
        if (freqLists[1].head == NULL) initList(1);
        addHead(1, n); minFreq = 1; cacheSize++;
    }
}
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    maxCap = capacity;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "lfu-h3": {
    python: `from collections import defaultdict, OrderedDict

class LFUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.min_freq = 0
        self.key_map = {}
        self.freq_map = defaultdict(OrderedDict)

    def _update(self, key):
        f = self.key_map[key][1]
        del self.freq_map[f][key]
        if not self.freq_map[f] and f == self.min_freq: self.min_freq += 1
        self.key_map[key][1] += 1
        self.freq_map[self.key_map[key][1]][key] = None

    def get(self, key: int) -> int:
        if key not in self.key_map: return -1
        self._update(key)
        return self.key_map[key][0]

    def put(self, key: int, value: int) -> None:
        if self.cap == 0: return
        if key in self.key_map:
            self.key_map[key][0] = value; self._update(key)
        else:
            if len(self.key_map) >= self.cap:
                ek, _ = self.freq_map[self.min_freq].popitem(last=False)
                del self.key_map[ek]
            self.key_map[key] = [value, 1]
            self.freq_map[1][key] = None; self.min_freq = 1

capacity = int(input())
q = int(input())
cache = LFUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    else: out.append(str(cache.get(int(line[1]))))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <unordered_map>
#include <list>
#include <string>
#include <vector>
using namespace std;
class LFUCache {
    int cap, min_freq;
    unordered_map<int, pair<int,int>> km;
    unordered_map<int, list<int>> fm;
    unordered_map<int, list<int>::iterator> im;
    void upd(int key) {
        int f = km[key].second; fm[f].erase(im[key]);
        if (fm[f].empty() && f == min_freq) min_freq++;
        km[key].second++; fm[f+1].push_front(key); im[key] = fm[f+1].begin();
    }
public:
    LFUCache(int c) : cap(c), min_freq(0) {}
    int get(int key) { if (!km.count(key)) return -1; upd(key); return km[key].first; }
    void put(int key, int value) {
        if (!cap) return;
        if (km.count(key)) { km[key].first = value; upd(key); }
        else {
            if ((int)km.size() >= cap) { int ev = fm[min_freq].back(); fm[min_freq].pop_back(); im.erase(ev); km.erase(ev); }
            km[key] = {value, 1}; fm[1].push_front(key); im[key] = fm[1].begin(); min_freq = 1;
        }
    }

};
int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LFUCache cache(capacity); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(k, v); }
            else { int k; cin >> k; out.push_back(cache.get(k)); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class LFUCache {
    private int cap, minFreq;
    private Map<Integer, int[]> km = new HashMap<>();
    private Map<Integer, LinkedHashSet<Integer>> fm = new HashMap<>();
    public LFUCache(int c) { this.cap = c; this.minFreq = 0; }
    private void upd(int key) {
        int f = km.get(key)[1]; fm.get(f).remove(key);
        if (fm.get(f).isEmpty() && f == minFreq) minFreq++;
        km.get(key)[1]++; fm.computeIfAbsent(f+1, k -> new LinkedHashSet<>()).add(key);
    }
    public int get(int key) { if (!km.containsKey(key)) return -1; upd(key); return km.get(key)[0]; }
    public void put(int key, int value) {
        if (cap == 0) return;
        if (km.containsKey(key)) { km.get(key)[0] = value; upd(key); }
        else {
            if (km.size() >= cap) { int ev = fm.get(minFreq).iterator().next(); fm.get(minFreq).remove(ev); km.remove(ev); }
            km.put(key, new int[]{value, 1}); fm.computeIfAbsent(1, k -> new LinkedHashSet<>()).add(key); minFreq = 1;
        }
    }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt(), q = sc.nextInt();
            LFUCache cache = new LFUCache(capacity);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt());
                else out.add(String.valueOf(cache.get(sc.nextInt())));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 1005
struct Node { int key; int val; int freq; struct Node* prev; struct Node* next; };
struct List { struct Node* head; struct Node* tail; int size; } freqLists[MAXN*2+5];
struct Node* keyNodes[MAXN];
int keyUsed[MAXN];
int minFreq = 0, cacheSize = 0, maxCap = 0;
void initList(int f) {
    freqLists[f].head = malloc(sizeof(struct Node));
    freqLists[f].tail = malloc(sizeof(struct Node));
    freqLists[f].head->next = freqLists[f].tail;
    freqLists[f].tail->prev = freqLists[f].head;
    freqLists[f].size = 0;
}
void addHead(int f, struct Node* n) {
    n->next = freqLists[f].head->next; n->prev = freqLists[f].head;
    freqLists[f].head->next->prev = n; freqLists[f].head->next = n;
    freqLists[f].size++;
}
void removeNode(int f, struct Node* n) {
    n->prev->next = n->next; n->next->prev = n->prev;
    freqLists[f].size--;
}
void upd(struct Node* n) {
    int f = n->freq; removeNode(f, n);
    if (freqLists[f].size == 0 && f == minFreq) minFreq++;
    n->freq++;
    if (freqLists[n->freq].head == NULL) initList(n->freq);
    addHead(n->freq, n);
}
int get(int key) {
    if (key < 0 || key >= MAXN || !keyUsed[key]) return -1;
    upd(keyNodes[key]); return keyNodes[key]->val;
}
void put(int key, int value) {
    if (maxCap == 0 || key < 0 || key >= MAXN) return;
    if (keyUsed[key]) { keyNodes[key]->val = value; upd(keyNodes[key]); }
    else {
        if (cacheSize >= maxCap) {
            struct Node* lru = freqLists[minFreq].tail->prev;
            removeNode(minFreq, lru); keyUsed[lru->key] = 0; cacheSize--;
        }
        struct Node* n = malloc(sizeof(struct Node));
        n->key = key; n->val = value; n->freq = 1;
        keyNodes[key] = n; keyUsed[key] = 1;
        if (freqLists[1].head == NULL) initList(1);
        addHead(1, n); minFreq = 1; cacheSize++;
    }
}
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    maxCap = capacity;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "lfu-h4": {
    python: `from collections import defaultdict, OrderedDict

class LFUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.min_freq = 0
        self.key_map = {}
        self.freq_map = defaultdict(OrderedDict)

    def _update(self, key):
        f = self.key_map[key][1]
        del self.freq_map[f][key]
        if not self.freq_map[f] and f == self.min_freq: self.min_freq += 1
        self.key_map[key][1] += 1
        self.freq_map[self.key_map[key][1]][key] = None

    def get(self, key: int) -> int:
        if key not in self.key_map: return -1
        self._update(key)
        return self.key_map[key][0]

    def put(self, key: int, value: int) -> None:
        if self.cap == 0: return
        if key in self.key_map:
            self.key_map[key][0] = value; self._update(key)
        else:
            if len(self.key_map) >= self.cap:
                ek, _ = self.freq_map[self.min_freq].popitem(last=False)
                del self.key_map[ek]
            self.key_map[key] = [value, 1]
            self.freq_map[1][key] = None; self.min_freq = 1

capacity = int(input())
q = int(input())
cache = LFUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    else: out.append(str(cache.get(int(line[1]))))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <unordered_map>
#include <list>
#include <string>
#include <vector>
using namespace std;
class LFUCache {
    int cap, min_freq;
    unordered_map<int, pair<int,int>> km;
    unordered_map<int, list<int>> fm;
    unordered_map<int, list<int>::iterator> im;
    void upd(int key) {
        int f = km[key].second; fm[f].erase(im[key]);
        if (fm[f].empty() && f == min_freq) min_freq++;
        km[key].second++; fm[f+1].push_front(key); im[key] = fm[f+1].begin();
    }
public:
    LFUCache(int c) : cap(c), min_freq(0) {}
    int get(int key) { if (!km.count(key)) return -1; upd(key); return km[key].first; }
    void put(int key, int value) {
        if (!cap) return;
        if (km.count(key)) { km[key].first = value; upd(key); }
        else {
            if ((int)km.size() >= cap) { int ev = fm[min_freq].back(); fm[min_freq].pop_back(); im.erase(ev); km.erase(ev); }
            km[key] = {value, 1}; fm[1].push_front(key); im[key] = fm[1].begin(); min_freq = 1;
        }
    }

};
int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LFUCache cache(capacity); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(k, v); }
            else { int k; cin >> k; out.push_back(cache.get(k)); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class LFUCache {
    private int cap, minFreq;
    private Map<Integer, int[]> km = new HashMap<>();
    private Map<Integer, LinkedHashSet<Integer>> fm = new HashMap<>();
    public LFUCache(int c) { this.cap = c; this.minFreq = 0; }
    private void upd(int key) {
        int f = km.get(key)[1]; fm.get(f).remove(key);
        if (fm.get(f).isEmpty() && f == minFreq) minFreq++;
        km.get(key)[1]++; fm.computeIfAbsent(f+1, k -> new LinkedHashSet<>()).add(key);
    }
    public int get(int key) { if (!km.containsKey(key)) return -1; upd(key); return km.get(key)[0]; }
    public void put(int key, int value) {
        if (cap == 0) return;
        if (km.containsKey(key)) { km.get(key)[0] = value; upd(key); }
        else {
            if (km.size() >= cap) { int ev = fm.get(minFreq).iterator().next(); fm.get(minFreq).remove(ev); km.remove(ev); }
            km.put(key, new int[]{value, 1}); fm.computeIfAbsent(1, k -> new LinkedHashSet<>()).add(key); minFreq = 1;
        }
    }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt(), q = sc.nextInt();
            LFUCache cache = new LFUCache(capacity);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt());
                else out.add(String.valueOf(cache.get(sc.nextInt())));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 1005
struct Node { int key; int val; int freq; struct Node* prev; struct Node* next; };
struct List { struct Node* head; struct Node* tail; int size; } freqLists[MAXN*2+5];
struct Node* keyNodes[MAXN];
int keyUsed[MAXN];
int minFreq = 0, cacheSize = 0, maxCap = 0;
void initList(int f) {
    freqLists[f].head = malloc(sizeof(struct Node));
    freqLists[f].tail = malloc(sizeof(struct Node));
    freqLists[f].head->next = freqLists[f].tail;
    freqLists[f].tail->prev = freqLists[f].head;
    freqLists[f].size = 0;
}
void addHead(int f, struct Node* n) {
    n->next = freqLists[f].head->next; n->prev = freqLists[f].head;
    freqLists[f].head->next->prev = n; freqLists[f].head->next = n;
    freqLists[f].size++;
}
void removeNode(int f, struct Node* n) {
    n->prev->next = n->next; n->next->prev = n->prev;
    freqLists[f].size--;
}
void upd(struct Node* n) {
    int f = n->freq; removeNode(f, n);
    if (freqLists[f].size == 0 && f == minFreq) minFreq++;
    n->freq++;
    if (freqLists[n->freq].head == NULL) initList(n->freq);
    addHead(n->freq, n);
}
int get(int key) {
    if (key < 0 || key >= MAXN || !keyUsed[key]) return -1;
    upd(keyNodes[key]); return keyNodes[key]->val;
}
void put(int key, int value) {
    if (maxCap == 0 || key < 0 || key >= MAXN) return;
    if (keyUsed[key]) { keyNodes[key]->val = value; upd(keyNodes[key]); }
    else {
        if (cacheSize >= maxCap) {
            struct Node* lru = freqLists[minFreq].tail->prev;
            removeNode(minFreq, lru); keyUsed[lru->key] = 0; cacheSize--;
        }
        struct Node* n = malloc(sizeof(struct Node));
        n->key = key; n->val = value; n->freq = 1;
        keyNodes[key] = n; keyUsed[key] = 1;
        if (freqLists[1].head == NULL) initList(1);
        addHead(1, n); minFreq = 1; cacheSize++;
    }
}
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    maxCap = capacity;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "lfu-h5": {
    python: `from collections import defaultdict, OrderedDict

class LFUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.min_freq = 0
        self.key_map = {}
        self.freq_map = defaultdict(OrderedDict)

    def _update(self, key):
        f = self.key_map[key][1]
        del self.freq_map[f][key]
        if not self.freq_map[f] and f == self.min_freq: self.min_freq += 1
        self.key_map[key][1] += 1
        self.freq_map[self.key_map[key][1]][key] = None

    def get(self, key: int) -> int:
        if key not in self.key_map: return -1
        self._update(key)
        return self.key_map[key][0]

    def put(self, key: int, value: int) -> None:
        if self.cap == 0: return
        if key in self.key_map:
            self.key_map[key][0] = value; self._update(key)
        else:
            if len(self.key_map) >= self.cap:
                ek, _ = self.freq_map[self.min_freq].popitem(last=False)
                del self.key_map[ek]
            self.key_map[key] = [value, 1]
            self.freq_map[1][key] = None; self.min_freq = 1

capacity = int(input())
q = int(input())
cache = LFUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    else: out.append(str(cache.get(int(line[1]))))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <unordered_map>
#include <list>
#include <string>
#include <vector>
using namespace std;
class LFUCache {
    int cap, min_freq;
    unordered_map<int, pair<int,int>> km;
    unordered_map<int, list<int>> fm;
    unordered_map<int, list<int>::iterator> im;
    void upd(int key) {
        int f = km[key].second; fm[f].erase(im[key]);
        if (fm[f].empty() && f == min_freq) min_freq++;
        km[key].second++; fm[f+1].push_front(key); im[key] = fm[f+1].begin();
    }
public:
    LFUCache(int c) : cap(c), min_freq(0) {}
    int get(int key) { if (!km.count(key)) return -1; upd(key); return km[key].first; }
    void put(int key, int value) {
        if (!cap) return;
        if (km.count(key)) { km[key].first = value; upd(key); }
        else {
            if ((int)km.size() >= cap) { int ev = fm[min_freq].back(); fm[min_freq].pop_back(); im.erase(ev); km.erase(ev); }
            km[key] = {value, 1}; fm[1].push_front(key); im[key] = fm[1].begin(); min_freq = 1;
        }
    }

};
int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LFUCache cache(capacity); vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") { int k, v; cin >> k >> v; cache.put(k, v); }
            else { int k; cin >> k; out.push_back(cache.get(k)); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class LFUCache {
    private int cap, minFreq;
    private Map<Integer, int[]> km = new HashMap<>();
    private Map<Integer, LinkedHashSet<Integer>> fm = new HashMap<>();
    public LFUCache(int c) { this.cap = c; this.minFreq = 0; }
    private void upd(int key) {
        int f = km.get(key)[1]; fm.get(f).remove(key);
        if (fm.get(f).isEmpty() && f == minFreq) minFreq++;
        km.get(key)[1]++; fm.computeIfAbsent(f+1, k -> new LinkedHashSet<>()).add(key);
    }
    public int get(int key) { if (!km.containsKey(key)) return -1; upd(key); return km.get(key)[0]; }
    public void put(int key, int value) {
        if (cap == 0) return;
        if (km.containsKey(key)) { km.get(key)[0] = value; upd(key); }
        else {
            if (km.size() >= cap) { int ev = fm.get(minFreq).iterator().next(); fm.get(minFreq).remove(ev); km.remove(ev); }
            km.put(key, new int[]{value, 1}); fm.computeIfAbsent(1, k -> new LinkedHashSet<>()).add(key); minFreq = 1;
        }
    }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt(), q = sc.nextInt();
            LFUCache cache = new LFUCache(capacity);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) cache.put(sc.nextInt(), sc.nextInt());
                else out.add(String.valueOf(cache.get(sc.nextInt())));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 1005
struct Node { int key; int val; int freq; struct Node* prev; struct Node* next; };
struct List { struct Node* head; struct Node* tail; int size; } freqLists[MAXN*2+5];
struct Node* keyNodes[MAXN];
int keyUsed[MAXN];
int minFreq = 0, cacheSize = 0, maxCap = 0;
void initList(int f) {
    freqLists[f].head = malloc(sizeof(struct Node));
    freqLists[f].tail = malloc(sizeof(struct Node));
    freqLists[f].head->next = freqLists[f].tail;
    freqLists[f].tail->prev = freqLists[f].head;
    freqLists[f].size = 0;
}
void addHead(int f, struct Node* n) {
    n->next = freqLists[f].head->next; n->prev = freqLists[f].head;
    freqLists[f].head->next->prev = n; freqLists[f].head->next = n;
    freqLists[f].size++;
}
void removeNode(int f, struct Node* n) {
    n->prev->next = n->next; n->next->prev = n->prev;
    freqLists[f].size--;
}
void upd(struct Node* n) {
    int f = n->freq; removeNode(f, n);
    if (freqLists[f].size == 0 && f == minFreq) minFreq++;
    n->freq++;
    if (freqLists[n->freq].head == NULL) initList(n->freq);
    addHead(n->freq, n);
}
int get(int key) {
    if (key < 0 || key >= MAXN || !keyUsed[key]) return -1;
    upd(keyNodes[key]); return keyNodes[key]->val;
}
void put(int key, int value) {
    if (maxCap == 0 || key < 0 || key >= MAXN) return;
    if (keyUsed[key]) { keyNodes[key]->val = value; upd(keyNodes[key]); }
    else {
        if (cacheSize >= maxCap) {
            struct Node* lru = freqLists[minFreq].tail->prev;
            removeNode(minFreq, lru); keyUsed[lru->key] = 0; cacheSize--;
        }
        struct Node* n = malloc(sizeof(struct Node));
        n->key = key; n->val = value; n->freq = 1;
        keyNodes[key] = n; keyUsed[key] = 1;
        if (freqLists[1].head == NULL) initList(1);
        addHead(1, n); minFreq = 1; cacheSize++;
    }
}
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    maxCap = capacity;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  }
};
