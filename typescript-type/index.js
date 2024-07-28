var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var back = "hello";
var person = {
    name: {
        first: 'Jack',
        second: 'Smith'
    },
    age: 21
};
var fruits = ['Apple', 'Banana', 'Grape', 1];
var book = ['business', 1500, false];
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
var Coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
var anything = true;
anything = 'hello';
anything = {};
anything.al = 'al';
var banana = 'banana';
banana = anything;
var unionType = 10;
var unionTypes = [21, 'hello'];
// リテラル型
var apple = 'apple';
var mango = 0;
var clothSize = 'large';
var cloth = {
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
var anotherAdd = add;
var doubleNUmber = function (number) { return number * 2; };
var doubllNumber = function (number) { return number * 2; };
function doubleAndHandle(num, callback) {
    var doubleNum = callback(num * 2);
    console.log(num * 2);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
// unkown型
var unknownInput;
var anyInput;
var text;
unknownInput = 'hello';
unknownInput = 21;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
// never型
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error'));
