import pool from "database";
import initTable from "init-table";

export const findAllIdeas = async (
  limit: number,
  offset: number,
  status: string,
) => {
  // Initialize the table if it doesn't exist
  await initTable("ideas");

  // Query to find all ideas with pagination
  const query = `
    SELECT * FROM ideas
    WHERE status = $3
    ORDER BY views DESC
    LIMIT $1 OFFSET $2
  `;
  const values = [limit, offset, status];
  try {
    const result = await pool.query(query, values);
    return result.rows;
  } catch (error: any) {
    throw new Error("Failed to fetch ideas from database", error);
  }
};
