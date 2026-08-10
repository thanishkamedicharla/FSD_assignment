function fetchFirstElement<T>(collection: T[]): T {
    return collection[0];
}

function packItem<T>(product: T): { packageItem: T; packedOn: Date } {
    return {
        packageItem: product,
        packedOn: new Date()
    };
}

const places = ["Mumbai", "Delhi", "Bangalore"];
const startingCity = fetchFirstElement<string>(places); 
console.log(`Sending first parcel to: ${startingCity.toUpperCase()}`);

const zipCodes = [400001, 110001, 560001];
const startingPin = fetchFirstElement<number>(zipCodes); 
console.log(`Starting delivery at Pincode: ${startingPin}`);

interface Gadget {
    company: string;
    version: string;
}

const mobile: Gadget = {
    company: "Samsung",
    version: "S24"
};

const boxedMobile = packItem<Gadget>(mobile); // T becomes Gadget

console.log(
    `Packed item: ${boxedMobile.packageItem.company} at ${boxedMobile.packedOn}`
);

const inferredCity = fetchFirstElement(places); 