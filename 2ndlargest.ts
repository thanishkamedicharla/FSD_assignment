function findSecondLargest(arr: number[]): number | null {
    if (arr.length < 2) {
        return null;
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (const num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }

    return secondLargest === -Infinity ? null : secondLargest;
}

const numbers = [10, 5, 8, 20, 15];

const largest_2 = findSecondLargest(numbers);

console.log("Second largest number:", largest_2);