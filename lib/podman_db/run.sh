#!/bin/bash
POSTGRES_USER=postgres
POSTGRES_PASSWORD=9%0nVDiMXk-r


podman run \
  --rm \
  --name test-db \
  -v ./lib/dev_db:/var/lib/postgresql/data:Z \
  -p 5432:5432 \
  -e POSTGRES_USER=$POSTGRES_USER \
  -e POSTGRES_PASSWORD=$POSTGRES_PASSWORD \
  docker.io/library/postgres:latest