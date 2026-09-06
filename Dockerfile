FROM oven/bun:1-alpine AS builder

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

# 生产阶段：纯静态文件 serve
FROM oven/bun:1-alpine

WORKDIR /app

RUN bun add -g serve

COPY --from=builder /app/dist ./dist

EXPOSE 8443

CMD ["serve", "-s", "dist", "-l", "8443"]
