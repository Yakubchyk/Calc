function checkAge() {
    if (age >= 18){
        return true;
    }
    else {
        return confirm('Nein!');
    }
}

let age = prompt('Сколько Вам лет?', 18);

if ( checkAge(age) ) {
    alert('Ja!');

} else {
    alert('Nein!');
}
