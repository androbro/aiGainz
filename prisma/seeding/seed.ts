import {
    PrismaClient,
    EquipmentType,
    EquipmentCategory,
    EquipmentLocation,
    Exercise,
    $Enums,
} from '@prisma/client';
import { faker } from '@faker-js/faker';
import { workoutEquipment } from '../testData/workoutEquipment';
import { muscleGroups } from '../testData/muscleGroup';
import ChartDataType = $Enums.ChartDataType;
import { detailedExercises } from '../testData/exercise';

const prisma = new PrismaClient();

// Helper function to generate random float with specified precision
function generateRandomFloat(min: number, max: number): number {
    return faker.number.float({ min, max, multipleOf: 0.01 });
}

async function main() {
    console.log('Starting database seeding...');

    // Seed MuscleTypes
    for (const groupName of muscleGroups) {
        await prisma.muscleType.create({
            data: { name: groupName },
        });
    }

    // Seed WorkoutEquipment
    for (const equipment of workoutEquipment) {
        await prisma.workoutEquipment.create({
            data: {
                name: equipment.name,
                category: equipment.category as EquipmentCategory,
                location: equipment.location as EquipmentLocation,
                type: equipment.type as EquipmentType,
            },
        });
    }

    // Seed Exercises
    const exercises = await seedExercises();

    // Seed Workouts and WorkoutExercises
    await seedWorkoutsAndExercises(exercises);

    // Seed ChartDataPoints for MuscleTypes and Exercises
    await seedMuscleTypeChartDataPoints();
    await seedExerciseChartDataPoints();

    // Seed Charts and Cards
    await seedChartsAndCards();

    console.log('Database seeding completed successfully.');
}

async function seedExercises(): Promise<Exercise[]> {
    console.log('Seeding exercises...');
    const seededExercises: Exercise[] = [];

    for (const exercise of detailedExercises) {
        try {
            const newExercise = await prisma.exercise.create({
                data: {
                    name: exercise.name,
                    description: exercise.description,
                    primaryMuscleId: exercise.primaryMuscleId,
                    secondaryMuscleId: exercise.secondaryMuscleId,
                    equipmentId: exercise.equipmentId,
                    difficulty: exercise.difficulty,
                },
            });
            seededExercises.push(newExercise);
        } catch (error) {
            console.error(`Error creating exercise ${exercise.name}:`, error);
        }
    }

    return seededExercises;
}

async function seedWorkoutsAndExercises(exercises: Exercise[]) {
    console.log('Seeding workouts and workout exercises...');
    const endDate = new Date();
    const startDate = new Date(endDate.getTime() - 6 * 30 * 24 * 60 * 60 * 1000); // 6 months ago

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

        const workoutExercises = shuffledExercises.map((exercise, index) => ({
            workoutId: workout.id,
            exerciseId: exercise.id,
            order: index + 1,
            sets: faker.number.int({ min: 1, max: 5 }),
            reps: faker.number.int({ min: 5, max: 20 }),
            weight: generateRandomFloat(0, 100),
            minutesToComplete: faker.number.int({ min: 1, max: 10 }),
            restBetweenSets: faker.number.int({ min: 30, max: 120 }),
            notes: faker.helpers.maybe(() => faker.lorem.sentence(), { probability: 0.3 }),
        }));

        await prisma.workoutExercise.createMany({
            data: workoutExercises,
        });
    }
}

async function seedMuscleTypeChartDataPoints() {
    console.log('Seeding chart data points for muscle types...');
    const muscleTypes = await prisma.muscleType.findMany();
    const startDate = new Date('2024-01-01');
    const endDate = new Date('2024-07-31');

    for (const muscleType of muscleTypes) {
        const dataPoints = generateDateSpreadDataPoints(startDate, endDate);
        await prisma.chartDataPoint.createMany({
            data: dataPoints.map((dp) => ({
                date: dp.date,
                score: dp.score,
                muscleTypeId: muscleType.id,
            })),
        });
    }
    console.log('Seeded ChartDataPoints for MuscleTypes');
}

