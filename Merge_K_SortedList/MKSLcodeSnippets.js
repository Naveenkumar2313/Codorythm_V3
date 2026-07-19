export const MKSLcodeSnippets = {
  c: `#include <stdio.h>
#include <stdlib.h>
#define K 3
#define MAX_SIZE 100
typedef struct {
    int value;
    int listIndex;
    int elementIndex;
} HeapNode;
void swap(HeapNode *a, HeapNode *b) {
    HeapNode temp = *a;
    *a = *b;
    *b = temp;
}
void heapifyDown(HeapNode heap[], int size, int index) {
    int smallest = index;
    int left = 2 * index + 1;
    int right = 2 * index + 2;

    if (left < size && heap[left].value < heap[smallest].value)
        smallest = left;

    if (right < size && heap[right].value < heap[smallest].value)
        smallest = right;

    if (smallest != index) {
        swap(&heap[index], &heap[smallest]);
        heapifyDown(heap, size, smallest);
    }
}
void heapifyUp(HeapNode heap[], int index) {
    while (index > 0) {
        int parent = (index - 1) / 2;
        if (heap[parent].value <= heap[index].value)
            break;
        swap(&heap[parent], &heap[index]);
        index = parent;
    }
}
void insertHeap(HeapNode heap[], int *size, HeapNode node) {
    heap[*size] = node;
    heapifyUp(heap, *size);
    (*size)++;
}
HeapNode extractMin(HeapNode heap[], int *size) {
    HeapNode root = heap[0];
    heap[0] = heap[*size - 1];
    (*size)--;
    heapifyDown(heap, *size, 0);
    return root;
}
int main() {
    int lists[K][MAX_SIZE] = {
        {1,4,7},
        {2,5,8},
        {3,6,9}
    };
    int lengths[K] = {3,3,3};
    HeapNode heap[MAX_SIZE];
    int heapSize = 0;
    for(int i=0;i<K;i++){
        HeapNode node = {lists[i][0], i, 0};
        insertHeap(heap,&heapSize,node);
    }
    printf("Merged List: ");
    while(heapSize>0){
        HeapNode min = extractMin(heap,&heapSize);
        printf("%d ",min.value);

        if(min.elementIndex + 1 < lengths[min.listIndex]){
            HeapNode next = {
                lists[min.listIndex][min.elementIndex+1],
                min.listIndex,
                min.elementIndex+1
            };
            insertHeap(heap,&heapSize,next);
        }
    }
    return 0;
}
`,

  cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct Node {
    int value;
    int listIndex;
    int elementIndex;
    bool operator>(const Node& other) const {
        return value > other.value;
    }
};
int main() {
    vector<vector<int>> lists = {
        {1,4,7},
        {2,5,8},
        {3,6,9}
    };
    priority_queue<Node, vector<Node>, greater<Node>> pq;

    for(int i=0;i<lists.size();i++){
        pq.push({lists[i][0], i, 0});
    }
    vector<int> merged;
    while(!pq.empty()){
        Node curr = pq.top();
        pq.pop();
        merged.push_back(curr.value);
        if(curr.elementIndex + 1 < lists[curr.listIndex].size()){
            pq.push({
                lists[curr.listIndex][curr.elementIndex+1],
                curr.listIndex,
                curr.elementIndex+1
            });
        }
    }
    cout<<"Merged List: ";
    for(int x: merged)
        cout<<x<<" ";
    return 0;
}
`,
  python: `import heapq
lists = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
]
heap = []
for i, lst in enumerate(lists):
    heapq.heappush(heap, (lst[0], i, 0))
merged = []
while heap:
    value, list_index, element_index = heapq.heappop(heap)
    merged.append(value)

    if element_index + 1 < len(lists[list_index]):
        heapq.heappush(
            heap,
            (
                lists[list_index][element_index + 1],
                list_index,
                element_index + 1
            )
        )

print("Merged List:", merged)
`,

  java: `import java.util.*;
class Node {
    int value;
    int listIndex;
    int elementIndex;
    Node(int value, int listIndex, int elementIndex) {
        this.value = value;
        this.listIndex = listIndex;
        this.elementIndex = elementIndex;
    }
}
public class Main {
    public static void main(String[] args) {
        int[][] lists = {
            {1,4,7},
            {2,5,8},
            {3,6,9}
        };
        PriorityQueue<Node> pq = new PriorityQueue<>(
            (a,b) -> a.value - b.value
        );
        for(int i=0;i<lists.length;i++){
            pq.offer(new Node(lists[i][0], i, 0));
        }
        List<Integer> merged = new ArrayList<>();
        while(!pq.isEmpty()){
            Node curr = pq.poll();
            merged.add(curr.value);
            if(curr.elementIndex + 1 < lists[curr.listIndex].length){
                pq.offer(
                    new Node(
                        lists[curr.listIndex][curr.elementIndex+1],
                        curr.listIndex,
                        curr.elementIndex+1
                    )
                );
            }
        }
        System.out.println("Merged List: " + merged);
    }
}
`
};