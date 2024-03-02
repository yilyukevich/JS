// Task #1
let user = {
    name: "Yury",
    age: 34
};

console.log(user);

delete user.name;
delete user.age;

console.log(user);

// Task #2
user = {
    name: "Yury",
    age: 34
};

let searchField = prompt('Please, enter the field name:');

for (let key in user) {
    if (key === searchField)
        console.log('true');
}

// Task #3
const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for (let key in student) {
    console.log(key);
}

for (let key in student) {
    console.log(student[key]);
}

// Task #4
const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
}

console.log(colors['ru pum pu ru rum']['red']);
console.log(colors['ru pum pu ru rum']['blue']);

// Task #5
let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    igor: 664,
    alexandra: 199
}

let salariesSum = 0;
let salariesAvg = 0;
for (let key in salaries) {
    salariesSum += +salaries[key];
}

salariesAvg = salariesSum / Object.keys(salaries).length;

console.log(salariesAvg);

// Task #6
let userCredentials = {};

userCredentials.login = prompt('Please, enter you login:');
userCredentials.password = prompt('Please, enter you password:');

if (userCredentials.login === prompt('Please, re-enter you login:')
    & userCredentials.password === prompt('Please, re-enter you password:')) {
    alert('Welcome!');
}

// Task #7
let converter = {
    convert: (inputValue) => {
        if (inputValue !== undefined) {
            let result = 'The final score is ' +
                String(inputValue).replace('1', 'one').replace('2', 'two').replace('3', 'three')
                    .replace('4', 'four').replace('5', 'five').replace('6', 'six').replace('7', 'seven')
                    .replace('8', 'eight').replace('9', 'nine');

            return result;
        }
        return '';
    }
};

console.log(converter.convert('7:5'));
