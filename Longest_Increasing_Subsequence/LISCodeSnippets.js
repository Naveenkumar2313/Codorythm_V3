// src/data/codeSnippets.js
export const LISCodeSnippets = {
    c: `#include <stdio.h>
#include <stdlib.h>

int lowerBound(int arr[], int size, int value) {
    int low = 0, high = size;

    while (low < high) {
        int mid = low + (high - low) / 2;

        if (arr[mid] >= value)
            high = mid;
        else
            low = mid + 1;
    }

    return low;
}

int lisLength(int nums[], int n) {
    int *tails = (int*)malloc(n * sizeof(int));
    int size = 0;

    for (int i = 0; i < n; i++) {
        int pos = lowerBound(tails, size, nums[i]);

        tails[pos] = nums[i];

        if (pos == size)
            size++;
    }

    free(tails);
    return size;
}

int main() {
    int nums[] = {10, 9, 2, 5, 3, 7, 101, 18};
    int n = sizeof(nums) / sizeof(nums[0]);

    printf("LIS Length = %d\\n", lisLength(nums, n));

    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int lisLength(vector<int>& nums) {
    vector<int> tails;

    for (int num : nums) {
        auto it = lower_bound(tails.begin(), tails.end(), num);

        if (it == tails.end())
            tails.push_back(num);
        else
            *it = num;
    }

    return (int)tails.size();
}

int main() {
    vector<int> nums = {10, 9, 2, 5, 3, 7, 101, 18};

    cout << "LIS Length = " << lisLength(nums) << endl;

    return 0;
}`,

    python: `from bisect import bisect_left

def lis_length(nums):
    tails = []

    for num in nums:
        pos = bisect_left(tails, num)

        if pos == len(tails):
            tails.append(num)
        else:
            tails[pos] = num

    return len(tails)

nums = [10, 9, 2, 5, 3, 7, 101, 18]

print("LIS Length =", lis_length(nums))`,

    java: `import java.util.*;

class Main {
    static int lisLength(int[] nums) {
        ArrayList<Integer> tails = new ArrayList<>();

        for (int num : nums) {
            int low = 0, high = tails.size();

            while (low < high) {
                int mid = low + (high - low) / 2;

                if (tails.get(mid) >= num)
                    high = mid;
                else
                    low = mid + 1;
            }

            if (low == tails.size())
                tails.add(num);
            else
                tails.set(low, num);
        }

        return tails.size();
    }

    public static void main(String[] args) {
        int[] nums = {10, 9, 2, 5, 3, 7, 101, 18};

        System.out.println("LIS Length = " + lisLength(nums));
    }
}`
};