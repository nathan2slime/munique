import { Request, Response } from 'express'

import { UserService } from '~/application/services/user.service'

const userService = new UserService()

export class UserController {
  async create(req: Request, res: Response) {
    const user = await userService.create(req.body)

    res.status(201).json(user)
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id

    await userService.delete(id)

    res.status(200).send()
  }

  async show(req: Request, res: Response) {
    const users = await userService.show()

    res.status(200).json(users)
  }

  async getById(req: Request, res: Response) {
    const id = req.params.id;
    const user = await userService.getById(id)

    res.status(200).json(user)
  }
  
  async update(req: Request, res: Response) {
    const id = req.params.id

    const user = await userService.update(id, req.body)

    res.status(200).json(user)
  }
}
