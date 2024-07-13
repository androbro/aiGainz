-- CreateTable
CREATE TABLE "CardChart" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "data" DOUBLE PRECISION[],
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
    "cardId" INTEGER NOT NULL,

    CONSTRAINT "CardChart_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CardChart_cardId_key" ON "CardChart"("cardId");

-- AddForeignKey
ALTER TABLE "CardChart" ADD CONSTRAINT "CardChart_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
