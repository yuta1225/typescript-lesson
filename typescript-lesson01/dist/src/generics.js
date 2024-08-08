"use strict";
function copy(value, key) {
    return value;
}
console.log(copy({ name: 'Quill', age: 38 }, 'name'));
class LightDatabase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    removbe(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase();
stringLightDatabase.add('Apple');
const tmpDatabase = {
    id: 3,
    data: [2]
};
const fetchData = new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 3000);
});
fetchData.then(data => {
    data.toUpperCase();
});
const vegetables = ['Tomato', 'Brocoli', 'Asparagus'];
let tmp2;
let tmp4;
let tmp5;
const Human = {
    greeting(message) {
        console.log(message);
    }
};
