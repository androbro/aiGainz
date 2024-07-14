import {
    PrismaClient,
    EquipmentType,
    EquipmentCategory,
    EquipmentLocation,
    Exercise,
} from '@prisma/client';
import { faker } from '@faker-js/faker';
import { workoutEquipment } from '../testData/workoutEquipment';
import { muscleGroups } from '../testData/muscleGroup';

const prisma = new PrismaClient();

async function main() {
    // Seed MuscleTypes and WorkoutEquipment (your existing code)
    for (const groupName of muscleGroups) {
        await prisma.muscleType.create({
            data: { name: groupName },
        });
        console.log(`Created muscle group: ${groupName}`);
    }

    for (const equipment of workoutEquipment) {
        await prisma.workoutEquipment.create({
            data: {
                name: equipment.name,
                category: equipment.category as EquipmentCategory,
                location: equipment.location as EquipmentLocation,
                type: equipment.type as EquipmentType,
            },
        });
        console.log(`Created workout equipment: ${equipment.name}`);
    }

    // Seed Exercises
    const exercises = await seedExercises();

    // Seed Workouts and WorkoutExercises
    await seedWorkoutsAndExercises(exercises);

    // Seed Cards
    await seedCards();
}

async function seedExercises(): Promise<Exercise[]> {
    const exercises: Exercise[] = [];
    const muscleTypes = await prisma.muscleType.findMany();
    const equipments = await prisma.workoutEquipment.findMany();

    for (let i = 0; i < 50; i++) {
        const exercise = await prisma.exercise.create({
            data: {
                name: faker.lorem.words(3),
                description: faker.lorem.sentence(),
                primaryMuscleId: faker.helpers.arrayElement(muscleTypes).id,
                secondaryMuscleId: faker.helpers.arrayElement([
                    null,
                    ...muscleTypes.map((m) => m.id),
                ]),
                equipmentId: faker.helpers.arrayElement(equipments).id,
                difficulty: faker.helpers.arrayElement(['Beginner', 'Intermediate', 'Advanced']),
            },
        });
        exercises.push(exercise);
        console.log(`Created exercise: ${exercise.name}`);
    }

    return exercises;
}

async function seedWorkoutsAndExercises(exercises: Exercise[]) {
    // Generate dates for the last 6 months
    const endDate = new Date();
    const startDate = new Date(endDate.getTime() - 6 * 30 * 24 * 60 * 60 * 1000); // Approximately 6 months ago

    for (let i = 0; i < 10; i++) {
        const workoutDate = faker.date.between({ from: startDate, to: endDate });

        const workout = await prisma.workout.create({
            data: {
                name: faker.lorem.words(3),
                description: faker.lorem.sentence(),
                createdAt: workoutDate,
                updatedAt: workoutDate,
            },
        });

        const numberOfExercises = faker.number.int({ min: 3, max: 10 });
        const shuffledExercises = faker.helpers.shuffle(exercises).slice(0, numberOfExercises);

        for (let j = 0; j < shuffledExercises.length; j++) {
            await prisma.workoutExercise.create({
                data: {
                    workoutId: workout.id,
                    exerciseId: shuffledExercises[j].id,
                    order: j + 1,
                    sets: faker.number.int({ min: 1, max: 5 }),
                    reps: faker.number.int({ min: 5, max: 20 }),
                    weight: parseFloat(
                        faker.number.float({ min: 0, max: 100, precision: 0.1 }).toFixed(1)
                    ),
                    minutesToComplete: faker.number.int({ min: 1, max: 10 }),
                    restBetweenSets: faker.number.int({ min: 30, max: 120 }),
                    notes: faker.helpers.maybe(() => faker.lorem.sentence(), { probability: 0.3 }),
                },
            });
        }

        console.log(
            `Created workout: ${workout.name} with ${shuffledExercises.length} exercises on ${workoutDate.toISOString()}`
        );
    }
}

async function seedCards() {
    const cardTitles = [
        'Overall Strength',
        'Bench Press',
        'Customer Satisfaction',
        'Product Usage',
        'Conversion Rate',
        'Churn Rate',
    ];

    for (let i = 0; i < 6; i++) {
        const chart = await prisma.chart.create({
            data: {
                label: cardTitles[i],
                fill: faker.datatype.boolean(),
                borderColor: faker.color.rgb(),
                tension: faker.number.float({ min: 0, max: 1, precision: 0.1 }),
                pointRadius: faker.number.float({ min: 0, max: 5, precision: 0.1 }),
                showLegend: faker.datatype.boolean(),
                showXAxis: faker.datatype.boolean(),
                showYAxis: faker.datatype.boolean(),
                maintainAspectRatio: faker.datatype.boolean(),
                responsive: faker.datatype.boolean(),
                width: faker.helpers.maybe(() => faker.number.int({ min: 200, max: 800 })),
                height: faker.helpers.maybe(() => faker.number.int({ min: 200, max: 600 })),
                dataPoints: {
                    create: Array.from({ length: 30 }, () => ({
                        date: faker.date.recent(30),
                        score: faker.number.float({ min: 0, max: 100, precision: 0.01 }),
                    })),
                },
            },
        });

        const card = await prisma.card.create({
            data: {
                title: cardTitles[i],
                period: faker.date.recent(180),
                chartDataId: chart.id,
            },
        });

        console.log(`Created card: ${card.title} with chart: ${chart.label}`);
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
