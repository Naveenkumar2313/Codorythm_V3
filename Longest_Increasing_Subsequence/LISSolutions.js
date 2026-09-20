export const LISBinarySearchSolutions = {
'lis-e1': {
python: `from bisect import bisect_left
def lis_length(nums):
    tails = []
    for num in nums:
        pos = bisect_left(tails, num)
        if pos == len(tails):
            tails.append(num)
        else:
            tails[pos] = num
    return len(tails)
n = int(input())
nums = list(map(int, input().split()))
print(lis_length(nums))`,
java: `import java.util.*;
public class Main {
    public static int lisLength(int[] nums) {
        ArrayList<Integer> tails = new ArrayList<>();
        for (int num : nums) {
            int low = 0, high = tails.size();
            while (low < high) {
                int mid = low + (high - low) / 2;
                if (tails.get(mid) >= num) high = mid;
                else low = mid + 1;
            }
            if (low == tails.size()) tails.add(num);
            else tails.set(low, num);
        }
        return tails.size();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(lisLength(nums));
    }
}`,
c: `#include <stdio.h>
#include <stdlib.h>
int lowerBound(int *tails, int size, int value) {
    int low = 0, high = size;
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (tails[mid] >= value) high = mid;
        else low = mid + 1;
    }
    return low;
}
int lisLength(int *nums, int n) {
    int *tails = malloc(n * sizeof(int));
    int size = 0;
    for (int i = 0; i < n; i++) {
        int pos = lowerBound(tails, size, nums[i]);
        tails[pos] = nums[i];
        if (pos == size) size++;
    }
    free(tails);
    return size;
}
int main() {
    int n;
    scanf("%d", &n);
    int *nums = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%d\\n", lisLength(nums, n));
    free(nums);
    return 0;
}`,
cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int lisLength(vector<int>& nums) {
    vector<int> tails;
    for (int num : nums) {
        auto it = lower_bound(tails.begin(), tails.end(), num);
        if (it == tails.end()) tails.push_back(num);
        else *it = num;
    }
    return (int)tails.size();
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int &x : nums) cin >> x;
    cout << lisLength(nums) << "\\n";
    return 0;
}`
},
'lis-e2': {
python: `from bisect import bisect_left
def lis_with_duplicates(nums):
    tails = []
    for num in nums:
        pos = bisect_left(tails, num)
        if pos == len(tails):
            tails.append(num)
        else:
            tails[pos] = num
    return len(tails)
n = int(input())
nums = list(map(int, input().split()))
print(lis_with_duplicates(nums))`,
java: `import java.util.*;
public class Main {
    public static int lisWithDuplicates(int[] nums) {
        ArrayList<Integer> tails = new ArrayList<>();
        for (int num : nums) {
            int low = 0, high = tails.size();
            while (low < high) {
                int mid = low + (high - low) / 2;
                if (tails.get(mid) >= num) high = mid;
                else low = mid + 1;
            }
            if (low == tails.size()) tails.add(num);
            else tails.set(low, num);
        }
        return tails.size();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(lisWithDuplicates(nums));
    }
}`,
c: `#include <stdio.h>
#include <stdlib.h>
int lowerBound(int *tails, int size, int value) {
    int low = 0, high = size;
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (tails[mid] >= value) high = mid;
        else low = mid + 1;
    }
    return low;
}
int lisWithDuplicates(int *nums, int n) {
    int *tails = malloc(n * sizeof(int));
    int size = 0;
    for (int i = 0; i < n; i++) {
        int pos = lowerBound(tails, size, nums[i]);
        tails[pos] = nums[i];
        if (pos == size) size++;
    }
    free(tails);
    return size;
}
int main() {
    int n;
    scanf("%d", &n);
    int *nums = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%d\\n", lisWithDuplicates(nums, n));
    free(nums);
    return 0;
}`,
cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int lisWithDuplicates(vector<int>& nums) {
    vector<int> tails;
    for (int num : nums) {
        auto it = lower_bound(tails.begin(), tails.end(), num);
        if (it == tails.end()) tails.push_back(num);
        else *it = num;
    }
    return (int)tails.size();
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int &x : nums) cin >> x;
    cout << lisWithDuplicates(nums) << "\\n";
    return 0;
}`
},
'lis-e3': {
python: `from bisect import bisect_left
def sorted_lis_length(nums):
    tails = []
    for num in nums:
        pos = bisect_left(tails, num)
        if pos == len(tails):
            tails.append(num)
        else:
            tails[pos] = num
    return len(tails)
n = int(input())
nums = list(map(int, input().split()))
print(sorted_lis_length(nums))`,
java: `import java.util.*;
public class Main {
    public static int sortedLisLength(int[] nums) {
        ArrayList<Integer> tails = new ArrayList<>();
        for (int num : nums) {
            int low = 0, high = tails.size();
            while (low < high) {
                int mid = low + (high - low) / 2;
                if (tails.get(mid) >= num) high = mid;
                else low = mid + 1;
            }
            if (low == tails.size()) tails.add(num);
            else tails.set(low, num);
        }
        return tails.size();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(sortedLisLength(nums));
    }
}`,
c: `#include <stdio.h>
#include <stdlib.h>
int lowerBound(int *tails, int size, int value) {
    int low = 0, high = size;
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (tails[mid] >= value) high = mid;
        else low = mid + 1;
    }
    return low;
}
int sortedLisLength(int *nums, int n) {
    int *tails = malloc(n * sizeof(int));
    int size = 0;
    for (int i = 0; i < n; i++) {
        int pos = lowerBound(tails, size, nums[i]);
        tails[pos] = nums[i];
        if (pos == size) size++;
    }
    free(tails);
    return size;
}
int main() {
    int n;
    scanf("%d", &n);
    int *nums = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%d\\n", sortedLisLength(nums, n));
    free(nums);
    return 0;
}`,
cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int sortedLisLength(vector<int>& nums) {
    vector<int> tails;
    for (int num : nums) {
        auto it = lower_bound(tails.begin(), tails.end(), num);
        if (it == tails.end()) tails.push_back(num);
        else *it = num;
    }
    return (int)tails.size();
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int &x : nums) cin >> x;
    cout << sortedLisLength(nums) << "\\n";
    return 0;
}`
},
'lis-e4': {
python: `from bisect import bisect_left
def reverse_sorted_lis(nums):
    tails = []
    for num in nums:
        pos = bisect_left(tails, num)
        if pos == len(tails):
            tails.append(num)
        else:
            tails[pos] = num
    return len(tails)
