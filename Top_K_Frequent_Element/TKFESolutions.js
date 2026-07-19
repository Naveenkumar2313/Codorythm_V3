export const topKFrequentProblems = {
    'tkf-e1': {
  python: `from collections import Counter
import heapq
def top_k_frequent(nums, k):
    freq = Counter(nums)
    heap = [(-count, num) for num, count in freq.items()]
    heapq.heapify(heap)
    ans = []
    while k > 0:
        ans.append(heapq.heappop(heap)[1])
        k -= 1
    return ans

n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(*top_k_frequent(nums, k))`,
  java: `import java.util.*;
public class Main {
    public static List<Integer> topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> freq = new HashMap<>();
        for (int num : nums) {
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        }
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> {
            if (b[1] != a[1]) return b[1] - a[1];
            return a[0] - b[0];
        });
        for (Map.Entry<Integer, Integer> e : freq.entrySet()) {
            pq.offer(new int[]{e.getKey(), e.getValue()});
        }
        List<Integer> ans = new ArrayList<>();
        while (k-- > 0) ans.add(pq.poll()[0]);
        return ans;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        int k = sc.nextInt();
        List<Integer> ans = topKFrequent(nums, k);
        for (int x : ans) System.out.print(x + " ");
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
typedef struct {
    int num;
    int freq;
} Node;
int cmp(const void *a, const void *b) {
    Node *x = (Node*)a;
    Node *y = (Node*)b;
    if (y->freq != x->freq) return y->freq - x->freq;
    return x->num - y->num;
}
int main() {
    int n;
    scanf("%d", &n);
    int *nums = (int*)malloc(n * sizeof(int));
    Node arr[100005];
    int size = 0;
    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
        int found = 0;
        for (int j = 0; j < size; j++) {
            if (arr[j].num == nums[i]) {
                arr[j].freq++;
                found = 1;
                break;
            }
        }
        if (!found) {
            arr[size].num = nums[i];
            arr[size].freq = 1;
            size++;
        }
    }
    int k;
    scanf("%d", &k);
    qsort(arr, size, sizeof(Node), cmp);
    for (int i = 0; i < k; i++) printf("%d ", arr[i].num);
    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <queue>

using namespace std;

vector<int> topKFrequent(vector<int>& nums, int k) {
    unordered_map<int, int> freq;
    for (int num : nums) freq[num]++;
    priority_queue<pair<int,int>> pq;
    for (auto &x : freq) pq.push({x.second, -x.first});
    vector<int> ans;
    while (k--) {
        ans.push_back(-pq.top().second);
        pq.pop();
    }
    return ans;
}

int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    int k;
    cin >> k;
    vector<int> ans = topKFrequent(nums, k);
    for (int x : ans) cout << x << " ";
    return 0;
}`
},'tkf-e2': {
  python: `from collections import Counter
def most_frequent(nums):
    freq = Counter(nums)
    max_freq = max(freq.values())
    ans = min(num for num, count in freq.items() if count == max_freq)
    return ans
n = int(input())
nums = list(map(int, input().split()))
print(most_frequent(nums))`,
  java: `import java.util.*;
public class Main {
    public static int mostFrequent(int[] nums) {
        Map<Integer, Integer> freq = new HashMap<>();
        for (int num : nums)
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        int ans = Integer.MAX_VALUE;
        int maxFreq = 0;
        for (Map.Entry<Integer, Integer> entry : freq.entrySet()) {
            int num = entry.getKey();
            int count = entry.getValue();
            if (count > maxFreq || (count == maxFreq && num < ans)) {
                maxFreq = count;
                ans = num;
            }
        }
        return ans;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++)
            nums[i] = sc.nextInt();
        System.out.println(mostFrequent(nums));
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
typedef struct {
    int num;
    int freq;
} Node;
int main() {
    int n;
    scanf("%d", &n);
    Node arr[100005];
    int size = 0;
    for (int i = 0; i < n; i++) {
        int x;
        scanf("%d", &x);
        int found = 0;
        for (int j = 0; j < size; j++) {
            if (arr[j].num == x) {
                arr[j].freq++;
                found = 1;
                break;
            }
        }
        if (!found) {
            arr[size].num = x;
            arr[size].freq = 1;
            size++;
        }
    }
    int ans = arr[0].num;
    int maxFreq = arr[0].freq;
    for (int i = 1; i < size; i++) {
        if (arr[i].freq > maxFreq || (arr[i].freq == maxFreq && arr[i].num < ans)) {
            maxFreq = arr[i].freq;
            ans = arr[i].num;
        }
    }
    printf("%d\n", ans);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <climits>
using namespace std;
int mostFrequent(vector<int>& nums) {
    unordered_map<int, int> freq;
    for (int num : nums)
        freq[num]++;
    int ans = INT_MAX;
    int maxFreq = 0;
    for (auto &entry : freq) {
        if (entry.second > maxFreq || (entry.second == maxFreq && entry.first < ans)) {
            maxFreq = entry.second;
            ans = entry.first;
        }
    }
    return ans;
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++)
        cin >> nums[i];
    cout << mostFrequent(nums);
    return 0;
}`
},'tkf-e3': {
  python: `from collections import Counter
def top_k_frequent_words(words, k):
    freq = Counter(words)
    result = sorted(freq.items(), key=lambda x: (-x[1], x[0]))
    return [word for word, count in result[:k]]
n = int(input())
words = input().split()
k = int(input())
result = top_k_frequent_words(words, k)
print(*result)`,
  java: `import java.util.*;
public class Main {
    public static List<String> topKFrequentWords(String[] words, int k) {
        Map<String, Integer> freq = new HashMap<>();
        for (String word : words)
            freq.put(word, freq.getOrDefault(word, 0) + 1);
        List<String> result = new ArrayList<>(freq.keySet());
        result.sort((a, b) -> {
            if (!freq.get(a).equals(freq.get(b)))
                return freq.get(b) - freq.get(a);
            return a.compareTo(b);
        });
        return result.subList(0, k);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String[] words = new String[n];
        for (int i = 0; i < n; i++)
            words[i] = sc.next();
        int k = sc.nextInt();
        List<String> result = topKFrequentWords(words, k);
        for (String word : result)
            System.out.print(word + " ");
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef struct {
    char word[21];
    int freq;
} Node;
int cmp(const void *a, const void *b) {
    Node *x = (Node*)a;
    Node *y = (Node*)b;
    if (y->freq != x->freq)
        return y->freq - x->freq;
    return strcmp(x->word, y->word);
}
int main() {
    int n;
    scanf("%d", &n);
    Node arr[1000];
    int size = 0;
    for (int i = 0; i < n; i++) {
        char s[21];
        scanf("%20s", s);
        int found = 0;
        for (int j = 0; j < size; j++) {
            if (strcmp(arr[j].word, s) == 0) {
                arr[j].freq++;
                found = 1;
                break;
            }
        }
        if (!found) {
            strcpy(arr[size].word, s);
            arr[size].freq = 1;
            size++;
        }
    }
    int k;
    scanf("%d", &k);
    qsort(arr, size, sizeof(Node), cmp);
    for (int i = 0; i < k; i++)
        printf("%s ", arr[i].word);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;
vector<string> topKFrequentWords(vector<string>& words, int k) {
    unordered_map<string, int> freq;
    for (string &word : words)
        freq[word]++;
    vector<string> result;
    for (auto &entry : freq)
        result.push_back(entry.first);
    sort(result.begin(), result.end(), [&](string &a, string &b) {
        if (freq[a] != freq[b])
            return freq[a] > freq[b];
        return a < b;
    });
    result.resize(k);
    return result;
}
int main() {
    int n;
    cin >> n;
    vector<string> words(n);
    for (int i = 0; i < n; i++)
        cin >> words[i];
    int k;
    cin >> k;
    vector<string> result = topKFrequentWords(words, k);
    for (string &word : result)
        cout << word << " ";
    return 0;
}`
},'tkf-e4': {
  python: `from collections import Counter
def frequency_sort(s):
    freq = Counter(s)
    result = sorted(freq.items(), key=lambda x: (-x[1], x[0]))
    ans = ""
    for ch, count in result:
        ans += ch * count
    return ans
s = input().strip()
print(frequency_sort(s))`,
  java: `import java.util.*;
public class Main {
    public static String frequencySort(String s) {
        Map<Character, Integer> freq = new HashMap<>();
        for (char c : s.toCharArray())
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        List<Character> chars = new ArrayList<>(freq.keySet());
        chars.sort((a, b) -> {
            if (!freq.get(a).equals(freq.get(b)))
                return freq.get(b) - freq.get(a);
            return Character.compare(a, b);
        });
        StringBuilder ans = new StringBuilder();
        for (char c : chars)
            for (int i = 0; i < freq.get(c); i++)
                ans.append(c);
        return ans.toString();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        System.out.println(frequencySort(s));
    }
}`,
  c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
typedef struct {
    char ch;
    int freq;
} Node;
int cmp(const void *a, const void *b) {
    Node *x = (Node*)a;
    Node *y = (Node*)b;
    if (y->freq != x->freq)
        return y->freq - x->freq;
    return x->ch - y->ch;
}
int main() {
    char s[100001];
    scanf("%s", s);
    Node arr[256];
    int size = 0;
    for (int i = 0; s[i]; i++) {
        int found = 0;
        for (int j = 0; j < size; j++) {
            if (arr[j].ch == s[i]) {
                arr[j].freq++;
                found = 1;
                break;
            }
        }
        if (!found) {
            arr[size].ch = s[i];
            arr[size].freq = 1;
            size++;
        }
    }
    qsort(arr, size, sizeof(Node), cmp);
    for (int i = 0; i < size; i++)
        for (int j = 0; j < arr[i].freq; j++)
            printf("%c", arr[i].ch);
    return 0;
}`,
  cpp: `#include <iostream>
#include <unordered_map>
#include <vector>
#include <algorithm>

using namespace std;

string frequencySort(string s) {
    unordered_map<char, int> freq;
    for (char c : s)
        freq[c]++;

    vector<pair<char, int> > chars;
    for (unordered_map<char, int>::iterator it = freq.begin(); it != freq.end(); ++it)
        chars.push_back(*it);

    sort(chars.begin(), chars.end(), [](const pair<char, int>& a, const pair<char, int>& b) {
        if (a.second != b.second)
            return a.second > b.second;
        return a.first < b.first;
    });

    string ans;
    for (size_t i = 0; i < chars.size(); i++)
        ans.append(chars[i].second, chars[i].first);

    return ans;
}

int main() {
    string s;
    cin >> s;
    cout << frequencySort(s);
    return 0;
}`
},'tkf-e5': {
  python: `from collections import Counter
def k_most_frequent(nums, k):
    freq = Counter(nums)
    result = sorted(freq.items(), key=lambda x: (-x[1], x[0]))
    return [num for num, count in result[:k]]
n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(*k_most_frequent(nums, k))`,
  java: `import java.util.*;
public class Main {
    public static List<Integer> kMostFrequent(int[] nums, int k) {
        Map<Integer, Integer> freq = new HashMap<>();
        for (int num : nums)
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        List<Integer> result = new ArrayList<>(freq.keySet());
        result.sort((a, b) -> {
            if (!freq.get(a).equals(freq.get(b)))
                return freq.get(b) - freq.get(a);
            return a - b;
        });
        return result.subList(0, k);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++)
            nums[i] = sc.nextInt();
        int k = sc.nextInt();
        List<Integer> result = kMostFrequent(nums, k);
        for (int num : result)
            System.out.print(num + " ");
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
typedef struct {
    int num;
    int freq;
} Node;
int cmp(const void *a, const void *b) {
    Node *x = (Node*)a;
    Node *y = (Node*)b;
    if (y->freq != x->freq)
        return y->freq - x->freq;
    return x->num - y->num;
}
int main() {
    int n;
    scanf("%d", &n);
    Node arr[100005];
    int size = 0;
    for (int i = 0; i < n; i++) {
        int x;
        scanf("%d", &x);
        int found = 0;
        for (int j = 0; j < size; j++) {
            if (arr[j].num == x) {
                arr[j].freq++;
                found = 1;
                break;
            }
        }
        if (!found) {
            arr[size].num = x;
            arr[size].freq = 1;
            size++;
        }
    }
    int k;
    scanf("%d", &k);
    qsort(arr, size, sizeof(Node), cmp);
    for (int i = 0; i < k; i++)
        printf("%d ", arr[i].num);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;
vector<int> kMostFrequent(vector<int>& nums, int k) {
    unordered_map<int, int> freq;
    for (int num : nums)
        freq[num]++;
    vector<pair<int, int> > temp;
    for (unordered_map<int, int>::iterator it = freq.begin(); it != freq.end(); ++it)
        temp.push_back(*it);
    sort(temp.begin(), temp.end(), [](const pair<int, int>& a, const pair<int, int>& b) {
        if (a.second != b.second)
            return a.second > b.second;
        return a.first < b.first;
    });
    vector<int> ans;
    for (int i = 0; i < k; i++)
        ans.push_back(temp[i].first);
    return ans;
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++)
        cin >> nums[i];
    int k;
    cin >> k;
    vector<int> ans = kMostFrequent(nums, k);
    for (int num : ans)
        cout << num << " ";
    return 0;
}`
},'tkf-m1': {
  python: `from collections import Counter
import heapq
def top_k_frequent(nums, k):
    freq = Counter(nums)
    heap = []
    for num, count in freq.items():
        heapq.heappush(heap, (count, num))
        if len(heap) > k:
            heapq.heappop(heap)
    result = []
    while heap:
        result.append(heapq.heappop(heap)[1])
    return result[::-1]
n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(*top_k_frequent(nums, k))`,
  java: `import java.util.*;
public class Main {
    public static List<Integer> topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> freq = new HashMap<>();
        for (int num : nums)
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> {
            if (a[1] != b[1])
                return a[1] - b[1];
            return b[0] - a[0];
        });
        for (Map.Entry<Integer, Integer> entry : freq.entrySet()) {
            pq.offer(new int[]{entry.getKey(), entry.getValue()});
            if (pq.size() > k)
                pq.poll();
        }
        List<Integer> ans = new ArrayList<>();
        while (!pq.isEmpty())
            ans.add(pq.poll()[0]);
        Collections.reverse(ans);
        return ans;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++)
            nums[i] = sc.nextInt();
        int k = sc.nextInt();
        List<Integer> ans = topKFrequent(nums, k);
        for (int x : ans)
            System.out.print(x + " ");
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
typedef struct {
    int num;
    int freq;
} Node;
int cmp(const void *a, const void *b) {
    Node *x = (Node*)a;
    Node *y = (Node*)b;
    if (y->freq != x->freq)
        return y->freq - x->freq;
    return x->num - y->num;
}
int main() {
    int n;
    scanf("%d", &n);
    Node arr[100005];
    int size = 0;
    for (int i = 0; i < n; i++) {
        int x;
        scanf("%d", &x);
        int found = 0;
        for (int j = 0; j < size; j++) {
            if (arr[j].num == x) {
                arr[j].freq++;
                found = 1;
                break;
            }
        }
        if (!found) {
            arr[size].num = x;
            arr[size].freq = 1;
            size++;
        }
    }
    int k;
    scanf("%d", &k);
    qsort(arr, size, sizeof(Node), cmp);
    for (int i = 0; i < k; i++)
        printf("%d ", arr[i].num);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <queue>
#include <algorithm>
using namespace std;
vector<int> topKFrequent(vector<int>& nums, int k) {
    unordered_map<int, int> freq;
    for (int num : nums)
        freq[num]++;
    priority_queue<pair<int,int>, vector<pair<int,int> >, greater<pair<int,int> > > pq;
    for (auto &entry : freq) {
        pq.push({entry.second, entry.first});
        if ((int)pq.size() > k)
            pq.pop();
    }
    vector<int> ans;
    while (!pq.empty()) {
        ans.push_back(pq.top().second);
        pq.pop();
    }
    reverse(ans.begin(), ans.end());
    return ans;
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++)
        cin >> nums[i];
    int k;
    cin >> k;
    vector<int> ans = topKFrequent(nums, k);
    for (int x : ans)
        cout << x << " ";
    return 0;
}`
},'tkf-m2': {
  python: `import heapq
def k_closest(points, k):
    heap = []
    for x, y in points:
        dist = x * x + y * y
        heapq.heappush(heap, (dist, x, y))
    result = []
    for _ in range(k):
        _, x, y = heapq.heappop(heap)
        result.append([x, y])
    return result
n = int(input())
points = [list(map(int, input().split())) for _ in range(n)]
k = int(input())
result = k_closest(points, k)
for x, y in result:
    print(x, y)`,
  java: `import java.util.*;
public class Main {
    public static List<int[]> kClosest(int[][] points, int k) {
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> {
            int d1 = a[0] * a[0] + a[1] * a[1];
            int d2 = b[0] * b[0] + b[1] * b[1];
            return d1 - d2;
        });
        for (int[] point : points)
            pq.offer(point);
        List<int[]> result = new ArrayList<>();
        while (k-- > 0)
            result.add(pq.poll());
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
        List<int[]> result = kClosest(points, k);
        for (int[] p : result)
            System.out.println(p[0] + " " + p[1]);
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
typedef struct {
    int x;
    int y;
    int dist;
} Point;
int cmp(const void *a, const void *b) {
    return ((Point*)a)->dist - ((Point*)b)->dist;
}
int main() {
    int n;
    scanf("%d", &n);
    Point points[100005];
    for (int i = 0; i < n; i++) {
        scanf("%d %d", &points[i].x, &points[i].y);
        points[i].dist = points[i].x * points[i].x + points[i].y * points[i].y;
    }
    int k;
    scanf("%d", &k);
    qsort(points, n, sizeof(Point), cmp);
    for (int i = 0; i < k; i++)
        printf("%d %d\n", points[i].x, points[i].y);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
    priority_queue<pair<int, pair<int, int> >, vector<pair<int, pair<int, int> > >, greater<pair<int, pair<int, int> > > > pq;
    for (auto &p : points) {
        int dist = p[0] * p[0] + p[1] * p[1];
        pq.push({dist, {p[0], p[1]}});
    }
    vector<vector<int>> result;
    while (k--) {
        auto cur = pq.top();
        pq.pop();
        result.push_back({cur.second.first, cur.second.second});
    }
    return result;
}
int main() {
    int n;
    cin >> n;
    vector<vector<int>> points(n, vector<int>(2));
    for (int i = 0; i < n; i++)
        cin >> points[i][0] >> points[i][1];
    int k;
    cin >> k;
    vector<vector<int>> result = kClosest(points, k);
    for (auto &p : result)
        cout << p[0] << " " << p[1] << endl;
    return 0;
}`
},'tkf-m3': {
  python: `import heapq
def find_closest_elements(arr, k, x):
    heap = []
    for num in arr:
        heapq.heappush(heap, (abs(num - x), num))
    result = []
    for _ in range(k):
        result.append(heapq.heappop(heap)[1])
    result.sort()
    return result

n = int(input())
arr = list(map(int, input().split()))
k = int(input())
x = int(input())
print(*find_closest_elements(arr, k, x))`,
  java: `import java.util.*;
public class Main {
    public static List<Integer> findClosestElements(int[] arr, int k, int x) {
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> {
            if (a[0] != b[0])
                return a[0] - b[0];
            return a[1] - b[1];
        });
        for (int num : arr)
            pq.offer(new int[]{Math.abs(num - x), num});
        List<Integer> result = new ArrayList<>();
        while (k-- > 0)
            result.add(pq.poll()[1]);
        Collections.sort(result);
        return result;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++)
            arr[i] = sc.nextInt();
        int k = sc.nextInt();
        int x = sc.nextInt();
        List<Integer> result = findClosestElements(arr, k, x);
        for (int num : result)
            System.out.print(num + " ");
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
typedef struct {
    int diff;
    int num;
} Node;
int cmp(const void *a, const void *b) {
    Node *x = (Node*)a;
    Node *y = (Node*)b;
    if (x->diff != y->diff)
        return x->diff - y->diff;
    return x->num - y->num;
}
int cmpNum(const void *a, const void *b) {
    return (*(int*)a) - (*(int*)b);
}
int main() {
    int n;
    scanf("%d", &n);
    Node arr[100005];
    for (int i = 0; i < n; i++)
        scanf("%d", &arr[i].num);
    int k, x;
    scanf("%d%d", &k, &x);
    for (int i = 0; i < n; i++)
        arr[i].diff = abs(arr[i].num - x);
    qsort(arr, n, sizeof(Node), cmp);
    int ans[100005];
    for (int i = 0; i < k; i++)
        ans[i] = arr[i].num;
    qsort(ans, k, sizeof(int), cmpNum);
    for (int i = 0; i < k; i++)
        printf("%d ", ans[i]);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
#include <cmath>
using namespace std;
vector<int> findClosestElements(vector<int>& arr, int k, int x) {
    priority_queue<pair<int,int>, vector<pair<int,int> >, greater<pair<int,int> > > pq;
    for (int num : arr)
        pq.push({abs(num - x), num});
    vector<int> result;
    while (k--) {
        result.push_back(pq.top().second);
        pq.pop();
    }
    sort(result.begin(), result.end());
    return result;
}
int main() {
    int n;
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++)
        cin >> arr[i];
    int k, x;
    cin >> k >> x;
    vector<int> result = findClosestElements(arr, k, x);
    for (int num : result)
        cout << num << " ";
    return 0;
}`
},'tkf-m4': {
  python: `from collections import Counter
import heapq
def reorganize_string(s):
    freq = Counter(s)
    heap = [(-count, ch) for ch, count in freq.items()]
    heapq.heapify(heap)
    prev = (0, '')
    result = []
    while heap:
        count, ch = heapq.heappop(heap)
        result.append(ch)
        if prev[0] < 0:
            heapq.heappush(heap, prev)
        count += 1
        prev = (count, ch)
    ans = ''.join(result)
    if len(ans) != len(s):
        return "-1"
    return ans

s = input().strip()
print(reorganize_string(s))`,
  java: `import java.util.*;
public class Main {
    public static String reorganizeString(String s) {
        Map<Character, Integer> freq = new HashMap<>();
        for (char c : s.toCharArray())
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> b[1] - a[1]);
        for (Map.Entry<Character, Integer> entry : freq.entrySet())
            pq.offer(new int[]{entry.getKey(), entry.getValue()});
        StringBuilder result = new StringBuilder();
        int[] prev = {-1, 0};
        while (!pq.isEmpty()) {
            int[] curr = pq.poll();
            result.append((char)curr[0]);
            curr[1]--;
            if (prev[1] > 0)
                pq.offer(prev);
            prev = curr;
        }
        if (result.length() != s.length())
            return "-1";
        return result.toString();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(reorganizeString(s));
    }
}`,
  c: `#include <stdio.h>
#include <string.h>
int main() {
    char s[100001];
    scanf("%s", s);
    int freq[26] = {0};
    int n = strlen(s);
    for (int i = 0; i < n; i++)
        freq[s[i] - 'a']++;
    char ans[100001];
    int idx = 0;
    while (idx < n) {
        int first = -1, second = -1;
        for (int i = 0; i < 26; i++) {
            if (freq[i] > 0 && (first == -1 || freq[i] > freq[first]))
                first = i;
        }
        if (first == -1) break;
        ans[idx++] = first + 'a';
        freq[first]--;
        if (idx == n) break;
        for (int i = 0; i < 26; i++) {
            if (freq[i] > 0 && i != first && (second == -1 || freq[i] > freq[second]))
                second = i;
        }
        if (second == -1) {
            printf("-1");
            return 0;
        }
        ans[idx++] = second + 'a';
        freq[second]--;
    }
    ans[n] = '\0';
    printf("%s", ans);
    return 0;
}`,
  cpp: `#include <iostream>
#include <queue>
#include <unordered_map>
#include <string>
using namespace std;
string reorganizeString(string s) {
    unordered_map<char, int> freq;
    for (char c : s)
        freq[c]++;
    priority_queue<pair<int, char> > pq;
    for (auto &entry : freq)
        pq.push({entry.second, entry.first});
    string result;
    pair<int, char> prev = {0, '#'};
    while (!pq.empty()) {
        pair<int, char> curr = pq.top();
        pq.pop();
        result += curr.second;
        curr.first--;
        if (prev.first > 0)
            pq.push(prev);
        prev = curr;
    }
    if (result.length() != s.length())
        return "-1";
    return result;
}
int main() {
    string s;
    cin >> s;
    cout << reorganizeString(s);
    return 0;
}`
},'tkf-m5': {
  python: `from collections import Counter
def frequency_sort(nums):
    freq = Counter(nums)
    nums.sort(key=lambda x: (freq[x], -x))
    return nums
n = int(input())
nums = list(map(int, input().split()))
result = frequency_sort(nums)
print(*result)`,
  java: `import java.util.*;
public class Main{
    public static List<Integer> frequencySort(int[] nums) {
        Map<Integer, Integer> freq = new HashMap<>();
        for (int num : nums)
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        List<Integer> result = new ArrayList<>();
        for (int num : nums)
            result.add(num);
        result.sort((a, b) -> {
            if (!freq.get(a).equals(freq.get(b)))
                return freq.get(a) - freq.get(b);
            return b - a;
        });
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++)
            nums[i] = sc.nextInt();
        List<Integer> result = frequencySort(nums);
        for (int num : result)
            System.out.print(num + " ");
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
typedef struct {
    int value;
    int freq;
} Node;
Node map[205];
int size = 0;
int getFreq(int value) {
    for (int i = 0; i < size; i++)
        if (map[i].value == value)
            return map[i].freq;
    return 0;
}
int cmp(const void *a, const void *b) {
    int x = *(int*)a;
    int y = *(int*)b;
    int fx = getFreq(x);
    int fy = getFreq(y);
    if (fx != fy)
        return fx - fy;
    return y - x;
}
int main() {
    int n;
    scanf("%d", &n);
    int nums[100005];
    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
        int found = 0;
        for (int j = 0; j < size; j++) {
            if (map[j].value == nums[i]) {
                map[j].freq++;
                found = 1;
                break;
            }
        }
        if (!found) {
            map[size].value = nums[i];
            map[size].freq = 1;
            size++;
        }
    }
    qsort(nums, n, sizeof(int), cmp);
    for (int i = 0; i < n; i++)
        printf("%d ", nums[i]);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

vector<int> frequencySort(vector<int>& nums) {
    unordered_map<int, int> freq;
    for (int num : nums)
        freq[num]++;
    sort(nums.begin(), nums.end(), [&](int a, int b) {
        if (freq[a] != freq[b])
            return freq[a] < freq[b];
        return a > b;
    });
    return nums;
}

int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++)
        cin >> nums[i];
    vector<int> result = frequencySort(nums);
    for (int num : result)
        cout << num << " ";
    return 0;
}`
},
'tkf-h1': {
  python: `import heapq
class MedianFinder:
    def __init__(self):
        self.small = []
        self.large = []
    def add_num(self, num):
        heapq.heappush(self.small, -num)
        heapq.heappush(self.large, -heapq.heappop(self.small))
        if len(self.large) > len(self.small):
            heapq.heappush(self.small, -heapq.heappop(self.large))
    def find_median(self):
        if len(self.small) > len(self.large):
            return float(-self.small[0])
        return (-self.small[0] + self.large[0]) / 2.0
n = int(input())
nums = list(map(int, input().split()))
mf = MedianFinder()
for num in nums:
    mf.add_num(num)
print(mf.find_median())`,
  java: `import java.util.*;

public class Main {
    static class MedianFinder {
        PriorityQueue<Integer> small = new PriorityQueue<>(Collections.reverseOrder());
        PriorityQueue<Integer> large = new PriorityQueue<>();

        public void addNum(int num) {
            small.offer(num);
            large.offer(small.poll());
            if (large.size() > small.size())
                small.offer(large.poll());
        }

        public double findMedian() {
            if (small.size() > large.size())
                return small.peek();
            return (small.peek() + large.peek()) / 2.0;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        MedianFinder mf = new MedianFinder();
        for (int i = 0; i < n; i++)
            mf.addNum(sc.nextInt());
        System.out.println(mf.findMedian());
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

int cmp(const void *a, const void *b) {
    return (*(int*)a) - (*(int*)b);
}

int main() {
    int n;
    scanf("%d", &n);
    int arr[100005];
    for (int i = 0; i < n; i++)
        scanf("%d", &arr[i]);
    qsort(arr, n, sizeof(int), cmp);
    if (n % 2)
        printf("%.1f", (double)arr[n / 2]);
    else
        printf("%.1f", (arr[n / 2 - 1] + arr[n / 2]) / 2.0);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
class MedianFinder {
    priority_queue<int> small;
    priority_queue<int, vector<int>, greater<int> > large;
public:
    void addNum(int num) {
        small.push(num);
        large.push(small.top());
        small.pop();
        if (large.size() > small.size()) {
            small.push(large.top());
            large.pop();
        }
    }
    double findMedian() {
        if (small.size() > large.size())
            return small.top();
        return (small.top() + large.top()) / 2.0;
    }
};
int main() {
    int n;
    cin >> n;
    MedianFinder mf;
    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        mf.addNum(x);
    }
    cout << mf.findMedian();
    return 0;
}`
},'tkf-h2': {
  python: `import heapq
from statistics import median
def median_sliding_window(nums, k):
    result = []
    for i in range(len(nums) - k + 1):
        result.append(median(nums[i:i + k]))
    return result
n = int(input())
nums = list(map(int, input().split()))
k = int(input())
result = median_sliding_window(nums, k)
print(*result)`,
  java: `import java.util.*;
public class Main {
    public static List<Double> medianSlidingWindow(int[] nums, int k) {
        List<Double> result = new ArrayList<>();
        for (int i = 0; i <= nums.length - k; i++) {
            int[] window = Arrays.copyOfRange(nums, i, i + k);
            Arrays.sort(window);
            if (k % 2 == 1)
                result.add((double)window[k / 2]);
            else
                result.add((window[k / 2 - 1] + window[k / 2]) / 2.0);
        }
        return result;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++)
            nums[i] = sc.nextInt();
        int k = sc.nextInt();
        List<Double> result = medianSlidingWindow(nums, k);
        for (double x : result)
            System.out.print(x + " ");
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

int cmp(const void *a,const void *b){
    return (*(int*)a)-(*(int*)b);
}

int main(){
    int n;
    scanf("%d",&n);
    int nums[100005];
    for(int i=0;i<n;i++)
        scanf("%d",&nums[i]);
    int k;
    scanf("%d",&k);
    for(int i=0;i<=n-k;i++){
        int temp[100005];
        for(int j=0;j<k;j++)
            temp[j]=nums[i+j];
        qsort(temp,k,sizeof(int),cmp);
        if(k%2)
            printf("%.1f ",(double)temp[k/2]);
        else
            printf("%.1f ",(temp[k/2-1]+temp[k/2])/2.0);
    }
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
vector<double> medianSlidingWindow(vector<int>& nums,int k){
    vector<double> result;
    for(int i=0;i<=nums.size()-k;i++){
        vector<int> window(nums.begin()+i,nums.begin()+i+k);
        sort(window.begin(),window.end());
        if(k%2)
            result.push_back(window[k/2]);
        else
            result.push_back((window[k/2-1]+window[k/2])/2.0);
    }
    return result;
}
int main(){
    int n;
    cin>>n;
    vector<int> nums(n);
    for(int i=0;i<n;i++)
        cin>>nums[i];
    int k;
    cin>>k;
    vector<double> result=medianSlidingWindow(nums,k);
    for(double x:result)
        cout<<x<<" ";
    return 0;
}`
},'tkf-h3': {
  python: `import heapq
def merge_k_sorted_arrays(arrays):
    heap = []
    for i, arr in enumerate(arrays):
        if arr:
            heapq.heappush(heap, (arr[0], i, 0))
    result = []
    while heap:
        value, row, col = heapq.heappop(heap)
        result.append(value)
        if col + 1 < len(arrays[row]):
            heapq.heappush(heap, (arrays[row][col + 1], row, col + 1))
    return result
k = int(input())
arrays = []
for _ in range(k):
    n = int(input())
    arrays.append(list(map(int, input().split())))
result = merge_k_sorted_arrays(arrays)
print(*result)`,
  java: `import java.util.*;
public class Main {
    static class Node {
        int value, row, col;
        Node(int value, int row, int col) {
            this.value = value;
            this.row = row;
            this.col = col;
        }
    }
    public static List<Integer> mergeKSortedArrays(List<int[]> arrays) {
        PriorityQueue<Node> pq = new PriorityQueue<>((a, b) -> a.value - b.value);
        for (int i = 0; i < arrays.size(); i++)
            if (arrays.get(i).length > 0)
                pq.offer(new Node(arrays.get(i)[0], i, 0));
        List<Integer> result = new ArrayList<>();
        while (!pq.isEmpty()) {
            Node cur = pq.poll();
            result.add(cur.value);
            if (cur.col + 1 < arrays.get(cur.row).length)
                pq.offer(new Node(arrays.get(cur.row)[cur.col + 1], cur.row, cur.col + 1));
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
        for (int num : result)
            System.out.print(num + " ");
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a,const void *b){
    return (*(int*)a)-(*(int*)b);
}
int main(){
    int k;
    scanf("%d",&k);
    int arr[100005];
    int total=0;
    for(int i=0;i<k;i++){
        int n;
        scanf("%d",&n);
        for(int j=0;j<n;j++)
            scanf("%d",&arr[total++]);
    }
    qsort(arr,total,sizeof(int),cmp);
    for(int i=0;i<total;i++)
        printf("%d ",arr[i]);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct Node{
    int value,row,col;
    bool operator>(const Node& other)const{
        return value>other.value;
    }
};
vector<int> mergeKSortedArrays(vector<vector<int> >& arrays){
    priority_queue<Node,vector<Node>,greater<Node> > pq;
    for(int i=0;i<arrays.size();i++)
        if(!arrays[i].empty())
            pq.push({arrays[i][0],i,0});
    vector<int> result;
    while(!pq.empty()){
        Node cur=pq.top();
        pq.pop();
        result.push_back(cur.value);
        if(cur.col+1<arrays[cur.row].size())
            pq.push({arrays[cur.row][cur.col+1],cur.row,cur.col+1});
    }
    return result;
}
int main(){
    int k;
    cin>>k;
    vector<vector<int> > arrays;
    for(int i=0;i<k;i++){
        int n;
        cin>>n;
        vector<int> arr(n);
        for(int j=0;j<n;j++)
            cin>>arr[j];
        arrays.push_back(arr);
    }
    vector<int> result=mergeKSortedArrays(arrays);
    for(int num:result)
        cout<<num<<" ";
    return 0;
}`
},
'tkf-h4': {
  python: `import heapq
def smallest_range(nums):
    heap = []
    current_max = float('-inf')
    for i, arr in enumerate(nums):
        heapq.heappush(heap, (arr[0], i, 0))
        current_max = max(current_max, arr[0])
    start, end = -100000, 100000
    while True:
        current_min, row, col = heapq.heappop(heap)
        if current_max - current_min < end - start:
            start, end = current_min, current_max
        if col + 1 == len(nums[row]):
            break
        nxt = nums[row][col + 1]
        heapq.heappush(heap, (nxt, row, col + 1))
        current_max = max(current_max, nxt)
    return start, end
k = int(input())
nums = []
for _ in range(k):
    n = int(input())
    nums.append(list(map(int, input().split())))
left, right = smallest_range(nums)
print(left, right)`,
  java: `import java.util.*;
public class Main {
    static class Node {
        int value,row,col;
        Node(int value,int row,int col){
            this.value=value;
            this.row=row;
            this.col=col;
        }
    }
    public static int[] smallestRange(List<int[]> nums){
        PriorityQueue<Node> pq=new PriorityQueue<>((a,b)->a.value-b.value);
        int currentMax=Integer.MIN_VALUE;
        for(int i=0;i<nums.size();i++){
            pq.offer(new Node(nums.get(i)[0],i,0));
            currentMax=Math.max(currentMax,nums.get(i)[0]);
        }
        int start=0,end=Integer.MAX_VALUE;
        while(true){
            Node cur=pq.poll();
            if(currentMax-cur.value<end-start){
                start=cur.value;
                end=currentMax;
            }
            if(cur.col+1==nums.get(cur.row).length)
                break;
            int next=nums.get(cur.row)[cur.col+1];
            pq.offer(new Node(next,cur.row,cur.col+1));
            currentMax=Math.max(currentMax,next);
        }
        return new int[]{start,end};
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int k=sc.nextInt();
        List<int[]> nums=new ArrayList<>();
        for(int i=0;i<k;i++){
            int n=sc.nextInt();
            int[] arr=new int[n];
            for(int j=0;j<n;j++)
                arr[j]=sc.nextInt();
            nums.add(arr);
        }
        int[] ans=smallestRange(nums);
        System.out.println(ans[0]+" "+ans[1]);
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
int main(){
    int k;
    scanf("%d",&k);
    int *arr[105];
    int size[105];
    int idx[105]={0};
    int currentMax=-1000000;
    for(int i=0;i<k;i++){
        scanf("%d",&size[i]);
        arr[i]=(int*)malloc(size[i]*sizeof(int));
        for(int j=0;j<size[i];j++){
            scanf("%d",&arr[i][j]);
            if(j==0&&arr[i][j]>currentMax)
                currentMax=arr[i][j];
        }
    }
    int start=0,end=1000000;
    while(1){
        int minVal=1000000,row=-1;
        for(int i=0;i<k;i++){
            if(arr[i][idx[i]]<minVal){
                minVal=arr[i][idx[i]];
                row=i;
            }
        }
        if(currentMax-minVal<end-start){
            start=minVal;
            end=currentMax;
        }
        idx[row]++;
        if(idx[row]==size[row])
            break;
        if(arr[row][idx[row]]>currentMax)
            currentMax=arr[row][idx[row]];
    }
    printf("%d %d",start,end);
    for(int i=0;i<k;i++)
        free(arr[i]);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <climits>
using namespace std;
struct Node{
    int value,row,col;
    bool operator>(const Node& other)const{
        return value>other.value;
    }
};
vector<int> smallestRange(vector<vector<int> >& nums){
    priority_queue<Node,vector<Node>,greater<Node> > pq;
    int currentMax=INT_MIN;
    for(int i=0;i<nums.size();i++){
        pq.push({nums[i][0],i,0});
        currentMax=max(currentMax,nums[i][0]);
    }
    int start=0,end=INT_MAX;
    while(true){
        Node cur=pq.top();
        pq.pop();
        if(currentMax-cur.value<end-start){
            start=cur.value;
            end=currentMax;
        }
        if(cur.col+1==nums[cur.row].size())
            break;
        int next=nums[cur.row][cur.col+1];
        pq.push({next,cur.row,cur.col+1});
        currentMax=max(currentMax,next);
    }
    return {start,end};
}
int main(){
    int k;
    cin>>k;
    vector<vector<int> > nums;
    for(int i=0;i<k;i++){
        int n;
        cin>>n;
        vector<int> arr(n);
        for(int j=0;j<n;j++)
            cin>>arr[j];
        nums.push_back(arr);
    }
    vector<int> ans=smallestRange(nums);
    cout<<ans[0]<<" "<<ans[1];
    return 0;
}`
},'tkf-h5': {
  python: `from collections import Counter
import heapq
def top_k_stream(nums, k):
    freq = Counter(nums)
    heap = []
    for num, count in freq.items():
        heapq.heappush(heap, (-count, num))
    result = []
    while k > 0:
        count, num = heapq.heappop(heap)
        result.append(num)
        k -= 1
    return result
n = int(input())
nums = list(map(int, input().split()))
k = int(input())
result = top_k_stream(nums, k)
print(*result)`,
  java: `import java.util.*;
public class Main {
    public static List<Integer> topKStream(int[] nums, int k) {
        Map<Integer, Integer> freq = new HashMap<>();
        for (int num : nums)
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> {
            if (b[1] != a[1])
                return b[1] - a[1];
            return a[0] - b[0];
        });
        for (Map.Entry<Integer, Integer> entry : freq.entrySet())
            pq.offer(new int[]{entry.getKey(), entry.getValue()});
        List<Integer> result = new ArrayList<>();
        while (k-- > 0)
            result.add(pq.poll()[0]);
        return result;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++)
            nums[i] = sc.nextInt();
        int k = sc.nextInt();
        List<Integer> result = topKStream(nums, k);
        for (int num : result)
            System.out.print(num + " ");
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
typedef struct {
    int num;
    int freq;
} Node;
int cmp(const void *a, const void *b) {
    Node *x = (Node*)a;
    Node *y = (Node*)b;
    if (y->freq != x->freq)
        return y->freq - x->freq;
    return x->num - y->num;
}
int main() {
    int n;
    scanf("%d", &n);
    Node arr[100005];
    int size = 0;
    for (int i = 0; i < n; i++) {
        int x;
        scanf("%d", &x);
        int found = 0;
        for (int j = 0; j < size; j++) {
            if (arr[j].num == x) {
                arr[j].freq++;
                found = 1;
                break;
            }
        }
        if (!found) {
            arr[size].num = x;
            arr[size].freq = 1;
            size++;
        }
    }
    int k;
    scanf("%d", &k);
    qsort(arr, size, sizeof(Node), cmp);
    for (int i = 0; i < k; i++)
        printf("%d ", arr[i].num);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <queue>
using namespace std;
vector<int> topKStream(vector<int>& nums, int k) {
    unordered_map<int, int> freq;
    for (int num : nums)
        freq[num]++;
    priority_queue<pair<int, int> > pq;
    for (auto &entry : freq)
        pq.push({entry.second, -entry.first});
    vector<int> result;
    while (k--) {
        result.push_back(-pq.top().second);
        pq.pop();
    }
    return result;
}
int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++)
        cin >> nums[i];
    int k;
    cin >> k;
    vector<int> result = topKStream(nums, k);
    for (int num : result)
        cout << num << " ";
    return 0;
}`
}
};
