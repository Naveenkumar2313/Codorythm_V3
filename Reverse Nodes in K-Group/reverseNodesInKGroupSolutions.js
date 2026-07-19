export const reverseNodesInKGroupSolutions = {
  'rnk-e1': {
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
        ListNode prev = null;
        ListNode curr = head;
        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
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
  },
  'rnk-e2': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_between(head, left, right):
    if not head or left == right:
        return head
    dummy = ListNode(0, head)
    prev = dummy
    for _ in range(left - 1):
        prev = prev.next
    curr = prev.next
    for _ in range(right - left):
        temp = curr.next
        curr.next = temp.next
        temp.next = prev.next
        prev.next = temp
    return dummy.next

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
        if (head == null || left == right) return head;
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode prev = dummy;
        for (int i = 0; i < left - 1; i++) prev = prev.next;
        ListNode curr = prev.next;
        for (int i = 0; i < right - left; i++) {
            ListNode temp = curr.next;
            curr.next = temp.next;
            temp.next = prev.next;
            prev.next = temp;
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
    if (head == NULL || left == right) return head;
    struct ListNode dummy;
    dummy.next = head;
    struct ListNode* prev = &dummy;
    for (int i = 0; i < left - 1; i++) prev = prev->next;
    struct ListNode* curr = prev->next;
    for (int i = 0; i < right - left; i++) {
        struct ListNode* temp = curr->next;
        curr->next = temp->next;
        temp->next = prev->next;
        prev->next = temp;
    }
    return dummy.next;
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
    if (!head || left == right) return head;
    ListNode dummy(0);
    dummy.next = head;
    ListNode* prev = &dummy;
    for (int i = 0; i < left - 1; i++) prev = prev->next;
    ListNode* curr = prev->next;
    for (int i = 0; i < right - left; i++) {
        ListNode* temp = curr->next;
        curr->next = temp->next;
        temp->next = prev->next;
        prev->next = temp;
    }
    return dummy.next;
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
  },
  'rnk-e3': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def swap_pairs(head):
    dummy = ListNode(0, head)
    prev = dummy
    while prev.next and prev.next.next:
        first = prev.next
        second = first.next
        first.next = second.next
        second.next = first
        prev.next = second
        prev = first
    return dummy.next

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
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode prev = dummy;
        while (prev.next != null && prev.next.next != null) {
            ListNode first = prev.next;
            ListNode second = first.next;
            first.next = second.next;
            second.next = first;
            prev.next = second;
            prev = first;
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
    struct ListNode dummy;
    dummy.next = head;
    struct ListNode* prev = &dummy;
    while (prev->next != NULL && prev->next->next != NULL) {
        struct ListNode* first = prev->next;
        struct ListNode* second = first->next;
        first->next = second->next;
        second->next = first;
        prev->next = second;
        prev = first;
    }
    return dummy.next;
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
    ListNode dummy(0);
    dummy.next = head;
    ListNode* prev = &dummy;
    while (prev->next != nullptr && prev->next->next != nullptr) {
        ListNode* first = prev->next;
        ListNode* second = first->next;
        first->next = second->next;
        second->next = first;
        prev->next = second;
        prev = first;
    }
    return dummy.next;
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
  },
  'rnk-e4': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def rearrange_alt(head):
    if not head or not head.next:
        return head
    odd = head
    even = head.next
    even_head = even
    while even and even.next:
        odd.next = even.next
        odd = odd.next
        even.next = odd.next
        even = even.next
    # Reverse the even list
    prev = None
    curr = even_head
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    odd.next = prev
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
        if (head == null || head.next == null) return head;
        ListNode odd = head;
        ListNode even = head.next;
        ListNode evenHead = even;
        while (even != null && even.next != null) {
            odd.next = even.next;
            odd = odd.next;
            even.next = odd.next;
            even = even.next;
        }
        ListNode prev = null;
        ListNode curr = evenHead;
        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        odd.next = prev;
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
    if (head == NULL || head->next == NULL) return head;
    struct ListNode* odd = head;
    struct ListNode* even = head->next;
    struct ListNode* evenHead = even;
    while (even != NULL && even->next != NULL) {
        odd->next = even->next;
        odd = odd->next;
        even->next = odd->next;
        even = even->next;
    }
    struct ListNode* prev = NULL;
    struct ListNode* curr = evenHead;
    while (curr != NULL) {
        struct ListNode* next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    odd->next = prev;
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
    if (!head || !head->next) return head;
    ListNode* odd = head;
    ListNode* even = head->next;
    ListNode* evenHead = even;
    while (even != nullptr && even->next != nullptr) {
        odd->next = even->next;
        odd = odd->next;
        even->next = odd->next;
        even = even->next;
    }
    ListNode* prev = nullptr;
    ListNode* curr = evenHead;
    while (curr != nullptr) {
        ListNode* next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    odd->next = prev;
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
  },
  'rnk-e5': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def is_palindrome(head):
    if not head or not head.next:
        return True
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    # Reverse second half
    prev = None
    while slow:
        nxt = slow.next
        slow.next = prev
        prev = slow
        slow = nxt
    # Compare
    left, right = head, prev
    while right:
        if left.val != right.val:
            return False
        left = left.next
        right = right.next
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
        if (head == null || head.next == null) return true;
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        ListNode prev = null;
        ListNode curr = slow;
        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        ListNode left = head, right = prev;
        while (right != null) {
            if (left.val != right.val) return false;
            left = left.next;
            right = right.next;
        }
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
    int vals[5005];
    int size = 0;
    struct ListNode* curr = head;
    while (curr != NULL && size < 5005) {
        vals[size++] = curr->val;
        curr = curr->next;
    }
    int l = 0, r = size - 1;
    while (l < r) {
        if (vals[l] != vals[r]) return false;
        l++; r--;
    }
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

#include <vector>
using namespace std;

#include <vector>
using namespace std;

bool isPalindrome(ListNode* head) {
    vector<int> vals;
    ListNode* curr = head;
    while (curr != nullptr) {
        vals.push_back(curr->val);
        curr = curr->next;
    }
    int l = 0, r = (int)vals.size() - 1;
    while (l < r) {
        if (vals[l] != vals[r]) return false;
        l++; r--;
    }
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
  },
  'rnk-m1': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_k_group(head, k):
    curr = head
    count = 0
    while curr and count < k:
        curr = curr.next
        count += 1
    if count == k:
        prev = None
        temp = head
        for _ in range(k):
            nxt = temp.next
            temp.next = prev
            prev = temp
            temp = nxt
        if head:
            head.next = reverse_k_group(temp, k)
        return prev
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
        ListNode curr = head;
        int count = 0;
        while (curr != null && count < k) {
            curr = curr.next;
            count++;
        }
        if (count == k) {
            ListNode prev = null;
            ListNode temp = head;
            for (int i = 0; i < k; i++) {
                ListNode next = temp.next;
                temp.next = prev;
                prev = temp;
                temp = next;
            }
            if (head != null) {
                head.next = reverseKGroup(temp, k);
            }
            return prev;
        }
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
    struct ListNode* curr = head;
    int count = 0;
    while (curr != NULL && count < k) {
        curr = curr->next;
        count++;
    }
    if (count == k) {
        struct ListNode* prev = NULL;
        struct ListNode* temp = head;
        for (int i = 0; i < k; i++) {
            struct ListNode* next = temp->next;
            temp->next = prev;
            prev = temp;
            temp = next;
        }
        if (head != NULL) {
            head->next = reverseKGroup(temp, k);
        }
        return prev;
    }
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
    ListNode* curr = head;
    int count = 0;
    while (curr != nullptr && count < k) {
        curr = curr->next;
        count++;
    }
    if (count == k) {
        ListNode* prev = nullptr;
        ListNode* temp = head;
        for (int i = 0; i < k; i++) {
            ListNode* next = temp->next;
            temp->next = prev;
            prev = temp;
            temp = next;
        }
        if (head != nullptr) {
            head->next = reverseKGroup(temp, k);
        }
        return prev;
    }
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
  },
  'rnk-m2': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_alt_k(head, k):
    curr = head
    count = 0
    while curr and count < k:
        curr = curr.next
        count += 1
    if count == k:
        prev = None
        temp = head
        for _ in range(k):
            nxt = temp.next
            temp.next = prev
            prev = temp
            temp = nxt
        if head:
            head.next = temp
        # Skip next k nodes
        skip_count = 0
        while temp and skip_count < k - 1:
            temp = temp.next
            skip_count += 1
        if temp:
            temp.next = reverse_alt_k(temp.next, k)
        return prev
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
        ListNode curr = head;
        int count = 0;
        while (curr != null && count < k) {
            curr = curr.next;
            count++;
        }
        if (count == k) {
            ListNode prev = null;
            ListNode temp = head;
            for (int i = 0; i < k; i++) {
                ListNode next = temp.next;
                temp.next = prev;
                prev = temp;
                temp = next;
            }
            if (head != null) {
                head.next = temp;
            }
            int skipCount = 0;
            while (temp != null && skipCount < k - 1) {
                temp = temp.next;
                skipCount++;
            }
            if (temp != null) {
                temp.next = reverseAltK(temp.next, k);
            }
            return prev;
        }
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
    struct ListNode* curr = head;
    int count = 0;
    while (curr != NULL && count < k) {
        curr = curr->next;
        count++;
    }
    if (count == k) {
        struct ListNode* prev = NULL;
        struct ListNode* temp = head;
        for (int i = 0; i < k; i++) {
            struct ListNode* next = temp->next;
            temp->next = prev;
            prev = temp;
            temp = next;
        }
        if (head != NULL) {
            head->next = temp;
        }
        int skipCount = 0;
        while (temp != NULL && skipCount < k - 1) {
            temp = temp->next;
            skipCount++;
        }
        if (temp != NULL) {
            temp->next = reverseAltK(temp->next, k);
        }
        return prev;
    }
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
    ListNode* curr = head;
    int count = 0;
    while (curr != nullptr && count < k) {
        curr = curr->next;
        count++;
    }
    if (count == k) {
        ListNode* prev = nullptr;
        ListNode* temp = head;
        for (int i = 0; i < k; i++) {
            ListNode* next = temp->next;
            temp->next = prev;
            prev = temp;
            temp = next;
        }
        if (head != nullptr) {
            head->next = temp;
        }
        int skipCount = 0;
        while (temp != nullptr && skipCount < k - 1) {
            temp = temp->next;
            skipCount++;
        }
        if (temp != nullptr) {
            temp->next = reverseAltK(temp->next, k);
        }
        return prev;
    }
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
  },
  'rnk-m3': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def odd_even_list(head):
    if not head or not head.next:
        return head
    odd = head
    even = head.next
    even_head = even
    while even and even.next:
        odd.next = even.next
        odd = odd.next
        even.next = odd.next
        even = even.next
    odd.next = even_head
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
        if (head == null || head.next == null) return head;
        ListNode odd = head;
        ListNode even = head.next;
        ListNode evenHead = even;
        while (even != null && even.next != null) {
            odd.next = even.next;
            odd = odd.next;
            even.next = odd.next;
            even = even.next;
        }
        odd.next = evenHead;
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
    if (head == NULL || head->next == NULL) return head;
    struct ListNode* odd = head;
    struct ListNode* even = head->next;
    struct ListNode* evenHead = even;
    while (even != NULL && even->next != NULL) {
        odd->next = even->next;
        odd = odd->next;
        even->next = odd->next;
        even = even->next;
    }
    odd->next = evenHead;
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
    if (!head || !head->next) return head;
    ListNode* odd = head;
    ListNode* even = head->next;
    ListNode* evenHead = even;
    while (even != nullptr && even->next != nullptr) {
        odd->next = even->next;
        odd = odd->next;
        even->next = odd->next;
        even = even->next;
    }
    odd->next = evenHead;
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
  },
  'rnk-m4': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reorder_list(head):
    if not head or not head.next:
        return
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    
    # Reverse second half
    prev = None
    curr = slow.next
    slow.next = None
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    
    # Merge two lists
    first, second = head, prev
    while second:
        tmp1, tmp2 = first.next, second.next
        first.next = second
        second.next = tmp1
        first, second = tmp1, tmp2

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
        if (head == null || head.next == null) return;
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        ListNode prev = null;
        ListNode curr = slow.next;
        slow.next = null;
        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        ListNode first = head, second = prev;
        while (second != null) {
            ListNode tmp1 = first.next;
            ListNode tmp2 = second.next;
            first.next = second;
            second.next = tmp1;
            first = tmp1;
            second = tmp2;
        }
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
    if (head == NULL || head->next == NULL) return;
    struct ListNode *slow = head, *fast = head;
    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
    }
    struct ListNode* prev = NULL;
    struct ListNode* curr = slow->next;
    slow->next = NULL;
    while (curr != NULL) {
        struct ListNode* next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    struct ListNode* first = head;
    struct ListNode* second = prev;
    while (second != NULL) {
        struct ListNode* tmp1 = first->next;
        struct ListNode* tmp2 = second->next;
        first->next = second;
        second->next = tmp1;
        first = tmp1;
        second = tmp2;
    }
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
    if (!head || !head->next) return;
    ListNode *slow = head, *fast = head;
    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;
    }
    ListNode* prev = nullptr;
    ListNode* curr = slow->next;
    slow->next = nullptr;
    while (curr != nullptr) {
        ListNode* next = curr->next;
        curr->next = prev;
        prev = curr;
        curr = next;
    }
    ListNode* first = head;
    ListNode* second = prev;
    while (second != nullptr) {
        ListNode* tmp1 = first->next;
        ListNode* tmp2 = second->next;
        first->next = second;
        second->next = tmp1;
        first = tmp1;
        second = tmp2;
    }
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
  },
  'rnk-m5': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_even_groups(head):
    # Find size of each group
    prev_group_end = head
    group_len = 2
    while prev_group_end and prev_group_end.next:
        curr = prev_group_end.next
        # Count remaining nodes
        count = 0
        temp = curr
        while temp and count < group_len:
            temp = temp.next
            count += 1
        
        actual_len = count
        if actual_len % 2 == 0:
            # Reverse this group
            prev = temp # Connect tail of reversed group to temp (which is next group's head)
            for _ in range(actual_len):
                nxt = curr.next
                curr.next = prev
                prev = curr
                curr = nxt
            next_group_end = prev_group_end.next # Original head is now tail
            prev_group_end.next = prev
            prev_group_end = next_group_end
        else:
            # Keep as is, advance to the end of the group
            for _ in range(actual_len):
                prev_group_end = prev_group_end.next
        group_len += 1
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
        ListNode prevGroupEnd = head;
        int groupLen = 2;
        while (prevGroupEnd != null && prevGroupEnd.next != null) {
            ListNode curr = prevGroupEnd.next;
            int count = 0;
            ListNode temp = curr;
            while (temp != null && count < groupLen) {
                temp = temp.next;
                count++;
            }
            int actualLen = count;
            if (actualLen % 2 == 0) {
                ListNode prev = temp;
                for (int i = 0; i < actualLen; i++) {
                    ListNode next = curr.next;
                    curr.next = prev;
                    prev = curr;
                    curr = next;
                }
                ListNode nextGroupEnd = prevGroupEnd.next;
                prevGroupEnd.next = prev;
                prevGroupEnd = nextGroupEnd;
            } else {
                for (int i = 0; i < actualLen; i++) {
                    prevGroupEnd = prevGroupEnd.next;
                }
            }
            groupLen++;
        }
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
    struct ListNode* prevGroupEnd = head;
    int groupLen = 2;
    while (prevGroupEnd != NULL && prevGroupEnd->next != NULL) {
        struct ListNode* curr = prevGroupEnd->next;
        int count = 0;
        struct ListNode* temp = curr;
        while (temp != NULL && count < groupLen) {
            temp = temp->next;
            count++;
        }
        int actualLen = count;
        if (actualLen % 2 == 0) {
            struct ListNode* prev = temp;
            for (int i = 0; i < actualLen; i++) {
                struct ListNode* next = curr->next;
                curr->next = prev;
                prev = curr;
                curr = next;
            }
            struct ListNode* nextGroupEnd = prevGroupEnd->next;
            prevGroupEnd->next = prev;
            prevGroupEnd = nextGroupEnd;
        } else {
            for (int i = 0; i < actualLen; i++) {
                prevGroupEnd = prevGroupEnd->next;
            }
        }
        groupLen++;
    }
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
    ListNode* prevGroupEnd = head;
    int groupLen = 2;
    while (prevGroupEnd != nullptr && prevGroupEnd->next != nullptr) {
        ListNode* curr = prevGroupEnd->next;
        int count = 0;
        ListNode* temp = curr;
        while (temp != nullptr && count < groupLen) {
            temp = temp->next;
            count++;
        }
        int actualLen = count;
        if (actualLen % 2 == 0) {
            ListNode* prev = temp;
            for (int i = 0; i < actualLen; i++) {
                ListNode* next = curr->next;
                curr->next = prev;
                prev = curr;
                curr = next;
            }
            ListNode* nextGroupEnd = prevGroupEnd->next;
            prevGroupEnd->next = prev;
            prevGroupEnd = nextGroupEnd;
        } else {
            for (int i = 0; i < actualLen; i++) {
                prevGroupEnd = prevGroupEnd->next;
            }
        }
        groupLen++;
    }
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
  },
  // --- HARD ---
  'rnk-h1': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_k_group_iterative(head, k):
    if not head or k == 1:
        return head
    dummy = ListNode(0, head)
    prev_group_end = dummy
    while True:
        # Check if k nodes exist
        curr = prev_group_end.next
        temp = curr
        count = 0
        while temp and count < k:
            temp = temp.next
            count += 1
        if count < k:
            break
        # Reverse group in-place
        prev = temp
        for _ in range(k):
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        next_group_end = prev_group_end.next
        prev_group_end.next = prev
        prev_group_end = next_group_end
    return dummy.next

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
        if (head == null || k == 1) return head;
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode prevGroupEnd = dummy;
        while (true) {
            ListNode curr = prevGroupEnd.next;
            ListNode temp = curr;
            int count = 0;
            while (temp != null && count < k) {
                temp = temp.next;
                count++;
            }
            if (count < k) break;
            ListNode prev = temp;
            for (int i = 0; i < k; i++) {
                ListNode next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }
            ListNode nextGroupEnd = prevGroupEnd.next;
            prevGroupEnd.next = prev;
            prevGroupEnd = nextGroupEnd;
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
    if (head == NULL || k == 1) return head;
    struct ListNode dummy;
    dummy.next = head;
    struct ListNode* prevGroupEnd = &dummy;
    while (1) {
        struct ListNode* curr = prevGroupEnd->next;
        struct ListNode* temp = curr;
        int count = 0;
        while (temp != NULL && count < k) {
            temp = temp->next;
            count++;
        }
        if (count < k) break;
        struct ListNode* prev = temp;
        for (int i = 0; i < k; i++) {
            struct ListNode* next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }
        struct ListNode* nextGroupEnd = prevGroupEnd->next;
        prevGroupEnd->next = prev;
        prevGroupEnd = nextGroupEnd;
    }
    return dummy.next;
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
    if (!head || k == 1) return head;
    ListNode dummy(0);
    dummy.next = head;
    ListNode* prevGroupEnd = &dummy;
    while (true) {
        ListNode* curr = prevGroupEnd->next;
        ListNode* temp = curr;
        int count = 0;
        while (temp != nullptr && count < k) {
            temp = temp->next;
            count++;
        }
        if (count < k) break;
        ListNode* prev = temp;
        for (int i = 0; i < k; i++) {
            ListNode* next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }
        ListNode* nextGroupEnd = prevGroupEnd->next;
        prevGroupEnd->next = prev;
        prevGroupEnd = nextGroupEnd;
    }
    return dummy.next;
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
  },
  'rnk-h2': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_decreasing_k(head, k):
    if not head or k <= 1:
        return head
    dummy = ListNode(0, head)
    prev_group_end = dummy
    curr_k = k
    while prev_group_end and curr_k >= 1:
        curr = prev_group_end.next
        # Count remaining nodes
        temp = curr
        count = 0
        while temp and count < curr_k:
            temp = temp.next
            count += 1
        if count < curr_k:
            break
        # Reverse curr_k nodes
        prev = temp
        for _ in range(curr_k):
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        next_group_end = prev_group_end.next
        prev_group_end.next = prev
        prev_group_end = next_group_end
        curr_k -= 1
    return dummy.next

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
        if (head == null || k <= 1) return head;
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode prevGroupEnd = dummy;
        int currK = k;
        while (prevGroupEnd != null && currK >= 1) {
            ListNode curr = prevGroupEnd.next;
            ListNode temp = curr;
            int count = 0;
            while (temp != null && count < currK) {
                temp = temp.next;
                count++;
            }
            if (count < currK) break;
            ListNode prev = temp;
            for (int i = 0; i < currK; i++) {
                ListNode next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }
            ListNode nextGroupEnd = prevGroupEnd.next;
            prevGroupEnd.next = prev;
            prevGroupEnd = nextGroupEnd;
            currK--;
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
    if (head == NULL || k <= 1) return head;
    struct ListNode dummy;
    dummy.next = head;
    struct ListNode* prevGroupEnd = &dummy;
    int currK = k;
    while (prevGroupEnd != NULL && currK >= 1) {
        struct ListNode* curr = prevGroupEnd->next;
        struct ListNode* temp = curr;
        int count = 0;
        while (temp != NULL && count < currK) {
            temp = temp->next;
            count++;
        }
        if (count < currK) break;
        struct ListNode* prev = temp;
        for (int i = 0; i < currK; i++) {
            struct ListNode* next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }
        struct ListNode* nextGroupEnd = prevGroupEnd->next;
        prevGroupEnd->next = prev;
        prevGroupEnd = nextGroupEnd;
        currK--;
    }
    return dummy.next;
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
    if (!head || k <= 1) return head;
    ListNode dummy(0);
    dummy.next = head;
    ListNode* prevGroupEnd = &dummy;
    int currK = k;
    while (prevGroupEnd != nullptr && currK >= 1) {
        ListNode* curr = prevGroupEnd->next;
        ListNode* temp = curr;
        int count = 0;
        while (temp != nullptr && count < currK) {
            temp = temp->next;
            count++;
        }
        if (count < currK) break;
        ListNode* prev = temp;
        for (int i = 0; i < currK; i++) {
            ListNode* next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }
        ListNode* nextGroupEnd = prevGroupEnd->next;
        prevGroupEnd->next = prev;
        prevGroupEnd = nextGroupEnd;
        currK--;
    }
    return dummy.next;
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
  },
  'rnk-h3': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_custom_sizes(head, sizes):
    if not head or not sizes:
        return head
    dummy = ListNode(0, head)
    prev_group_end = dummy
    idx = 0
    while prev_group_end and idx < len(sizes):
        curr_k = sizes[idx]
        curr = prev_group_end.next
        temp = curr
        count = 0
        while temp and count < curr_k:
            temp = temp.next
            count += 1
        if count < curr_k:
            break
        prev = temp
        for _ in range(curr_k):
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        next_group_end = prev_group_end.next
        prev_group_end.next = prev
        prev_group_end = next_group_end
        idx += 1
    return dummy.next

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
        if (head == null || sizes == null || sizes.length == 0) return head;
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode prevGroupEnd = dummy;
        int idx = 0;
        while (prevGroupEnd != null && idx < sizes.length) {
            int currK = sizes[idx];
            ListNode curr = prevGroupEnd.next;
            ListNode temp = curr;
            int count = 0;
            while (temp != null && count < currK) {
                temp = temp.next;
                count++;
            }
            if (count < currK) break;
            ListNode prev = temp;
            for (int i = 0; i < currK; i++) {
                ListNode next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }
            ListNode nextGroupEnd = prevGroupEnd.next;
            prevGroupEnd.next = prev;
            prevGroupEnd = nextGroupEnd;
            idx++;
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
    if (head == NULL || sizes == NULL || sizesSize == 0) return head;
    struct ListNode dummy;
    dummy.next = head;
    struct ListNode* prevGroupEnd = &dummy;
    int idx = 0;
    while (prevGroupEnd != NULL && idx < sizesSize) {
        int currK = sizes[idx];
        struct ListNode* curr = prevGroupEnd->next;
        struct ListNode* temp = curr;
        int count = 0;
        while (temp != NULL && count < currK) {
            temp = temp->next;
            count++;
        }
        if (count < currK) break;
        struct ListNode* prev = temp;
        for (int i = 0; i < currK; i++) {
            struct ListNode* next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }
        struct ListNode* nextGroupEnd = prevGroupEnd->next;
        prevGroupEnd->next = prev;
        prevGroupEnd = nextGroupEnd;
        idx++;
    }
    return dummy.next;
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
    if (!head || sizes.empty()) return head;
    ListNode dummy(0);
    dummy.next = head;
    ListNode* prevGroupEnd = &dummy;
    int idx = 0;
    while (prevGroupEnd != nullptr && idx < sizes.size()) {
        int currK = sizes[idx];
        ListNode* curr = prevGroupEnd->next;
        ListNode* temp = curr;
        int count = 0;
        while (temp != nullptr && count < currK) {
            temp = temp->next;
            count++;
        }
        if (count < currK) break;
        ListNode* prev = temp;
        for (int i = 0; i < currK; i++) {
            ListNode* next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }
        ListNode* nextGroupEnd = prevGroupEnd->next;
        prevGroupEnd->next = prev;
        prevGroupEnd = nextGroupEnd;
        idx++;
    }
    return dummy.next;
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
  },
  'rnk-h4': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def get_mid(head):
    slow, fast = head, head.next
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow

