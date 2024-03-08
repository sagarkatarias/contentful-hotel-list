export const dateToGermanFormat = (date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString('de-DE' , {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
};