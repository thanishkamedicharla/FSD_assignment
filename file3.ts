import { TAX_PERCENTAGE, SERVICE_CHARGE } from "./file1";
import { Traveler } from "./file2";

export class RailTicket {
    constructor(
        public traveler: Traveler,
        public ticketCost: number,
        public trainCode: number
    ) {}

    // Method to calculate total ticket cost
    public calculateTotalCost(): number {
        const tax = this.ticketCost * TAX_PERCENTAGE;
        return this.ticketCost + tax + SERVICE_CHARGE;
    }

    public displayTicket(): void {
        console.log("===== Ticket Confirmed =====");
        console.log("Passenger Name:", this.traveler.travelerName);
        console.log("Age:", this.traveler.travelerAge);
        console.log("Train Number:", this.trainCode);
        console.log("Seat Preference:", this.traveler.seatChoice);
        console.log("Total Fare:", this.calculateTotalCost());
    }
}