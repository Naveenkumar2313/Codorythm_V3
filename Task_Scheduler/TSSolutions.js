export const heapSolutions = {
  'hp-e1': {
    python: `import heapq
def largest_element(nums):
    heap = [-x for x in nums]
    heapq.heapify(heap)
    return -heapq.heappop(heap)
n = int(input())
nums = list(map(int, input().split()))
print(largest_element(nums))`,
    java: `import java.util.*;
public class Main {
    public static int largestElement(int[] nums) {
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        for (int num : nums) {
            pq.offer(num);
        }
        return pq.poll();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            System.out.println(largestElement(nums));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
void swap(int* a, int* b) {
    int t = *a;
    *a = *b;
    *b = t;
}
void heapify(int heap[], int n, int i) {
    int largest = i;
    int l = 2 * i + 1;
    int r = 2 * i + 2;
    if (l < n && heap[l] > heap[largest]) largest = l;
    if (r < n && heap[r] > heap[largest]) largest = r;
    if (largest != i) {
        swap(&heap[i], &heap[largest]);
        heapify(heap, n, largest);
    }
}
int largestElement(int* nums, int numsSize) {
    for (int i = numsSize / 2 - 1; i >= 0; i--) {
        heapify(nums, numsSize, i);
    }
    return nums[0];
}
int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    printf("%d\n", largestElement(nums, n));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
int largestElement(vector<int>& nums) {
    priority_queue<int> pq;
    for (int num : nums) {
        pq.push(num);
    }
    return pq.top();
}
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }
        cout << largestElement(nums) << "\n";
    }
    return 0;
}`
  },'hp-e2': {
  python: `import heapq
def kth_largest(nums, k):
    heap = [-x for x in nums]
    heapq.heapify(heap)
    ans = 0
    for _ in range(k):
        ans = -heapq.heappop(heap)
    return ans
n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(kth_largest(nums, k))`,
  java: `import java.util.*;
public class Main {
    public static int kthLargest(int[] nums, int k) {
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        for (int num : nums) {
            pq.offer(num);
        }
        while (--k > 0) {
            pq.poll();
        }
        return pq.poll();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            int k = sc.nextInt();
            System.out.println(kthLargest(nums, k));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
void swap(int* a,int* b){
    int t=*a;
    *a=*b;
    *b=t;
}
void heapify(int heap[],int n,int i){
    int largest=i;
    int l=2*i+1;
    int r=2*i+2;
    if(l<n&&heap[l]>heap[largest]) largest=l;
    if(r<n&&heap[r]>heap[largest]) largest=r;
    if(largest!=i){
        swap(&heap[i],&heap[largest]);
        heapify(heap,n,largest);
    }
}
void buildHeap(int heap[],int n){
    for(int i=n/2-1;i>=0;i--) heapify(heap,n,i);
}
int extractMax(int heap[],int* size){
    int mx=heap[0];
    heap[0]=heap[*size-1];
    (*size)--;
    heapify(heap,*size,0);
    return mx;
}
int kthLargest(int* nums,int numsSize,int k){
    buildHeap(nums,numsSize);
    int size=numsSize;
    int ans=0;
    while(k--){
        ans=extractMax(nums,&size);
    }
    return ans;
}
int main(){
    int n;
    if(scanf("%d",&n)!=1) return 0;
    int* nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++){
        if(scanf("%d",&nums[i])!=1) return 0;
    }
    int k;
    if(scanf("%d",&k)!=1) return 0;
    printf("%d\n",kthLargest(nums,n,k));
    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
int kthLargest(vector<int>& nums,int k){
    priority_queue<int> pq;
    for(int num:nums){
        pq.push(num);
    }
    while(--k){
        pq.pop();
    }
    return pq.top();
}
int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if(cin>>n){
        vector<int> nums(n);
        for(int i=0;i<n;i++){
            cin>>nums[i];
        }
        int k;
        cin>>k;
        cout<<kthLargest(nums,k)<<"\n";
    }
    return 0;
}`
},'hp-e3': {
  python: `from collections import Counter
import heapq
def top_k_frequent(nums,k):
    freq=Counter(nums)
    heap=[(-v,x) for x,v in freq.items()]
    heapq.heapify(heap)
    ans=[]
    while k:
        ans.append(heapq.heappop(heap)[1])
        k-=1
    return ans
n=int(input())
nums=list(map(int,input().split()))
k=int(input())
print(*top_k_frequent(nums,k))`,
  java: `import java.util.*;
public class Main {
    public static List<Integer> topKFrequent(int[] nums,int k){
        Map<Integer,Integer> map=new HashMap<>();
        for(int num:nums){
            map.put(num,map.getOrDefault(num,0)+1);
        }
        PriorityQueue<int[]> pq=new PriorityQueue<>((a,b)->b[1]-a[1]);
        for(Map.Entry<Integer,Integer> e:map.entrySet()){
            pq.offer(new int[]{e.getKey(),e.getValue()});
        }
        List<Integer> ans=new ArrayList<>();
        while(k-->0){
            ans.add(pq.poll()[0]);
        }
        return ans;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        if(sc.hasNextInt()){
            int n=sc.nextInt();
            int[] nums=new int[n];
            for(int i=0;i<n;i++) nums[i]=sc.nextInt();
            int k=sc.nextInt();
            List<Integer> ans=topKFrequent(nums,k);
            for(int i=0;i<ans.size();i++){
                System.out.print(ans.get(i));
                if(i+1<ans.size()) System.out.print(" ");
            }
            System.out.println();
        }
    }
},`,
  c: `#include <stdio.h>
#include <stdlib.h>
typedef struct{
    int num,freq;
}Node;
int cmp(const void *a,const void *b){
    return ((Node*)b)->freq-((Node*)a)->freq;
}
int* topKFrequent(int* nums,int numsSize,int k,int* returnSize){
    Node arr[10005];
    int m=0;
    for(int i=0;i<numsSize;i++){
        int j;
        for(j=0;j<m;j++){
            if(arr[j].num==nums[i]){
                arr[j].freq++;
                break;
            }
        }
        if(j==m){
            arr[m].num=nums[i];
            arr[m].freq=1;
            m++;
        }
    }
    qsort(arr,m,sizeof(Node),cmp);
    int* ans=(int*)malloc(k*sizeof(int));
    for(int i=0;i<k;i++) ans[i]=arr[i].num;
    *returnSize=k;
    return ans;
}
int main(){
    int n;
    if(scanf("%d",&n)!=1) return 0;
    int* nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    int k;
    scanf("%d",&k);
    int returnSize;
    int* ans=topKFrequent(nums,n,k,&returnSize);
    for(int i=0;i<returnSize;i++){
        printf("%d",ans[i]);
        if(i+1<returnSize) printf(" ");
    }
    printf("\n");
    free(ans);
    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <queue>
using namespace std;
vector<int> topKFrequent(vector<int>& nums,int k){
    unordered_map<int,int> freq;
    for(int num:nums){
        freq[num]++;
    }
    priority_queue<pair<int,int>> pq;
    for(auto &p:freq){
        pq.push({p.second,p.first});
    }
    vector<int> ans;
    while(k--){
        ans.push_back(pq.top().second);
        pq.pop();
    }
    return ans;
}
int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if(cin>>n){
        vector<int> nums(n);
        for(int i=0;i<n;i++) cin>>nums[i];
        int k;
        cin>>k;
        vector<int> ans=topKFrequent(nums,k);
        for(int i=0;i<ans.size();i++){
            cout<<ans[i];
            if(i+1<ans.size()) cout<<" ";
        }
        cout<<"\n";
    }
    return 0;
}`
},'hp-e4': {
  python: `import heapq
def connect_ropes(ropes):
    heapq.heapify(ropes)
    cost=0
    while len(ropes)>1:
        a=heapq.heappop(ropes)
        b=heapq.heappop(ropes)
        s=a+b
        cost+=s
        heapq.heappush(ropes,s)
    return cost
n=int(input())
ropes=list(map(int,input().split()))
print(connect_ropes(ropes))`,
  java: `import java.util.*;
public class Main{
    public static int connectRopes(int[] ropes){
        PriorityQueue<Integer> pq=new PriorityQueue<>();
        for(int x:ropes) pq.offer(x);
        int cost=0;
        while(pq.size()>1){
            int a=pq.poll();
            int b=pq.poll();
            int s=a+b;
            cost+=s;
            pq.offer(s);
        }
        return cost;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        if(sc.hasNextInt()){
            int n=sc.nextInt();
            int[] ropes=new int[n];
            for(int i=0;i<n;i++) ropes[i]=sc.nextInt();
            System.out.println(connectRopes(ropes));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
void swap(int*a,int*b){
    int t=*a;*a=*b;*b=t;
}
void heapifyDown(int h[],int n,int i){
    while(1){
        int s=i,l=2*i+1,r=2*i+2;
        if(l<n&&h[l]<h[s]) s=l;
        if(r<n&&h[r]<h[s]) s=r;
        if(s==i) break;
        swap(&h[i],&h[s]);
        i=s;
    }
}
void heapifyUp(int h[],int i){
    while(i>0){
        int p=(i-1)/2;
        if(h[p]<=h[i]) break;
        swap(&h[p],&h[i]);
        i=p;
    }
}
int pop(int h[],int*sz){
    int x=h[0];
    h[0]=h[--(*sz)];
    heapifyDown(h,*sz,0);
    return x;
}
void push(int h[],int*sz,int x){
    h[(*sz)++]=x;
    heapifyUp(h,*sz-1);
}
int connectRopes(int* ropes,int n){
    for(int i=n/2-1;i>=0;i--) heapifyDown(ropes,n,i);
    int sz=n,cost=0;
    while(sz>1){
        int a=pop(ropes,&sz);
        int b=pop(ropes,&sz);
        cost+=a+b;
        push(ropes,&sz,a+b);
    }
    return cost;
}
int main(){
    int n;
    scanf("%d",&n);
    int* ropes=(int*)malloc(sizeof(int)*(2*n));
    for(int i=0;i<n;i++) scanf("%d",&ropes[i]);
    printf("%d\n",connectRopes(ropes,n));
    free(ropes);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
int connectRopes(vector<int>& ropes){
    priority_queue<int,vector<int>,greater<int>> pq;
    for(int x:ropes) pq.push(x);
    int cost=0;
    while(pq.size()>1){
        int a=pq.top(); pq.pop();
        int b=pq.top(); pq.pop();
        cost+=a+b;
        pq.push(a+b);
    }
    return cost;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if(cin>>n){
        vector<int> ropes(n);
        for(int i=0;i<n;i++) cin>>ropes[i];
        cout<<connectRopes(ropes)<<"\n";
    }
    return 0;
}`
},'hp-e5': {
  python: `import heapq
def last_stone_weight(stones):
    heap=[-x for x in stones]
    heapq.heapify(heap)
    while len(heap)>1:
        a=-heapq.heappop(heap)
        b=-heapq.heappop(heap)
        if a!=b:
            heapq.heappush(heap,-(a-b))
    return -heap[0] if heap else 0
n=int(input())
stones=list(map(int,input().split()))
print(last_stone_weight(stones))`,
  java: `import java.util.*;
public class Main{
    public static int lastStoneWeight(int[] stones){
        PriorityQueue<Integer> pq=new PriorityQueue<>(Collections.reverseOrder());
        for(int x:stones) pq.offer(x);
        while(pq.size()>1){
            int a=pq.poll();
            int b=pq.poll();
            if(a!=b) pq.offer(a-b);
        }
        return pq.isEmpty()?0:pq.poll();
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        if(sc.hasNextInt()){
            int n=sc.nextInt();
            int[] stones=new int[n];
            for(int i=0;i<n;i++) stones[i]=sc.nextInt();
            System.out.println(lastStoneWeight(stones));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
void swap(int*a,int*b){
    int t=*a;*a=*b;*b=t;
}
void heapify(int h[],int n,int i){
    while(1){
        int l=2*i+1,r=2*i+2,m=i;
        if(l<n&&h[l]>h[m]) m=l;
        if(r<n&&h[r]>h[m]) m=r;
        if(m==i) break;
        swap(&h[i],&h[m]);
        i=m;
    }
}
void build(int h[],int n){
    for(int i=n/2-1;i>=0;i--) heapify(h,n,i);
}
int pop(int h[],int*sz){
    int x=h[0];
    h[0]=h[--(*sz)];
    heapify(h,*sz,0);
    return x;
}
void push(int h[],int*sz,int x){
    int i=(*sz)++;
    h[i]=x;
    while(i>0){
        int p=(i-1)/2;
        if(h[p]>=h[i]) break;
        swap(&h[p],&h[i]);
        i=p;
    }
}
int lastStoneWeight(int* stones,int n){
    build(stones,n);
    int sz=n;
    while(sz>1){
        int a=pop(stones,&sz);
        int b=pop(stones,&sz);
        if(a!=b) push(stones,&sz,a-b);
    }
    return sz?stones[0]:0;
}
int main(){
    int n;
    scanf("%d",&n);
    int* stones=(int*)malloc(sizeof(int)*(2*n));
    for(int i=0;i<n;i++) scanf("%d",&stones[i]);
    printf("%d\n",lastStoneWeight(stones,n));
    free(stones);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
int lastStoneWeight(vector<int>& stones){
    priority_queue<int> pq;
    for(int x:stones) pq.push(x);
    while(pq.size()>1){
        int a=pq.top(); pq.pop();
        int b=pq.top(); pq.pop();
        if(a!=b) pq.push(a-b);
    }
    return pq.empty()?0:pq.top();
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if(cin>>n){
        vector<int> stones(n);
        for(int i=0;i<n;i++) cin>>stones[i];
        cout<<lastStoneWeight(stones)<<"\n";
    }
    return 0;
}`
},'hp-m1': {
  python: `import heapq
def k_closest(points,k):
    heap=[]
    for x,y in points:
        heapq.heappush(heap,(x*x+y*y,[x,y]))
    ans=[]
    while k:
        ans.append(heapq.heappop(heap)[1])
        k-=1
    return ans
n=int(input())
points=[list(map(int,input().split())) for _ in range(n)]
k=int(input())
ans=k_closest(points,k)
for p in ans:
    print(*p)`,
  java: `import java.util.*;
public class Main{
    public static int[][] kClosest(int[][] points,int k){
        PriorityQueue<int[]> pq=new PriorityQueue<>((a,b)->(a[0]*a[0]+a[1]*a[1])-(b[0]*b[0]+b[1]*b[1]));
        for(int[] p:points) pq.offer(p);
        int[][] ans=new int[k][2];
        for(int i=0;i<k;i++) ans[i]=pq.poll();
        return ans;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        if(sc.hasNextInt()){
            int n=sc.nextInt();
            int[][] points=new int[n][2];
            for(int i=0;i<n;i++){
                points[i][0]=sc.nextInt();
                points[i][1]=sc.nextInt();
            }
            int k=sc.nextInt();
            int[][] ans=kClosest(points,k);
            for(int[] p:ans){
                System.out.println(p[0]+" "+p[1]);
            }
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
typedef struct{
    int x,y,d;
}Node;
int cmp(const void*a,const void*b){
    return ((Node*)a)->d-((Node*)b)->d;
}
int** kClosest(int** points,int pointsSize,int k,int* returnSize){
    Node* arr=(Node*)malloc(pointsSize*sizeof(Node));
    for(int i=0;i<pointsSize;i++){
        arr[i].x=points[i][0];
        arr[i].y=points[i][1];
        arr[i].d=arr[i].x*arr[i].x+arr[i].y*arr[i].y;
    }
    qsort(arr,pointsSize,sizeof(Node),cmp);
    int** ans=(int**)malloc(k*sizeof(int*));
    for(int i=0;i<k;i++){
        ans[i]=(int*)malloc(2*sizeof(int));
        ans[i][0]=arr[i].x;
        ans[i][1]=arr[i].y;
    }
    *returnSize=k;
    free(arr);
    return ans;
}
int main(){
    int n;
    scanf("%d",&n);
    int** points=(int**)malloc(n*sizeof(int*));
    for(int i=0;i<n;i++){
        points[i]=(int*)malloc(2*sizeof(int));
        scanf("%d%d",&points[i][0],&points[i][1]);
    }
    int k;
    scanf("%d",&k);
    int returnSize;
    int** ans=kClosest(points,n,k,&returnSize);
    for(int i=0;i<returnSize;i++) printf("%d %d\n",ans[i][0],ans[i][1]);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
vector<vector<int>> kClosest(vector<vector<int>>& points,int k){
    priority_queue<pair<int,vector<int>>,vector<pair<int,vector<int>>>,greater<pair<int,vector<int>>>> pq;
    for(auto &p:points){
        pq.push({p[0]*p[0]+p[1]*p[1],p});
    }
    vector<vector<int>> ans;
    while(k--){
        ans.push_back(pq.top().second);
        pq.pop();
    }
    return ans;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if(cin>>n){
        vector<vector<int>> points(n,vector<int>(2));
        for(int i=0;i<n;i++) cin>>points[i][0]>>points[i][1];
        int k;
        cin>>k;
        vector<vector<int>> ans=kClosest(points,k);
        for(auto &p:ans) cout<<p[0]<<" "<<p[1]<<"\n";
    }
    return 0;
}`
},'hp-m2': {
  python: `from collections import Counter
import heapq
def reorganize_string(s):
    freq=Counter(s)
    heap=[(-v,c) for c,v in freq.items()]
    heapq.heapify(heap)
    prev=(0,'')
    ans=[]
    while heap:
        f,ch=heapq.heappop(heap)
        ans.append(ch)
        if prev[0]<0:
            heapq.heappush(heap,prev)
        f+=1
        prev=(f,ch)
    res=''.join(ans)
    return res if len(res)==len(s) else ''
s=input().strip()
print(reorganize_string(s))`,
  java: `import java.util.*;
public class Main{
    public static String reorganizeString(String s){
        int[] cnt=new int[26];
        for(char c:s.toCharArray()) cnt[c-'a']++;
        PriorityQueue<int[]> pq=new PriorityQueue<>((a,b)->b[1]-a[1]);
        for(int i=0;i<26;i++) if(cnt[i]>0) pq.offer(new int[]{i,cnt[i]});
        StringBuilder sb=new StringBuilder();
        int[] prev={-1,0};
        while(!pq.isEmpty()){
            int[] cur=pq.poll();
            sb.append((char)(cur[0]+'a'));
            cur[1]--;
            if(prev[1]>0) pq.offer(prev);
            prev=cur;
        }
        return sb.length()==s.length()?sb.toString():"";
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        if(sc.hasNextLine()){
            String s=sc.nextLine();
            System.out.println(reorganizeString(s));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
char* reorganizeString(char* s){
    int cnt[26]={0},n=strlen(s);
    for(int i=0;i<n;i++) cnt[s[i]-'a']++;
    char* ans=(char*)malloc(n+1);
    int idx=0,last=-1;
    while(idx<n){
        int best=-1;
        for(int i=0;i<26;i++){
            if(cnt[i]>0&&i!=last&&(best==-1||cnt[i]>cnt[best])) best=i;
        }
        if(best==-1){
            ans[0]='\0';
            return ans;
        }
        ans[idx++]=best+'a';
        cnt[best]--;
        last=best;
    }
    ans[n]='\0';
    return ans;
}
int main(){
    char s[505];
    if(scanf("%s",s)!=1) return 0;
    printf("%s\n",reorganizeString(s));
    return 0;
}`,
  cpp: `#include <iostream>
#include <string>
#include <queue>
#include <vector>
using namespace std;
string reorganizeString(string s){
    vector<int> cnt(26);
    for(char c:s) cnt[c-'a']++;
    priority_queue<pair<int,char>> pq;
    for(int i=0;i<26;i++) if(cnt[i]) pq.push({cnt[i],char('a'+i)});
    pair<int,char> prev={0,'#'};
    string ans;
    while(!pq.empty()){
        auto cur=pq.top();
        pq.pop();
        ans+=cur.second;
        cur.first--;
        if(prev.first>0) pq.push(prev);
        prev=cur;
    }
    return ans.size()==s.size()?ans:"";
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    string s;
    if(cin>>s){
        cout<<reorganizeString(s)<<"\n";
    }
    return 0;
}`
},'hp-m3': {
  python: `from collections import Counter
import heapq
def frequency_sort(s):
    freq=Counter(s)
    heap=[(-v,c) for c,v in freq.items()]
    heapq.heapify(heap)
    ans=[]
    while heap:
        f,c=heapq.heappop(heap)
        ans.append(c*(-f))
    return ''.join(ans)
s=input().strip()
print(frequency_sort(s))`,
  java: `import java.util.*;
public class Main{
    public static String frequencySort(String s){
        Map<Character,Integer> map=new HashMap<>();
        for(char c:s.toCharArray()) map.put(c,map.getOrDefault(c,0)+1);
        PriorityQueue<Map.Entry<Character,Integer>> pq=new PriorityQueue<>((a,b)->b.getValue()-a.getValue());
        pq.addAll(map.entrySet());
        StringBuilder sb=new StringBuilder();
        while(!pq.isEmpty()){
            Map.Entry<Character,Integer> e=pq.poll();
            for(int i=0;i<e.getValue();i++) sb.append(e.getKey());
        }
        return sb.toString();
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        if(sc.hasNextLine()){
            String s=sc.nextLine();
            System.out.println(frequencySort(s));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef struct{
    char c;
    int f;
}Node;
int cmp(const void*a,const void*b){
    return ((Node*)b)->f-((Node*)a)->f;
}
char* frequencySort(char* s){
    int cnt[256]={0};
    int n=strlen(s);
    for(int i=0;i<n;i++) cnt[(unsigned char)s[i]]++;
    Node arr[256];
    int m=0;
    for(int i=0;i<256;i++){
        if(cnt[i]){
            arr[m].c=i;
            arr[m].f=cnt[i];
            m++;
        }
    }
    qsort(arr,m,sizeof(Node),cmp);
    char* ans=(char*)malloc(n+1);
    int k=0;
    for(int i=0;i<m;i++)
        for(int j=0;j<arr[i].f;j++)
            ans[k++]=arr[i].c;
    ans[k]='\0';
    return ans;
}
int main(){
    char s[500005];
    if(scanf("%s",s)!=1) return 0;
    printf("%s\n",frequencySort(s));
    return 0;
}`,
  cpp: `#include <iostream>
#include <string>
#include <unordered_map>
#include <queue>
using namespace std;
string frequencySort(string s){
    unordered_map<char,int> freq;
    for(char c:s) freq[c]++;
    priority_queue<pair<int,char>> pq;
    for(auto &p:freq) pq.push({p.second,p.first});
    string ans="";
    while(!pq.empty()){
        auto cur=pq.top();
        pq.pop();
        ans.append(cur.first,cur.second);
    }
    return ans;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    string s;
    if(cin>>s){
        cout<<frequencySort(s)<<"\n";
    }
    return 0;
}`
},'hp-m4': {
  python: `from collections import Counter
def least_interval(tasks,n):
    freq=Counter(tasks)
    maxFreq=max(freq.values())
    maxCount=sum(1 for v in freq.values() if v==maxFreq)
    return max(len(tasks),(maxFreq-1)*(n+1)+maxCount)
m=int(input())
tasks=input().split()
n=int(input())
print(least_interval(tasks,n))`,
  java: `import java.util.*;
public class Solution{
    public static int leastInterval(char[] tasks,int n){
        int[] freq=new int[26];
        int maxFreq=0;
        for(char c:tasks){
            freq[c-'A']++;
            maxFreq=Math.max(maxFreq,freq[c-'A']);
        }
        int maxCount=0;
        for(int f:freq){
            if(f==maxFreq) maxCount++;
        }
        return Math.max(tasks.length,(maxFreq-1)*(n+1)+maxCount);
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        if(sc.hasNextInt()){
            int m=sc.nextInt();
            char[] tasks=new char[m];
            for(int i=0;i<m;i++) tasks[i]=sc.next().charAt(0);
            int n=sc.nextInt();
            System.out.println(leastInterval(tasks,n));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
int max(int a,int b){
    return a>b?a:b;
}
int leastInterval(char* tasks,int tasksSize,int n){
    int freq[26]={0};
    int maxFreq=0;
    for(int i=0;i<tasksSize;i++){
        freq[tasks[i]-'A']++;
        if(freq[tasks[i]-'A']>maxFreq) maxFreq=freq[tasks[i]-'A'];
    }
    int maxCount=0;
    for(int i=0;i<26;i++){
        if(freq[i]==maxFreq) maxCount++;
    }
    int ans=(maxFreq-1)*(n+1)+maxCount;
    return max(tasksSize,ans);
}
int main(){
    int m;
    if(scanf("%d",&m)!=1) return 0;
    char* tasks=(char*)malloc(m*sizeof(char));
    for(int i=0;i<m;i++) scanf(" %c",&tasks[i]);
    int n;
    scanf("%d",&n);
    printf("%d\n",leastInterval(tasks,m,n));
    free(tasks);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int leastInterval(vector<char>& tasks,int n){
    vector<int> freq(26,0);
    int maxFreq=0;
    for(char c:tasks){
        freq[c-'A']++;
        maxFreq=max(maxFreq,freq[c-'A']);
    }
    int maxCount=0;
    for(int f:freq){
        if(f==maxFreq) maxCount++;
    }
    return max((int)tasks.size(),(maxFreq-1)*(n+1)+maxCount);
}
int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int m;
    if(cin>>m){
        vector<char> tasks(m);
        for(int i=0;i<m;i++) cin>>tasks[i];
        int n;
        cin>>n;
        cout<<leastInterval(tasks,n)<<"\n";
    }
    return 0;
}`
},'hp-m5': {
  python: `import heapq
def get_order(tasks):
    arr=[(e,p,i) for i,(e,p) in enumerate(tasks)]
    arr.sort()
    res=[]
    heap=[]
    time=0
    i=0
    n=len(arr)
    while i<n or heap:
        if not heap and time<arr[i][0]:
            time=arr[i][0]
        while i<n and arr[i][0]<=time:
            heapq.heappush(heap,(arr[i][1],arr[i][2]))
            i+=1
        p,idx=heapq.heappop(heap)
        time+=p
        res.append(idx)
    return res
n=int(input())
tasks=[list(map(int,input().split())) for _ in range(n)]
print(*get_order(tasks))`,
  java: `import java.util.*;
public class Solution{
    public static int[] getOrder(int[][] tasks){
        int n=tasks.length;
        int[][] arr=new int[n][3];
        for(int i=0;i<n;i++){
            arr[i][0]=tasks[i][0];
            arr[i][1]=tasks[i][1];
            arr[i][2]=i;
        }
        Arrays.sort(arr,(a,b)->a[0]==b[0]?a[2]-b[2]:a[0]-b[0]);
        PriorityQueue<int[]> pq=new PriorityQueue<>((a,b)->a[0]==b[0]?a[1]-b[1]:a[0]-b[0]);
        int[] ans=new int[n];
        int idx=0,i=0;
        long time=0;
        while(i<n||!pq.isEmpty()){
            if(pq.isEmpty()&&time<arr[i][0]) time=arr[i][0];
            while(i<n&&arr[i][0]<=time){
                pq.offer(new int[]{arr[i][1],arr[i][2]});
                i++;
            }
            int[] cur=pq.poll();
            time+=cur[0];
            ans[idx++]=cur[1];
        }
        return ans;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        if(sc.hasNextInt()){
            int n=sc.nextInt();
            int[][] tasks=new int[n][2];
            for(int i=0;i<n;i++){
                tasks[i][0]=sc.nextInt();
                tasks[i][1]=sc.nextInt();
            }
            int[] ans=getOrder(tasks);
            for(int i=0;i<ans.length;i++){
                System.out.print(ans[i]);
                if(i+1<ans.length) System.out.print(" ");
            }
            System.out.println();
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
typedef struct{
    int e,p,idx;
}Task;
typedef struct{
    int p,idx;
}Node;
int cmpTask(const void*a,const void*b){
    Task*x=(Task*)a;
    Task*y=(Task*)b;
    if(x->e!=y->e) return x->e-y->e;
    return x->idx-y->idx;
}
void swap(Node*a,Node*b){
    Node t=*a;*a=*b;*b=t;
}
void up(Node h[],int i){
    while(i>0){
        int p=(i-1)/2;
        if(h[p].p<h[i].p||(h[p].p==h[i].p&&h[p].idx<h[i].idx)) break;
        swap(&h[p],&h[i]);
        i=p;
    }
}
void down(Node h[],int n,int i){
    while(1){
        int s=i,l=2*i+1,r=2*i+2;
        if(l<n&&(h[l].p<h[s].p||(h[l].p==h[s].p&&h[l].idx<h[s].idx))) s=l;
        if(r<n&&(h[r].p<h[s].p||(h[r].p==h[s].p&&h[r].idx<h[s].idx))) s=r;
        if(s==i) break;
        swap(&h[s],&h[i]);
        i=s;
    }
}
int* getOrder(int** tasks,int tasksSize,int* returnSize){
    Task* arr=(Task*)malloc(tasksSize*sizeof(Task));
    for(int i=0;i<tasksSize;i++){
        arr[i].e=tasks[i][0];
        arr[i].p=tasks[i][1];
        arr[i].idx=i;
    }
    qsort(arr,tasksSize,sizeof(Task),cmpTask);
    Node* heap=(Node*)malloc(tasksSize*sizeof(Node));
    int hs=0,i=0;
    long long time=0;
    int* ans=(int*)malloc(tasksSize*sizeof(int));
    int k=0;
    while(i<tasksSize||hs){
        if(!hs&&time<arr[i].e) time=arr[i].e;
        while(i<tasksSize&&arr[i].e<=time){
            heap[hs]=(Node){arr[i].p,arr[i].idx};
            up(heap,hs++);
            i++;
        }
        Node cur=heap[0];
        heap[0]=heap[--hs];
        down(heap,hs,0);
        time+=cur.p;
        ans[k++]=cur.idx;
    }
    *returnSize=k;
    free(arr);
    free(heap);
    return ans;
}
int main(){
    int n;
    if(scanf("%d",&n)!=1) return 0;
    int** tasks=(int**)malloc(n*sizeof(int*));
    for(int i=0;i<n;i++){
        tasks[i]=(int*)malloc(2*sizeof(int));
        scanf("%d%d",&tasks[i][0],&tasks[i][1]);
    }
    int returnSize;
    int* ans=getOrder(tasks,n,&returnSize);
    for(int i=0;i<returnSize;i++){
        printf("%d",ans[i]);
        if(i+1<returnSize) printf(" ");
    }
    printf("\n");
    free(ans);
    for(int i=0;i<n;i++) free(tasks[i]);
    free(tasks);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;
vector<int> getOrder(vector<vector<int>>& tasks){
    vector<vector<int>> arr;
    for(int i=0;i<tasks.size();i++) arr.push_back({tasks[i][0],tasks[i][1],i});
    sort(arr.begin(),arr.end());
    priority_queue<pair<int,int>,vector<pair<int,int>>,greater<pair<int,int>>> pq;
    vector<int> ans;
    long long time=0;
    int i=0,n=arr.size();
    while(i<n||!pq.empty()){
        if(pq.empty()&&time<arr[i][0]) time=arr[i][0];
        while(i<n&&arr[i][0]<=time){
            pq.push({arr[i][1],arr[i][2]});
            i++;
        }
        auto cur=pq.top();
        pq.pop();
        time+=cur.first;
        ans.push_back(cur.second);
    }
    return ans;
}
int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if(cin>>n){
        vector<vector<int>> tasks(n,vector<int>(2));
        for(int i=0;i<n;i++) cin>>tasks[i][0]>>tasks[i][1];
        vector<int> ans=getOrder(tasks);
        for(int i=0;i<ans.size();i++){
            cout<<ans[i];
            if(i+1<ans.size()) cout<<" ";
        }
        cout<<"\n";
    }
    return 0;
}`
},'hp-h1': {
  python: `import heapq
def most_booked(n,meetings):
    meetings.sort()
    available=list(range(n))
    heapq.heapify(available)
    busy=[]
    cnt=[0]*n
    for s,e in meetings:
        while busy and busy[0][0]<=s:
            _,room=heapq.heappop(busy)
            heapq.heappush(available,room)
        if available:
            room=heapq.heappop(available)
            heapq.heappush(busy,(e,room))
            cnt[room]+=1
        else:
            end,room=heapq.heappop(busy)
            heapq.heappush(busy,(end+e-s,room))
            cnt[room]+=1
    ans=0
    for i in range(1,n):
        if cnt[i]>cnt[ans]:
            ans=i
    return ans
n=int(input())
m=int(input())
meetings=[list(map(int,input().split())) for _ in range(m)]
print(most_booked(n,meetings))`,
  java: `import java.util.*;
public class Solution{
    public static int mostBooked(int n,int[][] meetings){
        Arrays.sort(meetings,(a,b)->a[0]-b[0]);
        PriorityQueue<Integer> available=new PriorityQueue<>();
        for(int i=0;i<n;i++) available.offer(i);
        PriorityQueue<long[]> busy=new PriorityQueue<>((a,b)->a[0]==b[0]?Long.compare(a[1],b[1]):Long.compare(a[0],b[0]));
        int[] cnt=new int[n];
        for(int[] meet:meetings){
            int s=meet[0],e=meet[1];
            while(!busy.isEmpty()&&busy.peek()[0]<=s){
                available.offer((int)busy.poll()[1]);
            }
            if(!available.isEmpty()){
                int room=available.poll();
                busy.offer(new long[]{e,room});
                cnt[room]++;
            }else{
                long[] cur=busy.poll();
                busy.offer(new long[]{cur[0]+e-s,cur[1]});
                cnt[(int)cur[1]]++;
            }
        }
        int ans=0;
        for(int i=1;i<n;i++){
            if(cnt[i]>cnt[ans]) ans=i;
        }
        return ans;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        if(sc.hasNextInt()){
            int n=sc.nextInt();
            int m=sc.nextInt();
            int[][] meetings=new int[m][2];
            for(int i=0;i<m;i++){
                meetings[i][0]=sc.nextInt();
                meetings[i][1]=sc.nextInt();
            }
            System.out.println(mostBooked(n,meetings));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
typedef struct{
    long long end;
    int room;
}Busy;
typedef struct{
    int start,end;
}Meet;
int cmp(const void*a,const void*b){
    Meet*x=(Meet*)a;
    Meet*y=(Meet*)b;
    return x->start-y->start;
}
void swapInt(int*a,int*b){
    int t=*a;*a=*b;*b=t;
}
void swapBusy(Busy*a,Busy*b){
    Busy t=*a;*a=*b;*b=t;
}
void upAvail(int h[],int i){
    while(i>0){
        int p=(i-1)/2;
        if(h[p]<=h[i]) break;
        swapInt(&h[p],&h[i]);
        i=p;
    }
}
void downAvail(int h[],int n,int i){
    while(1){
        int s=i,l=2*i+1,r=2*i+2;
        if(l<n&&h[l]<h[s]) s=l;
        if(r<n&&h[r]<h[s]) s=r;
        if(s==i) break;
        swapInt(&h[s],&h[i]);
        i=s;
    }
}
void upBusy(Busy h[],int i){
    while(i>0){
        int p=(i-1)/2;
        if(h[p].end<h[i].end||(h[p].end==h[i].end&&h[p].room<h[i].room)) break;
        swapBusy(&h[p],&h[i]);
        i=p;
    }
}
void downBusy(Busy h[],int n,int i){
    while(1){
        int s=i,l=2*i+1,r=2*i+2;
        if(l<n&&(h[l].end<h[s].end||(h[l].end==h[s].end&&h[l].room<h[s].room))) s=l;
        if(r<n&&(h[r].end<h[s].end||(h[r].end==h[s].end&&h[r].room<h[s].room))) s=r;
        if(s==i) break;
        swapBusy(&h[s],&h[i]);
        i=s;
    }
}
int mostBooked(int n,int** meetings,int meetingsSize){
    Meet* arr=(Meet*)malloc(meetingsSize*sizeof(Meet));
    for(int i=0;i<meetingsSize;i++){
        arr[i].start=meetings[i][0];
        arr[i].end=meetings[i][1];
    }
    qsort(arr,meetingsSize,sizeof(Meet),cmp);
    int* avail=(int*)malloc(n*sizeof(int));
    int as=0;
    for(int i=0;i<n;i++){
        avail[as]=i;
        upAvail(avail,as++);
    }
    Busy* busy=(Busy*)malloc(meetingsSize*sizeof(Busy));
    int bs=0,cnt[105]={0};
    for(int i=0;i<meetingsSize;i++){
        while(bs&&busy[0].end<=arr[i].start){
            avail[as]=busy[0].room;
            upAvail(avail,as++);
            busy[0]=busy[--bs];
            downBusy(busy,bs,0);
        }
        if(as){
            int room=avail[0];
            avail[0]=avail[--as];
            downAvail(avail,as,0);
            busy[bs]=(Busy){arr[i].end,room};
            upBusy(busy,bs++);
            cnt[room]++;
        }else{
            Busy cur=busy[0];
            busy[0]=(Busy){cur.end+arr[i].end-arr[i].start,cur.room};
            downBusy(busy,bs,0);
            cnt[cur.room]++;
        }
    }
    int ans=0;
    for(int i=1;i<n;i++) if(cnt[i]>cnt[ans]) ans=i;
    free(arr);
    free(avail);
    free(busy);
    return ans;
}
int main(){
    int n,m;
    if(scanf("%d",&n)!=1) return 0;
    scanf("%d",&m);
    int** meetings=(int**)malloc(m*sizeof(int*));
    for(int i=0;i<m;i++){
        meetings[i]=(int*)malloc(2*sizeof(int));
        scanf("%d%d",&meetings[i][0],&meetings[i][1]);
    }
    printf("%d\n",mostBooked(n,meetings,m));
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;
int mostBooked(int n,vector<vector<int>>& meetings){
    sort(meetings.begin(),meetings.end());
    priority_queue<int,vector<int>,greater<int>> available;
    for(int i=0;i<n;i++) available.push(i);
    priority_queue<pair<long long,int>,vector<pair<long long,int>>,greater<pair<long long,int>>> busy;
    vector<int> cnt(n);
    for(auto &m:meetings){
        int s=m[0],e=m[1];
        while(!busy.empty()&&busy.top().first<=s){
            available.push(busy.top().second);
            busy.pop();
        }
        if(!available.empty()){
            int room=available.top();
            available.pop();
            busy.push({e,room});
            cnt[room]++;
        }else{
            auto cur=busy.top();
            busy.pop();
            busy.push({cur.first+e-s,cur.second});
            cnt[cur.second]++;
        }
    }
    int ans=0;
    for(int i=1;i<n;i++) if(cnt[i]>cnt[ans]) ans=i;
    return ans;
}
int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n,m;
    if(cin>>n){
        cin>>m;
        vector<vector<int>> meetings(m,vector<int>(2));
        for(int i=0;i<m;i++) cin>>meetings[i][0]>>meetings[i][1];
        cout<<mostBooked(n,meetings)<<"\n";
    }
    return 0;
}`
},'hp-h2': {
  python: `import heapq
def assign_tasks(servers,tasks):
    free=[(w,i) for i,w in enumerate(servers)]
    heapq.heapify(free)
    busy=[]
    ans=[]
    time=0
    for i,t in enumerate(tasks):
        time=max(time,i)
        while busy and busy[0][0]<=time:
            end,w,idx=heapq.heappop(busy)
            heapq.heappush(free,(w,idx))
        if not free:
            time=busy[0][0]
            while busy and busy[0][0]<=time:
                end,w,idx=heapq.heappop(busy)
                heapq.heappush(free,(w,idx))
        w,idx=heapq.heappop(free)
        ans.append(idx)
        heapq.heappush(busy,(time+t,w,idx))
    return ans
k=int(input())
servers=list(map(int,input().split()))
n=int(input())
tasks=list(map(int,input().split()))
print(*assign_tasks(servers,tasks))`,
  java: `import java.util.*;
public class Solution{
    public static int[] assignTasks(int[] servers,int[] tasks){
        PriorityQueue<int[]> free=new PriorityQueue<>((a,b)->a[0]==b[0]?a[1]-b[1]:a[0]-b[0]);
        PriorityQueue<long[]> busy=new PriorityQueue<>((a,b)->a[0]==b[0]?Long.compare(a[2],b[2]):Long.compare(a[0],b[0]));
        for(int i=0;i<servers.length;i++) free.offer(new int[]{servers[i],i});
        int[] ans=new int[tasks.length];
        long time=0;
        for(int i=0;i<tasks.length;i++){
            time=Math.max(time,i);
            while(!busy.isEmpty()&&busy.peek()[0]<=time){
                long[] cur=busy.poll();
                free.offer(new int[]{(int)cur[1],(int)cur[2]});
            }
            if(free.isEmpty()){
                time=busy.peek()[0];
                while(!busy.isEmpty()&&busy.peek()[0]<=time){
                    long[] cur=busy.poll();
                    free.offer(new int[]{(int)cur[1],(int)cur[2]});
                }
            }
            int[] cur=free.poll();
            ans[i]=cur[1];
            busy.offer(new long[]{time+tasks[i],cur[0],cur[1]});
        }
        return ans;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        if(sc.hasNextInt()){
            int k=sc.nextInt();
            int[] servers=new int[k];
            for(int i=0;i<k;i++) servers[i]=sc.nextInt();
            int n=sc.nextInt();
            int[] tasks=new int[n];
            for(int i=0;i<n;i++) tasks[i]=sc.nextInt();
            int[] ans=assignTasks(servers,tasks);
            for(int i=0;i<ans.length;i++){
                System.out.print(ans[i]);
                if(i+1<ans.length) System.out.print(" ");
            }
            System.out.println();
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
typedef struct{long long end;int w,id;}Busy;
typedef struct{int w,id;}Free;
void swapF(Free*a,Free*b){Free t=*a;*a=*b;*b=t;}
void swapB(Busy*a,Busy*b){Busy t=*a;*a=*b;*b=t;}
void upF(Free h[],int i){while(i){int p=(i-1)/2;if(h[p].w<h[i].w||(h[p].w==h[i].w&&h[p].id<h[i].id))break;swapF(&h[p],&h[i]);i=p;}}
void downF(Free h[],int n,int i){while(1){int s=i,l=2*i+1,r=2*i+2;if(l<n&&(h[l].w<h[s].w||(h[l].w==h[s].w&&h[l].id<h[s].id)))s=l;if(r<n&&(h[r].w<h[s].w||(h[r].w==h[s].w&&h[r].id<h[s].id)))s=r;if(s==i)break;swapF(&h[s],&h[i]);i=s;}}
void upB(Busy h[],int i){while(i){int p=(i-1)/2;if(h[p].end<h[i].end||(h[p].end==h[i].end&&h[p].id<h[i].id))break;swapB(&h[p],&h[i]);i=p;}}
void downB(Busy h[],int n,int i){while(1){int s=i,l=2*i+1,r=2*i+2;if(l<n&&(h[l].end<h[s].end||(h[l].end==h[s].end&&h[l].id<h[s].id)))s=l;if(r<n&&(h[r].end<h[s].end||(h[r].end==h[s].end&&h[r].id<h[s].id)))s=r;if(s==i)break;swapB(&h[s],&h[i]);i=s;}}
int* assignTasks(int* servers,int k,int* tasks,int n,int* returnSize){
    Free* free=(Free*)malloc(k*sizeof(Free));
    Busy* busy=(Busy*)malloc((k+n)*sizeof(Busy));
    int fs=0,bs=0;
    for(int i=0;i<k;i++){free[fs]=(Free){servers[i],i};upF(free,fs++);}
    int* ans=(int*)malloc(n*sizeof(int));
    long long time=0;
    for(int i=0;i<n;i++){
        if(time<i)time=i;
        while(bs&&busy[0].end<=time){
            free[fs]=(Free){busy[0].w,busy[0].id};
            upF(free,fs++);
            busy[0]=busy[--bs];
            downB(busy,bs,0);
        }
        if(!fs){
            time=busy[0].end;
            while(bs&&busy[0].end<=time){
                free[fs]=(Free){busy[0].w,busy[0].id};
                upF(free,fs++);
                busy[0]=busy[--bs];
                downB(busy,bs,0);
            }
        }
        Free cur=free[0];
        free[0]=free[--fs];
        downF(free,fs,0);
        ans[i]=cur.id;
        busy[bs]=(Busy){time+tasks[i],cur.w,cur.id};
        upB(busy,bs++);
    }
    *returnSize=n;
    free(free);
    free(busy);
    return ans;
}
int main(){
    int k;
    if(scanf("%d",&k)!=1) return 0;
    int* servers=(int*)malloc(k*sizeof(int));
    for(int i=0;i<k;i++) scanf("%d",&servers[i]);
    int n;
    scanf("%d",&n);
    int* tasks=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&tasks[i]);
    int rs;
    int* ans=assignTasks(servers,k,tasks,n,&rs);
    for(int i=0;i<rs;i++){printf("%d",ans[i]);if(i+1<rs)printf(" ");}
    printf("\n");
    free(ans);
    free(servers);
    free(tasks);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
vector<int> assignTasks(vector<int>& servers,vector<int>& tasks){
    priority_queue<pair<int,int>,vector<pair<int,int>>,greater<pair<int,int>>> free;
    priority_queue<vector<long long>,vector<vector<long long>>,greater<vector<long long>>> busy;
    for(int i=0;i<servers.size();i++) free.push({servers[i],i});
    vector<int> ans;
    long long time=0;
    for(int i=0;i<tasks.size();i++){
        time=max(time,(long long)i);
        while(!busy.empty()&&busy.top()[0]<=time){
            auto cur=busy.top();
            busy.pop();
            free.push({(int)cur[1],(int)cur[2]});
        }
        if(free.empty()){
            time=busy.top()[0];
            while(!busy.empty()&&busy.top()[0]<=time){
                auto cur=busy.top();
                busy.pop();
                free.push({(int)cur[1],(int)cur[2]});
            }
        }
        auto cur=free.top();
        free.pop();
        ans.push_back(cur.second);
        busy.push({time+tasks[i],cur.first,cur.second});
    }
    return ans;
}
int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int k;
    if(cin>>k){
        vector<int> servers(k);
        for(int i=0;i<k;i++) cin>>servers[i];
        int n;
        cin>>n;
        vector<int> tasks(n);
        for(int i=0;i<n;i++) cin>>tasks[i];
        vector<int> ans=assignTasks(servers,tasks);
        for(int i=0;i<ans.size();i++){
            cout<<ans[i];
            if(i+1<ans.size()) cout<<" ";
        }
        cout<<"\n";
    }
    return 0;
}`
},'hp-h3': {
  python: `from heapq import *
from collections import defaultdict
def median_sliding_window(nums,k):
    small=[]
    large=[]
    delayed=defaultdict(int)
    smallSize=0
    largeSize=0
    def prune(heap):
        while heap:
            num=-heap[0] if heap is small else heap[0]
            if delayed[num]:
                delayed[num]-=1
                if delayed[num]==0:
                    del delayed[num]
                heappop(heap)
            else:
                break
    def balance():
        nonlocal smallSize,largeSize
        if smallSize>largeSize+1:
            heappush(large,-heappop(small))
            smallSize-=1
            largeSize+=1
            prune(small)
        elif smallSize<largeSize:
            heappush(small,-heappop(large))
            smallSize+=1
            largeSize-=1
            prune(large)
    ans=[]
    for i,x in enumerate(nums):
        if not small or x<=-small[0]:
            heappush(small,-x)
            smallSize+=1
        else:
            heappush(large,x)
            largeSize+=1
        balance()
        if i>=k:
            out=nums[i-k]
            delayed[out]+=1
            if out<=-small[0]:
                smallSize-=1
                if out==-small[0]:
                    prune(small)
            else:
                largeSize-=1
                if large and out==large[0]:
                    prune(large)
            balance()
        if i>=k-1:
            if k&1:
                ans.append(float(-small[0]))
            else:
                ans.append((-small[0]+large[0])/2)
    return ans
n=int(input())
nums=list(map(int,input().split()))
k=int(input())
print(*[int(x) if x==int(x) else x for x in median_sliding_window(nums,k)])`,
  java: `import java.util.*;
public class Solution{
    static class DualHeap{
        PriorityQueue<Integer> small=new PriorityQueue<>(Collections.reverseOrder());
        PriorityQueue<Integer> large=new PriorityQueue<>();
        HashMap<Integer,Integer> delayed=new HashMap<>();
        int smallSize=0,largeSize=0,k;
        DualHeap(int k){this.k=k;}
        void prune(PriorityQueue<Integer> heap){
            while(!heap.isEmpty()){
                int num=heap.peek();
                if(delayed.containsKey(num)){
                    delayed.put(num,delayed.get(num)-1);
                    if(delayed.get(num)==0) delayed.remove(num);
                    heap.poll();
                }else break;
            }
        }
        void balance(){
            if(smallSize>largeSize+1){
                large.offer(small.poll());
                smallSize--;
                largeSize++;
                prune(small);
            }else if(smallSize<largeSize){
                small.offer(large.poll());
                smallSize++;
                largeSize--;
                prune(large);
            }
        }
        void insert(int num){
            if(small.isEmpty()||num<=small.peek()){
                small.offer(num);
                smallSize++;
            }else{
                large.offer(num);
                largeSize++;
            }
            balance();
        }
        void erase(int num){
            delayed.put(num,delayed.getOrDefault(num,0)+1);
            if(num<=small.peek()){
                smallSize--;
                if(num==small.peek()) prune(small);
            }else{
                largeSize--;
                if(!large.isEmpty()&&num==large.peek()) prune(large);
            }
            balance();
        }
        double median(){
            if((k&1)==1) return small.peek();
            return ((long)small.peek()+(long)large.peek())/2.0;
        }
    }
    public static double[] medianSlidingWindow(int[] nums,int k){
        DualHeap dh=new DualHeap(k);
        double[] ans=new double[nums.length-k+1];
        for(int i=0;i<k;i++) dh.insert(nums[i]);
        ans[0]=dh.median();
        for(int i=k;i<nums.length;i++){
            dh.insert(nums[i]);
            dh.erase(nums[i-k]);
            ans[i-k+1]=dh.median();
        }
        return ans;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        if(sc.hasNextInt()){
            int n=sc.nextInt();
            int[] nums=new int[n];
            for(int i=0;i<n;i++) nums[i]=sc.nextInt();
            int k=sc.nextInt();
            double[] ans=medianSlidingWindow(nums,k);
            for(int i=0;i<ans.length;i++){
                if(ans[i]==(long)ans[i]) System.out.print((long)ans[i]);
                else System.out.print(ans[i]);
                if(i+1<ans.length) System.out.print(" ");
            }
            System.out.println();
        }
    }
}`,  c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void*a,const void*b){
    return *(int*)a-*(int*)b;
}
double* medianSlidingWindow(int* nums,int numsSize,int k,int* returnSize){
    *returnSize=numsSize-k+1;
    double* ans=(double*)malloc((*returnSize)*sizeof(double));
    int* win=(int*)malloc(k*sizeof(int));
    for(int i=0;i<=numsSize-k;i++){
        for(int j=0;j<k;j++) win[j]=nums[i+j];
        qsort(win,k,sizeof(int),cmp);
        if(k&1) ans[i]=win[k/2];
        else ans[i]=((double)win[k/2-1]+win[k/2])/2.0;
    }
    free(win);
    return ans;
}
int main(){
    int n;
    if(scanf("%d",&n)!=1) return 0;
    int* nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    int k;
    scanf("%d",&k);
    int returnSize;
    double* ans=medianSlidingWindow(nums,n,k,&returnSize);
    for(int i=0;i<returnSize;i++){
        if(ans[i]==(long long)ans[i]) printf("%lld",(long long)ans[i]);
        else printf("%.1f",ans[i]);
        if(i+1<returnSize) printf(" ");
    }
    printf("\n");
    free(ans);
    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <set>
using namespace std;
vector<double> medianSlidingWindow(vector<int>& nums,int k){
    multiset<int> lo,hi;
    auto balance=[&](){
        while(lo.size()>hi.size()+1){
            hi.insert(*prev(lo.end()));
            lo.erase(prev(lo.end()));
        }
        while(lo.size()<hi.size()){
            lo.insert(*hi.begin());
            hi.erase(hi.begin());
        }
    };
    vector<double> ans;
    for(int i=0;i<nums.size();i++){
        if(lo.empty()||nums[i]<=*prev(lo.end())) lo.insert(nums[i]);
        else hi.insert(nums[i]);
        balance();
        if(i>=k){
            if(lo.find(nums[i-k])!=lo.end()) lo.erase(lo.find(nums[i-k]));
            else hi.erase(hi.find(nums[i-k]));
            balance();
        }
        if(i>=k-1){
            if(k&1) ans.push_back(*prev(lo.end()));
            else ans.push_back(((double)*prev(lo.end())+*hi.begin())/2.0);
        }
    }
    return ans;
}
int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if(cin>>n){
        vector<int> nums(n);
        for(int i=0;i<n;i++) cin>>nums[i];
        int k;
        cin>>k;
        vector<double> ans=medianSlidingWindow(nums,k);
        for(int i=0;i<ans.size();i++){
            if(ans[i]==(long long)ans[i]) cout<<(long long)ans[i];
            else cout<<ans[i];
            if(i+1<ans.size()) cout<<" ";
        }
        cout<<"\n";
    }
    return 0;
}`
},'hp-h4': {
  python: `import heapq
def find_maximized_capital(k,w,profits,capital):
    projects=sorted(zip(capital,profits))
    heap=[]
    i=0
    n=len(projects)
    for _ in range(k):
        while i<n and projects[i][0]<=w:
            heapq.heappush(heap,-projects[i][1])
            i+=1
        if not heap:
            break
        w+=-heapq.heappop(heap)
    return w
k=int(input())
w=int(input())
n=int(input())
profits=list(map(int,input().split()))
capital=list(map(int,input().split()))
print(find_maximized_capital(k,w,profits,capital))`,
  java: `import java.util.*;
public class Solution{
    public static int findMaximizedCapital(int k,int w,int[] profits,int[] capital){
        int n=profits.length;
        int[][] projects=new int[n][2];
        for(int i=0;i<n;i++){
            projects[i][0]=capital[i];
            projects[i][1]=profits[i];
        }
        Arrays.sort(projects,(a,b)->Integer.compare(a[0],b[0]));
        PriorityQueue<Integer> pq=new PriorityQueue<>(Collections.reverseOrder());
        int i=0;
        while(k-->0){
            while(i<n&&projects[i][0]<=w){
                pq.offer(projects[i][1]);
                i++;
            }
            if(pq.isEmpty()) break;
            w+=pq.poll();
        }
        return w;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        if(sc.hasNextInt()){
            int k=sc.nextInt();
            int w=sc.nextInt();
            int n=sc.nextInt();
            int[] profits=new int[n];
            int[] capital=new int[n];
            for(int i=0;i<n;i++) profits[i]=sc.nextInt();
            for(int i=0;i<n;i++) capital[i]=sc.nextInt();
            System.out.println(findMaximizedCapital(k,w,profits,capital));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
typedef struct{
    int c,p;
}Project;
int cmp(const void*a,const void*b){
    return ((Project*)a)->c-((Project*)b)->c;
}
void swap(int*a,int*b){
    int t=*a;*a=*b;*b=t;
}
void up(int h[],int i){
    while(i>0){
        int p=(i-1)/2;
        if(h[p]>=h[i]) break;
        swap(&h[p],&h[i]);
        i=p;
    }
}
void down(int h[],int n,int i){
    while(1){
        int s=i,l=2*i+1,r=2*i+2;
        if(l<n&&h[l]>h[s]) s=l;
        if(r<n&&h[r]>h[s]) s=r;
        if(s==i) break;
        swap(&h[s],&h[i]);
        i=s;
    }
}
int findMaximizedCapital(int k,int w,int* profits,int* capital,int n){
    Project* arr=(Project*)malloc(n*sizeof(Project));
    for(int i=0;i<n;i++){
        arr[i].c=capital[i];
        arr[i].p=profits[i];
    }
    qsort(arr,n,sizeof(Project),cmp);
    int* heap=(int*)malloc(n*sizeof(int));
    int hs=0,i=0;
    while(k--){
        while(i<n&&arr[i].c<=w){
            heap[hs]=arr[i].p;
            up(heap,hs++);
            i++;
        }
        if(hs==0) break;
        w+=heap[0];
        heap[0]=heap[--hs];
        down(heap,hs,0);
    }
    free(arr);
    free(heap);
    return w;
}
int main(){
    int k,w,n;
    if(scanf("%d",&k)!=1) return 0;
    scanf("%d",&w);
    scanf("%d",&n);
    int* profits=(int*)malloc(n*sizeof(int));
    int* capital=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&profits[i]);
    for(int i=0;i<n;i++) scanf("%d",&capital[i]);
    printf("%d\n",findMaximizedCapital(k,w,profits,capital,n));
    free(profits);
    free(capital);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;
int findMaximizedCapital(int k,int w,vector<int>& profits,vector<int>& capital){
    vector<pair<int,int>> projects;
    for(int i=0;i<profits.size();i++) projects.push_back({capital[i],profits[i]});
    sort(projects.begin(),projects.end());
    priority_queue<int> pq;
    int i=0,n=projects.size();
    while(k--){
        while(i<n&&projects[i].first<=w){
            pq.push(projects[i].second);
            i++;
        }
        if(pq.empty()) break;
        w+=pq.top();
        pq.pop();
    }
    return w;
}
int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int k,w,n;
    if(cin>>k){
        cin>>w;
        cin>>n;
        vector<int> profits(n),capital(n);
        for(int i=0;i<n;i++) cin>>profits[i];
        for(int i=0;i<n;i++) cin>>capital[i];
        cout<<findMaximizedCapital(k,w,profits,capital)<<"\n";
    }
    return 0;
}`
},'hp-h5': {
  python: `import heapq
def min_interval(intervals,queries):
    intervals.sort()
    qs=sorted((x,i) for i,x in enumerate(queries))
    ans=[-1]*len(queries)
    heap=[]
    i=0
    for q,idx in qs:
        while i<len(intervals) and intervals[i][0]<=q:
            l,r=intervals[i]
            heapq.heappush(heap,(r-l+1,r))
            i+=1
        while heap and heap[0][1]<q:
            heapq.heappop(heap)
        if heap:
            ans[idx]=heap[0][0]
    return ans
n=int(input())
intervals=[list(map(int,input().split())) for _ in range(n)]
q=int(input())
queries=list(map(int,input().split()))
print(*min_interval(intervals,queries))`,
  java: `import java.util.*;
public class Solution{
    public static int[] minInterval(int[][] intervals,int[] queries){
        Arrays.sort(intervals,(a,b)->a[0]-b[0]);
        int m=queries.length;
        int[][] qs=new int[m][2];
        for(int i=0;i<m;i++){
            qs[i][0]=queries[i];
            qs[i][1]=i;
        }
        Arrays.sort(qs,(a,b)->a[0]-b[0]);
        PriorityQueue<int[]> pq=new PriorityQueue<>((a,b)->a[0]-b[0]);
        int[] ans=new int[m];
        Arrays.fill(ans,-1);
        int i=0;
        for(int[] cur:qs){
            int q=cur[0],idx=cur[1];
            while(i<intervals.length&&intervals[i][0]<=q){
                int l=intervals[i][0],r=intervals[i][1];
                pq.offer(new int[]{r-l+1,r});
                i++;
            }
            while(!pq.isEmpty()&&pq.peek()[1]<q) pq.poll();
            if(!pq.isEmpty()) ans[idx]=pq.peek()[0];
        }
        return ans;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        if(sc.hasNextInt()){
            int n=sc.nextInt();
            int[][] intervals=new int[n][2];
            for(int i=0;i<n;i++){
                intervals[i][0]=sc.nextInt();
                intervals[i][1]=sc.nextInt();
            }
            int q=sc.nextInt();
            int[] queries=new int[q];
            for(int i=0;i<q;i++) queries[i]=sc.nextInt();
            int[] ans=minInterval(intervals,queries);
            for(int i=0;i<ans.length;i++){
                System.out.print(ans[i]);
                if(i+1<ans.length) System.out.print(" ");
            }
            System.out.println();
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
typedef struct{int l,r;}Interval;
typedef struct{int q,idx;}Query;
typedef struct{int len,r;}Node;
int cmpInterval(const void*a,const void*b){return ((Interval*)a)->l-((Interval*)b)->l;}
int cmpQuery(const void*a,const void*b){return ((Query*)a)->q-((Query*)b)->q;}
void swap(Node*a,Node*b){Node t=*a;*a=*b;*b=t;}
void up(Node h[],int i){
    while(i){
        int p=(i-1)/2;
        if(h[p].len<h[i].len||(h[p].len==h[i].len&&h[p].r<=h[i].r)) break;
        swap(&h[p],&h[i]);
        i=p;
    }
}
void down(Node h[],int n,int i){
    while(1){
        int s=i,l=2*i+1,r=2*i+2;
        if(l<n&&(h[l].len<h[s].len||(h[l].len==h[s].len&&h[l].r<h[s].r))) s=l;
        if(r<n&&(h[r].len<h[s].len||(h[r].len==h[s].len&&h[r].r<h[s].r))) s=r;
        if(s==i) break;
        swap(&h[s],&h[i]);
        i=s;
    }
}
int* minInterval(int** intervals,int n,int* queries,int q,int* returnSize){
    Interval* arr=(Interval*)malloc(n*sizeof(Interval));
    for(int i=0;i<n;i++){arr[i].l=intervals[i][0];arr[i].r=intervals[i][1];}
    qsort(arr,n,sizeof(Interval),cmpInterval);
    Query* qs=(Query*)malloc(q*sizeof(Query));
    for(int i=0;i<q;i++){qs[i].q=queries[i];qs[i].idx=i;}
    qsort(qs,q,sizeof(Query),cmpQuery);
    Node* heap=(Node*)malloc(n*sizeof(Node));
    int hs=0,j=0;
    int* ans=(int*)malloc(q*sizeof(int));
    for(int i=0;i<q;i++) ans[i]=-1;
    for(int i=0;i<q;i++){
        while(j<n&&arr[j].l<=qs[i].q){
            heap[hs]=(Node){arr[j].r-arr[j].l+1,arr[j].r};
            up(heap,hs++);
            j++;
        }
        while(hs&&heap[0].r<qs[i].q){
            heap[0]=heap[--hs];
            down(heap,hs,0);
        }
        if(hs) ans[qs[i].idx]=heap[0].len;
    }
    free(arr);
    free(qs);
    free(heap);
    *returnSize=q;
    return ans;
}
int main(){
    int n;
    if(scanf("%d",&n)!=1) return 0;
    int** intervals=(int**)malloc(n*sizeof(int*));
    for(int i=0;i<n;i++){
        intervals[i]=(int*)malloc(2*sizeof(int));
        scanf("%d%d",&intervals[i][0],&intervals[i][1]);
    }
    int q;
    scanf("%d",&q);
    int* queries=(int*)malloc(q*sizeof(int));
    for(int i=0;i<q;i++) scanf("%d",&queries[i]);
    int rs;
    int* ans=minInterval(intervals,n,queries,q,&rs);
    for(int i=0;i<rs;i++){
        printf("%d",ans[i]);
        if(i+1<rs) printf(" ");
    }
    printf("\n");
    free(ans);
    free(queries);
    for(int i=0;i<n;i++) free(intervals[i]);
    free(intervals);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;
vector<int> minInterval(vector<vector<int>>& intervals,vector<int>& queries){
    sort(intervals.begin(),intervals.end());
    vector<pair<int,int>> qs;
    for(int i=0;i<queries.size();i++) qs.push_back({queries[i],i});
    sort(qs.begin(),qs.end());
    priority_queue<pair<int,int>,vector<pair<int,int>>,greater<pair<int,int>>> pq;
    vector<int> ans(queries.size(),-1);
    int i=0;
    for(auto &x:qs){
        int q=x.first,idx=x.second;
        while(i<intervals.size()&&intervals[i][0]<=q){
            pq.push({intervals[i][1]-intervals[i][0]+1,intervals[i][1]});
            i++;
        }
        while(!pq.empty()&&pq.top().second<q) pq.pop();
        if(!pq.empty()) ans[idx]=pq.top().first;
    }
    return ans;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if(cin>>n){
        vector<vector<int>> intervals(n,vector<int>(2));
        for(int i=0;i<n;i++) cin>>intervals[i][0]>>intervals[i][1];
        int q;
        cin>>q;
        vector<int> queries(q);
        for(int i=0;i<q;i++) cin>>queries[i];
        vector<int> ans=minInterval(intervals,queries);
        for(int i=0;i<ans.size();i++){
            cout<<ans[i];
            if(i+1<ans.size()) cout<<" ";
        }
        cout<<"\n";
    }
    return 0;
}`
}
};