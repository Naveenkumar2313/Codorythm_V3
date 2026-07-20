export const PAproblems = [
  //  EASY
  {
  id: "paes-e1",
  title: "Product Except Self - Basic",
  difficulty: "Easy",
  description:
    "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. Do not use division.",
  constraints: [
    "2 ≤ nums.length ≤ 1000",
    "-30 ≤ nums[i] ≤ 30",
    "The product of any prefix or suffix fits in a 32-bit integer."
  ],
  examples: [
    {
      input: "nums = [1,2,3,4]",
      output: "[24,12,8,6]",
      explanation:
        "Each output element is the product of all elements except the one at its corresponding index."
    },
    {
      input: "nums = [2,3]",
      output: "[3,2]",
      explanation:
        "The first element is 3 and the second element is 2."
    }
  ],
  testCases: [
    {
      input: "[1,2,3,4]",
      expectedOutput: "[24,12,8,6]"
    },
    {
      input: "[2,3]",
      expectedOutput: "[3,2]"
    },
    {
      input: "[5,6,2]",
      expectedOutput: "[12,10,30]"
    }
  ],
  starterCode: {
    python: `def product_except_self(nums):
    # Write your code here
    pass`,

    java: `class Solution {
    public int[] productExceptSelf(int[] nums) {
        // Write your code here
        return new int[0];
    }
}`,

    c: `#include <stdio.h>

void productExceptSelf(int nums[], int n, int result[]) {
    // Write your code here
}`,

    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        // Write your code here
        return {};
    }
};`
  }
},
{
  id: "paes-e2",
  title: "Product Except Self with Zero",
  difficulty: "Easy",
  description:
    "Given an integer array nums that may contain zero values, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. Do not use division.",
  constraints: [
    "2 ≤ nums.length ≤ 1000",
    "-30 ≤ nums[i] ≤ 30",
    "The product of any prefix or suffix fits in a 32-bit integer."
  ],
  examples: [
    {
      input: "nums = [1,2,0,4]",
      output: "[0,0,8,0]",
      explanation:
        "Only the position containing the zero gets the product of all non-zero elements."
    },
    {
      input: "nums = [0,5]",
      output: "[5,0]",
      explanation:
        "The first element becomes the product of the remaining elements, while the second becomes zero."
    }
  ],
  testCases: [
    {
      input: "[1,2,0,4]",
      expectedOutput: "[0,0,8,0]"
    },
    {
      input: "[0,5]",
      expectedOutput: "[5,0]"
    },
    {
      input: "[3,0,2]",
      expectedOutput: "[0,6,0]"
    }
  ],
  starterCode: {
    python: `def product_except_self(nums):
    # Write your code here
    pass`,

    java: `class Solution {
    public int[] productExceptSelf(int[] nums) {
        // Write your code here
        return new int[0];
    }
}`,

    c: `#include <stdio.h>

void productExceptSelf(int nums[], int n, int result[]) {
    // Write your code here
}`,

    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        // Write your code here
        return {};
    }
};`
  }
},
{
  id: "paes-e3",
  title: "Product Except Self for Negative Numbers",
  difficulty: "Easy",
  description:
    "Given an integer array nums containing positive and negative integers, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. Do not use division.",
  constraints: [
    "2 ≤ nums.length ≤ 1000",
    "-30 ≤ nums[i] ≤ 30",
    "The product of any prefix or suffix fits in a 32-bit integer."
  ],
  examples: [
    {
      input: "nums = [-1,2,-3,4]",
      output: "[-24,12,-8,6]",
      explanation:
        "The product for each position is calculated using every element except the one at that index."
    },
    {
      input: "nums = [-2,-3]",
      output: "[-3,-2]",
      explanation:
        "Each position contains the remaining element since there are only two numbers."
    }
  ],
  testCases: [
    {
      input: "[-1,2,-3,4]",
      expectedOutput: "[-24,12,-8,6]"
    },
    {
      input: "[-2,-3]",
      expectedOutput: "[-3,-2]"
    },
    {
      input: "[5,-2,1]",
      expectedOutput: "[-2,5,-10]"
    }
  ],
  starterCode: {
    python: `def product_except_self(nums):
    # Write your code here
    pass`,

    java: `class Solution {
    public int[] productExceptSelf(int[] nums) {
        // Write your code here
        return new int[0];
    }
}`,

    c: `#include <stdio.h>

void productExceptSelf(int nums[], int n, int result[]) {
    // Write your code here
}`,

    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        // Write your code here
        return {};
    }
};`
  }
},
{
  id: "paes-e4",
  title: "Product Except Self with Multiple Ones",
  difficulty: "Easy",
  description:
    "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. The array may contain multiple occurrences of the number 1. Do not use division.",
  constraints: [
    "2 ≤ nums.length ≤ 1000",
    "-30 ≤ nums[i] ≤ 30",
    "The product of any prefix or suffix fits in a 32-bit integer."
  ],
  examples: [
    {
      input: "nums = [1,1,2,3]",
      output: "[6,6,3,2]",
      explanation:
        "For each index, multiply every element except the one at the current position."
    },
    {
      input: "nums = [1,1,1]",
      output: "[1,1,1]",
      explanation:
        "Since every element is 1, the product excluding any index is also 1."
    }
  ],
  testCases: [
    {
      input: "[1,1,2,3]",
      expectedOutput: "[6,6,3,2]"
    },
    {
      input: "[1,1,1]",
      expectedOutput: "[1,1,1]"
    },
    {
      input: "[2,1,4,1]",
      expectedOutput: "[4,8,2,8]"
    }
  ],
  starterCode: {
    python: `def product_except_self(nums):
    # Write your code here
    pass`,

    java: `class Solution {
    public int[] productExceptSelf(int[] nums) {
        // Write your code here
        return new int[0];
    }
}`,

    c: `#include <stdio.h>

