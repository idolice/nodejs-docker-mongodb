# nodejs-docker-mongodb

## install dependencies

install docker

please refer to https://docs.docker.com/docker-for-mac/

install npm modules

`$ npm install`

install mongo docker image from dockerhub

`$ docker pull mongo`

## run the application

run database

`$ docker run -itd -p 27017:27017 --name mongo-database -d mongo`

run application

`$ node server.js`

hit http://localhost:3000/api/v1/things?q=100

## run the application thought docker image (optional)

build image by yourself


`$ docker build -t <your username>/node-web-app .`

run as a container

`$ docker run -itd -p 3000:3000 --name no --link mongo-database:mongo-database <your username>/node-web-app`
