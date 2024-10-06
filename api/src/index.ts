import { Conexao, Servidor } from "./app"
import { configuracoes } from "./configuracoes"

const iniciarAplicacao = async () => {
  const bancoConectado = await Conexao.testarConexao()
  if (bancoConectado) Servidor.listen(parseInt(configuracoes.HTTP_PORT))
}

iniciarAplicacao()