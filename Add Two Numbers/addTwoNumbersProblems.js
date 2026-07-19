export const addTwoNumbersProblems = [
  // --- EASY ---
  {
    id: 'atn-e1',
    title: 'Add Two Numbers',
    difficulty: 'Easy',
    description: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.',
    constraints: ['The number of nodes in each linked list is in the range [1, 100].', '0 <= Node.val <= 9', 'It is guaranteed that the list represents a number that does not have leading zeros, except the number 0 itself.'],
    examples: [
      { input: 'l1 = [2,4,3], l2 = [5,6,4]', output: '[7,0,8]', explanation: '342 + 465 = 807.' }
    ],
    testCases: [
      { input: '3\n2 4 3\n3\n5 6 4', expectedOutput: '7 0 8', hidden: false },
      { input: '1\n0\n1\n0', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def add_two_numbers(l1, l2):
    # Write code here
    return None

n1 = int(input())
arr1 = list(map(int, input().split()))
n2 = int(input())
arr2 = list(map(int, input().split()))

dummy1 = ListNode(0)
curr = dummy1
for v in arr1:
    curr.next = ListNode(v)
    curr = curr.next

dummy2 = ListNode(0)
curr = dummy2
for v in arr2:
    curr.next = ListNode(v)
    curr = curr.next

res = add_two_numbers(dummy1.next, dummy2.next)
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
    public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        return null;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n1 = sc.nextInt();
            ListNode dummy1 = new ListNode(0);
            ListNode curr = dummy1;
            for (int i = 0; i < n1; i++) {
                curr.next = new ListNode(sc.nextInt());
                curr = curr.next;
            }
            int n2 = sc.nextInt();
            ListNode dummy2 = new ListNode(0);
            ListNode curr2 = dummy2;
            for (int i = 0; i < n2; i++) {
                curr2.next = new ListNode(sc.nextInt());
                curr2 = curr2.next;
            }
            ListNode res = addTwoNumbers(dummy1.next, dummy2.next);
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

struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    return NULL;
}

int main() {
    int n1, n2;
    if (scanf("%d", &n1) != 1) return 0;
    struct ListNode dummy1; dummy1.next = NULL;
    struct ListNode* curr = &dummy1;
    for (int i = 0; i < n1; i++) {
        int v; scanf("%d", &v);
        struct ListNode* n = malloc(sizeof(struct ListNode));
        n->val = v; n->next = NULL;
        curr->next = n; curr = n;
    }
    if (scanf("%d", &n2) != 1) return 0;
    struct ListNode dummy2; dummy2.next = NULL;
    struct ListNode* curr2 = &dummy2;
    for (int i = 0; i < n2; i++) {
        int v; scanf("%d", &v);
        struct ListNode* n = malloc(sizeof(struct ListNode));
        n->val = v; n->next = NULL;
        curr2->next = n; curr2 = n;
    }
    struct ListNode* res = addTwoNumbers(dummy1.next, dummy2.next);
    struct ListNode* temp = res;
    while (temp != NULL) {
        printf("%d%s", temp->val, temp->next != NULL ? " " : "");
        temp = temp->next;
    }
    printf("\\n");
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* addTwoNumbers(ListNode* l1, ListNode* headB) {
    return nullptr;
}

int main() {
    int n1, n2;
    if (cin >> n1) {
        ListNode dummy1(0);
        ListNode* curr = &dummy1;
        for (int i = 0; i < n1; i++) {
            int v; cin >> v;
            curr->next = new ListNode(v);
            curr = curr->next;
        }
        cin >> n2;
        ListNode dummy2(0);
        ListNode* curr2 = &dummy2;
        for (int i = 0; i < n2; i++) {
            int v; cin >> v;
            curr2->next = new ListNode(v);
            curr2 = curr2->next;
        }
        ListNode* res = addTwoNumbers(dummy1.next, dummy2.next);
        while (res != nullptr) {
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'atn-e2',
    title: 'Add Two Numbers II',
    difficulty: 'Easy',
    description: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in normal/forward order (most significant digit first). Add the two numbers and return the sum as a linked list in forward order.',
    constraints: ['The number of nodes in each linked list is in the range [1, 100].', '0 <= Node.val <= 9'],
    examples: [
      { input: 'l1 = [7,2,4,3], l2 = [5,6,4]', output: '[7,8,0,7]', explanation: '7243 + 564 = 7807.' }
    ],
    testCases: [
      { input: '4\n7 2 4 3\n3\n5 6 4', expectedOutput: '7 8 0 7', hidden: false },
      { input: '1\n0\n1\n0', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def add_two_numbers_forward(l1, l2):
    return None

n1 = int(input())
arr1 = list(map(int, input().split()))
n2 = int(input())
arr2 = list(map(int, input().split()))

dummy1 = ListNode(0)
curr = dummy1
for v in arr1:
    curr.next = ListNode(v)
    curr = curr.next

dummy2 = ListNode(0)
curr = dummy2
for v in arr2:
    curr.next = ListNode(v)
    curr = curr.next

res = add_two_numbers_forward(dummy1.next, dummy2.next)
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
    public static ListNode addTwoNumbersForward(ListNode l1, ListNode l2) {
        return null;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n1 = sc.nextInt();
            ListNode dummy1 = new ListNode(0);
            ListNode curr = dummy1;
            for (int i = 0; i < n1; i++) {
                curr.next = new ListNode(sc.nextInt());
                curr = curr.next;
            }
            int n2 = sc.nextInt();
            ListNode dummy2 = new ListNode(0);
            ListNode curr2 = dummy2;
            for (int i = 0; i < n2; i++) {
                curr2.next = new ListNode(sc.nextInt());
                curr2 = curr2.next;
            }
            ListNode res = addTwoNumbersForward(dummy1.next, dummy2.next);
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

struct ListNode* addTwoNumbersForward(struct ListNode* l1, struct ListNode* l2) {
    return NULL;
}

int main() {
    int n1, n2;
    if (scanf("%d", &n1) != 1) return 0;
    struct ListNode dummy1; dummy1.next = NULL;
    struct ListNode* curr = &dummy1;
    for (int i = 0; i < n1; i++) {
        int v; scanf("%d", &v);
        struct ListNode* n = malloc(sizeof(struct ListNode));
        n->val = v; n->next = NULL;
        curr->next = n; curr = n;
    }
    if (scanf("%d", &n2) != 1) return 0;
    struct ListNode dummy2; dummy2.next = NULL;
    struct ListNode* curr2 = &dummy2;
    for (int i = 0; i < n2; i++) {
        int v; scanf("%d", &v);
        struct ListNode* n = malloc(sizeof(struct ListNode));
        n->val = v; n->next = NULL;
        curr2->next = n; curr2 = n;
    }
    struct ListNode* res = addTwoNumbersForward(dummy1.next, dummy2.next);
    struct ListNode* temp = res;
    while (temp != NULL) {
        printf("%d%s", temp->val, temp->next != NULL ? " " : "");
        temp = temp->next;
    }
    printf("\\n");
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* addTwoNumbersForward(ListNode* l1, ListNode* l2) {
    return nullptr;
}

int main() {
    int n1, n2;
    if (cin >> n1) {
        ListNode dummy1(0);
        ListNode* curr = &dummy1;
        for (int i = 0; i < n1; i++) {
            int v; cin >> v;
            curr->next = new ListNode(v);
            curr = curr->next;
        }
        cin >> n2;
        ListNode dummy2(0);
        ListNode* curr2 = &dummy2;
        for (int i = 0; i < n2; i++) {
            int v; cin >> v;
            curr2->next = new ListNode(v);
            curr2 = curr2->next;
        }
        ListNode* res = addTwoNumbersForward(dummy1.next, dummy2.next);
        while (res != nullptr) {
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'atn-e3',
    title: 'Add 1 to a Linked List Number',
    difficulty: 'Easy',
    description: 'A number is represented by a linked list in reverse order. Add 1 to this number and return the resulting linked list in reverse order.',
    constraints: ['The number of nodes in the list is in the range [1, 100].', '0 <= Node.val <= 9'],
    examples: [
      { input: 'head = [9,9,9]', output: '[0,0,0,1]', explanation: '999 + 1 = 1000.' }
    ],
    testCases: [
      { input: '3\n9 9 9', expectedOutput: '0 0 0 1', hidden: false },
      { input: '1\n0', expectedOutput: '1', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def add_one(head):
    return None

n = int(input())
arr = list(map(int, input().split()))
dummy = ListNode(0)
curr = dummy
for v in arr:
    curr.next = ListNode(v)
    curr = curr.next

res = add_one(dummy.next)
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
    public static ListNode addOne(ListNode head) {
        return null;
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
            ListNode res = addOne(dummy.next);
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

struct ListNode* addOne(struct ListNode* head) {
    return NULL;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy; dummy.next = NULL;
    struct ListNode* curr = &dummy;
    for (int i = 0; i < n; i++) {
        int v; scanf("%d", &v);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = v; node->next = NULL;
        curr->next = node; curr = node;
    }
    struct ListNode* res = addOne(dummy.next);
    struct ListNode* temp = res;
    while (temp != NULL) {
        printf("%d%s", temp->val, temp->next != NULL ? " " : "");
        temp = temp->next;
    }
    printf("\\n");
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* addOne(ListNode* head) {
    return nullptr;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        for (int i = 0; i < n; i++) {
            int v; cin >> v;
            curr->next = new ListNode(v);
            curr = curr->next;
        }
        ListNode* res = addOne(dummy.next);
        while (res != nullptr) {
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'atn-e4',
    title: 'Sum Linked List Values',
    difficulty: 'Easy',
    description: 'Given the head of a singly linked list, return the sum of all elements in the linked list.',
    constraints: ['The number of nodes in the list is in the range [0, 5000].', '-10^5 <= Node.val <= 10^5'],
    examples: [
      { input: 'head = [1,2,3,4]', output: '10', explanation: '1 + 2 + 3 + 4 = 10.' }
    ],
    testCases: [
      { input: '4\n1 2 3 4', expectedOutput: '10', hidden: false },
      { input: '0', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def sum_list(head):
    return 0

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    dummy = ListNode(0)
    curr = dummy
    for v in arr:
        curr.next = ListNode(v)
        curr = curr.next
    print(sum_list(dummy.next))
else:
    print(0)`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static int sumList(ListNode head) {
        return 0;
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
            System.out.println(sumList(dummy.next));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

int sumList(struct ListNode* head) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy; dummy.next = NULL;
    struct ListNode* curr = &dummy;
    for (int i = 0; i < n; i++) {
        int v; scanf("%d", &v);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = v; node->next = NULL;
        curr->next = node; curr = node;
    }
    printf("%d\\n", sumList(dummy.next));
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

int sumList(ListNode* head) {
    return 0;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        for (int i = 0; i < n; i++) {
            int v; cin >> v;
            curr->next = new ListNode(v);
            curr = curr->next;
        }
        cout << sumList(dummy.next) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'atn-e5',
    title: 'Double a Linked List Number',
    difficulty: 'Easy',
    description: 'A number is represented by a linked list in reverse order. Double this number and return the resulting linked list in reverse order.',
    constraints: ['The number of nodes in the list is in the range [1, 100].', '0 <= Node.val <= 9'],
    examples: [
      { input: 'head = [9,9]', output: '[8,9,1]', explanation: '99 * 2 = 198.' }
    ],
    testCases: [
      { input: '2\n9 9', expectedOutput: '8 9 1', hidden: false },
      { input: '1\n0', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def double_number(head):
    return None

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    dummy = ListNode(0)
    curr = dummy
    for v in arr:
        curr.next = ListNode(v)
        curr = curr.next
    res = double_number(dummy.next)
    out = []
    while res:
        out.append(str(res.val))
        res = res.next
    print(" ".join(out))
else:
    print("0")`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static ListNode doubleNumber(ListNode head) {
        return null;
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
            ListNode res = doubleNumber(dummy.next);
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

struct ListNode* doubleNumber(struct ListNode* head) {
    return NULL;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy; dummy.next = NULL;
    struct ListNode* curr = &dummy;
    for (int i = 0; i < n; i++) {
        int v; scanf("%d", &v);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = v; node->next = NULL;
        curr->next = node; curr = node;
    }
    struct ListNode* res = doubleNumber(dummy.next);
    struct ListNode* temp = res;
    while (temp != NULL) {
        printf("%d%s", temp->val, temp->next != NULL ? " " : "");
        temp = temp->next;
    }
    printf("\\n");
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* doubleNumber(ListNode* head) {
    return nullptr;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        for (int i = 0; i < n; i++) {
            int v; cin >> v;
            curr->next = new ListNode(v);
            curr = curr->next;
        }
        ListNode* res = doubleNumber(dummy.next);
        while (res != nullptr) {
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  // --- MEDIUM ---
  {
    id: 'atn-m1',
    title: 'Subtract Two Numbers',
    difficulty: 'Medium',
    description: 'You are given two non-empty linked lists representing two non-negative integers in reverse order. Subtract `l2` from `l1` (guaranteed `l1 >= l2`) and return the resulting linked list in reverse order. Remove any leading zeros from the final result (e.g. 003 should be represented as just 3, which is 3 -> NULL).',
    constraints: ['The number of nodes in each linked list is in the range [1, 100].', '0 <= Node.val <= 9', 'l1 >= l2'],
    examples: [
      { input: 'l1 = [5,4,3], l2 = [2,1]', output: '[3,3,3]', explanation: '345 - 12 = 333.' }
    ],
    testCases: [
      { input: '3\n5 4 3\n2\n2 1', expectedOutput: '3 3 3', hidden: false },
      { input: '3\n0 0 1\n3\n0 0 1', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def subtract_two_numbers(l1, l2):
    return None

n1 = int(input())
arr1 = list(map(int, input().split()))
n2 = int(input())
arr2 = list(map(int, input().split()))

dummy1 = ListNode(0)
curr = dummy1
for v in arr1:
    curr.next = ListNode(v)
    curr = curr.next

dummy2 = ListNode(0)
curr = dummy2
for v in arr2:
    curr.next = ListNode(v)
    curr = curr.next

res = subtract_two_numbers(dummy1.next, dummy2.next)
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
    public static ListNode subtractTwoNumbers(ListNode l1, ListNode l2) {
        return null;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n1 = sc.nextInt();
            ListNode dummy1 = new ListNode(0);
            ListNode curr = dummy1;
            for (int i = 0; i < n1; i++) {
                curr.next = new ListNode(sc.nextInt());
                curr = curr.next;
            }
            int n2 = sc.nextInt();
            ListNode dummy2 = new ListNode(0);
            ListNode curr2 = dummy2;
            for (int i = 0; i < n2; i++) {
                curr2.next = new ListNode(sc.nextInt());
                curr2 = curr2.next;
            }
            ListNode res = subtractTwoNumbers(dummy1.next, dummy2.next);
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

struct ListNode* subtractTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    return NULL;
}

int main() {
    int n1, n2;
    if (scanf("%d", &n1) != 1) return 0;
    struct ListNode dummy1; dummy1.next = NULL;
    struct ListNode* curr = &dummy1;
    for (int i = 0; i < n1; i++) {
        int v; scanf("%d", &v);
        struct ListNode* n = malloc(sizeof(struct ListNode));
        n->val = v; n->next = NULL;
        curr->next = n; curr = n;
    }
    if (scanf("%d", &n2) != 1) return 0;
    struct ListNode dummy2; dummy2.next = NULL;
    struct ListNode* curr2 = &dummy2;
    for (int i = 0; i < n2; i++) {
        int v; scanf("%d", &v);
        struct ListNode* n = malloc(sizeof(struct ListNode));
        n->val = v; n->next = NULL;
        curr2->next = n; curr2 = n;
    }
    struct ListNode* res = subtractTwoNumbers(dummy1.next, dummy2.next);
    struct ListNode* temp = res;
    while (temp != NULL) {
        printf("%d%s", temp->val, temp->next != NULL ? " " : "");
        temp = temp->next;
    }
    printf("\\n");
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* subtractTwoNumbers(ListNode* l1, ListNode* l2) {
    return nullptr;
}

int main() {
    int n1, n2;
    if (cin >> n1) {
        ListNode dummy1(0);
        ListNode* curr = &dummy1;
        for (int i = 0; i < n1; i++) {
            int v; cin >> v;
            curr->next = new ListNode(v);
            curr = curr->next;
        }
        cin >> n2;
        ListNode dummy2(0);
        ListNode* curr2 = &dummy2;
        for (int i = 0; i < n2; i++) {
            int v; cin >> v;
            curr2->next = new ListNode(v);
            curr2 = curr2->next;
        }
        ListNode* res = subtractTwoNumbers(dummy1.next, dummy2.next);
        while (res != nullptr) {
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'atn-m2',
    title: 'Multiply Linked List by Single Digit',
    difficulty: 'Medium',
    description: 'A number is represented by a linked list in reverse order. Multiply this number by a single-digit integer `d` (`0 <= d <= 9`) and return the resulting linked list in reverse order.',
    constraints: ['The number of nodes in the list is in the range [1, 100].', '0 <= Node.val <= 9', '0 <= d <= 9'],
    examples: [
      { input: 'head = [2,4,3], d = 3', output: '[6,2,0,1]', explanation: '342 * 3 = 1026.' }
    ],
    testCases: [
      { input: '3\n2 4 3\n3', expectedOutput: '6 2 0 1', hidden: false },
      { input: '1\n5\n0', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def multiply_by_digit(head, d):
    return None

n = int(input())
arr = list(map(int, input().split()))
d = int(input())

dummy = ListNode(0)
curr = dummy
for v in arr:
    curr.next = ListNode(v)
    curr = curr.next

res = multiply_by_digit(dummy.next, d)
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
    public static ListNode multiplyByDigit(ListNode head, int d) {
        return null;
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
            int d = sc.nextInt();
            ListNode res = multiplyByDigit(dummy.next, d);
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

struct ListNode* multiplyByDigit(struct ListNode* head, int d) {
    return NULL;
}

int main() {
    int n, d;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy; dummy.next = NULL;
    struct ListNode* curr = &dummy;
    for (int i = 0; i < n; i++) {
        int v; scanf("%d", &v);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = v; node->next = NULL;
        curr->next = node; curr = node;
    }
    scanf("%d", &d);
    struct ListNode* res = multiplyByDigit(dummy.next, d);
    struct ListNode* temp = res;
    while (temp != NULL) {
        printf("%d%s", temp->val, temp->next != NULL ? " " : "");
        temp = temp->next;
    }
    printf("\\n");
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* multiplyByDigit(ListNode* head, int d) {
    return nullptr;
}

int main() {
    int n, d;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        for (int i = 0; i < n; i++) {
            int v; cin >> v;
            curr->next = new ListNode(v);
            curr = curr->next;
        }
        cin >> d;
        ListNode* res = multiplyByDigit(dummy.next, d);
        while (res != nullptr) {
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'atn-m3',
    title: 'Sum List Odd and Even digit positions',
    difficulty: 'Medium',
    description: 'Given the head of a linked list, find the sum of node values at odd positions and the sum of node values at even positions (1-indexed). Return them as a new linked list containing exactly two nodes: [odd_sum, even_sum].',
    constraints: ['The number of nodes in the list is in the range [0, 5000].', '-10^5 <= Node.val <= 10^5'],
    examples: [
      { input: 'head = [1,2,3,4,5]', output: '[9,6]', explanation: 'Odds: 1 + 3 + 5 = 9. Evens: 2 + 4 = 6.' }
    ],
    testCases: [
      { input: '5\n1 2 3 4 5', expectedOutput: '9 6', hidden: false },
      { input: '0', expectedOutput: '0 0', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def sum_odd_even(head):
    return None

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    dummy = ListNode(0)
    curr = dummy
    for v in arr:
        curr.next = ListNode(v)
        curr = curr.next
    res = sum_odd_even(dummy.next)
    out = []
    while res:
        out.append(str(res.val))
        res = res.next
    print(" ".join(out))
else:
    print("0 0")`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static ListNode sumOddEven(ListNode head) {
        return null;
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
            ListNode res = sumOddEven(dummy.next);
            while (res != null) {
                System.out.print(res.val + (res.next != null ? " " : ""));
                res = res.next;
            }
            System.out.println();
        } else {
            System.out.println("0 0");
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* sumOddEven(struct ListNode* head) {
    return NULL;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) {
        printf("0 0\\n");
        return 0;
    }
    struct ListNode dummy; dummy.next = NULL;
    struct ListNode* curr = &dummy;
    for (int i = 0; i < n; i++) {
        int v; scanf("%d", &v);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = v; node->next = NULL;
        curr->next = node; curr = node;
    }
    struct ListNode* res = sumOddEven(dummy.next);
    struct ListNode* temp = res;
    while (temp != NULL) {
        printf("%d%s", temp->val, temp->next != NULL ? " " : "");
        temp = temp->next;
    }
    printf("\\n");
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* sumOddEven(ListNode* head) {
    return nullptr;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        for (int i = 0; i < n; i++) {
            int v; cin >> v;
            curr->next = new ListNode(v);
            curr = curr->next;
        }
        ListNode* res = sumOddEven(dummy.next);
        while (res != nullptr) {
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\n";
    } else {
        cout << "0 0\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'atn-m4',
    title: 'Add Binary Numbers in Linked List',
    difficulty: 'Medium',
    description: 'You are given two non-empty linked lists representing two non-negative binary integers in reverse order. Add the two binary numbers and return the sum as a binary linked list in reverse order.',
    constraints: ['The number of nodes in each linked list is in the range [1, 100].', 'Node.val is 0 or 1'],
    examples: [
      { input: 'l1 = [1,1,0], l2 = [1,0,1]', output: '[0,0,0,1]', explanation: '3 + 5 = 8 (which is 0->0->0->1 in binary reverse).' }
    ],
    testCases: [
      { input: '3\n1 1 0\n3\n1 0 1', expectedOutput: '0 0 0 1', hidden: false },
      { input: '1\n0\n1\n0', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def add_binary_lists(l1, l2):
    return None

n1 = int(input())
arr1 = list(map(int, input().split()))
n2 = int(input())
arr2 = list(map(int, input().split()))

dummy1 = ListNode(0)
curr = dummy1
for v in arr1:
    curr.next = ListNode(v)
    curr = curr.next

dummy2 = ListNode(0)
curr = dummy2
for v in arr2:
    curr.next = ListNode(v)
    curr = curr.next

res = add_binary_lists(dummy1.next, dummy2.next)
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
    public static ListNode addBinaryLists(ListNode l1, ListNode l2) {
        return null;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n1 = sc.nextInt();
            ListNode dummy1 = new ListNode(0);
            ListNode curr = dummy1;
            for (int i = 0; i < n1; i++) {
                curr.next = new ListNode(sc.nextInt());
                curr = curr.next;
            }
            int n2 = sc.nextInt();
            ListNode dummy2 = new ListNode(0);
            ListNode curr2 = dummy2;
            for (int i = 0; i < n2; i++) {
                curr2.next = new ListNode(sc.nextInt());
                curr2 = curr2.next;
            }
            ListNode res = addBinaryLists(dummy1.next, dummy2.next);
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

struct ListNode* addBinaryLists(struct ListNode* l1, struct ListNode* l2) {
    return NULL;
}

int main() {
    int n1, n2;
    if (scanf("%d", &n1) != 1) return 0;
    struct ListNode dummy1; dummy1.next = NULL;
    struct ListNode* curr = &dummy1;
    for (int i = 0; i < n1; i++) {
        int v; scanf("%d", &v);
        struct ListNode* n = malloc(sizeof(struct ListNode));
        n->val = v; n->next = NULL;
        curr->next = n; curr = n;
    }
    if (scanf("%d", &n2) != 1) return 0;
    struct ListNode dummy2; dummy2.next = NULL;
    struct ListNode* curr2 = &dummy2;
    for (int i = 0; i < n2; i++) {
        int v; scanf("%d", &v);
        struct ListNode* n = malloc(sizeof(struct ListNode));
        n->val = v; n->next = NULL;
        curr2->next = n; curr2 = n;
    }
    struct ListNode* res = addBinaryLists(dummy1.next, dummy2.next);
    struct ListNode* temp = res;
    while (temp != NULL) {
        printf("%d%s", temp->val, temp->next != NULL ? " " : "");
        temp = temp->next;
    }
    printf("\\n");
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* addBinaryLists(ListNode* l1, ListNode* l2) {
    return nullptr;
}

int main() {
    int n1, n2;
    if (cin >> n1) {
        ListNode dummy1(0);
        ListNode* curr = &dummy1;
        for (int i = 0; i < n1; i++) {
            int v; cin >> v;
            curr->next = new ListNode(v);
            curr = curr->next;
        }
        cin >> n2;
        ListNode dummy2(0);
        ListNode* curr2 = &dummy2;
        for (int i = 0; i < n2; i++) {
            int v; cin >> v;
            curr2->next = new ListNode(v);
            curr2 = curr2->next;
        }
        ListNode* res = addBinaryLists(dummy1.next, dummy2.next);
        while (res != nullptr) {
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'atn-m5',
    title: 'Add Numbers in Base B',
    difficulty: 'Medium',
    description: 'You are given two non-empty linked lists representing two non-negative integers in reverse order. Add the two numbers in base `B` and return the sum as a linked list in reverse order.',
    constraints: ['The number of nodes in each linked list is in the range [1, 100].', '2 <= B <= 16', '0 <= Node.val < B'],
    examples: [
      { input: 'l1 = [7,7], l2 = [1], B = 8', output: '[0,0,1]', explanation: '77 (base 8) + 1 (base 8) = 100 (base 8).' }
    ],
    testCases: [
      { input: '2\n7 7\n1\n1\n8', expectedOutput: '0 0 1', hidden: false },
      { input: '3\n9 1 1\n3\n9 2 2\n16', expectedOutput: '2 4 3', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def add_in_base_b(l1, l2, b):
    return None

n1 = int(input())
arr1 = list(map(int, input().split()))
n2 = int(input())
arr2 = list(map(int, input().split()))
b = int(input())

dummy1 = ListNode(0)
curr = dummy1
for v in arr1:
    curr.next = ListNode(v)
    curr = curr.next

dummy2 = ListNode(0)
curr = dummy2
for v in arr2:
    curr.next = ListNode(v)
    curr = curr.next

res = add_in_base_b(dummy1.next, dummy2.next, b)
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
    public static ListNode addInBaseB(ListNode l1, ListNode l2, int b) {
        return null;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n1 = sc.nextInt();
            ListNode dummy1 = new ListNode(0);
            ListNode curr = dummy1;
            for (int i = 0; i < n1; i++) {
                curr.next = new ListNode(sc.nextInt());
                curr = curr.next;
            }
            int n2 = sc.nextInt();
            ListNode dummy2 = new ListNode(0);
            ListNode curr2 = dummy2;
            for (int i = 0; i < n2; i++) {
                curr2.next = new ListNode(sc.nextInt());
                curr2 = curr2.next;
            }
            int b = sc.nextInt();
            ListNode res = addInBaseB(dummy1.next, dummy2.next, b);
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

struct ListNode* addInBaseB(struct ListNode* l1, struct ListNode* l2, int b) {
    return NULL;
}

int main() {
    int n1, n2, b;
    if (scanf("%d", &n1) != 1) return 0;
    struct ListNode dummy1; dummy1.next = NULL;
    struct ListNode* curr = &dummy1;
    for (int i = 0; i < n1; i++) {
        int v; scanf("%d", &v);
        struct ListNode* n = malloc(sizeof(struct ListNode));
        n->val = v; n->next = NULL;
        curr->next = n; curr = n;
    }
    if (scanf("%d", &n2) != 1) return 0;
    struct ListNode dummy2; dummy2.next = NULL;
    struct ListNode* curr2 = &dummy2;
    for (int i = 0; i < n2; i++) {
        int v; scanf("%d", &v);
        struct ListNode* n = malloc(sizeof(struct ListNode));
        n->val = v; n->next = NULL;
        curr2->next = n; curr2 = n;
    }
    scanf("%d", &b);
    struct ListNode* res = addInBaseB(dummy1.next, dummy2.next, b);
    struct ListNode* temp = res;
    while (temp != NULL) {
        printf("%d%s", temp->val, temp->next != NULL ? " " : "");
        temp = temp->next;
    }
    printf("\\n");
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* addInBaseB(ListNode* l1, ListNode* l2, int b) {
    return nullptr;
}

int main() {
    int n1, n2, b;
    if (cin >> n1) {
        ListNode dummy1(0);
        ListNode* curr = &dummy1;
        for (int i = 0; i < n1; i++) {
            int v; cin >> v;
            curr->next = new ListNode(v);
            curr = curr->next;
        }
        cin >> n2;
        ListNode dummy2(0);
        ListNode* curr2 = &dummy2;
        for (int i = 0; i < n2; i++) {
            int v; cin >> v;
            curr2->next = new ListNode(v);
            curr2 = curr2->next;
        }
        cin >> b;
        ListNode* res = addInBaseB(dummy1.next, dummy2.next, b);
        while (res != nullptr) {
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  // --- HARD ---
  {
    id: 'atn-h1',
    title: 'Multiply Two Linked Lists',
    difficulty: 'Hard',
    description: 'Multiply two numbers represented by linked lists in reverse order and return the product as a linked list in reverse order. Remove any leading zeros from the product.',
    constraints: ['The number of nodes in each linked list is in the range [1, 50].', '0 <= Node.val <= 9'],
    examples: [
      { input: 'l1 = [2,4], l2 = [3]', output: '[6,2,1]', explanation: '42 * 3 = 126.' }
    ],
    testCases: [
      { input: '2\n2 4\n1\n3', expectedOutput: '6 2 1', hidden: false },
      { input: '2\n0 1\n1\n0', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def multiply_two_lists(l1, l2):
    return None

n1 = int(input())
arr1 = list(map(int, input().split()))
n2 = int(input())
arr2 = list(map(int, input().split()))

dummy1 = ListNode(0)
curr = dummy1
for v in arr1:
    curr.next = ListNode(v)
    curr = curr.next

dummy2 = ListNode(0)
curr = dummy2
for v in arr2:
    curr.next = ListNode(v)
    curr = curr.next

res = multiply_two_lists(dummy1.next, dummy2.next)
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
    public static ListNode multiplyTwoLists(ListNode l1, ListNode l2) {
        return null;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n1 = sc.nextInt();
            ListNode dummy1 = new ListNode(0);
            ListNode curr = dummy1;
            for (int i = 0; i < n1; i++) {
                curr.next = new ListNode(sc.nextInt());
                curr = curr.next;
            }
            int n2 = sc.nextInt();
            ListNode dummy2 = new ListNode(0);
            ListNode curr2 = dummy2;
            for (int i = 0; i < n2; i++) {
                curr2.next = new ListNode(sc.nextInt());
                curr2 = curr2.next;
            }
            ListNode res = multiplyTwoLists(dummy1.next, dummy2.next);
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

struct ListNode* multiplyTwoLists(struct ListNode* l1, struct ListNode* l2) {
    return NULL;
}

int main() {
    int n1, n2;
    if (scanf("%d", &n1) != 1) return 0;
    struct ListNode dummy1; dummy1.next = NULL;
    struct ListNode* curr = &dummy1;
    for (int i = 0; i < n1; i++) {
        int v; scanf("%d", &v);
        struct ListNode* n = malloc(sizeof(struct ListNode));
        n->val = v; n->next = NULL;
        curr->next = n; curr = n;
    }
    if (scanf("%d", &n2) != 1) return 0;
    struct ListNode dummy2; dummy2.next = NULL;
    struct ListNode* curr2 = &dummy2;
    for (int i = 0; i < n2; i++) {
        int v; scanf("%d", &v);
        struct ListNode* n = malloc(sizeof(struct ListNode));
        n->val = v; n->next = NULL;
        curr2->next = n; curr2 = n;
    }
    struct ListNode* res = multiplyTwoLists(dummy1.next, dummy2.next);
    struct ListNode* temp = res;
    while (temp != NULL) {
        printf("%d%s", temp->val, temp->next != NULL ? " " : "");
        temp = temp->next;
    }
    printf("\\n");
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* multiplyTwoLists(ListNode* l1, ListNode* l2) {
    return nullptr;
}

int main() {
    int n1, n2;
    if (cin >> n1) {
        ListNode dummy1(0);
        ListNode* curr = &dummy1;
        for (int i = 0; i < n1; i++) {
            int v; cin >> v;
            curr->next = new ListNode(v);
            curr = curr->next;
        }
        cin >> n2;
        ListNode dummy2(0);
        ListNode* curr2 = &dummy2;
        for (int i = 0; i < n2; i++) {
            int v; cin >> v;
            curr2->next = new ListNode(v);
            curr2 = curr2->next;
        }
        ListNode* res = multiplyTwoLists(dummy1.next, dummy2.next);
        while (res != nullptr) {
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'atn-h2',
    title: 'Add Three Numbers',
    difficulty: 'Hard',
    description: 'You are given three non-empty linked lists representing three non-negative integers in reverse order. Add the three numbers and return the sum as a linked list in reverse order.',
    constraints: ['The number of nodes in each linked list is in the range [1, 100].', '0 <= Node.val <= 9'],
    examples: [
      { input: 'l1 = [2,4,3], l2 = [5,6,4], l3 = [1,1,1]', output: '[8,1,9]', explanation: '342 + 465 + 111 = 918.' }
    ],
    testCases: [
      { input: '3\n2 4 3\n3\n5 6 4\n3\n1 1 1', expectedOutput: '8 1 9', hidden: false },
      { input: '1\n9\n1\n9\n1\n9', expectedOutput: '7 2', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def add_three_numbers(l1, l2, l3):
    return None

n1 = int(input())
arr1 = list(map(int, input().split()))
n2 = int(input())
arr2 = list(map(int, input().split()))
n3 = int(input())
arr3 = list(map(int, input().split()))

dummy1 = ListNode(0)
curr = dummy1
for v in arr1:
    curr.next = ListNode(v)
    curr = curr.next

dummy2 = ListNode(0)
curr = dummy2
for v in arr2:
    curr.next = ListNode(v)
    curr = curr.next

dummy3 = ListNode(0)
curr = dummy3
for v in arr3:
    curr.next = ListNode(v)
    curr = curr.next

res = add_three_numbers(dummy1.next, dummy2.next, dummy3.next)
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
    public static ListNode addThreeNumbers(ListNode l1, ListNode l2, ListNode l3) {
        return null;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n1 = sc.nextInt();
            ListNode dummy1 = new ListNode(0);
            ListNode curr = dummy1;
            for (int i = 0; i < n1; i++) {
                curr.next = new ListNode(sc.nextInt());
                curr = curr.next;
            }
            int n2 = sc.nextInt();
            ListNode dummy2 = new ListNode(0);
            ListNode curr2 = dummy2;
            for (int i = 0; i < n2; i++) {
                curr2.next = new ListNode(sc.nextInt());
                curr2 = curr2.next;
            }
            int n3 = sc.nextInt();
            ListNode dummy3 = new ListNode(0);
            ListNode curr3 = dummy3;
            for (int i = 0; i < n3; i++) {
                curr3.next = new ListNode(sc.nextInt());
                curr3 = curr3.next;
            }
            ListNode res = addThreeNumbers(dummy1.next, dummy2.next, dummy3.next);
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

struct ListNode* addThreeNumbers(struct ListNode* l1, struct ListNode* l2, struct ListNode* l3) {
    return NULL;
}

int main() {
    int n1, n2, n3;
    if (scanf("%d", &n1) != 1) return 0;
    struct ListNode dummy1; dummy1.next = NULL;
    struct ListNode* curr = &dummy1;
    for (int i = 0; i < n1; i++) {
        int v; scanf("%d", &v);
        struct ListNode* n = malloc(sizeof(struct ListNode));
        n->val = v; n->next = NULL;
        curr->next = n; curr = n;
    }
    if (scanf("%d", &n2) != 1) return 0;
    struct ListNode dummy2; dummy2.next = NULL;
    struct ListNode* curr2 = &dummy2;
    for (int i = 0; i < n2; i++) {
        int v; scanf("%d", &v);
        struct ListNode* n = malloc(sizeof(struct ListNode));
        n->val = v; n->next = NULL;
        curr2->next = n; curr2 = n;
    }
    if (scanf("%d", &n3) != 1) return 0;
    struct ListNode dummy3; dummy3.next = NULL;
    struct ListNode* curr3 = &dummy3;
    for (int i = 0; i < n3; i++) {
        int v; scanf("%d", &v);
        struct ListNode* n = malloc(sizeof(struct ListNode));
        n->val = v; n->next = NULL;
        curr3->next = n; curr3 = n;
    }
    struct ListNode* res = addThreeNumbers(dummy1.next, dummy2.next, dummy3.next);
    struct ListNode* temp = res;
    while (temp != NULL) {
        printf("%d%s", temp->val, temp->next != NULL ? " " : "");
        temp = temp->next;
    }
    printf("\\n");
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* addThreeNumbers(ListNode* l1, ListNode* l2, ListNode* l3) {
    return nullptr;
}

int main() {
    int n1, n2, n3;
    if (cin >> n1) {
        ListNode dummy1(0);
        ListNode* curr = &dummy1;
        for (int i = 0; i < n1; i++) {
            int v; cin >> v;
            curr->next = new ListNode(v);
            curr = curr->next;
        }
        cin >> n2;
        ListNode dummy2(0);
        ListNode* curr2 = &dummy2;
        for (int i = 0; i < n2; i++) {
            int v; cin >> v;
            curr2->next = new ListNode(v);
            curr2 = curr2->next;
        }
        cin >> n3;
        ListNode dummy3(0);
        ListNode* curr3 = &dummy3;
        for (int i = 0; i < n3; i++) {
            int v; cin >> v;
            curr3->next = new ListNode(v);
            curr3 = curr3->next;
        }
        ListNode* res = addThreeNumbers(dummy1.next, dummy2.next, dummy3.next);
        while (res != nullptr) {
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'atn-h3',
    title: 'Factorial of N in Linked List',
    difficulty: 'Hard',
    description: 'Given an integer `N`, compute the factorial of `N` and return the result represented as a linked list in reverse order (least significant digit first).',
    constraints: ['0 <= N <= 100'],
    examples: [
      { input: 'N = 5', output: '[0,2,1]', explanation: '5! = 120 (reverse: 0->2->1).' }
    ],
    testCases: [
      { input: '5', expectedOutput: '0 2 1', hidden: false },
      { input: '0', expectedOutput: '1', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def factorial_list(n):
    return None

num = int(input())
res = factorial_list(num)
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
    public static ListNode factorialList(int n) {
        return null;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode res = factorialList(n);
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

struct ListNode* factorialList(int n) {
    return NULL;
}

int main() {
    int n;
    if (scanf("%d", &n) == 1) {
        struct ListNode* res = factorialList(n);
        struct ListNode* temp = res;
        while (temp != NULL) {
            printf("%d%s", temp->val, temp->next != NULL ? " " : "");
            temp = temp->next;
        }
        printf("\\n");
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

ListNode* factorialList(int n) {
    return nullptr;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode* res = factorialList(n);
        while (res != nullptr) {
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'atn-h4',
    title: 'Fibonacci in Linked List',
    difficulty: 'Hard',
    description: 'Given an integer `N`, compute the N-th Fibonacci number (where F(0)=0, F(1)=1, etc.) and return the result represented as a linked list in reverse order.',
    constraints: ['0 <= N <= 200'],
    examples: [
      { input: 'N = 10', output: '[5,5]', explanation: 'F(10) = 55 (reverse: 5->5).' }
    ],
    testCases: [
      { input: '10', expectedOutput: '5 5', hidden: false },
      { input: '0', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def fibonacci_list(n):
    return None

num = int(input())
res = fibonacci_list(num)
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
    public static ListNode fibonacciList(int n) {
        return null;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode res = fibonacciList(n);
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

struct ListNode* fibonacciList(int n) {
    return NULL;
}

int main() {
    int n;
    if (scanf("%d", &n) == 1) {
        struct ListNode* res = fibonacciList(n);
        struct ListNode* temp = res;
        while (temp != NULL) {
            printf("%d%s", temp->val, temp->next != NULL ? " " : "");
            temp = temp->next;
        }
        printf("\\n");
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

ListNode* fibonacciList(int n) {
    return nullptr;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode* res = fibonacciList(n);
        while (res != nullptr) {
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'atn-h5',
    title: 'Add Two Decimal Numbers',
    difficulty: 'Hard',
    description: 'You are given two floating point numbers represented by linked lists. Each node contains a single digit, and the lists are represented as `l1_integer` and `l1_fractional`, and `l2_integer` and `l2_fractional` (stored in normal order for integer parts, and forward order for fractional parts). Add them and print the final number as "integer_part.fractional_part". Remove trailing zeros from the fractional part.',
    constraints: ['Each part has at most 50 nodes.', 'Digits are in range [0, 9]'],
    examples: [
      { input: '12.35 + 4.8 = 17.15', output: '17.15', explanation: 'Adding float representations.' }
    ],
    testCases: [
      { input: '2\n1 2\n2\n3 5\n1\n4\n1\n8', expectedOutput: '17.15', hidden: false },
      { input: '1\n0\n1\n5\n1\n0\n1\n5', expectedOutput: '1.0', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def add_decimals(int1, frac1, int2, frac2):
    return "", ""

# Read input
n1_int = int(input())
arr1_int = list(map(int, input().split())) if n1_int > 0 else []
n1_frac = int(input())
arr1_frac = list(map(int, input().split())) if n1_frac > 0 else []
n2_int = int(input())
arr2_int = list(map(int, input().split())) if n2_int > 0 else []
n2_frac = int(input())
arr2_frac = list(map(int, input().split())) if n2_frac > 0 else []

def build_list(arr):
    dummy = ListNode(0)
    curr = dummy
    for v in arr:
        curr.next = ListNode(v)
        curr = curr.next
    return dummy.next

int_part, frac_part = add_decimals(build_list(arr1_int), build_list(arr1_frac), build_list(arr2_int), build_list(arr2_frac))
print(f"{int_part}.{frac_part}")`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static String[] addDecimals(ListNode int1, ListNode frac1, ListNode int2, ListNode frac2) {
        return new String[]{"", ""};
    }

    private static ListNode buildList(Scanner sc, int n) {
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        for (int i = 0; i < n; i++) {
            curr.next = new ListNode(sc.nextInt());
            curr = curr.next;
        }
        return dummy.next;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n1 = sc.nextInt();
            ListNode int1 = buildList(sc, n1);
            int n2 = sc.nextInt();
            ListNode frac1 = buildList(sc, n2);
            int n3 = sc.nextInt();
            ListNode int2 = buildList(sc, n3);
            int n4 = sc.nextInt();
            ListNode frac2 = buildList(sc, n4);
            
            String[] res = addDecimals(int1, frac1, int2, frac2);
            System.out.println(res[0] + "." + res[1]);
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* buildList(int n) {
    struct ListNode dummy; dummy.next = NULL;
    struct ListNode* curr = &dummy;
    for (int i = 0; i < n; i++) {
        int v; scanf("%d", &v);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = v; node->next = NULL;
        curr->next = node; curr = node;
    }
    return dummy.next;
}

// Result will be printed by the caller
void addDecimals(struct ListNode* int1, struct ListNode* frac1, struct ListNode* int2, struct ListNode* frac2) {
    // print result in format %s.%s\\n
}

int main() {
    int n1, n2, n3, n4;
    if (scanf("%d", &n1) != 1) return 0;
    struct ListNode* int1 = buildList(n1);
    if (scanf("%d", &n2) != 1) return 0;
    struct ListNode* frac1 = buildList(n2);
    if (scanf("%d", &n3) != 1) return 0;
    struct ListNode* int2 = buildList(n3);
    if (scanf("%d", &n4) != 1) return 0;
    struct ListNode* frac2 = buildList(n4);
    addDecimals(int1, frac1, int2, frac2);
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* buildList(int n) {
    ListNode dummy(0);
    ListNode* curr = &dummy;
    for (int i = 0; i < n; i++) {
        int v; cin >> v;
        curr->next = new ListNode(v);
        curr = curr->next;
    }
    return dummy.next;
}

void addDecimals(ListNode* int1, ListNode* frac1, ListNode* int2, ListNode* frac2) {
    // print formatted string
}

int main() {
    int n1, n2, n3, n4;
    if (cin >> n1) {
        ListNode* int1 = buildList(n1);
        cin >> n2;
        ListNode* frac1 = buildList(n2);
        cin >> n3;
        ListNode* int2 = buildList(n3);
        cin >> n4;
        ListNode* frac2 = buildList(n4);
        addDecimals(int1, frac1, int2, frac2);
    }
    return 0;
}`
    }
  }
];
