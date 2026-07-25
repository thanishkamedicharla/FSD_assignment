function sumOfDigits(num: number): number {
    num = Math.abs(num); 

    let sum = 0;

    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    return sum;
}

const num2 = 367248;

console.log(`Sum of digits of ${num2} = ${sumOfDigits(num2)}`);