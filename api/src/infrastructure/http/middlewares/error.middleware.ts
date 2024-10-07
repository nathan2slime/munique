import { NextFunction, Request, Response } from 'express'
import { HttpRequestError } from '~/domain/errors/error.handler'

export const errorMiddleware = (
  error: HttpRequestError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (error.status) {
    res
      .status(error.status)
      .json({ status: error.status, message: error.message })

    return
  }

  res.status(500).json({ status: 500, message: 'Internal Server Error' })
}