void productExceptSelf(int nums[], int n, int result[]) {
    // Write your code here
}`,

    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        // Write your code here
        return {};
    }
};`
  }
},
{
  id: "paes-e5",
  title: "Product Except Self with Large Values",
  difficulty: "Easy",
  description:
    "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. Compute the result without using division.",
  constraints: [
    "2 ≤ nums.length ≤ 1000",
    "-30 ≤ nums[i] ≤ 30",
    "The product of any prefix or suffix fits in a 32-bit integer."
  ],
  examples: [
    {
      input: "nums = [10,5,2]",
      output: "[10,20,50]",
      explanation:
        "The first value is 5 × 2 = 10, the second is 10 × 2 = 20, and the third is 10 × 5 = 50."
    },
    {
      input: "nums = [3,6,9]",
      output: "[54,27,18]",
      explanation:
        "Each output value is obtained by multiplying all elements except the current one."
    }
  ],
  testCases: [
    {
      input: "[10,5,2]",
      expectedOutput: "[10,20,50]"
    },
    {
      input: "[3,6,9]",
      expectedOutput: "[54,27,18]"
    },
    {
      input: "[8,4,2,1]",
      expectedOutput: "[8,16,32,64]"
    }
  ],
  starterCode: {
    python: `def product_except_self(nums):
    # Write your code here
    pass`,

    java: `class Solution {
    public int[] productExceptSelf(int[] nums) {
        // Write your code here
        return new int[0];
    }
}`,

    c: `#include <stdio.h>

void productExceptSelf(int nums[], int n, int result[]) {
    // Write your code here
}`,

    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        // Write your code here
        return {};
    }
};`
  }
},
// MEDIUM
{
  id: "paes-m1",
  title: "Product Except Self for Large Arrays",
  difficulty: "Medium",
  description:
    "Given an integer array nums of size n, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. Solve the problem in O(n) time without using division and with O(1) extra space (excluding the output array).",
  constraints: [
    "2 ≤ nums.length ≤ 100000",
    "-30 ≤ nums[i] ≤ 30",
    "The product of any prefix or suffix fits in a 32-bit integer."
  ],
  examples: [
    {
      input: "nums = [1,2,3,4]",
      output: "[24,12,8,6]",
      explanation:
        "The answer for each index is obtained by multiplying all elements except the current one."
    },
    {
      input: "nums = [-1,1,0,-3,3]",
      output: "[0,0,9,0,0]",
      explanation:
        "Only the position containing zero receives the product of all non-zero elements."
    }
  ],
  testCases: [
    {
      input: "[1,2,3,4]",
      expectedOutput: "[24,12,8,6]"
    },
    {
      input: "[-1,1,0,-3,3]",
      expectedOutput: "[0,0,9,0,0]"
    },
    {
      input: "[2,3,4,5]",
      expectedOutput: "[60,40,30,24]"
    }
  ],
  starterCode: {
    python: `def product_except_self(nums):
    # Write your code here
    pass`,

    java: `class Solution {
    public int[] productExceptSelf(int[] nums) {
        // Write your code here
        return new int[0];
    }
}`,

    c: `#include <stdio.h>

