import { IConexao } from "../../domain/adapters/iConexao"
import { Meta } from "../../domain/entities/meta"
import { IMetasRepository } from "../../domain/repository/iMetasRepository"

export class MetasRepositoryImp implements IMetasRepository {

  constructor(private conexao: IConexao) { }

  async inserir(meta: Meta): Promise<Meta> {
    const { id, titulo, frequenciaSemanalDesejada } = meta.toObject()
    const sql = 'INSERT INTO metas (id, titulo, frequencia_semanal_desejada) VALUES ($1,$2,$3) RETURNING *'
    const result = await this.conexao.query(sql, [id, titulo, frequenciaSemanalDesejada])
    const row = result?.rows[0] as any
    return new Meta(row.id, row.titulo, row.frequencia_semanal_desejada, row.criado_em)
  }
}
