// src/data/codeSnippets.js
export const GAcodeSnippets = {
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int compare(const void *a, const void *b) {
    return (*(char*)a - *(char*)b);
}
void sortString(char str[]) {
    qsort(str, strlen(str), sizeof(char), compare);
}
int main() {
    char words[][20] = {"eat", "tea", "tan", "ate", "nat", "bat"};
    int n = 6;

    printf("Word\tKey\n");
    printf("----------------\n");

    for (int i = 0; i < n; i++) {
        char key[20];
        strcpy(key, words[i]);
        sortString(key);
        printf("%s\t%s\n", words[i], key);
    }
    return 0;
}
`,

    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int main() {
    vector<string> words = {"eat", "tea", "tan", "ate", "nat", "bat"};
    cout << "Word\tKey" << endl;
    cout << "----------------" << endl;
    for (string word : words) {
        string key = word;
        sort(key.begin(), key.end());
        cout << word << "\t" << key << endl;
    }
    return 0;
}
`,
    python: `words = ["eat", "tea", "tan", "ate", "nat", "bat"]
print("Word\tKey")
print("----------------")
for word in words:
    key = "".join(sorted(word))
    print(f"{word}\t{key}")
`,

    java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        String[] words = {"eat", "tea", "tan", "ate", "nat", "bat"};
        System.out.println("Word\tKey");
        System.out.println("----------------");
        for (String word : words) {
            char[] chars = word.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);
            System.out.println(word + "\t" + key);
        }
    }
}`
};