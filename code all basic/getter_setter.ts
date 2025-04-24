
// set extra validation korey and takes only one parameter 

class Persons {
    private _age: number | undefined;
    constructor( public name: string, protected hobbies: string[]){
        public set age(age: number){
            if (age>150 || age<0) {
                throw new Error(message: "age is not valid");

                
           
        }
this._age = age;
    }



public get age() :number{
if(this._age === undefined){
    throw new Error(message: "age is not defined");
}
return this._age
}







    introduceParent(): string{
        return `hi im ${this.name}  my age ${this.age} years old}`;
    }
    }

    const persons1= new Persons("vinod", 12, ["reading", "writing"]);

    console.log(persons1.age)