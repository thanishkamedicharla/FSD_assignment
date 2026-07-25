function rotateArray(arr: number[], n: number): number[] {
    const length = arr.length;

    n = n % length;

    return [...arr.slice(-n), ...arr.slice(0, length - n)];
}

const array = [1, 2, 3, 4, 5];

const rotatedArray = rotateArray(array, 2);

console.log("Original Array:", array);
console.log("Rotated Array:", rotatedArray);