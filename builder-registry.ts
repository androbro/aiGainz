'use client';
import { builder, Builder } from '@builder.io/react';
import { ChartCard } from './app/components/cards/chartCard';
import Counter from './components/Counter/Counter';
import CustomCard from './components/Card/card';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(ChartCard, {
    name: 'ChartCard',
    inputs: [
        {
            name: 'cardData',
            type: 'object',
            subFields: [
                { name: 'id', type: 'number' },
                { name: 'title', type: 'string' },
                { name: 'period', type: 'date' },
                {
                    name: 'chart',
                    type: 'object',
                    subFields: [
                        { name: 'id', type: 'number' },
                        { name: 'label', type: 'string' },
                        { name: 'fill', type: 'boolean' },
                        { name: 'borderColor', type: 'string' },
                        { name: 'tension', type: 'number' },
                        { name: 'pointRadius', type: 'number' },
                        { name: 'showLegend', type: 'boolean' },
                        { name: 'showXAxis', type: 'boolean' },
                        { name: 'showYAxis', type: 'boolean' },
                        { name: 'maintainAspectRatio', type: 'boolean' },
                        { name: 'responsive', type: 'boolean' },
                        { name: 'width', type: 'number' },
                        { name: 'height', type: 'number' },
                        {
                            name: 'dataPoints',
                            type: 'list',
                            subFields: [
                                { name: 'id', type: 'number' },
                                { name: 'date', type: 'date' },
                                { name: 'score', type: 'number' },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
});

Builder.registerComponent(Counter, {
    name: 'Counter',
    inputs: [
        {
            name: 'initialCount',
            type: 'number',
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