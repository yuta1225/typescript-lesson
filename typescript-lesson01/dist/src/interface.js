"use strict";
let addFunc;
addFunc = (n1, n2) => {
    return n1 + n2;
};
const nameable = {
    name: 'QUill',
    nickName: 'Quilla'
};
class Developer {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    greeting(message) {
        console.log('Hello');
    }
}
const user = new Developer('Quill', 38, 3);
const human = {
    name: 'Quill',
    age: 38,
    greeting(message) {
        console.log(message);
    }
};
let developer;
