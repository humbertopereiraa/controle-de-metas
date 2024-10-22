import { IMetasRepository } from '../../src/domain/repository/iMetasRepository'
import { IUuidGenerator } from '../../src/domain/interfaces/iUuidGenerator'
import { MetasService } from '../../src/application/services/metasService'
import { Meta } from '../../src/domain/entities/meta'
import { MetaDTO } from '../../src/application/dtos/metaDTO'
import { MetaError } from '../../src/domain/errors/metaError'

describe('MetasService', () => {
  let metasRepository: jest.Mocked<IMetasRepository>
  let uuidGenerator: jest.Mocked<IUuidGenerator>
  let metasService: MetasService

  beforeEach(() => {
    metasRepository = {
      inserir: jest.fn()
    } as jest.Mocked<IMetasRepository>

    uuidGenerator = {
      generate: jest.fn()
    } as jest.Mocked<IUuidGenerator>

    metasService = new MetasService(metasRepository, uuidGenerator)
  })

  describe('Inserir Meta: ', () => {
    it('Deve inserir um novo Meta e retornar um MetaDTO: ', async () => {
      const mockInput = {
        titulo: 'Teste',
        frequenciaSemanalDesejada: 3
      }
      const mockUUID = '123e4567-e89b-12d3-a456-426614174000'
      const mockMeta = new Meta(mockUUID, mockInput.titulo, mockInput.frequenciaSemanalDesejada)

      uuidGenerator.generate.mockReturnValue(mockUUID)
      metasRepository.inserir.mockResolvedValue(mockMeta)

      const sut = await metasService.inserir(mockInput)

      expect(uuidGenerator.generate).toHaveBeenCalled()
      expect(metasRepository.inserir).toHaveBeenCalledWith(expect.any(Meta))
      expect(sut).toBeInstanceOf(MetaDTO)
      expect(sut.id).toBe(mockUUID)
      expect(sut.titulo).toBe(mockInput.titulo)
      expect(sut.frequenciaSemanalDesejada).toBe(mockInput.frequenciaSemanalDesejada)
      expect(sut.criadoEm).toBeInstanceOf(Date)
    })

    it('Deve lançar MetaError se dados inválidos forem fornecidos: ', async () => {
      const invalidInput = {
        titulo: '',
        frequenciaSemanalDesejada: 0
      }
      uuidGenerator.generate.mockReturnValue('invalid-uuid')
      await expect(metasService.inserir(invalidInput)).rejects.toThrow(MetaError)
    })

  })
})