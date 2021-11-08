import pkg from 'pg';
const { Pool } = pkg;

export default new Pool ({
    max: 20,
    connectionString: 'postgres-0://mark:pg1!@localhost:5433/test',
    idleTimeoutMillis: 30000
});
