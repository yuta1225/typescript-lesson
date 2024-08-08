abstract class Person {
    static species = 'Homo sapiens';
    static isAdult(age: number) {
        if (age > 17) {
            return true;
        }
    }
    constructor(public name: string, protected age: number) {
    }
    incrementAge() {
        this.age += 1;
    }
    greeting( this: Person ) {
        console.log(`Hello My name is ${this.name}, I am ${this.age} years old`);
        this.explainJob();
    }
    abstract explainJob(): void;
}
class Teacher extends Person {
    private static instance: Teacher;
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
    private constructor(readonly name: string, protected age: number, private _subject: string) {
        super(name, age);
    }
    static getInstance() {
        if (Teacher.instance) return Teacher.instance;
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