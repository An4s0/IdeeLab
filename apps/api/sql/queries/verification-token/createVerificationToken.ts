import pool from "database";
import initTable from "init-table";
import { VerificationTokenType } from "types";

export const createVerificationToken = async (
  verificationToken: VerificationTokenType,
) => {
  // Initialize the table if it doesn't exist
  await initTable("verification_tokens");

  const { email, token, type, expires_at } = verificationToken;

  const query = `INSERT INTO verification_tokens (email, token, type, expires_at) VALUES ($1, $2, $3, $4) RETURNING *`;
  const values = [email, token, type, expires_at];
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw new Error("Failed to insert verification token into database");
  }
};
