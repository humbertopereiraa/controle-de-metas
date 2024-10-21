import { Meta } from "../entities/meta"

export interface IMetasRepository {
  inserir(meta: Meta): Promise<Meta>
}
