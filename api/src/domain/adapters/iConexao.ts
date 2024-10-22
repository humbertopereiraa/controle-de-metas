export interface IConexao {
  query(sql: string, parametros: any[]): Promise<any>
  testarConexao(): Promise<boolean>
  getClient(): Promise<any>
  end(): Promise<void>
}
