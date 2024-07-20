/*
  Warnings:

  - You are about to drop the column `chartDataId` on the `Card` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[chartId]` on the table `Card` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `chartId` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_chartDataId_fkey";

-- DropIndex
DROP INDEX "Card_chartDataId_key";

-- AlterTable
ALTER TABLE "Card" DROP COLUMN "chartDataId",
ADD COLUMN     "chartId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Card_chartId_key" ON "Card"("chartId");

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_chartId_fkey" FOREIGN KEY ("chartId") REFERENCES "Chart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
