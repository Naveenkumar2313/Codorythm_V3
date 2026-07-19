// src/data/codeSnippets.js
export const FMDScodeSnippets = {
    c: `#include <stdio.h>
#include <stdlib.h>
#define MAX 100
typedef struct {
    int arr[MAX];
    int size;
} MaxHeap;
typedef struct {
    int arr[MAX];
    int size;
} MinHeap;
void swap(int *a, int *b) {
    int t = *a;
    *a = *b;
    *b = t;
}
void maxHeapInsert(MaxHeap *heap, int val) {
    int i = heap->size++;
    heap->arr[i] = val;
    while (i > 0) {
        int p = (i - 1) / 2;
        if (heap->arr[p] >= heap->arr[i]) break;
        swap(&heap->arr[p], &heap->arr[i]);
        i = p;
    }
}
void minHeapInsert(MinHeap *heap, int val) {
    int i = heap->size++;
    heap->arr[i] = val;
    while (i > 0) {
        int p = (i - 1) / 2;
        if (heap->arr[p] <= heap->arr[i]) break;
        swap(&heap->arr[p], &heap->arr[i]);
        i = p;
    }
}
int maxHeapPop(MaxHeap *heap) {
    int top = heap->arr[0];
    heap->arr[0] = heap->arr[--heap->size];
    int i = 0;
    while (1) {
        int l = 2 * i + 1, r = 2 * i + 2, largest = i;
        if (l < heap->size && heap->arr[l] > heap->arr[largest]) largest = l;
        if (r < heap->size && heap->arr[r] > heap->arr[largest]) largest = r;
        if (largest == i) break;
        swap(&heap->arr[i], &heap->arr[largest]);
        i = largest;
    }
    return top;
}
int minHeapPop(MinHeap *heap) {
    int top = heap->arr[0];
    heap->arr[0] = heap->arr[--heap->size];
    int i = 0;
    while (1) {
        int l = 2 * i + 1, r = 2 * i + 2, smallest = i;
        if (l < heap->size && heap->arr[l] < heap->arr[smallest]) smallest = l;
        if (r < heap->size && heap->arr[r] < heap->arr[smallest]) smallest = r;
        if (smallest == i) break;
        swap(&heap->arr[i], &heap->arr[smallest]);
        i = smallest;
    }
    return top;
}
double findMedian(MaxHeap *left, MinHeap *right) {
    if (left->size == right->size)
        return (left->arr[0] + right->arr[0]) / 2.0;
    return left->arr[0];
}
int main() {
    int nums[] = {5, 15, 1, 3};
    int n = sizeof(nums) / sizeof(nums[0]);
    MaxHeap left = {{0}, 0};
    MinHeap right = {{0}, 0};
    for (int i = 0; i < n; i++) {
        if (left.size == 0 || nums[i] <= left.arr[0])
            maxHeapInsert(&left, nums[i]);
        else
            minHeapInsert(&right, nums[i]);
        if (left.size > right.size + 1)
            minHeapInsert(&right, maxHeapPop(&left));
        else if (right.size > left.size)
            maxHeapInsert(&left, minHeapPop(&right));

        printf("After inserting %d, Median = %.1f\\n", nums[i], findMedian(&left, &right));
    }

    return 0;
}
`,
    cpp: `#include <iostream>
#include <queue>
#include <vector>
using namespace std;
class MedianFinder {
    priority_queue<int> left;
    priority_queue<int, vector<int>, greater<int>> right;
public:
    void addNum(int num) {
        if (left.empty() || num <= left.top())
            left.push(num);
        else
            right.push(num);
        if (left.size() > right.size() + 1) {
            right.push(left.top());
            left.pop();
        } else if (right.size() > left.size()) {
            left.push(right.top());
            right.pop();
        }
    }
    double findMedian() {
        if (left.size() == right.size())
            return (left.top() + right.top()) / 2.0;
        return left.top();
    }
};
int main() {
    MedianFinder mf;
    vector<int> nums = {5, 15, 1, 3};
    for (int num : nums) {
        mf.addNum(num);
        cout << "After inserting " << num << ", Median = " << mf.findMedian() << endl;
    }
    return 0;
}
`,
    python: `import heapq
class MedianFinder:
    def __init__(self):
        self.left = []
        self.right = []
    def add_num(self, num):
        if not self.left or num <= -self.left[0]:
            heapq.heappush(self.left, -num)
        else:
            heapq.heappush(self.right, num)
        if len(self.left) > len(self.right) + 1:
            heapq.heappush(self.right, -heapq.heappop(self.left))
        elif len(self.right) > len(self.left):
            heapq.heappush(self.left, -heapq.heappop(self.right))

    def find_median(self):
        if len(self.left) == len(self.right):
            return (-self.left[0] + self.right[0]) / 2
        return -self.left[0]

mf = MedianFinder()
nums = [5, 15, 1, 3]
for num in nums:
    mf.add_num(num)
    print(f"After inserting {num}, Median = {mf.find_median()}")
`,
    java: `import java.util.Collections;
import java.util.PriorityQueue;
class MedianFinder {
    private PriorityQueue<Integer> left = new PriorityQueue<>(Collections.reverseOrder());
    private PriorityQueue<Integer> right = new PriorityQueue<>();
    public void addNum(int num) {
        if (left.isEmpty() || num <= left.peek())
            left.offer(num);
        else
            right.offer(num);
        if (left.size() > right.size() + 1)
            right.offer(left.poll());
        else if (right.size() > left.size())
            left.offer(right.poll());
    }
    public double findMedian() {
        if (left.size() == right.size())
            return (left.peek() + right.peek()) / 2.0;
        return left.peek();
    }
}
public class Main {
    public static void main(String[] args) {
        MedianFinder mf = new MedianFinder();
        int[] nums = {5, 15, 1, 3};
        for (int num : nums) {
            mf.addNum(num);
            System.out.println("After inserting " + num + ", Median = " + mf.findMedian());
        }
    }
}`
};