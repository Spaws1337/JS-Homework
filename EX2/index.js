// Вывести в консоль заданную строку N раз

const messageString = ("Hello world");

let stringCount = 21;

let i = 0;

while (i < stringCount) {
    i++;
    console.log (messageString);
}

//Ежедневно количество доступных автомобилей в салоне уменьшается в два раза.
//Выяснить, на какой день продаж, количество доступных к покупке авто станет меньше М, 
//если известно, что в первый день продаж всего было N автомобилей.

//В первый день продаж всего было N автомобилей

let startCount = 1000;

//количество доступных к покупке авто М

let finishCount = 100;

//счетчик количества дней
let dayCount = 0;

while (startCount>finishCount) {
    startCount = startCount/2;
    dayCount++;
}
console.log(`На ${dayCount} день машин доступных к покупке станет меньше М`);