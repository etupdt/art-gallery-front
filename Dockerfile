FROM node:latest

WORKDIR /usr/src/app

RUN npm install -g @angular/cli@latest

COPY ./package.json ./

RUN npm install

EXPOSE 4200

COPY . .

#RUN cd /usr/src/app/
RUN pwd
RUN ls -lrt

CMD ["ng", "serve", "--host", "0.0.0.0"]

