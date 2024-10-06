import { parseEnv } from 'znv'
import { z } from 'zod'
import { config } from 'dotenv'

config()

export const { NODE_ENV } = parseEnv(process.env, {
  NODE_ENV: z
    .enum(['production', 'test', 'development'] as const)
    .default('development')
})

const envSchema = {
  DATABASE_URL: z.string().url(),
  HOST: z.string().url(),
  PORT: z.string().min(1).default('3000'),
}

export const env =
  NODE_ENV == 'test' ? process.env : parseEnv(process.env, envSchema)
