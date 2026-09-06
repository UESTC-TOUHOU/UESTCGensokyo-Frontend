FROM oven/bun:1-alpine AS builder

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/dist ./

COPY --from=builder /app/node_modules ./node_modules

EXPOSE 8443

CMD [ "npx", "serve", "-s", ".", "-l", "8443" ]