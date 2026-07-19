export const TopKFrequentCodeSnippets = {
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int value;
    int freq;
} Node;
int compare(const void *a, const void *b) {
    return ((Node *)b)->freq - ((Node *)a)->freq;
}
int main() {
    int arr[] = {1, 1, 1, 2, 2, 3};
    int n = sizeof(arr) / sizeof(arr[0]);
    int k = 2;
    Node temp[100];
    int size = 0;
    for (int i = 0; i < n; i++) {
        int found = 0;
        for (int j = 0; j < size; j++) {
            if (temp[j].value == arr[i]) {
                temp[j].freq++;
                found = 1;
                break;
            }
        }
        if (!found) {
            temp[size].value = arr[i];
            temp[size].freq = 1;
            size++;
        }
    }
    qsort(temp, size, sizeof(Node), compare);
    printf("Top %d Frequent Elements: ", k);
    for (int i = 0; i < k; i++)
        printf("%d ", temp[i].value);
    return 0;
}
`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <queue>
using namespace std;
vector<int> topKFrequent(vector<int>& nums, int k) {
    unordered_map<int, int> freq;
    for (int num : nums)
        freq[num]++;
    priority_queue<pair<int, int>> maxHeap;
    for (auto it : freq)
        maxHeap.push({it.second, it.first});
    vector<int> result;
    while (k--) {
        result.push_back(maxHeap.top().second);
        maxHeap.pop();
    }
    return result;
}
int main() {
    vector<int> nums = {1, 1, 1, 2, 2, 3};
    int k = 2;
    vector<int> result = topKFrequent(nums, k);
    cout << "Top " << k << " Frequent Elements: ";
    for (int num : result)
        cout << num << " ";
    return 0;
}
`,
    python: `from collections import Counter
import heapq
def top_k_frequent(nums, k):
    freq = Counter(nums)
    return heapq.nlargest(k, freq.keys(), key=freq.get)
nums = [1, 1, 1, 2, 2, 3]
k = 2
result = top_k_frequent(nums, k)
print("Top", k, "Frequent Elements:", result)
`,
    java: `import java.util.*;
public class Main {
    public static List<Integer> topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> freq = new HashMap<>();
        for (int num : nums)
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        PriorityQueue<Map.Entry<Integer, Integer>> maxHeap =
            new PriorityQueue<>((a, b) -> b.getValue() - a.getValue());
        maxHeap.addAll(freq.entrySet());
        List<Integer> result = new ArrayList<>();
        while (k-- > 0)
            result.add(maxHeap.poll().getKey());
        return result;
    }
    public static void main(String[] args) {
        int[] nums = {1, 1, 1, 2, 2, 3};
        int k = 2;
        List<Integer> result = topKFrequent(nums, k);
        System.out.println("Top " + k + " Frequent Elements: " + result);
    }
}`
};