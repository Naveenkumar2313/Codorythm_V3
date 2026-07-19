export const addTwoNumbersSolutions = {
  'atn-e1': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def add_two_numbers(l1, l2):
    dummy = ListNode(0)
    curr = dummy
    carry = 0
    while l1 or l2 or carry:
        val1 = l1.val if l1 else 0
        val2 = l2.val if l2 else 0
        total = val1 + val2 + carry
        carry = total // 10
        curr.next = ListNode(total % 10)
        curr = curr.next
        if l1: l1 = l1.next
        if l2: l2 = l2.next
    return dummy.next

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
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        int carry = 0;
        while (l1 != null || l2 != null || carry != 0) {
            int val1 = (l1 != null) ? l1.val : 0;
            int val2 = (l2 != null) ? l2.val : 0;
            int sum = val1 + val2 + carry;
            carry = sum / 10;
            curr.next = new ListNode(sum % 10);
            curr = curr.next;
            if (l1 != null) l1 = l1.next;
            if (l2 != null) l2 = l2.next;
        }
        return dummy.next;
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
    struct ListNode dummy; dummy.next = NULL;
    struct ListNode* curr = &dummy;
    int carry = 0;
    while (l1 != NULL || l2 != NULL || carry != 0) {
        int val1 = (l1 != NULL) ? l1->val : 0;
        int val2 = (l2 != NULL) ? l2->val : 0;
        int sum = val1 + val2 + carry;
        carry = sum / 10;
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = sum % 10;
        node->next = NULL;
        curr->next = node;
        curr = node;
        if (l1 != NULL) l1 = l1->next;
        if (l2 != NULL) l2 = l2->next;
    }
    return dummy.next;
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

ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
    ListNode dummy(0);
    ListNode* curr = &dummy;
    int carry = 0;
    while (l1 != nullptr || l2 != nullptr || carry != 0) {
        int val1 = (l1 != nullptr) ? l1->val : 0;
        int val2 = (l2 != nullptr) ? l2->val : 0;
        int sum = val1 + val2 + carry;
        carry = sum / 10;
        curr->next = new ListNode(sum % 10);
        curr = curr->next;
        if (l1 != nullptr) l1 = l1->next;
        if (l2 != nullptr) l2 = l2->next;
    }
    return dummy.next;
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
  },
  'atn-e2': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_list(head):
    prev = None
    curr = head
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    return prev

