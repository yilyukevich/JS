export {};

alert("Привет... Я пока не знаю кто ты...");
let firstName: string | null = prompt('Как твое имя?');
let lastName: string | null = prompt('Как твоя фамилия?');
let isOld: boolean | undefined = confirm('Тебе больше 18?');

let message = "Ну привет " + firstName + " " + lastName + "! Вижу тебе ";

if (isOld)  {
    message = message + "больше 18ти!";
} else  {
    message = message + "меньше 18ти!";
}

console.log(message);