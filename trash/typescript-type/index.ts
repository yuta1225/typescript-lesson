let hasValue: boolean = true;
let count: number = 11;
let float: number = 30;
let negative: number = -0.12;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;
const person = {
    name: {
        first: 'Jack',
        second: 'Smith'
    }, 
    age: 21
} 
const fruits: any[] = ['Apple', 'Banana', 'Grape', 1]
const book: [string, number, boolean] = ['business', 1500, false];
book[1] = 700;
book.push(21);
// console.log(book[3]);

enum CoffeeSize {
    SHORT =  'SHORT',
    TALL = 'TALL',
    GRANDE = 'GRANDE',
    VENTI = 'VENTI'
}
const Coffee = {
    hot: true,
    size: CoffeeSize.TALL
}
let anything: any =true;
anything = 'hello';
anything = {};
anything.al = 'al';
let banana = 'banana';
banana = anything;

let unionType: number | string = 10;
let unionTypes: (number | string)[] = [21, 'hello'];
// リテラル型
const apple: 'apple' = 'apple';
const mango: 0 = 0;
// コンストでリテラル型になる


type ClothSize = 'small' | 'medium' | 'large'
let clothSize:  ClothSize = 'large';
const cloth: {
    color: string,
    size: 'small' | 'medium' | 'large'
} = {
    color: 'white',
    size: clothSize
}

function add(num1: number, num2: number): number {
    return num1 + num2
}

function sayHello(): void {
    console.log('Hello!');
}
function sayGood(): undefined {
    return;
}

const anotherAdd: (n1: number, n2: number) => number = add;
const doubleNUmber = (number: number): number => number * 2;
const doubllNumber: (num: number) => number = number => number * 2;

function doubleAndHandle(num: number, callback: (num: number) => number): void{
    const doubleNum = callback(num * 2);
    console.log(num * 2);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});

// unkown型
const Cons: number = 1;
let unknownInput: unknown;
let anyInput: NavigationTimingType;
let text: string;
unknownInput = 'hello';
unknownInput = 21;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}

// never型
function error(message: string): never {
    throw new Error(message);
    while(true){

    }
}
console.log(error('This is an error !'));