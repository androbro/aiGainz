import { parse } from 'chrono-node';

export function parseNaturalLanguageDate(input: string): Date | null {
    if (!input) return null;

    const parsedDate = parse(input, new Date(), { forwardDate: false })[0]?.start.date();
    return parsedDate || null;
}

export function formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}