n = int(input())
nums = list(map(int, input().split()))
print(reverse_sorted_lis(nums))`,
java: `import java.util.*;
public class Main {
    public static int reverseSortedLIS(int[] nums) {
        ArrayList<Integer> tails = new ArrayList<>();
        for (int num : nums) {
            int low = 0, high = tails.size();
            while (low < high) {
                int mid = low + (high - low) / 2;
                if (tails.get(mid) >= num) high = mid;
                else low = mid + 1;
            }
            if (low == tails.size()) tails.add(num);
            else tails.set(low, num);
        }
        return tails.size();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(reverseSortedLIS(nums));
    }
}`,
c: `#include <stdio.h>
#include <stdlib.h>
int lowerBound(int *tails, int size, int value) {
    int low = 0, high = size;
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (tails[mid] >= value) high = mid;
        else low = mid + 1;
    }
    return low;
}
int reverseSortedLIS(int *nums, int n) {
    int *tails = malloc(n * sizeof(int));
    int size = 0;
    for (int i = 0; i < n; i++) {
        int pos = lowerBound(tails, size, nums[i]);
        tails[pos] = nums[i];
        if (pos == size) size++;
    }
    free(tails);
    return size;
}
int main() {
    int n;
    scanf("%d", &n);
    int *nums = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%d\\n", reverseSortedLIS(nums, n));
    free(nums);
    return 0;
}`,
cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int reverseSortedLIS(vector<int>& nums) {
    vector<int> tails;
    for (int num : nums) {
        auto it = lower_bound(tails.begin(), tails.end(), num);
        if (it == tails.end()) tails.push_back(num);
        else *it = num;
    }
    return (int)tails.size();
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int &x : nums) cin >> x;
    cout << reverseSortedLIS(nums) << "\\n";
    return 0;
}`
},
'lis-e5': {
python: `from bisect import bisect_left
def lis_prefixes(nums):
    tails = []
    result = []
    for num in nums:
        pos = bisect_left(tails, num)
        if pos == len(tails):
            tails.append(num)
        else:
            tails[pos] = num
        result.append(len(tails))
    return result
n = int(input())
nums = list(map(int, input().split()))
print(*lis_prefixes(nums))`,
java: `import java.util.*;
public class Main {
    public static List<Integer> lisPrefixes(int[] nums) {
        ArrayList<Integer> tails = new ArrayList<>();
        ArrayList<Integer> result = new ArrayList<>();
        for (int num : nums) {
            int low = 0, high = tails.size();
            while (low < high) {
                int mid = low + (high - low) / 2;
                if (tails.get(mid) >= num) high = mid;
                else low = mid + 1;
            }
            if (low == tails.size()) tails.add(num);
            else tails.set(low, num);
            result.add(tails.size());
        }
        return result;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        List<Integer> ans = lisPrefixes(nums);
        for (int i = 0; i < ans.size(); i++) {
            if (i > 0) System.out.print(" ");
            System.out.print(ans.get(i));
        }
        System.out.println();
    }
}`,
c: `#include <stdio.h>
#include <stdlib.h>
int lowerBound(int *tails, int size, int value) {
    int low = 0, high = size;
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (tails[mid] >= value) high = mid;
        else low = mid + 1;
    }
    return low;
}
int* lisPrefixes(int *nums, int n) {
    int *tails = malloc(n * sizeof(int));
    int *result = malloc(n * sizeof(int));
    int size = 0;
    for (int i = 0; i < n; i++) {
        int pos = lowerBound(tails, size, nums[i]);
        tails[pos] = nums[i];
        if (pos == size) size++;
        result[i] = size;
    }
    free(tails);
    return result;
}
int main() {
    int n;
    scanf("%d", &n);
    int *nums = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    int *ans = lisPrefixes(nums, n);
    for (int i = 0; i < n; i++) {
        if (i) printf(" ");
        printf("%d", ans[i]);
    }
    printf("\\n");
    free(ans);
    free(nums);
    return 0;
}`,
cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
vector<int> lisPrefixes(vector<int>& nums) {
    vector<int> tails;
    vector<int> result;
    for (int num : nums) {
        auto it = lower_bound(tails.begin(), tails.end(), num);
        if (it == tails.end()) tails.push_back(num);
        else *it = num;
        result.push_back((int)tails.size());
    }
    return result;
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int &x : nums) cin >> x;
    vector<int> ans = lisPrefixes(nums);
    for (int i = 0; i < (int)ans.size(); i++) {
        if (i) cout << " ";
        cout << ans[i];
    }
    cout << "\\n";
    return 0;
}`
},
'lis-m1': {
python: `from bisect import bisect_left
def reconstruct_lis(nums):
    n = len(nums)
    tails = []
    tail_indices = []
    parent = [-1] * n
    for i, num in enumerate(nums):
        pos = bisect_left(tails, num)
        if pos == len(tails):
            tails.append(num)
            tail_indices.append(i)
        else:
            tails[pos] = num
            tail_indices[pos] = i
        if pos > 0:
            parent[i] = tail_indices[pos - 1]
    result = []
    index = tail_indices[-1]
    while index != -1:
        result.append(nums[index])
        index = parent[index]
    return result[::-1]
