import pool from "database";
import initTable from "init-table";
import { VerificationTokenType } from "types";

export const updateVerificationToken = async (
  id: string,
  updates: Partial<VerificationTokenType>,
) => {
  // Initialize the table if it doesn't exist
  await initTable("verification_tokens");

  const fields = Object.keys(updates);
  const values = Object.values(updates);

  if (fields.length === 0) {
    throw new Error("No update fields provided");
  }

  // Automatically update "updated_at" timestamp
  fields.push("updated_at");
  values.push(new Date());

  const setClause = fields
    .map((field, index) => `${field} = $${index + 1}`)
    .join(", ");

  values.push(id);

  const query = `UPDATE verification_tokens SET ${setClause} WHERE id = $${values.length} RETURNING *`;

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error) {
    throw new Error("Failed to update verification token in database");
  }
};
