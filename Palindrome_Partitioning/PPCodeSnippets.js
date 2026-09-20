// src/data/codeSnippets.js
export const PPcodeSnippets = {
    c: `#include <stdio.h>
#include <string.h>
int isPalindrome(char s[], int left, int right) {
    while (left < right) {
        if (s[left] != s[right])
            return 0;
        left++;
        right--;
    }
    return 1;
}
int minCuts(char s[]) {
    int n = strlen(s);
    int dp[n];
    for (int i = 0; i < n; i++)
        dp[i] = i;
    for (int i = 0; i < n; i++) {
        if (isPalindrome(s, 0, i))
            dp[i] = 0;
        else {
            for (int j = 1; j <= i; j++) {
                if (isPalindrome(s, j, i) && dp[j - 1] + 1 < dp[i])
                    dp[i] = dp[j - 1] + 1;
            }
        }
    }
    return dp[n - 1];
}
int main() {
    char s[] = "aab";
    int result = minCuts(s);
    printf("Minimum cuts: %d\\n", result);
    return 0;
}
`,
    cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;
bool isPalindrome(string s, int left, int right) {
    while (left < right) {
        if (s[left] != s[right])
            return false;
        left++;
        right--;
    }
    return true;
}
int minCuts(string s) {
    int n = s.length();
    vector<int> dp(n);
    for (int i = 0; i < n; i++)
        dp[i] = i;
    for (int i = 0; i < n; i++) {
        if (isPalindrome(s, 0, i))
            dp[i] = 0;
        else {
            for (int j = 1; j <= i; j++) {
                if (isPalindrome(s, j, i))
                    dp[i] = min(dp[i], dp[j - 1] + 1);
            }
        }
    }
    return dp[n - 1];
}
int main() {
    string s = "aab";
    int result = minCuts(s);
    cout << "Minimum cuts: " << result << endl;
    return 0;
}
`,
    python: `def is_palindrome(s, left, right):
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True
def min_cuts(s):
    n = len(s)
    dp = list(range(n))
    for i in range(n):
        if is_palindrome(s, 0, i):
            dp[i] = 0
        else:
            for j in range(1, i + 1):
                if is_palindrome(s, j, i):
                    dp[i] = min(dp[i], dp[j - 1] + 1)
    return dp[-1]
s = "aab"
result = min_cuts(s)
print(f"Minimum cuts: {result}")
`,
    java: `import java.util.*;
public class PalindromePartitioning {
    public static boolean isPalindrome(String s, int left, int right) {
        while (left < right) {
            if (s.charAt(left) != s.charAt(right))
                return false;
            left++;
            right--;
        }
        return true;
    }
    public static int minCuts(String s) {
        int n = s.length();
        int[] dp = new int[n];
        for (int i = 0; i < n; i++)
            dp[i] = i;
        for (int i = 0; i < n; i++) {
            if (isPalindrome(s, 0, i))
                dp[i] = 0;
            else {
                for (int j = 1; j <= i; j++) {
                    if (isPalindrome(s, j, i))
                        dp[i] = Math.min(dp[i], dp[j - 1] + 1);
                }
            }
        }
        return dp[n - 1];
    }
    public static void main(String[] args) {
        String s = "aab";
        int result = minCuts(s);
        System.out.println("Minimum cuts: " + result);
    }
}
`
};