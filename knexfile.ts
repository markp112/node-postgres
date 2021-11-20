// Update with your config settings.
import * as dotenv from 'dotenv';

dotenv.config();
const env = {
  postgresDb: process.env.POSTGRES_DATABASE,
  postgresUser: process.env.POSTGRES_USER,
  postgresPassword: process.env.POSTGRES_PASSWORD
};

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: env.postgresDb,
      user: env.postgresUser,
      password: env.postgresPassword,
      host: 'localhost',
      port: 5433,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/migrations'
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};
