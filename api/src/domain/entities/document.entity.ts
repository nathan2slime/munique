import { User } from '~/domain/entities/user.entity'

export class Document {
  status: string
  name: string
  user: User
  userId: string
}
