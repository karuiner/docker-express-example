FROM node:12-alpine
WORKDIR /app
COPY package.json /app
COPY . /app
RUN npm install
CMD [ "npm", "start" ]
EXPOSE 4000