def merge(l1, l2):
    dummy = ListNode(0)
    curr = dummy
    while l1 and l2:
        if l1.val < l2.val:
            curr.next = l1
            l1 = l1.next
        else:
            curr.next = l2
            l2 = l2.next
        curr = curr.next
    curr.next = l1 or l2
    return dummy.next

def sort_list(head):
    if not head or not head.next:
        return head
    mid = get_mid(head)
    nxt = mid.next
    mid.next = None
    l1 = sort_list(head)
    l2 = sort_list(nxt)
    return merge(l1, l2)

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
    private static ListNode getMid(ListNode head) {
        ListNode slow = head, fast = head.next;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    private static ListNode merge(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        while (l1 != null && l2 != null) {
            if (l1.val < l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }
        curr.next = (l1 != null) ? l1 : l2;
        return dummy.next;
    }

    public static ListNode sortList(ListNode head) {
        if (head == null || head.next == null) return head;
        ListNode mid = getMid(head);
        ListNode nxt = mid.next;
        mid.next = null;
        ListNode l1 = sortList(head);
        ListNode l2 = sortList(nxt);
        return merge(l1, l2);
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

struct ListNode* getMid(struct ListNode* head) {
    struct ListNode* slow = head;
    struct ListNode* fast = head->next;
    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
    }
    return slow;
}

struct ListNode* merge(struct ListNode* l1, struct ListNode* l2) {
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* curr = &dummy;
    while (l1 != NULL && l2 != NULL) {
        if (l1->val < l2->val) {
            curr->next = l1;
            l1 = l1->next;
        } else {
            curr->next = l2;
            l2 = l2->next;
        }
        curr = curr->next;
    }
    curr->next = (l1 != NULL) ? l1 : l2;
    return dummy.next;
}

struct ListNode* sortList(struct ListNode* head) {
    if (head == NULL || head->next == NULL) return head;
    struct ListNode* mid = getMid(head);
    struct ListNode* nxt = mid->next;
    mid->next = NULL;
    struct ListNode* l1 = sortList(head);
    struct ListNode* l2 = sortList(nxt);
    return merge(l1, l2);
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

ListNode* getMid(ListNode* head) {
    ListNode* slow = head;
    ListNode* fast = head->next;
    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;
    }
    return slow;
}

ListNode* merge(ListNode* l1, ListNode* l2) {
    ListNode dummy(0);
    ListNode* curr = &dummy;
    while (l1 != nullptr && l2 != nullptr) {
        if (l1->val < l2->val) {
            curr->next = l1;
            l1 = l1->next;
        } else {
            curr->next = l2;
            l2 = l2->next;
        }
        curr = curr->next;
    }
    curr->next = (l1 != nullptr) ? l1 : l2;
    return dummy.next;
}

ListNode* sortList(ListNode* head) {
    if (!head || !head->next) return head;
    ListNode* mid = getMid(head);
    ListNode* nxt = mid->next;
    mid->next = nullptr;
    ListNode* l1 = sortList(head);
    ListNode* l2 = sortList(nxt);
    return merge(l1, l2);
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
  },
  'rnk-h5': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_k_group(head, k):
    curr = head
    count = 0
    while curr and count < k:
        curr = curr.next
        count += 1
    if count == k:
        prev = None
        temp = head
        for _ in range(k):
            nxt = temp.next
            temp.next = prev
            prev = temp
            temp = nxt
        if head:
            head.next = reverse_k_group(temp, k)
        return prev
    return head

def is_palindrome(head):
    vals = []
    curr = head
    while curr:
        vals.append(curr.val)
        curr = curr.next
    return vals == vals[::-1]

def reverse_k_group_and_check(head, k):
    res = reverse_k_group(head, k)
    return res, is_palindrome(res)

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

    private static ListNode reverseKGroup(ListNode head, int k) {
        ListNode curr = head;
        int count = 0;
        while (curr != null && count < k) {
            curr = curr.next;
            count++;
        }
        if (count == k) {
            ListNode prev = null;
            ListNode temp = head;
            for (int i = 0; i < k; i++) {
                ListNode next = temp.next;
                temp.next = prev;
                prev = temp;
                temp = next;
            }
            if (head != null) {
                head.next = reverseKGroup(temp, k);
            }
            return prev;
        }
        return head;
    }

    private static boolean isPalindrome(ListNode head) {
        List<Integer> vals = new ArrayList<>();
        ListNode curr = head;
        while (curr != null) {
            vals.add(curr.val);
            curr = curr.next;
        }
        int l = 0, r = vals.size() - 1;
        while (l < r) {
            if (!vals.get(l).equals(vals.get(r))) return false;
            l++; r--;
        }
        return true;
    }

    public static Result reverseKGroupAndCheck(ListNode head, int k) {
        ListNode res = reverseKGroup(head, k);
        return new Result(res, isPalindrome(res));
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

struct ListNode* reverseKGroup(struct ListNode* head, int k) {
    struct ListNode* curr = head;
    int count = 0;
    while (curr != NULL && count < k) {
        curr = curr->next;
        count++;
    }
    if (count == k) {
        struct ListNode* prev = NULL;
        struct ListNode* temp = head;
        for (int i = 0; i < k; i++) {
            struct ListNode* next = temp->next;
            temp->next = prev;
            prev = temp;
            temp = next;
        }
        if (head != NULL) {
            head->next = reverseKGroup(temp, k);
        }
        return prev;
    }
    return head;
}

bool isPalindrome(struct ListNode* head) {
    int vals[5005];
    int size = 0;
    struct ListNode* curr = head;
    while (curr != NULL && size < 5005) {
        vals[size++] = curr->val;
        curr = curr->next;
    }
    int l = 0, r = size - 1;
    while (l < r) {
        if (vals[l] != vals[r]) return false;
        l++; r--;
    }
    return true;
}

struct ListNode* reverseKGroupAndCheck(struct ListNode* head, int k, bool* isPal) {
    struct ListNode* res = reverseKGroup(head, k);
    *isPal = isPalindrome(res);
    return res;
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
        printf("Palindrome\\\n");
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

ListNode* reverseKGroup(ListNode* head, int k) {
    ListNode* curr = head;
    int count = 0;
    while (curr != nullptr && count < k) {
        curr = curr->next;
        count++;
    }
    if (count == k) {
        ListNode* prev = nullptr;
        ListNode* temp = head;
        for (int i = 0; i < k; i++) {
            ListNode* next = temp->next;
            temp->next = prev;
            prev = temp;
            temp = next;
        }
        if (head != nullptr) {
            head->next = reverseKGroup(temp, k);
        }
        return prev;
    }
    return head;
}

#include <vector>
using namespace std;

#include <vector>
using namespace std;

bool isPalindrome(ListNode* head) {
    vector<int> vals;
    ListNode* curr = head;
    while (curr != nullptr) {
        vals.push_back(curr->val);
        curr = curr->next;
    }
    int l = 0, r = (int)vals.size() - 1;
    while (l < r) {
        if (vals[l] != vals[r]) return false;
        l++; r--;
    }
    return true;
}

pair<ListNode*, bool> reverseKGroupAndCheck(ListNode* head, int k) {
    ListNode* res = reverseKGroup(head, k);
    return {res, isPalindrome(res)};
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
            cout << "Palindrome\\\n";
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
};
