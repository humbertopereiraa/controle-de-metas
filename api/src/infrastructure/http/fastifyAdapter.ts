import fastify from "fastify"
import HTTP from "../../domain/adapters/aHttp"
import { StatusCode } from "../../utils/statusCode"

export class FastifyAdapter extends HTTP {

  app = fastify()

  on(url: string, metodo: "get" | "post" | "put" | "delete", fn: any) {
    this.app[metodo](url, async (req: any, reply: any) => {
      try {
        const output = await fn(req)
        return reply.code(StatusCode.OK).send(output)
      } catch (error) {
        return reply.code(StatusCode.SERVER_ERROR).send(error)
      }
    })
  }

  async listen(porta: number): Promise<void> {
    await this.app.listen({ port: porta })
    console.log(`Servidor Fastify rodando na porta: ${porta}`)
  }

  protected authMiddleware(...params: any[]) {
    throw new Error("Method not implemented.")
  }
}