export const groupAnagramsSolutions = {
  'ga-e1': {
    python: `from collections import defaultdict
def group_anagrams(words):
    groups = defaultdict(list)
    for word in words:
        key = ''.join(sorted(word))
        groups[key].append(word)
    return list(groups.values())
n = int(input())
words = input().split() if n > 0 else []
result = group_anagrams(words)
for group in result:
    print(*group)`,
    java: `import java.util.*;
public class Main {
    public static List<List<String>> groupAnagrams(String[] words) {
        Map<String, List<String>> map = new LinkedHashMap<>();
        for (String word : words) {
            char[] arr = word.toCharArray();
            Arrays.sort(arr);
            String key = new String(arr);
            map.computeIfAbsent(key, k -> new ArrayList<>()).add(word);
        }
        return new ArrayList<>(map.values());
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String[] words = new String[n];
        for (int i = 0; i < n; i++) {
            words[i] = sc.next();
        }
        List<List<String>> result = groupAnagrams(words);
        for (List<String> group : result) {
            for (int i = 0; i < group.size(); i++) {
                if (i > 0) System.out.print(" ");
                System.out.print(group.get(i));
            }
            System.out.println();
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef struct {
    char original[101];
    char key[101];
    int used;
} Word;
int cmpChar(const void *a, const void *b) {
    return (*(char *)a - *(char *)b);
}
int main() {
    int n;
    scanf("%d", &n);
    Word words[n];
    for (int i = 0; i < n; i++) {
        scanf("%100s", words[i].original);
        strcpy(words[i].key, words[i].original);
        qsort(words[i].key, strlen(words[i].key), sizeof(char), cmpChar);
        words[i].used = 0;
    }
    for (int i = 0; i < n; i++) {
        if (words[i].used) continue;
        words[i].used = 1;
        printf("%s", words[i].original);
        for (int j = i + 1; j < n; j++) {
            if (!words[j].used && strcmp(words[i].key, words[j].key) == 0) {
                words[j].used = 1;
                printf(" %s", words[j].original);
            }
        }
        printf("\n");
    }
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;
vector<vector<string>> groupAnagrams(vector<string>& words) {
    unordered_map<string, vector<string>> mp;
    vector<string> order;
    for (string word : words) {
        string key = word;
        sort(key.begin(), key.end());
        if (!mp.count(key)) order.push_back(key);
        mp[key].push_back(word);
    }
    vector<vector<string>> result;
    for (string &key : order) result.push_back(mp[key]);
    return result;
}
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    cin >> n;
    vector<string> words(n);
    for (int i = 0; i < n; i++) {
        cin >> words[i];
    }
    vector<vector<string>> result = groupAnagrams(words);
    for (auto &group : result) {
        for (int i = 0; i < group.size(); i++) {
            if (i) cout << " ";
            cout << group[i];
        }
        cout << "\n";
    }
    return 0;
}`
  },  'ga-e2': {
    python: `from collections import defaultdict
def count_anagram_groups(words):
    groups = defaultdict(int)
    for word in words:
        key = ''.join(sorted(word))
        groups[key] += 1
    return len(groups)
n = int(input())
words = input().split() if n > 0 else []
print(count_anagram_groups(words))`,
    java: `import java.util.*;
public class Main {
    public static int countAnagramGroups(String[] words) {
        Set<String> set = new HashSet<>();
        for (String word : words) {
            char[] arr = word.toCharArray();
            Arrays.sort(arr);
            set.add(new String(arr));
        }
        return set.size();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String[] words = new String[n];
        for (int i = 0; i < n; i++) {
            words[i] = sc.next();
        }
        System.out.println(countAnagramGroups(words));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int cmpChar(const void *a, const void *b) {
    return (*(char *)a - *(char *)b);
}
int main() {
    int n;
    scanf("%d", &n);
    char keys[n][101];
    int unique = 0;
    for (int i = 0; i < n; i++) {
        char word[101];
        scanf("%100s", word);
        strcpy(keys[unique], word);
        qsort(keys[unique], strlen(keys[unique]), sizeof(char), cmpChar);
        int found = 0;
        for (int j = 0; j < unique; j++) {
            if (strcmp(keys[j], keys[unique]) == 0) {
                found = 1;
                break;
            }
        }
        if (!found) unique++;
    }
    printf("%d\n", unique);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_set>
#include <algorithm>
using namespace std;
int countAnagramGroups(vector<string>& words) {
    unordered_set<string> st;
    for (string word : words) {
        sort(word.begin(), word.end());
        st.insert(word);
    }
    return st.size();
}
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    cin >> n;
    vector<string> words(n);
    for (int i = 0; i < n; i++) {
        cin >> words[i];
    }
    cout << countAnagramGroups(words) << "\n";
    return 0;
}`
  },  'ga-e3': {
    python: `from collections import defaultdict
def largest_anagram_group(words):
    groups = defaultdict(int)
    for word in words:
        key = ''.join(sorted(word))
        groups[key] += 1
    return max(groups.values()) if groups else 0
n = int(input())
words = input().split() if n > 0 else []
print(largest_anagram_group(words))`,
    java: `import java.util.*;
public class Main {
    public static int largestAnagramGroup(String[] words) {
        Map<String, Integer> map = new HashMap<>();
        int ans = 0;
        for (String word : words) {
            char[] arr = word.toCharArray();
            Arrays.sort(arr);
            String key = new String(arr);
            int count = map.getOrDefault(key, 0) + 1;
            map.put(key, count);
            ans = Math.max(ans, count);
        }
        return ans;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String[] words = new String[n];
        for (int i = 0; i < n; i++) {
            words[i] = sc.next();
        }
        System.out.println(largestAnagramGroup(words));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef struct {
    char key[101];
    int count;
} Group;
int cmpChar(const void *a, const void *b) {
    return (*(char *)a - *(char *)b);
}
int main() {
    int n;
    scanf("%d", &n);
    Group groups[n];
    int size = 0;
    int ans = 0;
    for (int i = 0; i < n; i++) {
        char word[101], key[101];
        scanf("%100s", word);
        strcpy(key, word);
        qsort(key, strlen(key), sizeof(char), cmpChar);
        int found = -1;
        for (int j = 0; j < size; j++) {
            if (strcmp(groups[j].key, key) == 0) {
                found = j;
                break;
            }
        }
        if (found == -1) {
            strcpy(groups[size].key, key);
            groups[size].count = 1;
            ans = ans < 1 ? 1 : ans;
            size++;
        } else {
            groups[found].count++;
            if (groups[found].count > ans) ans = groups[found].count;
        }
    }
    printf("%d\n", ans);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>
using namespace std;
int largestAnagramGroup(vector<string>& words) {
    unordered_map<string, int> mp;
    int ans = 0;
    for (string word : words) {
        sort(word.begin(), word.end());
        ans = max(ans, ++mp[word]);
    }
    return ans;
}
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    cin >> n;
    vector<string> words(n);
    for (int i = 0; i < n; i++) {
        cin >> words[i];
    }
    cout << largestAnagramGroup(words) << "\n";
    return 0;
}`
  },  'ga-e4': {
    python: `def are_anagrams(a, b):
    return sorted(a) == sorted(b)
a = input().strip()
b = input().strip()
print(str(are_anagrams(a, b)).lower())`,
    java: `import java.util.*;
public class Main {
    public static boolean areAnagrams(String a, String b) {
        char[] x = a.toCharArray();
        char[] y = b.toCharArray();
        Arrays.sort(x);
        Arrays.sort(y);
        return Arrays.equals(x, y);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        String b = sc.next();
        System.out.println(areAnagrams(a, b));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
int cmpChar(const void *a, const void *b) {
    return (*(char *)a - *(char *)b);
}
bool areAnagrams(char *a, char *b) {
    int n = strlen(a), m = strlen(b);
    if (n != m) return false;
    char x[101], y[101];
    strcpy(x, a);
    strcpy(y, b);
    qsort(x, n, sizeof(char), cmpChar);
    qsort(y, m, sizeof(char), cmpChar);
    return strcmp(x, y) == 0;
}
int main() {
    char a[101], b[101];
    scanf("%100s", a);
    scanf("%100s", b);
    printf("%s\n", areAnagrams(a, b) ? "true" : "false");
    return 0;
}`,
    cpp: `#include <iostream>
#include <algorithm>
#include <string>
using namespace std;
bool areAnagrams(string a, string b) {
    sort(a.begin(), a.end());
    sort(b.begin(), b.end());
    return a == b;
}
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    string a, b;
    cin >> a >> b;
    cout << (areAnagrams(a, b) ? "true" : "false") << "\n";
    return 0;
}`
  },  'ga-e5': {
    python: `from collections import OrderedDict

def group_preserve_order(words):
    groups = OrderedDict()
    for word in words:
        key = ''.join(sorted(word))
        if key not in groups:
            groups[key] = []
        groups[key].append(word)
    return list(groups.values())

n = int(input())
words = input().split() if n > 0 else []
result = group_preserve_order(words)
for group in result:
    print(*group)`,
    java: `import java.util.*;
public class Main {
    public static List<List<String>> groupPreserveOrder(String[] words) {
        Map<String, List<String>> map = new LinkedHashMap<>();
        for (String word : words) {
            char[] arr = word.toCharArray();
            Arrays.sort(arr);
            String key = new String(arr);
            map.computeIfAbsent(key, k -> new ArrayList<>()).add(word);
        }
        return new ArrayList<>(map.values());
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String[] words = new String[n];
        for (int i = 0; i < n; i++) {
            words[i] = sc.next();
        }
        List<List<String>> result = groupPreserveOrder(words);
        for (List<String> group : result) {
            for (int i = 0; i < group.size(); i++) {
                if (i > 0) System.out.print(" ");
                System.out.print(group.get(i));
            }
            System.out.println();
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef struct {
    char word[101];
    char key[101];
    int printed;
} Node;
int cmpChar(const void *a, const void *b) {
    return (*(char *)a - *(char *)b);
}
int main() {
    int n;
    scanf("%d", &n);
    Node words[n];
    for (int i = 0; i < n; i++) {
        scanf("%100s", words[i].word);
        strcpy(words[i].key, words[i].word);
        qsort(words[i].key, strlen(words[i].key), sizeof(char), cmpChar);
        words[i].printed = 0;
    }
    for (int i = 0; i < n; i++) {
        if (words[i].printed) continue;
        words[i].printed = 1;
        printf("%s", words[i].word);
        for (int j = i + 1; j < n; j++) {
            if (!words[j].printed && strcmp(words[i].key, words[j].key) == 0) {
                words[j].printed = 1;
                printf(" %s", words[j].word);
            }
        }
        printf("\n");
    }
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

vector<vector<string>> groupPreserveOrder(vector<string>& words) {
    unordered_map<string, vector<string>> mp;
    vector<string> order;
    for (string word : words) {
        string key = word;
        sort(key.begin(), key.end());
        if (!mp.count(key)) order.push_back(key);
        mp[key].push_back(word);
    }
    vector<vector<string>> result;
    for (string &key : order) result.push_back(mp[key]);
    return result;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    cin >> n;
    vector<string> words(n);
    for (int i = 0; i < n; i++) {
        cin >> words[i];
    }
    vector<vector<string>> result = groupPreserveOrder(words);
    for (auto &group : result) {
        for (int i = 0; i < group.size(); i++) {
            if (i) cout << " ";
            cout << group[i];
        }
        cout << "\n";
    }
    return 0;
}`
  },  'ga-m1': {
    python: `from collections import defaultdict
def group_shifted_strings(words):
    groups = defaultdict(list)
    for word in words:
        if len(word) == 1:
            key = ()
        else:
            key = tuple((ord(word[i]) - ord(word[i - 1])) % 26 for i in range(1, len(word)))
        groups[key].append(word)
    return list(groups.values())
n = int(input())
words = input().split() if n > 0 else []
result = group_shifted_strings(words)
for group in result:
    print(*group)`,
    java: `import java.util.*;
public class Main {
    public static List<List<String>> groupShiftedStrings(String[] words) {
        Map<String, List<String>> map = new LinkedHashMap<>();
        for (String word : words) {
            StringBuilder key = new StringBuilder();
            for (int i = 1; i < word.length(); i++) {
                key.append((word.charAt(i) - word.charAt(i - 1) + 26) % 26).append(",");
            }
            map.computeIfAbsent(key.toString(), k -> new ArrayList<>()).add(word);
        }
        return new ArrayList<>(map.values());
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String[] words = new String[n];
        for (int i = 0; i < n; i++) {
            words[i] = sc.next();
        }
        List<List<String>> result = groupShiftedStrings(words);
        for (List<String> group : result) {
            for (int i = 0; i < group.size(); i++) {
                if (i > 0) System.out.print(" ");
                System.out.print(group.get(i));
            }
            System.out.println();
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef struct {
    char word[101];
    char key[401];
    int used;
} Node;

int main() {
    int n;
    scanf("%d", &n);
    Node words[n];
    for (int i = 0; i < n; i++) {
        scanf("%100s", words[i].word);
        words[i].key[0] = '\0';
        int len = strlen(words[i].word);
        char temp[10];
        for (int j = 1; j < len; j++) {
            sprintf(temp, "%d,", (words[i].word[j] - words[i].word[j - 1] + 26) % 26);
            strcat(words[i].key, temp);
        }
        words[i].used = 0;
    }
    for (int i = 0; i < n; i++) {
        if (words[i].used) continue;
        words[i].used = 1;
        printf("%s", words[i].word);
        for (int j = i + 1; j < n; j++) {
            if (!words[j].used && strcmp(words[i].key, words[j].key) == 0) {
                words[j].used = 1;
                printf(" %s", words[j].word);
            }
        }
        printf("\n");
    }
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
vector<vector<string>> groupShiftedStrings(vector<string>& words) {
    unordered_map<string, vector<string>> mp;
    vector<string> order;
    for (string word : words) {
        string key;
        for (int i = 1; i < word.size(); i++) {
            key += to_string((word[i] - word[i - 1] + 26) % 26) + ",";
        }
        if (!mp.count(key)) order.push_back(key);
        mp[key].push_back(word);
    }
    vector<vector<string>> result;
    for (string &key : order) result.push_back(mp[key]);
    return result;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    cin >> n;
    vector<string> words(n);
    for (int i = 0; i < n; i++) {
        cin >> words[i];
    }
    vector<vector<string>> result = groupShiftedStrings(words);
    for (auto &group : result) {
        for (int i = 0; i < group.size(); i++) {
            if (i) cout << " ";
            cout << group[i];
        }
        cout << "\n";
    }
    return 0;
}`
  },  'ga-m2': {
    python: `from collections import defaultdict
def group_anagrams_frequency(words):
    groups = defaultdict(list)
    for word in words:
        freq = [0] * 26
        for ch in word:
            freq[ord(ch) - ord('a')] += 1
        groups[tuple(freq)].append(word)
    return list(groups.values())
n = int(input())
words = input().split() if n > 0 else []
result = group_anagrams_frequency(words)
for group in result:
    print(*group)`,
    java: `import java.util.*;
public class Main {
    public static List<List<String>> groupAnagramsFrequency(String[] words) {
        Map<String, List<String>> map = new LinkedHashMap<>();
        for (String word : words) {
            int[] freq = new int[26];
            for (char ch : word.toCharArray()) {
                freq[ch - 'a']++;
            }
            StringBuilder key = new StringBuilder();
            for (int count : freq) {
                key.append(count).append("#");
            }
            map.computeIfAbsent(key.toString(), k -> new ArrayList<>()).add(word);
        }
        return new ArrayList<>(map.values());
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String[] words = new String[n];
        for (int i = 0; i < n; i++) {
            words[i] = sc.next();
        }
        List<List<String>> result = groupAnagramsFrequency(words);
        for (List<String> group : result) {
            for (int i = 0; i < group.size(); i++) {
                if (i > 0) System.out.print(" ");
                System.out.print(group.get(i));
            }
            System.out.println();
        }
    }
}`,
    c: `#include <stdio.h>
#include <string.h>
typedef struct {
    char word[101];
    int freq[26];
    int used;
} Node;
int sameFreq(int a[], int b[]) {
    for (int i = 0; i < 26; i++) {
        if (a[i] != b[i]) return 0;
    }
    return 1;
}
int main() {
    int n;
    scanf("%d", &n);
    Node words[n];
    for (int i = 0; i < n; i++) {
        scanf("%100s", words[i].word);
        memset(words[i].freq, 0, sizeof(words[i].freq));
        for (int j = 0; words[i].word[j]; j++) {
            words[i].freq[words[i].word[j] - 'a']++;
        }
        words[i].used = 0;
    }
    for (int i = 0; i < n; i++) {
        if (words[i].used) continue;
        words[i].used = 1;
        printf("%s", words[i].word);
        for (int j = i + 1; j < n; j++) {
            if (!words[j].used && sameFreq(words[i].freq, words[j].freq)) {
                words[j].used = 1;
                printf(" %s", words[j].word);
            }
        }
        printf("\n");
    }
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>

using namespace std;

vector<vector<string>> groupAnagramsFrequency(vector<string>& words) {
    unordered_map<string, vector<string>> mp;
    vector<string> order;
    for (string word : words) {
        vector<int> freq(26, 0);
        for (char ch : word) freq[ch - 'a']++;
        string key;
        for (int x : freq) key += to_string(x) + "#";
        if (!mp.count(key)) order.push_back(key);
        mp[key].push_back(word);
    }
    vector<vector<string>> result;
    for (string &key : order) result.push_back(mp[key]);
    return result;
}
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    cin >> n;
    vector<string> words(n);
    for (int i = 0; i < n; i++) {
        cin >> words[i];
    }
    vector<vector<string>> result = groupAnagramsFrequency(words);
    for (auto &group : result) {
        for (int i = 0; i < group.size(); i++) {
            if (i) cout << " ";
            cout << group[i];
        }
        cout << "\n";
    }
    return 0;
}`
  },  'ga-m3': {
    python: `from collections import defaultdict
def duplicate_anagram_groups(words):
    groups = defaultdict(list)
    for word in words:
        key = ''.join(sorted(word))
        groups[key].append(word)
    result = [group for group in groups.values() if len(group) > 1]
    return result
n = int(input())
words = input().split() if n > 0 else []
result = duplicate_anagram_groups(words)
for group in result:
    print(*group)`,
    java: `import java.util.*;
public class Main {
    public static List<List<String>> duplicateAnagramGroups(String[] words) {
        Map<String, List<String>> map = new LinkedHashMap<>();
        for (String word : words) {
            char[] arr = word.toCharArray();
            Arrays.sort(arr);
            String key = new String(arr);
            map.computeIfAbsent(key, k -> new ArrayList<>()).add(word);
        }
        List<List<String>> result = new ArrayList<>();
        for (List<String> group : map.values()) {
            if (group.size() > 1) {
                result.add(group);
            }
        }
        return result;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String[] words = new String[n];
        for (int i = 0; i < n; i++) {
            words[i] = sc.next();
        }
        List<List<String>> result = duplicateAnagramGroups(words);
        for (List<String> group : result) {
            for (int i = 0; i < group.size(); i++) {
                if (i > 0) System.out.print(" ");
                System.out.print(group.get(i));
            }
            System.out.println();
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char word[101];
    char key[101];
    int used;
} Node;

int cmpChar(const void *a, const void *b) {
    return (*(char *)a - *(char *)b);
}

int main() {
    int n;
    scanf("%d", &n);
    Node words[n];
    for (int i = 0; i < n; i++) {
        scanf("%100s", words[i].word);
        strcpy(words[i].key, words[i].word);
        qsort(words[i].key, strlen(words[i].key), sizeof(char), cmpChar);
        words[i].used = 0;
    }
    for (int i = 0; i < n; i++) {
        if (words[i].used) continue;
        int count = 1;
        for (int j = i + 1; j < n; j++) {
            if (strcmp(words[i].key, words[j].key) == 0) count++;
        }
        if (count > 1) {
            words[i].used = 1;
            printf("%s", words[i].word);
            for (int j = i + 1; j < n; j++) {
                if (!words[j].used && strcmp(words[i].key, words[j].key) == 0) {
                    words[j].used = 1;
                    printf(" %s", words[j].word);
                }
            }
            printf("\n");
        }
    }
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

vector<vector<string>> duplicateAnagramGroups(vector<string>& words) {
    unordered_map<string, vector<string>> mp;
    vector<string> order;
    for (string word : words) {
        string key = word;
        sort(key.begin(), key.end());
        if (!mp.count(key)) order.push_back(key);
        mp[key].push_back(word);
    }
    vector<vector<string>> result;
    for (string &key : order) {
        if (mp[key].size() > 1) {
            result.push_back(mp[key]);
        }
    }
    return result;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    cin >> n;
    vector<string> words(n);
    for (int i = 0; i < n; i++) {
        cin >> words[i];
    }
    vector<vector<string>> result = duplicateAnagramGroups(words);
    for (auto &group : result) {
        for (int i = 0; i < group.size(); i++) {
            if (i) cout << " ";
            cout << group[i];
        }
        cout << "\n";
    }
    return 0;
}`
  },  'ga-m4': {
    python: `from collections import defaultdict
def build_lookup(words):
    lookup = defaultdict(list)
    for word in words:
        key = ''.join(sorted(word))
        lookup[key].append(word)
    return lookup
n = int(input())
words = input().split() if n > 0 else []
q = int(input())
lookup = build_lookup(words)
for _ in range(q):
    query = input().strip()
    key = ''.join(sorted(query))
    if key in lookup:
        print(*lookup[key])
    else:
        print("Not Found")`,
    java: `import java.util.*;
public class Main {
    public static Map<String, List<String>> buildLookup(String[] words) {
        Map<String, List<String>> map = new HashMap<>();
        for (String word : words) {
            char[] arr = word.toCharArray();
            Arrays.sort(arr);
            String key = new String(arr);
            map.computeIfAbsent(key, k -> new ArrayList<>()).add(word);
        }
        return map;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String[] words = new String[n];
        for (int i = 0; i < n; i++) {
            words[i] = sc.next();
        }
        Map<String, List<String>> lookup = buildLookup(words);
        int q = sc.nextInt();
        while (q-- > 0) {
            String query = sc.next();
            char[] arr = query.toCharArray();
            Arrays.sort(arr);
            String key = new String(arr);
            if (lookup.containsKey(key)) {
                List<String> group = lookup.get(key);
                for (int i = 0; i < group.size(); i++) {
                    if (i > 0) System.out.print(" ");
                    System.out.print(group.get(i));
                }
                System.out.println();
            } else {
                System.out.println("Not Found");
            }
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef struct {
    char word[101];
    char key[101];
} Node;
int cmpChar(const void *a, const void *b) {
    return (*(char *)a - *(char *)b);
}

int main() {
    int n;
    scanf("%d", &n);
    Node words[n];
    for (int i = 0; i < n; i++) {
        scanf("%100s", words[i].word);
        strcpy(words[i].key, words[i].word);
        qsort(words[i].key, strlen(words[i].key), sizeof(char), cmpChar);
    }
    int q;
    scanf("%d", &q);
    while (q--) {
        char query[101], key[101];
        scanf("%100s", query);
        strcpy(key, query);
        qsort(key, strlen(key), sizeof(char), cmpChar);
        int found = 0;
        for (int i = 0; i < n; i++) {
            if (strcmp(words[i].key, key) == 0) {
                if (found) printf(" ");
                printf("%s", words[i].word);
                found = 1;
            }
        }
        if (!found) printf("Not Found");
        printf("\n");
    }
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

unordered_map<string, vector<string>> buildLookup(vector<string>& words) {
    unordered_map<string, vector<string>> mp;
    for (string word : words) {
        string key = word;
        sort(key.begin(), key.end());
        mp[key].push_back(word);
    }
    return mp;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    cin >> n;
    vector<string> words(n);
    for (int i = 0; i < n; i++) {
        cin >> words[i];
    }
    unordered_map<string, vector<string>> lookup = buildLookup(words);
    int q;
    cin >> q;
    while (q--) {
        string query;
        cin >> query;
        sort(query.begin(), query.end());
        if (lookup.count(query)) {
            for (int i = 0; i < lookup[query].size(); i++) {
                if (i) cout << " ";
                cout << lookup[query][i];
            }
            cout << "\n";
        } else {
            cout << "Not Found\n";
        }
    }
    return 0;
}`
  },  'ga-m5': {
    python: `from collections import defaultdict
def largest_anagram_family(words):
    groups = defaultdict(list)
    for word in words:
        key = ''.join(sorted(word))
        groups[key].append(word)
    if not groups:
        return []
    largest = max(groups.values(), key=len)
    return largest
n = int(input())
words = input().split() if n > 0 else []
result = largest_anagram_family(words)
print(*result)`,
    java: `import java.util.*;
public class Main {
    public static List<String> largestAnagramFamily(String[] words) {
        Map<String, List<String>> map = new HashMap<>();
        for (String word : words) {
            char[] arr = word.toCharArray();
            Arrays.sort(arr);
            String key = new String(arr);
            map.computeIfAbsent(key, k -> new ArrayList<>()).add(word);
        }
        List<String> ans = new ArrayList<>();
        for (List<String> group : map.values()) {
            if (group.size() > ans.size()) {
                ans = group;
            }
        }
        return ans;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String[] words = new String[n];
        for (int i = 0; i < n; i++) {
            words[i] = sc.next();
        }
        List<String> result = largestAnagramFamily(words);
        for (int i = 0; i < result.size(); i++) {
            if (i > 0) System.out.print(" ");
            System.out.print(result.get(i));
        }
        System.out.println();
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char word[101];
    char key[101];
    int used;
} Node;

int cmpChar(const void *a, const void *b) {
    return (*(char *)a - *(char *)b);
}

int main() {
    int n;
    scanf("%d", &n);
    Node words[n];
    for (int i = 0; i < n; i++) {
        scanf("%100s", words[i].word);
        strcpy(words[i].key, words[i].word);
        qsort(words[i].key, strlen(words[i].key), sizeof(char), cmpChar);
        words[i].used = 0;
    }

    int bestIndex = -1, bestCount = 0;
    for (int i = 0; i < n; i++) {
        if (words[i].used) continue;
        int count = 1;
        for (int j = i + 1; j < n; j++) {
            if (strcmp(words[i].key, words[j].key) == 0) count++;
        }
        if (count > bestCount) {
            bestCount = count;
            bestIndex = i;
        }
    }

    if (bestIndex != -1) {
        printf("%s", words[bestIndex].word);
        for (int j = bestIndex + 1; j < n; j++) {
            if (strcmp(words[bestIndex].key, words[j].key) == 0) {
                printf(" %s", words[j].word);
            }
        }
    }
    printf("\n");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

vector<string> largestAnagramFamily(vector<string>& words) {
    unordered_map<string, vector<string>> mp;
    vector<string> ans;
    for (string word : words) {
        string key = word;
        sort(key.begin(), key.end());
        mp[key].push_back(word);
        if (mp[key].size() > ans.size()) {
            ans = mp[key];
        }
    }
    return ans;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    vector<string> words(n);
    for (int i = 0; i < n; i++) {
        cin >> words[i];
    }

    vector<string> result = largestAnagramFamily(words);
    for (int i = 0; i < result.size(); i++) {
        if (i) cout << " ";
        cout << result[i];
    }
    cout << "\n";
    return 0;
}`
  },  'ga-h1': {
    python: `from collections import defaultdict
def group_unicode_anagrams(words):
    groups = defaultdict(list)
    for word in words:
        key = ''.join(sorted(word))
        groups[key].append(word)
    return list(groups.values())
n = int(input())
words = [input().rstrip() for _ in range(n)]
result = group_unicode_anagrams(words)
for group in result:
    print(*group)`,
    java: `import java.util.*;
public class Main {
    public static List<List<String>> groupUnicodeAnagrams(String[] words) {
        Map<String, List<String>> map = new LinkedHashMap<>();
        for (String word : words) {
            int[] codePoints = word.codePoints().sorted().toArray();
            StringBuilder key = new StringBuilder();
            for (int cp : codePoints) {
                key.append(cp).append("#");
            }
            map.computeIfAbsent(key.toString(), k -> new ArrayList<>()).add(word);
        }
        return new ArrayList<>(map.values());
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = Integer.parseInt(sc.nextLine());
        String[] words = new String[n];
        for (int i = 0; i < n; i++) {
            words[i] = sc.nextLine();
        }
        List<List<String>> result = groupUnicodeAnagrams(words);
        for (List<String> group : result) {
            for (int i = 0; i < group.size(); i++) {
                if (i > 0) System.out.print(" ");
                System.out.print(group.get(i));
            }
            System.out.println();
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char word[256];
    char key[256];
    int used;
} Node;

int cmpChar(const void *a, const void *b) {
    return (*(unsigned char *)a - *(unsigned char *)b);
}

int main() {
    int n;
    scanf("%d", &n);
    getchar();
    Node words[n];
    for (int i = 0; i < n; i++) {
        fgets(words[i].word, sizeof(words[i].word), stdin);
        words[i].word[strcspn(words[i].word, "\n")] = '\0';
        strcpy(words[i].key, words[i].word);
        qsort(words[i].key, strlen(words[i].key), sizeof(char), cmpChar);
        words[i].used = 0;
    }
    for (int i = 0; i < n; i++) {
        if (words[i].used) continue;
        words[i].used = 1;
        printf("%s", words[i].word);
        for (int j = i + 1; j < n; j++) {
            if (!words[j].used && strcmp(words[i].key, words[j].key) == 0) {
                words[j].used = 1;
                printf(" %s", words[j].word);
            }
        }
        printf("\n");
    }
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

vector<vector<string>> groupUnicodeAnagrams(vector<string>& words) {
    unordered_map<string, vector<string>> mp;
    vector<string> order;
    for (string word : words) {
        string key = word;
        sort(key.begin(), key.end());
        if (!mp.count(key)) order.push_back(key);
        mp[key].push_back(word);
    }
    vector<vector<string>> result;
    for (string &key : order) result.push_back(mp[key]);
    return result;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    cin.ignore();

    vector<string> words(n);
    for (int i = 0; i < n; i++) {
        getline(cin, words[i]);
    }

    vector<vector<string>> result = groupUnicodeAnagrams(words);
    for (auto &group : result) {
        for (int i = 0; i < group.size(); i++) {
            if (i) cout << " ";
            cout << group[i];
        }
        cout << "\n";
    }
    return 0;
}`
  },  'ga-h2': {
    python: `from collections import defaultdict
groups = defaultdict(list)
q = int(input())
for _ in range(q):
    parts = input().split()
    if parts[0] == "ADD":
        word = parts[1]
        key = ''.join(sorted(word))
        groups[key].append(word)
    elif parts[0] == "QUERY":
        word = parts[1]
        key = ''.join(sorted(word))
        if key in groups and groups[key]:
            print(*groups[key])
        else:
            print("Not Found")`,
    java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int q = sc.nextInt();
        Map<String, List<String>> map = new HashMap<>();

        while (q-- > 0) {
            String op = sc.next();
            if (op.equals("ADD")) {
                String word = sc.next();
                char[] arr = word.toCharArray();
                Arrays.sort(arr);
                String key = new String(arr);
                map.computeIfAbsent(key, k -> new ArrayList<>()).add(word);
            } else if (op.equals("QUERY")) {
                String word = sc.next();
                char[] arr = word.toCharArray();
                Arrays.sort(arr);
                String key = new String(arr);
                if (map.containsKey(key)) {
                    List<String> group = map.get(key);
                    for (int i = 0; i < group.size(); i++) {
                        if (i > 0) System.out.print(" ");
                        System.out.print(group.get(i));
                    }
                    System.out.println();
                } else {
                    System.out.println("Not Found");
                }
            }
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char word[101];
    char key[101];
} Node;

int cmpChar(const void *a, const void *b) {
    return (*(char *)a - *(char *)b);
}

int main() {
    int q, size = 0;
    scanf("%d", &q);
    Node words[1000];

    while (q--) {
        char op[10], word[101], key[101];
        scanf("%s %s", op, word);
        strcpy(key, word);
        qsort(key, strlen(key), sizeof(char), cmpChar);

        if (strcmp(op, "ADD") == 0) {
            strcpy(words[size].word, word);
            strcpy(words[size].key, key);
            size++;
        } else {
            int found = 0;
            for (int i = 0; i < size; i++) {
                if (strcmp(words[i].key, key) == 0) {
                    if (found) printf(" ");
                    printf("%s", words[i].word);
                    found = 1;
                }
            }
            if (!found) printf("Not Found");
            printf("\n");
        }
    }
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int q;
    cin >> q;

    unordered_map<string, vector<string>> mp;

    while (q--) {
        string op, word;
        cin >> op >> word;

        string key = word;
        sort(key.begin(), key.end());

        if (op == "ADD") {
            mp[key].push_back(word);
        } else {
            if (mp.count(key)) {
                for (int i = 0; i < mp[key].size(); i++) {
                    if (i) cout << " ";
                    cout << mp[key][i];
                }
                cout << "\n";
            } else {
                cout << "Not Found\n";
            }
        }
    }
    return 0;
}`
  },  'ga-h3': {
    python: `from collections import defaultdict
def merge_anagram_dictionaries(words1, words2):
    groups = defaultdict(list)
    for word in words1 + words2:
        key = ''.join(sorted(word))
        groups[key].append(word)
    return list(groups.values())
n1 = int(input())
words1 = input().split() if n1 > 0 else []
n2 = int(input())
words2 = input().split() if n2 > 0 else []
result = merge_anagram_dictionaries(words1, words2)
for group in result:
    print(*group)`,
    java: `import java.util.*;
public class Main {
    public static List<List<String>> mergeAnagramDictionaries(String[] words1, String[] words2) {
        Map<String, List<String>> map = new LinkedHashMap<>();
        for (String word : words1) {
            char[] arr = word.toCharArray();
            Arrays.sort(arr);
            map.computeIfAbsent(new String(arr), k -> new ArrayList<>()).add(word);
        }
        for (String word : words2) {
            char[] arr = word.toCharArray();
            Arrays.sort(arr);
            map.computeIfAbsent(new String(arr), k -> new ArrayList<>()).add(word);
        }
        return new ArrayList<>(map.values());
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n1 = sc.nextInt();
        String[] words1 = new String[n1];
        for (int i = 0; i < n1; i++) words1[i] = sc.next();
        int n2 = sc.nextInt();
        String[] words2 = new String[n2];
        for (int i = 0; i < n2; i++) words2[i] = sc.next();

        List<List<String>> result = mergeAnagramDictionaries(words1, words2);
        for (List<String> group : result) {
            for (int i = 0; i < group.size(); i++) {
                if (i > 0) System.out.print(" ");
                System.out.print(group.get(i));
            }
            System.out.println();
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char word[101];
    char key[101];
    int used;
} Node;

int cmpChar(const void *a, const void *b) {
    return (*(char *)a - *(char *)b);
}

int main() {
    int n1, n2;
    scanf("%d", &n1);
    Node words[2000];
    int total = 0;

    for (int i = 0; i < n1; i++) {
        scanf("%100s", words[total].word);
        strcpy(words[total].key, words[total].word);
        qsort(words[total].key, strlen(words[total].key), sizeof(char), cmpChar);
        words[total].used = 0;
        total++;
    }

    scanf("%d", &n2);
    for (int i = 0; i < n2; i++) {
        scanf("%100s", words[total].word);
        strcpy(words[total].key, words[total].word);
        qsort(words[total].key, strlen(words[total].key), sizeof(char), cmpChar);
        words[total].used = 0;
        total++;
    }

    for (int i = 0; i < total; i++) {
        if (words[i].used) continue;
        words[i].used = 1;
        printf("%s", words[i].word);
        for (int j = i + 1; j < total; j++) {
            if (!words[j].used && strcmp(words[i].key, words[j].key) == 0) {
                words[j].used = 1;
                printf(" %s", words[j].word);
            }
        }
        printf("\n");
    }

    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

vector<vector<string>> mergeAnagramDictionaries(vector<string>& words1, vector<string>& words2) {
    unordered_map<string, vector<string>> mp;
    vector<string> order;

    auto addWords = [&](vector<string>& words) {
        for (string word : words) {
            string key = word;
            sort(key.begin(), key.end());
            if (!mp.count(key)) order.push_back(key);
            mp[key].push_back(word);
        }
    };

    addWords(words1);
    addWords(words2);

    vector<vector<string>> result;
    for (string &key : order) result.push_back(mp[key]);
    return result;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n1;
    cin >> n1;
    vector<string> words1(n1);
    for (int i = 0; i < n1; i++) cin >> words1[i];

    int n2;
    cin >> n2;
    vector<string> words2(n2);
    for (int i = 0; i < n2; i++) cin >> words2[i];

    vector<vector<string>> result = mergeAnagramDictionaries(words1, words2);
    for (auto &group : result) {
        for (int i = 0; i < group.size(); i++) {
            if (i) cout << " ";
            cout << group[i];
        }
        cout << "\n";
    }
    return 0;
}` 
},'ga-h5': {
    python: `from collections import defaultdict

def streaming_group_anagrams(words):
    groups = defaultdict(int)
    result = []
    largest = 0
    for word in words:
        key = ''.join(sorted(word))
        groups[key] += 1
        largest = max(largest, groups[key])
        result.append(largest)
    return result

n = int(input())
words = input().split() if n > 0 else []
result = streaming_group_anagrams(words)
for x in result:
    print(x)`,
    java: `import java.util.*;

public class Main {
    public static List<Integer> streamingGroupAnagrams(String[] words) {
        Map<String, Integer> map = new HashMap<>();
        List<Integer> result = new ArrayList<>();
        int largest = 0;

        for (String word : words) {
            char[] arr = word.toCharArray();
            Arrays.sort(arr);
            String key = new String(arr);

            int count = map.getOrDefault(key, 0) + 1;
            map.put(key, count);

            largest = Math.max(largest, count);
            result.add(largest);
        }

        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        String[] words = new String[n];

        for (int i = 0; i < n; i++)
            words[i] = sc.next();

        List<Integer> result = streamingGroupAnagrams(words);

        for (int x : result)
            System.out.println(x);
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char key[101];
    int count;
} Group;

int cmp(const void *a,const void *b){
    return (*(char*)a)-(*(char*)b);
}

void streamingGroupAnagrams(char words[][101], int n){
    Group groups[1000];
    int size=0;
    int largest=0;

    for(int i=0;i<n;i++){
        char key[101];
        strcpy(key,words[i]);
        qsort(key,strlen(key),sizeof(char),cmp);

        int idx=-1;
        for(int j=0;j<size;j++){
            if(strcmp(groups[j].key,key)==0){
                idx=j;
                break;
            }
        }

        if(idx==-1){
            strcpy(groups[size].key,key);
            groups[size].count=1;
            idx=size++;
        }else{
            groups[idx].count++;
        }

        if(groups[idx].count>largest)
            largest=groups[idx].count;

        printf("%d\n",largest);
    }
}

int main(){
    int n;
    scanf("%d",&n);

    char words[n][101];

    for(int i=0;i<n;i++)
        scanf("%100s",words[i]);

    streamingGroupAnagrams(words,n);

    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

vector<int> streamingGroupAnagrams(vector<string>& words){
    unordered_map<string,int> mp;
    vector<int> result;
    int largest=0;

    for(string word:words){
        sort(word.begin(),word.end());
        largest=max(largest,++mp[word]);
        result.push_back(largest);
    }

    return result;
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin>>n;

    vector<string> words(n);

    for(int i=0;i<n;i++)
        cin>>words[i];

    vector<int> result=streamingGroupAnagrams(words);

    for(int x:result)
        cout<<x<<"\n";

    return 0;
}`
}
};