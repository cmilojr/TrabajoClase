FROM node
ENV NODE_VERSION 14

WORKDIR /app
COPY /package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD [ "npm", "start" ]

# https://hub.docker.com/repository/docker/cmilojr/red-bicicletas