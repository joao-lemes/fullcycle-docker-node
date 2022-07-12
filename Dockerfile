FROM node:lts-alpine3.16

WORKDIR /usr/src/app

COPY ./app /usr/src/app

EXPOSE 3000

CMD [ "node", "index.js" ]
