import { NextFunction, Request, Response } from 'express'

// Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.

export const syncHandler =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next)
