export const createTitleFromName = (name: string): string => {
    // if there is a dot, remove it and everything after it
    if (name.includes('.')) {
        name = name.split('.')[0];
    }
    // add a space before all caps
    let listOfWords: string[] = name.split(/(?=[A-Z])/);
    // capitalize first letter of each word
    listOfWords = listOfWords.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return listOfWords.join(' ');
};

export const createSnakeFromName = (name: string): string => {
    // add a space before all caps
    let listOfWords: string[] = name.split(/(?=[A-Z])/);
    //uppercase all letters
    listOfWords = listOfWords.map((word) => {
        return word.toUpperCase();
    });
    //add underscore between words
    return listOfWords.join('_');
};

export const shortenStringAndAddEllipsis = (length: number, str: string): string => {
    if (str && str.length > length) {
        return str.substring(0, length) + '...';
    }
    return str;
};

export const capitalizeFirstLetter = (name: string): string => {
    return name.charAt(0).toUpperCase() + name.slice(1);
};

export const areEqual = (lhs: string, rhs: string, caseInsensitive: boolean = true): boolean => {
    if (!lhs || !rhs) {
        return false;
    }
    if (caseInsensitive) {
        return lhs.localeCompare(rhs, undefined, { sensitivity: 'base' }) === 0;
    }

    return lhs.localeCompare(rhs, undefined) === 0;
};

export const getFormattedDate = (date: Date): string => {
    if (date !== undefined) {
        const dateOptions: Intl.DateTimeFormatOptions = {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
        };
        return new Date(date).toLocaleDateString('en-GB', dateOptions);
    } else {
        return 'No Date';
    }
};

export const createSentence = (words: string[]): string => {
    return words.join(' ');
};