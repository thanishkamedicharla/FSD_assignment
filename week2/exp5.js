"use strict";
function calculateFine(daysLate, finePerDay) {
    return daysLate * finePerDay;
}
const calculateLibFine = (daysLate, finePerDay) => {
    return daysLate * finePerDay;
};
const getLibraryMessage = (library) => `Welcome to ${library} Library!`;
const lateDays = 6;
const fineAmount = 10;
const totalFine1 = calculateFine(lateDays, fineAmount);
console.log(`Total Fine(Traditional): ${totalFine1}Rs`);
const totalFine2 = calculateLibFine(lateDays, fineAmount);
console.log(`Total Fine(Arrow): ${totalFine2}`);
console.log(getLibraryMessage("Central"));
const cube = (a) => a * a * a;
