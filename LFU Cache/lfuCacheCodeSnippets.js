export const lfuCacheCodeSnippets = {
  python: `class Node:
    def __init__(self, key=0, val=0):
        self.key, self.val = key, val
        self.freq = 1
        self.prev, self.next = None, None

class DoublyLinkedList:
    def __init__(self):
        self.head = Node()
        self.tail = Node()
        self.head.next, self.tail.prev = self.tail, self.head
        self.size = 0

    def add_to_head(self, node):
        node.next, node.prev = self.head.next, self.head
        self.head.next.prev, self.head.next = node, node
        self.size += 1

    def remove(self, node):
        node.prev.next, node.next.prev = node.next, node.prev
        self.size -= 1

    def remove_tail(self):
        if self.size == 0:
            return None
        lru = self.tail.prev
        self.remove(lru)
        return lru

class LFUCache:
    def __init__(self, capacity: int):
        self.cap = capacity
        self.min_freq = 0
        self.key_map = {}       # key -> node
        self.freq_map = {}      # freq -> DoublyLinkedList

    def _update(self, node):
        freq = node.freq
        self.freq_map[freq].remove(node)
        if self.min_freq == freq and self.freq_map[freq].size == 0:
            self.min_freq += 1
        node.freq += 1
        if node.freq not in self.freq_map:
            self.freq_map[node.freq] = DoublyLinkedList()
        self.freq_map[node.freq].add_to_head(node)

    def get(self, key: int) -> int:
        if key not in self.key_map:
            return -1
        node = self.key_map[key]
        self._update(node)
        return node.val

    def put(self, key: int, value: int) -> None:
        if self.cap == 0:
            return
        if key in self.key_map:
            node = self.key_map[key]
            node.val = value
            self._update(node)
        else:
            if len(self.key_map) >= self.cap:
                lru_list = self.freq_map[self.min_freq]
                evicted = lru_list.remove_tail()
                if evicted:
                    del self.key_map[evicted.key]
            node = Node(key, value)
            self.key_map[key] = node
            if 1 not in self.freq_map:
                self.freq_map[1] = DoublyLinkedList()
            self.freq_map[1].add_to_head(node)
            self.min_freq = 1`,

  cpp: `#include <iostream>
#include <unordered_map>
#include <list>
#include <string>
using namespace std;

class LFUCache {
    int cap, min_freq;
    unordered_map<int, pair<int,int>> key_map; // key -> {val, freq}
    unordered_map<int, list<int>> freq_map;     // freq -> list of keys (LRU order)
    unordered_map<int, list<int>::iterator> iter_map; // key -> iterator in freq_map list

    void update(int key) {
        int freq = key_map[key].second;
        freq_map[freq].erase(iter_map[key]);
        if (freq_map[freq].empty() && freq == min_freq) min_freq++;
        key_map[key].second++;
        freq_map[freq + 1].push_front(key);
        iter_map[key] = freq_map[freq + 1].begin();
    }
public:
    LFUCache(int capacity) : cap(capacity), min_freq(0) {}
    int get(int key) {
        if (!key_map.count(key)) return -1;
        update(key);
        return key_map[key].first;
    }
    void put(int key, int value) {
        if (cap == 0) return;
        if (key_map.count(key)) {
            key_map[key].first = value;
            update(key);
        } else {
            if (key_map.size() >= cap) {
                int evict = freq_map[min_freq].back();
                freq_map[min_freq].pop_back();
                iter_map.erase(evict);
                key_map.erase(evict);
            }
            key_map[key] = {value, 1};
            freq_map[1].push_front(key);
            iter_map[key] = freq_map[1].begin();
            min_freq = 1;
        }
    }
};`,

  java: `import java.util.*;

class LFUCache {
    private int cap, minFreq;
    private Map<Integer, int[]> keyMap;    // key -> [val, freq]
    private Map<Integer, LinkedHashSet<Integer>> freqMap; // freq -> set of keys

    public LFUCache(int capacity) {
        this.cap = capacity;
        this.minFreq = 0;
        this.keyMap = new HashMap<>();
        this.freqMap = new HashMap<>();
    }

    private void update(int key) {
        int freq = keyMap.get(key)[1];
        freqMap.get(freq).remove(key);
        if (freqMap.get(freq).isEmpty() && freq == minFreq) minFreq++;
        keyMap.get(key)[1]++;
        freqMap.computeIfAbsent(freq + 1, k -> new LinkedHashSet<>()).add(key);
    }

    public int get(int key) {
        if (!keyMap.containsKey(key)) return -1;
        update(key);
        return keyMap.get(key)[0];
    }

    public void put(int key, int value) {
        if (cap == 0) return;
        if (keyMap.containsKey(key)) {
            keyMap.get(key)[0] = value;
            update(key);
        } else {
            if (keyMap.size() >= cap) {
                LinkedHashSet<Integer> minList = freqMap.get(minFreq);
                int evict = minList.iterator().next();
                minList.remove(evict);
                keyMap.remove(evict);
            }
            keyMap.put(key, new int[]{value, 1});
            freqMap.computeIfAbsent(1, k -> new LinkedHashSet<>()).add(key);
            minFreq = 1;
        }
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/* LFU Cache in C using doubly linked list per frequency bucket */
struct Node { int key; int val; int freq; struct Node* prev; struct Node* next; };
struct FreqList { struct Node* head; struct Node* tail; int size; };
struct FreqList freqMap[3005];
struct Node* keyNodes[100005];
int minFreq = 0, cacheSize = 0, maxCap = 0;

void initList(struct FreqList* fl) {
    fl->head = malloc(sizeof(struct Node));
    fl->tail = malloc(sizeof(struct Node));
    fl->head->next = fl->tail; fl->tail->prev = fl->head;
    fl->size = 0;
}
void addToHead(struct FreqList* fl, struct Node* n) {
    n->next = fl->head->next; n->prev = fl->head;
    fl->head->next->prev = n; fl->head->next = n;
    fl->size++;
}
void removeNode(struct FreqList* fl, struct Node* n) {
    n->prev->next = n->next; n->next->prev = n->prev;
    fl->size--;
}`
};
