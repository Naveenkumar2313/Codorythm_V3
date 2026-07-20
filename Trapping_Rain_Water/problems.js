export const trappingRainWaterProblems = [
  {
    id: "trapping-rain-water-e1",
    title: "Simple Water Collection",
    difficulty: "Easy",
    description:
      "Given an array elevation where elevation[i] represents the height of ground at position i, return the total amount of water that can be trapped after raining. Each position has unit width.",
    constraints: [
      "1 <= elevation.length <= 100",
      "0 <= elevation[i] <= 100"
    ],
    examples: [
      {
        input: "elevation = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]",
        output: "6",
        explanation:
          "The total trapped water is 6 units between the elevation bars."
      },
      {
        input: "elevation = [4, 2, 0, 3, 2, 5]",
        output: "9",
        explanation:
          "The total trapped water is 9 units."
      }
    ],
    testCases: [
      {
        input: "[0,1,0,2,1,0,1,3,2,1,2,1]",
        expectedOutput: "6",
        hidden: false
      },
      {
        input: "[4,2,0,3,2,5]",
        expectedOutput: "9",
        hidden: false
      },
      {
        input: "[3,0,2,0,4]",
        expectedOutput: "7",
        hidden: false
      }
    ],
    starterCode: {
      python: `def simple_water_collection(elevation):
    pass`,

      java: `class Solution {
    public int simpleWaterCollection(int[] elevation) {
        return 0;
    }
}`,

      c: `#include <stdio.h>

int simpleWaterCollection(int elevation[], int n) {
    return 0;
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int simpleWaterCollection(vector<int>& elevation) {
        return 0;
    }
};`
    }
  },
  {
    id: "trapping-rain-water-e2",
    title: "Valley Water Storage",
    difficulty: "Easy",
    description:
      "A valley has varying ground heights. Find the total water that can be stored in the valley after rainfall. Water is trapped between higher ground on both sides.",
    constraints: [
      "1 <= heights.length <= 100",
      "0 <= heights[i] <= 100"
    ],
    examples: [
      {
        input: "heights = [1, 0, 1]",
        output: "1",
        explanation:
          "The valley can store 1 unit of water in the middle."
      },
      {
        input: "heights = [2, 0, 1, 0, 2]",
        output: "3",
        explanation:
          "The valley can store 3 units of water."
      }
    ],
    testCases: [
      {
        input: "[1,0,1]",
        expectedOutput: "1",
        hidden: false
      },
      {
        input: "[2,0,1,0,2]",
        expectedOutput: "3",
        hidden: false
      },
      {
        input: "[0,1,0,2,1,0,1,3,2,1,2,1]",
        expectedOutput: "6",
        hidden: false
      }
    ],
    starterCode: {
      python: `def valley_water_storage(heights):
    pass`,

      java: `class Solution {
    public int valleyWaterStorage(int[] heights) {
        return 0;
    }
}`,

      c: `#include <stdio.h>

int valleyWaterStorage(int heights[], int n) {
    return 0;
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int valleyWaterStorage(vector<int>& heights) {
        return 0;
    }
};`
    }
  },
  {
    id: "trapping-rain-water-e3",
    title: "Dam Water Capacity",
    difficulty: "Easy",
    description:
      "A dam has sections with different heights. Calculate the maximum water capacity that can be held between the dam sections. Each section has unit width.",
    constraints: [
      "1 <= sections.length <= 100",
      "0 <= sections[i] <= 100"
    ],
    examples: [
      {
        input: "sections = [3, 1, 2, 1, 3]",
        output: "4",
        explanation:
          "The dam can hold 4 units of water between the sections."
      },
      {
        input: "sections = [1, 2, 3, 4]",
        output: "0",
        explanation:
          "No water can be trapped as the heights only increase."
      }
    ],
    testCases: [
      {
        input: "[3,1,2,1,3]",
        expectedOutput: "4",
        hidden: false
      },
      {
        input: "[1,2,3,4]",
        expectedOutput: "0",
        hidden: false
      },
      {
        input: "[4,3,2,1]",
        expectedOutput: "0",
        hidden: false
      }
    ],
    starterCode: {
      python: `def dam_water_capacity(sections):
    pass`,

      java: `class Solution {
    public int damWaterCapacity(int[] sections) {
        return 0;
    }
}`,

      c: `#include <stdio.h>

int damWaterCapacity(int sections[], int n) {
    return 0;
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int damWaterCapacity(vector<int>& sections) {
        return 0;
    }
};`
    }
  },
  {
    id: "trapping-rain-water-e4",
    title: "Gutter Water Trapping",
    difficulty: "Easy",
    description:
      "A gutter has segments with varying depths. Find the total water that can be trapped in the gutter. Water is collected between deeper segments on both sides.",
    constraints: [
      "1 <= depths.length <= 100",
      "0 <= depths[i] <= 100"
    ],
    examples: [
      {
        input: "depths = [0, 2, 0, 3, 0, 1, 0, 2]",
        output: "8",
        explanation:
          "The gutter can trap 8 units of water."
      },
      {
        input: "depths = [1, 1, 1, 1]",
        output: "0",
        hidden: false
      }
    ],
    testCases: [
      {
        input: "[0,2,0,3,0,1,0,2]",
        expectedOutput: "8",
        hidden: false
      },
      {
        input: "[1,1,1,1]",
        expectedOutput: "0",
        hidden: false
      },
      {
        input: "[2,0,2]",
        expectedOutput: "2",
        hidden: false
      }
    ],
    starterCode: {
      python: `def gutter_water_trapping(depths):
    pass`,

      java: `class Solution {
    public int gutterWaterTrapping(int[] depths) {
        return 0;
    }
}`,

      c: `#include <stdio.h>

int gutterWaterTrapping(int depths[], int n) {
    return 0;
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int gutterWaterTrapping(vector<int>& depths) {
        return 0;
    }
};`
    }
  },
  {
    id: "trapping-rain-water-e5",
    title: "Container Water Volume",
    difficulty: "Easy",
    description:
      "Given container wall heights, find the total water volume that can be stored. Each wall segment has unit width and the water level is determined by the shorter bounding wall.",
    constraints: [
      "1 <= walls.length <= 100",
      "0 <= walls[i] <= 100"
    ],
    examples: [
      {
        input: "walls = [1, 0, 2, 0, 1]",
        output: "2",
        explanation:
          "The container can store 2 units of water."
      },
      {
        input: "walls = [2, 0, 1, 0, 2]",
        output: "3",
        explanation:
          "The container can store 3 units of water."
      }
    ],
    testCases: [
      {
        input: "[1,0,2,0,1]",
        expectedOutput: "2",
        hidden: false
      },
      {
        input: "[2,0,1,0,2]",
        expectedOutput: "3",
        hidden: false
      },
      {
        input: "[0,1,0,2,1,0,1,3,2,1,2,1]",
        expectedOutput: "6",
        hidden: false
      }
    ],
    starterCode: {
      python: `def container_water_volume(walls):
    pass`,

      java: `class Solution {
    public int containerWaterVolume(int[] walls) {
        return 0;
    }
}`,

      c: `#include <stdio.h>

int containerWaterVolume(int walls[], int n) {
    return 0;
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int containerWaterVolume(vector<int>& walls) {
        return 0;
    }
};`
    }
  },
  {
    id: "trapping-rain-water-m1",
    title: "Rainwater Harvesting",
    difficulty: "Medium",
    description:
      "Given terrain elevations, calculate the total rainwater that can be harvested. This represents the water collected in a rainwater harvesting system.",
    constraints: [
      "1 <= elevations.length <= 10^4",
      "0 <= elevations[i] <= 10^5"
    ],
    examples: [
      {
        input: "elevations = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]",
        output: "6",
        explanation:
          "The total harvestable rainwater is 6 units."
      },
      {
        input: "elevations = [4, 2, 0, 3, 2, 5]",
        output: "9",
        explanation:
          "The total harvestable rainwater is 9 units."
      }
    ],
    testCases: [
      {
        input: "[0,1,0,2,1,0,1,3,2,1,2,1]",
        expectedOutput: "6",
        hidden: false
      },
      {
        input: "[4,2,0,3,2,5]",
        expectedOutput: "9",
        hidden: false
      },
      {
        input: "[3,0,2,0,4]",
        expectedOutput: "7",
        hidden: false
      }
    ],
    starterCode: {
      python: `def rainwater_harvesting(elevations):
    pass`,

      java: `class Solution {
    public int rainwaterHarvesting(int[] elevations) {
        return 0;
    }
}`,

      c: `#include <stdio.h>

int rainwaterHarvesting(int elevations[], int n) {
    return 0;
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int rainwaterHarvesting(vector<int>& elevations) {
        return 0;
    }
};`
    }
  },
  {
    id: "trapping-rain-water-m2",
    title: "Water Tank Segments",
    difficulty: "Medium",
    description:
      "A water tank has segments with varying heights. Given a list of query indices, return the maximum water that can be stored in the subarray starting from each query index to the end.",
    constraints: [
      "1 <= heights.length <= 10^4",
      "1 <= queries.length <= 10^4",
      "0 <= heights[i] <= 10^5",
      "0 <= queries[i] < heights.length"
    ],
    examples: [
      {
        input: "heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], queries = [0, 3, 6]",
        output: "[6, 3, 0]",
        explanation:
          "The maximum water from each query index to the end is computed."
      },
      {
        input: "heights = [3, 0, 2, 0, 4], queries = [0, 2]",
        output: "[7, 4]",
        explanation:
          "The subarray from index 0 has 7 units, and from index 2 has 4 units."
      }
    ],
    testCases: [
      {
        input: "heights = [0,1,0,2,1,0,1,3,2,1,2,1], queries = [0,3,6]",
        expectedOutput: "[6,3,0]",
        hidden: false
      },
      {
        input: "heights = [3,0,2,0,4], queries = [0,2]",
        expectedOutput: "[7,4]",
        hidden: false
      },
      {
        input: "heights = [2,0,2], queries = [0,1,2]",
        expectedOutput: "[2,0,0]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def water_tank_segments(heights, queries):
    pass`,

      java: `class Solution {
    public int[] waterTankSegments(int[] heights, int[] queries) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void waterTankSegments(int heights[], int n, int queries[], int q, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> waterTankSegments(vector<int>& heights, vector<int>& queries) {
        return {};
    }
};`
    }
  },
  {
    id: "trapping-rain-water-m3",
    title: "Lake Water Volume",
    difficulty: "Medium",
    description:
      "Given lake bed depths at different positions, find the total water volume that can be held. The water level is determined by the shallower boundary on either side.",
    constraints: [
      "1 <= depths.length <= 10^4",
      "0 <= depths[i] <= 10^5"
    ],
    examples: [
      {
        input: "depths = [2, 0, 1, 0, 3, 2]",
        output: "5",
        explanation:
          "The lake can hold 5 units of water."
      },
      {
        input: "depths = [1, 2, 3, 4]",
        output: "0",
        explanation:
          "No water can be trapped as depths only increase."
      }
    ],
    testCases: [
      {
        input: "[2,0,1,0,3,2]",
        expectedOutput: "5",
        hidden: false
      },
      {
        input: "[1,2,3,4]",
        expectedOutput: "0",
        hidden: false
      },
      {
        input: "[4,3,2,1]",
        expectedOutput: "0",
        hidden: false
      }
    ],
    starterCode: {
      python: `def lake_water_volume(depths):
    pass`,

      java: `class Solution {
    public int lakeWaterVolume(int[] depths) {
        return 0;
    }
}`,

      c: `#include <stdio.h>

int lakeWaterVolume(int depths[], int n) {
    return 0;
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int lakeWaterVolume(vector<int>& depths) {
        return 0;
    }
};`
    }
  },
  {
    id: "trapping-rain-water-m4",
    title: "Reservoir Water Storage",
    difficulty: "Medium",
    description:
      "A reservoir has wall segments with different heights. Calculate the total water that can be stored. Additionally, return the maximum water that can be stored in any single segment.",
    constraints: [
      "1 <= walls.length <= 10^4",
      "0 <= walls[i] <= 10^5"
    ],
    examples: [
      {
        input: "walls = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]",
        output: "[6, 2]",
        explanation:
          "The total water is 6, and the maximum water in any segment is 2."
      },
      {
        input: "walls = [3, 0, 2, 0, 4]",
        output: "[7, 3]",
        explanation:
          "The total water is 7, and the maximum water in any segment is 3."
      }
    ],
    testCases: [
      {
        input: "[0,1,0,2,1,0,1,3,2,1,2,1]",
        expectedOutput: "[6,2]",
        hidden: false
      },
      {
        input: "[3,0,2,0,4]",
        expectedOutput: "[7,3]",
        hidden: false
      },
      {
        input: "[2,0,2]",
        expectedOutput: "[2,2]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def reservoir_water_storage(walls):
    pass`,

      java: `class Solution {
    public int[] reservoirWaterStorage(int[] walls) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void reservoirWaterStorage(int walls[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> reservoirWaterStorage(vector<int>& walls) {
        return {};
    }
};`
    }
  },
  {
    id: "trapping-rain-water-m5",
    title: "Water Collection with Rate",
    difficulty: "Medium",
    description:
      "Given terrain elevations and a collection rate, calculate the total water that can be collected. The result is the water volume multiplied by the rate.",
    constraints: [
      "1 <= elevations.length <= 10^4",
      "0 <= elevations[i] <= 10^5",
      "1 <= rate <= 100"
    ],
    examples: [
      {
        input: "elevations = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], rate = 10",
        output: "60",
        explanation:
          "The total water is 6, and the collection value is 6 * 10 = 60."
      },
      {
        input: "elevations = [3, 0, 2, 0, 4], rate = 5",
        output: "35",
        explanation:
          "The total water is 7, and the collection value is 7 * 5 = 35."
      }
    ],
    testCases: [
      {
        input: "elevations = [0,1,0,2,1,0,1,3,2,1,2,1], rate = 10",
        expectedOutput: "60",
        hidden: false
      },
      {
        input: "elevations = [3,0,2,0,4], rate = 5",
        expectedOutput: "35",
        hidden: false
      },
      {
        input: "elevations = [2,0,2], rate = 3",
        expectedOutput: "6",
        hidden: false
      }
    ],
    starterCode: {
      python: `def water_collection_with_rate(elevations, rate):
    pass`,

      java: `class Solution {
    public int waterCollectionWithRate(int[] elevations, int rate) {
        return 0;
    }
}`,

      c: `#include <stdio.h>

int waterCollectionWithRate(int elevations[], int n, int rate) {
    return 0;
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int waterCollectionWithRate(vector<int>& elevations, int rate) {
        return 0;
    }
};`
    }
  },
  {
    id: "trapping-rain-water-h1",
    title: "Circular Water Collection",
    difficulty: "Hard",
    description:
      "Terrain elevations are arranged in a circular pattern. Find the maximum water that can be trapped, where the scan may wrap around at most once. Each position has unit width.",
    constraints: [
      "1 <= elevations.length <= 2 * 10^4",
      "0 <= elevations[i] <= 10^5"
    ],
    examples: [
      {
        input: "elevations = [1, 0, 1]",
        output: "1",
        explanation:
          "The circular arrangement allows wrapping to form a container of height 1."
      },
      {
        input: "elevations = [3, 1, 2]",
        output: "1",
        explanation:
          "The circular arrangement allows wrapping to form a container of height 1."
      }
    ],
    testCases: [
      {
        input: "[1,0,1]",
        expectedOutput: "1",
        hidden: false
      },
      {
        input: "[3,1,2]",
        expectedOutput: "1",
        hidden: false
      },
      {
        input: "[2,0,2,0,2]",
        expectedOutput: "4",
        hidden: false
      }
    ],
    starterCode: {
      python: `def circular_water_collection(elevations):
    pass`,

      java: `class Solution {
    public int circularWaterCollection(int[] elevations) {
        return 0;
    }
}`,

      c: `#include <stdio.h>

int circularWaterCollection(int elevations[], int n) {
    return 0;
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int circularWaterCollection(vector<int>& elevations) {
        return 0;
    }
};`
    }
  },
  {
    id: "trapping-rain-water-h2",
    title: "Multiple Terrain Comparison",
    difficulty: "Hard",
    description:
      "Given multiple terrain elevation maps, find the maximum water that can be trapped across all terrains. Return the terrain index and the water value.",
    constraints: [
      "1 <= terrains.length <= 10^3",
      "1 <= terrains[i].length <= 10^3",
      "0 <= terrains[i][j] <= 10^4"
    ],
    examples: [
      {
        input: "terrains = [[0,1,0,2], [3,0,2,0,4]]",
        output: "[1, 7]",
        explanation:
          "The first terrain has 2 units of water, and the second has 7 units."
      },
      {
        input: "terrains = [[1,0,1], [2,0,2]]",
        output: "[0, 1]",
        explanation:
          "Both terrains have 1 unit, but the first one is returned."
      }
    ],
    testCases: [
      {
        input: "terrains = [[0,1,0,2],[3,0,2,0,4]]",
        expectedOutput: "[1,7]",
        hidden: false
      },
      {
        input: "terrains = [[1,0,1],[2,0,2]]",
        expectedOutput: "[0,1]",
        hidden: false
      },
      {
        input: "terrains = [[0,1,0,2,1,0,1,3,2,1,2,1]]",
        expectedOutput: "[0,6]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def multiple_terrain_comparison(terrains):
    pass`,

      java: `class Solution {
    public int[] multipleTerrainComparison(int[][] terrains) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void multipleTerrainComparison(int terrains[][1000], int t, int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> multipleTerrainComparison(vector<vector<int>>& terrains) {
        return {};
    }
};`
    }
  },
  {
    id: "trapping-rain-water-h3",
    title: "Dynamic Elevation Updates",
    difficulty: "Hard",
    description:
      "Given initial terrain elevations and a series of updates, return the total trapped water after each update. Each update changes one elevation value.",
    constraints: [
      "1 <= elevations.length <= 10^3",
      "1 <= updates.length <= 10^3",
      "0 <= elevations[i], updates[i][1] <= 10^4",
      "0 <= updates[i][0] < elevations.length"
    ],
    examples: [
      {
        input: "elevations = [0, 1, 0, 2], updates = [[1, 2], [2, 1]]",
        output: "[2, 1]",
        explanation:
          "After first update: [0,2,0,2] has 2 units. After second update: [0,2,1,2] has 1 unit."
      },
      {
        input: "elevations = [3, 0, 2], updates = [[0, 1]]",
        output: "[0]",
        explanation:
          "After update: [1,0,2] has no trapped water."
      }
    ],
    testCases: [
      {
        input: "elevations = [0,1,0,2], updates = [[1,2],[2,1]]",
        expectedOutput: "[2,1]",
        hidden: false
      },
      {
        input: "elevations = [3,0,2], updates = [[0,1]]",
        expectedOutput: "[0]",
        hidden: false
      },
      {
        input: "elevations = [2,0,2], updates = [[1,3]]",
        expectedOutput: "[1]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def dynamic_elevation_updates(elevations, updates):
    pass`,

      java: `class Solution {
    public int[] dynamicElevationUpdates(int[] elevations, int[][] updates) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void dynamicElevationUpdates(int elevations[], int n, int updates[][2], int u, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> dynamicElevationUpdates(vector<int>& elevations, vector<vector<int>>& updates) {
        return {};
    }
};`
    }
  },
  {
    id: "trapping-rain-water-h4",
    title: "Water Collection with Minimum Width",
    difficulty: "Hard",
    description:
      "Given terrain elevations, find the maximum water that can be trapped such that the water width is at least k. The height is still limited by the minimum elevation in the range.",
    constraints: [
      "1 <= elevations.length <= 10^4",
      "1 <= k <= elevations.length",
      "0 <= elevations[i] <= 10^5"
    ],
    examples: [
      {
        input: "elevations = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], k = 3",
        output: "4",
        explanation:
          "The maximum water with width >= 3 is 4 units."
      },
      {
        input: "elevations = [3, 0, 2, 0, 4], k = 2",
        output: "4",
        explanation:
          "The maximum water with width >= 2 is 4 units."
      }
    ],
    testCases: [
      {
        input: "elevations = [0,1,0,2,1,0,1,3,2,1,2,1], k = 3",
        expectedOutput: "4",
        hidden: false
      },
      {
        input: "elevations = [3,0,2,0,4], k = 2",
        expectedOutput: "4",
        hidden: false
      },
      {
        input: "elevations = [2,0,2,0,2], k = 2",
        expectedOutput: "4",
        hidden: false
      }
    ],
    starterCode: {
      python: `def water_collection_with_min_width(elevations, k):
    pass`,

      java: `class Solution {
    public int waterCollectionWithMinWidth(int[] elevations, int k) {
        return 0;
    }
}`,

      c: `#include <stdio.h>

int waterCollectionWithMinWidth(int elevations[], int n, int k) {
    return 0;
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int waterCollectionWithMinWidth(vector<int>& elevations, int k) {
        return 0;
    }
};`
    }
  },
  {
    id: "trapping-rain-water-h5",
    title: "Terrain Segmentation",
    difficulty: "Hard",
    description:
      "Given terrain elevations and a number of segments k, partition the terrain into k contiguous segments such that the maximum water across all segments is minimized. Return this minimum value.",
    constraints: [
      "1 <= elevations.length <= 10^3",
      "1 <= k <= elevations.length"
    ],
    examples: [
      {
        input: "elevations = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], k = 2",
        output: "3",
        explanation:
          "Split into [0,1,0,2,1] and [0,1,3,2,1,2,1]. The max waters are 2 and 3, so the answer is 3."
      },
      {
        input: "elevations = [3, 0, 2, 0, 4], k = 1",
        output: "7",
        explanation:
          "No split needed, the max water is 7."
      }
    ],
    testCases: [
      {
        input: "elevations = [0,1,0,2,1,0,1,3,2,1,2,1], k = 2",
        expectedOutput: "3",
        hidden: false
      },
      {
        input: "elevations = [3,0,2,0,4], k = 1",
        expectedOutput: "7",
        hidden: false
      },
      {
        input: "elevations = [2,0,2], k = 2",
        expectedOutput: "1",
        hidden: false
      }
    ],
    starterCode: {
      python: `def terrain_segmentation(elevations, k):
    pass`,

      java: `class Solution {
    public int terrainSegmentation(int[] elevations, int k) {
        return 0;
    }
}`,

      c: `#include <stdio.h>

int terrainSegmentation(int elevations[], int n, int k) {
    return 0;
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int terrainSegmentation(vector<int>& elevations, int k) {
        return 0;
    }
};`
    }
  }
];