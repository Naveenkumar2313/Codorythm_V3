export const CSSproblems = [
  // EASY
  {
  id: "css-e1",
  title: "Check for a Valid Multiple Sum",
  difficulty: "Easy",
  description:
    "You are given an integer array nums and an integer k. Determine whether there exists a continuous subarray of length at least two whose sum is a multiple of k. Return true if such a subarray exists; otherwise, return false.",

  constraints: [
    "2 ≤ nums.length ≤ 10⁵",
    "-10⁹ ≤ nums[i] ≤ 10⁹",
    "0 ≤ k ≤ 2³¹ - 1"
  ],

  examples: [
    {
      input: "nums = [23, 2, 4, 6, 7], k = 6",
      output: "true",
      explanation:
        "The subarray [2, 4] has a sum of 6, which is a multiple of 6."
    },
    {
      input: "nums = [23, 2, 6, 4, 7], k = 13",
      output: "false",
      explanation:
        "No continuous subarray of length at least two has a sum that is a multiple of 13."
    }
  ],

  starterCode: {
    python:
`def check_subarray_sum(nums, k):
    # Write your code here
    pass`,

    java:
`public class Solution {
    public static boolean checkSubarraySum(int[] nums, int k) {
        // Write your code here
    }
}`,

    c:
`#include <stdbool.h>

bool checkSubarraySum(int nums[], int n, int k) {
    // Write your code here
}`,

    cpp:
`#include <vector>
using namespace std;

class Solution {
public:
    bool checkSubarraySum(vector<int>& nums, int k) {
        // Write your code here
    }
};`
  },

  hints: [
    "Compute the running prefix sum while traversing the array.",
    "Store the first occurrence of each prefix sum remainder when divided by k.",
    "If the same remainder appears again with an index difference of at least two, a valid subarray exists."
  ]
},
{
  id: "css-e2",
  title: "Weekly Sales Milestone",
  difficulty: "Easy",
  description:
    "A store records its daily sales in an integer array sales. A promotional milestone is achieved if there exists a continuous period of at least two days whose total sales are a multiple of k. Return true if such a period exists; otherwise, return false.",

  constraints: [
    "2 ≤ sales.length ≤ 10⁵",
    "-10⁹ ≤ sales[i] ≤ 10⁹",
    "0 ≤ k ≤ 2³¹ - 1"
  ],

  examples: [
    {
      input: "sales = [5, 1, 2, 4], k = 3",
      output: "true",
      explanation:
        "The continuous period [1, 2] has a total sales value of 3, which is a multiple of 3."
    },
    {
      input: "sales = [2, 5, 1, 7], k = 6",
      output: "false",
      explanation:
        "No continuous period of at least two days has a total sales value that is a multiple of 6."
    }
  ],

  starterCode: {
    python:
`def has_sales_milestone(sales, k):
    # Write your code here
    pass`,

    java:
`public class Solution {
    public static boolean hasSalesMilestone(int[] sales, int k) {
        // Write your code here
    }
}`,

    c:
`#include <stdbool.h>

bool hasSalesMilestone(int sales[], int n, int k) {
    // Write your code here
}`,

    cpp:
`#include <vector>
using namespace std;

class Solution {
public:
    bool hasSalesMilestone(vector<int>& sales, int k) {
        // Write your code here
    }
};`
  },

  hints: [
    "Keep a running prefix sum while traversing the sales array.",
    "Track the first occurrence of each prefix sum remainder when divided by k.",
    "A repeated remainder with an index difference of at least two indicates a valid sales period."
  ]
},
{
  id: "css-e3",
  title: "Power Consumption Check",
  difficulty: "Easy",
  description:
    "A smart home records its hourly power consumption in an integer array power. Determine whether there exists a continuous time period of at least two hours whose total power consumption is a multiple of k. Return true if such a period exists; otherwise, return false.",

  constraints: [
    "2 ≤ power.length ≤ 10⁵",
    "-10⁹ ≤ power[i] ≤ 10⁹",
    "0 ≤ k ≤ 2³¹ - 1"
  ],

  examples: [
    {
      input: "power = [8, 4, 2, 6], k = 6",
      output: "true",
      explanation:
        "The continuous period [4, 2] has a total power consumption of 6, which is a multiple of 6."
    },
    {
      input: "power = [1, 4, 8, 3], k = 7",
      output: "false",
      explanation:
        "No continuous time period of at least two hours has a total power consumption that is a multiple of 7."
    }
  ],

  starterCode: {
    python:
`def has_valid_power_period(power, k):
    # Write your code here
    pass`,

    java:
`public class Solution {
    public static boolean hasValidPowerPeriod(int[] power, int k) {
        // Write your code here
    }
}`,

    c:
`#include <stdbool.h>

bool hasValidPowerPeriod(int power[], int n, int k) {
    // Write your code here
}`,

    cpp:
`#include <vector>
using namespace std;

class Solution {
public:
    bool hasValidPowerPeriod(vector<int>& power, int k) {
        // Write your code here
    }
};`
  },

  hints: [
    "Compute the running prefix sum while traversing the power array.",
    "Store only the first occurrence of every prefix sum remainder.",
    "If the same remainder is found again at least two indices later, a valid period exists."
  ]
},
{
  id: "css-e4",
  title: "Workout Duration Goal",
  difficulty: "Easy",
  description:
    "A fitness app records the number of minutes exercised each day in an integer array workout. Determine whether there exists a continuous period of at least two days whose total workout duration is a multiple of k. Return true if such a period exists; otherwise, return false.",

  constraints: [
    "2 ≤ workout.length ≤ 10⁵",
    "-10⁹ ≤ workout[i] ≤ 10⁹",
    "0 ≤ k ≤ 2³¹ - 1"
  ],

  examples: [
    {
      input: "workout = [15, 10, 5, 8], k = 5",
      output: "true",
      explanation:
        "The continuous period [10, 5] has a total duration of 15 minutes, which is a multiple of 5."
    },
    {
      input: "workout = [2, 4, 5, 8], k = 7",
      output: "false",
      explanation:
        "No continuous period of at least two days has a total workout duration that is a multiple of 7."
    }
  ],

  starterCode: {
    python:
`def has_workout_goal(workout, k):
    # Write your code here
    pass`,

    java:
`public class Solution {
    public static boolean hasWorkoutGoal(int[] workout, int k) {
        // Write your code here
    }
}`,

    c:
`#include <stdbool.h>

bool hasWorkoutGoal(int workout[], int n, int k) {
    // Write your code here
}`,

    cpp:
`#include <vector>
using namespace std;

class Solution {
public:
    bool hasWorkoutGoal(vector<int>& workout, int k) {
        // Write your code here
    }
};`
  },

  hints: [
    "Maintain a running prefix sum while iterating through the workout durations.",
    "Store only the first index where each remainder appears.",
    "If the same remainder occurs again with an index difference of at least two, a valid workout period exists."
  ]
},
{
  id: "css-e5",
  title: "Parcel Weight Verification",
  difficulty: "Easy",
  description:
    "A delivery company records the weights of parcels loaded onto a truck in the order they are received. The weights are stored in an integer array parcels. Determine whether there exists a continuous group of at least two parcels whose combined weight is a multiple of k. Return true if such a group exists; otherwise, return false.",

  constraints: [
    "2 ≤ parcels.length ≤ 10⁵",
    "-10⁹ ≤ parcels[i] ≤ 10⁹",
    "0 ≤ k ≤ 2³¹ - 1"
  ],

  examples: [
    {
      input: "parcels = [9, 5, 7, 4], k = 8",
      output: "true",
      explanation:
        "The continuous group [5, 7, 4] has a total weight of 16, which is a multiple of 8."
    },
    {
      input: "parcels = [3, 8, 5, 9], k = 7",
      output: "false",
      explanation:
        "No continuous group of at least two parcels has a combined weight that is a multiple of 7."
    }
  ],

  starterCode: {
    python:
`def verify_parcel_weights(parcels, k):
    # Write your code here
    pass`,

    java:
`public class Solution {
    public static boolean verifyParcelWeights(int[] parcels, int k) {
        // Write your code here
    }
}`,

    c:
`#include <stdbool.h>

bool verifyParcelWeights(int parcels[], int n, int k) {
    // Write your code here
}`,

    cpp:
`#include <vector>
using namespace std;

class Solution {
public:
    bool verifyParcelWeights(vector<int>& parcels, int k) {
        // Write your code here
    }
};`
  },

  hints: [
    "Traverse the array while maintaining a running prefix sum.",
    "Record the first occurrence of every prefix sum remainder after dividing by k.",
    "If the same remainder appears again with at least one element between the indices, a valid parcel group exists."
  ]
},
// MEDIUM
{
  id: "css-m1",
  title: "Earliest Valid Multiple Segment",
  difficulty: "Medium",
  description:
    "You are given an integer array nums and an integer k. Determine whether there exists a continuous subarray of length at least two whose sum is a multiple of k. If such a subarray exists, return the starting and ending indices of the earliest valid subarray. If multiple valid subarrays start at the same index, return the one that ends first. If no such subarray exists, return [-1, -1].",

  constraints: [
    "2 ≤ nums.length ≤ 10⁵",
    "-10⁹ ≤ nums[i] ≤ 10⁹",
    "0 ≤ k ≤ 2³¹ - 1"
  ],

  examples: [
    {
      input: "nums = [23, 2, 4, 6, 7], k = 6",
      output: "[1, 2]",
      explanation:
        "The earliest valid subarray is [2, 4], whose sum is 6, a multiple of 6."
    },
    {
      input: "nums = [5, 3, 1, 2], k = 7",
      output: "[-1, -1]",
      explanation:
        "No continuous subarray of length at least two has a sum that is a multiple of 7."
    }
  ],

  starterCode: {
    python:
`def earliest_valid_subarray(nums, k):
    # Write your code here
    pass`,

    java:
`public class Solution {
    public static int[] earliestValidSubarray(int[] nums, int k) {
        // Write your code here
    }
}`,

    c:
`#include <stdlib.h>

int* earliestValidSubarray(int nums[], int n, int k) {
    // Return dynamically allocated array of size 2
}`,

    cpp:
`#include <vector>
using namespace std;

class Solution {
public:
    vector<int> earliestValidSubarray(vector<int>& nums, int k) {
        // Write your code here
    }
};`
  },

  hints: [
    "Use a prefix sum and store the first occurrence of every remainder.",
    "When a remainder repeats and the subarray length is at least two, record the indices.",
    "Continue only until you find the earliest valid starting position required by the problem."
  ]
},
{
  id: "css-m2",
  title: "Network Data Transfer Validation",
  difficulty: "Medium",
  description:
    "A network monitoring system records the amount of data transferred every minute in an integer array dataTransfer. Determine whether there exists a continuous time interval of at least two minutes whose total data transferred is a multiple of k. Return true if such an interval exists; otherwise, return false.",

  constraints: [
    "2 ≤ dataTransfer.length ≤ 2 × 10⁵",
    "-10⁹ ≤ dataTransfer[i] ≤ 10⁹",
    "0 ≤ k ≤ 2³¹ - 1"
  ],

  examples: [
    {
      input: "dataTransfer = [10, 8, 4, 9], k = 6",
      output: "true",
      explanation:
        "The continuous interval [8, 4] transfers 12 units of data, which is a multiple of 6."
    },
    {
      input: "dataTransfer = [4, 7, 5, 8], k = 9",
      output: "false",
      explanation:
        "No continuous interval of at least two minutes has a total data transfer that is a multiple of 9."
    }
  ],

  starterCode: {
    python:
`def has_valid_data_transfer(dataTransfer, k):
    # Write your code here
    pass`,

    java:
`public class Solution {
    public static boolean hasValidDataTransfer(int[] dataTransfer, int k) {
        // Write your code here
    }
}`,

    c:
`#include <stdbool.h>

bool hasValidDataTransfer(int dataTransfer[], int n, int k) {
    // Write your code here
}`,

    cpp:
`#include <vector>
using namespace std;

class Solution {
public:
    bool hasValidDataTransfer(vector<int>& dataTransfer, int k) {
        // Write your code here
    }
};`
  },

  hints: [
    "Maintain a running prefix sum while traversing the array.",
    "Store the first occurrence of each remainder after dividing the prefix sum by k.",
    "If the same remainder appears again with an index difference of at least two, a valid interval exists."
  ]
},
{
  id: "css-m3",
  title: "Streaming Buffer Synchronization",
  difficulty: "Medium",
  description:
    "A video streaming service records the amount of data buffered every second in an integer array buffer. A synchronization point is reached if there exists a continuous interval of at least two seconds whose total buffered data is a multiple of k. Return true if such an interval exists; otherwise, return false.",

  constraints: [
    "2 ≤ buffer.length ≤ 2 × 10⁵",
    "-10⁹ ≤ buffer[i] ≤ 10⁹",
    "0 ≤ k ≤ 2³¹ - 1"
  ],

  examples: [
    {
      input: "buffer = [14, 5, 7, 3], k = 6",
      output: "true",
      explanation:
        "The continuous interval [5, 7] has a total of 12 units, which is a multiple of 6."
    },
    {
      input: "buffer = [2, 6, 5, 4], k = 9",
      output: "false",
      explanation:
        "No continuous interval of at least two seconds has a total buffered data that is a multiple of 9."
    }
  ],

  starterCode: {
    python:
`def has_sync_interval(buffer, k):
    # Write your code here
    pass`,

    java:
`public class Solution {
    public static boolean hasSyncInterval(int[] buffer, int k) {
        // Write your code here
    }
}`,

    c:
`#include <stdbool.h>

bool hasSyncInterval(int buffer[], int n, int k) {
    // Write your code here
}`,

    cpp:
`#include <vector>
using namespace std;

class Solution {
public:
    bool hasSyncInterval(vector<int>& buffer, int k) {
        // Write your code here
    }
};`
  },

  hints: [
    "Maintain a running prefix sum while traversing the array.",
    "Store the first occurrence of each remainder obtained after dividing the prefix sum by k.",
    "If a remainder repeats with an index difference of at least two, a valid synchronization interval exists."
  ]
},
{
  id: "css-m4",
  title: "Rainfall Collection Analysis",
  difficulty: "Medium",
  description:
    "A weather station records the amount of rainfall received every day in an integer array rainfall. Determine whether there exists a continuous period of at least two days whose total rainfall is a multiple of k. Return true if such a period exists; otherwise, return false.",

  constraints: [
    "2 ≤ rainfall.length ≤ 2 × 10⁵",
    "-10⁹ ≤ rainfall[i] ≤ 10⁹",
    "0 ≤ k ≤ 2³¹ - 1"
  ],

  examples: [
    {
      input: "rainfall = [11, 7, 5, 4], k = 6",
      output: "true",
      explanation:
        "The continuous period [7, 5] has a total rainfall of 12, which is a multiple of 6."
    },
    {
      input: "rainfall = [3, 8, 6, 10], k = 11",
      output: "false",
      explanation:
        "No continuous period of at least two days has a total rainfall that is a multiple of 11."
    }
  ],

  starterCode: {
    python:
`def has_valid_rainfall_period(rainfall, k):
    # Write your code here
    pass`,

    java:
`public class Solution {
    public static boolean hasValidRainfallPeriod(int[] rainfall, int k) {
        // Write your code here
    }
}`,

    c:
`#include <stdbool.h>

bool hasValidRainfallPeriod(int rainfall[], int n, int k) {
    // Write your code here
}`,

    cpp:
`#include <vector>
using namespace std;

class Solution {
public:
    bool hasValidRainfallPeriod(vector<int>& rainfall, int k) {
        // Write your code here
    }
};`
  },

  hints: [
    "Maintain a running prefix sum while traversing the rainfall array.",
    "Store only the first occurrence of each remainder obtained after dividing the prefix sum by k.",
    "If the same remainder appears again with an index difference of at least two, a valid period exists."
  ]
},
{
  id: "css-m5",
  title: "Machine Runtime Validation",
  difficulty: "Medium",
  description:
    "A factory records the runtime (in minutes) of a machine during consecutive production cycles in an integer array runtime. Determine whether there exists a continuous period of at least two cycles whose total runtime is a multiple of k. When k is 0, the total runtime of the selected period must also be 0. Return true if such a period exists; otherwise, return false.",

  constraints: [
    "2 ≤ runtime.length ≤ 2 × 10⁵",
    "-10⁹ ≤ runtime[i] ≤ 10⁹",
    "0 ≤ k ≤ 2³¹ - 1"
  ],

  examples: [
    {
      input: "runtime = [0, 0, 5], k = 0",
      output: "true",
      explanation:
        "The first two production cycles have a total runtime of 0. Since k is 0, this satisfies the condition."
    },
    {
      input: "runtime = [0, 5, 0], k = 0",
      output: "false",
      explanation:
        "No continuous period of at least two cycles has a total runtime equal to 0."
    }
  ],

  starterCode: {
    python:
`def has_valid_runtime(runtime, k):
    # Write your code here
    pass`,

    java:
`public class Solution {
    public static boolean hasValidRuntime(int[] runtime, int k) {
        // Write your code here
    }
}`,

    c:
`#include <stdbool.h>

bool hasValidRuntime(int runtime[], int n, int k) {
    // Write your code here
}`,

    cpp:
`#include <vector>
using namespace std;

class Solution {
public:
    bool hasValidRuntime(vector<int>& runtime, int k) {
        // Write your code here
    }
};`
  },

  hints: [
    "A special case is required when k equals 0.",
    "When k is not 0, use prefix sums and remainders as usual.",
    "When k is 0, look for a continuous subarray of length at least two whose sum is exactly 0."
  ]
},
// HARD
{
  id: "css-h1",
  title: "Satellite Signal Synchronization",
  difficulty: "Hard",
  description:
    "A satellite records the strength of signals received every second in an integer array signals. Determine whether there exists a continuous interval of at least two seconds whose total signal strength is a multiple of k. Return true if such an interval exists; otherwise, return false.",

  constraints: [
    "2 ≤ signals.length ≤ 10⁶",
    "-10⁹ ≤ signals[i] ≤ 10⁹",
    "0 ≤ k ≤ 2³¹ - 1",
    "Your solution must run in O(n) time."
  ],

  examples: [
    {
      input: "signals = [18, 7, 5, 11], k = 6",
      output: "true",
      explanation:
        "The continuous interval [7, 5] has a total signal strength of 12, which is a multiple of 6."
    },
    {
      input: "signals = [8, 5, 7, 13], k = 9",
      output: "false",
      explanation:
        "No continuous interval of at least two seconds has a total signal strength that is a multiple of 9."
    }
  ],

  starterCode: {
    python:
`def has_signal_sync(signals, k):
    # Write your code here
    pass`,

    java:
`public class Solution {
    public static boolean hasSignalSync(int[] signals, int k) {
        // Write your code here
    }
}`,

    c:
`#include <stdbool.h>

bool hasSignalSync(int signals[], int n, int k) {
    // Write your code here
}`,

    cpp:
`#include <vector>
using namespace std;

class Solution {
public:
    bool hasSignalSync(vector<int>& signals, int k) {
        // Write your code here
    }
};`
  },

  hints: [
    "A brute-force O(n²) approach will exceed the time limit.",
    "Track prefix sum remainders while traversing the array only once.",
    "Store only the first occurrence of every remainder to maximize the possible subarray length."
  ]
},
{
  id: "css-h2",
  title: "Financial Transaction Audit",
  difficulty: "Hard",
  description:
    "A financial institution records the value of every transaction in an integer array transactions. Determine whether there exists a continuous sequence of at least two transactions whose total value is a multiple of k. Return true if such a sequence exists; otherwise, return false.",

  constraints: [
    "2 ≤ transactions.length ≤ 10⁶",
    "-10⁹ ≤ transactions[i] ≤ 10⁹",
    "0 ≤ k ≤ 2³¹ - 1",
    "The solution must run in O(n) time.",
    "Be careful of integer overflow when computing prefix sums."
  ],

  examples: [
    {
      input: "transactions = [1000000000, 1000000000, 5], k = 10",
      output: "true",
      explanation:
        "The first two transactions sum to 2000000000, which is divisible by 10."
    },
    {
      input: "transactions = [1000000000, 999999999, 3], k = 8",
      output: "false",
      explanation:
        "No continuous sequence of at least two transactions has a total value that is a multiple of 8."
    }
  ],

  starterCode: {
    python:
`def has_valid_transaction_sequence(transactions, k):
    # Write your code here
    pass`,

    java:
`public class Solution {
    public static boolean hasValidTransactionSequence(int[] transactions, int k) {
        // Write your code here
    }
}`,

    c:
`#include <stdbool.h>

bool hasValidTransactionSequence(int transactions[], int n, int k) {
    // Write your code here
}`,

    cpp:
`#include <vector>
using namespace std;

class Solution {
public:
    bool hasValidTransactionSequence(vector<int>& transactions, int k) {
        // Write your code here
    }
};`
  },

  hints: [
    "The prefix sum can exceed the range of a 32-bit integer.",
    "Store only the first occurrence of each prefix sum remainder.",
    "A repeated remainder with an index difference of at least two indicates a valid sequence."
  ]
},
{
  id: "css-h3",
  title: "Power Grid Energy Balance",
  difficulty: "Hard",
  description:
    "A power grid records the net energy change every hour in an integer array energy, where positive values represent energy generation and negative values represent energy consumption. Determine whether there exists a continuous period of at least two hours whose total net energy change is a multiple of k. Return true if such a period exists; otherwise, return false.",

  constraints: [
    "2 ≤ energy.length ≤ 10⁶",
    "-10⁹ ≤ energy[i] ≤ 10⁹",
    "0 ≤ k ≤ 2³¹ - 1",
    "Your solution must run in O(n) time."
  ],

  examples: [
    {
      input: "energy = [8, -2, 6, 4], k = 6",
      output: "true",
      explanation:
        "The continuous period [-2, 6, 4] has a total net energy change of 8, which is not divisible by 6, but the subarray [8, -2] has a sum of 6, which is divisible by 6."
    },
    {
      input: "energy = [5, -3, 4, 1], k = 8",
      output: "false",
      explanation:
        "No continuous period of at least two hours has a total net energy change that is a multiple of 8."
    }
  ],

  starterCode: {
    python:
`def has_energy_balance(energy, k):
    # Write your code here
    pass`,

    java:
`public class Solution {
    public static boolean hasEnergyBalance(int[] energy, int k) {
        // Write your code here
    }
}`,

    c:
`#include <stdbool.h>

bool hasEnergyBalance(int energy[], int n, int k) {
    // Write your code here
}`,

    cpp:
`#include <vector>
using namespace std;

class Solution {
public:
    bool hasEnergyBalance(vector<int>& energy, int k) {
        // Write your code here
    }
};`
  },

  hints: [
    "Negative numbers do not change the core prefix sum approach.",
    "Normalize the remainder if your programming language can produce negative modulo values.",
    "Store only the first occurrence of each remainder."
  ]
},
{
  id: "css-h4",
  title: "Warehouse Shipment Verification",
  difficulty: "Hard",
  description:
    "A warehouse records the weight of shipments loaded every hour in an integer array shipments. Determine whether there exists a continuous sequence of at least two shipments whose total weight is a multiple of k. Return true if such a sequence exists; otherwise, return false.",

  constraints: [
    "2 ≤ shipments.length ≤ 10⁶",
    "0 ≤ shipments[i] ≤ 10⁹",
    "0 ≤ k ≤ 2³¹ - 1",
    "Your solution must run in O(n) time."
  ],

  examples: [
    {
      input: "shipments = [15, 9, 3, 8], k = 6",
      output: "true",
      explanation:
        "The continuous sequence [9, 3] has a total weight of 12, which is a multiple of 6."
    },
    {
      input: "shipments = [8, 5, 11, 14], k = 9",
      output: "false",
      explanation:
        "No continuous sequence of at least two shipments has a total weight that is a multiple of 9."
    }
  ],

  starterCode: {
    python:
`def has_valid_shipment_sequence(shipments, k):
    # Write your code here
    pass`,

    java:
`public class Solution {
    public static boolean hasValidShipmentSequence(int[] shipments, int k) {
        // Write your code here
    }
}`,

    c:
`#include <stdbool.h>

bool hasValidShipmentSequence(int shipments[], int n, int k) {
    // Write your code here
}`,

    cpp:
`#include <vector>
using namespace std;

class Solution {
public:
    bool hasValidShipmentSequence(vector<int>& shipments, int k) {
        // Write your code here
    }
};`
  },

  hints: [
    "Checking every possible subarray is too slow for an array of size 10⁶.",
    "Maintain a running prefix sum while traversing the array once.",
    "Store only the first occurrence of each prefix sum remainder to efficiently detect a valid sequence."
  ]
},
{
  id: "css-h5",
  title: "Telemetry Packet Validation",
  difficulty: "Hard",
  description:
    "A spacecraft records the size of every telemetry packet in an integer array packets. Determine whether there exists a continuous sequence of at least two packets whose total size is a multiple of k. When k is 0, the total size of the selected sequence must also be 0. Return true if such a sequence exists; otherwise, return false.",

  constraints: [
    "2 ≤ packets.length ≤ 10⁶",
    "0 ≤ packets[i] ≤ 10⁹",
    "0 ≤ k ≤ 2³¹ - 1",
    "Your solution must run in O(n) time.",
    "Extra space should be proportional to the number of unique remainders."
  ],

  examples: [
    {
      input: "packets = [0, 0, 12, 5], k = 0",
      output: "true",
      explanation:
        "The first two packets form a continuous sequence of length two with a total size of 0."
    },
    {
      input: "packets = [0, 4, 0, 6], k = 0",
      output: "false",
      explanation:
        "No continuous sequence of at least two packets has a total size of 0."
    }
  ],

  starterCode: {
    python:
`def has_valid_packet_sequence(packets, k):
    # Write your code here
    pass`,

    java:
`public class Solution {
    public static boolean hasValidPacketSequence(int[] packets, int k) {
        // Write your code here
    }
}`,

    c:
`#include <stdbool.h>

bool hasValidPacketSequence(int packets[], int n, int k) {
    // Write your code here
}`,

    cpp:
`#include <vector>
using namespace std;

class Solution {
public:
    bool hasValidPacketSequence(vector<int>& packets, int k) {
        // Write your code here
    }
};`
  },

  hints: [
    "Treat k = 0 as a special case instead of performing modulo operations.",
    "For k > 0, use prefix sums together with remainder tracking.",
    "Store only the first occurrence of every remainder to preserve the longest possible valid interval."
  ]
},
];