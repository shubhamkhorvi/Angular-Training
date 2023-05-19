import { Iboy } from "./Iboy";

export class boy {
    boyDeets: Iboy = { name: "Shubham", age: 24, likes: ['anime','cats & dogs'], school: "NIE"};

    giveIntro(): void {
        console.log(`Hello Everyone!!. My name is ${this.boyDeets.name} . I am ${this.boyDeets.age} years old. I like ${this.boyDeets.likes} and I study in ${this.boyDeets.school}`);
    }
}