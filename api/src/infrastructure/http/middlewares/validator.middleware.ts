import { NextFunction, Request, RequestHandler, Response } from 'express'
import { validate } from 'class-validator'
import { ClassConstructor, plainToInstance } from 'class-transformer'

export const validatorMiddleware =
  <T extends ClassConstructor<object>>(
    type: T,
    target: 'body' | 'params' = 'body'
  ): RequestHandler =>
  async (req: Request, res: Response, next: NextFunction) => {
    const instance = plainToInstance(type, req[target])
    const errors = await validate(instance)

    if (instance && errors.length == 0) {
      req[target] = instance
      next()
    } else {
      res.status(400).json(errors)
    }
  }
