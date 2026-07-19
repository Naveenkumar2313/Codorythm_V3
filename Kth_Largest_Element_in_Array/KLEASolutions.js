export const KLEASolutions = {
    'kle-e1': {
  python: `import heapq
def kth_largest(nums, k):
    heap = []
    for num in nums:
        heapq.heappush(heap, num)
        if len(heap) > k:
            heapq.heappop(heap)
    return heap[0]

n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(kth_largest(nums, k))
`,

  java: `import java.util.*;
public class Main {
    public static int kthLargest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for (int num : nums) {
            minHeap.offer(num);
            if (minHeap.size() > k)
                minHeap.poll();
        }
        return minHeap.peek();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++)
            nums[i] = sc.nextInt();
        int k = sc.nextInt();
        System.out.println(kthLargest(nums, k));
        sc.close();
    }
}
`,

  c: `#include <stdio.h>
#include <stdlib.h>
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}
void heapify(int heap[], int size, int i) {
    int smallest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;
    if (left < size && heap[left] < heap[smallest])
        smallest = left;
    if (right < size && heap[right] < heap[smallest])
        smallest = right;
    if (smallest != i) {
        swap(&heap[i], &heap[smallest]);
        heapify(heap, size, smallest);
    }
}
void buildMinHeap(int heap[], int size) {
    for (int i = size / 2 - 1; i >= 0; i--)
        heapify(heap, size, i);
}
int kthLargest(int *nums, int numsSize, int k) {
    int *heap = (int *)malloc(k * sizeof(int));
    for (int i = 0; i < k; i++)
        heap[i] = nums[i];
    buildMinHeap(heap, k);
    for (int i = k; i < numsSize; i++) {
        if (nums[i] > heap[0]) {
            heap[0] = nums[i];
            heapify(heap, k, 0);
        }
    }
    int ans = heap[0];
    free(heap);
    return ans;
}
int main() {
    int n;
    scanf("%d", &n);
    int *nums = (int *)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++)
        scanf("%d", &nums[i]);
    int k;
    scanf("%d", &k);
    printf("%d\n", kthLargest(nums, n, k));
    free(nums);
    return 0;
}
`,

  cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
int kthLargest(vector<int>& nums, int k) {
    priority_queue<int, vector<int>, greater<int>> minHeap;
    for (int num : nums) {
        minHeap.push(num);
        if (minHeap.size() > k)
            minHeap.pop();
    }
    return minHeap.top();
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++)
        cin >> nums[i];
    int k;
    cin >> k;
    cout << kthLargest(nums, k);
    return 0;
}`
},'kle-e2': {
  python: `import heapq
def kth_largest_unique(nums, k):
    nums = list(set(nums))
    if len(nums) < k:
        return -1
    heap = []
    for num in nums:
        heapq.heappush(heap, num)
        if len(heap) > k:
            heapq.heappop(heap)
    return heap[0]
n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(kth_largest_unique(nums, k))
`,

  java: `import java.util.*;
public class Main {
    public static int kthLargestUnique(int[] nums, int k) {
        HashSet<Integer> set = new HashSet<>();
        for (int num : nums)
            set.add(num);
        if (set.size() < k)
            return -1;
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for (int num : set) {
            minHeap.offer(num);
            if (minHeap.size() > k)
                minHeap.poll();
        }
        return minHeap.peek();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++)
            nums[i] = sc.nextInt();
        int k = sc.nextInt();
        System.out.println(kthLargestUnique(nums, k));
        sc.close();
    }
}
`,

  c: `#include <stdio.h>
#include <stdlib.h>
int compare(const void *a, const void *b) {
    return (*(int *)b - *(int *)a);
}
int kthLargestUnique(int *nums, int numsSize, int k) {
    qsort(nums, numsSize, sizeof(int), compare);
    int count = 1;
    if (k == 1)
        return nums[0];
    for (int i = 1; i < numsSize; i++) {
        if (nums[i] != nums[i - 1]) {
            count++;
            if (count == k)
                return nums[i];
        }
    }
    return -1;
}
int main() {
    int n;
    scanf("%d", &n);
    int *nums = (int *)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++)
        scanf("%d", &nums[i]);
    int k;
    scanf("%d", &k);
    printf("%d\n", kthLargestUnique(nums, n, k));
    free(nums);
    return 0;
}
`,

  cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <unordered_set>
using namespace std;
int kthLargestUnique(vector<int>& nums, int k) {
    unordered_set<int> s(nums.begin(), nums.end());
    if ((int)s.size() < k)
        return -1;
    priority_queue<int, vector<int>, greater<int>> minHeap;
    for (int num : s) {
        minHeap.push(num);
        if (minHeap.size() > k)
            minHeap.pop();
    }
    return minHeap.top();
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++)
        cin >> nums[i];
    int k;
    cin >> k;
    cout << kthLargestUnique(nums, k);
    return 0;
}`
},'kle-e3': {
  python: `import heapq
def top_k_largest(nums, k):
    heap = []
    for num in nums:
        heapq.heappush(heap, num)
        if len(heap) > k:
            heapq.heappop(heap)
    return sorted(heap, reverse=True)
n = int(input())
nums = list(map(int, input().split()))
k = int(input())
result = top_k_largest(nums, k)
print(*result)
`,

  java: `import java.util.*;
public class Main {
    public static List<Integer> topKLargest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for (int num : nums) {
            minHeap.offer(num);
            if (minHeap.size() > k)
                minHeap.poll();
        }
        List<Integer> result = new ArrayList<>();
        while (!minHeap.isEmpty())
            result.add(minHeap.poll());
        Collections.reverse(result);
        return result;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++)
            nums[i] = sc.nextInt();
        int k = sc.nextInt();
        List<Integer> result = topKLargest(nums, k);
        for (int i = 0; i < result.size(); i++) {
            if (i > 0)
                System.out.print(" ");
            System.out.print(result.get(i));
        }
        sc.close();
    }
}
`,

  c: `#include <stdio.h>
#include <stdlib.h>
int compareDesc(const void *a, const void *b) {
    return (*(int *)b - *(int *)a);
}
void topKLargest(int *nums, int n, int k) {
    qsort(nums, n, sizeof(int), compareDesc);
    for (int i = 0; i < k; i++) {
        if (i)
            printf(" ");
        printf("%d", nums[i]);
    }
}
int main() {
    int n;
    scanf("%d", &n);
    int *nums = (int *)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++)
        scanf("%d", &nums[i]);
    int k;
    scanf("%d", &k);
    topKLargest(nums, n, k);
    free(nums);
    return 0;
}
`,

  cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;
vector<int> topKLargest(vector<int>& nums, int k) {
    priority_queue<int, vector<int>, greater<int>> minHeap;
    for (int num : nums) {
        minHeap.push(num);
        if (minHeap.size() > k)
            minHeap.pop();
    }
    vector<int> result;
    while (!minHeap.empty()) {
        result.push_back(minHeap.top());
        minHeap.pop();
    }
    reverse(result.begin(), result.end());
    return result;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++)
        cin >> nums[i];
    int k;
    cin >> k;
    vector<int> result = topKLargest(nums, k);
    for (int i = 0; i < result.size(); i++) {
        if (i)
            cout << " ";
        cout << result[i];
    }
    return 0;
}`
},'kle-e4': {
  python: `import heapq
