'use strict';

// const result = confirm('Bist du hier?');
// console.log(result);
// const antwort = prompt('Wie Alt bist du?', '18');
// const ant = +prompt('Wie Alt bist du?', '18');
// console.log(typeof(antwort));

// const answers = [];

// // answers[0] = prompt('как Ваше имя?', '');
// // answers[1] = prompt('Сколько Вам лет?', '');
// // answers[2] = prompt('Как Ваша фамилия?', '');

// // document.write(answers);
// console.log(typeof(answers));

// Пример интерполяции.
// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

const DieName = 'Ivan';
console.log(`Его зовут ${DieName}.`);


console.log('arr' + ' - object');
console.log(4 + +'5'); // Второй плюс нужен для того чтобы привратить строку в число.

// инкремент и декремент
let incr = 10,
	decr = 10;

// incr++;
// decr--;

console.log(++incr);
console.log(--decr);

console.log(5%2);
console.log(2*4 === 8);

// && // und
// || // oder

const isChecked = true,
	isClose = false;
    
console.log(isChecked && isClose);

const inPut = true;
const outPut = false;

console.log(inPut || outPut);

// ! // оператор отрецания
console.log(2 + 2 * 2 !== '6');

// = // назначить
// == // сравнить
// === // строгое раверство
