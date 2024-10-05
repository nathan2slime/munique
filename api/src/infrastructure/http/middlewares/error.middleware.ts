import { NextFunction, Request, Response } from 'express'
import { HttpRequestError } from '~/domain/errors/error.handler'

export const errorMiddleware = (
  error: HttpRequestError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  res
    .status(error.status)
    .json({ status: error.status, message: error.message })
}

