export const detectAndRemoveCycleProblems = [
  // --- EASY ---
  {
    id: 'drc-e1',
    title: 'Linked List Cycle',
    difficulty: 'Easy',
    description: 'Given `head`, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer.',
    constraints: ['The number of nodes in the list is in the range [0, 10^4].', '-10^5 <= Node.val <= 10^5', 'pos is -1 or a valid index in the linked list.'],
    examples: [
      { input: 'head = [3,2,0,-4], pos = 1', output: 'true', explanation: 'There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).' },
      { input: 'head = [1], pos = -1', output: 'false', explanation: 'There is no cycle in the linked list.' }
    ],
    testCases: [
      { input: '4\n3 2 0 -4\n1', expectedOutput: 'true', hidden: false },
      { input: '1\n1\n-1', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def has_cycle(head):
    # Write code here
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
    }
  },
  {
    id: 'drc-e2',
    title: 'Cycle Length',
    difficulty: 'Easy',
    description: 'Given the head of a linked list, return the number of nodes in the cycle. If there is no cycle, return `0`.',
    constraints: ['The number of nodes in the list is in the range [0, 5000].', '-10^5 <= Node.val <= 10^5'],
    examples: [
      { input: 'head = [3,2,0,-4], pos = 1', output: '3', explanation: 'Nodes in cycle: 2 -> 0 -> -4 (length 3).' }
    ],
    testCases: [
      { input: '4\n3 2 0 -4\n1', expectedOutput: '3', hidden: false },
      { input: '1\n1\n-1', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def cycle_length(head):
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
    }
  },
  {
    id: 'drc-e3',
    title: 'Find Distinct Node Count',
    difficulty: 'Easy',
    description: 'Given the head of a linked list, return the total count of distinct nodes in the linked list. If there is a cycle, return the count of distinct nodes processed before cycling back.',
    constraints: ['The number of nodes in the list is in the range [0, 5000].', '-10^5 <= Node.val <= 10^5'],
    examples: [
      { input: 'head = [3,2,0,-4], pos = 1', output: '4', explanation: 'There are 4 distinct nodes: 3, 2, 0, -4.' }
    ],
    testCases: [
      { input: '4\n3 2 0 -4\n1', expectedOutput: '4', hidden: false },
      { input: '0', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def distinct_nodes(head):
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
            System.out.println(distinctNodes(dummy.next));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

int distinctNodes(struct ListNode* head) {
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
    printf("%d\\n", distinctNodes(dummy.next));
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

int distinctNodes(ListNode* head) {
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
        cout << distinctNodes(dummy.next) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'drc-e4',
    title: 'Self Loop Check',
    difficulty: 'Easy',
    description: 'Given the head of a linked list, return `true` if any node contains a self-loop (i.e. points directly to itself, `node->next == node`). Otherwise, return `false`.',
    constraints: ['The number of nodes in the list is in the range [0, 5000].', '-10^5 <= Node.val <= 10^5'],
    examples: [
      { input: 'head = [1,2,3], pos = 1 (but node 2 points to 2)', output: 'true', explanation: 'Node at index 1 points directly to itself.' }
    ],
    testCases: [
      { input: '3\n1 2 3\n1', expectedOutput: 'true', hidden: false },
      { input: '3\n1 2 3\n-1', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def has_self_loop(head):
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
        # Specific setting for testing self-loop at pos
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
    }
  },
  {
    id: 'drc-e5',
    title: 'First and Last Node Sum',
    difficulty: 'Easy',
    description: 'Given the head of a linked list, return the sum of the first node and the last node values. If the list contains a cycle, return `-1`.',
    constraints: ['The number of nodes in the list is in the range [1, 5000].', '0 <= Node.val <= 10^5'],
    examples: [
      { input: 'head = [1,2,3,4], pos = -1', output: '5', explanation: 'First node 1 + last node 4 = 5.' }
    ],
    testCases: [
      { input: '4\n1 2 3 4\n-1', expectedOutput: '5', hidden: false },
      { input: '4\n1 2 3 4\n2', expectedOutput: '-1', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def first_last_sum(head):
    return -1

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
            if (pos != -1 && pos < nodes.size()) {
                curr.next = nodes.get(pos);
            }
            System.out.println(firstLastSum(dummy.next));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

int firstLastSum(struct ListNode* head) {
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
        int pos;
        cin >> pos;
        if (pos != -1 && pos < n) {
            curr->next = nodes[pos];
        }
        cout << firstLastSum(dummy.next) << "\\n";
    }
    return 0;
}`
    }
  },
  // --- MEDIUM ---
  {
    id: 'drc-m1',
    title: 'Linked List Cycle II',
    difficulty: 'Medium',
    description: 'Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return `null`. Do not modify the linked list.',
    constraints: ['The number of nodes in the list is in the range [0, 10^4].', '-10^5 <= Node.val <= 10^5'],
    examples: [
      { input: 'head = [3,2,0,-4], pos = 1', output: 'tail connects to node index 1', explanation: 'Returns the node with value 2.' }
    ],
    testCases: [
      { input: '4\n3 2 0 -4\n1', expectedOutput: '2', hidden: false },
      { input: '1\n1\n-1', expectedOutput: 'null', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def detect_cycle_start(head):
    # Write code here
    return None

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
        return null;
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

struct ListNode* detectCycleStart(struct ListNode* head) {
    return NULL;
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
    return nullptr;
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
    }
  },
  {
    id: 'drc-m2',
    title: 'Intersection of Two Linked Lists',
    difficulty: 'Medium',
    description: 'Given the heads of two singly linked lists `headA` and `headB`, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return `null`.',
    constraints: ['The number of nodes in listA is in range [0, 5000].', 'The number of nodes in listB is in range [0, 5000].', '-10^5 <= Node.val <= 10^5'],
    examples: [
      { input: 'intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3', output: 'Intersected at 8', explanation: 'The intersection node is 8.' }
    ],
    testCases: [
      { input: '2\n4 1\n3\n5 6 1\n3\n8 4 5', expectedOutput: '8', hidden: false },
      { input: '2\n1 2\n2\n3 4\n0\n', expectedOutput: 'null', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def get_intersection_node(headA, headB):
    # Write code here
    return None

# Custom I/O parser for intersection setup
# Line 1: lenA
# Line 2: listA values (pre-intersection)
# Line 3: lenB
# Line 4: listB values (pre-intersection)
# Line 5: lenCommon
# Line 6: common values
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
        return null;
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
    return NULL;
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
    return nullptr;
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
    }
  },
  {
    id: 'drc-m3',
    title: 'Remove Cycle',
    difficulty: 'Medium',
    description: 'Given the head of a linked list, check if it contains a cycle. If it does, break/remove the cycle and return the head of the modified linked list. Otherwise, return the list as is. (Verification will print the linear list after breaking the cycle).',
    constraints: ['The number of nodes in the list is in the range [0, 5000].', '-10^5 <= Node.val <= 10^5'],
    examples: [
      { input: 'head = [3,2,0,-4], pos = 1', output: '[3,2,0,-4]', explanation: 'Cycle is broken, list becomes linear.' }
    ],
    testCases: [
      { input: '4\n3 2 0 -4\n1', expectedOutput: '3 2 0 -4', hidden: false },
      { input: '2\n1 2\n-1', expectedOutput: '1 2', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def remove_cycle(head):
    # Write code here
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
    # Print distinct list to avoid infinite loop in case code failed to break it
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
    // Visited tracking to avoid infinite loop
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
    printf("\n");
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
    }
  },
  {
    id: 'drc-m4',
    title: 'Happy Number',
    difficulty: 'Medium',
    description: 'Write an algorithm to determine if a number `n` is happy. A happy number is defined by replacing the number by the sum of the squares of its digits, and repeating until it equals 1, or loops endlessly in a cycle. Numbers that end in 1 are happy.',
    constraints: ['1 <= n <= 2^31 - 1'],
    examples: [
      { input: 'n = 19', output: 'true', explanation: '19 -> 1^2 + 9^2 = 82 -> 8^2 + 2^2 = 68 -> 6^2 + 8^2 = 100 -> 1^2 + 0^2 + 0^2 = 1.' }
    ],
    testCases: [
      { input: '19', expectedOutput: 'true', hidden: false },
      { input: '2', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: `def is_happy(n):
    return False

num = int(input())
print(str(is_happy(num)).lower())`,
      java: `import java.util.*;

public class Solution {
    public static boolean isHappy(int n) {
        return false;
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

bool isHappy(int n) {
    return false;
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

bool isHappy(int n) {
    return false;
}

int main() {
    int n;
    if (cin >> n) {
        cout << (isHappy(n) ? "true" : "false") << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'drc-m5',
    title: 'Detect Cycle Position',
    difficulty: 'Medium',
    description: 'Given a linked list and a cycle position, find the 0-indexed position where the cycle starts. If there is no cycle, return `-1`.',
    constraints: ['The number of nodes in the list is in the range [0, 5000].', '-10^5 <= Node.val <= 10^5'],
    examples: [
      { input: 'head = [3,2,0,-4], pos = 1', output: '1', explanation: 'The loop starts at index 1.' }
    ],
    testCases: [
      { input: '4\n3 2 0 -4\n1', expectedOutput: '1', hidden: false },
      { input: '3\n1 2 3\n-1', expectedOutput: '-1', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def find_cycle_position(head):
    return -1

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
            if (pos != -1 && pos < nodes.size()) {
                curr.next = nodes.get(pos);
            }
            System.out.println(findCyclePosition(dummy.next));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

int findCyclePosition(struct ListNode* head) {
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
        int pos;
        cin >> pos;
        if (pos != -1 && pos < n) {
            curr->next = nodes[pos];
        }
        cout << findCyclePosition(dummy.next) << "\\n";
    }
    return 0;
}`
    }
  },
  // --- HARD ---
  {
    id: 'drc-h1',
    title: 'Find the Duplicate Number',
    difficulty: 'Hard',
    description: 'Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive. There is only one duplicate number in `nums`, return this duplicate number. You must solve the problem without modifying the array `nums` and uses only constant extra space. (Uses Floyd\'s cycle detection).',
    constraints: ['1 <= n <= 10^5', 'nums.length == n + 1', '1 <= nums[i] <= n'],
    examples: [
      { input: 'nums = [1,3,4,2,2]', output: '2', explanation: '2 is the duplicate number.' }
    ],
    testCases: [
      { input: '5\n1 3 4 2 2', expectedOutput: '2', hidden: false },
      { input: '5\n3 1 3 4 2', expectedOutput: '3', hidden: false }
    ],
    starterCode: {
      python: `def find_duplicate(nums):
    return -1

n = int(input())
nums = list(map(int, input().split()))
print(find_duplicate(nums))`,
      java: `import java.util.*;

public class Solution {
    public static int findDuplicate(int[] nums) {
        return -1;
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
    return -1;
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
    return -1;
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
    }
  },
  {
    id: 'drc-h2',
    title: 'Cycle Detection with Fast Pointer Jump K',
    difficulty: 'Hard',
    description: 'Implement Floyd\'s cycle detection where the fast pointer moves by `k` steps instead of `2` steps (where `k >= 2`). Find if they meet and return the meeting node value. If no cycle, return `-1`.',
    constraints: ['The number of nodes in the list is in the range [0, 5000].', '2 <= k <= 10', '-10^5 <= Node.val <= 10^5'],
    examples: [
      { input: 'head = [3,2,0,-4], pos = 1, k = 3', output: '-4', explanation: 'Meeting node value with jump size 3.' }
    ],
    testCases: [
      { input: '4\n3 2 0 -4\n1\n3', expectedOutput: '-4', hidden: false },
      { input: '3\n1 2 3\n-1\n2', expectedOutput: '-1', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def find_meeting_node_jump_k(head, k):
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
    }
  },
  {
    id: 'drc-h3',
    title: 'Check Circular List',
    difficulty: 'Hard',
    description: 'Given the head of a linked list, check if it is circular (meaning it has a cycle and the last node points exactly back to the head node). Return `true` if circular, `false` otherwise.',
    constraints: ['The number of nodes in the list is in the range [0, 5000].', '-10^5 <= Node.val <= 10^5'],
    examples: [
      { input: 'head = [1,2,3], pos = 0', output: 'true', explanation: 'The tail points back to index 0 (the head).' },
      { input: 'head = [1,2,3], pos = 1', output: 'false', explanation: 'Has cycle, but points back to index 1, not head.' }
    ],
    testCases: [
      { input: '3\n1 2 3\n0', expectedOutput: 'true', hidden: false },
      { input: '3\n1 2 3\n1', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def is_circular(head):
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
        cout << (isCircular(dummy.next) ? "true" : "false") << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'drc-h4',
    title: 'Double Pointer Cycle Detection',
    difficulty: 'Hard',
    description: 'A node has a `next` and a `child` pointer. We traverse only following `child` if present, else `next`. Determine if the path has a cycle under this custom traversal rule.',
    constraints: ['The number of nodes in the list is in the range [0, 5000].', '-10^5 <= Node.val <= 10^5'],
    examples: [
      { input: 'A custom configuration with cycle.', output: 'true', explanation: 'Floyd\'s algorithm applies on the custom path.' }
    ],
    testCases: [
      { input: '4\n1 2 3 4\n1', expectedOutput: 'true', hidden: false },
      { input: '3\n1 2 3\n-1', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None, child=None):
        self.val = val
        self.next = next
        self.child = child

def has_custom_cycle(head):
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
    # Randomly assign half as child to test the child rule
    for i in range(len(nodes)):
        if i % 2 == 1:
            nodes[i].child = nodes[i].next
            nodes[i].next = None
    if pos != -1 and pos < len(nodes):
        # Link back to create cycle
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
    public static boolean hasCustomCycle(ListNode head) {
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

bool hasCustomCycle(struct ListNode* head) {
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

bool hasCustomCycle(ListNode* head) {
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
    }
  },
  {
    id: 'drc-h5',
    title: 'Find Intersection and Break It',
    difficulty: 'Hard',
    description: 'Given two linked lists A and B which intersect at some node C. A cycle is also present starting from C. Remove the cycle from the intersected linked list (meaning break the loop from the tail back to C) and print the combined list starting from headA.',
    constraints: ['The number of nodes in listA is in range [1, 1000].', 'The number of nodes in listB is in range [1, 1000].', '-10^5 <= Node.val <= 10^5'],
    examples: [
      { input: 'listA = [1,2], listB = [3,4], common = [5,6] (with 6 pointing back to 5)', output: '1 2 5 6', explanation: 'Break loop at 6 pointing back to 5. Traverse A: 1->2->5->6.' }
    ],
    testCases: [
      { input: '2\n1 2\n2\n3 4\n2\n5 6\n0', expectedOutput: '1 2 5 6', hidden: false },
      { input: '1\n10\n1\n20\n1\n30\n0', expectedOutput: '10 30', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def break_intersecting_cycle(headA, headB):
    # Write code here
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
# Print unique to prevent infinite loop
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
    printf("\n");
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
  }
];
