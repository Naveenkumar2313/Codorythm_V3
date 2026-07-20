export const slidingWindowMaximumCodeSnippets = {
    python: `from collections import deque

def max_sliding_window(nums, k):
    n = len(nums)
    result = []
    window = deque()

    for i in range(n):
        while window and window[0] < i - k + 1:
            window.popleft()

        while window and nums[window[-1]] < nums[i]:
            window.pop()

        window.append(i)

        if i >= k - 1:
            result.append(nums[window[0]])

    return result

nums = [1, 3, -1, -3, 5, 3, 6, 7]
k = 3
print(max_sliding_window(nums, k))`,

    java: `import java.util.*;

public class SlidingWindowMaximum {
    public static int[] maxSlidingWindow(int[] nums, int k) {
        int n = nums.length;
        int[] result = new int[n - k + 1];
        Deque<Integer> window = new ArrayDeque<>();

        for (int i = 0; i < n; i++) {
            while (!window.isEmpty() && window.peek() < i - k + 1) {
                window.poll();
            }

            while (!window.isEmpty() && nums[window.peekLast()] < nums[i]) {
                window.pollLast();
            }

            window.offer(i);

            if (i >= k - 1) {
                result[i - k + 1] = nums[window.peek()];
            }
        }

        return result;
    }

    public static void main(String[] args) {
        int[] nums = {1, 3, -1, -3, 5, 3, 6, 7};
        int k = 3;
        System.out.println(Arrays.toString(maxSlidingWindow(nums, k)));
    }
}`,

    c: `#include <stdio.h>
#include <stdlib.h>

void maxSlidingWindow(int nums[], int n, int k, int result[]) {
    int* window = (int*)malloc(n * sizeof(int));
    int front = 0, rear = 0;

    for (int i = 0; i < n; i++) {
        while (front < rear && window[front] < i - k + 1) {
            front++;
        }

        while (front < rear && nums[window[rear - 1]] < nums[i]) {
            rear--;
        }

        window[rear++] = i;

        if (i >= k - 1) {
            result[i - k + 1] = nums[window[front]];
        }
    }

    free(window);
}

int main() {
    int nums[] = {1, 3, -1, -3, 5, 3, 6, 7};
    int n = sizeof(nums) / sizeof(nums[0]);
    int k = 3;
    int result[n - k + 1];

    maxSlidingWindow(nums, n, k, result);

    for (int i = 0; i < n - k + 1; i++) {
        printf("%d ", result[i]);
    }

    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>
#include <deque>

using namespace std;

vector<int> maxSlidingWindow(vector<int>& nums, int k) {
    int n = nums.size();
    vector<int> result;
    deque<int> window;

    for (int i = 0; i < n; i++) {
        while (!window.empty() && window.front() < i - k + 1) {
            window.pop_front();
        }

        while (!window.empty() && nums[window.back()] < nums[i]) {
            window.pop_back();
        }

        window.push_back(i);

        if (i >= k - 1) {
            result.push_back(nums[window.front()]);
        }
    }

    return result;
}

int main() {
    vector<int> nums = {1, 3, -1, -3, 5, 3, 6, 7};
    int k = 3;
    vector<int> result = maxSlidingWindow(nums, k);

    for (int value : result) {
        cout << value << " ";
    }

    return 0;
}`
};