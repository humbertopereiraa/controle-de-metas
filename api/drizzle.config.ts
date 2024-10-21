import { defineConfig } from 'drizzle-kit'
import { configuracoes } from './src/configuracoes'

export default defineConfig({
  schema: "./src/infrastructure/db/schema.ts",
  out: './.migrations/',
  dialect: 'postgresql',
  dbCredentials: {
    url: configuracoes.DATABASE_URL
  }
})