let divElement = document.querySelector('div');
console.log(divElement);
divElement = document.body.firstElementChild;
console.log(divElement);

let ulElement = document.querySelector('ul');
console.log(ulElement);
ulElement = document.body.firstElementChild.nextElementSibling;
console.log(ulElement);

let pitElement = document.querySelectorAll('li')[1];
console.log(pitElement);
pitElement = document.body.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling;
console.log(pitElement);