import { CreateUserDto, UpdateUserDto } from '~/application/dtos/user.dto'
import { HttpRequestError } from '~/domain/errors/error.handler'
import { db } from '~/infrastructure/database'
import { EMAIL_ALREADY_EXISTS, USER_NOT_EXISTS } from '~/shared/config/errors'

export class UserService {
  async create(data: CreateUserDto) {
    const user = await db.user.findUnique({ where: { email: data.email } })

    if (user) throw new HttpRequestError(EMAIL_ALREADY_EXISTS, 409)

    return db.user.create({ data })
  }

  async getById(id: string) {
    return db.user.findUnique({ where: { id } })
  }

  async delete(id: string) {
    const user = await this.getById(id)

    if (user) return await db.user.delete({ where: { id } })

    throw new HttpRequestError(USER_NOT_EXISTS, 404)
  }

  async show() {
    return db.user.findMany()
  }

  async update(id: string, data: UpdateUserDto) {
    const user = await this.getById(id)

    if (user) {
      return db.user.update({ where: { id }, data })
    }

    throw new HttpRequestError(USER_NOT_EXISTS, 404)
  }
}
