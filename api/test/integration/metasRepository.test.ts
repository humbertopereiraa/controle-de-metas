import { PoolClient } from 'pg'
import { PostgresAdapter } from '../../src/infrastructure/db/postgresAdapter'
import { MetasRepositoryImp } from '../../src/infrastructure/repository/metasRepositoryImp'
import { Meta } from '../../src/domain/entities/meta'

describe.only('MetasRepository Teste de Integração', () => {
  let conexao: PostgresAdapter
  let client: PoolClient
  let repository: MetasRepositoryImp

  beforeAll(async () => {
    conexao = new PostgresAdapter()
    client = await conexao.getClient()
    repository = new MetasRepositoryImp(client as any)
  })

  beforeEach(async () => {
    await client.query('BEGIN')
  })

  afterEach(async () => {
    await client.query('ROLLBACK')
  })

  afterAll(async () => {
    client.release()
    await conexao.end()
  })

  it('Deve inserir um novo Meta no banco de dados e retorná-lo: ', async () => {
    const meta = new Meta('1', 'Teste de Integração', 3)
    const sut = (await repository.inserir(meta)).toObject()

    expect(sut).toBeTruthy()
    expect(sut.id).toBe('1')
    expect(sut.titulo).toBe('Teste de Integração')
    expect(sut.frequenciaSemanalDesejada).toBe(3)
  })
})