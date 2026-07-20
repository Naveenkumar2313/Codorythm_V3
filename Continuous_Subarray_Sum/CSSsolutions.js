export const CSSsolutions = {
  'css-e1': {
  python: `def has_valid_shipment_sequence(shipments, k):
    if k == 0:
        for i in range(len(shipments) - 1):
            if shipments[i] == 0 and shipments[i + 1] == 0:
                return True
        return False

    remainder_index = {0: -1}
    prefix_sum = 0

    for i, weight in enumerate(shipments):
        prefix_sum += weight
        remainder = prefix_sum % k

        if remainder in remainder_index:
            if i - remainder_index[remainder] >= 2:
                return True
        else:
            remainder_index[remainder] = i

    return False

n = int(input())
shipments = list(map(int, input().split()))
k = int(input())
print(str(has_valid_shipment_sequence(shipments, k)).lower())`,

  java: `import java.util.*;

public class Solution {
    public static boolean hasValidShipmentSequence(int[] shipments, int k) {
        if (k == 0) {
            for (int i = 0; i < shipments.length - 1; i++) {
                if (shipments[i] == 0 && shipments[i + 1] == 0) {
                    return true;
                }
            }
            return false;
        }

        Map<Integer, Integer> remainderIndex = new HashMap<>();
        remainderIndex.put(0, -1);

        long prefixSum = 0;

        for (int i = 0; i < shipments.length; i++) {
            prefixSum += shipments[i];
            int remainder = (int)(prefixSum % k);

            if (remainderIndex.containsKey(remainder)) {
                if (i - remainderIndex.get(remainder) >= 2) {
                    return true;
                }
            } else {
                remainderIndex.put(remainder, i);
            }
        }

        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] shipments = new int[n];

            for (int i = 0; i < n; i++) {
                shipments[i] = sc.nextInt();
            }

            int k = sc.nextInt();

            System.out.println(hasValidShipmentSequence(shipments, k));
        }
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct Node {
    int remainder;
    int index;
    struct Node* next;
} Node;

#define TABLE_SIZE 100003

Node* table[TABLE_SIZE];

int hash(int key) {
    if (key < 0) key = -key;
    return key % TABLE_SIZE;
}

Node* find(int remainder) {
    int h = hash(remainder);
    Node* cur = table[h];
    while (cur) {
        if (cur->remainder == remainder) return cur;
        cur = cur->next;
    }
    return NULL;
}

void insert(int remainder, int index) {
    int h = hash(remainder);
    Node* node = (Node*)malloc(sizeof(Node));
    node->remainder = remainder;
    node->index = index;
    node->next = table[h];
    table[h] = node;
}

bool hasValidShipmentSequence(int shipments[], int n, int k) {
    if (k == 0) {
        for (int i = 0; i < n - 1; i++) {
            if (shipments[i] == 0 && shipments[i + 1] == 0)
                return true;
        }
        return false;
    }

    insert(0, -1);

    long long prefixSum = 0;

    for (int i = 0; i < n; i++) {
        prefixSum += shipments[i];
        int remainder = (int)(prefixSum % k);

        Node* node = find(remainder);

        if (node) {
            if (i - node->index >= 2)
                return true;
        } else {
            insert(remainder, i);
        }
    }

    return false;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int* shipments = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
        scanf("%d", &shipments[i]);

    int k;
    scanf("%d", &k);

    printf("%s\\n", hasValidShipmentSequence(shipments, n, k) ? "true" : "false");

    free(shipments);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

bool hasValidShipmentSequence(vector<int>& shipments, int k) {
    if (k == 0) {
        for (int i = 0; i < (int)shipments.size() - 1; i++) {
            if (shipments[i] == 0 && shipments[i + 1] == 0) {
                return true;
            }
        }
        return false;
    }

    unordered_map<int, int> remainderIndex;
    remainderIndex[0] = -1;

    long long prefixSum = 0;

    for (int i = 0; i < (int)shipments.size(); i++) {
        prefixSum += shipments[i];
        int remainder = (int)(prefixSum % k);

        if (remainderIndex.count(remainder)) {
            if (i - remainderIndex[remainder] >= 2) {
                return true;
            }
        } else {
            remainderIndex[remainder] = i;
        }
    }

    return false;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;

    if (cin >> n) {
        vector<int> shipments(n);

        for (int i = 0; i < n; i++) {
            cin >> shipments[i];
        }

        int k;
        cin >> k;

        cout << (hasValidShipmentSequence(shipments, k) ? "true" : "false") << "\\n";
    }

    return 0;
}`
},
'css-e2': {
  python: `def has_valid_sales_period(sales, k):
    if k == 0:
        for i in range(len(sales) - 1):
            if sales[i] == 0 and sales[i + 1] == 0:
                return True
        return False

    remainder_index = {0: -1}
    prefix_sum = 0

    for i, value in enumerate(sales):
        prefix_sum += value
        remainder = prefix_sum % k

        if remainder in remainder_index:
            if i - remainder_index[remainder] >= 2:
                return True
        else:
            remainder_index[remainder] = i

    return False

n = int(input())
sales = list(map(int, input().split()))
k = int(input())
print(str(has_valid_sales_period(sales, k)).lower())`,

  java: `import java.util.*;

public class Solution {
    public static boolean hasValidSalesPeriod(int[] sales, int k) {
        if (k == 0) {
            for (int i = 0; i < sales.length - 1; i++) {
                if (sales[i] == 0 && sales[i + 1] == 0) {
                    return true;
                }
            }
            return false;
        }

        Map<Integer, Integer> remainderIndex = new HashMap<>();
        remainderIndex.put(0, -1);

        long prefixSum = 0;

        for (int i = 0; i < sales.length; i++) {
            prefixSum += sales[i];
            int remainder = (int)(prefixSum % k);

            if (remainderIndex.containsKey(remainder)) {
                if (i - remainderIndex.get(remainder) >= 2) {
                    return true;
                }
            } else {
                remainderIndex.put(remainder, i);
            }
        }

        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] sales = new int[n];

            for (int i = 0; i < n; i++) {
                sales[i] = sc.nextInt();
            }

            int k = sc.nextInt();

            System.out.println(hasValidSalesPeriod(sales, k));
        }
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct Node {
    int remainder;
    int index;
    struct Node* next;
} Node;

#define TABLE_SIZE 100003

Node* table[TABLE_SIZE];

int hash(int key) {
    if (key < 0) key = -key;
    return key % TABLE_SIZE;
}

Node* find(int remainder) {
    int h = hash(remainder);
    Node* cur = table[h];
    while (cur) {
        if (cur->remainder == remainder) return cur;
        cur = cur->next;
    }
    return NULL;
}

void insert(int remainder, int index) {
    int h = hash(remainder);
    Node* node = (Node*)malloc(sizeof(Node));
    node->remainder = remainder;
    node->index = index;
    node->next = table[h];
    table[h] = node;
}

bool hasValidSalesPeriod(int sales[], int n, int k) {
    if (k == 0) {
        for (int i = 0; i < n - 1; i++) {
            if (sales[i] == 0 && sales[i + 1] == 0)
                return true;
        }
        return false;
    }

    insert(0, -1);

    long long prefixSum = 0;

    for (int i = 0; i < n; i++) {
        prefixSum += sales[i];
        int remainder = (int)(prefixSum % k);

        Node* node = find(remainder);

        if (node) {
            if (i - node->index >= 2)
                return true;
        } else {
            insert(remainder, i);
        }
    }

    return false;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int* sales = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
        scanf("%d", &sales[i]);

    int k;
    scanf("%d", &k);

    printf("%s\\n", hasValidSalesPeriod(sales, n, k) ? "true" : "false");

    free(sales);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

bool hasValidSalesPeriod(vector<int>& sales, int k) {
    if (k == 0) {
        for (int i = 0; i < (int)sales.size() - 1; i++) {
            if (sales[i] == 0 && sales[i + 1] == 0) {
                return true;
            }
        }
        return false;
    }

    unordered_map<int, int> remainderIndex;
    remainderIndex[0] = -1;

    long long prefixSum = 0;

    for (int i = 0; i < (int)sales.size(); i++) {
        prefixSum += sales[i];
        int remainder = (int)(prefixSum % k);

        if (remainderIndex.count(remainder)) {
            if (i - remainderIndex[remainder] >= 2) {
                return true;
            }
        } else {
            remainderIndex[remainder] = i;
        }
    }

    return false;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;

    if (cin >> n) {
        vector<int> sales(n);

        for (int i = 0; i < n; i++) {
            cin >> sales[i];
        }

        int k;
        cin >> k;

        cout << (hasValidSalesPeriod(sales, k) ? "true" : "false") << "\\n";
    }

    return 0;
}`
},
'css-e3': {
  python: `def has_valid_power_consumption(consumption, k):
    if k == 0:
        for i in range(len(consumption) - 1):
            if consumption[i] == 0 and consumption[i + 1] == 0:
                return True
        return False

    remainder_index = {0: -1}
    prefix_sum = 0

    for i, units in enumerate(consumption):
        prefix_sum += units
        remainder = prefix_sum % k

        if remainder in remainder_index:
            if i - remainder_index[remainder] >= 2:
                return True
        else:
            remainder_index[remainder] = i

    return False

n = int(input())
consumption = list(map(int, input().split()))
k = int(input())
print(str(has_valid_power_consumption(consumption, k)).lower())`,

  java: `import java.util.*;

public class Solution {
    public static boolean hasValidPowerConsumption(int[] consumption, int k) {
        if (k == 0) {
            for (int i = 0; i < consumption.length - 1; i++) {
                if (consumption[i] == 0 && consumption[i + 1] == 0) {
                    return true;
                }
            }
            return false;
        }

        Map<Integer, Integer> remainderIndex = new HashMap<>();
        remainderIndex.put(0, -1);

        long prefixSum = 0;

        for (int i = 0; i < consumption.length; i++) {
            prefixSum += consumption[i];
            int remainder = (int)(prefixSum % k);

            if (remainderIndex.containsKey(remainder)) {
                if (i - remainderIndex.get(remainder) >= 2) {
                    return true;
                }
            } else {
                remainderIndex.put(remainder, i);
            }
        }

        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] consumption = new int[n];

            for (int i = 0; i < n; i++) {
                consumption[i] = sc.nextInt();
            }

            int k = sc.nextInt();

            System.out.println(hasValidPowerConsumption(consumption, k));
        }
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct Node {
    int remainder;
    int index;
    struct Node* next;
} Node;

#define TABLE_SIZE 100003

Node* table[TABLE_SIZE];

int hash(int key) {
    if (key < 0) key = -key;
    return key % TABLE_SIZE;
}

Node* find(int remainder) {
    int h = hash(remainder);
    Node* cur = table[h];
    while (cur) {
        if (cur->remainder == remainder) return cur;
        cur = cur->next;
    }
    return NULL;
}

void insert(int remainder, int index) {
    int h = hash(remainder);
    Node* node = (Node*)malloc(sizeof(Node));
    node->remainder = remainder;
    node->index = index;
    node->next = table[h];
    table[h] = node;
}

bool hasValidPowerConsumption(int consumption[], int n, int k) {
    if (k == 0) {
        for (int i = 0; i < n - 1; i++) {
            if (consumption[i] == 0 && consumption[i + 1] == 0)
                return true;
        }
        return false;
    }

    insert(0, -1);

    long long prefixSum = 0;

    for (int i = 0; i < n; i++) {
        prefixSum += consumption[i];
        int remainder = (int)(prefixSum % k);

        Node* node = find(remainder);

        if (node) {
            if (i - node->index >= 2)
                return true;
        } else {
            insert(remainder, i);
        }
    }

    return false;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int* consumption = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
        scanf("%d", &consumption[i]);

    int k;
    scanf("%d", &k);

    printf("%s\\n", hasValidPowerConsumption(consumption, n, k) ? "true" : "false");

    free(consumption);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

bool hasValidPowerConsumption(vector<int>& consumption, int k) {
    if (k == 0) {
        for (int i = 0; i < (int)consumption.size() - 1; i++) {
            if (consumption[i] == 0 && consumption[i + 1] == 0) {
                return true;
            }
        }
        return false;
    }

    unordered_map<int, int> remainderIndex;
    remainderIndex[0] = -1;

    long long prefixSum = 0;

    for (int i = 0; i < (int)consumption.size(); i++) {
        prefixSum += consumption[i];
        int remainder = (int)(prefixSum % k);

        if (remainderIndex.count(remainder)) {
            if (i - remainderIndex[remainder] >= 2) {
                return true;
            }
        } else {
            remainderIndex[remainder] = i;
        }
    }

    return false;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;

    if (cin >> n) {
        vector<int> consumption(n);

        for (int i = 0; i < n; i++) {
            cin >> consumption[i];
        }

        int k;
        cin >> k;

        cout << (hasValidPowerConsumption(consumption, k) ? "true" : "false") << "\\n";
    }

    return 0;
}`
},
'css-e4': {
  python: `def has_valid_temperature_readings(readings, k):
    if k == 0:
        for i in range(len(readings) - 1):
            if readings[i] == 0 and readings[i + 1] == 0:
                return True
        return False

    remainder_index = {0: -1}
    prefix_sum = 0

    for i, value in enumerate(readings):
        prefix_sum += value
        remainder = prefix_sum % k

        if remainder in remainder_index:
            if i - remainder_index[remainder] >= 2:
                return True
        else:
            remainder_index[remainder] = i

    return False

n = int(input())
readings = list(map(int, input().split()))
k = int(input())
print(str(has_valid_temperature_readings(readings, k)).lower())`,

  java: `import java.util.*;

public class Solution {
    public static boolean hasValidTemperatureReadings(int[] readings, int k) {
        if (k == 0) {
            for (int i = 0; i < readings.length - 1; i++) {
                if (readings[i] == 0 && readings[i + 1] == 0) {
                    return true;
                }
            }
            return false;
        }

        Map<Integer, Integer> remainderIndex = new HashMap<>();
        remainderIndex.put(0, -1);

        long prefixSum = 0;

        for (int i = 0; i < readings.length; i++) {
            prefixSum += readings[i];
            int remainder = (int) (prefixSum % k);

            if (remainderIndex.containsKey(remainder)) {
                if (i - remainderIndex.get(remainder) >= 2) {
                    return true;
                }
            } else {
                remainderIndex.put(remainder, i);
            }
        }

        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] readings = new int[n];

            for (int i = 0; i < n; i++) {
                readings[i] = sc.nextInt();
            }

            int k = sc.nextInt();

            System.out.println(hasValidTemperatureReadings(readings, k));
        }
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct Node {
    int remainder;
    int index;
    struct Node* next;
} Node;

#define TABLE_SIZE 100003

Node* table[TABLE_SIZE];

int hash(int key) {
    if (key < 0)
        key = -key;
    return key % TABLE_SIZE;
}

Node* find(int remainder) {
    int h = hash(remainder);
    Node* current = table[h];

    while (current) {
        if (current->remainder == remainder)
            return current;
        current = current->next;
    }

    return NULL;
}

void insert(int remainder, int index) {
    int h = hash(remainder);

    Node* node = (Node*)malloc(sizeof(Node));
    node->remainder = remainder;
    node->index = index;
    node->next = table[h];
    table[h] = node;
}

bool hasValidTemperatureReadings(int readings[], int n, int k) {
    if (k == 0) {
        for (int i = 0; i < n - 1; i++) {
            if (readings[i] == 0 && readings[i + 1] == 0)
                return true;
        }
        return false;
    }

    insert(0, -1);

    long long prefixSum = 0;

    for (int i = 0; i < n; i++) {
        prefixSum += readings[i];
        int remainder = (int)(prefixSum % k);

        Node* node = find(remainder);

        if (node) {
            if (i - node->index >= 2)
                return true;
        } else {
            insert(remainder, i);
        }
    }

    return false;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int* readings = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
        scanf("%d", &readings[i]);

    int k;
    scanf("%d", &k);

    printf("%s\\n", hasValidTemperatureReadings(readings, n, k) ? "true" : "false");

    free(readings);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

bool hasValidTemperatureReadings(vector<int>& readings, int k) {
    if (k == 0) {
        for (int i = 0; i < (int)readings.size() - 1; i++) {
            if (readings[i] == 0 && readings[i + 1] == 0) {
                return true;
            }
        }
        return false;
    }

    unordered_map<int, int> remainderIndex;
    remainderIndex[0] = -1;

    long long prefixSum = 0;

    for (int i = 0; i < (int)readings.size(); i++) {
        prefixSum += readings[i];
        int remainder = (int)(prefixSum % k);

        if (remainderIndex.count(remainder)) {
            if (i - remainderIndex[remainder] >= 2) {
                return true;
            }
        } else {
            remainderIndex[remainder] = i;
        }
    }

    return false;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;

    if (cin >> n) {
        vector<int> readings(n);

        for (int i = 0; i < n; i++) {
            cin >> readings[i];
        }

        int k;
        cin >> k;

        cout << (hasValidTemperatureReadings(readings, k) ? "true" : "false") << "\\n";
    }

    return 0;
}`
},
'css-e5': {
  python: `def has_valid_transaction_history(transactions, k):
    if k == 0:
        for i in range(len(transactions) - 1):
            if transactions[i] == 0 and transactions[i + 1] == 0:
                return True
        return False

    remainder_index = {0: -1}
    prefix_sum = 0

    for i, amount in enumerate(transactions):
        prefix_sum += amount
        remainder = prefix_sum % k

        if remainder in remainder_index:
            if i - remainder_index[remainder] >= 2:
                return True
        else:
            remainder_index[remainder] = i

    return False

n = int(input())
transactions = list(map(int, input().split()))
k = int(input())
print(str(has_valid_transaction_history(transactions, k)).lower())`,

  java: `import java.util.*;

public class Solution {
    public static boolean hasValidTransactionHistory(int[] transactions, int k) {
        if (k == 0) {
            for (int i = 0; i < transactions.length - 1; i++) {
                if (transactions[i] == 0 && transactions[i + 1] == 0) {
                    return true;
                }
            }
            return false;
        }

        Map<Integer, Integer> remainderIndex = new HashMap<>();
        remainderIndex.put(0, -1);

        long prefixSum = 0;

        for (int i = 0; i < transactions.length; i++) {
            prefixSum += transactions[i];
            int remainder = (int)(prefixSum % k);

            if (remainderIndex.containsKey(remainder)) {
                if (i - remainderIndex.get(remainder) >= 2) {
                    return true;
                }
            } else {
                remainderIndex.put(remainder, i);
            }
        }

        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] transactions = new int[n];

            for (int i = 0; i < n; i++) {
                transactions[i] = sc.nextInt();
            }

            int k = sc.nextInt();

            System.out.println(hasValidTransactionHistory(transactions, k));
        }
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct Node {
    int remainder;
    int index;
    struct Node* next;
} Node;

#define TABLE_SIZE 100003

Node* table[TABLE_SIZE];

int hash(int key) {
    if (key < 0)
        key = -key;
    return key % TABLE_SIZE;
}

Node* find(int remainder) {
    int h = hash(remainder);
    Node* current = table[h];

    while (current) {
        if (current->remainder == remainder)
            return current;
        current = current->next;
    }

    return NULL;
}

void insert(int remainder, int index) {
    int h = hash(remainder);

    Node* node = (Node*)malloc(sizeof(Node));
    node->remainder = remainder;
    node->index = index;
    node->next = table[h];
    table[h] = node;
}

bool hasValidTransactionHistory(int transactions[], int n, int k) {
    if (k == 0) {
        for (int i = 0; i < n - 1; i++) {
            if (transactions[i] == 0 && transactions[i + 1] == 0)
                return true;
        }
        return false;
    }

    insert(0, -1);

    long long prefixSum = 0;

    for (int i = 0; i < n; i++) {
        prefixSum += transactions[i];
        int remainder = (int)(prefixSum % k);

        Node* node = find(remainder);

        if (node) {
            if (i - node->index >= 2)
                return true;
        } else {
            insert(remainder, i);
        }
    }

    return false;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int* transactions = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
        scanf("%d", &transactions[i]);

    int k;
    scanf("%d", &k);

    printf("%s\\n", hasValidTransactionHistory(transactions, n, k) ? "true" : "false");

    free(transactions);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

bool hasValidTransactionHistory(vector<int>& transactions, int k) {
    if (k == 0) {
        for (int i = 0; i < (int)transactions.size() - 1; i++) {
            if (transactions[i] == 0 && transactions[i + 1] == 0) {
                return true;
            }
        }
        return false;
    }

    unordered_map<int, int> remainderIndex;
    remainderIndex[0] = -1;

    long long prefixSum = 0;

    for (int i = 0; i < (int)transactions.size(); i++) {
        prefixSum += transactions[i];
        int remainder = (int)(prefixSum % k);

        if (remainderIndex.count(remainder)) {
            if (i - remainderIndex[remainder] >= 2) {
                return true;
            }
        } else {
            remainderIndex[remainder] = i;
        }
    }

    return false;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;

    if (cin >> n) {
        vector<int> transactions(n);

        for (int i = 0; i < n; i++) {
            cin >> transactions[i];
        }

        int k;
        cin >> k;

        cout << (hasValidTransactionHistory(transactions, k) ? "true" : "false") << "\\n";
    }

    return 0;
}`
},
'css-m1': {
  python: `def has_valid_weekly_sales(sales, k):
    if k == 0:
        for i in range(len(sales) - 1):
            if sales[i] == 0 and sales[i + 1] == 0:
                return True
        return False

    remainder_index = {0: -1}
    prefix_sum = 0

    for i, amount in enumerate(sales):
        prefix_sum += amount
        remainder = prefix_sum % k

        if remainder in remainder_index:
            if i - remainder_index[remainder] >= 2:
                return True
        else:
            remainder_index[remainder] = i

    return False

n = int(input())
sales = list(map(int, input().split()))
k = int(input())
print(str(has_valid_weekly_sales(sales, k)).lower())`,

  java: `import java.util.*;

public class Solution {
    public static boolean hasValidWeeklySales(int[] sales, int k) {
        if (k == 0) {
            for (int i = 0; i < sales.length - 1; i++) {
                if (sales[i] == 0 && sales[i + 1] == 0) {
                    return true;
                }
            }
            return false;
        }

        Map<Integer, Integer> remainderIndex = new HashMap<>();
        remainderIndex.put(0, -1);

        long prefixSum = 0;

        for (int i = 0; i < sales.length; i++) {
            prefixSum += sales[i];
            int remainder = (int)(prefixSum % k);

            if (remainderIndex.containsKey(remainder)) {
                if (i - remainderIndex.get(remainder) >= 2) {
                    return true;
                }
            } else {
                remainderIndex.put(remainder, i);
            }
        }

        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] sales = new int[n];

            for (int i = 0; i < n; i++) {
                sales[i] = sc.nextInt();
            }

            int k = sc.nextInt();

            System.out.println(hasValidWeeklySales(sales, k));
        }
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct Node {
    int remainder;
    int index;
    struct Node* next;
} Node;

#define TABLE_SIZE 100003

Node* table[TABLE_SIZE];

int hash(int key) {
    if (key < 0)
        key = -key;
    return key % TABLE_SIZE;
}

Node* find(int remainder) {
    int h = hash(remainder);
    Node* current = table[h];

    while (current) {
        if (current->remainder == remainder)
            return current;
        current = current->next;
    }

    return NULL;
}

void insert(int remainder, int index) {
    int h = hash(remainder);

    Node* node = (Node*)malloc(sizeof(Node));
    node->remainder = remainder;
    node->index = index;
    node->next = table[h];
    table[h] = node;
}

bool hasValidWeeklySales(int sales[], int n, int k) {
    if (k == 0) {
        for (int i = 0; i < n - 1; i++) {
            if (sales[i] == 0 && sales[i + 1] == 0)
                return true;
        }
        return false;
    }

    insert(0, -1);

    long long prefixSum = 0;

    for (int i = 0; i < n; i++) {
        prefixSum += sales[i];
        int remainder = (int)(prefixSum % k);

        Node* node = find(remainder);

        if (node) {
            if (i - node->index >= 2)
                return true;
        } else {
            insert(remainder, i);
        }
    }

    return false;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int* sales = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
        scanf("%d", &sales[i]);

    int k;
    scanf("%d", &k);

    printf("%s\\n", hasValidWeeklySales(sales, n, k) ? "true" : "false");

    free(sales);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

bool hasValidWeeklySales(vector<int>& sales, int k) {
    if (k == 0) {
        for (int i = 0; i < (int)sales.size() - 1; i++) {
            if (sales[i] == 0 && sales[i + 1] == 0) {
                return true;
            }
        }
        return false;
    }

    unordered_map<int, int> remainderIndex;
    remainderIndex[0] = -1;

    long long prefixSum = 0;

    for (int i = 0; i < (int)sales.size(); i++) {
        prefixSum += sales[i];
        int remainder = (int)(prefixSum % k);

        if (remainderIndex.count(remainder)) {
            if (i - remainderIndex[remainder] >= 2) {
                return true;
            }
        } else {
            remainderIndex[remainder] = i;
        }
    }

    return false;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;

    if (cin >> n) {
        vector<int> sales(n);

        for (int i = 0; i < n; i++) {
            cin >> sales[i];
        }

        int k;
        cin >> k;

        cout << (hasValidWeeklySales(sales, k) ? "true" : "false") << "\\n";
    }

    return 0;
}`
},
'css-m2': {
  python: `def has_valid_delivery_route(distances, k):
    if k == 0:
        for i in range(len(distances) - 1):
            if distances[i] == 0 and distances[i + 1] == 0:
                return True
        return False

    remainder_index = {0: -1}
    prefix_sum = 0

    for i, distance in enumerate(distances):
        prefix_sum += distance
        remainder = prefix_sum % k

        if remainder in remainder_index:
            if i - remainder_index[remainder] >= 2:
                return True
        else:
            remainder_index[remainder] = i

    return False

n = int(input())
distances = list(map(int, input().split()))
k = int(input())
print(str(has_valid_delivery_route(distances, k)).lower())`,

  java: `import java.util.*;

public class Solution {
    public static boolean hasValidDeliveryRoute(int[] distances, int k) {
        if (k == 0) {
            for (int i = 0; i < distances.length - 1; i++) {
                if (distances[i] == 0 && distances[i + 1] == 0) {
                    return true;
                }
            }
            return false;
        }

        Map<Integer, Integer> remainderIndex = new HashMap<>();
        remainderIndex.put(0, -1);

        long prefixSum = 0;

        for (int i = 0; i < distances.length; i++) {
            prefixSum += distances[i];
            int remainder = (int)(prefixSum % k);

            if (remainderIndex.containsKey(remainder)) {
                if (i - remainderIndex.get(remainder) >= 2) {
                    return true;
                }
            } else {
                remainderIndex.put(remainder, i);
            }
        }

        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] distances = new int[n];

            for (int i = 0; i < n; i++) {
                distances[i] = sc.nextInt();
            }

            int k = sc.nextInt();

            System.out.println(hasValidDeliveryRoute(distances, k));
        }
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct Node {
    int remainder;
    int index;
    struct Node* next;
} Node;

#define TABLE_SIZE 100003

Node* table[TABLE_SIZE];

int hash(int key) {
    if (key < 0)
        key = -key;
    return key % TABLE_SIZE;
}

Node* find(int remainder) {
    int h = hash(remainder);
    Node* current = table[h];

    while (current) {
        if (current->remainder == remainder)
            return current;
        current = current->next;
    }

    return NULL;
}

void insert(int remainder, int index) {
    int h = hash(remainder);

    Node* node = (Node*)malloc(sizeof(Node));
    node->remainder = remainder;
    node->index = index;
    node->next = table[h];
    table[h] = node;
}

bool hasValidDeliveryRoute(int distances[], int n, int k) {
    if (k == 0) {
        for (int i = 0; i < n - 1; i++) {
            if (distances[i] == 0 && distances[i + 1] == 0)
                return true;
        }
        return false;
    }

    insert(0, -1);

    long long prefixSum = 0;

    for (int i = 0; i < n; i++) {
        prefixSum += distances[i];
        int remainder = (int)(prefixSum % k);

        Node* node = find(remainder);

        if (node) {
            if (i - node->index >= 2)
                return true;
        } else {
            insert(remainder, i);
        }
    }

    return false;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int* distances = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
        scanf("%d", &distances[i]);

    int k;
    scanf("%d", &k);

    printf("%s\\n", hasValidDeliveryRoute(distances, n, k) ? "true" : "false");

    free(distances);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

bool hasValidDeliveryRoute(vector<int>& distances, int k) {
    if (k == 0) {
        for (int i = 0; i < (int)distances.size() - 1; i++) {
            if (distances[i] == 0 && distances[i + 1] == 0) {
                return true;
            }
        }
        return false;
    }

    unordered_map<int, int> remainderIndex;
    remainderIndex[0] = -1;

    long long prefixSum = 0;

    for (int i = 0; i < (int)distances.size(); i++) {
        prefixSum += distances[i];
        int remainder = (int)(prefixSum % k);

        if (remainderIndex.count(remainder)) {
            if (i - remainderIndex[remainder] >= 2) {
                return true;
            }
        } else {
            remainderIndex[remainder] = i;
        }
    }

    return false;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;

    if (cin >> n) {
        vector<int> distances(n);

        for (int i = 0; i < n; i++) {
            cin >> distances[i];
        }

        int k;
        cin >> k;

        cout << (hasValidDeliveryRoute(distances, k) ? "true" : "false") << "\\n";
    }

    return 0;
}`
},
'css-m3': {
  python: `def has_valid_production_batches(batches, k):
    if k == 0:
        for i in range(len(batches) - 1):
            if batches[i] == 0 and batches[i + 1] == 0:
                return True
        return False

    remainder_index = {0: -1}
    prefix_sum = 0

    for i, batch in enumerate(batches):
        prefix_sum += batch
        remainder = prefix_sum % k

        if remainder in remainder_index:
            if i - remainder_index[remainder] >= 2:
                return True
        else:
            remainder_index[remainder] = i

    return False

n = int(input())
batches = list(map(int, input().split()))
k = int(input())
print(str(has_valid_production_batches(batches, k)).lower())`,

  java: `import java.util.*;

public class Solution {
    public static boolean hasValidProductionBatches(int[] batches, int k) {
        if (k == 0) {
            for (int i = 0; i < batches.length - 1; i++) {
                if (batches[i] == 0 && batches[i + 1] == 0) {
                    return true;
                }
            }
            return false;
        }

        Map<Integer, Integer> remainderIndex = new HashMap<>();
        remainderIndex.put(0, -1);

        long prefixSum = 0;

        for (int i = 0; i < batches.length; i++) {
            prefixSum += batches[i];
            int remainder = (int)(prefixSum % k);

            if (remainderIndex.containsKey(remainder)) {
                if (i - remainderIndex.get(remainder) >= 2) {
                    return true;
                }
            } else {
                remainderIndex.put(remainder, i);
            }
        }

        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] batches = new int[n];

            for (int i = 0; i < n; i++) {
                batches[i] = sc.nextInt();
            }

            int k = sc.nextInt();

            System.out.println(hasValidProductionBatches(batches, k));
        }
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct Node {
    int remainder;
    int index;
    struct Node* next;
} Node;

#define TABLE_SIZE 100003

Node* table[TABLE_SIZE];

int hash(int key) {
    if (key < 0)
        key = -key;
    return key % TABLE_SIZE;
}

Node* find(int remainder) {
    int h = hash(remainder);
    Node* current = table[h];

    while (current) {
        if (current->remainder == remainder)
            return current;
        current = current->next;
    }

    return NULL;
}

void insert(int remainder, int index) {
    int h = hash(remainder);

    Node* node = (Node*)malloc(sizeof(Node));
    node->remainder = remainder;
    node->index = index;
    node->next = table[h];
    table[h] = node;
}

bool hasValidProductionBatches(int batches[], int n, int k) {
    if (k == 0) {
        for (int i = 0; i < n - 1; i++) {
            if (batches[i] == 0 && batches[i + 1] == 0)
                return true;
        }
        return false;
    }

    insert(0, -1);

    long long prefixSum = 0;

    for (int i = 0; i < n; i++) {
        prefixSum += batches[i];
        int remainder = (int)(prefixSum % k);

        Node* node = find(remainder);

        if (node) {
            if (i - node->index >= 2)
                return true;
        } else {
            insert(remainder, i);
        }
    }

    return false;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int* batches = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
        scanf("%d", &batches[i]);

    int k;
    scanf("%d", &k);

    printf("%s\\n", hasValidProductionBatches(batches, n, k) ? "true" : "false");

    free(batches);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

bool hasValidProductionBatches(vector<int>& batches, int k) {
    if (k == 0) {
        for (int i = 0; i < (int)batches.size() - 1; i++) {
            if (batches[i] == 0 && batches[i + 1] == 0) {
                return true;
            }
        }
        return false;
    }

    unordered_map<int, int> remainderIndex;
    remainderIndex[0] = -1;

    long long prefixSum = 0;

    for (int i = 0; i < (int)batches.size(); i++) {
        prefixSum += batches[i];
        int remainder = (int)(prefixSum % k);

        if (remainderIndex.count(remainder)) {
            if (i - remainderIndex[remainder] >= 2) {
                return true;
            }
        } else {
            remainderIndex[remainder] = i;
        }
    }

    return false;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;

    if (cin >> n) {
        vector<int> batches(n);

        for (int i = 0; i < n; i++) {
            cin >> batches[i];
        }

        int k;
        cin >> k;

        cout << (hasValidProductionBatches(batches, k) ? "true" : "false") << "\\n";
    }

    return 0;
}`
},
'css-m4': {
  python: `def has_valid_ad_campaign(clicks, k):
    if k == 0:
        for i in range(len(clicks) - 1):
            if clicks[i] == 0 and clicks[i + 1] == 0:
                return True
        return False

    remainder_index = {0: -1}
    prefix_sum = 0

    for i, value in enumerate(clicks):
        prefix_sum += value
        remainder = prefix_sum % k

        if remainder in remainder_index:
            if i - remainder_index[remainder] >= 2:
                return True
        else:
            remainder_index[remainder] = i

    return False

n = int(input())
clicks = list(map(int, input().split()))
k = int(input())
print(str(has_valid_ad_campaign(clicks, k)).lower())`,

  java: `import java.util.*;

public class Solution {
    public static boolean hasValidAdCampaign(int[] clicks, int k) {
        if (k == 0) {
            for (int i = 0; i < clicks.length - 1; i++) {
                if (clicks[i] == 0 && clicks[i + 1] == 0) {
                    return true;
                }
            }
            return false;
        }

        Map<Integer, Integer> remainderIndex = new HashMap<>();
        remainderIndex.put(0, -1);

        long prefixSum = 0;

        for (int i = 0; i < clicks.length; i++) {
            prefixSum += clicks[i];
            int remainder = (int)(prefixSum % k);

            if (remainderIndex.containsKey(remainder)) {
                if (i - remainderIndex.get(remainder) >= 2) {
                    return true;
                }
            } else {
                remainderIndex.put(remainder, i);
            }
        }

        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] clicks = new int[n];

            for (int i = 0; i < n; i++) {
                clicks[i] = sc.nextInt();
            }

            int k = sc.nextInt();

            System.out.println(hasValidAdCampaign(clicks, k));
        }
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct Node {
    int remainder;
    int index;
    struct Node* next;
} Node;

#define TABLE_SIZE 100003

Node* table[TABLE_SIZE];

int hash(int key) {
    if (key < 0)
        key = -key;
    return key % TABLE_SIZE;
}

Node* find(int remainder) {
    int h = hash(remainder);
    Node* current = table[h];

    while (current) {
        if (current->remainder == remainder)
            return current;
        current = current->next;
    }

    return NULL;
}

void insert(int remainder, int index) {
    int h = hash(remainder);

    Node* node = (Node*)malloc(sizeof(Node));
    node->remainder = remainder;
    node->index = index;
    node->next = table[h];
    table[h] = node;
}

bool hasValidAdCampaign(int clicks[], int n, int k) {
    if (k == 0) {
        for (int i = 0; i < n - 1; i++) {
            if (clicks[i] == 0 && clicks[i + 1] == 0)
                return true;
        }
        return false;
    }

    insert(0, -1);

    long long prefixSum = 0;

    for (int i = 0; i < n; i++) {
        prefixSum += clicks[i];
        int remainder = (int)(prefixSum % k);

        Node* node = find(remainder);

        if (node) {
            if (i - node->index >= 2)
                return true;
        } else {
            insert(remainder, i);
        }
    }

    return false;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int* clicks = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
        scanf("%d", &clicks[i]);

    int k;
    scanf("%d", &k);

    printf("%s\\n", hasValidAdCampaign(clicks, n, k) ? "true" : "false");

    free(clicks);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

bool hasValidAdCampaign(vector<int>& clicks, int k) {
    if (k == 0) {
        for (int i = 0; i < (int)clicks.size() - 1; i++) {
            if (clicks[i] == 0 && clicks[i + 1] == 0) {
                return true;
            }
        }
        return false;
    }

    unordered_map<int, int> remainderIndex;
    remainderIndex[0] = -1;

    long long prefixSum = 0;

    for (int i = 0; i < (int)clicks.size(); i++) {
        prefixSum += clicks[i];
        int remainder = (int)(prefixSum % k);

        if (remainderIndex.count(remainder)) {
            if (i - remainderIndex[remainder] >= 2) {
                return true;
            }
        } else {
            remainderIndex[remainder] = i;
        }
    }

    return false;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;

    if (cin >> n) {
        vector<int> clicks(n);

        for (int i = 0; i < n; i++) {
            cin >> clicks[i];
        }

        int k;
        cin >> k;

        cout << (hasValidAdCampaign(clicks, k) ? "true" : "false") << "\\n";
    }

    return 0;
}`
},
'css-m5': {
  python: `def has_valid_energy_usage(usage, k):
    if k == 0:
        for i in range(len(usage) - 1):
            if usage[i] == 0 and usage[i + 1] == 0:
                return True
        return False

    remainder_index = {0: -1}
    prefix_sum = 0

    for i, units in enumerate(usage):
        prefix_sum += units
        remainder = prefix_sum % k

        if remainder in remainder_index:
            if i - remainder_index[remainder] >= 2:
                return True
        else:
            remainder_index[remainder] = i

    return False

n = int(input())
usage = list(map(int, input().split()))
k = int(input())
print(str(has_valid_energy_usage(usage, k)).lower())`,

  java: `import java.util.*;

public class Solution {
    public static boolean hasValidEnergyUsage(int[] usage, int k) {
        if (k == 0) {
            for (int i = 0; i < usage.length - 1; i++) {
                if (usage[i] == 0 && usage[i + 1] == 0) {
                    return true;
                }
            }
            return false;
        }

        Map<Integer, Integer> remainderIndex = new HashMap<>();
        remainderIndex.put(0, -1);

        long prefixSum = 0;

        for (int i = 0; i < usage.length; i++) {
            prefixSum += usage[i];
            int remainder = (int)(prefixSum % k);

            if (remainderIndex.containsKey(remainder)) {
                if (i - remainderIndex.get(remainder) >= 2) {
                    return true;
                }
            } else {
                remainderIndex.put(remainder, i);
            }
        }

        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] usage = new int[n];

            for (int i = 0; i < n; i++) {
                usage[i] = sc.nextInt();
            }

            int k = sc.nextInt();

            System.out.println(hasValidEnergyUsage(usage, k));
        }
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct Node {
    int remainder;
    int index;
    struct Node* next;
} Node;

#define TABLE_SIZE 100003

Node* table[TABLE_SIZE];

int hash(int key) {
    if (key < 0)
        key = -key;
    return key % TABLE_SIZE;
}

Node* find(int remainder) {
    int h = hash(remainder);
    Node* current = table[h];

    while (current) {
        if (current->remainder == remainder)
            return current;
        current = current->next;
    }

    return NULL;
}

void insert(int remainder, int index) {
    int h = hash(remainder);

    Node* node = (Node*)malloc(sizeof(Node));
    node->remainder = remainder;
    node->index = index;
    node->next = table[h];
    table[h] = node;
}

bool hasValidEnergyUsage(int usage[], int n, int k) {
    if (k == 0) {
        for (int i = 0; i < n - 1; i++) {
            if (usage[i] == 0 && usage[i + 1] == 0)
                return true;
        }
        return false;
    }

    insert(0, -1);

    long long prefixSum = 0;

    for (int i = 0; i < n; i++) {
        prefixSum += usage[i];
        int remainder = (int)(prefixSum % k);

        Node* node = find(remainder);

        if (node) {
            if (i - node->index >= 2)
                return true;
        } else {
            insert(remainder, i);
        }
    }

    return false;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int* usage = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
        scanf("%d", &usage[i]);

    int k;
    scanf("%d", &k);

    printf("%s\\n", hasValidEnergyUsage(usage, n, k) ? "true" : "false");

    free(usage);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

bool hasValidEnergyUsage(vector<int>& usage, int k) {
    if (k == 0) {
        for (int i = 0; i < (int)usage.size() - 1; i++) {
            if (usage[i] == 0 && usage[i + 1] == 0) {
                return true;
            }
        }
        return false;
    }

    unordered_map<int, int> remainderIndex;
    remainderIndex[0] = -1;

    long long prefixSum = 0;

    for (int i = 0; i < (int)usage.size(); i++) {
        prefixSum += usage[i];
        int remainder = (int)(prefixSum % k);

        if (remainderIndex.count(remainder)) {
            if (i - remainderIndex[remainder] >= 2) {
                return true;
            }
        } else {
            remainderIndex[remainder] = i;
        }
    }

    return false;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;

    if (cin >> n) {
        vector<int> usage(n);

        for (int i = 0; i < n; i++) {
            cin >> usage[i];
        }

        int k;
        cin >> k;

        cout << (hasValidEnergyUsage(usage, k) ? "true" : "false") << "\\n";
    }

    return 0;
}`
},
'css-h1': {
  python: `def has_valid_revenue_cycle(revenue, k):
    if k == 0:
        for i in range(len(revenue) - 1):
            if revenue[i] == 0 and revenue[i + 1] == 0:
                return True
        return False

    remainder_index = {0: -1}
    prefix_sum = 0

    for i, amount in enumerate(revenue):
        prefix_sum += amount
        remainder = prefix_sum % k

        if remainder in remainder_index:
            if i - remainder_index[remainder] >= 2:
                return True
        else:
            remainder_index[remainder] = i

    return False

n = int(input())
revenue = list(map(int, input().split()))
k = int(input())
print(str(has_valid_revenue_cycle(revenue, k)).lower())`,

  java: `import java.util.*;

public class Solution {
    public static boolean hasValidRevenueCycle(int[] revenue, int k) {
        if (k == 0) {
            for (int i = 0; i < revenue.length - 1; i++) {
                if (revenue[i] == 0 && revenue[i + 1] == 0) {
                    return true;
                }
            }
            return false;
        }

        Map<Integer, Integer> remainderIndex = new HashMap<>();
        remainderIndex.put(0, -1);

        long prefixSum = 0;

        for (int i = 0; i < revenue.length; i++) {
            prefixSum += revenue[i];
            int remainder = (int)(prefixSum % k);

            if (remainderIndex.containsKey(remainder)) {
                if (i - remainderIndex.get(remainder) >= 2) {
                    return true;
                }
            } else {
                remainderIndex.put(remainder, i);
            }
        }

        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] revenue = new int[n];

            for (int i = 0; i < n; i++) {
                revenue[i] = sc.nextInt();
            }

            int k = sc.nextInt();

            System.out.println(hasValidRevenueCycle(revenue, k));
        }
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct Node {
    int remainder;
    int index;
    struct Node* next;
} Node;

#define TABLE_SIZE 100003

Node* table[TABLE_SIZE];

int hash(int key) {
    if (key < 0)
        key = -key;
    return key % TABLE_SIZE;
}

Node* find(int remainder) {
    int h = hash(remainder);
    Node* current = table[h];

    while (current) {
        if (current->remainder == remainder)
            return current;
        current = current->next;
    }

    return NULL;
}

void insert(int remainder, int index) {
    int h = hash(remainder);

    Node* node = (Node*)malloc(sizeof(Node));
    node->remainder = remainder;
    node->index = index;
    node->next = table[h];
    table[h] = node;
}

bool hasValidRevenueCycle(int revenue[], int n, int k) {
    if (k == 0) {
        for (int i = 0; i < n - 1; i++) {
            if (revenue[i] == 0 && revenue[i + 1] == 0)
                return true;
        }
        return false;
    }

    insert(0, -1);

    long long prefixSum = 0;

    for (int i = 0; i < n; i++) {
        prefixSum += revenue[i];
        int remainder = (int)(prefixSum % k);

        Node* node = find(remainder);

        if (node) {
            if (i - node->index >= 2)
                return true;
        } else {
            insert(remainder, i);
        }
    }

    return false;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int* revenue = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
        scanf("%d", &revenue[i]);

    int k;
    scanf("%d", &k);

    printf("%s\\n", hasValidRevenueCycle(revenue, n, k) ? "true" : "false");

    free(revenue);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

bool hasValidRevenueCycle(vector<int>& revenue, int k) {
    if (k == 0) {
        for (int i = 0; i < (int)revenue.size() - 1; i++) {
            if (revenue[i] == 0 && revenue[i + 1] == 0) {
                return true;
            }
        }
        return false;
    }

    unordered_map<int, int> remainderIndex;
    remainderIndex[0] = -1;

    long long prefixSum = 0;

    for (int i = 0; i < (int)revenue.size(); i++) {
        prefixSum += revenue[i];
        int remainder = (int)(prefixSum % k);

        if (remainderIndex.count(remainder)) {
            if (i - remainderIndex[remainder] >= 2) {
                return true;
            }
        } else {
            remainderIndex[remainder] = i;
        }
    }

    return false;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;

    if (cin >> n) {
        vector<int> revenue(n);

        for (int i = 0; i < n; i++) {
            cin >> revenue[i];
        }

        int k;
        cin >> k;

        cout << (hasValidRevenueCycle(revenue, k) ? "true" : "false") << "\\n";
    }

    return 0;
}`
},
'css-h2': {
  python: `def has_valid_network_traffic(traffic, k):
    if k == 0:
        for i in range(len(traffic) - 1):
            if traffic[i] == 0 and traffic[i + 1] == 0:
                return True
        return False

    remainder_index = {0: -1}
    prefix_sum = 0

    for i, packets in enumerate(traffic):
        prefix_sum += packets
        remainder = prefix_sum % k

        if remainder in remainder_index:
            if i - remainder_index[remainder] >= 2:
                return True
        else:
            remainder_index[remainder] = i

    return False

n = int(input())
traffic = list(map(int, input().split()))
k = int(input())
print(str(has_valid_network_traffic(traffic, k)).lower())`,

  java: `import java.util.*;

public class Solution {
    public static boolean hasValidNetworkTraffic(int[] traffic, int k) {
        if (k == 0) {
            for (int i = 0; i < traffic.length - 1; i++) {
                if (traffic[i] == 0 && traffic[i + 1] == 0) {
                    return true;
                }
            }
            return false;
        }

        Map<Integer, Integer> remainderIndex = new HashMap<>();
        remainderIndex.put(0, -1);

        long prefixSum = 0;

        for (int i = 0; i < traffic.length; i++) {
            prefixSum += traffic[i];
            int remainder = (int)(prefixSum % k);

            if (remainderIndex.containsKey(remainder)) {
                if (i - remainderIndex.get(remainder) >= 2) {
                    return true;
                }
            } else {
                remainderIndex.put(remainder, i);
            }
        }

        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] traffic = new int[n];

            for (int i = 0; i < n; i++) {
                traffic[i] = sc.nextInt();
            }

            int k = sc.nextInt();

            System.out.println(hasValidNetworkTraffic(traffic, k));
        }
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct Node {
    int remainder;
    int index;
    struct Node* next;
} Node;

#define TABLE_SIZE 100003

Node* table[TABLE_SIZE];

int hash(int key) {
    if (key < 0)
        key = -key;
    return key % TABLE_SIZE;
}

Node* find(int remainder) {
    int h = hash(remainder);
    Node* current = table[h];

    while (current) {
        if (current->remainder == remainder)
            return current;
        current = current->next;
    }

    return NULL;
}

void insert(int remainder, int index) {
    int h = hash(remainder);

    Node* node = (Node*)malloc(sizeof(Node));
    node->remainder = remainder;
    node->index = index;
    node->next = table[h];
    table[h] = node;
}

bool hasValidNetworkTraffic(int traffic[], int n, int k) {
    if (k == 0) {
        for (int i = 0; i < n - 1; i++) {
            if (traffic[i] == 0 && traffic[i + 1] == 0)
                return true;
        }
        return false;
    }

    insert(0, -1);

    long long prefixSum = 0;

    for (int i = 0; i < n; i++) {
        prefixSum += traffic[i];
        int remainder = (int)(prefixSum % k);

        Node* node = find(remainder);

        if (node) {
            if (i - node->index >= 2)
                return true;
        } else {
            insert(remainder, i);
        }
    }

    return false;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int* traffic = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
        scanf("%d", &traffic[i]);

    int k;
    scanf("%d", &k);

    printf("%s\\n", hasValidNetworkTraffic(traffic, n, k) ? "true" : "false");

    free(traffic);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

bool hasValidNetworkTraffic(vector<int>& traffic, int k) {
    if (k == 0) {
        for (int i = 0; i < (int)traffic.size() - 1; i++) {
            if (traffic[i] == 0 && traffic[i + 1] == 0) {
                return true;
            }
        }
        return false;
    }

    unordered_map<int, int> remainderIndex;
    remainderIndex[0] = -1;

    long long prefixSum = 0;

    for (int i = 0; i < (int)traffic.size(); i++) {
        prefixSum += traffic[i];
        int remainder = (int)(prefixSum % k);

        if (remainderIndex.count(remainder)) {
            if (i - remainderIndex[remainder] >= 2) {
                return true;
            }
        } else {
            remainderIndex[remainder] = i;
        }
    }

    return false;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;

    if (cin >> n) {
        vector<int> traffic(n);

        for (int i = 0; i < n; i++) {
            cin >> traffic[i];
        }

        int k;
        cin >> k;

        cout << (hasValidNetworkTraffic(traffic, k) ? "true" : "false") << "\\n";
    }

    return 0;
}`
},
'css-h3': {
  python: `def has_valid_sensor_sequence(readings, k):
    if k == 0:
        for i in range(len(readings) - 1):
            if readings[i] == 0 and readings[i + 1] == 0:
                return True
        return False

    remainder_index = {0: -1}
    prefix_sum = 0

    for i, reading in enumerate(readings):
        prefix_sum += reading
        remainder = prefix_sum % k

        if remainder in remainder_index:
            if i - remainder_index[remainder] >= 2:
                return True
        else:
            remainder_index[remainder] = i

    return False

n = int(input())
readings = list(map(int, input().split()))
k = int(input())
print(str(has_valid_sensor_sequence(readings, k)).lower())`,

  java: `import java.util.*;

public class Solution {
    public static boolean hasValidSensorSequence(int[] readings, int k) {
        if (k == 0) {
            for (int i = 0; i < readings.length - 1; i++) {
                if (readings[i] == 0 && readings[i + 1] == 0) {
                    return true;
                }
            }
            return false;
        }

        Map<Integer, Integer> remainderIndex = new HashMap<>();
        remainderIndex.put(0, -1);

        long prefixSum = 0;

        for (int i = 0; i < readings.length; i++) {
            prefixSum += readings[i];
            int remainder = (int)(prefixSum % k);

            if (remainderIndex.containsKey(remainder)) {
                if (i - remainderIndex.get(remainder) >= 2) {
                    return true;
                }
            } else {
                remainderIndex.put(remainder, i);
            }
        }

        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] readings = new int[n];

            for (int i = 0; i < n; i++) {
                readings[i] = sc.nextInt();
            }

            int k = sc.nextInt();

            System.out.println(hasValidSensorSequence(readings, k));
        }
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct Node {
    int remainder;
    int index;
    struct Node* next;
} Node;

#define TABLE_SIZE 100003

Node* table[TABLE_SIZE];

int hash(int key) {
    if (key < 0)
        key = -key;
    return key % TABLE_SIZE;
}

Node* find(int remainder) {
    int h = hash(remainder);
    Node* current = table[h];

    while (current) {
        if (current->remainder == remainder)
            return current;
        current = current->next;
    }

    return NULL;
}

void insert(int remainder, int index) {
    int h = hash(remainder);

    Node* node = (Node*)malloc(sizeof(Node));
    node->remainder = remainder;
    node->index = index;
    node->next = table[h];
    table[h] = node;
}

bool hasValidSensorSequence(int readings[], int n, int k) {
    if (k == 0) {
        for (int i = 0; i < n - 1; i++) {
            if (readings[i] == 0 && readings[i + 1] == 0)
                return true;
        }
        return false;
    }

    insert(0, -1);

    long long prefixSum = 0;

    for (int i = 0; i < n; i++) {
        prefixSum += readings[i];
        int remainder = (int)(prefixSum % k);

        Node* node = find(remainder);

        if (node) {
            if (i - node->index >= 2)
                return true;
        } else {
            insert(remainder, i);
        }
    }

    return false;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int* readings = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
        scanf("%d", &readings[i]);

    int k;
    scanf("%d", &k);

    printf("%s\\n", hasValidSensorSequence(readings, n, k) ? "true" : "false");

    free(readings);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

bool hasValidSensorSequence(vector<int>& readings, int k) {
    if (k == 0) {
        for (int i = 0; i < (int)readings.size() - 1; i++) {
            if (readings[i] == 0 && readings[i + 1] == 0) {
                return true;
            }
        }
        return false;
    }

    unordered_map<int, int> remainderIndex;
    remainderIndex[0] = -1;

    long long prefixSum = 0;

    for (int i = 0; i < (int)readings.size(); i++) {
        prefixSum += readings[i];
        int remainder = (int)(prefixSum % k);

        if (remainderIndex.count(remainder)) {
            if (i - remainderIndex[remainder] >= 2) {
                return true;
            }
        } else {
            remainderIndex[remainder] = i;
        }
    }

    return false;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;

    if (cin >> n) {
        vector<int> readings(n);

        for (int i = 0; i < n; i++) {
            cin >> readings[i];
        }

        int k;
        cin >> k;

        cout << (hasValidSensorSequence(readings, k) ? "true" : "false") << "\\n";
    }

    return 0;
}`
},
'css-h4': {
  python: `def has_valid_machine_output(output, k):
    if k == 0:
        for i in range(len(output) - 1):
            if output[i] == 0 and output[i + 1] == 0:
                return True
        return False

    remainder_index = {0: -1}
    prefix_sum = 0

    for i, units in enumerate(output):
        prefix_sum += units
        remainder = prefix_sum % k

        if remainder in remainder_index:
            if i - remainder_index[remainder] >= 2:
                return True
        else:
            remainder_index[remainder] = i

    return False

n = int(input())
output = list(map(int, input().split()))
k = int(input())
print(str(has_valid_machine_output(output, k)).lower())`,

  java: `import java.util.*;

public class Solution {
    public static boolean hasValidMachineOutput(int[] output, int k) {
        if (k == 0) {
            for (int i = 0; i < output.length - 1; i++) {
                if (output[i] == 0 && output[i + 1] == 0) {
                    return true;
                }
            }
            return false;
        }

        Map<Integer, Integer> remainderIndex = new HashMap<>();
        remainderIndex.put(0, -1);

        long prefixSum = 0;

        for (int i = 0; i < output.length; i++) {
            prefixSum += output[i];
            int remainder = (int)(prefixSum % k);

            if (remainderIndex.containsKey(remainder)) {
                if (i - remainderIndex.get(remainder) >= 2) {
                    return true;
                }
            } else {
                remainderIndex.put(remainder, i);
            }
        }

        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] output = new int[n];

            for (int i = 0; i < n; i++) {
                output[i] = sc.nextInt();
            }

            int k = sc.nextInt();

            System.out.println(hasValidMachineOutput(output, k));
        }
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct Node {
    int remainder;
    int index;
    struct Node* next;
} Node;

#define TABLE_SIZE 100003

Node* table[TABLE_SIZE];

int hash(int key) {
    if (key < 0)
        key = -key;
    return key % TABLE_SIZE;
}

Node* find(int remainder) {
    int h = hash(remainder);
    Node* current = table[h];

    while (current) {
        if (current->remainder == remainder)
            return current;
        current = current->next;
    }

    return NULL;
}

void insert(int remainder, int index) {
    int h = hash(remainder);

    Node* node = (Node*)malloc(sizeof(Node));
    node->remainder = remainder;
    node->index = index;
    node->next = table[h];
    table[h] = node;
}

bool hasValidMachineOutput(int output[], int n, int k) {
    if (k == 0) {
        for (int i = 0; i < n - 1; i++) {
            if (output[i] == 0 && output[i + 1] == 0)
                return true;
        }
        return false;
    }

    insert(0, -1);

    long long prefixSum = 0;

    for (int i = 0; i < n; i++) {
        prefixSum += output[i];
        int remainder = (int)(prefixSum % k);

        Node* node = find(remainder);

        if (node) {
            if (i - node->index >= 2)
                return true;
        } else {
            insert(remainder, i);
        }
    }

    return false;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int* output = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
        scanf("%d", &output[i]);

    int k;
    scanf("%d", &k);

    printf("%s\\n", hasValidMachineOutput(output, n, k) ? "true" : "false");

    free(output);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

bool hasValidMachineOutput(vector<int>& output, int k) {
    if (k == 0) {
        for (int i = 0; i < (int)output.size() - 1; i++) {
            if (output[i] == 0 && output[i + 1] == 0) {
                return true;
            }
        }
        return false;
    }

    unordered_map<int, int> remainderIndex;
    remainderIndex[0] = -1;

    long long prefixSum = 0;

    for (int i = 0; i < (int)output.size(); i++) {
        prefixSum += output[i];
        int remainder = (int)(prefixSum % k);

        if (remainderIndex.count(remainder)) {
            if (i - remainderIndex[remainder] >= 2) {
                return true;
            }
        } else {
            remainderIndex[remainder] = i;
        }
    }

    return false;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;

    if (cin >> n) {
        vector<int> output(n);

        for (int i = 0; i < n; i++) {
            cin >> output[i];
        }

        int k;
        cin >> k;

        cout << (hasValidMachineOutput(output, k) ? "true" : "false") << "\\n";
    }

    return 0;
}`
},
'css-h5': {
  python: `def has_valid_data_stream(stream, k):
    if k == 0:
        for i in range(len(stream) - 1):
            if stream[i] == 0 and stream[i + 1] == 0:
                return True
        return False

    remainder_index = {0: -1}
    prefix_sum = 0

    for i, value in enumerate(stream):
        prefix_sum += value
        remainder = prefix_sum % k

        if remainder in remainder_index:
            if i - remainder_index[remainder] >= 2:
                return True
        else:
            remainder_index[remainder] = i

    return False

n = int(input())
stream = list(map(int, input().split()))
k = int(input())
print(str(has_valid_data_stream(stream, k)).lower())`,

  java: `import java.util.*;

public class Solution {
    public static boolean hasValidDataStream(int[] stream, int k) {
        if (k == 0) {
            for (int i = 0; i < stream.length - 1; i++) {
                if (stream[i] == 0 && stream[i + 1] == 0) {
                    return true;
                }
            }
            return false;
        }

        Map<Integer, Integer> remainderIndex = new HashMap<>();
        remainderIndex.put(0, -1);

        long prefixSum = 0;

        for (int i = 0; i < stream.length; i++) {
            prefixSum += stream[i];
            int remainder = (int)(prefixSum % k);

            if (remainderIndex.containsKey(remainder)) {
                if (i - remainderIndex.get(remainder) >= 2) {
                    return true;
                }
            } else {
                remainderIndex.put(remainder, i);
            }
        }

        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] stream = new int[n];

            for (int i = 0; i < n; i++) {
                stream[i] = sc.nextInt();
            }

            int k = sc.nextInt();

            System.out.println(hasValidDataStream(stream, k));
        }
    }
}`,

  c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct Node {
    int remainder;
    int index;
    struct Node* next;
} Node;

#define TABLE_SIZE 100003

Node* table[TABLE_SIZE];

int hash(int key) {
    if (key < 0)
        key = -key;
    return key % TABLE_SIZE;
}

Node* find(int remainder) {
    int h = hash(remainder);
    Node* current = table[h];

    while (current) {
        if (current->remainder == remainder)
            return current;
        current = current->next;
    }

    return NULL;
}

void insert(int remainder, int index) {
    int h = hash(remainder);

    Node* node = (Node*)malloc(sizeof(Node));
    node->remainder = remainder;
    node->index = index;
    node->next = table[h];
    table[h] = node;
}

bool hasValidDataStream(int stream[], int n, int k) {
    if (k == 0) {
        for (int i = 0; i < n - 1; i++) {
            if (stream[i] == 0 && stream[i + 1] == 0)
                return true;
        }
        return false;
    }

    insert(0, -1);

    long long prefixSum = 0;

    for (int i = 0; i < n; i++) {
        prefixSum += stream[i];
        int remainder = (int)(prefixSum % k);

        Node* node = find(remainder);

        if (node) {
            if (i - node->index >= 2)
                return true;
        } else {
            insert(remainder, i);
        }
    }

    return false;
}

int main() {
    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int* stream = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
        scanf("%d", &stream[i]);

    int k;
    scanf("%d", &k);

    printf("%s\\n", hasValidDataStream(stream, n, k) ? "true" : "false");

    free(stream);

    return 0;
}`,

  cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

bool hasValidDataStream(vector<int>& stream, int k) {
    if (k == 0) {
        for (int i = 0; i < (int)stream.size() - 1; i++) {
            if (stream[i] == 0 && stream[i + 1] == 0) {
                return true;
            }
        }
        return false;
    }

    unordered_map<int, int> remainderIndex;
    remainderIndex[0] = -1;

    long long prefixSum = 0;

    for (int i = 0; i < (int)stream.size(); i++) {
        prefixSum += stream[i];
        int remainder = (int)(prefixSum % k);

        if (remainderIndex.count(remainder)) {
            if (i - remainderIndex[remainder] >= 2) {
                return true;
            }
        } else {
            remainderIndex[remainder] = i;
        }
    }

    return false;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;

    if (cin >> n) {
        vector<int> stream(n);

        for (int i = 0; i < n; i++) {
            cin >> stream[i];
        }

        int k;
        cin >> k;

        cout << (hasValidDataStream(stream, k) ? "true" : "false") << "\\n";
    }

    return 0;
}`
}
};
