/*
  Warnings:

  - Added the required column `dataType` to the `Chart` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ChartDataType" AS ENUM ('EXERCISE', 'MUSCLE_TYPE', 'WORKOUT_EQUIPMENT', 'WORKOUT_EXERCISE', 'EQUIPMENT_TYPE', 'EQUIPMENT_CATEGORY');

-- AlterTable
ALTER TABLE "Chart" ADD COLUMN     "dataType" "ChartDataType" NOT NULL;

-- AlterTable
ALTER TABLE "ChartDataPoint" ADD COLUMN     "exerciseId" INTEGER,
ADD COLUMN     "muscleTypeId" INTEGER,
ADD COLUMN     "workoutEquipmentId" INTEGER,
ADD COLUMN     "workoutExerciseId" INTEGER;

-- AddForeignKey
ALTER TABLE "ChartDataPoint" ADD CONSTRAINT "ChartDataPoint_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChartDataPoint" ADD CONSTRAINT "ChartDataPoint_muscleTypeId_fkey" FOREIGN KEY ("muscleTypeId") REFERENCES "MuscleType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChartDataPoint" ADD CONSTRAINT "ChartDataPoint_workoutEquipmentId_fkey" FOREIGN KEY ("workoutEquipmentId") REFERENCES "WorkoutEquipment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChartDataPoint" ADD CONSTRAINT "ChartDataPoint_workoutExerciseId_fkey" FOREIGN KEY ("workoutExerciseId") REFERENCES "WorkoutExercise"("id") ON DELETE SET NULL ON UPDATE CASCADE;