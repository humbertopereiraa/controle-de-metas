import { MetaError } from "../errors/metaError"

export class Meta {

  private id: string
  private titulo: string
  private frequenciaSemanalDesejada: number
  private criadoEm: Date

  constructor(id: string, titulo: string, frequenciaSemanalDesejada: number, criadoEm?: Date) {
    this.id = id
    this.titulo = titulo
    this.frequenciaSemanalDesejada = frequenciaSemanalDesejada
    this.criadoEm = criadoEm ?? new Date()

    this.validar()
  }

  toObject() {
    return {
      id: this.id,
      titulo: this.titulo,
      frequenciaSemanalDesejada: this.frequenciaSemanalDesejada,
      criadoEm: this.criadoEm
    }
  }

  private validar(): void {
    if (!(typeof this.titulo === 'string' && this.titulo.length > 3)) {
      throw new MetaError('Título deve ser uma string e conter mais de 3 caracteres!')
    }

    if (this.frequenciaSemanalDesejada < 1) {
      throw new MetaError('FrequenciaSemanalDesejada deve ser maior que 0!')
    }
  }
}
