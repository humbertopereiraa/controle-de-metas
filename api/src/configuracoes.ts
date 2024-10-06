import z from 'zod'

const envSchema = z.object({
  HTTP_PORT: z.string(),
  DATABASE_URL: z.string().url()
})

export const configuracoes = envSchema.parse(process.env)