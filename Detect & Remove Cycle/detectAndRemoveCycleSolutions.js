export const detectAndRemoveCycleSolutions = {
  'drc-e1': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def has_cycle(head):
    if not head or not head.next:
        return False
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    pos = int(input())
    dummy = ListNode(0)
    curr = dummy
    nodes = []
    for v in arr:
        node = ListNode(v)
        nodes.append(node)
        curr.next = node
        curr = curr.next
    if pos != -1 and pos < len(nodes):
        curr.next = nodes[pos]
    print(str(has_cycle(dummy.next)).lower())
else:
    print("false")`,
    java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static boolean hasCycle(ListNode head) {
        if (head == null || head.next == null) return false;
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return true;
        }
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;
            List<ListNode> nodes = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                ListNode node = new ListNode(sc.nextInt());
                nodes.add(node);
                curr.next = node;
                curr = curr.next;
            }
            int pos = sc.nextInt();
            if (pos != -1 && pos < nodes.size()) {
                curr.next = nodes.get(pos);
            }
            System.out.println(hasCycle(dummy.next));
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

bool hasCycle(struct ListNode* head) {
    if (head == NULL || head->next == NULL) return false;
    struct ListNode *slow = head, *fast = head;
    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    return false;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* curr = &dummy;
    struct ListNode** nodes = malloc(n * sizeof(struct ListNode*));
    for (int i = 0; i < n; i++) {
        int val;
        scanf("%d", &val);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = val;
        node->next = NULL;
        nodes[i] = node;
        curr->next = node;
        curr = node;
    }
    int pos;
    scanf("%d", &pos);
    if (pos != -1 && pos < n) {
        curr->next = nodes[pos];
    }
    printf("%s\\n", hasCycle(dummy.next) ? "true" : "false");
    free(nodes);
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

bool hasCycle(ListNode* head) {
    if (head == nullptr || head->next == nullptr) return false;
    ListNode *slow = head, *fast = head;
    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    return false;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        vector<ListNode*> nodes(n);
        for (int i = 0; i < n; i++) {
            int val;
            cin >> val;
            ListNode* node = new ListNode(val);
            nodes[i] = node;
            curr->next = node;
            curr = curr->next;
        }
        int pos;
        cin >> pos;
        if (pos != -1 && pos < n) {
            curr->next = nodes[pos];
        }
        cout << (hasCycle(dummy.next) ? "true" : "false") << "\\n";
    }
    return 0;
}`
  },
  'drc-e2': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def cycle_length(head):
    if not head or not head.next:
        return 0
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            # count cycle length
            count = 1
            curr = slow.next
            while curr != slow:
                count += 1
                curr = curr.next
            return count
    return 0

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    pos = int(input())
    dummy = ListNode(0)
    curr = dummy
    nodes = []
    for v in arr:
        node = ListNode(v)
        nodes.append(node)
        curr.next = node
        curr = curr.next
    if pos != -1 and pos < len(nodes):
        curr.next = nodes[pos]
    print(cycle_length(dummy.next))
else:
    print(0)`,
    java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static int cycleLength(ListNode head) {
        if (head == null || head.next == null) return 0;
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                int count = 1;
                ListNode curr = slow.next;
                while (curr != slow) {
                    count++;
                    curr = curr.next;
                }
                return count;
            }
        }
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;
            List<ListNode> nodes = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                ListNode node = new ListNode(sc.nextInt());
                nodes.add(node);
                curr.next = node;
                curr = curr.next;
            }
            int pos = sc.nextInt();
            if (pos != -1 && pos < nodes.size()) {
                curr.next = nodes.get(pos);
            }
            System.out.println(cycleLength(dummy.next));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

int cycleLength(struct ListNode* head) {
    if (head == NULL || head->next == NULL) return 0;
    struct ListNode *slow = head, *fast = head;
    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            int count = 1;
            struct ListNode* curr = slow->next;
            while (curr != slow) {
                count++;
                curr = curr->next;
            }
            return count;
        }
    }
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* curr = &dummy;
    struct ListNode** nodes = malloc(n * sizeof(struct ListNode*));
    for (int i = 0; i < n; i++) {
        int val;
        scanf("%d", &val);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = val;
        node->next = NULL;
        nodes[i] = node;
        curr->next = node;
        curr = node;
    }
    int pos;
    scanf("%d", &pos);
    if (pos != -1 && pos < n) {
        curr->next = nodes[pos];
    }
    printf("%d\\n", cycleLength(dummy.next));
    free(nodes);
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

int cycleLength(ListNode* head) {
    if (head == nullptr || head->next == nullptr) return 0;
    ListNode *slow = head, *fast = head;
    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            int count = 1;
            ListNode* curr = slow->next;
            while (curr != slow) {
                count++;
                curr = curr->next;
            }
            return count;
        }
    }
    return 0;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        vector<ListNode*> nodes(n);
        for (int i = 0; i < n; i++) {
            int val;
            cin >> val;
            ListNode* node = new ListNode(val);
            nodes[i] = node;
            curr->next = node;
            curr = curr->next;
        }
        int pos;
        cin >> pos;
        if (pos != -1 && pos < n) {
            curr->next = nodes[pos];
        }
        cout << cycleLength(dummy.next) << "\\n";
    }
    return 0;
}`
  },
  'drc-e3': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def distinct_nodes(head):
    visited = set()
    curr = head
    while curr and curr not in visited:
        visited.add(curr)
        curr = curr.next
    return len(visited)

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    pos = int(input())
    dummy = ListNode(0)
    curr = dummy
    nodes = []
    for v in arr:
        node = ListNode(v)
        nodes.append(node)
        curr.next = node
        curr = curr.next
    if pos != -1 and pos < len(nodes):
        curr.next = nodes[pos]
    print(distinct_nodes(dummy.next))
