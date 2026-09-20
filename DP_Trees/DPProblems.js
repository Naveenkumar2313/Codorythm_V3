export const treeDPProblems = [
    {
        id: 'tdp-e1',
        title: 'Maximum Non-Adjacent Nodes',
        difficulty: 'Easy',
        description: 'Given a binary tree where each node contains a positive value, find the maximum sum of values that can be obtained by selecting nodes such that no selected node is directly connected to another selected node by an edge.',
        constraints: [
            '1 <= number of nodes <= 100',
            '1 <= node value <= 1000',
            'The tree is a binary tree.'
        ],
        inputFormat: 'The first line contains n. The second line contains the level-order representation of the binary tree using -1 for null nodes.',
        outputFormat: 'Print the maximum possible sum of selected non-adjacent nodes.',
        examples: [
            {
                input: '7\n3 2 3 -1 3 -1 1',
                output: '7',
                explanation: 'Selecting nodes 3, 3 and 1 gives the maximum sum of 7.'
            },
            {
                input: '3\n3 4 5',
                output: '9',
                explanation: 'Selecting the root is not optimal. Selecting nodes 4 and 5 gives 9.'
            }
        ]
    },
    {
        id: 'tdp-e2',
        title: 'House Robber on a Binary Tree',
        difficulty: 'Easy',
        description: 'A thief wants to rob houses arranged as nodes of a binary tree. Each node contains the money stored in that house. The thief cannot rob two directly connected houses. Find the maximum amount of money that can be robbed.',
        constraints: [
            '1 <= number of nodes <= 100',
            '0 <= money in each house <= 1000',
            'The tree is a binary tree.'
        ],
        inputFormat: 'The first line contains n. The second line contains the level-order representation of the tree using -1 for null nodes.',
        outputFormat: 'Print the maximum amount of money that can be robbed.',
        examples: [
            {
                input: '7\n3 2 3 -1 3 -1 1',
                output: '7',
                explanation: 'Robbing the root and the grandchildren gives a total of 7.'
            },
            {
                input: '7\n3 4 5 1 3 -1 1',
                output: '9',
                explanation: 'The best selection produces a total of 9.'
            }
        ]
    },
    {
        id: 'tdp-e3',
        title: 'Best Independent Node Sum',
        difficulty: 'Easy',
        description: 'Given a binary tree with a value at every node, select a set of nodes with maximum total value such that no parent and child are both selected.',
        constraints: [
            '1 <= number of nodes <= 100',
            '1 <= node value <= 1000',
            'All node values are positive.'
        ],
        inputFormat: 'The first line contains n. The second line contains the level-order tree representation where -1 represents a missing node.',
        outputFormat: 'Print the maximum achievable sum.',
        examples: [
            {
                input: '5\n5 1 2 3 4',
                output: '12',
                explanation: 'Selecting the root and both leaf-level nodes gives the maximum valid sum.'
            },
            {
                input: '3\n10 5 6',
                output: '11',
                explanation: 'The two children can be selected together for a total of 11.'
            }
        ]
    },
    {
        id: 'tdp-e4',
        title: 'Maximum Reward from Tree Houses',
        difficulty: 'Easy',
        description: 'Each house in a binary tree offers a reward. You may collect the reward from a house only if you do not collect rewards from either of its children. Find the maximum reward that can be collected.',
        constraints: [
            '1 <= number of nodes <= 100',
            '0 <= reward <= 1000',
            'The tree contains at least one node.'
        ],
        inputFormat: 'The first line contains n. The second line contains the level-order tree representation using -1 for null nodes.',
        outputFormat: 'Print the maximum possible reward.',
        examples: [
            {
                input: '7\n4 1 5 2 3 -1 6',
                output: '15',
                explanation: 'Choosing the root and suitable grandchildren produces the maximum reward.'
            },
            {
                input: '1\n8',
                output: '8',
                explanation: 'With one node, selecting the root gives the maximum reward.'
            }
        ]
    },
    {
        id: 'tdp-e5',
        title: 'Tree Robbery with Leaf Houses',
        difficulty: 'Easy',
        description: 'A binary tree represents houses connected by roads. Robbing two houses connected by a road is not allowed. Determine the maximum amount that can be collected from the tree.',
        constraints: [
            '1 <= number of nodes <= 200',
            '0 <= value of each node <= 1000',
            'The input represents a valid binary tree.'
        ],
        inputFormat: 'The first line contains n. The second line contains the level-order representation of the tree using -1 for null nodes.',
        outputFormat: 'Print the maximum amount that can be collected.',
        examples: [
            {
                input: '7\n10 5 15 2 3 6 8',
                output: '28',
                explanation: 'Selecting the root, grandchildren and appropriate leaf nodes gives the maximum total.'
            },
            {
                input: '3\n2 1 3',
                output: '4',
                explanation: 'The two children can be selected instead of the root.'
            }
        ]
    },
    {
        id: 'tdp-m1',
        title: 'Maximum Sum with Parent-Child Restriction',
        difficulty: 'Medium',
        description: 'Given a binary tree containing positive and negative values, select nodes with maximum total sum such that no selected node has its parent selected. Every node may be selected at most once.',
        constraints: [
            '1 <= number of nodes <= 1000',
            '-10^4 <= node value <= 10^4',
            'The tree is a valid binary tree.'
        ],
        inputFormat: 'The first line contains n. The second line contains the level-order representation using -1 for null nodes.',
        outputFormat: 'Print the maximum possible sum.',
        examples: [
            {
                input: '7\n10 1 2 20 30 4 5',
                output: '65',
                explanation: 'The optimal independent set combines the root with profitable grandchildren.'
            },
            {
                input: '5\n-5 10 20 3 4',
                output: '34',
                explanation: 'The optimal solution avoids the negative root and selects compatible descendants.'
            }
        ]
    },
    {
        id: 'tdp-m2',
        title: 'Maximum Non-Adjacent Sum in a Deep Tree',
        difficulty: 'Medium',
        description: 'Given a binary tree that may be highly unbalanced, find the maximum sum of selected nodes such that no selected node is directly connected to another selected node.',
        constraints: [
            '1 <= number of nodes <= 2000',
            '0 <= node value <= 10^4',
            'The tree may be skewed.'
        ],
        inputFormat: 'The first line contains n. The second line contains the level-order representation using -1 for null nodes.',
        outputFormat: 'Print the maximum sum of a valid selection.',
        examples: [
            {
                input: '7\n5 1 -1 2 -1 8 -1',
                output: '13',
                explanation: 'The optimal selection skips adjacent nodes and collects values 5 and 8.'
            },
            {
                input: '7\n1 2 -1 3 -1 4 -1',
                output: '6',
                explanation: 'The best valid selection follows alternate levels of the skewed tree.'
            }
        ]
    },
    {
        id: 'tdp-m3',
        title: 'Tree Investment Planner',
        difficulty: 'Medium',
        description: 'A company has investments represented by nodes of a hierarchy tree. Selecting an investment generates profit, but a selected investment prevents its directly dependent investments from being selected. Find the maximum total profit.',
        constraints: [
            '1 <= number of nodes <= 2000',
            '0 <= profit <= 10^5',
            'The hierarchy forms a binary tree.'
        ],
        inputFormat: 'The first line contains n. The second line contains the level-order representation of the investment tree using -1 for missing nodes.',
        outputFormat: 'Print the maximum achievable profit.',
        examples: [
            {
                input: '7\n20 10 15 8 7 9 12',
                output: '56',
                explanation: 'The optimal combination selects non-adjacent investments across the hierarchy.'
            },
            {
                input: '5\n30 20 10 5 25',
                output: '60',
                explanation: 'The root and compatible descendants provide the maximum profit.'
            }
        ]
    },
    {
        id: 'tdp-m4',
        title: 'Maximum Value from Alternate Tree Levels',
        difficulty: 'Medium',
        description: 'Select nodes from a binary tree such that no selected node is the parent of another selected node. The selected nodes may occur at different depths. Find the maximum total value.',
        constraints: [
            '1 <= number of nodes <= 3000',
            '0 <= node value <= 10^4',
            'The tree can contain missing children.'
        ],
        inputFormat: 'The first line contains n. The second line contains the level-order representation of the tree using -1 for null nodes.',
        outputFormat: 'Print the maximum total value of the selected nodes.',
        examples: [
            {
                input: '7\n7 3 4 9 1 5 6',
                output: '22',
                explanation: 'The optimal selection combines the root with suitable nodes two levels below it.'
            },
            {
                input: '7\n10 20 30 1 2 3 4',
                output: '16',
                explanation: 'Selecting the root and compatible descendants gives the maximum valid sum.'
            }
        ]
    },
    {
        id: 'tdp-m5',
        title: 'Robbery with Unequal Tree Branches',
        difficulty: 'Medium',
        description: 'A thief must maximize the amount stolen from a binary tree where the branches can have different depths and values. Two directly connected houses cannot both be robbed. Compute the maximum possible amount.',
        constraints: [
            '1 <= number of nodes <= 5000',
            '0 <= house value <= 10^5',
            'The tree may be balanced or skewed.'
        ],
        inputFormat: 'The first line contains n. The second line contains the level-order representation using -1 for null nodes.',
        outputFormat: 'Print the maximum amount that can be robbed.',
        examples: [
            {
                input: '9\n15 5 20 10 -1 30 2 7 8',
                output: '80',
                explanation: 'The optimal solution evaluates each subtree independently before combining the results at the root.'
            },
            {
                input: '7\n12 7 9 15 3 20 1',
                output: '51',
                explanation: 'Choosing the root and compatible grandchildren produces the maximum amount.'
            }
        ]
    },
    {
        id: 'tdp-h1',
        title: 'Large-Scale Tree Robbery',
        difficulty: 'Hard',
        description: 'Given a large binary tree with up to hundreds of thousands of houses, determine the maximum amount that can be robbed without robbing two directly connected houses. The solution must efficiently combine information from every subtree.',
        constraints: [
            '1 <= number of nodes <= 100000',
            '0 <= node value <= 10^9',
            'The tree may be highly skewed.'
        ],
        inputFormat: 'The first line contains n. The second line contains the level-order representation of the tree using -1 for null nodes.',
        outputFormat: 'Print the maximum amount that can be robbed.',
        examples: [
            {
                input: '7\n10 20 30 5 7 8 9',
                output: '56',
                explanation: 'The optimal independent set is obtained by combining the best states returned by each subtree.'
            },
            {
                input: '7\n5 10 15 20 25 30 35',
                output: '65',
                explanation: 'The tree DP evaluates rob and skip states for every subtree.'
            }
        ]
    },
    {
        id: 'tdp-h2',
        title: 'Tree DP with Mandatory Root Decision',
        difficulty: 'Hard',
        description: 'Given a weighted binary tree, calculate the maximum achievable value under the parent-child restriction. The root may either be selected or skipped, and the final answer must consider both possibilities.',
        constraints: [
            '1 <= number of nodes <= 100000',
            '-10^9 <= node value <= 10^9',
            'The tree may contain negative values.'
        ],
        inputFormat: 'The first line contains n. The second line contains the level-order representation using -1 for null nodes.',
        outputFormat: 'Print the maximum achievable sum.',
        examples: [
            {
                input: '7\n-10 20 30 5 10 15 25',
                output: '75',
                explanation: 'Skipping the negative root allows the best combination of its descendants.'
            },
            {
                input: '7\n50 10 20 5 6 7 8',
                output: '66',
                explanation: 'The algorithm compares the root-selected and root-skipped states.'
            }
        ]
    },
    {
        id: 'tdp-h3',
        title: 'Maximum Independent Set on a Binary Tree',
        difficulty: 'Hard',
        description: 'Find the maximum-weight independent set of a binary tree. A set is independent if no two selected nodes share an edge. Node weights may be positive or negative, and the tree can contain up to 100000 nodes.',
        constraints: [
            '1 <= number of nodes <= 100000',
            '-10^9 <= node weight <= 10^9',
            'The input represents a valid binary tree.'
        ],
        inputFormat: 'The first line contains n. The second line contains the level-order representation of the tree using -1 for null nodes.',
        outputFormat: 'Print the maximum weight of an independent set.',
        examples: [
            {
                input: '7\n10 5 6 7 8 9 10',
                output: '35',
                explanation: 'The optimal independent set is obtained by comparing selected and unselected states for each subtree.'
            },
            {
                input: '5\n-5 10 20 30 40',
                output: '70',
                explanation: 'The algorithm avoids the negative root and chooses the best compatible descendants.'
            }
        ]
    },
    {
        id: 'tdp-h4',
        title: 'Multi-Level Tree Reward Optimization',
        difficulty: 'Hard',
        description: 'Each node of a binary hierarchy provides a reward. Selecting a node prevents selection of its immediate children. Determine the maximum reward while efficiently processing a tree with a large number of nodes and arbitrary branching depth.',
        constraints: [
            '1 <= number of nodes <= 100000',
            '0 <= reward <= 10^9',
            'The tree may be highly unbalanced.'
        ],
        inputFormat: 'The first line contains n. The second line contains the level-order representation of the binary tree using -1 for missing nodes.',
        outputFormat: 'Print the maximum obtainable reward.',
        examples: [
            {
                input: '7\n25 10 15 20 5 30 8',
                output: '73',
                explanation: 'The optimal reward is obtained by independently solving both subtrees and combining their states.'
            },
            {
                input: '9\n40 12 18 7 9 20 25 5 6',
                output: '94',
                explanation: 'The algorithm evaluates both possible decisions at every subtree.'
            }
        ]
    },
    {
        id: 'tdp-h5',
        title: 'Optimal Selection in a Deep Hierarchy',
        difficulty: 'Hard',
        description: 'A large hierarchical tree contains weighted nodes representing opportunities. Select a subset of nodes with maximum total value such that no selected node is directly connected to another selected node. The tree can contain deep chains and highly uneven branches.',
        constraints: [
            '1 <= number of nodes <= 100000',
            '-10^9 <= node value <= 10^9',
            'The tree can have depth up to 100000.'
        ],
        inputFormat: 'The first line contains n. The second line contains the level-order representation of the binary tree using -1 for null nodes.',
        outputFormat: 'Print the maximum possible total value of a valid selection.',
        examples: [
            {
                input: '7\n20 5 15 10 12 8 25',
                output: '62',
                explanation: 'The optimal solution is obtained by propagating the selected and skipped states from leaves toward the root.'
            },
            {
                input: '9\n30 10 20 5 15 25 35 8 12',
                output: '95',
                explanation: 'Each subtree returns its best selected and skipped values, which are combined at higher levels.'
            }
        ]
    }
];