def add_two_numbers_forward(l1, l2):
    r1 = reverse_list(l1)
    r2 = reverse_list(l2)
    dummy = ListNode(0)
    curr = dummy
    carry = 0
    while r1 or r2 or carry:
        val1 = r1.val if r1 else 0
        val2 = r2.val if r2 else 0
        total = val1 + val2 + carry
        carry = total // 10
        curr.next = ListNode(total % 10)
        curr = curr.next
        if r1: r1 = r1.next
        if r2: r2 = r2.next
    return reverse_list(dummy.next)

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
    private static ListNode reverseList(ListNode head) {
        ListNode prev = null, curr = head;
        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }

    public static ListNode addTwoNumbersForward(ListNode l1, ListNode l2) {
        ListNode r1 = reverseList(l1);
        ListNode r2 = reverseList(l2);
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        int carry = 0;
        while (r1 != null || r2 != null || carry != 0) {
            int val1 = (r1 != null) ? r1.val : 0;
            int val2 = (r2 != null) ? r2.val : 0;
            int sum = val1 + val2 + carry;
            carry = sum / 10;
            curr.next = new ListNode(sum % 10);
            curr = curr.next;
            if (r1 != null) r1 = r1.next;
            if (r2 != null) r2 = r2.next;
        }
        return reverseList(dummy.next);
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

struct ListNode* reverseList(struct ListNode* head) {
    struct ListNode* prev = NULL;
    struct ListNode* curr = head;
    while (curr != NULL) {
        struct ListNode* next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

struct ListNode* addTwoNumbersForward(struct ListNode* l1, struct ListNode* l2) {
    struct ListNode* r1 = reverseList(l1);
    struct ListNode* r2 = reverseList(l2);
    struct ListNode dummy; dummy.next = NULL;
    struct ListNode* curr = &dummy;
    int carry = 0;
    while (r1 != NULL || r2 != NULL || carry != 0) {
        int val1 = (r1 != NULL) ? r1->val : 0;
        int val2 = (r2 != NULL) ? r2->val : 0;
        int sum = val1 + val2 + carry;
        carry = sum / 10;
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = sum % 10;
        node->next = NULL;
        curr->next = node;
        curr = node;
        if (r1 != NULL) r1 = r1->next;
        if (r2 != NULL) r2 = r2->next;
    }
    return reverseList(dummy.next);
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

ListNode* reverseList(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* curr = head;
    while (curr != nullptr) {
        ListNode* next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

ListNode* addTwoNumbersForward(ListNode* l1, ListNode* l2) {
    ListNode* r1 = reverseList(l1);
    ListNode* r2 = reverseList(l2);
    ListNode dummy(0);
    ListNode* curr = &dummy;
    int carry = 0;
    while (r1 != nullptr || r2 != nullptr || carry != 0) {
        int val1 = (r1 != nullptr) ? r1->val : 0;
        int val2 = (r2 != nullptr) ? r2->val : 0;
        int sum = val1 + val2 + carry;
        carry = sum / 10;
        curr->next = new ListNode(sum % 10);
        curr = curr->next;
        if (r1 != nullptr) r1 = r1->next;
        if (r2 != nullptr) r2 = r2->next;
    }
    return reverseList(dummy.next);
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
  },
  'atn-e3': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def add_one(head):
    dummy = ListNode(0, head)
    curr = head
    carry = 1
    prev = dummy
    while curr or carry:
        if not curr:
            prev.next = ListNode(carry)
            break
        total = curr.val + carry
        curr.val = total % 10
        carry = total // 10
        prev = curr
        curr = curr.next
    return dummy.next

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
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode curr = head;
        ListNode prev = dummy;
        int carry = 1;
        while (curr != null || carry != 0) {
            if (curr == null) {
                prev.next = new ListNode(carry);
                break;
            }
            int total = curr.val + carry;
            curr.val = total % 10;
            carry = total / 10;
            prev = curr;
            curr = curr.next;
        }
        return dummy.next;
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
    struct ListNode dummy; dummy.next = head;
    struct ListNode* curr = head;
    struct ListNode* prev = &dummy;
    int carry = 1;
    while (curr != NULL || carry != 0) {
        if (curr == NULL) {
            struct ListNode* node = malloc(sizeof(struct ListNode));
            node->val = carry;
            node->next = NULL;
            prev->next = node;
            break;
        }
        int total = curr->val + carry;
        curr->val = total % 10;
        carry = total / 10;
        prev = curr;
        curr = curr->next;
    }
    return dummy.next;
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
    ListNode dummy(0);
    dummy.next = head;
    ListNode* curr = head;
    ListNode* prev = &dummy;
    int carry = 1;
    while (curr != nullptr || carry != 0) {
        if (curr == nullptr) {
            prev->next = new ListNode(carry);
            break;
        }
        int total = curr->val + carry;
        curr->val = total % 10;
        carry = total / 10;
        prev = curr;
        curr = curr->next;
    }
    return dummy.next;
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
  },
  'atn-e4': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def sum_list(head):
    total = 0
    curr = head
    while curr:
        total += curr.val
        curr = curr.next
    return total

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
        int sum = 0;
        ListNode curr = head;
        while (curr != null) {
            sum += curr.val;
            curr = curr.next;
        }
        return sum;
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
    int sum = 0;
    struct ListNode* curr = head;
    while (curr != NULL) {
        sum += curr->val;
        curr = curr->next;
    }
    return sum;
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
    int sum = 0;
    ListNode* curr = head;
    while (curr != nullptr) {
        sum += curr->val;
        curr = curr->next;
    }
    return sum;
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
  },
  'atn-e5': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def double_number(head):
    if not head:
        return ListNode(0)
    dummy = ListNode(0)
    curr_out = dummy
    curr = head
    carry = 0
    while curr or carry:
        val = curr.val if curr else 0
        total = val * 2 + carry
        carry = total // 10
        curr_out.next = ListNode(total % 10)
        curr_out = curr_out.next
        if curr: curr = curr.next
    return dummy.next

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
        if (head == null) return new ListNode(0);
        ListNode dummy = new ListNode(0);
        ListNode currOut = dummy;
        ListNode curr = head;
        int carry = 0;
        while (curr != null || carry != 0) {
            int val = (curr != null) ? curr.val : 0;
            int total = val * 2 + carry;
            carry = total / 10;
            currOut.next = new ListNode(total % 10);
            currOut = currOut.next;
            if (curr != null) curr = curr.next;
        }
        return dummy.next;
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
    if (head == NULL) {
        struct ListNode* z = malloc(sizeof(struct ListNode));
        z->val = 0; z->next = NULL;
        return z;
    }
    struct ListNode dummy; dummy.next = NULL;
    struct ListNode* currOut = &dummy;
    struct ListNode* curr = head;
    int carry = 0;
    while (curr != NULL || carry != 0) {
        int val = (curr != NULL) ? curr->val : 0;
        int total = val * 2 + carry;
        carry = total / 10;
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = total % 10;
        node->next = NULL;
        currOut->next = node;
        currOut = node;
        if (curr != NULL) curr = curr->next;
    }
    return dummy.next;
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
    if (head == nullptr) return new ListNode(0);
    ListNode dummy(0);
    ListNode* currOut = &dummy;
    ListNode* curr = head;
    int carry = 0;
    while (curr != nullptr || carry != 0) {
        int val = (curr != nullptr) ? curr->val : 0;
        int total = val * 2 + carry;
        carry = total / 10;
        currOut->next = new ListNode(total % 10);
        currOut = currOut->next;
        if (curr != nullptr) curr = curr->next;
    }
    return dummy.next;
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
  },
  // --- MEDIUM ---
  'atn-m1': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def subtract_two_numbers(l1, l2):
    dummy = ListNode(0)
    curr = dummy
    borrow = 0
    while l1 or l2:
        val1 = l1.val if l1 else 0
        val2 = l2.val if l2 else 0
        diff = val1 - val2 - borrow
        if diff < 0:
            diff += 10
            borrow = 1
        else:
            borrow = 0
        curr.next = ListNode(diff)
        curr = curr.next
        if l1: l1 = l1.next
        if l2: l2 = l2.next
    # Reverse output to easily strip trailing zeros
    # e.g., 3 -> 3 -> 3 -> 0 -> 0 becomes 3 -> 3 -> 3
    # Wait, the list is reverse order, meaning units digit at head, most significant digit at tail.
    # Leading zeros of the number correspond to trailing zeros of the reversed list!
    # So we want to remove any trailing zeros from the list.
    # To do this, we can store nodes in a list, pop trailing zeros, and rebuild!
    nodes = []
    t = dummy.next
    while t:
        nodes.append(t)
        t = t.next
    while len(nodes) > 1 and nodes[-1].val == 0:
        nodes.pop()
    for i in range(len(nodes) - 1):
        nodes[i].next = nodes[i+1]
    nodes[-1].next = None
    return nodes[0]

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
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        int borrow = 0;
        List<ListNode> list = new ArrayList<>();
        while (l1 != null || l2 != null) {
            int val1 = (l1 != null) ? l1.val : 0;
            int val2 = (l2 != null) ? l2.val : 0;
            int diff = val1 - val2 - borrow;
            if (diff < 0) {
                diff += 10;
                borrow = 1;
            } else {
                borrow = 0;
            }
            ListNode node = new ListNode(diff);
            curr.next = node;
            curr = node;
            list.add(node);
            if (l1 != null) l1 = l1.next;
            if (l2 != null) l2 = l2.next;
        }
        while (list.size() > 1 && list.get(list.size() - 1).val == 0) {
            list.remove(list.size() - 1);
        }
        for (int i = 0; i < list.size() - 1; i++) {
            list.get(i).next = list.get(i + 1);
        }
        list.get(list.size() - 1).next = null;
        return list.get(0);
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
    struct ListNode dummy; dummy.next = NULL;
    struct ListNode* curr = &dummy;
    int borrow = 0;
    struct ListNode* list[505];
    int count = 0;
    while (l1 != NULL || l2 != NULL) {
        int val1 = (l1 != NULL) ? l1->val : 0;
        int val2 = (l2 != NULL) ? l2->val : 0;
        int diff = val1 - val2 - borrow;
        if (diff < 0) {
            diff += 10;
            borrow = 1;
        } else {
            borrow = 0;
        }
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = diff;
        node->next = NULL;
        curr->next = node;
        curr = node;
        list[count++] = node;
        if (l1 != NULL) l1 = l1->next;
        if (l2 != NULL) l2 = l2->next;
    }
    while (count > 1 && list[count - 1]->val == 0) {
        count--;
    }
    for (int i = 0; i < count - 1; i++) {
        list[i]->next = list[i+1];
    }
    list[count - 1]->next = NULL;
    return list[0];
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
#include <vector>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* subtractTwoNumbers(ListNode* l1, ListNode* l2) {
    ListNode dummy(0);
    ListNode* curr = &dummy;
    int borrow = 0;
    vector<ListNode*> list;
    while (l1 != nullptr || l2 != nullptr) {
        int val1 = (l1 != nullptr) ? l1->val : 0;
        int val2 = (l2 != nullptr) ? l2->val : 0;
        int diff = val1 - val2 - borrow;
        if (diff < 0) {
            diff += 10;
            borrow = 1;
        } else {
            borrow = 0;
        }
        ListNode* node = new ListNode(diff);
        curr->next = node;
        curr = node;
        list.push_back(node);
        if (l1 != nullptr) l1 = l1->next;
        if (l2 != nullptr) l2 = l2->next;
    }
    while (list.size() > 1 && list.back()->val == 0) {
        list.pop_back();
    }
    for (size_t i = 0; i < list.size() - 1; i++) {
        list[i]->next = list[i+1];
    }
    list.back()->next = nullptr;
    return list[0];
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
  },
  'atn-m2': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def multiply_by_digit(head, d):
    if d == 0:
        return ListNode(0)
    dummy = ListNode(0)
    curr_out = dummy
    curr = head
    carry = 0
    while curr or carry:
        val = curr.val if curr else 0
        total = val * d + carry
        carry = total // 10
        curr_out.next = ListNode(total % 10)
        curr_out = curr_out.next
        if curr: curr = curr.next
    return dummy.next

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
        if (d == 0) return new ListNode(0);
        ListNode dummy = new ListNode(0);
        ListNode currOut = dummy;
        ListNode curr = head;
        int carry = 0;
        while (curr != null || carry != 0) {
            int val = (curr != null) ? curr.val : 0;
            int total = val * d + carry;
            carry = total / 10;
            currOut.next = new ListNode(total % 10);
            currOut = currOut.next;
            if (curr != null) curr = curr.next;
        }
        return dummy.next;
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
    if (d == 0) {
        struct ListNode* z = malloc(sizeof(struct ListNode));
        z->val = 0; z->next = NULL;
        return z;
    }
    struct ListNode dummy; dummy.next = NULL;
    struct ListNode* currOut = &dummy;
    struct ListNode* curr = head;
    int carry = 0;
    while (curr != NULL || carry != 0) {
        int val = (curr != NULL) ? curr->val : 0;
        int total = val * d + carry;
        carry = total / 10;
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = total % 10;
        node->next = NULL;
        currOut->next = node;
        currOut = node;
        if (curr != NULL) curr = curr->next;
    }
    return dummy.next;
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
    if (d == 0) return new ListNode(0);
    ListNode dummy(0);
    ListNode* currOut = &dummy;
    ListNode* curr = head;
    int carry = 0;
    while (curr != nullptr || carry != 0) {
        int val = (curr != nullptr) ? curr->val : 0;
        int total = val * d + carry;
        carry = total / 10;
        currOut->next = new ListNode(total % 10);
        currOut = currOut->next;
        if (curr != nullptr) curr = curr->next;
    }
    return dummy.next;
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
  },
  'atn-m3': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def sum_odd_even(head):
    odd_sum = 0
    even_sum = 0
    curr = head
    idx = 1
    while curr:
        if idx % 2 == 1:
            odd_sum += curr.val
        else:
            even_sum += curr.val
        curr = curr.next
        idx += 1
    res = ListNode(odd_sum)
    res.next = ListNode(even_sum)
    return res

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
        int oddSum = 0, evenSum = 0;
        ListNode curr = head;
        int idx = 1;
        while (curr != null) {
            if (idx % 2 == 1) oddSum += curr.val;
            else evenSum += curr.val;
            curr = curr.next;
            idx++;
        }
        ListNode res = new ListNode(oddSum);
        res.next = new ListNode(evenSum);
        return res;
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
    int oddSum = 0, evenSum = 0;
    struct ListNode* curr = head;
    int idx = 1;
    while (curr != NULL) {
        if (idx % 2 == 1) oddSum += curr->val;
        else evenSum += curr->val;
        curr = curr->next;
        idx++;
    }
    struct ListNode* res = malloc(sizeof(struct ListNode));
    res->val = oddSum;
    res->next = malloc(sizeof(struct ListNode));
    res->next->val = evenSum;
    res->next->next = NULL;
    return res;
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
    int oddSum = 0, evenSum = 0;
    ListNode* curr = head;
    int idx = 1;
    while (curr != nullptr) {
        if (idx % 2 == 1) oddSum += curr->val;
        else evenSum += curr->val;
        curr = curr->next;
        idx++;
    }
    ListNode* res = new ListNode(oddSum);
    res->next = new ListNode(evenSum);
    return res;
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
  },
  'atn-m4': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def add_binary_lists(l1, l2):
    dummy = ListNode(0)
    curr = dummy
    carry = 0
    while l1 or l2 or carry:
        val1 = l1.val if l1 else 0
        val2 = l2.val if l2 else 0
        total = val1 + val2 + carry
        carry = total // 2
        curr.next = ListNode(total % 2)
        curr = curr.next
        if l1: l1 = l1.next
        if l2: l2 = l2.next
    return dummy.next

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
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        int carry = 0;
        while (l1 != null || l2 != null || carry != 0) {
            int val1 = (l1 != null) ? l1.val : 0;
            int val2 = (l2 != null) ? l2.val : 0;
            int sum = val1 + val2 + carry;
            carry = sum / 2;
            curr.next = new ListNode(sum % 2);
            curr = curr.next;
            if (l1 != null) l1 = l1.next;
            if (l2 != null) l2 = l2.next;
        }
        return dummy.next;
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
    struct ListNode dummy; dummy.next = NULL;
    struct ListNode* curr = &dummy;
    int carry = 0;
    while (l1 != NULL || l2 != NULL || carry != 0) {
        int val1 = (l1 != NULL) ? l1->val : 0;
        int val2 = (l2 != NULL) ? l2->val : 0;
        int sum = val1 + val2 + carry;
        carry = sum / 2;
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = sum % 2;
        node->next = NULL;
        curr->next = node;
        curr = node;
        if (l1 != NULL) l1 = l1->next;
        if (l2 != NULL) l2 = l2->next;
    }
    return dummy.next;
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
    ListNode dummy(0);
    ListNode* curr = &dummy;
    int carry = 0;
    while (l1 != nullptr || l2 != nullptr || carry != 0) {
        int val1 = (l1 != nullptr) ? l1->val : 0;
        int val2 = (l2 != nullptr) ? l2->val : 0;
        int sum = val1 + val2 + carry;
        carry = sum / 2;
        curr->next = new ListNode(sum % 2);
        curr = curr->next;
        if (l1 != nullptr) l1 = l1->next;
        if (l2 != nullptr) l2 = l2->next;
    }
    return dummy.next;
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
  },
  'atn-m5': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def add_in_base_b(l1, l2, b):
    dummy = ListNode(0)
    curr = dummy
    carry = 0
    while l1 or l2 or carry:
        val1 = l1.val if l1 else 0
        val2 = l2.val if l2 else 0
        total = val1 + val2 + carry
        carry = total // b
        curr.next = ListNode(total % b)
        curr = curr.next
        if l1: l1 = l1.next
        if l2: l2 = l2.next
    return dummy.next

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
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        int carry = 0;
        while (l1 != null || l2 != null || carry != 0) {
            int val1 = (l1 != null) ? l1.val : 0;
            int val2 = (l2 != null) ? l2.val : 0;
            int sum = val1 + val2 + carry;
            carry = sum / b;
            curr.next = new ListNode(sum % b);
            curr = curr.next;
            if (l1 != null) l1 = l1.next;
            if (l2 != null) l2 = l2.next;
        }
        return dummy.next;
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
    struct ListNode dummy; dummy.next = NULL;
    struct ListNode* curr = &dummy;
    int carry = 0;
    while (l1 != NULL || l2 != NULL || carry != 0) {
        int val1 = (l1 != NULL) ? l1->val : 0;
        int val2 = (l2 != NULL) ? l2->val : 0;
        int sum = val1 + val2 + carry;
        carry = sum / b;
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = sum % b;
        node->next = NULL;
        curr->next = node;
        curr = node;
        if (l1 != NULL) l1 = l1->next;
        if (l2 != NULL) l2 = l2->next;
    }
    return dummy.next;
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
    ListNode dummy(0);
    ListNode* curr = &dummy;
    int carry = 0;
    while (l1 != nullptr || l2 != nullptr || carry != 0) {
        int val1 = (l1 != nullptr) ? l1->val : 0;
        int val2 = (l2 != nullptr) ? l2->val : 0;
        int sum = val1 + val2 + carry;
        carry = sum / b;
        curr->next = new ListNode(sum % b);
        curr = curr->next;
        if (l1 != nullptr) l1 = l1->next;
        if (l2 != nullptr) l2 = l2->next;
    }
    return dummy.next;
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
  },
  // --- HARD ---
  'atn-h1': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def multiply_two_lists(l1, l2):
    # Standard array based big multiplication
    v1 = []
    while l1:
        v1.append(l1.val)
        l1 = l1.next
    v2 = []
    while l2:
        v2.append(l2.val)
        l2 = l2.next
        
    res = [0] * (len(v1) + len(v2))
    for i in range(len(v1)):
        for j in range(len(v2)):
            res[i + j] += v1[i] * v2[j]
            res[i + j + 1] += res[i + j] // 10
            res[i + j] %= 10
            
    # Strip trailing zeros
    while len(res) > 1 and res[-1] == 0:
        res.pop()
        
    dummy = ListNode(0)
    curr = dummy
    for v in res:
        curr.next = ListNode(v)
        curr = curr.next
    return dummy.next

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
        List<Integer> v1 = new ArrayList<>();
        while (l1 != null) {
            v1.add(l1.val);
            l1 = l1.next;
        }
        List<Integer> v2 = new ArrayList<>();
        while (l2 != null) {
            v2.add(l2.val);
            l2 = l2.next;
        }
        int[] res = new int[v1.size() + v2.size()];
        for (int i = 0; i < v1.size(); i++) {
            for (int j = 0; j < v2.size(); j++) {
                res[i + j] += v1.get(i) * v2.get(j);
                res[i + j + 1] += res[i + j] / 10;
                res[i + j] %= 10;
            }
        }
        int limit = res.length;
        while (limit > 1 && res[limit - 1] == 0) {
            limit--;
        }
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        for (int i = 0; i < limit; i++) {
            curr.next = new ListNode(res[i]);
            curr = curr.next;
        }
        return dummy.next;
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
    int v1[105], v2[105];
    int len1 = 0, len2 = 0;
    while (l1 != NULL) {
        v1[len1++] = l1->val;
        l1 = l1->next;
    }
    while (l2 != NULL) {
        v2[len2++] = l2->val;
        l2 = l2->next;
    }
    int total_len = len1 + len2;
    int* res = calloc(total_len, sizeof(int));
    for (int i = 0; i < len1; i++) {
        for (int j = 0; j < len2; j++) {
            res[i + j] += v1[i] * v2[j];
            res[i + j + 1] += res[i + j] / 10;
            res[i + j] %= 10;
        }
    }
    while (total_len > 1 && res[total_len - 1] == 0) {
        total_len--;
    }
    struct ListNode dummy; dummy.next = NULL;
    struct ListNode* curr = &dummy;
    for (int i = 0; i < total_len; i++) {
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = res[i];
        node->next = NULL;
        curr->next = node;
        curr = node;
    }
    free(res);
    return dummy.next;
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
#include <vector>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* multiplyTwoLists(ListNode* l1, ListNode* l2) {
    vector<int> v1, v2;
    while (l1 != nullptr) {
        v1.push_back(l1->val);
        l1 = l1->next;
    }
    while (l2 != nullptr) {
        v2.push_back(l2->val);
        l2 = l2->next;
    }
    vector<int> res(v1.size() + v2.size(), 0);
    for (size_t i = 0; i < v1.size(); i++) {
        for (size_t j = 0; j < v2.size(); j++) {
            res[i + j] += v1[i] * v2[j];
            res[i + j + 1] += res[i + j] / 10;
            res[i + j] %= 10;
        }
    }
    while (res.size() > 1 && res.back() == 0) {
        res.pop_back();
    }
    ListNode dummy(0);
    ListNode* curr = &dummy;
    for (int v : res) {
        curr->next = new ListNode(v);
        curr = curr->next;
    }
    return dummy.next;
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
  },
  'atn-h2': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def add_three_numbers(l1, l2, l3):
    dummy = ListNode(0)
    curr = dummy
    carry = 0
    while l1 or l2 or l3 or carry:
        val1 = l1.val if l1 else 0
        val2 = l2.val if l2 else 0
        val3 = l3.val if l3 else 0
        total = val1 + val2 + val3 + carry
        carry = total // 10
        curr.next = ListNode(total % 10)
        curr = curr.next
        if l1: l1 = l1.next
        if l2: l2 = l2.next
        if l3: l3 = l3.next
    return dummy.next

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
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        int carry = 0;
        while (l1 != null || l2 != null || l3 != null || carry != 0) {
            int val1 = (l1 != null) ? l1.val : 0;
            int val2 = (l2 != null) ? l2.val : 0;
            int val3 = (l3 != null) ? l3.val : 0;
            int sum = val1 + val2 + val3 + carry;
            carry = sum / 10;
            curr.next = new ListNode(sum % 10);
            curr = curr.next;
            if (l1 != null) l1 = l1.next;
            if (l2 != null) l2 = l2.next;
            if (l3 != null) l3 = l3.next;
        }
        return dummy.next;
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
    struct ListNode dummy; dummy.next = NULL;
    struct ListNode* curr = &dummy;
    int carry = 0;
    while (l1 != NULL || l2 != NULL || l3 != NULL || carry != 0) {
        int val1 = (l1 != NULL) ? l1->val : 0;
        int val2 = (l2 != NULL) ? l2->val : 0;
        int val3 = (l3 != NULL) ? l3->val : 0;
        int sum = val1 + val2 + val3 + carry;
        carry = sum / 10;
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = sum % 10;
        node->next = NULL;
        curr->next = node;
        curr = node;
        if (l1 != NULL) l1 = l1->next;
        if (l2 != NULL) l2 = l2->next;
        if (l3 != NULL) l3 = l3->next;
    }
    return dummy.next;
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
    ListNode dummy(0);
    ListNode* curr = &dummy;
    int carry = 0;
    while (l1 != nullptr || l2 != nullptr || l3 != nullptr || carry != 0) {
        int val1 = (l1 != nullptr) ? l1->val : 0;
        int val2 = (l2 != nullptr) ? l2->val : 0;
        int val3 = (l3 != nullptr) ? l3->val : 0;
        int sum = val1 + val2 + val3 + carry;
        carry = sum / 10;
        curr->next = new ListNode(sum % 10);
        curr = curr->next;
        if (l1 != nullptr) l1 = l1->next;
        if (l2 != nullptr) l2 = l2->next;
        if (l3 != nullptr) l3 = l3->next;
    }
    return dummy.next;
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
  },
  'atn-h3': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def factorial_list(n):
    # Represent big integers as lists
    res = ListNode(1)
    for i in range(2, n + 1):
        # Multiply res by i
        dummy = ListNode(0)
        curr_out = dummy
        curr = res
        carry = 0
        while curr or carry:
            val = curr.val if curr else 0
            total = val * i + carry
            carry = total // 10
            curr_out.next = ListNode(total % 10)
            curr_out = curr_out.next
            if curr: curr = curr.next
        res = dummy.next
    return res

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
        ListNode res = new ListNode(1);
        for (int i = 2; i <= n; i++) {
            ListNode dummy = new ListNode(0);
            ListNode currOut = dummy;
            ListNode curr = res;
            int carry = 0;
            while (curr != null || carry != 0) {
                int val = (curr != null) ? curr.val : 0;
                int total = val * i + carry;
                carry = total / 10;
                currOut.next = new ListNode(total % 10);
                currOut = currOut.next;
                if (curr != null) curr = curr.next;
            }
            res = dummy.next;
        }
        return res;
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
    struct ListNode* res = malloc(sizeof(struct ListNode));
    res->val = 1; res->next = NULL;
    for (int i = 2; i <= n; i++) {
        struct ListNode dummy; dummy.next = NULL;
        struct ListNode* currOut = &dummy;
        struct ListNode* curr = res;
        int carry = 0;
        while (curr != NULL || carry != 0) {
            int val = (curr != NULL) ? curr->val : 0;
            int total = val * i + carry;
            carry = total / 10;
            struct ListNode* node = malloc(sizeof(struct ListNode));
            node->val = total % 10;
            node->next = NULL;
            currOut->next = node;
            currOut = node;
            if (curr != NULL) {
                struct ListNode* temp = curr;
                curr = curr->next;
                free(temp); // Free old list node
            }
        }
        res = dummy.next;
    }
    return res;
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
    ListNode* res = new ListNode(1);
    for (int i = 2; i <= n; i++) {
        ListNode dummy(0);
        ListNode* currOut = &dummy;
        ListNode* curr = res;
        int carry = 0;
        while (curr != nullptr || carry != 0) {
            int val = (curr != nullptr) ? curr->val : 0;
            int total = val * i + carry;
            carry = total / 10;
            currOut->next = new ListNode(total % 10);
            currOut = currOut->next;
            if (curr != nullptr) {
                ListNode* temp = curr;
                curr = curr->next;
                delete temp;
            }
        }
        res = dummy.next;
    }
    return res;
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
  },
  'atn-h4': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def fibonacci_list(n):
    if n == 0:
        return ListNode(0)
    if n == 1:
        return ListNode(1)
        
    a = ListNode(0)
    b = ListNode(1)
    
    for _ in range(2, n + 1):
        # c = a + b
        dummy = ListNode(0)
        curr = dummy
        carry = 0
        l1, l2 = a, b
        while l1 or l2 or carry:
            val1 = l1.val if l1 else 0
            val2 = l2.val if l2 else 0
            total = val1 + val2 + carry
            carry = total // 10
            curr.next = ListNode(total % 10)
            curr = curr.next
            if l1: l1 = l1.next
            if l2: l2 = l2.next
        c = dummy.next
        a = b
        b = c
    return b

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
        if (n == 0) return new ListNode(0);
        if (n == 1) return new ListNode(1);
        
        ListNode a = new ListNode(0);
        ListNode b = new ListNode(1);
        
        for (int i = 2; i <= n; i++) {
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;
            int carry = 0;
            ListNode l1 = a, l2 = b;
            while (l1 != null || l2 != null || carry != 0) {
                int val1 = (l1 != null) ? l1.val : 0;
                int val2 = (l2 != null) ? l2.val : 0;
                int sum = val1 + val2 + carry;
                carry = sum / 10;
                curr.next = new ListNode(sum % 10);
                curr = curr.next;
                if (l1 != null) l1 = l1.next;
                if (l2 != null) l2 = l2.next;
            }
            ListNode c = dummy.next;
            a = b;
            b = c;
        }
        return b;
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

