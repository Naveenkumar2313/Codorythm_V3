export const palindromePartitioningProblems = [
{
id: 'pp-e1',
title: 'Check Palindrome Substring',
difficulty: 'Easy',
description: 'Given a string and two indices l and r, determine whether the substring from index l to index r is a palindrome.',
constraints: ['1 <= s.length <= 10^4','s contains only lowercase English letters','0 <= l <= r < s.length'],
examples: [
{input: 's = "racecar", l = 0, r = 6',output: 'true',explanation: 'The substring "racecar" reads the same from both directions.'},
{input: 's = "abcba", l = 1, r = 3',output: 'true',explanation: 'The substring "bcb" is a palindrome.'}
],
testCases: [
{input: 'racecar 0 6',expectedOutput: 'true',hidden: false},
{input: 'abcba 1 3',expectedOutput: 'true',hidden: false},
{input: 'hello 1 3',expectedOutput: 'false',hidden: false},
{input: 'a 0 0',expectedOutput: 'true',hidden: false},
{input: 'ab 0 1',expectedOutput: 'false',hidden: false}
],
starterCode: {
python: 'def is_palindrome(s, l, r):\n    pass\n\ns, l, r = input().split()\nl, r = int(l), int(r)\nprint(str(is_palindrome(s, l, r)).lower())',
java: 'import java.util.*;\n\npublic class Main {\n    public static boolean isPalindrome(String s, int l, int r) {\n        return false;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        int l = sc.nextInt();\n        int r = sc.nextInt();\n        System.out.println(isPalindrome(s, l, r));\n    }\n}',
c: '#include <stdio.h>\n#include <string.h>\n#include <stdbool.h>\nbool isPalindrome(char *s, int l, int r) {\n    return false;\n}\nint main() {\n    char s[10005];\n    int l, r;\n    scanf("%s %d %d", s, &l, &r);\n    printf("%s\\n", isPalindrome(s, l, r) ? "true" : "false");\n    return 0;\n}',
cpp: '#include <iostream>\n#include <string>\nusing namespace std;\nbool isPalindrome(string s, int l, int r) {\n    return false;\n}\nint main() {\n    string s;\n    int l, r;\n    cin >> s >> l >> r;\n    cout << (isPalindrome(s, l, r) ? "true" : "false") << "\\n";\n    return 0;\n}'
}
},
{
id: 'pp-e2',
title: 'Count Palindromic Substrings',
difficulty: 'Easy',
description: 'Given a string, count the total number of substrings that are palindromes.',
constraints: ['1 <= s.length <= 1000','s contains only lowercase English letters'],
examples: [
{input: 's = "aaa"',output: '6',explanation: 'The palindromic substrings are "a", "a", "a", "aa", "aa", and "aaa".'},
{input: 's = "abc"',output: '3',explanation: 'Only the three single-character substrings are palindromes.'}
],
testCases: [
{input: 'aaa',expectedOutput: '6',hidden: false},
{input: 'abc',expectedOutput: '3',hidden: false},
{input: 'aba',expectedOutput: '4',hidden: false},
{input: 'abba',expectedOutput: '6',hidden: false},
{input: 'a',expectedOutput: '1',hidden: false}
],
starterCode: {
python: 'def count_palindromic_substrings(s):\n    pass\n\ns = input().strip()\nprint(count_palindromic_substrings(s))',
java: 'import java.util.*;\n\npublic class Main {\n    public static int countPalindromicSubstrings(String s) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        System.out.println(countPalindromicSubstrings(s));\n    }\n}',
c: '#include <stdio.h>\n#include <string.h>\nint countPalindromicSubstrings(char *s) {\n    return 0;\n}\nint main() {\n    char s[1005];\n    scanf("%s", s);\n    printf("%d\\n", countPalindromicSubstrings(s));\n    return 0;\n}',
cpp: '#include <iostream>\n#include <string>\nusing namespace std;\nint countPalindromicSubstrings(string s) {\n    return 0;\n}\nint main() {\n    string s;\n    cin >> s;\n    cout << countPalindromicSubstrings(s) << "\\n";\n    return 0;\n}'
}
},
{
id: 'pp-e3',
title: 'Minimum Cuts for a String of Length Two',
difficulty: 'Easy',
description: 'Given a string containing exactly two characters, determine the minimum number of cuts needed to partition it into palindromic substrings.',
constraints: ['s.length = 2','s contains only lowercase English letters'],
examples: [
{input: 's = "aa"',output: '0',explanation: 'The complete string "aa" is already a palindrome, so no cut is needed.'},
{input: 's = "ab"',output: '1',explanation: 'Neither the complete string nor a single cut-free partition is palindromic, so the string must be split into "a" and "b".'}
],
testCases: [
{input: 'aa',expectedOutput: '0',hidden: false},
{input: 'ab',expectedOutput: '1',hidden: false},
{input: 'ba',expectedOutput: '1',hidden: false},
{input: 'cc',expectedOutput: '0',hidden: false},
{input: 'xy',expectedOutput: '1',hidden: false}
],
starterCode: {
python: 'def min_cuts(s):\n    pass\n\ns = input().strip()\nprint(min_cuts(s))',
java: 'import java.util.*;\n\npublic class Main {\n    public static int minCuts(String s) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(minCuts(sc.next()));\n    }\n}',
c: '#include <stdio.h>\n#include <string.h>\nint minCuts(char *s) {\n    return 0;\n}\nint main() {\n    char s[3];\n    scanf("%s", s);\n    printf("%d\\n", minCuts(s));\n    return 0;\n}',
cpp: '#include <iostream>\n#include <string>\nusing namespace std;\nint minCuts(string s) {\n    return 0;\n}\nint main() {\n    string s;\n    cin >> s;\n    cout << minCuts(s) << "\\n";\n    return 0;\n}'
}
},
{
id: 'pp-e4',
title: 'Minimum Cuts for a String of Length Three',
difficulty: 'Easy',
description: 'Given a string containing exactly three characters, find the minimum number of cuts needed to partition it into palindromic substrings.',
constraints: ['s.length = 3','s contains only lowercase English letters'],
examples: [
{input: 's = "aba"',output: '0',explanation: 'The complete string "aba" is a palindrome.'},
{input: 's = "abc"',output: '2',explanation: 'The only palindromic substrings are individual characters, requiring two cuts.'}
],
testCases: [
{input: 'aba',expectedOutput: '0',hidden: false},
{input: 'aaa',expectedOutput: '0',hidden: false},
{input: 'aab',expectedOutput: '1',hidden: false},
{input: 'abb',expectedOutput: '1',hidden: false},
{input: 'abc',expectedOutput: '2',hidden: false}
],
starterCode: {
python: 'def min_cuts(s):\n    pass\n\ns = input().strip()\nprint(min_cuts(s))',
java: 'import java.util.*;\n\npublic class Main {\n    public static int minCuts(String s) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(minCuts(sc.next()));\n    }\n}',
c: '#include <stdio.h>\n#include <string.h>\nint minCuts(char *s) {\n    return 0;\n}\nint main() {\n    char s[4];\n    scanf("%s", s);\n    printf("%d\\n", minCuts(s));\n    return 0;\n}',
cpp: '#include <iostream>\n#include <string>\nusing namespace std;\nint minCuts(string s) {\n    return 0;\n}\nint main() {\n    string s;\n    cin >> s;\n    cout << minCuts(s) << "\\n";\n    return 0;\n}'
}
},
{
id: 'pp-e5',
title: 'Minimum Cuts Using Palindrome Prefixes',
difficulty: 'Easy',
description: 'Given a string, determine the minimum number of cuts needed when each partition must be a palindrome. The string length is small enough for direct dynamic programming.',
constraints: ['1 <= s.length <= 20','s contains only lowercase English letters'],
examples: [
{input: 's = "aab"',output: '1',explanation: 'The partition "aa|b" contains two palindromic pieces and requires one cut.'},
{input: 's = "aaba"',output: '1',explanation: 'The partition "a|aba" uses two palindromic pieces and requires one cut.'}
],
testCases: [
{input: 'aab',expectedOutput: '1',hidden: false},
{input: 'aaba',expectedOutput: '1',hidden: false},
{input: 'abba',expectedOutput: '0',hidden: false},
{input: 'abcba',expectedOutput: '0',hidden: false},
{input: 'abcc',expectedOutput: '2',hidden: false}
],
starterCode: {
python: 'def min_cuts(s):\n    pass\n\ns = input().strip()\nprint(min_cuts(s))',
java: 'import java.util.*;\n\npublic class Main {\n    public static int minCuts(String s) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(minCuts(sc.next()));\n    }\n}',
c: '#include <stdio.h>\n#include <string.h>\nint minCuts(char *s) {\n    return 0;\n}\nint main() {\n    char s[25];\n    scanf("%s", s);\n    printf("%d\\n", minCuts(s));\n    return 0;\n}',
cpp: '#include <iostream>\n#include <string>\nusing namespace std;\nint minCuts(string s) {\n    return 0;\n}\nint main() {\n    string s;\n    cin >> s;\n    cout << minCuts(s) << "\\n";\n    return 0;\n}'
}
},
{
id: 'pp-m1',
title: 'Minimum Palindrome Partition Cuts',
difficulty: 'Medium',
description: 'Given a string, find the minimum number of cuts required to partition the entire string into palindromic substrings.',
constraints: ['1 <= s.length <= 1000','s contains only lowercase English letters'],
examples: [
{input: 's = "aab"',output: '1',explanation: 'The optimal partition is "aa|b", which requires one cut.'},
{input: 's = "banana"',output: '1',explanation: 'The string can be partitioned as "b|anana", where both pieces are palindromes.'}
],
testCases: [
{input: 'aab',expectedOutput: '1',hidden: false},
{input: 'banana',expectedOutput: '1',hidden: false},
{input: 'cdd',expectedOutput: '1',hidden: false},
{input: 'racecar',expectedOutput: '0',hidden: false},
{input: 'abc',expectedOutput: '2',hidden: false}
],
starterCode: {
python: 'def min_cuts(s):\n    pass\n\ns = input().strip()\nprint(min_cuts(s))',
java: 'import java.util.*;\n\npublic class Main {\n    public static int minCuts(String s) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(minCuts(sc.next()));\n    }\n}',
c: '#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\nint minCuts(char *s) {\n    return 0;\n}\nint main() {\n    char s[1005];\n    scanf("%s", s);\n    printf("%d\\n", minCuts(s));\n    return 0;\n}',
cpp: '#include <iostream>\n#include <string>\nusing namespace std;\nint minCuts(string s) {\n    return 0;\n}\nint main() {\n    string s;\n    cin >> s;\n    cout << minCuts(s) << "\\n";\n    return 0;\n}'
}
},
{
id: 'pp-m2',
title: 'Palindrome Partition Count with Minimum Cuts',
difficulty: 'Medium',
description: 'Given a string, determine both the minimum number of cuts needed to partition it into palindromic substrings and the number of palindromic pieces in one optimal partition.',
constraints: ['1 <= s.length <= 500','s contains only lowercase English letters'],
examples: [
{input: 's = "aab"',output: '1 2',explanation: 'The optimal partition is "aa|b", requiring one cut and containing two palindrome pieces.'},
{input: 's = "aaba"',output: '1 2',explanation: 'The partition "a|aba" uses two palindromic pieces and one cut.'}
],
testCases: [
{input: 'aab',expectedOutput: '1 2',hidden: false},
{input: 'aaba',expectedOutput: '1 2',hidden: false},
{input: 'abba',expectedOutput: '0 1',hidden: false},
{input: 'abc',expectedOutput: '2 3',hidden: false},
{input: 'abac',expectedOutput: '1 2',hidden: false}
],
starterCode: {
python: 'def min_cuts_and_parts(s):\n    pass\n\ns = input().strip()\ncuts, parts = min_cuts_and_parts(s)\nprint(cuts, parts)',
java: 'import java.util.*;\n\npublic class Main {\n    public static int[] minCutsAndParts(String s) {\n        return new int[]{0, 0};\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int[] ans = minCutsAndParts(sc.next());\n        System.out.println(ans[0] + " " + ans[1]);\n    }\n}',
c: '#include <stdio.h>\n#include <string.h>\nvoid solve(char *s, int *cuts, int *parts) {\n    *cuts = 0;\n    *parts = 0;\n}\nint main() {\n    char s[505];\n    int cuts, parts;\n    scanf("%s", s);\n    solve(s, &cuts, &parts);\n    printf("%d %d\\n", cuts, parts);\n    return 0;\n}',
cpp: '#include <iostream>\n#include <string>\n#include <utility>\nusing namespace std;\npair<int,int> minCutsAndParts(string s) {\n    return {0, 0};\n}\nint main() {\n    string s;\n    cin >> s;\n    auto ans = minCutsAndParts(s);\n    cout << ans.first << " " << ans.second << "\\n";\n    return 0;\n}'
}
},
{
id: 'pp-m3',
title: 'Reconstruct an Optimal Palindrome Partition',
difficulty: 'Medium',
description: 'Given a string, find one partition into palindromic substrings that uses the minimum possible number of cuts. Print the pieces separated by the | character.',
constraints: ['1 <= s.length <= 500','s contains only lowercase English letters'],
examples: [
{input: 's = "aab"',output: 'aa|b',explanation: 'The partition "aa|b" consists entirely of palindromes and uses the minimum one cut.'},
{input: 's = "aaba"',output: 'a|aba',explanation: 'Both "a" and "aba" are palindromes, giving an optimal one-cut partition.'}
],
testCases: [
{input: 'aab',expectedOutput: 'aa|b',hidden: false},
{input: 'aaba',expectedOutput: 'a|aba',hidden: false},
{input: 'racecar',expectedOutput: 'racecar',hidden: false},
{input: 'abc',expectedOutput: 'a|b|c',hidden: false},
{input: 'abbae',expectedOutput: 'abba|e',hidden: false}
],
starterCode: {
python: 'def reconstruct_partition(s):\n    pass\n\ns = input().strip()\nprint("|".join(reconstruct_partition(s)))',
java: 'import java.util.*;\n\npublic class Main {\n    public static List<String> reconstructPartition(String s) {\n        return new ArrayList<>();\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        List<String> ans = reconstructPartition(sc.next());\n        System.out.println(String.join("|", ans));\n    }\n}',
c: '#include <stdio.h>\n#include <string.h>\nvoid reconstructPartition(char *s) {\n    /* Print the optimal palindrome pieces separated by | */\n}\nint main() {\n    char s[505];\n    scanf("%s", s);\n    reconstructPartition(s);\n    printf("\\n");\n    return 0;\n}',
cpp: '#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\nvector<string> reconstructPartition(string s) {\n    return {};\n}\nint main() {\n    string s;\n    cin >> s;\n    vector<string> ans = reconstructPartition(s);\n    for (int i = 0; i < (int)ans.size(); i++) {\n        if (i) cout << "|";\n        cout << ans[i];\n    }\n    cout << "\\n";\n    return 0;\n}'
}
},
{
id: 'pp-m4',
title: 'Minimum Cuts with Repeated Characters',
difficulty: 'Medium',
description: 'Given a string containing repeated characters, compute the minimum cuts required to partition it into palindromic substrings. The solution must correctly handle overlapping palindrome candidates.',
constraints: ['1 <= s.length <= 1000','s contains only lowercase English letters'],
examples: [
{input: 's = "aaaa"',output: '0',explanation: 'The complete string is a palindrome, so no cuts are required.'},
{input: 's = "aabbaa"',output: '0',explanation: 'The entire string "aabbaa" is a palindrome.'}
],
testCases: [
{input: 'aaaa',expectedOutput: '0',hidden: false},
{input: 'aabbaa',expectedOutput: '0',hidden: false},
{input: 'aabb',expectedOutput: '1',hidden: false},
{input: 'aaab',expectedOutput: '1',hidden: false},
{input: 'ababaa',expectedOutput: '0',hidden: false}
],
starterCode: {
python: 'def min_cuts(s):\n    pass\n\ns = input().strip()\nprint(min_cuts(s))',
java: 'import java.util.*;\n\npublic class Main {\n    public static int minCuts(String s) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(minCuts(sc.next()));\n    }\n}',
c: '#include <stdio.h>\n#include <string.h>\nint minCuts(char *s) {\n    return 0;\n}\nint main() {\n    char s[1005];\n    scanf("%s", s);\n    printf("%d\\n", minCuts(s));\n    return 0;\n}',
cpp: '#include <iostream>\n#include <string>\nusing namespace std;\nint minCuts(string s) {\n    return 0;\n}\nint main() {\n    string s;\n    cin >> s;\n    cout << minCuts(s) << "\\n";\n    return 0;\n}'
}
},
{
id: 'pp-m5',
title: 'Palindrome Partitioning with Precomputed DP',
difficulty: 'Medium',
description: 'Given a string, compute the minimum number of cuts required to partition it into palindromic substrings by first determining which substrings are palindromes and then using dynamic programming for the minimum cut calculation.',
constraints: ['1 <= s.length <= 1000','s contains only lowercase English letters'],
examples: [
{input: 's = "ababbbabbababa"',output: '3',explanation: 'The string can be divided into four palindromic pieces using three cuts.'},
{input: 's = "cabababcbc"',output: '3',explanation: 'A palindrome table combined with minimum-cut DP gives three cuts.'}
],
testCases: [
{input: 'ababbbabbababa',expectedOutput: '3',hidden: false},
{input: 'cabababcbc',expectedOutput: '3',hidden: false},
{input: 'aab',expectedOutput: '1',hidden: false},
{input: 'abba',expectedOutput: '0',hidden: false},
{input: 'abcd',expectedOutput: '3',hidden: false}
],
starterCode: {
python: 'def min_cuts(s):\n    pass\n\ns = input().strip()\nprint(min_cuts(s))',
java: 'import java.util.*;\n\npublic class Main {\n    public static int minCuts(String s) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(minCuts(sc.next()));\n    }\n}',
c: '#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\nint minCuts(char *s) {\n    return 0;\n}\nint main() {\n    char s[1005];\n    scanf("%s", s);\n    printf("%d\\n", minCuts(s));\n    return 0;\n}',
cpp: '#include <iostream>\n#include <string>\nusing namespace std;\nint minCuts(string s) {\n    return 0;\n}\nint main() {\n    string s;\n    cin >> s;\n    cout << minCuts(s) << "\\n";\n    return 0;\n}'
}
},
{
id: 'pp-h1',
title: 'Optimized Minimum Palindrome Cuts',
difficulty: 'Hard',
description: 'Given a string of up to 5000 characters, find the minimum number of cuts needed to partition it into palindromic substrings using an efficient dynamic programming approach.',
constraints: ['1 <= s.length <= 5000','s contains only lowercase English letters'],
examples: [
{input: 's = "aab"',output: '1',explanation: 'The optimal partition is "aa|b".'},
{input: 's = "ababbbabbababa"',output: '3',explanation: 'An optimal palindrome partition can be obtained using three cuts.'}
],
testCases: [
{input: 'aab',expectedOutput: '1',hidden: false},
{input: 'ababbbabbababa',expectedOutput: '3',hidden: false},
{input: 'racecar',expectedOutput: '0',hidden: false},
{input: 'abcdefgh',expectedOutput: '7',hidden: false},
{input: 'aabbaaab',expectedOutput: '2',hidden: false}
],
starterCode: {
python: 'def min_cuts(s):\n    pass\n\ns = input().strip()\nprint(min_cuts(s))',
java: 'import java.util.*;\n\npublic class Main {\n    public static int minCuts(String s) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(minCuts(sc.next()));\n    }\n}',
c: '#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\nint minCuts(char *s) {\n    return 0;\n}\nint main() {\n    char s[5005];\n    scanf("%s", s);\n    printf("%d\\n", minCuts(s));\n    return 0;\n}',
cpp: '#include <iostream>\n#include <string>\nusing namespace std;\nint minCuts(string s) {\n    return 0;\n}\nint main() {\n    string s;\n    cin >> s;\n    cout << minCuts(s) << "\\n";\n    return 0;\n}'
}
},
{
id: 'pp-h2',
title: 'Minimum Cuts with Palindrome Reconstruction',
difficulty: 'Hard',
description: 'Given a string, find an optimal palindrome partition using the minimum possible number of cuts and output both the minimum cut count and one corresponding partition.',
constraints: ['1 <= s.length <= 2000','s contains only lowercase English letters'],
examples: [
{input: 's = "aab"',output: '1\\naa|b',explanation: 'One optimal partition is "aa|b", which requires one cut.'},
{input: 's = "aaba"',output: '1\\na|aba',explanation: 'The partition "a|aba" is palindromic and uses one cut.'}
],
testCases: [
{input: 'aab',expectedOutput: '1\\naa|b',hidden: false},
{input: 'aaba',expectedOutput: '1\\na|aba',hidden: false},
{input: 'racecar',expectedOutput: '0\\nracecar',hidden: false},
{input: 'abc',expectedOutput: '2\\na|b|c',hidden: false},
{input: 'abbae',expectedOutput: '1\\nabba|e',hidden: false}
],
starterCode: {
python: 'def solve(s):\n    pass\n\ns = input().strip()\ncuts, parts = solve(s)\nprint(cuts)\nprint("|".join(parts))',
java: 'import java.util.*;\n\npublic class Main {\n    public static class Result {\n        int cuts;\n        List<String> parts;\n        Result(int cuts, List<String> parts) { this.cuts = cuts; this.parts = parts; }\n    }\n    public static Result solve(String s) {\n        return new Result(0, new ArrayList<>());\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        Result ans = solve(sc.next());\n        System.out.println(ans.cuts);\n        System.out.println(String.join("|", ans.parts));\n    }\n}',
c: '#include <stdio.h>\n#include <string.h>\nvoid solve(char *s, int *cuts) {\n    *cuts = 0;\n    /* Print the optimal partition in this function. */\n}\nint main() {\n    char s[2005];\n    int cuts;\n    scanf("%s", s);\n    solve(s, &cuts);\n    printf("%d\\n", cuts);\n    return 0;\n}',
cpp: '#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\npair<int, vector<string>> solve(string s) {\n    return {0, {}};\n}\nint main() {\n    string s;\n    cin >> s;\n    auto ans = solve(s);\n    cout << ans.first << "\\n";\n    for (int i = 0; i < (int)ans.second.size(); i++) {\n        if (i) cout << "|";\n        cout << ans.second[i];\n    }\n    cout << "\\n";\n    return 0;\n}'
}
},
{
id: 'pp-h3',
title: 'Minimum Cuts with Palindrome Queries',
difficulty: 'Hard',
description: 'Given a string and multiple substring queries, determine the minimum number of cuts required to partition each queried substring into palindromic pieces.',
constraints: ['1 <= s.length <= 1000','1 <= q <= 200','s contains only lowercase English letters','Each query contains valid inclusive indices l and r'],
examples: [
{input: 's = "aabbaa", queries = [(0,5),(1,4)]',output: '0 0',explanation: 'Both "aabbaa" and "abba" are complete palindromes, so neither query requires a cut.'},
{input: 's = "aab", queries = [(0,2),(1,2)]',output: '1 1',explanation: '"aab" needs one cut and "ab" also needs one cut.'}
],
testCases: [
{input: 'aabbaa 2 0 5 1 4',expectedOutput: '0 0',hidden: false},
{input: 'aab 2 0 2 1 2',expectedOutput: '1 1',hidden: false},
{input: 'banana 2 0 5 1 4',expectedOutput: '1 0',hidden: false},
{input: 'abcde 2 0 4 1 3',expectedOutput: '4 2',hidden: false},
{input: 'racecar 1 0 6',expectedOutput: '0',hidden: false}
],
starterCode: {
python: 'def query_min_cuts(s, queries):\n    pass\n\nparts = input().split()\ns = parts[0]\nq = int(parts[1])\nqueries = []\nidx = 2\nfor _ in range(q):\n    queries.append((int(parts[idx]), int(parts[idx + 1])))\n    idx += 2\nprint(*query_min_cuts(s, queries))',
java: 'import java.util.*;\n\npublic class Main {\n    public static int[] queryMinCuts(String s, int[][] queries) {\n        return new int[queries.length];\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        int q = sc.nextInt();\n        int[][] queries = new int[q][2];\n        for (int i = 0; i < q; i++) {\n            queries[i][0] = sc.nextInt();\n            queries[i][1] = sc.nextInt();\n        }\n        int[] ans = queryMinCuts(s, queries);\n        for (int i = 0; i < ans.length; i++) {\n            if (i > 0) System.out.print(" ");\n            System.out.print(ans[i]);\n        }\n        System.out.println();\n    }\n}',
c: '#include <stdio.h>\n#include <string.h>\nvoid queryMinCuts(char *s, int q, int queries[][2], int *ans) {\n    for (int i = 0; i < q; i++) ans[i] = 0;\n}\nint main() {\n    char s[1005];\n    int q;\n    scanf("%s %d", s, &q);\n    int queries[200][2], ans[200];\n    for (int i = 0; i < q; i++) scanf("%d %d", &queries[i][0], &queries[i][1]);\n    queryMinCuts(s, q, queries, ans);\n    for (int i = 0; i < q; i++) {\n        if (i) printf(" ");\n        printf("%d", ans[i]);\n    }\n    printf("\\n");\n    return 0;\n}',
cpp: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\nvector<int> queryMinCuts(string s, vector<pair<int,int>>& queries) {\n    return vector<int>(queries.size(), 0);\n}\nint main() {\n    string s;\n    int q;\n    cin >> s >> q;\n    vector<pair<int,int>> queries(q);\n    for (auto &x : queries) cin >> x.first >> x.second;\n    vector<int> ans = queryMinCuts(s, queries);\n    for (int i = 0; i < (int)ans.size(); i++) {\n        if (i) cout << " ";\n        cout << ans[i];\n    }\n    cout << "\\n";\n    return 0;\n}'
}
},
{
id: 'pp-h4',
title: 'Minimum Cuts with Weighted Palindrome Pieces',
difficulty: 'Hard',
description: 'Given a string, partition it into palindromic substrings where each palindrome has a cost equal to its length. Minimize the total partition cost and output the minimum cost.',
constraints: ['1 <= s.length <= 2000','s contains only lowercase English letters','The cost of a palindrome equals its length'],
examples: [
{input: 's = "aab"',output: '3',explanation: 'The partition "aa|b" has costs 2 and 1, giving a total cost of 3.'},
{input: 's = "abba"',output: '4',explanation: 'The complete palindrome "abba" has cost 4, which is optimal.'}
],
testCases: [
{input: 'aab',expectedOutput: '3',hidden: false},
{input: 'abba',expectedOutput: '4',hidden: false},
{input: 'abc',expectedOutput: '3',hidden: false},
{input: 'aaba',expectedOutput: '4',hidden: false},
{input: 'racecar',expectedOutput: '7',hidden: false}
],
starterCode: {
python: 'def minimum_cost(s):\n    pass\n\ns = input().strip()\nprint(minimum_cost(s))',
java: 'import java.util.*;\n\npublic class Main {\n    public static int minimumCost(String s) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(minimumCost(sc.next()));\n    }\n}',
c: '#include <stdio.h>\n#include <string.h>\nint minimumCost(char *s) {\n    return 0;\n}\nint main() {\n    char s[2005];\n    scanf("%s", s);\n    printf("%d\\n", minimumCost(s));\n    return 0;\n}',
cpp: '#include <iostream>\n#include <string>\nusing namespace std;\nint minimumCost(string s) {\n    return 0;\n}\nint main() {\n    string s;\n    cin >> s;\n    cout << minimumCost(s) << "\\n";\n    return 0;\n}'
}
},
{
id: 'pp-h5',
title: 'Online Palindrome Partition Updates',
difficulty: 'Hard',
description: 'Given a string, process character replacement updates and after each update determine the minimum number of cuts required to partition the updated string into palindromic substrings.',
constraints: ['1 <= s.length <= 300','1 <= q <= 100','s contains only lowercase English letters','Each update contains a valid index and lowercase replacement character'],
examples: [
{input: 's = "aab", updates = [(2,c),(1,a)]',output: '1 0',explanation: 'After changing the string to "aac", one cut is required; after changing it to "aac" with the second position already a, the result remains one cut.',},
{input: 's = "abc", updates = [(2,a)]',output: '1',explanation: 'The updated string becomes "aba", which is a palindrome and therefore requires zero cuts.'}
],
testCases: [
{input: 'aab 2 2 c 1 a',expectedOutput: '1 1',hidden: false},
{input: 'abc 1 2 a',expectedOutput: '0',hidden: false},
{input: 'abba 1 1 c',expectedOutput: '1',hidden: false},
{input: 'aaaa 2 0 b 3 c',expectedOutput: '1 2',hidden: false},
{input: 'racecar 1 3 x',expectedOutput: '1',hidden: false}
],
starterCode: {
python: 'def process_updates(s, updates):\n    pass\n\nparts = input().split()\ns = parts[0]\nq = int(parts[1])\nupdates = []\nidx = 2\nfor _ in range(q):\n    updates.append((int(parts[idx]), parts[idx + 1]))\n    idx += 2\nprint(*process_updates(s, updates))',
java: 'import java.util.*;\n\npublic class Main {\n    public static int[] processUpdates(String s, int[][] updates, char[] chars) {\n        return new int[updates.length];\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        int q = sc.nextInt();\n        int[][] updates = new int[q][1];\n        char[] chars = new char[q];\n        for (int i = 0; i < q; i++) {\n            updates[i][0] = sc.nextInt();\n            chars[i] = sc.next().charAt(0);\n        }\n        int[] ans = processUpdates(s, updates, chars);\n        for (int i = 0; i < ans.length; i++) {\n            if (i > 0) System.out.print(" ");\n            System.out.print(ans[i]);\n        }\n        System.out.println();\n    }\n}',
c: '#include <stdio.h>\n#include <string.h>\nvoid processUpdates(char *s, int q, int *indices, char *chars, int *ans) {\n    for (int i = 0; i < q; i++) ans[i] = 0;\n}\nint main() {\n    char s[305];\n    int q;\n    scanf("%s %d", s, &q);\n    int indices[100], ans[100];\n    char chars[100];\n    for (int i = 0; i < q; i++) scanf("%d %c", &indices[i], &chars[i]);\n    processUpdates(s, q, indices, chars, ans);\n    for (int i = 0; i < q; i++) {\n        if (i) printf(" ");\n        printf("%d", ans[i]);\n    }\n    printf("\\n");\n    return 0;\n}',
cpp: '#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\nvector<int> processUpdates(string s, vector<pair<int,char>>& updates) {\n    return vector<int>(updates.size(), 0);\n}\nint main() {\n    string s;\n    int q;\n    cin >> s >> q;\n    vector<pair<int,char>> updates(q);\n    for (auto &x : updates) cin >> x.first >> x.second;\n    vector<int> ans = processUpdates(s, updates);\n    for (int i = 0; i < (int)ans.size(); i++) {\n        if (i) cout << " ";\n        cout << ans[i];\n    }\n    cout << "\\n";\n    return 0;\n}'
}
}
];