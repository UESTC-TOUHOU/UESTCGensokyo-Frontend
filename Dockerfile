FROM oven/bun:1-alpine as engine-builder
WORKDIR /engine
COPY touhou-web-engine ./
RUN bun install && bun run build

FROM oven/bun:1-alpine as frontend-builder
WORKDIR /app
COPY --from=engine-builder /engine/dist /app/public/th08-assets
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM nginx:alpine
COPY --from=frontend-builder /app/dist /usr/share/nginx/html
