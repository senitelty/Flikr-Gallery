FROM node:14.17

WORKDIR /var/www/app

COPY package*.json ./
COPY yarn*.lock ./
COPY .yarnrc*.yml ./
COPY .yarn ./
COPY .pnp*.js ./

COPY . .

RUN yarn set version berry
RUN yarn install

EXPOSE 3000

CMD [ "yarn", "start" ]