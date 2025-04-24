"use strict";
// blueprint of similar data use
// class Persons {
//     name:string= 'kokila';
//     age:number=12;
//     hobbies: string[] = ["reading", "singing"];
// }
// const persons1: Persons= new Persons() ;
// console.log( persons1.hobbies);
class Persons {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
}
const persons1 = new Persons("vinod", 12, ["reading", "writing"]);
// const persons1: Persons = new Persons(name : "vinod", age : 12, hobbies: ["reading", "writing"]);
// const persons2: Persons = new Persons(name : "thapa", age : 15, hobbies: ["coding", "writing"]);
// const persons3: Persons = new Persons(name : "bhar", age : 24, hobbies: ["sports", "writing"]);
console.log(persons1);
