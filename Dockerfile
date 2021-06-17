FROM node:14

RUN npm install

RUN npm run build

FROM nginx:alpine

COPY dist /usr/share/nginx/html/

# COPY .ci/app.conf /etc/nginx/nginx.conf
