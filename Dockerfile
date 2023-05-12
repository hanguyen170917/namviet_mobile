FROM node:lts

WORKDIR /usr/app
COPY ./ /usr/app

RUN yarn
RUN yarn build

ENV HOST 0.0.0.0
EXPOSE 8080

CMD ["yarn", "preview"]
