export { };


// Task 1
let x: number = 20;
let y: number = 58;
let z: number = 42;

let result: number = x + y + x;

console.log(result);

// Task 2
interface Constants {
    SEC_IN_MIN_COUNT: number,
    MIN_IN_HOUR_COUNT: number,
    HOUR_IN_DAY: number,

    DAY_IN_MONTH: number,
    DAY_IN_YEAR_COUNT: number,
    SEC_IN_DAY_COUNT: () => number;
}

const constants: Readonly<Constants> = {
    SEC_IN_MIN_COUNT: 60,
    MIN_IN_HOUR_COUNT: 60,
    HOUR_IN_DAY: 24,

    DAY_IN_MONTH: 31,
    DAY_IN_YEAR_COUNT: 365,
    SEC_IN_DAY_COUNT: () => HOUR_IN_DAY * MIN_IN_HOUR_COUNT * SEC_IN_MIN_COUNT
}

let userFullYears: number = 34;
let userFullMonthes: number = 7;
let userFulDays: number = 25;

let myAgeInSeconds: number = userFullYears * constants.DAY_IN_YEAR_COUNT * constants.SEC_IN_DAY_COUNT()
    + userFullMonthes * constants.DAY_IN_MONTH * constants.SEC_IN_DAY_COUNT()
    + userFulDays * SEC_IN_DAY_COUNT;

console.log(myAgeInSeconds + ' seconds');

// Task 3
let count: number = 42;
let userName: string = '42';

let countString: string = String(42);
let countString2: string = count + '';

let userNameNumber: number = Number(userName);
let userNameNumber2: number = +userName;

// Task 4
let a: number = 1;
let b: number = 2;
let c: string = 'белых медведей';

console.log(a + (b + ' ' + c));

// Task 5
let numberVar: number = 42;
let bigNumberVar: bigint = 999n;
let stringVar: string = "str";
let booleanVar: boolean = true;
let nullVar: null = null;
let undefinedVar: undefined = undefined;
let objVar: object = {};

console.log(`Variable: numberVar have type: ${typeof (numberVar)}`);
console.log(`Variable: bigNumberVar have type: ${typeof (bigNumberVar)}`);
console.log(`Variable: stringVar have type: ${typeof (stringVar)}`);
console.log(`Variable: booleanVar have type: ${typeof (booleanVar)}`);
console.log(`Variable: nullVar have type: ${typeof (nullVar)}`);
console.log(`Variable: undefinedVar have type: ${typeof (undefinedVar)}`);
console.log(`Variable: objVar have type: ${typeof (objVar)}`);

// Task 6
let userName6: string | null = prompt('Please, enter your name:');
let userAge6: string | null = prompt('Please, enter your age:');

if (userName6 && userAge6) {
    console.log(`Hello, ${userName6}! Your age is ${userAge6}!`);
}


// Task 7
let a7: number = 4;
let b7: number = 3;

b7++;
a7--;

// Task 8
stringVar = 'true';
booleanVar = false;
numberVar = 17;
undefinedVar = undefined;
nullVar = null;


console.log(`Variable: stringVar have type: ${typeof (stringVar)}`);
console.log(`Variable: booleanVar have type: ${typeof (booleanVar)}`);
console.log(`Variable: numberVar have type: ${typeof (numberVar)}`);
console.log(`Variable: undefinedVar have type: ${typeof (undefinedVar)}`);
console.log(`Variable: nullVar have type: ${typeof (nullVar)}`);

// Task 9
let height: number = 15;
let width: number = 20;

console.log(width > height ? width : height);

// Task 10
for (let i = 0; i <= 20; i++)
    if (i % 3 == 0)
        console.log(i);

// Task 11
let key: boolean = true;
let documents: boolean = true;
let pen: boolean = true;
let apple: boolean = false;
let orange: boolean = true;

let shouldGoToWork: boolean = key && documents && pen && (apple || orange);
console.log(shouldGoToWork);

// Task 12
let userInput: number | null = Number(prompt('Please, enter the number:'));

if (userInput % 3 == 0 && userInput % 5 == 0) {
    console.log("FizBuz");
} else if (userInput % 3) {
    console.log("Buz");
} else if (userInput % 5) {
    console.log("Fiz");
}


// Task 13
userInput = Number(prompt('Could you, please, enter your age:'));

if (userInput > 18) {
    console.log('Попей пивка =) ');
} else {
    console.log('Пей колу =( ');
    if (userInput >= 16)
        console.log('Можешь выкурить сигаретку, только маме не говори >_< ');
}

// Task 14
let userRoute: string | null = prompt('Пожалуйста, укажите направление (север, юг, запад или восток):')

switch (userRoute) {
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



