const readline = require('readline-sync');

const userName = readline.question('What is your name? ');
console.log('Hello, ' + userName + '! Welcome to the Values, Data Types, and Operations Quiz.');
// questions
const answer1 = readline.question('1. What keyword is used to declare a constant in JavaScript? ');
const answer2 = readline.question('2. What is the result of "5" + 5 in JavaScript? ');
const answer3 = readline.question('3. Is "null" a data type in JavaScript? (yes/no) ');
const answer4 = readline.question('4. What will 10 / "2" return in JavaScript? ');
const answer5 = readline.question('5. Enter any number: ');

// answers
console.log('Here are your answers:');
console.log(`1. Your answer: ${answer1}`);
console.log(`2. Your answer: ${answer2}`);
console.log(`3. Your answer: ${answer3}`);
console.log(`4. Your answer: ${answer4}`);
console.log(`5. Your number: ${answer5}`);

console.log('Thanks for taking the quiz, ' + userName + '!');
