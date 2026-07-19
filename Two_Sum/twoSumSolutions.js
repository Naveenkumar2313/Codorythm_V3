export const twoSumSolutions={
      'ts-e1': {
    python: `def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        if target - num in seen:
            return [seen[target - num], i]
        seen[num] = i
    return []
n = int(input())
nums = list(map(int, input().split()))
target = int(input())
print(two_sum(nums, target))`,
    java: `import java.util.*;
public class Main {
    public static List<Integer> twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int need = target - nums[i];
            if (map.containsKey(need)) {
                return Arrays.asList(map.get(need), i);
            }
            map.put(nums[i], i);
        }
        return new ArrayList<>();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            int target = sc.nextInt();
            System.out.println(twoSum(nums, target));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
void twoSum(int* nums, int numsSize, int target) {
    for (int i = 0; i < numsSize; i++) {
        for (int j = i + 1; j < numsSize; j++) {
            if (nums[i] + nums[j] == target) {
                printf("[%d,%d]\n", i, j);
                return;
            }
        }
    }
    printf("[]\n");
}
int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int target;
    if (scanf("%d", &target) != 1) return 0;
    twoSum(nums, n, target);
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> mp;
    for (int i = 0; i < nums.size(); i++) {
        int need = target - nums[i];
        if (mp.count(need)) return {mp[need], i};
        mp[nums[i]] = i;
    }
    return {};
}
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }
        int target;
        cin >> target;
        vector<int> ans = twoSum(nums, target);
        cout << "[";
        for (int i = 0; i < ans.size(); i++) {
            if (i) cout << ",";
            cout << ans[i];
        }
        cout << "]\n";
    }
    return 0;
}`
  },  'ts-e2': {
    python: `def two_sum_exists(nums, target):
    seen = set()
    for num in nums:
        if target - num in seen:
            return True
        seen.add(num)
    return False

n = int(input())
nums = list(map(int, input().split()))
target = int(input())
print(str(two_sum_exists(nums, target)).lower())`,
    java: `import java.util.*;
public class Main {
    public static boolean twoSumExists(int[] nums, int target) {
        HashSet<Integer> seen = new HashSet<>();
        for (int num : nums) {
            if (seen.contains(target - num)) return true;
            seen.add(num);
        }
        return false;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            int target = sc.nextInt();
            System.out.println(twoSumExists(nums, target));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int twoSumExists(int* nums, int numsSize, int target) {
    for (int i = 0; i < numsSize; i++) {
        for (int j = i + 1; j < numsSize; j++) {
            if (nums[i] + nums[j] == target) return 1;
        }
    }
    return 0;
}
int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int target;
    if (scanf("%d", &target) != 1) return 0;
    printf(twoSumExists(nums, n, target) ? "true\n" : "false\n");
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;
bool twoSumExists(vector<int>& nums, int target) {
    unordered_set<int> seen;
    for (int num : nums) {
        if (seen.count(target - num)) return true;
        seen.insert(num);
    }
    return false;
}
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }
        int target;
        cin >> target;
        cout << (twoSumExists(nums, target) ? "true" : "false") << "\n";
    }
    return 0;
}`
  },  'ts-e3': {
    python: `def count_pairs(nums, target):
    seen = {}
    count = 0
    for num in nums:
        need = target - num
        if need in seen:
            count += seen[need]
        seen[num] = seen.get(num, 0) + 1
    return count
n = int(input())
nums = list(map(int, input().split()))
target = int(input())
print(count_pairs(nums, target))`,
    java: `import java.util.*;
public class Main{
    public static int countPairs(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        int count = 0;
        for (int num : nums) {
            int need = target - num;
            count += map.getOrDefault(need, 0);
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        return count;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            int target = sc.nextInt();
            System.out.println(countPairs(nums, target));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int countPairs(int* nums, int numsSize, int target) {
    int count = 0;
    for (int i = 0; i < numsSize; i++) {
        for (int j = i + 1; j < numsSize; j++) {
            if (nums[i] + nums[j] == target) count++;
        }
    }
    return count;
}
int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int target;
    if (scanf("%d", &target) != 1) return 0;
    printf("%d\n", countPairs(nums, n, target));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
int countPairs(vector<int>& nums, int target) {
    unordered_map<int, int> mp;
    int count = 0;
    for (int num : nums) {
        int need = target - num;
        if (mp.count(need)) count += mp[need];
        mp[num]++;
    }
    return count;
}
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }
        int target;
        cin >> target;
        cout << countPairs(nums, target) << "\n";
    }
    return 0;
}`
  },  'ts-e4': {
    python: `def two_sum_sorted(nums, target):
    l, r = 0, len(nums) - 1
    while l < r:
        s = nums[l] + nums[r]
        if s == target:
            return [l, r]
        if s < target:
            l += 1
        else:
            r -= 1
    return []

n = int(input())
nums = list(map(int, input().split()))
target = int(input())
print(two_sum_sorted(nums, target))`,
    java: `import java.util.*;
public class Main {
    public static List<Integer> twoSumSorted(int[] nums, int target) {
        int l = 0, r = nums.length - 1;
        while (l < r) {
            int sum = nums[l] + nums[r];
            if (sum == target) return Arrays.asList(l, r);
            if (sum < target) l++;
            else r--;
        }
        return new ArrayList<>();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            int target = sc.nextInt();
            System.out.println(twoSumSorted(nums, target));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
void twoSumSorted(int* nums, int numsSize, int target) {
    int l = 0, r = numsSize - 1;
    while (l < r) {
        int sum = nums[l] + nums[r];
        if (sum == target) {
            printf("[%d,%d]\n", l, r);
            return;
        }
        if (sum < target) l++;
        else r--;
    }
    printf("[]\n");
}
int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int target;
    if (scanf("%d", &target) != 1) return 0;
    twoSumSorted(nums, n, target);
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
vector<int> twoSumSorted(vector<int>& nums, int target) {
    int l = 0, r = nums.size() - 1;
    while (l < r) {
        int sum = nums[l] + nums[r];
        if (sum == target) return {l, r};
        if (sum < target) l++;
        else r--;
    }
    return {};
}
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }
        int target;
        cin >> target;
        vector<int> ans = twoSumSorted(nums, target);
        cout << "[";
        for (int i = 0; i < ans.size(); i++) {
            if (i) cout << ",";
            cout << ans[i];
        }
        cout << "]\n";
    }
    return 0;
}`
  },  'ts-e5': {
    python: `def first_valid_pair(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        if target - num in seen:
            return [seen[target - num], i]
        if num not in seen:
            seen[num] = i
    return []
n = int(input())
nums = list(map(int, input().split()))
target = int(input())
print(first_valid_pair(nums, target))`,
    java: `import java.util.*;
public class Main {
    public static List<Integer> firstValidPair(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int need = target - nums[i];
            if (map.containsKey(need)) {
                return Arrays.asList(map.get(need), i);
            }
            map.putIfAbsent(nums[i], i);
        }
        return new ArrayList<>();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            int target = sc.nextInt();
            System.out.println(firstValidPair(nums, target));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
void firstValidPair(int* nums, int numsSize, int target) {
    for (int i = 0; i < numsSize; i++) {
        for (int j = i + 1; j < numsSize; j++) {
            if (nums[i] + nums[j] == target) {
                printf("[%d,%d]\n", i, j);
                return;
            }
        }
    }
    printf("[]\n");
}
int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int target;
    if (scanf("%d", &target) != 1) return 0;
    firstValidPair(nums, n, target);
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
vector<int> firstValidPair(vector<int>& nums, int target) {
    unordered_map<int, int> mp;
    for (int i = 0; i < nums.size(); i++) {
        int need = target - nums[i];
        if (mp.count(need)) return {mp[need], i};
        if (!mp.count(nums[i])) mp[nums[i]] = i;
    }
    return {};
}
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }
        int target;
        cin >> target;
        vector<int> ans = firstValidPair(nums, target);
        cout << "[";
        for (int i = 0; i < ans.size(); i++) {
            if (i) cout << ",";
            cout << ans[i];
        }
        cout << "]\n";
    }
    return 0;
}`
  },  'ts-m1': {
    python: `def two_sum_less_than_target(nums, target):
    nums.sort()
    l, r = 0, len(nums) - 1
    ans = -1
    while l < r:
        s = nums[l] + nums[r]
        if s < target:
            ans = max(ans, s)
            l += 1
        else:
            r -= 1
    return ans
n = int(input())
nums = list(map(int, input().split()))
target = int(input())
print(two_sum_less_than_target(nums, target))`,
    java: `import java.util.*;
public class Main {
    public static int twoSumLessThanTarget(int[] nums, int target) {
        Arrays.sort(nums);
        int l = 0, r = nums.length - 1;
        int ans = -1;
        while (l < r) {
            int sum = nums[l] + nums[r];
            if (sum < target) {
                ans = Math.max(ans, sum);
                l++;
            } else {
                r--;
            }
        }
        return ans;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int target = sc.nextInt();
            System.out.println(twoSumLessThanTarget(nums, target));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}
int twoSumLessThanTarget(int* nums, int numsSize, int target) {
    qsort(nums, numsSize, sizeof(int), cmp);
    int l = 0, r = numsSize - 1;
    int ans = -1;
    while (l < r) {
        int sum = nums[l] + nums[r];
        if (sum < target) {
            if (sum > ans) ans = sum;
            l++;
        } else {
            r--;
        }
    }
    return ans;
}
int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    int target;
    scanf("%d", &target);
    printf("%d\n", twoSumLessThanTarget(nums, n, target));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int twoSumLessThanTarget(vector<int>& nums, int target) {
    sort(nums.begin(), nums.end());
    int l = 0, r = nums.size() - 1;
    int ans = -1;
    while (l < r) {
        int sum = nums[l] + nums[r];
        if (sum < target) {
            ans = max(ans, sum);
            l++;
        } else {
            r--;
        }
    }
    return ans;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        int target;
        cin >> target;
        cout << twoSumLessThanTarget(nums, target) << "\n";
    }
    return 0;
}`
  },  'ts-m2': {
    python: `def two_sum_closest(nums, target):
    nums.sort()
    l, r = 0, len(nums) - 1
    best = nums[l] + nums[r]
    while l < r:
        s = nums[l] + nums[r]
        if abs(s - target) < abs(best - target):
            best = s
        elif abs(s - target) == abs(best - target):
            best = min(best, s)
        if s < target:
            l += 1
        elif s > target:
            r -= 1
        else:
            return s
    return best
n = int(input())
nums = list(map(int, input().split()))
target = int(input())
print(two_sum_closest(nums, target))`,
    java: `import java.util.*;
public class Main {
    public static int twoSumClosest(int[] nums, int target) {
        Arrays.sort(nums);
        int l = 0, r = nums.length - 1;
        int best = nums[l] + nums[r];
        while (l < r) {
            int sum = nums[l] + nums[r];
            if (Math.abs(sum - target) < Math.abs(best - target) || (Math.abs(sum - target) == Math.abs(best - target) && sum < best)) {
                best = sum;
            }
            if (sum < target) l++;
            else if (sum > target) r--;
            else return sum;
        }
        return best;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int target = sc.nextInt();
            System.out.println(twoSumClosest(nums, target));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}
int absVal(int x) {
    return x < 0 ? -x : x;
}
int twoSumClosest(int* nums, int numsSize, int target) {
    qsort(nums, numsSize, sizeof(int), cmp);
    int l = 0, r = numsSize - 1;
    int best = nums[l] + nums[r];
    while (l < r) {
        int sum = nums[l] + nums[r];
        if (absVal(sum - target) < absVal(best - target) || (absVal(sum - target) == absVal(best - target) && sum < best))
            best = sum;
        if (sum < target) l++;
        else if (sum > target) r--;
        else return sum;
    }
    return best;
}
int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    int target;
    scanf("%d", &target);
    printf("%d\n", twoSumClosest(nums, n, target));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>
using namespace std;
int twoSumClosest(vector<int>& nums, int target) {
    sort(nums.begin(), nums.end());
    int l = 0, r = nums.size() - 1;
    int best = nums[l] + nums[r];
    while (l < r) {
        int sum = nums[l] + nums[r];
        if (abs(sum - target) < abs(best - target) || (abs(sum - target) == abs(best - target) && sum < best))
            best = sum;
        if (sum < target) l++;
        else if (sum > target) r--;
        else return sum;
    }
    return best;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        int target;
        cin >> target;
        cout << twoSumClosest(nums, target) << "\n";
    }
    return 0;
}`
  },  'ts-m3': {
    python: `def max_operations(nums, k):
    nums.sort()
    l, r = 0, len(nums) - 1
    count = 0
    while l < r:
        s = nums[l] + nums[r]
        if s == k:
            count += 1
            l += 1
            r -= 1
        elif s < k:
            l += 1
        else:
            r -= 1
    return count
n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(max_operations(nums, k))`,
    java: `import java.util.*;
public class Main {
    public static int maxOperations(int[] nums, int k) {
        Arrays.sort(nums);
        int l = 0, r = nums.length - 1;
        int count = 0;
        while (l < r) {
            int sum = nums[l] + nums[r];
            if (sum == k) {
                count++;
                l++;
                r--;
            } else if (sum < k) {
                l++;
            } else {
                r--;
            }
        }
        return count;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int k = sc.nextInt();
            System.out.println(maxOperations(nums, k));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}
int maxOperations(int* nums, int numsSize, int k) {
    qsort(nums, numsSize, sizeof(int), cmp);
    int l = 0, r = numsSize - 1;
    int count = 0;
    while (l < r) {
        int sum = nums[l] + nums[r];
        if (sum == k) {
            count++;
            l++;
            r--;
        } else if (sum < k) {
            l++;
        } else {
            r--;
        }
    }
    return count;
}
int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    int k;
    scanf("%d", &k);
    printf("%d\n", maxOperations(nums, n, k));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int maxOperations(vector<int>& nums, int k) {
    sort(nums.begin(), nums.end());
    int l = 0, r = nums.size() - 1;
    int count = 0;
    while (l < r) {
        int sum = nums[l] + nums[r];
        if (sum == k) {
            count++;
            l++;
            r--;
        } else if (sum < k) {
            l++;
        } else {
            r--;
        }
    }
    return count;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        int k;
        cin >> k;
        cout << maxOperations(nums, k) << "\n";
    }
    return 0;
}`
  },  'ts-m4': {
    python: `def count_good_pairs(nums):
    seen = {}
    count = 0
    for num in nums:
        count += seen.get(num, 0)
        seen[num] = seen.get(num, 0) + 1
    return count
n = int(input())
nums = list(map(int, input().split()))
print(count_good_pairs(nums))`,
    java: `import java.util.*;
public class Main {
    public static int countGoodPairs(int[] nums) {
        HashMap<Integer, Integer> map = new HashMap<>();
        int count = 0;
        for (int num : nums) {
            count += map.getOrDefault(num, 0);
            map.put(num, map.getOrDefault(num, 0) + 1);
        }
        return count;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            System.out.println(countGoodPairs(nums));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int countGoodPairs(int* nums, int numsSize) {
    int count = 0;
    for (int i = 0; i < numsSize; i++) {
        for (int j = i + 1; j < numsSize; j++) {
            if (nums[i] == nums[j]) count++;
        }
    }
    return count;
}
int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%d\n", countGoodPairs(nums, n));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
int countGoodPairs(vector<int>& nums) {
    unordered_map<int, int> mp;
    int count = 0;
    for (int num : nums) {
        count += mp[num];
        mp[num]++;
    }
    return count;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        cout << countGoodPairs(nums) << "\n";
    }
    return 0;
}`
  },  'ts-m5': {
    python: `def four_sum_count(nums1, nums2, nums3, nums4):
    mp = {}
    for a in nums1:
        for b in nums2:
            s = a + b
            mp[s] = mp.get(s, 0) + 1
    count = 0
    for c in nums3:
        for d in nums4:
            count += mp.get(-(c + d), 0)
    return count
n = int(input())
nums1 = list(map(int, input().split()))
nums2 = list(map(int, input().split()))
nums3 = list(map(int, input().split()))
nums4 = list(map(int, input().split()))
print(four_sum_count(nums1, nums2, nums3, nums4))`,
    java: `import java.util.*;
public class Main {
    public static int fourSumCount(int[] nums1, int[] nums2, int[] nums3, int[] nums4) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int a : nums1) {
            for (int b : nums2) {
                map.put(a + b, map.getOrDefault(a + b, 0) + 1);
            }
        }
        int count = 0;
        for (int c : nums3) {
            for (int d : nums4) {
                count += map.getOrDefault(-(c + d), 0);
            }
        }
        return count;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums1 = new int[n];
            int[] nums2 = new int[n];
            int[] nums3 = new int[n];
            int[] nums4 = new int[n];
            for (int i = 0; i < n; i++) nums1[i] = sc.nextInt();
            for (int i = 0; i < n; i++) nums2[i] = sc.nextInt();
            for (int i = 0; i < n; i++) nums3[i] = sc.nextInt();
            for (int i = 0; i < n; i++) nums4[i] = sc.nextInt();
            System.out.println(fourSumCount(nums1, nums2, nums3, nums4));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int fourSumCount(int* nums1, int* nums2, int* nums3, int* nums4, int n) {
    int count = 0;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            for (int k = 0; k < n; k++) {
                for (int l = 0; l < n; l++) {
                    if (nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0)
                        count++;
                }
            }
        }
    }
    return count;
}
int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums1 = (int*)malloc(n * sizeof(int));
    int* nums2 = (int*)malloc(n * sizeof(int));
    int* nums3 = (int*)malloc(n * sizeof(int));
    int* nums4 = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums1[i]);
    for (int i = 0; i < n; i++) scanf("%d", &nums2[i]);
    for (int i = 0; i < n; i++) scanf("%d", &nums3[i]);
    for (int i = 0; i < n; i++) scanf("%d", &nums4[i]);
    printf("%d\n", fourSumCount(nums1, nums2, nums3, nums4, n));
    free(nums1);
    free(nums2);
    free(nums3);
    free(nums4);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
int fourSumCount(vector<int>& nums1, vector<int>& nums2, vector<int>& nums3, vector<int>& nums4) {
    unordered_map<int, int> mp;
    for (int a : nums1) {
        for (int b : nums2) {
            mp[a + b]++;
        }
    }
    int count = 0;
    for (int c : nums3) {
        for (int d : nums4) {
            count += mp[-(c + d)];
        }
    }
    return count;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if (cin >> n) {
        vector<int> nums1(n), nums2(n), nums3(n), nums4(n);
        for (int i = 0; i < n; i++) cin >> nums1[i];
        for (int i = 0; i < n; i++) cin >> nums2[i];
        for (int i = 0; i < n; i++) cin >> nums3[i];
        for (int i = 0; i < n; i++) cin >> nums4[i];
        cout << fourSumCount(nums1, nums2, nums3, nums4) << "\n";
    }
    return 0;
}`
  },  'ts-h1': {
    python: `def three_sum(nums):
    nums.sort()
    ans = []
    n = len(nums)
    for i in range(n - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        l, r = i + 1, n - 1
        while l < r:
            s = nums[i] + nums[l] + nums[r]
            if s == 0:
                ans.append([nums[i], nums[l], nums[r]])
                l += 1
                r -= 1
                while l < r and nums[l] == nums[l - 1]:
                    l += 1
                while l < r and nums[r] == nums[r + 1]:
                    r -= 1
            elif s < 0:
                l += 1
            else:
                r -= 1
    return ans
n = int(input())
nums = list(map(int, input().split()))
print(three_sum(nums))`,
    java: `import java.util.*;
public class Main {
    public static List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> ans = new ArrayList<>();
        for (int i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            int l = i + 1, r = nums.length - 1;
            while (l < r) {
                int sum = nums[i] + nums[l] + nums[r];
                if (sum == 0) {
                    ans.add(Arrays.asList(nums[i], nums[l], nums[r]));
                    l++;
                    r--;
                    while (l < r && nums[l] == nums[l - 1]) l++;
                    while (l < r && nums[r] == nums[r + 1]) r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    r--;
                }
            }
        }
        return ans;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            System.out.println(threeSum(nums));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}
void threeSum(int* nums, int n) {
    qsort(nums, n, sizeof(int), cmp);
    printf("[");
    int first = 1;
    for (int i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        int l = i + 1, r = n - 1;
        while (l < r) {
            int sum = nums[i] + nums[l] + nums[r];
            if (sum == 0) {
                if (!first) printf(",");
                printf("[%d,%d,%d]", nums[i], nums[l], nums[r]);
                first = 0;
                l++;
                r--;
                while (l < r && nums[l] == nums[l - 1]) l++;
                while (l < r && nums[r] == nums[r + 1]) r--;
            } else if (sum < 0) {
                l++;
            } else {
                r--;
            }
        }
    }
    printf("]\n");
}
int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    threeSum(nums, n);
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
vector<vector<int>> threeSum(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    vector<vector<int>> ans;
    for (int i = 0; i < nums.size() - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        int l = i + 1, r = nums.size() - 1;
        while (l < r) {
            int sum = nums[i] + nums[l] + nums[r];
            if (sum == 0) {
                ans.push_back({nums[i], nums[l], nums[r]});
                l++;
                r--;
                while (l < r && nums[l] == nums[l - 1]) l++;
                while (l < r && nums[r] == nums[r + 1]) r--;
            } else if (sum < 0) {
                l++;
            } else {
                r--;
            }
        }
    }
    return ans;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        auto ans = threeSum(nums);
        cout << "[";
        for (int i = 0; i < ans.size(); i++) {
            if (i) cout << ",";
            cout << "[" << ans[i][0] << "," << ans[i][1] << "," << ans[i][2] << "]";
        }
        cout << "]\n";
    }
    return 0;
}`
  },  'ts-h2': {
    python: `def four_sum(nums, target):
    nums.sort()
    ans = []
    n = len(nums)
    for i in range(n - 3):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        for j in range(i + 1, n - 2):
            if j > i + 1 and nums[j] == nums[j - 1]:
                continue
            l, r = j + 1, n - 1
            while l < r:
                s = nums[i] + nums[j] + nums[l] + nums[r]
                if s == target:
                    ans.append([nums[i], nums[j], nums[l], nums[r]])
                    l += 1
                    r -= 1
                    while l < r and nums[l] == nums[l - 1]:
                        l += 1
                    while l < r and nums[r] == nums[r + 1]:
                        r -= 1
                elif s < target:
                    l += 1
                else:
                    r -= 1
    return ans

n = int(input())
nums = list(map(int, input().split()))
target = int(input())
print(four_sum(nums, target))`,
    java: `import java.util.*;
public class Main {
    public static List<List<Integer>> fourSum(int[] nums, int target) {
        Arrays.sort(nums);
        List<List<Integer>> ans = new ArrayList<>();
        int n = nums.length;
        for (int i = 0; i < n - 3; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            for (int j = i + 1; j < n - 2; j++) {
                if (j > i + 1 && nums[j] == nums[j - 1]) continue;
                int l = j + 1, r = n - 1;
                while (l < r) {
                    long sum = (long)nums[i] + nums[j] + nums[l] + nums[r];
                    if (sum == target) {
                        ans.add(Arrays.asList(nums[i], nums[j], nums[l], nums[r]));
                        l++;
                        r--;
                        while (l < r && nums[l] == nums[l - 1]) l++;
                        while (l < r && nums[r] == nums[r + 1]) r--;
                    } else if (sum < target) {
                        l++;
                    } else {
                        r--;
                    }
                }
            }
        }
        return ans;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int target = sc.nextInt();
            System.out.println(fourSum(nums, target));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}
void fourSum(int* nums, int n, int target) {
    qsort(nums, n, sizeof(int), cmp);
    printf("[");
    int first = 1;
    for (int i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        for (int j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) continue;
            int l = j + 1, r = n - 1;
            while (l < r) {
                int sum = nums[i] + nums[j] + nums[l] + nums[r];
                if (sum == target) {
                    if (!first) printf(",");
                    printf("[%d,%d,%d,%d]", nums[i], nums[j], nums[l], nums[r]);
                    first = 0;
                    l++;
                    r--;
                    while (l < r && nums[l] == nums[l - 1]) l++;
                    while (l < r && nums[r] == nums[r + 1]) r--;
                } else if (sum < target) {
                    l++;
                } else {
                    r--;
                }
            }
        }
    }
    printf("]\n");
}
int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    int target;
    scanf("%d", &target);
    fourSum(nums, n, target);
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
vector<vector<int>> fourSum(vector<int>& nums, int target) {
    sort(nums.begin(), nums.end());
    vector<vector<int>> ans;
    int n = nums.size();
    for (int i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        for (int j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) continue;
            int l = j + 1, r = n - 1;
            while (l < r) {
                long long sum = 1LL * nums[i] + nums[j] + nums[l] + nums[r];
                if (sum == target) {
                    ans.push_back({nums[i], nums[j], nums[l], nums[r]});
                    l++;
                    r--;
                    while (l < r && nums[l] == nums[l - 1]) l++;
                    while (l < r && nums[r] == nums[r + 1]) r--;
                } else if (sum < target) {
                    l++;
                } else {
                    r--;
                }
            }
        }
    }
    return ans;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        int target;
        cin >> target;
        auto ans = fourSum(nums, target);
        cout << "[";
        for (int i = 0; i < ans.size(); i++) {
            if (i) cout << ",";
            cout << "[" << ans[i][0] << "," << ans[i][1] << "," << ans[i][2] << "," << ans[i][3] << "]";
        }
        cout << "]\n";
    }
    return 0;
}`
  },  'ts-h3': {
    python: `def subarray_sum(nums, k):
    count = 0
    prefix = 0
    mp = {0: 1}
    for num in nums:
        prefix += num
        count += mp.get(prefix - k, 0)
        mp[prefix] = mp.get(prefix, 0) + 1
    return count
n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(subarray_sum(nums, k))`,
    java: `import java.util.*;
public class Main {
    public static int subarraySum(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(0, 1);
        int prefix = 0, count = 0;
        for (int num : nums) {
            prefix += num;
            count += map.getOrDefault(prefix - k, 0);
            map.put(prefix, map.getOrDefault(prefix, 0) + 1);
        }
        return count;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int k = sc.nextInt();
            System.out.println(subarraySum(nums, k));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int subarraySum(int* nums, int n, int k) {
    int count = 0;
    for (int i = 0; i < n; i++) {
        int sum = 0;
        for (int j = i; j < n; j++) {
            sum += nums[j];
            if (sum == k) count++;
        }
    }
    return count;
}
int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    int k;
    scanf("%d", &k);
    printf("%d\n", subarraySum(nums, n, k));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
int subarraySum(vector<int>& nums, int k) {
    unordered_map<int, int> mp;
    mp[0] = 1;
    int prefix = 0, count = 0;
    for (int num : nums) {
        prefix += num;
        count += mp[prefix - k];
        mp[prefix]++;
    }
    return count;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        int k;
        cin >> k;
        cout << subarraySum(nums, k) << "\n";
    }
    return 0;
}`
  },  'ts-h4': {
    python: `def check_subarray_sum(nums, k):
    mp = {0: -1}
    prefix = 0
    for i, num in enumerate(nums):
        prefix += num
        rem = prefix if k == 0 else prefix % k
        if rem in mp:
            if i - mp[rem] > 1:
                return True
        else:
            mp[rem] = i
    return False
n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(str(check_subarray_sum(nums, k)).lower())`,
    java: `import java.util.*;
public class Main {
    public static boolean checkSubarraySum(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(0, -1);
        int prefix = 0;
        for (int i = 0; i < nums.length; i++) {
            prefix += nums[i];
            int rem = k == 0 ? prefix : prefix % k;
            if (map.containsKey(rem)) {
                if (i - map.get(rem) > 1) return true;
            } else {
                map.put(rem, i);
            }
        }
        return false;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int k = sc.nextInt();
            System.out.println(checkSubarraySum(nums, k));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int checkSubarraySum(int* nums, int n, int k) {
    for (int i = 0; i < n; i++) {
        int sum = nums[i];
        for (int j = i + 1; j < n; j++) {
            sum += nums[j];
            if ((k == 0 && sum == 0) || (k != 0 && sum % k == 0))
                return 1;
        }
    }
    return 0;
}
int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    int k;
    scanf("%d", &k);
    printf(checkSubarraySum(nums, n, k) ? "true\n" : "false\n");
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
bool checkSubarraySum(vector<int>& nums, int k) {
    unordered_map<int, int> mp;
    mp[0] = -1;
    int prefix = 0;
    for (int i = 0; i < nums.size(); i++) {
        prefix += nums[i];
        int rem = k == 0 ? prefix : prefix % k;
        if (mp.count(rem)) {
            if (i - mp[rem] > 1) return true;
        } else {
            mp[rem] = i;
        }
    }
    return false;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        int k;
        cin >> k;
        cout << (checkSubarraySum(nums, k) ? "true" : "false") << "\n";
    }
    return 0;
}`
  },  'ts-h5': {
    python: `def longest_consecutive(nums):
    s = set(nums)
    longest = 0
    for num in s:
        if num - 1 not in s:
            length = 1
            while num + length in s:
                length += 1
            longest = max(longest, length)
    return longest
n = int(input())
nums = list(map(int, input().split()))
print(longest_consecutive(nums))`,
    java: `import java.util.*;
public class Main {
    public static int longestConsecutive(int[] nums) {
        HashSet<Integer> set = new HashSet<>();
        for (int num : nums) set.add(num);
        int longest = 0;
        for (int num : set) {
            if (!set.contains(num - 1)) {
                int length = 1;
                while (set.contains(num + length)) length++;
                longest = Math.max(longest, length);
            }
        }
        return longest;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            System.out.println(longestConsecutive(nums));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}
int longestConsecutive(int* nums, int n) {
    if (n == 0) return 0;
    qsort(nums, n, sizeof(int), cmp);
    int longest = 1, current = 1;
    for (int i = 1; i < n; i++) {
        if (nums[i] == nums[i - 1]) continue;
        if (nums[i] == nums[i - 1] + 1) {
            current++;
        } else {
            if (current > longest) longest = current;
            current = 1;
        }
    }
    if (current > longest) longest = current;
    return longest;
}
int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%d\n", longestConsecutive(nums, n));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
#include <algorithm>
using namespace std;
int longestConsecutive(vector<int>& nums) {
    unordered_set<int> st(nums.begin(), nums.end());
    int longest = 0;
    for (int num : st) {
        if (!st.count(num - 1)) {
            int length = 1;
            while (st.count(num + length)) length++;
            longest = max(longest, length);
        }
    }
    return longest;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        cout << longestConsecutive(nums) << "\n";
    }
    return 0;
}`
  }
};

