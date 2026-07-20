export const trappingRainWaterCodeSnippets = {
    python: `def trap(height):
    n = len(height)
    left = 0
    right = n - 1
    leftMax = 0
    rightMax = 0
    totalWater = 0

    while left <= right:
        if leftMax <= rightMax:
            if height[left] > leftMax:
                leftMax = height[left]
            else:
                totalWater += leftMax - height[left]
            left += 1
        else:
            if height[right] > rightMax:
                rightMax = height[right]
            else:
                totalWater += rightMax - height[right]
            right -= 1

    return totalWater

height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
print(trap(height))`,

    java: `import java.util.*;

public class TrappingRainWater {
    public static int trap(int[] height) {
        int n = height.length;
        int left = 0;
        int right = n - 1;
        int leftMax = 0;
        int rightMax = 0;
        int totalWater = 0;

        while (left <= right) {
            if (leftMax <= rightMax) {
                if (height[left] > leftMax) {
                    leftMax = height[left];
                } else {
                    totalWater += leftMax - height[left];
                }
                left++;
            } else {
                if (height[right] > rightMax) {
                    rightMax = height[right];
                } else {
                    totalWater += rightMax - height[right];
                }
                right--;
            }
        }

        return totalWater;
    }

    public static void main(String[] args) {
        int[] height = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};
        System.out.println(trap(height));
    }
}`,

    c: `#include <stdio.h>

int trap(int height[], int n) {
    int left = 0;
    int right = n - 1;
    int leftMax = 0;
    int rightMax = 0;
    int totalWater = 0;

    while (left <= right) {
        if (leftMax <= rightMax) {
            if (height[left] > leftMax) {
                leftMax = height[left];
            } else {
                totalWater += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] > rightMax) {
                rightMax = height[right];
            } else {
                totalWater += rightMax - height[right];
            }
            right--;
        }
    }

    return totalWater;
}

int main() {
    int height[] = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};
    int n = sizeof(height) / sizeof(height[0]);
    printf("%d\\n", trap(height, n));
    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>

using namespace std;

int trap(vector<int>& height) {
    int n = height.size();
    int left = 0;
    int right = n - 1;
    int leftMax = 0;
    int rightMax = 0;
    int totalWater = 0;

    while (left <= right) {
        if (leftMax <= rightMax) {
            if (height[left] > leftMax) {
                leftMax = height[left];
            } else {
                totalWater += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] > rightMax) {
                rightMax = height[right];
            } else {
                totalWater += rightMax - height[right];
            }
            right--;
        }
    }

    return totalWater;
}

int main() {
    vector<int> height = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};
    cout << trap(height) << endl;
    return 0;
}`
};