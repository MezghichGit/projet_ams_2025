FROM node:22.0.0 AS builder

WORKDIR /app


COPY package.json package-lock.json ./


RUN npm install


COPY . .


RUN npm run build


FROM nginx:latest


COPY --from=builder /app/dist/xsupply-front/browser /usr/share/nginx/html


COPY /nginx-custom.conf /etc/nginx/conf.d/default.conf


EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
