import { NextFunction, Request, Response } from 'express'
import { HttpRequestError } from '~/domain/errors/error.handler'

export const errorMiddleware = (
  error: HttpRequestError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res
    .status(error.status)
    .json({ status: error.status, message: error.message })
}

export const handleError =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next)
