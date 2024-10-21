import { IUuidGenerator } from "../../domain/interfaces/iUuidGenerator"
import { v4 as uuidv4 } from 'uuid'

export class UuidGenerator implements IUuidGenerator {

  constructor() { }

  generate(): string {
    return uuidv4()
  }
}
