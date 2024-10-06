import { PostgresAdapter } from "./infra/db/postgresAdapter"
import { FastifyAdapter } from "./infra/http/fastifyAdapter"

export const Conexao = new PostgresAdapter()
export const Servidor = new FastifyAdapter()