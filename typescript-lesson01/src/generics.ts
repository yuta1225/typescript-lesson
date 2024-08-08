function copy<T extends { name: string }, U extends keyof T>(value: T, key: U): T {
    return value;
}
console.log(copy({ name: 'Quill', age: 38}, 'name'));
type K = keyof { name: string; age: number }

class  LightDatabase<T extends string | number | boolean>{
    private data: T[] = [];
    add(item: T) {
        this.data.push(item);
    }
    removbe(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringLightDatabase = new LightDatabase<string>();
stringLightDatabase.add('Apple');
interface TmpDatabase<T> {
    id: number;
    data: T[]
}
const tmpDatabase: TmpDatabase<number> = {
    id: 3,
    data: [2]
}

interface Todo {
    title: string;
    text: string;
}
type Todoable = Partial<Todo>
type ReadTodo = Readonly<Todo>

const fetchData: Promise<string> = new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 3000);
})
fetchData.then(data => {
    data.toUpperCase();
})
const vegetables: Array<string> = ['Tomato', 'Brocoli', 'Asparagus'];

interface ResponseData<T extends { message: string } = any> {
    data: T;
    status: number;
}
let tmp2: ResponseData;
interface Vegetables {
    tomato: string;
    pumpkin: string;
}
type MappedTypes = {
    readonly [P in 'tomato' | 'pumpkin' ]?: string
}
type ConditionalTypes = 'tomato' extends string ? number : boolean 
type ConditionaTypesInfer = { tomato: 'tomato '} extends { tomato: infer R } ? R : boolean;
type DistributableConditonalTypes <T> = T extends 'tomato' ? number : boolean;
let tmp4: DistributableConditonalTypes<'tomato' | 'pumukin'>
let tmp5: NonNullable<string | null>;

const Human = {
    greeting<T>(message: T): void {
        console.log(message);
    }
}