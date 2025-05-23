import pool from "database";
import initTable from "init-table";

export const findAllUsers = async () => {
  // Initialize the table if it doesn't exist
  await initTable("users");

  const query = `SELECT * FROM users`;
  try {
    const result = await pool.query(query);
    return result.rows;
  } catch (error: any) {
    throw new Error("Failed to fetch users from database", error);
  }
};
