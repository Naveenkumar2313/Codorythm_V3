// src/data/codeSnippets.js
export const treeDPHouseRobberCodeSnippets = {
    c: `#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int val;
    struct TreeNode *left, *right;
};

struct TreeNode* newNode(int val) {
    struct TreeNode* node = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    node->val = val;
    node->left = node->right = NULL;
    return node;
}

void dfs(struct TreeNode* root, int* rob, int* skip) {
    if (!root) {
        *rob = 0;
        *skip = 0;
        return;
    }

    int leftRob = 0, leftSkip = 0;
    int rightRob = 0, rightSkip = 0;

    dfs(root->left, &leftRob, &leftSkip);
    dfs(root->right, &rightRob, &rightSkip);

    *rob = root->val + leftSkip + rightSkip;

    *skip = (leftRob > leftSkip ? leftRob : leftSkip)
          + (rightRob > rightSkip ? rightRob : rightSkip);
}

int houseRobber(struct TreeNode* root) {
    int rob = 0, skip = 0;

    dfs(root, &rob, &skip);

    return rob > skip ? rob : skip;
}

int main() {
    struct TreeNode* root = newNode(3);
    root->left = newNode(2);
    root->right = newNode(3);
    root->left->right = newNode(3);
    root->right->right = newNode(1);

    printf("Maximum Reward: %d\\n", houseRobber(root));

    return 0;
}
`,

    cpp: `#include <iostream>
#include <algorithm>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left, *right;

    TreeNode(int x) {
        val = x;
        left = right = nullptr;
    }
};

pair<int, int> dfs(TreeNode* root) {
    if (!root)
        return {0, 0};

    pair<int, int> left = dfs(root->left);
    pair<int, int> right = dfs(root->right);

    int rob = root->val + left.second + right.second;

    int skip = max(left.first, left.second)
             + max(right.first, right.second);

    return {rob, skip};
}

int houseRobber(TreeNode* root) {
    pair<int, int> result = dfs(root);

    return max(result.first, result.second);
}

int main() {
    TreeNode* root = new TreeNode(3);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->left->right = new TreeNode(3);
    root->right->right = new TreeNode(1);

    cout << "Maximum Reward: " << houseRobber(root) << endl;

    return 0;
}
`,

    python: `class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


def dfs(root):
    if not root:
        return 0, 0

    left_rob, left_skip = dfs(root.left)
    right_rob, right_skip = dfs(root.right)

    rob = root.val + left_skip + right_skip

    skip = max(left_rob, left_skip) + max(right_rob, right_skip)

    return rob, skip


def house_robber(root):
    rob, skip = dfs(root)
    return max(rob, skip)


root = TreeNode(3)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.right = TreeNode(3)
root.right.right = TreeNode(1)

print("Maximum Reward:", house_robber(root))
`,

    java: `import java.util.*;

class TreeNode {
    int val;
    TreeNode left, right;

    TreeNode(int val) {
        this.val = val;
    }
}

public class Main {

    static int[] dfs(TreeNode root) {
        if (root == null)
            return new int[]{0, 0};

        int[] left = dfs(root.left);
        int[] right = dfs(root.right);

        int rob = root.val + left[1] + right[1];

        int skip = Math.max(left[0], left[1])
                 + Math.max(right[0], right[1]);

        return new int[]{rob, skip};
    }

    public static int houseRobber(TreeNode root) {
        int[] result = dfs(root);

        return Math.max(result[0], result[1]);
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(3);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.right = new TreeNode(3);
        root.right.right = new TreeNode(1);

        System.out.println("Maximum Reward: " + houseRobber(root));
    }
}
`
};