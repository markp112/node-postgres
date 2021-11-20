// import knex from "../../db-config/knexfile";
// import knex from "knex";

import knexConnection from "../../db-config/knexfile";
import * as dotenv from 'dotenv';
import { buildPgDatabaseConfig, createPgDatabaseClient } from "./build-connection";

dotenv.config();

const env = {
  postgresDb: process.env.POSTGRES_DATABASE,
  postgresUser: process.env.POSTGRES_USER,
  postgresPassword: process.env.POSTGRES_PASSWORD
};

const connectionString = () => {
  `postgressql://${env.postgresUser}:${env.postgresPassword}@localhost:5433/testdb`;
};


// const knex = require('knex')({
//   client: 'pg',
//   connection: {
//     database: env.postgresDb,
//     user: env.postgresUser,
//     password: env.postgresPassword,
//     host: 'localhost:5433',
//   },
//   pool: {
//     min: 2,
//     max: 10,
//   },
// })
function getJsonById(id: number) {
  const connectionConfig = buildPgDatabaseConfig(createConfig(connectionString));
  const client = createPgDatabaseClient(connectionConfig);
  
  const json = client.select({json: 'json'}).where('id', id);
  console.log('%c⧭', 'color: #ff0000', json);
  return json;
}

export { getJsonById };
  function createConfig(connectionString: () => void): any {
    throw new Error("Function not implemented.");
  }