else:
    print(0)`,
    java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static int distinctNodes(ListNode head) {
        Set<ListNode> visited = new HashSet<>();
        ListNode curr = head;
        while (curr != null && !visited.contains(curr)) {
            visited.add(curr);
            curr = curr.next;
        }
        return visited.size();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;
            List<ListNode> nodes = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                ListNode node = new ListNode(sc.nextInt());
                nodes.add(node);
                curr.next = node;
                curr = curr.next;
            }
            int pos = sc.nextInt();
            if (pos != -1 && pos < nodes.size()) {
                curr.next = nodes.get(pos);
            }
            System.out.println(distinctNodes(dummy.next));
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

int distinctNodes(struct ListNode* head) {
    struct ListNode* visited[5005];
    int count = 0;
    struct ListNode* curr = head;
    while (curr != NULL) {
        bool seen = false;
        for (int i = 0; i < count; i++) {
            if (visited[i] == curr) {
                seen = true;
                break;
            }
        }
        if (seen) break;
        visited[count++] = curr;
        curr = curr->next;
    }
    return count;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* curr = &dummy;
    struct ListNode** nodes = malloc(n * sizeof(struct ListNode*));
    for (int i = 0; i < n; i++) {
        int val;
        scanf("%d", &val);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = val;
        node->next = NULL;
        nodes[i] = node;
        curr->next = node;
        curr = node;
    }
    int pos;
    scanf("%d", &pos);
    if (pos != -1 && pos < n) {
        curr->next = nodes[pos];
    }
    printf("%d\\n", distinctNodes(dummy.next));
    free(nodes);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

int distinctNodes(ListNode* head) {
    unordered_set<ListNode*> visited;
    ListNode* curr = head;
    while (curr != nullptr && !visited.count(curr)) {
        visited.insert(curr);
        curr = curr->next;
    }
    return (int)visited.size();
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        vector<ListNode*> nodes(n);
        for (int i = 0; i < n; i++) {
            int val;
            cin >> val;
            ListNode* node = new ListNode(val);
            nodes[i] = node;
            curr->next = node;
            curr = curr->next;
        }
        int pos;
        cin >> pos;
        if (pos != -1 && pos < n) {
            curr->next = nodes[pos];
        }
        cout << distinctNodes(dummy.next) << "\\n";
    }
    return 0;
}`
  },
  'drc-e4': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def has_self_loop(head):
    curr = head
    while curr:
        if curr.next == curr:
            return True
        # To avoid infinite loop on other cycles:
        # standard slow-fast could miss self-loop if it's not the main meeting point,
        # but visiting nodes works perfectly.
        curr = curr.next
    return False

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    pos = int(input())
    dummy = ListNode(0)
    curr = dummy
    nodes = []
    for v in arr:
        node = ListNode(v)
        nodes.append(node)
        curr.next = node
        curr = curr.next
    if pos != -1 and pos < len(nodes):
        nodes[pos].next = nodes[pos]
    print(str(has_self_loop(dummy.next)).lower())
else:
    print("false")`,
    java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static boolean hasSelfLoop(ListNode head) {
        ListNode curr = head;
        while (curr != null) {
            if (curr.next == curr) return true;
            curr = curr.next;
        }
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;
            List<ListNode> nodes = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                ListNode node = new ListNode(sc.nextInt());
                nodes.add(node);
                curr.next = node;
                curr = curr.next;
            }
            int pos = sc.nextInt();
            if (pos != -1 && pos < nodes.size()) {
                nodes.get(pos).next = nodes.get(pos);
            }
            System.out.println(hasSelfLoop(dummy.next));
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

bool hasSelfLoop(struct ListNode* head) {
    struct ListNode* curr = head;
    while (curr != NULL) {
        if (curr->next == curr) return true;
        curr = curr->next;
    }
    return false;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* curr = &dummy;
    struct ListNode** nodes = malloc(n * sizeof(struct ListNode*));
    for (int i = 0; i < n; i++) {
        int val;
        scanf("%d", &val);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = val;
        node->next = NULL;
        nodes[i] = node;
        curr->next = node;
        curr = node;
    }
    int pos;
    scanf("%d", &pos);
    if (pos != -1 && pos < n) {
        nodes[pos]->next = nodes[pos];
    }
    printf("%s\\n", hasSelfLoop(dummy.next) ? "true" : "false");
    free(nodes);
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

bool hasSelfLoop(ListNode* head) {
    ListNode* curr = head;
    while (curr != nullptr) {
        if (curr->next == curr) return true;
        curr = curr->next;
    }
    return false;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        vector<ListNode*> nodes(n);
        for (int i = 0; i < n; i++) {
            int val;
            cin >> val;
            ListNode* node = new ListNode(val);
            nodes[i] = node;
            curr->next = node;
            curr = curr->next;
        }
        int pos;
        cin >> pos;
        if (pos != -1 && pos < n) {
            nodes[pos]->next = nodes[pos];
        }
        cout << (hasSelfLoop(dummy.next) ? "true" : "false") << "\\n";
    }
    return 0;
}`
  },
  'drc-e5': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def first_last_sum(head):
    if not head:
        return -1
    # Check cycle
    slow = fast = head
    has_cycle = False
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            has_cycle = True
            break
    if has_cycle:
        return -1
    # Get last node
    curr = head
    while curr.next:
        curr = curr.next
    return head.val + curr.val

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    pos = int(input())
    dummy = ListNode(0)
    curr = dummy
    nodes = []
    for v in arr:
        node = ListNode(v)
        nodes.append(node)
        curr.next = node
        curr = curr.next
    if pos != -1 and pos < len(nodes):
        curr.next = nodes[pos]
    print(first_last_sum(dummy.next))
else:
    print(-1)`,
    java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static int firstLastSum(ListNode head) {
        if (head == null) return -1;
        ListNode slow = head, fast = head;
        boolean hasCycle = false;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                hasCycle = true;
                break;
            }
        }
        if (hasCycle) return -1;
        ListNode curr = head;
        while (curr.next != null) {
            curr = curr.next;
        }
        return head.val + curr.val;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;
            List<ListNode> nodes = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                ListNode node = new ListNode(sc.nextInt());
                nodes.add(node);
                curr.next = node;
                curr = curr.next;
            }
            int pos = sc.nextInt();
            if (pos != -1 && pos < nodes.size()) {
                curr.next = nodes.get(pos);
            }
            System.out.println(firstLastSum(dummy.next));
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

int firstLastSum(struct ListNode* head) {
    if (head == NULL) return -1;
    struct ListNode *slow = head, *fast = head;
    bool hasCycle = false;
    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            hasCycle = true;
            break;
        }
    }
    if (hasCycle) return -1;
    struct ListNode* curr = head;
    while (curr->next != NULL) {
        curr = curr->next;
    }
    return head->val + curr->val;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* curr = &dummy;
    struct ListNode** nodes = malloc(n * sizeof(struct ListNode*));
    for (int i = 0; i < n; i++) {
        int val;
        scanf("%d", &val);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = val;
        node->next = NULL;
        nodes[i] = node;
        curr->next = node;
        curr = node;
    }
    int pos;
    scanf("%d", &pos);
    if (pos != -1 && pos < n) {
        curr->next = nodes[pos];
    }
    printf("%d\\n", firstLastSum(dummy.next));
    free(nodes);
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

int firstLastSum(ListNode* head) {
    if (head == nullptr) return -1;
    ListNode *slow = head, *fast = head;
    bool hasCycle = false;
    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            hasCycle = true;
            break;
        }
    }
    if (hasCycle) return -1;
    ListNode* curr = head;
    while (curr->next != nullptr) {
        curr = curr->next;
    }
    return head->val + curr->val;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        vector<ListNode*> nodes(n);
        for (int i = 0; i < n; i++) {
            int val;
            cin >> val;
            ListNode* node = new ListNode(val);
            nodes[i] = node;
            curr->next = node;
            curr = curr->next;
        }
        int pos;
        cin >> pos;
        if (pos != -1 && pos < n) {
            curr->next = nodes[pos];
        }
        cout << firstLastSum(dummy.next) << "\\n";
    }
    return 0;
}`
  },
  // --- MEDIUM ---
  'drc-m1': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def detect_cycle_start(head):
    if not head or not head.next:
        return None
    slow = fast = head
    has_cycle = False
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            has_cycle = True
            break
    if not has_cycle:
        return None
    slow = head
    while slow != fast:
        slow = slow.next
        fast = fast.next
    return slow

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    pos = int(input())
    dummy = ListNode(0)
    curr = dummy
    nodes = []
    for v in arr:
        node = ListNode(v)
        nodes.append(node)
        curr.next = node
        curr = curr.next
    if pos != -1 and pos < len(nodes):
        curr.next = nodes[pos]
    res = detect_cycle_start(dummy.next)
    print(str(res.val) if res else "null")
