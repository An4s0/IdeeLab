import dotenv from "dotenv";
dotenv.config({ path: `../../.env` });

export * from "./zod/idea";
export * from "./zod/user";
export * from "./zod/comment";

import { dependencies } from "./package.json";

const start = Date.now();

console.log(
  `\n   \x1b[36m▲ Zod v${dependencies.zod}\x1b[0m ${process.env.NODE_ENV === "development" ? "(Dev mode)" : "(Prod mode)"}\n`,
);
console.log(` \x1b[92m✓\x1b[0m Starting...`);
console.log(` \x1b[92m✓\x1b[0m Ready in ${Date.now() - start}ms`);
