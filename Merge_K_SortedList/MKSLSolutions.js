export const MKSLSolutions={
    'mksl-e1': {
  python: `def merge_two_arrays(arr1, arr2):
    i = j = 0
    result = []
    while i < len(arr1) and j < len(arr2):
        if arr1[i] <= arr2[j]:
            result.append(arr1[i])
            i += 1
        else:
            result.append(arr2[j])
            j += 1
    while i < len(arr1):
        result.append(arr1[i])
        i += 1
    while j < len(arr2):
        result.append(arr2[j])
        j += 1
    return result
n = int(input())
arr1 = list(map(int, input().split())) if n > 0 else []
m = int(input())
arr2 = list(map(int, input().split())) if m > 0 else []
print(*merge_two_arrays(arr1, arr2))`,
  java: `import java.util.*;
public class Main {
    public static List<Integer> mergeTwoArrays(int[] arr1, int[] arr2) {
        List<Integer> result = new ArrayList<>();
        int i = 0, j = 0;
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] <= arr2[j]) {
                result.add(arr1[i++]);
            } else {
                result.add(arr2[j++]);
            }
        }
        while (i < arr1.length) result.add(arr1[i++]);
        while (j < arr2.length) result.add(arr2[j++]);
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr1 = new int[n];
        for (int i = 0; i < n; i++) arr1[i] = sc.nextInt();
        int m = sc.nextInt();
        int[] arr2 = new int[m];
        for (int i = 0; i < m; i++) arr2[i] = sc.nextInt();
        List<Integer> ans = mergeTwoArrays(arr1, arr2);
        for (int i = 0; i < ans.size(); i++) {
            if (i > 0) System.out.print(" ");
            System.out.print(ans.get(i));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
int* mergeTwoArrays(int* arr1, int n, int* arr2, int m, int* returnSize) {
    *returnSize = n + m;
    int* result = (int*)malloc((*returnSize) * sizeof(int));
    int i = 0, j = 0, k = 0;
    while (i < n && j < m) {
        if (arr1[i] <= arr2[j])
            result[k++] = arr1[i++];
        else
            result[k++] = arr2[j++];
    }
    while (i < n) result[k++] = arr1[i++];
    while (j < m) result[k++] = arr2[j++];
    return result;
}
int main() {
    int n;
    scanf("%d", &n);
    int* arr1 = (int*)malloc((n > 0 ? n : 1) * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr1[i]);
    int m;
    scanf("%d", &m);
    int* arr2 = (int*)malloc((m > 0 ? m : 1) * sizeof(int));
    for (int i = 0; i < m; i++) scanf("%d", &arr2[i]);
    int size;
    int* ans = mergeTwoArrays(arr1, n, arr2, m, &size);
    for (int i = 0; i < size; i++) {
        if (i) printf(" ");
        printf("%d", ans[i]);
    }
    free(arr1);
    free(arr2);
    free(ans);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
using namespace std;
vector<int> mergeTwoArrays(vector<int>& arr1, vector<int>& arr2) {
    vector<int> result;
    int i = 0, j = 0;
    while (i < arr1.size() && j < arr2.size()) {
        if (arr1[i] <= arr2[j])
            result.push_back(arr1[i++]);
        else
            result.push_back(arr2[j++]);
    }
    while (i < arr1.size()) result.push_back(arr1[i++]);
    while (j < arr2.size()) result.push_back(arr2[j++]);
    return result;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin >> n;
    vector<int> arr1(n);
    for (int i = 0; i < n; i++) cin >> arr1[i];
    int m;
    cin >> m;
    vector<int> arr2(m);
    for (int i = 0; i < m; i++) cin >> arr2[i];
    vector<int> ans = mergeTwoArrays(arr1, arr2);
    for (int i = 0; i < ans.size(); i++) {
        if (i) cout << " ";
        cout << ans[i];
    }
    return 0;
}`
},'mksl-e2': {
  python: `def merge_three_arrays(arr1, arr2, arr3):
    result = []
    i = j = k = 0
    while i < len(arr1) or j < len(arr2) or k < len(arr3):
        val = None
        if i < len(arr1):
            val = arr1[i]
        if j < len(arr2) and (val is None or arr2[j] < val):
            val = arr2[j]
        if k < len(arr3) and (val is None or arr3[k] < val):
            val = arr3[k]
        result.append(val)
        if i < len(arr1) and arr1[i] == val:
            i += 1
        elif j < len(arr2) and arr2[j] == val:
            j += 1
        else:
            k += 1
    return result

n1 = int(input())
arr1 = list(map(int, input().split())) if n1 > 0 else []
n2 = int(input())
arr2 = list(map(int, input().split())) if n2 > 0 else []
n3 = int(input())
arr3 = list(map(int, input().split())) if n3 > 0 else []
print(*merge_three_arrays(arr1, arr2, arr3))`,
  java: `import java.util.*;
public class Main {
    public static List<Integer> mergeThreeArrays(int[] arr1, int[] arr2, int[] arr3) {
        List<Integer> result = new ArrayList<>();
        int i = 0, j = 0, k = 0;
        while (i < arr1.length || j < arr2.length || k < arr3.length) {
            Integer val = null;
            if (i < arr1.length) val = arr1[i];
            if (j < arr2.length && (val == null || arr2[j] < val)) val = arr2[j];
            if (k < arr3.length && (val == null || arr3[k] < val)) val = arr3[k];
            result.add(val);
            if (i < arr1.length && arr1[i] == val) i++;
            else if (j < arr2.length && arr2[j] == val) j++;
            else k++;
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n1 = sc.nextInt();
        int[] arr1 = new int[n1];
        for (int i = 0; i < n1; i++) arr1[i] = sc.nextInt();
        int n2 = sc.nextInt();
        int[] arr2 = new int[n2];
        for (int i = 0; i < n2; i++) arr2[i] = sc.nextInt();
        int n3 = sc.nextInt();
        int[] arr3 = new int[n3];
        for (int i = 0; i < n3; i++) arr3[i] = sc.nextInt();
        List<Integer> ans = mergeThreeArrays(arr1, arr2, arr3);
        for (int i = 0; i < ans.size(); i++) {
            if (i > 0) System.out.print(" ");
            System.out.print(ans.get(i));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>
int* mergeThreeArrays(int* arr1,int n1,int* arr2,int n2,int* arr3,int n3,int* returnSize){
    *returnSize=n1+n2+n3;
    int* result=(int*)malloc((*returnSize)*sizeof(int));
    int i=0,j=0,k=0,p=0;
    while(i<n1||j<n2||k<n3){
        int val=INT_MAX;
        if(i<n1&&arr1[i]<val) val=arr1[i];
        if(j<n2&&arr2[j]<val) val=arr2[j];
        if(k<n3&&arr3[k]<val) val=arr3[k];
        result[p++]=val;
        if(i<n1&&arr1[i]==val) i++;
        else if(j<n2&&arr2[j]==val) j++;
        else k++;
    }
    return result;
}
int main(){
    int n1,n2,n3;
    scanf("%d",&n1);
    int* arr1=(int*)malloc((n1>0?n1:1)*sizeof(int));
    for(int i=0;i<n1;i++) scanf("%d",&arr1[i]);
    scanf("%d",&n2);
    int* arr2=(int*)malloc((n2>0?n2:1)*sizeof(int));
    for(int i=0;i<n2;i++) scanf("%d",&arr2[i]);
    scanf("%d",&n3);
    int* arr3=(int*)malloc((n3>0?n3:1)*sizeof(int));
    for(int i=0;i<n3;i++) scanf("%d",&arr3[i]);
    int size;
    int* ans=mergeThreeArrays(arr1,n1,arr2,n2,arr3,n3,&size);
    for(int i=0;i<size;i++){
        if(i) printf(" ");
        printf("%d",ans[i]);
    }
    free(arr1);
    free(arr2);
    free(arr3);
    free(ans);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <climits>
using namespace std;
vector<int> mergeThreeArrays(vector<int>& arr1,vector<int>& arr2,vector<int>& arr3){
    vector<int> result;
    int i=0,j=0,k=0;
    while(i<arr1.size()||j<arr2.size()||k<arr3.size()){
        int val=INT_MAX;
        if(i<arr1.size()&&arr1[i]<val) val=arr1[i];
        if(j<arr2.size()&&arr2[j]<val) val=arr2[j];
        if(k<arr3.size()&&arr3[k]<val) val=arr3[k];
        result.push_back(val);
        if(i<arr1.size()&&arr1[i]==val) i++;
        else if(j<arr2.size()&&arr2[j]==val) j++;
        else k++;
    }
    return result;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n1,n2,n3;
    cin>>n1;
    vector<int> arr1(n1);
    for(int i=0;i<n1;i++) cin>>arr1[i];
    cin>>n2;
    vector<int> arr2(n2);
    for(int i=0;i<n2;i++) cin>>arr2[i];
    cin>>n3;
    vector<int> arr3(n3);
    for(int i=0;i<n3;i++) cin>>arr3[i];
    vector<int> ans=mergeThreeArrays(arr1,arr2,arr3);
    for(int i=0;i<ans.size();i++){
        if(i) cout<<" ";
        cout<<ans[i];
    }
    return 0;
}`
},'mksl-e3': {
  python: `def merge_k_arrays(arrays):
    pointers = [0] * len(arrays)
    result = []
    while True:
        min_val = None
        min_idx = -1
        for i in range(len(arrays)):
            if pointers[i] < len(arrays[i]):
                val = arrays[i][pointers[i]]
                if min_val is None or val < min_val:
                    min_val = val
                    min_idx = i
        if min_idx == -1:
            break
        result.append(min_val)
        pointers[min_idx] += 1
    return result
k = int(input())
arrays = []
for _ in range(k):
    n = int(input())
    arrays.append(list(map(int, input().split())) if n > 0 else [])
print(*merge_k_arrays(arrays))`,
  java: `import java.util.*;
public class Main {
    public static List<Integer> mergeKArrays(List<int[]> arrays) {
        List<Integer> result = new ArrayList<>();
        int k = arrays.size();
        int[] ptr = new int[k];
        while (true) {
            int minIndex = -1;
            int minValue = Integer.MAX_VALUE;
            for (int i = 0; i < k; i++) {
                if (ptr[i] < arrays.get(i).length && arrays.get(i)[ptr[i]] < minValue) {
                    minValue = arrays.get(i)[ptr[i]];
                    minIndex = i;
                }
            }
            if (minIndex == -1) break;
            result.add(minValue);
            ptr[minIndex]++;
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int k = sc.nextInt();
        List<int[]> arrays = new ArrayList<>();
        for (int i = 0; i < k; i++) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int j = 0; j < n; j++) arr[j] = sc.nextInt();
            arrays.add(arr);
        }
        List<Integer> ans = mergeKArrays(arrays);
        for (int i = 0; i < ans.size(); i++) {
            if (i > 0) System.out.print(" ");
            System.out.print(ans.get(i));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>
int* mergeKArrays(int** arrays,int* sizes,int k,int* returnSize){
    int total=0;
    for(int i=0;i<k;i++) total+=sizes[i];
    *returnSize=total;
    int* result=(int*)malloc(total*sizeof(int));
    int* ptr=(int*)calloc(k,sizeof(int));
    int idx=0;
    while(1){
        int minIndex=-1;
        int minValue=INT_MAX;
        for(int i=0;i<k;i++){
            if(ptr[i]<sizes[i]&&arrays[i][ptr[i]]<minValue){
                minValue=arrays[i][ptr[i]];
                minIndex=i;
            }
        }
        if(minIndex==-1) break;
        result[idx++]=minValue;
        ptr[minIndex]++;
    }
    free(ptr);
    return result;
}
int main(){
    int k;
    scanf("%d",&k);
    int** arrays=(int**)malloc(k*sizeof(int*));
    int* sizes=(int*)malloc(k*sizeof(int));
    for(int i=0;i<k;i++){
        scanf("%d",&sizes[i]);
        arrays[i]=(int*)malloc((sizes[i]>0?sizes[i]:1)*sizeof(int));
        for(int j=0;j<sizes[i];j++) scanf("%d",&arrays[i][j]);
    }
    int size;
    int* ans=mergeKArrays(arrays,sizes,k,&size);
    for(int i=0;i<size;i++){
        if(i) printf(" ");
        printf("%d",ans[i]);
    }
    for(int i=0;i<k;i++) free(arrays[i]);
    free(arrays);
    free(sizes);
    free(ans);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <climits>
using namespace std;
vector<int> mergeKArrays(vector<vector<int>>& arrays){
    int k=arrays.size();
    vector<int> ptr(k,0);
    vector<int> result;
    while(true){
        int minIndex=-1;
        int minValue=INT_MAX;
        for(int i=0;i<k;i++){
            if(ptr[i]<arrays[i].size()&&arrays[i][ptr[i]]<minValue){
                minValue=arrays[i][ptr[i]];
                minIndex=i;
            }
        }
        if(minIndex==-1) break;
        result.push_back(minValue);
        ptr[minIndex]++;
    }
    return result;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int k;
    cin>>k;
    vector<vector<int>> arrays(k);
    for(int i=0;i<k;i++){
        int n;
        cin>>n;
        arrays[i].resize(n);
        for(int j=0;j<n;j++) cin>>arrays[i][j];
    }
    vector<int> ans=mergeKArrays(arrays);
    for(int i=0;i<ans.size();i++){
        if(i) cout<<" ";
        cout<<ans[i];
    }
    return 0;
}`
},'mksl-m1': {
  python: `import heapq
def merge_k_arrays(arrays):
    heap = []
    for i, arr in enumerate(arrays):
        if arr:
            heapq.heappush(heap, (arr[0], i, 0))
    result = []
    while heap:
        value, row, col = heapq.heappop(heap)
        result.append(value)
        if col + 1 < len(arrays[row]):
            heapq.heappush(heap, (arrays[row][col + 1], row, col + 1))
    return result
k = int(input())
arrays = []
for _ in range(k):
    n = int(input())
    arrays.append(list(map(int, input().split())) if n > 0 else [])
print(*merge_k_arrays(arrays))`,

  java: `import java.util.*;
public class Main {
    static class Node {
        int value, row, col;
        Node(int value, int row, int col) {
            this.value = value;
            this.row = row;
            this.col = col;
        }
    }
    public static List<Integer> mergeKArrays(List<int[]> arrays) {
        PriorityQueue<Node> pq = new PriorityQueue<>((a, b) -> a.value - b.value);
        for (int i = 0; i < arrays.size(); i++) {
            if (arrays.get(i).length > 0) {
                pq.offer(new Node(arrays.get(i)[0], i, 0));
            }
        }
        List<Integer> result = new ArrayList<>();
        while (!pq.isEmpty()) {
            Node cur = pq.poll();
            result.add(cur.value);
            if (cur.col + 1 < arrays.get(cur.row).length) {
                pq.offer(new Node(arrays.get(cur.row)[cur.col + 1], cur.row, cur.col + 1));
            }
        }
        return result;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int k = sc.nextInt();
        List<int[]> arrays = new ArrayList<>();
        for (int i = 0; i < k; i++) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int j = 0; j < n; j++) arr[j] = sc.nextInt();
            arrays.add(arr);
        }
        List<Integer> ans = mergeKArrays(arrays);
        for (int i = 0; i < ans.size(); i++) {
            if (i > 0) System.out.print(" ");
            System.out.print(ans.get(i));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
typedef struct {
    int value,row,col;
} Node;

void swap(Node* a,Node* b){
    Node t=*a;
    *a=*b;
    *b=t;
}
void push(Node* heap,int* size,Node x){
    int i=(*size)++;
    heap[i]=x;
    while(i>0){
        int p=(i-1)/2;
        if(heap[p].value<=heap[i].value) break;
        swap(&heap[p],&heap[i]);
        i=p;
    }
}
Node pop(Node* heap,int* size){
    Node res=heap[0];
    heap[0]=heap[--(*size)];
    int i=0;
    while(1){
        int l=2*i+1,r=2*i+2,s=i;
        if(l<*size&&heap[l].value<heap[s].value) s=l;
        if(r<*size&&heap[r].value<heap[s].value) s=r;
        if(s==i) break;
        swap(&heap[s],&heap[i]);
        i=s;
    }
    return res;
}
int* mergeKArrays(int** arrays,int* sizes,int k,int* returnSize){
    int total=0;
    for(int i=0;i<k;i++) total+=sizes[i];
    *returnSize=total;
    int* result=(int*)malloc(total*sizeof(int));
    Node* heap=(Node*)malloc((total>0?total:1)*sizeof(Node));
    int heapSize=0;
    for(int i=0;i<k;i++){
        if(sizes[i]>0){
            Node x={arrays[i][0],i,0};
            push(heap,&heapSize,x);
        }
    }
    int idx=0;
    while(heapSize){
        Node cur=pop(heap,&heapSize);
        result[idx++]=cur.value;
        if(cur.col+1<sizes[cur.row]){
            Node nxt={arrays[cur.row][cur.col+1],cur.row,cur.col+1};
            push(heap,&heapSize,nxt);
        }
    }
    free(heap);
    return result;
}
int main(){
    int k;
    scanf("%d",&k);
    int** arrays=(int**)malloc(k*sizeof(int*));
    int* sizes=(int*)malloc(k*sizeof(int));
    for(int i=0;i<k;i++){
        scanf("%d",&sizes[i]);
        arrays[i]=(int*)malloc((sizes[i]>0?sizes[i]:1)*sizeof(int));
        for(int j=0;j<sizes[i];j++) scanf("%d",&arrays[i][j]);
    }
    int size;
    int* ans=mergeKArrays(arrays,sizes,k,&size);
    for(int i=0;i<size;i++){
        if(i) printf(" ");
        printf("%d",ans[i]);
    }
    for(int i=0;i<k;i++) free(arrays[i]);
    free(arrays);
    free(sizes);
    free(ans);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

struct Node{
    int value,row,col;
    bool operator<(const Node& other)const{
        return value>other.value;
    }
};

vector<int> mergeKArrays(vector<vector<int>>& arrays){
    priority_queue<Node> pq;
    for(int i=0;i<arrays.size();i++){
        if(!arrays[i].empty()){
            pq.push({arrays[i][0],i,0});
        }
    }
    vector<int> result;
    while(!pq.empty()){
        Node cur=pq.top();
        pq.pop();
        result.push_back(cur.value);
        if(cur.col+1<arrays[cur.row].size()){
            pq.push({arrays[cur.row][cur.col+1],cur.row,cur.col+1});
        }
    }
    return result;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int k;
    cin>>k;
    vector<vector<int>> arrays(k);
    for(int i=0;i<k;i++){
        int n;
        cin>>n;
        arrays[i].resize(n);
        for(int j=0;j<n;j++) cin>>arrays[i][j];
    }
    vector<int> ans=mergeKArrays(arrays);
    for(int i=0;i<ans.size();i++){
        if(i) cout<<" ";
        cout<<ans[i];
    }
    return 0;
}`
},'mksl-m2': {
  python: `import heapq
def merge_k_lists(lists):
    heap = []
    for i, arr in enumerate(lists):
        if arr:
            heapq.heappush(heap, (arr[0], i, 0))
    result = []
    while heap:
        value, row, idx = heapq.heappop(heap)
        result.append(value)
        idx += 1
        if idx < len(lists[row]):
            heapq.heappush(heap, (lists[row][idx], row, idx))
    return result
k = int(input())
lists = []
for _ in range(k):
    n = int(input())
    lists.append(list(map(int, input().split())) if n > 0 else [])
print(*merge_k_lists(lists))`,
  java: `import java.util.*;
public class Main {
    static class Node {
        int value, list, index;
        Node(int value, int list, int index) {
            this.value = value;
            this.list = list;
            this.index = index;
        }
    }
    public static List<Integer> mergeKLists(List<int[]> lists) {
        PriorityQueue<Node> pq = new PriorityQueue<>((a, b) -> Integer.compare(a.value, b.value));
        for (int i = 0; i < lists.size(); i++) {
            if (lists.get(i).length > 0) {
                pq.offer(new Node(lists.get(i)[0], i, 0));
            }
        }
        List<Integer> result = new ArrayList<>();
        while (!pq.isEmpty()) {
            Node cur = pq.poll();
            result.add(cur.value);
            int next = cur.index + 1;
            if (next < lists.get(cur.list).length) {
                pq.offer(new Node(lists.get(cur.list)[next], cur.list, next));
            }
        }
        return result;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int k = sc.nextInt();
        List<int[]> lists = new ArrayList<>();
        for (int i = 0; i < k; i++) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int j = 0; j < n; j++) arr[j] = sc.nextInt();
            lists.add(arr);
        }
        List<Integer> ans = mergeKLists(lists);
        for (int i = 0; i < ans.size(); i++) {
            if (i > 0) System.out.print(" ");
            System.out.print(ans.get(i));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct{
    int value,list,index;
}Node;

void swap(Node* a,Node* b){
    Node t=*a;
    *a=*b;
    *b=t;
}

void push(Node heap[],int* size,Node x){
    int i=(*size)++;
    heap[i]=x;
    while(i){
        int p=(i-1)/2;
        if(heap[p].value<=heap[i].value) break;
        swap(&heap[p],&heap[i]);
        i=p;
    }
}

Node pop(Node heap[],int* size){
    Node res=heap[0];
    heap[0]=heap[--(*size)];
    int i=0;
    while(1){
        int l=2*i+1,r=2*i+2,s=i;
        if(l<*size&&heap[l].value<heap[s].value) s=l;
        if(r<*size&&heap[r].value<heap[s].value) s=r;
        if(s==i) break;
        swap(&heap[s],&heap[i]);
        i=s;
    }
    return res;
}

int* mergeKLists(int** lists,int* sizes,int k,int* returnSize){
    int total=0;
    for(int i=0;i<k;i++) total+=sizes[i];
    *returnSize=total;
    int* result=(int*)malloc(total*sizeof(int));
    Node* heap=(Node*)malloc((total>0?total:1)*sizeof(Node));
    int heapSize=0;
    for(int i=0;i<k;i++){
        if(sizes[i]>0){
            Node t={lists[i][0],i,0};
            push(heap,&heapSize,t);
        }
    }
    int idx=0;
    while(heapSize){
        Node cur=pop(heap,&heapSize);
        result[idx++]=cur.value;
        int next=cur.index+1;
        if(next<sizes[cur.list]){
            Node t={lists[cur.list][next],cur.list,next};
            push(heap,&heapSize,t);
        }
    }
    free(heap);
    return result;
}

int main(){
    int k;
    scanf("%d",&k);
    int** lists=(int**)malloc(k*sizeof(int*));
    int* sizes=(int*)malloc(k*sizeof(int));
    for(int i=0;i<k;i++){
        scanf("%d",&sizes[i]);
        lists[i]=(int*)malloc((sizes[i]>0?sizes[i]:1)*sizeof(int));
        for(int j=0;j<sizes[i];j++) scanf("%d",&lists[i][j]);
    }
    int size;
    int* ans=mergeKLists(lists,sizes,k,&size);
    for(int i=0;i<size;i++){
        if(i) printf(" ");
        printf("%d",ans[i]);
    }
    for(int i=0;i<k;i++) free(lists[i]);
    free(lists);
    free(sizes);
    free(ans);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

struct Node{
    int value,list,index;
    bool operator<(const Node& other)const{
        return value>other.value;
    }
};

vector<int> mergeKLists(vector<vector<int>>& lists){
    priority_queue<Node> pq;
    for(int i=0;i<lists.size();i++){
        if(!lists[i].empty()){
            pq.push({lists[i][0],i,0});
        }
    }
    vector<int> result;
    while(!pq.empty()){
        Node cur=pq.top();
        pq.pop();
        result.push_back(cur.value);
        int next=cur.index+1;
        if(next<lists[cur.list].size()){
            pq.push({lists[cur.list][next],cur.list,next});
        }
    }
    return result;
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int k;
    cin>>k;
    vector<vector<int>> lists(k);
    for(int i=0;i<k;i++){
        int n;
        cin>>n;
        lists[i].resize(n);
        for(int j=0;j<n;j++) cin>>lists[i][j];
    }
    vector<int> ans=mergeKLists(lists);
    for(int i=0;i<ans.size();i++){
        if(i) cout<<" ";
        cout<<ans[i];
    }
    return 0;
}`
},'mksl-m3': {
  python: `import heapq
def kth_smallest(arrays, k):
    heap = []
    for i, arr in enumerate(arrays):
        if arr:
            heapq.heappush(heap, (arr[0], i, 0))
    count = 0
    while heap:
        value, row, col = heapq.heappop(heap)
        count += 1
        if count == k:
            return value
        if col + 1 < len(arrays[row]):
            heapq.heappush(heap, (arrays[row][col + 1], row, col + 1))
    return -1
n = int(input())
arrays = []
for _ in range(n):
    m = int(input())
    arrays.append(list(map(int, input().split())) if m > 0 else [])
k = int(input())
print(kth_smallest(arrays, k))`,
  java: `import java.util.*;
public class Main {
    static class Node {
        int value, row, col;
        Node(int value, int row, int col) {
            this.value = value;
            this.row = row;
            this.col = col;
        }
    }
    public static int kthSmallest(List<int[]> arrays, int k) {
        PriorityQueue<Node> pq = new PriorityQueue<>((a, b) -> Integer.compare(a.value, b.value));
        for (int i = 0; i < arrays.size(); i++) {
            if (arrays.get(i).length > 0) {
                pq.offer(new Node(arrays.get(i)[0], i, 0));
            }
        }
        int count = 0;
        while (!pq.isEmpty()) {
            Node cur = pq.poll();
            count++;
            if (count == k) return cur.value;
            if (cur.col + 1 < arrays.get(cur.row).length) {
                pq.offer(new Node(arrays.get(cur.row)[cur.col + 1], cur.row, cur.col + 1));
            }
        }
        return -1;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        List<int[]> arrays = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            int m = sc.nextInt();
            int[] arr = new int[m];
            for (int j = 0; j < m; j++) arr[j] = sc.nextInt();
            arrays.add(arr);
        }
        int k = sc.nextInt();
        System.out.print(kthSmallest(arrays, k));
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
typedef struct{
    int value,row,col;
}Node;
void swap(Node* a,Node* b){
    Node t=*a;
    *a=*b;
    *b=t;
}
void push(Node heap[],int* size,Node x){
    int i=(*size)++;
    heap[i]=x;
    while(i){
        int p=(i-1)/2;
        if(heap[p].value<=heap[i].value) break;
        swap(&heap[p],&heap[i]);
        i=p;
    }
}
Node pop(Node heap[],int* size){
    Node res=heap[0];
    heap[0]=heap[--(*size)];
    int i=0;
    while(1){
        int l=2*i+1,r=2*i+2,s=i;
        if(l<*size&&heap[l].value<heap[s].value) s=l;
        if(r<*size&&heap[r].value<heap[s].value) s=r;
        if(s==i) break;
        swap(&heap[s],&heap[i]);
        i=s;
    }
    return res;
}

int kthSmallest(int** arrays,int* sizes,int n,int k){
    Node* heap=(Node*)malloc((n>0?n:1)*sizeof(Node));
    int heapSize=0;
    for(int i=0;i<n;i++){
        if(sizes[i]>0){
            Node t={arrays[i][0],i,0};
            push(heap,&heapSize,t);
        }
    }
    int count=0;
    while(heapSize){
        Node cur=pop(heap,&heapSize);
        count++;
        if(count==k){
            free(heap);
            return cur.value;
        }
        if(cur.col+1<sizes[cur.row]){
            Node t={arrays[cur.row][cur.col+1],cur.row,cur.col+1};
            push(heap,&heapSize,t);
        }
    }
    free(heap);
    return -1;
}

int main(){
    int n;
    scanf("%d",&n);
    int** arrays=(int**)malloc(n*sizeof(int*));
    int* sizes=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++){
        scanf("%d",&sizes[i]);
        arrays[i]=(int*)malloc((sizes[i]>0?sizes[i]:1)*sizeof(int));
        for(int j=0;j<sizes[i];j++) scanf("%d",&arrays[i][j]);
    }
    int k;
    scanf("%d",&k);
    printf("%d",kthSmallest(arrays,sizes,n,k));
    for(int i=0;i<n;i++) free(arrays[i]);
    free(arrays);
    free(sizes);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

struct Node{
    int value,row,col;
    bool operator<(const Node& other)const{
        return value>other.value;
    }
};

int kthSmallest(vector<vector<int>>& arrays,int k){
    priority_queue<Node> pq;
    for(int i=0;i<arrays.size();i++){
        if(!arrays[i].empty()){
            pq.push({arrays[i][0],i,0});
        }
    }
    int count=0;
    while(!pq.empty()){
        Node cur=pq.top();
        pq.pop();
        count++;
        if(count==k) return cur.value;
        if(cur.col+1<arrays[cur.row].size()){
            pq.push({arrays[cur.row][cur.col+1],cur.row,cur.col+1});
        }
    }
    return -1;
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin>>n;
    vector<vector<int>> arrays(n);
    for(int i=0;i<n;i++){
        int m;
        cin>>m;
        arrays[i].resize(m);
        for(int j=0;j<m;j++) cin>>arrays[i][j];
    }
    int k;
    cin>>k;
    cout<<kthSmallest(arrays,k);
    return 0;
}`
},'mksl-h1': {
  python: `import heapq
def merge_unique(arrays):
    heap = []
    for i, arr in enumerate(arrays):
        if arr:
            heapq.heappush(heap, (arr[0], i, 0))
    result = []
    last = None
    while heap:
        value, row, col = heapq.heappop(heap)
        if last != value:
            result.append(value)
            last = value
        if col + 1 < len(arrays[row]):
            heapq.heappush(heap, (arrays[row][col + 1], row, col + 1))
    return result

k = int(input())
arrays = []
for _ in range(k):
    n = int(input())
    arrays.append(list(map(int, input().split())) if n > 0 else [])
print(*merge_unique(arrays))`,
  java: `import java.util.*;
public class Main {
    static class Node {
        int value, row, col;
        Node(int value, int row, int col) {
            this.value = value;
            this.row = row;
            this.col = col;
        }
    }
    public static List<Integer> mergeUnique(List<int[]> arrays) {
        PriorityQueue<Node> pq = new PriorityQueue<>((a, b) -> Integer.compare(a.value, b.value));
        for (int i = 0; i < arrays.size(); i++) {
            if (arrays.get(i).length > 0) {
                pq.offer(new Node(arrays.get(i)[0], i, 0));
            }
        }
        List<Integer> result = new ArrayList<>();
        Integer last = null;
        while (!pq.isEmpty()) {
            Node cur = pq.poll();
            if (last == null || cur.value != last) {
                result.add(cur.value);
                last = cur.value;
            }
            if (cur.col + 1 < arrays.get(cur.row).length) {
                pq.offer(new Node(arrays.get(cur.row)[cur.col + 1], cur.row, cur.col + 1));
            }
        }
        return result;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int k = sc.nextInt();
        List<int[]> arrays = new ArrayList<>();
        for (int i = 0; i < k; i++) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int j = 0; j < n; j++) arr[j] = sc.nextInt();
            arrays.add(arr);
        }
        List<Integer> ans = mergeUnique(arrays);
        for (int i = 0; i < ans.size(); i++) {
            if (i > 0) System.out.print(" ");
            System.out.print(ans.get(i));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
typedef struct{
    int value,row,col;
}Node;
void swap(Node* a,Node* b){
    Node t=*a;
    *a=*b;
    *b=t;
}
void push(Node heap[],int* size,Node x){
    int i=(*size)++;
    heap[i]=x;
    while(i){
        int p=(i-1)/2;
        if(heap[p].value<=heap[i].value) break;
        swap(&heap[p],&heap[i]);
        i=p;
    }
}
Node pop(Node heap[],int* size){
    Node res=heap[0];
    heap[0]=heap[--(*size)];
    int i=0;
    while(1){
        int l=2*i+1,r=2*i+2,s=i;
        if(l<*size&&heap[l].value<heap[s].value) s=l;
        if(r<*size&&heap[r].value<heap[s].value) s=r;
        if(s==i) break;
        swap(&heap[s],&heap[i]);
        i=s;
    }
    return res;
}
int* mergeUnique(int** arrays,int* sizes,int k,int* returnSize){
    int total=0;
    for(int i=0;i<k;i++) total+=sizes[i];
    int* result=(int*)malloc((total>0?total:1)*sizeof(int));
    Node* heap=(Node*)malloc((total>0?total:1)*sizeof(Node));
    int heapSize=0;
    for(int i=0;i<k;i++){
        if(sizes[i]>0){
            Node t={arrays[i][0],i,0};
            push(heap,&heapSize,t);
        }
    }
    int idx=0;
    int hasLast=0,last=0;
    while(heapSize){
        Node cur=pop(heap,&heapSize);
        if(!hasLast||cur.value!=last){
            result[idx++]=cur.value;
            last=cur.value;
            hasLast=1;
        }
        if(cur.col+1<sizes[cur.row]){
            Node t={arrays[cur.row][cur.col+1],cur.row,cur.col+1};
            push(heap,&heapSize,t);
        }
    }
    *returnSize=idx;
    free(heap);
    return result;
}
int main(){
    int k;
    scanf("%d",&k);
    int** arrays=(int**)malloc(k*sizeof(int*));
    int* sizes=(int*)malloc(k*sizeof(int));
    for(int i=0;i<k;i++){
        scanf("%d",&sizes[i]);
        arrays[i]=(int*)malloc((sizes[i]>0?sizes[i]:1)*sizeof(int));
        for(int j=0;j<sizes[i];j++) scanf("%d",&arrays[i][j]);
    }
    int size;
    int* ans=mergeUnique(arrays,sizes,k,&size);
    for(int i=0;i<size;i++){
        if(i) printf(" ");
        printf("%d",ans[i]);
    }
    for(int i=0;i<k;i++) free(arrays[i]);
    free(arrays);
    free(sizes);
    free(ans);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct Node{
    int value,row,col;
    bool operator<(const Node& other)const{
        return value>other.value;
    }
};
vector<int> mergeUnique(vector<vector<int>>& arrays){
    priority_queue<Node> pq;
    for(int i=0;i<arrays.size();i++){
        if(!arrays[i].empty()){
            pq.push({arrays[i][0],i,0});
        }
    }
    vector<int> result;
    bool hasLast=false;
    int last=0;
    while(!pq.empty()){
        Node cur=pq.top();
        pq.pop();
        if(!hasLast||cur.value!=last){
            result.push_back(cur.value);
            last=cur.value;
            hasLast=true;
        }
        if(cur.col+1<arrays[cur.row].size()){
            pq.push({arrays[cur.row][cur.col+1],cur.row,cur.col+1});
        }
    }
    return result;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int k;
    cin>>k;
    vector<vector<int>> arrays(k);
    for(int i=0;i<k;i++){
        int n;
        cin>>n;
        arrays[i].resize(n);
        for(int j=0;j<n;j++) cin>>arrays[i][j];
    }
    vector<int> ans=mergeUnique(arrays);
    for(int i=0;i<ans.size();i++){
        if(i) cout<<" ";
        cout<<ans[i];
    }
    return 0;
}`
},'mksl-h2': {
  python: `import heapq
def smallest_range(arrays):
    heap = []
    current_max = float('-inf')
    for i, arr in enumerate(arrays):
        if not arr:
            return []
        heapq.heappush(heap, (arr[0], i, 0))
        current_max = max(current_max, arr[0])
    best_start, best_end = heap[0][0], current_max
    while True:
        current_min, row, col = heapq.heappop(heap)
        if current_max - current_min < best_end - best_start:
            best_start, best_end = current_min, current_max
        if col + 1 == len(arrays[row]):
            break
        next_val = arrays[row][col + 1]
        heapq.heappush(heap, (next_val, row, col + 1))
        current_max = max(current_max, next_val)
    return [best_start, best_end]

k = int(input())
arrays = []
for _ in range(k):
    n = int(input())
    arrays.append(list(map(int, input().split())) if n > 0 else [])
ans = smallest_range(arrays)
print(*ans)`,
  java: `import java.util.*;
public class Main {
    static class Node {
        int value, row, col;
        Node(int value, int row, int col) {
            this.value = value;
            this.row = row;
            this.col = col;
        }
    }
    public static int[] smallestRange(List<int[]> arrays) {
        PriorityQueue<Node> pq = new PriorityQueue<>((a, b) -> a.value - b.value);
        int currentMax = Integer.MIN_VALUE;
        for (int i = 0; i < arrays.size(); i++) {
            if (arrays.get(i).length == 0) return new int[0];
            pq.offer(new Node(arrays.get(i)[0], i, 0));
            currentMax = Math.max(currentMax, arrays.get(i)[0]);
        }
        int start = pq.peek().value;
        int end = currentMax;
        while (true) {
            Node cur = pq.poll();
            if (currentMax - cur.value < end - start) {
                start = cur.value;
                end = currentMax;
            }
            if (cur.col + 1 == arrays.get(cur.row).length) break;
            int next = arrays.get(cur.row)[cur.col + 1];
            pq.offer(new Node(next, cur.row, cur.col + 1));
            currentMax = Math.max(currentMax, next);
        }
        return new int[]{start, end};
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int k = sc.nextInt();
        List<int[]> arrays = new ArrayList<>();
        for (int i = 0; i < k; i++) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int j = 0; j < n; j++) arr[j] = sc.nextInt();
            arrays.add(arr);
        }
        int[] ans = smallestRange(arrays);
        System.out.print(ans[0] + " " + ans[1]);
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>
typedef struct{
    int value,row,col;
}Node;
void swap(Node* a,Node* b){
    Node t=*a;
    *a=*b;
    *b=t;
}
void push(Node heap[],int* size,Node x){
    int i=(*size)++;
    heap[i]=x;
    while(i){
        int p=(i-1)/2;
        if(heap[p].value<=heap[i].value) break;
        swap(&heap[p],&heap[i]);
        i=p;
    }
}
Node pop(Node heap[],int* size){
    Node res=heap[0];
    heap[0]=heap[--(*size)];
    int i=0;
    while(1){
        int l=2*i+1,r=2*i+2,s=i;
        if(l<*size&&heap[l].value<heap[s].value) s=l;
        if(r<*size&&heap[r].value<heap[s].value) s=r;
        if(s==i) break;
        swap(&heap[s],&heap[i]);
        i=s;
    }
    return res;
}
int main(){
    int k;
    scanf("%d",&k);
    int** arrays=(int**)malloc(k*sizeof(int*));
    int* sizes=(int*)malloc(k*sizeof(int));
    Node* heap=(Node*)malloc(k*sizeof(Node));
    int heapSize=0;
    int currentMax=INT_MIN;
    for(int i=0;i<k;i++){
        scanf("%d",&sizes[i]);
        arrays[i]=(int*)malloc(sizes[i]*sizeof(int));
        for(int j=0;j<sizes[i];j++) scanf("%d",&arrays[i][j]);
        Node t={arrays[i][0],i,0};
        push(heap,&heapSize,t);
        if(arrays[i][0]>currentMax) currentMax=arrays[i][0];
    }
    int bestStart=heap[0].value,bestEnd=currentMax;
    while(heapSize){
        Node cur=pop(heap,&heapSize);
        if(currentMax-cur.value<bestEnd-bestStart){
            bestStart=cur.value;
            bestEnd=currentMax;
        }
        if(cur.col+1==sizes[cur.row]) break;
        Node nxt={arrays[cur.row][cur.col+1],cur.row,cur.col+1};
        push(heap,&heapSize,nxt);
        if(nxt.value>currentMax) currentMax=nxt.value;
    }
    printf("%d %d",bestStart,bestEnd);
    for(int i=0;i<k;i++) free(arrays[i]);
    free(arrays);
    free(sizes);
    free(heap);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <climits>
using namespace std;
struct Node{
    int value,row,col;
    bool operator<(const Node& other)const{
        return value>other.value;
    }
};
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int k;
    cin>>k;
    vector<vector<int>> arrays(k);
    priority_queue<Node> pq;
    int currentMax=INT_MIN;
    for(int i=0;i<k;i++){
        int n;
        cin>>n;
        arrays[i].resize(n);
        for(int j=0;j<n;j++) cin>>arrays[i][j];
        pq.push({arrays[i][0],i,0});
        currentMax=max(currentMax,arrays[i][0]);
    }
    int bestStart=pq.top().value,bestEnd=currentMax;
    while(true){
        Node cur=pq.top();
        pq.pop();
        if(currentMax-cur.value<bestEnd-bestStart){
            bestStart=cur.value;
            bestEnd=currentMax;
        }
        if(cur.col+1==arrays[cur.row].size()) break;
        int next=arrays[cur.row][cur.col+1];
        pq.push({next,cur.row,cur.col+1});
        currentMax=max(currentMax,next);
    }
    cout<<bestStart<<" "<<bestEnd;
    return 0;
}`
},'mksl-h3': {
  python: `import heapq
def external_merge(files):
    heap = []
    for i, arr in enumerate(files):
        if arr:
            heapq.heappush(heap, (arr[0], i, 0))
    result = []
    while heap:
        value, file_idx, pos = heapq.heappop(heap)
        result.append(value)
        if pos + 1 < len(files[file_idx]):
            heapq.heappush(heap, (files[file_idx][pos + 1], file_idx, pos + 1))
    return result
k = int(input())
files = []
for _ in range(k):
    n = int(input())
    files.append(list(map(int, input().split())) if n > 0 else [])
ans = external_merge(files)
print(*ans)`,
  java: `import java.util.*;
public class Main {
    static class Node {
        int value, file, index;
        Node(int value, int file, int index) {
            this.value = value;
            this.file = file;
            this.index = index;
        }
    }
    public static List<Integer> externalMerge(List<int[]> files) {
        PriorityQueue<Node> pq = new PriorityQueue<>((a, b) -> Integer.compare(a.value, b.value));
        for (int i = 0; i < files.size(); i++) {
            if (files.get(i).length > 0) {
                pq.offer(new Node(files.get(i)[0], i, 0));
            }
        }
        List<Integer> result = new ArrayList<>();
        while (!pq.isEmpty()) {
            Node cur = pq.poll();
            result.add(cur.value);
            if (cur.index + 1 < files.get(cur.file).length) {
                pq.offer(new Node(files.get(cur.file)[cur.index + 1], cur.file, cur.index + 1));
            }
        }
        return result;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int k = sc.nextInt();
        List<int[]> files = new ArrayList<>();
        for (int i = 0; i < k; i++) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int j = 0; j < n; j++) arr[j] = sc.nextInt();
            files.add(arr);
        }
        List<Integer> ans = externalMerge(files);
        for (int i = 0; i < ans.size(); i++) {
            if (i > 0) System.out.print(" ");
            System.out.print(ans.get(i));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
typedef struct{
    int value,file,index;
}Node;
void swap(Node* a,Node* b){
    Node t=*a;
    *a=*b;
    *b=t;
}
void push(Node heap[],int* size,Node x){
    int i=(*size)++;
    heap[i]=x;
    while(i){
        int p=(i-1)/2;
        if(heap[p].value<=heap[i].value) break;
        swap(&heap[p],&heap[i]);
        i=p;
    }
}
Node pop(Node heap[],int* size){
    Node res=heap[0];
    heap[0]=heap[--(*size)];
    int i=0;
    while(1){
        int l=2*i+1,r=2*i+2,s=i;
        if(l<*size&&heap[l].value<heap[s].value) s=l;
        if(r<*size&&heap[r].value<heap[s].value) s=r;
        if(s==i) break;
        swap(&heap[s],&heap[i]);
        i=s;
    }
    return res;
}
int* externalMerge(int** files,int* sizes,int k,int* returnSize){
    int total=0;
    for(int i=0;i<k;i++) total+=sizes[i];
    *returnSize=total;
    int* result=(int*)malloc((total>0?total:1)*sizeof(int));
    Node* heap=(Node*)malloc((k>0?k:1)*sizeof(Node));
    int heapSize=0;
    for(int i=0;i<k;i++){
        if(sizes[i]>0){
            Node t={files[i][0],i,0};
            push(heap,&heapSize,t);
        }
    }
    int idx=0;
    while(heapSize){
        Node cur=pop(heap,&heapSize);
        result[idx++]=cur.value;
        if(cur.index+1<sizes[cur.file]){
            Node t={files[cur.file][cur.index+1],cur.file,cur.index+1};
            push(heap,&heapSize,t);
        }
    }
    free(heap);
    return result;
}
int main(){
    int k;
    scanf("%d",&k);
    int** files=(int**)malloc(k*sizeof(int*));
    int* sizes=(int*)malloc(k*sizeof(int));
    for(int i=0;i<k;i++){
        scanf("%d",&sizes[i]);
        files[i]=(int*)malloc((sizes[i]>0?sizes[i]:1)*sizeof(int));
        for(int j=0;j<sizes[i];j++) scanf("%d",&files[i][j]);
    }
    int size;
    int* ans=externalMerge(files,sizes,k,&size);
    for(int i=0;i<size;i++){
        if(i) printf(" ");
        printf("%d",ans[i]);
    }
    for(int i=0;i<k;i++) free(files[i]);
    free(files);
    free(sizes);
    free(ans);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct Node{
    int value,file,index;
    bool operator<(const Node& other)const{
        return value>other.value;
    }
};
vector<int> externalMerge(vector<vector<int>>& files){
    priority_queue<Node> pq;
    for(int i=0;i<files.size();i++){
        if(!files[i].empty()){
            pq.push({files[i][0],i,0});
        }
    }
    vector<int> result;
    while(!pq.empty()){
        Node cur=pq.top();
        pq.pop();
        result.push_back(cur.value);
        if(cur.index+1<files[cur.file].size()){
            pq.push({files[cur.file][cur.index+1],cur.file,cur.index+1});
        }
    }
    return result;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int k;
    cin>>k;
    vector<vector<int>> files(k);
    for(int i=0;i<k;i++){
        int n;
        cin>>n;
        files[i].resize(n);
        for(int j=0;j<n;j++) cin>>files[i][j];
    }
    vector<int> ans=externalMerge(files);
    for(int i=0;i<ans.size();i++){
        if(i) cout<<" ";
        cout<<ans[i];
    }
    return 0;
}`
}
};

