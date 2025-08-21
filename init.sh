#!/bin/bash

USERNAME=$MONGO_INITDB_ROOT_USERNAME
PASSWORD=$MONGO_INITDB_ROOT_PASSWORD
DATABASE=$MONGO_INITDB_DATABASE

mongosh admin -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD <<EOF
use $DATABASE
db.createUser({
    user: "$DB_USER",
    pwd: "$DB_PASSWORD",
    roles: [{role: "readWrite", db: "$DATABASE"}]
});
EOF

mongorestore --uri="mongodb://$DB_USER:$DB_PASSWORD@localhost/$DATABASE" --authenticationDatabase=$DATABASE --drop /dump/elec-cond_project

echo "Working user created successfully!"