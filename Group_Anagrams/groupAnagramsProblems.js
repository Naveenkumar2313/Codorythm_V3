export const GAProblems = [
  {
  id: 'ga-e1',
  title: 'Group Anagrams',
  difficulty: 'Easy',
  description: 'Given an array of strings `strs`, group the strings that are anagrams of each other. Return the grouped anagrams in any order.',
  constraints: [
    '1 <= strs.length <= 10^4',
    '1 <= strs[i].length <= 100',
    'strs[i] consists of lowercase English letters.'
  ],
  examples: [
    {
      input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
      output: '[["eat","tea","ate"],["tan","nat"],["bat"]]',
      explanation: '"eat", "tea", and "ate" are anagrams. "tan" and "nat" form another group. "bat" has no anagram.'
    },
    {
      input: 'strs = [""]',
      output: '[[""]]',
      explanation: 'The empty string forms a single anagram group.'
    }
  ],
  testCases: [
    {
      input: '6\neat tea tan ate nat bat',
      expectedOutput: 'eat tea ate\ntan nat\nbat',
      hidden: false
    },
    {
      input: '1\n',
      expectedOutput: '',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def group_anagrams(strs):\n    pass\n\nn = int(input())\nstrs = input().split() if n > 0 else []\nresult = group_anagrams(strs)\nfor group in result:\n    print(*group)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<List<String>> groupAnagrams(String[] strs) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            String[] strs = new String[n];\n            for (int i = 0; i < n; i++) {\n                strs[i] = sc.next();\n            }\n            List<List<String>> result = groupAnagrams(strs);\n            for (List<String> group : result) {\n                for (int i = 0; i < group.size(); i++) {\n                    if (i > 0) System.out.print(" ");\n                    System.out.print(group.get(i));\n                }\n                System.out.println();\n            }\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid groupAnagrams(char strs[][101], int n) {\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    char strs[n][101];\n    for (int i = 0; i < n; i++) {\n        scanf("%100s", strs[i]);\n    }\n    groupAnagrams(strs, n);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <string>\n\nusing namespace std;\n\nvector<vector<string>> groupAnagrams(vector<string>& strs) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<string> strs(n);\n        for (int i = 0; i < n; i++) {\n            cin >> strs[i];\n        }\n        vector<vector<string>> result = groupAnagrams(strs);\n        for (auto& group : result) {\n            for (int i = 0; i < group.size(); i++) {\n                if (i) cout << " ";\n                cout << group[i];\n            }\n            cout << "\\n";\n        }\n    }\n    return 0;\n}'
  }
},
{
  id: 'ga-e2',
  title: 'Count Anagram Groups',
  difficulty: 'Easy',
  description: 'Given an array of strings `strs`, group all anagrams together and return the total number of distinct anagram groups.',
  constraints: [
    '1 <= strs.length <= 10^4',
    '1 <= strs[i].length <= 100',
    'strs[i] consists of lowercase English letters.'
  ],
  examples: [
    {
      input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
      output: '3',
      explanation: 'The groups are ["eat","tea","ate"], ["tan","nat"], and ["bat"].'
    },
    {
      input: 'strs = ["abc","bca","cab","xyz"]',
      output: '2',
      explanation: 'The groups are ["abc","bca","cab"] and ["xyz"].'
    }
  ],
  testCases: [
    {
      input: '6\neat tea tan ate nat bat',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '4\nabc bca cab xyz',
      expectedOutput: '2',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def count_anagram_groups(strs):\n    pass\n\nn = int(input())\nstrs = input().split() if n > 0 else []\nprint(count_anagram_groups(strs))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int countAnagramGroups(String[] strs) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            String[] strs = new String[n];\n            for (int i = 0; i < n; i++) {\n                strs[i] = sc.next();\n            }\n            System.out.println(countAnagramGroups(strs));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint countAnagramGroups(char strs[][101], int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    char strs[n][101];\n    for (int i = 0; i < n; i++) {\n        scanf("%100s", strs[i]);\n    }\n    printf("%d\\n", countAnagramGroups(strs, n));\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <string>\n\nusing namespace std;\n\nint countAnagramGroups(vector<string>& strs) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<string> strs(n);\n        for (int i = 0; i < n; i++) {\n            cin >> strs[i];\n        }\n        cout << countAnagramGroups(strs) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'ga-e3',
  title: 'Largest Anagram Group',
  difficulty: 'Easy',
  description: 'Given an array of strings `strs`, group all anagrams together and return the size of the largest anagram group.',
  constraints: [
    '1 <= strs.length <= 10^4',
    '1 <= strs[i].length <= 100',
    'strs[i] consists of lowercase English letters.'
  ],
  examples: [
    {
      input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
      output: '3',
      explanation: 'The largest anagram group is ["eat","tea","ate"], which contains 3 strings.'
    },
    {
      input: 'strs = ["abc","bca","cab","bac","xyz"]',
      output: '4',
      explanation: 'The largest group is ["abc","bca","cab","bac"], which contains 4 strings.'
    }
  ],
  testCases: [
    {
      input: '6\neat tea tan ate nat bat',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '5\nabc bca cab bac xyz',
      expectedOutput: '4',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def largest_anagram_group(strs):\n    pass\n\nn = int(input())\nstrs = input().split() if n > 0 else []\nprint(largest_anagram_group(strs))',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static int largestAnagramGroup(String[] strs) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            String[] strs = new String[n];\n            for (int i = 0; i < n; i++) {\n                strs[i] = sc.next();\n            }\n            System.out.println(largestAnagramGroup(strs));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint largestAnagramGroup(char strs[][101], int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    char strs[n][101];\n    for (int i = 0; i < n; i++) {\n        scanf("%100s", strs[i]);\n    }\n    printf("%d\\n", largestAnagramGroup(strs, n));\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <string>\n\nusing namespace std;\n\nint largestAnagramGroup(vector<string>& strs) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<string> strs(n);\n        for (int i = 0; i < n; i++) {\n            cin >> strs[i];\n        }\n        cout << largestAnagramGroup(strs) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'ga-e4',
  title: 'Check Pair Anagrams',
  difficulty: 'Easy',
  description: 'Given two strings `s` and `t`, determine whether they are anagrams of each other. Return `"true"` if they are anagrams, otherwise return `"false"`.',
  constraints: [
    '1 <= s.length, t.length <= 10^5',
    's and t consist of lowercase English letters.'
  ],
  examples: [
    {
      input: 's = "listen", t = "silent"',
      output: 'true',
      explanation: '"listen" and "silent" contain the same characters with the same frequencies.'
    },
    {
      input: 's = "hello", t = "world"',
      output: 'false',
      explanation: 'The two strings do not contain the same set of characters.'
    }
  ],
  testCases: [
    {
      input: 'listen\nsilent',
      expectedOutput: 'true',
      hidden: false
    },
    {
      input: 'hello\nworld',
      expectedOutput: 'false',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def are_anagrams(s, t):\n    pass\n\ns = input().strip()\nt = input().strip()\nprint(str(are_anagrams(s, t)).lower())',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static boolean areAnagrams(String s, String t) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        String t = sc.nextLine();\n        System.out.println(areAnagrams(s, t));\n    }\n}',
    c: '#include <stdio.h>\n#include <stdbool.h>\n\nbool areAnagrams(char s[], char t[]) {\n    return false;\n}\n\nint main() {\n    char s[100001], t[100001];\n    scanf("%100000s", s);\n    scanf("%100000s", t);\n    printf("%s\\n", areAnagrams(s, t) ? "true" : "false");\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <string>\n\nusing namespace std;\n\nbool areAnagrams(string s, string t) {\n    return false;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    string s, t;\n    cin >> s >> t;\n    cout << (areAnagrams(s, t) ? "true" : "false") << "\\n";\n    return 0;\n}'
  }
},{
  id: 'ga-e5',
  title: 'Group Anagrams (Preserve Input Order)',
  difficulty: 'Easy',
  description: 'Given an array of strings `strs`, group all anagrams together while preserving the original order of strings within each group. The order of the groups themselves should follow the first occurrence of each anagram group.',
  constraints: [
    '1 <= strs.length <= 10^4',
    '1 <= strs[i].length <= 100',
    'strs[i] consists of lowercase English letters.'
  ],
  examples: [
    {
      input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
      output: '[["eat","tea","ate"],["tan","nat"],["bat"]]',
      explanation: 'Strings inside each group appear in the same order as in the original array.'
    },
    {
      input: 'strs = ["abc","bca","xyz","cab","zyx"]',
      output: '[["abc","bca","cab"],["xyz","zyx"]]',
      explanation: 'The first anagram group starts with "abc", followed by the group starting with "xyz".'
    }
  ],
  testCases: [
    {
      input: '6\neat tea tan ate nat bat',
      expectedOutput: 'eat tea ate\ntan nat\nbat',
      hidden: false
    },
    {
      input: '5\nabc bca xyz cab zyx',
      expectedOutput: 'abc bca cab\nxyz zyx',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def group_anagrams_preserve_order(strs):\n    pass\n\nn = int(input())\nstrs = input().split() if n > 0 else []\nresult = group_anagrams_preserve_order(strs)\nfor group in result:\n    print(*group)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<List<String>> groupAnagramsPreserveOrder(String[] strs) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            String[] strs = new String[n];\n            for (int i = 0; i < n; i++) {\n                strs[i] = sc.next();\n            }\n            List<List<String>> result = groupAnagramsPreserveOrder(strs);\n            for (List<String> group : result) {\n                for (int i = 0; i < group.size(); i++) {\n                    if (i > 0) System.out.print(" ");\n                    System.out.print(group.get(i));\n                }\n                System.out.println();\n            }\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid groupAnagramsPreserveOrder(char strs[][101], int n) {\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    char strs[n][101];\n    for (int i = 0; i < n; i++) {\n        scanf("%100s", strs[i]);\n    }\n    groupAnagramsPreserveOrder(strs, n);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <string>\n\nusing namespace std;\n\nvector<vector<string>> groupAnagramsPreserveOrder(vector<string>& strs) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<string> strs(n);\n        for (int i = 0; i < n; i++) {\n            cin >> strs[i];\n        }\n        vector<vector<string>> result = groupAnagramsPreserveOrder(strs);\n        for (auto& group : result) {\n            for (int i = 0; i < group.size(); i++) {\n                if (i) cout << " ";\n                cout << group[i];\n            }\n            cout << "\\n";\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'ga-m1',
  title: 'Group Shifted Strings',
  difficulty: 'Medium',
  description: 'Given an array of lowercase strings `strs`, group all shifted strings together. Two strings belong to the same group if one can be obtained from the other by shifting every character forward by the same number of positions in the alphabet (wrapping from `z` to `a`). Return the grouped shifted strings in any order.',
  constraints: [
    '1 <= strs.length <= 10^4',
    '1 <= strs[i].length <= 100',
    'strs[i] consists of lowercase English letters.'
  ],
  examples: [
    {
      input: 'strs = ["abc","bcd","acef","xyz","az","ba","a","z"]',
      output: '[["abc","bcd","xyz"],["az","ba"],["acef"],["a","z"]]',
      explanation: '"abc", "bcd", and "xyz" belong to the same shifted sequence. "az" and "ba" form another group, while single-character strings always belong together.'
    },
    {
      input: 'strs = ["aa","bb","cc","ab"]',
      output: '[["aa","bb","cc"],["ab"]]',
      explanation: '"aa", "bb", and "cc" share the same shifting pattern, whereas "ab" has a different pattern.'
    }
  ],
  testCases: [
    {
      input: '8\nabc bcd acef xyz az ba a z',
      expectedOutput: 'abc bcd xyz\nacef\naz ba\na z',
      hidden: false
    },
    {
      input: '4\naa bb cc ab',
      expectedOutput: 'aa bb cc\nab',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def group_shifted_strings(strs):\n    pass\n\nn = int(input())\nstrs = input().split() if n > 0 else []\nresult = group_shifted_strings(strs)\nfor group in result:\n    print(*group)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<List<String>> groupShiftedStrings(String[] strs) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            String[] strs = new String[n];\n            for (int i = 0; i < n; i++) {\n                strs[i] = sc.next();\n            }\n            List<List<String>> result = groupShiftedStrings(strs);\n            for (List<String> group : result) {\n                for (int i = 0; i < group.size(); i++) {\n                    if (i > 0) System.out.print(" ");\n                    System.out.print(group.get(i));\n                }\n                System.out.println();\n            }\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid groupShiftedStrings(char strs[][101], int n) {\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    char strs[n][101];\n    for (int i = 0; i < n; i++) {\n        scanf("%100s", strs[i]);\n    }\n    groupShiftedStrings(strs, n);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <string>\n\nusing namespace std;\n\nvector<vector<string>> groupShiftedStrings(vector<string>& strs) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<string> strs(n);\n        for (int i = 0; i < n; i++) {\n            cin >> strs[i];\n        }\n        vector<vector<string>> result = groupShiftedStrings(strs);\n        for (auto& group : result) {\n            for (int i = 0; i < group.size(); i++) {\n                if (i) cout << " ";\n                cout << group[i];\n            }\n            cout << "\\n";\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'ga-m2',
  title: 'Group Anagrams (Frequency Hash)',
  difficulty: 'Medium',
  description: 'Given an array of strings `strs`, group all anagrams together without sorting any string. Use the frequency of each character as the hash key. Return the grouped anagrams in any order.',
  constraints: [
    '1 <= strs.length <= 10^4',
    '1 <= strs[i].length <= 100',
    'strs[i] consists of lowercase English letters.',
    'Sorting individual strings is not allowed.'
  ],
  examples: [
    {
      input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
      output: '[["eat","tea","ate"],["tan","nat"],["bat"]]',
      explanation: 'Words with identical character frequencies belong to the same group.'
    },
    {
      input: 'strs = ["abc","bca","cab","xyz"]',
      output: '[["abc","bca","cab"],["xyz"]]',
      explanation: 'The first three strings have identical frequency counts.'
    }
  ],
  testCases: [
    {
      input: '6\neat tea tan ate nat bat',
      expectedOutput: 'eat tea ate\ntan nat\nbat',
      hidden: false
    },
    {
      input: '4\nabc bca cab xyz',
      expectedOutput: 'abc bca cab\nxyz',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def group_anagrams_frequency(strs):\n    pass\n\nn = int(input())\nstrs = input().split() if n > 0 else []\nresult = group_anagrams_frequency(strs)\nfor group in result:\n    print(*group)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<List<String>> groupAnagramsFrequency(String[] strs) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            String[] strs = new String[n];\n            for (int i = 0; i < n; i++) {\n                strs[i] = sc.next();\n            }\n            List<List<String>> result = groupAnagramsFrequency(strs);\n            for (List<String> group : result) {\n                for (int i = 0; i < group.size(); i++) {\n                    if (i > 0) System.out.print(" ");\n                    System.out.print(group.get(i));\n                }\n                System.out.println();\n            }\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid groupAnagramsFrequency(char strs[][101], int n) {\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    char strs[n][101];\n    for (int i = 0; i < n; i++) {\n        scanf("%100s", strs[i]);\n    }\n    groupAnagramsFrequency(strs, n);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <string>\n\nusing namespace std;\n\nvector<vector<string>> groupAnagramsFrequency(vector<string>& strs) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<string> strs(n);\n        for (int i = 0; i < n; i++) {\n            cin >> strs[i];\n        }\n        vector<vector<string>> result = groupAnagramsFrequency(strs);\n        for (auto& group : result) {\n            for (int i = 0; i < group.size(); i++) {\n                if (i) cout << " ";\n                cout << group[i];\n            }\n            cout << "\\n";\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'ga-m3',
  title: 'Find Duplicate Anagram Groups',
  difficulty: 'Medium',
  description: 'Given an array of strings `strs`, group all anagrams together and return only those groups that contain more than one string. If no such group exists, return an empty list. The order of the groups does not matter.',
  constraints: [
    '1 <= strs.length <= 10^4',
    '1 <= strs[i].length <= 100',
    'strs[i] consists of lowercase English letters.'
  ],
  examples: [
    {
      input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
      output: '[["eat","tea","ate"],["tan","nat"]]',
      explanation: '"bat" does not have any anagram, so it is not included in the result.'
    },
    {
      input: 'strs = ["abc","def","ghi"]',
      output: '[]',
      explanation: 'No two strings are anagrams of each other.'
    }
  ],
  testCases: [
    {
      input: '6\neat tea tan ate nat bat',
      expectedOutput: 'eat tea ate\ntan nat',
      hidden: false
    },
    {
      input: '3\nabc def ghi',
      expectedOutput: '',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def duplicate_anagram_groups(strs):\n    pass\n\nn = int(input())\nstrs = input().split() if n > 0 else []\nresult = duplicate_anagram_groups(strs)\nfor group in result:\n    print(*group)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<List<String>> duplicateAnagramGroups(String[] strs) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            String[] strs = new String[n];\n            for (int i = 0; i < n; i++) {\n                strs[i] = sc.next();\n            }\n            List<List<String>> result = duplicateAnagramGroups(strs);\n            for (List<String> group : result) {\n                for (int i = 0; i < group.size(); i++) {\n                    if (i > 0) System.out.print(" ");\n                    System.out.print(group.get(i));\n                }\n                System.out.println();\n            }\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid duplicateAnagramGroups(char strs[][101], int n) {\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    char strs[n][101];\n    for (int i = 0; i < n; i++) {\n        scanf("%100s", strs[i]);\n    }\n    duplicateAnagramGroups(strs, n);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <string>\n\nusing namespace std;\n\nvector<vector<string>> duplicateAnagramGroups(vector<string>& strs) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<string> strs(n);\n        for (int i = 0; i < n; i++) {\n            cin >> strs[i];\n        }\n        vector<vector<string>> result = duplicateAnagramGroups(strs);\n        for (auto& group : result) {\n            for (int i = 0; i < group.size(); i++) {\n                if (i) cout << " ";\n                cout << group[i];\n            }\n            cout << "\\n";\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'ga-m4',
  title: 'Anagram Lookup Queries',
  difficulty: 'Medium',
  description: 'You are given an array of strings `strs` and `q` query strings. For each query, return all words from `strs` that are anagrams of the query. If no anagrams exist, print `Not Found`.',
  constraints: [
    '1 <= strs.length <= 10^4',
    '1 <= q <= 10^4',
    '1 <= strs[i].length, query.length <= 100',
    'All strings consist of lowercase English letters.'
  ],
  examples: [
    {
      input: 'strs = ["eat","tea","tan","ate","nat","bat"], queries = ["tea","bat","cat"]',
      output: 'eat tea ate\nbat\nNot Found',
      explanation: 'The anagrams of "tea" are "eat", "tea", and "ate". "bat" matches itself. "cat" has no anagrams.'
    },
    {
      input: 'strs = ["abc","bca","cab","xyz"], queries = ["cab","xyz"]',
      output: 'abc bca cab\nxyz',
      explanation: '"cab" belongs to the first anagram group, while "xyz" has only one matching word.'
    }
  ],
  testCases: [
    {
      input: '6\neat tea tan ate nat bat\n3\ntea\nbat\ncat',
      expectedOutput: 'eat tea ate\nbat\nNot Found',
      hidden: false
    },
    {
      input: '4\nabc bca cab xyz\n2\ncab\nxyz',
      expectedOutput: 'abc bca cab\nxyz',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def anagram_lookup(strs, queries):\n    pass\n\nn = int(input())\nstrs = input().split() if n > 0 else []\nq = int(input())\nqueries = [input().strip() for _ in range(q)]\nresult = anagram_lookup(strs, queries)\nfor group in result:\n    if group:\n        print(*group)\n    else:\n        print("Not Found")',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<List<String>> anagramLookup(String[] strs, String[] queries) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            String[] strs = new String[n];\n            for (int i = 0; i < n; i++) {\n                strs[i] = sc.next();\n            }\n            int q = sc.nextInt();\n            String[] queries = new String[q];\n            for (int i = 0; i < q; i++) {\n                queries[i] = sc.next();\n            }\n            List<List<String>> result = anagramLookup(strs, queries);\n            for (List<String> group : result) {\n                if (group.isEmpty()) {\n                    System.out.println("Not Found");\n                } else {\n                    for (int i = 0; i < group.size(); i++) {\n                        if (i > 0) System.out.print(" ");\n                        System.out.print(group.get(i));\n                    }\n                    System.out.println();\n                }\n            }\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid anagramLookup(char strs[][101], int n, char queries[][101], int q) {\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    char strs[n][101];\n    for (int i = 0; i < n; i++) {\n        scanf("%100s", strs[i]);\n    }\n    int q;\n    scanf("%d", &q);\n    char queries[q][101];\n    for (int i = 0; i < q; i++) {\n        scanf("%100s", queries[i]);\n    }\n    anagramLookup(strs, n, queries, q);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <string>\n\nusing namespace std;\n\nvector<vector<string>> anagramLookup(vector<string>& strs, vector<string>& queries) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<string> strs(n);\n        for (int i = 0; i < n; i++) {\n            cin >> strs[i];\n        }\n        int q;\n        cin >> q;\n        vector<string> queries(q);\n        for (int i = 0; i < q; i++) {\n            cin >> queries[i];\n        }\n        vector<vector<string>> result = anagramLookup(strs, queries);\n        for (auto& group : result) {\n            if (group.empty()) {\n                cout << "Not Found\\n";\n            } else {\n                for (int i = 0; i < group.size(); i++) {\n                    if (i) cout << " ";\n                    cout << group[i];\n                }\n                cout << "\\n";\n            }\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'ga-m5',
  title: 'Largest Anagram Family',
  difficulty: 'Medium',
  description: 'Given an array of strings `strs`, group all anagrams together and return the largest anagram group. If multiple groups have the same maximum size, return the group whose lexicographically smallest string is smaller. The strings within the returned group should preserve their original input order.',
  constraints: [
    '1 <= strs.length <= 10^4',
    '1 <= strs[i].length <= 100',
    'strs[i] consists of lowercase English letters.'
  ],
  examples: [
    {
      input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
      output: 'eat tea ate',
      explanation: 'The group ["eat","tea","ate"] has the maximum size of 3.'
    },
    {
      input: 'strs = ["abc","bca","xyz","zyx"]',
      output: 'abc bca',
      explanation: 'Both groups have size 2. Since "abc" is lexicographically smaller than "xyz", return its group.'
    }
  ],
  testCases: [
    {
      input: '6\neat tea tan ate nat bat',
      expectedOutput: 'eat tea ate',
      hidden: false
    },
    {
      input: '4\nabc bca xyz zyx',
      expectedOutput: 'abc bca',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def largest_anagram_family(strs):\n    pass\n\nn = int(input())\nstrs = input().split() if n > 0 else []\nresult = largest_anagram_family(strs)\nprint(*result)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<String> largestAnagramFamily(String[] strs) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            String[] strs = new String[n];\n            for (int i = 0; i < n; i++) {\n                strs[i] = sc.next();\n            }\n            List<String> result = largestAnagramFamily(strs);\n            for (int i = 0; i < result.size(); i++) {\n                if (i > 0) System.out.print(" ");\n                System.out.print(result.get(i));\n            }\n            System.out.println();\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid largestAnagramFamily(char strs[][101], int n) {\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    char strs[n][101];\n    for (int i = 0; i < n; i++) {\n        scanf("%100s", strs[i]);\n    }\n    largestAnagramFamily(strs, n);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <string>\n\nusing namespace std;\n\nvector<string> largestAnagramFamily(vector<string>& strs) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<string> strs(n);\n        for (int i = 0; i < n; i++) {\n            cin >> strs[i];\n        }\n        vector<string> result = largestAnagramFamily(strs);\n        for (int i = 0; i < result.size(); i++) {\n            if (i) cout << " ";\n            cout << result[i];\n        }\n        cout << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'ga-h1',
  title: 'Group Unicode Anagrams',
  difficulty: 'Hard',
  description: 'Given an array of Unicode strings `strs`, group all strings that are anagrams of each other. Unlike the classic problem, the strings may contain any valid Unicode characters instead of only lowercase English letters. Return the grouped anagrams in any order.',
  constraints: [
    '1 <= strs.length <= 10^4',
    '1 <= strs[i].length <= 100',
    'Each string may contain any valid Unicode characters.'
  ],
  examples: [
    {
      input: 'strs = ["résumé","sérumé","東京","京東","abc","cab"]',
      output: '[["résumé","sérumé"],["東京","京東"],["abc","cab"]]',
      explanation: 'Strings are grouped based on identical Unicode characters and their frequencies.'
    },
    {
      input: 'strs = ["😀😃","😃😀","hello"]',
      output: '[["😀😃","😃😀"],["hello"]]',
      explanation: 'Unicode characters such as emojis are also considered while grouping anagrams.'
    }
  ],
  testCases: [
    {
      input: '6\nrésumé sérumé 東京 京東 abc cab',
      expectedOutput: 'résumé sérumé\n東京 京東\nabc cab',
      hidden: false
    },
    {
      input: '3\n😀😃 😃😀 hello',
      expectedOutput: '😀😃 😃😀\nhello',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def group_unicode_anagrams(strs):\n    pass\n\nn = int(input())\nstrs = input().split() if n > 0 else []\nresult = group_unicode_anagrams(strs)\nfor group in result:\n    print(*group)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<List<String>> groupUnicodeAnagrams(String[] strs) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            String[] strs = new String[n];\n            for (int i = 0; i < n; i++) {\n                strs[i] = sc.next();\n            }\n            List<List<String>> result = groupUnicodeAnagrams(strs);\n            for (List<String> group : result) {\n                for (int i = 0; i < group.size(); i++) {\n                    if (i > 0) System.out.print(" ");\n                    System.out.print(group.get(i));\n                }\n                System.out.println();\n            }\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid groupUnicodeAnagrams(char strs[][201], int n) {\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    char strs[n][201];\n    for (int i = 0; i < n; i++) {\n        scanf("%200s", strs[i]);\n    }\n    groupUnicodeAnagrams(strs, n);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <string>\n\nusing namespace std;\n\nvector<vector<string>> groupUnicodeAnagrams(vector<string>& strs) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<string> strs(n);\n        for (int i = 0; i < n; i++) {\n            cin >> strs[i];\n        }\n        vector<vector<string>> result = groupUnicodeAnagrams(strs);\n        for (auto& group : result) {\n            for (int i = 0; i < group.size(); i++) {\n                if (i) cout << " ";\n                cout << group[i];\n            }\n            cout << "\\n";\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'ga-h2',
  title: 'Dynamic Group Anagrams',
  difficulty: 'Hard',
  description: 'You are given a sequence of queries. Each query is one of the following: `ADD word` inserts a word into the collection, `REMOVE word` removes one occurrence of the word (it is guaranteed to exist), and `GROUPS` asks you to print all current anagram groups containing at least one word. The order of the groups does not matter, but the words inside each group must preserve their insertion order.',
  constraints: [
    '1 <= q <= 2 * 10^5',
    '1 <= word.length <= 100',
    'word consists of lowercase English letters.',
    'It is guaranteed that every REMOVE operation refers to an existing word.'
  ],
  examples: [
    {
      input: '7\nADD eat\nADD tea\nADD tan\nGROUPS\nREMOVE tea\nADD ate\nGROUPS',
      output: 'eat tea\ntan\n\neat ate\ntan',
      explanation: 'The groups are updated dynamically after every ADD and REMOVE operation.'
    },
    {
      input: '6\nADD abc\nADD bca\nGROUPS\nREMOVE abc\nGROUPS\nADD cab',
      output: 'abc bca\n\nbca\n\nbca cab',
      explanation: 'Removing and inserting words should immediately update the corresponding anagram group.'
    }
  ],
  testCases: [
    {
      input: '7\nADD eat\nADD tea\nADD tan\nGROUPS\nREMOVE tea\nADD ate\nGROUPS',
      expectedOutput: 'eat tea\ntan\n\neat ate\ntan',
      hidden: false
    },
    {
      input: '6\nADD abc\nADD bca\nGROUPS\nREMOVE abc\nGROUPS\nADD cab',
      expectedOutput: 'abc bca\n\nbca\n\nbca cab',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def dynamic_group_anagrams(queries):\n    pass\n\nq = int(input())\nqueries = [input().strip() for _ in range(q)]\nresult = dynamic_group_anagrams(queries)\nfor state in result:\n    for group in state:\n        print(*group)\n    print()',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<List<List<String>>> dynamicGroupAnagrams(List<String> queries) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int q = sc.nextInt();\n        sc.nextLine();\n        List<String> queries = new ArrayList<>();\n        for (int i = 0; i < q; i++) queries.add(sc.nextLine());\n        List<List<List<String>>> result = dynamicGroupAnagrams(queries);\n        for (List<List<String>> state : result) {\n            for (List<String> group : state) {\n                for (int i = 0; i < group.size(); i++) {\n                    if (i > 0) System.out.print(" ");\n                    System.out.print(group.get(i));\n                }\n                System.out.println();\n            }\n            System.out.println();\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <string.h>\n\nvoid dynamicGroupAnagrams(int q) {\n}\n\nint main() {\n    int q;\n    scanf("%d", &q);\n    getchar();\n    dynamicGroupAnagrams(q);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nvector<vector<vector<string>>> dynamicGroupAnagrams(vector<string>& queries) {\n    return {};\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int q;\n    cin >> q;\n    cin.ignore();\n    vector<string> queries(q);\n    for (int i = 0; i < q; i++) getline(cin, queries[i]);\n    auto result = dynamicGroupAnagrams(queries);\n    for (auto& state : result) {\n        for (auto& group : state) {\n            for (int i = 0; i < group.size(); i++) {\n                if (i) cout << " ";\n                cout << group[i];\n            }\n            cout << "\\n";\n        }\n        cout << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'ga-h3',
  title: 'Merge Two Anagram Dictionaries',
  difficulty: 'Hard',
  description: 'You are given two arrays of strings `dict1` and `dict2`. Merge them into a single anagram dictionary by grouping all strings that are anagrams of each other, regardless of which dictionary they came from. Within each group, all words from `dict1` must appear before words from `dict2`, while preserving their original relative order. Return the groups in any order.',
  constraints: [
    '1 <= dict1.length, dict2.length <= 10^4',
    '1 <= dict1[i].length, dict2[i].length <= 100',
    'All strings consist of lowercase English letters.'
  ],
  examples: [
    {
      input: 'dict1 = ["eat","tan","bat"], dict2 = ["tea","ate","nat","tab"]',
      output: '[["eat","tea","ate"],["tan","nat"],["bat","tab"]]',
      explanation: 'Words from both dictionaries are merged into common anagram groups while maintaining the required ordering.'
    },
    {
      input: 'dict1 = ["abc","xyz"], dict2 = ["bca","zyx","cab"]',
      output: '[["abc","bca","cab"],["xyz","zyx"]]',
      explanation: 'Each group contains all matching anagrams from both dictionaries.'
    }
  ],
  testCases: [
    {
      input: '3\neat tan bat\n4\ntea ate nat tab',
      expectedOutput: 'eat tea ate\ntan nat\nbat tab',
      hidden: false
    },
    {
      input: '2\nabc xyz\n3\nbca zyx cab',
      expectedOutput: 'abc bca cab\nxyz zyx',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def merge_anagram_dictionaries(dict1, dict2):\n    pass\n\nn = int(input())\ndict1 = input().split() if n > 0 else []\nm = int(input())\ndict2 = input().split() if m > 0 else []\nresult = merge_anagram_dictionaries(dict1, dict2)\nfor group in result:\n    print(*group)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<List<String>> mergeAnagramDictionaries(String[] dict1, String[] dict2) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        String[] dict1 = new String[n];\n        for (int i = 0; i < n; i++) dict1[i] = sc.next();\n        int m = sc.nextInt();\n        String[] dict2 = new String[m];\n        for (int i = 0; i < m; i++) dict2[i] = sc.next();\n        List<List<String>> result = mergeAnagramDictionaries(dict1, dict2);\n        for (List<String> group : result) {\n            for (int i = 0; i < group.size(); i++) {\n                if (i > 0) System.out.print(" ");\n                System.out.print(group.get(i));\n            }\n            System.out.println();\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid mergeAnagramDictionaries(char dict1[][101], int n, char dict2[][101], int m) {\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    char dict1[n][101];\n    for (int i = 0; i < n; i++) scanf("%100s", dict1[i]);\n    int m;\n    scanf("%d", &m);\n    char dict2[m][101];\n    for (int i = 0; i < m; i++) scanf("%100s", dict2[i]);\n    mergeAnagramDictionaries(dict1, n, dict2, m);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nvector<vector<string>> mergeAnagramDictionaries(vector<string>& dict1, vector<string>& dict2) {\n    return {};\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    cin >> n;\n    vector<string> dict1(n);\n    for (int i = 0; i < n; i++) cin >> dict1[i];\n    int m;\n    cin >> m;\n    vector<string> dict2(m);\n    for (int i = 0; i < m; i++) cin >> dict2[i];\n    auto result = mergeAnagramDictionaries(dict1, dict2);\n    for (auto& group : result) {\n        for (int i = 0; i < group.size(); i++) {\n            if (i) cout << " ";\n            cout << group[i];\n        }\n        cout << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'ga-h4',
  title: 'Streaming Group Anagrams',
  difficulty: 'Hard',
  description: 'You are given a stream of words arriving one by one. After each insertion, output the size of the largest anagram group formed so far. If multiple groups have the same size, consider any one of them. Process the stream efficiently.',
  constraints: [
    '1 <= n <= 2 * 10^5',
    '1 <= word.length <= 100',
    'word consists of lowercase English letters.'
  ],
  examples: [
    {
      input: '6\neat tea tan ate nat bat',
      output: '1\n2\n2\n3\n3\n3',
      explanation: 'After each insertion, the largest anagram group sizes are 1, 2, 2, 3, 3, and 3.'
    },
    {
      input: '5\nabc bca xyz cab zyx',
      output: '1\n2\n2\n3\n3',
      explanation: 'The largest anagram group grows as more matching words are inserted.'
    }
  ],
  testCases: [
    {
      input: '6\neat tea tan ate nat bat',
      expectedOutput: '1\n2\n2\n3\n3\n3',
      hidden: false
    },
    {
      input: '5\nabc bca xyz cab zyx',
      expectedOutput: '1\n2\n2\n3\n3',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def streaming_group_anagrams(words):\n    pass\n\nn = int(input())\nwords = input().split() if n > 0 else []\nresult = streaming_group_anagrams(words)\nfor x in result:\n    print(x)',
    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Integer> streamingGroupAnagrams(String[] words) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        String[] words = new String[n];\n        for (int i = 0; i < n; i++) words[i] = sc.next();\n        List<Integer> result = streamingGroupAnagrams(words);\n        for (int x : result) {\n            System.out.println(x);\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid streamingGroupAnagrams(char words[][101], int n) {\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    char words[n][101];\n    for (int i = 0; i < n; i++) scanf("%100s", words[i]);\n    streamingGroupAnagrams(words, n);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nvector<int> streamingGroupAnagrams(vector<string>& words) {\n    return {};\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    cin >> n;\n    vector<string> words(n);\n    for (int i = 0; i < n; i++) cin >> words[i];\n    vector<int> result = streamingGroupAnagrams(words);\n    for (int x : result) {\n        cout << x << "\\n";\n    }\n    return 0;\n}'
  }
}
];