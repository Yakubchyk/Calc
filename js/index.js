'use strict';


const sc = 500;
const dl = 300;

console.log('Длинна кузова ' + sc+ ' Ширина кузова ' + dl);


let number = 5;
const LeftBorderLang = 10;

const big = {
	a: 50
};
big.a = 100;
console.log(big);

let num;
console.log(num);


// обьект
const obj = {
	UserName: 'Johan',
	Alt: 35,
	IstVerheiratet: false
};
console.log(obj);

// Массив
let arr = ['plun.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[1]);


// массив
const arrow = [1, 2, 3];
// тот же массив в виде обьекта
const arrObj = {
	'a': 1,
	'b': 2,
	'c': 3,
	Film: {
		Janr: {
			GodVihola: [1999, 2001, 2002],
			Vihod: [{}, {}, {}]
		}
	}
};

let storeName = 'Alfabet';
const storeDescription = {
	budget: 10000,
	employees: ['Anna', 'Boris', 'Mari'],
	products: {
		'sosiski': 100,
		'moloko': 20
	},
	open: true
};

// назначение новой переменной в обьекте
arrObj.d = 1978;
console.log(arrObj['d']);


// обьект
const object = {
	nameMitarbeiterinen: 'Anna',
	Lohn: 30000,
	Alt: 30,
	Verheiratet: false
};



const arrayOfNumbers = [];
for (let i = 5; i <= 10; i++) {
	arrayOfNumbers.push(i);
        
}
    
console.log(arrayOfNumbers);
    
 


for (let i = 20; i >= 9; i--) {
	console.log(i);
}
  


// Место для первой задачи
function firstTask() {
	for (let i = 5; i < 11; i++) {
		console.log(i);
        
	}
    
    
}

// Место для второй задачи
function secondTask() {
	for (let i = 20; i >= 10; i--) {
		if (i === 13) {
			break;
		}
		console.log(i);
	}
  
}

// Место для третьей задачи
function thirdTask() {
	for (let i = 1; i <= 10; i++ )  {
		if (i % 2 === 0) {
			console.log(i);
		}
	}
}

// Место для четвертой задачи

function fourthTask() {
	let i = 3; // Начинаем с первого нечетного числа
	while (i <= 16) {
		if (i % 2 !== 0) {
			console.log(i); // Выводим нечетное число
		}
		i++;
	}

	// Пишем решение вот тут
}

// Место для пятой задачи

function fifthTask() {
	const arrayOfNumbers = [];
	for (let i = 5; i <= 10; i++) {
		arrayOfNumbers.push(i);
        
	}
    
	console.log(arrayOfNumbers);
    
    
	// Не трогаем
	return arrayOfNumbers;
}



const arriva = [3, 5, 8, 16, 20, 23, 50];
const result = [];
for (i = 0; i < arriva.length; i++) {
	result.push(arriva[i]);

}

console.log(result);
