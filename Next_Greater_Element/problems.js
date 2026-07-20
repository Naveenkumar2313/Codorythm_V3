export const nextGreaterElementProblems = [
  {
    id: "next-greater-element-e1",
    title: "Next Taller Building",
    difficulty: "Easy",
    description:
      "Given an array heights where heights[i] represents the height of a building, return an array where each position contains the first taller building to its right. If no taller building exists, store -1.",
    constraints: [
      "1 <= heights.length <= 1000",
      "1 <= heights[i] <= 10^5"
    ],
    examples: [
      {
        input: "heights = [2,1,3,2,5]",
        output: "[3,3,5,5,-1]",
        explanation:
          "For each building, the answer is the first strictly taller building found while moving right."
      },
      {
        input: "heights = [5,4,3]",
        output: "[-1,-1,-1]",
        explanation:
          "No building has a taller building to its right."
      }
    ],
    testCases: [
      {
        input: "[2,1,3,2,5]",
        expectedOutput: "[3,3,5,5,-1]",
        hidden: false
      },
      {
        input: "[5,4,3]",
        expectedOutput: "[-1,-1,-1]",
        hidden: false
      },
      {
        input: "[1,3,2,4]",
        expectedOutput: "[3,4,4,-1]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def next_taller_buildings(heights):
    pass`,

      java: `class Solution {
    public int[] nextTallerBuildings(int[] heights) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void nextTallerBuildings(int heights[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> nextTallerBuildings(vector<int>& heights) {
        return {};
    }
};`
    }
  },
  {
    id: "next-greater-element-e2",
    title: "Next Warmer Reading",
    difficulty: "Easy",
    description:
      "Given daily temperature readings, return the first warmer temperature that appears after each day. If no warmer temperature appears later, store -1.",
    constraints: [
      "1 <= temperatures.length <= 1000",
      "-50 <= temperatures[i] <= 60"
    ],
    examples: [
      {
        input: "temperatures = [30,32,31,35]",
        output: "[32,35,35,-1]",
        explanation:
          "Each day is matched with the first later temperature that is strictly warmer."
      },
      {
        input: "temperatures = [40,39,38]",
        output: "[-1,-1,-1]",
        explanation:
          "The temperatures only decrease, so no warmer reading exists."
      }
    ],
    testCases: [
      {
        input: "[30,32,31,35]",
        expectedOutput: "[32,35,35,-1]",
        hidden: false
      },
      {
        input: "[40,39,38]",
        expectedOutput: "[-1,-1,-1]",
        hidden: false
      },
      {
        input: "[25,25,26]",
        expectedOutput: "[26,26,-1]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def next_warmer_readings(temperatures):
    pass`,

      java: `class Solution {
    public int[] nextWarmerReadings(int[] temperatures) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void nextWarmerReadings(int temperatures[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> nextWarmerReadings(vector<int>& temperatures) {
        return {};
    }
};`
    }
  },
  {
    id: "next-greater-element-e3",
    title: "Next Higher Stock Price",
    difficulty: "Easy",
    description:
      "Given stock prices recorded over time, return the first higher price that appears after each price. If the price never rises above the current value later, store -1.",
    constraints: [
      "1 <= prices.length <= 1000",
      "1 <= prices[i] <= 10^6"
    ],
    examples: [
      {
        input: "prices = [100,95,120,110]",
        output: "[120,120,-1,-1]",
        explanation:
          "The first later price greater than 100 is 120, and the first later price greater than 95 is also 120."
      },
      {
        input: "prices = [8,9,7,10]",
        output: "[9,10,10,-1]",
        explanation:
          "Each price is paired with the first later strictly higher price."
      }
    ],
    testCases: [
      {
        input: "[100,95,120,110]",
        expectedOutput: "[120,120,-1,-1]",
        hidden: false
      },
      {
        input: "[8,9,7,10]",
        expectedOutput: "[9,10,10,-1]",
        hidden: false
      },
      {
        input: "[5,5,5]",
        expectedOutput: "[-1,-1,-1]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def next_higher_stock_prices(prices):
    pass`,

      java: `class Solution {
    public int[] nextHigherStockPrices(int[] prices) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void nextHigherStockPrices(int prices[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> nextHigherStockPrices(vector<int>& prices) {
        return {};
    }
};`
    }
  },
  {
    id: "next-greater-element-e4",
    title: "Next Server Load Spike",
    difficulty: "Easy",
    description:
      "A server records load values over time. For each load value, return the first later load that is strictly greater. Return -1 when no later spike exists.",
    constraints: [
      "1 <= loads.length <= 1000",
      "0 <= loads[i] <= 10^5"
    ],
    examples: [
      {
        input: "loads = [4,6,2,5,7]",
        output: "[6,7,5,7,-1]",
        explanation:
          "The next greater load after 4 is 6, after 6 is 7, after 2 is 5, and after 5 is 7."
      },
      {
        input: "loads = [9,1,2,3]",
        output: "[-1,2,3,-1]",
        explanation:
          "The first value has no greater load after it, while the smaller loads have later increases."
      }
    ],
    testCases: [
      {
        input: "[4,6,2,5,7]",
        expectedOutput: "[6,7,5,7,-1]",
        hidden: false
      },
      {
        input: "[9,1,2,3]",
        expectedOutput: "[-1,2,3,-1]",
        hidden: false
      },
      {
        input: "[3,3,4,2]",
        expectedOutput: "[4,4,-1,-1]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def next_server_load_spikes(loads):
    pass`,

      java: `class Solution {
    public int[] nextServerLoadSpikes(int[] loads) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void nextServerLoadSpikes(int loads[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> nextServerLoadSpikes(vector<int>& loads) {
        return {};
    }
};`
    }
  },
  {
    id: "next-greater-element-e5",
    title: "Next Stronger Opponent",
    difficulty: "Easy",
    description:
      "Given player power levels in the order they appear, return the first stronger opponent to the right of each player. If none exists, store -1.",
    constraints: [
      "1 <= powers.length <= 1000",
      "1 <= powers[i] <= 10^5"
    ],
    examples: [
      {
        input: "powers = [1,4,2,3]",
        output: "[4,-1,3,-1]",
        explanation:
          "The next stronger opponent after 1 is 4, and the next stronger opponent after 2 is 3."
      },
      {
        input: "powers = [6,5,7,4]",
        output: "[7,7,-1,-1]",
        explanation:
          "Both 6 and 5 have 7 as the first stronger opponent to their right."
      }
    ],
    testCases: [
      {
        input: "[1,4,2,3]",
        expectedOutput: "[4,-1,3,-1]",
        hidden: false
      },
      {
        input: "[6,5,7,4]",
        expectedOutput: "[7,7,-1,-1]",
        hidden: false
      },
      {
        input: "[2,2,3]",
        expectedOutput: "[3,3,-1]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def next_stronger_opponents(powers):
    pass`,

      java: `class Solution {
    public int[] nextStrongerOpponents(int[] powers) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void nextStrongerOpponents(int powers[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> nextStrongerOpponents(vector<int>& powers) {
        return {};
    }
};`
    }
  },
  {
    id: "next-greater-element-m1",
    title: "Days Until Warmer Temperature",
    difficulty: "Medium",
    description:
      "Given daily temperatures, return an array where each position contains the number of days until a warmer temperature. If no warmer day exists, store 0.",
    constraints: [
      "1 <= temperatures.length <= 10^5",
      "-50 <= temperatures[i] <= 60"
    ],
    examples: [
      {
        input: "temperatures = [73,74,75,71,69,72,76,73]",
        output: "[1,1,4,2,1,1,0,0]",
        explanation:
          "For temperature 75 at index 2, the next warmer temperature is 76 at index 6, so the wait is 4 days."
      },
      {
        input: "temperatures = [30,40,50,60]",
        output: "[1,1,1,0]",
        explanation:
          "Each day except the last has a warmer temperature on the next day."
      }
    ],
    testCases: [
      {
        input: "[73,74,75,71,69,72,76,73]",
        expectedOutput: "[1,1,4,2,1,1,0,0]",
        hidden: false
      },
      {
        input: "[30,40,50,60]",
        expectedOutput: "[1,1,1,0]",
        hidden: false
      },
      {
        input: "[60,50,40]",
        expectedOutput: "[0,0,0]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def days_until_warmer_temperature(temperatures):
    pass`,

      java: `class Solution {
    public int[] daysUntilWarmerTemperature(int[] temperatures) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void daysUntilWarmerTemperature(int temperatures[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> daysUntilWarmerTemperature(vector<int>& temperatures) {
        return {};
    }
};`
    }
  },
  {
    id: "next-greater-element-m2",
    title: "Next Higher Quality Index",
    difficulty: "Medium",
    description:
      "Given product quality scores, return the index of the first later product with a strictly higher score for each position. If no such product exists, store -1.",
    constraints: [
      "1 <= scores.length <= 10^5",
      "0 <= scores[i] <= 10^6"
    ],
    examples: [
      {
        input: "scores = [5,3,8,4,10]",
        output: "[2,2,4,4,-1]",
        explanation:
          "The first score greater than 5 appears at index 2, and the first score greater than 8 appears at index 4."
      },
      {
        input: "scores = [7,7,6]",
        output: "[-1,-1,-1]",
        explanation:
          "Equal scores are not greater, and no later higher score exists."
      }
    ],
    testCases: [
      {
        input: "[5,3,8,4,10]",
        expectedOutput: "[2,2,4,4,-1]",
        hidden: false
      },
      {
        input: "[7,7,6]",
        expectedOutput: "[-1,-1,-1]",
        hidden: false
      },
      {
        input: "[1,5,2,6]",
        expectedOutput: "[1,3,3,-1]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def next_higher_quality_indices(scores):
    pass`,

      java: `class Solution {
    public int[] nextHigherQualityIndices(int[] scores) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void nextHigherQualityIndices(int scores[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> nextHigherQualityIndices(vector<int>& scores) {
        return {};
    }
};`
    }
  },
  {
    id: "next-greater-element-m3",
    title: "Next Price for Watched Days",
    difficulty: "Medium",
    description:
      "Given stock prices and a list of watched day indices, return the next higher price for each watched day. Preprocess the prices using the Next Greater Element technique.",
    constraints: [
      "1 <= prices.length <= 10^5",
      "1 <= queries.length <= 10^5",
      "1 <= prices[i] <= 10^6",
      "0 <= queries[i] < prices.length"
    ],
    examples: [
      {
        input: "prices = [3,8,4,1,2], queries = [0,2,3]",
        output: "[8,-1,2]",
        explanation:
          "Day 0 has next higher price 8, day 2 has no later higher price, and day 3 has next higher price 2."
      },
      {
        input: "prices = [5,1,6,2,7], queries = [1,3,4]",
        output: "[6,7,-1]",
        explanation:
          "The query answers are taken from the precomputed next greater values."
      }
    ],
    testCases: [
      {
        input: "prices = [3,8,4,1,2], queries = [0,2,3]",
        expectedOutput: "[8,-1,2]",
        hidden: false
      },
      {
        input: "prices = [5,1,6,2,7], queries = [1,3,4]",
        expectedOutput: "[6,7,-1]",
        hidden: false
      },
      {
        input: "prices = [4,3,2,5], queries = [0,1,2]",
        expectedOutput: "[5,5,5]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def next_price_for_watched_days(prices, queries):
    pass`,

      java: `class Solution {
    public int[] nextPriceForWatchedDays(int[] prices, int[] queries) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void nextPriceForWatchedDays(int prices[], int n, int queries[], int q, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> nextPriceForWatchedDays(vector<int>& prices, vector<int>& queries) {
        return {};
    }
};`
    }
  },
  {
    id: "next-greater-element-m4",
    title: "Minutes Until Higher Traffic",
    difficulty: "Medium",
    description:
      "Given traffic levels recorded each minute, return how many minutes must pass until a strictly higher traffic level appears. If no higher level appears later, store 0.",
    constraints: [
      "1 <= traffic.length <= 10^5",
      "0 <= traffic[i] <= 10^6"
    ],
    examples: [
      {
        input: "traffic = [2,1,2,4,3]",
        output: "[3,1,1,0,0]",
        explanation:
          "The level 2 at index 0 first sees a higher level 4 after 3 minutes."
      },
      {
        input: "traffic = [1,2,3]",
        output: "[1,1,0]",
        explanation:
          "Each of the first two minutes is followed by a higher traffic level."
      }
    ],
    testCases: [
      {
        input: "[2,1,2,4,3]",
        expectedOutput: "[3,1,1,0,0]",
        hidden: false
      },
      {
        input: "[1,2,3]",
        expectedOutput: "[1,1,0]",
        hidden: false
      },
      {
        input: "[3,2,1]",
        expectedOutput: "[0,0,0]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def minutes_until_higher_traffic(traffic):
    pass`,

      java: `class Solution {
    public int[] minutesUntilHigherTraffic(int[] traffic) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void minutesUntilHigherTraffic(int traffic[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> minutesUntilHigherTraffic(vector<int>& traffic) {
        return {};
    }
};`
    }
  },
  {
    id: "next-greater-element-m5",
    title: "Next Signal for Query Points",
    difficulty: "Medium",
    description:
      "Given signal strengths and query indices, return the first later signal strength that is strictly greater than the signal at each queried index.",
    constraints: [
      "1 <= readings.length <= 10^5",
      "1 <= queries.length <= 10^5",
      "0 <= readings[i] <= 10^6",
      "0 <= queries[i] < readings.length"
    ],
    examples: [
      {
        input: "readings = [6,2,5,3,8], queries = [0,1,3]",
        output: "[8,5,8]",
        explanation:
          "The next greater readings for indices 0, 1, and 3 are 8, 5, and 8."
      },
      {
        input: "readings = [4,7,1], queries = [0,1,2]",
        output: "[7,-1,-1]",
        explanation:
          "Index 1 and index 2 have no later greater reading."
      }
    ],
    testCases: [
      {
        input: "readings = [6,2,5,3,8], queries = [0,1,3]",
        expectedOutput: "[8,5,8]",
        hidden: false
      },
      {
        input: "readings = [4,7,1], queries = [0,1,2]",
        expectedOutput: "[7,-1,-1]",
        hidden: false
      },
      {
        input: "readings = [2,2,3,1], queries = [0,1,2]",
        expectedOutput: "[3,3,-1]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def next_signal_for_query_points(readings, queries):
    pass`,

      java: `class Solution {
    public int[] nextSignalForQueryPoints(int[] readings, int[] queries) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void nextSignalForQueryPoints(int readings[], int n, int queries[], int q, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> nextSignalForQueryPoints(vector<int>& readings, vector<int>& queries) {
        return {};
    }
};`
    }
  },
  {
    id: "next-greater-element-h1",
    title: "Circular Sensor Next Greater Reading",
    difficulty: "Hard",
    description:
      "Sensor readings are arranged in a circular log. For each reading, return the first strictly greater reading encountered while moving right, wrapping around at most once. If no greater reading exists, store -1.",
    constraints: [
      "1 <= readings.length <= 2 * 10^5",
      "0 <= readings[i] <= 10^9"
    ],
    examples: [
      {
        input: "readings = [1,2,1]",
        output: "[2,-1,2]",
        explanation:
          "The last reading wraps around and finds 2 as its next greater reading."
      },
      {
        input: "readings = [5,4,3,2,1]",
        output: "[-1,5,5,5,5]",
        explanation:
          "Every reading except 5 can wrap around to find 5."
      }
    ],
    testCases: [
      {
        input: "[1,2,1]",
        expectedOutput: "[2,-1,2]",
        hidden: false
      },
      {
        input: "[5,4,3,2,1]",
        expectedOutput: "[-1,5,5,5,5]",
        hidden: false
      },
      {
        input: "[2,2,2]",
        expectedOutput: "[-1,-1,-1]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def circular_sensor_next_greater(readings):
    pass`,

      java: `class Solution {
    public int[] circularSensorNextGreater(int[] readings) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void circularSensorNextGreater(int readings[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> circularSensorNextGreater(vector<int>& readings) {
        return {};
    }
};`
    }
  },
  {
    id: "next-greater-element-h2",
    title: "Circular Demand Waiting Time",
    difficulty: "Hard",
    description:
      "Demand readings form a circular sequence. For each reading, return the number of steps needed to reach the first strictly higher demand while moving right and wrapping around at most once. If none exists, store 0.",
    constraints: [
      "1 <= demand.length <= 2 * 10^5",
      "0 <= demand[i] <= 10^9"
    ],
    examples: [
      {
        input: "demand = [1,2,1]",
        output: "[1,0,2]",
        explanation:
          "The last reading reaches the higher value 2 after wrapping around two steps."
      },
      {
        input: "demand = [5,4,3,2,1]",
        output: "[0,4,3,2,1]",
        explanation:
          "Every reading except 5 eventually reaches 5 by wrapping around."
      }
    ],
    testCases: [
      {
        input: "[1,2,1]",
        expectedOutput: "[1,0,2]",
        hidden: false
      },
      {
        input: "[5,4,3,2,1]",
        expectedOutput: "[0,4,3,2,1]",
        hidden: false
      },
      {
        input: "[2,1,2,4,3]",
        expectedOutput: "[3,1,1,0,4]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def circular_demand_waiting_time(demand):
    pass`,

      java: `class Solution {
    public int[] circularDemandWaitingTime(int[] demand) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void circularDemandWaitingTime(int demand[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> circularDemandWaitingTime(vector<int>& demand) {
        return {};
    }
};`
    }
  },
  {
    id: "next-greater-element-h3",
    title: "Circular Market Price Alert",
    difficulty: "Hard",
    description:
      "Market prices are stored in a circular watchlist. For every price, return the first strictly higher price encountered when scanning right with wraparound. Equal prices are not considered higher.",
    constraints: [
      "1 <= prices.length <= 2 * 10^5",
      "1 <= prices[i] <= 10^9"
    ],
    examples: [
      {
        input: "prices = [2,5,5,1]",
        output: "[5,-1,-1,2]",
        explanation:
          "The value 1 wraps around and finds 2, while the equal 5 values do not count as greater."
      },
      {
        input: "prices = [3,1,3,2]",
        output: "[-1,3,-1,3]",
        explanation:
          "Only strictly higher prices qualify."
      }
    ],
    testCases: [
      {
        input: "[2,5,5,1]",
        expectedOutput: "[5,-1,-1,2]",
        hidden: false
      },
      {
        input: "[3,1,3,2]",
        expectedOutput: "[-1,3,-1,3]",
        hidden: false
      },
      {
        input: "[4,4,1]",
        expectedOutput: "[-1,-1,4]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def circular_market_price_alert(prices):
    pass`,

      java: `class Solution {
    public int[] circularMarketPriceAlert(int[] prices) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void circularMarketPriceAlert(int prices[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> circularMarketPriceAlert(vector<int>& prices) {
        return {};
    }
};`
    }
  },
  {
    id: "next-greater-element-h4",
    title: "Circular Next Greater Query",
    difficulty: "Hard",
    description:
      "Given circular readings and query indices, return the next strictly greater circular reading for each queried index. Each scan may wrap around at most once.",
    constraints: [
      "1 <= readings.length <= 2 * 10^5",
      "1 <= queries.length <= 2 * 10^5",
      "0 <= readings[i] <= 10^9",
      "0 <= queries[i] < readings.length"
    ],
    examples: [
      {
        input: "readings = [6,1,4,2], queries = [0,1,3]",
        output: "[-1,4,6]",
        explanation:
          "Index 3 wraps around and finds 6 as the next greater reading."
      },
      {
        input: "readings = [3,5,2,4], queries = [0,2,3]",
        output: "[5,4,5]",
        explanation:
          "The query at index 3 wraps around to find 5."
      }
    ],
    testCases: [
      {
        input: "readings = [6,1,4,2], queries = [0,1,3]",
        expectedOutput: "[-1,4,6]",
        hidden: false
      },
      {
        input: "readings = [3,5,2,4], queries = [0,2,3]",
        expectedOutput: "[5,4,5]",
        hidden: false
      },
      {
        input: "readings = [9,7,8], queries = [0,1,2]",
        expectedOutput: "[-1,8,9]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def circular_next_greater_query(readings, queries):
    pass`,

      java: `class Solution {
    public int[] circularNextGreaterQuery(int[] readings, int[] queries) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void circularNextGreaterQuery(int readings[], int n, int queries[], int q, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> circularNextGreaterQuery(vector<int>& readings, vector<int>& queries) {
        return {};
    }
};`
    }
  },
  {
    id: "next-greater-element-h5",
    title: "Circular Workload Wait Queries",
    difficulty: "Hard",
    description:
      "Given circular workload readings and query indices, return how many steps are needed to reach the first strictly higher workload for each queried index. If no higher workload exists, return 0 for that query.",
    constraints: [
      "1 <= workloads.length <= 2 * 10^5",
      "1 <= queries.length <= 2 * 10^5",
      "0 <= workloads[i] <= 10^9",
      "0 <= queries[i] < workloads.length"
    ],
    examples: [
      {
        input: "workloads = [4,1,2,5,3], queries = [0,1,4]",
        output: "[3,1,1]",
        explanation:
          "Index 4 wraps to index 0, where workload 4 is higher than 3."
      },
      {
        input: "workloads = [8,6,7], queries = [0,1,2]",
        output: "[0,1,1]",
        explanation:
          "The maximum value has no higher workload, while 6 and 7 both find a higher value next."
      }
    ],
    testCases: [
      {
        input: "workloads = [4,1,2,5,3], queries = [0,1,4]",
        expectedOutput: "[3,1,1]",
        hidden: false
      },
      {
        input: "workloads = [8,6,7], queries = [0,1,2]",
        expectedOutput: "[0,1,1]",
        hidden: false
      },
      {
        input: "workloads = [2,2,1], queries = [0,1,2]",
        expectedOutput: "[0,0,1]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def circular_workload_wait_queries(workloads, queries):
    pass`,

      java: `class Solution {
    public int[] circularWorkloadWaitQueries(int[] workloads, int[] queries) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void circularWorkloadWaitQueries(int workloads[], int n, int queries[], int q, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> circularWorkloadWaitQueries(vector<int>& workloads, vector<int>& queries) {
        return {};
    }
};`
    }
  }
];
