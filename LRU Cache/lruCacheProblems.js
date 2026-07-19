export const lruCacheProblems = [
  {
    id: 'lru-e1',
    title: "LRU Cache Basic",
    difficulty: 'Easy',
    description: "Implement a Least Recently Used (LRU) Cache supporting get(key) and put(key, value) operations in O(1) time complexity.",
    constraints: ["1 <= capacity <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "Capacity = 2, Operations = PUT 1 10, PUT 2 20, GET 1, PUT 3 30, GET 2, GET 3", "output": "10 -1 30", "explanation": "GET 2 returns -1 because key 2 was evicted when PUT 3 30 occurred."}],
    testCases: [{"input": "2\n6\nPUT 1 10\nPUT 2 20\nGET 1\nPUT 3 30\nGET 2\nGET 3", "expectedOutput": "10 -1 30", "hidden": false}, {"input": "1\n4\nPUT 1 100\nGET 1\nPUT 2 200\nGET 1", "expectedOutput": "100 -1", "hidden": false}],
    starterCode: {
      python: `
class LRUCache:
    def __init__(self, capacity: int):
        pass

    def get(self, key: int) -> int:
        return -1

    def put(self, key: int, value: int) -> None:
        pass

# I/O boilerplate
capacity = int(input())
q = int(input())
cache = LRUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    cmd = line[0]
    if cmd == "PUT":
        cache.put(int(line[1]), int(line[2]))
    elif cmd == "GET":
        out.append(str(cache.get(int(line[1]))))
print(" ".join(out))
`,
      cpp: `
#include <iostream>
#include <vector>
#include <string>
using namespace std;

class LRUCache {
public:
    LRUCache(int capacity) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
};

int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LRUCache cache(capacity);
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") {
                int key, val; cin >> key >> val;
                cache.put(key, val);
            } else if (cmd == "GET") {
                int key; cin >> key;
                out.push_back(cache.get(key));
            }
        }
        for (size_t i = 0; i < out.size(); i++) {
            cout << out[i] << (i + 1 < out.size() ? " " : "");
        }
        cout << "\\n";
    }
    return 0;
}
`,
      java: `
import java.util.*;

class LRUCache {
    public LRUCache(int capacity) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt();
            int q = sc.nextInt();
            LRUCache cache = new LRUCache(capacity);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) {
                    cache.put(sc.nextInt(), sc.nextInt());
                } else if (cmd.equals("GET")) {
                    out.add(String.valueOf(cache.get(sc.nextInt())));
                }
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

void put(int key, int value) {}
int get(int key) { return -1; }

int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    int* out = malloc(q * sizeof(int));
    int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10];
        if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) {
            int key, val;
            if (scanf("%d %d", &key, &val) != 2) break;
            put(key, val);
        } else if (strcmp(cmd, "GET") == 0) {
            int key;
            if (scanf("%d", &key) != 1) break;
            out[outCount++] = get(key);
        }
    }
    for (int i = 0; i < outCount; i++) {
        printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    }
    printf("\\n");
    return 0;
}
`,
    }
  },
  {
    id: 'lru-e2',
    title: "LRU Cache with Expiry (TTL)",
    difficulty: 'Easy',
    description: "Implement an LRU Cache where each key has a Time-To-Live (TTL). When accessing a key or inserting a key, first evict all expired keys. A key is considered expired at timestamp `t` if `t - last_access_time >= TTL`.",
    constraints: ["1 <= capacity <= 1000", "1 <= TTL <= 10000", "1 <= q <= 2000"],
    examples: [{"input": "Capacity = 2, TTL = 5, Operations = 1 PUT 1 10, 2 PUT 2 20, 3 GET 1, 7 GET 1, 8 GET 2, 9 PUT 3 30", "output": "10 10 -1", "explanation": "At t=8, key 2 is expired because 8 - 2 = 6 >= 5. So GET 2 returns -1."}],
    testCases: [{"input": "2 5\n6\n1 PUT 1 10\n2 PUT 2 20\n3 GET 1\n7 GET 1\n8 GET 2\n9 PUT 3 30", "expectedOutput": "10 10 -1", "hidden": false}, {"input": "1 2\n4\n1 PUT 1 100\n2 GET 1\n3 GET 1\n4 GET 1", "expectedOutput": "100 100 100", "hidden": false}],
    starterCode: {
      python: `
class LRUCacheWithTTL:
    def __init__(self, capacity: int, ttl: int):
        pass

    def get(self, t: int, key: int) -> int:
        return -1

    def put(self, t: int, key: int, value: int) -> None:
        pass

# I/O boilerplate
capacity, ttl = map(int, input().split())
q = int(input())
cache = LRUCacheWithTTL(capacity, ttl)
out = []
for _ in range(q):
    line = input().split()
    t = int(line[0])
    cmd = line[1]
    if cmd == "PUT":
        cache.put(t, int(line[2]), int(line[3]))
    elif cmd == "GET":
        out.append(str(cache.get(t, int(line[2]))))
print(" ".join(out))
`,
      cpp: `
#include <iostream>
#include <vector>
#include <string>
using namespace std;

class LRUCacheWithTTL {
public:
    LRUCacheWithTTL(int capacity, int ttl) {}
    int get(int t, int key) { return -1; }
    void put(int t, int key, int value) {}
};

int main() {
    int capacity, ttl, q;
    if (cin >> capacity >> ttl >> q) {
        LRUCacheWithTTL cache(capacity, ttl);
        vector<int> out;
        for (int i = 0; i < q; i++) {
            int t; string cmd; cin >> t >> cmd;
            if (cmd == "PUT") {
                int key, val; cin >> key >> val;
                cache.put(t, key, val);
            } else if (cmd == "GET") {
                int key; cin >> key;
                out.push_back(cache.get(t, key));
            }
        }
        for (size_t i = 0; i < out.size(); i++) {
            cout << out[i] << (i + 1 < out.size() ? " " : "");
        }
        cout << "\\n";
    }
    return 0;
}
`,
      java: `
import java.util.*;

class LRUCacheWithTTL {
    public LRUCacheWithTTL(int capacity, int ttl) {}
    public int get(int t, int key) { return -1; }
    public void put(int t, int key, int value) {}
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt();
            int ttl = sc.nextInt();
            int q = sc.nextInt();
            LRUCacheWithTTL cache = new LRUCacheWithTTL(capacity, ttl);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                int t = sc.nextInt();
                String cmd = sc.next();
                if (cmd.equals("PUT")) {
                    cache.put(t, sc.nextInt(), sc.nextInt());
                } else if (cmd.equals("GET")) {
                    out.add(String.valueOf(cache.get(t, sc.nextInt())));
                }
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

void put(int t, int key, int value) {}
int get(int t, int key) { return -1; }

int main() {
    int capacity, ttl, q;
    if (scanf("%d %d %d", &capacity, &ttl, &q) != 3) return 0;
    int* out = malloc(q * sizeof(int));
    int outCount = 0;
    for (int i = 0; i < q; i++) {
        int t; char cmd[10];
        if (scanf("%d %s", &t, cmd) != 2) break;
        if (strcmp(cmd, "PUT") == 0) {
            int key, val; if (scanf("%d %d", &key, &val) != 2) break;
            put(t, key, val);
        } else if (strcmp(cmd, "GET") == 0) {
            int key; if (scanf("%d", &key) != 1) break;
            out[outCount++] = get(t, key);
        }
    }
    for (int i = 0; i < outCount; i++) {
        printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    }
    printf("\\n");
    return 0;
}
`,
    }
  },
  {
    id: 'lru-e3',
    title: "LRU Cache with Key Reference Count",
    difficulty: 'Easy',
    description: "Implement an LRU Cache that keeps track of the reference count (access hit frequency) of each key since it was inserted. Support GET, PUT, and COUNT commands. COUNT returns the total times the key has been read, updated, or checked via COUNT since it was inserted, or -1 if the key doesn't exist.",
    constraints: ["1 <= capacity <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "Capacity = 2, Operations = PUT 1 10, GET 1, COUNT 1, PUT 2 20, PUT 3 30, COUNT 2, COUNT 1", "output": "10 3 2 -1", "explanation": "Key 1 gets accessed by PUT (1), GET (2), and COUNT (3). When PUT 3 happens, key 1 is evicted, so COUNT 1 returns -1."}],
    testCases: [{"input": "2\n7\nPUT 1 10\nGET 1\nCOUNT 1\nPUT 2 20\nPUT 3 30\nCOUNT 2\nCOUNT 1", "expectedOutput": "10 3 2 -1", "hidden": false}, {"input": "1\n5\nPUT 1 100\nCOUNT 1\nPUT 2 200\nCOUNT 1\nCOUNT 2", "expectedOutput": "2 -1 2", "hidden": false}],
    starterCode: {
      python: `
class LRUCacheWithRefCount:
    def __init__(self, capacity: int):
        pass

    def get(self, key: int) -> int:
        return -1

    def put(self, key: int, value: int) -> None:
        pass

    def count(self, key: int) -> int:
        return -1

# I/O boilerplate
capacity = int(input())
q = int(input())
cache = LRUCacheWithRefCount(capacity)
out = []
for _ in range(q):
    line = input().split()
    cmd = line[0]
    if cmd == "PUT":
        cache.put(int(line[1]), int(line[2]))
    elif cmd == "GET":
        out.append(str(cache.get(int(line[1]))))
    elif cmd == "COUNT":
        out.append(str(cache.count(int(line[1]))))
print(" ".join(out))
`,
      cpp: `
#include <iostream>
#include <vector>
#include <string>
using namespace std;

class LRUCacheWithRefCount {
public:
    LRUCacheWithRefCount(int capacity) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
    int count(int key) { return -1; }
};

int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LRUCacheWithRefCount cache(capacity);
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") {
                int key, val; cin >> key >> val;
                cache.put(key, val);
            } else if (cmd == "GET") {
                int key; cin >> key;
                out.push_back(cache.get(key));
            } else if (cmd == "COUNT") {
                int key; cin >> key;
                out.push_back(cache.count(key));
            }
        }
        for (size_t i = 0; i < out.size(); i++) {
            cout << out[i] << (i + 1 < out.size() ? " " : "");
        }
        cout << "\\n";
    }
    return 0;
}
`,
      java: `
import java.util.*;

class LRUCacheWithRefCount {
    public LRUCacheWithRefCount(int capacity) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
    public int count(int key) { return -1; }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt();
            int q = sc.nextInt();
            LRUCacheWithRefCount cache = new LRUCacheWithRefCount(capacity);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) {
                    cache.put(sc.nextInt(), sc.nextInt());
                } else if (cmd.equals("GET")) {
                    out.add(String.valueOf(cache.get(sc.nextInt())));
                } else if (cmd.equals("COUNT")) {
                    out.add(String.valueOf(cache.count(sc.nextInt())));
                }
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

void put(int key, int value) {}
int get(int key) { return -1; }
int count(int key) { return -1; }

int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    int* out = malloc(q * sizeof(int));
    int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) {
            int key, val; if (scanf("%d %d", &key, &val) != 2) break;
            put(key, val);
        } else if (strcmp(cmd, "GET") == 0) {
            int key; if (scanf("%d", &key) != 1) break;
            out[outCount++] = get(key);
        } else if (strcmp(cmd, "COUNT") == 0) {
            int key; if (scanf("%d", &key) != 1) break;
            out[outCount++] = count(key);
        }
    }
    for (int i = 0; i < outCount; i++) {
        printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    }
    printf("\\n");
    return 0;
}
`,
    }
  },
  {
    id: 'lru-e4',
    title: "LRU Cache with Eviction History",
    difficulty: 'Easy',
    description: "Implement an LRU Cache that keeps track of the history of all evicted keys in chronological order. Support GET, PUT, and EVICTED commands. EVICTED returns a comma-separated list of all keys evicted since cache initialization (e.g. `1,2`), or `none` if no evictions have occurred.",
    constraints: ["1 <= capacity <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "Capacity = 2, Operations = PUT 1 10, PUT 2 20, PUT 3 30, EVICTED, PUT 4 40, EVICTED, GET 2", "output": "1 1,2 -1", "explanation": "Key 1 is evicted when 3 is added. Key 2 is evicted when 4 is added."}],
    testCases: [{"input": "2\n7\nPUT 1 10\nPUT 2 20\nPUT 3 30\nEVICTED\nPUT 4 40\nEVICTED\nGET 2", "expectedOutput": "1 1,2 -1", "hidden": false}, {"input": "1\n5\nPUT 1 10\nPUT 2 20\nEVICTED\nPUT 3 30\nEVICTED", "expectedOutput": "1 1,2", "hidden": false}],
    starterCode: {
      python: `
class LRUCacheWithEvictionHistory:
    def __init__(self, capacity: int):
        pass

    def get(self, key: int) -> int:
        return -1

    def put(self, key: int, value: int) -> None:
        pass

    def evicted(self) -> str:
        return "none"

# I/O boilerplate
capacity = int(input())
q = int(input())
cache = LRUCacheWithEvictionHistory(capacity)
out = []
for _ in range(q):
    line = input().split()
    cmd = line[0]
    if cmd == "PUT":
        cache.put(int(line[1]), int(line[2]))
    elif cmd == "GET":
        out.append(str(cache.get(int(line[1]))))
    elif cmd == "EVICTED":
        out.append(cache.evicted())
print(" ".join(out))
`,
      cpp: `
#include <iostream>
#include <vector>
#include <string>
using namespace std;

class LRUCacheWithEvictionHistory {
public:
    LRUCacheWithEvictionHistory(int capacity) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
    string evicted() { return "none"; }
};

int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LRUCacheWithEvictionHistory cache(capacity);
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") {
                int key, val; cin >> key >> val;
                cache.put(key, val);
            } else if (cmd == "GET") {
                int key; cin >> key;
                out.push_back(to_string(cache.get(key)));
            } else if (cmd == "EVICTED") {
                out.push_back(cache.evicted());
            }
        }
        for (size_t i = 0; i < out.size(); i++) {
            cout << out[i] << (i + 1 < out.size() ? " " : "");
        }
        cout << "\\n";
    }
    return 0;
}
`,
      java: `
import java.util.*;

class LRUCacheWithEvictionHistory {
    public LRUCacheWithEvictionHistory(int capacity) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
    public String evicted() { return "none"; }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt();
            int q = sc.nextInt();
            LRUCacheWithEvictionHistory cache = new LRUCacheWithEvictionHistory(capacity);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) {
                    cache.put(sc.nextInt(), sc.nextInt());
                } else if (cmd.equals("GET")) {
                    out.add(String.valueOf(cache.get(sc.nextInt())));
                } else if (cmd.equals("EVICTED")) {
                    out.add(cache.evicted());
                }
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

void put(int key, int value) {}
int get(int key) { return -1; }
void evicted(char* buf) { strcpy(buf, "none"); }

int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    char** out = malloc(q * sizeof(char*));
    int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) {
            int key, val; if (scanf("%d %d", &key, &val) != 2) break;
            put(key, val);
        } else if (strcmp(cmd, "GET") == 0) {
            int key; if (scanf("%d", &key) != 1) break;
            int ans = get(key);
            out[outCount] = malloc(20);
            sprintf(out[outCount++], "%d", ans);
        } else if (strcmp(cmd, "EVICTED") == 0) {
            out[outCount] = malloc(2048);
            evicted(out[outCount++]);
        }
    }
    for (int i = 0; i < outCount; i++) {
        printf("%s%s", out[i], (i + 1 < outCount) ? " " : "");
        free(out[i]);
    }
    printf("\\n");
    return 0;
}
`,
    }
  },
  {
    id: 'lru-e5',
    title: "Most Recently Used (MRU) Cache",
    difficulty: 'Easy',
    description: "Implement a Most Recently Used (MRU) Cache. When the cache exceeds capacity, it evicts the *most recently used* item instead of the least recently used.",
    constraints: ["1 <= capacity <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "Capacity = 2, Operations = PUT 1 10, PUT 2 20, GET 1, PUT 3 30, GET 1, GET 2", "output": "10 -1 20", "explanation": "GET 1 makes 1 the MRU. PUT 3 30 evicts the MRU (key 1). So GET 1 returns -1."}],
    testCases: [{"input": "2\n6\nPUT 1 10\nPUT 2 20\nGET 1\nPUT 3 30\nGET 1\nGET 2", "expectedOutput": "10 -1 20", "hidden": false}, {"input": "1\n4\nPUT 1 100\nGET 1\nPUT 2 200\nGET 1", "expectedOutput": "100 -1", "hidden": false}],
    starterCode: {
      python: `
class MRUCache:
    def __init__(self, capacity: int):
        pass

    def get(self, key: int) -> int:
        return -1

    def put(self, key: int, value: int) -> None:
        pass

# I/O boilerplate
capacity = int(input())
q = int(input())
cache = MRUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    cmd = line[0]
    if cmd == "PUT":
        cache.put(int(line[1]), int(line[2]))
    elif cmd == "GET":
        out.append(str(cache.get(int(line[1]))))
print(" ".join(out))
`,
      cpp: `
#include <iostream>
#include <vector>
#include <string>
using namespace std;

class MRUCache {
public:
    MRUCache(int capacity) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
};

int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        MRUCache cache(capacity);
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") {
                int key, val; cin >> key >> val;
                cache.put(key, val);
            } else if (cmd == "GET") {
                int key; cin >> key;
                out.push_back(cache.get(key));
            }
        }
        for (size_t i = 0; i < out.size(); i++) {
            cout << out[i] << (i + 1 < out.size() ? " " : "");
        }
        cout << "\\n";
    }
    return 0;
}
`,
      java: `
import java.util.*;

class MRUCache {
    public MRUCache(int capacity) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt();
            int q = sc.nextInt();
            MRUCache cache = new MRUCache(capacity);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) {
                    cache.put(sc.nextInt(), sc.nextInt());
                } else if (cmd.equals("GET")) {
                    out.add(String.valueOf(cache.get(sc.nextInt())));
                }
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

void put(int key, int value) {}
int get(int key) { return -1; }

int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    int* out = malloc(q * sizeof(int));
    int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) {
            int key, val; if (scanf("%d %d", &key, &val) != 2) break;
            put(key, val);
        } else if (strcmp(cmd, "GET") == 0) {
            int key; if (scanf("%d", &key) != 1) break;
            out[outCount++] = get(key);
        }
    }
    for (int i = 0; i < outCount; i++) {
        printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    }
    printf("\\n");
    return 0;
}
`,
    }
  },
  {
    id: 'lru-m1',
    title: "LRU Cache with Resize",
    difficulty: 'Medium',
    description: "Implement an LRU Cache that supports dynamic resizing. The RESIZE command changes the capacity of the cache. If the new capacity is smaller than the current size, evict the least recently used keys until the size matches the new capacity.",
    constraints: ["1 <= capacity <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "Capacity = 3, Operations = PUT 1 10, PUT 2 20, PUT 3 30, RESIZE 2, GET 1, GET 2, GET 3", "output": "-1 20 30", "explanation": "RESIZE 2 reduces capacity. The LRU key (1) is evicted. So GET 1 returns -1."}],
    testCases: [{"input": "3\n8\nPUT 1 10\nPUT 2 20\nPUT 3 30\nRESIZE 2\nGET 1\nGET 2\nGET 3\nGET 2", "expectedOutput": "-1 20 30 20", "hidden": false}, {"input": "2\n8\nPUT 1 100\nPUT 2 200\nRESIZE 1\nGET 1\nGET 2\nRESIZE 2\nPUT 3 300\nGET 3", "expectedOutput": "-1 200 300", "hidden": false}],
    starterCode: {
      python: `
class ResizableLRUCache:
    def __init__(self, capacity: int):
        pass

    def get(self, key: int) -> int:
        return -1

    def put(self, key: int, value: int) -> None:
        pass

    def resize(self, new_capacity: int) -> None:
        pass

# I/O boilerplate
capacity = int(input())
q = int(input())
cache = ResizableLRUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    cmd = line[0]
    if cmd == "PUT":
        cache.put(int(line[1]), int(line[2]))
    elif cmd == "GET":
        out.append(str(cache.get(int(line[1]))))
    elif cmd == "RESIZE":
        cache.resize(int(line[1]))
print(" ".join(out))
`,
      cpp: `
#include <iostream>
#include <vector>
#include <string>
using namespace std;

class ResizableLRUCache {
public:
    ResizableLRUCache(int capacity) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
    void resize(int new_capacity) {}
};

int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        ResizableLRUCache cache(capacity);
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") {
                int key, val; cin >> key >> val;
                cache.put(key, val);
            } else if (cmd == "GET") {
                int key; cin >> key;
                out.push_back(cache.get(key));
            } else if (cmd == "RESIZE") {
                int new_cap; cin >> new_cap;
                cache.resize(new_cap);
            }
        }
        for (size_t i = 0; i < out.size(); i++) {
            cout << out[i] << (i + 1 < out.size() ? " " : "");
        }
        cout << "\\n";
    }
    return 0;
}
`,
      java: `
import java.util.*;

class ResizableLRUCache {
    public ResizableLRUCache(int capacity) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
    public void resize(int newCapacity) {}
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt();
            int q = sc.nextInt();
            ResizableLRUCache cache = new ResizableLRUCache(capacity);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) {
                    cache.put(sc.nextInt(), sc.nextInt());
                } else if (cmd.equals("GET")) {
                    out.add(String.valueOf(cache.get(sc.nextInt())));
                } else if (cmd.equals("RESIZE")) {
                    cache.resize(sc.nextInt());
                }
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

void put(int key, int value) {}
int get(int key) { return -1; }
void resize(int new_capacity) {}

int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    int* out = malloc(q * sizeof(int));
    int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) {
            int key, val; if (scanf("%d %d", &key, &val) != 2) break;
            put(key, val);
        } else if (strcmp(cmd, "GET") == 0) {
            int key; if (scanf("%d", &key) != 1) break;
            out[outCount++] = get(key);
        } else if (strcmp(cmd, "RESIZE") == 0) {
            int new_cap; if (scanf("%d", &new_cap) != 1) break;
            resize(new_cap);
        }
    }
    for (int i = 0; i < outCount; i++) {
        printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    }
    printf("\\n");
    return 0;
}
`,
    }
  },
  {
    id: 'lru-m2',
    title: "Weighted LRU Cache",
    difficulty: 'Medium',
    description: "Implement a Weighted LRU Cache with capacity `W`. Each key has an associated weight: `PUT key value weight`. The total weight of all elements in the cache cannot exceed `W`. If inserting a new item causes total weight to exceed `W`, evict least recently used elements until the total weight is <= `W`. (Note: a single item's weight is guaranteed to be <= `W`).",
    constraints: ["1 <= capacity (W) <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "W = 5, Operations = PUT 1 100 3, PUT 2 200 3, GET 1, PUT 3 300 2, GET 2, GET 1, GET 3", "output": "-1 200 -1 300", "explanation": "PUT 2 (weight 3) + PUT 1 (weight 3) = 6 > 5. LRU element 1 is evicted. So GET 1 returns -1. Then PUT 3 (weight 2) + 2 (weight 3) = 5 <= 5. No eviction needed."}],
    testCases: [{"input": "5\n7\nPUT 1 100 3\nPUT 2 200 3\nGET 1\nPUT 3 300 2\nGET 2\nGET 1\nGET 3", "expectedOutput": "-1 200 -1 300", "hidden": false}, {"input": "4\n6\nPUT 1 10 2\nPUT 2 20 2\nPUT 3 30 1\nGET 1\nGET 2\nGET 3", "expectedOutput": "-1 20 30", "hidden": false}],
    starterCode: {
      python: `
class WeightedLRUCache:
    def __init__(self, capacity: int):
        pass

    def get(self, key: int) -> int:
        return -1

    def put(self, key: int, value: int, weight: int) -> None:
        pass

# I/O boilerplate
capacity = int(input())
q = int(input())
cache = WeightedLRUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    cmd = line[0]
    if cmd == "PUT":
        cache.put(int(line[1]), int(line[2]), int(line[3]))
    elif cmd == "GET":
        out.append(str(cache.get(int(line[1]))))
print(" ".join(out))
`,
      cpp: `
#include <iostream>
#include <vector>
#include <string>
using namespace std;

class WeightedLRUCache {
public:
    WeightedLRUCache(int capacity) {}
    int get(int key) { return -1; }
    void put(int key, int value, int weight) {}
};

int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        WeightedLRUCache cache(capacity);
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") {
                int key, val, wt; cin >> key >> val >> wt;
                cache.put(key, val, wt);
            } else if (cmd == "GET") {
                int key; cin >> key;
                out.push_back(cache.get(key));
            }
        }
        for (size_t i = 0; i < out.size(); i++) {
            cout << out[i] << (i + 1 < out.size() ? " " : "");
        }
        cout << "\\n";
    }
    return 0;
}
`,
      java: `
import java.util.*;

class WeightedLRUCache {
    public WeightedLRUCache(int capacity) {}
    public int get(int key) { return -1; }
    public void put(int key, int value, int weight) {}
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt();
            int q = sc.nextInt();
            WeightedLRUCache cache = new WeightedLRUCache(capacity);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) {
                    cache.put(sc.nextInt(), sc.nextInt(), sc.nextInt());
                } else if (cmd.equals("GET")) {
                    out.add(String.valueOf(cache.get(sc.nextInt())));
                }
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

void put(int key, int value, int weight) {}
int get(int key) { return -1; }

int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    int* out = malloc(q * sizeof(int));
    int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) {
            int key, val, wt; if (scanf("%d %d %d", &key, &val, &wt) != 3) break;
            put(key, val, wt);
        } else if (strcmp(cmd, "GET") == 0) {
            int key; if (scanf("%d", &key) != 1) break;
            out[outCount++] = get(key);
        }
    }
    for (int i = 0; i < outCount; i++) {
        printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    }
    printf("\\n");
    return 0;
}
`,
    }
  },
  {
    id: 'lru-m3',
    title: "LRU-2 Cache",
    difficulty: 'Medium',
    description: "Implement the LRU-2 Cache algorithm (a variant of LRU-K where K=2). Instead of tracking the time of the *last* access, track the time of the *second-to-last* access. When the cache exceeds capacity, evict the item whose second-to-last access is the oldest. If a key has been accessed only once, its second-to-last access is treated as negative infinity (which makes it a prime target for eviction; if multiple items have only one access, evict them in standard FIFO/LRU order of their first access).",
    constraints: ["1 <= capacity <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "Capacity = 2, Operations = PUT 1 10, PUT 2 20, GET 1, PUT 3 30, GET 1, GET 2, GET 3", "output": "10 10 -1 30", "explanation": "Key 1 is accessed twice (PUT, GET). Key 2 accessed once. When PUT 3 happens, key 2 is evicted since it only has 1 access."}],
    testCases: [{"input": "2\n7\nPUT 1 10\nPUT 2 20\nGET 1\nPUT 3 30\nGET 1\nGET 2\nGET 3", "expectedOutput": "10 10 -1 30", "hidden": false}, {"input": "2\n8\nPUT 1 100\nPUT 2 200\nGET 1\nGET 2\nPUT 3 300\nGET 1\nGET 2\nGET 3", "expectedOutput": "100 200 -1 200 300", "hidden": false}],
    starterCode: {
      python: `
class LRU2Cache:
    def __init__(self, capacity: int):
        pass

    def get(self, key: int) -> int:
        return -1

    def put(self, key: int, value: int) -> None:
        pass

# I/O boilerplate
capacity = int(input())
q = int(input())
cache = LRU2Cache(capacity)
out = []
for _ in range(q):
    line = input().split()
    cmd = line[0]
    if cmd == "PUT":
        cache.put(int(line[1]), int(line[2]))
    elif cmd == "GET":
        out.append(str(cache.get(int(line[1]))))
print(" ".join(out))
`,
      cpp: `
#include <iostream>
#include <vector>
#include <string>
using namespace std;

class LRU2Cache {
public:
    LRU2Cache(int capacity) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
};

int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LRU2Cache cache(capacity);
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") {
                int key, val; cin >> key >> val;
                cache.put(key, val);
            } else if (cmd == "GET") {
                int key; cin >> key;
                out.push_back(cache.get(key));
            }
        }
        for (size_t i = 0; i < out.size(); i++) {
            cout << out[i] << (i + 1 < out.size() ? " " : "");
        }
        cout << "\\n";
    }
    return 0;
}
`,
      java: `
import java.util.*;

class LRU2Cache {
    public LRU2Cache(int capacity) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt();
            int q = sc.nextInt();
            LRU2Cache cache = new LRU2Cache(capacity);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) {
                    cache.put(sc.nextInt(), sc.nextInt());
                } else if (cmd.equals("GET")) {
                    out.add(String.valueOf(cache.get(sc.nextInt())));
                }
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

void put(int key, int value) {}
int get(int key) { return -1; }

int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    int* out = malloc(q * sizeof(int));
    int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) {
            int key, val; if (scanf("%d %d", &key, &val) != 2) break;
            put(key, val);
        } else if (strcmp(cmd, "GET") == 0) {
            int key; if (scanf("%d", &key) != 1) break;
            out[outCount++] = get(key);
        }
    }
    for (int i = 0; i < outCount; i++) {
        printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    }
    printf("\\n");
    return 0;
}
`,
    }
  },
  {
    id: 'lru-m4',
    title: "LRU Cache with Eviction Callbacks",
    difficulty: 'Medium',
    description: "Implement an LRU Cache that triggers a callback on every eviction. The callback simply increments a global eviction counter. Support GET, PUT, and HISTORY commands. HISTORY returns the total number of items evicted since cache initialization.",
    constraints: ["1 <= capacity <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "Capacity = 2, Operations = PUT 1 10, PUT 2 20, PUT 3 30, HISTORY, GET 1, PUT 4 40, HISTORY", "output": "1 -1 2", "explanation": "PUT 3 evicts key 1 (callback increments counter to 1). So HISTORY returns 1. PUT 4 evicts key 2 (counter becomes 2)."}],
    testCases: [{"input": "2\n7\nPUT 1 10\nPUT 2 20\nPUT 3 30\nHISTORY\nGET 1\nPUT 4 40\nHISTORY", "expectedOutput": "1 -1 2", "hidden": false}, {"input": "1\n5\nPUT 1 100\nPUT 2 200\nHISTORY\nPUT 3 300\nHISTORY", "expectedOutput": "1 2", "hidden": false}],
    starterCode: {
      python: `
class LRUCacheWithCallbacks:
    def __init__(self, capacity: int, on_evict_callback):
        pass

    def get(self, key: int) -> int:
        return -1

    def put(self, key: int, value: int) -> None:
        pass

# I/O boilerplate
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
    cmd = line[0]
    if cmd == "PUT":
        cache.put(int(line[1]), int(line[2]))
    elif cmd == "GET":
        out.append(str(cache.get(int(line[1]))))
    elif cmd == "HISTORY":
        out.append(str(eviction_count))
print(" ".join(out))
`,
      cpp: `
#include <iostream>
#include <vector>
#include <string>
#include <functional>
using namespace std;

class LRUCacheWithCallbacks {
public:
    LRUCacheWithCallbacks(int capacity, function<void()> on_evict) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
};

int eviction_count = 0;
void my_callback() { eviction_count++; }

int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        LRUCacheWithCallbacks cache(capacity, my_callback);
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") {
                int key, val; cin >> key >> val;
                cache.put(key, val);
            } else if (cmd == "GET") {
                int key; cin >> key;
                out.push_back(cache.get(key));
            } else if (cmd == "HISTORY") {
                out.push_back(eviction_count);
            }
        }
        for (size_t i = 0; i < out.size(); i++) {
            cout << out[i] << (i + 1 < out.size() ? " " : "");
        }
        cout << "\\n";
    }
    return 0;
}
`,
      java: `
import java.util.*;

class LRUCacheWithCallbacks {
    public LRUCacheWithCallbacks(int capacity, Runnable onEvict) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
}

public class Solution {
    static int evictionCount = 0;
    static Runnable myCallback = () -> evictionCount++;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt();
            int q = sc.nextInt();
            LRUCacheWithCallbacks cache = new LRUCacheWithCallbacks(capacity, myCallback);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) {
                    cache.put(sc.nextInt(), sc.nextInt());
                } else if (cmd.equals("GET")) {
                    out.add(String.valueOf(cache.get(sc.nextInt())));
                } else if (cmd.equals("HISTORY")) {
                    out.add(String.valueOf(evictionCount));
                }
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

void put(int key, int value) {}
int get(int key) { return -1; }
int getHistoryCount() { return 0; }

int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    int* out = malloc(q * sizeof(int));
    int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) {
            int key, val; if (scanf("%d %d", &key, &val) != 2) break;
            put(key, val);
        } else if (strcmp(cmd, "GET") == 0) {
            int key; if (scanf("%d", &key) != 1) break;
            out[outCount++] = get(key);
        } else if (strcmp(cmd, "HISTORY") == 0) {
            out[outCount++] = getHistoryCount();
        }
    }
    for (int i = 0; i < outCount; i++) {
        printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    }
    printf("\\n");
    return 0;
}
`,
    }
  },
  {
    id: 'lru-m5',
    title: "Two-Queue (2Q) Cache",
    difficulty: 'Medium',
    description: "Implement the Two-Queue (2Q) Cache algorithm. Instead of a single queue, it uses: a FIFO queue `AIn` (capacity `Cin`) for new pages, a FIFO queue `AOut` (capacity `Cout`) for evicted pages, and an LRU queue `Am` (capacity `Cm`) for frequently accessed pages. Misses go to `AIn`. When evicted from `AIn`, we record page in `AOut`. On hit on `AIn` or `Am`, move to `Am`. On hit on `AOut`, promote page to `Am` (evicting from `Am` to FIFO queue or simply deleting).",
    constraints: ["1 <= Cin, Cout, Cm <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "Cin=1 Cout=1 Cm=1, Operations = PUT 1 10, PUT 2 20, GET 1, GET 2", "output": "-1 20", "explanation": "PUT 2 evicts 1 from AIn and puts 1 in AOut. GET 1 is a hit in AOut, promoting 1 to Am. GET 2 returns 20."}],
    testCases: [{"input": "1 1 1\n5\nPUT 1 10\nPUT 2 20\nGET 1\nGET 2\nGET 1", "expectedOutput": "10 20 10", "hidden": false}, {"input": "2 2 2\n6\nPUT 1 100\nPUT 2 200\nPUT 3 300\nGET 1\nGET 2\nGET 3", "expectedOutput": "100 200 300", "hidden": false}],
    starterCode: {
      python: `
class TwoQueueCache:
    def __init__(self, cin: int, cout: int, cm: int):
        pass

    def get(self, key: int) -> int:
        return -1

    def put(self, key: int, value: int) -> None:
        pass

# I/O boilerplate
cin, cout, cm = map(int, input().split())
q = int(input())
cache = TwoQueueCache(cin, cout, cm)
out = []
for _ in range(q):
    line = input().split()
    cmd = line[0]
    if cmd == "PUT":
        cache.put(int(line[1]), int(line[2]))
    elif cmd == "GET":
        out.append(str(cache.get(int(line[1]))))
print(" ".join(out))
`,
      cpp: `
#include <iostream>
#include <vector>
#include <string>
using namespace std;

class TwoQueueCache {
public:
    TwoQueueCache(int cin, int cout, int cm) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
};

int main() {
    int cin_val, cout_val, cm_val, q;
    if (cin >> cin_val >> cout_val >> cm_val >> q) {
        TwoQueueCache cache(cin_val, cout_val, cm_val);
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") {
                int key, val; cin >> key >> val;
                cache.put(key, val);
            } else if (cmd == "GET") {
                int key; cin >> key;
                out.push_back(cache.get(key));
            }
        }
        for (size_t i = 0; i < out.size(); i++) {
            cout << out[i] << (i + 1 < out.size() ? " " : "");
        }
        cout << "\\n";
    }
    return 0;
}
`,
      java: `
import java.util.*;

class TwoQueueCache {
    public TwoQueueCache(int cin, int cout, int cm) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int cin_val = sc.nextInt();
            int cout_val = sc.nextInt();
            int cm_val = sc.nextInt();
            int q = sc.nextInt();
            TwoQueueCache cache = new TwoQueueCache(cin_val, cout_val, cm_val);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) {
                    cache.put(sc.nextInt(), sc.nextInt());
                } else if (cmd.equals("GET")) {
                    out.add(String.valueOf(cache.get(sc.nextInt())));
                }
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

void put(int key, int value) {}
int get(int key) { return -1; }

int main() {
    int cin_val, cout_val, cm_val, q;
    if (scanf("%d %d %d %d", &cin_val, &cout_val, &cm_val, &q) != 4) return 0;
    int* out = malloc(q * sizeof(int));
    int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) {
            int key, val; if (scanf("%d %d", &key, &val) != 2) break;
            put(key, val);
        } else if (strcmp(cmd, "GET") == 0) {
            int key; if (scanf("%d", &key) != 1) break;
            out[outCount++] = get(key);
        }
    }
    for (int i = 0; i < outCount; i++) {
        printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    }
    printf("\\n");
    return 0;
}
`,
    }
  },
  {
    id: 'lru-h1',
    title: "Multilevel LRU Cache (L1 and L2)",
    difficulty: 'Hard',
    description: "Implement a Multilevel Cache system with an L1 Cache (capacity `C1`) and an L2 Cache (capacity `C2`). On a GET or PUT, if the key is in L1, move it to L1 head. If it is in L2, move it to L1 head (and demote L1's LRU element to L2 head, evicting L2's LRU element if L2 exceeds `C2`). If it is a miss in both, insert to L1 head (and demote L1's LRU element to L2 head if needed).",
    constraints: ["1 <= C1, C2 <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "C1 = 1, C2 = 2, Operations = PUT 1 10, PUT 2 20, PUT 3 30, GET 1, GET 2, GET 3, GET 2", "output": "10 20 30 20", "explanation": "PUT 3 demotes 2 to L2. Key 1 is also in L2. So GET 1 is a hit in L2."}],
    testCases: [{"input": "1 2\n8\nPUT 1 10\nPUT 2 20\nPUT 3 30\nGET 1\nGET 2\nGET 3\nGET 2\nGET 1", "expectedOutput": "10 20 30 20 10", "hidden": false}, {"input": "2 2\n7\nPUT 1 100\nPUT 2 200\nPUT 3 300\nGET 1\nGET 2\nGET 3\nGET 1", "expectedOutput": "100 200 300 100", "hidden": false}],
    starterCode: {
      python: `
class MultilevelCache:
    def __init__(self, c1: int, c2: int):
        pass

    def get(self, key: int) -> int:
        return -1

    def put(self, key: int, value: int) -> None:
        pass

# I/O boilerplate
c1, c2 = map(int, input().split())
q = int(input())
cache = MultilevelCache(c1, c2)
out = []
for _ in range(q):
    line = input().split()
    cmd = line[0]
    if cmd == "PUT":
        cache.put(int(line[1]), int(line[2]))
    elif cmd == "GET":
        out.append(str(cache.get(int(line[1]))))
print(" ".join(out))
`,
      cpp: `
#include <iostream>
#include <vector>
#include <string>
using namespace std;

class MultilevelCache {
public:
    MultilevelCache(int c1, int c2) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
};

int main() {
    int c1, c2, q;
    if (cin >> c1 >> c2 >> q) {
        MultilevelCache cache(c1, c2);
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") {
                int key, val; cin >> key >> val;
                cache.put(key, val);
            } else if (cmd == "GET") {
                int key; cin >> key;
                out.push_back(cache.get(key));
            }
        }
        for (size_t i = 0; i < out.size(); i++) {
            cout << out[i] << (i + 1 < out.size() ? " " : "");
        }
        cout << "\\n";
    }
    return 0;
}
`,
      java: `
import java.util.*;

class MultilevelCache {
    public MultilevelCache(int c1, int c2) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int c1 = sc.nextInt();
            int c2 = sc.nextInt();
            int q = sc.nextInt();
            MultilevelCache cache = new MultilevelCache(c1, c2);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) {
                    cache.put(sc.nextInt(), sc.nextInt());
                } else if (cmd.equals("GET")) {
                    out.add(String.valueOf(cache.get(sc.nextInt())));
                }
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

void put(int key, int value) {}
int get(int key) { return -1; }

int main() {
    int c1, c2, q;
    if (scanf("%d %d %d", &c1, &c2, &q) != 3) return 0;
    int* out = malloc(q * sizeof(int));
    int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) {
            int key, val; if (scanf("%d %d", &key, &val) != 2) break;
            put(key, val);
        } else if (strcmp(cmd, "GET") == 0) {
            int key; if (scanf("%d", &key) != 1) break;
            out[outCount++] = get(key);
        }
    }
    for (int i = 0; i < outCount; i++) {
        printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    }
    printf("\\n");
    return 0;
}
`,
    }
  },
  {
    id: 'lru-h2',
    title: "Transactional LRU Cache",
    difficulty: 'Hard',
    description: "Implement an LRU Cache with transaction support. Commands include: PUT key val, GET key, BEGIN, COMMIT, and ROLLBACK. BEGIN starts a transaction. During a transaction, PUT operations are stored in a transaction buffer. GET returns the value from the transaction buffer if it exists, otherwise from the main cache. COMMIT applies all transaction updates to the main cache in execution order. ROLLBACK discards all transaction updates.",
    constraints: ["1 <= capacity <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "Capacity = 2, Operations = PUT 1 10, BEGIN, PUT 2 20, PUT 3 30, GET 2, ROLLBACK, GET 2, PUT 2 20, GET 1", "output": "20 -1 10", "explanation": "During transaction, GET 2 retrieves 20 from tx buffer. Rollback discards 2 & 3. So GET 2 returns -1."}],
    testCases: [{"input": "2\n9\nPUT 1 10\nBEGIN\nPUT 2 20\nPUT 3 30\nGET 2\nROLLBACK\nGET 2\nPUT 2 20\nGET 1", "expectedOutput": "20 -1 10", "hidden": false}, {"input": "2\n10\nPUT 1 100\nBEGIN\nPUT 2 200\nPUT 3 300\nCOMMIT\nGET 2\nGET 3\nGET 1\nPUT 4 400\nGET 2", "expectedOutput": "200 300 -1 -1", "hidden": false}],
    starterCode: {
      python: `
class TransactionalLRUCache:
    def __init__(self, capacity: int):
        pass

    def get(self, key: int) -> int:
        return -1

    def put(self, key: int, value: int) -> None:
        pass

    def begin(self) -> None:
        pass

    def commit(self) -> None:
        pass

    def rollback(self) -> None:
        pass

# I/O boilerplate
capacity = int(input())
q = int(input())
cache = TransactionalLRUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    cmd = line[0]
    if cmd == "PUT":
        cache.put(int(line[1]), int(line[2]))
    elif cmd == "GET":
        out.append(str(cache.get(int(line[1]))))
    elif cmd == "BEGIN":
        cache.begin()
    elif cmd == "COMMIT":
        cache.commit()
    elif cmd == "ROLLBACK":
        cache.rollback()
print(" ".join(out))
`,
      cpp: `
#include <iostream>
#include <vector>
#include <string>
using namespace std;

class TransactionalLRUCache {
public:
    TransactionalLRUCache(int capacity) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
    void begin() {}
    void commit() {}
    void rollback() {}
};

int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        TransactionalLRUCache cache(capacity);
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") {
                int key, val; cin >> key >> val;
                cache.put(key, val);
            } else if (cmd == "GET") {
                int key; cin >> key;
                out.push_back(cache.get(key));
            } else if (cmd == "BEGIN") {
                cache.begin();
            } else if (cmd == "COMMIT") {
                cache.commit();
            } else if (cmd == "ROLLBACK") {
                cache.rollback();
            }
        }
        for (size_t i = 0; i < out.size(); i++) {
            cout << out[i] << (i + 1 < out.size() ? " " : "");
        }
        cout << "\\n";
    }
    return 0;
}
`,
      java: `
import java.util.*;

class TransactionalLRUCache {
    public TransactionalLRUCache(int capacity) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
    public void begin() {}
    public void commit() {}
    public void rollback() {}
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt();
            int q = sc.nextInt();
            TransactionalLRUCache cache = new TransactionalLRUCache(capacity);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) {
                    cache.put(sc.nextInt(), sc.nextInt());
                } else if (cmd.equals("GET")) {
                    out.add(String.valueOf(cache.get(sc.nextInt())));
                } else if (cmd.equals("BEGIN")) {
                    cache.begin();
                } else if (cmd.equals("COMMIT")) {
                    cache.commit();
                } else if (cmd.equals("ROLLBACK")) {
                    cache.rollback();
                }
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

void put(int key, int value) {}
int get(int key) { return -1; }
void begin() {}
void commit() {}
void rollback() {}

int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    int* out = malloc(q * sizeof(int));
    int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) {
            int key, val; if (scanf("%d %d", &key, &val) != 2) break;
            put(key, val);
        } else if (strcmp(cmd, "GET") == 0) {
            int key; if (scanf("%d", &key) != 1) break;
            out[outCount++] = get(key);
        } else if (strcmp(cmd, "BEGIN") == 0) {
            begin();
        } else if (strcmp(cmd, "COMMIT") == 0) {
            commit();
        } else if (strcmp(cmd, "ROLLBACK") == 0) {
            rollback();
        }
    }
    for (int i = 0; i < outCount; i++) {
        printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    }
    printf("\\n");
    return 0;
}
`,
    }
  },
  {
    id: 'lru-h3',
    title: "Distributed LRU Cache",
    difficulty: 'Hard',
    description: "Implement a distributed LRU cache. N nodes (0 to N-1) are placed on a consistent hashing ring of size M = 360 at positions `(node_id * 360 / N) % 360`. A key K hashes to `K % 360`. Route any PUT or GET for key K to the first node whose position is >= hash. If no node position >= hash, route to node 0. Each node has a separate LRU Cache of capacity `C`.",
    constraints: ["1 <= N <= 10", "1 <= capacity <= 100", "1 <= q <= 2000"],
    examples: [{"input": "N = 3, C = 1, Operations = PUT 10 100, PUT 40 400, PUT 130 1300, GET 10, GET 40, GET 130", "output": "-1 400 1300", "explanation": "Nodes: N0 at 0, N1 at 120, N2 at 240. Key 10 & 40 map to N1. PUT 40 evicts 10 from N1 cache. So GET 10 returns -1. Key 130 maps to N2."}],
    testCases: [{"input": "3 1\n6\nPUT 10 100\nPUT 40 400\nPUT 130 1300\nGET 10\nGET 40\nGET 130", "expectedOutput": "-1 400 1300", "hidden": false}, {"input": "2 2\n8\nPUT 5 50\nPUT 185 1850\nPUT 365 3650\nGET 5\nGET 365\nGET 185\nPUT 545 5450\nGET 5", "expectedOutput": "50 3650 1850 50", "hidden": false}],
    starterCode: {
      python: `
class DistributedLRUCache:
    def __init__(self, num_nodes: int, capacity: int):
        pass

    def get(self, key: int) -> int:
        return -1

    def put(self, key: int, value: int) -> None:
        pass

# I/O boilerplate
n, c = map(int, input().split())
q = int(input())
cache = DistributedLRUCache(n, c)
out = []
for _ in range(q):
    line = input().split()
    cmd = line[0]
    if cmd == "PUT":
        cache.put(int(line[1]), int(line[2]))
    elif cmd == "GET":
        out.append(str(cache.get(int(line[1]))))
print(" ".join(out))
`,
      cpp: `
#include <iostream>
#include <vector>
#include <string>
using namespace std;

class DistributedLRUCache {
public:
    DistributedLRUCache(int num_nodes, int capacity) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
};

int main() {
    int n, c, q;
    if (cin >> n >> c >> q) {
        DistributedLRUCache cache(n, c);
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") {
                int key, val; cin >> key >> val;
                cache.put(key, val);
            } else if (cmd == "GET") {
                int key; cin >> key;
                out.push_back(cache.get(key));
            }
        }
        for (size_t i = 0; i < out.size(); i++) {
            cout << out[i] << (i + 1 < out.size() ? " " : "");
        }
        cout << "\\n";
    }
    return 0;
}
`,
      java: `
import java.util.*;

class DistributedLRUCache {
    public DistributedLRUCache(int numNodes, int capacity) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int c = sc.nextInt();
            int q = sc.nextInt();
            DistributedLRUCache cache = new DistributedLRUCache(n, c);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) {
                    cache.put(sc.nextInt(), sc.nextInt());
                } else if (cmd.equals("GET")) {
                    out.add(String.valueOf(cache.get(sc.nextInt())));
                }
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

void put(int key, int value) {}
int get(int key) { return -1; }

int main() {
    int n, c, q;
    if (scanf("%d %d %d", &n, &c, &q) != 3) return 0;
    int* out = malloc(q * sizeof(int));
    int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) {
            int key, val; if (scanf("%d %d", &key, &val) != 2) break;
            put(key, val);
        } else if (strcmp(cmd, "GET") == 0) {
            int key; if (scanf("%d", &key) != 1) break;
            out[outCount++] = get(key);
        }
    }
    for (int i = 0; i < outCount; i++) {
        printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    }
    printf("\\n");
    return 0;
}
`,
    }
  },
  {
    id: 'lru-h4',
    title: "Priority LRU Cache",
    difficulty: 'Hard',
    description: "Implement a Priority LRU Cache with capacity `C`. When inserting a new key, it has an associated priority: `PUT key value priority`. If capacity is exceeded, evict the key with the lowest priority. If there is a tie, evict the least recently used key among those with the lowest priority. Accessing or updating a key moves it to the head (MRU) of the cache.",
    constraints: ["1 <= capacity <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "Capacity = 2, Operations = PUT 1 10 2, PUT 2 20 1, GET 1, PUT 3 30 2, GET 1, GET 2, GET 3", "output": "10 10 -1 30", "explanation": "Key 2 has priority 1, Key 1 has priority 2. When PUT 3 happens, key 2 is evicted since it has the lowest priority (1). So GET 2 returns -1."}],
    testCases: [{"input": "2\n7\nPUT 1 10 2\nPUT 2 20 1\nGET 1\nPUT 3 30 2\nGET 1\nGET 2\nGET 3", "expectedOutput": "10 10 -1 30", "hidden": false}, {"input": "2\n6\nPUT 1 100 2\nPUT 2 200 2\nGET 1\nPUT 3 300 2\nGET 1\nGET 2", "expectedOutput": "100 100 -1", "hidden": false}],
    starterCode: {
      python: `
class PriorityLRUCache:
    def __init__(self, capacity: int):
        pass

    def get(self, key: int) -> int:
        return -1

    def put(self, key: int, value: int, priority: int) -> None:
        pass

# I/O boilerplate
capacity = int(input())
q = int(input())
cache = PriorityLRUCache(capacity)
out = []
for _ in range(q):
    line = input().split()
    cmd = line[0]
    if cmd == "PUT":
        cache.put(int(line[1]), int(line[2]), int(line[3]))
    elif cmd == "GET":
        out.append(str(cache.get(int(line[1]))))
print(" ".join(out))
`,
      cpp: `
#include <iostream>
#include <vector>
#include <string>
using namespace std;

class PriorityLRUCache {
public:
    PriorityLRUCache(int capacity) {}
    int get(int key) { return -1; }
    void put(int key, int value, int priority) {}
};

int main() {
    int capacity, q;
    if (cin >> capacity >> q) {
        PriorityLRUCache cache(capacity);
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") {
                int key, val, prio; cin >> key >> val >> prio;
                cache.put(key, val, prio);
            } else if (cmd == "GET") {
                int key; cin >> key;
                out.push_back(cache.get(key));
            }
        }
        for (size_t i = 0; i < out.size(); i++) {
            cout << out[i] << (i + 1 < out.size() ? " " : "");
        }
        cout << "\\n";
    }
    return 0;
}
`,
      java: `
import java.util.*;

class PriorityLRUCache {
    public PriorityLRUCache(int capacity) {}
    public int get(int key) { return -1; }
    public void put(int key, int value, int priority) {}
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int capacity = sc.nextInt();
            int q = sc.nextInt();
            PriorityLRUCache cache = new PriorityLRUCache(capacity);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) {
                    cache.put(sc.nextInt(), sc.nextInt(), sc.nextInt());
                } else if (cmd.equals("GET")) {
                    out.add(String.valueOf(cache.get(sc.nextInt())));
                }
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

void put(int key, int value, int priority) {}
int get(int key) { return -1; }

int main() {
    int capacity, q;
    if (scanf("%d %d", &capacity, &q) != 2) return 0;
    int* out = malloc(q * sizeof(int));
    int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) {
            int key, val, prio; if (scanf("%d %d %d", &key, &val, &prio) != 3) break;
            put(key, val, prio);
        } else if (strcmp(cmd, "GET") == 0) {
            int key; if (scanf("%d", &key) != 1) break;
            out[outCount++] = get(key);
        }
    }
    for (int i = 0; i < outCount; i++) {
        printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    }
    printf("\\n");
    return 0;
}
`,
    }
  },
  {
    id: 'lru-h5',
    title: "Segmented LRU Cache (SLRU)",
    difficulty: 'Hard',
    description: "Implement the Segmented LRU (SLRU) Cache. The cache is divided into two segments: Probationary (capacity `Cp`) and Protected (capacity `Cq`). Cache misses are inserted to Probationary head (MRU). If Probationary exceeds `Cp`, evict its tail (LRU). Cache hits on Probationary keys promote them to Protected head (if Protected exceeds `Cq`, demote its tail to Probationary head, evicting Probationary tail if it exceeds `Cp`). Cache hits on Protected keys move them to Protected head.",
    constraints: ["1 <= Cp, Cq <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "Cp = 1, Cq = 1, Operations = PUT 1 10, PUT 2 20, GET 2, PUT 3 30, GET 2, GET 1, GET 3", "output": "20 20 -1 30", "explanation": "PUT 2 evicts 1. GET 2 promotes 2 to Protected. PUT 3 goes to Probationary. GET 2 is a hit in Protected. GET 1 returns -1. GET 3 promotes 3 to Protected, demoting 2 to Probationary."}],
    testCases: [{"input": "1 1\n7\nPUT 1 10\nPUT 2 20\nGET 2\nPUT 3 30\nGET 2\nGET 1\nGET 3", "expectedOutput": "20 20 -1 30", "hidden": false}, {"input": "2 2\n8\nPUT 1 100\nPUT 2 200\nGET 2\nGET 1\nPUT 3 300\nGET 3\nGET 2\nGET 1", "expectedOutput": "200 100 300 200 100", "hidden": false}],
    starterCode: {
      python: `
class SegmentedLRUCache:
    def __init__(self, cp: int, cq: int):
        pass

    def get(self, key: int) -> int:
        return -1

    def put(self, key: int, value: int) -> None:
        pass

# I/O boilerplate
cp, cq = map(int, input().split())
q = int(input())
cache = SegmentedLRUCache(cp, cq)
out = []
for _ in range(q):
    line = input().split()
    cmd = line[0]
    if cmd == "PUT":
        cache.put(int(line[1]), int(line[2]))
    elif cmd == "GET":
        out.append(str(cache.get(int(line[1]))))
print(" ".join(out))
`,
      cpp: `
#include <iostream>
#include <vector>
#include <string>
using namespace std;

class SegmentedLRUCache {
public:
    SegmentedLRUCache(int cp, int cq) {}
    int get(int key) { return -1; }
    void put(int key, int value) {}
};

int main() {
    int cp, cq, q;
    if (cin >> cp >> cq >> q) {
        SegmentedLRUCache cache(cp, cq);
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string cmd; cin >> cmd;
            if (cmd == "PUT") {
                int key, val; cin >> key >> val;
                cache.put(key, val);
            } else if (cmd == "GET") {
                int key; cin >> key;
                out.push_back(cache.get(key));
            }
        }
        for (size_t i = 0; i < out.size(); i++) {
            cout << out[i] << (i + 1 < out.size() ? " " : "");
        }
        cout << "\\n";
    }
    return 0;
}
`,
      java: `
import java.util.*;

class SegmentedLRUCache {
    public SegmentedLRUCache(int cp, int cq) {}
    public int get(int key) { return -1; }
    public void put(int key, int value) {}
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int cp = sc.nextInt();
            int cq = sc.nextInt();
            int q = sc.nextInt();
            SegmentedLRUCache cache = new SegmentedLRUCache(cp, cq);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String cmd = sc.next();
                if (cmd.equals("PUT")) {
                    cache.put(sc.nextInt(), sc.nextInt());
                } else if (cmd.equals("GET")) {
                    out.add(String.valueOf(cache.get(sc.nextInt())));
                }
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

void put(int key, int value) {}
int get(int key) { return -1; }

int main() {
    int cp, cq, q;
    if (scanf("%d %d %d", &cp, &cq, &q) != 3) return 0;
    int* out = malloc(q * sizeof(int));
    int outCount = 0;
    for (int i = 0; i < q; i++) {
        char cmd[10]; if (scanf("%s", cmd) != 1) break;
        if (strcmp(cmd, "PUT") == 0) {
            int key, val; if (scanf("%d %d", &key, &val) != 2) break;
            put(key, val);
        } else if (strcmp(cmd, "GET") == 0) {
            int key; if (scanf("%d", &key) != 1) break;
            out[outCount++] = get(key);
        }
    }
    for (int i = 0; i < outCount; i++) {
        printf("%d%s", out[i], (i + 1 < outCount) ? " " : "");
    }
    printf("\\n");
    return 0;
}
`,
    }
  }
];
