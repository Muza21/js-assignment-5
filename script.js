// ❗️ ❗️ ❗️
// H/A #5

// Task #1
// Create a BaseStorage.
// The BaseStorageconstructor must take the maximum number of elements in the storage as its only optional parameter. If the parameter is an invalid number, generate an error. If the parameter is not specified, set the maximum stack size to 10.

// Required properties:
// storage: array
// maxSize: number

// Methods:
// - isEmpty() - returns a Boolean value (whether the storage is empty or not);
// - toArray() - returns a new array consisting of stored elements.

class BaseStorage{
    #storage = [];
    #maxSize;
    constructor(maxSize = 10){
        if(typeof maxSize!=='number'){
            throw Error('invalid number');
        }
        this.#maxSize = maxSize;
    }

    getStorage(){
        return this.#storage;
    }

    getMaxSize(){
        return this.#maxSize;
    }

    isEmpty(){
        return this.#storage.length === 0;
    }

    toArray(){
        return [...this.#storage];
    }
}

const baseStorage = new BaseStorage(5);


// Task #2
// Create a Stack class deriving from BaseStorage.

// Implement public methods:
// - push(elem) - add a new element to the stack (generate an error if the stack is full);
// - pop() - remove the top element of the stack and return it (generate an error if the stack is empty);
// - peek() - get the top element of the stack (return null if the stack is empty);


// Implement static public methods:
// - fromIterable(iterable) - returns a new Stack, the elements of which are the elements of the passed iterable entity. The maximum number of elements of such a stack must be equal to the length of this entity. If the entity is not iterable, generate an error.

class Stack extends BaseStorage{
    constructor(maxSize){
        super(maxSize);
    }

    push(elem){
        const length = this.getStorage().length
        if(this.getMaxSize()<=length){
            throw Error('the stack is full');
        }
        this.getStorage()[length] = elem;
    }
    
    pop(){
        if(this.isEmpty()){
            throw Error('the stack is empty');
        }
        this.getStorage().length -= 1;
    }

    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.getStorage().slice(-1)[0];
    }

    static fromIterable(iterable){
        if(typeof iterable[Symbol.iterator] !== 'function'){
            throw Error('the entity is not iterable');
        }
        const tempArr = Array.from(iterable);
        const stack = new Stack(iterable.length);
        for(const element of tempArr){
            stack.push(element);
        }
        return stack;
    }
}



const stack = new Stack(5);
console.log(stack.toArray());
console.log(`stack.isEmpty: ${stack.isEmpty()}`)
stack.push(12);
stack.push(34);
stack.push(56);
stack.push(78);
stack.push(90);
console.log(stack.toArray());
stack.pop();
console.log(stack.toArray());
stack.peek();

const testArray = [10,20,30,40,50,60,70,80,90]
const stack2 = Stack.fromIterable(testArray);
console.log('stack2:');
console.log(stack2.toArray());


// stack2.push(2) // generates an error: stack is full
// const stack3 = new Stack(5);
// stack3.pop() // generates an error: stack is empty
// console.log(stack3.peek()); // returns null cause stack is empty
// const num = 5;
// const stack4 = Stack.fromIterable(num); // generates an error: the entity is not iterable.

// Task #3
// Create a Queue class deriving from BaseStorage.

// Implement public methods:
// - push(elem) - add a new element to the queue (generate an error if the queue is full);
// - shift() - remove the first element of the stack and return it (generate an error if the queue is empty);
// - peek() - get the first element of the queue (return null if the queue is empty);


// Implement static public methods:
// - fromIterable(iterable) - returns a new Queue, the elements of which are the elements of the passed iterable entity. The maximum number of elements of such a queue must be equal to the length of this entity. If the entity is not iterable, generate an error.

class Queue extends BaseStorage{
    constructor(maxSize){
        super(maxSize);
    }

    push(elem){
        const length = this.getStorage().length
        if(this.getMaxSize()<=length){
            throw Error('the queue is full');
        }
        this.getStorage()[length] = elem;
    }

    shift(){
        if(this.isEmpty()){
            throw Error('the queue is empty');
        }
        const storage = this.getStorage();
        for(let i = 0; i<storage.length - 1;i++){
            storage[i] = storage[i+1];
        }
        storage.length -= 1;
    }

    peek(){
        if(this.getStorage().length === 0){
            return null;
        }
        return this.getStorage()[0];
    }

    static fromIterable(iterable){
        if(typeof iterable[Symbol.iterator] !== 'function'){
            throw Error('the entity is not iterable');
        }
        const tempArr = Array.from(iterable);
        const queue = new Queue(iterable.length);
        for(const element of tempArr){
            queue.push(element);
        }
        return queue;
    }
}

const queue = new Queue(5);
console.log(`queue.isEmpty: ${queue.isEmpty()}`)
queue.push(1)
queue.push(2)
queue.push(3)
queue.push(4)
queue.push(5);
console.log(queue.peek())
console.log(queue.toArray());
queue.shift();
console.log(queue.toArray());
queue.peek();

const queue2 = Queue.fromIterable(testArray);
console.log('queue2');
console.log(queue2.toArray());

// queue2.push(2) // generates an error: queue is full
// const queue3 = new Queue(5);
// queue3.shift() // generates an error: queue is empty
// console.log(queue3.peek()); // returns null cause queue is empty
// const num2 = 5;
// const queue4 = Queue.fromIterable(num2); // generates an error: the entity is not iterable.
