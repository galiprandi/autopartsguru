import { PrismaClient } from "@prisma/client";

export const DB = new PrismaClient();

DB.$connect()
  .then(() => {
    console.log("🔌 Connected to database");
  })
  .catch((error) => {
    console.error("❌ Error connecting to database: ", error);
    process.exit(1);
  });
