export class MetaError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'MetaError'
  }
}
