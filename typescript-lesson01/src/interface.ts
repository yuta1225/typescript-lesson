// type addFunc = (num1: number, nu2: number) => number;
interface addFunc {
    (num1: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => {
    return n1+n2;
}
type Nameable = {
    name: string;
    nickName?: string;
}
const nameable: Nameable = {
    name:'QUill',
    nickName: 'Quilla'
}
interface Human extends Nameable{
    age: number;
    greeting(message: string): void;
}
class Developer implements Human {
    constructor(public name: string, public age: number, public experience: number){}
    greeting(message: string): void {
        console.log('Hello');
    }
}
const user: Human = new Developer('Quill', 38, 3);
const human: Human = {
    name: 'Quill',
    age: 38,
    greeting(message: string) {
        console.log(message);
    }
}
let developer: Human;