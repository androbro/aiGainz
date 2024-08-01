import { builder } from '@builder.io/sdk';
import { RenderBuilderContent } from '@/components/builder';
import { useCards } from '@/hooks/useCards';

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
    params: {
        page: string[];
    };
}

export default async function Page(props: PageProps) {
    const builderModelName = 'page';
    const urlPath = '/' + (props?.params?.page?.join('/') || '');
    const { cards } = useCards({}); // Use your existing hook to fetch cards

    const content = await builder
        .get(builderModelName, {
            userAttributes: {
                urlPath: urlPath,
            },
        })
        .toPromise();

    return (
        <RenderBuilderContent
            content={content}
            model={builderModelName}
            data={{ cards }} // Pass fetched cards to Builder content
        />
    );
}