n = int(input())
nums = list(map(int, input().split()))
print(*reconstruct_lis(nums))`,
java: `import java.util.*;
public class Main {
    public static List<Integer> reconstructLIS(int[] nums) {
        int n = nums.length;
        int[] tails = new int[n];
        int[] tailIndex = new int[n];
        int[] parent = new int[n];
        Arrays.fill(parent, -1);
        int size = 0;
        for (int i = 0; i < n; i++) {
            int low = 0, high = size;
            while (low < high) {
                int mid = low + (high - low) / 2;
                if (tails[mid] >= nums[i]) high = mid;
                else low = mid + 1;
            }
            int pos = low;
            tails[pos] = nums[i];
            tailIndex[pos] = i;
            if (pos > 0) parent[i] = tailIndex[pos - 1];
            if (pos == size) size++;
        }
        LinkedList<Integer> result = new LinkedList<>();
        int index = tailIndex[size - 1];
        while (index != -1) {
            result.addFirst(nums[index]);
            index = parent[index];
        }
        return result;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        List<Integer> ans = reconstructLIS(nums);
        for (int i = 0; i < ans.size(); i++) {
            if (i > 0) System.out.print(" ");
            System.out.print(ans.get(i));
        }
        System.out.println();
    }
}`,
c: `#include <stdio.h>
#include <stdlib.h>
int lowerBound(int *tails, int size, int value) {
    int low = 0, high = size;
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (tails[mid] >= value) high = mid;
        else low = mid + 1;
    }
    return low;
}
int* reconstructLIS(int *nums, int n, int *returnSize) {
    int *tails = malloc(n * sizeof(int));
    int *tailIndex = malloc(n * sizeof(int));
    int *parent = malloc(n * sizeof(int));
    int *result = malloc(n * sizeof(int));
    int size = 0;
    for (int i = 0; i < n; i++) parent[i] = -1;
    for (int i = 0; i < n; i++) {
        int pos = lowerBound(tails, size, nums[i]);
        tails[pos] = nums[i];
        tailIndex[pos] = i;
        if (pos > 0) parent[i] = tailIndex[pos - 1];
        if (pos == size) size++;
    }
    int index = tailIndex[size - 1];
    int count = 0;
    while (index != -1) {
        result[count++] = nums[index];
        index = parent[index];
    }
    for (int i = 0; i < count / 2; i++) {
        int temp = result[i];
        result[i] = result[count - 1 - i];
        result[count - 1 - i] = temp;
    }
    *returnSize = count;
    free(tails);
    free(tailIndex);
    free(parent);
    return result;
}
int main() {
    int n;
    scanf("%d", &n);
    int *nums = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    int size;
    int *ans = reconstructLIS(nums, n, &size);
    for (int i = 0; i < size; i++) {
        if (i) printf(" ");
        printf("%d", ans[i]);
    }
    printf("\\n");
    free(ans);
    free(nums);
    return 0;
}`,
cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
vector<int> reconstructLIS(vector<int>& nums) {
    int n = nums.size();
    vector<int> tails(n);
    vector<int> tailIndex(n);
    vector<int> parent(n, -1);
    int size = 0;
    for (int i = 0; i < n; i++) {
        int pos = lower_bound(tails.begin(), tails.begin() + size, nums[i]) - tails.begin();
        tails[pos] = nums[i];
        tailIndex[pos] = i;
        if (pos > 0) parent[i] = tailIndex[pos - 1];
        if (pos == size) size++;
    }
    vector<int> result;
    int index = tailIndex[size - 1];
    while (index != -1) {
        result.push_back(nums[index]);
        index = parent[index];
    }
    reverse(result.begin(), result.end());
    return result;
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int &x : nums) cin >> x;
    vector<int> ans = reconstructLIS(nums);
    for (int i = 0; i < (int)ans.size(); i++) {
        if (i) cout << " ";
        cout << ans[i];
    }
    cout << "\\n";
    return 0;
}`
},
'lis-m2': {
python: `from bisect import bisect_right
def lnds_length(nums):
    tails = []
    for num in nums:
        pos = bisect_right(tails, num)
        if pos == len(tails):
            tails.append(num)
        else:
            tails[pos] = num
    return len(tails)
n = int(input())
nums = list(map(int, input().split()))
print(lnds_length(nums))`,
java: `import java.util.*;
public class Main {
    public static int lndsLength(int[] nums) {
        ArrayList<Integer> tails = new ArrayList<>();
        for (int num : nums) {
            int low = 0, high = tails.size();
            while (low < high) {
                int mid = low + (high - low) / 2;
                if (tails.get(mid) > num) high = mid;
                else low = mid + 1;
            }
            if (low == tails.size()) tails.add(num);
            else tails.set(low, num);
        }
        return tails.size();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(lndsLength(nums));
    }
}`,
c: `#include <stdio.h>
#include <stdlib.h>
int upperBound(int *tails, int size, int value) {
    int low = 0, high = size;
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (tails[mid] > value) high = mid;
        else low = mid + 1;
    }
    return low;
}
int lndsLength(int *nums, int n) {
    int *tails = malloc(n * sizeof(int));
    int size = 0;
    for (int i = 0; i < n; i++) {
        int pos = upperBound(tails, size, nums[i]);
        tails[pos] = nums[i];
        if (pos == size) size++;
    }
    free(tails);
    return size;
}
int main() {
    int n;
    scanf("%d", &n);
    int *nums = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%d\\n", lndsLength(nums, n));
    free(nums);
    return 0;
}`,
cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int lndsLength(vector<int>& nums) {
    vector<int> tails;
    for (int num : nums) {
        auto it = upper_bound(tails.begin(), tails.end(), num);
        if (it == tails.end()) tails.push_back(num);
        else *it = num;
    }
    return (int)tails.size();
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int &x : nums) cin >> x;
    cout << lndsLength(nums) << "\\n";
    return 0;
}`
},
'lis-m3': {
python: `from bisect import bisect_left
def lis_ending_at_each_position(nums):
    tails = []
    result = []
    for num in nums:
        pos = bisect_left(tails, num)
        if pos == len(tails):
            tails.append(num)
        else:
            tails[pos] = num
        result.append(pos + 1)
    return result