void freeList(struct ListNode* head) {
    while (head != NULL) {
        struct ListNode* temp = head;
        head = head->next;
        free(temp);
    }
}

struct ListNode* fibonacciList(int n) {
    if (n == 0) {
        struct ListNode* res = malloc(sizeof(struct ListNode));
        res->val = 0; res->next = NULL;
        return res;
    }
    if (n == 1) {
        struct ListNode* res = malloc(sizeof(struct ListNode));
        res->val = 1; res->next = NULL;
        return res;
    }
    struct ListNode* a = malloc(sizeof(struct ListNode));
    a->val = 0; a->next = NULL;
    struct ListNode* b = malloc(sizeof(struct ListNode));
    b->val = 1; b->next = NULL;
    
    for (int i = 2; i <= n; i++) {
        struct ListNode dummy; dummy.next = NULL;
        struct ListNode* curr = &dummy;
        int carry = 0;
        struct ListNode* l1 = a;
        struct ListNode* l2 = b;
        while (l1 != NULL || l2 != NULL || carry != 0) {
            int val1 = (l1 != NULL) ? l1->val : 0;
            int val2 = (l2 != NULL) ? l2->val : 0;
            int sum = val1 + val2 + carry;
            carry = sum / 10;
            struct ListNode* node = malloc(sizeof(struct ListNode));
            node->val = sum % 10;
            node->next = NULL;
            curr->next = node;
            curr = node;
            if (l1 != NULL) l1 = l1->next;
            if (l2 != NULL) l2 = l2->next;
        }
        struct ListNode* c = dummy.next;
        freeList(a);
        a = b;
        b = c;
    }
    freeList(a);
    return b;
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

void freeList(ListNode* head) {
    while (head != nullptr) {
        ListNode* temp = head;
        head = head->next;
        delete temp;
    }
}

ListNode* fibonacciList(int n) {
    if (n == 0) return new ListNode(0);
    if (n == 1) return new ListNode(1);
    
    ListNode* a = new ListNode(0);
    ListNode* b = new ListNode(1);
    
    for (int i = 2; i <= n; i++) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        int carry = 0;
        ListNode* l1 = a;
        ListNode* l2 = b;
        while (l1 != nullptr || l2 != nullptr || carry != 0) {
            int val1 = (l1 != nullptr) ? l1->val : 0;
            int val2 = (l2 != nullptr) ? l2->val : 0;
            int sum = val1 + val2 + carry;
            carry = sum / 10;
            curr->next = new ListNode(sum % 10);
            curr = curr->next;
            if (l1 != nullptr) l1 = l1->next;
            if (l2 != nullptr) l2 = l2->next;
        }
        ListNode* c = dummy.next;
        freeList(a);
        a = b;
        b = c;
    }
    freeList(a);
    return b;
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
  },
  'atn-h5': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse(head):
    prev = None
    curr = head
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    return prev

