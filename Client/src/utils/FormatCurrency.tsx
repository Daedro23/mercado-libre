export const formatCurrency = (value: number): string => {
    return value.toLocaleString('es-AR', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
};
