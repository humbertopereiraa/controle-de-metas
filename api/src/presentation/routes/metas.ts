import HTTP from "../../domain/adapters/aHttp"
import { ControllerMetas } from "../controller/metasController"

const metasController = new ControllerMetas()

export = (servidor: HTTP) => {
  servidor.on('/metas', 'post', metasController.inserir.bind(metasController))
}