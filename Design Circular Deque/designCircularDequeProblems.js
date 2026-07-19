export const designCircularDequeProblems = [
  {
    id: "dcd-e1",
    title: "Basic Bounded Circular Deque",
    difficulty: "Easy",
    description: "Implement a bounded circular double-ended queue (deque) with a circular array and wrap-around index arithmetic.",
    constraints: ["1 <= capacity <= 1000", "1 <= q <= 2000", "0 <= value <= 1000"],
    examples: [{"input": "capacity=3, ops=[insertLast 1, insertLast 2, insertFront 3, getRear]", "output": "true true true 2"}],
    testCases: [{"input": "3 8\ninsertLast 1\ninsertLast 2\ninsertFront 3\ngetRear\nisFull\ndeleteLast\ngetRear\nisFull", "expectedOutput": "true true true 2 true true 1 false", "hidden": false}, {"input": "2 8\ninsertFront 5\ngetFront\nisEmpty\nisFull\ndeleteFront\nisEmpty\ngetFront\ndeleteFront", "expectedOutput": "true 5 false false true true -1 false", "hidden": false}],
    starterCode: {
      python: `class MyCircularDeque:
    def __init__(self, k: int):
        pass
    def insertFront(self, value: int) -> bool:
        return False
    def insertLast(self, value: int) -> bool:
        return False
    def deleteFront(self) -> bool:
        return False
    def deleteLast(self) -> bool:
        return False
    def getFront(self) -> int:
        return -1
    def getRear(self) -> int:
        return -1
    def isEmpty(self) -> bool:
        return True
    def isFull(self) -> bool:
        return False

import sys

def main():
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    cap = int(input_data[0])
    q = int(input_data[1])
    dq = MyCircularDeque(cap)
    out = []
    idx = 2
    for _ in range(q):
        if idx >= len(input_data):
            break
        op = input_data[idx]
        idx += 1
        if op == "insertFront":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertFront(val)
                out.append('true' if res else 'false')
        if op == "insertLast":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertLast(val)
                out.append('true' if res else 'false')
        elif op == "deleteFront":
            res = dq.deleteFront()
            out.append('true' if res else 'false')
        elif op == "deleteLast":
            res = dq.deleteLast()
            out.append('true' if res else 'false')
        elif op == "getFront":
            res = dq.getFront()
            out.append(str(res))
        elif op == "getRear":
            res = dq.getRear()
            out.append(str(res))
        elif op == "isEmpty":
            res = dq.isEmpty()
            out.append('true' if res else 'false')
        elif op == "isFull":
            res = dq.isFull()
            out.append('true' if res else 'false')
    print(" ".join(out))

if __name__ == '__main__':
    main()
`,
      cpp: `#include <vector>
#include <string>
using namespace std;

class MyCircularDeque {
public:
    MyCircularDeque(int k) {}
    bool insertFront(int value) { return false; }
    bool insertLast(int value) { return false; }
    bool deleteFront() { return false; }
    bool deleteLast() { return false; }
    int getFront() { return -1; }
    int getRear() { return -1; }
    bool isEmpty() { return true; }
    bool isFull() { return false; }
};

#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    int cap, q;
    if (cin >> cap >> q) {
        MyCircularDeque dq(cap);
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "insertFront") {
                    int val; cin >> val;
                    out.push_back(dq.insertFront(val) ? "true" : "false");
                }
            if (op == "insertLast") {
                    int val; cin >> val;
                    out.push_back(dq.insertLast(val) ? "true" : "false");
                }
            if (op == "deleteFront") {
                out.push_back(dq.deleteFront() ? "true" : "false");
            }
            if (op == "deleteLast") {
                out.push_back(dq.deleteLast() ? "true" : "false");
            }
            if (op == "getFront") {
                out.push_back(to_string(dq.getFront()));
            }
            if (op == "getRear") {
                out.push_back(to_string(dq.getRear()));
            }
            if (op == "isEmpty") {
                out.push_back(dq.isEmpty() ? "true" : "false");
            }
            if (op == "isFull") {
                out.push_back(dq.isFull() ? "true" : "false");
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
      java: `import java.util.*;
class MyCircularDeque {
    public MyCircularDeque(int k) {}
    public boolean insertFront(int value) { return false; }
    public boolean insertLast(int value) { return false; }
    public boolean deleteFront() { return false; }
    public boolean deleteLast() { return false; }
    public int getFront() { return -1; }
    public int getRear() { return -1; }
    public boolean isEmpty() { return true; }
    public boolean isFull() { return false; }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int cap = sc.nextInt();
            int q = sc.nextInt();
            MyCircularDeque dq = new MyCircularDeque(cap);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("insertFront")) {
                    int val = sc.nextInt();
                    out.add(dq.insertFront(val) ? "true" : "false");
                }
                if (op.equals("insertLast")) {
                    int val = sc.nextInt();
                    out.add(dq.insertLast(val) ? "true" : "false");
                }
                if (op.equals("deleteFront")) {
                    out.add(dq.deleteFront() ? "true" : "false");
                }
                if (op.equals("deleteLast")) {
                    out.add(dq.deleteLast() ? "true" : "false");
                }
                if (op.equals("getFront")) {
                    out.add(String.valueOf(dq.getFront()));
                }
                if (op.equals("getRear")) {
                    out.add(String.valueOf(dq.getRear()));
                }
                if (op.equals("isEmpty")) {
                    out.add(dq.isEmpty() ? "true" : "false");
                }
                if (op.equals("isFull")) {
                    out.add(dq.isFull() ? "true" : "false");
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
      c: `#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

typedef struct {
    int capacity;
} MyCircularDeque;

MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->capacity = k;
    return obj;
}
bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeDeleteFront(MyCircularDeque* obj) { return false; }
bool myCircularDequeDeleteLast(MyCircularDeque* obj) { return false; }
int myCircularDequeGetFront(MyCircularDeque* obj) { return -1; }
int myCircularDequeGetRear(MyCircularDeque* obj) { return -1; }
bool myCircularDequeIsEmpty(MyCircularDeque* obj) { return true; }
bool myCircularDequeIsFull(MyCircularDeque* obj) { return false; }

void myCircularDequeFree(MyCircularDeque* obj) { free(obj); }

int main() {
    int cap, q;
    if (scanf("%d %d", &cap, &q) != 2) return 0;
    MyCircularDeque* dq = myCircularDequeCreate(cap);
    char op[50];
    for (int i = 0; i < q; i++) {
        if (scanf("%s", op) != 1) break;
        if (strcmp(op, "insertFront") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertFront(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "insertLast") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertLast(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "deleteFront") == 0) {
            printf("%s ", myCircularDequeDeleteFront(dq) ? "true" : "false");
        }
        if (strcmp(op, "deleteLast") == 0) {
            printf("%s ", myCircularDequeDeleteLast(dq) ? "true" : "false");
        }
        if (strcmp(op, "getFront") == 0) {
            printf("%d ", myCircularDequeGetFront(dq));
        }
        if (strcmp(op, "getRear") == 0) {
            printf("%d ", myCircularDequeGetRear(dq));
        }
        if (strcmp(op, "isEmpty") == 0) {
            printf("%s ", myCircularDequeIsEmpty(dq) ? "true" : "false");
        }
        if (strcmp(op, "isFull") == 0) {
            printf("%s ", myCircularDequeIsFull(dq) ? "true" : "false");
        }
    }
    printf("\\n");
    myCircularDequeFree(dq);
    return 0;
}
`,
    },
  },
  {
    id: "dcd-e2",
    title: "Circular Deque - Size Query",
    difficulty: "Easy",
    description: "Implement a bounded circular deque that supports size() query returning the active element count.",
    constraints: ["1 <= capacity <= 1000", "1 <= q <= 2000"],
    examples: [{"input": "capacity=5, ops=[insertLast 10, insertFront 20, size]", "output": "true true 2"}],
    testCases: [{"input": "5 7\ninsertLast 10\ninsertFront 20\nsize\ndeleteLast\nsize\ndeleteFront\nsize", "expectedOutput": "true true 2 true 1 true 0", "hidden": false}, {"input": "3 8\ninsertLast 1\ninsertLast 2\nsize\ninsertLast 3\nsize\ninsertLast 4\nsize\nisEmpty", "expectedOutput": "true true 2 true 3 false 3 false", "hidden": false}],
    starterCode: {
      python: `class MyCircularDeque:
    def __init__(self, k: int):
        pass
    def insertFront(self, value: int) -> bool:
        return False
    def insertLast(self, value: int) -> bool:
        return False
    def deleteFront(self) -> bool:
        return False
    def deleteLast(self) -> bool:
        return False
    def getFront(self) -> int:
        return -1
    def getRear(self) -> int:
        return -1
    def isEmpty(self) -> bool:
        return True
    def isFull(self) -> bool:
        return False
    def size(self) -> int:
        return 0

import sys

def main():
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    cap = int(input_data[0])
    q = int(input_data[1])
    dq = MyCircularDeque(cap)
    out = []
    idx = 2
    for _ in range(q):
        if idx >= len(input_data):
            break
        op = input_data[idx]
        idx += 1
        if op == "insertFront":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertFront(val)
                out.append('true' if res else 'false')
        if op == "insertLast":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertLast(val)
                out.append('true' if res else 'false')
        elif op == "deleteFront":
            res = dq.deleteFront()
            out.append('true' if res else 'false')
        elif op == "deleteLast":
            res = dq.deleteLast()
            out.append('true' if res else 'false')
        elif op == "getFront":
            res = dq.getFront()
            out.append(str(res))
        elif op == "getRear":
            res = dq.getRear()
            out.append(str(res))
        elif op == "isEmpty":
            res = dq.isEmpty()
            out.append('true' if res else 'false')
        elif op == "isFull":
            res = dq.isFull()
            out.append('true' if res else 'false')
        elif op == "size":
            res = dq.size()
            out.append(str(res))
    print(" ".join(out))

if __name__ == '__main__':
    main()
`,
      cpp: `#include <vector>
#include <string>
using namespace std;

class MyCircularDeque {
public:
    MyCircularDeque(int k) {}
    bool insertFront(int value) { return false; }
    bool insertLast(int value) { return false; }
    bool deleteFront() { return false; }
    bool deleteLast() { return false; }
    int getFront() { return -1; }
    int getRear() { return -1; }
    bool isEmpty() { return true; }
    bool isFull() { return false; }
    int size() { return 0; }
};

#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    int cap, q;
    if (cin >> cap >> q) {
        MyCircularDeque dq(cap);
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "insertFront") {
                    int val; cin >> val;
                    out.push_back(dq.insertFront(val) ? "true" : "false");
                }
            if (op == "insertLast") {
                    int val; cin >> val;
                    out.push_back(dq.insertLast(val) ? "true" : "false");
                }
            if (op == "deleteFront") {
                out.push_back(dq.deleteFront() ? "true" : "false");
            }
            if (op == "deleteLast") {
                out.push_back(dq.deleteLast() ? "true" : "false");
            }
            if (op == "getFront") {
                out.push_back(to_string(dq.getFront()));
            }
            if (op == "getRear") {
                out.push_back(to_string(dq.getRear()));
            }
            if (op == "isEmpty") {
                out.push_back(dq.isEmpty() ? "true" : "false");
            }
            if (op == "isFull") {
                out.push_back(dq.isFull() ? "true" : "false");
            }
            if (op == "size") {
                out.push_back(to_string(dq.size()));
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
      java: `import java.util.*;
class MyCircularDeque {
    public MyCircularDeque(int k) {}
    public boolean insertFront(int value) { return false; }
    public boolean insertLast(int value) { return false; }
    public boolean deleteFront() { return false; }
    public boolean deleteLast() { return false; }
    public int getFront() { return -1; }
    public int getRear() { return -1; }
    public boolean isEmpty() { return true; }
    public boolean isFull() { return false; }
    public int size() { return 0; }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int cap = sc.nextInt();
            int q = sc.nextInt();
            MyCircularDeque dq = new MyCircularDeque(cap);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("insertFront")) {
                    int val = sc.nextInt();
                    out.add(dq.insertFront(val) ? "true" : "false");
                }
                if (op.equals("insertLast")) {
                    int val = sc.nextInt();
                    out.add(dq.insertLast(val) ? "true" : "false");
                }
                if (op.equals("deleteFront")) {
                    out.add(dq.deleteFront() ? "true" : "false");
                }
                if (op.equals("deleteLast")) {
                    out.add(dq.deleteLast() ? "true" : "false");
                }
                if (op.equals("getFront")) {
                    out.add(String.valueOf(dq.getFront()));
                }
                if (op.equals("getRear")) {
                    out.add(String.valueOf(dq.getRear()));
                }
                if (op.equals("isEmpty")) {
                    out.add(dq.isEmpty() ? "true" : "false");
                }
                if (op.equals("isFull")) {
                    out.add(dq.isFull() ? "true" : "false");
                }
                if (op.equals("size")) {
                    out.add(String.valueOf(dq.size()));
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
      c: `#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

typedef struct {
    int capacity;
} MyCircularDeque;

MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->capacity = k;
    return obj;
}
bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeDeleteFront(MyCircularDeque* obj) { return false; }
bool myCircularDequeDeleteLast(MyCircularDeque* obj) { return false; }
int myCircularDequeGetFront(MyCircularDeque* obj) { return -1; }
int myCircularDequeGetRear(MyCircularDeque* obj) { return -1; }
bool myCircularDequeIsEmpty(MyCircularDeque* obj) { return true; }
bool myCircularDequeIsFull(MyCircularDeque* obj) { return false; }
int myCircularDequeSize(MyCircularDeque* obj) { return 0; }

void myCircularDequeFree(MyCircularDeque* obj) { free(obj); }

int main() {
    int cap, q;
    if (scanf("%d %d", &cap, &q) != 2) return 0;
    MyCircularDeque* dq = myCircularDequeCreate(cap);
    char op[50];
    for (int i = 0; i < q; i++) {
        if (scanf("%s", op) != 1) break;
        if (strcmp(op, "insertFront") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertFront(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "insertLast") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertLast(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "deleteFront") == 0) {
            printf("%s ", myCircularDequeDeleteFront(dq) ? "true" : "false");
        }
        if (strcmp(op, "deleteLast") == 0) {
            printf("%s ", myCircularDequeDeleteLast(dq) ? "true" : "false");
        }
        if (strcmp(op, "getFront") == 0) {
            printf("%d ", myCircularDequeGetFront(dq));
        }
        if (strcmp(op, "getRear") == 0) {
            printf("%d ", myCircularDequeGetRear(dq));
        }
        if (strcmp(op, "isEmpty") == 0) {
            printf("%s ", myCircularDequeIsEmpty(dq) ? "true" : "false");
        }
        if (strcmp(op, "isFull") == 0) {
            printf("%s ", myCircularDequeIsFull(dq) ? "true" : "false");
        }
        if (strcmp(op, "size") == 0) {
            printf("%d ", myCircularDequeSize(dq));
        }
    }
    printf("\\n");
    myCircularDequeFree(dq);
    return 0;
}
`,
    },
  },
  {
    id: "dcd-e3",
    title: "Circular Deque - Clear Operation",
    difficulty: "Easy",
    description: "Implement a circular deque with clear() which resets the deque to empty state.",
    constraints: ["1 <= capacity <= 1000"],
    examples: [{"input": "capacity=4, ops=[insertLast 10, clear, isEmpty]", "output": "true true true"}],
    testCases: [{"input": "4 8\ninsertLast 10\ninsertLast 20\nisEmpty\nclear\nisEmpty\ngetFront\ngetRear\ninsertFront 30", "expectedOutput": "true true false true true -1 -1 true", "hidden": false}, {"input": "2 6\nclear\nisEmpty\ninsertLast 5\nisEmpty\nclear\nisEmpty", "expectedOutput": "true true true false true true", "hidden": false}],
    starterCode: {
      python: `class MyCircularDeque:
    def __init__(self, k: int):
        pass
    def insertFront(self, value: int) -> bool:
        return False
    def insertLast(self, value: int) -> bool:
        return False
    def deleteFront(self) -> bool:
        return False
    def deleteLast(self) -> bool:
        return False
    def getFront(self) -> int:
        return -1
    def getRear(self) -> int:
        return -1
    def isEmpty(self) -> bool:
        return True
    def isFull(self) -> bool:
        return False
    def clear(self) -> bool:
        return False

import sys

def main():
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    cap = int(input_data[0])
    q = int(input_data[1])
    dq = MyCircularDeque(cap)
    out = []
    idx = 2
    for _ in range(q):
        if idx >= len(input_data):
            break
        op = input_data[idx]
        idx += 1
        if op == "insertFront":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertFront(val)
                out.append('true' if res else 'false')
        if op == "insertLast":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertLast(val)
                out.append('true' if res else 'false')
        elif op == "deleteFront":
            res = dq.deleteFront()
            out.append('true' if res else 'false')
        elif op == "deleteLast":
            res = dq.deleteLast()
            out.append('true' if res else 'false')
        elif op == "getFront":
            res = dq.getFront()
            out.append(str(res))
        elif op == "getRear":
            res = dq.getRear()
            out.append(str(res))
        elif op == "isEmpty":
            res = dq.isEmpty()
            out.append('true' if res else 'false')
        elif op == "isFull":
            res = dq.isFull()
            out.append('true' if res else 'false')
        elif op == "clear":
            res = dq.clear()
            out.append('true' if res else 'false')
    print(" ".join(out))

if __name__ == '__main__':
    main()
`,
      cpp: `#include <vector>
#include <string>
using namespace std;

class MyCircularDeque {
public:
    MyCircularDeque(int k) {}
    bool insertFront(int value) { return false; }
    bool insertLast(int value) { return false; }
    bool deleteFront() { return false; }
    bool deleteLast() { return false; }
    int getFront() { return -1; }
    int getRear() { return -1; }
    bool isEmpty() { return true; }
    bool isFull() { return false; }
    bool clear() { return false; }
};

#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    int cap, q;
    if (cin >> cap >> q) {
        MyCircularDeque dq(cap);
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "insertFront") {
                    int val; cin >> val;
                    out.push_back(dq.insertFront(val) ? "true" : "false");
                }
            if (op == "insertLast") {
                    int val; cin >> val;
                    out.push_back(dq.insertLast(val) ? "true" : "false");
                }
            if (op == "deleteFront") {
                out.push_back(dq.deleteFront() ? "true" : "false");
            }
            if (op == "deleteLast") {
                out.push_back(dq.deleteLast() ? "true" : "false");
            }
            if (op == "getFront") {
                out.push_back(to_string(dq.getFront()));
            }
            if (op == "getRear") {
                out.push_back(to_string(dq.getRear()));
            }
            if (op == "isEmpty") {
                out.push_back(dq.isEmpty() ? "true" : "false");
            }
            if (op == "isFull") {
                out.push_back(dq.isFull() ? "true" : "false");
            }
            if (op == "clear") {
                out.push_back(dq.clear() ? "true" : "false");
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
      java: `import java.util.*;
class MyCircularDeque {
    public MyCircularDeque(int k) {}
    public boolean insertFront(int value) { return false; }
    public boolean insertLast(int value) { return false; }
    public boolean deleteFront() { return false; }
    public boolean deleteLast() { return false; }
    public int getFront() { return -1; }
    public int getRear() { return -1; }
    public boolean isEmpty() { return true; }
    public boolean isFull() { return false; }
    public boolean clear() { return false; }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int cap = sc.nextInt();
            int q = sc.nextInt();
            MyCircularDeque dq = new MyCircularDeque(cap);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("insertFront")) {
                    int val = sc.nextInt();
                    out.add(dq.insertFront(val) ? "true" : "false");
                }
                if (op.equals("insertLast")) {
                    int val = sc.nextInt();
                    out.add(dq.insertLast(val) ? "true" : "false");
                }
                if (op.equals("deleteFront")) {
                    out.add(dq.deleteFront() ? "true" : "false");
                }
                if (op.equals("deleteLast")) {
                    out.add(dq.deleteLast() ? "true" : "false");
                }
                if (op.equals("getFront")) {
                    out.add(String.valueOf(dq.getFront()));
                }
                if (op.equals("getRear")) {
                    out.add(String.valueOf(dq.getRear()));
                }
                if (op.equals("isEmpty")) {
                    out.add(dq.isEmpty() ? "true" : "false");
                }
                if (op.equals("isFull")) {
                    out.add(dq.isFull() ? "true" : "false");
                }
                if (op.equals("clear")) {
                    out.add(dq.clear() ? "true" : "false");
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
      c: `#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

typedef struct {
    int capacity;
} MyCircularDeque;

MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->capacity = k;
    return obj;
}
bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeDeleteFront(MyCircularDeque* obj) { return false; }
bool myCircularDequeDeleteLast(MyCircularDeque* obj) { return false; }
int myCircularDequeGetFront(MyCircularDeque* obj) { return -1; }
int myCircularDequeGetRear(MyCircularDeque* obj) { return -1; }
bool myCircularDequeIsEmpty(MyCircularDeque* obj) { return true; }
bool myCircularDequeIsFull(MyCircularDeque* obj) { return false; }
bool myCircularDequeClear(MyCircularDeque* obj) { return false; }

void myCircularDequeFree(MyCircularDeque* obj) { free(obj); }

int main() {
    int cap, q;
    if (scanf("%d %d", &cap, &q) != 2) return 0;
    MyCircularDeque* dq = myCircularDequeCreate(cap);
    char op[50];
    for (int i = 0; i < q; i++) {
        if (scanf("%s", op) != 1) break;
        if (strcmp(op, "insertFront") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertFront(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "insertLast") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertLast(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "deleteFront") == 0) {
            printf("%s ", myCircularDequeDeleteFront(dq) ? "true" : "false");
        }
        if (strcmp(op, "deleteLast") == 0) {
            printf("%s ", myCircularDequeDeleteLast(dq) ? "true" : "false");
        }
        if (strcmp(op, "getFront") == 0) {
            printf("%d ", myCircularDequeGetFront(dq));
        }
        if (strcmp(op, "getRear") == 0) {
            printf("%d ", myCircularDequeGetRear(dq));
        }
        if (strcmp(op, "isEmpty") == 0) {
            printf("%s ", myCircularDequeIsEmpty(dq) ? "true" : "false");
        }
        if (strcmp(op, "isFull") == 0) {
            printf("%s ", myCircularDequeIsFull(dq) ? "true" : "false");
        }
        if (strcmp(op, "clear") == 0) {
            printf("%s ", myCircularDequeClear(dq) ? "true" : "false");
        }
    }
    printf("\\n");
    myCircularDequeFree(dq);
    return 0;
}
`,
    },
  },
  {
    id: "dcd-e4",
    title: "Circular Deque - Contains Query",
    difficulty: "Easy",
    description: "Implement a circular deque that supports contains(val) to check if an element is present.",
    constraints: ["1 <= capacity <= 1000", "0 <= val <= 1000"],
    examples: [{"input": "capacity=4, ops=[insertLast 10, contains 10, contains 5]", "output": "true true false"}],
    testCases: [{"input": "4 7\ninsertLast 10\ninsertFront 20\ncontains 10\ncontains 20\ncontains 30\ndeleteFront\ncontains 20", "expectedOutput": "true true true true false true false", "hidden": false}, {"input": "2 6\ncontains 5\ninsertLast 5\ncontains 5\ndeleteLast\ncontains 5\nisEmpty", "expectedOutput": "false true true true false true", "hidden": false}],
    starterCode: {
      python: `class MyCircularDeque:
    def __init__(self, k: int):
        pass
    def insertFront(self, value: int) -> bool:
        return False
    def insertLast(self, value: int) -> bool:
        return False
    def deleteFront(self) -> bool:
        return False
    def deleteLast(self) -> bool:
        return False
    def getFront(self) -> int:
        return -1
    def getRear(self) -> int:
        return -1
    def isEmpty(self) -> bool:
        return True
    def isFull(self) -> bool:
        return False
    def contains(self, val: int) -> bool:
        return False

import sys

def main():
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    cap = int(input_data[0])
    q = int(input_data[1])
    dq = MyCircularDeque(cap)
    out = []
    idx = 2
    for _ in range(q):
        if idx >= len(input_data):
            break
        op = input_data[idx]
        idx += 1
        if op == "insertFront":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertFront(val)
                out.append('true' if res else 'false')
        if op == "insertLast":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertLast(val)
                out.append('true' if res else 'false')
        elif op == "deleteFront":
            res = dq.deleteFront()
            out.append('true' if res else 'false')
        elif op == "deleteLast":
            res = dq.deleteLast()
            out.append('true' if res else 'false')
        elif op == "getFront":
            res = dq.getFront()
            out.append(str(res))
        elif op == "getRear":
            res = dq.getRear()
            out.append(str(res))
        elif op == "isEmpty":
            res = dq.isEmpty()
            out.append('true' if res else 'false')
        elif op == "isFull":
            res = dq.isFull()
            out.append('true' if res else 'false')
        if op == "contains":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.contains(val)
                out.append('true' if res else 'false')
    print(" ".join(out))

if __name__ == '__main__':
    main()
`,
      cpp: `#include <vector>
#include <string>
using namespace std;

class MyCircularDeque {
public:
    MyCircularDeque(int k) {}
    bool insertFront(int value) { return false; }
    bool insertLast(int value) { return false; }
    bool deleteFront() { return false; }
    bool deleteLast() { return false; }
    int getFront() { return -1; }
    int getRear() { return -1; }
    bool isEmpty() { return true; }
    bool isFull() { return false; }
    bool contains(int val) { return false; }
};

#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    int cap, q;
    if (cin >> cap >> q) {
        MyCircularDeque dq(cap);
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "insertFront") {
                    int val; cin >> val;
                    out.push_back(dq.insertFront(val) ? "true" : "false");
                }
            if (op == "insertLast") {
                    int val; cin >> val;
                    out.push_back(dq.insertLast(val) ? "true" : "false");
                }
            if (op == "deleteFront") {
                out.push_back(dq.deleteFront() ? "true" : "false");
            }
            if (op == "deleteLast") {
                out.push_back(dq.deleteLast() ? "true" : "false");
            }
            if (op == "getFront") {
                out.push_back(to_string(dq.getFront()));
            }
            if (op == "getRear") {
                out.push_back(to_string(dq.getRear()));
            }
            if (op == "isEmpty") {
                out.push_back(dq.isEmpty() ? "true" : "false");
            }
            if (op == "isFull") {
                out.push_back(dq.isFull() ? "true" : "false");
            }
            if (op == "contains") {
                    int val; cin >> val;
                    out.push_back(dq.contains(val) ? "true" : "false");
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
      java: `import java.util.*;
class MyCircularDeque {
    public MyCircularDeque(int k) {}
    public boolean insertFront(int value) { return false; }
    public boolean insertLast(int value) { return false; }
    public boolean deleteFront() { return false; }
    public boolean deleteLast() { return false; }
    public int getFront() { return -1; }
    public int getRear() { return -1; }
    public boolean isEmpty() { return true; }
    public boolean isFull() { return false; }
    public boolean contains(int val) { return false; }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int cap = sc.nextInt();
            int q = sc.nextInt();
            MyCircularDeque dq = new MyCircularDeque(cap);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("insertFront")) {
                    int val = sc.nextInt();
                    out.add(dq.insertFront(val) ? "true" : "false");
                }
                if (op.equals("insertLast")) {
                    int val = sc.nextInt();
                    out.add(dq.insertLast(val) ? "true" : "false");
                }
                if (op.equals("deleteFront")) {
                    out.add(dq.deleteFront() ? "true" : "false");
                }
                if (op.equals("deleteLast")) {
                    out.add(dq.deleteLast() ? "true" : "false");
                }
                if (op.equals("getFront")) {
                    out.add(String.valueOf(dq.getFront()));
                }
                if (op.equals("getRear")) {
                    out.add(String.valueOf(dq.getRear()));
                }
                if (op.equals("isEmpty")) {
                    out.add(dq.isEmpty() ? "true" : "false");
                }
                if (op.equals("isFull")) {
                    out.add(dq.isFull() ? "true" : "false");
                }
                if (op.equals("contains")) {
                    int val = sc.nextInt();
                    out.add(dq.contains(val) ? "true" : "false");
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
      c: `#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

typedef struct {
    int capacity;
} MyCircularDeque;

MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->capacity = k;
    return obj;
}
bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeDeleteFront(MyCircularDeque* obj) { return false; }
bool myCircularDequeDeleteLast(MyCircularDeque* obj) { return false; }
int myCircularDequeGetFront(MyCircularDeque* obj) { return -1; }
int myCircularDequeGetRear(MyCircularDeque* obj) { return -1; }
bool myCircularDequeIsEmpty(MyCircularDeque* obj) { return true; }
bool myCircularDequeIsFull(MyCircularDeque* obj) { return false; }
bool myCircularDequeContains(MyCircularDeque* obj, int val) { return false; }

void myCircularDequeFree(MyCircularDeque* obj) { free(obj); }

int main() {
    int cap, q;
    if (scanf("%d %d", &cap, &q) != 2) return 0;
    MyCircularDeque* dq = myCircularDequeCreate(cap);
    char op[50];
    for (int i = 0; i < q; i++) {
        if (scanf("%s", op) != 1) break;
        if (strcmp(op, "insertFront") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertFront(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "insertLast") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertLast(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "deleteFront") == 0) {
            printf("%s ", myCircularDequeDeleteFront(dq) ? "true" : "false");
        }
        if (strcmp(op, "deleteLast") == 0) {
            printf("%s ", myCircularDequeDeleteLast(dq) ? "true" : "false");
        }
        if (strcmp(op, "getFront") == 0) {
            printf("%d ", myCircularDequeGetFront(dq));
        }
        if (strcmp(op, "getRear") == 0) {
            printf("%d ", myCircularDequeGetRear(dq));
        }
        if (strcmp(op, "isEmpty") == 0) {
            printf("%s ", myCircularDequeIsEmpty(dq) ? "true" : "false");
        }
        if (strcmp(op, "isFull") == 0) {
            printf("%s ", myCircularDequeIsFull(dq) ? "true" : "false");
        }
        if (strcmp(op, "contains") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeContains(dq, val) ? "true" : "false");
        }
    }
    printf("\\n");
    myCircularDequeFree(dq);
    return 0;
}
`,
    },
  },
  {
    id: "dcd-e5",
    title: "Circular Deque - Get Element by Index",
    difficulty: "Easy",
    description: "Implement contains(val) and get(index) supporting 0-based element indexing from the front pointer.",
    constraints: ["1 <= capacity <= 1000"],
    examples: [{"input": "capacity=5, ops=[insertLast 10, insertLast 20, insertFront 30, get 0, get 1]", "output": "true true true 30 10"}],
    testCases: [{"input": "5 8\ninsertLast 10\ninsertLast 20\ninsertFront 30\nget 0\nget 1\nget 2\nget 3\nget -1", "expectedOutput": "true true true 30 10 20 -1 -1", "hidden": false}, {"input": "2 5\ninsertLast 5\nget 0\ndeleteLast\nget 0\nisEmpty", "expectedOutput": "true 5 true -1 true", "hidden": false}],
    starterCode: {
      python: `class MyCircularDeque:
    def __init__(self, k: int):
        pass
    def insertFront(self, value: int) -> bool:
        return False
    def insertLast(self, value: int) -> bool:
        return False
    def deleteFront(self) -> bool:
        return False
    def deleteLast(self) -> bool:
        return False
    def getFront(self) -> int:
        return -1
    def getRear(self) -> int:
        return -1
    def isEmpty(self) -> bool:
        return True
    def isFull(self) -> bool:
        return False
    def get(self, index: int) -> int:
        return -1

import sys

def main():
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    cap = int(input_data[0])
    q = int(input_data[1])
    dq = MyCircularDeque(cap)
    out = []
    idx = 2
    for _ in range(q):
        if idx >= len(input_data):
            break
        op = input_data[idx]
        idx += 1
        if op == "insertFront":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertFront(val)
                out.append('true' if res else 'false')
        if op == "insertLast":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertLast(val)
                out.append('true' if res else 'false')
        elif op == "deleteFront":
            res = dq.deleteFront()
            out.append('true' if res else 'false')
        elif op == "deleteLast":
            res = dq.deleteLast()
            out.append('true' if res else 'false')
        elif op == "getFront":
            res = dq.getFront()
            out.append(str(res))
        elif op == "getRear":
            res = dq.getRear()
            out.append(str(res))
        elif op == "isEmpty":
            res = dq.isEmpty()
            out.append('true' if res else 'false')
        elif op == "isFull":
            res = dq.isFull()
            out.append('true' if res else 'false')
        if op == "get":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.get(val)
                out.append(str(res))
    print(" ".join(out))

if __name__ == '__main__':
    main()
`,
      cpp: `#include <vector>
#include <string>
using namespace std;

class MyCircularDeque {
public:
    MyCircularDeque(int k) {}
    bool insertFront(int value) { return false; }
    bool insertLast(int value) { return false; }
    bool deleteFront() { return false; }
    bool deleteLast() { return false; }
    int getFront() { return -1; }
    int getRear() { return -1; }
    bool isEmpty() { return true; }
    bool isFull() { return false; }
    int get(int index) { return -1; }
};

#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    int cap, q;
    if (cin >> cap >> q) {
        MyCircularDeque dq(cap);
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "insertFront") {
                    int val; cin >> val;
                    out.push_back(dq.insertFront(val) ? "true" : "false");
                }
            if (op == "insertLast") {
                    int val; cin >> val;
                    out.push_back(dq.insertLast(val) ? "true" : "false");
                }
            if (op == "deleteFront") {
                out.push_back(dq.deleteFront() ? "true" : "false");
            }
            if (op == "deleteLast") {
                out.push_back(dq.deleteLast() ? "true" : "false");
            }
            if (op == "getFront") {
                out.push_back(to_string(dq.getFront()));
            }
            if (op == "getRear") {
                out.push_back(to_string(dq.getRear()));
            }
            if (op == "isEmpty") {
                out.push_back(dq.isEmpty() ? "true" : "false");
            }
            if (op == "isFull") {
                out.push_back(dq.isFull() ? "true" : "false");
            }
            if (op == "get") {
                    int val; cin >> val;
                    out.push_back(to_string(dq.get(val)));
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
      java: `import java.util.*;
class MyCircularDeque {
    public MyCircularDeque(int k) {}
    public boolean insertFront(int value) { return false; }
    public boolean insertLast(int value) { return false; }
    public boolean deleteFront() { return false; }
    public boolean deleteLast() { return false; }
    public int getFront() { return -1; }
    public int getRear() { return -1; }
    public boolean isEmpty() { return true; }
    public boolean isFull() { return false; }
    public int get(int index) { return -1; }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int cap = sc.nextInt();
            int q = sc.nextInt();
            MyCircularDeque dq = new MyCircularDeque(cap);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("insertFront")) {
                    int val = sc.nextInt();
                    out.add(dq.insertFront(val) ? "true" : "false");
                }
                if (op.equals("insertLast")) {
                    int val = sc.nextInt();
                    out.add(dq.insertLast(val) ? "true" : "false");
                }
                if (op.equals("deleteFront")) {
                    out.add(dq.deleteFront() ? "true" : "false");
                }
                if (op.equals("deleteLast")) {
                    out.add(dq.deleteLast() ? "true" : "false");
                }
                if (op.equals("getFront")) {
                    out.add(String.valueOf(dq.getFront()));
                }
                if (op.equals("getRear")) {
                    out.add(String.valueOf(dq.getRear()));
                }
                if (op.equals("isEmpty")) {
                    out.add(dq.isEmpty() ? "true" : "false");
                }
                if (op.equals("isFull")) {
                    out.add(dq.isFull() ? "true" : "false");
                }
                if (op.equals("get")) {
                    int val = sc.nextInt();
                    out.add(String.valueOf(dq.get(val)));
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
      c: `#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

typedef struct {
    int capacity;
} MyCircularDeque;

MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->capacity = k;
    return obj;
}
bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeDeleteFront(MyCircularDeque* obj) { return false; }
bool myCircularDequeDeleteLast(MyCircularDeque* obj) { return false; }
int myCircularDequeGetFront(MyCircularDeque* obj) { return -1; }
int myCircularDequeGetRear(MyCircularDeque* obj) { return -1; }
bool myCircularDequeIsEmpty(MyCircularDeque* obj) { return true; }
bool myCircularDequeIsFull(MyCircularDeque* obj) { return false; }
int myCircularDequeGet(MyCircularDeque* obj, int index) { return -1; }

void myCircularDequeFree(MyCircularDeque* obj) { free(obj); }

int main() {
    int cap, q;
    if (scanf("%d %d", &cap, &q) != 2) return 0;
    MyCircularDeque* dq = myCircularDequeCreate(cap);
    char op[50];
    for (int i = 0; i < q; i++) {
        if (scanf("%s", op) != 1) break;
        if (strcmp(op, "insertFront") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertFront(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "insertLast") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertLast(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "deleteFront") == 0) {
            printf("%s ", myCircularDequeDeleteFront(dq) ? "true" : "false");
        }
        if (strcmp(op, "deleteLast") == 0) {
            printf("%s ", myCircularDequeDeleteLast(dq) ? "true" : "false");
        }
        if (strcmp(op, "getFront") == 0) {
            printf("%d ", myCircularDequeGetFront(dq));
        }
        if (strcmp(op, "getRear") == 0) {
            printf("%d ", myCircularDequeGetRear(dq));
        }
        if (strcmp(op, "isEmpty") == 0) {
            printf("%s ", myCircularDequeIsEmpty(dq) ? "true" : "false");
        }
        if (strcmp(op, "isFull") == 0) {
            printf("%s ", myCircularDequeIsFull(dq) ? "true" : "false");
        }
        if (strcmp(op, "get") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%d ", myCircularDequeGet(dq, val));
        }
    }
    printf("\\n");
    myCircularDequeFree(dq);
    return 0;
}
`,
    },
  },
  {
    id: "dcd-m1",
    title: "Circular Deque - Linked List",
    difficulty: "Medium",
    description: "Implement a Circular Deque of fixed capacity using a Doubly Linked List with sentinel nodes.",
    constraints: ["1 <= capacity <= 1000", "Time complexity: O(1) for all ops"],
    examples: [{"input": "capacity=3, ops=[insertLast 1, insertLast 2, insertFront 3, getRear]", "output": "true true true 2"}],
    testCases: [{"input": "3 8\ninsertLast 1\ninsertLast 2\ninsertFront 3\ngetRear\nisFull\ndeleteLast\ngetRear\nisFull", "expectedOutput": "true true true 2 true true 1 false", "hidden": false}, {"input": "2 8\ninsertFront 5\ngetFront\nisEmpty\nisFull\ndeleteFront\nisEmpty\ngetFront\ndeleteFront", "expectedOutput": "true 5 false false true true -1 false", "hidden": false}],
    starterCode: {
      python: `class MyCircularDeque:
    def __init__(self, k: int):
        pass
    def insertFront(self, value: int) -> bool:
        return False
    def insertLast(self, value: int) -> bool:
        return False
    def deleteFront(self) -> bool:
        return False
    def deleteLast(self) -> bool:
        return False
    def getFront(self) -> int:
        return -1
    def getRear(self) -> int:
        return -1
    def isEmpty(self) -> bool:
        return True
    def isFull(self) -> bool:
        return False

import sys

def main():
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    cap = int(input_data[0])
    q = int(input_data[1])
    dq = MyCircularDeque(cap)
    out = []
    idx = 2
    for _ in range(q):
        if idx >= len(input_data):
            break
        op = input_data[idx]
        idx += 1
        if op == "insertFront":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertFront(val)
                out.append('true' if res else 'false')
        if op == "insertLast":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertLast(val)
                out.append('true' if res else 'false')
        elif op == "deleteFront":
            res = dq.deleteFront()
            out.append('true' if res else 'false')
        elif op == "deleteLast":
            res = dq.deleteLast()
            out.append('true' if res else 'false')
        elif op == "getFront":
            res = dq.getFront()
            out.append(str(res))
        elif op == "getRear":
            res = dq.getRear()
            out.append(str(res))
        elif op == "isEmpty":
            res = dq.isEmpty()
            out.append('true' if res else 'false')
        elif op == "isFull":
            res = dq.isFull()
            out.append('true' if res else 'false')
    print(" ".join(out))

if __name__ == '__main__':
    main()
`,
      cpp: `#include <vector>
#include <string>
using namespace std;

class MyCircularDeque {
public:
    MyCircularDeque(int k) {}
    bool insertFront(int value) { return false; }
    bool insertLast(int value) { return false; }
    bool deleteFront() { return false; }
    bool deleteLast() { return false; }
    int getFront() { return -1; }
    int getRear() { return -1; }
    bool isEmpty() { return true; }
    bool isFull() { return false; }
};

#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    int cap, q;
    if (cin >> cap >> q) {
        MyCircularDeque dq(cap);
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "insertFront") {
                    int val; cin >> val;
                    out.push_back(dq.insertFront(val) ? "true" : "false");
                }
            if (op == "insertLast") {
                    int val; cin >> val;
                    out.push_back(dq.insertLast(val) ? "true" : "false");
                }
            if (op == "deleteFront") {
                out.push_back(dq.deleteFront() ? "true" : "false");
            }
            if (op == "deleteLast") {
                out.push_back(dq.deleteLast() ? "true" : "false");
            }
            if (op == "getFront") {
                out.push_back(to_string(dq.getFront()));
            }
            if (op == "getRear") {
                out.push_back(to_string(dq.getRear()));
            }
            if (op == "isEmpty") {
                out.push_back(dq.isEmpty() ? "true" : "false");
            }
            if (op == "isFull") {
                out.push_back(dq.isFull() ? "true" : "false");
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
      java: `import java.util.*;
class MyCircularDeque {
    public MyCircularDeque(int k) {}
    public boolean insertFront(int value) { return false; }
    public boolean insertLast(int value) { return false; }
    public boolean deleteFront() { return false; }
    public boolean deleteLast() { return false; }
    public int getFront() { return -1; }
    public int getRear() { return -1; }
    public boolean isEmpty() { return true; }
    public boolean isFull() { return false; }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int cap = sc.nextInt();
            int q = sc.nextInt();
            MyCircularDeque dq = new MyCircularDeque(cap);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("insertFront")) {
                    int val = sc.nextInt();
                    out.add(dq.insertFront(val) ? "true" : "false");
                }
                if (op.equals("insertLast")) {
                    int val = sc.nextInt();
                    out.add(dq.insertLast(val) ? "true" : "false");
                }
                if (op.equals("deleteFront")) {
                    out.add(dq.deleteFront() ? "true" : "false");
                }
                if (op.equals("deleteLast")) {
                    out.add(dq.deleteLast() ? "true" : "false");
                }
                if (op.equals("getFront")) {
                    out.add(String.valueOf(dq.getFront()));
                }
                if (op.equals("getRear")) {
                    out.add(String.valueOf(dq.getRear()));
                }
                if (op.equals("isEmpty")) {
                    out.add(dq.isEmpty() ? "true" : "false");
                }
                if (op.equals("isFull")) {
                    out.add(dq.isFull() ? "true" : "false");
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
      c: `#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

typedef struct {
    int capacity;
} MyCircularDeque;

MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->capacity = k;
    return obj;
}
bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeDeleteFront(MyCircularDeque* obj) { return false; }
bool myCircularDequeDeleteLast(MyCircularDeque* obj) { return false; }
int myCircularDequeGetFront(MyCircularDeque* obj) { return -1; }
int myCircularDequeGetRear(MyCircularDeque* obj) { return -1; }
bool myCircularDequeIsEmpty(MyCircularDeque* obj) { return true; }
bool myCircularDequeIsFull(MyCircularDeque* obj) { return false; }

void myCircularDequeFree(MyCircularDeque* obj) { free(obj); }

int main() {
    int cap, q;
    if (scanf("%d %d", &cap, &q) != 2) return 0;
    MyCircularDeque* dq = myCircularDequeCreate(cap);
    char op[50];
    for (int i = 0; i < q; i++) {
        if (scanf("%s", op) != 1) break;
        if (strcmp(op, "insertFront") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertFront(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "insertLast") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertLast(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "deleteFront") == 0) {
            printf("%s ", myCircularDequeDeleteFront(dq) ? "true" : "false");
        }
        if (strcmp(op, "deleteLast") == 0) {
            printf("%s ", myCircularDequeDeleteLast(dq) ? "true" : "false");
        }
        if (strcmp(op, "getFront") == 0) {
            printf("%d ", myCircularDequeGetFront(dq));
        }
        if (strcmp(op, "getRear") == 0) {
            printf("%d ", myCircularDequeGetRear(dq));
        }
        if (strcmp(op, "isEmpty") == 0) {
            printf("%s ", myCircularDequeIsEmpty(dq) ? "true" : "false");
        }
        if (strcmp(op, "isFull") == 0) {
            printf("%s ", myCircularDequeIsFull(dq) ? "true" : "false");
        }
    }
    printf("\\n");
    myCircularDequeFree(dq);
    return 0;
}
`,
    },
  },
  {
    id: "dcd-m2",
    title: "Dynamically Resizing Circular Deque",
    difficulty: "Medium",
    description: "Design a circular deque that dynamically doubles its capacity when inserts are called at capacity limits. isFull should return false.",
    constraints: ["Initial capacity >= 1", "Automatically double capacity when full"],
    examples: [{"input": "capacity=2, ops=[insertLast 1, insertLast 2, insertLast 3, getRear]", "output": "true true true 3"}],
    testCases: [{"input": "2 8\ninsertLast 1\ninsertLast 2\ninsertLast 3\ngetFront\ngetRear\nisFull\nisEmpty\ndeleteFront", "expectedOutput": "true true true 1 3 false false true", "hidden": false}, {"input": "1 8\ninsertFront 10\ninsertFront 20\ninsertLast 30\ngetFront\ngetRear\ndeleteLast\ngetRear\nisFull", "expectedOutput": "true true true 20 30 true 10 false", "hidden": false}],
    starterCode: {
      python: `class MyCircularDeque:
    def __init__(self, k: int):
        pass
    def insertFront(self, value: int) -> bool:
        return False
    def insertLast(self, value: int) -> bool:
        return False
    def deleteFront(self) -> bool:
        return False
    def deleteLast(self) -> bool:
        return False
    def getFront(self) -> int:
        return -1
    def getRear(self) -> int:
        return -1
    def isEmpty(self) -> bool:
        return True
    def isFull(self) -> bool:
        return False

import sys

def main():
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    cap = int(input_data[0])
    q = int(input_data[1])
    dq = MyCircularDeque(cap)
    out = []
    idx = 2
    for _ in range(q):
        if idx >= len(input_data):
            break
        op = input_data[idx]
        idx += 1
        if op == "insertFront":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertFront(val)
                out.append('true' if res else 'false')
        if op == "insertLast":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertLast(val)
                out.append('true' if res else 'false')
        elif op == "deleteFront":
            res = dq.deleteFront()
            out.append('true' if res else 'false')
        elif op == "deleteLast":
            res = dq.deleteLast()
            out.append('true' if res else 'false')
        elif op == "getFront":
            res = dq.getFront()
            out.append(str(res))
        elif op == "getRear":
            res = dq.getRear()
            out.append(str(res))
        elif op == "isEmpty":
            res = dq.isEmpty()
            out.append('true' if res else 'false')
        elif op == "isFull":
            res = dq.isFull()
            out.append('true' if res else 'false')
    print(" ".join(out))

if __name__ == '__main__':
    main()
`,
      cpp: `#include <vector>
#include <string>
using namespace std;

class MyCircularDeque {
public:
    MyCircularDeque(int k) {}
    bool insertFront(int value) { return false; }
    bool insertLast(int value) { return false; }
    bool deleteFront() { return false; }
    bool deleteLast() { return false; }
    int getFront() { return -1; }
    int getRear() { return -1; }
    bool isEmpty() { return true; }
    bool isFull() { return false; }
};

#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    int cap, q;
    if (cin >> cap >> q) {
        MyCircularDeque dq(cap);
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "insertFront") {
                    int val; cin >> val;
                    out.push_back(dq.insertFront(val) ? "true" : "false");
                }
            if (op == "insertLast") {
                    int val; cin >> val;
                    out.push_back(dq.insertLast(val) ? "true" : "false");
                }
            if (op == "deleteFront") {
                out.push_back(dq.deleteFront() ? "true" : "false");
            }
            if (op == "deleteLast") {
                out.push_back(dq.deleteLast() ? "true" : "false");
            }
            if (op == "getFront") {
                out.push_back(to_string(dq.getFront()));
            }
            if (op == "getRear") {
                out.push_back(to_string(dq.getRear()));
            }
            if (op == "isEmpty") {
                out.push_back(dq.isEmpty() ? "true" : "false");
            }
            if (op == "isFull") {
                out.push_back(dq.isFull() ? "true" : "false");
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
      java: `import java.util.*;
class MyCircularDeque {
    public MyCircularDeque(int k) {}
    public boolean insertFront(int value) { return false; }
    public boolean insertLast(int value) { return false; }
    public boolean deleteFront() { return false; }
    public boolean deleteLast() { return false; }
    public int getFront() { return -1; }
    public int getRear() { return -1; }
    public boolean isEmpty() { return true; }
    public boolean isFull() { return false; }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int cap = sc.nextInt();
            int q = sc.nextInt();
            MyCircularDeque dq = new MyCircularDeque(cap);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("insertFront")) {
                    int val = sc.nextInt();
                    out.add(dq.insertFront(val) ? "true" : "false");
                }
                if (op.equals("insertLast")) {
                    int val = sc.nextInt();
                    out.add(dq.insertLast(val) ? "true" : "false");
                }
                if (op.equals("deleteFront")) {
                    out.add(dq.deleteFront() ? "true" : "false");
                }
                if (op.equals("deleteLast")) {
                    out.add(dq.deleteLast() ? "true" : "false");
                }
                if (op.equals("getFront")) {
                    out.add(String.valueOf(dq.getFront()));
                }
                if (op.equals("getRear")) {
                    out.add(String.valueOf(dq.getRear()));
                }
                if (op.equals("isEmpty")) {
                    out.add(dq.isEmpty() ? "true" : "false");
                }
                if (op.equals("isFull")) {
                    out.add(dq.isFull() ? "true" : "false");
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
      c: `#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

typedef struct {
    int capacity;
} MyCircularDeque;

MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->capacity = k;
    return obj;
}
bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeDeleteFront(MyCircularDeque* obj) { return false; }
bool myCircularDequeDeleteLast(MyCircularDeque* obj) { return false; }
int myCircularDequeGetFront(MyCircularDeque* obj) { return -1; }
int myCircularDequeGetRear(MyCircularDeque* obj) { return -1; }
bool myCircularDequeIsEmpty(MyCircularDeque* obj) { return true; }
bool myCircularDequeIsFull(MyCircularDeque* obj) { return false; }

void myCircularDequeFree(MyCircularDeque* obj) { free(obj); }

int main() {
    int cap, q;
    if (scanf("%d %d", &cap, &q) != 2) return 0;
    MyCircularDeque* dq = myCircularDequeCreate(cap);
    char op[50];
    for (int i = 0; i < q; i++) {
        if (scanf("%s", op) != 1) break;
        if (strcmp(op, "insertFront") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertFront(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "insertLast") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertLast(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "deleteFront") == 0) {
            printf("%s ", myCircularDequeDeleteFront(dq) ? "true" : "false");
        }
        if (strcmp(op, "deleteLast") == 0) {
            printf("%s ", myCircularDequeDeleteLast(dq) ? "true" : "false");
        }
        if (strcmp(op, "getFront") == 0) {
            printf("%d ", myCircularDequeGetFront(dq));
        }
        if (strcmp(op, "getRear") == 0) {
            printf("%d ", myCircularDequeGetRear(dq));
        }
        if (strcmp(op, "isEmpty") == 0) {
            printf("%s ", myCircularDequeIsEmpty(dq) ? "true" : "false");
        }
        if (strcmp(op, "isFull") == 0) {
            printf("%s ", myCircularDequeIsFull(dq) ? "true" : "false");
        }
    }
    printf("\\n");
    myCircularDequeFree(dq);
    return 0;
}
`,
    },
  },
  {
    id: "dcd-m3",
    title: "Circular Deque - Reverse",
    difficulty: "Medium",
    description: "Implement a reverse() operation that reverses all active elements of the circular deque in-place.",
    constraints: ["1 <= capacity <= 1000", "In-place reversing logic"],
    examples: [{"input": "capacity=5, ops=[insertLast 10, insertLast 20, reverse, getFront]", "output": "true true true 20"}],
    testCases: [{"input": "5 8\ninsertLast 10\ninsertLast 20\ninsertLast 30\nreverse\ngetFront\ngetRear\ndeleteFront\ngetFront", "expectedOutput": "true true true true 30 10 true 20", "hidden": false}, {"input": "3 8\ninsertFront 1\ninsertLast 2\nreverse\ngetFront\ngetRear\nreverse\ngetFront\ngetRear", "expectedOutput": "true true true 2 1 true 1 2", "hidden": false}],
    starterCode: {
      python: `class MyCircularDeque:
    def __init__(self, k: int):
        pass
    def insertFront(self, value: int) -> bool:
        return False
    def insertLast(self, value: int) -> bool:
        return False
    def deleteFront(self) -> bool:
        return False
    def deleteLast(self) -> bool:
        return False
    def getFront(self) -> int:
        return -1
    def getRear(self) -> int:
        return -1
    def isEmpty(self) -> bool:
        return True
    def isFull(self) -> bool:
        return False
    def reverse(self) -> bool:
        return False

import sys

def main():
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    cap = int(input_data[0])
    q = int(input_data[1])
    dq = MyCircularDeque(cap)
    out = []
    idx = 2
    for _ in range(q):
        if idx >= len(input_data):
            break
        op = input_data[idx]
        idx += 1
        if op == "insertFront":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertFront(val)
                out.append('true' if res else 'false')
        if op == "insertLast":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertLast(val)
                out.append('true' if res else 'false')
        elif op == "deleteFront":
            res = dq.deleteFront()
            out.append('true' if res else 'false')
        elif op == "deleteLast":
            res = dq.deleteLast()
            out.append('true' if res else 'false')
        elif op == "getFront":
            res = dq.getFront()
            out.append(str(res))
        elif op == "getRear":
            res = dq.getRear()
            out.append(str(res))
        elif op == "isEmpty":
            res = dq.isEmpty()
            out.append('true' if res else 'false')
        elif op == "isFull":
            res = dq.isFull()
            out.append('true' if res else 'false')
        elif op == "reverse":
            res = dq.reverse()
            out.append('true' if res else 'false')
    print(" ".join(out))

if __name__ == '__main__':
    main()
`,
      cpp: `#include <vector>
#include <string>
using namespace std;

class MyCircularDeque {
public:
    MyCircularDeque(int k) {}
    bool insertFront(int value) { return false; }
    bool insertLast(int value) { return false; }
    bool deleteFront() { return false; }
    bool deleteLast() { return false; }
    int getFront() { return -1; }
    int getRear() { return -1; }
    bool isEmpty() { return true; }
    bool isFull() { return false; }
    bool reverse() { return false; }
};

#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    int cap, q;
    if (cin >> cap >> q) {
        MyCircularDeque dq(cap);
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "insertFront") {
                    int val; cin >> val;
                    out.push_back(dq.insertFront(val) ? "true" : "false");
                }
            if (op == "insertLast") {
                    int val; cin >> val;
                    out.push_back(dq.insertLast(val) ? "true" : "false");
                }
            if (op == "deleteFront") {
                out.push_back(dq.deleteFront() ? "true" : "false");
            }
            if (op == "deleteLast") {
                out.push_back(dq.deleteLast() ? "true" : "false");
            }
            if (op == "getFront") {
                out.push_back(to_string(dq.getFront()));
            }
            if (op == "getRear") {
                out.push_back(to_string(dq.getRear()));
            }
            if (op == "isEmpty") {
                out.push_back(dq.isEmpty() ? "true" : "false");
            }
            if (op == "isFull") {
                out.push_back(dq.isFull() ? "true" : "false");
            }
            if (op == "reverse") {
                out.push_back(dq.reverse() ? "true" : "false");
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
      java: `import java.util.*;
class MyCircularDeque {
    public MyCircularDeque(int k) {}
    public boolean insertFront(int value) { return false; }
    public boolean insertLast(int value) { return false; }
    public boolean deleteFront() { return false; }
    public boolean deleteLast() { return false; }
    public int getFront() { return -1; }
    public int getRear() { return -1; }
    public boolean isEmpty() { return true; }
    public boolean isFull() { return false; }
    public boolean reverse() { return false; }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int cap = sc.nextInt();
            int q = sc.nextInt();
            MyCircularDeque dq = new MyCircularDeque(cap);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("insertFront")) {
                    int val = sc.nextInt();
                    out.add(dq.insertFront(val) ? "true" : "false");
                }
                if (op.equals("insertLast")) {
                    int val = sc.nextInt();
                    out.add(dq.insertLast(val) ? "true" : "false");
                }
                if (op.equals("deleteFront")) {
                    out.add(dq.deleteFront() ? "true" : "false");
                }
                if (op.equals("deleteLast")) {
                    out.add(dq.deleteLast() ? "true" : "false");
                }
                if (op.equals("getFront")) {
                    out.add(String.valueOf(dq.getFront()));
                }
                if (op.equals("getRear")) {
                    out.add(String.valueOf(dq.getRear()));
                }
                if (op.equals("isEmpty")) {
                    out.add(dq.isEmpty() ? "true" : "false");
                }
                if (op.equals("isFull")) {
                    out.add(dq.isFull() ? "true" : "false");
                }
                if (op.equals("reverse")) {
                    out.add(dq.reverse() ? "true" : "false");
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
      c: `#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

typedef struct {
    int capacity;
} MyCircularDeque;

MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->capacity = k;
    return obj;
}
bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeDeleteFront(MyCircularDeque* obj) { return false; }
bool myCircularDequeDeleteLast(MyCircularDeque* obj) { return false; }
int myCircularDequeGetFront(MyCircularDeque* obj) { return -1; }
int myCircularDequeGetRear(MyCircularDeque* obj) { return -1; }
bool myCircularDequeIsEmpty(MyCircularDeque* obj) { return true; }
bool myCircularDequeIsFull(MyCircularDeque* obj) { return false; }
bool myCircularDequeReverse(MyCircularDeque* obj) { return false; }

void myCircularDequeFree(MyCircularDeque* obj) { free(obj); }

int main() {
    int cap, q;
    if (scanf("%d %d", &cap, &q) != 2) return 0;
    MyCircularDeque* dq = myCircularDequeCreate(cap);
    char op[50];
    for (int i = 0; i < q; i++) {
        if (scanf("%s", op) != 1) break;
        if (strcmp(op, "insertFront") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertFront(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "insertLast") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertLast(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "deleteFront") == 0) {
            printf("%s ", myCircularDequeDeleteFront(dq) ? "true" : "false");
        }
        if (strcmp(op, "deleteLast") == 0) {
            printf("%s ", myCircularDequeDeleteLast(dq) ? "true" : "false");
        }
        if (strcmp(op, "getFront") == 0) {
            printf("%d ", myCircularDequeGetFront(dq));
        }
        if (strcmp(op, "getRear") == 0) {
            printf("%d ", myCircularDequeGetRear(dq));
        }
        if (strcmp(op, "isEmpty") == 0) {
            printf("%s ", myCircularDequeIsEmpty(dq) ? "true" : "false");
        }
        if (strcmp(op, "isFull") == 0) {
            printf("%s ", myCircularDequeIsFull(dq) ? "true" : "false");
        }
        if (strcmp(op, "reverse") == 0) {
            printf("%s ", myCircularDequeReverse(dq) ? "true" : "false");
        }
    }
    printf("\\n");
    myCircularDequeFree(dq);
    return 0;
}
`,
    },
  },
  {
    id: "dcd-m4",
    title: "Circular Deque - Rotate",
    difficulty: "Medium",
    description: "Implement rotate(k) rotating elements k steps clockwise (if k > 0) or counter-clockwise (if k < 0).",
    constraints: ["-10^9 <= k <= 10^9", "O(min(abs(k)%size, size)) time complexity"],
    examples: [{"input": "capacity=4, ops=[insertLast 1, insertLast 2, insertLast 3, rotate 2, getFront]", "output": "true true true true 2"}],
    testCases: [{"input": "5 8\ninsertLast 10\ninsertLast 20\ninsertLast 30\nrotate 1\ngetFront\ngetRear\nrotate -1\ngetFront", "expectedOutput": "true true true true 30 20 true 10", "hidden": false}, {"input": "4 10\ninsertLast 1\ninsertLast 2\ninsertLast 3\ninsertLast 4\nrotate 2\ngetFront\ngetRear\nrotate -5\ngetFront\ngetRear", "expectedOutput": "true true true true true 3 2 true 4 3", "hidden": false}],
    starterCode: {
      python: `class MyCircularDeque:
    def __init__(self, k: int):
        pass
    def insertFront(self, value: int) -> bool:
        return False
    def insertLast(self, value: int) -> bool:
        return False
    def deleteFront(self) -> bool:
        return False
    def deleteLast(self) -> bool:
        return False
    def getFront(self) -> int:
        return -1
    def getRear(self) -> int:
        return -1
    def isEmpty(self) -> bool:
        return True
    def isFull(self) -> bool:
        return False
    def rotate(self, k: int) -> bool:
        return False

import sys

def main():
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    cap = int(input_data[0])
    q = int(input_data[1])
    dq = MyCircularDeque(cap)
    out = []
    idx = 2
    for _ in range(q):
        if idx >= len(input_data):
            break
        op = input_data[idx]
        idx += 1
        if op == "insertFront":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertFront(val)
                out.append('true' if res else 'false')
        if op == "insertLast":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertLast(val)
                out.append('true' if res else 'false')
        elif op == "deleteFront":
            res = dq.deleteFront()
            out.append('true' if res else 'false')
        elif op == "deleteLast":
            res = dq.deleteLast()
            out.append('true' if res else 'false')
        elif op == "getFront":
            res = dq.getFront()
            out.append(str(res))
        elif op == "getRear":
            res = dq.getRear()
            out.append(str(res))
        elif op == "isEmpty":
            res = dq.isEmpty()
            out.append('true' if res else 'false')
        elif op == "isFull":
            res = dq.isFull()
            out.append('true' if res else 'false')
        if op == "rotate":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.rotate(val)
                out.append('true' if res else 'false')
    print(" ".join(out))

if __name__ == '__main__':
    main()
`,
      cpp: `#include <vector>
#include <string>
using namespace std;

class MyCircularDeque {
public:
    MyCircularDeque(int k) {}
    bool insertFront(int value) { return false; }
    bool insertLast(int value) { return false; }
    bool deleteFront() { return false; }
    bool deleteLast() { return false; }
    int getFront() { return -1; }
    int getRear() { return -1; }
    bool isEmpty() { return true; }
    bool isFull() { return false; }
    bool rotate(int k) { return false; }
};

#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    int cap, q;
    if (cin >> cap >> q) {
        MyCircularDeque dq(cap);
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "insertFront") {
                    int val; cin >> val;
                    out.push_back(dq.insertFront(val) ? "true" : "false");
                }
            if (op == "insertLast") {
                    int val; cin >> val;
                    out.push_back(dq.insertLast(val) ? "true" : "false");
                }
            if (op == "deleteFront") {
                out.push_back(dq.deleteFront() ? "true" : "false");
            }
            if (op == "deleteLast") {
                out.push_back(dq.deleteLast() ? "true" : "false");
            }
            if (op == "getFront") {
                out.push_back(to_string(dq.getFront()));
            }
            if (op == "getRear") {
                out.push_back(to_string(dq.getRear()));
            }
            if (op == "isEmpty") {
                out.push_back(dq.isEmpty() ? "true" : "false");
            }
            if (op == "isFull") {
                out.push_back(dq.isFull() ? "true" : "false");
            }
            if (op == "rotate") {
                    int val; cin >> val;
                    out.push_back(dq.rotate(val) ? "true" : "false");
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
      java: `import java.util.*;
class MyCircularDeque {
    public MyCircularDeque(int k) {}
    public boolean insertFront(int value) { return false; }
    public boolean insertLast(int value) { return false; }
    public boolean deleteFront() { return false; }
    public boolean deleteLast() { return false; }
    public int getFront() { return -1; }
    public int getRear() { return -1; }
    public boolean isEmpty() { return true; }
    public boolean isFull() { return false; }
    public boolean rotate(int k) { return false; }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int cap = sc.nextInt();
            int q = sc.nextInt();
            MyCircularDeque dq = new MyCircularDeque(cap);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("insertFront")) {
                    int val = sc.nextInt();
                    out.add(dq.insertFront(val) ? "true" : "false");
                }
                if (op.equals("insertLast")) {
                    int val = sc.nextInt();
                    out.add(dq.insertLast(val) ? "true" : "false");
                }
                if (op.equals("deleteFront")) {
                    out.add(dq.deleteFront() ? "true" : "false");
                }
                if (op.equals("deleteLast")) {
                    out.add(dq.deleteLast() ? "true" : "false");
                }
                if (op.equals("getFront")) {
                    out.add(String.valueOf(dq.getFront()));
                }
                if (op.equals("getRear")) {
                    out.add(String.valueOf(dq.getRear()));
                }
                if (op.equals("isEmpty")) {
                    out.add(dq.isEmpty() ? "true" : "false");
                }
                if (op.equals("isFull")) {
                    out.add(dq.isFull() ? "true" : "false");
                }
                if (op.equals("rotate")) {
                    int val = sc.nextInt();
                    out.add(dq.rotate(val) ? "true" : "false");
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
      c: `#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

typedef struct {
    int capacity;
} MyCircularDeque;

MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->capacity = k;
    return obj;
}
bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeDeleteFront(MyCircularDeque* obj) { return false; }
bool myCircularDequeDeleteLast(MyCircularDeque* obj) { return false; }
int myCircularDequeGetFront(MyCircularDeque* obj) { return -1; }
int myCircularDequeGetRear(MyCircularDeque* obj) { return -1; }
bool myCircularDequeIsEmpty(MyCircularDeque* obj) { return true; }
bool myCircularDequeIsFull(MyCircularDeque* obj) { return false; }
bool myCircularDequeRotate(MyCircularDeque* obj, int k) { return false; }

void myCircularDequeFree(MyCircularDeque* obj) { free(obj); }

int main() {
    int cap, q;
    if (scanf("%d %d", &cap, &q) != 2) return 0;
    MyCircularDeque* dq = myCircularDequeCreate(cap);
    char op[50];
    for (int i = 0; i < q; i++) {
        if (scanf("%s", op) != 1) break;
        if (strcmp(op, "insertFront") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertFront(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "insertLast") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertLast(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "deleteFront") == 0) {
            printf("%s ", myCircularDequeDeleteFront(dq) ? "true" : "false");
        }
        if (strcmp(op, "deleteLast") == 0) {
            printf("%s ", myCircularDequeDeleteLast(dq) ? "true" : "false");
        }
        if (strcmp(op, "getFront") == 0) {
            printf("%d ", myCircularDequeGetFront(dq));
        }
        if (strcmp(op, "getRear") == 0) {
            printf("%d ", myCircularDequeGetRear(dq));
        }
        if (strcmp(op, "isEmpty") == 0) {
            printf("%s ", myCircularDequeIsEmpty(dq) ? "true" : "false");
        }
        if (strcmp(op, "isFull") == 0) {
            printf("%s ", myCircularDequeIsFull(dq) ? "true" : "false");
        }
        if (strcmp(op, "rotate") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeRotate(dq, val) ? "true" : "false");
        }
    }
    printf("\\n");
    myCircularDequeFree(dq);
    return 0;
}
`,
    },
  },
  {
    id: "dcd-m5",
    title: "Circular Deque - O(1) Sum",
    difficulty: "Medium",
    description: "Maintain the sum of all elements currently inside the circular deque in O(1) time complexity.",
    constraints: ["1 <= capacity <= 1000", "Must run sum() in O(1) time"],
    examples: [{"input": "capacity=5, ops=[insertLast 10, insertFront 20, sum]", "output": "true true 30"}],
    testCases: [{"input": "5 7\ninsertLast 10\ninsertFront 20\nsum\ndeleteLast\nsum\ndeleteFront\nsum", "expectedOutput": "true true 30 true 20 true 0", "hidden": false}, {"input": "3 8\ninsertLast 5\ninsertLast 15\nsum\ninsertLast 25\nsum\ndeleteFront\nsum\nisEmpty", "expectedOutput": "true true 20 true 45 true 40 false", "hidden": false}],
    starterCode: {
      python: `class MyCircularDeque:
    def __init__(self, k: int):
        pass
    def insertFront(self, value: int) -> bool:
        return False
    def insertLast(self, value: int) -> bool:
        return False
    def deleteFront(self) -> bool:
        return False
    def deleteLast(self) -> bool:
        return False
    def getFront(self) -> int:
        return -1
    def getRear(self) -> int:
        return -1
    def isEmpty(self) -> bool:
        return True
    def isFull(self) -> bool:
        return False
    def sum(self) -> int:
        return 0

import sys

def main():
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    cap = int(input_data[0])
    q = int(input_data[1])
    dq = MyCircularDeque(cap)
    out = []
    idx = 2
    for _ in range(q):
        if idx >= len(input_data):
            break
        op = input_data[idx]
        idx += 1
        if op == "insertFront":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertFront(val)
                out.append('true' if res else 'false')
        if op == "insertLast":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertLast(val)
                out.append('true' if res else 'false')
        elif op == "deleteFront":
            res = dq.deleteFront()
            out.append('true' if res else 'false')
        elif op == "deleteLast":
            res = dq.deleteLast()
            out.append('true' if res else 'false')
        elif op == "getFront":
            res = dq.getFront()
            out.append(str(res))
        elif op == "getRear":
            res = dq.getRear()
            out.append(str(res))
        elif op == "isEmpty":
            res = dq.isEmpty()
            out.append('true' if res else 'false')
        elif op == "isFull":
            res = dq.isFull()
            out.append('true' if res else 'false')
        elif op == "sum":
            res = dq.sum()
            out.append(str(res))
    print(" ".join(out))

if __name__ == '__main__':
    main()
`,
      cpp: `#include <vector>
#include <string>
using namespace std;

class MyCircularDeque {
public:
    MyCircularDeque(int k) {}
    bool insertFront(int value) { return false; }
    bool insertLast(int value) { return false; }
    bool deleteFront() { return false; }
    bool deleteLast() { return false; }
    int getFront() { return -1; }
    int getRear() { return -1; }
    bool isEmpty() { return true; }
    bool isFull() { return false; }
    int sum() { return 0; }
};

#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    int cap, q;
    if (cin >> cap >> q) {
        MyCircularDeque dq(cap);
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "insertFront") {
                    int val; cin >> val;
                    out.push_back(dq.insertFront(val) ? "true" : "false");
                }
            if (op == "insertLast") {
                    int val; cin >> val;
                    out.push_back(dq.insertLast(val) ? "true" : "false");
                }
            if (op == "deleteFront") {
                out.push_back(dq.deleteFront() ? "true" : "false");
            }
            if (op == "deleteLast") {
                out.push_back(dq.deleteLast() ? "true" : "false");
            }
            if (op == "getFront") {
                out.push_back(to_string(dq.getFront()));
            }
            if (op == "getRear") {
                out.push_back(to_string(dq.getRear()));
            }
            if (op == "isEmpty") {
                out.push_back(dq.isEmpty() ? "true" : "false");
            }
            if (op == "isFull") {
                out.push_back(dq.isFull() ? "true" : "false");
            }
            if (op == "sum") {
                out.push_back(to_string(dq.sum()));
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
      java: `import java.util.*;
class MyCircularDeque {
    public MyCircularDeque(int k) {}
    public boolean insertFront(int value) { return false; }
    public boolean insertLast(int value) { return false; }
    public boolean deleteFront() { return false; }
    public boolean deleteLast() { return false; }
    public int getFront() { return -1; }
    public int getRear() { return -1; }
    public boolean isEmpty() { return true; }
    public boolean isFull() { return false; }
    public int sum() { return 0; }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int cap = sc.nextInt();
            int q = sc.nextInt();
            MyCircularDeque dq = new MyCircularDeque(cap);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("insertFront")) {
                    int val = sc.nextInt();
                    out.add(dq.insertFront(val) ? "true" : "false");
                }
                if (op.equals("insertLast")) {
                    int val = sc.nextInt();
                    out.add(dq.insertLast(val) ? "true" : "false");
                }
                if (op.equals("deleteFront")) {
                    out.add(dq.deleteFront() ? "true" : "false");
                }
                if (op.equals("deleteLast")) {
                    out.add(dq.deleteLast() ? "true" : "false");
                }
                if (op.equals("getFront")) {
                    out.add(String.valueOf(dq.getFront()));
                }
                if (op.equals("getRear")) {
                    out.add(String.valueOf(dq.getRear()));
                }
                if (op.equals("isEmpty")) {
                    out.add(dq.isEmpty() ? "true" : "false");
                }
                if (op.equals("isFull")) {
                    out.add(dq.isFull() ? "true" : "false");
                }
                if (op.equals("sum")) {
                    out.add(String.valueOf(dq.sum()));
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
      c: `#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

typedef struct {
    int capacity;
    int sum_val;
} MyCircularDeque;

MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->capacity = k;
    return obj;
}
bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeDeleteFront(MyCircularDeque* obj) { return false; }
bool myCircularDequeDeleteLast(MyCircularDeque* obj) { return false; }
int myCircularDequeGetFront(MyCircularDeque* obj) { return -1; }
int myCircularDequeGetRear(MyCircularDeque* obj) { return -1; }
bool myCircularDequeIsEmpty(MyCircularDeque* obj) { return true; }
bool myCircularDequeIsFull(MyCircularDeque* obj) { return false; }
int myCircularDequeSum(MyCircularDeque* obj) { return 0; }

void myCircularDequeFree(MyCircularDeque* obj) { free(obj); }

int main() {
    int cap, q;
    if (scanf("%d %d", &cap, &q) != 2) return 0;
    MyCircularDeque* dq = myCircularDequeCreate(cap);
    char op[50];
    for (int i = 0; i < q; i++) {
        if (scanf("%s", op) != 1) break;
        if (strcmp(op, "insertFront") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertFront(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "insertLast") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertLast(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "deleteFront") == 0) {
            printf("%s ", myCircularDequeDeleteFront(dq) ? "true" : "false");
        }
        if (strcmp(op, "deleteLast") == 0) {
            printf("%s ", myCircularDequeDeleteLast(dq) ? "true" : "false");
        }
        if (strcmp(op, "getFront") == 0) {
            printf("%d ", myCircularDequeGetFront(dq));
        }
        if (strcmp(op, "getRear") == 0) {
            printf("%d ", myCircularDequeGetRear(dq));
        }
        if (strcmp(op, "isEmpty") == 0) {
            printf("%s ", myCircularDequeIsEmpty(dq) ? "true" : "false");
        }
        if (strcmp(op, "isFull") == 0) {
            printf("%s ", myCircularDequeIsFull(dq) ? "true" : "false");
        }
        if (strcmp(op, "sum") == 0) {
            printf("%d ", myCircularDequeSum(dq));
        }
    }
    printf("\\n");
    myCircularDequeFree(dq);
    return 0;
}
`,
    },
  },
  {
    id: "dcd-h1",
    title: "Max Circular Deque",
    difficulty: "Hard",
    description: "Design a circular deque that supports getMax() returning the maximum element currently inside the deque in O(1) time.",
    constraints: ["1 <= capacity <= 1000", "Must run getMax() in O(1) time"],
    examples: [{"input": "capacity=5, ops=[insertLast 10, insertLast 30, insertFront 20, getMax]", "output": "true true true 30"}],
    testCases: [{"input": "5 9\ninsertLast 10\ninsertLast 30\ninsertFront 20\ngetMax\ndeleteLast\ngetMax\ndeleteFront\ngetMax\nisEmpty", "expectedOutput": "true true true 30 true 20 true 10 false", "hidden": false}, {"input": "3 8\ninsertFront 5\ninsertFront 15\ngetMax\ninsertLast 10\ngetMax\ndeleteFront\ngetMax\ngetFront", "expectedOutput": "true true 15 true 15 true 10 5", "hidden": false}],
    starterCode: {
      python: `class MyCircularDeque:
    def __init__(self, k: int):
        pass
    def insertFront(self, value: int) -> bool:
        return False
    def insertLast(self, value: int) -> bool:
        return False
    def deleteFront(self) -> bool:
        return False
    def deleteLast(self) -> bool:
        return False
    def getFront(self) -> int:
        return -1
    def getRear(self) -> int:
        return -1
    def isEmpty(self) -> bool:
        return True
    def isFull(self) -> bool:
        return False
    def getMax(self) -> int:
        return -1

import sys

def main():
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    cap = int(input_data[0])
    q = int(input_data[1])
    dq = MyCircularDeque(cap)
    out = []
    idx = 2
    for _ in range(q):
        if idx >= len(input_data):
            break
        op = input_data[idx]
        idx += 1
        if op == "insertFront":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertFront(val)
                out.append('true' if res else 'false')
        if op == "insertLast":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertLast(val)
                out.append('true' if res else 'false')
        elif op == "deleteFront":
            res = dq.deleteFront()
            out.append('true' if res else 'false')
        elif op == "deleteLast":
            res = dq.deleteLast()
            out.append('true' if res else 'false')
        elif op == "getFront":
            res = dq.getFront()
            out.append(str(res))
        elif op == "getRear":
            res = dq.getRear()
            out.append(str(res))
        elif op == "isEmpty":
            res = dq.isEmpty()
            out.append('true' if res else 'false')
        elif op == "isFull":
            res = dq.isFull()
            out.append('true' if res else 'false')
        elif op == "getMax":
            res = dq.getMax()
            out.append(str(res))
    print(" ".join(out))

if __name__ == '__main__':
    main()
`,
      cpp: `#include <vector>
#include <string>
using namespace std;

class MyCircularDeque {
public:
    MyCircularDeque(int k) {}
    bool insertFront(int value) { return false; }
    bool insertLast(int value) { return false; }
    bool deleteFront() { return false; }
    bool deleteLast() { return false; }
    int getFront() { return -1; }
    int getRear() { return -1; }
    bool isEmpty() { return true; }
    bool isFull() { return false; }
    int getMax() { return -1; }
};

#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    int cap, q;
    if (cin >> cap >> q) {
        MyCircularDeque dq(cap);
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "insertFront") {
                    int val; cin >> val;
                    out.push_back(dq.insertFront(val) ? "true" : "false");
                }
            if (op == "insertLast") {
                    int val; cin >> val;
                    out.push_back(dq.insertLast(val) ? "true" : "false");
                }
            if (op == "deleteFront") {
                out.push_back(dq.deleteFront() ? "true" : "false");
            }
            if (op == "deleteLast") {
                out.push_back(dq.deleteLast() ? "true" : "false");
            }
            if (op == "getFront") {
                out.push_back(to_string(dq.getFront()));
            }
            if (op == "getRear") {
                out.push_back(to_string(dq.getRear()));
            }
            if (op == "isEmpty") {
                out.push_back(dq.isEmpty() ? "true" : "false");
            }
            if (op == "isFull") {
                out.push_back(dq.isFull() ? "true" : "false");
            }
            if (op == "getMax") {
                out.push_back(to_string(dq.getMax()));
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
      java: `import java.util.*;
class MyCircularDeque {
    public MyCircularDeque(int k) {}
    public boolean insertFront(int value) { return false; }
    public boolean insertLast(int value) { return false; }
    public boolean deleteFront() { return false; }
    public boolean deleteLast() { return false; }
    public int getFront() { return -1; }
    public int getRear() { return -1; }
    public boolean isEmpty() { return true; }
    public boolean isFull() { return false; }
    public int getMax() { return -1; }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int cap = sc.nextInt();
            int q = sc.nextInt();
            MyCircularDeque dq = new MyCircularDeque(cap);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("insertFront")) {
                    int val = sc.nextInt();
                    out.add(dq.insertFront(val) ? "true" : "false");
                }
                if (op.equals("insertLast")) {
                    int val = sc.nextInt();
                    out.add(dq.insertLast(val) ? "true" : "false");
                }
                if (op.equals("deleteFront")) {
                    out.add(dq.deleteFront() ? "true" : "false");
                }
                if (op.equals("deleteLast")) {
                    out.add(dq.deleteLast() ? "true" : "false");
                }
                if (op.equals("getFront")) {
                    out.add(String.valueOf(dq.getFront()));
                }
                if (op.equals("getRear")) {
                    out.add(String.valueOf(dq.getRear()));
                }
                if (op.equals("isEmpty")) {
                    out.add(dq.isEmpty() ? "true" : "false");
                }
                if (op.equals("isFull")) {
                    out.add(dq.isFull() ? "true" : "false");
                }
                if (op.equals("getMax")) {
                    out.add(String.valueOf(dq.getMax()));
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
      c: `#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

typedef struct {
    int capacity;
} MyCircularDeque;

MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->capacity = k;
    return obj;
}
bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeDeleteFront(MyCircularDeque* obj) { return false; }
bool myCircularDequeDeleteLast(MyCircularDeque* obj) { return false; }
int myCircularDequeGetFront(MyCircularDeque* obj) { return -1; }
int myCircularDequeGetRear(MyCircularDeque* obj) { return -1; }
bool myCircularDequeIsEmpty(MyCircularDeque* obj) { return true; }
bool myCircularDequeIsFull(MyCircularDeque* obj) { return false; }
int myCircularDequeGetMax(MyCircularDeque* obj) { return -1; }

void myCircularDequeFree(MyCircularDeque* obj) { free(obj); }

int main() {
    int cap, q;
    if (scanf("%d %d", &cap, &q) != 2) return 0;
    MyCircularDeque* dq = myCircularDequeCreate(cap);
    char op[50];
    for (int i = 0; i < q; i++) {
        if (scanf("%s", op) != 1) break;
        if (strcmp(op, "insertFront") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertFront(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "insertLast") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertLast(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "deleteFront") == 0) {
            printf("%s ", myCircularDequeDeleteFront(dq) ? "true" : "false");
        }
        if (strcmp(op, "deleteLast") == 0) {
            printf("%s ", myCircularDequeDeleteLast(dq) ? "true" : "false");
        }
        if (strcmp(op, "getFront") == 0) {
            printf("%d ", myCircularDequeGetFront(dq));
        }
        if (strcmp(op, "getRear") == 0) {
            printf("%d ", myCircularDequeGetRear(dq));
        }
        if (strcmp(op, "isEmpty") == 0) {
            printf("%s ", myCircularDequeIsEmpty(dq) ? "true" : "false");
        }
        if (strcmp(op, "isFull") == 0) {
            printf("%s ", myCircularDequeIsFull(dq) ? "true" : "false");
        }
        if (strcmp(op, "getMax") == 0) {
            printf("%d ", myCircularDequeGetMax(dq));
        }
    }
    printf("\\n");
    myCircularDequeFree(dq);
    return 0;
}
`,
    },
  },
  {
    id: "dcd-h2",
    title: "Transactional Circular Deque",
    difficulty: "Hard",
    description: "Design a circular deque that supports transactional savepoint operations: beginTransaction, commit, and rollback.",
    constraints: ["1 <= capacity <= 1000", "Transaction stack limit 20"],
    examples: [{"input": "capacity=5, ops=[insertLast 10, beginTransaction, insertLast 20, rollback, getRear]", "output": "true true true true 10"}],
    testCases: [{"input": "5 12\ninsertLast 10\nbeginTransaction\ninsertLast 20\ngetRear\nrollback\ngetRear\nbeginTransaction\ninsertLast 30\ncommit\ngetRear", "expectedOutput": "true true true 20 true 10 true true true 30", "hidden": false}, {"input": "3 12\nbeginTransaction\ninsertLast 5\nbeginTransaction\ninsertLast 10\nrollback\ngetRear\nrollback\nisEmpty\ncommit\nrollback", "expectedOutput": "true true true true true 5 true true false false", "hidden": false}],
    starterCode: {
      python: `class MyCircularDeque:
    def __init__(self, k: int):
        pass
    def insertFront(self, value: int) -> bool:
        return False
    def insertLast(self, value: int) -> bool:
        return False
    def deleteFront(self) -> bool:
        return False
    def deleteLast(self) -> bool:
        return False
    def getFront(self) -> int:
        return -1
    def getRear(self) -> int:
        return -1
    def isEmpty(self) -> bool:
        return True
    def isFull(self) -> bool:
        return False
    def beginTransaction(self) -> bool: return False
    def commit(self) -> bool: return False
    def rollback(self) -> bool: return False

import sys

def main():
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    cap = int(input_data[0])
    q = int(input_data[1])
    dq = MyCircularDeque(cap)
    out = []
    idx = 2
    for _ in range(q):
        if idx >= len(input_data):
            break
        op = input_data[idx]
        idx += 1
        if op == "insertFront":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertFront(val)
                out.append('true' if res else 'false')
        if op == "insertLast":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertLast(val)
                out.append('true' if res else 'false')
        elif op == "deleteFront":
            res = dq.deleteFront()
            out.append('true' if res else 'false')
        elif op == "deleteLast":
            res = dq.deleteLast()
            out.append('true' if res else 'false')
        elif op == "getFront":
            res = dq.getFront()
            out.append(str(res))
        elif op == "getRear":
            res = dq.getRear()
            out.append(str(res))
        elif op == "isEmpty":
            res = dq.isEmpty()
            out.append('true' if res else 'false')
        elif op == "isFull":
            res = dq.isFull()
            out.append('true' if res else 'false')
        elif op == "beginTransaction":
            res = dq.beginTransaction()
            out.append('true' if res else 'false')
        elif op == "commit":
            res = dq.commit()
            out.append('true' if res else 'false')
        elif op == "rollback":
            res = dq.rollback()
            out.append('true' if res else 'false')
    print(" ".join(out))

if __name__ == '__main__':
    main()
`,
      cpp: `#include <vector>
#include <string>
using namespace std;

class MyCircularDeque {
public:
    MyCircularDeque(int k) {}
    bool insertFront(int value) { return false; }
    bool insertLast(int value) { return false; }
    bool deleteFront() { return false; }
    bool deleteLast() { return false; }
    int getFront() { return -1; }
    int getRear() { return -1; }
    bool isEmpty() { return true; }
    bool isFull() { return false; }
    bool beginTransaction() { return false; }
    bool commit() { return false; }
    bool rollback() { return false; }
};

#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    int cap, q;
    if (cin >> cap >> q) {
        MyCircularDeque dq(cap);
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "insertFront") {
                    int val; cin >> val;
                    out.push_back(dq.insertFront(val) ? "true" : "false");
                }
            if (op == "insertLast") {
                    int val; cin >> val;
                    out.push_back(dq.insertLast(val) ? "true" : "false");
                }
            if (op == "deleteFront") {
                out.push_back(dq.deleteFront() ? "true" : "false");
            }
            if (op == "deleteLast") {
                out.push_back(dq.deleteLast() ? "true" : "false");
            }
            if (op == "getFront") {
                out.push_back(to_string(dq.getFront()));
            }
            if (op == "getRear") {
                out.push_back(to_string(dq.getRear()));
            }
            if (op == "isEmpty") {
                out.push_back(dq.isEmpty() ? "true" : "false");
            }
            if (op == "isFull") {
                out.push_back(dq.isFull() ? "true" : "false");
            }
            if (op == "beginTransaction") {
                out.push_back(dq.beginTransaction() ? "true" : "false");
            }
            if (op == "commit") {
                out.push_back(dq.commit() ? "true" : "false");
            }
            if (op == "rollback") {
                out.push_back(dq.rollback() ? "true" : "false");
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
      java: `import java.util.*;
class MyCircularDeque {
    public MyCircularDeque(int k) {}
    public boolean insertFront(int value) { return false; }
    public boolean insertLast(int value) { return false; }
    public boolean deleteFront() { return false; }
    public boolean deleteLast() { return false; }
    public int getFront() { return -1; }
    public int getRear() { return -1; }
    public boolean isEmpty() { return true; }
    public boolean isFull() { return false; }
    public boolean beginTransaction() { return false; }
    public boolean commit() { return false; }
    public boolean rollback() { return false; }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int cap = sc.nextInt();
            int q = sc.nextInt();
            MyCircularDeque dq = new MyCircularDeque(cap);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("insertFront")) {
                    int val = sc.nextInt();
                    out.add(dq.insertFront(val) ? "true" : "false");
                }
                if (op.equals("insertLast")) {
                    int val = sc.nextInt();
                    out.add(dq.insertLast(val) ? "true" : "false");
                }
                if (op.equals("deleteFront")) {
                    out.add(dq.deleteFront() ? "true" : "false");
                }
                if (op.equals("deleteLast")) {
                    out.add(dq.deleteLast() ? "true" : "false");
                }
                if (op.equals("getFront")) {
                    out.add(String.valueOf(dq.getFront()));
                }
                if (op.equals("getRear")) {
                    out.add(String.valueOf(dq.getRear()));
                }
                if (op.equals("isEmpty")) {
                    out.add(dq.isEmpty() ? "true" : "false");
                }
                if (op.equals("isFull")) {
                    out.add(dq.isFull() ? "true" : "false");
                }
                if (op.equals("beginTransaction")) {
                    out.add(dq.beginTransaction() ? "true" : "false");
                }
                if (op.equals("commit")) {
                    out.add(dq.commit() ? "true" : "false");
                }
                if (op.equals("rollback")) {
                    out.add(dq.rollback() ? "true" : "false");
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
      c: `#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

typedef struct {
    int capacity;
} MyCircularDeque;

MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->capacity = k;
    return obj;
}
bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeDeleteFront(MyCircularDeque* obj) { return false; }
bool myCircularDequeDeleteLast(MyCircularDeque* obj) { return false; }
int myCircularDequeGetFront(MyCircularDeque* obj) { return -1; }
int myCircularDequeGetRear(MyCircularDeque* obj) { return -1; }
bool myCircularDequeIsEmpty(MyCircularDeque* obj) { return true; }
bool myCircularDequeIsFull(MyCircularDeque* obj) { return false; }
bool myCircularDequeBeginTransaction(MyCircularDeque* obj) { return false; }
bool myCircularDequeCommit(MyCircularDeque* obj) { return false; }
bool myCircularDequeRollback(MyCircularDeque* obj) { return false; }

void myCircularDequeFree(MyCircularDeque* obj) { free(obj); }

int main() {
    int cap, q;
    if (scanf("%d %d", &cap, &q) != 2) return 0;
    MyCircularDeque* dq = myCircularDequeCreate(cap);
    char op[50];
    for (int i = 0; i < q; i++) {
        if (scanf("%s", op) != 1) break;
        if (strcmp(op, "insertFront") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertFront(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "insertLast") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertLast(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "deleteFront") == 0) {
            printf("%s ", myCircularDequeDeleteFront(dq) ? "true" : "false");
        }
        if (strcmp(op, "deleteLast") == 0) {
            printf("%s ", myCircularDequeDeleteLast(dq) ? "true" : "false");
        }
        if (strcmp(op, "getFront") == 0) {
            printf("%d ", myCircularDequeGetFront(dq));
        }
        if (strcmp(op, "getRear") == 0) {
            printf("%d ", myCircularDequeGetRear(dq));
        }
        if (strcmp(op, "isEmpty") == 0) {
            printf("%s ", myCircularDequeIsEmpty(dq) ? "true" : "false");
        }
        if (strcmp(op, "isFull") == 0) {
            printf("%s ", myCircularDequeIsFull(dq) ? "true" : "false");
        }
        if (strcmp(op, "beginTransaction") == 0) {
            printf("%s ", myCircularDequeBeginTransaction(dq) ? "true" : "false");
        }
        if (strcmp(op, "commit") == 0) {
            printf("%s ", myCircularDequeCommit(dq) ? "true" : "false");
        }
        if (strcmp(op, "rollback") == 0) {
            printf("%s ", myCircularDequeRollback(dq) ? "true" : "false");
        }
    }
    printf("\\n");
    myCircularDequeFree(dq);
    return 0;
}
`,
    },
  },
  {
    id: "dcd-h3",
    title: "Circular Deque - Middle Operations",
    difficulty: "Hard",
    description: "Extend the circular deque to support middle-element operations insertMiddle(val) and deleteMiddle().",
    constraints: ["1 <= capacity <= 1000", "Handles odd/even sized lists correctly"],
    examples: [{"input": "capacity=5, ops=[insertLast 10, insertLast 20, insertMiddle 30, deleteMiddle]", "output": "true true true true"}],
    testCases: [{"input": "5 9\ninsertLast 10\ninsertLast 20\ninsertMiddle 30\ngetFront\ngetRear\ndeleteMiddle\ngetFront\ngetRear", "expectedOutput": "true true true 10 20 true 10 20", "hidden": false}, {"input": "4 9\ninsertLast 1\ninsertLast 2\ninsertLast 3\ninsertMiddle 4\ngetFront\ngetRear\ndeleteMiddle\ngetFront\ngetRear", "expectedOutput": "true true true true 1 3 true 1 3", "hidden": false}],
    starterCode: {
      python: `class MyCircularDeque:
    def __init__(self, k: int):
        pass
    def insertFront(self, value: int) -> bool:
        return False
    def insertLast(self, value: int) -> bool:
        return False
    def deleteFront(self) -> bool:
        return False
    def deleteLast(self) -> bool:
        return False
    def getFront(self) -> int:
        return -1
    def getRear(self) -> int:
        return -1
    def isEmpty(self) -> bool:
        return True
    def isFull(self) -> bool:
        return False
    def insertMiddle(self, value: int) -> bool:
        return False
    def deleteMiddle(self) -> bool:
        return False

import sys

def main():
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    cap = int(input_data[0])
    q = int(input_data[1])
    dq = MyCircularDeque(cap)
    out = []
    idx = 2
    for _ in range(q):
        if idx >= len(input_data):
            break
        op = input_data[idx]
        idx += 1
        if op == "insertFront":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertFront(val)
                out.append('true' if res else 'false')
        if op == "insertLast":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertLast(val)
                out.append('true' if res else 'false')
        elif op == "deleteFront":
            res = dq.deleteFront()
            out.append('true' if res else 'false')
        elif op == "deleteLast":
            res = dq.deleteLast()
            out.append('true' if res else 'false')
        elif op == "getFront":
            res = dq.getFront()
            out.append(str(res))
        elif op == "getRear":
            res = dq.getRear()
            out.append(str(res))
        elif op == "isEmpty":
            res = dq.isEmpty()
            out.append('true' if res else 'false')
        elif op == "isFull":
            res = dq.isFull()
            out.append('true' if res else 'false')
        if op == "insertMiddle":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertMiddle(val)
                out.append('true' if res else 'false')
        elif op == "deleteMiddle":
            res = dq.deleteMiddle()
            out.append('true' if res else 'false')
    print(" ".join(out))

if __name__ == '__main__':
    main()
`,
      cpp: `#include <vector>
#include <string>
using namespace std;

class MyCircularDeque {
public:
    MyCircularDeque(int k) {}
    bool insertFront(int value) { return false; }
    bool insertLast(int value) { return false; }
    bool deleteFront() { return false; }
    bool deleteLast() { return false; }
    int getFront() { return -1; }
    int getRear() { return -1; }
    bool isEmpty() { return true; }
    bool isFull() { return false; }
    bool insertMiddle(int value) { return false; }
    bool deleteMiddle() { return false; }
};

#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    int cap, q;
    if (cin >> cap >> q) {
        MyCircularDeque dq(cap);
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "insertFront") {
                    int val; cin >> val;
                    out.push_back(dq.insertFront(val) ? "true" : "false");
                }
            if (op == "insertLast") {
                    int val; cin >> val;
                    out.push_back(dq.insertLast(val) ? "true" : "false");
                }
            if (op == "deleteFront") {
                out.push_back(dq.deleteFront() ? "true" : "false");
            }
            if (op == "deleteLast") {
                out.push_back(dq.deleteLast() ? "true" : "false");
            }
            if (op == "getFront") {
                out.push_back(to_string(dq.getFront()));
            }
            if (op == "getRear") {
                out.push_back(to_string(dq.getRear()));
            }
            if (op == "isEmpty") {
                out.push_back(dq.isEmpty() ? "true" : "false");
            }
            if (op == "isFull") {
                out.push_back(dq.isFull() ? "true" : "false");
            }
            if (op == "insertMiddle") {
                    int val; cin >> val;
                    out.push_back(dq.insertMiddle(val) ? "true" : "false");
                }
            if (op == "deleteMiddle") {
                out.push_back(dq.deleteMiddle() ? "true" : "false");
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
      java: `import java.util.*;
class MyCircularDeque {
    public MyCircularDeque(int k) {}
    public boolean insertFront(int value) { return false; }
    public boolean insertLast(int value) { return false; }
    public boolean deleteFront() { return false; }
    public boolean deleteLast() { return false; }
    public int getFront() { return -1; }
    public int getRear() { return -1; }
    public boolean isEmpty() { return true; }
    public boolean isFull() { return false; }
    public boolean insertMiddle(int value) { return false; }
    public boolean deleteMiddle() { return false; }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int cap = sc.nextInt();
            int q = sc.nextInt();
            MyCircularDeque dq = new MyCircularDeque(cap);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("insertFront")) {
                    int val = sc.nextInt();
                    out.add(dq.insertFront(val) ? "true" : "false");
                }
                if (op.equals("insertLast")) {
                    int val = sc.nextInt();
                    out.add(dq.insertLast(val) ? "true" : "false");
                }
                if (op.equals("deleteFront")) {
                    out.add(dq.deleteFront() ? "true" : "false");
                }
                if (op.equals("deleteLast")) {
                    out.add(dq.deleteLast() ? "true" : "false");
                }
                if (op.equals("getFront")) {
                    out.add(String.valueOf(dq.getFront()));
                }
                if (op.equals("getRear")) {
                    out.add(String.valueOf(dq.getRear()));
                }
                if (op.equals("isEmpty")) {
                    out.add(dq.isEmpty() ? "true" : "false");
                }
                if (op.equals("isFull")) {
                    out.add(dq.isFull() ? "true" : "false");
                }
                if (op.equals("insertMiddle")) {
                    int val = sc.nextInt();
                    out.add(dq.insertMiddle(val) ? "true" : "false");
                }
                if (op.equals("deleteMiddle")) {
                    out.add(dq.deleteMiddle() ? "true" : "false");
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
      c: `#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

typedef struct {
    int capacity;
} MyCircularDeque;

MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->capacity = k;
    return obj;
}
bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeDeleteFront(MyCircularDeque* obj) { return false; }
bool myCircularDequeDeleteLast(MyCircularDeque* obj) { return false; }
int myCircularDequeGetFront(MyCircularDeque* obj) { return -1; }
int myCircularDequeGetRear(MyCircularDeque* obj) { return -1; }
bool myCircularDequeIsEmpty(MyCircularDeque* obj) { return true; }
bool myCircularDequeIsFull(MyCircularDeque* obj) { return false; }
bool myCircularDequeInsertMiddle(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeDeleteMiddle(MyCircularDeque* obj) { return false; }

void myCircularDequeFree(MyCircularDeque* obj) { free(obj); }

int main() {
    int cap, q;
    if (scanf("%d %d", &cap, &q) != 2) return 0;
    MyCircularDeque* dq = myCircularDequeCreate(cap);
    char op[50];
    for (int i = 0; i < q; i++) {
        if (scanf("%s", op) != 1) break;
        if (strcmp(op, "insertFront") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertFront(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "insertLast") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertLast(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "deleteFront") == 0) {
            printf("%s ", myCircularDequeDeleteFront(dq) ? "true" : "false");
        }
        if (strcmp(op, "deleteLast") == 0) {
            printf("%s ", myCircularDequeDeleteLast(dq) ? "true" : "false");
        }
        if (strcmp(op, "getFront") == 0) {
            printf("%d ", myCircularDequeGetFront(dq));
        }
        if (strcmp(op, "getRear") == 0) {
            printf("%d ", myCircularDequeGetRear(dq));
        }
        if (strcmp(op, "isEmpty") == 0) {
            printf("%s ", myCircularDequeIsEmpty(dq) ? "true" : "false");
        }
        if (strcmp(op, "isFull") == 0) {
            printf("%s ", myCircularDequeIsFull(dq) ? "true" : "false");
        }
        if (strcmp(op, "insertMiddle") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertMiddle(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "deleteMiddle") == 0) {
            printf("%s ", myCircularDequeDeleteMiddle(dq) ? "true" : "false");
        }
    }
    printf("\\n");
    myCircularDequeFree(dq);
    return 0;
}
`,
    },
  },
  {
    id: "dcd-h4",
    title: "Monotonic Sliding Window Queue",
    difficulty: "Hard",
    description: "Design a circular deque that behaves as a decreasing monotonic queue: insertLast drops all smaller elements from the rear.",
    constraints: ["1 <= capacity <= 1000", "Must support getMax in O(1) time"],
    examples: [{"input": "capacity=5, ops=[insertLast 10, insertLast 20, getMax]", "output": "true true 20"}],
    testCases: [{"input": "5 7\ninsertLast 10\ninsertLast 20\ngetMax\ninsertLast 15\ngetMax\ndeleteFront\ngetMax", "expectedOutput": "true true 20 true 20 true 15", "hidden": false}, {"input": "3 9\ninsertLast 3\ninsertLast 2\ninsertLast 1\ngetMax\ninsertLast 4\ngetMax\ndeleteFront\ngetMax", "expectedOutput": "true true true 3 true 4 true -1", "hidden": false}],
    starterCode: {
      python: `class MyCircularDeque:
    def __init__(self, k: int):
        pass
    def insertFront(self, value: int) -> bool:
        return False
    def insertLast(self, value: int) -> bool:
        return False
    def deleteFront(self) -> bool:
        return False
    def deleteLast(self) -> bool:
        return False
    def getFront(self) -> int:
        return -1
    def getRear(self) -> int:
        return -1
    def isEmpty(self) -> bool:
        return True
    def isFull(self) -> bool:
        return False
    def getMax(self) -> int:
        return -1

import sys

def main():
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    cap = int(input_data[0])
    q = int(input_data[1])
    dq = MyCircularDeque(cap)
    out = []
    idx = 2
    for _ in range(q):
        if idx >= len(input_data):
            break
        op = input_data[idx]
        idx += 1
        if op == "insertFront":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertFront(val)
                out.append('true' if res else 'false')
        if op == "insertLast":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertLast(val)
                out.append('true' if res else 'false')
        elif op == "deleteFront":
            res = dq.deleteFront()
            out.append('true' if res else 'false')
        elif op == "deleteLast":
            res = dq.deleteLast()
            out.append('true' if res else 'false')
        elif op == "getFront":
            res = dq.getFront()
            out.append(str(res))
        elif op == "getRear":
            res = dq.getRear()
            out.append(str(res))
        elif op == "isEmpty":
            res = dq.isEmpty()
            out.append('true' if res else 'false')
        elif op == "isFull":
            res = dq.isFull()
            out.append('true' if res else 'false')
        elif op == "getMax":
            res = dq.getMax()
            out.append(str(res))
    print(" ".join(out))

if __name__ == '__main__':
    main()
`,
      cpp: `#include <vector>
#include <string>
using namespace std;

class MyCircularDeque {
public:
    MyCircularDeque(int k) {}
    bool insertFront(int value) { return false; }
    bool insertLast(int value) { return false; }
    bool deleteFront() { return false; }
    bool deleteLast() { return false; }
    int getFront() { return -1; }
    int getRear() { return -1; }
    bool isEmpty() { return true; }
    bool isFull() { return false; }
    int getMax() { return -1; }
};

#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    int cap, q;
    if (cin >> cap >> q) {
        MyCircularDeque dq(cap);
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "insertFront") {
                    int val; cin >> val;
                    out.push_back(dq.insertFront(val) ? "true" : "false");
                }
            if (op == "insertLast") {
                    int val; cin >> val;
                    out.push_back(dq.insertLast(val) ? "true" : "false");
                }
            if (op == "deleteFront") {
                out.push_back(dq.deleteFront() ? "true" : "false");
            }
            if (op == "deleteLast") {
                out.push_back(dq.deleteLast() ? "true" : "false");
            }
            if (op == "getFront") {
                out.push_back(to_string(dq.getFront()));
            }
            if (op == "getRear") {
                out.push_back(to_string(dq.getRear()));
            }
            if (op == "isEmpty") {
                out.push_back(dq.isEmpty() ? "true" : "false");
            }
            if (op == "isFull") {
                out.push_back(dq.isFull() ? "true" : "false");
            }
            if (op == "getMax") {
                out.push_back(to_string(dq.getMax()));
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
      java: `import java.util.*;
class MyCircularDeque {
    public MyCircularDeque(int k) {}
    public boolean insertFront(int value) { return false; }
    public boolean insertLast(int value) { return false; }
    public boolean deleteFront() { return false; }
    public boolean deleteLast() { return false; }
    public int getFront() { return -1; }
    public int getRear() { return -1; }
    public boolean isEmpty() { return true; }
    public boolean isFull() { return false; }
    public int getMax() { return -1; }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int cap = sc.nextInt();
            int q = sc.nextInt();
            MyCircularDeque dq = new MyCircularDeque(cap);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("insertFront")) {
                    int val = sc.nextInt();
                    out.add(dq.insertFront(val) ? "true" : "false");
                }
                if (op.equals("insertLast")) {
                    int val = sc.nextInt();
                    out.add(dq.insertLast(val) ? "true" : "false");
                }
                if (op.equals("deleteFront")) {
                    out.add(dq.deleteFront() ? "true" : "false");
                }
                if (op.equals("deleteLast")) {
                    out.add(dq.deleteLast() ? "true" : "false");
                }
                if (op.equals("getFront")) {
                    out.add(String.valueOf(dq.getFront()));
                }
                if (op.equals("getRear")) {
                    out.add(String.valueOf(dq.getRear()));
                }
                if (op.equals("isEmpty")) {
                    out.add(dq.isEmpty() ? "true" : "false");
                }
                if (op.equals("isFull")) {
                    out.add(dq.isFull() ? "true" : "false");
                }
                if (op.equals("getMax")) {
                    out.add(String.valueOf(dq.getMax()));
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
      c: `#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

typedef struct {
    int capacity;
} MyCircularDeque;

MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->capacity = k;
    return obj;
}
bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeDeleteFront(MyCircularDeque* obj) { return false; }
bool myCircularDequeDeleteLast(MyCircularDeque* obj) { return false; }
int myCircularDequeGetFront(MyCircularDeque* obj) { return -1; }
int myCircularDequeGetRear(MyCircularDeque* obj) { return -1; }
bool myCircularDequeIsEmpty(MyCircularDeque* obj) { return true; }
bool myCircularDequeIsFull(MyCircularDeque* obj) { return false; }
int myCircularDequeGetMax(MyCircularDeque* obj) { return -1; }

void myCircularDequeFree(MyCircularDeque* obj) { free(obj); }

int main() {
    int cap, q;
    if (scanf("%d %d", &cap, &q) != 2) return 0;
    MyCircularDeque* dq = myCircularDequeCreate(cap);
    char op[50];
    for (int i = 0; i < q; i++) {
        if (scanf("%s", op) != 1) break;
        if (strcmp(op, "insertFront") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertFront(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "insertLast") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertLast(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "deleteFront") == 0) {
            printf("%s ", myCircularDequeDeleteFront(dq) ? "true" : "false");
        }
        if (strcmp(op, "deleteLast") == 0) {
            printf("%s ", myCircularDequeDeleteLast(dq) ? "true" : "false");
        }
        if (strcmp(op, "getFront") == 0) {
            printf("%d ", myCircularDequeGetFront(dq));
        }
        if (strcmp(op, "getRear") == 0) {
            printf("%d ", myCircularDequeGetRear(dq));
        }
        if (strcmp(op, "isEmpty") == 0) {
            printf("%s ", myCircularDequeIsEmpty(dq) ? "true" : "false");
        }
        if (strcmp(op, "isFull") == 0) {
            printf("%s ", myCircularDequeIsFull(dq) ? "true" : "false");
        }
        if (strcmp(op, "getMax") == 0) {
            printf("%d ", myCircularDequeGetMax(dq));
        }
    }
    printf("\\n");
    myCircularDequeFree(dq);
    return 0;
}
`,
    },
  },
  {
    id: "dcd-h5",
    title: "Circular Deque - Serialization",
    difficulty: "Hard",
    description: "Add serialize() converting the deque to a comma-separated string, and deserialize(str) building a deque from it.",
    constraints: ["1 <= capacity <= 1000", "Uses '#' for empty state"],
    examples: [{"input": "capacity=5, ops=[insertLast 10, insertLast 20, serialize]", "output": "true true 10,20"}],
    testCases: [{"input": "5 7\ninsertLast 10\ninsertLast 20\ninsertFront 30\nserialize\ndeserialize 40,50\nserialize\ngetFront", "expectedOutput": "true true true 30,10,20 true 40,50 40", "hidden": false}, {"input": "3 7\nserialize\ndeserialize #\nserialize\ndeserialize 1,2,3,4\nserialize\nisFull", "expectedOutput": "# true # true 1,2,3 true", "hidden": false}],
    starterCode: {
      python: `class MyCircularDeque:
    def __init__(self, k: int):
        pass
    def insertFront(self, value: int) -> bool:
        return False
    def insertLast(self, value: int) -> bool:
        return False
    def deleteFront(self) -> bool:
        return False
    def deleteLast(self) -> bool:
        return False
    def getFront(self) -> int:
        return -1
    def getRear(self) -> int:
        return -1
    def isEmpty(self) -> bool:
        return True
    def isFull(self) -> bool:
        return False
    def serialize(self) -> str:
        return ""
    def deserialize(self, data: str) -> bool:
        return False

import sys

def main():
    input_data = sys.stdin.read().split()
    if not input_data:
        return
    cap = int(input_data[0])
    q = int(input_data[1])
    dq = MyCircularDeque(cap)
    out = []
    idx = 2
    for _ in range(q):
        if idx >= len(input_data):
            break
        op = input_data[idx]
        idx += 1
        if op == "insertFront":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertFront(val)
                out.append('true' if res else 'false')
        if op == "insertLast":
            if idx < len(input_data):
                val = int(input_data[idx])
                idx += 1
                res = dq.insertLast(val)
                out.append('true' if res else 'false')
        elif op == "deleteFront":
            res = dq.deleteFront()
            out.append('true' if res else 'false')
        elif op == "deleteLast":
            res = dq.deleteLast()
            out.append('true' if res else 'false')
        elif op == "getFront":
            res = dq.getFront()
            out.append(str(res))
        elif op == "getRear":
            res = dq.getRear()
            out.append(str(res))
        elif op == "isEmpty":
            res = dq.isEmpty()
            out.append('true' if res else 'false')
        elif op == "isFull":
            res = dq.isFull()
            out.append('true' if res else 'false')
        elif op == "serialize":
            res = dq.serialize()
            out.append(str(res))
        if op == "deserialize":
            if idx < len(input_data):
                val = input_data[idx]
                idx += 1
                res = dq.deserialize(val)
                out.append("true" if res else "false")
    print(" ".join(out))

if __name__ == '__main__':
    main()
`,
      cpp: `#include <vector>
#include <string>
using namespace std;

class MyCircularDeque {
public:
    MyCircularDeque(int k) {}
    bool insertFront(int value) { return false; }
    bool insertLast(int value) { return false; }
    bool deleteFront() { return false; }
    bool deleteLast() { return false; }
    int getFront() { return -1; }
    int getRear() { return -1; }
    bool isEmpty() { return true; }
    bool isFull() { return false; }
    string serialize() { return ""; }
    bool deserialize(string data) { return false; }
};

#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    int cap, q;
    if (cin >> cap >> q) {
        MyCircularDeque dq(cap);
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "insertFront") {
                    int val; cin >> val;
                    out.push_back(dq.insertFront(val) ? "true" : "false");
                }
            if (op == "insertLast") {
                    int val; cin >> val;
                    out.push_back(dq.insertLast(val) ? "true" : "false");
                }
            if (op == "deleteFront") {
                out.push_back(dq.deleteFront() ? "true" : "false");
            }
            if (op == "deleteLast") {
                out.push_back(dq.deleteLast() ? "true" : "false");
            }
            if (op == "getFront") {
                out.push_back(to_string(dq.getFront()));
            }
            if (op == "getRear") {
                out.push_back(to_string(dq.getRear()));
            }
            if (op == "isEmpty") {
                out.push_back(dq.isEmpty() ? "true" : "false");
            }
            if (op == "isFull") {
                out.push_back(dq.isFull() ? "true" : "false");
            }
            if (op == "serialize") {
                out.push_back(dq.serialize());
            }
            if (op == "deserialize") {
                    string val; cin >> val;
                    out.push_back(dq.deserialize(val) ? "true" : "false");
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
      java: `import java.util.*;
class MyCircularDeque {
    public MyCircularDeque(int k) {}
    public boolean insertFront(int value) { return false; }
    public boolean insertLast(int value) { return false; }
    public boolean deleteFront() { return false; }
    public boolean deleteLast() { return false; }
    public int getFront() { return -1; }
    public int getRear() { return -1; }
    public boolean isEmpty() { return true; }
    public boolean isFull() { return false; }
    public String serialize() { return ""; }
    public boolean deserialize(String data) { return false; }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int cap = sc.nextInt();
            int q = sc.nextInt();
            MyCircularDeque dq = new MyCircularDeque(cap);
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("insertFront")) {
                    int val = sc.nextInt();
                    out.add(dq.insertFront(val) ? "true" : "false");
                }
                if (op.equals("insertLast")) {
                    int val = sc.nextInt();
                    out.add(dq.insertLast(val) ? "true" : "false");
                }
                if (op.equals("deleteFront")) {
                    out.add(dq.deleteFront() ? "true" : "false");
                }
                if (op.equals("deleteLast")) {
                    out.add(dq.deleteLast() ? "true" : "false");
                }
                if (op.equals("getFront")) {
                    out.add(String.valueOf(dq.getFront()));
                }
                if (op.equals("getRear")) {
                    out.add(String.valueOf(dq.getRear()));
                }
                if (op.equals("isEmpty")) {
                    out.add(dq.isEmpty() ? "true" : "false");
                }
                if (op.equals("isFull")) {
                    out.add(dq.isFull() ? "true" : "false");
                }
                if (op.equals("serialize")) {
                    out.add(String.valueOf(dq.serialize()));
                }
                if (op.equals("deserialize")) {
                    String val = sc.next();
                    out.add(dq.deserialize(val) ? "true" : "false");
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}
`,
      c: `#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

typedef struct {
    int capacity;
    char serialize_buf[10005];
} MyCircularDeque;

MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->capacity = k;
    return obj;
}
bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) { return false; }
bool myCircularDequeDeleteFront(MyCircularDeque* obj) { return false; }
bool myCircularDequeDeleteLast(MyCircularDeque* obj) { return false; }
int myCircularDequeGetFront(MyCircularDeque* obj) { return -1; }
int myCircularDequeGetRear(MyCircularDeque* obj) { return -1; }
bool myCircularDequeIsEmpty(MyCircularDeque* obj) { return true; }
bool myCircularDequeIsFull(MyCircularDeque* obj) { return false; }
char* myCircularDequeSerialize(MyCircularDeque* obj) { return ""; }
bool myCircularDequeDeserialize(MyCircularDeque* obj, char* data) { return false; }

void myCircularDequeFree(MyCircularDeque* obj) { free(obj); }

int main() {
    int cap, q;
    if (scanf("%d %d", &cap, &q) != 2) return 0;
    MyCircularDeque* dq = myCircularDequeCreate(cap);
    char op[50];
    for (int i = 0; i < q; i++) {
        if (scanf("%s", op) != 1) break;
        if (strcmp(op, "insertFront") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertFront(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "insertLast") == 0) {
            int val; if (scanf("%d", &val) != 1) break;
            printf("%s ", myCircularDequeInsertLast(dq, val) ? "true" : "false");
        }
        if (strcmp(op, "deleteFront") == 0) {
            printf("%s ", myCircularDequeDeleteFront(dq) ? "true" : "false");
        }
        if (strcmp(op, "deleteLast") == 0) {
            printf("%s ", myCircularDequeDeleteLast(dq) ? "true" : "false");
        }
        if (strcmp(op, "getFront") == 0) {
            printf("%d ", myCircularDequeGetFront(dq));
        }
        if (strcmp(op, "getRear") == 0) {
            printf("%d ", myCircularDequeGetRear(dq));
        }
        if (strcmp(op, "isEmpty") == 0) {
            printf("%s ", myCircularDequeIsEmpty(dq) ? "true" : "false");
        }
        if (strcmp(op, "isFull") == 0) {
            printf("%s ", myCircularDequeIsFull(dq) ? "true" : "false");
        }
        if (strcmp(op, "serialize") == 0) {
            printf("%s ", myCircularDequeSerialize(dq));
        }
        if (strcmp(op, "deserialize") == 0) {
            char val[256]; if (scanf("%s", val) != 1) break;
            printf("%s ", myCircularDequeDeserialize(dq, val) ? "true" : "false");
        }
    }
    printf("\\n");
    myCircularDequeFree(dq);
    return 0;
}
`,
    },
  }
];
