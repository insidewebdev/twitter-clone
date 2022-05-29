import { prisma } from "."

export const createRefreshToken = (refreshToken) => {
    return prisma.refreshToken.create({
        data: refreshToken
    })
}