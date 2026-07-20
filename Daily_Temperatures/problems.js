export const dailyTemperaturesProblems = [
  {
    id: "daily-temperatures-e1",
    title: "City Weather Warmup",
    difficulty: "Easy",
    description:
      "Given daily city temperatures, return an array where each position contains the number of days until a warmer temperature. If no warmer day exists, store 0.",
    constraints: [
      "1 <= temperatures.length <= 1000",
      "30 <= temperatures[i] <= 100"
    ],
    examples: [
      {
        input: "temperatures = [73,74,75,71,69,72,76,73]",
        output: "[1,1,4,2,1,1,0,0]",
        explanation:
          "The temperature 75 at index 2 waits 4 days until the warmer temperature 76."
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
      python: `def city_weather_warmup(temperatures):
    pass`,

      java: `class Solution {
    public int[] cityWeatherWarmup(int[] temperatures) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void cityWeatherWarmup(int temperatures[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> cityWeatherWarmup(vector<int>& temperatures) {
        return {};
    }
};`
    }
  },
  {
    id: "daily-temperatures-e2",
    title: "Greenhouse Temperature Waits",
    difficulty: "Easy",
    description:
      "A greenhouse records one temperature reading per day. Return how many days each reading must wait before a strictly warmer reading appears. Store 0 if it never happens.",
    constraints: [
      "1 <= readings.length <= 1000",
      "0 <= readings[i] <= 120"
    ],
    examples: [
      {
        input: "readings = [65,65,70,68]",
        output: "[2,1,0,0]",
        explanation:
          "Equal temperatures do not count as warmer, so the first 65 waits 2 days for 70."
      },
      {
        input: "readings = [50,51,50,52]",
        output: "[1,2,1,0]",
        explanation:
          "Each answer is the distance to the next strictly warmer greenhouse reading."
      }
    ],
    testCases: [
      {
        input: "[65,65,70,68]",
        expectedOutput: "[2,1,0,0]",
        hidden: false
      },
      {
        input: "[50,51,50,52]",
        expectedOutput: "[1,2,1,0]",
        hidden: false
      },
      {
        input: "[72]",
        expectedOutput: "[0]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def greenhouse_temperature_waits(readings):
    pass`,

      java: `class Solution {
    public int[] greenhouseTemperatureWaits(int[] readings) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void greenhouseTemperatureWaits(int readings[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> greenhouseTemperatureWaits(vector<int>& readings) {
        return {};
    }
};`
    }
  },
  {
    id: "daily-temperatures-e3",
    title: "Server Room Heat Alerts",
    difficulty: "Easy",
    description:
      "Server room temperatures are recorded over time. For each reading, return the number of later readings until a warmer server room temperature is found, or 0 if none exists.",
    constraints: [
      "1 <= roomTemperatures.length <= 1000",
      "0 <= roomTemperatures[i] <= 150"
    ],
    examples: [
      {
        input: "roomTemperatures = [40,42,41,45,43]",
        output: "[1,2,1,0,0]",
        explanation:
          "The reading 42 waits 2 positions before the warmer reading 45 appears."
      },
      {
        input: "roomTemperatures = [70,70,70]",
        output: "[0,0,0]",
        explanation:
          "No reading has a strictly warmer value after it."
      }
    ],
    testCases: [
      {
        input: "[40,42,41,45,43]",
        expectedOutput: "[1,2,1,0,0]",
        hidden: false
      },
      {
        input: "[70,70,70]",
        expectedOutput: "[0,0,0]",
        hidden: false
      },
      {
        input: "[35,34,36,33,37]",
        expectedOutput: "[2,1,2,1,0]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def server_room_heat_alerts(room_temperatures):
    pass`,

      java: `class Solution {
    public int[] serverRoomHeatAlerts(int[] roomTemperatures) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void serverRoomHeatAlerts(int roomTemperatures[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> serverRoomHeatAlerts(vector<int>& roomTemperatures) {
        return {};
    }
};`
    }
  },
  {
    id: "daily-temperatures-e4",
    title: "Vineyard Frost Recovery",
    difficulty: "Easy",
    description:
      "A vineyard tracks nightly temperatures. Return how many nights each reading must wait until a warmer night occurs. If no warmer night occurs later, store 0.",
    constraints: [
      "1 <= nightTemperatures.length <= 1000",
      "-40 <= nightTemperatures[i] <= 80"
    ],
    examples: [
      {
        input: "nightTemperatures = [-2,-1,-3,0]",
        output: "[1,2,1,0]",
        explanation:
          "The night with -1 waits 2 nights until the warmer reading 0."
      },
      {
        input: "nightTemperatures = [5,4,6,6,7]",
        output: "[2,1,2,1,0]",
        explanation:
          "Equal readings of 6 are not warmer, so the first 6 waits for 7."
      }
    ],
    testCases: [
      {
        input: "[-2,-1,-3,0]",
        expectedOutput: "[1,2,1,0]",
        hidden: false
      },
      {
        input: "[5,4,6,6,7]",
        expectedOutput: "[2,1,2,1,0]",
        hidden: false
      },
      {
        input: "[1,2,1]",
        expectedOutput: "[1,0,0]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def vineyard_frost_recovery(night_temperatures):
    pass`,

      java: `class Solution {
    public int[] vineyardFrostRecovery(int[] nightTemperatures) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void vineyardFrostRecovery(int nightTemperatures[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> vineyardFrostRecovery(vector<int>& nightTemperatures) {
        return {};
    }
};`
    }
  },
  {
    id: "daily-temperatures-e5",
    title: "Training Heat Index Waits",
    difficulty: "Easy",
    description:
      "A sports coach records heat index values during training sessions. Return the number of sessions until a higher heat index appears for each session, or 0 if none appears.",
    constraints: [
      "1 <= heatIndex.length <= 1000",
      "0 <= heatIndex[i] <= 200"
    ],
    examples: [
      {
        input: "heatIndex = [10,8,9,11]",
        output: "[3,1,1,0]",
        explanation:
          "The first session waits 3 sessions until heat index 11 appears."
      },
      {
        input: "heatIndex = [3,3,4,2,5]",
        output: "[2,1,2,1,0]",
        explanation:
          "Equal values are skipped because the next reading must be higher."
      }
    ],
    testCases: [
      {
        input: "[10,8,9,11]",
        expectedOutput: "[3,1,1,0]",
        hidden: false
      },
      {
        input: "[3,3,4,2,5]",
        expectedOutput: "[2,1,2,1,0]",
        hidden: false
      },
      {
        input: "[9,8,7,10]",
        expectedOutput: "[3,2,1,0]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def training_heat_index_waits(heat_index):
    pass`,

      java: `class Solution {
    public int[] trainingHeatIndexWaits(int[] heatIndex) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void trainingHeatIndexWaits(int heatIndex[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> trainingHeatIndexWaits(vector<int>& heatIndex) {
        return {};
    }
};`
    }
  },
  {
    id: "daily-temperatures-m1",
    title: "Marine Buoy Warm Currents",
    difficulty: "Medium",
    description:
      "Marine buoys record water temperature readings. Return how many readings must pass before each buoy reading sees a warmer water temperature. Store 0 when no warmer reading exists later.",
    constraints: [
      "1 <= waterTemperatures.length <= 10^5",
      "-20 <= waterTemperatures[i] <= 120"
    ],
    examples: [
      {
        input: "waterTemperatures = [58,59,57,60,56,61]",
        output: "[1,2,1,2,1,0]",
        explanation:
          "The reading 59 waits 2 readings until 60, and 60 waits 2 readings until 61."
      },
      {
        input: "waterTemperatures = [62,61,60,63]",
        output: "[3,2,1,0]",
        explanation:
          "All first three readings eventually reach the warmer reading 63."
      }
    ],
    testCases: [
      {
        input: "[58,59,57,60,56,61]",
        expectedOutput: "[1,2,1,2,1,0]",
        hidden: false
      },
      {
        input: "[62,61,60,63]",
        expectedOutput: "[3,2,1,0]",
        hidden: false
      },
      {
        input: "[55,55,55,56]",
        expectedOutput: "[3,2,1,0]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def marine_buoy_warm_currents(water_temperatures):
    pass`,

      java: `class Solution {
    public int[] marineBuoyWarmCurrents(int[] waterTemperatures) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void marineBuoyWarmCurrents(int waterTemperatures[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> marineBuoyWarmCurrents(vector<int>& waterTemperatures) {
        return {};
    }
};`
    }
  },
  {
    id: "daily-temperatures-m2",
    title: "Hospital Storage Temperature Recovery",
    difficulty: "Medium",
    description:
      "A hospital storage unit logs chamber temperatures. For every chamber reading, return how long it takes before a warmer reading appears later in the log. Use 0 when there is no warmer reading.",
    constraints: [
      "1 <= chamberTemperatures.length <= 10^5",
      "-100 <= chamberTemperatures[i] <= 100"
    ],
    examples: [
      {
        input: "chamberTemperatures = [2,1,3,2,4]",
        output: "[2,1,2,1,0]",
        explanation:
          "The reading 2 at index 0 waits 2 positions for 3, and the reading 3 waits 2 positions for 4."
      },
      {
        input: "chamberTemperatures = [4,3,2,1]",
        output: "[0,0,0,0]",
        explanation:
          "The readings only decrease, so no warmer future reading exists."
      }
    ],
    testCases: [
      {
        input: "[2,1,3,2,4]",
        expectedOutput: "[2,1,2,1,0]",
        hidden: false
      },
      {
        input: "[4,3,2,1]",
        expectedOutput: "[0,0,0,0]",
        hidden: false
      },
      {
        input: "[1,2,2,3]",
        expectedOutput: "[1,2,1,0]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def storage_temperature_recovery(chamber_temperatures):
    pass`,

      java: `class Solution {
    public int[] storageTemperatureRecovery(int[] chamberTemperatures) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void storageTemperatureRecovery(int chamberTemperatures[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> storageTemperatureRecovery(vector<int>& chamberTemperatures) {
        return {};
    }
};`
    }
  },
  {
    id: "daily-temperatures-m3",
    title: "Runway Surface Warmup",
    difficulty: "Medium",
    description:
      "An airport records runway surface temperatures before flights. Return the number of readings until a warmer surface temperature appears for each reading, or 0 when it never appears.",
    constraints: [
      "1 <= surfaceTemperatures.length <= 10^5",
      "-60 <= surfaceTemperatures[i] <= 160"
    ],
    examples: [
      {
        input: "surfaceTemperatures = [15,14,16,13,18,17]",
        output: "[2,1,2,1,0,0]",
        explanation:
          "The reading 16 waits 2 positions until the warmer reading 18."
      },
      {
        input: "surfaceTemperatures = [20,21,19,22,18]",
        output: "[1,2,1,0,0]",
        explanation:
          "The first reading waits 1 position, while the second waits 2 positions."
      }
    ],
    testCases: [
      {
        input: "[15,14,16,13,18,17]",
        expectedOutput: "[2,1,2,1,0,0]",
        hidden: false
      },
      {
        input: "[20,21,19,22,18]",
        expectedOutput: "[1,2,1,0,0]",
        hidden: false
      },
      {
        input: "[5,6,7,8]",
        expectedOutput: "[1,1,1,0]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def runway_surface_warmup(surface_temperatures):
    pass`,

      java: `class Solution {
    public int[] runwaySurfaceWarmup(int[] surfaceTemperatures) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void runwaySurfaceWarmup(int surfaceTemperatures[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> runwaySurfaceWarmup(vector<int>& surfaceTemperatures) {
        return {};
    }
};`
    }
  },
  {
    id: "daily-temperatures-m4",
    title: "Transformer Heat Rise",
    difficulty: "Medium",
    description:
      "A power grid records transformer temperatures. For each reading, return how many readings pass before a higher transformer temperature is recorded. Store 0 if there is no higher future reading.",
    constraints: [
      "1 <= transformerTemperatures.length <= 10^5",
      "0 <= transformerTemperatures[i] <= 10^6"
    ],
    examples: [
      {
        input: "transformerTemperatures = [80,79,81,78,82,77]",
        output: "[2,1,2,1,0,0]",
        explanation:
          "The reading 81 waits 2 positions until the warmer reading 82."
      },
      {
        input: "transformerTemperatures = [90,90,91]",
        output: "[2,1,0]",
        explanation:
          "The first 90 skips the equal 90 and waits for 91."
      }
    ],
    testCases: [
      {
        input: "[80,79,81,78,82,77]",
        expectedOutput: "[2,1,2,1,0,0]",
        hidden: false
      },
      {
        input: "[90,90,91]",
        expectedOutput: "[2,1,0]",
        hidden: false
      },
      {
        input: "[70,69,68,71]",
        expectedOutput: "[3,2,1,0]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def transformer_heat_rise(transformer_temperatures):
    pass`,

      java: `class Solution {
    public int[] transformerHeatRise(int[] transformerTemperatures) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void transformerHeatRise(int transformerTemperatures[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> transformerHeatRise(vector<int>& transformerTemperatures) {
        return {};
    }
};`
    }
  },
  {
    id: "daily-temperatures-m5",
    title: "Soil Warmup Waits",
    difficulty: "Medium",
    description:
      "An agriculture sensor records soil temperatures. Return how many readings each soil temperature must wait until a warmer soil temperature appears later, or 0 if it does not.",
    constraints: [
      "1 <= soilTemperatures.length <= 10^5",
      "-30 <= soilTemperatures[i] <= 100"
    ],
    examples: [
      {
        input: "soilTemperatures = [12,11,12,10,13]",
        output: "[4,1,2,1,0]",
        explanation:
          "The first 12 waits 4 readings until 13, and the second 12 waits 2 readings."
      },
      {
        input: "soilTemperatures = [7,8,7,9,6,10]",
        output: "[1,2,1,2,1,0]",
        explanation:
          "Each value is matched with the nearest later reading that is strictly warmer."
      }
    ],
    testCases: [
      {
        input: "[12,11,12,10,13]",
        expectedOutput: "[4,1,2,1,0]",
        hidden: false
      },
      {
        input: "[7,8,7,9,6,10]",
        expectedOutput: "[1,2,1,2,1,0]",
        hidden: false
      },
      {
        input: "[4,4,4,5]",
        expectedOutput: "[3,2,1,0]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def soil_warmup_waits(soil_temperatures):
    pass`,

      java: `class Solution {
    public int[] soilWarmupWaits(int[] soilTemperatures) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void soilWarmupWaits(int soilTemperatures[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> soilWarmupWaits(vector<int>& soilTemperatures) {
        return {};
    }
};`
    }
  },
  {
    id: "daily-temperatures-h1",
    title: "National Weather Station Waits",
    difficulty: "Hard",
    description:
      "A national weather station stores a long temperature log. Return the number of days each entry must wait until a strictly warmer day appears. If no warmer day exists, store 0.",
    constraints: [
      "1 <= temperatures.length <= 2 * 10^5",
      "-10^9 <= temperatures[i] <= 10^9"
    ],
    examples: [
      {
        input: "temperatures = [73,71,72,70,76,74,77]",
        output: "[4,1,2,1,2,1,0]",
        explanation:
          "The first reading waits 4 days until 76, and 76 waits 2 days until 77."
      },
      {
        input: "temperatures = [100,99,98,97]",
        output: "[0,0,0,0]",
        explanation:
          "A strictly warmer future day never appears for any entry."
      }
    ],
    testCases: [
      {
        input: "[73,71,72,70,76,74,77]",
        expectedOutput: "[4,1,2,1,2,1,0]",
        hidden: false
      },
      {
        input: "[100,99,98,97]",
        expectedOutput: "[0,0,0,0]",
        hidden: false
      },
      {
        input: "[30,31,30,31,32]",
        expectedOutput: "[1,3,1,1,0]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def national_weather_station_waits(temperatures):
    pass`,

      java: `class Solution {
    public int[] nationalWeatherStationWaits(int[] temperatures) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void nationalWeatherStationWaits(int temperatures[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> nationalWeatherStationWaits(vector<int>& temperatures) {
        return {};
    }
};`
    }
  },
  {
    id: "daily-temperatures-h2",
    title: "Oven Temperature Ramp Waits",
    difficulty: "Hard",
    description:
      "A manufacturing oven records temperature checkpoints during a ramp cycle. Return how many checkpoints each reading waits before a higher oven temperature appears later, or 0 if none appears.",
    constraints: [
      "1 <= ovenTemperatures.length <= 2 * 10^5",
      "0 <= ovenTemperatures[i] <= 10^9"
    ],
    examples: [
      {
        input: "ovenTemperatures = [300,295,296,294,310,305]",
        output: "[4,1,2,1,0,0]",
        explanation:
          "The reading 300 waits 4 checkpoints until 310, while 296 waits 2 checkpoints."
      },
      {
        input: "ovenTemperatures = [200,200,201,199,202]",
        output: "[2,1,2,1,0]",
        explanation:
          "Equal 200 readings are not warmer, so both wait for 201."
      }
    ],
    testCases: [
      {
        input: "[300,295,296,294,310,305]",
        expectedOutput: "[4,1,2,1,0,0]",
        hidden: false
      },
      {
        input: "[200,200,201,199,202]",
        expectedOutput: "[2,1,2,1,0]",
        hidden: false
      },
      {
        input: "[5,4,3,6,2,7]",
        expectedOutput: "[3,2,1,2,1,0]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def oven_temperature_ramp_waits(oven_temperatures):
    pass`,

      java: `class Solution {
    public int[] ovenTemperatureRampWaits(int[] ovenTemperatures) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void ovenTemperatureRampWaits(int ovenTemperatures[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> ovenTemperatureRampWaits(vector<int>& ovenTemperatures) {
        return {};
    }
};`
    }
  },
  {
    id: "daily-temperatures-h3",
    title: "Data Center Cooling Rebound",
    difficulty: "Hard",
    description:
      "A data center monitors rack temperatures after cooling adjustments. For each rack reading, return how many later readings pass before a warmer rack temperature appears. Store 0 if no warmer reading appears.",
    constraints: [
      "1 <= rackTemperatures.length <= 2 * 10^5",
      "0 <= rackTemperatures[i] <= 10^9"
    ],
    examples: [
      {
        input: "rackTemperatures = [50,49,51,48,47,52,46]",
        output: "[2,1,3,2,1,0,0]",
        explanation:
          "The reading 51 waits 3 positions for 52, while 48 waits 2 positions for 52."
      },
      {
        input: "rackTemperatures = [60,61,60,62,59,63]",
        output: "[1,2,1,2,1,0]",
        explanation:
          "The second reading waits past 60 until the warmer reading 62."
      }
    ],
    testCases: [
      {
        input: "[50,49,51,48,47,52,46]",
        expectedOutput: "[2,1,3,2,1,0,0]",
        hidden: false
      },
      {
        input: "[60,61,60,62,59,63]",
        expectedOutput: "[1,2,1,2,1,0]",
        hidden: false
      },
      {
        input: "[45,45,44,46]",
        expectedOutput: "[3,2,1,0]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def data_center_cooling_rebound(rack_temperatures):
    pass`,

      java: `class Solution {
    public int[] dataCenterCoolingRebound(int[] rackTemperatures) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void dataCenterCoolingRebound(int rackTemperatures[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> dataCenterCoolingRebound(vector<int>& rackTemperatures) {
        return {};
    }
};`
    }
  },
  {
    id: "daily-temperatures-h4",
    title: "Climate Research Hourly Forecast",
    difficulty: "Hard",
    description:
      "A climate research lab records hourly forecast temperatures. Return the number of hours until a strictly warmer forecast occurs for each hour. If no warmer hour exists later, store 0.",
    constraints: [
      "1 <= hourlyTemperatures.length <= 2 * 10^5",
      "-10^9 <= hourlyTemperatures[i] <= 10^9"
    ],
    examples: [
      {
        input: "hourlyTemperatures = [-5,-4,-4,-3,-6,-2]",
        output: "[1,2,1,2,1,0]",
        explanation:
          "The first -4 skips the equal -4 and waits 2 hours for -3."
      },
      {
        input: "hourlyTemperatures = [0,-1,-2,1]",
        output: "[3,2,1,0]",
        explanation:
          "All first three readings eventually reach the warmer reading 1."
      }
    ],
    testCases: [
      {
        input: "[-5,-4,-4,-3,-6,-2]",
        expectedOutput: "[1,2,1,2,1,0]",
        hidden: false
      },
      {
        input: "[0,-1,-2,1]",
        expectedOutput: "[3,2,1,0]",
        hidden: false
      },
      {
        input: "[10,9,10,11]",
        expectedOutput: "[3,1,1,0]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def climate_research_hourly_forecast(hourly_temperatures):
    pass`,

      java: `class Solution {
    public int[] climateResearchHourlyForecast(int[] hourlyTemperatures) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void climateResearchHourlyForecast(int hourlyTemperatures[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> climateResearchHourlyForecast(vector<int>& hourlyTemperatures) {
        return {};
    }
};`
    }
  },
  {
    id: "daily-temperatures-h5",
    title: "Satellite Thermal Cycle Alerts",
    difficulty: "Hard",
    description:
      "A satellite records panel temperatures through a long thermal cycle. For each panel reading, return how many readings pass before a warmer panel temperature appears later. Store 0 when no warmer reading exists.",
    constraints: [
      "1 <= panelTemperatures.length <= 2 * 10^5",
      "-10^9 <= panelTemperatures[i] <= 10^9"
    ],
    examples: [
      {
        input: "panelTemperatures = [3,1,2,1,4,0,5]",
        output: "[4,1,2,1,2,1,0]",
        explanation:
          "The first reading waits 4 positions until 4, and 4 waits 2 positions until 5."
      },
      {
        input: "panelTemperatures = [8,7,6,9,5,10]",
        output: "[3,2,1,2,1,0]",
        explanation:
          "The first three readings all reach 9, while 9 later reaches 10."
      }
    ],
    testCases: [
      {
        input: "[3,1,2,1,4,0,5]",
        expectedOutput: "[4,1,2,1,2,1,0]",
        hidden: false
      },
      {
        input: "[8,7,6,9,5,10]",
        expectedOutput: "[3,2,1,2,1,0]",
        hidden: false
      },
      {
        input: "[2,2,2,1]",
        expectedOutput: "[0,0,0,0]",
        hidden: false
      }
    ],
    starterCode: {
      python: `def satellite_thermal_cycle_alerts(panel_temperatures):
    pass`,

      java: `class Solution {
    public int[] satelliteThermalCycleAlerts(int[] panelTemperatures) {
        return new int[0];
    }
}`,

      c: `#include <stdio.h>

void satelliteThermalCycleAlerts(int panelTemperatures[], int n, int result[]) {
}`,

      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> satelliteThermalCycleAlerts(vector<int>& panelTemperatures) {
        return {};
    }
};`
    }
  }
];
