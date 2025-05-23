import pool from "database";
import initTable from "init-table";

export const deleteVerificationToken = async (token: string) => {
  // Initialize the table if it doesn't exist
  await initTable("verification_tokens");

  const query = `DELETE FROM verification_tokens WHERE token = $1 RETURNING *`;
  const values = [token];
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw new Error("Failed to delete verification token from database");
  }
};