n = int(input())
nums = list(map(int, input().split()))
print(*lis_ending_at_each_position(nums))`,
java: `import java.util.*;
public class Main {
    public static int[] lisEndingAtEachPosition(int[] nums) {
        int[] result = new int[nums.length];
        int[] tails = new int[nums.length];
        int size = 0;
        for (int i = 0; i < nums.length; i++) {
            int low = 0, high = size;
            while (low < high) {
                int mid = low + (high - low) / 2;
                if (tails[mid] >= nums[i]) high = mid;
                else low = mid + 1;
            }
            int pos = low;
            tails[pos] = nums[i];
            if (pos == size) size++;
            result[i] = pos + 1;
        }
        return result;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        int[] ans = lisEndingAtEachPosition(nums);
        for (int i = 0; i < n; i++) {
            if (i > 0) System.out.print(" ");
            System.out.print(ans[i]);
        }
        System.out.println();
    }
}`,
c: `#include <stdio.h>
#include <stdlib.h>
int lowerBound(int *tails, int size, int value) {
    int low = 0, high = size;
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (tails[mid] >= value) high = mid;
        else low = mid + 1;
    }
    return low;
}
int* lisEndingAtEachPosition(int *nums, int n) {
    int *tails = malloc(n * sizeof(int));
    int *result = malloc(n * sizeof(int));
    int size = 0;
    for (int i = 0; i < n; i++) {
        int pos = lowerBound(tails, size, nums[i]);
        tails[pos] = nums[i];
        if (pos == size) size++;
        result[i] = pos + 1;
    }
    free(tails);
    return result;
}
int main() {
    int n;
    scanf("%d", &n);
    int *nums = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    int *ans = lisEndingAtEachPosition(nums, n);
    for (int i = 0; i < n; i++) {
        if (i) printf(" ");
        printf("%d", ans[i]);
    }
    printf("\\n");
    free(ans);
    free(nums);
    return 0;
}`,
cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
vector<int> lisEndingAtEachPosition(vector<int>& nums) {
    vector<int> tails;
    vector<int> result;
    for (int num : nums) {
        auto it = lower_bound(tails.begin(), tails.end(), num);
        int pos = it - tails.begin();
        if (it == tails.end()) tails.push_back(num);
        else *it = num;
        result.push_back(pos + 1);
    }
    return result;
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int &x : nums) cin >> x;
    vector<int> ans = lisEndingAtEachPosition(nums);
    for (int i = 0; i < (int)ans.size(); i++) {
        if (i) cout << " ";
        cout << ans[i];
    }
    cout << "\\n";
    return 0;
}`
},
'lis-m4': {
python: `from bisect import bisect_left
def min_removals(nums):
    tails = []
    for num in nums:
        pos = bisect_left(tails, num)
        if pos == len(tails):
            tails.append(num)
        else:
            tails[pos] = num
    return len(nums) - len(tails)
n = int(input())
nums = list(map(int, input().split()))
print(min_removals(nums))`,
java: `import java.util.*;
public class Main {
    public static int minRemovals(int[] nums) {
        ArrayList<Integer> tails = new ArrayList<>();
        for (int num : nums) {
            int low = 0, high = tails.size();
            while (low < high) {
                int mid = low + (high - low) / 2;
                if (tails.get(mid) >= num) high = mid;
                else low = mid + 1;
            }
            if (low == tails.size()) tails.add(num);
            else tails.set(low, num);
        }
        return nums.length - tails.size();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(minRemovals(nums));
    }
}`,
c: `#include <stdio.h>
#include <stdlib.h>
int lowerBound(int *tails, int size, int value) {
    int low = 0, high = size;
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (tails[mid] >= value) high = mid;
        else low = mid + 1;
    }
    return low;
}
int minRemovals(int *nums, int n) {
    int *tails = malloc(n * sizeof(int));
    int size = 0;
    for (int i = 0; i < n; i++) {
        int pos = lowerBound(tails, size, nums[i]);
        tails[pos] = nums[i];
        if (pos == size) size++;
    }
    free(tails);
    return n - size;
}
int main() {
    int n;
    scanf("%d", &n);
    int *nums = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%d\\n", minRemovals(nums, n));
    free(nums);
    return 0;
}`,
cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int minRemovals(vector<int>& nums) {
    vector<int> tails;
    for (int num : nums) {
        auto it = lower_bound(tails.begin(), tails.end(), num);
        if (it == tails.end()) tails.push_back(num);
        else *it = num;
    }
    return (int)nums.size() - (int)tails.size();
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int &x : nums) cin >> x;
    cout << minRemovals(nums) << "\\n";
    return 0;
}`
},
'lis-m5': {
python: `from bisect import bisect_left
def lis_negative_values(nums):
    tails = []
    for num in nums:
        pos = bisect_left(tails, num)
        if pos == len(tails):
            tails.append(num)
        else:
            tails[pos] = num
    return len(tails)
