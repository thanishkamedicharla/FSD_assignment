"use strict";
class Vehicle {
    brand;
    model;
    color;
    fuelType;
    constructor(brand, model, color, fuel) {
        this.brand = brand;
        this.model = model;
        this.color = color ?? "Black";
        this.fuelType = fuel ?? "Petrol";
    }
    displayDetails() {
        console.log("---vehicle Details---");
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuel: ${this.fuelType}`);
    }
}
const v1 = new Vehicle("Honda", "City");
const v2 = new Vehicle("BMW", "M4", "Black", "Diesel");
const v3 = new Vehicle("Suzuki", "Baleno", "Grey", "Petrol");
v1.displayDetails();
v2.displayDetails();
