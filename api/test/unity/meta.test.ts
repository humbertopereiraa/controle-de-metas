import { Meta } from '../../src/domain/entities/meta'
import { MetaError } from '../../src/domain/errors/metaError'

describe('Meta Entity', () => {

  it('Deve criar uma entidade Meta com sucesso com dados válidos: ', () => {
    const meta = new Meta('1', 'Teste', 3)
    const sut = meta.toObject()

    expect(sut.id).toBe('1')
    expect(sut.titulo).toBe('Teste')
    expect(sut.frequenciaSemanalDesejada).toBe(3)
    expect(sut.criadoEm).toBeInstanceOf(Date)
  })

  it('Deve lançar MetaError se titulo tiver menos de 3 caracteres: ', () => {
    expect(() => new Meta('1', 'No', 3)).toThrow(MetaError)
    expect(() => new Meta('1', 'No', 3)).toThrow('Título deve ser uma string e conter mais de 3 caracteres!')
  })

  it('Deve lançar MetaError se frequenciaSemanalDesejada for menor que 1: ', () => {
    expect(() => new Meta('1', 'Teste', 0)).toThrow(MetaError)
    expect(() => new Meta('1', 'Teste', 0)).toThrow('FrequenciaSemanalDesejada deve ser maior que 0!')
  })

  it('Deve atribuir automaticamente criadoEm se não for fornecido: ', () => {
    const meta = new Meta('1', 'Teste', 3)
    const sut = meta.toObject()

    expect(sut.criadoEm).toBeInstanceOf(Date)
  })
})