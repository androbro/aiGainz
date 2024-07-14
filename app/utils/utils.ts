// utils.ts
export const parseDate = (dateString: string | Date): Date => {
    return dateString instanceof Date ? dateString : new Date(dateString);
};