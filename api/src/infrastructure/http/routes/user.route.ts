import { Router } from 'express'

import { CreateUserDto } from '~/application/dtos/user.dto'
import { UserController } from '~/infrastructure/http/controllers/user.controller'
import { handleError } from '~/infrastructure/http/middlewares/error.middleware'
import { validatorMiddleware } from '~/infrastructure/http/middlewares/validator.middleware'

const userController = new UserController()

export const userRouter: Router = Router()

/**
 * @swagger
 * /user/create:
 *   post:
 *     summary: Create new user.
 *     description: Create new user.
 *     requestBody:
 *       required: true,
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *             example:
 *               name: John Doe
 *               email: example@gmail.com
 *     responses:
 *       '201':
 *         description: A successful response
 *       '409':
 *         description: Email is already in use
 *       '500':
 *         description: Internal server error
 */

userRouter.post(
  '/create',
  validatorMiddleware(CreateUserDto),
  handleError(userController.create)
)
