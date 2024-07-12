// seed.ts

import { PrismaClient } from '@prisma/client';
import { workoutEquipment } from './testData/workoutEquipment';
import { muscleGroups } from './testData/muscleGroup';

const prisma = new PrismaClient();

async function main() {
    // Seed all MuscleTypes
    for (const groupName of muscleGroups) {
        await prisma.muscleType.create({
            data: {
                name: groupName,
            },
        });
        console.log(`Created muscle group: ${groupName}`);
    }

    // Seed WorkoutEquipment
    for (const equipment of workoutEquipment) {
        await prisma.workoutEquipment.create({
            data: {
                name: equipment.name,
                category: equipment.category,
                location: equipment.location,
                type: equipment.type,
            },
        });
        console.log(`Created workout equipment: ${equipment.name}`);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
