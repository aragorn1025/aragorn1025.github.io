FROM node:18-alpine3.15
LABEL maintainer="aragorn1025 tzjie.dai@gmail.com" \
      version="v1.0.0"

WORKDIR /home/node/app
COPY package.json ./
COPY package-lock.json ./
RUN apk add --no-cache git openssh-client && \
    npm install

EXPOSE 3000
CMD [ "npm", "run", "start" ]