async function seedExerciseChartDataPoints() {
    console.log('Seeding chart data points for exercises...');
    const exercises = await prisma.exercise.findMany();
    const startDate = new Date('2024-01-01');
    const endDate = new Date('2024-07-31');

    for (const exercise of exercises) {
        const dataPoints = generateDateSpreadDataPoints(startDate, endDate);
        await prisma.chartDataPoint.createMany({
            data: dataPoints.map((dp) => ({
                date: dp.date,
                score: dp.score,
                exerciseId: exercise.id,
            })),
        });
    }
    console.log('Seeded ChartDataPoints for Exercises');
}

function generateDateSpreadDataPoints(
    startDate: Date,
    endDate: Date,
    count: number = 10
): { date: Date; score: number }[] {
    const dataPoints: { date: Date; score: number }[] = [];
    const dateRange = endDate.getTime() - startDate.getTime();

    for (let i = 0; i < count; i++) {
        const randomDate = new Date(startDate.getTime() + Math.random() * dateRange);
        dataPoints.push({
            date: randomDate,
            score: generateRandomFloat(0, 100),
        });
    }

    return dataPoints.sort((a, b) => a.date.getTime() - b.date.getTime());
}

async function seedChartsAndCards() {
    console.log('Seeding charts and cards...');
    const chartTypes = [
        { title: 'Bench Press Progress', dataType: ChartDataType.EXERCISE },
        { title: 'Chest Strength', dataType: ChartDataType.MUSCLE_TYPE },
        { title: 'Leg Development', dataType: ChartDataType.MUSCLE_TYPE },
        { title: 'Leg Press Machine Usage', dataType: ChartDataType.WORKOUT_EQUIPMENT },
    ];

    const startDate = new Date('2024-01-01');

    for (const chartType of chartTypes) {
        try {
            let dataSourceId = 1; // Default to 1 if no specific item is found

            switch (chartType.dataType) {
                case ChartDataType.EXERCISE:
                    if (chartType.title === 'Bench Press Progress') {
                        const benchPress = await prisma.exercise.findFirst({
                            where: { name: 'Bench Press' },
                        });
                        if (benchPress) dataSourceId = benchPress.id;
                    }
                    break;
                case ChartDataType.MUSCLE_TYPE:
                    if (chartType.title === 'Chest Strength') {
                        const chest = await prisma.muscleType.findFirst({
                            where: { name: 'Chest' },
                        });
                        if (chest) dataSourceId = chest.id;
                    } else if (chartType.title === 'Leg Development') {
                        const legs = await prisma.muscleType.findFirst({ where: { name: 'Legs' } });
                        if (legs) dataSourceId = legs.id;
                    }
                    break;
                case ChartDataType.WORKOUT_EQUIPMENT:
                    if (chartType.title === 'Leg Press Machine Usage') {
                        const legPressMachine = await prisma.workoutEquipment.findFirst({
                            where: { name: 'Leg Press Machine' },
                        });
                        if (legPressMachine) dataSourceId = legPressMachine.id;
                    }
                    break;
            }

            if (dataSourceId === 1) {
                console.warn(`No specific item found for ${chartType.title}. Using default ID 1.`);
            }

            const chart = await prisma.chart.create({
                data: {
                    label: chartType.title,
                    fill: false,
                    borderColor: faker.color.rgb(),
                    tension: generateRandomFloat(0, 1),
                    pointRadius: generateRandomFloat(0, 5),
                    showLegend: true,
                    showXAxis: true,
                    showYAxis: true,
                    maintainAspectRatio: false,
                    responsive: true,
                    dataType: chartType.dataType,
                    dataSourceId: dataSourceId,
                },
            });

            const card = await prisma.card.create({
                data: {
                    title: chartType.title,
                    period: startDate,
                    chartId: chart.id,
                },
            });

            console.log(`Created card: ${card.title} with chart type: ${chartType.dataType}`);
        } catch (error) {
            console.error(`Error creating chart/card for ${chartType.title}:`, error);
        }
    }
}

main()
    .catch((e) => {
        console.error('An error occurred during seeding:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
        console.log('Prisma client disconnected.');
    });