n = int(input())
nums = list(map(int, input().split()))
print(lis_negative_values(nums))`,
java: `import java.util.*;
public class Main {
    public static int lisNegativeValues(int[] nums) {
        ArrayList<Integer> tails = new ArrayList<>();
        for (int num : nums) {
            int low = 0, high = tails.size();
            while (low < high) {
                int mid = low + (high - low) / 2;
                if (tails.get(mid) >= num) high = mid;
                else low = mid + 1;
            }
            if (low == tails.size()) tails.add(num);
            else tails.set(low, num);
        }
        return tails.size();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(lisNegativeValues(nums));
    }
}`,
c: `#include <stdio.h>
#include <stdlib.h>
int lowerBound(int *tails, int size, int value) {
    int low = 0, high = size;
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (tails[mid] >= value) high = mid;
        else low = mid + 1;
    }
    return low;
}
int lisNegativeValues(int *nums, int n) {
    int *tails = malloc(n * sizeof(int));
    int size = 0;
    for (int i = 0; i < n; i++) {
        int pos = lowerBound(tails, size, nums[i]);
        tails[pos] = nums[i];
        if (pos == size) size++;
    }
    free(tails);
    return size;
}
int main() {
    int n;
    scanf("%d", &n);
    int *nums = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%d\\n", lisNegativeValues(nums, n));
    free(nums);
    return 0;
}`,
cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int lisNegativeValues(vector<int>& nums) {
    vector<int> tails;
    for (int num : nums) {
        auto it = lower_bound(tails.begin(), tails.end(), num);
        if (it == tails.end()) tails.push_back(num);
        else *it = num;
    }
    return (int)tails.size();
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int &x : nums) cin >> x;
    cout << lisNegativeValues(nums) << "\\n";
    return 0;
}`
},
'lis-h1': {
python: `MOD = 1000000007
class Fenwick:
    def __init__(self, n):
        self.n = n
        self.bit = [(0, 0)] * (n + 1)
    def query(self, index):
        best_len = 0
        best_count = 0
        while index > 0:
            length, count = self.bit[index]
            if length > best_len:
                best_len = length
                best_count = count
            elif length == best_len:
                best_count = (best_count + count) % MOD
            index -= index & -index
        return best_len, best_count
    def update(self, index, length, count):
        while index <= self.n:
            cur_len, cur_count = self.bit[index]
            if length > cur_len:
                self.bit[index] = (length, count)
            elif length == cur_len:
                self.bit[index] = (cur_len, (cur_count + count) % MOD)
            index += index & -index
def count_lis(nums):
    values = sorted(set(nums))
    rank = {value: i + 1 for i, value in enumerate(values)}
    tree = Fenwick(len(values))
    for num in nums:
        r = rank[num]
        best_len, best_count = tree.query(r - 1)
        if best_len == 0:
            best_count = 1
        tree.update(r, best_len + 1, best_count)
    return tree.query(len(values))[1]
n = int(input())
nums = list(map(int, input().split()))
print(count_lis(nums))`,
java: `import java.util.*;
public class Main {
    static final long MOD = 1000000007L;
    static class Fenwick {
        int n;
        int[] length;
        long[] count;
        Fenwick(int n) {
            this.n = n;
            length = new int[n + 1];
            count = new long[n + 1];
        }
        long[] query(int index) {
            int bestLength = 0;
            long bestCount = 0;
            while (index > 0) {
                if (length[index] > bestLength) {
                    bestLength = length[index];
                    bestCount = count[index];
                } else if (length[index] == bestLength) {
                    bestCount = (bestCount + count[index]) % MOD;
                }
                index -= index & -index;
            }
            return new long[]{bestLength, bestCount};
        }
        void update(int index, int len, long cnt) {
            while (index <= n) {
                if (len > length[index]) {
                    length[index] = len;
                    count[index] = cnt;
                } else if (len == length[index]) {
                    count[index] = (count[index] + cnt) % MOD;
                }
                index += index & -index;
            }
        }
    }
    public static long countLIS(int[] nums) {
        int[] sorted = nums.clone();
        Arrays.sort(sorted);
        ArrayList<Integer> values = new ArrayList<>();
        for (int x : sorted) {
            if (values.isEmpty() || values.get(values.size() - 1) != x)
                values.add(x);
        }
        HashMap<Integer, Integer> rank = new HashMap<>();
        for (int i = 0; i < values.size(); i++) rank.put(values.get(i), i + 1);
        Fenwick tree = new Fenwick(values.size());
        for (int num : nums) {
            int r = rank.get(num);
            long[] q = tree.query(r - 1);
            int bestLength = (int) q[0];
            long bestCount = q[1];
            if (bestLength == 0) bestCount = 1;
            tree.update(r, bestLength + 1, bestCount);
        }
        return tree.query(values.size())[1];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(countLIS(nums));
    }
}`,
c: `#include <stdio.h>
#include <stdlib.h>
#define MOD 1000000007LL
typedef struct {
    int len;
    long long count;
} Node;
int compareInt(const void *a, const void *b) {
    int x = *(const int*)a;
    int y = *(const int*)b;
    return (x > y) - (x < y);
}
int lowerBound(int *a, int n, int value) {
    int low = 0, high = n;
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (a[mid] >= value) high = mid;
        else low = mid + 1;
    }
    return low;
}
void update(Node *bit, int n, int index, int len, long long count) {
    while (index <= n) {
        if (len > bit[index].len) {
            bit[index].len = len;
            bit[index].count = count;
        } else if (len == bit[index].len) {
            bit[index].count = (bit[index].count + count) % MOD;
        }
        index += index & -index;
    }
}
Node query(Node *bit, int index) {
    Node result = {0, 0};
    while (index > 0) {
        if (bit[index].len > result.len) {
            result = bit[index];
        } else if (bit[index].len == result.len) {
            result.count = (result.count + bit[index].count) % MOD;
        }
        index -= index & -index;
    }
    return result;
}
long long countLIS(int *nums, int n) {
    int *values = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) values[i] = nums[i];
    qsort(values, n, sizeof(int), compareInt);
    int m = 0;
    for (int i = 0; i < n; i++) {
        if (i == 0 || values[i] != values[i - 1]) values[m++] = values[i];
    }
    Node *bit = calloc(m + 1, sizeof(Node));
    for (int i = 0; i < n; i++) {
        int r = lowerBound(values, m, nums[i]) + 1;
        Node q = query(bit, r - 1);
        long long count = q.len == 0 ? 1 : q.count;
        update(bit, m, r, q.len + 1, count);
    }
    Node result = query(bit, m);
    free(values);
    free(bit);
    return result.count;
}
int main() {
    int n;
    scanf("%d", &n);
    int *nums = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%lld\\n", countLIS(nums, n));
    free(nums);
    return 0;
}`,
cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
const long long MOD = 1000000007LL;
struct Node {
    int len;
    long long count;
};
struct Fenwick {
    int n;
    vector<Node> bit;
    Fenwick(int n) : n(n), bit(n + 1, {0, 0}) {}
    Node query(int index) {
        Node result{0, 0};
        while (index > 0) {
            if (bit[index].len > result.len) result = bit[index];
            else if (bit[index].len == result.len)
                result.count = (result.count + bit[index].count) % MOD;
            index -= index & -index;
        }
        return result;
    }
    void update(int index, Node value) {
        while (index <= n) {
            if (value.len > bit[index].len) bit[index] = value;
            else if (value.len == bit[index].len)
                bit[index].count = (bit[index].count + value.count) % MOD;
            index += index & -index;
        }
    }
};
long long countLIS(vector<int>& nums) {
    vector<int> values = nums;
    sort(values.begin(), values.end());
    values.erase(unique(values.begin(), values.end()), values.end());
    Fenwick tree(values.size());
    for (int num : nums) {
        int r = lower_bound(values.begin(), values.end(), num) - values.begin() + 1;
        Node q = tree.query(r - 1);
        long long count = q.len == 0 ? 1 : q.count;
        tree.update(r, {q.len + 1, count});
    }
    return tree.query(values.size()).count;
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int &x : nums) cin >> x;
    cout << countLIS(nums) << "\\n";
    return 0;
}`
},
'lis-h2': {
python: `class FenwickMax:
    def __init__(self, n):
        self.n = n
        self.bit = [0] * (n + 1)
    def query(self, index):
        result = 0
        while index > 0:
            result = max(result, self.bit[index])
            index -= index & -index
        return result
    def update(self, index, value):
        while index <= self.n:
            self.bit[index] = max(self.bit[index], value)
            index += index & -index
