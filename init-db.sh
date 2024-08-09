#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER ${APP_USER:-appuser} WITH PASSWORD '${APP_PASSWORD:-apppassword}';
    GRANT ALL PRIVILEGES ON DATABASE $POSTGRES_DB TO ${APP_USER:-appuser};
EOSQL
