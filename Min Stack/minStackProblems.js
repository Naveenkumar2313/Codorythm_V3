export const minStackProblems = [
  {
    id: "ms-e1",
    title: "Min Stack Basic",
    difficulty: "Easy",
    description: "Implement a Min Stack supporting push, pop, top, and getMin operations, all in O(1) time.",
    constraints: ["-10^5 <= val <= 10^5", "1 <= q <= 2000", "Stack is never empty on top/pop/getMin calls"],
    examples: [{"input": "PUSH 5, PUSH 3, PUSH 7, GETMIN, POP, GETMIN, TOP", "output": "3 3 5", "explanation": "After pushing 5,3,7: min=3. POP removes 7. min=3. TOP=5."}],
    testCases: [{"input": "7\nPUSH 5\nPUSH 3\nPUSH 7\nGETMIN\nPOP\nGETMIN\nTOP", "expectedOutput": "3 3 3", "hidden": false}, {"input": "5\nPUSH 10\nPUSH 20\nGETMIN\nPUSH 5\nGETMIN", "expectedOutput": "10 5", "hidden": false}],
    starterCode: {
      python: `class MinStack:
    def __init__(self):
        pass
    def push(self, val: int) -> None:
        pass
    def pop(self) -> None:
        pass
    def top(self) -> int:
        return 0
    def getMin(self) -> int:
        return 0

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
#include <string>
#include <vector>
using namespace std;
class MinStack {
public:
    void push(int val) {}
    void pop() {}
    int top() { return 0; }
    int getMin() { return 0; }
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
    public void push(int val) {}
    public void pop() {}
    public int top() { return 0; }
    public int getMin() { return 0; }
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
void push(int val) {}
void pop() {}
int top() { return 0; }
int getMin() { return 0; }
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
  },
  {
    id: "ms-e2",
    title: "Min Stack - Size Query",
    difficulty: "Easy",
    description: "Implement a Min Stack that also supports a SIZE command returning the current number of elements.",
    constraints: ["-10^5 <= val <= 10^5", "1 <= q <= 2000"],
    examples: [{"input": "PUSH 1, PUSH 2, SIZE, POP, SIZE", "output": "2 1", "explanation": "After 2 pushes: size=2. After pop: size=1."}],
    testCases: [{"input": "5\nPUSH 1\nPUSH 2\nSIZE\nPOP\nSIZE", "expectedOutput": "2 1", "hidden": false}, {"input": "6\nPUSH 10\nPUSH 20\nPUSH 30\nSIZE\nGETMIN\nSIZE", "expectedOutput": "3 10 3", "hidden": false}],
    starterCode: {
      python: `class MinStack:
    def __init__(self):
        pass
    def push(self, val: int) -> None:
        pass
    def pop(self) -> None:
        pass
    def top(self) -> int:
        return 0
    def getMin(self) -> int:
        return 0

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
#include <string>
#include <vector>
using namespace std;
class MinStack {
public:
    void push(int val) {}
    void pop() {}
    int top() { return 0; }
    int getMin() { return 0; }
};
    int size() { return 0; }

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
    public void push(int val) {}
    public void pop() {}
    public int top() { return 0; }
    public int getMin() { return 0; }
}
    public int size() { return 0; }

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
void push(int val) {}
void pop() {}
int top() { return 0; }
int getMin() { return 0; }
int stkSize = 0;
int sizeQuery() { return stkSize; }

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
        else if (strcmp(op, "SIZE") == 0) { out[outCount++] = sizeQuery(); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
    },
  },
  {
    id: "ms-e3",
    title: "Min Stack - IsEmpty Query",
    difficulty: "Easy",
    description: "Implement a Min Stack with an ISEMPTY command that returns 1 if the stack is empty, 0 otherwise.",
    constraints: ["-10^5 <= val <= 10^5", "1 <= q <= 2000"],
    examples: [{"input": "ISEMPTY, PUSH 5, ISEMPTY, POP, ISEMPTY", "output": "1 0 1", "explanation": "Initially empty=1. After push: empty=0. After pop: empty=1."}],
    testCases: [{"input": "5\nISEMPTY\nPUSH 5\nISEMPTY\nPOP\nISEMPTY", "expectedOutput": "1 0 1", "hidden": false}, {"input": "6\nPUSH 10\nPUSH 20\nISEMPTY\nGETMIN\nPOP\nISEMPTY", "expectedOutput": "0 10 0", "hidden": false}],
    starterCode: {
      python: `class MinStack:
    def __init__(self):
        pass
    def push(self, val: int) -> None:
        pass
    def pop(self) -> None:
        pass
    def top(self) -> int:
        return 0
    def getMin(self) -> int:
        return 0

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
    elif op == "ISEMPTY": out.append("1" if len(ms.stack) == 0 else "0")
print(" ".join(out))`,
      cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;
class MinStack {
public:
    void push(int val) {}
    void pop() {}
    int top() { return 0; }
    int getMin() { return 0; }
};
    bool isEmpty() { return false; }

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
    public void push(int val) {}
    public void pop() {}
    public int top() { return 0; }
    public int getMin() { return 0; }
}
    public int isEmpty() { return 1; }

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
void push(int val) {}
void pop() {}
int top() { return 0; }
int getMin() { return 0; }
int main() {
    int q;
    if (scanf("%d", &q) != 1) return 0;
    int* out = malloc(q * sizeof(int)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[10]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "PUSH") == 0) { int v; if (scanf("%d", &v) != 1) break; push(v); }
        else if (strcmp(op, "POP") == 0) { pop(); }
        else if (strcmp(op, "TOP") == 0) { out[outCount++] = top(); }
        else if (strcmp(op, "ISEMPTY") == 0) { out[outCount++] = 1; }
        else if (strcmp(op, "GETMIN") == 0) { out[outCount++] = getMin(); }
    }
    for (int i = 0; i < outCount; i++) printf("%d%s", out[i], (i+1 < outCount) ? " " : "");
    printf("\\n"); return 0;
}`,
    },
  },
  {
    id: "ms-e4",
    title: "Min Stack - Peek and Min Combined",
    difficulty: "Easy",
    description: "Implement a Min Stack. Given a series of operations (PUSH, POP, TOP, GETMIN), output the result of every TOP and GETMIN call.",
    constraints: ["-10^5 <= val <= 10^5", "1 <= q <= 2000"],
    examples: [{"input": "PUSH -2, PUSH 0, PUSH -3, GETMIN, POP, TOP, GETMIN", "output": "-3 0 -2", "explanation": "Classic LeetCode 155. After pushing -2,0,-3: min=-3. Pop -3. TOP=0. Min=-2."}],
    testCases: [{"input": "7\nPUSH -2\nPUSH 0\nPUSH -3\nGETMIN\nPOP\nTOP\nGETMIN", "expectedOutput": "-3 0 -2", "hidden": false}, {"input": "8\nPUSH 5\nPUSH 4\nPUSH 3\nPUSH 2\nPUSH 1\nGETMIN\nPOP\nGETMIN", "expectedOutput": "1 2", "hidden": false}],
    starterCode: {
      python: `class MinStack:
    def __init__(self):
        pass
    def push(self, val: int) -> None:
        pass
    def pop(self) -> None:
        pass
    def top(self) -> int:
        return 0
    def getMin(self) -> int:
        return 0

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
#include <string>
#include <vector>
using namespace std;
class MinStack {
public:
    void push(int val) {}
    void pop() {}
    int top() { return 0; }
    int getMin() { return 0; }
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
    public void push(int val) {}
    public void pop() {}
    public int top() { return 0; }
    public int getMin() { return 0; }
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
void push(int val) {}
void pop() {}
int top() { return 0; }
int getMin() { return 0; }
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
  },
  {
    id: "ms-e5",
    title: "Min Stack - Max Query",
    difficulty: "Easy",
    description: "Implement a Min Stack that also supports GETMAX returning the maximum element currently in the stack in O(N) time (a linear scan is acceptable for this variant).",
    constraints: ["-10^5 <= val <= 10^5", "1 <= q <= 2000"],
    examples: [{"input": "PUSH 5, PUSH 3, PUSH 7, GETMIN, GETMAX, POP, GETMAX", "output": "3 7 5", "explanation": "Min=3, Max=7. After popping 7, max becomes 5."}],
    testCases: [{"input": "7\nPUSH 5\nPUSH 3\nPUSH 7\nGETMIN\nGETMAX\nPOP\nGETMAX", "expectedOutput": "3 7 5", "hidden": false}, {"input": "5\nPUSH 10\nPUSH 20\nPUSH 15\nGETMAX\nGETMIN", "expectedOutput": "20 10", "hidden": false}],
    starterCode: {
      python: `class MinStack:
    def __init__(self):
        pass
    def push(self, val: int) -> None:
        pass
    def pop(self) -> None:
        pass
    def top(self) -> int:
        return 0
    def getMin(self) -> int:
        return 0

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
    elif op == "GETMAX": out.append(str(max(ms.stack) if ms.stack else 0))
print(" ".join(out))`,
      cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;
class MinStack {
public:
    void push(int val) {}
    void pop() {}
    int top() { return 0; }
    int getMin() { return 0; }
};
int main() {
    MinStack ms;
    int q;
    if (cin >> q) {
        vector<int> out;
        vector<int> allElems;
        for (int i = 0; i < q; i++) {
            string op; cin >> op;
            if (op == "PUSH") { int v; cin >> v; ms.push(v); allElems.push_back(v); }
            else if (op == "POP") { ms.pop(); if(!allElems.empty()) allElems.pop_back(); }
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
    public void push(int val) {}
    public void pop() {}
    public int top() { return 0; }
    public int getMin() { return 0; }
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
                else if (op.equals("POP")) { ms.pop(); if(!allElems.isEmpty()) allElems.remove(allElems.size()-1); }
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
void push(int val) {}
void pop() {}
int top() { return 0; }
int getMin() { return 0; }
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
  },
  {
    id: "ms-m1",
    title: "Min Stack - Pair Encoding",
    difficulty: "Medium",
    description: "Implement a Min Stack using a single stack that stores pairs (value, currentMin). This avoids a separate auxiliary stack while maintaining O(1) getMin.",
    constraints: ["-10^5 <= val <= 10^5", "1 <= q <= 2000"],
    examples: [{"input": "PUSH 5, PUSH 3, PUSH 7, GETMIN, POP, GETMIN, TOP", "output": "3 3 5", "explanation": "Pairs: (5,5),(3,3),(7,3). GETMIN returns top pair's min=3. Pop (7,3). New top=(3,3), min=3. After pop (3,3), top=(5,5), min=5."}],
    testCases: [{"input": "7\nPUSH 5\nPUSH 3\nPUSH 7\nGETMIN\nPOP\nGETMIN\nTOP", "expectedOutput": "3 3 3", "hidden": false}, {"input": "6\nPUSH 10\nPUSH 5\nPUSH 20\nGETMIN\nPOP\nGETMIN", "expectedOutput": "5 5", "hidden": false}],
    starterCode: {
      python: `class MinStack:
    def __init__(self):
        pass
    def push(self, val: int) -> None:
        pass
    def pop(self) -> None:
        pass
    def top(self) -> int:
        return 0
    def getMin(self) -> int:
        return 0

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
#include <string>
#include <vector>
using namespace std;
class MinStack {
public:
    void push(int val) {}
    void pop() {}
    int top() { return 0; }
    int getMin() { return 0; }
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
    public void push(int val) {}
    public void pop() {}
    public int top() { return 0; }
    public int getMin() { return 0; }
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
void push(int val) {}
void pop() {}
int top() { return 0; }
int getMin() { return 0; }
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
  },
  {
    id: "ms-m2",
    title: "Min Stack - Min Count Query",
    difficulty: "Medium",
    description: "Implement a Min Stack that also supports MINCOUNT, which returns how many times the current minimum value appears in the stack.",
    constraints: ["-10^5 <= val <= 10^5", "1 <= q <= 2000"],
    examples: [{"input": "PUSH 3, PUSH 5, PUSH 3, MINCOUNT, POP, MINCOUNT", "output": "2 1", "explanation": "Min=3 appears twice (pushed at positions 1 and 3). After POP removes second 3, MINCOUNT=1."}],
    testCases: [{"input": "6\nPUSH 3\nPUSH 5\nPUSH 3\nMINCOUNT\nPOP\nMINCOUNT", "expectedOutput": "2 1", "hidden": false}, {"input": "6\nPUSH 1\nPUSH 1\nPUSH 1\nMINCOUNT\nPOP\nMINCOUNT", "expectedOutput": "3 2", "hidden": false}],
    starterCode: {
      python: `class MinStack:
    def __init__(self):
        pass
    def push(self, val: int) -> None:
        pass
    def pop(self) -> None:
        pass
    def top(self) -> int:
        return 0
    def getMin(self) -> int:
        return 0

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
#include <string>
#include <vector>
using namespace std;
class MinStack {
public:
    void push(int val) {}
    void pop() {}
    int top() { return 0; }
    int getMin() { return 0; }
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
    public void push(int val) {}
    public void pop() {}
    public int top() { return 0; }
    public int getMin() { return 0; }
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
void push(int val) {}
void pop() {}
int top() { return 0; }
int getMin() { return 0; }
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
  },
  {
    id: "ms-m3",
    title: "Min Stack - Descending Push Pattern",
    difficulty: "Medium",
    description: "Implement a Min Stack. Push elements in decreasing order (each new push is smaller). Test that getMin correctly updates on each push.",
    constraints: ["-10^5 <= val <= 10^5", "1 <= q <= 2000"],
    examples: [{"input": "PUSH 10, PUSH 8, PUSH 6, PUSH 4, GETMIN, POP, GETMIN", "output": "4 6", "explanation": "Each push updates min. After pops, min rises."}],
    testCases: [{"input": "7\nPUSH 10\nPUSH 8\nPUSH 6\nPUSH 4\nGETMIN\nPOP\nGETMIN", "expectedOutput": "4 6", "hidden": false}, {"input": "6\nPUSH 100\nPUSH 50\nPUSH 25\nGETMIN\nPOP\nGETMIN", "expectedOutput": "25 50", "hidden": false}],
    starterCode: {
      python: `class MinStack:
    def __init__(self):
        pass
    def push(self, val: int) -> None:
        pass
    def pop(self) -> None:
        pass
    def top(self) -> int:
        return 0
    def getMin(self) -> int:
        return 0

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
#include <string>
#include <vector>
using namespace std;
class MinStack {
public:
    void push(int val) {}
    void pop() {}
    int top() { return 0; }
    int getMin() { return 0; }
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
    public void push(int val) {}
    public void pop() {}
    public int top() { return 0; }
    public int getMin() { return 0; }
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
void push(int val) {}
void pop() {}
int top() { return 0; }
int getMin() { return 0; }
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
  },
  {
    id: "ms-m4",
    title: "Min Stack - Ascending Push Pattern",
    difficulty: "Medium",
    description: "Implement a Min Stack. Push elements in increasing order. Test that getMin always returns the first pushed element (smallest) until it is popped.",
    constraints: ["-10^5 <= val <= 10^5", "1 <= q <= 2000"],
    examples: [{"input": "PUSH 1, PUSH 3, PUSH 5, GETMIN, POP, GETMIN, POP, GETMIN", "output": "1 1 1", "explanation": "All pushes. Min stays 1 until key 1 is popped. But key 1 is at bottom, so min stays 1 throughout these pops."}],
    testCases: [{"input": "8\nPUSH 1\nPUSH 3\nPUSH 5\nGETMIN\nPOP\nGETMIN\nPOP\nGETMIN", "expectedOutput": "1 1 1", "hidden": false}, {"input": "7\nPUSH 2\nPUSH 4\nPUSH 6\nPUSH 8\nGETMIN\nPOP\nGETMIN", "expectedOutput": "2 2", "hidden": false}],
    starterCode: {
      python: `class MinStack:
    def __init__(self):
        pass
    def push(self, val: int) -> None:
        pass
    def pop(self) -> None:
        pass
    def top(self) -> int:
        return 0
    def getMin(self) -> int:
        return 0

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
#include <string>
#include <vector>
using namespace std;
class MinStack {
public:
    void push(int val) {}
    void pop() {}
    int top() { return 0; }
    int getMin() { return 0; }
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
    public void push(int val) {}
    public void pop() {}
    public int top() { return 0; }
    public int getMin() { return 0; }
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
void push(int val) {}
void pop() {}
int top() { return 0; }
int getMin() { return 0; }
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
  },
  {
    id: "ms-m5",
    title: "Min Stack - Interleaved Push Pop",
    difficulty: "Medium",
    description: "Implement a Min Stack with interleaved PUSH and POP operations. After each POP, verify GETMIN reflects the updated minimum correctly.",
    constraints: ["-10^5 <= val <= 10^5", "1 <= q <= 2000"],
    examples: [{"input": "PUSH 5, PUSH 2, GETMIN, POP, PUSH 1, GETMIN, POP, GETMIN", "output": "2 1 5", "explanation": "Push 5 (min=5), push 2 (min=2). GETMIN=2. Pop 2. Push 1 (min=1). GETMIN=1. Pop 1. GETMIN=5."}],
    testCases: [{"input": "8\nPUSH 5\nPUSH 2\nGETMIN\nPOP\nPUSH 1\nGETMIN\nPOP\nGETMIN", "expectedOutput": "2 1 5", "hidden": false}, {"input": "7\nPUSH 10\nPUSH 3\nPOP\nGETMIN\nPUSH 7\nGETMIN\nTOP", "expectedOutput": "10 7 7", "hidden": false}],
    starterCode: {
      python: `class MinStack:
    def __init__(self):
        pass
    def push(self, val: int) -> None:
        pass
    def pop(self) -> None:
        pass
    def top(self) -> int:
        return 0
    def getMin(self) -> int:
        return 0

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
#include <string>
#include <vector>
using namespace std;
class MinStack {
public:
    void push(int val) {}
    void pop() {}
    int top() { return 0; }
    int getMin() { return 0; }
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
    public void push(int val) {}
    public void pop() {}
    public int top() { return 0; }
    public int getMin() { return 0; }
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
void push(int val) {}
void pop() {}
int top() { return 0; }
int getMin() { return 0; }
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
  },
  {
    id: "ms-h1",
    title: "Min Stack - Large Sequence",
    difficulty: "Hard",
    description: "Implement a Min Stack handling a large sequence of mixed PUSH, POP, TOP, and GETMIN operations. Verify correctness throughout.",
    constraints: ["-10^5 <= val <= 10^5", "1 <= q <= 2000"],
    examples: [{"input": "Complex mixed operations", "output": "correct results", "explanation": "Full mix of push/pop/getMin."}],
    testCases: [{"input": "10\nPUSH 5\nPUSH 2\nPUSH 8\nGETMIN\nPOP\nGETMIN\nPUSH 1\nGETMIN\nPOP\nGETMIN", "expectedOutput": "2 2 1 2", "hidden": false}, {"input": "8\nPUSH 3\nPUSH 1\nPUSH 4\nPUSH 1\nGETMIN\nPOP\nGETMIN\nPOP", "expectedOutput": "1 1", "hidden": false}],
    starterCode: {
      python: `class MinStack:
    def __init__(self):
        pass
    def push(self, val: int) -> None:
        pass
    def pop(self) -> None:
        pass
    def top(self) -> int:
        return 0
    def getMin(self) -> int:
        return 0

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
#include <string>
#include <vector>
using namespace std;
class MinStack {
public:
    void push(int val) {}
    void pop() {}
    int top() { return 0; }
    int getMin() { return 0; }
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
    public void push(int val) {}
    public void pop() {}
    public int top() { return 0; }
    public int getMin() { return 0; }
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
void push(int val) {}
void pop() {}
int top() { return 0; }
int getMin() { return 0; }
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
  },
  {
    id: "ms-h2",
    title: "Min Stack - Negative Values",
    difficulty: "Hard",
    description: "Implement a Min Stack correctly handling negative values. Verify that getMin works with negative integers.",
    constraints: ["-10^5 <= val <= 10^5", "1 <= q <= 2000"],
    examples: [{"input": "PUSH -5, PUSH -3, GETMIN, POP, GETMIN", "output": "-5 -5", "explanation": "Min of {-5,-3} is -5. After pop (-3), min is still -5."}],
    testCases: [{"input": "5\nPUSH -5\nPUSH -3\nGETMIN\nPOP\nGETMIN", "expectedOutput": "-5 -5", "hidden": false}, {"input": "6\nPUSH -1\nPUSH -2\nPUSH -3\nGETMIN\nPOP\nGETMIN", "expectedOutput": "-3 -2", "hidden": false}],
    starterCode: {
      python: `class MinStack:
    def __init__(self):
        pass
    def push(self, val: int) -> None:
        pass
    def pop(self) -> None:
        pass
    def top(self) -> int:
        return 0
    def getMin(self) -> int:
        return 0

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
#include <string>
#include <vector>
using namespace std;
class MinStack {
public:
    void push(int val) {}
    void pop() {}
    int top() { return 0; }
    int getMin() { return 0; }
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
    public void push(int val) {}
    public void pop() {}
    public int top() { return 0; }
    public int getMin() { return 0; }
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
void push(int val) {}
void pop() {}
int top() { return 0; }
int getMin() { return 0; }
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
  },
  {
    id: "ms-h3",
    title: "Min Stack - All Same Elements",
    difficulty: "Hard",
    description: "Implement a Min Stack where all pushed elements are equal. Verify getMin correctly handles duplicates.",
    constraints: ["-10^5 <= val <= 10^5", "1 <= q <= 2000"],
    examples: [{"input": "PUSH 5, PUSH 5, PUSH 5, GETMIN, POP, GETMIN", "output": "5 5", "explanation": "All elements are 5. Min stays 5 after pop."}],
    testCases: [{"input": "6\nPUSH 5\nPUSH 5\nPUSH 5\nGETMIN\nPOP\nGETMIN", "expectedOutput": "5 5", "hidden": false}, {"input": "7\nPUSH 3\nPUSH 3\nPUSH 3\nPUSH 3\nGETMIN\nPOP\nGETMIN", "expectedOutput": "3 3", "hidden": false}],
    starterCode: {
      python: `class MinStack:
    def __init__(self):
        pass
    def push(self, val: int) -> None:
        pass
    def pop(self) -> None:
        pass
    def top(self) -> int:
        return 0
    def getMin(self) -> int:
        return 0

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
#include <string>
#include <vector>
using namespace std;
class MinStack {
public:
    void push(int val) {}
    void pop() {}
    int top() { return 0; }
    int getMin() { return 0; }
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
    public void push(int val) {}
    public void pop() {}
    public int top() { return 0; }
    public int getMin() { return 0; }
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
void push(int val) {}
void pop() {}
int top() { return 0; }
int getMin() { return 0; }
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
  },
  {
    id: "ms-h4",
    title: "Min Stack - Single Element",
    difficulty: "Hard",
    description: "Implement a Min Stack that handles single-element scenarios: push one element, getMin, top, pop, and ensure the stack behaves correctly.",
    constraints: ["-10^5 <= val <= 10^5", "1 <= q <= 2000"],
    examples: [{"input": "PUSH 42, TOP, GETMIN", "output": "42 42", "explanation": "Single element: top and min are both 42."}],
    testCases: [{"input": "3\nPUSH 42\nTOP\nGETMIN", "expectedOutput": "42 42", "hidden": false}, {"input": "5\nPUSH -100\nGETMIN\nTOP\nPOP\nPUSH 999", "expectedOutput": "-100 -100", "hidden": false}],
    starterCode: {
      python: `class MinStack:
    def __init__(self):
        pass
    def push(self, val: int) -> None:
        pass
    def pop(self) -> None:
        pass
    def top(self) -> int:
        return 0
    def getMin(self) -> int:
        return 0

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
#include <string>
#include <vector>
using namespace std;
class MinStack {
public:
    void push(int val) {}
    void pop() {}
    int top() { return 0; }
    int getMin() { return 0; }
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
    public void push(int val) {}
    public void pop() {}
    public int top() { return 0; }
    public int getMin() { return 0; }
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
void push(int val) {}
void pop() {}
int top() { return 0; }
int getMin() { return 0; }
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
  },
  {
    id: "ms-h5",
    title: "Min Stack - Alternating Min Updates",
    difficulty: "Hard",
    description: "Implement a Min Stack where each push alternates between setting a new min and not. Verify getMin remains correct throughout all operations.",
    constraints: ["-10^5 <= val <= 10^5", "1 <= q <= 2000"],
    examples: [{"input": "PUSH 5, PUSH 3, PUSH 6, PUSH 2, PUSH 7, PUSH 1, GETMIN, POP, GETMIN, POP, GETMIN", "output": "1 2 2", "explanation": "Push 1 sets min=1. Pop 1, min=2. Pop 2, min=2."}],
    testCases: [{"input": "11\nPUSH 5\nPUSH 3\nPUSH 6\nPUSH 2\nPUSH 7\nPUSH 1\nGETMIN\nPOP\nGETMIN\nPOP\nGETMIN", "expectedOutput": "1 2 2", "hidden": false}, {"input": "9\nPUSH 10\nPUSH 4\nPUSH 8\nPUSH 2\nPUSH 6\nGETMIN\nPOP\nGETMIN\nPOP", "expectedOutput": "2 2", "hidden": false}],
    starterCode: {
      python: `class MinStack:
    def __init__(self):
        pass
    def push(self, val: int) -> None:
        pass
    def pop(self) -> None:
        pass
    def top(self) -> int:
        return 0
    def getMin(self) -> int:
        return 0

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
#include <string>
#include <vector>
using namespace std;
class MinStack {
public:
    void push(int val) {}
    void pop() {}
    int top() { return 0; }
    int getMin() { return 0; }
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
    public void push(int val) {}
    public void pop() {}
    public int top() { return 0; }
    public int getMin() { return 0; }
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
void push(int val) {}
void pop() {}
int top() { return 0; }
int getMin() { return 0; }
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
  }
];
