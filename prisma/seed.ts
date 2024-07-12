// seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Seed MuscleType
    const chest = await prisma.muscleType.create({
        data: {
            name: 'Chest',
        },
    });

    const back = await prisma.muscleType.create({
        data: {
            name: 'Back',
        },
    });

    // Seed WorkoutEquipment
    const dumbbells = await prisma.workoutEquipment.create({
        data: {
            name: 'Dumbbells',
        },
    });

    const barbell = await prisma.workoutEquipment.create({
        data: {
            name: 'Barbell',
        },
    });

    // Seed Exercises
    const benchPress = await prisma.exercise.create({
        data: {
            name: 'Bench Press',
            description: 'A compound exercise for the chest.',
            primaryMuscleId: chest.id,
            equipmentId: barbell.id,
            difficulty: 'Medium',
        },
    });

    const dumbbellRow = await prisma.exercise.create({
        data: {
            name: 'Dumbbell Row',
            description: 'An exercise for the back.',
            primaryMuscleId: back.id,
            equipmentId: dumbbells.id,
            difficulty: 'Medium',
        },
    });

    // Seed Workouts
    const workout = await prisma.workout.create({
        data: {
            name: 'Full Body Workout',
            description: 'A full body workout plan.',
        },
    });

    // Seed WorkoutExercise
    await prisma.workoutExercise.createMany({
        data: [
            {
                workoutId: workout.id,
                exerciseId: benchPress.id,
                order: 1,
                sets: 3,
                reps: 10,
                minutesToComplete: 15,
                restBetweenSets: 2,
            },
            {
                workoutId: workout.id,
                exerciseId: dumbbellRow.id,
                order: 2,
                sets: 3,
                reps: 12,
                minutesToComplete: 15,
                restBetweenSets: 2,
            },
        ],
    });
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
