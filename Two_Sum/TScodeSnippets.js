export const TwoSumCodeSnippets = {
    c: `#include <stdio.h>
int twoSum(int arr[], int size, int target, int result[]) {
    for (int i = 0; i < size; i++) {
        for (int j = i + 1; j < size; j++) {
            if (arr[i] + arr[j] == target) {
                result[0] = i;
                result[1] = j;
                return 1;
            }
        }
    }
    return 0;
}
int main() {
    int arr[] = {2, 7, 11, 15};
    int size = sizeof(arr) / sizeof(arr[0]);
    int target = 9;
    int result[2];

    if (twoSum(arr, size, target, result))
        printf("Indices: %d %d\n", result[0], result[1]);
    else
        printf("No valid pair found\n");

    return 0;
}
`,
    cpp: `#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;
pair<int, int> twoSum(vector<int> &arr, int target) {
    unordered_map<int, int> mp;
    for (int i = 0; i < arr.size(); i++) {
        int complement = target - arr[i];
        if (mp.count(complement))
            return {mp[complement], i};
        mp[arr[i]] = i;
    }
    return {-1, -1};
}
int main() {
    vector<int> arr = {2, 7, 11, 15};
    int target = 9;
    pair<int, int> result = twoSum(arr, target);
    if (result.first != -1)
        cout << "Indices: " << result.first << " " << result.second << endl;
    else
        cout << "No valid pair found" << endl;

    return 0;
}
`,
    python: `def two_sum(arr, target):
    mp = {}
    for i, num in enumerate(arr):
        complement = target - num
        if complement in mp:
            return [mp[complement], i]
        mp[num] = i
    return [-1, -1]
arr = [2, 7, 11, 15]
target = 9
result = two_sum(arr, target)
if result[0] != -1:
    print(f"Indices: {result[0]} {result[1]}")
else:
    print("No valid pair found")
`,
    java: `import java.util.*;
public class Main {
    public static int[] twoSum(int[] arr, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < arr.length; i++) {
            int complement = target - arr[i];

            if (map.containsKey(complement))
                return new int[]{map.get(complement), i};

            map.put(arr[i], i);
        }
        return new int[]{-1, -1};
    }
    public static void main(String[] args) {
        int[] arr = {2, 7, 11, 15};
        int target = 9;
        int[] result = twoSum(arr, target);
        if (result[0] != -1)
            System.out.println("Indices: " + result[0] + " " + result[1]);
        else
            System.out.println("No valid pair found");
    }
}
`
};