def kth_smallest(nums, k):
    heap = []
    for num in nums:
        heapq.heappush(heap, -num)
        if len(heap) > k:
            heapq.heappop(heap)
    return -heap[0]
n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(kth_smallest(nums, k))
`,
  java: `import java.util.*;
public class Main {
    public static int kthSmallest(int[] nums, int k) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        for (int num : nums) {
            maxHeap.offer(num);
            if (maxHeap.size() > k)
                maxHeap.poll();
        }
        return maxHeap.peek();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++)
            nums[i] = sc.nextInt();
        int k = sc.nextInt();
        System.out.println(kthSmallest(nums, k));
        sc.close();
    }
}
`,
  c: `#include <stdio.h>
#include <stdlib.h>
int compareAsc(const void *a, const void *b) {
    return (*(int *)a - *(int *)b);
}
int kthSmallest(int *nums, int n, int k) {
    qsort(nums, n, sizeof(int), compareAsc);
    return nums[k - 1];
}
int main() {
    int n;
    scanf("%d", &n);
    int *nums = (int *)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++)
        scanf("%d", &nums[i]);
    int k;
    scanf("%d", &k);
    printf("%d\n", kthSmallest(nums, n, k));
    free(nums);
    return 0;
}
`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
int kthSmallest(vector<int>& nums, int k) {
    priority_queue<int> maxHeap;
    for (int num : nums) {
        maxHeap.push(num);
        if (maxHeap.size() > k)
            maxHeap.pop();
    }
    return maxHeap.top();
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++)
        cin >> nums[i];
    int k;
    cin >> k;
    cout << kthSmallest(nums, k);
    return 0;
}`
},'kle-e5': {
  python: `import heapq
def last_stone_weight(stones):
    heap = [-stone for stone in stones]
    heapq.heapify(heap)
    while len(heap) > 1:
        first = -heapq.heappop(heap)
        second = -heapq.heappop(heap)
        if first != second:
            heapq.heappush(heap, -(first - second))
    return -heap[0] if heap else 0
n = int(input())
stones = list(map(int, input().split()))
print(last_stone_weight(stones))
`,
  java: `import java.util.*;
public class Main {
    public static int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        for (int stone : stones)
            maxHeap.offer(stone);
        while (maxHeap.size() > 1) {
            int first = maxHeap.poll();
            int second = maxHeap.poll();
            if (first != second)
                maxHeap.offer(first - second);
        }
        return maxHeap.isEmpty() ? 0 : maxHeap.peek();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] stones = new int[n];
        for (int i = 0; i < n; i++)
            stones[i] = sc.nextInt();
        System.out.println(lastStoneWeight(stones));
        sc.close();
    }
}
`,

  c: `#include <stdio.h>
#include <stdlib.h>
int compareDesc(const void *a, const void *b) {
    return (*(int *)b - *(int *)a);
}
int lastStoneWeight(int *stones, int n) {
    while (n > 1) {
        qsort(stones, n, sizeof(int), compareDesc);
        int first = stones[0];
        int second = stones[1];
        if (first == second) {
            for (int i = 2; i < n; i++)
                stones[i - 2] = stones[i];
            n -= 2;
        } else {
            stones[0] = first - second;
            for (int i = 2; i < n; i++)
                stones[i - 1] = stones[i];
            n--;
        }
    }
    return n == 0 ? 0 : stones[0];
}
int main() {
    int n;
    scanf("%d", &n);
    int *stones = (int *)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++)
        scanf("%d", &stones[i]);
    printf("%d\n", lastStoneWeight(stones, n));
    free(stones);
    return 0;
}
`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
int lastStoneWeight(vector<int>& stones) {
    priority_queue<int> maxHeap;
    for (int stone : stones)
        maxHeap.push(stone);
    while (maxHeap.size() > 1) {
        int first = maxHeap.top();
        maxHeap.pop();
        int second = maxHeap.top();
        maxHeap.pop();
        if (first != second)
            maxHeap.push(first - second);
    }
    return maxHeap.empty() ? 0 : maxHeap.top();
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin >> n;
    vector<int> stones(n);
    for (int i = 0; i < n; i++)
        cin >> stones[i];
    cout << lastStoneWeight(stones);
    return 0;
}`
},'kle-m1': {
  python: `import heapq
def kth_largest_stream(stream, k):
    heap = []
    result = []
    for num in stream:
        heapq.heappush(heap, num)
        if len(heap) > k:
            heapq.heappop(heap)
        if len(heap) < k:
            result.append(-1)
        else:
            result.append(heap[0])
    return result
n = int(input())
k = int(input())
stream = list(map(int, input().split()))
result = kth_largest_stream(stream, k)
print(*result)
`,
  java: `import java.util.*;
public class Main {
    public static List<Integer> kthLargestStream(int[] stream, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        List<Integer> result = new ArrayList<>();
        for (int num : stream) {
            minHeap.offer(num);
            if (minHeap.size() > k)
                minHeap.poll();
            if (minHeap.size() < k)
                result.add(-1);
            else
                result.add(minHeap.peek());
        }
        return result;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int k = sc.nextInt();
        int[] stream = new int[n];
        for (int i = 0; i < n; i++)
            stream[i] = sc.nextInt();
        List<Integer> result = kthLargestStream(stream, k);
        for (int i = 0; i < result.size(); i++) {
            if (i > 0)
                System.out.print(" ");
            System.out.print(result.get(i));
        }
        sc.close();
    }
}
`,
  c: `#include <stdio.h>
#include <stdlib.h>
int compare(const void *a, const void *b) {
    return (*(int *)a - *(int *)b);
}
void kthLargestStream(int *stream, int n, int k) {
    int *arr = (int *)malloc(n * sizeof(int));
    int size = 0;
    for (int i = 0; i < n; i++) {
        arr[size++] = stream[i];
        qsort(arr, size, sizeof(int), compare);
        if (size < k)
            printf("-1");
        else
            printf("%d", arr[size - k]);
        if (i != n - 1)
            printf(" ");
    }
    free(arr);
}
int main() {
    int n, k;
    scanf("%d", &n);
    scanf("%d", &k);
    int *stream = (int *)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++)
        scanf("%d", &stream[i]);
    kthLargestStream(stream, n, k);
    free(stream);
    return 0;
}
`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
vector<int> kthLargestStream(vector<int>& stream, int k) {
    priority_queue<int, vector<int>, greater<int>> minHeap;
    vector<int> result;
    for (int num : stream) {
        minHeap.push(num);
        if (minHeap.size() > k)
            minHeap.pop();
        if (minHeap.size() < k)
            result.push_back(-1);
        else
            result.push_back(minHeap.top());
    }
    return result;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n, k;
    cin >> n >> k;
    vector<int> stream(n);
    for (int i = 0; i < n; i++)
        cin >> stream[i];
    vector<int> result = kthLargestStream(stream, k);
    for (int i = 0; i < result.size(); i++) {
        if (i)
            cout << " ";
        cout << result[i];
    }
    return 0;
}`
},'kle-m2': {
  python: `import heapq
def k_closest_numbers(nums, target, k):
    heap = []
    for num in nums:
        dist = abs(num - target)
        heapq.heappush(heap, (-dist, -num))
        if len(heap) > k:
            heapq.heappop(heap)
    result = []
    while heap:
        result.append(-heapq.heappop(heap)[1])
    return sorted(result)
n = int(input())
nums = list(map(int, input().split()))
target = int(input())
k = int(input())
result = k_closest_numbers(nums, target, k)
print(*result)
`,
  java: `import java.util.*;
public class Main {
    public static List<Integer> kClosestNumbers(int[] nums, int target, int k) {
        PriorityQueue<int[]> maxHeap = new PriorityQueue<>((a, b) -> {
            if (a[0] != b[0]) return b[0] - a[0];
            return b[1] - a[1];
        });
        for (int num : nums) {
            maxHeap.offer(new int[]{Math.abs(num - target), num});
            if (maxHeap.size() > k)
                maxHeap.poll();
        }
        List<Integer> result = new ArrayList<>();
        while (!maxHeap.isEmpty())
            result.add(maxHeap.poll()[1]);
        Collections.sort(result);
        return result;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++)
            nums[i] = sc.nextInt();
        int target = sc.nextInt();
        int k = sc.nextInt();
        List<Integer> result = kClosestNumbers(nums, target, k);
        for (int i = 0; i < result.size(); i++) {
            if (i > 0)
                System.out.print(" ");
            System.out.print(result.get(i));
        }
        sc.close();
    }
}
`,
  c: `#include <stdio.h>
#include <stdlib.h>
typedef struct {
    int value;
    int dist;
} Node;
int compare(const void *a, const void *b) {
    Node *x = (Node *)a;
    Node *y = (Node *)b;
    if (x->dist != y->dist)
        return x->dist - y->dist;
    return x->value - y->value;
}
void kClosestNumbers(int *nums, int n, int target, int k) {
    Node *arr = (Node *)malloc(n * sizeof(Node));
    for (int i = 0; i < n; i++) {
        arr[i].value = nums[i];
        arr[i].dist = abs(nums[i] - target);
    }
    qsort(arr, n, sizeof(Node), compare);
    int *ans = (int *)malloc(k * sizeof(int));
    for (int i = 0; i < k; i++)
        ans[i] = arr[i].value;
    int cmp(const void *a, const void *b) {
        return (*(int *)a - *(int *)b);
    }
    qsort(ans, k, sizeof(int), cmp);
    for (int i = 0; i < k; i++) {
        if (i)
            printf(" ");
        printf("%d", ans[i]);
    }
    free(ans);
    free(arr);
}
int main() {
    int n;
    scanf("%d", &n);
    int *nums = (int *)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++)
        scanf("%d", &nums[i]);
    int target, k;
    scanf("%d", &target);
    scanf("%d", &k);
    kClosestNumbers(nums, n, target, k);
    free(nums);
    return 0;
}
`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;
vector<int> kClosestNumbers(vector<int>& nums, int target, int k) {
    priority_queue<pair<int,int>> maxHeap;
    for (int num : nums) {
        maxHeap.push({abs(num - target), num});
        if (maxHeap.size() > k)
            maxHeap.pop();
    }
    vector<int> result;
    while (!maxHeap.empty()) {
        result.push_back(maxHeap.top().second);
        maxHeap.pop();
    }
    sort(result.begin(), result.end());
    return result;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++)
        cin >> nums[i];
    int target, k;
    cin >> target >> k;
    vector<int> result = kClosestNumbers(nums, target, k);
    for (int i = 0; i < result.size(); i++) {
        if (i)
            cout << " ";
        cout << result[i];
    }
    return 0;
}`
},'kle-m3': {
  python: `import heapq
