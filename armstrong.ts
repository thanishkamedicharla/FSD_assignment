function isArmstrong(num: number): boolean {
    const digits = num.toString().split("");
    const power = digits.length;

    let sum = 0;

    for (const digit of digits) {
        sum += Math.pow(Number(digit), power);
    }

    return sum === num;
}

const num = 15;

if (isArmstrong(num)) {
    console.log(`${num} is an Armstrong number.`);
} else {
    console.log(`${num} is not an Armstrong number.`);
}