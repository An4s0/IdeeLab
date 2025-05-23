import pool from "database";
import initTable from "init-table";
import { IdeaType } from "types";

export const createIdea = async (idea: IdeaType) => {
  // Initialize the table if it doesn't exist
  await initTable("ideas");

  const { title, summary, description, category, tags, difficulty, user_id } =
    idea;

  const query = `INSERT INTO ideas (title, slug, summary, description, category, tags, difficulty, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;
  const values = [
    title,
    title.toLowerCase().replace(/\s+/g, "-"),
    summary,
    description,
    category,
    tags,
    difficulty,
    user_id,
  ];
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error: any) {
    throw new Error("Failed to insert idea into database", error);
  }
};
