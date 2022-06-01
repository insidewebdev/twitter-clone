import { prisma } from ".";

export const createMediaFile = (mediaFile) => {
    return prisma.mediaFile.create({
        data: mediaFile
    })
}
