-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "totalScore" DOUBLE PRECISION NOT NULL,
    "percentageChange" DOUBLE PRECISION NOT NULL,
    "period" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CardDataPoint" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "cardId" INTEGER NOT NULL,

    CONSTRAINT "CardDataPoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CardChartData" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "data" DOUBLE PRECISION[],
    "fill" BOOLEAN NOT NULL,
    "borderColor" TEXT,
    "tension" DOUBLE PRECISION NOT NULL,
    "pointRadius" DOUBLE PRECISION NOT NULL,
    "cardId" INTEGER NOT NULL,

    CONSTRAINT "CardChartData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CardChartData_cardId_key" ON "CardChartData"("cardId");

-- AddForeignKey
ALTER TABLE "CardDataPoint" ADD CONSTRAINT "CardDataPoint_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardChartData" ADD CONSTRAINT "CardChartData_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
