"use strict";
let playerName = "Virat Kohli";
let jerseyNumber = 18;
let isCaptain = false;
function getPlayerInfo(name, number) {
    return `${name} wears jersey number ${number}`;
}
let teamMembers = ["Rohit sharma", "Shubman Gill", "KL Rahul", "Hardik Pandya"];
const result = getPlayerInfo(playerName, jerseyNumber);
console.log(result);
console.log("captain: ", isCaptain);
console.log("Team Members: ", teamMembers.join(","));
