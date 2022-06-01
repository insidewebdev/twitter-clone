import { prisma } from ".";


export const createTweet = (tweetData) => {
    return prisma.tweet.create({
        data: tweetData
    })
}

export const getTweets = () => {
    return prisma.tweet.findMany({
        include: {
            author: true,
            mediaFiles: true,
            replyTo: true,
            replies: true
        }
    })
}