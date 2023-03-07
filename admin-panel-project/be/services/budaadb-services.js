import { pool } from "../config/mysql-config.js";

export async function getUserRole() {
  const [rows] = await pool.query(`select * from user_role`);
  // console.log(rows);
  return rows;
}
