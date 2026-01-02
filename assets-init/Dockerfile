FROM alpine:3.20
RUN apk add --no-cache git bash coreutils findutils
WORKDIR /app
COPY init.sh /app/init.sh
RUN chmod +x /app/init.sh
ENTRYPOINT ["/app/init.sh"]
