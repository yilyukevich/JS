let firstNumber = prompt('Please, enter first number:');
if (firstNumber == null)
    firstNumber = prompt('Repeat, Please, enter first number:');

let secondNumber = prompt('Please, enter second number:');
if (secondNumber == null)
    secondNumber = prompt('Repeat, Please, enter second number:');

let thirdNumber = prompt('Please, enter third number:');
if (thirdNumber == null)
    thirdNumber = prompt('Repeat, Please, enter third number:');


if (firstNumber == null || secondNumber == null || thirdNumber == null) {
    let reason = prompt('Why did you do this?');
    alert("Ok, I understand this reason " + (reason != null ? reason : "") + ". Goodbye!")

} else {    
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    thirdNumber = Number(thirdNumber);
    
    let action = confirm('Choose action: ok - adding, cancel - multiplication:');    

    let result;
    if (!isNaN(firstNumber) && !isNaN(secondNumber) && !isNaN(thirdNumber)) {
        result = action
            ? firstNumber + secondNumber + thirdNumber
            : firstNumber * secondNumber * thirdNumber;
    }

    if (result != undefined) {
        alert(`Result is ${result}`);
    } else {
        alert('Incorrect input data!')
    }
}



