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

//Проанализировать временной промежуток начиная с 1800 и до 2020 года найти и вывести в консоль
//Год первого полета человека в космос и количество итераций которое потребовалось для поиска
//Количество вискосных годов принадлежащих данному отрезку и количество итераций которое потребовалось для поиска

let startDate = 1800;

let finishDate = 2020;

const firstCosmoFlight = 1961;

let m = 0;

for (m; startDate<firstCosmoFlight; m++) {
    startDate++;
}

console.log (`Год полета первого человека в космос ${firstCosmoFlight}, для поиска потребовалось ${m} итераций`)

let newDate = 1800;

let k = 0;

let d = 0;

while (newDate<=finishDate) {
    if (((newDate % 4 === 0) && (newDate % 100 !==0)) || (newDate % 400 === 0)) {
        d++;
        newDate++;
    }else {
        newDate++;
    }
}
console.log(`Количество високосных годов в промежутке ${d}`);


//Второй вариант решения
let testStartDate = 1800;

let testFinishDate = 2020;

let p = 0;

while (testStartDate<=testFinishDate) {
    let myYear = testStartDate;
    let realDate = new  Date (myYear, 1, 29).getDate ();
    if (realDate == 29) {
        p++;
        testStartDate++;
    }else {
        testStartDate++;}
}
console.log(`Количество високосных годов в промежутке ${p}`);