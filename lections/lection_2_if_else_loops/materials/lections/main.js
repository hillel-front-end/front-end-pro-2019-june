/*
    +
    bool
    typeof
    isNaN()
    logical operators [>,<, >=, <=, ==, ====, !] 
    if else
    logical and or, 
    if else else if // at home
    тернарный оператор ? // at home
    циклы основы
    while () {}
    do {} while()
    for(){}
*/

// personAge = +prompt('Input Age');

// console.log(personAge, 'personAge');

// console.log(typeof personAge, 'personAge');

// nan = 'asdasd123123';

// console.log(isNaN(nan), 'isNaN');


//----------    logical operators [>,<, >=, <=, ==, ====, !] 
 
a = 10, b = 20, c = 0;

console.log('a = ' + a, 'b = ' + b);

console.log(a > b, 'a > b');

console.log(a < b, 'a < b');

console.log(a >= b, 'a >= b');

console.log(a <= b, 'a <= b');

a = '12', b = 12;
console.log(a == b, 'a == b')

console.log(a === b, 'a === b');

// login = prompt('Input login');
// password = prompt()

// if (login) {
//     console.log('working');
// } else {
//     console.log('wolk...');
// }

// age = prompt('Input Person Age');
// personName =  prompt('Input Person Age');
// if (age >= 18) {
//     console.log('watching');
// } else {
//     console.log('walk');
// }

// if (age >= 18 || age <= 30) {
//     console.log('watching');
// } else {
//     console.log('walk');
// }

// if (age || personName) {
//     console.log('watching');
// } else {
//     console.log('walk');
// }

// if ((age >= 18 && age <= 30) || age > 18 ) {
//     console.log('watching');
// } else {
//     console.log('walk');
// }

/*
    Числа	Все true, кроме 0, NaN -- false.
    Строки	Все true, кроме пустой строки "" -- false
 */

 console.log(!true);
 console.log(!'');
 console.log(!' ');
 console.log(!'false');
 console.log(!!'213');

 //------ loop
i = 1;
document.write('Список:' );
document.write('<br />');

 do {
    document.write('<div>' + i + '</div>' );
    // i += 1;
    // i = i + 1
    i++;
    // console.log(i, 'i')
    // ++i;
 } while(i < 10)


console.log(i, )
 while(i < 10) {
     i++;
     console.log('To DO' + i);
 }

// from = +prompt('from');
to = +prompt('to');
sum = 0;

 for (i = 1; i < 10; i++) {
    sum  = sum + i;
 }

 console.log(sum, 'sum');

 personOne = prompt('возраст') + ' ' + prompt('фамилия') + ' ' + prompt('имя')

document.write('1. ' + personOne);


console.log(parseInt(personOne))
