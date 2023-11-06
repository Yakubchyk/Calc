'use strict';

let num = 150;

function showFirstMessage(text) {
	console.log(text);
	let num = 10;
}

showFirstMessage('Tratatatata');
console.log(num);




function createCounter() {
	let counter = 0;
	const myFunction = function() {
		counter = counter + 1;
		return counter;
	};
	return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log('example increment', c1, c2, c3);


function outerFunction() {
	const outerVariable = 'I am from the outer function';
  
	function innerFunction() {
		console.log(outerVariable); // innerFunction может получить доступ к outerVariable
	}
  
	return innerFunction;
}
  
const closure = outerFunction(); // closure теперь содержит innerFunction
  
closure(); // Вызываем innerFunction, и она может получить доступ к outerVariable из outerFunction
  