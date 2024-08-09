#!/bin/bash
set -e

# Run the original entrypoint script
docker-entrypoint.sh postgres &

# Wait for PostgreSQL to start
until pg_isready -h localhost -p 5432 -U ${POSTGRES_USER:-postgres}
do
  echo "Waiting for postgres to start..."
  sleep 2
done

# Check if the database is newly created
if [ ! -f "/var/lib/postgresql/data/DB_INITIALIZED" ]; then
  echo "Database is newly created. Running population script..."

  # Run the population script using the bun service
  docker-compose run --rm bun bunx ts-node -P /app/tsconfig.ts-node.json /app/scripts/populate-database.ts

  # Mark the database as initialized
  touch /var/lib/postgresql/data/DB_INITIALIZED
else
  echo "Database already initialized. Skipping population script."
fi

# Keep the container running
wait
