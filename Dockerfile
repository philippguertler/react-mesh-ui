FROM node:alpine AS builder
COPY . /opt
RUN cd /opt && \
  npm ci && \
  npm run build

FROM nginx:alpine
COPY --from=builder /opt/build /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
