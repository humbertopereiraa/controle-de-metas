export class MetaDTO {
  constructor(
    public id: string,
    public titulo: string,
    public frequenciaSemanalDesejada: number,
    public criadoEm?: Date
  ) { }
}
