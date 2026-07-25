function Prime(num: number): boolean{
    if(num < 2) return false;

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

function getPrimes(start: number,end: number): number[]{
    const primes: number[] = [];

    for(let i = start;i <= end;i++){
        if(Prime(i)){
            primes.push(i);
        }
    }

    return primes;
}

const start = 16;
const end = 60;

const prime = getPrimes(start,end);
console.log(`prime numbers between ${start} and ${end}`);
console.log(prime.join(", "));