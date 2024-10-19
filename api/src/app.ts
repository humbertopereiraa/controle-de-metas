import { PostgresAdapter } from "./infrastructure/db/postgresAdapter"
import { FastifyAdapter } from "./infrastructure/http/fastifyAdapter"

export const Conexao = new PostgresAdapter()
export const Servidor = new FastifyAdapter()