else:
    print("null")`,
    java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static ListNode detectCycleStart(ListNode head) {
        if (head == null || head.next == null) return null;
        ListNode slow = head, fast = head;
        boolean hasCycle = false;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                hasCycle = true;
                break;
            }
        }
        if (!hasCycle) return null;
        slow = head;
        while (slow != fast) {
            slow = slow.next;
            fast = fast.next;
        }
        return slow;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;
            List<ListNode> nodes = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                ListNode node = new ListNode(sc.nextInt());
                nodes.add(node);
                curr.next = node;
                curr = curr.next;
            }
            int pos = sc.nextInt();
            if (pos != -1 && pos < nodes.size()) {
                curr.next = nodes.get(pos);
            }
            ListNode res = detectCycleStart(dummy.next);
            System.out.println(res != null ? res.val : "null");
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

#include <stdbool.h>

struct ListNode* detectCycleStart(struct ListNode* head) {
    if (head == NULL || head->next == NULL) return NULL;
    struct ListNode *slow = head, *fast = head;
    bool hasCycle = false;
    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            hasCycle = true;
            break;
        }
    }
    if (!hasCycle) return NULL;
    slow = head;
    while (slow != fast) {
        slow = slow->next;
        fast = fast->next;
    }
    return slow;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* curr = &dummy;
    struct ListNode** nodes = malloc(n * sizeof(struct ListNode*));
    for (int i = 0; i < n; i++) {
        int val;
        scanf("%d", &val);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = val;
        node->next = NULL;
        nodes[i] = node;
        curr->next = node;
        curr = node;
    }
    int pos;
    scanf("%d", &pos);
    if (pos != -1 && pos < n) {
        curr->next = nodes[pos];
    }
    struct ListNode* res = detectCycleStart(dummy.next);
    if (res != NULL) {
        printf("%d\\n", res->val);
    } else {
        printf("null\\n");
    }
    free(nodes);
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

ListNode* detectCycleStart(ListNode* head) {
    if (head == nullptr || head->next == nullptr) return nullptr;
    ListNode *slow = head, *fast = head;
    bool hasCycle = false;
    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            hasCycle = true;
            break;
        }
    }
    if (!hasCycle) return nullptr;
    slow = head;
    while (slow != fast) {
        slow = slow->next;
        fast = fast->next;
    }
    return slow;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        vector<ListNode*> nodes(n);
        for (int i = 0; i < n; i++) {
            int val;
            cin >> val;
            ListNode* node = new ListNode(val);
            nodes[i] = node;
            curr->next = node;
            curr = curr->next;
        }
        int pos;
        cin >> pos;
        if (pos != -1 && pos < n) {
            curr->next = nodes[pos];
        }
        ListNode* res = detectCycleStart(dummy.next);
        if (res != nullptr) {
            cout << res->val << "\\n";
        } else {
            cout << "null\\n";
        }
    }
    return 0;
}`
  },
  'drc-m2': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def get_intersection_node(headA, headB):
    if not headA or not headB:
        return None
    pA, pB = headA, headB
    while pA != pB:
        pA = pA.next if pA else headB
        pB = pB.next if pB else headA
    return pA

lenA = int(input())
arrA = list(map(int, input().split())) if lenA > 0 else []
lenB = int(input())
arrB = list(map(int, input().split())) if lenB > 0 else []
lenC = int(input())
arrC = list(map(int, input().split())) if lenC > 0 else []

dummyA = ListNode(0)
currA = dummyA
for v in arrA:
    currA.next = ListNode(v)
    currA = currA.next

dummyB = ListNode(0)
currB = dummyB
for v in arrB:
    currB.next = ListNode(v)
    currB = currB.next

dummyC = ListNode(0)
currC = dummyC
for v in arrC:
    currC.next = ListNode(v)
    currC = currC.next

if lenC > 0:
    currA.next = dummyC.next
    currB.next = dummyC.next