def maximum_sum_increasing_subsequence(nums):
    values = sorted(set(nums))
    rank = {value: i + 1 for i, value in enumerate(values)}
    tree = FenwickMax(len(values))
    answer = 0
    for num in nums:
        r = rank[num]
        current = tree.query(r - 1) + num
        tree.update(r, current)
        answer = max(answer, current)
    return answer
n = int(input())
nums = list(map(int, input().split()))
print(maximum_sum_increasing_subsequence(nums))`,
java: `import java.util.*;
public class Main {
    static class Fenwick {
        int n;
        long[] bit;
        Fenwick(int n) {
            this.n = n;
            bit = new long[n + 1];
        }
        long query(int index) {
            long result = 0;
            while (index > 0) {
                result = Math.max(result, bit[index]);
                index -= index & -index;
            }
            return result;
        }
        void update(int index, long value) {
            while (index <= n) {
                bit[index] = Math.max(bit[index], value);
                index += index & -index;
            }
        }
    }
    public static long maximumSumIncreasingSubsequence(int[] nums) {
        int[] sorted = nums.clone();
        Arrays.sort(sorted);
        ArrayList<Integer> values = new ArrayList<>();
        for (int x : sorted) {
            if (values.isEmpty() || values.get(values.size() - 1) != x)
                values.add(x);
        }
        HashMap<Integer, Integer> rank = new HashMap<>();
        for (int i = 0; i < values.size(); i++) rank.put(values.get(i), i + 1);
        Fenwick tree = new Fenwick(values.size());
        long answer = 0;
        for (int num : nums) {
            int r = rank.get(num);
            long current = tree.query(r - 1) + num;
            tree.update(r, current);
            answer = Math.max(answer, current);
        }
        return answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(maximumSumIncreasingSubsequence(nums));
    }
}`,
c: `#include <stdio.h>
#include <stdlib.h>
int compareInt(const void *a, const void *b) {
    int x = *(const int*)a;
    int y = *(const int*)b;
    return (x > y) - (x < y);
}
int lowerBound(int *a, int n, int value) {
    int low = 0, high = n;
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (a[mid] >= value) high = mid;
        else low = mid + 1;
    }
    return low;
}
long long query(long long *bit, int index) {
    long long result = 0;
    while (index > 0) {
        if (bit[index] > result) result = bit[index];
        index -= index & -index;
    }
    return result;
}
void update(long long *bit, int n, int index, long long value) {
    while (index <= n) {
        if (value > bit[index]) bit[index] = value;
        index += index & -index;
    }
}
long long maximumSumIncreasingSubsequence(int *nums, int n) {
    int *values = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) values[i] = nums[i];
    qsort(values, n, sizeof(int), compareInt);
    int m = 0;
    for (int i = 0; i < n; i++) {
        if (i == 0 || values[i] != values[i - 1]) values[m++] = values[i];
    }
    long long *bit = calloc(m + 1, sizeof(long long));
    long long answer = 0;
    for (int i = 0; i < n; i++) {
        int r = lowerBound(values, m, nums[i]) + 1;
        long long current = query(bit, r - 1) + nums[i];
        update(bit, m, r, current);
        if (current > answer) answer = current;
    }
    free(values);
    free(bit);
    return answer;
}
int main() {
    int n;
    scanf("%d", &n);
    int *nums = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%lld\\n", maximumSumIncreasingSubsequence(nums, n));
    free(nums);
    return 0;
}`,
cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
struct Fenwick {
    int n;
    vector<long long> bit;
    Fenwick(int n) : n(n), bit(n + 1, 0) {}
    long long query(int index) {
        long long result = 0;
        while (index > 0) {
            result = max(result, bit[index]);
            index -= index & -index;
        }
        return result;
    }
    void update(int index, long long value) {
        while (index <= n) {
            bit[index] = max(bit[index], value);
            index += index & -index;
        }
    }
};
long long maximumSumIncreasingSubsequence(vector<int>& nums) {
    vector<int> values = nums;
    sort(values.begin(), values.end());
    values.erase(unique(values.begin(), values.end()), values.end());
    Fenwick tree(values.size());
    long long answer = 0;
    for (int num : nums) {
        int r = lower_bound(values.begin(), values.end(), num) - values.begin() + 1;
        long long current = tree.query(r - 1) + num;
        tree.update(r, current);
        answer = max(answer, current);
    }
    return answer;
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int &x : nums) cin >> x;
    cout << maximumSumIncreasingSubsequence(nums) << "\\n";
    return 0;
}`
},
'lis-h3': {
python: `from bisect import bisect_left
def min_non_increasing_subsequences(nums):
    tails = []
    for num in nums:
        pos = bisect_left(tails, num)
        if pos == len(tails):
            tails.append(num)
        else:
            tails[pos] = num
    return len(tails)
n = int(input())
nums = list(map(int, input().split()))
print(min_non_increasing_subsequences(nums))`,
java: `import java.util.*;
public class Main {
    public static int minNonIncreasingSubsequences(int[] nums) {
        ArrayList<Integer> tails = new ArrayList<>();
        for (int num : nums) {
            int low = 0, high = tails.size();
            while (low < high) {
                int mid = low + (high - low) / 2;
                if (tails.get(mid) >= num) high = mid;
                else low = mid + 1;
            }
            if (low == tails.size()) tails.add(num);
            else tails.set(low, num);
        }
        return tails.size();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(minNonIncreasingSubsequences(nums));
    }
}`,
c: `#include <stdio.h>
#include <stdlib.h>
int lowerBound(int *tails, int size, int value) {
    int low = 0, high = size;
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (tails[mid] >= value) high = mid;
        else low = mid + 1;
    }
    return low;
}
int minNonIncreasingSubsequences(int *nums, int n) {
    int *tails = malloc(n * sizeof(int));
    int size = 0;
    for (int i = 0; i < n; i++) {
        int pos = lowerBound(tails, size, nums[i]);
        tails[pos] = nums[i];
        if (pos == size) size++;
    }
    free(tails);
    return size;
}
int main() {
    int n;
    scanf("%d", &n);
    int *nums = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%d\\n", minNonIncreasingSubsequences(nums, n));
    free(nums);
    return 0;
}`,
cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int minNonIncreasingSubsequences(vector<int>& nums) {
    vector<int> tails;
    for (int num : nums) {
        auto it = lower_bound(tails.begin(), tails.end(), num);
        if (it == tails.end()) tails.push_back(num);
        else *it = num;
    }
    return (int)tails.size();
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int &x : nums) cin >> x;
    cout << minNonIncreasingSubsequences(nums) << "\\n";
    return 0;
}`
},
'lis-h4': {
python: `def lexicographically_smallest_lis(nums):
    n = len(nums)
    if n == 0:
        return []
    start = [1] * n
    for i in range(n - 1, -1, -1):
        for j in range(i + 1, n):
            if nums[j] > nums[i]:
                start[i] = max(start[i], 1 + start[j])
    length = max(start)
    result = []
    current_index = -1
    last_value = None
    remaining = length
    while remaining > 0:
        best_index = -1
        best_value = None
        for i in range(current_index + 1, n):
            if (last_value is None or nums[i] > last_value) and start[i] >= remaining:
                if best_index == -1 or nums[i] < best_value:
                    best_index = i
                    best_value = nums[i]
        if best_index == -1:
            break
        result.append(nums[best_index])
        last_value = nums[best_index]
        current_index = best_index
        remaining -= 1
    return result
