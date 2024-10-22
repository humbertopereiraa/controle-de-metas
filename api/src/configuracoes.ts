import z from 'zod'
import dotenv from 'dotenv'
dotenv.config()

const envSchema = z.object({
  HTTP_PORT: z.string(),
  DATABASE_URL: z.string().url()
})

export const configuracoes = envSchema.parse(process.env)