FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN apt-get update -y && apt-get install -y openssl
COPY . /app
WORKDIR /app

# ARG NODE_ENV
# ARG DATABASE_URL
# ARG PORT

# ENV NODE_ENV=$NODE_ENV
# ENV DATABASE_URL=$DATABASE_URL
# ENV PORT=$PORT

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build
RUN pnpm db:push
RUN pnpm db:generate

FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist
EXPOSE 8080
CMD [ "pnpm", "start" ]