n = int(input())
nums = list(map(int, input().split()))
print(*lexicographically_smallest_lis(nums))`,
java: `import java.util.*;
public class Main {
    public static List<Integer> lexicographicallySmallestLIS(int[] nums) {
        int n = nums.length;
        int[] start = new int[n];
        Arrays.fill(start, 1);
        for (int i = n - 1; i >= 0; i--) {
            for (int j = i + 1; j < n; j++) {
                if (nums[j] > nums[i])
                    start[i] = Math.max(start[i], 1 + start[j]);
            }
        }
        int length = 0;
        for (int x : start) length = Math.max(length, x);
        ArrayList<Integer> result = new ArrayList<>();
        int currentIndex = -1;
        long lastValue = Long.MIN_VALUE;
        int remaining = length;
        while (remaining > 0) {
            int bestIndex = -1;
            int bestValue = 0;
            for (int i = currentIndex + 1; i < n; i++) {
                if (nums[i] > lastValue && start[i] >= remaining) {
                    if (bestIndex == -1 || nums[i] < bestValue) {
                        bestIndex = i;
                        bestValue = nums[i];
                    }
                }
            }
            if (bestIndex == -1) break;
            result.add(nums[bestIndex]);
            lastValue = nums[bestIndex];
            currentIndex = bestIndex;
            remaining--;
        }
        return result;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        List<Integer> ans = lexicographicallySmallestLIS(nums);
        for (int i = 0; i < ans.size(); i++) {
            if (i > 0) System.out.print(" ");
            System.out.print(ans.get(i));
        }
        System.out.println();
    }
}`,
c: `#include <stdio.h>
#include <stdlib.h>
int* lexicographicallySmallestLIS(int *nums, int n, int *returnSize) {
    int *start = malloc(n * sizeof(int));
    int *result = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) start[i] = 1;
    for (int i = n - 1; i >= 0; i--) {
        for (int j = i + 1; j < n; j++) {
            if (nums[j] > nums[i] && start[j] + 1 > start[i])
                start[i] = start[j] + 1;
        }
    }
    int length = 0;
    for (int i = 0; i < n; i++)
        if (start[i] > length) length = start[i];
    int currentIndex = -1;
    int lastValue = 0;
    int hasLast = 0;
    int remaining = length;
    int count = 0;
    while (remaining > 0) {
        int bestIndex = -1;
        int bestValue = 0;
        for (int i = currentIndex + 1; i < n; i++) {
            if ((!hasLast || nums[i] > lastValue) && start[i] >= remaining) {
                if (bestIndex == -1 || nums[i] < bestValue) {
                    bestIndex = i;
                    bestValue = nums[i];
                }
            }
        }
        if (bestIndex == -1) break;
        result[count++] = nums[bestIndex];
        lastValue = nums[bestIndex];
        hasLast = 1;
        currentIndex = bestIndex;
        remaining--;
    }
    *returnSize = count;
    free(start);
    return result;
}
int main() {
    int n;
    scanf("%d", &n);
    int *nums = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    int size;
    int *ans = lexicographicallySmallestLIS(nums, n, &size);
    for (int i = 0; i < size; i++) {
        if (i) printf(" ");
        printf("%d", ans[i]);
    }
    printf("\\n");
    free(ans);
    free(nums);
    return 0;
}`,
cpp: `#include <iostream>
#include <vector>
#include <climits>
using namespace std;
vector<int> lexicographicallySmallestLIS(vector<int>& nums) {
    int n = nums.size();
    vector<int> start(n, 1);
    for (int i = n - 1; i >= 0; i--) {
        for (int j = i + 1; j < n; j++) {
            if (nums[j] > nums[i])
                start[i] = max(start[i], 1 + start[j]);
        }
    }
    int length = 0;
    for (int x : start) length = max(length, x);
    vector<int> result;
    int currentIndex = -1;
    int lastValue = 0;
    bool hasLast = false;
    int remaining = length;
    while (remaining > 0) {
        int bestIndex = -1;
        int bestValue = 0;
        for (int i = currentIndex + 1; i < n; i++) {
            if ((!hasLast || nums[i] > lastValue) && start[i] >= remaining) {
                if (bestIndex == -1 || nums[i] < bestValue) {
                    bestIndex = i;
                    bestValue = nums[i];
                }
            }
        }
        if (bestIndex == -1) break;
        result.push_back(nums[bestIndex]);
        lastValue = nums[bestIndex];
        hasLast = true;
        currentIndex = bestIndex;
        remaining--;
    }
    return result;
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int &x : nums) cin >> x;
    vector<int> ans = lexicographicallySmallestLIS(nums);
    for (int i = 0; i < (int)ans.size(); i++) {
        if (i) cout << " ";
        cout << ans[i];
    }
    cout << "\\n";
    return 0;
}`
},
'lis-h5': {
python: `from bisect import bisect_left
def lis_after_one_deletion(nums):
    tails = []
    for num in nums:
        pos = bisect_left(tails, num)
        if pos == len(tails):
            tails.append(num)
        else:
            tails[pos] = num
    return len(tails)
