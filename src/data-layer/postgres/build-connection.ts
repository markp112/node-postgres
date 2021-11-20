import { Config } from "./config";
import { mergeDatabaseConfig } from "./mergeConfig";
import knexFactory, { Knex } from 'knex';

export function createPgDatabaseClient(
  dbConfig: Config,
  overrides?: Knex.Config,
) {
  const knexConfig = buildPgDatabaseConfig(dbConfig, overrides);
  const database = knexFactory(knexConfig);
  return database;
}

export function buildPgDatabaseConfig(
  dbConfig: Config,
  overrides?: Knex.Config,
) {
  return mergeDatabaseConfig(
    dbConfig.get(),
    {
      connection: getPgConnectionConfig(dbConfig, !!overrides),
      useNullAsDefault: true,
    },
    overrides,
  );
}

export function getPgConnectionConfig(
  dbConfig: Config,
  parseConnectionString?: boolean,
): Knex.PgConnectionConfig | string {
  const connection = dbConfig.get('connection') as any;
  const isConnectionString =
    typeof connection === 'string' || connection instanceof String;
  const autoParse = typeof parseConnectionString !== 'boolean';

  const shouldParseConnectionString = autoParse
    ? isConnectionString
    : parseConnectionString && isConnectionString;

  return shouldParseConnectionString
    ? parsePgConnectionString(connection as string)
    : connection;
}

export function parsePgConnectionString(connectionString: string) {
  const parse = requirePgConnectionString();
  return parse(connectionString);
}

function requirePgConnectionString() {
  try {
    return require('pg-connection-string').parse;
  } catch (e) {
    const message = `Postgres: Install 'pg-connection-string'`;
    const errMsg = (e as Error)
    throw new Error(`${message}\n${errMsg.message}`);
  }
}