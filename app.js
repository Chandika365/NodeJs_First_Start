const greetings = require('./greetings');
const fs = require('fs');

console.log(greetings.sayHello('Chandika'));

fs.readFile('example.txt', 'utf8', (err, data) =>{
    if(err) {
        console.error('error reading file:', err);
        return;
    }
    console.log(data);
});

// lodash

const _ = require('lodash');
const numbers = [1,2,3,4,5];
const sum = _.sum(numbers);
console.log(sum);