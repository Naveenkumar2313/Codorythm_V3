export const minStackCodeSnippets = {
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
        if top == self.min_stack[-1]:
            self.min_stack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.min_stack[-1]`,

  cpp: `#include <iostream>
#include <stack>
using namespace std;

class MinStack {
    stack<int> stk, min_stk;
public:
    void push(int val) {
        stk.push(val);
        if (min_stk.empty() || val <= min_stk.top())
            min_stk.push(val);
    }
    void pop() {
        if (stk.top() == min_stk.top()) min_stk.pop();
        stk.pop();
    }
    int top() { return stk.top(); }
    int getMin() { return min_stk.top(); }
};`,

  java: `import java.util.Stack;

class MinStack {
    private Stack<Integer> stack = new Stack<>();
    private Stack<Integer> minStack = new Stack<>();

    public void push(int val) {
        stack.push(val);
        if (minStack.isEmpty() || val <= minStack.peek())
            minStack.push(val);
    }
    public void pop() {
        if (stack.peek().equals(minStack.peek())) minStack.pop();
        stack.pop();
    }
    public int top() { return stack.peek(); }
    public int getMin() { return minStack.peek(); }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>
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
int getMin() { return minStk[minTop]; }`
};
