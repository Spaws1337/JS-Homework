console.log("Hello World");

//Назначаем переменные

let toothCount = 32;
let companyName = "Studio 56";
let isRed = false;
let userLogin = null;
let flyObject = undefined;
let user = {
  nickname: "Spaws",
  email: "spawsalpe@gmail.com",
  country: "Russia",
  sex: "male",
};

const car = {
  make: "Tesla",
  model: "Model S",
  year: 2021,
  color: "Peal white",
  fuel: "Electricitty",
};

var phone = {
  make: "Apple",
  model: "Iphone 13",
  year: 2021,
  color: "Graphite",
};

let userPassword = Symbol("qwerTy123!");
const diameterSun = 1392700n;

//Выводим переменные в консоль

console.log("Выводим переменные");

console.log(toothCount);
console.log(companyName);
console.log(isRed);
console.log(userLogin);
console.log(flyObject);
console.log(user);
console.log(userPassword);
console.log(diameterSun);
console.log(car);
console.log(phone);

//Создаем функцию для вывода типа переменных в консоль

function writeType(variableType) {
  console.log(typeof variableType);
}

//Выводим типы переменных в консоль

console.log("Выводим типы переменных");

writeType(toothCount);
writeType(companyName);
writeType(isRed);
writeType(userLogin);
writeType(flyObject);
writeType(user);
writeType(userPassword);
writeType(diameterSun);
writeType(car);
writeType(phone);

//Пробуем переназначить переменную const
//Assignment to constant variable.
//diameterSun = 10000;
//console.log (diameterSun);

//Пробуем переназначить const типа object
car.make = "Ford";
console.log(car);

//Пробуем переназначить переменную типа object
user.nickname = "Alpe";
console.log(user);

//Пробуем переназначить переменную var типа object
phone.make = "Samsung";
console.log(phone);
