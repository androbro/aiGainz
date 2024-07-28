// Muscle ID mapping based on the order in muscleGroups array
const muscleIdMap: { [key: string]: number } = {
    Chest: 1,
    Back: 2,
    Shoulders: 3,
    Legs: 4,
    Quadriceps: 5,
    Hamstrings: 6,
    Calves: 7,
    Arms: 8,
    Biceps: 9,
    Triceps: 10,
    Forearms: 11,
    Abs: 12,
    Glutes: 13,
    'Hip flexors': 14,
    Obliques: 15,
    Trapezius: 16,
    'Latissimus dorsi': 17,
    Rhomboids: 18,
    'Erector spinae': 19,
    Adductors: 20,
    Abductors: 21,
    Pectorals: 22,
    'Serratus anterior': 23,
    Deltoids: 24,
    'Tibialis anterior': 25,
    Soleus: 26,
};

interface DetailedExercise {
    name: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    primaryMuscleId: number;
    secondaryMuscleId: number | null;
    description: string;
    equipmentId: number;
}

export const detailedExercises: DetailedExercise[] = [
    {
        name: 'Bench Press',
        difficulty: 'Intermediate',
        primaryMuscleId: muscleIdMap['Chest'],
        secondaryMuscleId: muscleIdMap['Triceps'],
        description: 'Lie on a bench and press a barbell upwards from your chest.',
        equipmentId: 8, // Bench Press
    },
    {
        name: 'Squat',
        difficulty: 'Intermediate',
        primaryMuscleId: muscleIdMap['Quadriceps'],
        secondaryMuscleId: muscleIdMap['Glutes'],
        description: 'Lower your body as if sitting back into a chair, then stand back up.',
        equipmentId: 17, // Barbell Plates
    },
    {
        name: 'Deadlift',
        difficulty: 'Advanced',
        primaryMuscleId: muscleIdMap['Back'],
        secondaryMuscleId: muscleIdMap['Hamstrings'],
        description: 'Lift a loaded barbell off the ground to hip level.',
        equipmentId: 17, // Barbell Plates
    },
    {
        name: 'Overhead Press',
        difficulty: 'Intermediate',
        primaryMuscleId: muscleIdMap['Shoulders'],
        secondaryMuscleId: muscleIdMap['Triceps'],
        description: 'Press a barbell from shoulder level to overhead.',
        equipmentId: 17, // Barbell Plates
    },
    {
        name: 'Pull-up',
        difficulty: 'Intermediate',
        primaryMuscleId: muscleIdMap['Back'],
        secondaryMuscleId: muscleIdMap['Biceps'],
        description: 'Hang from a bar and pull your body up until your chin is over the bar.',
        equipmentId: 4, // Pull-up Bar
    },
    {
        name: 'Dumbbell Row',
        difficulty: 'Beginner',
        primaryMuscleId: muscleIdMap['Back'],
        secondaryMuscleId: muscleIdMap['Biceps'],
        description: 'Bend over and row a dumbbell to your hip.',
        equipmentId: 3, // Dumbbells
    },
    {
        name: 'Leg Press',
        difficulty: 'Beginner',
        primaryMuscleId: muscleIdMap['Quadriceps'],
        secondaryMuscleId: muscleIdMap['Glutes'],
        description: 'Push a weight away from you using your legs while seated.',
        equipmentId: 1, // Leg Press Machine
    },
    {
        name: 'Lat Pulldown',
        difficulty: 'Beginner',
        primaryMuscleId: muscleIdMap['Back'],
        secondaryMuscleId: muscleIdMap['Biceps'],
        description: 'Pull a bar down to your chest while seated.',
        equipmentId: 24, // Cable Crossover Machine
    },
    {
        name: 'Tricep Pushdown',
        difficulty: 'Beginner',
        primaryMuscleId: muscleIdMap['Triceps'],
        secondaryMuscleId: null,
        description: 'Push a cable attachment down using your triceps.',
        equipmentId: 24, // Cable Crossover Machine
    },
    {
        name: 'Bicep Curl',
        difficulty: 'Beginner',
        primaryMuscleId: muscleIdMap['Biceps'],
        secondaryMuscleId: null,
        description: 'Curl a weight towards your shoulders.',
        equipmentId: 3, // Dumbbells
    },
    {
        name: 'Leg Extension',
        difficulty: 'Beginner',
        primaryMuscleId: muscleIdMap['Quadriceps'],
        secondaryMuscleId: null,
        description: 'Extend your legs against resistance while seated.',
        equipmentId: 15, // Leg Extension Machine
    },
    {
        name: 'Leg Curl',
        difficulty: 'Beginner',
        primaryMuscleId: muscleIdMap['Hamstrings'],
        secondaryMuscleId: null,
        description:
            'Curl your legs towards your buttocks against resistance while lying face down.',
        equipmentId: 21, // Leg Curl Machine
    },
    {
        name: 'Calf Raise',
        difficulty: 'Beginner',
        primaryMuscleId: muscleIdMap['Calves'],
        secondaryMuscleId: null,
        description: 'Raise your heels off the ground using your calf muscles.',
        equipmentId: 3, // Dumbbells
    },
    {
        name: 'Plank',
        difficulty: 'Beginner',
        primaryMuscleId: muscleIdMap['Abs'],
        secondaryMuscleId: muscleIdMap['Shoulders'],
        description: 'Hold a push-up position with your body in a straight line.',
        equipmentId: 5, // Yoga Mat
    },
    {
        name: 'Russian Twist',
        difficulty: 'Beginner',
        primaryMuscleId: muscleIdMap['Abs'],
        secondaryMuscleId: muscleIdMap['Obliques'],
        description:
            'Twist your torso from side to side while seated with your feet off the ground.',
        equipmentId: 20, // Medicine Ball
    },
    {
        name: 'Lunges',
        difficulty: 'Beginner',
        primaryMuscleId: muscleIdMap['Quadriceps'],
        secondaryMuscleId: muscleIdMap['Glutes'],
        description:
            'Step forward and lower your body until both knees are bent at 90-degree angles.',
        equipmentId: 3, // Dumbbells
    },
    {
        name: 'Dips',
        difficulty: 'Intermediate',
        primaryMuscleId: muscleIdMap['Triceps'],
        secondaryMuscleId: muscleIdMap['Chest'],
        description: 'Lower and raise your body between parallel bars.',
        equipmentId: 19, // Dip Bars
    },
    {
        name: 'Face Pull',
        difficulty: 'Beginner',
        primaryMuscleId: muscleIdMap['Shoulders'],
        secondaryMuscleId: muscleIdMap['Trapezius'],
        description: 'Pull a rope attachment towards your face, focusing on rear deltoids.',
        equipmentId: 24, // Cable Crossover Machine
    },
    {
        name: 'Lateral Raise',
        difficulty: 'Beginner',
        primaryMuscleId: muscleIdMap['Shoulders'],
        secondaryMuscleId: null,
        description: 'Raise dumbbells to the sides until arms are parallel with the ground.',
        equipmentId: 3, // Dumbbells
    },
    {
        name: 'Front Raise',
        difficulty: 'Beginner',
        primaryMuscleId: muscleIdMap['Shoulders'],
        secondaryMuscleId: null,
        description: 'Raise dumbbells in front of you until arms are parallel with the ground.',
        equipmentId: 3, // Dumbbells
    },
    {
        name: 'Incline Bench Press',
        difficulty: 'Intermediate',
        primaryMuscleId: muscleIdMap['Chest'],
        secondaryMuscleId: muscleIdMap['Shoulders'],
        description: 'Perform a bench press on an inclined bench.',
        equipmentId: 8, // Bench Press
    },
    {
        name: 'Romanian Deadlift',
        difficulty: 'Intermediate',
        primaryMuscleId: muscleIdMap['Hamstrings'],
        secondaryMuscleId: muscleIdMap['Back'],
        description: 'Hinge at the hips to lower a barbell down the legs.',
        equipmentId: 17, // Barbell Plates
    },
    {
        name: 'Barbell Row',
        difficulty: 'Intermediate',
        primaryMuscleId: muscleIdMap['Back'],
        secondaryMuscleId: muscleIdMap['Biceps'],
        description: 'Bend over and row a barbell to your lower chest.',
        equipmentId: 17, // Barbell Plates
    },
    {
        name: 'Hip Thrust',
        difficulty: 'Intermediate',
        primaryMuscleId: muscleIdMap['Glutes'],
        secondaryMuscleId: muscleIdMap['Hamstrings'],
        description: 'Thrust your hips upward while your upper back rests on a bench.',
        equipmentId: 17, // Barbell Plates
    },
    {
        name: 'Chest Fly',
        difficulty: 'Beginner',
        primaryMuscleId: muscleIdMap['Chest'],
        secondaryMuscleId: null,
        description:
            'Lie on a bench and open your arms wide, then bring dumbbells together over your chest.',
        equipmentId: 3, // Dumbbells
    },
    {
        name: 'Tricep Extension',
        difficulty: 'Beginner',
        primaryMuscleId: muscleIdMap['Triceps'],
        secondaryMuscleId: null,
        description:
            'Extend your arms overhead, lowering a weight behind your head and then raising it.',
        equipmentId: 3, // Dumbbells
    },
    {
        name: 'Hammer Curl',
        difficulty: 'Beginner',
        primaryMuscleId: muscleIdMap['Biceps'],
        secondaryMuscleId: muscleIdMap['Forearms'],
        description: 'Curl dumbbells with a neutral grip (palms facing each other).',
        equipmentId: 3, // Dumbbells
    },
    {
        name: 'Seated Cable Row',
        difficulty: 'Beginner',
        primaryMuscleId: muscleIdMap['Back'],
        secondaryMuscleId: muscleIdMap['Biceps'],
        description: 'Sit at a cable machine and pull the cable attachment towards your abdomen.',
        equipmentId: 24, // Cable Crossover Machine
    },
    {
        name: 'Leg Press Calf Raise',
        difficulty: 'Beginner',
        primaryMuscleId: muscleIdMap['Calves'],
        secondaryMuscleId: null,
        description: 'Perform calf raises on the leg press machine.',
        equipmentId: 1, // Leg Press Machine
    },
    {
        name: 'Hanging Leg Raise',
        difficulty: 'Intermediate',
        primaryMuscleId: muscleIdMap['Abs'],
        secondaryMuscleId: muscleIdMap['Hip flexors'],
        description: "Hang from a bar and raise your legs until they're parallel to the ground.",
        equipmentId: 4, // Pull-up Bar
    },
    {
        name: 'Back Extension',
        difficulty: 'Beginner',
        primaryMuscleId: muscleIdMap['Erector spinae'],
        secondaryMuscleId: muscleIdMap['Glutes'],
        description: 'Lie face down on a hyperextension bench and raise your upper body.',
        equipmentId: 11, // Hyperextension Bench
    },
    {
        name: 'Shrug',
        difficulty: 'Beginner',
        primaryMuscleId: muscleIdMap['Trapezius'],
        secondaryMuscleId: null,
        description: 'Lift your shoulders towards your ears while holding weights.',
        equipmentId: 3, // Dumbbells
    },
    {
        name: 'Reverse Fly',
        difficulty: 'Beginner',
        primaryMuscleId: muscleIdMap['Shoulders'],
        secondaryMuscleId: muscleIdMap['Trapezius'],
        description: 'Bend forward and raise weights out to your sides, focusing on rear deltoids.',
        equipmentId: 3, // Dumbbells
    },
    {
        name: 'Chin-up',
        difficulty: 'Intermediate',
        primaryMuscleId: muscleIdMap['Back'],
        secondaryMuscleId: muscleIdMap['Biceps'],
        description: 'Pull yourself up to a bar using an underhand grip.',
        equipmentId: 4, // Pull-up Bar
    },
    {
        name: 'Close-Grip Bench Press',
        difficulty: 'Intermediate',
        primaryMuscleId: muscleIdMap['Triceps'],
        secondaryMuscleId: muscleIdMap['Chest'],
        description: 'Perform a bench press with hands closer together.',
        equipmentId: 8, // Bench Press
    },
    {
        name: 'Good Morning',
        difficulty: 'Intermediate',
        primaryMuscleId: muscleIdMap['Hamstrings'],
        secondaryMuscleId: muscleIdMap['Erector spinae'],
        description: 'Bend forward at the hips with a barbell on your shoulders.',
        equipmentId: 17, // Barbell Plates
    },
    {
        name: 'Cable Woodchopper',
        difficulty: 'Beginner',
        primaryMuscleId: muscleIdMap['Abs'],
        secondaryMuscleId: muscleIdMap['Obliques'],
        description: 'Rotate your torso while pulling a cable from high to low or low to high.',
        equipmentId: 24, // Cable Crossover Machine
    },
    {
        name: 'Seated Overhead Press',
        difficulty: 'Intermediate',
        primaryMuscleId: muscleIdMap['Shoulders'],
        secondaryMuscleId: muscleIdMap['Triceps'],
        description: 'Press a weight overhead while seated.',
        equipmentId: 3, // Dumbbells
    },
    {
        name: 'Dumbbell Pullover',
        difficulty: 'Intermediate',
        primaryMuscleId: muscleIdMap['Chest'],
        secondaryMuscleId: muscleIdMap['Latissimus dorsi'],
        description: 'Lie on a bench and lower a dumbbell behind your head in an arc.',
        equipmentId: 3, // Dumbbells
    },
];