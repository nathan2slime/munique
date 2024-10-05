import { Router } from 'express'

import { userRouter } from '~/infrastructure/http/routes/user.route'

export const route: Router = Router()

route.use('/user', userRouter)
