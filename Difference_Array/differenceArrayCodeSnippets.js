export const differenceArrayCodeSnippets = {
  python: `def range_update(arr, updates):
    n = len(arr)
    diff = [0] * (n + 1)

    for left, right, value in updates:
        diff[left] += value
        if right + 1 < n:
            diff[right + 1] -= value

    current = 0
    for i in range(n):
        current += diff[i]
        arr[i] += current

    return arr`,

  java: `class Solution {
    public int[] rangeUpdate(int[] arr, int[][] updates) {
        int n = arr.length;
        int[] diff = new int[n + 1];

        for (int[] update : updates) {
            int left = update[0];
            int right = update[1];
            int value = update[2];

            diff[left] += value;
            if (right + 1 < n) {
                diff[right + 1] -= value;
            }
        }

        int current = 0;
        for (int i = 0; i < n; i++) {
            current += diff[i];
            arr[i] += current;
        }

        return arr;
    }
}`,

  c: `#include <stdio.h>

void rangeUpdate(int arr[], int n, int updates[][3], int m) {
    int diff[n + 1];

    for (int i = 0; i <= n; i++) {
        diff[i] = 0;
    }

    for (int i = 0; i < m; i++) {
        int left = updates[i][0];
        int right = updates[i][1];
        int value = updates[i][2];

        diff[left] += value;

        if (right + 1 < n) {
            diff[right + 1] -= value;
        }
    }

    int current = 0;

    for (int i = 0; i < n; i++) {
        current += diff[i];
        arr[i] += current;
    }
}`,

  cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> rangeUpdate(vector<int>& arr, vector<vector<int>>& updates) {
        int n = arr.size();
        vector<int> diff(n + 1, 0);

        for (auto& update : updates) {
            int left = update[0];
            int right = update[1];
            int value = update[2];

            diff[left] += value;

            if (right + 1 < n) {
                diff[right + 1] -= value;
            }
        }

        int current = 0;

        for (int i = 0; i < n; i++) {
            current += diff[i];
            arr[i] += current;
        }

        return arr;
    }
};`
};