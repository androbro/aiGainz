const workouts = [
    {
        name: 'Full Body Workout',
        description: 'A comprehensive workout targeting all major muscle groups.',
        exercises: [
            { exerciseId: benchPress.id, sets: 4, reps: 8 },
            { exerciseId: latPulldowns.id, sets: 3, reps: 10 },
            { exerciseId: squats.id, sets: 4, reps: 12 },
            { exerciseId: dumbbellShoulderPress.id, sets: 3, reps: 10 },
            { exerciseId: tricepDips.id, sets: 3, reps: 12 },
            { exerciseId: seatedLegCurl.id, sets: 4, reps: 10 },
            { exerciseId: cableRows.id, sets: 3, reps: 10 },
            { exerciseId: lunges.id, sets: 3, reps: 12 },
            { exerciseId: bicepCurls.id, sets: 3, reps: 12 },
            { exerciseId: russianTwists.id, sets: 3, reps: 15 },
        ],
    },
    {
        name: 'Upper Body Strength',
        description: 'Focuses on building strength in the upper body muscles.',
        exercises: [
            { exerciseId: barbellBenchPress.id, sets: 4, reps: 8 },
            { exerciseId: seatedCableRows.id, sets: 3, reps: 10 },
            { exerciseId: dumbbellShoulderPress.id, sets: 3, reps: 10 },
            { exerciseId: tricepRopePushdowns.id, sets: 3, reps: 12 },
            { exerciseId: inclineBenchPress.id, sets: 4, reps: 8 },
            { exerciseId: cableBicepCurls.id, sets: 3, reps: 12 },
            { exerciseId: hammerStrengthChestPress.id, sets: 3, reps: 10 },
            { exerciseId: russianTwists.id, sets: 3, reps: 15 },
        ],
    },
    {
        name: 'Leg Day',
        description: 'Targets the lower body muscles for strength and development.',
        exercises: [
            { exerciseId: legPress.id, sets: 4, reps: 12 },
            { exerciseId: romanianDeadlifts.id, sets: 3, reps: 10 },
            { exerciseId: walkingLunges.id, sets: 3, reps: 12 },
            { exerciseId: legCurl.id, sets: 4, reps: 10 },
            { exerciseId: calfRaise.id, sets: 3, reps: 15 },
        ],
    },
    {
        name: 'Core Workout',
        description: 'Focuses on strengthening the core muscles.',
        exercises: [
            { exerciseId: russianTwists.id, sets: 3, reps: 15 },
            { exerciseId: legRaises.id, sets: 3, reps: 12 },
            { exerciseId: plank.id, sets: 3, time: '1 minute' },
            { exerciseId: bicycleCrunches.id, sets: 3, reps: 20 },
            { exerciseId: flutterKicks.id, sets: 3, reps: 20 },
        ],
    },
];
