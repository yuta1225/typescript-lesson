"use strict";
class Person {
    static isAdult(age) {
        if (age > 17) {
            return true;
        }
    }
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello My name is ${this.name}, I am ${this.age} years old`);
        this.explainJob();
    }
}
Person.species = 'Homo sapiens';
class Teacher extends Person {
    explainJob() {
        console.log(`I am a teacher and I teach ${this.subject}`);
    }
    get subject() {
        if (!this._subject) {
            throw new Error('Ther is no subject.');
        }
        return this._subject;
    }
    set subject(value) {
        if (!value) {
            throw new Error("There is no subject");
        }
        this._subject = value;
    }
    constructor(name, age, _subject) {
        super(name, age);
        this.name = name;
        this.age = age;
        this._subject = _subject;
    }
    static getInstance() {
        if (Teacher.instance)
            return Teacher.instance;
        Teacher.instance = new Teacher('Quill', 38, 'Math');
        return Teacher.instance;
    }
}
const teacher = Teacher.getInstance();
const teacher2 = Teacher.getInstance();
console.log(teacher, teacher2);
// console.log(Person.species);
// console.log(Person.isAdult(38));
// const teacher = new Teacher('Quill', 38, 'Math');
// console.log(teacher.subject);
// teacher.subject = 'language';
// teacher.greeting();
// const anotherQuill = {
//     name: 'anotherQuill',
//     anotherGreeting: quill.greeting
// }
// anotherQuill.greeting();
