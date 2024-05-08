import { EventEmitter } from 'events';


const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log('Hello world '  + name);
}

function goodbyHandler(name) {
    console.log('Goodbye world ' + name);
}

// Register event listeners

myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyHandler);

// Emit events

myEmitter.emit('greet', 'John');
myEmitter.emit('goodbye', 'John');

// Error handling
myEmitter.on('error', (err) => {
    console.log('An Error Occured:', err);
})

//Simulate error 
myEmitter.emit('error', new Error('Something went wrong'));