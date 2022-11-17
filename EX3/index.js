// Задание 1

function func1(numberExponent) {
    console.log(numberExponent**2);
}

//Задание 2

function func2(numberSum1,numberSum2 = 0) {
    console.log(numberSum1+numberSum2);
}

//Задание 3

function func3(number1,number2,number3){
    console.log((number1-number2)/number3);
}

//Задание 4

function func4(day) {
    let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    if (day>7||day<=0) {
        console.log ("Вы ввели некорректное число");
        return ("Вы ввели некорректное число");
    }
    for (let i = 0;i<arr.length;i++){
        console.log(arr[day-1]);
        return arr[day-1];
    }
}

//Задание 5 

function func5(numberComparison1,numberComparison2) {
    console.log(numberComparison1===numberComparison2 ? true:false);
}

//Задание 6

function func6(numberSumCompare1,numberSumCompare2=0) {
    console.log((numberSumCompare1+numberSumCompare2)>10);
}

//Задание 7

function func7(isNegativeNumber) {
    console.log(isNegativeNumber<=0);
}

//Задание 8

function isNumberRange(numberInRange) {
    console.log((numberInRange>0)&&(numberInRange<10));
}
