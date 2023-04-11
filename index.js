let number = Math.floor(Math.random() * 1000);
console.log(number);

let numberTries = 5;

while (numberTries > 0) {
    let numberUser = +prompt(`У вас осталось попыток ${numberTries}! Введите целое число от 0 до 1000: `);

    if (isNaN(numberUser) || numberUser > 1000 || numberUser < 0) {
        alert("Число задано некорректно!");
        continue;
    };

    numberTries--;

    if (numberUser == number) {
        alert("Вы угадали число!");
        break;
    } else if (numberUser < number) {
        alert(`Вы не угадали! Загаданное число больше! Попыток осталось ${numberTries}!`);        
    } else {
        alert(`Вы не угадали! Загаданное число меньше! Попыток осталось ${numberTries}!`);
    }
} 

alert("Игра закончена!")

