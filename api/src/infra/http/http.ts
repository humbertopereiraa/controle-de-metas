import path from "path"
import fs from 'fs'

export default abstract class HTTP {
  abstract on(url: string, metodo: string, fn: any): any
  abstract listen(porta: number): void
  protected abstract authMiddleware(...params: any[]): any

  carregarRotas(servidor: any): void {
    const diretorio = `${path.join(__dirname, '../../', 'presentation//routes')}`
    fs.readdirSync(diretorio).forEach((arquivo) => {
      const caminho = path.join(diretorio, arquivo)
      const pasta = fs.statSync(caminho).isDirectory()
      if (pasta) {
        fs.readdirSync(caminho).forEach((arquivo1) => {
          const caminhoDoArquivo = path.join(diretorio, arquivo, arquivo1)
          this.addServidorEmRotas(caminhoDoArquivo, arquivo1, servidor)
        })
      } else {
        const caminhoDoArquivo = path.join(diretorio, arquivo)
        this.addServidorEmRotas(caminhoDoArquivo, arquivo, servidor)
      }
    })
  }

  private addServidorEmRotas(caminhoDoArquivo: string, arquivo: string, servidor: any): void {
    const includeFn = require(caminhoDoArquivo)
    includeFn(servidor)
  }
}
