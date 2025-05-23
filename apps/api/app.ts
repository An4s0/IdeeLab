import dotenv from "dotenv";
dotenv.config({ path: `../../.env` });

import express from "express";
import cors from "cors";
import os from "os";
import { dependencies } from "./package.json";

const app = express();
const start = Date.now();

app.use(express.json());
app.use(cors());

app.listen(process.env.API_PORT, async () => {
  const ip =
    Object.values(os.networkInterfaces())
      .flat()
      .find((i) => i?.family === "IPv4" && !i.internal)?.address || "localhost";

  console.log(
    `\n   \x1b[95m▲ Express v${dependencies.express}\x1b[0m ${process.env.NODE_ENV === "development" ? "(Dev mode)" : "(Prod mode)"}`,
  );
  console.log(`   - Local:        http://localhost:${process.env.API_PORT}`);
  console.log(`   - Network:      http://${ip}:${process.env.API_PORT}\n`);
  console.log(` \x1b[92m✓\x1b[0m Starting...`);
  console.log(` \x1b[92m✓\x1b[0m Ready in ${Date.now() - start}ms`);
});