def k_closest_points(points, k):
    heap = []
    for x, y in points:
        dist = x * x + y * y
        heapq.heappush(heap, (-dist, x, y))
        if len(heap) > k:
            heapq.heappop(heap)
    result = []
    while heap:
        _, x, y = heapq.heappop(heap)
        result.append((x, y))
    result.reverse()
    return result
n = int(input())
points = [tuple(map(int, input().split())) for _ in range(n)]
k = int(input())
result = k_closest_points(points, k)
for x, y in result:
    print(x, y)
`,
  java: `import java.util.*;
public class Main {
    public static List<int[]> kClosestPoints(int[][] points, int k) {
        PriorityQueue<int[]> maxHeap = new PriorityQueue<>((a, b) ->
            Integer.compare(b[0], a[0]));
        for (int[] p : points) {
            int dist = p[0] * p[0] + p[1] * p[1];
            maxHeap.offer(new int[]{dist, p[0], p[1]});
            if (maxHeap.size() > k)
                maxHeap.poll();
        }
        List<int[]> result = new ArrayList<>();
        while (!maxHeap.isEmpty()) {
            int[] cur = maxHeap.poll();
            result.add(new int[]{cur[1], cur[2]});
        }
        Collections.reverse(result);
        return result;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] points = new int[n][2];
        for (int i = 0; i < n; i++) {
            points[i][0] = sc.nextInt();
            points[i][1] = sc.nextInt();
        }
        int k = sc.nextInt();
        List<int[]> result = kClosestPoints(points, k);
        for (int[] p : result)
            System.out.println(p[0] + " " + p[1]);
        sc.close();
    }
}
`,
  c: `#include <stdio.h>
