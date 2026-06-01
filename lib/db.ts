import mysql, { type Pool } from "mysql2/promise";

let pool: Pool | null = null;

function hasDatabaseConfig() {
  return Boolean(
    process.env.DATABASE_NAME &&
      process.env.DATABASE_USERNAME &&
      process.env.DATABASE_PASSWORD,
  );
}

export function getDbPool(): Pool | null {
  if (!hasDatabaseConfig()) return null;
  if (pool) return pool;

  pool = mysql.createPool({
    host: process.env.DATABASE_HOST ?? "127.0.0.1",
    port: Number(process.env.DATABASE_PORT ?? 3306),
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    connectionLimit: 10,
    waitForConnections: true,
  });

  return pool;
}
