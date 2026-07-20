export const differenceArraySolutions = {
  "da-e1": {
    python: `def range_update(arr, L, R, X):
    n = len(arr)
    diff = [0] * (n + 1)

    diff[L] += X
    if R + 1 < n:
        diff[R + 1] -= X

    current = 0
    for i in range(n):
        current += diff[i]
        arr[i] += current

    return arr`,

    java: `class Solution {
    public int[] rangeUpdate(int[] arr, int L, int R, int X) {
        int n = arr.length;
        int[] diff = new int[n + 1];

        diff[L] += X;
        if (R + 1 < n) {
            diff[R + 1] -= X;
        }

        int current = 0;

        for (int i = 0; i < n; i++) {
            current += diff[i];
            arr[i] += current;
        }

        return arr;
    }
}`,

    c: `#include <stdio.h>

void rangeUpdate(int arr[], int n, int L, int R, int X) {
    int diff[n + 1];

    for (int i = 0; i <= n; i++)
        diff[i] = 0;

    diff[L] += X;

    if (R + 1 < n)
        diff[R + 1] -= X;

    int current = 0;

    for (int i = 0; i < n; i++) {
        current += diff[i];
        arr[i] += current;
    }
}`,

    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> rangeUpdate(vector<int>& arr, int L, int R, int X) {
        int n = arr.size();
        vector<int> diff(n + 1, 0);

        diff[L] += X;

        if (R + 1 < n)
            diff[R + 1] -= X;

        int current = 0;

        for (int i = 0; i < n; i++) {
            current += diff[i];
            arr[i] += current;
        }

        return arr;
    }
};`
  },
    "da-e2": {
    python: `def range_updates(arr, updates):
    n = len(arr)
    diff = [0] * (n + 1)

    for left, right, value in updates:
        diff[left] += value
        if right + 1 < n:
            diff[right + 1] -= value

    current = 0
    for i in range(n):
        current += diff[i]
        arr[i] += current

    return arr`,

    java: `class Solution {
    public int[] rangeUpdates(int[] arr, int[][] updates) {
        int n = arr.length;
        int[] diff = new int[n + 1];

        for (int[] update : updates) {
            int left = update[0];
            int right = update[1];
            int value = update[2];

            diff[left] += value;
            if (right + 1 < n) {
                diff[right + 1] -= value;
            }
        }

        int current = 0;
        for (int i = 0; i < n; i++) {
            current += diff[i];
            arr[i] += current;
        }

        return arr;
    }
}`,

    c: `#include <stdio.h>

void rangeUpdates(int arr[], int n, int updates[][3], int m) {
    int diff[n + 1];

    for (int i = 0; i <= n; i++)
        diff[i] = 0;

    for (int i = 0; i < m; i++) {
        int left = updates[i][0];
        int right = updates[i][1];
        int value = updates[i][2];

        diff[left] += value;

        if (right + 1 < n)
            diff[right + 1] -= value;
    }

    int current = 0;

    for (int i = 0; i < n; i++) {
        current += diff[i];
        arr[i] += current;
    }
}`,

    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> rangeUpdates(vector<int>& arr, vector<vector<int>>& updates) {
        int n = arr.size();
        vector<int> diff(n + 1, 0);

        for (auto& update : updates) {
            int left = update[0];
            int right = update[1];
            int value = update[2];

            diff[left] += value;

            if (right + 1 < n)
                diff[right + 1] -= value;
        }

        int current = 0;

        for (int i = 0; i < n; i++) {
            current += diff[i];
            arr[i] += current;
        }

        return arr;
    }
};`
  },
    "da-e3": {
    python: `def build_array(diff):
    n = len(diff)
    result = [0] * n

    result[0] = diff[0]

    for i in range(1, n):
        result[i] = result[i - 1] + diff[i]

    return result`,

    java: `class Solution {
    public int[] buildArray(int[] diff) {
        int n = diff.length;
        int[] result = new int[n];

        result[0] = diff[0];

        for (int i = 1; i < n; i++) {
            result[i] = result[i - 1] + diff[i];
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

void buildArray(int diff[], int n, int result[]) {
    result[0] = diff[0];

    for (int i = 1; i < n; i++) {
        result[i] = result[i - 1] + diff[i];
    }
}`,

    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> buildArray(vector<int>& diff) {
        int n = diff.size();
        vector<int> result(n);

        result[0] = diff[0];

        for (int i = 1; i < n; i++) {
            result[i] = result[i - 1] + diff[i];
        }

        return result;
    }
};`
  },
    "da-e4": {
    python: `def positive_updates(arr, updates):
    n = len(arr)
    diff = [0] * (n + 1)

    for left, right, value in updates:
        diff[left] += value
        if right + 1 < n:
            diff[right + 1] -= value

    current = 0

    for i in range(n):
        current += diff[i]
        arr[i] += current

    return arr`,

    java: `class Solution {
    public int[] positiveUpdates(int[] arr, int[][] updates) {
        int n = arr.length;
        int[] diff = new int[n + 1];

        for (int[] update : updates) {
            int left = update[0];
            int right = update[1];
            int value = update[2];

            diff[left] += value;

            if (right + 1 < n) {
                diff[right + 1] -= value;
            }
        }

        int current = 0;

        for (int i = 0; i < n; i++) {
            current += diff[i];
            arr[i] += current;
        }

        return arr;
    }
}`,

    c: `#include <stdio.h>

