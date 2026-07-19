export const SXEKcodeSnippets = {
    c: `#include <stdio.h>
int subarrayXOR(int arr[], int n, int k) {
    int prefixXOR = 0, count = 0;
    int hash[1000] = {0};
    hash[0] = 1;
    for (int i = 0; i < n; i++) {
        prefixXOR ^= arr[i];
        int required = prefixXOR ^ k;
        if (required >= 0 && required < 1000)
            count += hash[required];
        if (prefixXOR >= 0 && prefixXOR < 1000)
            hash[prefixXOR]++;
    }
    return count;
}
int main() {
    int arr[] = {4, 2, 2, 6, 4};
    int n = sizeof(arr) / sizeof(arr[0]);
    int k = 6;
    int result = subarrayXOR(arr, n, k);
    printf("Number of subarrays with XOR %d = %d\n", k, result);
    return 0;
}
`,
    cpp: `#include <iostream>
#include<vector>
#include <unordered_map>
using namespace std;
int subarrayXOR(int arr[], int n, int k) {
    unordered_map<int, int> freq;
    int prefixXOR = 0;
    int count = 0;
    freq[0] = 1;
    for (int i = 0; i < n; i++) {
        prefixXOR ^= arr[i];
        int required = prefixXOR ^ k;
        if (freq.find(required) != freq.end())
            count += freq[required];
        freq[prefixXOR]++;
    }
    return count;
}
int main() {
    int arr[] = {4, 2, 2, 6, 4};
    int n = sizeof(arr) / sizeof(arr[0]);
    int k = 6;
    int result = subarrayXOR(arr, n, k);
    cout << "Number of subarrays with XOR " << k << " = " << result << endl;
    return 0;
}
`,
    python: `def subarray_xor(arr, k):
    prefix_xor = 0
    count = 0
    freq = {0: 1}
    for num in arr:
        prefix_xor ^= num
        required = prefix_xor ^ k
        if required in freq:
            count += freq[required]
        freq[prefix_xor] = freq.get(prefix_xor, 0) + 1
    return count
arr = [4, 2, 2, 6, 4]
k = 6
result = subarray_xor(arr, k)
print(f"Number of subarrays with XOR {k} = {result}")
`,

    java: `import java.util.HashMap;
public class Main {
    public static int subarrayXOR(int[] arr, int k) {
        HashMap<Integer, Integer> freq = new HashMap<>();
        int prefixXOR = 0;
        int count = 0;
        freq.put(0, 1);
        for (int num : arr) {
            prefixXOR ^= num;
            int required = prefixXOR ^ k;
            if (freq.containsKey(required))
                count += freq.get(required);
            freq.put(prefixXOR, freq.getOrDefault(prefixXOR, 0) + 1);
        }
        return count;
    }
    public static void main(String[] args) {
        int[] arr = {4, 2, 2, 6, 4};
        int k = 6;
        int result = subarrayXOR(arr, k);
        System.out.println("Number of subarrays with XOR " + k + " = " + result);
    }
}
`
};