FROM oven/bun:1-alpine as engine-builder
WORKDIR /engine
COPY touhou-web-engine ./
RUN bun install && bun run build

FROM oven/bun:1-alpine as frontend-builder
WORKDIR /app
COPY --from=engine-builder /engine /engine
RUN cd /engine && bun link
COPY package.json bun.lock ./
RUN bun link @uestc-touhou/touhou-web-engine && bun install --frozen-lockfile
COPY --from=engine-builder /engine/dist /app/public/th08-assets
COPY . .
RUN bun run build

FROM nginx:alpine
COPY --from=frontend-builder /app/dist /usr/share/nginx/html
