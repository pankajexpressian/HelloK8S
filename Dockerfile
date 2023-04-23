FROM node:13-alpine

RUN mkdir home/app

COPY . /home/app

RUN npm install

CMD ["node","index.js"]
