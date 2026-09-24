FROM --platform=$BUILDPLATFORM oven/bun:1-alpine AS engine-builder
WORKDIR /engine
COPY touhou-web-engine ./
RUN bun install --frozen-lockfile && bun run build

FROM --platform=$BUILDPLATFORM oven/bun:1-alpine AS frontend-builder
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY --from=engine-builder /engine /engine
RUN cd /engine && bun link && cd /app && bun link @uestc-touhou/touhou-web-engine
COPY . .
COPY --from=engine-builder /engine/dist /app/public/th08-assets
RUN bun run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=frontend-builder /app/dist /usr/share/nginx/html
EXPOSE 80 8443
