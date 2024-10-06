import fastify from "fastify"
import HTTP from "./http"

export class FastifyAdapter extends HTTP {

  app = fastify()

  on(url: string, metodo: string, fn: () => any) {
    throw new Error("Method not implemented.")
  }

  async listen(porta: number): Promise<void> {
    await this.app.listen({ port: porta })
    console.log(`Servidor Fastify rodando na porta: ${porta}`)
  }

  protected authMiddleware(...params: any[]) {
    throw new Error("Method not implemented.")
  }
}