res = get_intersection_node(dummyA.next, dummyB.next)
print(str(res.val) if res else "null")`,
    java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if (headA == null || headB == null) return null;
        ListNode pA = headA, pB = headB;
        while (pA != pB) {
            pA = (pA == null) ? headB : pA.next;
            pB = (pB == null) ? headA : pB.next;
        }
        return pA;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int lenA = sc.nextInt();
            ListNode dummyA = new ListNode(0);
            ListNode currA = dummyA;
            for (int i = 0; i < lenA; i++) {
                currA.next = new ListNode(sc.nextInt());
                currA = currA.next;
            }
            int lenB = sc.nextInt();
            ListNode dummyB = new ListNode(0);
            ListNode currB = dummyB;
            for (int i = 0; i < lenB; i++) {
                currB.next = new ListNode(sc.nextInt());
                currB = currB.next;
            }
            int lenC = sc.nextInt();
            ListNode dummyC = new ListNode(0);
            ListNode currC = dummyC;
            for (int i = 0; i < lenC; i++) {
                currC.next = new ListNode(sc.nextInt());
                currC = currC.next;
            }
            if (lenC > 0) {
                currA.next = dummyC.next;
                currB.next = dummyC.next;
            }
            ListNode res = getIntersectionNode(dummyA.next, dummyB.next);
            System.out.println(res != null ? res.val : "null");
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

struct ListNode* getIntersectionNode(struct ListNode* headA, struct ListNode* headB) {
    if (headA == NULL || headB == NULL) return NULL;
    struct ListNode* pA = headA;
    struct ListNode* pB = headB;
    while (pA != pB) {
        pA = (pA == NULL) ? headB : pA->next;
        pB = (pB == NULL) ? headA : pB->next;
    }
    return pA;
}

int main() {
    int lenA, lenB, lenC;
    if (scanf("%d", &lenA) != 1) return 0;
    struct ListNode dummyA; dummyA.next = NULL;
    struct ListNode* currA = &dummyA;
    for (int i = 0; i < lenA; i++) {
        int v; scanf("%d", &v);
        struct ListNode* n = malloc(sizeof(struct ListNode));
        n->val = v; n->next = NULL;
        currA->next = n; currA = n;
    }
    if (scanf("%d", &lenB) != 1) return 0;
    struct ListNode dummyB; dummyB.next = NULL;
    struct ListNode* currB = &dummyB;
    for (int i = 0; i < lenB; i++) {
        int v; scanf("%d", &v);
        struct ListNode* n = malloc(sizeof(struct ListNode));
        n->val = v; n->next = NULL;
        currB->next = n; currB = n;
    }
    if (scanf("%d", &lenC) != 1) return 0;
    struct ListNode dummyC; dummyC.next = NULL;
    struct ListNode* currC = &dummyC;
    for (int i = 0; i < lenC; i++) {
        int v; scanf("%d", &v);
        struct ListNode* n = malloc(sizeof(struct ListNode));
        n->val = v; n->next = NULL;
        currC->next = n; currC = n;
    }
    if (lenC > 0) {
        currA->next = dummyC.next;
        currB->next = dummyC.next;
    }
    struct ListNode* res = getIntersectionNode(dummyA.next, dummyB.next);
    if (res != NULL) {
        printf("%d\\n", res->val);
    } else {
        printf("null\\n");
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

ListNode* getIntersectionNode(ListNode* headA, ListNode* headB) {
    if (headA == nullptr || headB == nullptr) return nullptr;
    ListNode* pA = headA;
    ListNode* pB = headB;
    while (pA != pB) {
        pA = (pA == nullptr) ? headB : pA->next;
        pB = (pB == nullptr) ? headA : pB->next;
    }
    return pA;
}

int main() {
    int lenA, lenB, lenC;
    if (cin >> lenA) {
        ListNode dummyA(0);
        ListNode* currA = &dummyA;
        for (int i = 0; i < lenA; i++) {
            int v; cin >> v;
            currA->next = new ListNode(v);
            currA = currA->next;
        }
        cin >> lenB;
        ListNode dummyB(0);
        ListNode* currB = &dummyB;
        for (int i = 0; i < lenB; i++) {
            int v; cin >> v;
            currB->next = new ListNode(v);
            currB = currB->next;
        }
        cin >> lenC;
        ListNode dummyC(0);
        ListNode* currC = &dummyC;
        for (int i = 0; i < lenC; i++) {
            int v; cin >> v;
            currC->next = new ListNode(v);
            currC = currC->next;
        }
        if (lenC > 0) {
            currA->next = dummyC.next;
            currB->next = dummyC.next;
        }
        ListNode* res = getIntersectionNode(dummyA.next, dummyB.next);
        if (res != nullptr) {
            cout << res->val << "\\n";
        } else {
            cout << "null\\n";
        }
    }
    return 0;
}`
  },
  'drc-m3': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def remove_cycle(head):
    if not head or not head.next:
        return head
    slow = fast = head
    has_cycle = False
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            has_cycle = True
            break
    if not has_cycle:
        return head
    slow = head
    if slow == fast:
        while fast.next != slow:
            fast = fast.next
        fast.next = None
        return head
    while slow.next != fast.next:
        slow = slow.next
        fast = fast.next
    fast.next = None
    return head

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    pos = int(input())
    dummy = ListNode(0)
    curr = dummy
    nodes = []
    for v in arr:
        node = ListNode(v)
        nodes.append(node)
        curr.next = node
        curr = curr.next
    if pos != -1 and pos < len(nodes):
        curr.next = nodes[pos]
    res = remove_cycle(dummy.next)
    out = []
    visited = set()
    while res:
        if res in visited:
            out.append("(Cycle detected)")
            break
        visited.add(res)
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
    public static ListNode removeCycle(ListNode head) {
        if (head == null || head.next == null) return head;
        ListNode slow = head, fast = head;
        boolean hasCycle = false;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                hasCycle = true;
                break;
            }
        }
        if (!hasCycle) return head;
        slow = head;
        if (slow == fast) {
            while (fast.next != slow) {
                fast = fast.next;
            }
            fast.next = null;
            return head;
        }
        while (slow.next != fast.next) {
            slow = slow.next;
            fast = fast.next;
        }
        fast.next = null;
        return head;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;
            List<ListNode> nodes = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                ListNode node = new ListNode(sc.nextInt());
                nodes.add(node);
                curr.next = node;
                curr = curr.next;
            }
            int pos = sc.nextInt();
            if (pos != -1 && pos < nodes.size()) {
                curr.next = nodes.get(pos);
            }
            ListNode res = removeCycle(dummy.next);
            Set<ListNode> visited = new HashSet<>();
            while (res != null) {
                if (visited.contains(res)) {
                    System.out.print("(Cycle detected)");
                    break;
                }
                visited.add(res);
                System.out.print(res.val + (res.next != null ? " " : ""));
                res = res.next;
            }
            System.out.println();
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

struct ListNode* removeCycle(struct ListNode* head) {
    if (head == NULL || head->next == NULL) return head;
    struct ListNode* slow = head;
    struct ListNode* fast = head;
    bool hasCycle = false;
    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            hasCycle = true;
            break;
        }
    }
    if (!hasCycle) return head;
    slow = head;
    if (slow == fast) {
        while (fast->next != slow) {
            fast = fast->next;
        }
        fast->next = NULL;
        return head;
    }
    while (slow->next != fast->next) {
        slow = slow->next;
        fast = fast->next;
    }
    fast->next = NULL;
    return head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* curr = &dummy;
    struct ListNode** nodes = malloc(n * sizeof(struct ListNode*));
    for (int i = 0; i < n; i++) {
        int val;
        scanf("%d", &val);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = val;
        node->next = NULL;
        nodes[i] = node;
        curr->next = node;
        curr = node;
    }
    int pos;
    scanf("%d", &pos);
    if (pos != -1 && pos < n) {
        curr->next = nodes[pos];
    }
    struct ListNode* res = removeCycle(dummy.next);
    struct ListNode* temp = res;
    int count = 0;
    while (temp != NULL) {
        if (count > n + 5) {
            printf("(Cycle detected)");
            break;
        }
        printf("%d%s", temp->val, temp->next != NULL ? " " : "");
        temp = temp->next;
        count++;
    }
    printf("\\n");
    free(nodes);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* removeCycle(ListNode* head) {
    if (head == nullptr || head->next == nullptr) return head;
    ListNode* slow = head;
    ListNode* fast = head;
    bool hasCycle = false;
    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            hasCycle = true;
            break;
        }
    }
    if (!hasCycle) return head;
    slow = head;
    if (slow == fast) {
        while (fast->next != slow) {
            fast = fast->next;
        }
        fast->next = nullptr;
        return head;
    }
    while (slow->next != fast->next) {
        slow = slow->next;
        fast = fast->next;
    }
    fast->next = nullptr;
    return head;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        vector<ListNode*> nodes(n);
        for (int i = 0; i < n; i++) {
            int val;
            cin >> val;
            ListNode* node = new ListNode(val);
            nodes[i] = node;
            curr->next = node;
            curr = curr->next;
        }
        int pos;
        cin >> pos;
        if (pos != -1 && pos < n) {
            curr->next = nodes[pos];
        }
        ListNode* res = removeCycle(dummy.next);
        unordered_set<ListNode*> visited;
        while (res != nullptr) {
            if (visited.count(res)) {
                cout << "(Cycle detected)";
                break;
            }
            visited.insert(res);
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\n";
    }
    return 0;
}`
  },
  'drc-m4': {
    python: `def get_next(n):
    total = 0
    while n > 0:
        d = n % 10
        total += d * d
        n //= 10
    return total

