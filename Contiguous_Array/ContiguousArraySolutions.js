export const contiguousArraySolutions = {
  'ca-e1': {
    python: `def longest_contiguous_array(nums):
    first={0:-1}
    balance=0
    ans=0
    for i,x in enumerate(nums):
        balance+=1 if x==1 else -1
        if balance in first:
            ans=max(ans,i-first[balance])
        else:
            first[balance]=i
    return ans

n=int(input())
nums=list(map(int,input().split()))
print(longest_contiguous_array(nums))`,
    java: `import java.util.*;
public class Main{
    public static int longestContiguousArray(int[] nums){
        HashMap<Integer,Integer> first=new HashMap<>();
        first.put(0,-1);
        int balance=0,ans=0;
        for(int i=0;i<nums.length;i++){
            balance+=nums[i]==1?1:-1;
            if(first.containsKey(balance)){
                ans=Math.max(ans,i-first.get(balance));
            }else{
                first.put(balance,i);
            }
        }
        return ans;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        if(sc.hasNextInt()){
            int n=sc.nextInt();
            int[] nums=new int[n];
            for(int i=0;i<n;i++) nums[i]=sc.nextInt();
            System.out.println(longestContiguousArray(nums));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct{
    int key;
    int value;
    int used;
}Node;
int longestContiguousArray(int* nums,int numsSize){
    int size=4*numsSize+5;
    Node* map=(Node*)calloc(size,sizeof(Node));
    int offset=numsSize;
    map[offset].used=1;
    map[offset].key=0;
    map[offset].value=-1;
    int balance=0,ans=0;
    for(int i=0;i<numsSize;i++){
        balance+=nums[i]?1:-1;
        int idx=balance+offset;
        if(map[idx].used){
            int len=i-map[idx].value;
            if(len>ans) ans=len;
        }else{
            map[idx].used=1;
            map[idx].key=balance;
            map[idx].value=i;
        }
    }
    free(map);
    return ans;
}

int main(){
    int n;
    if(scanf("%d",&n)!=1) return 0;
    int* nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    printf("%d\n",longestContiguousArray(nums,n));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

int longestContiguousArray(vector<int>& nums){
    unordered_map<int,int> first;
    first[0]=-1;
    int balance=0,ans=0;
    for(int i=0;i<nums.size();i++){
        balance+=nums[i]?1:-1;
        if(first.count(balance)){
            ans=max(ans,i-first[balance]);
        }else{
            first[balance]=i;
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
        cout<<longestContiguousArray(nums)<<"\n";
    }
    return 0;
}`
  },  'ca-e2': {
    python: `def count_balanced_subarrays(nums):
    freq={0:1}
    balance=0
    ans=0
    for x in nums:
        balance+=1 if x==1 else -1
        ans+=freq.get(balance,0)
        freq[balance]=freq.get(balance,0)+1
    return ans

n=int(input())
nums=list(map(int,input().split()))
print(count_balanced_subarrays(nums))`,
    java: `import java.util.*;
public class Main{
    public static long countBalancedSubarrays(int[] nums){
        HashMap<Integer,Integer> freq=new HashMap<>();
        freq.put(0,1);
        int balance=0;
        long ans=0;
        for(int x:nums){
            balance+=x==1?1:-1;
            ans+=freq.getOrDefault(balance,0);
            freq.put(balance,freq.getOrDefault(balance,0)+1);
        }
        return ans;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        if(sc.hasNextInt()){
            int n=sc.nextInt();
            int[] nums=new int[n];
            for(int i=0;i<n;i++) nums[i]=sc.nextInt();
            System.out.println(countBalancedSubarrays(nums));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

long long countBalancedSubarrays(int* nums,int numsSize){
    int size=2*numsSize+5;
    long long* freq=(long long*)calloc(size,sizeof(long long));
    int offset=numsSize;
    freq[offset]=1;
    int balance=0;
    long long ans=0;
    for(int i=0;i<numsSize;i++){
        balance+=nums[i]?1:-1;
        ans+=freq[balance+offset];
        freq[balance+offset]++;
    }
    free(freq);
    return ans;
}

int main(){
    int n;
    if(scanf("%d",&n)!=1) return 0;
    int* nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    printf("%lld\n",countBalancedSubarrays(nums,n));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

long long countBalancedSubarrays(vector<int>& nums){
    unordered_map<int,int> freq;
    freq[0]=1;
    int balance=0;
    long long ans=0;
    for(int x:nums){
        balance+=x?1:-1;
        ans+=freq[balance];
        freq[balance]++;
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
        cout<<countBalancedSubarrays(nums)<<"\n";
    }
    return 0;
}`
  },
  'ca-e3': {
    python: `def longest_balanced_prefix(nums):
    balance=0
    ans=0
    for i,x in enumerate(nums):
        balance+=1 if x==1 else -1
        if balance==0:
            ans=i+1
    return ans

n=int(input())
nums=list(map(int,input().split()))
print(longest_balanced_prefix(nums))`,
    java: `import java.util.*;
public class Main{
    public static int longestBalancedPrefix(int[] nums){
        int balance=0,ans=0;
        for(int i=0;i<nums.length;i++){
            balance+=nums[i]==1?1:-1;
            if(balance==0) ans=i+1;
        }
        return ans;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        if(sc.hasNextInt()){
            int n=sc.nextInt();
            int[] nums=new int[n];
            for(int i=0;i<n;i++) nums[i]=sc.nextInt();
            System.out.println(longestBalancedPrefix(nums));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int longestBalancedPrefix(int* nums,int numsSize){
    int balance=0,ans=0;
    for(int i=0;i<numsSize;i++){
        balance+=nums[i]?1:-1;
        if(balance==0) ans=i+1;
    }
    return ans;
}

int main(){
    int n;
    if(scanf("%d",&n)!=1) return 0;
    int* nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    printf("%d\n",longestBalancedPrefix(nums,n));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int longestBalancedPrefix(vector<int>& nums){
    int balance=0,ans=0;
    for(int i=0;i<nums.size();i++){
        balance+=nums[i]?1:-1;
        if(balance==0) ans=i+1;
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
        cout<<longestBalancedPrefix(nums)<<"\n";
    }
    return 0;
}`
  },  'ca-e4': {
    python: `def balanced_subarray_exists(nums):
    first={0:-1}
    balance=0
    for i,x in enumerate(nums):
        balance+=1 if x==1 else -1
        if balance in first:
            return True
        first[balance]=i
    return False
n=int(input())
nums=list(map(int,input().split()))
print(str(balanced_subarray_exists(nums)).lower())`,
    java: `import java.util.*;
public class Main{
    public static boolean balancedSubarrayExists(int[] nums){
        HashMap<Integer,Integer> first=new HashMap<>();
        first.put(0,-1);
        int balance=0;
        for(int i=0;i<nums.length;i++){
            balance+=nums[i]==1?1:-1;
            if(first.containsKey(balance)) return true;
            first.put(balance,i);
        }
        return false;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        if(sc.hasNextInt()){
            int n=sc.nextInt();
            int[] nums=new int[n];
            for(int i=0;i<n;i++) nums[i]=sc.nextInt();
            System.out.println(balancedSubarrayExists(nums));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct{
    int used;
    int value;
}Node;

int balancedSubarrayExists(int* nums,int numsSize){
    int size=2*numsSize+5;
    int offset=numsSize;
    Node* map=(Node*)calloc(size,sizeof(Node));
    map[offset].used=1;
    map[offset].value=-1;
    int balance=0;
    for(int i=0;i<numsSize;i++){
        balance+=nums[i]?1:-1;
        int idx=balance+offset;
        if(map[idx].used){
            free(map);
            return 1;
        }
        map[idx].used=1;
        map[idx].value=i;
    }
    free(map);
    return 0;
}

int main(){
    int n;
    if(scanf("%d",&n)!=1) return 0;
    int* nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    printf("%s\n",balancedSubarrayExists(nums,n)?"true":"false");
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

bool balancedSubarrayExists(vector<int>& nums){
    unordered_map<int,int> first;
    first[0]=-1;
    int balance=0;
    for(int i=0;i<nums.size();i++){
        balance+=nums[i]?1:-1;
        if(first.count(balance)) return true;
        first[balance]=i;
    }
    return false;
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if(cin>>n){
        vector<int> nums(n);
        for(int i=0;i<n;i++) cin>>nums[i];
        cout<<(balancedSubarrayExists(nums)?"true":"false")<<"\n";
    }
    return 0;
}`
  },
  'ca-e5': {
    python: `def largest_balanced_window(nums):
    first={0:-1}
    balance=0
    best=0
    start=-1
    end=-1
    for i,x in enumerate(nums):
        balance+=1 if x==1 else -1
        if balance in first:
            l=first[balance]+1
            if i-first[balance]>best:
                best=i-first[balance]
                start=l
                end=i
        else:
            first[balance]=i
    return start,end
n=int(input())
nums=list(map(int,input().split()))
l,r=largest_balanced_window(nums)
print(l,r)`,
    java: `import java.util.*;
public class Main{
    public static int[] largestBalancedWindow(int[] nums){
        HashMap<Integer,Integer> first=new HashMap<>();
        first.put(0,-1);
        int balance=0,best=0,start=-1,end=-1;
        for(int i=0;i<nums.length;i++){
            balance+=nums[i]==1?1:-1;
            if(first.containsKey(balance)){
                int len=i-first.get(balance);
                if(len>best){
                    best=len;
                    start=first.get(balance)+1;
                    end=i;
                }
            }else{
                first.put(balance,i);
            }
        }
        return new int[]{start,end};
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        if(sc.hasNextInt()){
            int n=sc.nextInt();
            int[] nums=new int[n];
            for(int i=0;i<n;i++) nums[i]=sc.nextInt();
            int[] ans=largestBalancedWindow(nums);
            System.out.println(ans[0]+" "+ans[1]);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct{
    int used;
    int value;
}Node;

void largestBalancedWindow(int* nums,int numsSize,int* start,int* end){
    int size=2*numsSize+5;
    int offset=numsSize;
    Node* map=(Node*)calloc(size,sizeof(Node));
    map[offset].used=1;
    map[offset].value=-1;
    int balance=0,best=0;
    *start=-1;
    *end=-1;
    for(int i=0;i<numsSize;i++){
        balance+=nums[i]?1:-1;
        int idx=balance+offset;
        if(map[idx].used){
            int len=i-map[idx].value;
            if(len>best){
                best=len;
                *start=map[idx].value+1;
                *end=i;
            }
        }else{
            map[idx].used=1;
            map[idx].value=i;
        }
    }
    free(map);
}

int main(){
    int n;
    if(scanf("%d",&n)!=1) return 0;
    int* nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    int l,r;
    largestBalancedWindow(nums,n,&l,&r);
    printf("%d %d\n",l,r);
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

pair<int,int> largestBalancedWindow(vector<int>& nums){
    unordered_map<int,int> first;
    first[0]=-1;
    int balance=0,best=0,start=-1,end=-1;
    for(int i=0;i<nums.size();i++){
        balance+=nums[i]?1:-1;
        if(first.count(balance)){
            int len=i-first[balance];
            if(len>best){
                best=len;
                start=first[balance]+1;
                end=i;
            }
        }else{
            first[balance]=i;
        }
    }
    return {start,end};
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if(cin>>n){
        vector<int> nums(n);
        for(int i=0;i<n;i++) cin>>nums[i];
        auto ans=largestBalancedWindow(nums);
        cout<<ans.first<<" "<<ans.second<<"\n";
    }
    return 0;
}`
  },  'ca-m1': {
    python: `def longest_equal_012(nums):
    first={(0,0):-1}
    c0=c1=c2=0
    ans=0
    for i,x in enumerate(nums):
        if x==0:
            c0+=1
        elif x==1:
            c1+=1
        else:
            c2+=1
        key=(c1-c0,c2-c1)
        if key in first:
            ans=max(ans,i-first[key])
        else:
            first[key]=i
    return ans
n=int(input())
nums=list(map(int,input().split()))
print(longest_equal_012(nums))`,
    java: `import java.util.*;
public class Main{
    public static int longestEqual012(int[] nums){
        HashMap<String,Integer> first=new HashMap<>();
        first.put("0#0",-1);
        int c0=0,c1=0,c2=0,ans=0;
        for(int i=0;i<nums.length;i++){
            if(nums[i]==0) c0++;
            else if(nums[i]==1) c1++;
            else c2++;
            String key=(c1-c0)+"#"+(c2-c1);
            if(first.containsKey(key)){
                ans=Math.max(ans,i-first.get(key));
            }else{
                first.put(key,i);
            }
        }
        return ans;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        if(sc.hasNextInt()){
            int n=sc.nextInt();
            int[] nums=new int[n];
            for(int i=0;i<n;i++) nums[i]=sc.nextInt();
            System.out.println(longestEqual012(nums));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

typedef struct{
    int a,b,idx,used;
}Node;

int longestEqual012(int* nums,int n){
    int size=8*n+5;
    Node* map=(Node*)calloc(size,sizeof(Node));
    int c0=0,c1=0,c2=0,ans=0;
    int h=size/2;
    map[h].used=1;
    map[h].a=0;
    map[h].b=0;
    map[h].idx=-1;
    for(int i=0;i<n;i++){
        if(nums[i]==0) c0++;
        else if(nums[i]==1) c1++;
        else c2++;
        int a=c1-c0,b=c2-c1;
        int idx=((a+n)*401+(b+n))%size;
        while(map[idx].used&&(map[idx].a!=a||map[idx].b!=b)) idx=(idx+1)%size;
        if(map[idx].used){
            int len=i-map[idx].idx;
            if(len>ans) ans=len;
        }else{
            map[idx].used=1;
            map[idx].a=a;
            map[idx].b=b;
            map[idx].idx=i;
        }
    }
    free(map);
    return ans;
}

int main(){
    int n;
    if(scanf("%d",&n)!=1) return 0;
    int* nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    printf("%d\n",longestEqual012(nums,n));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

int longestEqual012(vector<int>& nums){
    unordered_map<string,int> first;
    first["0#0"]=-1;
    int c0=0,c1=0,c2=0,ans=0;
    for(int i=0;i<nums.size();i++){
        if(nums[i]==0) c0++;
        else if(nums[i]==1) c1++;
        else c2++;
        string key=to_string(c1-c0)+"#"+to_string(c2-c1);
        if(first.count(key)){
            ans=max(ans,i-first[key]);
        }else{
            first[key]=i;
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
        cout<<longestEqual012(nums)<<"\n";
    }
    return 0;
}`
  },  'ca-m2': {
    python: `def max_balanced_after_one_flip(nums):
    n=len(nums)
    ans=0
    for i in range(n):
        arr=nums[:]
        arr[i]^=1
        first={0:-1}
        balance=0
        best=0
        for j,x in enumerate(arr):
            balance+=1 if x==1 else -1
            if balance in first:
                best=max(best,j-first[balance])
            else:
                first[balance]=j
        ans=max(ans,best)
    return ans

n=int(input())
nums=list(map(int,input().split()))
print(max_balanced_after_one_flip(nums))`,
    java: `import java.util.*;
public class Main{
    public static int maxBalancedAfterOneFlip(int[] nums){
        int n=nums.length,ans=0;
        for(int i=0;i<n;i++){
            int[] arr=nums.clone();
            arr[i]^=1;
            HashMap<Integer,Integer> first=new HashMap<>();
            first.put(0,-1);
            int balance=0,best=0;
            for(int j=0;j<n;j++){
                balance+=arr[j]==1?1:-1;
                if(first.containsKey(balance)){
                    best=Math.max(best,j-first.get(balance));
                }else{
                    first.put(balance,j);
                }
            }
            ans=Math.max(ans,best);
        }
        return ans;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        if(sc.hasNextInt()){
            int n=sc.nextInt();
            int[] nums=new int[n];
            for(int i=0;i<n;i++) nums[i]=sc.nextInt();
            System.out.println(maxBalancedAfterOneFlip(nums));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int longestBalanced(int* arr,int n){
    int size=2*n+5;
    int* first=(int*)malloc(size*sizeof(int));
    for(int i=0;i<size;i++) first[i]=-2;
    int offset=n;
    first[offset]=-1;
    int balance=0,best=0;
    for(int i=0;i<n;i++){
        balance+=arr[i]?1:-1;
        if(first[balance+offset]!=-2){
            int len=i-first[balance+offset];
            if(len>best) best=len;
        }else{
            first[balance+offset]=i;
        }
    }
    free(first);
    return best;
}
int maxBalancedAfterOneFlip(int* nums,int n){
    int* arr=(int*)malloc(n*sizeof(int));
    int ans=0;
    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++) arr[j]=nums[j];
        arr[i]^=1;
        int cur=longestBalanced(arr,n);
        if(cur>ans) ans=cur;
    }
    free(arr);
    return ans;
}

int main(){
    int n;
    if(scanf("%d",&n)!=1) return 0;
    int* nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    printf("%d\n",maxBalancedAfterOneFlip(nums,n));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

int longestBalanced(vector<int>& arr){
    unordered_map<int,int> first;
    first[0]=-1;
    int balance=0,best=0;
    for(int i=0;i<arr.size();i++){
        balance+=arr[i]?1:-1;
        if(first.count(balance)){
            best=max(best,i-first[balance]);
        }else{
            first[balance]=i;
        }
    }
    return best;
}

int maxBalancedAfterOneFlip(vector<int>& nums){
    int ans=0;
    for(int i=0;i<nums.size();i++){
        vector<int> arr=nums;
        arr[i]^=1;
        ans=max(ans,longestBalanced(arr));
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
        cout<<maxBalancedAfterOneFlip(nums)<<"\n";
    }
    return 0;
}`
  },  'ca-m3': {
    python: `def longest_even_odd(nums):
    first={0:-1}
    balance=0
    ans=0
    for i,x in enumerate(nums):
        balance+=1 if x%2==0 else -1
        if balance in first:
            ans=max(ans,i-first[balance])
        else:
            first[balance]=i
    return ans

n=int(input())
nums=list(map(int,input().split()))
print(longest_even_odd(nums))`,
    java: `import java.util.*;
public class Main{
    public static int longestEvenOdd(int[] nums){
        HashMap<Integer,Integer> first=new HashMap<>();
        first.put(0,-1);
        int balance=0,ans=0;
        for(int i=0;i<nums.length;i++){
            balance+=nums[i]%2==0?1:-1;
            if(first.containsKey(balance)){
                ans=Math.max(ans,i-first.get(balance));
            }else{
                first.put(balance,i);
            }
        }
        return ans;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        if(sc.hasNextInt()){
            int n=sc.nextInt();
            int[] nums=new int[n];
            for(int i=0;i<n;i++) nums[i]=sc.nextInt();
            System.out.println(longestEvenOdd(nums));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int longestEvenOdd(int* nums,int n){
    int size=2*n+5;
    int* first=(int*)malloc(size*sizeof(int));
    for(int i=0;i<size;i++) first[i]=-2;
    int offset=n;
    first[offset]=-1;
    int balance=0,ans=0;
    for(int i=0;i<n;i++){
        balance+=nums[i]%2==0?1:-1;
        if(first[balance+offset]!=-2){
            int len=i-first[balance+offset];
            if(len>ans) ans=len;
        }else{
            first[balance+offset]=i;
        }
    }
    free(first);
    return ans;
}

int main(){
    int n;
    if(scanf("%d",&n)!=1) return 0;
    int* nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    printf("%d\n",longestEvenOdd(nums,n));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

int longestEvenOdd(vector<int>& nums){
    unordered_map<int,int> first;
    first[0]=-1;
    int balance=0,ans=0;
    for(int i=0;i<nums.size();i++){
        balance+=nums[i]%2==0?1:-1;
        if(first.count(balance)){
            ans=max(ans,i-first[balance]);
        }else{
            first[balance]=i;
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
        cout<<longestEvenOdd(nums)<<"\n";
    }
    return 0;
}`
  },  'ca-m4': {
    python: `def longest_zero_sum_subarray(nums):
    first={0:-1}
    prefix=0
    ans=0
    for i,x in enumerate(nums):
        prefix+=x
        if prefix in first:
            ans=max(ans,i-first[prefix])
        else:
            first[prefix]=i
    return ans

n=int(input())
nums=list(map(int,input().split()))
print(longest_zero_sum_subarray(nums))`,
    java: `import java.util.*;
public class Main{
    public static int longestZeroSumSubarray(int[] nums){
        HashMap<Integer,Integer> first=new HashMap<>();
        first.put(0,-1);
        int prefix=0,ans=0;
        for(int i=0;i<nums.length;i++){
            prefix+=nums[i];
            if(first.containsKey(prefix)){
                ans=Math.max(ans,i-first.get(prefix));
            }else{
                first.put(prefix,i);
            }
        }
        return ans;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        if(sc.hasNextInt()){
            int n=sc.nextInt();
            int[] nums=new int[n];
            for(int i=0;i<n;i++) nums[i]=sc.nextInt();
            System.out.println(longestZeroSumSubarray(nums));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int longestZeroSumSubarray(int* nums,int n){
    int size=4*n+5;
    int* key=(int*)malloc(size*sizeof(int));
    int* val=(int*)malloc(size*sizeof(int));
    char* used=(char*)calloc(size,sizeof(char));
    int ans=0,prefix=0;
    int idx=size/2;
    used[idx]=1;
    key[idx]=0;
    val[idx]=-1;
    for(int i=0;i<n;i++){
        prefix+=nums[i];
        idx=((prefix%(size-1))+(size-1))%(size-1);
        while(used[idx]&&key[idx]!=prefix) idx=(idx+1)%size;
        if(used[idx]){
            int len=i-val[idx];
            if(len>ans) ans=len;
        }else{
            used[idx]=1;
            key[idx]=prefix;
            val[idx]=i;
        }
    }
    free(key);
    free(val);
    free(used);
    return ans;
}

int main(){
    int n;
    if(scanf("%d",&n)!=1) return 0;
    int* nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    printf("%d\n",longestZeroSumSubarray(nums,n));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

int longestZeroSumSubarray(vector<int>& nums){
    unordered_map<int,int> first;
    first[0]=-1;
    int prefix=0,ans=0;
    for(int i=0;i<nums.size();i++){
        prefix+=nums[i];
        if(first.count(prefix)){
            ans=max(ans,i-first[prefix]);
        }else{
            first[prefix]=i;
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
        cout<<longestZeroSumSubarray(nums)<<"\n";
    }
    return 0;
}`
  },  'ca-m5': {
    python: `def preprocess(nums):
    first={0:-1}
    balance=0
    ans=0
    for i,x in enumerate(nums):
        balance+=1 if x==1 else -1
        if balance in first:
            ans=max(ans,i-first[balance])
        else:
            first[balance]=i
    return ans

n=int(input())
nums=list(map(int,input().split()))
q=int(input())
ans=preprocess(nums)
for _ in range(q):
    l,r=map(int,input().split())
    print(ans if l<=r else 0)`,
    java: `import java.util.*;
public class Main{
    public static int preprocess(int[] nums){
        HashMap<Integer,Integer> first=new HashMap<>();
        first.put(0,-1);
        int balance=0,ans=0;
        for(int i=0;i<nums.length;i++){
            balance+=nums[i]==1?1:-1;
            if(first.containsKey(balance)){
                ans=Math.max(ans,i-first.get(balance));
            }else{
                first.put(balance,i);
            }
        }
        return ans;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        if(sc.hasNextInt()){
            int n=sc.nextInt();
            int[] nums=new int[n];
            for(int i=0;i<n;i++) nums[i]=sc.nextInt();
            int q=sc.nextInt();
            int ans=preprocess(nums);
            while(q-->0){
                int l=sc.nextInt();
                int r=sc.nextInt();
                System.out.println(l<=r?ans:0);
            }
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int preprocess(int* nums,int n){
    int size=2*n+5;
    int* first=(int*)malloc(size*sizeof(int));
    for(int i=0;i<size;i++) first[i]=-2;
    int offset=n;
    first[offset]=-1;
    int balance=0,ans=0;
    for(int i=0;i<n;i++){
        balance+=nums[i]?1:-1;
        if(first[balance+offset]!=-2){
            int len=i-first[balance+offset];
            if(len>ans) ans=len;
        }else{
            first[balance+offset]=i;
        }
    }
    free(first);
    return ans;
}

int main(){
    int n;
    if(scanf("%d",&n)!=1) return 0;
    int* nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    int q;
    scanf("%d",&q);
    int ans=preprocess(nums,n);
    while(q--){
        int l,r;
        scanf("%d%d",&l,&r);
        printf("%d\n",l<=r?ans:0);
    }
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

int preprocess(vector<int>& nums){
    unordered_map<int,int> first;
    first[0]=-1;
    int balance=0,ans=0;
    for(int i=0;i<nums.size();i++){
        balance+=nums[i]?1:-1;
        if(first.count(balance)){
            ans=max(ans,i-first[balance]);
        }else{
            first[balance]=i;
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
        int q;
        cin>>q;
        int ans=preprocess(nums);
        while(q--){
            int l,r;
            cin>>l>>r;
            cout<<(l<=r?ans:0)<<"\n";
        }
    }
    return 0;
}`
  },  'ca-h1': {
    python: `def longest_balanced_submatrix(grid):
    if not grid:
        return 0
    n=len(grid)
    m=len(grid[0])
    ans=0
    for top in range(n):
        temp=[0]*m
        for bottom in range(top,n):
            for c in range(m):
                temp[c]+=1 if grid[bottom][c]==1 else -1
            first={0:-1}
            prefix=0
            for i,v in enumerate(temp):
                prefix+=v
                if prefix in first:
                    area=(bottom-top+1)*(i-first[prefix])
                    ans=max(ans,area)
                else:
                    first[prefix]=i
    return ans

n,m=map(int,input().split())
grid=[list(map(int,input().split())) for _ in range(n)]
print(longest_balanced_submatrix(grid))`,
    java: `import java.util.*;
public class Main{
    public static int longestBalancedSubmatrix(int[][] grid){
        int n=grid.length,m=grid[0].length,ans=0;
        for(int top=0;top<n;top++){
            int[] temp=new int[m];
            for(int bottom=top;bottom<n;bottom++){
                for(int c=0;c<m;c++) temp[c]+=grid[bottom][c]==1?1:-1;
                HashMap<Integer,Integer> first=new HashMap<>();
                first.put(0,-1);
                int prefix=0;
                for(int i=0;i<m;i++){
                    prefix+=temp[i];
                    if(first.containsKey(prefix)){
                        ans=Math.max(ans,(bottom-top+1)*(i-first.get(prefix)));
                    }else{
                        first.put(prefix,i);
                    }
                }
            }
        }
        return ans;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt(),m=sc.nextInt();
        int[][] grid=new int[n][m];
        for(int i=0;i<n;i++)
            for(int j=0;j<m;j++)
                grid[i][j]=sc.nextInt();
        System.out.println(longestBalancedSubmatrix(grid));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int longestBalancedSubmatrix(int** grid,int n,int m){
    int ans=0;
    int* temp=(int*)calloc(m,sizeof(int));
    for(int top=0;top<n;top++){
        for(int i=0;i<m;i++) temp[i]=0;
        for(int bottom=top;bottom<n;bottom++){
            for(int c=0;c<m;c++) temp[c]+=grid[bottom][c]?1:-1;
            int size=2*m+5;
            int* first=(int*)malloc(size*sizeof(int));
            for(int i=0;i<size;i++) first[i]=-2;
            int offset=m;
            first[offset]=-1;
            int prefix=0;
            for(int i=0;i<m;i++){
                prefix+=temp[i];
                if(first[prefix+offset]!=-2){
                    int area=(bottom-top+1)*(i-first[prefix+offset]);
                    if(area>ans) ans=area;
                }else{
                    first[prefix+offset]=i;
                }
            }
            free(first);
        }
    }
    free(temp);
    return ans;
}

int main(){
    int n,m;
    scanf("%d%d",&n,&m);
    int** grid=(int**)malloc(n*sizeof(int*));
    for(int i=0;i<n;i++){
        grid[i]=(int*)malloc(m*sizeof(int));
        for(int j=0;j<m;j++) scanf("%d",&grid[i][j]);
    }
    printf("%d\n",longestBalancedSubmatrix(grid,n,m));
    for(int i=0;i<n;i++) free(grid[i]);
    free(grid);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

int longestBalancedSubmatrix(vector<vector<int>>& grid){
    int n=grid.size(),m=grid[0].size(),ans=0;
    for(int top=0;top<n;top++){
        vector<int> temp(m,0);
        for(int bottom=top;bottom<n;bottom++){
            for(int c=0;c<m;c++) temp[c]+=grid[bottom][c]?1:-1;
            unordered_map<int,int> first;
            first[0]=-1;
            int prefix=0;
            for(int i=0;i<m;i++){
                prefix+=temp[i];
                if(first.count(prefix)){
                    ans=max(ans,(bottom-top+1)*(i-first[prefix]));
                }else{
                    first[prefix]=i;
                }
            }
        }
    }
    return ans;
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n,m;
    cin>>n>>m;
    vector<vector<int>> grid(n,vector<int>(m));
    for(int i=0;i<n;i++)
        for(int j=0;j<m;j++)
            cin>>grid[i][j];
    cout<<longestBalancedSubmatrix(grid)<<"\n";
    return 0;
}`
  },  'ca-h2': {
    python: `def longest_balanced(nums):
    first={0:-1}
    balance=0
    ans=0
    for i,x in enumerate(nums):
        balance+=1 if x==1 else -1
        if balance in first:
            ans=max(ans,i-first[balance])
        else:
            first[balance]=i
    return ans

n=int(input())
nums=list(map(int,input().split()))
q=int(input())
for _ in range(q):
    l,r=map(int,input().split())
    print(longest_balanced(nums[l:r+1]))`,
    java: `import java.util.*;
public class Main{
    public static int longestBalanced(int[] arr){
        HashMap<Integer,Integer> first=new HashMap<>();
        first.put(0,-1);
        int balance=0,ans=0;
        for(int i=0;i<arr.length;i++){
            balance+=arr[i]==1?1:-1;
            if(first.containsKey(balance)){
                ans=Math.max(ans,i-first.get(balance));
            }else{
                first.put(balance,i);
            }
        }
        return ans;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int[] nums=new int[n];
        for(int i=0;i<n;i++) nums[i]=sc.nextInt();
        int q=sc.nextInt();
        while(q-->0){
            int l=sc.nextInt();
            int r=sc.nextInt();
            int[] sub=Arrays.copyOfRange(nums,l,r+1);
            System.out.println(longestBalanced(sub));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int longestBalanced(int* arr,int n){
    int size=2*n+5;
    int* first=(int*)malloc(size*sizeof(int));
    for(int i=0;i<size;i++) first[i]=-2;
    int offset=n;
    first[offset]=-1;
    int balance=0,ans=0;
    for(int i=0;i<n;i++){
        balance+=arr[i]?1:-1;
        if(first[balance+offset]!=-2){
            int len=i-first[balance+offset];
            if(len>ans) ans=len;
        }else{
            first[balance+offset]=i;
        }
    }
    free(first);
    return ans;
}

int main(){
    int n;
    scanf("%d",&n);
    int* nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    int q;
    scanf("%d",&q);
    while(q--){
        int l,r;
        scanf("%d%d",&l,&r);
        printf("%d\n",longestBalanced(nums+l,r-l+1));
    }
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

int longestBalanced(vector<int>& arr){
    unordered_map<int,int> first;
    first[0]=-1;
    int balance=0,ans=0;
    for(int i=0;i<arr.size();i++){
        balance+=arr[i]?1:-1;
        if(first.count(balance)){
            ans=max(ans,i-first[balance]);
        }else{
            first[balance]=i;
        }
    }
    return ans;
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    cin>>n;
    vector<int> nums(n);
    for(int i=0;i<n;i++) cin>>nums[i];
    int q;
    cin>>q;
    while(q--){
        int l,r;
        cin>>l>>r;
        vector<int> sub(nums.begin()+l,nums.begin()+r+1);
        cout<<longestBalanced(sub)<<"\n";
    }
    return 0;
}`
  },  'ca-h3': {
    python: `def longest_balanced_circular(nums):
    n=len(nums)
    arr=nums+nums
    ans=0
    for s in range(n):
        first={0:-1}
        balance=0
        for i in range(s,s+n):
            balance+=1 if arr[i]==1 else -1
            idx=i-s
            if balance in first:
                ans=max(ans,idx-first[balance])
            else:
                first[balance]=idx
    return ans

n=int(input())
nums=list(map(int,input().split()))
print(longest_balanced_circular(nums))`,
    java: `import java.util.*;
public class Main{
    public static int longestBalancedCircular(int[] nums){
        int n=nums.length,ans=0;
        int[] arr=new int[2*n];
        for(int i=0;i<2*n;i++) arr[i]=nums[i%n];
        for(int s=0;s<n;s++){
            HashMap<Integer,Integer> first=new HashMap<>();
            first.put(0,-1);
            int balance=0;
            for(int i=s;i<s+n;i++){
                balance+=arr[i]==1?1:-1;
                int idx=i-s;
                if(first.containsKey(balance)){
                    ans=Math.max(ans,idx-first.get(balance));
                }else{
                    first.put(balance,idx);
                }
            }
        }
        return ans;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int[] nums=new int[n];
        for(int i=0;i<n;i++) nums[i]=sc.nextInt();
        System.out.println(longestBalancedCircular(nums));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int longestBalancedCircular(int* nums,int n){
    int* arr=(int*)malloc(2*n*sizeof(int));
    for(int i=0;i<2*n;i++) arr[i]=nums[i%n];
    int ans=0;
    for(int s=0;s<n;s++){
        int size=2*n+5;
        int* first=(int*)malloc(size*sizeof(int));
        for(int i=0;i<size;i++) first[i]=-2;
        int offset=n;
        first[offset]=-1;
        int balance=0;
        for(int i=s;i<s+n;i++){
            balance+=arr[i]?1:-1;
            int idx=i-s;
            if(first[balance+offset]!=-2){
                int len=idx-first[balance+offset];
                if(len>ans) ans=len;
            }else{
                first[balance+offset]=idx;
            }
        }
        free(first);
    }
    free(arr);
    return ans;
}

int main(){
    int n;
    scanf("%d",&n);
    int* nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    printf("%d\n",longestBalancedCircular(nums,n));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

int longestBalancedCircular(vector<int>& nums){
    int n=nums.size(),ans=0;
    vector<int> arr(2*n);
    for(int i=0;i<2*n;i++) arr[i]=nums[i%n];
    for(int s=0;s<n;s++){
        unordered_map<int,int> first;
        first[0]=-1;
        int balance=0;
        for(int i=s;i<s+n;i++){
            balance+=arr[i]?1:-1;
            int idx=i-s;
            if(first.count(balance)){
                ans=max(ans,idx-first[balance]);
            }else{
                first[balance]=idx;
            }
        }
    }
    return ans;
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    cin>>n;
    vector<int> nums(n);
    for(int i=0;i<n;i++) cin>>nums[i];
    cout<<longestBalancedCircular(nums)<<"\n";
    return 0;
}`
  },  'ca-h4': {
    python: `def longest_balanced(nums):
    first={0:-1}
    balance=0
    ans=0
    for i,x in enumerate(nums):
        balance+=1 if x==1 else -1
        if balance in first:
            ans=max(ans,i-first[balance])
        else:
            first[balance]=i
    return ans

n,q=map(int,input().split())
nums=list(map(int,input().split()))
for _ in range(q):
    idx,val=map(int,input().split())
    nums[idx]=val
    print(longest_balanced(nums))`,
    java: `import java.util.*;
public class Main{
    public static int longestBalanced(int[] nums){
        HashMap<Integer,Integer> first=new HashMap<>();
        first.put(0,-1);
        int balance=0,ans=0;
        for(int i=0;i<nums.length;i++){
            balance+=nums[i]==1?1:-1;
            if(first.containsKey(balance)){
                ans=Math.max(ans,i-first.get(balance));
            }else{
                first.put(balance,i);
            }
        }
        return ans;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt(),q=sc.nextInt();
        int[] nums=new int[n];
        for(int i=0;i<n;i++) nums[i]=sc.nextInt();
        while(q-->0){
            int idx=sc.nextInt();
            int val=sc.nextInt();
            nums[idx]=val;
            System.out.println(longestBalanced(nums));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int longestBalanced(int* nums,int n){
    int size=2*n+5;
    int* first=(int*)malloc(size*sizeof(int));
    for(int i=0;i<size;i++) first[i]=-2;
    int offset=n;
    first[offset]=-1;
    int balance=0,ans=0;
    for(int i=0;i<n;i++){
        balance+=nums[i]?1:-1;
        if(first[balance+offset]!=-2){
            int len=i-first[balance+offset];
            if(len>ans) ans=len;
        }else{
            first[balance+offset]=i;
        }
    }
    free(first);
    return ans;
}

int main(){
    int n,q;
    scanf("%d%d",&n,&q);
    int* nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    while(q--){
        int idx,val;
        scanf("%d%d",&idx,&val);
        nums[idx]=val;
        printf("%d\n",longestBalanced(nums,n));
    }
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

int longestBalanced(vector<int>& nums){
    unordered_map<int,int> first;
    first[0]=-1;
    int balance=0,ans=0;
    for(int i=0;i<nums.size();i++){
        balance+=nums[i]?1:-1;
        if(first.count(balance)){
            ans=max(ans,i-first[balance]);
        }else{
            first[balance]=i;
        }
    }
    return ans;
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n,q;
    cin>>n>>q;
    vector<int> nums(n);
    for(int i=0;i<n;i++) cin>>nums[i];
    while(q--){
        int idx,val;
        cin>>idx>>val;
        nums[idx]=val;
        cout<<longestBalanced(nums)<<"\n";
    }
    return 0;
}`
  },  'ca-h5': {
    python: `def max_non_overlapping_balanced(nums):
    first={0:-1}
    balance=0
    last=-1
    ans=0
    for i,x in enumerate(nums):
        balance+=1 if x==1 else -1
        if balance in first and first[balance]>=last:
            ans+=1
            last=i
            first={0:i}
            balance=0
        else:
            first.setdefault(balance,i)
    return ans

n=int(input())
nums=list(map(int,input().split()))
print(max_non_overlapping_balanced(nums))`,
    java: `import java.util.*;
public class Main{
    public static int maxNonOverlappingBalanced(int[] nums){
        HashMap<Integer,Integer> first=new HashMap<>();
        first.put(0,-1);
        int balance=0,last=-1,ans=0;
        for(int i=0;i<nums.length;i++){
            balance+=nums[i]==1?1:-1;
            if(first.containsKey(balance)&&first.get(balance)>=last){
                ans++;
                last=i;
                first.clear();
                first.put(0,i);
                balance=0;
            }else{
                first.putIfAbsent(balance,i);
            }
        }
        return ans;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int[] nums=new int[n];
        for(int i=0;i<n;i++) nums[i]=sc.nextInt();
        System.out.println(maxNonOverlappingBalanced(nums));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int maxNonOverlappingBalanced(int* nums,int n){
    int ans=0,last=-1,balance=0;
    int size=2*n+5;
    int* first=(int*)malloc(size*sizeof(int));
    int offset=n;
    for(int i=0;i<size;i++) first[i]=-2;
    first[offset]=-1;
    for(int i=0;i<n;i++){
        balance+=nums[i]?1:-1;
        if(first[balance+offset]!=-2&&first[balance+offset]>=last){
            ans++;
            last=i;
            for(int j=0;j<size;j++) first[j]=-2;
            first[offset]=i;
            balance=0;
        }else if(first[balance+offset]==-2){
            first[balance+offset]=i;
        }
    }
    free(first);
    return ans;
}

int main(){
    int n;
    scanf("%d",&n);
    int* nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    printf("%d\n",maxNonOverlappingBalanced(nums,n));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

int maxNonOverlappingBalanced(vector<int>& nums){
    unordered_map<int,int> first;
    first[0]=-1;
    int balance=0,last=-1,ans=0;
    for(int i=0;i<nums.size();i++){
        balance+=nums[i]?1:-1;
        if(first.count(balance)&&first[balance]>=last){
            ans++;
            last=i;
            first.clear();
            first[0]=i;
            balance=0;
        }else if(!first.count(balance)){
            first[balance]=i;
        }
    }
    return ans;
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    cin>>n;
    vector<int> nums(n);
    for(int i=0;i<n;i++) cin>>nums[i];
    cout<<maxNonOverlappingBalanced(nums)<<"\n";
    return 0;
}`
  }
};