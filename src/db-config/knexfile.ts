import { Knex } from 'knex';
// import { env } from '../.env/env';
import * as dotenv from 'dotenv';

dotenv.config();

const env = {
  postgresDb: process.env.POSTGRES_DATABASE,
  postgresUser: process.env.POSTGRES_USER,
  postgresPassword: process.env.POSTGRES_PASSWORD
};

const knexConnection: Knex.Config = {
  client: 'pg',
  connection: {
    database: env.postgresDb,
    user: env.postgresUser,
    password: env.postgresPassword,
    host: 'localhost:5433',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './src/migrations'
  },
};

export default knexConnection;
