'use client';
import { ComponentProps } from 'react';
import { BuilderComponent, useIsPreviewing } from '@builder.io/react';
import { BuilderContent, builder } from '@builder.io/sdk';
import DefaultErrorPage from 'next/error';
import '../builder-registry';

// Extend BuilderPageProps to include our custom data
interface ExtendedBuilderPageProps extends ComponentProps<typeof BuilderComponent> {
    data?: any; // This will allow us to pass additional data to Builder components
}

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export function RenderBuilderContent({ content, model, data }: ExtendedBuilderPageProps) {
    // Call the useIsPreviewing hook to determine if
    // the page is being previewed in Builder
    const isPreviewing = useIsPreviewing();

    // If "content" has a value or the page is being previewed in Builder,
    // render the BuilderComponent with the specified content, model, and data props.
    if (content || isPreviewing) {
        return <BuilderComponent content={content} model={model} data={data} />;
    }

    // If the "content" is falsy and the page is
    // not being previewed in Builder, render the
    // DefaultErrorPage with a 404.
    return <DefaultErrorPage statusCode={404} />;
}