export const isThisDateToday = (timestamp: number): boolean => {
    const diff = Math.floor(Date.now() / 1000) - timestamp;
    return diff / 86400 < 1;
}

export const getLocaleDateString = (timestamp: number): string => {
    return new Date(timestamp * 1000).toLocaleDateString();
}

export const getTodaysLocaleDateString = (): string => {
    return new Date(Date.now()).toLocaleDateString();
}

export const getTodaysTimestamp = (): number => {
    const now = Math.floor(Date.now() / 1000);
    return now - (now % 86400);
}

export const getDayOfWeek = (timestamp: number) => {
    return new Date(timestamp * 1000).getDay();
}