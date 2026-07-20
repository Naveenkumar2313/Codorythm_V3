export const dailyTemperaturesCodeSnippets = {
  python: `def daily_temperatures(temperatures):
    result = [0] * len(temperatures)
    stack = []

    for i in range(len(temperatures) - 1, -1, -1):
        while stack and temperatures[stack[-1]] <= temperatures[i]:
            stack.pop()

        if stack:
            result[i] = stack[-1] - i

        stack.append(i)

    return result


temperatures = [73, 74, 75, 71, 69, 72, 76, 73]
print(daily_temperatures(temperatures))
`,

  java: `import java.util.Arrays;
import java.util.ArrayDeque;
import java.util.Deque;

public class DailyTemperatures {

    public static int[] dailyTemperatures(int[] temperatures) {
        int n = temperatures.length;
        int[] result = new int[n];
        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && temperatures[stack.peek()] <= temperatures[i]) {
                stack.pop();
            }

            if (!stack.isEmpty()) {
                result[i] = stack.peek() - i;
            }

            stack.push(i);
        }

        return result;
    }

    public static void main(String[] args) {
        int[] temperatures = {73, 74, 75, 71, 69, 72, 76, 73};
        System.out.println(Arrays.toString(dailyTemperatures(temperatures)));
    }
}
`,

  c: `#include <stdio.h>

void dailyTemperatures(int temperatures[], int n, int result[]) {
    int stack[n];
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && temperatures[stack[top]] <= temperatures[i]) {
            top--;
        }

        result[i] = (top == -1) ? 0 : stack[top] - i;
        stack[++top] = i;
    }
}

int main() {
    int temperatures[] = {73, 74, 75, 71, 69, 72, 76, 73};
    int n = sizeof(temperatures) / sizeof(temperatures[0]);
    int result[n];

    dailyTemperatures(temperatures, n, result);

    for (int i = 0; i < n; i++) {
        printf("%d ", result[i]);
    }

    return 0;
}
`,

  cpp: `#include <iostream>
#include <vector>
#include <stack>

using namespace std;

vector<int> dailyTemperatures(vector<int>& temperatures) {
    int n = temperatures.size();
    vector<int> result(n, 0);
    stack<int> indices;

    for (int i = n - 1; i >= 0; i--) {
        while (!indices.empty() && temperatures[indices.top()] <= temperatures[i]) {
            indices.pop();
        }

        if (!indices.empty()) {
            result[i] = indices.top() - i;
        }

        indices.push(i);
    }

    return result;
}

int main() {
    vector<int> temperatures = {73, 74, 75, 71, 69, 72, 76, 73};
    vector<int> result = dailyTemperatures(temperatures);

    for (int days : result) {
        cout << days << " ";
    }

    return 0;
}
`
};
