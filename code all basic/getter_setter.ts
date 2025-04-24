class Persons {
    private _age: number | undefined;

    constructor(public name: string, protected hobbies: string[]) {}

    public set age(age: number) {
        if (age > 150 || age < 0) {
            throw new Error("Age is not valid");
        }
        this._age = age;
    }

    public get age(): number {
        if (this._age === undefined) {
            throw new Error("Age is not defined");
        }
        return this._age;
    }

    introduceParent(): string {
        return `Hi, I'm ${this.name}, my age is ${this.age} years old.`;
    }
}

// Fixed constructor args — removed 12
const persons1 = new Persons("Vinod", ["reading", "writing"]);
persons1.age = 30; // Set age separately using the setter

console.log(persons1.age); // Should print 30
console.log(persons1.introduceParent()); // Should print intro string
