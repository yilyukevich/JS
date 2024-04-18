export {};

let firstNumber: string | null = prompt('Please, enter first number:');
if (firstNumber == null)
    firstNumber = prompt('Repeat, Please, enter first number:');

let secondNumber: string | null = prompt('Please, enter second number:');
if (secondNumber == null)
    secondNumber = prompt('Repeat, Please, enter second number:');

let thirdNumber: string | null = prompt('Please, enter third number:');
if (thirdNumber == null)
    thirdNumber = prompt('Repeat, Please, enter third number:');


if (firstNumber == null || secondNumber == null || thirdNumber == null) {
    let reason: string | null = prompt('Why did you do this?');
    alert("Ok, I understand this reason " + (reason != null ? reason : "") + ". Goodbye!")

} else {    
    let first: number = Number(firstNumber);
    let second: number = Number(secondNumber);
    let third: number = Number(thirdNumber);
    
    let action = confirm('Choose action: ok - adding, cancel - multiplication:');    

    let result: number | undefined;
    if (!isNaN(first) && !isNaN(second) && !isNaN(third)) {
        result = action
            ? first + second + third
            : first * second * third;
    }

    if (result != undefined) {
        alert(`Result is ${result}`);
    } else {
        alert('Incorrect input data!')
    }
}



