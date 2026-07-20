export const largestRectangleInHistogramSolutions = {
  "largest-rectangle-in-histogram-e1": {
    python: `def largest_skyline_area(heights):
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

    return max_area`,

    java: `import java.util.*;

class Solution {
    public int largestSkylineArea(int[] heights) {
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
}`,

    c: `#include <stdio.h>

int largestSkylineArea(int heights[], int n) {
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
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    int largestSkylineArea(vector<int>& heights) {
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
};`
  },
  "largest-rectangle-in-histogram-e2": {
    python: `def max_storage_area(units):
    n = len(units)
    stack = []
    max_area = 0

    for i in range(n):
        while stack and units[stack[-1]] > units[i]:
            height = units[stack.pop()]
            left = stack[-1] if stack else -1
            width = i - left - 1
            max_area = max(max_area, height * width)
        stack.append(i)

    while stack:
        height = units[stack.pop()]
        left = stack[-1] if stack else -1
        width = n - left - 1
        max_area = max(max_area, height * width)

    return max_area`,

    java: `import java.util.*;

class Solution {
    public int maxStorageArea(int[] units) {
        int n = units.length;
        Stack<Integer> stack = new Stack<>();
        int maxArea = 0;

        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && units[stack.peek()] > units[i]) {
                int height = units[stack.pop()];
                int left = stack.isEmpty() ? -1 : stack.peek();
                int width = i - left - 1;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(i);
        }

        while (!stack.isEmpty()) {
            int height = units[stack.pop()];
            int left = stack.isEmpty() ? -1 : stack.peek();
            int width = n - left - 1;
            maxArea = Math.max(maxArea, height * width);
        }

        return maxArea;
    }
}`,

    c: `#include <stdio.h>

int maxStorageArea(int units[], int n) {
    int stack[n];
    int top = -1;
    int maxArea = 0;

    for (int i = 0; i < n; i++) {
        while (top >= 0 && units[stack[top]] > units[i]) {
            int height = units[stack[top--]];
            int left = (top == -1) ? -1 : stack[top];
            int width = i - left - 1;
            if (height * width > maxArea) maxArea = height * width;
        }
        stack[++top] = i;
    }

    while (top >= 0) {
        int height = units[stack[top--]];
        int left = (top == -1) ? -1 : stack[top];
        int width = n - left - 1;
        if (height * width > maxArea) maxArea = height * width;
    }

    return maxArea;
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    int maxStorageArea(vector<int>& units) {
        int n = units.size();
        stack<int> indices;
        int maxArea = 0;

        for (int i = 0; i < n; i++) {
            while (!indices.empty() && units[indices.top()] > units[i]) {
                int height = units[indices.top()];
                indices.pop();
                int left = indices.empty() ? -1 : indices.top();
                int width = i - left - 1;
                maxArea = max(maxArea, height * width);
            }
            indices.push(i);
        }

        while (!indices.empty()) {
            int height = units[indices.top()];
            indices.pop();
            int left = indices.empty() ? -1 : indices.top();
            int width = n - left - 1;
            maxArea = max(maxArea, height * width);
        }

        return maxArea;
    }
};`
  },
  "largest-rectangle-in-histogram-e3": {
    python: `def max_facade_area(heights):
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

    return max_area`,

    java: `import java.util.*;

class Solution {
    public int maxFacadeArea(int[] heights) {
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
}`,

    c: `#include <stdio.h>

int maxFacadeArea(int heights[], int n) {
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
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    int maxFacadeArea(vector<int>& heights) {
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
};`
  },
  "largest-rectangle-in-histogram-e4": {
    python: `def max_garden_area(soil):
    n = len(soil)
    stack = []
    max_area = 0

    for i in range(n):
        while stack and soil[stack[-1]] > soil[i]:
            height = soil[stack.pop()]
            left = stack[-1] if stack else -1
            width = i - left - 1
            max_area = max(max_area, height * width)
        stack.append(i)

    while stack:
        height = soil[stack.pop()]
        left = stack[-1] if stack else -1
        width = n - left - 1
        max_area = max(max_area, height * width)

    return max_area`,

    java: `import java.util.*;

class Solution {
    public int maxGardenArea(int[] soil) {
        int n = soil.length;
        Stack<Integer> stack = new Stack<>();
        int maxArea = 0;

        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && soil[stack.peek()] > soil[i]) {
                int height = soil[stack.pop()];
                int left = stack.isEmpty() ? -1 : stack.peek();
                int width = i - left - 1;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(i);
        }

        while (!stack.isEmpty()) {
            int height = soil[stack.pop()];
            int left = stack.isEmpty() ? -1 : stack.peek();
            int width = n - left - 1;
            maxArea = Math.max(maxArea, height * width);
        }

        return maxArea;
    }
}`,

    c: `#include <stdio.h>

int maxGardenArea(int soil[], int n) {
    int stack[n];
    int top = -1;
    int maxArea = 0;

    for (int i = 0; i < n; i++) {
        while (top >= 0 && soil[stack[top]] > soil[i]) {
            int height = soil[stack[top--]];
            int left = (top == -1) ? -1 : stack[top];
            int width = i - left - 1;
            if (height * width > maxArea) maxArea = height * width;
        }
        stack[++top] = i;
    }

    while (top >= 0) {
        int height = soil[stack[top--]];
        int left = (top == -1) ? -1 : stack[top];
        int width = n - left - 1;
        if (height * width > maxArea) maxArea = height * width;
    }

    return maxArea;
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    int maxGardenArea(vector<int>& soil) {
        int n = soil.size();
        stack<int> indices;
        int maxArea = 0;

        for (int i = 0; i < n; i++) {
            while (!indices.empty() && soil[indices.top()] > soil[i]) {
                int height = soil[indices.top()];
                indices.pop();
                int left = indices.empty() ? -1 : indices.top();
                int width = i - left - 1;
                maxArea = max(maxArea, height * width);
            }
            indices.push(i);
        }

        while (!indices.empty()) {
            int height = soil[indices.top()];
            indices.pop();
            int left = indices.empty() ? -1 : indices.top();
            int width = n - left - 1;
            maxArea = max(maxArea, height * width);
        }

        return maxArea;
    }
};`
  },
  "largest-rectangle-in-histogram-e5": {
    python: `def max_container_area(containers):
    n = len(containers)
    stack = []
    max_area = 0

    for i in range(n):
        while stack and containers[stack[-1]] > containers[i]:
            height = containers[stack.pop()]
            left = stack[-1] if stack else -1
            width = i - left - 1
            max_area = max(max_area, height * width)
        stack.append(i)

    while stack:
        height = containers[stack.pop()]
        left = stack[-1] if stack else -1
        width = n - left - 1
        max_area = max(max_area, height * width)

    return max_area`,

    java: `import java.util.*;

class Solution {
    public int maxContainerArea(int[] containers) {
        int n = containers.length;
        Stack<Integer> stack = new Stack<>();
        int maxArea = 0;

        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && containers[stack.peek()] > containers[i]) {
                int height = containers[stack.pop()];
                int left = stack.isEmpty() ? -1 : stack.peek();
                int width = i - left - 1;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(i);
        }

        while (!stack.isEmpty()) {
            int height = containers[stack.pop()];
            int left = stack.isEmpty() ? -1 : stack.peek();
            int width = n - left - 1;
            maxArea = Math.max(maxArea, height * width);
        }

        return maxArea;
    }
}`,

    c: `#include <stdio.h>

int maxContainerArea(int containers[], int n) {
    int stack[n];
    int top = -1;
    int maxArea = 0;

    for (int i = 0; i < n; i++) {
        while (top >= 0 && containers[stack[top]] > containers[i]) {
            int height = containers[stack[top--]];
            int left = (top == -1) ? -1 : stack[top];
            int width = i - left - 1;
            if (height * width > maxArea) maxArea = height * width;
        }
        stack[++top] = i;
    }

    while (top >= 0) {
        int height = containers[stack[top--]];
        int left = (top == -1) ? -1 : stack[top];
        int width = n - left - 1;
        if (height * width > maxArea) maxArea = height * width;
    }

    return maxArea;
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    int maxContainerArea(vector<int>& containers) {
        int n = containers.size();
        stack<int> indices;
        int maxArea = 0;

        for (int i = 0; i < n; i++) {
            while (!indices.empty() && containers[indices.top()] > containers[i]) {
                int height = containers[indices.top()];
                indices.pop();
                int left = indices.empty() ? -1 : indices.top();
                int width = i - left - 1;
                maxArea = max(maxArea, height * width);
            }
            indices.push(i);
        }

        while (!indices.empty()) {
            int height = containers[indices.top()];
            indices.pop();
            int left = indices.empty() ? -1 : indices.top();
            int width = n - left - 1;
            maxArea = max(maxArea, height * width);
        }

        return maxArea;
    }
};`
  },
  "largest-rectangle-in-histogram-m1": {
    python: `def max_price_range_area(prices):
    n = len(prices)
    stack = []
    max_area = 0

    for i in range(n):
        while stack and prices[stack[-1]] > prices[i]:
            height = prices[stack.pop()]
            left = stack[-1] if stack else -1
            width = i - left - 1
            max_area = max(max_area, height * width)
        stack.append(i)

    while stack:
        height = prices[stack.pop()]
        left = stack[-1] if stack else -1
        width = n - left - 1
        max_area = max(max_area, height * width)

    return max_area`,

    java: `import java.util.*;

class Solution {
    public int maxPriceRangeArea(int[] prices) {
        int n = prices.length;
        Stack<Integer> stack = new Stack<>();
        int maxArea = 0;

        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && prices[stack.peek()] > prices[i]) {
                int height = prices[stack.pop()];
                int left = stack.isEmpty() ? -1 : stack.peek();
                int width = i - left - 1;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(i);
        }

        while (!stack.isEmpty()) {
            int height = prices[stack.pop()];
            int left = stack.isEmpty() ? -1 : stack.peek();
            int width = n - left - 1;
            maxArea = Math.max(maxArea, height * width);
        }

        return maxArea;
    }
}`,

    c: `#include <stdio.h>

int maxPriceRangeArea(int prices[], int n) {
    int stack[n];
    int top = -1;
    int maxArea = 0;

    for (int i = 0; i < n; i++) {
        while (top >= 0 && prices[stack[top]] > prices[i]) {
            int height = prices[stack[top--]];
            int left = (top == -1) ? -1 : stack[top];
            int width = i - left - 1;
            if (height * width > maxArea) maxArea = height * width;
        }
        stack[++top] = i;
    }

    while (top >= 0) {
        int height = prices[stack[top--]];
        int left = (top == -1) ? -1 : stack[top];
        int width = n - left - 1;
        if (height * width > maxArea) maxArea = height * width;
    }

    return maxArea;
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    int maxPriceRangeArea(vector<int>& prices) {
        int n = prices.size();
        stack<int> indices;
        int maxArea = 0;

        for (int i = 0; i < n; i++) {
            while (!indices.empty() && prices[indices.top()] > prices[i]) {
                int height = prices[indices.top()];
                indices.pop();
                int left = indices.empty() ? -1 : indices.top();
                int width = i - left - 1;
                maxArea = max(maxArea, height * width);
            }
            indices.push(i);
        }

        while (!indices.empty()) {
            int height = prices[indices.top()];
            indices.pop();
            int left = indices.empty() ? -1 : indices.top();
            int width = n - left - 1;
            maxArea = max(maxArea, height * width);
        }

        return maxArea;
    }
};`
  },
  "largest-rectangle-in-histogram-m2": {
    python: `def skyline_max_queries(heights, queries):
    n = len(heights)
    stack = []
    max_areas = [0] * n

    for i in range(n - 1, -1, -1):
        while stack and heights[stack[-1]] <= heights[i]:
            stack.pop()
        if stack:
            max_areas[i] = max(heights[i] * (stack[-1] - i), max_areas[stack[-1]] if stack[-1] < n else heights[i] * (n - i))
        else:
            max_areas[i] = heights[i] * n
        stack.append(i)

    return [max_areas[q] for q in queries]`,

    java: `import java.util.*;

class Solution {
    public int[] skylineMaxQueries(int[] heights, int[] queries) {
        int n = heights.length;
        int[] maxAreas = new int[n];
        Stack<Integer> stack = new Stack<>();

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && heights[stack.peek()] <= heights[i]) {
                stack.pop();
            }
            if (stack.isEmpty()) {
                maxAreas[i] = heights[i] * n;
            } else {
                int right = stack.peek();
                int area = heights[i] * (right - i);
                if (right < n) {
                    area = Math.max(area, maxAreas[right]);
                }
                maxAreas[i] = area;
            }
            stack.push(i);
        }

        int[] result = new int[queries.length];
        for (int i = 0; i < queries.length; i++) {
            result[i] = maxAreas[queries[i]];
        }
        return result;
    }
}`,

    c: `#include <stdio.h>

void skylineMaxQueries(int heights[], int n, int queries[], int q, int result[]) {
    int stack[n];
    int top = -1;
    int maxAreas[n];

    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && heights[stack[top]] <= heights[i]) {
            top--;
        }
        if (top == -1) {
            maxAreas[i] = heights[i] * n;
        } else {
            int right = stack[top];
            int area = heights[i] * (right - i);
            if (right < n && maxAreas[right] > area) {
                area = maxAreas[right];
            }
            maxAreas[i] = area;
        }
        stack[++top] = i;
    }

    for (int i = 0; i < q; i++) {
        result[i] = maxAreas[queries[i]];
    }
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    vector<int> skylineMaxQueries(vector<int>& heights, vector<int>& queries) {
        int n = heights.size();
        vector<int> maxAreas(n);
        stack<int> indices;

        for (int i = n - 1; i >= 0; i--) {
            while (!indices.empty() && heights[indices.top()] <= heights[i]) {
                indices.pop();
            }
            if (indices.empty()) {
                maxAreas[i] = heights[i] * n;
            } else {
                int right = indices.top();
                int area = heights[i] * (right - i);
                if (right < n) {
                    area = max(area, maxAreas[right]);
                }
                maxAreas[i] = area;
            }
            indices.push(i);
        }

        vector<int> result;
        for (int q : queries) {
            result.push_back(maxAreas[q]);
        }
        return result;
    }
};`
  },
  "largest-rectangle-in-histogram-m3": {
    python: `def warehouse_section_areas(shelves, sections):
    def max_area(arr, start, end):
        stack = []
        max_a = 0
        for i in range(start, end + 1):
            while stack and arr[stack[-1]] > arr[i]:
                h = arr[stack.pop()]
                l = stack[-1] if stack else start - 1
                w = i - l - 1
                max_a = max(max_a, h * w)
            stack.append(i)
        while stack:
            h = arr[stack.pop()]
            l = stack[-1] if stack else start - 1
            w = end - l
            max_a = max(max_a, h * w)
        return max_a

    return [max_area(shelves, s[0], s[1]) for s in sections]`,

    java: `import java.util.*;

class Solution {
    private int maxAreaInRange(int[] arr, int start, int end) {
        int[] stack = new int[end - start + 1];
        int top = -1;
        int maxArea = 0;

        for (int i = start; i <= end; i++) {
            while (top >= 0 && arr[stack[top]] > arr[i]) {
                int height = arr[stack[top--]];
                int left = (top == -1) ? start - 1 : stack[top];
                int width = i - left - 1;
                maxArea = Math.max(maxArea, height * width);
            }
            stack[++top] = i;
        }

        while (top >= 0) {
            int height = arr[stack[top--]];
            int left = (top == -1) ? start - 1 : stack[top];
            int width = end - left;
            maxArea = Math.max(maxArea, height * width);
        }

        return maxArea;
    }

    public int[] warehouseSectionAreas(int[] shelves, int[][] sections) {
        int[] result = new int[sections.length];
        for (int i = 0; i < sections.length; i++) {
            result[i] = maxAreaInRange(shelves, sections[i][0], sections[i][1]);
        }
        return result;
    }
}`,

    c: `#include <stdio.h>

int maxAreaInRange(int arr[], int start, int end) {
    int stack[10000];
    int top = -1;
    int maxArea = 0;

    for (int i = start; i <= end; i++) {
        while (top >= 0 && arr[stack[top]] > arr[i]) {
            int height = arr[stack[top--]];
            int left = (top == -1) ? start - 1 : stack[top];
            int width = i - left - 1;
            if (height * width > maxArea) maxArea = height * width;
        }
        stack[++top] = i;
    }

    while (top >= 0) {
        int height = arr[stack[top--]];
        int left = (top == -1) ? start - 1 : stack[top];
        int width = end - left;
        if (height * width > maxArea) maxArea = height * width;
    }

    return maxArea;
}

void warehouseSectionAreas(int shelves[], int n, int sections[][2], int s, int result[]) {
    for (int i = 0; i < s; i++) {
        result[i] = maxAreaInRange(shelves, sections[i][0], sections[i][1]);
    }
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    int maxAreaInRange(vector<int>& arr, int start, int end) {
        stack<int> indices;
        int maxArea = 0;

        for (int i = start; i <= end; i++) {
            while (!indices.empty() && arr[indices.top()] > arr[i]) {
                int height = arr[indices.top()];
                indices.pop();
                int left = indices.empty() ? start - 1 : indices.top();
                int width = i - left - 1;
                maxArea = max(maxArea, height * width);
            }
            indices.push(i);
        }

        while (!indices.empty()) {
            int height = arr[indices.top()];
            indices.pop();
            int left = indices.empty() ? start - 1 : indices.top();
            int width = end - left;
            maxArea = max(maxArea, height * width);
        }

        return maxArea;
    }

    vector<int> warehouseSectionAreas(vector<int>& shelves, vector<vector<int>>& sections) {
        vector<int> result;
        for (auto& sec : sections) {
            result.push_back(maxAreaInRange(shelves, sec[0], sec[1]));
        }
        return result;
    }
};`
  },
  "largest-rectangle-in-histogram-m4": {
    python: `def max_rectangle_details(heights):
    n = len(heights)
    stack = []
    max_area = 0
    best_height = 0
    best_width = 0

    for i in range(n):
        while stack and heights[stack[-1]] > heights[i]:
            h = heights[stack.pop()]
            left = stack[-1] if stack else -1
            w = i - left - 1
            if h * w > max_area:
                max_area = h * w
                best_height = h
                best_width = w
        stack.append(i)

    while stack:
        h = heights[stack.pop()]
        left = stack[-1] if stack else -1
        w = n - left - 1
        if h * w > max_area:
            max_area = h * w
            best_height = h
            best_width = w

    return [max_area, best_height, best_width]`,

    java: `import java.util.*;

class Solution {
    public int[] maxRectangleDetails(int[] heights) {
        int n = heights.length;
        Stack<Integer> stack = new Stack<>();
        int maxArea = 0;
        int bestHeight = 0;
        int bestWidth = 0;

        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && heights[stack.peek()] > heights[i]) {
                int h = heights[stack.pop()];
                int left = stack.isEmpty() ? -1 : stack.peek();
                int w = i - left - 1;
                if (h * w > maxArea) {
                    maxArea = h * w;
                    bestHeight = h;
                    bestWidth = w;
                }
            }
            stack.push(i);
        }

        while (!stack.isEmpty()) {
            int h = heights[stack.pop()];
            int left = stack.isEmpty() ? -1 : stack.peek();
            int w = n - left - 1;
            if (h * w > maxArea) {
                maxArea = h * w;
                bestHeight = h;
                bestWidth = w;
            }
        }

        return new int[]{maxArea, bestHeight, bestWidth};
    }
}`,

    c: `#include <stdio.h>

void maxRectangleDetails(int heights[], int n, int result[]) {
    int stack[n];
    int top = -1;
    int maxArea = 0;
    int bestHeight = 0;
    int bestWidth = 0;

    for (int i = 0; i < n; i++) {
        while (top >= 0 && heights[stack[top]] > heights[i]) {
            int h = heights[stack[top--]];
            int left = (top == -1) ? -1 : stack[top];
            int w = i - left - 1;
            if (h * w > maxArea) {
                maxArea = h * w;
                bestHeight = h;
                bestWidth = w;
            }
        }
        stack[++top] = i;
    }

    while (top >= 0) {
        int h = heights[stack[top--]];
        int left = (top == -1) ? -1 : stack[top];
        int w = n - left - 1;
        if (h * w > maxArea) {
            maxArea = h * w;
            bestHeight = h;
            bestWidth = w;
        }
    }

    result[0] = maxArea;
    result[1] = bestHeight;
    result[2] = bestWidth;
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    vector<int> maxRectangleDetails(vector<int>& heights) {
        int n = heights.size();
        stack<int> indices;
        int maxArea = 0;
        int bestHeight = 0;
        int bestWidth = 0;

        for (int i = 0; i < n; i++) {
            while (!indices.empty() && heights[indices.top()] > heights[i]) {
                int h = heights[indices.top()];
                indices.pop();
                int left = indices.empty() ? -1 : indices.top();
                int w = i - left - 1;
                if (h * w > maxArea) {
                    maxArea = h * w;
                    bestHeight = h;
                    bestWidth = w;
                }
            }
            indices.push(i);
        }

        while (!indices.empty()) {
            int h = heights[indices.top()];
            indices.pop();
            int left = indices.empty() ? -1 : indices.top();
            int w = n - left - 1;
            if (h * w > maxArea) {
                maxArea = h * w;
                bestHeight = h;
                bestWidth = w;
            }
        }

        return {maxArea, bestHeight, bestWidth};
    }
};`
  },
  "largest-rectangle-in-histogram-m5": {
    python: `def garden_leveling_cost(soil, rate):
    n = len(soil)
    stack = []
    max_area = 0

    for i in range(n):
        while stack and soil[stack[-1]] > soil[i]:
            h = soil[stack.pop()]
            left = stack[-1] if stack else -1
            w = i - left - 1
            max_area = max(max_area, h * w)
        stack.append(i)

    while stack:
        h = soil[stack.pop()]
        left = stack[-1] if stack else -1
        w = n - left - 1
        max_area = max(max_area, h * w)

    return max_area * rate`,

    java: `import java.util.*;

class Solution {
    public int gardenLevelingCost(int[] soil, int rate) {
        int n = soil.length;
        Stack<Integer> stack = new Stack<>();
        int maxArea = 0;

        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && soil[stack.peek()] > soil[i]) {
                int h = soil[stack.pop()];
                int left = stack.isEmpty() ? -1 : stack.peek();
                int w = i - left - 1;
                maxArea = Math.max(maxArea, h * w);
            }
            stack.push(i);
        }

        while (!stack.isEmpty()) {
            int h = soil[stack.pop()];
            int left = stack.isEmpty() ? -1 : stack.peek();
            int w = n - left - 1;
            maxArea = Math.max(maxArea, h * w);
        }

        return maxArea * rate;
    }
}`,

    c: `#include <stdio.h>

int gardenLevelingCost(int soil[], int n, int rate) {
    int stack[n];
    int top = -1;
    int maxArea = 0;

    for (int i = 0; i < n; i++) {
        while (top >= 0 && soil[stack[top]] > soil[i]) {
            int h = soil[stack[top--]];
            int left = (top == -1) ? -1 : stack[top];
            int w = i - left - 1;
            if (h * w > maxArea) maxArea = h * w;
        }
        stack[++top] = i;
    }

    while (top >= 0) {
        int h = soil[stack[top--]];
        int left = (top == -1) ? -1 : stack[top];
        int w = n - left - 1;
        if (h * w > maxArea) maxArea = h * w;
    }

    return maxArea * rate;
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    int gardenLevelingCost(vector<int>& soil, int rate) {
        int n = soil.size();
        stack<int> indices;
        int maxArea = 0;

        for (int i = 0; i < n; i++) {
            while (!indices.empty() && soil[indices.top()] > soil[i]) {
                int h = soil[indices.top()];
                indices.pop();
                int left = indices.empty() ? -1 : indices.top();
                int w = i - left - 1;
                maxArea = max(maxArea, h * w);
            }
            indices.push(i);
        }

        while (!indices.empty()) {
            int h = soil[indices.top()];
            indices.pop();
            int left = indices.empty() ? -1 : indices.top();
            int w = n - left - 1;
            maxArea = max(maxArea, h * w);
        }

        return maxArea * rate;
    }
};`
  },
  "largest-rectangle-in-histogram-h1": {
    python: `def circular_storage_area(units):
    n = len(units)
    stack = []
    max_area = 0

    for i in range(2 * n - 1, -1, -1):
        idx = i % n
        while stack and units[stack[-1] % n] >= units[idx]:
            stack.pop()
        if i < n and stack:
            left = stack[-1] if stack[-1] > idx else -1
            w = (stack[-1] - idx + n) % n
            if stack[-1] > idx:
                w = stack[-1] - idx
            else:
                w = n - idx + stack[-1]
            max_area = max(max_area, units[idx] * w)
        stack.append(i)

    return max_area`,

    java: `import java.util.*;

class Solution {
    public int circularStorageArea(int[] units) {
        int n = units.length;
        Stack<Integer> stack = new Stack<>();
        int maxArea = 0;

        for (int i = 2 * n - 1; i >= 0; i--) {
            int idx = i % n;
            while (!stack.isEmpty() && units[stack.peek() % n] >= units[idx]) {
                stack.pop();
            }
            if (i < n && !stack.isEmpty()) {
                int right = stack.peek();
                int width = (right > idx) ? right - idx : n - idx + right;
                maxArea = Math.max(maxArea, units[idx] * width);
            }
            stack.push(i);
        }

        return maxArea;
    }
}`,

    c: `#include <stdio.h>

int circularStorageArea(int units[], int n) {
    int stack[20000];
    int top = -1;
    int maxArea = 0;

    for (int i = 2 * n - 1; i >= 0; i--) {
        int idx = i % n;
        while (top >= 0 && units[stack[top] % n] >= units[idx]) {
            top--;
        }
        if (i < n && top >= 0) {
            int right = stack[top];
            int width = (right > idx) ? right - idx : n - idx + right;
            if (units[idx] * width > maxArea) maxArea = units[idx] * width;
        }
        stack[++top] = i;
    }

    return maxArea;
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    int circularStorageArea(vector<int>& units) {
        int n = units.size();
        stack<int> indices;
        int maxArea = 0;

        for (int i = 2 * n - 1; i >= 0; i--) {
            int idx = i % n;
            while (!indices.empty() && units[indices.top() % n] >= units[idx]) {
                indices.pop();
            }
            if (i < n && !indices.empty()) {
                int right = indices.top();
                int width = (right > idx) ? right - idx : n - idx + right;
                maxArea = max(maxArea, units[idx] * width);
            }
            indices.push(i);
        }

        return maxArea;
    }
};`
  },
  "largest-rectangle-in-histogram-h2": {
    python: `def max_histogram_comparison(histograms):
    def max_area(h):
        n = len(h)
        stack = []
        max_a = 0
        for i in range(n):
            while stack and h[stack[-1]] > h[i]:
                height = h[stack.pop()]
                left = stack[-1] if stack else -1
                width = i - left - 1
                max_a = max(max_a, height * width)
            stack.append(i)
        while stack:
            height = h[stack.pop()]
            left = stack[-1] if stack else -1
            width = n - left - 1
            max_a = max(max_a, height * width)
        return max_a

    best_idx = 0
    best_area = max_area(histograms[0])
    for i in range(1, len(histograms)):
        area = max_area(histograms[i])
        if area > best_area:
            best_area = area
            best_idx = i
    return [best_idx, best_area]`,

    java: `import java.util.*;

class Solution {
    private int maxArea(int[] h) {
        int n = h.length;
        Stack<Integer> stack = new Stack<>();
        int maxArea = 0;

        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && h[stack.peek()] > h[i]) {
                int height = h[stack.pop()];
                int left = stack.isEmpty() ? -1 : stack.peek();
                int width = i - left - 1;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(i);
        }

        while (!stack.isEmpty()) {
            int height = h[stack.pop()];
            int left = stack.isEmpty() ? -1 : stack.peek();
            int width = n - left - 1;
            maxArea = Math.max(maxArea, height * width);
        }

        return maxArea;
    }

    public int[] maxHistogramComparison(int[][] histograms) {
        int bestIdx = 0;
        int bestArea = maxArea(histograms[0]);

        for (int i = 1; i < histograms.length; i++) {
            int area = maxArea(histograms[i]);
            if (area > bestArea) {
                bestArea = area;
                bestIdx = i;
            }
        }

        return new int[]{bestIdx, bestArea};
    }
}`,

    c: `#include <stdio.h>

int maxArea(int h[], int n) {
    int stack[n];
    int top = -1;
    int maxArea = 0;

    for (int i = 0; i < n; i++) {
        while (top >= 0 && h[stack[top]] > h[i]) {
            int height = h[stack[top--]];
            int left = (top == -1) ? -1 : stack[top];
            int width = i - left - 1;
            if (height * width > maxArea) maxArea = height * width;
        }
        stack[++top] = i;
    }

    while (top >= 0) {
        int height = h[stack[top--]];
        int left = (top == -1) ? -1 : stack[top];
        int width = n - left - 1;
        if (height * width > maxArea) maxArea = height * width;
    }

    return maxArea;
}

void maxHistogramComparison(int histograms[][1000], int h, int n, int result[]) {
    int bestIdx = 0;
    int bestArea = maxArea(histograms[0], n);

    for (int i = 1; i < h; i++) {
        int area = maxArea(histograms[i], n);
        if (area > bestArea) {
            bestArea = area;
            bestIdx = i;
        }
    }

    result[0] = bestIdx;
    result[1] = bestArea;
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    int maxArea(vector<int>& h) {
        int n = h.size();
        stack<int> indices;
        int maxArea = 0;

        for (int i = 0; i < n; i++) {
            while (!indices.empty() && h[indices.top()] > h[i]) {
                int height = h[indices.top()];
                indices.pop();
                int left = indices.empty() ? -1 : indices.top();
                int width = i - left - 1;
                maxArea = max(maxArea, height * width);
            }
            indices.push(i);
        }

        while (!indices.empty()) {
            int height = h[indices.top()];
            indices.pop();
            int left = indices.empty() ? -1 : indices.top();
            int width = n - left - 1;
            maxArea = max(maxArea, height * width);
        }

        return maxArea;
    }

    vector<int> maxHistogramComparison(vector<vector<int>>& histograms) {
        int bestIdx = 0;
        int bestArea = maxArea(histograms[0]);

        for (int i = 1; i < histograms.size(); i++) {
            int area = maxArea(histograms[i]);
            if (area > bestArea) {
                bestArea = area;
                bestIdx = i;
            }
        }

        return {bestIdx, bestArea};
    }
};`
  },
  "largest-rectangle-in-histogram-h3": {
    python: `def dynamic_histogram_areas(heights, updates):
    def max_area(h):
        n = len(h)
        stack = []
        max_a = 0
        for i in range(n):
            while stack and h[stack[-1]] > h[i]:
                height = h[stack.pop()]
                left = stack[-1] if stack else -1
                width = i - left - 1
                max_a = max(max_a, height * width)
            stack.append(i)
        while stack:
            height = h[stack.pop()]
            left = stack[-1] if stack else -1
            width = n - left - 1
            max_a = max(max_a, height * width)
        return max_a

    result = []
    for idx, new_height in updates:
        heights[idx] = new_height
        result.append(max_area(heights))
    return result`,

    java: `import java.util.*;

class Solution {
    private int maxArea(int[] h) {
        int n = h.length;
        Stack<Integer> stack = new Stack<>();
        int maxArea = 0;

        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && h[stack.peek()] > h[i]) {
                int height = h[stack.pop()];
                int left = stack.isEmpty() ? -1 : stack.peek();
                int width = i - left - 1;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(i);
        }

        while (!stack.isEmpty()) {
            int height = h[stack.pop()];
            int left = stack.isEmpty() ? -1 : stack.peek();
            int width = n - left - 1;
            maxArea = Math.max(maxArea, height * width);
        }

        return maxArea;
    }

    public int[] dynamicHistogramAreas(int[] heights, int[][] updates) {
        int[] result = new int[updates.length];
        for (int i = 0; i < updates.length; i++) {
            heights[updates[i][0]] = updates[i][1];
            result[i] = maxArea(heights);
        }
        return result;
    }
}`,

    c: `#include <stdio.h>

int maxArea(int h[], int n) {
    int stack[n];
    int top = -1;
    int maxArea = 0;

    for (int i = 0; i < n; i++) {
        while (top >= 0 && h[stack[top]] > h[i]) {
            int height = h[stack[top--]];
            int left = (top == -1) ? -1 : stack[top];
            int width = i - left - 1;
            if (height * width > maxArea) maxArea = height * width;
        }
        stack[++top] = i;
    }

    while (top >= 0) {
        int height = h[stack[top--]];
        int left = (top == -1) ? -1 : stack[top];
        int width = n - left - 1;
        if (height * width > maxArea) maxArea = height * width;
    }

    return maxArea;
}

void dynamicHistogramAreas(int heights[], int n, int updates[][2], int u, int result[]) {
    for (int i = 0; i < u; i++) {
        heights[updates[i][0]] = updates[i][1];
        result[i] = maxArea(heights, n);
    }
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    int maxArea(vector<int>& h) {
        int n = h.size();
        stack<int> indices;
        int maxArea = 0;

        for (int i = 0; i < n; i++) {
            while (!indices.empty() && h[indices.top()] > h[i]) {
                int height = h[indices.top()];
                indices.pop();
                int left = indices.empty() ? -1 : indices.top();
                int width = i - left - 1;
                maxArea = max(maxArea, height * width);
            }
            indices.push(i);
        }

        while (!indices.empty()) {
            int height = h[indices.top()];
            indices.pop();
            int left = indices.empty() ? -1 : indices.top();
            int width = n - left - 1;
            maxArea = max(maxArea, height * width);
        }

        return maxArea;
    }

    vector<int> dynamicHistogramAreas(vector<int>& heights, vector<vector<int>>& updates) {
        vector<int> result;
        for (auto& update : updates) {
            heights[update[0]] = update[1];
            result.push_back(maxArea(heights));
        }
        return result;
    }
};`
  },
  "largest-rectangle-in-histogram-h4": {
    python: `def max_area_with_min_width(heights, k):
    n = len(heights)
    stack = []
    max_area = 0

    for i in range(n):
        while stack and heights[stack[-1]] > heights[i]:
            h = heights[stack.pop()]
            left = stack[-1] if stack else -1
            w = i - left - 1
            if w >= k:
                max_area = max(max_area, h * w)
        stack.append(i)

    while stack:
        h = heights[stack.pop()]
        left = stack[-1] if stack else -1
        w = n - left - 1
        if w >= k:
            max_area = max(max_area, h * w)

    return max_area`,

    java: `import java.util.*;

class Solution {
    public int maxAreaWithMinWidth(int[] heights, int k) {
        int n = heights.length;
        Stack<Integer> stack = new Stack<>();
        int maxArea = 0;

        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && heights[stack.peek()] > heights[i]) {
                int h = heights[stack.pop()];
                int left = stack.isEmpty() ? -1 : stack.peek();
                int w = i - left - 1;
                if (w >= k) {
                    maxArea = Math.max(maxArea, h * w);
                }
            }
            stack.push(i);
        }

        while (!stack.isEmpty()) {
            int h = heights[stack.pop()];
            int left = stack.isEmpty() ? -1 : stack.peek();
            int w = n - left - 1;
            if (w >= k) {
                maxArea = Math.max(maxArea, h * w);
            }
        }

        return maxArea;
    }
}`,

    c: `#include <stdio.h>

int maxAreaWithMinWidth(int heights[], int n, int k) {
    int stack[n];
    int top = -1;
    int maxArea = 0;

    for (int i = 0; i < n; i++) {
        while (top >= 0 && heights[stack[top]] > heights[i]) {
            int h = heights[stack[top--]];
            int left = (top == -1) ? -1 : stack[top];
            int w = i - left - 1;
            if (w >= k && h * w > maxArea) maxArea = h * w;
        }
        stack[++top] = i;
    }

    while (top >= 0) {
        int h = heights[stack[top--]];
        int left = (top == -1) ? -1 : stack[top];
        int w = n - left - 1;
        if (w >= k && h * w > maxArea) maxArea = h * w;
    }

    return maxArea;
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    int maxAreaWithMinWidth(vector<int>& heights, int k) {
        int n = heights.size();
        stack<int> indices;
        int maxArea = 0;

        for (int i = 0; i < n; i++) {
            while (!indices.empty() && heights[indices.top()] > heights[i]) {
                int h = heights[indices.top()];
                indices.pop();
                int left = indices.empty() ? -1 : indices.top();
                int w = i - left - 1;
                if (w >= k) {
                    maxArea = max(maxArea, h * w);
                }
            }
            indices.push(i);
        }

        while (!indices.empty()) {
            int h = heights[indices.top()];
            indices.pop();
            int left = indices.empty() ? -1 : indices.top();
            int w = n - left - 1;
            if (w >= k) {
                maxArea = max(maxArea, h * w);
            }
        }

        return maxArea;
    }
};`
  },
  "largest-rectangle-in-histogram-h5": {
    python: `def skyline_segmentation(heights, k):
    def max_area(arr, start, end):
        stack = []
        max_a = 0
        for i in range(start, end + 1):
            while stack and arr[stack[-1]] > arr[i]:
                h = arr[stack.pop()]
                l = stack[-1] if stack else start - 1
                w = i - l - 1
                max_a = max(max_a, h * w)
            stack.append(i)
        while stack:
            h = arr[stack.pop()]
            l = stack[-1] if stack else start - 1
            w = end - l
            max_a = max(max_a, h * w)
        return max_a

    n = len(heights)
    dp = [[0] * (k + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        dp[i][1] = max_area(heights, 0, i - 1)

    for seg in range(2, k + 1):
        for i in range(seg, n + 1):
            dp[i][seg] = float('inf')
            for j in range(seg - 1, i):
                dp[i][seg] = min(dp[i][seg], max(dp[j][seg - 1], max_area(heights, j, i - 1)))

    return dp[n][k]`,

    java: `import java.util.*;

class Solution {
    private int maxAreaInRange(int[] arr, int start, int end) {
        int[] stack = new int[end - start + 1];
        int top = -1;
        int maxArea = 0;

        for (int i = start; i <= end; i++) {
            while (top >= 0 && arr[stack[top]] > arr[i]) {
                int h = arr[stack[top--]];
                int left = (top == -1) ? start - 1 : stack[top];
                int w = i - left - 1;
                maxArea = Math.max(maxArea, h * w);
            }
            stack[++top] = i;
        }

        while (top >= 0) {
            int h = arr[stack[top--]];
            int left = (top == -1) ? start - 1 : stack[top];
            int w = end - left;
            maxArea = Math.max(maxArea, h * w);
        }

        return maxArea;
    }

    public int skylineSegmentation(int[] heights, int k) {
        int n = heights.length;
        int[][] dp = new int[n + 1][k + 1];

        for (int i = 1; i <= n; i++) {
            dp[i][1] = maxAreaInRange(heights, 0, i - 1);
        }

        for (int seg = 2; seg <= k; seg++) {
            for (int i = seg; i <= n; i++) {
                dp[i][seg] = Integer.MAX_VALUE;
                for (int j = seg - 1; j < i; j++) {
                    dp[i][seg] = Math.min(dp[i][seg], Math.max(dp[j][seg - 1], maxAreaInRange(heights, j, i - 1)));
                }
            }
        }

        return dp[n][k];
    }
}`,

    c: `#include <stdio.h>
#include <limits.h>

int maxAreaInRange(int arr[], int start, int end) {
    int stack[1000];
    int top = -1;
    int maxArea = 0;

    for (int i = start; i <= end; i++) {
        while (top >= 0 && arr[stack[top]] > arr[i]) {
            int h = arr[stack[top--]];
            int left = (top == -1) ? start - 1 : stack[top];
            int w = i - left - 1;
            if (h * w > maxArea) maxArea = h * w;
        }
        stack[++top] = i;
    }

    while (top >= 0) {
        int h = arr[stack[top--]];
        int left = (top == -1) ? start - 1 : stack[top];
        int w = end - left;
        if (h * w > maxArea) maxArea = h * w;
    }

    return maxArea;
}

int skylineSegmentation(int heights[], int n, int k) {
    int dp[1001][1001];

    for (int i = 1; i <= n; i++) {
        dp[i][1] = maxAreaInRange(heights, 0, i - 1);
    }

    for (int seg = 2; seg <= k; seg++) {
        for (int i = seg; i <= n; i++) {
            dp[i][seg] = INT_MAX;
            for (int j = seg - 1; j < i; j++) {
                int val = (dp[j][seg - 1] > maxAreaInRange(heights, j, i - 1)) ? dp[j][seg - 1] : maxAreaInRange(heights, j, i - 1);
                if (val < dp[i][seg]) dp[i][seg] = val;
            }
        }
    }

    return dp[n][k];
}`,

    cpp: `#include <vector>
#include <stack>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxAreaInRange(vector<int>& arr, int start, int end) {
        stack<int> indices;
        int maxArea = 0;

        for (int i = start; i <= end; i++) {
            while (!indices.empty() && arr[indices.top()] > arr[i]) {
                int h = arr[indices.top()];
                indices.pop();
                int left = indices.empty() ? start - 1 : indices.top();
                int w = i - left - 1;
                maxArea = max(maxArea, h * w);
            }
            indices.push(i);
        }

        while (!indices.empty()) {
            int h = arr[indices.top()];
            indices.pop();
            int left = indices.empty() ? start - 1 : indices.top();
            int w = end - left;
            maxArea = max(maxArea, h * w);
        }

        return maxArea;
    }

    int skylineSegmentation(vector<int>& heights, int k) {
        int n = heights.size();
        vector<vector<int>> dp(n + 1, vector<int>(k + 1, 0));

        for (int i = 1; i <= n; i++) {
            dp[i][1] = maxAreaInRange(heights, 0, i - 1);
        }

        for (int seg = 2; seg <= k; seg++) {
            for (int i = seg; i <= n; i++) {
                dp[i][seg] = INT_MAX;
                for (int j = seg - 1; j < i; j++) {
                    dp[i][seg] = min(dp[i][seg], max(dp[j][seg - 1], maxAreaInRange(heights, j, i - 1)));
                }
            }
        }

        return dp[n][k];
    }
};`
  }
};