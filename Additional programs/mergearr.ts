function mergeArrays(arr1: number[], arr2: number[]): number[] {
    return [...arr1, ...arr2];
}


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = mergeArrays(array1, array2);

console.log("Merged Array:", mergedArray);