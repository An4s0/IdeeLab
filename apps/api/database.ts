import dotenv from "dotenv";
dotenv.config({ path: `../../.env` });

import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432"),
});

pool
  .connect()
  .then(() =>
    console.log(" \x1b[92m✓\x1b[0m Successfully connected to the database"),
  )
  .catch((err) =>
    console.error(" \x1b[31mX\x1b[0m Database connection error", err),
  );

export default pool;
