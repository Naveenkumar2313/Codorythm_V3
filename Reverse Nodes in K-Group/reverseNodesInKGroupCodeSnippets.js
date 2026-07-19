export const reverseNodesInKGroupCodeSnippets = {
  python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_k_group(head, k):
    # Check if there are at least k nodes left
    curr = head
    count = 0
    while curr and count < k:
        curr = curr.next
        count += 1
    
    if count == k:
        # Reverse the k nodes
        prev, curr = None, head
        for _ in range(k):
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        
        # Recurse for the remaining list
        if head:
            head.next = reverse_k_group(curr, k)
        
        return prev
    
    # If less than k nodes remain, keep them as is
    return head

# Example usage:
# Create list: 1 -> 2 -> 3 -> 4 -> 5, k = 2
# Output: 2 -> 1 -> 4 -> 3 -> 5
`,
  java: `class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        ListNode curr = head;
        int count = 0;
        
        // Find if there are at least k nodes
        while (curr != null && count < k) {
            curr = curr.next;
            count++;
        }
        
        if (count == k) {
            // Reverse the k nodes
            ListNode prev = null;
            ListNode tempCurr = head;
            for (int i = 0; i < k; i++) {
                ListNode nextNode = tempCurr.next;
                tempCurr.next = prev;
                prev = tempCurr;
                tempCurr = nextNode;
            }
            
            // Recurse for the rest of the list
            if (head != null) {
                head.next = reverseKGroup(tempCurr, k);
            }
            
            return prev;
        }
        
        return head;
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
    
    // Check if we have at least k nodes
    while (curr != NULL && count < k) {
        curr = curr->next;
        count++;
    }
    
    if (count == k) {
        struct ListNode* prev = NULL;
        struct ListNode* tempCurr = head;
        for (int i = 0; i < k; i++) {
            struct ListNode* nextNode = tempCurr->next;
            tempCurr->next = prev;
            prev = tempCurr;
            tempCurr = nextNode;
        }
        
        if (head != NULL) {
            head->next = reverseKGroup(tempCurr, k);
        }
        
        return prev;
    }
    
    return head;
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
    ListNode* reverseKGroup(ListNode* head, int k) {
        ListNode* curr = head;
        int count = 0;
        
        // Check if there are at least k nodes remaining
        while (curr != nullptr && count < k) {
            curr = curr->next;
            count++;
        }
        
        if (count == k) {
            ListNode* prev = nullptr;
            ListNode* tempCurr = head;
            for (int i = 0; i < k; i++) {
                ListNode* nextNode = tempCurr->next;
                tempCurr->next = prev;
                prev = tempCurr;
                tempCurr = nextNode;
            }
            
            if (head != nullptr) {
                head->next = reverseKGroup(tempCurr, k);
            }
            
            return prev;
        }
        
        return head;
    }
};
`
};
