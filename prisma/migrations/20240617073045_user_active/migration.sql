/*
  Warnings:

  - You are about to drop the column `enabled` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "enabled",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;
