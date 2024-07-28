/*
  Warnings:

  - The primary key for the `Card` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Card` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Chart` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Chart` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `ChartDataPoint` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `ChartDataPoint` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `exerciseId` column on the `ChartDataPoint` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `muscleTypeId` column on the `ChartDataPoint` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `workoutEquipmentId` column on the `ChartDataPoint` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `workoutExerciseId` column on the `ChartDataPoint` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Exercise` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Exercise` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `secondaryMuscleId` column on the `Exercise` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `MuscleType` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `MuscleType` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Workout` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Workout` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `WorkoutEquipment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `WorkoutEquipment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `WorkoutExercise` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `WorkoutExercise` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `chartId` on the `Card` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `dataSourceId` on the `Chart` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `primaryMuscleId` on the `Exercise` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `equipmentId` on the `Exercise` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `workoutId` on the `WorkoutExercise` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `exerciseId` on the `WorkoutExercise` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_chartId_fkey";

-- DropForeignKey
ALTER TABLE "ChartDataPoint" DROP CONSTRAINT "ChartDataPoint_exerciseId_fkey";

-- DropForeignKey
ALTER TABLE "ChartDataPoint" DROP CONSTRAINT "ChartDataPoint_muscleTypeId_fkey";

-- DropForeignKey
ALTER TABLE "ChartDataPoint" DROP CONSTRAINT "ChartDataPoint_workoutEquipmentId_fkey";

-- DropForeignKey
ALTER TABLE "ChartDataPoint" DROP CONSTRAINT "ChartDataPoint_workoutExerciseId_fkey";

-- DropForeignKey
ALTER TABLE "Exercise" DROP CONSTRAINT "Exercise_equipmentId_fkey";

-- DropForeignKey
ALTER TABLE "Exercise" DROP CONSTRAINT "Exercise_primaryMuscleId_fkey";

-- DropForeignKey
ALTER TABLE "Exercise" DROP CONSTRAINT "Exercise_secondaryMuscleId_fkey";

-- DropForeignKey
ALTER TABLE "WorkoutExercise" DROP CONSTRAINT "WorkoutExercise_exerciseId_fkey";

-- DropForeignKey
ALTER TABLE "WorkoutExercise" DROP CONSTRAINT "WorkoutExercise_workoutId_fkey";

-- AlterTable
ALTER TABLE "Card" DROP CONSTRAINT "Card_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "chartId",
ADD COLUMN     "chartId" INTEGER NOT NULL,
ADD CONSTRAINT "Card_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Chart" DROP CONSTRAINT "Chart_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "dataSourceId",
ADD COLUMN     "dataSourceId" INTEGER NOT NULL,
ADD CONSTRAINT "Chart_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ChartDataPoint" DROP CONSTRAINT "ChartDataPoint_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "exerciseId",
ADD COLUMN     "exerciseId" INTEGER,
DROP COLUMN "muscleTypeId",
ADD COLUMN     "muscleTypeId" INTEGER,
DROP COLUMN "workoutEquipmentId",
ADD COLUMN     "workoutEquipmentId" INTEGER,
DROP COLUMN "workoutExerciseId",
ADD COLUMN     "workoutExerciseId" INTEGER,
ADD CONSTRAINT "ChartDataPoint_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Exercise" DROP CONSTRAINT "Exercise_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "primaryMuscleId",
ADD COLUMN     "primaryMuscleId" INTEGER NOT NULL,
DROP COLUMN "secondaryMuscleId",
ADD COLUMN     "secondaryMuscleId" INTEGER,
DROP COLUMN "equipmentId",
ADD COLUMN     "equipmentId" INTEGER NOT NULL,
ADD CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "MuscleType" DROP CONSTRAINT "MuscleType_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "MuscleType_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Workout" DROP CONSTRAINT "Workout_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Workout_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "WorkoutEquipment" DROP CONSTRAINT "WorkoutEquipment_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "WorkoutEquipment_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "WorkoutExercise" DROP CONSTRAINT "WorkoutExercise_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "workoutId",
ADD COLUMN     "workoutId" INTEGER NOT NULL,
DROP COLUMN "exerciseId",
ADD COLUMN     "exerciseId" INTEGER NOT NULL,
ADD CONSTRAINT "WorkoutExercise_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Card_chartId_key" ON "Card"("chartId");

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_primaryMuscleId_fkey" FOREIGN KEY ("primaryMuscleId") REFERENCES "MuscleType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_secondaryMuscleId_fkey" FOREIGN KEY ("secondaryMuscleId") REFERENCES "MuscleType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_equipmentId_fkey" FOREIGN KEY ("equipmentId") REFERENCES "WorkoutEquipment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutExercise" ADD CONSTRAINT "WorkoutExercise_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutExercise" ADD CONSTRAINT "WorkoutExercise_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_chartId_fkey" FOREIGN KEY ("chartId") REFERENCES "Chart"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChartDataPoint" ADD CONSTRAINT "ChartDataPoint_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChartDataPoint" ADD CONSTRAINT "ChartDataPoint_muscleTypeId_fkey" FOREIGN KEY ("muscleTypeId") REFERENCES "MuscleType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChartDataPoint" ADD CONSTRAINT "ChartDataPoint_workoutEquipmentId_fkey" FOREIGN KEY ("workoutEquipmentId") REFERENCES "WorkoutEquipment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChartDataPoint" ADD CONSTRAINT "ChartDataPoint_workoutExerciseId_fkey" FOREIGN KEY ("workoutExerciseId") REFERENCES "WorkoutExercise"("id") ON DELETE SET NULL ON UPDATE CASCADE;
