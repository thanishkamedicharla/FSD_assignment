function countOccurrences(arr: number[]): Map<number, number> {
    const countMap = new Map<number, number>();

    for (const num of arr) {
        if (countMap.has(num)) {
            countMap.set(num, countMap.get(num)! + 1);
        } else {
            countMap.set(num, 1);
        }
    }

    return countMap;
}

const arr = [1, 2, 3, 2, 4, 1, 2, 5];

const after_count = countOccurrences(arr);

console.log("Element occurrences:");

after_count.forEach((count: number, element: number) => {
    console.log(`${element}: ${count}`);
});