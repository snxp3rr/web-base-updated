export function personUpdate(data) {
    if (data.gender === 'female') {
        delete data.age;
    } else if (data.gender === 'male') {
        if (!('income' in data)) {
            data.income = 100000;
        }
    }
    return data;
}

export function objectFieldsList(obj1, obj2, obj3) {
    const allKeys = [
        ...Object.keys(obj1),
        ...Object.keys(obj2),
        ...Object.keys(obj3)
    ];
    const uniqueKeys = [...new Set(allKeys)];
    return uniqueKeys.sort();
}

export function objectClone(obj, count) {
    const result = [];
    for (let i = 0; i < count; i++) {
        const clone = structuredClone(obj);
        clone.id = i;
        result.push(clone);
    }
    return result;
}