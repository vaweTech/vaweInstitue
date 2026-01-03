// import { defineConfig, env } from "prisma/config";
// import "dotenv/config";


// export default defineConfig({
//   schema: "prisma/schema.prisma",
//   migrations: {
//     path: "prisma/migrations",
//   },
//   engine: "classic",
//   datasource: {
//     url: env("DATABASE_URL"),
//   },
// });




import { defineConfig, env } from "prisma/config";
import "dotenv/config";

// For prisma generate, DATABASE_URL is not strictly required
// Provide a fallback for build environments where DATABASE_URL might not be set
let databaseUrl: string;
try {
  databaseUrl = env("DATABASE_URL");
} catch {
  // Fallback for build environments (prisma generate doesn't need actual DB connection)
  databaseUrl = process.env.DATABASE_URL || "file:./dev.db";
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: databaseUrl,
  },
});
