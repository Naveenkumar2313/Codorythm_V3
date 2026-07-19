export const longestConsecutiveSolutions = {
  'lcs-e1': {
    python: `def longest_consecutive(nums):
    num_set = set(nums)
    longest = 0
    for num in num_set:
        if num - 1 not in num_set:
            current = num
            length = 1
            while current + 1 in num_set:
                current += 1
                length += 1
            longest = max(longest, length)
    return longest
n = int(input())
nums = list(map(int, input().split()))
print(longest_consecutive(nums))`,
    java: `import java.util.*;
public class Main {
    public static int longestConsecutive(int[] nums) {
        HashSet<Integer> set = new HashSet<>();
        for (int num : nums) set.add(num);
        int longest = 0;
        for (int num : set) {
            if (!set.contains(num - 1)) {
                int current = num;
                int length = 1;
                while (set.contains(current + 1)) {
                    current++;
                    length++;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            System.out.println(longestConsecutive(nums));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a, const void *b) {
    return (*(int *)a - *(int *)b);
}
int longestConsecutive(int *nums, int n) {
    if (n == 0) return 0;
    qsort(nums, n, sizeof(int), cmp);
    int longest = 1;
    int current = 1;
    for (int i = 1; i < n; i++) {
        if (nums[i] == nums[i - 1]) continue;

        if (nums[i] == nums[i - 1] + 1) {
            current++;
        } else {
            if (current > longest) longest = current;
            current = 1;
        }
    }
    if (current > longest) longest = current;
    return longest;
}
int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int *nums = (int *)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }
    printf("%d\n", longestConsecutive(nums, n));

    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;
int longestConsecutive(vector<int>& nums) {
    unordered_set<int> st(nums.begin(), nums.end());
    int longest = 0;
    for (int num : st) {
        if (!st.count(num - 1)) {
            int current = num;
            int length = 1;
            while (st.count(current + 1)) {
                current++;
                length++;
            }
            longest = max(longest, length);
        }
    }
    return longest;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if (cin >> n) {
        vector<int> nums(n);

        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }
        cout << longestConsecutive(nums) << "\n";
    }
    return 0;
}`
  },
'lcs-e2': {
  python: `def longest_sequence_start(nums):
    if not nums:
        return -1

    num_set = set(nums)
    best_start = nums[0]
    best_length = 0

    for num in num_set:
        if num - 1 not in num_set:
            current = num
            length = 1

            while current + 1 in num_set:
                current += 1
                length += 1

            if length > best_length or (length == best_length and num < best_start):
                best_length = length
                best_start = num

    return best_start

n = int(input())
nums = list(map(int, input().split()))
print(longest_sequence_start(nums))`,
  java: `import java.util.*;
public class Main {
    public static int longestSequenceStart(int[] nums) {
        if (nums.length == 0) return -1;

        HashSet<Integer> set = new HashSet<>();
        for (int num : nums) set.add(num);

        int bestStart = nums[0];
        int bestLength = 0;

        for (int num : set) {
            if (!set.contains(num - 1)) {
                int current = num;
                int length = 1;

                while (set.contains(current + 1)) {
                    current++;
                    length++;
                }

                if (length > bestLength || (length == bestLength && num < bestStart)) {
                    bestLength = length;
                    bestStart = num;
                }
            }
        }

        return bestStart;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];

            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }

            System.out.println(longestSequenceStart(nums));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>

int cmp(const void *a, const void *b) {
    return (*(int *)a - *(int *)b);
}

int longestSequenceStart(int *nums, int n) {
    if (n == 0) return -1;

    qsort(nums, n, sizeof(int), cmp);

    int bestStart = nums[0];
    int bestLength = 1;

    int currentStart = nums[0];
    int currentLength = 1;

    for (int i = 1; i < n; i++) {
        if (nums[i] == nums[i - 1]) continue;

        if (nums[i] == nums[i - 1] + 1) {
            currentLength++;
        } else {
            if (currentLength > bestLength || (currentLength == bestLength && currentStart < bestStart)) {
                bestLength = currentLength;
                bestStart = currentStart;
            }
            currentStart = nums[i];
            currentLength = 1;
        }
    }

    if (currentLength > bestLength || (currentLength == bestLength && currentStart < bestStart)) {
        bestStart = currentStart;
    }

    return bestStart;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1) return 0;

    int *nums = (int *)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++) {
        scanf("%d", &nums[i]);
    }

    printf("%d\n", longestSequenceStart(nums, n));

    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_set>

using namespace std;

int longestSequenceStart(vector<int>& nums) {
    if (nums.empty()) return -1;

    unordered_set<int> st(nums.begin(), nums.end());

    int bestStart = nums[0];
    int bestLength = 0;

    for (int num : st) {
        if (!st.count(num - 1)) {
            int current = num;
            int length = 1;

            while (st.count(current + 1)) {
                current++;
                length++;
            }

            if (length > bestLength || (length == bestLength && num < bestStart)) {
                bestLength = length;
                bestStart = num;
            }
        }
    }

    return bestStart;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;

    if (cin >> n) {
        vector<int> nums(n);

        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }

        cout << longestSequenceStart(nums) << "\n";
    }

    return 0;
}`
},'lcs-e3': {
  python: `def longest_sequence_end(nums):
    if not nums:
        return -1
    num_set = set(nums)
    best_start = nums[0]
    best_end = nums[0]
    best_length = 0
    for num in num_set:
        if num - 1 not in num_set:
            current = num
            length = 1
            while current + 1 in num_set:
                current += 1
                length += 1
            if length > best_length or (length == best_length and num < best_start):
                best_length = length
                best_start = num
                best_end = current
    return best_end
n = int(input())
nums = list(map(int, input().split()))
print(longest_sequence_end(nums))`,
  java: `import java.util.*;
public class Main {
    public static int longestSequenceEnd(int[] nums) {
        if (nums.length == 0) return -1;
        HashSet<Integer> set = new HashSet<>();
        for (int num : nums) set.add(num);
        int bestStart = nums[0], bestEnd = nums[0], bestLength = 0;
        for (int num : set) {
            if (!set.contains(num - 1)) {
                int current = num, length = 1;
                while (set.contains(current + 1)) {
                    current++;
                    length++;
                }
                if (length > bestLength || (length == bestLength && num < bestStart)) {
                    bestLength = length;
                    bestStart = num;
                    bestEnd = current;
                }
            }
        }
        return bestEnd;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            System.out.println(longestSequenceEnd(nums));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a,const void *b){return (*(int*)a-*(int*)b);}
int longestSequenceEnd(int *nums,int n){
    if(n==0) return -1;
    qsort(nums,n,sizeof(int),cmp);
    int bestStart=nums[0],bestEnd=nums[0],bestLength=1;
    int curStart=nums[0],curEnd=nums[0],curLength=1;
    for(int i=1;i<n;i++){
        if(nums[i]==nums[i-1]) continue;
        if(nums[i]==nums[i-1]+1){
            curEnd=nums[i];
            curLength++;
        }else{
            if(curLength>bestLength||(curLength==bestLength&&curStart<bestStart)){
                bestLength=curLength;
                bestStart=curStart;
                bestEnd=curEnd;
            }
            curStart=curEnd=nums[i];
            curLength=1;
        }
    }
    if(curLength>bestLength||(curLength==bestLength&&curStart<bestStart)){
        bestEnd=curEnd;
    }
    return bestEnd;
}
int main(){
    int n;
    if(scanf("%d",&n)!=1) return 0;
    int *nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    printf("%d\n",longestSequenceEnd(nums,n));
    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;
int longestSequenceEnd(vector<int>& nums){
    if(nums.empty()) return -1;
    unordered_set<int> st(nums.begin(),nums.end());
    int bestStart=nums[0],bestEnd=nums[0],bestLength=0;
    for(int num:st){
        if(!st.count(num-1)){
            int current=num,length=1;
            while(st.count(current+1)){
                current++;
                length++;
            }
            if(length>bestLength||(length==bestLength&&num<bestStart)){
                bestLength=length;
                bestStart=num;
                bestEnd=current;
            }
        }
    }
    return bestEnd;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if(cin>>n){
        vector<int> nums(n);
        for(int i=0;i<n;i++) cin>>nums[i];
        cout<<longestSequenceEnd(nums)<<"\n";
    }
    return 0;
}`
},'lcs-e4': {
  python: `def print_longest_sequence(nums):
    if not nums:
        return
    num_set=set(nums)
    best_start=nums[0]
    best_length=0
    for num in num_set:
        if num-1 not in num_set:
            current=num
            length=1
            while current+1 in num_set:
                current+=1
                length+=1
            if length>best_length or (length==best_length and num<best_start):
                best_length=length
                best_start=num
    for i in range(best_length):
        print(best_start+i,end=" ")
n=int(input())
nums=list(map(int,input().split()))
print_longest_sequence(nums)`,
  java: `import java.util.*;
public class Main{
    public static void printLongestSequence(int[] nums){
        if(nums.length==0) return;
        HashSet<Integer> set=new HashSet<>();
        for(int num:nums) set.add(num);
        int bestStart=nums[0],bestLength=0;
        for(int num:set){
            if(!set.contains(num-1)){
                int current=num,length=1;
                while(set.contains(current+1)){
                    current++;
                    length++;
                }
                if(length>bestLength||(length==bestLength&&num<bestStart)){
                    bestLength=length;
                    bestStart=num;
                }
            }
        }
        for(int i=0;i<bestLength;i++){
            System.out.print((bestStart+i)+" ");
        }
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        if(sc.hasNextInt()){
            int n=sc.nextInt();
            int[] nums=new int[n];
            for(int i=0;i<n;i++) nums[i]=sc.nextInt();
            printLongestSequence(nums);
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a,const void *b){return (*(int*)a-*(int*)b);}
void printLongestSequence(int *nums,int n){
    if(n==0) return;
    qsort(nums,n,sizeof(int),cmp);
    int bestStart=nums[0],bestLength=1;
    int curStart=nums[0],curLength=1;
    for(int i=1;i<n;i++){
        if(nums[i]==nums[i-1]) continue;
        if(nums[i]==nums[i-1]+1){
            curLength++;
        }else{
            if(curLength>bestLength||(curLength==bestLength&&curStart<bestStart)){
                bestLength=curLength;
                bestStart=curStart;
            }
            curStart=nums[i];
            curLength=1;
        }
    }
    if(curLength>bestLength||(curLength==bestLength&&curStart<bestStart)){
        bestLength=curLength;
        bestStart=curStart;
    }
    for(int i=0;i<bestLength;i++) printf("%d ",bestStart+i);
}
int main(){
    int n;
    if(scanf("%d",&n)!=1) return 0;
    int *nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    printLongestSequence(nums,n);
    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;
void printLongestSequence(vector<int>& nums){
    if(nums.empty()) return;
    unordered_set<int> st(nums.begin(),nums.end());
    int bestStart=nums[0],bestLength=0;
    for(int num:st){
        if(!st.count(num-1)){
            int current=num,length=1;
            while(st.count(current+1)){
                current++;
                length++;
            }
            if(length>bestLength||(length==bestLength&&num<bestStart)){
                bestLength=length;
                bestStart=num;
            }
        }
    }
    for(int i=0;i<bestLength;i++) cout<<bestStart+i<<" ";
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if(cin>>n){
        vector<int> nums(n);
        for(int i=0;i<n;i++) cin>>nums[i];
        printLongestSequence(nums);
    }
    return 0;
}`
},'lcs-e5': {
  python: `def is_consecutive(nums):
    if not nums:
        return False
    num_set=set(nums)
    if len(num_set)!=len(nums):
        return False
    mn=min(nums)
    mx=max(nums)
    if mx-mn+1!=len(nums):
        return False
    for i in range(mn,mx+1):
        if i not in num_set:
            return False
    return True
n=int(input())
nums=list(map(int,input().split()))
print(str(is_consecutive(nums)).lower())`,
  java: `import java.util.*;
public class Main{
    public static boolean isConsecutive(int[] nums){
        if(nums.length==0) return false;
        HashSet<Integer> set=new HashSet<>();
        int mn=Integer.MAX_VALUE,mx=Integer.MIN_VALUE;
        for(int num:nums){
            if(set.contains(num)) return false;
            set.add(num);
            mn=Math.min(mn,num);
            mx=Math.max(mx,num);
        }
        if(mx-mn+1!=nums.length) return false;
        for(int i=mn;i<=mx;i++){
            if(!set.contains(i)) return false;
        }
        return true;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        if(sc.hasNextInt()){
            int n=sc.nextInt();
            int[] nums=new int[n];
            for(int i=0;i<n;i++) nums[i]=sc.nextInt();
            System.out.println(isConsecutive(nums));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a,const void *b){return (*(int*)a-*(int*)b);}
int isConsecutive(int *nums,int n){
    if(n==0) return 0;
    qsort(nums,n,sizeof(int),cmp);
    for(int i=1;i<n;i++){
        if(nums[i]==nums[i-1]) return 0;
        if(nums[i]!=nums[i-1]+1) return 0;
    }
    return 1;
}
int main(){
    int n;
    if(scanf("%d",&n)!=1) return 0;
    int *nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    printf("%s\n",isConsecutive(nums,n)?"true":"false");
    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
#include <algorithm>
using namespace std;
bool isConsecutive(vector<int>& nums){
    if(nums.empty()) return false;
    unordered_set<int> st;
    int mn=nums[0],mx=nums[0];
    for(int num:nums){
        if(st.count(num)) return false;
        st.insert(num);
        mn=min(mn,num);
        mx=max(mx,num);
    }
    if(mx-mn+1!=nums.size()) return false;
    for(int i=mn;i<=mx;i++){
        if(!st.count(i)) return false;
    }
    return true;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if(cin>>n){
        vector<int> nums(n);
        for(int i=0;i<n;i++) cin>>nums[i];
        cout<<(isConsecutive(nums)?"true":"false")<<"\n";
    }
    return 0;
}`
},'lcs-m1': {
  python: `def longest_consecutive(nums):
    num_set=set(nums)
    longest=0
    for num in num_set:
        if num-1 not in num_set:
            current=num
            length=1
            while current+1 in num_set:
                current+=1
                length+=1
            longest=max(longest,length)
    return longest
t=int(input())
for _ in range(t):
    n=int(input())
    nums=list(map(int,input().split()))
    print(longest_consecutive(nums))`,
  java: `import java.util.*;
public class Main{
    public static int longestConsecutive(int[] nums){
        HashSet<Integer> set=new HashSet<>();
        for(int num:nums) set.add(num);
        int longest=0;
        for(int num:set){
            if(!set.contains(num-1)){
                int current=num,length=1;
                while(set.contains(current+1)){
                    current++;
                    length++;
                }
                longest=Math.max(longest,length);
            }
        }
        return longest;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int t=sc.nextInt();
        while(t-->0){
            int n=sc.nextInt();
            int[] nums=new int[n];
            for(int i=0;i<n;i++) nums[i]=sc.nextInt();
            System.out.println(longestConsecutive(nums));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a,const void *b){return (*(int*)a-*(int*)b);}
int longestConsecutive(int *nums,int n){
    if(n==0) return 0;
    qsort(nums,n,sizeof(int),cmp);
    int longest=1,current=1;
    for(int i=1;i<n;i++){
        if(nums[i]==nums[i-1]) continue;
        if(nums[i]==nums[i-1]+1) current++;
        else{
            if(current>longest) longest=current;
            current=1;
        }
    }
    if(current>longest) longest=current;
    return longest;
}
int main(){
    int t;
    scanf("%d",&t);
    while(t--){
        int n;
        scanf("%d",&n);
        int *nums=(int*)malloc(n*sizeof(int));
        for(int i=0;i<n;i++) scanf("%d",&nums[i]);
        printf("%d\n",longestConsecutive(nums,n));
        free(nums);
    }
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;
int longestConsecutive(vector<int>& nums){
    unordered_set<int> st(nums.begin(),nums.end());
    int longest=0;
    for(int num:st){
        if(!st.count(num-1)){
            int current=num,length=1;
            while(st.count(current+1)){
                current++;
                length++;
            }
            longest=max(longest,length);
        }
    }
    return longest;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int t;
    cin>>t;
    while(t--){
        int n;
        cin>>n;
        vector<int> nums(n);
        for(int i=0;i<n;i++) cin>>nums[i];
        cout<<longestConsecutive(nums)<<"\n";
    }
    return 0;
}`
},'lcs-m2': {
  python: `def longest_sequence(nums):
    num_set=set(nums)
    best_start=0
    best_length=0
    for num in num_set:
        if num-1 not in num_set:
            current=num
            length=1
            while current+1 in num_set:
                current+=1
                length+=1
            if length>best_length or (length==best_length and num<best_start):
                best_length=length
                best_start=num
    print(best_length)
    for i in range(best_length):
        print(best_start+i,end=" ")
n=int(input())
nums=list(map(int,input().split()))
longest_sequence(nums)`,
  java: `import java.util.*;
public class Main{
    public static void longestSequence(int[] nums){
        HashSet<Integer> set=new HashSet<>();
        for(int num:nums) set.add(num);
        int bestStart=0,bestLength=0;
        for(int num:set){
            if(!set.contains(num-1)){
                int current=num,length=1;
                while(set.contains(current+1)){
                    current++;
                    length++;
                }
                if(length>bestLength||(length==bestLength&&num<bestStart)){
                    bestLength=length;
                    bestStart=num;
                }
            }
        }
        System.out.println(bestLength);
        for(int i=0;i<bestLength;i++) System.out.print((bestStart+i)+" ");
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int[] nums=new int[n];
        for(int i=0;i<n;i++) nums[i]=sc.nextInt();
        longestSequence(nums);
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a,const void *b){return (*(int*)a-*(int*)b);}
void longestSequence(int *nums,int n){
    qsort(nums,n,sizeof(int),cmp);
    int bestStart=nums[0],bestLength=1;
    int curStart=nums[0],curLength=1;
    for(int i=1;i<n;i++){
        if(nums[i]==nums[i-1]) continue;
        if(nums[i]==nums[i-1]+1){
            curLength++;
        }else{
            if(curLength>bestLength||(curLength==bestLength&&curStart<bestStart)){
                bestLength=curLength;
                bestStart=curStart;
            }
            curStart=nums[i];
            curLength=1;
        }
    }
    if(curLength>bestLength||(curLength==bestLength&&curStart<bestStart)){
        bestLength=curLength;
        bestStart=curStart;
    }
    printf("%d\n",bestLength);
    for(int i=0;i<bestLength;i++) printf("%d ",bestStart+i);
}
int main(){
    int n;
    scanf("%d",&n);
    int *nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    longestSequence(nums,n);
    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;
void longestSequence(vector<int>& nums){
    unordered_set<int> st(nums.begin(),nums.end());
    int bestStart=0,bestLength=0;
    for(int num:st){
        if(!st.count(num-1)){
            int current=num,length=1;
            while(st.count(current+1)){
                current++;
                length++;
            }
            if(length>bestLength||(length==bestLength&&num<bestStart)){
                bestLength=length;
                bestStart=num;
            }
        }
    }
    cout<<bestLength<<"\n";
    for(int i=0;i<bestLength;i++) cout<<bestStart+i<<" ";
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin>>n;
    vector<int> nums(n);
    for(int i=0;i<n;i++) cin>>nums[i];
    longestSequence(nums);
    return 0;
}`
},'lcs-m3': {
  python: `def count_sequences(nums):
    num_set=set(nums)
    count=0
    for num in num_set:
        if num-1 not in num_set:
            current=num
            while current+1 in num_set:
                current+=1
            count+=1
    return count
n=int(input())
nums=list(map(int,input().split()))
print(count_sequences(nums))`,
  java: `import java.util.*;
public class Main{
    public static int countSequences(int[] nums){
        HashSet<Integer> set=new HashSet<>();
        for(int num:nums) set.add(num);
        int count=0;
        for(int num:set){
            if(!set.contains(num-1)){
                while(set.contains(num+1)) num++;
                count++;
            }
        }
        return count;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int[] nums=new int[n];
        for(int i=0;i<n;i++) nums[i]=sc.nextInt();
        System.out.println(countSequences(nums));
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a,const void *b){return (*(int*)a-*(int*)b);}
int countSequences(int *nums,int n){
    if(n==0) return 0;
    qsort(nums,n,sizeof(int),cmp);
    int count=1;
    for(int i=1;i<n;i++){
        if(nums[i]==nums[i-1]) continue;
        if(nums[i]!=nums[i-1]+1) count++;
    }
    return count;
}
int main(){
    int n;
    scanf("%d",&n);
    int *nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    printf("%d\n",countSequences(nums,n));
    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;
int countSequences(vector<int>& nums){
    unordered_set<int> st(nums.begin(),nums.end());
    int count=0;
    for(int num:st){
        if(!st.count(num-1)){
            while(st.count(num+1)) num++;
            count++;
        }
    }
    return count;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin>>n;
    vector<int> nums(n);
    for(int i=0;i<n;i++) cin>>nums[i];
    cout<<countSequences(nums)<<"\n";
    return 0;
}`
},'lcs-m4': {
  python: `def sum_longest_sequence(nums):
    num_set=set(nums)
    best_start=0
    best_length=0
    for num in num_set:
        if num-1 not in num_set:
            current=num
            length=1
            while current+1 in num_set:
                current+=1
                length+=1
            if length>best_length or (length==best_length and num<best_start):
                best_length=length
                best_start=num
    total=0
    for i in range(best_length):
        total+=best_start+i
    return total
n=int(input())
nums=list(map(int,input().split()))
print(sum_longest_sequence(nums))`,
  java: `import java.util.*;
public class Main{
    public static int sumLongestSequence(int[] nums){
        HashSet<Integer> set=new HashSet<>();
        for(int num:nums) set.add(num);
        int bestStart=0,bestLength=0;
        for(int num:set){
            if(!set.contains(num-1)){
                int current=num,length=1;
                while(set.contains(current+1)){
                    current++;
                    length++;
                }
                if(length>bestLength||(length==bestLength&&num<bestStart)){
                    bestLength=length;
                    bestStart=num;
                }
            }
        }
        int sum=0;
        for(int i=0;i<bestLength;i++) sum+=bestStart+i;
        return sum;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int[] nums=new int[n];
        for(int i=0;i<n;i++) nums[i]=sc.nextInt();
        System.out.println(sumLongestSequence(nums));
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a,const void *b){return (*(int*)a-*(int*)b);}
int sumLongestSequence(int *nums,int n){
    qsort(nums,n,sizeof(int),cmp);
    int bestStart=nums[0],bestLength=1;
    int curStart=nums[0],curLength=1;
    for(int i=1;i<n;i++){
        if(nums[i]==nums[i-1]) continue;
        if(nums[i]==nums[i-1]+1){
            curLength++;
        }else{
            if(curLength>bestLength||(curLength==bestLength&&curStart<bestStart)){
                bestLength=curLength;
                bestStart=curStart;
            }
            curStart=nums[i];
            curLength=1;
        }
    }
    if(curLength>bestLength||(curLength==bestLength&&curStart<bestStart)){
        bestLength=curLength;
        bestStart=curStart;
    }
    int sum=0;
    for(int i=0;i<bestLength;i++) sum+=bestStart+i;
    return sum;
}
int main(){
    int n;
    scanf("%d",&n);
    int *nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    printf("%d\n",sumLongestSequence(nums,n));
    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;
int sumLongestSequence(vector<int>& nums){
    unordered_set<int> st(nums.begin(),nums.end());
    int bestStart=0,bestLength=0;
    for(int num:st){
        if(!st.count(num-1)){
            int current=num,length=1;
            while(st.count(current+1)){
                current++;
                length++;
            }
            if(length>bestLength||(length==bestLength&&num<bestStart)){
                bestLength=length;
                bestStart=num;
            }
        }
    }
    int sum=0;
    for(int i=0;i<bestLength;i++) sum+=bestStart+i;
    return sum;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin>>n;
    vector<int> nums(n);
    for(int i=0;i<n;i++) cin>>nums[i];
    cout<<sumLongestSequence(nums)<<"\n";
    return 0;
}`
},'lcs-m5': {
  python: `def longest_even_sequence(nums):
    even_nums=[x for x in nums if x%2==0]
    num_set=set(even_nums)
    longest=0
    for num in num_set:
        if num-2 not in num_set:
            current=num
            length=1
            while current+2 in num_set:
                current+=2
                length+=1
            longest=max(longest,length)
    return longest
n=int(input())
nums=list(map(int,input().split()))
print(longest_even_sequence(nums))`,
  java: `import java.util.*;
public class Main{
    public static int longestEvenSequence(int[] nums){
        HashSet<Integer> set=new HashSet<>();
        for(int num:nums) if(num%2==0) set.add(num);
        int longest=0;
        for(int num:set){
            if(!set.contains(num-2)){
                int current=num,length=1;
                while(set.contains(current+2)){
                    current+=2;
                    length++;
                }
                longest=Math.max(longest,length);
            }
        }
        return longest;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int[] nums=new int[n];
        for(int i=0;i<n;i++) nums[i]=sc.nextInt();
        System.out.println(longestEvenSequence(nums));
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a,const void *b){return (*(int*)a-*(int*)b);}
int longestEvenSequence(int *nums,int n){
    int *even=(int*)malloc(n*sizeof(int));
    int m=0;
    for(int i=0;i<n;i++) if(nums[i]%2==0) even[m++]=nums[i];
    if(m==0){
        free(even);
        return 0;
    }
    qsort(even,m,sizeof(int),cmp);
    int longest=1,current=1;
    for(int i=1;i<m;i++){
        if(even[i]==even[i-1]) continue;
        if(even[i]==even[i-1]+2){
            current++;
        }else{
            if(current>longest) longest=current;
            current=1;
        }
    }
    if(current>longest) longest=current;
    free(even);
    return longest;
}
int main(){
    int n;
    scanf("%d",&n);
    int *nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    printf("%d\n",longestEvenSequence(nums,n));
    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;
int longestEvenSequence(vector<int>& nums){
    unordered_set<int> st;
    for(int num:nums) if(num%2==0) st.insert(num);
    int longest=0;
    for(int num:st){
        if(!st.count(num-2)){
            int current=num,length=1;
            while(st.count(current+2)){
                current+=2;
                length++;
            }
            longest=max(longest,length);
        }
    }
    return longest;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin>>n;
    vector<int> nums(n);
    for(int i=0;i<n;i++) cin>>nums[i];
    cout<<longestEvenSequence(nums)<<"\n";
    return 0;
}`
},'lcs-h1': {
  python: `def longest_consecutive(nums):
    num_set=set(nums)
    longest=0
    for num in num_set:
        if num-1 not in num_set:
            current=num
            length=1
            while current+1 in num_set:
                current+=1
                length+=1
            longest=max(longest,length)
    return longest
q=int(input())
for _ in range(q):
    n=int(input())
    nums=list(map(int,input().split()))
    print(longest_consecutive(nums))`,
  java: `import java.util.*;
public class Main{
    public static int longestConsecutive(int[] nums){
        HashSet<Integer> set=new HashSet<>();
        for(int num:nums) set.add(num);
        int longest=0;
        for(int num:set){
            if(!set.contains(num-1)){
                int current=num,length=1;
                while(set.contains(current+1)){
                    current++;
                    length++;
                }
                longest=Math.max(longest,length);
            }
        }
        return longest;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int q=sc.nextInt();
        while(q-->0){
            int n=sc.nextInt();
            int[] nums=new int[n];
            for(int i=0;i<n;i++) nums[i]=sc.nextInt();
            System.out.println(longestConsecutive(nums));
        }
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a,const void *b){return (*(int*)a-*(int*)b);}
int longestConsecutive(int *nums,int n){
    if(n==0) return 0;
    qsort(nums,n,sizeof(int),cmp);
    int longest=1,current=1;
    for(int i=1;i<n;i++){
        if(nums[i]==nums[i-1]) continue;
        if(nums[i]==nums[i-1]+1){
            current++;
        }else{
            if(current>longest) longest=current;
            current=1;
        }
    }
    if(current>longest) longest=current;
    return longest;
}
int main(){
    int q;
    scanf("%d",&q);
    while(q--){
        int n;
        scanf("%d",&n);
        int *nums=(int*)malloc(n*sizeof(int));
        for(int i=0;i<n;i++) scanf("%d",&nums[i]);
        printf("%d\n",longestConsecutive(nums,n));
        free(nums);
    }
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;
int longestConsecutive(vector<int>& nums){
    unordered_set<int> st(nums.begin(),nums.end());
    int longest=0;
    for(int num:st){
        if(!st.count(num-1)){
            int current=num,length=1;
            while(st.count(current+1)){
                current++;
                length++;
            }
            longest=max(longest,length);
        }
    }
    return longest;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int q;
    cin>>q;
    while(q--){
        int n;
        cin>>n;
        vector<int> nums(n);
        for(int i=0;i<n;i++) cin>>nums[i];
        cout<<longestConsecutive(nums)<<"\n";
    }
    return 0;
}`
},'lcs-h2': {
  python: `def longest_sequence_product(nums):
    num_set=set(nums)
    best_start=0
    best_length=0
    for num in num_set:
        if num-1 not in num_set:
            current=num
            length=1
            while current+1 in num_set:
                current+=1
                length+=1
            if length>best_length or (length==best_length and num<best_start):
                best_length=length
                best_start=num
    product=1
    for i in range(best_length):
        product*=best_start+i
    return product
n=int(input())
nums=list(map(int,input().split()))
print(longest_sequence_product(nums))`,
  java: `import java.util.*;
public class Main{
    public static long longestSequenceProduct(int[] nums){
        HashSet<Integer> set=new HashSet<>();
        for(int num:nums) set.add(num);
        int bestStart=0,bestLength=0;
        for(int num:set){
            if(!set.contains(num-1)){
                int current=num,length=1;
                while(set.contains(current+1)){
                    current++;
                    length++;
                }
                if(length>bestLength||(length==bestLength&&num<bestStart)){
                    bestLength=length;
                    bestStart=num;
                }
            }
        }
        long product=1;
        for(int i=0;i<bestLength;i++) product*=bestStart+i;
        return product;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int[] nums=new int[n];
        for(int i=0;i<n;i++) nums[i]=sc.nextInt();
        System.out.println(longestSequenceProduct(nums));
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a,const void *b){return (*(int*)a-*(int*)b);}
long long longestSequenceProduct(int *nums,int n){
    qsort(nums,n,sizeof(int),cmp);
    int bestStart=nums[0],bestLength=1;
    int curStart=nums[0],curLength=1;
    for(int i=1;i<n;i++){
        if(nums[i]==nums[i-1]) continue;
        if(nums[i]==nums[i-1]+1){
            curLength++;
        }else{
            if(curLength>bestLength||(curLength==bestLength&&curStart<bestStart)){
                bestLength=curLength;
                bestStart=curStart;
            }
            curStart=nums[i];
            curLength=1;
        }
    }
    if(curLength>bestLength||(curLength==bestLength&&curStart<bestStart)){
        bestLength=curLength;
        bestStart=curStart;
    }
    long long product=1;
    for(int i=0;i<bestLength;i++) product*=bestStart+i;
    return product;
}
int main(){
    int n;
    scanf("%d",&n);
    int *nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    printf("%lld\n",longestSequenceProduct(nums,n));
    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;
long long longestSequenceProduct(vector<int>& nums){
    unordered_set<int> st(nums.begin(),nums.end());
    int bestStart=0,bestLength=0;
    for(int num:st){
        if(!st.count(num-1)){
            int current=num,length=1;
            while(st.count(current+1)){
                current++;
                length++;
            }
            if(length>bestLength||(length==bestLength&&num<bestStart)){
                bestLength=length;
                bestStart=num;
            }
        }
    }
    long long product=1;
    for(int i=0;i<bestLength;i++) product*=bestStart+i;
    return product;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin>>n;
    vector<int> nums(n);
    for(int i=0;i<n;i++) cin>>nums[i];
    cout<<longestSequenceProduct(nums)<<"\n";
    return 0;
}`
},'lcs-h3': {
  python: `def longest_negative_sequence(nums):
    negatives=[x for x in nums if x<0]
    num_set=set(negatives)
    longest=0
    for num in num_set:
        if num-1 not in num_set:
            current=num
            length=1
            while current+1 in num_set:
                current+=1
                length+=1
            longest=max(longest,length)
    return longest
n=int(input())
nums=list(map(int,input().split()))
print(longest_negative_sequence(nums))`,
  java: `import java.util.*;
public class Main{
    public static int longestNegativeSequence(int[] nums){
        HashSet<Integer> set=new HashSet<>();
        for(int num:nums) if(num<0) set.add(num);
        int longest=0;
        for(int num:set){
            if(!set.contains(num-1)){
                int current=num,length=1;
                while(set.contains(current+1)){
                    current++;
                    length++;
                }
                longest=Math.max(longest,length);
            }
        }
        return longest;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int[] nums=new int[n];
        for(int i=0;i<n;i++) nums[i]=sc.nextInt();
        System.out.println(longestNegativeSequence(nums));
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a,const void *b){return (*(int*)a-*(int*)b);}
int longestNegativeSequence(int *nums,int n){
    int *neg=(int*)malloc(n*sizeof(int));
    int m=0;
    for(int i=0;i<n;i++) if(nums[i]<0) neg[m++]=nums[i];
    if(m==0){
        free(neg);
        return 0;
    }
    qsort(neg,m,sizeof(int),cmp);
    int longest=1,current=1;
    for(int i=1;i<m;i++){
        if(neg[i]==neg[i-1]) continue;
        if(neg[i]==neg[i-1]+1){
            current++;
        }else{
            if(current>longest) longest=current;
            current=1;
        }
    }
    if(current>longest) longest=current;
    free(neg);
    return longest;
}
int main(){
    int n;
    scanf("%d",&n);
    int *nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    printf("%d\n",longestNegativeSequence(nums,n));
    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;
int longestNegativeSequence(vector<int>& nums){
    unordered_set<int> st;
    for(int num:nums) if(num<0) st.insert(num);
    int longest=0;
    for(int num:st){
        if(!st.count(num-1)){
            int current=num,length=1;
            while(st.count(current+1)){
                current++;
                length++;
            }
            longest=max(longest,length);
        }
    }
    return longest;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin>>n;
    vector<int> nums(n);
    for(int i=0;i<n;i++) cin>>nums[i];
    cout<<longestNegativeSequence(nums)<<"\n";
    return 0;
}`
},'lcs-h4': {
  python: `def longest_odd_sequence(nums):
    odd_nums=[x for x in nums if x%2!=0]
    num_set=set(odd_nums)
    longest=0
    for num in num_set:
        if num-2 not in num_set:
            current=num
            length=1
            while current+2 in num_set:
                current+=2
                length+=1
            longest=max(longest,length)
    return longest
n=int(input())
nums=list(map(int,input().split()))
print(longest_odd_sequence(nums))`,
  java: `import java.util.*;
public class Main{
    public static int longestOddSequence(int[] nums){
        HashSet<Integer> set=new HashSet<>();
        for(int num:nums) if(num%2!=0) set.add(num);
        int longest=0;
        for(int num:set){
            if(!set.contains(num-2)){
                int current=num,length=1;
                while(set.contains(current+2)){
                    current+=2;
                    length++;
                }
                longest=Math.max(longest,length);
            }
        }
        return longest;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int[] nums=new int[n];
        for(int i=0;i<n;i++) nums[i]=sc.nextInt();
        System.out.println(longestOddSequence(nums));
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a,const void *b){return (*(int*)a-*(int*)b);}
int longestOddSequence(int *nums,int n){
    int *odd=(int*)malloc(n*sizeof(int));
    int m=0;
    for(int i=0;i<n;i++) if(nums[i]%2!=0) odd[m++]=nums[i];
    if(m==0){
        free(odd);
        return 0;
    }
    qsort(odd,m,sizeof(int),cmp);
    int longest=1,current=1;
    for(int i=1;i<m;i++){
        if(odd[i]==odd[i-1]) continue;
        if(odd[i]==odd[i-1]+2){
            current++;
        }else{
            if(current>longest) longest=current;
            current=1;
        }
    }
    if(current>longest) longest=current;
    free(odd);
    return longest;
}
int main(){
    int n;
    scanf("%d",&n);
    int *nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    printf("%d\n",longestOddSequence(nums,n));
    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;
int longestOddSequence(vector<int>& nums){
    unordered_set<int> st;
    for(int num:nums) if(num%2!=0) st.insert(num);
    int longest=0;
    for(int num:st){
        if(!st.count(num-2)){
            int current=num,length=1;
            while(st.count(current+2)){
                current+=2;
                length++;
            }
            longest=max(longest,length);
        }
    }
    return longest;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin>>n;
    vector<int> nums(n);
    for(int i=0;i<n;i++) cin>>nums[i];
    cout<<longestOddSequence(nums)<<"\n";
    return 0;
}`
},'lcs-h5': {
  python: `def longest_positive_sequence(nums):
    positives=[x for x in nums if x>0]
    num_set=set(positives)
    longest=0
    for num in num_set:
        if num-1 not in num_set:
            current=num
            length=1
            while current+1 in num_set:
                current+=1
                length+=1
            longest=max(longest,length)
    return longest
n=int(input())
nums=list(map(int,input().split()))
print(longest_positive_sequence(nums))`,
  java: `import java.util.*;
public class Main{
    public static int longestPositiveSequence(int[] nums){
        HashSet<Integer> set=new HashSet<>();
        for(int num:nums) if(num>0) set.add(num);
        int longest=0;
        for(int num:set){
            if(!set.contains(num-1)){
                int current=num,length=1;
                while(set.contains(current+1)){
                    current++;
                    length++;
                }
                longest=Math.max(longest,length);
            }
        }
        return longest;
    }
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int[] nums=new int[n];
        for(int i=0;i<n;i++) nums[i]=sc.nextInt();
        System.out.println(longestPositiveSequence(nums));
    }
}`,
  c: `#include <stdio.h>
#include <stdlib.h>
int cmp(const void *a,const void *b){return (*(int*)a-*(int*)b);}
int longestPositiveSequence(int *nums,int n){
    int *pos=(int*)malloc(n*sizeof(int));
    int m=0;
    for(int i=0;i<n;i++) if(nums[i]>0) pos[m++]=nums[i];
    if(m==0){
        free(pos);
        return 0;
    }
    qsort(pos,m,sizeof(int),cmp);
    int longest=1,current=1;
    for(int i=1;i<m;i++){
        if(pos[i]==pos[i-1]) continue;
        if(pos[i]==pos[i-1]+1){
            current++;
        }else{
            if(current>longest) longest=current;
            current=1;
        }
    }
    if(current>longest) longest=current;
    free(pos);
    return longest;
}
int main(){
    int n;
    scanf("%d",&n);
    int *nums=(int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d",&nums[i]);
    printf("%d\n",longestPositiveSequence(nums,n));
    free(nums);
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;
int longestPositiveSequence(vector<int>& nums){
    unordered_set<int> st;
    for(int num:nums) if(num>0) st.insert(num);
    int longest=0;
    for(int num:st){
        if(!st.count(num-1)){
            int current=num,length=1;
            while(st.count(current+1)){
                current++;
                length++;
            }
            longest=max(longest,length);
        }
    }
    return longest;
}
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin>>n;
    vector<int> nums(n);
    for(int i=0;i<n;i++) cin>>nums[i];
    cout<<longestPositiveSequence(nums)<<"\n";
    return 0;
}`
}
};