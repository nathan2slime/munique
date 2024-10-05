import express, { json } from 'express'
import * as swagger from 'swagger-ui-express'
import methodOverride from'method-override'
import cors from 'cors'

import { errorMiddleware } from '~/infrastructure/http/middlewares/error.middleware'
import { logger } from '~/infrastructure/logger'
import { route } from '~/infrastructure/http/routes'

import { env } from '~/shared/config/env'
import { docs } from '~/shared/config/swagger'

import 'reflect-metadata'

const app = express()

app.use(cors())
app.use(json())
app.use('/api', route)
app.use('/docs', swagger.serve, swagger.setup(docs))
app.use(methodOverride());
app.use(errorMiddleware)

app.listen(env.PORT, () =>
  logger.info('app running in http://localhost:' + env.PORT)
)
