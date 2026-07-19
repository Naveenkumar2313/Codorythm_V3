export const minStackSolutions = {
  "ms-e1": {
    python: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []
    def push(self, val: int) -> None:
        self.stack.append(val)
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)
    def pop(self) -> None:
        top = self.stack.pop()
        if top == self.min_stack[-1]: self.min_stack.pop()
    def top(self) -> int:
        return self.stack[-1]
    def getMin(self) -> int:
        return self.min_stack[-1]

ms = MinStack()
out = []
q = int(input())
for _ in range(q):
    line = input().split()
    op = line[0]
    if op == "PUSH": ms.push(int(line[1]))
    elif op == "POP": ms.pop()
    elif op == "TOP": out.append(str(ms.top()))
    elif op == "GETMIN": out.append(str(ms.getMin()))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <stack>
#include <string>
#include <vector>
using namespace std;
class MinStack {
    stack<int> stk, minStk;
public:
    void push(int val) {
        stk.push(val);
        if (minStk.empty() || val <= minStk.top()) minStk.push(val);
    }
    void pop() {
        if (stk.top() == minStk.top()) minStk.pop();
        stk.pop();
    }
    int top() { return stk.top(); }
    int getMin() { return minStk.top(); }
    int size() { return (int)stk.size(); }
};
int main() {
    MinStack ms;
    int q;
    if (cin >> q) {
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "PUSH") { int v; cin >> v; ms.push(v); }
            else if (op == "POP") { ms.pop(); }
            else if (op == "TOP") { out.push_back(ms.top()); }
            else if (op == "GETMIN") { out.push_back(ms.getMin()); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class MinStack {
    private Deque<Integer> stk = new ArrayDeque<>();
    private Deque<Integer> minStk = new ArrayDeque<>();
    public void push(int val) {
        stk.push(val);
        if (minStk.isEmpty() || val <= minStk.peek()) minStk.push(val);
    }
    public void pop() {
        if (stk.peek().equals(minStk.peek())) minStk.pop();
        stk.pop();
    }
    public int top() { return stk.peek(); }
    public int getMin() { return minStk.peek(); }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            MinStack ms = new MinStack();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("PUSH")) ms.push(sc.nextInt());
                else if (op.equals("POP")) ms.pop();
                else if (op.equals("TOP")) out.add(String.valueOf(ms.top()));
                else if (op.equals("GETMIN")) out.add(String.valueOf(ms.getMin()));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 10005
int stk[MAXN], stkTop = -1;
int minStk[MAXN], minTop = -1;
void push(int val) {
    stk[++stkTop] = val;
    if (minTop < 0 || val <= minStk[minTop]) minStk[++minTop] = val;
}
void pop() {
    if (stk[stkTop] == minStk[minTop]) minTop--;
    stkTop--;
}
int top() { return stk[stkTop]; }
int getMin() { return minStk[minTop]; }
int main() {
    int q;
    if (scanf("%d", &q) != 1) return 0;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[10]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "PUSH") == 0) { int v; if (scanf("%d", &v) != 1) break; push(v); }
        else if (strcmp(op, "POP") == 0) { pop(); }
        else if (strcmp(op, "TOP") == 0) { out[outCount++] = top(); }
        else if (strcmp(op, "GETMIN") == 0) { out[outCount++] = getMin(); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "ms-e2": {
    python: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []
    def push(self, val: int) -> None:
        self.stack.append(val)
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)
    def pop(self) -> None:
        top = self.stack.pop()
        if top == self.min_stack[-1]: self.min_stack.pop()
    def top(self) -> int:
        return self.stack[-1]
    def getMin(self) -> int:
        return self.min_stack[-1]

    def size(self) -> int:
        return len(self.stack)

ms = MinStack()
out = []
q = int(input())
for _ in range(q):
    line = input().split()
    op = line[0]
    if op == "PUSH": ms.push(int(line[1]))
    elif op == "POP": ms.pop()
    elif op == "TOP": out.append(str(ms.top()))
    elif op == "GETMIN": out.append(str(ms.getMin()))
    elif op == "SIZE": out.append(str(ms.size()))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <stack>
#include <string>
#include <vector>
using namespace std;
class MinStack {
    stack<int> stk, minStk;
public:
    void push(int val) {
        stk.push(val);
        if (minStk.empty() || val <= minStk.top()) minStk.push(val);
    }
    void pop() {
        if (stk.top() == minStk.top()) minStk.pop();
        stk.pop();
    }
    int top() { return stk.top(); }
    int getMin() { return minStk.top(); }
    int size() { return (int)stk.size(); }
};
int main() {
    MinStack ms;
    int q;
    if (cin >> q) {
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "PUSH") { int v; cin >> v; ms.push(v); }
            else if (op == "POP") { ms.pop(); }
            else if (op == "TOP") { out.push_back(ms.top()); }
            else if (op == "GETMIN") { out.push_back(ms.getMin()); }
            else if (op == "SIZE") { out.push_back(ms.size()); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class MinStack {
    private Deque<Integer> stk = new ArrayDeque<>();
    private Deque<Integer> minStk = new ArrayDeque<>();
    public void push(int val) {
        stk.push(val);
        if (minStk.isEmpty() || val <= minStk.peek()) minStk.push(val);
    }
    public void pop() {
        if (stk.peek().equals(minStk.peek())) minStk.pop();
        stk.pop();
    }
    public int top() { return stk.peek(); }
    public int getMin() { return minStk.peek(); }
}
    public int size() { return stk.size(); }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            MinStack ms = new MinStack();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("PUSH")) ms.push(sc.nextInt());
                else if (op.equals("POP")) ms.pop();
                else if (op.equals("TOP")) out.add(String.valueOf(ms.top()));
                else if (op.equals("GETMIN")) out.add(String.valueOf(ms.getMin()));
                else if (op.equals("SIZE")) out.add(String.valueOf(ms.size()));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 10005
int stk[MAXN], stkTop = -1;
int minStk[MAXN], minTop = -1;
void push(int val) {
    stk[++stkTop] = val;
    if (minTop < 0 || val <= minStk[minTop]) minStk[++minTop] = val;
}
void pop() {
    if (stk[stkTop] == minStk[minTop]) minTop--;
    stkTop--;
}
int top() { return stk[stkTop]; }
int getMin() { return minStk[minTop]; }
int stkSz = 0;
void push2(int val) { push(val); stkSz++; }
void pop2() { pop(); stkSz--; }
int main() {
    int q;
    if (scanf("%d", &q) != 1) return 0;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[10]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "PUSH") == 0) { int v; if (scanf("%d", &v) != 1) break; push2(v); }
        else if (strcmp(op, "POP") == 0) { pop2(); }
        else if (strcmp(op, "TOP") == 0) { out[outCount++] = top(); }
        else if (strcmp(op, "GETMIN") == 0) { out[outCount++] = getMin(); }
        else if (strcmp(op, "SIZE") == 0) { out[outCount++] = stkSz; }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "ms-e3": {
    python: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []
    def push(self, val: int) -> None:
        self.stack.append(val)
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)
    def pop(self) -> None:
        top = self.stack.pop()
        if top == self.min_stack[-1]: self.min_stack.pop()
    def top(self) -> int:
        return self.stack[-1]
    def getMin(self) -> int:
        return self.min_stack[-1]

    def isEmpty(self) -> bool:
        return len(self.stack) == 0

ms = MinStack()
out = []
q = int(input())
for _ in range(q):
    line = input().split()
    op = line[0]
    if op == "PUSH": ms.push(int(line[1]))
    elif op == "POP": ms.pop()
    elif op == "TOP": out.append(str(ms.top()))
    elif op == "GETMIN": out.append(str(ms.getMin()))
    elif op == "ISEMPTY": out.append("1" if ms.isEmpty() else "0")
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <stack>
#include <string>
#include <vector>
using namespace std;
class MinStack {
    stack<int> stk, minStk;
public:
    void push(int val) {
        stk.push(val);
        if (minStk.empty() || val <= minStk.top()) minStk.push(val);
    }
    void pop() {
        if (stk.top() == minStk.top()) minStk.pop();
        stk.pop();
    }
    int top() { return stk.top(); }
    int getMin() { return minStk.top(); }
    int isEmpty() { return stk.empty() ? 1 : 0; }
};


int main() {
    MinStack ms;
    int q;
    if (cin >> q) {
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "PUSH") { int v; cin >> v; ms.push(v); }
            else if (op == "POP") { ms.pop(); }
            else if (op == "TOP") { out.push_back(ms.top()); }
            else if (op == "GETMIN") { out.push_back(ms.getMin()); }
            else if (op == "ISEMPTY") { out.push_back(ms.isEmpty() ? 1 : 0); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class MinStack {
    private Deque<Integer> stk = new ArrayDeque<>();
    private Deque<Integer> minStk = new ArrayDeque<>();
    public void push(int val) {
        stk.push(val);
        if (minStk.isEmpty() || val <= minStk.peek()) minStk.push(val);
    }
    public void pop() {
        if (stk.peek().equals(minStk.peek())) minStk.pop();
        stk.pop();
    }
    public int top() { return stk.peek(); }
    public int getMin() { return minStk.peek(); }
}
    public int isEmpty() { return stk.isEmpty() ? 1 : 0; }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            MinStack ms = new MinStack();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("PUSH")) ms.push(sc.nextInt());
                else if (op.equals("POP")) ms.pop();
                else if (op.equals("TOP")) out.add(String.valueOf(ms.top()));
                else if (op.equals("GETMIN")) out.add(String.valueOf(ms.getMin()));
                else if (op.equals("ISEMPTY")) out.add(String.valueOf(ms.isEmpty()));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 10005
int stk[MAXN], stkTop = -1;
int minStk[MAXN], minTop = -1;
void push(int val) {
    stk[++stkTop] = val;
    if (minTop < 0 || val <= minStk[minTop]) minStk[++minTop] = val;
}
void pop() {
    if (stk[stkTop] == minStk[minTop]) minTop--;
    stkTop--;
}
int top() { return stk[stkTop]; }
int getMin() { return minStk[minTop]; }
int main() {
    int q;
    if (scanf("%d", &q) != 1) return 0;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[10]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "PUSH") == 0) { int v; if (scanf("%d", &v) != 1) break; push(v); }
        else if (strcmp(op, "POP") == 0) { pop(); }
        else if (strcmp(op, "TOP") == 0) { out[outCount++] = top(); }
        else if (strcmp(op, "GETMIN") == 0) { out[outCount++] = getMin(); }
        else if (strcmp(op, "ISEMPTY") == 0) { out[outCount++] = (stkTop < 0) ? 1 : 0; }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "ms-e4": {
    python: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []
    def push(self, val: int) -> None:
        self.stack.append(val)
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)
    def pop(self) -> None:
        top = self.stack.pop()
        if top == self.min_stack[-1]: self.min_stack.pop()
    def top(self) -> int:
        return self.stack[-1]
    def getMin(self) -> int:
        return self.min_stack[-1]

ms = MinStack()
out = []
q = int(input())
for _ in range(q):
    line = input().split()
    op = line[0]
    if op == "PUSH": ms.push(int(line[1]))
    elif op == "POP": ms.pop()
    elif op == "TOP": out.append(str(ms.top()))
    elif op == "GETMIN": out.append(str(ms.getMin()))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <stack>
#include <string>
#include <vector>
using namespace std;
class MinStack {
    stack<int> stk, minStk;
public:
    void push(int val) {
        stk.push(val);
        if (minStk.empty() || val <= minStk.top()) minStk.push(val);
    }
    void pop() {
        if (stk.top() == minStk.top()) minStk.pop();
        stk.pop();
    }
    int top() { return stk.top(); }
    int getMin() { return minStk.top(); }
};
int main() {
    MinStack ms;
    int q;
    if (cin >> q) {
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "PUSH") { int v; cin >> v; ms.push(v); }
            else if (op == "POP") { ms.pop(); }
            else if (op == "TOP") { out.push_back(ms.top()); }
            else if (op == "GETMIN") { out.push_back(ms.getMin()); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class MinStack {
    private Deque<Integer> stk = new ArrayDeque<>();
    private Deque<Integer> minStk = new ArrayDeque<>();
    public void push(int val) {
        stk.push(val);
        if (minStk.isEmpty() || val <= minStk.peek()) minStk.push(val);
    }
    public void pop() {
        if (stk.peek().equals(minStk.peek())) minStk.pop();
        stk.pop();
    }
    public int top() { return stk.peek(); }
    public int getMin() { return minStk.peek(); }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            MinStack ms = new MinStack();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("PUSH")) ms.push(sc.nextInt());
                else if (op.equals("POP")) ms.pop();
                else if (op.equals("TOP")) out.add(String.valueOf(ms.top()));
                else if (op.equals("GETMIN")) out.add(String.valueOf(ms.getMin()));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 10005
int stk[MAXN], stkTop = -1;
int minStk[MAXN], minTop = -1;
void push(int val) {
    stk[++stkTop] = val;
    if (minTop < 0 || val <= minStk[minTop]) minStk[++minTop] = val;
}
void pop() {
    if (stk[stkTop] == minStk[minTop]) minTop--;
    stkTop--;
}
int top() { return stk[stkTop]; }
int getMin() { return minStk[minTop]; }
int main() {
    int q;
    if (scanf("%d", &q) != 1) return 0;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[10]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "PUSH") == 0) { int v; if (scanf("%d", &v) != 1) break; push(v); }
        else if (strcmp(op, "POP") == 0) { pop(); }
        else if (strcmp(op, "TOP") == 0) { out[outCount++] = top(); }
        else if (strcmp(op, "GETMIN") == 0) { out[outCount++] = getMin(); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "ms-e5": {
    python: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []
    def push(self, val: int) -> None:
        self.stack.append(val)
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)
    def pop(self) -> None:
        top = self.stack.pop()
        if top == self.min_stack[-1]: self.min_stack.pop()
    def top(self) -> int:
        return self.stack[-1]
    def getMin(self) -> int:
        return self.min_stack[-1]

ms = MinStack()
out = []
q = int(input())
for _ in range(q):
    line = input().split()
    op = line[0]
    if op == "PUSH": ms.push(int(line[1]))
    elif op == "POP": ms.pop()
    elif op == "TOP": out.append(str(ms.top()))
    elif op == "GETMIN": out.append(str(ms.getMin()))
    elif op == "GETMAX": out.append(str(max(ms.stack)))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <stack>
#include <string>
#include <vector>
using namespace std;
class MinStack {
    stack<int> stk, minStk;
public:
    void push(int val) {
        stk.push(val);
        if (minStk.empty() || val <= minStk.top()) minStk.push(val);
    }
    void pop() {
        if (stk.top() == minStk.top()) minStk.pop();
        stk.pop();
    }
    int top() { return stk.top(); }
    int getMin() { return minStk.top(); }
};
int main() {
    MinStack ms;
    int q;
    vector<int> allElems;
    if (cin >> q) {
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "PUSH") { int v; cin >> v; ms.push(v); allElems.push_back(v); }
            else if (op == "POP") { ms.pop(); if (!allElems.empty()) allElems.pop_back(); }
            else if (op == "TOP") { out.push_back(ms.top()); }
            else if (op == "GETMIN") { out.push_back(ms.getMin()); }
            else if (op == "GETMAX") {
                int mx = allElems[0];
                for (int x : allElems) if (x > mx) mx = x;
                out.push_back(mx);
            }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class MinStack {
    private Deque<Integer> stk = new ArrayDeque<>();
    private Deque<Integer> minStk = new ArrayDeque<>();
    public void push(int val) {
        stk.push(val);
        if (minStk.isEmpty() || val <= minStk.peek()) minStk.push(val);
    }
    public void pop() {
        if (stk.peek().equals(minStk.peek())) minStk.pop();
        stk.pop();
    }
    public int top() { return stk.peek(); }
    public int getMin() { return minStk.peek(); }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            MinStack ms = new MinStack();
            List<Integer> allElems = new ArrayList<>();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("PUSH")) { int v = sc.nextInt(); ms.push(v); allElems.add(v); }
                else if (op.equals("POP")) { ms.pop(); if (!allElems.isEmpty()) allElems.remove(allElems.size()-1); }
                else if (op.equals("TOP")) out.add(String.valueOf(ms.top()));
                else if (op.equals("GETMIN")) out.add(String.valueOf(ms.getMin()));
                else if (op.equals("GETMAX")) out.add(String.valueOf(allElems.stream().mapToInt(Integer::intValue).max().orElse(0)));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 10005
int stk[MAXN], stkTop = -1;
int minStk[MAXN], minTop = -1;
void push(int val) {
    stk[++stkTop] = val;
    if (minTop < 0 || val <= minStk[minTop]) minStk[++minTop] = val;
}
void pop() {
    if (stk[stkTop] == minStk[minTop]) minTop--;
    stkTop--;
}
int top() { return stk[stkTop]; }
int getMin() { return minStk[minTop]; }
int main() {
    int q;
    if (scanf("%d", &q) != 1) return 0;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    int elems[10005]; int eTop = -1;
    for (int i = 0; i < q; i++) {
        char op[10]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "PUSH") == 0) { int v; if (scanf("%d", &v) != 1) break; push(v); elems[++eTop] = v; }
        else if (strcmp(op, "POP") == 0) { pop(); if (eTop >= 0) eTop--; }
        else if (strcmp(op, "TOP") == 0) { out[outCount++] = top(); }
        else if (strcmp(op, "GETMIN") == 0) { out[outCount++] = getMin(); }
        else if (strcmp(op, "GETMAX") == 0) {
            int mx = elems[0];
            for (int j = 1; j <= eTop; j++) if (elems[j] > mx) mx = elems[j];
            out[outCount++] = mx;
        }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "ms-m1": {
    python: `class MinStack:
    def __init__(self):
        self.stack = []  # stores (val, currentMin) pairs

    def push(self, val: int) -> None:
        cur_min = min(val, self.stack[-1][1]) if self.stack else val
        self.stack.append((val, cur_min))

    def pop(self) -> None:
        self.stack.pop()

    def top(self) -> int:
        return self.stack[-1][0]

    def getMin(self) -> int:
        return self.stack[-1][1]

ms = MinStack()
out = []
q = int(input())
for _ in range(q):
    line = input().split()
    op = line[0]
    if op == "PUSH": ms.push(int(line[1]))
    elif op == "POP": ms.pop()
    elif op == "TOP": out.append(str(ms.top()))
    elif op == "GETMIN": out.append(str(ms.getMin()))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <stack>
#include <string>
#include <vector>
#include <utility>
using namespace std;
class MinStack {
    stack<pair<int,int>> stk; // (val, currentMin)
public:
    void push(int val) {
        int cur_min = stk.empty() ? val : min(val, stk.top().second);
        stk.push({val, cur_min});
    }
    void pop() { stk.pop(); }
    int top() { return stk.top().first; }
    int getMin() { return stk.top().second; }
};
int main() {
    MinStack ms;
    int q;
    if (cin >> q) {
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "PUSH") { int v; cin >> v; ms.push(v); }
            else if (op == "POP") { ms.pop(); }
            else if (op == "TOP") { out.push_back(ms.top()); }
            else if (op == "GETMIN") { out.push_back(ms.getMin()); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class MinStack {
    private Deque<int[]> stk = new ArrayDeque<>(); // [val, currentMin]
    public void push(int val) {
        int curMin = stk.isEmpty() ? val : Math.min(val, stk.peek()[1]);
        stk.push(new int[]{val, curMin});
    }
    public void pop() { stk.pop(); }
    public int top() { return stk.peek()[0]; }
    public int getMin() { return stk.peek()[1]; }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            MinStack ms = new MinStack();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("PUSH")) ms.push(sc.nextInt());
                else if (op.equals("POP")) ms.pop();
                else if (op.equals("TOP")) out.add(String.valueOf(ms.top()));
                else if (op.equals("GETMIN")) out.add(String.valueOf(ms.getMin()));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 10005
int stkVal[MAXN], stkMin[MAXN], stkTop = -1;
void push(int val) {
    int cm = (stkTop < 0) ? val : (val < stkMin[stkTop] ? val : stkMin[stkTop]);
    stkTop++;
    stkVal[stkTop] = val;
    stkMin[stkTop] = cm;
}
void pop() { stkTop--; }
int top() { return stkVal[stkTop]; }
int getMin() { return stkMin[stkTop]; }
int main() {
    int q;
    if (scanf("%d", &q) != 1) return 0;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[10]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "PUSH") == 0) { int v; if (scanf("%d", &v) != 1) break; push(v); }
        else if (strcmp(op, "POP") == 0) { pop(); }
        else if (strcmp(op, "TOP") == 0) { out[outCount++] = top(); }
        else if (strcmp(op, "GETMIN") == 0) { out[outCount++] = getMin(); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "ms-m2": {
    python: `from collections import defaultdict

class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []
        self.count = defaultdict(int)

    def push(self, val: int) -> None:
        self.stack.append(val)
        self.count[val] += 1
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)

    def pop(self) -> None:
        top = self.stack.pop()
        self.count[top] -= 1
        if top == self.min_stack[-1]:
            self.min_stack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.min_stack[-1]

    def minCount(self) -> int:
        return self.count[self.min_stack[-1]]

ms = MinStack()
out = []
q = int(input())
for _ in range(q):
    line = input().split()
    op = line[0]
    if op == "PUSH": ms.push(int(line[1]))
    elif op == "POP": ms.pop()
    elif op == "TOP": out.append(str(ms.top()))
    elif op == "GETMIN": out.append(str(ms.getMin()))
    elif op == "MINCOUNT": out.append(str(ms.minCount()))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <stack>
#include <unordered_map>
#include <string>
#include <vector>
using namespace std;
class MinStack {
    stack<int> stk, minStk;
    unordered_map<int,int> cnt;
public:
    void push(int val) {
        stk.push(val); cnt[val]++;
        if (minStk.empty() || val <= minStk.top()) minStk.push(val);
    }
    void pop() {
        int t = stk.top(); stk.pop();
        cnt[t]--;
        if (t == minStk.top()) minStk.pop();
    }
    int top() { return stk.top(); }
    int getMin() { return minStk.top(); }
    int minCount() { return cnt[minStk.top()]; }
};
int main() {
    MinStack ms;
    int q;
    if (cin >> q) {
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "PUSH") { int v; cin >> v; ms.push(v); }
            else if (op == "POP") { ms.pop(); }
            else if (op == "TOP") { out.push_back(ms.top()); }
            else if (op == "GETMIN") { out.push_back(ms.getMin()); }
            else if (op == "MINCOUNT") { out.push_back(ms.minCount()); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class MinStack {
    private Deque<Integer> stk = new ArrayDeque<>();
    private Deque<Integer> minStk = new ArrayDeque<>();
    private Map<Integer,Integer> cnt = new HashMap<>();
    public void push(int val) {
        stk.push(val); cnt.merge(val, 1, Integer::sum);
        if (minStk.isEmpty() || val <= minStk.peek()) minStk.push(val);
    }
    public void pop() {
        int t = stk.pop();
        cnt.merge(t, -1, Integer::sum);
        if (t == minStk.peek()) minStk.pop();
    }
    public int top() { return stk.peek(); }
    public int getMin() { return minStk.peek(); }
    public int minCount() { return cnt.getOrDefault(minStk.peek(), 0); }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            MinStack ms = new MinStack();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("PUSH")) ms.push(sc.nextInt());
                else if (op.equals("POP")) ms.pop();
                else if (op.equals("TOP")) out.add(String.valueOf(ms.top()));
                else if (op.equals("GETMIN")) out.add(String.valueOf(ms.getMin()));
                else if (op.equals("MINCOUNT")) out.add(String.valueOf(ms.minCount()));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 10005
int stk[MAXN], stkTop = -1;
int minStk[MAXN], minTop = -1;
void push(int val) {
    stk[++stkTop] = val;
    if (minTop < 0 || val <= minStk[minTop]) minStk[++minTop] = val;
}
void pop() {
    if (stk[stkTop] == minStk[minTop]) minTop--;
    stkTop--;
}
int top() { return stk[stkTop]; }
int getMin() { return minStk[minTop]; }
int cnt[200005];
#define OFFSET 100000
void push2(int val) { push(val); cnt[val+OFFSET]++; }
void pop2() {
    int t = top(); pop(); cnt[t+OFFSET]--;
}
int main() {
    int q;
    if (scanf("%d", &q) != 1) return 0;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[10]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "PUSH") == 0) { int v; if (scanf("%d", &v) != 1) break; push2(v); }
        else if (strcmp(op, "POP") == 0) { pop2(); }
        else if (strcmp(op, "TOP") == 0) { out[outCount++] = top(); }
        else if (strcmp(op, "GETMIN") == 0) { out[outCount++] = getMin(); }
        else if (strcmp(op, "MINCOUNT") == 0) { out[outCount++] = cnt[getMin()+OFFSET]; }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "ms-m3": {
    python: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []
    def push(self, val: int) -> None:
        self.stack.append(val)
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)
    def pop(self) -> None:
        top = self.stack.pop()
        if top == self.min_stack[-1]: self.min_stack.pop()
    def top(self) -> int:
        return self.stack[-1]
    def getMin(self) -> int:
        return self.min_stack[-1]

ms = MinStack()
out = []
q = int(input())
for _ in range(q):
    line = input().split()
    op = line[0]
    if op == "PUSH": ms.push(int(line[1]))
    elif op == "POP": ms.pop()
    elif op == "TOP": out.append(str(ms.top()))
    elif op == "GETMIN": out.append(str(ms.getMin()))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <stack>
#include <string>
#include <vector>
using namespace std;
class MinStack {
    stack<int> stk, minStk;
public:
    void push(int val) {
        stk.push(val);
        if (minStk.empty() || val <= minStk.top()) minStk.push(val);
    }
    void pop() {
        if (stk.top() == minStk.top()) minStk.pop();
        stk.pop();
    }
    int top() { return stk.top(); }
    int getMin() { return minStk.top(); }
};
int main() {
    MinStack ms;
    int q;
    if (cin >> q) {
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "PUSH") { int v; cin >> v; ms.push(v); }
            else if (op == "POP") { ms.pop(); }
            else if (op == "TOP") { out.push_back(ms.top()); }
            else if (op == "GETMIN") { out.push_back(ms.getMin()); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class MinStack {
    private Deque<Integer> stk = new ArrayDeque<>();
    private Deque<Integer> minStk = new ArrayDeque<>();
    public void push(int val) {
        stk.push(val);
        if (minStk.isEmpty() || val <= minStk.peek()) minStk.push(val);
    }
    public void pop() {
        if (stk.peek().equals(minStk.peek())) minStk.pop();
        stk.pop();
    }
    public int top() { return stk.peek(); }
    public int getMin() { return minStk.peek(); }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            MinStack ms = new MinStack();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("PUSH")) ms.push(sc.nextInt());
                else if (op.equals("POP")) ms.pop();
                else if (op.equals("TOP")) out.add(String.valueOf(ms.top()));
                else if (op.equals("GETMIN")) out.add(String.valueOf(ms.getMin()));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 10005
int stk[MAXN], stkTop = -1;
int minStk[MAXN], minTop = -1;
void push(int val) {
    stk[++stkTop] = val;
    if (minTop < 0 || val <= minStk[minTop]) minStk[++minTop] = val;
}
void pop() {
    if (stk[stkTop] == minStk[minTop]) minTop--;
    stkTop--;
}
int top() { return stk[stkTop]; }
int getMin() { return minStk[minTop]; }
int main() {
    int q;
    if (scanf("%d", &q) != 1) return 0;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[10]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "PUSH") == 0) { int v; if (scanf("%d", &v) != 1) break; push(v); }
        else if (strcmp(op, "POP") == 0) { pop(); }
        else if (strcmp(op, "TOP") == 0) { out[outCount++] = top(); }
        else if (strcmp(op, "GETMIN") == 0) { out[outCount++] = getMin(); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "ms-m4": {
    python: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []
    def push(self, val: int) -> None:
        self.stack.append(val)
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)
    def pop(self) -> None:
        top = self.stack.pop()
        if top == self.min_stack[-1]: self.min_stack.pop()
    def top(self) -> int:
        return self.stack[-1]
    def getMin(self) -> int:
        return self.min_stack[-1]

ms = MinStack()
out = []
q = int(input())
for _ in range(q):
    line = input().split()
    op = line[0]
    if op == "PUSH": ms.push(int(line[1]))
    elif op == "POP": ms.pop()
    elif op == "TOP": out.append(str(ms.top()))
    elif op == "GETMIN": out.append(str(ms.getMin()))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <stack>
#include <string>
#include <vector>
using namespace std;
class MinStack {
    stack<int> stk, minStk;
public:
    void push(int val) {
        stk.push(val);
        if (minStk.empty() || val <= minStk.top()) minStk.push(val);
    }
    void pop() {
        if (stk.top() == minStk.top()) minStk.pop();
        stk.pop();
    }
    int top() { return stk.top(); }
    int getMin() { return minStk.top(); }
};
int main() {
    MinStack ms;
    int q;
    if (cin >> q) {
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "PUSH") { int v; cin >> v; ms.push(v); }
            else if (op == "POP") { ms.pop(); }
            else if (op == "TOP") { out.push_back(ms.top()); }
            else if (op == "GETMIN") { out.push_back(ms.getMin()); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class MinStack {
    private Deque<Integer> stk = new ArrayDeque<>();
    private Deque<Integer> minStk = new ArrayDeque<>();
    public void push(int val) {
        stk.push(val);
        if (minStk.isEmpty() || val <= minStk.peek()) minStk.push(val);
    }
    public void pop() {
        if (stk.peek().equals(minStk.peek())) minStk.pop();
        stk.pop();
    }
    public int top() { return stk.peek(); }
    public int getMin() { return minStk.peek(); }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            MinStack ms = new MinStack();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("PUSH")) ms.push(sc.nextInt());
                else if (op.equals("POP")) ms.pop();
                else if (op.equals("TOP")) out.add(String.valueOf(ms.top()));
                else if (op.equals("GETMIN")) out.add(String.valueOf(ms.getMin()));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 10005
int stk[MAXN], stkTop = -1;
int minStk[MAXN], minTop = -1;
void push(int val) {
    stk[++stkTop] = val;
    if (minTop < 0 || val <= minStk[minTop]) minStk[++minTop] = val;
}
void pop() {
    if (stk[stkTop] == minStk[minTop]) minTop--;
    stkTop--;
}
int top() { return stk[stkTop]; }
int getMin() { return minStk[minTop]; }
int main() {
    int q;
    if (scanf("%d", &q) != 1) return 0;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[10]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "PUSH") == 0) { int v; if (scanf("%d", &v) != 1) break; push(v); }
        else if (strcmp(op, "POP") == 0) { pop(); }
        else if (strcmp(op, "TOP") == 0) { out[outCount++] = top(); }
        else if (strcmp(op, "GETMIN") == 0) { out[outCount++] = getMin(); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "ms-m5": {
    python: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []
    def push(self, val: int) -> None:
        self.stack.append(val)
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)
    def pop(self) -> None:
        top = self.stack.pop()
        if top == self.min_stack[-1]: self.min_stack.pop()
    def top(self) -> int:
        return self.stack[-1]
    def getMin(self) -> int:
        return self.min_stack[-1]

ms = MinStack()
out = []
q = int(input())
for _ in range(q):
    line = input().split()
    op = line[0]
    if op == "PUSH": ms.push(int(line[1]))
    elif op == "POP": ms.pop()
    elif op == "TOP": out.append(str(ms.top()))
    elif op == "GETMIN": out.append(str(ms.getMin()))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <stack>
#include <string>
#include <vector>
using namespace std;
class MinStack {
    stack<int> stk, minStk;
public:
    void push(int val) {
        stk.push(val);
        if (minStk.empty() || val <= minStk.top()) minStk.push(val);
    }
    void pop() {
        if (stk.top() == minStk.top()) minStk.pop();
        stk.pop();
    }
    int top() { return stk.top(); }
    int getMin() { return minStk.top(); }
};
int main() {
    MinStack ms;
    int q;
    if (cin >> q) {
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "PUSH") { int v; cin >> v; ms.push(v); }
            else if (op == "POP") { ms.pop(); }
            else if (op == "TOP") { out.push_back(ms.top()); }
            else if (op == "GETMIN") { out.push_back(ms.getMin()); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class MinStack {
    private Deque<Integer> stk = new ArrayDeque<>();
    private Deque<Integer> minStk = new ArrayDeque<>();
    public void push(int val) {
        stk.push(val);
        if (minStk.isEmpty() || val <= minStk.peek()) minStk.push(val);
    }
    public void pop() {
        if (stk.peek().equals(minStk.peek())) minStk.pop();
        stk.pop();
    }
    public int top() { return stk.peek(); }
    public int getMin() { return minStk.peek(); }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            MinStack ms = new MinStack();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("PUSH")) ms.push(sc.nextInt());
                else if (op.equals("POP")) ms.pop();
                else if (op.equals("TOP")) out.add(String.valueOf(ms.top()));
                else if (op.equals("GETMIN")) out.add(String.valueOf(ms.getMin()));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 10005
int stk[MAXN], stkTop = -1;
int minStk[MAXN], minTop = -1;
void push(int val) {
    stk[++stkTop] = val;
    if (minTop < 0 || val <= minStk[minTop]) minStk[++minTop] = val;
}
void pop() {
    if (stk[stkTop] == minStk[minTop]) minTop--;
    stkTop--;
}
int top() { return stk[stkTop]; }
int getMin() { return minStk[minTop]; }
int main() {
    int q;
    if (scanf("%d", &q) != 1) return 0;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[10]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "PUSH") == 0) { int v; if (scanf("%d", &v) != 1) break; push(v); }
        else if (strcmp(op, "POP") == 0) { pop(); }
        else if (strcmp(op, "TOP") == 0) { out[outCount++] = top(); }
        else if (strcmp(op, "GETMIN") == 0) { out[outCount++] = getMin(); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "ms-h1": {
    python: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []
    def push(self, val: int) -> None:
        self.stack.append(val)
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)
    def pop(self) -> None:
        top = self.stack.pop()
        if top == self.min_stack[-1]: self.min_stack.pop()
    def top(self) -> int:
        return self.stack[-1]
    def getMin(self) -> int:
        return self.min_stack[-1]

ms = MinStack()
out = []
q = int(input())
for _ in range(q):
    line = input().split()
    op = line[0]
    if op == "PUSH": ms.push(int(line[1]))
    elif op == "POP": ms.pop()
    elif op == "TOP": out.append(str(ms.top()))
    elif op == "GETMIN": out.append(str(ms.getMin()))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <stack>
#include <string>
#include <vector>
using namespace std;
class MinStack {
    stack<int> stk, minStk;
public:
    void push(int val) {
        stk.push(val);
        if (minStk.empty() || val <= minStk.top()) minStk.push(val);
    }
    void pop() {
        if (stk.top() == minStk.top()) minStk.pop();
        stk.pop();
    }
    int top() { return stk.top(); }
    int getMin() { return minStk.top(); }
};
int main() {
    MinStack ms;
    int q;
    if (cin >> q) {
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "PUSH") { int v; cin >> v; ms.push(v); }
            else if (op == "POP") { ms.pop(); }
            else if (op == "TOP") { out.push_back(ms.top()); }
            else if (op == "GETMIN") { out.push_back(ms.getMin()); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class MinStack {
    private Deque<Integer> stk = new ArrayDeque<>();
    private Deque<Integer> minStk = new ArrayDeque<>();
    public void push(int val) {
        stk.push(val);
        if (minStk.isEmpty() || val <= minStk.peek()) minStk.push(val);
    }
    public void pop() {
        if (stk.peek().equals(minStk.peek())) minStk.pop();
        stk.pop();
    }
    public int top() { return stk.peek(); }
    public int getMin() { return minStk.peek(); }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            MinStack ms = new MinStack();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("PUSH")) ms.push(sc.nextInt());
                else if (op.equals("POP")) ms.pop();
                else if (op.equals("TOP")) out.add(String.valueOf(ms.top()));
                else if (op.equals("GETMIN")) out.add(String.valueOf(ms.getMin()));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 10005
int stk[MAXN], stkTop = -1;
int minStk[MAXN], minTop = -1;
void push(int val) {
    stk[++stkTop] = val;
    if (minTop < 0 || val <= minStk[minTop]) minStk[++minTop] = val;
}
void pop() {
    if (stk[stkTop] == minStk[minTop]) minTop--;
    stkTop--;
}
int top() { return stk[stkTop]; }
int getMin() { return minStk[minTop]; }
int main() {
    int q;
    if (scanf("%d", &q) != 1) return 0;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[10]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "PUSH") == 0) { int v; if (scanf("%d", &v) != 1) break; push(v); }
        else if (strcmp(op, "POP") == 0) { pop(); }
        else if (strcmp(op, "TOP") == 0) { out[outCount++] = top(); }
        else if (strcmp(op, "GETMIN") == 0) { out[outCount++] = getMin(); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "ms-h2": {
    python: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []
    def push(self, val: int) -> None:
        self.stack.append(val)
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)
    def pop(self) -> None:
        top = self.stack.pop()
        if top == self.min_stack[-1]: self.min_stack.pop()
    def top(self) -> int:
        return self.stack[-1]
    def getMin(self) -> int:
        return self.min_stack[-1]

ms = MinStack()
out = []
q = int(input())
for _ in range(q):
    line = input().split()
    op = line[0]
    if op == "PUSH": ms.push(int(line[1]))
    elif op == "POP": ms.pop()
    elif op == "TOP": out.append(str(ms.top()))
    elif op == "GETMIN": out.append(str(ms.getMin()))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <stack>
#include <string>
#include <vector>
using namespace std;
class MinStack {
    stack<int> stk, minStk;
public:
    void push(int val) {
        stk.push(val);
        if (minStk.empty() || val <= minStk.top()) minStk.push(val);
    }
    void pop() {
        if (stk.top() == minStk.top()) minStk.pop();
        stk.pop();
    }
    int top() { return stk.top(); }
    int getMin() { return minStk.top(); }
};
int main() {
    MinStack ms;
    int q;
    if (cin >> q) {
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "PUSH") { int v; cin >> v; ms.push(v); }
            else if (op == "POP") { ms.pop(); }
            else if (op == "TOP") { out.push_back(ms.top()); }
            else if (op == "GETMIN") { out.push_back(ms.getMin()); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class MinStack {
    private Deque<Integer> stk = new ArrayDeque<>();
    private Deque<Integer> minStk = new ArrayDeque<>();
    public void push(int val) {
        stk.push(val);
        if (minStk.isEmpty() || val <= minStk.peek()) minStk.push(val);
    }
    public void pop() {
        if (stk.peek().equals(minStk.peek())) minStk.pop();
        stk.pop();
    }
    public int top() { return stk.peek(); }
    public int getMin() { return minStk.peek(); }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            MinStack ms = new MinStack();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("PUSH")) ms.push(sc.nextInt());
                else if (op.equals("POP")) ms.pop();
                else if (op.equals("TOP")) out.add(String.valueOf(ms.top()));
                else if (op.equals("GETMIN")) out.add(String.valueOf(ms.getMin()));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 10005
int stk[MAXN], stkTop = -1;
int minStk[MAXN], minTop = -1;
void push(int val) {
    stk[++stkTop] = val;
    if (minTop < 0 || val <= minStk[minTop]) minStk[++minTop] = val;
}
void pop() {
    if (stk[stkTop] == minStk[minTop]) minTop--;
    stkTop--;
}
int top() { return stk[stkTop]; }
int getMin() { return minStk[minTop]; }
int main() {
    int q;
    if (scanf("%d", &q) != 1) return 0;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[10]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "PUSH") == 0) { int v; if (scanf("%d", &v) != 1) break; push(v); }
        else if (strcmp(op, "POP") == 0) { pop(); }
        else if (strcmp(op, "TOP") == 0) { out[outCount++] = top(); }
        else if (strcmp(op, "GETMIN") == 0) { out[outCount++] = getMin(); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "ms-h3": {
    python: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []
    def push(self, val: int) -> None:
        self.stack.append(val)
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)
    def pop(self) -> None:
        top = self.stack.pop()
        if top == self.min_stack[-1]: self.min_stack.pop()
    def top(self) -> int:
        return self.stack[-1]
    def getMin(self) -> int:
        return self.min_stack[-1]

ms = MinStack()
out = []
q = int(input())
for _ in range(q):
    line = input().split()
    op = line[0]
    if op == "PUSH": ms.push(int(line[1]))
    elif op == "POP": ms.pop()
    elif op == "TOP": out.append(str(ms.top()))
    elif op == "GETMIN": out.append(str(ms.getMin()))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <stack>
#include <string>
#include <vector>
using namespace std;
class MinStack {
    stack<int> stk, minStk;
public:
    void push(int val) {
        stk.push(val);
        if (minStk.empty() || val <= minStk.top()) minStk.push(val);
    }
    void pop() {
        if (stk.top() == minStk.top()) minStk.pop();
        stk.pop();
    }
    int top() { return stk.top(); }
    int getMin() { return minStk.top(); }
};
int main() {
    MinStack ms;
    int q;
    if (cin >> q) {
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "PUSH") { int v; cin >> v; ms.push(v); }
            else if (op == "POP") { ms.pop(); }
            else if (op == "TOP") { out.push_back(ms.top()); }
            else if (op == "GETMIN") { out.push_back(ms.getMin()); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class MinStack {
    private Deque<Integer> stk = new ArrayDeque<>();
    private Deque<Integer> minStk = new ArrayDeque<>();
    public void push(int val) {
        stk.push(val);
        if (minStk.isEmpty() || val <= minStk.peek()) minStk.push(val);
    }
    public void pop() {
        if (stk.peek().equals(minStk.peek())) minStk.pop();
        stk.pop();
    }
    public int top() { return stk.peek(); }
    public int getMin() { return minStk.peek(); }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            MinStack ms = new MinStack();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("PUSH")) ms.push(sc.nextInt());
                else if (op.equals("POP")) ms.pop();
                else if (op.equals("TOP")) out.add(String.valueOf(ms.top()));
                else if (op.equals("GETMIN")) out.add(String.valueOf(ms.getMin()));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 10005
int stk[MAXN], stkTop = -1;
int minStk[MAXN], minTop = -1;
void push(int val) {
    stk[++stkTop] = val;
    if (minTop < 0 || val <= minStk[minTop]) minStk[++minTop] = val;
}
void pop() {
    if (stk[stkTop] == minStk[minTop]) minTop--;
    stkTop--;
}
int top() { return stk[stkTop]; }
int getMin() { return minStk[minTop]; }
int main() {
    int q;
    if (scanf("%d", &q) != 1) return 0;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[10]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "PUSH") == 0) { int v; if (scanf("%d", &v) != 1) break; push(v); }
        else if (strcmp(op, "POP") == 0) { pop(); }
        else if (strcmp(op, "TOP") == 0) { out[outCount++] = top(); }
        else if (strcmp(op, "GETMIN") == 0) { out[outCount++] = getMin(); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "ms-h4": {
    python: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []
    def push(self, val: int) -> None:
        self.stack.append(val)
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)
    def pop(self) -> None:
        top = self.stack.pop()
        if top == self.min_stack[-1]: self.min_stack.pop()
    def top(self) -> int:
        return self.stack[-1]
    def getMin(self) -> int:
        return self.min_stack[-1]

ms = MinStack()
out = []
q = int(input())
for _ in range(q):
    line = input().split()
    op = line[0]
    if op == "PUSH": ms.push(int(line[1]))
    elif op == "POP": ms.pop()
    elif op == "TOP": out.append(str(ms.top()))
    elif op == "GETMIN": out.append(str(ms.getMin()))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <stack>
#include <string>
#include <vector>
using namespace std;
class MinStack {
    stack<int> stk, minStk;
public:
    void push(int val) {
        stk.push(val);
        if (minStk.empty() || val <= minStk.top()) minStk.push(val);
    }
    void pop() {
        if (stk.top() == minStk.top()) minStk.pop();
        stk.pop();
    }
    int top() { return stk.top(); }
    int getMin() { return minStk.top(); }
};
int main() {
    MinStack ms;
    int q;
    if (cin >> q) {
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "PUSH") { int v; cin >> v; ms.push(v); }
            else if (op == "POP") { ms.pop(); }
            else if (op == "TOP") { out.push_back(ms.top()); }
            else if (op == "GETMIN") { out.push_back(ms.getMin()); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class MinStack {
    private Deque<Integer> stk = new ArrayDeque<>();
    private Deque<Integer> minStk = new ArrayDeque<>();
    public void push(int val) {
        stk.push(val);
        if (minStk.isEmpty() || val <= minStk.peek()) minStk.push(val);
    }
    public void pop() {
        if (stk.peek().equals(minStk.peek())) minStk.pop();
        stk.pop();
    }
    public int top() { return stk.peek(); }
    public int getMin() { return minStk.peek(); }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            MinStack ms = new MinStack();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("PUSH")) ms.push(sc.nextInt());
                else if (op.equals("POP")) ms.pop();
                else if (op.equals("TOP")) out.add(String.valueOf(ms.top()));
                else if (op.equals("GETMIN")) out.add(String.valueOf(ms.getMin()));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 10005
int stk[MAXN], stkTop = -1;
int minStk[MAXN], minTop = -1;
void push(int val) {
    stk[++stkTop] = val;
    if (minTop < 0 || val <= minStk[minTop]) minStk[++minTop] = val;
}
void pop() {
    if (stk[stkTop] == minStk[minTop]) minTop--;
    stkTop--;
}
int top() { return stk[stkTop]; }
int getMin() { return minStk[minTop]; }
int main() {
    int q;
    if (scanf("%d", &q) != 1) return 0;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[10]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "PUSH") == 0) { int v; if (scanf("%d", &v) != 1) break; push(v); }
        else if (strcmp(op, "POP") == 0) { pop(); }
        else if (strcmp(op, "TOP") == 0) { out[outCount++] = top(); }
        else if (strcmp(op, "GETMIN") == 0) { out[outCount++] = getMin(); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  },
  "ms-h5": {
    python: `class MinStack:
    def __init__(self):
        self.stack = []
        self.min_stack = []
    def push(self, val: int) -> None:
        self.stack.append(val)
        if not self.min_stack or val <= self.min_stack[-1]:
            self.min_stack.append(val)
    def pop(self) -> None:
        top = self.stack.pop()
        if top == self.min_stack[-1]: self.min_stack.pop()
    def top(self) -> int:
        return self.stack[-1]
    def getMin(self) -> int:
        return self.min_stack[-1]

ms = MinStack()
out = []
q = int(input())
for _ in range(q):
    line = input().split()
    op = line[0]
    if op == "PUSH": ms.push(int(line[1]))
    elif op == "POP": ms.pop()
    elif op == "TOP": out.append(str(ms.top()))
    elif op == "GETMIN": out.append(str(ms.getMin()))
print(" ".join(out))`,
    cpp: `#include <iostream>
#include <stack>
#include <string>
#include <vector>
using namespace std;
class MinStack {
    stack<int> stk, minStk;
public:
    void push(int val) {
        stk.push(val);
        if (minStk.empty() || val <= minStk.top()) minStk.push(val);
    }
    void pop() {
        if (stk.top() == minStk.top()) minStk.pop();
        stk.pop();
    }
    int top() { return stk.top(); }
    int getMin() { return minStk.top(); }
};
int main() {
    MinStack ms;
    int q;
    if (cin >> q) {
        vector<int> out;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "PUSH") { int v; cin >> v; ms.push(v); }
            else if (op == "POP") { ms.pop(); }
            else if (op == "TOP") { out.push_back(ms.top()); }
            else if (op == "GETMIN") { out.push_back(ms.getMin()); }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i+1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    java: `import java.util.*;
class MinStack {
    private Deque<Integer> stk = new ArrayDeque<>();
    private Deque<Integer> minStk = new ArrayDeque<>();
    public void push(int val) {
        stk.push(val);
        if (minStk.isEmpty() || val <= minStk.peek()) minStk.push(val);
    }
    public void pop() {
        if (stk.peek().equals(minStk.peek())) minStk.pop();
        stk.pop();
    }
    public int top() { return stk.peek(); }
    public int getMin() { return minStk.peek(); }
}

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            MinStack ms = new MinStack();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                String op = sc.next();
                if (op.equals("PUSH")) ms.push(sc.nextInt());
                else if (op.equals("POP")) ms.pop();
                else if (op.equals("TOP")) out.add(String.valueOf(ms.top()));
                else if (op.equals("GETMIN")) out.add(String.valueOf(ms.getMin()));
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAXN 10005
int stk[MAXN], stkTop = -1;
int minStk[MAXN], minTop = -1;
void push(int val) {
    stk[++stkTop] = val;
    if (minTop < 0 || val <= minStk[minTop]) minStk[++minTop] = val;
}
void pop() {
    if (stk[stkTop] == minStk[minTop]) minTop--;
    stkTop--;
}
int top() { return stk[stkTop]; }
int getMin() { return minStk[minTop]; }
int main() {
    int q;
    if (scanf("%d", &q) != 1) return 0;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[10]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "PUSH") == 0) { int v; if (scanf("%d", &v) != 1) break; push(v); }
        else if (strcmp(op, "POP") == 0) { pop(); }
        else if (strcmp(op, "TOP") == 0) { out[outCount++] = top(); }
        else if (strcmp(op, "GETMIN") == 0) { out[outCount++] = getMin(); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
  }
};
