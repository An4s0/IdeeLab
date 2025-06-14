import fs from "fs";
import path from "path";
import pool from "./database";

/**
 * Initializes a PostgreSQL table by checking if it exists and creating it if not.
 *
 * @param {string} tableName - The name of the table to initialize.
 * @returns {Promise<void>} - A promise that resolves when the table is initialized.
 */
export default async function initTable(tableName: string) {
  try {
    await pool.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);

    const checkQuery = `
      SELECT EXISTS (
        SELECT FROM information_schema.tables
        WHERE table_schema = 'public' AND table_name = $1
      );
    `;

    const { rows } = await pool.query(checkQuery, [tableName]);

    if (!rows[0].exists) {
      const sqlFile = path.resolve(process.cwd(), "sql", `${tableName}.sql`);
      const sql = fs.readFileSync(sqlFile, "utf8");
      await pool.query(sql);
      console.log(
        ` \x1b[92m✓\x1b[0m Table "${tableName}" created successfully.`,
      );
    }
  } catch (error) {
    throw error;
  }
}