void productExceptSelf(int nums[], int n, int result[]) {
    // Write your code here
}`,

    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        // Write your code here
        return {};
    }
};`
  }
},
{
  id: "paes-m2",
  title: "Product Except Self with Multiple Zeroes",
  difficulty: "Medium",
  description:
    "Given an integer array nums that may contain multiple zeroes, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. Solve the problem without using division.",
  constraints: [
    "2 ≤ nums.length ≤ 100000",
    "-30 ≤ nums[i] ≤ 30",
    "The product of any prefix or suffix fits in a 32-bit integer."
  ],
  examples: [
    {
      input: "nums = [1,0,3,0]",
      output: "[0,0,0,0]",
      explanation:
        "Since there are two zeroes in the array, every product except self contains at least one zero."
    },
    {
      input: "nums = [0,2,4]",
      output: "[8,0,0]",
      explanation:
        "Only the index containing the zero gets the product of the remaining non-zero elements."
    }
  ],
  testCases: [
    {
      input: "[1,0,3,0]",
      expectedOutput: "[0,0,0,0]"
    },
    {
      input: "[0,2,4]",
      expectedOutput: "[8,0,0]"
    },
    {
      input: "[5,0,2,0,3]",
      expectedOutput: "[0,0,0,0,0]"
    }
  ],
  starterCode: {
    python: `def product_except_self(nums):
    # Write your code here
    pass`,

    java: `class Solution {
    public int[] productExceptSelf(int[] nums) {
        // Write your code here
        return new int[0];
    }
}`,

    c: `#include <stdio.h>

void productExceptSelf(int nums[], int n, int result[]) {
    // Write your code here
}`,

    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        // Write your code here
        return {};
    }
};`
  }
},
{
  id: "paes-m3",
  title: "Product Except Self Without Extra Arrays",
  difficulty: "Medium",
  description:
    "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. Implement the solution in O(n) time without using division and without creating separate prefix and suffix arrays.",
  constraints: [
    "2 ≤ nums.length ≤ 100000",
    "-30 ≤ nums[i] ≤ 30",
    "The product of any prefix or suffix fits in a 32-bit integer.",
    "Only O(1) extra space is allowed (excluding the output array)."
  ],
  examples: [
    {
      input: "nums = [1,2,3,4]",
      output: "[24,12,8,6]",
      explanation:
        "Use the output array to store prefix products and then update it using suffix products in a second traversal."
    },
    {
      input: "nums = [2,3,5]",
      output: "[15,10,6]",
      explanation:
        "Each position contains the product of all remaining elements."
    }
  ],
  testCases: [
    {
      input: "[1,2,3,4]",
      expectedOutput: "[24,12,8,6]"
    },
    {
      input: "[2,3,5]",
      expectedOutput: "[15,10,6]"
    },
    {
      input: "[4,1,2,8]",
      expectedOutput: "[16,64,32,8]"
    }
  ],
  starterCode: {
    python: `def product_except_self(nums):
    # Write your code here
    pass`,

    java: `class Solution {
    public int[] productExceptSelf(int[] nums) {
        // Write your code here
        return new int[0];
    }
}`,

    c: `#include <stdio.h>

