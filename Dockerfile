FROM node:latest

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 5000

CMD node index.js
