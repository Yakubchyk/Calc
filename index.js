/*
const meinGeburtstag = '13.07.1978';
let hello = 'Hello world';
let str = 'Привет';
let phrase = `Обратные ковычки позволяют вставлять переменные типа ${str}`;
let gramm = prompt('Сколько вешать в граммах', 100);
let ichBinBoss = confirm('Ты тут Босс?');
alert( ichBinBoss );

alert(`Калбасы: ${gramm} грамм.`);



console.log('Результат:', meinGeburtstag);

let DieName = prompt('Ваше имя: ', ' ');
alert(DieName);
*/
/*
let x = 1;
x = -x;
alert( x );
*/
/*
let a, b, c 
a = b = c = 3+3;

c = 5 * (a +b +c);
alert(c);
*/
/*
let value = true;
alert(typeof value);

value = String(value);
alert(typeof value);

*/
/*
//Остаток от деления
alert(5 % 2);
alert(8 % 3);
alert(8 % 4);

//Возведение в степень
alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16
*/
/*
let n = 2;
n += 5; // теперь n = 7 (работает как n = n + 5)
n *= 2; // теперь n = 14 (работает как n = n * 2)

alert( n ); // 14
*/

/*
let x = prompt('Введите число Х: ');
let y = prompt('Введите число Y: ');
let z = y * x;
alert(z);
*/

/*
//Условные операторы

// Логика типа if else else if;

let GD = prompt('Mein Geburtstag: ');
if (GD == 13){
     alert('Правильно');
}
else if (GD > 13){
    alert('Это поздновато...');

}
else if (GD < 13){
    alert('Это рано.');
} 
else {
    alert('Не правильно');
} 

let accessAllowed;
let age = prompt('Сколько Вам лет: ', '');

if (age > 18) {
    accessAllowed = true;
} 
else {
    accessAllowed = false;
}

alert(accessAllowed);


*/
/*
'use script';

let vosrast = prompt('Age?', 18);

let message = (vosrast < 3) ? 'Junge!' :
(vosrast > 18) ? 'Hello!' : 
(vosrast > 100) ? 'Guten tag!' : 
'Abrrrrrr!';

alert(message);

/*
result = a || b; // или или
a && b // и 
! // не
?? //нулевое слияние
??= //нулевое присваивание
*/

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    if (number <= 3) {
      return true;
    }
  
    if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }
  
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
    }
  
    return true;
  }
  
    function countPrimes() {
    const numberInput = document.getElementById("numberInput");
    const resultElement = document.getElementById("result");
    const primeListElement = document.getElementById("primeList");
    const userNumber = parseInt(numberInput.value);
  
    if (isNaN(userNumber) || userNumber <= 0) {
      resultElement.textContent = "Введите положительное натуральное число.";
      primeListElement.innerHTML = ""; // Очищаем список простых чисел
      return;
    }
  
    let count = 0;
    const primeNumbers = [];
  
    for (let i = 1; i <= userNumber; i++) {
      if (isPrime(i)) {
        count++;
        primeNumbers.push(i);
      }
    }
  
    resultElement.textContent = `В диапазоне от 1 до ${userNumber} есть ${count} простых чисел.`;
  
    // Выводим простые числа на страницу
    primeListElement.innerHTML = primeNumbers.map(number => `<li>${number}</li>`).join("");
  }
  