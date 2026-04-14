# Stage 1 — build React app
FROM node:18-alpine AS build
WORKDIR /app

ARG REACT_APP_API_BASE_URL=http://localhost:3001
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2 — serve with Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80