export const largestRectangleInHistogramCodeSnippets = {
    python: `def largest_rectangle_area(heights):
    n = len(heights)
    stack = []
    max_area = 0

    for i in range(n):
        while stack and heights[stack[-1]] > heights[i]:
            height = heights[stack.pop()]
            left = stack[-1] if stack else -1
            width = i - left - 1
            max_area = max(max_area, height * width)
        stack.append(i)

    while stack:
        height = heights[stack.pop()]
        left = stack[-1] if stack else -1
        width = n - left - 1
        max_area = max(max_area, height * width)

    return max_area

heights = [2, 1, 5, 6, 2, 3]
print(largest_rectangle_area(heights))`,

    java: `import java.util.*;

public class LargestRectangleInHistogram {
    public static int largestRectangleArea(int[] heights) {
        int n = heights.length;
        Stack<Integer> stack = new Stack<>();
        int maxArea = 0;

        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && heights[stack.peek()] > heights[i]) {
                int height = heights[stack.pop()];
                int left = stack.isEmpty() ? -1 : stack.peek();
                int width = i - left - 1;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(i);
        }

        while (!stack.isEmpty()) {
            int height = heights[stack.pop()];
            int left = stack.isEmpty() ? -1 : stack.peek();
            int width = n - left - 1;
            maxArea = Math.max(maxArea, height * width);
        }

        return maxArea;
    }

    public static void main(String[] args) {
        int[] heights = {2, 1, 5, 6, 2, 3};
        System.out.println(largestRectangleArea(heights));
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>

int largestRectangleArea(int heights[], int n) {
    int stack[n];
    int top = -1;
    int maxArea = 0;

    for (int i = 0; i < n; i++) {
        while (top >= 0 && heights[stack[top]] > heights[i]) {
            int height = heights[stack[top--]];
            int left = (top == -1) ? -1 : stack[top];
            int width = i - left - 1;
            if (height * width > maxArea) maxArea = height * width;
        }
        stack[++top] = i;
    }

    while (top >= 0) {
        int height = heights[stack[top--]];
        int left = (top == -1) ? -1 : stack[top];
        int width = n - left - 1;
        if (height * width > maxArea) maxArea = height * width;
    }

    return maxArea;
}

int main() {
    int heights[] = {2, 1, 5, 6, 2, 3};
    int n = sizeof(heights) / sizeof(heights[0]);
    printf("%d\\n", largestRectangleArea(heights, n));
    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>
#include <stack>

using namespace std;

int largestRectangleArea(vector<int>& heights) {
    int n = heights.size();
    stack<int> indices;
    int maxArea = 0;

    for (int i = 0; i < n; i++) {
        while (!indices.empty() && heights[indices.top()] > heights[i]) {
            int height = heights[indices.top()];
            indices.pop();
            int left = indices.empty() ? -1 : indices.top();
            int width = i - left - 1;
            maxArea = max(maxArea, height * width);
        }
        indices.push(i);
    }

    while (!indices.empty()) {
        int height = heights[indices.top()];
        indices.pop();
        int left = indices.empty() ? -1 : indices.top();
        int width = n - left - 1;
        maxArea = max(maxArea, height * width);
    }

    return maxArea;
}

int main() {
    vector<int> heights = {2, 1, 5, 6, 2, 3};
    cout << largestRectangleArea(heights) << endl;
    return 0;
}`
};