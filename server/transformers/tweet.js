import { mediaFilesTransformer } from "./mediaFiles.js"
import { userTransformer } from "./user.js"

export const tweetTransformer = (tweet) => {
    return {
        id: tweet.id,
        text: tweet.text,
        mediaFiles: !!tweet.mediaFiles ? tweet.mediaFiles.map(mediaFilesTransformer) : [],
        author: !!tweet.author ? userTransformer(tweet.author) : null,
        replyTo: !!tweet.replyTo ? tweetTransformer(tweet.replyTo) : null,
        replies: !!tweet.replies ? tweet.replies.map(tweetTransformer) : []
    }
}