FROM node:18-alpine3.15
LABEL maintainer="aragorn1025 tzjie.dai@gmail.com"

WORKDIR /home/node/app
COPY package.json ./
COPY package-lock.json ./
COPY public/ ./public/
COPY src/ ./src/
RUN npm ci

EXPOSE 3000
CMD [ "npm", "run", "start" ]
