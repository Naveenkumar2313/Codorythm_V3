export const partitionEqualSubsetSumSolutions = {
  'pes-e1': {
    python: `def can_partition(nums):
    total = sum(nums)
    if total % 2 != 0:
        return False
    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True
    for num in nums:
        for s in range(target, num - 1, -1):
            dp[s] = dp[s] or dp[s - num]
    return dp[target]

n = int(input())
nums = list(map(int, input().split()))
print(str(can_partition(nums)).lower())`,
    java: `import java.util.*;
public class Main {
    public static boolean canPartition(int[] nums) {
        int total = 0;
        for (int num : nums) total += num;
        if (total % 2 != 0) return false;
        int target = total / 2;
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;
        for (int num : nums) {
            for (int s = target; s >= num; s--) {
                dp[s] = dp[s] || dp[s - num];
            }
        }
        return dp[target];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(canPartition(nums));
    }
}`,
    c: `#include <stdio.h>
#include <stdbool.h>
bool canPartition(int nums[], int n) {
    int total = 0;
    for (int i = 0; i < n; i++) total += nums[i];
    if (total % 2 != 0) return false;
    int target = total / 2;
    bool dp[target + 1];
    for (int i = 0; i <= target; i++) dp[i] = false;
    dp[0] = true;
    for (int i = 0; i < n; i++) {
        for (int s = target; s >= nums[i]; s--) {
            dp[s] = dp[s] || dp[s - nums[i]];
        }
    }
    return dp[target];
}
int main() {
    int n;
    scanf("%d", &n);
    int nums[n];
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%s\n", canPartition(nums, n) ? "true" : "false");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
bool canPartition(vector<int>& nums) {
    int total = 0;
    for (int num : nums) total += num;
    if (total % 2 != 0) return false;
    int target = total / 2;
    vector<bool> dp(target + 1, false);
    dp[0] = true;
    for (int num : nums) {
        for (int s = target; s >= num; s--) {
            dp[s] = dp[s] || dp[s - num];
        }
    }
    return dp[target];
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << (canPartition(nums) ? "true" : "false") << endl;
    return 0;
}`
  },
  'pes-e2': {
    python: `def can_partition(nums):
    total = sum(nums)
    if total % 2 != 0:
        return False
    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True
    for num in nums:
        for s in range(target, num - 1, -1):
            dp[s] = dp[s] or dp[s - num]
    return dp[target]

n = int(input())
nums = list(map(int, input().split()))
print(str(can_partition(nums)).lower())`,
    java: `import java.util.*;
public class Main {
    public static boolean canPartition(int[] nums) {
        int total = 0;
        for (int num : nums) total += num;
        if (total % 2 != 0) return false;
        int target = total / 2;
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;
        for (int num : nums) {
            for (int s = target; s >= num; s--) dp[s] = dp[s] || dp[s - num];
        }
        return dp[target];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(canPartition(nums));
    }
}`,
    c: `#include <stdio.h>
#include <stdbool.h>
bool canPartition(int nums[], int n) {
    int total = 0;
    for (int i = 0; i < n; i++) total += nums[i];
    if (total % 2 != 0) return false;
    int target = total / 2;
    bool dp[target + 1];
    for (int i = 0; i <= target; i++) dp[i] = false;
    dp[0] = true;
    for (int i = 0; i < n; i++)
        for (int s = target; s >= nums[i]; s--)
            dp[s] = dp[s] || dp[s - nums[i]];
    return dp[target];
}
int main() {
    int n;
    scanf("%d", &n);
    int nums[n];
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%s\n", canPartition(nums, n) ? "true" : "false");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
bool canPartition(vector<int>& nums) {
    int total = 0;
    for (int num : nums) total += num;
    if (total % 2 != 0) return false;
    int target = total / 2;
    vector<bool> dp(target + 1, false);
    dp[0] = true;
    for (int num : nums)
        for (int s = target; s >= num; s--)
            dp[s] = dp[s] || dp[s - num];
    return dp[target];
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << (canPartition(nums) ? "true" : "false") << endl;
    return 0;
}`
  },
  'pes-e3': {
    python: `def can_partition(nums):
    total = sum(nums)
    if total % 2 != 0:
        return False
    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True
    for num in nums:
        for s in range(target, num - 1, -1):
            dp[s] = dp[s] or dp[s - num]
    return dp[target]

n = int(input())
nums = list(map(int, input().split()))
print(str(can_partition(nums)).lower())`,
    java: `import java.util.*;
public class Main {
    public static boolean canPartition(int[] nums) {
        int total = 0;
        for (int num : nums) total += num;
        if (total % 2 != 0) return false;
        int target = total / 2;
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;
        for (int num : nums)
            for (int s = target; s >= num; s--)
                dp[s] = dp[s] || dp[s - num];
        return dp[target];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(canPartition(nums));
    }
}`,
    c: `#include <stdio.h>
#include <stdbool.h>
bool canPartition(int nums[], int n) {
    int total = 0;
    for (int i = 0; i < n; i++) total += nums[i];
    if (total % 2 != 0) return false;
    int target = total / 2;
    bool dp[target + 1];
    for (int i = 0; i <= target; i++) dp[i] = false;
    dp[0] = true;
    for (int i = 0; i < n; i++)
        for (int s = target; s >= nums[i]; s--)
            dp[s] = dp[s] || dp[s - nums[i]];
    return dp[target];
}
int main() {
    int n;
    scanf("%d", &n);
    int nums[n];
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%s\n", canPartition(nums, n) ? "true" : "false");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
bool canPartition(vector<int>& nums) {
    int total = 0;
    for (int num : nums) total += num;
    if (total % 2 != 0) return false;
    int target = total / 2;
    vector<bool> dp(target + 1, false);
    dp[0] = true;
    for (int num : nums)
        for (int s = target; s >= num; s--)
            dp[s] = dp[s] || dp[s - num];
    return dp[target];
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << (canPartition(nums) ? "true" : "false") << endl;
    return 0;
}`
  },
  'pes-e4': {
    python: `def can_partition(nums):
    total = sum(nums)
    if total % 2 != 0:
        return False
    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True
    for num in nums:
        for s in range(target, num - 1, -1):
            dp[s] = dp[s] or dp[s - num]
    return dp[target]

n = int(input())
nums = list(map(int, input().split()))
print(str(can_partition(nums)).lower())`,
    java: `import java.util.*;
public class Main {
    public static boolean canPartition(int[] nums) {
        int total = 0;
        for (int num : nums) total += num;
        if (total % 2 != 0) return false;
        int target = total / 2;
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;
        for (int num : nums)
            for (int s = target; s >= num; s--)
                dp[s] = dp[s] || dp[s - num];
        return dp[target];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(canPartition(nums));
    }
}`,
    c: `#include <stdio.h>
#include <stdbool.h>
bool canPartition(int nums[], int n) {
    int total = 0;
    for (int i = 0; i < n; i++) total += nums[i];
    if (total % 2 != 0) return false;
    int target = total / 2;
    bool dp[target + 1];
    for (int i = 0; i <= target; i++) dp[i] = false;
    dp[0] = true;
    for (int i = 0; i < n; i++)
        for (int s = target; s >= nums[i]; s--)
            dp[s] = dp[s] || dp[s - nums[i]];
    return dp[target];
}
int main() {
    int n;
    scanf("%d", &n);
    int nums[n];
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%s\n", canPartition(nums, n) ? "true" : "false");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
bool canPartition(vector<int>& nums) {
    int total = 0;
    for (int num : nums) total += num;
    if (total % 2 != 0) return false;
    int target = total / 2;
    vector<bool> dp(target + 1, false);
    dp[0] = true;
    for (int num : nums)
        for (int s = target; s >= num; s--)
            dp[s] = dp[s] || dp[s - num];
    return dp[target];
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << (canPartition(nums) ? "true" : "false") << endl;
    return 0;
}`
  },
  'pes-e5': {
    python: `def can_partition(nums):
    total = sum(nums)
    if total % 2 != 0:
        return False
    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True
    for num in nums:
        for s in range(target, num - 1, -1):
            dp[s] = dp[s] or dp[s - num]
    return dp[target]

n = int(input())
nums = list(map(int, input().split()))
print(str(can_partition(nums)).lower())`,
    java: `import java.util.*;
public class Main {
    public static boolean canPartition(int[] nums) {
        int total = 0;
        for (int num : nums) total += num;
        if (total % 2 != 0) return false;
        int target = total / 2;
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;
        for (int num : nums)
            for (int s = target; s >= num; s--)
                dp[s] = dp[s] || dp[s - num];
        return dp[target];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(canPartition(nums));
    }
}`,
    c: `#include <stdio.h>
#include <stdbool.h>
bool canPartition(int nums[], int n) {
    int total = 0;
    for (int i = 0; i < n; i++) total += nums[i];
    if (total % 2 != 0) return false;
    int target = total / 2;
    bool dp[target + 1];
    for (int i = 0; i <= target; i++) dp[i] = false;
    dp[0] = true;
    for (int i = 0; i < n; i++)
        for (int s = target; s >= nums[i]; s--)
            dp[s] = dp[s] || dp[s - nums[i]];
    return dp[target];
}
int main() {
    int n;
    scanf("%d", &n);
    int nums[n];
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%s\n", canPartition(nums, n) ? "true" : "false");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
bool canPartition(vector<int>& nums) {
    int total = 0;
    for (int num : nums) total += num;
    if (total % 2 != 0) return false;
    int target = total / 2;
    vector<bool> dp(target + 1, false);
    dp[0] = true;
    for (int num : nums)
        for (int s = target; s >= num; s--)
            dp[s] = dp[s] || dp[s - num];
    return dp[target];
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << (canPartition(nums) ? "true" : "false") << endl;
    return 0;
}`
  },
  'pes-m1': {
    python: `def can_partition(nums):
    total = sum(nums)
    if total % 2 != 0:
        return False
    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True
    for num in nums:
        for s in range(target, num - 1, -1):
            dp[s] = dp[s] or dp[s - num]
    return dp[target]

n = int(input())
nums = list(map(int, input().split()))
print(str(can_partition(nums)).lower())`,
    java: `import java.util.*;
public class Main {
    public static boolean canPartition(int[] nums) {
        int total = 0;
        for (int num : nums) total += num;
        if (total % 2 != 0) return false;
        int target = total / 2;
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;
        for (int num : nums)
            for (int s = target; s >= num; s--)
                dp[s] = dp[s] || dp[s - num];
        return dp[target];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(canPartition(nums));
    }
}`,
    c: `#include <stdio.h>
#include <stdbool.h>
bool canPartition(int nums[], int n) {
    int total = 0;
    for (int i = 0; i < n; i++) total += nums[i];
    if (total % 2 != 0) return false;
    int target = total / 2;
    bool dp[target + 1];
    for (int i = 0; i <= target; i++) dp[i] = false;
    dp[0] = true;
    for (int i = 0; i < n; i++)
        for (int s = target; s >= nums[i]; s--)
            dp[s] = dp[s] || dp[s - nums[i]];
    return dp[target];
}
int main() {
    int n;
    scanf("%d", &n);
    int nums[n];
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%s\n", canPartition(nums, n) ? "true" : "false");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
bool canPartition(vector<int>& nums) {
    int total = 0;
    for (int num : nums) total += num;
    if (total % 2 != 0) return false;
    int target = total / 2;
    vector<bool> dp(target + 1, false);
    dp[0] = true;
    for (int num : nums)
        for (int s = target; s >= num; s--)
            dp[s] = dp[s] || dp[s - num];
    return dp[target];
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << (canPartition(nums) ? "true" : "false") << endl;
    return 0;
}`
  },
  'pes-m2': {
    python: `def can_partition(nums):
    total = sum(nums)
    if total % 2 != 0:
        return False
    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True
    for num in nums:
        for s in range(target, num - 1, -1):
            dp[s] = dp[s] or dp[s - num]
    return dp[target]

n = int(input())
nums = list(map(int, input().split()))
print(str(can_partition(nums)).lower())`,
    java: `import java.util.*;
public class Main {
    public static boolean canPartition(int[] nums) {
        int total = 0;
        for (int num : nums) total += num;
        if (total % 2 != 0) return false;
        int target = total / 2;
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;
        for (int num : nums)
            for (int s = target; s >= num; s--)
                dp[s] = dp[s] || dp[s - num];
        return dp[target];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(canPartition(nums));
    }
}`,
    c: `#include <stdio.h>
#include <stdbool.h>
bool canPartition(int nums[], int n) {
    int total = 0;
    for (int i = 0; i < n; i++) total += nums[i];
    if (total % 2 != 0) return false;
    int target = total / 2;
    bool dp[target + 1];
    for (int i = 0; i <= target; i++) dp[i] = false;
    dp[0] = true;
    for (int i = 0; i < n; i++)
        for (int s = target; s >= nums[i]; s--)
            dp[s] = dp[s] || dp[s - nums[i]];
    return dp[target];
}
int main() {
    int n;
    scanf("%d", &n);
    int nums[n];
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%s\n", canPartition(nums, n) ? "true" : "false");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
bool canPartition(vector<int>& nums) {
    int total = 0;
    for (int num : nums) total += num;
    if (total % 2 != 0) return false;
    int target = total / 2;
    vector<bool> dp(target + 1, false);
    dp[0] = true;
    for (int num : nums)
        for (int s = target; s >= num; s--)
            dp[s] = dp[s] || dp[s - num];
    return dp[target];
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << (canPartition(nums) ? "true" : "false") << endl;
    return 0;
}`
  },
  'pes-m3': {
    python: `def can_partition(nums):
    total = sum(nums)
    if total % 2 != 0:
        return False
    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True
    for num in nums:
        for s in range(target, num - 1, -1):
            dp[s] = dp[s] or dp[s - num]
    return dp[target]

n = int(input())
nums = list(map(int, input().split()))
print(str(can_partition(nums)).lower())`,
    java: `import java.util.*;
public class Main {
    public static boolean canPartition(int[] nums) {
        int total = 0;
        for (int num : nums) total += num;
        if (total % 2 != 0) return false;
        int target = total / 2;
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;
        for (int num : nums)
            for (int s = target; s >= num; s--)
                dp[s] = dp[s] || dp[s - num];
        return dp[target];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(canPartition(nums));
    }
}`,
    c: `#include <stdio.h>
#include <stdbool.h>
bool canPartition(int nums[], int n) {
    int total = 0;
    for (int i = 0; i < n; i++) total += nums[i];
    if (total % 2 != 0) return false;
    int target = total / 2;
    bool dp[target + 1];
    for (int i = 0; i <= target; i++) dp[i] = false;
    dp[0] = true;
    for (int i = 0; i < n; i++)
        for (int s = target; s >= nums[i]; s--)
            dp[s] = dp[s] || dp[s - nums[i]];
    return dp[target];
}
int main() {
    int n;
    scanf("%d", &n);
    int nums[n];
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%s\n", canPartition(nums, n) ? "true" : "false");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
bool canPartition(vector<int>& nums) {
    int total = 0;
    for (int num : nums) total += num;
    if (total % 2 != 0) return false;
    int target = total / 2;
    vector<bool> dp(target + 1, false);
    dp[0] = true;
    for (int num : nums)
        for (int s = target; s >= num; s--)
            dp[s] = dp[s] || dp[s - num];
    return dp[target];
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << (canPartition(nums) ? "true" : "false") << endl;
    return 0;
}`
  },
  'pes-m4': {
    python: `def can_partition(nums):
    total = sum(nums)
    if total % 2 != 0:
        return False
    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True
    for num in nums:
        for s in range(target, num - 1, -1):
            dp[s] = dp[s] or dp[s - num]
    return dp[target]

n = int(input())
nums = list(map(int, input().split()))
print(str(can_partition(nums)).lower())`,
    java: `import java.util.*;
public class Main {
    public static boolean canPartition(int[] nums) {
        int total = 0;
        for (int num : nums) total += num;
        if (total % 2 != 0) return false;
        int target = total / 2;
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;
        for (int num : nums)
            for (int s = target; s >= num; s--)
                dp[s] = dp[s] || dp[s - num];
        return dp[target];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(canPartition(nums));
    }
}`,
    c: `#include <stdio.h>
#include <stdbool.h>
bool canPartition(int nums[], int n) {
    int total = 0;
    for (int i = 0; i < n; i++) total += nums[i];
    if (total % 2 != 0) return false;
    int target = total / 2;
    bool dp[target + 1];
    for (int i = 0; i <= target; i++) dp[i] = false;
    dp[0] = true;
    for (int i = 0; i < n; i++)
        for (int s = target; s >= nums[i]; s--)
            dp[s] = dp[s] || dp[s - nums[i]];
    return dp[target];
}
int main() {
    int n;
    scanf("%d", &n);
    int nums[n];
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%s\n", canPartition(nums, n) ? "true" : "false");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
bool canPartition(vector<int>& nums) {
    int total = 0;
    for (int num : nums) total += num;
    if (total % 2 != 0) return false;
    int target = total / 2;
    vector<bool> dp(target + 1, false);
    dp[0] = true;
    for (int num : nums)
        for (int s = target; s >= num; s--)
            dp[s] = dp[s] || dp[s - num];
    return dp[target];
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << (canPartition(nums) ? "true" : "false") << endl;
    return 0;
}`
  },
  'pes-m5': {
    python: `def can_partition(nums):
    total = sum(nums)
    if total % 2 != 0:
        return False
    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True
    for num in nums:
        for s in range(target, num - 1, -1):
            dp[s] = dp[s] or dp[s - num]
    return dp[target]

n = int(input())
nums = list(map(int, input().split()))
print(str(can_partition(nums)).lower())`,
    java: `import java.util.*;
public class Main {
    public static boolean canPartition(int[] nums) {
        int total = 0;
        for (int num : nums) total += num;
        if (total % 2 != 0) return false;
        int target = total / 2;
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;
        for (int num : nums)
            for (int s = target; s >= num; s--)
                dp[s] = dp[s] || dp[s - num];
        return dp[target];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(canPartition(nums));
    }
}`,
    c: `#include <stdio.h>
#include <stdbool.h>
bool canPartition(int nums[], int n) {
    int total = 0;
    for (int i = 0; i < n; i++) total += nums[i];
    if (total % 2 != 0) return false;
    int target = total / 2;
    bool dp[target + 1];
    for (int i = 0; i <= target; i++) dp[i] = false;
    dp[0] = true;
    for (int i = 0; i < n; i++)
        for (int s = target; s >= nums[i]; s--)
            dp[s] = dp[s] || dp[s - nums[i]];
    return dp[target];
}
int main() {
    int n;
    scanf("%d", &n);
    int nums[n];
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%s\n", canPartition(nums, n) ? "true" : "false");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
bool canPartition(vector<int>& nums) {
    int total = 0;
    for (int num : nums) total += num;
    if (total % 2 != 0) return false;
    int target = total / 2;
    vector<bool> dp(target + 1, false);
    dp[0] = true;
    for (int num : nums)
        for (int s = target; s >= num; s--)
            dp[s] = dp[s] || dp[s - num];
    return dp[target];
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << (canPartition(nums) ? "true" : "false") << endl;
    return 0;
}`
  },
  'pes-h1': {
    python: `def can_partition(nums):
    total = sum(nums)
    if total % 2 != 0:
        return False
    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True
    for num in nums:
        for s in range(target, num - 1, -1):
            dp[s] = dp[s] or dp[s - num]
    return dp[target]

n = int(input())
nums = list(map(int, input().split()))
print(str(can_partition(nums)).lower())`,
    java: `import java.util.*;
public class Main {
    public static boolean canPartition(int[] nums) {
        int total = 0;
        for (int num : nums) total += num;
        if (total % 2 != 0) return false;
        int target = total / 2;
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;
        for (int num : nums)
            for (int s = target; s >= num; s--)
                dp[s] = dp[s] || dp[s - num];
        return dp[target];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(canPartition(nums));
    }
}`,
    c: `#include <stdio.h>
#include <stdbool.h>
bool canPartition(int nums[], int n) {
    int total = 0;
    for (int i = 0; i < n; i++) total += nums[i];
    if (total % 2 != 0) return false;
    int target = total / 2;
    bool dp[target + 1];
    for (int i = 0; i <= target; i++) dp[i] = false;
    dp[0] = true;
    for (int i = 0; i < n; i++)
        for (int s = target; s >= nums[i]; s--)
            dp[s] = dp[s] || dp[s - nums[i]];
    return dp[target];
}
int main() {
    int n;
    scanf("%d", &n);
    int nums[n];
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%s\n", canPartition(nums, n) ? "true" : "false");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
bool canPartition(vector<int>& nums) {
    int total = 0;
    for (int num : nums) total += num;
    if (total % 2 != 0) return false;
    int target = total / 2;
    vector<bool> dp(target + 1, false);
    dp[0] = true;
    for (int num : nums)
        for (int s = target; s >= num; s--)
            dp[s] = dp[s] || dp[s - num];
    return dp[target];
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << (canPartition(nums) ? "true" : "false") << endl;
    return 0;
}`
  },
  'pes-h2': {
    python: `def can_partition(nums):
    total = sum(nums)
    if total % 2 != 0:
        return False
    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True
    for num in nums:
        for s in range(target, num - 1, -1):
            dp[s] = dp[s] or dp[s - num]
    return dp[target]

n = int(input())
nums = list(map(int, input().split()))
print(str(can_partition(nums)).lower())`,
    java: `import java.util.*;
public class Main {
    public static boolean canPartition(int[] nums) {
        int total = 0;
        for (int num : nums) total += num;
        if (total % 2 != 0) return false;
        int target = total / 2;
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;
        for (int num : nums)
            for (int s = target; s >= num; s--)
                dp[s] = dp[s] || dp[s - num];
        return dp[target];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(canPartition(nums));
    }
}`,
    c: `#include <stdio.h>
#include <stdbool.h>
bool canPartition(int nums[], int n) {
    int total = 0;
    for (int i = 0; i < n; i++) total += nums[i];
    if (total % 2 != 0) return false;
    int target = total / 2;
    bool dp[target + 1];
    for (int i = 0; i <= target; i++) dp[i] = false;
    dp[0] = true;
    for (int i = 0; i < n; i++)
        for (int s = target; s >= nums[i]; s--)
            dp[s] = dp[s] || dp[s - nums[i]];
    return dp[target];
}
int main() {
    int n;
    scanf("%d", &n);
    int nums[n];
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%s\n", canPartition(nums, n) ? "true" : "false");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
bool canPartition(vector<int>& nums) {
    int total = 0;
    for (int num : nums) total += num;
    if (total % 2 != 0) return false;
    int target = total / 2;
    vector<bool> dp(target + 1, false);
    dp[0] = true;
    for (int num : nums)
        for (int s = target; s >= num; s--)
            dp[s] = dp[s] || dp[s - num];
    return dp[target];
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << (canPartition(nums) ? "true" : "false") << endl;
    return 0;
}`
  },
  'pes-h3': {
    python: `def can_partition(nums):
    total = sum(nums)
    if total % 2 != 0:
        return False
    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True
    for num in nums:
        for s in range(target, num - 1, -1):
            dp[s] = dp[s] or dp[s - num]
    return dp[target]

n = int(input())
nums = list(map(int, input().split()))
print(str(can_partition(nums)).lower())`,
    java: `import java.util.*;
public class Main {
    public static boolean canPartition(int[] nums) {
        int total = 0;
        for (int num : nums) total += num;
        if (total % 2 != 0) return false;
        int target = total / 2;
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;
        for (int num : nums)
            for (int s = target; s >= num; s--)
                dp[s] = dp[s] || dp[s - num];
        return dp[target];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(canPartition(nums));
    }
}`,
    c: `#include <stdio.h>
#include <stdbool.h>
bool canPartition(int nums[], int n) {
    int total = 0;
    for (int i = 0; i < n; i++) total += nums[i];
    if (total % 2 != 0) return false;
    int target = total / 2;
    bool dp[target + 1];
    for (int i = 0; i <= target; i++) dp[i] = false;
    dp[0] = true;
    for (int i = 0; i < n; i++)
        for (int s = target; s >= nums[i]; s--)
            dp[s] = dp[s] || dp[s - nums[i]];
    return dp[target];
}
int main() {
    int n;
    scanf("%d", &n);
    int nums[n];
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%s\n", canPartition(nums, n) ? "true" : "false");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
bool canPartition(vector<int>& nums) {
    int total = 0;
    for (int num : nums) total += num;
    if (total % 2 != 0) return false;
    int target = total / 2;
    vector<bool> dp(target + 1, false);
    dp[0] = true;
    for (int num : nums)
        for (int s = target; s >= num; s--)
            dp[s] = dp[s] || dp[s - num];
    return dp[target];
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << (canPartition(nums) ? "true" : "false") << endl;
    return 0;
}`
  },
  'pes-h4': {
    python: `def can_partition(nums):
    total = sum(nums)
    if total % 2 != 0:
        return False
    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True
    for num in nums:
        for s in range(target, num - 1, -1):
            dp[s] = dp[s] or dp[s - num]
    return dp[target]

n = int(input())
nums = list(map(int, input().split()))
print(str(can_partition(nums)).lower())`,
    java: `import java.util.*;
public class Main {
    public static boolean canPartition(int[] nums) {
        int total = 0;
        for (int num : nums) total += num;
        if (total % 2 != 0) return false;
        int target = total / 2;
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;
        for (int num : nums)
            for (int s = target; s >= num; s--)
                dp[s] = dp[s] || dp[s - num];
        return dp[target];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(canPartition(nums));
    }
}`,
    c: `#include <stdio.h>
#include <stdbool.h>
bool canPartition(int nums[], int n) {
    int total = 0;
    for (int i = 0; i < n; i++) total += nums[i];
    if (total % 2 != 0) return false;
    int target = total / 2;
    bool dp[target + 1];
    for (int i = 0; i <= target; i++) dp[i] = false;
    dp[0] = true;
    for (int i = 0; i < n; i++)
        for (int s = target; s >= nums[i]; s--)
            dp[s] = dp[s] || dp[s - nums[i]];
    return dp[target];
}
int main() {
    int n;
    scanf("%d", &n);
    int nums[n];
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%s\n", canPartition(nums, n) ? "true" : "false");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
bool canPartition(vector<int>& nums) {
    int total = 0;
    for (int num : nums) total += num;
    if (total % 2 != 0) return false;
    int target = total / 2;
    vector<bool> dp(target + 1, false);
    dp[0] = true;
    for (int num : nums)
        for (int s = target; s >= num; s--)
            dp[s] = dp[s] || dp[s - num];
    return dp[target];
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << (canPartition(nums) ? "true" : "false") << endl;
    return 0;
}`
  },
  'pes-h5': {
    python: `def can_partition(nums):
    total = sum(nums)
    if total % 2 != 0:
        return False
    target = total // 2
    dp = [False] * (target + 1)
    dp[0] = True
    for num in nums:
        for s in range(target, num - 1, -1):
            dp[s] = dp[s] or dp[s - num]
    return dp[target]

n = int(input())
nums = list(map(int, input().split()))
print(str(can_partition(nums)).lower())`,
    java: `import java.util.*;
public class Main {
    public static boolean canPartition(int[] nums) {
        int total = 0;
        for (int num : nums) total += num;
        if (total % 2 != 0) return false;
        int target = total / 2;
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;
        for (int num : nums)
            for (int s = target; s >= num; s--)
                dp[s] = dp[s] || dp[s - num];
        return dp[target];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(canPartition(nums));
    }
}`,
    c: `#include <stdio.h>
#include <stdbool.h>
bool canPartition(int nums[], int n) {
    int total = 0;
    for (int i = 0; i < n; i++) total += nums[i];
    if (total % 2 != 0) return false;
    int target = total / 2;
    bool dp[target + 1];
    for (int i = 0; i <= target; i++) dp[i] = false;
    dp[0] = true;
    for (int i = 0; i < n; i++)
        for (int s = target; s >= nums[i]; s--)
            dp[s] = dp[s] || dp[s - nums[i]];
    return dp[target];
}
int main() {
    int n;
    scanf("%d", &n);
    int nums[n];
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%s\n", canPartition(nums, n) ? "true" : "false");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
bool canPartition(vector<int>& nums) {
    int total = 0;
    for (int num : nums) total += num;
    if (total % 2 != 0) return false;
    int target = total / 2;
    vector<bool> dp(target + 1, false);
    dp[0] = true;
    for (int num : nums)
        for (int s = target; s >= num; s--)
            dp[s] = dp[s] || dp[s - num];
    return dp[target];
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << (canPartition(nums) ? "true" : "false") << endl;
    return 0;
}`
  }
};