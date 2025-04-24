var Persons = /** @class */ (function () {
    function Persons(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
    Object.defineProperty(Persons.prototype, "age", {
        get: function () {
            if (this._age === undefined) {
                throw new Error("Age is not defined");
            }
            return this._age;
        },
        set: function (age) {
            if (age > 150 || age < 0) {
                throw new Error("Age is not valid");
            }
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    Persons.prototype.introduceParent = function () {
        return "Hi, I'm ".concat(this.name, ", my age is ").concat(this.age, " years old.");
    };
    return Persons;
}());
// Fixed constructor args — removed 12
var persons1 = new Persons("Vinod", ["reading", "writing"]);
persons1.age = 30; // Set age separately using the setter
console.log(persons1.age); // Should print 30
console.log(persons1.introduceParent()); // Should print intro string
