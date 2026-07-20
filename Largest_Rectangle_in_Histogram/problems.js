export const largestRectangleInHistogramProblems = [
  {
    id: "largest-rectangle-in-histogram-e1",
    title: "Simple Skyline Area",
    difficulty: "Easy",
    description:
      "Given an array heights where heights[i] represents the height of a building, return the maximum rectangular area that can be formed under the skyline. Each building has unit width.",
    constraints: [
      "1 <= heights.length <= 100",
      "1 <= heights[i] <= 100"
    ],
    examples: [
      {
        input: "heights = [2, 1, 5, 6, 2, 3]",
        output: "10",
        explanation:
          "The largest rectangle has height 5 and width 2, giving area 10."
      },
      {
        input: "heights = [1, 2, 3, 4]",
        output: "6",
        explanation:
          "The largest rectangle spans the last two buildings with height 3 and width 2."
      }
    ],
    testCases: [
      {
        input: "[2,1,5,6,2,3]",
        expectedOutput: "10",
        hidden: false
      },
      {
        input: "[1,2,3,4]",
        expectedOutput: "6",
        hidden: false
      },
      {
        input: "[5,4,3,2,1]",
        expectedOutput: "9",
        hidden: false
      }
    ],
    starterCode: {
      python: `def largest_skyline_area(heights):
    pass`,

      java: `class Solution {
    public int largestSkylineArea(int[] heights) {
        return 0;
    }
}`,

      c: `#include <stdio.h>

int largestSkylineArea(int heights[], int n) {
    return 0;
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int largestSkylineArea(vector<int>& heights) {
        return 0;
    }
};`
    }
  },
  {
    id: "largest-rectangle-in-histogram-e2",
    title: "Single Row Storage",
    difficulty: "Easy",
    description:
      "A warehouse has storage units of varying heights arranged in a single row. Find the maximum rectangular storage area that can be formed. Each unit has width 1.",
    constraints: [
      "1 <= units.length <= 100",
      "1 <= units[i] <= 100"
    ],
    examples: [
      {
        input: "units = [1, 2, 3, 4, 5]",
        output: "9",
        explanation:
          "The largest rectangle spans the last two units with height 4 and width 2."
      },
      {
        input: "units = [5, 5, 5]",
        output: "10",
        explanation:
          "The largest rectangle spans the last two units with height 5 and width 2."
      }
    ],
    testCases: [
      {
        input: "[1,2,3,4,5]",
        expectedOutput: "9",
        hidden: false
      },
      {
        input: "[5,5,5]",
        expectedOutput: "10",
        hidden: false
      },
      {
        input: "[1,1,1,1]",
        expectedOutput: "4",
        hidden: false
      }
    ],
    starterCode: {
      python: `def max_storage_area(units):
    pass`,

      java: `class Solution {
    public int maxStorageArea(int[] units) {
        return 0;
    }
}`,

      c: `#include <stdio.h>

int maxStorageArea(int units[], int n) {
    return 0;
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int maxStorageArea(vector<int>& units) {
        return 0;
    }
};`
    }
  },
  {
    id: "largest-rectangle-in-histogram-e3",
    title: "Building Facade Width",
    difficulty: "Easy",
    description:
      "Given building heights in a row, find the maximum rectangular area that can be painted on the facade. Each building contributes one unit of width to the rectangle.",
    constraints: [
      "1 <= heights.length <= 100",
      "1 <= heights[i] <= 100"
    ],
    examples: [
      {
        input: "heights = [6, 2, 5, 4, 5, 1, 6]",
        output: "12",
        explanation:
          "The largest rectangle has height 4 and width 3, giving area 12."
      },
      {
        input: "heights = [2, 4]",
        output: "4",
        explanation:
          "The largest rectangle has height 2 and width 2, giving area 4."
      }
    ],
    testCases: [
      {
        input: "[6,2,5,4,5,1,6]",
        expectedOutput: "12",
        hidden: false
      },
      {
        input: "[2,4]",
        expectedOutput: "4",
        hidden: false
      },
      {
        input: "[1,2,1]",
        expectedOutput: "3",
        hidden: false
      }
    ],
    starterCode: {
      python: `def max_facade_area(heights):
    pass`,

      java: `class Solution {
    public int maxFacadeArea(int[] heights) {
        return 0;
    }
}`,

      c: `#include <stdio.h>

int maxFacadeArea(int heights[], int n) {
    return 0;
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int maxFacadeArea(vector<int>& heights) {
        return 0;
    }
};`
    }
  },
  {
    id: "largest-rectangle-in-histogram-e4",
    title: "Garden Plot Area",
    difficulty: "Easy",
    description:
      "A garden has plots with different soil heights. Find the maximum rectangular area that can be leveled for planting. Each plot has unit width.",
    constraints: [
      "1 <= soil.length <= 100",
      "1 <= soil[i] <= 100"
    ],
    examples: [
      {
        input: "soil = [3, 2, 3, 4, 2]",
        output: "8",
        explanation:
          "The largest rectangle has height 2 and width 4, giving area 8."
      },
      {
        input: "soil = [1, 2, 3]",
        output: "4",
        explanation:
          "The largest rectangle has height 2 and width 2, giving area 4."
      }
    ],
    testCases: [
      {
        input: "[3,2,3,4,2]",
        expectedOutput: "8",
        hidden: false
      },
      {
        input: "[1,2,3]",
        expectedOutput: "4",
        hidden: false
      },
      {
        input: "[2,2,2,2]",
        expectedOutput: "8",
        hidden: false
      }
    ],
    starterCode: {
      python: `def max_garden_area(soil):
    pass`,

      java: `class Solution {
    public int maxGardenArea(int[] soil) {
        return 0;
    }
}`,

      c: `#include <stdio.h>

int maxGardenArea(int soil[], int n) {
    return 0;
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int maxGardenArea(vector<int>& soil) {
        return 0;
    }
};`
    }
  },
  {
    id: "largest-rectangle-in-histogram-e5",
    title: "Container Stack Area",
    difficulty: "Easy",
    description:
      "Containers of different heights are stacked in a row. Find the maximum rectangular base area that can be formed. Each container has width 1.",
    constraints: [
      "1 <= containers.length <= 100",
      "1 <= containers[i] <= 100"
    ],
    examples: [
      {
        input: "containers = [2, 1, 2]",
        output: "3",
        explanation:
          "The largest rectangle spans all three containers with height 1."
      },
      {
        input: "containers = [1, 2, 3, 4, 5]",
        output: "9",
        explanation:
          "The largest rectangle has height 3 and width 3, giving area 9."
      }
    ],
    testCases: [
      {
        input: "[2,1,2]",
        expectedOutput: "3",
        hidden: false
      },
      {
        input: "[1,2,3,4,5]",
        expectedOutput: "9",
        hidden: false
      },
      {
        input: "[5,4,3,2,1]",
        expectedOutput: "9",
        hidden: false
      }
    ],
    starterCode: {
      python: `def max_container_area(containers):
    pass`,

      java: `class Solution {
    public int maxContainerArea(int[] containers) {
        return 0;
    }
}`,

      c: `#include <stdio.h>

int maxContainerArea(int containers[], int n) {
    return 0;
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int maxContainerArea(vector<int>& containers) {
        return 0;
    }
};`
    }
  },
  {
    id: "largest-rectangle-in-histogram-m1",
    title: "Stock Price Range Area",
    difficulty: "Medium",
    description:
      "Given daily stock prices, find the maximum rectangular area where the height is limited by the minimum price in the range. This represents the largest volume that could be traded at consistent pricing.",
    constraints: [
      "1 <= prices.length <= 10^4",
      "1 <= prices[i] <= 10^5"
    ],
    examples: [
      {
        input: "prices = [3, 2, 5, 6, 1, 4]",
        output: "10",
        explanation:
          "The largest rectangle has height 2 and width 5, giving area 10."
      },
      {
        input: "prices = [1, 2, 3, 4, 5]",
        output: "9",
        explanation:
          "The largest rectangle has height 3 and width 3, giving area 9."
      }
    ],
    testCases: [
      {
        input: "[3,2,5,6,1,4]",
        expectedOutput: "10",
        hidden: false
      },
      {
        input: "[1,2,3,4,5]",
        expectedOutput: "9",
        hidden: false
      },
      {
        input: "[5,4,3,2,1]",
        expectedOutput: "9",
        hidden: false
      }
    ],
    starterCode: {
      python: `def max_price_range_area(prices):
    pass`,

      java: `class Solution {
    public int maxPriceRangeArea(int[] prices) {
        return 0;
    }
}`,

      c: `#include <stdio.h>

int maxPriceRangeArea(int prices[], int n) {
    return 0;
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int maxPriceRangeArea(vector<int>& prices) {
        return 0;
    }
};`
    }
  },
  {
    id: "largest-rectangle-in-histogram-m2",
    title: "Skyline Maximum Query",
    difficulty: "Medium",
    description:
      "Given building heights and query indices, return the maximum rectangular area for the subarray starting at each query index. Preprocess using the histogram technique.",
    constraints: [
      "1 <= heights.length <= 10^4",
      "1 <= queries.length <= 10^4",
      "1 <= heights[i] <= 10^5",
      "0 <= queries[i] < heights.length"
    ],
    examples: [
      {
        input: "heights = [2, 1, 5, 6, 2, 3], queries = [0, 2, 4]",
        output: "[10, 6, 3]",
        explanation:
          "The maximum areas for subarrays starting at each query index are computed."
      },
      {
        input: "heights = [1, 2, 3], queries = [0, 1, 2]",
        output: "[4, 2, 3]",
        explanation:
          "Each query returns the maximum area for the remaining subarray."
      }
    ],
    testCases: [
      {
        input: "heights = [2,1,5,6,2,3], queries = [0,2,4]",
        expectedOutput: "[10,6,3]",
        hidden: false
      },
      {
        input: "heights = [1,2,3], queries = [0,1,2]",
        expectedOutput: "[4,2,3]",
        hidden: false
      },
      {
        input: "heights = [5,4,3,2,1], queries = [0,2,4]",
        expectedOutput: "[9,6,1]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def skyline_max_queries(heights, queries):
    pass`,

      java: `class Solution {
    public int[] skylineMaxQueries(int[] heights, int[] queries) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void skylineMaxQueries(int heights[], int n, int queries[], int q, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> skylineMaxQueries(vector<int>& heights, vector<int>& queries) {
        return {};
    }
};`
    }
  },
  {
    id: "largest-rectangle-in-histogram-m3",
    title: "Warehouse Section Area",
    difficulty: "Medium",
    description:
      "Given warehouse shelf heights and a list of section queries, return the maximum rectangular storage area for each section. Each section is defined by a start and end index.",
    constraints: [
      "1 <= shelves.length <= 10^4",
      "1 <= sections.length <= 10^4",
      "1 <= shelves[i] <= 10^5",
      "0 <= sections[i][0] <= sections[i][1] < shelves.length"
    ],
    examples: [
      {
        input: "shelves = [2, 1, 5, 6, 2, 3], sections = [[0,3], [2,5]]",
        output: "[12, 6]",
        explanation:
          "Section [0,3] has max area 12, and section [2,5] has max area 6."
      },
      {
        input: "shelves = [1, 2, 3, 4], sections = [[0,2]]",
        output: "[4]",
        explanation:
          "The section [0,2] has max area 4."
      }
    ],
    testCases: [
      {
        input: "shelves = [2,1,5,6,2,3], sections = [[0,3],[2,5]]",
        expectedOutput: "[12,6]",
        hidden: false
      },
      {
        input: "shelves = [1,2,3,4], sections = [[0,2]]",
        expectedOutput: "[4]",
        hidden: false
      },
      {
        input: "shelves = [5,4,3,2,1], sections = [[0,4]]",
        expectedOutput: "[9]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def warehouse_section_areas(shelves, sections):
    pass`,

      java: `class Solution {
    public int[] warehouseSectionAreas(int[] shelves, int[][] sections) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void warehouseSectionAreas(int shelves[], int n, int sections[][2], int s, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> warehouseSectionAreas(vector<int>& shelves, vector<vector<int>>& sections) {
        return {};
    }
};`
    }
  },
  {
    id: "largest-rectangle-in-histogram-m4",
    title: "Building Height Analysis",
    difficulty: "Medium",
    description:
      "Given building heights, find the maximum area of a rectangle that can be formed. Additionally, return the height and width of that rectangle.",
    constraints: [
      "1 <= heights.length <= 10^4",
      "1 <= heights[i] <= 10^5"
    ],
    examples: [
      {
        input: "heights = [2, 1, 5, 6, 2, 3]",
        output: "[10, 5, 2]",
        explanation:
          "The maximum area is 10, with height 5 and width 2."
      },
      {
        input: "heights = [1, 2, 3, 4]",
        output: "[6, 3, 2]",
        explanation:
          "The maximum area is 6, with height 3 and width 2."
      }
    ],
    testCases: [
      {
        input: "[2,1,5,6,2,3]",
        expectedOutput: "[10,5,2]",
        hidden: false
      },
      {
        input: "[1,2,3,4]",
        expectedOutput: "[6,3,2]",
        hidden: false
      },
      {
        input: "[5,4,3,2,1]",
        expectedOutput: "[9,3,3]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def max_rectangle_details(heights):
    pass`,

      java: `class Solution {
    public int[] maxRectangleDetails(int[] heights) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void maxRectangleDetails(int heights[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> maxRectangleDetails(vector<int>& heights) {
        return {};
    }
};`
    }
  },
  {
    id: "largest-rectangle-in-histogram-m5",
    title: "Garden Leveling Cost",
    difficulty: "Medium",
    description:
      "Given soil heights in a garden, find the maximum rectangular area that can be leveled. The cost is the area multiplied by a given rate per unit area.",
    constraints: [
      "1 <= soil.length <= 10^4",
      "1 <= soil[i] <= 10^5",
      "1 <= rate <= 100"
    ],
    examples: [
      {
        input: "soil = [2, 1, 5, 6, 2, 3], rate = 10",
        output: "100",
        explanation:
          "The maximum area is 10, and the cost is 10 * 10 = 100."
      },
      {
        input: "soil = [1, 2, 3], rate = 5",
        output: "20",
        explanation:
          "The maximum area is 4, and the cost is 4 * 5 = 20."
      }
    ],
    testCases: [
      {
        input: "soil = [2,1,5,6,2,3], rate = 10",
        expectedOutput: "100",
        hidden: false
      },
      {
        input: "soil = [1,2,3], rate = 5",
        expectedOutput: "20",
        hidden: false
      },
      {
        input: "soil = [5,4,3,2,1], rate = 2",
        expectedOutput: "18",
        hidden: false
      }
    ],
    starterCode: {
      python: `def garden_leveling_cost(soil, rate):
    pass`,

      java: `class Solution {
    public int gardenLevelingCost(int[] soil, int rate) {
        return 0;
    }
}`,

      c: `#include <stdio.h>

int gardenLevelingCost(int soil[], int n, int rate) {
    return 0;
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int gardenLevelingCost(vector<int>& soil, int rate) {
        return 0;
    }
};`
    }
  },
  {
    id: "largest-rectangle-in-histogram-h1",
    title: "Circular Storage Area",
    difficulty: "Hard",
    description:
      "Storage units are arranged in a circular pattern. Find the maximum rectangular area that can be formed, where the scan may wrap around at most once. Each unit has unit width.",
    constraints: [
      "1 <= units.length <= 2 * 10^4",
      "1 <= units[i] <= 10^5"
    ],
    examples: [
      {
        input: "units = [1, 2, 1]",
        output: "3",
        explanation:
          "The circular arrangement allows wrapping to form a rectangle of height 1 and width 3."
      },
      {
        input: "units = [5, 4, 3, 2, 1]",
        output: "9",
        explanation:
          "The maximum area is 9, formed by the last three units with height 3."
      }
    ],
    testCases: [
      {
        input: "[1,2,1]",
        expectedOutput: "3",
        hidden: false
      },
      {
        input: "[5,4,3,2,1]",
        expectedOutput: "9",
        hidden: false
      },
      {
        input: "[2,2,2,2]",
        expectedOutput: "8",
        hidden: false
      }
    ],
    starterCode: {
      python: `def circular_storage_area(units):
    pass`,

      java: `class Solution {
    public int circularStorageArea(int[] units) {
        return 0;
    }
}`,

      c: `#include <stdio.h>

int circularStorageArea(int units[], int n) {
    return 0;
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int circularStorageArea(vector<int>& units) {
        return 0;
    }
};`
    }
  },
  {
    id: "largest-rectangle-in-histogram-h2",
    title: "Multiple Histogram Comparison",
    difficulty: "Hard",
    description:
      "Given multiple histograms, find the maximum rectangular area across all histograms. Return the histogram index and the area value.",
    constraints: [
      "1 <= histograms.length <= 10^3",
      "1 <= histograms[i].length <= 10^3",
      "1 <= histograms[i][j] <= 10^4"
    ],
    examples: [
      {
        input: "histograms = [[2,1,5], [6,2,3]]",
        output: "[1, 6]",
        explanation:
          "The first histogram has max area 5, and the second has max area 6."
      },
      {
        input: "histograms = [[1,2,3], [4,5,6]]",
        output: "[1, 12]",
        explanation:
          "The second histogram has max area 12 (height 4, width 3)."
      }
    ],
    testCases: [
      {
        input: "histograms = [[2,1,5],[6,2,3]]",
        expectedOutput: "[1,6]",
        hidden: false
      },
      {
        input: "histograms = [[1,2,3],[4,5,6]]",
        expectedOutput: "[1,12]",
        hidden: false
      },
      {
        input: "histograms = [[5,4,3,2,1]]",
        expectedOutput: "[0,9]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def max_histogram_comparison(histograms):
    pass`,

      java: `class Solution {
    public int[] maxHistogramComparison(int[][] histograms) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void maxHistogramComparison(int histograms[][1000], int h, int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> maxHistogramComparison(vector<vector<int>>& histograms) {
        return {};
    }
};`
    }
  },
  {
    id: "largest-rectangle-in-histogram-h3",
    title: "Dynamic Histogram Updates",
    difficulty: "Hard",
    description:
      "Given initial building heights and a series of updates, return the maximum rectangular area after each update. Each update changes one building's height.",
    constraints: [
      "1 <= heights.length <= 10^3",
      "1 <= updates.length <= 10^3",
      "1 <= heights[i], updates[i][1] <= 10^4",
      "0 <= updates[i][0] < heights.length"
    ],
    examples: [
      {
        input: "heights = [2, 1, 5], updates = [[1,3], [0,4]]",
        output: "[6, 8]",
        explanation:
          "After first update: [2,3,5] has max area 6. After second update: [4,3,5] has max area 8."
      },
      {
        input: "heights = [1, 2, 3], updates = [[2,1]]",
        output: "[4]",
        explanation:
          "After update: [1,2,1] has max area 4."
      }
    ],
    testCases: [
      {
        input: "heights = [2,1,5], updates = [[1,3],[0,4]]",
        expectedOutput: "[6,8]",
        hidden: false
      },
      {
        input: "heights = [1,2,3], updates = [[2,1]]",
        expectedOutput: "[4]",
        hidden: false
      },
      {
        input: "heights = [5,4,3], updates = [[0,1]]",
        expectedOutput: "[6]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def dynamic_histogram_areas(heights, updates):
    pass`,

      java: `class Solution {
    public int[] dynamicHistogramAreas(int[] heights, int[][] updates) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void dynamicHistogramAreas(int heights[], int n, int updates[][2], int u, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> dynamicHistogramAreas(vector<int>& heights, vector<vector<int>>& updates) {
        return {};
    }
};`
    }
  },
  {
    id: "largest-rectangle-in-histogram-h4",
    title: "Maximum Area with Constraints",
    difficulty: "Hard",
    description:
      "Given building heights, find the maximum rectangular area such that the rectangle width is at least k. The height is still limited by the minimum building in the range.",
    constraints: [
      "1 <= heights.length <= 10^4",
      "1 <= k <= heights.length",
      "1 <= heights[i] <= 10^5"
    ],
    examples: [
      {
        input: "heights = [2, 1, 5, 6, 2, 3], k = 3",
        output: "10",
        explanation:
          "The rectangle with height 2 and width 5 has area 10, which is the maximum with width >= 3."
      },
      {
        input: "heights = [1, 2, 3, 4], k = 2",
        output: "6",
        explanation:
          "The rectangle with height 3 and width 2 has area 6."
      }
    ],
    testCases: [
      {
        input: "heights = [2,1,5,6,2,3], k = 3",
        expectedOutput: "10",
        hidden: false
      },
      {
        input: "heights = [1,2,3,4], k = 2",
        expectedOutput: "6",
        hidden: false
      },
      {
        input: "heights = [5,4,3,2,1], k = 4",
        expectedOutput: "8",
        hidden: false
      }
    ],
    starterCode: {
      python: `def max_area_with_min_width(heights, k):
    pass`,

      java: `class Solution {
    public int maxAreaWithMinWidth(int[] heights, int k) {
        return 0;
    }
}`,

      c: `#include <stdio.h>

int maxAreaWithMinWidth(int heights[], int n, int k) {
    return 0;
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int maxAreaWithMinWidth(vector<int>& heights, int k) {
        return 0;
    }
};`
    }
  },
  {
    id: "largest-rectangle-in-histogram-h5",
    title: "Skyline Segmentation",
    difficulty: "Hard",
    description:
      "Given building heights and a number of segments k, partition the skyline into k contiguous segments such that the maximum rectangular area across all segments is minimized. Return this minimum value.",
    constraints: [
      "1 <= heights.length <= 10^3",
      "1 <= k <= heights.length"
    ],
    examples: [
      {
        input: "heights = [2, 1, 5, 6, 2, 3], k = 2",
        output: "6",
        explanation:
          "Split into [2,1,5] and [6,2,3]. The max areas are 5 and 6, so the answer is 6."
      },
      {
        input: "heights = [1, 2, 3], k = 1",
        output: "4",
        explanation:
          "No split needed, the max area is 4."
      }
    ],
    testCases: [
      {
        input: "heights = [2,1,5,6,2,3], k = 2",
        expectedOutput: "6",
        hidden: false
      },
      {
        input: "heights = [1,2,3], k = 1",
        expectedOutput: "4",
        hidden: false
      },
      {
        input: "heights = [5,4,3,2,1], k = 2",
        expectedOutput: "6",
        hidden: false
      }
    ],
    starterCode: {
      python: `def skyline_segmentation(heights, k):
    pass`,

      java: `class Solution {
    public int skylineSegmentation(int[] heights, int k) {
        return 0;
    }
}`,

      c: `#include <stdio.h>

int skylineSegmentation(int heights[], int n, int k) {
    return 0;
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int skylineSegmentation(vector<int>& heights, int k) {
        return 0;
    }
};`
    }
  }
];