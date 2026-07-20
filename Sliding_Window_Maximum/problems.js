export const slidingWindowMaximumProblems = [
  {
    id: "sliding-window-maximum-e1",
    title: "Simple Window Maximum",
    difficulty: "Easy",
    description:
      "Given an array temperatures where temperatures[i] represents the temperature on day i, return an array where each position contains the maximum temperature in the last k days. Each day has unit width.",
    constraints: [
      "1 <= temperatures.length <= 100",
      "1 <= k <= temperatures.length",
      "0 <= temperatures[i] <= 100"
    ],
    examples: [
      {
        input: "temperatures = [1, 3, -1, -3, 5, 3, 6, 7], k = 3",
        output: "[3, 3, 5, 5, 6, 7]",
        explanation:
          "The maximum temperature in each window of 3 days is computed."
      },
      {
        input: "temperatures = [7, 2, 4], k = 2",
        output: "[7, 4]",
        explanation:
          "The maximum temperature in each window of 2 days is computed."
      }
    ],
    testCases: [
      {
        input: "temperatures = [1,3,-1,-3,5,3,6,7], k = 3",
        expectedOutput: "[3,3,5,5,6,7]",
        hidden: false
      },
      {
        input: "temperatures = [7,2,4], k = 2",
        expectedOutput: "[7,4]",
        hidden: false
      },
      {
        input: "temperatures = [1,2,3,4,5], k = 1",
        expectedOutput: "[1,2,3,4,5]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def simple_window_maximum(temperatures, k):
    pass`,

      java: `class Solution {
    public int[] simpleWindowMaximum(int[] temperatures, int k) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void simpleWindowMaximum(int temperatures[], int n, int k, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> simpleWindowMaximum(vector<int>& temperatures, int k) {
        return {};
    }
};`
    }
  },
  {
    id: "sliding-window-maximum-e2",
    title: "Stock Price Window",
    difficulty: "Easy",
    description:
      "Given daily stock prices, return the maximum price in each window of k consecutive days. This helps identify peak prices in rolling periods.",
    constraints: [
      "1 <= prices.length <= 100",
      "1 <= k <= prices.length",
      "1 <= prices[i] <= 100"
    ],
    examples: [
      {
        input: "prices = [100, 120, 110, 130, 140], k = 2",
        output: "[120, 120, 130, 140]",
        explanation:
          "The maximum price in each 2-day window is computed."
      },
      {
        input: "prices = [50, 40, 30], k = 3",
        output: "[50]",
        explanation:
          "The maximum price in the 3-day window is 50."
      }
    ],
    testCases: [
      {
        input: "prices = [100,120,110,130,140], k = 2",
        expectedOutput: "[120,120,130,140]",
        hidden: false
      },
      {
        input: "prices = [50,40,30], k = 3",
        expectedOutput: "[50]",
        hidden: false
      },
      {
        input: "prices = [1,2,3,4,5], k = 1",
        expectedOutput: "[1,2,3,4,5]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def stock_price_window(prices, k):
    pass`,

      java: `class Solution {
    public int[] stockPriceWindow(int[] prices, int k) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void stockPriceWindow(int prices[], int n, int k, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> stockPriceWindow(vector<int>& prices, int k) {
        return {};
    }
};`
    }
  },
  {
    id: "sliding-window-maximum-e3",
    title: "Sensor Reading Maximum",
    difficulty: "Easy",
    description:
      "A sensor records readings at regular intervals. Given the readings and a window size, return the maximum reading in each window. This helps identify peak sensor values.",
    constraints: [
      "1 <= readings.length <= 100",
      "1 <= k <= readings.length",
      "0 <= readings[i] <= 100"
    ],
    examples: [
      {
        input: "readings = [4, 2, 8, 1, 9, 3], k = 3",
        output: "[8, 9, 9, 9]",
        explanation:
          "The maximum reading in each 3-unit window is computed."
      },
      {
        input: "readings = [5, 5, 5], k = 2",
        output: "[5, 5]",
        explanation:
          "All windows have maximum 5."
      }
    ],
    testCases: [
      {
        input: "readings = [4,2,8,1,9,3], k = 3",
        expectedOutput: "[8,9,9,9]",
        hidden: false
      },
      {
        input: "readings = [5,5,5], k = 2",
        expectedOutput: "[5,5]",
        hidden: false
      },
      {
        input: "readings = [1,2,3], k = 1",
        expectedOutput: "[1,2,3]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def sensor_reading_maximum(readings, k):
    pass`,

      java: `class Solution {
    public int[] sensorReadingMaximum(int[] readings, int k) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void sensorReadingMaximum(int readings[], int n, int k, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> sensorReadingMaximum(vector<int>& readings, int k) {
        return {};
    }
};`
    }
  },
  {
    id: "sliding-window-maximum-e4",
    title: "Network Traffic Peak",
    difficulty: "Easy",
    description:
      "Network traffic is recorded in packets per second. Given the traffic data and a window size, return the maximum traffic in each window. This helps identify traffic spikes.",
    constraints: [
      "1 <= traffic.length <= 100",
      "1 <= k <= traffic.length",
      "0 <= traffic[i] <= 100"
    ],
    examples: [
      {
        input: "traffic = [10, 20, 30, 25, 40, 15], k = 4",
        output: "[30, 40, 40]",
        explanation:
          "The maximum traffic in each 4-second window is computed."
      },
      {
        input: "traffic = [5, 4, 3, 2, 1], k = 5",
        output: "[5]",
        explanation:
          "The maximum traffic in the 5-second window is 5."
      }
    ],
    testCases: [
      {
        input: "traffic = [10,20,30,25,40,15], k = 4",
        expectedOutput: "[30,40,40]",
        hidden: false
      },
      {
        input: "traffic = [5,4,3,2,1], k = 5",
        expectedOutput: "[5]",
        hidden: false
      },
      {
        input: "traffic = [1,2,3,4,5], k = 1",
        expectedOutput: "[1,2,3,4,5]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def network_traffic_peak(traffic, k):
    pass`,

      java: `class Solution {
    public int[] networkTrafficPeak(int[] traffic, int k) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void networkTrafficPeak(int traffic[], int n, int k, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> networkTrafficPeak(vector<int>& traffic, int k) {
        return {};
    }
};`
    }
  },
  {
    id: "sliding-window-maximum-e5",
    title: "Player Score Window",
    difficulty: "Easy",
    description:
      "Player scores are recorded after each round. Given the scores and a window size, return the maximum score in each window. This helps track peak performance in rolling periods.",
    constraints: [
      "1 <= scores.length <= 100",
      "1 <= k <= scores.length",
      "0 <= scores[i] <= 100"
    ],
    examples: [
      {
        input: "scores = [80, 90, 70, 95, 85], k = 2",
        output: "[90, 90, 95, 95]",
        explanation:
          "The maximum score in each 2-round window is computed."
      },
      {
        input: "scores = [100, 50, 75], k = 3",
        output: "[100]",
        explanation:
          "The maximum score in the 3-round window is 100."
      }
    ],
    testCases: [
      {
        input: "scores = [80,90,70,95,85], k = 2",
        expectedOutput: "[90,90,95,95]",
        hidden: false
      },
      {
        input: "scores = [100,50,75], k = 3",
        expectedOutput: "[100]",
        hidden: false
      },
      {
        input: "scores = [1,2,3,4,5], k = 1",
        expectedOutput: "[1,2,3,4,5]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def player_score_window(scores, k):
    pass`,

      java: `class Solution {
    public int[] playerScoreWindow(int[] scores, int k) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void playerScoreWindow(int scores[], int n, int k, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> playerScoreWindow(vector<int>& scores, int k) {
        return {};
    }
};`
    }
  },
  {
    id: "sliding-window-maximum-m1",
    title: "Temperature Monitoring",
    difficulty: "Medium",
    description:
      "Given temperature readings over time, return the maximum temperature in each window of k consecutive readings. This represents a real-time monitoring system.",
    constraints: [
      "1 <= temperatures.length <= 10^4",
      "1 <= k <= temperatures.length",
      "-50 <= temperatures[i] <= 60"
    ],
    examples: [
      {
        input: "temperatures = [73, 74, 75, 71, 69, 72, 76, 73], k = 3",
        output: "[75, 75, 76, 76, 76, 76]",
        explanation:
          "The maximum temperature in each 3-day window is computed."
      },
      {
        input: "temperatures = [30, 40, 50, 60], k = 2",
        output: "[40, 50, 60]",
        explanation:
          "The maximum temperature in each 2-day window is computed."
      }
    ],
    testCases: [
      {
        input: "temperatures = [73,74,75,71,69,72,76,73], k = 3",
        expectedOutput: "[75,75,76,76,76,76]",
        hidden: false
      },
      {
        input: "temperatures = [30,40,50,60], k = 2",
        expectedOutput: "[40,50,60]",
        hidden: false
      },
      {
        input: "temperatures = [1,3,-1,-3,5,3,6,7], k = 3",
        expectedOutput: "[3,3,5,5,6,7]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def temperature_monitoring(temperatures, k):
    pass`,

      java: `class Solution {
    public int[] temperatureMonitoring(int[] temperatures, int k) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void temperatureMonitoring(int temperatures[], int n, int k, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> temperatureMonitoring(vector<int>& temperatures, int k) {
        return {};
    }
};`
    }
  },
  {
    id: "sliding-window-maximum-m2",
    title: "Stock Price Analysis",
    difficulty: "Medium",
    description:
      "Given stock prices and a list of query window sizes, return the maximum price in each window for the first query size. Preprocess using the sliding window maximum technique.",
    constraints: [
      "1 <= prices.length <= 10^4",
      "1 <= queries.length <= 10",
      "1 <= prices[i] <= 10^5",
      "1 <= queries[i] <= prices.length"
    ],
    examples: [
      {
        input: "prices = [100, 120, 110, 130, 140], queries = [2, 3]",
        output: "[120, 120, 130, 140]",
        explanation:
          "The first query uses k=2, and the maximum prices are computed for each window."
      },
      {
        input: "prices = [5, 4, 3, 2, 1], queries = [3]",
        output: "[5, 5, 5]",
        explanation:
          "The query uses k=3, and the maximum prices are computed for each window."
      }
    ],
    testCases: [
      {
        input: "prices = [100,120,110,130,140], queries = [2,3]",
        expectedOutput: "[120,120,130,140]",
        hidden: false
      },
      {
        input: "prices = [5,4,3,2,1], queries = [3]",
        expectedOutput: "[5,5,5]",
        hidden: false
      },
      {
        input: "prices = [1,3,-1,-3,5,3,6,7], queries = [3]",
        expectedOutput: "[3,3,5,5,6,7]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def stock_price_analysis(prices, queries):
    pass`,

      java: `class Solution {
    public int[] stockPriceAnalysis(int[] prices, int[] queries) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void stockPriceAnalysis(int prices[], int n, int queries[], int q, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> stockPriceAnalysis(vector<int>& prices, vector<int>& queries) {
        return {};
    }
};`
    }
  },
  {
    id: "sliding-window-maximum-m3",
    title: "Signal Strength Window",
    difficulty: "Medium",
    description:
      "A signal receiver records strength values. Given the signal strengths and a window size, return the maximum strength in each window. This helps identify peak signal periods.",
    constraints: [
      "1 <= strengths.length <= 10^4",
      "1 <= k <= strengths.length",
      "0 <= strengths[i] <= 10^5"
    ],
    examples: [
      {
        input: "strengths = [4, 2, 8, 1, 9, 3, 7, 5], k = 4",
        output: "[8, 9, 9, 9, 9]",
        explanation:
          "The maximum signal strength in each 4-unit window is computed."
      },
      {
        input: "strengths = [1, 2, 3, 4, 5], k = 3",
        output: "[3, 4, 5]",
        explanation:
          "The maximum signal strength in each 3-unit window is computed."
      }
    ],
    testCases: [
      {
        input: "strengths = [4,2,8,1,9,3,7,5], k = 4",
        expectedOutput: "[8,9,9,9,9]",
        hidden: false
      },
      {
        input: "strengths = [1,2,3,4,5], k = 3",
        expectedOutput: "[3,4,5]",
        hidden: false
      },
      {
        input: "strengths = [5,4,3,2,1], k = 2",
        expectedOutput: "[5,4,3,2]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def signal_strength_window(strengths, k):
    pass`,

      java: `class Solution {
    public int[] signalStrengthWindow(int[] strengths, int k) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void signalStrengthWindow(int strengths[], int n, int k, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> signalStrengthWindow(vector<int>& strengths, int k) {
        return {};
    }
};`
    }
  },
  {
    id: "sliding-window-maximum-m4",
    title: "Website Traffic Analysis",
    difficulty: "Medium",
    description:
      "Website visits are recorded hourly. Given the visit counts and a window size, return the maximum visits in each window. Additionally, return the total of all maximum values.",
    constraints: [
      "1 <= visits.length <= 10^4",
      "1 <= k <= visits.length",
      "0 <= visits[i] <= 10^5"
    ],
    examples: [
      {
        input: "visits = [10, 20, 30, 25, 40, 15], k = 3",
        output: "[[30, 30, 40, 40], 140]",
        explanation:
          "The maximum visits in each 3-hour window are [30, 30, 40, 40], and their sum is 140."
      },
      {
        input: "visits = [5, 4, 3, 2, 1], k = 2",
        output: "[[5, 4, 3, 2], 14]",
        explanation:
          "The maximum visits in each 2-hour window are [5, 4, 3, 2], and their sum is 14."
      }
    ],
    testCases: [
      {
        input: "visits = [10,20,30,25,40,15], k = 3",
        expectedOutput: "[[30,30,40,40],140]",
        hidden: false
      },
      {
        input: "visits = [5,4,3,2,1], k = 2",
        expectedOutput: "[[5,4,3,2],14]",
        hidden: false
      },
      {
        input: "visits = [1,2,3,4,5], k = 1",
        expectedOutput: "[[1,2,3,4,5],15]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def website_traffic_analysis(visits, k):
    pass`,

      java: `class Solution {
    public int[] websiteTrafficAnalysis(int[] visits, int k) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void websiteTrafficAnalysis(int visits[], int n, int k, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> websiteTrafficAnalysis(vector<int>& visits, int k) {
        return {};
    }
};`
    }
  },
  {
    id: "sliding-window-maximum-m5",
    title: "Production Rate Window",
    difficulty: "Medium",
    description:
      "A factory records hourly production rates. Given the rates and a window size, return the maximum rate in each window. The result is the sum of all maximum values multiplied by a rate factor.",
    constraints: [
      "1 <= rates.length <= 10^4",
      "1 <= k <= rates.length",
      "1 <= rates[i] <= 10^5",
      "1 <= factor <= 100"
    ],
    examples: [
    {
        input: "rates = [10, 20, 30, 25, 40, 15], k = 3, factor = 10",
        output: "1400",
        explanation:
          "The maximum rates are [30, 30, 40, 40], their sum is 140, and 140 * 10 = 1400."
      },
      {
        input: "rates = [5, 4, 3, 2, 1], k = 2, factor = 5",
        output: "70",
        explanation:
          "The maximum rates are [5, 4, 3, 2], their sum is 14, and 14 * 5 = 70."
      }
    ],
    testCases: [
      {
        input: "rates = [10,20,30,25,40,15], k = 3, factor = 10",
        expectedOutput: "1400",
        hidden: false
      },
      {
        input: "rates = [5,4,3,2,1], k = 2, factor = 5",
        expectedOutput: "70",
        hidden: false
      },
      {
        input: "rates = [1,2,3,4,5], k = 1, factor = 2",
        expectedOutput: "30",
        hidden: false
      }
    ],
    starterCode: {
      python: `def production_rate_window(rates, k, factor):
    pass`,

      java: `class Solution {
    public int productionRateWindow(int[] rates, int k, int factor) {
        return 0;
    }
}`,

      c: `#include <stdio.h>

int productionRateWindow(int rates[], int n, int k, int factor) {
    return 0;
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int productionRateWindow(vector<int>& rates, int k, int factor) {
        return 0;
    }
};`
    }
  },
  {
    id: "sliding-window-maximum-h1",
    title: "Circular Temperature Window",
    difficulty: "Hard",
    description:
      "Temperature readings are arranged in a circular pattern. For each position, find the maximum temperature in a window of size k, where the window may wrap around at most once. Each position has unit width.",
    constraints: [
      "1 <= temperatures.length <= 2 * 10^4",
      "1 <= k <= temperatures.length",
      "-50 <= temperatures[i] <= 60"
    ],
    examples: [
      {
        input: "temperatures = [1, 2, 1], k = 3",
        output: "[2, 2, 2]",
        explanation:
          "The circular arrangement allows wrapping to form a window of size 3 for each position."
      },
      {
        input: "temperatures = [5, 4, 3, 2, 1], k = 3",
        output: "[5, 5, 5, 5, 5]",
        explanation:
          "The maximum in each circular window of size 3 is 5."
      }
    ],
    testCases: [
      {
        input: "temperatures = [1,2,1], k = 3",
        expectedOutput: "[2,2,2]",
        hidden: false
      },
      {
        input: "temperatures = [5,4,3,2,1], k = 3",
        expectedOutput: "[5,5,5,5,5]",
        hidden: false
      },
      {
        input: "temperatures = [1,3,-1,-3,5,3,6,7], k = 3",
        expectedOutput: "[3,3,5,5,6,7]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def circular_temperature_window(temperatures, k):
    pass`,

      java: `class Solution {
    public int[] circularTemperatureWindow(int[] temperatures, int k) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void circularTemperatureWindow(int temperatures[], int n, int k, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> circularTemperatureWindow(vector<int>& temperatures, int k) {
        return {};
    }
};`
    }
  },
  {
    id: "sliding-window-maximum-h2",
    title: "Multiple Data Stream Analysis",
    difficulty: "Hard",
    description:
      "Given multiple data streams and a window size, find the stream index and the maximum value across all streams. Return the stream with the highest maximum value.",
    constraints: [
      "1 <= streams.length <= 10^3",
      "1 <= streams[i].length <= 10^3",
      "1 <= streams[i][j] <= 10^4",
      "1 <= k <= streams[i].length"
    ],
    examples: [
      {
        input: "streams = [[1, 3, 2], [4, 2, 5]], k = 2",
        output: "[1, 5]",
        explanation:
          "Stream 0 has max [3, 3], stream 1 has max [4, 5]. The highest is 5 in stream 1."
      },
    {
        input: "streams = [[5, 4, 3], [2, 1, 6]], k = 3",
        output: "[1, 6]",
        explanation:
          "Stream 0 has max 5, stream 1 has max 6. The highest is 6 in stream 1."
      }
    ],
    testCases: [
      {
        input: "streams = [[1,3,2],[4,2,5]], k = 2",
        expectedOutput: "[1,5]",
        hidden: false
      },
      {
        input: "streams = [[5,4,3],[2,1,6]], k = 3",
        expectedOutput: "[1,6]",
        hidden: false
      },
      {
        input: "streams = [[1,2,3,4,5]], k = 2",
        expectedOutput: "[0,5]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def multiple_data_stream_analysis(streams, k):
    pass`,

      java: `class Solution {
    public int[] multipleDataStreamAnalysis(int[][] streams, int k) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void multipleDataStreamAnalysis(int streams[][1000], int s, int n, int k, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> multipleDataStreamAnalysis(vector<vector<int>>& streams, int k) {
        return {};
    }
};`
    }
  },
  {
    id: "sliding-window-maximum-h3",
    title: "Dynamic Window Updates",
    difficulty: "Hard",
    description:
      "Given initial data values and a series of updates, return the maximum value in each window after each update. Each update changes one value in the array.",
    constraints: [
      "1 <= values.length <= 10^3",
      "1 <= updates.length <= 10^3",
      "1 <= values[i], updates[i][1] <= 10^4",
      "0 <= updates[i][0] < values.length",
      "1 <= k <= values.length"
    ],
    examples: [
      {
        input: "values = [1, 3, 2], updates = [[1, 5]], k = 2",
        output: "[[5, 5]]",
        explanation:
          "After the update, values become [1, 5, 2] and the max in each window of 2 is [5, 5]."
      },
      {
        input: "values = [4, 2, 3], updates = [[0, 1], [2, 5]]",
        output: "[[2, 3], [2, 5]]",
        explanation:
          "After first update: [1, 2, 3] has max [2, 3]. After second update: [1, 2, 5] has max [2, 5]."
      }
    ],
    testCases: [
      {
        input: "values = [1,3,2], updates = [[1,5]], k = 2",
        expectedOutput: "[[5,5]]",
        hidden: false
      },
      {
        input: "values = [4,2,3], updates = [[0,1],[2,5]], k = 2",
        expectedOutput: "[[2,3],[2,5]]",
        hidden: false
      },
      {
        input: "values = [5,4,3], updates = [[1,6]], k = 3",
        expectedOutput: "[[6]]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def dynamic_window_updates(values, updates, k):
    pass`,

      java: `class Solution {
    public int[][] dynamicWindowUpdates(int[] values, int[][] updates, int k) {
        return new int[0][0];
    }
}`,

      c: `#include <stdio.h>

void dynamicWindowUpdates(int values[], int n, int updates[][2], int u, int k, int result[][1000]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<vector<int>> dynamicWindowUpdates(vector<int>& values, vector<vector<int>>& updates, int k) {
        return {};
    }
};`
    }
  },
  {
    id: "sliding-window-maximum-h4",
    title: "Window Maximum with Constraints",
    difficulty: "Hard",
    description:
      "Given data values, find the maximum value in each window of size k such that the window width is at least m. The result is the sum of all valid maximum values.",
    constraints: [
      "1 <= values.length <= 10^4",
      "1 <= m <= k <= values.length",
      "1 <= values[i] <= 10^5"
    ],
    examples: [
      {
        input: "values = [1, 3, 2, 5, 4, 6], k = 3, m = 2",
        output: "20",
        explanation:
          "The maximum values in windows of size 3 are [3, 5, 6, 6], and their sum is 20."
      },
      {
        input: "values = [5, 4, 3, 2, 1], k = 4, m = 3",
        output: "10",
        explanation:
          "The maximum values in windows of size 4 are [5, 5], and their sum is 10."
      }
    ],
    testCases: [
      {
        input: "values = [1,3,2,5,4,6], k = 3, m = 2",
        expectedOutput: "20",
        hidden: false
      },
      {
        input: "values = [5,4,3,2,1], k = 4, m = 3",
        expectedOutput: "10",
        hidden: false
      },
      {
        input: "values = [1,2,3,4,5], k = 2, m = 2",
        expectedOutput: "12",
        hidden: false
      }
    ],
    starterCode: {
      python: `def window_maximum_with_constraints(values, k, m):
    pass`,

      java: `class Solution {
    public int windowMaximumWithConstraints(int[] values, int k, int m) {
        return 0;
    }
}`,

      c: `#include <stdio.h>

int windowMaximumWithConstraints(int values[], int n, int k, int m) {
    return 0;
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int windowMaximumWithConstraints(vector<int>& values, int k, int m) {
        return 0;
    }
};`
    }
  },
  {
    id: "sliding-window-maximum-h5",
    title: "Sliding Window Segmentation",
    difficulty: "Hard",
    description:
      "Given data values and a number of segments k, partition the data into k contiguous segments such that the maximum value across all segment windows is minimized. Return this minimum value.",
    constraints: [
      "1 <= values.length <= 10^3",
      "1 <= k <= values.length"
    ],
    examples: [
      {
        input: "values = [1, 3, 2, 5, 4, 6], k = 2",
        output: "6",
        explanation:
          "Split into [1, 3, 2] and [5, 4, 6]. The max values are 3 and 6, so the answer is 6."
      },
      {
        input: "values = [5, 4, 3, 2, 1], k = 1",
        output: "5",
        explanation:
          "No split needed, the max value is 5."
      }
    ],
    testCases: [
      {
        input: "values = [1,3,2,5,4,6], k = 2",
        expectedOutput: "6",
        hidden: false
      },
      {
        input: "values = [5,4,3,2,1], k = 1",
        expectedOutput: "5",
        hidden: false
      },
      {
        input: "values = [1,2,3,4,5], k = 3",
        expectedOutput: "3",
        hidden: false
      }
    ],
    starterCode: {
      python: `def sliding_window_segmentation(values, k):
    pass`,

      java: `class Solution {
    public int slidingWindowSegmentation(int[] values, int k) {
        return 0;
    }
}`,

      c: `#include <stdio.h>

int slidingWindowSegmentation(int values[], int n, int k) {
    return 0;
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int slidingWindowSegmentation(vector<int>& values, int k) {
        return 0;
    }
};`
    }
  }
];