export const palindromePartitioningSolutions = {
'pp-e1': {
python: `def is_palindrome(s, l, r):
    while l < r:
        if s[l] != s[r]:
            return False
        l += 1
        r -= 1
    return True

s, l, r = input().split()
l, r = int(l), int(r)
print(str(is_palindrome(s, l, r)).lower())`,
java: `import java.util.*;
public class Main {
    public static boolean isPalindrome(String s, int l, int r) {
        while (l < r) {
            if (s.charAt(l) != s.charAt(r)) return false;
            l++;
            r--;
        }
        return true;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        int l = sc.nextInt();
        int r = sc.nextInt();
        System.out.println(isPalindrome(s, l, r));
    }
}`,
c: `#include <stdio.h>
#include <stdbool.h>
bool isPalindrome(char *s, int l, int r) {
    while (l < r) {
        if (s[l] != s[r]) return false;
        l++;
        r--;
    }
    return true;
}
int main() {
    char s[10005];
    int l, r;
    scanf("%s %d %d", s, &l, &r);
    printf("%s\\n", isPalindrome(s, l, r) ? "true" : "false");
    return 0;
}`,
cpp: `#include <iostream>
#include <string>
using namespace std;
bool isPalindrome(string s, int l, int r) {
    while (l < r) {
        if (s[l] != s[r]) return false;
        l++;
        r--;
    }
    return true;
}
int main() {
    string s;
    int l, r;
    cin >> s >> l >> r;
    cout << (isPalindrome(s, l, r) ? "true" : "false") << "\\n";
    return 0;
}`
},
'pp-e2': {
python: `def count_palindromic_substrings(s):
    n = len(s)
    count = 0
    for center in range(2 * n - 1):
        left = center // 2
        right = left + center % 2
        while left >= 0 and right < n and s[left] == s[right]:
            count += 1
            left -= 1
            right += 1
    return count

s = input().strip()
print(count_palindromic_substrings(s))`,
java: `import java.util.*;
public class Main {
    public static int countPalindromicSubstrings(String s) {
        int n = s.length();
        int count = 0;
        for (int center = 0; center < 2 * n - 1; center++) {
            int left = center / 2;
            int right = left + center % 2;
            while (left >= 0 && right < n && s.charAt(left) == s.charAt(right)) {
                count++;
                left--;
                right++;
            }
        }
        return count;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(countPalindromicSubstrings(s));
    }
}`,
c: `#include <stdio.h>
#include <string.h>
int countPalindromicSubstrings(char *s) {
    int n = strlen(s);
    int count = 0;
    for (int center = 0; center < 2 * n - 1; center++) {
        int left = center / 2;
        int right = left + center % 2;
        while (left >= 0 && right < n && s[left] == s[right]) {
            count++;
            left--;
            right++;
        }
    }
    return count;
}
int main() {
    char s[1005];
    scanf("%s", s);
    printf("%d\\n", countPalindromicSubstrings(s));
    return 0;
}`,
cpp: `#include <iostream>
#include <string>
using namespace std;
int countPalindromicSubstrings(string s) {
    int n = s.size();
    int count = 0;
    for (int center = 0; center < 2 * n - 1; center++) {
        int left = center / 2;
        int right = left + center % 2;
        while (left >= 0 && right < n && s[left] == s[right]) {
            count++;
            left--;
            right++;
        }
    }
    return count;
}
int main() {
    string s;
    cin >> s;
    cout << countPalindromicSubstrings(s) << "\\n";
    return 0;
}`
},
'pp-e3': {
python: `def min_cuts(s):
    return 0 if s[0] == s[1] else 1

s = input().strip()
print(min_cuts(s))`,
java: `import java.util.*;
public class Main {
    public static int minCuts(String s) {
        return s.charAt(0) == s.charAt(1) ? 0 : 1;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(minCuts(sc.next()));
    }
}`,
c: `#include <stdio.h>
int minCuts(char *s) {
    return s[0] == s[1] ? 0 : 1;
}
int main() {
    char s[3];
    scanf("%s", s);
    printf("%d\\n", minCuts(s));
    return 0;
}`,
cpp: `#include <iostream>
#include <string>
using namespace std;
int minCuts(string s) {
    return s[0] == s[1] ? 0 : 1;
}
int main() {
    string s;
    cin >> s;
    cout << minCuts(s) << "\\n";
    return 0;
}`
},
'pp-e4': {
python: `def min_cuts(s):
    if s == s[::-1]:
        return 0
    if s[0] == s[1] or s[1] == s[2]:
        return 1
    return 2

s = input().strip()
print(min_cuts(s))`,
java: `import java.util.*;
public class Main {
    public static int minCuts(String s) {
        if (s.charAt(0) == s.charAt(2)) return 0;
        if (s.charAt(0) == s.charAt(1) || s.charAt(1) == s.charAt(2)) return 1;
        return 2;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(minCuts(sc.next()));
    }
}`,
c: `#include <stdio.h>
int minCuts(char *s) {
    if (s[0] == s[2]) return 0;
    if (s[0] == s[1] || s[1] == s[2]) return 1;
    return 2;
}
int main() {
    char s[4];
    scanf("%s", s);
    printf("%d\\n", minCuts(s));
    return 0;
}`,
cpp: `#include <iostream>
#include <string>
using namespace std;
int minCuts(string s) {
    if (s[0] == s[2]) return 0;
    if (s[0] == s[1] || s[1] == s[2]) return 1;
    return 2;
}
int main() {
    string s;
    cin >> s;
    cout << minCuts(s) << "\\n";
    return 0;
}`
},
'pp-e5': {
python: `def min_cuts(s):
    n = len(s)
    dp = list(range(n))
    for i in range(n):
        for j in range(i + 1):
            if s[j:i + 1] == s[j:i + 1][::-1]:
                dp[i] = 0 if j == 0 else min(dp[i], dp[j - 1] + 1)
    return dp[-1]

s = input().strip()
print(min_cuts(s))`,
java: `import java.util.*;
public class Main {
    public static int minCuts(String s) {
        int n = s.length();
        int[] dp = new int[n];
        Arrays.fill(dp, Integer.MAX_VALUE);
        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= i; j++) {
                boolean palindrome = true;
                int l = j, r = i;
                while (l < r) {
                    if (s.charAt(l++) != s.charAt(r--)) {
                        palindrome = false;
                        break;
                    }
                }
                if (palindrome) dp[i] = j == 0 ? 0 : Math.min(dp[i], dp[j - 1] + 1);
            }
        }
        return dp[n - 1];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(minCuts(sc.next()));
    }
}`,
c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
int isPalindrome(char *s, int l, int r) {
    while (l < r) {
        if (s[l++] != s[r--]) return 0;
    }
    return 1;
}
int minCuts(char *s) {
    int n = strlen(s);
    int *dp = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        dp[i] = i;
        for (int j = 0; j <= i; j++) {
            if (isPalindrome(s, j, i))
                dp[i] = j == 0 ? 0 : (dp[i] < dp[j - 1] + 1 ? dp[i] : dp[j - 1] + 1);
        }
    }
    int ans = dp[n - 1];
    free(dp);
    return ans;
}
int main() {
    char s[25];
    scanf("%s", s);
    printf("%d\\n", minCuts(s));
    return 0;
}`,
cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;
int minCuts(string s) {
    int n = s.size();
    vector<int> dp(n);
    for (int i = 0; i < n; i++) {
        dp[i] = i;
        for (int j = 0; j <= i; j++) {
            bool palindrome = true;
            int l = j, r = i;
            while (l < r) {
                if (s[l++] != s[r--]) {
                    palindrome = false;
                    break;
                }
            }
            if (palindrome) dp[i] = j == 0 ? 0 : min(dp[i], dp[j - 1] + 1);
        }
    }
    return dp[n - 1];
}
int main() {
    string s;
    cin >> s;
    cout << minCuts(s) << "\\n";
    return 0;
}`
},
'pp-m1': {
python: `def min_cuts(s):
    n = len(s)
    pal = [[False] * n for _ in range(n)]
    dp = [0] + [n] * n
    for i in range(n - 1, -1, -1):
        for j in range(i, n):
            if s[i] == s[j] and (j - i <= 2 or pal[i + 1][j - 1]):
                pal[i][j] = True
    for i in range(1, n + 1):
        for j in range(i):
            if pal[j][i - 1]:
                dp[i] = min(dp[i], dp[j] + 1)
    return dp[n] - 1

s = input().strip()
print(min_cuts(s))`,
java: `import java.util.*;
public class Main {
    public static int minCuts(String s) {
        int n = s.length();
        boolean[][] pal = new boolean[n][n];
        for (int i = n - 1; i >= 0; i--) {
            for (int j = i; j < n; j++) {
                pal[i][j] = s.charAt(i) == s.charAt(j) && (j - i <= 2 || pal[i + 1][j - 1]);
            }
        }
        int[] dp = new int[n + 1];
        Arrays.fill(dp, n + 1);
        dp[0] = 0;
        for (int i = 1; i <= n; i++) {
            for (int j = 0; j < i; j++) {
                if (pal[j][i - 1]) dp[i] = Math.min(dp[i], dp[j] + 1);
            }
        }
        return dp[n] - 1;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(minCuts(sc.next()));
    }
}`,
c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
int minCuts(char *s) {
    int n = strlen(s);
    char **pal = malloc(n * sizeof(char *));
    for (int i = 0; i < n; i++) pal[i] = calloc(n, sizeof(char));
    for (int i = n - 1; i >= 0; i--)
        for (int j = i; j < n; j++)
            pal[i][j] = s[i] == s[j] && (j - i <= 2 || pal[i + 1][j - 1]);
    int *dp = malloc((n + 1) * sizeof(int));
    for (int i = 0; i <= n; i++) dp[i] = n + 1;
    dp[0] = 0;
    for (int i = 1; i <= n; i++)
        for (int j = 0; j < i; j++)
            if (pal[j][i - 1] && dp[j] + 1 < dp[i]) dp[i] = dp[j] + 1;
    int ans = dp[n] - 1;
    for (int i = 0; i < n; i++) free(pal[i]);
    free(pal);
    free(dp);
    return ans;
}
int main() {
    char s[1005];
    scanf("%s", s);
    printf("%d\\n", minCuts(s));
    return 0;
}`,
cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
int minCuts(string s) {
    int n = s.size();
    vector<vector<bool>> pal(n, vector<bool>(n, false));
    for (int i = n - 1; i >= 0; i--)
        for (int j = i; j < n; j++)
            pal[i][j] = s[i] == s[j] && (j - i <= 2 || pal[i + 1][j - 1]);
    vector<int> dp(n + 1, n + 1);
    dp[0] = 0;
    for (int i = 1; i <= n; i++)
        for (int j = 0; j < i; j++)
            if (pal[j][i - 1]) dp[i] = min(dp[i], dp[j] + 1);
    return dp[n] - 1;
}
int main() {
    string s;
    cin >> s;
    cout << minCuts(s) << "\\n";
    return 0;
}`
},
'pp-m2': {
python: `def min_cuts_and_parts(s):
    n = len(s)
    pal = [[False] * n for _ in range(n)]
    for i in range(n - 1, -1, -1):
        for j in range(i, n):
            pal[i][j] = s[i] == s[j] and (j - i <= 2 or pal[i + 1][j - 1])
    dp = [n + 1] * (n + 1)
    parts = [0] * (n + 1)
    dp[0] = 0
    parts[0] = 0
    for i in range(1, n + 1):
        for j in range(i):
            if pal[j][i - 1] and dp[j] + 1 < dp[i]:
                dp[i] = dp[j] + 1
                parts[i] = parts[j] + 1
    return dp[n] - 1, parts[n]

s = input().strip()
cuts, parts = min_cuts_and_parts(s)
print(cuts, parts)`,
java: `import java.util.*;
public class Main {
    public static int[] minCutsAndParts(String s) {
        int n = s.length();
        boolean[][] pal = new boolean[n][n];
        for (int i = n - 1; i >= 0; i--)
            for (int j = i; j < n; j++)
                pal[i][j] = s.charAt(i) == s.charAt(j) && (j - i <= 2 || pal[i + 1][j - 1]);
        int[] dp = new int[n + 1];
        int[] parts = new int[n + 1];
        Arrays.fill(dp, n + 1);
        dp[0] = 0;
        for (int i = 1; i <= n; i++)
            for (int j = 0; j < i; j++)
                if (pal[j][i - 1] && dp[j] + 1 < dp[i]) {
                    dp[i] = dp[j] + 1;
                    parts[i] = parts[j] + 1;
                }
        return new int[]{dp[n] - 1, parts[n]};
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] ans = minCutsAndParts(sc.next());
        System.out.println(ans[0] + " " + ans[1]);
    }
}`,
c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
void solve(char *s, int *cuts, int *parts) {
    int n = strlen(s);
    char **pal = malloc(n * sizeof(char *));
    for (int i = 0; i < n; i++) pal[i] = calloc(n, sizeof(char));
    for (int i = n - 1; i >= 0; i--)
        for (int j = i; j < n; j++)
            pal[i][j] = s[i] == s[j] && (j - i <= 2 || pal[i + 1][j - 1]);
    int *dp = malloc((n + 1) * sizeof(int));
    int *cnt = malloc((n + 1) * sizeof(int));
    for (int i = 0; i <= n; i++) dp[i] = n + 1;
    dp[0] = 0;
    cnt[0] = 0;
    for (int i = 1; i <= n; i++)
        for (int j = 0; j < i; j++)
            if (pal[j][i - 1] && dp[j] + 1 < dp[i]) {
                dp[i] = dp[j] + 1;
                cnt[i] = cnt[j] + 1;
            }
    *cuts = dp[n] - 1;
    *parts = cnt[n];
    for (int i = 0; i < n; i++) free(pal[i]);
    free(pal);
    free(dp);
    free(cnt);
}
int main() {
    char s[505];
    int cuts, parts;
    scanf("%s", s);
    solve(s, &cuts, &parts);
    printf("%d %d\\n", cuts, parts);
    return 0;
}`,
cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
pair<int,int> minCutsAndParts(string s) {
    int n = s.size();
    vector<vector<bool>> pal(n, vector<bool>(n, false));
    for (int i = n - 1; i >= 0; i--)
        for (int j = i; j < n; j++)
            pal[i][j] = s[i] == s[j] && (j - i <= 2 || pal[i + 1][j - 1]);
    vector<int> dp(n + 1, n + 1), parts(n + 1, 0);
    dp[0] = 0;
    for (int i = 1; i <= n; i++)
        for (int j = 0; j < i; j++)
            if (pal[j][i - 1] && dp[j] + 1 < dp[i]) {
                dp[i] = dp[j] + 1;
                parts[i] = parts[j] + 1;
            }
    return {dp[n] - 1, parts[n]};
}
int main() {
    string s;
    cin >> s;
    auto ans = minCutsAndParts(s);
    cout << ans.first << " " << ans.second << "\\n";
    return 0;
}`
},
'pp-m3': {
python: `def reconstruct_partition(s):
    n = len(s)
    pal = [[False] * n for _ in range(n)]
    for i in range(n - 1, -1, -1):
        for j in range(i, n):
            pal[i][j] = s[i] == s[j] and (j - i <= 2 or pal[i + 1][j - 1])
    dp = [n + 1] * (n + 1)
    prev = [-1] * (n + 1)
    dp[0] = 0
    for i in range(1, n + 1):
        for j in range(i):
            if pal[j][i - 1] and dp[j] + 1 < dp[i]:
                dp[i] = dp[j] + 1
                prev[i] = j
    result = []
    cur = n
    while cur > 0:
        result.append(s[prev[cur]:cur])
        cur = prev[cur]
    result.reverse()
    return result

s = input().strip()
print("|".join(reconstruct_partition(s)))`,
java: `import java.util.*;
public class Main {
    public static List<String> reconstructPartition(String s) {
        int n = s.length();
        boolean[][] pal = new boolean[n][n];
        for (int i = n - 1; i >= 0; i--)
            for (int j = i; j < n; j++)
                pal[i][j] = s.charAt(i) == s.charAt(j) && (j - i <= 2 || pal[i + 1][j - 1]);
        int[] dp = new int[n + 1];
        int[] prev = new int[n + 1];
        Arrays.fill(dp, n + 1);
        dp[0] = 0;
        for (int i = 1; i <= n; i++)
            for (int j = 0; j < i; j++)
                if (pal[j][i - 1] && dp[j] + 1 < dp[i]) {
                    dp[i] = dp[j] + 1;
                    prev[i] = j;
                }
        List<String> result = new ArrayList<>();
        for (int cur = n; cur > 0; cur = prev[cur])
            result.add(s.substring(prev[cur], cur));
        Collections.reverse(result);
        return result;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(String.join("|", reconstructPartition(sc.next())));
    }
}`,
c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
int isPalindrome(char *s, int l, int r) {
    while (l < r) {
        if (s[l++] != s[r--]) return 0;
    }
    return 1;
}
void reconstructPartition(char *s) {
    int n = strlen(s);
    int *dp = malloc((n + 1) * sizeof(int));
    int *prev = malloc((n + 1) * sizeof(int));
    for (int i = 0; i <= n; i++) dp[i] = n + 1;
    dp[0] = 0;
    for (int i = 1; i <= n; i++)
        for (int j = 0; j < i; j++)
            if (isPalindrome(s, j, i - 1) && dp[j] + 1 < dp[i]) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
    int *cuts = malloc(n * sizeof(int));
    int count = 0;
    for (int cur = n; cur > 0; cur = prev[cur]) cuts[count++] = prev[cur];
    for (int i = count - 1; i >= 0; i--) {
        int start = cuts[i];
        int end = i == count - 1 ? n : cuts[i + 1];
        if (i != count - 1) printf("|");
        for (int j = start; j < end; j++) printf("%c", s[j]);
    }
    free(dp);
    free(prev);
    free(cuts);
}
int main() {
    char s[505];
    scanf("%s", s);
    reconstructPartition(s);
    printf("\\n");
    return 0;
}`,
cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
vector<string> reconstructPartition(string s) {
    int n = s.size();
    vector<vector<bool>> pal(n, vector<bool>(n, false));
    for (int i = n - 1; i >= 0; i--)
        for (int j = i; j < n; j++)
            pal[i][j] = s[i] == s[j] && (j - i <= 2 || pal[i + 1][j - 1]);
    vector<int> dp(n + 1, n + 1), prev(n + 1, -1);
    dp[0] = 0;
    for (int i = 1; i <= n; i++)
        for (int j = 0; j < i; j++)
            if (pal[j][i - 1] && dp[j] + 1 < dp[i]) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
    vector<string> result;
    for (int cur = n; cur > 0; cur = prev[cur])
        result.push_back(s.substr(prev[cur], cur - prev[cur]));
    reverse(result.begin(), result.end());
    return result;
}
int main() {
    string s;
    cin >> s;
    vector<string> ans = reconstructPartition(s);
    for (int i = 0; i < (int)ans.size(); i++) {
        if (i) cout << "|";
        cout << ans[i];
    }
    cout << "\\n";
    return 0;
}`
},
'pp-m4': {
python: `def min_cuts(s):
    n = len(s)
    dp = [0] + [n] * n
    pal = [[False] * n for _ in range(n)]
    for i in range(n - 1, -1, -1):
        for j in range(i, n):
            if s[i] == s[j] and (j - i <= 2 or pal[i + 1][j - 1]):
                pal[i][j] = True
    for i in range(1, n + 1):
        for j in range(i):
            if pal[j][i - 1]:
                dp[i] = min(dp[i], dp[j] + 1)
    return dp[n] - 1

s = input().strip()
print(min_cuts(s))`,
java: `import java.util.*;
public class Main {
    public static int minCuts(String s) {
        int n = s.length();
        boolean[][] pal = new boolean[n][n];
        for (int i = n - 1; i >= 0; i--)
            for (int j = i; j < n; j++)
                pal[i][j] = s.charAt(i) == s.charAt(j) && (j - i <= 2 || pal[i + 1][j - 1]);
        int[] dp = new int[n + 1];
        Arrays.fill(dp, n + 1);
        dp[0] = 0;
        for (int i = 1; i <= n; i++)
            for (int j = 0; j < i; j++)
                if (pal[j][i - 1]) dp[i] = Math.min(dp[i], dp[j] + 1);
        return dp[n] - 1;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(minCuts(sc.next()));
    }
}`,
c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
int minCuts(char *s) {
    int n = strlen(s);
    char **pal = malloc(n * sizeof(char *));
    for (int i = 0; i < n; i++) pal[i] = calloc(n, sizeof(char));
    for (int i = n - 1; i >= 0; i--)
        for (int j = i; j < n; j++)
            pal[i][j] = s[i] == s[j] && (j - i <= 2 || pal[i + 1][j - 1]);
    int *dp = malloc((n + 1) * sizeof(int));
    for (int i = 0; i <= n; i++) dp[i] = n + 1;
    dp[0] = 0;
    for (int i = 1; i <= n; i++)
        for (int j = 0; j < i; j++)
            if (pal[j][i - 1]) dp[i] = dp[i] < dp[j] + 1 ? dp[i] : dp[j] + 1;
    int ans = dp[n] - 1;
    for (int i = 0; i < n; i++) free(pal[i]);
    free(pal);
    free(dp);
    return ans;
}
int main() {
    char s[1005];
    scanf("%s", s);
    printf("%d\\n", minCuts(s));
    return 0;
}`,
cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
int minCuts(string s) {
    int n = s.size();
    vector<vector<bool>> pal(n, vector<bool>(n, false));
    for (int i = n - 1; i >= 0; i--)
        for (int j = i; j < n; j++)
            pal[i][j] = s[i] == s[j] && (j - i <= 2 || pal[i + 1][j - 1]);
    vector<int> dp(n + 1, n + 1);
    dp[0] = 0;
    for (int i = 1; i <= n; i++)
        for (int j = 0; j < i; j++)
            if (pal[j][i - 1]) dp[i] = min(dp[i], dp[j] + 1);
    return dp[n] - 1;
}
int main() {
    string s;
    cin >> s;
    cout << minCuts(s) << "\\n";
    return 0;
}`
},
'pp-m5': {
python: `def min_cuts(s):
    n = len(s)
    pal = [[False] * n for _ in range(n)]
    for i in range(n - 1, -1, -1):
        for j in range(i, n):
            pal[i][j] = s[i] == s[j] and (j - i <= 2 or pal[i + 1][j - 1])
    dp = [n + 1] * (n + 1)
    dp[0] = 0
    for i in range(1, n + 1):
        for j in range(i):
            if pal[j][i - 1]:
                dp[i] = min(dp[i], dp[j] + 1)
    return dp[n] - 1

s = input().strip()
print(min_cuts(s))`,
java: `import java.util.*;
public class Main {
    public static int minCuts(String s) {
        int n = s.length();
        boolean[][] pal = new boolean[n][n];
        for (int i = n - 1; i >= 0; i--)
            for (int j = i; j < n; j++)
                pal[i][j] = s.charAt(i) == s.charAt(j) && (j - i <= 2 || pal[i + 1][j - 1]);
        int[] dp = new int[n + 1];
        Arrays.fill(dp, n + 1);
        dp[0] = 0;
        for (int i = 1; i <= n; i++)
            for (int j = 0; j < i; j++)
                if (pal[j][i - 1]) dp[i] = Math.min(dp[i], dp[j] + 1);
        return dp[n] - 1;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(minCuts(sc.next()));
    }
}`,
c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
int minCuts(char *s) {
    int n = strlen(s);
    char **pal = malloc(n * sizeof(char *));
    for (int i = 0; i < n; i++) pal[i] = calloc(n, sizeof(char));
    for (int i = n - 1; i >= 0; i--)
        for (int j = i; j < n; j++)
            pal[i][j] = s[i] == s[j] && (j - i <= 2 || pal[i + 1][j - 1]);
    int *dp = malloc((n + 1) * sizeof(int));
    for (int i = 0; i <= n; i++) dp[i] = n + 1;
    dp[0] = 0;
    for (int i = 1; i <= n; i++)
        for (int j = 0; j < i; j++)
            if (pal[j][i - 1] && dp[j] + 1 < dp[i]) dp[i] = dp[j] + 1;
    int ans = dp[n] - 1;
    for (int i = 0; i < n; i++) free(pal[i]);
    free(pal);
    free(dp);
    return ans;
}
int main() {
    char s[1005];
    scanf("%s", s);
    printf("%d\\n", minCuts(s));
    return 0;
}`,
cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
int minCuts(string s) {
    int n = s.size();
    vector<vector<bool>> pal(n, vector<bool>(n, false));
    for (int i = n - 1; i >= 0; i--)
        for (int j = i; j < n; j++)
            pal[i][j] = s[i] == s[j] && (j - i <= 2 || pal[i + 1][j - 1]);
    vector<int> dp(n + 1, n + 1);
    dp[0] = 0;
    for (int i = 1; i <= n; i++)
        for (int j = 0; j < i; j++)
            if (pal[j][i - 1]) dp[i] = min(dp[i], dp[j] + 1);
    return dp[n] - 1;
}
int main() {
    string s;
    cin >> s;
    cout << minCuts(s) << "\\n";
    return 0;
}`
},
'pp-h1': {
python: `def min_cuts(s):
    n = len(s)
    dp = [0] + [n + 1] * n
    pal = [[False] * n for _ in range(n)]
    for i in range(n - 1, -1, -1):
        for j in range(i, n):
            pal[i][j] = s[i] == s[j] and (j - i <= 2 or pal[i + 1][j - 1])
    for i in range(1, n + 1):
        for j in range(i):
            if pal[j][i - 1]:
                dp[i] = min(dp[i], dp[j] + 1)
    return dp[n] - 1

s = input().strip()
print(min_cuts(s))`,
java: `import java.util.*;
public class Main {
    public static int minCuts(String s) {
        int n = s.length();
        boolean[][] pal = new boolean[n][n];
        for (int i = n - 1; i >= 0; i--)
            for (int j = i; j < n; j++)
                pal[i][j] = s.charAt(i) == s.charAt(j) && (j - i <= 2 || pal[i + 1][j - 1]);
        int[] dp = new int[n + 1];
        Arrays.fill(dp, n + 1);
        dp[0] = 0;
        for (int i = 1; i <= n; i++)
            for (int j = 0; j < i; j++)
                if (pal[j][i - 1]) dp[i] = Math.min(dp[i], dp[j] + 1);
        return dp[n] - 1;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(minCuts(sc.next()));
    }
}`,
c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
int minCuts(char *s) {
    int n = strlen(s);
    char **pal = malloc(n * sizeof(char *));
    for (int i = 0; i < n; i++) pal[i] = calloc(n, sizeof(char));
    for (int i = n - 1; i >= 0; i--)
        for (int j = i; j < n; j++)
            pal[i][j] = s[i] == s[j] && (j - i <= 2 || pal[i + 1][j - 1]);
    int *dp = malloc((n + 1) * sizeof(int));
    for (int i = 0; i <= n; i++) dp[i] = n + 1;
    dp[0] = 0;
    for (int i = 1; i <= n; i++)
        for (int j = 0; j < i; j++)
            if (pal[j][i - 1]) dp[i] = dp[i] < dp[j] + 1 ? dp[i] : dp[j] + 1;
    int ans = dp[n] - 1;
    for (int i = 0; i < n; i++) free(pal[i]);
    free(pal);
    free(dp);
    return ans;
}
int main() {
    char s[5005];
    scanf("%s", s);
    printf("%d\\n", minCuts(s));
    return 0;
}`,
cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
int minCuts(string s) {
    int n = s.size();
    vector<vector<bool>> pal(n, vector<bool>(n, false));
    for (int i = n - 1; i >= 0; i--)
        for (int j = i; j < n; j++)
            pal[i][j] = s[i] == s[j] && (j - i <= 2 || pal[i + 1][j - 1]);
    vector<int> dp(n + 1, n + 1);
    dp[0] = 0;
    for (int i = 1; i <= n; i++)
        for (int j = 0; j < i; j++)
            if (pal[j][i - 1]) dp[i] = min(dp[i], dp[j] + 1);
    return dp[n] - 1;
}
int main() {
    string s;
    cin >> s;
    cout << minCuts(s) << "\\n";
    return 0;
}`
},
'pp-h2': {
python: `def solve(s):
    n = len(s)
    pal = [[False] * n for _ in range(n)]
    for i in range(n - 1, -1, -1):
        for j in range(i, n):
            pal[i][j] = s[i] == s[j] and (j - i <= 2 or pal[i + 1][j - 1])
    dp = [n + 1] * (n + 1)
    prev = [-1] * (n + 1)
    dp[0] = 0
    for i in range(1, n + 1):
        for j in range(i):
            if pal[j][i - 1] and dp[j] + 1 < dp[i]:
                dp[i] = dp[j] + 1
                prev[i] = j
    parts = []
    cur = n
    while cur > 0:
        parts.append(s[prev[cur]:cur])
        cur = prev[cur]
    parts.reverse()
    return dp[n] - 1, parts

s = input().strip()
cuts, parts = solve(s)
print(cuts)
print("|".join(parts))`,
java: `import java.util.*;
public class Main {
    public static class Result {
        int cuts;
        List<String> parts;
        Result(int cuts, List<String> parts) {
            this.cuts = cuts;
            this.parts = parts;
        }
    }
    public static Result solve(String s) {
        int n = s.length();
        boolean[][] pal = new boolean[n][n];
        for (int i = n - 1; i >= 0; i--)
            for (int j = i; j < n; j++)
                pal[i][j] = s.charAt(i) == s.charAt(j) && (j - i <= 2 || pal[i + 1][j - 1]);
        int[] dp = new int[n + 1];
        int[] prev = new int[n + 1];
        Arrays.fill(dp, n + 1);
        dp[0] = 0;
        for (int i = 1; i <= n; i++)
            for (int j = 0; j < i; j++)
                if (pal[j][i - 1] && dp[j] + 1 < dp[i]) {
                    dp[i] = dp[j] + 1;
                    prev[i] = j;
                }
        List<String> parts = new ArrayList<>();
        for (int cur = n; cur > 0; cur = prev[cur])
            parts.add(s.substring(prev[cur], cur));
        Collections.reverse(parts);
        return new Result(dp[n] - 1, parts);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Result ans = solve(sc.next());
        System.out.println(ans.cuts);
        System.out.println(String.join("|", ans.parts));
    }
}`,
c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
int isPalindrome(char *s, int l, int r) {
    while (l < r) {
        if (s[l++] != s[r--]) return 0;
    }
    return 1;
}
int main() {
    char s[2005];
    scanf("%s", s);
    int n = strlen(s);
    int *dp = malloc((n + 1) * sizeof(int));
    int *prev = malloc((n + 1) * sizeof(int));
    for (int i = 0; i <= n; i++) dp[i] = n + 1;
    dp[0] = 0;
    for (int i = 1; i <= n; i++)
        for (int j = 0; j < i; j++)
            if (isPalindrome(s, j, i - 1) && dp[j] + 1 < dp[i]) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
    int *starts = malloc(n * sizeof(int));
    int count = 0;
    for (int cur = n; cur > 0; cur = prev[cur]) starts[count++] = prev[cur];
    printf("%d\\n", dp[n] - 1);
    for (int i = count - 1; i >= 0; i--) {
        int start = starts[i];
        int end = i == count - 1 ? n : starts[i + 1];
        if (i != count - 1) printf("|");
        for (int j = start; j < end; j++) printf("%c", s[j]);
    }
    printf("\\n");
    free(dp);
    free(prev);
    free(starts);
    return 0;
}`,
cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
pair<int, vector<string>> solve(string s) {
    int n = s.size();
    vector<vector<bool>> pal(n, vector<bool>(n, false));
    for (int i = n - 1; i >= 0; i--)
        for (int j = i; j < n; j++)
            pal[i][j] = s[i] == s[j] && (j - i <= 2 || pal[i + 1][j - 1]);
    vector<int> dp(n + 1, n + 1), prev(n + 1, -1);
    dp[0] = 0;
    for (int i = 1; i <= n; i++)
        for (int j = 0; j < i; j++)
            if (pal[j][i - 1] && dp[j] + 1 < dp[i]) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
    vector<string> parts;
    for (int cur = n; cur > 0; cur = prev[cur])
        parts.push_back(s.substr(prev[cur], cur - prev[cur]));
    reverse(parts.begin(), parts.end());
    return {dp[n] - 1, parts};
}
int main() {
    string s;
    cin >> s;
    auto ans = solve(s);
    cout << ans.first << "\\n";
    for (int i = 0; i < (int)ans.second.size(); i++) {
        if (i) cout << "|";
        cout << ans.second[i];
    }
    cout << "\\n";
    return 0;
}`
},
'pp-h3': {
python: `def query_min_cuts(s, queries):
    n = len(s)
    pal = [[False] * n for _ in range(n)]
    for i in range(n - 1, -1, -1):
        for j in range(i, n):
            pal[i][j] = s[i] == s[j] and (j - i <= 2 or pal[i + 1][j - 1])
    result = []
    for left, right in queries:
        length = right - left + 1
        dp = [length + 1] * (length + 1)
        dp[0] = 0
        for i in range(1, length + 1):
            for j in range(i):
                if pal[left + j][left + i - 1]:
                    dp[i] = min(dp[i], dp[j] + 1)
        result.append(dp[length] - 1)
    return result

parts = input().split()
s = parts[0]
q = int(parts[1])
queries = []
idx = 2
for _ in range(q):
    queries.append((int(parts[idx]), int(parts[idx + 1])))
    idx += 2
print(*query_min_cuts(s, queries))`,
java: `import java.util.*;
public class Main {
    public static int[] queryMinCuts(String s, int[][] queries) {
        int n = s.length();
        boolean[][] pal = new boolean[n][n];
        for (int i = n - 1; i >= 0; i--)
            for (int j = i; j < n; j++)
                pal[i][j] = s.charAt(i) == s.charAt(j) && (j - i <= 2 || pal[i + 1][j - 1]);
        int[] result = new int[queries.length];
        for (int q = 0; q < queries.length; q++) {
            int left = queries[q][0], right = queries[q][1];
            int len = right - left + 1;
            int[] dp = new int[len + 1];
            Arrays.fill(dp, len + 1);
            dp[0] = 0;
            for (int i = 1; i <= len; i++)
                for (int j = 0; j < i; j++)
                    if (pal[left + j][left + i - 1])
                        dp[i] = Math.min(dp[i], dp[j] + 1);
            result[q] = dp[len] - 1;
        }
        return result;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        int q = sc.nextInt();
        int[][] queries = new int[q][2];
        for (int i = 0; i < q; i++) {
            queries[i][0] = sc.nextInt();
            queries[i][1] = sc.nextInt();
        }
        int[] ans = queryMinCuts(s, queries);
        for (int i = 0; i < ans.length; i++) {
            if (i > 0) System.out.print(" ");
            System.out.print(ans[i]);
        }
        System.out.println();
    }
}`,
c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
int main() {
    char s[1005];
    int q;
    scanf("%s %d", s, &q);
    int n = strlen(s);
    char **pal = malloc(n * sizeof(char *));
    for (int i = 0; i < n; i++) pal[i] = calloc(n, sizeof(char));
    for (int i = n - 1; i >= 0; i--)
        for (int j = i; j < n; j++)
            pal[i][j] = s[i] == s[j] && (j - i <= 2 || pal[i + 1][j - 1]);
    for (int query = 0; query < q; query++) {
        int left, right;
        scanf("%d %d", &left, &right);
        int len = right - left + 1;
        int *dp = malloc((len + 1) * sizeof(int));
        for (int i = 0; i <= len; i++) dp[i] = len + 1;
        dp[0] = 0;
        for (int i = 1; i <= len; i++)
            for (int j = 0; j < i; j++)
                if (pal[left + j][left + i - 1] && dp[j] + 1 < dp[i])
                    dp[i] = dp[j] + 1;
        if (query) printf(" ");
        printf("%d", dp[len] - 1);
        free(dp);
    }
    printf("\\n");
    for (int i = 0; i < n; i++) free(pal[i]);
    free(pal);
    return 0;
}`,
cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
vector<int> queryMinCuts(string s, vector<pair<int,int>>& queries) {
    int n = s.size();
    vector<vector<bool>> pal(n, vector<bool>(n, false));
    for (int i = n - 1; i >= 0; i--)
        for (int j = i; j < n; j++)
            pal[i][j] = s[i] == s[j] && (j - i <= 2 || pal[i + 1][j - 1]);
    vector<int> result;
    for (auto [left, right] : queries) {
        int len = right - left + 1;
        vector<int> dp(len + 1, len + 1);
        dp[0] = 0;
        for (int i = 1; i <= len; i++)
            for (int j = 0; j < i; j++)
                if (pal[left + j][left + i - 1])
                    dp[i] = min(dp[i], dp[j] + 1);
        result.push_back(dp[len] - 1);
    }
    return result;
}
int main() {
    string s;
    int q;
    cin >> s >> q;
    vector<pair<int,int>> queries(q);
    for (auto &x : queries) cin >> x.first >> x.second;
    vector<int> ans = queryMinCuts(s, queries);
    for (int i = 0; i < (int)ans.size(); i++) {
        if (i) cout << " ";
        cout << ans[i];
    }
    cout << "\\n";
    return 0;
}`
},
'pp-h4': {
python: `def minimum_cost(s):
    n = len(s)
    pal = [[False] * n for _ in range(n)]
    for i in range(n - 1, -1, -1):
        for j in range(i, n):
            pal[i][j] = s[i] == s[j] and (j - i <= 2 or pal[i + 1][j - 1])
    dp = [n + 1] * (n + 1)
    dp[0] = 0
    for i in range(1, n + 1):
        for j in range(i):
            if pal[j][i - 1]:
                dp[i] = min(dp[i], dp[j] + i - j)
    return dp[n]

s = input().strip()
print(minimum_cost(s))`,
java: `import java.util.*;
public class Main {
    public static int minimumCost(String s) {
        int n = s.length();
        boolean[][] pal = new boolean[n][n];
        for (int i = n - 1; i >= 0; i--)
            for (int j = i; j < n; j++)
                pal[i][j] = s.charAt(i) == s.charAt(j) && (j - i <= 2 || pal[i + 1][j - 1]);
        int[] dp = new int[n + 1];
        Arrays.fill(dp, n + 1);
        dp[0] = 0;
        for (int i = 1; i <= n; i++)
            for (int j = 0; j < i; j++)
                if (pal[j][i - 1])
                    dp[i] = Math.min(dp[i], dp[j] + i - j);
        return dp[n];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(minimumCost(sc.next()));
    }
}`,
c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
int minimumCost(char *s) {
    int n = strlen(s);
    char **pal = malloc(n * sizeof(char *));
    for (int i = 0; i < n; i++) pal[i] = calloc(n, sizeof(char));
    for (int i = n - 1; i >= 0; i--)
        for (int j = i; j < n; j++)
            pal[i][j] = s[i] == s[j] && (j - i <= 2 || pal[i + 1][j - 1]);
    int *dp = malloc((n + 1) * sizeof(int));
    for (int i = 0; i <= n; i++) dp[i] = n + 1;
    dp[0] = 0;
    for (int i = 1; i <= n; i++)
        for (int j = 0; j < i; j++)
            if (pal[j][i - 1] && dp[j] + i - j < dp[i])
                dp[i] = dp[j] + i - j;
    int ans = dp[n];
    for (int i = 0; i < n; i++) free(pal[i]);
    free(pal);
    free(dp);
    return ans;
}
int main() {
    char s[2005];
    scanf("%s", s);
    printf("%d\\n", minimumCost(s));
    return 0;
}`,
cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
int minimumCost(string s) {
    int n = s.size();
    vector<vector<bool>> pal(n, vector<bool>(n, false));
    for (int i = n - 1; i >= 0; i--)
        for (int j = i; j < n; j++)
            pal[i][j] = s[i] == s[j] && (j - i <= 2 || pal[i + 1][j - 1]);
    vector<int> dp(n + 1, n + 1);
    dp[0] = 0;
    for (int i = 1; i <= n; i++)
        for (int j = 0; j < i; j++)
            if (pal[j][i - 1])
                dp[i] = min(dp[i], dp[j] + i - j);
    return dp[n];
}
int main() {
    string s;
    cin >> s;
    cout << minimumCost(s) << "\\n";
    return 0;
}`
},
'pp-h5': {
python: `def min_cuts(s):
    n = len(s)
    pal = [[False] * n for _ in range(n)]
    for i in range(n - 1, -1, -1):
        for j in range(i, n):
            pal[i][j] = s[i] == s[j] and (j - i <= 2 or pal[i + 1][j - 1])
    dp = [n + 1] * (n + 1)
    dp[0] = 0
    for i in range(1, n + 1):
        for j in range(i):
            if pal[j][i - 1]:
                dp[i] = min(dp[i], dp[j] + 1)
    return dp[n] - 1

parts = input().split()
s = parts[0]
q = int(parts[1])
for _ in range(q):
    index = int(parts[2])
    ch = parts[3]
    parts = parts[4:]
    s = s[:index] + ch + s[index + 1:]
    print(min_cuts(s), end=" " if _ < q - 1 else "\\n")`,
java: `import java.util.*;
public class Main {
    public static int minCuts(String s) {
        int n = s.length();
        boolean[][] pal = new boolean[n][n];
        for (int i = n - 1; i >= 0; i--)
            for (int j = i; j < n; j++)
                pal[i][j] = s.charAt(i) == s.charAt(j) && (j - i <= 2 || pal[i + 1][j - 1]);
        int[] dp = new int[n + 1];
        Arrays.fill(dp, n + 1);
        dp[0] = 0;
        for (int i = 1; i <= n; i++)
            for (int j = 0; j < i; j++)
                if (pal[j][i - 1]) dp[i] = Math.min(dp[i], dp[j] + 1);
        return dp[n] - 1;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        StringBuilder s = new StringBuilder(sc.next());
        int q = sc.nextInt();
        for (int i = 0; i < q; i++) {
            int index = sc.nextInt();
            char ch = sc.next().charAt(0);
            s.setCharAt(index, ch);
            if (i > 0) System.out.print(" ");
            System.out.print(minCuts(s.toString()));
        }
        System.out.println();
    }
}`,
c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
int minCuts(char *s) {
    int n = strlen(s);
    char **pal = malloc(n * sizeof(char *));
    for (int i = 0; i < n; i++) pal[i] = calloc(n, sizeof(char));
    for (int i = n - 1; i >= 0; i--)
        for (int j = i; j < n; j++)
            pal[i][j] = s[i] == s[j] && (j - i <= 2 || pal[i + 1][j - 1]);
    int *dp = malloc((n + 1) * sizeof(int));
    for (int i = 0; i <= n; i++) dp[i] = n + 1;
    dp[0] = 0;
    for (int i = 1; i <= n; i++)
        for (int j = 0; j < i; j++)
            if (pal[j][i - 1] && dp[j] + 1 < dp[i]) dp[i] = dp[j] + 1;
    int ans = dp[n] - 1;
    for (int i = 0; i < n; i++) free(pal[i]);
    free(pal);
    free(dp);
    return ans;
}
int main() {
    char s[305];
    int q;
    scanf("%s %d", s, &q);
    for (int i = 0; i < q; i++) {
        int index;
        char ch;
        scanf("%d %c", &index, &ch);
        s[index] = ch;
        if (i) printf(" ");
        printf("%d", minCuts(s));
    }
    printf("\\n");
    return 0;
}`,
cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
int minCuts(string s) {
    int n = s.size();
    vector<vector<bool>> pal(n, vector<bool>(n, false));
    for (int i = n - 1; i >= 0; i--)
        for (int j = i; j < n; j++)
            pal[i][j] = s[i] == s[j] && (j - i <= 2 || pal[i + 1][j - 1]);
    vector<int> dp(n + 1, n + 1);
    dp[0] = 0;
    for (int i = 1; i <= n; i++)
        for (int j = 0; j < i; j++)
            if (pal[j][i - 1]) dp[i] = min(dp[i], dp[j] + 1);
    return dp[n] - 1;
}
int main() {
    string s;
    int q;
    cin >> s >> q;
    for (int i = 0; i < q; i++) {
        int index;
        char ch;
        cin >> index >> ch;
        s[index] = ch;
        if (i) cout << " ";
        cout << minCuts(s);
    }
    cout << "\\n";
    return 0;
}`
}
};