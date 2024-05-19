// import * as dotenv from "dotenv";
import "dotenv/config";
import { defineConfig } from "drizzle-kit";


export default defineConfig({
  schema: "./db/schema.ts",
  dialect: "postgresql",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});