def is_happy(n):
    slow = n
    fast = get_next(n)
    while fast != 1 and slow != fast:
        slow = get_next(slow)
        fast = get_next(get_next(fast))
    return fast == 1

num = int(input())
print(str(is_happy(num)).lower())`,
    java: `import java.util.*;

public class Solution {
    private static int getNext(int n) {
        int total = 0;
        while (n > 0) {
            int d = n % 10;
            total += d * d;
            n /= 10;
        }
        return total;
    }

    public static boolean isHappy(int n) {
        int slow = n;
        int fast = getNext(n);
        while (fast != 1 && slow != fast) {
            slow = getNext(slow);
            fast = getNext(getNext(fast));
        }
        return fast == 1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            System.out.println(isHappy(n));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdbool.h>

int getNext(int n) {
    int total = 0;
    while (n > 0) {
        int d = n % 10;
        total += d * d;
        n /= 10;
    }
    return total;
}

bool isHappy(int n) {
    int slow = n;
    int fast = getNext(n);
    while (fast != 1 && slow != fast) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    return fast == 1;
}

int main() {
    int n;
    if (scanf("%d", &n) == 1) {
        printf("%s\\n", isHappy(n) ? "true" : "false");
    }
    return 0;
}`,
    cpp: `#include <iostream>
using namespace std;

int getNext(int n) {
    int total = 0;
    while (n > 0) {
        int d = n % 10;
        total += d * d;
        n /= 10;
    }
    return total;
}

bool isHappy(int n) {
    int slow = n;
    int fast = getNext(n);
    while (fast != 1 && slow != fast) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    return fast == 1;
}

int main() {
    int n;
    if (cin >> n) {
        cout << (isHappy(n) ? "true" : "false") << "\\n";
    }
    return 0;
}`
  },
  'drc-m5': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def find_cycle_position(head):
    if not head or not head.next:
        return -1
    slow = fast = head
    has_cycle = False
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            has_cycle = True
            break
    if not has_cycle:
        return -1
    slow = head
    pos = 0
    while slow != fast:
        slow = slow.next
        fast = fast.next
        pos += 1
    return pos

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    pos = int(input())
    dummy = ListNode(0)
    curr = dummy
    nodes = []
    for v in arr:
        node = ListNode(v)
        nodes.append(node)
        curr.next = node
        curr = curr.next
    if pos != -1 and pos < len(nodes):
        curr.next = nodes[pos]
    print(find_cycle_position(dummy.next))
else:
    print(-1)`,
    java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static int findCyclePosition(ListNode head) {
        if (head == null || head.next == null) return -1;
        ListNode slow = head, fast = head;
        boolean hasCycle = false;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                hasCycle = true;
                break;
            }
        }
        if (!hasCycle) return -1;
        slow = head;
        int pos = 0;
        while (slow != fast) {
            slow = slow.next;
            fast = fast.next;
            pos++;
        }
        return pos;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;
            List<ListNode> nodes = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                ListNode node = new ListNode(sc.nextInt());
                nodes.add(node);
                curr.next = node;
                curr = curr.next;
            }
            int pos = sc.nextInt();
            if (pos != -1 && pos < nodes.size()) {
                curr.next = nodes.get(pos);
            }
            System.out.println(findCyclePosition(dummy.next));
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

int findCyclePosition(struct ListNode* head) {
    if (head == NULL || head->next == NULL) return -1;
    struct ListNode *slow = head, *fast = head;
    bool hasCycle = false;
    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            hasCycle = true;
            break;
        }
    }
    if (!hasCycle) return -1;
    slow = head;
    int pos = 0;
    while (slow != fast) {
        slow = slow->next;
        fast = fast->next;
        pos++;
    }
    return pos;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* curr = &dummy;
    struct ListNode** nodes = malloc(n * sizeof(struct ListNode*));
    for (int i = 0; i < n; i++) {
        int val;
        scanf("%d", &val);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = val;
        node->next = NULL;
        nodes[i] = node;
        curr->next = node;
        curr = node;
    }
    int pos;
    scanf("%d", &pos);
    if (pos != -1 && pos < n) {
        curr->next = nodes[pos];
    }
    printf("%d\\n", findCyclePosition(dummy.next));
    free(nodes);
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

int findCyclePosition(ListNode* head) {
    if (head == nullptr || head->next == nullptr) return -1;
    ListNode *slow = head, *fast = head;
    bool hasCycle = false;
    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            hasCycle = true;
            break;
        }
    }
    if (!hasCycle) return -1;
    slow = head;
    int pos = 0;
    while (slow != fast) {
        slow = slow->next;
        fast = fast->next;
        pos++;
    }
    return pos;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        vector<ListNode*> nodes(n);
        for (int i = 0; i < n; i++) {
            int val;
            cin >> val;
            ListNode* node = new ListNode(val);
            nodes[i] = node;
            curr->next = node;
            curr = curr->next;
        }
        int pos;
        cin >> pos;
        if (pos != -1 && pos < n) {
            curr->next = nodes[pos];
        }
        cout << findCyclePosition(dummy.next) << "\\n";
    }
    return 0;
}`
  },
  // --- HARD ---
  'drc-h1': {
    python: `def find_duplicate(nums):
    slow = nums[0]
    fast = nums[nums[0]]
    while slow != fast:
        slow = nums[slow]
        fast = nums[nums[fast]]
    slow = 0
    while slow != fast:
        slow = nums[slow]
        fast = nums[fast]
    return slow

n = int(input())
nums = list(map(int, input().split()))
print(find_duplicate(nums))`,
    java: `import java.util.*;

public class Solution {
    public static int findDuplicate(int[] nums) {
        int slow = nums[0];
        int fast = nums[nums[0]];
        while (slow != fast) {
            slow = nums[slow];
            fast = nums[nums[fast]];
        }
        slow = 0;
        while (slow != fast) {
            slow = nums[slow];
            fast = nums[fast];
        }
        return slow;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            System.out.println(findDuplicate(nums));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int findDuplicate(int* nums, int numsSize) {
    int slow = nums[0];
    int fast = nums[nums[0]];
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    slow = 0;
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }
    printf("%d\\n", findDuplicate(nums, n));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;

int findDuplicate(vector<int>& nums) {
    int slow = nums[0];
    int fast = nums[nums[0]];
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    slow = 0;
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }
        cout << findDuplicate(nums) << "\\n";
    }
    return 0;
}`
  },
  'drc-h2': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def find_meeting_node_jump_k(head, k):
    if not head:
        return -1
    slow = head
    fast = head
    while fast:
        slow = slow.next
        # Move fast by k steps
        for _ in range(k):
            if fast:
                fast = fast.next
            else:
                break
        if slow == fast and slow is not None:
            return slow.val
        if not fast:
            break
    return -1

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    pos = int(input())
    k = int(input())
    dummy = ListNode(0)
    curr = dummy
    nodes = []
    for v in arr:
        node = ListNode(v)
        nodes.append(node)
        curr.next = node
        curr = curr.next
    if pos != -1 and pos < len(nodes):
        curr.next = nodes[pos]
    print(find_meeting_node_jump_k(dummy.next, k))
else:
    print(-1)`,
    java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static int findMeetingNodeJumpK(ListNode head, int k) {
        if (head == null) return -1;
        ListNode slow = head;
        ListNode fast = head;
        while (fast != null) {
            slow = slow.next;
            for (int i = 0; i < k; i++) {
                if (fast != null) {
                    fast = fast.next;
                } else {
                    break;
                }
            }
            if (slow == fast && slow != null) {
                return slow.val;
            }
            if (fast == null) break;
        }
        return -1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;
            List<ListNode> nodes = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                ListNode node = new ListNode(sc.nextInt());
                nodes.add(node);
                curr.next = node;
                curr = curr.next;
            }
            int pos = sc.nextInt();
            int k = sc.nextInt();
            if (pos != -1 && pos < nodes.size()) {
                curr.next = nodes.get(pos);
            }
            System.out.println(findMeetingNodeJumpK(dummy.next, k));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

