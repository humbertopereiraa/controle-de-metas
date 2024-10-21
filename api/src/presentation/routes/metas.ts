import { Conexao } from "../../app"
import { MetasService } from "../../application/services/metasService"
import HTTP from "../../domain/adapters/aHttp"
import { MetasRepositoryImp } from "../../infrastructure/repository/metasRepositoryImp"
import { UuidGenerator } from "../../infrastructure/uuid/UuidGenerator"
import { ControllerMetas } from "../controller/metasController"

const metasRepository = new MetasRepositoryImp(Conexao)
const uuidGenerator = new UuidGenerator()
const metasService = new MetasService(metasRepository, uuidGenerator)
const metasController = new ControllerMetas(metasService)

export = (servidor: HTTP) => {
  servidor.on('/metas', 'post', metasController.inserir.bind(metasController))
}