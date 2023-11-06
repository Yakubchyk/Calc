
for (let i = 0; i < 3; i++) {
	console.log(i);
	for (let j = 0; j < 3; j++) {
		console.log(j);
	}
}

let result = '';
const lengt = 8;

for (let i = 1; i < lengt; i++) {
	for (let j = 0; j < i; j++) {
		result += '*';

	}
	result += '\n';

}

console.log(result);



first: for (let i = 0; i < 3; i++) {
	console.log(`Die Erste Level ${i}`);
	for (let j = 0; j < 3; j++) {
		console.log(`Die Zweite Level ${j}`);
		for (let k = 0; k < 3; k++) {
			if (k === 2) break first;
			console.log(`Die Drite Level ${k}`);
		}
	}
	
}


for (let i = 5; i < 11; i++) {
	console.log(i);
        
}


function thirdTask() {
	for (let i = 1; i <= 10; i++ )  {
		if (i % 2 === 0) {
			console.log(i);
		}
	}
}

// Место для первой задачи
function firstTask() {
    for (let i = 5; i < 11; i++) {
        console.log(i);
        
    }
    
    
}

// Место для второй задачи
function secondTask() {
    for (let i = 21; i > 9; i--) {
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

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }


const myArray = [1, "two", 3, "four", 5];

for (let i = 0; i < myArray.length; i++) {
  if (typeof myArray[i] === "number") {
    // Если элемент является числом, прибавляем к нему что-то
    myArray[i] += 10;
  } else if (typeof myArray[i] === "string") {
    // Если элемент является строкой, добавляем еще строку
    myArray[i] += " additional";
  }
}

console.log(myArray);


    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    
    for (i = 0; i < data.length; i++) {
        if (typeof data[i] === 'number') {
            data[i] *= 2;
        } else if (typeof data[i] === 'string') {
            data[i] += '--done';
            }
        }
		console.log(data);

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (let i = data.length - 1; i >= 0; i--) {
  result.push(data[i]);
}

console.log(result);


// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);
    }

    // Не трогаем
    return result;
}

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'number') {
            data[i] *= 2;
        } else if (typeof data[i] === 'string') {
            data[i] += ' - done';
        }
    }
    
    // Не трогаем
    return data;
}

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    
    for (let i = data.length - 1; i >= 0; i--) {
        result.push(data[i]);
        
    }
        

    // Не трогаем
    return result;
}


const lines = 5;
let result = '';

for (let i = 1; i <= lines; i++) {
    let sterke = ' '.repeat(lines - i) + '*'.repeat(2 * i - 1); 
    result += sterke + '\n';
}
console.log(result); 



const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)