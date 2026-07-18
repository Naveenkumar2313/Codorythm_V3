export const KSEsolutions = {
  // --- EASY ---
  'kse-e1': {
    python: `def kth_smallest(nums, k):
    return nums[k - 1]

n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(kth_smallest(nums, k))`,
    java: `import java.util.*;

public class Solution {
    public static int kthSmallest(int[] nums, int k) {
        return nums[k - 1];
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
            System.out.println(kthSmallest(nums, k));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int kthSmallest(int* nums, int numsSize, int k) {
    return nums[k - 1];
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
    printf("%d\\n", kthSmallest(nums, n, k));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int kthSmallest(vector<int>& nums, int k) {
    return nums[k - 1];
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
        cout << kthSmallest(nums, k) << "\\n";
    }
    return 0;
}`
  },
  'kse-e2': {
    python: `def kth_smallest(nums, k):
    nums.sort()
    return nums[k - 1]

n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(kth_smallest(nums, k))`,
    java: `import java.util.*;

public class Solution {
    public static int kthSmallest(int[] nums, int k) {
        Arrays.sort(nums);
        return nums[k - 1];
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
            System.out.println(kthSmallest(nums, k));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int cmp(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int kthSmallest(int* nums, int numsSize, int k) {
    qsort(nums, numsSize, sizeof(int), cmp);
    return nums[k - 1];
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
    printf("%d\\n", kthSmallest(nums, n, k));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int kthSmallest(vector<int>& nums, int k) {
    sort(nums.begin(), nums.end());
    return nums[k - 1];
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
        cout << kthSmallest(nums, k) << "\\n";
    }
    return 0;
}`
  },
  'kse-e3': {
    python: `def kth_smallest(nums, k):
    nums.sort()
    return nums[k - 1]

n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(kth_smallest(nums, k))`,
    java: `import java.util.*;

public class Solution {
    public static int kthSmallest(int[] nums, int k) {
        Arrays.sort(nums);
        return nums[k - 1];
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
            System.out.println(kthSmallest(nums, k));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int cmp(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int kthSmallest(int* nums, int numsSize, int k) {
    qsort(nums, numsSize, sizeof(int), cmp);
    return nums[k - 1];
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
    printf("%d\\n", kthSmallest(nums, n, k));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int kthSmallest(vector<int>& nums, int k) {
    sort(nums.begin(), nums.end());
    return nums[k - 1];
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
        cout << kthSmallest(nums, k) << "\\n";
    }
    return 0;
}`
  },
  'kse-e4': {
    python: `import heapq

def kth_smallest(nums, k):
    heapq.heapify(nums)
    for _ in range(k - 1):
        heapq.heappop(nums)
    return heapq.heappop(nums)

n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(kth_smallest(nums, k))`,
    java: `import java.util.*;

public class Solution {
    public static int kthSmallest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for (int num : nums) {
            minHeap.offer(num);
        }
        for (int i = 0; i < k - 1; i++) {
            minHeap.poll();
        }
        return minHeap.poll();
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
            System.out.println(kthSmallest(nums, k));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void swap(int* a, int* b) {
    int t = *a;
    *a = *b;
    *b = t;
}

void heapify(int* heap, int size, int i) {
    int smallest = i;
    int l = 2 * i + 1;
    int r = 2 * i + 2;
    if (l < size && heap[l] < heap[smallest]) smallest = l;
    if (r < size && heap[r] < heap[smallest]) smallest = r;
    if (smallest != i) {
        swap(&heap[i], &heap[smallest]);
        heapify(heap, size, smallest);
    }
}

int pop(int* heap, int* size) {
    int root = heap[0];
    heap[0] = heap[--(*size)];
    heapify(heap, *size, 0);
    return root;
}

void buildHeap(int* heap, int size) {
    for (int i = size / 2 - 1; i >= 0; i--)
        heapify(heap, size, i);
}

int kthSmallest(int* nums, int numsSize, int k) {
    int* heap = (int*)malloc(numsSize * sizeof(int));
    memcpy(heap, nums, numsSize * sizeof(int));
    int size = numsSize;
    buildHeap(heap, size);
    for (int i = 0; i < k - 1; i++) {
        pop(heap, &size);
    }
    int ans = heap[0];
    free(heap);
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
    printf("%d\\n", kthSmallest(nums, n, k));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>

using namespace std;

int kthSmallest(vector<int>& nums, int k) {
    priority_queue<int, vector<int>, greater<int>> minHeap;
    for (int num : nums) {
        minHeap.push(num);
    }
    for (int i = 0; i < k - 1; i++) {
        minHeap.pop();
    }
    return minHeap.top();
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
        cout << kthSmallest(nums, k) << "\\n";
    }
    return 0;
}`
  },
  'kse-e5': {
    python: `def kth_smallest(nums, k, max_val):
    freq = [0] * (max_val + 1)
    for num in nums:
        freq[num] += 1
    count = 0
    for val in range(1, max_val + 1):
        count += freq[val]
        if count >= k:
            return val
    return -1

n = int(input())
nums = list(map(int, input().split()))
k = int(input())
max_val = int(input())
print(kth_smallest(nums, k, max_val))`,
    java: `import java.util.*;

public class Solution {
    public static int kthSmallest(int[] nums, int k, int maxVal) {
        int[] freq = new int[maxVal + 1];
        for (int num : nums) {
            freq[num]++;
        }
        int count = 0;
        for (int val = 1; val <= maxVal; val++) {
            count += freq[val];
            if (count >= k) {
                return val;
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
            int k = sc.nextInt();
            int maxVal = sc.nextInt();
            System.out.println(kthSmallest(nums, k, maxVal));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int kthSmallest(int* nums, int numsSize, int k, int maxVal) {
    int* freq = (int*)calloc(maxVal + 1, sizeof(int));
    for (int i = 0; i < numsSize; i++) {
        freq[nums[i]]++;
    }
    int count = 0;
    for (int val = 1; val <= maxVal; val++) {
        count += freq[val];
        if (count >= k) {
            free(freq);
            return val;
        }
    }
    free(freq);
    return -1;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int k, maxVal;
    if (scanf("%d %d", &k, &maxVal) != 2) return 0;
    printf("%d\\n", kthSmallest(nums, n, k, maxVal));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int kthSmallest(vector<int>& nums, int k, int maxVal) {
    vector<int> freq(maxVal + 1, 0);
    for (int num : nums) {
        freq[num]++;
    }
    int count = 0;
    for (int val = 1; val <= maxVal; val++) {
        count += freq[val];
        if (count >= k) {
            return val;
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
        int k, maxVal;
        cin >> k >> maxVal;
        cout << kthSmallest(nums, k, maxVal) << "\\n";
    }
    return 0;
}`
  },

  // --- MEDIUM ---
  'kse-m1': {
    python: `def kth_smallest(nums, k):
    def partition(l, r):
        pivot = nums[r]
        i = l
        for j in range(l, r):
            if nums[j] <= pivot:
                nums[i], nums[j] = nums[j], nums[i]
                i += 1
        nums[i], nums[r] = nums[r], nums[i]
        return i
    
    l, r = 0, len(nums) - 1
    k = k - 1
    while l <= r:
        pos = partition(l, r)
        if pos == k:
            return nums[pos]
        elif pos < k:
            l = pos + 1
        else:
            r = pos - 1
    return -1

n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(kth_smallest(nums, k))`,
    java: `import java.util.*;

public class Solution {
    private static int partition(int[] nums, int l, int r) {
        int pivot = nums[r];
        int i = l;
        for (int j = l; j < r; j++) {
            if (nums[j] <= pivot) {
                int temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                i++;
            }
        }
        int temp = nums[i];
        nums[i] = nums[r];
        nums[r] = temp;
        return i;
    }

    public static int kthSmallest(int[] nums, int k) {
        int l = 0, r = nums.length - 1;
        k = k - 1;
        while (l <= r) {
            int pos = partition(nums, l, r);
            if (pos == k) return nums[pos];
            if (pos < k) l = pos + 1;
            else r = pos - 1;
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
            int k = sc.nextInt();
            System.out.println(kthSmallest(nums, k));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int partition(int* nums, int l, int r) {
    int pivot = nums[r];
    int i = l;
    for (int j = l; j < r; j++) {
        if (nums[j] <= pivot) {
            int temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
        }
    }
    int temp = nums[i];
    nums[i] = nums[r];
    nums[r] = temp;
    return i;
}

int kthSmallest(int* nums, int numsSize, int k) {
    int l = 0, r = numsSize - 1;
    k = k - 1;
    while (l <= r) {
        int pos = partition(nums, l, r);
        if (pos == k) return nums[pos];
        if (pos < k) l = pos + 1;
        else r = pos - 1;
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
    int k;
    if (scanf("%d", &k) != 1) return 0;
    printf("%d\\n", kthSmallest(nums, n, k));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int partition(vector<int>& nums, int l, int r) {
    int pivot = nums[r];
    int i = l;
    for (int j = l; j < r; j++) {
        if (nums[j] <= pivot) {
            swap(nums[i], nums[j]);
            i++;
        }
    }
    swap(nums[i], nums[r]);
    return i;
}

int kthSmallest(vector<int>& nums, int k) {
    int l = 0, r = nums.size() - 1;
    k = k - 1;
    while (l <= r) {
        int pos = partition(nums, l, r);
        if (pos == k) return nums[pos];
        if (pos < k) l = pos + 1;
        else r = pos - 1;
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
        int k;
        cin >> k;
        cout << kthSmallest(nums, k) << "\\n";
    }
    return 0;
}`
  },
  'kse-m2': {
    python: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def build_tree(arr, idx):
    if idx >= len(arr) or arr[idx] == -1:
        return None
    node = TreeNode(arr[idx])
    node.left = build_tree(arr, 2 * idx + 1)
    node.right = build_tree(arr, 2 * idx + 2)
    return node

def kth_smallest(root, k):
    stack = []
    curr = root
    while stack or curr:
        while curr:
            stack.append(curr)
            curr = curr.left
        curr = stack.pop()
        k -= 1
        if k == 0:
            return curr.val
        curr = curr.right
    return -1

n = int(input())
arr = list(map(int, input().split()))
k = int(input())
root = build_tree(arr, 0)
print(kth_smallest(root, k))`,
    java: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int v) { val = v; }
}

public class Solution {
    private static TreeNode buildTree(int[] arr, int idx) {
        if (idx >= arr.length || arr[idx] == -1) return null;
        TreeNode node = new TreeNode(arr[idx]);
        node.left = buildTree(arr, 2 * idx + 1);
        node.right = buildTree(arr, 2 * idx + 2);
        return node;
    }

    public static int kthSmallest(TreeNode root, int k) {
        Stack<TreeNode> stack = new Stack<>();
        TreeNode curr = root;
        while (!stack.isEmpty() || curr != null) {
            while (curr != null) {
                stack.push(curr);
                curr = curr.left;
            }
            curr = stack.pop();
            k--;
            if (k == 0) return curr.val;
            curr = curr.right;
        }
        return -1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }
            int k = sc.nextInt();
            TreeNode root = buildTree(arr, 0);
            System.out.println(kthSmallest(root, k));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode* left;
    struct TreeNode* right;
};

struct TreeNode* createNode(int v) {
    struct TreeNode* node = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    node->val = v;
    node->left = NULL;
    node->right = NULL;
    return node;
}

struct TreeNode* buildTree(int* arr, int n, int idx) {
    if (idx >= n || arr[idx] == -1) return NULL;
    struct TreeNode* node = createNode(arr[idx]);
    node->left = buildTree(arr, n, 2 * idx + 1);
    node->right = buildTree(arr, n, 2 * idx + 2);
    return node;
}

struct StackNode {
    struct TreeNode* node;
    struct StackNode* next;
};

void push(struct StackNode** top, struct TreeNode* node) {
    struct StackNode* sn = (struct StackNode*)malloc(sizeof(struct StackNode));
    sn->node = node;
    sn->next = *top;
    *top = sn;
}

struct TreeNode* pop(struct StackNode** top) {
    if (*top == NULL) return NULL;
    struct StackNode* sn = *top;
    struct TreeNode* node = sn->node;
    *top = sn->next;
    free(sn);
    return node;
}

int isEmpty(struct StackNode* top) {
    return top == NULL;
}

int kthSmallest(struct TreeNode* root, int k) {
    struct StackNode* stack = NULL;
    struct TreeNode* curr = root;
    while (!isEmpty(stack) || curr != NULL) {
        while (curr != NULL) {
            push(&stack, curr);
            curr = curr->left;
        }
        curr = pop(&stack);
        k--;
        if (k == 0) return curr->val;
        curr = curr->right;
    }
    return -1;
}

void freeTree(struct TreeNode* root) {
    if (root == NULL) return;
    freeTree(root->left);
    freeTree(root->right);
    free(root);
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &arr[i]) != 1) return 0;
    }
    int k;
    if (scanf("%d", &k) != 1) return 0;
    struct TreeNode* root = buildTree(arr, n, 0);
    printf("%d\\n", kthSmallest(root, k));
    freeTree(root);
    free(arr);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <stack>

using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int v) : val(v), left(NULL), right(NULL) {}
};

TreeNode* buildTree(vector<int>& arr, int idx) {
    if (idx >= (int)arr.size() || arr[idx] == -1) return NULL;
    TreeNode* node = new TreeNode(arr[idx]);
    node->left = buildTree(arr, 2 * idx + 1);
    node->right = buildTree(arr, 2 * idx + 2);
    return node;
}

int kthSmallest(TreeNode* root, int k) {
    stack<TreeNode*> st;
    TreeNode* curr = root;
    while (!st.empty() || curr != NULL) {
        while (curr != NULL) {
            st.push(curr);
            curr = curr->left;
        }
        curr = st.top(); st.pop();
        k--;
        if (k == 0) return curr->val;
        curr = curr->right;
    }
    return -1;
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
        int k;
        cin >> k;
        TreeNode* root = buildTree(arr, 0);
        cout << kthSmallest(root, k) << "\\n";
    }
    return 0;
}`
  },
  'kse-m3': {
    python: `def kth_smallest(matrix, k):
    n = len(matrix)
    l, r = matrix[0][0], matrix[n - 1][n - 1]
    while l < r:
        mid = (l + r) // 2
        count = 0
        j = n - 1
        for i in range(n):
            while j >= 0 and matrix[i][j] > mid:
                j -= 1
            count += j + 1
        if count >= k:
            r = mid
        else:
            l = mid + 1
    return l

n = int(input())
matrix = [list(map(int, input().split())) for _ in range(n)]
k = int(input())
print(kth_smallest(matrix, k))`,
    java: `import java.util.*;

public class Solution {
    public static int kthSmallest(int[][] matrix, int k) {
        int n = matrix.length;
        int l = matrix[0][0], r = matrix[n - 1][n - 1];
        while (l < r) {
            int mid = l + (r - l) / 2;
            int count = 0;
            int j = n - 1;
            for (int i = 0; i < n; i++) {
                while (j >= 0 && matrix[i][j] > mid) j--;
                count += j + 1;
            }
            if (count >= k) r = mid;
            else l = mid + 1;
        }
        return l;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] matrix = new int[n][n];
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    matrix[i][j] = sc.nextInt();
                }
            }
            int k = sc.nextInt();
            System.out.println(kthSmallest(matrix, k));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int kthSmallest(int** matrix, int n, int k) {
    int l = matrix[0][0], r = matrix[n - 1][n - 1];
    while (l < r) {
        int mid = l + (r - l) / 2;
        int count = 0;
        int j = n - 1;
        for (int i = 0; i < n; i++) {
            while (j >= 0 && matrix[i][j] > mid) j--;
            count += j + 1;
        }
        if (count >= k) r = mid;
        else l = mid + 1;
    }
    return l;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** matrix = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        matrix[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) {
            if (scanf("%d", &matrix[i][j]) != 1) return 0;
        }
    }
    int k;
    if (scanf("%d", &k) != 1) return 0;
    printf("%d\\n", kthSmallest(matrix, n, k));
    for (int i = 0; i < n; i++) free(matrix[i]);
    free(matrix);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int kthSmallest(vector<vector<int>>& matrix, int k) {
    int n = matrix.size();
    int l = matrix[0][0], r = matrix[n - 1][n - 1];
    while (l < r) {
        int mid = l + (r - l) / 2;
        int count = 0;
        int j = n - 1;
        for (int i = 0; i < n; i++) {
            while (j >= 0 && matrix[i][j] > mid) j--;
            count += j + 1;
        }
        if (count >= k) r = mid;
        else l = mid + 1;
    }
    return l;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<vector<int>> matrix(n, vector<int>(n));
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                cin >> matrix[i][j];
            }
        }
        int k;
        cin >> k;
        cout << kthSmallest(matrix, k) << "\\n";
    }
    return 0;
}`
  },
  'kse-m4': {
    python: `import heapq

def kth_smallest(arrays, k):
    heap = []
    for i, arr in enumerate(arrays):
        if arr:
            heapq.heappush(heap, (arr[0], i, 0))
    count = 0
    while heap:
        val, arr_idx, pos = heapq.heappop(heap)
        count += 1
        if count == k:
            return val
        if pos + 1 < len(arrays[arr_idx]):
            heapq.heappush(heap, (arrays[arr_idx][pos + 1], arr_idx, pos + 1))
    return -1

m = int(input())
arrays = []
for _ in range(m):
    arrays.append(list(map(int, input().split())))
k = int(input())
print(kth_smallest(arrays, k))`,
    java: `import java.util.*;

public class Solution {
    public static int kthSmallest(int[][] arrays, int k) {
        PriorityQueue<int[]> minHeap = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        for (int i = 0; i < arrays.length; i++) {
            if (arrays[i].length > 0) {
                minHeap.offer(new int[]{arrays[i][0], i, 0});
            }
        }
        int count = 0;
        while (!minHeap.isEmpty()) {
            int[] cur = minHeap.poll();
            count++;
            if (count == k) return cur[0];
            if (cur[2] + 1 < arrays[cur[1]].length) {
                minHeap.offer(new int[]{arrays[cur[1]][cur[2] + 1], cur[1], cur[2] + 1});
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt();
            int[][] arrays = new int[m][];
            for (int i = 0; i < m; i++) {
                int len = sc.nextInt();
                arrays[i] = new int[len];
                for (int j = 0; j < len; j++) {
                    arrays[i][j] = sc.nextInt();
                }
            }
            int k = sc.nextInt();
            System.out.println(kthSmallest(arrays, k));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

#define MAX_ARRAYS 10
#define MAX_SIZE 505

typedef struct {
    int val;
    int arrIdx;
    int pos;
} HeapNode;

HeapNode heap[MAX_ARRAYS * MAX_SIZE];
int heapSize;

void swap(HeapNode* a, HeapNode* b) {
    HeapNode t = *a;
    *a = *b;
    *b = t;
}

void push(HeapNode node) {
    heap[heapSize] = node;
    int i = heapSize++;
    while (i > 0 && heap[(i - 1) / 2].val > heap[i].val) {
        swap(&heap[(i - 1) / 2], &heap[i]);
        i = (i - 1) / 2;
    }
}

HeapNode pop() {
    HeapNode root = heap[0];
    heap[0] = heap[--heapSize];
    int i = 0;
    while (1) {
        int smallest = i;
        int l = 2 * i + 1, r = 2 * i + 2;
        if (l < heapSize && heap[l].val < heap[smallest].val) smallest = l;
        if (r < heapSize && heap[r].val < heap[smallest].val) smallest = r;
        if (smallest == i) break;
        swap(&heap[i], &heap[smallest]);
        i = smallest;
    }
    return root;
}

int kthSmallest(int** arrays, int* sizes, int m, int k) {
    heapSize = 0;
    for (int i = 0; i < m; i++) {
        if (sizes[i] > 0) {
            push((HeapNode){arrays[i][0], i, 0});
        }
    }
    int count = 0;
    while (heapSize > 0) {
        HeapNode cur = pop();
        count++;
        if (count == k) return cur.val;
        if (cur.pos + 1 < sizes[cur.arrIdx]) {
            push((HeapNode){arrays[cur.arrIdx][cur.pos + 1], cur.arrIdx, cur.pos + 1});
        }
    }
    return -1;
}

int main() {
    int m;
    if (scanf("%d", &m) != 1) return 0;
    int** arrays = (int**)malloc(m * sizeof(int*));
    int* sizes = (int*)malloc(m * sizeof(int));
    for (int i = 0; i < m; i++) {
        scanf("%d", &sizes[i]);
        arrays[i] = (int*)malloc(sizes[i] * sizeof(int));
        for (int j = 0; j < sizes[i]; j++) {
            if (scanf("%d", &arrays[i][j]) != 1) return 0;
        }
    }
    int k;
    if (scanf("%d", &k) != 1) return 0;
    printf("%d\\n", kthSmallest(arrays, sizes, m, k));
    for (int i = 0; i < m; i++) free(arrays[i]);
    free(arrays);
    free(sizes);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>

using namespace std;

int kthSmallest(vector<vector<int>>& arrays, int k) {
    priority_queue<vector<int>, vector<vector<int>>, greater<vector<int>>> minHeap;
    for (int i = 0; i < (int)arrays.size(); i++) {
        if (!arrays[i].empty()) {
            minHeap.push({arrays[i][0], i, 0});
        }
    }
    int count = 0;
    while (!minHeap.empty()) {
        auto cur = minHeap.top(); minHeap.pop();
        count++;
        if (count == k) return cur[0];
        if (cur[2] + 1 < (int)arrays[cur[1]].size()) {
            minHeap.push({arrays[cur[1]][cur[2] + 1], cur[1], cur[2] + 1});
        }
    }
    return -1;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int m;
    if (cin >> m) {
        vector<vector<int>> arrays(m);
        for (int i = 0; i < m; i++) {
            int len;
            cin >> len;
            arrays[i].resize(len);
            for (int j = 0; j < len; j++) {
                cin >> arrays[i][j];
            }
        }
        int k;
        cin >> k;
        cout << kthSmallest(arrays, k) << "\\n";
    }
    return 0;
}`
  },
  'kse-m5': {
    python: `def kth_smallest_after_delete(nums, delete, k):
    delete_set = set(delete)
    remaining = [num for num in nums if num not in delete_set]
    remaining.sort()
    return remaining[k - 1]

n = int(input())
nums = list(map(int, input().split()))
d = int(input())
delete = list(map(int, input().split()))
k = int(input())
print(kth_smallest_after_delete(nums, delete, k))`,
    java: `import java.util.*;

public class Solution {
    public static int kthSmallestAfterDelete(int[] nums, int[] delete, int k) {
        Set<Integer> delSet = new HashSet<>();
        for (int d : delete) delSet.add(d);
        List<Integer> remaining = new ArrayList<>();
        for (int num : nums) {
            if (!delSet.contains(num)) remaining.add(num);
        }
        Collections.sort(remaining);
        return remaining.get(k - 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            int d = sc.nextInt();
            int[] delete = new int[d];
            for (int i = 0; i < d; i++) {
                delete[i] = sc.nextInt();
            }
            int k = sc.nextInt();
            System.out.println(kthSmallestAfterDelete(nums, delete, k));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int cmp(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int kthSmallestAfterDelete(int* nums, int numsSize, int* del, int delSize, int k) {
    int* remaining = (int*)malloc(numsSize * sizeof(int));
    int remSize = 0;
    for (int i = 0; i < numsSize; i++) {
        int found = 0;
        for (int j = 0; j < delSize; j++) {
            if (nums[i] == del[j]) { found = 1; break; }
        }
        if (!found) remaining[remSize++] = nums[i];
    }
    qsort(remaining, remSize, sizeof(int), cmp);
    int ans = remaining[k - 1];
    free(remaining);
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int d;
    if (scanf("%d", &d) != 1) return 0;
    int* del = (int*)malloc(d * sizeof(int));
    for (int i = 0; i < d; i++) {
        if (scanf("%d", &del[i]) != 1) return 0;
    }
    int k;
    if (scanf("%d", &k) != 1) return 0;
    printf("%d\\n", kthSmallestAfterDelete(nums, n, del, d, k));
    free(nums);
    free(del);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <unordered_set>

using namespace std;

int kthSmallestAfterDelete(vector<int>& nums, vector<int>& del, int k) {
    unordered_set<int> delSet(del.begin(), del.end());
    vector<int> remaining;
    for (int num : nums) {
        if (delSet.find(num) == delSet.end()) remaining.push_back(num);
    }
    sort(remaining.begin(), remaining.end());
    return remaining[k - 1];
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        int d;
        cin >> d;
        vector<int> del(d);
        for (int i = 0; i < d; i++) cin >> del[i];
        int k;
        cin >> k;
        cout << kthSmallestAfterDelete(nums, del, k) << "\\n";
    }
    return 0;
}`
  },

  // --- HARD ---
  'kse-h1': {
    python: `class BIT:
    def __init__(self, n):
        self.n = n
        self.tree = [0] * (n + 1)

    def update(self, i, delta=1):
        while i <= self.n:
            self.tree[i] += delta
            i += i & -i

    def kth_smallest(self, k):
        pos = 0
        bit_mask = 1 << (self.n.bit_length())
        while bit_mask:
            nxt = pos + bit_mask
            if nxt <= self.n and self.tree[nxt] < k:
                k -= self.tree[nxt]
                pos = nxt
            bit_mask >>= 1
        return pos + 1

def kth_smallest(nums, k):
    sorted_unique = sorted(set(nums))
    compress = {v: i + 1 for i, v in enumerate(sorted_unique)}
    bit = BIT(len(sorted_unique))
    for num in nums:
        bit.update(compress[num])
    idx = bit.kth_smallest(k)
    return sorted_unique[idx - 1]

n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(kth_smallest(nums, k))`,
    java: `import java.util.*;

public class Solution {
    static int[] tree;
    static int m;

    static void update(int i) {
        for (; i <= m; i += i & -i)
            tree[i]++;
    }

    static int kthSmallest(int k) {
        int pos = 0;
        int bitMask = Integer.highestOneBit(m);
        while (bitMask > 0) {
            int nxt = pos + bitMask;
            if (nxt <= m && tree[nxt] < k) {
                k -= tree[nxt];
                pos = nxt;
            }
            bitMask >>= 1;
        }
        return pos + 1;
    }

    public static int kthSmallest(int[] nums, int k) {
        int[] sorted = nums.clone();
        Arrays.sort(sorted);
        Map<Integer, Integer> compress = new HashMap<>();
        int idx = 1;
        for (int v : sorted) {
            if (!compress.containsKey(v)) {
                compress.put(v, idx++);
            }
        }
        m = compress.size();
        tree = new int[m + 1];
        int[] uniq = new int[m + 1];
        for (int v : sorted) {
            int ci = compress.get(v);
            uniq[ci] = v;
        }
        for (int num : nums) {
            update(compress.get(num));
        }
        int pos = kthSmallest(k);
        return uniq[pos];
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
            System.out.println(kthSmallest(nums, k));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXN 100005

int tree[MAXN], uniq[MAXN], m;

void update(int i) {
    for (; i <= m; i += i & (-i))
        tree[i]++;
}

int kthSmallestBIT(int k) {
    int pos = 0;
    int bitMask = 1 << 17;
    while (bitMask > 0) {
        int nxt = pos + bitMask;
        if (nxt <= m && tree[nxt] < k) {
            k -= tree[nxt];
            pos = nxt;
        }
        bitMask >>= 1;
    }
    return pos + 1;
}

int cmp(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int kthSmallest(int* nums, int numsSize, int k) {
    int* sorted = (int*)malloc(numsSize * sizeof(int));
    memcpy(sorted, nums, numsSize * sizeof(int));
    qsort(sorted, numsSize, sizeof(int), cmp);
    m = 0;
    for (int i = 0; i < numsSize; i++) {
        if (i == 0 || sorted[i] != sorted[i - 1])
            uniq[++m] = sorted[i];
    }
    memset(tree, 0, sizeof(tree));
    for (int i = 0; i < numsSize; i++) {
        int lo = 1, hi = m;
        while (lo <= hi) {
            int mid = (lo + hi) / 2;
            if (uniq[mid] == nums[i]) { update(mid); break; }
            if (uniq[mid] < nums[i]) lo = mid + 1;
            else hi = mid - 1;
        }
    }
    int pos = kthSmallestBIT(k);
    free(sorted);
    return uniq[pos];
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
    printf("%d\\n", kthSmallest(nums, n, k));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <unordered_map>

using namespace std;

struct BIT {
    int m;
    vector<int> tree;

    BIT(int m) : m(m), tree(m + 1, 0) {}

    void update(int i) {
        for (; i <= m; i += i & -i)
            tree[i]++;
    }

    int kth_smallest(int k) {
        int pos = 0;
        int bitMask = 1 << (31 - __builtin_clz(m));
        while (bitMask > 0) {
            int nxt = pos + bitMask;
            if (nxt <= m && tree[nxt] < k) {
                k -= tree[nxt];
                pos = nxt;
            }
            bitMask >>= 1;
        }
        return pos + 1;
    }
};

int kthSmallest(vector<int>& nums, int k) {
    vector<int> sorted_unique = nums;
    sort(sorted_unique.begin(), sorted_unique.end());
    sorted_unique.erase(unique(sorted_unique.begin(), sorted_unique.end()), sorted_unique.end());
    unordered_map<int, int> compress;
    for (int i = 0; i < (int)sorted_unique.size(); i++)
        compress[sorted_unique[i]] = i + 1;

    BIT bit(sorted_unique.size());
    for (int num : nums)
        bit.update(compress[num]);

    int pos = bit.kth_smallest(k);
    return sorted_unique[pos - 1];
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        int k;
        cin >> k;
        cout << kthSmallest(nums, k) << "\\n";
    }
    return 0;
}`
  },
  'kse-h2': {
    python: `class TreeNode:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None
        self.size = 1

def insert(root, val):
    if root is None:
        return TreeNode(val)
    if val < root.val:
        root.left = insert(root.left, val)
    else:
        root.right = insert(root.right, val)
    root.size = 1 + (root.left.size if root.left else 0) + (root.right.size if root.right else 0)
    return root

def delete(root, val):
    if root is None:
        return None
    if val < root.val:
        root.left = delete(root.left, val)
    elif val > root.val:
        root.right = delete(root.right, val)
    else:
        if root.left is None:
            return root.right
        if root.right is None:
            return root.left
        succ = root.right
        while succ.left:
            succ = succ.left
        root.val = succ.val
        root.right = delete(root.right, succ.val)
    if root:
        root.size = 1 + (root.left.size if root.left else 0) + (root.right.size if root.right else 0)
    return root

def query(root, k):
    left_size = root.left.size if root.left else 0
    if k <= left_size:
        return query(root.left, k)
    elif k == left_size + 1:
        return root.val
    else:
        return query(root.right, k - left_size - 1)

def process_operations(initial, operations):
    root = None
    for v in initial:
        root = insert(root, v)
    results = []
    for op in operations:
        parts = op.split()
        if parts[0] == "QUERY":
            results.append(str(query(root, int(parts[1]))))
        elif parts[0] == "INSERT":
            root = insert(root, int(parts[1]))
        elif parts[0] == "DELETE":
            root = delete(root, int(parts[1]))
    return " ".join(results)

n = int(input())
initial = list(map(int, input().split()))
m = int(input())
operations = [input().strip() for _ in range(m)]
print(process_operations(initial, operations))`,
    java: `import java.util.*;

class TreeNode {
    int val, size;
    TreeNode left, right;
    TreeNode(int v) { val = v; size = 1; }
}

public class Solution {
    private static int getSize(TreeNode node) {
        return node == null ? 0 : node.size;
    }

    private static TreeNode insert(TreeNode root, int val) {
        if (root == null) return new TreeNode(val);
        if (val < root.val) root.left = insert(root.left, val);
        else root.right = insert(root.right, val);
        root.size = 1 + getSize(root.left) + getSize(root.right);
        return root;
    }

    private static TreeNode delete(TreeNode root, int val) {
        if (root == null) return null;
        if (val < root.val) root.left = delete(root.left, val);
        else if (val > root.val) root.right = delete(root.right, val);
        else {
            if (root.left == null) return root.right;
            if (root.right == null) return root.left;
            TreeNode succ = root.right;
            while (succ.left != null) succ = succ.left;
            root.val = succ.val;
            root.right = delete(root.right, succ.val);
        }
        if (root != null) root.size = 1 + getSize(root.left) + getSize(root.right);
        return root;
    }

    private static int query(TreeNode root, int k) {
        int leftSize = getSize(root.left);
        if (k <= leftSize) return query(root.left, k);
        if (k == leftSize + 1) return root.val;
        return query(root.right, k - leftSize - 1);
    }

    public static int[] processOperations(int[] initial, String[] operations) {
        TreeNode root = null;
        for (int v : initial) root = insert(root, v);
        List<Integer> results = new ArrayList<>();
        for (String op : operations) {
            String[] parts = op.split(" ");
            if (parts[0].equals("QUERY")) {
                results.add(query(root, Integer.parseInt(parts[1])));
            } else if (parts[0].equals("INSERT")) {
                root = insert(root, Integer.parseInt(parts[1]));
            } else if (parts[0].equals("DELETE")) {
                root = delete(root, Integer.parseInt(parts[1]));
            }
        }
        int[] res = new int[results.size()];
        for (int i = 0; i < results.size(); i++) res[i] = results.get(i);
        return res;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] initial = new int[n];
            for (int i = 0; i < n; i++) initial[i] = sc.nextInt();
            int m = sc.nextInt();
            sc.nextLine();
            String[] operations = new String[m];
            for (int i = 0; i < m; i++) operations[i] = sc.nextLine();
            int[] res = processOperations(initial, operations);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(res[i]);
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct TreeNode {
    int val, size;
    struct TreeNode *left, *right;
};

int getSize(struct TreeNode* node) {
    return node == NULL ? 0 : node->size;
}

struct TreeNode* createNode(int v) {
    struct TreeNode* node = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    node->val = v;
    node->size = 1;
    node->left = node->right = NULL;
    return node;
}

struct TreeNode* insert(struct TreeNode* root, int val) {
    if (root == NULL) return createNode(val);
    if (val < root->val) root->left = insert(root->left, val);
    else root->right = insert(root->right, val);
    root->size = 1 + getSize(root->left) + getSize(root->right);
    return root;
}

struct TreeNode* minNode(struct TreeNode* root) {
    while (root->left) root = root->left;
    return root;
}

struct TreeNode* delete(struct TreeNode* root, int val) {
    if (root == NULL) return NULL;
    if (val < root->val) root->left = delete(root->left, val);
    else if (val > root->val) root->right = delete(root->right, val);
    else {
        if (root->left == NULL) {
            struct TreeNode* temp = root->right;
            free(root);
            return temp;
        }
        if (root->right == NULL) {
            struct TreeNode* temp = root->left;
            free(root);
            return temp;
        }
        struct TreeNode* succ = minNode(root->right);
        root->val = succ->val;
        root->right = delete(root->right, succ->val);
    }
    if (root) root->size = 1 + getSize(root->left) + getSize(root->right);
    return root;
}

int query(struct TreeNode* root, int k) {
    int leftSize = getSize(root->left);
    if (k <= leftSize) return query(root->left, k);
    if (k == leftSize + 1) return root->val;
    return query(root->right, k - leftSize - 1);
}

int* processOperations(int* initial, int initSize, char** operations, int opsSize, int* returnSize) {
    struct TreeNode* root = NULL;
    for (int i = 0; i < initSize; i++) root = insert(root, initial[i]);
    int* results = (int*)malloc(opsSize * sizeof(int));
    int count = 0;
    for (int i = 0; i < opsSize; i++) {
        char op[20];
        int val;
        sscanf(operations[i], "%s %d", op, &val);
        if (strcmp(op, "QUERY") == 0) {
            results[count++] = query(root, val);
        } else if (strcmp(op, "INSERT") == 0) {
            root = insert(root, val);
        } else if (strcmp(op, "DELETE") == 0) {
            root = delete(root, val);
        }
    }
    *returnSize = count;
    return results;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* initial = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &initial[i]) != 1) return 0;
    }
    int m;
    if (scanf("%d", &m) != 1) return 0;
    getchar();
    char** operations = (char**)malloc(m * sizeof(char*));
    for (int i = 0; i < m; i++) {
        operations[i] = (char*)malloc(50);
        fgets(operations[i], 50, stdin);
        operations[i][strcspn(operations[i], "\\n")] = 0;
    }
    int retSize;
    int* res = processOperations(initial, n, operations, m, &retSize);
    for (int i = 0; i < retSize; i++) {
        if (i > 0) printf(" ");
        printf("%d", res[i]);
    }
    printf("\\n");
    free(initial);
    for (int i = 0; i < m; i++) free(operations[i]);
    free(operations);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <sstream>

using namespace std;

struct TreeNode {
    int val, size;
    TreeNode *left, *right;
    TreeNode(int v) : val(v), size(1), left(NULL), right(NULL) {}
};

int getSize(TreeNode* node) {
    return node == NULL ? 0 : node->size;
}

TreeNode* insert(TreeNode* root, int val) {
    if (root == NULL) return new TreeNode(val);
    if (val < root->val) root->left = insert(root->left, val);
    else root->right = insert(root->right, val);
    root->size = 1 + getSize(root->left) + getSize(root->right);
    return root;
}

TreeNode* deleteNode(TreeNode* root, int val) {
    if (root == NULL) return NULL;
    if (val < root->val) root->left = deleteNode(root->left, val);
    else if (val > root->val) root->right = deleteNode(root->right, val);
    else {
        if (root->left == NULL) { TreeNode* temp = root->right; delete root; return temp; }
        if (root->right == NULL) { TreeNode* temp = root->left; delete root; return temp; }
        TreeNode* succ = root->right;
        while (succ->left) succ = succ->left;
        root->val = succ->val;
        root->right = deleteNode(root->right, succ->val);
    }
    if (root) root->size = 1 + getSize(root->left) + getSize(root->right);
    return root;
}

int query(TreeNode* root, int k) {
    int leftSize = getSize(root->left);
    if (k <= leftSize) return query(root->left, k);
    if (k == leftSize + 1) return root->val;
    return query(root->right, k - leftSize - 1);
}

vector<int> processOperations(vector<int>& initial, vector<string>& operations) {
    TreeNode* root = NULL;
    for (int v : initial) root = insert(root, v);
    vector<int> results;
    for (string& op : operations) {
        stringstream ss(op);
        string cmd;
        int val;
        ss >> cmd >> val;
        if (cmd == "QUERY") results.push_back(query(root, val));
        else if (cmd == "INSERT") root = insert(root, val);
        else if (cmd == "DELETE") root = deleteNode(root, val);
    }
    return results;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> initial(n);
        for (int i = 0; i < n; i++) cin >> initial[i];
        int m;
        cin >> m;
        cin.ignore();
        vector<string> operations(m);
        for (int i = 0; i < m; i++) getline(cin, operations[i]);
        vector<int> res = processOperations(initial, operations);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'kse-h3': {
    python: `def kth_smallest_pair_distance(nums, k):
    nums.sort()
    n = len(nums)
    l, r = 0, nums[-1] - nums[0]
    while l < r:
        mid = (l + r) // 2
        count = 0
        j = 0
        for i in range(n):
            while j < n and nums[j] - nums[i] <= mid:
                j += 1
            count += j - i - 1
        if count >= k:
            r = mid
        else:
            l = mid + 1
    return l

n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(kth_smallest_pair_distance(nums, k))`,
    java: `import java.util.*;

public class Solution {
    public static int kthSmallestPairDistance(int[] nums, int k) {
        Arrays.sort(nums);
        int n = nums.length;
        int l = 0, r = nums[n - 1] - nums[0];
        while (l < r) {
            int mid = l + (r - l) / 2;
            int count = 0;
            int j = 0;
            for (int i = 0; i < n; i++) {
                while (j < n && nums[j] - nums[i] <= mid) j++;
                count += j - i - 1;
            }
            if (count >= k) r = mid;
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
            int k = sc.nextInt();
            System.out.println(kthSmallestPairDistance(nums, k));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int cmp(const void* a, const void* b) {
    return *(int*)a - *(int*)b;
}

int kthSmallestPairDistance(int* nums, int numsSize, int k) {
    qsort(nums, numsSize, sizeof(int), cmp);
    int l = 0, r = nums[numsSize - 1] - nums[0];
    while (l < r) {
        int mid = l + (r - l) / 2;
        int count = 0;
        int j = 0;
        for (int i = 0; i < numsSize; i++) {
            while (j < numsSize && nums[j] - nums[i] <= mid) j++;
            count += j - i - 1;
        }
        if (count >= k) r = mid;
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
    int k;
    if (scanf("%d", &k) != 1) return 0;
    printf("%d\\n", kthSmallestPairDistance(nums, n, k));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int kthSmallestPairDistance(vector<int>& nums, int k) {
    sort(nums.begin(), nums.end());
    int n = nums.size();
    int l = 0, r = nums[n - 1] - nums[0];
    while (l < r) {
        int mid = l + (r - l) / 2;
        int count = 0;
        int j = 0;
        for (int i = 0; i < n; i++) {
            while (j < n && nums[j] - nums[i] <= mid) j++;
            count += j - i - 1;
        }
        if (count >= k) r = mid;
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
        for (int i = 0; i < n; i++) cin >> nums[i];
        int k;
        cin >> k;
        cout << kthSmallestPairDistance(nums, k) << "\\n";
    }
    return 0;
}`
  },
  'kse-h4': {
    python: `def kth_smallest(m, n, k):
    l, r = 1, m * n
    while l < r:
        mid = (l + r) // 2
        count = 0
        for i in range(1, m + 1):
            count += min(mid // i, n)
        if count >= k:
            r = mid
        else:
            l = mid + 1
    return l

m, n, k = map(int, input().split())
print(kth_smallest(m, n, k))`,
    java: `import java.util.*;

public class Solution {
    public static int kthSmallest(int m, int n, int k) {
        int l = 1, r = m * n;
        while (l < r) {
            int mid = l + (r - l) / 2;
            int count = 0;
            for (int i = 1; i <= m; i++) {
                count += Math.min(mid / i, n);
            }
            if (count >= k) r = mid;
            else l = mid + 1;
        }
        return l;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt();
            int n = sc.nextInt();
            int k = sc.nextInt();
            System.out.println(kthSmallest(m, n, k));
        }
    }
}`,
    c: `#include <stdio.h>

int kthSmallest(int m, int n, int k) {
    int l = 1, r = m * n;
    while (l < r) {
        int mid = l + (r - l) / 2;
        int count = 0;
        for (int i = 1; i <= m; i++) {
            count += (mid / i) < n ? (mid / i) : n;
        }
        if (count >= k) r = mid;
        else l = mid + 1;
    }
    return l;
}

int main() {
    int m, n, k;
    if (scanf("%d %d %d", &m, &n, &k) == 3) {
        printf("%d\\n", kthSmallest(m, n, k));
    }
    return 0;
}`,
    cpp: `#include <iostream>
#include <algorithm>

using namespace std;

int kthSmallest(int m, int n, int k) {
    int l = 1, r = m * n;
    while (l < r) {
        int mid = l + (r - l) / 2;
        int count = 0;
        for (int i = 1; i <= m; i++) {
            count += min(mid / i, n);
        }
        if (count >= k) r = mid;
        else l = mid + 1;
    }
    return l;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int m, n, k;
    if (cin >> m >> n >> k) {
        cout << kthSmallest(m, n, k) << "\\n";
    }
    return 0;
}`
  },
  'kse-h5': {
    python: `class BITRange:
    def __init__(self, n):
        self.n = n
        self.bit1 = [0] * (n + 2)
        self.bit2 = [0] * (n + 2)

    def _add(self, bit, i, val):
        while i <= self.n:
            bit[i] += val
            i += i & -i

    def _prefix(self, bit, i):
        s = 0
        while i > 0:
            s += bit[i]
            i -= i & -i
        return s

    def range_add(self, l, r, val):
        self._add(self.bit1, l, val)
        self._add(self.bit1, r + 1, -val)
        self._add(self.bit2, l, val * (l - 1))
        self._add(self.bit2, r + 1, -val * r)

    def point_query(self, i):
        return self._prefix(self.bit1, i) * i - self._prefix(self.bit2, i)

def process_operations(nums, operations):
    n = len(nums)
    bit = BITRange(n)
    for i, v in enumerate(nums, 1):
        bit.range_add(i, i, v)
    results = []
    for op in operations:
        parts = op.split()
        if parts[0] == "QUERY":
            k = int(parts[1])
            vals = [bit.point_query(i) for i in range(1, n + 1)]
            vals.sort()
            results.append(str(vals[k - 1]))
        elif parts[0] == "ADD":
            l, r, val = int(parts[1]), int(parts[2]), int(parts[3])
            bit.range_add(l, r, val)
    return " ".join(results)

n = int(input())
nums = list(map(int, input().split()))
m = int(input())
operations = [input().strip() for _ in range(m)]
print(process_operations(nums, operations))`,
    java: `import java.util.*;

public class Solution {
    static class BITRange {
        int n;
        long[] bit1, bit2;
        BITRange(int n) {
            this.n = n;
            bit1 = new long[n + 2];
            bit2 = new long[n + 2];
        }
        void add(long[] bit, int i, long val) {
            while (i <= n) { bit[i] += val; i += i & -i; }
        }
        long prefix(long[] bit, int i) {
            long s = 0;
            while (i > 0) { s += bit[i]; i -= i & -i; }
            return s;
        }
        void rangeAdd(int l, int r, long val) {
            add(bit1, l, val);
            add(bit1, r + 1, -val);
            add(bit2, l, val * (l - 1));
            add(bit2, r + 1, -val * r);
        }
        long pointQuery(int i) {
            return prefix(bit1, i) * i - prefix(bit2, i);
        }
    }

    public static int[] processOperations(int[] nums, String[] operations) {
        int n = nums.length;
        BITRange bit = new BITRange(n);
        for (int i = 0; i < n; i++) {
            bit.rangeAdd(i + 1, i + 1, nums[i]);
        }
        List<Integer> results = new ArrayList<>();
        for (String op : operations) {
            String[] parts = op.split(" ");
            if (parts[0].equals("QUERY")) {
                int k = Integer.parseInt(parts[1]);
                long[] vals = new long[n];
                for (int i = 0; i < n; i++) vals[i] = bit.pointQuery(i + 1);
                Arrays.sort(vals);
                results.add((int)vals[k - 1]);
            } else if (parts[0].equals("ADD")) {
                int l = Integer.parseInt(parts[1]);
                int r = Integer.parseInt(parts[2]);
                long val = Long.parseLong(parts[3]);
                bit.rangeAdd(l, r, val);
            }
        }
        int[] res = new int[results.size()];
        for (int i = 0; i < results.size(); i++) res[i] = results.get(i);
        return res;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int m = sc.nextInt();
            sc.nextLine();
            String[] operations = new String[m];
            for (int i = 0; i < m; i++) operations[i] = sc.nextLine();
            int[] res = processOperations(nums, operations);
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < res.length; i++) {
                if (i > 0) sb.append(" ");
                sb.append(res[i]);
            }
            System.out.println(sb.toString());
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAXN 100005

long long bit1[MAXN], bit2[MAXN];
int n;

void add(long long* bit, int i, long long val) {
    while (i <= n) { bit[i] += val; i += i & (-i); }
}

long long prefix(long long* bit, int i) {
    long long s = 0;
    while (i > 0) { s += bit[i]; i -= i & (-i); }
    return s;
}

void rangeAdd(int l, int r, long long val) {
    add(bit1, l, val);
    add(bit1, r + 1, -val);
    add(bit2, l, val * (l - 1));
    add(bit2, r + 1, -val * r);
}

long long pointQuery(int i) {
    return prefix(bit1, i) * i - prefix(bit2, i);
}

int cmpLL(const void* a, const void* b) {
    long long la = *(long long*)a, lb = *(long long*)b;
    return (la > lb) - (la < lb);
}

int* processOperations(int* nums, int numsSize, char** operations, int opsSize, int* returnSize) {
    n = numsSize;
    memset(bit1, 0, sizeof(bit1));
    memset(bit2, 0, sizeof(bit2));
    for (int i = 0; i < n; i++) rangeAdd(i + 1, i + 1, nums[i]);
    int* results = (int*)malloc(opsSize * sizeof(int));
    int count = 0;
    for (int i = 0; i < opsSize; i++) {
        char cmd[20];
        int a, b;
        long long c;
        if (sscanf(operations[i], "QUERY %d", &a) == 1) {
            long long* vals = (long long*)malloc(n * sizeof(long long));
            for (int j = 0; j < n; j++) vals[j] = pointQuery(j + 1);
            qsort(vals, n, sizeof(long long), cmpLL);
            results[count++] = (int)vals[a - 1];
            free(vals);
        } else if (sscanf(operations[i], "ADD %d %d %lld", &a, &b, &c) == 3) {
            rangeAdd(a, b, c);
        }
    }
    *returnSize = count;
    return results;
}

int main() {
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int m;
    if (scanf("%d", &m) != 1) return 0;
    getchar();
    char** operations = (char**)malloc(m * sizeof(char*));
    for (int i = 0; i < m; i++) {
        operations[i] = (char*)malloc(100);
        fgets(operations[i], 100, stdin);
        operations[i][strcspn(operations[i], "\\n")] = 0;
    }
    int retSize;
    int* res = processOperations(nums, n, operations, m, &retSize);
    for (int i = 0; i < retSize; i++) {
        if (i > 0) printf(" ");
        printf("%d", res[i]);
    }
    printf("\\n");
    free(nums);
    for (int i = 0; i < m; i++) free(operations[i]);
    free(operations);
    free(res);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <sstream>

using namespace std;

struct BITRange {
    int n;
    vector<long long> bit1, bit2;
    BITRange(int n) : n(n), bit1(n + 2, 0), bit2(n + 2, 0) {}
    void add(vector<long long>& bit, int i, long long val) {
        while (i <= n) { bit[i] += val; i += i & -i; }
    }
    long long prefix(vector<long long>& bit, int i) {
        long long s = 0;
        while (i > 0) { s += bit[i]; i -= i & -i; }
        return s;
    }
    void rangeAdd(int l, int r, long long val) {
        add(bit1, l, val);
        add(bit1, r + 1, -val);
        add(bit2, l, val * (l - 1));
        add(bit2, r + 1, -val * r);
    }
    long long pointQuery(int i) {
        return prefix(bit1, i) * i - prefix(bit2, i);
    }
};

vector<int> processOperations(vector<int>& nums, vector<string>& operations) {
    int n = nums.size();
    BITRange bit(n);
    for (int i = 0; i < n; i++) bit.rangeAdd(i + 1, i + 1, nums[i]);
    vector<int> results;
    for (string& op : operations) {
        stringstream ss(op);
        string cmd;
        ss >> cmd;
        if (cmd == "QUERY") {
            int k;
            ss >> k;
            vector<long long> vals(n);
            for (int i = 0; i < n; i++) vals[i] = bit.pointQuery(i + 1);
            sort(vals.begin(), vals.end());
            results.push_back((int)vals[k - 1]);
        } else if (cmd == "ADD") {
            int l, r;
            long long val;
            ss >> l >> r >> val;
            bit.rangeAdd(l, r, val);
        }
    }
    return results;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        int m;
        cin >> m;
        cin.ignore();
        vector<string> operations(m);
        for (int i = 0; i < m; i++) getline(cin, operations[i]);
        vector<int> res = processOperations(nums, operations);
        for (int i = 0; i < (int)res.size(); i++) {
            if (i > 0) cout << " ";
            cout << res[i];
        }
        cout << "\\n";
    }
    return 0;
}`
  }
};