void positiveUpdates(int arr[], int n, int updates[][3], int m) {
    int diff[n + 1];

    for (int i = 0; i <= n; i++)
        diff[i] = 0;

    for (int i = 0; i < m; i++) {
        int left = updates[i][0];
        int right = updates[i][1];
        int value = updates[i][2];

        diff[left] += value;

        if (right + 1 < n)
            diff[right + 1] -= value;
    }

    int current = 0;

    for (int i = 0; i < n; i++) {
        current += diff[i];
        arr[i] += current;
    }
}`,

    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> positiveUpdates(vector<int>& arr, vector<vector<int>>& updates) {
        int n = arr.size();
        vector<int> diff(n + 1, 0);

        for (auto& update : updates) {
            int left = update[0];
            int right = update[1];
            int value = update[2];

            diff[left] += value;

            if (right + 1 < n) {
                diff[right + 1] -= value;
            }
        }

        int current = 0;

        for (int i = 0; i < n; i++) {
            current += diff[i];
            arr[i] += current;
        }

        return arr;
    }
};`
  },
    "da-e5": {
    python: `def negative_updates(arr, updates):
    n = len(arr)
    diff = [0] * (n + 1)

    for left, right, value in updates:
        diff[left] += value
        if right + 1 < n:
            diff[right + 1] -= value

    current = 0

    for i in range(n):
        current += diff[i]
        arr[i] += current

    return arr`,

    java: `class Solution {
    public int[] negativeUpdates(int[] arr, int[][] updates) {
        int n = arr.length;
        int[] diff = new int[n + 1];

        for (int[] update : updates) {
            int left = update[0];
            int right = update[1];
            int value = update[2];

            diff[left] += value;

            if (right + 1 < n) {
                diff[right + 1] -= value;
            }
        }

        int current = 0;

        for (int i = 0; i < n; i++) {
            current += diff[i];
            arr[i] += current;
        }

        return arr;
    }
}`,

    c: `#include <stdio.h>

void negativeUpdates(int arr[], int n, int updates[][3], int m) {
    int diff[n + 1];

    for (int i = 0; i <= n; i++)
        diff[i] = 0;

    for (int i = 0; i < m; i++) {
        int left = updates[i][0];
        int right = updates[i][1];
        int value = updates[i][2];

        diff[left] += value;

        if (right + 1 < n)
            diff[right + 1] -= value;
    }

    int current = 0;

    for (int i = 0; i < n; i++) {
        current += diff[i];
        arr[i] += current;
    }
}`,

    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> negativeUpdates(vector<int>& arr, vector<vector<int>>& updates) {
        int n = arr.size();
        vector<int> diff(n + 1, 0);

        for (auto& update : updates) {
            int left = update[0];
            int right = update[1];
            int value = update[2];

            diff[left] += value;

            if (right + 1 < n) {
                diff[right + 1] -= value;
            }
        }

        int current = 0;

        for (int i = 0; i < n; i++) {
            current += diff[i];
            arr[i] += current;
        }

        return arr;
    }
};`
  },
    "da-m1": {
    python: `def corp_flight_bookings(bookings, n):
    diff = [0] * (n + 1)

    for first, last, seats in bookings:
        diff[first - 1] += seats
        if last < n:
            diff[last] -= seats

    result = [0] * n
    current = 0

    for i in range(n):
        current += diff[i]
        result[i] = current

    return result`,

    java: `class Solution {
    public int[] corpFlightBookings(int[][] bookings, int n) {
        int[] diff = new int[n + 1];

        for (int[] booking : bookings) {
            int first = booking[0];
            int last = booking[1];
            int seats = booking[2];

            diff[first - 1] += seats;

            if (last < n) {
                diff[last] -= seats;
            }
        }

        int[] result = new int[n];
        int current = 0;

        for (int i = 0; i < n; i++) {
            current += diff[i];
            result[i] = current;
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

void corpFlightBookings(int bookings[][3], int m, int n, int result[]) {
    int diff[n + 1];

    for (int i = 0; i <= n; i++)
        diff[i] = 0;

    for (int i = 0; i < m; i++) {
        int first = bookings[i][0];
        int last = bookings[i][1];
        int seats = bookings[i][2];

        diff[first - 1] += seats;

        if (last < n)
            diff[last] -= seats;
    }

    int current = 0;

    for (int i = 0; i < n; i++) {
        current += diff[i];
        result[i] = current;
    }
}`,

    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> corpFlightBookings(vector<vector<int>>& bookings, int n) {
        vector<int> diff(n + 1, 0);

        for (auto& booking : bookings) {
            int first = booking[0];
            int last = booking[1];
            int seats = booking[2];

            diff[first - 1] += seats;

            if (last < n)
                diff[last] -= seats;
        }

        vector<int> result(n);
        int current = 0;

        for (int i = 0; i < n; i++) {
            current += diff[i];
            result[i] = current;
        }

        return result;
    }
};`
  },
    "da-m2": {
    python: `def shifting_letters(s, shifts):
    n = len(s)
    diff = [0] * (n + 1)

    for left, right in shifts:
        diff[left] += 1
        if right + 1 < n:
            diff[right + 1] -= 1

    result = []
    current = 0

    for i in range(n):
        current += diff[i]
        new_char = chr((ord(s[i]) - ord('a') + current) % 26 + ord('a'))
        result.append(new_char)

    return "".join(result)`,

    java: `class Solution {
    public String shiftingLetters(String s, int[][] shifts) {
        int n = s.length();
        int[] diff = new int[n + 1];

        for (int[] shift : shifts) {
            int left = shift[0];
            int right = shift[1];

            diff[left]++;

            if (right + 1 < n) {
                diff[right + 1]--;
            }
        }

        StringBuilder result = new StringBuilder();
        int current = 0;

        for (int i = 0; i < n; i++) {
            current += diff[i];

            char ch = (char) ((s.charAt(i) - 'a' + current) % 26 + 'a');
            result.append(ch);
        }

        return result.toString();
    }
}`,

    c: `#include <stdio.h>
#include <string.h>

void shiftingLetters(char s[], int shifts[][2], int m) {
    int n = strlen(s);
    int diff[n + 1];

    for (int i = 0; i <= n; i++)
        diff[i] = 0;

    for (int i = 0; i < m; i++) {
        int left = shifts[i][0];
        int right = shifts[i][1];

        diff[left]++;

        if (right + 1 < n)
            diff[right + 1]--;
    }

    int current = 0;

    for (int i = 0; i < n; i++) {
        current += diff[i];
        s[i] = ((s[i] - 'a' + current) % 26) + 'a';
    }
}`,

    cpp: `#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    string shiftingLetters(string s, vector<vector<int>>& shifts) {
        int n = s.size();
        vector<int> diff(n + 1, 0);

        for (auto& shift : shifts) {
            int left = shift[0];
            int right = shift[1];

            diff[left]++;

            if (right + 1 < n)
                diff[right + 1]--;
        }

        int current = 0;

        for (int i = 0; i < n; i++) {
            current += diff[i];
            s[i] = ((s[i] - 'a' + current) % 26) + 'a';
        }

        return s;
    }
};`
  },
    "da-m3": {
    python: `def range_addition(length, updates):
    diff = [0] * (length + 1)

    for left, right, value in updates:
        diff[left] += value
        if right + 1 < length:
            diff[right + 1] -= value

    result = [0] * length
    current = 0

    for i in range(length):
        current += diff[i]
        result[i] = current

    return result`,

    java: `class Solution {
    public int[] rangeAddition(int length, int[][] updates) {
        int[] diff = new int[length + 1];

        for (int[] update : updates) {
            int left = update[0];
            int right = update[1];
            int value = update[2];

            diff[left] += value;

            if (right + 1 < length) {
                diff[right + 1] -= value;
            }
        }

        int[] result = new int[length];
        int current = 0;

        for (int i = 0; i < length; i++) {
            current += diff[i];
            result[i] = current;
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

void rangeAddition(int length, int updates[][3], int m, int result[]) {
    int diff[length + 1];

    for (int i = 0; i <= length; i++)
        diff[i] = 0;

    for (int i = 0; i < m; i++) {
        int left = updates[i][0];
        int right = updates[i][1];
        int value = updates[i][2];

        diff[left] += value;

        if (right + 1 < length)
            diff[right + 1] -= value;
    }

    int current = 0;

    for (int i = 0; i < length; i++) {
        current += diff[i];
        result[i] = current;
    }
}`,

    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> rangeAddition(int length, vector<vector<int>>& updates) {
        vector<int> diff(length + 1, 0);

        for (auto& update : updates) {
            int left = update[0];
            int right = update[1];
            int value = update[2];

            diff[left] += value;

            if (right + 1 < length)
                diff[right + 1] -= value;
        }

        vector<int> result(length);
        int current = 0;

        for (int i = 0; i < length; i++) {
            current += diff[i];
            result[i] = current;
        }

        return result;
    }
};`
  },
    "da-m4": {
    python: `def max_after_updates(n, updates):
    diff = [0] * (n + 1)

    for left, right, value in updates:
        diff[left - 1] += value
        if right < n:
            diff[right] -= value

    current = 0
    maximum = float("-inf")

    for i in range(n):
        current += diff[i]
        maximum = max(maximum, current)

    return maximum`,

    java: `class Solution {
    public int maxAfterUpdates(int n, int[][] updates) {
        int[] diff = new int[n + 1];

        for (int[] update : updates) {
            int left = update[0];
            int right = update[1];
            int value = update[2];

            diff[left - 1] += value;

            if (right < n) {
                diff[right] -= value;
            }
        }

        int current = 0;
        int maximum = Integer.MIN_VALUE;

        for (int i = 0; i < n; i++) {
            current += diff[i];
            maximum = Math.max(maximum, current);
        }

        return maximum;
    }
}`,

    c: `#include <stdio.h>
#include <limits.h>

int maxAfterUpdates(int n, int updates[][3], int m) {
    int diff[n + 1];

    for (int i = 0; i <= n; i++)
        diff[i] = 0;

    for (int i = 0; i < m; i++) {
        int left = updates[i][0];
        int right = updates[i][1];
        int value = updates[i][2];

        diff[left - 1] += value;

        if (right < n)
            diff[right] -= value;
    }

    int current = 0;
    int maximum = INT_MIN;

    for (int i = 0; i < n; i++) {
        current += diff[i];

        if (current > maximum)
            maximum = current;
    }

    return maximum;
}`,

    cpp: `#include <vector>
#include <climits>
using namespace std;

class Solution {
public:
    int maxAfterUpdates(int n, vector<vector<int>>& updates) {
        vector<int> diff(n + 1, 0);

        for (auto& update : updates) {
            int left = update[0];
            int right = update[1];
            int value = update[2];

            diff[left - 1] += value;

            if (right < n)
                diff[right] -= value;
        }

        int current = 0;
        int maximum = INT_MIN;

        for (int i = 0; i < n; i++) {
            current += diff[i];
            maximum = max(maximum, current);
        }

        return maximum;
    }
};`
  },
    "da-m5": {
    python: `def answer_queries(arr, updates, queries):
    n = len(arr)
    diff = [0] * (n + 1)

    for left, right, value in updates:
        diff[left] += value
        if right + 1 < n:
            diff[right + 1] -= value

    current = 0
    final = [0] * n

    for i in range(n):
        current += diff[i]
        final[i] = arr[i] + current

    answer = []

    for index in queries:
        answer.append(final[index])

    return answer`,

    java: `class Solution {
    public int[] answerQueries(int[] arr, int[][] updates, int[] queries) {
        int n = arr.length;
        int[] diff = new int[n + 1];

        for (int[] update : updates) {
            int left = update[0];
            int right = update[1];
            int value = update[2];

            diff[left] += value;

            if (right + 1 < n) {
                diff[right + 1] -= value;
            }
        }

        int[] finalArray = new int[n];
        int current = 0;

        for (int i = 0; i < n; i++) {
            current += diff[i];
            finalArray[i] = arr[i] + current;
        }

        int[] answer = new int[queries.length];

        for (int i = 0; i < queries.length; i++) {
            answer[i] = finalArray[queries[i]];
        }

        return answer;
    }
}`,

    c: `#include <stdio.h>

void answerQueries(int arr[], int n, int updates[][3], int m, int queries[], int q, int result[]) {
    int diff[n + 1];

    for (int i = 0; i <= n; i++)
        diff[i] = 0;

    for (int i = 0; i < m; i++) {
        int left = updates[i][0];
        int right = updates[i][1];
        int value = updates[i][2];

        diff[left] += value;

        if (right + 1 < n)
            diff[right + 1] -= value;
    }

    int finalArray[n];
    int current = 0;

    for (int i = 0; i < n; i++) {
        current += diff[i];
        finalArray[i] = arr[i] + current;
    }

    for (int i = 0; i < q; i++) {
        result[i] = finalArray[queries[i]];
    }
}`,

    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> answerQueries(vector<int>& arr, vector<vector<int>>& updates, vector<int>& queries) {
        int n = arr.size();
        vector<int> diff(n + 1, 0);

        for (auto& update : updates) {
            int left = update[0];
            int right = update[1];
            int value = update[2];

            diff[left] += value;

            if (right + 1 < n)
                diff[right + 1] -= value;
        }

        vector<int> finalArray(n);
        int current = 0;

        for (int i = 0; i < n; i++) {
            current += diff[i];
            finalArray[i] = arr[i] + current;
        }

        vector<int> answer;

        for (int index : queries) {
            answer.push_back(finalArray[index]);
        }

        return answer;
    }
};`
  },
    "da-h1": {
    python: `class DifferenceArray:
    def __init__(self, n):
        self.n = n
        self.diff = [0] * (n + 1)

    def update(self, left, right, value):
        self.diff[left] += value
        if right + 1 < self.n:
            self.diff[right + 1] -= value

    def build(self):
        result = [0] * self.n
        current = 0

        for i in range(self.n):
            current += self.diff[i]
            result[i] = current

        return result`,

    java: `class DifferenceArray {
    private int[] diff;
    private int n;

    public DifferenceArray(int n) {
        this.n = n;
        diff = new int[n + 1];
    }

    public void update(int left, int right, int value) {
        diff[left] += value;

        if (right + 1 < n) {
            diff[right + 1] -= value;
        }
    }

    public int[] build() {
        int[] result = new int[n];
        int current = 0;

        for (int i = 0; i < n; i++) {
            current += diff[i];
            result[i] = current;
        }

        return result;
    }
}`,

    c: `#include <stdlib.h>

typedef struct {
    int* diff;
    int n;
} DifferenceArray;

void update(DifferenceArray* obj, int left, int right, int value) {
    obj->diff[left] += value;

    if (right + 1 < obj->n) {
        obj->diff[right + 1] -= value;
    }
}

void build(DifferenceArray* obj, int result[]) {
    int current = 0;

    for (int i = 0; i < obj->n; i++) {
        current += obj->diff[i];
        result[i] = current;
    }
}`,

    cpp: `#include <vector>
using namespace std;

class DifferenceArray {
private:
    vector<int> diff;
    int n;

public:
    DifferenceArray(int n) {
        this->n = n;
        diff.assign(n + 1, 0);
    }

    void update(int left, int right, int value) {
        diff[left] += value;

        if (right + 1 < n) {
            diff[right + 1] -= value;
        }
    }

    vector<int> build() {
        vector<int> result(n);
        int current = 0;

        for (int i = 0; i < n; i++) {
            current += diff[i];
            result[i] = current;
        }

        return result;
    }
};`
  },
    "da-h2": {
    python: `def point_queries(arr, updates, queries):
    n = len(arr)
    diff = [0] * (n + 1)

    for left, right, value in updates:
        diff[left] += value
        if right + 1 < n:
            diff[right + 1] -= value

    current = 0
    final = [0] * n

    for i in range(n):
        current += diff[i]
        final[i] = arr[i] + current

    result = []

    for index in queries:
        result.append(final[index])

    return result`,

    java: `class Solution {
    public int[] pointQueries(int[] arr, int[][] updates, int[] queries) {
        int n = arr.length;
        int[] diff = new int[n + 1];

        for (int[] update : updates) {
            int left = update[0];
            int right = update[1];
            int value = update[2];

            diff[left] += value;

            if (right + 1 < n) {
                diff[right + 1] -= value;
            }
        }

        int[] finalArray = new int[n];
        int current = 0;

        for (int i = 0; i < n; i++) {
            current += diff[i];
            finalArray[i] = arr[i] + current;
        }

        int[] result = new int[queries.length];

        for (int i = 0; i < queries.length; i++) {
            result[i] = finalArray[queries[i]];
        }

        return result;
    }
}`,

    c: `#include <stdio.h>

void pointQueries(int arr[], int n, int updates[][3], int m, int queries[], int q, int result[]) {
    int diff[n + 1];

    for (int i = 0; i <= n; i++)
        diff[i] = 0;

    for (int i = 0; i < m; i++) {
        int left = updates[i][0];
        int right = updates[i][1];
        int value = updates[i][2];

        diff[left] += value;

        if (right + 1 < n)
            diff[right + 1] -= value;
    }

    int finalArray[n];
    int current = 0;

    for (int i = 0; i < n; i++) {
        current += diff[i];
        finalArray[i] = arr[i] + current;
    }

    for (int i = 0; i < q; i++) {
        result[i] = finalArray[queries[i]];
    }
}`,

    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> pointQueries(vector<int>& arr, vector<vector<int>>& updates, vector<int>& queries) {
        int n = arr.size();
        vector<int> diff(n + 1, 0);

        for (auto& update : updates) {
            int left = update[0];
            int right = update[1];
            int value = update[2];

            diff[left] += value;

            if (right + 1 < n)
                diff[right + 1] -= value;
        }

        vector<int> finalArray(n);
        int current = 0;

        for (int i = 0; i < n; i++) {
            current += diff[i];
            finalArray[i] = arr[i] + current;
        }

        vector<int> result;

        for (int index : queries) {
            result.push_back(finalArray[index]);
        }

        return result;
    }
};`
  },
    "da-h3": {
    python: `def difference_array_2d(matrix, updates):
    rows = len(matrix)
    cols = len(matrix[0])

    diff = [[0] * (cols + 1) for _ in range(rows + 1)]

    for r1, c1, r2, c2, value in updates:
        diff[r1][c1] += value

        if r2 + 1 < rows:
            diff[r2 + 1][c1] -= value

        if c2 + 1 < cols:
            diff[r1][c2 + 1] -= value

        if r2 + 1 < rows and c2 + 1 < cols:
            diff[r2 + 1][c2 + 1] += value

    for i in range(rows):
        for j in range(cols):
            if i > 0:
                diff[i][j] += diff[i - 1][j]
            if j > 0:
                diff[i][j] += diff[i][j - 1]
            if i > 0 and j > 0:
                diff[i][j] -= diff[i - 1][j - 1]

            matrix[i][j] += diff[i][j]

    return matrix`,

    java: `class Solution {
    public int[][] differenceArray2D(int[][] matrix, int[][] updates) {
        int rows = matrix.length;
        int cols = matrix[0].length;

        int[][] diff = new int[rows + 1][cols + 1];

        for (int[] update : updates) {
            int r1 = update[0];
            int c1 = update[1];
            int r2 = update[2];
            int c2 = update[3];
            int value = update[4];

            diff[r1][c1] += value;

            if (r2 + 1 < rows)
                diff[r2 + 1][c1] -= value;

            if (c2 + 1 < cols)
                diff[r1][c2 + 1] -= value;

            if (r2 + 1 < rows && c2 + 1 < cols)
                diff[r2 + 1][c2 + 1] += value;
        }

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {

                if (i > 0)
                    diff[i][j] += diff[i - 1][j];

                if (j > 0)
                    diff[i][j] += diff[i][j - 1];

                if (i > 0 && j > 0)
                    diff[i][j] -= diff[i - 1][j - 1];

                matrix[i][j] += diff[i][j];
            }
        }

        return matrix;
    }
}`,

    c: `#include <stdio.h>