int findMeetingNodeJumpK(struct ListNode* head, int k) {
    if (head == NULL) return -1;
    struct ListNode* slow = head;
    struct ListNode* fast = head;
    while (fast != NULL) {
        slow = slow->next;
        for (int i = 0; i < k; i++) {
            if (fast != NULL) {
                fast = fast->next;
            } else {
                break;
            }
        }
        if (slow == fast && slow != NULL) {
            return slow->val;
        }
        if (fast == NULL) break;
    }
    return -1;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* curr = &dummy;
    struct ListNode** nodes = malloc(n * sizeof(struct ListNode*));
    for (int i = 0; i < n; i++) {
        int val;
        scanf("%d", &val);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = val;
        node->next = NULL;
        nodes[i] = node;
        curr->next = node;
        curr = node;
    }
    int pos, k;
    scanf("%d %d", &pos, &k);
    if (pos != -1 && pos < n) {
        curr->next = nodes[pos];
    }
    printf("%d\\n", findMeetingNodeJumpK(dummy.next, k));
    free(nodes);
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

int findMeetingNodeJumpK(ListNode* head, int k) {
    if (head == nullptr) return -1;
    ListNode* slow = head;
    ListNode* fast = head;
    while (fast != nullptr) {
        slow = slow->next;
        for (int i = 0; i < k; i++) {
            if (fast != nullptr) {
                fast = fast->next;
            } else {
                break;
            }
        }
        if (slow == fast && slow != nullptr) {
            return slow->val;
        }
        if (fast == nullptr) break;
    }
    return -1;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        vector<ListNode*> nodes(n);
        for (int i = 0; i < n; i++) {
            int val;
            cin >> val;
            ListNode* node = new ListNode(val);
            nodes[i] = node;
            curr->next = node;
            curr = curr->next;
        }
        int pos, k;
        cin >> pos >> k;
        if (pos != -1 && pos < n) {
            curr->next = nodes[pos];
        }
        cout << findMeetingNodeJumpK(dummy.next, k) << "\\n";
    }
    return 0;
}`
  },
  'drc-h3': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def is_circular(head):
    if not head:
        return False
    # Move slow/fast pointers. If cycle, see if start is head.
    # Actually, a list is circular if tail points exactly to head node.
    curr = head
    while curr:
        curr = curr.next
        if curr == head:
            return True
        if curr is None:
            break
        # Safeguard for other loops
        # If there's a loop that doesn't include head, the traversal will enter the loop and run forever.
        # So we can use Floyd's cycle detection to find the cycle start, and check if that start == head!
    return False

# Floyd's check
def is_circular(head):
    if not head:
        return False
    slow = fast = head
    has_cycle = False
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            has_cycle = True
            break
    if not has_cycle:
        return False
    slow = head
    while slow != fast:
        slow = slow.next
        fast = fast.next
    return slow == head

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    pos = int(input())
    dummy = ListNode(0)
    curr = dummy
    nodes = []
    for v in arr:
        node = ListNode(v)
        nodes.append(node)
        curr.next = node
        curr = curr.next
    if pos != -1 and pos < len(nodes):
        curr.next = nodes[pos]
    print(str(is_circular(dummy.next)).lower())
else:
    print("false")`,
    java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static boolean isCircular(ListNode head) {
        if (head == null) return false;
        ListNode slow = head, fast = head;
        boolean hasCycle = false;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                hasCycle = true;
                break;
            }
        }
        if (!hasCycle) return false;
        slow = head;
        while (slow != fast) {
            slow = slow.next;
            fast = fast.next;
        }
        return slow == head;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;
            List<ListNode> nodes = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                ListNode node = new ListNode(sc.nextInt());
                nodes.add(node);
                curr.next = node;
                curr = curr.next;
            }
            int pos = sc.nextInt();
            if (pos != -1 && pos < nodes.size()) {
                curr.next = nodes.get(pos);
            }
            System.out.println(isCircular(dummy.next));
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

bool isCircular(struct ListNode* head) {
    if (head == NULL) return false;
    struct ListNode *slow = head, *fast = head;
    bool hasCycle = false;
    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            hasCycle = true;
            break;
        }
    }
    if (!hasCycle) return false;
    slow = head;
    while (slow != fast) {
        slow = slow->next;
        fast = fast->next;
    }
    return slow == head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy;
    dummy.next = NULL;
    struct ListNode* curr = &dummy;
    struct ListNode** nodes = malloc(n * sizeof(struct ListNode*));
    for (int i = 0; i < n; i++) {
        int val;
        scanf("%d", &val);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = val;
        node->next = NULL;
        nodes[i] = node;
        curr->next = node;
        curr = node;
    }
    int pos;
    scanf("%d", &pos);
    if (pos != -1 && pos < n) {
        curr->next = nodes[pos];
    }
    printf("%s\\n", isCircular(dummy.next) ? "true" : "false");
    free(nodes);
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

bool isCircular(ListNode* head) {
    if (head == nullptr) return false;
    ListNode *slow = head, *fast = head;
    bool hasCycle = false;
    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            hasCycle = true;
            break;
        }
    }
    if (!hasCycle) return false;
    slow = head;
    while (slow != fast) {
        slow = slow->next;
        fast = fast->next;
    }
    return slow == head;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        vector<ListNode*> nodes(n);
        for (int i = 0; i < n; i++) {
            int val;
            cin >> val;
            ListNode* node = new ListNode(val);
            nodes[i] = node;
            curr->next = node;
            curr = curr->next;
        }
        int pos;
        cin >> pos;
        if (pos != -1 && pos < n) {
            curr->next = nodes[pos];
        }
        cout << (isCircular(dummy.next) ? "true" : "false") << "\\n";
    }
    return 0;
}`
  },
  'drc-h4': {
    python: `class ListNode:
    def __init__(self, val=0, next=None, child=None):
        self.val = val
        self.next = next
        self.child = child

