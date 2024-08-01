'use client';
import { builder, Builder } from '@builder.io/react';
import { ChartCard } from './app/components/cards/chartCard';
import Counter from './components/Counter/Counter';
import CustomCard from './components/Card/card';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
    name: 'Counter',
    inputs: [
        {
            name: 'initialCount',
            type: 'number',
        },
    ],
});

Builder.registerComponent(ChartCard, {
    name: 'ChartCard',
    inputs: [
        {
            name: 'card',
            type: 'object',
            hideFromUI: true,
            meta: {
                ts: 'ExtendedCard',
            },
            required: true,
        },
    ],
});

Builder.registerComponent(CustomCard, {
    name: 'CustomCard',
    inputs: [
        {
            name: 'content',
            type: 'string',
        },
        {
            name: 'footerContent',
            type: 'string',
        },
        {
            name: 'subTitle',
            type: 'string',
        },
        {
            name: 'title',
            type: 'string',
        },
    ],
});
