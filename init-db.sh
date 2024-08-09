#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER ${APP_USER} WITH PASSWORD '${APP_PASSWORD}';
    GRANT ALL PRIVILEGES ON DATABASE $POSTGRES_DB TO ${APP_USER};
EOSQL

# Run the populate script if the database is newly created
if [ ! -f "/var/lib/postgresql/data/DB_INITIALIZED" ]; then
    echo "Database is newly created. Running population script..."
    /populate-db.sh
    touch /var/lib/postgresql/data/DB_INITIALIZED
else
    echo "Database already initialized. Skipping population script."
fi

