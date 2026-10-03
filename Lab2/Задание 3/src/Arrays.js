export function arraySorting(data) {
    return data
        .split(',')
        .map(Number)
        .sort((a, b) => a - b)
        .join(',');
}

export function arrayFiltering(data) {
    return data.filter(x => x <= 100);
}

export function arrayPushing(array1, array2) {
    const result = [];
    
    for (let i = 0; i < 5; i++) {
        result.push(array1[i]);
        result.push(array2[i]);
    }
    
    return result;
}