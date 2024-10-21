import { MetaDTO } from "../../application/dtos/metaDTO"
import { IMetasService } from "../../domain/services/iMetasService"
import { RequestGeneric } from "../interfaces/iRequestResponse"

interface MetaInput {
  titulo: string
  frequenciaSemanalDesejada: number
}

interface MetaRequest extends RequestGeneric<MetaInput> { }

export class ControllerMetas {
  constructor(private metasService: IMetasService) { }

  async inserir(req: MetaRequest): Promise<MetaDTO> {
    return new Promise<MetaDTO>(async (resolve, reject) => {
      try {
        const { titulo, frequenciaSemanalDesejada } = req.body
        const newMeta = await this.metasService.inserir({ titulo, frequenciaSemanalDesejada })
        resolve(newMeta)
      } catch (error: any) {
        reject(error)
      }
    })
  }
}
