export const designTwitterQuiz = [
  {
    question: 'What is the primary trade-off of the Pull Model (fan-out-on-read) in feed generation?',
    options: ['Fast reads, slow writes', 'Slow reads, fast writes', 'Slow reads, slow writes', 'Fast reads, fast writes'],
    correctAnswer: 'Slow reads, fast writes',
    explanation: 'In the Pull Model, posting a tweet is very fast O(1), but generating a news feed requires querying and merging tweets from all followees, which is slow.'
  },
  {
    question: 'Which model is susceptible to the "Celebrity Problem"?',
    options: ['Pull Model', 'Push Model', 'Hybrid Model', 'None of the above'],
    correctAnswer: 'Push Model',
    explanation: 'In the Push Model, when a celebrity with millions of followers posts a tweet, the system must write that tweet to millions of feed caches, causing a massive write bottleneck.'
  },
  {
    question: 'What is the most efficient way to merge K sorted lists of tweets for a news feed?',
    options: ['Merge sort all tweets', 'Quick sort all tweets', 'Using a Min-Heap / Priority Queue of size K', 'Linear scanning of each list consecutively'],
    correctAnswer: 'Using a Min-Heap / Priority Queue of size K',
    explanation: 'A heap allows us to find the most recent tweet across K sorted lists in O(log K) time per tweet, taking O(N log K) overall.'
  },
  {
    question: 'If user A blocks user B, what should be the immediate side effect on following relationships?',
    options: ['A unfollows B, but B still follows A', 'B unfollows A, but A still follows B', 'Both A unfollows B and B unfollows A', 'Nothing, blocks only filter the feed'],
    correctAnswer: 'Both A unfollows B and B unfollows A',
    explanation: 'A block must sever all connection paths. Thus, A unfollows B, B unfollows A, and future follow attempts are blocked.'
  },
  {
    question: 'In nested transactions, what happens when you call ROLLBACK at the second level?',
    options: ['All changes since the start of the program are undone', 'Only changes made in the second transaction level are undone', 'The transaction is committed automatically', 'Nothing happens'],
    correctAnswer: 'Only changes made in the second transaction level are undone',
    explanation: 'A rollback at a nested level reverts changes back to the snapshot taken at the start of that specific nested transaction.'
  },
  {
    question: 'Why is a directed graph used to represent followers in Twitter?',
    options: ['Following is a symmetrical relationship', 'Following is an asymmetrical/one-way relationship', 'It optimizes database lookups', 'To prevent cycles'],
    correctAnswer: 'Following is an asymmetrical/one-way relationship',
    explanation: 'Unlike Facebook friendships (undirected), Twitter following is one-way (A can follow B without B following A).'
  },
  {
    question: 'Which of the following is true when a user retweets a tweet in an optimal system?',
    options: ['A new tweet is created with duplicate text', 'A reference to the original tweetId is posted to the user timeline', 'The retweeter takes ownership of the original tweet', 'The original tweet is deleted'],
    correctAnswer: 'A reference to the original tweetId is posted to the user timeline',
    explanation: 'A retweet stores a reference to the original tweetId, allowing the feed to display the original tweet while attributing the post action to the retweeter.'
  },
  {
    question: 'In a mute feature, does user A still see user B\'s tweets in their news feed?',
    options: ['Yes, muting has no effect on feeds', 'No, muted users\' tweets are filtered out from the feed', 'Only if B follows A', 'Only if B likes A\'s tweets'],
    correctAnswer: 'No, muted users\' tweets are filtered out from the feed',
    explanation: 'No, muted users\' tweets are filtered out from the feed, but B can still follow A and interact with A\'s posts.'
  },
  {
    question: 'What happens to trending hashtags when a tweet containing hashtags is deleted?',
    options: ['The hashtag counts remain unchanged', 'The counts of all hashtags in that tweet are decremented', 'All trending hashtags are reset', 'The hashtags are banned'],
    correctAnswer: 'The counts of all hashtags in that tweet are decremented',
    explanation: 'Deleting a tweet must clean up all its associations, meaning the count of the hashtags it contained must be decremented.'
  },
  {
    question: 'What is the purpose of feed pagination?',
    options: ['To store more tweets in the database', 'To retrieve tweets in random order', 'To load feed in chunks, improving performance and reducing payload size', 'To enforce tweet length limits'],
    correctAnswer: 'To load feed in chunks, improving performance and reducing payload size',
    explanation: 'Pagination loads only a small subset of tweets (e.g. 10 per page) at a time, lowering memory and network overhead.'
  }
];
