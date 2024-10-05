import { Router } from 'express'

import {
  CreateUserDto,
  UpdateUserDto,
  UserIdDto
} from '~/application/dtos/user.dto'
import { syncHandler } from '~/domain/errors/sync.handler'
import { UserController } from '~/infrastructure/http/controllers/user.controller'
import { validatorMiddleware } from '~/infrastructure/http/middlewares/validator.middleware'

const userController = new UserController()

export const userRouter: Router = Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     UpdateUser:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: "Jhonathan"
 *     CreateNewUser:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: "example@gmail.com"
 *         name:
 *           type: string
 *           example: "Jhonathan"
 *     User:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: "example@gmail.com"
 *         id:
 *           type: string
 *           example: "74151ac9-7b82-4d39-aee2-0e4dc992818f"
 *         name:
 *           type: string
 *           example: "Jhonathan"
 */

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Operations related to users
 */

/**
 * @swagger
 * /user/create:
 *   post:
 *     summary: Create new user.
 *     description: Create new user.
 *     tags:
 *         - Users
 *     requestBody:
 *       required: true,
 *       content:
 *         application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateNewUser'
 *     responses:
 *       '201':
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '409':
 *         description: Email is already in use
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

userRouter.post(
  '/create',
  validatorMiddleware(CreateUserDto),
  syncHandler(userController.create)
)

/**
 * @swagger
 * /user/delete/{id}:
 *   delete:
 *     summary: Delete user.
 *     description: Delete user by id.
 *     tags:
 *         - Users
 *     parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          schema:
 *          type: string
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: User does not exists
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

userRouter.delete(
  '/delete/:id',
  validatorMiddleware(UserIdDto, 'params'),
  syncHandler(userController.delete)
)

/**
 * @swagger
 * /user/update/{id}:
 *   put:
 *     summary: Update user.
 *     description: Update user by id.
 *     tags:
 *         - Users
 *     parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          schema:
 *          type: string
 *     requestBody:
 *       required: true,
 *       content:
 *         application/json:
 *             schema:
 *               $ref: '#/components/schemas/UpdateUser'
 *     responses:
 *       '200':
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '404':
 *         description: User does not exists
 *       '500':
 *         description: Internal server error
 */

userRouter.put(
  '/update/:id',
  validatorMiddleware(UserIdDto, 'params'),
  validatorMiddleware(UpdateUserDto),
  syncHandler(userController.update)
)

/**
 * @swagger
 * /user/show:
 *   get:
 *     summary: Get all users.
 *     description: Get all users.
 *     tags:
 *         - Users
 *     responses:
 *       '200':
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       '404':
 *         description: User does not exists
 *       '500':
 *         description: Internal server error
 */

userRouter.get('/show', syncHandler(userController.show))

/**
 * @swagger
 * /user/describe/{id}:
 *   get:
 *     summary: Get user.
 *     description: Get user by id.
 *     tags:
 *         - Users
 *     parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          schema:
 *          type: string
 *     responses:
 *       '200':
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '404':
 *         description: User does not exists
 *       '500':
 *         description: Internal server error
 */

userRouter.get(
  '/describe/:id',
  validatorMiddleware(UserIdDto, 'params'),
  syncHandler(userController.getById)
)
