export const designTwitterCodeSnippets = {
  python: `class Twitter:
    def __init__(self):
        pass
    def postTweet(self, userId: int, tweetId: int) -> None:
        pass
    def getNewsFeed(self, userId: int) -> list:
        return []
    def follow(self, followerId: int, followeeId: int) -> None:
        pass
    def unfollow(self, followerId: int, followeeId: int) -> None:
        pass`,
  cpp: `class Twitter {
public:
    Twitter() {}
    void postTweet(int userId, int tweetId) {}
    vector<int> getNewsFeed(int userId) { return {}; }
    void follow(int followerId, int followeeId) {}
    void unfollow(int followerId, int followeeId) {}
};`,
  java: `class Twitter {
    public Twitter() {}
    public void postTweet(int userId, int tweetId) {}
    public List<Integer> getNewsFeed(int userId) { return new ArrayList<>(); }
    public void follow(int followerId, int followeeId) {}
    public void unfollow(int followerId, int followeeId) {}
}`,
  c: `// Starter C functions
void postTweet(int userId, int tweetId) {}
int getNewsFeed(int userId, int* out) { return 0; }
void follow(int followerId, int followeeId) {}
void unfollow(int followerId, int followeeId) {}`
};
