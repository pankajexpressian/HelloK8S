FROM node:lts-alpine3.16

WORKDIR /app

COPY package*.json ./app

RUN npm install

COPY . /app

EXPOSE 3333

CMD ["npm", "start"]