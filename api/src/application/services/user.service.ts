import { CreateUserDto } from '~/application/dtos/user.dto'
import { HttpRequestError } from '~/domain/errors/error.handler'
import { db } from '~/infrastructure/database'
import { EMAIL_ALREADY_EXISTS } from '~/shared/config/errors'

export class UserService {
  async create(data: CreateUserDto) {
    const user = await db.user.findUnique({ where: { email: data.email } })

    if (user) throw new HttpRequestError(EMAIL_ALREADY_EXISTS, 409)

    return await db.user.create({ data })
  }

  async delete(id: string) {
    return await db.user.delete({ where: { id } })
  }
}
