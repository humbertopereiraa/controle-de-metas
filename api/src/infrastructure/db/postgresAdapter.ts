import { configuracoes } from "../../configuracoes"
import Pool from 'pg-pool'
import { IConexao } from "../../domain/adapters/iConexao"
import { PoolClient } from "pg"

export class PostgresAdapter implements IConexao {

  private readonly pool: any

  constructor() {
    this.pool = new Pool({
      connectionString: configuracoes.DATABASE_URL
    })
  }

  async query(query: string, parameters: any): Promise<any> {
    const client = await this.pool.connect()
    try {
      const result = await client.query(query, parameters)
      return result
    } finally {
      client.release()
    }
  }

  async getClient(): Promise<PoolClient> {
    return this.pool.connect()
  }

  async testarConexao(): Promise<boolean> {
    try {
      const client = await this.pool.connect()
      client.release()
      console.log('Banco de dados conectado!')
      return true
    } catch (error) {
      console.error('Erro ao conectar com o Banco de dados:', error)
      return false
    }
  }

  // Finaliza a pool de conexões (útil após testes)
  async end(): Promise<void> {
    await this.pool.end()
  }
}