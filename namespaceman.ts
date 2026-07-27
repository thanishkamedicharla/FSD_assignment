namespace CitizenID {
    const voterIdLength = 12;

    export function checkVoterID(voterId: string): boolean {
        const onlyDigits = /^\d+$/.test(voterId);
        return onlyDigits && voterId.length === voterIdLength;
    }

    export function checkPassport(passport: string): boolean {
        const passportRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        return passportRegex.test(passport.toUpperCase());
    }

    export namespace Charges {
        export function calculateServiceTax(total: number): number {
            return total * 0.18; 
        }
    }
}
const myVoterID = "123456789012";
const myPassport = "ABCDE1234F";

console.log(`Is Voter ID Valid? ${CitizenID.checkVoterID(myVoterID)}`);
console.log(`Is Passport Valid? ${CitizenID.checkPassport(myPassport)}`);

const purchaseAmount = 1000;
const serviceTax = CitizenID.Charges.calculateServiceTax(purchaseAmount);

console.log(`GST on ₹${purchaseAmount} is ₹${serviceTax}`);

