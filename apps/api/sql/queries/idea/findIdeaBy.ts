import pool from "database";
import initTable from "init-table";

export const findIdeaBy = async (field: string, value: string) => {
  // Initialize the table if it doesn't exist
  await initTable("ideas");

  const allowedFields = [
    "id",
    "slug",
    "title",
    "description",
    "status",
    "created_at",
    "updated_at",
  ];
  if (!allowedFields.includes(field)) {
    throw new Error(
      `Invalid field "${field}" for idea search. Allowed fields are: ${allowedFields.join(", ")}`,
    );
  }

  const query = `SELECT * FROM ideas WHERE ${field} = $1`;
  const values = [value];
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error: any) {
    throw new Error("Failed to fetch idea from database", error);
  }
};