void productExceptSelf(int nums[], int n, int result[]) {
    // Write your code here
}`,

    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        // Write your code here
        return {};
    }
};`
  }
},
{
  id: "paes-m4",
  title: "Product Except Self with Large Input Constraints",
  difficulty: "Medium",
  description:
    "You are given an integer array nums containing up to 100,000 elements. Return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. Your solution must run in O(n) time without using division and should use only constant extra space (excluding the output array).",
  constraints: [
    "2 ≤ nums.length ≤ 100000",
    "-30 ≤ nums[i] ≤ 30",
    "The product of any prefix or suffix fits in a 32-bit integer.",
    "Division is not allowed."
  ],
  examples: [
    {
      input: "nums = [2,4,6,8]",
      output: "[192,96,64,48]",
      explanation:
        "Each element in the output array is the product of every element except the one at the current index."
    },
    {
      input: "nums = [5,10]",
      output: "[10,5]",
      explanation:
        "Since there are only two elements, each output value is simply the other element."
    }
  ],
  testCases: [
    {
      input: "[2,4,6,8]",
      expectedOutput: "[192,96,64,48]"
    },
    {
      input: "[5,10]",
      expectedOutput: "[10,5]"
    },
    {
      input: "[3,5,7,9]",
      expectedOutput: "[315,189,135,105]"
    }
  ],
  starterCode: {
    python: `def product_except_self(nums):
    # Write your code here
    pass`,

    java: `class Solution {
    public int[] productExceptSelf(int[] nums) {
        // Write your code here
        return new int[0];
    }
}`,

    c: `#include <stdio.h>

void productExceptSelf(int nums[], int n, int result[]) {
    // Write your code here
}`,

    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        // Write your code here
        return {};
    }
};`
  }
},
{
  id: "paes-m5",
  title: "Product Except Self in Constant Extra Space",
  difficulty: "Medium",
  description:
    "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. Your solution must run in O(n) time, use no division, and use only constant extra space (excluding the output array).",
  constraints: [
    "2 ≤ nums.length ≤ 100000",
    "-30 ≤ nums[i] ≤ 30",
    "The product of any prefix or suffix fits in a 32-bit integer.",
    "Do not use division.",
    "Only O(1) extra space is allowed (excluding the output array)."
  ],
  examples: [
    {
      input: "nums = [1,2,3,4,5]",
      output: "[120,60,40,30,24]",
      explanation:
        "Compute prefix products during the first traversal and combine them with suffix products during the second traversal."
    },
    {
      input: "nums = [3,2]",
      output: "[2,3]",
      explanation:
        "Each output element is simply the value of the other element."
    }
  ],
  testCases: [
    {
      input: "[1,2,3,4,5]",
      expectedOutput: "[120,60,40,30,24]"
    },
    {
      input: "[3,2]",
      expectedOutput: "[2,3]"
    },
    {
      input: "[6,1,5,2]",
      expectedOutput: "[10,60,12,30]"
    }
  ],
  starterCode: {
    python: `def product_except_self(nums):
    # Write your code here
    pass`,

    java: `class Solution {
    public int[] productExceptSelf(int[] nums) {
        // Write your code here
        return new int[0];
    }
}`,

    c: `#include <stdio.h>

