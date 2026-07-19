export const TaskSchedulercodeSnippets = {
    c: `#include <stdio.h>
#include <stdlib.h>
int leastInterval(char tasks[], int size, int cooldown) {
    int freq[26] = {0};
    for (int i = 0; i < size; i++)
        freq[tasks[i] - 'A']++;
    int maxFreq = 0;
    for (int i = 0; i < 26; i++)
        if (freq[i] > maxFreq)
            maxFreq = freq[i];
    int maxCount = 0;
    for (int i = 0; i < 26; i++)
        if (freq[i] == maxFreq)
            maxCount++;
    int intervals = (maxFreq - 1) * (cooldown + 1) + maxCount;
    return intervals > size ? intervals : size;
}
int main() {
    char tasks[] = {'A','A','A','B','B','B'};
    int size = sizeof(tasks) / sizeof(tasks[0]);
    int cooldown = 2;
    printf("Minimum intervals: %d\n", leastInterval(tasks, size, cooldown));
    return 0;
}
`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int leastInterval(vector<char>& tasks, int cooldown) {
    vector<int> freq(26, 0);
    for (char task : tasks)
        freq[task - 'A']++;
    int maxFreq = *max_element(freq.begin(), freq.end());
    int maxCount = count(freq.begin(), freq.end(), maxFreq);
    return max((int)tasks.size(), (maxFreq - 1) * (cooldown + 1) + maxCount);
}

int main() {
    vector<char> tasks = {'A','A','A','B','B','B'};
    int cooldown = 2;

    cout << "Minimum intervals: "
         << leastInterval(tasks, cooldown) << endl;

    return 0;
}
`,

    python: `from collections import Counter
def least_interval(tasks, cooldown):
    freq = Counter(tasks)
    max_freq = max(freq.values())
    max_count = list(freq.values()).count(max_freq)
    return max(len(tasks),
               (max_freq - 1) * (cooldown + 1) + max_count)
tasks = ['A','A','A','B','B','B']
cooldown = 2

print("Minimum intervals:", least_interval(tasks, cooldown))
`,
    java: `import java.util.*;
public class Main {
    public static int leastInterval(char[] tasks, int cooldown) {
        int[] freq = new int[26];

        for (char task : tasks)
            freq[task - 'A']++;

        Arrays.sort(freq);

        int maxFreq = freq[25];
        int maxCount = 1;

        for (int i = 24; i >= 0; i--) {
            if (freq[i] == maxFreq)
                maxCount++;
            else
                break;
        }

        return Math.max(tasks.length,
                (maxFreq - 1) * (cooldown + 1) + maxCount);
    }

    public static void main(String[] args) {
        char[] tasks = {'A','A','A','B','B','B'};
        int cooldown = 2;

        System.out.println("Minimum intervals: " +
                leastInterval(tasks, cooldown));
    }
}
`
};