export const codeSnippets = {
  python: `class NumArray:
    def __init__(self, nums):
        self.prefix = [0]
        for num in nums:
            self.prefix.append(self.prefix[-1] + num)

    def sum_range(self, left, right):
        return self.prefix[right + 1] - self.prefix[left]


nums = [-2, 0, 3, -5, 2, -1]
obj = NumArray(nums)

print(obj.sum_range(0, 2))
print(obj.sum_range(2, 5))
print(obj.sum_range(0, 5))`,

  java: `class NumArray {
    private int[] prefix;

    public NumArray(int[] nums) {
        prefix = new int[nums.length + 1];

        for (int i = 0; i < nums.length; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }
    }

    public int sumRange(int left, int right) {
        return prefix[right + 1] - prefix[left];
    }

    public static void main(String[] args) {
        int[] nums = {-2, 0, 3, -5, 2, -1};

        NumArray obj = new NumArray(nums);

        System.out.println(obj.sumRange(0, 2));
        System.out.println(obj.sumRange(2, 5));
        System.out.println(obj.sumRange(0, 5));
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int* prefix;
} NumArray;

NumArray* createNumArray(int* nums, int size) {
    NumArray* obj = (NumArray*)malloc(sizeof(NumArray));
    obj->prefix = (int*)malloc((size + 1) * sizeof(int));

    obj->prefix[0] = 0;

    for (int i = 0; i < size; i++) {
        obj->prefix[i + 1] = obj->prefix[i] + nums[i];
    }

    return obj;
}

int sumRange(NumArray* obj, int left, int right) {
    return obj->prefix[right + 1] - obj->prefix[left];
}

int main() {
    int nums[] = {-2, 0, 3, -5, 2, -1};
    int size = sizeof(nums) / sizeof(nums[0]);

    NumArray* obj = createNumArray(nums, size);

    printf("%d\\n", sumRange(obj, 0, 2));
    printf("%d\\n", sumRange(obj, 2, 5));
    printf("%d\\n", sumRange(obj, 0, 5));

    free(obj->prefix);
    free(obj);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
using namespace std;

class NumArray {
private:
    vector<int> prefix;

public:
    NumArray(vector<int>& nums) {
        prefix.push_back(0);

        for (int num : nums) {
            prefix.push_back(prefix.back() + num);
        }
    }

    int sumRange(int left, int right) {
        return prefix[right + 1] - prefix[left];
    }
};

int main() {
    vector<int> nums = {-2, 0, 3, -5, 2, -1};

    NumArray obj(nums);

    cout << obj.sumRange(0, 2) << endl;
    cout << obj.sumRange(2, 5) << endl;
    cout << obj.sumRange(0, 5) << endl;

    return 0;
}`
};