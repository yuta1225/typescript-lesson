"use strict";
let hasValue = true;
let count = 11;
let float = 30;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
const person = {
    name: {
        first: 'Jack',
        second: 'Smith'
    },
    age: 21
};
const fruits = ['Apple', 'Banana', 'Grape', 1];
const book = ['business', 1500, false];
book[1] = 700;
book.push(21);
// console.log(book[3]);
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const Coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
let anything = true;
anything = 'hello';
anything = {};
anything.al = 'al';
let banana = 'banana';
banana = anything;
let unionType = 10;
let unionTypes = [21, 'hello'];
// リテラル型
const apple = 'apple';
const mango = 0;
let clothSize = 'large';
const cloth = {
    color: 'white',
    size: clothSize
};
function add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log('Hello!');
}
function sayGood() {
    return;
}
const anotherAdd = add;
const doubleNUmber = (number) => number * 2;
const doubllNumber = number => number * 2;
function doubleAndHandle(num, callback) {
    const doubleNum = callback(num * 2);
    console.log(num * 2);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
// unkown型
const Cons = 1;
let unknownInput;
let anyInput;
let text;
unknownInput = 'hello';
unknownInput = 21;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
// never型
function error(message) {
    throw new Error(message);
    while (true) {
    }
}
console.log(error('This is an error !'));
