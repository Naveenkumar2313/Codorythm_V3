export const nextGreaterElementCodeSnippets = {
  python: `def next_greater_elements(nums):
    result = [-1] * len(nums)
    stack = []

    for i in range(len(nums) - 1, -1, -1):
        while stack and stack[-1] <= nums[i]:
            stack.pop()

        if stack:
            result[i] = stack[-1]

        stack.append(nums[i])

    return result


nums = [2, 1, 3, 2, 5]
print(next_greater_elements(nums))
`,

  java: `import java.util.Arrays;
import java.util.Stack;

public class NextGreaterElement {

    public static int[] nextGreaterElements(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];
        Arrays.fill(result, -1);

        Stack<Integer> stack = new Stack<>();

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && stack.peek() <= nums[i]) {
                stack.pop();
            }

            if (!stack.isEmpty()) {
                result[i] = stack.peek();
            }

            stack.push(nums[i]);
        }

        return result;
    }

    public static void main(String[] args) {
        int[] nums = {2, 1, 3, 2, 5};
        System.out.println(Arrays.toString(nextGreaterElements(nums)));
    }
}
`,

  c: `#include <stdio.h>

void nextGreaterElements(int nums[], int n, int result[]) {
    int stack[n];
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && stack[top] <= nums[i]) {
            top--;
        }

        result[i] = (top == -1) ? -1 : stack[top];
        stack[++top] = nums[i];
    }
}

int main() {
    int nums[] = {2, 1, 3, 2, 5};
    int n = sizeof(nums) / sizeof(nums[0]);
    int result[n];

    nextGreaterElements(nums, n, result);

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

vector<int> nextGreaterElements(vector<int>& nums) {
    int n = nums.size();
    vector<int> result(n, -1);
    stack<int> candidates;

    for (int i = n - 1; i >= 0; i--) {
        while (!candidates.empty() && candidates.top() <= nums[i]) {
            candidates.pop();
        }

        if (!candidates.empty()) {
            result[i] = candidates.top();
        }

        candidates.push(nums[i]);
    }

    return result;
}

int main() {
    vector<int> nums = {2, 1, 3, 2, 5};
    vector<int> result = nextGreaterElements(nums);

    for (int value : result) {
        cout << value << " ";
    }

    return 0;
}
`
};
