export const FMFDSSOlutions={
    'fm-e1': {
  python: `import heapq

def running_median(stream):
    left = []
    right = []
    result = []

    for num in stream:
        if not left or num <= -left[0]:
            heapq.heappush(left, -num)
        else:
            heapq.heappush(right, num)

        if len(left) > len(right) + 1:
            heapq.heappush(right, -heapq.heappop(left))
        elif len(right) > len(left):
            heapq.heappush(left, -heapq.heappop(right))

        if len(left) == len(right):
            median = (-left[0] + right[0]) / 2.0
        else:
            median = float(-left[0])

        result.append(median)

    return result

n = int(input())
stream = list(map(int, input().split())) if n > 0 else []

result = running_median(stream)

for median in result:
    print(f"{median:.1f}")`,

  java: `import java.util.*;

public class Main {

    public static List<Double> runningMedian(int[] stream) {
        PriorityQueue<Integer> left = new PriorityQueue<>(Collections.reverseOrder());
        PriorityQueue<Integer> right = new PriorityQueue<>();

        List<Double> result = new ArrayList<>();

        for (int num : stream) {

            if (left.isEmpty() || num <= left.peek()) {
                left.offer(num);
            } else {
                right.offer(num);
            }

            if (left.size() > right.size() + 1) {
                right.offer(left.poll());
            } else if (right.size() > left.size()) {
                left.offer(right.poll());
            }

            if (left.size() == right.size()) {
                result.add((left.peek() + right.peek()) / 2.0);
            } else {
                result.add((double) left.peek());
            }
        }

        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[] stream = new int[n];

        for (int i = 0; i < n; i++) {
            stream[i] = sc.nextInt();
        }

        List<Double> ans = runningMedian(stream);

        for (double median : ans) {
            System.out.printf(Locale.US, "%.1f%n", median);
        }
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>

void insertSorted(int arr[], int *size, int value) {
    int i = *size - 1;
    while (i >= 0 && arr[i] > value) {
        arr[i + 1] = arr[i];
        i--;
    }
    arr[i + 1] = value;
    (*size)++;
}

double* runningMedian(int* stream, int n) {
    int *arr = (int*)malloc(n * sizeof(int));
    double *result = (double*)malloc(n * sizeof(double));

    int size = 0;

    for (int i = 0; i < n; i++) {
        insertSorted(arr, &size, stream[i]);

        if (size % 2 == 1) {
            result[i] = arr[size / 2];
        } else {
            result[i] = (arr[size / 2 - 1] + arr[size / 2]) / 2.0;
        }
    }

    free(arr);
    return result;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int *stream = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
        scanf("%d", &stream[i]);

    double *result = runningMedian(stream, n);

    for (int i = 0; i < n; i++)
        printf("%.1f\n", result[i]);

    free(result);
    free(stream);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <iomanip>

using namespace std;

vector<double> runningMedian(vector<int>& stream) {

    priority_queue<int> left;
    priority_queue<int, vector<int>, greater<int>> right;

    vector<double> result;

    for (int num : stream) {

        if (left.empty() || num <= left.top())
            left.push(num);
        else
            right.push(num);

        if (left.size() > right.size() + 1) {
            right.push(left.top());
            left.pop();
        } else if (right.size() > left.size()) {
            left.push(right.top());
            right.pop();
        }

        if (left.size() == right.size())
            result.push_back((left.top() + right.top()) / 2.0);
        else
            result.push_back((double)left.top());
    }

    return result;
}

int main() {

    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    vector<int> stream(n);

    for (int i = 0; i < n; i++)
        cin >> stream[i];

    vector<double> ans = runningMedian(stream);

    cout << fixed << setprecision(1);

    for (double x : ans)
        cout << x << "\\n";

    return 0;
}`
},'fm-e2': {
  python: `def find_final_median(stream):
    stream.sort()
    n = len(stream)

    if n % 2 == 1:
        return float(stream[n // 2])
    return (stream[n // 2 - 1] + stream[n // 2]) / 2.0

n = int(input())
stream = list(map(int, input().split())) if n > 0 else []
print(f"{find_final_median(stream):.1f}")`,

  java: `import java.util.*;

public class Main {

    public static double findFinalMedian(int[] stream) {
        Arrays.sort(stream);
        int n = stream.length;

        if (n % 2 == 1)
            return (double) stream[n / 2];

        return (stream[n / 2 - 1] + stream[n / 2]) / 2.0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] stream = new int[n];

        for (int i = 0; i < n; i++)
            stream[i] = sc.nextInt();

        System.out.printf(Locale.US, "%.1f%n", findFinalMedian(stream));
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>

int cmp(const void *a, const void *b) {
    return (*(int *)a - *(int *)b);
}

double findFinalMedian(int *stream, int n) {
    qsort(stream, n, sizeof(int), cmp);

    if (n % 2 == 1)
        return (double)stream[n / 2];

    return (stream[n / 2 - 1] + stream[n / 2]) / 2.0;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int *stream = (int *)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
        scanf("%d", &stream[i]);

    printf("%.1f\n", findFinalMedian(stream, n));

    free(stream);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <iomanip>

using namespace std;

double findFinalMedian(vector<int>& stream) {

    sort(stream.begin(), stream.end());

    int n = stream.size();

    if (n % 2)
        return (double)stream[n / 2];

    return (stream[n / 2 - 1] + stream[n / 2]) / 2.0;
}

int main() {

    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    vector<int> stream(n);

    for (int i = 0; i < n; i++)
        cin >> stream[i];

    cout << fixed << setprecision(1)
         << findFinalMedian(stream) << "\\n";

    return 0;
}`
},'fm-e3': {
  python: `import heapq

def prefix_medians(nums):
    left = []
    right = []
    result = []

    for num in nums:
        if not left or num <= -left[0]:
            heapq.heappush(left, -num)
        else:
            heapq.heappush(right, num)

        if len(left) > len(right) + 1:
            heapq.heappush(right, -heapq.heappop(left))
        elif len(right) > len(left):
            heapq.heappush(left, -heapq.heappop(right))

        if len(left) == len(right):
            median = (-left[0] + right[0]) / 2.0
        else:
            median = float(-left[0])

        result.append(median)

    return result

n = int(input())
nums = list(map(int, input().split())) if n > 0 else []

result = prefix_medians(nums)

for median in result:
    print(f"{median:.1f}")`,

  java: `import java.util.*;

public class Main {

    public static List<Double> prefixMedians(int[] nums) {
        PriorityQueue<Integer> left = new PriorityQueue<>(Collections.reverseOrder());
        PriorityQueue<Integer> right = new PriorityQueue<>();

        List<Double> result = new ArrayList<>();

        for (int num : nums) {

            if (left.isEmpty() || num <= left.peek())
                left.offer(num);
            else
                right.offer(num);

            if (left.size() > right.size() + 1)
                right.offer(left.poll());
            else if (right.size() > left.size())
                left.offer(right.poll());

            if (left.size() == right.size())
                result.add((left.peek() + right.peek()) / 2.0);
            else
                result.add((double) left.peek());
        }

        return result;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[] nums = new int[n];

        for (int i = 0; i < n; i++)
            nums[i] = sc.nextInt();

        List<Double> ans = prefixMedians(nums);

        for (double median : ans)
            System.out.printf(Locale.US, "%.1f%n", median);
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>

void insertSorted(int arr[], int *size, int value) {
    int i = *size - 1;

    while (i >= 0 && arr[i] > value) {
        arr[i + 1] = arr[i];
        i--;
    }

    arr[i + 1] = value;
    (*size)++;
}

double* prefixMedians(int* nums, int n) {

    int *arr = (int*)malloc(n * sizeof(int));
    double *result = (double*)malloc(n * sizeof(double));

    int size = 0;

    for (int i = 0; i < n; i++) {

        insertSorted(arr, &size, nums[i]);

        if (size % 2)
            result[i] = arr[size / 2];
        else
            result[i] = (arr[size / 2 - 1] + arr[size / 2]) / 2.0;
    }

    free(arr);

    return result;
}

int main() {

    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int *nums = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
        scanf("%d", &nums[i]);

    double *result = prefixMedians(nums, n);

    for (int i = 0; i < n; i++)
        printf("%.1f\n", result[i]);

    free(result);
    free(nums);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <iomanip>

using namespace std;

vector<double> prefixMedians(vector<int>& nums) {

    priority_queue<int> left;
    priority_queue<int, vector<int>, greater<int>> right;

    vector<double> result;

    for (int num : nums) {

        if (left.empty() || num <= left.top())
            left.push(num);
        else
            right.push(num);

        if (left.size() > right.size() + 1) {
            right.push(left.top());
            left.pop();
        }
        else if (right.size() > left.size()) {
            left.push(right.top());
            right.pop();
        }

        if (left.size() == right.size())
            result.push_back((left.top() + right.top()) / 2.0);
        else
            result.push_back((double)left.top());
    }

    return result;
}

int main() {

    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    vector<int> nums(n);

    for (int i = 0; i < n; i++)
        cin >> nums[i];

    vector<double> ans = prefixMedians(nums);

    cout << fixed << setprecision(1);

    for (double median : ans)
        cout << median << "\\n";

    return 0;
}`
},'fm-e4': {
  python: `import heapq

def running_median_duplicates(stream):
    left = []
    right = []
    result = []

    for num in stream:
        if not left or num <= -left[0]:
            heapq.heappush(left, -num)
        else:
            heapq.heappush(right, num)

        if len(left) > len(right) + 1:
            heapq.heappush(right, -heapq.heappop(left))
        elif len(right) > len(left):
            heapq.heappush(left, -heapq.heappop(right))

        if len(left) == len(right):
            median = (-left[0] + right[0]) / 2.0
        else:
            median = float(-left[0])

        result.append(median)

    return result

n = int(input())
stream = list(map(int, input().split())) if n > 0 else []

result = running_median_duplicates(stream)

for median in result:
    print(f"{median:.1f}")`,

  java: `import java.util.*;

public class Main {

    public static List<Double> runningMedianDuplicates(int[] stream) {
        PriorityQueue<Integer> left = new PriorityQueue<>(Collections.reverseOrder());
        PriorityQueue<Integer> right = new PriorityQueue<>();

        List<Double> result = new ArrayList<>();

        for (int num : stream) {

            if (left.isEmpty() || num <= left.peek())
                left.offer(num);
            else
                right.offer(num);

            if (left.size() > right.size() + 1)
                right.offer(left.poll());
            else if (right.size() > left.size())
                left.offer(right.poll());

            if (left.size() == right.size())
                result.add((left.peek() + right.peek()) / 2.0);
            else
                result.add((double) left.peek());
        }

        return result;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[] stream = new int[n];

        for (int i = 0; i < n; i++)
            stream[i] = sc.nextInt();

        List<Double> ans = runningMedianDuplicates(stream);

        for (double median : ans)
            System.out.printf(Locale.US, "%.1f%n", median);
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>

void insertSorted(int arr[], int *size, int value) {
    int i = *size - 1;

    while (i >= 0 && arr[i] > value) {
        arr[i + 1] = arr[i];
        i--;
    }

    arr[i + 1] = value;
    (*size)++;
}

double* runningMedianDuplicates(int* stream, int n) {

    int *arr = (int*)malloc(n * sizeof(int));
    double *result = (double*)malloc(n * sizeof(double));

    int size = 0;

    for (int i = 0; i < n; i++) {

        insertSorted(arr, &size, stream[i]);

        if (size % 2)
            result[i] = arr[size / 2];
        else
            result[i] = (arr[size / 2 - 1] + arr[size / 2]) / 2.0;
    }

    free(arr);

    return result;
}

int main() {

    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int *stream = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
        scanf("%d", &stream[i]);

    double *result = runningMedianDuplicates(stream, n);

    for (int i = 0; i < n; i++)
        printf("%.1f\n", result[i]);

    free(result);
    free(stream);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <iomanip>

using namespace std;

vector<double> runningMedianDuplicates(vector<int>& stream) {

    priority_queue<int> left;
    priority_queue<int, vector<int>, greater<int>> right;

    vector<double> result;

    for (int num : stream) {

        if (left.empty() || num <= left.top())
            left.push(num);
        else
            right.push(num);

        if (left.size() > right.size() + 1) {
            right.push(left.top());
            left.pop();
        }
        else if (right.size() > left.size()) {
            left.push(right.top());
            right.pop();
        }

        if (left.size() == right.size())
            result.push_back((left.top() + right.top()) / 2.0);
        else
            result.push_back((double)left.top());
    }

    return result;
}

int main() {

    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    vector<int> stream(n);

    for (int i = 0; i < n; i++)
        cin >> stream[i];

    vector<double> ans = runningMedianDuplicates(stream);

    cout << fixed << setprecision(1);

    for (double median : ans)
        cout << median << "\\n";

    return 0;
}`
},'fm-e5': {
  python: `import heapq

def running_median_negative(stream):
    left = []
    right = []
    result = []

    for num in stream:
        if not left or num <= -left[0]:
            heapq.heappush(left, -num)
        else:
            heapq.heappush(right, num)

        if len(left) > len(right) + 1:
            heapq.heappush(right, -heapq.heappop(left))
        elif len(right) > len(left):
            heapq.heappush(left, -heapq.heappop(right))

        if len(left) == len(right):
            median = (-left[0] + right[0]) / 2.0
        else:
            median = float(-left[0])

        result.append(median)

    return result

n = int(input())
stream = list(map(int, input().split())) if n > 0 else []

result = running_median_negative(stream)

for median in result:
    print(f"{median:.1f}")`,

  java: `import java.util.*;

public class Main {

    public static List<Double> runningMedianNegative(int[] stream) {
        PriorityQueue<Integer> left = new PriorityQueue<>(Collections.reverseOrder());
        PriorityQueue<Integer> right = new PriorityQueue<>();

        List<Double> result = new ArrayList<>();

        for (int num : stream) {

            if (left.isEmpty() || num <= left.peek())
                left.offer(num);
            else
                right.offer(num);

            if (left.size() > right.size() + 1)
                right.offer(left.poll());
            else if (right.size() > left.size())
                left.offer(right.poll());

            if (left.size() == right.size())
                result.add((left.peek() + right.peek()) / 2.0);
            else
                result.add((double) left.peek());
        }

        return result;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[] stream = new int[n];

        for (int i = 0; i < n; i++)
            stream[i] = sc.nextInt();

        List<Double> ans = runningMedianNegative(stream);

        for (double median : ans)
            System.out.printf(Locale.US, "%.1f%n", median);
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>

void insertSorted(int arr[], int *size, int value) {
    int i = *size - 1;

    while (i >= 0 && arr[i] > value) {
        arr[i + 1] = arr[i];
        i--;
    }

    arr[i + 1] = value;
    (*size)++;
}

double* runningMedianNegative(int* stream, int n) {

    int *arr = (int*)malloc(n * sizeof(int));
    double *result = (double*)malloc(n * sizeof(double));

    int size = 0;

    for (int i = 0; i < n; i++) {

        insertSorted(arr, &size, stream[i]);

        if (size % 2)
            result[i] = arr[size / 2];
        else
            result[i] = (arr[size / 2 - 1] + arr[size / 2]) / 2.0;
    }

    free(arr);

    return result;
}

int main() {

    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int *stream = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
        scanf("%d", &stream[i]);

    double *result = runningMedianNegative(stream, n);

    for (int i = 0; i < n; i++)
        printf("%.1f\n", result[i]);

    free(result);
    free(stream);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <iomanip>

using namespace std;

vector<double> runningMedianNegative(vector<int>& stream) {

    priority_queue<int> left;
    priority_queue<int, vector<int>, greater<int>> right;

    vector<double> result;

    for (int num : stream) {

        if (left.empty() || num <= left.top())
            left.push(num);
        else
            right.push(num);

        if (left.size() > right.size() + 1) {
            right.push(left.top());
            left.pop();
        }
        else if (right.size() > left.size()) {
            left.push(right.top());
            right.pop();
        }

        if (left.size() == right.size())
            result.push_back((left.top() + right.top()) / 2.0);
        else
            result.push_back((double)left.top());
    }

    return result;
}

int main() {

    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    vector<int> stream(n);

    for (int i = 0; i < n; i++)
        cin >> stream[i];

    vector<double> ans = runningMedianNegative(stream);

    cout << fixed << setprecision(1);

    for (double median : ans)
        cout << median << "\\n";

    return 0;
}`
},'fm-m1': {
  python: `import heapq

def process_queries(queries):
    left = []
    right = []
    result = []

    for query in queries:
        parts = query.split()

        if parts[0] == "ADD":
            num = int(parts[1])

            if not left or num <= -left[0]:
                heapq.heappush(left, -num)
            else:
                heapq.heappush(right, num)

            if len(left) > len(right) + 1:
                heapq.heappush(right, -heapq.heappop(left))
            elif len(right) > len(left):
                heapq.heappush(left, -heapq.heappop(right))

        else:
            if len(left) == len(right):
                result.append((-left[0] + right[0]) / 2.0)
            else:
                result.append(float(-left[0]))

    return result

q = int(input())
queries = [input().strip() for _ in range(q)]

ans = process_queries(queries)

for median in ans:
    print(f"{median:.1f}")`,

  java: `import java.util.*;

public class Main {

    public static List<Double> processQueries(String[] queries) {

        PriorityQueue<Integer> left = new PriorityQueue<>(Collections.reverseOrder());
        PriorityQueue<Integer> right = new PriorityQueue<>();

        List<Double> result = new ArrayList<>();

        for (String query : queries) {

            String[] parts = query.split(" ");

            if (parts[0].equals("ADD")) {

                int num = Integer.parseInt(parts[1]);

                if (left.isEmpty() || num <= left.peek())
                    left.offer(num);
                else
                    right.offer(num);

                if (left.size() > right.size() + 1)
                    right.offer(left.poll());
                else if (right.size() > left.size())
                    left.offer(right.poll());

            } else {

                if (left.size() == right.size())
                    result.add((left.peek() + right.peek()) / 2.0);
                else
                    result.add((double) left.peek());
            }
        }

        return result;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int q = Integer.parseInt(sc.nextLine());

        String[] queries = new String[q];

        for (int i = 0; i < q; i++)
            queries[i] = sc.nextLine();

        List<Double> ans = processQueries(queries);

        for (double median : ans)
            System.out.printf(Locale.US, "%.1f%n", median);
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int cmp(const void *a,const void *b){
    return (*(int*)a-*(int*)b);
}

double* processQueries(char queries[][20], int q, int* returnSize){

    int *arr=(int*)malloc(q*sizeof(int));
    double *result=(double*)malloc(q*sizeof(double));

    int size=0;
    *returnSize=0;

    for(int i=0;i<q;i++){

        if(strncmp(queries[i],"ADD",3)==0){

            int x;
            sscanf(queries[i],"ADD %d",&x);

            int j=size-1;

            while(j>=0 && arr[j]>x){
                arr[j+1]=arr[j];
                j--;
            }

            arr[j+1]=x;
            size++;

        }else{

            if(size%2)
                result[(*returnSize)++]=arr[size/2];
            else
                result[(*returnSize)++]=(arr[size/2-1]+arr[size/2])/2.0;
        }
    }

    free(arr);
    return result;
}

int main(){

    int q;

    scanf("%d",&q);
    getchar();

    char queries[q][20];

    for(int i=0;i<q;i++){
        fgets(queries[i],20,stdin);
        queries[i][strcspn(queries[i],"\n")]=0;
    }

    int returnSize;

    double *ans=processQueries(queries,q,&returnSize);

    for(int i=0;i<returnSize;i++)
        printf("%.1f\n",ans[i]);

    free(ans);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <string>
#include <iomanip>

using namespace std;

vector<double> processQueries(vector<string>& queries){

    priority_queue<int> left;
    priority_queue<int,vector<int>,greater<int>> right;

    vector<double> result;

    for(string query:queries){

        if(query.substr(0,3)=="ADD"){

            int num=stoi(query.substr(4));

            if(left.empty()||num<=left.top())
                left.push(num);
            else
                right.push(num);

            if(left.size()>right.size()+1){
                right.push(left.top());
                left.pop();
            }
            else if(right.size()>left.size()){
                left.push(right.top());
                right.pop();
            }

        }else{

            if(left.size()==right.size())
                result.push_back((left.top()+right.top())/2.0);
            else
                result.push_back((double)left.top());
        }
    }

    return result;
}

int main(){

    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int q;
    cin>>q;
    cin.ignore();

    vector<string> queries(q);

    for(int i=0;i<q;i++)
        getline(cin,queries[i]);

    vector<double> ans=processQueries(queries);

    cout<<fixed<<setprecision(1);

    for(double x:ans)
        cout<<x<<"\\n";

    return 0;
}`
},'fm-m2': {
  python: `import heapq

def prefix_statistics(stream):
    left = []
    right = []
    result = []

    for i, num in enumerate(stream, 1):
        if not left or num <= -left[0]:
            heapq.heappush(left, -num)
        else:
            heapq.heappush(right, num)

        if len(left) > len(right) + 1:
            heapq.heappush(right, -heapq.heappop(left))
        elif len(right) > len(left):
            heapq.heappush(left, -heapq.heappop(right))

        if len(left) == len(right):
            median = (-left[0] + right[0]) / 2.0
        else:
            median = float(-left[0])

        result.append((i, median))

    return result

n = int(input())
stream = list(map(int, input().split()))

result = prefix_statistics(stream)

for size, median in result:
    print(size, f"{median:.1f}")`,

  java: `import java.util.*;

public class Main {

    public static List<String> prefixStatistics(int[] stream) {

        PriorityQueue<Integer> left = new PriorityQueue<>(Collections.reverseOrder());
        PriorityQueue<Integer> right = new PriorityQueue<>();

        List<String> ans = new ArrayList<>();

        for (int i = 0; i < stream.length; i++) {

            int num = stream[i];

            if (left.isEmpty() || num <= left.peek())
                left.offer(num);
            else
                right.offer(num);

            if (left.size() > right.size() + 1)
                right.offer(left.poll());
            else if (right.size() > left.size())
                left.offer(right.poll());

            double median;

            if (left.size() == right.size())
                median = (left.peek() + right.peek()) / 2.0;
            else
                median = left.peek();

            ans.add(String.format(Locale.US, "%d %.1f", i + 1, median));
        }

        return ans;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] stream = new int[n];

        for (int i = 0; i < n; i++)
            stream[i] = sc.nextInt();

        List<String> ans = prefixStatistics(stream);

        for (String s : ans)
            System.out.println(s);
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>

typedef struct{
    int size;
    double median;
} Result;

void insertSorted(int arr[], int *size, int val){
    int i=*size-1;
    while(i>=0 && arr[i]>val){
        arr[i+1]=arr[i];
        i--;
    }
    arr[i+1]=val;
    (*size)++;
}

Result* prefixStatistics(int* stream,int n){

    int *arr=(int*)malloc(n*sizeof(int));
    Result *res=(Result*)malloc(n*sizeof(Result));

    int sz=0;

    for(int i=0;i<n;i++){

        insertSorted(arr,&sz,stream[i]);

        res[i].size=sz;

        if(sz%2)
            res[i].median=arr[sz/2];
        else
            res[i].median=(arr[sz/2-1]+arr[sz/2])/2.0;
    }

    free(arr);
    return res;
}

int main(){

    int n;

    if(scanf("%d",&n)!=1) return 0;

    int *stream=(int*)malloc(n*sizeof(int));

    for(int i=0;i<n;i++)
        scanf("%d",&stream[i]);

    Result *ans=prefixStatistics(stream,n);

    for(int i=0;i<n;i++)
        printf("%d %.1f\\n",ans[i].size,ans[i].median);

    free(ans);
    free(stream);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <iomanip>

using namespace std;

vector<pair<int,double>> prefixStatistics(vector<int>& stream){

    priority_queue<int> left;
    priority_queue<int,vector<int>,greater<int>> right;

    vector<pair<int,double>> ans;

    for(int i=0;i<stream.size();i++){

        int num=stream[i];

        if(left.empty()||num<=left.top())
            left.push(num);
        else
            right.push(num);

        if(left.size()>right.size()+1){
            right.push(left.top());
            left.pop();
        }
        else if(right.size()>left.size()){
            left.push(right.top());
            right.pop();
        }

        double median;

        if(left.size()==right.size())
            median=(left.top()+right.top())/2.0;
        else
            median=left.top();

        ans.push_back({i+1,median});
    }

    return ans;
}

int main(){

    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin>>n;

    vector<int> stream(n);

    for(int i=0;i<n;i++)
        cin>>stream[i];

    auto ans=prefixStatistics(stream);

    cout<<fixed<<setprecision(1);

    for(auto &p:ans)
        cout<<p.first<<" "<<p.second<<"\\n";

    return 0;
}`
},'fm-m3': {
  python: `import heapq

def running_integer_median(stream):
    left = []
    right = []
    result = []

    for num in stream:
        if not left or num <= -left[0]:
            heapq.heappush(left, -num)
        else:
            heapq.heappush(right, num)

        if len(left) > len(right) + 1:
            heapq.heappush(right, -heapq.heappop(left))
        elif len(right) > len(left):
            heapq.heappush(left, -heapq.heappop(right))

        if len(left) == len(right):
            median = (-left[0] + right[0]) // 2
        else:
            median = -left[0]

        result.append(int(median))

    return result

n = int(input())
stream = list(map(int, input().split()))

result = running_integer_median(stream)

for median in result:
    print(median)`,

  java: `import java.util.*;

public class Main {

    public static List<Integer> runningIntegerMedian(int[] stream) {

        PriorityQueue<Integer> left = new PriorityQueue<>(Collections.reverseOrder());
        PriorityQueue<Integer> right = new PriorityQueue<>();

        List<Integer> ans = new ArrayList<>();

        for (int num : stream) {

            if (left.isEmpty() || num <= left.peek())
                left.offer(num);
            else
                right.offer(num);

            if (left.size() > right.size() + 1)
                right.offer(left.poll());
            else if (right.size() > left.size())
                left.offer(right.poll());

            int median;

            if (left.size() == right.size())
                median = (left.peek() + right.peek()) / 2;
            else
                median = left.peek();

            ans.add(median);
        }

        return ans;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[] stream = new int[n];

        for (int i = 0; i < n; i++)
            stream[i] = sc.nextInt();

        List<Integer> ans = runningIntegerMedian(stream);

        for (int x : ans)
            System.out.println(x);
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>

void insertSorted(int arr[], int *size, int val){
    int i=*size-1;

    while(i>=0 && arr[i]>val){
        arr[i+1]=arr[i];
        i--;
    }

    arr[i+1]=val;
    (*size)++;
}

int* runningIntegerMedian(int* stream,int n){

    int *arr=(int*)malloc(n*sizeof(int));
    int *ans=(int*)malloc(n*sizeof(int));

    int sz=0;

    for(int i=0;i<n;i++){

        insertSorted(arr,&sz,stream[i]);

        if(sz%2)
            ans[i]=arr[sz/2];
        else
            ans[i]=(arr[sz/2-1]+arr[sz/2])/2;
    }

    free(arr);

    return ans;
}

int main(){

    int n;

    if(scanf("%d",&n)!=1)
        return 0;

    int *stream=(int*)malloc(n*sizeof(int));

    for(int i=0;i<n;i++)
        scanf("%d",&stream[i]);

    int *ans=runningIntegerMedian(stream,n);

    for(int i=0;i<n;i++)
        printf("%d\\n",ans[i]);

    free(ans);
    free(stream);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <queue>

using namespace std;

vector<int> runningIntegerMedian(vector<int>& stream){

    priority_queue<int> left;
    priority_queue<int,vector<int>,greater<int>> right;

    vector<int> ans;

    for(int num:stream){

        if(left.empty()||num<=left.top())
            left.push(num);
        else
            right.push(num);

        if(left.size()>right.size()+1){
            right.push(left.top());
            left.pop();
        }
        else if(right.size()>left.size()){
            left.push(right.top());
            right.pop();
        }

        if(left.size()==right.size())
            ans.push_back((left.top()+right.top())/2);
        else
            ans.push_back(left.top());
    }

    return ans;
}

int main(){

    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin>>n;

    vector<int> stream(n);

    for(int i=0;i<n;i++)
        cin>>stream[i];

    vector<int> ans=runningIntegerMedian(stream);

    for(int x:ans)
        cout<<x<<"\\n";

    return 0;
}`
},'fm-m4': {
  python: `import heapq

def even_prefix_medians(stream):
    left = []
    right = []
    result = []

    for i, num in enumerate(stream, 1):
        if not left or num <= -left[0]:
            heapq.heappush(left, -num)
        else:
            heapq.heappush(right, num)

        if len(left) > len(right) + 1:
            heapq.heappush(right, -heapq.heappop(left))
        elif len(right) > len(left):
            heapq.heappush(left, -heapq.heappop(right))

        if i % 2 == 0:
            result.append((-left[0] + right[0]) / 2.0)

    return result

n = int(input())
stream = list(map(int, input().split()))

ans = even_prefix_medians(stream)

for x in ans:
    print(f"{x:.1f}")`,

  java: `import java.util.*;

public class Main {

    public static List<Double> evenPrefixMedians(int[] stream) {

        PriorityQueue<Integer> left = new PriorityQueue<>(Collections.reverseOrder());
        PriorityQueue<Integer> right = new PriorityQueue<>();

        List<Double> ans = new ArrayList<>();

        for (int i = 0; i < stream.length; i++) {

            int num = stream[i];

            if (left.isEmpty() || num <= left.peek())
                left.offer(num);
            else
                right.offer(num);

            if (left.size() > right.size() + 1)
                right.offer(left.poll());
            else if (right.size() > left.size())
                left.offer(right.poll());

            if ((i + 1) % 2 == 0)
                ans.add((left.peek() + right.peek()) / 2.0);
        }

        return ans;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] stream = new int[n];

        for (int i = 0; i < n; i++)
            stream[i] = sc.nextInt();

        List<Double> ans = evenPrefixMedians(stream);

        for (double x : ans)
            System.out.printf(Locale.US, "%.1f%n", x);
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>

void insertSorted(int arr[], int *size, int val){
    int i = *size - 1;

    while(i >= 0 && arr[i] > val){
        arr[i + 1] = arr[i];
        i--;
    }

    arr[i + 1] = val;
    (*size)++;
}

double* evenPrefixMedians(int *stream, int n, int *returnSize){

    int *arr = (int*)malloc(n * sizeof(int));
    double *ans = (double*)malloc(n * sizeof(double));

    int sz = 0;
    *returnSize = 0;

    for(int i = 0; i < n; i++){

        insertSorted(arr, &sz, stream[i]);

        if(sz % 2 == 0)
            ans[(*returnSize)++] = (arr[sz/2-1] + arr[sz/2]) / 2.0;
    }

    free(arr);

    return ans;
}

int main(){

    int n;

    if(scanf("%d",&n)!=1)
        return 0;

    int *stream = (int*)malloc(n*sizeof(int));

    for(int i=0;i<n;i++)
        scanf("%d",&stream[i]);

    int returnSize;

    double *ans = evenPrefixMedians(stream,n,&returnSize);

    for(int i=0;i<returnSize;i++)
        printf("%.1f\n",ans[i]);

    free(ans);
    free(stream);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <iomanip>

using namespace std;

vector<double> evenPrefixMedians(vector<int>& stream){

    priority_queue<int> left;
    priority_queue<int, vector<int>, greater<int>> right;

    vector<double> ans;

    for(int i = 0; i < stream.size(); i++){

        int num = stream[i];

        if(left.empty() || num <= left.top())
            left.push(num);
        else
            right.push(num);

        if(left.size() > right.size() + 1){
            right.push(left.top());
            left.pop();
        }
        else if(right.size() > left.size()){
            left.push(right.top());
            right.pop();
        }

        if((i + 1) % 2 == 0)
            ans.push_back((left.top() + right.top()) / 2.0);
    }

    return ans;
}

int main(){

    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    vector<int> stream(n);

    for(int i = 0; i < n; i++)
        cin >> stream[i];

    vector<double> ans = evenPrefixMedians(stream);

    cout << fixed << setprecision(1);

    for(double x : ans)
        cout << x << "\\n";

    return 0;
}`
},'fm-m5': {
  python: `import heapq

def longest_stable_median(stream):
    left = []
    right = []
    prev = None
    cur = 0
    best = 0

    for num in stream:
        if not left or num <= -left[0]:
            heapq.heappush(left, -num)
        else:
            heapq.heappush(right, num)

        if len(left) > len(right) + 1:
            heapq.heappush(right, -heapq.heappop(left))
        elif len(right) > len(left):
            heapq.heappush(left, -heapq.heappop(right))

        if len(left) == len(right):
            median = (-left[0] + right[0]) / 2.0
        else:
            median = float(-left[0])

        if prev is None or median != prev:
            cur = 1
        else:
            cur += 1

        best = max(best, cur)
        prev = median

    return best

n = int(input())
stream = list(map(int, input().split()))

print(longest_stable_median(stream))`,

  java: `import java.util.*;

public class Main {

    public static int longestStableMedian(int[] stream) {

        PriorityQueue<Integer> left = new PriorityQueue<>(Collections.reverseOrder());
        PriorityQueue<Integer> right = new PriorityQueue<>();

        Double prev = null;
        int cur = 0;
        int best = 0;

        for (int num : stream) {

            if (left.isEmpty() || num <= left.peek())
                left.offer(num);
            else
                right.offer(num);

            if (left.size() > right.size() + 1)
                right.offer(left.poll());
            else if (right.size() > left.size())
                left.offer(right.poll());

            double median;

            if (left.size() == right.size())
                median = (left.peek() + right.peek()) / 2.0;
            else
                median = left.peek();

            if (prev == null || Double.compare(prev, median) != 0)
                cur = 1;
            else
                cur++;

            best = Math.max(best, cur);
            prev = median;
        }

        return best;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[] stream = new int[n];

        for (int i = 0; i < n; i++)
            stream[i] = sc.nextInt();

        System.out.println(longestStableMedian(stream));
    }
}`,  c: `#include <stdio.h>
#include <stdlib.h>

void insertSorted(int arr[], int *size, int val){
    int i = *size - 1;

    while(i >= 0 && arr[i] > val){
        arr[i + 1] = arr[i];
        i--;
    }

    arr[i + 1] = val;
    (*size)++;
}

int longestStableMedian(int* stream, int n){

    int *arr = (int*)malloc(n * sizeof(int));

    int size = 0;
    double prev = 0.0;
    int first = 1;
    int cur = 0;
    int best = 0;

    for(int i = 0; i < n; i++){

        insertSorted(arr, &size, stream[i]);

        double median;

        if(size % 2)
            median = arr[size / 2];
        else
            median = (arr[size / 2 - 1] + arr[size / 2]) / 2.0;

        if(first || median != prev){
            cur = 1;
            first = 0;
        }else{
            cur++;
        }

        if(cur > best)
            best = cur;

        prev = median;
    }

    free(arr);

    return best;
}

int main(){

    int n;

    if(scanf("%d",&n)!=1)
        return 0;

    int *stream=(int*)malloc(n*sizeof(int));

    for(int i=0;i<n;i++)
        scanf("%d",&stream[i]);

    printf("%d\n",longestStableMedian(stream,n));

    free(stream);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <queue>

using namespace std;

int longestStableMedian(vector<int>& stream){

    priority_queue<int> left;
    priority_queue<int, vector<int>, greater<int>> right;

    double prev = 0.0;
    bool first = true;
    int cur = 0;
    int best = 0;

    for(int num : stream){

        if(left.empty() || num <= left.top())
            left.push(num);
        else
            right.push(num);

        if(left.size() > right.size() + 1){
            right.push(left.top());
            left.pop();
        }
        else if(right.size() > left.size()){
            left.push(right.top());
            right.pop();
        }

        double median;

        if(left.size() == right.size())
            median = (left.top() + right.top()) / 2.0;
        else
            median = left.top();

        if(first || median != prev){
            cur = 1;
            first = false;
        }else{
            cur++;
        }

        if(cur > best)
            best = cur;

        prev = median;
    }

    return best;
}

int main(){

    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    vector<int> stream(n);

    for(int i = 0; i < n; i++)
        cin >> stream[i];

    cout << longestStableMedian(stream) << "\\n";

    return 0;
}`
},'fm-h1': {
  python: `import bisect

def process_queries(queries):
    arr = []
    result = []

    for query in queries:
        parts = query.split()

        if parts[0] == "ADD":
            bisect.insort(arr, int(parts[1]))

        elif parts[0] == "REMOVE":
            x = int(parts[1])
            idx = bisect.bisect_left(arr, x)
            arr.pop(idx)

        else:
            n = len(arr)

            if n % 2 == 1:
                median = float(arr[n // 2])
            else:
                median = (arr[n // 2 - 1] + arr[n // 2]) / 2.0

            result.append(median)

    return result

q = int(input())
queries = [input().strip() for _ in range(q)]

ans = process_queries(queries)

for median in ans:
    print(f"{median:.1f}")`,

  java: `import java.util.*;

public class Main {

    public static List<Double> processQueries(String[] queries) {

        ArrayList<Integer> list = new ArrayList<>();
        List<Double> ans = new ArrayList<>();

        for (String query : queries) {

            String[] parts = query.split(" ");

            if (parts[0].equals("ADD")) {

                int x = Integer.parseInt(parts[1]);

                int idx = Collections.binarySearch(list, x);

                if (idx < 0)
                    idx = -idx - 1;

                list.add(idx, x);

            } else if (parts[0].equals("REMOVE")) {

                int x = Integer.parseInt(parts[1]);

                int idx = Collections.binarySearch(list, x);

                list.remove(idx);

            } else {

                int n = list.size();

                if (n % 2 == 1)
                    ans.add((double) list.get(n / 2));
                else
                    ans.add((list.get(n / 2 - 1) + list.get(n / 2)) / 2.0);
            }
        }

        return ans;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int q = sc.nextInt();
        sc.nextLine();

        String[] queries = new String[q];

        for (int i = 0; i < q; i++)
            queries[i] = sc.nextLine();

        List<Double> ans = processQueries(queries);

        for (double x : ans)
            System.out.printf(Locale.US, "%.1f%n", x);
    }
}`,  c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void insertSorted(int arr[], int *size, int val){
    int i = *size - 1;

    while(i >= 0 && arr[i] > val){
        arr[i + 1] = arr[i];
        i--;
    }

    arr[i + 1] = val;
    (*size)++;
}

void removeValue(int arr[], int *size, int val){

    int pos = -1;

    for(int i = 0; i < *size; i++){
        if(arr[i] == val){
            pos = i;
            break;
        }
    }

    for(int i = pos; i < *size - 1; i++)
        arr[i] = arr[i + 1];

    (*size)--;
}

double* processQueries(char queries[][25], int q, int *returnSize){

    int *arr = (int*)malloc(q * sizeof(int));
    double *ans = (double*)malloc(q * sizeof(double));

    int size = 0;
    *returnSize = 0;

    for(int i = 0; i < q; i++){

        if(strncmp(queries[i], "ADD", 3) == 0){

            int x;
            sscanf(queries[i], "ADD %d", &x);
            insertSorted(arr, &size, x);

        }else if(strncmp(queries[i], "REMOVE", 6) == 0){

            int x;
            sscanf(queries[i], "REMOVE %d", &x);
            removeValue(arr, &size, x);

        }else{

            if(size % 2)
                ans[(*returnSize)++] = arr[size / 2];
            else
                ans[(*returnSize)++] =
                    (arr[size / 2 - 1] + arr[size / 2]) / 2.0;
        }
    }

    free(arr);

    return ans;
}

int main(){

    int q;

    if(scanf("%d",&q)!=1)
        return 0;

    getchar();

    char queries[q][25];

    for(int i = 0; i < q; i++)
        fgets(queries[i], 25, stdin);

    int returnSize;

    double *ans = processQueries(queries, q, &returnSize);

    for(int i = 0; i < returnSize; i++)
        printf("%.1f\n", ans[i]);

    free(ans);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <iomanip>

using namespace std;

vector<double> processQueries(vector<string>& queries){

    vector<int> arr;
    vector<double> ans;

    for(string query : queries){

        if(query.substr(0,3) == "ADD"){

            int x = stoi(query.substr(4));

            arr.insert(lower_bound(arr.begin(), arr.end(), x), x);

        }else if(query.substr(0,6) == "REMOVE"){

            int x = stoi(query.substr(7));

            auto it = lower_bound(arr.begin(), arr.end(), x);

            arr.erase(it);

        }else{

            int n = arr.size();

            if(n % 2)
                ans.push_back(arr[n / 2]);
            else
                ans.push_back((arr[n / 2 - 1] + arr[n / 2]) / 2.0);
        }
    }

    return ans;
}

int main(){

    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int q;
    cin >> q;

    cin.ignore();

    vector<string> queries(q);

    for(int i = 0; i < q; i++)
        getline(cin, queries[i]);

    vector<double> ans = processQueries(queries);

    cout << fixed << setprecision(1);

    for(double x : ans)
        cout << x << "\\n";

    return 0;
}`
},'fm-h2': {
  python: `import bisect

def dynamic_median_queries(queries):
    arr = []
    result = []

    for query in queries:
        parts = query.split()

        if parts[0] == "INSERT":
            bisect.insort(arr, int(parts[1]))
        else:
            n = len(arr)

            if n % 2 == 1:
                median = float(arr[n // 2])
            else:
                median = (arr[n // 2 - 1] + arr[n // 2]) / 2.0

            result.append(median)

    return result

q = int(input())
queries = [input().strip() for _ in range(q)]

ans = dynamic_median_queries(queries)

for median in ans:
    print(f"{median:.1f}")`,

  java: `import java.util.*;

public class Main {

    public static List<Double> dynamicMedianQueries(String[] queries) {

        ArrayList<Integer> list = new ArrayList<>();
        List<Double> ans = new ArrayList<>();

        for(String query : queries){

            String[] parts = query.split(" ");

            if(parts[0].equals("INSERT")){

                int x = Integer.parseInt(parts[1]);

                int idx = Collections.binarySearch(list, x);

                if(idx < 0)
                    idx = -idx - 1;

                list.add(idx, x);

            }else{

                int n = list.size();

                if(n % 2 == 1)
                    ans.add((double)list.get(n / 2));
                else
                    ans.add((list.get(n / 2 - 1) + list.get(n / 2)) / 2.0);
            }
        }

        return ans;
    }

    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);

        int q = Integer.parseInt(sc.nextLine());

        String[] queries = new String[q];

        for(int i = 0; i < q; i++)
            queries[i] = sc.nextLine();

        List<Double> ans = dynamicMedianQueries(queries);

        for(double median : ans)
            System.out.printf(Locale.US,"%.1f%n",median);
    }
}`,  c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void insertSorted(int arr[], int *size, int val){
    int i = *size - 1;

    while(i >= 0 && arr[i] > val){
        arr[i + 1] = arr[i];
        i--;
    }

    arr[i + 1] = val;
    (*size)++;
}

double* dynamicMedianQueries(char queries[][25], int q, int *returnSize){

    int *arr = (int*)malloc(q * sizeof(int));
    double *ans = (double*)malloc(q * sizeof(double));

    int size = 0;
    *returnSize = 0;

    for(int i = 0; i < q; i++){

        if(strncmp(queries[i], "INSERT", 6) == 0){

            int x;
            sscanf(queries[i], "INSERT %d", &x);

            insertSorted(arr, &size, x);

        }else{

            if(size % 2)
                ans[(*returnSize)++] = arr[size / 2];
            else
                ans[(*returnSize)++] =
                    (arr[size / 2 - 1] + arr[size / 2]) / 2.0;
        }
    }

    free(arr);

    return ans;
}

int main(){

    int q;

    if(scanf("%d",&q)!=1)
        return 0;

    getchar();

    char queries[q][25];

    for(int i = 0; i < q; i++){
        fgets(queries[i], sizeof(queries[i]), stdin);
        queries[i][strcspn(queries[i], "\n")] = 0;
    }

    int returnSize;

    double *ans = dynamicMedianQueries(queries, q, &returnSize);

    for(int i = 0; i < returnSize; i++)
        printf("%.1f\n", ans[i]);

    free(ans);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <iomanip>

using namespace std;

vector<double> dynamicMedianQueries(vector<string>& queries){

    vector<int> arr;
    vector<double> ans;

    for(string query : queries){

        if(query.substr(0,6) == "INSERT"){

            int x = stoi(query.substr(7));

            arr.insert(lower_bound(arr.begin(), arr.end(), x), x);

        }else{

            int n = arr.size();

            if(n % 2)
                ans.push_back(arr[n / 2]);
            else
                ans.push_back((arr[n / 2 - 1] + arr[n / 2]) / 2.0);
        }
    }

    return ans;
}

int main(){

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int q;

    if(cin >> q){

        cin.ignore();

        vector<string> queries(q);

        for(int i = 0; i < q; i++)
            getline(cin, queries[i]);

        vector<double> ans = dynamicMedianQueries(queries);

        cout << fixed << setprecision(1);

        for(double median : ans)
            cout << median << "\n";
    }

    return 0;
}`
},'fm-h3': {
  python: `from bisect import bisect_left, insort

def median_sliding_window(nums, k):
    window = sorted(nums[:k])
    result = []

    for i in range(k, len(nums) + 1):

        if k % 2:
            result.append(float(window[k // 2]))
        else:
            result.append((window[k // 2 - 1] + window[k // 2]) / 2.0)

        if i == len(nums):
            break

        window.pop(bisect_left(window, nums[i - k]))
        insort(window, nums[i])

    return result

n = int(input())
nums = list(map(int, input().split()))
k = int(input())

ans = median_sliding_window(nums, k)

for median in ans:
    print(f"{median:.1f}")`,

  java: `import java.util.*;

public class Main {

    public static List<Double> medianSlidingWindow(int[] nums, int k) {

        ArrayList<Integer> window = new ArrayList<>();

        for(int i = 0; i < k; i++)
            window.add(nums[i]);

        Collections.sort(window);

        List<Double> ans = new ArrayList<>();

        for(int i = k;; i++){

            if(k % 2 == 1)
                ans.add((double)window.get(k / 2));
            else
                ans.add((window.get(k / 2 - 1) + window.get(k / 2)) / 2.0);

            if(i == nums.length)
                break;

            int idx = Collections.binarySearch(window, nums[i - k]);
            window.remove(idx);

            int pos = Collections.binarySearch(window, nums[i]);

            if(pos < 0)
                pos = -pos - 1;

            window.add(pos, nums[i]);
        }

        return ans;
    }

    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[] nums = new int[n];

        for(int i = 0; i < n; i++)
            nums[i] = sc.nextInt();

        int k = sc.nextInt();

        List<Double> ans = medianSlidingWindow(nums, k);

        for(double median : ans)
            System.out.printf(Locale.US,"%.1f%n",median);
    }
}`,  c: `#include <stdio.h>
#include <stdlib.h>

int cmp(const void *a,const void *b){
    return (*(int*)a-*(int*)b);
}

void insertSorted(int arr[],int *size,int val){
    int i=*size-1;

    while(i>=0 && arr[i]>val){
        arr[i+1]=arr[i];
        i--;
    }

    arr[i+1]=val;
    (*size)++;
}

void removeValue(int arr[],int *size,int val){
    int pos=0;

    while(arr[pos]!=val)
        pos++;

    for(int i=pos;i<*size-1;i++)
        arr[i]=arr[i+1];

    (*size)--;
}

double* medianSlidingWindow(int* nums,int n,int k,int *returnSize){

    int *window=(int*)malloc(k*sizeof(int));

    for(int i=0;i<k;i++)
        window[i]=nums[i];

    qsort(window,k,sizeof(int),cmp);

    *returnSize=n-k+1;

    double *ans=(double*)malloc((*returnSize)*sizeof(double));

    int size=k;

    for(int i=k,idx=0;;i++,idx++){

        if(k%2)
            ans[idx]=window[k/2];
        else
            ans[idx]=(window[k/2-1]+window[k/2])/2.0;

        if(i==n)
            break;

        removeValue(window,&size,nums[i-k]);
        insertSorted(window,&size,nums[i]);
    }

    free(window);

    return ans;
}

int main(){

    int n;

    if(scanf("%d",&n)!=1)
        return 0;

    int *nums=(int*)malloc(n*sizeof(int));

    for(int i=0;i<n;i++)
        scanf("%d",&nums[i]);

    int k;
    scanf("%d",&k);

    int returnSize;

    double *ans=medianSlidingWindow(nums,n,k,&returnSize);

    for(int i=0;i<returnSize;i++)
        printf("%.1f\n",ans[i]);

    free(ans);
    free(nums);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <iomanip>

using namespace std;

vector<double> medianSlidingWindow(vector<int>& nums,int k){

    vector<int> window(nums.begin(),nums.begin()+k);

    sort(window.begin(),window.end());

    vector<double> ans;

    for(int i=k;;i++){

        if(k%2)
            ans.push_back(window[k/2]);
        else
            ans.push_back((window[k/2-1]+window[k/2])/2.0);

        if(i==nums.size())
            break;

        auto it=lower_bound(window.begin(),window.end(),nums[i-k]);
        window.erase(it);

        window.insert(lower_bound(window.begin(),window.end(),nums[i]),nums[i]);
    }

    return ans;
}

int main(){

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin>>n;

    vector<int> nums(n);

    for(int i=0;i<n;i++)
        cin>>nums[i];

    int k;
    cin>>k;

    vector<double> ans=medianSlidingWindow(nums,k);

    cout<<fixed<<setprecision(1);

    for(double median:ans)
        cout<<median<<"\\n";

    return 0;
}`
},'fm-h4': {
  python: `from bisect import bisect_left, insort

def median_after_updates(nums, updates):
    arr = sorted(nums)
    ans = []

    n = len(nums)

    for idx, val in updates:
        old = nums[idx]

        arr.pop(bisect_left(arr, old))
        insort(arr, val)

        nums[idx] = val

        if n % 2:
            ans.append(float(arr[n // 2]))
        else:
            ans.append((arr[n // 2 - 1] + arr[n // 2]) / 2.0)

    return ans

n = int(input())
nums = list(map(int, input().split()))
q = int(input())
updates = [tuple(map(int, input().split())) for _ in range(q)]

ans = median_after_updates(nums, updates)

for median in ans:
    print(f"{median:.1f}")`,

  java: `import java.util.*;

public class Main {

    public static List<Double> medianAfterUpdates(int[] nums, int[][] updates) {

        ArrayList<Integer> arr = new ArrayList<>();

        for(int x : nums)
            arr.add(x);

        Collections.sort(arr);

        List<Double> ans = new ArrayList<>();
        int n = nums.length;

        for(int[] update : updates){

            int idx = update[0];
            int val = update[1];

            int pos = Collections.binarySearch(arr, nums[idx]);
            arr.remove(pos);

            int insert = Collections.binarySearch(arr, val);
            if(insert < 0)
                insert = -insert - 1;

            arr.add(insert, val);

            nums[idx] = val;

            if(n % 2 == 1)
                ans.add((double)arr.get(n / 2));
            else
                ans.add((arr.get(n / 2 - 1) + arr.get(n / 2)) / 2.0);
        }

        return ans;
    }

    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        int[] nums = new int[n];

        for(int i = 0; i < n; i++)
            nums[i] = sc.nextInt();

        int q = sc.nextInt();

        int[][] updates = new int[q][2];

        for(int i = 0; i < q; i++){
            updates[i][0] = sc.nextInt();
            updates[i][1] = sc.nextInt();
        }

        List<Double> ans = medianAfterUpdates(nums, updates);

        for(double median : ans)
            System.out.printf(Locale.US, "%.1f%n", median);
    }
}`,  c: `#include <stdio.h>
#include <stdlib.h>

int cmp(const void *a,const void *b){
    return (*(int*)a-*(int*)b);
}

void insertSorted(int arr[],int *size,int val){
    int i=*size-1;

    while(i>=0 && arr[i]>val){
        arr[i+1]=arr[i];
        i--;
    }

    arr[i+1]=val;
    (*size)++;
}

void removeValue(int arr[],int *size,int val){
    int pos=0;

    while(arr[pos]!=val)
        pos++;

    for(int i=pos;i<*size-1;i++)
        arr[i]=arr[i+1];

    (*size)--;
}

double* medianAfterUpdates(int* nums,int n,int updates[][2],int q,int *returnSize){

    int *arr=(int*)malloc(n*sizeof(int));

    for(int i=0;i<n;i++)
        arr[i]=nums[i];

    qsort(arr,n,sizeof(int),cmp);

    *returnSize=q;

    double *ans=(double*)malloc(q*sizeof(double));

    int size=n;

    for(int i=0;i<q;i++){

        int idx=updates[i][0];
        int val=updates[i][1];

        removeValue(arr,&size,nums[idx]);
        insertSorted(arr,&size,val);

        nums[idx]=val;

        if(n%2)
            ans[i]=arr[n/2];
        else
            ans[i]=(arr[n/2-1]+arr[n/2])/2.0;
    }

    free(arr);

    return ans;
}

int main(){

    int n;

    if(scanf("%d",&n)!=1)
        return 0;

    int *nums=(int*)malloc(n*sizeof(int));

    for(int i=0;i<n;i++)
        scanf("%d",&nums[i]);

    int q;
    scanf("%d",&q);

    int updates[q][2];

    for(int i=0;i<q;i++)
        scanf("%d %d",&updates[i][0],&updates[i][1]);

    int returnSize;

    double *ans=medianAfterUpdates(nums,n,updates,q,&returnSize);

    for(int i=0;i<returnSize;i++)
        printf("%.1f\n",ans[i]);

    free(ans);
    free(nums);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <algorithm>
#include <iomanip>

using namespace std;

vector<double> medianAfterUpdates(vector<int>& nums, vector<pair<int,int>>& updates){

    vector<int> arr=nums;

    sort(arr.begin(),arr.end());

    vector<double> ans;

    int n=nums.size();

    for(auto &u:updates){

        int idx=u.first;
        int val=u.second;

        auto it=lower_bound(arr.begin(),arr.end(),nums[idx]);
        arr.erase(it);

        arr.insert(lower_bound(arr.begin(),arr.end(),val),val);

        nums[idx]=val;

        if(n%2)
            ans.push_back(arr[n/2]);
        else
            ans.push_back((arr[n/2-1]+arr[n/2])/2.0);
    }

    return ans;
}

int main(){

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if(cin>>n){

        vector<int> nums(n);

        for(int i=0;i<n;i++)
            cin>>nums[i];

        int q;
        cin>>q;

        vector<pair<int,int>> updates(q);

        for(int i=0;i<q;i++)
            cin>>updates[i].first>>updates[i].second;

        vector<double> ans=medianAfterUpdates(nums,updates);

        cout<<fixed<<setprecision(1);

        for(double median:ans)
            cout<<median<<"\\n";
    }

    return 0;
}`
},'fm-h5': {
  python: `from bisect import bisect_left, insort

def median_two_streams(queries):
    arr = []
    ans = []

    for query in queries:
        _, x = query.split()
        x = int(x)

        insort(arr, x)

        n = len(arr)

        if n % 2:
            ans.append(float(arr[n // 2]))
        else:
            ans.append((arr[n // 2 - 1] + arr[n // 2]) / 2.0)

    return ans

q = int(input())
queries = [input().strip() for _ in range(q)]

ans = median_two_streams(queries)

for median in ans:
    print(f"{median:.1f}")`,

  java: `import java.util.*;

public class Main {

    public static List<Double> medianTwoStreams(String[] queries) {

        ArrayList<Integer> arr = new ArrayList<>();
        List<Double> ans = new ArrayList<>();

        for(String query : queries){

            String[] parts = query.split(" ");
            int x = Integer.parseInt(parts[1]);

            int idx = Collections.binarySearch(arr, x);

            if(idx < 0)
                idx = -idx - 1;

            arr.add(idx, x);

            int n = arr.size();

            if(n % 2 == 1)
                ans.add((double)arr.get(n / 2));
            else
                ans.add((arr.get(n / 2 - 1) + arr.get(n / 2)) / 2.0);
        }

        return ans;
    }

    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);

        int q = Integer.parseInt(sc.nextLine());

        String[] queries = new String[q];

        for(int i = 0; i < q; i++)
            queries[i] = sc.nextLine();

        List<Double> ans = medianTwoStreams(queries);

        for(double median : ans)
            System.out.printf(Locale.US,"%.1f%n",median);
    }
}`,  c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void insertSorted(int arr[],int *size,int val){
    int i=*size-1;

    while(i>=0 && arr[i]>val){
        arr[i+1]=arr[i];
        i--;
    }

    arr[i+1]=val;
    (*size)++;
}

double* medianTwoStreams(char queries[][25],int q,int *returnSize){

    int *arr=(int*)malloc(q*sizeof(int));

    int size=0;

    *returnSize=q;

    double *ans=(double*)malloc(q*sizeof(double));

    for(int i=0;i<q;i++){

        char stream;
        int x;

        sscanf(queries[i],"%c %d",&stream,&x);

        insertSorted(arr,&size,x);

        if(size%2)
            ans[i]=arr[size/2];
        else
            ans[i]=(arr[size/2-1]+arr[size/2])/2.0;
    }

    free(arr);

    return ans;
}

int main(){

    int q;

    if(scanf("%d",&q)!=1)
        return 0;

    getchar();

    char queries[q][25];

    for(int i=0;i<q;i++){
        fgets(queries[i],sizeof(queries[i]),stdin);
        queries[i][strcspn(queries[i],"\n")]=0;
    }

    int returnSize;

    double *ans=medianTwoStreams(queries,q,&returnSize);

    for(int i=0;i<returnSize;i++)
        printf("%.1f\n",ans[i]);

    free(ans);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <iomanip>

using namespace std;

vector<double> medianTwoStreams(vector<string>& queries){

    vector<int> arr;
    vector<double> ans;

    for(string query:queries){

        int x=stoi(query.substr(2));

        arr.insert(lower_bound(arr.begin(),arr.end(),x),x);

        int n=arr.size();

        if(n%2)
            ans.push_back(arr[n/2]);
        else
            ans.push_back((arr[n/2-1]+arr[n/2])/2.0);
    }

    return ans;
}

int main(){

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int q;

    if(cin>>q){

        cin.ignore();

        vector<string> queries(q);

        for(int i=0;i<q;i++)
            getline(cin,queries[i]);

        vector<double> ans=medianTwoStreams(queries);

        cout<<fixed<<setprecision(1);

        for(double median:ans)
            cout<<median<<"\\n";
    }

    return 0;
}`
}
};

