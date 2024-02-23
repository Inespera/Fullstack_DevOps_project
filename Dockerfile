SÓ MESMO PARA SABER COMO FAZER

FROM node:latest as build 

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install

RUN npm run build

FROM nginx:latest

COPY --from=build /usr/local/app/dist/exercise1 /usr/share/nginx/html

EXPOSE 80