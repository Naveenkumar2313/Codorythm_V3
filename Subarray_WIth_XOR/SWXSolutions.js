export const SWXSolutions = {
    'sxk-e1': {
  python: `def count_subarrays_xor(nums, k):
    freq = {0: 1}
    xr = 0
    ans = 0
    for num in nums:
        xr ^= num
        ans += freq.get(xr ^ k, 0)
        freq[xr] = freq.get(xr, 0) + 1
    return ans

n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(count_subarrays_xor(nums, k))`,
  java: `import java.util.*;
public class Main {
    public static long countSubarraysXOR(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(0, 1);
        int xr = 0;
        long ans = 0;
        for (int num : nums) {
            xr ^= num;
            ans += map.getOrDefault(xr ^ k, 0);
            map.put(xr, map.getOrDefault(xr, 0) + 1);
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
            System.out.println(countSubarraysXOR(nums, k));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int key;
    int count;
    struct Node* next;
} Node;

#define SIZE 262147

Node* table[SIZE];

unsigned hash(int key) {
    return ((unsigned)key) % SIZE;
}

int get(int key) {
    unsigned h = hash(key);
    Node* cur = table[h];
    while (cur) {
        if (cur->key == key) return cur->count;
        cur = cur->next;
    }
    return 0;
}

void put(int key) {
    unsigned h = hash(key);
    Node* cur = table[h];
    while (cur) {
        if (cur->key == key) {
            cur->count++;
            return;
        }
        cur = cur->next;
    }
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->count = 1;
    node->next = table[h];
    table[h] = node;
}

long long countSubarraysXOR(int* nums, int numsSize, int k) {
    for (int i = 0; i < SIZE; i++) table[i] = NULL;
    put(0);
    int xr = 0;
    long long ans = 0;
    for (int i = 0; i < numsSize; i++) {
        xr ^= nums[i];
        ans += get(xr ^ k);
        put(xr);
    }
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    int k;
    scanf("%d", &k);
    printf("%lld\n", countSubarraysXOR(nums, n, k));
    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

long long countSubarraysXOR(vector<int>& nums, int k) {
    unordered_map<int, int> freq;
    freq[0] = 1;
    int xr = 0;
    long long ans = 0;
    for (int num : nums) {
        xr ^= num;
        ans += freq[xr ^ k];
        freq[xr]++;
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
        cout << countSubarraysXOR(nums, k) << "\n";
    }
    return 0;
}`
},'sxk-e2': {
  python: `def has_subarray_xor(nums, k):
    seen = {0}
    xr = 0
    for num in nums:
        xr ^= num
        if (xr ^ k) in seen:
            return True
        seen.add(xr)
    return False

n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(str(has_subarray_xor(nums, k)).lower())`,
  java: `import java.util.*;
public class Main {
    public static boolean hasSubarrayXOR(int[] nums, int k) {
        HashSet<Integer> set = new HashSet<>();
        set.add(0);
        int xr = 0;
        for (int num : nums) {
            xr ^= num;
            if (set.contains(xr ^ k)) return true;
            set.add(xr);
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
            int k = sc.nextInt();
            System.out.println(hasSubarrayXOR(nums, k));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct Node {
    int key;
    struct Node* next;
} Node;

#define SIZE 262147

Node* table[SIZE];

unsigned hash(int key) {
    return ((unsigned)key) % SIZE;
}

bool contains(int key) {
    unsigned h = hash(key);
    Node* cur = table[h];
    while (cur) {
        if (cur->key == key) return true;
        cur = cur->next;
    }
    return false;
}

void insert(int key) {
    if (contains(key)) return;
    unsigned h = hash(key);
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->next = table[h];
    table[h] = node;
}

bool hasSubarrayXOR(int* nums, int numsSize, int k) {
    for (int i = 0; i < SIZE; i++) table[i] = NULL;
    insert(0);
    int xr = 0;
    for (int i = 0; i < numsSize; i++) {
        xr ^= nums[i];
        if (contains(xr ^ k)) return true;
        insert(xr);
    }
    return false;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    int k;
    scanf("%d", &k);
    printf("%s\n", hasSubarrayXOR(nums, n, k) ? "true" : "false");
    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_set>

using namespace std;

bool hasSubarrayXOR(vector<int>& nums, int k) {
    unordered_set<int> seen;
    seen.insert(0);
    int xr = 0;
    for (int num : nums) {
        xr ^= num;
        if (seen.count(xr ^ k)) return true;
        seen.insert(xr);
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
        int k;
        cin >> k;
        cout << (hasSubarrayXOR(nums, k) ? "true" : "false") << "\n";
    }
    return 0;
}`
},'sxk-e3': {
  python: `def longest_subarray_xor(nums, k):
    first = {0: -1}
    xr = 0
    ans = 0
    for i, num in enumerate(nums):
        xr ^= num
        if (xr ^ k) in first:
            ans = max(ans, i - first[xr ^ k])
        if xr not in first:
            first[xr] = i
    return ans

n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(longest_subarray_xor(nums, k))`,
  java: `import java.util.*;
public class Main {
    public static int longestSubarrayXOR(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(0, -1);
        int xr = 0;
        int ans = 0;
        for (int i = 0; i < nums.length; i++) {
            xr ^= nums[i];
            if (map.containsKey(xr ^ k)) {
                ans = Math.max(ans, i - map.get(xr ^ k));
            }
            map.putIfAbsent(xr, i);
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
            System.out.println(longestSubarrayXOR(nums, k));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
typedef struct Node {
    int key;
    int index;
    struct Node* next;
} Node;
#define SIZE 262147
Node* table[SIZE];
unsigned hash(int key) {
    return ((unsigned)key) % SIZE;
}
int getIndex(int key) {
    unsigned h = hash(key);
    Node* cur = table[h];
    while (cur) {
        if (cur->key == key) return cur->index;
        cur = cur->next;
    }
    return -1000000000;
}

void putIfAbsent(int key, int index) {
    unsigned h = hash(key);
    Node* cur = table[h];
    while (cur) {
        if (cur->key == key) return;
        cur = cur->next;
    }
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->index = index;
    node->next = table[h];
    table[h] = node;
}
int longestSubarrayXOR(int* nums, int numsSize, int k) {
    for (int i = 0; i < SIZE; i++) table[i] = NULL;
    putIfAbsent(0, -1);
    int xr = 0;
    int ans = 0;
    for (int i = 0; i < numsSize; i++) {
        xr ^= nums[i];
        int idx = getIndex(xr ^ k);
        if (idx != -1000000000 && i - idx > ans) ans = i - idx;
        putIfAbsent(xr, i);
    }
    return ans;
}
int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    int k;
    scanf("%d", &k);
    printf("%d\n", longestSubarrayXOR(nums, n, k));
    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;
int longestSubarrayXOR(vector<int>& nums, int k) {
    unordered_map<int, int> first;
    first[0] = -1;
    int xr = 0;
    int ans = 0;
    for (int i = 0; i < nums.size(); i++) {
        xr ^= nums[i];
        if (first.count(xr ^ k)) {
            ans = max(ans, i - first[xr ^ k]);
        }
        if (!first.count(xr)) first[xr] = i;
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
        cout << longestSubarrayXOR(nums, k) << "\n";
    }
    return 0;
}`
},'sxk-e4': {
  python: `def first_subarray_xor(nums, k):
    first = {0: -1}
    xr = 0
    for i, num in enumerate(nums):
        xr ^= num
        if (xr ^ k) in first:
            return [first[xr ^ k] + 1, i]
        if xr not in first:
            first[xr] = i
    return [-1, -1]

n = int(input())
nums = list(map(int, input().split()))
k = int(input())
ans = first_subarray_xor(nums, k)
print(ans[0], ans[1])`,
  java: `import java.util.*;
public class Main {
    public static int[] firstSubarrayXOR(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(0, -1);
        int xr = 0;
        for (int i = 0; i < nums.length; i++) {
            xr ^= nums[i];
            if (map.containsKey(xr ^ k)) {
                return new int[]{map.get(xr ^ k) + 1, i};
            }
            map.putIfAbsent(xr, i);
        }
        return new int[]{-1, -1};
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
            int[] ans = firstSubarrayXOR(nums, k);
            System.out.println(ans[0] + " " + ans[1]);
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int key;
    int index;
    struct Node* next;
} Node;

#define SIZE 262147

Node* table[SIZE];

unsigned hash(int key) {
    return ((unsigned)key) % SIZE;
}

int getIndex(int key) {
    unsigned h = hash(key);
    Node* cur = table[h];
    while (cur) {
        if (cur->key == key) return cur->index;
        cur = cur->next;
    }
    return -1000000000;
}

void putIfAbsent(int key, int index) {
    unsigned h = hash(key);
    Node* cur = table[h];
    while (cur) {
        if (cur->key == key) return;
        cur = cur->next;
    }
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->index = index;
    node->next = table[h];
    table[h] = node;
}

void firstSubarrayXOR(int* nums, int numsSize, int k, int* l, int* r) {
    for (int i = 0; i < SIZE; i++) table[i] = NULL;
    putIfAbsent(0, -1);
    int xr = 0;
    for (int i = 0; i < numsSize; i++) {
        xr ^= nums[i];
        int idx = getIndex(xr ^ k);
        if (idx != -1000000000) {
            *l = idx + 1;
            *r = i;
            return;
        }
        putIfAbsent(xr, i);
    }
    *l = -1;
    *r = -1;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    int k;
    scanf("%d", &k);
    int l, r;
    firstSubarrayXOR(nums, n, k, &l, &r);
    printf("%d %d\n", l, r);
    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

pair<int, int> firstSubarrayXOR(vector<int>& nums, int k) {
    unordered_map<int, int> first;
    first[0] = -1;
    int xr = 0;
    for (int i = 0; i < nums.size(); i++) {
        xr ^= nums[i];
        if (first.count(xr ^ k)) {
            return {first[xr ^ k] + 1, i};
        }
        if (!first.count(xr)) first[xr] = i;
    }
    return {-1, -1};
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
        auto ans = firstSubarrayXOR(nums, k);
        cout << ans.first << " " << ans.second << "\n";
    }
    return 0;
}`
},'sxk-e5': {
  python: `def count_prefix_xor(nums, k):
    xr = 0
    ans = 0
    for num in nums:
        xr ^= num
        if xr == k:
            ans += 1
    return ans

n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(count_prefix_xor(nums, k))`,
  java: `import java.util.*;
public class Main {
    public static int countPrefixXOR(int[] nums, int k) {
        int xr = 0;
        int ans = 0;
        for (int num : nums) {
            xr ^= num;
            if (xr == k) ans++;
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
            System.out.println(countPrefixXOR(nums, k));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
int countPrefixXOR(int* nums, int numsSize, int k) {
    int xr = 0;
    int ans = 0;
    for (int i = 0; i < numsSize; i++) {
        xr ^= nums[i];
        if (xr == k) ans++;
    }
    return ans;
}
int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    int k;
    scanf("%d", &k);
    printf("%d\n", countPrefixXOR(nums, n, k));
    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>

using namespace std;

int countPrefixXOR(vector<int>& nums, int k) {
    int xr = 0;
    int ans = 0;
    for (int num : nums) {
        xr ^= num;
        if (xr == k) ans++;
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
        cout << countPrefixXOR(nums, k) << "\n";
    }
    return 0;
}`
},'sxk-m1': {
  python: `class TrieNode:
    def __init__(self):
        self.child = [None, None]
        self.cnt = 0

def insert(root, num):
    node = root
    for b in range(31, -1, -1):
        bit = (num >> b) & 1
        if node.child[bit] is None:
            node.child[bit] = TrieNode()
        node = node.child[bit]
        node.cnt += 1

def query(root, num, k):
    node = root
    ans = 0
    for b in range(31, -1, -1):
        if node is None:
            break
        nb = (num >> b) & 1
        kb = (k >> b) & 1
        if kb:
            if node.child[nb]:
                ans += node.child[nb].cnt
            node = node.child[1 - nb]
        else:
            node = node.child[nb]
    return ans

def count_subarrays_xor_less_than_k(nums, k):
    root = TrieNode()
    insert(root, 0)
    xr = 0
    ans = 0
    for num in nums:
        xr ^= num
        ans += query(root, xr, k)
        insert(root, xr)
    return ans

n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(count_subarrays_xor_less_than_k(nums, k))`,
  java: `import java.util.*;
public class Main {
    static class Trie {
        Trie[] child = new Trie[2];
        int cnt;
    }

    static void insert(Trie root, int num) {
        Trie node = root;
        for (int b = 31; b >= 0; b--) {
            int bit = (num >> b) & 1;
            if (node.child[bit] == null) node.child[bit] = new Trie();
            node = node.child[bit];
            node.cnt++;
        }
    }

    static long query(Trie root, int num, int k) {
        Trie node = root;
        long ans = 0;
        for (int b = 31; b >= 0 && node != null; b--) {
            int nb = (num >> b) & 1;
            int kb = (k >> b) & 1;
            if (kb == 1) {
                if (node.child[nb] != null) ans += node.child[nb].cnt;
                node = node.child[1 - nb];
            } else {
                node = node.child[nb];
            }
        }
        return ans;
    }

    public static long countSubarraysXORLessThanK(int[] nums, int k) {
        Trie root = new Trie();
        insert(root, 0);
        int xr = 0;
        long ans = 0;
        for (int num : nums) {
            xr ^= num;
            ans += query(root, xr, k);
            insert(root, xr);
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int k = sc.nextInt();
            System.out.println(countSubarraysXORLessThanK(nums, k));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Trie {
    struct Trie* child[2];
    int cnt;
} Trie;

Trie* newNode() {
    Trie* node = (Trie*)calloc(1, sizeof(Trie));
    return node;
}

void insert(Trie* root, int num) {
    Trie* node = root;
    for (int b = 31; b >= 0; b--) {
        int bit = (num >> b) & 1;
        if (!node->child[bit]) node->child[bit] = newNode();
        node = node->child[bit];
        node->cnt++;
    }
}

long long query(Trie* root, int num, int k) {
    Trie* node = root;
    long long ans = 0;
    for (int b = 31; b >= 0 && node; b--) {
        int nb = (num >> b) & 1;
        int kb = (k >> b) & 1;
        if (kb) {
            if (node->child[nb]) ans += node->child[nb]->cnt;
            node = node->child[1 - nb];
        } else {
            node = node->child[nb];
        }
    }
    return ans;
}

long long countSubarraysXORLessThanK(int* nums, int n, int k) {
    Trie* root = newNode();
    insert(root, 0);
    int xr = 0;
    long long ans = 0;
    for (int i = 0; i < n; i++) {
        xr ^= nums[i];
        ans += query(root, xr, k);
        insert(root, xr);
    }
    return ans;
}

int main() {
    int n;
    if (scanf("%d",&n)!=1) return 0;
    int* nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    int k;
    scanf("%d",&k);
    printf("%lld\n",countSubarraysXORLessThanK(nums,n,k));
    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>

using namespace std;

struct Trie {
    Trie* child[2];
    int cnt;
    Trie() {
        child[0] = child[1] = nullptr;
        cnt = 0;
    }
};

void insert(Trie* root, int num) {
    Trie* node = root;
    for (int b = 31; b >= 0; b--) {
        int bit = (num >> b) & 1;
        if (!node->child[bit]) node->child[bit] = new Trie();
        node = node->child[bit];
        node->cnt++;
    }
}

long long query(Trie* root, int num, int k) {
    Trie* node = root;
    long long ans = 0;
    for (int b = 31; b >= 0 && node; b--) {
        int nb = (num >> b) & 1;
        int kb = (k >> b) & 1;
        if (kb) {
            if (node->child[nb]) ans += node->child[nb]->cnt;
            node = node->child[1 - nb];
        } else {
            node = node->child[nb];
        }
    }
    return ans;
}

long long countSubarraysXORLessThanK(vector<int>& nums, int k) {
    Trie* root = new Trie();
    insert(root, 0);
    int xr = 0;
    long long ans = 0;
    for (int num : nums) {
        xr ^= num;
        ans += query(root, xr, k);
        insert(root, xr);
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
        int k;
        cin >> k;
        cout << countSubarraysXORLessThanK(nums, k) << "\n";
    }
    return 0;
}`
},'sxk-m2': {
  python: `class TrieNode:
    def __init__(self):
        self.child = [None, None]

def insert(root, num):
    node = root
    for b in range(31, -1, -1):
        bit = (num >> b) & 1
        if node.child[bit] is None:
            node.child[bit] = TrieNode()
        node = node.child[bit]

def query(root, num):
    node = root
    ans = 0
    for b in range(31, -1, -1):
        bit = (num >> b) & 1
        if node.child[1 - bit]:
            ans |= (1 << b)
            node = node.child[1 - bit]
        else:
            node = node.child[bit]
    return ans

def maximum_subarray_xor(nums):
    root = TrieNode()
    insert(root, 0)
    xr = 0
    ans = 0
    for num in nums:
        xr ^= num
        ans = max(ans, query(root, xr))
        insert(root, xr)
    return ans

n = int(input())
nums = list(map(int, input().split()))
print(maximum_subarray_xor(nums))`,
  java: `import java.util.*;
public class Main {
    static class Trie {
        Trie[] child = new Trie[2];
    }

    static void insert(Trie root, int num) {
        Trie node = root;
        for (int b = 31; b >= 0; b--) {
            int bit = (num >> b) & 1;
            if (node.child[bit] == null) node.child[bit] = new Trie();
            node = node.child[bit];
        }
    }

    static int query(Trie root, int num) {
        Trie node = root;
        int ans = 0;
        for (int b = 31; b >= 0; b--) {
            int bit = (num >> b) & 1;
            if (node.child[1 - bit] != null) {
                ans |= (1 << b);
                node = node.child[1 - bit];
            } else {
                node = node.child[bit];
            }
        }
        return ans;
    }

    public static int maximumSubarrayXOR(int[] nums) {
        Trie root = new Trie();
        insert(root, 0);
        int xr = 0;
        int ans = 0;
        for (int num : nums) {
            xr ^= num;
            ans = Math.max(ans, query(root, xr));
            insert(root, xr);
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            System.out.println(maximumSubarrayXOR(nums));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Trie {
    struct Trie* child[2];
} Trie;

Trie* newNode() {
    return (Trie*)calloc(1, sizeof(Trie));
}

void insert(Trie* root, int num) {
    Trie* node = root;
    for (int b = 31; b >= 0; b--) {
        int bit = (num >> b) & 1;
        if (!node->child[bit]) node->child[bit] = newNode();
        node = node->child[bit];
    }
}

int query(Trie* root, int num) {
    Trie* node = root;
    int ans = 0;
    for (int b = 31; b >= 0; b--) {
        int bit = (num >> b) & 1;
        if (node->child[1 - bit]) {
            ans |= (1 << b);
            node = node->child[1 - bit];
        } else {
            node = node->child[bit];
        }
    }
    return ans;
}

int maximumSubarrayXOR(int* nums, int n) {
    Trie* root = newNode();
    insert(root, 0);
    int xr = 0;
    int ans = 0;
    for (int i = 0; i < n; i++) {
        xr ^= nums[i];
        if (query(root, xr) > ans) ans = query(root, xr);
        insert(root, xr);
    }
    return ans;
}

int main() {
    int n;
    if (scanf("%d",&n)!=1) return 0;
    int* nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    printf("%d\n",maximumSubarrayXOR(nums,n));
    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>

using namespace std;

struct Trie {
    Trie* child[2];
    Trie() {
        child[0] = child[1] = nullptr;
    }
};

void insert(Trie* root, int num) {
    Trie* node = root;
    for (int b = 31; b >= 0; b--) {
        int bit = (num >> b) & 1;
        if (!node->child[bit]) node->child[bit] = new Trie();
        node = node->child[bit];
    }
}

int query(Trie* root, int num) {
    Trie* node = root;
    int ans = 0;
    for (int b = 31; b >= 0; b--) {
        int bit = (num >> b) & 1;
        if (node->child[1 - bit]) {
            ans |= (1 << b);
            node = node->child[1 - bit];
        } else {
            node = node->child[bit];
        }
    }
    return ans;
}

int maximumSubarrayXOR(vector<int>& nums) {
    Trie* root = new Trie();
    insert(root, 0);
    int xr = 0;
    int ans = 0;
    for (int num : nums) {
        xr ^= num;
        ans = max(ans, query(root, xr));
        insert(root, xr);
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
        cout << maximumSubarrayXOR(nums) << "\n";
    }
    return 0;
}`
},'sxk-m3': {
  python: `from collections import defaultdict

def count_subarrays_divisible_by_power_of_two(nums, p):
    mod = 1 << p
    freq = defaultdict(int)
    freq[0] = 1
    xr = 0
    ans = 0
    for num in nums:
        xr ^= num
        rem = xr % mod
        ans += freq[rem]
        freq[rem] += 1
    return ans

n = int(input())
nums = list(map(int, input().split()))
p = int(input())
print(count_subarrays_divisible_by_power_of_two(nums, p))`,
  java: `import java.util.*;
public class Main {
    public static long countSubarraysDivisibleByPowerOfTwo(int[] nums, int p) {
        int mod = 1 << p;
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(0, 1);
        int xr = 0;
        long ans = 0;
        for (int num : nums) {
            xr ^= num;
            int rem = xr % mod;
            ans += map.getOrDefault(rem, 0);
            map.put(rem, map.getOrDefault(rem, 0) + 1);
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int p = sc.nextInt();
            System.out.println(countSubarraysDivisibleByPowerOfTwo(nums, p));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int key;
    int value;
    struct Node* next;
} Node;

#define SIZE 262147

Node* table[SIZE];

unsigned hash(int key) {
    return ((unsigned)key) % SIZE;
}

int get(int key) {
    unsigned h = hash(key);
    Node* cur = table[h];
    while (cur) {
        if (cur->key == key) return cur->value;
        cur = cur->next;
    }
    return 0;
}

void put(int key) {
    unsigned h = hash(key);
    Node* cur = table[h];
    while (cur) {
        if (cur->key == key) {
            cur->value++;
            return;
        }
        cur = cur->next;
    }
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->value = 1;
    node->next = table[h];
    table[h] = node;
}

long long countSubarraysDivisibleByPowerOfTwo(int* nums, int n, int p) {
    for (int i = 0; i < SIZE; i++) table[i] = NULL;
    int mod = 1 << p;
    put(0);
    int xr = 0;
    long long ans = 0;
    for (int i = 0; i < n; i++) {
        xr ^= nums[i];
        int rem = xr % mod;
        ans += get(rem);
        put(rem);
    }
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    int p;
    scanf("%d", &p);
    printf("%lld\n", countSubarraysDivisibleByPowerOfTwo(nums, n, p));
    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

long long countSubarraysDivisibleByPowerOfTwo(vector<int>& nums, int p) {
    int mod = 1 << p;
    unordered_map<int, int> freq;
    freq[0] = 1;
    int xr = 0;
    long long ans = 0;
    for (int num : nums) {
        xr ^= num;
        int rem = xr % mod;
        ans += freq[rem];
        freq[rem]++;
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
        int p;
        cin >> p;
        cout << countSubarraysDivisibleByPowerOfTwo(nums, p) << "\n";
    }
    return 0;
}`
},'sxk-m4': {
  python: `from collections import defaultdict

def count_distinct_prefix_xor(nums):
    xr = 0
    seen = set([0])
    for num in nums:
        xr ^= num
        seen.add(xr)
    return len(seen)

n = int(input())
nums = list(map(int, input().split()))
print(count_distinct_prefix_xor(nums))`,
  java: `import java.util.*;
public class Main {
    public static int countDistinctPrefixXOR(int[] nums) {
        HashSet<Integer> set = new HashSet<>();
        int xr = 0;
        set.add(0);
        for (int num : nums) {
            xr ^= num;
            set.add(xr);
        }
        return set.size();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            System.out.println(countDistinctPrefixXOR(nums));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int key;
    struct Node* next;
} Node;

#define SIZE 262147

Node* table[SIZE];

unsigned hash(int key) {
    return ((unsigned)key) % SIZE;
}

int exists(int key) {
    unsigned h = hash(key);
    Node* cur = table[h];
    while (cur) {
        if (cur->key == key) return 1;
        cur = cur->next;
    }
    return 0;
}

void insert(int key) {
    if (exists(key)) return;
    unsigned h = hash(key);
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->next = table[h];
    table[h] = node;
}

int countDistinctPrefixXOR(int* nums, int n) {
    for (int i = 0; i < SIZE; i++) table[i] = NULL;
    int xr = 0;
    int ans = 1;
    insert(0);
    for (int i = 0; i < n; i++) {
        xr ^= nums[i];
        if (!exists(xr)) {
            insert(xr);
            ans++;
        }
    }
    return ans;
}

int main() {
    int n;
    if (scanf("%d",&n)!=1) return 0;
    int* nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    printf("%d\n",countDistinctPrefixXOR(nums,n));
    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_set>

using namespace std;

int countDistinctPrefixXOR(vector<int>& nums) {
    unordered_set<int> seen;
    int xr = 0;
    seen.insert(0);
    for (int num : nums) {
        xr ^= num;
        seen.insert(xr);
    }
    return seen.size();
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        cout << countDistinctPrefixXOR(nums) << "\n";
    }
    return 0;
}`
},
'sxk-m5': {
  python: `class TrieNode:
    def __init__(self):
        self.child = [None, None]

def insert(root, num):
    node = root
    for b in range(31, -1, -1):
        bit = (num >> b) & 1
        if node.child[bit] is None:
            node.child[bit] = TrieNode()
        node = node.child[bit]

def query(root, num):
    node = root
    ans = 0
    for b in range(31, -1, -1):
        bit = (num >> b) & 1
        if node.child[1 - bit]:
            ans |= (1 << b)
            node = node.child[1 - bit]
        else:
            node = node.child[bit]
    return ans

def max_prefix_xor(nums):
    root = TrieNode()
    insert(root, 0)
    xr = 0
    ans = 0
    for num in nums:
        xr ^= num
        ans = max(ans, query(root, xr))
        insert(root, xr)
    return ans

n = int(input())
nums = list(map(int, input().split()))
print(max_prefix_xor(nums))`,
  java: `import java.util.*;
public class Main {
    static class Trie {
        Trie[] child = new Trie[2];
    }

    static void insert(Trie root, int num) {
        Trie node = root;
        for (int b = 31; b >= 0; b--) {
            int bit = (num >> b) & 1;
            if (node.child[bit] == null) node.child[bit] = new Trie();
            node = node.child[bit];
        }
    }

    static int query(Trie root, int num) {
        Trie node = root;
        int ans = 0;
        for (int b = 31; b >= 0; b--) {
            int bit = (num >> b) & 1;
            if (node.child[1 - bit] != null) {
                ans |= (1 << b);
                node = node.child[1 - bit];
            } else {
                node = node.child[bit];
            }
        }
        return ans;
    }

    public static int maxPrefixXOR(int[] nums) {
        Trie root = new Trie();
        insert(root, 0);
        int xr = 0;
        int ans = 0;
        for (int num : nums) {
            xr ^= num;
            ans = Math.max(ans, query(root, xr));
            insert(root, xr);
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            System.out.println(maxPrefixXOR(nums));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Trie {
    struct Trie* child[2];
} Trie;

Trie* newNode() {
    return (Trie*)calloc(1, sizeof(Trie));
}

void insert(Trie* root, int num) {
    Trie* node = root;
    for (int b = 31; b >= 0; b--) {
        int bit = (num >> b) & 1;
        if (!node->child[bit]) node->child[bit] = newNode();
        node = node->child[bit];
    }
}

int query(Trie* root, int num) {
    Trie* node = root;
    int ans = 0;
    for (int b = 31; b >= 0; b--) {
        int bit = (num >> b) & 1;
        if (node->child[1 - bit]) {
            ans |= (1 << b);
            node = node->child[1 - bit];
        } else {
            node = node->child[bit];
        }
    }
    return ans;
}

int maxPrefixXOR(int* nums, int n) {
    Trie* root = newNode();
    insert(root, 0);
    int xr = 0;
    int ans = 0;
    for (int i = 0; i < n; i++) {
        xr ^= nums[i];
        int cur = query(root, xr);
        if (cur > ans) ans = cur;
        insert(root, xr);
    }
    return ans;
}

int main() {
    int n;
    if (scanf("%d",&n)!=1) return 0;
    int* nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    printf("%d\n",maxPrefixXOR(nums,n));
    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>

using namespace std;

struct Trie {
    Trie* child[2];
    Trie() {
        child[0] = child[1] = nullptr;
    }
};

void insert(Trie* root, int num) {
    Trie* node = root;
    for (int b = 31; b >= 0; b--) {
        int bit = (num >> b) & 1;
        if (!node->child[bit]) node->child[bit] = new Trie();
        node = node->child[bit];
    }
}

int query(Trie* root, int num) {
    Trie* node = root;
    int ans = 0;
    for (int b = 31; b >= 0; b--) {
        int bit = (num >> b) & 1;
        if (node->child[1 - bit]) {
            ans |= (1 << b);
            node = node->child[1 - bit];
        } else {
            node = node->child[bit];
        }
    }
    return ans;
}

int maxPrefixXOR(vector<int>& nums) {
    Trie* root = new Trie();
    insert(root, 0);
    int xr = 0;
    int ans = 0;
    for (int num : nums) {
        xr ^= num;
        ans = max(ans, query(root, xr));
        insert(root, xr);
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
        cout << maxPrefixXOR(nums) << "\n";
    }
    return 0;
}`
},'sxk-h1': {
  python: `class TrieNode:
    def __init__(self):
        self.child = [None, None]
        self.cnt = 0

def insert(root, num):
    node = root
    for b in range(31, -1, -1):
        bit = (num >> b) & 1
        if node.child[bit] is None:
            node.child[bit] = TrieNode()
        node = node.child[bit]
        node.cnt += 1

def remove(root, num):
    node = root
    for b in range(31, -1, -1):
        bit = (num >> b) & 1
        node = node.child[bit]
        node.cnt -= 1

def query(root, num):
    node = root
    ans = 0
    for b in range(31, -1, -1):
        bit = (num >> b) & 1
        if node.child[1 - bit] and node.child[1 - bit].cnt > 0:
            ans |= (1 << b)
            node = node.child[1 - bit]
        else:
            node = node.child[bit]
    return ans

def maximum_pair_xor(nums):
    root = TrieNode()
    for num in nums:
        insert(root, num)
    ans = 0
    for num in nums:
        remove(root, num)
        ans = max(ans, query(root, num))
        insert(root, num)
    return ans

n = int(input())
nums = list(map(int, input().split()))
print(maximum_pair_xor(nums))`,
  java: `import java.util.*;
public class Main {
    static class Trie {
        Trie[] child = new Trie[2];
        int cnt;
    }

    static void insert(Trie root, int num) {
        Trie node = root;
        for (int b = 31; b >= 0; b--) {
            int bit = (num >> b) & 1;
            if (node.child[bit] == null) node.child[bit] = new Trie();
            node = node.child[bit];
            node.cnt++;
        }
    }

    static void remove(Trie root, int num) {
        Trie node = root;
        for (int b = 31; b >= 0; b--) {
            int bit = (num >> b) & 1;
            node = node.child[bit];
            node.cnt--;
        }
    }

    static int query(Trie root, int num) {
        Trie node = root;
        int ans = 0;
        for (int b = 31; b >= 0; b--) {
            int bit = (num >> b) & 1;
            if (node.child[1 - bit] != null && node.child[1 - bit].cnt > 0) {
                ans |= (1 << b);
                node = node.child[1 - bit];
            } else {
                node = node.child[bit];
            }
        }
        return ans;
    }

    public static int maximumPairXOR(int[] nums) {
        Trie root = new Trie();
        for (int num : nums) insert(root, num);
        int ans = 0;
        for (int num : nums) {
            remove(root, num);
            ans = Math.max(ans, query(root, num));
            insert(root, num);
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            System.out.println(maximumPairXOR(nums));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Trie {
    struct Trie* child[2];
    int cnt;
} Trie;

Trie* newNode() {
    return (Trie*)calloc(1, sizeof(Trie));
}

void insert(Trie* root, int num) {
    Trie* node = root;
    for (int b = 31; b >= 0; b--) {
        int bit = (num >> b) & 1;
        if (!node->child[bit]) node->child[bit] = newNode();
        node = node->child[bit];
        node->cnt++;
    }
}

void removeNode(Trie* root, int num) {
    Trie* node = root;
    for (int b = 31; b >= 0; b--) {
        int bit = (num >> b) & 1;
        node = node->child[bit];
        node->cnt--;
    }
}

int query(Trie* root, int num) {
    Trie* node = root;
    int ans = 0;
    for (int b = 31; b >= 0; b--) {
        int bit = (num >> b) & 1;
        if (node->child[1-bit] && node->child[1-bit]->cnt > 0) {
            ans |= (1<<b);
            node = node->child[1-bit];
        } else {
            node = node->child[bit];
        }
    }
    return ans;
}

int maximumPairXOR(int* nums,int n){
    Trie* root=newNode();
    for(int i=0;i<n;i++) insert(root,nums[i]);
    int ans=0;
    for(int i=0;i<n;i++){
        removeNode(root,nums[i]);
        int cur=query(root,nums[i]);
        if(cur>ans) ans=cur;
        insert(root,nums[i]);
    }
    return ans;
}

int main(){
    int n;
    if(scanf("%d",&n)!=1) return 0;
    int* nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    printf("%d\n",maximumPairXOR(nums,n));
    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>

using namespace std;

struct Trie{
    Trie* child[2];
    int cnt;
    Trie(){
        child[0]=child[1]=nullptr;
        cnt=0;
    }
};

void insert(Trie* root,int num){
    Trie* node=root;
    for(int b=31;b>=0;b--){
        int bit=(num>>b)&1;
        if(!node->child[bit]) node->child[bit]=new Trie();
        node=node->child[bit];
        node->cnt++;
    }
}

void removeNode(Trie* root,int num){
    Trie* node=root;
    for(int b=31;b>=0;b--){
        int bit=(num>>b)&1;
        node=node->child[bit];
        node->cnt--;
    }
}

int query(Trie* root,int num){
    Trie* node=root;
    int ans=0;
    for(int b=31;b>=0;b--){
        int bit=(num>>b)&1;
        if(node->child[1-bit] && node->child[1-bit]->cnt>0){
            ans|=(1<<b);
            node=node->child[1-bit];
        }else{
            node=node->child[bit];
        }
    }
    return ans;
}

int maximumPairXOR(vector<int>& nums){
    Trie* root=new Trie();
    for(int x:nums) insert(root,x);
    int ans=0;
    for(int x:nums){
        removeNode(root,x);
        ans=max(ans,query(root,x));
        insert(root,x);
    }
    return ans;
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if(cin>>n){
        vector<int> nums(n);
        for(int i=0;i<n;i++) cin>>nums[i];
        cout<<maximumPairXOR(nums)<<"\n";
    }
    return 0;
}`
},'sxk-h2': {
  python: `class TrieNode:
    def __init__(self):
        self.child = [None, None]

def insert(root, num):
    node = root
    for b in range(31, -1, -1):
        bit = (num >> b) & 1
        if node.child[bit] is None:
            node.child[bit] = TrieNode()
        node = node.child[bit]

def query(root, num):
    node = root
    ans = 0
    for b in range(31, -1, -1):
        bit = (num >> b) & 1
        if node.child[1 - bit]:
            ans |= (1 << b)
            node = node.child[1 - bit]
        else:
            node = node.child[bit]
    return ans

def maximum_prefix_suffix_xor(nums):
    n = len(nums)
    suffix = [0] * (n + 1)
    for i in range(n - 1, -1, -1):
        suffix[i] = suffix[i + 1] ^ nums[i]
    root = TrieNode()
    insert(root, 0)
    prefix = 0
    ans = 0
    for i in range(n):
        prefix ^= nums[i]
        ans = max(ans, query(root, prefix))
        insert(root, suffix[i + 1])
    return ans

n = int(input())
nums = list(map(int, input().split()))
print(maximum_prefix_suffix_xor(nums))`,
  java: `import java.util.*;
public class Main {
    static class Trie {
        Trie[] child = new Trie[2];
    }

    static void insert(Trie root, int num) {
        Trie node = root;
        for (int b = 31; b >= 0; b--) {
            int bit = (num >> b) & 1;
            if (node.child[bit] == null) node.child[bit] = new Trie();
            node = node.child[bit];
        }
    }

    static int query(Trie root, int num) {
        Trie node = root;
        int ans = 0;
        for (int b = 31; b >= 0; b--) {
            int bit = (num >> b) & 1;
            if (node.child[1 - bit] != null) {
                ans |= (1 << b);
                node = node.child[1 - bit];
            } else {
                node = node.child[bit];
            }
        }
        return ans;
    }

    public static int maximumPrefixSuffixXOR(int[] nums) {
        int n = nums.length;
        int[] suffix = new int[n + 1];
        for (int i = n - 1; i >= 0; i--) suffix[i] = suffix[i + 1] ^ nums[i];
        Trie root = new Trie();
        insert(root, 0);
        int prefix = 0;
        int ans = 0;
        for (int i = 0; i < n; i++) {
            prefix ^= nums[i];
            ans = Math.max(ans, query(root, prefix));
            insert(root, suffix[i + 1]);
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            System.out.println(maximumPrefixSuffixXOR(nums));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Trie{
    struct Trie* child[2];
}Trie;

Trie* newNode(){
    return (Trie*)calloc(1,sizeof(Trie));
}

void insert(Trie* root,int num){
    Trie* node=root;
    for(int b=31;b>=0;b--){
        int bit=(num>>b)&1;
        if(!node->child[bit]) node->child[bit]=newNode();
        node=node->child[bit];
    }
}

int query(Trie* root,int num){
    Trie* node=root;
    int ans=0;
    for(int b=31;b>=0;b--){
        int bit=(num>>b)&1;
        if(node->child[1-bit]){
            ans|=(1<<b);
            node=node->child[1-bit];
        }else{
            node=node->child[bit];
        }
    }
    return ans;
}

int maximumPrefixSuffixXOR(int* nums,int n){
    int* suffix=(int*)calloc(n+1,sizeof(int));
    for(int i=n-1;i>=0;i--) suffix[i]=suffix[i+1]^nums[i];
    Trie* root=newNode();
    insert(root,0);
    int prefix=0,ans=0;
    for(int i=0;i<n;i++){
        prefix^=nums[i];
        int cur=query(root,prefix);
        if(cur>ans) ans=cur;
        insert(root,suffix[i+1]);
    }
    free(suffix);
    return ans;
}

int main(){
    int n;
    if(scanf("%d",&n)!=1) return 0;
    int* nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    printf("%d\n",maximumPrefixSuffixXOR(nums,n));
    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>

using namespace std;

struct Trie{
    Trie* child[2];
    Trie(){
        child[0]=child[1]=nullptr;
    }
};

void insert(Trie* root,int num){
    Trie* node=root;
    for(int b=31;b>=0;b--){
        int bit=(num>>b)&1;
        if(!node->child[bit]) node->child[bit]=new Trie();
        node=node->child[bit];
    }
}

int query(Trie* root,int num){
    Trie* node=root;
    int ans=0;
    for(int b=31;b>=0;b--){
        int bit=(num>>b)&1;
        if(node->child[1-bit]){
            ans|=(1<<b);
            node=node->child[1-bit];
        }else{
            node=node->child[bit];
        }
    }
    return ans;
}

int maximumPrefixSuffixXOR(vector<int>& nums){
    int n=nums.size();
    vector<int> suffix(n+1,0);
    for(int i=n-1;i>=0;i--) suffix[i]=suffix[i+1]^nums[i];
    Trie* root=new Trie();
    insert(root,0);
    int prefix=0,ans=0;
    for(int i=0;i<n;i++){
        prefix^=nums[i];
        ans=max(ans,query(root,prefix));
        insert(root,suffix[i+1]);
    }
    return ans;
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if(cin>>n){
        vector<int> nums(n);
        for(int i=0;i<n;i++) cin>>nums[i];
        cout<<maximumPrefixSuffixXOR(nums)<<"\n";
    }
    return 0;
}`
},'sxk-h3': {
  python: `class TrieNode:
    def __init__(self):
        self.child = [None, None]

def insert(root, num):
    node = root
    for b in range(31, -1, -1):
        bit = (num >> b) & 1
        if node.child[bit] is None:
            node.child[bit] = TrieNode()
        node = node.child[bit]

def query(root, num):
    node = root
    ans = 0
    for b in range(31, -1, -1):
        bit = (num >> b) & 1
        if node.child[1 - bit]:
            ans |= (1 << b)
            node = node.child[1 - bit]
        else:
            node = node.child[bit]
    return ans

def maximum_prefix_xor(nums):
    root = TrieNode()
    insert(root, 0)
    xr = 0
    ans = 0
    for num in nums:
        xr ^= num
        ans = max(ans, query(root, xr))
        insert(root, xr)
    return ans

t = int(input())
for _ in range(t):
    n = int(input())
    nums = list(map(int, input().split()))
    print(maximum_prefix_xor(nums))`,
  java: `import java.util.*;
public class Main {
    static class Trie {
        Trie[] child = new Trie[2];
    }

    static void insert(Trie root, int num) {
        Trie node = root;
        for (int b = 31; b >= 0; b--) {
            int bit = (num >> b) & 1;
            if (node.child[bit] == null) node.child[bit] = new Trie();
            node = node.child[bit];
        }
    }

    static int query(Trie root, int num) {
        Trie node = root;
        int ans = 0;
        for (int b = 31; b >= 0; b--) {
            int bit = (num >> b) & 1;
            if (node.child[1 - bit] != null) {
                ans |= (1 << b);
                node = node.child[1 - bit];
            } else {
                node = node.child[bit];
            }
        }
        return ans;
    }

    static int maximumPrefixXOR(int[] nums) {
        Trie root = new Trie();
        insert(root, 0);
        int xr = 0;
        int ans = 0;
        for (int num : nums) {
            xr ^= num;
            ans = Math.max(ans, query(root, xr));
            insert(root, xr);
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while (t-- > 0) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            System.out.println(maximumPrefixXOR(nums));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Trie{
    struct Trie* child[2];
}Trie;

Trie* newNode(){
    return (Trie*)calloc(1,sizeof(Trie));
}

void insert(Trie* root,int num){
    Trie* node=root;
    for(int b=31;b>=0;b--){
        int bit=(num>>b)&1;
        if(!node->child[bit]) node->child[bit]=newNode();
        node=node->child[bit];
    }
}

int query(Trie* root,int num){
    Trie* node=root;
    int ans=0;
    for(int b=31;b>=0;b--){
        int bit=(num>>b)&1;
        if(node->child[1-bit]){
            ans|=(1<<b);
            node=node->child[1-bit];
        }else{
            node=node->child[bit];
        }
    }
    return ans;
}

int maximumPrefixXOR(int* nums,int n){
    Trie* root=newNode();
    insert(root,0);
    int xr=0,ans=0;
    for(int i=0;i<n;i++){
        xr^=nums[i];
        int cur=query(root,xr);
        if(cur>ans) ans=cur;
        insert(root,xr);
    }
    return ans;
}

int main(){
    int t;
    scanf("%d",&t);
    while(t--){
        int n;
        scanf("%d",&n);
        int* nums=(int*)malloc(n*sizeof(int));
        for(int i=0;i<n;i++) scanf("%d",&nums[i]);
        printf("%d\n",maximumPrefixXOR(nums,n));
        free(nums);
    }
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>

using namespace std;

struct Trie{
    Trie* child[2];
    Trie(){
        child[0]=child[1]=nullptr;
    }
};

void insert(Trie* root,int num){
    Trie* node=root;
    for(int b=31;b>=0;b--){
        int bit=(num>>b)&1;
        if(!node->child[bit]) node->child[bit]=new Trie();
        node=node->child[bit];
    }
}

int query(Trie* root,int num){
    Trie* node=root;
    int ans=0;
    for(int b=31;b>=0;b--){
        int bit=(num>>b)&1;
        if(node->child[1-bit]){
            ans|=(1<<b);
            node=node->child[1-bit];
        }else{
            node=node->child[bit];
        }
    }
    return ans;
}

int maximumPrefixXOR(vector<int>& nums){
    Trie* root=new Trie();
    insert(root,0);
    int xr=0,ans=0;
    for(int num:nums){
        xr^=num;
        ans=max(ans,query(root,xr));
        insert(root,xr);
    }
    return ans;
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        vector<int> nums(n);
        for(int i=0;i<n;i++) cin>>nums[i];
        cout<<maximumPrefixXOR(nums)<<"\n";
    }
    return 0;
}`
},'sxk-h4': {
  python: `class TrieNode:
    def __init__(self):
        self.child = [None, None]

def insert(root, num):
    node = root
    for b in range(31, -1, -1):
        bit = (num >> b) & 1
        if node.child[bit] is None:
            node.child[bit] = TrieNode()
        node = node.child[bit]

def query(root, num):
    node = root
    ans = 0
    for b in range(31, -1, -1):
        bit = (num >> b) & 1
        if node.child[1 - bit]:
            ans |= (1 << b)
            node = node.child[1 - bit]
        else:
            node = node.child[bit]
    return ans

def maximum_xor_after_updates(nums, queries):
    root = TrieNode()
    for num in nums:
        insert(root, num)
    ans = []
    for x in queries:
        ans.append(query(root, x))
    return ans

n = int(input())
nums = list(map(int, input().split()))
q = int(input())
queries = [int(input()) for _ in range(q)]
for x in maximum_xor_after_updates(nums, queries):
    print(x)`,
  java: `import java.util.*;
public class Main {
    static class Trie {
        Trie[] child = new Trie[2];
    }

    static void insert(Trie root, int num) {
        Trie node = root;
        for (int b = 31; b >= 0; b--) {
            int bit = (num >> b) & 1;
            if (node.child[bit] == null) node.child[bit] = new Trie();
            node = node.child[bit];
        }
    }

    static int query(Trie root, int num) {
        Trie node = root;
        int ans = 0;
        for (int b = 31; b >= 0; b--) {
            int bit = (num >> b) & 1;
            if (node.child[1 - bit] != null) {
                ans |= (1 << b);
                node = node.child[1 - bit];
            } else {
                node = node.child[bit];
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        Trie root = new Trie();
        for (int i = 0; i < n; i++) insert(root, sc.nextInt());
        int q = sc.nextInt();
        while (q-- > 0) {
            int x = sc.nextInt();
            System.out.println(query(root, x));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Trie{
    struct Trie* child[2];
}Trie;

Trie* newNode(){
    return (Trie*)calloc(1,sizeof(Trie));
}

void insert(Trie* root,int num){
    Trie* node=root;
    for(int b=31;b>=0;b--){
        int bit=(num>>b)&1;
        if(!node->child[bit]) node->child[bit]=newNode();
        node=node->child[bit];
    }
}

int query(Trie* root,int num){
    Trie* node=root;
    int ans=0;
    for(int b=31;b>=0;b--){
        int bit=(num>>b)&1;
        if(node->child[1-bit]){
            ans|=(1<<b);
            node=node->child[1-bit];
        }else{
            node=node->child[bit];
        }
    }
    return ans;
}

int main(){
    int n;
    scanf("%d",&n);
    Trie* root=newNode();
    for(int i=0;i<n;i++){
        int x;
        scanf("%d",&x);
        insert(root,x);
    }
    int q;
    scanf("%d",&q);
    while(q--){
        int x;
        scanf("%d",&x);
        printf("%d\n",query(root,x));
    }
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>

using namespace std;

struct Trie{
    Trie* child[2];
    Trie(){
        child[0]=child[1]=nullptr;
    }
};

void insert(Trie* root,int num){
    Trie* node=root;
    for(int b=31;b>=0;b--){
        int bit=(num>>b)&1;
        if(!node->child[bit]) node->child[bit]=new Trie();
        node=node->child[bit];
    }
}

int query(Trie* root,int num){
    Trie* node=root;
    int ans=0;
    for(int b=31;b>=0;b--){
        int bit=(num>>b)&1;
        if(node->child[1-bit]){
            ans|=(1<<b);
            node=node->child[1-bit];
        }else{
            node=node->child[bit];
        }
    }
    return ans;
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin>>n;
    Trie* root=new Trie();
    for(int i=0;i<n;i++){
        int x;
        cin>>x;
        insert(root,x);
    }

    int q;
    cin>>q;
    while(q--){
        int x;
        cin>>x;
        cout<<query(root,x)<<"\n";
    }
    return 0;
}`
},'sxk-h5': {
  python: `class TrieNode:
    def __init__(self):
        self.child = [None, None]

def insert(root, num):
    node = root
    for b in range(31, -1, -1):
        bit = (num >> b) & 1
        if node.child[bit] is None:
            node.child[bit] = TrieNode()
        node = node.child[bit]

def query(root, num):
    node = root
    ans = 0
    for b in range(31, -1, -1):
        bit = (num >> b) & 1
        if node.child[1 - bit]:
            ans |= (1 << b)
            node = node.child[1 - bit]
        else:
            node = node.child[bit]
    return ans

def maximum_xor_queries(nums, queries):
    root = TrieNode()
    for num in nums:
        insert(root, num)
    ans = []
    for x in queries:
        ans.append(query(root, x))
    return ans

n = int(input())
nums = list(map(int, input().split()))
q = int(input())
queries = [int(input()) for _ in range(q)]
for x in maximum_xor_queries(nums, queries):
    print(x)`,
  java: `import java.util.*;
public class Main {
    static class Trie {
        Trie[] child = new Trie[2];
    }

    static void insert(Trie root, int num) {
        Trie node = root;
        for (int b = 31; b >= 0; b--) {
            int bit = (num >> b) & 1;
            if (node.child[bit] == null) node.child[bit] = new Trie();
            node = node.child[bit];
        }
    }

    static int query(Trie root, int num) {
        Trie node = root;
        int ans = 0;
        for (int b = 31; b >= 0; b--) {
            int bit = (num >> b) & 1;
            if (node.child[1 - bit] != null) {
                ans |= (1 << b);
                node = node.child[1 - bit];
            } else {
                node = node.child[bit];
            }
        }
        return ans;
    }

    public static List<Integer> maximumXORQueries(int[] nums, int[] queries) {
        Trie root = new Trie();
        for (int num : nums) insert(root, num);
        List<Integer> ans = new ArrayList<>();
        for (int x : queries) ans.add(query(root, x));
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        int q = sc.nextInt();
        int[] queries = new int[q];
        for (int i = 0; i < q; i++) queries[i] = sc.nextInt();
        List<Integer> ans = maximumXORQueries(nums, queries);
        for (int x : ans) System.out.println(x);
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Trie{
    struct Trie* child[2];
}Trie;

Trie* newNode(){
    return (Trie*)calloc(1,sizeof(Trie));
}

void insert(Trie* root,int num){
    Trie* node=root;
    for(int b=31;b>=0;b--){
        int bit=(num>>b)&1;
        if(!node->child[bit]) node->child[bit]=newNode();
        node=node->child[bit];
    }
}

int query(Trie* root,int num){
    Trie* node=root;
    int ans=0;
    for(int b=31;b>=0;b--){
        int bit=(num>>b)&1;
        if(node->child[1-bit]){
            ans|=(1<<b);
            node=node->child[1-bit];
        }else{
            node=node->child[bit];
        }
    }
    return ans;
}

int main(){
    int n;
    scanf("%d",&n);
    Trie* root=newNode();
    for(int i=0;i<n;i++){
        int x;
        scanf("%d",&x);
        insert(root,x);
    }
    int q;
    scanf("%d",&q);
    while(q--){
        int x;
        scanf("%d",&x);
        printf("%d\n",query(root,x));
    }
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>

using namespace std;

struct Trie{
    Trie* child[2];
    Trie(){
        child[0]=child[1]=nullptr;
    }
};

void insert(Trie* root,int num){
    Trie* node=root;
    for(int b=31;b>=0;b--){
        int bit=(num>>b)&1;
        if(!node->child[bit]) node->child[bit]=new Trie();
        node=node->child[bit];
    }
}

int query(Trie* root,int num){
    Trie* node=root;
    int ans=0;
    for(int b=31;b>=0;b--){
        int bit=(num>>b)&1;
        if(node->child[1-bit]){
            ans|=(1<<b);
            node=node->child[1-bit];
        }else{
            node=node->child[bit];
        }
    }
    return ans;
}

vector<int> maximumXORQueries(vector<int>& nums, vector<int>& queries){
    Trie* root=new Trie();
    for(int x:nums) insert(root,x);
    vector<int> ans;
    for(int x:queries) ans.push_back(query(root,x));
    return ans;
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin>>n;
    vector<int> nums(n);
    for(int i=0;i<n;i++) cin>>nums[i];

    int q;
    cin>>q;
    vector<int> queries(q);
    for(int i=0;i<q;i++) cin>>queries[i];

    vector<int> ans=maximumXORQueries(nums,queries);
    for(int x:ans) cout<<x<<"\n";
    return 0;
}`
}
};
