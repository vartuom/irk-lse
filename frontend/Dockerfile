FROM node:16-alpine AS builder
WORKDIR /app
COPY package*.json .
RUN npm i
COPY . .
RUN npm run build

FROM nginx:latest
COPY --from=builder /app/build ./usr/share/nginx/html
COPY /nginx/conf.d/default.conf ./etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]