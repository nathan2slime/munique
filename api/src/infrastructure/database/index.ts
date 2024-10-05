import { PrismaClient } from '@prisma/client'

import { NODE_ENV } from '~/shared/config/env'

const createPrismaClient = () =>
  new PrismaClient({
    log: ['query', 'error', 'warn', 'info']
  })

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined
}

export const db = globalForPrisma.prisma ?? createPrismaClient()

if (NODE_ENV !== 'production') globalForPrisma.prisma = db
