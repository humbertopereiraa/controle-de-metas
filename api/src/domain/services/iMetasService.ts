import { MetaDTO } from "../../application/dtos/metaDTO"

export interface IMetasService {
  inserir(input: NmetasService.InputInserirMeta): Promise<MetaDTO>
}

export namespace NmetasService {
  export type InputInserirMeta = {
    titulo: string,
    frequenciaSemanalDesejada: number
  }
}