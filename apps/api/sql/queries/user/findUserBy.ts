import pool from "database";
import initTable from "init-table";

export const findUserBy = async (field: string, value: string) => {
  // Initialize the table if it doesn't exist
  await initTable("users");

  const allowedFields = ["id", "username", "email"];
  if (!allowedFields.includes(field)) {
    throw new Error(
      `Invalid field "${field}" for user search. Allowed fields are: ${allowedFields.join(", ")}`,
    );
  }

  const query = `SELECT * FROM users WHERE ${field} = $1`;
  const values = [value];
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error: any) {
    throw new Error("Failed to fetch user from database", error);
  }
};
