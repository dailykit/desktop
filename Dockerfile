FROM nginx:1.15.2-alpine

ARG REALM
ARG ROOT_URL

WORKDIR /usr/src/app
COPY . .

COPY . /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
RUN echo "let realm = \"${REALM}\";" >> ./js/config.js 
RUN echo "let root_url = \"${ROOT_URL}\";" >> ./js/config.js 

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
