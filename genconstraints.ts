interface Alonglength{
    length:number;
}

function getLength<T extends Alonglength>(value: T):number{
    return value.length;
}

console.log(getLength("nodeJS"));
console.log(getLength([1,2,3]));