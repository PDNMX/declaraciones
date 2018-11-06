FROM node:10-alpine

MAINTAINER Sergio Rodríguez <sergio.rdzsg@gmail.com>

ADD . /demo_declaraciones/backend
WORKDIR /demo_declaraciones/backend

RUN yarn add global yarn \
&& yarn install \
&& yarn cache clean

EXPOSE 3000

CMD ["yarn", "start"]
