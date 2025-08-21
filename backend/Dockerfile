FROM node:lts

WORKDIR /usr/src/server

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3469

CMD [ "npm", "start" ]