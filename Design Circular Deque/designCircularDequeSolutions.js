export const designCircularDequeSolutions = {
  "dcd-e1": {
    python: `class MyCircularDeque:
    def __init__(self, k: int):
        self.capacity = k
        self.arr = [0] * k
        self.front = 0
        self.rear = 0
        self.size = 0
    def insertFront(self, value: int) -> bool:
        if self.isFull(): return False
        self.front = (self.front - 1 + self.capacity) % self.capacity
        self.arr[self.front] = value
        self.size += 1
        return True
    def insertLast(self, value: int) -> bool:
        if self.isFull(): return False
        self.arr[self.rear] = value
        self.rear = (self.rear + 1) % self.capacity
        self.size += 1
        return True
    def deleteFront(self) -> bool:
        if self.isEmpty(): return False
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return True
    def deleteLast(self) -> bool:
        if self.isEmpty(): return False
        self.rear = (self.rear - 1 + self.capacity) % self.capacity
        self.size -= 1
        return True
    def getFront(self) -> int:
        if self.isEmpty(): return -1
        return self.arr[self.front]
    def getRear(self) -> int:
        if self.isEmpty(): return -1
        return self.arr[(self.rear - 1 + self.capacity) % self.capacity]
    def isEmpty(self) -> bool:
        return self.size == 0
    def isFull(self) -> bool:
        return self.size == self.capacity

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
using namespace std;
class MyCircularDeque {
    vector<int> arr;
    int front, rear, size, capacity;
public:
    MyCircularDeque(int k) : arr(k), front(0), rear(0), size(0), capacity(k) {}
    bool insertFront(int value) {
        if (isFull()) return false;
        front = (front - 1 + capacity) % capacity;
        arr[front] = value;
        size++;
        return true;
    }
    bool insertLast(int value) {
        if (isFull()) return false;
        arr[rear] = value;
        rear = (rear + 1) % capacity;
        size++;
        return true;
    }
    bool deleteFront() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    bool deleteLast() {
        if (isEmpty()) return false;
        rear = (rear - 1 + capacity) % capacity;
        size--;
        return true;
    }
    int getFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }
    int getRear() {
        if (isEmpty()) return -1;
        return arr[(rear - 1 + capacity) % capacity];
    }
    bool isEmpty() { return size == 0; }
    bool isFull() { return size == capacity; }
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
    private int[] arr;
    private int front, rear, size, capacity;
    public MyCircularDeque(int k) {
        arr = new int[k];
        capacity = k;
        front = 0; rear = 0; size = 0;
    }
    public boolean insertFront(int value) {
        if (isFull()) return false;
        front = (front - 1 + capacity) % capacity;
        arr[front] = value;
        size++;
        return true;
    }
    public boolean insertLast(int value) {
        if (isFull()) return false;
        arr[rear] = value;
        rear = (rear + 1) % capacity;
        size++;
        return true;
    }
    public boolean deleteFront() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    public boolean deleteLast() {
        if (isEmpty()) return false;
        rear = (rear - 1 + capacity) % capacity;
        size--;
        return true;
    }
    public int getFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }
    public int getRear() {
        if (isEmpty()) return -1;
        return arr[(rear - 1 + capacity) % capacity];
    }
    public boolean isEmpty() { return size == 0; }
    public boolean isFull() { return size == capacity; }
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
    int *arr;
    int front, rear, size, capacity;
} MyCircularDeque;
MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->arr = malloc(k * sizeof(int));
    obj->front = 0;
    obj->rear = 0;
    obj->size = 0;
    obj->capacity = k;
    return obj;
}
bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) {
    if (obj->size == obj->capacity) return false;
    obj->front = (obj->front - 1 + obj->capacity) % obj->capacity;
    obj->arr[obj->front] = value;
    obj->size++;
    return true;
}
bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) {
    if (obj->size == obj->capacity) return false;
    obj->arr[obj->rear] = value;
    obj->rear = (obj->rear + 1) % obj->capacity;
    obj->size++;
    return true;
}
bool myCircularDequeDeleteFront(MyCircularDeque* obj) {
    if (obj->size == 0) return false;
    obj->front = (obj->front + 1) % obj->capacity;
    obj->size--;
    return true;
}
bool myCircularDequeDeleteLast(MyCircularDeque* obj) {
    if (obj->size == 0) return false;
    obj->rear = (obj->rear - 1 + obj->capacity) % obj->capacity;
    obj->size--;
    return true;
}
int myCircularDequeGetFront(MyCircularDeque* obj) {
    if (obj->size == 0) return -1;
    return obj->arr[obj->front];
}
int myCircularDequeGetRear(MyCircularDeque* obj) {
    if (obj->size == 0) return -1;
    return obj->arr[(obj->rear - 1 + obj->capacity) % obj->capacity];
}
bool myCircularDequeIsEmpty(MyCircularDeque* obj) {
    return obj->size == 0;
}
bool myCircularDequeIsFull(MyCircularDeque* obj) {
    return obj->size == obj->capacity;
}
void myCircularDequeFree(MyCircularDeque* obj) {
    free(obj->arr);
    free(obj);
}

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
  "dcd-e2": {
    python: `class MyCircularDeque:
    def __init__(self, k: int):
        self.capacity = k
        self.arr = [0] * k
        self.front = 0
        self.rear = 0
        self.sz = 0
    def insertFront(self, value: int) -> bool:
        if self.isFull(): return False
        self.front = (self.front - 1 + self.capacity) % self.capacity
        self.arr[self.front] = value
        self.sz += 1
        return True
    def insertLast(self, value: int) -> bool:
        if self.isFull(): return False
        self.arr[self.rear] = value
        self.rear = (self.rear + 1) % self.capacity
        self.sz += 1
        return True
    def deleteFront(self) -> bool:
        if self.isEmpty(): return False
        self.front = (self.front + 1) % self.capacity
        self.sz -= 1
        return True
    def deleteLast(self) -> bool:
        if self.isEmpty(): return False
        self.rear = (self.rear - 1 + self.capacity) % self.capacity
        self.sz -= 1
        return True
    def getFront(self) -> int:
        if self.isEmpty(): return -1
        return self.arr[self.front]
    def getRear(self) -> int:
        if self.isEmpty(): return -1
        return self.arr[(self.rear - 1 + self.capacity) % self.capacity]
    def isEmpty(self) -> bool:
        return self.sz == 0
    def isFull(self) -> bool:
        return self.sz == self.capacity
    def size(self) -> int:
        return self.sz

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
using namespace std;
class MyCircularDeque {
    vector<int> arr;
    int front, rear, sz, capacity;
public:
    MyCircularDeque(int k) : arr(k), front(0), rear(0), sz(0), capacity(k) {}
    bool insertFront(int value) {
        if (isFull()) return false;
        front = (front - 1 + capacity) % capacity;
        arr[front] = value;
        sz++;
        return true;
    }
    bool insertLast(int value) {
        if (isFull()) return false;
        arr[rear] = value;
        rear = (rear + 1) % capacity;
        sz++;
        return true;
    }
    bool deleteFront() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        sz--;
        return true;
    }
    bool deleteLast() {
        if (isEmpty()) return false;
        rear = (rear - 1 + capacity) % capacity;
        sz--;
        return true;
    }
    int getFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }
    int getRear() {
        if (isEmpty()) return -1;
        return arr[(rear - 1 + capacity) % capacity];
    }
    bool isEmpty() { return sz == 0; }
    bool isFull() { return sz == capacity; }
    int size() { return sz; }
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
    private int[] arr;
    private int front, rear, sz, capacity;
    public MyCircularDeque(int k) {
        arr = new int[k];
        capacity = k;
        front = 0; rear = 0; sz = 0;
    }
    public boolean insertFront(int value) {
        if (isFull()) return false;
        front = (front - 1 + capacity) % capacity;
        arr[front] = value;
        sz++;
        return true;
    }
    public boolean insertLast(int value) {
        if (isFull()) return false;
        arr[rear] = value;
        rear = (rear + 1) % capacity;
        sz++;
        return true;
    }
    public boolean deleteFront() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        sz--;
        return true;
    }
    public boolean deleteLast() {
        if (isEmpty()) return false;
        rear = (rear - 1 + capacity) % capacity;
        sz--;
        return true;
    }
    public int getFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }
    public int getRear() {
        if (isEmpty()) return -1;
        return arr[(rear - 1 + capacity) % capacity];
    }
    public boolean isEmpty() { return sz == 0; }
    public boolean isFull() { return sz == capacity; }
    public int size() { return sz; }
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
    int *arr;
    int front, rear, sz, capacity;
} MyCircularDeque;
MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->arr = malloc(k * sizeof(int));
    obj->front = 0;
    obj->rear = 0;
    obj->sz = 0;
    obj->capacity = k;
    return obj;
}
bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) {
    if (obj->sz == obj->capacity) return false;
    obj->front = (obj->front - 1 + obj->capacity) % obj->capacity;
    obj->arr[obj->front] = value;
    obj->sz++;
    return true;
}
bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) {
    if (obj->sz == obj->capacity) return false;
    obj->arr[obj->rear] = value;
    obj->rear = (obj->rear + 1) % obj->capacity;
    obj->sz++;
    return true;
}
bool myCircularDequeDeleteFront(MyCircularDeque* obj) {
    if (obj->sz == 0) return false;
    obj->front = (obj->front + 1) % obj->capacity;
    obj->sz--;
    return true;
}
bool myCircularDequeDeleteLast(MyCircularDeque* obj) {
    if (obj->sz == 0) return false;
    obj->rear = (obj->rear - 1 + obj->capacity) % obj->capacity;
    obj->sz--;
    return true;
}
int myCircularDequeGetFront(MyCircularDeque* obj) {
    if (obj->sz == 0) return -1;
    return obj->arr[obj->front];
}
int myCircularDequeGetRear(MyCircularDeque* obj) {
    if (obj->sz == 0) return -1;
    return obj->arr[(obj->rear - 1 + obj->capacity) % obj->capacity];
}
bool myCircularDequeIsEmpty(MyCircularDeque* obj) {
    return obj->sz == 0;
}
bool myCircularDequeIsFull(MyCircularDeque* obj) {
    return obj->sz == obj->capacity;
}
int myCircularDequeSize(MyCircularDeque* obj) {
    return obj->sz;
}
void myCircularDequeFree(MyCircularDeque* obj) {
    free(obj->arr);
    free(obj);
}

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
  "dcd-e3": {
    python: `class MyCircularDeque:
    def __init__(self, k: int):
        self.capacity = k
        self.arr = [0] * k
        self.front = 0
        self.rear = 0
        self.size = 0
    def insertFront(self, value: int) -> bool:
        if self.isFull(): return False
        self.front = (self.front - 1 + self.capacity) % self.capacity
        self.arr[self.front] = value
        self.size += 1
        return True
    def insertLast(self, value: int) -> bool:
        if self.isFull(): return False
        self.arr[self.rear] = value
        self.rear = (self.rear + 1) % self.capacity
        self.size += 1
        return True
    def deleteFront(self) -> bool:
        if self.isEmpty(): return False
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return True
    def deleteLast(self) -> bool:
        if self.isEmpty(): return False
        self.rear = (self.rear - 1 + self.capacity) % self.capacity
        self.size -= 1
        return True
    def getFront(self) -> int:
        if self.isEmpty(): return -1
        return self.arr[self.front]
    def getRear(self) -> int:
        if self.isEmpty(): return -1
        return self.arr[(self.rear - 1 + self.capacity) % self.capacity]
    def isEmpty(self) -> bool:
        return self.size == 0
    def isFull(self) -> bool:
        return self.size == self.capacity
    def clear(self) -> bool:
        self.front = 0
        self.rear = 0
        self.size = 0
        return True

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
using namespace std;
class MyCircularDeque {
    vector<int> arr;
    int front, rear, size, capacity;
public:
    MyCircularDeque(int k) : arr(k), front(0), rear(0), size(0), capacity(k) {}
    bool insertFront(int value) {
        if (isFull()) return false;
        front = (front - 1 + capacity) % capacity;
        arr[front] = value;
        size++;
        return true;
    }
    bool insertLast(int value) {
        if (isFull()) return false;
        arr[rear] = value;
        rear = (rear + 1) % capacity;
        size++;
        return true;
    }
    bool deleteFront() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    bool deleteLast() {
        if (isEmpty()) return false;
        rear = (rear - 1 + capacity) % capacity;
        size--;
        return true;
    }
    int getFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }
    int getRear() {
        if (isEmpty()) return -1;
        return arr[(rear - 1 + capacity) % capacity];
    }
    bool isEmpty() { return size == 0; }
    bool isFull() { return size == capacity; }
    bool clear() { front = 0; rear = 0; size = 0; return true; }
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
    private int[] arr;
    private int front, rear, size, capacity;
    public MyCircularDeque(int k) {
        arr = new int[k];
        capacity = k;
        front = 0; rear = 0; size = 0;
    }
    public boolean insertFront(int value) {
        if (isFull()) return false;
        front = (front - 1 + capacity) % capacity;
        arr[front] = value;
        size++;
        return true;
    }
    public boolean insertLast(int value) {
        if (isFull()) return false;
        arr[rear] = value;
        rear = (rear + 1) % capacity;
        size++;
        return true;
    }
    public boolean deleteFront() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    public boolean deleteLast() {
        if (isEmpty()) return false;
        rear = (rear - 1 + capacity) % capacity;
        size--;
        return true;
    }
    public int getFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }
    public int getRear() {
        if (isEmpty()) return -1;
        return arr[(rear - 1 + capacity) % capacity];
    }
    public boolean isEmpty() { return size == 0; }
    public boolean isFull() { return size == capacity; }
    public boolean clear() { front = 0; rear = 0; size = 0; return true; }
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
    int *arr;
    int front, rear, size, capacity;
} MyCircularDeque;
MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->arr = malloc(k * sizeof(int));
    obj->front = 0;
    obj->rear = 0;
    obj->size = 0;
    obj->capacity = k;
    return obj;
}
bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) {
    if (obj->size == obj->capacity) return false;
    obj->front = (obj->front - 1 + obj->capacity) % obj->capacity;
    obj->arr[obj->front] = value;
    obj->size++;
    return true;
}
bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) {
    if (obj->size == obj->capacity) return false;
    obj->arr[obj->rear] = value;
    obj->rear = (obj->rear + 1) % obj->capacity;
    obj->size++;
    return true;
}
bool myCircularDequeDeleteFront(MyCircularDeque* obj) {
    if (obj->size == 0) return false;
    obj->front = (obj->front + 1) % obj->capacity;
    obj->size--;
    return true;
}
bool myCircularDequeDeleteLast(MyCircularDeque* obj) {
    if (obj->size == 0) return false;
    obj->rear = (obj->rear - 1 + obj->capacity) % obj->capacity;
    obj->size--;
    return true;
}
int myCircularDequeGetFront(MyCircularDeque* obj) {
    if (obj->size == 0) return -1;
    return obj->arr[obj->front];
}
int myCircularDequeGetRear(MyCircularDeque* obj) {
    if (obj->size == 0) return -1;
    return obj->arr[(obj->rear - 1 + obj->capacity) % obj->capacity];
}
bool myCircularDequeIsEmpty(MyCircularDeque* obj) {
    return obj->size == 0;
}
bool myCircularDequeIsFull(MyCircularDeque* obj) {
    return obj->size == obj->capacity;
}
bool myCircularDequeClear(MyCircularDeque* obj) {
    obj->front = 0; obj->rear = 0; obj->size = 0; return true;
}
void myCircularDequeFree(MyCircularDeque* obj) {
    free(obj->arr);
    free(obj);
}

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
  "dcd-e4": {
    python: `class MyCircularDeque:
    def __init__(self, k: int):
        self.capacity = k
        self.arr = [0] * k
        self.front = 0
        self.rear = 0
        self.size = 0
    def insertFront(self, value: int) -> bool:
        if self.isFull(): return False
        self.front = (self.front - 1 + self.capacity) % self.capacity
        self.arr[self.front] = value
        self.size += 1
        return True
    def insertLast(self, value: int) -> bool:
        if self.isFull(): return False
        self.arr[self.rear] = value
        self.rear = (self.rear + 1) % self.capacity
        self.size += 1
        return True
    def deleteFront(self) -> bool:
        if self.isEmpty(): return False
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return True
    def deleteLast(self) -> bool:
        if self.isEmpty(): return False
        self.rear = (self.rear - 1 + self.capacity) % self.capacity
        self.size -= 1
        return True
    def getFront(self) -> int:
        if self.isEmpty(): return -1
        return self.arr[self.front]
    def getRear(self) -> int:
        if self.isEmpty(): return -1
        return self.arr[(self.rear - 1 + self.capacity) % self.capacity]
    def isEmpty(self) -> bool:
        return self.size == 0
    def isFull(self) -> bool:
        return self.size == self.capacity
    def contains(self, val: int) -> bool:
        for i in range(self.size):
            if self.arr[(self.front + i) % self.capacity] == val:
                return True
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
using namespace std;
class MyCircularDeque {
    vector<int> arr;
    int front, rear, size, capacity;
public:
    MyCircularDeque(int k) : arr(k), front(0), rear(0), size(0), capacity(k) {}
    bool insertFront(int value) {
        if (isFull()) return false;
        front = (front - 1 + capacity) % capacity;
        arr[front] = value;
        size++;
        return true;
    }
    bool insertLast(int value) {
        if (isFull()) return false;
        arr[rear] = value;
        rear = (rear + 1) % capacity;
        size++;
        return true;
    }
    bool deleteFront() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    bool deleteLast() {
        if (isEmpty()) return false;
        rear = (rear - 1 + capacity) % capacity;
        size--;
        return true;
    }
    int getFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }
    int getRear() {
        if (isEmpty()) return -1;
        return arr[(rear - 1 + capacity) % capacity];
    }
    bool isEmpty() { return size == 0; }
    bool isFull() { return size == capacity; }
    bool contains(int val) {
        for (int i = 0; i < size; i++) {
            if (arr[(front + i) % capacity] == val) return true;
        }
        return false;
    }
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
    private int[] arr;
    private int front, rear, size, capacity;
    public MyCircularDeque(int k) {
        arr = new int[k];
        capacity = k;
        front = 0; rear = 0; size = 0;
    }
    public boolean insertFront(int value) {
        if (isFull()) return false;
        front = (front - 1 + capacity) % capacity;
        arr[front] = value;
        size++;
        return true;
    }
    public boolean insertLast(int value) {
        if (isFull()) return false;
        arr[rear] = value;
        rear = (rear + 1) % capacity;
        size++;
        return true;
    }
    public boolean deleteFront() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    public boolean deleteLast() {
        if (isEmpty()) return false;
        rear = (rear - 1 + capacity) % capacity;
        size--;
        return true;
    }
    public int getFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }
    public int getRear() {
        if (isEmpty()) return -1;
        return arr[(rear - 1 + capacity) % capacity];
    }
    public boolean isEmpty() { return size == 0; }
    public boolean isFull() { return size == capacity; }
    public boolean contains(int val) {
        for (int i = 0; i < size; i++) {
            if (arr[(front + i) % capacity] == val) return true;
        }
        return false;
    }
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
    int *arr;
    int front, rear, size, capacity;
} MyCircularDeque;
MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->arr = malloc(k * sizeof(int));
    obj->front = 0;
    obj->rear = 0;
    obj->size = 0;
    obj->capacity = k;
    return obj;
}
bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) {
    if (obj->size == obj->capacity) return false;
    obj->front = (obj->front - 1 + obj->capacity) % obj->capacity;
    obj->arr[obj->front] = value;
    obj->size++;
    return true;
}
bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) {
    if (obj->size == obj->capacity) return false;
    obj->arr[obj->rear] = value;
    obj->rear = (obj->rear + 1) % obj->capacity;
    obj->size++;
    return true;
}
bool myCircularDequeDeleteFront(MyCircularDeque* obj) {
    if (obj->size == 0) return false;
    obj->front = (obj->front + 1) % obj->capacity;
    obj->size--;
    return true;
}
bool myCircularDequeDeleteLast(MyCircularDeque* obj) {
    if (obj->size == 0) return false;
    obj->rear = (obj->rear - 1 + obj->capacity) % obj->capacity;
    obj->size--;
    return true;
}
int myCircularDequeGetFront(MyCircularDeque* obj) {
    if (obj->size == 0) return -1;
    return obj->arr[obj->front];
}
int myCircularDequeGetRear(MyCircularDeque* obj) {
    if (obj->size == 0) return -1;
    return obj->arr[(obj->rear - 1 + obj->capacity) % obj->capacity];
}
bool myCircularDequeIsEmpty(MyCircularDeque* obj) {
    return obj->size == 0;
}
bool myCircularDequeIsFull(MyCircularDeque* obj) {
    return obj->size == obj->capacity;
}
bool myCircularDequeContains(MyCircularDeque* obj, int val) {
    for (int i = 0; i < obj->size; i++) {
        if (obj->arr[(obj->front + i) % obj->capacity] == val) return true;
    }
    return false;
}
void myCircularDequeFree(MyCircularDeque* obj) {
    free(obj->arr);
    free(obj);
}

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
  "dcd-e5": {
    python: `class MyCircularDeque:
    def __init__(self, k: int):
        self.capacity = k
        self.arr = [0] * k
        self.front = 0
        self.rear = 0
        self.size = 0
    def insertFront(self, value: int) -> bool:
        if self.isFull(): return False
        self.front = (self.front - 1 + self.capacity) % self.capacity
        self.arr[self.front] = value
        self.size += 1
        return True
    def insertLast(self, value: int) -> bool:
        if self.isFull(): return False
        self.arr[self.rear] = value
        self.rear = (self.rear + 1) % self.capacity
        self.size += 1
        return True
    def deleteFront(self) -> bool:
        if self.isEmpty(): return False
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return True
    def deleteLast(self) -> bool:
        if self.isEmpty(): return False
        self.rear = (self.rear - 1 + self.capacity) % self.capacity
        self.size -= 1
        return True
    def getFront(self) -> int:
        if self.isEmpty(): return -1
        return self.arr[self.front]
    def getRear(self) -> int:
        if self.isEmpty(): return -1
        return self.arr[(self.rear - 1 + self.capacity) % self.capacity]
    def isEmpty(self) -> bool:
        return self.size == 0
    def isFull(self) -> bool:
        return self.size == self.capacity
    def get(self, index: int) -> int:
        if index < 0 or index >= self.size: return -1
        return self.arr[(self.front + index) % self.capacity]

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
using namespace std;
class MyCircularDeque {
    vector<int> arr;
    int front, rear, size, capacity;
public:
    MyCircularDeque(int k) : arr(k), front(0), rear(0), size(0), capacity(k) {}
    bool insertFront(int value) {
        if (isFull()) return false;
        front = (front - 1 + capacity) % capacity;
        arr[front] = value;
        size++;
        return true;
    }
    bool insertLast(int value) {
        if (isFull()) return false;
        arr[rear] = value;
        rear = (rear + 1) % capacity;
        size++;
        return true;
    }
    bool deleteFront() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    bool deleteLast() {
        if (isEmpty()) return false;
        rear = (rear - 1 + capacity) % capacity;
        size--;
        return true;
    }
    int getFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }
    int getRear() {
        if (isEmpty()) return -1;
        return arr[(rear - 1 + capacity) % capacity];
    }
    bool isEmpty() { return size == 0; }
    bool isFull() { return size == capacity; }
    int get(int index) {
        if (index < 0 || index >= size) return -1;
        return arr[(front + index) % capacity];
    }
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
    private int[] arr;
    private int front, rear, size, capacity;
    public MyCircularDeque(int k) {
        arr = new int[k];
        capacity = k;
        front = 0; rear = 0; size = 0;
    }
    public boolean insertFront(int value) {
        if (isFull()) return false;
        front = (front - 1 + capacity) % capacity;
        arr[front] = value;
        size++;
        return true;
    }
    public boolean insertLast(int value) {
        if (isFull()) return false;
        arr[rear] = value;
        rear = (rear + 1) % capacity;
        size++;
        return true;
    }
    public boolean deleteFront() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    public boolean deleteLast() {
        if (isEmpty()) return false;
        rear = (rear - 1 + capacity) % capacity;
        size--;
        return true;
    }
    public int getFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }
    public int getRear() {
        if (isEmpty()) return -1;
        return arr[(rear - 1 + capacity) % capacity];
    }
    public boolean isEmpty() { return size == 0; }
    public boolean isFull() { return size == capacity; }
    public int get(int index) {
        if (index < 0 || index >= size) return -1;
        return arr[(front + index) % capacity];
    }
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
    int *arr;
    int front, rear, size, capacity;
} MyCircularDeque;
MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->arr = malloc(k * sizeof(int));
    obj->front = 0;
    obj->rear = 0;
    obj->size = 0;
    obj->capacity = k;
    return obj;
}
bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) {
    if (obj->size == obj->capacity) return false;
    obj->front = (obj->front - 1 + obj->capacity) % obj->capacity;
    obj->arr[obj->front] = value;
    obj->size++;
    return true;
}
bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) {
    if (obj->size == obj->capacity) return false;
    obj->arr[obj->rear] = value;
    obj->rear = (obj->rear + 1) % obj->capacity;
    obj->size++;
    return true;
}
bool myCircularDequeDeleteFront(MyCircularDeque* obj) {
    if (obj->size == 0) return false;
    obj->front = (obj->front + 1) % obj->capacity;
    obj->size--;
    return true;
}
bool myCircularDequeDeleteLast(MyCircularDeque* obj) {
    if (obj->size == 0) return false;
    obj->rear = (obj->rear - 1 + obj->capacity) % obj->capacity;
    obj->size--;
    return true;
}
int myCircularDequeGetFront(MyCircularDeque* obj) {
    if (obj->size == 0) return -1;
    return obj->arr[obj->front];
}
int myCircularDequeGetRear(MyCircularDeque* obj) {
    if (obj->size == 0) return -1;
    return obj->arr[(obj->rear - 1 + obj->capacity) % obj->capacity];
}
bool myCircularDequeIsEmpty(MyCircularDeque* obj) {
    return obj->size == 0;
}
bool myCircularDequeIsFull(MyCircularDeque* obj) {
    return obj->size == obj->capacity;
}
int myCircularDequeGet(MyCircularDeque* obj, int index) {
    if (index < 0 || index >= obj->size) return -1;
    return obj->arr[(obj->front + index) % obj->capacity];
}
void myCircularDequeFree(MyCircularDeque* obj) {
    free(obj->arr);
    free(obj);
}

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
  "dcd-m1": {
    python: `class Node:
    def __init__(self, val=0):
        self.val = val
        self.prev = None
        self.next = None

class MyCircularDeque:
    def __init__(self, k: int):
        self.capacity = k
        self.size = 0
        self.head = Node()
        self.tail = Node()
        self.head.next = self.tail
        self.tail.prev = self.head

    def insertFront(self, value: int) -> bool:
        if self.isFull(): return False
        node = Node(value)
        nxt = self.head.next
        node.next = nxt
        node.prev = self.head
        self.head.next = node
        nxt.prev = node
        self.size += 1
        return True

    def insertLast(self, value: int) -> bool:
        if self.isFull(): return False
        node = Node(value)
        prv = self.tail.prev
        node.next = self.tail
        node.prev = prv
        prv.next = node
        self.tail.prev = node
        self.size += 1
        return True

    def deleteFront(self) -> bool:
        if self.isEmpty(): return False
        node = self.head.next
        nxt = node.next
        self.head.next = nxt
        nxt.prev = self.head
        self.size -= 1
        return True

    def deleteLast(self) -> bool:
        if self.isEmpty(): return False
        node = self.tail.prev
        prv = node.prev
        prv.next = self.tail
        self.tail.prev = prv
        self.size -= 1
        return True

    def getFront(self) -> int:
        if self.isEmpty(): return -1
        return self.head.next.val

    def getRear(self) -> int:
        if self.isEmpty(): return -1
        return self.tail.prev.val

    def isEmpty(self) -> bool:
        return self.size == 0

    def isFull(self) -> bool:
        return self.size == self.capacity

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
    cpp: `#include <iostream>
using namespace std;
struct Node {
    int val;
    Node* prev;
    Node* next;
    Node(int v = 0) : val(v), prev(nullptr), next(nullptr) {}
};
class MyCircularDeque {
    int capacity;
    int size;
    Node* head;
    Node* tail;
public:
    MyCircularDeque(int k) : capacity(k), size(0) {
        head = new Node();
        tail = new Node();
        head->next = tail;
        tail->prev = head;
    }
    ~MyCircularDeque() {
        Node* curr = head;
        while (curr) {
            Node* nxt = curr->next;
            delete curr;
            curr = nxt;
        }
    }
    bool insertFront(int value) {
        if (isFull()) return false;
        Node* node = new Node(value);
        Node* nxt = head->next;
        node->next = nxt;
        node->prev = head;
        head->next = node;
        nxt->prev = node;
        size++;
        return true;
    }
    bool insertLast(int value) {
        if (isFull()) return false;
        Node* node = new Node(value);
        Node* prv = tail->prev;
        node->next = tail;
        node->prev = prv;
        prv->next = node;
        tail->prev = node;
        size++;
        return true;
    }
    bool deleteFront() {
        if (isEmpty()) return false;
        Node* node = head->next;
        Node* nxt = node->next;
        head->next = nxt;
        nxt->prev = head;
        delete node;
        size--;
        return true;
    }
    bool deleteLast() {
        if (isEmpty()) return false;
        Node* node = tail->prev;
        Node* prv = node->prev;
        prv->next = tail;
        tail->prev = prv;
        delete node;
        size--;
        return true;
    }
    int getFront() {
        if (isEmpty()) return -1;
        return head->next->val;
    }
    int getRear() {
        if (isEmpty()) return -1;
        return tail->prev->val;
    }
    bool isEmpty() { return size == 0; }
    bool isFull() { return size == capacity; }
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
    java: `class Node {
    int val;
    Node prev, next;
    Node(int v) { val = v; }
    Node() {}
}
class MyCircularDeque {
    private Node head, tail;
    private int size, capacity;
    public MyCircularDeque(int k) {
        capacity = k;
        size = 0;
        head = new Node();
        tail = new Node();
        head.next = tail;
        tail.prev = head;
    }
    public boolean insertFront(int value) {
        if (isFull()) return false;
        Node node = new Node(value);
        Node nxt = head.next;
        node.next = nxt;
        node.prev = head;
        head.next = node;
        nxt.prev = node;
        size++;
        return true;
    }
    public boolean insertLast(int value) {
        if (isFull()) return false;
        Node node = new Node(value);
        Node prv = tail.prev;
        node.next = tail;
        node.prev = prv;
        prv.next = node;
        tail.prev = node;
        size++;
        return true;
    }
    public boolean deleteFront() {
        if (isEmpty()) return false;
        Node node = head.next;
        Node nxt = node.next;
        head.next = nxt;
        nxt.prev = head;
        size--;
        return true;
    }
    public boolean deleteLast() {
        if (isEmpty()) return false;
        Node node = tail.prev;
        Node prv = node.prev;
        prv.next = tail;
        tail.prev = prv;
        size--;
        return true;
    }
    public int getFront() {
        if (isEmpty()) return -1;
        return head.next.val;
    }
    public int getRear() {
        if (isEmpty()) return -1;
        return tail.prev.val;
    }
    public boolean isEmpty() { return size == 0; }
    public boolean isFull() { return size == capacity; }
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

typedef struct Node {
    int val;
    struct Node* prev;
    struct Node* next;
} Node;

typedef struct {
    int capacity;
    int size;
    Node* head;
    Node* tail;
} MyCircularDeque;

MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->capacity = k;
    obj->size = 0;
    obj->head = malloc(sizeof(Node));
    obj->tail = malloc(sizeof(Node));
    obj->head->prev = NULL;
    obj->head->next = obj->tail;
    obj->tail->prev = obj->head;
    obj->tail->next = NULL;
    return obj;
}

bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) {
    if (obj->size == obj->capacity) return false;
    Node* node = malloc(sizeof(Node));
    node->val = value;
    Node* nxt = obj->head->next;
    node->next = nxt;
    node->prev = obj->head;
    obj->head->next = node;
    nxt->prev = node;
    obj->size++;
    return true;
}

bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) {
    if (obj->size == obj->capacity) return false;
    Node* node = malloc(sizeof(Node));
    node->val = value;
    Node* prv = obj->tail->prev;
    node->next = obj->tail;
    node->prev = prv;
    prv->next = node;
    obj->tail->prev = node;
    obj->size++;
    return true;
}

bool myCircularDequeDeleteFront(MyCircularDeque* obj) {
    if (obj->size == 0) return false;
    Node* node = obj->head->next;
    Node* nxt = node->next;
    obj->head->next = nxt;
    nxt->prev = obj->head;
    free(node);
    obj->size--;
    return true;
}

bool myCircularDequeDeleteLast(MyCircularDeque* obj) {
    if (obj->size == 0) return false;
    Node* node = obj->tail->prev;
    Node* prv = node->prev;
    prv->next = obj->tail;
    obj->tail->prev = prv;
    free(node);
    obj->size--;
    return true;
}

int myCircularDequeGetFront(MyCircularDeque* obj) {
    if (obj->size == 0) return -1;
    return obj->head->next->val;
}

int myCircularDequeGetRear(MyCircularDeque* obj) {
    if (obj->size == 0) return -1;
    return obj->tail->prev->val;
}

bool myCircularDequeIsEmpty(MyCircularDeque* obj) {
    return obj->size == 0;
}

