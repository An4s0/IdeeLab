import pool from "database";
import initTable from "init-table";
import { UserType } from "types";

export const createUser = async (user: UserType) => {
  // Initialize the table if it doesn't exist
  await initTable("users");

  const { name, username, email, password, picture, provider, provider_id } =
    user;

  let { verified } = user;
  verified = verified || false;
  const query = `INSERT INTO users (name, username, email, password, picture, provider, provider_id, verified) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;
  const values = [
    name,
    username,
    email,
    password,
    picture || `${process.env.NEXT_PUBLIC_BASE_URL}/default.png`,
    provider || "credentials",
    provider_id || null,
    verified,
  ];
  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (error: any) {
    throw new Error("Failed to insert user into database", error);
  }
};
