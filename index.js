var num1 = 6    //number data type
var num2 = 2    //number data type
console.log(num1 - num2); //number data type

const x = 'seth';
const y = 'charles';

console.log(`${y} is ${y.length - x.length} characters longer than ${x}`);






var num1 = 'HI'
var num2 = 'Hi'
var num3 = 'hi'


alert ('welcome!')
let num = prompt("respond with (hi or HI or Hi)");
switch  (num) {
    case 'HI':
alert('Dont yell at me!!');
    break;
    case 'Hi':
alert('Hello!');
    break;
    case 'hi':
alert('Speak up!!!!!');
    break;
        default:
alert('How did you manage to not follow directions. you really suck at following directions. SAD');
}

const operator = prompt('Enter symbol(+ , - , * , /):');
// parsefloat makes it into a string if needed
const num4 = parseFloat(prompt('First Number:'));
const num5 = parseFloat(prompt('Sencond Number:'));

let result;
if(operator == '+'){
    result = num4 + num5;}

else if (operator == '-'){
    result = num4 - num5;
    }

else if (operator == '*'){
    result = num4 * num5;
}
else if(operator == '/')
{
result = num4 / num5;
}

console.log(`${num4} ${operator} ${num5} = ${result}`);















