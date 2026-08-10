"use strict";
let value = 10;
value = "It is a string";
console.log(value);
let unknownval = 10;
if (typeof unknownval === "string") {
    console.log("Length of string :" + unknownval.length);
}
else {
    console.log("This is a number");
}
function popMessage(message) {
    console.log("ALERT!" + message);
}
popMessage("Setup Interrupted!");
