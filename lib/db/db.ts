import { PrismaClient } from "@prisma/client";

export const DB = new PrismaClient();

DB.$connect().then(() => {
  console.log("🔌 Connected to database");
});
