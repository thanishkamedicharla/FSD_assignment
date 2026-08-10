class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    setValue(value: T): void {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }

    displayValue(): void {
        console.log("Value:", this.value);
    }
}

const numberBox = new Box<number>(100);
numberBox.displayValue();

const stringBox = new Box<string>("Hello, TypeScript!");
stringBox.displayValue();

const booleanBox = new Box<boolean>(true);
booleanBox.displayValue();