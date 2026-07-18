export const accountsMergeProblems = [
  // --- EASY ---
  {
    id: 'am-e1', title: 'Single Account No Merge', difficulty: 'Easy',
    description: 'Given a list with a single account, return it as-is since there is nothing to merge.',
    constraints: ['1 <= accounts.length <= 1', '1 <= accounts[i].length <= 5'],
    examples: [
      { input: 'accounts = [["John","john@mail.com"]]', output: '[["John","john@mail.com"]]', explanation: 'Only one account, no merging needed.' },
      { input: 'accounts = [["Alice","alice2@mail.com","alice@mail.com"]]', output: '[["Alice","alice@mail.com","alice2@mail.com"]]', explanation: 'Single account with multiple emails returned sorted.' }
    ],
    testCases: [
      { input: '1\nJohn john@mail.com', expectedOutput: 'John john@mail.com', hidden: false },
      { input: '1\nAlice alice2@mail.com alice@mail.com', expectedOutput: 'Alice alice@mail.com alice2@mail.com', hidden: false }
    ],
    starterCode: {
      python: 'def accounts_merge(accounts):\n    pass',
      java: 'public List<List<String>> accountsMerge(List<List<String>> accounts) {\n    return new ArrayList<>();\n}',
      c: 'char*** accountsMerge(char*** accounts, int accountsSize, int* accountsColSize, int* returnSize, int** returnColumnSizes) {\n    return NULL;\n}',
      cpp: 'vector<vector<string>> accountsMerge(vector<vector<string>>& accounts) {\n    return {};\n}'
    }
  },

  {
    id: 'am-e2', title: 'Two Accounts No Common Email', difficulty: 'Easy',
    description: 'Given two accounts with no shared emails, return both accounts unchanged.',
    constraints: ['accounts.length == 2', 'No shared emails between accounts'],
    examples: [
      { input: 'accounts = [["John","a@mail.com"],["Mary","b@mail.com"]]', output: '[["John","a@mail.com"],["Mary","b@mail.com"]]', explanation: 'No shared emails, so no merging occurs.' },
      { input: 'accounts = [["Alice","x@mail.com"],["Bob","y@mail.com"]]', output: '[["Alice","x@mail.com"],["Bob","y@mail.com"]]', explanation: 'Distinct emails, both accounts returned separately.' }
    ],
    testCases: [
      { input: '2\nJohn a@mail.com\nMary b@mail.com', expectedOutput: 'John a@mail.com\nMary b@mail.com', hidden: false },
      { input: '2\nAlice x@mail.com\nBob y@mail.com', expectedOutput: 'Alice x@mail.com\nBob y@mail.com', hidden: false }
    ],
    starterCode: {
      python: 'def accounts_merge(accounts):\n    pass',
      java: 'public List<List<String>> accountsMerge(List<List<String>> accounts) {\n    return new ArrayList<>();\n}',
      c: 'char*** accountsMerge(char*** accounts, int accountsSize, int* accountsColSize, int* returnSize, int** returnColumnSizes) {\n    return NULL;\n}',
      cpp: 'vector<vector<string>> accountsMerge(vector<vector<string>>& accounts) {\n    return {};\n}'
    }
  },

  {
    id: 'am-e3', title: 'Two Accounts One Common Email', difficulty: 'Easy',
    description: 'Given two accounts that share exactly one email, merge them into a single account under the first account\'s name.',
    constraints: ['accounts.length == 2', 'Exactly one shared email'],
    examples: [
      { input: 'accounts = [["John","a@mail.com","b@mail.com"],["John","b@mail.com","c@mail.com"]]', output: '[["John","a@mail.com","b@mail.com","c@mail.com"]]', explanation: 'Shared email b@mail.com causes a merge. Emails are sorted.' },
      { input: 'accounts = [["Alice","x@mail.com","y@mail.com"],["Alice","y@mail.com","z@mail.com"]]', output: '[["Alice","x@mail.com","y@mail.com","z@mail.com"]]', explanation: 'y@mail.com is shared, so both accounts merge.' }
    ],
    testCases: [
      { input: '2\nJohn a@mail.com b@mail.com\nJohn b@mail.com c@mail.com', expectedOutput: 'John a@mail.com b@mail.com c@mail.com', hidden: false },
      { input: '2\nAlice x@mail.com y@mail.com\nAlice y@mail.com z@mail.com', expectedOutput: 'Alice x@mail.com y@mail.com z@mail.com', hidden: false }
    ],
    starterCode: {
      python: 'def accounts_merge(accounts):\n    pass',
      java: 'public List<List<String>> accountsMerge(List<List<String>> accounts) {\n    return new ArrayList<>();\n}',
      c: 'char*** accountsMerge(char*** accounts, int accountsSize, int* accountsColSize, int* returnSize, int** returnColumnSizes) {\n    return NULL;\n}',
      cpp: 'vector<vector<string>> accountsMerge(vector<vector<string>>& accounts) {\n    return {};\n}'
    }
  },

  {
    id: 'am-e4', title: 'Duplicate Emails in Same Account', difficulty: 'Easy',
    description: 'Given a single account with duplicate emails listed, return the account with unique sorted emails.',
    constraints: ['accounts.length == 1', 'Emails may repeat within the same account'],
    examples: [
      { input: 'accounts = [["John","a@mail.com","a@mail.com","b@mail.com"]]', output: '[["John","a@mail.com","b@mail.com"]]', explanation: 'Duplicate a@mail.com is removed and emails are sorted.' },
      { input: 'accounts = [["Bob","z@mail.com","z@mail.com"]]', output: '[["Bob","z@mail.com"]]', explanation: 'Only one unique email remains after deduplication.' }
    ],
    testCases: [
      { input: '1\nJohn a@mail.com a@mail.com b@mail.com', expectedOutput: 'John a@mail.com b@mail.com', hidden: false },
      { input: '1\nBob z@mail.com z@mail.com', expectedOutput: 'Bob z@mail.com', hidden: false }
    ],
    starterCode: {
      python: 'def accounts_merge(accounts):\n    pass',
      java: 'public List<List<String>> accountsMerge(List<List<String>> accounts) {\n    return new ArrayList<>();\n}',
      c: 'char*** accountsMerge(char*** accounts, int accountsSize, int* accountsColSize, int* returnSize, int** returnColumnSizes) {\n    return NULL;\n}',
      cpp: 'vector<vector<string>> accountsMerge(vector<vector<string>>& accounts) {\n    return {};\n}'
    }
  },

  {
    id: 'am-e5', title: 'Same Name Different Emails', difficulty: 'Easy',
    description: 'Given multiple accounts with the same name but no shared emails, return all accounts separately since name alone does not trigger a merge.',
    constraints: ['2 <= accounts.length <= 5', 'Same name, no shared emails'],
    examples: [
      { input: 'accounts = [["John","a@mail.com"],["John","b@mail.com"]]', output: '[["John","a@mail.com"],["John","b@mail.com"]]', explanation: 'Same name but different emails — no merge.' },
      { input: 'accounts = [["Alice","p@mail.com"],["Alice","q@mail.com"],["Alice","r@mail.com"]]', output: '[["Alice","p@mail.com"],["Alice","q@mail.com"],["Alice","r@mail.com"]]', explanation: 'Three accounts with same name but distinct emails remain separate.' }
    ],
    testCases: [
      { input: '2\nJohn a@mail.com\nJohn b@mail.com', expectedOutput: 'John a@mail.com\nJohn b@mail.com', hidden: false },
      { input: '3\nAlice p@mail.com\nAlice q@mail.com\nAlice r@mail.com', expectedOutput: 'Alice p@mail.com\nAlice q@mail.com\nAlice r@mail.com', hidden: false }
    ],
    starterCode: {
      python: 'def accounts_merge(accounts):\n    pass',
      java: 'public List<List<String>> accountsMerge(List<List<String>> accounts) {\n    return new ArrayList<>();\n}',
      c: 'char*** accountsMerge(char*** accounts, int accountsSize, int* accountsColSize, int* returnSize, int** returnColumnSizes) {\n    return NULL;\n}',
      cpp: 'vector<vector<string>> accountsMerge(vector<vector<string>>& accounts) {\n    return {};\n}'
    }
  },

  // --- MEDIUM ---
  {
    id: 'am-m1', title: 'Standard Accounts Merge', difficulty: 'Medium',
    description: 'Given a list of accounts where each account is a list of strings — the first element is the name and the rest are emails — merge accounts that share at least one email. Return the merged accounts with emails sorted.',
    constraints: ['1 <= accounts.length <= 1000', '2 <= accounts[i].length <= 10', '1 <= accounts[i][j].length <= 30'],
    examples: [
      { input: 'accounts = [["John","a@m.com","b@m.com"],["John","b@m.com","c@m.com"],["Mary","d@m.com"]]', output: '[["John","a@m.com","b@m.com","c@m.com"],["Mary","d@m.com"]]', explanation: 'First two John accounts share b@m.com and are merged. Mary is separate.' },
      { input: 'accounts = [["Alice","a@m.com"],["Bob","b@m.com"],["Alice","a@m.com","c@m.com"]]', output: '[["Alice","a@m.com","c@m.com"],["Bob","b@m.com"]]', explanation: 'Two Alice accounts share a@m.com and merge. Bob is separate.' }
    ],
    testCases: [
      { input: '3\nJohn a@m.com b@m.com\nJohn b@m.com c@m.com\nMary d@m.com', expectedOutput: 'John a@m.com b@m.com c@m.com\nMary d@m.com', hidden: false },
      { input: '3\nAlice a@m.com\nBob b@m.com\nAlice a@m.com c@m.com', expectedOutput: 'Alice a@m.com c@m.com\nBob b@m.com', hidden: false }
    ],
    starterCode: {
      python: 'def accounts_merge(accounts):\n    pass',
      java: 'public List<List<String>> accountsMerge(List<List<String>> accounts) {\n    return new ArrayList<>();\n}',
      c: 'char*** accountsMerge(char*** accounts, int accountsSize, int* accountsColSize, int* returnSize, int** returnColumnSizes) {\n    return NULL;\n}',
      cpp: 'vector<vector<string>> accountsMerge(vector<vector<string>>& accounts) {\n    return {};\n}'
    }
  },

  {
    id: 'am-m2', title: 'Chain Merge', difficulty: 'Medium',
    description: 'Three accounts are linked in a chain: account 1 shares an email with account 2, and account 2 shares a different email with account 3. All three must be merged into one.',
    constraints: ['accounts.length == 3', 'Chain connection through shared emails'],
    examples: [
      { input: 'accounts = [["A","e1","e2"],["A","e2","e3"],["A","e3","e4"]]', output: '[["A","e1","e2","e3","e4"]]', explanation: 'e2 links accounts 1-2, e3 links accounts 2-3. All merge into one.' },
      { input: 'accounts = [["X","a","b"],["X","b","c"],["X","c","d"]]', output: '[["X","a","b","c","d"]]', explanation: 'Chain: a-b, b-c, c-d all belong to one person.' }
    ],
    testCases: [
      { input: '3\nA e1 e2\nA e2 e3\nA e3 e4', expectedOutput: 'A e1 e2 e3 e4', hidden: false },
      { input: '3\nX a b\nX b c\nX c d', expectedOutput: 'X a b c d', hidden: false }
    ],
    starterCode: {
      python: 'def accounts_merge(accounts):\n    pass',
      java: 'public List<List<String>> accountsMerge(List<List<String>> accounts) {\n    return new ArrayList<>();\n}',
      c: 'char*** accountsMerge(char*** accounts, int accountsSize, int* accountsColSize, int* returnSize, int** returnColumnSizes) {\n    return NULL;\n}',
      cpp: 'vector<vector<string>> accountsMerge(vector<vector<string>>& accounts) {\n    return {};\n}'
    }
  },

  {
    id: 'am-m3', title: 'Count Merged Groups', difficulty: 'Medium',
    description: 'Given a list of accounts, return the total number of distinct merged account groups.',
    constraints: ['1 <= accounts.length <= 500', '2 <= accounts[i].length <= 10'],
    examples: [
      { input: 'accounts = [["A","e1"],["B","e2"],["A","e1","e3"],["C","e4"]]', output: '3', explanation: 'First and third accounts merge (share e1). Total groups: A-merged, B, C = 3.' },
      { input: 'accounts = [["X","a","b"],["X","b","c"],["Y","d"]]', output: '2', explanation: 'First two merge into one group. Y is separate. Total = 2.' }
    ],
    testCases: [
      { input: '4\nA e1\nB e2\nA e1 e3\nC e4', expectedOutput: '3', hidden: false },
      { input: '3\nX a b\nX b c\nY d', expectedOutput: '2', hidden: false }
    ],
    starterCode: {
      python: 'def count_merged_groups(accounts):\n    pass',
      java: 'public int countMergedGroups(List<List<String>> accounts) {\n    return 0;\n}',
      c: 'int countMergedGroups(char*** accounts, int accountsSize, int* accountsColSize) {\n    return 0;\n}',
      cpp: 'int countMergedGroups(vector<vector<string>>& accounts) {\n    return 0;\n}'
    }
  },

  {
    id: 'am-m4', title: 'Largest Merged Account', difficulty: 'Medium',
    description: 'After merging all accounts, return the account group that contains the most unique emails.',
    constraints: ['1 <= accounts.length <= 500', '2 <= accounts[i].length <= 10'],
    examples: [
      { input: 'accounts = [["A","e1","e2"],["A","e2","e3","e4"],["B","e5"]]', output: '["A","e1","e2","e3","e4"]', explanation: 'Merged A account has 4 emails, which is the largest group.' },
      { input: 'accounts = [["X","a"],["Y","b","c","d"],["Y","d","e"]]', output: '["Y","b","c","d","e"]', explanation: 'Y accounts merge to form a group of 4 emails, larger than X.' }
    ],
    testCases: [
      { input: '3\nA e1 e2\nA e2 e3 e4\nB e5', expectedOutput: 'A e1 e2 e3 e4', hidden: false },
      { input: '3\nX a\nY b c d\nY d e', expectedOutput: 'Y b c d e', hidden: false }
    ],
    starterCode: {
      python: 'def largest_merged_account(accounts):\n    pass',
      java: 'public List<String> largestMergedAccount(List<List<String>> accounts) {\n    return new ArrayList<>();\n}',
      c: 'char** largestMergedAccount(char*** accounts, int accountsSize, int* accountsColSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<string> largestMergedAccount(vector<vector<string>>& accounts) {\n    return {};\n}'
    }
  },

  {
    id: 'am-m5', title: 'Emails Belonging to One Person', difficulty: 'Medium',
    description: 'Given a list of accounts and a target email, return all emails that belong to the same merged account as the target email.',
    constraints: ['1 <= accounts.length <= 500', 'Target email exists in the accounts list'],
    examples: [
      { input: 'accounts = [["A","e1","e2"],["A","e2","e3"]], target = "e1"', output: '["e1","e2","e3"]', explanation: 'e1 is in the first account which merges with the second via e2. All three belong together.' },
      { input: 'accounts = [["B","x","y"],["B","y","z"]], target = "z"', output: '["x","y","z"]', explanation: 'z is in the second account which merges with the first via y.' }
    ],
    testCases: [
      { input: '2\nA e1 e2\nA e2 e3\ne1', expectedOutput: 'e1 e2 e3', hidden: false },
      { input: '2\nB x y\nB y z\nz', expectedOutput: 'x y z', hidden: false }
    ],
    starterCode: {
      python: 'def emails_of_same_person(accounts, target):\n    pass',
      java: 'public List<String> emailsOfSamePerson(List<List<String>> accounts, String target) {\n    return new ArrayList<>();\n}',
      c: 'char** emailsOfSamePerson(char*** accounts, int accountsSize, int* accountsColSize, char* target, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<string> emailsOfSamePerson(vector<vector<string>>& accounts, string target) {\n    return {};\n}'
    }
  },

  // --- HARD ---
  {
    id: 'am-h1', title: 'Accounts Merge with Union-Find', difficulty: 'Hard',
    description: 'Implement the accounts merge algorithm using Union-Find (Disjoint Set Union) data structure. Merge accounts that share at least one common email and return the result with sorted emails.',
    constraints: ['1 <= accounts.length <= 1000', '2 <= accounts[i].length <= 10', 'Implement using Union-Find'],
    examples: [
      { input: 'accounts = [["John","a@m.com","b@m.com"],["John","b@m.com","c@m.com"],["Mary","d@m.com"]]', output: '[["John","a@m.com","b@m.com","c@m.com"],["Mary","d@m.com"]]', explanation: 'Union-Find groups emails by shared ownership. John\'s two accounts merge.' },
      { input: 'accounts = [["A","e1","e2"],["B","e3"],["A","e2","e4"]]', output: '[["A","e1","e2","e4"],["B","e3"]]', explanation: 'A\'s accounts share e2 and merge. B remains separate.' }
    ],
    testCases: [
      { input: '3\nJohn a@m.com b@m.com\nJohn b@m.com c@m.com\nMary d@m.com', expectedOutput: 'John a@m.com b@m.com c@m.com\nMary d@m.com', hidden: false },
      { input: '3\nA e1 e2\nB e3\nA e2 e4', expectedOutput: 'A e1 e2 e4\nB e3', hidden: false }
    ],
    starterCode: {
      python: 'def accounts_merge(accounts):\n    # Implement using Union-Find\n    pass',
      java: 'public List<List<String>> accountsMerge(List<List<String>> accounts) {\n    // Implement using Union-Find\n    return new ArrayList<>();\n}',
      c: 'char*** accountsMerge(char*** accounts, int accountsSize, int* accountsColSize, int* returnSize, int** returnColumnSizes) {\n    /* Implement using Union-Find */\n    return NULL;\n}',
      cpp: 'vector<vector<string>> accountsMerge(vector<vector<string>>& accounts) {\n    // Implement using Union-Find\n    return {};\n}'
    }
  },

  {
    id: 'am-h2', title: 'Accounts Merge with DFS', difficulty: 'Hard',
    description: 'Implement the accounts merge algorithm using Depth-First Search on an email adjacency graph. Each email is a node; edges connect emails belonging to the same account.',
    constraints: ['1 <= accounts.length <= 1000', '2 <= accounts[i].length <= 10', 'Implement using DFS on a graph'],
    examples: [
      { input: 'accounts = [["John","a@m.com","b@m.com"],["John","b@m.com","c@m.com"],["Mary","d@m.com"]]', output: '[["John","a@m.com","b@m.com","c@m.com"],["Mary","d@m.com"]]', explanation: 'Build a graph where emails in the same account are connected. DFS finds connected components.' },
      { input: 'accounts = [["A","e1","e2"],["A","e3","e4"],["A","e2","e3"]]', output: '[["A","e1","e2","e3","e4"]]', explanation: 'e2 and e3 bridge all three accounts into one connected component.' }
    ],
    testCases: [
      { input: '3\nJohn a@m.com b@m.com\nJohn b@m.com c@m.com\nMary d@m.com', expectedOutput: 'John a@m.com b@m.com c@m.com\nMary d@m.com', hidden: false },
      { input: '3\nA e1 e2\nA e3 e4\nA e2 e3', expectedOutput: 'A e1 e2 e3 e4', hidden: false }
    ],
    starterCode: {
      python: 'def accounts_merge(accounts):\n    # Implement using DFS\n    pass',
      java: 'public List<List<String>> accountsMerge(List<List<String>> accounts) {\n    // Implement using DFS\n    return new ArrayList<>();\n}',
      c: 'char*** accountsMerge(char*** accounts, int accountsSize, int* accountsColSize, int* returnSize, int** returnColumnSizes) {\n    /* Implement using DFS */\n    return NULL;\n}',
      cpp: 'vector<vector<string>> accountsMerge(vector<vector<string>>& accounts) {\n    // Implement using DFS\n    return {};\n}'
    }
  },

  {
    id: 'am-h3', title: 'Merge and Assign Unique IDs', difficulty: 'Hard',
    description: 'After merging all accounts, assign a unique integer ID (starting from 1) to each merged group and return a mapping of every email to its group ID.',
    constraints: ['1 <= accounts.length <= 1000', '2 <= accounts[i].length <= 10', 'IDs assigned in order of first appearance after merge'],
    examples: [
      { input: 'accounts = [["A","e1","e2"],["A","e2","e3"],["B","e4"]]', output: '{"e1":1,"e2":1,"e3":1,"e4":2}', explanation: 'A\'s merged group gets ID 1. B\'s group gets ID 2.' },
      { input: 'accounts = [["X","a"],["Y","b"],["X","a","c"]]', output: '{"a":1,"c":1,"b":2}', explanation: 'X\'s merged group (a,c) gets ID 1. Y\'s group (b) gets ID 2.' }
    ],
    testCases: [
      { input: '3\nA e1 e2\nA e2 e3\nB e4', expectedOutput: 'e1:1 e2:1 e3:1 e4:2', hidden: false },
      { input: '3\nX a\nY b\nX a c', expectedOutput: 'a:1 c:1 b:2', hidden: false }
    ],
    starterCode: {
      python: 'def assign_group_ids(accounts):\n    pass',
      java: 'public Map<String, Integer> assignGroupIds(List<List<String>> accounts) {\n    return new HashMap<>();\n}',
      c: 'void assignGroupIds(char*** accounts, int accountsSize, int* accountsColSize, char*** emails, int* ids, int* returnSize) {\n}',
      cpp: 'unordered_map<string, int> assignGroupIds(vector<vector<string>>& accounts) {\n    return {};\n}'
    }
  },

  {
    id: 'am-h4', title: 'Detect Conflicting Accounts', difficulty: 'Hard',
    description: 'Two accounts "conflict" if they share an email but have different names. Given a list of accounts, return all emails that appear in conflicting accounts.',
    constraints: ['1 <= accounts.length <= 1000', '2 <= accounts[i].length <= 10', 'Names are case-sensitive'],
    examples: [
      { input: 'accounts = [["Alice","shared@m.com"],["Bob","shared@m.com"]]', output: '["shared@m.com"]', explanation: 'shared@m.com appears under both Alice and Bob — a conflict.' },
      { input: 'accounts = [["Alice","a@m.com"],["Alice","a@m.com","b@m.com"],["Bob","c@m.com"]]', output: '[]', explanation: 'a@m.com appears under Alice twice — no conflict. Bob has unique emails.' }
    ],
    testCases: [
      { input: '2\nAlice shared@m.com\nBob shared@m.com', expectedOutput: 'shared@m.com', hidden: false },
      { input: '3\nAlice a@m.com\nAlice a@m.com b@m.com\nBob c@m.com', expectedOutput: '', hidden: false }
    ],
    starterCode: {
      python: 'def detect_conflicts(accounts):\n    pass',
      java: 'public List<String> detectConflicts(List<List<String>> accounts) {\n    return new ArrayList<>();\n}',
      c: 'char** detectConflicts(char*** accounts, int accountsSize, int* accountsColSize, int* returnSize) {\n    return NULL;\n}',
      cpp: 'vector<string> detectConflicts(vector<vector<string>>& accounts) {\n    return {};\n}'
    }
  },

  {
    id: 'am-h5', title: 'Minimum Accounts After Merge', difficulty: 'Hard',
    description: 'You are allowed to add at most K new email links (i.e., add an email to an account to create a bridge). Return the minimum number of accounts that would remain after performing at most K merges optimally.',
    constraints: ['1 <= accounts.length <= 500', '0 <= K <= accounts.length', '2 <= accounts[i].length <= 10'],
    examples: [
      { input: 'accounts = [["A","e1"],["B","e2"],["C","e3"]], K = 1', output: '2', explanation: 'One merge can combine any two accounts, leaving 2 groups.' },
      { input: 'accounts = [["A","e1"],["B","e2"],["C","e3"]], K = 2', output: '1', explanation: 'Two merges can combine all three accounts into one group.' }
    ],
    testCases: [
      { input: '3\nA e1\nB e2\nC e3\n1', expectedOutput: '2', hidden: false },
      { input: '3\nA e1\nB e2\nC e3\n2', expectedOutput: '1', hidden: false }
    ],
    starterCode: {
      python: 'def min_accounts_after_merge(accounts, k):\n    pass',
      java: 'public int minAccountsAfterMerge(List<List<String>> accounts, int k) {\n    return 0;\n}',
      c: 'int minAccountsAfterMerge(char*** accounts, int accountsSize, int* accountsColSize, int k) {\n    return 0;\n}',
      cpp: 'int minAccountsAfterMerge(vector<vector<string>>& accounts, int k) {\n    return 0;\n}'
    }
  }
];
