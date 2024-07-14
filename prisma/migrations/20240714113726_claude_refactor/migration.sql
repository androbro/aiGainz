/*
  Warnings:

  - You are about to drop the column `height` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `percentageChange` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `totalScore` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `width` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the `CardChart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CardChartData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CardDataPoint` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[chartDataId]` on the table `Card` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `chartDataId` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CardChart" DROP CONSTRAINT "CardChart_cardId_fkey";

-- DropForeignKey
ALTER TABLE "CardChartData" DROP CONSTRAINT "CardChartData_cardId_fkey";

-- DropForeignKey
ALTER TABLE "CardDataPoint" DROP CONSTRAINT "CardDataPoint_cardId_fkey";

-- AlterTable
ALTER TABLE "Card" DROP COLUMN "height",
DROP COLUMN "percentageChange",
DROP COLUMN "totalScore",
DROP COLUMN "width",
ADD COLUMN     "chartDataId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "CardChart";

-- DropTable
DROP TABLE "CardChartData";

-- DropTable
DROP TABLE "CardDataPoint";

-- CreateTable
CREATE TABLE "Chart" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "fill" BOOLEAN NOT NULL,
    "borderColor" TEXT,
    "tension" DOUBLE PRECISION NOT NULL,
    "pointRadius" DOUBLE PRECISION NOT NULL,
    "showLegend" BOOLEAN NOT NULL DEFAULT true,
    "showXAxis" BOOLEAN NOT NULL DEFAULT true,
    "showYAxis" BOOLEAN NOT NULL DEFAULT true,
    "maintainAspectRatio" BOOLEAN NOT NULL DEFAULT true,
    "responsive" BOOLEAN NOT NULL DEFAULT true,
    "width" INTEGER,
    "height" INTEGER,

    CONSTRAINT "Chart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChartDataPoint" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "chartId" INTEGER NOT NULL,

    CONSTRAINT "ChartDataPoint_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Card_chartDataId_key" ON "Card"("chartDataId");

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_chartDataId_fkey" FOREIGN KEY ("chartDataId") REFERENCES "Chart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChartDataPoint" ADD CONSTRAINT "ChartDataPoint_chartId_fkey" FOREIGN KEY ("chartId") REFERENCES "Chart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