void differenceArray2D(int matrix[][1000], int rows, int cols, int updates[][5], int m) {
    int diff[1001][1001] = {0};

    for (int i = 0; i < m; i++) {
        int r1 = updates[i][0];
        int c1 = updates[i][1];
        int r2 = updates[i][2];
        int c2 = updates[i][3];
        int value = updates[i][4];

        diff[r1][c1] += value;

        if (r2 + 1 < rows)
            diff[r2 + 1][c1] -= value;

        if (c2 + 1 < cols)
            diff[r1][c2 + 1] -= value;

        if (r2 + 1 < rows && c2 + 1 < cols)
            diff[r2 + 1][c2 + 1] += value;
    }

    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {

            if (i > 0)
                diff[i][j] += diff[i - 1][j];

            if (j > 0)
                diff[i][j] += diff[i][j - 1];

            if (i > 0 && j > 0)
                diff[i][j] -= diff[i - 1][j - 1];

            matrix[i][j] += diff[i][j];
        }
    }
}`,

    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<vector<int>> differenceArray2D(vector<vector<int>>& matrix, vector<vector<int>>& updates) {
        int rows = matrix.size();
        int cols = matrix[0].size();

        vector<vector<int>> diff(rows + 1, vector<int>(cols + 1, 0));

        for (auto& update : updates) {
            int r1 = update[0];
            int c1 = update[1];
            int r2 = update[2];
            int c2 = update[3];
            int value = update[4];

            diff[r1][c1] += value;

            if (r2 + 1 < rows)
                diff[r2 + 1][c1] -= value;

            if (c2 + 1 < cols)
                diff[r1][c2 + 1] -= value;

            if (r2 + 1 < rows && c2 + 1 < cols)
                diff[r2 + 1][c2 + 1] += value;
        }

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {

                if (i > 0)
                    diff[i][j] += diff[i - 1][j];

                if (j > 0)
                    diff[i][j] += diff[i][j - 1];

                if (i > 0 && j > 0)
                    diff[i][j] -= diff[i - 1][j - 1];

                matrix[i][j] += diff[i][j];
            }
        }

        return matrix;
    }
};`
  },
    "da-h4": {
    python: `def circular_updates(arr, updates):
    n = len(arr)
    diff = [0] * (n + 1)

    for left, right, value in updates:
        if left <= right:
            diff[left] += value
            if right + 1 < n:
                diff[right + 1] -= value
        else:
            diff[0] += value
            if right + 1 < n:
                diff[right + 1] -= value

            diff[left] += value

    current = 0

    for i in range(n):
        current += diff[i]
        arr[i] += current

    return arr`,

    java: `class Solution {
    public int[] circularUpdates(int[] arr, int[][] updates) {
        int n = arr.length;
        int[] diff = new int[n + 1];

        for (int[] update : updates) {
            int left = update[0];
            int right = update[1];
            int value = update[2];

            if (left <= right) {
                diff[left] += value;

                if (right + 1 < n) {
                    diff[right + 1] -= value;
                }
            } else {
                diff[0] += value;

                if (right + 1 < n) {
                    diff[right + 1] -= value;
                }

                diff[left] += value;
            }
        }

        int current = 0;

        for (int i = 0; i < n; i++) {
            current += diff[i];
            arr[i] += current;
        }

        return arr;
    }
}`,

    c: `#include <stdio.h>

void circularUpdates(int arr[], int n, int updates[][3], int m) {
    int diff[n + 1];

    for (int i = 0; i <= n; i++)
        diff[i] = 0;

    for (int i = 0; i < m; i++) {
        int left = updates[i][0];
        int right = updates[i][1];
        int value = updates[i][2];

        if (left <= right) {
            diff[left] += value;

            if (right + 1 < n)
                diff[right + 1] -= value;
        } else {
            diff[0] += value;

            if (right + 1 < n)
                diff[right + 1] -= value;

            diff[left] += value;
        }
    }

    int current = 0;

    for (int i = 0; i < n; i++) {
        current += diff[i];
        arr[i] += current;
    }
}`,

    cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> circularUpdates(vector<int>& arr, vector<vector<int>>& updates) {
        int n = arr.size();
        vector<int> diff(n + 1, 0);

        for (auto& update : updates) {
            int left = update[0];
            int right = update[1];
            int value = update[2];

            if (left <= right) {
                diff[left] += value;

                if (right + 1 < n)
                    diff[right + 1] -= value;
            } else {
                diff[0] += value;

                if (right + 1 < n)
                    diff[right + 1] -= value;

                diff[left] += value;
            }
        }

        int current = 0;

        for (int i = 0; i < n; i++) {
            current += diff[i];
            arr[i] += current;
        }

        return arr;
    }
};`
  },
    "da-h5": {
    python: `class OnlineDifferenceArray:
    def __init__(self, n):
        self.n = n
        self.diff = [0] * (n + 1)

    def update(self, left, right, value):
        self.diff[left] += value
        if right + 1 < self.n:
            self.diff[right + 1] -= value

    def build(self):
        result = [0] * self.n
        current = 0

        for i in range(self.n):
            current += self.diff[i]
            result[i] = current

        return result`,

    java: `class OnlineDifferenceArray {
    private int[] diff;
    private int n;

    public OnlineDifferenceArray(int n) {
        this.n = n;
        diff = new int[n + 1];
    }

    public void update(int left, int right, int value) {
        diff[left] += value;

        if (right + 1 < n) {
            diff[right + 1] -= value;
        }
    }

    public int[] build() {
        int[] result = new int[n];
        int current = 0;

        for (int i = 0; i < n; i++) {
            current += diff[i];
            result[i] = current;
        }

        return result;
    }
}`,

    c: `#include <stdlib.h>

typedef struct {
    int *diff;
    int n;
} OnlineDifferenceArray;

void update(OnlineDifferenceArray* obj, int left, int right, int value) {
    obj->diff[left] += value;

    if (right + 1 < obj->n) {
        obj->diff[right + 1] -= value;
    }
}

void build(OnlineDifferenceArray* obj, int result[]) {
    int current = 0;

    for (int i = 0; i < obj->n; i++) {
        current += obj->diff[i];
        result[i] = current;
    }
}`,

    cpp: `#include <vector>
using namespace std;

class OnlineDifferenceArray {
private:
    vector<int> diff;
    int n;

public:
    OnlineDifferenceArray(int n) {
        this->n = n;
        diff.assign(n + 1, 0);
    }

    void update(int left, int right, int value) {
        diff[left] += value;

        if (right + 1 < n) {
            diff[right + 1] -= value;
        }
    }

    vector<int> build() {
        vector<int> result(n);
        int current = 0;

        for (int i = 0; i < n; i++) {
            current += diff[i];
            result[i] = current;
        }

        return result;
    }
};`
  }
};