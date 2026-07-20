export const slidingWindowMaximumSolutions = {
  "sliding-window-maximum-e1": {
    python: `def simple_window_maximum(temperatures, k):
    n = len(temperatures)
    result = []
    window = []

    for i in range(n):
        while window and window[0] < i - k + 1:
            window.pop(0)

        while window and temperatures[window[-1]] < temperatures[i]:
            window.pop()

        window.append(i)

        if i >= k - 1:
            result.append(temperatures[window[0]])

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] simpleWindowMaximum(int[] temperatures, int k) {
        int n = temperatures.length;
        int[] result = new int[n - k + 1];
        Deque<Integer> window = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {
            while (!window.isEmpty() && window.peek() < i - k + 1) {
                window.poll();
            }

            while (!window.isEmpty() && temperatures[window.peekLast()] < temperatures[i]) {
                window.pollLast();
            }

            window.offer(i);

            if (i >= k - 1) {
                result[i - k + 1] = temperatures[window.peek()];
            }
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

void simpleWindowMaximum(int temperatures[], int n, int k, int result[]) {
    int window[n];
    int front = 0, rear = 0;

    for (int i = 0; i < n; i++) {
        while (front < rear && window[front] < i - k + 1) {
            front++;
        }

        while (front < rear && temperatures[window[rear - 1]] < temperatures[i]) {
            rear--;
        }

        window[rear++] = i;

        if (i >= k - 1) {
            result[i - k + 1] = temperatures[window[front]];
        }
    }
}`,

    cpp: `#include <vector>
#include <deque>
using namespace std;

class Solution {
public:
    vector<int> simpleWindowMaximum(vector<int>& temperatures, int k) {
        int n = temperatures.size();
        vector<int> result;
        deque<int> window;

        for (int i = 0; i < n; i++) {
            while (!window.empty() && window.front() < i - k + 1) {
                window.pop_front();
            }

            while (!window.empty() && temperatures[window.back()] < temperatures[i]) {
                window.pop_back();
            }

            window.push_back(i);

            if (i >= k - 1) {
                result.push_back(temperatures[window.front()]);
            }
        }

        return result;
    }
};`
  },
  "sliding-window-maximum-e2": {
    python: `def stock_price_window(prices, k):
    n = len(prices)
    result = []
    window = []

    for i in range(n):
        while window and window[0] < i - k + 1:
            window.pop(0)

        while window and prices[window[-1]] < prices[i]:
            window.pop()

        window.append(i)

        if i >= k - 1:
            result.append(prices[window[0]])

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] stockPriceWindow(int[] prices, int k) {
        int n = prices.length;
        int[] result = new int[n - k + 1];
        Deque<Integer> window = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {
            while (!window.isEmpty() && window.peek() < i - k + 1) {
                window.poll();
            }

            while (!window.isEmpty() && prices[window.peekLast()] < prices[i]) {
                window.pollLast();
            }

            window.offer(i);

            if (i >= k - 1) {
                result[i - k + 1] = prices[window.peek()];
            }
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

void stockPriceWindow(int prices[], int n, int k, int result[]) {
    int window[n];
    int front = 0, rear = 0;

    for (int i = 0; i < n; i++) {
        while (front < rear && window[front] < i - k + 1) {
            front++;
        }

        while (front < rear && prices[window[rear - 1]] < prices[i]) {
            rear--;
        }

        window[rear++] = i;

        if (i >= k - 1) {
            result[i - k + 1] = prices[window[front]];
        }
    }
}`,

    cpp: `#include <vector>
#include <deque>
using namespace std;

class Solution {
public:
    vector<int> stockPriceWindow(vector<int>& prices, int k) {
        int n = prices.size();
        vector<int> result;
        deque<int> window;

        for (int i = 0; i < n; i++) {
            while (!window.empty() && window.front() < i - k + 1) {
                window.pop_front();
            }

            while (!window.empty() && prices[window.back()] < prices[i]) {
                window.pop_back();
            }

            window.push_back(i);

            if (i >= k - 1) {
                result.push_back(prices[window.front()]);
            }
        }

        return result;
    }
};`
  },
  "sliding-window-maximum-e3": {
    python: `def sensor_reading_maximum(readings, k):
    n = len(readings)
    result = []
    window = []

    for i in range(n):
        while window and window[0] < i - k + 1:
            window.pop(0)

        while window and readings[window[-1]] < readings[i]:
            window.pop()

        window.append(i)

        if i >= k - 1:
            result.append(readings[window[0]])

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] sensorReadingMaximum(int[] readings, int k) {
        int n = readings.length;
        int[] result = new int[n - k + 1];
        Deque<Integer> window = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {
            while (!window.isEmpty() && window.peek() < i - k + 1) {
                window.poll();
            }

            while (!window.isEmpty() && readings[window.peekLast()] < readings[i]) {
                window.pollLast();
            }

            window.offer(i);

            if (i >= k - 1) {
                result[i - k + 1] = readings[window.peek()];
            }
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

void sensorReadingMaximum(int readings[], int n, int k, int result[]) {
    int window[n];
    int front = 0, rear = 0;

    for (int i = 0; i < n; i++) {
        while (front < rear && window[front] < i - k + 1) {
            front++;
        }

        while (front < rear && readings[window[rear - 1]] < readings[i]) {
            rear--;
        }

        window[rear++] = i;

        if (i >= k - 1) {
            result[i - k + 1] = readings[window[front]];
        }
    }
}`,

    cpp: `#include <vector>
#include <deque>
using namespace std;

class Solution {
public:
    vector<int> sensorReadingMaximum(vector<int>& readings, int k) {
        int n = readings.size();
        vector<int> result;
        deque<int> window;

        for (int i = 0; i < n; i++) {
            while (!window.empty() && window.front() < i - k + 1) {
                window.pop_front();
            }

            while (!window.empty() && readings[window.back()] < readings[i]) {
                window.pop_back();
            }

            window.push_back(i);

            if (i >= k - 1) {
                result.push_back(readings[window.front()]);
            }
        }

        return result;
    }
};`
  },
  "sliding-window-maximum-e4": {
    python: `def network_traffic_peak(traffic, k):
    n = len(traffic)
    result = []
    window = []

    for i in range(n):
        while window and window[0] < i - k + 1:
            window.pop(0)

        while window and traffic[window[-1]] < traffic[i]:
            window.pop()

        window.append(i)

        if i >= k - 1:
            result.append(traffic[window[0]])

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] networkTrafficPeak(int[] traffic, int k) {
        int n = traffic.length;
        int[] result = new int[n - k + 1];
        Deque<Integer> window = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {
            while (!window.isEmpty() && window.peek() < i - k + 1) {
                window.poll();
            }

            while (!window.isEmpty() && traffic[window.peekLast()] < traffic[i]) {
                window.pollLast();
            }

            window.offer(i);

            if (i >= k - 1) {
                result[i - k + 1] = traffic[window.peek()];
            }
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

void networkTrafficPeak(int traffic[], int n, int k, int result[]) {
    int window[n];
    int front = 0, rear = 0;

    for (int i = 0; i < n; i++) {
        while (front < rear && window[front] < i - k + 1) {
            front++;
        }

        while (front < rear && traffic[window[rear - 1]] < traffic[i]) {
            rear--;
        }

        window[rear++] = i;

        if (i >= k - 1) {
            result[i - k + 1] = traffic[window[front]];
        }
    }
}`,

    cpp: `#include <vector>
#include <deque>
using namespace std;

class Solution {
public:
    vector<int> networkTrafficPeak(vector<int>& traffic, int k) {
        int n = traffic.size();
        vector<int> result;
        deque<int> window;

        for (int i = 0; i < n; i++) {
            while (!window.empty() && window.front() < i - k + 1) {
                window.pop_front();
            }

            while (!window.empty() && traffic[window.back()] < traffic[i]) {
                window.pop_back();
            }

            window.push_back(i);

            if (i >= k - 1) {
                result.push_back(traffic[window.front()]);
            }
        }

        return result;
    }
};`
  },
  "sliding-window-maximum-e5": {
    python: `def player_score_window(scores, k):
    n = len(scores)
    result = []
    window = []

    for i in range(n):
        while window and window[0] < i - k + 1:
            window.pop(0)

        while window and scores[window[-1]] < scores[i]:
            window.pop()

        window.append(i)

        if i >= k - 1:
            result.append(scores[window[0]])

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] playerScoreWindow(int[] scores, int k) {
        int n = scores.length;
        int[] result = new int[n - k + 1];
        Deque<Integer> window = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {
            while (!window.isEmpty() && window.peek() < i - k + 1) {
                window.poll();
            }

            while (!window.isEmpty() && scores[window.peekLast()] < scores[i]) {
                window.pollLast();
            }

            window.offer(i);

            if (i >= k - 1) {
                result[i - k + 1] = scores[window.peek()];
            }
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

void playerScoreWindow(int scores[], int n, int k, int result[]) {
    int window[n];
    int front = 0, rear = 0;

    for (int i = 0; i < n; i++) {
        while (front < rear && window[front] < i - k + 1) {
            front++;
        }

        while (front < rear && scores[window[rear - 1]] < scores[i]) {
            rear--;
        }

        window[rear++] = i;

        if (i >= k - 1) {
            result[i - k + 1] = scores[window[front]];
        }
    }
}`,

    cpp: `#include <vector>
#include <deque>
using namespace std;

class Solution {
public:
    vector<int> playerScoreWindow(vector<int>& scores, int k) {
        int n = scores.size();
        vector<int> result;
        deque<int> window;

        for (int i = 0; i < n; i++) {
            while (!window.empty() && window.front() < i - k + 1) {
                window.pop_front();
            }

            while (!window.empty() && scores[window.back()] < scores[i]) {
                window.pop_back();
            }

            window.push_back(i);

            if (i >= k - 1) {
                result.push_back(scores[window.front()]);
            }
        }

        return result;
    }
};`
  },
  "sliding-window-maximum-m1": {
    python: `def temperature_monitoring(temperatures, k):
    n = len(temperatures)
    result = []
    window = []

    for i in range(n):
        while window and window[0] < i - k + 1:
            window.pop(0)

        while window and temperatures[window[-1]] < temperatures[i]:
            window.pop()

        window.append(i)

        if i >= k - 1:
            result.append(temperatures[window[0]])

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] temperatureMonitoring(int[] temperatures, int k) {
        int n = temperatures.length;
        int[] result = new int[n - k + 1];
        Deque<Integer> window = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {
            while (!window.isEmpty() && window.peek() < i - k + 1) {
                window.poll();
            }

            while (!window.isEmpty() && temperatures[window.peekLast()] < temperatures[i]) {
                window.pollLast();
            }

            window.offer(i);

            if (i >= k - 1) {
                result[i - k + 1] = temperatures[window.peek()];
            }
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

void temperatureMonitoring(int temperatures[], int n, int k, int result[]) {
    int window[n];
    int front = 0, rear = 0;

    for (int i = 0; i < n; i++) {
        while (front < rear && window[front] < i - k + 1) {
            front++;
        }

        while (front < rear && temperatures[window[rear - 1]] < temperatures[i]) {
            rear--;
        }

        window[rear++] = i;

        if (i >= k - 1) {
            result[i - k + 1] = temperatures[window[front]];
        }
    }
}`,

    cpp: `#include <vector>
#include <deque>
using namespace std;

class Solution {
public:
    vector<int> temperatureMonitoring(vector<int>& temperatures, int k) {
        int n = temperatures.size();
        vector<int> result;
        deque<int> window;

        for (int i = 0; i < n; i++) {
            while (!window.empty() && window.front() < i - k + 1) {
                window.pop_front();
            }

            while (!window.empty() && temperatures[window.back()] < temperatures[i]) {
                window.pop_back();
            }

            window.push_back(i);

            if (i >= k - 1) {
                result.push_back(temperatures[window.front()]);
            }
        }

        return result;
    }
};`
  },
  "sliding-window-maximum-m2": {
    python: `def stock_price_analysis(prices, queries):
    n = len(prices)
    k = queries[0]
    result = []
    window = []

    for i in range(n):
        while window and window[0] < i - k + 1:
            window.pop(0)

        while window and prices[window[-1]] < prices[i]:
            window.pop()

        window.append(i)

        if i >= k - 1:
            result.append(prices[window[0]])

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] stockPriceAnalysis(int[] prices, int[] queries) {
        int n = prices.length;
        int k = queries[0];
        int[] result = new int[n - k + 1];
        Deque<Integer> window = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {
            while (!window.isEmpty() && window.peek() < i - k + 1) {
                window.poll();
            }

            while (!window.isEmpty() && prices[window.peekLast()] < prices[i]) {
                window.pollLast();
            }

            window.offer(i);

            if (i >= k - 1) {
                result[i - k + 1] = prices[window.peek()];
            }
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

void stockPriceAnalysis(int prices[], int n, int queries[], int q, int result[]) {
    int k = queries[0];
    int window[n];
    int front = 0, rear = 0;

    for (int i = 0; i < n; i++) {
        while (front < rear && window[front] < i - k + 1) {
            front++;
        }

        while (front < rear && prices[window[rear - 1]] < prices[i]) {
            rear--;
        }

        window[rear++] = i;

        if (i >= k - 1) {
            result[i - k + 1] = prices[window[front]];
        }
    }
}`,

    cpp: `#include <vector>
#include <deque>
using namespace std;

class Solution {
public:
    vector<int> stockPriceAnalysis(vector<int>& prices, vector<int>& queries) {
        int n = prices.size();
        int k = queries[0];
        vector<int> result;
        deque<int> window;

        for (int i = 0; i < n; i++) {
            while (!window.empty() && window.front() < i - k + 1) {
                window.pop_front();
            }

            while (!window.empty() && prices[window.back()] < prices[i]) {
                window.pop_back();
            }

            window.push_back(i);

            if (i >= k - 1) {
                result.push_back(prices[window.front()]);
            }
        }

        return result;
    }
};`
  },
  "sliding-window-maximum-m3": {
    python: `def signal_strength_window(strengths, k):
    n = len(strengths)
    result = []
    window = []

    for i in range(n):
        while window and window[0] < i - k + 1:
            window.pop(0)

        while window and strengths[window[-1]] < strengths[i]:
            window.pop()

        window.append(i)

        if i >= k - 1:
            result.append(strengths[window[0]])

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] signalStrengthWindow(int[] strengths, int k) {
        int n = strengths.length;
        int[] result = new int[n - k + 1];
        Deque<Integer> window = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {
            while (!window.isEmpty() && window.peek() < i - k + 1) {
                window.poll();
            }

            while (!window.isEmpty() && strengths[window.peekLast()] < strengths[i]) {
                window.pollLast();
            }

            window.offer(i);

            if (i >= k - 1) {
                result[i - k + 1] = strengths[window.peek()];
            }
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

void signalStrengthWindow(int strengths[], int n, int k, int result[]) {
    int window[n];
    int front = 0, rear = 0;

    for (int i = 0; i < n; i++) {
        while (front < rear && window[front] < i - k + 1) {
            front++;
        }

        while (front < rear && strengths[window[rear - 1]] < strengths[i]) {
            rear--;
        }

        window[rear++] = i;

        if (i >= k - 1) {
            result[i - k + 1] = strengths[window[front]];
        }
    }
}`,

    cpp: `#include <vector>
#include <deque>
using namespace std;

class Solution {
public:
    vector<int> signalStrengthWindow(vector<int>& strengths, int k) {
        int n = strengths.size();
        vector<int> result;
        deque<int> window;

        for (int i = 0; i < n; i++) {
            while (!window.empty() && window.front() < i - k + 1) {
                window.pop_front();
            }

            while (!window.empty() && strengths[window.back()] < strengths[i]) {
                window.pop_back();
            }

            window.push_back(i);

            if (i >= k - 1) {
                result.push_back(strengths[window.front()]);
            }
        }

        return result;
    }
};`
  },
  "sliding-window-maximum-m4": {
    python: `def website_traffic_analysis(visits, k):
    n = len(visits)
    result = []
    window = []

    for i in range(n):
        while window and window[0] < i - k + 1:
            window.pop(0)

        while window and visits[window[-1]] < visits[i]:
            window.pop()

        window.append(i)

        if i >= k - 1:
            result.append(visits[window[0]])

    total = sum(result)
    return [result, total]`,

    java: `import java.util.*;

class Solution {
    public int[] websiteTrafficAnalysis(int[] visits, int k) {
        int n = visits.length;
        int[] maxValues = new int[n - k + 1];
        Deque<Integer> window = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {
            while (!window.isEmpty() && window.peek() < i - k + 1) {
                window.poll();
            }

            while (!window.isEmpty() && visits[window.peekLast()] < visits[i]) {
                window.pollLast();
            }

            window.offer(i);

            if (i >= k - 1) {
                maxValues[i - k + 1] = visits[window.peek()];
            }
        }

        int total = 0;
        for (int val : maxValues) {
            total += val;
        }

        int[] result = new int[maxValues.length + 1];
        for (int i = 0; i < maxValues.length; i++) {
            result[i] = maxValues[i];
        }
        result[maxValues.length] = total;

        return result;
    }
}`,

    c: `#include <stdio.h>

void websiteTrafficAnalysis(int visits[], int n, int k, int result[]) {
    int window[n];
    int front = 0, rear = 0;
    int maxValues[n - k + 1];
    int total = 0;

    for (int i = 0; i < n; i++) {
        while (front < rear && window[front] < i - k + 1) {
            front++;
        }

        while (front < rear && visits[window[rear - 1]] < visits[i]) {
            rear--;
        }

        window[rear++] = i;

        if (i >= k - 1) {
            maxValues[i - k + 1] = visits[window[front]];
            total += maxValues[i - k + 1];
        }
    }

    for (int i = 0; i < n - k + 1; i++) {
        result[i] = maxValues[i];
    }
    result[n - k + 1] = total;
}`,

    cpp: `#include <vector>
#include <deque>
using namespace std;

class Solution {
public:
    vector<int> websiteTrafficAnalysis(vector<int>& visits, int k) {
        int n = visits.size();
        vector<int> maxValues;
        deque<int> window;

        for (int i = 0; i < n; i++) {
            while (!window.empty() && window.front() < i - k + 1) {
                window.pop_front();
            }

            while (!window.empty() && visits[window.back()] < visits[i]) {
                window.pop_back();
            }

            window.push_back(i);

            if (i >= k - 1) {
                maxValues.push_back(visits[window.front()]);
            }
        }

        int total = 0;
        for (int val : maxValues) {
            total += val;
        }

        vector<int> result;
        for (int val : maxValues) {
            result.push_back(val);
        }
        result.push_back(total);

        return result;
    }
};`
  },
  "sliding-window-maximum-m5": {
    python: `def production_rate_window(rates, k, factor):
    n = len(rates)
    result = []
    window = []

    for i in range(n):
        while window and window[0] < i - k + 1:
            window.pop(0)

        while window and rates[window[-1]] < rates[i]:
            window.pop()

        window.append(i)

        if i >= k - 1:
            result.append(rates[window[0]])

    total = sum(result) * factor
    return total`,

    java: `import java.util.*;

class Solution {
    public int productionRateWindow(int[] rates, int k, int factor) {
        int n = rates.length;
        int[] maxValues = new int[n - k + 1];
        Deque<Integer> window = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {
            while (!window.isEmpty() && window.peek() < i - k + 1) {
                window.poll();
            }

            while (!window.isEmpty() && rates[window.peekLast()] < rates[i]) {
                window.pollLast();
            }

            window.offer(i);

            if (i >= k - 1) {
                maxValues[i - k + 1] = rates[window.peek()];
            }
        }

        int total = 0;
        for (int val : maxValues) {
            total += val;
        }

        return total * factor;
    }
}`,

    c: `#include <stdio.h>

int productionRateWindow(int rates[], int n, int k, int factor) {
    int window[n];
    int front = 0, rear = 0;
    int total = 0;

    for (int i = 0; i < n; i++) {
        while (front < rear && window[front] < i - k + 1) {
            front++;
        }

        while (front < rear && rates[window[rear - 1]] < rates[i]) {
            rear--;
        }

        window[rear++] = i;

        if (i >= k - 1) {
            total += rates[window[front]];
        }
    }

    return total * factor;
}`,

    cpp: `#include <vector>
#include <deque>
using namespace std;

class Solution {
public:
    int productionRateWindow(vector<int>& rates, int k, int factor) {
        int n = rates.size();
        vector<int> maxValues;
        deque<int> window;

        for (int i = 0; i < n; i++) {
            while (!window.empty() && window.front() < i - k + 1) {
                window.pop_front();
            }

            while (!window.empty() && rates[window.back()] < rates[i]) {
                window.pop_back();
            }

            window.push_back(i);

            if (i >= k - 1) {
                maxValues.push_back(rates[window.front()]);
            }
        }

        int total = 0;
        for (int val : maxValues) {
            total += val;
        }

        return total * factor;
    }
};`
  },
  "sliding-window-maximum-h1": {
    python: `def circular_temperature_window(temperatures, k):
    n = len(temperatures)
    if n == 0:
        return []
    result = []
    window = []

    for i in range(2 * n - 1, -1, -1):
        index = i % n

        while window and window[-1] < index:
            window.pop()

        while window and temperatures[window[-1] % n] <= temperatures[index]:
            window.pop()

        window.append(i)

        if i < n:
            result.append(temperatures[window[0] % n])

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] circularTemperatureWindow(int[] temperatures, int k) {
        int n = temperatures.length;
        if (n == 0) return new int[0];
        int[] result = new int[n];
        Deque<Integer> window = new ArrayDeque<>();

        for (int i = 2 * n - 1; i >= 0; i--) {
            int index = i % n;

            while (!window.isEmpty() && window.peekLast() < index) {
                window.pollLast();
            }

            while (!window.isEmpty() && temperatures[window.peekLast() % n] <= temperatures[index]) {
                window.pollLast();
            }

            window.offer(i);

            if (i < n) {
                result[i] = temperatures[window.peek() % n];
            }
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

void circularTemperatureWindow(int temperatures[], int n, int k, int result[]) {
    int window[2 * n];
    int front = 0, rear = 0;

    for (int i = 0; i < n; i++) {
        result[i] = 0;
    }

    for (int i = 2 * n - 1; i >= 0; i--) {
        int index = i % n;

        while (front < rear && window[rear - 1] < index) {
            rear--;
        }

        while (front < rear && temperatures[window[rear - 1] % n] <= temperatures[index]) {
            rear--;
        }

        window[rear++] = i;

        if (i < n) {
            result[i] = temperatures[window[front] % n];
        }
    }
}`,

    cpp: `#include <vector>
#include <deque>
using namespace std;

class Solution {
public:
    vector<int> circularTemperatureWindow(vector<int>& temperatures, int k) {
        int n = temperatures.size();
        if (n == 0) return {};
        vector<int> result(n);
        deque<int> window;

        for (int i = 2 * n - 1; i >= 0; i--) {
            int index = i % n;

            while (!window.empty() && window.back() < index) {
                window.pop_back();
            }

            while (!window.empty() && temperatures[window.back() % n] <= temperatures[index]) {
                window.pop_back();
            }

            window.push_back(i);

            if (i < n) {
                result[i] = temperatures[window.front() % n];
            }
        }

        return result;
    }
};`
  },
  "sliding-window-maximum-h2": {
    python: `def multiple_data_stream_analysis(streams, k):
    maxResult = -1
    maxStream = 0

    for s in range(len(streams)):
        n = len(streams[s])
        window = []
        streamMax = -1

        for i in range(n):
            while window and window[0] < i - k + 1:
                window.pop(0)

            while window and streams[s][window[-1]] < streams[s][i]:
                window.pop()

            window.append(i)

            if i >= k - 1:
                if streams[s][window[0]] > streamMax:
                    streamMax = streams[s][window[0]]

        if streamMax > maxResult:
            maxResult = streamMax
            maxStream = s

    return [maxStream, maxResult]`,

    java: `import java.util.*;

class Solution {
    public int[] multipleDataStreamAnalysis(int[][] streams, int k) {
        int maxResult = -1;
        int maxStream = 0;

        for (int s = 0; s < streams.length; s++) {
            int n = streams[s].length;
            Deque<Integer> window = new ArrayDeque<>();
            int streamMax = -1;

            for (int i = 0; i < n; i++) {
                while (!window.isEmpty() && window.peek() < i - k + 1) {
                    window.poll();
                }

                while (!window.isEmpty() && streams[s][window.peekLast()] < streams[s][i]) {
                    window.pollLast();
                }

                window.offer(i);

                if (i >= k - 1) {
                    if (streams[s][window.peek()] > streamMax) {
                        streamMax = streams[s][window.peek()];
                    }
                }
            }

            if (streamMax > maxResult) {
                maxResult = streamMax;
                maxStream = s;
            }
        }

        return new int[]{maxStream, maxResult};
    }
}`,

    c: `#include <stdio.h>

void multipleDataStreamAnalysis(int streams[][1000], int s, int n, int k, int result[]) {
    int maxResult = -1;
    int maxStream = 0;

    for (int streamIdx = 0; streamIdx < s; streamIdx++) {
        int window[1000];
        int front = 0, rear = 0;
        int streamMax = -1;

        for (int i = 0; i < n; i++) {
            while (front < rear && window[front] < i - k + 1) {
                front++;
            }

            while (front < rear && streams[streamIdx][window[rear - 1]] < streams[streamIdx][i]) {
                rear--;
            }

            window[rear++] = i;

            if (i >= k - 1) {
                if (streams[streamIdx][window[front]] > streamMax) {
                    streamMax = streams[streamIdx][window[front]];
                }
            }
        }

        if (streamMax > maxResult) {
            maxResult = streamMax;
            maxStream = streamIdx;
        }
    }

    result[0] = maxStream;
    result[1] = maxResult;
}`,

    cpp: `#include <vector>
#include <deque>
using namespace std;

class Solution {
public:
    vector<int> multipleDataStreamAnalysis(vector<vector<int>>& streams, int k) {
        int maxResult = -1;
        int maxStream = 0;

        for (int s = 0; s < streams.size(); s++) {
            int n = streams[s].size();
            deque<int> window;
            int streamMax = -1;

            for (int i = 0; i < n; i++) {
                while (!window.empty() && window.front() < i - k + 1) {
                    window.pop_front();
                }

                while (!window.empty() && streams[s][window.back()] < streams[s][i]) {
                    window.pop_back();
                }

                window.push_back(i);

                if (i >= k - 1) {
                    if (streams[s][window.front()] > streamMax) {
                        streamMax = streams[s][window.front()];
                    }
                }
            }

            if (streamMax > maxResult) {
                maxResult = streamMax;
                maxStream = s;
            }
        }

        return {maxStream, maxResult};
    }
};`
  },
  "sliding-window-maximum-h3": {
    python: `def dynamic_window_updates(values, updates, k):
    result = []

    for update in updates:
        values[update[0]] = update[1]
        n = len(values)
        window = []
        currentResult = []

        for i in range(n):
            while window and window[0] < i - k + 1:
                window.pop(0)

            while window and values[window[-1]] < values[i]:
                window.pop()

            window.append(i)

            if i >= k - 1:
                currentResult.append(values[window[0]])

        result.append(currentResult)

    return result`,

    java: `import java.util.*;

class Solution {
    public int[][] dynamicWindowUpdates(int[] values, int[][] updates, int k) {
        List<int[]> result = new ArrayList<>();

        for (int[] update : updates) {
            values[update[0]] = update[1];
            int n = values.length;
            Deque<Integer> window = new ArrayDeque<>();
            int[] currentResult = new int[n - k + 1];

            for (int i = 0; i < n; i++) {
                while (!window.isEmpty() && window.peek() < i - k + 1) {
                    window.poll();
                }

                while (!window.isEmpty() && values[window.peekLast()] < values[i]) {
                    window.pollLast();
                }

                window.offer(i);

                if (i >= k - 1) {
                    currentResult[i - k + 1] = values[window.peek()];
                }
            }

            result.add(currentResult);
        }

        return result.toArray(new int[0][]);
    }
}`,

    c: `#include <stdio.h>

void dynamicWindowUpdates(int values[], int n, int updates[][2], int u, int k, int result[][1000]) {
    for (int j = 0; j < u; j++) {
        values[updates[j][0]] = updates[j][1];
        int window[n];
        int front = 0, rear = 0;

        for (int i = 0; i < n; i++) {
            while (front < rear && window[front] < i - k + 1) {
                front++;
            }

            while (front < rear && values[window[rear - 1]] < values[i]) {
                rear--;
            }

            window[rear++] = i;

            if (i >= k - 1) {
                result[j][i - k + 1] = values[window[front]];
            }
        }
    }
}`,

    cpp: `#include <vector>
#include <deque>
using namespace std;

class Solution {
public:
    vector<vector<int>> dynamicWindowUpdates(vector<int>& values, vector<vector<int>>& updates, int k) {
        vector<vector<int>> result;

        for (auto& update : updates) {
            values[update[0]] = update[1];
            int n = values.size();
            deque<int> window;
            vector<int> currentResult;

            for (int i = 0; i < n; i++) {
                while (!window.empty() && window.front() < i - k + 1) {
                    window.pop_front();
                }

                while (!window.empty() && values[window.back()] < values[i]) {
                    window.pop_back();
                }

                window.push_back(i);

                if (i >= k - 1) {
                    currentResult.push_back(values[window.front()]);
                }
            }

            result.push_back(currentResult);
        }

        return result;
    }
};`
  },
  "sliding-window-maximum-h4": {
    python: `def window_maximum_with_constraints(values, k, m):
    n = len(values)
    result = []
    window = []

    for i in range(n):
        while window and window[0] < i - k + 1:
            window.pop(0)

        while window and values[window[-1]] < values[i]:
            window.pop()

        window.append(i)

        if i >= k - 1:
            result.append(values[window[0]])

    return sum(result)`,

    java: `import java.util.*;

class Solution {
    public int windowMaximumWithConstraints(int[] values, int k, int m) {
        int n = values.length;
        int[] maxValues = new int[n - k + 1];
        Deque<Integer> window = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {
            while (!window.isEmpty() && window.peek() < i - k + 1) {
                window.poll();
            }

            while (!window.isEmpty() && values[window.peekLast()] < values[i]) {
                window.pollLast();
            }

            window.offer(i);

            if (i >= k - 1) {
                maxValues[i - k + 1] = values[window.peek()];
            }
        }

        int total = 0;
        for (int val : maxValues) {
            total += val;
        }

        return total;
    }
}`,

    c: `#include <stdio.h>

int windowMaximumWithConstraints(int values[], int n, int k, int m) {
    int window[n];
    int front = 0, rear = 0;
    int total = 0;

    for (int i = 0; i < n; i++) {
        while (front < rear && window[front] < i - k + 1) {
            front++;
        }

        while (front < rear && values[window[rear - 1]] < values[i]) {
            rear--;
        }

        window[rear++] = i;

        if (i >= k - 1) {
            total += values[window[front]];
        }
    }

    return total;
}`,

    cpp: `#include <vector>
#include <deque>
using namespace std;

class Solution {
public:
    int windowMaximumWithConstraints(vector<int>& values, int k, int m) {
        int n = values.size();
        vector<int> maxValues;
        deque<int> window;

        for (int i = 0; i < n; i++) {
            while (!window.empty() && window.front() < i - k + 1) {
                window.pop_front();
            }

            while (!window.empty() && values[window.back()] < values[i]) {
                window.pop_back();
            }

            window.push_back(i);

            if (i >= k - 1) {
                maxValues.push_back(values[window.front()]);
            }
        }

        int total = 0;
        for (int val : maxValues) {
            total += val;
        }

        return total;
    }
};`
  },
  "sliding-window-maximum-h5": {
    python: `def sliding_window_segmentation(values, k):
    n = len(values)
    result = float('inf')

    for i in range(1, n):
        leftMax = max(values[:i])
        rightMax = max(values[i:])
        result = min(result, max(leftMax, rightMax))

    if n > 0:
        result = min(result, max(values))

    return result`,

    java: `import java.util.*;

class Solution {
    public int slidingWindowSegmentation(int[] values, int k) {
        int n = values.length;
        int result = Integer.MAX_VALUE;

        for (int i = 1; i < n; i++) {
            int leftMax = 0;
            for (int j = 0; j < i; j++) {
                if (values[j] > leftMax) {
                    leftMax = values[j];
                }
            }

            int rightMax = 0;
            for (int j = i; j < n; j++) {
                if (values[j] > rightMax) {
                    rightMax = values[j];
                }
            }

            result = Math.min(result, Math.max(leftMax, rightMax));
        }

        if (n > 0) {
            int max = 0;
            for (int val : values) {
                if (val > max) {
                    max = val;
                }
            }
            result = Math.min(result, max);
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

int slidingWindowSegmentation(int values[], int n, int k) {
    int result = 1000000000;

    for (int i = 1; i < n; i++) {
        int leftMax = 0;
        for (int j = 0; j < i; j++) {
            if (values[j] > leftMax) {
                leftMax = values[j];
            }
        }

        int rightMax = 0;
        for (int j = i; j < n; j++) {
            if (values[j] > rightMax) {
                rightMax = values[j];
            }
        }

        if (leftMax > rightMax) {
            if (leftMax < result) result = leftMax;
        } else {
            if (rightMax < result) result = rightMax;
        }
    }

    if (n > 0) {
        int max = 0;
        for (int i = 0; i < n; i++) {
            if (values[i] > max) {
                max = values[i];
            }
        }
        if (max < result) result = max;
    }

    return result;
}`,

    cpp: `#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int slidingWindowSegmentation(vector<int>& values, int k) {
        int n = values.size();
        int result = INT_MAX;

        for (int i = 1; i < n; i++) {
            int leftMax = *max_element(values.begin(), values.begin() + i);
            int rightMax = *max_element(values.begin() + i, values.end());
            result = min(result, max(leftMax, rightMax));
        }

        if (n > 0) {
            int max = *max_element(values.begin(), values.end());
            result = min(result, max);
        }

        return result;
    }
};`
  }
};