bool myCircularDequeIsFull(MyCircularDeque* obj) {
    return obj->size == obj->capacity;
}

void myCircularDequeFree(MyCircularDeque* obj) {
    Node* curr = obj->head;
    while (curr) {
        Node* nxt = curr->next;
        free(curr);
        curr = nxt;
    }
    free(obj);
}

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
  "dcd-m2": {
    python: `class MyCircularDeque:
    def __init__(self, k: int):
        self.capacity = k
        self.arr = [0] * k
        self.front = 0
        self.rear = 0
        self.size = 0
    def resize(self):
        new_cap = self.capacity * 2
        new_arr = [0] * new_cap
        for i in range(self.size):
            new_arr[i] = self.arr[(self.front + i) % self.capacity]
        self.arr = new_arr
        self.front = 0
        self.rear = self.size
        self.capacity = new_cap
    def insertFront(self, value: int) -> bool:
        if self.size == self.capacity:
            self.resize()
        self.front = (self.front - 1 + self.capacity) % self.capacity
        self.arr[self.front] = value
        self.size += 1
        return True
    def insertLast(self, value: int) -> bool:
        if self.size == self.capacity:
            self.resize()
        self.arr[self.rear] = value
        self.rear = (self.rear + 1) % self.capacity
        self.size += 1
        return True
    def deleteFront(self) -> bool:
        if self.isEmpty(): return False
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return True
    def deleteLast(self) -> bool:
        if self.isEmpty(): return False
        self.rear = (self.rear - 1 + self.capacity) % self.capacity
        self.size -= 1
        return True
    def getFront(self) -> int:
        if self.isEmpty(): return -1
        return self.arr[self.front]
    def getRear(self) -> int:
        if self.isEmpty(): return -1
        return self.arr[(self.rear - 1 + self.capacity) % self.capacity]
    def isEmpty(self) -> bool:
        return self.size == 0
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
using namespace std;
class MyCircularDeque {
    vector<int> arr;
    int front, rear, size, capacity;
    void resize() {
        int new_capacity = capacity * 2;
        vector<int> new_arr(new_capacity);
        for (int i = 0; i < size; i++) {
            new_arr[i] = arr[(front + i) % capacity];
        }
        arr = new_arr;
        front = 0;
        rear = size;
        capacity = new_capacity;
    }
public:
    MyCircularDeque(int k) : arr(k), front(0), rear(0), size(0), capacity(k) {}
    bool insertFront(int value) {
        if (size == capacity) resize();
        front = (front - 1 + capacity) % capacity;
        arr[front] = value;
        size++;
        return true;
    }
    bool insertLast(int value) {
        if (size == capacity) resize();
        arr[rear] = value;
        rear = (rear + 1) % capacity;
        size++;
        return true;
    }
    bool deleteFront() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    bool deleteLast() {
        if (isEmpty()) return false;
        rear = (rear - 1 + capacity) % capacity;
        size--;
        return true;
    }
    int getFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }
    int getRear() {
        if (isEmpty()) return -1;
        return arr[(rear - 1 + capacity) % capacity];
    }
    bool isEmpty() { return size == 0; }
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
    java: `class MyCircularDeque {
    private int[] arr;
    private int front, rear, size, capacity;
    public MyCircularDeque(int k) {
        arr = new int[k];
        capacity = k;
        front = 0; rear = 0; size = 0;
    }
    private void resize() {
        int new_capacity = capacity * 2;
        int[] new_arr = new int[new_capacity];
        for (int i = 0; i < size; i++) {
            new_arr[i] = arr[(front + i) % capacity];
        }
        arr = new_arr;
        front = 0;
        rear = size;
        capacity = new_capacity;
    }
    public boolean insertFront(int value) {
        if (size == capacity) resize();
        front = (front - 1 + capacity) % capacity;
        arr[front] = value;
        size++;
        return true;
    }
    public boolean insertLast(int value) {
        if (size == capacity) resize();
        arr[rear] = value;
        rear = (rear + 1) % capacity;
        size++;
        return true;
    }
    public boolean deleteFront() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    public boolean deleteLast() {
        if (isEmpty()) return false;
        rear = (rear - 1 + capacity) % capacity;
        size--;
        return true;
    }
    public int getFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }
    public int getRear() {
        if (isEmpty()) return -1;
        return arr[(rear - 1 + capacity) % capacity];
    }
    public boolean isEmpty() { return size == 0; }
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
    int *arr;
    int front, rear, size, capacity;
} MyCircularDeque;
MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->arr = malloc(k * sizeof(int));
    obj->front = 0;
    obj->rear = 0;
    obj->size = 0;
    obj->capacity = k;
    return obj;
}
void resize(MyCircularDeque* obj) {
    int new_capacity = obj->capacity * 2;
    int* new_arr = malloc(new_capacity * sizeof(int));
    for (int i = 0; i < obj->size; i++) {
        new_arr[i] = obj->arr[(obj->front + i) % obj->capacity];
    }
    free(obj->arr);
    obj->arr = new_arr;
    obj->front = 0;
    obj->rear = obj->size;
    obj->capacity = new_capacity;
}
bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) {
    if (obj->size == obj->capacity) resize(obj);
    obj->front = (obj->front - 1 + obj->capacity) % obj->capacity;
    obj->arr[obj->front] = value;
    obj->size++;
    return true;
}
bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) {
    if (obj->size == obj->capacity) resize(obj);
    obj->arr[obj->rear] = value;
    obj->rear = (obj->rear + 1) % obj->capacity;
    obj->size++;
    return true;
}
bool myCircularDequeDeleteFront(MyCircularDeque* obj) {
    if (obj->size == 0) return false;
    obj->front = (obj->front + 1) % obj->capacity;
    obj->size--;
    return true;
}
bool myCircularDequeDeleteLast(MyCircularDeque* obj) {
    if (obj->size == 0) return false;
    obj->rear = (obj->rear - 1 + obj->capacity) % obj->capacity;
    obj->size--;
    return true;
}
int myCircularDequeGetFront(MyCircularDeque* obj) {
    if (obj->size == 0) return -1;
    return obj->arr[obj->front];
}
int myCircularDequeGetRear(MyCircularDeque* obj) {
    if (obj->size == 0) return -1;
    return obj->arr[(obj->rear - 1 + obj->capacity) % obj->capacity];
}
bool myCircularDequeIsEmpty(MyCircularDeque* obj) {
    return obj->size == 0;
}
bool myCircularDequeIsFull(MyCircularDeque* obj) {
    return false;
}
void myCircularDequeFree(MyCircularDeque* obj) {
    free(obj->arr);
    free(obj);
}

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
  "dcd-m3": {
    python: `class MyCircularDeque:
    def __init__(self, k: int):
        self.capacity = k
        self.arr = [0] * k
        self.front = 0
        self.rear = 0
        self.size = 0
    def insertFront(self, value: int) -> bool:
        if self.isFull(): return False
        self.front = (self.front - 1 + self.capacity) % self.capacity
        self.arr[self.front] = value
        self.size += 1
        return True
    def insertLast(self, value: int) -> bool:
        if self.isFull(): return False
        self.arr[self.rear] = value
        self.rear = (self.rear + 1) % self.capacity
        self.size += 1
        return True
    def deleteFront(self) -> bool:
        if self.isEmpty(): return False
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return True
    def deleteLast(self) -> bool:
        if self.isEmpty(): return False
        self.rear = (self.rear - 1 + self.capacity) % self.capacity
        self.size -= 1
        return True
    def getFront(self) -> int:
        if self.isEmpty(): return -1
        return self.arr[self.front]
    def getRear(self) -> int:
        if self.isEmpty(): return -1
        return self.arr[(self.rear - 1 + self.capacity) % self.capacity]
    def isEmpty(self) -> bool:
        return self.size == 0
    def isFull(self) -> bool:
        return self.size == self.capacity
    def reverse(self) -> bool:
        for i in range(self.size // 2):
            idx1 = (self.front + i) % self.capacity
            idx2 = (self.front + self.size - 1 - i) % self.capacity
            self.arr[idx1], self.arr[idx2] = self.arr[idx2], self.arr[idx1]
        return True

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
using namespace std;
class MyCircularDeque {
    vector<int> arr;
    int front, rear, size, capacity;
public:
    MyCircularDeque(int k) : arr(k), front(0), rear(0), size(0), capacity(k) {}
    bool insertFront(int value) {
        if (isFull()) return false;
        front = (front - 1 + capacity) % capacity;
        arr[front] = value;
        size++;
        return true;
    }
    bool insertLast(int value) {
        if (isFull()) return false;
        arr[rear] = value;
        rear = (rear + 1) % capacity;
        size++;
        return true;
    }
    bool deleteFront() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    bool deleteLast() {
        if (isEmpty()) return false;
        rear = (rear - 1 + capacity) % capacity;
        size--;
        return true;
    }
    int getFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }
    int getRear() {
        if (isEmpty()) return -1;
        return arr[(rear - 1 + capacity) % capacity];
    }
    bool isEmpty() { return size == 0; }
    bool isFull() { return size == capacity; }
    bool reverse() {
        for (int i = 0; i < size / 2; i++) {
            int idx1 = (front + i) % capacity;
            int idx2 = (front + size - 1 - i) % capacity;
            swap(arr[idx1], arr[idx2]);
        }
        return true;
    }
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
    private int[] arr;
    private int front, rear, size, capacity;
    public MyCircularDeque(int k) {
        arr = new int[k];
        capacity = k;
        front = 0; rear = 0; size = 0;
    }
    public boolean insertFront(int value) {
        if (isFull()) return false;
        front = (front - 1 + capacity) % capacity;
        arr[front] = value;
        size++;
        return true;
    }
    public boolean insertLast(int value) {
        if (isFull()) return false;
        arr[rear] = value;
        rear = (rear + 1) % capacity;
        size++;
        return true;
    }
    public boolean deleteFront() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    public boolean deleteLast() {
        if (isEmpty()) return false;
        rear = (rear - 1 + capacity) % capacity;
        size--;
        return true;
    }
    public int getFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }
    public int getRear() {
        if (isEmpty()) return -1;
        return arr[(rear - 1 + capacity) % capacity];
    }
    public boolean isEmpty() { return size == 0; }
    public boolean isFull() { return size == capacity; }
    public boolean reverse() {
        for (int i = 0; i < size / 2; i++) {
            int idx1 = (front + i) % capacity;
            int idx2 = (front + size - 1 - i) % capacity;
            int temp = arr[idx1];
            arr[idx1] = arr[idx2];
            arr[idx2] = temp;
        }
        return true;
    }
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
    int *arr;
    int front, rear, size, capacity;
} MyCircularDeque;
MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->arr = malloc(k * sizeof(int));
    obj->front = 0;
    obj->rear = 0;
    obj->size = 0;
    obj->capacity = k;
    return obj;
}
bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) {
    if (obj->size == obj->capacity) return false;
    obj->front = (obj->front - 1 + obj->capacity) % obj->capacity;
    obj->arr[obj->front] = value;
    obj->size++;
    return true;
}
bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) {
    if (obj->size == obj->capacity) return false;
    obj->arr[obj->rear] = value;
    obj->rear = (obj->rear + 1) % obj->capacity;
    obj->size++;
    return true;
}
bool myCircularDequeDeleteFront(MyCircularDeque* obj) {
    if (obj->size == 0) return false;
    obj->front = (obj->front + 1) % obj->capacity;
    obj->size--;
    return true;
}
bool myCircularDequeDeleteLast(MyCircularDeque* obj) {
    if (obj->size == 0) return false;
    obj->rear = (obj->rear - 1 + obj->capacity) % obj->capacity;
    obj->size--;
    return true;
}
int myCircularDequeGetFront(MyCircularDeque* obj) {
    if (obj->size == 0) return -1;
    return obj->arr[obj->front];
}
int myCircularDequeGetRear(MyCircularDeque* obj) {
    if (obj->size == 0) return -1;
    return obj->arr[(obj->rear - 1 + obj->capacity) % obj->capacity];
}
bool myCircularDequeIsEmpty(MyCircularDeque* obj) {
    return obj->size == 0;
}
bool myCircularDequeIsFull(MyCircularDeque* obj) {
    return obj->size == obj->capacity;
}
bool myCircularDequeReverse(MyCircularDeque* obj) {
    for (int i = 0; i < obj->size / 2; i++) {
        int idx1 = (obj->front + i) % obj->capacity;
        int idx2 = (obj->front + obj->size - 1 - i) % obj->capacity;
        int temp = obj->arr[idx1];
        obj->arr[idx1] = obj->arr[idx2];
        obj->arr[idx2] = temp;
    }
    return true;
}
void myCircularDequeFree(MyCircularDeque* obj) {
    free(obj->arr);
    free(obj);
}

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
  "dcd-m4": {
    python: `class MyCircularDeque:
    def __init__(self, k: int):
        self.capacity = k
        self.arr = [0] * k
        self.front = 0
        self.rear = 0
        self.size = 0
    def insertFront(self, value: int) -> bool:
        if self.isFull(): return False
        self.front = (self.front - 1 + self.capacity) % self.capacity
        self.arr[self.front] = value
        self.size += 1
        return True
    def insertLast(self, value: int) -> bool:
        if self.isFull(): return False
        self.arr[self.rear] = value
        self.rear = (self.rear + 1) % self.capacity
        self.size += 1
        return True
    def deleteFront(self) -> bool:
        if self.isEmpty(): return False
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return True
    def deleteLast(self) -> bool:
        if self.isEmpty(): return False
        self.rear = (self.rear - 1 + self.capacity) % self.capacity
        self.size -= 1
        return True
    def getFront(self) -> int:
        if self.isEmpty(): return -1
        return self.arr[self.front]
    def getRear(self) -> int:
        if self.isEmpty(): return -1
        return self.arr[(self.rear - 1 + self.capacity) % self.capacity]
    def isEmpty(self) -> bool:
        return self.size == 0
    def isFull(self) -> bool:
        return self.size == self.capacity
    def rotate(self, k: int) -> bool:
        if self.size <= 1: return True
        steps = k % self.size
        for _ in range(steps):
            val = self.arr[(self.rear - 1 + self.capacity) % self.capacity]
            self.rear = (self.rear - 1 + self.capacity) % self.capacity
            self.front = (self.front - 1 + self.capacity) % self.capacity
            self.arr[self.front] = val
        return True

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
using namespace std;
class MyCircularDeque {
    vector<int> arr;
    int front, rear, size, capacity;
public:
    MyCircularDeque(int k) : arr(k), front(0), rear(0), size(0), capacity(k) {}
    bool insertFront(int value) {
        if (isFull()) return false;
        front = (front - 1 + capacity) % capacity;
        arr[front] = value;
        size++;
        return true;
    }
    bool insertLast(int value) {
        if (isFull()) return false;
        arr[rear] = value;
        rear = (rear + 1) % capacity;
        size++;
        return true;
    }
    bool deleteFront() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    bool deleteLast() {
        if (isEmpty()) return false;
        rear = (rear - 1 + capacity) % capacity;
        size--;
        return true;
    }
    int getFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }
    int getRear() {
        if (isEmpty()) return -1;
        return arr[(rear - 1 + capacity) % capacity];
    }
    bool isEmpty() { return size == 0; }
    bool isFull() { return size == capacity; }
    bool rotate(int k) {
        if (size <= 1) return true;
        int steps = k % size;
        if (steps < 0) steps += size;
        for (int i = 0; i < steps; i++) {
            int val = arr[(rear - 1 + capacity) % capacity];
            rear = (rear - 1 + capacity) % capacity;
            front = (front - 1 + capacity) % capacity;
            arr[front] = val;
        }
        return true;
    }
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
    private int[] arr;
    private int front, rear, size, capacity;
    public MyCircularDeque(int k) {
        arr = new int[k];
        capacity = k;
        front = 0; rear = 0; size = 0;
    }
    public boolean insertFront(int value) {
        if (isFull()) return false;
        front = (front - 1 + capacity) % capacity;
        arr[front] = value;
        size++;
        return true;
    }
    public boolean insertLast(int value) {
        if (isFull()) return false;
        arr[rear] = value;
        rear = (rear + 1) % capacity;
        size++;
        return true;
    }
    public boolean deleteFront() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    public boolean deleteLast() {
        if (isEmpty()) return false;
        rear = (rear - 1 + capacity) % capacity;
        size--;
        return true;
    }
    public int getFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }
    public int getRear() {
        if (isEmpty()) return -1;
        return arr[(rear - 1 + capacity) % capacity];
    }
    public boolean isEmpty() { return size == 0; }
    public boolean isFull() { return size == capacity; }
    public boolean rotate(int k) {
        if (size <= 1) return true;
        int steps = k % size;
        if (steps < 0) steps += size;
        for (int i = 0; i < steps; i++) {
            int val = arr[(rear - 1 + capacity) % capacity];
            rear = (rear - 1 + capacity) % capacity;
            front = (front - 1 + capacity) % capacity;
            arr[front] = val;
        }
        return true;
    }
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
    int *arr;
    int front, rear, size, capacity;
} MyCircularDeque;
MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->arr = malloc(k * sizeof(int));
    obj->front = 0;
    obj->rear = 0;
    obj->size = 0;
    obj->capacity = k;
    return obj;
}
bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) {
    if (obj->size == obj->capacity) return false;
    obj->front = (obj->front - 1 + obj->capacity) % obj->capacity;
    obj->arr[obj->front] = value;
    obj->size++;
    return true;
}
bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) {
    if (obj->size == obj->capacity) return false;
    obj->arr[obj->rear] = value;
    obj->rear = (obj->rear + 1) % obj->capacity;
    obj->size++;
    return true;
}
bool myCircularDequeDeleteFront(MyCircularDeque* obj) {
    if (obj->size == 0) return false;
    obj->front = (obj->front + 1) % obj->capacity;
    obj->size--;
    return true;
}
bool myCircularDequeDeleteLast(MyCircularDeque* obj) {
    if (obj->size == 0) return false;
    obj->rear = (obj->rear - 1 + obj->capacity) % obj->capacity;
    obj->size--;
    return true;
}
int myCircularDequeGetFront(MyCircularDeque* obj) {
    if (obj->size == 0) return -1;
    return obj->arr[obj->front];
}
int myCircularDequeGetRear(MyCircularDeque* obj) {
    if (obj->size == 0) return -1;
    return obj->arr[(obj->rear - 1 + obj->capacity) % obj->capacity];
}
bool myCircularDequeIsEmpty(MyCircularDeque* obj) {
    return obj->size == 0;
}
bool myCircularDequeIsFull(MyCircularDeque* obj) {
    return obj->size == obj->capacity;
}
bool myCircularDequeRotate(MyCircularDeque* obj, int k) {
    if (obj->size <= 1) return true;
    int steps = k % obj->size;
    if (steps < 0) steps += obj->size;
    for (int i = 0; i < steps; i++) {
        int val = obj->arr[(obj->rear - 1 + obj->capacity) % obj->capacity];
        obj->rear = (obj->rear - 1 + obj->capacity) % obj->capacity;
        obj->front = (obj->front - 1 + obj->capacity) % obj->capacity;
        obj->arr[obj->front] = val;
    }
    return true;
}
void myCircularDequeFree(MyCircularDeque* obj) {
    free(obj->arr);
    free(obj);
}

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
  "dcd-m5": {
    python: `class MyCircularDeque:
    def __init__(self, k: int):
        self.capacity = k
        self.arr = [0] * k
        self.front = 0
        self.rear = 0
        self.size = 0
        self.sum_val = 0
    def insertFront(self, value: int) -> bool:
        if self.isFull(): return False
        self.front = (self.front - 1 + self.capacity) % self.capacity
        self.arr[self.front] = value
        self.size += 1
        self.sum_val += value
        return True
    def insertLast(self, value: int) -> bool:
        if self.isFull(): return False
        self.arr[self.rear] = value
        self.rear = (self.rear + 1) % self.capacity
        self.size += 1
        self.sum_val += value
        return True
    def deleteFront(self) -> bool:
        if self.isEmpty(): return False
        self.sum_val -= self.arr[self.front]
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return True
    def deleteLast(self) -> bool:
        if self.isEmpty(): return False
        val = self.arr[(self.rear - 1 + self.capacity) % self.capacity]
        self.sum_val -= val
        self.rear = (self.rear - 1 + self.capacity) % self.capacity
        self.size -= 1
        return True
    def getFront(self) -> int:
        if self.isEmpty(): return -1
        return self.arr[self.front]
    def getRear(self) -> int:
        if self.isEmpty(): return -1
        return self.arr[(self.rear - 1 + self.capacity) % self.capacity]
    def isEmpty(self) -> bool:
        return self.size == 0
    def isFull(self) -> bool:
        return self.size == self.capacity
    def sum(self) -> int:
        return self.sum_val

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
using namespace std;
class MyCircularDeque {
    vector<int> arr;
    int front, rear, size, capacity, sum_val;
public:
    MyCircularDeque(int k) : arr(k), front(0), rear(0), size(0), capacity(k), sum_val(0) {}
    bool insertFront(int value) {
        if (isFull()) return false;
        front = (front - 1 + capacity) % capacity;
        arr[front] = value;
        size++;
        sum_val += value;
        return true;
    }
    bool insertLast(int value) {
        if (isFull()) return false;
        arr[rear] = value;
        rear = (rear + 1) % capacity;
        size++;
        sum_val += value;
        return true;
    }
    bool deleteFront() {
        if (isEmpty()) return false;
        sum_val -= arr[front];
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    bool deleteLast() {
        if (isEmpty()) return false;
        int val = arr[(rear - 1 + capacity) % capacity];
        sum_val -= val;
        rear = (rear - 1 + capacity) % capacity;
        size--;
        return true;
    }
    int getFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }
    int getRear() {
        if (isEmpty()) return -1;
        return arr[(rear - 1 + capacity) % capacity];
    }
    bool isEmpty() { return size == 0; }
    bool isFull() { return size == capacity; }
    int sum() { return sum_val; }
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
    java: `class MyCircularDeque {
    private int[] arr;
    private int front, rear, size, capacity, sum_val;
    public MyCircularDeque(int k) {
        arr = new int[k];
        capacity = k;
        front = 0; rear = 0; size = 0; sum_val = 0;
    }
    public boolean insertFront(int value) {
        if (isFull()) return false;
        front = (front - 1 + capacity) % capacity;
        arr[front] = value;
        size++;
        sum_val += value;
        return true;
    }
    public boolean insertLast(int value) {
        if (isFull()) return false;
        arr[rear] = value;
        rear = (rear + 1) % capacity;
        size++;
        sum_val += value;
        return true;
    }
    public boolean deleteFront() {
        if (isEmpty()) return false;
        sum_val -= arr[front];
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    public boolean deleteLast() {
        if (isEmpty()) return false;
        int val = arr[(rear - 1 + capacity) % capacity];
        sum_val -= val;
        rear = (rear - 1 + capacity) % capacity;
        size--;
        return true;
    }
    public int getFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }
    public int getRear() {
        if (isEmpty()) return -1;
        return arr[(rear - 1 + capacity) % capacity];
    }
    public boolean isEmpty() { return size == 0; }
    public boolean isFull() { return size == capacity; }
    public int sum() { return sum_val; }
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
    int *arr;
    int front, rear, size, capacity, sum_val;
} MyCircularDeque;
MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->arr = malloc(k * sizeof(int));
    obj->front = 0;
    obj->rear = 0;
    obj->size = 0;
    obj->capacity = k;
    obj->sum_val = 0;
    return obj;
}
bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) {
    if (obj->size == obj->capacity) return false;
    obj->front = (obj->front - 1 + obj->capacity) % obj->capacity;
    obj->arr[obj->front] = value;
    obj->size++;
    obj->sum_val += value;
    return true;
}
bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) {
    if (obj->size == obj->capacity) return false;
    obj->arr[obj->rear] = value;
    obj->rear = (obj->rear + 1) % obj->capacity;
    obj->size++;
    obj->sum_val += value;
    return true;
}
bool myCircularDequeDeleteFront(MyCircularDeque* obj) {
    if (obj->size == 0) return false;
    obj->sum_val -= obj->arr[obj->front];
    obj->front = (obj->front + 1) % obj->capacity;
    obj->size--;
    return true;
}
bool myCircularDequeDeleteLast(MyCircularDeque* obj) {
    if (obj->size == 0) return false;
    int val = obj->arr[(obj->rear - 1 + obj->capacity) % obj->capacity];
    obj->sum_val -= val;
    obj->rear = (obj->rear - 1 + obj->capacity) % obj->capacity;
    obj->size--;
    return true;
}
int myCircularDequeGetFront(MyCircularDeque* obj) {
    if (obj->size == 0) return -1;
    return obj->arr[obj->front];
}
int myCircularDequeGetRear(MyCircularDeque* obj) {
    if (obj->size == 0) return -1;
    return obj->arr[(obj->rear - 1 + obj->capacity) % obj->capacity];
}
bool myCircularDequeIsEmpty(MyCircularDeque* obj) {
    return obj->size == 0;
}
bool myCircularDequeIsFull(MyCircularDeque* obj) {
    return obj->size == obj->capacity;
}
int myCircularDequeSum(MyCircularDeque* obj) {
    return obj->sum_val;
}
void myCircularDequeFree(MyCircularDeque* obj) {
    free(obj->arr);
    free(obj);
}

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
  "dcd-h1": {
    python: `class MyCircularDeque:
    def __init__(self, k: int):
        self.capacity = k
        self.left_stack = []
        self.right_stack = []
    def push_left(self, val):
        m = val if not self.left_stack else max(val, self.left_stack[-1][1])
        self.left_stack.append((val, m))
    def push_right(self, val):
        m = val if not self.right_stack else max(val, self.right_stack[-1][1])
        self.right_stack.append((val, m))
    def rebalance_left(self):
        n = len(self.right_stack)
        if n == 0: return
        half = n // 2
        if half == 0: half = 1
        temp = []
        while self.right_stack:
            temp.append(self.right_stack.pop()[0])
        for val in reversed(temp[half:]):
            self.push_right(val)
        for val in temp[:half]:
            self.push_left(val)
    def rebalance_right(self):
        n = len(self.left_stack)
        if n == 0: return
        half = n // 2
        if half == 0: half = 1
        temp = []
        while self.left_stack:
            temp.append(self.left_stack.pop()[0])
        for val in reversed(temp[half:]):
            self.push_left(val)
        for val in temp[:half]:
            self.push_right(val)
    def insertFront(self, value: int) -> bool:
        if self.isFull(): return False
        self.push_left(value)
        return True
    def insertLast(self, value: int) -> bool:
        if self.isFull(): return False
        self.push_right(value)
        return True
    def deleteFront(self) -> bool:
        if self.isEmpty(): return False
        if not self.left_stack:
            self.rebalance_left()
        self.left_stack.pop()
        return True
    def deleteLast(self) -> bool:
        if self.isEmpty(): return False
        if not self.right_stack:
            self.rebalance_right()
        self.right_stack.pop()
        return True
    def getFront(self) -> int:
        if self.isEmpty(): return -1
        if self.left_stack: return self.left_stack[-1][0]
        return self.right_stack[0][0]
    def getRear(self) -> int:
        if self.isEmpty(): return -1
        if self.right_stack: return self.right_stack[-1][0]
        return self.left_stack[0][0]
    def isEmpty(self) -> bool:
        return len(self.left_stack) + len(self.right_stack) == 0
    def isFull(self) -> bool:
        return len(self.left_stack) + len(self.right_stack) == self.capacity
    def getMax(self) -> int:
        if self.isEmpty(): return -1
        val_l = self.left_stack[-1][1] if self.left_stack else -float('inf')
        val_r = self.right_stack[-1][1] if self.right_stack else -float('inf')
        return max(val_l, val_r)

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
#include <algorithm>
using namespace std;
class MyCircularDeque {
    vector<pair<int, int>> left_stk, right_stk;
    int capacity;
    void rebalance_left() {
        int n = right_stk.size();
        if (n == 0) return;
        int half = n / 2;
        if (half == 0) half = 1;
        vector<int> temp;
        while (!right_stk.empty()) {
            temp.push_back(right_stk.back().first);
            right_stk.pop_back();
        }
        for (int i = (int)temp.size() - half - 1; i >= 0; i--) {
            push_right(temp[i]);
        }
        for (int i = (int)temp.size() - half; i < (int)temp.size(); i++) {
            push_left(temp[i]);
        }
    }
    void rebalance_right() {
        int n = left_stk.size();
        if (n == 0) return;
        int half = n / 2;
        if (half == 0) half = 1;
        vector<int> temp;
        while (!left_stk.empty()) {
            temp.push_back(left_stk.back().first);
            left_stk.pop_back();
        }
        for (int i = (int)temp.size() - half - 1; i >= 0; i--) {
            push_left(temp[i]);
        }
        for (int i = (int)temp.size() - half; i < (int)temp.size(); i++) {
            push_right(temp[i]);
        }
    }
    void push_left(int val) {
        int m = left_stk.empty() ? val : max(val, left_stk.back().second);
        left_stk.push_back({val, m});
    }
    void push_right(int val) {
        int m = right_stk.empty() ? val : max(val, right_stk.back().second);
        right_stk.push_back({val, m});
    }
public:
    MyCircularDeque(int k) : capacity(k) {}
    bool insertFront(int value) {
        if (isFull()) return false;
        push_left(value);
        return true;
    }
    bool insertLast(int value) {
        if (isFull()) return false;
        push_right(value);
        return true;
    }
    bool deleteFront() {
        if (isEmpty()) return false;
        if (left_stk.empty()) rebalance_left();
        left_stk.pop_back();
        return true;
    }
    bool deleteLast() {
        if (isEmpty()) return false;
        if (right_stk.empty()) rebalance_right();
        right_stk.pop_back();
        return true;
    }
    int getFront() {
        if (isEmpty()) return -1;
        if (!left_stk.empty()) return left_stk.back().first;
        return right_stk.front().first;
    }
    int getRear() {
        if (isEmpty()) return -1;
        if (!right_stk.empty()) return right_stk.back().first;
        return left_stk.front().first;
    }
    bool isEmpty() { return left_stk.empty() && right_stk.empty(); }
    bool isFull() { return (int)(left_stk.size() + right_stk.size()) == capacity; }
    int getMax() {
        if (isEmpty()) return -1;
        int max_val = -2e9;
        if (!left_stk.empty()) max_val = max(max_val, left_stk.back().second);
        if (!right_stk.empty()) max_val = max(max_val, right_stk.back().second);
        return max_val;
    }
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
    private Stack<int[]> left_stk = new Stack<>();
    private Stack<int[]> right_stk = new Stack<>();
    private int capacity;
    public MyCircularDeque(int k) {
        capacity = k;
    }
    private void push_left(int val) {
        int m = left_stk.isEmpty() ? val : Math.max(val, left_stk.peek()[1]);
        left_stk.push(new int[]{val, m});
    }
    private void push_right(int val) {
        int m = right_stk.isEmpty() ? val : Math.max(val, right_stk.peek()[1]);
        right_stk.push(new int[]{val, m});
    }
    private void rebalance_left() {
        int n = right_stk.size();
        if (n == 0) return;
        int half = n / 2;
        if (half == 0) half = 1;
        List<Integer> temp = new ArrayList<>();
        while (!right_stk.isEmpty()) {
            temp.add(right_stk.pop()[0]);
        }
        for (int i = temp.size() - half - 1; i >= 0; i--) {
            push_right(temp.get(i));
        }
        for (int i = temp.size() - half; i < temp.size(); i++) {
            push_left(temp.get(i));
        }
    }
    private void rebalance_right() {
        int n = left_stk.size();
        if (n == 0) return;
        int half = n / 2;
        if (half == 0) half = 1;
        List<Integer> temp = new ArrayList<>();
        while (!left_stk.isEmpty()) {
            temp.add(left_stk.pop()[0]);
        }
        for (int i = temp.size() - half - 1; i >= 0; i--) {
            push_left(temp.get(i));
        }
        for (int i = temp.size() - half; i < temp.size(); i++) {
            push_right(temp.get(i));
        }
    }
    public boolean insertFront(int value) {
        if (isFull()) return false;
        push_left(value);
        return true;
    }
    public boolean insertLast(int value) {
        if (isFull()) return false;
        push_right(value);
        return true;
    }
    public boolean deleteFront() {
        if (isEmpty()) return false;
        if (left_stk.isEmpty()) rebalance_left();
        left_stk.pop();
        return true;
    }
    public boolean deleteLast() {
        if (isEmpty()) return false;
        if (right_stk.isEmpty()) rebalance_right();
        right_stk.pop();
        return true;
    }
    public int getFront() {
        if (isEmpty()) return -1;
        if (!left_stk.isEmpty()) return left_stk.peek()[0];
        return right_stk.get(0)[0];
    }
    public int getRear() {
        if (isEmpty()) return -1;
        if (!right_stk.isEmpty()) return right_stk.peek()[0];
        return left_stk.get(0)[0];
    }
    public boolean isEmpty() { return left_stk.isEmpty() && right_stk.isEmpty(); }
    public boolean isFull() { return (left_stk.size() + right_stk.size()) == capacity; }
    public int getMax() {
        if (isEmpty()) return -1;
        int max_val = Integer.MIN_VALUE;
        if (!left_stk.isEmpty()) max_val = Math.max(max_val, left_stk.peek()[1]);
        if (!right_stk.isEmpty()) max_val = Math.max(max_val, right_stk.peek()[1]);
        return max_val;
    }
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

#define MAX_CAP 2005

typedef struct {
    int val;
    int max;
} Element;

typedef struct {
    Element left_stk[MAX_CAP];
    int left_top;
    Element right_stk[MAX_CAP];
    int right_top;
    int capacity;
} MyCircularDeque;

MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->left_top = -1;
    obj->right_top = -1;
    obj->capacity = k;
    return obj;
}

bool myCircularDequeIsEmpty(MyCircularDeque* obj) {
    return obj->left_top == -1 && obj->right_top == -1;
}

bool myCircularDequeIsFull(MyCircularDeque* obj) {
    return (obj->left_top + 1 + obj->right_top + 1) == obj->capacity;
}

void push_left(MyCircularDeque* obj, int val) {
    int m = (obj->left_top == -1) ? val : (val > obj->left_stk[obj->left_top].max ? val : obj->left_stk[obj->left_top].max);
    obj->left_top++;
    obj->left_stk[obj->left_top].val = val;
    obj->left_stk[obj->left_top].max = m;
}

void push_right(MyCircularDeque* obj, int val) {
    int m = (obj->right_top == -1) ? val : (val > obj->right_stk[obj->right_top].max ? val : obj->right_stk[obj->right_top].max);
    obj->right_top++;
    obj->right_stk[obj->right_top].val = val;
    obj->right_stk[obj->right_top].max = m;
}

void rebalance_left(MyCircularDeque* obj) {
    int n = obj->right_top + 1;
    if (n == 0) return;
    int half = n / 2;
    if (half == 0) half = 1;
    int temp[MAX_CAP];
    int t_sz = 0;
    while (obj->right_top >= 0) {
        temp[t_sz++] = obj->right_stk[obj->right_top].val;
        obj->right_top--;
    }
    for (int i = t_sz - half - 1; i >= 0; i--) {
        push_right(obj, temp[i]);
    }
    for (int i = t_sz - half; i < t_sz; i++) {
        push_left(obj, temp[i]);
    }
}

void rebalance_right(MyCircularDeque* obj) {
    int n = obj->left_top + 1;
    if (n == 0) return;
    int half = n / 2;
    if (half == 0) half = 1;
    int temp[MAX_CAP];
    int t_sz = 0;
    while (obj->left_top >= 0) {
        temp[t_sz++] = obj->left_stk[obj->left_top].val;
        obj->left_top--;
    }
    for (int i = t_sz - half - 1; i >= 0; i--) {
        push_left(obj, temp[i]);
    }
    for (int i = t_sz - half; i < t_sz; i++) {
        push_right(obj, temp[i]);
    }
}

bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) {
    if (myCircularDequeIsFull(obj)) return false;
    push_left(obj, value);
    return true;
}

bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) {
    if (myCircularDequeIsFull(obj)) return false;
    push_right(obj, value);
    return true;
}

bool myCircularDequeDeleteFront(MyCircularDeque* obj) {
    if (myCircularDequeIsEmpty(obj)) return false;
    if (obj->left_top == -1) rebalance_left(obj);
    obj->left_top--;
    return true;
}

bool myCircularDequeDeleteLast(MyCircularDeque* obj) {
    if (myCircularDequeIsEmpty(obj)) return false;
    if (obj->right_top == -1) rebalance_right(obj);
    obj->right_top--;
    return true;
}

int myCircularDequeGetFront(MyCircularDeque* obj) {
    if (myCircularDequeIsEmpty(obj)) return -1;
    if (obj->left_top >= 0) return obj->left_stk[obj->left_top].val;
    return obj->right_stk[0].val;
}

int myCircularDequeGetRear(MyCircularDeque* obj) {
    if (myCircularDequeIsEmpty(obj)) return -1;
    if (obj->right_top >= 0) return obj->right_stk[obj->right_top].val;
    return obj->left_stk[0].val;
}

int myCircularDequeGetMax(MyCircularDeque* obj) {
    if (myCircularDequeIsEmpty(obj)) return -1;
    int max_val = -2e9;
    if (obj->left_top >= 0 && obj->left_stk[obj->left_top].max > max_val) {
        max_val = obj->left_stk[obj->left_top].max;
    }
    if (obj->right_top >= 0 && obj->right_stk[obj->right_top].max > max_val) {
        max_val = obj->right_stk[obj->right_top].max;
    }
    return max_val;
}

void myCircularDequeFree(MyCircularDeque* obj) {
    free(obj);
}

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
  "dcd-h2": {
    python: `class MyCircularDeque:
    def __init__(self, k: int):
        self.capacity = k
        self.arr = [0] * k
        self.front = 0
        self.rear = 0
        self.size = 0
    def insertFront(self, value: int) -> bool:
        if self.isFull(): return False
        self.front = (self.front - 1 + self.capacity) % self.capacity
        self.arr[self.front] = value
        self.size += 1
        return True
    def insertLast(self, value: int) -> bool:
        if self.isFull(): return False
        self.arr[self.rear] = value
        self.rear = (self.rear + 1) % self.capacity
        self.size += 1
        return True
    def deleteFront(self) -> bool:
        if self.isEmpty(): return False
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return True
    def deleteLast(self) -> bool:
        if self.isEmpty(): return False
        self.rear = (self.rear - 1 + self.capacity) % self.capacity
        self.size -= 1
        return True
    def getFront(self) -> int:
        if self.isEmpty(): return -1
        return self.arr[self.front]
    def getRear(self) -> int:
        if self.isEmpty(): return -1
        return self.arr[(self.rear - 1 + self.capacity) % self.capacity]
    def isEmpty(self) -> bool:
        return self.size == 0
    def isFull(self) -> bool:
        return self.size == self.capacity
    def beginTransaction(self) -> bool:
        state = (list(self.arr), self.front, self.rear, self.size)
        if not hasattr(self, 'history'): self.history = []
        self.history.append(state)
        return True
    def commit(self) -> bool:
        if not hasattr(self, 'history') or not self.history:
            return False
        self.history.pop()
        return True
    def rollback(self) -> bool:
        if not hasattr(self, 'history') or not self.history:
            return False
        state = self.history.pop()
        self.arr, self.front, self.rear, self.size = state
        return True

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
using namespace std;
struct DequeState {
    vector<int> arr;
    int front, rear, size;
};
class MyCircularDeque {
    vector<int> arr;
    int front, rear, size, capacity;
    vector<DequeState> history;
public:
    MyCircularDeque(int k) : arr(k), front(0), rear(0), size(0), capacity(k) {}
    bool beginTransaction() {
        history.push_back({arr, front, rear, size});
        return true;
    }
    bool commit() {
        if (history.empty()) return false;
        history.pop_back();
        return true;
    }
    bool rollback() {
        if (history.empty()) return false;
        DequeState state = history.back();
        history.pop_back();
        arr = state.arr;
        front = state.front;
        rear = state.rear;
        size = state.size;
        return true;
    }
    bool insertFront(int value) {
        if (isFull()) return false;
        front = (front - 1 + capacity) % capacity;
        arr[front] = value;
        size++;
        return true;
    }
    bool insertLast(int value) {
        if (isFull()) return false;
        arr[rear] = value;
        rear = (rear + 1) % capacity;
        size++;
        return true;
    }
    bool deleteFront() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    bool deleteLast() {
        if (isEmpty()) return false;
        rear = (rear - 1 + capacity) % capacity;
        size--;
        return true;
    }
    int getFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }
    int getRear() {
        if (isEmpty()) return -1;
        return arr[(rear - 1 + capacity) % capacity];
    }
    bool isEmpty() { return size == 0; }
    bool isFull() { return size == capacity; }
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
class DequeState {
    int[] arr;
    int front, rear, size;
    DequeState(int[] a, int f, int r, int s) {
        arr = a.clone();
        front = f; rear = r; size = s;
    }
}
class MyCircularDeque {
    private int[] arr;
    private int front, rear, size, capacity;
    private Stack<DequeState> history = new Stack<>();
    public MyCircularDeque(int k) {
        arr = new int[k];
        capacity = k;
        front = 0; rear = 0; size = 0;
    }
    public boolean beginTransaction() {
        history.push(new DequeState(arr, front, rear, size));
        return true;
    }
    public boolean commit() {
        if (history.isEmpty()) return false;
        history.pop();
        return true;
    }
    public boolean rollback() {
        if (history.isEmpty()) return false;
        DequeState state = history.pop();
        arr = state.arr;
        front = state.front;
        rear = state.rear;
        size = state.size;
        return true;
    }
    public boolean insertFront(int value) {
        if (isFull()) return false;
        front = (front - 1 + capacity) % capacity;
        arr[front] = value;
        size++;
        return true;
    }
    public boolean insertLast(int value) {
        if (isFull()) return false;
        arr[rear] = value;
        rear = (rear + 1) % capacity;
        size++;
        return true;
    }
    public boolean deleteFront() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    public boolean deleteLast() {
        if (isEmpty()) return false;
        rear = (rear - 1 + capacity) % capacity;
        size--;
        return true;
    }
    public int getFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }
    public int getRear() {
        if (isEmpty()) return -1;
        return arr[(rear - 1 + capacity) % capacity];
    }
    public boolean isEmpty() { return size == 0; }
    public boolean isFull() { return size == capacity; }
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

#define MAX_HISTORY 20

typedef struct {
    int arr[1005];
    int front, rear, size;
} DequeState;

typedef struct {
    int arr[1005];
    int front, rear, size, capacity;
    DequeState history[MAX_HISTORY];
    int history_top;
} MyCircularDeque;

MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->front = 0;
    obj->rear = 0;
    obj->size = 0;
    obj->capacity = k;
    obj->history_top = -1;
    memset(obj->arr, 0, sizeof(obj->arr));
    return obj;
}

bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) {
    if (obj->size == obj->capacity) return false;
    obj->front = (obj->front - 1 + obj->capacity) % obj->capacity;
    obj->arr[obj->front] = value;
    obj->size++;
    return true;
}

bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) {
    if (obj->size == obj->capacity) return false;
    obj->arr[obj->rear] = value;
    obj->rear = (obj->rear + 1) % obj->capacity;
    obj->size++;
    return true;
}

bool myCircularDequeDeleteFront(MyCircularDeque* obj) {
    if (obj->size == 0) return false;
    obj->front = (obj->front + 1) % obj->capacity;
    obj->size--;
    return true;
}

bool myCircularDequeDeleteLast(MyCircularDeque* obj) {
    if (obj->size == 0) return false;
    obj->rear = (obj->rear - 1 + obj->capacity) % obj->capacity;
    obj->size--;
    return true;
}

int myCircularDequeGetFront(MyCircularDeque* obj) {
    if (obj->size == 0) return -1;
    return obj->arr[obj->front];
}

int myCircularDequeGetRear(MyCircularDeque* obj) {
    if (obj->size == 0) return -1;
    return obj->arr[(obj->rear - 1 + obj->capacity) % obj->capacity];
}

bool myCircularDequeIsEmpty(MyCircularDeque* obj) {
    return obj->size == 0;
}

