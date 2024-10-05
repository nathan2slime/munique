import { NextFunction, Request, RequestHandler, Response } from 'express'
import { validate } from 'class-validator'
import { ClassConstructor, plainToInstance } from 'class-transformer'

export const validatorMiddleware =
  <T extends ClassConstructor<object>>(type: T): RequestHandler =>
  async (req: Request, res: Response, next: NextFunction) => {
    const body = plainToInstance(type, req.body)
    const errors = await validate(body)

    if (body && errors.length == 0) {
      req.body = body
      next()
    } else {
      res.status(400).json(errors)
    }
  }
