export const binarySearchSolutions = {
  'bs-e1': {
    python: `def binary_search(nums, target):
    l, r = 0, len(nums) - 1
    while l <= r:
        mid = (l + r) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            l = mid + 1
        else:
            r = mid - 1
    return -1

n = int(input())
nums = list(map(int, input().split()))
target = int(input())
print(binary_search(nums, target))`,
    java: `import java.util.*;

public class Solution {
    public static int binarySearch(int[] nums, int target) {
        int l = 0, r = nums.length - 1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] == target) return mid;
            if (nums[mid] < target) l = mid + 1;
            else r = mid - 1;
        }
        return -1;
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
            System.out.println(binarySearch(nums, target));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int binarySearch(int* nums, int numsSize, int target) {
    int l = 0, r = numsSize - 1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (nums[mid] == target) return mid;
        if (nums[mid] < target) l = mid + 1;
        else r = mid - 1;
    }
    return -1;
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
    printf("%d\\n", binarySearch(nums, n, target));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int binarySearch(vector<int>& nums, int target) {
    int l = 0, r = nums.size() - 1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (nums[mid] == target) return mid;
        if (nums[mid] < target) l = mid + 1;
        else r = mid - 1;
    }
    return -1;
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
        cout << binarySearch(nums, target) << "\\n";
    }
    return 0;
}`
  },
  'bs-e2': {
    python: `def first_position(nums, target):
    l, r = 0, len(nums) - 1
    ans = -1
    while l <= r:
        mid = (l + r) // 2
        if nums[mid] == target:
            ans = mid
            r = mid - 1
        elif nums[mid] < target:
            l = mid + 1
        else:
            r = mid - 1
    return ans

n = int(input())
nums = list(map(int, input().split()))
target = int(input())
print(first_position(nums, target))`,
    java: `import java.util.*;

public class Solution {
    public static int firstPosition(int[] nums, int target) {
        int l = 0, r = nums.length - 1;
        int ans = -1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] == target) {
                ans = mid;
                r = mid - 1;
            } else if (nums[mid] < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return ans;
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
            System.out.println(firstPosition(nums, target));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int firstPosition(int* nums, int numsSize, int target) {
    int l = 0, r = numsSize - 1;
    int ans = -1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (nums[mid] == target) {
            ans = mid;
            r = mid - 1;
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int target;
    if (scanf("%d", &target) != 1) return 0;
    printf("%d\\n", firstPosition(nums, n, target));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int firstPosition(vector<int>& nums, int target) {
    int l = 0, r = nums.size() - 1;
    int ans = -1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (nums[mid] == target) {
            ans = mid;
            r = mid - 1;
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return ans;
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
        cout << firstPosition(nums, target) << "\\n";
    }
    return 0;
}`
  },
  'bs-e3': {
    python: `def last_position(nums, target):
    l, r = 0, len(nums) - 1
    ans = -1
    while l <= r:
        mid = (l + r) // 2
        if nums[mid] == target:
            ans = mid
            l = mid + 1
        elif nums[mid] < target:
            l = mid + 1
        else:
            r = mid - 1
    return ans

n = int(input())
nums = list(map(int, input().split()))
target = int(input())
print(last_position(nums, target))`,
    java: `import java.util.*;

public class Solution {
    public static int lastPosition(int[] nums, int target) {
        int l = 0, r = nums.length - 1;
        int ans = -1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] == target) {
                ans = mid;
                l = mid + 1;
            } else if (nums[mid] < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return ans;
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
            System.out.println(lastPosition(nums, target));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int lastPosition(int* nums, int numsSize, int target) {
    int l = 0, r = numsSize - 1;
    int ans = -1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (nums[mid] == target) {
            ans = mid;
            l = mid + 1;
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return ans;
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
    printf("%d\\n", lastPosition(nums, n, target));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int lastPosition(vector<int>& nums, int target) {
    int l = 0, r = nums.size() - 1;
    int ans = -1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (nums[mid] == target) {
            ans = mid;
            l = mid + 1;
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return ans;
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
        cout << lastPosition(nums, target) << "\\n";
    }
    return 0;
}`
  },
  'bs-e4': {
    python: `def integer_sqrt(x):
    l, r = 0, x
    ans = 0
    while l <= r:
        mid = (l + r) // 2
        if mid * mid <= x:
            ans = mid
            l = mid + 1
        else:
            r = mid - 1
    return ans

x = int(input())
print(integer_sqrt(x))`,
    java: `import java.util.*;

public class Solution {
    public static int integerSqrt(int x) {
        int l = 0, r = x, ans = 0;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if ((long)mid * mid <= x) {
                ans = mid;
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int x = sc.nextInt();
            System.out.println(integerSqrt(x));
        }
    }
}`,
    c: `#include <stdio.h>

int integerSqrt(int x) {
    int l = 0, r = x, ans = 0;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if ((long long)mid * mid <= x) {
            ans = mid;
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return ans;
}

int main() {
    int x;
    if (scanf("%d", &x) == 1) {
        printf("%d\\n", integerSqrt(x));
    }
    return 0;
}`,
    cpp: `#include <iostream>

using namespace std;

int integerSqrt(int x) {
    int l = 0, r = x, ans = 0;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if ((long long)mid * mid <= x) {
            ans = mid;
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return ans;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int x;
    if (cin >> x) {
        cout << integerSqrt(x) << "\\n";
    }
    return 0;
}`
  },
  'bs-e5': {
    python: `def count_occurrences(nums, target):
    def find_first():
        l, r = 0, len(nums) - 1
        ans = -1
        while l <= r:
            mid = (l + r) // 2
            if nums[mid] == target:
                ans, r = mid, mid - 1
            elif nums[mid] < target:
                l = mid + 1
            else:
                r = mid - 1
        return ans
    def find_last():
        l, r = 0, len(nums) - 1
        ans = -1
        while l <= r:
            mid = (l + r) // 2
            if nums[mid] == target:
                ans, l = mid, mid + 1
            elif nums[mid] < target:
                l = mid + 1
            else:
                r = mid - 1
        return ans
    first, last = find_first(), find_last()
    return last - first + 1 if first != -1 else 0

n = int(input())
nums = list(map(int, input().split()))
target = int(input())
print(count_occurrences(nums, target))`,
    java: `import java.util.*;

public class Solution {
    private static int findFirst(int[] nums, int target) {
        int l = 0, r = nums.length - 1, ans = -1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] == target) {
                ans = mid;
                r = mid - 1;
            } else if (nums[mid] < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return ans;
    }

    private static int findLast(int[] nums, int target) {
        int l = 0, r = nums.length - 1, ans = -1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] == target) {
                ans = mid;
                l = mid + 1;
            } else if (nums[mid] < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return ans;
    }

    public static int countOccurrences(int[] nums, int target) {
        int first = findFirst(nums, target);
        if (first == -1) return 0;
        int last = findLast(nums, target);
        return last - first + 1;
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
            System.out.println(countOccurrences(nums, target));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int findFirst(int* nums, int numsSize, int target) {
    int l = 0, r = numsSize - 1, ans = -1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (nums[mid] == target) {
            ans = mid;
            r = mid - 1;
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return ans;
}

int findLast(int* nums, int numsSize, int target) {
    int l = 0, r = numsSize - 1, ans = -1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (nums[mid] == target) {
            ans = mid;
            l = mid + 1;
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return ans;
}

int countOccurrences(int* nums, int numsSize, int target) {
    int first = findFirst(nums, numsSize, target);
    if (first == -1) return 0;
    int last = findLast(nums, numsSize, target);
    return last - first + 1;
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
    printf("%d\\n", countOccurrences(nums, n, target));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int findFirst(vector<int>& nums, int target) {
    int l = 0, r = nums.size() - 1, ans = -1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (nums[mid] == target) {
            ans = mid;
            r = mid - 1;
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return ans;
}

int findLast(vector<int>& nums, int target) {
    int l = 0, r = nums.size() - 1, ans = -1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (nums[mid] == target) {
            ans = mid;
            l = mid + 1;
        } else if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return ans;
}

int countOccurrences(vector<int>& nums, int target) {
    int first = findFirst(nums, target);
    if (first == -1) return 0;
    int last = findLast(nums, target);
    return last - first + 1;
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
        cout << countOccurrences(nums, target) << "\\n";
    }
    return 0;
}`
  },
  'bs-m1': {
    python: `def search_rotated(nums, target):
    l, r = 0, len(nums) - 1
    while l <= r:
        mid = (l + r) // 2
        if nums[mid] == target:
            return mid
        if nums[l] <= nums[mid]:
            if nums[l] <= target < nums[mid]:
                r = mid - 1
            else:
                l = mid + 1
        else:
            if nums[mid] < target <= nums[r]:
                l = mid + 1
            else:
                r = mid - 1
    return -1

n = int(input())
nums = list(map(int, input().split()))
target = int(input())
print(search_rotated(nums, target))`,
    java: `import java.util.*;

public class Solution {
    public static int searchRotated(int[] nums, int target) {
        int l = 0, r = nums.length - 1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] == target) return mid;
            if (nums[l] <= nums[mid]) {
                if (nums[l] <= target && target < nums[mid]) r = mid - 1;
                else l = mid + 1;
            } else {
                if (nums[mid] < target && target <= nums[r]) l = mid + 1;
                else r = mid - 1;
            }
        }
        return -1;
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
            System.out.println(searchRotated(nums, target));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int searchRotated(int* nums, int numsSize, int target) {
    int l = 0, r = numsSize - 1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (nums[mid] == target) return mid;
        if (nums[l] <= nums[mid]) {
            if (nums[l] <= target && target < nums[mid]) r = mid - 1;
            else l = mid + 1;
        } else {
            if (nums[mid] < target && target <= nums[r]) l = mid + 1;
            else r = mid - 1;
        }
    }
    return -1;
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
    printf("%d\\n", searchRotated(nums, n, target));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int searchRotated(vector<int>& nums, int target) {
    int l = 0, r = nums.size() - 1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (nums[mid] == target) return mid;
        if (nums[l] <= nums[mid]) {
            if (nums[l] <= target && target < nums[mid]) r = mid - 1;
            else l = mid + 1;
        } else {
            if (nums[mid] < target && target <= nums[r]) l = mid + 1;
            else r = mid - 1;
        }
    }
    return -1;
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
        cout << searchRotated(nums, target) << "\\n";
    }
    return 0;
}`
  },
  'bs-m2': {
    python: `def find_minimum(nums):
    l, r = 0, len(nums) - 1
    while l < r:
        mid = (l + r) // 2
        if nums[mid] > nums[r]:
            l = mid + 1
        else:
            r = mid
    return nums[l]

n = int(input())
nums = list(map(int, input().split()))
print(find_minimum(nums))`,
    java: `import java.util.*;

public class Solution {
    public static int findMinimum(int[] nums) {
        int l = 0, r = nums.length - 1;
        while (l < r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] > nums[r]) l = mid + 1;
            else r = mid;
        }
        return nums[l];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            System.out.println(findMinimum(nums));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int findMinimum(int* nums, int numsSize) {
    int l = 0, r = numsSize - 1;
    while (l < r) {
        int mid = l + (r - l) / 2;
        if (nums[mid] > nums[r]) l = mid + 1;
        else r = mid;
    }
    return nums[l];
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    printf("%d\\n", findMinimum(nums, n));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int findMinimum(vector<int>& nums) {
    int l = 0, r = nums.size() - 1;
    while (l < r) {
        int mid = l + (r - l) / 2;
        if (nums[mid] > nums[r]) l = mid + 1;
        else r = mid;
    }
    return nums[l];
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
        cout << findMinimum(nums) << "\\n";
    }
    return 0;
}`
  },
  'bs-m3': {
    python: `def search_matrix(matrix, target):
    if not matrix or not matrix[0]: return False
    m, n = len(matrix), len(matrix[0])
    l, r = 0, m * n - 1
    while l <= r:
        mid = (l + r) // 2
        val = matrix[mid // n][mid % n]
        if val == target:
            return True
        elif val < target:
            l = mid + 1
        else:
            r = mid - 1
    return False

m, n = map(int, input().split())
matrix = [list(map(int, input().split())) for _ in range(m)]
target = int(input())
print(str(search_matrix(matrix, target)).lower())`,
    java: `import java.util.*;

public class Solution {
    public static boolean searchMatrix(int[][] matrix, int target) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) return false;
        int m = matrix.length, n = matrix[0].length;
        int l = 0, r = m * n - 1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            int val = matrix[mid / n][mid % n];
            if (val == target) return true;
            if (val < target) l = mid + 1;
            else r = mid - 1;
        }
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt();
            int n = sc.nextInt();
            int[][] matrix = new int[m][n];
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) {
                    matrix[i][j] = sc.nextInt();
                }
            }
            int target = sc.nextInt();
            System.out.println(searchMatrix(matrix, target));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool searchMatrix(int** matrix, int matrixSize, int matrixColSize, int target) {
    if (matrixSize == 0 || matrixColSize == 0) return false;
    int l = 0, r = matrixSize * matrixColSize - 1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        int val = matrix[mid / matrixColSize][mid % matrixColSize];
        if (val == target) return true;
        if (val < target) l = mid + 1;
        else r = mid - 1;
    }
    return false;
}

int main() {
    int m, n;
    if (scanf("%d %d", &m, &n) != 2) return 0;
    int** matrix = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        matrix[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) {
            if (scanf("%d", &matrix[i][j]) != 1) return 0;
        }
    }
    int target;
    if (scanf("%d", &target) != 1) return 0;
    printf("%s\\n", searchMatrix(matrix, m, n, target) ? "true" : "false");
    for (int i = 0; i < m; i++) free(matrix[i]);
    free(matrix);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

bool searchMatrix(vector<vector<int>>& matrix, int target) {
    if (matrix.empty() || matrix[0].empty()) return false;
    int m = matrix.size(), n = matrix[0].size();
    int l = 0, r = m * n - 1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        int val = matrix[mid / n][mid % n];
        if (val == target) return true;
        if (val < target) l = mid + 1;
        else r = mid - 1;
    }
    return false;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int m, n;
    if (cin >> m >> n) {
        vector<vector<int>> matrix(m, vector<int>(n));
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                cin >> matrix[i][j];
            }
        }
        int target;
        cin >> target;
        cout << (searchMatrix(matrix, target) ? "true" : "false") << "\\n";
    }
    return 0;
}`
  },
  'bs-m4': {
    python: `def min_eating_speed(piles, h):
    def can_eat(speed):
        return sum((p + speed - 1) // speed for p in piles) <= h
    l, r = 1, max(piles)
    ans = r
    while l <= r:
        mid = (l + r) // 2
        if can_eat(mid):
            ans = mid
            r = mid - 1
        else:
            l = mid + 1
    return ans

n = int(input())
piles = list(map(int, input().split()))
h = int(input())
print(min_eating_speed(piles, h))`,
    java: `import java.util.*;

public class Solution {
    private static boolean canEat(int[] piles, int speed, int h) {
        long hours = 0;
        for (int p : piles) {
            hours += (p + speed - 1) / speed;
        }
        return hours <= h;
    }

    public static int minEatingSpeed(int[] piles, int h) {
        int l = 1, r = 0;
        for (int p : piles) {
            if (p > r) r = p;
        }
        int ans = r;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (canEat(piles, mid, h)) {
                ans = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] piles = new int[n];
            for (int i = 0; i < n; i++) {
                piles[i] = sc.nextInt();
            }
            int h = sc.nextInt();
            System.out.println(minEatingSpeed(piles, h));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool canEat(int* piles, int pilesSize, int speed, int h) {
    long long hours = 0;
    for (int i = 0; i < pilesSize; i++) {
        hours += (piles[i] + speed - 1) / speed;
    }
    return hours <= h;
}

int minEatingSpeed(int* piles, int pilesSize, int h) {
    int l = 1, r = 0;
    for (int i = 0; i < pilesSize; i++) {
        if (piles[i] > r) r = piles[i];
    }
    int ans = r;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (canEat(piles, pilesSize, mid, h)) {
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* piles = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &piles[i]) != 1) return 0;
    }
    int h;
    if (scanf("%d", &target) != 1) return 0; // matching standard 'h' parsing logic
    printf("%d\\n", minEatingSpeed(piles, n, h));
    free(piles);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool canEat(vector<int>& piles, int speed, int h) {
    long long hours = 0;
    for (int p : piles) {
        hours += (p + speed - 1) / speed;
    }
    return hours <= h;
}

int minEatingSpeed(vector<int>& piles, int h) {
    int l = 1, r = *max_element(piles.begin(), piles.end());
    int ans = r;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (canEat(piles, mid, h)) {
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return ans;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> piles(n);
        for (int i = 0; i < n; i++) {
            cin >> piles[i];
        }
        int h;
        cin >> h;
        cout << minEatingSpeed(piles, h) << "\\n";
    }
    return 0;
}`
  },
  'bs-m5': {
    python: `def find_peak(nums):
    l, r = 0, len(nums) - 1
    while l < r:
        mid = (l + r) // 2
        if nums[mid] > nums[mid + 1]:
            r = mid
        else:
            l = mid + 1
    return l

n = int(input())
nums = list(map(int, input().split()))
print(find_peak(nums))`,
    java: `import java.util.*;

public class Solution {
    public static int findPeak(int[] nums) {
        int l = 0, r = nums.length - 1;
        while (l < r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] > nums[mid + 1]) r = mid;
            else l = mid + 1;
        }
        return l;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            System.out.println(findPeak(nums));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int findPeak(int* nums, int numsSize) {
    int l = 0, r = numsSize - 1;
    while (l < r) {
        int mid = l + (r - l) / 2;
        if (nums[mid] > nums[mid + 1]) r = mid;
        else l = mid + 1;
    }
    return l;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    printf("%d\\n", findPeak(nums, n));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int findPeak(vector<int>& nums) {
    int l = 0, r = nums.size() - 1;
    while (l < r) {
        int mid = l + (r - l) / 2;
        if (nums[mid] > nums[mid + 1]) r = mid;
        else l = mid + 1;
    }
    return l;
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
        cout << findPeak(nums) << "\\n";
    }
    return 0;
}`
  },
  'bs-h1': {
    python: `def find_median(nums1, nums2):
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1
    m, n = len(nums1), len(nums2)
    l, r = 0, m
    while l <= r:
        part1 = (l + r) // 2
        part2 = (m + n + 1) // 2 - part1
        max_l1 = float('-inf') if part1 == 0 else nums1[part1 - 1]
        min_r1 = float('inf') if part1 == m else nums1[part1]
        max_l2 = float('-inf') if part2 == 0 else nums2[part2 - 1]
        min_r2 = float('inf') if part2 == n else nums2[part2]
        
        if max_l1 <= min_r2 and max_l2 <= min_r1:
            if (m + n) % 2 == 0:
                return (max(max_l1, max_l2) + min(min_r1, min_r2)) / 2
            else:
                return float(max(max_l1, max_l2))
        elif max_l1 > min_r2:
            r = part1 - 1
        else:
            l = part1 + 1

m = int(input())
nums1 = list(map(int, input().split())) if m > 0 else []
n = int(input())
nums2 = list(map(int, input().split())) if n > 0 else []
res = find_median(nums1, nums2)
print(f"{float(res):.5f}")`,
    java: `import java.util.*;

public class Solution {
    public static double findMedian(int[] nums1, int[] nums2) {
        if (nums1.length > nums2.length) return findMedian(nums2, nums1);
        int m = nums1.length, n = nums2.length;
        int l = 0, r = m;
        while (l <= r) {
            int part1 = l + (r - l) / 2;
            int part2 = (m + n + 1) / 2 - part1;
            
            int maxL1 = (part1 == 0) ? Integer.MIN_VALUE : nums1[part1 - 1];
            int minR1 = (part1 == m) ? Integer.MAX_VALUE : nums1[part1];
            
            int maxL2 = (part2 == 0) ? Integer.MIN_VALUE : nums2[part2 - 1];
            int minR2 = (part2 == n) ? Integer.MAX_VALUE : nums2[part2];
            
            if (maxL1 <= minR2 && maxL2 <= minR1) {
                if ((m + n) % 2 == 0) {
                    return ((double)Math.max(maxL1, maxL2) + Math.min(minR1, minR2)) / 2.0;
                } else {
                    return (double)Math.max(maxL1, maxL2);
                }
            } else if (maxL1 > minR2) {
                r = part1 - 1;
            } else {
                l = part1 + 1;
            }
        }
        return 0.0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt();
            int[] nums1 = new int[m];
            for (int i = 0; i < m; i++) {
                nums1[i] = sc.nextInt();
            }
            int n = sc.nextInt();
            int[] nums2 = new int[n];
            for (int i = 0; i < n; i++) {
                nums2[i] = sc.nextInt();
            }
            System.out.printf(Locale.US, "%.5f\\n", findMedian(nums1, nums2));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define MIN(a, b) ((a) < (b) ? (a) : (b))

double findMedian(int* nums1, int nums1Size, int* nums2, int nums2Size) {
    if (nums1Size > nums2Size) return findMedian(nums2, nums2Size, nums1, nums1Size);
    int m = nums1Size, n = nums2Size;
    int l = 0, r = m;
    while (l <= r) {
        int part1 = l + (r - l) / 2;
        int part2 = (m + n + 1) / 2 - part1;
        int maxL1 = (part1 == 0) ? INT_MIN : nums1[part1 - 1];
        int minR1 = (part1 == m) ? INT_MAX : nums1[part1];
        int maxL2 = (part2 == 0) ? INT_MIN : nums2[part2 - 1];
        int minR2 = (part2 == n) ? INT_MAX : nums2[part2];
        if (maxL1 <= minR2 && maxL2 <= minR1) {
            if ((m + n) % 2 == 0) {
                return ((double)MAX(maxL1, maxL2) + MIN(minR1, minR2)) / 2.0;
            } else {
                return (double)MAX(maxL1, maxL2);
            }
        } else if (maxL1 > minR2) {
            r = part1 - 1;
        } else {
            l = part1 + 1;
        }
    }
    return 0.0;
}

int main() {
    int m;
    if (scanf("%d", &m) != 1) return 0;
    int* nums1 = (int*)malloc(m * sizeof(int));
    for (int i = 0; i < m; i++) {
        if (scanf("%d", &nums1[i]) != 1) return 0;
    }
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums2 = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums2[i]) != 1) return 0;
    }
    printf("%.5f\\n", findMedian(nums1, m, nums2, n));
    free(nums1);
    free(nums2);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <iomanip>
#include <climits>

using namespace std;

double findMedian(vector<int>& nums1, vector<int>& nums2) {
    if (nums1.size() > nums2.size()) return findMedian(nums2, nums1);
    int m = nums1.size(), n = nums2.size();
    int l = 0, r = m;
    while (l <= r) {
        int part1 = l + (r - l) / 2;
        int part2 = (m + n + 1) / 2 - part1;
        int maxL1 = (part1 == 0) ? INT_MIN : nums1[part1 - 1];
        int minR1 = (part1 == m) ? INT_MAX : nums1[part1];
        int maxL2 = (part2 == 0) ? INT_MIN : nums2[part2 - 1];
        int minR2 = (part2 == n) ? INT_MAX : nums2[part2];
        if (maxL1 <= minR2 && maxL2 <= minR1) {
            if ((m + n) % 2 == 0) {
                return ((double)max(maxL1, maxL2) + min(minR1, minR2)) / 2.0;
            } else {
                return (double)max(maxL1, maxL2);
            }
        } else if (maxL1 > minR2) {
            r = part1 - 1;
        } else {
            l = part1 + 1;
        }
    }
    return 0.0;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int m;
    if (cin >> m) {
        vector<int> nums1(m);
        for (int i = 0; i < m; i++) {
            cin >> nums1[i];
        }
        int n;
        cin >> n;
        vector<int> nums2(n);
        for (int i = 0; i < n; i++) {
            cin >> nums2[i];
        }
        cout << fixed << setprecision(5) << findMedian(nums1, nums2) << "\\n";
    }
    return 0;
}`
  },
  'bs-h2': {
    python: `def split_array(nums, k):
    def can_split(mx):
        count, cur_sum = 1, 0
        for num in nums:
            if cur_sum + num > mx:
                count += 1
                cur_sum = num
            else:
                cur_sum += num
        return count <= k
    l, r = max(nums), sum(nums)
    ans = r
    while l <= r:
        mid = (l + r) // 2
        if can_split(mid):
            ans = mid
            r = mid - 1
        else:
            l = mid + 1
    return ans

n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(split_array(nums, k))`,
    java: `import java.util.*;

public class Solution {
    private static boolean canSplit(int[] nums, int mx, int k) {
        int count = 1, curSum = 0;
        for (int num : nums) {
            if (curSum + num > mx) {
                count++;
                curSum = num;
            } else {
                curSum += num;
            }
        }
        return count <= k;
    }

    public static int splitArray(int[] nums, int k) {
        int l = 0, r = 0;
        for (int num : nums) {
            if (num > l) l = num;
            r += num;
        }
        int ans = r;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (canSplit(nums, mid, k)) {
                ans = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            int k = sc.nextInt();
            System.out.println(splitArray(nums, k));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool canSplit(int* nums, int numsSize, int mx, int k) {
    int count = 1, curSum = 0;
    for (int i = 0; i < numsSize; i++) {
        if (curSum + nums[i] > mx) {
            count++;
            curSum = nums[i];
        } else {
            curSum += nums[i];
        }
    }
    return count <= k;
}

int splitArray(int* nums, int numsSize, int k) {
    int l = 0, r = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] > l) l = nums[i];
        r += nums[i];
    }
    int ans = r;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (canSplit(nums, numsSize, mid, k)) {
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int k;
    if (scanf("%d", &k) != 1) return 0;
    printf("%d\\n", splitArray(nums, n, k));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <numeric>
#include <algorithm>

using namespace std;

bool canSplit(vector<int>& nums, int mx, int k) {
    int count = 1, curSum = 0;
    for (int num : nums) {
        if (curSum + num > mx) {
            count++;
            curSum = num;
        } else {
            curSum += num;
        }
    }
    return count <= k;
}

int splitArray(vector<int>& nums, int k) {
    int l = *max_element(nums.begin(), nums.end());
    int r = accumulate(nums.begin(), nums.end(), 0);
    int ans = r;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (canSplit(nums, mid, k)) {
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return ans;
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
        int k;
        cin >> k;
        cout << splitArray(nums, k) << "\\n";
    }
    return 0;
}`
  },
  'bs-h3': {
    python: `def find_in_mountain(arr, target):
    def find_peak():
        l, r = 0, len(arr) - 1
        while l < r:
            mid = (l + r) // 2
            if arr[mid] < arr[mid + 1]: l = mid + 1
            else: r = mid
        return l
    peak = find_peak()
    def binary_search(l, r, asc):
        while l <= r:
            mid = (l + r) // 2
            if arr[mid] == target: return mid
            if (arr[mid] < target) == asc: l = mid + 1
            else: r = mid - 1
        return -1
    res = binary_search(0, peak, True)
    if res != -1: return res
    return binary_search(peak + 1, len(arr) - 1, False)

n = int(input())
arr = list(map(int, input().split()))
target = int(input())
print(find_in_mountain(arr, target))`,
    java: `import java.util.*;

public class Solution {
    private static int findPeak(int[] arr) {
        int l = 0, r = arr.length - 1;
        while (l < r) {
            int mid = l + (r - l) / 2;
            if (arr[mid] < arr[mid + 1]) l = mid + 1;
            else r = mid;
        }
        return l;
    }

    private static int binarySearch(int[] arr, int l, int r, int target, boolean asc) {
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (arr[mid] == target) return mid;
            if ((arr[mid] < target) == asc) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        return -1;
    }

    public static int findInMountain(int[] arr, int target) {
        int peak = findPeak(arr);
        int res = binarySearch(arr, 0, peak, target, true);
        if (res != -1) return res;
        return binarySearch(arr, peak + 1, arr.length - 1, target, false);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }
            int target = sc.nextInt();
            System.out.println(findInMountain(arr, target));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int findPeak(int* arr, int arrSize) {
    int l = 0, r = arrSize - 1;
    while (l < r) {
        int mid = l + (r - l) / 2;
        if (arr[mid] < arr[mid + 1]) l = mid + 1;
        else r = mid;
    }
    return l;
}

int binarySearch(int* arr, int l, int r, int target, bool asc) {
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (arr[mid] == target) return mid;
        if ((arr[mid] < target) == asc) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return -1;
}

int findInMountain(int* arr, int arrSize, int target) {
    int peak = findPeak(arr, arrSize);
    int res = binarySearch(arr, 0, peak, target, true);
    if (res != -1) return res;
    return binarySearch(arr, peak + 1, arrSize - 1, target, false);
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &arr[i]) != 1) return 0;
    }
    int target;
    if (scanf("%d", &target) != 1) return 0;
    printf("%d\\n", findInMountain(arr, n, target));
    free(arr);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int findPeak(vector<int>& arr) {
    int l = 0, r = arr.size() - 1;
    while (l < r) {
        int mid = l + (r - l) / 2;
        if (arr[mid] < arr[mid + 1]) l = mid + 1;
        else r = mid;
    }
    return l;
}

int binarySearch(vector<int>& arr, int l, int r, int target, bool asc) {
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (arr[mid] == target) return mid;
        if ((arr[mid] < target) == asc) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return -1;
}

int findInMountain(vector<int>& arr, int target) {
    int peak = findPeak(arr);
    int res = binarySearch(arr, 0, peak, target, true);
    if (res != -1) return res;
    return binarySearch(arr, peak + 1, arr.size() - 1, target, false);
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        int target;
        cin >> target;
        cout << findInMountain(arr, target) << "\\n";
    }
    return 0;
}`
  },
  'bs-h4': {
    python: `def smallest_divisor(arr, threshold):
    import math
    def get_sum(d):
        return sum(math.ceil(x / d) for x in arr)
    l, r = 1, max(arr)
    ans = r
    while l <= r:
        mid = (l + r) // 2
        if get_sum(mid) <= threshold:
            ans = mid
            r = mid - 1
        else:
            l = mid + 1
    return ans

n = int(input())
arr = list(map(int, input().split()))
t = int(input())
print(smallest_divisor(arr, t))`,
    java: `import java.util.*;

public class Solution {
    private static long getSum(int[] arr, int d) {
        long sum = 0;
        for (int x : arr) {
            sum += (x + d - 1) / d;
        }
        return sum;
    }

    public static int smallestDivisor(int[] arr, int threshold) {
        int l = 1, r = 0;
        for (int x : arr) {
            if (x > r) r = x;
        }
        int ans = r;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (getSum(arr, mid) <= threshold) {
                ans = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }
            int threshold = sc.nextInt();
            System.out.println(smallestDivisor(arr, threshold));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

long long getSum(int* arr, int arrSize, int d) {
    long long sum = 0;
    for (int i = 0; i < arrSize; i++) {
        sum += (arr[i] + d - 1) / d;
    }
    return sum;
}

int smallestDivisor(int* arr, int arrSize, int threshold) {
    int l = 1, r = 0;
    for (int i = 0; i < arrSize; i++) {
        if (arr[i] > r) r = arr[i];
    }
    int ans = r;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (getSum(arr, arrSize, mid) <= threshold) {
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &arr[i]) != 1) return 0;
    }
    int threshold;
    if (scanf("%d", &threshold) != 1) return 0;
    printf("%d\\n", smallestDivisor(arr, n, threshold));
    free(arr);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

long long getSum(vector<int>& arr, int d) {
    long long sum = 0;
    for (int x : arr) {
        sum += (x + d - 1) / d;
    }
    return sum;
}

int smallestDivisor(vector<int>& arr, int threshold) {
    int l = 1, r = *max_element(arr.begin(), arr.end());
    int ans = r;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (getSum(arr, mid) <= threshold) {
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return ans;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        int threshold;
        cin >> threshold;
        cout << smallestDivisor(arr, threshold) << "\\n";
    }
    return 0;
}`
  },
  'bs-h5': {
    python: `def search_rotated_dups(nums, target):
    l, r = 0, len(nums) - 1
    while l <= r:
        mid = (l + r) // 2
        if nums[mid] == target:
            return True
        if nums[l] == nums[mid] == nums[r]:
            l += 1
            r -= 1
        elif nums[l] <= nums[mid]:
            if nums[l] <= target < nums[mid]: r = mid - 1
            else: l = mid + 1
        else:
            if nums[mid] < target <= nums[r]: l = mid + 1
            else: r = mid - 1
    return False

n = int(input())
nums = list(map(int, input().split()))
target = int(input())
print(str(search_rotated_dups(nums, target)).lower())`,
    java: `import java.util.*;

public class Solution {
    public static boolean searchRotatedDups(int[] nums, int target) {
        int l = 0, r = nums.length - 1;
        while (l <= r) {
            int mid = l + (r - l) / 2;
            if (nums[mid] == target) return true;
            if (nums[l] == nums[mid] && nums[mid] == nums[r]) {
                l++;
                r--;
            } else if (nums[l] <= nums[mid]) {
                if (nums[l] <= target && target < nums[mid]) r = mid - 1;
                else l = mid + 1;
            } else {
                if (nums[mid] < target && target <= nums[r]) l = mid + 1;
                else r = mid - 1;
            }
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
            System.out.println(searchRotatedDups(nums, target));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool searchRotatedDups(int* nums, int numsSize, int target) {
    int l = 0, r = numsSize - 1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (nums[mid] == target) return true;
        if (nums[l] == nums[mid] && nums[mid] == nums[r]) {
            l++;
            r--;
        } else if (nums[l] <= nums[mid]) {
            if (nums[l] <= target && target < nums[mid]) r = mid - 1;
            else l = mid + 1;
        } else {
            if (nums[mid] < target && target <= nums[r]) l = mid + 1;
            else r = mid - 1;
        }
    }
    return false;
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
    printf("%s\\n", searchRotatedDups(nums, n, target) ? "true" : "false");
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

bool searchRotatedDups(vector<int>& nums, int target) {
    int l = 0, r = nums.size() - 1;
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (nums[mid] == target) return true;
        if (nums[l] == nums[mid] && nums[mid] == nums[r]) {
            l++;
            r--;
        } else if (nums[l] <= nums[mid]) {
            if (nums[l] <= target && target < nums[mid]) r = mid - 1;
            else l = mid + 1;
        } else {
            if (nums[mid] < target && target <= nums[r]) l = mid + 1;
            else r = mid - 1;
        }
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
        cout << (searchRotatedDups(nums, target) ? "true" : "false") << "\\n";
    }
    return 0;
}`
  },
};