def has_custom_cycle(head):
    if not head:
        return False
    # custom traversal: child if present, else next
    def get_next_node(node):
        if not node: return None
        return node.child if node.child else node.next
        
    slow = head
    fast = head
    while fast:
        slow = get_next_node(slow)
        fast = get_next_node(get_next_node(fast))
        if slow == fast and slow is not None:
            return True
    return False

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    pos = int(input())
    dummy = ListNode(0)
    curr = dummy
    nodes = []
    for v in arr:
        node = ListNode(v)
        nodes.append(node)
        curr.next = node
        curr = curr.next
    for i in range(len(nodes)):
        if i % 2 == 1:
            nodes[i].child = nodes[i].next
            nodes[i].next = None
    if pos != -1 and pos < len(nodes):
        last = nodes[-1]
        if last.child:
            last.child = nodes[pos]
        else:
            last.next = nodes[pos]
    print(str(has_custom_cycle(dummy.next)).lower())
else:
    print("false")`,
    java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode child;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    private static ListNode getNextNode(ListNode node) {
        if (node == null) return null;
        return node.child != null ? node.child : node.next;
    }

    public static boolean hasCustomCycle(ListNode head) {
        if (head == null) return false;
        ListNode slow = head;
        ListNode fast = head;
        while (fast != null) {
            slow = getNextNode(slow);
            fast = getNextNode(getNextNode(fast));
            if (slow == fast && slow != null) {
                return true;
            }
        }
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode dummy = new ListNode(0);
            ListNode curr = dummy;
            List<ListNode> nodes = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                ListNode node = new ListNode(sc.nextInt());
                nodes.add(node);
                curr.next = node;
                curr = curr.next;
            }
            for (int i = 0; i < n; i++) {
                if (i % 2 == 1) {
                    nodes.get(i).child = nodes.get(i).next;
                    nodes.get(i).next = null;
                }
            }
            int pos = sc.nextInt();
            if (pos != -1 && pos < nodes.size()) {
                ListNode last = nodes.get(n - 1);
                if (last.child != null) last.child = nodes.get(pos);
                else last.next = nodes.get(pos);
            }
            System.out.println(hasCustomCycle(dummy.next));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

struct ListNode {
    int val;
    struct ListNode* next;
    struct ListNode* child;
};

struct ListNode* getNextNode(struct ListNode* node) {
    if (node == NULL) return NULL;
    return node->child != NULL ? node->child : node->next;
}

bool hasCustomCycle(struct ListNode* head) {
    if (head == NULL) return false;
    struct ListNode* slow = head;
    struct ListNode* fast = head;
    while (fast != NULL) {
        slow = getNextNode(slow);
        fast = getNextNode(getNextNode(fast));
        if (slow == fast && slow != NULL) {
            return true;
        }
    }
    return false;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode dummy;
    dummy.next = NULL; dummy.child = NULL;
    struct ListNode* curr = &dummy;
    struct ListNode** nodes = malloc(n * sizeof(struct ListNode*));
    for (int i = 0; i < n; i++) {
        int val;
        scanf("%d", &val);
        struct ListNode* node = malloc(sizeof(struct ListNode));
        node->val = val;
        node->next = NULL;
        node->child = NULL;
        nodes[i] = node;
        curr->next = node;
        curr = node;
    }
    for (int i = 0; i < n; i++) {
        if (i % 2 == 1) {
            nodes[i]->child = nodes[i]->next;
            nodes[i]->next = NULL;
        }
    }
    int pos;
    scanf("%d", &pos);
    if (pos != -1 && pos < n) {
        struct ListNode* last = nodes[n - 1];
        if (last->child != NULL) last->child = nodes[pos];
        else last->next = nodes[pos];
    }
    printf("%s\\n", hasCustomCycle(dummy.next) ? "true" : "false");
    free(nodes);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode* child;
    ListNode(int x) : val(x), next(nullptr), child(nullptr) {}
};

ListNode* getNextNode(ListNode* node) {
    if (node == nullptr) return nullptr;
    return node->child != nullptr ? node->child : node->next;
}

bool hasCustomCycle(ListNode* head) {
    if (head == nullptr) return false;
    ListNode* slow = head;
    ListNode* fast = head;
    while (fast != nullptr) {
        slow = getNextNode(slow);
        fast = getNextNode(getNextNode(fast));
        if (slow == fast && slow != nullptr) {
            return true;
        }
    }
    return false;
}

int main() {
    int n;
    if (cin >> n) {
        ListNode dummy(0);
        ListNode* curr = &dummy;
        vector<ListNode*> nodes(n);
        for (int i = 0; i < n; i++) {
            int val;
            cin >> val;
            ListNode* node = new ListNode(val);
            nodes[i] = node;
            curr->next = node;
            curr = curr->next;
        }
        for (int i = 0; i < n; i++) {
            if (i % 2 == 1) {
                nodes[i]->child = nodes[i]->next;
                nodes[i]->next = nullptr;
            }
        }
        int pos;
        cin >> pos;
        if (pos != -1 && pos < n) {
            ListNode* last = nodes[n - 1];
            if (last->child != nullptr) last->child = nodes[pos];
            else last->next = nodes[pos];
        }
        cout << (hasCustomCycle(dummy.next) ? "true" : "false") << "\\n";
    }
    return 0;
}`
  },
  'drc-h5': {
    python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def break_intersecting_cycle(headA, headB):
    if not headA:
        return None
    # Floyd's on headA to break the loop
    slow = fast = headA
    has_cycle = False
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            has_cycle = True
            break
    if not has_cycle:
        return headA
    # Cycle start detection
    slow = headA
    if slow == fast:
        while fast.next != slow:
            fast = fast.next
        fast.next = None
        return headA
    while slow.next != fast.next:
        slow = slow.next
        fast = fast.next
    fast.next = None
    return headA

lenA = int(input())
arrA = list(map(int, input().split())) if lenA > 0 else []
lenB = int(input())
arrB = list(map(int, input().split())) if lenB > 0 else []
lenC = int(input())
arrC = list(map(int, input().split())) if lenC > 0 else []
pos = int(input())

dummyA = ListNode(0)
currA = dummyA
for v in arrA:
    currA.next = ListNode(v)
    currA = currA.next

dummyB = ListNode(0)
currB = dummyB
for v in arrB:
    currB.next = ListNode(v)
    currB = currB.next

dummyC = ListNode(0)
currC = dummyC
nodesC = []
for v in arrC:
    node = ListNode(v)
    nodesC.append(node)
    currC.next = node
    currC = currC.next

if lenC > 0:
    currA.next = dummyC.next
    currB.next = dummyC.next
    if pos != -1 and pos < len(nodesC):
        currC.next = nodesC[pos]

res = break_intersecting_cycle(dummyA.next, dummyB.next)
out = []
visited = set()
while res:
    if res in visited:
        out.append("(Cycle detected)")
        break
    visited.add(res)
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
    public static ListNode breakIntersectingCycle(ListNode headA, ListNode headB) {
        if (headA == null) return null;
        ListNode slow = headA, fast = headA;
        boolean hasCycle = false;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                hasCycle = true;
                break;
            }
        }
        if (!hasCycle) return headA;
        slow = headA;
        if (slow == fast) {
            while (fast.next != slow) {
                fast = fast.next;
            }
            fast.next = null;
            return headA;
        }
        while (slow.next != fast.next) {
            slow = slow.next;
            fast = fast.next;
        }
        fast.next = null;
        return headA;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int lenA = sc.nextInt();
            ListNode dummyA = new ListNode(0);
            ListNode currA = dummyA;
            for (int i = 0; i < lenA; i++) {
                currA.next = new ListNode(sc.nextInt());
                currA = currA.next;
            }
            int lenB = sc.nextInt();
            ListNode dummyB = new ListNode(0);
            ListNode currB = dummyB;
            for (int i = 0; i < lenB; i++) {
                currB.next = new ListNode(sc.nextInt());
                currB = currB.next;
            }
            int lenC = sc.nextInt();
            ListNode dummyC = new ListNode(0);
            ListNode currC = dummyC;
            List<ListNode> nodesC = new ArrayList<>();
            for (int i = 0; i < lenC; i++) {
                ListNode n = new ListNode(sc.nextInt());
                nodesC.add(n);
                currC.next = n;
                currC = currC.next;
            }
            int pos = sc.nextInt();
            if (lenC > 0) {
                currA.next = dummyC.next;
                currB.next = dummyC.next;
                if (pos != -1 && pos < nodesC.size()) {
                    currC.next = nodesC.get(pos);
                }
            }
            ListNode res = breakIntersectingCycle(dummyA.next, dummyB.next);
            Set<ListNode> visited = new HashSet<>();
            while (res != null) {
                if (visited.contains(res)) {
                    System.out.print("(Cycle detected)");
                    break;
                }
                visited.add(res);
                System.out.print(res.val + (res.next != null ? " " : ""));
                res = res.next;
            }
            System.out.println();
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

