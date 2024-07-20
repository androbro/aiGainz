/*
  Warnings:

  - You are about to drop the column `chartId` on the `ChartDataPoint` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ChartDataPoint" DROP CONSTRAINT "ChartDataPoint_chartId_fkey";

-- AlterTable
ALTER TABLE "ChartDataPoint" DROP COLUMN "chartId";
