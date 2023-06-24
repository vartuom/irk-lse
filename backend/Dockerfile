FROM node:16-alpine as builder
WORKDIR /app
COPY package*.json .
RUN npm i
COPY . .
RUN npm run build

FROM node:16-alpine as production
WORKDIR /app
COPY --from=builder /app/package*.json .
RUN npm i --omit=dev && npm i pm2 -g
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/ecosystem.config.js .
EXPOSE 3000
CMD [ "pm2-runtime", "start", "ecosystem.config.js"]