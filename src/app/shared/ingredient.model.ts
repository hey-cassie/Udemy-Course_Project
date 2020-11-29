export class Ingredient {
    public name: string;
    public amount: number;

    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }
}

//can also substitute code below for above code! WOAH Angular just fills in the blanks!
// export class Ingredient {
// constructor(public name: string, public amount: number)
// }