import pool from "database";
import initTable from "init-table";

export const findVerificationTokenBy = async (field: string, value: string) => {
  // Initialize the table if it doesn't exist
  await initTable("verification_tokens");

  const allowedFields = ["id", "email", "token"];
  if (!allowedFields.includes(field)) {
    throw new Error(
      `Invalid field "${field}" for verification token search. Allowed fields are: ${allowedFields.join(", ")}`,
    );
  }

  const query = `SELECT * FROM verification_tokens WHERE ${field} = $1`;
  const values = [value];
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw new Error("Failed to fetch verification token from database");
  }
};
