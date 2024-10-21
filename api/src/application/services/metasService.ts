import { Meta } from "../../domain/entities/meta"
import { IUuidGenerator } from "../../domain/interfaces/iUuidGenerator"
import { IMetasRepository } from "../../domain/repository/iMetasRepository"
import { IMetasService, NmetasService } from "../../domain/services/iMetasService"
import { MetaDTO } from "../dtos/metaDTO"

export class MetasService implements IMetasService {

  constructor(private metasRepository: IMetasRepository, private iUuidGenerator: IUuidGenerator) { }

  async inserir(input: NmetasService.InputInserirMeta): Promise<MetaDTO> {
    const newID = this.iUuidGenerator.generate()
    const newMeta = await this.metasRepository.inserir(new Meta(newID, input?.titulo, input?.frequenciaSemanalDesejada))
    const { id, titulo, frequenciaSemanalDesejada, criadoEm } = newMeta.toObject()
    return new MetaDTO(id, titulo, frequenciaSemanalDesejada, criadoEm)
  }
}

