import dotenv from 'dotenv';
dotenv.config({ path: `../../.env` });

import express, { Application } from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import routes from './routes';
import os from "os";
import { dependencies } from "./package.json";
import { ErrorHandler } from './middlewares/errorHandler';

const app: Application = express();
const start = Date.now();

app.use(cors());
app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(routes);
app.use(ErrorHandler);

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