bool myCircularDequeIsFull(MyCircularDeque* obj) {
    return obj->size == obj->capacity;
}

bool myCircularDequeBeginTransaction(MyCircularDeque* obj) {
    if (obj->history_top >= MAX_HISTORY - 1) return false;
    obj->history_top++;
    DequeState* state = &obj->history[obj->history_top];
    memcpy(state->arr, obj->arr, obj->capacity * sizeof(int));
    state->front = obj->front;
    state->rear = obj->rear;
    state->size = obj->size;
    return true;
}

bool myCircularDequeCommit(MyCircularDeque* obj) {
    if (obj->history_top < 0) return false;
    obj->history_top--;
    return true;
}

bool myCircularDequeRollback(MyCircularDeque* obj) {
    if (obj->history_top < 0) return false;
    DequeState* state = &obj->history[obj->history_top];
    obj->history_top--;
    memcpy(obj->arr, state->arr, obj->capacity * sizeof(int));
    obj->front = state->front;
    obj->rear = state->rear;
    obj->size = state->size;
    return true;
}

void myCircularDequeFree(MyCircularDeque* obj) {
    free(obj);
}

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
  "dcd-h3": {
    python: `class MyCircularDeque:
    def __init__(self, k: int):
        self.capacity = k
        self.arr = [0] * k
        self.front = 0
        self.rear = 0
        self.size = 0
    def insertFront(self, value: int) -> bool:
        if self.isFull(): return False
        self.front = (self.front - 1 + self.capacity) % self.capacity
        self.arr[self.front] = value
        self.size += 1
        return True
    def insertLast(self, value: int) -> bool:
        if self.isFull(): return False
        self.arr[self.rear] = value
        self.rear = (self.rear + 1) % self.capacity
        self.size += 1
        return True
    def deleteFront(self) -> bool:
        if self.isEmpty(): return False
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return True
    def deleteLast(self) -> bool:
        if self.isEmpty(): return False
        self.rear = (self.rear - 1 + self.capacity) % self.capacity
        self.size -= 1
        return True
    def getFront(self) -> int:
        if self.isEmpty(): return -1
        return self.arr[self.front]
    def getRear(self) -> int:
        if self.isEmpty(): return -1
        return self.arr[(self.rear - 1 + self.capacity) % self.capacity]
    def isEmpty(self) -> bool:
        return self.size == 0
    def isFull(self) -> bool:
        return self.size == self.capacity
    def insertMiddle(self, value: int) -> bool:
        if self.isFull(): return False
        elems = []
        for i in range(self.size):
            elems.append(self.arr[(self.front + i) % self.capacity])
        mid = self.size // 2
        elems.insert(mid, value)
        self.front = 0
        self.rear = len(elems) % self.capacity
        self.size = len(elems)
        for i, val in enumerate(elems):
            self.arr[i] = val
        return True
    def deleteMiddle(self) -> bool:
        if self.isEmpty(): return False
        elems = []
        for i in range(self.size):
            elems.append(self.arr[(self.front + i) % self.capacity])
        mid = (self.size - 1) // 2
        elems.pop(mid)
        self.front = 0
        self.rear = len(elems) % self.capacity
        self.size = len(elems)
        for i, val in enumerate(elems):
            self.arr[i] = val
        return True

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
using namespace std;
class MyCircularDeque {
    vector<int> arr;
    int front, rear, size, capacity;
public:
    MyCircularDeque(int k) : arr(k), front(0), rear(0), size(0), capacity(k) {}
    bool insertFront(int value) {
        if (isFull()) return false;
        front = (front - 1 + capacity) % capacity;
        arr[front] = value;
        size++;
        return true;
    }
    bool insertLast(int value) {
        if (isFull()) return false;
        arr[rear] = value;
        rear = (rear + 1) % capacity;
        size++;
        return true;
    }
    bool deleteFront() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    bool deleteLast() {
        if (isEmpty()) return false;
        rear = (rear - 1 + capacity) % capacity;
        size--;
        return true;
    }
    int getFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }
    int getRear() {
        if (isEmpty()) return -1;
        return arr[(rear - 1 + capacity) % capacity];
    }
    bool isEmpty() { return size == 0; }
    bool isFull() { return size == capacity; }
    bool insertMiddle(int value) {
        if (isFull()) return false;
        vector<int> elems;
        for (int i = 0; i < size; i++) {
            elems.push_back(arr[(front + i) % capacity]);
        }
        elems.insert(elems.begin() + size / 2, value);
        front = 0;
        rear = elems.size() % capacity;
        size = elems.size();
        for (int i = 0; i < size; i++) {
            arr[i] = elems[i];
        }
        return true;
    }
    bool deleteMiddle() {
        if (isEmpty()) return false;
        vector<int> elems;
        for (int i = 0; i < size; i++) {
            elems.push_back(arr[(front + i) % capacity]);
        }
        elems.erase(elems.begin() + (size - 1) / 2);
        front = 0;
        rear = elems.size() % capacity;
        size = elems.size();
        for (int i = 0; i < size; i++) {
            arr[i] = elems[i];
        }
        return true;
    }
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
    private int[] arr;
    private int front, rear, size, capacity;
    public MyCircularDeque(int k) {
        arr = new int[k];
        capacity = k;
        front = 0; rear = 0; size = 0;
    }
    public boolean insertFront(int value) {
        if (isFull()) return false;
        front = (front - 1 + capacity) % capacity;
        arr[front] = value;
        size++;
        return true;
    }
    public boolean insertLast(int value) {
        if (isFull()) return false;
        arr[rear] = value;
        rear = (rear + 1) % capacity;
        size++;
        return true;
    }
    public boolean deleteFront() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    public boolean deleteLast() {
        if (isEmpty()) return false;
        rear = (rear - 1 + capacity) % capacity;
        size--;
        return true;
    }
    public int getFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }
    public int getRear() {
        if (isEmpty()) return -1;
        return arr[(rear - 1 + capacity) % capacity];
    }
    public boolean isEmpty() { return size == 0; }
    public boolean isFull() { return size == capacity; }
    public boolean insertMiddle(int value) {
        if (isFull()) return false;
        List<Integer> list = new ArrayList<>();
        for (int i = 0; i < size; i++) {
            list.add(arr[(front + i) % capacity]);
        }
        list.add(size / 2, value);
        front = 0;
        rear = list.size() % capacity;
        size = list.size();
        for (int i = 0; i < size; i++) {
            arr[i] = list.get(i);
        }
        return true;
    }
    public boolean deleteMiddle() {
        if (isEmpty()) return false;
        List<Integer> list = new ArrayList<>();
        for (int i = 0; i < size; i++) {
            list.add(arr[(front + i) % capacity]);
        }
        list.remove((size - 1) / 2);
        front = 0;
        rear = list.size() % capacity;
        size = list.size();
        for (int i = 0; i < size; i++) {
            arr[i] = list.get(i);
        }
        return true;
    }
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
    int *arr;
    int front, rear, size, capacity;
} MyCircularDeque;
MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->arr = malloc(k * sizeof(int));
    obj->front = 0;
    obj->rear = 0;
    obj->size = 0;
    obj->capacity = k;
    return obj;
}
bool myCircularDequeIsEmpty(MyCircularDeque* obj) {
    return obj->size == 0;
}
bool myCircularDequeIsFull(MyCircularDeque* obj) {
    return obj->size == obj->capacity;
}
bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) {
    if (myCircularDequeIsFull(obj)) return false;
    obj->front = (obj->front - 1 + obj->capacity) % obj->capacity;
    obj->arr[obj->front] = value;
    obj->size++;
    return true;
}
bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) {
    if (myCircularDequeIsFull(obj)) return false;
    obj->arr[obj->rear] = value;
    obj->rear = (obj->rear + 1) % obj->capacity;
    obj->size++;
    return true;
}
bool myCircularDequeDeleteFront(MyCircularDeque* obj) {
    if (obj->size == 0) return false;
    obj->front = (obj->front + 1) % obj->capacity;
    obj->size--;
    return true;
}
bool myCircularDequeDeleteLast(MyCircularDeque* obj) {
    if (obj->size == 0) return false;
    obj->rear = (obj->rear - 1 + obj->capacity) % obj->capacity;
    obj->size--;
    return true;
}
int myCircularDequeGetFront(MyCircularDeque* obj) {
    if (obj->size == 0) return -1;
    return obj->arr[obj->front];
}
int myCircularDequeGetRear(MyCircularDeque* obj) {
    if (obj->size == 0) return -1;
    return obj->arr[(obj->rear - 1 + obj->capacity) % obj->capacity];
}
bool myCircularDequeInsertMiddle(MyCircularDeque* obj, int value) {
    if (obj->size == obj->capacity) return false;
    int elems[1005];
    for (int i = 0; i < obj->size; i++) {
        elems[i] = obj->arr[(obj->front + i) % obj->capacity];
    }
    int mid = obj->size / 2;
    for (int i = obj->size; i > mid; i--) {
        elems[i] = elems[i - 1];
    }
    elems[mid] = value;
    obj->front = 0;
    obj->size = obj->size + 1;
    obj->rear = obj->size % obj->capacity;
    for (int i = 0; i < obj->size; i++) {
        obj->arr[i] = elems[i];
    }
    return true;
}
bool myCircularDequeDeleteMiddle(MyCircularDeque* obj) {
    if (obj->size == 0) return false;
    int elems[1005];
    for (int i = 0; i < obj->size; i++) {
        elems[i] = obj->arr[(obj->front + i) % obj->capacity];
    }
    int mid = (obj->size - 1) / 2;
    for (int i = mid; i < obj->size - 1; i++) {
        elems[i] = elems[i + 1];
    }
    obj->front = 0;
    obj->size = obj->size - 1;
    obj->rear = obj->size % obj->capacity;
    for (int i = 0; i < obj->size; i++) {
        obj->arr[i] = elems[i];
    }
    return true;
}
void myCircularDequeFree(MyCircularDeque* obj) {
    free(obj->arr);
    free(obj);
}

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
  "dcd-h4": {
    python: `class MyCircularDeque:
    def __init__(self, k: int):
        self.capacity = k
        self.arr = [0] * k
        self.front = 0
        self.rear = 0
        self.size = 0
    def insertFront(self, value: int) -> bool:
        if self.isFull(): return False
        self.front = (self.front - 1 + self.capacity) % self.capacity
        self.arr[self.front] = value
        self.size += 1
        return True
    def insertLast(self, value: int) -> bool:
        while not self.isEmpty() and self.getRear() < value:
            self.deleteLast()
        if self.isFull(): return False
        self.arr[self.rear] = value
        self.rear = (self.rear + 1) % self.capacity
        self.size += 1
        return True
    def deleteFront(self) -> bool:
        if self.isEmpty(): return False
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return True
    def deleteLast(self) -> bool:
        if self.isEmpty(): return False
        self.rear = (self.rear - 1 + self.capacity) % self.capacity
        self.size -= 1
        return True
    def getFront(self) -> int:
        if self.isEmpty(): return -1
        return self.arr[self.front]
    def getRear(self) -> int:
        if self.isEmpty(): return -1
        return self.arr[(self.rear - 1 + self.capacity) % self.capacity]
    def isEmpty(self) -> bool:
        return self.size == 0
    def isFull(self) -> bool:
        return self.size == self.capacity
    def getMax(self) -> int:
        return self.getFront()

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
using namespace std;
class MyCircularDeque {
    vector<int> arr;
    int front, rear, size, capacity;
public:
    MyCircularDeque(int k) : arr(k), front(0), rear(0), size(0), capacity(k) {}
    bool insertFront(int value) {
        if (isFull()) return false;
        front = (front - 1 + capacity) % capacity;
        arr[front] = value;
        size++;
        return true;
    }
    bool insertLast(int value) {
        while (!isEmpty() && getRear() < value) {
            deleteLast();
        }
        if (isFull()) return false;
        arr[rear] = value;
        rear = (rear + 1) % capacity;
        size++;
        return true;
    }
    bool deleteFront() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    bool deleteLast() {
        if (isEmpty()) return false;
        rear = (rear - 1 + capacity) % capacity;
        size--;
        return true;
    }
    int getFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }
    int getRear() {
        if (isEmpty()) return -1;
        return arr[(rear - 1 + capacity) % capacity];
    }
    bool isEmpty() { return size == 0; }
    bool isFull() { return size == capacity; }
    int getMax() { return getFront(); }
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
    java: `class MyCircularDeque {
    private int[] arr;
    private int front, rear, size, capacity;
    public MyCircularDeque(int k) {
        arr = new int[k];
        capacity = k;
        front = 0; rear = 0; size = 0;
    }
    public boolean insertFront(int value) {
        if (isFull()) return false;
        front = (front - 1 + capacity) % capacity;
        arr[front] = value;
        size++;
        return true;
    }
    public boolean insertLast(int value) {
        while (!isEmpty() && getRear() < value) {
            deleteLast();
        }
        if (isFull()) return false;
        arr[rear] = value;
        rear = (rear + 1) % capacity;
        size++;
        return true;
    }
    public boolean deleteFront() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    public boolean deleteLast() {
        if (isEmpty()) return false;
        rear = (rear - 1 + capacity) % capacity;
        size--;
        return true;
    }
    public int getFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }
    public int getRear() {
        if (isEmpty()) return -1;
        return arr[(rear - 1 + capacity) % capacity];
    }
    public boolean isEmpty() { return size == 0; }
    public boolean isFull() { return size == capacity; }
    public int getMax() { return getFront(); }
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
    int *arr;
    int front, rear, size, capacity;
} MyCircularDeque;
MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->arr = malloc(k * sizeof(int));
    obj->front = 0;
    obj->rear = 0;
    obj->size = 0;
    obj->capacity = k;
    return obj;
}
bool myCircularDequeIsEmpty(MyCircularDeque* obj) {
    return obj->size == 0;
}
bool myCircularDequeIsFull(MyCircularDeque* obj) {
    return obj->size == obj->capacity;
}
int myCircularDequeGetFront(MyCircularDeque* obj) {
    if (obj->size == 0) return -1;
    return obj->arr[obj->front];
}
int myCircularDequeGetRear(MyCircularDeque* obj) {
    if (obj->size == 0) return -1;
    return obj->arr[(obj->rear - 1 + obj->capacity) % obj->capacity];
}
bool myCircularDequeDeleteFront(MyCircularDeque* obj) {
    if (obj->size == 0) return false;
    obj->front = (obj->front + 1) % obj->capacity;
    obj->size--;
    return true;
}
bool myCircularDequeDeleteLast(MyCircularDeque* obj) {
    if (obj->size == 0) return false;
    obj->rear = (obj->rear - 1 + obj->capacity) % obj->capacity;
    obj->size--;
    return true;
}
bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) {
    if (myCircularDequeIsFull(obj)) return false;
    obj->front = (obj->front - 1 + obj->capacity) % obj->capacity;
    obj->arr[obj->front] = value;
    obj->size++;
    return true;
}
bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) {
    while (!myCircularDequeIsEmpty(obj) && myCircularDequeGetRear(obj) < value) {
        myCircularDequeDeleteLast(obj);
    }
    if (myCircularDequeIsFull(obj)) return false;
    obj->arr[obj->rear] = value;
    obj->rear = (obj->rear + 1) % obj->capacity;
    obj->size++;
    return true;
}
int myCircularDequeGetMax(MyCircularDeque* obj) {
    return myCircularDequeGetFront(obj);
}
void myCircularDequeFree(MyCircularDeque* obj) {
    free(obj->arr);
    free(obj);
}

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
  "dcd-h5": {
    python: `class MyCircularDeque:
    def __init__(self, k: int):
        self.capacity = k
        self.arr = [0] * k
        self.front = 0
        self.rear = 0
        self.size = 0
    def insertFront(self, value: int) -> bool:
        if self.isFull(): return False
        self.front = (self.front - 1 + self.capacity) % self.capacity
        self.arr[self.front] = value
        self.size += 1
        return True
    def insertLast(self, value: int) -> bool:
        if self.isFull(): return False
        self.arr[self.rear] = value
        self.rear = (self.rear + 1) % self.capacity
        self.size += 1
        return True
    def deleteFront(self) -> bool:
        if self.isEmpty(): return False
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return True
    def deleteLast(self) -> bool:
        if self.isEmpty(): return False
        self.rear = (self.rear - 1 + self.capacity) % self.capacity
        self.size -= 1
        return True
    def getFront(self) -> int:
        if self.isEmpty(): return -1
        return self.arr[self.front]
    def getRear(self) -> int:
        if self.isEmpty(): return -1
        return self.arr[(self.rear - 1 + self.capacity) % self.capacity]
    def isEmpty(self) -> bool:
        return self.size == 0
    def isFull(self) -> bool:
        return self.size == self.capacity
    def serialize(self) -> str:
        if self.isEmpty(): return "#"
        elems = []
        for i in range(self.size):
            elems.append(str(self.arr[(self.front + i) % self.capacity]))
        return ",".join(elems)
    def deserialize(self, data: str) -> bool:
        self.front = 0
        self.rear = 0
        self.size = 0
        if data == "#" or not data:
            return True
        parts = data.split(",")
        for part in parts:
            if self.isFull():
                break
            self.insertLast(int(part))
        return True

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
    vector<int> arr;
    int front, rear, size, capacity;
public:
    MyCircularDeque(int k) : arr(k), front(0), rear(0), size(0), capacity(k) {}
    bool insertFront(int value) {
        if (isFull()) return false;
        front = (front - 1 + capacity) % capacity;
        arr[front] = value;
        size++;
        return true;
    }
    bool insertLast(int value) {
        if (isFull()) return false;
        arr[rear] = value;
        rear = (rear + 1) % capacity;
        size++;
        return true;
    }
    bool deleteFront() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    bool deleteLast() {
        if (isEmpty()) return false;
        rear = (rear - 1 + capacity) % capacity;
        size--;
        return true;
    }
    int getFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }
    int getRear() {
        if (isEmpty()) return -1;
        return arr[(rear - 1 + capacity) % capacity];
    }
    bool isEmpty() { return size == 0; }
    bool isFull() { return size == capacity; }
    string serialize() {
        if (isEmpty()) return "#";
        string res = "";
        for (int i = 0; i < size; i++) {
            res += to_string(arr[(front + i) % capacity]);
            if (i + 1 < size) res += ",";
        }
        return res;
    }
    bool deserialize(string data) {
        front = 0; rear = 0; size = 0;
        if (data == "#" || data.empty()) return true;
        size_t pos = 0;
        while (pos < data.size()) {
            size_t next_comma = data.find(',', pos);
            if (next_comma == string::npos) {
                int val = stoi(data.substr(pos));
                insertLast(val);
                break;
            }
            int val = stoi(data.substr(pos, next_comma - pos));
            insertLast(val);
            pos = next_comma + 1;
        }
        return true;
    }
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
    java: `class MyCircularDeque {
    private int[] arr;
    private int front, rear, size, capacity;
    public MyCircularDeque(int k) {
        arr = new int[k];
        capacity = k;
        front = 0; rear = 0; size = 0;
    }
    public boolean insertFront(int value) {
        if (isFull()) return false;
        front = (front - 1 + capacity) % capacity;
        arr[front] = value;
        size++;
        return true;
    }
    public boolean insertLast(int value) {
        if (isFull()) return false;
        arr[rear] = value;
        rear = (rear + 1) % capacity;
        size++;
        return true;
    }
    public boolean deleteFront() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    public boolean deleteLast() {
        if (isEmpty()) return false;
        rear = (rear - 1 + capacity) % capacity;
        size--;
        return true;
    }
    public int getFront() {
        if (isEmpty()) return -1;
        return arr[front];
    }
    public int getRear() {
        if (isEmpty()) return -1;
        return arr[(rear - 1 + capacity) % capacity];
    }
    public boolean isEmpty() { return size == 0; }
    public boolean isFull() { return size == capacity; }
    public String serialize() {
        if (isEmpty()) return "#";
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < size; i++) {
            sb.append(arr[(front + i) % capacity]);
            if (i + 1 < size) sb.append(",");
        }
        return sb.toString();
    }
    public boolean deserialize(String data) {
        front = 0; rear = 0; size = 0;
        if (data.equals("#") || data.isEmpty()) return true;
        String[] parts = data.split(",");
        for (String part : parts) {
            if (isFull()) break;
            insertLast(Integer.parseInt(part));
        }
        return true;
    }
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
    int *arr;
    int front, rear, size, capacity;
    char serialize_buf[10005];
} MyCircularDeque;
MyCircularDeque* myCircularDequeCreate(int k) {
    MyCircularDeque* obj = malloc(sizeof(MyCircularDeque));
    obj->arr = malloc(k * sizeof(int));
    obj->front = 0;
    obj->rear = 0;
    obj->size = 0;
    obj->capacity = k;
    return obj;
}
bool myCircularDequeIsEmpty(MyCircularDeque* obj) {
    return obj->size == 0;
}
bool myCircularDequeIsFull(MyCircularDeque* obj) {
    return obj->size == obj->capacity;
}
bool myCircularDequeInsertFront(MyCircularDeque* obj, int value) {
    if (myCircularDequeIsFull(obj)) return false;
    obj->front = (obj->front - 1 + obj->capacity) % obj->capacity;
    obj->arr[obj->front] = value;
    obj->size++;
    return true;
}
bool myCircularDequeInsertLast(MyCircularDeque* obj, int value) {
    if (myCircularDequeIsFull(obj)) return false;
    obj->arr[obj->rear] = value;
    obj->rear = (obj->rear + 1) % obj->capacity;
    obj->size++;
    return true;
}
bool myCircularDequeDeleteFront(MyCircularDeque* obj) {
    if (myCircularDequeIsEmpty(obj)) return false;
    obj->front = (obj->front + 1) % obj->capacity;
    obj->size--;
    return true;
}
bool myCircularDequeDeleteLast(MyCircularDeque* obj) {
    if (myCircularDequeIsEmpty(obj)) return false;
    obj->rear = (obj->rear - 1 + obj->capacity) % obj->capacity;
    obj->size--;
    return true;
}
int myCircularDequeGetFront(MyCircularDeque* obj) {
    if (myCircularDequeIsEmpty(obj)) return -1;
    return obj->arr[obj->front];
}
int myCircularDequeGetRear(MyCircularDeque* obj) {
    if (myCircularDequeIsEmpty(obj)) return -1;
    return obj->arr[(obj->rear - 1 + obj->capacity) % obj->capacity];
}
char* myCircularDequeSerialize(MyCircularDeque* obj) {
    if (myCircularDequeIsEmpty(obj)) {
        strcpy(obj->serialize_buf, "#");
        return obj->serialize_buf;
    }
    obj->serialize_buf[0] = '\\0';
    char tmp[50];
    for (int i = 0; i < obj->size; i++) {
        sprintf(tmp, "%d", obj->arr[(obj->front + i) % obj->capacity]);
        strcat(obj->serialize_buf, tmp);
        if (i + 1 < obj->size) {
            strcat(obj->serialize_buf, ",");
        }
    }
    return obj->serialize_buf;
}
bool myCircularDequeDeserialize(MyCircularDeque* obj, char* data) {
    obj->front = 0;
    obj->rear = 0;
    obj->size = 0;
    if (strcmp(data, "#") == 0 || strlen(data) == 0) {
        return true;
    }
    char data_copy[10005];
    strcpy(data_copy, data);
    char* token = strtok(data_copy, ",");
    while (token != NULL) {
        if (myCircularDequeIsFull(obj)) break;
        int val = atoi(token);
        myCircularDequeInsertLast(obj, val);
        token = strtok(NULL, ",");
    }
    return true;
}
void myCircularDequeFree(MyCircularDeque* obj) {
    free(obj->arr);
    free(obj);
}

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
  }
};
