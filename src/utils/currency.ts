export const convertToSymbol = (currency: string): string => {
    switch (currency) {
        case 'USD':
            return '$';
        case 'GBP':
            return '£';
        case 'EUR':
            return '€';
        default:
            return currency;
    }
};