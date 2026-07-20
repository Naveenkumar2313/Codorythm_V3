export const dailyTemperaturesSolutions = {
  "daily-temperatures-e1": {
    python: `def city_weather_warmup(temperatures):
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
    public int[] cityWeatherWarmup(int[] temperatures) {
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

void cityWeatherWarmup(int temperatures[], int n, int result[]) {
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
    vector<int> cityWeatherWarmup(vector<int>& temperatures) {
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
  "daily-temperatures-e2": {
    python: `def greenhouse_temperature_waits(readings):
    result = [0] * len(readings)
    stack = []

    for i in range(len(readings) - 1, -1, -1):
        while stack and readings[stack[-1]] <= readings[i]:
            stack.pop()

        if stack:
            result[i] = stack[-1] - i

        stack.append(i)

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] greenhouseTemperatureWaits(int[] readings) {
        int n = readings.length;
        int[] result = new int[n];
        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && readings[stack.peek()] <= readings[i]) {
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

void greenhouseTemperatureWaits(int readings[], int n, int result[]) {
    int stack[n];
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && readings[stack[top]] <= readings[i]) {
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
    vector<int> greenhouseTemperatureWaits(vector<int>& readings) {
        int n = readings.size();
        vector<int> result(n, 0);
        stack<int> indices;

        for (int i = n - 1; i >= 0; i--) {
            while (!indices.empty() && readings[indices.top()] <= readings[i]) {
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
  "daily-temperatures-e3": {
    python: `def server_room_heat_alerts(room_temperatures):
    result = [0] * len(room_temperatures)
    stack = []

    for i in range(len(room_temperatures) - 1, -1, -1):
        while stack and room_temperatures[stack[-1]] <= room_temperatures[i]:
            stack.pop()

        if stack:
            result[i] = stack[-1] - i

        stack.append(i)

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] serverRoomHeatAlerts(int[] roomTemperatures) {
        int n = roomTemperatures.length;
        int[] result = new int[n];
        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && roomTemperatures[stack.peek()] <= roomTemperatures[i]) {
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

void serverRoomHeatAlerts(int roomTemperatures[], int n, int result[]) {
    int stack[n];
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && roomTemperatures[stack[top]] <= roomTemperatures[i]) {
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
    vector<int> serverRoomHeatAlerts(vector<int>& roomTemperatures) {
        int n = roomTemperatures.size();
        vector<int> result(n, 0);
        stack<int> indices;

        for (int i = n - 1; i >= 0; i--) {
            while (!indices.empty() && roomTemperatures[indices.top()] <= roomTemperatures[i]) {
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
  "daily-temperatures-e4": {
    python: `def vineyard_frost_recovery(night_temperatures):
    result = [0] * len(night_temperatures)
    stack = []

    for i in range(len(night_temperatures) - 1, -1, -1):
        while stack and night_temperatures[stack[-1]] <= night_temperatures[i]:
            stack.pop()

        if stack:
            result[i] = stack[-1] - i

        stack.append(i)

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] vineyardFrostRecovery(int[] nightTemperatures) {
        int n = nightTemperatures.length;
        int[] result = new int[n];
        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && nightTemperatures[stack.peek()] <= nightTemperatures[i]) {
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

void vineyardFrostRecovery(int nightTemperatures[], int n, int result[]) {
    int stack[n];
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && nightTemperatures[stack[top]] <= nightTemperatures[i]) {
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
    vector<int> vineyardFrostRecovery(vector<int>& nightTemperatures) {
        int n = nightTemperatures.size();
        vector<int> result(n, 0);
        stack<int> indices;

        for (int i = n - 1; i >= 0; i--) {
            while (!indices.empty() && nightTemperatures[indices.top()] <= nightTemperatures[i]) {
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
  "daily-temperatures-e5": {
    python: `def training_heat_index_waits(heat_index):
    result = [0] * len(heat_index)
    stack = []

    for i in range(len(heat_index) - 1, -1, -1):
        while stack and heat_index[stack[-1]] <= heat_index[i]:
            stack.pop()

        if stack:
            result[i] = stack[-1] - i

        stack.append(i)

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] trainingHeatIndexWaits(int[] heatIndex) {
        int n = heatIndex.length;
        int[] result = new int[n];
        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && heatIndex[stack.peek()] <= heatIndex[i]) {
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

void trainingHeatIndexWaits(int heatIndex[], int n, int result[]) {
    int stack[n];
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && heatIndex[stack[top]] <= heatIndex[i]) {
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
    vector<int> trainingHeatIndexWaits(vector<int>& heatIndex) {
        int n = heatIndex.size();
        vector<int> result(n, 0);
        stack<int> indices;

        for (int i = n - 1; i >= 0; i--) {
            while (!indices.empty() && heatIndex[indices.top()] <= heatIndex[i]) {
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
  "daily-temperatures-m1": {
    python: `def marine_buoy_warm_currents(water_temperatures):
    result = [0] * len(water_temperatures)
    stack = []

    for i in range(len(water_temperatures) - 1, -1, -1):
        while stack and water_temperatures[stack[-1]] <= water_temperatures[i]:
            stack.pop()

        if stack:
            result[i] = stack[-1] - i

        stack.append(i)

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] marineBuoyWarmCurrents(int[] waterTemperatures) {
        int n = waterTemperatures.length;
        int[] result = new int[n];
        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && waterTemperatures[stack.peek()] <= waterTemperatures[i]) {
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

void marineBuoyWarmCurrents(int waterTemperatures[], int n, int result[]) {
    int stack[n];
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && waterTemperatures[stack[top]] <= waterTemperatures[i]) {
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
    vector<int> marineBuoyWarmCurrents(vector<int>& waterTemperatures) {
        int n = waterTemperatures.size();
        vector<int> result(n, 0);
        stack<int> indices;

        for (int i = n - 1; i >= 0; i--) {
            while (!indices.empty() && waterTemperatures[indices.top()] <= waterTemperatures[i]) {
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
  "daily-temperatures-m2": {
    python: `def storage_temperature_recovery(chamber_temperatures):
    result = [0] * len(chamber_temperatures)
    stack = []

    for i in range(len(chamber_temperatures) - 1, -1, -1):
        while stack and chamber_temperatures[stack[-1]] <= chamber_temperatures[i]:
            stack.pop()

        if stack:
            result[i] = stack[-1] - i

        stack.append(i)

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] storageTemperatureRecovery(int[] chamberTemperatures) {
        int n = chamberTemperatures.length;
        int[] result = new int[n];
        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && chamberTemperatures[stack.peek()] <= chamberTemperatures[i]) {
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

void storageTemperatureRecovery(int chamberTemperatures[], int n, int result[]) {
    int stack[n];
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && chamberTemperatures[stack[top]] <= chamberTemperatures[i]) {
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
    vector<int> storageTemperatureRecovery(vector<int>& chamberTemperatures) {
        int n = chamberTemperatures.size();
        vector<int> result(n, 0);
        stack<int> indices;

        for (int i = n - 1; i >= 0; i--) {
            while (!indices.empty() && chamberTemperatures[indices.top()] <= chamberTemperatures[i]) {
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
  "daily-temperatures-m3": {
    python: `def runway_surface_warmup(surface_temperatures):
    result = [0] * len(surface_temperatures)
    stack = []

    for i in range(len(surface_temperatures) - 1, -1, -1):
        while stack and surface_temperatures[stack[-1]] <= surface_temperatures[i]:
            stack.pop()

        if stack:
            result[i] = stack[-1] - i

        stack.append(i)

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] runwaySurfaceWarmup(int[] surfaceTemperatures) {
        int n = surfaceTemperatures.length;
        int[] result = new int[n];
        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && surfaceTemperatures[stack.peek()] <= surfaceTemperatures[i]) {
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

void runwaySurfaceWarmup(int surfaceTemperatures[], int n, int result[]) {
    int stack[n];
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && surfaceTemperatures[stack[top]] <= surfaceTemperatures[i]) {
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
    vector<int> runwaySurfaceWarmup(vector<int>& surfaceTemperatures) {
        int n = surfaceTemperatures.size();
        vector<int> result(n, 0);
        stack<int> indices;

        for (int i = n - 1; i >= 0; i--) {
            while (!indices.empty() && surfaceTemperatures[indices.top()] <= surfaceTemperatures[i]) {
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
  "daily-temperatures-m4": {
    python: `def transformer_heat_rise(transformer_temperatures):
    result = [0] * len(transformer_temperatures)
    stack = []

    for i in range(len(transformer_temperatures) - 1, -1, -1):
        while stack and transformer_temperatures[stack[-1]] <= transformer_temperatures[i]:
            stack.pop()

        if stack:
            result[i] = stack[-1] - i

        stack.append(i)

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] transformerHeatRise(int[] transformerTemperatures) {
        int n = transformerTemperatures.length;
        int[] result = new int[n];
        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && transformerTemperatures[stack.peek()] <= transformerTemperatures[i]) {
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

void transformerHeatRise(int transformerTemperatures[], int n, int result[]) {
    int stack[n];
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && transformerTemperatures[stack[top]] <= transformerTemperatures[i]) {
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
    vector<int> transformerHeatRise(vector<int>& transformerTemperatures) {
        int n = transformerTemperatures.size();
        vector<int> result(n, 0);
        stack<int> indices;

        for (int i = n - 1; i >= 0; i--) {
            while (!indices.empty() && transformerTemperatures[indices.top()] <= transformerTemperatures[i]) {
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
  "daily-temperatures-m5": {
    python: `def soil_warmup_waits(soil_temperatures):
    result = [0] * len(soil_temperatures)
    stack = []

    for i in range(len(soil_temperatures) - 1, -1, -1):
        while stack and soil_temperatures[stack[-1]] <= soil_temperatures[i]:
            stack.pop()

        if stack:
            result[i] = stack[-1] - i

        stack.append(i)

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] soilWarmupWaits(int[] soilTemperatures) {
        int n = soilTemperatures.length;
        int[] result = new int[n];
        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && soilTemperatures[stack.peek()] <= soilTemperatures[i]) {
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

void soilWarmupWaits(int soilTemperatures[], int n, int result[]) {
    int stack[n];
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && soilTemperatures[stack[top]] <= soilTemperatures[i]) {
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
    vector<int> soilWarmupWaits(vector<int>& soilTemperatures) {
        int n = soilTemperatures.size();
        vector<int> result(n, 0);
        stack<int> indices;

        for (int i = n - 1; i >= 0; i--) {
            while (!indices.empty() && soilTemperatures[indices.top()] <= soilTemperatures[i]) {
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
  "daily-temperatures-h1": {
    python: `def national_weather_station_waits(temperatures):
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
    public int[] nationalWeatherStationWaits(int[] temperatures) {
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

void nationalWeatherStationWaits(int temperatures[], int n, int result[]) {
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
    vector<int> nationalWeatherStationWaits(vector<int>& temperatures) {
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
  "daily-temperatures-h2": {
    python: `def oven_temperature_ramp_waits(oven_temperatures):
    result = [0] * len(oven_temperatures)
    stack = []

    for i in range(len(oven_temperatures) - 1, -1, -1):
        while stack and oven_temperatures[stack[-1]] <= oven_temperatures[i]:
            stack.pop()

        if stack:
            result[i] = stack[-1] - i

        stack.append(i)

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] ovenTemperatureRampWaits(int[] ovenTemperatures) {
        int n = ovenTemperatures.length;
        int[] result = new int[n];
        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && ovenTemperatures[stack.peek()] <= ovenTemperatures[i]) {
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

void ovenTemperatureRampWaits(int ovenTemperatures[], int n, int result[]) {
    int stack[n];
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && ovenTemperatures[stack[top]] <= ovenTemperatures[i]) {
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
    vector<int> ovenTemperatureRampWaits(vector<int>& ovenTemperatures) {
        int n = ovenTemperatures.size();
        vector<int> result(n, 0);
        stack<int> indices;

        for (int i = n - 1; i >= 0; i--) {
            while (!indices.empty() && ovenTemperatures[indices.top()] <= ovenTemperatures[i]) {
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
  "daily-temperatures-h3": {
    python: `def data_center_cooling_rebound(rack_temperatures):
    result = [0] * len(rack_temperatures)
    stack = []

    for i in range(len(rack_temperatures) - 1, -1, -1):
        while stack and rack_temperatures[stack[-1]] <= rack_temperatures[i]:
            stack.pop()

        if stack:
            result[i] = stack[-1] - i

        stack.append(i)

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] dataCenterCoolingRebound(int[] rackTemperatures) {
        int n = rackTemperatures.length;
        int[] result = new int[n];
        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && rackTemperatures[stack.peek()] <= rackTemperatures[i]) {
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

void dataCenterCoolingRebound(int rackTemperatures[], int n, int result[]) {
    int stack[n];
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && rackTemperatures[stack[top]] <= rackTemperatures[i]) {
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
    vector<int> dataCenterCoolingRebound(vector<int>& rackTemperatures) {
        int n = rackTemperatures.size();
        vector<int> result(n, 0);
        stack<int> indices;

        for (int i = n - 1; i >= 0; i--) {
            while (!indices.empty() && rackTemperatures[indices.top()] <= rackTemperatures[i]) {
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
  "daily-temperatures-h4": {
    python: `def climate_research_hourly_forecast(hourly_temperatures):
    result = [0] * len(hourly_temperatures)
    stack = []

    for i in range(len(hourly_temperatures) - 1, -1, -1):
        while stack and hourly_temperatures[stack[-1]] <= hourly_temperatures[i]:
            stack.pop()

        if stack:
            result[i] = stack[-1] - i

        stack.append(i)

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] climateResearchHourlyForecast(int[] hourlyTemperatures) {
        int n = hourlyTemperatures.length;
        int[] result = new int[n];
        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && hourlyTemperatures[stack.peek()] <= hourlyTemperatures[i]) {
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

void climateResearchHourlyForecast(int hourlyTemperatures[], int n, int result[]) {
    int stack[n];
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && hourlyTemperatures[stack[top]] <= hourlyTemperatures[i]) {
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
    vector<int> climateResearchHourlyForecast(vector<int>& hourlyTemperatures) {
        int n = hourlyTemperatures.size();
        vector<int> result(n, 0);
        stack<int> indices;

        for (int i = n - 1; i >= 0; i--) {
            while (!indices.empty() && hourlyTemperatures[indices.top()] <= hourlyTemperatures[i]) {
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
  "daily-temperatures-h5": {
    python: `def satellite_thermal_cycle_alerts(panel_temperatures):
    result = [0] * len(panel_temperatures)
    stack = []

    for i in range(len(panel_temperatures) - 1, -1, -1):
        while stack and panel_temperatures[stack[-1]] <= panel_temperatures[i]:
            stack.pop()

        if stack:
            result[i] = stack[-1] - i

        stack.append(i)

    return result`,

    java: `import java.util.*;

class Solution {
    public int[] satelliteThermalCycleAlerts(int[] panelTemperatures) {
        int n = panelTemperatures.length;
        int[] result = new int[n];
        Deque<Integer> stack = new ArrayDeque<>();

        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && panelTemperatures[stack.peek()] <= panelTemperatures[i]) {
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

void satelliteThermalCycleAlerts(int panelTemperatures[], int n, int result[]) {
    int stack[n];
    int top = -1;

    for (int i = n - 1; i >= 0; i--) {
        while (top >= 0 && panelTemperatures[stack[top]] <= panelTemperatures[i]) {
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
    vector<int> satelliteThermalCycleAlerts(vector<int>& panelTemperatures) {
        int n = panelTemperatures.size();
        vector<int> result(n, 0);
        stack<int> indices;

        for (int i = n - 1; i >= 0; i--) {
            while (!indices.empty() && panelTemperatures[indices.top()] <= panelTemperatures[i]) {
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
  }
};
