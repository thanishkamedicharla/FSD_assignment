function binaryToDecimal(binary: string): number {
    let decimal = 0;
    let power = 0;

    for (let i = binary.length - 1; i >= 0; i--) {
        const digit = Number(binary[i]);

        if (digit !== 0 && digit !== 1) {
            throw new Error("Invalid binary number");
        }

        decimal += digit * Math.pow(2, power);
        power++;
    }

    return decimal;
}

const binary1 = "11001";

console.log(`Decimal of ${binary} is ${binaryToDecimal(binary)}`);