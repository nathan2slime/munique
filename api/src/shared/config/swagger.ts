import jsdoc, { Options } from 'swagger-jsdoc'

import { env } from '~/shared/config/env'

const config: Options = {
  swaggerDefinition: {
    info: {
      title: 'Munique',
      version: '1.0.0'
    },
    openapi: '3.0.0',
    servers: [
      {
        url: env.HOST,
      }
    ]
  },

  apis: ['./src/infrastructure/http/routes/*{.js,.ts}']
}

export const docs = jsdoc(config)