def add_decimals(int1, frac1, int2, frac2):
    # Addition of fractional parts is right-to-left
    # We pad them to be of equal length on the right (which is left of the reversed fractional parts)
    # Actually, in the reversed list:
    # l1: 3 -> 5 (0.35) -> reversed is 5 -> 3
    # l2: 8      (0.8)  -> reversed is 8
    # Since 0.8 is 0.80, we pad 8 on the right (which is units digit, 0, before 8 in reverse order).
    # So 0.80 reversed is 0 -> 8.
    # To pad fractional parts: find length of both
    def get_len(head):
        l = 0
        while head:
            l += 1
            head = head.next
        return l
        
    len1 = get_len(frac1)
    len2 = get_len(frac2)
    max_len = max(len1, len2)
    
    # Rebuild normalized fractional parts
    def pad_fractional(head, original_len, target_len):
        # We need to append (target_len - original_len) zeros at the end of the original fractional list
        # then reverse it
        dummy = ListNode(0)
        curr = dummy
        t = head
        while t:
            curr.next = ListNode(t.val)
            curr = curr.next
            t = t.next
        for _ in range(target_len - original_len):
            curr.next = ListNode(0)
            curr = curr.next
        return reverse(dummy.next)
        
    rf1 = pad_fractional(frac1, len1, max_len)
    rf2 = pad_fractional(frac2, len2, max_len)
    
    # Add reversed fractional parts
    dummy_frac = ListNode(0)
    curr = dummy_frac
    carry = 0
    while rf1 or rf2:
        val1 = rf1.val if rf1 else 0
        val2 = rf2.val if rf2 else 0
        total = val1 + val2 + carry
        carry = total // 10
        curr.next = ListNode(total % 10)
        curr = curr.next
        if rf1: rf1 = rf1.next
        if rf2: rf2 = rf2.next
        
    # The result of frac addition is currently reversed.
    # The carry from frac addition goes into the integer addition!
    # If the frac addition generated an extra digit (which is the carry at the MSB of frac, i.e., carry at the end of loop),
    # wait, the carry at the end of the loop is the carry that goes to the units digit of integer!
    # Since rf1 and rf2 are of max_len, they represent the fractional digits.
    # The loop runs max_len times. After max_len iterations, we have some carry.
    # This carry is the one that propagates to the integer part!
    # So we don't append a carry node to the frac list, instead we keep it for integer addition!
    frac_res = reverse(dummy_frac.next)
    
    # Integer parts addition (which is right-to-left)
    # Since int1 and int2 are stored in forward order (MSB first), we reverse them
    rint1 = reverse(int1)
    rint2 = reverse(int2)
    
    dummy_int = ListNode(0)
    curr_int = dummy_int
    while rint1 or rint2 or carry:
        val1 = rint1.val if rint1 else 0
        val2 = rint2.val if rint2 else 0
        total = val1 + val2 + carry
        carry = total // 10
        curr_int.next = ListNode(total % 10)
        curr_int = curr_int.next
        if rint1: rint1 = rint1.next
        if rint2: rint2 = rint2.next
        
    int_res = reverse(dummy_int.next)
    
    # Convert lists to strings
    int_str = []
    t = int_res
    while t:
        int_str.append(str(t.val))
        t = t.next
    if not int_str: int_str = ["0"]
        
    frac_str = []
    t = frac_res
    while t:
        frac_str.append(str(t.val))
        t = t.next
        
    # Strip trailing zeros from fractional part
    while len(frac_str) > 1 and frac_str[-1] == "0":
        frac_str.pop()
    if not frac_str: frac_str = ["0"]
    
    return "".join(int_str), "".join(frac_str)

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
    private static ListNode reverse(ListNode head) {
        ListNode prev = null, curr = head;
        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }

    private static int getLen(ListNode head) {
        int l = 0;
        while (head != null) {
            l++;
            head = head.next;
        }
        return l;
    }

    private static ListNode padFractional(ListNode head, int originalLen, int targetLen) {
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        ListNode t = head;
        while (t != null) {
            curr.next = new ListNode(t.val);
            curr = curr.next;
            t = t.next;
        }
        for (int i = 0; i < targetLen - originalLen; i++) {
            curr.next = new ListNode(0);
            curr = curr.next;
        }
        return reverse(dummy.next);
    }

    public static String[] addDecimals(ListNode int1, ListNode frac1, ListNode int2, ListNode frac2) {
        int len1 = getLen(frac1);
        int len2 = getLen(frac2);
        int maxLen = Math.max(len1, len2);

        ListNode rf1 = padFractional(frac1, len1, maxLen);
        ListNode rf2 = padFractional(frac2, len2, maxLen);

        ListNode dummyFrac = new ListNode(0);
        ListNode currFrac = dummyFrac;
        int carry = 0;
        for (int i = 0; i < maxLen; i++) {
            int val1 = (rf1 != null) ? rf1.val : 0;
            int val2 = (rf2 != null) ? rf2.val : 0;
            int sum = val1 + val2 + carry;
            carry = sum / 10;
            currFrac.next = new ListNode(sum % 10);
            currFrac = currFrac.next;
            if (rf1 != null) rf1 = rf1.next;
            if (rf2 != null) rf2 = rf2.next;
        }
        ListNode fracRes = reverse(dummyFrac.next);

        ListNode rint1 = reverse(int1);
        ListNode rint2 = reverse(int2);

        ListNode dummyInt = new ListNode(0);
        ListNode currInt = dummyInt;
        while (rint1 != null || rint2 != null || carry != 0) {
            int val1 = (rint1 != null) ? rint1.val : 0;
            int val2 = (rint2 != null) ? rint2.val : 0;
            int sum = val1 + val2 + carry;
            carry = sum / 10;
            currInt.next = new ListNode(sum % 10);
            currInt = currInt.next;
            if (rint1 != null) rint1 = rint1.next;
            if (rint2 != null) rint2 = rint2.next;
        }
        ListNode intRes = reverse(dummyInt.next);

        StringBuilder intStr = new StringBuilder();
        ListNode t = intRes;
        while (t != null) {
            intStr.append(t.val);
            t = t.next;
        }
        if (intStr.length() == 0) intStr.append("0");

        List<Integer> fracList = new ArrayList<>();
        t = fracRes;
        while (t != null) {
            fracList.add(t.val);
            t = t.next;
        }
        while (fracList.size() > 1 && fracList.get(fracList.size() - 1) == 0) {
            fracList.remove(fracList.size() - 1);
        }
        if (fracList.isEmpty()) fracList.add(0);

        StringBuilder fracStr = new StringBuilder();
        for (int v : fracList) {
            fracStr.append(v);
        }

        return new String[]{intStr.toString(), fracStr.toString()};
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

struct ListNode* reverse(struct ListNode* head) {
    struct ListNode* prev = NULL;
    struct ListNode* curr = head;
    while (curr != NULL) {
        struct ListNode* next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

int getLen(struct ListNode* head) {
    int l = 0;
    while (head != NULL) {
        l++;
        head = head->next;
    }
    return l;
}

struct ListNode* padFractional(struct ListNode* head, int originalLen, int targetLen) {
    struct ListNode dummy; dummy.next = NULL;
    struct ListNode* curr = &dummy;
    struct ListNode* t = head;
    while (t != NULL) {
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = t->val; node->next = NULL;
        curr->next = node; curr = node;
        t = t->next;
    }
    for (int i = 0; i < targetLen - originalLen; i++) {
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = 0; node->next = NULL;
        curr->next = node; curr = node;
    }
    return reverse(dummy.next);
}

void addDecimals(struct ListNode* int1, struct ListNode* frac1, struct ListNode* int2, struct ListNode* frac2) {
    int len1 = getLen(frac1);
    int len2 = getLen(frac2);
    int maxLen = len1 > len2 ? len1 : len2;

    struct ListNode* rf1 = padFractional(frac1, len1, maxLen);
    struct ListNode* rf2 = padFractional(frac2, len2, maxLen);

    struct ListNode dummyFrac; dummyFrac.next = NULL;
    struct ListNode* currFrac = &dummyFrac;
    int carry = 0;
    for (int i = 0; i < maxLen; i++) {
        int val1 = (rf1 != NULL) ? rf1->val : 0;
        int val2 = (rf2 != NULL) ? rf2->val : 0;
        int sum = val1 + val2 + carry;
        carry = sum / 10;
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = sum % 10; node->next = NULL;
        currFrac->next = node; currFrac = node;
        if (rf1 != NULL) rf1 = rf1->next;
        if (rf2 != NULL) rf2 = rf2->next;
    }
    struct ListNode* fracRes = reverse(dummyFrac.next);

    struct ListNode* rint1 = reverse(int1);
    struct ListNode* rint2 = reverse(int2);

    struct ListNode dummyInt; dummyInt.next = NULL;
    struct ListNode* currInt = &dummyInt;
    while (rint1 != NULL || rint2 != NULL || carry != 0) {
        int val1 = (rint1 != NULL) ? rint1->val : 0;
        int val2 = (rint2 != NULL) ? rint2->val : 0;
        int sum = val1 + val2 + carry;
        carry = sum / 10;
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = sum % 10; node->next = NULL;
        currInt->next = node; currInt = node;
        if (rint1 != NULL) rint1 = rint1->next;
        if (rint2 != NULL) rint2 = rint2->next;
    }
    struct ListNode* intRes = reverse(dummyInt.next);

    // Print integer part
    struct ListNode* t = intRes;
    if (t == NULL) printf("0");
    while (t != NULL) {
        printf("%d", t->val);
        t = t->next;
    }
    printf(".");

    // Print fractional part stripping trailing zeros
    int fracArr[105];
    int fracCount = 0;
    t = fracRes;
    while (t != NULL) {
        fracArr[fracCount++] = t->val;
        t = t->next;
    }
    while (fracCount > 1 && fracArr[fracCount - 1] == 0) {
        fracCount--;
    }
    if (fracCount == 0) {
        printf("0");
    } else {
        for (int i = 0; i < fracCount; i++) {
            printf("%d", fracArr[i]);
        }
    }
    printf("\\n");
}

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
#include <algorithm>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* reverse(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* curr = head;
    while (curr != nullptr) {
        ListNode* next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

int getLen(ListNode* head) {
    int l = 0;
    while (head != nullptr) {
        l++;
        head = head->next;
    }
    return l;
}

ListNode* padFractional(ListNode* head, int originalLen, int targetLen) {
    ListNode dummy(0);
    ListNode* curr = &dummy;
    ListNode* t = head;
    while (t != nullptr) {
        curr->next = new ListNode(t->val);
        curr = curr->next;
        t = t->next;
    }
    for (int i = 0; i < targetLen - originalLen; i++) {
        curr->next = new ListNode(0);
        curr = curr->next;
    }
    return reverse(dummy.next);
}

void addDecimals(ListNode* int1, ListNode* frac1, ListNode* int2, ListNode* frac2) {
    int len1 = getLen(frac1);
    int len2 = getLen(frac2);
    int maxLen = max(len1, len2);

    ListNode* rf1 = padFractional(frac1, len1, maxLen);
    ListNode* rf2 = padFractional(frac2, len2, maxLen);

    ListNode dummyFrac(0);
    ListNode* currFrac = &dummyFrac;
    int carry = 0;
    for (int i = 0; i < maxLen; i++) {
        int val1 = (rf1 != nullptr) ? rf1->val : 0;
        int val2 = (rf2 != nullptr) ? rf2->val : 0;
        int sum = val1 + val2 + carry;
        carry = sum / 10;
        currFrac->next = new ListNode(sum % 10);
        currFrac = currFrac->next;
        if (rf1 != nullptr) rf1 = rf1->next;
        if (rf2 != nullptr) rf2 = rf2->next;
    }
    ListNode* fracRes = reverse(dummyFrac.next);

    ListNode* rint1 = reverse(int1);
    ListNode* rint2 = reverse(int2);

    ListNode dummyInt(0);
    ListNode* currInt = &dummyInt;
    while (rint1 != nullptr || rint2 != nullptr || carry != 0) {
        int val1 = (rint1 != nullptr) ? rint1->val : 0;
        int val2 = (rint2 != nullptr) ? rint2->val : 0;
        int sum = val1 + val2 + carry;
        carry = sum / 10;
        currInt->next = new ListNode(sum % 10);
        currInt = currInt->next;
        if (rint1 != nullptr) rint1 = rint1->next;
        if (rint2 != nullptr) rint2 = rint2->next;
    }
    ListNode* intRes = reverse(dummyInt.next);

    // Print integer part
    ListNode* t = intRes;
    if (t == nullptr) cout << "0";
    while (t != nullptr) {
        cout << t->val;
        t = t->next;
    }
    cout << ".";

    // Print fractional part stripping trailing zeros
    vector<int> fracArr;
    t = fracRes;
    while (t != nullptr) {
        fracArr.push_back(t->val);
        t = t->next;
    }
    while (fracArr.size() > 1 && fracArr.back() == 0) {
        fracArr.pop_back();
    }
    if (fracArr.empty()) {
        cout << "0";
    } else {
        for (int v : fracArr) {
            cout << v;
        }
    }
    cout << "\\n";
}

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
};
