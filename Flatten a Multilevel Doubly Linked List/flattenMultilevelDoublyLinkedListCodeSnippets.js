export const flattenMultilevelDoublyLinkedListCodeSnippets = {
  python: `class Node:
    def __init__(self, val=0, prev=None, next=None, child=None):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child

def flatten(head):
    if not head:
        return head
    
    curr = head
    while curr:
        if curr.child:
            # Save the next pointer
            nxt = curr.next
            
            # Flatten child list recursively
            child_head = flatten(curr.child)
            
            # Find the tail of the flattened child list
            child_tail = child_head
            while child_tail.next:
                child_tail = child_tail.next
                
            # Insert child list between curr and nxt
            curr.next = child_head
            child_head.prev = curr
            curr.child = None
            
            if nxt:
                child_tail.next = nxt
                nxt.prev = child_tail
                
        curr = curr.next
        
    return head
`,
  java: `class Node {
    int val;
    Node prev;
    Node next;
    Node child;
}

public class Solution {
    public Node flatten(Node head) {
        if (head == null) return head;
        
        Node curr = head;
        while (curr != null) {
            if (curr.child != null) {
                Node nextNode = curr.next;
                
                Node childHead = flatten(curr.child);
                Node childTail = childHead;
                while (childTail.next != null) {
                    childTail = childTail.next;
                }
                
                curr.next = childHead;
                childHead.prev = curr;
                curr.child = null;
                
                if (nextNode != null) {
                    childTail.next = nextNode;
                    nextNode.prev = childTail;
                }
            }
            curr = curr.next;
        }
        return head;
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int val;
    struct Node* prev;
    struct Node* next;
    struct Node* child;
};

struct Node* flatten(struct Node* head) {
    if (head == NULL) return head;
    
    struct Node* curr = head;
    while (curr != NULL) {
        if (curr->child != NULL) {
            struct Node* nextNode = curr->next;
            
            struct Node* childHead = flatten(curr->child);
            struct Node* childTail = childHead;
            while (childTail->next != NULL) {
                childTail = childTail->next;
            }
            
            curr->next = childHead;
            childHead->prev = curr;
            curr->child = NULL;
            
            if (nextNode != NULL) {
                childTail->next = nextNode;
                nextNode->prev = childTail;
            }
        }
        curr = curr->next;
    }
    return head;
}
`,
  cpp: `#include <iostream>

struct Node {
    int val;
    Node* prev;
    Node* next;
    Node* child;
    Node(int x) : val(x), prev(nullptr), next(nullptr), child(nullptr) {}
};

class Solution {
public:
    Node* flatten(Node* head) {
        if (head == nullptr) return head;
        
        Node* curr = head;
        while (curr != nullptr) {
            if (curr->child != nullptr) {
                Node* nextNode = curr->next;
                
                Node* childHead = flatten(curr->child);
                Node* childTail = childHead;
                while (childTail->next != nullptr) {
                    childTail = childTail->next;
                }
                
                curr->next = childHead;
                childHead->prev = curr;
                curr->child = nullptr;
                
                if (nextNode != nullptr) {
                    childTail->next = nextNode;
                    nextNode->prev = childTail;
                }
            }
            curr = curr->next;
        }
        return head;
    }
};
`
};
