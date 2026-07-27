import {Traveler} from "./file2.js";
import {RailTicket} from "./file3.js";

const traveler: Traveler = {
    travelerName: "Sowmya",
    travelerAge: 45,
    seatChoice: "Lower"
};

const railwayTicket = new RailTicket(traveler, 1200, 12266);
railwayTicket.displayTicket();