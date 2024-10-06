import { CreateDocumentDto } from '~/application/dtos/document.dto'
import { UpdateUserDto } from '~/application/dtos/user.dto'
import { UserService } from '~/application/services/user.service'
import { HttpRequestError } from '~/domain/errors/error.handler'
import { db } from '~/infrastructure/database'
import { DOCUMENT_NOT_EXISTS, USER_NOT_EXISTS } from '~/shared/config/errors'

const userService = new UserService()

export class DocumentService {
  async create({ userId, ...data }: CreateDocumentDto) {
    const user = await userService.getById(userId)

    if (user) {
      return db.document.create({
        data: { ...data, user: { connect: { id: userId } } },
        include: {
          user: true
        }
      })
    }

    throw new HttpRequestError(USER_NOT_EXISTS, 404)
  }

  async getById(id: string) {
    return db.document.findUnique({ where: { id } })
  }

  async delete(id: string) {
    const document = await this.getById(id)

    if (document) return await db.document.delete({ where: { id } })

    throw new HttpRequestError(DOCUMENT_NOT_EXISTS, 404)
  }

  async show() {
    return db.document.findMany()
  }

  async update(id: string, data: UpdateUserDto) {
    const document = await this.getById(id)

    if (document) {
      return db.document.update({ where: { id }, data })
    }

    throw new HttpRequestError(DOCUMENT_NOT_EXISTS, 404)
  }
}
