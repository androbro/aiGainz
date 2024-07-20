/*
  Warnings:

  - Added the required column `dataSourceId` to the `Chart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chart" ADD COLUMN     "dataSourceId" INTEGER NOT NULL;
