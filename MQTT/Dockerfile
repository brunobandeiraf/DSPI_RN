FROM golang as build

WORKDIR /app

COPY . .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o mqtt
COPY server-cert.pem /usr/local/share/ca-certificates/server-cert.crt
RUN update-ca-certificates

FROM scratch

COPY --from=build /app/mqtt /mqtt
COPY --from=build /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/ca-certificates.crt
COPY --from=build /etc/passwd /etc/passwd

ENTRYPOINT [ "/mqtt" ]