n = int(input())
nums = list(map(int, input().split()))
print(lis_after_one_deletion(nums))`,
java: `import java.util.*;
public class Main {
    public static int lisAfterOneDeletion(int[] nums) {
        ArrayList<Integer> tails = new ArrayList<>();
        for (int num : nums) {
            int low = 0, high = tails.size();
            while (low < high) {
                int mid = low + (high - low) / 2;
                if (tails.get(mid) >= num) high = mid;
                else low = mid + 1;
            }
            if (low == tails.size()) tails.add(num);
            else tails.set(low, num);
        }
        return tails.size();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(lisAfterOneDeletion(nums));
    }
}`,
c: `#include <stdio.h>
#include <stdlib.h>
int lowerBound(int *tails, int size, int value) {
    int low = 0, high = size;
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (tails[mid] >= value) high = mid;
        else low = mid + 1;
    }
    return low;
}
int lisAfterOneDeletion(int *nums, int n) {
    int *tails = malloc(n * sizeof(int));
    int size = 0;
    for (int i = 0; i < n; i++) {
        int pos = lowerBound(tails, size, nums[i]);
        tails[pos] = nums[i];
        if (pos == size) size++;
    }
    free(tails);
    return size;
}
int main() {
    int n;
    scanf("%d", &n);
    int *nums = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%d\\n", lisAfterOneDeletion(nums, n));
    free(nums);
    return 0;
}`,
cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int lisAfterOneDeletion(vector<int>& nums) {
    vector<int> tails;
    for (int num : nums) {
        auto it = lower_bound(tails.begin(), tails.end(), num);
        if (it == tails.end()) tails.push_back(num);
        else *it = num;
    }
    return (int)tails.size();
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int &x : nums) cin >> x;
    cout << lisAfterOneDeletion(nums) << "\\n";
    return 0;
}`
}
};