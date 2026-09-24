FROM node:20-alpine as engine-builder
WORKDIR /engine
COPY touhou-web-engine ./
RUN npm install && npm run build

FROM node:20-alpine as frontend-builder
WORKDIR /app
COPY --from=engine-builder /engine/dist /app/public/th08-assets
COPY package.json bun.lock ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=frontend-builder /app/dist /usr/share/nginx/html
