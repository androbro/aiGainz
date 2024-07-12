/*
  Warnings:

  - The values [OTHER] on the enum `EquipmentType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "EquipmentType_new" AS ENUM ('MACHINE', 'CABLE', 'SMITH_MACHINE', 'TRAP_BAR', 'BARBELL', 'EZ_BAR', 'DUMBELLS', 'KETTLEBELLS', 'RESISTANCE_BANDS', 'TRX', 'BODYWEIGHT', 'MISC', 'CARDIO');
ALTER TABLE "WorkoutEquipment" ALTER COLUMN "type" TYPE "EquipmentType_new" USING ("type"::text::"EquipmentType_new");
ALTER TYPE "EquipmentType" RENAME TO "EquipmentType_old";
ALTER TYPE "EquipmentType_new" RENAME TO "EquipmentType";
DROP TYPE "EquipmentType_old";
COMMIT;
