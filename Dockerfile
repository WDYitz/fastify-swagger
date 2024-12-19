FROM node:22.0.0 as build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
