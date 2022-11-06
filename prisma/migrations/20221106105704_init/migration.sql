/*
  Warnings:

  - You are about to alter the column `address` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - Made the column `address` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `chainId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "address" SET NOT NULL,
ALTER COLUMN "address" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "chainId" SET NOT NULL,
ALTER COLUMN "chainId" SET DATA TYPE VARCHAR(50);
