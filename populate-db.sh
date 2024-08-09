#!/bin/bash
set -e

# Wait for PostgreSQL to be ready
until pg_isready -h localhost -p 5432 -U ${POSTGRES_USER:-postgres}
do
  echo "Waiting for postgres to start..."
  sleep 2
done

# Run the population script using bun
docker-compose run --rm bun bunx ts-node -P /app/tsconfig.json /app/scripts/populate-database.ts
