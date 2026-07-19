export const detectAndRemoveCycleCodeSnippets = {
  python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def detect_and_remove_cycle(head):
    if not head or not head.next:
        return False
    
    slow = fast = head
    has_cycle = False
    
    # 1. Detect Cycle
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            has_cycle = True
            break
            
    if not has_cycle:
        return False
        
    # 2. Find Cycle Start and Remove Cycle
    slow = head
    # Special case: cycle starts at head
    if slow == fast:
        # Find the last node of the cycle
        while fast.next != slow:
            fast = fast.next
        fast.next = None
        return True
        
    while slow.next != fast.next:
        slow = slow.next
        fast = fast.next
        
    # Break the cycle
    fast.next = None
    return True
`,
  java: `class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public boolean detectAndRemoveCycle(ListNode head) {
        if (head == null || head.next == null) return false;
        
        ListNode slow = head, fast = head;
        boolean hasCycle = false;
        
        // 1. Detect Cycle
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                hasCycle = true;
                break;
            }
        }
        
        if (!hasCycle) return false;
        
        // 2. Find start and remove cycle
        slow = head;
        if (slow == fast) {
            while (fast.next != slow) {
                fast = fast.next;
            }
            fast.next = null;
            return true;
        }
        
        while (slow.next != fast.next) {
            slow = slow.next;
            fast = fast.next;
        }
        
        fast.next = null;
        return true;
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

struct ListNode {
    int val;
    struct ListNode* next;
};

bool detectAndRemoveCycle(struct ListNode* head) {
    if (head == NULL || head->next == NULL) return false;
    
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
    if (slow == fast) {
        while (fast->next != slow) {
            fast = fast->next;
        }
        fast->next = NULL;
        return true;
    }
    
    while (slow->next != fast->next) {
        slow = slow->next;
        fast = fast->next;
    }
    
    fast->next = NULL;
    return true;
}
`,
  cpp: `#include <iostream>

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

class Solution {
public:
    bool detectAndRemoveCycle(ListNode* head) {
        if (head == nullptr || head->next == nullptr) return false;
        
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
        
        if (!hasCycle) return false;
        
        slow = head;
        if (slow == fast) {
            while (fast->next != slow) {
                fast = fast->next;
            }
            fast->next = nullptr;
            return true;
        }
        
        while (slow->next != fast->next) {
            slow = slow->next;
            fast = fast->next;
        }
        
        fast->next = nullptr;
        return true;
    }
};
`
};
