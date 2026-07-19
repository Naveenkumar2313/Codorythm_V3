export const MKSLProblems = [
 {
  id: 'mksl-e1',
  title: 'Merge Two Sorted Arrays',
  difficulty: 'Easy',
  description: 'Given two sorted arrays, merge them into a single sorted array while maintaining non-decreasing order. Return the merged array.',
  constraints: [
    '0 <= n, m <= 100',
    '-10^4 <= array element <= 10^4',
    'Both arrays are sorted in non-decreasing order.'
  ],
  examples: [
    {
      input: 'Array1 = 1 3 5\nArray2 = 2 4 6',
      output: '1 2 3 4 5 6',
      explanation: 'The elements from both sorted arrays are merged while preserving sorted order.'
    },
    {
      input: 'Array1 = 1 2 6\nArray2 = 3 4 5',
      output: '1 2 3 4 5 6',
      explanation: 'The merged array contains all elements from both arrays in sorted order.'
    }
  ],
  testCases: [
    {
      input: '3\n1 3 5\n3\n2 4 6',
      expectedOutput: '1 2 3 4 5 6',
      hidden: false
    },
    {
      input: '3\n1 2 6\n3\n3 4 5',
      expectedOutput: '1 2 3 4 5 6',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def merge_two_arrays(arr1,arr2):\n    pass\n\nn=int(input())\narr1=list(map(int,input().split())) if n>0 else []\nm=int(input())\narr2=list(map(int,input().split())) if m>0 else []\nresult=merge_two_arrays(arr1,arr2)\nprint(*result)',
    java: 'import java.util.*;\npublic class Solution {\n    public static List<Integer> mergeTwoArrays(int[] arr1,int[] arr2){\n        return new ArrayList<>();\n    }\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt();\n        int[] arr1=new int[n];\n        for(int i=0;i<n;i++) arr1[i]=sc.nextInt();\n        int m=sc.nextInt();\n        int[] arr2=new int[m];\n        for(int i=0;i<m;i++) arr2[i]=sc.nextInt();\n        List<Integer> ans=mergeTwoArrays(arr1,arr2);\n        for(int i=0;i<ans.size();i++){\n            if(i>0) System.out.print(" ");\n            System.out.print(ans.get(i));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\nint* mergeTwoArrays(int* arr1,int n,int* arr2,int m,int* returnSize){\n    *returnSize=0;\n    return NULL;\n}\nint main(){\n    int n;\n    scanf("%d",&n);\n    int* arr1=(int*)malloc((n>0?n:1)*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&arr1[i]);\n    int m;\n    scanf("%d",&m);\n    int* arr2=(int*)malloc((m>0?m:1)*sizeof(int));\n    for(int i=0;i<m;i++) scanf("%d",&arr2[i]);\n    int size;\n    int* ans=mergeTwoArrays(arr1,n,arr2,m,&size);\n    for(int i=0;i<size;i++){\n        if(i) printf(" ");\n        printf("%d",ans[i]);\n    }\n    free(arr1);\n    free(arr2);\n    free(ans);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> mergeTwoArrays(vector<int>& arr1,vector<int>& arr2){\n    return {};\n}\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    cin>>n;\n    vector<int> arr1(n);\n    for(int i=0;i<n;i++) cin>>arr1[i];\n    int m;\n    cin>>m;\n    vector<int> arr2(m);\n    for(int i=0;i<m;i++) cin>>arr2[i];\n    vector<int> ans=mergeTwoArrays(arr1,arr2);\n    for(int i=0;i<ans.size();i++){\n        if(i) cout<<" ";\n        cout<<ans[i];\n    }\n    return 0;\n}'
  }
},{
  id: 'mksl-e2',
  title: 'Merge Three Sorted Arrays',
  difficulty: 'Easy',
  description: 'Given three sorted arrays, merge them into a single sorted array while maintaining non-decreasing order. Return the merged array.',
  constraints: [
    '0 <= n1, n2, n3 <= 100',
    '-10^4 <= array element <= 10^4',
    'All three arrays are sorted in non-decreasing order.'
  ],
  examples: [
    {
      input: 'Array1 = 1 4\nArray2 = 2 5\nArray3 = 3 6',
      output: '1 2 3 4 5 6',
      explanation: 'The three sorted arrays are merged while preserving sorted order.'
    },
    {
      input: 'Array1 = 1 7\nArray2 = 2 6\nArray3 = 3 5 8',
      output: '1 2 3 5 6 7 8',
      explanation: 'The merged array contains all elements from the three arrays in sorted order.'
    }
  ],
  testCases: [
    {
      input: '2\n1 4\n2\n2 5\n2\n3 6',
      expectedOutput: '1 2 3 4 5 6',
      hidden: false
    },
    {
      input: '2\n1 7\n2\n2 6\n3\n3 5 8',
      expectedOutput: '1 2 3 5 6 7 8',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def merge_three_arrays(arr1,arr2,arr3):\n    pass\n\nn1=int(input())\narr1=list(map(int,input().split())) if n1>0 else []\nn2=int(input())\narr2=list(map(int,input().split())) if n2>0 else []\nn3=int(input())\narr3=list(map(int,input().split())) if n3>0 else []\nresult=merge_three_arrays(arr1,arr2,arr3)\nprint(*result)',
    java: 'import java.util.*;\npublic class Solution {\n    public static List<Integer> mergeThreeArrays(int[] arr1,int[] arr2,int[] arr3){\n        return new ArrayList<>();\n    }\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        int n1=sc.nextInt();\n        int[] arr1=new int[n1];\n        for(int i=0;i<n1;i++) arr1[i]=sc.nextInt();\n        int n2=sc.nextInt();\n        int[] arr2=new int[n2];\n        for(int i=0;i<n2;i++) arr2[i]=sc.nextInt();\n        int n3=sc.nextInt();\n        int[] arr3=new int[n3];\n        for(int i=0;i<n3;i++) arr3[i]=sc.nextInt();\n        List<Integer> ans=mergeThreeArrays(arr1,arr2,arr3);\n        for(int i=0;i<ans.size();i++){\n            if(i>0) System.out.print(" ");\n            System.out.print(ans.get(i));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\nint* mergeThreeArrays(int* arr1,int n1,int* arr2,int n2,int* arr3,int n3,int* returnSize){\n    *returnSize=0;\n    return NULL;\n}\nint main(){\n    int n1;\n    scanf("%d",&n1);\n    int* arr1=(int*)malloc((n1>0?n1:1)*sizeof(int));\n    for(int i=0;i<n1;i++) scanf("%d",&arr1[i]);\n    int n2;\n    scanf("%d",&n2);\n    int* arr2=(int*)malloc((n2>0?n2:1)*sizeof(int));\n    for(int i=0;i<n2;i++) scanf("%d",&arr2[i]);\n    int n3;\n    scanf("%d",&n3);\n    int* arr3=(int*)malloc((n3>0?n3:1)*sizeof(int));\n    for(int i=0;i<n3;i++) scanf("%d",&arr3[i]);\n    int size;\n    int* ans=mergeThreeArrays(arr1,n1,arr2,n2,arr3,n3,&size);\n    for(int i=0;i<size;i++){\n        if(i) printf(" ");\n        printf("%d",ans[i]);\n    }\n    free(arr1);\n    free(arr2);\n    free(arr3);\n    free(ans);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> mergeThreeArrays(vector<int>& arr1,vector<int>& arr2,vector<int>& arr3){\n    return {};\n}\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n1;\n    cin>>n1;\n    vector<int> arr1(n1);\n    for(int i=0;i<n1;i++) cin>>arr1[i];\n    int n2;\n    cin>>n2;\n    vector<int> arr2(n2);\n    for(int i=0;i<n2;i++) cin>>arr2[i];\n    int n3;\n    cin>>n3;\n    vector<int> arr3(n3);\n    for(int i=0;i<n3;i++) cin>>arr3[i];\n    vector<int> ans=mergeThreeArrays(arr1,arr2,arr3);\n    for(int i=0;i<ans.size();i++){\n        if(i) cout<<" ";\n        cout<<ans[i];\n    }\n    return 0;\n}'
  }
},{
  id: 'mksl-e3',
  title: 'Merge K Sorted Arrays (Brute Force)',
  difficulty: 'Easy',
  description: 'Given K sorted arrays, merge them into a single sorted array by repeatedly selecting the smallest available element through scanning all arrays. Do not use a Priority Queue or Heap.',
  constraints: [
    '1 <= K <= 10',
    '0 <= Length of each array <= 100',
    '-10^4 <= array element <= 10^4',
    'Each array is sorted in non-decreasing order.'
  ],
  examples: [
    {
      input: 'K = 3\nArray1 = 1 4 7\nArray2 = 2 5 8\nArray3 = 3 6 9',
      output: '1 2 3 4 5 6 7 8 9',
      explanation: 'At every step, scan all arrays and choose the smallest available element until every array is exhausted.'
    },
    {
      input: 'K = 4\nArray1 = 1 8\nArray2 = 2 6\nArray3 = 3 5\nArray4 = 4 7',
      output: '1 2 3 4 5 6 7 8',
      explanation: 'Repeatedly selecting the smallest current element from all arrays produces the merged sorted array.'
    }
  ],
  testCases: [
    {
      input: '3\n3\n1 4 7\n3\n2 5 8\n3\n3 6 9',
      expectedOutput: '1 2 3 4 5 6 7 8 9',
      hidden: false
    },
    {
      input: '4\n2\n1 8\n2\n2 6\n2\n3 5\n2\n4 7',
      expectedOutput: '1 2 3 4 5 6 7 8',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def merge_k_arrays(arrays):\n    pass\n\nk=int(input())\narrays=[]\nfor _ in range(k):\n    n=int(input())\n    arrays.append(list(map(int,input().split())) if n>0 else [])\nresult=merge_k_arrays(arrays)\nprint(*result)',
    java: 'import java.util.*;\npublic class Solution {\n    public static List<Integer> mergeKArrays(List<int[]> arrays){\n        return new ArrayList<>();\n    }\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        int k=sc.nextInt();\n        List<int[]> arrays=new ArrayList<>();\n        for(int i=0;i<k;i++){\n            int n=sc.nextInt();\n            int[] arr=new int[n];\n            for(int j=0;j<n;j++) arr[j]=sc.nextInt();\n            arrays.add(arr);\n        }\n        List<Integer> ans=mergeKArrays(arrays);\n        for(int i=0;i<ans.size();i++){\n            if(i>0) System.out.print(" ");\n            System.out.print(ans.get(i));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\nint* mergeKArrays(int** arrays,int* sizes,int k,int* returnSize){\n    *returnSize=0;\n    return NULL;\n}\nint main(){\n    int k;\n    scanf("%d",&k);\n    int** arrays=(int**)malloc(k*sizeof(int*));\n    int* sizes=(int*)malloc(k*sizeof(int));\n    for(int i=0;i<k;i++){\n        scanf("%d",&sizes[i]);\n        arrays[i]=(int*)malloc((sizes[i]>0?sizes[i]:1)*sizeof(int));\n        for(int j=0;j<sizes[i];j++) scanf("%d",&arrays[i][j]);\n    }\n    int size;\n    int* ans=mergeKArrays(arrays,sizes,k,&size);\n    for(int i=0;i<size;i++){\n        if(i) printf(" ");\n        printf("%d",ans[i]);\n    }\n    for(int i=0;i<k;i++) free(arrays[i]);\n    free(arrays);\n    free(sizes);\n    free(ans);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> mergeKArrays(vector<vector<int>>& arrays){\n    return {};\n}\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int k;\n    cin>>k;\n    vector<vector<int>> arrays(k);\n    for(int i=0;i<k;i++){\n        int n;\n        cin>>n;\n        arrays[i].resize(n);\n        for(int j=0;j<n;j++) cin>>arrays[i][j];\n    }\n    vector<int> ans=mergeKArrays(arrays);\n    for(int i=0;i<ans.size();i++){\n        if(i) cout<<" ";\n        cout<<ans[i];\n    }\n    return 0;\n}'
  }
},{
  id: 'mksl-m1',
  title: 'Merge K Sorted Arrays Using Min Heap',
  difficulty: 'Medium',
  description: 'Given K sorted arrays, merge them into a single sorted array using a Min Heap (Priority Queue). The merged array should contain all elements in non-decreasing order.',
  constraints: [
    '1 <= K <= 100',
    '0 <= Length of each array <= 100',
    '-10^4 <= array element <= 10^4',
    'Each array is sorted in non-decreasing order.'
  ],
  examples: [
    {
      input: 'K = 3\nArray1 = 1 4 7\nArray2 = 2 5 8\nArray3 = 3 6 9',
      output: '1 2 3 4 5 6 7 8 9',
      explanation: 'Insert the first element of every array into a Min Heap. Repeatedly remove the smallest element and insert the next element from the same array.'
    },
    {
      input: 'K = 4\nArray1 = 1 9\nArray2 = 2 6\nArray3 = 3 7\nArray4 = 4 5 8',
      output: '1 2 3 4 5 6 7 8 9',
      explanation: 'The Min Heap always keeps track of the smallest available element among all arrays.'
    }
  ],
  testCases: [
    {
      input: '3\n3\n1 4 7\n3\n2 5 8\n3\n3 6 9',
      expectedOutput: '1 2 3 4 5 6 7 8 9',
      hidden: false
    },
    {
      input: '4\n2\n1 9\n2\n2 6\n2\n3 7\n3\n4 5 8',
      expectedOutput: '1 2 3 4 5 6 7 8 9',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def merge_k_arrays(arrays):\n    pass\n\nk=int(input())\narrays=[]\nfor _ in range(k):\n    n=int(input())\n    arrays.append(list(map(int,input().split())) if n>0 else [])\nresult=merge_k_arrays(arrays)\nprint(*result)',
    java: 'import java.util.*;\npublic class Solution {\n    public static List<Integer> mergeKArrays(List<int[]> arrays){\n        return new ArrayList<>();\n    }\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        int k=sc.nextInt();\n        List<int[]> arrays=new ArrayList<>();\n        for(int i=0;i<k;i++){\n            int n=sc.nextInt();\n            int[] arr=new int[n];\n            for(int j=0;j<n;j++) arr[j]=sc.nextInt();\n            arrays.add(arr);\n        }\n        List<Integer> ans=mergeKArrays(arrays);\n        for(int i=0;i<ans.size();i++){\n            if(i>0) System.out.print(" ");\n            System.out.print(ans.get(i));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\nint* mergeKArrays(int** arrays,int* sizes,int k,int* returnSize){\n    *returnSize=0;\n    return NULL;\n}\nint main(){\n    int k;\n    scanf("%d",&k);\n    int** arrays=(int**)malloc(k*sizeof(int*));\n    int* sizes=(int*)malloc(k*sizeof(int));\n    for(int i=0;i<k;i++){\n        scanf("%d",&sizes[i]);\n        arrays[i]=(int*)malloc((sizes[i]>0?sizes[i]:1)*sizeof(int));\n        for(int j=0;j<sizes[i];j++) scanf("%d",&arrays[i][j]);\n    }\n    int size;\n    int* ans=mergeKArrays(arrays,sizes,k,&size);\n    for(int i=0;i<size;i++){\n        if(i) printf(" ");\n        printf("%d",ans[i]);\n    }\n    for(int i=0;i<k;i++) free(arrays[i]);\n    free(arrays);\n    free(sizes);\n    free(ans);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> mergeKArrays(vector<vector<int>>& arrays){\n    return {};\n}\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int k;\n    cin>>k;\n    vector<vector<int>> arrays(k);\n    for(int i=0;i<k;i++){\n        int n;\n        cin>>n;\n        arrays[i].resize(n);\n        for(int j=0;j<n;j++) cin>>arrays[i][j];\n    }\n    vector<int> ans=mergeKArrays(arrays);\n    for(int i=0;i<ans.size();i++){\n        if(i) cout<<" ";\n        cout<<ans[i];\n    }\n    return 0;\n}'
  }
},{
  id: 'mksl-m1',
  title: 'Merge K Sorted Arrays Using Min Heap',
  difficulty: 'Medium',
  description: 'Given K sorted arrays, merge them into a single sorted array using a Min Heap (Priority Queue). The merged array should contain all elements in non-decreasing order.',
  constraints: [
    '1 <= K <= 100',
    '0 <= Length of each array <= 100',
    '-10^4 <= array element <= 10^4',
    'Each array is sorted in non-decreasing order.'
  ],
  examples: [
    {
      input: 'K = 3\nArray1 = 1 4 7\nArray2 = 2 5 8\nArray3 = 3 6 9',
      output: '1 2 3 4 5 6 7 8 9',
      explanation: 'Insert the first element of every array into a Min Heap. Repeatedly remove the smallest element and insert the next element from the same array.'
    },
    {
      input: 'K = 4\nArray1 = 1 9\nArray2 = 2 6\nArray3 = 3 7\nArray4 = 4 5 8',
      output: '1 2 3 4 5 6 7 8 9',
      explanation: 'The Min Heap always keeps track of the smallest available element among all arrays.'
    }
  ],
  testCases: [
    {
      input: '3\n3\n1 4 7\n3\n2 5 8\n3\n3 6 9',
      expectedOutput: '1 2 3 4 5 6 7 8 9',
      hidden: false
    },
    {
      input: '4\n2\n1 9\n2\n2 6\n2\n3 7\n3\n4 5 8',
      expectedOutput: '1 2 3 4 5 6 7 8 9',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def merge_k_arrays(arrays):\n    pass\n\nk=int(input())\narrays=[]\nfor _ in range(k):\n    n=int(input())\n    arrays.append(list(map(int,input().split())) if n>0 else [])\nresult=merge_k_arrays(arrays)\nprint(*result)',
    java: 'import java.util.*;\npublic class Solution {\n    public static List<Integer> mergeKArrays(List<int[]> arrays){\n        return new ArrayList<>();\n    }\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        int k=sc.nextInt();\n        List<int[]> arrays=new ArrayList<>();\n        for(int i=0;i<k;i++){\n            int n=sc.nextInt();\n            int[] arr=new int[n];\n            for(int j=0;j<n;j++) arr[j]=sc.nextInt();\n            arrays.add(arr);\n        }\n        List<Integer> ans=mergeKArrays(arrays);\n        for(int i=0;i<ans.size();i++){\n            if(i>0) System.out.print(" ");\n            System.out.print(ans.get(i));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\nint* mergeKArrays(int** arrays,int* sizes,int k,int* returnSize){\n    *returnSize=0;\n    return NULL;\n}\nint main(){\n    int k;\n    scanf("%d",&k);\n    int** arrays=(int**)malloc(k*sizeof(int*));\n    int* sizes=(int*)malloc(k*sizeof(int));\n    for(int i=0;i<k;i++){\n        scanf("%d",&sizes[i]);\n        arrays[i]=(int*)malloc((sizes[i]>0?sizes[i]:1)*sizeof(int));\n        for(int j=0;j<sizes[i];j++) scanf("%d",&arrays[i][j]);\n    }\n    int size;\n    int* ans=mergeKArrays(arrays,sizes,k,&size);\n    for(int i=0;i<size;i++){\n        if(i) printf(" ");\n        printf("%d",ans[i]);\n    }\n    for(int i=0;i<k;i++) free(arrays[i]);\n    free(arrays);\n    free(sizes);\n    free(ans);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> mergeKArrays(vector<vector<int>>& arrays){\n    return {};\n}\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int k;\n    cin>>k;\n    vector<vector<int>> arrays(k);\n    for(int i=0;i<k;i++){\n        int n;\n        cin>>n;\n        arrays[i].resize(n);\n        for(int j=0;j<n;j++) cin>>arrays[i][j];\n    }\n    vector<int> ans=mergeKArrays(arrays);\n    for(int i=0;i<ans.size();i++){\n        if(i) cout<<" ";\n        cout<<ans[i];\n    }\n    return 0;\n}'
  }
},{
  id: 'mksl-m2',
  title: 'Merge K Sorted Linked Lists',
  difficulty: 'Medium',
  description: 'You are given K sorted linked lists. Merge all the linked lists into a single sorted linked list and return the merged list. The relative order of equal elements should be preserved.',
  constraints: [
    '1 <= K <= 100',
    '0 <= Number of nodes in each list <= 100',
    '-10^4 <= Node value <= 10^4',
    'Each linked list is sorted in non-decreasing order.'
  ],
  examples: [
    {
      input: 'List1 = 1 4 7\nList2 = 2 5 8\nList3 = 3 6 9',
      output: '1 2 3 4 5 6 7 8 9',
      explanation: 'The first node of every linked list is inserted into a Min Heap. The smallest node is repeatedly removed and the next node from the same list is inserted until all lists are exhausted.'
    },
    {
      input: 'List1 = 1 3 5 7\nList2 = 2 4 6\nList3 = 8 9',
      output: '1 2 3 4 5 6 7 8 9',
      explanation: 'All the sorted linked lists are merged into a single sorted linked list.'
    }
  ],
  testCases: [
    {
      input: '3\n3\n1 4 7\n3\n2 5 8\n3\n3 6 9',
      expectedOutput: '1 2 3 4 5 6 7 8 9',
      hidden: false
    },
    {
      input: '3\n4\n1 3 5 7\n3\n2 4 6\n2\n8 9',
      expectedOutput: '1 2 3 4 5 6 7 8 9',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def merge_k_lists(lists):\n    pass\n\nk=int(input())\nlists=[]\nfor _ in range(k):\n    n=int(input())\n    lists.append(list(map(int,input().split())) if n>0 else [])\nresult=merge_k_lists(lists)\nprint(*result)',
    java: 'import java.util.*;\npublic class Solution {\n    public static List<Integer> mergeKLists(List<int[]> lists){\n        return new ArrayList<>();\n    }\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        int k=sc.nextInt();\n        List<int[]> lists=new ArrayList<>();\n        for(int i=0;i<k;i++){\n            int n=sc.nextInt();\n            int[] arr=new int[n];\n            for(int j=0;j<n;j++) arr[j]=sc.nextInt();\n            lists.add(arr);\n        }\n        List<Integer> ans=mergeKLists(lists);\n        for(int i=0;i<ans.size();i++){\n            if(i>0) System.out.print(" ");\n            System.out.print(ans.get(i));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\nint* mergeKLists(int** lists,int* sizes,int k,int* returnSize){\n    *returnSize=0;\n    return NULL;\n}\nint main(){\n    int k;\n    scanf("%d",&k);\n    int** lists=(int**)malloc(k*sizeof(int*));\n    int* sizes=(int*)malloc(k*sizeof(int));\n    for(int i=0;i<k;i++){\n        scanf("%d",&sizes[i]);\n        lists[i]=(int*)malloc((sizes[i]>0?sizes[i]:1)*sizeof(int));\n        for(int j=0;j<sizes[i];j++) scanf("%d",&lists[i][j]);\n    }\n    int size;\n    int* ans=mergeKLists(lists,sizes,k,&size);\n    for(int i=0;i<size;i++){\n        if(i) printf(" ");\n        printf("%d",ans[i]);\n    }\n    for(int i=0;i<k;i++) free(lists[i]);\n    free(lists);\n    free(sizes);\n    free(ans);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> mergeKLists(vector<vector<int>>& lists){\n    return {};\n}\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int k;\n    cin>>k;\n    vector<vector<int>> lists(k);\n    for(int i=0;i<k;i++){\n        int n;\n        cin>>n;\n        lists[i].resize(n);\n        for(int j=0;j<n;j++) cin>>lists[i][j];\n    }\n    vector<int> ans=mergeKLists(lists);\n    for(int i=0;i<ans.size();i++){\n        if(i) cout<<" ";\n        cout<<ans[i];\n    }\n    return 0;\n}'
  }
},{
  id: 'mksl-m3',
  title: 'K-th Smallest Element in K Sorted Arrays',
  difficulty: 'Medium',
  description: 'Given K sorted arrays and an integer Kth, find the Kth smallest element among all the arrays without fully merging them. Use a Min Heap (Priority Queue) to efficiently process only the required elements.',
  constraints: [
    '1 <= Number of arrays <= 100',
    '0 <= Length of each array <= 100',
    '1 <= Kth <= Total number of elements',
    '-10^4 <= array element <= 10^4',
    'Each array is sorted in non-decreasing order.'
  ],
  examples: [
    {
      input: 'Arrays = [[1,4,7],[2,5,8],[3,6,9]]\nKth = 5',
      output: '5',
      explanation: 'The sorted order is 1 2 3 4 5 6 7 8 9. The 5th smallest element is 5.'
    },
    {
      input: 'Arrays = [[2,6],[1,4,8],[3,5,7]]\nKth = 6',
      output: '6',
      explanation: 'The sorted order is 1 2 3 4 5 6 7 8. The 6th smallest element is 6.'
    }
  ],
  testCases: [
    {
      input: '3\n3\n1 4 7\n3\n2 5 8\n3\n3 6 9\n5',
      expectedOutput: '5',
      hidden: false
    },
    {
      input: '3\n2\n2 6\n3\n1 4 8\n3\n3 5 7\n6',
      expectedOutput: '6',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def kth_smallest(arrays,k):\n    pass\n\nn=int(input())\narrays=[]\nfor _ in range(n):\n    m=int(input())\n    arrays.append(list(map(int,input().split())) if m>0 else [])\nk=int(input())\nprint(kth_smallest(arrays,k))',
    java: 'import java.util.*;\npublic class Solution {\n    public static int kthSmallest(List<int[]> arrays,int k){\n        return -1;\n    }\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        int n=sc.nextInt();\n        List<int[]> arrays=new ArrayList<>();\n        for(int i=0;i<n;i++){\n            int m=sc.nextInt();\n            int[] arr=new int[m];\n            for(int j=0;j<m;j++) arr[j]=sc.nextInt();\n            arrays.add(arr);\n        }\n        int k=sc.nextInt();\n        System.out.print(kthSmallest(arrays,k));\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\nint kthSmallest(int** arrays,int* sizes,int n,int k){\n    return -1;\n}\nint main(){\n    int n;\n    scanf("%d",&n);\n    int** arrays=(int**)malloc(n*sizeof(int*));\n    int* sizes=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++){\n        scanf("%d",&sizes[i]);\n        arrays[i]=(int*)malloc((sizes[i]>0?sizes[i]:1)*sizeof(int));\n        for(int j=0;j<sizes[i];j++) scanf("%d",&arrays[i][j]);\n    }\n    int k;\n    scanf("%d",&k);\n    printf("%d",kthSmallest(arrays,sizes,n,k));\n    for(int i=0;i<n;i++) free(arrays[i]);\n    free(arrays);\n    free(sizes);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nint kthSmallest(vector<vector<int>>& arrays,int k){\n    return -1;\n}\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    cin>>n;\n    vector<vector<int>> arrays(n);\n    for(int i=0;i<n;i++){\n        int m;\n        cin>>m;\n        arrays[i].resize(m);\n        for(int j=0;j<m;j++) cin>>arrays[i][j];\n    }\n    int k;\n    cin>>k;\n    cout<<kthSmallest(arrays,k);\n    return 0;\n}'
  }
},{
  id: 'mksl-h1',
  title: 'Merge K Sorted Lists Without Duplicates',
  difficulty: 'Hard',
  description: 'Given K sorted arrays, merge them into a single sorted array while removing duplicate values. Each distinct element should appear only once in the final merged array. Use a Min Heap (Priority Queue) for an efficient solution.',
  constraints: [
    '1 <= K <= 100',
    '0 <= Length of each array <= 100',
    '-10^4 <= array element <= 10^4',
    'Each array is sorted in non-decreasing order.'
  ],
  examples: [
    {
      input: 'Array1 = 1 2 4 5\nArray2 = 2 3 5 6\nArray3 = 1 4 7',
      output: '1 2 3 4 5 6 7',
      explanation: 'After merging all arrays, duplicate values are removed while preserving sorted order.'
    },
    {
      input: 'Array1 = 1 1 2\nArray2 = 2 2 3\nArray3 = 3 4 4',
      output: '1 2 3 4',
      explanation: 'Each distinct value appears exactly once in the merged array.'
    }
  ],
  testCases: [
    {
      input: '3\n4\n1 2 4 5\n4\n2 3 5 6\n3\n1 4 7',
      expectedOutput: '1 2 3 4 5 6 7',
      hidden: false
    },
    {
      input: '3\n3\n1 1 2\n3\n2 2 3\n3\n3 4 4',
      expectedOutput: '1 2 3 4',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def merge_unique(arrays):\n    pass\n\nk=int(input())\narrays=[]\nfor _ in range(k):\n    n=int(input())\n    arrays.append(list(map(int,input().split())) if n>0 else [])\nresult=merge_unique(arrays)\nprint(*result)',
    java: 'import java.util.*;\npublic class Solution {\n    public static List<Integer> mergeUnique(List<int[]> arrays){\n        return new ArrayList<>();\n    }\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        int k=sc.nextInt();\n        List<int[]> arrays=new ArrayList<>();\n        for(int i=0;i<k;i++){\n            int n=sc.nextInt();\n            int[] arr=new int[n];\n            for(int j=0;j<n;j++) arr[j]=sc.nextInt();\n            arrays.add(arr);\n        }\n        List<Integer> ans=mergeUnique(arrays);\n        for(int i=0;i<ans.size();i++){\n            if(i>0) System.out.print(" ");\n            System.out.print(ans.get(i));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\nint* mergeUnique(int** arrays,int* sizes,int k,int* returnSize){\n    *returnSize=0;\n    return NULL;\n}\nint main(){\n    int k;\n    scanf("%d",&k);\n    int** arrays=(int**)malloc(k*sizeof(int*));\n    int* sizes=(int*)malloc(k*sizeof(int));\n    for(int i=0;i<k;i++){\n        scanf("%d",&sizes[i]);\n        arrays[i]=(int*)malloc((sizes[i]>0?sizes[i]:1)*sizeof(int));\n        for(int j=0;j<sizes[i];j++) scanf("%d",&arrays[i][j]);\n    }\n    int size;\n    int* ans=mergeUnique(arrays,sizes,k,&size);\n    for(int i=0;i<size;i++){\n        if(i) printf(" ");\n        printf("%d",ans[i]);\n    }\n    for(int i=0;i<k;i++) free(arrays[i]);\n    free(arrays);\n    free(sizes);\n    free(ans);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> mergeUnique(vector<vector<int>>& arrays){\n    return {};\n}\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int k;\n    cin>>k;\n    vector<vector<int>> arrays(k);\n    for(int i=0;i<k;i++){\n        int n;\n        cin>>n;\n        arrays[i].resize(n);\n        for(int j=0;j<n;j++) cin>>arrays[i][j];\n    }\n    vector<int> ans=mergeUnique(arrays);\n    for(int i=0;i<ans.size();i++){\n        if(i) cout<<" ";\n        cout<<ans[i];\n    }\n    return 0;\n}'
  }
},{
  id: 'mksl-h2',
  title: 'Smallest Range Covering Elements from K Sorted Arrays',
  difficulty: 'Hard',
  description: 'Given K sorted arrays, find the smallest inclusive range [L, R] such that the range contains at least one element from every array. If multiple ranges have the same length, return the one with the smaller starting value.',
  constraints: [
    '1 <= K <= 100',
    '1 <= Length of each array <= 100',
    '-10^4 <= array element <= 10^4',
    'Each array is sorted in non-decreasing order.'
  ],
  examples: [
    {
      input: 'Array1 = 4 10 15 24 26\nArray2 = 0 9 12 20\nArray3 = 5 18 22 30',
      output: '20 24',
      explanation: 'The smallest range containing at least one element from every array is [20, 24].'
    },
    {
      input: 'Array1 = 1 5 8\nArray2 = 4 12\nArray3 = 7 8 10',
      output: '4 7',
      explanation: 'The range [4, 7] includes 5 from the first array, 4 from the second array and 7 from the third array.'
    }
  ],
  testCases: [
    {
      input: '3\n5\n4 10 15 24 26\n4\n0 9 12 20\n4\n5 18 22 30',
      expectedOutput: '20 24',
      hidden: false
    },
    {
      input: '3\n3\n1 5 8\n2\n4 12\n3\n7 8 10',
      expectedOutput: '4 7',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def smallest_range(arrays):\n    pass\n\nk=int(input())\narrays=[]\nfor _ in range(k):\n    n=int(input())\n    arrays.append(list(map(int,input().split())) if n>0 else [])\nleft,right=smallest_range(arrays)\nprint(left,right)',
    java: 'import java.util.*;\npublic class Solution {\n    public static int[] smallestRange(List<int[]> arrays){\n        return new int[2];\n    }\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        int k=sc.nextInt();\n        List<int[]> arrays=new ArrayList<>();\n        for(int i=0;i<k;i++){\n            int n=sc.nextInt();\n            int[] arr=new int[n];\n            for(int j=0;j<n;j++) arr[j]=sc.nextInt();\n            arrays.add(arr);\n        }\n        int[] ans=smallestRange(arrays);\n        System.out.print(ans[0]+" "+ans[1]);\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\nvoid smallestRange(int** arrays,int* sizes,int k,int* left,int* right){\n    *left=0;\n    *right=0;\n}\nint main(){\n    int k;\n    scanf("%d",&k);\n    int** arrays=(int**)malloc(k*sizeof(int*));\n    int* sizes=(int*)malloc(k*sizeof(int));\n    for(int i=0;i<k;i++){\n        scanf("%d",&sizes[i]);\n        arrays[i]=(int*)malloc(sizes[i]*sizeof(int));\n        for(int j=0;j<sizes[i];j++) scanf("%d",&arrays[i][j]);\n    }\n    int left,right;\n    smallestRange(arrays,sizes,k,&left,&right);\n    printf("%d %d",left,right);\n    for(int i=0;i<k;i++) free(arrays[i]);\n    free(arrays);\n    free(sizes);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\npair<int,int> smallestRange(vector<vector<int>>& arrays){\n    return {0,0};\n}\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int k;\n    cin>>k;\n    vector<vector<int>> arrays(k);\n    for(int i=0;i<k;i++){\n        int n;\n        cin>>n;\n        arrays[i].resize(n);\n        for(int j=0;j<n;j++) cin>>arrays[i][j];\n    }\n    pair<int,int> ans=smallestRange(arrays);\n    cout<<ans.first<<" "<<ans.second;\n    return 0;\n}'
  }
},{
  id: 'mksl-h3',
  title: 'External Merge of K Sorted Files',
  difficulty: 'Hard',
  description: 'You are given K sorted files represented as sorted arrays. Since the files are too large to fit entirely into memory, merge them efficiently using a Min Heap (Priority Queue). Return the merged sorted sequence.',
  constraints: [
    '1 <= K <= 100',
    '1 <= Length of each file <= 100',
    '-10^4 <= file element <= 10^4',
    'Each file is individually sorted in non-decreasing order.'
  ],
  examples: [
    {
      input: 'File1 = 1 4 7\nFile2 = 2 5 8\nFile3 = 3 6 9',
      output: '1 2 3 4 5 6 7 8 9',
      explanation: 'Treat each file as a sorted stream. Maintain one current element from every file in a Min Heap and repeatedly extract the smallest element until all files are exhausted.'
    },
    {
      input: 'File1 = 2 6 10\nFile2 = 1 3 8\nFile3 = 4 5 7 9',
      output: '1 2 3 4 5 6 7 8 9 10',
      explanation: 'The Min Heap always stores the smallest unread element from every file, enabling efficient external merging.'
    }
  ],
  testCases: [
    {
      input: '3\n3\n1 4 7\n3\n2 5 8\n3\n3 6 9',
      expectedOutput: '1 2 3 4 5 6 7 8 9',
      hidden: false
    },
    {
      input: '3\n3\n2 6 10\n3\n1 3 8\n4\n4 5 7 9',
      expectedOutput: '1 2 3 4 5 6 7 8 9 10',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def external_merge(files):\n    pass\n\nk=int(input())\nfiles=[]\nfor _ in range(k):\n    n=int(input())\n    files.append(list(map(int,input().split())) if n>0 else [])\nresult=external_merge(files)\nprint(*result)',
    java: 'import java.util.*;\npublic class Solution {\n    public static List<Integer> externalMerge(List<int[]> files){\n        return new ArrayList<>();\n    }\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        int k=sc.nextInt();\n        List<int[]> files=new ArrayList<>();\n        for(int i=0;i<k;i++){\n            int n=sc.nextInt();\n            int[] arr=new int[n];\n            for(int j=0;j<n;j++) arr[j]=sc.nextInt();\n            files.add(arr);\n        }\n        List<Integer> ans=externalMerge(files);\n        for(int i=0;i<ans.size();i++){\n            if(i>0) System.out.print(" ");\n            System.out.print(ans.get(i));\n        }\n    }\n}',
    c: '#include <stdio.h>\n#include <stdlib.h>\nint* externalMerge(int** files,int* sizes,int k,int* returnSize){\n    *returnSize=0;\n    return NULL;\n}\nint main(){\n    int k;\n    scanf("%d",&k);\n    int** files=(int**)malloc(k*sizeof(int*));\n    int* sizes=(int*)malloc(k*sizeof(int));\n    for(int i=0;i<k;i++){\n        scanf("%d",&sizes[i]);\n        files[i]=(int*)malloc((sizes[i]>0?sizes[i]:1)*sizeof(int));\n        for(int j=0;j<sizes[i];j++) scanf("%d",&files[i][j]);\n    }\n    int size;\n    int* ans=externalMerge(files,sizes,k,&size);\n    for(int i=0;i<size;i++){\n        if(i) printf(" ");\n        printf("%d",ans[i]);\n    }\n    for(int i=0;i<k;i++) free(files[i]);\n    free(files);\n    free(sizes);\n    free(ans);\n    return 0;\n}',
    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> externalMerge(vector<vector<int>>& files){\n    return {};\n}\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int k;\n    cin>>k;\n    vector<vector<int>> files(k);\n    for(int i=0;i<k;i++){\n        int n;\n        cin>>n;\n        files[i].resize(n);\n        for(int j=0;j<n;j++) cin>>files[i][j];\n    }\n    vector<int> ans=externalMerge(files);\n    for(int i=0;i<ans.size();i++){\n        if(i) cout<<" ";\n        cout<<ans[i];\n    }\n    return 0;\n}'
  }
}
];