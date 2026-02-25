FROM alpine:3.20
RUN apk add --no-cache git bash coreutils findutils nodejs npm
WORKDIR /assets-init
COPY init.sh .
COPY optimize.js .
RUN chmod +x init.sh
ENTRYPOINT ["./init.sh"]
