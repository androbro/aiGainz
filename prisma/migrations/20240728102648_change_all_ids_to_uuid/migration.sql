/*
  Warnings:

  - The primary key for the `Card` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Chart` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ChartDataPoint` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Exercise` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `MuscleType` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Workout` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `WorkoutEquipment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `WorkoutExercise` table will be changed. If it partially fails, the table could be left without primary key constraint.

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
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "chartId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Card_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Card_id_seq";

-- AlterTable
ALTER TABLE "Chart" DROP CONSTRAINT "Chart_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "dataSourceId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Chart_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Chart_id_seq";

-- AlterTable
ALTER TABLE "ChartDataPoint" DROP CONSTRAINT "ChartDataPoint_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "exerciseId" SET DATA TYPE TEXT,
ALTER COLUMN "muscleTypeId" SET DATA TYPE TEXT,
ALTER COLUMN "workoutEquipmentId" SET DATA TYPE TEXT,
ALTER COLUMN "workoutExerciseId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ChartDataPoint_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ChartDataPoint_id_seq";

-- AlterTable
ALTER TABLE "Exercise" DROP CONSTRAINT "Exercise_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "primaryMuscleId" SET DATA TYPE TEXT,
ALTER COLUMN "secondaryMuscleId" SET DATA TYPE TEXT,
ALTER COLUMN "equipmentId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Exercise_id_seq";

-- AlterTable
ALTER TABLE "MuscleType" DROP CONSTRAINT "MuscleType_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "MuscleType_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "MuscleType_id_seq";

-- AlterTable
ALTER TABLE "Workout" DROP CONSTRAINT "Workout_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Workout_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Workout_id_seq";

-- AlterTable
ALTER TABLE "WorkoutEquipment" DROP CONSTRAINT "WorkoutEquipment_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "WorkoutEquipment_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "WorkoutEquipment_id_seq";

-- AlterTable
ALTER TABLE "WorkoutExercise" DROP CONSTRAINT "WorkoutExercise_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "workoutId" SET DATA TYPE TEXT,
ALTER COLUMN "exerciseId" SET DATA TYPE TEXT,
ADD CONSTRAINT "WorkoutExercise_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "WorkoutExercise_id_seq";

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
