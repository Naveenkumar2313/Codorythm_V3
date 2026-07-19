export const KLEcodeSnippets = {
    c: `#include <stdio.h>
#include <stdlib.h>
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}
void heapify(int heap[], int size, int i) {
    int smallest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;
    if (left < size && heap[left] < heap[smallest])
        smallest = left;
    if (right < size && heap[right] < heap[smallest])
        smallest = right;
    if (smallest != i) {
        swap(&heap[i], &heap[smallest]);
        heapify(heap, size, smallest);
    }
}
void buildMinHeap(int heap[], int size) {
    for (int i = size / 2 - 1; i >= 0; i--)
        heapify(heap, size, i);
}
int findKthLargest(int arr[], int n, int k) {
    int heap[k];
    for (int i = 0; i < k; i++)
        heap[i] = arr[i];
    buildMinHeap(heap, k);
    for (int i = k; i < n; i++) {
        if (arr[i] > heap[0]) {
            heap[0] = arr[i];
            heapify(heap, k, 0);
        }
    }
    return heap[0];
}
int main() {
    int arr[] = {3, 2, 1, 5, 6, 4};
    int n = sizeof(arr) / sizeof(arr[0]);
    int k = 2;
    printf("Kth Largest Element: %d\\n", findKthLargest(arr, n, k));
    return 0;
}
`,

    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
int findKthLargest(vector<int>& nums, int k) {
    priority_queue<int, vector<int>, greater<int>> minHeap;
    for (int num : nums) {
        minHeap.push(num);
        if (minHeap.size() > k)
            minHeap.pop();
    }
    return minHeap.top();
}
int main() {
    vector<int> nums = {3, 2, 1, 5, 6, 4};
    int k = 2;
    cout << "Kth Largest Element: " << findKthLargest(nums, k) << endl;
    return 0;
}
`,
    python: `import heapq
def find_kth_largest(nums, k):
    min_heap = []
    for num in nums:
        heapq.heappush(min_heap, num)
        if len(min_heap) > k:
            heapq.heappop(min_heap)
    return min_heap[0]
nums = [3, 2, 1, 5, 6, 4]
k = 2
print("Kth Largest Element:", find_kth_largest(nums, k))
`,

    java: `import java.util.PriorityQueue;
public class Main {
    public static int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for (int num : nums) {
            minHeap.offer(num);
            if (minHeap.size() > k)
                minHeap.poll();
        }
        return minHeap.peek();
    }
    public static void main(String[] args) {
        int[] nums = {3, 2, 1, 5, 6, 4};
        int k = 2;
        System.out.println("Kth Largest Element: " + findKthLargest(nums, k));
    }
}
`
};