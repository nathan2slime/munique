import pino from 'pino'

const config = {
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  }
}
export const logger = pino(config)
