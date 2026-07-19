export const reverseNodesInKGroupProblems = [
  // --- EASY ---
  {
    id: 'rnk-e1',
    title: 'Reverse Linked List',
    difficulty: 'Easy',
    description: 'Given the head of a singly linked list, reverse the list, and return the reversed list.',
    constraints: ['The number of nodes in the list is the range [0, 5000].', '-5000 <= Node.val <= 5000'],
    examples: [
      { input: 'head = [1,2,3,4,5]', output: '[5,4,3,2,1]', explanation: 'Reversing 1->2->3->4->5 gives 5->4->3->2->1.' },
      { input: 'head = []', output: '[]', explanation: 'Empty list remains empty.' }
    ],
    testCases: [
      { input: '5\n1 2 3 4 5', expectedOutput: '5 4 3 2 1', hidden: false },
      { input: '0', expectedOutput: '', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_list(head):
    # Write your code here
    return head

# I/O boilerplate
n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    dummy = ListNode(0)
    curr = dummy
    for v in arr:
        curr.next = ListNode(v)
        curr = curr.next
    res = reverse_list(dummy.next)
    out = []
    while res:
        out.append(str(res.val))
        res = res.next
    print(" ".join(out))
else:
    print("")`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static ListNode reverseList(ListNode head) {
        // Write your code here
        return head;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;
            for (int i = 0; i < n; i++) {
                curr.next = new ListNode(sc.nextInt());
                curr = curr.next;
            }
            ListNode res = reverseList(dummy.next);
            while (res != null) {
                System.out.print(res.val + (res.next != null ? " " : ""));
                res = res.next;
            }
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* reverseList(struct ListNode* head) {
    // Write your code here
    return head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* curr = &dummy;
    for (int i = 0; i < n; i++) {
        int val;
        if (scanf("%d", &val) != 1) return 0;
        struct ListNode* node = (struct ListNode*)malloc(sizeof(struct ListNode));
        node->val = val;
        node->next = NULL;
        curr->next = node;
        curr = node;
    }
    struct ListNode* res = reverseList(dummy.next);
    while (res != NULL) {
        printf("%d%s", res->val, res->next != NULL ? " " : "");
        res = res->next;
    }
    printf("\\\n");
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* reverseList(ListNode* head) {
    // Write your code here
    return head;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        for (int i = 0; i < n; i++) {
            int val;
            cin >> val;
            curr->next = new ListNode(val);
            curr = curr->next;
        }
        ListNode* res = reverseList(dummy.next);
        while (res != nullptr) {
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rnk-e2',
    title: 'Reverse Linked List II',
    difficulty: 'Easy',
    description: 'Given the head of a singly linked list and two integers `left` and `right` where `left <= right`, reverse the nodes of the list from position `left` to position `right` (1-indexed), and return the reversed list.',
    constraints: ['The number of nodes in the list is in the range [1, 500].', '-500 <= Node.val <= 500', '1 <= left <= right <= NodeCount'],
    examples: [
      { input: 'head = [1,2,3,4,5], left = 2, right = 4', output: '[1,4,3,2,5]', explanation: 'Reversing positions 2 to 4 (2->3->4 becomes 4->3->2).' }
    ],
    testCases: [
      { input: '5\n1 2 3 4 5\n2 4', expectedOutput: '1 4 3 2 5', hidden: false },
      { input: '1\n5\n1 1', expectedOutput: '5', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_between(head, left, right):
    # Write your code here
    return head

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    left, right = map(int, input().split())
    dummy = ListNode(0)
    curr = dummy
    for v in arr:
        curr.next = ListNode(v)
        curr = curr.next
    res = reverse_between(dummy.next, left, right)
    out = []
    while res:
        out.append(str(res.val))
        res = res.next
    print(" ".join(out))`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static ListNode reverseBetween(ListNode head, int left, int right) {
        return head;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;
            for (int i = 0; i < n; i++) {
                curr.next = new ListNode(sc.nextInt());
                curr = curr.next;
            }
            int left = sc.nextInt();
            int right = sc.nextInt();
            ListNode res = reverseBetween(dummy.next, left, right);
            while (res != null) {
                System.out.print(res.val + (res.next != null ? " " : ""));
                res = res.next;
            }
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* reverseBetween(struct ListNode* head, int left, int right) {
    return head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* curr = &dummy;
    for (int i = 0; i < n; i++) {
        int val;
        scanf("%d", &val);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = val;
        node->next = NULL;
        curr->next = node;
        curr = node;
    }
    int left, right;
    scanf("%d %d", &left, &right);
    struct ListNode* res = reverseBetween(dummy.next, left, right);
    while (res != NULL) {
        printf("%d%s", res->val, res->next != NULL ? " " : "");
        res = res->next;
    }
    printf("\\\n");
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* reverseBetween(ListNode* head, int left, int right) {
    return head;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        for (int i = 0; i < n; i++) {
            int val;
            cin >> val;
            curr->next = new ListNode(val);
            curr = curr->next;
        }
        int left, right;
        cin >> left >> right;
        ListNode* res = reverseBetween(dummy.next, left, right);
        while (res != nullptr) {
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rnk-e3',
    title: 'Swap Nodes in Pairs',
    difficulty: 'Easy',
    description: 'Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list\'s nodes (i.e., only nodes themselves may be changed.)',
    constraints: ['The number of nodes in the list is in the range [0, 100].', '0 <= Node.val <= 100'],
    examples: [
      { input: 'head = [1,2,3,4]', output: '[2,1,4,3]', explanation: 'Adjacent nodes swap: (1, 2) -> (2, 1), (3, 4) -> (4, 3).' }
    ],
    testCases: [
      { input: '4\n1 2 3 4', expectedOutput: '2 1 4 3', hidden: false },
      { input: '1\n1', expectedOutput: '1', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def swap_pairs(head):
    # Write code here
    return head

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    dummy = ListNode(0)
    curr = dummy
    for v in arr:
        curr.next = ListNode(v)
        curr = curr.next
    res = swap_pairs(dummy.next)
    out = []
    while res:
        out.append(str(res.val))
        res = res.next
    print(" ".join(out))
else:
    print("")`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static ListNode swapPairs(ListNode head) {
        return head;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;
            for (int i = 0; i < n; i++) {
                curr.next = new ListNode(sc.nextInt());
                curr = curr.next;
            }
            ListNode res = swapPairs(dummy.next);
            while (res != null) {
                System.out.print(res.val + (res.next != null ? " " : ""));
                res = res.next;
            }
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* swapPairs(struct ListNode* head) {
    return head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* curr = &dummy;
    for (int i = 0; i < n; i++) {
        int val;
        scanf("%d", &val);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = val;
        node->next = NULL;
        curr->next = node;
        curr = node;
    }
    struct ListNode* res = swapPairs(dummy.next);
    while (res != NULL) {
        printf("%d%s", res->val, res->next != NULL ? " " : "");
        res = res->next;
    }
    printf("\\\n");
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* swapPairs(ListNode* head) {
    return head;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        for (int i = 0; i < n; i++) {
            int val;
            cin >> val;
            curr->next = new ListNode(val);
            curr = curr->next;
        }
        ListNode* res = swapPairs(dummy.next);
        while (res != nullptr) {
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rnk-e4',
    title: 'Reverse Alternate Nodes',
    difficulty: 'Easy',
    description: 'Given a linked list, reverse the nodes at even positions (2nd, 4th, 6th, etc.) and append them to the end of the remaining odd-positioned nodes in their original relative order. (Or simply reverse alternate nodes and append at the end).',
    constraints: ['The number of nodes in the list is in the range [1, 1000].', '0 <= Node.val <= 1000'],
    examples: [
      { input: 'head = [1,2,3,4,5,6]', output: '[1,3,5,6,4,2]', explanation: 'Odd positions: 1->3->5. Even positions: 2->4->6. Reversed evens: 6->4->2. Concatenated: 1->3->5->6->4->2.' }
    ],
    testCases: [
      { input: '6\n1 2 3 4 5 6', expectedOutput: '1 3 5 6 4 2', hidden: false },
      { input: '3\n1 2 3', expectedOutput: '1 3 2', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def rearrange_alt(head):
    # Write code here
    return head

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    dummy = ListNode(0)
    curr = dummy
    for v in arr:
        curr.next = ListNode(v)
        curr = curr.next
    res = rearrange_alt(dummy.next)
    out = []
    while res:
        out.append(str(res.val))
        res = res.next
    print(" ".join(out))`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static ListNode rearrangeAlt(ListNode head) {
        return head;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;
            for (int i = 0; i < n; i++) {
                curr.next = new ListNode(sc.nextInt());
                curr = curr.next;
            }
            ListNode res = rearrangeAlt(dummy.next);
            while (res != null) {
                System.out.print(res.val + (res.next != null ? " " : ""));
                res = res.next;
            }
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* rearrangeAlt(struct ListNode* head) {
    return head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* curr = &dummy;
    for (int i = 0; i < n; i++) {
        int val;
        scanf("%d", &val);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = val;
        node->next = NULL;
        curr->next = node;
        curr = node;
    }
    struct ListNode* res = rearrangeAlt(dummy.next);
    while (res != NULL) {
        printf("%d%s", res->val, res->next != NULL ? " " : "");
        res = res->next;
    }
    printf("\\\n");
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* rearrangeAlt(ListNode* head) {
    return head;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        for (int i = 0; i < n; i++) {
            int val;
            cin >> val;
            curr->next = new ListNode(val);
            curr = curr->next;
        }
        ListNode* res = rearrangeAlt(dummy.next);
        while (res != nullptr) {
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rnk-e5',
    title: 'Palindrome Linked List',
    difficulty: 'Easy',
    description: 'Given the head of a singly linked list, return `true` if it is a palindrome or `false` otherwise.',
    constraints: ['The number of nodes in the list is in the range [1, 10^5].', '0 <= Node.val <= 9'],
    examples: [
      { input: 'head = [1,2,2,1]', output: 'true', explanation: '1->2->2->1 is identical read forwards or backwards.' }
    ],
    testCases: [
      { input: '4\n1 2 2 1', expectedOutput: 'true', hidden: false },
      { input: '2\n1 2', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def is_palindrome(head):
    # Write code here
    return True

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    dummy = ListNode(0)
    curr = dummy
    for v in arr:
        curr.next = ListNode(v)
        curr = curr.next
    print(str(is_palindrome(dummy.next)).lower())`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static boolean isPalindrome(ListNode head) {
        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;
            for (int i = 0; i < n; i++) {
                curr.next = new ListNode(sc.nextInt());
                curr = curr.next;
            }
            System.out.println(isPalindrome(dummy.next));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

bool isPalindrome(struct ListNode* head) {
    return true;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* curr = &dummy;
    for (int i = 0; i < n; i++) {
        int val;
        scanf("%d", &val);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = val;
        node->next = NULL;
        curr->next = node;
        curr = node;
    }
    printf("%s\\\n", isPalindrome(dummy.next) ? "true" : "false");
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

bool isPalindrome(ListNode* head) {
    return true;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        for (int i = 0; i < n; i++) {
            int val;
            cin >> val;
            curr->next = new ListNode(val);
            curr = curr->next;
        }
        cout << (isPalindrome(dummy.next) ? "true" : "false") << "\\n";
    }
    return 0;
}`
    }
  },
  // --- MEDIUM ---
  {
    id: 'rnk-m1',
    title: 'Reverse Nodes in K-Group',
    difficulty: 'Medium',
    description: 'Given the head of a linked list, reverse the nodes of the list k at a time, and return its modified head. If the number of nodes is not a multiple of k, the left-out nodes at the end should remain as they are.',
    constraints: ['The number of nodes in the list is in the range [1, 5000].', '0 <= Node.val <= 1000', '1 <= k <= NodeCount'],
    examples: [
      { input: 'head = [1,2,3,4,5], k = 2', output: '[2,1,4,3,5]', explanation: 'Reversing in blocks of 2.' }
    ],
    testCases: [
      { input: '5\n1 2 3 4 5\n2', expectedOutput: '2 1 4 3 5', hidden: false },
      { input: '5\n1 2 3 4 5\n3', expectedOutput: '3 2 1 4 5', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_k_group(head, k):
    # Write code here
    return head

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    k = int(input())
    dummy = ListNode(0)
    curr = dummy
    for v in arr:
        curr.next = ListNode(v)
        curr = curr.next
    res = reverse_k_group(dummy.next, k)
    out = []
    while res:
        out.append(str(res.val))
        res = res.next
    print(" ".join(out))`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static ListNode reverseKGroup(ListNode head, int k) {
        return head;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;
            for (int i = 0; i < n; i++) {
                curr.next = new ListNode(sc.nextInt());
                curr = curr.next;
            }
            int k = sc.nextInt();
            ListNode res = reverseKGroup(dummy.next, k);
            while (res != null) {
                System.out.print(res.val + (res.next != null ? " " : ""));
                res = res.next;
            }
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* reverseKGroup(struct ListNode* head, int k) {
    return head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* curr = &dummy;
    for (int i = 0; i < n; i++) {
        int val;
        scanf("%d", &val);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = val;
        node->next = NULL;
        curr->next = node;
        curr = node;
    }
    int k;
    scanf("%d", &k);
    struct ListNode* res = reverseKGroup(dummy.next, k);
    while (res != NULL) {
        printf("%d%s", res->val, res->next != NULL ? " " : "");
        res = res->next;
    }
    printf("\\\n");
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* reverseKGroup(ListNode* head, int k) {
    return head;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        for (int i = 0; i < n; i++) {
            int val;
            cin >> val;
            curr->next = new ListNode(val);
            curr = curr->next;
        }
        int k;
        cin >> k;
        ListNode* res = reverseKGroup(dummy.next, k);
        while (res != nullptr) {
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rnk-m2',
    title: 'Reverse Alternate K Nodes',
    difficulty: 'Medium',
    description: 'Given a linked list and an integer `k`, reverse the first `k` nodes, keep the next `k` nodes in their original order, and repeat this pattern for the rest of the list.',
    constraints: ['The number of nodes in the list is in the range [1, 2000].', '1 <= k <= NodeCount'],
    examples: [
      { input: 'head = [1,2,3,4,5,6,7,8], k = 2', output: '[2,1,3,4,6,5,7,8]', explanation: 'Reverse first 2 [1,2]->[2,1], skip next 2 [3,4], reverse next 2 [5,6]->[6,5], skip [7,8].' }
    ],
    testCases: [
      { input: '8\n1 2 3 4 5 6 7 8\n2', expectedOutput: '2 1 3 4 6 5 7 8', hidden: false },
      { input: '5\n1 2 3 4 5\n3', expectedOutput: '3 2 1 4 5', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_alt_k(head, k):
    # Write code here
    return head

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    k = int(input())
    dummy = ListNode(0)
    curr = dummy
    for v in arr:
        curr.next = ListNode(v)
        curr = curr.next
    res = reverse_alt_k(dummy.next, k)
    out = []
    while res:
        out.append(str(res.val))
        res = res.next
    print(" ".join(out))`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static ListNode reverseAltK(ListNode head, int k) {
        return head;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;
            for (int i = 0; i < n; i++) {
                curr.next = new ListNode(sc.nextInt());
                curr = curr.next;
            }
            int k = sc.nextInt();
            ListNode res = reverseAltK(dummy.next, k);
            while (res != null) {
                System.out.print(res.val + (res.next != null ? " " : ""));
                res = res.next;
            }
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* reverseAltK(struct ListNode* head, int k) {
    return head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* curr = &dummy;
    for (int i = 0; i < n; i++) {
        int val;
        scanf("%d", &val);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = val;
        node->next = NULL;
        curr->next = node;
        curr = node;
    }
    int k;
    scanf("%d", &k);
    struct ListNode* res = reverseAltK(dummy.next, k);
    while (res != NULL) {
        printf("%d%s", res->val, res->next != NULL ? " " : "");
        res = res->next;
    }
    printf("\\\n");
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* reverseAltK(ListNode* head, int k) {
    return head;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        for (int i = 0; i < n; i++) {
            int val;
            cin >> val;
            curr->next = new ListNode(val);
            curr = curr->next;
        }
        int k;
        cin >> k;
        ListNode* res = reverseAltK(dummy.next, k);
        while (res != nullptr) {
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rnk-m3',
    title: 'Odd Even Linked List',
    difficulty: 'Medium',
    description: 'Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list. The first node is considered odd, the second node even, and so on.',
    constraints: ['The number of nodes in the linked list is in the range [0, 10^4].', '-10^6 <= Node.val <= 10^6'],
    examples: [
      { input: 'head = [1,2,3,4,5]', output: '[1,3,5,2,4]', explanation: 'Group odds [1,3,5] followed by evens [2,4].' }
    ],
    testCases: [
      { input: '5\n1 2 3 4 5', expectedOutput: '1 3 5 2 4', hidden: false },
      { input: '0', expectedOutput: '', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def odd_even_list(head):
    # Write code here
    return head

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    dummy = ListNode(0)
    curr = dummy
    for v in arr:
        curr.next = ListNode(v)
        curr = curr.next
    res = odd_even_list(dummy.next)
    out = []
    while res:
        out.append(str(res.val))
        res = res.next
    print(" ".join(out))
else:
    print("")`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static ListNode oddEvenList(ListNode head) {
        return head;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;
            for (int i = 0; i < n; i++) {
                curr.next = new ListNode(sc.nextInt());
                curr = curr.next;
            }
            ListNode res = oddEvenList(dummy.next);
            while (res != null) {
                System.out.print(res.val + (res.next != null ? " " : ""));
                res = res.next;
            }
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* oddEvenList(struct ListNode* head) {
    return head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* curr = &dummy;
    for (int i = 0; i < n; i++) {
        int val;
        scanf("%d", &val);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = val;
        node->next = NULL;
        curr->next = node;
        curr = node;
    }
    struct ListNode* res = oddEvenList(dummy.next);
    while (res != NULL) {
        printf("%d%s", res->val, res->next != NULL ? " " : "");
        res = res->next;
    }
    printf("\\\n");
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* oddEvenList(ListNode* head) {
    return head;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        for (int i = 0; i < n; i++) {
            int val;
            cin >> val;
            curr->next = new ListNode(val);
            curr = curr->next;
        }
        ListNode* res = oddEvenList(dummy.next);
        while (res != nullptr) {
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rnk-m4',
    title: 'Reorder List',
    difficulty: 'Medium',
    description: 'You are given the head of a singly linked list. Reorder the list to be on the following form: L0 -> Ln -> L1 -> Ln-1 -> L2 -> Ln-2 -> ...',
    constraints: ['The number of nodes in the list is in the range [1, 5000].', '1 <= Node.val <= 1000'],
    examples: [
      { input: 'head = [1,2,3,4]', output: '[1,4,2,3]', explanation: 'L0->L3->L1->L2 = 1->4->2->3.' }
    ],
    testCases: [
      { input: '4\n1 2 3 4', expectedOutput: '1 4 2 3', hidden: false },
      { input: '5\n1 2 3 4 5', expectedOutput: '1 5 2 4 3', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reorder_list(head):
    # Write code here (modify head in place)
    pass

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    dummy = ListNode(0)
    curr = dummy
    for v in arr:
        curr.next = ListNode(v)
        curr = curr.next
    reorder_list(dummy.next)
    res = dummy.next
    out = []
    while res:
        out.append(str(res.val))
        res = res.next
    print(" ".join(out))`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static void reorderList(ListNode head) {
        // Write code here
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;
            for (int i = 0; i < n; i++) {
                curr.next = new ListNode(sc.nextInt());
                curr = curr.next;
            }
            reorderList(dummy.next);
            ListNode res = dummy.next;
            while (res != null) {
                System.out.print(res.val + (res.next != null ? " " : ""));
                res = res.next;
            }
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

void reorderList(struct ListNode* head) {
    // Write code here
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* curr = &dummy;
    for (int i = 0; i < n; i++) {
        int val;
        scanf("%d", &val);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = val;
        node->next = NULL;
        curr->next = node;
        curr = node;
    }
    reorderList(dummy.next);
    struct ListNode* res = dummy.next;
    while (res != NULL) {
        printf("%d%s", res->val, res->next != NULL ? " " : "");
        res = res->next;
    }
    printf("\\\n");
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

void reorderList(ListNode* head) {
    // Write code here
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        for (int i = 0; i < n; i++) {
            int val;
            cin >> val;
            curr->next = new ListNode(val);
            curr = curr->next;
        }
        reorderList(dummy.next);
        ListNode* res = dummy.next;
        while (res != nullptr) {
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rnk-m5',
    title: 'Reverse Nodes in Even Length Groups',
    difficulty: 'Medium',
    description: 'You are given the head of a linked list. The nodes in the linked list are sequential groups of lengths 1, 2, 3, 4, ... respectively (the last group may be shorter). Reverse the nodes in each group that has an even length, and return the head of the modified linked list.',
    constraints: ['The number of nodes in the list is in the range [1, 10^5].', '0 <= Node.val <= 10^5'],
    examples: [
      { input: 'head = [5,2,6,3,9,1,7,3,8,4]', output: '[5,6,2,3,9,1,4,8,3,7]', explanation: 'Group sizes: 1 [5], 2 [2,6] (even, reversed to [6,2]), 3 [3,9,1], 4 [7,3,8,4] (even, reversed to [4,8,3,7]).' }
    ],
    testCases: [
      { input: '10\n5 2 6 3 9 1 7 3 8 4', expectedOutput: '5 6 2 3 9 1 4 8 3 7', hidden: false },
      { input: '4\n1 1 0 6', expectedOutput: '1 0 1 6', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_even_groups(head):
    # Write code here
    return head

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    dummy = ListNode(0)
    curr = dummy
    for v in arr:
        curr.next = ListNode(v)
        curr = curr.next
    res = reverse_even_groups(dummy.next)
    out = []
    while res:
        out.append(str(res.val))
        res = res.next
    print(" ".join(out))`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static ListNode reverseEvenGroups(ListNode head) {
        return head;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;
            for (int i = 0; i < n; i++) {
                curr.next = new ListNode(sc.nextInt());
                curr = curr.next;
            }
            ListNode res = reverseEvenGroups(dummy.next);
            while (res != null) {
                System.out.print(res.val + (res.next != null ? " " : ""));
                res = res.next;
            }
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* reverseEvenGroups(struct ListNode* head) {
    return head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* curr = &dummy;
    for (int i = 0; i < n; i++) {
        int val;
        scanf("%d", &val);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = val;
        node->next = NULL;
        curr->next = node;
        curr = node;
    }
    struct ListNode* res = reverseEvenGroups(dummy.next);
    while (res != NULL) {
        printf("%d%s", res->val, res->next != NULL ? " " : "");
        res = res->next;
    }
    printf("\\\n");
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* reverseEvenGroups(ListNode* head) {
    return head;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        for (int i = 0; i < n; i++) {
            int val;
            cin >> val;
            curr->next = new ListNode(val);
            curr = curr->next;
        }
        ListNode* res = reverseEvenGroups(dummy.next);
        while (res != nullptr) {
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\\n";
    }
    return 0;
}`
    }
  },
  // --- HARD ---
  {
    id: 'rnk-h1',
    title: 'Iterative Reverse Nodes in K-Group',
    difficulty: 'Hard',
    description: 'Implement Reverse Nodes in K-Group iteratively with strictly O(1) auxiliary space (no recursion stack space at all, not even recursive call stack).',
    constraints: ['The number of nodes in the list is in the range [1, 5000].', '0 <= Node.val <= 1000', '1 <= k <= NodeCount'],
    examples: [
      { input: 'head = [1,2,3,4,5], k = 2', output: '[2,1,4,3,5]', explanation: 'Solve iteratively with constant space.' }
    ],
    testCases: [
      { input: '5\n1 2 3 4 5\n2', expectedOutput: '2 1 4 3 5', hidden: false },
      { input: '5\n1 2 3 4 5\n3', expectedOutput: '3 2 1 4 5', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_k_group_iterative(head, k):
    # Write code here
    return head

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    k = int(input())
    dummy = ListNode(0)
    curr = dummy
    for v in arr:
        curr.next = ListNode(v)
        curr = curr.next
    res = reverse_k_group_iterative(dummy.next, k)
    out = []
    while res:
        out.append(str(res.val))
        res = res.next
    print(" ".join(out))`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static ListNode reverseKGroupIterative(ListNode head, int k) {
        return head;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;
            for (int i = 0; i < n; i++) {
                curr.next = new ListNode(sc.nextInt());
                curr = curr.next;
            }
            int k = sc.nextInt();
            ListNode res = reverseKGroupIterative(dummy.next, k);
            while (res != null) {
                System.out.print(res.val + (res.next != null ? " " : ""));
                res = res.next;
            }
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* reverseKGroupIterative(struct ListNode* head, int k) {
    return head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* curr = &dummy;
    for (int i = 0; i < n; i++) {
        int val;
        scanf("%d", &val);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = val;
        node->next = NULL;
        curr->next = node;
        curr = node;
    }
    int k;
    scanf("%d", &k);
    struct ListNode* res = reverseKGroupIterative(dummy.next, k);
    while (res != NULL) {
        printf("%d%s", res->val, res->next != NULL ? " " : "");
        res = res->next;
    }
    printf("\\\n");
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* reverseKGroupIterative(ListNode* head, int k) {
    return head;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        for (int i = 0; i < n; i++) {
            int val;
            cin >> val;
            curr->next = new ListNode(val);
            curr = curr->next;
        }
        int k;
        cin >> k;
        ListNode* res = reverseKGroupIterative(dummy.next, k);
        while (res != nullptr) {
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rnk-h2',
    title: 'Reverse Nodes in Decreasing K-Group',
    difficulty: 'Hard',
    description: 'Given the head of a linked list and an integer `k`, reverse the first group of size `k`, then the next group of size `k-1`, then the next of size `k-2`, and so on, until the group size reaches 1. Any remaining nodes at the end should remain in their original order. If at any step, the remaining nodes count is less than the current group size, leave them in their original order.',
    constraints: ['The number of nodes in the list is in the range [1, 2000].', '1 <= k <= 100'],
    examples: [
      { input: 'head = [1,2,3,4,5,6,7,8,9,10], k = 3', output: '[3,2,1,5,4,6,7,8,9,10]', explanation: 'First group: 3 [1,2,3] -> reversed to [3,2,1]. Second group: 2 [4,5] -> reversed to [5,4]. Third group: 1 [6] -> reversed to [6] (no-op). Remaining [7,8,9,10] stay unchanged.' }
    ],
    testCases: [
      { input: '10\n1 2 3 4 5 6 7 8 9 10\n3', expectedOutput: '3 2 1 5 4 6 7 8 9 10', hidden: false },
      { input: '6\n1 2 3 4 5 6\n4', expectedOutput: '4 3 2 1 5 6', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_decreasing_k(head, k):
    # Write code here
    return head

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    k = int(input())
    dummy = ListNode(0)
    curr = dummy
    for v in arr:
        curr.next = ListNode(v)
        curr = curr.next
    res = reverse_decreasing_k(dummy.next, k)
    out = []
    while res:
        out.append(str(res.val))
        res = res.next
    print(" ".join(out))`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static ListNode reverseDecreasingK(ListNode head, int k) {
        return head;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;
            for (int i = 0; i < n; i++) {
                curr.next = new ListNode(sc.nextInt());
                curr = curr.next;
            }
            int k = sc.nextInt();
            ListNode res = reverseDecreasingK(dummy.next, k);
            while (res != null) {
                System.out.print(res.val + (res.next != null ? " " : ""));
                res = res.next;
            }
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* reverseDecreasingK(struct ListNode* head, int k) {
    return head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* curr = &dummy;
    for (int i = 0; i < n; i++) {
        int val;
        scanf("%d", &val);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = val;
        node->next = NULL;
        curr->next = node;
        curr = node;
    }
    int k;
    scanf("%d", &k);
    struct ListNode* res = reverseDecreasingK(dummy.next, k);
    while (res != NULL) {
        printf("%d%s", res->val, res->next != NULL ? " " : "");
        res = res->next;
    }
    printf("\\\n");
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* reverseDecreasingK(ListNode* head, int k) {
    return head;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        for (int i = 0; i < n; i++) {
            int val;
            cin >> val;
            curr->next = new ListNode(val);
            curr = curr->next;
        }
        int k;
        cin >> k;
        ListNode* res = reverseDecreasingK(dummy.next, k);
        while (res != nullptr) {
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rnk-h3',
    title: 'Reverse Nodes in Custom Sizes',
    difficulty: 'Hard',
    description: 'Given the head of a linked list and an array of custom sizes `sizes`, reverse the list in segments according to the sizes. Specifically, the first segment has size `sizes[0]`, the second segment size `sizes[1]`, etc. If the number of nodes remaining is less than the current segment size, leave them in their original order. If `sizes` is exhausted, keep all remaining nodes in their original order.',
    constraints: ['The number of nodes in the list is in the range [1, 2000].', '1 <= sizes.length <= 100', '1 <= sizes[i] <= 1000'],
    examples: [
      { input: 'head = [1,2,3,4,5,6,7], sizes = [2,3,4]', output: '[2,1,5,4,3,6,7]', explanation: 'First segment of size 2 [1,2] -> reversed to [2,1]. Second segment of size 3 [3,4,5] -> reversed to [5,4,3]. Third segment of size 4 [6,7] (less than size 4) -> left as [6,7].' }
    ],
    testCases: [
      { input: '7\n1 2 3 4 5 6 7\n3\n2 3 4', expectedOutput: '2 1 5 4 3 6 7', hidden: false },
      { input: '6\n1 2 3 4 5 6\n2\n3 2', expectedOutput: '3 2 1 5 4 6', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_custom_sizes(head, sizes):
    # Write code here
    return head

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    sz_len = int(input())
    sizes = list(map(int, input().split()))
    dummy = ListNode(0)
    curr = dummy
    for v in arr:
        curr.next = ListNode(v)
        curr = curr.next
    res = reverse_custom_sizes(dummy.next, sizes)
    out = []
    while res:
        out.append(str(res.val))
        res = res.next
    print(" ".join(out))`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static ListNode reverseCustomSizes(ListNode head, int[] sizes) {
        return head;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;
            for (int i = 0; i < n; i++) {
                curr.next = new ListNode(sc.nextInt());
                curr = curr.next;
            }
            int sz_len = sc.nextInt();
            int[] sizes = new int[sz_len];
            for (int i = 0; i < sz_len; i++) {
                sizes[i] = sc.nextInt();
            }
            ListNode res = reverseCustomSizes(dummy.next, sizes);
            while (res != null) {
                System.out.print(res.val + (res.next != null ? " " : ""));
                res = res.next;
            }
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* reverseCustomSizes(struct ListNode* head, int* sizes, int sizesSize) {
    return head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* curr = &dummy;
    for (int i = 0; i < n; i++) {
        int val;
        scanf("%d", &val);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = val;
        node->next = NULL;
        curr->next = node;
        curr = node;
    }
    int sz_len;
    if (scanf("%d", &sz_len) != 1) return 0;
    int* sizes = malloc(sz_len * sizeof(int));
    for (int i = 0; i < sz_len; i++) {
        scanf("%d", &sizes[i]);
    }
    struct ListNode* res = reverseCustomSizes(dummy.next, sizes, sz_len);
    while (res != NULL) {
        printf("%d%s", res->val, res->next != NULL ? " " : "");
        res = res->next;
    }
    printf("\\\n");
    free(sizes);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* reverseCustomSizes(ListNode* head, vector<int>& sizes) {
    return head;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        for (int i = 0; i < n; i++) {
            int val;
            cin >> val;
            curr->next = new ListNode(val);
            curr = curr->next;
        }
        int sz_len;
        cin >> sz_len;
        vector<int> sizes(sz_len);
        for (int i = 0; i < sz_len; i++) {
            cin >> sizes[i];
        }
        ListNode* res = reverseCustomSizes(dummy.next, sizes);
        while (res != nullptr) {
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rnk-h4',
    title: 'Sort List',
    difficulty: 'Hard',
    description: 'Given the head of a linked list, return the list after sorting it in ascending order. The solution must run in O(n log n) time and O(1) auxiliary space (excluding call stack space).',
    constraints: ['The number of nodes in the list is in the range [0, 5 * 10^4].', '-10^5 <= Node.val <= 10^5'],
    examples: [
      { input: 'head = [4,2,1,3]', output: '[1,2,3,4]', explanation: 'Sorted list: 1->2->3->4.' }
    ],
    testCases: [
      { input: '4\n4 2 1 3', expectedOutput: '1 2 3 4', hidden: false },
      { input: '0', expectedOutput: '', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def sort_list(head):
    # Write code here
    return head

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    dummy = ListNode(0)
    curr = dummy
    for v in arr:
        curr.next = ListNode(v)
        curr = curr.next
    res = sort_list(dummy.next)
    out = []
    while res:
        out.append(str(res.val))
        res = res.next
    print(" ".join(out))
else:
    print("")`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static ListNode sortList(ListNode head) {
        return head;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;
            for (int i = 0; i < n; i++) {
                curr.next = new ListNode(sc.nextInt());
                curr = curr.next;
            }
            ListNode res = sortList(dummy.next);
            while (res != null) {
                System.out.print(res.val + (res.next != null ? " " : ""));
                res = res.next;
            }
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* sortList(struct ListNode* head) {
    return head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* curr = &dummy;
    for (int i = 0; i < n; i++) {
        int val;
        scanf("%d", &val);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = val;
        node->next = NULL;
        curr->next = node;
        curr = node;
    }
    struct ListNode* res = sortList(dummy.next);
    while (res != NULL) {
        printf("%d%s", res->val, res->next != NULL ? " " : "");
        res = res->next;
    }
    printf("\\\n");
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* sortList(ListNode* head) {
    return head;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        for (int i = 0; i < n; i++) {
            int val;
            cin >> val;
            curr->next = new ListNode(val);
            curr = curr->next;
        }
        ListNode* res = sortList(dummy.next);
        while (res != nullptr) {
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rnk-h5',
    title: 'Swap Nodes in K-Group and Insert Palindrome Check',
    difficulty: 'Hard',
    description: 'Given the head of a linked list, reverse nodes in k-group. Then, check if the resulting list is palindromic. If yes, print "Palindrome", else print "Not Palindrome" followed by the modified list.',
    constraints: ['The number of nodes in the list is in the range [1, 5000].', '1 <= k <= NodeCount'],
    examples: [
      { input: 'head = [1,2,2,1], k = 2', output: 'Palindrome', explanation: 'Reverse in k=2 gives [2,1,1,2] which is a palindrome, so output is Palindrome.' }
    ],
    testCases: [
      { input: '4\n1 2 2 1\n2', expectedOutput: 'Palindrome', hidden: false },
      { input: '5\n1 2 3 4 5\n2', expectedOutput: 'Not Palindrome: 2 1 4 3 5', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_k_group_and_check(head, k):
    # Write code here
    return head, True

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    k = int(input())
    dummy = ListNode(0)
    curr = dummy
    for v in arr:
        curr.next = ListNode(v)
        curr = curr.next
    res, is_pal = reverse_k_group_and_check(dummy.next, k)
    if is_pal:
        print("Palindrome")
    else:
        out = []
        while res:
            out.append(str(res.val))
            res = res.next
        print("Not Palindrome: " + " ".join(out))`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static class Result {
        ListNode head;
        boolean isPal;
        Result(ListNode h, boolean p) { head = h; isPal = p; }
    }

    public static Result reverseKGroupAndCheck(ListNode head, int k) {
        return new Result(head, true);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;
            for (int i = 0; i < n; i++) {
                curr.next = new ListNode(sc.nextInt());
                curr = curr.next;
            }
            int k = sc.nextInt();
            Result res = reverseKGroupAndCheck(dummy.next, k);
            if (res.isPal) {
                System.out.println("Palindrome");
            } else {
                System.out.print("Not Palindrome: ");
                ListNode temp = res.head;
                while (temp != null) {
                    System.out.print(temp.val + (temp.next != null ? " " : ""));
                    temp = temp.next;
                }
                System.out.println();
            }
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* reverseKGroupAndCheck(struct ListNode* head, int k, bool* isPal) {
    *isPal = true;
    return head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* curr = &dummy;
    for (int i = 0; i < n; i++) {
        int val;
        scanf("%d", &val);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = val;
        node->next = NULL;
        curr->next = node;
        curr = node;
    }
    int k;
    scanf("%d", &k);
    bool isPal = false;
    struct ListNode* res = reverseKGroupAndCheck(dummy.next, k, &isPal);
    if (isPal) {
        printf("Palindrome\\n");
    } else {
        printf("Not Palindrome: ");
        while (res != NULL) {
            printf("%d%s", res->val, res->next != NULL ? " " : "");
            res = res->next;
        }
        printf("\\\n");
    }
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

pair<ListNode*, bool> reverseKGroupAndCheck(ListNode* head, int k) {
    return {head, true};
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        for (int i = 0; i < n; i++) {
            int val;
            cin >> val;
            curr->next = new ListNode(val);
            curr = curr->next;
        }
        int k;
        cin >> k;
        auto res = reverseKGroupAndCheck(dummy.next, k);
        if (res.second) {
            cout << "Palindrome\\n";
        } else {
            cout << "Not Palindrome: ";
            ListNode* temp = res.first;
            while (temp != nullptr) {
                cout << temp->val << (temp->next != nullptr ? " " : "");
                temp = temp->next;
            }
            cout << "\\\n";
        }
    }
    return 0;
}`
    }
  }
];
