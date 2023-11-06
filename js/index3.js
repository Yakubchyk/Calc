'use strict';

if (4 == 5) {
	console.log('Ok!');
} else {
	console.log('ERROR');
}

const num = 50;

if (num < 49) {
	console.log('error');
} else if (num > 100) {
	console.log('Mehr');
} else {
	console.log('OK!');
}
// тернарный оператор
(num === 50) ? console.log('OK') : console.log('error');

const num = 50;
switch (num) {
case 49:
	console.log('Nein!');
	break;
case 100:
	console.log('Nein!');
	break;
case 50:
	console.log('OkOk!!!');
	break;

default:
	console.log('Не в этот раз!');
}
 


// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
// 	console.log('Я сыт!');

// }

// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);

// /тот оператор И
console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'jghökjgp');


if (hamburger === 3 && cola === 1 && fries) {
	console.log('Все сыты!');

} else {
	console.log('Мы уходим.');
}

// И - запинается на лжи
// ИЛИ - запинается на правде



const hamburger = 3;
const fries = 3;
const cola = 0;
const naggets = 2;

if (hamburger === 3 && cola == 2 || fries === 3 && naggets) {
	console.log('Все довольны!');

} else {
	console.log('Мы уходим.');
}

console.log(hamburger === 3 && cola == 2 || fries === 3 && naggets);



let JohnReport, AlexReport, SamReport, MariaReport = 'done';

console.log(JohnReport || AlexReport || SamReport || MariaReport);


// ! - не

console.log( NaN || 2 || undefined );
console.log( NaN && 2 && undefined );
console.log( 1 && 2 && 3 );
console.log( !1 && 2 || !3 );
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);

const hamburger1 = 3;
const fries1 = 3;
const cola1 = 0;
const nuggets1 = 2;
if (hamburger1 === 3 && cola1 || fries1 === 3 && nuggets1) {
   console.log('Done!')
}
