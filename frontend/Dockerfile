FROM node:lts

WORKDIR /usr/src/client

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]