void productExceptSelf(int nums[], int n, int result[]) {
    // Write your code here
}`,

    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        // Write your code here
        return {};
    }
};`
  }
},
// HARD
{
  id: "paes-h1",
  title: "Product Except Self with Large-Scale Performance Constraints",
  difficulty: "Hard",
  description:
    "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. The input size can be very large, so your algorithm must run in O(n) time without using division and use only O(1) extra space (excluding the output array).",
  constraints: [
    "2 ≤ nums.length ≤ 1000000",
    "-30 ≤ nums[i] ≤ 30",
    "The product of every prefix and suffix fits in a 32-bit integer.",
    "Division is not allowed.",
    "Only O(1) auxiliary space is allowed (excluding the output array)."
  ],
  examples: [
    {
      input: "nums = [1,2,3,4]",
      output: "[24,12,8,6]",
      explanation:
        "Store prefix products in the output array during the first pass and combine them with suffix products during the second pass."
    },
    {
      input: "nums = [-1,1,0,-3,3]",
      output: "[0,0,9,0,0]",
      explanation:
        "The algorithm correctly handles zero values without using division."
    }
  ],
  testCases: [
    {
      input: "[1,2,3,4]",
      expectedOutput: "[24,12,8,6]"
    },
    {
      input: "[-1,1,0,-3,3]",
      expectedOutput: "[0,0,9,0,0]"
    },
    {
      input: "[2,3,4,5,6]",
      expectedOutput: "[360,240,180,144,120]"
    }
  ],
  starterCode: {
    python: `def product_except_self(nums):
    # Write your code here
    pass`,

    java: `class Solution {
    public int[] productExceptSelf(int[] nums) {
        // Write your code here
        return new int[0];
    }
}`,

    c: `#include <stdio.h>

void productExceptSelf(int nums[], int n, int result[]) {
    // Write your code here
}`,

    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        // Write your code here
        return {};
    }
};`
  }
},
{
  id: "paes-h2",
  title: "Product Except Self with Multiple Queries",
  difficulty: "Hard",
  description:
    "You are given an integer array nums and multiple independent queries. For each query, return the product of all elements except the element at the specified index. Design an efficient solution by preprocessing the array so that each query can be answered quickly without recomputing the entire product every time. Division is not allowed.",
  constraints: [
    "2 ≤ nums.length ≤ 100000",
    "1 ≤ queries.length ≤ 100000",
    "-30 ≤ nums[i] ≤ 30",
    "0 ≤ queryIndex < nums.length",
    "The product of every prefix and suffix fits in a 32-bit integer."
  ],
  examples: [
    {
      input: "nums = [1,2,3,4], queries = [0,2,3]",
      output: "[24,8,6]",
      explanation:
        "For each queried index, return the product of all elements except the element at that index."
    },
    {
      input: "nums = [2,5,6], queries = [1,0]",
      output: "[12,30]",
      explanation:
        "The answers correspond to the product except self for indices 1 and 0 respectively."
    }
  ],
  testCases: [
    {
      input: "nums = [1,2,3,4], queries = [0,2,3]",
      expectedOutput: "[24,8,6]"
    },
    {
      input: "nums = [2,5,6], queries = [1,0]",
      expectedOutput: "[12,30]"
    },
    {
      input: "nums = [3,4,5,6], queries = [2,1,0]",
      expectedOutput: "[72,90,120]"
    }
  ],
  starterCode: {
    python: `def product_except_self_queries(nums, queries):
    # Write your code here
    pass`,

    java: `class Solution {
    public int[] productExceptSelfQueries(int[] nums, int[] queries) {
        // Write your code here
        return new int[0];
    }
}`,

    c: `#include <stdio.h>