struct ListNode* breakIntersectingCycle(struct ListNode* headA, struct ListNode* headB) {
    if (headA == NULL) return NULL;
    struct ListNode* slow = headA;
    struct ListNode* fast = headA;
    bool hasCycle = false;
    while (fast != NULL && fast->next != NULL) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            hasCycle = true;
            break;
        }
    }
    if (!hasCycle) return headA;
    slow = headA;
    if (slow == fast) {
        while (fast->next != slow) {
            fast = fast->next;
        }
        fast->next = NULL;
        return headA;
    }
    while (slow->next != fast->next) {
        slow = slow->next;
        fast = fast->next;
    }
    fast->next = NULL;
    return headA;
}

int main() {
    int lenA, lenB, lenC;
    if (scanf("%d", &lenA) != 1) return 0;
    struct ListNode dummyA; dummyA.next = NULL;
    struct ListNode* currA = &dummyA;
    for (int i = 0; i < lenA; i++) {
        int v; scanf("%d", &v);
        struct ListNode* n = malloc(sizeof(struct ListNode));
        n->val = v; n->next = NULL;
        currA->next = n; currA = n;
    }
    if (scanf("%d", &lenB) != 1) return 0;
    struct ListNode dummyB; dummyB.next = NULL;
    struct ListNode* currB = &dummyB;
    for (int i = 0; i < lenB; i++) {
        int v; scanf("%d", &v);
        struct ListNode* n = malloc(sizeof(struct ListNode));
        n->val = v; n->next = NULL;
        currB->next = n; currB = n;
    }
    if (scanf("%d", &lenC) != 1) return 0;
    struct ListNode dummyC; dummyC.next = NULL;
    struct ListNode* currC = &dummyC;
    struct ListNode** nodesC = malloc(lenC * sizeof(struct ListNode*));
    for (int i = 0; i < lenC; i++) {
        int v; scanf("%d", &v);
        struct ListNode* n = malloc(sizeof(struct ListNode));
        n->val = v; n->next = NULL;
        nodesC[i] = n;
        currC->next = n; currC = n;
    }
    int pos;
    scanf("%d", &pos);
    if (lenC > 0) {
        currA->next = dummyC.next;
        currB->next = dummyC.next;
        if (pos != -1 && pos < lenC) {
            currC->next = nodesC[pos];
        }
    }
    struct ListNode* res = breakIntersectingCycle(dummyA.next, dummyB.next);
    struct ListNode* temp = res;
    int limit = lenA + lenC + 10;
    int count = 0;
    while (temp != NULL) {
        if (count > limit) {
            printf("(Cycle detected)");
            break;
        }
        printf("%d%s", temp->val, temp->next != NULL ? " " : "");
        temp = temp->next;
        count++;
    }
    printf("\\n");
    free(nodesC);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* breakIntersectingCycle(ListNode* headA, ListNode* headB) {
    if (headA == nullptr) return nullptr;
    ListNode* slow = headA;
    ListNode* fast = headA;
    bool hasCycle = false;
    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            hasCycle = true;
            break;
        }
    }
    if (!hasCycle) return headA;
    slow = headA;
    if (slow == fast) {
        while (fast->next != slow) {
            fast = fast->next;
        }
        fast->next = nullptr;
        return headA;
    }
    while (slow->next != fast->next) {
        slow = slow->next;
        fast = fast->next;
    }
    fast->next = nullptr;
    return headA;
}

int main() {
    int lenA, lenB, lenC;
    if (cin >> lenA) {
        ListNode dummyA(0);
        ListNode* currA = &dummyA;
        for (int i = 0; i < lenA; i++) {
            int v; cin >> v;
            currA->next = new ListNode(v);
            currA = currA->next;
        }
        cin >> lenB;
        ListNode dummyB(0);
        ListNode* currB = &dummyB;
        for (int i = 0; i < lenB; i++) {
            int v; cin >> v;
            currB->next = new ListNode(v);
            currB = currB->next;
        }
        cin >> lenC;
        ListNode dummyC(0);
        ListNode* currC = &dummyC;
        vector<ListNode*> nodesC(lenC);
        for (int i = 0; i < lenC; i++) {
            int v; cin >> v;
            ListNode* n = new ListNode(v);
            nodesC[i] = n;
            currC->next = n;
            currC = currC->next;
        }
        int pos;
        cin >> pos;
        if (lenC > 0) {
            currA->next = dummyC.next;
            currB->next = dummyC.next;
            if (pos != -1 && pos < lenC) {
                currC->next = nodesC[pos];
            }
        }
        ListNode* res = breakIntersectingCycle(dummyA.next, dummyB.next);
        unordered_set<ListNode*> visited;
        while (res != nullptr) {
            if (visited.count(res)) {
                cout << "(Cycle detected)";
                break;
            }
            visited.insert(res);
            cout << res->val << (res->next != nullptr ? " " : "");
            res = res->next;
        }
        cout << "\\n";
    }
    return 0;
}`
  }
};
