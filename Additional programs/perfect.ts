function isPerfect(num: number): boolean {
    if (num <= 1) return false;

    let sum = 1;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;

            if (i !== num / i) {
                sum += num / i;
            }
        }
    }

    return sum === num;
}

const n1 = 15;

if (isPerfect(n1)) {
    console.log(`${n1} is a Perfect Number.`);
} else {
    console.log(`${n1} is not a Perfect Number.`);
}