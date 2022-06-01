import { tweetTransformer } from "~~/server/transformers/tweet.js"
import { getTweets } from "../../db/tweets.js"

export default defineEventHandler(async event => {

    const tweets = await getTweets()

    return {
        tweets: tweets.map(tweetTransformer)
    }
})