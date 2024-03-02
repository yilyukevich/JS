// Task 1
let x = 20;
let y = 58;
let z = 42;

let result = x + y + x;

console.log(result);

// Task 2
const SEC_IN_MIN_COUNT = 60;
const MIN_IN_HOUR_COUNT = 60;
const HOUR_IN_DAY = 24;

const DAY_IN_MONTH = 31;
const DAY_IN_YEAR_COUNT = 365;

const SEC_IN_DAY_COUNT = HOUR_IN_DAY * MIN_IN_HOUR_COUNT * SEC_IN_MIN_COUNT;

let userFullYears = 34;
let userFullMonthes = 7;
let userFulDays = 25;

let myAgeInSeconds = userFullYears * DAY_IN_YEAR_COUNT * SEC_IN_DAY_COUNT
                        + userFullMonthes * DAY_IN_MONTH * SEC_IN_DAY_COUNT
                        + userFulDays * SEC_IN_DAY_COUNT;

console.log(myAgeInSeconds + ' seconds');

// Task 3
let count = 42;
let userName = '42';

let countString = String(42);
let countString2 = count + '';

let userNameNumber = Number(userName);
let userNameNumber2 = +userName;

// Task 4
let a = 1;
let b = 2;
let c = 'белых медведей';

console.log(a + (b + ' ' + c));

// Task 5
let numberVar = 42;
let bigNumberVar = 999n;
let stringVar = "str";
let booleanVar = true;
let nullVar = null;
let undefinedVar = undefined;
let objVar = {};

console.log(`Variable: numberVar have type: ${typeof(numberVar)}`);
console.log(`Variable: bigNumberVar have type: ${typeof(bigNumberVar)}`);
console.log(`Variable: stringVar have type: ${typeof(stringVar)}`);
console.log(`Variable: booleanVar have type: ${typeof(booleanVar)}`);
console.log(`Variable: nullVar have type: ${typeof(nullVar)}`);
console.log(`Variable: undefinedVar have type: ${typeof(undefinedVar)}`);
console.log(`Variable: objVar have type: ${typeof(objVar)}`);

// Task 6
userName = prompt('Please, enter your name:');
let userAge = prompt('Please, enter your age:');

console.log(`Hello, ${userName}! Your age is ${userAge}!`);

// Task 7
a = 4;
b = 3;

b++;
a--;

// Task 8
stringVar = 'true';
booleanVar = false;
numberVar = 17;
undefinedVar = undefined;
nullVar = null;


console.log(`Variable: stringVar have type: ${typeof(stringVar)}`);
console.log(`Variable: booleanVar have type: ${typeof(booleanVar)}`);
console.log(`Variable: numberVar have type: ${typeof(numberVar)}`);
console.log(`Variable: undefinedVar have type: ${typeof(undefinedVar)}`);
console.log(`Variable: nullVar have type: ${typeof(nullVar)}`);

// Task 9
let height = 15;
let width = 20;

console.log( width > height ? width : height);

// Task 10
for(let i=0; i <= 20; i++)
    if (i % 3 == 0)
        console.log(i);

// Task 11
let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = key && documents && pen && (apple || orange);
console.log(shouldGoToWork);

// Task 12
let userInput = prompt('Please, enter the number:');

if (userInput % 3 == 0 && userInput % 5 == 0)   {
    console.log("FizBuz");
}   else if (userInput % 3) {
    console.log("Buz");
}   else if (userInput % 5) {
    console.log("Fiz");
}

// Task 13
userAge = prompt('Could you, please, enter your age:');

if (userAge > 18)   {
    console.log('Попей пивка =) ');
}   else    {
    console.log('Пей колу =( ');
    if (userAge >= 16)
        console.log('Можешь выкурить сигаретку, только маме не говори >_< ');
}

// Task 14
userRoute = prompt('Пожалуйста, укажите направление (север, юг, запад или восток):')

switch (userRoute)  {
    case 'север':
        console.log('на север пойдешь много денег найдешь');
        break;
    case 'юг':
        console.log('на юг пойдешь счастье найдешь');
        break;
    case 'запад':
        console.log('на запад пойдешь верного друга найдешь');
        break;
    case 'восток':
        console.log('на восток пойдешь разработчиком станешь');
        break;
    default:
        console.log('Вас послали явно не туда... =) Укажите верное направление.');
}



