import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "./schema";

const sql = neon(process.env.POSTGRES_URL!);
const db = drizzle(sql, { schema });

export default db;

// import * as schema from "./schema";

// const db = drizzle(sql, { schema });

// export default db;
