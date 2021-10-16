#stage1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run ng -- build --prod

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/ROS-UI-WEB /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD [ "nginx","-g","daemon off;" ]