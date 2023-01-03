FROM node:18-alpine3.15
LABEL maintainer="aragorn1025 tzjie.dai@gmail.com"

WORKDIR /home/node/app
COPY . .
RUN apk add --no-cache git openssh-client && \
    npm ci

EXPOSE 3000
CMD [ "npm", "run", "start" ]
