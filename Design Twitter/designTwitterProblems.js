export const designTwitterProblems = [
  {
    "id": "twt-e1",
    "title": "Design Twitter Basic",
    "difficulty": "Easy",
    "description": "Implement a basic Twitter system supporting posting tweets, following/unfollowing users, and retrieving the 10 most recent tweets in the news feed.",
    "constraints": ["1 <= userId, tweetId <= 10^5", "1 <= q <= 1000"],
    "examples": [{"input": "9\nPOST 1 5\nGET_FEED 1\nFOLLOW 1 2\nPOST 2 6\nGET_FEED 1\nUNFOLLOW 1 2\nGET_FEED 1\nPOST 1 7\nGET_FEED 1", "output": "5 6,5 5 7,5"}],
    "testCases": [
      {"input": "9\nPOST 1 5\nGET_FEED 1\nFOLLOW 1 2\nPOST 2 6\nGET_FEED 1\nUNFOLLOW 1 2\nGET_FEED 1\nPOST 1 7\nGET_FEED 1", "expectedOutput": "5 6,5 5 7,5"},
      {"input": "6\nGET_FEED 1\nPOST 1 10\nPOST 1 20\nGET_FEED 1\nFOLLOW 2 1\nGET_FEED 2", "expectedOutput": "# 20,10 20,10"}
    ],
    "starterCode": {
      "python": "class Twitter:\n    def __init__(self):\n        pass\n    def postTweet(self, userId: int, tweetId: int) -> None:\n        pass\n    def getNewsFeed(self, userId: int) -> list:\n        return []\n    def follow(self, followerId: int, followeeId: int) -> None:\n        pass\n    def unfollow(self, followerId: int, followeeId: int) -> None:\n        pass",
      "cpp": "class Twitter {\npublic:\n    Twitter() {}\n    void postTweet(int userId, int tweetId) {}\n    vector<int> getNewsFeed(int userId) { return {}; }\n    void follow(int followerId, int followeeId) {}\n    void unfollow(int followerId, int followeeId) {}\n};",
      "java": "class Twitter {\n    public Twitter() {}\n    public void postTweet(int userId, int tweetId) {}\n    public List<Integer> getNewsFeed(int userId) { return new ArrayList<>(); }\n    public void follow(int followerId, int followeeId) {}\n    public void unfollow(int followerId, int followeeId) {}\n}",
      "c": "void postTweet(int userId, int tweetId) {}\nint getNewsFeed(int userId, int* out) { return 0; }\nvoid follow(int followerId, int followeeId) {}\nvoid unfollow(int followerId, int followeeId) {}"
    }
  },
  {
    "id": "twt-e2",
    "title": "Design Twitter with Likes",
    "difficulty": "Easy",
    "description": "Extend basic Twitter to support liking and unliking tweets, and retrieving the number of likes for a given tweet.",
    "constraints": ["1 <= userId, tweetId <= 10^5", "1 <= q <= 1000"],
    "examples": [{"input": "6\nPOST 1 101\nGET_LIKES 101\nLIKE 2 101\nGET_LIKES 101\nUNLIKE 2 101\nGET_LIKES 101", "output": "0 1 0"}],
    "testCases": [
      {"input": "10\nPOST 1 101\nGET_LIKES 101\nLIKE 2 101\nGET_LIKES 101\nLIKE 3 101\nGET_LIKES 101\nUNLIKE 2 101\nGET_LIKES 101\nGET_FEED 1", "expectedOutput": "0 1 2 1 101"},
      {"input": "6\nPOST 1 101\nLIKE 1 101\nLIKE 1 101\nGET_LIKES 101\nUNLIKE 1 101\nGET_LIKES 101", "expectedOutput": "1 0"}
    ],
    "starterCode": {
      "python": "class Twitter:\n    def __init__(self):\n        pass\n    def postTweet(self, userId: int, tweetId: int) -> None:\n        pass\n    def getNewsFeed(self, userId: int) -> list:\n        return []\n    def follow(self, followerId: int, followeeId: int) -> None:\n        pass\n    def unfollow(self, followerId: int, followeeId: int) -> None:\n        pass\n    def likeTweet(self, userId: int, tweetId: int) -> None:\n        pass\n    def unlikeTweet(self, userId: int, tweetId: int) -> None:\n        pass\n    def getLikesCount(self, tweetId: int) -> int:\n        return 0",
      "cpp": "class Twitter {\npublic:\n    Twitter() {}\n    void postTweet(int userId, int tweetId) {}\n    vector<int> getNewsFeed(int userId) { return {}; }\n    void follow(int followerId, int followeeId) {}\n    void unfollow(int followerId, int followeeId) {}\n    void likeTweet(int userId, int tweetId) {}\n    void unlikeTweet(int userId, int tweetId) {}\n    int getLikesCount(int tweetId) { return 0; }\n};",
      "java": "class Twitter {\n    public Twitter() {}\n    public void postTweet(int userId, int tweetId) {}\n    public List<Integer> getNewsFeed(int userId) { return new ArrayList<>(); }\n    public void follow(int followerId, int followeeId) {}\n    public void unfollow(int followerId, int followeeId) {}\n    public void likeTweet(int userId, int tweetId) {}\n    public void unlikeTweet(int userId, int tweetId) {}\n    public int getLikesCount(int tweetId) { return 0; }\n}",
      "c": "void postTweet(int userId, int tweetId) {}\nint getNewsFeed(int userId, int* out) { return 0; }\nvoid follow(int followerId, int followeeId) {}\nvoid unfollow(int followerId, int followeeId) {}\nvoid likeTweet(int userId, int tweetId) {}\nvoid unlikeTweet(int userId, int tweetId) {}\nint getLikesCount(int tweetId) { return 0; }"
    }
  },
  {
    "id": "twt-e3",
    "title": "Design Twitter with Delete",
    "difficulty": "Easy",
    "description": "Extend Twitter to allow users to delete their own tweets. A user can only delete tweets they authored. Deleting a tweet must remove it from the feed.",
    "constraints": ["1 <= userId, tweetId <= 10^5", "1 <= q <= 1000"],
    "examples": [{"input": "4\nPOST 1 101\nGET_FEED 1\nDELETE 1 101\nGET_FEED 1", "output": "101 true #"}],
    "testCases": [
      {"input": "8\nPOST 1 101\nPOST 1 102\nGET_FEED 1\nDELETE 1 101\nGET_FEED 1\nDELETE 2 102\nDELETE 1 102\nGET_FEED 1", "expectedOutput": "102,101 true 102 false true #"},
      {"input": "5\nPOST 1 101\nDELETE 1 999\nDELETE 1 101\nDELETE 1 101\nGET_FEED 1", "expectedOutput": "false true false #"}
    ],
    "starterCode": {
      "python": "class Twitter:\n    def __init__(self):\n        pass\n    def postTweet(self, userId: int, tweetId: int) -> None:\n        pass\n    def getNewsFeed(self, userId: int) -> list:\n        return []\n    def follow(self, followerId: int, followeeId: int) -> None:\n        pass\n    def unfollow(self, followerId: int, followeeId: int) -> None:\n        pass\n    def deleteTweet(self, userId: int, tweetId: int) -> bool:\n        return False",
      "cpp": "class Twitter {\npublic:\n    Twitter() {}\n    void postTweet(int userId, int tweetId) {}\n    vector<int> getNewsFeed(int userId) { return {}; }\n    void follow(int followerId, int followeeId) {}\n    void unfollow(int followerId, int followeeId) {}\n    bool deleteTweet(int userId, int tweetId) { return false; }\n};",
      "java": "class Twitter {\n    public Twitter() {}\n    public void postTweet(int userId, int tweetId) {}\n    public List<Integer> getNewsFeed(int userId) { return new ArrayList<>(); }\n    public void follow(int followerId, int followeeId) {}\n    public void unfollow(int followerId, int followeeId) {}\n    public boolean deleteTweet(int userId, int tweetId) { return false; }\n}",
      "c": "void postTweet(int userId, int tweetId) {}\nint getNewsFeed(int userId, int* out) { return 0; }\nvoid follow(int followerId, int followeeId) {}\nvoid unfollow(int followerId, int followeeId) {}\nint deleteTweet(int userId, int tweetId) { return 0; }"
    }
  },
  {
    "id": "twt-e4",
    "title": "Design Twitter with Blocks",
    "difficulty": "Easy",
    "description": "Extend Twitter to support user blocking. If user A blocks user B: they automatically unfollow each other, they cannot follow each other, and they cannot see each other's tweets in their feeds.",
    "constraints": ["1 <= userId, tweetId <= 10^5", "1 <= q <= 1000"],
    "examples": [{"input": "5\nPOST 1 101\nPOST 2 102\nFOLLOW 1 2\nBLOCK 1 2\nGET_FEED 1", "output": "101"}],
    "testCases": [
      {"input": "10\nPOST 1 101\nPOST 2 102\nFOLLOW 1 2\nFOLLOW 2 1\nBLOCK 1 2\nGET_FEED 1\nGET_FEED 2\nFOLLOW 1 2\nGET_FEED 1", "expectedOutput": "101 102 101"},
      {"input": "8\nPOST 1 101\nBLOCK 1 2\nFOLLOW 2 1\nGET_FEED 2\nUNBLOCK 1 2\nFOLLOW 2 1\nGET_FEED 2\nGET_FEED 1", "expectedOutput": "# 101 101"}
    ],
    "starterCode": {
      "python": "class Twitter:\n    def __init__(self):\n        pass\n    def postTweet(self, userId: int, tweetId: int) -> None:\n        pass\n    def getNewsFeed(self, userId: int) -> list:\n        return []\n    def follow(self, followerId: int, followeeId: int) -> None:\n        pass\n    def unfollow(self, followerId: int, followeeId: int) -> None:\n        pass\n    def block(self, userId: int, blockedId: int) -> None:\n        pass\n    def unblock(self, userId: int, blockedId: int) -> None:\n        pass",
      "cpp": "class Twitter {\npublic:\n    Twitter() {}\n    void postTweet(int userId, int tweetId) {}\n    vector<int> getNewsFeed(int userId) { return {}; }\n    void follow(int followerId, int followeeId) {}\n    void unfollow(int followerId, int followeeId) {}\n    void block(int userId, int blockedId) {}\n    void unblock(int userId, int blockedId) {}\n};",
      "java": "class Twitter {\n    public Twitter() {}\n    public void postTweet(int userId, int tweetId) {}\n    public List<Integer> getNewsFeed(int userId) { return new ArrayList<>(); }\n    public void follow(int followerId, int followeeId) {}\n    public void unfollow(int followerId, int followeeId) {}\n    public void block(int userId, int blockedId) {}\n    public void unblock(int userId, int blockedId) {}\n}",
      "c": "void postTweet(int userId, int tweetId) {}\nint getNewsFeed(int userId, int* out) { return 0; }\nvoid follow(int followerId, int followeeId) {}\nvoid unfollow(int followerId, int followeeId) {}\nvoid block(int userId, int blockedId) {}\nvoid unblock(int userId, int blockedId) {}"
    }
  },
  {
    "id": "twt-e5",
    "title": "Design Twitter with Retweets",
    "difficulty": "Easy",
    "description": "Extend Twitter to support retweeting. Retweeting a tweet references the original tweet and makes it appear in the feed of the retweeter and their followers. Feed must avoid duplicate tweet IDs by only keeping the most recent occurrence.",
    "constraints": ["1 <= userId, tweetId <= 10^5", "1 <= q <= 1000"],
    "examples": [{"input": "4\nPOST 1 101\nFOLLOW 2 1\nRETWEET 2 101\nGET_FEED 2", "output": "101"}],
    "testCases": [
      {"input": "7\nPOST 1 101\nFOLLOW 2 1\nRETWEET 2 101\nGET_FEED 2\nPOST 1 102\nRETWEET 2 102\nGET_FEED 2", "expectedOutput": "101 102,101"},
      {"input": "5\nPOST 1 101\nRETWEET 1 101\nGET_FEED 1\nPOST 2 102\nGET_FEED 1", "expectedOutput": "101 101"}
    ],
    "starterCode": {
      "python": "class Twitter:\n    def __init__(self):\n        pass\n    def postTweet(self, userId: int, tweetId: int) -> None:\n        pass\n    def getNewsFeed(self, userId: int) -> list:\n        return []\n    def follow(self, followerId: int, followeeId: int) -> None:\n        pass\n    def unfollow(self, followerId: int, followeeId: int) -> None:\n        pass\n    def retweet(self, userId: int, tweetId: int) -> None:\n        pass",
      "cpp": "class Twitter {\npublic:\n    Twitter() {}\n    void postTweet(int userId, int tweetId) {}\n    vector<int> getNewsFeed(int userId) { return {}; }\n    void follow(int followerId, int followeeId) {}\n    void unfollow(int followerId, int followeeId) {}\n    void retweet(int userId, int tweetId) {}\n};",
      "java": "class Twitter {\n    public Twitter() {}\n    public void postTweet(int userId, int tweetId) {}\n    public List<Integer> getNewsFeed(int userId) { return new ArrayList<>(); }\n    public void follow(int followerId, int followeeId) {}\n    public void unfollow(int followerId, int followeeId) {}\n    public void retweet(int userId, int tweetId) {}\n}",
      "c": "void postTweet(int userId, int tweetId) {}\nint getNewsFeed(int userId, int* out) { return 0; }\nvoid follow(int followerId, int followeeId) {}\nvoid unfollow(int followerId, int followeeId) {}\nvoid retweet(int userId, int tweetId) {}"
    }
  },
  {
    "id": "twt-m1",
    "title": "Design Twitter with Mute",
    "difficulty": "Medium",
    "description": "Extend Twitter to allow users to mute other users. When A mutes B, B's tweets are filtered out from A's news feed. Muting doesn't affect following status (A can still follow B, and B can still follow A).",
    "constraints": ["1 <= userId, tweetId <= 10^5", "1 <= q <= 1000"],
    "examples": [{"input": "6\nPOST 1 101\nFOLLOW 2 1\nGET_FEED 2\nMUTE 2 1\nGET_FEED 2", "output": "101 #"}],
    "testCases": [
      {"input": "8\nPOST 1 101\nFOLLOW 2 1\nMUTE 2 1\nGET_FEED 2\nUNMUTE 2 1\nGET_FEED 2\nMUTE 2 1\nGET_FEED 2", "expectedOutput": "# 101 #"},
      {"input": "7\nPOST 1 101\nMUTE 1 2\nFOLLOW 1 2\nPOST 2 102\nGET_FEED 1\nUNMUTE 1 2\nGET_FEED 1", "expectedOutput": "101 102,101"}
    ],
    "starterCode": {
      "python": "class Twitter:\n    def __init__(self):\n        pass\n    def postTweet(self, userId: int, tweetId: int) -> None:\n        pass\n    def getNewsFeed(self, userId: int) -> list:\n        return []\n    def follow(self, followerId: int, followeeId: int) -> None:\n        pass\n    def unfollow(self, followerId: int, followeeId: int) -> None:\n        pass\n    def mute(self, userId: int, mutedId: int) -> None:\n        pass\n    def unmute(self, userId: int, mutedId: int) -> None:\n        pass",
      "cpp": "class Twitter {\npublic:\n    Twitter() {}\n    void postTweet(int userId, int tweetId) {}\n    vector<int> getNewsFeed(int userId) { return {}; }\n    void follow(int followerId, int followeeId) {}\n    void unfollow(int followerId, int followeeId) {}\n    void mute(int userId, int mutedId) {}\n    void unmute(int userId, int mutedId) {}\n};",
      "java": "class Twitter {\n    public Twitter() {}\n    public void postTweet(int userId, int tweetId) {}\n    public List<Integer> getNewsFeed(int userId) { return new ArrayList<>(); }\n    public void follow(int followerId, int followeeId) {}\n    public void unfollow(int followerId, int followeeId) {}\n    public void block(int userId, int blockedId) {}\n    public void unblock(int userId, int blockedId) {}\n}",
      "c": "void postTweet(int userId, int tweetId) {}\nint getNewsFeed(int userId, int* out) { return 0; }\nvoid follow(int followerId, int followeeId) {}\nvoid unfollow(int followerId, int followeeId) {}\nvoid mute(int userId, int mutedId) {}\nvoid unmute(int userId, int mutedId) {}"
    }
  },
  {
    "id": "twt-m2",
    "title": "Design Twitter with Paginated Feed",
    "difficulty": "Medium",
    "description": "Extend Twitter to support paginated news feeds. getNewsFeedPaginated returns the list of tweet IDs for the given page (1-indexed) and pageSize.",
    "constraints": ["1 <= userId, tweetId <= 10^5", "1 <= page, pageSize <= 100", "1 <= q <= 1000"],
    "examples": [{"input": "5\nPOST 1 101\nPOST 1 102\nPOST 1 103\nGET_FEED_PAGINATED 1 1 2\nGET_FEED_PAGINATED 1 2 2", "output": "103,102 101"}],
    "testCases": [
      {"input": "7\nPOST 1 101\nPOST 1 102\nPOST 1 103\nGET_FEED_PAGINATED 1 1 2\nGET_FEED_PAGINATED 1 2 2\nGET_FEED_PAGINATED 1 3 2\nGET_FEED_PAGINATED 1 1 5", "expectedOutput": "103,102 101 # 103,102,101"},
      {"input": "6\nGET_FEED_PAGINATED 1 1 10\nPOST 1 5\nGET_FEED_PAGINATED 1 1 10\nPOST 1 6\nGET_FEED_PAGINATED 1 1 1\nGET_FEED_PAGINATED 1 2 1", "expectedOutput": "# 5 6 5"}
    ],
    "starterCode": {
      "python": "class Twitter:\n    def __init__(self):\n        pass\n    def postTweet(self, userId: int, tweetId: int) -> None:\n        pass\n    def getNewsFeedPaginated(self, userId: int, page: int, pageSize: int) -> list:\n        return []\n    def follow(self, followerId: int, followeeId: int) -> None:\n        pass\n    def unfollow(self, followerId: int, followeeId: int) -> None:\n        pass",
      "cpp": "class Twitter {\npublic:\n    Twitter() {}\n    void postTweet(int userId, int tweetId) {}\n    vector<int> getNewsFeedPaginated(int userId, int page, int pageSize) { return {}; }\n    void follow(int followerId, int followeeId) {}\n    void unfollow(int followerId, int followeeId) {}\n};",
      "java": "class Twitter {\n    public Twitter() {}\n    public void postTweet(int userId, int tweetId) {}\n    public List<Integer> getNewsFeedPaginated(int userId, int page, int pageSize) { return new ArrayList<>(); }\n    public void follow(int followerId, int followeeId) {}\n    public void unfollow(int followerId, int followeeId) {}\n}",
      "c": "void postTweet(int userId, int tweetId) {}\nint getNewsFeedPaginated(int userId, int page, int pageSize, int* out) { return 0; }\nvoid follow(int followerId, int followeeId) {}\nvoid unfollow(int followerId, int followeeId) {}"
    }
  },
  {
    "id": "twt-m3",
    "title": "Design Twitter with Direct Messages",
    "difficulty": "Medium",
    "description": "Implement Direct Messages (DMs). Users can send private messages to other users. getDMs returns all message IDs exchanged between userId and peerId, in chronological order (oldest first). Note: text contains no spaces.",
    "constraints": ["1 <= userId, peerId <= 10^5", "1 <= messageId <= 10^5", "1 <= q <= 1000"],
    "examples": [{"input": "4\nSEND_DM 1 2 501 hello\nSEND_DM 2 1 502 world\nGET_DMS 1 2\nGET_DMS 2 1", "output": "501,502 501,502"}],
    "testCases": [
      {"input": "6\nSEND_DM 1 2 501 hello\nSEND_DM 2 1 502 hi\nGET_DMS 1 2\nSEND_DM 1 3 503 test\nGET_DMS 1 3\nGET_DMS 2 3", "expectedOutput": "501,502 503 #"},
      {"input": "5\nGET_DMS 1 2\nSEND_DM 1 2 101 msg1\nSEND_DM 1 2 102 msg2\nGET_DMS 1 2\nGET_DMS 2 1", "expectedOutput": "# 101,102 101,102"}
    ],
    "starterCode": {
      "python": "class Twitter:\n    def __init__(self):\n        pass\n    def sendDM(self, senderId: int, receiverId: int, messageId: int, text: str) -> None:\n        pass\n    def getDMs(self, userId: int, peerId: int) -> list:\n        return []",
      "cpp": "class Twitter {\npublic:\n    Twitter() {}\n    void sendDM(int senderId, int receiverId, int messageId, string text) {}\n    vector<int> getDMs(int userId, int peerId) { return {}; }\n};",
      "java": "class Twitter {\n    public Twitter() {}\n    public void sendDM(int senderId, int receiverId, int messageId, String text) {}\n    public List<Integer> getDMs(int userId, int peerId) { return new ArrayList<>(); }\n}",
      "c": "void sendDM(int senderId, int receiverId, int messageId, char* text) {}\nint getDMs(int userId, int peerId, int* out) { return 0; }"
    }
  },
  {
    "id": "twt-m4",
    "title": "Design Twitter with Trending Hashtags",
    "difficulty": "Medium",
    "description": "Implement a hashtag parser. When a tweet is posted with text, parse words starting with '#' (case-sensitive). getTrendingHashtags(n) returns the top n hashtags sorted by overall frequency descending, and lexicographically in case of ties.",
    "constraints": ["1 <= userId, tweetId <= 10^5", "1 <= n <= 10", "1 <= q <= 1000"],
    "examples": [{"input": "5\nPOST_TEXT 1 101 hello_#news\nPOST_TEXT 1 102 #fun_#news\nGET_TRENDING 1\nGET_TRENDING 2\nGET_TRENDING 5", "output": "#news #news,#fun #news,#fun"}],
    "testCases": [
      {"input": "7\nPOST_TEXT 1 101 #news_#sports\nPOST_TEXT 2 102 #sports\nGET_TRENDING 1\nGET_TRENDING 2\nPOST_TEXT 1 103 #abc\nGET_TRENDING 3\nGET_TRENDING 5", "expectedOutput": "#sports #sports,#news #sports,#abc,#news #sports,#abc,#news"},
      {"input": "5\nGET_TRENDING 3\nPOST_TEXT 1 101 #tag\nGET_TRENDING 1\nPOST_TEXT 2 102 #tag\nGET_TRENDING 1", "expectedOutput": "# #tag #tag"}
    ],
    "starterCode": {
      "python": "class Twitter:\n    def __init__(self):\n        pass\n    def postTweet(self, userId: int, tweetId: int, text: str) -> None:\n        pass\n    def getTrendingHashtags(self, n: int) -> list:\n        return []",
      "cpp": "class Twitter {\npublic:\n    Twitter() {}\n    void postTweet(int userId, int tweetId, string text) {}\n    vector<string> getTrendingHashtags(int n) { return {}; }\n};",
      "java": "class Twitter {\n    public Twitter() {}\n    public void postTweet(int userId, int tweetId, String text) {}\n    public List<String> getTrendingHashtags(int n) { return new ArrayList<>(); }\n}",
      "c": "void postTweet(int userId, int tweetId, char* text) {}\nint getTrendingHashtags(int n, char** out) { return 0; }"
    }
  },
  {
    "id": "twt-m5",
    "title": "Design Twitter with Mentions",
    "difficulty": "Medium",
    "description": "Implement a mention parser. When a tweet is posted with text, parse words starting with '@' followed by a numeric userId (e.g. '@101'). getMentionsFeed(userId) returns all tweet IDs mentioning that user, sorted chronologically descending.",
    "constraints": ["1 <= userId, tweetId <= 10^5", "1 <= q <= 1000"],
    "examples": [{"input": "4\nPOST_TEXT 1 101 hello_@2\nPOST_TEXT 1 102 @2_@3\nGET_MENTIONS 2\nGET_MENTIONS 3", "output": "102,101 102"}],
    "testCases": [
      {"input": "7\nPOST_TEXT 1 101 hello_@2\nPOST_TEXT 2 102 hi_@1\nGET_MENTIONS 2\nGET_MENTIONS 1\nPOST_TEXT 1 103 mention_@2_again\nGET_MENTIONS 2\nGET_MENTIONS 3", "expectedOutput": "101 102 103,101 #"},
      {"input": "5\nGET_MENTIONS 1\nPOST_TEXT 1 101 @1\nGET_MENTIONS 1\nPOST_TEXT 2 102 @2\nGET_MENTIONS 2", "expectedOutput": "# 101 102"}
    ],
    "starterCode": {
      "python": "class Twitter:\n    def __init__(self):\n        pass\n    def postTweet(self, userId: int, tweetId: int, text: str) -> None:\n        pass\n    def getMentionsFeed(self, userId: int) -> list:\n        return []",
      "cpp": "class Twitter {\npublic:\n    Twitter() {}\n    void postTweet(int userId, int tweetId, string text) {}\n    vector<int> getMentionsFeed(int userId) { return {}; }\n};",
      "java": "class Twitter {\n    public Twitter() {}\n    public void postTweet(int userId, int tweetId, String text) {}\n    public List<Integer> getMentionsFeed(int userId) { return new ArrayList<>(); }\n}",
      "c": "void postTweet(int userId, int tweetId, char* text) {}\nint getMentionsFeed(int userId, int* out) { return 0; }"
    }
  },
  {
    "id": "twt-h1",
    "title": "Design Twitter with Mutual Friends Feed",
    "difficulty": "Hard",
    "description": "Implement a Mutual Friends Feed. getMutualFriendsFeed(userId) returns the 10 most recent tweets from users who are mutual friends with userId (meaning A follows B and B follows A). Own tweets are excluded.",
    "constraints": ["1 <= userId, tweetId <= 10^5", "1 <= q <= 1000"],
    "examples": [{"input": "7\nPOST 1 101\nPOST 2 102\nFOLLOW 1 2\nGET_MUTUAL_FEED 1\nFOLLOW 2 1\nGET_MUTUAL_FEED 1\nGET_MUTUAL_FEED 2", "output": "# 102 101"}],
    "testCases": [
      {"input": "10\nPOST 1 101\nPOST 2 102\nFOLLOW 1 2\nFOLLOW 2 1\nGET_MUTUAL_FEED 1\nPOST 3 103\nFOLLOW 1 3\nGET_MUTUAL_FEED 1\nFOLLOW 3 1\nGET_MUTUAL_FEED 1", "expectedOutput": "102 102 103,102"},
      {"input": "6\nPOST 2 101\nFOLLOW 1 2\nFOLLOW 2 1\nGET_MUTUAL_FEED 1\nUNFOLLOW 1 2\nGET_MUTUAL_FEED 1", "expectedOutput": "101 #"}
    ],
    "starterCode": {
      "python": "class Twitter:\n    def __init__(self):\n        pass\n    def postTweet(self, userId: int, tweetId: int) -> None:\n        pass\n    def getMutualFriendsFeed(self, userId: int) -> list:\n        return []\n    def follow(self, followerId: int, followeeId: int) -> None:\n        pass\n    def unfollow(self, followerId: int, followeeId: int) -> None:\n        pass",
      "cpp": "class Twitter {\npublic:\n    Twitter() {}\n    void postTweet(int userId, int tweetId) {}\n    vector<int> getMutualFriendsFeed(int userId) { return {}; }\n    void follow(int followerId, int followeeId) {}\n    void unfollow(int followerId, int followeeId) {}\n};",
      "java": "class Twitter {\n    public Twitter() {}\n    public void postTweet(int userId, int tweetId) {}\n    public List<Integer> getMutualFriendsFeed(int userId) { return new ArrayList<>(); }\n    public void follow(int followerId, int followeeId) {}\n    public void unfollow(int followerId, int followeeId) {}\n}",
      "c": "void postTweet(int userId, int tweetId) {}\nint getMutualFriendsFeed(int userId, int* out) { return 0; }\nvoid follow(int followerId, int followeeId) {}\nvoid unfollow(int followerId, int followeeId) {}"
    }
  },
  {
    "id": "twt-h2",
    "title": "Design Twitter with Recommended Feed",
    "difficulty": "Hard",
    "description": "Implement a recommended feed. getRecommendedFeed(userId) returns the 10 most recent tweets from users that the user does NOT follow and who are followed by at least one of the user's followees. Ordered by mutual followees count (descending), then by their most recent tweet ID/timestamp (descending).",
    "constraints": ["1 <= userId, tweetId <= 10^5", "1 <= q <= 1000"],
    "examples": [{"input": "7\nPOST 3 301\nFOLLOW 1 2\nFOLLOW 2 3\nGET_REC_FEED 1\nFOLLOW 1 3\nGET_REC_FEED 1\nGET_REC_FEED 2", "output": "301 # #"}],
    "testCases": [
      {"input": "11\nPOST 3 301\nPOST 4 401\nFOLLOW 1 2\nFOLLOW 2 3\nFOLLOW 2 4\nGET_REC_FEED 1\nFOLLOW 1 5\nFOLLOW 5 4\nGET_REC_FEED 1\nFOLLOW 1 4\nGET_REC_FEED 1", "expectedOutput": "401,301 401,301 301"},
      {"input": "5\nPOST 2 201\nGET_REC_FEED 1\nFOLLOW 1 2\nGET_REC_FEED 1\nGET_REC_FEED 2", "expectedOutput": "# # #"}
    ],
    "starterCode": {
      "python": "class Twitter:\n    def __init__(self):\n        pass\n    def postTweet(self, userId: int, tweetId: int) -> None:\n        pass\n    def getRecommendedFeed(self, userId: int) -> list:\n        return []\n    def follow(self, followerId: int, followeeId: int) -> None:\n        pass\n    def unfollow(self, followerId: int, followeeId: int) -> None:\n        pass",
      "cpp": "class Twitter {\npublic:\n    Twitter() {}\n    void postTweet(int userId, int tweetId) {}\n    vector<int> getRecommendedFeed(int userId) { return {}; }\n    void follow(int followerId, int followeeId) {}\n    void unfollow(int followerId, int followeeId) {}\n};",
      "java": "class Twitter {\n    public Twitter() {}\n    public void postTweet(int userId, int tweetId) {}\n    public List<Integer> getRecommendedFeed(int userId) { return new ArrayList<>(); }\n    public void follow(int followerId, int followeeId) {}\n    public void unfollow(int followerId, int followeeId) {}\n}",
      "c": "void postTweet(int userId, int tweetId) {}\nint getRecommendedFeed(int userId, int* out) { return 0; }\nvoid follow(int followerId, int followeeId) {}\nvoid unfollow(int followerId, int followeeId) {}"
    }
  },
  {
    "id": "twt-h3",
    "title": "Design Twitter with Group Feed",
    "difficulty": "Hard",
    "description": "Implement Group Feed. Users can follow groups (by groupTag). Anyone can post tweets to a group. getGroupFeed(userId, groupTag) returns the 10 most recent tweets in that group if the user is a follower of that group, else #.",
    "constraints": ["1 <= userId, tweetId <= 10^5", "1 <= q <= 1000"],
    "examples": [{"input": "5\nPOST_GROUP 1 101 tech\nGET_GROUP_FEED 1 tech\nFOLLOW_GROUP 1 tech\nGET_GROUP_FEED 1 tech\nGET_GROUP_FEED 2 tech", "output": "# 101 #"}],
    "testCases": [
      {"input": "7\nPOST_GROUP 2 102 tech\nFOLLOW_GROUP 1 tech\nGET_GROUP_FEED 1 tech\nPOST_GROUP 3 103 tech\nGET_GROUP_FEED 1 tech\nUNFOLLOW_GROUP 1 tech\nGET_GROUP_FEED 1 tech", "expectedOutput": "102 103,102 #"},
      {"input": "5\nFOLLOW_GROUP 1 tech\nPOST_GROUP 1 101 tech\nPOST_GROUP 1 102 life\nGET_GROUP_FEED 1 tech\nGET_GROUP_FEED 1 life", "expectedOutput": "101 #"}
    ],
    "starterCode": {
      "python": "class Twitter:\n    def __init__(self):\n        pass\n    def postTweetToGroup(self, userId: int, tweetId: int, groupTag: str) -> None:\n        pass\n    def getGroupFeed(self, userId: int, groupTag: str) -> list:\n        return []\n    def followGroup(self, followerId: int, groupTag: str) -> None:\n        pass\n    def unfollowGroup(self, followerId: int, groupTag: str) -> None:\n        pass",
      "cpp": "class Twitter {\npublic:\n    Twitter() {}\n    void postTweetToGroup(int userId, int tweetId, string groupTag) {}\n    vector<int> getGroupFeed(int userId, string groupTag) { return {}; }\n    void followGroup(int followerId, string groupTag) {}\n    void unfollowGroup(int followerId, string groupTag) {}\n};",
      "java": "class Twitter {\n    public Twitter() {}\n    public void postTweetToGroup(int userId, int tweetId, String groupTag) {}\n    public List<Integer> getGroupFeed(int userId, String groupTag) { return new ArrayList<>(); }\n    public void followGroup(int followerId, String groupTag) {}\n    public void unfollowGroup(int followerId, String groupTag) {}\n}",
      "c": "void postTweetToGroup(int userId, int tweetId, char* groupTag) {}\nint getGroupFeed(int userId, char* groupTag, int* out) { return 0; }\nvoid followGroup(int followerId, char* groupTag) {}\nvoid unfollowGroup(int followerId, char* groupTag) {}"
    }
  },
  {
    "id": "twt-h4",
    "title": "Design Twitter with Transactions",
    "difficulty": "Hard",
    "description": "Implement transaction support (BEGIN, COMMIT, ROLLBACK). While a transaction is active, postings and follows/unfollows are staged and not applied globally. COMMIT applies all changes; ROLLBACK discards them. Nested BEGIN is not allowed.",
    "constraints": ["1 <= userId, tweetId <= 10^5", "1 <= q <= 1000"],
    "examples": [{"input": "7\nBEGIN\nPOST 1 101\nGET_FEED 1\nCOMMIT\nGET_FEED 1\nBEGIN\nROLLBACK", "output": "true # true 101 true true"}],
    "testCases": [
      {"input": "11\nBEGIN\nPOST 1 101\nFOLLOW 1 2\nPOST 2 102\nGET_FEED 1\nROLLBACK\nGET_FEED 1\nBEGIN\nPOST 1 101\nCOMMIT\nGET_FEED 1", "expectedOutput": "true # true # true true 101"},
      {"input": "5\nBEGIN\nBEGIN\nCOMMIT\nCOMMIT\nROLLBACK", "expectedOutput": "true false true false false"}
    ],
    "starterCode": {
      "python": "class Twitter:\n    def __init__(self):\n        pass\n    def postTweet(self, userId: int, tweetId: int) -> None:\n        pass\n    def getNewsFeed(self, userId: int) -> list:\n        return []\n    def follow(self, followerId: int, followeeId: int) -> None:\n        pass\n    def unfollow(self, followerId: int, followeeId: int) -> None:\n        pass\n    def beginTransaction(self) -> bool:\n        return False\n    def commit(self) -> bool:\n        return False\n    def rollback(self) -> bool:\n        return False",
      "cpp": "class Twitter {\npublic:\n    Twitter() {}\n    void postTweet(int userId, int tweetId) {}\n    vector<int> getNewsFeed(int userId) { return {}; }\n    void follow(int followerId, int followeeId) {}\n    void unfollow(int followerId, int followeeId) {}\n    bool beginTransaction() { return false; }\n    bool commit() { return false; }\n    bool rollback() { return false; }\n};",
      "java": "class Twitter {\n    public Twitter() {}\n    public void postTweet(int userId, int tweetId) {}\n    public List<Integer> getNewsFeed(int userId) { return new ArrayList<>(); }\n    public void follow(int followerId, int followeeId) {}\n    public void unfollow(int followerId, int followeeId) {}\n    public boolean beginTransaction() { return false; }\n    public boolean commit() { return false; }\n    public boolean rollback() { return false; }\n}",
      "c": "void postTweet(int userId, int tweetId) {}\nint getNewsFeed(int userId, int* out) { return 0; }\nvoid follow(int followerId, int followeeId) {}\nvoid unfollow(int followerId, int followeeId) {}\nint beginTransaction() { return 0; }\nint commit() { return 0; }\nint rollback() { return 0; }"
    }
  },
  {
    "id": "twt-h5",
    "title": "Design Twitter with Nested Transactions",
    "difficulty": "Hard",
    "description": "Implement nested transactions. BEGIN starts a new transaction level. COMMIT applies the current level's changes to its parent level. ROLLBACK discards the current level's changes. The outermost COMMIT persists changes globally.",
    "constraints": ["1 <= userId, tweetId <= 10^5", "1 <= q <= 1000"],
    "examples": [{"input": "9\nBEGIN\nPOST 1 101\nBEGIN\nPOST 1 102\nROLLBACK\nGET_FEED 1\nCOMMIT\nGET_FEED 1\nROLLBACK", "output": "true true true # true 101 false"}],
    "testCases": [
      {"input": "11\nBEGIN\nPOST 1 101\nBEGIN\nPOST 1 102\nCOMMIT\nGET_FEED 1\nCOMMIT\nGET_FEED 1\nBEGIN\nROLLBACK\nROLLBACK", "expectedOutput": "true true true # true 102,101 true true false"},
      {"input": "6\nCOMMIT\nROLLBACK\nBEGIN\nCOMMIT\nCOMMIT\nROLLBACK", "expectedOutput": "false false true true false false"}
    ],
    "starterCode": {
      "python": "class Twitter:\n    def __init__(self):\n        pass\n    def postTweet(self, userId: int, tweetId: int) -> None:\n        pass\n    def getNewsFeed(self, userId: int) -> list:\n        return []\n    def follow(self, followerId: int, followeeId: int) -> None:\n        pass\n    def unfollow(self, followerId: int, followeeId: int) -> None:\n        pass\n    def beginTransaction(self) -> bool:\n        return False\n    def commit(self) -> bool:\n        return False\n    def rollback(self) -> bool:\n        return False",
      "cpp": "class Twitter {\npublic:\n    Twitter() {}\n    void postTweet(int userId, int tweetId) {}\n    vector<int> getNewsFeed(int userId) { return {}; }\n    void follow(int followerId, int followeeId) {}\n    void unfollow(int followerId, int followeeId) {}\n    bool beginTransaction() { return false; }\n    bool commit() { return false; }\n    bool rollback() { return false; }\n};",
      "java": "class Twitter {\n    public Twitter() {}\n    public void postTweet(int userId, int tweetId) {}\n    public List<Integer> getNewsFeed(int userId) { return new ArrayList<>(); }\n    public void follow(int followerId, int followeeId) {}\n    public void unfollow(int followerId, int followeeId) {}\n    public boolean beginTransaction() { return false; }\n    public boolean commit() { return false; }\n    public boolean rollback() { return false; }\n}",
      "c": "void postTweet(int userId, int tweetId) {}\nint getNewsFeed(int userId, int* out) { return 0; }\nvoid follow(int followerId, int followeeId) {}\nvoid unfollow(int followerId, int followeeId) {}\nint beginTransaction() { return 0; }\nint commit() { return 0; }\nint rollback() { return 0; }"
    }
  }
]
