

### docker command to run postgres
docker run --name postgres-server -p 5433:5432 -e POSTGRES_PASSWORD=<password> -e POSTGRES_USER=<user> -e POSTGRES_DB=test -v ~/data/postgres:/var/lib/postgresql/data -d postgres:10

to run migration scripts using knex:

knex migrate:latest --esm
