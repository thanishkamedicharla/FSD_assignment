function welcome(student) {
    return `Welcome, ${student}!`;
}
function getCollege(college = "SVECW") {
    return `College: ${college}`;
}
function sendEmail(email, note) {
    console.log(`Sending email to ${email}...`);
    if (note) {
        console.log(`Note: ${note}`);
    }
}
function calculateAverage(...marks) {
    return marks.reduce((total, current) => total + current, 0) / marks.length;
}
console.log(welcome("Ananya"));
console.log(getCollege());
console.log(getCollege("JNTUH"));
sendEmail("student@gmail.com");
sendEmail("student@gmail.com", "Assignment submitted");
const average = calculateAverage(80, 90, 85, 95);
console.log(`Average Marks: ${average}`);
