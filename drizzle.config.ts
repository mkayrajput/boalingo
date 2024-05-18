// import * as dotenv from "dotenv";
import "dotenv/config";
import { defineConfig } from "drizzle-kit";

// dotenv.config({ path: ".env.local" });

export default defineConfig({
  schema: "./db/schema.ts",
  dialect: "postgresql",
  // driver: ""
  out: "./drizzle",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});

// import type { Config } from "drizzle-kit";

// export default {
//   schema: "./db/schema.ts",
//   dialect: "postgresql",
//   out: "./drizzle",
//   dbCredentials: { url: process.env.POSTGRES_URL! },
// } satisfies Config;
