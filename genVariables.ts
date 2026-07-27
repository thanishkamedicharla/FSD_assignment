class lockBox<T> {
    private contents: T;

    constructor(firstItem: T){
        this.contents = firstItem;
    }

    public giveItem():T{
        console.log("Accessing locker Box...");
        return this.contents
    }

    public givenItem(newItem: T):void{
        this.contents = newItem;
        console.log("Locker updated successfully.");
    }
}

const cashLocker = new lockBox<number>(5000);
let cash = cashLocker.giveItem();
console.log(`Current Balance: rs${cash}`);

const jewelLocker = new lockBox<string>("Property Papers - Mumbai Flat");
console.log(`Stored Jewellery: ${jewelLocker.giveItem()}`);

interface Gold{
    weight: number;
    quality: string;
}

const goldLocker = new lockBox<Gold>({ weight: 60,quality:"24k"});
const myGold = goldLocker.giveItem();
console.log(`Gold Weight: ${myGold.weight}g`);