#include <stdlib.h>
typedef struct {
    int x;
    int y;
    int dist;
} Point;
int compare(const void *a, const void *b) {
    Point *p1 = (Point *)a;
    Point *p2 = (Point *)b;
    return p1->dist - p2->dist;
}
void kClosestPoints(Point *points, int n, int k) {
    qsort(points, n, sizeof(Point), compare);
    for (int i = 0; i < k; i++)
        printf("%d %d\n", points[i].x, points[i].y);
}
int main() {
    int n;
    scanf("%d", &n);
    Point *points = (Point *)malloc(n * sizeof(Point));
    for (int i = 0; i < n; i++) {
        scanf("%d%d", &points[i].x, &points[i].y);
        points[i].dist = points[i].x * points[i].x + points[i].y * points[i].y;
    }
    int k;
    scanf("%d", &k);
    kClosestPoints(points, n, k);
    free(points);
    return 0;
}
`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;
vector<pair<int,int>> kClosestPoints(vector<pair<int,int>>& points, int k) {
    priority_queue<pair<int,pair<int,int>>> maxHeap;
    for (auto &p : points) {
        int dist = p.first * p.first + p.second * p.second;
        maxHeap.push({dist, p});
        if (maxHeap.size() > k)
            maxHeap.pop();
    }
    vector<pair<int,int>> result;
    while (!maxHeap.empty()) {
        result.push_back(maxHeap.top().second);
        maxHeap.pop();
    }
    reverse(result.begin(), result.end());
    return result;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin >> n;
    vector<pair<int,int>> points(n);
    for (int i = 0; i < n; i++)
        cin >> points[i].first >> points[i].second;
    int k;
    cin >> k;
    vector<pair<int,int>> result = kClosestPoints(points, k);
    for (auto &p : result)
        cout << p.first << " " << p.second << "\n";
    return 0;
}`
},'kle-m4': {
  python: `import heapq
def kth_smallest_matrix(matrix, k):
    n = len(matrix)
    heap = []
    for i in range(n):
        heapq.heappush(heap, (matrix[i][0], i, 0))
    for _ in range(k - 1):
        val, r, c = heapq.heappop(heap)
        if c + 1 < n:
            heapq.heappush(heap, (matrix[r][c + 1], r, c + 1))
    return heapq.heappop(heap)[0]
n = int(input())
matrix = [list(map(int, input().split())) for _ in range(n)]
k = int(input())
print(kth_smallest_matrix(matrix, k))
`,
  java: `import java.util.*;
public class Main {
    public static int kthSmallestMatrix(int[][] matrix, int k) {
        int n = matrix.length;
        PriorityQueue<int[]> minHeap = new PriorityQueue<>(
            (a, b) -> Integer.compare(a[0], b[0])
        );
        for (int i = 0; i < n; i++)
            minHeap.offer(new int[]{matrix[i][0], i, 0});
        for (int i = 0; i < k - 1; i++) {
            int[] cur = minHeap.poll();
            int row = cur[1];
            int col = cur[2];
            if (col + 1 < n)
                minHeap.offer(new int[]{matrix[row][col + 1], row, col + 1});
        }
        return minHeap.poll()[0];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] matrix = new int[n][n];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                matrix[i][j] = sc.nextInt();
        int k = sc.nextInt();
        System.out.println(kthSmallestMatrix(matrix, k));
        sc.close();
    }
}
`,
  c: `#include <stdio.h>
#include <stdlib.h>
int compare(const void *a, const void *b) {
    return (*(int *)a - *(int *)b);
}
int kthSmallestMatrix(int matrix[][300], int n, int k) {
    int *arr = (int *)malloc(n * n * sizeof(int));
    int idx = 0;
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            arr[idx++] = matrix[i][j];
    qsort(arr, idx, sizeof(int), compare);
    int ans = arr[k - 1];
    free(arr);
    return ans;
}
int main() {
    int n;
    scanf("%d", &n);
    int matrix[300][300];
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            scanf("%d", &matrix[i][j]);
    int k;
    scanf("%d", &k);
    printf("%d\n", kthSmallestMatrix(matrix, n, k));
    return 0;
}
`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
int kthSmallestMatrix(vector<vector<int>>& matrix, int k) {
    int n = matrix.size();
    priority_queue<
        vector<int>,
        vector<vector<int>>,
        greater<vector<int>>
    > minHeap;
    for (int i = 0; i < n; i++)
        minHeap.push({matrix[i][0], i, 0});
    for (int i = 0; i < k - 1; i++) {
        auto cur = minHeap.top();
        minHeap.pop();
        int row = cur[1];
        int col = cur[2];
        if (col + 1 < n)
            minHeap.push({matrix[row][col + 1], row, col + 1});
    }
    return minHeap.top()[0];
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin >> n;
    vector<vector<int>> matrix(n, vector<int>(n));
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            cin >> matrix[i][j];
    int k;
    cin >> k;
    cout << kthSmallestMatrix(matrix, k);
    return 0;
}`
},'kle-m5': {
  python: `import heapq
from collections import Counter
def reorganize_string(s):
    freq = Counter(s)
    max_heap = [(-count, ch) for ch, count in freq.items()]
    heapq.heapify(max_heap)
    prev_count, prev_char = 0, ''
    result = []
    while max_heap:
        count, ch = heapq.heappop(max_heap)
        result.append(ch)
        if prev_count < 0:
            heapq.heappush(max_heap, (prev_count, prev_char))
        count += 1
        prev_count, prev_char = count, ch
    ans = ''.join(result)
    if len(ans) != len(s):
        return "-1"
    return ans
s = input().strip()
print(reorganize_string(s))
`,
  java: `import java.util.*;
public class Main {
    public static String reorganizeString(String s) {
        Map<Character, Integer> freq = new HashMap<>();
        for (char ch : s.toCharArray())
            freq.put(ch, freq.getOrDefault(ch, 0) + 1);
        PriorityQueue<int[]> maxHeap = new PriorityQueue<>(
            (a, b) -> b[0] - a[0]
        );
        for (Map.Entry<Character, Integer> entry : freq.entrySet())
            maxHeap.offer(new int[]{entry.getValue(), entry.getKey()});
        StringBuilder ans = new StringBuilder();
        int prevCount = 0;
        char prevChar = '#';
        while (!maxHeap.isEmpty()) {
            int[] cur = maxHeap.poll();
            ans.append((char) cur[1]);
            if (prevCount > 0)
                maxHeap.offer(new int[]{prevCount, prevChar});
            cur[0]--;
            prevCount = cur[0];
            prevChar = (char) cur[1];
        }
        if (ans.length() != s.length())
            return "-1";
        return ans.toString();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(reorganizeString(s));
        sc.close();
    }
}
`,
  c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int main() {
    char s[50005];
    scanf("%s", s);
    int freq[26] = {0};
    for (int i = 0; s[i]; i++)
        freq[s[i] - 'a']++;
    int n = strlen(s);
    char ans[50005];
    int idx = 0;
    while (idx < n) {
        int first = -1, second = -1;
        for (int i = 0; i < 26; i++) {
            if (freq[i] > 0 && (first == -1 || freq[i] > freq[first]))
                first = i;
        }
        if (first == -1)
            break;
        ans[idx++] = first + 'a';
        freq[first]--;
        if (idx == n)
            break;
        for (int i = 0; i < 26; i++) {
            if (freq[i] > 0 && i != first &&
                (second == -1 || freq[i] > freq[second]))
                second = i;
        }
        if (second == -1) {
            printf("-1");
            return 0;
        }
        ans[idx++] = second + 'a';
        freq[second]--;
    }
    ans[idx] = '\0';
    printf("%s", ans);
    return 0;
}
`,
  cpp: `#include <iostream>
#include <queue>
#include <unordered_map>
using namespace std;
string reorganizeString(string s) {
    unordered_map<char, int> freq;
    for (char ch : s)
        freq[ch]++;
    priority_queue<pair<int, char>> maxHeap;
    for (auto &p : freq)
        maxHeap.push({p.second, p.first});
    string ans = "";
    pair<int, char> prev = {0, '#'};
    while (!maxHeap.empty()) {
        auto cur = maxHeap.top();
        maxHeap.pop();
        ans += cur.second;
        cur.first--;
        if (prev.first > 0)
            maxHeap.push(prev);
        prev = cur;
    }
    if (ans.size() != s.size())
        return "-1";
    return ans;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    string s;
    cin >> s;
    cout << reorganizeString(s);
    return 0;
}`
},'kle-h1': {
  python: `import heapq
def merge_k_sorted_arrays(arrays):
    heap = []
    result = []
    for i, arr in enumerate(arrays):
        if arr:
            heapq.heappush(heap, (arr[0], i, 0))
    while heap:
        val, row, idx = heapq.heappop(heap)
        result.append(val)
        if idx + 1 < len(arrays[row]):
            heapq.heappush(heap, (arrays[row][idx + 1], row, idx + 1))
    return result
k = int(input())
arrays = []
for _ in range(k):
    n = int(input())
    arrays.append(list(map(int, input().split())))
result = merge_k_sorted_arrays(arrays)
print(*result)
`,
  java: `import java.util.*;
public class Main {
    public static List<Integer> mergeKSortedArrays(List<int[]> arrays) {
        PriorityQueue<int[]> minHeap = new PriorityQueue<>((a, b) -> Integer.compare(a[0], b[0]));
        List<Integer> result = new ArrayList<>();
        for (int i = 0; i < arrays.size(); i++) {
            if (arrays.get(i).length > 0)
                minHeap.offer(new int[]{arrays.get(i)[0], i, 0});
        }
        while (!minHeap.isEmpty()) {
            int[] cur = minHeap.poll();
            result.add(cur[0]);
            int row = cur[1], col = cur[2];
            if (col + 1 < arrays.get(row).length)
                minHeap.offer(new int[]{arrays.get(row)[col + 1], row, col + 1});
        }
        return result;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int k = sc.nextInt();
        List<int[]> arrays = new ArrayList<>();
        for (int i = 0; i < k; i++) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int j = 0; j < n; j++)
                arr[j] = sc.nextInt();
            arrays.add(arr);
        }
        List<Integer> result = mergeKSortedArrays(arrays);
        for (int i = 0; i < result.size(); i++) {
            if (i > 0)
                System.out.print(" ");
            System.out.print(result.get(i));
        }
        sc.close();
    }
}
`,
  c: `#include <stdio.h>
#include <stdlib.h>
int compare(const void *a,const void *b){
    return (*(int*)a-*(int*)b);
}
int main(){
    int k;
    scanf("%d",&k);
    int total=0;
    int *arr=(int*)malloc(100000*sizeof(int));
    for(int i=0;i<k;i++){
        int n;
        scanf("%d",&n);
        for(int j=0;j<n;j++)
            scanf("%d",&arr[total++]);
    }
    qsort(arr,total,sizeof(int),compare);
    for(int i=0;i<total;i++){
        if(i) printf(" ");
        printf("%d",arr[i]);
    }
    free(arr);
    return 0;
}
`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
vector<int> mergeKSortedArrays(vector<vector<int>>& arrays){
    priority_queue<vector<int>,vector<vector<int>>,greater<vector<int>>> minHeap;
    vector<int> result;
    for(int i=0;i<arrays.size();i++)
        if(!arrays[i].empty())
            minHeap.push({arrays[i][0],i,0});
    while(!minHeap.empty()){
        auto cur=minHeap.top();
        minHeap.pop();
        int val=cur[0];
        int row=cur[1];
        int col=cur[2];
        result.push_back(val);
        if(col+1<arrays[row].size())
            minHeap.push({arrays[row][col+1],row,col+1});
    }
    return result;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int k;
    cin>>k;
    vector<vector<int>> arrays(k);
    for(int i=0;i<k;i++){
        int n;
        cin>>n;
        arrays[i].resize(n);
        for(int j=0;j<n;j++)
            cin>>arrays[i][j];
    }
    vector<int> result=mergeKSortedArrays(arrays);
    for(int i=0;i<result.size();i++){
        if(i) cout<<" ";
        cout<<result[i];
    }
    return 0;
}
`
},'kle-h2': {
  python: `import heapq
def merge_k_lists(lists):
    heap=[]
    result=[]
    for i,lst in enumerate(lists):
        if lst:
            heapq.heappush(heap,(lst[0],i,0))
    while heap:
        val,row,idx=heapq.heappop(heap)
        result.append(val)
        if idx+1<len(lists[row]):
            heapq.heappush(heap,(lists[row][idx+1],row,idx+1))
    return result
k=int(input())
lists=[]
for _ in range(k):
    n=int(input())
    if n:
        lists.append(list(map(int,input().split())))
    else:
        lists.append([])
result=merge_k_lists(lists)
print(*result)
`,
  java: `import java.util.*;
public class Main{
    public static List<Integer> mergeKLists(List<int[]> lists){
        PriorityQueue<int[]> pq=new PriorityQueue<>((a,b)->Integer.compare(a[0],b[0]));
        List<Integer> ans=new ArrayList<>();
        for(int i=0;i<lists.size();i++)
            if(lists.get(i).length>0)
                pq.offer(new int[]{lists.get(i)[0],i,0});
        while(!pq.isEmpty()){
            int[] cur=pq.poll();
            ans.add(cur[0]);
            int r=cur[1],c=cur[2];
            if(c+1<lists.get(r).length)
                pq.offer(new int[]{lists.get(r)[c+1],r,c+1});
        }
        return ans;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int k=sc.nextInt();
        List<int[]> lists=new ArrayList<>();
        for(int i=0;i<k;i++){
            int n=sc.nextInt();
            int[] arr=new int[n];
            for(int j=0;j<n;j++) arr[j]=sc.nextInt();
            lists.add(arr);
        }
        List<Integer> ans=mergeKLists(lists);
        for(int i=0;i<ans.size();i++){
            if(i>0) System.out.print(" ");
            System.out.print(ans.get(i));
        }
        sc.close();
    }
}
`,
  c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a,const void *b){
    return (*(int*)a-*(int*)b);
}
int main(){
    int k;
    scanf("%d",&k);
    int *arr=(int*)malloc(100000*sizeof(int));
    int total=0;
    for(int i=0;i<k;i++){
        int n;
        scanf("%d",&n);
        for(int j=0;j<n;j++)
            scanf("%d",&arr[total++]);
    }
    qsort(arr,total,sizeof(int),cmp);
    for(int i=0;i<total;i++){
        if(i) printf(" ");
        printf("%d",arr[i]);
    }
    free(arr);
    return 0;
}
`,

  cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
vector<int> mergeKLists(vector<vector<int>>& lists){
    priority_queue<vector<int>,vector<vector<int>>,greater<vector<int>>> pq;
    vector<int> ans;
    for(int i=0;i<lists.size();i++)
        if(!lists[i].empty())
            pq.push({lists[i][0],i,0});
    while(!pq.empty()){
        auto cur=pq.top();
        pq.pop();
        int val=cur[0],r=cur[1],c=cur[2];
        ans.push_back(val);
        if(c+1<lists[r].size())
            pq.push({lists[r][c+1],r,c+1});
    }
    return ans;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int k;
    cin>>k;
    vector<vector<int>> lists(k);
    for(int i=0;i<k;i++){
        int n;
        cin>>n;
        lists[i].resize(n);
        for(int j=0;j<n;j++)
            cin>>lists[i][j];
    }
    vector<int> ans=mergeKLists(lists);
    for(int i=0;i<ans.size();i++){
        if(i) cout<<" ";
        cout<<ans[i];
    }
    return 0;
}`
},'kle-h3': {
  python: `import heapq
def running_median(stream):
    left=[]
    right=[]
    result=[]
    for num in stream:
        if not left or num<=-left[0]:
            heapq.heappush(left,-num)
        else:
            heapq.heappush(right,num)
        if len(left)>len(right)+1:
            heapq.heappush(right,-heapq.heappop(left))
        elif len(right)>len(left):
            heapq.heappush(left,-heapq.heappop(right))
        if len(left)==len(right):
            result.append(((-left[0]+right[0])/2))
        else:
            result.append(float(-left[0]))
    return result
n=int(input())
stream=list(map(int,input().split()))
result=running_median(stream)
print(*[f"{x:.1f}" for x in result])
`,
  java: `import java.util.*;
public class Main{
    public static List<Double> runningMedian(int[] stream){
        PriorityQueue<Integer> left=new PriorityQueue<>(Collections.reverseOrder());
        PriorityQueue<Integer> right=new PriorityQueue<>();
        List<Double> ans=new ArrayList<>();
        for(int num:stream){
            if(left.isEmpty()||num<=left.peek()) left.offer(num);
            else right.offer(num);
            if(left.size()>right.size()+1) right.offer(left.poll());
            else if(right.size()>left.size()) left.offer(right.poll());
            if(left.size()==right.size())
                ans.add((left.peek()+right.peek())/2.0);
            else
                ans.add((double)left.peek());
        }
        return ans;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int[] stream=new int[n];
        for(int i=0;i<n;i++) stream[i]=sc.nextInt();
        List<Double> ans=runningMedian(stream);
        for(int i=0;i<ans.size();i++){
            if(i>0) System.out.print(" ");
            System.out.printf("%.1f",ans.get(i));
        }
        sc.close();
    }
}
`,

  c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a,const void *b){
    return (*(int*)a-*(int*)b);
}
int main(){
    int n;
    scanf("%d",&n);
    int *arr=(int*)malloc(n*sizeof(int));
    int *temp=(int*)malloc(n*sizeof(int));
    int size=0;
    for(int i=0;i<n;i++){
        scanf("%d",&arr[size++]);
        for(int j=0;j<size;j++) temp[j]=arr[j];
        qsort(temp,size,sizeof(int),cmp);
        if(size%2)
            printf("%.1f",(double)temp[size/2]);
        else
            printf("%.1f",(temp[size/2-1]+temp[size/2])/2.0);
        if(i!=n-1) printf(" ");
    }
    free(arr);
    free(temp);
    return 0;
}
`,

  cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <iomanip>
using namespace std;
vector<double> runningMedian(vector<int>& stream){
    priority_queue<int> left;
    priority_queue<int,vector<int>,greater<int>> right;
    vector<double> ans;
    for(int num:stream){
        if(left.empty()||num<=left.top()) left.push(num);
        else right.push(num);
        if(left.size()>right.size()+1){
            right.push(left.top());
            left.pop();
        }else if(right.size()>left.size()){
            left.push(right.top());
            right.pop();
        }
        if(left.size()==right.size())
            ans.push_back((left.top()+right.top())/2.0);
        else
            ans.push_back(left.top());
    }
    return ans;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin>>n;
    vector<int> stream(n);
    for(int i=0;i<n;i++) cin>>stream[i];
    vector<double> ans=runningMedian(stream);
    cout<<fixed<<setprecision(1);
    for(int i=0;i<ans.size();i++){
        if(i) cout<<" ";
        cout<<ans[i];
    }
    return 0;
}`
},'kle-h4': {
  python: `import heapq
def k_max_pair_sums(a,b,k):
    a.sort(reverse=True)
    b.sort(reverse=True)
    heap=[(-(a[0]+b[0]),0,0)]
    visited={(0,0)}
    ans=[]
    while heap and len(ans)<k:
        s,i,j=heapq.heappop(heap)
        ans.append(-s)
        if i+1<len(a) and (i+1,j) not in visited:
            heapq.heappush(heap, (-(a[i+1]+b[j]), i+1, j))
            visited.add((i+1,j))
        if j+1<len(b) and (i,j+1) not in visited:
            heapq.heappush(heap, (-(a[i]+b[j+1]), i, j+1))
            visited.add((i,j+1))
    return ans
n=int(input())
a=list(map(int,input().split()))
b=list(map(int,input().split()))
k=int(input())
print(*k_max_pair_sums(a,b,k))
`,
  java: `import java.util.*;
public class Main{
    static class Node{
        int sum,i,j;
        Node(int sum,int i,int j){
            this.sum=sum;
            this.i=i;
            this.j=j;
        }
    }
    public static List<Integer> kMaxPairSums(int[] a,int[] b,int k){
        Arrays.sort(a);
        Arrays.sort(b);
        reverse(a);
        reverse(b);
        PriorityQueue<Node> pq=new PriorityQueue<>((x,y)->y.sum-x.sum);
        HashSet<String> vis=new HashSet<>();
        List<Integer> ans=new ArrayList<>();
        pq.offer(new Node(a[0]+b[0],0,0));
        vis.add("0#0");
        while(!pq.isEmpty()&&ans.size()<k){
            Node cur=pq.poll();
            ans.add(cur.sum);
            if(cur.i+1<a.length&&vis.add((cur.i+1)+"#"+cur.j))
                pq.offer(new Node(a[cur.i+1]+b[cur.j],cur.i+1,cur.j));
            if(cur.j+1<b.length&&vis.add(cur.i+"#"+(cur.j+1)))
                pq.offer(new Node(a[cur.i]+b[cur.j+1],cur.i,cur.j+1));
        }
        return ans;
    }
    static void reverse(int[] arr){
        for(int i=0,j=arr.length-1;i<j;i++,j--){
            int t=arr[i];
            arr[i]=arr[j];
            arr[j]=t;
        }
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int[] a=new int[n];
        int[] b=new int[n];
        for(int i=0;i<n;i++) a[i]=sc.nextInt();
        for(int i=0;i<n;i++) b[i]=sc.nextInt();
        int k=sc.nextInt();
        List<Integer> ans=kMaxPairSums(a,b,k);
        for(int i=0;i<ans.size();i++){
            if(i>0) System.out.print(" ");
            System.out.print(ans.get(i));
        }
        sc.close();
    }
}
`,

  c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a,const void *b){
    return *(int*)b-*(int*)a;
}
int main(){
    int n,k;
    scanf("%d",&n);
    int *a=(int*)malloc(n*sizeof(int));
    int *b=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&a[i]);
    for(int i=0;i<n;i++) scanf("%d",&b[i]);
    scanf("%d",&k);
    qsort(a,n,sizeof(int),cmp);
    qsort(b,n,sizeof(int),cmp);
    int *sum=(int*)malloc(n*n*sizeof(int));
    int idx=0;
    for(int i=0;i<n;i++)
        for(int j=0;j<n;j++)
            sum[idx++]=a[i]+b[j];
    qsort(sum,idx,sizeof(int),cmp);
    for(int i=0;i<k;i++){
        if(i) printf(" ");
        printf("%d",sum[i]);
    }
    free(a);
    free(b);
    free(sum);
    return 0;
}
`,

  cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <set>
#include <algorithm>
using namespace std;
vector<int> kMaxPairSums(vector<int>& a,vector<int>& b,int k){
    sort(a.rbegin(),a.rend());
    sort(b.rbegin(),b.rend());
    priority_queue<vector<int>> pq;
    set<pair<int,int>> vis;
    vector<int> ans;
    pq.push({a[0]+b[0],0,0});
    vis.insert({0,0});
    while(!pq.empty()&&ans.size()<k){
        auto cur=pq.top();
        pq.pop();
        int sum=cur[0],i=cur[1],j=cur[2];
        ans.push_back(sum);
        if(i+1<a.size()&&!vis.count({i+1,j})){
            pq.push({a[i+1]+b[j],i+1,j});
            vis.insert({i+1,j});
        }
        if(j+1<b.size()&&!vis.count({i,j+1})){
            pq.push({a[i]+b[j+1],i,j+1});
            vis.insert({i,j+1});
        }
    }
    return ans;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n,k;
    cin>>n;
    vector<int> a(n),b(n);
    for(int i=0;i<n;i++) cin>>a[i];
    for(int i=0;i<n;i++) cin>>b[i];
    cin>>k;
    vector<int> ans=kMaxPairSums(a,b,k);
    for(int i=0;i<ans.size();i++){
        if(i) cout<<" ";
        cout<<ans[i];
    }
    return 0;
}`
},'kle-h5': {
  python: `import heapq
from collections import defaultdict
def sliding_window_median(nums,k):
    small=[]
    large=[]
    delayed=defaultdict(int)
    small_size=0
    large_size=0
    def prune(heap):
        while heap:
            num=-heap[0] if heap is small else heap[0]
            if delayed[num]:
                delayed[num]-=1
                if delayed[num]==0:
                    del delayed[num]
                heapq.heappop(heap)
            else:
                break
    def balance():
        nonlocal small_size,large_size
        if small_size>large_size+1:
            heapq.heappush(large,-heapq.heappop(small))
            small_size-=1
            large_size+=1
            prune(small)
        elif small_size<large_size:
            heapq.heappush(small,-heapq.heappop(large))
            small_size+=1
            large_size-=1
            prune(large)
    result=[]
    for i,num in enumerate(nums):
        if not small or num<=-small[0]:
            heapq.heappush(small,-num)
            small_size+=1
        else:
            heapq.heappush(large,num)
            large_size+=1
        balance()
        if i>=k:
            out=nums[i-k]
            delayed[out]+=1
            if out<=-small[0]:
                small_size-=1
                if out==-small[0]:
                    prune(small)
            else:
                large_size-=1
                if large and out==large[0]:
                    prune(large)
            balance()
        if i>=k-1:
            if k%2:
                result.append(float(-small[0]))
            else:
                result.append((-small[0]+large[0])/2)
    return result
n=int(input())
nums=list(map(int,input().split()))
k=int(input())
ans=sliding_window_median(nums,k)
print(*[f"{x:.1f}" for x in ans])
`,
  java: `import java.util.*;
public class Main{
    public static List<Double> slidingWindowMedian(int[] nums,int k){
        List<Double> ans=new ArrayList<>();
        for(int i=0;i+k<=nums.length;i++){
            int[] temp=Arrays.copyOfRange(nums,i,i+k);
            Arrays.sort(temp);
            if(k%2==1)
                ans.add((double)temp[k/2]);
            else
                ans.add((temp[k/2-1]+temp[k/2])/2.0);
        }
        return ans;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int[] nums=new int[n];
        for(int i=0;i<n;i++) nums[i]=sc.nextInt();
        int k=sc.nextInt();
        List<Double> ans=slidingWindowMedian(nums,k);
        for(int i=0;i<ans.size();i++){
            if(i>0) System.out.print(" ");
            System.out.printf("%.1f",ans.get(i));
        }
        sc.close();
    }
}
`,

  c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a,const void *b){
    return (*(int*)a-*(int*)b);
}
int main(){
    int n,k;
    scanf("%d",&n);
    int *nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    scanf("%d",&k);
    int *temp=(int*)malloc(k*sizeof(int));
    for(int i=0;i+k<=n;i++){
        for(int j=0;j<k;j++) temp[j]=nums[i+j];
        qsort(temp,k,sizeof(int),cmp);
        if(i) printf(" ");
        if(k%2)
            printf("%.1f",(double)temp[k/2]);
        else
            printf("%.1f",(temp[k/2-1]+temp[k/2])/2.0);
    }
    free(nums);
    free(temp);
    return 0;
}
`,
  cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <iomanip>
using namespace std;
vector<double> slidingWindowMedian(vector<int>& nums,int k){
    vector<double> ans;
    for(int i=0;i+k<=nums.size();i++){
        vector<int> temp(nums.begin()+i,nums.begin()+i+k);
        sort(temp.begin(),temp.end());
        if(k&1)
            ans.push_back(temp[k/2]);
        else
            ans.push_back((temp[k/2-1]+temp[k/2])/2.0);
    }
    return ans;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n,k;
    cin>>n;
    vector<int> nums(n);
    for(int i=0;i<n;i++) cin>>nums[i];
    cin>>k;
    vector<double> ans=slidingWindowMedian(nums,k);
    cout<<fixed<<setprecision(1);
    for(int i=0;i<ans.size();i++){
        if(i) cout<<" ";
        cout<<ans[i];
    }
    return 0;
}
`
}
};