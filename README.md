# nodejs-docker-mongodb

## install dependencies

`$ npm install`

Install mongo docker image from dockerhub

`$ docker pull mongo`

## run the application

run database

`$ docker run -itd -p 27017:27017 --name mongo-database -d mongo`

run application

`$ node server.js`

## run the application thought docker image

build image by yourself


`$ docker build -t <your username>/node-web-app .`

run as a container

`$ docker run -itd -p 3000:3000 --name <your image name> -d node-api-server .`







