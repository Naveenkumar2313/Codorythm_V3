export const designTwitterSolutions = {
  "twt-e1": {
    "python": `class Twitter:
    def __init__(self):
        self.tweets = []
        self.follows = {}
    def postTweet(self, userId: int, tweetId: int) -> None:
        self.tweets.append((tweetId, userId))
    def getNewsFeed(self, userId: int) -> list:
        feed = []
        count = 0
        followees = self.follows.get(userId, set())
        for tweetId, authorId in reversed(self.tweets):
            if authorId == userId or authorId in followees:
                feed.append(tweetId)
                count += 1
                if count == 10: break
        return feed
    def follow(self, followerId: int, followeeId: int) -> None:
        if followerId != followeeId:
            self.follows.setdefault(followerId, set()).add(followeeId)
    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followerId in self.follows and followeeId in self.follows[followerId]:
            self.follows[followerId].remove(followeeId)

ts = Twitter()
out = []
import sys
lines = sys.stdin.read().splitlines()
if lines:
    try: q = int(lines[0].strip())
    except: sys.exit(0)
    for i in range(1, q + 1):
        if i >= len(lines): break
        parts = lines[i].strip().split()
        if not parts: continue
        op = parts[0]
        if op == "POST": ts.postTweet(int(parts[1]), int(parts[2]))
        elif op == "FOLLOW": ts.follow(int(parts[1]), int(parts[2]))
        elif op == "UNFOLLOW": ts.unfollow(int(parts[1]), int(parts[2]))
        elif op == "GET_FEED":
            feed = ts.getNewsFeed(int(parts[1]))
            out.append(",".join(map(str, feed)) if feed else "#")
    print(" ".join(out))`,
    "cpp": `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <unordered_set>
using namespace std;
class Twitter {
    struct Tweet { int id; int userId; };
    vector<Tweet> tweets;
    unordered_map<int, unordered_set<int>> follows;
public:
    Twitter() {}
    void postTweet(int userId, int tweetId) { tweets.push_back({tweetId, userId}); }
    vector<int> getNewsFeed(int userId) {
        vector<int> feed;
        int count = 0;
        for (int i = (int)tweets.size() - 1; i >= 0 && count < 10; i--) {
            int author = tweets[i].userId;
            if (author == userId || (follows.count(userId) && follows[userId].count(author))) {
                feed.push_back(tweets[i].id);
                count++;
            }
        }
        return feed;
    }
    void follow(int followerId, int followeeId) { if (followerId != followeeId) follows[followerId].insert(followeeId); }
    void unfollow(int followerId, int followeeId) { if (follows.count(followerId)) follows[followerId].erase(followeeId); }
};
int main() {
    Twitter ts;
    int q;
    if (cin >> q) {
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; if (!(cin >> op)) break;
            if (op == "POST") { int u, t; cin >> u >> t; ts.postTweet(u, t); }
            else if (op == "FOLLOW") { int u1, u2; cin >> u1 >> u2; ts.follow(u1, u2); }
            else if (op == "UNFOLLOW") { int u1, u2; cin >> u1 >> u2; ts.unfollow(u1, u2); }
            else if (op == "GET_FEED") {
                int u; cin >> u; vector<int> feed = ts.getNewsFeed(u);
                if (feed.empty()) out.push_back("#");
                else {
                    string s = "";
                    for (size_t j = 0; j < feed.size(); j++) s += to_string(feed[j]) + (j + 1 < feed.size() ? "," : "");
                    out.push_back(s);
                }
            }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    "java": `import java.util.*;
class Twitter {
    private List<int[]> tweets = new ArrayList<>();
    private Map<Integer, Set<Integer>> follows = new HashMap<>();
    public Twitter() {}
    public void postTweet(int userId, int tweetId) { tweets.add(new int[]{tweetId, userId}); }
    public List<Integer> getNewsFeed(int userId) {
        List<Integer> feed = new ArrayList<>();
        Set<Integer> followees = follows.getOrDefault(userId, new HashSet<>());
        int count = 0;
        for (int i = tweets.size() - 1; i >= 0 && count < 10; i--) {
            int[] t = tweets.get(i);
            if (t[1] == userId || followees.contains(t[1])) {
                feed.add(t[0]);
                count++;
            }
        }
        return feed;
    }
    public void follow(int followerId, int followeeId) {
        if (followerId != followeeId) follows.computeIfAbsent(followerId, k -> new HashSet<>()).add(followeeId);
    }
    public void unfollow(int followerId, int followeeId) {
        if (follows.containsKey(followerId)) follows.get(followerId).remove(followeeId);
    }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            Twitter ts = new Twitter();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                if (!sc.hasNext()) break;
                String op = sc.next();
                if (op.equals("POST")) ts.postTweet(sc.nextInt(), sc.nextInt());
                else if (op.equals("FOLLOW")) ts.follow(sc.nextInt(), sc.nextInt());
                else if (op.equals("UNFOLLOW")) ts.unfollow(sc.nextInt(), sc.nextInt());
                else if (op.equals("GET_FEED")) {
                    List<Integer> feed = ts.getNewsFeed(sc.nextInt());
                    if (feed.isEmpty()) out.add("#");
                    else {
                        StringBuilder sb = new StringBuilder();
                        for (int j = 0; j < feed.size(); j++) sb.append(feed.get(j)).append(j + 1 < feed.size() ? "," : "");
                        out.add(sb.toString());
                    }
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    "c": `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_TWEETS 10005
#define MAX_FOLLOWS 10005
struct Tweet { int id; int userId; };
struct Follow { int follower; int followee; };
struct Tweet tweets[MAX_TWEETS]; int tweetsCount = 0;
struct Follow follows[MAX_FOLLOWS]; int followsCount = 0;
int isFollowing(int follower, int followee) {
    for (int i = 0; i < followsCount; i++) if (follows[i].follower == follower && follows[i].followee == followee) return 1;
    return 0;
}
void postTweet(int userId, int tweetId) {
    tweets[tweetsCount].id = tweetId; tweets[tweetsCount].userId = userId; tweetsCount++;
}
int getNewsFeed(int userId, int* out) {
    int count = 0;
    for (int i = tweetsCount - 1; i >= 0 && count < 10; i--) {
        int author = tweets[i].userId;
        if (author == userId || isFollowing(userId, author)) out[count++] = tweets[i].id;
    }
    return count;
}
void follow(int followerId, int followeeId) {
    if (followerId == followeeId) return;
    if (isFollowing(followerId, followeeId)) return;
    follows[followsCount].follower = followerId; follows[followsCount].followee = followeeId; followsCount++;
}
void unfollow(int followerId, int followeeId) {
    for (int i = 0; i < followsCount; i++) {
        if (follows[i].follower == followerId && follows[i].followee == followeeId) {
            follows[i] = follows[followsCount - 1]; followsCount--; return;
        }
    }
}
int main() {
    int q; if (scanf("%d", &q) != 1) return 0;
    char** out = malloc(q * sizeof(char*)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[20]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "POST") == 0) { int u, t; if (scanf("%d %d", &u, &t) != 2) break; postTweet(u, t); }
        else if (strcmp(op, "FOLLOW") == 0) { int u1, u2; if (scanf("%d %d", &u1, &u2) != 2) break; follow(u1, u2); }
        else if (strcmp(op, "UNFOLLOW") == 0) { int u1, u2; if (scanf("%d %d", &u1, &u2) != 2) break; unfollow(u1, u2); }
        else if (strcmp(op, "GET_FEED") == 0) {
            int u; if (scanf("%d", &u) != 1) break;
            int feed[100]; int count = getNewsFeed(u, feed);
            char* buf = malloc(2000 * sizeof(char));
            if (count == 0) strcpy(buf, "#");
            else {
                buf[0] = '\\0';
                for (int j = 0; j < count; j++) {
                    char tmp[20]; sprintf(tmp, "%d%s", feed[j], (j + 1 < count ? "," : ""));
                    strcat(buf, tmp);
                }
            }
            out[outCount++] = buf;
        }
    }
    for (int i = 0; i < outCount; i++) { printf("%s%s", out[i], (i + 1 < outCount ? " " : "")); free(out[i]); }
    printf("\\n"); free(out); return 0;
}`
  },
  "twt-e2": {
    "python": `class Twitter:
    def __init__(self):
        self.tweets = []
        self.follows = {}
        self.likes = {}
    def postTweet(self, userId: int, tweetId: int) -> None:
        self.tweets.append((tweetId, userId))
    def getNewsFeed(self, userId: int) -> list:
        feed = []
        count = 0
        followees = self.follows.get(userId, set())
        for tweetId, authorId in reversed(self.tweets):
            if authorId == userId or authorId in followees:
                feed.append(tweetId)
                count += 1
                if count == 10: break
        return feed
    def follow(self, followerId: int, followeeId: int) -> None:
        if followerId != followeeId:
            self.follows.setdefault(followerId, set()).add(followeeId)
    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followerId in self.follows and followeeId in self.follows[followerId]:
            self.follows[followerId].remove(followeeId)
    def likeTweet(self, userId: int, tweetId: int) -> None:
        self.likes.setdefault(tweetId, set()).add(userId)
    def unlikeTweet(self, userId: int, tweetId: int) -> None:
        if tweetId in self.likes and userId in self.likes[tweetId]:
            self.likes[tweetId].remove(userId)
    def getLikesCount(self, tweetId: int) -> int:
        return len(self.likes.get(tweetId, set()))

ts = Twitter()
out = []
import sys
lines = sys.stdin.read().splitlines()
if lines:
    try: q = int(lines[0].strip())
    except: sys.exit(0)
    for i in range(1, q + 1):
        if i >= len(lines): break
        parts = lines[i].strip().split()
        if not parts: continue
        op = parts[0]
        if op == "POST": ts.postTweet(int(parts[1]), int(parts[2]))
        elif op == "FOLLOW": ts.follow(int(parts[1]), int(parts[2]))
        elif op == "UNFOLLOW": ts.unfollow(int(parts[1]), int(parts[2]))
        elif op == "LIKE": ts.likeTweet(int(parts[1]), int(parts[2]))
        elif op == "UNLIKE": ts.unlikeTweet(int(parts[1]), int(parts[2]))
        elif op == "GET_LIKES": out.append(str(ts.getLikesCount(int(parts[1]))))
        elif op == "GET_FEED":
            feed = ts.getNewsFeed(int(parts[1]))
            out.append(",".join(map(str, feed)) if feed else "#")
    print(" ".join(out))`,
    "cpp": `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <unordered_set>
using namespace std;
class Twitter {
    struct Tweet { int id; int userId; };
    vector<Tweet> tweets;
    unordered_map<int, unordered_set<int>> follows;
    unordered_map<int, unordered_set<int>> likes;
public:
    Twitter() {}
    void postTweet(int userId, int tweetId) { tweets.push_back({tweetId, userId}); }
    vector<int> getNewsFeed(int userId) {
        vector<int> feed;
        int count = 0;
        for (int i = (int)tweets.size() - 1; i >= 0 && count < 10; i--) {
            int author = tweets[i].userId;
            if (author == userId || (follows.count(userId) && follows[userId].count(author))) {
                feed.push_back(tweets[i].id);
                count++;
            }
        }
        return feed;
    }
    void follow(int followerId, int followeeId) { if (followerId != followeeId) follows[followerId].insert(followeeId); }
    void unfollow(int followerId, int followeeId) { if (follows.count(followerId)) follows[followerId].erase(followeeId); }
    void likeTweet(int userId, int tweetId) { likes[tweetId].insert(userId); }
    void unlikeTweet(int userId, int tweetId) { if (likes.count(tweetId)) likes[tweetId].erase(userId); }
    int getLikesCount(int tweetId) { return likes.count(tweetId) ? (int)likes[tweetId].size() : 0; }
};
int main() {
    Twitter ts;
    int q;
    if (cin >> q) {
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; if (!(cin >> op)) break;
            if (op == "POST") { int u, t; cin >> u >> t; ts.postTweet(u, t); }
            else if (op == "FOLLOW") { int u1, u2; cin >> u1 >> u2; ts.follow(u1, u2); }
            else if (op == "UNFOLLOW") { int u1, u2; cin >> u1 >> u2; ts.unfollow(u1, u2); }
            else if (op == "LIKE") { int u, t; cin >> u >> t; ts.likeTweet(u, t); }
            else if (op == "UNLIKE") { int u, t; cin >> u >> t; ts.unlikeTweet(u, t); }
            else if (op == "GET_LIKES") { int t; cin >> t; out.push_back(to_string(ts.getLikesCount(t))); }
            else if (op == "GET_FEED") {
                int u; cin >> u; vector<int> feed = ts.getNewsFeed(u);
                if (feed.empty()) out.push_back("#");
                else {
                    string s = "";
                    for (size_t j = 0; j < feed.size(); j++) s += to_string(feed[j]) + (j + 1 < feed.size() ? "," : "");
                    out.push_back(s);
                }
            }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    "java": `import java.util.*;
class Twitter {
    private List<int[]> tweets = new ArrayList<>();
    private Map<Integer, Set<Integer>> follows = new HashMap<>();
    private Map<Integer, Set<Integer>> likes = new HashMap<>();
    public Twitter() {}
    public void postTweet(int userId, int tweetId) { tweets.add(new int[]{tweetId, userId}); }
    public List<Integer> getNewsFeed(int userId) {
        List<Integer> feed = new ArrayList<>();
        Set<Integer> followees = follows.getOrDefault(userId, new HashSet<>());
        int count = 0;
        for (int i = tweets.size() - 1; i >= 0 && count < 10; i--) {
            int[] t = tweets.get(i);
            if (t[1] == userId || followees.contains(t[1])) {
                feed.add(t[0]);
                count++;
            }
        }
        return feed;
    }
    public void follow(int followerId, int followeeId) {
        if (followerId != followeeId) follows.computeIfAbsent(followerId, k -> new HashSet<>()).add(followeeId);
    }
    public void unfollow(int followerId, int followeeId) {
        if (follows.containsKey(followerId)) follows.get(followerId).remove(followeeId);
    }
    public void likeTweet(int userId, int tweetId) { likes.computeIfAbsent(tweetId, k -> new HashSet<>()).add(userId); }
    public void unlikeTweet(int userId, int tweetId) { if (likes.containsKey(tweetId)) likes.get(tweetId).remove(userId); }
    public int getLikesCount(int tweetId) { return likes.containsKey(tweetId) ? likes.get(tweetId).size() : 0; }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            Twitter ts = new Twitter();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                if (!sc.hasNext()) break;
                String op = sc.next();
                if (op.equals("POST")) ts.postTweet(sc.nextInt(), sc.nextInt());
                else if (op.equals("FOLLOW")) ts.follow(sc.nextInt(), sc.nextInt());
                else if (op.equals("UNFOLLOW")) ts.unfollow(sc.nextInt(), sc.nextInt());
                else if (op.equals("LIKE")) ts.likeTweet(sc.nextInt(), sc.nextInt());
                else if (op.equals("UNLIKE")) ts.unlikeTweet(sc.nextInt(), sc.nextInt());
                else if (op.equals("GET_LIKES")) out.add(String.valueOf(ts.getLikesCount(sc.nextInt())));
                else if (op.equals("GET_FEED")) {
                    List<Integer> feed = ts.getNewsFeed(sc.nextInt());
                    if (feed.isEmpty()) out.add("#");
                    else {
                        StringBuilder sb = new StringBuilder();
                        for (int j = 0; j < feed.size(); j++) sb.append(feed.get(j)).append(j + 1 < feed.size() ? "," : "");
                        out.add(sb.toString());
                    }
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    "c": `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_TWEETS 10005
#define MAX_FOLLOWS 10005
#define MAX_LIKES 10005
struct Tweet { int id; int userId; };
struct Follow { int follower; int followee; };
struct Like { int userId; int tweetId; };
struct Tweet tweets[MAX_TWEETS]; int tweetsCount = 0;
struct Follow follows[MAX_FOLLOWS]; int followsCount = 0;
struct Like likes[MAX_LIKES]; int likesCount = 0;
int isFollowing(int follower, int followee) {
    for (int i = 0; i < followsCount; i++) if (follows[i].follower == follower && follows[i].followee == followee) return 1;
    return 0;
}
void postTweet(int userId, int tweetId) {
    tweets[tweetsCount].id = tweetId; tweets[tweetsCount].userId = userId; tweetsCount++;
}
int getNewsFeed(int userId, int* out) {
    int count = 0;
    for (int i = tweetsCount - 1; i >= 0 && count < 10; i--) {
        int author = tweets[i].userId;
        if (author == userId || isFollowing(userId, author)) out[count++] = tweets[i].id;
    }
    return count;
}
void follow(int followerId, int followeeId) {
    if (followerId == followeeId) return;
    if (isFollowing(followerId, followeeId)) return;
    follows[followsCount].follower = followerId; follows[followsCount].followee = followeeId; followsCount++;
}
void unfollow(int followerId, int followeeId) {
    for (int i = 0; i < followsCount; i++) {
        if (follows[i].follower == followerId && follows[i].followee == followeeId) {
            follows[i] = follows[followsCount - 1]; followsCount--; return;
        }
    }
}
void likeTweet(int userId, int tweetId) {
    for (int i = 0; i < likesCount; i++) if (likes[i].userId == userId && likes[i].tweetId == tweetId) return;
    likes[likesCount].userId = userId; likes[likesCount].tweetId = tweetId; likesCount++;
}
void unlikeTweet(int userId, int tweetId) {
    for (int i = 0; i < likesCount; i++) {
        if (likes[i].userId == userId && likes[i].tweetId == tweetId) {
            likes[i] = likes[likesCount - 1]; likesCount--; return;
        }
    }
}
int getLikesCount(int tweetId) {
    int count = 0;
    for (int i = 0; i < likesCount; i++) if (likes[i].tweetId == tweetId) count++;
    return count;
}
int main() {
    int q; if (scanf("%d", &q) != 1) return 0;
    char** out = malloc(q * sizeof(char*)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[20]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "POST") == 0) { int u, t; if (scanf("%d %d", &u, &t) != 2) break; postTweet(u, t); }
        else if (strcmp(op, "FOLLOW") == 0) { int u1, u2; if (scanf("%d %d", &u1, &u2) != 2) break; follow(u1, u2); }
        else if (strcmp(op, "UNFOLLOW") == 0) { int u1, u2; if (scanf("%d %d", &u1, &u2) != 2) break; unfollow(u1, u2); }
        else if (strcmp(op, "LIKE") == 0) { int u, t; if (scanf("%d %d", &u, &t) != 2) break; likeTweet(u, t); }
        else if (strcmp(op, "UNLIKE") == 0) { int u, t; if (scanf("%d %d", &u, &t) != 2) break; unlikeTweet(u, t); }
        else if (strcmp(op, "GET_LIKES") == 0) {
            int t; if (scanf("%d", &t) != 1) break;
            char* buf = malloc(20 * sizeof(char)); sprintf(buf, "%d", getLikesCount(t));
            out[outCount++] = buf;
        }
        else if (strcmp(op, "GET_FEED") == 0) {
            int u; if (scanf("%d", &u) != 1) break;
            int feed[100]; int count = getNewsFeed(u, feed);
            char* buf = malloc(2000 * sizeof(char));
            if (count == 0) strcpy(buf, "#");
            else {
                buf[0] = '\\0';
                for (int j = 0; j < count; j++) {
                    char tmp[20]; sprintf(tmp, "%d%s", feed[j], (j + 1 < count ? "," : ""));
                    strcat(buf, tmp);
                }
            }
            out[outCount++] = buf;
        }
    }
    for (int i = 0; i < outCount; i++) { printf("%s%s", out[i], (i + 1 < outCount ? " " : "")); free(out[i]); }
    printf("\\n"); free(out); return 0;
}`
  },
  "twt-e3": {
    "python": `class Twitter:
    def __init__(self):
        self.tweets = []
        self.follows = {}
    def postTweet(self, userId: int, tweetId: int) -> None:
        self.tweets.append([tweetId, userId, True])
    def getNewsFeed(self, userId: int) -> list:
        feed = []
        count = 0
        followees = self.follows.get(userId, set())
        for tweetId, authorId, active in reversed(self.tweets):
            if active and (authorId == userId or authorId in followees):
                feed.append(tweetId)
                count += 1
                if count == 10: break
        return feed
    def follow(self, followerId: int, followeeId: int) -> None:
        if followerId != followeeId:
            self.follows.setdefault(followerId, set()).add(followeeId)
    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followerId in self.follows and followeeId in self.follows[followerId]:
            self.follows[followerId].remove(followeeId)
    def deleteTweet(self, userId: int, tweetId: int) -> bool:
        for t in self.tweets:
            if t[0] == tweetId:
                if t[1] == userId and t[2]:
                    t[2] = False
                    return True
                return False
        return False

ts = Twitter()
out = []
import sys
lines = sys.stdin.read().splitlines()
if lines:
    try: q = int(lines[0].strip())
    except: sys.exit(0)
    for i in range(1, q + 1):
        if i >= len(lines): break
        parts = lines[i].strip().split()
        if not parts: continue
        op = parts[0]
        if op == "POST": ts.postTweet(int(parts[1]), int(parts[2]))
        elif op == "FOLLOW": ts.follow(int(parts[1]), int(parts[2]))
        elif op == "UNFOLLOW": ts.unfollow(int(parts[1]), int(parts[2]))
        elif op == "DELETE":
            deleted = ts.deleteTweet(int(parts[1]), int(parts[2]))
            out.append("true" if deleted else "false")
        elif op == "GET_FEED":
            feed = ts.getNewsFeed(int(parts[1]))
            out.append(",".join(map(str, feed)) if feed else "#")
    print(" ".join(out))`,
    "cpp": `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <unordered_set>
using namespace std;
class Twitter {
    struct Tweet { int id; int userId; bool active; };
    vector<Tweet> tweets;
    unordered_map<int, unordered_set<int>> follows;
public:
    Twitter() {}
    void postTweet(int userId, int tweetId) { tweets.push_back({tweetId, userId, true}); }
    vector<int> getNewsFeed(int userId) {
        vector<int> feed;
        int count = 0;
        for (int i = (int)tweets.size() - 1; i >= 0 && count < 10; i--) {
            int author = tweets[i].userId;
            if (tweets[i].active && (author == userId || (follows.count(userId) && follows[userId].count(author)))) {
                feed.push_back(tweets[i].id);
                count++;
            }
        }
        return feed;
    }
    void follow(int followerId, int followeeId) { if (followerId != followeeId) follows[followerId].insert(followeeId); }
    void unfollow(int followerId, int followeeId) { if (follows.count(followerId)) follows[followerId].erase(followeeId); }
    bool deleteTweet(int userId, int tweetId) {
        for (auto& t : tweets) {
            if (t.id == tweetId) {
                if (t.userId == userId && t.active) {
                    t.active = false;
                    return true;
                }
                return false;
            }
        }
        return false;
    }
};
int main() {
    Twitter ts;
    int q;
    if (cin >> q) {
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; if (!(cin >> op)) break;
            if (op == "POST") { int u, t; cin >> u >> t; ts.postTweet(u, t); }
            else if (op == "FOLLOW") { int u1, u2; cin >> u1 >> u2; ts.follow(u1, u2); }
            else if (op == "UNFOLLOW") { int u1, u2; cin >> u1 >> u2; ts.unfollow(u1, u2); }
            else if (op == "DELETE") { int u, t; cin >> u >> t; out.push_back(ts.deleteTweet(u, t) ? "true" : "false"); }
            else if (op == "GET_FEED") {
                int u; cin >> u; vector<int> feed = ts.getNewsFeed(u);
                if (feed.empty()) out.push_back("#");
                else {
                    string s = "";
                    for (size_t j = 0; j < feed.size(); j++) s += to_string(feed[j]) + (j + 1 < feed.size() ? "," : "");
                    out.push_back(s);
                }
            }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    "java": `import java.util.*;
class Twitter {
    private static class Tweet {
        int id, userId;
        boolean active;
        Tweet(int id, int userId) { this.id = id; this.userId = userId; this.active = true; }
    }
    private List<Tweet> tweets = new ArrayList<>();
    private Map<Integer, Set<Integer>> follows = new HashMap<>();
    public Twitter() {}
    public void postTweet(int userId, int tweetId) { tweets.add(new Tweet(tweetId, userId)); }
    public List<Integer> getNewsFeed(int userId) {
        List<Integer> feed = new ArrayList<>();
        Set<Integer> followees = follows.getOrDefault(userId, new HashSet<>());
        int count = 0;
        for (int i = tweets.size() - 1; i >= 0 && count < 10; i--) {
            Tweet t = tweets.get(i);
            if (t.active && (t.userId == userId || followees.contains(t.userId))) {
                feed.add(t.id);
                count++;
            }
        }
        return feed;
    }
    public void follow(int followerId, int followeeId) {
        if (followerId != followeeId) follows.computeIfAbsent(followerId, k -> new HashSet<>()).add(followeeId);
    }
    public void unfollow(int followerId, int followeeId) {
        if (follows.containsKey(followerId)) follows.get(followerId).remove(followeeId);
    }
    public boolean deleteTweet(int userId, int tweetId) {
        for (Tweet t : tweets) {
            if (t.id == tweetId) {
                if (t.userId == userId && t.active) {
                    t.active = false;
                    return true;
                }
                return false;
            }
        }
        return false;
    }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            Twitter ts = new Twitter();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                if (!sc.hasNext()) break;
                String op = sc.next();
                if (op.equals("POST")) ts.postTweet(sc.nextInt(), sc.nextInt());
                else if (op.equals("FOLLOW")) ts.follow(sc.nextInt(), sc.nextInt());
                else if (op.equals("UNFOLLOW")) ts.unfollow(sc.nextInt(), sc.nextInt());
                else if (op.equals("DELETE")) out.add(ts.deleteTweet(sc.nextInt(), sc.nextInt()) ? "true" : "false");
                else if (op.equals("GET_FEED")) {
                    List<Integer> feed = ts.getNewsFeed(sc.nextInt());
                    if (feed.isEmpty()) out.add("#");
                    else {
                        StringBuilder sb = new StringBuilder();
                        for (int j = 0; j < feed.size(); j++) sb.append(feed.get(j)).append(j + 1 < feed.size() ? "," : "");
                        out.add(sb.toString());
                    }
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    "c": `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_TWEETS 10005
#define MAX_FOLLOWS 10005
struct Tweet { int id; int userId; int active; };
struct Follow { int follower; int followee; };
struct Tweet tweets[MAX_TWEETS]; int tweetsCount = 0;
struct Follow follows[MAX_FOLLOWS]; int followsCount = 0;
int isFollowing(int follower, int followee) {
    for (int i = 0; i < followsCount; i++) if (follows[i].follower == follower && follows[i].followee == followee) return 1;
    return 0;
}
void postTweet(int userId, int tweetId) {
    tweets[tweetsCount].id = tweetId; tweets[tweetsCount].userId = userId; tweets[tweetsCount].active = 1; tweetsCount++;
}
int getNewsFeed(int userId, int* out) {
    int count = 0;
    for (int i = tweetsCount - 1; i >= 0 && count < 10; i--) {
        int author = tweets[i].userId;
        if (tweets[i].active && (author == userId || isFollowing(userId, author))) out[count++] = tweets[i].id;
    }
    return count;
}
void follow(int followerId, int followeeId) {
    if (followerId == followeeId) return;
    if (isFollowing(followerId, followeeId)) return;
    follows[followsCount].follower = followerId; follows[followsCount].followee = followeeId; followsCount++;
}
void unfollow(int followerId, int followeeId) {
    for (int i = 0; i < followsCount; i++) {
        if (follows[i].follower == followerId && follows[i].followee == followeeId) {
            follows[i] = follows[followsCount - 1]; followsCount--; return;
        }
    }
}
int deleteTweet(int userId, int tweetId) {
    for (int i = 0; i < tweetsCount; i++) {
        if (tweets[i].id == tweetId) {
            if (tweets[i].userId == userId && tweets[i].active) {
                tweets[i].active = 0;
                return 1;
            }
            return 0;
        }
    }
    return 0;
}
int main() {
    int q; if (scanf("%d", &q) != 1) return 0;
    char** out = malloc(q * sizeof(char*)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[20]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "POST") == 0) { int u, t; if (scanf("%d %d", &u, &t) != 2) break; postTweet(u, t); }
        else if (strcmp(op, "FOLLOW") == 0) { int u1, u2; if (scanf("%d %d", &u1, &u2) != 2) break; follow(u1, u2); }
        else if (strcmp(op, "UNFOLLOW") == 0) { int u1, u2; if (scanf("%d %d", &u1, &u2) != 2) break; unfollow(u1, u2); }
        else if (strcmp(op, "DELETE") == 0) {
            int u, t; if (scanf("%d %d", &u, &t) != 2) break;
            int res = deleteTweet(u, t);
            char* buf = malloc(10 * sizeof(char)); strcpy(buf, res ? "true" : "false");
            out[outCount++] = buf;
        }
        else if (strcmp(op, "GET_FEED") == 0) {
            int u; if (scanf("%d", &u) != 1) break;
            int feed[100]; int count = getNewsFeed(u, feed);
            char* buf = malloc(2000 * sizeof(char));
            if (count == 0) strcpy(buf, "#");
            else {
                buf[0] = '\\0';
                for (int j = 0; j < count; j++) {
                    char tmp[20]; sprintf(tmp, "%d%s", feed[j], (j + 1 < count ? "," : ""));
                    strcat(buf, tmp);
                }
            }
            out[outCount++] = buf;
        }
    }
    for (int i = 0; i < outCount; i++) { printf("%s%s", out[i], (i + 1 < outCount ? " " : "")); free(out[i]); }
    printf("\\n"); free(out); return 0;
}`
  },
  "twt-e4": {
    "python": `class Twitter:
    def __init__(self):
        self.tweets = []
        self.follows = {}
        self.blocks = {}
    def postTweet(self, userId: int, tweetId: int) -> None:
        self.tweets.append((tweetId, userId))
    def getNewsFeed(self, userId: int) -> list:
        feed = []
        count = 0
        followees = self.follows.get(userId, set())
        blocked = self.blocks.get(userId, set())
        for tweetId, authorId in reversed(self.tweets):
            if authorId in blocked or userId in self.blocks.get(authorId, set()):
                continue
            if authorId == userId or authorId in followees:
                feed.append(tweetId)
                count += 1
                if count == 10: break
        return feed
    def follow(self, followerId: int, followeeId: int) -> None:
        if followerId == followeeId: return
        if followeeId in self.blocks.get(followerId, set()) or followerId in self.blocks.get(followeeId, set()):
            return
        self.follows.setdefault(followerId, set()).add(followeeId)
    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followerId in self.follows and followeeId in self.follows[followerId]:
            self.follows[followerId].remove(followeeId)
    def block(self, userId: int, blockedId: int) -> None:
        if userId == blockedId: return
        self.blocks.setdefault(userId, set()).add(blockedId)
        self.unfollow(userId, blockedId)
        self.unfollow(blockedId, userId)
    def unblock(self, userId: int, blockedId: int) -> None:
        if userId in self.blocks and blockedId in self.blocks[userId]:
            self.blocks[userId].remove(blockedId)

ts = Twitter()
out = []
import sys
lines = sys.stdin.read().splitlines()
if lines:
    try: q = int(lines[0].strip())
    except: sys.exit(0)
    for i in range(1, q + 1):
        if i >= len(lines): break
        parts = lines[i].strip().split()
        if not parts: continue
        op = parts[0]
        if op == "POST": ts.postTweet(int(parts[1]), int(parts[2]))
        elif op == "FOLLOW": ts.follow(int(parts[1]), int(parts[2]))
        elif op == "UNFOLLOW": ts.unfollow(int(parts[1]), int(parts[2]))
        elif op == "BLOCK": ts.block(int(parts[1]), int(parts[2]))
        elif op == "UNBLOCK": ts.unblock(int(parts[1]), int(parts[2]))
        elif op == "GET_FEED":
            feed = ts.getNewsFeed(int(parts[1]))
            out.append(",".join(map(str, feed)) if feed else "#")
    print(" ".join(out))`,
    "cpp": `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <unordered_set>
using namespace std;
class Twitter {
    struct Tweet { int id; int userId; };
    vector<Tweet> tweets;
    unordered_map<int, unordered_set<int>> follows;
    unordered_map<int, unordered_set<int>> blocks;
public:
    Twitter() {}
    void postTweet(int userId, int tweetId) { tweets.push_back({tweetId, userId}); }
    vector<int> getNewsFeed(int userId) {
        vector<int> feed;
        int count = 0;
        for (int i = (int)tweets.size() - 1; i >= 0 && count < 10; i--) {
            int author = tweets[i].userId;
            if (blocks[userId].count(author) || blocks[author].count(userId)) continue;
            if (author == userId || (follows.count(userId) && follows[userId].count(author))) {
                feed.push_back(tweets[i].id);
                count++;
            }
        }
        return feed;
    }
    void follow(int followerId, int followeeId) {
        if (followerId == followeeId) return;
        if (blocks[followerId].count(followeeId) || blocks[followeeId].count(followerId)) return;
        follows[followerId].insert(followeeId);
    }
    void unfollow(int followerId, int followeeId) { if (follows.count(followerId)) follows[followerId].erase(followeeId); }
    void block(int userId, int blockedId) {
        if (userId == blockedId) return;
        blocks[userId].insert(blockedId);
        unfollow(userId, blockedId);
        unfollow(blockedId, userId);
    }
    void unblock(int userId, int blockedId) { blocks[userId].erase(blockedId); }
};
int main() {
    Twitter ts;
    int q;
    if (cin >> q) {
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; if (!(cin >> op)) break;
            if (op == "POST") { int u, t; cin >> u >> t; ts.postTweet(u, t); }
            else if (op == "FOLLOW") { int u1, u2; cin >> u1 >> u2; ts.follow(u1, u2); }
            else if (op == "UNFOLLOW") { int u1, u2; cin >> u1 >> u2; ts.unfollow(u1, u2); }
            else if (op == "BLOCK") { int u, b; cin >> u >> b; ts.block(u, b); }
            else if (op == "UNBLOCK") { int u, b; cin >> u >> b; ts.unblock(u, b); }
            else if (op == "GET_FEED") {
                int u; cin >> u; vector<int> feed = ts.getNewsFeed(u);
                if (feed.empty()) out.push_back("#");
                else {
                    string s = "";
                    for (size_t j = 0; j < feed.size(); j++) s += to_string(feed[j]) + (j + 1 < feed.size() ? "," : "");
                    out.push_back(s);
                }
            }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    "java": `import java.util.*;
class Twitter {
    private List<int[]> tweets = new ArrayList<>();
    private Map<Integer, Set<Integer>> follows = new HashMap<>();
    private Map<Integer, Set<Integer>> blocks = new HashMap<>();
    public Twitter() {}
    public void postTweet(int userId, int tweetId) { tweets.add(new int[]{tweetId, userId}); }
    public List<Integer> getNewsFeed(int userId) {
        List<Integer> feed = new ArrayList<>();
        Set<Integer> followees = follows.getOrDefault(userId, new HashSet<>());
        Set<Integer> blocked = blocks.getOrDefault(userId, new HashSet<>());
        int count = 0;
        for (int i = tweets.size() - 1; i >= 0 && count < 10; i--) {
            int[] t = tweets.get(i);
            int author = t[1];
            if (blocked.contains(author) || blocks.getOrDefault(author, new HashSet<>()).contains(userId)) continue;
            if (author == userId || followees.contains(author)) {
                feed.add(t[0]);
                count++;
            }
        }
        return feed;
    }
    public void follow(int followerId, int followeeId) {
        if (followerId == followeeId) return;
        if (blocks.getOrDefault(followerId, new HashSet<>()).contains(followeeId) ||
            blocks.getOrDefault(followeeId, new HashSet<>()).contains(followerId)) return;
        follows.computeIfAbsent(followerId, k -> new HashSet<>()).add(followeeId);
    }
    public void unfollow(int followerId, int followeeId) {
        if (follows.containsKey(followerId)) follows.get(followerId).remove(followeeId);
    }
    public void block(int userId, int blockedId) {
        if (userId == blockedId) return;
        blocks.computeIfAbsent(userId, k -> new HashSet<>()).add(blockedId);
        unfollow(userId, blockedId);
        unfollow(blockedId, userId);
    }
    public void unblock(int userId, int blockedId) {
        if (blocks.containsKey(userId)) blocks.get(userId).remove(blockedId);
    }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            Twitter ts = new Twitter();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                if (!sc.hasNext()) break;
                String op = sc.next();
                if (op.equals("POST")) ts.postTweet(sc.nextInt(), sc.nextInt());
                else if (op.equals("FOLLOW")) ts.follow(sc.nextInt(), sc.nextInt());
                else if (op.equals("UNFOLLOW")) ts.unfollow(sc.nextInt(), sc.nextInt());
                else if (op.equals("BLOCK")) ts.block(sc.nextInt(), sc.nextInt());
                else if (op.equals("UNBLOCK")) ts.unblock(sc.nextInt(), sc.nextInt());
                else if (op.equals("GET_FEED")) {
                    List<Integer> feed = ts.getNewsFeed(sc.nextInt());
                    if (feed.isEmpty()) out.add("#");
                    else {
                        StringBuilder sb = new StringBuilder();
                        for (int j = 0; j < feed.size(); j++) sb.append(feed.get(j)).append(j + 1 < feed.size() ? "," : "");
                        out.add(sb.toString());
                    }
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    "c": `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_TWEETS 10005
#define MAX_FOLLOWS 10005
#define MAX_BLOCKS 10005
struct Tweet { int id; int userId; };
struct Follow { int follower; int followee; };
struct Block { int blocker; int blocked; };
struct Tweet tweets[MAX_TWEETS]; int tweetsCount = 0;
struct Follow follows[MAX_FOLLOWS]; int followsCount = 0;
struct Block blocks[MAX_BLOCKS]; int blocksCount = 0;
int isFollowing(int follower, int followee) {
    for (int i = 0; i < followsCount; i++) if (follows[i].follower == follower && follows[i].followee == followee) return 1;
    return 0;
}
int isBlocked(int u1, int u2) {
    for (int i = 0; i < blocksCount; i++) {
        if ((blocks[i].blocker == u1 && blocks[i].blocked == u2) || (blocks[i].blocker == u2 && blocks[i].blocked == u1)) return 1;
    }
    return 0;
}
void postTweet(int userId, int tweetId) {
    tweets[tweetsCount].id = tweetId; tweets[tweetsCount].userId = userId; tweetsCount++;
}
int getNewsFeed(int userId, int* out) {
    int count = 0;
    for (int i = tweetsCount - 1; i >= 0 && count < 10; i--) {
        int author = tweets[i].userId;
        if (isBlocked(userId, author)) continue;
        if (author == userId || isFollowing(userId, author)) out[count++] = tweets[i].id;
    }
    return count;
}
void unfollow(int followerId, int followeeId) {
    for (int i = 0; i < followsCount; i++) {
        if (follows[i].follower == followerId && follows[i].followee == followeeId) {
            follows[i] = follows[followsCount - 1]; followsCount--; return;
        }
    }
}
void follow(int followerId, int followeeId) {
    if (followerId == followeeId) return;
    if (isBlocked(followerId, followeeId)) return;
    if (isFollowing(followerId, followeeId)) return;
    follows[followsCount].follower = followerId; follows[followsCount].followee = followeeId; followsCount++;
}
void block(int userId, int blockedId) {
    if (userId == blockedId) return;
    for (int i = 0; i < blocksCount; i++) if (blocks[i].blocker == userId && blocks[i].blocked == blockedId) return;
    blocks[blocksCount].blocker = userId; blocks[blocksCount].blocked = blockedId; blocksCount++;
    unfollow(userId, blockedId);
    unfollow(blockedId, userId);
}
void unblock(int userId, int blockedId) {
    for (int i = 0; i < blocksCount; i++) {
        if (blocks[i].blocker == userId && blocks[i].blocked == blockedId) {
            blocks[i] = blocks[blocksCount - 1]; blocksCount--; return;
        }
    }
}
int main() {
    int q; if (scanf("%d", &q) != 1) return 0;
    char** out = malloc(q * sizeof(char*)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[20]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "POST") == 0) { int u, t; if (scanf("%d %d", &u, &t) != 2) break; postTweet(u, t); }
        else if (strcmp(op, "FOLLOW") == 0) { int u1, u2; if (scanf("%d %d", &u1, &u2) != 2) break; follow(u1, u2); }
        else if (strcmp(op, "UNFOLLOW") == 0) { int u1, u2; if (scanf("%d %d", &u1, &u2) != 2) break; unfollow(u1, u2); }
        else if (strcmp(op, "BLOCK") == 0) { int u, b; if (scanf("%d %d", &u, &b) != 2) break; block(u, b); }
        else if (strcmp(op, "UNBLOCK") == 0) { int u, b; if (scanf("%d %d", &u, &b) != 2) break; unblock(u, b); }
        else if (strcmp(op, "GET_FEED") == 0) {
            int u; if (scanf("%d", &u) != 1) break;
            int feed[100]; int count = getNewsFeed(u, feed);
            char* buf = malloc(2000 * sizeof(char));
            if (count == 0) strcpy(buf, "#");
            else {
                buf[0] = '\\0';
                for (int j = 0; j < count; j++) {
                    char tmp[20]; sprintf(tmp, "%d%s", feed[j], (j + 1 < count ? "," : ""));
                    strcat(buf, tmp);
                }
            }
            out[outCount++] = buf;
        }
    }
    for (int i = 0; i < outCount; i++) { printf("%s%s", out[i], (i + 1 < outCount ? " " : "")); free(out[i]); }
    printf("\\n"); free(out); return 0;
}`
  },
  "twt-e5": {
    "python": `class Twitter:
    def __init__(self):
        self.tweets = []
        self.follows = {}
    def postTweet(self, userId: int, tweetId: int) -> None:
        self.tweets.append((tweetId, userId))
    def getNewsFeed(self, userId: int) -> list:
        feed = []
        seen = set()
        followees = self.follows.get(userId, set())
        for tweetId, authorId in reversed(self.tweets):
            if tweetId in seen: continue
            if authorId == userId or authorId in followees:
                feed.append(tweetId)
                seen.add(tweetId)
                if len(feed) == 10: break
        return feed
    def follow(self, followerId: int, followeeId: int) -> None:
        if followerId != followeeId:
            self.follows.setdefault(followerId, set()).add(followeeId)
    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followerId in self.follows and followeeId in self.follows[followerId]:
            self.follows[followerId].remove(followeeId)
    def retweet(self, userId: int, tweetId: int) -> None:
        self.tweets.append((tweetId, userId))

ts = Twitter()
out = []
import sys
lines = sys.stdin.read().splitlines()
if lines:
    try: q = int(lines[0].strip())
    except: sys.exit(0)
    for i in range(1, q + 1):
        if i >= len(lines): break
        parts = lines[i].strip().split()
        if not parts: continue
        op = parts[0]
        if op == "POST": ts.postTweet(int(parts[1]), int(parts[2]))
        elif op == "FOLLOW": ts.follow(int(parts[1]), int(parts[2]))
        elif op == "UNFOLLOW": ts.unfollow(int(parts[1]), int(parts[2]))
        elif op == "RETWEET": ts.retweet(int(parts[1]), int(parts[2]))
        elif op == "GET_FEED":
            feed = ts.getNewsFeed(int(parts[1]))
            out.append(",".join(map(str, feed)) if feed else "#")
    print(" ".join(out))`,
    "cpp": `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <unordered_set>
using namespace std;
class Twitter {
    struct Tweet { int id; int userId; };
    vector<Tweet> tweets;
    unordered_map<int, unordered_set<int>> follows;
public:
    Twitter() {}
    void postTweet(int userId, int tweetId) { tweets.push_back({tweetId, userId}); }
    vector<int> getNewsFeed(int userId) {
        vector<int> feed;
        unordered_set<int> seen;
        for (int i = (int)tweets.size() - 1; i >= 0 && feed.size() < 10; i--) {
            if (seen.count(tweets[i].id)) continue;
            int author = tweets[i].userId;
            if (author == userId || (follows.count(userId) && follows[userId].count(author))) {
                feed.push_back(tweets[i].id);
                seen.insert(tweets[i].id);
            }
        }
        return feed;
    }
    void follow(int followerId, int followeeId) { if (followerId != followeeId) follows[followerId].insert(followeeId); }
    void unfollow(int followerId, int followeeId) { if (follows.count(followerId)) follows[followerId].erase(followeeId); }
    void retweet(int userId, int tweetId) { tweets.push_back({tweetId, userId}); }
};
int main() {
    Twitter ts;
    int q;
    if (cin >> q) {
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; if (!(cin >> op)) break;
            if (op == "POST") { int u, t; cin >> u >> t; ts.postTweet(u, t); }
            else if (op == "FOLLOW") { int u1, u2; cin >> u1 >> u2; ts.follow(u1, u2); }
            else if (op == "UNFOLLOW") { int u1, u2; cin >> u1 >> u2; ts.unfollow(u1, u2); }
            else if (op == "RETWEET") { int u, t; cin >> u >> t; ts.retweet(u, t); }
            else if (op == "GET_FEED") {
                int u; cin >> u; vector<int> feed = ts.getNewsFeed(u);
                if (feed.empty()) out.push_back("#");
                else {
                    string s = "";
                    for (size_t j = 0; j < feed.size(); j++) s += to_string(feed[j]) + (j + 1 < feed.size() ? "," : "");
                    out.push_back(s);
                }
            }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    "java": `import java.util.*;
class Twitter {
    private List<int[]> tweets = new ArrayList<>();
    private Map<Integer, Set<Integer>> follows = new HashMap<>();
    public Twitter() {}
    public void postTweet(int userId, int tweetId) { tweets.add(new int[]{tweetId, userId}); }
    public List<Integer> getNewsFeed(int userId) {
        List<Integer> feed = new ArrayList<>();
        Set<Integer> followees = follows.getOrDefault(userId, new HashSet<>());
        Set<Integer> seen = new HashSet<>();
        for (int i = tweets.size() - 1; i >= 0 && feed.size() < 10; i--) {
            int[] t = tweets.get(i);
            if (seen.contains(t[0])) continue;
            if (t[1] == userId || followees.contains(t[1])) {
                feed.add(t[0]);
                seen.add(t[0]);
            }
        }
        return feed;
    }
    public void follow(int followerId, int followeeId) {
        if (followerId != followeeId) follows.computeIfAbsent(followerId, k -> new HashSet<>()).add(followeeId);
    }
    public void unfollow(int followerId, int followeeId) {
        if (follows.containsKey(followerId)) follows.get(followerId).remove(followeeId);
    }
    public void retweet(int userId, int tweetId) { tweets.add(new int[]{tweetId, userId}); }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            Twitter ts = new Twitter();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                if (!sc.hasNext()) break;
                String op = sc.next();
                if (op.equals("POST")) ts.postTweet(sc.nextInt(), sc.nextInt());
                else if (op.equals("FOLLOW")) ts.follow(sc.nextInt(), sc.nextInt());
                else if (op.equals("UNFOLLOW")) ts.unfollow(sc.nextInt(), sc.nextInt());
                else if (op.equals("RETWEET")) ts.retweet(sc.nextInt(), sc.nextInt());
                else if (op.equals("GET_FEED")) {
                    List<Integer> feed = ts.getNewsFeed(sc.nextInt());
                    if (feed.isEmpty()) out.add("#");
                    else {
                        StringBuilder sb = new StringBuilder();
                        for (int j = 0; j < feed.size(); j++) sb.append(feed.get(j)).append(j + 1 < feed.size() ? "," : "");
                        out.add(sb.toString());
                    }
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    "c": `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_TWEETS 10005
#define MAX_FOLLOWS 10005
struct Tweet { int id; int userId; };
struct Follow { int follower; int followee; };
struct Tweet tweets[MAX_TWEETS]; int tweetsCount = 0;
struct Follow follows[MAX_FOLLOWS]; int followsCount = 0;
int isFollowing(int follower, int followee) {
    for (int i = 0; i < followsCount; i++) if (follows[i].follower == follower && follows[i].followee == followee) return 1;
    return 0;
}
void postTweet(int userId, int tweetId) {
    tweets[tweetsCount].id = tweetId; tweets[tweetsCount].userId = userId; tweetsCount++;
}
int getNewsFeed(int userId, int* out) {
    int count = 0;
    int seen[100]; int seenCount = 0;
    for (int i = tweetsCount - 1; i >= 0 && count < 10; i--) {
        int tid = tweets[i].id;
        int isDup = 0;
        for (int j = 0; j < seenCount; j++) { if (seen[j] == tid) { isDup = 1; break; } }
        if (isDup) continue;
        int author = tweets[i].userId;
        if (author == userId || isFollowing(userId, author)) {
            out[count++] = tid;
            seen[seenCount++] = tid;
        }
    }
    return count;
}
void follow(int followerId, int followeeId) {
    if (followerId == followeeId) return;
    if (isFollowing(followerId, followeeId)) return;
    follows[followsCount].follower = followerId; follows[followsCount].followee = followeeId; followsCount++;
}
void unfollow(int followerId, int followeeId) {
    for (int i = 0; i < followsCount; i++) {
        if (follows[i].follower == followerId && follows[i].followee == followeeId) {
            follows[i] = follows[followsCount - 1]; followsCount--; return;
        }
    }
}
void retweet(int userId, int tweetId) {
    tweets[tweetsCount].id = tweetId; tweets[tweetsCount].userId = userId; tweetsCount++;
}
int main() {
    int q; if (scanf("%d", &q) != 1) return 0;
    char** out = malloc(q * sizeof(char*)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[20]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "POST") == 0) { int u, t; if (scanf("%d %d", &u, &t) != 2) break; postTweet(u, t); }
        else if (strcmp(op, "FOLLOW") == 0) { int u1, u2; if (scanf("%d %d", &u1, &u2) != 2) break; follow(u1, u2); }
        else if (strcmp(op, "UNFOLLOW") == 0) { int u1, u2; if (scanf("%d %d", &u1, &u2) != 2) break; unfollow(u1, u2); }
        else if (strcmp(op, "RETWEET") == 0) { int u, t; if (scanf("%d %d", &u, &t) != 2) break; retweet(u, t); }
        else if (strcmp(op, "GET_FEED") == 0) {
            int u; if (scanf("%d", &u) != 1) break;
            int feed[100]; int count = getNewsFeed(u, feed);
            char* buf = malloc(2000 * sizeof(char));
            if (count == 0) strcpy(buf, "#");
            else {
                buf[0] = '\\0';
                for (int j = 0; j < count; j++) {
                    char tmp[20]; sprintf(tmp, "%d%s", feed[j], (j + 1 < count ? "," : ""));
                    strcat(buf, tmp);
                }
            }
            out[outCount++] = buf;
        }
    }
    for (int i = 0; i < outCount; i++) { printf("%s%s", out[i], (i + 1 < outCount ? " " : "")); free(out[i]); }
    printf("\\n"); free(out); return 0;
}`
  },
  "twt-m1": {
    "python": `class Twitter:
    def __init__(self):
        self.tweets = []
        self.follows = {}
        self.mutes = {}
    def postTweet(self, userId: int, tweetId: int) -> None:
        self.tweets.append((tweetId, userId))
    def getNewsFeed(self, userId: int) -> list:
        feed = []
        count = 0
        followees = self.follows.get(userId, set())
        muted = self.mutes.get(userId, set())
        for tweetId, authorId in reversed(self.tweets):
            if authorId in muted:
                continue
            if authorId == userId or authorId in followees:
                feed.append(tweetId)
                count += 1
                if count == 10: break
        return feed
    def follow(self, followerId: int, followeeId: int) -> None:
        if followerId != followeeId:
            self.follows.setdefault(followerId, set()).add(followeeId)
    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followerId in self.follows and followeeId in self.follows[followerId]:
            self.follows[followerId].remove(followeeId)
    def mute(self, userId: int, mutedId: int) -> None:
        self.mutes.setdefault(userId, set()).add(mutedId)
    def unmute(self, userId: int, mutedId: int) -> None:
        if userId in self.mutes and mutedId in self.mutes[userId]:
            self.mutes[userId].remove(mutedId)

ts = Twitter()
out = []
import sys
lines = sys.stdin.read().splitlines()
if lines:
    try: q = int(lines[0].strip())
    except: sys.exit(0)
    for i in range(1, q + 1):
        if i >= len(lines): break
        parts = lines[i].strip().split()
        if not parts: continue
        op = parts[0]
        if op == "POST": ts.postTweet(int(parts[1]), int(parts[2]))
        elif op == "FOLLOW": ts.follow(int(parts[1]), int(parts[2]))
        elif op == "UNFOLLOW": ts.unfollow(int(parts[1]), int(parts[2]))
        elif op == "MUTE": ts.mute(int(parts[1]), int(parts[2]))
        elif op == "UNMUTE": ts.unmute(int(parts[1]), int(parts[2]))
        elif op == "GET_FEED":
            feed = ts.getNewsFeed(int(parts[1]))
            out.append(",".join(map(str, feed)) if feed else "#")
    print(" ".join(out))`,
    "cpp": `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <unordered_set>
using namespace std;
class Twitter {
    struct Tweet { int id; int userId; };
    vector<Tweet> tweets;
    unordered_map<int, unordered_set<int>> follows;
    unordered_map<int, unordered_set<int>> mutes;
public:
    Twitter() {}
    void postTweet(int userId, int tweetId) { tweets.push_back({tweetId, userId}); }
    vector<int> getNewsFeed(int userId) {
        vector<int> feed;
        int count = 0;
        for (int i = (int)tweets.size() - 1; i >= 0 && count < 10; i--) {
            int author = tweets[i].userId;
            if (mutes[userId].count(author)) continue;
            if (author == userId || (follows.count(userId) && follows[userId].count(author))) {
                feed.push_back(tweets[i].id);
                count++;
            }
        }
        return feed;
    }
    void follow(int followerId, int followeeId) { if (followerId != followeeId) follows[followerId].insert(followeeId); }
    void unfollow(int followerId, int followeeId) { if (follows.count(followerId)) follows[followerId].erase(followeeId); }
    void mute(int userId, int mutedId) { mutes[userId].insert(mutedId); }
    void unmute(int userId, int mutedId) { mutes[userId].erase(mutedId); }
};
int main() {
    Twitter ts;
    int q;
    if (cin >> q) {
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; if (!(cin >> op)) break;
            if (op == "POST") { int u, t; cin >> u >> t; ts.postTweet(u, t); }
            else if (op == "FOLLOW") { int u1, u2; cin >> u1 >> u2; ts.follow(u1, u2); }
            else if (op == "UNFOLLOW") { int u1, u2; cin >> u1 >> u2; ts.unfollow(u1, u2); }
            else if (op == "MUTE") { int u, m; cin >> u >> m; ts.mute(u, m); }
            else if (op == "UNMUTE") { int u, m; cin >> u >> m; ts.unmute(u, m); }
            else if (op == "GET_FEED") {
                int u; cin >> u; vector<int> feed = ts.getNewsFeed(u);
                if (feed.empty()) out.push_back("#");
                else {
                    string s = "";
                    for (size_t j = 0; j < feed.size(); j++) s += to_string(feed[j]) + (j + 1 < feed.size() ? "," : "");
                    out.push_back(s);
                }
            }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    "java": `import java.util.*;
class Twitter {
    private List<int[]> tweets = new ArrayList<>();
    private Map<Integer, Set<Integer>> follows = new HashMap<>();
    private Map<Integer, Set<Integer>> mutes = new HashMap<>();
    public Twitter() {}
    public void postTweet(int userId, int tweetId) { tweets.add(new int[]{tweetId, userId}); }
    public List<Integer> getNewsFeed(int userId) {
        List<Integer> feed = new ArrayList<>();
        Set<Integer> followees = follows.getOrDefault(userId, new HashSet<>());
        Set<Integer> muted = mutes.getOrDefault(userId, new HashSet<>());
        int count = 0;
        for (int i = tweets.size() - 1; i >= 0 && count < 10; i--) {
            int[] t = tweets.get(i);
            if (muted.contains(t[1])) continue;
            if (t[1] == userId || followees.contains(t[1])) {
                feed.add(t[0]);
                count++;
            }
        }
        return feed;
    }
    public void follow(int followerId, int followeeId) {
        if (followerId != followeeId) follows.computeIfAbsent(followerId, k -> new HashSet<>()).add(followeeId);
    }
    public void unfollow(int followerId, int followeeId) {
        if (follows.containsKey(followerId)) follows.get(followerId).remove(followeeId);
    }
    public void mute(int userId, int mutedId) { mutes.computeIfAbsent(userId, k -> new HashSet<>()).add(mutedId); }
    public void unmute(int userId, int mutedId) { if (mutes.containsKey(userId)) mutes.get(userId).remove(mutedId); }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            Twitter ts = new Twitter();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                if (!sc.hasNext()) break;
                String op = sc.next();
                if (op.equals("POST")) ts.postTweet(sc.nextInt(), sc.nextInt());
                else if (op.equals("FOLLOW")) ts.follow(sc.nextInt(), sc.nextInt());
                else if (op.equals("UNFOLLOW")) ts.unfollow(sc.nextInt(), sc.nextInt());
                else if (op.equals("MUTE")) ts.mute(sc.nextInt(), sc.nextInt());
                else if (op.equals("UNMUTE")) ts.unmute(sc.nextInt(), sc.nextInt());
                else if (op.equals("GET_FEED")) {
                    List<Integer> feed = ts.getNewsFeed(sc.nextInt());
                    if (feed.isEmpty()) out.add("#");
                    else {
                        StringBuilder sb = new StringBuilder();
                        for (int j = 0; j < feed.size(); j++) sb.append(feed.get(j)).append(j + 1 < feed.size() ? "," : "");
                        out.add(sb.toString());
                    }
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    "c": `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_TWEETS 10005
#define MAX_FOLLOWS 10005
#define MAX_MUTES 10005
struct Tweet { int id; int userId; };
struct Follow { int follower; int followee; };
struct Mute { int userId; int mutedId; };
struct Tweet tweets[MAX_TWEETS]; int tweetsCount = 0;
struct Follow follows[MAX_FOLLOWS]; int followsCount = 0;
struct Mute mutes[MAX_MUTES]; int mutesCount = 0;
int isFollowing(int follower, int followee) {
    for (int i = 0; i < followsCount; i++) if (follows[i].follower == follower && follows[i].followee == followee) return 1;
    return 0;
}
int isMuted(int userId, int authorId) {
    for (int i = 0; i < mutesCount; i++) if (mutes[i].userId == userId && mutes[i].mutedId == authorId) return 1;
    return 0;
}
void postTweet(int userId, int tweetId) {
    tweets[tweetsCount].id = tweetId; tweets[tweetsCount].userId = userId; tweetsCount++;
}
int getNewsFeed(int userId, int* out) {
    int count = 0;
    for (int i = tweetsCount - 1; i >= 0 && count < 10; i--) {
        int author = tweets[i].userId;
        if (isMuted(userId, author)) continue;
        if (author == userId || isFollowing(userId, author)) out[count++] = tweets[i].id;
    }
    return count;
}
void follow(int followerId, int followeeId) {
    if (followerId == followeeId) return;
    if (isFollowing(followerId, followeeId)) return;
    follows[followsCount].follower = followerId; follows[followsCount].followee = followeeId; followsCount++;
}
void unfollow(int followerId, int followeeId) {
    for (int i = 0; i < followsCount; i++) {
        if (follows[i].follower == followerId && follows[i].followee == followeeId) {
            follows[i] = follows[followsCount - 1]; followsCount--; return;
        }
    }
}
void mute(int userId, int mutedId) {
    if (isMuted(userId, mutedId)) return;
    mutes[mutesCount].userId = userId; mutes[mutesCount].mutedId = mutedId; mutesCount++;
}
void unmute(int userId, int mutedId) {
    for (int i = 0; i < mutesCount; i++) {
        if (mutes[i].userId == userId && mutes[i].mutedId == mutedId) {
            mutes[i] = mutes[mutesCount - 1]; mutesCount--; return;
        }
    }
}
int main() {
    int q; if (scanf("%d", &q) != 1) return 0;
    char** out = malloc(q * sizeof(char*)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[20]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "POST") == 0) { int u, t; if (scanf("%d %d", &u, &t) != 2) break; postTweet(u, t); }
        else if (strcmp(op, "FOLLOW") == 0) { int u1, u2; if (scanf("%d %d", &u1, &u2) != 2) break; follow(u1, u2); }
        else if (strcmp(op, "UNFOLLOW") == 0) { int u1, u2; if (scanf("%d %d", &u1, &u2) != 2) break; unfollow(u1, u2); }
        else if (strcmp(op, "MUTE") == 0) { int u, m; if (scanf("%d %d", &u, &m) != 2) break; mute(u, m); }
        else if (strcmp(op, "UNMUTE") == 0) { int u, m; if (scanf("%d %d", &u, &m) != 2) break; unmute(u, m); }
        else if (strcmp(op, "GET_FEED") == 0) {
            int u; if (scanf("%d", &u) != 1) break;
            int feed[100]; int count = getNewsFeed(u, feed);
            char* buf = malloc(2000 * sizeof(char));
            if (count == 0) strcpy(buf, "#");
            else {
                buf[0] = '\\0';
                for (int j = 0; j < count; j++) {
                    char tmp[20]; sprintf(tmp, "%d%s", feed[j], (j + 1 < count ? "," : ""));
                    strcat(buf, tmp);
                }
            }
            out[outCount++] = buf;
        }
    }
    for (int i = 0; i < outCount; i++) { printf("%s%s", out[i], (i + 1 < outCount ? " " : "")); free(out[i]); }
    printf("\\n"); free(out); return 0;
}`
  },
  "twt-m2": {
    "python": `class Twitter:
    def __init__(self):
        self.tweets = []
        self.follows = {}
    def postTweet(self, userId: int, tweetId: int) -> None:
        self.tweets.append((tweetId, userId))
    def getNewsFeedPaginated(self, userId: int, page: int, pageSize: int) -> list:
        feed = []
        followees = self.follows.get(userId, set())
        for tweetId, authorId in reversed(self.tweets):
            if authorId == userId or authorId in followees:
                feed.append(tweetId)
        start = (page - 1) * pageSize
        end = start + pageSize
        return feed[start:end] if start < len(feed) else []
    def follow(self, followerId: int, followeeId: int) -> None:
        if followerId != followeeId:
            self.follows.setdefault(followerId, set()).add(followeeId)
    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followerId in self.follows and followeeId in self.follows[followerId]:
            self.follows[followerId].remove(followeeId)

ts = Twitter()
out = []
import sys
lines = sys.stdin.read().splitlines()
if lines:
    try: q = int(lines[0].strip())
    except: sys.exit(0)
    for i in range(1, q + 1):
        if i >= len(lines): break
        parts = lines[i].strip().split()
        if not parts: continue
        op = parts[0]
        if op == "POST": ts.postTweet(int(parts[1]), int(parts[2]))
        elif op == "FOLLOW": ts.follow(int(parts[1]), int(parts[2]))
        elif op == "UNFOLLOW": ts.unfollow(int(parts[1]), int(parts[2]))
        elif op == "GET_FEED_PAGINATED":
            feed = ts.getNewsFeedPaginated(int(parts[1]), int(parts[2]), int(parts[3]))
            out.append(",".join(map(str, feed)) if feed else "#")
    print(" ".join(out))`,
    "cpp": `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <unordered_set>
using namespace std;
class Twitter {
    struct Tweet { int id; int userId; };
    vector<Tweet> tweets;
    unordered_map<int, unordered_set<int>> follows;
public:
    Twitter() {}
    void postTweet(int userId, int tweetId) { tweets.push_back({tweetId, userId}); }
    vector<int> getNewsFeedPaginated(int userId, int page, int pageSize) {
        vector<int> feed;
        for (int i = (int)tweets.size() - 1; i >= 0; i--) {
            int author = tweets[i].userId;
            if (author == userId || (follows.count(userId) && follows[userId].count(author))) {
                feed.push_back(tweets[i].id);
            }
        }
        int start = (page - 1) * pageSize;
        if (start >= (int)feed.size()) return {};
        int end = min(start + pageSize, (int)feed.size());
        return vector<int>(feed.begin() + start, feed.begin() + end);
    }
    void follow(int followerId, int followeeId) { if (followerId != followeeId) follows[followerId].insert(followeeId); }
    void unfollow(int followerId, int followeeId) { if (follows.count(followerId)) follows[followerId].erase(followeeId); }
};
int main() {
    Twitter ts;
    int q;
    if (cin >> q) {
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; if (!(cin >> op)) break;
            if (op == "POST") { int u, t; cin >> u >> t; ts.postTweet(u, t); }
            else if (op == "FOLLOW") { int u1, u2; cin >> u1 >> u2; ts.follow(u1, u2); }
            else if (op == "UNFOLLOW") { int u1, u2; cin >> u1 >> u2; ts.unfollow(u1, u2); }
            else if (op == "GET_FEED_PAGINATED") {
                int u, p, ps; cin >> u >> p >> ps; vector<int> feed = ts.getNewsFeedPaginated(u, p, ps);
                if (feed.empty()) out.push_back("#");
                else {
                    string s = "";
                    for (size_t j = 0; j < feed.size(); j++) s += to_string(feed[j]) + (j + 1 < feed.size() ? "," : "");
                    out.push_back(s);
                }
            }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    "java": `import java.util.*;
class Twitter {
    private List<int[]> tweets = new ArrayList<>();
    private Map<Integer, Set<Integer>> follows = new HashMap<>();
    public Twitter() {}
    public void postTweet(int userId, int tweetId) { tweets.add(new int[]{tweetId, userId}); }
    public List<Integer> getNewsFeedPaginated(int userId, int page, int pageSize) {
        List<Integer> feed = new ArrayList<>();
        Set<Integer> followees = follows.getOrDefault(userId, new HashSet<>());
        for (int i = tweets.size() - 1; i >= 0; i--) {
            int[] t = tweets.get(i);
            if (t[1] == userId || followees.contains(t[1])) {
                feed.add(t[0]);
            }
        }
        int start = (page - 1) * pageSize;
        if (start >= feed.size()) return new ArrayList<>();
        int end = Math.min(start + pageSize, feed.size());
        return feed.subList(start, end);
    }
    public void follow(int followerId, int followeeId) {
        if (followerId != followeeId) follows.computeIfAbsent(followerId, k -> new HashSet<>()).add(followeeId);
    }
    public void unfollow(int followerId, int followeeId) {
        if (follows.containsKey(followerId)) follows.get(followerId).remove(followeeId);
    }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            Twitter ts = new Twitter();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                if (!sc.hasNext()) break;
                String op = sc.next();
                if (op.equals("POST")) ts.postTweet(sc.nextInt(), sc.nextInt());
                else if (op.equals("FOLLOW")) ts.follow(sc.nextInt(), sc.nextInt());
                else if (op.equals("UNFOLLOW")) ts.unfollow(sc.nextInt(), sc.nextInt());
                else if (op.equals("GET_FEED_PAGINATED")) {
                    List<Integer> feed = ts.getNewsFeedPaginated(sc.nextInt(), sc.nextInt(), sc.nextInt());
                    if (feed.isEmpty()) out.add("#");
                    else {
                        StringBuilder sb = new StringBuilder();
                        for (int j = 0; j < feed.size(); j++) sb.append(feed.get(j)).append(j + 1 < feed.size() ? "," : "");
                        out.add(sb.toString());
                    }
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    "c": `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_TWEETS 10005
#define MAX_FOLLOWS 10005
struct Tweet { int id; int userId; };
struct Follow { int follower; int followee; };
struct Tweet tweets[MAX_TWEETS]; int tweetsCount = 0;
struct Follow follows[MAX_FOLLOWS]; int followsCount = 0;
int isFollowing(int follower, int followee) {
    for (int i = 0; i < followsCount; i++) if (follows[i].follower == follower && follows[i].followee == followee) return 1;
    return 0;
}
void postTweet(int userId, int tweetId) {
    tweets[tweetsCount].id = tweetId; tweets[tweetsCount].userId = userId; tweetsCount++;
}
int getNewsFeedPaginated(int userId, int page, int pageSize, int* out) {
    int fullCount = 0;
    int* fullFeed = malloc(tweetsCount * sizeof(int));
    for (int i = tweetsCount - 1; i >= 0; i--) {
        int author = tweets[i].userId;
        if (author == userId || isFollowing(userId, author)) fullFeed[fullCount++] = tweets[i].id;
    }
    int start = (page - 1) * pageSize;
    int count = 0;
    if (start < fullCount) {
        for (int i = start; i < start + pageSize && i < fullCount; i++) {
            out[count++] = fullFeed[i];
        }
    }
    free(fullFeed);
    return count;
}
void follow(int followerId, int followeeId) {
    if (followerId == followeeId) return;
    if (isFollowing(followerId, followeeId)) return;
    follows[followsCount].follower = followerId; follows[followsCount].followee = followeeId; followsCount++;
}
void unfollow(int followerId, int followeeId) {
    for (int i = 0; i < followsCount; i++) {
        if (follows[i].follower == followerId && follows[i].followee == followeeId) {
            follows[i] = follows[followsCount - 1]; followsCount--; return;
        }
    }
}
int main() {
    int q; if (scanf("%d", &q) != 1) return 0;
    char** out = malloc(q * sizeof(char*)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[20]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "POST") == 0) { int u, t; if (scanf("%d %d", &u, &t) != 2) break; postTweet(u, t); }
        else if (strcmp(op, "FOLLOW") == 0) { int u1, u2; if (scanf("%d %d", &u1, &u2) != 2) break; follow(u1, u2); }
        else if (strcmp(op, "UNFOLLOW") == 0) { int u1, u2; if (scanf("%d %d", &u1, &u2) != 2) break; unfollow(u1, u2); }
        else if (strcmp(op, "GET_FEED_PAGINATED") == 0) {
            int u, p, ps; if (scanf("%d %d %d", &u, &p, &ps) != 3) break;
            int feed[1000]; int count = getNewsFeedPaginated(u, p, ps, feed);
            char* buf = malloc(20000 * sizeof(char));
            if (count == 0) strcpy(buf, "#");
            else {
                buf[0] = '\\0';
                for (int j = 0; j < count; j++) {
                    char tmp[20]; sprintf(tmp, "%d%s", feed[j], (j + 1 < count ? "," : ""));
                    strcat(buf, tmp);
                }
            }
            out[outCount++] = buf;
        }
    }
    for (int i = 0; i < outCount; i++) { printf("%s%s", out[i], (i + 1 < outCount ? " " : "")); free(out[i]); }
    printf("\\n"); free(out); return 0;
}`
  },
  "twt-m3": {
    "python": `class Twitter:
    def __init__(self):
        self.dms = []
    def sendDM(self, senderId: int, receiverId: int, messageId: int, text: str) -> None:
        self.dms.append((messageId, senderId, receiverId))
    def getDMs(self, userId: int, peerId: int) -> list:
        res = []
        for mid, s, r in self.dms:
            if (s == userId and r == peerId) or (s == peerId and r == userId):
                res.append(mid)
        return res

ts = Twitter()
out = []
import sys
lines = sys.stdin.read().splitlines()
if lines:
    try: q = int(lines[0].strip())
    except: sys.exit(0)
    for i in range(1, q + 1):
        if i >= len(lines): break
        parts = lines[i].strip().split()
        if not parts: continue
        op = parts[0]
        if op == "SEND_DM": ts.sendDM(int(parts[1]), int(parts[2]), int(parts[3]), parts[4])
        elif op == "GET_DMS":
            dms = ts.getDMs(int(parts[1]), int(parts[2]))
            out.append(",".join(map(str, dms)) if dms else "#")
    print(" ".join(out))`,
    "cpp": `#include <iostream>
#include <vector>
#include <string>
using namespace std;
class Twitter {
    struct DM { int id; int sender; int receiver; };
    vector<DM> dms;
public:
    Twitter() {}
    void sendDM(int senderId, int receiverId, int messageId, string text) { dms.push_back({messageId, senderId, receiverId}); }
    vector<int> getDMs(int userId, int peerId) {
        vector<int> res;
        for (const auto& dm : dms) {
            if ((dm.sender == userId && dm.receiver == peerId) || (dm.sender == peerId && dm.receiver == userId)) {
                res.push_back(dm.id);
            }
        }
        return res;
    }
};
int main() {
    Twitter ts;
    int q;
    if (cin >> q) {
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; if (!(cin >> op)) break;
            if (op == "SEND_DM") { int s, r, m; string t; cin >> s >> r >> m >> t; ts.sendDM(s, r, m, t); }
            else if (op == "GET_DMS") {
                int u, p; cin >> u >> p; vector<int> dms = ts.getDMs(u, p);
                if (dms.empty()) out.push_back("#");
                else {
                    string s = "";
                    for (size_t j = 0; j < dms.size(); j++) s += to_string(dms[j]) + (j + 1 < dms.size() ? "," : "");
                    out.push_back(s);
                }
            }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    "java": `import java.util.*;
class Twitter {
    private static class DM {
        int id, sender, receiver;
        DM(int id, int sender, int receiver) { this.id = id; this.sender = sender; this.receiver = receiver; }
    }
    private List<DM> dms = new ArrayList<>();
    public Twitter() {}
    public void sendDM(int senderId, int receiverId, int messageId, String text) { dms.add(new DM(messageId, senderId, receiverId)); }
    public List<Integer> getDMs(int userId, int peerId) {
        List<Integer> res = new ArrayList<>();
        for (DM dm : dms) {
            if ((dm.sender == userId && dm.receiver == peerId) || (dm.sender == peerId && dm.receiver == userId)) {
                res.add(dm.id);
            }
        }
        return res;
    }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            Twitter ts = new Twitter();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                if (!sc.hasNext()) break;
                String op = sc.next();
                if (op.equals("SEND_DM")) ts.sendDM(sc.nextInt(), sc.nextInt(), sc.nextInt(), sc.next());
                else if (op.equals("GET_DMS")) {
                    List<Integer> dms = ts.getDMs(sc.nextInt(), sc.nextInt());
                    if (dms.isEmpty()) out.add("#");
                    else {
                        StringBuilder sb = new StringBuilder();
                        for (int j = 0; j < dms.size(); j++) sb.append(dms.get(j)).append(j + 1 < dms.size() ? "," : "");
                        out.add(sb.toString());
                    }
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    "c": `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_DMS 10005
struct DM { int id; int sender; int receiver; };
struct DM dms[MAX_DMS]; int dmsCount = 0;
void sendDM(int senderId, int receiverId, int messageId, char* text) {
    dms[dmsCount].id = messageId; dms[dmsCount].sender = senderId; dms[dmsCount].receiver = receiverId; dmsCount++;
}
int getDMs(int userId, int peerId, int* out) {
    int count = 0;
    for (int i = 0; i < dmsCount; i++) {
        if ((dms[i].sender == userId && dms[i].receiver == peerId) || (dms[i].sender == peerId && dms[i].receiver == userId)) {
            out[count++] = dms[i].id;
        }
    }
    return count;
}
int main() {
    int q; if (scanf("%d", &q) != 1) return 0;
    char** out = malloc(q * sizeof(char*)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[20]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "SEND_DM") == 0) {
            int s, r, m; char text[200];
            if (scanf("%d %d %d %s", &s, &r, &m, text) != 4) break;
            sendDM(s, r, m, text);
        } else if (strcmp(op, "GET_DMS") == 0) {
            int u, p; if (scanf("%d %d", &u, &p) != 2) break;
            int feed[1000]; int count = getDMs(u, p, feed);
            char* buf = malloc(20000 * sizeof(char));
            if (count == 0) strcpy(buf, "#");
            else {
                buf[0] = '\\0';
                for (int j = 0; j < count; j++) {
                    char tmp[20]; sprintf(tmp, "%d%s", feed[j], (j + 1 < count ? "," : ""));
                    strcat(buf, tmp);
                }
            }
            out[outCount++] = buf;
        }
    }
    for (int i = 0; i < outCount; i++) { printf("%s%s", out[i], (i + 1 < outCount ? " " : "")); free(out[i]); }
    printf("\\n"); free(out); return 0;
}`
  },
  "twt-m4": {
    "python": `class Twitter:
    def __init__(self):
        self.tags = {}
    def postTweet(self, userId: int, tweetId: int, text: str) -> None:
        import re
        tokens = re.split(r'[\\s_]+', text)
        for token in tokens:
            if token.startswith('#') and len(token) > 1:
                self.tags[token] = self.tags.get(token, 0) + 1
    def getTrendingHashtags(self, n: int) -> list:
        sorted_tags = sorted(self.tags.keys(), key=lambda x: (-self.tags[x], x))
        return sorted_tags[:n]

ts = Twitter()
out = []
import sys
lines = sys.stdin.read().splitlines()
if lines:
    try: q = int(lines[0].strip())
    except: sys.exit(0)
    for i in range(1, q + 1):
        if i >= len(lines): break
        parts = lines[i].strip().split()
        if not parts: continue
        op = parts[0]
        if op == "POST_TEXT": ts.postTweet(int(parts[1]), int(parts[2]), parts[3])
        elif op == "GET_TRENDING":
            trending = ts.getTrendingHashtags(int(parts[1]))
            out.append(",".join(trending) if trending else "#")
    print(" ".join(out))`,
    "cpp": `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>
#include <sstream>
using namespace std;
class Twitter {
    unordered_map<string, int> tags;
public:
    Twitter() {}
    void postTweet(int userId, int tweetId, string text) {
        for (char& c : text) { if (c == '_') c = ' '; }
        stringstream ss(text);
        string token;
        while (ss >> token) {
            if (token.size() > 1 && token[0] == '#') {
                tags[token]++;
            }
        }
    }
    vector<string> getTrendingHashtags(int n) {
        vector<pair<string, int>> vec(tags.begin(), tags.end());
        sort(vec.begin(), vec.end(), [](const pair<string, int>& a, const pair<string, int>& b) {
            if (a.second != b.second) return a.second > b.second;
            return a.first < b.first;
        });
        vector<string> res;
        for (int i = 0; i < n && i < (int)vec.size(); i++) {
            res.push_back(vec[i].first);
        }
        return res;
    }
};
int main() {
    Twitter ts;
    int q;
    if (cin >> q) {
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; if (!(cin >> op)) break;
            if (op == "POST_TEXT") { int u, t; string s; cin >> u >> t >> s; ts.postTweet(u, t, s); }
            else if (op == "GET_TRENDING") {
                int n; cin >> n; vector<string> trending = ts.getTrendingHashtags(n);
                if (trending.empty()) out.push_back("#");
                else {
                    string s = "";
                    for (size_t j = 0; j < trending.size(); j++) s += trending[j] + (j + 1 < trending.size() ? "," : "");
                    out.push_back(s);
                }
            }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    "java": `import java.util.*;
class Twitter {
    private Map<String, Integer> tags = new HashMap<>();
    public Twitter() {}
    public void postTweet(int userId, int tweetId, String text) {
        String[] tokens = text.split("[\\\\s_]+");
        for (String t : tokens) {
            if (t.startsWith("#") && t.length() > 1) {
                tags.put(t, tags.getOrDefault(t, 0) + 1);
            }
        }
    }
    public List<String> getTrendingHashtags(int n) {
        List<String> list = new ArrayList<>(tags.keySet());
        list.sort((a, b) -> {
            int fa = tags.get(a), fb = tags.get(b);
            if (fa != fb) return fb - fa;
            return a.compareTo(b);
        });
        return list.subList(0, Math.min(n, list.size()));
    }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            Twitter ts = new Twitter();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                if (!sc.hasNext()) break;
                String op = sc.next();
                if (op.equals("POST_TEXT")) ts.postTweet(sc.nextInt(), sc.nextInt(), sc.next());
                else if (op.equals("GET_TRENDING")) {
                    List<String> trending = ts.getTrendingHashtags(sc.nextInt());
                    if (trending.isEmpty()) out.add("#");
                    else {
                        out.add(String.join(",", trending));
                    }
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    "c": `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
struct TagCount { char name[50]; int count; };
struct TagCount tags[5000]; int tagsCount = 0;
void registerTag(char* name) {
    for (int i = 0; i < tagsCount; i++) {
        if (strcmp(tags[i].name, name) == 0) { tags[i].count++; return; }
    }
    strcpy(tags[tagsCount].name, name); tags[tagsCount].count = 1; tagsCount++;
}
void postTweet(int userId, int tweetId, char* text) {
    for (int i = 0; text[i]; i++) { if (text[i] == '_') text[i] = ' '; }
    char* tok = strtok(text, " ");
    while (tok != NULL) {
        if (tok[0] == '#' && strlen(tok) > 1) { registerTag(tok); }
        tok = strtok(NULL, " ");
    }
}
int compareTags(const void* a, const void* b) {
    struct TagCount* ta = (struct TagCount*)a;
    struct TagCount* tb = (struct TagCount*)b;
    if (ta->count != tb->count) return tb->count - ta->count;
    return strcmp(ta->name, tb->name);
}
int getTrendingHashtags(int n, char** out) {
    qsort(tags, tagsCount, sizeof(struct TagCount), compareTags);
    int count = 0;
    for (int i = 0; i < n && i < tagsCount; i++) {
        out[count++] = strdup(tags[i].name);
    }
    return count;
}
int main() {
    int q; if (scanf("%d", &q) != 1) return 0;
    char** out = malloc(q * sizeof(char*)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[20]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "POST_TEXT") == 0) {
            int u, t; char text[200];
            if (scanf("%d %d %s", &u, &t, text) != 3) break;
            postTweet(u, t, text);
        } else if (strcmp(op, "GET_TRENDING") == 0) {
            int n; if (scanf("%d", &n) != 1) break;
            char* trend[100]; int count = getTrendingHashtags(n, trend);
            char* buf = malloc(2000 * sizeof(char));
            if (count == 0) strcpy(buf, "#");
            else {
                buf[0] = '\\0';
                for (int j = 0; j < count; j++) {
                    strcat(buf, trend[j]);
                    if (j + 1 < count) strcat(buf, ",");
                    free(trend[j]);
                }
            }
            out[outCount++] = buf;
        }
    }
    for (int i = 0; i < outCount; i++) { printf("%s%s", out[i], (i + 1 < outCount ? " " : "")); free(out[i]); }
    printf("\\n"); free(out); return 0;
}`
  },
  "twt-m5": {
    "python": `class Twitter:
    def __init__(self):
        self.tweets = []
        self.mentions = {}
    def postTweet(self, userId: int, tweetId: int, text: str) -> None:
        self.tweets.append(tweetId)
        import re
        tokens = re.split(r'[\\s_]+', text)
        for token in tokens:
            if token.startswith('@') and len(token) > 1:
                try:
                    target_user = int(token[1:])
                    self.mentions.setdefault(target_user, []).append(tweetId)
                except ValueError:
                    pass
    def getMentionsFeed(self, userId: int) -> list:
        res = self.mentions.get(userId, [])
        return list(reversed(res))

ts = Twitter()
out = []
import sys
lines = sys.stdin.read().splitlines()
if lines:
    try: q = int(lines[0].strip())
    except: sys.exit(0)
    for i in range(1, q + 1):
        if i >= len(lines): break
        parts = lines[i].strip().split()
        if not parts: continue
        op = parts[0]
        if op == "POST_TEXT": ts.postTweet(int(parts[1]), int(parts[2]), parts[3])
        elif op == "GET_MENTIONS":
            feed = ts.getMentionsFeed(int(parts[1]))
            out.append(",".join(map(str, feed)) if feed else "#")
    print(" ".join(out))`,
    "cpp": `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <sstream>
#include <algorithm>
using namespace std;
class Twitter {
    unordered_map<int, vector<int>> mentions;
public:
    Twitter() {}
    void postTweet(int userId, int tweetId, string text) {
        for (char& c : text) { if (c == '_') c = ' '; }
        stringstream ss(text);
        string token;
        while (ss >> token) {
            if (token.size() > 1 && token[0] == '@') {
                try {
                    int target = stoi(token.substr(1));
                    mentions[target].push_back(tweetId);
                } catch (...) {}
            }
        }
    }
    vector<int> getMentionsFeed(int userId) {
        if (!mentions.count(userId)) return {};
        vector<int> res = mentions[userId];
        reverse(res.begin(), res.end());
        return res;
    }
};
int main() {
    Twitter ts;
    int q;
    if (cin >> q) {
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; if (!(cin >> op)) break;
            if (op == "POST_TEXT") { int u, t; string s; cin >> u >> t >> s; ts.postTweet(u, t, s); }
            else if (op == "GET_MENTIONS") {
                int u; cin >> u; vector<int> feed = ts.getMentionsFeed(u);
                if (feed.empty()) out.push_back("#");
                else {
                    string s = "";
                    for (size_t j = 0; j < feed.size(); j++) s += to_string(feed[j]) + (j + 1 < feed.size() ? "," : "");
                    out.push_back(s);
                }
            }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    "java": `import java.util.*;
class Twitter {
    private Map<Integer, List<Integer>> mentions = new HashMap<>();
    public Twitter() {}
    public void postTweet(int userId, int tweetId, String text) {
        String[] tokens = text.split("[\\\\s_]+");
        for (String t : tokens) {
            if (t.startsWith("@") && t.length() > 1) {
                try {
                    int target = Integer.parseInt(t.substring(1));
                    mentions.computeIfAbsent(target, k -> new ArrayList<>()).add(tweetId);
                } catch (NumberFormatException ignored) {}
            }
        }
    }
    public List<Integer> getMentionsFeed(int userId) {
        List<Integer> list = mentions.getOrDefault(userId, new ArrayList<>());
        List<Integer> copy = new ArrayList<>(list);
        Collections.reverse(copy);
        return copy;
    }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            Twitter ts = new Twitter();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                if (!sc.hasNext()) break;
                String op = sc.next();
                if (op.equals("POST_TEXT")) ts.postTweet(sc.nextInt(), sc.nextInt(), sc.next());
                else if (op.equals("GET_MENTIONS")) {
                    List<Integer> feed = ts.getMentionsFeed(sc.nextInt());
                    if (feed.isEmpty()) out.add("#");
                    else {
                        StringBuilder sb = new StringBuilder();
                        for (int j = 0; j < feed.size(); j++) sb.append(feed.get(j)).append(j + 1 < feed.size() ? "," : "");
                        out.add(sb.toString());
                    }
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    "c": `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_MENTIONS 10005
struct Mention { int target; int tweetId; };
struct Mention mentions[MAX_MENTIONS]; int mentionsCount = 0;
void postTweet(int userId, int tweetId, char* text) {
    for (int i = 0; text[i]; i++) { if (text[i] == '_') text[i] = ' '; }
    char* tok = strtok(text, " ");
    while (tok != NULL) {
        if (tok[0] == '@' && strlen(tok) > 1) {
            int target = atoi(tok + 1);
            if (target > 0) {
                mentions[mentionsCount].target = target;
                mentions[mentionsCount].tweetId = tweetId;
                mentionsCount++;
            }
        }
        tok = strtok(NULL, " ");
    }
}
int getMentionsFeed(int userId, int* out) {
    int count = 0;
    for (int i = mentionsCount - 1; i >= 0; i--) {
        if (mentions[i].target == userId) {
            out[count++] = mentions[i].tweetId;
        }
    }
    return count;
}
int main() {
    int q; if (scanf("%d", &q) != 1) return 0;
    char** out = malloc(q * sizeof(char*)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[20]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "POST_TEXT") == 0) {
            int u, t; char text[200];
            if (scanf("%d %d %s", &u, &t, text) != 3) break;
            postTweet(u, t, text);
        } else if (strcmp(op, "GET_MENTIONS") == 0) {
            int u; if (scanf("%d", &u) != 1) break;
            int feed[1000]; int count = getMentionsFeed(u, feed);
            char* buf = malloc(20000 * sizeof(char));
            if (count == 0) strcpy(buf, "#");
            else {
                buf[0] = '\\0';
                for (int j = 0; j < count; j++) {
                    char tmp[20]; sprintf(tmp, "%d%s", feed[j], (j + 1 < count ? "," : ""));
                    strcat(buf, tmp);
                }
            }
            out[outCount++] = buf;
        }
    }
    for (int i = 0; i < outCount; i++) { printf("%s%s", out[i], (i + 1 < outCount ? " " : "")); free(out[i]); }
    printf("\\n"); free(out); return 0;
}`
  },
  "twt-h1": {
    "python": `class Twitter:
    def __init__(self):
        self.tweets = []
        self.follows = {}
    def postTweet(self, userId: int, tweetId: int) -> None:
        self.tweets.append((tweetId, userId))
    def getMutualFriendsFeed(self, userId: int) -> list:
        feed = []
        count = 0
        followees = self.follows.get(userId, set())
        mutuals = {u for u in followees if userId in self.follows.get(u, set())}
        for tweetId, authorId in reversed(self.tweets):
            if authorId in mutuals:
                feed.append(tweetId)
                count += 1
                if count == 10: break
        return feed
    def follow(self, followerId: int, followeeId: int) -> None:
        if followerId != followeeId:
            self.follows.setdefault(followerId, set()).add(followeeId)
    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followerId in self.follows and followeeId in self.follows[followerId]:
            self.follows[followerId].remove(followeeId)

ts = Twitter()
out = []
import sys
lines = sys.stdin.read().splitlines()
if lines:
    try: q = int(lines[0].strip())
    except: sys.exit(0)
    for i in range(1, q + 1):
        if i >= len(lines): break
        parts = lines[i].strip().split()
        if not parts: continue
        op = parts[0]
        if op == "POST": ts.postTweet(int(parts[1]), int(parts[2]))
        elif op == "FOLLOW": ts.follow(int(parts[1]), int(parts[2]))
        elif op == "UNFOLLOW": ts.unfollow(int(parts[1]), int(parts[2]))
        elif op == "GET_MUTUAL_FEED":
            feed = ts.getMutualFriendsFeed(int(parts[1]))
            out.append(",".join(map(str, feed)) if feed else "#")
    print(" ".join(out))`,
    "cpp": `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <unordered_set>
using namespace std;
class Twitter {
    struct Tweet { int id; int userId; };
    vector<Tweet> tweets;
    unordered_map<int, unordered_set<int>> follows;
public:
    Twitter() {}
    void postTweet(int userId, int tweetId) { tweets.push_back({tweetId, userId}); }
    vector<int> getMutualFriendsFeed(int userId) {
        vector<int> feed;
        int count = 0;
        for (int i = (int)tweets.size() - 1; i >= 0 && count < 10; i--) {
            int author = tweets[i].userId;
            if (follows[userId].count(author) && follows[author].count(userId)) {
                feed.push_back(tweets[i].id);
                count++;
            }
        }
        return feed;
    }
    void follow(int followerId, int followeeId) { if (followerId != followeeId) follows[followerId].insert(followeeId); }
    void unfollow(int followerId, int followeeId) { if (follows.count(followerId)) follows[followerId].erase(followeeId); }
};
int main() {
    Twitter ts;
    int q;
    if (cin >> q) {
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; if (!(cin >> op)) break;
            if (op == "POST") { int u, t; cin >> u >> t; ts.postTweet(u, t); }
            else if (op == "FOLLOW") { int u1, u2; cin >> u1 >> u2; ts.follow(u1, u2); }
            else if (op == "UNFOLLOW") { int u1, u2; cin >> u1 >> u2; ts.unfollow(u1, u2); }
            else if (op == "GET_MUTUAL_FEED") {
                int u; cin >> u; vector<int> feed = ts.getMutualFriendsFeed(u);
                if (feed.empty()) out.push_back("#");
                else {
                    string s = "";
                    for (size_t j = 0; j < feed.size(); j++) s += to_string(feed[j]) + (j + 1 < feed.size() ? "," : "");
                    out.push_back(s);
                }
            }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    "java": `import java.util.*;
class Twitter {
    private List<int[]> tweets = new ArrayList<>();
    private Map<Integer, Set<Integer>> follows = new HashMap<>();
    public Twitter() {}
    public void postTweet(int userId, int tweetId) { tweets.add(new int[]{tweetId, userId}); }
    public List<Integer> getMutualFriendsFeed(int userId) {
        List<Integer> feed = new ArrayList<>();
        Set<Integer> myFollows = follows.getOrDefault(userId, new HashSet<>());
        int count = 0;
        for (int i = tweets.size() - 1; i >= 0 && count < 10; i--) {
            int[] t = tweets.get(i);
            int author = t[1];
            if (myFollows.contains(author) && follows.getOrDefault(author, new HashSet<>()).contains(userId)) {
                feed.add(t[0]);
                count++;
            }
        }
        return feed;
    }
    public void follow(int followerId, int followeeId) {
        if (followerId != followeeId) follows.computeIfAbsent(followerId, k -> new HashSet<>()).add(followeeId);
    }
    public void unfollow(int followerId, int followeeId) {
        if (follows.containsKey(followerId)) follows.get(followerId).remove(followeeId);
    }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            Twitter ts = new Twitter();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                if (!sc.hasNext()) break;
                String op = sc.next();
                if (op.equals("POST")) ts.postTweet(sc.nextInt(), sc.nextInt());
                else if (op.equals("FOLLOW")) ts.follow(sc.nextInt(), sc.nextInt());
                else if (op.equals("UNFOLLOW")) ts.unfollow(sc.nextInt(), sc.nextInt());
                else if (op.equals("GET_MUTUAL_FEED")) {
                    List<Integer> feed = ts.getMutualFriendsFeed(sc.nextInt());
                    if (feed.isEmpty()) out.add("#");
                    else {
                        StringBuilder sb = new StringBuilder();
                        for (int j = 0; j < feed.size(); j++) sb.append(feed.get(j)).append(j + 1 < feed.size() ? "," : "");
                        out.add(sb.toString());
                    }
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    "c": `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_TWEETS 10005
#define MAX_FOLLOWS 10005
struct Tweet { int id; int userId; };
struct Follow { int follower; int followee; };
struct Tweet tweets[MAX_TWEETS]; int tweetsCount = 0;
struct Follow follows[MAX_FOLLOWS]; int followsCount = 0;
int isFollowing(int follower, int followee) {
    for (int i = 0; i < followsCount; i++) if (follows[i].follower == follower && follows[i].followee == followee) return 1;
    return 0;
}
void postTweet(int userId, int tweetId) {
    tweets[tweetsCount].id = tweetId; tweets[tweetsCount].userId = userId; tweetsCount++;
}
int getMutualFriendsFeed(int userId, int* out) {
    int count = 0;
    for (int i = tweetsCount - 1; i >= 0 && count < 10; i--) {
        int author = tweets[i].userId;
        if (isFollowing(userId, author) && isFollowing(author, userId)) {
            out[count++] = tweets[i].id;
        }
    }
    return count;
}
void follow(int followerId, int followeeId) {
    if (followerId == followeeId) return;
    if (isFollowing(followerId, followeeId)) return;
    follows[followsCount].follower = followerId; follows[followsCount].followee = followeeId; followsCount++;
}
void unfollow(int followerId, int followeeId) {
    for (int i = 0; i < followsCount; i++) {
        if (follows[i].follower == followerId && follows[i].followee == followeeId) {
            follows[i] = follows[followsCount - 1]; followsCount--; return;
        }
    }
}
int main() {
    int q; if (scanf("%d", &q) != 1) return 0;
    char** out = malloc(q * sizeof(char*)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[20]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "POST") == 0) { int u, t; if (scanf("%d %d", &u, &t) != 2) break; postTweet(u, t); }
        else if (strcmp(op, "FOLLOW") == 0) { int u1, u2; if (scanf("%d %d", &u1, &u2) != 2) break; follow(u1, u2); }
        else if (strcmp(op, "UNFOLLOW") == 0) { int u1, u2; if (scanf("%d %d", &u1, &u2) != 2) break; unfollow(u1, u2); }
        else if (strcmp(op, "GET_MUTUAL_FEED") == 0) {
            int u; if (scanf("%d", &u) != 1) break;
            int feed[100]; int count = getMutualFriendsFeed(u, feed);
            char* buf = malloc(2000 * sizeof(char));
            if (count == 0) strcpy(buf, "#");
            else {
                buf[0] = '\\0';
                for (int j = 0; j < count; j++) {
                    char tmp[20]; sprintf(tmp, "%d%s", feed[j], (j + 1 < count ? "," : ""));
                    strcat(buf, tmp);
                }
            }
            out[outCount++] = buf;
        }
    }
    for (int i = 0; i < outCount; i++) { printf("%s%s", out[i], (i + 1 < outCount ? " " : "")); free(out[i]); }
    printf("\\n"); free(out); return 0;
}`
  },
  "twt-h2": {
    "python": `class Twitter:
    def __init__(self):
        self.tweets = []
        self.follows = {}
    def postTweet(self, userId: int, tweetId: int) -> None:
        self.tweets.append((tweetId, userId))
    def getRecommendedFeed(self, userId: int) -> list:
        my_follows = self.follows.get(userId, set())
        candidates = {}
        for author in {aid for _, aid in self.tweets}:
            if author == userId or author in my_follows:
                continue
            mutual_count = 0
            for f in my_follows:
                if author in self.follows.get(f, set()):
                    mutual_count += 1
            if mutual_count > 0:
                max_tid = -1
                for tid, aid in self.tweets:
                    if aid == author:
                        max_tid = max(max_tid, tid)
                candidates[author] = (mutual_count, max_tid)
        candidate_tweets = []
        for tid, aid in self.tweets:
            if aid in candidates:
                mutual_count, max_tid = candidates[aid]
                candidate_tweets.append((mutual_count, max_tid, tid))
        candidate_tweets.sort(key=lambda x: (-x[0], -x[1], -x[2]))
        return [x[2] for x in candidate_tweets[:10]]
    def follow(self, followerId: int, followeeId: int) -> None:
        if followerId != followeeId:
            self.follows.setdefault(followerId, set()).add(followeeId)
    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followerId in self.follows and followeeId in self.follows[followerId]:
            self.follows[followerId].remove(followeeId)

ts = Twitter()
out = []
import sys
lines = sys.stdin.read().splitlines()
if lines:
    try: q = int(lines[0].strip())
    except: sys.exit(0)
    for i in range(1, q + 1):
        if i >= len(lines): break
        parts = lines[i].strip().split()
        if not parts: continue
        op = parts[0]
        if op == "POST": ts.postTweet(int(parts[1]), int(parts[2]))
        elif op == "FOLLOW": ts.follow(int(parts[1]), int(parts[2]))
        elif op == "UNFOLLOW": ts.unfollow(int(parts[1]), int(parts[2]))
        elif op == "GET_REC_FEED":
            feed = ts.getRecommendedFeed(int(parts[1]))
            out.append(",".join(map(str, feed)) if feed else "#")
    print(" ".join(out))`,
    "cpp": `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <algorithm>
using namespace std;
class Twitter {
    struct Tweet { int id; int userId; };
    vector<Tweet> tweets;
    unordered_map<int, unordered_set<int>> follows;
public:
    Twitter() {}
    void postTweet(int userId, int tweetId) { tweets.push_back({tweetId, userId}); }
    vector<int> getRecommendedFeed(int userId) {
        unordered_set<int>& myFollows = follows[userId];
        unordered_map<int, pair<int, int>> candidates;
        unordered_set<int> authors;
        for (const auto& t : tweets) authors.insert(t.userId);
        for (int author : authors) {
            if (author == userId || myFollows.count(author)) continue;
            int mutualCount = 0;
            for (int f : myFollows) {
                if (follows[f].count(author)) mutualCount++;
            }
            if (mutualCount > 0) {
                int maxTid = -1;
                for (const auto& t : tweets) {
                    if (t.userId == author) maxTid = max(maxTid, t.id);
                }
                candidates[author] = {mutualCount, maxTid};
            }
        }
        struct CandidateTweet { int tid; int mutualCount; int maxTid; };
        vector<CandidateTweet> list;
        for (const auto& t : tweets) {
            if (candidates.count(t.userId)) {
                list.push_back({t.id, candidates[t.userId].first, candidates[t.userId].second});
            }
        }
        sort(list.begin(), list.end(), [](const CandidateTweet& a, const CandidateTweet& b) {
            if (a.mutualCount != b.mutualCount) return a.mutualCount > b.mutualCount;
            if (a.maxTid != b.maxTid) return a.maxTid > b.maxTid;
            return a.tid > b.tid;
        });
        vector<int> res;
        for (int i = 0; i < 10 && i < (int)list.size(); i++) res.push_back(list[i].tid);
        return res;
    }
    void follow(int followerId, int followeeId) { if (followerId != followeeId) follows[followerId].insert(followeeId); }
    void unfollow(int followerId, int followeeId) { if (follows.count(followerId)) follows[followerId].erase(followeeId); }
};
int main() {
    Twitter ts;
    int q;
    if (cin >> q) {
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; if (!(cin >> op)) break;
            if (op == "POST") { int u, t; cin >> u >> t; ts.postTweet(u, t); }
            else if (op == "FOLLOW") { int u1, u2; cin >> u1 >> u2; ts.follow(u1, u2); }
            else if (op == "UNFOLLOW") { int u1, u2; cin >> u1 >> u2; ts.unfollow(u1, u2); }
            else if (op == "GET_REC_FEED") {
                int u; cin >> u; vector<int> feed = ts.getRecommendedFeed(u);
                if (feed.empty()) out.push_back("#");
                else {
                    string s = "";
                    for (size_t j = 0; j < feed.size(); j++) s += to_string(feed[j]) + (j + 1 < feed.size() ? "," : "");
                    out.push_back(s);
                }
            }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    "java": `import java.util.*;
class Twitter {
    private List<int[]> tweets = new ArrayList<>();
    private Map<Integer, Set<Integer>> follows = new HashMap<>();
    public Twitter() {}
    public void postTweet(int userId, int tweetId) { tweets.add(new int[]{tweetId, userId}); }
    public List<Integer> getRecommendedFeed(int userId) {
        Set<Integer> myFollows = follows.getOrDefault(userId, new HashSet<>());
        Map<Integer, int[]> candidates = new HashMap<>();
        Set<Integer> authors = new HashSet<>();
        for (int[] t : tweets) authors.add(t[1]);
        for (int author : authors) {
            if (author == userId || myFollows.contains(author)) continue;
            int mutualCount = 0;
            for (int f : myFollows) {
                if (follows.getOrDefault(f, new HashSet<>()).contains(author)) {
                    mutualCount++;
                }
            }
            if (mutualCount > 0) {
                int maxTid = -1;
                for (int[] t : tweets) {
                    if (t[1] == author) maxTid = Math.max(maxTid, t[0]);
                }
                candidates.put(author, new int[]{mutualCount, maxTid});
            }
        }
        List<int[]> list = new ArrayList<>();
        for (int[] t : tweets) {
            if (candidates.containsKey(t[1])) {
                int[] info = candidates.get(t[1]);
                list.add(new int[]{t[0], info[0], info[1]});
            }
        }
        list.sort((a, b) -> {
            if (a[1] != b[1]) return b[1] - a[1];
            if (a[2] != b[2]) return b[2] - a[2];
            return b[0] - a[0];
        });
        List<Integer> res = new ArrayList<>();
        for (int i = 0; i < 10 && i < list.size(); i++) res.add(list.get(i)[0]);
        return res;
    }
    public void follow(int followerId, int followeeId) {
        if (followerId != followeeId) follows.computeIfAbsent(followerId, k -> new HashSet<>()).add(followeeId);
    }
    public void unfollow(int followerId, int followeeId) {
        if (follows.containsKey(followerId)) follows.get(followerId).remove(followeeId);
    }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            Twitter ts = new Twitter();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                if (!sc.hasNext()) break;
                String op = sc.next();
                if (op.equals("POST")) ts.postTweet(sc.nextInt(), sc.nextInt());
                else if (op.equals("FOLLOW")) ts.follow(sc.nextInt(), sc.nextInt());
                else if (op.equals("UNFOLLOW")) ts.unfollow(sc.nextInt(), sc.nextInt());
                else if (op.equals("GET_REC_FEED")) {
                    List<Integer> feed = ts.getRecommendedFeed(sc.nextInt());
                    if (feed.isEmpty()) out.add("#");
                    else {
                        StringBuilder sb = new StringBuilder();
                        for (int j = 0; j < feed.size(); j++) sb.append(feed.get(j)).append(j + 1 < feed.size() ? "," : "");
                        out.add(sb.toString());
                    }
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    "c": `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_TWEETS 10005
#define MAX_FOLLOWS 10005
struct Tweet { int id; int userId; };
struct Follow { int follower; int followee; };
struct Tweet tweets[MAX_TWEETS]; int tweetsCount = 0;
struct Follow follows[MAX_FOLLOWS]; int followsCount = 0;
int isFollowing(int follower, int followee) {
    for (int i = 0; i < followsCount; i++) if (follows[i].follower == follower && follows[i].followee == followee) return 1;
    return 0;
}
void postTweet(int userId, int tweetId) {
    tweets[tweetsCount].id = tweetId; tweets[tweetsCount].userId = userId; tweetsCount++;
}
void follow(int followerId, int followeeId) {
    if (followerId == followeeId) return;
    if (isFollowing(followerId, followeeId)) return;
    follows[followsCount].follower = followerId; follows[followsCount].followee = followeeId; followsCount++;
}
void unfollow(int followerId, int followeeId) {
    for (int i = 0; i < followsCount; i++) {
        if (follows[i].follower == followerId && follows[i].followee == followeeId) {
            follows[i] = follows[followsCount - 1]; followsCount--; return;
        }
    }
}
struct Cand { int author; int mutualCount; int maxTid; };
int compareCandTweets(const void* a, const void* b) {
    int* ta = (int*)a;
    int* tb = (int*)b;
    // Format: [tid, mutualCount, maxTid]
    if (ta[1] != tb[1]) return tb[1] - ta[1];
    if (ta[2] != tb[2]) return tb[2] - ta[2];
    return tb[0] - ta[0];
}
int getRecommendedFeed(int userId, int* out) {
    int users[2000]; int usersCount = 0;
    for (int i = 0; i < followsCount; i++) {
        int u1 = follows[i].follower;
        int u2 = follows[i].followee;
        int found1 = 0, found2 = 0;
        for (int j = 0; j < usersCount; j++) {
            if (users[j] == u1) found1 = 1;
            if (users[j] == u2) found2 = 1;
        }
        if (!found1) users[usersCount++] = u1;
        if (!found2) users[usersCount++] = u2;
    }
    for (int i = 0; i < tweetsCount; i++) {
        int u = tweets[i].userId;
        int found = 0;
        for (int j = 0; j < usersCount; j++) {
            if (users[j] == u) { found = 1; break; }
        }
        if (!found) users[usersCount++] = u;
    }
    struct Cand cands[1000]; int candsCount = 0;
    for (int i = 0; i < usersCount; i++) {
        int author = users[i];
        if (author == userId || isFollowing(userId, author)) continue;
        int mutualCount = 0;
        for (int j = 0; j < followsCount; j++) {
            if (follows[j].follower == userId) {
                int f = follows[j].followee;
                if (isFollowing(f, author)) mutualCount++;
            }
        }
        if (mutualCount > 0) {
            int maxTid = -1;
            for (int k = 0; k < tweetsCount; k++) {
                if (tweets[k].userId == author && tweets[k].id > maxTid) {
                    maxTid = tweets[k].id;
                }
            }
            cands[candsCount].author = author;
            cands[candsCount].mutualCount = mutualCount;
            cands[candsCount].maxTid = maxTid;
            candsCount++;
        }
    }
    int list[MAX_TWEETS][3]; int listCount = 0;
    for (int i = 0; i < tweetsCount; i++) {
        int aid = tweets[i].userId;
        int idx = -1;
        for (int j = 0; j < candsCount; j++) {
            if (cands[j].author == aid) { idx = j; break; }
        }
        if (idx != -1) {
            list[listCount][0] = tweets[i].id;
            list[listCount][1] = cands[idx].mutualCount;
            list[listCount][2] = cands[idx].maxTid;
            listCount++;
        }
    }
    qsort(list, listCount, sizeof(list[0]), compareCandTweets);
    int count = 0;
    for (int i = 0; i < 10 && i < listCount; i++) {
        out[count++] = list[i][0];
    }
    return count;
}
int main() {
    int q; if (scanf("%d", &q) != 1) return 0;
    char** out = malloc(q * sizeof(char*)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[20]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "POST") == 0) { int u, t; if (scanf("%d %d", &u, &t) != 2) break; postTweet(u, t); }
        else if (strcmp(op, "FOLLOW") == 0) { int u1, u2; if (scanf("%d %d", &u1, &u2) != 2) break; follow(u1, u2); }
        else if (strcmp(op, "UNFOLLOW") == 0) { int u1, u2; if (scanf("%d %d", &u1, &u2) != 2) break; unfollow(u1, u2); }
        else if (strcmp(op, "GET_REC_FEED") == 0) {
            int u; if (scanf("%d", &u) != 1) break;
            int feed[100]; int count = getRecommendedFeed(u, feed);
            char* buf = malloc(2000 * sizeof(char));
            if (count == 0) strcpy(buf, "#");
            else {
                buf[0] = '\\0';
                for (int j = 0; j < count; j++) {
                    char tmp[20]; sprintf(tmp, "%d%s", feed[j], (j + 1 < count ? "," : ""));
                    strcat(buf, tmp);
                }
            }
            out[outCount++] = buf;
        }
    }
    for (int i = 0; i < outCount; i++) { printf("%s%s", out[i], (i + 1 < outCount ? " " : "")); free(out[i]); }
    printf("\\n"); free(out); return 0;
}`
  },
  "twt-h3": {
    "python": `class Twitter:
    def __init__(self):
        self.group_tweets = {}
        self.group_follows = {}
    def postTweetToGroup(self, userId: int, tweetId: int, groupTag: str) -> None:
        self.group_tweets.setdefault(groupTag, []).append(tweetId)
    def getGroupFeed(self, userId: int, groupTag: str) -> list:
        if groupTag not in self.group_follows.get(userId, set()):
            return []
        res = self.group_tweets.get(groupTag, [])
        return list(reversed(res))[:10]
    def followGroup(self, followerId: int, groupTag: str) -> None:
        self.group_follows.setdefault(followerId, set()).add(groupTag)
    def unfollowGroup(self, followerId: int, groupTag: str) -> None:
        if followerId in self.group_follows and groupTag in self.group_follows[followerId]:
            self.group_follows[followerId].remove(groupTag)

ts = Twitter()
out = []
import sys
lines = sys.stdin.read().splitlines()
if lines:
    try: q = int(lines[0].strip())
    except: sys.exit(0)
    for i in range(1, q + 1):
        if i >= len(lines): break
        parts = lines[i].strip().split()
        if not parts: continue
        op = parts[0]
        if op == "POST_GROUP": ts.postTweetToGroup(int(parts[1]), int(parts[2]), parts[3])
        elif op == "FOLLOW_GROUP": ts.followGroup(int(parts[1]), parts[2])
        elif op == "UNFOLLOW_GROUP": ts.unfollowGroup(int(parts[1]), parts[2])
        elif op == "GET_GROUP_FEED":
            feed = ts.getGroupFeed(int(parts[1]), parts[2])
            out.append(",".join(map(str, feed)) if feed else "#")
    print(" ".join(out))`,
    "cpp": `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <unordered_set>
#include <algorithm>
using namespace std;
class Twitter {
    unordered_map<string, vector<int>> groupTweets;
    unordered_map<int, unordered_set<string>> groupFollows;
public:
    Twitter() {}
    void postTweetToGroup(int userId, int tweetId, string groupTag) {
        groupTweets[groupTag].push_back(tweetId);
    }
    vector<int> getGroupFeed(int userId, string groupTag) {
        if (!groupFollows[userId].count(groupTag)) return {};
        vector<int> res = groupTweets[groupTag];
        reverse(res.begin(), res.end());
        if (res.size() > 10) res.resize(10);
        return res;
    }
    void followGroup(int followerId, string groupTag) { groupFollows[followerId].insert(groupTag); }
    void unfollowGroup(int followerId, string groupTag) { groupFollows[followerId].erase(groupTag); }
};
int main() {
    Twitter ts;
    int q;
    if (cin >> q) {
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; if (!(cin >> op)) break;
            if (op == "POST_GROUP") { int u, t; string g; cin >> u >> t >> g; ts.postTweetToGroup(u, t, g); }
            else if (op == "FOLLOW_GROUP") { int u; string g; cin >> u >> g; ts.followGroup(u, g); }
            else if (op == "UNFOLLOW_GROUP") { int u; string g; cin >> u >> g; ts.unfollowGroup(u, g); }
            else if (op == "GET_GROUP_FEED") {
                int u; string g; cin >> u >> g; vector<int> feed = ts.getGroupFeed(u, g);
                if (feed.empty()) out.push_back("#");
                else {
                    string s = "";
                    for (size_t j = 0; j < feed.size(); j++) s += to_string(feed[j]) + (j + 1 < feed.size() ? "," : "");
                    out.push_back(s);
                }
            }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    "java": `import java.util.*;
class Twitter {
    private Map<String, List<Integer>> groupTweets = new HashMap<>();
    private Map<Integer, Set<String>> groupFollows = new HashMap<>();
    public Twitter() {}
    public void postTweetToGroup(int userId, int tweetId, String groupTag) {
        groupTweets.computeIfAbsent(groupTag, k -> new ArrayList<>()).add(tweetId);
    }
    public List<Integer> getGroupFeed(int userId, String groupTag) {
        if (!groupFollows.getOrDefault(userId, new HashSet<>()).contains(groupTag)) return new ArrayList<>();
        List<Integer> list = groupTweets.getOrDefault(groupTag, new ArrayList<>());
        List<Integer> copy = new ArrayList<>(list);
        Collections.reverse(copy);
        if (copy.size() > 10) return copy.subList(0, 10);
        return copy;
    }
    public void followGroup(int followerId, String groupTag) {
        groupFollows.computeIfAbsent(followerId, k -> new HashSet<>()).add(groupTag);
    }
    public void unfollowGroup(int followerId, String groupTag) {
        if (groupFollows.containsKey(followerId)) groupFollows.get(followerId).remove(groupTag);
    }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            Twitter ts = new Twitter();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                if (!sc.hasNext()) break;
                String op = sc.next();
                if (op.equals("POST_GROUP")) ts.postTweetToGroup(sc.nextInt(), sc.nextInt(), sc.next());
                else if (op.equals("FOLLOW_GROUP")) ts.followGroup(sc.nextInt(), sc.next());
                else if (op.equals("UNFOLLOW_GROUP")) ts.unfollowGroup(sc.nextInt(), sc.next());
                else if (op.equals("GET_GROUP_FEED")) {
                    List<Integer> feed = ts.getGroupFeed(sc.nextInt(), sc.next());
                    if (feed.isEmpty()) out.add("#");
                    else {
                        StringBuilder sb = new StringBuilder();
                        for (int j = 0; j < feed.size(); j++) sb.append(feed.get(j)).append(j + 1 < feed.size() ? "," : "");
                        out.add(sb.toString());
                    }
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    "c": `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_GT 10005
#define MAX_GF 10005
struct GroupTweet { char groupTag[50]; int tweetId; };
struct GroupFollow { int follower; char groupTag[50]; };
struct GroupTweet gt[MAX_GT]; int gtCount = 0;
struct GroupFollow gf[MAX_GF]; int gfCount = 0;
int isFollowingGroup(int userId, char* groupTag) {
    for (int i = 0; i < gfCount; i++) {
        if (gf[i].follower == userId && strcmp(gf[i].groupTag, groupTag) == 0) return 1;
    }
    return 0;
}
void postTweetToGroup(int userId, int tweetId, char* groupTag) {
    strcpy(gt[gtCount].groupTag, groupTag); gt[gtCount].tweetId = tweetId; gtCount++;
}
void followGroup(int followerId, char* groupTag) {
    if (isFollowingGroup(followerId, groupTag)) return;
    gf[gfCount].follower = followerId; strcpy(gf[gfCount].groupTag, groupTag); gfCount++;
}
void unfollowGroup(int followerId, char* groupTag) {
    for (int i = 0; i < gfCount; i++) {
        if (gf[i].follower == followerId && strcmp(gf[i].groupTag, groupTag) == 0) {
            gf[i] = gf[gfCount - 1]; gfCount--; return;
        }
    }
}
int getGroupFeed(int userId, char* groupTag, int* out) {
    if (!isFollowingGroup(userId, groupTag)) return -1;
    int count = 0;
    for (int i = gtCount - 1; i >= 0 && count < 10; i--) {
        if (strcmp(gt[i].groupTag, groupTag) == 0) {
            out[count++] = gt[i].tweetId;
        }
    }
    return count;
}
int main() {
    int q; if (scanf("%d", &q) != 1) return 0;
    char** out = malloc(q * sizeof(char*)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[20]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "POST_GROUP") == 0) {
            int u, t; char g[50]; if (scanf("%d %d %s", &u, &t, g) != 3) break;
            postTweetToGroup(u, t, g);
        } else if (strcmp(op, "FOLLOW_GROUP") == 0) {
            int u; char g[50]; if (scanf("%d %s", &u, g) != 2) break;
            followGroup(u, g);
        } else if (strcmp(op, "UNFOLLOW_GROUP") == 0) {
            int u; char g[50]; if (scanf("%d %s", &u, g) != 2) break;
            unfollowGroup(u, g);
        } else if (strcmp(op, "GET_GROUP_FEED") == 0) {
            int u; char g[50]; if (scanf("%d %s", &u, g) != 2) break;
            int feed[100]; int count = getGroupFeed(u, g, feed);
            char* buf = malloc(2000 * sizeof(char));
            if (count <= 0) strcpy(buf, "#");
            else {
                buf[0] = '\\0';
                for (int j = 0; j < count; j++) {
                    char tmp[20]; sprintf(tmp, "%d%s", feed[j], (j + 1 < count ? "," : ""));
                    strcat(buf, tmp);
                }
            }
            out[outCount++] = buf;
        }
    }
    for (int i = 0; i < outCount; i++) { printf("%s%s", out[i], (i + 1 < outCount ? " " : "")); free(out[i]); }
    printf("\\n"); free(out); return 0;
}`
  },
  "twt-h4": {
    "python": `class Twitter:
    def __init__(self):
        self.tweets = []
        self.follows = {}
        self.in_transaction = False
        self.staged_tweets = []
        self.staged_follows = []
    def postTweet(self, userId: int, tweetId: int) -> None:
        if self.in_transaction:
            self.staged_tweets.append((tweetId, userId))
        else:
            self.tweets.append((tweetId, userId))
    def getNewsFeed(self, userId: int) -> list:
        feed = []
        count = 0
        followees = self.follows.get(userId, set())
        for tweetId, authorId in reversed(self.tweets):
            if authorId == userId or authorId in followees:
                feed.append(tweetId)
                count += 1
                if count == 10: break
        return feed
    def follow(self, followerId: int, followeeId: int) -> None:
        if followerId == followeeId: return
        if self.in_transaction:
            self.staged_follows.append((followerId, followeeId, "follow"))
        else:
            self.follows.setdefault(followerId, set()).add(followeeId)
    def unfollow(self, followerId: int, followeeId: int) -> None:
        if self.in_transaction:
            self.staged_follows.append((followerId, followeeId, "unfollow"))
        else:
            if followerId in self.follows and followeeId in self.follows[followerId]:
                self.follows[followerId].remove(followeeId)
    def beginTransaction(self) -> bool:
        if self.in_transaction: return False
        self.in_transaction = True
        self.staged_tweets = []
        self.staged_follows = []
        return True
    def commit(self) -> bool:
        if not self.in_transaction: return False
        self.in_transaction = False
        for t in self.staged_tweets:
            self.tweets.append(t)
        for f, fe, act in self.staged_follows:
            if act == "follow":
                self.follows.setdefault(f, set()).add(fe)
            else:
                if f in self.follows and fe in self.follows[f]:
                    self.follows[f].remove(fe)
        self.staged_tweets = []
        self.staged_follows = []
        return True
    def rollback(self) -> bool:
        if not self.in_transaction: return False
        self.in_transaction = False
        self.staged_tweets = []
        self.staged_follows = []
        return True

ts = Twitter()
out = []
import sys
lines = sys.stdin.read().splitlines()
if lines:
    try: q = int(lines[0].strip())
    except: sys.exit(0)
    for i in range(1, q + 1):
        if i >= len(lines): break
        parts = lines[i].strip().split()
        if not parts: continue
        op = parts[0]
        if op == "POST": ts.postTweet(int(parts[1]), int(parts[2]))
        elif op == "FOLLOW": ts.follow(int(parts[1]), int(parts[2]))
        elif op == "UNFOLLOW": ts.unfollow(int(parts[1]), int(parts[2]))
        elif op == "BEGIN": out.append("true" if ts.beginTransaction() else "false")
        elif op == "COMMIT": out.append("true" if ts.commit() else "false")
        elif op == "ROLLBACK": out.append("true" if ts.rollback() else "false")
        elif op == "GET_FEED":
            feed = ts.getNewsFeed(int(parts[1]))
            out.append(",".join(map(str, feed)) if feed else "#")
    print(" ".join(out))`,
    "cpp": `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <unordered_set>
using namespace std;
class Twitter {
    struct Tweet { int id; int userId; };
    vector<Tweet> tweets;
    unordered_map<int, unordered_set<int>> follows;
    bool inTx = false;
    struct StagedFollow { int f, fe; string act; };
    vector<Tweet> stagedTweets;
    vector<StagedFollow> stagedFollows;
public:
    Twitter() {}
    void postTweet(int userId, int tweetId) {
        if (inTx) stagedTweets.push_back({tweetId, userId});
        else tweets.push_back({tweetId, userId});
    }
    vector<int> getNewsFeed(int userId) {
        vector<int> feed;
        int count = 0;
        for (int i = (int)tweets.size() - 1; i >= 0 && count < 10; i--) {
            int author = tweets[i].userId;
            if (author == userId || (follows.count(userId) && follows[userId].count(author))) {
                feed.push_back(tweets[i].id);
                count++;
            }
        }
        return feed;
    }
    void follow(int followerId, int followeeId) {
        if (followerId == followeeId) return;
        if (inTx) stagedFollows.push_back({followerId, followeeId, "follow"});
        else follows[followerId].insert(followeeId);
    }
    void unfollow(int followerId, int followeeId) {
        if (inTx) stagedFollows.push_back({followerId, followeeId, "unfollow"});
        else if (follows.count(followerId)) follows[followerId].erase(followeeId);
    }
    bool beginTransaction() {
        if (inTx) return false;
        inTx = true;
        stagedTweets.clear();
        stagedFollows.clear();
        return true;
    }
    bool commit() {
        if (!inTx) return false;
        inTx = false;
        for (const auto& t : stagedTweets) tweets.push_back(t);
        for (const auto& sf : stagedFollows) {
            if (sf.act == "follow") follows[sf.f].insert(sf.fe);
            else follows[sf.f].erase(sf.fe);
        }
        stagedTweets.clear();
        stagedFollows.clear();
        return true;
    }
    bool rollback() {
        if (!inTx) return false;
        inTx = false;
        stagedTweets.clear();
        stagedFollows.clear();
        return true;
    }
};
int main() {
    Twitter ts;
    int q;
    if (cin >> q) {
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; if (!(cin >> op)) break;
            if (op == "POST") { int u, t; cin >> u >> t; ts.postTweet(u, t); }
            else if (op == "FOLLOW") { int u1, u2; cin >> u1 >> u2; ts.follow(u1, u2); }
            else if (op == "UNFOLLOW") { int u1, u2; cin >> u1 >> u2; ts.unfollow(u1, u2); }
            else if (op == "BEGIN") out.push_back(ts.beginTransaction() ? "true" : "false");
            else if (op == "COMMIT") out.push_back(ts.commit() ? "true" : "false");
            else if (op == "ROLLBACK") out.push_back(ts.rollback() ? "true" : "false");
            else if (op == "GET_FEED") {
                int u; cin >> u; vector<int> feed = ts.getNewsFeed(u);
                if (feed.empty()) out.push_back("#");
                else {
                    string s = "";
                    for (size_t j = 0; j < feed.size(); j++) s += to_string(feed[j]) + (j + 1 < feed.size() ? "," : "");
                    out.push_back(s);
                }
            }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    "java": `import java.util.*;
class Twitter {
    private List<int[]> tweets = new ArrayList<>();
    private Map<Integer, Set<Integer>> follows = new HashMap<>();
    private boolean inTx = false;
    private List<int[]> stagedTweets = new ArrayList<>();
    private List<Object[]> stagedFollows = new ArrayList<>();
    public Twitter() {}
    public void postTweet(int userId, int tweetId) {
        if (inTx) stagedTweets.add(new int[]{tweetId, userId});
        else tweets.add(new int[]{tweetId, userId});
    }
    public List<Integer> getNewsFeed(int userId) {
        List<Integer> feed = new ArrayList<>();
        Set<Integer> followees = follows.getOrDefault(userId, new HashSet<>());
        int count = 0;
        for (int i = tweets.size() - 1; i >= 0 && count < 10; i--) {
            int[] t = tweets.get(i);
            if (t[1] == userId || followees.contains(t[1])) {
                feed.add(t[0]);
                count++;
            }
        }
        return feed;
    }
    public void follow(int followerId, int followeeId) {
        if (followerId == followeeId) return;
        if (inTx) stagedFollows.add(new Object[]{followerId, followeeId, "follow"});
        else follows.computeIfAbsent(followerId, k -> new HashSet<>()).add(followeeId);
    }
    public void unfollow(int followerId, int followeeId) {
        if (inTx) stagedFollows.add(new Object[]{followerId, followeeId, "unfollow"});
        else if (follows.containsKey(followerId)) follows.get(followerId).remove(followeeId);
    }
    public boolean beginTransaction() {
        if (inTx) return false;
        inTx = true;
        stagedTweets.clear();
        stagedFollows.clear();
        return true;
    }
    public boolean commit() {
        if (!inTx) return false;
        inTx = false;
        tweets.addAll(stagedTweets);
        for (Object[] sf : stagedFollows) {
            int f = (int)sf[0], fe = (int)sf[1];
            String act = (String)sf[2];
            if (act.equals("follow")) follows.computeIfAbsent(f, k -> new HashSet<>()).add(fe);
            else if (follows.containsKey(f)) follows.get(f).remove(fe);
        }
        stagedTweets.clear();
        stagedFollows.clear();
        return true;
    }
    public boolean rollback() {
        if (!inTx) return false;
        inTx = false;
        stagedTweets.clear();
        stagedFollows.clear();
        return true;
    }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            Twitter ts = new Twitter();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                if (!sc.hasNext()) break;
                String op = sc.next();
                if (op.equals("POST")) ts.postTweet(sc.nextInt(), sc.nextInt());
                else if (op.equals("FOLLOW")) ts.follow(sc.nextInt(), sc.nextInt());
                else if (op.equals("UNFOLLOW")) ts.unfollow(sc.nextInt(), sc.nextInt());
                else if (op.equals("BEGIN")) out.add(ts.beginTransaction() ? "true" : "false");
                else if (op.equals("COMMIT")) out.add(ts.commit() ? "true" : "false");
                else if (op.equals("ROLLBACK")) out.add(ts.rollback() ? "true" : "false");
                else if (op.equals("GET_FEED")) {
                    List<Integer> feed = ts.getNewsFeed(sc.nextInt());
                    if (feed.isEmpty()) out.add("#");
                    else {
                        StringBuilder sb = new StringBuilder();
                        for (int j = 0; j < feed.size(); j++) sb.append(feed.get(j)).append(j + 1 < feed.size() ? "," : "");
                        out.add(sb.toString());
                    }
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    "c": `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_TWEETS 10005
#define MAX_FOLLOWS 10005
struct Tweet { int id; int userId; };
struct Follow { int follower; int followee; };
struct Tweet tweets[MAX_TWEETS]; int tweetsCount = 0;
struct Follow follows[MAX_FOLLOWS]; int followsCount = 0;
int isFollowing(int follower, int followee) {
    for (int i = 0; i < followsCount; i++) if (follows[i].follower == follower && follows[i].followee == followee) return 1;
    return 0;
}
void postTweetRaw(int userId, int tweetId) {
    tweets[tweetsCount].id = tweetId; tweets[tweetsCount].userId = userId; tweetsCount++;
}
void followRaw(int followerId, int followeeId) {
    if (followerId == followeeId) return;
    if (isFollowing(followerId, followeeId)) return;
    follows[followsCount].follower = followerId; follows[followsCount].followee = followeeId; followsCount++;
}
void unfollowRaw(int followerId, int followeeId) {
    for (int i = 0; i < followsCount; i++) {
        if (follows[i].follower == followerId && follows[i].followee == followeeId) {
            follows[i] = follows[followsCount - 1]; followsCount--; return;
        }
    }
}
int getNewsFeed(int userId, int* out) {
    int count = 0;
    for (int i = tweetsCount - 1; i >= 0 && count < 10; i--) {
        int author = tweets[i].userId;
        if (author == userId || isFollowing(userId, author)) out[count++] = tweets[i].id;
    }
    return count;
}
int inTx = 0;
struct Tweet stagedTweets[MAX_TWEETS]; int stagedTweetsCount = 0;
struct Follow stagedFollows[MAX_FOLLOWS]; int stagedFollowsCount = 0;
char stagedFollowActions[MAX_FOLLOWS][10];
void postTweet(int userId, int tweetId) {
    if (inTx) { stagedTweets[stagedTweetsCount].id = tweetId; stagedTweets[stagedTweetsCount].userId = userId; stagedTweetsCount++; }
    else postTweetRaw(userId, tweetId);
}
void follow(int followerId, int followeeId) {
    if (followerId == followeeId) return;
    if (inTx) {
        stagedFollows[stagedFollowsCount].follower = followerId;
        stagedFollows[stagedFollowsCount].followee = followeeId;
        strcpy(stagedFollowActions[stagedFollowsCount], "follow");
        stagedFollowsCount++;
    } else followRaw(followerId, followeeId);
}
void unfollow(int followerId, int followeeId) {
    if (inTx) {
        stagedFollows[stagedFollowsCount].follower = followerId;
        stagedFollows[stagedFollowsCount].followee = followeeId;
        strcpy(stagedFollowActions[stagedFollowsCount], "unfollow");
        stagedFollowsCount++;
    } else unfollowRaw(followerId, followeeId);
}
int beginTransaction() {
    if (inTx) return 0;
    inTx = 1;
    stagedTweetsCount = 0;
    stagedFollowsCount = 0;
    return 1;
}
int commit() {
    if (!inTx) return 0;
    inTx = 0;
    for (int i = 0; i < stagedTweetsCount; i++) postTweetRaw(stagedTweets[i].userId, stagedTweets[i].id);
    for (int i = 0; i < stagedFollowsCount; i++) {
        if (strcmp(stagedFollowActions[i], "follow") == 0) followRaw(stagedFollows[i].follower, stagedFollows[i].followee);
        else unfollowRaw(stagedFollows[i].follower, stagedFollows[i].followee);
    }
    stagedTweetsCount = 0;
    stagedFollowsCount = 0;
    return 1;
}
int rollback() {
    if (!inTx) return 0;
    inTx = 0;
    stagedTweetsCount = 0;
    stagedFollowsCount = 0;
    return 1;
}
int main() {
    int q; if (scanf("%d", &q) != 1) return 0;
    char** out = malloc(q * sizeof(char*)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[20]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "POST") == 0) { int u, t; if (scanf("%d %d", &u, &t) != 2) break; postTweet(u, t); }
        else if (strcmp(op, "FOLLOW") == 0) { int u1, u2; if (scanf("%d %d", &u1, &u2) != 2) break; follow(u1, u2); }
        else if (strcmp(op, "UNFOLLOW") == 0) { int u1, u2; if (scanf("%d %d", &u1, &u2) != 2) break; unfollow(u1, u2); }
        else if (strcmp(op, "BEGIN") == 0) { out[outCount++] = strcpy(malloc(10), beginTransaction() ? "true" : "false"); }
        else if (strcmp(op, "COMMIT") == 0) { out[outCount++] = strcpy(malloc(10), commit() ? "true" : "false"); }
        else if (strcmp(op, "ROLLBACK") == 0) { out[outCount++] = strcpy(malloc(10), rollback() ? "true" : "false"); }
        else if (strcmp(op, "GET_FEED") == 0) {
            int u; if (scanf("%d", &u) != 1) break;
            int feed[100]; int count = getNewsFeed(u, feed);
            char* buf = malloc(2000 * sizeof(char));
            if (count == 0) strcpy(buf, "#");
            else {
                buf[0] = '\\0';
                for (int j = 0; j < count; j++) {
                    char tmp[20]; sprintf(tmp, "%d%s", feed[j], (j + 1 < count ? "," : ""));
                    strcat(buf, tmp);
                }
            }
            out[outCount++] = buf;
        }
    }
    for (int i = 0; i < outCount; i++) { printf("%s%s", out[i], (i + 1 < outCount ? " " : "")); free(out[i]); }
    printf("\\n"); free(out); return 0;
}`
  },
  "twt-h5": {
    "python": `class Twitter:
    def __init__(self):
        self.tweets = []
        self.follows = {}
        self.tx_stack = []
    def postTweet(self, userId: int, tweetId: int) -> None:
        if self.tx_stack:
            self.tx_stack[-1]["tweets"].append((tweetId, userId))
        else:
            self.tweets.append((tweetId, userId))
    def getNewsFeed(self, userId: int) -> list:
        feed = []
        count = 0
        followees = self.follows.get(userId, set())
        for tweetId, authorId in reversed(self.tweets):
            if authorId == userId or authorId in followees:
                feed.append(tweetId)
                count += 1
                if count == 10: break
        return feed
    def follow(self, followerId: int, followeeId: int) -> None:
        if followerId == followeeId: return
        if self.tx_stack:
            self.tx_stack[-1]["follows"].append((followerId, followeeId, "follow"))
        else:
            self.follows.setdefault(followerId, set()).add(followeeId)
    def unfollow(self, followerId: int, followeeId: int) -> None:
        if self.tx_stack:
            self.tx_stack[-1]["follows"].append((followerId, followeeId, "unfollow"))
        else:
            if followerId in self.follows and followeeId in self.follows[followerId]:
                self.follows[followerId].remove(followeeId)
    def beginTransaction(self) -> bool:
        self.tx_stack.append({"tweets": [], "follows": []})
        return True
    def commit(self) -> bool:
        if not self.tx_stack: return False
        top = self.tx_stack.pop()
        if self.tx_stack:
            self.tx_stack[-1]["tweets"].extend(top["tweets"])
            self.tx_stack[-1]["follows"].extend(top["follows"])
        else:
            for t in top["tweets"]:
                self.tweets.append(t)
            for f, fe, act in top["follows"]:
                if act == "follow":
                    self.follows.setdefault(f, set()).add(fe)
                else:
                    if f in self.follows and fe in self.follows[f]:
                        self.follows[f].remove(fe)
        return True
    def rollback(self) -> bool:
        if not self.tx_stack: return False
        self.tx_stack.pop()
        return True

ts = Twitter()
out = []
import sys
lines = sys.stdin.read().splitlines()
if lines:
    try: q = int(lines[0].strip())
    except: sys.exit(0)
    for i in range(1, q + 1):
        if i >= len(lines): break
        parts = lines[i].strip().split()
        if not parts: continue
        op = parts[0]
        if op == "POST": ts.postTweet(int(parts[1]), int(parts[2]))
        elif op == "FOLLOW": ts.follow(int(parts[1]), int(parts[2]))
        elif op == "UNFOLLOW": ts.unfollow(int(parts[1]), int(parts[2]))
        elif op == "BEGIN": out.append("true" if ts.beginTransaction() else "false")
        elif op == "COMMIT": out.append("true" if ts.commit() else "false")
        elif op == "ROLLBACK": out.append("true" if ts.rollback() else "false")
        elif op == "GET_FEED":
            feed = ts.getNewsFeed(int(parts[1]))
            out.append(",".join(map(str, feed)) if feed else "#")
    print(" ".join(out))`,
    "cpp": `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <unordered_set>
using namespace std;
class Twitter {
    struct Tweet { int id; int userId; };
    vector<Tweet> tweets;
    unordered_map<int, unordered_set<int>> follows;
    struct StagedFollow { int f, fe; string act; };
    struct TxLevel { vector<Tweet> tweets; vector<StagedFollow> follows; };
    vector<TxLevel> txStack;
public:
    Twitter() {}
    void postTweet(int userId, int tweetId) {
        if (!txStack.empty()) txStack.back().tweets.push_back({tweetId, userId});
        else tweets.push_back({tweetId, userId});
    }
    vector<int> getNewsFeed(int userId) {
        vector<int> feed;
        int count = 0;
        for (int i = (int)tweets.size() - 1; i >= 0 && count < 10; i--) {
            int author = tweets[i].userId;
            if (author == userId || (follows.count(userId) && follows[userId].count(author))) {
                feed.push_back(tweets[i].id);
                count++;
            }
        }
        return feed;
    }
    void follow(int followerId, int followeeId) {
        if (followerId == followeeId) return;
        if (!txStack.empty()) txStack.back().follows.push_back({followerId, followeeId, "follow"});
        else follows[followerId].insert(followeeId);
    }
    void unfollow(int followerId, int followeeId) {
        if (!txStack.empty()) txStack.back().follows.push_back({followerId, followeeId, "unfollow"});
        else if (follows.count(followerId)) follows[followerId].erase(followeeId);
    }
    bool beginTransaction() {
        txStack.push_back({});
        return true;
    }
    bool commit() {
        if (txStack.empty()) return false;
        TxLevel top = txStack.back();
        txStack.pop_back();
        if (!txStack.empty()) {
            for (const auto& t : top.tweets) txStack.back().tweets.push_back(t);
            for (const auto& f : top.follows) txStack.back().follows.push_back(f);
        } else {
            for (const auto& t : top.tweets) tweets.push_back(t);
            for (const auto& sf : top.follows) {
                if (sf.act == "follow") follows[sf.f].insert(sf.fe);
                else follows[sf.f].erase(sf.fe);
            }
        }
        return true;
    }
    bool rollback() {
        if (txStack.empty()) return false;
        txStack.pop_back();
        return true;
    }
};
int main() {
    Twitter ts;
    int q;
    if (cin >> q) {
        vector<string> out;
        for (int i = 0; i < q; i++) {
            string op; if (!(cin >> op)) break;
            if (op == "POST") { int u, t; cin >> u >> t; ts.postTweet(u, t); }
            else if (op == "FOLLOW") { int u1, u2; cin >> u1 >> u2; ts.follow(u1, u2); }
            else if (op == "UNFOLLOW") { int u1, u2; cin >> u1 >> u2; ts.unfollow(u1, u2); }
            else if (op == "BEGIN") out.push_back(ts.beginTransaction() ? "true" : "false");
            else if (op == "COMMIT") out.push_back(ts.commit() ? "true" : "false");
            else if (op == "ROLLBACK") out.push_back(ts.rollback() ? "true" : "false");
            else if (op == "GET_FEED") {
                int u; cin >> u; vector<int> feed = ts.getNewsFeed(u);
                if (feed.empty()) out.push_back("#");
                else {
                    string s = "";
                    for (size_t j = 0; j < feed.size(); j++) s += to_string(feed[j]) + (j + 1 < feed.size() ? "," : "");
                    out.push_back(s);
                }
            }
        }
        for (size_t i = 0; i < out.size(); i++) cout << out[i] << (i + 1 < out.size() ? " " : "");
        cout << "\\n";
    }
    return 0;
}`,
    "java": `import java.util.*;
class Twitter {
    private List<int[]> tweets = new ArrayList<>();
    private Map<Integer, Set<Integer>> follows = new HashMap<>();
    private static class StagedFollow {
        int f, fe; String act;
        StagedFollow(int f, int fe, String act) { this.f = f; this.fe = fe; this.act = act; }
    }
    private static class TxLevel {
        List<int[]> tweets = new ArrayList<>();
        List<StagedFollow> follows = new ArrayList<>();
    }
    private List<TxLevel> txStack = new ArrayList<>();
    public Twitter() {}
    public void postTweet(int userId, int tweetId) {
        if (!txStack.isEmpty()) txStack.get(txStack.size() - 1).tweets.add(new int[]{tweetId, userId});
        else tweets.add(new int[]{tweetId, userId});
    }
    public List<Integer> getNewsFeed(int userId) {
        List<Integer> feed = new ArrayList<>();
        Set<Integer> followees = follows.getOrDefault(userId, new HashSet<>());
        int count = 0;
        for (int i = tweets.size() - 1; i >= 0 && count < 10; i--) {
            int[] t = tweets.get(i);
            if (t[1] == userId || followees.contains(t[1])) {
                feed.add(t[0]);
                count++;
            }
        }
        return feed;
    }
    public void follow(int followerId, int followeeId) {
        if (followerId == followeeId) return;
        if (!txStack.isEmpty()) txStack.get(txStack.size() - 1).follows.add(new StagedFollow(followerId, followeeId, "follow"));
        else follows.computeIfAbsent(followerId, k -> new HashSet<>()).add(followeeId);
    }
    public void unfollow(int followerId, int followeeId) {
        if (!txStack.isEmpty()) txStack.get(txStack.size() - 1).follows.add(new StagedFollow(followerId, followeeId, "unfollow"));
        else if (follows.containsKey(followerId)) follows.get(followerId).remove(followeeId);
    }
    public boolean beginTransaction() {
        txStack.add(new TxLevel());
        return true;
    }
    public boolean commit() {
        if (txStack.isEmpty()) return false;
        TxLevel top = txStack.remove(txStack.size() - 1);
        if (!txStack.isEmpty()) {
            txStack.get(txStack.size() - 1).tweets.addAll(top.tweets);
            txStack.get(txStack.size() - 1).follows.addAll(top.follows);
        } else {
            tweets.addAll(top.tweets);
            for (StagedFollow sf : top.follows) {
                if (sf.act.equals("follow")) follows.computeIfAbsent(sf.f, k -> new HashSet<>()).add(sf.fe);
                else if (follows.containsKey(sf.f)) follows.get(sf.f).remove(sf.fe);
            }
        }
        return true;
    }
    public boolean rollback() {
        if (txStack.isEmpty()) return false;
        txStack.remove(txStack.size() - 1);
        return true;
    }
}
public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int q = sc.nextInt();
            Twitter ts = new Twitter();
            List<String> out = new ArrayList<>();
            for (int i = 0; i < q; i++) {
                if (!sc.hasNext()) break;
                String op = sc.next();
                if (op.equals("POST")) ts.postTweet(sc.nextInt(), sc.nextInt());
                else if (op.equals("FOLLOW")) ts.follow(sc.nextInt(), sc.nextInt());
                else if (op.equals("UNFOLLOW")) ts.unfollow(sc.nextInt(), sc.nextInt());
                else if (op.equals("BEGIN")) out.add(ts.beginTransaction() ? "true" : "false");
                else if (op.equals("COMMIT")) out.add(ts.commit() ? "true" : "false");
                else if (op.equals("ROLLBACK")) out.add(ts.rollback() ? "true" : "false");
                else if (op.equals("GET_FEED")) {
                    List<Integer> feed = ts.getNewsFeed(sc.nextInt());
                    if (feed.isEmpty()) out.add("#");
                    else {
                        StringBuilder sb = new StringBuilder();
                        for (int j = 0; j < feed.size(); j++) sb.append(feed.get(j)).append(j + 1 < feed.size() ? "," : "");
                        out.add(sb.toString());
                    }
                }
            }
            System.out.println(String.join(" ", out));
        }
    }
}`,
    "c": `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_TWEETS 10005
#define MAX_FOLLOWS 10005
struct Tweet { int id; int userId; };
struct Follow { int follower; int followee; };
struct Tweet tweets[MAX_TWEETS]; int tweetsCount = 0;
struct Follow follows[MAX_FOLLOWS]; int followsCount = 0;
int isFollowing(int follower, int followee) {
    for (int i = 0; i < followsCount; i++) if (follows[i].follower == follower && follows[i].followee == followee) return 1;
    return 0;
}
void postTweetRaw(int userId, int tweetId) {
    tweets[tweetsCount].id = tweetId; tweets[tweetsCount].userId = userId; tweetsCount++;
}
void followRaw(int followerId, int followeeId) {
    if (followerId == followeeId) return;
    if (isFollowing(followerId, followeeId)) return;
    follows[followsCount].follower = followerId; follows[followsCount].followee = followeeId; followsCount++;
}
void unfollowRaw(int followerId, int followeeId) {
    for (int i = 0; i < followsCount; i++) {
        if (follows[i].follower == followerId && follows[i].followee == followeeId) {
            follows[i] = follows[followsCount - 1]; followsCount--; return;
        }
    }
}
int getNewsFeed(int userId, int* out) {
    int count = 0;
    for (int i = tweetsCount - 1; i >= 0 && count < 10; i--) {
        int author = tweets[i].userId;
        if (author == userId || isFollowing(userId, author)) out[count++] = tweets[i].id;
    }
    return count;
}
struct TxLevel {
    struct Tweet tweets[500]; int tweetsCount;
    struct Follow follows[500]; int followsCount;
    char followActions[500][10];
};
struct TxLevel txStack[50]; int txStackSize = 0;
void postTweet(int userId, int tweetId) {
    if (txStackSize > 0) {
        int topIdx = txStackSize - 1;
        int tc = txStack[topIdx].tweetsCount;
        txStack[topIdx].tweets[tc].id = tweetId;
        txStack[topIdx].tweets[tc].userId = userId;
        txStack[topIdx].tweetsCount++;
    } else postTweetRaw(userId, tweetId);
}
void follow(int followerId, int followeeId) {
    if (followerId == followeeId) return;
    if (txStackSize > 0) {
        int topIdx = txStackSize - 1;
        int fc = txStack[topIdx].followsCount;
        txStack[topIdx].follows[fc].follower = followerId;
        txStack[topIdx].follows[fc].followee = followeeId;
        strcpy(txStack[topIdx].followActions[fc], "follow");
        txStack[topIdx].followsCount++;
    } else followRaw(followerId, followeeId);
}
void unfollow(int followerId, int followeeId) {
    if (txStackSize > 0) {
        int topIdx = txStackSize - 1;
        int fc = txStack[topIdx].followsCount;
        txStack[topIdx].follows[fc].follower = followerId;
        txStack[topIdx].follows[fc].followee = followeeId;
        strcpy(txStack[topIdx].followActions[fc], "unfollow");
        txStack[topIdx].followsCount++;
    } else unfollowRaw(followerId, followeeId);
}
int beginTransaction() {
    if (txStackSize >= 50) return 0;
    txStack[txStackSize].tweetsCount = 0;
    txStack[txStackSize].followsCount = 0;
    txStackSize++;
    return 1;
}
int commit() {
    if (txStackSize == 0) return 0;
    struct TxLevel top = txStack[--txStackSize];
    if (txStackSize > 0) {
        int topIdx = txStackSize - 1;
        for (int i = 0; i < top.tweetsCount; i++) {
            int tc = txStack[topIdx].tweetsCount;
            txStack[topIdx].tweets[tc] = top.tweets[i];
            txStack[topIdx].tweetsCount++;
        }
        for (int i = 0; i < top.followsCount; i++) {
            int fc = txStack[topIdx].followsCount;
            txStack[topIdx].follows[fc] = top.follows[i];
            strcpy(txStack[topIdx].followActions[fc], top.followActions[i]);
            txStack[topIdx].followsCount++;
        }
    } else {
        for (int i = 0; i < top.tweetsCount; i++) postTweetRaw(top.tweets[i].userId, top.tweets[i].id);
        for (int i = 0; i < top.followsCount; i++) {
            if (strcmp(top.followActions[i], "follow") == 0) followRaw(top.follows[i].follower, top.follows[i].followee);
            else unfollowRaw(top.follows[i].follower, top.follows[i].followee);
        }
    }
    return 1;
}
int rollback() {
    if (txStackSize == 0) return 0;
    txStackSize--;
    return 1;
}
int main() {
    int q; if (scanf("%d", &q) != 1) return 0;
    char** out = malloc(q * sizeof(char*)); int outCount = 0;
    for (int i = 0; i < q; i++) {
        char op[20]; if (scanf("%s", op) != 1) break;
        if (strcmp(op, "POST") == 0) { int u, t; if (scanf("%d %d", &u, &t) != 2) break; postTweet(u, t); }
        else if (strcmp(op, "FOLLOW") == 0) { int u1, u2; if (scanf("%d %d", &u1, &u2) != 2) break; follow(u1, u2); }
        else if (strcmp(op, "UNFOLLOW") == 0) { int u1, u2; if (scanf("%d %d", &u1, &u2) != 2) break; unfollow(u1, u2); }
        else if (strcmp(op, "BEGIN") == 0) { out[outCount++] = strcpy(malloc(10), beginTransaction() ? "true" : "false"); }
        else if (strcmp(op, "COMMIT") == 0) { out[outCount++] = strcpy(malloc(10), commit() ? "true" : "false"); }
        else if (strcmp(op, "ROLLBACK") == 0) { out[outCount++] = strcpy(malloc(10), rollback() ? "true" : "false"); }
        else if (strcmp(op, "GET_FEED") == 0) {
            int u; if (scanf("%d", &u) != 1) break;
            int feed[100]; int count = getNewsFeed(u, feed);
            char* buf = malloc(2000 * sizeof(char));
            if (count == 0) strcpy(buf, "#");
            else {
                buf[0] = '\\0';
                for (int j = 0; j < count; j++) {
                    char tmp[20]; sprintf(tmp, "%d%s", feed[j], (j + 1 < count ? "," : ""));
                    strcat(buf, tmp);
                }
            }
            out[outCount++] = buf;
        }
    }
    for (int i = 0; i < outCount; i++) { printf("%s%s", out[i], (i + 1 < outCount ? " " : "")); free(out[i]); }
    printf("\\n"); free(out); return 0;
}`
  }
}
