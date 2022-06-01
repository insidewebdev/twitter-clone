import { prisma } from ".";


export const createTweet = (tweetData) => {
    return prisma.tweet.create({
        data: tweetData
    })
}