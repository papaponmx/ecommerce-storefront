#!/bin/bash

# Load environment variables from the .env file
export $(grep -v '^#' $(dirname "$0")/../.env | xargs)

# Ensure environment variables are set
if [ -z "$POSTGRES_USER" ] || [ -z "$POSTGRES_PASSWORD" ] || [ -z "$POSTGRES_DB" ] || [ -z "$POSTGRES_DB_PORT" ] || [ -z "$APP_USER" ] || [ -z "$APP_PASSWORD" ]; then
  echo "One or more environment variables are missing in the .env file."
  exit 1
fi

# Define the Docker container name
DOCKER_CONTAINER_NAME="ecommerce_postgres"

# Define the backup path on the host
BACKUP_PATH=$(dirname "$0")/../backups
mkdir -p $BACKUP_PATH

# Define the backup file name with a timestamp
BACKUP_FILE="${POSTGRES_DB}_$(date +%Y%m%d%H%M%S).backup"
CONTAINER_BACKUP_PATH="/tmp/$BACKUP_FILE"

# Run the pg_dump command inside the Docker container
docker exec -e PGPASSWORD=$POSTGRES_PASSWORD $DOCKER_CONTAINER_NAME pg_dump -U $POSTGRES_USER -h localhost -p $POSTGRES_DB_PORT -F c -b -v -f $CONTAINER_BACKUP_PATH $POSTGRES_DB

# Copy the backup file from the container to the host
docker cp $DOCKER_CONTAINER_NAME:$CONTAINER_BACKUP_PATH $BACKUP_PATH/$BACKUP_FILE

# Optionally, remove the backup file from the container
docker exec $DOCKER_CONTAINER_NAME rm $CONTAINER_BACKUP_PATH

# Notify the user
echo "Backup completed: $BACKUP_PATH/$BACKUP_FILE"
