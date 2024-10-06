import { Router } from 'express'

import { documentRouter } from '~/infrastructure/http/routes/document.route'
import { userRouter } from '~/infrastructure/http/routes/user.route'

export const route: Router = Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     Error:
 *       type: object
 *       properties:
 *         status:
 *           type: number
 *           example: 404
 *         message:
 *           type: string
 *           example: "Internal Server Error"
 */

route.use('/user', userRouter)
route.use('/document', documentRouter)
