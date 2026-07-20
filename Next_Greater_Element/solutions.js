export const nextGreaterElementSolutions = {
  "next-greater-element-e1": {
    python: `def next_taller_buildings(heights):
    result = [-1] * len(heights)
    stack = []

    for i in range(len(heights) - 1, -1, -1):
        while stack and stack[-1] <= heights[i]:
            stack.pop()

        if stack:
            result[i] = stack[-1]

        stack.append(heights[i])

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] nextTallerBuildings(int[] heights) {
        int n = heights.length;
        int[] result = new int[n];
        Arrays.fill(result, -1);

        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && stack.peek() <= heights[i]) {
                stack.pop();
            }

            if (!stack.isEmpty()) {
                result[i] = stack.peek();
            }

            stack.push(heights[i]);
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

void nextTallerBuildings(int heights[], int n, int result[]) {
    int stack[n];
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && stack[top] <= heights[i]) {
            top--;
        }

        result[i] = (top == -1) ? -1 : stack[top];
        stack[++top] = heights[i];
    }
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    vector<int> nextTallerBuildings(vector<int>& heights) {
        int n = heights.size();
        vector<int> result(n, -1);
        stack<int> candidates;

        for (int i = n - 1; i >= 0; i--) {
            while (!candidates.empty() && candidates.top() <= heights[i]) {
                candidates.pop();
            }

            if (!candidates.empty()) {
                result[i] = candidates.top();
            }

            candidates.push(heights[i]);
        }

        return result;
    }
};`
  },
  "next-greater-element-e2": {
    python: `def next_warmer_readings(temperatures):
    result = [-1] * len(temperatures)
    stack = []

    for i in range(len(temperatures) - 1, -1, -1):
        while stack and stack[-1] <= temperatures[i]:
            stack.pop()

        if stack:
            result[i] = stack[-1]

        stack.append(temperatures[i])

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] nextWarmerReadings(int[] temperatures) {
        int n = temperatures.length;
        int[] result = new int[n];
        Arrays.fill(result, -1);

        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && stack.peek() <= temperatures[i]) {
                stack.pop();
            }

            if (!stack.isEmpty()) {
                result[i] = stack.peek();
            }

            stack.push(temperatures[i]);
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

void nextWarmerReadings(int temperatures[], int n, int result[]) {
    int stack[n];
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && stack[top] <= temperatures[i]) {
            top--;
        }

        result[i] = (top == -1) ? -1 : stack[top];
        stack[++top] = temperatures[i];
    }
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    vector<int> nextWarmerReadings(vector<int>& temperatures) {
        int n = temperatures.size();
        vector<int> result(n, -1);
        stack<int> candidates;

        for (int i = n - 1; i >= 0; i--) {
            while (!candidates.empty() && candidates.top() <= temperatures[i]) {
                candidates.pop();
            }

            if (!candidates.empty()) {
                result[i] = candidates.top();
            }

            candidates.push(temperatures[i]);
        }

        return result;
    }
};`
  },
  "next-greater-element-e3": {
    python: `def next_higher_stock_prices(prices):
    result = [-1] * len(prices)
    stack = []

    for i in range(len(prices) - 1, -1, -1):
        while stack and stack[-1] <= prices[i]:
            stack.pop()

        if stack:
            result[i] = stack[-1]

        stack.append(prices[i])

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] nextHigherStockPrices(int[] prices) {
        int n = prices.length;
        int[] result = new int[n];
        Arrays.fill(result, -1);

        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && stack.peek() <= prices[i]) {
                stack.pop();
            }

            if (!stack.isEmpty()) {
                result[i] = stack.peek();
            }

            stack.push(prices[i]);
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

void nextHigherStockPrices(int prices[], int n, int result[]) {
    int stack[n];
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && stack[top] <= prices[i]) {
            top--;
        }

        result[i] = (top == -1) ? -1 : stack[top];
        stack[++top] = prices[i];
    }
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    vector<int> nextHigherStockPrices(vector<int>& prices) {
        int n = prices.size();
        vector<int> result(n, -1);
        stack<int> candidates;

        for (int i = n - 1; i >= 0; i--) {
            while (!candidates.empty() && candidates.top() <= prices[i]) {
                candidates.pop();
            }

            if (!candidates.empty()) {
                result[i] = candidates.top();
            }

            candidates.push(prices[i]);
        }

        return result;
    }
};`
  },
  "next-greater-element-e4": {
    python: `def next_server_load_spikes(loads):
    result = [-1] * len(loads)
    stack = []

    for i in range(len(loads) - 1, -1, -1):
        while stack and stack[-1] <= loads[i]:
            stack.pop()

        if stack:
            result[i] = stack[-1]

        stack.append(loads[i])

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] nextServerLoadSpikes(int[] loads) {
        int n = loads.length;
        int[] result = new int[n];
        Arrays.fill(result, -1);

        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && stack.peek() <= loads[i]) {
                stack.pop();
            }

            if (!stack.isEmpty()) {
                result[i] = stack.peek();
            }

            stack.push(loads[i]);
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

void nextServerLoadSpikes(int loads[], int n, int result[]) {
    int stack[n];
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && stack[top] <= loads[i]) {
            top--;
        }

        result[i] = (top == -1) ? -1 : stack[top];
        stack[++top] = loads[i];
    }
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    vector<int> nextServerLoadSpikes(vector<int>& loads) {
        int n = loads.size();
        vector<int> result(n, -1);
        stack<int> candidates;

        for (int i = n - 1; i >= 0; i--) {
            while (!candidates.empty() && candidates.top() <= loads[i]) {
                candidates.pop();
            }

            if (!candidates.empty()) {
                result[i] = candidates.top();
            }

            candidates.push(loads[i]);
        }

        return result;
    }
};`
  },
  "next-greater-element-e5": {
    python: `def next_stronger_opponents(powers):
    result = [-1] * len(powers)
    stack = []

    for i in range(len(powers) - 1, -1, -1):
        while stack and stack[-1] <= powers[i]:
            stack.pop()

        if stack:
            result[i] = stack[-1]

        stack.append(powers[i])

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] nextStrongerOpponents(int[] powers) {
        int n = powers.length;
        int[] result = new int[n];
        Arrays.fill(result, -1);

        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && stack.peek() <= powers[i]) {
                stack.pop();
            }

            if (!stack.isEmpty()) {
                result[i] = stack.peek();
            }

            stack.push(powers[i]);
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

void nextStrongerOpponents(int powers[], int n, int result[]) {
    int stack[n];
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && stack[top] <= powers[i]) {
            top--;
        }

        result[i] = (top == -1) ? -1 : stack[top];
        stack[++top] = powers[i];
    }
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    vector<int> nextStrongerOpponents(vector<int>& powers) {
        int n = powers.size();
        vector<int> result(n, -1);
        stack<int> candidates;

        for (int i = n - 1; i >= 0; i--) {
            while (!candidates.empty() && candidates.top() <= powers[i]) {
                candidates.pop();
            }

            if (!candidates.empty()) {
                result[i] = candidates.top();
            }

            candidates.push(powers[i]);
        }

        return result;
    }
};`
  },
  "next-greater-element-m1": {
    python: `def days_until_warmer_temperature(temperatures):
    result = [0] * len(temperatures)
    stack = []

    for i in range(len(temperatures) - 1, -1, -1):
        while stack and temperatures[stack[-1]] <= temperatures[i]:
            stack.pop()

        if stack:
            result[i] = stack[-1] - i

        stack.append(i)

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] daysUntilWarmerTemperature(int[] temperatures) {
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
}`,

    c: `#include <stdio.h>

void daysUntilWarmerTemperature(int temperatures[], int n, int result[]) {
    int stack[n];
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && temperatures[stack[top]] <= temperatures[i]) {
            top--;
        }

        result[i] = (top == -1) ? 0 : stack[top] - i;
        stack[++top] = i;
    }
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    vector<int> daysUntilWarmerTemperature(vector<int>& temperatures) {
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
};`
  },
  "next-greater-element-m2": {
    python: `def next_higher_quality_indices(scores):
    result = [-1] * len(scores)
    stack = []

    for i in range(len(scores) - 1, -1, -1):
        while stack and scores[stack[-1]] <= scores[i]:
            stack.pop()

        if stack:
            result[i] = stack[-1]

        stack.append(i)

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] nextHigherQualityIndices(int[] scores) {
        int n = scores.length;
        int[] result = new int[n];
        Arrays.fill(result, -1);
        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && scores[stack.peek()] <= scores[i]) {
                stack.pop();
            }

            if (!stack.isEmpty()) {
                result[i] = stack.peek();
            }

            stack.push(i);
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

void nextHigherQualityIndices(int scores[], int n, int result[]) {
    int stack[n];
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && scores[stack[top]] <= scores[i]) {
            top--;
        }

        result[i] = (top == -1) ? -1 : stack[top];
        stack[++top] = i;
    }
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    vector<int> nextHigherQualityIndices(vector<int>& scores) {
        int n = scores.size();
        vector<int> result(n, -1);
        stack<int> indices;

        for (int i = n - 1; i >= 0; i--) {
            while (!indices.empty() && scores[indices.top()] <= scores[i]) {
                indices.pop();
            }

            if (!indices.empty()) {
                result[i] = indices.top();
            }

            indices.push(i);
        }

        return result;
    }
};`
  },
  "next-greater-element-m3": {
    python: `def next_price_for_watched_days(prices, queries):
    next_greater = [-1] * len(prices)
    stack = []

    for i in range(len(prices) - 1, -1, -1):
        while stack and stack[-1] <= prices[i]:
            stack.pop()

        if stack:
            next_greater[i] = stack[-1]

        stack.append(prices[i])

    return [next_greater[index] for index in queries]`,

    java: `import java.util.*;

class Solution {
    public int[] nextPriceForWatchedDays(int[] prices, int[] queries) {
        int n = prices.length;
        int[] nextGreater = new int[n];
        Arrays.fill(nextGreater, -1);

        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && stack.peek() <= prices[i]) {
                stack.pop();
            }

            if (!stack.isEmpty()) {
                nextGreater[i] = stack.peek();
            }

            stack.push(prices[i]);
        }

        int[] result = new int[queries.length];

        for (int i = 0; i < queries.length; i++) {
            result[i] = nextGreater[queries[i]];
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

void nextPriceForWatchedDays(int prices[], int n, int queries[], int q, int result[]) {
    int nextGreater[n];
    int stack[n];
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && stack[top] <= prices[i]) {
            top--;
        }

        nextGreater[i] = (top == -1) ? -1 : stack[top];
        stack[++top] = prices[i];
    }

    for (int i = 0; i < q; i++) {
        result[i] = nextGreater[queries[i]];
    }
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    vector<int> nextPriceForWatchedDays(vector<int>& prices, vector<int>& queries) {
        int n = prices.size();
        vector<int> nextGreater(n, -1);
        stack<int> candidates;

        for (int i = n - 1; i >= 0; i--) {
            while (!candidates.empty() && candidates.top() <= prices[i]) {
                candidates.pop();
            }

            if (!candidates.empty()) {
                nextGreater[i] = candidates.top();
            }

            candidates.push(prices[i]);
        }

        vector<int> result;

        for (int index : queries) {
            result.push_back(nextGreater[index]);
        }

        return result;
    }
};`
  },
  "next-greater-element-m4": {
    python: `def minutes_until_higher_traffic(traffic):
    result = [0] * len(traffic)
    stack = []

    for i in range(len(traffic) - 1, -1, -1):
        while stack and traffic[stack[-1]] <= traffic[i]:
            stack.pop()

        if stack:
            result[i] = stack[-1] - i

        stack.append(i)

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] minutesUntilHigherTraffic(int[] traffic) {
        int n = traffic.length;
        int[] result = new int[n];
        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && traffic[stack.peek()] <= traffic[i]) {
                stack.pop();
            }

            if (!stack.isEmpty()) {
                result[i] = stack.peek() - i;
            }

            stack.push(i);
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

void minutesUntilHigherTraffic(int traffic[], int n, int result[]) {
    int stack[n];
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && traffic[stack[top]] <= traffic[i]) {
            top--;
        }

        result[i] = (top == -1) ? 0 : stack[top] - i;
        stack[++top] = i;
    }
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    vector<int> minutesUntilHigherTraffic(vector<int>& traffic) {
        int n = traffic.size();
        vector<int> result(n, 0);
        stack<int> indices;

        for (int i = n - 1; i >= 0; i--) {
            while (!indices.empty() && traffic[indices.top()] <= traffic[i]) {
                indices.pop();
            }

            if (!indices.empty()) {
                result[i] = indices.top() - i;
            }

            indices.push(i);
        }

        return result;
    }
};`
  },
  "next-greater-element-m5": {
    python: `def next_signal_for_query_points(readings, queries):
    next_greater = [-1] * len(readings)
    stack = []

    for i in range(len(readings) - 1, -1, -1):
        while stack and stack[-1] <= readings[i]:
            stack.pop()

        if stack:
            next_greater[i] = stack[-1]

        stack.append(readings[i])

    return [next_greater[index] for index in queries]`,

    java: `import java.util.*;

class Solution {
    public int[] nextSignalForQueryPoints(int[] readings, int[] queries) {
        int n = readings.length;
        int[] nextGreater = new int[n];
        Arrays.fill(nextGreater, -1);

        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && stack.peek() <= readings[i]) {
                stack.pop();
            }

            if (!stack.isEmpty()) {
                nextGreater[i] = stack.peek();
            }

            stack.push(readings[i]);
        }

        int[] result = new int[queries.length];

        for (int i = 0; i < queries.length; i++) {
            result[i] = nextGreater[queries[i]];
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

void nextSignalForQueryPoints(int readings[], int n, int queries[], int q, int result[]) {
    int nextGreater[n];
    int stack[n];
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && stack[top] <= readings[i]) {
            top--;
        }

        nextGreater[i] = (top == -1) ? -1 : stack[top];
        stack[++top] = readings[i];
    }

    for (int i = 0; i < q; i++) {
        result[i] = nextGreater[queries[i]];
    }
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    vector<int> nextSignalForQueryPoints(vector<int>& readings, vector<int>& queries) {
        int n = readings.size();
        vector<int> nextGreater(n, -1);
        stack<int> candidates;

        for (int i = n - 1; i >= 0; i--) {
            while (!candidates.empty() && candidates.top() <= readings[i]) {
                candidates.pop();
            }

            if (!candidates.empty()) {
                nextGreater[i] = candidates.top();
            }

            candidates.push(readings[i]);
        }

        vector<int> result;

        for (int index : queries) {
            result.push_back(nextGreater[index]);
        }

        return result;
    }
};`
  },
  "next-greater-element-h1": {
    python: `def circular_sensor_next_greater(readings):
    n = len(readings)
    result = [-1] * n
    stack = []

    for i in range(2 * n - 1, -1, -1):
        index = i % n

        while stack and stack[-1] <= readings[index]:
            stack.pop()

        if i < n and stack:
            result[index] = stack[-1]

        stack.append(readings[index])

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] circularSensorNextGreater(int[] readings) {
        int n = readings.length;
        int[] result = new int[n];
        Arrays.fill(result, -1);

        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = 2 * n - 1; i >= 0; i--) {
            int index = i % n;

            while (!stack.isEmpty() && stack.peek() <= readings[index]) {
                stack.pop();
            }

            if (i < n && !stack.isEmpty()) {
                result[index] = stack.peek();
            }

            stack.push(readings[index]);
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

void circularSensorNextGreater(int readings[], int n, int result[]) {
    int stack[2 * n];
    int top = -1;

    for (int i = 0; i < n; i++) {
        result[i] = -1;
    }

    for (int i = 2 * n - 1; i >= 0; i--) {
        int index = i % n;

        while (top >= 0 && stack[top] <= readings[index]) {
            top--;
        }

        if (i < n && top >= 0) {
            result[index] = stack[top];
        }

        stack[++top] = readings[index];
    }
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    vector<int> circularSensorNextGreater(vector<int>& readings) {
        int n = readings.size();
        vector<int> result(n, -1);
        stack<int> candidates;

        for (int i = 2 * n - 1; i >= 0; i--) {
            int index = i % n;

            while (!candidates.empty() && candidates.top() <= readings[index]) {
                candidates.pop();
            }

            if (i < n && !candidates.empty()) {
                result[index] = candidates.top();
            }

            candidates.push(readings[index]);
        }

        return result;
    }
};`
  },
  "next-greater-element-h2": {
    python: `def circular_demand_waiting_time(demand):
    n = len(demand)
    result = [0] * n
    stack = []

    for i in range(2 * n - 1, -1, -1):
        index = i % n

        while stack and demand[stack[-1] % n] <= demand[index]:
            stack.pop()

        if i < n and stack:
            result[index] = stack[-1] - i

        stack.append(i)

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] circularDemandWaitingTime(int[] demand) {
        int n = demand.length;
        int[] result = new int[n];
        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = 2 * n - 1; i >= 0; i--) {
            int index = i % n;

            while (!stack.isEmpty() && demand[stack.peek() % n] <= demand[index]) {
                stack.pop();
            }

            if (i < n && !stack.isEmpty()) {
                result[index] = stack.peek() - i;
            }

            stack.push(i);
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

void circularDemandWaitingTime(int demand[], int n, int result[]) {
    int stack[2 * n];
    int top = -1;

    for (int i = 0; i < n; i++) {
        result[i] = 0;
    }

    for (int i = 2 * n - 1; i >= 0; i--) {
        int index = i % n;

        while (top >= 0 && demand[stack[top] % n] <= demand[index]) {
            top--;
        }

        if (i < n && top >= 0) {
            result[index] = stack[top] - i;
        }

        stack[++top] = i;
    }
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    vector<int> circularDemandWaitingTime(vector<int>& demand) {
        int n = demand.size();
        vector<int> result(n, 0);
        stack<int> indices;

        for (int i = 2 * n - 1; i >= 0; i--) {
            int index = i % n;

            while (!indices.empty() && demand[indices.top() % n] <= demand[index]) {
                indices.pop();
            }

            if (i < n && !indices.empty()) {
                result[index] = indices.top() - i;
            }

            indices.push(i);
        }

        return result;
    }
};`
  },
  "next-greater-element-h3": {
    python: `def circular_market_price_alert(prices):
    n = len(prices)
    result = [-1] * n
    stack = []

    for i in range(2 * n - 1, -1, -1):
        index = i % n

        while stack and stack[-1] <= prices[index]:
            stack.pop()

        if i < n and stack:
            result[index] = stack[-1]

        stack.append(prices[index])

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] circularMarketPriceAlert(int[] prices) {
        int n = prices.length;
        int[] result = new int[n];
        Arrays.fill(result, -1);

        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = 2 * n - 1; i >= 0; i--) {
            int index = i % n;

            while (!stack.isEmpty() && stack.peek() <= prices[index]) {
                stack.pop();
            }

            if (i < n && !stack.isEmpty()) {
                result[index] = stack.peek();
            }

            stack.push(prices[index]);
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

void circularMarketPriceAlert(int prices[], int n, int result[]) {
    int stack[2 * n];
    int top = -1;

    for (int i = 0; i < n; i++) {
        result[i] = -1;
    }

    for (int i = 2 * n - 1; i >= 0; i--) {
        int index = i % n;

        while (top >= 0 && stack[top] <= prices[index]) {
            top--;
        }

        if (i < n && top >= 0) {
            result[index] = stack[top];
        }

        stack[++top] = prices[index];
    }
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    vector<int> circularMarketPriceAlert(vector<int>& prices) {
        int n = prices.size();
        vector<int> result(n, -1);
        stack<int> candidates;

        for (int i = 2 * n - 1; i >= 0; i--) {
            int index = i % n;

            while (!candidates.empty() && candidates.top() <= prices[index]) {
                candidates.pop();
            }

            if (i < n && !candidates.empty()) {
                result[index] = candidates.top();
            }

            candidates.push(prices[index]);
        }

        return result;
    }
};`
  },
  "next-greater-element-h4": {
    python: `def circular_next_greater_query(readings, queries):
    n = len(readings)
    next_greater = [-1] * n
    stack = []

    for i in range(2 * n - 1, -1, -1):
        index = i % n

        while stack and stack[-1] <= readings[index]:
            stack.pop()

        if i < n and stack:
            next_greater[index] = stack[-1]

        stack.append(readings[index])

    return [next_greater[index] for index in queries]`,

    java: `import java.util.*;

class Solution {
    public int[] circularNextGreaterQuery(int[] readings, int[] queries) {
        int n = readings.length;
        int[] nextGreater = new int[n];
        Arrays.fill(nextGreater, -1);

        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = 2 * n - 1; i >= 0; i--) {
            int index = i % n;

            while (!stack.isEmpty() && stack.peek() <= readings[index]) {
                stack.pop();
            }

            if (i < n && !stack.isEmpty()) {
                nextGreater[index] = stack.peek();
            }

            stack.push(readings[index]);
        }

        int[] result = new int[queries.length];

        for (int i = 0; i < queries.length; i++) {
            result[i] = nextGreater[queries[i]];
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

void circularNextGreaterQuery(int readings[], int n, int queries[], int q, int result[]) {
    int nextGreater[n];
    int stack[2 * n];
    int top = -1;

    for (int i = 0; i < n; i++) {
        nextGreater[i] = -1;
    }

    for (int i = 2 * n - 1; i >= 0; i--) {
        int index = i % n;

        while (top >= 0 && stack[top] <= readings[index]) {
            top--;
        }

        if (i < n && top >= 0) {
            nextGreater[index] = stack[top];
        }

        stack[++top] = readings[index];
    }

    for (int i = 0; i < q; i++) {
        result[i] = nextGreater[queries[i]];
    }
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    vector<int> circularNextGreaterQuery(vector<int>& readings, vector<int>& queries) {
        int n = readings.size();
        vector<int> nextGreater(n, -1);
        stack<int> candidates;

        for (int i = 2 * n - 1; i >= 0; i--) {
            int index = i % n;

            while (!candidates.empty() && candidates.top() <= readings[index]) {
                candidates.pop();
            }

            if (i < n && !candidates.empty()) {
                nextGreater[index] = candidates.top();
            }

            candidates.push(readings[index]);
        }

        vector<int> result;

        for (int index : queries) {
            result.push_back(nextGreater[index]);
        }

        return result;
    }
};`
  },
  "next-greater-element-h5": {
    python: `def circular_workload_wait_queries(workloads, queries):
    n = len(workloads)
    wait = [0] * n
    stack = []

    for i in range(2 * n - 1, -1, -1):
        index = i % n

        while stack and workloads[stack[-1] % n] <= workloads[index]:
            stack.pop()

        if i < n and stack:
            wait[index] = stack[-1] - i

        stack.append(i)

    return [wait[index] for index in queries]`,

    java: `import java.util.*;

class Solution {
    public int[] circularWorkloadWaitQueries(int[] workloads, int[] queries) {
        int n = workloads.length;
        int[] wait = new int[n];
        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = 2 * n - 1; i >= 0; i--) {
            int index = i % n;

            while (!stack.isEmpty() && workloads[stack.peek() % n] <= workloads[index]) {
                stack.pop();
            }

            if (i < n && !stack.isEmpty()) {
                wait[index] = stack.peek() - i;
            }

            stack.push(i);
        }

        int[] result = new int[queries.length];

        for (int i = 0; i < queries.length; i++) {
            result[i] = wait[queries[i]];
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

void circularWorkloadWaitQueries(int workloads[], int n, int queries[], int q, int result[]) {
    int wait[n];
    int stack[2 * n];
    int top = -1;

    for (int i = 0; i < n; i++) {
        wait[i] = 0;
    }

    for (int i = 2 * n - 1; i >= 0; i--) {
        int index = i % n;

        while (top >= 0 && workloads[stack[top] % n] <= workloads[index]) {
            top--;
        }

        if (i < n && top >= 0) {
            wait[index] = stack[top] - i;
        }

        stack[++top] = i;
    }

    for (int i = 0; i < q; i++) {
        result[i] = wait[queries[i]];
    }
}`,

    cpp: `#include <vector>
#include <stack>
using namespace std;

class Solution {
public:
    vector<int> circularWorkloadWaitQueries(vector<int>& workloads, vector<int>& queries) {
        int n = workloads.size();
        vector<int> wait(n, 0);
        stack<int> indices;

        for (int i = 2 * n - 1; i >= 0; i--) {
            int index = i % n;

            while (!indices.empty() && workloads[indices.top() % n] <= workloads[index]) {
                indices.pop();
            }

            if (i < n && !indices.empty()) {
                wait[index] = indices.top() - i;
            }

            indices.push(i);
        }

        vector<int> result;

        for (int index : queries) {
            result.push_back(wait[index]);
        }

        return result;
    }
};`
  }
};
