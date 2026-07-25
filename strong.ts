function factorial(n: number): number {
    let fact = 1;

    for (let i = 2; i <= n; i++) {
        fact *= i;
    }

    return fact;
}

function isStrong(num: number): boolean {
    let original = num;
    let sum = 0;

    while (num > 0) {
        const digit = num % 10;
        sum += factorial(digit);
        num = Math.floor(num / 10);
    }

    return sum === original;
}

// Example usage
const n2 = 145;

if (isStrong(n2)) {
    console.log(`${n2} is a Strong Number.`);
} else {
    console.log(`${n2} is not a Strong Number.`);
}