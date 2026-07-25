import {Traveler} from "./file2";
import {RailTicket} from "./file3";

const traveler: Traveler = {
    travelerName: "Sowmya",
    travelerAge: 45,
    seatChoice: "Lower"
};

const railwayTicket = new RailTicket(traveler, 1200, 12266);
railwayTicket.displayTicket();