// Task 1

function getSum(value) {
    let result = 0;

    if (value % 2 !== 0)    {
        result = value;
        value--;
    }

    result = result + (value + 1) * (value / 2);

    return result;
}

console.log(getSum(100));

// Task 2

function calculateOverPay(creditSum)    {
    const percentage = 17;
    const years = 5;

    return creditSum * (percentage * years / 100);
}

console.log(calculateOverPay(1000));

// Task 3

function trimString(value, startIndex, endIndex)    {
    return String(value).substring(startIndex, endIndex);
}

console.log(trimString('Hello world !', 6, 11));

// Task 4

function getSumNumbers(value)   {
    let result = 0;
    while(value > 0) {
        result = result + value % 10;
        value = Math.floor(value / 10);
    }

    return result;
}

console.log(getSumNumbers(2327));

// Task 5

function getSum(a, b)   {
    let result = 0;

    for (let i = Math.min(a, b); i <= Math.max(a, b); i++)    {
        result = result + i;
    }

    return result;
}

console.log(getSum(2, -1));

// Task 6

function fooBoo(runFirst, firstFunc, secondFunc)    {
    runFirst ? firstFunc() : secondFunc();
}

function foo()  {
    console.log('foo');
}

function boo()  {
    console.log('boo');
}

fooBoo(false, foo, boo);

// Task 7

function isTriangeSizeCorrect(a, b, c)  {
    return (a + b) > c && (a + c) > b && (b + c) > a;
}

console.log(isTriangeSizeCorrect(3, 2, 1));