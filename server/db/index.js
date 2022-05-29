import Prisma from "@prisma/client"

const { PrismaClient } = Prisma

const prisma = new PrismaClient()

export { prisma }