export const lfuCacheProblems = [
  {
    id: "lfu-e1",
    title: "LFU Cache Basic",
    difficulty: "Easy",
    description: "Implement a Least Frequently Used (LFU) Cache supporting get(key) and put(key, value) in O(1) time. On eviction, remove the least frequently used item. If there is a tie in frequency, remove the least recently used item among those with minimum frequency.",
    constraints: ["1 <= capacity <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "Capacity = 2, Operations = PUT 1 10, PUT 2 20, GET 1, PUT 3 30, GET 2, GET 1, GET 3", "output": "-1 10 30", "explanation": "After GET 1 (freq[1]=2, freq[2]=1), PUT 3 evicts key 2 (LFU). GET 2 returns -1."}],
    testCases: [{"input": "2\n7\nPUT 1 10\nPUT 2 20\nGET 1\nPUT 3 30\nGET 2\nGET 1\nGET 3", "expectedOutput": "10 -1 10 30", "hidden": false}, {"input": "1\n4\nPUT 1 100\nGET 1\nPUT 2 200\nGET 1", "expectedOutput": "100 -1", "hidden": false}],
    starterCode: {
      python: `class LFUCache:
    def __init__(self, capacity: int):
        pass

    def get(self, key: int) -> int:
        return -1

    def put(self, key: int, value: int) -> None:
        pass

# I/O boilerplate
capacity = int(input())
q = int(input())
cache = LFUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    elif line[0] == "GET": out.append(str(cache.get(int(line[1]))))
print(" ".join(out))`,
      cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;
class LFUCache {
public:
    LFUCache(int capacity) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
};
int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LFUCache cache(capacity);
        vector<int> out;
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
    public LFUCache(int capacity) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
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
void put(int key, int value) {}
int get(int key) { return -1; }
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
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
  },
  {
    id: "lfu-e2",
    title: "LFU Cache - Frequency Query",
    difficulty: "Easy",
    description: "Implement an LFU Cache that also supports a FREQ command. FREQ key returns the current access frequency of the given key, or -1 if the key is not in the cache.",
    constraints: ["1 <= capacity <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "Capacity = 2, Operations = PUT 1 10, GET 1, GET 1, FREQ 1, PUT 2 20, FREQ 2", "output": "10 2 1", "explanation": "Key 1 accessed 3 times total (PUT+GET+GET), freq=3. FREQ 1 returns 3. Key 2 accessed once (PUT), FREQ 2 returns 1."}],
    testCases: [{"input": "2\n6\nPUT 1 10\nGET 1\nGET 1\nFREQ 1\nPUT 2 20\nFREQ 2", "expectedOutput": "10 10 3 1", "hidden": false}, {"input": "1\n4\nPUT 1 100\nFREQ 1\nGET 1\nFREQ 1", "expectedOutput": "1 100 2", "hidden": false}],
    starterCode: {
      python: `class LFUCacheWithFreq:
    def __init__(self, capacity: int):
        pass
    def get(self, key: int) -> int:
        return -1
    def put(self, key: int, value: int) -> None:
        pass
    def freq(self, key: int) -> int:
        return -1

capacity = int(input())
q = int(input())
cache = LFUCacheWithFreq(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    elif line[0] == "GET": out.append(str(cache.get(int(line[1]))))
    elif line[0] == "FREQ": out.append(str(cache.freq(int(line[1]))))
print(" ".join(out))`,
      cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;
class LFUCacheWithFreq {
public:
    LFUCacheWithFreq(int capacity) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
    int freq(int key) { return -1; }
};
int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LFUCacheWithFreq cache(capacity);
        vector<int> out;
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
    public LFUCacheWithFreq(int capacity) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
    public int freq(int key) { return -1; }
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
void put(int key, int value) {}
int get(int key) { return -1; }
int freq(int key) { return -1; }
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else if (strcmp(cmd, "GET") == 0) { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
        else { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = freq(k); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
    },
  },
  {
    id: "lfu-e3",
    title: "LFU Cache - Max Frequency Query",
    difficulty: "Easy",
    description: "Implement an LFU Cache that also supports a MAXFREQ command. MAXFREQ returns the current maximum frequency among all keys in the cache, or 0 if the cache is empty.",
    constraints: ["1 <= capacity <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "Capacity = 2, Operations = PUT 1 10, GET 1, GET 1, MAXFREQ, PUT 2 20, GET 2, MAXFREQ", "output": "10 3 20 3", "explanation": "After 2 GETs, key 1 has freq=3. MAXFREQ returns 3. After GET 2, key 2 has freq=2. Max is still key1 freq=3."}],
    testCases: [{"input": "2\n7\nPUT 1 10\nGET 1\nGET 1\nMAXFREQ\nPUT 2 20\nGET 2\nMAXFREQ", "expectedOutput": "10 10 3 20 3", "hidden": false}, {"input": "1\n5\nPUT 1 100\nGET 1\nPUT 2 200\nGET 2\nMAXFREQ", "expectedOutput": "100 200 2", "hidden": false}],
    starterCode: {
      python: `class LFUCacheMaxFreq:
    def __init__(self, capacity: int):
        pass
    def get(self, key: int) -> int:
        return -1
    def put(self, key: int, value: int) -> None:
        pass
    def maxfreq(self) -> int:
        return 0

capacity = int(input())
q = int(input())
cache = LFUCacheMaxFreq(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    elif line[0] == "GET": out.append(str(cache.get(int(line[1]))))
    elif line[0] == "MAXFREQ": out.append(str(cache.maxfreq()))
print(" ".join(out))`,
      cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;
class LFUCacheMaxFreq {
public:
    LFUCacheMaxFreq(int capacity) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
    int maxfreq() { return 0; }
};
int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LFUCacheMaxFreq cache(capacity);
        vector<int> out;
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
    public LFUCacheMaxFreq(int capacity) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
    public int maxfreq() { return 0; }
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
void put(int key, int value) {}
int get(int key) { return -1; }
int maxfreq() { return 0; }
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
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
  },
  {
    id: "lfu-e4",
    title: "LFU Cache - Size Query",
    difficulty: "Easy",
    description: "Implement an LFU Cache that supports a SIZE command returning the current number of keys in the cache.",
    constraints: ["1 <= capacity <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "Capacity = 2, Operations = PUT 1 10, SIZE, PUT 2 20, SIZE, PUT 3 30, SIZE", "output": "1 2 2", "explanation": "After PUT 3, key 1 (LFU) is evicted. Size remains 2."}],
    testCases: [{"input": "2\n6\nPUT 1 10\nSIZE\nPUT 2 20\nSIZE\nPUT 3 30\nSIZE", "expectedOutput": "1 2 2", "hidden": false}, {"input": "3\n6\nPUT 1 10\nPUT 2 20\nPUT 3 30\nSIZE\nGET 1\nSIZE", "expectedOutput": "3 10 3", "hidden": false}],
    starterCode: {
      python: `class LFUCacheSize:
    def __init__(self, capacity: int):
        pass
    def get(self, key: int) -> int:
        return -1
    def put(self, key: int, value: int) -> None:
        pass
    def size(self) -> int:
        return 0

capacity = int(input())
q = int(input())
cache = LFUCacheSize(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    elif line[0] == "GET": out.append(str(cache.get(int(line[1]))))
    elif line[0] == "SIZE": out.append(str(cache.size()))
print(" ".join(out))`,
      cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;
class LFUCacheSize {
public:
    LFUCacheSize(int capacity) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
    int size() { return 0; }
};
int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LFUCacheSize cache(capacity);
        vector<int> out;
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
    public LFUCacheSize(int capacity) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
    public int size() { return 0; }
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
void put(int key, int value) {}
int get(int key) { return -1; }
int cacheSize_query() { return 0; }
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else if (strcmp(cmd, "GET") == 0) { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
        else { out[outCount++] = cacheSize_query(); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
    },
  },
  {
    id: "lfu-e5",
    title: "LFU Cache - Contains Query",
    difficulty: "Easy",
    description: "Implement an LFU Cache that supports a CONTAINS key command. CONTAINS returns 1 if the key is currently in the cache, 0 otherwise. Note: CONTAINS does NOT count as an access and does NOT affect frequencies.",
    constraints: ["1 <= capacity <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "Capacity = 2, Operations = PUT 1 10, CONTAINS 1, CONTAINS 2, PUT 2 20, PUT 3 30, CONTAINS 1", "output": "1 0 0", "explanation": "Key 1 is present after PUT. Key 2 not yet inserted. After PUT 3 evicts key 1 (LFU), CONTAINS 1 returns 0."}],
    testCases: [{"input": "2\n6\nPUT 1 10\nCONTAINS 1\nCONTAINS 2\nPUT 2 20\nPUT 3 30\nCONTAINS 1", "expectedOutput": "1 0 0", "hidden": false}, {"input": "2\n5\nPUT 1 10\nGET 1\nPUT 2 20\nPUT 3 30\nCONTAINS 1", "expectedOutput": "10 1", "hidden": false}],
    starterCode: {
      python: `class LFUCacheContains:
    def __init__(self, capacity: int):
        pass
    def get(self, key: int) -> int:
        return -1
    def put(self, key: int, value: int) -> None:
        pass
    def contains(self, key: int) -> int:
        return 0

capacity = int(input())
q = int(input())
cache = LFUCacheContains(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    elif line[0] == "GET": out.append(str(cache.get(int(line[1]))))
    elif line[0] == "CONTAINS": out.append(str(cache.contains(int(line[1]))))
print(" ".join(out))`,
      cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;
class LFUCacheContains {
public:
    LFUCacheContains(int capacity) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
    int contains(int key) { return 0; }
};
int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LFUCacheContains cache(capacity);
        vector<int> out;
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
    public LFUCacheContains(int capacity) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
    public int contains(int key) { return 0; }
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
void put(int key, int value) {}
int get(int key) { return -1; }
int contains(int key) { return 0; }
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
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
  },
  {
    id: "lfu-m1",
    title: "LFU Cache with Frequency Decay",
    difficulty: "Medium",
    description: "Implement an LFU Cache with periodic frequency decay. A DECAY command halves the frequency of every key in the cache (rounding down, minimum 1). After decay, update the minimum frequency accordingly.",
    constraints: ["1 <= capacity <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "Capacity = 2, Operations = PUT 1 10, GET 1, GET 1, FREQ 1, DECAY, FREQ 1, PUT 2 20, PUT 3 30, CONTAINS 1", "output": "10 3 1 0", "explanation": "After 2 GETs, key 1 has freq=3. DECAY halves: freq=1. PUT 3 evicts key 1 (freq=1, LFU). CONTAINS 1 = 0."}],
    testCases: [{"input": "2\n9\nPUT 1 10\nGET 1\nGET 1\nFREQ 1\nDECAY\nFREQ 1\nPUT 2 20\nPUT 3 30\nCONTAINS 1", "expectedOutput": "10 10 3 1 0", "hidden": false}, {"input": "2\n7\nPUT 1 10\nPUT 2 20\nGET 1\nGET 1\nDECAY\nFREQ 1\nFREQ 2", "expectedOutput": "10 10 1 1", "hidden": false}],
    starterCode: {
      python: `class LFUCacheDecay:
    def __init__(self, capacity: int):
        pass
    def get(self, key: int) -> int:
        return -1
    def put(self, key: int, value: int) -> None:
        pass
    def freq(self, key: int) -> int:
        return -1
    def decay(self) -> None:
        pass
    def contains(self, key: int) -> int:
        return 0

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
#include <string>
#include <vector>
using namespace std;
class LFUCacheDecay {
public:
    LFUCacheDecay(int capacity) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
    int freq(int key) { return -1; }
    void decay() {}
    int contains(int key) { return 0; }
};
int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LFUCacheDecay cache(capacity);
        vector<int> out;
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
    public LFUCacheDecay(int capacity) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
    public int freq(int key) { return -1; }
    public void decay() {}
    public int contains(int key) { return 0; }
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
void put(int key, int value) {}
int get(int key) { return -1; }
int freq(int key) { return -1; }
void decay() {}
int contains(int key) { return 0; }
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else if (strcmp(cmd, "GET") == 0) { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
        else if (strcmp(cmd, "FREQ") == 0) { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = freq(k); }
        else if (strcmp(cmd, "DECAY") == 0) { decay(); }
        else { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = contains(k); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
    },
  },
  {
    id: "lfu-m2",
    title: "LFU Cache with Eviction Count",
    difficulty: "Medium",
    description: "Implement an LFU Cache that tracks the total number of evictions since initialization. Support GET, PUT, and EVICTIONS commands. EVICTIONS returns the total number of keys evicted so far.",
    constraints: ["1 <= capacity <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "Capacity = 2, Operations = PUT 1 10, PUT 2 20, PUT 3 30, EVICTIONS, PUT 4 40, EVICTIONS", "output": "1 2", "explanation": "PUT 3 evicts key 1 (first eviction). PUT 4 evicts key 2. EVICTIONS returns 2."}],
    testCases: [{"input": "2\n6\nPUT 1 10\nPUT 2 20\nPUT 3 30\nEVICTIONS\nPUT 4 40\nEVICTIONS", "expectedOutput": "1 2", "hidden": false}, {"input": "1\n5\nPUT 1 100\nEVICTIONS\nPUT 2 200\nPUT 3 300\nEVICTIONS", "expectedOutput": "0 2", "hidden": false}],
    starterCode: {
      python: `class LFUCacheEvictions:
    def __init__(self, capacity: int):
        pass
    def get(self, key: int) -> int:
        return -1
    def put(self, key: int, value: int) -> None:
        pass
    def evictions(self) -> int:
        return 0

capacity = int(input())
q = int(input())
cache = LFUCacheEvictions(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    elif line[0] == "GET": out.append(str(cache.get(int(line[1]))))
    elif line[0] == "EVICTIONS": out.append(str(cache.evictions()))
print(" ".join(out))`,
      cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;
class LFUCacheEvictions {
public:
    LFUCacheEvictions(int capacity) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
    int evictions() { return 0; }
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
    public LFUCacheEvictions(int capacity) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
    public int evictions() { return 0; }
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
void put(int key, int value) {}
int get(int key) { return -1; }
int evictions() { return 0; }
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) { int k, v; if (scanf("%d %d", &k, &v) != 2) break; put(k, v); }
        else if (strcmp(cmd, "GET") == 0) { int k; if (scanf("%d", &k) != 1) break; out[outCount++] = get(k); }
        else { out[outCount++] = evictions(); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
    },
  },
  {
    id: "lfu-m3",
    title: "LFU Cache - Large Frequency Simulation",
    difficulty: "Medium",
    description: "Implement an LFU Cache and simulate many GET/PUT operations. Focus on correctness with repeated key accesses that build up high frequencies before eviction.",
    constraints: ["1 <= capacity <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "Capacity = 3, ...", "output": "10 20 -1 40", "explanation": "Key 1 has high freq after repeated GETs, so key 3 is evicted first."}],
    testCases: [{"input": "3\n8\nPUT 1 10\nPUT 2 20\nPUT 3 30\nGET 1\nGET 1\nGET 2\nPUT 4 40\nGET 3", "expectedOutput": "10 10 20 -1", "hidden": false}, {"input": "2\n6\nPUT 1 10\nGET 1\nGET 1\nPUT 2 20\nPUT 3 30\nGET 1", "expectedOutput": "10 10 10", "hidden": false}],
    starterCode: {
      python: `class LFUCache:
    def __init__(self, capacity: int):
        pass
    def get(self, key: int) -> int:
        return -1
    def put(self, key: int, value: int) -> None:
        pass

capacity = int(input())
q = int(input())
cache = LFUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    elif line[0] == "GET": out.append(str(cache.get(int(line[1]))))
print(" ".join(out))`,
      cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;
class LFUCache {
public:
    LFUCache(int capacity) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
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
    public LFUCache(int capacity) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
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
void put(int key, int value) {}
int get(int key) { return -1; }
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
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
  },
  {
    id: "lfu-m4",
    title: "LFU Cache - Mixed Frequency Access Pattern",
    difficulty: "Medium",
    description: "Implement an LFU Cache with mixed access patterns where some keys are accessed many times and others rarely. Verify that LFU eviction correctly identifies the least frequently accessed key.",
    constraints: ["1 <= capacity <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "Capacity = 2, Operations = PUT 1 10, PUT 2 20, GET 1, GET 1, GET 1, PUT 3 30, GET 2, GET 1, GET 3", "output": "10 10 10 10 -1 30", "explanation": "Key 1 has freq=4. Key 2 has freq=1. PUT 3 evicts key 2 (LFU). GET 2 returns -1."}],
    testCases: [{"input": "2\n9\nPUT 1 10\nPUT 2 20\nGET 1\nGET 1\nGET 1\nPUT 3 30\nGET 2\nGET 1\nGET 3", "expectedOutput": "10 10 10 -1 10 30", "hidden": false}, {"input": "3\n7\nPUT 1 10\nPUT 2 20\nPUT 3 30\nGET 1\nGET 2\nPUT 4 40\nGET 3", "expectedOutput": "10 20 -1", "hidden": false}],
    starterCode: {
      python: `class LFUCache:
    def __init__(self, capacity: int):
        pass
    def get(self, key: int) -> int:
        return -1
    def put(self, key: int, value: int) -> None:
        pass

capacity = int(input())
q = int(input())
cache = LFUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    elif line[0] == "GET": out.append(str(cache.get(int(line[1]))))
print(" ".join(out))`,
      cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;
class LFUCache {
public:
    LFUCache(int capacity) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
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
    public LFUCache(int capacity) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
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
void put(int key, int value) {}
int get(int key) { return -1; }
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
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
  },
  {
    id: "lfu-m5",
    title: "LFU Cache - Tie-Breaking Scenario",
    difficulty: "Medium",
    description: "Implement an LFU Cache and verify correct LRU tie-breaking. When multiple keys share the minimum frequency, the least recently used key among them is evicted.",
    constraints: ["1 <= capacity <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "Capacity = 3, Operations = PUT 1 10, PUT 2 20, PUT 3 30, PUT 4 40, GET 1, GET 3, GET 4", "output": "10 30 40", "explanation": "All keys start with freq=1. PUT 4 evicts key 1 (LRU of freq=1 group). After PUT 4, GET 1 returns -1 \u2192 wait, corrected: GET 1=10 if key 1 was not evicted. With cap=3, PUT 4 evicts key 1 (oldest with freq=1)."}],
    testCases: [{"input": "3\n7\nPUT 1 10\nPUT 2 20\nPUT 3 30\nPUT 4 40\nGET 1\nGET 3\nGET 4", "expectedOutput": "-1 30 40", "hidden": false}, {"input": "2\n7\nPUT 1 10\nPUT 2 20\nGET 1\nGET 1\nGET 2\nPUT 3 30\nGET 2", "expectedOutput": "10 10 20 -1", "hidden": false}],
    starterCode: {
      python: `class LFUCache:
    def __init__(self, capacity: int):
        pass
    def get(self, key: int) -> int:
        return -1
    def put(self, key: int, value: int) -> None:
        pass

capacity = int(input())
q = int(input())
cache = LFUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    elif line[0] == "GET": out.append(str(cache.get(int(line[1]))))
print(" ".join(out))`,
      cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;
class LFUCache {
public:
    LFUCache(int capacity) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
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
    public LFUCache(int capacity) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
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
void put(int key, int value) {}
int get(int key) { return -1; }
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
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
  },
  {
    id: "lfu-h1",
    title: "LFU Cache - High Volume Stress Test",
    difficulty: "Hard",
    description: "Implement a high-performance LFU Cache that handles a high volume of mixed operations correctly. The cache must maintain perfect O(1) complexity for all GET and PUT operations.",
    constraints: ["1 <= capacity <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "Capacity = 3, large mixed ops", "output": "correct LFU outputs", "explanation": "LFU with complex eviction sequences."}],
    testCases: [{"input": "3\n10\nPUT 1 10\nPUT 2 20\nPUT 3 30\nGET 1\nGET 2\nGET 1\nPUT 4 40\nGET 3\nGET 1\nGET 2", "expectedOutput": "10 20 10 -1 10 20", "hidden": false}, {"input": "2\n8\nPUT 1 100\nPUT 2 200\nGET 1\nGET 1\nPUT 3 300\nGET 2\nGET 1\nGET 3", "expectedOutput": "100 100 -1 100 300", "hidden": false}],
    starterCode: {
      python: `class LFUCache:
    def __init__(self, capacity: int):
        pass
    def get(self, key: int) -> int:
        return -1
    def put(self, key: int, value: int) -> None:
        pass

capacity = int(input())
q = int(input())
cache = LFUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    elif line[0] == "GET": out.append(str(cache.get(int(line[1]))))
print(" ".join(out))`,
      cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;
class LFUCache {
public:
    LFUCache(int capacity) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
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
    public LFUCache(int capacity) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
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
void put(int key, int value) {}
int get(int key) { return -1; }
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
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
  },
  {
    id: "lfu-h2",
    title: "LFU Cache - Capacity 1 Edge Case",
    difficulty: "Hard",
    description: "Implement an LFU Cache and handle the edge case where capacity is 1. Every PUT of a new key evicts the only key in cache.",
    constraints: ["1 <= capacity <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "Capacity = 1, Operations = PUT 1 10, GET 1, PUT 2 20, GET 1, GET 2", "output": "10 -1 20", "explanation": "PUT 2 evicts key 1. GET 1 returns -1. GET 2 returns 20."}],
    testCases: [{"input": "1\n5\nPUT 1 10\nGET 1\nPUT 2 20\nGET 1\nGET 2", "expectedOutput": "10 -1 20", "hidden": false}, {"input": "1\n6\nPUT 1 10\nGET 1\nGET 1\nPUT 2 20\nGET 1\nGET 2", "expectedOutput": "10 10 -1 20", "hidden": false}],
    starterCode: {
      python: `class LFUCache:
    def __init__(self, capacity: int):
        pass
    def get(self, key: int) -> int:
        return -1
    def put(self, key: int, value: int) -> None:
        pass

capacity = int(input())
q = int(input())
cache = LFUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    elif line[0] == "GET": out.append(str(cache.get(int(line[1]))))
print(" ".join(out))`,
      cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;
class LFUCache {
public:
    LFUCache(int capacity) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
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
    public LFUCache(int capacity) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
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
void put(int key, int value) {}
int get(int key) { return -1; }
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
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
  },
  {
    id: "lfu-h3",
    title: "LFU Cache - Sequential Insertions",
    difficulty: "Hard",
    description: "Implement an LFU Cache and handle sequential insertions followed by GETs. Keys are inserted in order and each key is accessed a different number of times before eviction.",
    constraints: ["1 <= capacity <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "Capacity = 3, sequential inserts with varied access", "output": "correct outputs", "explanation": "LFU retains most-accessed keys."}],
    testCases: [{"input": "3\n10\nPUT 1 10\nGET 1\nGET 1\nPUT 2 20\nGET 2\nPUT 3 30\nPUT 4 40\nGET 1\nGET 2\nGET 3", "expectedOutput": "10 10 20 10 20 -1", "hidden": false}, {"input": "2\n6\nPUT 1 10\nGET 1\nGET 1\nGET 1\nPUT 2 20\nPUT 3 30", "expectedOutput": "10 10 10", "hidden": false}],
    starterCode: {
      python: `class LFUCache:
    def __init__(self, capacity: int):
        pass
    def get(self, key: int) -> int:
        return -1
    def put(self, key: int, value: int) -> None:
        pass

capacity = int(input())
q = int(input())
cache = LFUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    elif line[0] == "GET": out.append(str(cache.get(int(line[1]))))
print(" ".join(out))`,
      cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;
class LFUCache {
public:
    LFUCache(int capacity) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
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
    public LFUCache(int capacity) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
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
void put(int key, int value) {}
int get(int key) { return -1; }
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
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
  },
  {
    id: "lfu-h4",
    title: "LFU Cache - Update Existing Key",
    difficulty: "Hard",
    description: "Implement an LFU Cache ensuring that updating an existing key (PUT with same key) increments its frequency and updates its value, without causing a duplicate eviction.",
    constraints: ["1 <= capacity <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "Capacity = 2, Operations = PUT 1 10, PUT 1 20, GET 1, PUT 2 200, PUT 3 300, GET 1, GET 2", "output": "20 20 -1", "explanation": "PUT 1 twice: key 1 has freq=2. PUT 2: freq=1. PUT 3: evicts key 2 (LFU). GET 1 returns 20 (updated value)."}],
    testCases: [{"input": "2\n7\nPUT 1 10\nPUT 1 20\nGET 1\nPUT 2 200\nPUT 3 300\nGET 1\nGET 2", "expectedOutput": "20 20 -1", "hidden": false}, {"input": "2\n6\nPUT 1 10\nPUT 2 20\nPUT 1 100\nGET 1\nPUT 3 30\nGET 2", "expectedOutput": "100 -1", "hidden": false}],
    starterCode: {
      python: `class LFUCache:
    def __init__(self, capacity: int):
        pass
    def get(self, key: int) -> int:
        return -1
    def put(self, key: int, value: int) -> None:
        pass

capacity = int(input())
q = int(input())
cache = LFUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    elif line[0] == "GET": out.append(str(cache.get(int(line[1]))))
print(" ".join(out))`,
      cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;
class LFUCache {
public:
    LFUCache(int capacity) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
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
    public LFUCache(int capacity) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
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
void put(int key, int value) {}
int get(int key) { return -1; }
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
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
  },
  {
    id: "lfu-h5",
    title: "LFU Cache - Eviction Order Verification",
    difficulty: "Hard",
    description: "Implement an LFU Cache and verify the exact eviction order. Given a series of PUT and GET operations, confirm which keys are evicted and what GET returns after eviction.",
    constraints: ["1 <= capacity <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "Capacity = 3, verify exact eviction", "output": "correct sequence", "explanation": "LFU evicts based on frequency, ties broken by LRU."}],
    testCases: [{"input": "3\n9\nPUT 1 10\nPUT 2 20\nPUT 3 30\nGET 2\nGET 2\nGET 3\nPUT 4 40\nGET 1\nGET 4", "expectedOutput": "20 20 30 -1 40", "hidden": false}, {"input": "2\n8\nPUT 1 10\nPUT 2 20\nGET 2\nGET 1\nGET 1\nPUT 3 30\nGET 2\nGET 1", "expectedOutput": "20 10 10 -1 10", "hidden": false}],
    starterCode: {
      python: `class LFUCache:
    def __init__(self, capacity: int):
        pass
    def get(self, key: int) -> int:
        return -1
    def put(self, key: int, value: int) -> None:
        pass

capacity = int(input())
q = int(input())
cache = LFUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    if line[0] == "PUT": cache.put(int(line[1]), int(line[2]))
    elif line[0] == "GET": out.append(str(cache.get(int(line[1]))))
print(" ".join(out))`,
      cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;
class LFUCache {
public:
    LFUCache(int capacity) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
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
    public LFUCache(int capacity) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
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
void put(int key, int value) {}
int get(int key) { return -1; }
int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
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
  }
];
