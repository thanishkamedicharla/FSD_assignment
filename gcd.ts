function gcd(a: number,b: number): number{
    while(b !== 0){
        const temp = b;
        b = a % b;
        a = temp;
    }
    return Math.abs(a);
}

function lcm(a: number, b: number): number{
    return Math.abs(a * b)/gcd(a,b);
}

const a = 35;
const b = 25;

console.log(`GCD of ${a} and ${b} = ${gcd(a,b)}`);
console.log(`LCM of ${a} and ${b} = ${lcm(a,b)}`);