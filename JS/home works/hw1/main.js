`- Створити змінні. Присвоїти кожному з них значення: 
'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
    Вивести кожну змінну за допомогою: console.log`
let greating = 'hello';
let education = 'owu';
let site = 'com';
let country = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let pi = 3.14;
let num5 = 2.7;
let num6 = 16;
let asd = true;
let dvg = false;
console.log(greating);
console.log(education);
console.log(site);
console.log(country);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(pi);
console.log(num5);
console.log(num6);
console.log(asd);
console.log(dvg);

`- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. 
З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)`
let firstName;
firstName = 'Andrew';
let middleName;
middleName = 'Igorevich';
let lastName;
lastName = 'Kutovy';

let person = `${firstName} ${lastName} ${middleName}`;
console.log(person);

`- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
    let a = 100; let b = '100'; let c = true;`
let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

`Додаткове для тих хто цікавився promptoм
- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям,
 По-Батькові та роками та вивести в консоль`
let name = prompt('give me your name')
let surname = prompt('give me your surname')
let age = prompt('give me your age')
console.log(`Your name is: ${name}, surname is: ${surname}, age is: ${age}`)