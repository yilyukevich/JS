// Task #1
const colors = ['red', 'green', 'blue'];

console.log(colors.length);

// Task #2
const animals = ['monkey', 'dog', 'cat'];

console.log(animals.at(-1));

// Task #3
let numbers = [5, 43, 63, 23, 90];

while (numbers.length > 0)
    numbers.pop();

console.log(numbers);

numbers = [5, 43, 63, 23, 90];

numbers.splice(0, numbers.length);

console.log(numbers);

// Task #4
let students = ['Polina', 'Dasha', 'Masha'];

students.pop();
students.push('Borya');

students.shift();
students.unshift('Andrey');

console.log(students);

// Task #6
const cats = ['Gachito', 'Tom', 'Batman']

for (let i=0; i< cats.length; i++)
    console.log(cats[i]);

for (let value of cats)
    console.log(value);

// Task #7
const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]


const multiNumbers = oddNumbers.concat(evenNumbers);
console.log(multiNumbers);
console.log(multiNumbers.indexOf(8));

// Task #8
const binary = [0, 0, 0, 0]

console.log(binary.join(1));

// Task #9
let isPolindrom = function(value)   {
    for (let i=0; i< value.length/2; i++)   {
        if (value[i] !== value[value.length - 1 - i])   
            return false;
    }
    return true;
}

console.log(isPolindrom('11011'));

// Task #10
const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
    ];

let sum = 0;
let count = 0;    
for (let i=0; i< matrix.length; i++)    {
    for (let j=0; j<matrix[i].length; j++) {
        sum += matrix[i][j];
        count++;
    }
}
console.log('avg is ' + sum/count);

let result = matrix.flat().reduce((avg, element, index, array) => {
    return avg + element/array.length;
}, 0);

console.log('avg is ' + result);

// Task #11
const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];

let positiveNumbers = mixedNumbers.filter(element => element >= 0);
let negativeNumbers = mixedNumbers.filter(element => element < 0);

console.log(positiveNumbers);
console.log(negativeNumbers);

// Task #12
let inputArray = new Array(10);
for (let i=0; i<inputArray.length; i++)
    inputArray[i] = Math.round(Math.random() * 10);

let outputArray = inputArray.map(element => Math.pow(element, 3));

console.log(inputArray);
console.log(outputArray);