void productExceptSelfQueries(int nums[], int n, int queries[], int q, int result[]) {
    // Write your code here
}`,

    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> productExceptSelfQueries(vector<int>& nums, vector<int>& queries) {
        // Write your code here
        return {};
    }
};`
  }
},
{
  id: "paes-h3",
  title: "Product Except Self with Dynamic Updates",
  difficulty: "Hard",
  description:
    "You are given an integer array nums and a series of operations. Each operation is either an update that changes the value at a specific index or a query that asks for the product of all elements except the element at a given index. Process all operations efficiently without using division.",
  constraints: [
    "2 ≤ nums.length ≤ 100000",
    "1 ≤ operations.length ≤ 100000",
    "-30 ≤ nums[i] ≤ 30",
    "0 ≤ index < nums.length",
    "The product of every prefix and suffix fits in a 32-bit integer."
  ],
  examples: [
    {
      input: "nums = [1,2,3,4], operations = [[\"query\",2],[\"update\",1,5],[\"query\",2]]",
      output: "[8,20]",
      explanation:
        "Initially, the product except index 2 is 1 × 2 × 4 = 8. After updating index 1 to 5, the product except index 2 becomes 1 × 5 × 4 = 20."
    },
    {
      input: "nums = [2,3], operations = [[\"query\",0],[\"update\",1,4],[\"query\",0]]",
      output: "[3,4]",
      explanation:
        "The query results reflect the updated array after each modification."
    }
  ],
  testCases: [
    {
      input: "nums = [1,2,3,4], operations = [[\"query\",2],[\"update\",1,5],[\"query\",2]]",
      expectedOutput: "[8,20]"
    },
    {
      input: "nums = [2,3], operations = [[\"query\",0],[\"update\",1,4],[\"query\",0]]",
      expectedOutput: "[3,4]"
    },
    {
      input: "nums = [3,4,5], operations = [[\"query\",1],[\"update\",0,6],[\"query\",1]]",
      expectedOutput: "[15,30]"
    }
  ],
  starterCode: {
    python: `def process_operations(nums, operations):
    # Write your code here
    pass`,

    java: `class Solution {
    public int[] processOperations(int[] nums, String[][] operations) {
        // Write your code here
        return new int[0];
    }
}`,

    c: `#include <stdio.h>

void processOperations(int nums[], int n) {
    // Write your code here
}`,

    cpp: `#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    vector<int> processOperations(vector<int>& nums, vector<vector<string>>& operations) {
        // Write your code here
        return {};
    }
};`
  }
},
{
  id: "paes-h4",
  title: "Product Except Self in a Circular Array",
  difficulty: "Hard",
  description:
    "Given a circular integer array nums, return an array answer such that answer[i] is equal to the product of all elements except nums[i]. In a circular array, the first and last elements are considered adjacent, but the product must still include every element except the current one. Solve the problem without using division.",
  constraints: [
    "2 ≤ nums.length ≤ 100000",
    "-30 ≤ nums[i] ≤ 30",
    "The product of every prefix or suffix fits in a 32-bit integer.",
    "Division is not allowed."
  ],
  examples: [
    {
      input: "nums = [1,2,3,4]",
      output: "[24,12,8,6]",
      explanation:
        "Although the array is circular, every element except the current one contributes to the product."
    },
    {
      input: "nums = [2,5,6]",
      output: "[30,12,10]",
      explanation:
        "The circular property does not change which elements are included in the product."
    }
  ],
  testCases: [
    {
      input: "[1,2,3,4]",
      expectedOutput: "[24,12,8,6]"
    },
    {
      input: "[2,5,6]",
      expectedOutput: "[30,12,10]"
    },
    {
      input: "[3,4,5,2]",
      expectedOutput: "[40,30,24,60]"
    }
  ],
  starterCode: {
    python: `def product_except_self_circular(nums):
    # Write your code here
    pass`,

    java: `class Solution {
    public int[] productExceptSelfCircular(int[] nums) {
        // Write your code here
        return new int[0];
    }
}`,

    c: `#include <stdio.h>

void productExceptSelfCircular(int nums[], int n, int result[]) {
    // Write your code here
}`,

    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> productExceptSelfCircular(vector<int>& nums) {
        // Write your code here
        return {};
    }
};`
  }
},
{
  id: "paes-h5",
  title: "Online Product Except Self Stream",
  difficulty: "Hard",
  description:
    "You are given a stream of integers. Two types of operations are supported:\n\n1. add(x): Add an integer x to the end of the stream.\n2. query(i): Return the product of all elements currently in the stream except the element at index i.\n\nDesign a data structure that efficiently supports both operations without using division.",
  constraints: [
    "1 ≤ number of operations ≤ 100000",
    "-30 ≤ x ≤ 30",
    "0 ≤ i < current stream size",
    "Division is not allowed.",
    "The product of every prefix and suffix fits in a 32-bit integer."
  ],
  examples: [
    {
      input: "operations = [add(1), add(2), add(3), query(1)]",
      output: "[3]",
      explanation:
        "The stream becomes [1,2,3]. Excluding index 1, the product is 1 × 3 = 3."
    },
    {
      input: "operations = [add(4), add(5), query(0), add(2), query(2)]",
      output: "[5,20]",
      explanation:
        "After adding 4 and 5, excluding index 0 gives 5. After adding 2, excluding index 2 gives 4 × 5 = 20."
    }
  ],
  testCases: [
    {
      input: "operations = [add(1), add(2), add(3), query(1)]",
      expectedOutput: "[3]"
    },
    {
      input: "operations = [add(4), add(5), query(0), add(2), query(2)]",
      expectedOutput: "[5,20]"
    },
    {
      input: "operations = [add(2), add(3), add(4), query(2), add(5), query(1)]",
      expectedOutput: "[6,40]"
    }
  ],
  starterCode: {
    python: `class ProductStream:

    def add(self, num):
        # Write your code here
        pass

    def query(self, index):
        # Write your code here
        pass`,

    java: `class ProductStream {

    public void add(int num) {
        // Write your code here
    }

    public int query(int index) {
        // Write your code here
        return 0;
    }
}`,

    c: `#include <stdio.h>

void add(int num) {
    // Write your code here
}

int query(int index) {
    // Write your code here
    return 0;
}`,

    cpp: `#include <vector>
using namespace std;

class ProductStream {
public:
    void add(int num) {
        // Write your code here
    }

    int query(int index) {
        // Write your code here
        return 0;
    }
};`
  }
}
];